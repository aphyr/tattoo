// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24022 = [];
var len__22749__auto___24028 = arguments.length;
var i__22750__auto___24029 = (0);
while(true){
if((i__22750__auto___24029 < len__22749__auto___24028)){
args24022.push((arguments[i__22750__auto___24029]));

var G__24030 = (i__22750__auto___24029 + (1));
i__22750__auto___24029 = G__24030;
continue;
} else {
}
break;
}

var G__24024 = args24022.length;
switch (G__24024) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24022.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24025 = (function (f,blockable,meta24026){
this.f = f;
this.blockable = blockable;
this.meta24026 = meta24026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24027,meta24026__$1){
var self__ = this;
var _24027__$1 = this;
return (new cljs.core.async.t_cljs$core$async24025(self__.f,self__.blockable,meta24026__$1));
});

cljs.core.async.t_cljs$core$async24025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24027){
var self__ = this;
var _24027__$1 = this;
return self__.meta24026;
});

cljs.core.async.t_cljs$core$async24025.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24025.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24025.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24025.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24026","meta24026",1679063175,null)], null);
});

cljs.core.async.t_cljs$core$async24025.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24025";

cljs.core.async.t_cljs$core$async24025.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async24025");
});

cljs.core.async.__GT_t_cljs$core$async24025 = (function cljs$core$async$__GT_t_cljs$core$async24025(f__$1,blockable__$1,meta24026){
return (new cljs.core.async.t_cljs$core$async24025(f__$1,blockable__$1,meta24026));
});

}

return (new cljs.core.async.t_cljs$core$async24025(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args24034 = [];
var len__22749__auto___24037 = arguments.length;
var i__22750__auto___24038 = (0);
while(true){
if((i__22750__auto___24038 < len__22749__auto___24037)){
args24034.push((arguments[i__22750__auto___24038]));

var G__24039 = (i__22750__auto___24038 + (1));
i__22750__auto___24038 = G__24039;
continue;
} else {
}
break;
}

var G__24036 = args24034.length;
switch (G__24036) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24034.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24041 = [];
var len__22749__auto___24044 = arguments.length;
var i__22750__auto___24045 = (0);
while(true){
if((i__22750__auto___24045 < len__22749__auto___24044)){
args24041.push((arguments[i__22750__auto___24045]));

var G__24046 = (i__22750__auto___24045 + (1));
i__22750__auto___24045 = G__24046;
continue;
} else {
}
break;
}

var G__24043 = args24041.length;
switch (G__24043) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24041.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args24048 = [];
var len__22749__auto___24051 = arguments.length;
var i__22750__auto___24052 = (0);
while(true){
if((i__22750__auto___24052 < len__22749__auto___24051)){
args24048.push((arguments[i__22750__auto___24052]));

var G__24053 = (i__22750__auto___24052 + (1));
i__22750__auto___24052 = G__24053;
continue;
} else {
}
break;
}

var G__24050 = args24048.length;
switch (G__24050) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24048.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24055 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24055);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24055,ret){
return (function (){
return fn1.call(null,val_24055);
});})(val_24055,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24056 = [];
var len__22749__auto___24059 = arguments.length;
var i__22750__auto___24060 = (0);
while(true){
if((i__22750__auto___24060 < len__22749__auto___24059)){
args24056.push((arguments[i__22750__auto___24060]));

var G__24061 = (i__22750__auto___24060 + (1));
i__22750__auto___24060 = G__24061;
continue;
} else {
}
break;
}

var G__24058 = args24056.length;
switch (G__24058) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24056.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22589__auto___24063 = n;
var x_24064 = (0);
while(true){
if((x_24064 < n__22589__auto___24063)){
(a[x_24064] = (0));

var G__24065 = (x_24064 + (1));
x_24064 = G__24065;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24066 = (i + (1));
i = G__24066;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24070 = (function (alt_flag,flag,meta24071){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24071 = meta24071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24072,meta24071__$1){
var self__ = this;
var _24072__$1 = this;
return (new cljs.core.async.t_cljs$core$async24070(self__.alt_flag,self__.flag,meta24071__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24072){
var self__ = this;
var _24072__$1 = this;
return self__.meta24071;
});})(flag))
;

cljs.core.async.t_cljs$core$async24070.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24070.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24070.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24071","meta24071",889682794,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24070";

cljs.core.async.t_cljs$core$async24070.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async24070");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24070 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24070(alt_flag__$1,flag__$1,meta24071){
return (new cljs.core.async.t_cljs$core$async24070(alt_flag__$1,flag__$1,meta24071));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24070(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24076 = (function (alt_handler,flag,cb,meta24077){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24077 = meta24077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24078,meta24077__$1){
var self__ = this;
var _24078__$1 = this;
return (new cljs.core.async.t_cljs$core$async24076(self__.alt_handler,self__.flag,self__.cb,meta24077__$1));
});

cljs.core.async.t_cljs$core$async24076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24078){
var self__ = this;
var _24078__$1 = this;
return self__.meta24077;
});

cljs.core.async.t_cljs$core$async24076.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24076.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24077","meta24077",677120015,null)], null);
});

cljs.core.async.t_cljs$core$async24076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24076";

cljs.core.async.t_cljs$core$async24076.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async24076");
});

cljs.core.async.__GT_t_cljs$core$async24076 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24076(alt_handler__$1,flag__$1,cb__$1,meta24077){
return (new cljs.core.async.t_cljs$core$async24076(alt_handler__$1,flag__$1,cb__$1,meta24077));
});

}

