// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21674__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21674__auto__){
return or__21674__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21674__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26954_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26954_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26959 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26960 = null;
var count__26961 = (0);
var i__26962 = (0);
while(true){
if((i__26962 < count__26961)){
var n = cljs.core._nth.call(null,chunk__26960,i__26962);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26963 = seq__26959;
var G__26964 = chunk__26960;
var G__26965 = count__26961;
var G__26966 = (i__26962 + (1));
seq__26959 = G__26963;
chunk__26960 = G__26964;
count__26961 = G__26965;
i__26962 = G__26966;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26959);
if(temp__4657__auto__){
var seq__26959__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26959__$1)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,seq__26959__$1);
var G__26967 = cljs.core.chunk_rest.call(null,seq__26959__$1);
var G__26968 = c__22485__auto__;
var G__26969 = cljs.core.count.call(null,c__22485__auto__);
var G__26970 = (0);
seq__26959 = G__26967;
chunk__26960 = G__26968;
count__26961 = G__26969;
i__26962 = G__26970;
continue;
} else {
var n = cljs.core.first.call(null,seq__26959__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26971 = cljs.core.next.call(null,seq__26959__$1);
var G__26972 = null;
var G__26973 = (0);
var G__26974 = (0);
seq__26959 = G__26971;
chunk__26960 = G__26972;
count__26961 = G__26973;
i__26962 = G__26974;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27025_27036 = cljs.core.seq.call(null,deps);
var chunk__27026_27037 = null;
var count__27027_27038 = (0);
var i__27028_27039 = (0);
while(true){
if((i__27028_27039 < count__27027_27038)){
var dep_27040 = cljs.core._nth.call(null,chunk__27026_27037,i__27028_27039);
topo_sort_helper_STAR_.call(null,dep_27040,(depth + (1)),state);

var G__27041 = seq__27025_27036;
var G__27042 = chunk__27026_27037;
var G__27043 = count__27027_27038;
var G__27044 = (i__27028_27039 + (1));
seq__27025_27036 = G__27041;
chunk__27026_27037 = G__27042;
count__27027_27038 = G__27043;
i__27028_27039 = G__27044;
continue;
} else {
var temp__4657__auto___27045 = cljs.core.seq.call(null,seq__27025_27036);
if(temp__4657__auto___27045){
var seq__27025_27046__$1 = temp__4657__auto___27045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27025_27046__$1)){
var c__22485__auto___27047 = cljs.core.chunk_first.call(null,seq__27025_27046__$1);
var G__27048 = cljs.core.chunk_rest.call(null,seq__27025_27046__$1);
var G__27049 = c__22485__auto___27047;
var G__27050 = cljs.core.count.call(null,c__22485__auto___27047);
var G__27051 = (0);
seq__27025_27036 = G__27048;
chunk__27026_27037 = G__27049;
count__27027_27038 = G__27050;
i__27028_27039 = G__27051;
continue;
} else {
var dep_27052 = cljs.core.first.call(null,seq__27025_27046__$1);
topo_sort_helper_STAR_.call(null,dep_27052,(depth + (1)),state);

var G__27053 = cljs.core.next.call(null,seq__27025_27046__$1);
var G__27054 = null;
var G__27055 = (0);
var G__27056 = (0);
seq__27025_27036 = G__27053;
chunk__27026_27037 = G__27054;
count__27027_27038 = G__27055;
i__27028_27039 = G__27056;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27029){
var vec__27033 = p__27029;
var seq__27034 = cljs.core.seq.call(null,vec__27033);
var first__27035 = cljs.core.first.call(null,seq__27034);
var seq__27034__$1 = cljs.core.next.call(null,seq__27034);
var x = first__27035;
var xs = seq__27034__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27033,seq__27034,first__27035,seq__27034__$1,x,xs,get_deps__$1){
return (function (p1__26975_SHARP_){
return clojure.set.difference.call(null,p1__26975_SHARP_,x);
});})(vec__27033,seq__27034,first__27035,seq__27034__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27069 = cljs.core.seq.call(null,provides);
var chunk__27070 = null;
var count__27071 = (0);
var i__27072 = (0);
while(true){
if((i__27072 < count__27071)){
var prov = cljs.core._nth.call(null,chunk__27070,i__27072);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27073_27081 = cljs.core.seq.call(null,requires);
var chunk__27074_27082 = null;
var count__27075_27083 = (0);
var i__27076_27084 = (0);
while(true){
if((i__27076_27084 < count__27075_27083)){
var req_27085 = cljs.core._nth.call(null,chunk__27074_27082,i__27076_27084);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27085,prov);

var G__27086 = seq__27073_27081;
var G__27087 = chunk__27074_27082;
var G__27088 = count__27075_27083;
var G__27089 = (i__27076_27084 + (1));
seq__27073_27081 = G__27086;
chunk__27074_27082 = G__27087;
count__27075_27083 = G__27088;
i__27076_27084 = G__27089;
continue;
} else {
var temp__4657__auto___27090 = cljs.core.seq.call(null,seq__27073_27081);
if(temp__4657__auto___27090){
var seq__27073_27091__$1 = temp__4657__auto___27090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27073_27091__$1)){
var c__22485__auto___27092 = cljs.core.chunk_first.call(null,seq__27073_27091__$1);
var G__27093 = cljs.core.chunk_rest.call(null,seq__27073_27091__$1);
var G__27094 = c__22485__auto___27092;
var G__27095 = cljs.core.count.call(null,c__22485__auto___27092);
var G__27096 = (0);
seq__27073_27081 = G__27093;
chunk__27074_27082 = G__27094;
count__27075_27083 = G__27095;
i__27076_27084 = G__27096;
continue;
} else {
var req_27097 = cljs.core.first.call(null,seq__27073_27091__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27097,prov);

var G__27098 = cljs.core.next.call(null,seq__27073_27091__$1);
var G__27099 = null;
var G__27100 = (0);
var G__27101 = (0);
seq__27073_27081 = G__27098;
chunk__27074_27082 = G__27099;
count__27075_27083 = G__27100;
i__27076_27084 = G__27101;
continue;
}
} else {
}
}
break;
}

var G__27102 = seq__27069;
var G__27103 = chunk__27070;
var G__27104 = count__27071;
var G__27105 = (i__27072 + (1));
seq__27069 = G__27102;
chunk__27070 = G__27103;
count__27071 = G__27104;
i__27072 = G__27105;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27069);
if(temp__4657__auto__){
var seq__27069__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27069__$1)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,seq__27069__$1);
var G__27106 = cljs.core.chunk_rest.call(null,seq__27069__$1);
var G__27107 = c__22485__auto__;
var G__27108 = cljs.core.count.call(null,c__22485__auto__);
var G__27109 = (0);
seq__27069 = G__27106;
chunk__27070 = G__27107;
count__27071 = G__27108;
i__27072 = G__27109;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27069__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27077_27110 = cljs.core.seq.call(null,requires);
var chunk__27078_27111 = null;
var count__27079_27112 = (0);
var i__27080_27113 = (0);
while(true){
if((i__27080_27113 < count__27079_27112)){
var req_27114 = cljs.core._nth.call(null,chunk__27078_27111,i__27080_27113);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27114,prov);

var G__27115 = seq__27077_27110;
var G__27116 = chunk__27078_27111;
var G__27117 = count__27079_27112;
var G__27118 = (i__27080_27113 + (1));
seq__27077_27110 = G__27115;
chunk__27078_27111 = G__27116;
count__27079_27112 = G__27117;
i__27080_27113 = G__27118;
continue;
} else {
var temp__4657__auto___27119__$1 = cljs.core.seq.call(null,seq__27077_27110);
if(temp__4657__auto___27119__$1){
var seq__27077_27120__$1 = temp__4657__auto___27119__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27077_27120__$1)){
var c__22485__auto___27121 = cljs.core.chunk_first.call(null,seq__27077_27120__$1);
var G__27122 = cljs.core.chunk_rest.call(null,seq__27077_27120__$1);
var G__27123 = c__22485__auto___27121;
var G__27124 = cljs.core.count.call(null,c__22485__auto___27121);
var G__27125 = (0);
seq__27077_27110 = G__27122;
chunk__27078_27111 = G__27123;
count__27079_27112 = G__27124;
i__27080_27113 = G__27125;
continue;
} else {
var req_27126 = cljs.core.first.call(null,seq__27077_27120__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27126,prov);

var G__27127 = cljs.core.next.call(null,seq__27077_27120__$1);
var G__27128 = null;
var G__27129 = (0);
var G__27130 = (0);
seq__27077_27110 = G__27127;
chunk__27078_27111 = G__27128;
count__27079_27112 = G__27129;
i__27080_27113 = G__27130;
continue;
}
} else {
}
}
break;
}

