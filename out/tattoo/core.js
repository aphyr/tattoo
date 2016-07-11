// Compiled by ClojureScript 1.9.36 {}
goog.provide('tattoo.core');
goog.require('cljs.core');
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
var len__22749__auto___24392 = arguments.length;
var i__22750__auto___24393 = (0);
while(true){
if((i__22750__auto___24393 < len__22749__auto___24392)){
args__22756__auto__.push((arguments[i__22750__auto___24393]));

var G__24394 = (i__22750__auto___24393 + (1));
i__22750__auto___24393 = G__24394;
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

tattoo.core.log.cljs$lang$applyTo = (function (seq24391){
return tattoo.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24391));
});

/**
 * Length of a cartesian line segment.
 */
tattoo.core.norm = (function tattoo$core$norm(p__24395){
var vec__24399 = p__24395;
var a = cljs.core.nth.call(null,vec__24399,(0),null);
var b = cljs.core.nth.call(null,vec__24399,(1),null);
return Math.sqrt((Math.pow((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a)),(2)) + Math.pow((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a)),(2))));
});
/**
 * Midpoint of two cartesian points, weighted by their scales.
 */
tattoo.core.midpoint = (function tattoo$core$midpoint(a,b){
var s = (new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(a) + new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(b));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(a) * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a)) + (new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(b) * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b))) / s),new cljs.core.Keyword(null,"y","y",-1757859776),(((new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(a) * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a)) + (new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(b) * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b))) / s)], null);
});
tattoo.core.centroid = (function tattoo$core$centroid(){
return null;
});
/**
 * Returns a point halfway between two SVG elements' bounding boxes, as an {:x
 *   :y} map.
 */
tattoo.core.between_boxes = (function tattoo$core$between_boxes(a,b){
var ba = cljs.core.js__GT_clj.call(null,a.getBBox());
var bb = cljs.core.js__GT_clj.call(null,b.getBBox());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(ba) + new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(bb)) / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),((new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(ba) + new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(bb)) / (2))], null);
});
/**
 * Turns an SVG object into a {:x, :y} point.
 */
tattoo.core.svg__GT_point = (function tattoo$core$svg__GT_point(s){
var b = cljs.core.js__GT_clj.call(null,s.getBBox());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(b)], null);
});
/**
 * Yields the distance from a point to a cartesian line.
 */
tattoo.core.point_line_distance = (function tattoo$core$point_line_distance(point,p__24402){
var vec__24406 = p__24402;
var a = cljs.core.nth.call(null,vec__24406,(0),null);
var b = cljs.core.nth.call(null,vec__24406,(1),null);
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
tattoo.core.intersection = (function tattoo$core$intersection(p__24409,p__24410){
var vec__24417 = p__24409;
var a1 = cljs.core.nth.call(null,vec__24417,(0),null);
var a2 = cljs.core.nth.call(null,vec__24417,(1),null);
var vec__24420 = p__24410;
var b1 = cljs.core.nth.call(null,vec__24420,(0),null);
var b2 = cljs.core.nth.call(null,vec__24420,(1),null);
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
tattoo.core.cart__GT_polar = (function tattoo$core$cart__GT_polar(p__24423){
var vec__24427 = p__24423;
var a = cljs.core.nth.call(null,vec__24427,(0),null);
var b = cljs.core.nth.call(null,vec__24427,(1),null);
var x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a));
var y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"origin","origin",1037372088),a,new cljs.core.Keyword(null,"r","r",-471384190),Math.sqrt(((x * x) + (y * y))),new cljs.core.Keyword(null,"theta","theta",-427510258),Math.atan2(y,x)], null);
});
/**
 * Takes a polar line segment and returns a pair of points.
 */
