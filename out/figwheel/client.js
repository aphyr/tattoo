// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args31349 = [];
var len__22749__auto___31352 = arguments.length;
var i__22750__auto___31353 = (0);
while(true){
if((i__22750__auto___31353 < len__22749__auto___31352)){
args31349.push((arguments[i__22750__auto___31353]));

var G__31354 = (i__22750__auto___31353 + (1));
i__22750__auto___31353 = G__31354;
continue;
} else {
}
break;
}

var G__31351 = args31349.length;
switch (G__31351) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31349.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__22756__auto__ = [];
var len__22749__auto___31357 = arguments.length;
var i__22750__auto___31358 = (0);
while(true){
if((i__22750__auto___31358 < len__22749__auto___31357)){
args__22756__auto__.push((arguments[i__22750__auto___31358]));

var G__31359 = (i__22750__auto___31358 + (1));
i__22750__auto___31358 = G__31359;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31356){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31356));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22756__auto__ = [];
var len__22749__auto___31361 = arguments.length;
var i__22750__auto___31362 = (0);
while(true){
if((i__22750__auto___31362 < len__22749__auto___31361)){
args__22756__auto__.push((arguments[i__22750__auto___31362]));

var G__31363 = (i__22750__auto___31362 + (1));
i__22750__auto___31362 = G__31363;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31360){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31360));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__31364 = cljs.core._EQ_;
var expr__31365 = (function (){var or__21674__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e31368){if((e31368 instanceof Error)){
var e = e31368;
return false;
} else {
throw e31368;

}
}})();
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31364.call(null,"true",expr__31365))){
return true;
} else {
if(cljs.core.truth_(pred__31364.call(null,"false",expr__31365))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31365)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e31370){if((e31370 instanceof Error)){
var e = e31370;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e31370;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31371){
var map__31374 = p__31371;
var map__31374__$1 = ((((!((map__31374 == null)))?((((map__31374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31374):map__31374);
var message = cljs.core.get.call(null,map__31374__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31374__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21674__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21662__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21662__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21662__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23977__auto___31536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___31536,ch){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___31536,ch){
return (function (state_31505){
var state_val_31506 = (state_31505[(1)]);
if((state_val_31506 === (7))){
var inst_31501 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
var statearr_31507_31537 = state_31505__$1;
(statearr_31507_31537[(2)] = inst_31501);

(statearr_31507_31537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (1))){
var state_31505__$1 = state_31505;
var statearr_31508_31538 = state_31505__$1;
(statearr_31508_31538[(2)] = null);

(statearr_31508_31538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (4))){
var inst_31458 = (state_31505[(7)]);
var inst_31458__$1 = (state_31505[(2)]);
var state_31505__$1 = (function (){var statearr_31509 = state_31505;
(statearr_31509[(7)] = inst_31458__$1);

return statearr_31509;
})();
if(cljs.core.truth_(inst_31458__$1)){
var statearr_31510_31539 = state_31505__$1;
(statearr_31510_31539[(1)] = (5));

} else {
var statearr_31511_31540 = state_31505__$1;
(statearr_31511_31540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (15))){
var inst_31465 = (state_31505[(8)]);
var inst_31480 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31465);
var inst_31481 = cljs.core.first.call(null,inst_31480);
var inst_31482 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31481);
var inst_31483 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31482)].join('');
var inst_31484 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31483);
var state_31505__$1 = state_31505;
var statearr_31512_31541 = state_31505__$1;
(statearr_31512_31541[(2)] = inst_31484);

(statearr_31512_31541[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (13))){
var inst_31489 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
var statearr_31513_31542 = state_31505__$1;
(statearr_31513_31542[(2)] = inst_31489);

(statearr_31513_31542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (6))){
var state_31505__$1 = state_31505;
var statearr_31514_31543 = state_31505__$1;
(statearr_31514_31543[(2)] = null);

(statearr_31514_31543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (17))){
var inst_31487 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
var statearr_31515_31544 = state_31505__$1;
(statearr_31515_31544[(2)] = inst_31487);

(statearr_31515_31544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (3))){
var inst_31503 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31505__$1,inst_31503);
} else {
if((state_val_31506 === (12))){
var inst_31464 = (state_31505[(9)]);
var inst_31478 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31464,opts);
var state_31505__$1 = state_31505;
if(cljs.core.truth_(inst_31478)){
var statearr_31516_31545 = state_31505__$1;
(statearr_31516_31545[(1)] = (15));

} else {
var statearr_31517_31546 = state_31505__$1;
(statearr_31517_31546[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (2))){
var state_31505__$1 = state_31505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31505__$1,(4),ch);
} else {
if((state_val_31506 === (11))){
var inst_31465 = (state_31505[(8)]);
var inst_31470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31471 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31465);
var inst_31472 = cljs.core.async.timeout.call(null,(1000));
var inst_31473 = [inst_31471,inst_31472];
var inst_31474 = (new cljs.core.PersistentVector(null,2,(5),inst_31470,inst_31473,null));
var state_31505__$1 = state_31505;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31505__$1,(14),inst_31474);
} else {
if((state_val_31506 === (9))){
var inst_31465 = (state_31505[(8)]);
var inst_31491 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31492 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31465);
var inst_31493 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31492);
var inst_31494 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31493)].join('');
var inst_31495 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31494);
var state_31505__$1 = (function (){var statearr_31518 = state_31505;
(statearr_31518[(10)] = inst_31491);

return statearr_31518;
})();
var statearr_31519_31547 = state_31505__$1;
(statearr_31519_31547[(2)] = inst_31495);

(statearr_31519_31547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (5))){
var inst_31458 = (state_31505[(7)]);
var inst_31460 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31461 = (new cljs.core.PersistentArrayMap(null,2,inst_31460,null));
var inst_31462 = (new cljs.core.PersistentHashSet(null,inst_31461,null));
var inst_31463 = figwheel.client.focus_msgs.call(null,inst_31462,inst_31458);
var inst_31464 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31463);
var inst_31465 = cljs.core.first.call(null,inst_31463);
var inst_31466 = figwheel.client.autoload_QMARK_.call(null);
var state_31505__$1 = (function (){var statearr_31520 = state_31505;
(statearr_31520[(9)] = inst_31464);

(statearr_31520[(8)] = inst_31465);

return statearr_31520;
})();
if(cljs.core.truth_(inst_31466)){
var statearr_31521_31548 = state_31505__$1;
(statearr_31521_31548[(1)] = (8));

} else {
var statearr_31522_31549 = state_31505__$1;
(statearr_31522_31549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (14))){
var inst_31476 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
var statearr_31523_31550 = state_31505__$1;
(statearr_31523_31550[(2)] = inst_31476);

(statearr_31523_31550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (16))){
var state_31505__$1 = state_31505;
var statearr_31524_31551 = state_31505__$1;
(statearr_31524_31551[(2)] = null);

(statearr_31524_31551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (10))){
var inst_31497 = (state_31505[(2)]);
var state_31505__$1 = (function (){var statearr_31525 = state_31505;
(statearr_31525[(11)] = inst_31497);

return statearr_31525;
})();
var statearr_31526_31552 = state_31505__$1;
(statearr_31526_31552[(2)] = null);

(statearr_31526_31552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (8))){
var inst_31464 = (state_31505[(9)]);
var inst_31468 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31464,opts);
var state_31505__$1 = state_31505;
if(cljs.core.truth_(inst_31468)){
var statearr_31527_31553 = state_31505__$1;
(statearr_31527_31553[(1)] = (11));

} else {
var statearr_31528_31554 = state_31505__$1;
(statearr_31528_31554[(1)] = (12));

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
});})(c__23977__auto___31536,ch))
;
return ((function (switch__23865__auto__,c__23977__auto___31536,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23866__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23866__auto____0 = (function (){
var statearr_31532 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31532[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23866__auto__);

(statearr_31532[(1)] = (1));

return statearr_31532;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23866__auto____1 = (function (state_31505){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_31505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e31533){if((e31533 instanceof Object)){
var ex__23869__auto__ = e31533;
var statearr_31534_31555 = state_31505;
(statearr_31534_31555[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31556 = state_31505;
state_31505 = G__31556;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23866__auto__ = function(state_31505){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23866__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23866__auto____1.call(this,state_31505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23866__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23866__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___31536,ch))
})();
var state__23979__auto__ = (function (){var statearr_31535 = f__23978__auto__.call(null);
(statearr_31535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___31536);

return statearr_31535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___31536,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31557_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31557_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31560 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31560){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e31559){if((e31559 instanceof Error)){
var e = e31559;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31560], null));
} else {
var e = e31559;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_31560))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31561){
var map__31570 = p__31561;
var map__31570__$1 = ((((!((map__31570 == null)))?((((map__31570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31570):map__31570);
var opts = map__31570__$1;
var build_id = cljs.core.get.call(null,map__31570__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31570,map__31570__$1,opts,build_id){
return (function (p__31572){
var vec__31573 = p__31572;
var seq__31574 = cljs.core.seq.call(null,vec__31573);
var first__31575 = cljs.core.first.call(null,seq__31574);
var seq__31574__$1 = cljs.core.next.call(null,seq__31574);
var map__31576 = first__31575;
var map__31576__$1 = ((((!((map__31576 == null)))?((((map__31576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31576):map__31576);
var msg = map__31576__$1;
var msg_name = cljs.core.get.call(null,map__31576__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31574__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31573,seq__31574,first__31575,seq__31574__$1,map__31576,map__31576__$1,msg,msg_name,_,map__31570,map__31570__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31573,seq__31574,first__31575,seq__31574__$1,map__31576,map__31576__$1,msg,msg_name,_,map__31570,map__31570__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31570,map__31570__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31584){
var vec__31585 = p__31584;
var seq__31586 = cljs.core.seq.call(null,vec__31585);
var first__31587 = cljs.core.first.call(null,seq__31586);
var seq__31586__$1 = cljs.core.next.call(null,seq__31586);
var map__31588 = first__31587;
var map__31588__$1 = ((((!((map__31588 == null)))?((((map__31588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31588):map__31588);
var msg = map__31588__$1;
var msg_name = cljs.core.get.call(null,map__31588__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31586__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31590){
var map__31602 = p__31590;
var map__31602__$1 = ((((!((map__31602 == null)))?((((map__31602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31602):map__31602);
var on_compile_warning = cljs.core.get.call(null,map__31602__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31602__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31602,map__31602__$1,on_compile_warning,on_compile_fail){
return (function (p__31604){
var vec__31605 = p__31604;
var seq__31606 = cljs.core.seq.call(null,vec__31605);
var first__31607 = cljs.core.first.call(null,seq__31606);
var seq__31606__$1 = cljs.core.next.call(null,seq__31606);
var map__31608 = first__31607;
var map__31608__$1 = ((((!((map__31608 == null)))?((((map__31608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31608):map__31608);
var msg = map__31608__$1;
var msg_name = cljs.core.get.call(null,map__31608__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31606__$1;
var pred__31610 = cljs.core._EQ_;
var expr__31611 = msg_name;
if(cljs.core.truth_(pred__31610.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31611))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31610.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31611))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31602,map__31602__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto__,msg_hist,msg_names,msg){
return (function (state_31819){
var state_val_31820 = (state_31819[(1)]);
if((state_val_31820 === (7))){
var inst_31747 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
if(cljs.core.truth_(inst_31747)){
var statearr_31821_31867 = state_31819__$1;
(statearr_31821_31867[(1)] = (8));

} else {
var statearr_31822_31868 = state_31819__$1;
(statearr_31822_31868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (20))){
var inst_31813 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31823_31869 = state_31819__$1;
(statearr_31823_31869[(2)] = inst_31813);

(statearr_31823_31869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (27))){
var inst_31809 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31824_31870 = state_31819__$1;
(statearr_31824_31870[(2)] = inst_31809);

(statearr_31824_31870[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (1))){
var inst_31740 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31819__$1 = state_31819;
if(cljs.core.truth_(inst_31740)){
var statearr_31825_31871 = state_31819__$1;
(statearr_31825_31871[(1)] = (2));

} else {
var statearr_31826_31872 = state_31819__$1;
(statearr_31826_31872[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (24))){
var inst_31811 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31827_31873 = state_31819__$1;
(statearr_31827_31873[(2)] = inst_31811);

(statearr_31827_31873[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (4))){
var inst_31817 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31819__$1,inst_31817);
} else {
if((state_val_31820 === (15))){
var inst_31815 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31828_31874 = state_31819__$1;
(statearr_31828_31874[(2)] = inst_31815);

(statearr_31828_31874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (21))){
var inst_31774 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31829_31875 = state_31819__$1;
(statearr_31829_31875[(2)] = inst_31774);

(statearr_31829_31875[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (31))){
var inst_31798 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31819__$1 = state_31819;
if(cljs.core.truth_(inst_31798)){
var statearr_31830_31876 = state_31819__$1;
(statearr_31830_31876[(1)] = (34));

} else {
var statearr_31831_31877 = state_31819__$1;
(statearr_31831_31877[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (32))){
var inst_31807 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31832_31878 = state_31819__$1;
(statearr_31832_31878[(2)] = inst_31807);

(statearr_31832_31878[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (33))){
var inst_31796 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31833_31879 = state_31819__$1;
(statearr_31833_31879[(2)] = inst_31796);

(statearr_31833_31879[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (13))){
var inst_31761 = figwheel.client.heads_up.clear.call(null);
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31819__$1,(16),inst_31761);
} else {
if((state_val_31820 === (22))){
var inst_31778 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31779 = figwheel.client.heads_up.append_warning_message.call(null,inst_31778);
var state_31819__$1 = state_31819;
var statearr_31834_31880 = state_31819__$1;
(statearr_31834_31880[(2)] = inst_31779);

(statearr_31834_31880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (36))){
var inst_31805 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31835_31881 = state_31819__$1;
(statearr_31835_31881[(2)] = inst_31805);

(statearr_31835_31881[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (29))){
var inst_31789 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31836_31882 = state_31819__$1;
(statearr_31836_31882[(2)] = inst_31789);

(statearr_31836_31882[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (6))){
var inst_31742 = (state_31819[(7)]);
var state_31819__$1 = state_31819;
var statearr_31837_31883 = state_31819__$1;
(statearr_31837_31883[(2)] = inst_31742);

(statearr_31837_31883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (28))){
var inst_31785 = (state_31819[(2)]);
var inst_31786 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31787 = figwheel.client.heads_up.display_warning.call(null,inst_31786);
var state_31819__$1 = (function (){var statearr_31838 = state_31819;
(statearr_31838[(8)] = inst_31785);

return statearr_31838;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31819__$1,(29),inst_31787);
} else {
if((state_val_31820 === (25))){
var inst_31783 = figwheel.client.heads_up.clear.call(null);
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31819__$1,(28),inst_31783);
} else {
if((state_val_31820 === (34))){
var inst_31800 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31819__$1,(37),inst_31800);
} else {
if((state_val_31820 === (17))){
var inst_31767 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31839_31884 = state_31819__$1;
(statearr_31839_31884[(2)] = inst_31767);

(statearr_31839_31884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (3))){
var inst_31759 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31819__$1 = state_31819;
if(cljs.core.truth_(inst_31759)){
var statearr_31840_31885 = state_31819__$1;
(statearr_31840_31885[(1)] = (13));

} else {
var statearr_31841_31886 = state_31819__$1;
(statearr_31841_31886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (12))){
var inst_31755 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31842_31887 = state_31819__$1;
(statearr_31842_31887[(2)] = inst_31755);

(statearr_31842_31887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (2))){
var inst_31742 = (state_31819[(7)]);
var inst_31742__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31819__$1 = (function (){var statearr_31843 = state_31819;
(statearr_31843[(7)] = inst_31742__$1);

return statearr_31843;
})();
if(cljs.core.truth_(inst_31742__$1)){
var statearr_31844_31888 = state_31819__$1;
(statearr_31844_31888[(1)] = (5));

} else {
var statearr_31845_31889 = state_31819__$1;
(statearr_31845_31889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (23))){
var inst_31781 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31819__$1 = state_31819;
if(cljs.core.truth_(inst_31781)){
var statearr_31846_31890 = state_31819__$1;
(statearr_31846_31890[(1)] = (25));

} else {
var statearr_31847_31891 = state_31819__$1;
(statearr_31847_31891[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (35))){
var state_31819__$1 = state_31819;
var statearr_31848_31892 = state_31819__$1;
(statearr_31848_31892[(2)] = null);

(statearr_31848_31892[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (19))){
var inst_31776 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31819__$1 = state_31819;
if(cljs.core.truth_(inst_31776)){
var statearr_31849_31893 = state_31819__$1;
(statearr_31849_31893[(1)] = (22));

} else {
var statearr_31850_31894 = state_31819__$1;
(statearr_31850_31894[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (11))){
var inst_31751 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31851_31895 = state_31819__$1;
(statearr_31851_31895[(2)] = inst_31751);

(statearr_31851_31895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (9))){
var inst_31753 = figwheel.client.heads_up.clear.call(null);
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31819__$1,(12),inst_31753);
} else {
if((state_val_31820 === (5))){
var inst_31744 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31819__$1 = state_31819;
var statearr_31852_31896 = state_31819__$1;
(statearr_31852_31896[(2)] = inst_31744);

(statearr_31852_31896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (14))){
var inst_31769 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31819__$1 = state_31819;
if(cljs.core.truth_(inst_31769)){
var statearr_31853_31897 = state_31819__$1;
(statearr_31853_31897[(1)] = (18));

} else {
var statearr_31854_31898 = state_31819__$1;
(statearr_31854_31898[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (26))){
var inst_31791 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31819__$1 = state_31819;
if(cljs.core.truth_(inst_31791)){
var statearr_31855_31899 = state_31819__$1;
(statearr_31855_31899[(1)] = (30));

} else {
var statearr_31856_31900 = state_31819__$1;
(statearr_31856_31900[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (16))){
var inst_31763 = (state_31819[(2)]);
var inst_31764 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31765 = figwheel.client.heads_up.display_exception.call(null,inst_31764);
var state_31819__$1 = (function (){var statearr_31857 = state_31819;
(statearr_31857[(9)] = inst_31763);

return statearr_31857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31819__$1,(17),inst_31765);
} else {
if((state_val_31820 === (30))){
var inst_31793 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31794 = figwheel.client.heads_up.display_warning.call(null,inst_31793);
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31819__$1,(33),inst_31794);
} else {
if((state_val_31820 === (10))){
var inst_31757 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31858_31901 = state_31819__$1;
(statearr_31858_31901[(2)] = inst_31757);

(statearr_31858_31901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (18))){
var inst_31771 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31772 = figwheel.client.heads_up.display_exception.call(null,inst_31771);
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31819__$1,(21),inst_31772);
} else {
if((state_val_31820 === (37))){
var inst_31802 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31859_31902 = state_31819__$1;
(statearr_31859_31902[(2)] = inst_31802);

(statearr_31859_31902[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (8))){
var inst_31749 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31819__$1,(11),inst_31749);
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
});})(c__23977__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23865__auto__,c__23977__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23866__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23866__auto____0 = (function (){
var statearr_31863 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31863[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23866__auto__);

(statearr_31863[(1)] = (1));

return statearr_31863;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23866__auto____1 = (function (state_31819){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_31819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e31864){if((e31864 instanceof Object)){
var ex__23869__auto__ = e31864;
var statearr_31865_31903 = state_31819;
(statearr_31865_31903[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31904 = state_31819;
state_31819 = G__31904;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23866__auto__ = function(state_31819){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23866__auto____1.call(this,state_31819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23866__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23866__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto__,msg_hist,msg_names,msg))
})();
var state__23979__auto__ = (function (){var statearr_31866 = f__23978__auto__.call(null);
(statearr_31866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto__);

return statearr_31866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto__,msg_hist,msg_names,msg))
);

return c__23977__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23977__auto___31967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___31967,ch){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___31967,ch){
return (function (state_31950){
var state_val_31951 = (state_31950[(1)]);
if((state_val_31951 === (1))){
var state_31950__$1 = state_31950;
var statearr_31952_31968 = state_31950__$1;
(statearr_31952_31968[(2)] = null);

(statearr_31952_31968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31951 === (2))){
var state_31950__$1 = state_31950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31950__$1,(4),ch);
} else {
if((state_val_31951 === (3))){
var inst_31948 = (state_31950[(2)]);
var state_31950__$1 = state_31950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31950__$1,inst_31948);
} else {
if((state_val_31951 === (4))){
var inst_31938 = (state_31950[(7)]);
var inst_31938__$1 = (state_31950[(2)]);
var state_31950__$1 = (function (){var statearr_31953 = state_31950;
(statearr_31953[(7)] = inst_31938__$1);

return statearr_31953;
})();
if(cljs.core.truth_(inst_31938__$1)){
var statearr_31954_31969 = state_31950__$1;
(statearr_31954_31969[(1)] = (5));

} else {
var statearr_31955_31970 = state_31950__$1;
(statearr_31955_31970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31951 === (5))){
var inst_31938 = (state_31950[(7)]);
var inst_31940 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31938);
var state_31950__$1 = state_31950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31950__$1,(8),inst_31940);
} else {
if((state_val_31951 === (6))){
var state_31950__$1 = state_31950;
var statearr_31956_31971 = state_31950__$1;
(statearr_31956_31971[(2)] = null);

(statearr_31956_31971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31951 === (7))){
var inst_31946 = (state_31950[(2)]);
var state_31950__$1 = state_31950;
var statearr_31957_31972 = state_31950__$1;
(statearr_31957_31972[(2)] = inst_31946);

(statearr_31957_31972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31951 === (8))){
var inst_31942 = (state_31950[(2)]);
var state_31950__$1 = (function (){var statearr_31958 = state_31950;
(statearr_31958[(8)] = inst_31942);

return statearr_31958;
})();
var statearr_31959_31973 = state_31950__$1;
(statearr_31959_31973[(2)] = null);

(statearr_31959_31973[(1)] = (2));


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
});})(c__23977__auto___31967,ch))
;
return ((function (switch__23865__auto__,c__23977__auto___31967,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23866__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23866__auto____0 = (function (){
var statearr_31963 = [null,null,null,null,null,null,null,null,null];
(statearr_31963[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23866__auto__);

(statearr_31963[(1)] = (1));

return statearr_31963;
});
var figwheel$client$heads_up_plugin_$_state_machine__23866__auto____1 = (function (state_31950){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_31950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e31964){if((e31964 instanceof Object)){
var ex__23869__auto__ = e31964;
var statearr_31965_31974 = state_31950;
(statearr_31965_31974[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31975 = state_31950;
state_31950 = G__31975;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23866__auto__ = function(state_31950){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23866__auto____1.call(this,state_31950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23866__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23866__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___31967,ch))
})();
var state__23979__auto__ = (function (){var statearr_31966 = f__23978__auto__.call(null);
(statearr_31966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___31967);

return statearr_31966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___31967,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto__){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto__){
return (function (state_31996){
var state_val_31997 = (state_31996[(1)]);
if((state_val_31997 === (1))){
var inst_31991 = cljs.core.async.timeout.call(null,(3000));
var state_31996__$1 = state_31996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31996__$1,(2),inst_31991);
} else {
if((state_val_31997 === (2))){
var inst_31993 = (state_31996[(2)]);
var inst_31994 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31996__$1 = (function (){var statearr_31998 = state_31996;
(statearr_31998[(7)] = inst_31993);

return statearr_31998;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31996__$1,inst_31994);
} else {
return null;
}
}
});})(c__23977__auto__))
;
return ((function (switch__23865__auto__,c__23977__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23866__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23866__auto____0 = (function (){
var statearr_32002 = [null,null,null,null,null,null,null,null];
(statearr_32002[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23866__auto__);

(statearr_32002[(1)] = (1));

return statearr_32002;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23866__auto____1 = (function (state_31996){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_31996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e32003){if((e32003 instanceof Object)){
var ex__23869__auto__ = e32003;
var statearr_32004_32006 = state_31996;
(statearr_32004_32006[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32007 = state_31996;
state_31996 = G__32007;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23866__auto__ = function(state_31996){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23866__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23866__auto____1.call(this,state_31996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23866__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23866__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto__))
})();
var state__23979__auto__ = (function (){var statearr_32005 = f__23978__auto__.call(null);
(statearr_32005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto__);

return statearr_32005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto__))
);

return c__23977__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto__,figwheel_version,temp__4657__auto__){
return (function (state_32030){
var state_val_32031 = (state_32030[(1)]);
if((state_val_32031 === (1))){
var inst_32024 = cljs.core.async.timeout.call(null,(2000));
var state_32030__$1 = state_32030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32030__$1,(2),inst_32024);
} else {
if((state_val_32031 === (2))){
var inst_32026 = (state_32030[(2)]);
var inst_32027 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_32028 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32027);
var state_32030__$1 = (function (){var statearr_32032 = state_32030;
(statearr_32032[(7)] = inst_32026);

return statearr_32032;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32030__$1,inst_32028);
} else {
return null;
}
}
});})(c__23977__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__23865__auto__,c__23977__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23866__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23866__auto____0 = (function (){
var statearr_32036 = [null,null,null,null,null,null,null,null];
(statearr_32036[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23866__auto__);

(statearr_32036[(1)] = (1));

return statearr_32036;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23866__auto____1 = (function (state_32030){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_32030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e32037){if((e32037 instanceof Object)){
var ex__23869__auto__ = e32037;
var statearr_32038_32040 = state_32030;
(statearr_32038_32040[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32041 = state_32030;
state_32030 = G__32041;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23866__auto__ = function(state_32030){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23866__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23866__auto____1.call(this,state_32030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23866__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23866__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto__,figwheel_version,temp__4657__auto__))
})();
var state__23979__auto__ = (function (){var statearr_32039 = f__23978__auto__.call(null);
(statearr_32039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto__);

return statearr_32039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto__,figwheel_version,temp__4657__auto__))
);

return c__23977__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32042){
var map__32046 = p__32042;
var map__32046__$1 = ((((!((map__32046 == null)))?((((map__32046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32046):map__32046);
var file = cljs.core.get.call(null,map__32046__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32046__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32046__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32048 = "";
var G__32048__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__32048),cljs.core.str("file "),cljs.core.str(file)].join(''):G__32048);
var G__32048__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__32048__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__32048__$1);
if(cljs.core.truth_((function (){var and__21662__auto__ = line;
if(cljs.core.truth_(and__21662__auto__)){
return column;
} else {
return and__21662__auto__;
}
})())){
return [cljs.core.str(G__32048__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__32048__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32049){
var map__32056 = p__32049;
var map__32056__$1 = ((((!((map__32056 == null)))?((((map__32056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32056):map__32056);
var ed = map__32056__$1;
var formatted_exception = cljs.core.get.call(null,map__32056__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32056__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32056__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32058_32062 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32059_32063 = null;
var count__32060_32064 = (0);
var i__32061_32065 = (0);
while(true){
if((i__32061_32065 < count__32060_32064)){
var msg_32066 = cljs.core._nth.call(null,chunk__32059_32063,i__32061_32065);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32066);

var G__32067 = seq__32058_32062;
var G__32068 = chunk__32059_32063;
var G__32069 = count__32060_32064;
var G__32070 = (i__32061_32065 + (1));
seq__32058_32062 = G__32067;
chunk__32059_32063 = G__32068;
count__32060_32064 = G__32069;
i__32061_32065 = G__32070;
continue;
} else {
var temp__4657__auto___32071 = cljs.core.seq.call(null,seq__32058_32062);
if(temp__4657__auto___32071){
var seq__32058_32072__$1 = temp__4657__auto___32071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32058_32072__$1)){
var c__22485__auto___32073 = cljs.core.chunk_first.call(null,seq__32058_32072__$1);
var G__32074 = cljs.core.chunk_rest.call(null,seq__32058_32072__$1);
var G__32075 = c__22485__auto___32073;
var G__32076 = cljs.core.count.call(null,c__22485__auto___32073);
var G__32077 = (0);
seq__32058_32062 = G__32074;
chunk__32059_32063 = G__32075;
count__32060_32064 = G__32076;
i__32061_32065 = G__32077;
continue;
} else {
var msg_32078 = cljs.core.first.call(null,seq__32058_32072__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32078);

var G__32079 = cljs.core.next.call(null,seq__32058_32072__$1);
var G__32080 = null;
var G__32081 = (0);
var G__32082 = (0);
seq__32058_32062 = G__32079;
chunk__32059_32063 = G__32080;
count__32060_32064 = G__32081;
i__32061_32065 = G__32082;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32083){
var map__32086 = p__32083;
var map__32086__$1 = ((((!((map__32086 == null)))?((((map__32086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32086):map__32086);
var w = map__32086__$1;
var message = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21662__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21662__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21662__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32098 = cljs.core.seq.call(null,plugins);
var chunk__32099 = null;
var count__32100 = (0);
var i__32101 = (0);
while(true){
if((i__32101 < count__32100)){
var vec__32102 = cljs.core._nth.call(null,chunk__32099,i__32101);
var k = cljs.core.nth.call(null,vec__32102,(0),null);
var plugin = cljs.core.nth.call(null,vec__32102,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32108 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32098,chunk__32099,count__32100,i__32101,pl_32108,vec__32102,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32108.call(null,msg_hist);
});})(seq__32098,chunk__32099,count__32100,i__32101,pl_32108,vec__32102,k,plugin))
);
} else {
}

var G__32109 = seq__32098;
var G__32110 = chunk__32099;
var G__32111 = count__32100;
var G__32112 = (i__32101 + (1));
seq__32098 = G__32109;
chunk__32099 = G__32110;
count__32100 = G__32111;
i__32101 = G__32112;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32098);
if(temp__4657__auto__){
var seq__32098__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32098__$1)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,seq__32098__$1);
var G__32113 = cljs.core.chunk_rest.call(null,seq__32098__$1);
var G__32114 = c__22485__auto__;
var G__32115 = cljs.core.count.call(null,c__22485__auto__);
var G__32116 = (0);
seq__32098 = G__32113;
chunk__32099 = G__32114;
count__32100 = G__32115;
i__32101 = G__32116;
continue;
} else {
var vec__32105 = cljs.core.first.call(null,seq__32098__$1);
var k = cljs.core.nth.call(null,vec__32105,(0),null);
var plugin = cljs.core.nth.call(null,vec__32105,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32117 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32098,chunk__32099,count__32100,i__32101,pl_32117,vec__32105,k,plugin,seq__32098__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32117.call(null,msg_hist);
});})(seq__32098,chunk__32099,count__32100,i__32101,pl_32117,vec__32105,k,plugin,seq__32098__$1,temp__4657__auto__))
);
} else {
}

var G__32118 = cljs.core.next.call(null,seq__32098__$1);
var G__32119 = null;
var G__32120 = (0);
var G__32121 = (0);
seq__32098 = G__32118;
chunk__32099 = G__32119;
count__32100 = G__32120;
i__32101 = G__32121;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args32122 = [];
var len__22749__auto___32129 = arguments.length;
var i__22750__auto___32130 = (0);
while(true){
if((i__22750__auto___32130 < len__22749__auto___32129)){
args32122.push((arguments[i__22750__auto___32130]));

var G__32131 = (i__22750__auto___32130 + (1));
i__22750__auto___32130 = G__32131;
continue;
} else {
}
break;
}

var G__32124 = args32122.length;
switch (G__32124) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32122.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32125_32133 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32126_32134 = null;
var count__32127_32135 = (0);
var i__32128_32136 = (0);
while(true){
if((i__32128_32136 < count__32127_32135)){
var msg_32137 = cljs.core._nth.call(null,chunk__32126_32134,i__32128_32136);
figwheel.client.socket.handle_incoming_message.call(null,msg_32137);

var G__32138 = seq__32125_32133;
var G__32139 = chunk__32126_32134;
var G__32140 = count__32127_32135;
var G__32141 = (i__32128_32136 + (1));
seq__32125_32133 = G__32138;
chunk__32126_32134 = G__32139;
count__32127_32135 = G__32140;
i__32128_32136 = G__32141;
continue;
} else {
var temp__4657__auto___32142 = cljs.core.seq.call(null,seq__32125_32133);
if(temp__4657__auto___32142){
var seq__32125_32143__$1 = temp__4657__auto___32142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32125_32143__$1)){
var c__22485__auto___32144 = cljs.core.chunk_first.call(null,seq__32125_32143__$1);
var G__32145 = cljs.core.chunk_rest.call(null,seq__32125_32143__$1);
var G__32146 = c__22485__auto___32144;
var G__32147 = cljs.core.count.call(null,c__22485__auto___32144);
var G__32148 = (0);
seq__32125_32133 = G__32145;
chunk__32126_32134 = G__32146;
count__32127_32135 = G__32147;
i__32128_32136 = G__32148;
continue;
} else {
var msg_32149 = cljs.core.first.call(null,seq__32125_32143__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32149);

var G__32150 = cljs.core.next.call(null,seq__32125_32143__$1);
var G__32151 = null;
var G__32152 = (0);
var G__32153 = (0);
seq__32125_32133 = G__32150;
chunk__32126_32134 = G__32151;
count__32127_32135 = G__32152;
i__32128_32136 = G__32153;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22756__auto__ = [];
var len__22749__auto___32158 = arguments.length;
var i__22750__auto___32159 = (0);
while(true){
if((i__22750__auto___32159 < len__22749__auto___32158)){
args__22756__auto__.push((arguments[i__22750__auto___32159]));

var G__32160 = (i__22750__auto___32159 + (1));
i__22750__auto___32159 = G__32160;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32155){
var map__32156 = p__32155;
var map__32156__$1 = ((((!((map__32156 == null)))?((((map__32156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32156):map__32156);
var opts = map__32156__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32154){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32154));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32162){if((e32162 instanceof Error)){
var e = e32162;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32162;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32166){
var map__32167 = p__32166;
var map__32167__$1 = ((((!((map__32167 == null)))?((((map__32167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32167):map__32167);
var msg_name = cljs.core.get.call(null,map__32167__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1466173486957