var G__27131 = cljs.core.next.call(null,seq__27069__$1);
var G__27132 = null;
var G__27133 = (0);
var G__27134 = (0);
seq__27069 = G__27131;
chunk__27070 = G__27132;
count__27071 = G__27133;
i__27072 = G__27134;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27139_27143 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27140_27144 = null;
var count__27141_27145 = (0);
var i__27142_27146 = (0);
while(true){
if((i__27142_27146 < count__27141_27145)){
var ns_27147 = cljs.core._nth.call(null,chunk__27140_27144,i__27142_27146);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27147);

var G__27148 = seq__27139_27143;
var G__27149 = chunk__27140_27144;
var G__27150 = count__27141_27145;
var G__27151 = (i__27142_27146 + (1));
seq__27139_27143 = G__27148;
chunk__27140_27144 = G__27149;
count__27141_27145 = G__27150;
i__27142_27146 = G__27151;
continue;
} else {
var temp__4657__auto___27152 = cljs.core.seq.call(null,seq__27139_27143);
if(temp__4657__auto___27152){
var seq__27139_27153__$1 = temp__4657__auto___27152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27139_27153__$1)){
var c__22485__auto___27154 = cljs.core.chunk_first.call(null,seq__27139_27153__$1);
var G__27155 = cljs.core.chunk_rest.call(null,seq__27139_27153__$1);
var G__27156 = c__22485__auto___27154;
var G__27157 = cljs.core.count.call(null,c__22485__auto___27154);
var G__27158 = (0);
seq__27139_27143 = G__27155;
chunk__27140_27144 = G__27156;
count__27141_27145 = G__27157;
i__27142_27146 = G__27158;
continue;
} else {
var ns_27159 = cljs.core.first.call(null,seq__27139_27153__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27159);

var G__27160 = cljs.core.next.call(null,seq__27139_27153__$1);
var G__27161 = null;
var G__27162 = (0);
var G__27163 = (0);
seq__27139_27143 = G__27160;
chunk__27140_27144 = G__27161;
count__27141_27145 = G__27162;
i__27142_27146 = G__27163;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21674__auto__ = goog.require__;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27164__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27165__i = 0, G__27165__a = new Array(arguments.length -  0);
while (G__27165__i < G__27165__a.length) {G__27165__a[G__27165__i] = arguments[G__27165__i + 0]; ++G__27165__i;}
  args = new cljs.core.IndexedSeq(G__27165__a,0);
} 
return G__27164__delegate.call(this,args);};
G__27164.cljs$lang$maxFixedArity = 0;
G__27164.cljs$lang$applyTo = (function (arglist__27166){
var args = cljs.core.seq(arglist__27166);
return G__27164__delegate(args);
});
G__27164.cljs$core$IFn$_invoke$arity$variadic = G__27164__delegate;
return G__27164;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27168 = cljs.core._EQ_;
var expr__27169 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27168.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27169))){
var path_parts = ((function (pred__27168,expr__27169){
return (function (p1__27167_SHARP_){
return clojure.string.split.call(null,p1__27167_SHARP_,/[\/\\]/);
});})(pred__27168,expr__27169))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27168,expr__27169){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27171){if((e27171 instanceof Error)){
var e = e27171;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27171;

}
}})());
});
;})(path_parts,sep,root,pred__27168,expr__27169))
} else {
if(cljs.core.truth_(pred__27168.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27169))){
return ((function (pred__27168,expr__27169){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27168,expr__27169){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27168,expr__27169))
);

return deferred.addErrback(((function (deferred,pred__27168,expr__27169){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27168,expr__27169))
);
});
;})(pred__27168,expr__27169))
} else {
return ((function (pred__27168,expr__27169){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27168,expr__27169))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27172,callback){
var map__27175 = p__27172;
var map__27175__$1 = ((((!((map__27175 == null)))?((((map__27175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27175):map__27175);
var file_msg = map__27175__$1;
var request_url = cljs.core.get.call(null,map__27175__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27175,map__27175__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27175,map__27175__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto__){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto__){
return (function (state_27199){
var state_val_27200 = (state_27199[(1)]);
if((state_val_27200 === (7))){
var inst_27195 = (state_27199[(2)]);
var state_27199__$1 = state_27199;
var statearr_27201_27221 = state_27199__$1;
(statearr_27201_27221[(2)] = inst_27195);

(statearr_27201_27221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27200 === (1))){
var state_27199__$1 = state_27199;
var statearr_27202_27222 = state_27199__$1;
(statearr_27202_27222[(2)] = null);

(statearr_27202_27222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27200 === (4))){
var inst_27179 = (state_27199[(7)]);
var inst_27179__$1 = (state_27199[(2)]);
var state_27199__$1 = (function (){var statearr_27203 = state_27199;
(statearr_27203[(7)] = inst_27179__$1);

return statearr_27203;
})();
if(cljs.core.truth_(inst_27179__$1)){
var statearr_27204_27223 = state_27199__$1;
(statearr_27204_27223[(1)] = (5));

} else {
var statearr_27205_27224 = state_27199__$1;
(statearr_27205_27224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27200 === (6))){
var state_27199__$1 = state_27199;
var statearr_27206_27225 = state_27199__$1;
(statearr_27206_27225[(2)] = null);

(statearr_27206_27225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27200 === (3))){
var inst_27197 = (state_27199[(2)]);
var state_27199__$1 = state_27199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27199__$1,inst_27197);
} else {
if((state_val_27200 === (2))){
var state_27199__$1 = state_27199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27199__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27200 === (11))){
var inst_27191 = (state_27199[(2)]);
var state_27199__$1 = (function (){var statearr_27207 = state_27199;
(statearr_27207[(8)] = inst_27191);

return statearr_27207;
})();
var statearr_27208_27226 = state_27199__$1;
(statearr_27208_27226[(2)] = null);

(statearr_27208_27226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27200 === (9))){
var inst_27185 = (state_27199[(9)]);
var inst_27183 = (state_27199[(10)]);
var inst_27187 = inst_27185.call(null,inst_27183);
var state_27199__$1 = state_27199;
var statearr_27209_27227 = state_27199__$1;
(statearr_27209_27227[(2)] = inst_27187);

(statearr_27209_27227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27200 === (5))){
var inst_27179 = (state_27199[(7)]);
var inst_27181 = figwheel.client.file_reloading.blocking_load.call(null,inst_27179);
var state_27199__$1 = state_27199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27199__$1,(8),inst_27181);
} else {
if((state_val_27200 === (10))){
var inst_27183 = (state_27199[(10)]);
var inst_27189 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27183);
var state_27199__$1 = state_27199;
var statearr_27210_27228 = state_27199__$1;
(statearr_27210_27228[(2)] = inst_27189);

(statearr_27210_27228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27200 === (8))){
var inst_27179 = (state_27199[(7)]);
var inst_27185 = (state_27199[(9)]);
var inst_27183 = (state_27199[(2)]);
var inst_27184 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27185__$1 = cljs.core.get.call(null,inst_27184,inst_27179);
var state_27199__$1 = (function (){var statearr_27211 = state_27199;
(statearr_27211[(9)] = inst_27185__$1);

(statearr_27211[(10)] = inst_27183);

return statearr_27211;
})();
if(cljs.core.truth_(inst_27185__$1)){
var statearr_27212_27229 = state_27199__$1;
(statearr_27212_27229[(1)] = (9));

} else {
var statearr_27213_27230 = state_27199__$1;
(statearr_27213_27230[(1)] = (10));

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
});})(c__23977__auto__))
;
return ((function (switch__23865__auto__,c__23977__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23866__auto__ = null;
var figwheel$client$file_reloading$state_machine__23866__auto____0 = (function (){
var statearr_27217 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27217[(0)] = figwheel$client$file_reloading$state_machine__23866__auto__);

(statearr_27217[(1)] = (1));

return statearr_27217;
});
var figwheel$client$file_reloading$state_machine__23866__auto____1 = (function (state_27199){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_27199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e27218){if((e27218 instanceof Object)){
var ex__23869__auto__ = e27218;
var statearr_27219_27231 = state_27199;
(statearr_27219_27231[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27232 = state_27199;
state_27199 = G__27232;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23866__auto__ = function(state_27199){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23866__auto____1.call(this,state_27199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23866__auto____0;
figwheel$client$file_reloading$state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23866__auto____1;
return figwheel$client$file_reloading$state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto__))
})();
var state__23979__auto__ = (function (){var statearr_27220 = f__23978__auto__.call(null);
(statearr_27220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto__);

return statearr_27220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto__))
);

return c__23977__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27233,callback){
var map__27236 = p__27233;
var map__27236__$1 = ((((!((map__27236 == null)))?((((map__27236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27236):map__27236);
var file_msg = map__27236__$1;
var namespace = cljs.core.get.call(null,map__27236__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27236,map__27236__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27236,map__27236__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27238){
var map__27241 = p__27238;
var map__27241__$1 = ((((!((map__27241 == null)))?((((map__27241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27241):map__27241);
var file_msg = map__27241__$1;
var namespace = cljs.core.get.call(null,map__27241__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21662__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21662__auto__){
var or__21674__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
var or__21674__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21674__auto____$1)){
return or__21674__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21662__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27243,callback){
var map__27246 = p__27243;
var map__27246__$1 = ((((!((map__27246 == null)))?((((map__27246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27246):map__27246);
var file_msg = map__27246__$1;
var request_url = cljs.core.get.call(null,map__27246__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27246__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23977__auto___27350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto___27350,out){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto___27350,out){
return (function (state_27332){
var state_val_27333 = (state_27332[(1)]);
if((state_val_27333 === (1))){
var inst_27306 = cljs.core.seq.call(null,files);
var inst_27307 = cljs.core.first.call(null,inst_27306);
var inst_27308 = cljs.core.next.call(null,inst_27306);
var inst_27309 = files;
var state_27332__$1 = (function (){var statearr_27334 = state_27332;
(statearr_27334[(7)] = inst_27308);

(statearr_27334[(8)] = inst_27307);

(statearr_27334[(9)] = inst_27309);

return statearr_27334;
})();
var statearr_27335_27351 = state_27332__$1;
(statearr_27335_27351[(2)] = null);

(statearr_27335_27351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27333 === (2))){
var inst_27315 = (state_27332[(10)]);
var inst_27309 = (state_27332[(9)]);
var inst_27314 = cljs.core.seq.call(null,inst_27309);
var inst_27315__$1 = cljs.core.first.call(null,inst_27314);
var inst_27316 = cljs.core.next.call(null,inst_27314);
var inst_27317 = (inst_27315__$1 == null);
var inst_27318 = cljs.core.not.call(null,inst_27317);
var state_27332__$1 = (function (){var statearr_27336 = state_27332;
(statearr_27336[(11)] = inst_27316);

(statearr_27336[(10)] = inst_27315__$1);

return statearr_27336;
})();
if(inst_27318){
var statearr_27337_27352 = state_27332__$1;
(statearr_27337_27352[(1)] = (4));

} else {
var statearr_27338_27353 = state_27332__$1;
(statearr_27338_27353[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27333 === (3))){
var inst_27330 = (state_27332[(2)]);
var state_27332__$1 = state_27332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27332__$1,inst_27330);
} else {
if((state_val_27333 === (4))){
var inst_27315 = (state_27332[(10)]);
var inst_27320 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27315);
var state_27332__$1 = state_27332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27332__$1,(7),inst_27320);
} else {
if((state_val_27333 === (5))){
var inst_27326 = cljs.core.async.close_BANG_.call(null,out);
var state_27332__$1 = state_27332;
var statearr_27339_27354 = state_27332__$1;
(statearr_27339_27354[(2)] = inst_27326);

(statearr_27339_27354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27333 === (6))){
var inst_27328 = (state_27332[(2)]);
var state_27332__$1 = state_27332;
var statearr_27340_27355 = state_27332__$1;
(statearr_27340_27355[(2)] = inst_27328);

(statearr_27340_27355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27333 === (7))){
var inst_27316 = (state_27332[(11)]);
var inst_27322 = (state_27332[(2)]);
var inst_27323 = cljs.core.async.put_BANG_.call(null,out,inst_27322);
var inst_27309 = inst_27316;
var state_27332__$1 = (function (){var statearr_27341 = state_27332;
(statearr_27341[(12)] = inst_27323);

(statearr_27341[(9)] = inst_27309);

return statearr_27341;
})();
var statearr_27342_27356 = state_27332__$1;
(statearr_27342_27356[(2)] = null);

(statearr_27342_27356[(1)] = (2));


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
});})(c__23977__auto___27350,out))
;
return ((function (switch__23865__auto__,c__23977__auto___27350,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23866__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23866__auto____0 = (function (){
var statearr_27346 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27346[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23866__auto__);

(statearr_27346[(1)] = (1));

return statearr_27346;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23866__auto____1 = (function (state_27332){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_27332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e27347){if((e27347 instanceof Object)){
var ex__23869__auto__ = e27347;
var statearr_27348_27357 = state_27332;
(statearr_27348_27357[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27358 = state_27332;
state_27332 = G__27358;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23866__auto__ = function(state_27332){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23866__auto____1.call(this,state_27332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23866__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23866__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto___27350,out))
})();
var state__23979__auto__ = (function (){var statearr_27349 = f__23978__auto__.call(null);
(statearr_27349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto___27350);

return statearr_27349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto___27350,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27359,opts){
var map__27363 = p__27359;
var map__27363__$1 = ((((!((map__27363 == null)))?((((map__27363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27363):map__27363);
var eval_body__$1 = cljs.core.get.call(null,map__27363__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27363__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21662__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21662__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21662__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27365){var e = e27365;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27366_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27366_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27375){
var vec__27376 = p__27375;
var k = cljs.core.nth.call(null,vec__27376,(0),null);
var v = cljs.core.nth.call(null,vec__27376,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27379){
var vec__27380 = p__27379;
var k = cljs.core.nth.call(null,vec__27380,(0),null);
var v = cljs.core.nth.call(null,vec__27380,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27386,p__27387){
var map__27634 = p__27386;
var map__27634__$1 = ((((!((map__27634 == null)))?((((map__27634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27634):map__27634);
var opts = map__27634__$1;
var before_jsload = cljs.core.get.call(null,map__27634__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27634__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27634__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27635 = p__27387;
var map__27635__$1 = ((((!((map__27635 == null)))?((((map__27635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27635):map__27635);
var msg = map__27635__$1;
var files = cljs.core.get.call(null,map__27635__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27635__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27635__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23978__auto__ = (function (){var switch__23865__auto__ = ((function (c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27788){
var state_val_27789 = (state_27788[(1)]);
if((state_val_27789 === (7))){
var inst_27651 = (state_27788[(7)]);
var inst_27652 = (state_27788[(8)]);
var inst_27649 = (state_27788[(9)]);
var inst_27650 = (state_27788[(10)]);
var inst_27657 = cljs.core._nth.call(null,inst_27650,inst_27652);
var inst_27658 = figwheel.client.file_reloading.eval_body.call(null,inst_27657,opts);
var inst_27659 = (inst_27652 + (1));
var tmp27790 = inst_27651;
var tmp27791 = inst_27649;
var tmp27792 = inst_27650;
var inst_27649__$1 = tmp27791;
var inst_27650__$1 = tmp27792;
var inst_27651__$1 = tmp27790;
var inst_27652__$1 = inst_27659;
var state_27788__$1 = (function (){var statearr_27793 = state_27788;
(statearr_27793[(11)] = inst_27658);

(statearr_27793[(7)] = inst_27651__$1);

(statearr_27793[(8)] = inst_27652__$1);

(statearr_27793[(9)] = inst_27649__$1);

(statearr_27793[(10)] = inst_27650__$1);

return statearr_27793;
})();
var statearr_27794_27880 = state_27788__$1;
(statearr_27794_27880[(2)] = null);

(statearr_27794_27880[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (20))){
var inst_27692 = (state_27788[(12)]);
var inst_27700 = figwheel.client.file_reloading.sort_files.call(null,inst_27692);
var state_27788__$1 = state_27788;
var statearr_27795_27881 = state_27788__$1;
(statearr_27795_27881[(2)] = inst_27700);

(statearr_27795_27881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (27))){
var state_27788__$1 = state_27788;
var statearr_27796_27882 = state_27788__$1;
(statearr_27796_27882[(2)] = null);

(statearr_27796_27882[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (1))){
var inst_27641 = (state_27788[(13)]);
var inst_27638 = before_jsload.call(null,files);
var inst_27639 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27640 = (function (){return ((function (inst_27641,inst_27638,inst_27639,state_val_27789,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27383_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27383_SHARP_);
});
;})(inst_27641,inst_27638,inst_27639,state_val_27789,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27641__$1 = cljs.core.filter.call(null,inst_27640,files);
var inst_27642 = cljs.core.not_empty.call(null,inst_27641__$1);
var state_27788__$1 = (function (){var statearr_27797 = state_27788;
(statearr_27797[(14)] = inst_27639);

(statearr_27797[(13)] = inst_27641__$1);

(statearr_27797[(15)] = inst_27638);

return statearr_27797;
})();
if(cljs.core.truth_(inst_27642)){
var statearr_27798_27883 = state_27788__$1;
(statearr_27798_27883[(1)] = (2));

} else {
var statearr_27799_27884 = state_27788__$1;
(statearr_27799_27884[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (24))){
var state_27788__$1 = state_27788;
var statearr_27800_27885 = state_27788__$1;
(statearr_27800_27885[(2)] = null);

(statearr_27800_27885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (39))){
var inst_27742 = (state_27788[(16)]);
var state_27788__$1 = state_27788;
var statearr_27801_27886 = state_27788__$1;
(statearr_27801_27886[(2)] = inst_27742);

(statearr_27801_27886[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (46))){
var inst_27783 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27802_27887 = state_27788__$1;
(statearr_27802_27887[(2)] = inst_27783);

(statearr_27802_27887[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (4))){
var inst_27686 = (state_27788[(2)]);
var inst_27687 = cljs.core.List.EMPTY;
var inst_27688 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27687);
var inst_27689 = (function (){return ((function (inst_27686,inst_27687,inst_27688,state_val_27789,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27384_SHARP_){
var and__21662__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27384_SHARP_);
if(cljs.core.truth_(and__21662__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27384_SHARP_));
} else {
return and__21662__auto__;
}
});
;})(inst_27686,inst_27687,inst_27688,state_val_27789,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27690 = cljs.core.filter.call(null,inst_27689,files);
var inst_27691 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27692 = cljs.core.concat.call(null,inst_27690,inst_27691);
var state_27788__$1 = (function (){var statearr_27803 = state_27788;
(statearr_27803[(17)] = inst_27688);

(statearr_27803[(12)] = inst_27692);

(statearr_27803[(18)] = inst_27686);

return statearr_27803;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27804_27888 = state_27788__$1;
(statearr_27804_27888[(1)] = (16));

} else {
var statearr_27805_27889 = state_27788__$1;
(statearr_27805_27889[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (15))){
var inst_27676 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27806_27890 = state_27788__$1;
(statearr_27806_27890[(2)] = inst_27676);

(statearr_27806_27890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (21))){
var inst_27702 = (state_27788[(19)]);
var inst_27702__$1 = (state_27788[(2)]);
var inst_27703 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27702__$1);
var state_27788__$1 = (function (){var statearr_27807 = state_27788;
(statearr_27807[(19)] = inst_27702__$1);

return statearr_27807;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27788__$1,(22),inst_27703);
} else {
if((state_val_27789 === (31))){
var inst_27786 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27788__$1,inst_27786);
} else {
if((state_val_27789 === (32))){
var inst_27742 = (state_27788[(16)]);
var inst_27747 = inst_27742.cljs$lang$protocol_mask$partition0$;
var inst_27748 = (inst_27747 & (64));
var inst_27749 = inst_27742.cljs$core$ISeq$;
var inst_27750 = (inst_27748) || (inst_27749);
var state_27788__$1 = state_27788;
if(cljs.core.truth_(inst_27750)){
var statearr_27808_27891 = state_27788__$1;
(statearr_27808_27891[(1)] = (35));

} else {
var statearr_27809_27892 = state_27788__$1;
(statearr_27809_27892[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (40))){
var inst_27763 = (state_27788[(20)]);
var inst_27762 = (state_27788[(2)]);
var inst_27763__$1 = cljs.core.get.call(null,inst_27762,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27764 = cljs.core.get.call(null,inst_27762,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27765 = cljs.core.not_empty.call(null,inst_27763__$1);
var state_27788__$1 = (function (){var statearr_27810 = state_27788;
(statearr_27810[(21)] = inst_27764);

(statearr_27810[(20)] = inst_27763__$1);

return statearr_27810;
})();
if(cljs.core.truth_(inst_27765)){
var statearr_27811_27893 = state_27788__$1;
(statearr_27811_27893[(1)] = (41));

} else {
var statearr_27812_27894 = state_27788__$1;
(statearr_27812_27894[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (33))){
var state_27788__$1 = state_27788;
var statearr_27813_27895 = state_27788__$1;
(statearr_27813_27895[(2)] = false);

(statearr_27813_27895[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (13))){
var inst_27662 = (state_27788[(22)]);
var inst_27666 = cljs.core.chunk_first.call(null,inst_27662);
var inst_27667 = cljs.core.chunk_rest.call(null,inst_27662);
var inst_27668 = cljs.core.count.call(null,inst_27666);
var inst_27649 = inst_27667;
var inst_27650 = inst_27666;
var inst_27651 = inst_27668;
var inst_27652 = (0);
var state_27788__$1 = (function (){var statearr_27814 = state_27788;
(statearr_27814[(7)] = inst_27651);

(statearr_27814[(8)] = inst_27652);

(statearr_27814[(9)] = inst_27649);

(statearr_27814[(10)] = inst_27650);

return statearr_27814;
})();
var statearr_27815_27896 = state_27788__$1;
(statearr_27815_27896[(2)] = null);

(statearr_27815_27896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (22))){
var inst_27702 = (state_27788[(19)]);
var inst_27706 = (state_27788[(23)]);
var inst_27705 = (state_27788[(24)]);
var inst_27710 = (state_27788[(25)]);
var inst_27705__$1 = (state_27788[(2)]);
var inst_27706__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27705__$1);
var inst_27707 = (function (){var all_files = inst_27702;
var res_SINGLEQUOTE_ = inst_27705__$1;
var res = inst_27706__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27702,inst_27706,inst_27705,inst_27710,inst_27705__$1,inst_27706__$1,state_val_27789,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27385_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27385_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27702,inst_27706,inst_27705,inst_27710,inst_27705__$1,inst_27706__$1,state_val_27789,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27708 = cljs.core.filter.call(null,inst_27707,inst_27705__$1);
var inst_27709 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27710__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27709);
var inst_27711 = cljs.core.not_empty.call(null,inst_27710__$1);
var state_27788__$1 = (function (){var statearr_27816 = state_27788;
(statearr_27816[(26)] = inst_27708);

(statearr_27816[(23)] = inst_27706__$1);

(statearr_27816[(24)] = inst_27705__$1);

(statearr_27816[(25)] = inst_27710__$1);

return statearr_27816;
})();
if(cljs.core.truth_(inst_27711)){
var statearr_27817_27897 = state_27788__$1;
(statearr_27817_27897[(1)] = (23));

} else {
var statearr_27818_27898 = state_27788__$1;
(statearr_27818_27898[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (36))){
var state_27788__$1 = state_27788;
var statearr_27819_27899 = state_27788__$1;
(statearr_27819_27899[(2)] = false);

(statearr_27819_27899[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (41))){
var inst_27763 = (state_27788[(20)]);
var inst_27767 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27768 = cljs.core.map.call(null,inst_27767,inst_27763);
var inst_27769 = cljs.core.pr_str.call(null,inst_27768);
var inst_27770 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27769)].join('');
var inst_27771 = figwheel.client.utils.log.call(null,inst_27770);
var state_27788__$1 = state_27788;
var statearr_27820_27900 = state_27788__$1;
(statearr_27820_27900[(2)] = inst_27771);

(statearr_27820_27900[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (43))){
var inst_27764 = (state_27788[(21)]);
var inst_27774 = (state_27788[(2)]);
var inst_27775 = cljs.core.not_empty.call(null,inst_27764);
var state_27788__$1 = (function (){var statearr_27821 = state_27788;
(statearr_27821[(27)] = inst_27774);

return statearr_27821;
})();
if(cljs.core.truth_(inst_27775)){
var statearr_27822_27901 = state_27788__$1;
(statearr_27822_27901[(1)] = (44));

} else {
var statearr_27823_27902 = state_27788__$1;
(statearr_27823_27902[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (29))){
var inst_27708 = (state_27788[(26)]);
var inst_27702 = (state_27788[(19)]);
var inst_27706 = (state_27788[(23)]);
var inst_27742 = (state_27788[(16)]);
var inst_27705 = (state_27788[(24)]);
var inst_27710 = (state_27788[(25)]);
var inst_27738 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27741 = (function (){var all_files = inst_27702;
var res_SINGLEQUOTE_ = inst_27705;
var res = inst_27706;
var files_not_loaded = inst_27708;
var dependencies_that_loaded = inst_27710;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27708,inst_27702,inst_27706,inst_27742,inst_27705,inst_27710,inst_27738,state_val_27789,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27740){
var map__27824 = p__27740;
var map__27824__$1 = ((((!((map__27824 == null)))?((((map__27824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27824):map__27824);
var namespace = cljs.core.get.call(null,map__27824__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27708,inst_27702,inst_27706,inst_27742,inst_27705,inst_27710,inst_27738,state_val_27789,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27742__$1 = cljs.core.group_by.call(null,inst_27741,inst_27708);
var inst_27744 = (inst_27742__$1 == null);
var inst_27745 = cljs.core.not.call(null,inst_27744);
var state_27788__$1 = (function (){var statearr_27826 = state_27788;
(statearr_27826[(28)] = inst_27738);

(statearr_27826[(16)] = inst_27742__$1);

return statearr_27826;
})();
if(inst_27745){
var statearr_27827_27903 = state_27788__$1;
(statearr_27827_27903[(1)] = (32));

} else {
var statearr_27828_27904 = state_27788__$1;
(statearr_27828_27904[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (44))){
var inst_27764 = (state_27788[(21)]);
var inst_27777 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27764);
var inst_27778 = cljs.core.pr_str.call(null,inst_27777);
var inst_27779 = [cljs.core.str("not required: "),cljs.core.str(inst_27778)].join('');
var inst_27780 = figwheel.client.utils.log.call(null,inst_27779);
var state_27788__$1 = state_27788;
var statearr_27829_27905 = state_27788__$1;
(statearr_27829_27905[(2)] = inst_27780);

(statearr_27829_27905[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (6))){
var inst_27683 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27830_27906 = state_27788__$1;
(statearr_27830_27906[(2)] = inst_27683);

(statearr_27830_27906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (28))){
var inst_27708 = (state_27788[(26)]);
var inst_27735 = (state_27788[(2)]);
var inst_27736 = cljs.core.not_empty.call(null,inst_27708);
var state_27788__$1 = (function (){var statearr_27831 = state_27788;
(statearr_27831[(29)] = inst_27735);

return statearr_27831;
})();
if(cljs.core.truth_(inst_27736)){
var statearr_27832_27907 = state_27788__$1;
(statearr_27832_27907[(1)] = (29));

} else {
var statearr_27833_27908 = state_27788__$1;
(statearr_27833_27908[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (25))){
var inst_27706 = (state_27788[(23)]);
var inst_27722 = (state_27788[(2)]);
var inst_27723 = cljs.core.not_empty.call(null,inst_27706);
var state_27788__$1 = (function (){var statearr_27834 = state_27788;
(statearr_27834[(30)] = inst_27722);

return statearr_27834;
})();
if(cljs.core.truth_(inst_27723)){
var statearr_27835_27909 = state_27788__$1;
(statearr_27835_27909[(1)] = (26));

} else {
var statearr_27836_27910 = state_27788__$1;
(statearr_27836_27910[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (34))){
var inst_27757 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
if(cljs.core.truth_(inst_27757)){
var statearr_27837_27911 = state_27788__$1;
(statearr_27837_27911[(1)] = (38));

} else {
var statearr_27838_27912 = state_27788__$1;
(statearr_27838_27912[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (17))){
var state_27788__$1 = state_27788;
var statearr_27839_27913 = state_27788__$1;
(statearr_27839_27913[(2)] = recompile_dependents);

(statearr_27839_27913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (3))){
var state_27788__$1 = state_27788;
var statearr_27840_27914 = state_27788__$1;
(statearr_27840_27914[(2)] = null);

(statearr_27840_27914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (12))){
var inst_27679 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27841_27915 = state_27788__$1;
(statearr_27841_27915[(2)] = inst_27679);

(statearr_27841_27915[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (2))){
var inst_27641 = (state_27788[(13)]);
var inst_27648 = cljs.core.seq.call(null,inst_27641);
var inst_27649 = inst_27648;
var inst_27650 = null;
var inst_27651 = (0);
var inst_27652 = (0);
var state_27788__$1 = (function (){var statearr_27842 = state_27788;
(statearr_27842[(7)] = inst_27651);

(statearr_27842[(8)] = inst_27652);

(statearr_27842[(9)] = inst_27649);

(statearr_27842[(10)] = inst_27650);

return statearr_27842;
})();
var statearr_27843_27916 = state_27788__$1;
(statearr_27843_27916[(2)] = null);

(statearr_27843_27916[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (23))){
var inst_27708 = (state_27788[(26)]);
var inst_27702 = (state_27788[(19)]);
var inst_27706 = (state_27788[(23)]);
var inst_27705 = (state_27788[(24)]);
var inst_27710 = (state_27788[(25)]);
var inst_27713 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27715 = (function (){var all_files = inst_27702;
var res_SINGLEQUOTE_ = inst_27705;
var res = inst_27706;
var files_not_loaded = inst_27708;
var dependencies_that_loaded = inst_27710;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27708,inst_27702,inst_27706,inst_27705,inst_27710,inst_27713,state_val_27789,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27714){
var map__27844 = p__27714;
var map__27844__$1 = ((((!((map__27844 == null)))?((((map__27844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27844):map__27844);
var request_url = cljs.core.get.call(null,map__27844__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27708,inst_27702,inst_27706,inst_27705,inst_27710,inst_27713,state_val_27789,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27716 = cljs.core.reverse.call(null,inst_27710);
var inst_27717 = cljs.core.map.call(null,inst_27715,inst_27716);
var inst_27718 = cljs.core.pr_str.call(null,inst_27717);
var inst_27719 = figwheel.client.utils.log.call(null,inst_27718);
var state_27788__$1 = (function (){var statearr_27846 = state_27788;
(statearr_27846[(31)] = inst_27713);

return statearr_27846;
})();
var statearr_27847_27917 = state_27788__$1;
(statearr_27847_27917[(2)] = inst_27719);

(statearr_27847_27917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (35))){
var state_27788__$1 = state_27788;
var statearr_27848_27918 = state_27788__$1;
(statearr_27848_27918[(2)] = true);

(statearr_27848_27918[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (19))){
var inst_27692 = (state_27788[(12)]);
var inst_27698 = figwheel.client.file_reloading.expand_files.call(null,inst_27692);
var state_27788__$1 = state_27788;
var statearr_27849_27919 = state_27788__$1;
(statearr_27849_27919[(2)] = inst_27698);

(statearr_27849_27919[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (11))){
var state_27788__$1 = state_27788;
var statearr_27850_27920 = state_27788__$1;
(statearr_27850_27920[(2)] = null);

(statearr_27850_27920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (9))){
var inst_27681 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27851_27921 = state_27788__$1;
(statearr_27851_27921[(2)] = inst_27681);

(statearr_27851_27921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (5))){
var inst_27651 = (state_27788[(7)]);
var inst_27652 = (state_27788[(8)]);
var inst_27654 = (inst_27652 < inst_27651);
var inst_27655 = inst_27654;
var state_27788__$1 = state_27788;
if(cljs.core.truth_(inst_27655)){
var statearr_27852_27922 = state_27788__$1;
(statearr_27852_27922[(1)] = (7));

} else {
var statearr_27853_27923 = state_27788__$1;
(statearr_27853_27923[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (14))){
var inst_27662 = (state_27788[(22)]);
var inst_27671 = cljs.core.first.call(null,inst_27662);
var inst_27672 = figwheel.client.file_reloading.eval_body.call(null,inst_27671,opts);
var inst_27673 = cljs.core.next.call(null,inst_27662);
var inst_27649 = inst_27673;
var inst_27650 = null;
var inst_27651 = (0);
var inst_27652 = (0);
var state_27788__$1 = (function (){var statearr_27854 = state_27788;
(statearr_27854[(7)] = inst_27651);

(statearr_27854[(8)] = inst_27652);

(statearr_27854[(9)] = inst_27649);

(statearr_27854[(10)] = inst_27650);

(statearr_27854[(32)] = inst_27672);

return statearr_27854;
})();
var statearr_27855_27924 = state_27788__$1;
(statearr_27855_27924[(2)] = null);

(statearr_27855_27924[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (45))){
var state_27788__$1 = state_27788;
var statearr_27856_27925 = state_27788__$1;
(statearr_27856_27925[(2)] = null);

(statearr_27856_27925[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (26))){
var inst_27708 = (state_27788[(26)]);
var inst_27702 = (state_27788[(19)]);
var inst_27706 = (state_27788[(23)]);
var inst_27705 = (state_27788[(24)]);
var inst_27710 = (state_27788[(25)]);
var inst_27725 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27727 = (function (){var all_files = inst_27702;
var res_SINGLEQUOTE_ = inst_27705;
var res = inst_27706;
var files_not_loaded = inst_27708;
var dependencies_that_loaded = inst_27710;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27708,inst_27702,inst_27706,inst_27705,inst_27710,inst_27725,state_val_27789,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27726){
var map__27857 = p__27726;
var map__27857__$1 = ((((!((map__27857 == null)))?((((map__27857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27857):map__27857);
var namespace = cljs.core.get.call(null,map__27857__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27857__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27708,inst_27702,inst_27706,inst_27705,inst_27710,inst_27725,state_val_27789,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27728 = cljs.core.map.call(null,inst_27727,inst_27706);
var inst_27729 = cljs.core.pr_str.call(null,inst_27728);
var inst_27730 = figwheel.client.utils.log.call(null,inst_27729);
var inst_27731 = (function (){var all_files = inst_27702;
var res_SINGLEQUOTE_ = inst_27705;
var res = inst_27706;
var files_not_loaded = inst_27708;
var dependencies_that_loaded = inst_27710;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27708,inst_27702,inst_27706,inst_27705,inst_27710,inst_27725,inst_27727,inst_27728,inst_27729,inst_27730,state_val_27789,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27708,inst_27702,inst_27706,inst_27705,inst_27710,inst_27725,inst_27727,inst_27728,inst_27729,inst_27730,state_val_27789,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27732 = setTimeout(inst_27731,(10));
var state_27788__$1 = (function (){var statearr_27859 = state_27788;
(statearr_27859[(33)] = inst_27725);

(statearr_27859[(34)] = inst_27730);

return statearr_27859;
})();
var statearr_27860_27926 = state_27788__$1;
(statearr_27860_27926[(2)] = inst_27732);

(statearr_27860_27926[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (16))){
var state_27788__$1 = state_27788;
var statearr_27861_27927 = state_27788__$1;
(statearr_27861_27927[(2)] = reload_dependents);

(statearr_27861_27927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (38))){
var inst_27742 = (state_27788[(16)]);
var inst_27759 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27742);
var state_27788__$1 = state_27788;
var statearr_27862_27928 = state_27788__$1;
(statearr_27862_27928[(2)] = inst_27759);

(statearr_27862_27928[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (30))){
var state_27788__$1 = state_27788;
var statearr_27863_27929 = state_27788__$1;
(statearr_27863_27929[(2)] = null);

(statearr_27863_27929[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (10))){
var inst_27662 = (state_27788[(22)]);
var inst_27664 = cljs.core.chunked_seq_QMARK_.call(null,inst_27662);
var state_27788__$1 = state_27788;
if(inst_27664){
var statearr_27864_27930 = state_27788__$1;
(statearr_27864_27930[(1)] = (13));

} else {
var statearr_27865_27931 = state_27788__$1;
(statearr_27865_27931[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (18))){
var inst_27696 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
if(cljs.core.truth_(inst_27696)){
var statearr_27866_27932 = state_27788__$1;
(statearr_27866_27932[(1)] = (19));

} else {
var statearr_27867_27933 = state_27788__$1;
(statearr_27867_27933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (42))){
var state_27788__$1 = state_27788;
var statearr_27868_27934 = state_27788__$1;
(statearr_27868_27934[(2)] = null);

(statearr_27868_27934[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (37))){
var inst_27754 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27869_27935 = state_27788__$1;
(statearr_27869_27935[(2)] = inst_27754);

(statearr_27869_27935[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (8))){
var inst_27649 = (state_27788[(9)]);
var inst_27662 = (state_27788[(22)]);
var inst_27662__$1 = cljs.core.seq.call(null,inst_27649);
var state_27788__$1 = (function (){var statearr_27870 = state_27788;
(statearr_27870[(22)] = inst_27662__$1);

return statearr_27870;
})();
if(inst_27662__$1){
var statearr_27871_27936 = state_27788__$1;
(statearr_27871_27936[(1)] = (10));

} else {
var statearr_27872_27937 = state_27788__$1;
(statearr_27872_27937[(1)] = (11));

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
}
});})(c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23865__auto__,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23866__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23866__auto____0 = (function (){
var statearr_27876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27876[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23866__auto__);

(statearr_27876[(1)] = (1));

return statearr_27876;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23866__auto____1 = (function (state_27788){
while(true){
var ret_value__23867__auto__ = (function (){try{while(true){
var result__23868__auto__ = switch__23865__auto__.call(null,state_27788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23868__auto__;
}
break;
}
}catch (e27877){if((e27877 instanceof Object)){
var ex__23869__auto__ = e27877;
var statearr_27878_27938 = state_27788;
(statearr_27878_27938[(5)] = ex__23869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27939 = state_27788;
state_27788 = G__27939;
continue;
} else {
return ret_value__23867__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23866__auto__ = function(state_27788){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23866__auto____1.call(this,state_27788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23866__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23866__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23866__auto__;
})()
;})(switch__23865__auto__,c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23979__auto__ = (function (){var statearr_27879 = f__23978__auto__.call(null);
(statearr_27879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23977__auto__);

return statearr_27879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23979__auto__);
});})(c__23977__auto__,map__27634,map__27634__$1,opts,before_jsload,on_jsload,reload_dependents,map__27635,map__27635__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23977__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27942,link){
var map__27945 = p__27942;
var map__27945__$1 = ((((!((map__27945 == null)))?((((map__27945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27945):map__27945);
var file = cljs.core.get.call(null,map__27945__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27945,map__27945__$1,file){
return (function (p1__27940_SHARP_,p2__27941_SHARP_){
if(cljs.core._EQ_.call(null,p1__27940_SHARP_,p2__27941_SHARP_)){
return p1__27940_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27945,map__27945__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27951){
var map__27952 = p__27951;
var map__27952__$1 = ((((!((map__27952 == null)))?((((map__27952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27952):map__27952);
var match_length = cljs.core.get.call(null,map__27952__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27952__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27947_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27947_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27954 = [];
var len__22749__auto___27957 = arguments.length;
var i__22750__auto___27958 = (0);
while(true){
if((i__22750__auto___27958 < len__22749__auto___27957)){
args27954.push((arguments[i__22750__auto___27958]));

var G__27959 = (i__22750__auto___27958 + (1));
i__22750__auto___27958 = G__27959;
continue;
} else {
}
break;
}

var G__27956 = args27954.length;
switch (G__27956) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27954.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27961_SHARP_,p2__27962_SHARP_){
return cljs.core.assoc.call(null,p1__27961_SHARP_,cljs.core.get.call(null,p2__27962_SHARP_,key),p2__27962_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27963){
var map__27966 = p__27963;
var map__27966__$1 = ((((!((map__27966 == null)))?((((map__27966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27966):map__27966);
var f_data = map__27966__$1;
var file = cljs.core.get.call(null,map__27966__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27968,files_msg){
var map__27975 = p__27968;
var map__27975__$1 = ((((!((map__27975 == null)))?((((map__27975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27975):map__27975);
var opts = map__27975__$1;
var on_cssload = cljs.core.get.call(null,map__27975__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27977_27981 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27978_27982 = null;
var count__27979_27983 = (0);
var i__27980_27984 = (0);
while(true){
if((i__27980_27984 < count__27979_27983)){
var f_27985 = cljs.core._nth.call(null,chunk__27978_27982,i__27980_27984);
figwheel.client.file_reloading.reload_css_file.call(null,f_27985);

var G__27986 = seq__27977_27981;
var G__27987 = chunk__27978_27982;
var G__27988 = count__27979_27983;
var G__27989 = (i__27980_27984 + (1));
seq__27977_27981 = G__27986;
chunk__27978_27982 = G__27987;
count__27979_27983 = G__27988;
i__27980_27984 = G__27989;
continue;
} else {
var temp__4657__auto___27990 = cljs.core.seq.call(null,seq__27977_27981);
if(temp__4657__auto___27990){
var seq__27977_27991__$1 = temp__4657__auto___27990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27977_27991__$1)){
var c__22485__auto___27992 = cljs.core.chunk_first.call(null,seq__27977_27991__$1);
var G__27993 = cljs.core.chunk_rest.call(null,seq__27977_27991__$1);
var G__27994 = c__22485__auto___27992;
var G__27995 = cljs.core.count.call(null,c__22485__auto___27992);
var G__27996 = (0);
seq__27977_27981 = G__27993;
chunk__27978_27982 = G__27994;
count__27979_27983 = G__27995;
i__27980_27984 = G__27996;
continue;
} else {
var f_27997 = cljs.core.first.call(null,seq__27977_27991__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27997);

var G__27998 = cljs.core.next.call(null,seq__27977_27991__$1);
var G__27999 = null;
var G__28000 = (0);
var G__28001 = (0);
seq__27977_27981 = G__27998;
chunk__27978_27982 = G__27999;
count__27979_27983 = G__28000;
i__27980_27984 = G__28001;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27975,map__27975__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27975,map__27975__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1466173477960