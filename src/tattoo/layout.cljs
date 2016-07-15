(ns tattoo.layout
  (:require [tattoo.geometry :as g]
            [tattoo.tree :as t]
            [tattoo.voronoi :as v]))

(defn log [& args]
    (.apply js/console.log js/console (clj->js args))
      (last args))

(defn associate-with-cells
  "Takes a tree and an atom containing a set of cells, and returns the
  tree with :cell fields for the enclosing cell."
  [t cells]
  (let [cell (first (filter (partial g/point-in-poly? t) @cells))]
    (assert cell)
    (swap! cells disj cell)
    (update t :children (partial map #(associate-with-cells % cells)))))

(defn parse-cell
  "Turn [x y] points in a cell to {:x :y}."
  [cell]
  (map (fn [[x y]] {:x x :y y}) cell))

(defn with-cells
  "Takes a tree and adds a :cell for each node."
  [t]
  (->> t
       t/flat
       (map (juxt :x :y))
       v/diagram
       :cells
       (map parse-cell)
       atom
       (associate-with-cells t)))

(defn layout
  [t]
  (log (with-cells t)))

