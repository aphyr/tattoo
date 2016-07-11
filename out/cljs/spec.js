// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'coll'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (100);
/**
 * if false, instrumented fns call straight through
 */
cljs.spec._STAR_instrument_enabled_STAR_ = true;

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__22337__auto__ = (((spec == null))?null:spec);
var m__22338__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,spec,x);
} else {
var m__22338__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__22337__auto__ = (((spec == null))?null:spec);
var m__22338__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,spec,path,via,in$,x);
} else {
var m__22338__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__22337__auto__ = (((spec == null))?null:spec);
var m__22338__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__22338__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__22337__auto__ = (((spec == null))?null:spec);
var m__22338__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,spec,gfn);
} else {
var m__22338__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__22337__auto__ = (((spec == null))?null:spec);
var m__22338__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,spec);
} else {
var m__22338__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__28503 = cljs.core.get.call(null,reg,spec);
spec = G__28503;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__21662__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__21662__auto__){
return x;
} else {
return and__21662__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__21662__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__21662__auto__)){
return x;
} else {
return and__21662__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__21674__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
var or__21674__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__21674__auto____$1)){
return or__21674__auto____$1;
} else {
var or__21674__auto____$2 = (function (){var and__21662__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__21662__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__21662__auto__;
}
})();
if(cljs.core.truth_(or__21674__auto____$2)){
return or__21674__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__21674__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__21674__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__21662__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__21662__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__21662__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__21662__auto__ = (form instanceof cljs.core.Symbol);
if(and__21662__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__21662__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec),gen_fn);
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__4657__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__4657__auto__)){
var probs = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a path->problem-map, where problem-map has at least :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__22660__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28554_28600 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28555_28601 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28554_28600,_STAR_print_fn_STAR_28555_28601,sb__22660__auto__){
return (function (x__22661__auto__){
return sb__22660__auto__.append(x__22661__auto__);
});})(_STAR_print_newline_STAR_28554_28600,_STAR_print_fn_STAR_28555_28601,sb__22660__auto__))
;

