(ns tattoo.core
  (:require [cljsjs.snapsvg :as svg]))

(def split-angle 0.1)

(def grid 150)

(def Dtheta (* 0.666 Math/PI))


(defonce svg (js/Snap "100%" 600))

(defn log [& args]
  (.apply js/console.log js/console (clj->js args))
  (last args))

(defn norm
  "Length of a cartesian line segment."
  [[a b]]
  (.sqrt js/Math (+ (.pow js/Math (- (:y b) (:y a)) 2)
                    (.pow js/Math (- (:x b) (:x a)) 2))))

(defn midpoint
  "Midpoint of two cartesian points, weighted by their scales."
  [a b]
  (let [s (+ (:scale a) (:scale b))]
    {:x (/ (+ (* (:scale a) (:x a)) (* (:scale b) (:x b))) s)
     :y (/ (+ (* (:scale a) (:y a)) (* (:scale b) (:y b))) s)}))

(defn centroid
  [])

(defn between-boxes
  "Returns a point halfway between two SVG elements' bounding boxes, as an {:x
  :y} map."
  [a b]
  (let [ba (js->clj (.getBBox a))
        bb (js->clj (.getBBox b))]
    {:x (/ (+ (:cx ba) (:cx bb)) 2)
     :y (/ (+ (:cy ba) (:cy bb)) 2)}))

(defn svg->point
  "Turns an SVG object into a {:x, :y} point."
  [s]
  (let [b (js->clj (.getBBox s))]
    {:x (:cx b)
     :y (:cy b)}))

(defn point-line-distance
  "Yields the distance from a point to a cartesian line."
  [point [a b]]
  (let [x0 (:x point)
        y0 (:y point)
        x1 (:x a) x2 (:x b)
        y1 (:y a) y2 (:y b)]
    (/ (.abs js/Math (-> (* x0 (- y2 y1))
                         (- (* y0 (- x2 x1)))
                         (+ (* x2 y1))
                         (- (* y2 x1))))
       (.sqrt js/Math (+ (.pow js/Math (- y2 y1) 2)
                         (.pow js/Math (- x2 x1) 2))))))

(defn intersection
  "Takes two lines [{:x :y} {:x :y}] and computes their intersection point {:x
  :y}"
  [[a1 a2] [b1 b2]]
  (let [x1 (:x a1), y1 (:y a1)
        x2 (:x a2), y2 (:y a2)
        x3 (:x b1), y3 (:y b1)
        x4 (:x b2), y4 (:y b2)
        denom (- (* (- x1 x2) (- y3 y4)) (* (- y1 y2) (- x3 x4)))]
    (when-not (zero? denom)
      (let [u (- (* x1 y2) (* y1 x2))
            v (- (* x3 y4) (* y3 x4))]
        {:x (/ (- (* u (- x3 x4)) (* (- x1 x2) v)) denom)
         :y (/ (- (* u (- y3 y4)) (* (- y1 y2) v)) denom)}))))

(defn cart->polar
  "Takes a pair of points [{:x :y} {:x :y}] and yields a polar line segment

  {:origin {:x :y}
  :r      radius
  :theta  theta}"
  [[a b]]
  (let [x (- (:x b) (:x a))
        y (- (:y b) (:y a))]
    {:origin a
     :r      (.sqrt js/Math (+ (* x x) (* y y)))
     :theta  (.atan2 js/Math y x)}))

(defn polar->cart
  "Takes a polar line segment and returns a pair of points."
  [{:keys [origin r theta]}]
  [origin {:x (+ (:x origin) (* r (.cos js/Math theta)))
           :y (+ (:y origin) (* r (.sin js/Math theta)))}])

(defn tip
  "Tip of a polar line segment."
  [l]
  (second (polar->cart l)))

(defn translate-to
  "Translate a polar line to a new origin."
  [l origin]
  (assoc l :origin origin))

(defn scale
  "Scale a polar line."
  [l scale]
  (update l :r * scale))

(defn scale-to
  "Set a polar line's radius to r."
  [l r]
  (assoc l :r r))

(defn rotate
  "Rotate a polar line around its origin."
  [l dtheta]
  (update l :theta + dtheta))

(defn dtheta
  "Difference in angle from b to a: two polar lines."
  [a b]
  (- (:theta a) (:theta b)))

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

(defn bisector
  "A cartesian line segment halfway between two points, weighted by point
  scales."
  [a b]
  (-> [a b]
      cart->polar
      (rotate (/ Math/PI 2))
      (assoc :origin (midpoint a b))
      polar->cart))

(defn ids
  "Assign unique numbers to all tree nodes."
  ([t] (ids t -1))
  ([t id]
   (if-let [children (seq (:children t))]
     (let [children (reduce (fn [children child]
                              (conj children (ids child (:id (peek children)))))
                            [(ids (first children) id)]
                            (next children))]
       (-> t
           (assoc :children children)
           (assoc :id (inc (:id (peek children))))))
     ; We're a leaf
     (assoc t :id (inc id)))))