tattoo.core.polar__GT_cart = (function tattoo$core$polar__GT_cart(p__24430){
var map__24433 = p__24430;
var map__24433__$1 = ((((!((map__24433 == null)))?((((map__24433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24433):map__24433);
var origin = cljs.core.get.call(null,map__24433__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var r = cljs.core.get.call(null,map__24433__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var theta = cljs.core.get.call(null,map__24433__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [origin,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(origin) + (r * Math.cos(theta))),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(origin) + (r * Math.sin(theta)))], null)], null);
});
/**
 * Tip of a polar line segment.
 */
tattoo.core.tip = (function tattoo$core$tip(l){
return cljs.core.second.call(null,tattoo.core.polar__GT_cart.call(null,l));
});
/**
 * Translate a polar line to a new origin.
 */
tattoo.core.translate_to = (function tattoo$core$translate_to(l,origin){
return cljs.core.assoc.call(null,l,new cljs.core.Keyword(null,"origin","origin",1037372088),origin);
});
/**
 * Scale a polar line.
 */
tattoo.core.scale = (function tattoo$core$scale(l,scale__$1){
return cljs.core.update.call(null,l,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core._STAR_,scale__$1);
});
/**
 * Set a polar line's radius to r.
 */
tattoo.core.scale_to = (function tattoo$core$scale_to(l,r){
return cljs.core.assoc.call(null,l,new cljs.core.Keyword(null,"r","r",-471384190),r);
});
/**
 * Rotate a polar line around its origin.
 */
tattoo.core.rotate = (function tattoo$core$rotate(l,dtheta){
return cljs.core.update.call(null,l,new cljs.core.Keyword(null,"theta","theta",-427510258),cljs.core._PLUS_,dtheta);
});
/**
 * Difference in angle from b to a: two polar lines.
 */
tattoo.core.dtheta = (function tattoo$core$dtheta(a,b){
return (new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(a) - new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(b));
});
tattoo.core.add_circle_BANG_ = (function tattoo$core$add_circle_BANG_(s,point,opts){
var G__24436 = s.circle(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point),(10));
G__24436.attr(cljs.core.clj__GT_js.call(null,opts));

return G__24436;
});
tattoo.core.add_line_BANG_ = (function tattoo$core$add_line_BANG_(var_args){
var args24437 = [];
var len__22749__auto___24445 = arguments.length;
var i__22750__auto___24446 = (0);
while(true){
if((i__22750__auto___24446 < len__22749__auto___24445)){
args24437.push((arguments[i__22750__auto___24446]));

var G__24447 = (i__22750__auto___24446 + (1));
i__22750__auto___24446 = G__24447;
continue;
} else {
}
break;
}

var G__24439 = args24437.length;
switch (G__24439) {
case 2:
return tattoo.core.add_line_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tattoo.core.add_line_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24437.length)].join('')));

}
});

tattoo.core.add_line_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (s,p__24440){
var vec__24441 = p__24440;
var a = cljs.core.nth.call(null,vec__24441,(0),null);
var b = cljs.core.nth.call(null,vec__24441,(1),null);
return s.line(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));
});

tattoo.core.add_line_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (s,line,opts){
var G__24444 = tattoo.core.add_line_BANG_.call(null,s,line);
G__24444.attr(cljs.core.clj__GT_js.call(null,opts));

return G__24444;
});

tattoo.core.add_line_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * A cartesian line segment halfway between two points, weighted by point
 *   scales.
 */
tattoo.core.bisector = (function tattoo$core$bisector(a,b){
return tattoo.core.polar__GT_cart.call(null,cljs.core.assoc.call(null,tattoo.core.rotate.call(null,tattoo.core.cart__GT_polar.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)),(Math.PI / (2))),new cljs.core.Keyword(null,"origin","origin",1037372088),tattoo.core.midpoint.call(null,a,b)));
});
/**
 * Assign unique numbers to all tree nodes.
 */
tattoo.core.ids = (function tattoo$core$ids(var_args){
var args24449 = [];
var len__22749__auto___24452 = arguments.length;
var i__22750__auto___24453 = (0);
while(true){
if((i__22750__auto___24453 < len__22749__auto___24452)){
args24449.push((arguments[i__22750__auto___24453]));

var G__24454 = (i__22750__auto___24453 + (1));
i__22750__auto___24453 = G__24454;
continue;
} else {
}
break;
}

var G__24451 = args24449.length;
switch (G__24451) {
case 1:
return tattoo.core.ids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tattoo.core.ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24449.length)].join('')));

}
});

tattoo.core.ids.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tattoo.core.ids.call(null,t,(-1));
});