return (new cljs.core.async.t_cljs$core$async24076(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24079_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24079_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24080_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24080_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21674__auto__ = wport;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24081 = (i + (1));
i = G__24081;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21674__auto__ = ret;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21662__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21662__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21662__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22756__auto__ = [];
var len__22749__auto___24087 = arguments.length;
var i__22750__auto___24088 = (0);
while(true){
if((i__22750__auto___24088 < len__22749__auto___24087)){
args__22756__auto__.push((arguments[i__22750__auto___24088]));

var G__24089 = (i__22750__auto___24088 + (1));
i__22750__auto___24088 = G__24089;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((1) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22757__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24084){
var map__24085 = p__24084;
var map__24085__$1 = ((((!((map__24085 == null)))?((((map__24085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24085):map__24085);
var opts = map__24085__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24082){
var G__24083 = cljs.core.first.call(null,seq24082);
var seq24082__$1 = cljs.core.next.call(null,seq24082);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24083,seq24082__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24090 = [];
var len__22749__auto___24140 = arguments.length;
var i__22750__auto___24141 = (0);
while(true){
if((i__22750__auto___24141 < len__22749__auto___24140)){
args24090.push((arguments[i__22750__auto___24141]));

var G__24142 = (i__22750__auto___24141 + (1));
i__22750__auto___24141 = G__24142;
continue;
} else {
}
break;
}

var G__24092 = args24090.length;
switch (G__24092) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24090.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23977__auto___24144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___24144){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___24144){
return (function (state_24116){
var state_val_24117 = (state_24116[(1)]);
if((state_val_24117 === (7))){
var inst_24112 = (state_24116[(2)]);
var state_24116__$1 = state_24116;
var statearr_24118_24145 = state_24116__$1;
(statearr_24118_24145[(2)] = inst_24112);

(statearr_24118_24145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24117 === (1))){
var state_24116__$1 = state_24116;
var statearr_24119_24146 = state_24116__$1;
(statearr_24119_24146[(2)] = null);

(statearr_24119_24146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24117 === (4))){
var inst_24095 = (state_24116[(7)]);
var inst_24095__$1 = (state_24116[(2)]);
var inst_24096 = (inst_24095__$1 == null);
var state_24116__$1 = (function (){var statearr_24120 = state_24116;
(statearr_24120[(7)] = inst_24095__$1);

return statearr_24120;
})();
if(cljs.core.truth_(inst_24096)){
var statearr_24121_24147 = state_24116__$1;
(statearr_24121_24147[(1)] = (5));

} else {
var statearr_24122_24148 = state_24116__$1;
(statearr_24122_24148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24117 === (13))){
var state_24116__$1 = state_24116;
var statearr_24123_24149 = state_24116__$1;
(statearr_24123_24149[(2)] = null);

(statearr_24123_24149[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24117 === (6))){
var inst_24095 = (state_24116[(7)]);
var state_24116__$1 = state_24116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24116__$1,(11),to,inst_24095);
} else {
if((state_val_24117 === (3))){
var inst_24114 = (state_24116[(2)]);
var state_24116__$1 = state_24116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24116__$1,inst_24114);
} else {
if((state_val_24117 === (12))){
var state_24116__$1 = state_24116;
var statearr_24124_24150 = state_24116__$1;
(statearr_24124_24150[(2)] = null);

(statearr_24124_24150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24117 === (2))){
var state_24116__$1 = state_24116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24116__$1,(4),from);
} else {
if((state_val_24117 === (11))){
var inst_24105 = (state_24116[(2)]);
var state_24116__$1 = state_24116;
if(cljs.core.truth_(inst_24105)){
var statearr_24125_24151 = state_24116__$1;
(statearr_24125_24151[(1)] = (12));

} else {
var statearr_24126_24152 = state_24116__$1;
(statearr_24126_24152[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24117 === (9))){
var state_24116__$1 = state_24116;
var statearr_24127_24153 = state_24116__$1;
(statearr_24127_24153[(2)] = null);

(statearr_24127_24153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24117 === (5))){
var state_24116__$1 = state_24116;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24128_24154 = state_24116__$1;
(statearr_24128_24154[(1)] = (8));

} else {
var statearr_24129_24155 = state_24116__$1;
(statearr_24129_24155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24117 === (14))){
var inst_24110 = (state_24116[(2)]);
var state_24116__$1 = state_24116;
var statearr_24130_24156 = state_24116__$1;
(statearr_24130_24156[(2)] = inst_24110);

(statearr_24130_24156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24117 === (10))){
var inst_24102 = (state_24116[(2)]);
var state_24116__$1 = state_24116;
var statearr_24131_24157 = state_24116__$1;
(statearr_24131_24157[(2)] = inst_24102);

(statearr_24131_24157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24117 === (8))){
var inst_24099 = cljs.core.async.close_BANG_.call(null,to);
var state_24116__$1 = state_24116;
var statearr_24132_24158 = state_24116__$1;
(statearr_24132_24158[(2)] = inst_24099);

(statearr_24132_24158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto___24144))
;
return ((function (switch__23865__auto__,c__23977__auto___24144){
return (function() {
var cljs$core$async$state_machine__23866__auto__ = null;
var cljs$core$async$state_machine__23866__auto____0 = (function (){
var statearr_24136 = [null,null,null,null,null,null,null,null];
(statearr_24136[(0)] = cljs$core$async$state_machine__23866__auto__);

(statearr_24136[(1)] = (1));

return statearr_24136;
});
var cljs$core$async$state_machine__23866__auto____1 = (function (state_24116){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_24116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e24137){if((e24137 instanceof Object)){
var ex__23869__auto__ = e24137;
var statearr_24138_24159 = state_24116;
(statearr_24138_24159[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24160 = state_24116;
state_24116 = G__24160;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$state_machine__23866__auto__ = function(state_24116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23866__auto____1.call(this,state_24116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23866__auto____0;
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23866__auto____1;
return cljs$core$async$state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___24144))
})();
var state__23979__auto__ = (function (){var statearr_24139 = f__23978__auto__.call(null);
(statearr_24139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___24144);

return statearr_24139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___24144))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24348){
var vec__24349 = p__24348;
var v = cljs.core.nth.call(null,vec__24349,(0),null);
var p = cljs.core.nth.call(null,vec__24349,(1),null);
var job = vec__24349;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23977__auto___24535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___24535,res,vec__24349,v,p,job,jobs,results){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___24535,res,vec__24349,v,p,job,jobs,results){
return (function (state_24356){
var state_val_24357 = (state_24356[(1)]);
if((state_val_24357 === (1))){
var state_24356__$1 = state_24356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24356__$1,(2),res,v);
} else {
if((state_val_24357 === (2))){
var inst_24353 = (state_24356[(2)]);
var inst_24354 = cljs.core.async.close_BANG_.call(null,res);
var state_24356__$1 = (function (){var statearr_24358 = state_24356;
(statearr_24358[(7)] = inst_24353);

return statearr_24358;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24356__$1,inst_24354);
} else {
return null;
}
}
});})(c__23977__auto___24535,res,vec__24349,v,p,job,jobs,results))
;
return ((function (switch__23865__auto__,c__23977__auto___24535,res,vec__24349,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____0 = (function (){
var statearr_24362 = [null,null,null,null,null,null,null,null];
(statearr_24362[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__);

(statearr_24362[(1)] = (1));

return statearr_24362;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____1 = (function (state_24356){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_24356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e24363){if((e24363 instanceof Object)){
var ex__23869__auto__ = e24363;
var statearr_24364_24536 = state_24356;
(statearr_24364_24536[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24537 = state_24356;
state_24356 = G__24537;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__ = function(state_24356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____1.call(this,state_24356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___24535,res,vec__24349,v,p,job,jobs,results))
})();
var state__23979__auto__ = (function (){var statearr_24365 = f__23978__auto__.call(null);
(statearr_24365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___24535);

return statearr_24365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___24535,res,vec__24349,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24366){
var vec__24367 = p__24366;
var v = cljs.core.nth.call(null,vec__24367,(0),null);
var p = cljs.core.nth.call(null,vec__24367,(1),null);
var job = vec__24367;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22589__auto___24538 = n;
var __24539 = (0);
while(true){
if((__24539 < n__22589__auto___24538)){
var G__24370_24540 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24370_24540) {
case "compute":
var c__23977__auto___24542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24539,c__23977__auto___24542,G__24370_24540,n__22589__auto___24538,jobs,results,process,async){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (__24539,c__23977__auto___24542,G__24370_24540,n__22589__auto___24538,jobs,results,process,async){
return (function (state_24383){
var state_val_24384 = (state_24383[(1)]);
if((state_val_24384 === (1))){
var state_24383__$1 = state_24383;
var statearr_24385_24543 = state_24383__$1;
(statearr_24385_24543[(2)] = null);

(statearr_24385_24543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (2))){
var state_24383__$1 = state_24383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24383__$1,(4),jobs);
} else {
if((state_val_24384 === (3))){
var inst_24381 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24383__$1,inst_24381);
} else {
if((state_val_24384 === (4))){
var inst_24373 = (state_24383[(2)]);
var inst_24374 = process.call(null,inst_24373);
var state_24383__$1 = state_24383;
if(cljs.core.truth_(inst_24374)){
var statearr_24386_24544 = state_24383__$1;
(statearr_24386_24544[(1)] = (5));

} else {
var statearr_24387_24545 = state_24383__$1;
(statearr_24387_24545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (5))){
var state_24383__$1 = state_24383;
var statearr_24388_24546 = state_24383__$1;
(statearr_24388_24546[(2)] = null);

(statearr_24388_24546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (6))){
var state_24383__$1 = state_24383;
var statearr_24389_24547 = state_24383__$1;
(statearr_24389_24547[(2)] = null);

(statearr_24389_24547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (7))){
var inst_24379 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
var statearr_24390_24548 = state_24383__$1;
(statearr_24390_24548[(2)] = inst_24379);

(statearr_24390_24548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24539,c__23977__auto___24542,G__24370_24540,n__22589__auto___24538,jobs,results,process,async))
;
return ((function (__24539,switch__23865__auto__,c__23977__auto___24542,G__24370_24540,n__22589__auto___24538,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____0 = (function (){
var statearr_24394 = [null,null,null,null,null,null,null];
(statearr_24394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__);

(statearr_24394[(1)] = (1));

return statearr_24394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____1 = (function (state_24383){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_24383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e24395){if((e24395 instanceof Object)){
var ex__23869__auto__ = e24395;
var statearr_24396_24549 = state_24383;
(statearr_24396_24549[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24550 = state_24383;
state_24383 = G__24550;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__ = function(state_24383){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____1.call(this,state_24383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__;
})()
;})(__24539,switch__23865__auto__,c__23977__auto___24542,G__24370_24540,n__22589__auto___24538,jobs,results,process,async))
})();
var state__23979__auto__ = (function (){var statearr_24397 = f__23978__auto__.call(null);
(statearr_24397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___24542);

return statearr_24397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(__24539,c__23977__auto___24542,G__24370_24540,n__22589__auto___24538,jobs,results,process,async))
);


break;
case "async":
var c__23977__auto___24551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24539,c__23977__auto___24551,G__24370_24540,n__22589__auto___24538,jobs,results,process,async){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (__24539,c__23977__auto___24551,G__24370_24540,n__22589__auto___24538,jobs,results,process,async){
return (function (state_24410){
var state_val_24411 = (state_24410[(1)]);
if((state_val_24411 === (1))){
var state_24410__$1 = state_24410;
var statearr_24412_24552 = state_24410__$1;
(statearr_24412_24552[(2)] = null);

(statearr_24412_24552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (2))){
var state_24410__$1 = state_24410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24410__$1,(4),jobs);
} else {
if((state_val_24411 === (3))){
var inst_24408 = (state_24410[(2)]);
var state_24410__$1 = state_24410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24410__$1,inst_24408);
} else {
if((state_val_24411 === (4))){
var inst_24400 = (state_24410[(2)]);
var inst_24401 = async.call(null,inst_24400);
var state_24410__$1 = state_24410;
if(cljs.core.truth_(inst_24401)){
var statearr_24413_24553 = state_24410__$1;
(statearr_24413_24553[(1)] = (5));

} else {
var statearr_24414_24554 = state_24410__$1;
(statearr_24414_24554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (5))){
var state_24410__$1 = state_24410;
var statearr_24415_24555 = state_24410__$1;
(statearr_24415_24555[(2)] = null);

(statearr_24415_24555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (6))){
var state_24410__$1 = state_24410;
var statearr_24416_24556 = state_24410__$1;
(statearr_24416_24556[(2)] = null);

(statearr_24416_24556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (7))){
var inst_24406 = (state_24410[(2)]);
var state_24410__$1 = state_24410;
var statearr_24417_24557 = state_24410__$1;
(statearr_24417_24557[(2)] = inst_24406);

(statearr_24417_24557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24539,c__23977__auto___24551,G__24370_24540,n__22589__auto___24538,jobs,results,process,async))
;
return ((function (__24539,switch__23865__auto__,c__23977__auto___24551,G__24370_24540,n__22589__auto___24538,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____0 = (function (){
var statearr_24421 = [null,null,null,null,null,null,null];
(statearr_24421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__);

(statearr_24421[(1)] = (1));

return statearr_24421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____1 = (function (state_24410){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_24410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e24422){if((e24422 instanceof Object)){
var ex__23869__auto__ = e24422;
var statearr_24423_24558 = state_24410;
(statearr_24423_24558[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24559 = state_24410;
state_24410 = G__24559;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__ = function(state_24410){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____1.call(this,state_24410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__;
})()
;})(__24539,switch__23865__auto__,c__23977__auto___24551,G__24370_24540,n__22589__auto___24538,jobs,results,process,async))
})();
var state__23979__auto__ = (function (){var statearr_24424 = f__23978__auto__.call(null);
(statearr_24424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___24551);

return statearr_24424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(__24539,c__23977__auto___24551,G__24370_24540,n__22589__auto___24538,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24560 = (__24539 + (1));
__24539 = G__24560;
continue;
} else {
}
break;
}

var c__23977__auto___24561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___24561,jobs,results,process,async){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___24561,jobs,results,process,async){
return (function (state_24446){
var state_val_24447 = (state_24446[(1)]);
if((state_val_24447 === (1))){
var state_24446__$1 = state_24446;
var statearr_24448_24562 = state_24446__$1;
(statearr_24448_24562[(2)] = null);

(statearr_24448_24562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24447 === (2))){
var state_24446__$1 = state_24446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24446__$1,(4),from);
} else {
if((state_val_24447 === (3))){
var inst_24444 = (state_24446[(2)]);
var state_24446__$1 = state_24446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24446__$1,inst_24444);
} else {
if((state_val_24447 === (4))){
var inst_24427 = (state_24446[(7)]);
var inst_24427__$1 = (state_24446[(2)]);
var inst_24428 = (inst_24427__$1 == null);
var state_24446__$1 = (function (){var statearr_24449 = state_24446;
(statearr_24449[(7)] = inst_24427__$1);

return statearr_24449;
})();
if(cljs.core.truth_(inst_24428)){
var statearr_24450_24563 = state_24446__$1;
(statearr_24450_24563[(1)] = (5));

} else {
var statearr_24451_24564 = state_24446__$1;
(statearr_24451_24564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24447 === (5))){
var inst_24430 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24446__$1 = state_24446;
var statearr_24452_24565 = state_24446__$1;
(statearr_24452_24565[(2)] = inst_24430);

(statearr_24452_24565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24447 === (6))){
var inst_24427 = (state_24446[(7)]);
var inst_24432 = (state_24446[(8)]);
var inst_24432__$1 = cljs.core.async.chan.call(null,(1));
var inst_24433 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24434 = [inst_24427,inst_24432__$1];
var inst_24435 = (new cljs.core.PersistentVector(null,2,(5),inst_24433,inst_24434,null));
var state_24446__$1 = (function (){var statearr_24453 = state_24446;
(statearr_24453[(8)] = inst_24432__$1);

return statearr_24453;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24446__$1,(8),jobs,inst_24435);
} else {
if((state_val_24447 === (7))){
var inst_24442 = (state_24446[(2)]);
var state_24446__$1 = state_24446;
var statearr_24454_24566 = state_24446__$1;
(statearr_24454_24566[(2)] = inst_24442);

(statearr_24454_24566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24447 === (8))){
var inst_24432 = (state_24446[(8)]);
var inst_24437 = (state_24446[(2)]);
var state_24446__$1 = (function (){var statearr_24455 = state_24446;
(statearr_24455[(9)] = inst_24437);

return statearr_24455;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24446__$1,(9),results,inst_24432);
} else {
if((state_val_24447 === (9))){
var inst_24439 = (state_24446[(2)]);
var state_24446__$1 = (function (){var statearr_24456 = state_24446;
(statearr_24456[(10)] = inst_24439);

return statearr_24456;
})();
var statearr_24457_24567 = state_24446__$1;
(statearr_24457_24567[(2)] = null);

(statearr_24457_24567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__23977__auto___24561,jobs,results,process,async))
;
return ((function (switch__23865__auto__,c__23977__auto___24561,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____0 = (function (){
var statearr_24461 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__);

(statearr_24461[(1)] = (1));

return statearr_24461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____1 = (function (state_24446){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_24446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e24462){if((e24462 instanceof Object)){
var ex__23869__auto__ = e24462;
var statearr_24463_24568 = state_24446;
(statearr_24463_24568[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24569 = state_24446;
state_24446 = G__24569;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__ = function(state_24446){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____1.call(this,state_24446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___24561,jobs,results,process,async))
})();
var state__23979__auto__ = (function (){var statearr_24464 = f__23978__auto__.call(null);
(statearr_24464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___24561);

return statearr_24464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___24561,jobs,results,process,async))
);


var c__23977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto__,jobs,results,process,async){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto__,jobs,results,process,async){
return (function (state_24502){
var state_val_24503 = (state_24502[(1)]);
if((state_val_24503 === (7))){
var inst_24498 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24504_24570 = state_24502__$1;
(statearr_24504_24570[(2)] = inst_24498);

(statearr_24504_24570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (20))){
var state_24502__$1 = state_24502;
var statearr_24505_24571 = state_24502__$1;
(statearr_24505_24571[(2)] = null);

(statearr_24505_24571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (1))){
var state_24502__$1 = state_24502;
var statearr_24506_24572 = state_24502__$1;
(statearr_24506_24572[(2)] = null);

(statearr_24506_24572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (4))){
var inst_24467 = (state_24502[(7)]);
var inst_24467__$1 = (state_24502[(2)]);
var inst_24468 = (inst_24467__$1 == null);
var state_24502__$1 = (function (){var statearr_24507 = state_24502;
(statearr_24507[(7)] = inst_24467__$1);

return statearr_24507;
})();
if(cljs.core.truth_(inst_24468)){
var statearr_24508_24573 = state_24502__$1;
(statearr_24508_24573[(1)] = (5));

} else {
var statearr_24509_24574 = state_24502__$1;
(statearr_24509_24574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (15))){
var inst_24480 = (state_24502[(8)]);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24502__$1,(18),to,inst_24480);
} else {
if((state_val_24503 === (21))){
var inst_24493 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24510_24575 = state_24502__$1;
(statearr_24510_24575[(2)] = inst_24493);

(statearr_24510_24575[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (13))){
var inst_24495 = (state_24502[(2)]);
var state_24502__$1 = (function (){var statearr_24511 = state_24502;
(statearr_24511[(9)] = inst_24495);

return statearr_24511;
})();
var statearr_24512_24576 = state_24502__$1;
(statearr_24512_24576[(2)] = null);

(statearr_24512_24576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (6))){
var inst_24467 = (state_24502[(7)]);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(11),inst_24467);
} else {
if((state_val_24503 === (17))){
var inst_24488 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
if(cljs.core.truth_(inst_24488)){
var statearr_24513_24577 = state_24502__$1;
(statearr_24513_24577[(1)] = (19));

} else {
var statearr_24514_24578 = state_24502__$1;
(statearr_24514_24578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (3))){
var inst_24500 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24502__$1,inst_24500);
} else {
if((state_val_24503 === (12))){
var inst_24477 = (state_24502[(10)]);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(14),inst_24477);
} else {
if((state_val_24503 === (2))){
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(4),results);
} else {
if((state_val_24503 === (19))){
var state_24502__$1 = state_24502;
var statearr_24515_24579 = state_24502__$1;
(statearr_24515_24579[(2)] = null);

(statearr_24515_24579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (11))){
var inst_24477 = (state_24502[(2)]);
var state_24502__$1 = (function (){var statearr_24516 = state_24502;
(statearr_24516[(10)] = inst_24477);

return statearr_24516;
})();
var statearr_24517_24580 = state_24502__$1;
(statearr_24517_24580[(2)] = null);

(statearr_24517_24580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (9))){
var state_24502__$1 = state_24502;
var statearr_24518_24581 = state_24502__$1;
(statearr_24518_24581[(2)] = null);

(statearr_24518_24581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (5))){
var state_24502__$1 = state_24502;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24519_24582 = state_24502__$1;
(statearr_24519_24582[(1)] = (8));

} else {
var statearr_24520_24583 = state_24502__$1;
(statearr_24520_24583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (14))){
var inst_24480 = (state_24502[(8)]);
var inst_24482 = (state_24502[(11)]);
var inst_24480__$1 = (state_24502[(2)]);
var inst_24481 = (inst_24480__$1 == null);
var inst_24482__$1 = cljs.core.not.call(null,inst_24481);
var state_24502__$1 = (function (){var statearr_24521 = state_24502;
(statearr_24521[(8)] = inst_24480__$1);

(statearr_24521[(11)] = inst_24482__$1);

return statearr_24521;
})();
if(inst_24482__$1){
var statearr_24522_24584 = state_24502__$1;
(statearr_24522_24584[(1)] = (15));

} else {
var statearr_24523_24585 = state_24502__$1;
(statearr_24523_24585[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (16))){
var inst_24482 = (state_24502[(11)]);
var state_24502__$1 = state_24502;
var statearr_24524_24586 = state_24502__$1;
(statearr_24524_24586[(2)] = inst_24482);

(statearr_24524_24586[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (10))){
var inst_24474 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24525_24587 = state_24502__$1;
(statearr_24525_24587[(2)] = inst_24474);

(statearr_24525_24587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (18))){
var inst_24485 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24526_24588 = state_24502__$1;
(statearr_24526_24588[(2)] = inst_24485);

(statearr_24526_24588[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (8))){
var inst_24471 = cljs.core.async.close_BANG_.call(null,to);
var state_24502__$1 = state_24502;
var statearr_24527_24589 = state_24502__$1;
(statearr_24527_24589[(2)] = inst_24471);

(statearr_24527_24589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto__,jobs,results,process,async))
;
return ((function (switch__23865__auto__,c__23977__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____0 = (function (){
var statearr_24531 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__);

(statearr_24531[(1)] = (1));

return statearr_24531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____1 = (function (state_24502){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_24502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e24532){if((e24532 instanceof Object)){
var ex__23869__auto__ = e24532;
var statearr_24533_24590 = state_24502;
(statearr_24533_24590[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24591 = state_24502;
state_24502 = G__24591;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__ = function(state_24502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____1.call(this,state_24502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto__,jobs,results,process,async))
})();
var state__23979__auto__ = (function (){var statearr_24534 = f__23978__auto__.call(null);
(statearr_24534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto__);

return statearr_24534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto__,jobs,results,process,async))
);

return c__23977__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24592 = [];
var len__22749__auto___24595 = arguments.length;
var i__22750__auto___24596 = (0);
while(true){
if((i__22750__auto___24596 < len__22749__auto___24595)){
args24592.push((arguments[i__22750__auto___24596]));

var G__24597 = (i__22750__auto___24596 + (1));
i__22750__auto___24596 = G__24597;
continue;
} else {
}
break;
}

var G__24594 = args24592.length;
switch (G__24594) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24592.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24599 = [];
var len__22749__auto___24602 = arguments.length;
var i__22750__auto___24603 = (0);
while(true){
if((i__22750__auto___24603 < len__22749__auto___24602)){
args24599.push((arguments[i__22750__auto___24603]));

var G__24604 = (i__22750__auto___24603 + (1));
i__22750__auto___24603 = G__24604;
continue;
} else {
}
break;
}

var G__24601 = args24599.length;
switch (G__24601) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24599.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24606 = [];
var len__22749__auto___24659 = arguments.length;
var i__22750__auto___24660 = (0);
while(true){
if((i__22750__auto___24660 < len__22749__auto___24659)){
args24606.push((arguments[i__22750__auto___24660]));

var G__24661 = (i__22750__auto___24660 + (1));
i__22750__auto___24660 = G__24661;
continue;
} else {
}
break;
}

var G__24608 = args24606.length;
switch (G__24608) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24606.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23977__auto___24663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___24663,tc,fc){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___24663,tc,fc){
return (function (state_24634){
var state_val_24635 = (state_24634[(1)]);
if((state_val_24635 === (7))){
var inst_24630 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
var statearr_24636_24664 = state_24634__$1;
(statearr_24636_24664[(2)] = inst_24630);

(statearr_24636_24664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (1))){
var state_24634__$1 = state_24634;
var statearr_24637_24665 = state_24634__$1;
(statearr_24637_24665[(2)] = null);

(statearr_24637_24665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (4))){
var inst_24611 = (state_24634[(7)]);
var inst_24611__$1 = (state_24634[(2)]);
var inst_24612 = (inst_24611__$1 == null);
var state_24634__$1 = (function (){var statearr_24638 = state_24634;
(statearr_24638[(7)] = inst_24611__$1);

return statearr_24638;
})();
if(cljs.core.truth_(inst_24612)){
var statearr_24639_24666 = state_24634__$1;
(statearr_24639_24666[(1)] = (5));

} else {
var statearr_24640_24667 = state_24634__$1;
(statearr_24640_24667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (13))){
var state_24634__$1 = state_24634;
var statearr_24641_24668 = state_24634__$1;
(statearr_24641_24668[(2)] = null);

(statearr_24641_24668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (6))){
var inst_24611 = (state_24634[(7)]);
var inst_24617 = p.call(null,inst_24611);
var state_24634__$1 = state_24634;
if(cljs.core.truth_(inst_24617)){
var statearr_24642_24669 = state_24634__$1;
(statearr_24642_24669[(1)] = (9));

} else {
var statearr_24643_24670 = state_24634__$1;
(statearr_24643_24670[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (3))){
var inst_24632 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24634__$1,inst_24632);
} else {
if((state_val_24635 === (12))){
var state_24634__$1 = state_24634;
var statearr_24644_24671 = state_24634__$1;
(statearr_24644_24671[(2)] = null);

(statearr_24644_24671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (2))){
var state_24634__$1 = state_24634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24634__$1,(4),ch);
} else {
if((state_val_24635 === (11))){
var inst_24611 = (state_24634[(7)]);
var inst_24621 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24634__$1,(8),inst_24621,inst_24611);
} else {
if((state_val_24635 === (9))){
var state_24634__$1 = state_24634;
var statearr_24645_24672 = state_24634__$1;
(statearr_24645_24672[(2)] = tc);

(statearr_24645_24672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (5))){
var inst_24614 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24615 = cljs.core.async.close_BANG_.call(null,fc);
var state_24634__$1 = (function (){var statearr_24646 = state_24634;
(statearr_24646[(8)] = inst_24614);

return statearr_24646;
})();
var statearr_24647_24673 = state_24634__$1;
(statearr_24647_24673[(2)] = inst_24615);

(statearr_24647_24673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (14))){
var inst_24628 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
var statearr_24648_24674 = state_24634__$1;
(statearr_24648_24674[(2)] = inst_24628);

(statearr_24648_24674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (10))){
var state_24634__$1 = state_24634;
var statearr_24649_24675 = state_24634__$1;
(statearr_24649_24675[(2)] = fc);

(statearr_24649_24675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (8))){
var inst_24623 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
if(cljs.core.truth_(inst_24623)){
var statearr_24650_24676 = state_24634__$1;
(statearr_24650_24676[(1)] = (12));

} else {
var statearr_24651_24677 = state_24634__$1;
(statearr_24651_24677[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto___24663,tc,fc))
;
return ((function (switch__23865__auto__,c__23977__auto___24663,tc,fc){
return (function() {
var cljs$core$async$state_machine__23866__auto__ = null;
var cljs$core$async$state_machine__23866__auto____0 = (function (){
var statearr_24655 = [null,null,null,null,null,null,null,null,null];
(statearr_24655[(0)] = cljs$core$async$state_machine__23866__auto__);

(statearr_24655[(1)] = (1));

return statearr_24655;
});
var cljs$core$async$state_machine__23866__auto____1 = (function (state_24634){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_24634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e24656){if((e24656 instanceof Object)){
var ex__23869__auto__ = e24656;
var statearr_24657_24678 = state_24634;
(statearr_24657_24678[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24679 = state_24634;
state_24634 = G__24679;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$state_machine__23866__auto__ = function(state_24634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23866__auto____1.call(this,state_24634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23866__auto____0;
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23866__auto____1;
return cljs$core$async$state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___24663,tc,fc))
})();
var state__23979__auto__ = (function (){var statearr_24658 = f__23978__auto__.call(null);
(statearr_24658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___24663);

return statearr_24658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___24663,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto__){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto__){
return (function (state_24743){
var state_val_24744 = (state_24743[(1)]);
if((state_val_24744 === (7))){
var inst_24739 = (state_24743[(2)]);
var state_24743__$1 = state_24743;
var statearr_24745_24766 = state_24743__$1;
(statearr_24745_24766[(2)] = inst_24739);

(statearr_24745_24766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (1))){
var inst_24723 = init;
var state_24743__$1 = (function (){var statearr_24746 = state_24743;
(statearr_24746[(7)] = inst_24723);

return statearr_24746;
})();
var statearr_24747_24767 = state_24743__$1;
(statearr_24747_24767[(2)] = null);

(statearr_24747_24767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (4))){
var inst_24726 = (state_24743[(8)]);
var inst_24726__$1 = (state_24743[(2)]);
var inst_24727 = (inst_24726__$1 == null);
var state_24743__$1 = (function (){var statearr_24748 = state_24743;
(statearr_24748[(8)] = inst_24726__$1);

return statearr_24748;
})();
if(cljs.core.truth_(inst_24727)){
var statearr_24749_24768 = state_24743__$1;
(statearr_24749_24768[(1)] = (5));

} else {
var statearr_24750_24769 = state_24743__$1;
(statearr_24750_24769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (6))){
var inst_24726 = (state_24743[(8)]);
var inst_24723 = (state_24743[(7)]);
var inst_24730 = (state_24743[(9)]);
var inst_24730__$1 = f.call(null,inst_24723,inst_24726);
var inst_24731 = cljs.core.reduced_QMARK_.call(null,inst_24730__$1);
var state_24743__$1 = (function (){var statearr_24751 = state_24743;
(statearr_24751[(9)] = inst_24730__$1);

return statearr_24751;
})();
if(inst_24731){
var statearr_24752_24770 = state_24743__$1;
(statearr_24752_24770[(1)] = (8));

} else {
var statearr_24753_24771 = state_24743__$1;
(statearr_24753_24771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (3))){
var inst_24741 = (state_24743[(2)]);
var state_24743__$1 = state_24743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24743__$1,inst_24741);
} else {
if((state_val_24744 === (2))){
var state_24743__$1 = state_24743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24743__$1,(4),ch);
} else {
if((state_val_24744 === (9))){
var inst_24730 = (state_24743[(9)]);
var inst_24723 = inst_24730;
var state_24743__$1 = (function (){var statearr_24754 = state_24743;
(statearr_24754[(7)] = inst_24723);

return statearr_24754;
})();
var statearr_24755_24772 = state_24743__$1;
(statearr_24755_24772[(2)] = null);

(statearr_24755_24772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (5))){
var inst_24723 = (state_24743[(7)]);
var state_24743__$1 = state_24743;
var statearr_24756_24773 = state_24743__$1;
(statearr_24756_24773[(2)] = inst_24723);

(statearr_24756_24773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (10))){
var inst_24737 = (state_24743[(2)]);
var state_24743__$1 = state_24743;
var statearr_24757_24774 = state_24743__$1;
(statearr_24757_24774[(2)] = inst_24737);

(statearr_24757_24774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (8))){
var inst_24730 = (state_24743[(9)]);
var inst_24733 = cljs.core.deref.call(null,inst_24730);
var state_24743__$1 = state_24743;
var statearr_24758_24775 = state_24743__$1;
(statearr_24758_24775[(2)] = inst_24733);

(statearr_24758_24775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto__))
;
return ((function (switch__23865__auto__,c__23977__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23866__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23866__auto____0 = (function (){
var statearr_24762 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24762[(0)] = cljs$core$async$reduce_$_state_machine__23866__auto__);

(statearr_24762[(1)] = (1));

return statearr_24762;
});
var cljs$core$async$reduce_$_state_machine__23866__auto____1 = (function (state_24743){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_24743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e24763){if((e24763 instanceof Object)){
var ex__23869__auto__ = e24763;
var statearr_24764_24776 = state_24743;
(statearr_24764_24776[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24777 = state_24743;
state_24743 = G__24777;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23866__auto__ = function(state_24743){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23866__auto____1.call(this,state_24743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23866__auto____0;
cljs$core$async$reduce_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23866__auto____1;
return cljs$core$async$reduce_$_state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto__))
})();
var state__23979__auto__ = (function (){var statearr_24765 = f__23978__auto__.call(null);
(statearr_24765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto__);

return statearr_24765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto__))
);

return c__23977__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24778 = [];
var len__22749__auto___24830 = arguments.length;
var i__22750__auto___24831 = (0);
while(true){
if((i__22750__auto___24831 < len__22749__auto___24830)){
args24778.push((arguments[i__22750__auto___24831]));

var G__24832 = (i__22750__auto___24831 + (1));
i__22750__auto___24831 = G__24832;
continue;
} else {
}
break;
}

var G__24780 = args24778.length;
switch (G__24780) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24778.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto__){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto__){
return (function (state_24805){
var state_val_24806 = (state_24805[(1)]);
if((state_val_24806 === (7))){
var inst_24787 = (state_24805[(2)]);
var state_24805__$1 = state_24805;
var statearr_24807_24834 = state_24805__$1;
(statearr_24807_24834[(2)] = inst_24787);

(statearr_24807_24834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24806 === (1))){
var inst_24781 = cljs.core.seq.call(null,coll);
var inst_24782 = inst_24781;
var state_24805__$1 = (function (){var statearr_24808 = state_24805;
(statearr_24808[(7)] = inst_24782);

return statearr_24808;
})();
var statearr_24809_24835 = state_24805__$1;
(statearr_24809_24835[(2)] = null);

(statearr_24809_24835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24806 === (4))){
var inst_24782 = (state_24805[(7)]);
var inst_24785 = cljs.core.first.call(null,inst_24782);
var state_24805__$1 = state_24805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24805__$1,(7),ch,inst_24785);
} else {
if((state_val_24806 === (13))){
var inst_24799 = (state_24805[(2)]);
var state_24805__$1 = state_24805;
var statearr_24810_24836 = state_24805__$1;
(statearr_24810_24836[(2)] = inst_24799);

(statearr_24810_24836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24806 === (6))){
var inst_24790 = (state_24805[(2)]);
var state_24805__$1 = state_24805;
if(cljs.core.truth_(inst_24790)){
var statearr_24811_24837 = state_24805__$1;
(statearr_24811_24837[(1)] = (8));

} else {
var statearr_24812_24838 = state_24805__$1;
(statearr_24812_24838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24806 === (3))){
var inst_24803 = (state_24805[(2)]);
var state_24805__$1 = state_24805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24805__$1,inst_24803);
} else {
if((state_val_24806 === (12))){
var state_24805__$1 = state_24805;
var statearr_24813_24839 = state_24805__$1;
(statearr_24813_24839[(2)] = null);

(statearr_24813_24839[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24806 === (2))){
var inst_24782 = (state_24805[(7)]);
var state_24805__$1 = state_24805;
if(cljs.core.truth_(inst_24782)){
var statearr_24814_24840 = state_24805__$1;
(statearr_24814_24840[(1)] = (4));

} else {
var statearr_24815_24841 = state_24805__$1;
(statearr_24815_24841[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24806 === (11))){
var inst_24796 = cljs.core.async.close_BANG_.call(null,ch);
var state_24805__$1 = state_24805;
var statearr_24816_24842 = state_24805__$1;
(statearr_24816_24842[(2)] = inst_24796);

(statearr_24816_24842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24806 === (9))){
var state_24805__$1 = state_24805;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24817_24843 = state_24805__$1;
(statearr_24817_24843[(1)] = (11));

} else {
var statearr_24818_24844 = state_24805__$1;
(statearr_24818_24844[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24806 === (5))){
var inst_24782 = (state_24805[(7)]);
var state_24805__$1 = state_24805;
var statearr_24819_24845 = state_24805__$1;
(statearr_24819_24845[(2)] = inst_24782);

(statearr_24819_24845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24806 === (10))){
var inst_24801 = (state_24805[(2)]);
var state_24805__$1 = state_24805;
var statearr_24820_24846 = state_24805__$1;
(statearr_24820_24846[(2)] = inst_24801);

(statearr_24820_24846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24806 === (8))){
var inst_24782 = (state_24805[(7)]);
var inst_24792 = cljs.core.next.call(null,inst_24782);
var inst_24782__$1 = inst_24792;
var state_24805__$1 = (function (){var statearr_24821 = state_24805;
(statearr_24821[(7)] = inst_24782__$1);

return statearr_24821;
})();
var statearr_24822_24847 = state_24805__$1;
(statearr_24822_24847[(2)] = null);

(statearr_24822_24847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto__))
;
return ((function (switch__23865__auto__,c__23977__auto__){
return (function() {
var cljs$core$async$state_machine__23866__auto__ = null;
var cljs$core$async$state_machine__23866__auto____0 = (function (){
var statearr_24826 = [null,null,null,null,null,null,null,null];
(statearr_24826[(0)] = cljs$core$async$state_machine__23866__auto__);

(statearr_24826[(1)] = (1));

return statearr_24826;
});
var cljs$core$async$state_machine__23866__auto____1 = (function (state_24805){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_24805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e24827){if((e24827 instanceof Object)){
var ex__23869__auto__ = e24827;
var statearr_24828_24848 = state_24805;
(statearr_24828_24848[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24849 = state_24805;
state_24805 = G__24849;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$state_machine__23866__auto__ = function(state_24805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23866__auto____1.call(this,state_24805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23866__auto____0;
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23866__auto____1;
return cljs$core$async$state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto__))
})();
var state__23979__auto__ = (function (){var statearr_24829 = f__23978__auto__.call(null);
(statearr_24829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto__);

return statearr_24829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto__))
);

return c__23977__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22337__auto__ = (((_ == null))?null:_);
var m__22338__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,_);
} else {
var m__22338__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22338__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m);
} else {
var m__22338__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25075 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25075 = (function (mult,ch,cs,meta25076){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25076 = meta25076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25077,meta25076__$1){
var self__ = this;
var _25077__$1 = this;
return (new cljs.core.async.t_cljs$core$async25075(self__.mult,self__.ch,self__.cs,meta25076__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25075.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25077){
var self__ = this;
var _25077__$1 = this;
return self__.meta25076;
});})(cs))
;

cljs.core.async.t_cljs$core$async25075.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25075.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25075.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25075.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25075.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25075.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25075.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25076","meta25076",299347785,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25075.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25075";

cljs.core.async.t_cljs$core$async25075.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async25075");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25075 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25075(mult__$1,ch__$1,cs__$1,meta25076){
return (new cljs.core.async.t_cljs$core$async25075(mult__$1,ch__$1,cs__$1,meta25076));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25075(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23977__auto___25300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___25300,cs,m,dchan,dctr,done){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___25300,cs,m,dchan,dctr,done){
return (function (state_25212){
var state_val_25213 = (state_25212[(1)]);
if((state_val_25213 === (7))){
var inst_25208 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25214_25301 = state_25212__$1;
(statearr_25214_25301[(2)] = inst_25208);

(statearr_25214_25301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (20))){
var inst_25111 = (state_25212[(7)]);
var inst_25123 = cljs.core.first.call(null,inst_25111);
var inst_25124 = cljs.core.nth.call(null,inst_25123,(0),null);
var inst_25125 = cljs.core.nth.call(null,inst_25123,(1),null);
var state_25212__$1 = (function (){var statearr_25215 = state_25212;
(statearr_25215[(8)] = inst_25124);

return statearr_25215;
})();
if(cljs.core.truth_(inst_25125)){
var statearr_25216_25302 = state_25212__$1;
(statearr_25216_25302[(1)] = (22));

} else {
var statearr_25217_25303 = state_25212__$1;
(statearr_25217_25303[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (27))){
var inst_25160 = (state_25212[(9)]);
var inst_25155 = (state_25212[(10)]);
var inst_25153 = (state_25212[(11)]);
var inst_25080 = (state_25212[(12)]);
var inst_25160__$1 = cljs.core._nth.call(null,inst_25153,inst_25155);
var inst_25161 = cljs.core.async.put_BANG_.call(null,inst_25160__$1,inst_25080,done);
var state_25212__$1 = (function (){var statearr_25218 = state_25212;
(statearr_25218[(9)] = inst_25160__$1);

return statearr_25218;
})();
if(cljs.core.truth_(inst_25161)){
var statearr_25219_25304 = state_25212__$1;
(statearr_25219_25304[(1)] = (30));

} else {
var statearr_25220_25305 = state_25212__$1;
(statearr_25220_25305[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (1))){
var state_25212__$1 = state_25212;
var statearr_25221_25306 = state_25212__$1;
(statearr_25221_25306[(2)] = null);

(statearr_25221_25306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (24))){
var inst_25111 = (state_25212[(7)]);
var inst_25130 = (state_25212[(2)]);
var inst_25131 = cljs.core.next.call(null,inst_25111);
var inst_25089 = inst_25131;
var inst_25090 = null;
var inst_25091 = (0);
var inst_25092 = (0);
var state_25212__$1 = (function (){var statearr_25222 = state_25212;
(statearr_25222[(13)] = inst_25092);

(statearr_25222[(14)] = inst_25091);

(statearr_25222[(15)] = inst_25090);

(statearr_25222[(16)] = inst_25089);

(statearr_25222[(17)] = inst_25130);

return statearr_25222;
})();
var statearr_25223_25307 = state_25212__$1;
(statearr_25223_25307[(2)] = null);

(statearr_25223_25307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (39))){
var state_25212__$1 = state_25212;
var statearr_25227_25308 = state_25212__$1;
(statearr_25227_25308[(2)] = null);

(statearr_25227_25308[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (4))){
var inst_25080 = (state_25212[(12)]);
var inst_25080__$1 = (state_25212[(2)]);
var inst_25081 = (inst_25080__$1 == null);
var state_25212__$1 = (function (){var statearr_25228 = state_25212;
(statearr_25228[(12)] = inst_25080__$1);

return statearr_25228;
})();
if(cljs.core.truth_(inst_25081)){
var statearr_25229_25309 = state_25212__$1;
(statearr_25229_25309[(1)] = (5));

} else {
var statearr_25230_25310 = state_25212__$1;
(statearr_25230_25310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (15))){
var inst_25092 = (state_25212[(13)]);
var inst_25091 = (state_25212[(14)]);
var inst_25090 = (state_25212[(15)]);
var inst_25089 = (state_25212[(16)]);
var inst_25107 = (state_25212[(2)]);
var inst_25108 = (inst_25092 + (1));
var tmp25224 = inst_25091;
var tmp25225 = inst_25090;
var tmp25226 = inst_25089;
var inst_25089__$1 = tmp25226;
var inst_25090__$1 = tmp25225;
var inst_25091__$1 = tmp25224;
var inst_25092__$1 = inst_25108;
var state_25212__$1 = (function (){var statearr_25231 = state_25212;
(statearr_25231[(13)] = inst_25092__$1);

(statearr_25231[(18)] = inst_25107);

(statearr_25231[(14)] = inst_25091__$1);

(statearr_25231[(15)] = inst_25090__$1);

(statearr_25231[(16)] = inst_25089__$1);

return statearr_25231;
})();
var statearr_25232_25311 = state_25212__$1;
(statearr_25232_25311[(2)] = null);

(statearr_25232_25311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (21))){
var inst_25134 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25236_25312 = state_25212__$1;
(statearr_25236_25312[(2)] = inst_25134);

(statearr_25236_25312[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (31))){
var inst_25160 = (state_25212[(9)]);
var inst_25164 = done.call(null,null);
var inst_25165 = cljs.core.async.untap_STAR_.call(null,m,inst_25160);
var state_25212__$1 = (function (){var statearr_25237 = state_25212;
(statearr_25237[(19)] = inst_25164);

return statearr_25237;
})();
var statearr_25238_25313 = state_25212__$1;
(statearr_25238_25313[(2)] = inst_25165);

(statearr_25238_25313[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (32))){
var inst_25155 = (state_25212[(10)]);
var inst_25153 = (state_25212[(11)]);
var inst_25152 = (state_25212[(20)]);
var inst_25154 = (state_25212[(21)]);
var inst_25167 = (state_25212[(2)]);
var inst_25168 = (inst_25155 + (1));
var tmp25233 = inst_25153;
var tmp25234 = inst_25152;
var tmp25235 = inst_25154;
var inst_25152__$1 = tmp25234;
var inst_25153__$1 = tmp25233;
var inst_25154__$1 = tmp25235;
var inst_25155__$1 = inst_25168;
var state_25212__$1 = (function (){var statearr_25239 = state_25212;
(statearr_25239[(10)] = inst_25155__$1);

(statearr_25239[(11)] = inst_25153__$1);

(statearr_25239[(20)] = inst_25152__$1);

(statearr_25239[(21)] = inst_25154__$1);

(statearr_25239[(22)] = inst_25167);

return statearr_25239;
})();
var statearr_25240_25314 = state_25212__$1;
(statearr_25240_25314[(2)] = null);

(statearr_25240_25314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (40))){
var inst_25180 = (state_25212[(23)]);
var inst_25184 = done.call(null,null);
var inst_25185 = cljs.core.async.untap_STAR_.call(null,m,inst_25180);
var state_25212__$1 = (function (){var statearr_25241 = state_25212;
(statearr_25241[(24)] = inst_25184);

return statearr_25241;
})();
var statearr_25242_25315 = state_25212__$1;
(statearr_25242_25315[(2)] = inst_25185);

(statearr_25242_25315[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (33))){
var inst_25171 = (state_25212[(25)]);
var inst_25173 = cljs.core.chunked_seq_QMARK_.call(null,inst_25171);
var state_25212__$1 = state_25212;
if(inst_25173){
var statearr_25243_25316 = state_25212__$1;
(statearr_25243_25316[(1)] = (36));

} else {
var statearr_25244_25317 = state_25212__$1;
(statearr_25244_25317[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (13))){
var inst_25101 = (state_25212[(26)]);
var inst_25104 = cljs.core.async.close_BANG_.call(null,inst_25101);
var state_25212__$1 = state_25212;
var statearr_25245_25318 = state_25212__$1;
(statearr_25245_25318[(2)] = inst_25104);

(statearr_25245_25318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (22))){
var inst_25124 = (state_25212[(8)]);
var inst_25127 = cljs.core.async.close_BANG_.call(null,inst_25124);
var state_25212__$1 = state_25212;
var statearr_25246_25319 = state_25212__$1;
(statearr_25246_25319[(2)] = inst_25127);

(statearr_25246_25319[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (36))){
var inst_25171 = (state_25212[(25)]);
var inst_25175 = cljs.core.chunk_first.call(null,inst_25171);
var inst_25176 = cljs.core.chunk_rest.call(null,inst_25171);
var inst_25177 = cljs.core.count.call(null,inst_25175);
var inst_25152 = inst_25176;
var inst_25153 = inst_25175;
var inst_25154 = inst_25177;
var inst_25155 = (0);
var state_25212__$1 = (function (){var statearr_25247 = state_25212;
(statearr_25247[(10)] = inst_25155);

(statearr_25247[(11)] = inst_25153);

(statearr_25247[(20)] = inst_25152);

(statearr_25247[(21)] = inst_25154);

return statearr_25247;
})();
var statearr_25248_25320 = state_25212__$1;
(statearr_25248_25320[(2)] = null);

(statearr_25248_25320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (41))){
var inst_25171 = (state_25212[(25)]);
var inst_25187 = (state_25212[(2)]);
var inst_25188 = cljs.core.next.call(null,inst_25171);
var inst_25152 = inst_25188;
var inst_25153 = null;
var inst_25154 = (0);
var inst_25155 = (0);
var state_25212__$1 = (function (){var statearr_25249 = state_25212;
(statearr_25249[(10)] = inst_25155);

(statearr_25249[(11)] = inst_25153);

(statearr_25249[(20)] = inst_25152);

(statearr_25249[(21)] = inst_25154);

(statearr_25249[(27)] = inst_25187);

return statearr_25249;
})();
var statearr_25250_25321 = state_25212__$1;
(statearr_25250_25321[(2)] = null);

(statearr_25250_25321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (43))){
var state_25212__$1 = state_25212;
var statearr_25251_25322 = state_25212__$1;
(statearr_25251_25322[(2)] = null);

(statearr_25251_25322[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (29))){
var inst_25196 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25252_25323 = state_25212__$1;
(statearr_25252_25323[(2)] = inst_25196);

(statearr_25252_25323[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (44))){
var inst_25205 = (state_25212[(2)]);
var state_25212__$1 = (function (){var statearr_25253 = state_25212;
(statearr_25253[(28)] = inst_25205);

return statearr_25253;
})();
var statearr_25254_25324 = state_25212__$1;
(statearr_25254_25324[(2)] = null);

(statearr_25254_25324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (6))){
var inst_25144 = (state_25212[(29)]);
var inst_25143 = cljs.core.deref.call(null,cs);
var inst_25144__$1 = cljs.core.keys.call(null,inst_25143);
var inst_25145 = cljs.core.count.call(null,inst_25144__$1);
var inst_25146 = cljs.core.reset_BANG_.call(null,dctr,inst_25145);
var inst_25151 = cljs.core.seq.call(null,inst_25144__$1);
var inst_25152 = inst_25151;
var inst_25153 = null;
var inst_25154 = (0);
var inst_25155 = (0);
var state_25212__$1 = (function (){var statearr_25255 = state_25212;
(statearr_25255[(10)] = inst_25155);

(statearr_25255[(11)] = inst_25153);

(statearr_25255[(20)] = inst_25152);

(statearr_25255[(30)] = inst_25146);

(statearr_25255[(21)] = inst_25154);

(statearr_25255[(29)] = inst_25144__$1);

return statearr_25255;
})();
var statearr_25256_25325 = state_25212__$1;
(statearr_25256_25325[(2)] = null);

(statearr_25256_25325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (28))){
var inst_25171 = (state_25212[(25)]);
var inst_25152 = (state_25212[(20)]);
var inst_25171__$1 = cljs.core.seq.call(null,inst_25152);
var state_25212__$1 = (function (){var statearr_25257 = state_25212;
(statearr_25257[(25)] = inst_25171__$1);

return statearr_25257;
})();
if(inst_25171__$1){
var statearr_25258_25326 = state_25212__$1;
(statearr_25258_25326[(1)] = (33));

} else {
var statearr_25259_25327 = state_25212__$1;
(statearr_25259_25327[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (25))){
var inst_25155 = (state_25212[(10)]);
var inst_25154 = (state_25212[(21)]);
var inst_25157 = (inst_25155 < inst_25154);
var inst_25158 = inst_25157;
var state_25212__$1 = state_25212;
if(cljs.core.truth_(inst_25158)){
var statearr_25260_25328 = state_25212__$1;
(statearr_25260_25328[(1)] = (27));

} else {
var statearr_25261_25329 = state_25212__$1;
(statearr_25261_25329[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (34))){
var state_25212__$1 = state_25212;
var statearr_25262_25330 = state_25212__$1;
(statearr_25262_25330[(2)] = null);

(statearr_25262_25330[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (17))){
var state_25212__$1 = state_25212;
var statearr_25263_25331 = state_25212__$1;
(statearr_25263_25331[(2)] = null);

(statearr_25263_25331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (3))){
var inst_25210 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25212__$1,inst_25210);
} else {
if((state_val_25213 === (12))){
var inst_25139 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25264_25332 = state_25212__$1;
(statearr_25264_25332[(2)] = inst_25139);

(statearr_25264_25332[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (2))){
var state_25212__$1 = state_25212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25212__$1,(4),ch);
} else {
if((state_val_25213 === (23))){
var state_25212__$1 = state_25212;
var statearr_25265_25333 = state_25212__$1;
(statearr_25265_25333[(2)] = null);

(statearr_25265_25333[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (35))){
var inst_25194 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25266_25334 = state_25212__$1;
(statearr_25266_25334[(2)] = inst_25194);

(statearr_25266_25334[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (19))){
var inst_25111 = (state_25212[(7)]);
var inst_25115 = cljs.core.chunk_first.call(null,inst_25111);
var inst_25116 = cljs.core.chunk_rest.call(null,inst_25111);
var inst_25117 = cljs.core.count.call(null,inst_25115);
var inst_25089 = inst_25116;
var inst_25090 = inst_25115;
var inst_25091 = inst_25117;
var inst_25092 = (0);
var state_25212__$1 = (function (){var statearr_25267 = state_25212;
(statearr_25267[(13)] = inst_25092);

(statearr_25267[(14)] = inst_25091);

(statearr_25267[(15)] = inst_25090);

(statearr_25267[(16)] = inst_25089);

return statearr_25267;
})();
var statearr_25268_25335 = state_25212__$1;
(statearr_25268_25335[(2)] = null);

(statearr_25268_25335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (11))){
var inst_25089 = (state_25212[(16)]);
var inst_25111 = (state_25212[(7)]);
var inst_25111__$1 = cljs.core.seq.call(null,inst_25089);
var state_25212__$1 = (function (){var statearr_25269 = state_25212;
(statearr_25269[(7)] = inst_25111__$1);

return statearr_25269;
})();
if(inst_25111__$1){
var statearr_25270_25336 = state_25212__$1;
(statearr_25270_25336[(1)] = (16));

} else {
var statearr_25271_25337 = state_25212__$1;
(statearr_25271_25337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (9))){
var inst_25141 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25272_25338 = state_25212__$1;
(statearr_25272_25338[(2)] = inst_25141);

(statearr_25272_25338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (5))){
var inst_25087 = cljs.core.deref.call(null,cs);
var inst_25088 = cljs.core.seq.call(null,inst_25087);
var inst_25089 = inst_25088;
var inst_25090 = null;
var inst_25091 = (0);
var inst_25092 = (0);
var state_25212__$1 = (function (){var statearr_25273 = state_25212;
(statearr_25273[(13)] = inst_25092);

(statearr_25273[(14)] = inst_25091);

(statearr_25273[(15)] = inst_25090);

(statearr_25273[(16)] = inst_25089);

return statearr_25273;
})();
var statearr_25274_25339 = state_25212__$1;
(statearr_25274_25339[(2)] = null);

(statearr_25274_25339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (14))){
var state_25212__$1 = state_25212;
var statearr_25275_25340 = state_25212__$1;
(statearr_25275_25340[(2)] = null);

(statearr_25275_25340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (45))){
var inst_25202 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25276_25341 = state_25212__$1;
(statearr_25276_25341[(2)] = inst_25202);

(statearr_25276_25341[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (26))){
var inst_25144 = (state_25212[(29)]);
var inst_25198 = (state_25212[(2)]);
var inst_25199 = cljs.core.seq.call(null,inst_25144);
var state_25212__$1 = (function (){var statearr_25277 = state_25212;
(statearr_25277[(31)] = inst_25198);

return statearr_25277;
})();
if(inst_25199){
var statearr_25278_25342 = state_25212__$1;
(statearr_25278_25342[(1)] = (42));

} else {
var statearr_25279_25343 = state_25212__$1;
(statearr_25279_25343[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (16))){
var inst_25111 = (state_25212[(7)]);
var inst_25113 = cljs.core.chunked_seq_QMARK_.call(null,inst_25111);
var state_25212__$1 = state_25212;
if(inst_25113){
var statearr_25280_25344 = state_25212__$1;
(statearr_25280_25344[(1)] = (19));

} else {
var statearr_25281_25345 = state_25212__$1;
(statearr_25281_25345[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (38))){
var inst_25191 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25282_25346 = state_25212__$1;
(statearr_25282_25346[(2)] = inst_25191);

(statearr_25282_25346[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (30))){
var state_25212__$1 = state_25212;
var statearr_25283_25347 = state_25212__$1;
(statearr_25283_25347[(2)] = null);

(statearr_25283_25347[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (10))){
var inst_25092 = (state_25212[(13)]);
var inst_25090 = (state_25212[(15)]);
var inst_25100 = cljs.core._nth.call(null,inst_25090,inst_25092);
var inst_25101 = cljs.core.nth.call(null,inst_25100,(0),null);
var inst_25102 = cljs.core.nth.call(null,inst_25100,(1),null);
var state_25212__$1 = (function (){var statearr_25284 = state_25212;
(statearr_25284[(26)] = inst_25101);

return statearr_25284;
})();
if(cljs.core.truth_(inst_25102)){
var statearr_25285_25348 = state_25212__$1;
(statearr_25285_25348[(1)] = (13));

} else {
var statearr_25286_25349 = state_25212__$1;
(statearr_25286_25349[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (18))){
var inst_25137 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25287_25350 = state_25212__$1;
(statearr_25287_25350[(2)] = inst_25137);

(statearr_25287_25350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (42))){
var state_25212__$1 = state_25212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25212__$1,(45),dchan);
} else {
if((state_val_25213 === (37))){
var inst_25171 = (state_25212[(25)]);
var inst_25180 = (state_25212[(23)]);
var inst_25080 = (state_25212[(12)]);
var inst_25180__$1 = cljs.core.first.call(null,inst_25171);
var inst_25181 = cljs.core.async.put_BANG_.call(null,inst_25180__$1,inst_25080,done);
var state_25212__$1 = (function (){var statearr_25288 = state_25212;
(statearr_25288[(23)] = inst_25180__$1);

return statearr_25288;
})();
if(cljs.core.truth_(inst_25181)){
var statearr_25289_25351 = state_25212__$1;
(statearr_25289_25351[(1)] = (39));

} else {
var statearr_25290_25352 = state_25212__$1;
(statearr_25290_25352[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (8))){
var inst_25092 = (state_25212[(13)]);
var inst_25091 = (state_25212[(14)]);
var inst_25094 = (inst_25092 < inst_25091);
var inst_25095 = inst_25094;
var state_25212__$1 = state_25212;
if(cljs.core.truth_(inst_25095)){
var statearr_25291_25353 = state_25212__$1;
(statearr_25291_25353[(1)] = (10));

} else {
var statearr_25292_25354 = state_25212__$1;
(statearr_25292_25354[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto___25300,cs,m,dchan,dctr,done))
;
return ((function (switch__23865__auto__,c__23977__auto___25300,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23866__auto__ = null;
var cljs$core$async$mult_$_state_machine__23866__auto____0 = (function (){
var statearr_25296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25296[(0)] = cljs$core$async$mult_$_state_machine__23866__auto__);

(statearr_25296[(1)] = (1));

return statearr_25296;
});
var cljs$core$async$mult_$_state_machine__23866__auto____1 = (function (state_25212){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_25212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e25297){if((e25297 instanceof Object)){
var ex__23869__auto__ = e25297;
var statearr_25298_25355 = state_25212;
(statearr_25298_25355[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25356 = state_25212;
state_25212 = G__25356;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23866__auto__ = function(state_25212){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23866__auto____1.call(this,state_25212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23866__auto____0;
cljs$core$async$mult_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23866__auto____1;
return cljs$core$async$mult_$_state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___25300,cs,m,dchan,dctr,done))
})();
var state__23979__auto__ = (function (){var statearr_25299 = f__23978__auto__.call(null);
(statearr_25299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___25300);

return statearr_25299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___25300,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25357 = [];
var len__22749__auto___25360 = arguments.length;
var i__22750__auto___25361 = (0);
while(true){
if((i__22750__auto___25361 < len__22749__auto___25360)){
args25357.push((arguments[i__22750__auto___25361]));

var G__25362 = (i__22750__auto___25361 + (1));
i__22750__auto___25361 = G__25362;
continue;
} else {
}
break;
}

var G__25359 = args25357.length;
switch (G__25359) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25357.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m);
} else {
var m__22338__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,state_map);
} else {
var m__22338__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,mode);
} else {
var m__22338__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22756__auto__ = [];
var len__22749__auto___25374 = arguments.length;
var i__22750__auto___25375 = (0);
while(true){
if((i__22750__auto___25375 < len__22749__auto___25374)){
args__22756__auto__.push((arguments[i__22750__auto___25375]));

var G__25376 = (i__22750__auto___25375 + (1));
i__22750__auto___25375 = G__25376;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((3) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22757__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25368){
var map__25369 = p__25368;
var map__25369__$1 = ((((!((map__25369 == null)))?((((map__25369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25369):map__25369);
var opts = map__25369__$1;
var statearr_25371_25377 = state;
(statearr_25371_25377[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__25369,map__25369__$1,opts){
return (function (val){
var statearr_25372_25378 = state;
(statearr_25372_25378[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25369,map__25369__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_25373_25379 = state;
(statearr_25373_25379[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25364){
var G__25365 = cljs.core.first.call(null,seq25364);
var seq25364__$1 = cljs.core.next.call(null,seq25364);
var G__25366 = cljs.core.first.call(null,seq25364__$1);
var seq25364__$2 = cljs.core.next.call(null,seq25364__$1);
var G__25367 = cljs.core.first.call(null,seq25364__$2);
var seq25364__$3 = cljs.core.next.call(null,seq25364__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25365,G__25366,G__25367,seq25364__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25545 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25545 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25546){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25546 = meta25546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25547,meta25546__$1){
var self__ = this;
var _25547__$1 = this;
return (new cljs.core.async.t_cljs$core$async25545(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25546__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25547){
var self__ = this;
var _25547__$1 = this;
return self__.meta25546;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25545.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25546","meta25546",1627665006,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25545";

cljs.core.async.t_cljs$core$async25545.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async25545");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25545 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25545(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25546){
return (new cljs.core.async.t_cljs$core$async25545(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25546));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25545(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23977__auto___25710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___25710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___25710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25647){
var state_val_25648 = (state_25647[(1)]);
if((state_val_25648 === (7))){
var inst_25563 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25649_25711 = state_25647__$1;
(statearr_25649_25711[(2)] = inst_25563);

(statearr_25649_25711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (20))){
var inst_25575 = (state_25647[(7)]);
var state_25647__$1 = state_25647;
var statearr_25650_25712 = state_25647__$1;
(statearr_25650_25712[(2)] = inst_25575);

(statearr_25650_25712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (27))){
var state_25647__$1 = state_25647;
var statearr_25651_25713 = state_25647__$1;
(statearr_25651_25713[(2)] = null);

(statearr_25651_25713[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (1))){
var inst_25551 = (state_25647[(8)]);
var inst_25551__$1 = calc_state.call(null);
var inst_25553 = (inst_25551__$1 == null);
var inst_25554 = cljs.core.not.call(null,inst_25553);
var state_25647__$1 = (function (){var statearr_25652 = state_25647;
(statearr_25652[(8)] = inst_25551__$1);

return statearr_25652;
})();
if(inst_25554){
var statearr_25653_25714 = state_25647__$1;
(statearr_25653_25714[(1)] = (2));

} else {
var statearr_25654_25715 = state_25647__$1;
(statearr_25654_25715[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (24))){
var inst_25598 = (state_25647[(9)]);
var inst_25607 = (state_25647[(10)]);
var inst_25621 = (state_25647[(11)]);
var inst_25621__$1 = inst_25598.call(null,inst_25607);
var state_25647__$1 = (function (){var statearr_25655 = state_25647;
(statearr_25655[(11)] = inst_25621__$1);

return statearr_25655;
})();
if(cljs.core.truth_(inst_25621__$1)){
var statearr_25656_25716 = state_25647__$1;
(statearr_25656_25716[(1)] = (29));

} else {
var statearr_25657_25717 = state_25647__$1;
(statearr_25657_25717[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (4))){
var inst_25566 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
if(cljs.core.truth_(inst_25566)){
var statearr_25658_25718 = state_25647__$1;
(statearr_25658_25718[(1)] = (8));

} else {
var statearr_25659_25719 = state_25647__$1;
(statearr_25659_25719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (15))){
var inst_25592 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
if(cljs.core.truth_(inst_25592)){
var statearr_25660_25720 = state_25647__$1;
(statearr_25660_25720[(1)] = (19));

} else {
var statearr_25661_25721 = state_25647__$1;
(statearr_25661_25721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (21))){
var inst_25597 = (state_25647[(12)]);
var inst_25597__$1 = (state_25647[(2)]);
var inst_25598 = cljs.core.get.call(null,inst_25597__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25599 = cljs.core.get.call(null,inst_25597__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25600 = cljs.core.get.call(null,inst_25597__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25647__$1 = (function (){var statearr_25662 = state_25647;
(statearr_25662[(9)] = inst_25598);

(statearr_25662[(12)] = inst_25597__$1);

(statearr_25662[(13)] = inst_25599);

return statearr_25662;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25647__$1,(22),inst_25600);
} else {
if((state_val_25648 === (31))){
var inst_25629 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
if(cljs.core.truth_(inst_25629)){
var statearr_25663_25722 = state_25647__$1;
(statearr_25663_25722[(1)] = (32));

} else {
var statearr_25664_25723 = state_25647__$1;
(statearr_25664_25723[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (32))){
var inst_25606 = (state_25647[(14)]);
var state_25647__$1 = state_25647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25647__$1,(35),out,inst_25606);
} else {
if((state_val_25648 === (33))){
var inst_25597 = (state_25647[(12)]);
var inst_25575 = inst_25597;
var state_25647__$1 = (function (){var statearr_25665 = state_25647;
(statearr_25665[(7)] = inst_25575);

return statearr_25665;
})();
var statearr_25666_25724 = state_25647__$1;
(statearr_25666_25724[(2)] = null);

(statearr_25666_25724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (13))){
var inst_25575 = (state_25647[(7)]);
var inst_25582 = inst_25575.cljs$lang$protocol_mask$partition0$;
var inst_25583 = (inst_25582 & (64));
var inst_25584 = inst_25575.cljs$core$ISeq$;
var inst_25585 = (inst_25583) || (inst_25584);
var state_25647__$1 = state_25647;
if(cljs.core.truth_(inst_25585)){
var statearr_25667_25725 = state_25647__$1;
(statearr_25667_25725[(1)] = (16));

} else {
var statearr_25668_25726 = state_25647__$1;
(statearr_25668_25726[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (22))){
var inst_25607 = (state_25647[(10)]);
var inst_25606 = (state_25647[(14)]);
var inst_25605 = (state_25647[(2)]);
var inst_25606__$1 = cljs.core.nth.call(null,inst_25605,(0),null);
var inst_25607__$1 = cljs.core.nth.call(null,inst_25605,(1),null);
var inst_25608 = (inst_25606__$1 == null);
var inst_25609 = cljs.core._EQ_.call(null,inst_25607__$1,change);
var inst_25610 = (inst_25608) || (inst_25609);
var state_25647__$1 = (function (){var statearr_25669 = state_25647;
(statearr_25669[(10)] = inst_25607__$1);

(statearr_25669[(14)] = inst_25606__$1);

return statearr_25669;
})();
if(cljs.core.truth_(inst_25610)){
var statearr_25670_25727 = state_25647__$1;
(statearr_25670_25727[(1)] = (23));

} else {
var statearr_25671_25728 = state_25647__$1;
(statearr_25671_25728[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (36))){
var inst_25597 = (state_25647[(12)]);
var inst_25575 = inst_25597;
var state_25647__$1 = (function (){var statearr_25672 = state_25647;
(statearr_25672[(7)] = inst_25575);

return statearr_25672;
})();
var statearr_25673_25729 = state_25647__$1;
(statearr_25673_25729[(2)] = null);

(statearr_25673_25729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (29))){
var inst_25621 = (state_25647[(11)]);
var state_25647__$1 = state_25647;
var statearr_25674_25730 = state_25647__$1;
(statearr_25674_25730[(2)] = inst_25621);

(statearr_25674_25730[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (6))){
var state_25647__$1 = state_25647;
var statearr_25675_25731 = state_25647__$1;
(statearr_25675_25731[(2)] = false);

(statearr_25675_25731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (28))){
var inst_25617 = (state_25647[(2)]);
var inst_25618 = calc_state.call(null);
var inst_25575 = inst_25618;
var state_25647__$1 = (function (){var statearr_25676 = state_25647;
(statearr_25676[(7)] = inst_25575);

(statearr_25676[(15)] = inst_25617);

return statearr_25676;
})();
var statearr_25677_25732 = state_25647__$1;
(statearr_25677_25732[(2)] = null);

(statearr_25677_25732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (25))){
var inst_25643 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25678_25733 = state_25647__$1;
(statearr_25678_25733[(2)] = inst_25643);

(statearr_25678_25733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (34))){
var inst_25641 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25679_25734 = state_25647__$1;
(statearr_25679_25734[(2)] = inst_25641);

(statearr_25679_25734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (17))){
var state_25647__$1 = state_25647;
var statearr_25680_25735 = state_25647__$1;
(statearr_25680_25735[(2)] = false);

(statearr_25680_25735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (3))){
var state_25647__$1 = state_25647;
var statearr_25681_25736 = state_25647__$1;
(statearr_25681_25736[(2)] = false);

(statearr_25681_25736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (12))){
var inst_25645 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25647__$1,inst_25645);
} else {
if((state_val_25648 === (2))){
var inst_25551 = (state_25647[(8)]);
var inst_25556 = inst_25551.cljs$lang$protocol_mask$partition0$;
var inst_25557 = (inst_25556 & (64));
var inst_25558 = inst_25551.cljs$core$ISeq$;
var inst_25559 = (inst_25557) || (inst_25558);
var state_25647__$1 = state_25647;
if(cljs.core.truth_(inst_25559)){
var statearr_25682_25737 = state_25647__$1;
(statearr_25682_25737[(1)] = (5));

} else {
var statearr_25683_25738 = state_25647__$1;
(statearr_25683_25738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (23))){
var inst_25606 = (state_25647[(14)]);
var inst_25612 = (inst_25606 == null);
var state_25647__$1 = state_25647;
if(cljs.core.truth_(inst_25612)){
var statearr_25684_25739 = state_25647__$1;
(statearr_25684_25739[(1)] = (26));

} else {
var statearr_25685_25740 = state_25647__$1;
(statearr_25685_25740[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (35))){
var inst_25632 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
if(cljs.core.truth_(inst_25632)){
var statearr_25686_25741 = state_25647__$1;
(statearr_25686_25741[(1)] = (36));

} else {
var statearr_25687_25742 = state_25647__$1;
(statearr_25687_25742[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (19))){
var inst_25575 = (state_25647[(7)]);
var inst_25594 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25575);
var state_25647__$1 = state_25647;
var statearr_25688_25743 = state_25647__$1;
(statearr_25688_25743[(2)] = inst_25594);

(statearr_25688_25743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (11))){
var inst_25575 = (state_25647[(7)]);
var inst_25579 = (inst_25575 == null);
var inst_25580 = cljs.core.not.call(null,inst_25579);
var state_25647__$1 = state_25647;
if(inst_25580){
var statearr_25689_25744 = state_25647__$1;
(statearr_25689_25744[(1)] = (13));

} else {
var statearr_25690_25745 = state_25647__$1;
(statearr_25690_25745[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (9))){
var inst_25551 = (state_25647[(8)]);
var state_25647__$1 = state_25647;
var statearr_25691_25746 = state_25647__$1;
(statearr_25691_25746[(2)] = inst_25551);

(statearr_25691_25746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (5))){
var state_25647__$1 = state_25647;
var statearr_25692_25747 = state_25647__$1;
(statearr_25692_25747[(2)] = true);

(statearr_25692_25747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (14))){
var state_25647__$1 = state_25647;
var statearr_25693_25748 = state_25647__$1;
(statearr_25693_25748[(2)] = false);

(statearr_25693_25748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (26))){
var inst_25607 = (state_25647[(10)]);
var inst_25614 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25607);
var state_25647__$1 = state_25647;
var statearr_25694_25749 = state_25647__$1;
(statearr_25694_25749[(2)] = inst_25614);

(statearr_25694_25749[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (16))){
var state_25647__$1 = state_25647;
var statearr_25695_25750 = state_25647__$1;
(statearr_25695_25750[(2)] = true);

(statearr_25695_25750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (38))){
var inst_25637 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25696_25751 = state_25647__$1;
(statearr_25696_25751[(2)] = inst_25637);

(statearr_25696_25751[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (30))){
var inst_25598 = (state_25647[(9)]);
var inst_25607 = (state_25647[(10)]);
var inst_25599 = (state_25647[(13)]);
var inst_25624 = cljs.core.empty_QMARK_.call(null,inst_25598);
var inst_25625 = inst_25599.call(null,inst_25607);
var inst_25626 = cljs.core.not.call(null,inst_25625);
var inst_25627 = (inst_25624) && (inst_25626);
var state_25647__$1 = state_25647;
var statearr_25697_25752 = state_25647__$1;
(statearr_25697_25752[(2)] = inst_25627);

(statearr_25697_25752[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (10))){
var inst_25551 = (state_25647[(8)]);
var inst_25571 = (state_25647[(2)]);
var inst_25572 = cljs.core.get.call(null,inst_25571,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25573 = cljs.core.get.call(null,inst_25571,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25574 = cljs.core.get.call(null,inst_25571,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25575 = inst_25551;
var state_25647__$1 = (function (){var statearr_25698 = state_25647;
(statearr_25698[(7)] = inst_25575);

(statearr_25698[(16)] = inst_25573);

(statearr_25698[(17)] = inst_25574);

(statearr_25698[(18)] = inst_25572);

return statearr_25698;
})();
var statearr_25699_25753 = state_25647__$1;
(statearr_25699_25753[(2)] = null);

(statearr_25699_25753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (18))){
var inst_25589 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25700_25754 = state_25647__$1;
(statearr_25700_25754[(2)] = inst_25589);

(statearr_25700_25754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (37))){
var state_25647__$1 = state_25647;
var statearr_25701_25755 = state_25647__$1;
(statearr_25701_25755[(2)] = null);

(statearr_25701_25755[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (8))){
var inst_25551 = (state_25647[(8)]);
var inst_25568 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25551);
var state_25647__$1 = state_25647;
var statearr_25702_25756 = state_25647__$1;
(statearr_25702_25756[(2)] = inst_25568);

(statearr_25702_25756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto___25710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23865__auto__,c__23977__auto___25710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23866__auto__ = null;
var cljs$core$async$mix_$_state_machine__23866__auto____0 = (function (){
var statearr_25706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25706[(0)] = cljs$core$async$mix_$_state_machine__23866__auto__);

(statearr_25706[(1)] = (1));

return statearr_25706;
});
var cljs$core$async$mix_$_state_machine__23866__auto____1 = (function (state_25647){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_25647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e25707){if((e25707 instanceof Object)){
var ex__23869__auto__ = e25707;
var statearr_25708_25757 = state_25647;
(statearr_25708_25757[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25758 = state_25647;
state_25647 = G__25758;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23866__auto__ = function(state_25647){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23866__auto____1.call(this,state_25647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23866__auto____0;
cljs$core$async$mix_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23866__auto____1;
return cljs$core$async$mix_$_state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___25710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23979__auto__ = (function (){var statearr_25709 = f__23978__auto__.call(null);
(statearr_25709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___25710);

return statearr_25709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___25710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22338__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p,v,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25759 = [];
var len__22749__auto___25762 = arguments.length;
var i__22750__auto___25763 = (0);
while(true){
if((i__22750__auto___25763 < len__22749__auto___25762)){
args25759.push((arguments[i__22750__auto___25763]));

var G__25764 = (i__22750__auto___25763 + (1));
i__22750__auto___25763 = G__25764;
continue;
} else {
}
break;
}

var G__25761 = args25759.length;
switch (G__25761) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25759.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p);
} else {
var m__22338__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p,v);
} else {
var m__22338__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25767 = [];
var len__22749__auto___25892 = arguments.length;
var i__22750__auto___25893 = (0);
while(true){
if((i__22750__auto___25893 < len__22749__auto___25892)){
args25767.push((arguments[i__22750__auto___25893]));

var G__25894 = (i__22750__auto___25893 + (1));
i__22750__auto___25893 = G__25894;
continue;
} else {
}
break;
}

var G__25769 = args25767.length;
switch (G__25769) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25767.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21674__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21674__auto__,mults){
return (function (p1__25766_SHARP_){
if(cljs.core.truth_(p1__25766_SHARP_.call(null,topic))){
return p1__25766_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25766_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21674__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25770 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25771){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25771 = meta25771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25772,meta25771__$1){
var self__ = this;
var _25772__$1 = this;
return (new cljs.core.async.t_cljs$core$async25770(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25771__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25772){
var self__ = this;
var _25772__$1 = this;
return self__.meta25771;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25770.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25771","meta25771",960269372,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25770";

cljs.core.async.t_cljs$core$async25770.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async25770");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25770 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25770(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25771){
return (new cljs.core.async.t_cljs$core$async25770(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25771));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25770(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23977__auto___25896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___25896,mults,ensure_mult,p){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___25896,mults,ensure_mult,p){
return (function (state_25844){
var state_val_25845 = (state_25844[(1)]);
if((state_val_25845 === (7))){
var inst_25840 = (state_25844[(2)]);
var state_25844__$1 = state_25844;
var statearr_25846_25897 = state_25844__$1;
(statearr_25846_25897[(2)] = inst_25840);

(statearr_25846_25897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (20))){
var state_25844__$1 = state_25844;
var statearr_25847_25898 = state_25844__$1;
(statearr_25847_25898[(2)] = null);

(statearr_25847_25898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (1))){
var state_25844__$1 = state_25844;
var statearr_25848_25899 = state_25844__$1;
(statearr_25848_25899[(2)] = null);

(statearr_25848_25899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (24))){
var inst_25823 = (state_25844[(7)]);
var inst_25832 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25823);
var state_25844__$1 = state_25844;
var statearr_25849_25900 = state_25844__$1;
(statearr_25849_25900[(2)] = inst_25832);

(statearr_25849_25900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (4))){
var inst_25775 = (state_25844[(8)]);
var inst_25775__$1 = (state_25844[(2)]);
var inst_25776 = (inst_25775__$1 == null);
var state_25844__$1 = (function (){var statearr_25850 = state_25844;
(statearr_25850[(8)] = inst_25775__$1);

return statearr_25850;
})();
if(cljs.core.truth_(inst_25776)){
var statearr_25851_25901 = state_25844__$1;
(statearr_25851_25901[(1)] = (5));

} else {
var statearr_25852_25902 = state_25844__$1;
(statearr_25852_25902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (15))){
var inst_25817 = (state_25844[(2)]);
var state_25844__$1 = state_25844;
var statearr_25853_25903 = state_25844__$1;
(statearr_25853_25903[(2)] = inst_25817);

(statearr_25853_25903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (21))){
var inst_25837 = (state_25844[(2)]);
var state_25844__$1 = (function (){var statearr_25854 = state_25844;
(statearr_25854[(9)] = inst_25837);

return statearr_25854;
})();
var statearr_25855_25904 = state_25844__$1;
(statearr_25855_25904[(2)] = null);

(statearr_25855_25904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (13))){
var inst_25799 = (state_25844[(10)]);
var inst_25801 = cljs.core.chunked_seq_QMARK_.call(null,inst_25799);
var state_25844__$1 = state_25844;
if(inst_25801){
var statearr_25856_25905 = state_25844__$1;
(statearr_25856_25905[(1)] = (16));

} else {
var statearr_25857_25906 = state_25844__$1;
(statearr_25857_25906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (22))){
var inst_25829 = (state_25844[(2)]);
var state_25844__$1 = state_25844;
if(cljs.core.truth_(inst_25829)){
var statearr_25858_25907 = state_25844__$1;
(statearr_25858_25907[(1)] = (23));

} else {
var statearr_25859_25908 = state_25844__$1;
(statearr_25859_25908[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (6))){
var inst_25823 = (state_25844[(7)]);
var inst_25775 = (state_25844[(8)]);
var inst_25825 = (state_25844[(11)]);
var inst_25823__$1 = topic_fn.call(null,inst_25775);
var inst_25824 = cljs.core.deref.call(null,mults);
var inst_25825__$1 = cljs.core.get.call(null,inst_25824,inst_25823__$1);
var state_25844__$1 = (function (){var statearr_25860 = state_25844;
(statearr_25860[(7)] = inst_25823__$1);

(statearr_25860[(11)] = inst_25825__$1);

return statearr_25860;
})();
if(cljs.core.truth_(inst_25825__$1)){
var statearr_25861_25909 = state_25844__$1;
(statearr_25861_25909[(1)] = (19));

} else {
var statearr_25862_25910 = state_25844__$1;
(statearr_25862_25910[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (25))){
var inst_25834 = (state_25844[(2)]);
var state_25844__$1 = state_25844;
var statearr_25863_25911 = state_25844__$1;
(statearr_25863_25911[(2)] = inst_25834);

(statearr_25863_25911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (17))){
var inst_25799 = (state_25844[(10)]);
var inst_25808 = cljs.core.first.call(null,inst_25799);
var inst_25809 = cljs.core.async.muxch_STAR_.call(null,inst_25808);
var inst_25810 = cljs.core.async.close_BANG_.call(null,inst_25809);
var inst_25811 = cljs.core.next.call(null,inst_25799);
var inst_25785 = inst_25811;
var inst_25786 = null;
var inst_25787 = (0);
var inst_25788 = (0);
var state_25844__$1 = (function (){var statearr_25864 = state_25844;
(statearr_25864[(12)] = inst_25810);

(statearr_25864[(13)] = inst_25788);

(statearr_25864[(14)] = inst_25787);

(statearr_25864[(15)] = inst_25786);

(statearr_25864[(16)] = inst_25785);

return statearr_25864;
})();
var statearr_25865_25912 = state_25844__$1;
(statearr_25865_25912[(2)] = null);

(statearr_25865_25912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (3))){
var inst_25842 = (state_25844[(2)]);
var state_25844__$1 = state_25844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25844__$1,inst_25842);
} else {
if((state_val_25845 === (12))){
var inst_25819 = (state_25844[(2)]);
var state_25844__$1 = state_25844;
var statearr_25866_25913 = state_25844__$1;
(statearr_25866_25913[(2)] = inst_25819);

(statearr_25866_25913[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (2))){
var state_25844__$1 = state_25844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25844__$1,(4),ch);
} else {
if((state_val_25845 === (23))){
var state_25844__$1 = state_25844;
var statearr_25867_25914 = state_25844__$1;
(statearr_25867_25914[(2)] = null);

(statearr_25867_25914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (19))){
var inst_25775 = (state_25844[(8)]);
var inst_25825 = (state_25844[(11)]);
var inst_25827 = cljs.core.async.muxch_STAR_.call(null,inst_25825);
var state_25844__$1 = state_25844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25844__$1,(22),inst_25827,inst_25775);
} else {
if((state_val_25845 === (11))){
var inst_25785 = (state_25844[(16)]);
var inst_25799 = (state_25844[(10)]);
var inst_25799__$1 = cljs.core.seq.call(null,inst_25785);
var state_25844__$1 = (function (){var statearr_25868 = state_25844;
(statearr_25868[(10)] = inst_25799__$1);

return statearr_25868;
})();
if(inst_25799__$1){
var statearr_25869_25915 = state_25844__$1;
(statearr_25869_25915[(1)] = (13));

} else {
var statearr_25870_25916 = state_25844__$1;
(statearr_25870_25916[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (9))){
var inst_25821 = (state_25844[(2)]);
var state_25844__$1 = state_25844;
var statearr_25871_25917 = state_25844__$1;
(statearr_25871_25917[(2)] = inst_25821);

(statearr_25871_25917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (5))){
var inst_25782 = cljs.core.deref.call(null,mults);
var inst_25783 = cljs.core.vals.call(null,inst_25782);
var inst_25784 = cljs.core.seq.call(null,inst_25783);
var inst_25785 = inst_25784;
var inst_25786 = null;
var inst_25787 = (0);
var inst_25788 = (0);
var state_25844__$1 = (function (){var statearr_25872 = state_25844;
(statearr_25872[(13)] = inst_25788);

(statearr_25872[(14)] = inst_25787);

(statearr_25872[(15)] = inst_25786);

(statearr_25872[(16)] = inst_25785);

return statearr_25872;
})();
var statearr_25873_25918 = state_25844__$1;
(statearr_25873_25918[(2)] = null);

(statearr_25873_25918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (14))){
var state_25844__$1 = state_25844;
var statearr_25877_25919 = state_25844__$1;
(statearr_25877_25919[(2)] = null);

(statearr_25877_25919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (16))){
var inst_25799 = (state_25844[(10)]);
var inst_25803 = cljs.core.chunk_first.call(null,inst_25799);
var inst_25804 = cljs.core.chunk_rest.call(null,inst_25799);
var inst_25805 = cljs.core.count.call(null,inst_25803);
var inst_25785 = inst_25804;
var inst_25786 = inst_25803;
var inst_25787 = inst_25805;
var inst_25788 = (0);
var state_25844__$1 = (function (){var statearr_25878 = state_25844;
(statearr_25878[(13)] = inst_25788);

(statearr_25878[(14)] = inst_25787);

(statearr_25878[(15)] = inst_25786);

(statearr_25878[(16)] = inst_25785);

return statearr_25878;
})();
var statearr_25879_25920 = state_25844__$1;
(statearr_25879_25920[(2)] = null);

(statearr_25879_25920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (10))){
var inst_25788 = (state_25844[(13)]);
var inst_25787 = (state_25844[(14)]);
var inst_25786 = (state_25844[(15)]);
var inst_25785 = (state_25844[(16)]);
var inst_25793 = cljs.core._nth.call(null,inst_25786,inst_25788);
var inst_25794 = cljs.core.async.muxch_STAR_.call(null,inst_25793);
var inst_25795 = cljs.core.async.close_BANG_.call(null,inst_25794);
var inst_25796 = (inst_25788 + (1));
var tmp25874 = inst_25787;
var tmp25875 = inst_25786;
var tmp25876 = inst_25785;
var inst_25785__$1 = tmp25876;
var inst_25786__$1 = tmp25875;
var inst_25787__$1 = tmp25874;
var inst_25788__$1 = inst_25796;
var state_25844__$1 = (function (){var statearr_25880 = state_25844;
(statearr_25880[(13)] = inst_25788__$1);

(statearr_25880[(14)] = inst_25787__$1);

(statearr_25880[(15)] = inst_25786__$1);

(statearr_25880[(16)] = inst_25785__$1);

(statearr_25880[(17)] = inst_25795);

return statearr_25880;
})();
var statearr_25881_25921 = state_25844__$1;
(statearr_25881_25921[(2)] = null);

(statearr_25881_25921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (18))){
var inst_25814 = (state_25844[(2)]);
var state_25844__$1 = state_25844;
var statearr_25882_25922 = state_25844__$1;
(statearr_25882_25922[(2)] = inst_25814);

(statearr_25882_25922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (8))){
var inst_25788 = (state_25844[(13)]);
var inst_25787 = (state_25844[(14)]);
var inst_25790 = (inst_25788 < inst_25787);
var inst_25791 = inst_25790;
var state_25844__$1 = state_25844;
if(cljs.core.truth_(inst_25791)){
var statearr_25883_25923 = state_25844__$1;
(statearr_25883_25923[(1)] = (10));

} else {
var statearr_25884_25924 = state_25844__$1;
(statearr_25884_25924[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto___25896,mults,ensure_mult,p))
;
return ((function (switch__23865__auto__,c__23977__auto___25896,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23866__auto__ = null;
var cljs$core$async$state_machine__23866__auto____0 = (function (){
var statearr_25888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25888[(0)] = cljs$core$async$state_machine__23866__auto__);

(statearr_25888[(1)] = (1));

return statearr_25888;
});
var cljs$core$async$state_machine__23866__auto____1 = (function (state_25844){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_25844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e25889){if((e25889 instanceof Object)){
var ex__23869__auto__ = e25889;
var statearr_25890_25925 = state_25844;
(statearr_25890_25925[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25926 = state_25844;
state_25844 = G__25926;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$state_machine__23866__auto__ = function(state_25844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23866__auto____1.call(this,state_25844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23866__auto____0;
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23866__auto____1;
return cljs$core$async$state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___25896,mults,ensure_mult,p))
})();
var state__23979__auto__ = (function (){var statearr_25891 = f__23978__auto__.call(null);
(statearr_25891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___25896);

return statearr_25891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___25896,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25927 = [];
var len__22749__auto___25930 = arguments.length;
var i__22750__auto___25931 = (0);
while(true){
if((i__22750__auto___25931 < len__22749__auto___25930)){
args25927.push((arguments[i__22750__auto___25931]));

var G__25932 = (i__22750__auto___25931 + (1));
i__22750__auto___25931 = G__25932;
continue;
} else {
}
break;
}

var G__25929 = args25927.length;
switch (G__25929) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25927.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25934 = [];
var len__22749__auto___25937 = arguments.length;
var i__22750__auto___25938 = (0);
while(true){
if((i__22750__auto___25938 < len__22749__auto___25937)){
args25934.push((arguments[i__22750__auto___25938]));

var G__25939 = (i__22750__auto___25938 + (1));
i__22750__auto___25938 = G__25939;
continue;
} else {
}
break;
}

var G__25936 = args25934.length;
switch (G__25936) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25934.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25941 = [];
var len__22749__auto___26012 = arguments.length;
var i__22750__auto___26013 = (0);
while(true){
if((i__22750__auto___26013 < len__22749__auto___26012)){
args25941.push((arguments[i__22750__auto___26013]));

var G__26014 = (i__22750__auto___26013 + (1));
i__22750__auto___26013 = G__26014;
continue;
} else {
}
break;
}

var G__25943 = args25941.length;
switch (G__25943) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25941.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23977__auto___26016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___26016,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___26016,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25982){
var state_val_25983 = (state_25982[(1)]);
if((state_val_25983 === (7))){
var state_25982__$1 = state_25982;
var statearr_25984_26017 = state_25982__$1;
(statearr_25984_26017[(2)] = null);

(statearr_25984_26017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25983 === (1))){
var state_25982__$1 = state_25982;
var statearr_25985_26018 = state_25982__$1;
(statearr_25985_26018[(2)] = null);

(statearr_25985_26018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25983 === (4))){
var inst_25946 = (state_25982[(7)]);
var inst_25948 = (inst_25946 < cnt);
var state_25982__$1 = state_25982;
if(cljs.core.truth_(inst_25948)){
var statearr_25986_26019 = state_25982__$1;
(statearr_25986_26019[(1)] = (6));

} else {
var statearr_25987_26020 = state_25982__$1;
(statearr_25987_26020[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25983 === (15))){
var inst_25978 = (state_25982[(2)]);
var state_25982__$1 = state_25982;
var statearr_25988_26021 = state_25982__$1;
(statearr_25988_26021[(2)] = inst_25978);

(statearr_25988_26021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25983 === (13))){
var inst_25971 = cljs.core.async.close_BANG_.call(null,out);
var state_25982__$1 = state_25982;
var statearr_25989_26022 = state_25982__$1;
(statearr_25989_26022[(2)] = inst_25971);

(statearr_25989_26022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25983 === (6))){
var state_25982__$1 = state_25982;
var statearr_25990_26023 = state_25982__$1;
(statearr_25990_26023[(2)] = null);

(statearr_25990_26023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25983 === (3))){
var inst_25980 = (state_25982[(2)]);
var state_25982__$1 = state_25982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25982__$1,inst_25980);
} else {
if((state_val_25983 === (12))){
var inst_25968 = (state_25982[(8)]);
var inst_25968__$1 = (state_25982[(2)]);
var inst_25969 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25968__$1);
var state_25982__$1 = (function (){var statearr_25991 = state_25982;
(statearr_25991[(8)] = inst_25968__$1);

return statearr_25991;
})();
if(cljs.core.truth_(inst_25969)){
var statearr_25992_26024 = state_25982__$1;
(statearr_25992_26024[(1)] = (13));

} else {
var statearr_25993_26025 = state_25982__$1;
(statearr_25993_26025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25983 === (2))){
var inst_25945 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25946 = (0);
var state_25982__$1 = (function (){var statearr_25994 = state_25982;
(statearr_25994[(7)] = inst_25946);

(statearr_25994[(9)] = inst_25945);

return statearr_25994;
})();
var statearr_25995_26026 = state_25982__$1;
(statearr_25995_26026[(2)] = null);

(statearr_25995_26026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25983 === (11))){
var inst_25946 = (state_25982[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25982,(10),Object,null,(9));
var inst_25955 = chs__$1.call(null,inst_25946);
var inst_25956 = done.call(null,inst_25946);
var inst_25957 = cljs.core.async.take_BANG_.call(null,inst_25955,inst_25956);
var state_25982__$1 = state_25982;
var statearr_25996_26027 = state_25982__$1;
(statearr_25996_26027[(2)] = inst_25957);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25982__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25983 === (9))){
var inst_25946 = (state_25982[(7)]);
var inst_25959 = (state_25982[(2)]);
var inst_25960 = (inst_25946 + (1));
var inst_25946__$1 = inst_25960;
var state_25982__$1 = (function (){var statearr_25997 = state_25982;
(statearr_25997[(7)] = inst_25946__$1);

(statearr_25997[(10)] = inst_25959);

return statearr_25997;
})();
var statearr_25998_26028 = state_25982__$1;
(statearr_25998_26028[(2)] = null);

(statearr_25998_26028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25983 === (5))){
var inst_25966 = (state_25982[(2)]);
var state_25982__$1 = (function (){var statearr_25999 = state_25982;
(statearr_25999[(11)] = inst_25966);

return statearr_25999;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25982__$1,(12),dchan);
} else {
if((state_val_25983 === (14))){
var inst_25968 = (state_25982[(8)]);
var inst_25973 = cljs.core.apply.call(null,f,inst_25968);
var state_25982__$1 = state_25982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25982__$1,(16),out,inst_25973);
} else {
if((state_val_25983 === (16))){
var inst_25975 = (state_25982[(2)]);
var state_25982__$1 = (function (){var statearr_26000 = state_25982;
(statearr_26000[(12)] = inst_25975);

return statearr_26000;
})();
var statearr_26001_26029 = state_25982__$1;
(statearr_26001_26029[(2)] = null);

(statearr_26001_26029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25983 === (10))){
var inst_25950 = (state_25982[(2)]);
var inst_25951 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25982__$1 = (function (){var statearr_26002 = state_25982;
(statearr_26002[(13)] = inst_25950);

return statearr_26002;
})();
var statearr_26003_26030 = state_25982__$1;
(statearr_26003_26030[(2)] = inst_25951);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25982__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25983 === (8))){
var inst_25964 = (state_25982[(2)]);
var state_25982__$1 = state_25982;
var statearr_26004_26031 = state_25982__$1;
(statearr_26004_26031[(2)] = inst_25964);

(statearr_26004_26031[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto___26016,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23865__auto__,c__23977__auto___26016,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23866__auto__ = null;
var cljs$core$async$state_machine__23866__auto____0 = (function (){
var statearr_26008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26008[(0)] = cljs$core$async$state_machine__23866__auto__);

(statearr_26008[(1)] = (1));

return statearr_26008;
});
var cljs$core$async$state_machine__23866__auto____1 = (function (state_25982){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_25982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e26009){if((e26009 instanceof Object)){
var ex__23869__auto__ = e26009;
var statearr_26010_26032 = state_25982;
(statearr_26010_26032[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26033 = state_25982;
state_25982 = G__26033;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$state_machine__23866__auto__ = function(state_25982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23866__auto____1.call(this,state_25982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23866__auto____0;
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23866__auto____1;
return cljs$core$async$state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___26016,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23979__auto__ = (function (){var statearr_26011 = f__23978__auto__.call(null);
(statearr_26011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___26016);

return statearr_26011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___26016,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26035 = [];
var len__22749__auto___26093 = arguments.length;
var i__22750__auto___26094 = (0);
while(true){
if((i__22750__auto___26094 < len__22749__auto___26093)){
args26035.push((arguments[i__22750__auto___26094]));

var G__26095 = (i__22750__auto___26094 + (1));
i__22750__auto___26094 = G__26095;
continue;
} else {
}
break;
}

var G__26037 = args26035.length;
switch (G__26037) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26035.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23977__auto___26097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___26097,out){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___26097,out){
return (function (state_26069){
var state_val_26070 = (state_26069[(1)]);
if((state_val_26070 === (7))){
var inst_26049 = (state_26069[(7)]);
var inst_26048 = (state_26069[(8)]);
var inst_26048__$1 = (state_26069[(2)]);
var inst_26049__$1 = cljs.core.nth.call(null,inst_26048__$1,(0),null);
var inst_26050 = cljs.core.nth.call(null,inst_26048__$1,(1),null);
var inst_26051 = (inst_26049__$1 == null);
var state_26069__$1 = (function (){var statearr_26071 = state_26069;
(statearr_26071[(7)] = inst_26049__$1);

(statearr_26071[(8)] = inst_26048__$1);

(statearr_26071[(9)] = inst_26050);

return statearr_26071;
})();
if(cljs.core.truth_(inst_26051)){
var statearr_26072_26098 = state_26069__$1;
(statearr_26072_26098[(1)] = (8));

} else {
var statearr_26073_26099 = state_26069__$1;
(statearr_26073_26099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (1))){
var inst_26038 = cljs.core.vec.call(null,chs);
var inst_26039 = inst_26038;
var state_26069__$1 = (function (){var statearr_26074 = state_26069;
(statearr_26074[(10)] = inst_26039);

return statearr_26074;
})();
var statearr_26075_26100 = state_26069__$1;
(statearr_26075_26100[(2)] = null);

(statearr_26075_26100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (4))){
var inst_26039 = (state_26069[(10)]);
var state_26069__$1 = state_26069;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26069__$1,(7),inst_26039);
} else {
if((state_val_26070 === (6))){
var inst_26065 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26076_26101 = state_26069__$1;
(statearr_26076_26101[(2)] = inst_26065);

(statearr_26076_26101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (3))){
var inst_26067 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26069__$1,inst_26067);
} else {
if((state_val_26070 === (2))){
var inst_26039 = (state_26069[(10)]);
var inst_26041 = cljs.core.count.call(null,inst_26039);
var inst_26042 = (inst_26041 > (0));
var state_26069__$1 = state_26069;
if(cljs.core.truth_(inst_26042)){
var statearr_26078_26102 = state_26069__$1;
(statearr_26078_26102[(1)] = (4));

} else {
var statearr_26079_26103 = state_26069__$1;
(statearr_26079_26103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (11))){
var inst_26039 = (state_26069[(10)]);
var inst_26058 = (state_26069[(2)]);
var tmp26077 = inst_26039;
var inst_26039__$1 = tmp26077;
var state_26069__$1 = (function (){var statearr_26080 = state_26069;
(statearr_26080[(11)] = inst_26058);

(statearr_26080[(10)] = inst_26039__$1);

return statearr_26080;
})();
var statearr_26081_26104 = state_26069__$1;
(statearr_26081_26104[(2)] = null);

(statearr_26081_26104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (9))){
var inst_26049 = (state_26069[(7)]);
var state_26069__$1 = state_26069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26069__$1,(11),out,inst_26049);
} else {
if((state_val_26070 === (5))){
var inst_26063 = cljs.core.async.close_BANG_.call(null,out);
var state_26069__$1 = state_26069;
var statearr_26082_26105 = state_26069__$1;
(statearr_26082_26105[(2)] = inst_26063);

(statearr_26082_26105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (10))){
var inst_26061 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26083_26106 = state_26069__$1;
(statearr_26083_26106[(2)] = inst_26061);

(statearr_26083_26106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (8))){
var inst_26049 = (state_26069[(7)]);
var inst_26048 = (state_26069[(8)]);
var inst_26050 = (state_26069[(9)]);
var inst_26039 = (state_26069[(10)]);
var inst_26053 = (function (){var cs = inst_26039;
var vec__26044 = inst_26048;
var v = inst_26049;
var c = inst_26050;
return ((function (cs,vec__26044,v,c,inst_26049,inst_26048,inst_26050,inst_26039,state_val_26070,c__23977__auto___26097,out){
return (function (p1__26034_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26034_SHARP_);
});
;})(cs,vec__26044,v,c,inst_26049,inst_26048,inst_26050,inst_26039,state_val_26070,c__23977__auto___26097,out))
})();
var inst_26054 = cljs.core.filterv.call(null,inst_26053,inst_26039);
var inst_26039__$1 = inst_26054;
var state_26069__$1 = (function (){var statearr_26084 = state_26069;
(statearr_26084[(10)] = inst_26039__$1);

return statearr_26084;
})();
var statearr_26085_26107 = state_26069__$1;
(statearr_26085_26107[(2)] = null);

(statearr_26085_26107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto___26097,out))
;
return ((function (switch__23865__auto__,c__23977__auto___26097,out){
return (function() {
var cljs$core$async$state_machine__23866__auto__ = null;
var cljs$core$async$state_machine__23866__auto____0 = (function (){
var statearr_26089 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26089[(0)] = cljs$core$async$state_machine__23866__auto__);

(statearr_26089[(1)] = (1));

return statearr_26089;
});
var cljs$core$async$state_machine__23866__auto____1 = (function (state_26069){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_26069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e26090){if((e26090 instanceof Object)){
var ex__23869__auto__ = e26090;
var statearr_26091_26108 = state_26069;
(statearr_26091_26108[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26109 = state_26069;
state_26069 = G__26109;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$state_machine__23866__auto__ = function(state_26069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23866__auto____1.call(this,state_26069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23866__auto____0;
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23866__auto____1;
return cljs$core$async$state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___26097,out))
})();
var state__23979__auto__ = (function (){var statearr_26092 = f__23978__auto__.call(null);
(statearr_26092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___26097);

return statearr_26092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___26097,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26110 = [];
var len__22749__auto___26159 = arguments.length;
var i__22750__auto___26160 = (0);
while(true){
if((i__22750__auto___26160 < len__22749__auto___26159)){
args26110.push((arguments[i__22750__auto___26160]));

var G__26161 = (i__22750__auto___26160 + (1));
i__22750__auto___26160 = G__26161;
continue;
} else {
}
break;
}

var G__26112 = args26110.length;
switch (G__26112) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26110.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23977__auto___26163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___26163,out){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___26163,out){
return (function (state_26136){
var state_val_26137 = (state_26136[(1)]);
if((state_val_26137 === (7))){
var inst_26118 = (state_26136[(7)]);
var inst_26118__$1 = (state_26136[(2)]);
var inst_26119 = (inst_26118__$1 == null);
var inst_26120 = cljs.core.not.call(null,inst_26119);
var state_26136__$1 = (function (){var statearr_26138 = state_26136;
(statearr_26138[(7)] = inst_26118__$1);

return statearr_26138;
})();
if(inst_26120){
var statearr_26139_26164 = state_26136__$1;
(statearr_26139_26164[(1)] = (8));

} else {
var statearr_26140_26165 = state_26136__$1;
(statearr_26140_26165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (1))){
var inst_26113 = (0);
var state_26136__$1 = (function (){var statearr_26141 = state_26136;
(statearr_26141[(8)] = inst_26113);

return statearr_26141;
})();
var statearr_26142_26166 = state_26136__$1;
(statearr_26142_26166[(2)] = null);

(statearr_26142_26166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (4))){
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26136__$1,(7),ch);
} else {
if((state_val_26137 === (6))){
var inst_26131 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26143_26167 = state_26136__$1;
(statearr_26143_26167[(2)] = inst_26131);

(statearr_26143_26167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (3))){
var inst_26133 = (state_26136[(2)]);
var inst_26134 = cljs.core.async.close_BANG_.call(null,out);
var state_26136__$1 = (function (){var statearr_26144 = state_26136;
(statearr_26144[(9)] = inst_26133);

return statearr_26144;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26136__$1,inst_26134);
} else {
if((state_val_26137 === (2))){
var inst_26113 = (state_26136[(8)]);
var inst_26115 = (inst_26113 < n);
var state_26136__$1 = state_26136;
if(cljs.core.truth_(inst_26115)){
var statearr_26145_26168 = state_26136__$1;
(statearr_26145_26168[(1)] = (4));

} else {
var statearr_26146_26169 = state_26136__$1;
(statearr_26146_26169[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (11))){
var inst_26113 = (state_26136[(8)]);
var inst_26123 = (state_26136[(2)]);
var inst_26124 = (inst_26113 + (1));
var inst_26113__$1 = inst_26124;
var state_26136__$1 = (function (){var statearr_26147 = state_26136;
(statearr_26147[(10)] = inst_26123);

(statearr_26147[(8)] = inst_26113__$1);

return statearr_26147;
})();
var statearr_26148_26170 = state_26136__$1;
(statearr_26148_26170[(2)] = null);

(statearr_26148_26170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (9))){
var state_26136__$1 = state_26136;
var statearr_26149_26171 = state_26136__$1;
(statearr_26149_26171[(2)] = null);

(statearr_26149_26171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (5))){
var state_26136__$1 = state_26136;
var statearr_26150_26172 = state_26136__$1;
(statearr_26150_26172[(2)] = null);

(statearr_26150_26172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (10))){
var inst_26128 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26151_26173 = state_26136__$1;
(statearr_26151_26173[(2)] = inst_26128);

(statearr_26151_26173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (8))){
var inst_26118 = (state_26136[(7)]);
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26136__$1,(11),out,inst_26118);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto___26163,out))
;
return ((function (switch__23865__auto__,c__23977__auto___26163,out){
return (function() {
var cljs$core$async$state_machine__23866__auto__ = null;
var cljs$core$async$state_machine__23866__auto____0 = (function (){
var statearr_26155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26155[(0)] = cljs$core$async$state_machine__23866__auto__);

(statearr_26155[(1)] = (1));

return statearr_26155;
});
var cljs$core$async$state_machine__23866__auto____1 = (function (state_26136){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_26136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e26156){if((e26156 instanceof Object)){
var ex__23869__auto__ = e26156;
var statearr_26157_26174 = state_26136;
(statearr_26157_26174[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26175 = state_26136;
state_26136 = G__26175;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$state_machine__23866__auto__ = function(state_26136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23866__auto____1.call(this,state_26136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23866__auto____0;
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23866__auto____1;
return cljs$core$async$state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___26163,out))
})();
var state__23979__auto__ = (function (){var statearr_26158 = f__23978__auto__.call(null);
(statearr_26158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___26163);

return statearr_26158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___26163,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26183 = (function (map_LT_,f,ch,meta26184){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26184 = meta26184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26185,meta26184__$1){
var self__ = this;
var _26185__$1 = this;
return (new cljs.core.async.t_cljs$core$async26183(self__.map_LT_,self__.f,self__.ch,meta26184__$1));
});

cljs.core.async.t_cljs$core$async26183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26185){
var self__ = this;
var _26185__$1 = this;
return self__.meta26184;
});

cljs.core.async.t_cljs$core$async26183.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26183.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26183.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26186 = (function (map_LT_,f,ch,meta26184,_,fn1,meta26187){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26184 = meta26184;
this._ = _;
this.fn1 = fn1;
this.meta26187 = meta26187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26188,meta26187__$1){
var self__ = this;
var _26188__$1 = this;
return (new cljs.core.async.t_cljs$core$async26186(self__.map_LT_,self__.f,self__.ch,self__.meta26184,self__._,self__.fn1,meta26187__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26188){
var self__ = this;
var _26188__$1 = this;
return self__.meta26187;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26186.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26186.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26176_SHARP_){
return f1.call(null,(((p1__26176_SHARP_ == null))?null:self__.f.call(null,p1__26176_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26186.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26184","meta26184",-217203599,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26183","cljs.core.async/t_cljs$core$async26183",295593105,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26187","meta26187",1633026878,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26186";

cljs.core.async.t_cljs$core$async26186.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async26186");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26186 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26186(map_LT___$1,f__$1,ch__$1,meta26184__$1,___$2,fn1__$1,meta26187){
return (new cljs.core.async.t_cljs$core$async26186(map_LT___$1,f__$1,ch__$1,meta26184__$1,___$2,fn1__$1,meta26187));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26186(self__.map_LT_,self__.f,self__.ch,self__.meta26184,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21662__auto__ = ret;
if(cljs.core.truth_(and__21662__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21662__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26183.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26184","meta26184",-217203599,null)], null);
});

cljs.core.async.t_cljs$core$async26183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26183";

cljs.core.async.t_cljs$core$async26183.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async26183");
});

cljs.core.async.__GT_t_cljs$core$async26183 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26183(map_LT___$1,f__$1,ch__$1,meta26184){
return (new cljs.core.async.t_cljs$core$async26183(map_LT___$1,f__$1,ch__$1,meta26184));
});

}

return (new cljs.core.async.t_cljs$core$async26183(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26192 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26192 = (function (map_GT_,f,ch,meta26193){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26193 = meta26193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26194,meta26193__$1){
var self__ = this;
var _26194__$1 = this;
return (new cljs.core.async.t_cljs$core$async26192(self__.map_GT_,self__.f,self__.ch,meta26193__$1));
});

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26194){
var self__ = this;
var _26194__$1 = this;
return self__.meta26193;
});

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26193","meta26193",747310214,null)], null);
});

cljs.core.async.t_cljs$core$async26192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26192";

cljs.core.async.t_cljs$core$async26192.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async26192");
});

cljs.core.async.__GT_t_cljs$core$async26192 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26192(map_GT___$1,f__$1,ch__$1,meta26193){
return (new cljs.core.async.t_cljs$core$async26192(map_GT___$1,f__$1,ch__$1,meta26193));
});

}

return (new cljs.core.async.t_cljs$core$async26192(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26198 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26198 = (function (filter_GT_,p,ch,meta26199){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26199 = meta26199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26200,meta26199__$1){
var self__ = this;
var _26200__$1 = this;
return (new cljs.core.async.t_cljs$core$async26198(self__.filter_GT_,self__.p,self__.ch,meta26199__$1));
});

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26200){
var self__ = this;
var _26200__$1 = this;
return self__.meta26199;
});

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26199","meta26199",-1178753688,null)], null);
});

cljs.core.async.t_cljs$core$async26198.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26198";

cljs.core.async.t_cljs$core$async26198.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async26198");
});

cljs.core.async.__GT_t_cljs$core$async26198 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26198(filter_GT___$1,p__$1,ch__$1,meta26199){
return (new cljs.core.async.t_cljs$core$async26198(filter_GT___$1,p__$1,ch__$1,meta26199));
});

}

return (new cljs.core.async.t_cljs$core$async26198(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26201 = [];
var len__22749__auto___26245 = arguments.length;
var i__22750__auto___26246 = (0);
while(true){
if((i__22750__auto___26246 < len__22749__auto___26245)){
args26201.push((arguments[i__22750__auto___26246]));

var G__26247 = (i__22750__auto___26246 + (1));
i__22750__auto___26246 = G__26247;
continue;
} else {
}
break;
}

var G__26203 = args26201.length;
switch (G__26203) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26201.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23977__auto___26249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___26249,out){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___26249,out){
return (function (state_26224){
var state_val_26225 = (state_26224[(1)]);
if((state_val_26225 === (7))){
var inst_26220 = (state_26224[(2)]);
var state_26224__$1 = state_26224;
var statearr_26226_26250 = state_26224__$1;
(statearr_26226_26250[(2)] = inst_26220);

(statearr_26226_26250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26225 === (1))){
var state_26224__$1 = state_26224;
var statearr_26227_26251 = state_26224__$1;
(statearr_26227_26251[(2)] = null);

(statearr_26227_26251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26225 === (4))){
var inst_26206 = (state_26224[(7)]);
var inst_26206__$1 = (state_26224[(2)]);
var inst_26207 = (inst_26206__$1 == null);
var state_26224__$1 = (function (){var statearr_26228 = state_26224;
(statearr_26228[(7)] = inst_26206__$1);

return statearr_26228;
})();
if(cljs.core.truth_(inst_26207)){
var statearr_26229_26252 = state_26224__$1;
(statearr_26229_26252[(1)] = (5));

} else {
var statearr_26230_26253 = state_26224__$1;
(statearr_26230_26253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26225 === (6))){
var inst_26206 = (state_26224[(7)]);
var inst_26211 = p.call(null,inst_26206);
var state_26224__$1 = state_26224;
if(cljs.core.truth_(inst_26211)){
var statearr_26231_26254 = state_26224__$1;
(statearr_26231_26254[(1)] = (8));

} else {
var statearr_26232_26255 = state_26224__$1;
(statearr_26232_26255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26225 === (3))){
var inst_26222 = (state_26224[(2)]);
var state_26224__$1 = state_26224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26224__$1,inst_26222);
} else {
if((state_val_26225 === (2))){
var state_26224__$1 = state_26224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26224__$1,(4),ch);
} else {
if((state_val_26225 === (11))){
var inst_26214 = (state_26224[(2)]);
var state_26224__$1 = state_26224;
var statearr_26233_26256 = state_26224__$1;
(statearr_26233_26256[(2)] = inst_26214);

(statearr_26233_26256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26225 === (9))){
var state_26224__$1 = state_26224;
var statearr_26234_26257 = state_26224__$1;
(statearr_26234_26257[(2)] = null);

(statearr_26234_26257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26225 === (5))){
var inst_26209 = cljs.core.async.close_BANG_.call(null,out);
var state_26224__$1 = state_26224;
var statearr_26235_26258 = state_26224__$1;
(statearr_26235_26258[(2)] = inst_26209);

(statearr_26235_26258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26225 === (10))){
var inst_26217 = (state_26224[(2)]);
var state_26224__$1 = (function (){var statearr_26236 = state_26224;
(statearr_26236[(8)] = inst_26217);

return statearr_26236;
})();
var statearr_26237_26259 = state_26224__$1;
(statearr_26237_26259[(2)] = null);

(statearr_26237_26259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26225 === (8))){
var inst_26206 = (state_26224[(7)]);
var state_26224__$1 = state_26224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26224__$1,(11),out,inst_26206);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto___26249,out))
;
return ((function (switch__23865__auto__,c__23977__auto___26249,out){
return (function() {
var cljs$core$async$state_machine__23866__auto__ = null;
var cljs$core$async$state_machine__23866__auto____0 = (function (){
var statearr_26241 = [null,null,null,null,null,null,null,null,null];
(statearr_26241[(0)] = cljs$core$async$state_machine__23866__auto__);

(statearr_26241[(1)] = (1));

return statearr_26241;
});
var cljs$core$async$state_machine__23866__auto____1 = (function (state_26224){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_26224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e26242){if((e26242 instanceof Object)){
var ex__23869__auto__ = e26242;
var statearr_26243_26260 = state_26224;
(statearr_26243_26260[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26261 = state_26224;
state_26224 = G__26261;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$state_machine__23866__auto__ = function(state_26224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23866__auto____1.call(this,state_26224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23866__auto____0;
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23866__auto____1;
return cljs$core$async$state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___26249,out))
})();
var state__23979__auto__ = (function (){var statearr_26244 = f__23978__auto__.call(null);
(statearr_26244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___26249);

return statearr_26244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___26249,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26262 = [];
var len__22749__auto___26265 = arguments.length;
var i__22750__auto___26266 = (0);
while(true){
if((i__22750__auto___26266 < len__22749__auto___26265)){
args26262.push((arguments[i__22750__auto___26266]));

var G__26267 = (i__22750__auto___26266 + (1));
i__22750__auto___26266 = G__26267;
continue;
} else {
}
break;
}

var G__26264 = args26262.length;
switch (G__26264) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26262.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto__){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto__){
return (function (state_26434){
var state_val_26435 = (state_26434[(1)]);
if((state_val_26435 === (7))){
var inst_26430 = (state_26434[(2)]);
var state_26434__$1 = state_26434;
var statearr_26436_26477 = state_26434__$1;
(statearr_26436_26477[(2)] = inst_26430);

(statearr_26436_26477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (20))){
var inst_26400 = (state_26434[(7)]);
var inst_26411 = (state_26434[(2)]);
var inst_26412 = cljs.core.next.call(null,inst_26400);
var inst_26386 = inst_26412;
var inst_26387 = null;
var inst_26388 = (0);
var inst_26389 = (0);
var state_26434__$1 = (function (){var statearr_26437 = state_26434;
(statearr_26437[(8)] = inst_26386);

(statearr_26437[(9)] = inst_26387);

(statearr_26437[(10)] = inst_26411);

(statearr_26437[(11)] = inst_26388);

(statearr_26437[(12)] = inst_26389);

return statearr_26437;
})();
var statearr_26438_26478 = state_26434__$1;
(statearr_26438_26478[(2)] = null);

(statearr_26438_26478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (1))){
var state_26434__$1 = state_26434;
var statearr_26439_26479 = state_26434__$1;
(statearr_26439_26479[(2)] = null);

(statearr_26439_26479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (4))){
var inst_26375 = (state_26434[(13)]);
var inst_26375__$1 = (state_26434[(2)]);
var inst_26376 = (inst_26375__$1 == null);
var state_26434__$1 = (function (){var statearr_26440 = state_26434;
(statearr_26440[(13)] = inst_26375__$1);

return statearr_26440;
})();
if(cljs.core.truth_(inst_26376)){
var statearr_26441_26480 = state_26434__$1;
(statearr_26441_26480[(1)] = (5));

} else {
var statearr_26442_26481 = state_26434__$1;
(statearr_26442_26481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (15))){
var state_26434__$1 = state_26434;
var statearr_26446_26482 = state_26434__$1;
(statearr_26446_26482[(2)] = null);

(statearr_26446_26482[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (21))){
var state_26434__$1 = state_26434;
var statearr_26447_26483 = state_26434__$1;
(statearr_26447_26483[(2)] = null);

(statearr_26447_26483[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (13))){
var inst_26386 = (state_26434[(8)]);
var inst_26387 = (state_26434[(9)]);
var inst_26388 = (state_26434[(11)]);
var inst_26389 = (state_26434[(12)]);
var inst_26396 = (state_26434[(2)]);
var inst_26397 = (inst_26389 + (1));
var tmp26443 = inst_26386;
var tmp26444 = inst_26387;
var tmp26445 = inst_26388;
var inst_26386__$1 = tmp26443;
var inst_26387__$1 = tmp26444;
var inst_26388__$1 = tmp26445;
var inst_26389__$1 = inst_26397;
var state_26434__$1 = (function (){var statearr_26448 = state_26434;
(statearr_26448[(8)] = inst_26386__$1);

(statearr_26448[(9)] = inst_26387__$1);

(statearr_26448[(11)] = inst_26388__$1);

(statearr_26448[(14)] = inst_26396);

(statearr_26448[(12)] = inst_26389__$1);

return statearr_26448;
})();
var statearr_26449_26484 = state_26434__$1;
(statearr_26449_26484[(2)] = null);

(statearr_26449_26484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (22))){
var state_26434__$1 = state_26434;
var statearr_26450_26485 = state_26434__$1;
(statearr_26450_26485[(2)] = null);

(statearr_26450_26485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (6))){
var inst_26375 = (state_26434[(13)]);
var inst_26384 = f.call(null,inst_26375);
var inst_26385 = cljs.core.seq.call(null,inst_26384);
var inst_26386 = inst_26385;
var inst_26387 = null;
var inst_26388 = (0);
var inst_26389 = (0);
var state_26434__$1 = (function (){var statearr_26451 = state_26434;
(statearr_26451[(8)] = inst_26386);

(statearr_26451[(9)] = inst_26387);

(statearr_26451[(11)] = inst_26388);

(statearr_26451[(12)] = inst_26389);

return statearr_26451;
})();
var statearr_26452_26486 = state_26434__$1;
(statearr_26452_26486[(2)] = null);

(statearr_26452_26486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (17))){
var inst_26400 = (state_26434[(7)]);
var inst_26404 = cljs.core.chunk_first.call(null,inst_26400);
var inst_26405 = cljs.core.chunk_rest.call(null,inst_26400);
var inst_26406 = cljs.core.count.call(null,inst_26404);
var inst_26386 = inst_26405;
var inst_26387 = inst_26404;
var inst_26388 = inst_26406;
var inst_26389 = (0);
var state_26434__$1 = (function (){var statearr_26453 = state_26434;
(statearr_26453[(8)] = inst_26386);

(statearr_26453[(9)] = inst_26387);

(statearr_26453[(11)] = inst_26388);

(statearr_26453[(12)] = inst_26389);

return statearr_26453;
})();
var statearr_26454_26487 = state_26434__$1;
(statearr_26454_26487[(2)] = null);

(statearr_26454_26487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (3))){
var inst_26432 = (state_26434[(2)]);
var state_26434__$1 = state_26434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26434__$1,inst_26432);
} else {
if((state_val_26435 === (12))){
var inst_26420 = (state_26434[(2)]);
var state_26434__$1 = state_26434;
var statearr_26455_26488 = state_26434__$1;
(statearr_26455_26488[(2)] = inst_26420);

(statearr_26455_26488[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (2))){
var state_26434__$1 = state_26434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26434__$1,(4),in$);
} else {
if((state_val_26435 === (23))){
var inst_26428 = (state_26434[(2)]);
var state_26434__$1 = state_26434;
var statearr_26456_26489 = state_26434__$1;
(statearr_26456_26489[(2)] = inst_26428);

(statearr_26456_26489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (19))){
var inst_26415 = (state_26434[(2)]);
var state_26434__$1 = state_26434;
var statearr_26457_26490 = state_26434__$1;
(statearr_26457_26490[(2)] = inst_26415);

(statearr_26457_26490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (11))){
var inst_26386 = (state_26434[(8)]);
var inst_26400 = (state_26434[(7)]);
var inst_26400__$1 = cljs.core.seq.call(null,inst_26386);
var state_26434__$1 = (function (){var statearr_26458 = state_26434;
(statearr_26458[(7)] = inst_26400__$1);

return statearr_26458;
})();
if(inst_26400__$1){
var statearr_26459_26491 = state_26434__$1;
(statearr_26459_26491[(1)] = (14));

} else {
var statearr_26460_26492 = state_26434__$1;
(statearr_26460_26492[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (9))){
var inst_26422 = (state_26434[(2)]);
var inst_26423 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26434__$1 = (function (){var statearr_26461 = state_26434;
(statearr_26461[(15)] = inst_26422);

return statearr_26461;
})();
if(cljs.core.truth_(inst_26423)){
var statearr_26462_26493 = state_26434__$1;
(statearr_26462_26493[(1)] = (21));

} else {
var statearr_26463_26494 = state_26434__$1;
(statearr_26463_26494[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (5))){
var inst_26378 = cljs.core.async.close_BANG_.call(null,out);
var state_26434__$1 = state_26434;
var statearr_26464_26495 = state_26434__$1;
(statearr_26464_26495[(2)] = inst_26378);

(statearr_26464_26495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (14))){
var inst_26400 = (state_26434[(7)]);
var inst_26402 = cljs.core.chunked_seq_QMARK_.call(null,inst_26400);
var state_26434__$1 = state_26434;
if(inst_26402){
var statearr_26465_26496 = state_26434__$1;
(statearr_26465_26496[(1)] = (17));

} else {
var statearr_26466_26497 = state_26434__$1;
(statearr_26466_26497[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (16))){
var inst_26418 = (state_26434[(2)]);
var state_26434__$1 = state_26434;
var statearr_26467_26498 = state_26434__$1;
(statearr_26467_26498[(2)] = inst_26418);

(statearr_26467_26498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (10))){
var inst_26387 = (state_26434[(9)]);
var inst_26389 = (state_26434[(12)]);
var inst_26394 = cljs.core._nth.call(null,inst_26387,inst_26389);
var state_26434__$1 = state_26434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26434__$1,(13),out,inst_26394);
} else {
if((state_val_26435 === (18))){
var inst_26400 = (state_26434[(7)]);
var inst_26409 = cljs.core.first.call(null,inst_26400);
var state_26434__$1 = state_26434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26434__$1,(20),out,inst_26409);
} else {
if((state_val_26435 === (8))){
var inst_26388 = (state_26434[(11)]);
var inst_26389 = (state_26434[(12)]);
var inst_26391 = (inst_26389 < inst_26388);
var inst_26392 = inst_26391;
var state_26434__$1 = state_26434;
if(cljs.core.truth_(inst_26392)){
var statearr_26468_26499 = state_26434__$1;
(statearr_26468_26499[(1)] = (10));

} else {
var statearr_26469_26500 = state_26434__$1;
(statearr_26469_26500[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto__))
;
return ((function (switch__23865__auto__,c__23977__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23866__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23866__auto____0 = (function (){
var statearr_26473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26473[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23866__auto__);

(statearr_26473[(1)] = (1));

return statearr_26473;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23866__auto____1 = (function (state_26434){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_26434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e26474){if((e26474 instanceof Object)){
var ex__23869__auto__ = e26474;
var statearr_26475_26501 = state_26434;
(statearr_26475_26501[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26502 = state_26434;
state_26434 = G__26502;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23866__auto__ = function(state_26434){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23866__auto____1.call(this,state_26434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23866__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23866__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto__))
})();
var state__23979__auto__ = (function (){var statearr_26476 = f__23978__auto__.call(null);
(statearr_26476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto__);

return statearr_26476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto__))
);

return c__23977__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26503 = [];
var len__22749__auto___26506 = arguments.length;
var i__22750__auto___26507 = (0);
while(true){
if((i__22750__auto___26507 < len__22749__auto___26506)){
args26503.push((arguments[i__22750__auto___26507]));

var G__26508 = (i__22750__auto___26507 + (1));
i__22750__auto___26507 = G__26508;
continue;
} else {
}
break;
}

var G__26505 = args26503.length;
switch (G__26505) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26503.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26510 = [];
var len__22749__auto___26513 = arguments.length;
var i__22750__auto___26514 = (0);
while(true){
if((i__22750__auto___26514 < len__22749__auto___26513)){
args26510.push((arguments[i__22750__auto___26514]));

var G__26515 = (i__22750__auto___26514 + (1));
i__22750__auto___26514 = G__26515;
continue;
} else {
}
break;
}

var G__26512 = args26510.length;
switch (G__26512) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26510.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26517 = [];
var len__22749__auto___26568 = arguments.length;
var i__22750__auto___26569 = (0);
while(true){
if((i__22750__auto___26569 < len__22749__auto___26568)){
args26517.push((arguments[i__22750__auto___26569]));

var G__26570 = (i__22750__auto___26569 + (1));
i__22750__auto___26569 = G__26570;
continue;
} else {
}
break;
}

var G__26519 = args26517.length;
switch (G__26519) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26517.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23977__auto___26572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___26572,out){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___26572,out){
return (function (state_26543){
var state_val_26544 = (state_26543[(1)]);
if((state_val_26544 === (7))){
var inst_26538 = (state_26543[(2)]);
var state_26543__$1 = state_26543;
var statearr_26545_26573 = state_26543__$1;
(statearr_26545_26573[(2)] = inst_26538);

(statearr_26545_26573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (1))){
var inst_26520 = null;
var state_26543__$1 = (function (){var statearr_26546 = state_26543;
(statearr_26546[(7)] = inst_26520);

return statearr_26546;
})();
var statearr_26547_26574 = state_26543__$1;
(statearr_26547_26574[(2)] = null);

(statearr_26547_26574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (4))){
var inst_26523 = (state_26543[(8)]);
var inst_26523__$1 = (state_26543[(2)]);
var inst_26524 = (inst_26523__$1 == null);
var inst_26525 = cljs.core.not.call(null,inst_26524);
var state_26543__$1 = (function (){var statearr_26548 = state_26543;
(statearr_26548[(8)] = inst_26523__$1);

return statearr_26548;
})();
if(inst_26525){
var statearr_26549_26575 = state_26543__$1;
(statearr_26549_26575[(1)] = (5));

} else {
var statearr_26550_26576 = state_26543__$1;
(statearr_26550_26576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (6))){
var state_26543__$1 = state_26543;
var statearr_26551_26577 = state_26543__$1;
(statearr_26551_26577[(2)] = null);

(statearr_26551_26577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (3))){
var inst_26540 = (state_26543[(2)]);
var inst_26541 = cljs.core.async.close_BANG_.call(null,out);
var state_26543__$1 = (function (){var statearr_26552 = state_26543;
(statearr_26552[(9)] = inst_26540);

return statearr_26552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26543__$1,inst_26541);
} else {
if((state_val_26544 === (2))){
var state_26543__$1 = state_26543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26543__$1,(4),ch);
} else {
if((state_val_26544 === (11))){
var inst_26523 = (state_26543[(8)]);
var inst_26532 = (state_26543[(2)]);
var inst_26520 = inst_26523;
var state_26543__$1 = (function (){var statearr_26553 = state_26543;
(statearr_26553[(10)] = inst_26532);

(statearr_26553[(7)] = inst_26520);

return statearr_26553;
})();
var statearr_26554_26578 = state_26543__$1;
(statearr_26554_26578[(2)] = null);

(statearr_26554_26578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (9))){
var inst_26523 = (state_26543[(8)]);
var state_26543__$1 = state_26543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26543__$1,(11),out,inst_26523);
} else {
if((state_val_26544 === (5))){
var inst_26520 = (state_26543[(7)]);
var inst_26523 = (state_26543[(8)]);
var inst_26527 = cljs.core._EQ_.call(null,inst_26523,inst_26520);
var state_26543__$1 = state_26543;
if(inst_26527){
var statearr_26556_26579 = state_26543__$1;
(statearr_26556_26579[(1)] = (8));

} else {
var statearr_26557_26580 = state_26543__$1;
(statearr_26557_26580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (10))){
var inst_26535 = (state_26543[(2)]);
var state_26543__$1 = state_26543;
var statearr_26558_26581 = state_26543__$1;
(statearr_26558_26581[(2)] = inst_26535);

(statearr_26558_26581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (8))){
var inst_26520 = (state_26543[(7)]);
var tmp26555 = inst_26520;
var inst_26520__$1 = tmp26555;
var state_26543__$1 = (function (){var statearr_26559 = state_26543;
(statearr_26559[(7)] = inst_26520__$1);

return statearr_26559;
})();
var statearr_26560_26582 = state_26543__$1;
(statearr_26560_26582[(2)] = null);

(statearr_26560_26582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto___26572,out))
;
return ((function (switch__23865__auto__,c__23977__auto___26572,out){
return (function() {
var cljs$core$async$state_machine__23866__auto__ = null;
var cljs$core$async$state_machine__23866__auto____0 = (function (){
var statearr_26564 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26564[(0)] = cljs$core$async$state_machine__23866__auto__);

(statearr_26564[(1)] = (1));

return statearr_26564;
});
var cljs$core$async$state_machine__23866__auto____1 = (function (state_26543){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_26543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e26565){if((e26565 instanceof Object)){
var ex__23869__auto__ = e26565;
var statearr_26566_26583 = state_26543;
(statearr_26566_26583[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26584 = state_26543;
state_26543 = G__26584;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$state_machine__23866__auto__ = function(state_26543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23866__auto____1.call(this,state_26543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23866__auto____0;
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23866__auto____1;
return cljs$core$async$state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___26572,out))
})();
var state__23979__auto__ = (function (){var statearr_26567 = f__23978__auto__.call(null);
(statearr_26567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___26572);

return statearr_26567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___26572,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26585 = [];
var len__22749__auto___26655 = arguments.length;
var i__22750__auto___26656 = (0);
while(true){
if((i__22750__auto___26656 < len__22749__auto___26655)){
args26585.push((arguments[i__22750__auto___26656]));

var G__26657 = (i__22750__auto___26656 + (1));
i__22750__auto___26656 = G__26657;
continue;
} else {
}
break;
}

var G__26587 = args26585.length;
switch (G__26587) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26585.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23977__auto___26659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___26659,out){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___26659,out){
return (function (state_26625){
var state_val_26626 = (state_26625[(1)]);
if((state_val_26626 === (7))){
var inst_26621 = (state_26625[(2)]);
var state_26625__$1 = state_26625;
var statearr_26627_26660 = state_26625__$1;
(statearr_26627_26660[(2)] = inst_26621);

(statearr_26627_26660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26626 === (1))){
var inst_26588 = (new Array(n));
var inst_26589 = inst_26588;
var inst_26590 = (0);
var state_26625__$1 = (function (){var statearr_26628 = state_26625;
(statearr_26628[(7)] = inst_26589);

(statearr_26628[(8)] = inst_26590);

return statearr_26628;
})();
var statearr_26629_26661 = state_26625__$1;
(statearr_26629_26661[(2)] = null);

(statearr_26629_26661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26626 === (4))){
var inst_26593 = (state_26625[(9)]);
var inst_26593__$1 = (state_26625[(2)]);
var inst_26594 = (inst_26593__$1 == null);
var inst_26595 = cljs.core.not.call(null,inst_26594);
var state_26625__$1 = (function (){var statearr_26630 = state_26625;
(statearr_26630[(9)] = inst_26593__$1);

return statearr_26630;
})();
if(inst_26595){
var statearr_26631_26662 = state_26625__$1;
(statearr_26631_26662[(1)] = (5));

} else {
var statearr_26632_26663 = state_26625__$1;
(statearr_26632_26663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26626 === (15))){
var inst_26615 = (state_26625[(2)]);
var state_26625__$1 = state_26625;
var statearr_26633_26664 = state_26625__$1;
(statearr_26633_26664[(2)] = inst_26615);

(statearr_26633_26664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26626 === (13))){
var state_26625__$1 = state_26625;
var statearr_26634_26665 = state_26625__$1;
(statearr_26634_26665[(2)] = null);

(statearr_26634_26665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26626 === (6))){
var inst_26590 = (state_26625[(8)]);
var inst_26611 = (inst_26590 > (0));
var state_26625__$1 = state_26625;
if(cljs.core.truth_(inst_26611)){
var statearr_26635_26666 = state_26625__$1;
(statearr_26635_26666[(1)] = (12));

} else {
var statearr_26636_26667 = state_26625__$1;
(statearr_26636_26667[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26626 === (3))){
var inst_26623 = (state_26625[(2)]);
var state_26625__$1 = state_26625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26625__$1,inst_26623);
} else {
if((state_val_26626 === (12))){
var inst_26589 = (state_26625[(7)]);
var inst_26613 = cljs.core.vec.call(null,inst_26589);
var state_26625__$1 = state_26625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26625__$1,(15),out,inst_26613);
} else {
if((state_val_26626 === (2))){
var state_26625__$1 = state_26625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26625__$1,(4),ch);
} else {
if((state_val_26626 === (11))){
var inst_26605 = (state_26625[(2)]);
var inst_26606 = (new Array(n));
var inst_26589 = inst_26606;
var inst_26590 = (0);
var state_26625__$1 = (function (){var statearr_26637 = state_26625;
(statearr_26637[(7)] = inst_26589);

(statearr_26637[(8)] = inst_26590);

(statearr_26637[(10)] = inst_26605);

return statearr_26637;
})();
var statearr_26638_26668 = state_26625__$1;
(statearr_26638_26668[(2)] = null);

(statearr_26638_26668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26626 === (9))){
var inst_26589 = (state_26625[(7)]);
var inst_26603 = cljs.core.vec.call(null,inst_26589);
var state_26625__$1 = state_26625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26625__$1,(11),out,inst_26603);
} else {
if((state_val_26626 === (5))){
var inst_26589 = (state_26625[(7)]);
var inst_26593 = (state_26625[(9)]);
var inst_26590 = (state_26625[(8)]);
var inst_26598 = (state_26625[(11)]);
var inst_26597 = (inst_26589[inst_26590] = inst_26593);
var inst_26598__$1 = (inst_26590 + (1));
var inst_26599 = (inst_26598__$1 < n);
var state_26625__$1 = (function (){var statearr_26639 = state_26625;
(statearr_26639[(11)] = inst_26598__$1);

(statearr_26639[(12)] = inst_26597);

return statearr_26639;
})();
if(cljs.core.truth_(inst_26599)){
var statearr_26640_26669 = state_26625__$1;
(statearr_26640_26669[(1)] = (8));

} else {
var statearr_26641_26670 = state_26625__$1;
(statearr_26641_26670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26626 === (14))){
var inst_26618 = (state_26625[(2)]);
var inst_26619 = cljs.core.async.close_BANG_.call(null,out);
var state_26625__$1 = (function (){var statearr_26643 = state_26625;
(statearr_26643[(13)] = inst_26618);

return statearr_26643;
})();
var statearr_26644_26671 = state_26625__$1;
(statearr_26644_26671[(2)] = inst_26619);

(statearr_26644_26671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26626 === (10))){
var inst_26609 = (state_26625[(2)]);
var state_26625__$1 = state_26625;
var statearr_26645_26672 = state_26625__$1;
(statearr_26645_26672[(2)] = inst_26609);

(statearr_26645_26672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26626 === (8))){
var inst_26589 = (state_26625[(7)]);
var inst_26598 = (state_26625[(11)]);
var tmp26642 = inst_26589;
var inst_26589__$1 = tmp26642;
var inst_26590 = inst_26598;
var state_26625__$1 = (function (){var statearr_26646 = state_26625;
(statearr_26646[(7)] = inst_26589__$1);

(statearr_26646[(8)] = inst_26590);

return statearr_26646;
})();
var statearr_26647_26673 = state_26625__$1;
(statearr_26647_26673[(2)] = null);

(statearr_26647_26673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto___26659,out))
;
return ((function (switch__23865__auto__,c__23977__auto___26659,out){
return (function() {
var cljs$core$async$state_machine__23866__auto__ = null;
var cljs$core$async$state_machine__23866__auto____0 = (function (){
var statearr_26651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26651[(0)] = cljs$core$async$state_machine__23866__auto__);

(statearr_26651[(1)] = (1));

return statearr_26651;
});
var cljs$core$async$state_machine__23866__auto____1 = (function (state_26625){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_26625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e26652){if((e26652 instanceof Object)){
var ex__23869__auto__ = e26652;
var statearr_26653_26674 = state_26625;
(statearr_26653_26674[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26675 = state_26625;
state_26625 = G__26675;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$state_machine__23866__auto__ = function(state_26625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23866__auto____1.call(this,state_26625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23866__auto____0;
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23866__auto____1;
return cljs$core$async$state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___26659,out))
})();
var state__23979__auto__ = (function (){var statearr_26654 = f__23978__auto__.call(null);
(statearr_26654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___26659);

return statearr_26654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___26659,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26676 = [];
var len__22749__auto___26750 = arguments.length;
var i__22750__auto___26751 = (0);
while(true){
if((i__22750__auto___26751 < len__22749__auto___26750)){
args26676.push((arguments[i__22750__auto___26751]));

var G__26752 = (i__22750__auto___26751 + (1));
i__22750__auto___26751 = G__26752;
continue;
} else {
}
break;
}

var G__26678 = args26676.length;
switch (G__26678) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26676.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23977__auto___26754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___26754,out){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___26754,out){
return (function (state_26720){
var state_val_26721 = (state_26720[(1)]);
if((state_val_26721 === (7))){
var inst_26716 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
var statearr_26722_26755 = state_26720__$1;
(statearr_26722_26755[(2)] = inst_26716);

(statearr_26722_26755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (1))){
var inst_26679 = [];
var inst_26680 = inst_26679;
var inst_26681 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26720__$1 = (function (){var statearr_26723 = state_26720;
(statearr_26723[(7)] = inst_26681);

(statearr_26723[(8)] = inst_26680);

return statearr_26723;
})();
var statearr_26724_26756 = state_26720__$1;
(statearr_26724_26756[(2)] = null);

(statearr_26724_26756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (4))){
var inst_26684 = (state_26720[(9)]);
var inst_26684__$1 = (state_26720[(2)]);
var inst_26685 = (inst_26684__$1 == null);
var inst_26686 = cljs.core.not.call(null,inst_26685);
var state_26720__$1 = (function (){var statearr_26725 = state_26720;
(statearr_26725[(9)] = inst_26684__$1);

return statearr_26725;
})();
if(inst_26686){
var statearr_26726_26757 = state_26720__$1;
(statearr_26726_26757[(1)] = (5));

} else {
var statearr_26727_26758 = state_26720__$1;
(statearr_26727_26758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (15))){
var inst_26710 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
var statearr_26728_26759 = state_26720__$1;
(statearr_26728_26759[(2)] = inst_26710);

(statearr_26728_26759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (13))){
var state_26720__$1 = state_26720;
var statearr_26729_26760 = state_26720__$1;
(statearr_26729_26760[(2)] = null);

(statearr_26729_26760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (6))){
var inst_26680 = (state_26720[(8)]);
var inst_26705 = inst_26680.length;
var inst_26706 = (inst_26705 > (0));
var state_26720__$1 = state_26720;
if(cljs.core.truth_(inst_26706)){
var statearr_26730_26761 = state_26720__$1;
(statearr_26730_26761[(1)] = (12));

} else {
var statearr_26731_26762 = state_26720__$1;
(statearr_26731_26762[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (3))){
var inst_26718 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26720__$1,inst_26718);
} else {
if((state_val_26721 === (12))){
var inst_26680 = (state_26720[(8)]);
var inst_26708 = cljs.core.vec.call(null,inst_26680);
var state_26720__$1 = state_26720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26720__$1,(15),out,inst_26708);
} else {
if((state_val_26721 === (2))){
var state_26720__$1 = state_26720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26720__$1,(4),ch);
} else {
if((state_val_26721 === (11))){
var inst_26684 = (state_26720[(9)]);
var inst_26688 = (state_26720[(10)]);
var inst_26698 = (state_26720[(2)]);
var inst_26699 = [];
var inst_26700 = inst_26699.push(inst_26684);
var inst_26680 = inst_26699;
var inst_26681 = inst_26688;
var state_26720__$1 = (function (){var statearr_26732 = state_26720;
(statearr_26732[(11)] = inst_26698);

(statearr_26732[(7)] = inst_26681);

(statearr_26732[(12)] = inst_26700);

(statearr_26732[(8)] = inst_26680);

return statearr_26732;
})();
var statearr_26733_26763 = state_26720__$1;
(statearr_26733_26763[(2)] = null);

(statearr_26733_26763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (9))){
var inst_26680 = (state_26720[(8)]);
var inst_26696 = cljs.core.vec.call(null,inst_26680);
var state_26720__$1 = state_26720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26720__$1,(11),out,inst_26696);
} else {
if((state_val_26721 === (5))){
var inst_26684 = (state_26720[(9)]);
var inst_26681 = (state_26720[(7)]);
var inst_26688 = (state_26720[(10)]);
var inst_26688__$1 = f.call(null,inst_26684);
var inst_26689 = cljs.core._EQ_.call(null,inst_26688__$1,inst_26681);
var inst_26690 = cljs.core.keyword_identical_QMARK_.call(null,inst_26681,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26691 = (inst_26689) || (inst_26690);
var state_26720__$1 = (function (){var statearr_26734 = state_26720;
(statearr_26734[(10)] = inst_26688__$1);

return statearr_26734;
})();
if(cljs.core.truth_(inst_26691)){
var statearr_26735_26764 = state_26720__$1;
(statearr_26735_26764[(1)] = (8));

} else {
var statearr_26736_26765 = state_26720__$1;
(statearr_26736_26765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (14))){
var inst_26713 = (state_26720[(2)]);
var inst_26714 = cljs.core.async.close_BANG_.call(null,out);
var state_26720__$1 = (function (){var statearr_26738 = state_26720;
(statearr_26738[(13)] = inst_26713);

return statearr_26738;
})();
var statearr_26739_26766 = state_26720__$1;
(statearr_26739_26766[(2)] = inst_26714);

(statearr_26739_26766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (10))){
var inst_26703 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
var statearr_26740_26767 = state_26720__$1;
(statearr_26740_26767[(2)] = inst_26703);

(statearr_26740_26767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (8))){
var inst_26684 = (state_26720[(9)]);
var inst_26680 = (state_26720[(8)]);
var inst_26688 = (state_26720[(10)]);
var inst_26693 = inst_26680.push(inst_26684);
var tmp26737 = inst_26680;
var inst_26680__$1 = tmp26737;
var inst_26681 = inst_26688;
var state_26720__$1 = (function (){var statearr_26741 = state_26720;
(statearr_26741[(14)] = inst_26693);

(statearr_26741[(7)] = inst_26681);

(statearr_26741[(8)] = inst_26680__$1);

return statearr_26741;
})();
var statearr_26742_26768 = state_26720__$1;
(statearr_26742_26768[(2)] = null);

(statearr_26742_26768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23977__auto___26754,out))
;
return ((function (switch__23865__auto__,c__23977__auto___26754,out){
return (function() {
var cljs$core$async$state_machine__23866__auto__ = null;
var cljs$core$async$state_machine__23866__auto____0 = (function (){
var statearr_26746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26746[(0)] = cljs$core$async$state_machine__23866__auto__);

(statearr_26746[(1)] = (1));

return statearr_26746;
});
var cljs$core$async$state_machine__23866__auto____1 = (function (state_26720){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_26720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e26747){if((e26747 instanceof Object)){
var ex__23869__auto__ = e26747;
var statearr_26748_26769 = state_26720;
(statearr_26748_26769[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26770 = state_26720;
state_26720 = G__26770;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
cljs$core$async$state_machine__23866__auto__ = function(state_26720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23866__auto____1.call(this,state_26720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23866__auto____0;
cljs$core$async$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23866__auto____1;
return cljs$core$async$state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___26754,out))
})();
var state__23979__auto__ = (function (){var statearr_26749 = f__23978__auto__.call(null);
(statearr_26749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___26754);

return statearr_26749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___26754,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1466173476345