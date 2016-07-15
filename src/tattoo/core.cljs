(ns tattoo.core
  (:require [tattoo.geometry :as g]
            [tattoo.tree :as t]
            [tattoo.layout :as l]
            [tattoo.layout-split :as ls]
            [clojure.string :as str]
            [cljsjs.snapsvg :as svg]))

(def grid 150)

(def Dtheta (* 0.666 Math/PI))

(defonce svg (js/Snap "100%" 600))

(defonce save
  (let [button (.createElement js/document "input")]
    (set! (.-type button) "button")
    (set! (.-value button) "save")
    (.appendChild (.-body js/document) button)))

(defn log [& args]
  (.apply js/console.log js/console (clj->js args))
  (last args))

(defn add-circle!
  [s point opts active-opts]
  (let [c (.circle s (:x point) (:y point) 10)]
    (.attr c (clj->js opts))
    (.hover c
            (fn [] (.attr c (clj->js (merge opts active-opts))))
            (fn [] (.attr c (clj->js opts))))
    c))

(defn add-line!
  ([s [a b]]
   (.line s (:x a) (:y a) (:x b) (:y b)))
  ([s line opts]
   (doto (add-line! s line)
     (.attr (clj->js opts)))))

(defn render!
  "Renders a tree once laid out."
  [t s]
  (doseq [edge (g/poly-edges (:corners t))]
    (let [l (add-line! s edge {:stroke "#333" :strokeWidth 2})]
      (.prepend s l)))

  (let [;size   (/ grid (:scale t))
        size   (if-let [p (:parent t)]
                 (->> (:parent t)
                      :children
                      (mapcat (juxt :base :side1 :side2 :cap1 :cap2))
                      (remove nil?)
                      (map g/norm)
                      (reduce min))
                 (* 1.4 (g/norm (:base (:parent t t)))))
        offset (- (* 0.5 size))
        glyph (str "glyphs/" (:symbol t) ".svg")
        image  (.image s glyph
                       (+ offset (:x t))
                       (+ offset (:y t))
                       size
                       size)]
    (.attr image (clj->js {:hi "there" (keyword "xlink:href") glyph}))
    (.prepend s image))

  (let [t' (t/recurse t #(render! % s))]
    (when-not (:parent t)
      ; Root node; render the entire polygon for a shadow
      (let [poly (->> t
                      t/flat
                      (map :corners)
                      (reduce g/poly-glue)
                      (mapcat (juxt :x :y))
                      (clj->js)
                      (.polygon s))
            shadow (-> js/Snap .-filter (.shadow 0 0 3))
            filter (.filter s shadow)]
        (.attr poly (clj->js {:filter filter
                              :fill "#fff"}))
        (.prepend s poly)))
    t'))

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

(defn render-corner-points!
  "Renders control points for corners."
  ([t s]
   (render-corner-points! t t (atom #{}) s))
  ([t top done s]
   (doseq [c (:corners t)]
     (when-not (@done c)
       (swap! done conj c)
       (let [p (add-circle! s @c {:fill "#ccc"
                                  :opacity 0
                                  :class "corner"}
                            {:opacity 1})]
         (.drag p
                (fn move [x y event]
                  ; Shift control point
                  (let [ot (.data p "origTransform")]
                    ; Apply transform
                    (.transform p (str ot (if ot "T" "t") x "," y))

                    ; Read off coordinates and update dtree
                    (let [b (.getBBox p)]
                      (reset! c {:x (.-cx b), :y (.-cy b)}))

                    ; Wipe canvas
                    (.forEach (.selectAll s "line") #(.remove %))
                    (.forEach (.selectAll s "filter") #(.remove %))
                    (.forEach (.selectAll s "image") #(.remove %))
                    (.forEach (.selectAll s "polygon") #(.remove %))

                    ; Rebuild tree and render
                    (-> top
                        t/dtree->tree
                        (render! s))))
                (fn start []
                  (.data p "origTransform", (.-local (.transform p))))))))

   (doseq [c (:children t)]
     (render-corner-points! c top done s))

   t))

(defn render-control-points!
  "Renders control points for dtree nodes."
  ([t s]
   (render-control-points! t t s))
  ([t top s]
   (let [dx (:x t)
         dy (:y t)
         p (add-circle! s {:x @dx, :y @dy}
                        {:fill "#aaf"
                         :opacity 0}
                        {:opacity 1})]
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
                (.forEach (.selectAll s "filter") #(.remove %))
                (.forEach (.selectAll s "image") #(.remove %))
                (.forEach (.selectAll s "circle.corner") #(.remove %))
                (.forEach (.selectAll s "polygon") #(.remove %))

                ; Rebuild tree and render
                (-> top
                    t/dtree->tree
                    ls/layout
                    (render! s)
                    t/tree->dtree
                    (render-corner-points! s))))
            (fn start []
              (.data p "origTransform", (.-local (.transform p))))))

   (doseq [c (:children t)]
     (render-control-points! c top s))
   t))

(defn init!
  "Sets up scene on an SVG element"
  [s save tree]
  (let [tree (-> tree
                 t/sexp->tree
                 initial-coords
                 t/ids
                 ls/layout)
        dtree (t/tree->dtree tree)]
    (render-control-points! dtree s)
    (render-corner-points! dtree s)
    (render! tree s)

    ; SVG Xlink ns declaration
    (.attr s (clj->js {(keyword "xmlns:xlink") "http://www.w3.org/1999/xlink"}))

    ; Save button
    (set! (.-onclick save)
          (fn []
            (log (.-length (.outerSVG s)))
            (js/saveAs
              (js/Blob. (clj->js [(-> (.outerSVG s)
                                      (str/replace "/>" "/>\n")
                                      (str/replace "href=" "xlink:href="))])
                        (clj->js {:type "text/svg;charset=utf-8"}))
              "tattoo.svg")))))

(defn refresh!
  "Resets scene."
  []
  (.clear svg)
  (init! svg save '(approx= alpha
                            (div (* k (pow e 2)) (* hbar c))
                            (oct 2 1 1))))

(refresh!)
