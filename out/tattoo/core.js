// Compiled by ClojureScript 1.9.36 {}
goog.provide('tattoo.core');
goog.require('cljs.core');
goog.require('tattoo.geometry');
goog.require('tattoo.tree');
goog.require('cljsjs.snapsvg');
tattoo.core.split_angle = 0.1;
tattoo.core.grid = (150);
tattoo.core.Dtheta = (0.666 * Math.PI);
if(typeof tattoo.core.svg !== 'undefined'){
} else {
tattoo.core.svg = Snap("100%",(600));
}
tattoo.core.log = (function tattoo$core$log(var_args){
var args__22756__auto__ = [];
var len__22749__auto___25462 = arguments.length;
var i__22750__auto___25463 = (0);
while(true){
if((i__22750__auto___25463 < len__22749__auto___25462)){
args__22756__auto__.push((arguments[i__22750__auto___25463]));

var G__25464 = (i__22750__auto___25463 + (1));
i__22750__auto___25463 = G__25464;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return tattoo.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

tattoo.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
console.log.apply(console,cljs.core.clj__GT_js.call(null,args));

return cljs.core.last.call(null,args);
});

tattoo.core.log.cljs$lang$maxFixedArity = (0);

tattoo.core.log.cljs$lang$applyTo = (function (seq25461){
return tattoo.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25461));
});

tattoo.core.add_circle_BANG_ = (function tattoo$core$add_circle_BANG_(s,point,opts){
var G__25466 = s.circle(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point),(10));
G__25466.attr(cljs.core.clj__GT_js.call(null,opts));

return G__25466;
});
tattoo.core.add_line_BANG_ = (function tattoo$core$add_line_BANG_(var_args){
var args25467 = [];
var len__22749__auto___25475 = arguments.length;
var i__22750__auto___25476 = (0);
while(true){
if((i__22750__auto___25476 < len__22749__auto___25475)){
args25467.push((arguments[i__22750__auto___25476]));

var G__25477 = (i__22750__auto___25476 + (1));
i__22750__auto___25476 = G__25477;
continue;
} else {
}
break;
}

var G__25469 = args25467.length;
switch (G__25469) {
case 2:
return tattoo.core.add_line_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tattoo.core.add_line_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25467.length)].join('')));

}
});

tattoo.core.add_line_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (s,p__25470){
var vec__25471 = p__25470;
var a = cljs.core.nth.call(null,vec__25471,(0),null);
var b = cljs.core.nth.call(null,vec__25471,(1),null);
return s.line(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));
});

tattoo.core.add_line_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (s,line,opts){
var G__25474 = tattoo.core.add_line_BANG_.call(null,s,line);
G__25474.attr(cljs.core.clj__GT_js.call(null,opts));

return G__25474;
});

tattoo.core.add_line_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Adds the distance to the parent (or if no parent, to the farthest child: a
 *   characteristic metric.
 */
tattoo.core.parent_distance = (function tattoo$core$parent_distance(t){
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"parent-distance","parent-distance",-44762816),(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(temp__4655__auto__)){
var p = temp__4655__auto__;
return tattoo.geometry.norm.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,t], null));
} else {
return cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.comp.call(null,tattoo.geometry.norm,cljs.core.partial.call(null,cljs.core.vector,t)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t)));
}
})());
});
/**
 * Computes the base of a node.
 */
tattoo.core.base = (function tattoo$core$base(t){
if(cljs.core.truth_(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(t))){
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"base","base",185279322),tattoo.geometry.bisector.call(null,t,new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(t)));
} else {
var theta1 = new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(tattoo.geometry.cart__GT_polar.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.first.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t))], null)));
var theta2 = new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(tattoo.geometry.cart__GT_polar.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.last.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t))], null)));
var theta = (Math.PI + ((theta1 + theta2) / (2)));
var r = ((cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.comp.call(null,tattoo.geometry.norm,cljs.core.partial.call(null,cljs.core.vector,t)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t))) / cljs.core.count.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t))) / (2));
var midline = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"origin","origin",1037372088),t,new cljs.core.Keyword(null,"theta","theta",-427510258),theta,new cljs.core.Keyword(null,"r","r",-471384190),r], null);
var midpoint = cljs.core.second.call(null,tattoo.geometry.polar__GT_cart.call(null,midline));
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"base","base",185279322),tattoo.geometry.polar__GT_cart.call(null,tattoo.geometry.rotate.call(null,tattoo.geometry.translate_to.call(null,midline,midpoint),(Math.PI / (2)))));
}
});
/**
 * Lays out an internal side for a node and its neighbor, given a directional
 *   coefficient of -1 or +1.
 */