try{var seq__28556_28602 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__28557_28603 = null;
var count__28558_28604 = (0);
var i__28559_28605 = (0);
while(true){
if((i__28559_28605 < count__28558_28604)){
var vec__28560_28606 = cljs.core._nth.call(null,chunk__28557_28603,i__28559_28605);
var path_28607 = cljs.core.nth.call(null,vec__28560_28606,(0),null);
var map__28563_28608 = cljs.core.nth.call(null,vec__28560_28606,(1),null);
var map__28563_28609__$1 = ((((!((map__28563_28608 == null)))?((((map__28563_28608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28563_28608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28563_28608):map__28563_28608);
var prob_28610 = map__28563_28609__$1;
var pred_28611 = cljs.core.get.call(null,map__28563_28609__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_28612 = cljs.core.get.call(null,map__28563_28609__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_28613 = cljs.core.get.call(null,map__28563_28609__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_28614 = cljs.core.get.call(null,map__28563_28609__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_28615 = cljs.core.get.call(null,map__28563_28609__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_28615)){
} else {
cljs.core.print.call(null,"In:",in_28615,"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_28612);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_28614)){
} else {
cljs.core.print.call(null," spec:",cljs.core.last.call(null,via_28614));
}

if(cljs.core.empty_QMARK_.call(null,path_28607)){
} else {
cljs.core.print.call(null," at:",path_28607);
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_28611);

if(cljs.core.truth_(reason_28613)){
cljs.core.print.call(null,", ",reason_28613);
} else {
}

var seq__28565_28616 = cljs.core.seq.call(null,prob_28610);
var chunk__28566_28617 = null;
var count__28567_28618 = (0);
var i__28568_28619 = (0);
while(true){
if((i__28568_28619 < count__28567_28618)){
var vec__28569_28620 = cljs.core._nth.call(null,chunk__28566_28617,i__28568_28619);
var k_28621 = cljs.core.nth.call(null,vec__28569_28620,(0),null);
var v_28622 = cljs.core.nth.call(null,vec__28569_28620,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_28621))){
} else {
cljs.core.print.call(null,"\n\t",k_28621," ");

cljs.core.pr.call(null,v_28622);
}

var G__28623 = seq__28565_28616;
var G__28624 = chunk__28566_28617;
var G__28625 = count__28567_28618;
var G__28626 = (i__28568_28619 + (1));
seq__28565_28616 = G__28623;
chunk__28566_28617 = G__28624;
count__28567_28618 = G__28625;
i__28568_28619 = G__28626;
continue;
} else {
var temp__4657__auto___28627 = cljs.core.seq.call(null,seq__28565_28616);
if(temp__4657__auto___28627){
var seq__28565_28628__$1 = temp__4657__auto___28627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28565_28628__$1)){
var c__22485__auto___28629 = cljs.core.chunk_first.call(null,seq__28565_28628__$1);
var G__28630 = cljs.core.chunk_rest.call(null,seq__28565_28628__$1);
var G__28631 = c__22485__auto___28629;
var G__28632 = cljs.core.count.call(null,c__22485__auto___28629);
var G__28633 = (0);
seq__28565_28616 = G__28630;
chunk__28566_28617 = G__28631;
count__28567_28618 = G__28632;
i__28568_28619 = G__28633;
continue;
} else {
var vec__28572_28634 = cljs.core.first.call(null,seq__28565_28628__$1);
var k_28635 = cljs.core.nth.call(null,vec__28572_28634,(0),null);
var v_28636 = cljs.core.nth.call(null,vec__28572_28634,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_28635))){
} else {
cljs.core.print.call(null,"\n\t",k_28635," ");

cljs.core.pr.call(null,v_28636);
}

var G__28637 = cljs.core.next.call(null,seq__28565_28628__$1);
var G__28638 = null;
var G__28639 = (0);
var G__28640 = (0);
seq__28565_28616 = G__28637;
chunk__28566_28617 = G__28638;
count__28567_28618 = G__28639;
i__28568_28619 = G__28640;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__28641 = seq__28556_28602;
var G__28642 = chunk__28557_28603;
var G__28643 = count__28558_28604;
var G__28644 = (i__28559_28605 + (1));
seq__28556_28602 = G__28641;
chunk__28557_28603 = G__28642;
count__28558_28604 = G__28643;
i__28559_28605 = G__28644;
continue;
} else {
var temp__4657__auto___28645 = cljs.core.seq.call(null,seq__28556_28602);
if(temp__4657__auto___28645){
var seq__28556_28646__$1 = temp__4657__auto___28645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28556_28646__$1)){
var c__22485__auto___28647 = cljs.core.chunk_first.call(null,seq__28556_28646__$1);
var G__28648 = cljs.core.chunk_rest.call(null,seq__28556_28646__$1);
var G__28649 = c__22485__auto___28647;
var G__28650 = cljs.core.count.call(null,c__22485__auto___28647);
var G__28651 = (0);
seq__28556_28602 = G__28648;
chunk__28557_28603 = G__28649;
count__28558_28604 = G__28650;
i__28559_28605 = G__28651;
continue;
} else {
var vec__28575_28652 = cljs.core.first.call(null,seq__28556_28646__$1);
var path_28653 = cljs.core.nth.call(null,vec__28575_28652,(0),null);
var map__28578_28654 = cljs.core.nth.call(null,vec__28575_28652,(1),null);
var map__28578_28655__$1 = ((((!((map__28578_28654 == null)))?((((map__28578_28654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28578_28654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28578_28654):map__28578_28654);
var prob_28656 = map__28578_28655__$1;
var pred_28657 = cljs.core.get.call(null,map__28578_28655__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_28658 = cljs.core.get.call(null,map__28578_28655__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_28659 = cljs.core.get.call(null,map__28578_28655__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_28660 = cljs.core.get.call(null,map__28578_28655__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_28661 = cljs.core.get.call(null,map__28578_28655__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_28661)){
} else {
cljs.core.print.call(null,"In:",in_28661,"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_28658);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_28660)){
} else {
cljs.core.print.call(null," spec:",cljs.core.last.call(null,via_28660));
}

if(cljs.core.empty_QMARK_.call(null,path_28653)){
} else {
cljs.core.print.call(null," at:",path_28653);
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_28657);

if(cljs.core.truth_(reason_28659)){
cljs.core.print.call(null,", ",reason_28659);
} else {
}

var seq__28580_28662 = cljs.core.seq.call(null,prob_28656);
var chunk__28581_28663 = null;
var count__28582_28664 = (0);
var i__28583_28665 = (0);
while(true){
if((i__28583_28665 < count__28582_28664)){
var vec__28584_28666 = cljs.core._nth.call(null,chunk__28581_28663,i__28583_28665);
var k_28667 = cljs.core.nth.call(null,vec__28584_28666,(0),null);
var v_28668 = cljs.core.nth.call(null,vec__28584_28666,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_28667))){
} else {
cljs.core.print.call(null,"\n\t",k_28667," ");

cljs.core.pr.call(null,v_28668);
}

var G__28669 = seq__28580_28662;
var G__28670 = chunk__28581_28663;
var G__28671 = count__28582_28664;
var G__28672 = (i__28583_28665 + (1));
seq__28580_28662 = G__28669;
chunk__28581_28663 = G__28670;
count__28582_28664 = G__28671;
i__28583_28665 = G__28672;
continue;
} else {
var temp__4657__auto___28673__$1 = cljs.core.seq.call(null,seq__28580_28662);
if(temp__4657__auto___28673__$1){
var seq__28580_28674__$1 = temp__4657__auto___28673__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28580_28674__$1)){
var c__22485__auto___28675 = cljs.core.chunk_first.call(null,seq__28580_28674__$1);
var G__28676 = cljs.core.chunk_rest.call(null,seq__28580_28674__$1);
var G__28677 = c__22485__auto___28675;
var G__28678 = cljs.core.count.call(null,c__22485__auto___28675);
var G__28679 = (0);
seq__28580_28662 = G__28676;
chunk__28581_28663 = G__28677;
count__28582_28664 = G__28678;
i__28583_28665 = G__28679;
continue;
} else {
var vec__28587_28680 = cljs.core.first.call(null,seq__28580_28674__$1);
var k_28681 = cljs.core.nth.call(null,vec__28587_28680,(0),null);
var v_28682 = cljs.core.nth.call(null,vec__28587_28680,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_28681))){
} else {
cljs.core.print.call(null,"\n\t",k_28681," ");

cljs.core.pr.call(null,v_28682);
}

var G__28683 = cljs.core.next.call(null,seq__28580_28674__$1);
var G__28684 = null;
var G__28685 = (0);
var G__28686 = (0);
seq__28580_28662 = G__28683;
chunk__28581_28663 = G__28684;
count__28582_28664 = G__28685;
i__28583_28665 = G__28686;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__28687 = cljs.core.next.call(null,seq__28556_28646__$1);
var G__28688 = null;
var G__28689 = (0);
var G__28690 = (0);
seq__28556_28602 = G__28687;
chunk__28557_28603 = G__28688;
count__28558_28604 = G__28689;
i__28559_28605 = G__28690;
continue;
}
} else {
}
}
break;
}

var seq__28590_28691 = cljs.core.seq.call(null,ed);
var chunk__28591_28692 = null;
var count__28592_28693 = (0);
var i__28593_28694 = (0);
while(true){
if((i__28593_28694 < count__28592_28693)){
var vec__28594_28695 = cljs.core._nth.call(null,chunk__28591_28692,i__28593_28694);
var k_28696 = cljs.core.nth.call(null,vec__28594_28695,(0),null);
var v_28697 = cljs.core.nth.call(null,vec__28594_28695,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_28696))){
} else {
cljs.core.print.call(null,k_28696," ");

cljs.core.pr.call(null,v_28697);

cljs.core.newline.call(null);
}

var G__28698 = seq__28590_28691;
var G__28699 = chunk__28591_28692;
var G__28700 = count__28592_28693;
var G__28701 = (i__28593_28694 + (1));
seq__28590_28691 = G__28698;
chunk__28591_28692 = G__28699;
count__28592_28693 = G__28700;
i__28593_28694 = G__28701;
continue;
} else {
var temp__4657__auto___28702 = cljs.core.seq.call(null,seq__28590_28691);
if(temp__4657__auto___28702){
var seq__28590_28703__$1 = temp__4657__auto___28702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28590_28703__$1)){
var c__22485__auto___28704 = cljs.core.chunk_first.call(null,seq__28590_28703__$1);
var G__28705 = cljs.core.chunk_rest.call(null,seq__28590_28703__$1);
var G__28706 = c__22485__auto___28704;
var G__28707 = cljs.core.count.call(null,c__22485__auto___28704);
var G__28708 = (0);
seq__28590_28691 = G__28705;
chunk__28591_28692 = G__28706;
count__28592_28693 = G__28707;
i__28593_28694 = G__28708;
continue;
} else {
var vec__28597_28709 = cljs.core.first.call(null,seq__28590_28703__$1);
var k_28710 = cljs.core.nth.call(null,vec__28597_28709,(0),null);
var v_28711 = cljs.core.nth.call(null,vec__28597_28709,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_28710))){
} else {
cljs.core.print.call(null,k_28710," ");

cljs.core.pr.call(null,v_28711);

cljs.core.newline.call(null);
}

var G__28712 = cljs.core.next.call(null,seq__28590_28703__$1);
var G__28713 = null;
var G__28714 = (0);
var G__28715 = (0);
seq__28590_28691 = G__28712;
chunk__28591_28692 = G__28713;
count__28592_28693 = G__28714;
i__28593_28694 = G__28715;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28555_28601;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28554_28600;
}
return [cljs.core.str(sb__22660__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__22660__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28718_28720 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28719_28721 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28718_28720,_STAR_print_fn_STAR_28719_28721,sb__22660__auto__){
return (function (x__22661__auto__){
return sb__22660__auto__.append(x__22661__auto__);
});})(_STAR_print_newline_STAR_28718_28720,_STAR_print_fn_STAR_28719_28721,sb__22660__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28719_28721;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28718_28720;
}
return [cljs.core.str(sb__22660__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__4655__auto__ = (function (){var or__21674__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var g = temp__4655__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__4655__auto__,spec__$1){
return (function (p1__28722_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__28722_SHARP_);
});})(g,temp__4655__auto__,spec__$1))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map paths (vectors of keywords) to generators. These will be
 *   used instead of the generators at those paths. Note that parent
 *   generator (in the spec or overrides map) will supersede those of any
 *   subtrees. A generator for a regex op must always return a
 *   sequential collection (i.e. a generator for s/? should return either
 *   an empty sequence/vector or a sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args28723 = [];
var len__22749__auto___28726 = arguments.length;
var i__22750__auto___28727 = (0);
while(true){
if((i__22750__auto___28727 < len__22749__auto___28726)){
args28723.push((arguments[i__22750__auto___28727]));

var G__28728 = (i__22750__auto___28727 + (1));
i__22750__auto___28727 = G__28728;
continue;
} else {
}
break;
}

var G__28725 = args28723.length;
switch (G__28725) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28723.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__21662__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__21662__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__21662__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword/symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__21674__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
var or__21674__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__21674__auto____$1)){
return or__21674__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
cljs.spec.fn_spec_roles = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null);
/**
 * Returns nil if v conforms to spec, else throws ex-info with explain-data.
 */
cljs.spec.expect = (function cljs$spec$expect(spec,v){
return null;
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Fn-specs must include at least :args or :ret specs.
 */
cljs.spec.fn_specs_QMARK_ = (function cljs$spec$fn_specs_QMARK_(m){
var or__21674__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.fn_spec_sym = (function cljs$spec$fn_spec_sym(sym,role){
return cljs.core.symbol.call(null,[cljs.core.str(sym),cljs.core.str("$"),cljs.core.str(cljs.core.name.call(null,role))].join(''));
});
/**
 * Returns :args/:ret/:fn map of specs for var or symbol v.
 */
cljs.spec.fn_specs = (function cljs$spec$fn_specs(v){
var s = cljs.spec.__GT_sym.call(null,v);
var reg = cljs.spec.registry.call(null);
return cljs.core.reduce.call(null,((function (s,reg){
return (function (m,role){
return cljs.core.assoc.call(null,m,role,cljs.core.get.call(null,reg,cljs.spec.fn_spec_sym.call(null,s,role)));
});})(s,reg))
,cljs.core.PersistentArrayMap.EMPTY,cljs.spec.fn_spec_roles);
});
cljs.spec.spec_checking_fn = (function cljs$spec$spec_checking_fn(v,f){
var conform_BANG_ = (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.conform.call(null,spec,data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),conformed)){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw cljs.core.ex_info.call(null,[cljs.core.str("Call to "),cljs.core.str(v__$1),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__22660__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28735_28740 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28736_28741 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28735_28740,_STAR_print_fn_STAR_28736_28741,sb__22660__auto__,ed,conformed){
return (function (x__22661__auto__){
return sb__22660__auto__.append(x__22661__auto__);
});})(_STAR_print_newline_STAR_28735_28740,_STAR_print_fn_STAR_28736_28741,sb__22660__auto__,ed,conformed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28736_28741;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28735_28740;
}
return [cljs.core.str(sb__22660__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});
var G__28737 = ((function (conform_BANG_){
return (function() { 
var G__28742__delegate = function (args){
if(cljs.core.truth_(cljs.spec._STAR_instrument_enabled_STAR_)){
var _STAR_instrument_enabled_STAR_28738 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = null;

try{var specs = cljs.spec.fn_specs.call(null,v);
var cargs = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs))?conform_BANG_.call(null,v,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args,args):null);
var ret = (function (){var _STAR_instrument_enabled_STAR_28739 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.call(null,f,args);
}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_28739;
}})();
var cret = (cljs.core.truth_(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs))?conform_BANG_.call(null,v,new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret,args):null);
if(cljs.core.truth_((function (){var and__21662__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__21662__auto__)){
var and__21662__auto____$1 = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__21662__auto____$1)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs);
} else {
return and__21662__auto____$1;
}
} else {
return and__21662__auto__;
}
})())){
conform_BANG_.call(null,v,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null),args);
} else {
}

return ret;
}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_28738;
}} else {
return cljs.core.apply.call(null,f,args);
}
};
var G__28742 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28743__i = 0, G__28743__a = new Array(arguments.length -  0);
while (G__28743__i < G__28743__a.length) {G__28743__a[G__28743__i] = arguments[G__28743__i + 0]; ++G__28743__i;}
  args = new cljs.core.IndexedSeq(G__28743__a,0);
} 
return G__28742__delegate.call(this,args);};
G__28742.cljs$lang$maxFixedArity = 0;
G__28742.cljs$lang$applyTo = (function (arglist__28744){
var args = cljs.core.seq(arglist__28744);
return G__28742__delegate(args);
});
G__28742.cljs$core$IFn$_invoke$arity$variadic = G__28742__delegate;
return G__28742;
})()
;})(conform_BANG_))
;
goog.object.extend(G__28737,f);

