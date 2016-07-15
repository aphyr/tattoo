(ns tattoo.geometry
  (:require [clojure.set :as set]))

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

(defn poly-edges
  "Turns a polygon (a sequence of vertices) into a sequence of cartesian line
  segments."
  [poly]
  (->> poly
       (concat (list (last poly)))
       (partition 2 1)))

(defn poly-glue
  "Takes two polygons sharing a single face and stitches them together into a
  single polygon."
  [a b]
  (let [seam (set/intersection (set a) (set b))]
    (assert (= 2 (count seam)))
    (let [a' (->> (cycle a)
                  ; Advance until we're in the seam
                  (drop-while (complement seam))
                  ; Advance until we're *no longer* on the seam
                  (drop-while seam)
                  ; Take the path up to the first seam node
                  (take (dec (count a))))
          b' (->> (cycle b)
                  (drop-while (complement seam))
                  (drop-while seam)
                  (take (dec (count b))))]
      (concat a' b'))))

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

(defn segment-intersection
  "Returns intersection of two cartesian line segments, or nil if they do not
  intersect."
  [a b]
  (log :a (pr-str a) :b (pr-str b))
  (let [i (intersection a b)]
    (log :intersection i)
    (when (<= (first a) (first i) (first b) i))))

(defn point-in-poly?
  "Given a cartesian point and a cartesian polygon (a sequence of cartesian
  points), returns whether the point is in the polygon.

  Gonna do the inexact ray-casting algorithm here because we're not concerned
  with points on edges."
  [point poly]
  (log :point-in-poly (pr-str [(:x point) (:y point)]) (pr-str poly))
  ; Cast ray in +y
  (let [ray [(select-keys point [:x :y]) {:x (:x point) :y 100000}]]
    (->> (poly-edges poly)
         (keep (partial segment-intersection ray))
         (log :intersections)
         count
         odd?)))

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

(defn bisector
  "A cartesian line segment halfway between two points, weighted by point
  scales."
  [a b]
  (-> [a b]
      cart->polar
      (rotate (/ Math/PI 2))
      (assoc :origin (midpoint a b))
      polar->cart))
