(ns tattoo.core
  (:require [tattoo.geometry :as g]
            [tattoo.tree :as t]
            [cljsjs.snapsvg :as svg]))

(def split-angle 0.1)

(def grid 150)

(def Dtheta (* 0.666 Math/PI))

(defonce svg (js/Snap "100%" 600))

(defn log [& args]
  (.apply js/console.log js/console (clj->js args))
  (last args))

(defn add-circle!
  [s point opts]
  (doto (.circle s (:x point) (:y point) 10)
    (.attr (clj->js opts))))

(defn add-line!
  ([s [a b]]
   (.line s (:x a) (:y a) (:x b) (:y b)))
  ([s line opts]
   (doto (add-line! s line)
     (.attr (clj->js opts)))))

(defn parent-distance
  "Adds the distance to the parent (or if no parent, to the farthest child: a
  characteristic metric."
  [t]
  (assoc t :parent-distance
         (if-let [p (:parent t)]
           (g/norm [p t])
           (reduce max (map (comp g/norm (partial vector t)) (:children t))))))

(defn base
  "Computes the base of a node."
  [t]
  (if (:parent t)
    ; Well that's easy
    (assoc t :base (g/bisector t (:parent t)))
    ; Compute angles to children
    (let [theta1 (-> [t (first (:children t))]
                     g/cart->polar
                     :theta)
          theta2 (-> [t (last (:children t))]
                     g/cart->polar
                     :theta)
          ; Average and flip
          theta  (+ Math/PI (/ (+ theta1 theta2) 2))
          ; Distance to base governed by mean distance to children
          r      (-> (->> (:children t)
                          (map (comp g/norm (partial vector t)))
                          (reduce +))
                     (/ (count (:children t)))
                     (/ 2))
          midline {:origin t, :theta theta, :r r}
          midpoint (-> midline g/polar->cart second)]
      (assoc t :base (-> midline
                         (g/translate-to midpoint)
                         (g/rotate (/ Math/PI 2))
                         g/polar->cart)))))

(defn internal-side
  "Lays out an internal side for a node and its neighbor, given a directional
  coefficient of -1 or +1."
  [t n dir]
  (when n
    (let [line (g/bisector n t)]
      (-> line
          g/cart->polar
          (g/translate-to (g/intersection line (:base t)))
          (g/rotate (* dir split-angle))
          (g/scale-to (g/point-line-distance t (:base t)))
          (g/scale (- dir))
          g/polar->cart))))

(defn internal-sides
  "Lays out internal sides."
  [t]
  (-> t
      (assoc :side1 (internal-side t (:before t) -1))
      (assoc :side2 (internal-side t (:after t) 1))))

(defn external-side
  "Returns a side to a node, given a directional coefficient: -1 or +1."
  [t dir]
  ; Rotate from base to form a pentagonal corner
  (let [corner (-> (:base t)
                   g/cart->polar
                   (g/scale-to (/ (g/point-line-distance t (:base t)) 2 dir))
                   g/polar->cart
                   second)]
    (-> (:base t)
        g/cart->polar
        (g/translate-to corner)
        (g/rotate (* Math/PI dir 2 (/ 5 3)))
        (g/scale (- dir))
        g/polar->cart)))

(defn external-sides
  "Adds external sides to a node."
  [t]
  (-> t
      (assoc :side1 (or (:side1 t) (external-side t -1)))
      (assoc :side2 (or (:side2 t) (external-side t  1)))))

(defn base-corners
  "Given a node, computes base corners based on the intersection of nearby
  bases OR bases with parent sides OR own sides."
  [t]
  (-> t
      (assoc :base-corner-1 (if-let [l (or (:base (:before t))
                                           (:side1 (:parent t))
                                           (:side1 t))]
                              (g/intersection (:base t) l)
                              (first (:base t))))
      (assoc :base-corner-2 (if-let [l (or (:base (:after t))
                                           (:side2 (:parent t))
                                           (:side2 t))]
                              (g/intersection (:base t) l)
                              (second (:base t))))))

(defn refine-base
  "Constrains base to base corners."
  [t]
  (-> t (assoc :base [(:base-corner-1 t) (:base-corner-2 t)])))

(defn refine-side
  "Constrains a side to start at the base, and to the appropriate length."
  [t side]
  (let [corner   (if (= :side1 side) :base-corner-1 :base-corner-2)
        child    (if (= :side1 side) (first (:children t)) (last (:children t)))
        neighbor (if (= :side1 side) (:before t) (:after t))
        ; If we have a neighbor with children, constrain our scale to theirs.
        scale    (if (and neighbor (seq (:children neighbor)))
                   (g/norm (if (= :side1 side)
                           [(second (:base neighbor))
                            (second (:base (last (:children neighbor))))]
                           [(first (:base neighbor))
                            (first (:base (first (:children neighbor))))]))
                   ; Fall back to baseline distance.
                   (-> (g/point-line-distance t (:base t))
                       (* 7)
                       (/ 3)))]
    (assoc t side
           (if (seq (:children t))
             ; Bounded by child bases
             [(corner t) (corner child)]

             ; Free side
             (-> (side t)
                 g/cart->polar
                 (g/translate-to (corner t))
                 (g/scale-to scale)
                 g/polar->cart)))))