return G__28737;
});
cljs.spec.no_fn_specs = (function cljs$spec$no_fn_specs(v,specs){
return cljs.core.ex_info.call(null,[cljs.core.str("Fn at "),cljs.core.str(v),cljs.core.str(" is not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"specs","specs",1426570741),specs], null));
});
/**
 * Map for instrumented vars to :raw/:wrapped fns
 */
cljs.spec.instrumented_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.spec.instrument_STAR_ = (function cljs$spec$instrument_STAR_(v){
var specs = cljs.spec.fn_specs.call(null,v);
if(cljs.core.truth_(cljs.spec.fn_specs_QMARK_.call(null,specs))){
var map__28747 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
var map__28747__$1 = ((((!((map__28747 == null)))?((((map__28747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28747):map__28747);
var raw = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
return null;
} else {
var checked = cljs.spec.spec_checking_fn.call(null,v,current);
cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),current,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),checked], null));

return checked;
}
} else {
throw cljs.spec.no_fn_specs.call(null,v,specs);
}
});
cljs.spec.unstrument_STAR_ = (function cljs$spec$unstrument_STAR_(v){
var temp__4657__auto___28753 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
if(cljs.core.truth_(temp__4657__auto___28753)){
var map__28751_28754 = temp__4657__auto___28753;
var map__28751_28755__$1 = ((((!((map__28751_28754 == null)))?((((map__28751_28754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28751_28754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28751_28754):map__28751_28754);
var raw_28756 = cljs.core.get.call(null,map__28751_28755__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped_28757 = cljs.core.get.call(null,map__28751_28755__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current_28758 = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped_28757,current_28758)){
} else {
}

cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.dissoc,v);
} else {
}

return v;
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__21674__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args28759 = [];
var len__22749__auto___28762 = arguments.length;
var i__22750__auto___28763 = (0);
while(true){
if((i__22750__auto___28763 < len__22749__auto___28762)){
args28759.push((arguments[i__22750__auto___28763]));

var G__28764 = (i__22750__auto___28763 + (1));
i__22750__auto___28763 = G__28764;
continue;
} else {
}
break;
}

var G__28761 = args28759.length;
switch (G__28761) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28759.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4655__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args28766 = [];
var len__22749__auto___28769 = arguments.length;
var i__22750__auto___28770 = (0);
while(true){
if((i__22750__auto___28770 < len__22749__auto___28769)){
args28766.push((arguments[i__22750__auto___28770]));

var G__28771 = (i__22750__auto___28770 + (1));
i__22750__auto___28770 = G__28771;
continue;
} else {
}
break;
}

var G__28768 = args28766.length;
switch (G__28768) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28766.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__28775){
var map__28797 = p__28775;
var map__28797__$1 = ((((!((map__28797 == null)))?((((map__28797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28797):map__28797);
var argm = map__28797__$1;
var opt = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__28773_SHARP_){
var or__21674__auto__ = k__GT_s.call(null,p1__28773_SHARP_);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return p1__28773_SHARP_;
}
});})(keys_pred,k__GT_s,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec28799 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28799 = (function (opt,map_spec_impl,req_un,opt_un,map__28797,gfn,pred_exprs,keys_pred,argm,opt_keys,p__28775,req_specs,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta28800){
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.map__28797 = map__28797;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.p__28775 = p__28775;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta28800 = meta28800;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_28801,meta28800__$1){
var self__ = this;
var _28801__$1 = this;
return (new cljs.spec.t_cljs$spec28799(self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.map__28797,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.p__28775,self__.req_specs,self__.keys__GT_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta28800__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_28801){
var self__ = this;
var _28801__$1 = this;
return self__.meta28800;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28799.prototype.call = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28799.prototype.apply = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (self__,args28802){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28802)));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28799.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28799.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28799.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__28806 = cljs.core.keys.call(null,m);
var vec__28807 = G__28806;
var seq__28808 = cljs.core.seq.call(null,vec__28807);
var first__28809 = cljs.core.first.call(null,seq__28808);
var seq__28808__$1 = cljs.core.next.call(null,seq__28808);
var k = first__28809;
var ks = seq__28808__$1;
var keys = vec__28807;
var ret__$1 = ret;
var G__28806__$1 = G__28806;
while(true){
var ret__$2 = ret__$1;
var vec__28810 = G__28806__$1;
var seq__28811 = cljs.core.seq.call(null,vec__28810);
var first__28812 = cljs.core.first.call(null,seq__28811);
var seq__28811__$1 = cljs.core.next.call(null,seq__28811);
var k__$1 = first__28812;
var ks__$1 = seq__28811__$1;
var keys__$1 = vec__28810;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__28818 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__28819 = ks__$1;
ret__$1 = G__28818;
G__28806__$1 = G__28819;
continue;
}
} else {
var G__28820 = ret__$2;
var G__28821 = ks__$1;
ret__$1 = G__28820;
G__28806__$1 = G__28821;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28799.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.merge,(function (){var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4657__auto__){
var probs = temp__4657__auto__;
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.vec.call(null,probs),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__28813){
var vec__28814 = p__28813;
var k = cljs.core.nth.call(null,vec__28814,(0),null);
var v = cljs.core.nth.call(null,vec__28814,(1),null);
if(cljs.core.truth_((function (){var or__21674__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__21674__auto__){
return or__21674__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28799.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__28774_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__28774_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28799.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28799.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__28817 = cljs.core.PersistentVector.EMPTY;
var G__28817__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__28817,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__28817);
var G__28817__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__28817__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__28817__$1);
var G__28817__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__28817__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__28817__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__28817__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__28817__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28799.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opt","opt",845825158,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-spec-impl","map-spec-impl",-1682885722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"argm","argm",-181546357,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a map argument"], null)),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"map__28797","map__28797",1850581704,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"p__28775","p__28775",1865097230,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta28800","meta28800",1584933770,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28799.cljs$lang$type = true;

cljs.spec.t_cljs$spec28799.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28799";

cljs.spec.t_cljs$spec28799.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.spec/t_cljs$spec28799");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec28799 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec28799(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,map__28797__$2,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,p__28775__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta28800){
return (new cljs.spec.t_cljs$spec28799(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,map__28797__$2,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,p__28775__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta28800));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28797,map__28797__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec28799(opt,cljs$spec$map_spec_impl,req_un,opt_un,map__28797__$1,gfn,pred_exprs,keys_pred,argm,opt_keys,p__28775,req_specs,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(form,pred,gfn,cpred_QMARK_){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__28828 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__28828,gfn);
} else {
return G__28828;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__28829 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__28829,gfn);
} else {
return G__28829;
}
} else {
if(typeof cljs.spec.t_cljs$spec28830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28830 = (function (spec_impl,form,pred,gfn,cpred_QMARK_,meta28831){
this.spec_impl = spec_impl;
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.meta28831 = meta28831;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28832,meta28831__$1){
var self__ = this;
var _28832__$1 = this;
return (new cljs.spec.t_cljs$spec28830(self__.spec_impl,self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,meta28831__$1));
});

cljs.spec.t_cljs$spec28830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28832){
var self__ = this;
var _28832__$1 = this;
return self__.meta28831;
});

cljs.spec.t_cljs$spec28830.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec28830.prototype.apply = (function (self__,args28833){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28833)));
});

cljs.spec.t_cljs$spec28830.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec28830.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28830.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec28830.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
});

cljs.spec.t_cljs$spec28830.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec28830.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec28830.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec28830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"spec-impl","spec-impl",1706091993,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec'"], null)),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"meta28831","meta28831",33988361,null)], null);
});

cljs.spec.t_cljs$spec28830.cljs$lang$type = true;

cljs.spec.t_cljs$spec28830.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28830";

cljs.spec.t_cljs$spec28830.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.spec/t_cljs$spec28830");
});

cljs.spec.__GT_t_cljs$spec28830 = (function cljs$spec$spec_impl_$___GT_t_cljs$spec28830(spec_impl__$1,form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,meta28831){
return (new cljs.spec.t_cljs$spec28830(spec_impl__$1,form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,meta28831));
});

}

return (new cljs.spec.t_cljs$spec28830(cljs$spec$spec_impl,form,pred,gfn,cpred_QMARK_,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});
/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args28839 = [];
var len__22749__auto___28854 = arguments.length;
var i__22750__auto___28855 = (0);
while(true){
if((i__22750__auto___28855 < len__22749__auto___28854)){
args28839.push((arguments[i__22750__auto___28855]));

var G__28856 = (i__22750__auto___28855 + (1));
i__22750__auto___28855 = G__28856;
continue;
} else {
}
break;
}

var G__28841 = args28839.length;
switch (G__28841) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28839.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__28834_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__21662__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.methods$.call(null,mm),cljs.core._dispatch_fn.call(null,mm).call(null,p1__28834_SHARP_));
if(and__21662__auto__){
return mm.call(null,p1__28834_SHARP_);
} else {
return and__21662__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__28835_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__28835_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__28836_SHARP_,p2__28837_SHARP_){
return cljs.core.assoc.call(null,p1__28836_SHARP_,retag,p2__28837_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec28842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28842 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta28843){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta28843 = meta28843;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_28844,meta28843__$1){
var self__ = this;
var _28844__$1 = this;
return (new cljs.spec.t_cljs$spec28842(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta28843__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_28844){
var self__ = this;
var _28844__$1 = this;
return self__.meta28843;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28842.prototype.call = ((function (id,predx,dval,tag){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28842.prototype.apply = ((function (id,predx,dval,tag){
return (function (self__,args28845){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28845)));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28842.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (id,predx,dval,tag){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28842.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28842.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28842.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28842.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__28846){
var vec__28847 = p__28846;
var k = cljs.core.nth.call(null,vec__28847,(0),null);
var f = cljs.core.nth.call(null,vec__28847,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__28847,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__28847,k,f,___$1,id,predx,dval,tag){
return (function (p1__28838_SHARP_){
return self__.tag.call(null,p1__28838_SHARP_,k);
});})(rmap__$1,p,vec__28847,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__22508__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__22508__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22508__auto____$1);
})(),x__22508__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__28847,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__28850){
var vec__28851 = p__28850;
var k = cljs.core.nth.call(null,vec__28851,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28842.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28842.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__22508__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22508__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28842.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta28843","meta28843",-463546887,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28842.cljs$lang$type = true;

cljs.spec.t_cljs$spec28842.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28842";

cljs.spec.t_cljs$spec28842.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.spec/t_cljs$spec28842");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec28842 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec28842(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta28843){
return (new cljs.spec.t_cljs$spec28842(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta28843));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec28842(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args28858 = [];
var len__22749__auto___28865 = arguments.length;
var i__22750__auto___28866 = (0);
while(true){
if((i__22750__auto___28866 < len__22749__auto___28865)){
args28858.push((arguments[i__22750__auto___28866]));

var G__28867 = (i__22750__auto___28866 + (1));
i__22750__auto___28866 = G__28867;
continue;
} else {
}
break;
}

var G__28860 = args28858.length;
switch (G__28860) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28858.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec28861 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28861 = (function (forms,preds,gfn,meta28862){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta28862 = meta28862;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28863,meta28862__$1){
var self__ = this;
var _28863__$1 = this;
return (new cljs.spec.t_cljs$spec28861(self__.forms,self__.preds,self__.gfn,meta28862__$1));
});

cljs.spec.t_cljs$spec28861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28863){
var self__ = this;
var _28863__$1 = this;
return self__.meta28862;
});

cljs.spec.t_cljs$spec28861.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec28861.prototype.apply = (function (self__,args28864){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28864)));
});

cljs.spec.t_cljs$spec28861.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec28861.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28861.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__28869 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__28870 = (i + (1));
ret = G__28869;
i = G__28870;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec28861.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__22508__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22508__auto__);
})(),(function (){var x__22508__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22508__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec28861.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec28861.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec28861.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec28861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta28862","meta28862",-930734358,null)], null);
});

cljs.spec.t_cljs$spec28861.cljs$lang$type = true;

cljs.spec.t_cljs$spec28861.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28861";

cljs.spec.t_cljs$spec28861.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.spec/t_cljs$spec28861");
});

cljs.spec.__GT_t_cljs$spec28861 = (function cljs$spec$__GT_t_cljs$spec28861(forms__$1,preds__$1,gfn__$1,meta28862){
return (new cljs.spec.t_cljs$spec28861(forms__$1,preds__$1,gfn__$1,meta28862));
});

}