tattoo.core.internal_side = (function tattoo$core$internal_side(t,n,dir){
if(cljs.core.truth_(n)){
var line = tattoo.geometry.bisector.call(null,n,t);
return tattoo.geometry.polar__GT_cart.call(null,tattoo.geometry.scale.call(null,tattoo.geometry.scale_to.call(null,tattoo.geometry.rotate.call(null,tattoo.geometry.translate_to.call(null,tattoo.geometry.cart__GT_polar.call(null,line),tattoo.geometry.intersection.call(null,line,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t))),(dir * tattoo.core.split_angle)),tattoo.geometry.point_line_distance.call(null,t,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t))),(- dir)));
} else {
return null;
}
});
/**
 * Lays out internal sides.
 */
tattoo.core.internal_sides = (function tattoo$core$internal_sides(t){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"side1","side1",1987760822),tattoo.core.internal_side.call(null,t,new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(t),(-1))),new cljs.core.Keyword(null,"side2","side2",-2075268796),tattoo.core.internal_side.call(null,t,new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(t),(1)));
});
/**
 * Returns a side to a node, given a directional coefficient: -1 or +1.
 */
tattoo.core.external_side = (function tattoo$core$external_side(t,dir){
var corner = cljs.core.second.call(null,tattoo.geometry.polar__GT_cart.call(null,tattoo.geometry.scale_to.call(null,tattoo.geometry.cart__GT_polar.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t)),((tattoo.geometry.point_line_distance.call(null,t,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t)) / (2)) / dir))));
return tattoo.geometry.polar__GT_cart.call(null,tattoo.geometry.scale.call(null,tattoo.geometry.rotate.call(null,tattoo.geometry.translate_to.call(null,tattoo.geometry.cart__GT_polar.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t)),corner),(((Math.PI * dir) * (2)) * ((5) / (3)))),(- dir)));
});
/**
 * Adds external sides to a node.
 */
tattoo.core.external_sides = (function tattoo$core$external_sides(t){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"side1","side1",1987760822),(function (){var or__21674__auto__ = new cljs.core.Keyword(null,"side1","side1",1987760822).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return tattoo.core.external_side.call(null,t,(-1));
}
})()),new cljs.core.Keyword(null,"side2","side2",-2075268796),(function (){var or__21674__auto__ = new cljs.core.Keyword(null,"side2","side2",-2075268796).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return tattoo.core.external_side.call(null,t,(1));
}
})());
});
/**
 * Given a node, computes base corners based on the intersection of nearby
 *   bases OR bases with parent sides OR own sides.
 */
tattoo.core.base_corners = (function tattoo$core$base_corners(t){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"base-corner-1","base-corner-1",-1924572824),(function (){var temp__4655__auto__ = (function (){var or__21674__auto__ = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
var or__21674__auto____$1 = new cljs.core.Keyword(null,"side1","side1",1987760822).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(or__21674__auto____$1)){
return or__21674__auto____$1;
} else {
return new cljs.core.Keyword(null,"side1","side1",1987760822).cljs$core$IFn$_invoke$arity$1(t);
}
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var l = temp__4655__auto__;
return tattoo.geometry.intersection.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t),l);
} else {
return cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t));
}
})()),new cljs.core.Keyword(null,"base-corner-2","base-corner-2",-68469177),(function (){var temp__4655__auto__ = (function (){var or__21674__auto__ = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
var or__21674__auto____$1 = new cljs.core.Keyword(null,"side2","side2",-2075268796).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(or__21674__auto____$1)){
return or__21674__auto____$1;
} else {
return new cljs.core.Keyword(null,"side2","side2",-2075268796).cljs$core$IFn$_invoke$arity$1(t);
}
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var l = temp__4655__auto__;
return tattoo.geometry.intersection.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t),l);
} else {
return cljs.core.second.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t));
}
})());
});
/**
 * Constrains base to base corners.
 */
