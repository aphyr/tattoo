// Compiled by ClojureScript 1.9.36 {}
goog.provide('tattoo.tree');
goog.require('cljs.core');
tattoo.tree.log = (function tattoo$tree$log(var_args){
var args__22756__auto__ = [];
var len__22749__auto___24905 = arguments.length;
var i__22750__auto___24906 = (0);
while(true){
if((i__22750__auto___24906 < len__22749__auto___24905)){
args__22756__auto__.push((arguments[i__22750__auto___24906]));

var G__24907 = (i__22750__auto___24906 + (1));
i__22750__auto___24906 = G__24907;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return tattoo.tree.log.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

tattoo.tree.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
console.log.apply(console,cljs.core.clj__GT_js.call(null,args));

return cljs.core.last.call(null,args);
});

tattoo.tree.log.cljs$lang$maxFixedArity = (0);

tattoo.tree.log.cljs$lang$applyTo = (function (seq24904){
return tattoo.tree.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24904));
});

/**
 * Assign unique numbers to all tree nodes.
 */
tattoo.tree.ids = (function tattoo$tree$ids(var_args){
var args24908 = [];
var len__22749__auto___24911 = arguments.length;
var i__22750__auto___24912 = (0);
while(true){
if((i__22750__auto___24912 < len__22749__auto___24911)){
args24908.push((arguments[i__22750__auto___24912]));

var G__24913 = (i__22750__auto___24912 + (1));
i__22750__auto___24912 = G__24913;
continue;
} else {
}
break;
}

var G__24910 = args24908.length;
switch (G__24910) {
case 1:
return tattoo.tree.ids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tattoo.tree.ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24908.length)].join('')));

}
});

tattoo.tree.ids.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tattoo.tree.ids.call(null,t,(-1));
});

tattoo.tree.ids.cljs$core$IFn$_invoke$arity$2 = (function (t,id){
var temp__4655__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t));
if(temp__4655__auto__){
var children = temp__4655__auto__;
var children__$1 = cljs.core.reduce.call(null,((function (children,temp__4655__auto__){
return (function (children__$1,child){
return cljs.core.conj.call(null,children__$1,tattoo.tree.ids.call(null,child,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,children__$1))));
});})(children,temp__4655__auto__))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tattoo.tree.ids.call(null,cljs.core.first.call(null,children),id)], null),cljs.core.next.call(null,children));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"children","children",-940561982),children__$1),new cljs.core.Keyword(null,"id","id",-1388402092),(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,children__$1)) + (1)));
} else {
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"id","id",-1388402092),(id + (1)));
}
});

tattoo.tree.ids.cljs$lang$maxFixedArity = 2;

/**
 * Given a node, augments its children with :parent, :before,
 *   and :after siblings.
 */
tattoo.tree.with_relationships = (function tattoo$tree$with_relationships(t){
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.call(null,(function (p__24919){
var vec__24920 = p__24919;
var before = cljs.core.nth.call(null,vec__24920,(0),null);
var c = cljs.core.nth.call(null,vec__24920,(1),null);
var after = cljs.core.nth.call(null,vec__24920,(2),null);
return cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"parent","parent",-878878779),t,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"after","after",594996914),after);
}),cljs.core.partition.call(null,(3),(1),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))));
});
/**
 * Strips relationships off of a node.
 */
tattoo.tree.without_relationships = (function tattoo$tree$without_relationships(t){
return cljs.core.dissoc.call(null,t,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"after","after",594996914));
});
/**
 * Lays out children using f.
 */
tattoo.tree.recurse = (function tattoo$tree$recurse(t,f){
return tattoo.tree.without_relationships.call(null,cljs.core.update.call(null,tattoo.tree.with_relationships.call(null,t),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.partial.call(null,cljs.core.map,f)));
});
/**
 * Converts sexprs to a tree.
 */
tattoo.tree.sexp__GT_tree = (function tattoo$tree$sexp__GT_tree(sexp){
if(cljs.core.coll_QMARK_.call(null,sexp)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.core.first.call(null,sexp),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.call(null,tattoo$tree$sexp__GT_tree,cljs.core.rest.call(null,sexp))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),sexp], null);
}
});
/**
 * Turns a tree into a dynamic tree with atoms for :x and :y coords.
 */
tattoo.tree.tree__GT_dtree = (function tattoo$tree$tree__GT_dtree(t){
return tattoo.tree.recurse.call(null,cljs.core.update.call(null,cljs.core.update.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.atom),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.atom),tattoo$tree$tree__GT_dtree);
});
/**
 * Turns a dynamic tree back into a plain old static tree.
 */
tattoo.tree.dtree__GT_tree = (function tattoo$tree$dtree__GT_tree(t){
return tattoo.tree.recurse.call(null,cljs.core.update.call(null,cljs.core.update.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.deref),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.deref),tattoo$tree$dtree__GT_tree);
});

//# sourceMappingURL=tree.js.map?rel=1468210405562