return (new cljs.spec.t_cljs$spec28861(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var cform = ((function (id){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__28879 = (i + (1));
i = G__28879;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id))
;
if(typeof cljs.spec.t_cljs$spec28875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28875 = (function (or_spec_impl,keys,forms,preds,gfn,id,cform,meta28876){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.cform = cform;
this.meta28876 = meta28876;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,cform){
return (function (_28877,meta28876__$1){
var self__ = this;
var _28877__$1 = this;
return (new cljs.spec.t_cljs$spec28875(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.cform,meta28876__$1));
});})(id,cform))
;

cljs.spec.t_cljs$spec28875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,cform){
return (function (_28877){
var self__ = this;
var _28877__$1 = this;
return self__.meta28876;
});})(id,cform))
;

cljs.spec.t_cljs$spec28875.prototype.call = ((function (id,cform){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(id,cform))
;

cljs.spec.t_cljs$spec28875.prototype.apply = ((function (id,cform){
return (function (self__,args28878){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28878)));
});})(id,cform))
;

cljs.spec.t_cljs$spec28875.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (id,cform){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(id,cform))
;

cljs.spec.t_cljs$spec28875.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28875.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,cform))
;

cljs.spec.t_cljs$spec28875.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (this$__$1,id,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,cform))
;

cljs.spec.t_cljs$spec28875.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,cform))
,null)));
}
});})(___$1,id,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,cform))
;

