// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29219){
var map__29244 = p__29219;
var map__29244__$1 = ((((!((map__29244 == null)))?((((map__29244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29244):map__29244);
var m = map__29244__$1;
var n = cljs.core.get.call(null,map__29244__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29244__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29246_29268 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29247_29269 = null;
var count__29248_29270 = (0);
var i__29249_29271 = (0);
while(true){
if((i__29249_29271 < count__29248_29270)){
var f_29272 = cljs.core._nth.call(null,chunk__29247_29269,i__29249_29271);
cljs.core.println.call(null,"  ",f_29272);

var G__29273 = seq__29246_29268;
var G__29274 = chunk__29247_29269;
var G__29275 = count__29248_29270;
var G__29276 = (i__29249_29271 + (1));
seq__29246_29268 = G__29273;
chunk__29247_29269 = G__29274;
count__29248_29270 = G__29275;
i__29249_29271 = G__29276;
continue;
} else {
var temp__4657__auto___29277 = cljs.core.seq.call(null,seq__29246_29268);
if(temp__4657__auto___29277){
var seq__29246_29278__$1 = temp__4657__auto___29277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29246_29278__$1)){
var c__22485__auto___29279 = cljs.core.chunk_first.call(null,seq__29246_29278__$1);
var G__29280 = cljs.core.chunk_rest.call(null,seq__29246_29278__$1);
var G__29281 = c__22485__auto___29279;
var G__29282 = cljs.core.count.call(null,c__22485__auto___29279);
var G__29283 = (0);
seq__29246_29268 = G__29280;
chunk__29247_29269 = G__29281;
count__29248_29270 = G__29282;
i__29249_29271 = G__29283;
continue;
} else {
var f_29284 = cljs.core.first.call(null,seq__29246_29278__$1);
cljs.core.println.call(null,"  ",f_29284);

var G__29285 = cljs.core.next.call(null,seq__29246_29278__$1);
var G__29286 = null;
var G__29287 = (0);
var G__29288 = (0);
seq__29246_29268 = G__29285;
chunk__29247_29269 = G__29286;
count__29248_29270 = G__29287;
i__29249_29271 = G__29288;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29289 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21674__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29289);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29289)))?cljs.core.second.call(null,arglists_29289):arglists_29289));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29250_29290 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29251_29291 = null;
var count__29252_29292 = (0);
var i__29253_29293 = (0);
while(true){
if((i__29253_29293 < count__29252_29292)){
var vec__29254_29294 = cljs.core._nth.call(null,chunk__29251_29291,i__29253_29293);
var name_29295 = cljs.core.nth.call(null,vec__29254_29294,(0),null);
var map__29257_29296 = cljs.core.nth.call(null,vec__29254_29294,(1),null);
var map__29257_29297__$1 = ((((!((map__29257_29296 == null)))?((((map__29257_29296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29257_29296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29257_29296):map__29257_29296);
var doc_29298 = cljs.core.get.call(null,map__29257_29297__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29299 = cljs.core.get.call(null,map__29257_29297__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29295);

cljs.core.println.call(null," ",arglists_29299);

if(cljs.core.truth_(doc_29298)){
cljs.core.println.call(null," ",doc_29298);
} else {
}

var G__29300 = seq__29250_29290;
var G__29301 = chunk__29251_29291;
var G__29302 = count__29252_29292;
var G__29303 = (i__29253_29293 + (1));
seq__29250_29290 = G__29300;
chunk__29251_29291 = G__29301;
count__29252_29292 = G__29302;
i__29253_29293 = G__29303;
continue;
} else {
var temp__4657__auto___29304 = cljs.core.seq.call(null,seq__29250_29290);
if(temp__4657__auto___29304){
var seq__29250_29305__$1 = temp__4657__auto___29304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29250_29305__$1)){
var c__22485__auto___29306 = cljs.core.chunk_first.call(null,seq__29250_29305__$1);
var G__29307 = cljs.core.chunk_rest.call(null,seq__29250_29305__$1);
var G__29308 = c__22485__auto___29306;
var G__29309 = cljs.core.count.call(null,c__22485__auto___29306);
var G__29310 = (0);
seq__29250_29290 = G__29307;
chunk__29251_29291 = G__29308;
count__29252_29292 = G__29309;
i__29253_29293 = G__29310;
continue;
} else {
var vec__29259_29311 = cljs.core.first.call(null,seq__29250_29305__$1);
var name_29312 = cljs.core.nth.call(null,vec__29259_29311,(0),null);
var map__29262_29313 = cljs.core.nth.call(null,vec__29259_29311,(1),null);
var map__29262_29314__$1 = ((((!((map__29262_29313 == null)))?((((map__29262_29313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29262_29313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29262_29313):map__29262_29313);
var doc_29315 = cljs.core.get.call(null,map__29262_29314__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29316 = cljs.core.get.call(null,map__29262_29314__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29312);

cljs.core.println.call(null," ",arglists_29316);

if(cljs.core.truth_(doc_29315)){
cljs.core.println.call(null," ",doc_29315);
} else {
}

var G__29317 = cljs.core.next.call(null,seq__29250_29305__$1);
var G__29318 = null;
var G__29319 = (0);
var G__29320 = (0);
seq__29250_29290 = G__29317;
chunk__29251_29291 = G__29318;
count__29252_29292 = G__29319;
i__29253_29293 = G__29320;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var specs = cljs.spec.fn_specs.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,cljs.core.vals.call(null,specs)))){
cljs.core.print.call(null,"Spec");

return cljs.core.run_BANG_.call(null,((function (specs,map__29244,map__29244__$1,m,n,nm){
return (function (p__29264){
var vec__29265 = p__29264;
var role = cljs.core.nth.call(null,vec__29265,(0),null);
var spec = cljs.core.nth.call(null,vec__29265,(1),null);
if(cljs.core.truth_((function (){var and__21662__auto__ = spec;
if(cljs.core.truth_(and__21662__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__21662__auto__;
}
})())){
return cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,map__29244,map__29244__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1466173480879