tattoo.core.refine_base = (function tattoo$core$refine_base(t){
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-corner-1","base-corner-1",-1924572824).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"base-corner-2","base-corner-2",-68469177).cljs$core$IFn$_invoke$arity$1(t)], null));
});
/**
 * Constrains a side to start at the base, and to the appropriate length.
 */
tattoo.core.refine_side = (function tattoo$core$refine_side(t,side){
var corner = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"side1","side1",1987760822),side))?new cljs.core.Keyword(null,"base-corner-1","base-corner-1",-1924572824):new cljs.core.Keyword(null,"base-corner-2","base-corner-2",-68469177));
var child = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"side1","side1",1987760822),side))?cljs.core.first.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t)):cljs.core.last.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t)));
var neighbor = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"side1","side1",1987760822),side))?new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(t):new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(t));
var scale = (cljs.core.truth_((function (){var and__21662__auto__ = neighbor;
if(cljs.core.truth_(and__21662__auto__)){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(neighbor));
} else {
return and__21662__auto__;
}
})())?tattoo.geometry.norm.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"side1","side1",1987760822),side))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(neighbor)),cljs.core.second.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(neighbor))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(neighbor)),cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(neighbor))))], null))):((tattoo.geometry.point_line_distance.call(null,t,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t)) * (7)) / (3)));
return cljs.core.assoc.call(null,t,side,((cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [corner.call(null,t),corner.call(null,child)], null):tattoo.geometry.polar__GT_cart.call(null,tattoo.geometry.scale_to.call(null,tattoo.geometry.translate_to.call(null,tattoo.geometry.cart__GT_polar.call(null,side.call(null,t)),corner.call(null,t)),scale))));
});
/**
 * Constrains sides to base and to appropriate lengths.
 */
tattoo.core.refine_sides = (function tattoo$core$refine_sides(t){
return tattoo.core.refine_side.call(null,tattoo.core.refine_side.call(null,t,new cljs.core.Keyword(null,"side1","side1",1987760822)),new cljs.core.Keyword(null,"side2","side2",-2075268796));
});
/**
 * Constructs a particular cap based on side
 */
tattoo.core.cap = (function tattoo$core$cap(t,side){
var angle = (cljs.core.truth_((function (){var or__21674__auto__ = (function (){var and__21662__auto__ = cljs.core._EQ_.call(null,side,new cljs.core.Keyword(null,"side1","side1",1987760822));
if(and__21662__auto__){
return new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(t);
} else {
return and__21662__auto__;
}
})();
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
var and__21662__auto__ = cljs.core._EQ_.call(null,side,new cljs.core.Keyword(null,"side2","side2",-2075268796));
if(and__21662__auto__){
return new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(t);
} else {
return and__21662__auto__;
}
}
})())?((Math.PI / (2)) - tattoo.core.split_angle):(Math.PI / ((6) / (3))));
var angle__$1 = ((cljs.core._EQ_.call(null,side,new cljs.core.Keyword(null,"side1","side1",1987760822)))?(- angle):angle);
return cljs.core.assoc.call(null,t,((cljs.core._EQ_.call(null,side,new cljs.core.Keyword(null,"side1","side1",1987760822)))?new cljs.core.Keyword(null,"cap1","cap1",-1862055034):new cljs.core.Keyword(null,"cap2","cap2",-762420488)),tattoo.geometry.polar__GT_cart.call(null,tattoo.geometry.rotate.call(null,tattoo.geometry.translate_to.call(null,tattoo.geometry.cart__GT_polar.call(null,side.call(null,t)),cljs.core.second.call(null,side.call(null,t))),angle__$1)));
});
/**
 * Adds caps to open nodes.
 */
tattoo.core.caps = (function tattoo$core$caps(t){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t))){
return t;
} else {
return tattoo.core.cap.call(null,tattoo.core.cap.call(null,t,new cljs.core.Keyword(null,"side1","side1",1987760822)),new cljs.core.Keyword(null,"side2","side2",-2075268796));
}
});
/**
 * Computes the apex of a node.
 */