cljs.spec.t_cljs$spec28875.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,cform))
;

cljs.spec.t_cljs$spec28875.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,cform))
;

cljs.spec.t_cljs$spec28875.getBasis = ((function (id,cform){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-spec-impl","or-spec-impl",-1412945461,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'or'"], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta28876","meta28876",-593150290,null)], null);
});})(id,cform))
;

cljs.spec.t_cljs$spec28875.cljs$lang$type = true;

cljs.spec.t_cljs$spec28875.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28875";

cljs.spec.t_cljs$spec28875.cljs$lang$ctorPrWriter = ((function (id,cform){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.spec/t_cljs$spec28875");
});})(id,cform))
;

cljs.spec.__GT_t_cljs$spec28875 = ((function (id,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec28875(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,cform__$1,meta28876){
return (new cljs.spec.t_cljs$spec28875(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,cform__$1,meta28876));
});})(id,cform))
;

}

return (new cljs.spec.t_cljs$spec28875(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__28906 = preds;
var vec__28908 = G__28906;
var seq__28909 = cljs.core.seq.call(null,vec__28908);
var first__28910 = cljs.core.first.call(null,seq__28909);
var seq__28909__$1 = cljs.core.next.call(null,seq__28909);
var pred = first__28910;
var preds__$1 = seq__28909__$1;
var G__28907 = forms;
var vec__28911 = G__28907;
var seq__28912 = cljs.core.seq.call(null,vec__28911);
var first__28913 = cljs.core.first.call(null,seq__28912);
var seq__28912__$1 = cljs.core.next.call(null,seq__28912);
var form = first__28913;
var forms__$1 = seq__28912__$1;
var ret__$1 = ret;
var G__28906__$1 = G__28906;
var G__28907__$1 = G__28907;
while(true){
var ret__$2 = ret__$1;
var vec__28914 = G__28906__$1;
var seq__28915 = cljs.core.seq.call(null,vec__28914);
var first__28916 = cljs.core.first.call(null,seq__28915);
var seq__28915__$1 = cljs.core.next.call(null,seq__28915);
var pred__$1 = first__28916;
var preds__$2 = seq__28915__$1;
var vec__28917 = G__28907__$1;
var seq__28918 = cljs.core.seq.call(null,vec__28917);
var first__28919 = cljs.core.first.call(null,seq__28918);
var seq__28918__$1 = cljs.core.next.call(null,seq__28918);
var form__$1 = first__28919;
var forms__$2 = seq__28918__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__28920 = nret;
var G__28921 = preds__$2;
var G__28922 = forms__$2;
ret__$1 = G__28920;
G__28906__$1 = G__28921;
G__28907__$1 = G__28922;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__28949 = forms;
var vec__28951 = G__28949;
var seq__28952 = cljs.core.seq.call(null,vec__28951);
var first__28953 = cljs.core.first.call(null,seq__28952);
var seq__28952__$1 = cljs.core.next.call(null,seq__28952);
var form = first__28953;
var forms__$1 = seq__28952__$1;
var G__28950 = preds;
var vec__28954 = G__28950;
var seq__28955 = cljs.core.seq.call(null,vec__28954);
var first__28956 = cljs.core.first.call(null,seq__28955);
var seq__28955__$1 = cljs.core.next.call(null,seq__28955);
var pred = first__28956;
var preds__$1 = seq__28955__$1;
var ret__$1 = ret;
var G__28949__$1 = G__28949;
var G__28950__$1 = G__28950;
while(true){
var ret__$2 = ret__$1;
var vec__28957 = G__28949__$1;
var seq__28958 = cljs.core.seq.call(null,vec__28957);
var first__28959 = cljs.core.first.call(null,seq__28958);
var seq__28958__$1 = cljs.core.next.call(null,seq__28958);
var form__$1 = first__28959;
var forms__$2 = seq__28958__$1;
var vec__28960 = G__28950__$1;
var seq__28961 = cljs.core.seq.call(null,vec__28960);
var first__28962 = cljs.core.first.call(null,seq__28961);
var seq__28961__$1 = cljs.core.next.call(null,seq__28961);
var pred__$1 = first__28962;
var preds__$2 = seq__28961__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__28963 = nret;
var G__28964 = forms__$2;
var G__28965 = preds__$2;
ret__$1 = G__28963;
G__28949__$1 = G__28964;
G__28950__$1 = G__28965;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec28970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28970 = (function (and_spec_impl,forms,preds,gfn,meta28971){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta28971 = meta28971;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28972,meta28971__$1){
var self__ = this;
var _28972__$1 = this;
return (new cljs.spec.t_cljs$spec28970(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta28971__$1));
});

cljs.spec.t_cljs$spec28970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28972){
var self__ = this;
var _28972__$1 = this;
return self__.meta28971;
});

cljs.spec.t_cljs$spec28970.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec28970.prototype.apply = (function (self__,args28973){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28973)));
});

