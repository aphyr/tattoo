// Compiled by ClojureScript 1.9.36 {}
goog.provide('tattoo.geometry');
goog.require('cljs.core');
tattoo.geometry.log = (function tattoo$geometry$log(var_args){
var args__22756__auto__ = [];
var len__22749__auto___24926 = arguments.length;
var i__22750__auto___24927 = (0);
while(true){
if((i__22750__auto___24927 < len__22749__auto___24926)){
args__22756__auto__.push((arguments[i__22750__auto___24927]));

var G__24928 = (i__22750__auto___24927 + (1));
i__22750__auto___24927 = G__24928;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return tattoo.geometry.log.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

tattoo.geometry.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
console.log.apply(console,cljs.core.clj__GT_js.call(null,args));

return cljs.core.last.call(null,args);
});

tattoo.geometry.log.cljs$lang$maxFixedArity = (0);

tattoo.geometry.log.cljs$lang$applyTo = (function (seq24925){
return tattoo.geometry.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24925));
});

/**
 * Length of a cartesian line segment.
 */
tattoo.geometry.norm = (function tattoo$geometry$norm(p__24929){
var vec__24933 = p__24929;
var a = cljs.core.nth.call(null,vec__24933,(0),null);
var b = cljs.core.nth.call(null,vec__24933,(1),null);
return Math.sqrt((Math.pow((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a)),(2)) + Math.pow((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a)),(2))));
});
/**
 * Midpoint of two cartesian points, weighted by their scales.
 */
tattoo.geometry.midpoint = (function tattoo$geometry$midpoint(a,b){
var s = (new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(a) + new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(b));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(a) * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a)) + (new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(b) * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b))) / s),new cljs.core.Keyword(null,"y","y",-1757859776),(((new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(a) * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a)) + (new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(b) * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b))) / s)], null);
});
tattoo.geometry.centroid = (function tattoo$geometry$centroid(){
return null;
});
/**
 * Returns a point halfway between two SVG elements' bounding boxes, as an {:x
 *   :y} map.
 */
tattoo.geometry.between_boxes = (function tattoo$geometry$between_boxes(a,b){
var ba = cljs.core.js__GT_clj.call(null,a.getBBox());
var bb = cljs.core.js__GT_clj.call(null,b.getBBox());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(ba) + new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(bb)) / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),((new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(ba) + new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(bb)) / (2))], null);
});
/**
 * Turns an SVG object into a {:x, :y} point.
 */
tattoo.geometry.svg__GT_point = (function tattoo$geometry$svg__GT_point(s){
var b = cljs.core.js__GT_clj.call(null,s.getBBox());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(b)], null);
});
/**
 * Yields the distance from a point to a cartesian line.
 */
tattoo.geometry.point_line_distance = (function tattoo$geometry$point_line_distance(point,p__24936){
var vec__24940 = p__24936;
var a = cljs.core.nth.call(null,vec__24940,(0),null);
var b = cljs.core.nth.call(null,vec__24940,(1),null);
var x0 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point);
var y0 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point);
var x1 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a);
var x2 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b);
var y1 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a);
var y2 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b);
return (Math.abs(((((x0 * (y2 - y1)) - (y0 * (x2 - x1))) + (x2 * y1)) - (y2 * x1))) / Math.sqrt((Math.pow((y2 - y1),(2)) + Math.pow((x2 - x1),(2)))));
});
/**
 * Takes two lines [{:x :y} {:x :y}] and computes their intersection point {:x
 *   :y}
 */