tattoo.core.apex = (function tattoo$core$apex(t){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t))){
return t;
} else {
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"apex","apex",328192413),tattoo.geometry.intersection.call(null,new cljs.core.Keyword(null,"cap1","cap1",-1862055034).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"cap2","cap2",-762420488).cljs$core$IFn$_invoke$arity$1(t)));
}
});
/**
 * Pins caps to apex
 */
tattoo.core.refine_caps = (function tattoo$core$refine_caps(t){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t))){
return t;
} else {
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cap1","cap1",-1862055034),(1)], null),new cljs.core.Keyword(null,"apex","apex",328192413).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cap2","cap2",-762420488),(1)], null),new cljs.core.Keyword(null,"apex","apex",328192413).cljs$core$IFn$_invoke$arity$1(t));
}
});
tattoo.core.layout_0 = (function tattoo$core$layout_0(t){
return tattoo.tree.recurse.call(null,tattoo.core.internal_sides.call(null,tattoo.core.base.call(null,tattoo.core.parent_distance.call(null,t))),tattoo$core$layout_0);
});
tattoo.core.layout_1 = (function tattoo$core$layout_1(t){
return tattoo.tree.recurse.call(null,tattoo.core.refine_base.call(null,tattoo.core.base_corners.call(null,tattoo.core.external_sides.call(null,t))),tattoo$core$layout_1);
});
tattoo.core.layout_2 = (function tattoo$core$layout_2(t){
return tattoo.tree.recurse.call(null,tattoo.core.refine_caps.call(null,tattoo.core.apex.call(null,tattoo.core.caps.call(null,tattoo.core.refine_sides.call(null,t)))),tattoo$core$layout_2);
});
/**
 * All layout passes
 */
tattoo.core.layout = (function tattoo$core$layout(t){
return tattoo.core.layout_2.call(null,tattoo.core.layout_1.call(null,tattoo.core.layout_0.call(null,t)));
});
/**
 * Renders a tree once laid out.
 */
tattoo.core.render_BANG_ = (function tattoo$core$render_BANG_(t,s){
var temp__4657__auto___25487 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(temp__4657__auto___25487)){
var l_25488 = temp__4657__auto___25487;
tattoo.core.add_line_BANG_.call(null,s,l_25488,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#666",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(1)], null));
} else {
}

var temp__4657__auto___25489 = new cljs.core.Keyword(null,"side1","side1",1987760822).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(temp__4657__auto___25489)){
var l_25490 = temp__4657__auto___25489;
tattoo.core.add_line_BANG_.call(null,s,l_25490,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#666",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(1)], null));
} else {
}

var temp__4657__auto___25491 = new cljs.core.Keyword(null,"side2","side2",-2075268796).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(temp__4657__auto___25491)){
var l_25492 = temp__4657__auto___25491;
tattoo.core.add_line_BANG_.call(null,s,l_25492,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#666",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(1)], null));
} else {
}

var temp__4657__auto___25493 = new cljs.core.Keyword(null,"cap1","cap1",-1862055034).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(temp__4657__auto___25493)){
var l_25494 = temp__4657__auto___25493;
tattoo.core.add_line_BANG_.call(null,s,l_25494,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#666",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(1)], null));
} else {
}

var temp__4657__auto___25495 = new cljs.core.Keyword(null,"cap2","cap2",-762420488).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(temp__4657__auto___25495)){
var l_25496 = temp__4657__auto___25495;
tattoo.core.add_line_BANG_.call(null,s,l_25496,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#666",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(1)], null));
} else {
}

var seq__25483_25497 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t));
var chunk__25484_25498 = null;
var count__25485_25499 = (0);
var i__25486_25500 = (0);
while(true){
if((i__25486_25500 < count__25485_25499)){
var c_25501 = cljs.core._nth.call(null,chunk__25484_25498,i__25486_25500);
tattoo$core$render_BANG_.call(null,c_25501,s);

var G__25502 = seq__25483_25497;
var G__25503 = chunk__25484_25498;
var G__25504 = count__25485_25499;
var G__25505 = (i__25486_25500 + (1));
seq__25483_25497 = G__25502;
chunk__25484_25498 = G__25503;
count__25485_25499 = G__25504;
i__25486_25500 = G__25505;
continue;
} else {
var temp__4657__auto___25506 = cljs.core.seq.call(null,seq__25483_25497);
if(temp__4657__auto___25506){
var seq__25483_25507__$1 = temp__4657__auto___25506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25483_25507__$1)){
var c__22485__auto___25508 = cljs.core.chunk_first.call(null,seq__25483_25507__$1);
var G__25509 = cljs.core.chunk_rest.call(null,seq__25483_25507__$1);
var G__25510 = c__22485__auto___25508;
var G__25511 = cljs.core.count.call(null,c__22485__auto___25508);
var G__25512 = (0);
seq__25483_25497 = G__25509;
chunk__25484_25498 = G__25510;
count__25485_25499 = G__25511;
i__25486_25500 = G__25512;
continue;
} else {
var c_25513 = cljs.core.first.call(null,seq__25483_25507__$1);
tattoo$core$render_BANG_.call(null,c_25513,s);

var G__25514 = cljs.core.next.call(null,seq__25483_25507__$1);
var G__25515 = null;
var G__25516 = (0);
var G__25517 = (0);
seq__25483_25497 = G__25514;
chunk__25484_25498 = G__25515;
count__25485_25499 = G__25516;
i__25486_25500 = G__25517;
continue;
}
} else {
}
}
break;
}