cljs.spec.t_cljs$spec28970.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec28970.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28970.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec28970.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec28970.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec28970.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec28970.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("s","and","s/and",668634387,null)),self__.forms)));
});

cljs.spec.t_cljs$spec28970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"and-spec-impl","and-spec-impl",1127339973,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'and'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta28971","meta28971",167577354,null)], null);
});

cljs.spec.t_cljs$spec28970.cljs$lang$type = true;

cljs.spec.t_cljs$spec28970.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28970";

cljs.spec.t_cljs$spec28970.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.spec/t_cljs$spec28970");
});

cljs.spec.__GT_t_cljs$spec28970 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec28970(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta28971){
return (new cljs.spec.t_cljs$spec28970(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta28971));
});

}

return (new cljs.spec.t_cljs$spec28970(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__28974){
var map__28977 = p__28974;
var map__28977__$1 = ((((!((map__28977 == null)))?((((map__28977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28977):map__28977);
var op = cljs.core.get.call(null,map__28977__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__28979){
var map__28991 = p__28979;
var map__28991__$1 = ((((!((map__28991 == null)))?((((map__28991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28991):map__28991);
var vec__28992 = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__28993 = cljs.core.seq.call(null,vec__28992);
var first__28994 = cljs.core.first.call(null,seq__28993);
var seq__28993__$1 = cljs.core.next.call(null,seq__28993);
var p1 = first__28994;
var pr = seq__28993__$1;
var ps = vec__28992;
var vec__28995 = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__28996 = cljs.core.seq.call(null,vec__28995);
var first__28997 = cljs.core.first.call(null,seq__28996);
var seq__28996__$1 = cljs.core.next.call(null,seq__28996);
var k1 = first__28997;
var kr = seq__28996__$1;
var ks = vec__28995;
var vec__28998 = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__28999 = cljs.core.seq.call(null,vec__28998);
var first__29000 = cljs.core.first.call(null,seq__28999);
var seq__28999__$1 = cljs.core.next.call(null,seq__28999);
var f1 = first__29000;
var fr = seq__28999__$1;
var forms = vec__28998;
var ret = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__22756__auto__ = [];
var len__22749__auto___29003 = arguments.length;
var i__22750__auto___29004 = (0);
while(true){
if((i__22750__auto___29004 < len__22749__auto___29003)){
args__22756__auto__.push((arguments[i__22750__auto___29004]));

var G__29005 = (i__22750__auto___29004 + (1));
i__22750__auto___29004 = G__29005;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq29002){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29002));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22508__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22508__auto__);
})(),(function (){var x__22508__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__22508__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22508__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22508__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__21674__auto__ = ks;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__29006_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__29006_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__21674__auto__ = cljs.core.seq.call(null,ks);
if(or__21674__auto__){
return or__21674__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__21674__auto__ = cljs.core.seq.call(null,forms);
if(or__21674__auto__){
return or__21674__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__29007_SHARP_){
return cljs.core.nth.call(null,p1__29007_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__29017 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__29020 = cljs.core.nth.call(null,vec__29017,(0),null);
var seq__29021 = cljs.core.seq.call(null,vec__29020);
var first__29022 = cljs.core.first.call(null,seq__29021);
var seq__29021__$1 = cljs.core.next.call(null,seq__29021);
var p1 = first__29022;
var pr = seq__29021__$1;
var ps__$1 = vec__29020;
var vec__29023 = cljs.core.nth.call(null,vec__29017,(1),null);
var k1 = cljs.core.nth.call(null,vec__29023,(0),null);
var ks__$1 = vec__29023;
var forms__$1 = cljs.core.nth.call(null,vec__29017,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__22756__auto__ = [];
var len__22749__auto___29027 = arguments.length;
var i__22750__auto___29028 = (0);
while(true){
if((i__22750__auto___29028 < len__22749__auto___29027)){
args__22756__auto__.push((arguments[i__22750__auto___29028]));

var G__29029 = (i__22750__auto___29028 + (1));
i__22750__auto___29028 = G__29029;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq29026){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29026));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__21662__auto__ = p1;
if(cljs.core.truth_(and__21662__auto__)){
return p2;
} else {
return and__21662__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__21674__auto__ = p1;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null));
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__21674__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__21674__auto__){
return or__21674__auto__;
} else {
var or__21674__auto____$1 = (function (){var and__21662__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve.call(null,p1)));
if(cljs.core.truth_(and__21662__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__21662__auto__;
}
})();
if(cljs.core.truth_(or__21674__auto____$1)){
return or__21674__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__29033 = cljs.spec.reg_resolve.call(null,p);
var map__29033__$1 = ((((!((map__29033 == null)))?((((map__29033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29033):map__29033);
var p__$1 = map__29033__$1;
var op = cljs.core.get.call(null,map__29033__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__29033__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__29033__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__29033__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__29033__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__29035 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__29035)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__29035)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__29035)){
var and__21662__auto__ = cljs$spec$accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__21662__auto__)){
var or__21674__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return ret;
}
}
} else {
return and__21662__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__29035)){
var or__21674__auto__ = (p1 === p2);
if(or__21674__auto__){
return or__21674__auto__;
} else {
return cljs$spec$accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__29035)){
return cljs.core.every_QMARK_.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__29035)){
return cljs.core.some.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__29054 = cljs.spec.reg_resolve.call(null,p);
var map__29054__$1 = ((((!((map__29054 == null)))?((((map__29054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29054):map__29054);
var p__$1 = map__29054__$1;
var vec__29055 = cljs.core.get.call(null,map__29054__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__29056 = cljs.core.seq.call(null,vec__29055);
var first__29057 = cljs.core.first.call(null,seq__29056);
var seq__29056__$1 = cljs.core.next.call(null,seq__29056);
var p0 = first__29057;
var pr = seq__29056__$1;
var ps = vec__29055;
var vec__29058 = cljs.core.get.call(null,map__29054__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__29058,(0),null);
var ks = vec__29058;
var op = cljs.core.get.call(null,map__29054__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__29054__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__29054__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__29054__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__29062 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__29062)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__29062)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__29062)){
var pret = cljs$spec$preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__29062)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__29062)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__29062)){
var vec__29063 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__29066 = cljs.core.nth.call(null,vec__29063,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__29066,(0),null);
var vec__29069 = cljs.core.nth.call(null,vec__29063,(1),null);
var k0 = cljs.core.nth.call(null,vec__29069,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs$spec$preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null);
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__29075 = cljs.spec.reg_resolve.call(null,p);
var map__29075__$1 = ((((!((map__29075 == null)))?((((map__29075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29075):map__29075);
var p__$1 = map__29075__$1;
var op = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__29075,map__29075__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__29075,map__29075__$1,p__$1,op,ps,splice))
;
var G__29077 = op;
if(cljs.core._EQ_.call(null,null,G__29077)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__29077)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__29077)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__29077)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__29077)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__29077)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__29088 = cljs.spec.reg_resolve.call(null,p);
var map__29088__$1 = ((((!((map__29088 == null)))?((((map__29088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29088):map__29088);
var p__$1 = map__29088__$1;
var vec__29089 = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__29090 = cljs.core.seq.call(null,vec__29089);
var first__29091 = cljs.core.first.call(null,seq__29090);
var seq__29090__$1 = cljs.core.next.call(null,seq__29090);
var p0 = first__29091;
var pr = seq__29090__$1;
var ps = vec__29089;
var vec__29092 = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__29093 = cljs.core.seq.call(null,vec__29092);
var first__29094 = cljs.core.first.call(null,seq__29093);
var seq__29093__$1 = cljs.core.next.call(null,seq__29093);
var k0 = first__29094;
var kr = seq__29093__$1;
var ks = vec__29092;
var op = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__29096 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__29096)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__29096)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__29096)){
var temp__4657__auto__ = cljs$spec$deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4657__auto__)){
var p1__$1 = temp__4657__auto__;
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__29096)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs$spec$deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs$spec$deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__29096)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__29096,map__29088,map__29088__$1,p__$1,vec__29089,seq__29090,first__29091,seq__29090__$1,p0,pr,ps,vec__29092,seq__29093,first__29094,seq__29093__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__29078_SHARP_){
return cljs$spec$deriv.call(null,p1__29078_SHARP_,x);
});})(G__29096,map__29088,map__29088__$1,p__$1,vec__29089,seq__29090,first__29091,seq__29090__$1,p0,pr,ps,vec__29092,seq__29093,first__29094,seq__29093__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__29096)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs$spec$deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs$spec$deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__29100 = cljs.spec.reg_resolve.call(null,p);
var map__29100__$1 = ((((!((map__29100 == null)))?((((map__29100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29100):map__29100);
var p__$1 = map__29100__$1;
var op = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.truth_(p__$1)){
var G__29102 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__29102)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__29102)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__29102)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs$spec$op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__29102)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__22508__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22508__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__21674__auto__ = cljs.core.seq.call(null,ks);
if(or__21674__auto__){
return or__21674__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),(function (){var or__21674__auto__ = cljs.core.seq.call(null,forms);
if(or__21674__auto__){
return or__21674__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__29102)){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__29102)){
var x__22508__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__22508__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22508__auto____$1);
})(),x__22508__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__29116 = input;
var x = cljs.core.nth.call(null,vec__29116,(0),null);
var input__$1 = vec__29116;
var map__29119 = cljs.spec.reg_resolve.call(null,p);
var map__29119__$1 = ((((!((map__29119 == null)))?((((map__29119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29119):map__29119);
var p__$1 = map__29119__$1;
var op = cljs.core.get.call(null,map__29119__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__29119__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__29119__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__29119__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__29119__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__29119__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__29119__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__29116,x,input__$1,map__29119,map__29119__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
});})(vec__29116,x,input__$1,map__29119,map__29119__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__29121 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__29121)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__29121)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__29121)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4655__auto__)){
var p1__$1 = temp__4655__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs$spec$op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__29121)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__21674__auto__ = cljs.core.seq.call(null,ks);
if(or__21674__auto__){
return or__21674__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__21674__auto__ = cljs.core.seq.call(null,forms);
if(or__21674__auto__){
return or__21674__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__29122 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__29121,vec__29116,x,input__$1,map__29119,map__29119__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__29125){
var vec__29126 = p__29125;
var p__$2 = cljs.core.nth.call(null,vec__29126,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__29121,vec__29116,x,input__$1,map__29119,map__29119__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__29122,(0),null);
var k = cljs.core.nth.call(null,vec__29122,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__29122,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__21674__auto__ = form__$1;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs$spec$op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__29121)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (G__29121,vec__29116,x,input__$1,map__29119,map__29119__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain.call(null,(function (){var or__21674__auto__ = form__$1;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__29121,vec__29116,x,input__$1,map__29119,map__29119__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__21674__auto__ = cljs.core.seq.call(null,ks);
if(or__21674__auto__){
return or__21674__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__21674__auto__ = cljs.core.seq.call(null,forms);
if(or__21674__auto__){
return or__21674__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__29121)){
return cljs$spec$op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__29135 = cljs.spec.reg_resolve.call(null,p);
var map__29135__$1 = ((((!((map__29135 == null)))?((((map__29135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29135):map__29135);
var p__$1 = map__29135__$1;
var op = cljs.core.get.call(null,map__29135__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__29135__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__29135__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__29135__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__29135__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__29135__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__29135__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ret = cljs.core.get.call(null,map__29135__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var id = cljs.core.get.call(null,map__29135__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__29135,map__29135__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__29135,map__29135__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__21662__auto__ = rmap__$1;
if(cljs.core.truth_(and__21662__auto__)){
var and__21662__auto____$1 = id;
if(cljs.core.truth_(and__21662__auto____$1)){
var and__21662__auto____$2 = k;
if(cljs.core.truth_(and__21662__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__21662__auto____$2;
}
} else {
return and__21662__auto____$1;
}
} else {
return and__21662__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__29135,map__29135__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (){
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__21674__auto__ = f__$1;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return p__$2;
}
})());
});})(map__29135,map__29135__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__21674__auto__ = f__$1;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__29135,map__29135__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__21674__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__21674__auto__){
return or__21674__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__21674__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__21674__auto__){
return or__21674__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__29135,map__29135__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
var or__21674__auto__ = (function (){var temp__4657__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
var G__29138 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__29138)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__29138)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
if(cljs.core.truth_(p__$1)){
var G__29139 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__29139)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__29139)){
var temp__4657__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__29139)){
return cljs$spec$re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__29139)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__29139)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__29139)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__4657__auto__ = cljs$spec$re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__4657__auto__,G__29139,or__21674__auto__,map__29135,map__29135__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens){
return (function (p1__29129_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__29129_SHARP_);
});})(g,temp__4657__auto__,G__29139,or__21674__auto__,map__29135,map__29135__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__29140){
while(true){
var vec__29144 = p__29140;
var seq__29145 = cljs.core.seq.call(null,vec__29144);
var first__29146 = cljs.core.first.call(null,seq__29145);
var seq__29145__$1 = cljs.core.next.call(null,seq__29145);
var x = first__29146;
var xs = seq__29145__$1;
var data = vec__29144;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__29147 = dp;
var G__29148 = xs;
p = G__29147;
p__29140 = G__29148;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__29162 = input;
var vec__29163 = G__29162;
var seq__29164 = cljs.core.seq.call(null,vec__29163);
var first__29165 = cljs.core.first.call(null,seq__29164);
var seq__29164__$1 = cljs.core.next.call(null,seq__29164);
var x = first__29165;
var xs = seq__29164__$1;
var data = vec__29163;
var i = (0);
var p__$1 = p;
var G__29162__$1 = G__29162;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__29166 = G__29162__$1;
var seq__29167 = cljs.core.seq.call(null,vec__29166);
var first__29168 = cljs.core.first.call(null,seq__29167);
var seq__29167__$1 = cljs.core.next.call(null,seq__29167);
var x__$1 = first__29168;
var xs__$1 = seq__29167__$1;
var data__$1 = vec__29166;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__29169 = dp;
var G__29170 = xs__$1;
var G__29171 = (i__$2 + (1));
p__$1 = G__29169;
G__29162__$1 = G__29170;
i__$1 = G__29171;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
} else {
var or__21674__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec29176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec29176 = (function (regex_spec_impl,re,gfn,meta29177){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta29177 = meta29177;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec29176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29178,meta29177__$1){
var self__ = this;
var _29178__$1 = this;
return (new cljs.spec.t_cljs$spec29176(self__.regex_spec_impl,self__.re,self__.gfn,meta29177__$1));
});

cljs.spec.t_cljs$spec29176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29178){
var self__ = this;
var _29178__$1 = this;
return self__.meta29177;
});

cljs.spec.t_cljs$spec29176.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec29176.prototype.apply = (function (self__,args29179){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29179)));
});

cljs.spec.t_cljs$spec29176.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec29176.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec29176.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec29176.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});

cljs.spec.t_cljs$spec29176.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec29176.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec29176.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec29176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"regex-spec-impl","regex-spec-impl",1541266692,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a regex op argument"], null)),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta29177","meta29177",-1772555369,null)], null);
});