tattoo.core.ids.cljs$core$IFn$_invoke$arity$2 = (function (t,id){
var temp__4655__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t));
if(temp__4655__auto__){
var children = temp__4655__auto__;
var children__$1 = cljs.core.reduce.call(null,((function (children,temp__4655__auto__){
return (function (children__$1,child){
return cljs.core.conj.call(null,children__$1,tattoo.core.ids.call(null,child,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,children__$1))));
});})(children,temp__4655__auto__))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tattoo.core.ids.call(null,cljs.core.first.call(null,children),id)], null),cljs.core.next.call(null,children));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"children","children",-940561982),children__$1),new cljs.core.Keyword(null,"id","id",-1388402092),(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,children__$1)) + (1)));
} else {
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"id","id",-1388402092),(id + (1)));
}
});

tattoo.core.ids.cljs$lang$maxFixedArity = 2;

/**
 * Given a node, augments its children with :parent, :before,
 *   and :after siblings.
 */
tattoo.core.with_relationships = (function tattoo$core$with_relationships(t){
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.call(null,(function (p__24460){
var vec__24461 = p__24460;
var before = cljs.core.nth.call(null,vec__24461,(0),null);
var c = cljs.core.nth.call(null,vec__24461,(1),null);
var after = cljs.core.nth.call(null,vec__24461,(2),null);
return cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"parent","parent",-878878779),t,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"after","after",594996914),after);
}),cljs.core.partition.call(null,(3),(1),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))));
});
/**
 * Strips relationships off of a node.
 */
tattoo.core.without_relationships = (function tattoo$core$without_relationships(t){
return cljs.core.dissoc.call(null,t,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"after","after",594996914));
});
/**
 * Adds the distance to the parent (or if no parent, to the farthest child: a
 *   characteristic metric.
 */
tattoo.core.parent_distance = (function tattoo$core$parent_distance(t){
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"parent-distance","parent-distance",-44762816),(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(temp__4655__auto__)){
var p = temp__4655__auto__;
return tattoo.core.norm.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,t], null));
} else {
return cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.comp.call(null,tattoo.core.norm,cljs.core.partial.call(null,cljs.core.vector,t)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t)));
}
})());
});
/**
 * Computes the base of a node.
 */
tattoo.core.base = (function tattoo$core$base(t){
if(cljs.core.truth_(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(t))){
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"base","base",185279322),tattoo.core.bisector.call(null,t,new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(t)));
} else {
var theta1 = new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(tattoo.core.cart__GT_polar.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.first.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t))], null)));
var theta2 = new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(tattoo.core.cart__GT_polar.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.last.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t))], null)));
var theta = (Math.PI + ((theta1 + theta2) / (2)));
var r = ((cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.comp.call(null,tattoo.core.norm,cljs.core.partial.call(null,cljs.core.vector,t)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t))) / cljs.core.count.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t))) / (2));
var midline = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"origin","origin",1037372088),t,new cljs.core.Keyword(null,"theta","theta",-427510258),theta,new cljs.core.Keyword(null,"r","r",-471384190),r], null);
var midpoint = cljs.core.second.call(null,tattoo.core.polar__GT_cart.call(null,midline));
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"base","base",185279322),tattoo.core.polar__GT_cart.call(null,tattoo.core.rotate.call(null,tattoo.core.translate_to.call(null,midline,midpoint),(Math.PI / (2)))));
}
});
/**
 * Lays out an internal side for a node and its neighbor, given a directional
 *   coefficient of -1 or +1.
 */