return t;
});
/**
 * Augments a tree by adding coordinates and scales to each node.
 */
tattoo.core.initial_coords = (function tattoo$core$initial_coords(t){
var theta = (function (){var or__21674__auto__ = new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return (Math.PI / (2));
}
})();
var scale = (function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(temp__4655__auto__)){
var p = temp__4655__auto__;
return ((2) * new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(p));
} else {
return (1);
}
})();
var x = (function (){var or__21674__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return ((3) * tattoo.core.grid);
}
})();
var y = (function (){var or__21674__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return (tattoo.core.grid / (2));
}
})();
var t__$1 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"scale","scale",-230427353),scale);
var t__$2 = cljs.core.assoc.call(null,t__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map_indexed.call(null,((function (theta,scale,x,y,t__$1){
return (function (i,c){
var theta__$1 = ((- ((((i + 0.5) / cljs.core.count.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t__$1))) - 0.5) * tattoo.core.Dtheta)) + theta);
return cljs.core.merge.call(null,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"theta","theta",-427510258),theta__$1),cljs.core.second.call(null,tattoo.geometry.polar__GT_cart.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"origin","origin",1037372088),t__$1,new cljs.core.Keyword(null,"r","r",-471384190),(tattoo.core.grid / scale),new cljs.core.Keyword(null,"theta","theta",-427510258),theta__$1], null))));
});})(theta,scale,x,y,t__$1))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t__$1)));
return tattoo.tree.recurse.call(null,t__$2,tattoo$core$initial_coords);
});
/**
 * Renders control points for dtree nodes.
 */
tattoo.core.render_control_points_BANG_ = (function tattoo$core$render_control_points_BANG_(var_args){
var args25519 = [];
var len__22749__auto___25526 = arguments.length;
var i__22750__auto___25527 = (0);
while(true){
if((i__22750__auto___25527 < len__22749__auto___25526)){
args25519.push((arguments[i__22750__auto___25527]));

var G__25528 = (i__22750__auto___25527 + (1));
i__22750__auto___25527 = G__25528;
continue;
} else {
}
break;
}

var G__25521 = args25519.length;
switch (G__25521) {
case 2:
return tattoo.core.render_control_points_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tattoo.core.render_control_points_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25519.length)].join('')));

}
});

tattoo.core.render_control_points_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (t,s){
return tattoo.core.render_control_points_BANG_.call(null,t,t,s);
});