cljs.spec.t_cljs$spec29176.cljs$lang$type = true;

cljs.spec.t_cljs$spec29176.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec29176";

cljs.spec.t_cljs$spec29176.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.spec/t_cljs$spec29176");
});

cljs.spec.__GT_t_cljs$spec29176 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec29176(regex_spec_impl__$1,re__$1,gfn__$1,meta29177){
return (new cljs.spec.t_cljs$spec29176(regex_spec_impl__$1,re__$1,gfn__$1,meta29177));
});

}

return (new cljs.spec.t_cljs$spec29176(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__21662__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__21662__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__21662__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__29180_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__29180_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__4655__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__29184 = temp__4655__auto__;
var smallest = cljs.core.nth.call(null,vec__29184,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
if(cljs.core.truth_((function (){var and__21662__auto__ = argspec;
if(cljs.core.truth_(and__21662__auto__)){
return retspec;
} else {
return and__21662__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (c/and argspec retspec)"));
}

var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec29194 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec29194 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta29195){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta29195 = meta29195;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec29194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_29196,meta29195__$1){
var self__ = this;
var _29196__$1 = this;
return (new cljs.spec.t_cljs$spec29194(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta29195__$1));
});})(specs))
;

cljs.spec.t_cljs$spec29194.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_29196){
var self__ = this;
var _29196__$1 = this;
return self__.meta29195;
});})(specs))
;