tattoo.geometry.intersection = (function tattoo$geometry$intersection(p__24943,p__24944){
var vec__24951 = p__24943;
var a1 = cljs.core.nth.call(null,vec__24951,(0),null);
var a2 = cljs.core.nth.call(null,vec__24951,(1),null);
var vec__24954 = p__24944;
var b1 = cljs.core.nth.call(null,vec__24954,(0),null);
var b2 = cljs.core.nth.call(null,vec__24954,(1),null);
var x1 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a1);
var y1 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a1);
var x2 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a2);
var y2 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a2);
var x3 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b1);
var y3 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b1);
var x4 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b2);
var y4 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b2);
var denom = (((x1 - x2) * (y3 - y4)) - ((y1 - y2) * (x3 - x4)));
if((denom === (0))){
return null;
} else {
var u = ((x1 * y2) - (y1 * x2));
var v = ((x3 * y4) - (y3 * x4));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((u * (x3 - x4)) - ((x1 - x2) * v)) / denom),new cljs.core.Keyword(null,"y","y",-1757859776),(((u * (y3 - y4)) - ((y1 - y2) * v)) / denom)], null);
}
});
/**
 * Takes a pair of points [{:x :y} {:x :y}] and yields a polar line segment
 * 
 *   {:origin {:x :y}
 *   :r      radius
 *   :theta  theta}
 */
tattoo.geometry.cart__GT_polar = (function tattoo$geometry$cart__GT_polar(p__24957){
var vec__24961 = p__24957;
var a = cljs.core.nth.call(null,vec__24961,(0),null);
var b = cljs.core.nth.call(null,vec__24961,(1),null);
var x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a));
var y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"origin","origin",1037372088),a,new cljs.core.Keyword(null,"r","r",-471384190),Math.sqrt(((x * x) + (y * y))),new cljs.core.Keyword(null,"theta","theta",-427510258),Math.atan2(y,x)], null);
});
/**
 * Takes a polar line segment and returns a pair of points.
 */
tattoo.geometry.polar__GT_cart = (function tattoo$geometry$polar__GT_cart(p__24964){
var map__24967 = p__24964;
var map__24967__$1 = ((((!((map__24967 == null)))?((((map__24967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24967):map__24967);
var origin = cljs.core.get.call(null,map__24967__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var r = cljs.core.get.call(null,map__24967__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var theta = cljs.core.get.call(null,map__24967__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [origin,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(origin) + (r * Math.cos(theta))),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(origin) + (r * Math.sin(theta)))], null)], null);
});
/**
 * Tip of a polar line segment.
 */
tattoo.geometry.tip = (function tattoo$geometry$tip(l){
return cljs.core.second.call(null,tattoo.geometry.polar__GT_cart.call(null,l));
});
/**
 * Translate a polar line to a new origin.
 */
tattoo.geometry.translate_to = (function tattoo$geometry$translate_to(l,origin){
return cljs.core.assoc.call(null,l,new cljs.core.Keyword(null,"origin","origin",1037372088),origin);
});
/**
 * Scale a polar line.
 */
tattoo.geometry.scale = (function tattoo$geometry$scale(l,scale__$1){
return cljs.core.update.call(null,l,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core._STAR_,scale__$1);
});
/**
 * Set a polar line's radius to r.
 */
tattoo.geometry.scale_to = (function tattoo$geometry$scale_to(l,r){
return cljs.core.assoc.call(null,l,new cljs.core.Keyword(null,"r","r",-471384190),r);
});
/**
 * Rotate a polar line around its origin.
 */
tattoo.geometry.rotate = (function tattoo$geometry$rotate(l,dtheta){
return cljs.core.update.call(null,l,new cljs.core.Keyword(null,"theta","theta",-427510258),cljs.core._PLUS_,dtheta);
});
/**
 * Difference in angle from b to a: two polar lines.
 */
tattoo.geometry.dtheta = (function tattoo$geometry$dtheta(a,b){
return (new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(a) - new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(b));
});
/**
 * A cartesian line segment halfway between two points, weighted by point
 *   scales.
 */
tattoo.geometry.bisector = (function tattoo$geometry$bisector(a,b){
return tattoo.geometry.polar__GT_cart.call(null,cljs.core.assoc.call(null,tattoo.geometry.rotate.call(null,tattoo.geometry.cart__GT_polar.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)),(Math.PI / (2))),new cljs.core.Keyword(null,"origin","origin",1037372088),tattoo.geometry.midpoint.call(null,a,b)));
});

//# sourceMappingURL=geometry.js.map?rel=1468210405684