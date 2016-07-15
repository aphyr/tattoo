(ns tattoo.tree)

(defn log [& args]
  (.apply js/console.log js/console (clj->js args))
  (last args))

(defn flat
  "Flat sequence of nodes."
  [t]
  (lazy-seq (cons t (mapcat flat (:children t)))))

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

(defn recurse
  "Lays out children using f."
  [t f]
  (-> t
      with-relationships
      (update :children (partial mapv f))
      without-relationships))

(defn sexp->tree
  "Converts sexprs to a tree."
  [sexp]
  (if (coll? sexp)
    {:symbol   (first sexp)
     :children (map sexp->tree (rest sexp))}
    {:symbol sexp}))

(defn tree->dtree
  "Turns a tree into a dynamic tree with atoms for :x and :y coords, and for
  each corner point."
  ([t]
   (tree->dtree (atom {}) t))
  ([corners t]
   (-> t
       (update :x atom)
       (update :y atom)
       (update :corners
               (partial map
                        (fn [c]
                          (-> corners
                              (swap! (fn [corners]
                                       (if (get corners c)
                                         corners
                                         (assoc corners c (atom c)))))
                              (get c)))))
       (update :children (partial map (partial tree->dtree corners))))))

(defn dtree->tree
  "Turns a dynamic tree back into a plain old static tree."
  [t]
  (-> t
      (update :x deref)
      (update :y deref)
      (update :corners (partial map deref))
      (recurse dtree->tree)))