cljs.spec.t_cljs$spec29194.prototype.call = ((function (specs){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(specs))
;

cljs.spec.t_cljs$spec29194.prototype.apply = ((function (specs){
return (function (self__,args29197){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29197)));
});})(specs))
;

cljs.spec.t_cljs$spec29194.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (specs){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(specs))
;

cljs.spec.t_cljs$spec29194.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec29194.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.fn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec29194.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.fn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e29198){if((e29198 instanceof Error)){
var t = e29198;
return t;
} else {
throw e29198;

}
}})();
if((ret instanceof Error)){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(specs))
;

cljs.spec.t_cljs$spec29194.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
if(cljs.core.truth_(self__.fnspec)){
return null;
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$4,specs){
return (function() { 
var G__29201__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__22660__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29199_29202 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29200_29203 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29199_29202,_STAR_print_fn_STAR_29200_29203,sb__22660__auto__,___$4,specs){
return (function (x__22661__auto__){
return sb__22660__auto__.append(x__22661__auto__);
});})(_STAR_print_newline_STAR_29199_29202,_STAR_print_fn_STAR_29200_29203,sb__22660__auto__,___$4,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29200_29203;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29199_29202;
}
return [cljs.core.str(sb__22660__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec));
};
var G__29201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29204__i = 0, G__29204__a = new Array(arguments.length -  0);
while (G__29204__i < G__29204__a.length) {G__29204__a[G__29204__i] = arguments[G__29204__i + 0]; ++G__29204__i;}
  args = new cljs.core.IndexedSeq(G__29204__a,0);
} 
return G__29201__delegate.call(this,args);};
G__29201.cljs$lang$maxFixedArity = 0;
G__29201.cljs$lang$applyTo = (function (arglist__29205){
var args = cljs.core.seq(arglist__29205);
return G__29201__delegate(args);
});
G__29201.cljs$core$IFn$_invoke$arity$variadic = G__29201__delegate;
return G__29201;
})()
;})(___$4,specs))
);
}
}
});})(specs))
;

cljs.spec.t_cljs$spec29194.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec29194.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),(function (){var x__22508__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22508__auto__);
})(),(function (){var x__22508__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22508__auto__);
})(),(function (){var x__22508__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22508__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec29194.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fspec-impl","fspec-impl",897021908,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'fspec'"], null)),new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta29195","meta29195",-2005363355,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec29194.cljs$lang$type = true;

cljs.spec.t_cljs$spec29194.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec29194";

cljs.spec.t_cljs$spec29194.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.spec/t_cljs$spec29194");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec29194 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec29194(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta29195){
return (new cljs.spec.t_cljs$spec29194(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta29195));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec29194(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","any","cljs.spec/any",1039429974),cljs.core.list(new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",775251713,null),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol("cljs.spec.impl.gen","any","cljs.spec.impl.gen/any",-1450752257,null)),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),cljs.core.constantly.call(null,true),cljs.spec.impl.gen.any,null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29206#","p1__29206#",-1527053069,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__29206#","p1__29206#",-1527053069,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__29206#","p1__29206#",-1527053069,null))))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29206#","p1__29206#",-1527053069,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__29206#","p1__29206#",-1527053069,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__29206#","p1__29206#",-1527053069,null)))),(function (p1__29206_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__29206_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__29206_SHARP_));
}),null,true));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args29208 = [];
var len__22749__auto___29211 = arguments.length;
var i__22750__auto___29212 = (0);
while(true){
if((i__22750__auto___29212 < len__22749__auto___29211)){
args29208.push((arguments[i__22750__auto___29212]));

var G__29213 = (i__22750__auto___29212 + (1));
i__22750__auto___29212 = G__29213;
continue;
} else {
}
break;
}

var G__29210 = args29208.length;
switch (G__29210) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29208.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__29207_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__29207_SHARP_,cljs.spec.conform.call(null,spec,p1__29207_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * returns a predicate function that checks *coll-check-limit* items in a collection with pred
 */
cljs.spec.coll_checker = (function cljs$spec$coll_checker(pred){
var check_QMARK_ = (function (p1__29215_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__29215_SHARP_);
});
return ((function (check_QMARK_){
return (function (coll){
return ((coll == null)) || ((cljs.core.coll_QMARK_.call(null,coll)) && (cljs.core.every_QMARK_.call(null,check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,coll))));
});
;})(check_QMARK_))
});
/**
 * returns a function of no args that returns a generator of
 *   collections of items conforming to pred, with the same shape as
 *   init-coll
 */
cljs.spec.coll_gen = (function cljs$spec$coll_gen(pred,init_coll){
var init = cljs.core.empty.call(null,init_coll);
return ((function (init){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (init){
return (function (p1__29216_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__29216_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__29216_SHARP_);
}
});})(init))
,cljs.spec.impl.gen.vector.call(null,cljs.spec.gen.call(null,pred)));
});
;})(init))
});

//# sourceMappingURL=spec.js.map?rel=1466173480649