tattoo.core.render_control_points_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (t,top,s){
var dx_25530 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(t);
var dy_25531 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(t);
var p_25532 = tattoo.core.add_circle_BANG_.call(null,s,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.deref.call(null,dx_25530),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.deref.call(null,dy_25531)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#aaa"], null));
p_25532.drag(((function (dx_25530,dy_25531,p_25532){
return (function tattoo$core$move(x,y,event){
var ot = p_25532.data("origTransform");
p_25532.transform([cljs.core.str(ot),cljs.core.str((cljs.core.truth_(ot)?"T":"t")),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y)].join(''));

var b_25533 = p_25532.getBBox();
cljs.core.reset_BANG_.call(null,dx_25530,b_25533.cx);

cljs.core.reset_BANG_.call(null,dy_25531,b_25533.cy);

s.selectAll("line").forEach(((function (ot,dx_25530,dy_25531,p_25532){
return (function (p1__25518_SHARP_){
return p1__25518_SHARP_.remove();
});})(ot,dx_25530,dy_25531,p_25532))
);

return tattoo.core.render_BANG_.call(null,tattoo.core.layout.call(null,tattoo.tree.dtree__GT_tree.call(null,top)),s);
});})(dx_25530,dy_25531,p_25532))
,((function (dx_25530,dy_25531,p_25532){
return (function tattoo$core$start(){
return p_25532.data("origTransform",p_25532.transform().local);
});})(dx_25530,dy_25531,p_25532))
);

var seq__25522_25534 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t));
var chunk__25523_25535 = null;
var count__25524_25536 = (0);
var i__25525_25537 = (0);
while(true){
if((i__25525_25537 < count__25524_25536)){
var c_25538 = cljs.core._nth.call(null,chunk__25523_25535,i__25525_25537);
tattoo.core.render_control_points_BANG_.call(null,c_25538,top,s);

var G__25539 = seq__25522_25534;
var G__25540 = chunk__25523_25535;
var G__25541 = count__25524_25536;
var G__25542 = (i__25525_25537 + (1));
seq__25522_25534 = G__25539;
chunk__25523_25535 = G__25540;
count__25524_25536 = G__25541;
i__25525_25537 = G__25542;
continue;
} else {
var temp__4657__auto___25543 = cljs.core.seq.call(null,seq__25522_25534);
if(temp__4657__auto___25543){
var seq__25522_25544__$1 = temp__4657__auto___25543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25522_25544__$1)){
var c__22485__auto___25545 = cljs.core.chunk_first.call(null,seq__25522_25544__$1);
var G__25546 = cljs.core.chunk_rest.call(null,seq__25522_25544__$1);
var G__25547 = c__22485__auto___25545;
var G__25548 = cljs.core.count.call(null,c__22485__auto___25545);
var G__25549 = (0);
seq__25522_25534 = G__25546;
chunk__25523_25535 = G__25547;
count__25524_25536 = G__25548;
i__25525_25537 = G__25549;
continue;
} else {
var c_25550 = cljs.core.first.call(null,seq__25522_25544__$1);
tattoo.core.render_control_points_BANG_.call(null,c_25550,top,s);

var G__25551 = cljs.core.next.call(null,seq__25522_25544__$1);
var G__25552 = null;
var G__25553 = (0);
var G__25554 = (0);
seq__25522_25534 = G__25551;
chunk__25523_25535 = G__25552;
count__25524_25536 = G__25553;
i__25525_25537 = G__25554;
continue;
}
} else {
}
}
break;
}

return t;
});

tattoo.core.render_control_points_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Sets up scene on an SVG element
 */
tattoo.core.init_BANG_ = (function tattoo$core$init_BANG_(s,tree){
var tree__$1 = tattoo.tree.ids.call(null,tattoo.core.initial_coords.call(null,tattoo.tree.sexp__GT_tree.call(null,tree)));
var dtree = tattoo.tree.tree__GT_dtree.call(null,tree__$1);
tattoo.core.render_control_points_BANG_.call(null,dtree,s);

return tattoo.core.render_BANG_.call(null,tattoo.core.layout.call(null,tree__$1),s);
});
/**
 * Resets scene.
 */
tattoo.core.refresh_BANG_ = (function tattoo$core$refresh_BANG_(){
tattoo.core.svg.clear();

return tattoo.core.init_BANG_.call(null,tattoo.core.svg,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"pow","pow",196526960,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),(2))),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"hbar","hbar",-992250948,null),new cljs.core.Symbol(null,"c","c",-122660552,null))),cljs.core.list(new cljs.core.Symbol(null,"oct","oct",1971564205,null),(2),(1),(1))));
});
tattoo.core.refresh_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1468210626712