(defn refine-sides
  "Constrains sides to base and to appropriate lengths."
  [t]
  (-> t
      (refine-side :side1)
      (refine-side :side2)))

(defn cap
  "Constructs a particular cap based on side"
  [t side]
  (let [angle (if (or (and (= side :side1) (:before t))
                      (and (= side :side2) (:after t)))
                (- (/ Math/PI 2) split-angle)
                (/ Math/PI (/ 6 3)))
        angle (if (= side :side1) (- angle) angle)]
    (assoc t (if (= side :side1) :cap1 :cap2)
           (-> (side t)
               g/cart->polar
               (g/translate-to (second (side t)))
               (g/rotate angle)
               g/polar->cart))))

(defn caps
  "Adds caps to open nodes."
  [t]
  (if (seq (:children t))
    t
    (-> t (cap :side1) (cap :side2))))

(defn apex
  "Computes the apex of a node."
  [t]
  (if (seq (:children t))
    t
    (assoc t :apex (g/intersection (:cap1 t) (:cap2 t)))))

(defn refine-caps
  "Pins caps to apex"
  [t]
  (if (seq (:children t))
    t
    (-> t
        (assoc-in [:cap1 1] (:apex t))
        (assoc-in [:cap2 1] (:apex t)))))

(defn layout-0
  [t]
  (-> t
      parent-distance
      base
      internal-sides
      (t/recurse layout-0)))

(defn layout-1
  [t]
  (-> t
      external-sides
      base-corners
      refine-base
      (t/recurse layout-1)))

(defn layout-2
  [t]
  (-> t
      refine-sides
      caps
      apex
      refine-caps
      (t/recurse layout-2)))

(defn layout
  "All layout passes"
  [t]
  (-> t
      layout-0
      layout-1
      layout-2
      ))

(defn render!
  "Renders a tree once laid out."
  [t s]
  (when-let [l (:base t)] (add-line! s l {:stroke "#666" :strokeWidth 1}))
  (when-let [l (:side1 t)] (add-line! s l {:stroke "#666" :strokeWidth 1}))
  (when-let [l (:side2 t)] (add-line! s l {:stroke "#666" :strokeWidth 1}))
  (when-let [l (:cap1 t)] (add-line! s l {:stroke "#666" :strokeWidth 1}))
  (when-let [l (:cap2 t)] (add-line! s l {:stroke "#666" :strokeWidth 1}))

  (doseq [c (:children t)]
    (render! c s))
  t)

(defn initial-coords
  "Augments a tree by adding coordinates and scales to each node."
  [t]
  (let [theta    (or (:theta t) (/ Math/PI 2))
        scale    (if-let [p (:parent t)] (* 2 (:scale p)) 1)
        x        (or (:x t) (* 3 grid))
        y        (or (:y t) (/ grid 2))
        t        (assoc t :x x, :y y, :scale scale)
        t        (->> (:children t)
                      (map-indexed
                        (fn [i c]
                          (let [theta (-> i
                                          (+ 0.5)
                                          (/ (count (:children t)))
                                          (- 0.5)
                                          (* Dtheta)
                                          -
                                          (+ theta))]
                            (-> c
                                (assoc :theta theta)
                                (merge (-> {:origin t
                                            :r      (/ grid scale)
                                            :theta  theta}
                                           g/polar->cart
                                           second))))))
                      (assoc t :children))]
    (t/recurse t initial-coords)))

(defn render-control-points!
  "Renders control points for dtree nodes."
  ([t s]
   (render-control-points! t t s))
  ([t top s]
   (let [dx (:x t)
         dy (:y t)
         p (add-circle! s {:x @dx, :y @dy} {:fill "#aaa"})]
     (.drag p
            (fn move [x y event]
              ; Shift control point
              (let [ot (.data p "origTransform")]
                ; Apply transform
                (.transform p (str ot (if ot "T" "t") x "," y))

                ; Read off coordinates and update dtree
                (let [b (.getBBox p)]
                  (reset! dx (.-cx b))
                  (reset! dy (.-cy b)))

                ; Wipe canvas
                (.forEach (.selectAll s "line") #(.remove %))

                ; Rebuild tree and render
                (-> top
                    t/dtree->tree
                    layout
                    (render! s))))
            (fn start []
              (.data p "origTransform", (.-local (.transform p))))))

   (doseq [c (:children t)]
     (render-control-points! c top s))
   t))

(defn init!
  "Sets up scene on an SVG element"
  [s tree]
  (let [tree (-> tree
                 t/sexp->tree
                 initial-coords
                 t/ids)
        dtree (t/tree->dtree tree)]
    (render-control-points! dtree s)
    (render! (layout tree) s)))

(defn refresh!
  "Resets scene."
  []
  (.clear svg)
  (init! svg '(= alpha
                 (/ (* k (pow e 2)) (* hbar c))
                 (oct 2 1 1))))

(refresh!)