(defn with-relationships
  "Given a node, augments its children with :parent, :before,
  and :after siblings."
  [t]
  (->> (concat [nil] (:children t) [nil])
       (partition 3 1)
       (map (fn [[before c after]]
              (assoc c
                     :parent t
                     :before before
                     :after after)))
       (assoc t :children)))

(defn without-relationships
  "Strips relationships off of a node."
  [t]
  (dissoc t :parent :before :after))

(defn parent-distance
  "Adds the distance to the parent (or if no parent, to the farthest child: a
  characteristic metric."
  [t]
  (assoc t :parent-distance
         (if-let [p (:parent t)]
           (norm [p t])
           (reduce max (map (comp norm (partial vector t)) (:children t))))))

(defn base
  "Computes the base of a node."
  [t]
  (if (:parent t)
    ; Well that's easy
    (assoc t :base (bisector t (:parent t)))
    ; Compute angles to children
    (let [theta1 (-> [t (first (:children t))]
                     cart->polar
                     :theta)
          theta2 (-> [t (last (:children t))]
                     cart->polar
                     :theta)
          ; Average and flip
          theta  (+ Math/PI (/ (+ theta1 theta2) 2))
          ; Distance to base governed by mean distance to children
          r      (-> (->> (:children t)
                          (map (comp norm (partial vector t)))
                          (reduce +))
                     (/ (count (:children t)))
                     (/ 2))
          midline {:origin t, :theta theta, :r r}
          midpoint (-> midline polar->cart second)]
      (assoc t :base (-> midline
                         (translate-to midpoint)
                         (rotate (/ Math/PI 2))
                         polar->cart)))))

(defn internal-side
  "Lays out an internal side for a node and its neighbor, given a directional
  coefficient of -1 or +1."
  [t n dir]
  (when n
    (let [line (bisector n t)]
      (-> line
          cart->polar
          (translate-to (intersection line (:base t)))
          (rotate (* dir split-angle))
          (scale-to (point-line-distance t (:base t)))
          (scale (- dir))
          polar->cart))))

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
                   cart->polar
                   (scale-to (/ (point-line-distance t (:base t)) 2 dir))
                   polar->cart
                   second)]
    (-> (:base t)
        cart->polar
        (translate-to corner)
        (rotate (* Math/PI dir 2 (/ 5 3)))
        (scale (- dir))
        polar->cart)))

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
                              (intersection (:base t) l)
                              (first (:base t))))
      (assoc :base-corner-2 (if-let [l (or (:base (:after t))
                                           (:side2 (:parent t))
                                           (:side2 t))]
                              (intersection (:base t) l)
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
                   (norm (if (= :side1 side)
                           [(second (:base neighbor))
                            (second (:base (last (:children neighbor))))]
                           [(first (:base neighbor))
                            (first (:base (first (:children neighbor))))]))
                   ; Fall back to baseline distance.
                   (-> (point-line-distance t (:base t))
                       (* 7)
                       (/ 3)))]
    (assoc t side
           (if (seq (:children t))
             ; Bounded by child bases
             [(corner t) (corner child)]

             ; Free side
             (-> (side t)
                 cart->polar
                 (translate-to (corner t))
                 (scale-to scale)
                 polar->cart)))))

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
               cart->polar
               (translate-to (second (side t)))
               (rotate angle)
               polar->cart))))

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
    (assoc t :apex (intersection (:cap1 t) (:cap2 t)))))

(defn refine-caps
  "Pins caps to apex"
  [t]
  (if (seq (:children t))
    t
    (-> t
        (assoc-in [:cap1 1] (:apex t))
        (assoc-in [:cap2 1] (:apex t)))))

(defn recurse
  "Lays out children using f."
  [t f]
  (-> t
      with-relationships
      (update :children (partial map f))
      without-relationships))

(defn layout-0
  [t]
  (-> t
      parent-distance
      base
      internal-sides
      (recurse layout-0)))

(defn layout-1
  [t]
  (-> t
      external-sides
      base-corners
      refine-base
      (recurse layout-1)))

(defn layout-2
  [t]
  (-> t
      refine-sides
      caps
      apex
      refine-caps
      (recurse layout-2)))

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

(defn sexp->tree
  "Converts sexprs to a tree."
  [sexp]
  (if (coll? sexp)
    {:symbol   (first sexp)
     :children (map sexp->tree (rest sexp))}
    {:symbol sexp}))

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
                                           polar->cart
                                           second))))))
                      (assoc t :children))]
    (recurse t initial-coords)))


(defn tree->dtree
  "Turns a tree into a dynamic tree with atoms for :x and :y coords."
  [t]
  (-> t
      (update :x atom)
      (update :y atom)
      (recurse tree->dtree)))

(defn dtree->tree
  "Turns a dynamic tree back into a plain old static tree."
  [t]
  (-> t
      (update :x deref)
      (update :y deref)
      (recurse dtree->tree)))

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
                    dtree->tree
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
                 sexp->tree
                 initial-coords
                 ids)
        dtree (tree->dtree tree)]
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