tattoo.core.internal_side = (function tattoo$core$internal_side(t,n,dir){
if(cljs.core.truth_(n)){
var line = tattoo.core.bisector.call(null,n,t);
return tattoo.core.polar__GT_cart.call(null,tattoo.core.scale.call(null,tattoo.core.scale_to.call(null,tattoo.core.rotate.call(null,tattoo.core.translate_to.call(null,tattoo.core.cart__GT_polar.call(null,line),tattoo.core.intersection.call(null,line,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t))),(dir * tattoo.core.split_angle)),tattoo.core.point_line_distance.call(null,t,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t))),(- dir)));
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
var corner = cljs.core.second.call(null,tattoo.core.polar__GT_cart.call(null,tattoo.core.scale_to.call(null,tattoo.core.cart__GT_polar.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t)),((tattoo.core.point_line_distance.call(null,t,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t)) / (2)) / dir))));
return tattoo.core.polar__GT_cart.call(null,tattoo.core.scale.call(null,tattoo.core.rotate.call(null,tattoo.core.translate_to.call(null,tattoo.core.cart__GT_polar.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t)),corner),(((Math.PI * dir) * (2)) * ((5) / (3)))),(- dir)));
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
return tattoo.core.intersection.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t),l);
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
return tattoo.core.intersection.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t),l);
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
})())?tattoo.core.norm.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"side1","side1",1987760822),side))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(neighbor)),cljs.core.second.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(neighbor))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(neighbor)),cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(neighbor))))], null))):((tattoo.core.point_line_distance.call(null,t,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t)) * (7)) / (3)));
return cljs.core.assoc.call(null,t,side,((cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [corner.call(null,t),corner.call(null,child)], null):tattoo.core.polar__GT_cart.call(null,tattoo.core.scale_to.call(null,tattoo.core.translate_to.call(null,tattoo.core.cart__GT_polar.call(null,side.call(null,t)),corner.call(null,t)),scale))));
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
return cljs.core.assoc.call(null,t,((cljs.core._EQ_.call(null,side,new cljs.core.Keyword(null,"side1","side1",1987760822)))?new cljs.core.Keyword(null,"cap1","cap1",-1862055034):new cljs.core.Keyword(null,"cap2","cap2",-762420488)),tattoo.core.polar__GT_cart.call(null,tattoo.core.rotate.call(null,tattoo.core.translate_to.call(null,tattoo.core.cart__GT_polar.call(null,side.call(null,t)),cljs.core.second.call(null,side.call(null,t))),angle__$1)));
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
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"apex","apex",328192413),tattoo.core.intersection.call(null,new cljs.core.Keyword(null,"cap1","cap1",-1862055034).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"cap2","cap2",-762420488).cljs$core$IFn$_invoke$arity$1(t)));
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
/**
 * Lays out children using f.
 */
tattoo.core.recurse = (function tattoo$core$recurse(t,f){
return tattoo.core.without_relationships.call(null,cljs.core.update.call(null,tattoo.core.with_relationships.call(null,t),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.partial.call(null,cljs.core.map,f)));
});
tattoo.core.layout_0 = (function tattoo$core$layout_0(t){
return tattoo.core.recurse.call(null,tattoo.core.internal_sides.call(null,tattoo.core.base.call(null,tattoo.core.parent_distance.call(null,t))),tattoo$core$layout_0);
});
tattoo.core.layout_1 = (function tattoo$core$layout_1(t){
return tattoo.core.recurse.call(null,tattoo.core.refine_base.call(null,tattoo.core.base_corners.call(null,tattoo.core.external_sides.call(null,t))),tattoo$core$layout_1);
});
tattoo.core.layout_2 = (function tattoo$core$layout_2(t){
return tattoo.core.recurse.call(null,tattoo.core.refine_caps.call(null,tattoo.core.apex.call(null,tattoo.core.caps.call(null,tattoo.core.refine_sides.call(null,t)))),tattoo$core$layout_2);
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
var temp__4657__auto___24472 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(temp__4657__auto___24472)){
var l_24473 = temp__4657__auto___24472;
tattoo.core.add_line_BANG_.call(null,s,l_24473,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#666",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(1)], null));
} else {
}

var temp__4657__auto___24474 = new cljs.core.Keyword(null,"side1","side1",1987760822).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(temp__4657__auto___24474)){
var l_24475 = temp__4657__auto___24474;
tattoo.core.add_line_BANG_.call(null,s,l_24475,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#666",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(1)], null));
} else {
}

var temp__4657__auto___24476 = new cljs.core.Keyword(null,"side2","side2",-2075268796).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(temp__4657__auto___24476)){
var l_24477 = temp__4657__auto___24476;
tattoo.core.add_line_BANG_.call(null,s,l_24477,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#666",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(1)], null));
} else {
}

var temp__4657__auto___24478 = new cljs.core.Keyword(null,"cap1","cap1",-1862055034).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(temp__4657__auto___24478)){
var l_24479 = temp__4657__auto___24478;
tattoo.core.add_line_BANG_.call(null,s,l_24479,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#666",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(1)], null));
} else {
}

var temp__4657__auto___24480 = new cljs.core.Keyword(null,"cap2","cap2",-762420488).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(temp__4657__auto___24480)){
var l_24481 = temp__4657__auto___24480;
tattoo.core.add_line_BANG_.call(null,s,l_24481,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#666",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(1)], null));
} else {
}

var seq__24468_24482 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t));
var chunk__24469_24483 = null;
var count__24470_24484 = (0);
var i__24471_24485 = (0);
while(true){
if((i__24471_24485 < count__24470_24484)){
var c_24486 = cljs.core._nth.call(null,chunk__24469_24483,i__24471_24485);
tattoo$core$render_BANG_.call(null,c_24486,s);

var G__24487 = seq__24468_24482;
var G__24488 = chunk__24469_24483;
var G__24489 = count__24470_24484;
var G__24490 = (i__24471_24485 + (1));
seq__24468_24482 = G__24487;
chunk__24469_24483 = G__24488;
count__24470_24484 = G__24489;
i__24471_24485 = G__24490;
continue;
} else {
var temp__4657__auto___24491 = cljs.core.seq.call(null,seq__24468_24482);
if(temp__4657__auto___24491){
var seq__24468_24492__$1 = temp__4657__auto___24491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24468_24492__$1)){
var c__22485__auto___24493 = cljs.core.chunk_first.call(null,seq__24468_24492__$1);
var G__24494 = cljs.core.chunk_rest.call(null,seq__24468_24492__$1);
var G__24495 = c__22485__auto___24493;
var G__24496 = cljs.core.count.call(null,c__22485__auto___24493);
var G__24497 = (0);
seq__24468_24482 = G__24494;
chunk__24469_24483 = G__24495;
count__24470_24484 = G__24496;
i__24471_24485 = G__24497;
continue;
} else {
var c_24498 = cljs.core.first.call(null,seq__24468_24492__$1);
tattoo$core$render_BANG_.call(null,c_24498,s);

var G__24499 = cljs.core.next.call(null,seq__24468_24492__$1);
var G__24500 = null;
var G__24501 = (0);
var G__24502 = (0);
seq__24468_24482 = G__24499;
chunk__24469_24483 = G__24500;
count__24470_24484 = G__24501;
i__24471_24485 = G__24502;
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
 * Converts sexprs to a tree.
 */
tattoo.core.sexp__GT_tree = (function tattoo$core$sexp__GT_tree(sexp){
if(cljs.core.coll_QMARK_.call(null,sexp)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.core.first.call(null,sexp),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.call(null,tattoo$core$sexp__GT_tree,cljs.core.rest.call(null,sexp))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),sexp], null);
}
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
return cljs.core.merge.call(null,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"theta","theta",-427510258),theta__$1),cljs.core.second.call(null,tattoo.core.polar__GT_cart.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"origin","origin",1037372088),t__$1,new cljs.core.Keyword(null,"r","r",-471384190),(tattoo.core.grid / scale),new cljs.core.Keyword(null,"theta","theta",-427510258),theta__$1], null))));
});})(theta,scale,x,y,t__$1))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t__$1)));
return tattoo.core.recurse.call(null,t__$2,tattoo$core$initial_coords);
});
/**
 * Turns a tree into a dynamic tree with atoms for :x and :y coords.
 */
tattoo.core.tree__GT_dtree = (function tattoo$core$tree__GT_dtree(t){
return tattoo.core.recurse.call(null,cljs.core.update.call(null,cljs.core.update.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.atom),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.atom),tattoo$core$tree__GT_dtree);
});
/**
 * Turns a dynamic tree back into a plain old static tree.
 */
tattoo.core.dtree__GT_tree = (function tattoo$core$dtree__GT_tree(t){
return tattoo.core.recurse.call(null,cljs.core.update.call(null,cljs.core.update.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.deref),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.deref),tattoo$core$dtree__GT_tree);
});
/**
 * Renders control points for dtree nodes.
 */
tattoo.core.render_control_points_BANG_ = (function tattoo$core$render_control_points_BANG_(var_args){
var args24504 = [];
var len__22749__auto___24511 = arguments.length;
var i__22750__auto___24512 = (0);
while(true){
if((i__22750__auto___24512 < len__22749__auto___24511)){
args24504.push((arguments[i__22750__auto___24512]));

var G__24513 = (i__22750__auto___24512 + (1));
i__22750__auto___24512 = G__24513;
continue;
} else {
}
break;
}

var G__24506 = args24504.length;
switch (G__24506) {
case 2:
return tattoo.core.render_control_points_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tattoo.core.render_control_points_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24504.length)].join('')));

}
});

tattoo.core.render_control_points_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (t,s){
return tattoo.core.render_control_points_BANG_.call(null,t,t,s);
});

tattoo.core.render_control_points_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (t,top,s){
var dx_24515 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(t);
var dy_24516 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(t);
var p_24517 = tattoo.core.add_circle_BANG_.call(null,s,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.deref.call(null,dx_24515),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.deref.call(null,dy_24516)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#aaa"], null));
p_24517.drag(((function (dx_24515,dy_24516,p_24517){
return (function tattoo$core$move(x,y,event){
var ot = p_24517.data("origTransform");
p_24517.transform([cljs.core.str(ot),cljs.core.str((cljs.core.truth_(ot)?"T":"t")),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y)].join(''));

var b_24518 = p_24517.getBBox();
cljs.core.reset_BANG_.call(null,dx_24515,b_24518.cx);

cljs.core.reset_BANG_.call(null,dy_24516,b_24518.cy);

s.selectAll("line").forEach(((function (ot,dx_24515,dy_24516,p_24517){
return (function (p1__24503_SHARP_){
return p1__24503_SHARP_.remove();
});})(ot,dx_24515,dy_24516,p_24517))
);

return tattoo.core.render_BANG_.call(null,tattoo.core.layout.call(null,tattoo.core.dtree__GT_tree.call(null,top)),s);
});})(dx_24515,dy_24516,p_24517))
,((function (dx_24515,dy_24516,p_24517){
return (function tattoo$core$start(){
return p_24517.data("origTransform",p_24517.transform().local);
});})(dx_24515,dy_24516,p_24517))
);

var seq__24507_24519 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(t));
var chunk__24508_24520 = null;
var count__24509_24521 = (0);
var i__24510_24522 = (0);
while(true){
if((i__24510_24522 < count__24509_24521)){
var c_24523 = cljs.core._nth.call(null,chunk__24508_24520,i__24510_24522);
tattoo.core.render_control_points_BANG_.call(null,c_24523,top,s);

var G__24524 = seq__24507_24519;
var G__24525 = chunk__24508_24520;
var G__24526 = count__24509_24521;
var G__24527 = (i__24510_24522 + (1));
seq__24507_24519 = G__24524;
chunk__24508_24520 = G__24525;
count__24509_24521 = G__24526;
i__24510_24522 = G__24527;
continue;
} else {
var temp__4657__auto___24528 = cljs.core.seq.call(null,seq__24507_24519);
if(temp__4657__auto___24528){
var seq__24507_24529__$1 = temp__4657__auto___24528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24507_24529__$1)){
var c__22485__auto___24530 = cljs.core.chunk_first.call(null,seq__24507_24529__$1);
var G__24531 = cljs.core.chunk_rest.call(null,seq__24507_24529__$1);
var G__24532 = c__22485__auto___24530;
var G__24533 = cljs.core.count.call(null,c__22485__auto___24530);
var G__24534 = (0);
seq__24507_24519 = G__24531;
chunk__24508_24520 = G__24532;
count__24509_24521 = G__24533;
i__24510_24522 = G__24534;
continue;
} else {
var c_24535 = cljs.core.first.call(null,seq__24507_24529__$1);
tattoo.core.render_control_points_BANG_.call(null,c_24535,top,s);

var G__24536 = cljs.core.next.call(null,seq__24507_24529__$1);
var G__24537 = null;
var G__24538 = (0);
var G__24539 = (0);
seq__24507_24519 = G__24536;
chunk__24508_24520 = G__24537;
count__24509_24521 = G__24538;
i__24510_24522 = G__24539;
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
var tree__$1 = tattoo.core.ids.call(null,tattoo.core.initial_coords.call(null,tattoo.core.sexp__GT_tree.call(null,tree)));
var dtree = tattoo.core.tree__GT_dtree.call(null,tree__$1);
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

//# sourceMappingURL=core.js.map?rel=1468209948067