(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var bd={exports:{}},ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by;function fS(){if(by)return ml;by=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return ml.Fragment=t,ml.jsx=n,ml.jsxs=n,ml}var Ry;function dS(){return Ry||(Ry=1,bd.exports=fS()),bd.exports}var Jt=dS(),Rd={exports:{}},St={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy;function mS(){if(wy)return St;wy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.iterator;function C(D){return D===null||typeof D!="object"?null:(D=I&&D[I]||D["@@iterator"],typeof D=="function"?D:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,W={};function Y(D,$,rt){this.props=D,this.context=$,this.refs=W,this.updater=rt||H}Y.prototype.isReactComponent={},Y.prototype.setState=function(D,$){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,$,"setState")},Y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function mt(){}mt.prototype=Y.prototype;function tt(D,$,rt){this.props=D,this.context=$,this.refs=W,this.updater=rt||H}var it=tt.prototype=new mt;it.constructor=tt,X(it,Y.prototype),it.isPureReactComponent=!0;var ct=Array.isArray,pt={H:null,A:null,T:null,S:null,V:null},bt=Object.prototype.hasOwnProperty;function M(D,$,rt,J,ht,It){return rt=It.ref,{$$typeof:r,type:D,key:$,ref:rt!==void 0?rt:null,props:It}}function S(D,$){return M(D.type,$,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function N(D){var $={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(rt){return $[rt]})}var V=/\/+/g;function k(D,$){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):$.toString(36)}function w(){}function ke(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(w,w):(D.status="pending",D.then(function($){D.status==="pending"&&(D.status="fulfilled",D.value=$)},function($){D.status==="pending"&&(D.status="rejected",D.reason=$)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function re(D,$,rt,J,ht){var It=typeof D;(It==="undefined"||It==="boolean")&&(D=null);var Et=!1;if(D===null)Et=!0;else switch(It){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(D.$$typeof){case r:case t:Et=!0;break;case T:return Et=D._init,re(Et(D._payload),$,rt,J,ht)}}if(Et)return ht=ht(D),Et=J===""?"."+k(D,0):J,ct(ht)?(rt="",Et!=null&&(rt=Et.replace(V,"$&/")+"/"),re(ht,$,rt,"",function(jn){return jn})):ht!=null&&(R(ht)&&(ht=S(ht,rt+(ht.key==null||D&&D.key===ht.key?"":(""+ht.key).replace(V,"$&/")+"/")+Et)),$.push(ht)),1;Et=0;var Ie=J===""?".":J+":";if(ct(D))for(var $t=0;$t<D.length;$t++)J=D[$t],It=Ie+k(J,$t),Et+=re(J,$,rt,It,ht);else if($t=C(D),typeof $t=="function")for(D=$t.call(D),$t=0;!(J=D.next()).done;)J=J.value,It=Ie+k(J,$t++),Et+=re(J,$,rt,It,ht);else if(It==="object"){if(typeof D.then=="function")return re(ke(D),$,rt,J,ht);throw $=String(D),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Et}function j(D,$,rt){if(D==null)return D;var J=[],ht=0;return re(D,J,"","",function(It){return $.call(rt,It,ht++)}),J}function nt(D){if(D._status===-1){var $=D._result;$=$(),$.then(function(rt){(D._status===0||D._status===-1)&&(D._status=1,D._result=rt)},function(rt){(D._status===0||D._status===-1)&&(D._status=2,D._result=rt)}),D._status===-1&&(D._status=0,D._result=$)}if(D._status===1)return D._result.default;throw D._result}var lt=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Lt(){}return St.Children={map:j,forEach:function(D,$,rt){j(D,function(){$.apply(this,arguments)},rt)},count:function(D){var $=0;return j(D,function(){$++}),$},toArray:function(D){return j(D,function($){return $})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},St.Component=Y,St.Fragment=n,St.Profiler=o,St.PureComponent=tt,St.StrictMode=s,St.Suspense=g,St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pt,St.__COMPILER_RUNTIME={__proto__:null,c:function(D){return pt.H.useMemoCache(D)}},St.cache=function(D){return function(){return D.apply(null,arguments)}},St.cloneElement=function(D,$,rt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var J=X({},D.props),ht=D.key,It=void 0;if($!=null)for(Et in $.ref!==void 0&&(It=void 0),$.key!==void 0&&(ht=""+$.key),$)!bt.call($,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&$.ref===void 0||(J[Et]=$[Et]);var Et=arguments.length-2;if(Et===1)J.children=rt;else if(1<Et){for(var Ie=Array(Et),$t=0;$t<Et;$t++)Ie[$t]=arguments[$t+2];J.children=Ie}return M(D.type,ht,void 0,void 0,It,J)},St.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},St.createElement=function(D,$,rt){var J,ht={},It=null;if($!=null)for(J in $.key!==void 0&&(It=""+$.key),$)bt.call($,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ht[J]=$[J]);var Et=arguments.length-2;if(Et===1)ht.children=rt;else if(1<Et){for(var Ie=Array(Et),$t=0;$t<Et;$t++)Ie[$t]=arguments[$t+2];ht.children=Ie}if(D&&D.defaultProps)for(J in Et=D.defaultProps,Et)ht[J]===void 0&&(ht[J]=Et[J]);return M(D,It,void 0,void 0,null,ht)},St.createRef=function(){return{current:null}},St.forwardRef=function(D){return{$$typeof:p,render:D}},St.isValidElement=R,St.lazy=function(D){return{$$typeof:T,_payload:{_status:-1,_result:D},_init:nt}},St.memo=function(D,$){return{$$typeof:_,type:D,compare:$===void 0?null:$}},St.startTransition=function(D){var $=pt.T,rt={};pt.T=rt;try{var J=D(),ht=pt.S;ht!==null&&ht(rt,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(Lt,lt)}catch(It){lt(It)}finally{pt.T=$}},St.unstable_useCacheRefresh=function(){return pt.H.useCacheRefresh()},St.use=function(D){return pt.H.use(D)},St.useActionState=function(D,$,rt){return pt.H.useActionState(D,$,rt)},St.useCallback=function(D,$){return pt.H.useCallback(D,$)},St.useContext=function(D){return pt.H.useContext(D)},St.useDebugValue=function(){},St.useDeferredValue=function(D,$){return pt.H.useDeferredValue(D,$)},St.useEffect=function(D,$,rt){var J=pt.H;if(typeof rt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(D,$)},St.useId=function(){return pt.H.useId()},St.useImperativeHandle=function(D,$,rt){return pt.H.useImperativeHandle(D,$,rt)},St.useInsertionEffect=function(D,$){return pt.H.useInsertionEffect(D,$)},St.useLayoutEffect=function(D,$){return pt.H.useLayoutEffect(D,$)},St.useMemo=function(D,$){return pt.H.useMemo(D,$)},St.useOptimistic=function(D,$){return pt.H.useOptimistic(D,$)},St.useReducer=function(D,$,rt){return pt.H.useReducer(D,$,rt)},St.useRef=function(D){return pt.H.useRef(D)},St.useState=function(D){return pt.H.useState(D)},St.useSyncExternalStore=function(D,$,rt){return pt.H.useSyncExternalStore(D,$,rt)},St.useTransition=function(){return pt.H.useTransition()},St.version="19.1.0",St}var Iy;function _m(){return Iy||(Iy=1,Rd.exports=mS()),Rd.exports}var ai=_m(),wd={exports:{}},pl={},Id={exports:{}},Cd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cy;function pS(){return Cy||(Cy=1,function(r){function t(j,nt){var lt=j.length;j.push(nt);t:for(;0<lt;){var Lt=lt-1>>>1,D=j[Lt];if(0<o(D,nt))j[Lt]=nt,j[lt]=D,lt=Lt;else break t}}function n(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var nt=j[0],lt=j.pop();if(lt!==nt){j[0]=lt;t:for(var Lt=0,D=j.length,$=D>>>1;Lt<$;){var rt=2*(Lt+1)-1,J=j[rt],ht=rt+1,It=j[ht];if(0>o(J,lt))ht<D&&0>o(It,J)?(j[Lt]=It,j[ht]=lt,Lt=ht):(j[Lt]=J,j[rt]=lt,Lt=rt);else if(ht<D&&0>o(It,lt))j[Lt]=It,j[ht]=lt,Lt=ht;else break t}}return nt}function o(j,nt){var lt=j.sortIndex-nt.sortIndex;return lt!==0?lt:j.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var g=[],_=[],T=1,I=null,C=3,H=!1,X=!1,W=!1,Y=!1,mt=typeof setTimeout=="function"?setTimeout:null,tt=typeof clearTimeout=="function"?clearTimeout:null,it=typeof setImmediate<"u"?setImmediate:null;function ct(j){for(var nt=n(_);nt!==null;){if(nt.callback===null)s(_);else if(nt.startTime<=j)s(_),nt.sortIndex=nt.expirationTime,t(g,nt);else break;nt=n(_)}}function pt(j){if(W=!1,ct(j),!X)if(n(g)!==null)X=!0,bt||(bt=!0,k());else{var nt=n(_);nt!==null&&re(pt,nt.startTime-j)}}var bt=!1,M=-1,S=5,R=-1;function N(){return Y?!0:!(r.unstable_now()-R<S)}function V(){if(Y=!1,bt){var j=r.unstable_now();R=j;var nt=!0;try{t:{X=!1,W&&(W=!1,tt(M),M=-1),H=!0;var lt=C;try{e:{for(ct(j),I=n(g);I!==null&&!(I.expirationTime>j&&N());){var Lt=I.callback;if(typeof Lt=="function"){I.callback=null,C=I.priorityLevel;var D=Lt(I.expirationTime<=j);if(j=r.unstable_now(),typeof D=="function"){I.callback=D,ct(j),nt=!0;break e}I===n(g)&&s(g),ct(j)}else s(g);I=n(g)}if(I!==null)nt=!0;else{var $=n(_);$!==null&&re(pt,$.startTime-j),nt=!1}}break t}finally{I=null,C=lt,H=!1}nt=void 0}}finally{nt?k():bt=!1}}}var k;if(typeof it=="function")k=function(){it(V)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,ke=w.port2;w.port1.onmessage=V,k=function(){ke.postMessage(null)}}else k=function(){mt(V,0)};function re(j,nt){M=mt(function(){j(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_next=function(j){switch(C){case 1:case 2:case 3:var nt=3;break;default:nt=C}var lt=C;C=nt;try{return j()}finally{C=lt}},r.unstable_requestPaint=function(){Y=!0},r.unstable_runWithPriority=function(j,nt){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var lt=C;C=j;try{return nt()}finally{C=lt}},r.unstable_scheduleCallback=function(j,nt,lt){var Lt=r.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?Lt+lt:Lt):lt=Lt,j){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=lt+D,j={id:T++,callback:nt,priorityLevel:j,startTime:lt,expirationTime:D,sortIndex:-1},lt>Lt?(j.sortIndex=lt,t(_,j),n(g)===null&&j===n(_)&&(W?(tt(M),M=-1):W=!0,re(pt,lt-Lt))):(j.sortIndex=D,t(g,j),X||H||(X=!0,bt||(bt=!0,k()))),j},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(j){var nt=C;return function(){var lt=C;C=nt;try{return j.apply(this,arguments)}finally{C=lt}}}}(Cd)),Cd}var Dy;function gS(){return Dy||(Dy=1,Id.exports=pS()),Id.exports}var Dd={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oy;function _S(){if(Oy)return Ke;Oy=1;var r=_m();function t(g){var _="https://react.dev/errors/"+g;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)_+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+g+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,_,T){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:I==null?null:""+I,children:g,containerInfo:_,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,_){if(g==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ke.createPortal=function(g,_){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return u(g,_,null,T)},Ke.flushSync=function(g){var _=f.T,T=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=_,s.p=T,s.d.f()}},Ke.preconnect=function(g,_){typeof g=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(g,_))},Ke.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Ke.preinit=function(g,_){if(typeof g=="string"&&_&&typeof _.as=="string"){var T=_.as,I=p(T,_.crossOrigin),C=typeof _.integrity=="string"?_.integrity:void 0,H=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;T==="style"?s.d.S(g,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:I,integrity:C,fetchPriority:H}):T==="script"&&s.d.X(g,{crossOrigin:I,integrity:C,fetchPriority:H,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Ke.preinitModule=function(g,_){if(typeof g=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var T=p(_.as,_.crossOrigin);s.d.M(g,{crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&s.d.M(g)},Ke.preload=function(g,_){if(typeof g=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var T=_.as,I=p(T,_.crossOrigin);s.d.L(g,T,{crossOrigin:I,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Ke.preloadModule=function(g,_){if(typeof g=="string")if(_){var T=p(_.as,_.crossOrigin);s.d.m(g,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else s.d.m(g)},Ke.requestFormReset=function(g){s.d.r(g)},Ke.unstable_batchedUpdates=function(g,_){return g(_)},Ke.useFormState=function(g,_,T){return f.H.useFormState(g,_,T)},Ke.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ke.version="19.1.0",Ke}var Ny;function yS(){if(Ny)return Dd.exports;Ny=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Dd.exports=_S(),Dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My;function vS(){if(My)return pl;My=1;var r=gS(),t=_m(),n=yS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(s(188))}function g(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return p(h),e;if(d===l)return p(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,l=d;break}if(E===l){v=!0,l=h,a=d;break}E=E.sibling}if(!v){for(E=d.child;E;){if(E===a){v=!0,a=d,l=h;break}if(E===l){v=!0,l=d,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var T=Object.assign,I=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),mt=Symbol.for("react.provider"),tt=Symbol.for("react.consumer"),it=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),bt=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var w=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===w?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case Y:return"Profiler";case W:return"StrictMode";case pt:return"Suspense";case bt:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case it:return(e.displayName||"Context")+".Provider";case tt:return(e._context.displayName||"Context")+".Consumer";case ct:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return i=e.displayName||null,i!==null?i:ke(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return ke(e(i))}catch{}}return null}var re=Array.isArray,j=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},Lt=[],D=-1;function $(e){return{current:e}}function rt(e){0>D||(e.current=Lt[D],Lt[D]=null,D--)}function J(e,i){D++,Lt[D]=e.current,e.current=i}var ht=$(null),It=$(null),Et=$(null),Ie=$(null);function $t(e,i){switch(J(Et,i),J(It,e),J(ht,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?J_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=J_(i),e=W_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rt(ht),J(ht,e)}function jn(){rt(ht),rt(It),rt(Et)}function $i(e){e.memoizedState!==null&&J(Ie,e);var i=ht.current,a=W_(i,e.type);i!==a&&(J(It,e),J(ht,a))}function _i(e){It.current===e&&(rt(ht),rt(It)),Ie.current===e&&(rt(Ie),ul._currentValue=lt)}var Qr=Object.prototype.hasOwnProperty,Yr=r.unstable_scheduleCallback,Xr=r.unstable_cancelCallback,so=r.unstable_shouldYield,Kl=r.unstable_requestPaint,En=r.unstable_now,Sh=r.unstable_getCurrentPriorityLevel,ao=r.unstable_ImmediatePriority,Qs=r.unstable_UserBlockingPriority,$r=r.unstable_NormalPriority,bh=r.unstable_LowPriority,Ys=r.unstable_IdlePriority,oo=r.log,Ql=r.unstable_setDisableYieldValue,se=null,Ht=null;function ln(e){if(typeof oo=="function"&&Ql(e),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(se,e)}catch{}}var Fe=Math.clz32?Math.clz32:Zr,Yl=Math.log,Rh=Math.LN2;function Zr(e){return e>>>=0,e===0?32:31-(Yl(e)/Rh|0)|0}var Jr=256,Wr=4194304;function Pn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xs(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=Pn(l):(v&=E,v!==0?h=Pn(v):a||(a=E&~e,a!==0&&(h=Pn(a))))):(E=l&~d,E!==0?h=Pn(E):v!==0?h=Pn(v):a||(a=l&~e,a!==0&&(h=Pn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function ts(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function lo(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uo(){var e=Jr;return Jr<<=1,(Jr&4194048)===0&&(Jr=256),e}function co(){var e=Wr;return Wr<<=1,(Wr&62914560)===0&&(Wr=4194304),e}function yi(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function vi(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ho(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,b=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var F=31-Fe(a),K=1<<F;E[F]=0,b[F]=-1;var z=L[F];if(z!==null)for(L[F]=null,F=0;F<z.length;F++){var B=z[F];B!==null&&(B.lane&=-536870913)}a&=~K}l!==0&&Fn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Fn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Fe(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function fo(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Fe(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function Zi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $s(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ji(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:yy(e.type))}function Xl(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var Wt=Math.random().toString(36).slice(2),ve="__reactFiber$"+Wt,fe="__reactProps$"+Wt,Tn="__reactContainer$"+Wt,mo="__reactEvents$"+Wt,wh="__reactListeners$"+Wt,Wi="__reactHandles$"+Wt,$l="__reactResources$"+Wt,es="__reactMarker$"+Wt;function tr(e){delete e[ve],delete e[fe],delete e[mo],delete e[wh],delete e[Wi]}function Ei(e){var i=e[ve];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Tn]||a[ve]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=iy(e);e!==null;){if(a=e[ve])return a;e=iy(e)}return i}e=a,a=e.parentNode}return null}function Gn(e){if(e=e[ve]||e[Tn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Kn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Ze(e){var i=e[$l];return i||(i=e[$l]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function le(e){e[es]=!0}var po=new Set,Zs={};function kn(e,i){Ti(e,i),Ti(e+"Capture",i)}function Ti(e,i){for(Zs[e]=i,e=0;e<i.length;e++)po.add(i[e])}var Zl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jl={},ns={};function Wl(e){return Qr.call(ns,e)?!0:Qr.call(Jl,e)?!1:Zl.test(e)?ns[e]=!0:(Jl[e]=!0,!1)}function er(e,i,a){if(Wl(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Qn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Ue(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var is,tu;function Ai(e){if(is===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);is=i&&i[1]||"",tu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+is+e+tu}var Js=!1;function Ws(e,i){if(!e||Js)return"";Js=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(B){var z=B}Reflect.construct(e,[],K)}else{try{K.call()}catch(B){z=B}e.call(K.prototype)}}else{try{throw Error()}catch(B){z=B}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],E=d[1];if(v&&E){var b=v.split(`
`),L=E.split(`
`);for(h=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===b.length||h===L.length)for(l=b.length-1,h=L.length-1;1<=l&&0<=h&&b[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(b[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||b[l]!==L[h]){var F=`
`+b[l].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=l&&0<=h);break}}}finally{Js=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ai(a):""}function go(e){switch(e.tag){case 26:case 27:case 5:return Ai(e.type);case 16:return Ai("Lazy");case 13:return Ai("Suspense");case 19:return Ai("SuspenseList");case 0:case 15:return Ws(e.type,!1);case 11:return Ws(e.type.render,!1);case 1:return Ws(e.type,!0);case 31:return Ai("Activity");default:return""}}function ta(e){try{var i="";do i+=go(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Je(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _o(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ih(e){var i=_o(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ea(e){e._valueTracker||(e._valueTracker=Ih(e))}function yo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=_o(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ch=/[\n"\\]/g;function de(e){return e.replace(Ch,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function un(e,i,a,l,h,d,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Je(i)):e.value!==""+Je(i)&&(e.value=""+Je(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?nr(e,v,Je(i)):a!=null?nr(e,v,Je(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Je(E):e.removeAttribute("name")}function ss(e,i,a,l,h,d,v,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Je(a):"",i=i!=null?""+Je(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function nr(e,i,a){i==="number"&&rs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Si(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Je(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Gt(e,i,a){if(i!=null&&(i=""+Je(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Je(a):""}function as(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(re(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Je(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function An(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var os=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function eu(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||os.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function vo(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&eu(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&eu(e,d,i[d])}function Eo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Oh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function na(e){return Oh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var bi=null;function Sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ri=null,wi=null;function To(e){var i=Gn(e);if(i&&(e=i.stateNode)){var a=e[fe]||null;t:switch(e=i.stateNode,i.type){case"input":if(un(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+de(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[fe]||null;if(!h)throw Error(s(90));un(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&yo(l)}break t;case"textarea":Gt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Si(e,!!a.multiple,i,!1)}}}var Yn=!1;function nu(e,i,a){if(Yn)return e(i,a);Yn=!0;try{var l=e(i);return l}finally{if(Yn=!1,(Ri!==null||wi!==null)&&(Xu(),Ri&&(i=Ri,e=wi,wi=Ri=null,To(i),e)))for(i=0;i<e.length;i++)To(e[i])}}function ls(e,i){var a=e.stateNode;if(a===null)return null;var l=a[fe]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bn=!1;if(Un)try{var us={};Object.defineProperty(us,"passive",{get:function(){bn=!0}}),window.addEventListener("test",us,us),window.removeEventListener("test",us,us)}catch{bn=!1}var Xn=null,ir=null,Ii=null;function Ao(){if(Ii)return Ii;var e,i=ir,a=i.length,l,h="value"in Xn?Xn.value:Xn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Ii=h.slice(e,1<l?1-l:void 0)}function $n(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Zn(){return!0}function So(){return!1}function Ce(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Zn:So,this.isPropagationStopped=So,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),i}var Bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=Ce(Bt),cs=T({},Bt,{view:0,detail:0}),iu=Ce(cs),ra,sa,Jn,hs=T({},cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(ra=e.screenX-Jn.screenX,sa=e.screenY-Jn.screenY):sa=ra=0,Jn=e),ra)},movementY:function(e){return"movementY"in e?e.movementY:sa}}),Rn=Ce(hs),ru=T({},hs,{dataTransfer:0}),Nh=Ce(ru),fs=T({},cs,{relatedTarget:0}),aa=Ce(fs),bo=T({},Bt,{animationName:0,elapsedTime:0,pseudoElement:0}),oa=Ce(bo),su=T({},Bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),la=Ce(su),Mh=T({},Bt,{data:0}),Ro=Ce(Mh),ds={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},au={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ou={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wo(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=ou[e])?!!i[e]:!1}function ms(){return wo}var lu=T({},cs,{key:function(e){if(e.key){var i=ds[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=$n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?au[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ms,charCode:function(e){return e.type==="keypress"?$n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ua=Ce(lu),uu=T({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Io=Ce(uu),Ci=T({},cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ms}),cu=Ce(Ci),hu=T({},Bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),fu=Ce(hu),du=T({},hs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ca=Ce(du),We=T({},Bt,{newState:0,oldState:0}),mu=Ce(We),pu=[9,13,27,32],Wn=Un&&"CompositionEvent"in window,c=null;Un&&"documentMode"in document&&(c=document.documentMode);var m=Un&&"TextEvent"in window&&!c,y=Un&&(!Wn||c&&8<c&&11>=c),A=" ",U=!1;function q(e,i){switch(e){case"keyup":return pu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function et(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function Ee(e,i){switch(e){case"compositionend":return et(i);case"keypress":return i.which!==32?null:(U=!0,A);case"textInput":return e=i.data,e===A&&U?null:e;default:return null}}function Pt(e,i){if(Vt)return e==="compositionend"||!Wn&&q(e,i)?(e=Ao(),Ii=ir=Xn=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return y&&i.locale!=="ko"?null:i.data;default:return null}}var De={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Te(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!De[e.type]:i==="textarea"}function Di(e,i,a,l){Ri?wi?wi.push(l):wi=[l]:Ri=l,i=ec(i,"onChange"),0<i.length&&(a=new ia("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var xe=null,ti=null;function Co(e){Q_(e,0)}function gu(e){var i=Kn(e);if(yo(i))return e}function mp(e,i){if(e==="change")return i}var pp=!1;if(Un){var Vh;if(Un){var Ph="oninput"in document;if(!Ph){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),Ph=typeof gp.oninput=="function"}Vh=Ph}else Vh=!1;pp=Vh&&(!document.documentMode||9<document.documentMode)}function _p(){xe&&(xe.detachEvent("onpropertychange",yp),ti=xe=null)}function yp(e){if(e.propertyName==="value"&&gu(ti)){var i=[];Di(i,ti,e,Sn(e)),nu(Co,i)}}function H0(e,i,a){e==="focusin"?(_p(),xe=i,ti=a,xe.attachEvent("onpropertychange",yp)):e==="focusout"&&_p()}function j0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gu(ti)}function F0(e,i){if(e==="click")return gu(i)}function G0(e,i){if(e==="input"||e==="change")return gu(i)}function K0(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var cn=typeof Object.is=="function"?Object.is:K0;function Do(e,i){if(cn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Qr.call(i,h)||!cn(e[h],i[h]))return!1}return!0}function vp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ep(e,i){var a=vp(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=vp(a)}}function Tp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Tp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Ap(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=rs(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=rs(e.document)}return i}function kh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Q0=Un&&"documentMode"in document&&11>=document.documentMode,ha=null,Uh=null,Oo=null,xh=!1;function Sp(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xh||ha==null||ha!==rs(l)||(l=ha,"selectionStart"in l&&kh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Oo&&Do(Oo,l)||(Oo=l,l=ec(Uh,"onSelect"),0<l.length&&(i=new ia("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=ha)))}function ps(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var fa={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionrun:ps("Transition","TransitionRun"),transitionstart:ps("Transition","TransitionStart"),transitioncancel:ps("Transition","TransitionCancel"),transitionend:ps("Transition","TransitionEnd")},Lh={},bp={};Un&&(bp=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);function gs(e){if(Lh[e])return Lh[e];if(!fa[e])return e;var i=fa[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in bp)return Lh[e]=i[a];return e}var Rp=gs("animationend"),wp=gs("animationiteration"),Ip=gs("animationstart"),Y0=gs("transitionrun"),X0=gs("transitionstart"),$0=gs("transitioncancel"),Cp=gs("transitionend"),Dp=new Map,zh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zh.push("scrollEnd");function xn(e,i){Dp.set(e,i),kn(i,[e])}var Op=new WeakMap;function wn(e,i){if(typeof e=="object"&&e!==null){var a=Op.get(e);return a!==void 0?a:(i={value:e,source:i,stack:ta(i)},Op.set(e,i),i)}return{value:e,source:i,stack:ta(i)}}var In=[],da=0,Bh=0;function _u(){for(var e=da,i=Bh=da=0;i<e;){var a=In[i];In[i++]=null;var l=In[i];In[i++]=null;var h=In[i];In[i++]=null;var d=In[i];if(In[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Np(a,h,d)}}function yu(e,i,a,l){In[da++]=e,In[da++]=i,In[da++]=a,In[da++]=l,Bh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function qh(e,i,a,l){return yu(e,i,a,l),vu(e)}function ma(e,i){return yu(e,null,null,i),vu(e)}function Np(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-Fe(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function vu(e){if(50<el)throw el=0,Yf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var pa={};function Z0(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,i,a,l){return new Z0(e,i,a,l)}function Hh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,i){var a=e.alternate;return a===null?(a=hn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Mp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Eu(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")Hh(e)&&(v=1);else if(typeof e=="string")v=WA(e,a,ht.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=hn(31,a,i,h),e.elementType=R,e.lanes=d,e;case X:return _s(a.children,h,d,i);case W:v=8,h|=24;break;case Y:return e=hn(12,a,i,h|2),e.elementType=Y,e.lanes=d,e;case pt:return e=hn(13,a,i,h),e.elementType=pt,e.lanes=d,e;case bt:return e=hn(19,a,i,h),e.elementType=bt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mt:case it:v=10;break t;case tt:v=9;break t;case ct:v=11;break t;case M:v=14;break t;case S:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=hn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function _s(e,i,a,l){return e=hn(7,e,l,i),e.lanes=a,e}function jh(e,i,a){return e=hn(6,e,null,i),e.lanes=a,e}function Fh(e,i,a){return i=hn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var ga=[],_a=0,Tu=null,Au=0,Cn=[],Dn=0,ys=null,Ni=1,Mi="";function vs(e,i){ga[_a++]=Au,ga[_a++]=Tu,Tu=e,Au=i}function Vp(e,i,a){Cn[Dn++]=Ni,Cn[Dn++]=Mi,Cn[Dn++]=ys,ys=e;var l=Ni;e=Mi;var h=32-Fe(l)-1;l&=~(1<<h),a+=1;var d=32-Fe(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Ni=1<<32-Fe(i)+h|a<<h|l,Mi=d+e}else Ni=1<<d|a<<h|l,Mi=e}function Gh(e){e.return!==null&&(vs(e,1),Vp(e,1,0))}function Kh(e){for(;e===Tu;)Tu=ga[--_a],ga[_a]=null,Au=ga[--_a],ga[_a]=null;for(;e===ys;)ys=Cn[--Dn],Cn[Dn]=null,Mi=Cn[--Dn],Cn[Dn]=null,Ni=Cn[--Dn],Cn[Dn]=null}var tn=null,ae=null,zt=!1,Es=null,ei=!1,Qh=Error(s(519));function Ts(e){var i=Error(s(418,""));throw Vo(wn(i,e)),Qh}function Pp(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[ve]=e,i[fe]=l,a){case"dialog":Ot("cancel",i),Ot("close",i);break;case"iframe":case"object":case"embed":Ot("load",i);break;case"video":case"audio":for(a=0;a<il.length;a++)Ot(il[a],i);break;case"source":Ot("error",i);break;case"img":case"image":case"link":Ot("error",i),Ot("load",i);break;case"details":Ot("toggle",i);break;case"input":Ot("invalid",i),ss(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ea(i);break;case"select":Ot("invalid",i);break;case"textarea":Ot("invalid",i),as(i,l.value,l.defaultValue,l.children),ea(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||Z_(i.textContent,a)?(l.popover!=null&&(Ot("beforetoggle",i),Ot("toggle",i)),l.onScroll!=null&&Ot("scroll",i),l.onScrollEnd!=null&&Ot("scrollend",i),l.onClick!=null&&(i.onclick=nc),i=!0):i=!1,i||Ts(e)}function kp(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 13:ei=!1;return;case 27:case 3:ei=!0;return;default:tn=tn.return}}function No(e){if(e!==tn)return!1;if(!zt)return kp(e),zt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||cd(e.type,e.memoizedProps)),a=!a),a&&ae&&Ts(e),kp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){ae=zn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}ae=null}}else i===27?(i=ae,vr(e.type)?(e=md,md=null,ae=e):ae=i):ae=tn?zn(e.stateNode.nextSibling):null;return!0}function Mo(){ae=tn=null,zt=!1}function Up(){var e=Es;return e!==null&&(sn===null?sn=e:sn.push.apply(sn,e),Es=null),e}function Vo(e){Es===null?Es=[e]:Es.push(e)}var Yh=$(null),As=null,Vi=null;function rr(e,i,a){J(Yh,i._currentValue),i._currentValue=a}function Pi(e){e._currentValue=Yh.current,rt(Yh)}function Xh(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function $h(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var b=0;b<i.length;b++)if(E.context===i[b]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),Xh(d.return,a,e),l||(v=null);break t}d=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Xh(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Po(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;cn(h.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(h===Ie.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(ul):e=[ul])}h=h.return}e!==null&&$h(i,e,a,l),i.flags|=262144}function Su(e){for(e=e.firstContext;e!==null;){if(!cn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ss(e){As=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ge(e){return xp(As,e)}function bu(e,i){return As===null&&Ss(e),xp(e,i)}function xp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(s(308));Vi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Vi=Vi.next=i;return a}var J0=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},W0=r.unstable_scheduleCallback,tA=r.unstable_NormalPriority,Ae={$$typeof:it,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zh(){return{controller:new J0,data:new Map,refCount:0}}function ko(e){e.refCount--,e.refCount===0&&W0(tA,function(){e.controller.abort()})}var Uo=null,Jh=0,ya=0,va=null;function eA(e,i){if(Uo===null){var a=Uo=[];Jh=0,ya=ed(),va={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Jh++,i.then(Lp,Lp),i}function Lp(){if(--Jh===0&&Uo!==null){va!==null&&(va.status="fulfilled");var e=Uo;Uo=null,ya=0,va=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function nA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var zp=j.S;j.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&eA(e,i),zp!==null&&zp(e,i)};var bs=$(null);function Wh(){var e=bs.current;return e!==null?e:Zt.pooledCache}function Ru(e,i){i===null?J(bs,bs.current):J(bs,i.pool)}function Bp(){var e=Wh();return e===null?null:{parent:Ae._currentValue,pool:e}}var xo=Error(s(460)),qp=Error(s(474)),wu=Error(s(542)),tf={then:function(){}};function Hp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Iu(){}function jp(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Iu,Iu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Gp(e),e;default:if(typeof i.status=="string")i.then(Iu,Iu);else{if(e=Zt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Gp(e),e}throw Lo=i,xo}}var Lo=null;function Fp(){if(Lo===null)throw Error(s(459));var e=Lo;return Lo=null,e}function Gp(e){if(e===xo||e===wu)throw Error(s(483))}var sr=!1;function ef(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ar(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function or(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(jt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=vu(e),Np(e,null,a),i}return yu(e,l,i,a),vu(e)}function zo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,fo(e,a)}}function rf(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var sf=!1;function Bo(){if(sf){var e=va;if(e!==null)throw e}}function qo(e,i,a,l){sf=!1;var h=e.updateQueue;sr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var b=E,L=b.next;b.next=null,v===null?d=L:v.next=L,v=b;var F=e.alternate;F!==null&&(F=F.updateQueue,E=F.lastBaseUpdate,E!==v&&(E===null?F.firstBaseUpdate=L:E.next=L,F.lastBaseUpdate=b))}if(d!==null){var K=h.baseState;v=0,F=L=b=null,E=d;do{var z=E.lane&-536870913,B=z!==E.lane;if(B?(kt&z)===z:(l&z)===z){z!==0&&z===ya&&(sf=!0),F!==null&&(F=F.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var yt=e,dt=E;z=i;var Yt=a;switch(dt.tag){case 1:if(yt=dt.payload,typeof yt=="function"){K=yt.call(Yt,K,z);break t}K=yt;break t;case 3:yt.flags=yt.flags&-65537|128;case 0:if(yt=dt.payload,z=typeof yt=="function"?yt.call(Yt,K,z):yt,z==null)break t;K=T({},K,z);break t;case 2:sr=!0}}z=E.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},F===null?(L=F=B,b=K):F=F.next=B,v|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;B=E,E=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);F===null&&(b=K),h.baseState=b,h.firstBaseUpdate=L,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),pr|=v,e.lanes=v,e.memoizedState=K}}function Kp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Qp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Kp(a[e],i)}var Ea=$(null),Cu=$(0);function Yp(e,i){e=qi,J(Cu,e),J(Ea,i),qi=e|i.baseLanes}function af(){J(Cu,qi),J(Ea,Ea.current)}function of(){qi=Cu.current,rt(Ea),rt(Cu)}var lr=0,Rt=null,Kt=null,me=null,Du=!1,Ta=!1,Rs=!1,Ou=0,Ho=0,Aa=null,iA=0;function ue(){throw Error(s(321))}function lf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!cn(e[a],i[a]))return!1;return!0}function uf(e,i,a,l,h,d){return lr=d,Rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,j.H=e===null||e.memoizedState===null?Ng:Mg,Rs=!1,d=a(l,h),Rs=!1,Ta&&(d=$p(i,a,l,h)),Xp(e),d}function Xp(e){j.H=Uu;var i=Kt!==null&&Kt.next!==null;if(lr=0,me=Kt=Rt=null,Du=!1,Ho=0,Aa=null,i)throw Error(s(300));e===null||Oe||(e=e.dependencies,e!==null&&Su(e)&&(Oe=!0))}function $p(e,i,a,l){Rt=e;var h=0;do{if(Ta&&(Aa=null),Ho=0,Ta=!1,25<=h)throw Error(s(301));if(h+=1,me=Kt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}j.H=cA,d=i(a,l)}while(Ta);return d}function rA(){var e=j.H,i=e.useState()[0];return i=typeof i.then=="function"?jo(i):i,e=e.useState()[0],(Kt!==null?Kt.memoizedState:null)!==e&&(Rt.flags|=1024),i}function cf(){var e=Ou!==0;return Ou=0,e}function hf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function ff(e){if(Du){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Du=!1}lr=0,me=Kt=Rt=null,Ta=!1,Ho=Ou=0,Aa=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?Rt.memoizedState=me=e:me=me.next=e,me}function pe(){if(Kt===null){var e=Rt.alternate;e=e!==null?e.memoizedState:null}else e=Kt.next;var i=me===null?Rt.memoizedState:me.next;if(i!==null)me=i,Kt=e;else{if(e===null)throw Rt.alternate===null?Error(s(467)):Error(s(310));Kt=e,e={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},me===null?Rt.memoizedState=me=e:me=me.next=e}return me}function df(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var i=Ho;return Ho+=1,Aa===null&&(Aa=[]),e=jp(Aa,e,i),i=Rt,(me===null?i.memoizedState:me.next)===null&&(i=i.alternate,j.H=i===null||i.memoizedState===null?Ng:Mg),e}function Nu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jo(e);if(e.$$typeof===it)return Ge(e)}throw Error(s(438,String(e)))}function mf(e){var i=null,a=Rt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Rt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=df(),Rt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=N;return i.index++,a}function ki(e,i){return typeof i=="function"?i(e):i}function Mu(e){var i=pe();return pf(i,Kt,e)}function pf(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var E=v=null,b=null,L=i,F=!1;do{var K=L.lane&-536870913;if(K!==L.lane?(kt&K)===K:(lr&K)===K){var z=L.revertLane;if(z===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),K===ya&&(F=!0);else if((lr&z)===z){L=L.next,z===ya&&(F=!0);continue}else K={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},b===null?(E=b=K,v=d):b=b.next=K,Rt.lanes|=z,pr|=z;K=L.action,Rs&&a(d,K),d=L.hasEagerState?L.eagerState:a(d,K)}else z={lane:K,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},b===null?(E=b=z,v=d):b=b.next=z,Rt.lanes|=K,pr|=K;L=L.next}while(L!==null&&L!==i);if(b===null?v=d:b.next=E,!cn(d,e.memoizedState)&&(Oe=!0,F&&(a=va,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=b,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function gf(e){var i=pe(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);cn(d,i.memoizedState)||(Oe=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Zp(e,i,a){var l=Rt,h=pe(),d=zt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!cn((Kt||h).memoizedState,a);v&&(h.memoizedState=a,Oe=!0),h=h.queue;var E=tg.bind(null,l,h,e);if(Fo(2048,8,E,[e]),h.getSnapshot!==i||v||me!==null&&me.memoizedState.tag&1){if(l.flags|=2048,Sa(9,Vu(),Wp.bind(null,l,h,a,i),null),Zt===null)throw Error(s(349));d||(lr&124)!==0||Jp(l,i,a)}return a}function Jp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Rt.updateQueue,i===null?(i=df(),Rt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Wp(e,i,a,l){i.value=a,i.getSnapshot=l,eg(i)&&ng(e)}function tg(e,i,a){return a(function(){eg(i)&&ng(e)})}function eg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!cn(e,a)}catch{return!0}}function ng(e){var i=ma(e,2);i!==null&&gn(i,e,2)}function _f(e){var i=nn();if(typeof e=="function"){var a=e;if(e=a(),Rs){ln(!0);try{a()}finally{ln(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},i}function ig(e,i,a,l){return e.baseState=a,pf(e,Kt,typeof l=="function"?l:ki)}function sA(e,i,a,l,h){if(ku(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};j.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,rg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function rg(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=j.T,v={};j.T=v;try{var E=a(h,l),b=j.S;b!==null&&b(v,E),sg(e,i,E)}catch(L){yf(e,i,L)}finally{j.T=d}}else try{d=a(h,l),sg(e,i,d)}catch(L){yf(e,i,L)}}function sg(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ag(e,i,l)},function(l){return yf(e,i,l)}):ag(e,i,a)}function ag(e,i,a){i.status="fulfilled",i.value=a,og(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,rg(e,a)))}function yf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,og(i),i=i.next;while(i!==l)}e.action=null}function og(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function lg(e,i){return i}function ug(e,i){if(zt){var a=Zt.formState;if(a!==null){t:{var l=Rt;if(zt){if(ae){e:{for(var h=ae,d=ei;h.nodeType!==8;){if(!d){h=null;break e}if(h=zn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ae=zn(h.nextSibling),l=h.data==="F!";break t}}Ts(l)}l=!1}l&&(i=a[0])}}return a=nn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lg,lastRenderedState:i},a.queue=l,a=Cg.bind(null,Rt,l),l.dispatch=a,l=_f(!1),d=Sf.bind(null,Rt,!1,l.queue),l=nn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=sA.bind(null,Rt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function cg(e){var i=pe();return hg(i,Kt,e)}function hg(e,i,a){if(i=pf(e,i,lg)[0],e=Mu(ki)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=jo(i)}catch(v){throw v===xo?wu:v}else l=i;i=pe();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Rt.flags|=2048,Sa(9,Vu(),aA.bind(null,h,a),null)),[l,d,e]}function aA(e,i){e.action=i}function fg(e){var i=pe(),a=Kt;if(a!==null)return hg(i,a,e);pe(),i=i.memoizedState,a=pe();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Sa(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Rt.updateQueue,i===null&&(i=df(),Rt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Vu(){return{destroy:void 0,resource:void 0}}function dg(){return pe().memoizedState}function Pu(e,i,a,l){var h=nn();l=l===void 0?null:l,Rt.flags|=e,h.memoizedState=Sa(1|i,Vu(),a,l)}function Fo(e,i,a,l){var h=pe();l=l===void 0?null:l;var d=h.memoizedState.inst;Kt!==null&&l!==null&&lf(l,Kt.memoizedState.deps)?h.memoizedState=Sa(i,d,a,l):(Rt.flags|=e,h.memoizedState=Sa(1|i,d,a,l))}function mg(e,i){Pu(8390656,8,e,i)}function pg(e,i){Fo(2048,8,e,i)}function gg(e,i){return Fo(4,2,e,i)}function _g(e,i){return Fo(4,4,e,i)}function yg(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function vg(e,i,a){a=a!=null?a.concat([e]):null,Fo(4,4,yg.bind(null,i,e),a)}function vf(){}function Eg(e,i){var a=pe();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&lf(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Tg(e,i){var a=pe();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&lf(i,l[1]))return l[0];if(l=e(),Rs){ln(!0);try{e()}finally{ln(!1)}}return a.memoizedState=[l,i],l}function Ef(e,i,a){return a===void 0||(lr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=b_(),Rt.lanes|=e,pr|=e,a)}function Ag(e,i,a,l){return cn(a,i)?a:Ea.current!==null?(e=Ef(e,a,l),cn(e,i)||(Oe=!0),e):(lr&42)===0?(Oe=!0,e.memoizedState=a):(e=b_(),Rt.lanes|=e,pr|=e,i)}function Sg(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=j.T,E={};j.T=E,Sf(e,!1,i,a);try{var b=h(),L=j.S;if(L!==null&&L(E,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var F=nA(b,l);Go(e,i,F,pn(e))}else Go(e,i,l,pn(e))}catch(K){Go(e,i,{then:function(){},status:"rejected",reason:K},pn())}finally{nt.p=d,j.T=v}}function oA(){}function Tf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=bg(e).queue;Sg(e,h,i,lt,a===null?oA:function(){return Rg(e),a(l)})}function bg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:lt},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Rg(e){var i=bg(e).next.queue;Go(e,i,{},pn())}function Af(){return Ge(ul)}function wg(){return pe().memoizedState}function Ig(){return pe().memoizedState}function lA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=pn();e=ar(a);var l=or(i,e,a);l!==null&&(gn(l,i,a),zo(l,i,a)),i={cache:Zh()},e.payload=i;return}i=i.return}}function uA(e,i,a){var l=pn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ku(e)?Dg(i,a):(a=qh(e,i,a,l),a!==null&&(gn(a,e,l),Og(a,i,l)))}function Cg(e,i,a){var l=pn();Go(e,i,a,l)}function Go(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ku(e))Dg(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,E=d(v,a);if(h.hasEagerState=!0,h.eagerState=E,cn(E,v))return yu(e,i,h,0),Zt===null&&_u(),!1}catch{}finally{}if(a=qh(e,i,h,l),a!==null)return gn(a,e,l),Og(a,i,l),!0}return!1}function Sf(e,i,a,l){if(l={lane:2,revertLane:ed(),action:l,hasEagerState:!1,eagerState:null,next:null},ku(e)){if(i)throw Error(s(479))}else i=qh(e,a,l,2),i!==null&&gn(i,e,2)}function ku(e){var i=e.alternate;return e===Rt||i!==null&&i===Rt}function Dg(e,i){Ta=Du=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Og(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,fo(e,a)}}var Uu={readContext:Ge,use:Nu,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useLayoutEffect:ue,useInsertionEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useSyncExternalStore:ue,useId:ue,useHostTransitionStatus:ue,useFormState:ue,useActionState:ue,useOptimistic:ue,useMemoCache:ue,useCacheRefresh:ue},Ng={readContext:Ge,use:Nu,useCallback:function(e,i){return nn().memoizedState=[e,i===void 0?null:i],e},useContext:Ge,useEffect:mg,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Pu(4194308,4,yg.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Pu(4194308,4,e,i)},useInsertionEffect:function(e,i){Pu(4,2,e,i)},useMemo:function(e,i){var a=nn();i=i===void 0?null:i;var l=e();if(Rs){ln(!0);try{e()}finally{ln(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=nn();if(a!==void 0){var h=a(i);if(Rs){ln(!0);try{a(i)}finally{ln(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=uA.bind(null,Rt,e),[l.memoizedState,e]},useRef:function(e){var i=nn();return e={current:e},i.memoizedState=e},useState:function(e){e=_f(e);var i=e.queue,a=Cg.bind(null,Rt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:vf,useDeferredValue:function(e,i){var a=nn();return Ef(a,e,i)},useTransition:function(){var e=_f(!1);return e=Sg.bind(null,Rt,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Rt,h=nn();if(zt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Zt===null)throw Error(s(349));(kt&124)!==0||Jp(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,mg(tg.bind(null,l,d,e),[e]),l.flags|=2048,Sa(9,Vu(),Wp.bind(null,l,d,a,i),null),a},useId:function(){var e=nn(),i=Zt.identifierPrefix;if(zt){var a=Mi,l=Ni;a=(l&~(1<<32-Fe(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Ou++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=iA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Af,useFormState:ug,useActionState:ug,useOptimistic:function(e){var i=nn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Sf.bind(null,Rt,!0,a),a.dispatch=i,[e,i]},useMemoCache:mf,useCacheRefresh:function(){return nn().memoizedState=lA.bind(null,Rt)}},Mg={readContext:Ge,use:Nu,useCallback:Eg,useContext:Ge,useEffect:pg,useImperativeHandle:vg,useInsertionEffect:gg,useLayoutEffect:_g,useMemo:Tg,useReducer:Mu,useRef:dg,useState:function(){return Mu(ki)},useDebugValue:vf,useDeferredValue:function(e,i){var a=pe();return Ag(a,Kt.memoizedState,e,i)},useTransition:function(){var e=Mu(ki)[0],i=pe().memoizedState;return[typeof e=="boolean"?e:jo(e),i]},useSyncExternalStore:Zp,useId:wg,useHostTransitionStatus:Af,useFormState:cg,useActionState:cg,useOptimistic:function(e,i){var a=pe();return ig(a,Kt,e,i)},useMemoCache:mf,useCacheRefresh:Ig},cA={readContext:Ge,use:Nu,useCallback:Eg,useContext:Ge,useEffect:pg,useImperativeHandle:vg,useInsertionEffect:gg,useLayoutEffect:_g,useMemo:Tg,useReducer:gf,useRef:dg,useState:function(){return gf(ki)},useDebugValue:vf,useDeferredValue:function(e,i){var a=pe();return Kt===null?Ef(a,e,i):Ag(a,Kt.memoizedState,e,i)},useTransition:function(){var e=gf(ki)[0],i=pe().memoizedState;return[typeof e=="boolean"?e:jo(e),i]},useSyncExternalStore:Zp,useId:wg,useHostTransitionStatus:Af,useFormState:fg,useActionState:fg,useOptimistic:function(e,i){var a=pe();return Kt!==null?ig(a,Kt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:mf,useCacheRefresh:Ig},ba=null,Ko=0;function xu(e){var i=Ko;return Ko+=1,ba===null&&(ba=[]),jp(ba,e,i)}function Qo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Lu(e,i){throw i.$$typeof===I?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Vg(e){var i=e._init;return i(e._payload)}function Pg(e){function i(P,O){if(e){var x=P.deletions;x===null?(P.deletions=[O],P.flags|=16):x.push(O)}}function a(P,O){if(!e)return null;for(;O!==null;)i(P,O),O=O.sibling;return null}function l(P){for(var O=new Map;P!==null;)P.key!==null?O.set(P.key,P):O.set(P.index,P),P=P.sibling;return O}function h(P,O){return P=Oi(P,O),P.index=0,P.sibling=null,P}function d(P,O,x){return P.index=x,e?(x=P.alternate,x!==null?(x=x.index,x<O?(P.flags|=67108866,O):x):(P.flags|=67108866,O)):(P.flags|=1048576,O)}function v(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function E(P,O,x,G){return O===null||O.tag!==6?(O=jh(x,P.mode,G),O.return=P,O):(O=h(O,x),O.return=P,O)}function b(P,O,x,G){var at=x.type;return at===X?F(P,O,x.props.children,G,x.key):O!==null&&(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===S&&Vg(at)===O.type)?(O=h(O,x.props),Qo(O,x),O.return=P,O):(O=Eu(x.type,x.key,x.props,null,P.mode,G),Qo(O,x),O.return=P,O)}function L(P,O,x,G){return O===null||O.tag!==4||O.stateNode.containerInfo!==x.containerInfo||O.stateNode.implementation!==x.implementation?(O=Fh(x,P.mode,G),O.return=P,O):(O=h(O,x.children||[]),O.return=P,O)}function F(P,O,x,G,at){return O===null||O.tag!==7?(O=_s(x,P.mode,G,at),O.return=P,O):(O=h(O,x),O.return=P,O)}function K(P,O,x){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=jh(""+O,P.mode,x),O.return=P,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case C:return x=Eu(O.type,O.key,O.props,null,P.mode,x),Qo(x,O),x.return=P,x;case H:return O=Fh(O,P.mode,x),O.return=P,O;case S:var G=O._init;return O=G(O._payload),K(P,O,x)}if(re(O)||k(O))return O=_s(O,P.mode,x,null),O.return=P,O;if(typeof O.then=="function")return K(P,xu(O),x);if(O.$$typeof===it)return K(P,bu(P,O),x);Lu(P,O)}return null}function z(P,O,x,G){var at=O!==null?O.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return at!==null?null:E(P,O,""+x,G);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case C:return x.key===at?b(P,O,x,G):null;case H:return x.key===at?L(P,O,x,G):null;case S:return at=x._init,x=at(x._payload),z(P,O,x,G)}if(re(x)||k(x))return at!==null?null:F(P,O,x,G,null);if(typeof x.then=="function")return z(P,O,xu(x),G);if(x.$$typeof===it)return z(P,O,bu(P,x),G);Lu(P,x)}return null}function B(P,O,x,G,at){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return P=P.get(x)||null,E(O,P,""+G,at);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case C:return P=P.get(G.key===null?x:G.key)||null,b(O,P,G,at);case H:return P=P.get(G.key===null?x:G.key)||null,L(O,P,G,at);case S:var Ct=G._init;return G=Ct(G._payload),B(P,O,x,G,at)}if(re(G)||k(G))return P=P.get(x)||null,F(O,P,G,at,null);if(typeof G.then=="function")return B(P,O,x,xu(G),at);if(G.$$typeof===it)return B(P,O,x,bu(O,G),at);Lu(O,G)}return null}function yt(P,O,x,G){for(var at=null,Ct=null,ot=O,gt=O=0,Me=null;ot!==null&&gt<x.length;gt++){ot.index>gt?(Me=ot,ot=null):Me=ot.sibling;var xt=z(P,ot,x[gt],G);if(xt===null){ot===null&&(ot=Me);break}e&&ot&&xt.alternate===null&&i(P,ot),O=d(xt,O,gt),Ct===null?at=xt:Ct.sibling=xt,Ct=xt,ot=Me}if(gt===x.length)return a(P,ot),zt&&vs(P,gt),at;if(ot===null){for(;gt<x.length;gt++)ot=K(P,x[gt],G),ot!==null&&(O=d(ot,O,gt),Ct===null?at=ot:Ct.sibling=ot,Ct=ot);return zt&&vs(P,gt),at}for(ot=l(ot);gt<x.length;gt++)Me=B(ot,P,gt,x[gt],G),Me!==null&&(e&&Me.alternate!==null&&ot.delete(Me.key===null?gt:Me.key),O=d(Me,O,gt),Ct===null?at=Me:Ct.sibling=Me,Ct=Me);return e&&ot.forEach(function(br){return i(P,br)}),zt&&vs(P,gt),at}function dt(P,O,x,G){if(x==null)throw Error(s(151));for(var at=null,Ct=null,ot=O,gt=O=0,Me=null,xt=x.next();ot!==null&&!xt.done;gt++,xt=x.next()){ot.index>gt?(Me=ot,ot=null):Me=ot.sibling;var br=z(P,ot,xt.value,G);if(br===null){ot===null&&(ot=Me);break}e&&ot&&br.alternate===null&&i(P,ot),O=d(br,O,gt),Ct===null?at=br:Ct.sibling=br,Ct=br,ot=Me}if(xt.done)return a(P,ot),zt&&vs(P,gt),at;if(ot===null){for(;!xt.done;gt++,xt=x.next())xt=K(P,xt.value,G),xt!==null&&(O=d(xt,O,gt),Ct===null?at=xt:Ct.sibling=xt,Ct=xt);return zt&&vs(P,gt),at}for(ot=l(ot);!xt.done;gt++,xt=x.next())xt=B(ot,P,gt,xt.value,G),xt!==null&&(e&&xt.alternate!==null&&ot.delete(xt.key===null?gt:xt.key),O=d(xt,O,gt),Ct===null?at=xt:Ct.sibling=xt,Ct=xt);return e&&ot.forEach(function(hS){return i(P,hS)}),zt&&vs(P,gt),at}function Yt(P,O,x,G){if(typeof x=="object"&&x!==null&&x.type===X&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case C:t:{for(var at=x.key;O!==null;){if(O.key===at){if(at=x.type,at===X){if(O.tag===7){a(P,O.sibling),G=h(O,x.props.children),G.return=P,P=G;break t}}else if(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===S&&Vg(at)===O.type){a(P,O.sibling),G=h(O,x.props),Qo(G,x),G.return=P,P=G;break t}a(P,O);break}else i(P,O);O=O.sibling}x.type===X?(G=_s(x.props.children,P.mode,G,x.key),G.return=P,P=G):(G=Eu(x.type,x.key,x.props,null,P.mode,G),Qo(G,x),G.return=P,P=G)}return v(P);case H:t:{for(at=x.key;O!==null;){if(O.key===at)if(O.tag===4&&O.stateNode.containerInfo===x.containerInfo&&O.stateNode.implementation===x.implementation){a(P,O.sibling),G=h(O,x.children||[]),G.return=P,P=G;break t}else{a(P,O);break}else i(P,O);O=O.sibling}G=Fh(x,P.mode,G),G.return=P,P=G}return v(P);case S:return at=x._init,x=at(x._payload),Yt(P,O,x,G)}if(re(x))return yt(P,O,x,G);if(k(x)){if(at=k(x),typeof at!="function")throw Error(s(150));return x=at.call(x),dt(P,O,x,G)}if(typeof x.then=="function")return Yt(P,O,xu(x),G);if(x.$$typeof===it)return Yt(P,O,bu(P,x),G);Lu(P,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,O!==null&&O.tag===6?(a(P,O.sibling),G=h(O,x),G.return=P,P=G):(a(P,O),G=jh(x,P.mode,G),G.return=P,P=G),v(P)):a(P,O)}return function(P,O,x,G){try{Ko=0;var at=Yt(P,O,x,G);return ba=null,at}catch(ot){if(ot===xo||ot===wu)throw ot;var Ct=hn(29,ot,null,P.mode);return Ct.lanes=G,Ct.return=P,Ct}finally{}}}var Ra=Pg(!0),kg=Pg(!1),On=$(null),ni=null;function ur(e){var i=e.alternate;J(Se,Se.current&1),J(On,e),ni===null&&(i===null||Ea.current!==null||i.memoizedState!==null)&&(ni=e)}function Ug(e){if(e.tag===22){if(J(Se,Se.current),J(On,e),ni===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ni=e)}}else cr()}function cr(){J(Se,Se.current),J(On,On.current)}function Ui(e){rt(On),ni===e&&(ni=null),rt(Se)}var Se=$(0);function zu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||dd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function bf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:T({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Rf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=pn(),h=ar(l);h.payload=i,a!=null&&(h.callback=a),i=or(e,h,l),i!==null&&(gn(i,e,l),zo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=pn(),h=ar(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=or(e,h,l),i!==null&&(gn(i,e,l),zo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=pn(),l=ar(a);l.tag=2,i!=null&&(l.callback=i),i=or(e,l,a),i!==null&&(gn(i,e,a),zo(i,e,a))}};function xg(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Do(a,l)||!Do(h,d):!0}function Lg(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Rf.enqueueReplaceState(i,i.state,null)}function ws(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=T({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Bu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function zg(e){Bu(e)}function Bg(e){console.error(e)}function qg(e){Bu(e)}function qu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Hg(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function wf(e,i,a){return a=ar(a),a.tag=3,a.payload={element:null},a.callback=function(){qu(e,i)},a}function jg(e){return e=ar(e),e.tag=3,e}function Fg(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){Hg(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Hg(i,a,l),typeof h!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function hA(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Po(i,a,h,!0),a=On.current,a!==null){switch(a.tag){case 13:return ni===null?$f():a.alternate===null&&oe===0&&(oe=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===tf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Jf(e,l,h)),!1;case 22:return a.flags|=65536,l===tf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Jf(e,l,h)),!1}throw Error(s(435,a.tag))}return Jf(e,l,h),$f(),!1}if(zt)return i=On.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Qh&&(e=Error(s(422),{cause:l}),Vo(wn(e,a)))):(l!==Qh&&(i=Error(s(423),{cause:l}),Vo(wn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=wn(l,a),h=wf(e.stateNode,l,h),rf(e,h),oe!==4&&(oe=2)),!1;var d=Error(s(520),{cause:l});if(d=wn(d,a),tl===null?tl=[d]:tl.push(d),oe!==4&&(oe=2),i===null)return!0;l=wn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=wf(a.stateNode,l,e),rf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(gr===null||!gr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=jg(h),Fg(h,e,a,l),rf(a,h),!1}a=a.return}while(a!==null);return!1}var Gg=Error(s(461)),Oe=!1;function Le(e,i,a,l){i.child=e===null?kg(i,null,a,l):Ra(i,e.child,a,l)}function Kg(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var E in l)E!=="ref"&&(v[E]=l[E])}else v=l;return Ss(i),l=uf(e,i,a,v,d,h),E=cf(),e!==null&&!Oe?(hf(e,i,h),xi(e,i,h)):(zt&&E&&Gh(i),i.flags|=1,Le(e,i,l,h),i.child)}function Qg(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Hh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Yg(e,i,d,l,h)):(e=Eu(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Pf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Do,a(v,l)&&e.ref===i.ref)return xi(e,i,h)}return i.flags|=1,e=Oi(d,l),e.ref=i.ref,e.return=i,i.child=e}function Yg(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Do(d,l)&&e.ref===i.ref)if(Oe=!1,i.pendingProps=l=d,Pf(e,h))(e.flags&131072)!==0&&(Oe=!0);else return i.lanes=e.lanes,xi(e,i,h)}return If(e,i,a,l,h)}function Xg(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return $g(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ru(i,d!==null?d.cachePool:null),d!==null?Yp(i,d):af(),Ug(i);else return i.lanes=i.childLanes=536870912,$g(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Ru(i,d.cachePool),Yp(i,d),cr(),i.memoizedState=null):(e!==null&&Ru(i,null),af(),cr());return Le(e,i,h,a),i.child}function $g(e,i,a,l){var h=Wh();return h=h===null?null:{parent:Ae._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Ru(i,null),af(),Ug(i),e!==null&&Po(e,i,l,!0),null}function Hu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function If(e,i,a,l,h){return Ss(i),a=uf(e,i,a,l,void 0,h),l=cf(),e!==null&&!Oe?(hf(e,i,h),xi(e,i,h)):(zt&&l&&Gh(i),i.flags|=1,Le(e,i,a,h),i.child)}function Zg(e,i,a,l,h,d){return Ss(i),i.updateQueue=null,a=$p(i,l,a,h),Xp(e),l=cf(),e!==null&&!Oe?(hf(e,i,d),xi(e,i,d)):(zt&&l&&Gh(i),i.flags|=1,Le(e,i,a,d),i.child)}function Jg(e,i,a,l,h){if(Ss(i),i.stateNode===null){var d=pa,v=a.contextType;typeof v=="object"&&v!==null&&(d=Ge(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Rf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},ef(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Ge(v):pa,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(bf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Rf.enqueueReplaceState(d,d.state,null),qo(i,l,d,h),Bo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var E=i.memoizedProps,b=ws(a,E);d.props=b;var L=d.context,F=a.contextType;v=pa,typeof F=="object"&&F!==null&&(v=Ge(F));var K=a.getDerivedStateFromProps;F=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||L!==v)&&Lg(i,d,l,v),sr=!1;var z=i.memoizedState;d.state=z,qo(i,l,d,h),Bo(),L=i.memoizedState,E||z!==L||sr?(typeof K=="function"&&(bf(i,a,K,l),L=i.memoizedState),(b=sr||xg(i,a,b,l,z,L,v))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=b):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,nf(e,i),v=i.memoizedProps,F=ws(a,v),d.props=F,K=i.pendingProps,z=d.context,L=a.contextType,b=pa,typeof L=="object"&&L!==null&&(b=Ge(L)),E=a.getDerivedStateFromProps,(L=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==K||z!==b)&&Lg(i,d,l,b),sr=!1,z=i.memoizedState,d.state=z,qo(i,l,d,h),Bo();var B=i.memoizedState;v!==K||z!==B||sr||e!==null&&e.dependencies!==null&&Su(e.dependencies)?(typeof E=="function"&&(bf(i,a,E,l),B=i.memoizedState),(F=sr||xg(i,a,F,l,z,B,b)||e!==null&&e.dependencies!==null&&Su(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,B,b),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,B,b)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=B),d.props=l,d.state=B,d.context=b,l=F):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Hu(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ra(i,e.child,null,h),i.child=Ra(i,null,a,h)):Le(e,i,a,h),i.memoizedState=d.state,e=i.child):e=xi(e,i,h),e}function Wg(e,i,a,l){return Mo(),i.flags|=256,Le(e,i,a,l),i.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Df(e){return{baseLanes:e,cachePool:Bp()}}function Of(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Nn),e}function t_(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(zt){if(h?ur(i):cr(),zt){var E=ae,b;if(b=E){t:{for(b=E,E=ei;b.nodeType!==8;){if(!E){E=null;break t}if(b=zn(b.nextSibling),b===null){E=null;break t}}E=b}E!==null?(i.memoizedState={dehydrated:E,treeContext:ys!==null?{id:Ni,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},b=hn(18,null,null,0),b.stateNode=E,b.return=i,i.child=b,tn=i,ae=null,b=!0):b=!1}b||Ts(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return dd(E)?i.lanes=32:i.lanes=536870912,null;Ui(i)}return E=l.children,l=l.fallback,h?(cr(),h=i.mode,E=ju({mode:"hidden",children:E},h),l=_s(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,h=i.child,h.memoizedState=Df(a),h.childLanes=Of(e,v,a),i.memoizedState=Cf,l):(ur(i),Nf(i,E))}if(b=e.memoizedState,b!==null&&(E=b.dehydrated,E!==null)){if(d)i.flags&256?(ur(i),i.flags&=-257,i=Mf(e,i,a)):i.memoizedState!==null?(cr(),i.child=e.child,i.flags|=128,i=null):(cr(),h=l.fallback,E=i.mode,l=ju({mode:"visible",children:l.children},E),h=_s(h,E,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ra(i,e.child,null,a),l=i.child,l.memoizedState=Df(a),l.childLanes=Of(e,v,a),i.memoizedState=Cf,i=h);else if(ur(i),dd(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,Vo({value:l,source:null,stack:null}),i=Mf(e,i,a)}else if(Oe||Po(e,i,a,!1),v=(a&e.childLanes)!==0,Oe||v){if(v=Zt,v!==null&&(l=a&-a,l=(l&42)!==0?1:Zi(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==b.retryLane))throw b.retryLane=l,ma(e,l),gn(v,e,l),Gg;E.data==="$?"||$f(),i=Mf(e,i,a)}else E.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=b.treeContext,ae=zn(E.nextSibling),tn=i,zt=!0,Es=null,ei=!1,e!==null&&(Cn[Dn++]=Ni,Cn[Dn++]=Mi,Cn[Dn++]=ys,Ni=e.id,Mi=e.overflow,ys=i),i=Nf(i,l.children),i.flags|=4096);return i}return h?(cr(),h=l.fallback,E=i.mode,b=e.child,L=b.sibling,l=Oi(b,{mode:"hidden",children:l.children}),l.subtreeFlags=b.subtreeFlags&65011712,L!==null?h=Oi(L,h):(h=_s(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=e.child.memoizedState,E===null?E=Df(a):(b=E.cachePool,b!==null?(L=Ae._currentValue,b=b.parent!==L?{parent:L,pool:L}:b):b=Bp(),E={baseLanes:E.baseLanes|a,cachePool:b}),h.memoizedState=E,h.childLanes=Of(e,v,a),i.memoizedState=Cf,l):(ur(i),a=e.child,e=a.sibling,a=Oi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Nf(e,i){return i=ju({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function ju(e,i){return e=hn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Mf(e,i,a){return Ra(i,e.child,null,a),e=Nf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function e_(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Xh(e.return,i,a)}function Vf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function n_(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Le(e,i,l.children,a),l=Se.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&e_(e,a,i);else if(e.tag===19)e_(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(J(Se,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&zu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Vf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&zu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Vf(i,!0,a,null,d);break;case"together":Vf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function xi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),pr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Po(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Oi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Oi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Pf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Su(e)))}function fA(e,i,a){switch(i.tag){case 3:$t(i,i.stateNode.containerInfo),rr(i,Ae,e.memoizedState.cache),Mo();break;case 27:case 5:$i(i);break;case 4:$t(i,i.stateNode.containerInfo);break;case 10:rr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ur(i),i.flags|=128,null):(a&i.child.childLanes)!==0?t_(e,i,a):(ur(i),e=xi(e,i,a),e!==null?e.sibling:null);ur(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Po(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return n_(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),J(Se,Se.current),l)break;return null;case 22:case 23:return i.lanes=0,Xg(e,i,a);case 24:rr(i,Ae,e.memoizedState.cache)}return xi(e,i,a)}function i_(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Oe=!0;else{if(!Pf(e,a)&&(i.flags&128)===0)return Oe=!1,fA(e,i,a);Oe=(e.flags&131072)!==0}else Oe=!1,zt&&(i.flags&1048576)!==0&&Vp(i,Au,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Hh(l)?(e=ws(l,e),i.tag=1,i=Jg(null,i,l,e,a)):(i.tag=0,i=If(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===ct){i.tag=11,i=Kg(null,i,l,e,a);break t}else if(h===M){i.tag=14,i=Qg(null,i,l,e,a);break t}}throw i=ke(l)||l,Error(s(306,i,""))}}return i;case 0:return If(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=ws(l,i.pendingProps),Jg(e,i,l,h,a);case 3:t:{if($t(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,nf(e,i),qo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,rr(i,Ae,l),l!==d.cache&&$h(i,[Ae],a,!0),Bo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Wg(e,i,l,a);break t}else if(l!==h){h=wn(Error(s(424)),i),Vo(h),i=Wg(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ae=zn(e.firstChild),tn=i,zt=!0,Es=null,ei=!0,a=kg(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Mo(),l===h){i=xi(e,i,a);break t}Le(e,i,l,a)}i=i.child}return i;case 26:return Hu(e,i),e===null?(a=oy(i.type,null,i.pendingProps,null))?i.memoizedState=a:zt||(a=i.type,e=i.pendingProps,l=ic(Et.current).createElement(a),l[ve]=i,l[fe]=e,Be(l,a,e),le(l),i.stateNode=l):i.memoizedState=oy(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return $i(i),e===null&&zt&&(l=i.stateNode=ry(i.type,i.pendingProps,Et.current),tn=i,ei=!0,h=ae,vr(i.type)?(md=h,ae=zn(l.firstChild)):ae=h),Le(e,i,i.pendingProps.children,a),Hu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&zt&&((h=l=ae)&&(l=BA(l,i.type,i.pendingProps,ei),l!==null?(i.stateNode=l,tn=i,ae=zn(l.firstChild),ei=!1,h=!0):h=!1),h||Ts(i)),$i(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,cd(h,d)?l=null:v!==null&&cd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=uf(e,i,rA,null,null,a),ul._currentValue=h),Hu(e,i),Le(e,i,l,a),i.child;case 6:return e===null&&zt&&((e=a=ae)&&(a=qA(a,i.pendingProps,ei),a!==null?(i.stateNode=a,tn=i,ae=null,e=!0):e=!1),e||Ts(i)),null;case 13:return t_(e,i,a);case 4:return $t(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ra(i,null,l,a):Le(e,i,l,a),i.child;case 11:return Kg(e,i,i.type,i.pendingProps,a);case 7:return Le(e,i,i.pendingProps,a),i.child;case 8:return Le(e,i,i.pendingProps.children,a),i.child;case 12:return Le(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,rr(i,i.type,l.value),Le(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ss(i),h=Ge(h),l=l(h),i.flags|=1,Le(e,i,l,a),i.child;case 14:return Qg(e,i,i.type,i.pendingProps,a);case 15:return Yg(e,i,i.type,i.pendingProps,a);case 19:return n_(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=ju(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Oi(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Xg(e,i,a);case 24:return Ss(i),l=Ge(Ae),e===null?(h=Wh(),h===null&&(h=Zt,d=Zh(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},ef(i),rr(i,Ae,h)):((e.lanes&a)!==0&&(nf(e,i),qo(i,null,null,a),Bo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),rr(i,Ae,l)):(l=d.cache,rr(i,Ae,l),l!==h.cache&&$h(i,[Ae],a,!0))),Le(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Li(e){e.flags|=4}function r_(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!fy(i)){if(i=On.current,i!==null&&((kt&4194048)===kt?ni!==null:(kt&62914560)!==kt&&(kt&536870912)===0||i!==ni))throw Lo=tf,qp;e.flags|=8192}}function Fu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?co():536870912,e.lanes|=i,Da|=i)}function Yo(e,i){if(!zt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ne(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function dA(e,i,a){var l=i.pendingProps;switch(Kh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(i),null;case 1:return ne(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Pi(Ae),jn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(No(i)?Li(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Up())),ne(i),null;case 26:return a=i.memoizedState,e===null?(Li(i),a!==null?(ne(i),r_(i,a)):(ne(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Li(i),ne(i),r_(i,a)):(ne(i),i.flags&=-16777217):(e.memoizedProps!==l&&Li(i),ne(i),i.flags&=-16777217),null;case 27:_i(i),a=Et.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Li(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ne(i),null}e=ht.current,No(i)?Pp(i):(e=ry(h,l,a),i.stateNode=e,Li(i))}return ne(i),null;case 5:if(_i(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Li(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ne(i),null}if(e=ht.current,No(i))Pp(i);else{switch(h=ic(Et.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[ve]=i,e[fe]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Be(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Li(i)}}return ne(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Li(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=Et.current,No(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=tn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[ve]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Z_(e.nodeValue,a)),e||Ts(i)}else e=ic(e).createTextNode(l),e[ve]=i,i.stateNode=e}return ne(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=No(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[ve]=i}else Mo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ne(i),h=!1}else h=Up(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Ui(i),i):(Ui(i),null)}if(Ui(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Fu(i,i.updateQueue),ne(i),null;case 4:return jn(),e===null&&sd(i.stateNode.containerInfo),ne(i),null;case 10:return Pi(i.type),ne(i),null;case 19:if(rt(Se),h=i.memoizedState,h===null)return ne(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Yo(h,!1);else{if(oe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=zu(e),d!==null){for(i.flags|=128,Yo(h,!1),e=d.updateQueue,i.updateQueue=e,Fu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Mp(a,e),a=a.sibling;return J(Se,Se.current&1|2),i.child}e=e.sibling}h.tail!==null&&En()>Qu&&(i.flags|=128,l=!0,Yo(h,!1),i.lanes=4194304)}else{if(!l)if(e=zu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Fu(i,e),Yo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!zt)return ne(i),null}else 2*En()-h.renderingStartTime>Qu&&a!==536870912&&(i.flags|=128,l=!0,Yo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=En(),i.sibling=null,e=Se.current,J(Se,l?e&1|2:e&1),i):(ne(i),null);case 22:case 23:return Ui(i),of(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ne(i),i.subtreeFlags&6&&(i.flags|=8192)):ne(i),a=i.updateQueue,a!==null&&Fu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&rt(bs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Pi(Ae),ne(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function mA(e,i){switch(Kh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Pi(Ae),jn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return _i(i),null;case 13:if(Ui(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Mo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return rt(Se),null;case 4:return jn(),null;case 10:return Pi(i.type),null;case 22:case 23:return Ui(i),of(),e!==null&&rt(bs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Pi(Ae),null;case 25:return null;default:return null}}function s_(e,i){switch(Kh(i),i.tag){case 3:Pi(Ae),jn();break;case 26:case 27:case 5:_i(i);break;case 4:jn();break;case 13:Ui(i);break;case 19:rt(Se);break;case 10:Pi(i.type);break;case 22:case 23:Ui(i),of(),e!==null&&rt(bs);break;case 24:Pi(Ae)}}function Xo(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(E){Xt(i,i.return,E)}}function hr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var b=a,L=E;try{L()}catch(F){Xt(h,b,F)}}}l=l.next}while(l!==d)}}catch(F){Xt(i,i.return,F)}}function a_(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Qp(i,a)}catch(l){Xt(e,e.return,l)}}}function o_(e,i,a){a.props=ws(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Xt(e,i,l)}}function $o(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Xt(e,i,h)}}function ii(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Xt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Xt(e,i,h)}else a.current=null}function l_(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Xt(e,e.return,h)}}function kf(e,i,a){try{var l=e.stateNode;kA(l,e.type,a,i),l[fe]=i}catch(h){Xt(e,e.return,h)}}function u_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vr(e.type)||e.tag===4}function Uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||u_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=nc));else if(l!==4&&(l===27&&vr(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(xf(e,i,a),e=e.sibling;e!==null;)xf(e,i,a),e=e.sibling}function Gu(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&vr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Gu(e,i,a),e=e.sibling;e!==null;)Gu(e,i,a),e=e.sibling}function c_(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Be(i,l,a),i[ve]=e,i[fe]=a}catch(d){Xt(e,e.return,d)}}var zi=!1,ce=!1,Lf=!1,h_=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function pA(e,i){if(e=e.containerInfo,ld=uc,e=Ap(e),kh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,E=-1,b=-1,L=0,F=0,K=e,z=null;e:for(;;){for(var B;K!==a||h!==0&&K.nodeType!==3||(E=v+h),K!==d||l!==0&&K.nodeType!==3||(b=v+l),K.nodeType===3&&(v+=K.nodeValue.length),(B=K.firstChild)!==null;)z=K,K=B;for(;;){if(K===e)break e;if(z===a&&++L===h&&(E=v),z===d&&++F===l&&(b=v),(B=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=B}a=E===-1||b===-1?null:{start:E,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(ud={focusedElem:e,selectionRange:a},uc=!1,Ne=i;Ne!==null;)if(i=Ne,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Ne=e;else for(;Ne!==null;){switch(i=Ne,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var yt=ws(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(yt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(dt){Xt(a,a.return,dt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)fd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Ne=e;break}Ne=i.return}}function f_(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:fr(e,a),l&4&&Xo(5,a);break;case 1:if(fr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Xt(a,a.return,v)}else{var h=ws(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Xt(a,a.return,v)}}l&64&&a_(a),l&512&&$o(a,a.return);break;case 3:if(fr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Qp(e,i)}catch(v){Xt(a,a.return,v)}}break;case 27:i===null&&l&4&&c_(a);case 26:case 5:fr(e,a),i===null&&l&4&&l_(a),l&512&&$o(a,a.return);break;case 12:fr(e,a);break;case 13:fr(e,a),l&4&&p_(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=bA.bind(null,a),HA(e,a))));break;case 22:if(l=a.memoizedState!==null||zi,!l){i=i!==null&&i.memoizedState!==null||ce,h=zi;var d=ce;zi=l,(ce=i)&&!d?dr(e,a,(a.subtreeFlags&8772)!==0):fr(e,a),zi=h,ce=d}break;case 30:break;default:fr(e,a)}}function d_(e){var i=e.alternate;i!==null&&(e.alternate=null,d_(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&tr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var te=null,rn=!1;function Bi(e,i,a){for(a=a.child;a!==null;)m_(e,i,a),a=a.sibling}function m_(e,i,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(se,a)}catch{}switch(a.tag){case 26:ce||ii(a,i),Bi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ce||ii(a,i);var l=te,h=rn;vr(a.type)&&(te=a.stateNode,rn=!1),Bi(e,i,a),sl(a.stateNode),te=l,rn=h;break;case 5:ce||ii(a,i);case 6:if(l=te,h=rn,te=null,Bi(e,i,a),te=l,rn=h,te!==null)if(rn)try{(te.nodeType===9?te.body:te.nodeName==="HTML"?te.ownerDocument.body:te).removeChild(a.stateNode)}catch(d){Xt(a,i,d)}else try{te.removeChild(a.stateNode)}catch(d){Xt(a,i,d)}break;case 18:te!==null&&(rn?(e=te,ny(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),dl(e)):ny(te,a.stateNode));break;case 4:l=te,h=rn,te=a.stateNode.containerInfo,rn=!0,Bi(e,i,a),te=l,rn=h;break;case 0:case 11:case 14:case 15:ce||hr(2,a,i),ce||hr(4,a,i),Bi(e,i,a);break;case 1:ce||(ii(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&o_(a,i,l)),Bi(e,i,a);break;case 21:Bi(e,i,a);break;case 22:ce=(l=ce)||a.memoizedState!==null,Bi(e,i,a),ce=l;break;default:Bi(e,i,a)}}function p_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{dl(e)}catch(a){Xt(i,i.return,a)}}function gA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new h_),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new h_),i;default:throw Error(s(435,e.tag))}}function zf(e,i){var a=gA(e);i.forEach(function(l){var h=RA.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function fn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(vr(E.type)){te=E.stateNode,rn=!1;break t}break;case 5:te=E.stateNode,rn=!1;break t;case 3:case 4:te=E.stateNode.containerInfo,rn=!0;break t}E=E.return}if(te===null)throw Error(s(160));m_(d,v,h),te=null,rn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)g_(i,e),i=i.sibling}var Ln=null;function g_(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fn(i,e),dn(e),l&4&&(hr(3,e,e.return),Xo(3,e),hr(5,e,e.return));break;case 1:fn(i,e),dn(e),l&512&&(ce||a===null||ii(a,a.return)),l&64&&zi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Ln;if(fn(i,e),dn(e),l&512&&(ce||a===null||ii(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[es]||d[ve]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Be(d,l,a),d[ve]=e,le(d),l=d;break t;case"link":var v=cy("link","href",h).get(l+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(d=v[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}d=h.createElement(l),Be(d,l,a),h.head.appendChild(d);break;case"meta":if(v=cy("meta","content",h).get(l+(a.content||""))){for(E=0;E<v.length;E++)if(d=v[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}d=h.createElement(l),Be(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[ve]=e,le(d),l=d}e.stateNode=l}else hy(h,e.type,e.stateNode);else e.stateNode=uy(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?hy(h,e.type,e.stateNode):uy(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&kf(e,e.memoizedProps,a.memoizedProps)}break;case 27:fn(i,e),dn(e),l&512&&(ce||a===null||ii(a,a.return)),a!==null&&l&4&&kf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(fn(i,e),dn(e),l&512&&(ce||a===null||ii(a,a.return)),e.flags&32){h=e.stateNode;try{An(h,"")}catch(B){Xt(e,e.return,B)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,kf(e,h,a!==null?a.memoizedProps:h)),l&1024&&(Lf=!0);break;case 6:if(fn(i,e),dn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(B){Xt(e,e.return,B)}}break;case 3:if(ac=null,h=Ln,Ln=rc(i.containerInfo),fn(i,e),Ln=h,dn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{dl(i.containerInfo)}catch(B){Xt(e,e.return,B)}Lf&&(Lf=!1,__(e));break;case 4:l=Ln,Ln=rc(e.stateNode.containerInfo),fn(i,e),dn(e),Ln=l;break;case 12:fn(i,e),dn(e);break;case 13:fn(i,e),dn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gf=En()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,zf(e,l)));break;case 22:h=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,L=zi,F=ce;if(zi=L||h,ce=F||b,fn(i,e),ce=F,zi=L,dn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||b||zi||ce||Is(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){b=a=i;try{if(d=b.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=b.stateNode;var K=b.memoizedProps.style,z=K!=null&&K.hasOwnProperty("display")?K.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){Xt(b,b.return,B)}}}else if(i.tag===6){if(a===null){b=i;try{b.stateNode.nodeValue=h?"":b.memoizedProps}catch(B){Xt(b,b.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,zf(e,a))));break;case 19:fn(i,e),dn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,zf(e,l)));break;case 30:break;case 21:break;default:fn(i,e),dn(e)}}function dn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(u_(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Uf(e);Gu(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(An(v,""),a.flags&=-33);var E=Uf(e);Gu(e,E,v);break;case 3:case 4:var b=a.stateNode.containerInfo,L=Uf(e);xf(e,L,b);break;default:throw Error(s(161))}}catch(F){Xt(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function __(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;__(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function fr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)f_(e,i.alternate,i),i=i.sibling}function Is(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:hr(4,i,i.return),Is(i);break;case 1:ii(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&o_(i,i.return,a),Is(i);break;case 27:sl(i.stateNode);case 26:case 5:ii(i,i.return),Is(i);break;case 22:i.memoizedState===null&&Is(i);break;case 30:Is(i);break;default:Is(i)}e=e.sibling}}function dr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:dr(h,d,a),Xo(4,d);break;case 1:if(dr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){Xt(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var b=h.shared.hiddenCallbacks;if(b!==null)for(h.shared.hiddenCallbacks=null,h=0;h<b.length;h++)Kp(b[h],E)}catch(L){Xt(l,l.return,L)}}a&&v&64&&a_(d),$o(d,d.return);break;case 27:c_(d);case 26:case 5:dr(h,d,a),a&&l===null&&v&4&&l_(d),$o(d,d.return);break;case 12:dr(h,d,a);break;case 13:dr(h,d,a),a&&v&4&&p_(h,d);break;case 22:d.memoizedState===null&&dr(h,d,a),$o(d,d.return);break;case 30:break;default:dr(h,d,a)}i=i.sibling}}function Bf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ko(a))}function qf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ko(e))}function ri(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)y_(e,i,a,l),i=i.sibling}function y_(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ri(e,i,a,l),h&2048&&Xo(9,i);break;case 1:ri(e,i,a,l);break;case 3:ri(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ko(e)));break;case 12:if(h&2048){ri(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,E=d.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Xt(i,i.return,b)}}else ri(e,i,a,l);break;case 13:ri(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?ri(e,i,a,l):Zo(e,i):d._visibility&2?ri(e,i,a,l):(d._visibility|=2,wa(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Bf(v,i);break;case 24:ri(e,i,a,l),h&2048&&qf(i.alternate,i);break;default:ri(e,i,a,l)}}function wa(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,E=a,b=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:wa(d,v,E,b,h),Xo(8,v);break;case 23:break;case 22:var F=v.stateNode;v.memoizedState!==null?F._visibility&2?wa(d,v,E,b,h):Zo(d,v):(F._visibility|=2,wa(d,v,E,b,h)),h&&L&2048&&Bf(v.alternate,v);break;case 24:wa(d,v,E,b,h),h&&L&2048&&qf(v.alternate,v);break;default:wa(d,v,E,b,h)}i=i.sibling}}function Zo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:Zo(a,l),h&2048&&Bf(l.alternate,l);break;case 24:Zo(a,l),h&2048&&qf(l.alternate,l);break;default:Zo(a,l)}i=i.sibling}}var Jo=8192;function Ia(e){if(e.subtreeFlags&Jo)for(e=e.child;e!==null;)v_(e),e=e.sibling}function v_(e){switch(e.tag){case 26:Ia(e),e.flags&Jo&&e.memoizedState!==null&&eS(Ln,e.memoizedState,e.memoizedProps);break;case 5:Ia(e);break;case 3:case 4:var i=Ln;Ln=rc(e.stateNode.containerInfo),Ia(e),Ln=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Jo,Jo=16777216,Ia(e),Jo=i):Ia(e));break;default:Ia(e)}}function E_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Wo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ne=l,A_(l,e)}E_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)T_(e),e=e.sibling}function T_(e){switch(e.tag){case 0:case 11:case 15:Wo(e),e.flags&2048&&hr(9,e,e.return);break;case 3:Wo(e);break;case 12:Wo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Ku(e)):Wo(e);break;default:Wo(e)}}function Ku(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ne=l,A_(l,e)}E_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:hr(8,i,i.return),Ku(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Ku(i));break;default:Ku(i)}e=e.sibling}}function A_(e,i){for(;Ne!==null;){var a=Ne;switch(a.tag){case 0:case 11:case 15:hr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ko(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ne=l;else t:for(a=e;Ne!==null;){l=Ne;var h=l.sibling,d=l.return;if(d_(l),l===a){Ne=null;break t}if(h!==null){h.return=d,Ne=h;break t}Ne=d}}}var _A={getCacheForType:function(e){var i=Ge(Ae),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},yA=typeof WeakMap=="function"?WeakMap:Map,jt=0,Zt=null,Dt=null,kt=0,Ft=0,mn=null,mr=!1,Ca=!1,Hf=!1,qi=0,oe=0,pr=0,Cs=0,jf=0,Nn=0,Da=0,tl=null,sn=null,Ff=!1,Gf=0,Qu=1/0,Yu=null,gr=null,ze=0,_r=null,Oa=null,Na=0,Kf=0,Qf=null,S_=null,el=0,Yf=null;function pn(){if((jt&2)!==0&&kt!==0)return kt&-kt;if(j.T!==null){var e=ya;return e!==0?e:ed()}return Ji()}function b_(){Nn===0&&(Nn=(kt&536870912)===0||zt?uo():536870912);var e=On.current;return e!==null&&(e.flags|=32),Nn}function gn(e,i,a){(e===Zt&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)&&(Ma(e,0),yr(e,kt,Nn,!1)),vi(e,a),((jt&2)===0||e!==Zt)&&(e===Zt&&((jt&2)===0&&(Cs|=a),oe===4&&yr(e,kt,Nn,!1)),si(e))}function R_(e,i,a){if((jt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||ts(e,i),h=l?TA(e,i):Zf(e,i,!0),d=l;do{if(h===0){Ca&&!l&&yr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!vA(a)){h=Zf(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var E=e;h=tl;var b=E.current.memoizedState.isDehydrated;if(b&&(Ma(E,v).flags|=256),v=Zf(E,v,!1),v!==2){if(Hf&&!b){E.errorRecoveryDisabledLanes|=d,Cs|=d,h=4;break t}d=sn,sn=h,d!==null&&(sn===null?sn=d:sn.push.apply(sn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Ma(e,0),yr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:yr(l,i,Nn,!mr);break t;case 2:sn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Gf+300-En(),10<h)){if(yr(l,i,Nn,!mr),Xs(l,0,!0)!==0)break t;l.timeoutHandle=ty(w_.bind(null,l,a,sn,Yu,Ff,i,Nn,Cs,Da,mr,d,2,-0,0),h);break t}w_(l,a,sn,Yu,Ff,i,Nn,Cs,Da,mr,d,0,-0,0)}}break}while(!0);si(e)}function w_(e,i,a,l,h,d,v,E,b,L,F,K,z,B){if(e.timeoutHandle=-1,K=i.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(ll={stylesheets:null,count:0,unsuspend:tS},v_(i),K=nS(),K!==null)){e.cancelPendingCommit=K(V_.bind(null,e,i,d,a,l,h,v,E,b,F,1,z,B)),yr(e,d,v,!L);return}V_(e,i,d,a,l,h,v,E,b)}function vA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!cn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(e,i,a,l){i&=~jf,i&=~Cs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-Fe(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Fn(e,a,i)}function Xu(){return(jt&6)===0?(nl(0),!1):!0}function Xf(){if(Dt!==null){if(Ft===0)var e=Dt.return;else e=Dt,Vi=As=null,ff(e),ba=null,Ko=0,e=Dt;for(;e!==null;)s_(e.alternate,e),e=e.return;Dt=null}}function Ma(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,xA(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Xf(),Zt=e,Dt=a=Oi(e.current,null),kt=i,Ft=0,mn=null,mr=!1,Ca=ts(e,i),Hf=!1,Da=Nn=jf=Cs=pr=oe=0,sn=tl=null,Ff=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Fe(l),d=1<<h;i|=e[h],l&=~d}return qi=i,_u(),a}function I_(e,i){Rt=null,j.H=Uu,i===xo||i===wu?(i=Fp(),Ft=3):i===qp?(i=Fp(),Ft=4):Ft=i===Gg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mn=i,Dt===null&&(oe=1,qu(e,wn(i,e.current)))}function C_(){var e=j.H;return j.H=Uu,e===null?Uu:e}function D_(){var e=j.A;return j.A=_A,e}function $f(){oe=4,mr||(kt&4194048)!==kt&&On.current!==null||(Ca=!0),(pr&134217727)===0&&(Cs&134217727)===0||Zt===null||yr(Zt,kt,Nn,!1)}function Zf(e,i,a){var l=jt;jt|=2;var h=C_(),d=D_();(Zt!==e||kt!==i)&&(Yu=null,Ma(e,i)),i=!1;var v=oe;t:do try{if(Ft!==0&&Dt!==null){var E=Dt,b=mn;switch(Ft){case 8:Xf(),v=6;break t;case 3:case 2:case 9:case 6:On.current===null&&(i=!0);var L=Ft;if(Ft=0,mn=null,Va(e,E,b,L),a&&Ca){v=0;break t}break;default:L=Ft,Ft=0,mn=null,Va(e,E,b,L)}}EA(),v=oe;break}catch(F){I_(e,F)}while(!0);return i&&e.shellSuspendCounter++,Vi=As=null,jt=l,j.H=h,j.A=d,Dt===null&&(Zt=null,kt=0,_u()),v}function EA(){for(;Dt!==null;)O_(Dt)}function TA(e,i){var a=jt;jt|=2;var l=C_(),h=D_();Zt!==e||kt!==i?(Yu=null,Qu=En()+500,Ma(e,i)):Ca=ts(e,i);t:do try{if(Ft!==0&&Dt!==null){i=Dt;var d=mn;e:switch(Ft){case 1:Ft=0,mn=null,Va(e,i,d,1);break;case 2:case 9:if(Hp(d)){Ft=0,mn=null,N_(i);break}i=function(){Ft!==2&&Ft!==9||Zt!==e||(Ft=7),si(e)},d.then(i,i);break t;case 3:Ft=7;break t;case 4:Ft=5;break t;case 7:Hp(d)?(Ft=0,mn=null,N_(i)):(Ft=0,mn=null,Va(e,i,d,7));break;case 5:var v=null;switch(Dt.tag){case 26:v=Dt.memoizedState;case 5:case 27:var E=Dt;if(!v||fy(v)){Ft=0,mn=null;var b=E.sibling;if(b!==null)Dt=b;else{var L=E.return;L!==null?(Dt=L,$u(L)):Dt=null}break e}}Ft=0,mn=null,Va(e,i,d,5);break;case 6:Ft=0,mn=null,Va(e,i,d,6);break;case 8:Xf(),oe=6;break t;default:throw Error(s(462))}}AA();break}catch(F){I_(e,F)}while(!0);return Vi=As=null,j.H=l,j.A=h,jt=a,Dt!==null?0:(Zt=null,kt=0,_u(),oe)}function AA(){for(;Dt!==null&&!so();)O_(Dt)}function O_(e){var i=i_(e.alternate,e,qi);e.memoizedProps=e.pendingProps,i===null?$u(e):Dt=i}function N_(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=Zg(a,i,i.pendingProps,i.type,void 0,kt);break;case 11:i=Zg(a,i,i.pendingProps,i.type.render,i.ref,kt);break;case 5:ff(i);default:s_(a,i),i=Dt=Mp(i,qi),i=i_(a,i,qi)}e.memoizedProps=e.pendingProps,i===null?$u(e):Dt=i}function Va(e,i,a,l){Vi=As=null,ff(i),ba=null,Ko=0;var h=i.return;try{if(hA(e,h,i,a,kt)){oe=1,qu(e,wn(a,e.current)),Dt=null;return}}catch(d){if(h!==null)throw Dt=h,d;oe=1,qu(e,wn(a,e.current)),Dt=null;return}i.flags&32768?(zt||l===1?e=!0:Ca||(kt&536870912)!==0?e=!1:(mr=e=!0,(l===2||l===9||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),M_(i,e)):$u(i)}function $u(e){var i=e;do{if((i.flags&32768)!==0){M_(i,mr);return}e=i.return;var a=dA(i.alternate,i,qi);if(a!==null){Dt=a;return}if(i=i.sibling,i!==null){Dt=i;return}Dt=i=e}while(i!==null);oe===0&&(oe=5)}function M_(e,i){do{var a=mA(e.alternate,e);if(a!==null){a.flags&=32767,Dt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Dt=e;return}Dt=e=a}while(e!==null);oe=6,Dt=null}function V_(e,i,a,l,h,d,v,E,b){e.cancelPendingCommit=null;do Zu();while(ze!==0);if((jt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Bh,ho(e,a,d,v,E,b),e===Zt&&(Dt=Zt=null,kt=0),Oa=i,_r=e,Na=a,Kf=d,Qf=h,S_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wA($r,function(){return L_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=j.T,j.T=null,h=nt.p,nt.p=2,v=jt,jt|=4;try{pA(e,i,a)}finally{jt=v,nt.p=h,j.T=l}}ze=1,P_(),k_(),U_()}}function P_(){if(ze===1){ze=0;var e=_r,i=Oa,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var l=nt.p;nt.p=2;var h=jt;jt|=4;try{g_(i,e);var d=ud,v=Ap(e.containerInfo),E=d.focusedElem,b=d.selectionRange;if(v!==E&&E&&E.ownerDocument&&Tp(E.ownerDocument.documentElement,E)){if(b!==null&&kh(E)){var L=b.start,F=b.end;if(F===void 0&&(F=L),"selectionStart"in E)E.selectionStart=L,E.selectionEnd=Math.min(F,E.value.length);else{var K=E.ownerDocument||document,z=K&&K.defaultView||window;if(z.getSelection){var B=z.getSelection(),yt=E.textContent.length,dt=Math.min(b.start,yt),Yt=b.end===void 0?dt:Math.min(b.end,yt);!B.extend&&dt>Yt&&(v=Yt,Yt=dt,dt=v);var P=Ep(E,dt),O=Ep(E,Yt);if(P&&O&&(B.rangeCount!==1||B.anchorNode!==P.node||B.anchorOffset!==P.offset||B.focusNode!==O.node||B.focusOffset!==O.offset)){var x=K.createRange();x.setStart(P.node,P.offset),B.removeAllRanges(),dt>Yt?(B.addRange(x),B.extend(O.node,O.offset)):(x.setEnd(O.node,O.offset),B.addRange(x))}}}}for(K=[],B=E;B=B.parentNode;)B.nodeType===1&&K.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<K.length;E++){var G=K[E];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}uc=!!ld,ud=ld=null}finally{jt=h,nt.p=l,j.T=a}}e.current=i,ze=2}}function k_(){if(ze===2){ze=0;var e=_r,i=Oa,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var l=nt.p;nt.p=2;var h=jt;jt|=4;try{f_(e,i.alternate,i)}finally{jt=h,nt.p=l,j.T=a}}ze=3}}function U_(){if(ze===4||ze===3){ze=0,Kl();var e=_r,i=Oa,a=Na,l=S_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?ze=5:(ze=0,Oa=_r=null,x_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(gr=null),$s(a),i=i.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(se,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=j.T,h=nt.p,nt.p=2,j.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var E=l[v];d(E.value,{componentStack:E.stack})}}finally{j.T=i,nt.p=h}}(Na&3)!==0&&Zu(),si(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===Yf?el++:(el=0,Yf=e):el=0,nl(0)}}function x_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,ko(i)))}function Zu(e){return P_(),k_(),U_(),L_()}function L_(){if(ze!==5)return!1;var e=_r,i=Kf;Kf=0;var a=$s(Na),l=j.T,h=nt.p;try{nt.p=32>a?32:a,j.T=null,a=Qf,Qf=null;var d=_r,v=Na;if(ze=0,Oa=_r=null,Na=0,(jt&6)!==0)throw Error(s(331));var E=jt;if(jt|=4,T_(d.current),y_(d,d.current,v,a),jt=E,nl(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(se,d)}catch{}return!0}finally{nt.p=h,j.T=l,x_(e,i)}}function z_(e,i,a){i=wn(a,i),i=wf(e.stateNode,i,2),e=or(e,i,2),e!==null&&(vi(e,2),si(e))}function Xt(e,i,a){if(e.tag===3)z_(e,e,a);else for(;i!==null;){if(i.tag===3){z_(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(gr===null||!gr.has(l))){e=wn(a,e),a=jg(2),l=or(i,a,2),l!==null&&(Fg(a,l,i,e),vi(l,2),si(l));break}}i=i.return}}function Jf(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new yA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Hf=!0,h.add(a),e=SA.bind(null,e,i,a),i.then(e,e))}function SA(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Zt===e&&(kt&a)===a&&(oe===4||oe===3&&(kt&62914560)===kt&&300>En()-Gf?(jt&2)===0&&Ma(e,0):jf|=a,Da===kt&&(Da=0)),si(e)}function B_(e,i){i===0&&(i=co()),e=ma(e,i),e!==null&&(vi(e,i),si(e))}function bA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),B_(e,a)}function RA(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),B_(e,a)}function wA(e,i){return Yr(e,i)}var Ju=null,Pa=null,Wf=!1,Wu=!1,td=!1,Ds=0;function si(e){e!==Pa&&e.next===null&&(Pa===null?Ju=Pa=e:Pa=Pa.next=e),Wu=!0,Wf||(Wf=!0,CA())}function nl(e,i){if(!td&&Wu){td=!0;do for(var a=!1,l=Ju;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-Fe(42|e)+1)-1,d&=h&~(v&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,F_(l,d))}else d=kt,d=Xs(l,l===Zt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||ts(l,d)||(a=!0,F_(l,d));l=l.next}while(a);td=!1}}function IA(){q_()}function q_(){Wu=Wf=!1;var e=0;Ds!==0&&(UA()&&(e=Ds),Ds=0);for(var i=En(),a=null,l=Ju;l!==null;){var h=l.next,d=H_(l,i);d===0?(l.next=null,a===null?Ju=h:a.next=h,h===null&&(Pa=a)):(a=l,(e!==0||(d&3)!==0)&&(Wu=!0)),l=h}nl(e)}function H_(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Fe(d),E=1<<v,b=h[v];b===-1?((E&a)===0||(E&l)!==0)&&(h[v]=lo(E,i)):b<=i&&(e.expiredLanes|=E),d&=~E}if(i=Zt,a=kt,a=Xs(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Xr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ts(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Xr(l),$s(a)){case 2:case 8:a=Qs;break;case 32:a=$r;break;case 268435456:a=Ys;break;default:a=$r}return l=j_.bind(null,e),a=Yr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Xr(l),e.callbackPriority=2,e.callbackNode=null,2}function j_(e,i){if(ze!==0&&ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zu()&&e.callbackNode!==a)return null;var l=kt;return l=Xs(e,e===Zt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(R_(e,l,i),H_(e,En()),e.callbackNode!=null&&e.callbackNode===a?j_.bind(null,e):null)}function F_(e,i){if(Zu())return null;R_(e,i,!0)}function CA(){LA(function(){(jt&6)!==0?Yr(ao,IA):q_()})}function ed(){return Ds===0&&(Ds=uo()),Ds}function G_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:na(""+e)}function K_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function DA(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=G_((h[fe]||null).action),v=l.submitter;v&&(i=(i=v[fe]||null)?G_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var E=new ia("action","action",null,l,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ds!==0){var b=v?K_(h,v):new FormData(h);Tf(a,{pending:!0,data:b,method:h.method,action:d},null,b)}}else typeof d=="function"&&(E.preventDefault(),b=v?K_(h,v):new FormData(h),Tf(a,{pending:!0,data:b,method:h.method,action:d},d,b))},currentTarget:h}]})}}for(var nd=0;nd<zh.length;nd++){var id=zh[nd],OA=id.toLowerCase(),NA=id[0].toUpperCase()+id.slice(1);xn(OA,"on"+NA)}xn(Rp,"onAnimationEnd"),xn(wp,"onAnimationIteration"),xn(Ip,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(Y0,"onTransitionRun"),xn(X0,"onTransitionStart"),xn($0,"onTransitionCancel"),xn(Cp,"onTransitionEnd"),Ti("onMouseEnter",["mouseout","mouseover"]),Ti("onMouseLeave",["mouseout","mouseover"]),Ti("onPointerEnter",["pointerout","pointerover"]),Ti("onPointerLeave",["pointerout","pointerover"]),kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function Q_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var E=l[v],b=E.instance,L=E.currentTarget;if(E=E.listener,b!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(F){Bu(F)}h.currentTarget=null,d=b}else for(v=0;v<l.length;v++){if(E=l[v],b=E.instance,L=E.currentTarget,E=E.listener,b!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(F){Bu(F)}h.currentTarget=null,d=b}}}}function Ot(e,i){var a=i[mo];a===void 0&&(a=i[mo]=new Set);var l=e+"__bubble";a.has(l)||(Y_(i,e,2,!1),a.add(l))}function rd(e,i,a){var l=0;i&&(l|=4),Y_(a,e,l,i)}var tc="_reactListening"+Math.random().toString(36).slice(2);function sd(e){if(!e[tc]){e[tc]=!0,po.forEach(function(a){a!=="selectionchange"&&(MA.has(a)||rd(a,!1,e),rd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[tc]||(i[tc]=!0,rd("selectionchange",!1,i))}}function Y_(e,i,a,l){switch(yy(i)){case 2:var h=sS;break;case 8:h=aS;break;default:h=vd}a=h.bind(null,i,a,e),h=void 0,!bn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function ad(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var E=l.stateNode.containerInfo;if(E===h)break;if(v===4)for(v=l.return;v!==null;){var b=v.tag;if((b===3||b===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;E!==null;){if(v=Ei(E),v===null)return;if(b=v.tag,b===5||b===6||b===26||b===27){l=d=v;continue t}E=E.parentNode}}l=l.return}nu(function(){var L=d,F=Sn(a),K=[];t:{var z=Dp.get(e);if(z!==void 0){var B=ia,yt=e;switch(e){case"keypress":if($n(a)===0)break t;case"keydown":case"keyup":B=ua;break;case"focusin":yt="focus",B=aa;break;case"focusout":yt="blur",B=aa;break;case"beforeblur":case"afterblur":B=aa;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=cu;break;case Rp:case wp:case Ip:B=oa;break;case Cp:B=fu;break;case"scroll":case"scrollend":B=iu;break;case"wheel":B=ca;break;case"copy":case"cut":case"paste":B=la;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Io;break;case"toggle":case"beforetoggle":B=mu}var dt=(i&4)!==0,Yt=!dt&&(e==="scroll"||e==="scrollend"),P=dt?z!==null?z+"Capture":null:z;dt=[];for(var O=L,x;O!==null;){var G=O;if(x=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||x===null||P===null||(G=ls(O,P),G!=null&&dt.push(rl(O,G,x))),Yt)break;O=O.return}0<dt.length&&(z=new B(z,yt,null,a,F),K.push({event:z,listeners:dt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&a!==bi&&(yt=a.relatedTarget||a.fromElement)&&(Ei(yt)||yt[Tn]))break t;if((B||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,B?(yt=a.relatedTarget||a.toElement,B=L,yt=yt?Ei(yt):null,yt!==null&&(Yt=u(yt),dt=yt.tag,yt!==Yt||dt!==5&&dt!==27&&dt!==6)&&(yt=null)):(B=null,yt=L),B!==yt)){if(dt=Rn,G="onMouseLeave",P="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(dt=Io,G="onPointerLeave",P="onPointerEnter",O="pointer"),Yt=B==null?z:Kn(B),x=yt==null?z:Kn(yt),z=new dt(G,O+"leave",B,a,F),z.target=Yt,z.relatedTarget=x,G=null,Ei(F)===L&&(dt=new dt(P,O+"enter",yt,a,F),dt.target=x,dt.relatedTarget=Yt,G=dt),Yt=G,B&&yt)e:{for(dt=B,P=yt,O=0,x=dt;x;x=ka(x))O++;for(x=0,G=P;G;G=ka(G))x++;for(;0<O-x;)dt=ka(dt),O--;for(;0<x-O;)P=ka(P),x--;for(;O--;){if(dt===P||P!==null&&dt===P.alternate)break e;dt=ka(dt),P=ka(P)}dt=null}else dt=null;B!==null&&X_(K,z,B,dt,!1),yt!==null&&Yt!==null&&X_(K,Yt,yt,dt,!0)}}t:{if(z=L?Kn(L):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var at=mp;else if(Te(z))if(pp)at=G0;else{at=j0;var Ct=H0}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&Eo(L.elementType)&&(at=mp):at=F0;if(at&&(at=at(e,L))){Di(K,at,a,F);break t}Ct&&Ct(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&nr(z,"number",z.value)}switch(Ct=L?Kn(L):window,e){case"focusin":(Te(Ct)||Ct.contentEditable==="true")&&(ha=Ct,Uh=L,Oo=null);break;case"focusout":Oo=Uh=ha=null;break;case"mousedown":xh=!0;break;case"contextmenu":case"mouseup":case"dragend":xh=!1,Sp(K,a,F);break;case"selectionchange":if(Q0)break;case"keydown":case"keyup":Sp(K,a,F)}var ot;if(Wn)t:{switch(e){case"compositionstart":var gt="onCompositionStart";break t;case"compositionend":gt="onCompositionEnd";break t;case"compositionupdate":gt="onCompositionUpdate";break t}gt=void 0}else Vt?q(e,a)&&(gt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(y&&a.locale!=="ko"&&(Vt||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Vt&&(ot=Ao()):(Xn=F,ir="value"in Xn?Xn.value:Xn.textContent,Vt=!0)),Ct=ec(L,gt),0<Ct.length&&(gt=new Ro(gt,e,null,a,F),K.push({event:gt,listeners:Ct}),ot?gt.data=ot:(ot=et(a),ot!==null&&(gt.data=ot)))),(ot=m?Ee(e,a):Pt(e,a))&&(gt=ec(L,"onBeforeInput"),0<gt.length&&(Ct=new Ro("onBeforeInput","beforeinput",null,a,F),K.push({event:Ct,listeners:gt}),Ct.data=ot)),DA(K,e,L,a,F)}Q_(K,i)})}function rl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function ec(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ls(e,a),h!=null&&l.unshift(rl(e,h,d)),h=ls(e,i),h!=null&&l.push(rl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function ka(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function X_(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var E=a,b=E.alternate,L=E.stateNode;if(E=E.tag,b!==null&&b===l)break;E!==5&&E!==26&&E!==27||L===null||(b=L,h?(L=ls(a,d),L!=null&&v.unshift(rl(a,L,b))):h||(L=ls(a,d),L!=null&&v.push(rl(a,L,b)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var VA=/\r\n?/g,PA=/\u0000|\uFFFD/g;function $_(e){return(typeof e=="string"?e:""+e).replace(VA,`
`).replace(PA,"")}function Z_(e,i){return i=$_(i),$_(e)===i}function nc(){}function Qt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||An(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&An(e,""+l);break;case"className":Qn(e,"class",l);break;case"tabIndex":Qn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Qn(e,a,l);break;case"style":vo(e,l,d);break;case"data":if(i!=="object"){Qn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=na(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Qt(e,i,"name",h.name,h,null),Qt(e,i,"formEncType",h.formEncType,h,null),Qt(e,i,"formMethod",h.formMethod,h,null),Qt(e,i,"formTarget",h.formTarget,h,null)):(Qt(e,i,"encType",h.encType,h,null),Qt(e,i,"method",h.method,h,null),Qt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=na(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=nc);break;case"onScroll":l!=null&&Ot("scroll",e);break;case"onScrollEnd":l!=null&&Ot("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=na(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Ot("beforetoggle",e),Ot("toggle",e),er(e,"popover",l);break;case"xlinkActuate":Ue(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ue(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ue(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ue(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ue(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ue(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":er(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Dh.get(a)||a,er(e,a,l))}}function od(e,i,a,l,h,d){switch(a){case"style":vo(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?An(e,l):(typeof l=="number"||typeof l=="bigint")&&An(e,""+l);break;case"onScroll":l!=null&&Ot("scroll",e);break;case"onScrollEnd":l!=null&&Ot("scrollend",e);break;case"onClick":l!=null&&(e.onclick=nc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[fe]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):er(e,a,l)}}}function Be(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ot("error",e),Ot("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qt(e,i,d,v,a,null)}}h&&Qt(e,i,"srcSet",a.srcSet,a,null),l&&Qt(e,i,"src",a.src,a,null);return;case"input":Ot("invalid",e);var E=d=v=h=null,b=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var F=a[l];if(F!=null)switch(l){case"name":h=F;break;case"type":v=F;break;case"checked":b=F;break;case"defaultChecked":L=F;break;case"value":d=F;break;case"defaultValue":E=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:Qt(e,i,l,F,a,null)}}ss(e,d,E,b,L,v,h,!1),ea(e);return;case"select":Ot("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":v=E;break;case"multiple":l=E;default:Qt(e,i,h,E,a,null)}i=d,a=v,e.multiple=!!l,i!=null?Si(e,!!l,i,!1):a!=null&&Si(e,!!l,a,!0);return;case"textarea":Ot("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Qt(e,i,v,E,a,null)}as(e,l,h,d),ea(e);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(l=a[b],l!=null))switch(b){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qt(e,i,b,l,a,null)}return;case"dialog":Ot("beforetoggle",e),Ot("toggle",e),Ot("cancel",e),Ot("close",e);break;case"iframe":case"object":Ot("load",e);break;case"video":case"audio":for(l=0;l<il.length;l++)Ot(il[l],e);break;case"image":Ot("error",e),Ot("load",e);break;case"details":Ot("toggle",e);break;case"embed":case"source":case"link":Ot("error",e),Ot("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qt(e,i,L,l,a,null)}return;default:if(Eo(i)){for(F in a)a.hasOwnProperty(F)&&(l=a[F],l!==void 0&&od(e,i,F,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&Qt(e,i,E,l,a,null))}function kA(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,E=null,b=null,L=null,F=null;for(B in a){var K=a[B];if(a.hasOwnProperty(B)&&K!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":b=K;default:l.hasOwnProperty(B)||Qt(e,i,B,null,l,K)}}for(var z in l){var B=l[z];if(K=a[z],l.hasOwnProperty(z)&&(B!=null||K!=null))switch(z){case"type":d=B;break;case"name":h=B;break;case"checked":L=B;break;case"defaultChecked":F=B;break;case"value":v=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==K&&Qt(e,i,z,B,l,K)}}un(e,v,E,b,L,F,d,h);return;case"select":B=v=E=z=null;for(d in a)if(b=a[d],a.hasOwnProperty(d)&&b!=null)switch(d){case"value":break;case"multiple":B=b;default:l.hasOwnProperty(d)||Qt(e,i,d,null,l,b)}for(h in l)if(d=l[h],b=a[h],l.hasOwnProperty(h)&&(d!=null||b!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":v=d;default:d!==b&&Qt(e,i,h,d,l,b)}i=E,a=v,l=B,z!=null?Si(e,!!a,z,!1):!!l!=!!a&&(i!=null?Si(e,!!a,i,!0):Si(e,!!a,a?[]:"",!1));return;case"textarea":B=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Qt(e,i,E,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Qt(e,i,v,h,l,d)}Gt(e,z,B);return;case"option":for(var yt in a)if(z=a[yt],a.hasOwnProperty(yt)&&z!=null&&!l.hasOwnProperty(yt))switch(yt){case"selected":e.selected=!1;break;default:Qt(e,i,yt,null,l,z)}for(b in l)if(z=l[b],B=a[b],l.hasOwnProperty(b)&&z!==B&&(z!=null||B!=null))switch(b){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Qt(e,i,b,z,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var dt in a)z=a[dt],a.hasOwnProperty(dt)&&z!=null&&!l.hasOwnProperty(dt)&&Qt(e,i,dt,null,l,z);for(L in l)if(z=l[L],B=a[L],l.hasOwnProperty(L)&&z!==B&&(z!=null||B!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Qt(e,i,L,z,l,B)}return;default:if(Eo(i)){for(var Yt in a)z=a[Yt],a.hasOwnProperty(Yt)&&z!==void 0&&!l.hasOwnProperty(Yt)&&od(e,i,Yt,void 0,l,z);for(F in l)z=l[F],B=a[F],!l.hasOwnProperty(F)||z===B||z===void 0&&B===void 0||od(e,i,F,z,l,B);return}}for(var P in a)z=a[P],a.hasOwnProperty(P)&&z!=null&&!l.hasOwnProperty(P)&&Qt(e,i,P,null,l,z);for(K in l)z=l[K],B=a[K],!l.hasOwnProperty(K)||z===B||z==null&&B==null||Qt(e,i,K,z,l,B)}var ld=null,ud=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function J_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function W_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function cd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var hd=null;function UA(){var e=window.event;return e&&e.type==="popstate"?e===hd?!1:(hd=e,!0):(hd=null,!1)}var ty=typeof setTimeout=="function"?setTimeout:void 0,xA=typeof clearTimeout=="function"?clearTimeout:void 0,ey=typeof Promise=="function"?Promise:void 0,LA=typeof queueMicrotask=="function"?queueMicrotask:typeof ey<"u"?function(e){return ey.resolve(null).then(e).catch(zA)}:ty;function zA(e){setTimeout(function(){throw e})}function vr(e){return e==="head"}function ny(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&sl(v.documentElement),a&2&&sl(v.body),a&4)for(a=v.head,sl(a),v=a.firstChild;v;){var E=v.nextSibling,b=v.nodeName;v[es]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=E}}if(h===0){e.removeChild(d),dl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);dl(i)}function fd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fd(a),tr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function BA(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[es])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=zn(e.nextSibling),e===null)break}return null}function qA(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zn(e.nextSibling),e===null))return null;return e}function dd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function HA(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function zn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var md=null;function iy(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function ry(e,i,a){switch(i=ic(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function sl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);tr(e)}var Mn=new Map,sy=new Set;function rc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hi=nt.d;nt.d={f:jA,r:FA,D:GA,C:KA,L:QA,m:YA,X:$A,S:XA,M:ZA};function jA(){var e=Hi.f(),i=Xu();return e||i}function FA(e){var i=Gn(e);i!==null&&i.tag===5&&i.type==="form"?Rg(i):Hi.r(e)}var Ua=typeof document>"u"?null:document;function ay(e,i,a){var l=Ua;if(l&&typeof i=="string"&&i){var h=de(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),sy.has(h)||(sy.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Be(i,"link",e),le(i),l.head.appendChild(i)))}}function GA(e){Hi.D(e),ay("dns-prefetch",e,null)}function KA(e,i){Hi.C(e,i),ay("preconnect",e,i)}function QA(e,i,a){Hi.L(e,i,a);var l=Ua;if(l&&e&&i){var h='link[rel="preload"][as="'+de(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+de(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+de(a.imageSizes)+'"]')):h+='[href="'+de(e)+'"]';var d=h;switch(i){case"style":d=xa(e);break;case"script":d=La(e)}Mn.has(d)||(e=T({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Mn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(al(d))||i==="script"&&l.querySelector(ol(d))||(i=l.createElement("link"),Be(i,"link",e),le(i),l.head.appendChild(i)))}}function YA(e,i){Hi.m(e,i);var a=Ua;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+de(l)+'"][href="'+de(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=La(e)}if(!Mn.has(d)&&(e=T({rel:"modulepreload",href:e},i),Mn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ol(d)))return}l=a.createElement("link"),Be(l,"link",e),le(l),a.head.appendChild(l)}}}function XA(e,i,a){Hi.S(e,i,a);var l=Ua;if(l&&e){var h=Ze(l).hoistableStyles,d=xa(e);i=i||"default";var v=h.get(d);if(!v){var E={loading:0,preload:null};if(v=l.querySelector(al(d)))E.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Mn.get(d))&&pd(e,a);var b=v=l.createElement("link");le(b),Be(b,"link",e),b._p=new Promise(function(L,F){b.onload=L,b.onerror=F}),b.addEventListener("load",function(){E.loading|=1}),b.addEventListener("error",function(){E.loading|=2}),E.loading|=4,sc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(d,v)}}}function $A(e,i){Hi.X(e,i);var a=Ua;if(a&&e){var l=Ze(a).hoistableScripts,h=La(e),d=l.get(h);d||(d=a.querySelector(ol(h)),d||(e=T({src:e,async:!0},i),(i=Mn.get(h))&&gd(e,i),d=a.createElement("script"),le(d),Be(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function ZA(e,i){Hi.M(e,i);var a=Ua;if(a&&e){var l=Ze(a).hoistableScripts,h=La(e),d=l.get(h);d||(d=a.querySelector(ol(h)),d||(e=T({src:e,async:!0,type:"module"},i),(i=Mn.get(h))&&gd(e,i),d=a.createElement("script"),le(d),Be(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function oy(e,i,a,l){var h=(h=Et.current)?rc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=xa(a.href),a=Ze(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xa(a.href);var d=Ze(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(al(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Mn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mn.set(e,a),d||JA(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=La(a),a=Ze(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xa(e){return'href="'+de(e)+'"'}function al(e){return'link[rel="stylesheet"]['+e+"]"}function ly(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function JA(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Be(i,"link",a),le(i),e.head.appendChild(i))}function La(e){return'[src="'+de(e)+'"]'}function ol(e){return"script[async]"+e}function uy(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+de(a.href)+'"]');if(l)return i.instance=l,le(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),le(l),Be(l,"style",h),sc(l,a.precedence,e),i.instance=l;case"stylesheet":h=xa(a.href);var d=e.querySelector(al(h));if(d)return i.state.loading|=4,i.instance=d,le(d),d;l=ly(a),(h=Mn.get(h))&&pd(l,h),d=(e.ownerDocument||e).createElement("link"),le(d);var v=d;return v._p=new Promise(function(E,b){v.onload=E,v.onerror=b}),Be(d,"link",l),i.state.loading|=4,sc(d,a.precedence,e),i.instance=d;case"script":return d=La(a.src),(h=e.querySelector(ol(d)))?(i.instance=h,le(h),h):(l=a,(h=Mn.get(d))&&(l=T({},a),gd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),le(h),Be(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,sc(l,a.precedence,e));return i.instance}function sc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var E=l[v];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function pd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function gd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var ac=null;function cy(e,i,a){if(ac===null){var l=new Map,h=ac=new Map;h.set(a,l)}else h=ac,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[es]||d[ve]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var E=l.get(v);E?E.push(d):l.set(v,[d])}}return l}function hy(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function WA(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function fy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ll=null;function tS(){}function eS(e,i,a){if(ll===null)throw Error(s(475));var l=ll;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=xa(a.href),d=e.querySelector(al(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=oc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,le(d);return}d=e.ownerDocument||e,a=ly(a),(h=Mn.get(h))&&pd(a,h),d=d.createElement("link"),le(d);var v=d;v._p=new Promise(function(E,b){v.onload=E,v.onerror=b}),Be(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=oc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function nS(){if(ll===null)throw Error(s(475));var e=ll;return e.stylesheets&&e.count===0&&_d(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&_d(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function oc(){if(this.count--,this.count===0){if(this.stylesheets)_d(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function _d(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,i.forEach(iS,e),lc=null,oc.call(e))}function iS(e,i){if(!(i.state.loading&4)){var a=lc.get(e);if(a)var l=a.get(null);else{a=new Map,lc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=oc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var ul={$$typeof:it,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function rS(e,i,a,l,h,d,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.hiddenUpdates=yi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function dy(e,i,a,l,h,d,v,E,b,L,F,K){return e=new rS(e,i,a,v,E,b,L,K),i=1,d===!0&&(i|=24),d=hn(3,null,null,i),e.current=d,d.stateNode=e,i=Zh(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},ef(d),e}function my(e){return e?(e=pa,e):pa}function py(e,i,a,l,h,d){h=my(h),l.context===null?l.context=h:l.pendingContext=h,l=ar(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=or(e,l,i),a!==null&&(gn(a,e,i),zo(a,e,i))}function gy(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function yd(e,i){gy(e,i),(e=e.alternate)&&gy(e,i)}function _y(e){if(e.tag===13){var i=ma(e,67108864);i!==null&&gn(i,e,67108864),yd(e,67108864)}}var uc=!0;function sS(e,i,a,l){var h=j.T;j.T=null;var d=nt.p;try{nt.p=2,vd(e,i,a,l)}finally{nt.p=d,j.T=h}}function aS(e,i,a,l){var h=j.T;j.T=null;var d=nt.p;try{nt.p=8,vd(e,i,a,l)}finally{nt.p=d,j.T=h}}function vd(e,i,a,l){if(uc){var h=Ed(l);if(h===null)ad(e,i,l,cc,a),vy(e,l);else if(lS(h,e,i,a,l))l.stopPropagation();else if(vy(e,l),i&4&&-1<oS.indexOf(e)){for(;h!==null;){var d=Gn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Pn(d.pendingLanes);if(v!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var b=1<<31-Fe(v);E.entanglements[1]|=b,v&=~b}si(d),(jt&6)===0&&(Qu=En()+500,nl(0))}}break;case 13:E=ma(d,2),E!==null&&gn(E,d,2),Xu(),yd(d,2)}if(d=Ed(l),d===null&&ad(e,i,l,cc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else ad(e,i,l,null,a)}}function Ed(e){return e=Sn(e),Td(e)}var cc=null;function Td(e){if(cc=null,e=Ei(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return cc=e,null}function yy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Sh()){case ao:return 2;case Qs:return 8;case $r:case bh:return 32;case Ys:return 268435456;default:return 32}default:return 32}}var Ad=!1,Er=null,Tr=null,Ar=null,cl=new Map,hl=new Map,Sr=[],oS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vy(e,i){switch(e){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":cl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(i.pointerId)}}function fl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Gn(i),i!==null&&_y(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function lS(e,i,a,l,h){switch(i){case"focusin":return Er=fl(Er,e,i,a,l,h),!0;case"dragenter":return Tr=fl(Tr,e,i,a,l,h),!0;case"mouseover":return Ar=fl(Ar,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return cl.set(d,fl(cl.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,hl.set(d,fl(hl.get(d)||null,e,i,a,l,h)),!0}return!1}function Ey(e){var i=Ei(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Xl(e.priority,function(){if(a.tag===13){var l=pn();l=Zi(l);var h=ma(a,l);h!==null&&gn(h,a,l),yd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Ed(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);bi=l,a.target.dispatchEvent(l),bi=null}else return i=Gn(a),i!==null&&_y(i),e.blockedOn=a,!1;i.shift()}return!0}function Ty(e,i,a){hc(e)&&a.delete(i)}function uS(){Ad=!1,Er!==null&&hc(Er)&&(Er=null),Tr!==null&&hc(Tr)&&(Tr=null),Ar!==null&&hc(Ar)&&(Ar=null),cl.forEach(Ty),hl.forEach(Ty)}function fc(e,i){e.blockedOn===i&&(e.blockedOn=null,Ad||(Ad=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,uS)))}var dc=null;function Ay(e){dc!==e&&(dc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){dc===e&&(dc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Td(l||a)===null)continue;break}var d=Gn(a);d!==null&&(e.splice(i,3),i-=3,Tf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function dl(e){function i(b){return fc(b,e)}Er!==null&&fc(Er,e),Tr!==null&&fc(Tr,e),Ar!==null&&fc(Ar,e),cl.forEach(i),hl.forEach(i);for(var a=0;a<Sr.length;a++){var l=Sr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)Ey(a),a.blockedOn===null&&Sr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[fe]||null;if(typeof d=="function")v||Ay(a);else if(v){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[fe]||null)E=v.formAction;else if(Td(h)!==null)continue}else E=v.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),Ay(a)}}}function Sd(e){this._internalRoot=e}mc.prototype.render=Sd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=pn();py(a,l,e,i,null,null)},mc.prototype.unmount=Sd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;py(e.current,2,null,e,null,null),Xu(),i[Tn]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ji();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Sr.length&&i!==0&&i<Sr[a].priority;a++);Sr.splice(a,0,e),a===0&&Ey(e)}};var Sy=t.version;if(Sy!=="19.1.0")throw Error(s(527,Sy,"19.1.0"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var cS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{se=pc.inject(cS),Ht=pc}catch{}}return pl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=zg,d=Bg,v=qg,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=dy(e,1,!1,null,null,a,l,h,d,v,E,null),e[Tn]=i.current,sd(e),new Sd(i)},pl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=zg,v=Bg,E=qg,b=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=dy(e,1,!0,i,a??null,l,h,d,v,E,b,L),i.context=my(null),a=i.current,l=pn(),l=Zi(l),h=ar(l),h.callback=null,or(a,h,l),a=l,i.current.lanes=a,vi(i,a),si(i),e[Tn]=i.current,sd(e),new mc(i)},pl.version="19.1.0",pl}var Vy;function ES(){if(Vy)return wd.exports;Vy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),wd.exports=vS(),wd.exports}var TS=ES();const AS=()=>{};var Py={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},SS=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],p=r[n++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|p&63)-65536;t[s++]=String.fromCharCode(55296+(g>>10)),t[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},dE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,p=f?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,T=u>>2,I=(u&3)<<4|p>>4;let C=(p&15)<<2|_>>6,H=_&63;g||(H=64,f||(C=64)),s.push(n[T],n[I],n[C],n[H])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(fE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):SS(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],p=o<r.length?n[r.charAt(o)]:0;++o;const _=o<r.length?n[r.charAt(o)]:64;++o;const I=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||p==null||_==null||I==null)throw new bS;const C=u<<2|p>>4;if(s.push(C),_!==64){const H=p<<4&240|_>>2;if(s.push(H),I!==64){const X=_<<6&192|I;s.push(X)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class bS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RS=function(r){const t=fE(r);return dE.encodeByteArray(t,!0)},kc=function(r){return RS(r).replace(/\./g,"")},mE=function(r){try{return dE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=()=>wS().__FIREBASE_DEFAULTS__,CS=()=>{if(typeof process>"u"||typeof Py>"u")return;const r=Py.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},DS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&mE(r[1]);return t&&JSON.parse(t)},eh=()=>{try{return AS()||IS()||CS()||DS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},pE=r=>{var t,n;return(n=(t=eh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},gE=r=>{const t=pE(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},_E=()=>{var r;return(r=eh())===null||r===void 0?void 0:r.config},yE=r=>{var t;return(t=eh())===null||t===void 0?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(r){return r.endsWith(".cloudworkstations.dev")}async function ym(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[kc(JSON.stringify(n)),kc(JSON.stringify(f)),""].join(".")}const El={};function NS(){const r={prod:[],emulator:[]};for(const t of Object.keys(El))El[t]?r.emulator.push(t):r.prod.push(t);return r}function MS(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let ky=!1;function vm(r,t){if(typeof window>"u"||typeof document>"u"||!Fr(window.location.host)||El[r]===t||El[r]||ky)return;El[r]=t;function n(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=NS().prod.length>0;function f(){const C=document.getElementById(s);C&&C.remove()}function p(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function g(C,H){C.setAttribute("width","24"),C.setAttribute("id",H),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function _(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{ky=!0,f()},C}function T(C,H){C.setAttribute("id",H),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function I(){const C=MS(s),H=n("text"),X=document.getElementById(H)||document.createElement("span"),W=n("learnmore"),Y=document.getElementById(W)||document.createElement("a"),mt=n("preprendIcon"),tt=document.getElementById(mt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const it=C.element;p(it),T(Y,W);const ct=_();g(tt,mt),it.append(tt,X,Y,ct),document.body.appendChild(it)}u?(X.innerText="Preview backend disconnected.",tt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(tt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,X.innerText="Preview backend running in this workspace."),X.setAttribute("id",H)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function PS(){var r;const t=(r=eh())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function US(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function xS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LS(){const r=$e();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function zS(){return!PS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BS(){try{return typeof indexedDB=="object"}catch{return!1}}function qS(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="FirebaseError";class gi extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=HS,Object.setPrototypeOf(this,gi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kl.prototype.create)}}class kl{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?jS(u,s):"Error",p=`${this.serviceName}: ${f} (${o}).`;return new gi(o,p,s)}}function jS(r,t){return r.replace(FS,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const FS=/\{\$([^}]+)}/g;function GS(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Ps(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(Uy(u)&&Uy(f)){if(!Ps(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Uy(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function KS(r,t){const n=new QS(r,t);return n.subscribe.bind(n)}class QS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");YS(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Od),o.error===void 0&&(o.error=Od),o.complete===void 0&&(o.complete=Od);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YS(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Od(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(r){return r&&r._delegate?r._delegate:r}class xr{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new OS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ZS(t))try{this.getOrInitializeService({instanceIdentifier:Os})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Os){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Os){return this.instances.has(t)}getOptions(t=Os){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&t(f,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$S(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Os){return this.component?this.component.multipleInstances?t:Os:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $S(r){return r===Os?void 0:r}function ZS(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new XS(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Nt||(Nt={}));const WS={debug:Nt.DEBUG,verbose:Nt.VERBOSE,info:Nt.INFO,warn:Nt.WARN,error:Nt.ERROR,silent:Nt.SILENT},t1=Nt.INFO,e1={[Nt.DEBUG]:"log",[Nt.VERBOSE]:"log",[Nt.INFO]:"info",[Nt.WARN]:"warn",[Nt.ERROR]:"error"},n1=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=e1[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Em{constructor(t){this.name=t,this._logLevel=t1,this._logHandler=n1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Nt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?WS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Nt.DEBUG,...t),this._logHandler(this,Nt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Nt.VERBOSE,...t),this._logHandler(this,Nt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Nt.INFO,...t),this._logHandler(this,Nt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Nt.WARN,...t),this._logHandler(this,Nt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Nt.ERROR,...t),this._logHandler(this,Nt.ERROR,...t)}}const i1=(r,t)=>t.some(n=>r instanceof n);let xy,Ly;function r1(){return xy||(xy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s1(){return Ly||(Ly=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const EE=new WeakMap,Fd=new WeakMap,TE=new WeakMap,Nd=new WeakMap,Tm=new WeakMap;function a1(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Nr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&EE.set(n,r)}).catch(()=>{}),Tm.set(t,r),t}function o1(r){if(Fd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Fd.set(r,t)}let Gd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Fd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||TE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function l1(r){Gd=r(Gd)}function u1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Md(this),t,...n);return TE.set(s,t.sort?t.sort():[t]),Nr(s)}:s1().includes(r)?function(...t){return r.apply(Md(this),t),Nr(EE.get(this))}:function(...t){return Nr(r.apply(Md(this),t))}}function c1(r){return typeof r=="function"?u1(r):(r instanceof IDBTransaction&&o1(r),i1(r,r1())?new Proxy(r,Gd):r)}function Nr(r){if(r instanceof IDBRequest)return a1(r);if(Nd.has(r))return Nd.get(r);const t=c1(r);return t!==r&&(Nd.set(r,t),Tm.set(t,r)),t}const Md=r=>Tm.get(r);function h1(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),p=Nr(f);return s&&f.addEventListener("upgradeneeded",g=>{s(Nr(f.result),g.oldVersion,g.newVersion,Nr(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),p.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const f1=["get","getKey","getAll","getAllKeys","count"],d1=["put","add","delete","clear"],Vd=new Map;function zy(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Vd.get(t))return Vd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=d1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||f1.includes(n)))return;const u=async function(f,...p){const g=this.transaction(f,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(p.shift())),(await Promise.all([_[n](...p),o&&g.done]))[0]};return Vd.set(t,u),u}l1(r=>({...r,get:(t,n,s)=>zy(t,n)||r.get(t,n,s),has:(t,n)=>!!zy(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(p1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function p1(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Kd="@firebase/app",By="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new Em("@firebase/app"),g1="@firebase/app-compat",_1="@firebase/analytics-compat",y1="@firebase/analytics",v1="@firebase/app-check-compat",E1="@firebase/app-check",T1="@firebase/auth",A1="@firebase/auth-compat",S1="@firebase/database",b1="@firebase/data-connect",R1="@firebase/database-compat",w1="@firebase/functions",I1="@firebase/functions-compat",C1="@firebase/installations",D1="@firebase/installations-compat",O1="@firebase/messaging",N1="@firebase/messaging-compat",M1="@firebase/performance",V1="@firebase/performance-compat",P1="@firebase/remote-config",k1="@firebase/remote-config-compat",U1="@firebase/storage",x1="@firebase/storage-compat",L1="@firebase/firestore",z1="@firebase/ai",B1="@firebase/firestore-compat",q1="firebase",H1="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="[DEFAULT]",j1={[Kd]:"fire-core",[g1]:"fire-core-compat",[y1]:"fire-analytics",[_1]:"fire-analytics-compat",[E1]:"fire-app-check",[v1]:"fire-app-check-compat",[T1]:"fire-auth",[A1]:"fire-auth-compat",[S1]:"fire-rtdb",[b1]:"fire-data-connect",[R1]:"fire-rtdb-compat",[w1]:"fire-fn",[I1]:"fire-fn-compat",[C1]:"fire-iid",[D1]:"fire-iid-compat",[O1]:"fire-fcm",[N1]:"fire-fcm-compat",[M1]:"fire-perf",[V1]:"fire-perf-compat",[P1]:"fire-rc",[k1]:"fire-rc-compat",[U1]:"fire-gcs",[x1]:"fire-gcs-compat",[L1]:"fire-fst",[B1]:"fire-fst-compat",[z1]:"fire-vertex","fire-js":"fire-js",[q1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=new Map,F1=new Map,Yd=new Map;function qy(r,t){try{r.container.addComponent(t)}catch(n){Ki.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function ks(r){const t=r.name;if(Yd.has(t))return Ki.debug(`There were multiple attempts to register component ${t}.`),!1;Yd.set(t,r);for(const n of Uc.values())qy(n,r);for(const n of F1.values())qy(n,r);return!0}function nh(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function _n(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mr=new kl("app","Firebase",G1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=H1;function AE(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Qd,automaticDataCollectionEnabled:!0},t),o=s.name;if(typeof o!="string"||!o)throw Mr.create("bad-app-name",{appName:String(o)});if(n||(n=_E()),!n)throw Mr.create("no-options");const u=Uc.get(o);if(u){if(Ps(n,u.options)&&Ps(s,u.config))return u;throw Mr.create("duplicate-app",{appName:o})}const f=new JS(o);for(const g of Yd.values())f.addComponent(g);const p=new K1(n,s,f);return Uc.set(o,p),p}function Am(r=Qd){const t=Uc.get(r);if(!t&&r===Qd&&_E())return AE();if(!t)throw Mr.create("no-app",{appName:r});return t}function ui(r,t,n){var s;let o=(s=j1[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=t.match(/\s|\//);if(u||f){const p=[`Unable to register library "${o}" with version "${t}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&p.push("and"),f&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ki.warn(p.join(" "));return}ks(new xr(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1="firebase-heartbeat-database",Y1=1,Il="firebase-heartbeat-store";let Pd=null;function SE(){return Pd||(Pd=h1(Q1,Y1,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Il)}catch(n){console.warn(n)}}}}).catch(r=>{throw Mr.create("idb-open",{originalErrorMessage:r.message})})),Pd}async function X1(r){try{const n=(await SE()).transaction(Il),s=await n.objectStore(Il).get(bE(r));return await n.done,s}catch(t){if(t instanceof gi)Ki.warn(t.message);else{const n=Mr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ki.warn(n.message)}}}async function Hy(r,t){try{const s=(await SE()).transaction(Il,"readwrite");await s.objectStore(Il).put(t,bE(r)),await s.done}catch(n){if(n instanceof gi)Ki.warn(n.message);else{const s=Mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ki.warn(s.message)}}}function bE(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=1024,Z1=30;class J1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=jy();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>Z1){const f=eb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ki.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jy(),{heartbeatsToSend:s,unsentEntries:o}=W1(this._heartbeatsCache.heartbeats),u=kc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Ki.warn(n),""}}}function jy(){return new Date().toISOString().substring(0,10)}function W1(r,t=$1){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Fy(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Fy(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class tb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BS()?qS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await X1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Hy(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Hy(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Fy(r){return kc(JSON.stringify({version:2,heartbeats:r})).length}function eb(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(r){ks(new xr("platform-logger",t=>new m1(t),"PRIVATE")),ks(new xr("heartbeat",t=>new J1(t),"PRIVATE")),ui(Kd,By,r),ui(Kd,By,"esm2017"),ui("fire-js","")}nb("");var ib="firebase",rb="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ui(ib,rb,"app");function Sm(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function RE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sb=RE,wE=new kl("auth","Firebase",RE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new Em("@firebase/auth");function ab(r,...t){xc.logLevel<=Nt.WARN&&xc.warn(`Auth (${Hs}): ${r}`,...t)}function Rc(r,...t){xc.logLevel<=Nt.ERROR&&xc.error(`Auth (${Hs}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(r,...t){throw Rm(r,...t)}function qn(r,...t){return Rm(r,...t)}function bm(r,t,n){const s=Object.assign(Object.assign({},sb()),{[t]:n});return new kl("auth","Firebase",s).create(t,{appName:r.name})}function Vr(r){return bm(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ob(r,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&di(r,"argument-error"),bm(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rm(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return wE.create(r,...t)}function vt(r,t,...n){if(!r)throw Rm(t,...n)}function Fi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Rc(t),new Error(t)}function Qi(r,t){r||Fi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function lb(){return Gy()==="http:"||Gy()==="https:"}function Gy(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lb()||US()||"connection"in navigator)?navigator.onLine:!0}function cb(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,n){this.shortDelay=t,this.longDelay=n,Qi(n>t,"Short delay should be less than long delay!"),this.isMobile=VS()||xS()}get(){return ub()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(r,t){Qi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],db=new xl(3e4,6e4);function Ll(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function js(r,t,n,s,o={}){return CE(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const p=Ul(Object.assign({key:r.config.apiKey},f)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:t,headers:g},u);return kS()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Fr(r.emulatorConfig.host)&&(_.credentials="include"),IE.fetch()(await OE(r,r.config.apiHost,n,p),_)})}async function CE(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},hb),t);try{const o=new pb(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw gc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const p=u.ok?f.errorMessage:f.error.message,[g,_]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw gc(r,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw gc(r,"email-already-in-use",f);if(g==="USER_DISABLED")throw gc(r,"user-disabled",f);const T=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw bm(r,T,_);di(r,T)}}catch(o){if(o instanceof gi)throw o;di(r,"network-request-failed",{message:String(o)})}}async function DE(r,t,n,s,o={}){const u=await js(r,t,n,s,o);return"mfaPendingCredential"in u&&di(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function OE(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?wm(r.config,o):`${r.config.apiScheme}://${o}`;return fb.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function mb(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(qn(this.auth,"network-request-failed")),db.get())})}}function gc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=qn(r,t,s);return o.customData._tokenResponse=n,o}function Ky(r){return r!==void 0&&r.enterprise!==void 0}class gb{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return mb(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _b(r,t){return js(r,"GET","/v2/recaptchaConfig",Ll(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(r,t){return js(r,"POST","/v1/accounts:delete",t)}async function Lc(r,t){return js(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function vb(r,t=!1){const n=Pe(r),s=await n.getIdToken(t),o=Im(s);vt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Tl(kd(o.auth_time)),issuedAtTime:Tl(kd(o.iat)),expirationTime:Tl(kd(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function kd(r){return Number(r)*1e3}function Im(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Rc("JWT malformed, contained fewer than 3 sections"),null;try{const o=mE(n);return o?JSON.parse(o):(Rc("Failed to decode base64 JWT payload"),null)}catch(o){return Rc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Qy(r){const t=Im(r);return vt(t,"internal-error"),vt(typeof t.exp<"u","internal-error"),vt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof gi&&Eb(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function Eb({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tl(this.lastLoginAt),this.creationTime=Tl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zc(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Cl(r,Lc(n,{idToken:s}));vt(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?NE(u.providerUserInfo):[],p=Sb(r.providerData,f),g=r.isAnonymous,_=!(r.email&&u.passwordHash)&&!(p!=null&&p.length),T=g?_:!1,I={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new $d(u.createdAt,u.lastLoginAt),isAnonymous:T};Object.assign(r,I)}async function Ab(r){const t=Pe(r);await zc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Sb(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function NE(r){return r.map(t=>{var{providerId:n}=t,s=Sm(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(r,t){const n=await CE(r,{},async()=>{const s=Ul({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await OE(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:s};return r.emulatorConfig&&Fr(r.emulatorConfig.host)&&(g.credentials="include"),IE.fetch()(f,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Rb(r,t){return js(r,"POST","/v2/accounts:revokeToken",Ll(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){vt(t.idToken,"internal-error"),vt(typeof t.idToken<"u","internal-error"),vt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Qy(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){vt(t.length!==0,"internal-error");const n=Qy(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(vt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await bb(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new ja;return s&&(vt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(vt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(vt(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ja,this.toJSON())}_performRefresh(){return Fi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(r,t){vt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Bn{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,u=Sm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new $d(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await Cl(this,this.stsTokenManager.getToken(this.auth,t));return vt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return vb(this,t)}reload(){return Ab(this)}_assign(t){this!==t&&(vt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Bn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){vt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await zc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(Vr(this.auth));const t=await this.getIdToken();return await Cl(this,yb(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,u,f,p,g,_,T;const I=(s=n.displayName)!==null&&s!==void 0?s:void 0,C=(o=n.email)!==null&&o!==void 0?o:void 0,H=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,X=(f=n.photoURL)!==null&&f!==void 0?f:void 0,W=(p=n.tenantId)!==null&&p!==void 0?p:void 0,Y=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,mt=(_=n.createdAt)!==null&&_!==void 0?_:void 0,tt=(T=n.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:it,emailVerified:ct,isAnonymous:pt,providerData:bt,stsTokenManager:M}=n;vt(it&&M,t,"internal-error");const S=ja.fromJSON(this.name,M);vt(typeof it=="string",t,"internal-error"),Rr(I,t.name),Rr(C,t.name),vt(typeof ct=="boolean",t,"internal-error"),vt(typeof pt=="boolean",t,"internal-error"),Rr(H,t.name),Rr(X,t.name),Rr(W,t.name),Rr(Y,t.name),Rr(mt,t.name),Rr(tt,t.name);const R=new Bn({uid:it,auth:t,email:C,emailVerified:ct,displayName:I,isAnonymous:pt,photoURL:X,phoneNumber:H,tenantId:W,stsTokenManager:S,createdAt:mt,lastLoginAt:tt});return bt&&Array.isArray(bt)&&(R.providerData=bt.map(N=>Object.assign({},N))),Y&&(R._redirectEventId=Y),R}static async _fromIdTokenResponse(t,n,s=!1){const o=new ja;o.updateFromServerResponse(n);const u=new Bn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await zc(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];vt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?NE(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new ja;p.updateFromIdToken(s);const g=new Bn({uid:o.localId,auth:t,stsTokenManager:p,isAnonymous:f}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new $d(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=new Map;function Gi(r){Qi(r instanceof Function,"Expected a class definition");let t=Yy.get(r);return t?(Qi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,Yy.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ME.type="NONE";const Xy=ME;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(r,t,n){return`firebase:${r}:${t}:${n}`}class Fa{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=wc(this.userKey,o.apiKey,u),this.fullPersistenceKey=wc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Lc(this.auth,{idToken:t}).catch(()=>{});return n?Bn._fromGetAccountInfoResponse(this.auth,n,t):null}return Bn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Fa(Gi(Xy),t,s);const o=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Gi(Xy);const f=wc(s,t.config.apiKey,t.name);let p=null;for(const _ of n)try{const T=await _._get(f);if(T){let I;if(typeof T=="string"){const C=await Lc(t,{idToken:T}).catch(()=>{});if(!C)break;I=await Bn._fromGetAccountInfoResponse(t,C,T)}else I=Bn._fromJSON(t,T);_!==u&&(p=I),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Fa(u,t,s):(u=g[0],p&&await u._set(f,p.toJSON()),await Promise.all(n.map(async _=>{if(_!==u)try{await _._remove(f)}catch{}})),new Fa(u,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(UE(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(VE(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(LE(t))return"Blackberry";if(zE(t))return"Webos";if(PE(t))return"Safari";if((t.includes("chrome/")||kE(t))&&!t.includes("edge/"))return"Chrome";if(xE(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function VE(r=$e()){return/firefox\//i.test(r)}function PE(r=$e()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function kE(r=$e()){return/crios\//i.test(r)}function UE(r=$e()){return/iemobile/i.test(r)}function xE(r=$e()){return/android/i.test(r)}function LE(r=$e()){return/blackberry/i.test(r)}function zE(r=$e()){return/webos/i.test(r)}function Cm(r=$e()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function wb(r=$e()){var t;return Cm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Ib(){return LS()&&document.documentMode===10}function BE(r=$e()){return Cm(r)||xE(r)||zE(r)||LE(r)||/windows phone/i.test(r)||UE(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(r,t=[]){let n;switch(r){case"Browser":n=$y($e());break;case"Worker":n=`${$y($e())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,p)=>{try{const g=t(u);f(g)}catch(g){p(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(r,t={}){return js(r,"GET","/v2/passwordPolicy",Ll(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=6;class Nb{constructor(t){var n,s,o,u;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:Ob,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,u,f,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,g),this.validatePasswordCharacterOptions(t,g),g.isValid&&(g.isValid=(n=g.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(f=g.containsNumericCharacter)!==null&&f!==void 0?f:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zy(this),this.idTokenSubscription=new Zy(this),this.beforeStateQueue=new Cb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Gi(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Fa.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Lc(this,{idToken:t}),s=await Bn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(_n(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,p=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(t);(!f||f===p)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return vt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await zc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=cb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(_n(this.app))return Promise.reject(Vr(this));const n=t?Pe(t):null;return n&&vt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&vt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(Vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return _n(this.app)?Promise.reject(Vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Db(this),n=new Nb(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new kl("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Rb(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Gi(t)||this._popupRedirectResolver;vt(n,this,"argument-error"),this.redirectPersistenceManager=await Fa.create(this,[Gi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(vt(p,this,"internal-error"),p.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=t.addObserver(n,s,o);return()=>{f=!0,g()}}else{const g=t.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return vt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=qE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(_n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&ab(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fs(r){return Pe(r)}class Zy{constructor(t){this.auth=t,this.observer=null,this.addObserver=KS(n=>this.observer=n)}get next(){return vt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ih={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vb(r){ih=r}function HE(r){return ih.loadJS(r)}function Pb(){return ih.recaptchaEnterpriseScript}function kb(){return ih.gapiScript}function Ub(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class xb{constructor(){this.enterprise=new Lb}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class Lb{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const zb="recaptcha-enterprise",jE="NO_RECAPTCHA";class Bb{constructor(t){this.type=zb,this.auth=Fs(t)}async verify(t="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,p)=>{_b(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const _=new gb(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,f(_.siteKey)}}).catch(g=>{p(g)})})}function o(u,f,p){const g=window.grecaptcha;Ky(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:t}).then(_=>{f(_)}).catch(()=>{f(jE)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xb().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(p=>{if(!n&&Ky(window.grecaptcha))o(p,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=Pb();g.length!==0&&(g+=p),HE(g).then(()=>{o(p,u,f)}).catch(_=>{f(_)})}}).catch(p=>{f(p)})})}}async function Jy(r,t,n,s=!1,o=!1){const u=new Bb(r);let f;if(o)f=jE;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const p=Object.assign({},t);return s?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function qb(r,t,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Jy(r,t,n,n==="getOobCode");return s(r,f)}else return s(r,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await Jy(r,t,n,n==="getOobCode");return s(r,p)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(r,t){const n=nh(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Ps(u,t??{}))return o;di(o,"already-initialized")}return n.initialize({options:t})}function jb(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Gi);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function Fb(r,t,n){const s=Fs(r);vt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=FE(t),{host:f,port:p}=Gb(t),g=p===null?"":`:${p}`,_={url:`${u}//${f}${g}/`},T=Object.freeze({host:f,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){vt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),vt(Ps(_,s.config.emulator)&&Ps(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,Fr(f)?(ym(`${u}//${f}${g}`),vm("Auth",!0)):Kb()}function FE(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function Gb(r){const t=FE(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Wy(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Wy(f)}}}function Wy(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function Kb(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Fi("not implemented")}_getIdTokenResponse(t){return Fi("not implemented")}_linkToIdToken(t,n){return Fi("not implemented")}_getReauthenticationResolver(t){return Fi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ga(r,t){return DE(r,"POST","/v1/accounts:signInWithIdp",Ll(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="http://localhost";class Us extends GE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Us(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):di("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,u=Sm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new Us(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Ga(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Ga(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ga(t,n)}buildRequest(){const t={requestUri:Qb,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ul(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends Dm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends zl{constructor(){super("facebook.com")}static credential(t){return Us._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wr.credentialFromTaggedObject(t)}static credentialFromError(t){return wr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wr.credential(t.oauthAccessToken)}catch{return null}}}wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";wr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends zl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Us._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ji.credentialFromTaggedObject(t)}static credentialFromError(t){return ji.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return ji.credential(n,s)}catch{return null}}}ji.GOOGLE_SIGN_IN_METHOD="google.com";ji.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends zl{constructor(){super("github.com")}static credential(t){return Us._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ir.credentialFromTaggedObject(t)}static credentialFromError(t){return Ir.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ir.credential(t.oauthAccessToken)}catch{return null}}}Ir.GITHUB_SIGN_IN_METHOD="github.com";Ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends zl{constructor(){super("twitter.com")}static credential(t,n){return Us._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Cr.credentialFromTaggedObject(t)}static credentialFromError(t){return Cr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Cr.credential(n,s)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(r,t){return DE(r,"POST","/v1/accounts:signUp",Ll(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await Bn._fromIdTokenResponse(t,s,o),f=tv(s);return new xs({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=tv(s);return new xs({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function tv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends gi{constructor(t,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Bc.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new Bc(t,n,s,o)}}function KE(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Bc._fromErrorAndOperation(r,u,t,s):u})}async function Xb(r,t,n=!1){const s=await Cl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return xs._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b(r,t,n=!1){const{auth:s}=r;if(_n(s.app))return Promise.reject(Vr(s));const o="reauthenticate";try{const u=await Cl(r,KE(s,o,t,r),n);vt(u.idToken,s,"internal-error");const f=Im(u.idToken);vt(f,s,"internal-error");const{sub:p}=f;return vt(r.uid===p,s,"user-mismatch"),xs._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&di(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(r,t,n=!1){if(_n(r.app))return Promise.reject(Vr(r));const s="signIn",o=await KE(r,s,t),u=await xs._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(r){const t=Fs(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Wb(r,t,n){if(_n(r.app))return Promise.reject(Vr(r));const s=Fs(r),f=await qb(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yb).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Jb(r),g}),p=await xs._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(p.user),p}function tR(r,t,n,s){return Pe(r).onIdTokenChanged(t,n,s)}function eR(r,t,n){return Pe(r).beforeAuthStateChanged(t,n)}function nR(r){return Pe(r).signOut()}const qc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qc,"1"),this.storage.removeItem(qc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=1e3,rR=10;class YE extends QE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=BE(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,p,g)=>{this.notifyListeners(f,g)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);Ib()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,rR):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},iR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}YE.type="LOCAL";const sR=YE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE extends QE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}XE.type="SESSION";const $E=XE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new rh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(f).map(async _=>_(n.origin,u)),g=await aR(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((p,g)=>{const _=Om("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(I){const C=I;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(C.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:_,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){return window}function lR(r){ci().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(){return typeof ci().WorkerGlobalScope<"u"&&typeof ci().importScripts=="function"}async function uR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cR(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function hR(){return ZE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="firebaseLocalStorageDb",fR=1,Hc="firebaseLocalStorage",WE="fbase_key";class Bl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sh(r,t){return r.transaction([Hc],t?"readwrite":"readonly").objectStore(Hc)}function dR(){const r=indexedDB.deleteDatabase(JE);return new Bl(r).toPromise()}function Zd(){const r=indexedDB.open(JE,fR);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Hc,{keyPath:WE})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Hc)?t(s):(s.close(),await dR(),t(await Zd()))})})}async function ev(r,t,n){const s=sh(r,!0).put({[WE]:t,value:n});return new Bl(s).toPromise()}async function mR(r,t){const n=sh(r,!1).get(t),s=await new Bl(n).toPromise();return s===void 0?null:s.value}function nv(r,t){const n=sh(r,!0).delete(t);return new Bl(n).toPromise()}const pR=800,gR=3;class tT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zd(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>gR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ZE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rh._getInstance(hR()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await uR(),!this.activeServiceWorker)return;this.sender=new oR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||cR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Zd();return await ev(t,qc,"1"),await nv(t,qc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ev(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>mR(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>nv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=sh(o,!1).getAll();return new Bl(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tT.type="LOCAL";const _R=tT;new xl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(r,t){return t?Gi(t):(vt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm extends GE{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ga(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ga(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ga(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function yR(r){return Zb(r.auth,new Nm(r),r.bypassAuthState)}function vR(r){const{auth:t,user:n}=r;return vt(n,t,"internal-error"),$b(n,new Nm(r),r.bypassAuthState)}async function ER(r){const{auth:t,user:n}=r;return vt(n,t,"internal-error"),Xb(n,new Nm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:p}=t;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(_){this.reject(_)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return yR;case"linkViaPopup":case"linkViaRedirect":return ER;case"reauthViaPopup":case"reauthViaRedirect":return vR;default:di(this.auth,"internal-error")}}resolve(t){Qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=new xl(2e3,1e4);async function AR(r,t,n){if(_n(r.app))return Promise.reject(qn(r,"operation-not-supported-in-this-environment"));const s=Fs(r);ob(r,t,Dm);const o=eT(s,n);return new Ns(s,"signInViaPopup",t,o).executeNotNull()}class Ns extends nT{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return vt(t,this.auth,"internal-error"),t}async onExecution(){Qi(this.filter.length===1,"Popup operations only handle one event");const t=Om();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,TR.get())};t()}}Ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR="pendingRedirect",Ic=new Map;class bR extends nT{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Ic.get(this.auth._key());if(!t){try{const s=await RR(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Ic.set(this.auth._key(),t)}return this.bypassAuthState||Ic.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RR(r,t){const n=CR(t),s=IR(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function wR(r,t){Ic.set(r._key(),t)}function IR(r){return Gi(r._redirectPersistence)}function CR(r){return wc(SR,r.config.apiKey,r.name)}async function DR(r,t,n=!1){if(_n(r.app))return Promise.reject(Vr(r));const s=Fs(r),o=eT(s,t),f=await new bR(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=10*60*1e3;class NR{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!MR(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!iT(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(qn(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=OR&&this.cachedEventUids.clear(),this.cachedEventUids.has(iv(t))}saveEventToCache(t){this.cachedEventUids.add(iv(t)),this.lastProcessedEventTime=Date.now()}}function iv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function iT({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function MR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iT(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(r,t={}){return js(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kR=/^https?/;async function UR(r){if(r.config.emulator)return;const{authorizedDomains:t}=await VR(r);for(const n of t)try{if(xR(n))return}catch{}di(r,"unauthorized-domain")}function xR(r){const t=Xd(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!kR.test(n))return!1;if(PR.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=new xl(3e4,6e4);function rv(){const r=ci().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function zR(r){return new Promise((t,n)=>{var s,o,u;function f(){rv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{rv(),n(qn(r,"network-request-failed"))},timeout:LR.get()})}if(!((o=(s=ci().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=ci().gapi)===null||u===void 0)&&u.load)f();else{const p=Ub("iframefcb");return ci()[p]=()=>{gapi.load?f():n(qn(r,"network-request-failed"))},HE(`${kb()}?onload=${p}`).catch(g=>n(g))}}).catch(t=>{throw Cc=null,t})}let Cc=null;function BR(r){return Cc=Cc||zR(r),Cc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=new xl(5e3,15e3),HR="__/auth/iframe",jR="emulator/auth/iframe",FR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KR(r){const t=r.config;vt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?wm(t,jR):`https://${r.config.authDomain}/${HR}`,s={apiKey:t.apiKey,appName:r.name,v:Hs},o=GR.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ul(s).slice(1)}`}async function QR(r){const t=await BR(r),n=ci().gapi;return vt(n,r,"internal-error"),t.open({where:document.body,url:KR(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FR,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=qn(r,"network-request-failed"),p=ci().setTimeout(()=>{u(f)},qR.get());function g(){ci().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XR=500,$R=600,ZR="_blank",JR="http://localhost";class sv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WR(r,t,n,s=XR,o=$R){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g=Object.assign(Object.assign({},YR),{width:s.toString(),height:o.toString(),top:u,left:f}),_=$e().toLowerCase();n&&(p=kE(_)?ZR:n),VE(_)&&(t=t||JR,g.scrollbars="yes");const T=Object.entries(g).reduce((C,[H,X])=>`${C}${H}=${X},`,"");if(wb(_)&&p!=="_self")return tw(t||"",p),new sv(null);const I=window.open(t||"",p,T);vt(I,r,"popup-blocked");try{I.focus()}catch{}return new sv(I)}function tw(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="__/auth/handler",nw="emulator/auth/handler",iw=encodeURIComponent("fac");async function av(r,t,n,s,o,u){vt(r.config.authDomain,r,"auth-domain-config-required"),vt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Hs,eventId:o};if(t instanceof Dm){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",GS(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[T,I]of Object.entries({}))f[T]=I}if(t instanceof zl){const T=t.getScopes().filter(I=>I!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const p=f;for(const T of Object.keys(p))p[T]===void 0&&delete p[T];const g=await r._getAppCheckToken(),_=g?`#${iw}=${encodeURIComponent(g)}`:"";return`${rw(r)}?${Ul(p).slice(1)}${_}`}function rw({config:r}){return r.emulator?wm(r,nw):`https://${r.authDomain}/${ew}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="webStorageSupport";class sw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$E,this._completeRedirectFn=DR,this._overrideRedirectResult=wR}async _openPopup(t,n,s,o){var u;Qi((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await av(t,n,s,Xd(),o);return WR(t,f,Om())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await av(t,n,s,Xd(),o);return lR(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Qi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await QR(t),s=new NR(t);return n.register("authEvent",o=>(vt(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ud,{type:Ud},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Ud];f!==void 0&&n(!!f),di(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UR(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return BE()||PE()||Cm()}}const aw=sw;var ov="@firebase/auth",lv="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){vt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uw(r){ks(new xr("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=s.options;vt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qE(r)},_=new Mb(s,o,u,g);return jb(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),ks(new xr("auth-internal",t=>{const n=Fs(t.getProvider("auth").getImmediate());return(s=>new ow(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ui(ov,lv,lw(r)),ui(ov,lv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=5*60,hw=yE("authIdTokenMaxAge")||cw;let uv=null;const fw=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>hw)return;const o=n==null?void 0:n.token;uv!==o&&(uv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function dw(r=Am()){const t=nh(r,"auth");if(t.isInitialized())return t.getImmediate();const n=Hb(r,{popupRedirectResolver:aw,persistence:[_R,sR,$E]}),s=yE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=fw(u.toString());eR(n,f,()=>f(n.currentUser)),tR(n,p=>f(p))}}const o=pE("auth");return o&&Fb(n,`http://${o}`),n}function mw(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}Vb({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=qn("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",mw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uw("Browser");var cv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,rT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(M,S){function R(){}R.prototype=S.prototype,M.D=S.prototype,M.prototype=new R,M.prototype.constructor=M,M.C=function(N,V,k){for(var w=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)w[ke-2]=arguments[ke];return S.prototype[V].apply(N,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,S,R){R||(R=0);var N=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)N[V]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(V=0;16>V;++V)N[V]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=M.g[0],R=M.g[1],V=M.g[2];var k=M.g[3],w=S+(k^R&(V^k))+N[0]+3614090360&4294967295;S=R+(w<<7&4294967295|w>>>25),w=k+(V^S&(R^V))+N[1]+3905402710&4294967295,k=S+(w<<12&4294967295|w>>>20),w=V+(R^k&(S^R))+N[2]+606105819&4294967295,V=k+(w<<17&4294967295|w>>>15),w=R+(S^V&(k^S))+N[3]+3250441966&4294967295,R=V+(w<<22&4294967295|w>>>10),w=S+(k^R&(V^k))+N[4]+4118548399&4294967295,S=R+(w<<7&4294967295|w>>>25),w=k+(V^S&(R^V))+N[5]+1200080426&4294967295,k=S+(w<<12&4294967295|w>>>20),w=V+(R^k&(S^R))+N[6]+2821735955&4294967295,V=k+(w<<17&4294967295|w>>>15),w=R+(S^V&(k^S))+N[7]+4249261313&4294967295,R=V+(w<<22&4294967295|w>>>10),w=S+(k^R&(V^k))+N[8]+1770035416&4294967295,S=R+(w<<7&4294967295|w>>>25),w=k+(V^S&(R^V))+N[9]+2336552879&4294967295,k=S+(w<<12&4294967295|w>>>20),w=V+(R^k&(S^R))+N[10]+4294925233&4294967295,V=k+(w<<17&4294967295|w>>>15),w=R+(S^V&(k^S))+N[11]+2304563134&4294967295,R=V+(w<<22&4294967295|w>>>10),w=S+(k^R&(V^k))+N[12]+1804603682&4294967295,S=R+(w<<7&4294967295|w>>>25),w=k+(V^S&(R^V))+N[13]+4254626195&4294967295,k=S+(w<<12&4294967295|w>>>20),w=V+(R^k&(S^R))+N[14]+2792965006&4294967295,V=k+(w<<17&4294967295|w>>>15),w=R+(S^V&(k^S))+N[15]+1236535329&4294967295,R=V+(w<<22&4294967295|w>>>10),w=S+(V^k&(R^V))+N[1]+4129170786&4294967295,S=R+(w<<5&4294967295|w>>>27),w=k+(R^V&(S^R))+N[6]+3225465664&4294967295,k=S+(w<<9&4294967295|w>>>23),w=V+(S^R&(k^S))+N[11]+643717713&4294967295,V=k+(w<<14&4294967295|w>>>18),w=R+(k^S&(V^k))+N[0]+3921069994&4294967295,R=V+(w<<20&4294967295|w>>>12),w=S+(V^k&(R^V))+N[5]+3593408605&4294967295,S=R+(w<<5&4294967295|w>>>27),w=k+(R^V&(S^R))+N[10]+38016083&4294967295,k=S+(w<<9&4294967295|w>>>23),w=V+(S^R&(k^S))+N[15]+3634488961&4294967295,V=k+(w<<14&4294967295|w>>>18),w=R+(k^S&(V^k))+N[4]+3889429448&4294967295,R=V+(w<<20&4294967295|w>>>12),w=S+(V^k&(R^V))+N[9]+568446438&4294967295,S=R+(w<<5&4294967295|w>>>27),w=k+(R^V&(S^R))+N[14]+3275163606&4294967295,k=S+(w<<9&4294967295|w>>>23),w=V+(S^R&(k^S))+N[3]+4107603335&4294967295,V=k+(w<<14&4294967295|w>>>18),w=R+(k^S&(V^k))+N[8]+1163531501&4294967295,R=V+(w<<20&4294967295|w>>>12),w=S+(V^k&(R^V))+N[13]+2850285829&4294967295,S=R+(w<<5&4294967295|w>>>27),w=k+(R^V&(S^R))+N[2]+4243563512&4294967295,k=S+(w<<9&4294967295|w>>>23),w=V+(S^R&(k^S))+N[7]+1735328473&4294967295,V=k+(w<<14&4294967295|w>>>18),w=R+(k^S&(V^k))+N[12]+2368359562&4294967295,R=V+(w<<20&4294967295|w>>>12),w=S+(R^V^k)+N[5]+4294588738&4294967295,S=R+(w<<4&4294967295|w>>>28),w=k+(S^R^V)+N[8]+2272392833&4294967295,k=S+(w<<11&4294967295|w>>>21),w=V+(k^S^R)+N[11]+1839030562&4294967295,V=k+(w<<16&4294967295|w>>>16),w=R+(V^k^S)+N[14]+4259657740&4294967295,R=V+(w<<23&4294967295|w>>>9),w=S+(R^V^k)+N[1]+2763975236&4294967295,S=R+(w<<4&4294967295|w>>>28),w=k+(S^R^V)+N[4]+1272893353&4294967295,k=S+(w<<11&4294967295|w>>>21),w=V+(k^S^R)+N[7]+4139469664&4294967295,V=k+(w<<16&4294967295|w>>>16),w=R+(V^k^S)+N[10]+3200236656&4294967295,R=V+(w<<23&4294967295|w>>>9),w=S+(R^V^k)+N[13]+681279174&4294967295,S=R+(w<<4&4294967295|w>>>28),w=k+(S^R^V)+N[0]+3936430074&4294967295,k=S+(w<<11&4294967295|w>>>21),w=V+(k^S^R)+N[3]+3572445317&4294967295,V=k+(w<<16&4294967295|w>>>16),w=R+(V^k^S)+N[6]+76029189&4294967295,R=V+(w<<23&4294967295|w>>>9),w=S+(R^V^k)+N[9]+3654602809&4294967295,S=R+(w<<4&4294967295|w>>>28),w=k+(S^R^V)+N[12]+3873151461&4294967295,k=S+(w<<11&4294967295|w>>>21),w=V+(k^S^R)+N[15]+530742520&4294967295,V=k+(w<<16&4294967295|w>>>16),w=R+(V^k^S)+N[2]+3299628645&4294967295,R=V+(w<<23&4294967295|w>>>9),w=S+(V^(R|~k))+N[0]+4096336452&4294967295,S=R+(w<<6&4294967295|w>>>26),w=k+(R^(S|~V))+N[7]+1126891415&4294967295,k=S+(w<<10&4294967295|w>>>22),w=V+(S^(k|~R))+N[14]+2878612391&4294967295,V=k+(w<<15&4294967295|w>>>17),w=R+(k^(V|~S))+N[5]+4237533241&4294967295,R=V+(w<<21&4294967295|w>>>11),w=S+(V^(R|~k))+N[12]+1700485571&4294967295,S=R+(w<<6&4294967295|w>>>26),w=k+(R^(S|~V))+N[3]+2399980690&4294967295,k=S+(w<<10&4294967295|w>>>22),w=V+(S^(k|~R))+N[10]+4293915773&4294967295,V=k+(w<<15&4294967295|w>>>17),w=R+(k^(V|~S))+N[1]+2240044497&4294967295,R=V+(w<<21&4294967295|w>>>11),w=S+(V^(R|~k))+N[8]+1873313359&4294967295,S=R+(w<<6&4294967295|w>>>26),w=k+(R^(S|~V))+N[15]+4264355552&4294967295,k=S+(w<<10&4294967295|w>>>22),w=V+(S^(k|~R))+N[6]+2734768916&4294967295,V=k+(w<<15&4294967295|w>>>17),w=R+(k^(V|~S))+N[13]+1309151649&4294967295,R=V+(w<<21&4294967295|w>>>11),w=S+(V^(R|~k))+N[4]+4149444226&4294967295,S=R+(w<<6&4294967295|w>>>26),w=k+(R^(S|~V))+N[11]+3174756917&4294967295,k=S+(w<<10&4294967295|w>>>22),w=V+(S^(k|~R))+N[2]+718787259&4294967295,V=k+(w<<15&4294967295|w>>>17),w=R+(k^(V|~S))+N[9]+3951481745&4294967295,M.g[0]=M.g[0]+S&4294967295,M.g[1]=M.g[1]+(V+(w<<21&4294967295|w>>>11))&4294967295,M.g[2]=M.g[2]+V&4294967295,M.g[3]=M.g[3]+k&4294967295}s.prototype.u=function(M,S){S===void 0&&(S=M.length);for(var R=S-this.blockSize,N=this.B,V=this.h,k=0;k<S;){if(V==0)for(;k<=R;)o(this,M,k),k+=this.blockSize;if(typeof M=="string"){for(;k<S;)if(N[V++]=M.charCodeAt(k++),V==this.blockSize){o(this,N),V=0;break}}else for(;k<S;)if(N[V++]=M[k++],V==this.blockSize){o(this,N),V=0;break}}this.h=V,this.o+=S},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var S=1;S<M.length-8;++S)M[S]=0;var R=8*this.o;for(S=M.length-8;S<M.length;++S)M[S]=R&255,R/=256;for(this.u(M),M=Array(16),S=R=0;4>S;++S)for(var N=0;32>N;N+=8)M[R++]=this.g[S]>>>N&255;return M};function u(M,S){var R=p;return Object.prototype.hasOwnProperty.call(R,M)?R[M]:R[M]=S(M)}function f(M,S){this.h=S;for(var R=[],N=!0,V=M.length-1;0<=V;V--){var k=M[V]|0;N&&k==S||(R[V]=k,N=!1)}this.g=R}var p={};function g(M){return-128<=M&&128>M?u(M,function(S){return new f([S|0],0>S?-1:0)}):new f([M|0],0>M?-1:0)}function _(M){if(isNaN(M)||!isFinite(M))return I;if(0>M)return Y(_(-M));for(var S=[],R=1,N=0;M>=R;N++)S[N]=M/R|0,R*=4294967296;return new f(S,0)}function T(M,S){if(M.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(M.charAt(0)=="-")return Y(T(M.substring(1),S));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(S,8)),N=I,V=0;V<M.length;V+=8){var k=Math.min(8,M.length-V),w=parseInt(M.substring(V,V+k),S);8>k?(k=_(Math.pow(S,k)),N=N.j(k).add(_(w))):(N=N.j(R),N=N.add(_(w)))}return N}var I=g(0),C=g(1),H=g(16777216);r=f.prototype,r.m=function(){if(W(this))return-Y(this).m();for(var M=0,S=1,R=0;R<this.g.length;R++){var N=this.i(R);M+=(0<=N?N:4294967296+N)*S,S*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(X(this))return"0";if(W(this))return"-"+Y(this).toString(M);for(var S=_(Math.pow(M,6)),R=this,N="";;){var V=ct(R,S).g;R=mt(R,V.j(S));var k=((0<R.g.length?R.g[0]:R.h)>>>0).toString(M);if(R=V,X(R))return k+N;for(;6>k.length;)k="0"+k;N=k+N}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function X(M){if(M.h!=0)return!1;for(var S=0;S<M.g.length;S++)if(M.g[S]!=0)return!1;return!0}function W(M){return M.h==-1}r.l=function(M){return M=mt(this,M),W(M)?-1:X(M)?0:1};function Y(M){for(var S=M.g.length,R=[],N=0;N<S;N++)R[N]=~M.g[N];return new f(R,~M.h).add(C)}r.abs=function(){return W(this)?Y(this):this},r.add=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0,V=0;V<=S;V++){var k=N+(this.i(V)&65535)+(M.i(V)&65535),w=(k>>>16)+(this.i(V)>>>16)+(M.i(V)>>>16);N=w>>>16,k&=65535,w&=65535,R[V]=w<<16|k}return new f(R,R[R.length-1]&-2147483648?-1:0)};function mt(M,S){return M.add(Y(S))}r.j=function(M){if(X(this)||X(M))return I;if(W(this))return W(M)?Y(this).j(Y(M)):Y(Y(this).j(M));if(W(M))return Y(this.j(Y(M)));if(0>this.l(H)&&0>M.l(H))return _(this.m()*M.m());for(var S=this.g.length+M.g.length,R=[],N=0;N<2*S;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<M.g.length;V++){var k=this.i(N)>>>16,w=this.i(N)&65535,ke=M.i(V)>>>16,re=M.i(V)&65535;R[2*N+2*V]+=w*re,tt(R,2*N+2*V),R[2*N+2*V+1]+=k*re,tt(R,2*N+2*V+1),R[2*N+2*V+1]+=w*ke,tt(R,2*N+2*V+1),R[2*N+2*V+2]+=k*ke,tt(R,2*N+2*V+2)}for(N=0;N<S;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=S;N<2*S;N++)R[N]=0;return new f(R,0)};function tt(M,S){for(;(M[S]&65535)!=M[S];)M[S+1]+=M[S]>>>16,M[S]&=65535,S++}function it(M,S){this.g=M,this.h=S}function ct(M,S){if(X(S))throw Error("division by zero");if(X(M))return new it(I,I);if(W(M))return S=ct(Y(M),S),new it(Y(S.g),Y(S.h));if(W(S))return S=ct(M,Y(S)),new it(Y(S.g),S.h);if(30<M.g.length){if(W(M)||W(S))throw Error("slowDivide_ only works with positive integers.");for(var R=C,N=S;0>=N.l(M);)R=pt(R),N=pt(N);var V=bt(R,1),k=bt(N,1);for(N=bt(N,2),R=bt(R,2);!X(N);){var w=k.add(N);0>=w.l(M)&&(V=V.add(R),k=w),N=bt(N,1),R=bt(R,1)}return S=mt(M,V.j(S)),new it(V,S)}for(V=I;0<=M.l(S);){for(R=Math.max(1,Math.floor(M.m()/S.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),k=_(R),w=k.j(S);W(w)||0<w.l(M);)R-=N,k=_(R),w=k.j(S);X(k)&&(k=C),V=V.add(k),M=mt(M,w)}return new it(V,M)}r.A=function(M){return ct(this,M).h},r.and=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)&M.i(N);return new f(R,this.h&M.h)},r.or=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)|M.i(N);return new f(R,this.h|M.h)},r.xor=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)^M.i(N);return new f(R,this.h^M.h)};function pt(M){for(var S=M.g.length+1,R=[],N=0;N<S;N++)R[N]=M.i(N)<<1|M.i(N-1)>>>31;return new f(R,M.h)}function bt(M,S){var R=S>>5;S%=32;for(var N=M.g.length-R,V=[],k=0;k<N;k++)V[k]=0<S?M.i(k+R)>>>S|M.i(k+R+1)<<32-S:M.i(k+R);return new f(V,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,rT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=_,f.fromString=T,Pr=f}).apply(typeof cv<"u"?cv:typeof self<"u"?self:typeof window<"u"?window:{});var _c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sT,_l,aT,Dc,Jd,oT,lT,uT;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,y){return c==Array.prototype||c==Object.prototype||(c[m]=y.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof _c=="object"&&_c];for(var m=0;m<c.length;++m){var y=c[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=n(this);function o(c,m){if(m)t:{var y=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var U=c[A];if(!(U in y))break t;y=y[U]}c=c[c.length-1],A=y[c],m=m(A),m!=A&&m!=null&&t(y,c,{configurable:!0,writable:!0,value:m})}}function u(c,m){c instanceof String&&(c+="");var y=0,A=!1,U={next:function(){if(!A&&y<c.length){var q=y++;return{value:m(q,c[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},p=this||self;function g(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function _(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function T(c,m,y){return c.call.apply(c.bind,arguments)}function I(c,m,y){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,A),c.apply(m,U)}}return function(){return c.apply(m,arguments)}}function C(c,m,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:I,C.apply(null,arguments)}function H(c,m){var y=Array.prototype.slice.call(arguments,1);return function(){var A=y.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function X(c,m){function y(){}y.prototype=m.prototype,c.aa=m.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(A,U,q){for(var et=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)et[Vt-2]=arguments[Vt];return m.prototype[U].apply(A,et)}}function W(c){const m=c.length;if(0<m){const y=Array(m);for(let A=0;A<m;A++)y[A]=c[A];return y}return[]}function Y(c,m){for(let y=1;y<arguments.length;y++){const A=arguments[y];if(g(A)){const U=c.length||0,q=A.length||0;c.length=U+q;for(let et=0;et<q;et++)c[U+et]=A[et]}else c.push(A)}}class mt{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function tt(c){return/^[\s\xa0]*$/.test(c)}function it(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function ct(c){return ct[" "](c),c}ct[" "]=function(){};var pt=it().indexOf("Gecko")!=-1&&!(it().toLowerCase().indexOf("webkit")!=-1&&it().indexOf("Edge")==-1)&&!(it().indexOf("Trident")!=-1||it().indexOf("MSIE")!=-1)&&it().indexOf("Edge")==-1;function bt(c,m,y){for(const A in c)m.call(y,c[A],A,c)}function M(c,m){for(const y in c)m.call(void 0,c[y],y,c)}function S(c){const m={};for(const y in c)m[y]=c[y];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,m){let y,A;for(let U=1;U<arguments.length;U++){A=arguments[U];for(y in A)c[y]=A[y];for(let q=0;q<R.length;q++)y=R[q],Object.prototype.hasOwnProperty.call(A,y)&&(c[y]=A[y])}}function V(c){var m=1;c=c.split(":");const y=[];for(;0<m&&c.length;)y.push(c.shift()),m--;return c.length&&y.push(c.join(":")),y}function k(c){p.setTimeout(()=>{throw c},0)}function w(){var c=Lt;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class ke{constructor(){this.h=this.g=null}add(m,y){const A=re.get();A.set(m,y),this.h?this.h.next=A:this.g=A,this.h=A}}var re=new mt(()=>new j,c=>c.reset());class j{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,lt=!1,Lt=new ke,D=()=>{const c=p.Promise.resolve(void 0);nt=()=>{c.then($)}};var $=()=>{for(var c;c=w();){try{c.h.call(c.g)}catch(y){k(y)}var m=re;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}lt=!1};function rt(){this.s=this.s,this.C=this.C}rt.prototype.s=!1,rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var ht=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};p.addEventListener("test",y,m),p.removeEventListener("test",y,m)}catch{}return c}();function It(c,m){if(J.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(pt){t:{try{ct(m.nodeName);var U=!0;break t}catch{}U=!1}U||(m=null)}}else y=="mouseover"?m=c.fromElement:y=="mouseout"&&(m=c.toElement);this.relatedTarget=m,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Et[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&It.aa.h.call(this)}}X(It,J);var Et={2:"touch",3:"pen",4:"mouse"};It.prototype.h=function(){It.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ie="closure_listenable_"+(1e6*Math.random()|0),$t=0;function jn(c,m,y,A,U){this.listener=c,this.proxy=null,this.src=m,this.type=y,this.capture=!!A,this.ha=U,this.key=++$t,this.da=this.fa=!1}function $i(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function _i(c){this.src=c,this.g={},this.h=0}_i.prototype.add=function(c,m,y,A,U){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var et=Yr(c,m,A,U);return-1<et?(m=c[et],y||(m.fa=!1)):(m=new jn(m,this.src,q,!!A,U),m.fa=y,c.push(m)),m};function Qr(c,m){var y=m.type;if(y in c.g){var A=c.g[y],U=Array.prototype.indexOf.call(A,m,void 0),q;(q=0<=U)&&Array.prototype.splice.call(A,U,1),q&&($i(m),c.g[y].length==0&&(delete c.g[y],c.h--))}}function Yr(c,m,y,A){for(var U=0;U<c.length;++U){var q=c[U];if(!q.da&&q.listener==m&&q.capture==!!y&&q.ha==A)return U}return-1}var Xr="closure_lm_"+(1e6*Math.random()|0),so={};function Kl(c,m,y,A,U){if(Array.isArray(m)){for(var q=0;q<m.length;q++)Kl(c,m[q],y,A,U);return null}return y=Ql(y),c&&c[Ie]?c.K(m,y,_(A)?!!A.capture:!1,U):En(c,m,y,!1,A,U)}function En(c,m,y,A,U,q){if(!m)throw Error("Invalid event type");var et=_(U)?!!U.capture:!!U,Vt=Ys(c);if(Vt||(c[Xr]=Vt=new _i(c)),y=Vt.add(m,y,A,et,q),y.proxy)return y;if(A=Sh(),y.proxy=A,A.src=c,A.listener=y,c.addEventListener)ht||(U=et),U===void 0&&(U=!1),c.addEventListener(m.toString(),A,U);else if(c.attachEvent)c.attachEvent($r(m.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Sh(){function c(y){return m.call(c.src,c.listener,y)}const m=bh;return c}function ao(c,m,y,A,U){if(Array.isArray(m))for(var q=0;q<m.length;q++)ao(c,m[q],y,A,U);else A=_(A)?!!A.capture:!!A,y=Ql(y),c&&c[Ie]?(c=c.i,m=String(m).toString(),m in c.g&&(q=c.g[m],y=Yr(q,y,A,U),-1<y&&($i(q[y]),Array.prototype.splice.call(q,y,1),q.length==0&&(delete c.g[m],c.h--)))):c&&(c=Ys(c))&&(m=c.g[m.toString()],c=-1,m&&(c=Yr(m,y,A,U)),(y=-1<c?m[c]:null)&&Qs(y))}function Qs(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Ie])Qr(m.i,c);else{var y=c.type,A=c.proxy;m.removeEventListener?m.removeEventListener(y,A,c.capture):m.detachEvent?m.detachEvent($r(y),A):m.addListener&&m.removeListener&&m.removeListener(A),(y=Ys(m))?(Qr(y,c),y.h==0&&(y.src=null,m[Xr]=null)):$i(c)}}}function $r(c){return c in so?so[c]:so[c]="on"+c}function bh(c,m){if(c.da)c=!0;else{m=new It(m,this);var y=c.listener,A=c.ha||c.src;c.fa&&Qs(c),c=y.call(A,m)}return c}function Ys(c){return c=c[Xr],c instanceof _i?c:null}var oo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ql(c){return typeof c=="function"?c:(c[oo]||(c[oo]=function(m){return c.handleEvent(m)}),c[oo])}function se(){rt.call(this),this.i=new _i(this),this.M=this,this.F=null}X(se,rt),se.prototype[Ie]=!0,se.prototype.removeEventListener=function(c,m,y,A){ao(this,c,m,y,A)};function Ht(c,m){var y,A=c.F;if(A)for(y=[];A;A=A.F)y.push(A);if(c=c.M,A=m.type||m,typeof m=="string")m=new J(m,c);else if(m instanceof J)m.target=m.target||c;else{var U=m;m=new J(A,c),N(m,U)}if(U=!0,y)for(var q=y.length-1;0<=q;q--){var et=m.g=y[q];U=ln(et,A,!0,m)&&U}if(et=m.g=c,U=ln(et,A,!0,m)&&U,U=ln(et,A,!1,m)&&U,y)for(q=0;q<y.length;q++)et=m.g=y[q],U=ln(et,A,!1,m)&&U}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var y=c.g[m],A=0;A<y.length;A++)$i(y[A]);delete c.g[m],c.h--}}this.F=null},se.prototype.K=function(c,m,y,A){return this.i.add(String(c),m,!1,y,A)},se.prototype.L=function(c,m,y,A){return this.i.add(String(c),m,!0,y,A)};function ln(c,m,y,A){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,q=0;q<m.length;++q){var et=m[q];if(et&&!et.da&&et.capture==y){var Vt=et.listener,Ee=et.ha||et.src;et.fa&&Qr(c.i,et),U=Vt.call(Ee,A)!==!1&&U}}return U&&!A.defaultPrevented}function Fe(c,m,y){if(typeof c=="function")y&&(c=C(c,y));else if(c&&typeof c.handleEvent=="function")c=C(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:p.setTimeout(c,m||0)}function Yl(c){c.g=Fe(()=>{c.g=null,c.i&&(c.i=!1,Yl(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Rh extends rt{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Yl(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zr(c){rt.call(this),this.h=c,this.g={}}X(Zr,rt);var Jr=[];function Wr(c){bt(c.g,function(m,y){this.g.hasOwnProperty(y)&&Qs(m)},c),c.g={}}Zr.prototype.N=function(){Zr.aa.N.call(this),Wr(this)},Zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pn=p.JSON.stringify,Xs=p.JSON.parse,ts=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function lo(){}lo.prototype.h=null;function uo(c){return c.h||(c.h=c.i())}function co(){}var yi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vi(){J.call(this,"d")}X(vi,J);function ho(){J.call(this,"c")}X(ho,J);var Fn={},fo=null;function Zi(){return fo=fo||new se}Fn.La="serverreachability";function $s(c){J.call(this,Fn.La,c)}X($s,J);function Ji(c){const m=Zi();Ht(m,new $s(m))}Fn.STAT_EVENT="statevent";function Xl(c,m){J.call(this,Fn.STAT_EVENT,c),this.stat=m}X(Xl,J);function Wt(c){const m=Zi();Ht(m,new Xl(m,c))}Fn.Ma="timingevent";function ve(c,m){J.call(this,Fn.Ma,c),this.size=m}X(ve,J);function fe(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},m)}function Tn(){this.g=!0}Tn.prototype.xa=function(){this.g=!1};function mo(c,m,y,A,U,q){c.info(function(){if(c.g)if(q)for(var et="",Vt=q.split("&"),Ee=0;Ee<Vt.length;Ee++){var Pt=Vt[Ee].split("=");if(1<Pt.length){var De=Pt[0];Pt=Pt[1];var Te=De.split("_");et=2<=Te.length&&Te[1]=="type"?et+(De+"="+Pt+"&"):et+(De+"=redacted&")}}else et=null;else et=q;return"XMLHTTP REQ ("+A+") [attempt "+U+"]: "+m+`
`+y+`
`+et})}function wh(c,m,y,A,U,q,et){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+U+"]: "+m+`
`+y+`
`+q+" "+et})}function Wi(c,m,y,A){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+es(c,y)+(A?" "+A:"")})}function $l(c,m){c.info(function(){return"TIMEOUT: "+m})}Tn.prototype.info=function(){};function es(c,m){if(!c.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var A=y[c];if(!(2>A.length)){var U=A[1];if(Array.isArray(U)&&!(1>U.length)){var q=U[0];if(q!="noop"&&q!="stop"&&q!="close")for(var et=1;et<U.length;et++)U[et]=""}}}}return Pn(y)}catch{return m}}var tr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ei={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gn;function Kn(){}X(Kn,lo),Kn.prototype.g=function(){return new XMLHttpRequest},Kn.prototype.i=function(){return{}},Gn=new Kn;function Ze(c,m,y,A){this.j=c,this.i=m,this.l=y,this.R=A||1,this.U=new Zr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new le}function le(){this.i=null,this.g="",this.h=!1}var po={},Zs={};function kn(c,m,y){c.L=1,c.v=as(un(m)),c.m=y,c.P=!0,Ti(c,null)}function Ti(c,m){c.F=Date.now(),ns(c),c.A=un(c.v);var y=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),To(y.i,"t",A),c.C=0,y=c.j.J,c.h=new le,c.g=fu(c.j,y?m:null,!c.m),0<c.O&&(c.M=new Rh(C(c.Y,c,c.g),c.O)),m=c.U,y=c.g,A=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(Jr[0]=U.toString()),U=Jr);for(var q=0;q<U.length;q++){var et=Kl(y,U[q],A||m.handleEvent,!1,m.h||m);if(!et)break;m.g[et.key]=et}m=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),Ji(),mo(c.i,c.u,c.A,c.l,c.R,c.m)}Ze.prototype.ca=function(c){c=c.target;const m=this.M;m&&Rn(c)==3?m.j():this.Y(c)},Ze.prototype.Y=function(c){try{if(c==this.g)t:{const Te=Rn(this.g);var m=this.g.Ba();const Di=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||ru(this.g)))){this.J||Te!=4||m==7||(m==8||0>=Di?Ji(3):Ji(2)),er(this);var y=this.g.Z();this.X=y;e:if(Zl(this)){var A=ru(this.g);c="";var U=A.length,q=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ue(this),Qn(this);var et="";break e}this.h.i=new p.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,c+=this.h.i.decode(A[m],{stream:!(q&&m==U-1)});A.length=0,this.h.g+=c,this.C=0,et=this.h.g}else et=this.g.oa();if(this.o=y==200,wh(this.i,this.u,this.A,this.l,this.R,Te,y),this.o){if(this.T&&!this.K){e:{if(this.g){var Vt,Ee=this.g;if((Vt=Ee.g?Ee.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tt(Vt)){var Pt=Vt;break e}}Pt=null}if(y=Pt)Wi(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,is(this,y);else{this.o=!1,this.s=3,Wt(12),Ue(this),Qn(this);break t}}if(this.P){y=!0;let xe;for(;!this.J&&this.C<et.length;)if(xe=Jl(this,et),xe==Zs){Te==4&&(this.s=4,Wt(14),y=!1),Wi(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==po){this.s=4,Wt(15),Wi(this.i,this.l,et,"[Invalid Chunk]"),y=!1;break}else Wi(this.i,this.l,xe,null),is(this,xe);if(Zl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||et.length!=0||this.h.h||(this.s=1,Wt(16),y=!1),this.o=this.o&&y,!y)Wi(this.i,this.l,et,"[Invalid Chunked Response]"),Ue(this),Qn(this);else if(0<et.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+et.length),ms(De),De.M=!0,Wt(11))}}else Wi(this.i,this.l,et,null),is(this,et);Te==4&&Ue(this),this.o&&!this.J&&(Te==4?uu(this.j,this):(this.o=!1,ns(this)))}else Nh(this.g),y==400&&0<et.indexOf("Unknown SID")?(this.s=3,Wt(12)):(this.s=0,Wt(13)),Ue(this),Qn(this)}}}catch{}finally{}};function Zl(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Jl(c,m){var y=c.C,A=m.indexOf(`
`,y);return A==-1?Zs:(y=Number(m.substring(y,A)),isNaN(y)?po:(A+=1,A+y>m.length?Zs:(m=m.slice(A,A+y),c.C=A+y,m)))}Ze.prototype.cancel=function(){this.J=!0,Ue(this)};function ns(c){c.S=Date.now()+c.I,Wl(c,c.I)}function Wl(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=fe(C(c.ba,c),m)}function er(c){c.B&&(p.clearTimeout(c.B),c.B=null)}Ze.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?($l(this.i,this.A),this.L!=2&&(Ji(),Wt(17)),Ue(this),this.s=2,Qn(this)):Wl(this,this.S-c)};function Qn(c){c.j.G==0||c.J||uu(c.j,c)}function Ue(c){er(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,Wr(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function is(c,m){try{var y=c.j;if(y.G!=0&&(y.g==c||go(y.h,c))){if(!c.K&&go(y.h,c)&&y.G==3){try{var A=y.Da.g.parse(m)}catch{A=null}if(Array.isArray(A)&&A.length==3){var U=A;if(U[0]==0){t:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)ua(y),oa(y);else break t;wo(y),Wt(18)}}else y.za=U[1],0<y.za-y.T&&37500>U[2]&&y.F&&y.v==0&&!y.C&&(y.C=fe(C(y.Za,y),6e3));if(1>=Ws(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Ci(y,11)}else if((c.K||y.g==c)&&ua(y),!tt(m))for(U=y.Da.g.parse(m),m=0;m<U.length;m++){let Pt=U[m];if(y.T=Pt[0],Pt=Pt[1],y.G==2)if(Pt[0]=="c"){y.K=Pt[1],y.ia=Pt[2];const De=Pt[3];De!=null&&(y.la=De,y.j.info("VER="+y.la));const Te=Pt[4];Te!=null&&(y.Aa=Te,y.j.info("SVER="+y.Aa));const Di=Pt[5];Di!=null&&typeof Di=="number"&&0<Di&&(A=1.5*Di,y.L=A,y.j.info("backChannelRequestTimeoutMs_="+A)),A=y;const xe=c.g;if(xe){const ti=xe.g?xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ti){var q=A.h;q.g||ti.indexOf("spdy")==-1&&ti.indexOf("quic")==-1&&ti.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(ta(q,q.h),q.h=null))}if(A.D){const Co=xe.g?xe.g.getResponseHeader("X-HTTP-Session-Id"):null;Co&&(A.ya=Co,Gt(A.I,A.D,Co))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),A=y;var et=c;if(A.qa=hu(A,A.J?A.ia:null,A.W),et.K){Je(A.h,et);var Vt=et,Ee=A.L;Ee&&(Vt.I=Ee),Vt.B&&(er(Vt),ns(Vt)),A.g=et}else ou(A);0<y.i.length&&la(y)}else Pt[0]!="stop"&&Pt[0]!="close"||Ci(y,7);else y.G==3&&(Pt[0]=="stop"||Pt[0]=="close"?Pt[0]=="stop"?Ci(y,7):bo(y):Pt[0]!="noop"&&y.l&&y.l.ta(Pt),y.v=0)}}Ji(4)}catch{}}var tu=class{constructor(c,m){this.g=c,this.map=m}};function Ai(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Js(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ws(c){return c.h?1:c.g?c.g.size:0}function go(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function ta(c,m){c.g?c.g.add(m):c.h=m}function Je(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}Ai.prototype.cancel=function(){if(this.i=_o(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function _o(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const y of c.g.values())m=m.concat(y.D);return m}return W(c.i)}function Ih(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var m=[],y=c.length,A=0;A<y;A++)m.push(c[A]);return m}m=[],y=0;for(A in c)m[y++]=c[A];return m}function ea(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var m=[];c=c.length;for(var y=0;y<c;y++)m.push(y);return m}m=[],y=0;for(const A in c)m[y++]=A;return m}}}function yo(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var y=ea(c),A=Ih(c),U=A.length,q=0;q<U;q++)m.call(void 0,A[q],y&&y[q],c)}var rs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ch(c,m){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var A=c[y].indexOf("="),U=null;if(0<=A){var q=c[y].substring(0,A);U=c[y].substring(A+1)}else q=c[y];m(q,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function de(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof de){this.h=c.h,ss(this,c.j),this.o=c.o,this.g=c.g,nr(this,c.s),this.l=c.l;var m=c.i,y=new bi;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),Si(this,y),this.m=c.m}else c&&(m=String(c).match(rs))?(this.h=!1,ss(this,m[1]||"",!0),this.o=An(m[2]||""),this.g=An(m[3]||"",!0),nr(this,m[4]),this.l=An(m[5]||"",!0),Si(this,m[6]||"",!0),this.m=An(m[7]||"")):(this.h=!1,this.i=new bi(null,this.h))}de.prototype.toString=function(){var c=[],m=this.j;m&&c.push(os(m,vo,!0),":");var y=this.g;return(y||m=="file")&&(c.push("//"),(m=this.o)&&c.push(os(m,vo,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(os(y,y.charAt(0)=="/"?Dh:Eo,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",os(y,na)),c.join("")};function un(c){return new de(c)}function ss(c,m,y){c.j=y?An(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function nr(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function Si(c,m,y){m instanceof bi?(c.i=m,nu(c.i,c.h)):(y||(m=os(m,Oh)),c.i=new bi(m,c.h))}function Gt(c,m,y){c.i.set(m,y)}function as(c){return Gt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function An(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function os(c,m,y){return typeof c=="string"?(c=encodeURI(c).replace(m,eu),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function eu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var vo=/[#\/\?@]/g,Eo=/[#\?:]/g,Dh=/[#\?]/g,Oh=/[#\?@]/g,na=/#/g;function bi(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function Sn(c){c.g||(c.g=new Map,c.h=0,c.i&&Ch(c.i,function(m,y){c.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}r=bi.prototype,r.add=function(c,m){Sn(this),this.i=null,c=Yn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(m),this.h+=1,this};function Ri(c,m){Sn(c),m=Yn(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function wi(c,m){return Sn(c),m=Yn(c,m),c.g.has(m)}r.forEach=function(c,m){Sn(this),this.g.forEach(function(y,A){y.forEach(function(U){c.call(m,U,A,this)},this)},this)},r.na=function(){Sn(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let A=0;A<m.length;A++){const U=c[A];for(let q=0;q<U.length;q++)y.push(m[A])}return y},r.V=function(c){Sn(this);let m=[];if(typeof c=="string")wi(this,c)&&(m=m.concat(this.g.get(Yn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)m=m.concat(c[y])}return m},r.set=function(c,m){return Sn(this),this.i=null,c=Yn(this,c),wi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},r.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function To(c,m,y){Ri(c,m),0<y.length&&(c.i=null,c.g.set(Yn(c,m),W(y)),c.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var A=m[y];const q=encodeURIComponent(String(A)),et=this.V(A);for(A=0;A<et.length;A++){var U=q;et[A]!==""&&(U+="="+encodeURIComponent(String(et[A]))),c.push(U)}}return this.i=c.join("&")};function Yn(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function nu(c,m){m&&!c.j&&(Sn(c),c.i=null,c.g.forEach(function(y,A){var U=A.toLowerCase();A!=U&&(Ri(this,A),To(this,U,y))},c)),c.j=m}function ls(c,m){const y=new Tn;if(p.Image){const A=new Image;A.onload=H(bn,y,"TestLoadImage: loaded",!0,m,A),A.onerror=H(bn,y,"TestLoadImage: error",!1,m,A),A.onabort=H(bn,y,"TestLoadImage: abort",!1,m,A),A.ontimeout=H(bn,y,"TestLoadImage: timeout",!1,m,A),p.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else m(!1)}function Un(c,m){const y=new Tn,A=new AbortController,U=setTimeout(()=>{A.abort(),bn(y,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:A.signal}).then(q=>{clearTimeout(U),q.ok?bn(y,"TestPingServer: ok",!0,m):bn(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),bn(y,"TestPingServer: error",!1,m)})}function bn(c,m,y,A,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),A(y)}catch{}}function us(){this.g=new ts}function Xn(c,m,y){const A=y||"";try{yo(c,function(U,q){let et=U;_(U)&&(et=Pn(U)),m.push(A+q+"="+encodeURIComponent(et))})}catch(U){throw m.push(A+"type="+encodeURIComponent("_badmap")),U}}function ir(c){this.l=c.Ub||null,this.j=c.eb||!1}X(ir,lo),ir.prototype.g=function(){return new Ii(this.l,this.j)},ir.prototype.i=function(c){return function(){return c}}({});function Ii(c,m){se.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}X(Ii,se),r=Ii.prototype,r.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,Zn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||p).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ao(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ao(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?$n(this):Zn(this),this.readyState==3&&Ao(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,$n(this))},r.Qa=function(c){this.g&&(this.response=c,$n(this))},r.ga=function(){this.g&&$n(this)};function $n(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Zn(c)}r.setRequestHeader=function(c,m){this.u.append(c,m)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=m.next();return c.join(`\r
`)};function Zn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function So(c){let m="";return bt(c,function(y,A){m+=A,m+=":",m+=y,m+=`\r
`}),m}function Ce(c,m,y){t:{for(A in y){var A=!1;break t}A=!0}A||(y=So(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):Gt(c,m,y))}function Bt(c){se.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}X(Bt,se);var ia=/^https?$/i,cs=["POST","PUT"];r=Bt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,m,y,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gn.g(),this.v=this.o?uo(this.o):uo(Gn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(q){iu(this,q);return}if(c=y||"",y=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var U in A)y.set(U,A[U]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())y.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(y.keys()).find(q=>q.toLowerCase()=="content-type"),U=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(cs,m,void 0))||A||U||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,et]of y)this.g.setRequestHeader(q,et);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hs(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){iu(this,q)}};function iu(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,ra(c),Jn(c)}function ra(c){c.A||(c.A=!0,Ht(c,"complete"),Ht(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ht(this,"complete"),Ht(this,"abort"),Jn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jn(this,!0)),Bt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?sa(this):this.bb())},r.bb=function(){sa(this)};function sa(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Rn(c)!=4||c.Z()!=2)){if(c.u&&Rn(c)==4)Fe(c.Ea,0,c);else if(Ht(c,"readystatechange"),Rn(c)==4){c.h=!1;try{const et=c.Z();t:switch(et){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var y;if(!(y=m)){var A;if(A=et===0){var U=String(c.D).match(rs)[1]||null;!U&&p.self&&p.self.location&&(U=p.self.location.protocol.slice(0,-1)),A=!ia.test(U?U.toLowerCase():"")}y=A}if(y)Ht(c,"complete"),Ht(c,"success");else{c.m=6;try{var q=2<Rn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",ra(c)}}finally{Jn(c)}}}}function Jn(c,m){if(c.g){hs(c);const y=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||Ht(c,"ready");try{y.onreadystatechange=A}catch{}}}function hs(c){c.I&&(p.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Rn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Xs(m)}};function ru(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Nh(c){const m={};c=(c.g&&2<=Rn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(tt(c[A]))continue;var y=V(c[A]);const U=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const q=m[U]||[];m[U]=q,q.push(y)}M(m,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fs(c,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||m}function aa(c){this.Aa=0,this.i=[],this.j=new Tn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fs("baseRetryDelayMs",5e3,c),this.cb=fs("retryDelaySeedMs",1e4,c),this.Wa=fs("forwardChannelMaxRetries",2,c),this.wa=fs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ai(c&&c.concurrentRequestLimit),this.Da=new us,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=aa.prototype,r.la=8,r.G=1,r.connect=function(c,m,y,A){Wt(0),this.W=c,this.H=m||{},y&&A!==void 0&&(this.H.OSID=y,this.H.OAID=A),this.F=this.X,this.I=hu(this,null,this.W),la(this)};function bo(c){if(su(c),c.G==3){var m=c.U++,y=un(c.I);if(Gt(y,"SID",c.K),Gt(y,"RID",m),Gt(y,"TYPE","terminate"),ds(c,y),m=new Ze(c,c.j,m),m.L=2,m.v=as(un(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=m.v,y=!0),y||(m.g=fu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),ns(m)}cu(c)}function oa(c){c.g&&(ms(c),c.g.cancel(),c.g=null)}function su(c){oa(c),c.u&&(p.clearTimeout(c.u),c.u=null),ua(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function la(c){if(!Js(c.h)&&!c.s){c.s=!0;var m=c.Ga;nt||D(),lt||(nt(),lt=!0),Lt.add(m,c),c.B=0}}function Mh(c,m){return Ws(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=fe(C(c.Ga,c,m),Io(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new Ze(this,this.j,c);let q=this.o;if(this.S&&(q?(q=S(q),N(q,this.S)):q=this.S),this.m!==null||this.O||(U.H=q,q=null),this.P)t:{for(var m=0,y=0;y<this.i.length;y++){e:{var A=this.i[y];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(m+=A,4096<m){m=y;break t}if(m===4096||y===this.i.length-1){m=y+1;break t}}m=1e3}else m=1e3;m=au(this,U,m),y=un(this.I),Gt(y,"RID",c),Gt(y,"CVER",22),this.D&&Gt(y,"X-HTTP-Session-Id",this.D),ds(this,y),q&&(this.O?m="headers="+encodeURIComponent(String(So(q)))+"&"+m:this.m&&Ce(y,this.m,q)),ta(this.h,U),this.Ua&&Gt(y,"TYPE","init"),this.P?(Gt(y,"$req",m),Gt(y,"SID","null"),U.T=!0,kn(U,y,null)):kn(U,y,m),this.G=2}}else this.G==3&&(c?Ro(this,c):this.i.length==0||Js(this.h)||Ro(this))};function Ro(c,m){var y;m?y=m.l:y=c.U++;const A=un(c.I);Gt(A,"SID",c.K),Gt(A,"RID",y),Gt(A,"AID",c.T),ds(c,A),c.m&&c.o&&Ce(A,c.m,c.o),y=new Ze(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),m&&(c.i=m.D.concat(c.i)),m=au(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ta(c.h,y),kn(y,A,m)}function ds(c,m){c.H&&bt(c.H,function(y,A){Gt(m,A,y)}),c.l&&yo({},function(y,A){Gt(m,A,y)})}function au(c,m,y){y=Math.min(c.i.length,y);var A=c.l?C(c.l.Na,c.l,c):null;t:{var U=c.i;let q=-1;for(;;){const et=["count="+y];q==-1?0<y?(q=U[0].g,et.push("ofs="+q)):q=0:et.push("ofs="+q);let Vt=!0;for(let Ee=0;Ee<y;Ee++){let Pt=U[Ee].g;const De=U[Ee].map;if(Pt-=q,0>Pt)q=Math.max(0,U[Ee].g-100),Vt=!1;else try{Xn(De,et,"req"+Pt+"_")}catch{A&&A(De)}}if(Vt){A=et.join("&");break t}}}return c=c.i.splice(0,y),m.D=c,A}function ou(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;nt||D(),lt||(nt(),lt=!0),Lt.add(m,c),c.v=0}}function wo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=fe(C(c.Fa,c),Io(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,lu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=fe(C(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Wt(10),oa(this),lu(this))};function ms(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function lu(c){c.g=new Ze(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=un(c.qa);Gt(m,"RID","rpc"),Gt(m,"SID",c.K),Gt(m,"AID",c.T),Gt(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&Gt(m,"TO",c.ja),Gt(m,"TYPE","xmlhttp"),ds(c,m),c.m&&c.o&&Ce(m,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=as(un(m)),y.m=null,y.P=!0,Ti(y,c)}r.Za=function(){this.C!=null&&(this.C=null,oa(this),wo(this),Wt(19))};function ua(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function uu(c,m){var y=null;if(c.g==m){ua(c),ms(c),c.g=null;var A=2}else if(go(c.h,m))y=m.D,Je(c.h,m),A=1;else return;if(c.G!=0){if(m.o)if(A==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var U=c.B;A=Zi(),Ht(A,new ve(A,y)),la(c)}else ou(c);else if(U=m.s,U==3||U==0&&0<m.X||!(A==1&&Mh(c,m)||A==2&&wo(c)))switch(y&&0<y.length&&(m=c.h,m.i=m.i.concat(y)),U){case 1:Ci(c,5);break;case 4:Ci(c,10);break;case 3:Ci(c,6);break;default:Ci(c,2)}}}function Io(c,m){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*m}function Ci(c,m){if(c.j.info("Error code "+m),m==2){var y=C(c.fb,c),A=c.Xa;const U=!A;A=new de(A||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||ss(A,"https"),as(A),U?ls(A.toString(),y):Un(A.toString(),y)}else Wt(2);c.G=0,c.l&&c.l.sa(m),cu(c),su(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Wt(2)):(this.j.info("Failed to ping google.com"),Wt(1))};function cu(c){if(c.G=0,c.ka=[],c.l){const m=_o(c.h);(m.length!=0||c.i.length!=0)&&(Y(c.ka,m),Y(c.ka,c.i),c.h.i.length=0,W(c.i),c.i.length=0),c.l.ra()}}function hu(c,m,y){var A=y instanceof de?un(y):new de(y);if(A.g!="")m&&(A.g=m+"."+A.g),nr(A,A.s);else{var U=p.location;A=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var q=new de(null);A&&ss(q,A),m&&(q.g=m),U&&nr(q,U),y&&(q.l=y),A=q}return y=c.D,m=c.ya,y&&m&&Gt(A,y,m),Gt(A,"VER",c.la),ds(c,A),A}function fu(c,m,y){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new Bt(new ir({eb:y})):new Bt(c.pa),m.Ha(c.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function du(){}r=du.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ca(){}ca.prototype.g=function(c,m){return new We(c,m)};function We(c,m){se.call(this),this.g=new aa(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!tt(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!tt(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new Wn(this)}X(We,se),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){bo(this.g)},We.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=Pn(c),c=y);m.i.push(new tu(m.Ya++,c)),m.G==3&&la(m)},We.prototype.N=function(){this.g.l=null,delete this.j,bo(this.g),delete this.g,We.aa.N.call(this)};function mu(c){vi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){t:{for(const y in m){c=y;break t}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}X(mu,vi);function pu(){ho.call(this),this.status=1}X(pu,ho);function Wn(c){this.g=c}X(Wn,du),Wn.prototype.ua=function(){Ht(this.g,"a")},Wn.prototype.ta=function(c){Ht(this.g,new mu(c))},Wn.prototype.sa=function(c){Ht(this.g,new pu)},Wn.prototype.ra=function(){Ht(this.g,"b")},ca.prototype.createWebChannel=ca.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,uT=function(){return new ca},lT=function(){return Zi()},oT=Fn,Jd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tr.NO_ERROR=0,tr.TIMEOUT=8,tr.HTTP_ERROR=6,Dc=tr,Ei.COMPLETE="complete",aT=Ei,co.EventType=yi,yi.OPEN="a",yi.CLOSE="b",yi.ERROR="c",yi.MESSAGE="d",se.prototype.listen=se.prototype.K,_l=co,Bt.prototype.listenOnce=Bt.prototype.L,Bt.prototype.getLastError=Bt.prototype.Ka,Bt.prototype.getLastErrorCode=Bt.prototype.Ba,Bt.prototype.getStatus=Bt.prototype.Z,Bt.prototype.getResponseJson=Bt.prototype.Oa,Bt.prototype.getResponseText=Bt.prototype.oa,Bt.prototype.send=Bt.prototype.ea,Bt.prototype.setWithCredentials=Bt.prototype.Ha,sT=Bt}).apply(typeof _c<"u"?_c:typeof self<"u"?self:typeof window<"u"?window:{});const hv="@firebase/firestore",fv="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new Em("@firebase/firestore");function za(){return Ls.logLevel}function st(r,...t){if(Ls.logLevel<=Nt.DEBUG){const n=t.map(Mm);Ls.debug(`Firestore (${eo}): ${r}`,...n)}}function Yi(r,...t){if(Ls.logLevel<=Nt.ERROR){const n=t.map(Mm);Ls.error(`Firestore (${eo}): ${r}`,...n)}}function Ya(r,...t){if(Ls.logLevel<=Nt.WARN){const n=t.map(Mm);Ls.warn(`Firestore (${eo}): ${r}`,...n)}}function Mm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,cT(r,s,n)}function cT(r,t,n){let s=`FIRESTORE (${eo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Yi(s),new Error(s)}function qt(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||cT(t,o,s)}function At(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ut extends gi{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class gw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _w{constructor(t){this.t=t,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){qt(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let u=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new kr,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const g=u;t.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},p=g=>{st("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>p(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(st("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new kr)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(st("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(qt(typeof s.accessToken=="string",31837,{l:s}),new hT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return qt(t===null||typeof t=="string",2055,{h:t}),new Ye(t)}}class yw{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class vw{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new yw(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ew{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_n(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){qt(this.o===void 0,3512);const s=u=>{u.error!=null&&st("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,st("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const o=u=>{st("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):st("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new dv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(qt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new dv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=Tw(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function wt(r,t){return r<t?-1:r>t?1:0}function Wd(r,t){let n=0;for(;n<r.length&&n<t.length;){const s=r.codePointAt(n),o=t.codePointAt(n);if(s!==o){if(s<128&&o<128)return wt(s,o);{const u=fT(),f=Aw(u.encode(mv(r,n)),u.encode(mv(t,n)));return f!==0?f:wt(s,o)}}n+=s>65535?2:1}return wt(r.length,t.length)}function mv(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function Aw(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return wt(r[n],t[n]);return wt(r.length,t.length)}function Xa(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=-62135596800,gv=1e6;class Re{static now(){return Re.fromMillis(Date.now())}static fromDate(t){return Re.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*gv);return new Re(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ut(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ut(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<pv)throw new ut(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ut(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gv}_compareTo(t){return this.seconds===t.seconds?wt(this.nanoseconds,t.nanoseconds):wt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-pv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{static fromTimestamp(t){return new Tt(t)}static min(){return new Tt(new Re(0,0))}static max(){return new Tt(new Re(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="__name__";class oi{constructor(t,n,s){n===void 0?n=0:n>t.length&&_t(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&_t(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return oi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof oi?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=oi.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return wt(t.length,n.length)}static compareSegments(t,n){const s=oi.isNumericId(t),o=oi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?oi.extractNumericId(t).compare(oi.extractNumericId(n)):Wd(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Pr.fromString(t.substring(4,t.length-2))}}class ee extends oi{construct(t,n,s){return new ee(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new ut(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new ee(n)}static emptyPath(){return new ee([])}}const Sw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends oi{construct(t,n,s){return new He(t,n,s)}static isValidIdentifier(t){return Sw.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_v}static keyField(){return new He([_v])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ut(Z.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const p=t[o];if(p==="\\"){if(o+1===t.length)throw new ut(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ut(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=g,o+=2}else p==="`"?(f=!f,o++):p!=="."||f?(s+=p,o++):(u(),o++)}if(u(),f)throw new ut(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.path=t}static fromPath(t){return new ft(ee.fromString(t))}static fromName(t){return new ft(ee.fromString(t).popFirst(5))}static empty(){return new ft(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ee.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ee.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ft(new ee(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=-1;function bw(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Tt.fromTimestamp(s===1e9?new Re(n+1,0):new Re(n,s));return new Lr(o,ft.empty(),t)}function Rw(r){return new Lr(r.readTime,r.key,Dl)}class Lr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Lr(Tt.min(),ft.empty(),Dl)}static max(){return new Lr(Tt.max(),ft.empty(),Dl)}}function ww(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ft.comparator(r.documentKey,t.documentKey),n!==0?n:wt(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(r){if(r.code!==Z.FAILED_PRECONDITION||r.message!==Iw)throw r;st("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&_t(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Q((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.reject(n)}static resolve(t){return new Q((n,s)=>{n(t)})}static reject(t){return new Q((n,s)=>{s(t)})}static waitFor(t){return new Q((n,s)=>{let o=0,u=0,f=!1;t.forEach(p=>{++o,p.next(()=>{++u,f&&u===o&&n()},g=>s(g))}),f=!0,u===o&&n()})}static or(t){let n=Q.resolve(!1);for(const s of t)n=n.next(o=>o?Q.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(t,n){return new Q((s,o)=>{const u=t.length,f=new Array(u);let p=0;for(let g=0;g<u;g++){const _=g;n(t[_]).next(T=>{f[_]=T,++p,p===u&&s(f)},T=>o(T))}})}static doWhile(t,n){return new Q((s,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):s()};u()})}}function Dw(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function io(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>n.writeSequenceNumber(s))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}ah.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=-1;function oh(r){return r==null}function jc(r){return r===0&&1/r==-1/0}function Ow(r){return typeof r=="number"&&Number.isInteger(r)&&!jc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="";function Nw(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=yv(t)),t=Mw(r.get(n),t);return yv(t)}function Mw(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case mT:n+="";break;default:n+=u}}return n}function yv(r){return r+mT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Gr(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function pT(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,n){this.comparator=t,this.root=n||qe.EMPTY}insert(t,n){return new ie(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(t){return new ie(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yc(this.root,t,this.comparator,!1)}getReverseIterator(){return new yc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yc(this.root,t,this.comparator,!0)}}class yc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class qe{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??qe.RED,this.left=o??qe.EMPTY,this.right=u??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new qe(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return qe.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _t(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _t(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw _t(27949);return t+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw _t(57766)}get value(){throw _t(16141)}get color(){throw _t(16727)}get left(){throw _t(29726)}get right(){throw _t(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new qe(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.comparator=t,this.data=new ie(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ev(this.data.getIterator())}getIteratorFrom(t){return new Ev(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof we)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new we(this.comparator);return n.data=t,n}}class Ev{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t){this.fields=t,t.sort(He.comparator)}static empty(){return new yn([])}unionWith(t){let n=new we(He.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new yn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Xa(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new gT("Invalid base64 string: "+u):u}}(t);return new je(n)}static fromUint8Array(t){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(t);return new je(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return wt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}je.EMPTY_BYTE_STRING=new je("");const Vw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zr(r){if(qt(!!r,39018),typeof r=="string"){let t=0;const n=Vw.exec(r);if(qt(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:he(r.seconds),nanos:he(r.nanos)}}function he(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Br(r){return typeof r=="string"?je.fromBase64String(r):je.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="server_timestamp",yT="__type__",vT="__previous_value__",ET="__local_write_time__";function Pm(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[yT])===null||n===void 0?void 0:n.stringValue)===_T}function lh(r){const t=r.mapValue.fields[vT];return Pm(t)?lh(t):t}function Ol(r){const t=zr(r.mapValue.fields[ET].timestampValue);return new Re(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(t,n,s,o,u,f,p,g,_,T){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=T}}const Fc="(default)";class Nl{constructor(t,n){this.projectId=t,this.database=n||Fc}static empty(){return new Nl("","")}get isDefaultDatabase(){return this.database===Fc}isEqual(t){return t instanceof Nl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="__type__",kw="__max__",vc={mapValue:{}},AT="__vector__",Gc="value";function qr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Pm(r)?4:xw(r)?9007199254740991:Uw(r)?10:11:_t(28295,{value:r})}function mi(r,t){if(r===t)return!0;const n=qr(r);if(n!==qr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Ol(r).isEqual(Ol(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=zr(o.timestampValue),p=zr(u.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return Br(o.bytesValue).isEqual(Br(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return he(o.geoPointValue.latitude)===he(u.geoPointValue.latitude)&&he(o.geoPointValue.longitude)===he(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return he(o.integerValue)===he(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=he(o.doubleValue),p=he(u.doubleValue);return f===p?jc(f)===jc(p):isNaN(f)&&isNaN(p)}return!1}(r,t);case 9:return Xa(r.arrayValue.values||[],t.arrayValue.values||[],mi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},p=u.mapValue.fields||{};if(vv(f)!==vv(p))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(p[g]===void 0||!mi(f[g],p[g])))return!1;return!0}(r,t);default:return _t(52216,{left:r})}}function Ml(r,t){return(r.values||[]).find(n=>mi(n,t))!==void 0}function $a(r,t){if(r===t)return 0;const n=qr(r),s=qr(t);if(n!==s)return wt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return wt(r.booleanValue,t.booleanValue);case 2:return function(u,f){const p=he(u.integerValue||u.doubleValue),g=he(f.integerValue||f.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(r,t);case 3:return Tv(r.timestampValue,t.timestampValue);case 4:return Tv(Ol(r),Ol(t));case 5:return Wd(r.stringValue,t.stringValue);case 6:return function(u,f){const p=Br(u),g=Br(f);return p.compareTo(g)}(r.bytesValue,t.bytesValue);case 7:return function(u,f){const p=u.split("/"),g=f.split("/");for(let _=0;_<p.length&&_<g.length;_++){const T=wt(p[_],g[_]);if(T!==0)return T}return wt(p.length,g.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,f){const p=wt(he(u.latitude),he(f.latitude));return p!==0?p:wt(he(u.longitude),he(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Av(r.arrayValue,t.arrayValue);case 10:return function(u,f){var p,g,_,T;const I=u.fields||{},C=f.fields||{},H=(p=I[Gc])===null||p===void 0?void 0:p.arrayValue,X=(g=C[Gc])===null||g===void 0?void 0:g.arrayValue,W=wt(((_=H==null?void 0:H.values)===null||_===void 0?void 0:_.length)||0,((T=X==null?void 0:X.values)===null||T===void 0?void 0:T.length)||0);return W!==0?W:Av(H,X)}(r.mapValue,t.mapValue);case 11:return function(u,f){if(u===vc.mapValue&&f===vc.mapValue)return 0;if(u===vc.mapValue)return 1;if(f===vc.mapValue)return-1;const p=u.fields||{},g=Object.keys(p),_=f.fields||{},T=Object.keys(_);g.sort(),T.sort();for(let I=0;I<g.length&&I<T.length;++I){const C=Wd(g[I],T[I]);if(C!==0)return C;const H=$a(p[g[I]],_[T[I]]);if(H!==0)return H}return wt(g.length,T.length)}(r.mapValue,t.mapValue);default:throw _t(23264,{Pe:n})}}function Tv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return wt(r,t);const n=zr(r),s=zr(t),o=wt(n.seconds,s.seconds);return o!==0?o:wt(n.nanos,s.nanos)}function Av(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=$a(n[o],s[o]);if(u)return u}return wt(n.length,s.length)}function Za(r){return tm(r)}function tm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=zr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Br(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ft.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=tm(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${tm(n.fields[f])}`;return o+"}"}(r.mapValue):_t(61005,{value:r})}function Oc(r){switch(qr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=lh(r);return t?16+Oc(t):16;case 5:return 2*r.stringValue.length;case 6:return Br(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Oc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Gr(s.fields,(u,f)=>{o+=u.length+Oc(f)}),o}(r.mapValue);default:throw _t(13486,{value:r})}}function em(r){return!!r&&"integerValue"in r}function km(r){return!!r&&"arrayValue"in r}function Sv(r){return!!r&&"nullValue"in r}function bv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Nc(r){return!!r&&"mapValue"in r}function Uw(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[TT])===null||n===void 0?void 0:n.stringValue)===AT}function Al(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Gr(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Al(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Al(r.arrayValue.values[n]);return t}return Object.assign({},r)}function xw(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===kw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this.value=t}static empty(){return new on({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Nc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Al(n)}setAll(t){let n=He.emptyPath(),s={},o=[];t.forEach((f,p)=>{if(!n.isImmediateParentOf(p)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=p.popLast()}f?s[p.lastSegment()]=Al(f):o.push(p.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());Nc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return mi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];Nc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Gr(n,(o,u)=>t[o]=u);for(const o of s)delete t[o]}clone(){return new on(Al(this.value))}}function ST(r){const t=[];return Gr(r.fields,(n,s)=>{const o=new He([n]);if(Nc(s)){const u=ST(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)}),new yn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,n,s,o,u,f,p){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=p}static newInvalidDocument(t){return new Xe(t,0,Tt.min(),Tt.min(),Tt.min(),on.empty(),0)}static newFoundDocument(t,n,s,o){return new Xe(t,1,n,Tt.min(),s,o,0)}static newNoDocument(t,n){return new Xe(t,2,n,Tt.min(),Tt.min(),on.empty(),0)}static newUnknownDocument(t,n){return new Xe(t,3,n,Tt.min(),Tt.min(),on.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Tt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Tt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Xe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t,n){this.position=t,this.inclusive=n}}function Rv(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=ft.comparator(ft.fromName(f.referenceValue),n.key):s=$a(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function wv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!mi(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t,n="asc"){this.field=t,this.dir=n}}function Lw(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{}class be extends bT{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Bw(t,n,s):n==="array-contains"?new jw(t,s):n==="in"?new Fw(t,s):n==="not-in"?new Gw(t,s):n==="array-contains-any"?new Kw(t,s):new be(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new qw(t,s):new Hw(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison($a(n,this.value)):n!==null&&qr(this.value)===qr(n)&&this.matchesComparison($a(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return _t(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pi extends bT{constructor(t,n){super(),this.filters=t,this.op=n,this.Te=null}static create(t,n){return new pi(t,n)}matches(t){return RT(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function RT(r){return r.op==="and"}function wT(r){return zw(r)&&RT(r)}function zw(r){for(const t of r.filters)if(t instanceof pi)return!1;return!0}function nm(r){if(r instanceof be)return r.field.canonicalString()+r.op.toString()+Za(r.value);if(wT(r))return r.filters.map(t=>nm(t)).join(",");{const t=r.filters.map(n=>nm(n)).join(",");return`${r.op}(${t})`}}function IT(r,t){return r instanceof be?function(s,o){return o instanceof be&&s.op===o.op&&s.field.isEqual(o.field)&&mi(s.value,o.value)}(r,t):r instanceof pi?function(s,o){return o instanceof pi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,p)=>u&&IT(f,o.filters[p]),!0):!1}(r,t):void _t(19439)}function CT(r){return r instanceof be?function(n){return`${n.field.canonicalString()} ${n.op} ${Za(n.value)}`}(r):r instanceof pi?function(n){return n.op.toString()+" {"+n.getFilters().map(CT).join(" ,")+"}"}(r):"Filter"}class Bw extends be{constructor(t,n,s){super(t,n,s),this.key=ft.fromName(s.referenceValue)}matches(t){const n=ft.comparator(t.key,this.key);return this.matchesComparison(n)}}class qw extends be{constructor(t,n){super(t,"in",n),this.keys=DT("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Hw extends be{constructor(t,n){super(t,"not-in",n),this.keys=DT("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function DT(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ft.fromName(s.referenceValue))}class jw extends be{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return km(n)&&Ml(n.arrayValue,this.value)}}class Fw extends be{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ml(this.value.arrayValue,n)}}class Gw extends be{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ml(this.value.arrayValue,n)}}class Kw extends be{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!km(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ml(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(t,n=null,s=[],o=[],u=null,f=null,p=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=p,this.Ie=null}}function Iv(r,t=null,n=[],s=[],o=null,u=null,f=null){return new Qw(r,t,n,s,o,u,f)}function Um(r){const t=At(r);if(t.Ie===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>nm(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),oh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Za(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Za(s)).join(",")),t.Ie=n}return t.Ie}function xm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!Lw(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!IT(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!wv(r.startAt,t.startAt)&&wv(r.endAt,t.endAt)}function im(r){return ft.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,n=null,s=[],o=[],u=null,f="F",p=null,g=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=p,this.endAt=g,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Yw(r,t,n,s,o,u,f,p){return new uh(r,t,n,s,o,u,f,p)}function OT(r){return new uh(r)}function Cv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Xw(r){return r.collectionGroup!==null}function Sl(r){const t=At(r);if(t.Ee===null){t.Ee=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ee.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new we(He.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(p=p.add(_.field))})}),p})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ee.push(new Qc(u,s))}),n.has(He.keyField().canonicalString())||t.Ee.push(new Qc(He.keyField(),s))}return t.Ee}function hi(r){const t=At(r);return t.de||(t.de=$w(t,Sl(r))),t.de}function $w(r,t){if(r.limitType==="F")return Iv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Qc(o.field,u)});const n=r.endAt?new Kc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Kc(r.startAt.position,r.startAt.inclusive):null;return Iv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function rm(r,t,n){return new uh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function ch(r,t){return xm(hi(r),hi(t))&&r.limitType===t.limitType}function NT(r){return`${Um(hi(r))}|lt:${r.limitType}`}function Ba(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>CT(o)).join(", ")}]`),oh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Za(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Za(o)).join(",")),`Target(${s})`}(hi(r))}; limitType=${r.limitType})`}function hh(r,t){return t.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ft.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,t)&&function(s,o){for(const u of Sl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,p,g){const _=Rv(f,p,g);return f.inclusive?_<=0:_<0}(s.startAt,Sl(s),o)||s.endAt&&!function(f,p,g){const _=Rv(f,p,g);return f.inclusive?_>=0:_>0}(s.endAt,Sl(s),o))}(r,t)}function Zw(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function MT(r){return(t,n)=>{let s=!1;for(const o of Sl(r)){const u=Jw(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function Jw(r,t,n){const s=r.field.isKeyField()?ft.comparator(t.key,n.key):function(u,f,p){const g=f.data.field(u),_=p.data.field(u);return g!==null&&_!==null?$a(g,_):_t(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _t(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Gr(this.inner,(n,s)=>{for(const[o,u]of s)t(o,u)})}isEmpty(){return pT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=new ie(ft.comparator);function Xi(){return Ww}const VT=new ie(ft.comparator);function yl(...r){let t=VT;for(const n of r)t=t.insert(n.key,n);return t}function PT(r){let t=VT;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Ms(){return bl()}function kT(){return bl()}function bl(){return new Gs(r=>r.toString(),(r,t)=>r.isEqual(t))}const tI=new ie(ft.comparator),eI=new we(ft.comparator);function Mt(...r){let t=eI;for(const n of r)t=t.add(n);return t}const nI=new we(wt);function iI(){return nI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jc(t)?"-0":t}}function UT(r){return{integerValue:""+r}}function rI(r,t){return Ow(t)?UT(t):Lm(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(){this._=void 0}}function sI(r,t,n){return r instanceof Yc?function(o,u){const f={fields:{[yT]:{stringValue:_T},[ET]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Pm(u)&&(u=lh(u)),u&&(f.fields[vT]=u),{mapValue:f}}(n,t):r instanceof Vl?LT(r,t):r instanceof Pl?zT(r,t):function(o,u){const f=xT(o,u),p=Dv(f)+Dv(o.Re);return em(f)&&em(o.Re)?UT(p):Lm(o.serializer,p)}(r,t)}function aI(r,t,n){return r instanceof Vl?LT(r,t):r instanceof Pl?zT(r,t):n}function xT(r,t){return r instanceof Xc?function(s){return em(s)||function(u){return!!u&&"doubleValue"in u}(s)}(t)?t:{integerValue:0}:null}class Yc extends fh{}class Vl extends fh{constructor(t){super(),this.elements=t}}function LT(r,t){const n=BT(t);for(const s of r.elements)n.some(o=>mi(o,s))||n.push(s);return{arrayValue:{values:n}}}class Pl extends fh{constructor(t){super(),this.elements=t}}function zT(r,t){let n=BT(t);for(const s of r.elements)n=n.filter(o=>!mi(o,s));return{arrayValue:{values:n}}}class Xc extends fh{constructor(t,n){super(),this.serializer=t,this.Re=n}}function Dv(r){return he(r.integerValue||r.doubleValue)}function BT(r){return km(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function oI(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof Vl&&o instanceof Vl||s instanceof Pl&&o instanceof Pl?Xa(s.elements,o.elements,mi):s instanceof Xc&&o instanceof Xc?mi(s.Re,o.Re):s instanceof Yc&&o instanceof Yc}(r.transform,t.transform)}class lI{constructor(t,n){this.version=t,this.transformResults=n}}class Hn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Hn}static exists(t){return new Hn(void 0,t)}static updateTime(t){return new Hn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class dh{}function qT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new zm(r.key,Hn.none()):new ql(r.key,r.data,Hn.none());{const n=r.data,s=on.empty();let o=new we(He.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Kr(r.key,s,new yn(o.toArray()),Hn.none())}}function uI(r,t,n){r instanceof ql?function(o,u,f){const p=o.value.clone(),g=Nv(o.fieldTransforms,u,f.transformResults);p.setAll(g),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):r instanceof Kr?function(o,u,f){if(!Mc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const p=Nv(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(HT(o)),g.setAll(p),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Rl(r,t,n,s){return r instanceof ql?function(u,f,p,g){if(!Mc(u.precondition,f))return p;const _=u.value.clone(),T=Mv(u.fieldTransforms,g,f);return _.setAll(T),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),null}(r,t,n,s):r instanceof Kr?function(u,f,p,g){if(!Mc(u.precondition,f))return p;const _=Mv(u.fieldTransforms,g,f),T=f.data;return T.setAll(HT(u)),T.setAll(_),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(I=>I.field))}(r,t,n,s):function(u,f,p){return Mc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p}(r,t,n)}function cI(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=xT(s.transform,o||null);u!=null&&(n===null&&(n=on.empty()),n.set(s.field,u))}return n||null}function Ov(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Xa(s,o,(u,f)=>oI(u,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class ql extends dh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Kr extends dh{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function HT(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function Nv(r,t,n){const s=new Map;qt(r.length===n.length,32656,{Ve:n.length,me:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,p=t.data.field(u.field);s.set(u.field,aI(f,p,n[o]))}return s}function Mv(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,sI(u,f,t))}return s}class zm extends dh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hI extends dh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&uI(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Rl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Rl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=kT();return this.mutations.forEach(o=>{const u=t.get(o.key),f=u.overlayedDocument;let p=this.applyToLocalView(f,u.mutatedFields);p=n.has(o.key)?null:p;const g=qT(f,p);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(Tt.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Mt())}isEqual(t){return this.batchId===t.batchId&&Xa(this.mutations,t.mutations,(n,s)=>Ov(n,s))&&Xa(this.baseMutations,t.baseMutations,(n,s)=>Ov(n,s))}}class Bm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){qt(t.mutations.length===s.length,58842,{fe:t.mutations.length,ge:s.length});let o=function(){return tI}();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Bm(t,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,Ut;function pI(r){switch(r){case Z.OK:return _t(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return _t(15467,{code:r})}}function jT(r){if(r===void 0)return Yi("GRPC error has no .code"),Z.UNKNOWN;switch(r){case ge.OK:return Z.OK;case ge.CANCELLED:return Z.CANCELLED;case ge.UNKNOWN:return Z.UNKNOWN;case ge.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case ge.INTERNAL:return Z.INTERNAL;case ge.UNAVAILABLE:return Z.UNAVAILABLE;case ge.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case ge.NOT_FOUND:return Z.NOT_FOUND;case ge.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case ge.ABORTED:return Z.ABORTED;case ge.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case ge.DATA_LOSS:return Z.DATA_LOSS;default:return _t(39323,{code:r})}}(Ut=ge||(ge={}))[Ut.OK=0]="OK",Ut[Ut.CANCELLED=1]="CANCELLED",Ut[Ut.UNKNOWN=2]="UNKNOWN",Ut[Ut.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ut[Ut.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ut[Ut.NOT_FOUND=5]="NOT_FOUND",Ut[Ut.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ut[Ut.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ut[Ut.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ut[Ut.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ut[Ut.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ut[Ut.ABORTED=10]="ABORTED",Ut[Ut.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ut[Ut.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ut[Ut.INTERNAL=13]="INTERNAL",Ut[Ut.UNAVAILABLE=14]="UNAVAILABLE",Ut[Ut.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=new Pr([4294967295,4294967295],0);function Vv(r){const t=fT().encode(r),n=new rT;return n.update(t),new Uint8Array(n.digest())}function Pv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Pr([n,s],0),new Pr([o,u],0)]}class qm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new vl(`Invalid padding: ${n}`);if(s<0)throw new vl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new vl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new vl(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*t.length-n,this.ye=Pr.fromNumber(this.pe)}we(t,n,s){let o=t.add(n.multiply(Pr.fromNumber(s)));return o.compare(gI)===1&&(o=new Pr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const n=Vv(t),[s,o]=Pv(n);for(let u=0;u<this.hashCount;u++){const f=this.we(s,o,u);if(!this.be(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new qm(u,o,n);return s.forEach(p=>f.insert(p)),f}insert(t){if(this.pe===0)return;const n=Vv(t),[s,o]=Pv(n);for(let u=0;u<this.hashCount;u++){const f=this.we(s,o,u);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class vl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Hl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new mh(Tt.min(),o,new ie(wt),Xi(),Mt())}}class Hl{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Hl(s,n,Mt(),Mt(),Mt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,n,s,o){this.De=t,this.removedTargetIds=n,this.key=s,this.ve=o}}class FT{constructor(t,n){this.targetId=t,this.Ce=n}}class GT{constructor(t,n,s=je.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class kv{constructor(){this.Fe=0,this.Me=Uv(),this.xe=je.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=Mt(),n=Mt(),s=Mt();return this.Me.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:_t(38017,{changeType:u})}}),new Hl(this.xe,this.Oe,t,n,s)}Qe(){this.Ne=!1,this.Me=Uv()}$e(t,n){this.Ne=!0,this.Me=this.Me.insert(t,n)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,qt(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class _I{constructor(t){this.ze=t,this.je=new Map,this.He=Xi(),this.Je=Ec(),this.Ye=Ec(),this.Ze=new ie(wt)}Xe(t){for(const n of t.De)t.ve&&t.ve.isFoundDocument()?this.et(n,t.ve):this.tt(n,t.key,t.ve);for(const n of t.removedTargetIds)this.tt(n,t.key,t.ve)}nt(t){this.forEachTarget(t,n=>{const s=this.rt(n);switch(t.state){case 0:this.it(n)&&s.ke(t.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(t.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(n);break;case 3:this.it(n)&&(s.Ge(),s.ke(t.resumeToken));break;case 4:this.it(n)&&(this.st(n),s.ke(t.resumeToken));break;default:_t(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.je.forEach((s,o)=>{this.it(o)&&n(o)})}ot(t){const n=t.targetId,s=t.Ce.count,o=this._t(n);if(o){const u=o.target;if(im(u))if(s===0){const f=new ft(u.path);this.tt(n,f,Xe.newNoDocument(f,Tt.min()))}else qt(s===1,20013,{expectedCount:s});else{const f=this.ut(n);if(f!==s){const p=this.ct(t),g=p?this.lt(p,t,f):1;if(g!==0){this.st(n);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,_)}}}}}ct(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,p;try{f=Br(s).toUint8Array()}catch(g){if(g instanceof gT)return Ya("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new qm(f,o,u)}catch(g){return Ya(g instanceof vl?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.pe===0?null:p}lt(t,n,s){return n.Ce.count===s-this.Tt(t,n.targetId)?0:2}Tt(t,n){const s=this.ze.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ze.Pt(),p=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(p)||(this.tt(n,u,null),o++)}),o}It(t){const n=new Map;this.je.forEach((u,f)=>{const p=this._t(f);if(p){if(u.current&&im(p.target)){const g=new ft(p.target.path);this.Et(g).has(f)||this.dt(f,g)||this.tt(f,g,Xe.newNoDocument(g,t))}u.Le&&(n.set(f,u.qe()),u.Qe())}});let s=Mt();this.Ye.forEach((u,f)=>{let p=!0;f.forEachWhile(g=>{const _=this._t(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.He.forEach((u,f)=>f.setReadTime(t));const o=new mh(t,n,this.Ze,this.He,s);return this.He=Xi(),this.Je=Ec(),this.Ye=Ec(),this.Ze=new ie(wt),o}et(t,n){if(!this.it(t))return;const s=this.dt(t,n.key)?2:0;this.rt(t).$e(n.key,s),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(t))}tt(t,n,s){if(!this.it(t))return;const o=this.rt(t);this.dt(t,n)?o.$e(n,1):o.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(t)),this.Ye=this.Ye.insert(n,this.At(n).add(t)),s&&(this.He=this.He.insert(n,s))}removeTarget(t){this.je.delete(t)}ut(t){const n=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let n=this.je.get(t);return n||(n=new kv,this.je.set(t,n)),n}At(t){let n=this.Ye.get(t);return n||(n=new we(wt),this.Ye=this.Ye.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new we(wt),this.Je=this.Je.insert(t,n)),n}it(t){const n=this._t(t)!==null;return n||st("WatchChangeAggregator","Detected inactive target",t),n}_t(t){const n=this.je.get(t);return n&&n.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new kv),this.ze.getRemoteKeysForTarget(t).forEach(n=>{this.tt(t,n,null)})}dt(t,n){return this.ze.getRemoteKeysForTarget(t).has(n)}}function Ec(){return new ie(ft.comparator)}function Uv(){return new ie(ft.comparator)}const yI={asc:"ASCENDING",desc:"DESCENDING"},vI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},EI={and:"AND",or:"OR"};class TI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function sm(r,t){return r.useProto3Json||oh(t)?t:{value:t}}function $c(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function KT(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function AI(r,t){return $c(r,t.toTimestamp())}function fi(r){return qt(!!r,49232),Tt.fromTimestamp(function(n){const s=zr(n);return new Re(s.seconds,s.nanos)}(r))}function Hm(r,t){return am(r,t).canonicalString()}function am(r,t){const n=function(o){return new ee(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function QT(r){const t=ee.fromString(r);return qt(JT(t),10190,{key:t.toString()}),t}function om(r,t){return Hm(r.databaseId,t.path)}function xd(r,t){const n=QT(t);if(n.get(1)!==r.databaseId.projectId)throw new ut(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ut(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ft(XT(n))}function YT(r,t){return Hm(r.databaseId,t)}function SI(r){const t=QT(r);return t.length===4?ee.emptyPath():XT(t)}function lm(r){return new ee(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function XT(r){return qt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function xv(r,t,n){return{name:om(r,t),fields:n.value.mapValue.fields}}function bI(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_t(39313,{state:_})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(_,T){return _.useProto3Json?(qt(T===void 0||typeof T=="string",58123),je.fromBase64String(T||"")):(qt(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),je.fromUint8Array(T||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,p=f&&function(_){const T=_.code===void 0?Z.UNKNOWN:jT(_.code);return new ut(T,_.message||"")}(f);n=new GT(s,o,u,p||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=xd(r,s.document.name),u=fi(s.document.updateTime),f=s.document.createTime?fi(s.document.createTime):Tt.min(),p=new on({mapValue:{fields:s.document.fields}}),g=Xe.newFoundDocument(o,u,f,p),_=s.targetIds||[],T=s.removedTargetIds||[];n=new Vc(_,T,g.key,g)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=xd(r,s.document),u=s.readTime?fi(s.readTime):Tt.min(),f=Xe.newNoDocument(o,u),p=s.removedTargetIds||[];n=new Vc([],p,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=xd(r,s.document),u=s.removedTargetIds||[];n=new Vc([],u,o,null)}else{if(!("filter"in t))return _t(11601,{Vt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new mI(o,u),p=s.targetId;n=new FT(p,f)}}return n}function RI(r,t){let n;if(t instanceof ql)n={update:xv(r,t.key,t.value)};else if(t instanceof zm)n={delete:om(r,t.key)};else if(t instanceof Kr)n={update:xv(r,t.key,t.data),updateMask:PI(t.fieldMask)};else{if(!(t instanceof hI))return _t(16599,{ft:t.type});n={verify:om(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(u,f){const p=f.transform;if(p instanceof Yc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Vl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Pl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Xc)return{fieldPath:f.field.canonicalString(),increment:p.Re};throw _t(20930,{transform:f.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:AI(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_t(27497)}(r,t.precondition)),n}function wI(r,t){return r&&r.length>0?(qt(t!==void 0,14353),r.map(n=>function(o,u){let f=o.updateTime?fi(o.updateTime):fi(u);return f.isEqual(Tt.min())&&(f=fi(u)),new lI(f,o.transformResults||[])}(n,t))):[]}function II(r,t){return{documents:[YT(r,t.path)]}}function CI(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=YT(r,o);const u=function(_){if(_.length!==0)return ZT(pi.create(_,"and"))}(t.filters);u&&(n.structuredQuery.where=u);const f=function(_){if(_.length!==0)return _.map(T=>function(C){return{field:qa(C.field),direction:NI(C.dir)}}(T))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const p=sm(r,t.limit);return p!==null&&(n.structuredQuery.limit=p),t.startAt&&(n.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(t.endAt)),{gt:n,parent:o}}function DI(r){let t=SI(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){qt(s===1,65062);const T=n.from[0];T.allDescendants?o=T.collectionId:t=t.child(T.collectionId)}let u=[];n.where&&(u=function(I){const C=$T(I);return C instanceof pi&&wT(C)?C.getFilters():[C]}(n.where));let f=[];n.orderBy&&(f=function(I){return I.map(C=>function(X){return new Qc(Ha(X.field),function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(X.direction))}(C))}(n.orderBy));let p=null;n.limit&&(p=function(I){let C;return C=typeof I=="object"?I.value:I,oh(C)?null:C}(n.limit));let g=null;n.startAt&&(g=function(I){const C=!!I.before,H=I.values||[];return new Kc(H,C)}(n.startAt));let _=null;return n.endAt&&(_=function(I){const C=!I.before,H=I.values||[];return new Kc(H,C)}(n.endAt)),Yw(t,o,f,u,p,"F",g,_)}function OI(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _t(28987,{purpose:o})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function $T(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ha(n.unaryFilter.field);return be.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ha(n.unaryFilter.field);return be.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ha(n.unaryFilter.field);return be.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ha(n.unaryFilter.field);return be.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _t(61313);default:return _t(60726)}}(r):r.fieldFilter!==void 0?function(n){return be.create(Ha(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _t(58110);default:return _t(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return pi.create(n.compositeFilter.filters.map(s=>$T(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _t(1026)}}(n.compositeFilter.op))}(r):_t(30097,{filter:r})}function NI(r){return yI[r]}function MI(r){return vI[r]}function VI(r){return EI[r]}function qa(r){return{fieldPath:r.canonicalString()}}function Ha(r){return He.fromServerFormat(r.fieldPath)}function ZT(r){return r instanceof be?function(n){if(n.op==="=="){if(bv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NAN"}};if(Sv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NOT_NAN"}};if(Sv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qa(n.field),op:MI(n.op),value:n.value}}}(r):r instanceof pi?function(n){const s=n.getFilters().map(o=>ZT(o));return s.length===1?s[0]:{compositeFilter:{op:VI(n.op),filters:s}}}(r):_t(54877,{filter:r})}function PI(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function JT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,n,s,o,u=Tt.min(),f=Tt.min(),p=je.EMPTY_BYTE_STRING,g=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(t){return new Or(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(t){this.wt=t}}function UI(r){const t=DI({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?rm(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.Cn=new LI}addToCollectionParentIndex(t,n){return this.Cn.add(n),Q.resolve()}getCollectionParents(t,n){return Q.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return Q.resolve()}deleteFieldIndex(t,n){return Q.resolve()}deleteAllFieldIndexes(t){return Q.resolve()}createTargetIndexes(t,n){return Q.resolve()}getDocumentsMatchingTarget(t,n){return Q.resolve(null)}getIndexType(t,n){return Q.resolve(0)}getFieldIndexes(t,n){return Q.resolve([])}getNextCollectionGroupToUpdate(t){return Q.resolve(null)}getMinOffset(t,n){return Q.resolve(Lr.min())}getMinOffsetFromCollectionGroup(t,n){return Q.resolve(Lr.min())}updateCollectionGroup(t,n,s){return Q.resolve()}updateIndexEntries(t,n){return Q.resolve()}}class LI{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new we(ee.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new we(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},WT=41943040;class an{static withCacheSize(t){return new an(t,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(WT,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Ja(0)}static lr(){return new Ja(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="LruGarbageCollector",zI=1048576;function Bv([r,t],[n,s]){const o=wt(r,n);return o===0?wt(t,s):o}class BI{constructor(t){this.Er=t,this.buffer=new we(Bv),this.dr=0}Ar(){return++this.dr}Rr(t){const n=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Bv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class qI{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){st(zv,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){io(n)?st(zv,"Ignoring IndexedDB error during garbage collection: ",n):await no(n)}await this.mr(3e5)})}}class HI{constructor(t,n){this.gr=t,this.params=n}calculateTargetCount(t,n){return this.gr.pr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return Q.resolve(ah.le);const s=new BI(n);return this.gr.forEachTarget(t,o=>s.Rr(o.sequenceNumber)).next(()=>this.gr.yr(t,o=>s.Rr(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.gr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.gr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(st("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(Lv)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(st("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Lv):this.wr(t,n))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,n){let s,o,u,f,p,g,_;const T=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(st("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,f=Date.now(),this.nthSequenceNumber(t,o))).next(I=>(s=I,p=Date.now(),this.removeTargets(t,s,n))).next(I=>(u=I,g=Date.now(),this.removeOrphanedDocuments(t,s))).next(I=>(_=Date.now(),za()<=Nt.DEBUG&&st("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(p-f)+`ms
	Removed ${u} targets in `+(g-p)+`ms
	Removed ${I} documents in `+(_-g)+`ms
Total Duration: ${_-T}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:I})))}}function jI(r,t){return new HI(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.changes=new Gs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Xe.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Q.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&Rl(s.mutation,o,yn.empty(),Re.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Mt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Mt()){const o=Ms();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(u=>{let f=yl();return u.forEach((p,g)=>{f=f.insert(p,g.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Ms();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Mt()))}populateOverlays(t,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((f,p)=>{n.set(f,p)})})}computeViews(t,n,s,o){let u=Xi();const f=bl(),p=function(){return bl()}();return n.forEach((g,_)=>{const T=s.get(_.key);o.has(_.key)&&(T===void 0||T.mutation instanceof Kr)?u=u.insert(_.key,_):T!==void 0?(f.set(_.key,T.mutation.getFieldMask()),Rl(T.mutation,_,T.mutation.getFieldMask(),Re.now())):f.set(_.key,yn.empty())}),this.recalculateAndSaveOverlays(t,u).next(g=>(g.forEach((_,T)=>f.set(_,T)),n.forEach((_,T)=>{var I;return p.set(_,new GI(T,(I=f.get(_))!==null&&I!==void 0?I:null))}),p))}recalculateAndSaveOverlays(t,n){const s=bl();let o=new ie((f,p)=>f-p),u=Mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const p of f)p.keys().forEach(g=>{const _=n.get(g);if(_===null)return;let T=s.get(g)||yn.empty();T=p.applyToLocalView(_,T),s.set(g,T);const I=(o.get(p.batchId)||Mt()).add(g);o=o.insert(p.batchId,I)})}).next(()=>{const f=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),_=g.key,T=g.value,I=kT();T.forEach(C=>{if(!u.has(C)){const H=qT(n.get(C),s.get(C));H!==null&&I.set(C,H),u=u.add(C)}}),f.push(this.documentOverlayCache.saveOverlays(t,_,I))}return Q.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return ft.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Xw(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):Q.resolve(Ms());let p=Dl,g=u;return f.next(_=>Q.forEach(_,(T,I)=>(p<I.largestBatchId&&(p=I.largestBatchId),u.get(T)?Q.resolve():this.remoteDocumentCache.getEntry(t,T).next(C=>{g=g.insert(T,C)}))).next(()=>this.populateOverlays(t,_,u)).next(()=>this.computeViews(t,g,_,Mt())).next(T=>({batchId:p,changes:PT(T)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ft(n)).next(s=>{let o=yl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=yl();return this.indexManager.getCollectionParents(t,u).next(p=>Q.forEach(p,g=>{const _=function(I,C){return new uh(C,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(t,_,s,o).next(T=>{T.forEach((I,C)=>{f=f.insert(I,C)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o))).next(f=>{u.forEach((g,_)=>{const T=_.getKey();f.get(T)===null&&(f=f.insert(T,Xe.newInvalidDocument(T)))});let p=yl();return f.forEach((g,_)=>{const T=u.get(g);T!==void 0&&Rl(T.mutation,_,yn.empty(),Re.now()),hh(n,_)&&(p=p.insert(g,_))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,n){return Q.resolve(this.kr.get(n))}saveBundleMetadata(t,n){return this.kr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:fi(o.createTime)}}(n)),Q.resolve()}getNamedQuery(t,n){return Q.resolve(this.qr.get(n))}saveNamedQuery(t,n){return this.qr.set(n.name,function(o){return{name:o.name,query:UI(o.bundledQuery),readTime:fi(o.readTime)}}(n)),Q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.overlays=new ie(ft.comparator),this.Qr=new Map}getOverlay(t,n){return Q.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ms();return Q.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,u)=>{this.St(t,n,u)}),Q.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Qr.delete(s)),Q.resolve()}getOverlaysForCollection(t,n,s){const o=Ms(),u=n.length+1,f=new ft(n.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const g=p.getNext().value,_=g.getKey();if(!n.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return Q.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new ie((_,T)=>_-T);const f=this.overlays.getIterator();for(;f.hasNext();){const _=f.getNext().value;if(_.getKey().getCollectionGroup()===n&&_.largestBatchId>s){let T=u.get(_.largestBatchId);T===null&&(T=Ms(),u=u.insert(_.largestBatchId,T)),T.set(_.getKey(),_)}}const p=Ms(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,T)=>p.set(_,T)),!(p.size()>=o)););return Q.resolve(p)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Qr.get(o.largestBatchId).delete(s.key);this.Qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new dI(n,s));let u=this.Qr.get(n);u===void 0&&(u=Mt(),this.Qr.set(n,u)),this.Qr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(){this.sessionToken=je.EMPTY_BYTE_STRING}getSessionToken(t){return Q.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.$r=new we(Ve.Ur),this.Kr=new we(Ve.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,n){const s=new Ve(t,n);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.zr(new Ve(t,n))}jr(t,n){t.forEach(s=>this.removeReference(s,n))}Hr(t){const n=new ft(new ee([])),s=new Ve(n,t),o=new Ve(n,t+1),u=[];return this.Kr.forEachInRange([s,o],f=>{this.zr(f),u.push(f.key)}),u}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const n=new ft(new ee([])),s=new Ve(n,t),o=new Ve(n,t+1);let u=Mt();return this.Kr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(t){const n=new Ve(t,0),s=this.$r.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Ve{constructor(t,n){this.key=t,this.Zr=n}static Ur(t,n){return ft.comparator(t.key,n.key)||wt(t.Zr,n.Zr)}static Wr(t,n){return wt(t.Zr,n.Zr)||ft.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new we(Ve.Ur)}checkEmpty(t){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new fI(u,n,s,o);this.mutationQueue.push(f);for(const p of o)this.Xr=this.Xr.add(new Ve(p.key,u)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return Q.resolve(f)}lookupMutationBatch(t,n){return Q.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.ti(s),u=o<0?0:o;return Q.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?Vm:this.nr-1)}getAllMutationBatches(t){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Ve(n,0),o=new Ve(n,Number.POSITIVE_INFINITY),u=[];return this.Xr.forEachInRange([s,o],f=>{const p=this.ei(f.Zr);u.push(p)}),Q.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new we(wt);return n.forEach(o=>{const u=new Ve(o,0),f=new Ve(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([u,f],p=>{s=s.add(p.Zr)})}),Q.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;ft.isDocumentKey(u)||(u=u.child(""));const f=new Ve(new ft(u),0);let p=new we(wt);return this.Xr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(p=p.add(g.Zr)),!0)},f),Q.resolve(this.ni(p))}ni(t){const n=[];return t.forEach(s=>{const o=this.ei(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){qt(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return Q.forEach(n.mutations,o=>{const u=new Ve(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Xr=s})}sr(t){}containsKey(t,n){const s=new Ve(n,0),o=this.Xr.firstAfterOrEqual(s);return Q.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,Q.resolve()}ri(t,n){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const n=this.ti(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(t){this.ii=t,this.docs=function(){return new ie(ft.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ii(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return Q.resolve(s?s.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(t,n){let s=Xi();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Xe.newInvalidDocument(o))}),Q.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=Xi();const f=n.path,p=new ft(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:_,value:{document:T}}=g.getNext();if(!f.isPrefixOf(_.path))break;_.path.length>f.length+1||ww(Rw(T),s)<=0||(o.has(T.key)||hh(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return Q.resolve(u)}getAllFromCollectionGroup(t,n,s,o){_t(9500)}si(t,n){return Q.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new JI(this)}getSize(t){return Q.resolve(this.size)}}class JI extends FI{constructor(t){super(),this.Br=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Br.addEntry(t,o)):this.Br.removeEntry(s)}),Q.waitFor(n)}getFromCache(t,n){return this.Br.getEntry(t,n)}getAllFromCache(t,n){return this.Br.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(t){this.persistence=t,this.oi=new Gs(n=>Um(n),xm),this.lastRemoteSnapshotVersion=Tt.min(),this.highestTargetId=0,this._i=0,this.ai=new jm,this.targetCount=0,this.ui=Ja.cr()}forEachTarget(t,n){return this.oi.forEach((s,o)=>n(o)),Q.resolve()}getLastRemoteSnapshotVersion(t){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Q.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this._i&&(this._i=n),Q.resolve()}Tr(t){this.oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ui=new Ja(n),this.highestTargetId=n),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,n){return this.Tr(n),this.targetCount+=1,Q.resolve()}updateTargetData(t,n){return this.Tr(n),Q.resolve()}removeTargetData(t,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.oi.forEach((f,p)=>{p.sequenceNumber<=n&&s.get(p.targetId)===null&&(this.oi.delete(f),u.push(this.removeMatchingKeysForTargetId(t,p.targetId)),o++)}),Q.waitFor(u).next(()=>o)}getTargetCount(t){return Q.resolve(this.targetCount)}getTargetData(t,n){const s=this.oi.get(n)||null;return Q.resolve(s)}addMatchingKeys(t,n,s){return this.ai.Gr(n,s),Q.resolve()}removeMatchingKeys(t,n,s){this.ai.jr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(t,f))}),Q.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.ai.Hr(n),Q.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ai.Yr(n);return Q.resolve(s)}containsKey(t,n){return Q.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(t,n){this.ci={},this.overlays={},this.li=new ah(0),this.hi=!1,this.hi=!0,this.Pi=new XI,this.referenceDelegate=t(this),this.Ti=new WI(this),this.indexManager=new xI,this.remoteDocumentCache=function(o){return new ZI(o)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new kI(n),this.Ei=new QI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new YI,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ci[t.toKey()];return s||(s=new $I(n,this.referenceDelegate),this.ci[t.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,n,s){st("MemoryPersistence","Starting transaction:",t);const o=new tC(this.li.next());return this.referenceDelegate.di(),s(o).next(u=>this.referenceDelegate.Ai(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ri(t,n){return Q.or(Object.values(this.ci).map(s=>()=>s.containsKey(t,n)))}}class tC extends Cw{constructor(t){super(),this.currentSequenceNumber=t}}class Fm{constructor(t){this.persistence=t,this.Vi=new jm,this.mi=null}static fi(t){return new Fm(t)}get gi(){if(this.mi)return this.mi;throw _t(60996)}addReference(t,n,s){return this.Vi.addReference(s,n),this.gi.delete(s.toString()),Q.resolve()}removeReference(t,n,s){return this.Vi.removeReference(s,n),this.gi.add(s.toString()),Q.resolve()}markPotentiallyOrphaned(t,n){return this.gi.add(n.toString()),Q.resolve()}removeTarget(t,n){this.Vi.Hr(n.targetId).forEach(o=>this.gi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.gi.add(u.toString()))}).next(()=>s.removeTargetData(t,n))}di(){this.mi=new Set}Ai(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.gi,s=>{const o=ft.fromPath(s);return this.pi(t,o).next(u=>{u||n.removeEntry(o,Tt.min())})}).next(()=>(this.mi=null,n.apply(t)))}updateLimboDocument(t,n){return this.pi(t,n).next(s=>{s?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(t){return 0}pi(t,n){return Q.or([()=>Q.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ri(t,n)])}}class Zc{constructor(t,n){this.persistence=t,this.yi=new Gs(s=>Nw(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=jI(this,n)}static fi(t,n){return new Zc(t,n)}di(){}Ai(t){return Q.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}pr(t){const n=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}br(t){let n=0;return this.yr(t,s=>{n++}).next(()=>n)}yr(t,n){return Q.forEach(this.yi,(s,o)=>this.Dr(t,s,o).next(u=>u?Q.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.si(t,f=>this.Dr(t,f,n).next(p=>{p||(s++,u.removeEntry(f,Tt.min()))})).next(()=>u.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.yi.set(n,t.currentSequenceNumber),Q.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.yi.set(s,t.currentSequenceNumber),Q.resolve()}removeReference(t,n,s){return this.yi.set(s,t.currentSequenceNumber),Q.resolve()}updateLimboDocument(t,n){return this.yi.set(n,t.currentSequenceNumber),Q.resolve()}Ii(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Oc(t.data.value)),n}Dr(t,n,s){return Q.or([()=>this.persistence.Ri(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.yi.get(n);return Q.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.ds=s,this.As=o}static Rs(t,n){let s=Mt(),o=Mt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Gm(t,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return zS()?8:Dw($e())>0?6:4}()}initialize(t,n){this.ys=t,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.ws(t,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.bs(t,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new eC;return this.Ss(t,n,f).next(p=>{if(u.result=p,this.fs)return this.Ds(t,n,f,p.size)})}).next(()=>u.result)}Ds(t,n,s,o){return s.documentReadCount<this.gs?(za()<=Nt.DEBUG&&st("QueryEngine","SDK will not create cache indexes for query:",Ba(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),Q.resolve()):(za()<=Nt.DEBUG&&st("QueryEngine","Query:",Ba(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ps*o?(za()<=Nt.DEBUG&&st("QueryEngine","The SDK decides to create cache indexes for query:",Ba(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,hi(n))):Q.resolve())}ws(t,n){if(Cv(n))return Q.resolve(null);let s=hi(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=rm(n,null,"F"),s=hi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(u=>{const f=Mt(...u);return this.ys.getDocuments(t,f).next(p=>this.indexManager.getMinOffset(t,s).next(g=>{const _=this.vs(n,p);return this.Cs(n,_,f,g.readTime)?this.ws(t,rm(n,null,"F")):this.Fs(t,_,n,g)}))})))}bs(t,n,s,o){return Cv(n)||o.isEqual(Tt.min())?Q.resolve(null):this.ys.getDocuments(t,s).next(u=>{const f=this.vs(n,u);return this.Cs(n,f,s,o)?Q.resolve(null):(za()<=Nt.DEBUG&&st("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ba(n)),this.Fs(t,f,n,bw(o,Dl)).next(p=>p))})}vs(t,n){let s=new we(MT(t));return n.forEach((o,u)=>{hh(t,u)&&(s=s.add(u))}),s}Cs(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,n,s){return za()<=Nt.DEBUG&&st("QueryEngine","Using full collection scan to execute query:",Ba(n)),this.ys.getDocumentsMatchingQuery(t,n,Lr.min(),s)}Fs(t,n,s,o){return this.ys.getDocumentsMatchingQuery(t,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="LocalStore",iC=3e8;class rC{constructor(t,n,s,o){this.persistence=t,this.Ms=n,this.serializer=o,this.xs=new ie(wt),this.Os=new Gs(u=>Um(u),xm),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(s)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new KI(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.xs))}}function sC(r,t,n,s){return new rC(r,t,n,s)}async function e0(r,t){const n=At(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Ls(t),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],p=[];let g=Mt();for(const _ of o){f.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}for(const _ of u){p.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}return n.localDocuments.getDocuments(s,g).next(_=>({ks:_,removedBatchIds:f,addedBatchIds:p}))})})}function aC(r,t){const n=At(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),u=n.Bs.newChangeBuffer({trackRemovals:!0});return function(p,g,_,T){const I=_.batch,C=I.keys();let H=Q.resolve();return C.forEach(X=>{H=H.next(()=>T.getEntry(g,X)).next(W=>{const Y=_.docVersions.get(X);qt(Y!==null,48541),W.version.compareTo(Y)<0&&(I.applyToRemoteDocument(W,_),W.isValidDocument()&&(W.setReadTime(_.commitVersion),T.addEntry(W)))})}),H.next(()=>p.mutationQueue.removeMutationBatch(g,I))}(n,s,t,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let g=Mt();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(g=g.add(p.batch.mutations[_].key));return g}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function n0(r){const t=At(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ti.getLastRemoteSnapshotVersion(n))}function oC(r,t){const n=At(r),s=t.snapshotVersion;let o=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Bs.newChangeBuffer({trackRemovals:!0});o=n.xs;const p=[];t.targetChanges.forEach((T,I)=>{const C=o.get(I);if(!C)return;p.push(n.Ti.removeMatchingKeys(u,T.removedDocuments,I).next(()=>n.Ti.addMatchingKeys(u,T.addedDocuments,I)));let H=C.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(I)!==null?H=H.withResumeToken(je.EMPTY_BYTE_STRING,Tt.min()).withLastLimboFreeSnapshotVersion(Tt.min()):T.resumeToken.approximateByteSize()>0&&(H=H.withResumeToken(T.resumeToken,s)),o=o.insert(I,H),function(W,Y,mt){return W.resumeToken.approximateByteSize()===0||Y.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=iC?!0:mt.addedDocuments.size+mt.modifiedDocuments.size+mt.removedDocuments.size>0}(C,H,T)&&p.push(n.Ti.updateTargetData(u,H))});let g=Xi(),_=Mt();if(t.documentUpdates.forEach(T=>{t.resolvedLimboDocuments.has(T)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(u,T))}),p.push(lC(u,f,t.documentUpdates).next(T=>{g=T.qs,_=T.Qs})),!s.isEqual(Tt.min())){const T=n.Ti.getLastRemoteSnapshotVersion(u).next(I=>n.Ti.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(T)}return Q.waitFor(p).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,g,_)).next(()=>g)}).then(u=>(n.xs=o,u))}function lC(r,t,n){let s=Mt(),o=Mt();return n.forEach(u=>s=s.add(u)),t.getEntries(r,s).next(u=>{let f=Xi();return n.forEach((p,g)=>{const _=u.get(p);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(Tt.min())?(t.removeEntry(p,g.readTime),f=f.insert(p,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(t.addEntry(g),f=f.insert(p,g)):st(Km,"Ignoring outdated watch update for ",p,". Current version:",_.version," Watch version:",g.version)}),{qs:f,Qs:o}})}function uC(r,t){const n=At(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=Vm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function cC(r,t){const n=At(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Ti.getTargetData(s,t).next(u=>u?(o=u,Q.resolve(o)):n.Ti.allocateTargetId(s).next(f=>(o=new Or(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Ti.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.xs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.xs=n.xs.insert(s.targetId,s),n.Os.set(t,s.targetId)),s})}async function um(r,t,n){const s=At(r),o=s.xs.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!io(f))throw f;st(Km,`Failed to update sequence numbers for target ${t}: ${f}`)}s.xs=s.xs.remove(t),s.Os.delete(o.target)}function qv(r,t,n){const s=At(r);let o=Tt.min(),u=Mt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(g,_,T){const I=At(g),C=I.Os.get(T);return C!==void 0?Q.resolve(I.xs.get(C)):I.Ti.getTargetData(_,T)}(s,f,hi(t)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(f,p.targetId).next(g=>{u=g})}).next(()=>s.Ms.getDocumentsMatchingQuery(f,t,n?o:Tt.min(),n?u:Mt())).next(p=>(hC(s,Zw(t),p),{documents:p,$s:u})))}function hC(r,t,n){let s=r.Ns.get(t)||Tt.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Ns.set(t,s)}class Hv{constructor(){this.activeTargetIds=iI()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class fC{constructor(){this.xo=new Hv,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,n,s){this.Oo[t]=n}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new Hv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="ConnectivityMonitor";class Fv{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){st(jv,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){st(jv,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc=null;function cm(){return Tc===null?Tc=function(){return 268435456+Math.round(2147483648*Math.random())}():Tc++,"0x"+Tc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="RestConnection",mC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pC{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Wo=`projects/${s}/databases/${o}`,this.Go=this.databaseId.database===Fc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}zo(t,n,s,o,u){const f=cm(),p=this.jo(t,n.toUriEncodedString());st(Ld,`Sending RPC '${t}' ${f}:`,p,s);const g={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(g,o,u);const{host:_}=new URL(p),T=Fr(_);return this.Jo(t,p,g,s,T).then(I=>(st(Ld,`Received RPC '${t}' ${f}: `,I),I),I=>{throw Ya(Ld,`RPC '${t}' ${f} failed with error: `,I,"url: ",p,"request:",s),I})}Yo(t,n,s,o,u,f){return this.zo(t,n,s,o,u)}Ho(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+eo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}jo(t,n){const s=mC[t];return`${this.Ko}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class _C extends pC{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,o,u){const f=cm();return new Promise((p,g)=>{const _=new sT;_.setWithCredentials(!0),_.listenOnce(aT.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case Dc.NO_ERROR:const I=_.getResponseJson();st(Qe,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(I)),p(I);break;case Dc.TIMEOUT:st(Qe,`RPC '${t}' ${f} timed out`),g(new ut(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Dc.HTTP_ERROR:const C=_.getStatus();if(st(Qe,`RPC '${t}' ${f} failed with status:`,C,"response text:",_.getResponseText()),C>0){let H=_.getResponseJson();Array.isArray(H)&&(H=H[0]);const X=H==null?void 0:H.error;if(X&&X.status&&X.message){const W=function(mt){const tt=mt.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(tt)>=0?tt:Z.UNKNOWN}(X.status);g(new ut(W,X.message))}else g(new ut(Z.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ut(Z.UNAVAILABLE,"Connection failed."));break;default:_t(9055,{h_:t,streamId:f,P_:_.getLastErrorCode(),T_:_.getLastError()})}}finally{st(Qe,`RPC '${t}' ${f} completed.`)}});const T=JSON.stringify(o);st(Qe,`RPC '${t}' ${f} sending request:`,o),_.send(n,"POST",T,s,15)})}I_(t,n,s){const o=cm(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=uT(),p=lT(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Ho(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const T=u.join("");st(Qe,`Creating RPC '${t}' stream ${o}: ${T}`,g);const I=f.createWebChannel(T,g);this.E_(I);let C=!1,H=!1;const X=new gC({Zo:Y=>{H?st(Qe,`Not sending because RPC '${t}' stream ${o} is closed:`,Y):(C||(st(Qe,`Opening RPC '${t}' stream ${o} transport.`),I.open(),C=!0),st(Qe,`RPC '${t}' stream ${o} sending:`,Y),I.send(Y))},Xo:()=>I.close()}),W=(Y,mt,tt)=>{Y.listen(mt,it=>{try{tt(it)}catch(ct){setTimeout(()=>{throw ct},0)}})};return W(I,_l.EventType.OPEN,()=>{H||(st(Qe,`RPC '${t}' stream ${o} transport opened.`),X.__())}),W(I,_l.EventType.CLOSE,()=>{H||(H=!0,st(Qe,`RPC '${t}' stream ${o} transport closed`),X.u_(),this.d_(I))}),W(I,_l.EventType.ERROR,Y=>{H||(H=!0,Ya(Qe,`RPC '${t}' stream ${o} transport errored. Name:`,Y.name,"Message:",Y.message),X.u_(new ut(Z.UNAVAILABLE,"The operation could not be completed")))}),W(I,_l.EventType.MESSAGE,Y=>{var mt;if(!H){const tt=Y.data[0];qt(!!tt,16349);const it=tt,ct=(it==null?void 0:it.error)||((mt=it[0])===null||mt===void 0?void 0:mt.error);if(ct){st(Qe,`RPC '${t}' stream ${o} received error:`,ct);const pt=ct.status;let bt=function(R){const N=ge[R];if(N!==void 0)return jT(N)}(pt),M=ct.message;bt===void 0&&(bt=Z.INTERNAL,M="Unknown error status: "+pt+" with message "+ct.message),H=!0,X.u_(new ut(bt,M)),I.close()}else st(Qe,`RPC '${t}' stream ${o} received:`,tt),X.c_(tt)}}),W(p,oT.STAT_EVENT,Y=>{Y.stat===Jd.PROXY?st(Qe,`RPC '${t}' stream ${o} detected buffering proxy`):Y.stat===Jd.NOPROXY&&st(Qe,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{X.a_()},0),X}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(n=>n===t)}}function zd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(r){return new TI(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(t,n,s=1e3,o=1.5,u=6e4){this.xi=t,this.timerId=n,this.A_=s,this.R_=o,this.V_=u,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const n=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),o=Math.max(0,n-s);o>0&&st("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="PersistentStream";class r0{constructor(t,n,s,o,u,f,p,g){this.xi=t,this.S_=s,this.D_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new i0(t,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():n&&n.code===Z.RESOURCE_EXHAUSTED?(Yi(n.toString()),Yi("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(n)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.v_===n&&this.z_(s,o)},s=>{t(()=>{const o=new ut(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(o)})})}z_(t,n){const s=this.G_(this.v_);this.stream=this.H_(t,n),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{s(()=>this.j_(o))}),this.stream.onMessage(o=>{s(()=>++this.M_==1?this.J_(o):this.onNext(o))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return st(Gv,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return n=>{this.xi.enqueueAndForget(()=>this.v_===t?n():(st(Gv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yC extends r0{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}H_(t,n){return this.connection.I_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const n=bI(this.serializer,t),s=function(u){if(!("targetChange"in u))return Tt.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Tt.min():f.readTime?fi(f.readTime):Tt.min()}(t);return this.listener.Y_(n,s)}Z_(t){const n={};n.database=lm(this.serializer),n.addTarget=function(u,f){let p;const g=f.target;if(p=im(g)?{documents:II(u,g)}:{query:CI(u,g).gt},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=KT(u,f.resumeToken);const _=sm(u,f.expectedCount);_!==null&&(p.expectedCount=_)}else if(f.snapshotVersion.compareTo(Tt.min())>0){p.readTime=$c(u,f.snapshotVersion.toTimestamp());const _=sm(u,f.expectedCount);_!==null&&(p.expectedCount=_)}return p}(this.serializer,t);const s=OI(this.serializer,t);s&&(n.labels=s),this.Q_(n)}X_(t){const n={};n.database=lm(this.serializer),n.removeTarget=t,this.Q_(n)}}class vC extends r0{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(t,n){return this.connection.I_("Write",t,n)}J_(t){return qt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,qt(!t.writeResults||t.writeResults.length===0,55816),this.listener.na()}onNext(t){qt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.x_.reset();const n=wI(t.writeResults,t.commitTime),s=fi(t.commitTime);return this.listener.ra(s,n)}ia(){const t={};t.database=lm(this.serializer),this.Q_(t)}ta(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>RI(this.serializer,s))};this.Q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{}class TC extends EC{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.sa=!1}oa(){if(this.sa)throw new ut(Z.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,n,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.zo(t,am(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ut(Z.UNKNOWN,u.toString())})}Yo(t,n,s,o,u){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,p])=>this.connection.Yo(t,am(n,s),o,f,p,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ut(Z.UNKNOWN,f.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class AC{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Yi(n),this.ua=!1):st("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="RemoteStore";class SC{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=u,this.Ra.No(f=>{s.enqueueAndForget(async()=>{Ks(this)&&(st(zs,"Restarting streams for network reachability change."),await async function(g){const _=At(g);_.da.add(4),await jl(_),_.Va.set("Unknown"),_.da.delete(4),await gh(_)}(this))})}),this.Va=new AC(s,o)}}async function gh(r){if(Ks(r))for(const t of r.Aa)await t(!0)}async function jl(r){for(const t of r.Aa)await t(!1)}function s0(r,t){const n=At(r);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),$m(n)?Xm(n):ro(n).N_()&&Ym(n,t))}function Qm(r,t){const n=At(r),s=ro(n);n.Ea.delete(t),s.N_()&&a0(n,t),n.Ea.size===0&&(s.N_()?s.k_():Ks(n)&&n.Va.set("Unknown"))}function Ym(r,t){if(r.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Tt.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ro(r).Z_(t)}function a0(r,t){r.ma.Ke(t),ro(r).X_(t)}function Xm(r){r.ma=new _I({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r.Ea.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),ro(r).start(),r.Va.ca()}function $m(r){return Ks(r)&&!ro(r).O_()&&r.Ea.size>0}function Ks(r){return At(r).da.size===0}function o0(r){r.ma=void 0}async function bC(r){r.Va.set("Online")}async function RC(r){r.Ea.forEach((t,n)=>{Ym(r,t)})}async function wC(r,t){o0(r),$m(r)?(r.Va.Pa(t),Xm(r)):r.Va.set("Unknown")}async function IC(r,t,n){if(r.Va.set("Online"),t instanceof GT&&t.state===2&&t.cause)try{await async function(o,u){const f=u.cause;for(const p of u.targetIds)o.Ea.has(p)&&(await o.remoteSyncer.rejectListen(p,f),o.Ea.delete(p),o.ma.removeTarget(p))}(r,t)}catch(s){st(zs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Jc(r,s)}else if(t instanceof Vc?r.ma.Xe(t):t instanceof FT?r.ma.ot(t):r.ma.nt(t),!n.isEqual(Tt.min()))try{const s=await n0(r.localStore);n.compareTo(s)>=0&&await function(u,f){const p=u.ma.It(f);return p.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const T=u.Ea.get(_);T&&u.Ea.set(_,T.withResumeToken(g.resumeToken,f))}}),p.targetMismatches.forEach((g,_)=>{const T=u.Ea.get(g);if(!T)return;u.Ea.set(g,T.withResumeToken(je.EMPTY_BYTE_STRING,T.snapshotVersion)),a0(u,g);const I=new Or(T.target,g,_,T.sequenceNumber);Ym(u,I)}),u.remoteSyncer.applyRemoteEvent(p)}(r,n)}catch(s){st(zs,"Failed to raise snapshot:",s),await Jc(r,s)}}async function Jc(r,t,n){if(!io(t))throw t;r.da.add(1),await jl(r),r.Va.set("Offline"),n||(n=()=>n0(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{st(zs,"Retrying IndexedDB access"),await n(),r.da.delete(1),await gh(r)})}function l0(r,t){return t().catch(n=>Jc(r,n,t))}async function _h(r){const t=At(r),n=Hr(t);let s=t.Ia.length>0?t.Ia[t.Ia.length-1].batchId:Vm;for(;CC(t);)try{const o=await uC(t.localStore,s);if(o===null){t.Ia.length===0&&n.k_();break}s=o.batchId,DC(t,o)}catch(o){await Jc(t,o)}u0(t)&&c0(t)}function CC(r){return Ks(r)&&r.Ia.length<10}function DC(r,t){r.Ia.push(t);const n=Hr(r);n.N_()&&n.ea&&n.ta(t.mutations)}function u0(r){return Ks(r)&&!Hr(r).O_()&&r.Ia.length>0}function c0(r){Hr(r).start()}async function OC(r){Hr(r).ia()}async function NC(r){const t=Hr(r);for(const n of r.Ia)t.ta(n.mutations)}async function MC(r,t,n){const s=r.Ia.shift(),o=Bm.from(s,t,n);await l0(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await _h(r)}async function VC(r,t){t&&Hr(r).ea&&await async function(s,o){if(function(f){return pI(f)&&f!==Z.ABORTED}(o.code)){const u=s.Ia.shift();Hr(s).L_(),await l0(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await _h(s)}}(r,t),u0(r)&&c0(r)}async function Kv(r,t){const n=At(r);n.asyncQueue.verifyOperationInProgress(),st(zs,"RemoteStore received new credentials");const s=Ks(n);n.da.add(3),await jl(n),s&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.da.delete(3),await gh(n)}async function PC(r,t){const n=At(r);t?(n.da.delete(2),await gh(n)):t||(n.da.add(2),await jl(n),n.Va.set("Unknown"))}function ro(r){return r.fa||(r.fa=function(n,s,o){const u=At(n);return u.oa(),new yC(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{e_:bC.bind(null,r),n_:RC.bind(null,r),i_:wC.bind(null,r),Y_:IC.bind(null,r)}),r.Aa.push(async t=>{t?(r.fa.L_(),$m(r)?Xm(r):r.Va.set("Unknown")):(await r.fa.stop(),o0(r))})),r.fa}function Hr(r){return r.ga||(r.ga=function(n,s,o){const u=At(n);return u.oa(),new vC(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{e_:()=>Promise.resolve(),n_:OC.bind(null,r),i_:VC.bind(null,r),na:NC.bind(null,r),ra:MC.bind(null,r)}),r.Aa.push(async t=>{t?(r.ga.L_(),await _h(r)):(await r.ga.stop(),r.Ia.length>0&&(st(zs,`Stopping write stream with ${r.Ia.length} pending writes`),r.Ia=[]))})),r.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,p=new Zm(t,n,f,o,u);return p.start(s),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ut(Z.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jm(r,t){if(Yi("AsyncQueue",`${t}: ${r}`),io(r))return new ut(Z.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{static emptySet(t){return new Ka(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ft.comparator(n.key,s.key):(n,s)=>ft.comparator(n.key,s.key),this.keyedMap=yl(),this.sortedSet=new ie(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ka)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ka;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(){this.pa=new ie(ft.comparator)}track(t){const n=t.doc.key,s=this.pa.get(n);s?t.type!==0&&s.type===3?this.pa=this.pa.insert(n,t):t.type===3&&s.type!==1?this.pa=this.pa.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.pa=this.pa.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.pa=this.pa.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.pa=this.pa.remove(n):t.type===1&&s.type===2?this.pa=this.pa.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.pa=this.pa.insert(n,{type:2,doc:t.doc}):_t(63341,{Vt:t,ya:s}):this.pa=this.pa.insert(n,t)}wa(){const t=[];return this.pa.inorderTraversal((n,s)=>{t.push(s)}),t}}class Wa{constructor(t,n,s,o,u,f,p,g,_){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach(p=>{f.push({type:0,doc:p})}),new Wa(t,n,Ka.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ch(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class UC{constructor(){this.queries=Yv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=At(n),u=o.queries;o.queries=Yv(),u.forEach((f,p)=>{for(const g of p.Sa)g.onError(s)})})(this,new ut(Z.ABORTED,"Firestore shutting down"))}}function Yv(){return new Gs(r=>NT(r),ch)}async function xC(r,t){const n=At(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.Da()&&t.va()&&(s=2):(u=new kC,s=t.va()?0:1);try{switch(s){case 0:u.ba=await n.onListen(o,!0);break;case 1:u.ba=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const p=Jm(f,`Initialization of query '${Ba(t.query)}' failed`);return void t.onError(p)}n.queries.set(o,u),u.Sa.push(t),t.Fa(n.onlineState),u.ba&&t.Ma(u.ba)&&Wm(n)}async function LC(r,t){const n=At(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=t.va()?0:1:!u.Da()&&t.va()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function zC(r,t){const n=At(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const p of f.Sa)p.Ma(o)&&(s=!0);f.ba=o}}s&&Wm(n)}function BC(r,t,n){const s=At(r),o=s.queries.get(t);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(t)}function Wm(r){r.Ca.forEach(t=>{t.next()})}var hm,Xv;(Xv=hm||(hm={})).xa="default",Xv.Cache="cache";class qC{constructor(t,n,s){this.query=t,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new Wa(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Na?this.La(t)&&(this.Oa.next(t),n=!0):this.ka(t,this.onlineState)&&(this.qa(t),n=!0),this.Ba=t,n}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),n=!0),n}ka(t,n){if(!t.fromCache||!this.va())return!0;const s=n!=="Offline";return(!this.options.Qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}La(t){if(t.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(t){t=Wa.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==hm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(t){this.key=t}}class f0{constructor(t){this.key=t}}class HC{constructor(t,n){this.query=t,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Mt(),this.mutatedKeys=Mt(),this.Za=MT(t),this.Xa=new Ka(this.Za)}get eu(){return this.Ha}tu(t,n){const s=n?n.nu:new Qv,o=n?n.Xa:this.Xa;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((T,I)=>{const C=o.get(T),H=hh(this.query,I)?I:null,X=!!C&&this.mutatedKeys.has(C.key),W=!!H&&(H.hasLocalMutations||this.mutatedKeys.has(H.key)&&H.hasCommittedMutations);let Y=!1;C&&H?C.data.isEqual(H.data)?X!==W&&(s.track({type:3,doc:H}),Y=!0):this.ru(C,H)||(s.track({type:2,doc:H}),Y=!0,(g&&this.Za(H,g)>0||_&&this.Za(H,_)<0)&&(p=!0)):!C&&H?(s.track({type:0,doc:H}),Y=!0):C&&!H&&(s.track({type:1,doc:C}),Y=!0,(g||_)&&(p=!0)),Y&&(H?(f=f.add(H),u=W?u.add(T):u.delete(T)):(f=f.delete(T),u=u.delete(T)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{Xa:f,nu:s,Cs:p,mutatedKeys:u}}ru(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const f=t.nu.wa();f.sort((T,I)=>function(H,X){const W=Y=>{switch(Y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _t(20277,{Vt:Y})}};return W(H)-W(X)}(T.type,I.type)||this.Za(T.doc,I.doc)),this.iu(s),o=o!=null&&o;const p=n&&!o?this.su():[],g=this.Ya.size===0&&this.current&&!o?1:0,_=g!==this.Ja;return this.Ja=g,f.length!==0||_?{snapshot:new Wa(this.query,t.Xa,u,f,t.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:p}:{ou:p}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Qv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=Mt(),this.Xa.forEach(s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))});const n=[];return t.forEach(s=>{this.Ya.has(s)||n.push(new f0(s))}),this.Ya.forEach(s=>{t.has(s)||n.push(new h0(s))}),n}au(t){this.Ha=t.$s,this.Ya=Mt();const n=this.tu(t.documents);return this.applyChanges(n,!0)}uu(){return Wa.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const tp="SyncEngine";class jC{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class FC{constructor(t){this.key=t,this.cu=!1}}class GC{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.lu={},this.hu=new Gs(p=>NT(p),ch),this.Pu=new Map,this.Tu=new Set,this.Iu=new ie(ft.comparator),this.Eu=new Map,this.du=new jm,this.Au={},this.Ru=new Map,this.Vu=Ja.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function KC(r,t,n=!0){const s=y0(r);let o;const u=s.hu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.uu()):o=await d0(s,t,n,!0),o}async function QC(r,t){const n=y0(r);await d0(n,t,!0,!1)}async function d0(r,t,n,s){const o=await cC(r.localStore,hi(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let p;return s&&(p=await YC(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&s0(r.remoteStore,o),p}async function YC(r,t,n,s,o){r.fu=(I,C,H)=>async function(W,Y,mt,tt){let it=Y.view.tu(mt);it.Cs&&(it=await qv(W.localStore,Y.query,!1).then(({documents:M})=>Y.view.tu(M,it)));const ct=tt&&tt.targetChanges.get(Y.targetId),pt=tt&&tt.targetMismatches.get(Y.targetId)!=null,bt=Y.view.applyChanges(it,W.isPrimaryClient,ct,pt);return Zv(W,Y.targetId,bt.ou),bt.snapshot}(r,I,C,H);const u=await qv(r.localStore,t,!0),f=new HC(t,u.$s),p=f.tu(u.documents),g=Hl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),_=f.applyChanges(p,r.isPrimaryClient,g);Zv(r,n,_.ou);const T=new jC(t,n,f);return r.hu.set(t,T),r.Pu.has(n)?r.Pu.get(n).push(t):r.Pu.set(n,[t]),_.snapshot}async function XC(r,t,n){const s=At(r),o=s.hu.get(t),u=s.Pu.get(o.targetId);if(u.length>1)return s.Pu.set(o.targetId,u.filter(f=>!ch(f,t))),void s.hu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await um(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Qm(s.remoteStore,o.targetId),fm(s,o.targetId)}).catch(no)):(fm(s,o.targetId),await um(s.localStore,o.targetId,!0))}async function $C(r,t){const n=At(r),s=n.hu.get(t),o=n.Pu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Qm(n.remoteStore,s.targetId))}async function ZC(r,t,n){const s=r2(r);try{const o=await function(f,p){const g=At(f),_=Re.now(),T=p.reduce((H,X)=>H.add(X.key),Mt());let I,C;return g.persistence.runTransaction("Locally write mutations","readwrite",H=>{let X=Xi(),W=Mt();return g.Bs.getEntries(H,T).next(Y=>{X=Y,X.forEach((mt,tt)=>{tt.isValidDocument()||(W=W.add(mt))})}).next(()=>g.localDocuments.getOverlayedDocuments(H,X)).next(Y=>{I=Y;const mt=[];for(const tt of p){const it=cI(tt,I.get(tt.key).overlayedDocument);it!=null&&mt.push(new Kr(tt.key,it,ST(it.value.mapValue),Hn.exists(!0)))}return g.mutationQueue.addMutationBatch(H,_,mt,p)}).next(Y=>{C=Y;const mt=Y.applyToLocalDocumentSet(I,W);return g.documentOverlayCache.saveOverlays(H,Y.batchId,mt)})}).then(()=>({batchId:C.batchId,changes:PT(I)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,p,g){let _=f.Au[f.currentUser.toKey()];_||(_=new ie(wt)),_=_.insert(p,g),f.Au[f.currentUser.toKey()]=_}(s,o.batchId,n),await Fl(s,o.changes),await _h(s.remoteStore)}catch(o){const u=Jm(o,"Failed to persist write");n.reject(u)}}async function m0(r,t){const n=At(r);try{const s=await oC(n.localStore,t);t.targetChanges.forEach((o,u)=>{const f=n.Eu.get(u);f&&(qt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.cu=!0:o.modifiedDocuments.size>0?qt(f.cu,14607):o.removedDocuments.size>0&&(qt(f.cu,42227),f.cu=!1))}),await Fl(n,s,t)}catch(s){await no(s)}}function $v(r,t,n){const s=At(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.hu.forEach((u,f)=>{const p=f.view.Fa(t);p.snapshot&&o.push(p.snapshot)}),function(f,p){const g=At(f);g.onlineState=p;let _=!1;g.queries.forEach((T,I)=>{for(const C of I.Sa)C.Fa(p)&&(_=!0)}),_&&Wm(g)}(s.eventManager,t),o.length&&s.lu.Y_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function JC(r,t,n){const s=At(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Eu.get(t),u=o&&o.key;if(u){let f=new ie(ft.comparator);f=f.insert(u,Xe.newNoDocument(u,Tt.min()));const p=Mt().add(u),g=new mh(Tt.min(),new Map,new ie(wt),f,p);await m0(s,g),s.Iu=s.Iu.remove(u),s.Eu.delete(t),ep(s)}else await um(s.localStore,t,!1).then(()=>fm(s,t,n)).catch(no)}async function WC(r,t){const n=At(r),s=t.batch.batchId;try{const o=await aC(n.localStore,t);g0(n,s,null),p0(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Fl(n,o)}catch(o){await no(o)}}async function t2(r,t,n){const s=At(r);try{const o=await function(f,p){const g=At(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let T;return g.mutationQueue.lookupMutationBatch(_,p).next(I=>(qt(I!==null,37113),T=I.keys(),g.mutationQueue.removeMutationBatch(_,I))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,T,p)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,T)).next(()=>g.localDocuments.getDocuments(_,T))})}(s.localStore,t);g0(s,t,n),p0(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Fl(s,o)}catch(o){await no(o)}}function p0(r,t){(r.Ru.get(t)||[]).forEach(n=>{n.resolve()}),r.Ru.delete(t)}function g0(r,t,n){const s=At(r);let o=s.Au[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Au[s.currentUser.toKey()]=o}}function fm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Pu.get(t))r.hu.delete(s),n&&r.lu.gu(s,n);r.Pu.delete(t),r.isPrimaryClient&&r.du.Hr(t).forEach(s=>{r.du.containsKey(s)||_0(r,s)})}function _0(r,t){r.Tu.delete(t.path.canonicalString());const n=r.Iu.get(t);n!==null&&(Qm(r.remoteStore,n),r.Iu=r.Iu.remove(t),r.Eu.delete(n),ep(r))}function Zv(r,t,n){for(const s of n)s instanceof h0?(r.du.addReference(s.key,t),e2(r,s)):s instanceof f0?(st(tp,"Document no longer in limbo: "+s.key),r.du.removeReference(s.key,t),r.du.containsKey(s.key)||_0(r,s.key)):_t(19791,{pu:s})}function e2(r,t){const n=t.key,s=n.path.canonicalString();r.Iu.get(n)||r.Tu.has(s)||(st(tp,"New document in limbo: "+n),r.Tu.add(s),ep(r))}function ep(r){for(;r.Tu.size>0&&r.Iu.size<r.maxConcurrentLimboResolutions;){const t=r.Tu.values().next().value;r.Tu.delete(t);const n=new ft(ee.fromString(t)),s=r.Vu.next();r.Eu.set(s,new FC(n)),r.Iu=r.Iu.insert(n,s),s0(r.remoteStore,new Or(hi(OT(n.path)),s,"TargetPurposeLimboResolution",ah.le))}}async function Fl(r,t,n){const s=At(r),o=[],u=[],f=[];s.hu.isEmpty()||(s.hu.forEach((p,g)=>{f.push(s.fu(g,t,n).then(_=>{var T;if((_||n)&&s.isPrimaryClient){const I=_?!_.fromCache:(T=n==null?void 0:n.targetChanges.get(g.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(g.targetId,I?"current":"not-current")}if(_){o.push(_);const I=Gm.Rs(g.targetId,_);u.push(I)}}))}),await Promise.all(f),s.lu.Y_(o),await async function(g,_){const T=At(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>Q.forEach(_,C=>Q.forEach(C.ds,H=>T.persistence.referenceDelegate.addReference(I,C.targetId,H)).next(()=>Q.forEach(C.As,H=>T.persistence.referenceDelegate.removeReference(I,C.targetId,H)))))}catch(I){if(!io(I))throw I;st(Km,"Failed to update sequence numbers: "+I)}for(const I of _){const C=I.targetId;if(!I.fromCache){const H=T.xs.get(C),X=H.snapshotVersion,W=H.withLastLimboFreeSnapshotVersion(X);T.xs=T.xs.insert(C,W)}}}(s.localStore,u))}async function n2(r,t){const n=At(r);if(!n.currentUser.isEqual(t)){st(tp,"User change. New user:",t.toKey());const s=await e0(n.localStore,t);n.currentUser=t,function(u,f){u.Ru.forEach(p=>{p.forEach(g=>{g.reject(new ut(Z.CANCELLED,f))})}),u.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Fl(n,s.ks)}}function i2(r,t){const n=At(r),s=n.Eu.get(t);if(s&&s.cu)return Mt().add(s.key);{let o=Mt();const u=n.Pu.get(t);if(!u)return o;for(const f of u){const p=n.hu.get(f);o=o.unionWith(p.view.eu)}return o}}function y0(r){const t=At(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=m0.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=i2.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=JC.bind(null,t),t.lu.Y_=zC.bind(null,t.eventManager),t.lu.gu=BC.bind(null,t.eventManager),t}function r2(r){const t=At(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=WC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=t2.bind(null,t),t}class Wc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ph(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,n){return null}Cu(t,n){return null}Du(t){return sC(this.persistence,new nC,t.initialUser,this.serializer)}Su(t){return new t0(Fm.fi,this.serializer)}bu(t){return new fC}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wc.provider={build:()=>new Wc};class s2 extends Wc{constructor(t){super(),this.cacheSizeBytes=t}vu(t,n){qt(this.persistence.referenceDelegate instanceof Zc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new qI(s,t.asyncQueue,n)}Su(t){const n=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new t0(s=>Zc.fi(s,n),this.serializer)}}class dm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$v(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=n2.bind(null,this.syncEngine),await PC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new UC}()}createDatastore(t){const n=ph(t.databaseInfo.databaseId),s=function(u){return new _C(u)}(t.databaseInfo);return function(u,f,p,g){return new TC(u,f,p,g)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,u,f,p){return new SC(s,o,u,f,p)}(this.localStore,this.datastore,t.asyncQueue,n=>$v(this.syncEngine,n,0),function(){return Fv.C()?new Fv:new dC}())}createSyncEngine(t,n){return function(o,u,f,p,g,_,T){const I=new GC(o,u,f,p,g,_);return T&&(I.mu=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=At(o);st(zs,"RemoteStore shutting down."),u.da.add(5),await jl(u),u.Ra.shutdown(),u.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}dm.provider={build:()=>new dm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):Yi("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="FirestoreClient";class o2{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Ye.UNAUTHENTICATED,this.clientId=dT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{st(jr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(st(jr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Jm(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Bd(r,t){r.asyncQueue.verifyOperationInProgress(),st(jr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await e0(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Jv(r,t){r.asyncQueue.verifyOperationInProgress();const n=await l2(r);st(jr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>Kv(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Kv(t.remoteStore,o)),r._onlineComponents=t}async function l2(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){st(jr,"Using user provided OfflineComponentProvider");try{await Bd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Ya("Error using user provided cache. Falling back to memory cache: "+n),await Bd(r,new Wc)}}else st(jr,"Using default OfflineComponentProvider"),await Bd(r,new s2(void 0));return r._offlineComponents}async function v0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(st(jr,"Using user provided OnlineComponentProvider"),await Jv(r,r._uninitializedComponentsProvider._online)):(st(jr,"Using default OnlineComponentProvider"),await Jv(r,new dm))),r._onlineComponents}function u2(r){return v0(r).then(t=>t.syncEngine)}async function c2(r){const t=await v0(r),n=t.eventManager;return n.onListen=KC.bind(null,t.syncEngine),n.onUnlisten=XC.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=QC.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=$C.bind(null,t.syncEngine),n}function h2(r,t,n={}){const s=new kr;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,p,g,_){const T=new a2({next:C=>{T.xu(),f.enqueueAndForget(()=>LC(u,I)),C.fromCache&&g.source==="server"?_.reject(new ut(Z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(C)},error:C=>_.reject(C)}),I=new qC(p,T,{includeMetadataChanges:!0,Qa:!0});return xC(u,I)}(await c2(r),r.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(r,t,n){if(!n)throw new ut(Z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function f2(r,t,n,s){if(t===!0&&s===!0)throw new ut(Z.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function tE(r){if(!ft.isDocumentKey(r))throw new ut(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function eE(r){if(ft.isDocumentKey(r))throw new ut(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function np(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":_t(12329,{type:typeof r})}function Bs(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new ut(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=np(r);throw new ut(Z.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="firestore.googleapis.com",nE=!0;class iE{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new ut(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=A0,this.ssl=nE}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:nE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=WT;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<zI)throw new ut(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}f2("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=E0((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ut(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ut(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ut(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ut(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ut(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new pw;switch(s.type){case"firstParty":return new vw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ut(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Wv.get(n);s&&(st("ComponentProvider","Removing Datastore"),Wv.delete(n),s.terminate())}(this),Promise.resolve()}}function d2(r,t,n,s={}){var o;r=Bs(r,yh);const u=Fr(t),f=r._getSettings(),p=Object.assign(Object.assign({},f),{emulatorOptions:r._getEmulatorOptions()}),g=`${t}:${n}`;u&&(ym(`https://${g}`),vm("Firestore",!0)),f.host!==A0&&f.host!==g&&Ya("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},f),{host:g,ssl:u,emulatorOptions:s});if(!Ps(_,p)&&(r._setSettings(_),s.mockUserToken)){let T,I;if(typeof s.mockUserToken=="string")T=s.mockUserToken,I=Ye.MOCK_USER;else{T=vE(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ut(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new Ye(C)}r._authCredentials=new gw(new hT(T,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new vh(this.firestore,t,this._query)}}class Vn{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Vn(this.firestore,t,this._key)}}class Ur extends vh{constructor(t,n,s){super(t,n,OT(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Vn(this.firestore,null,new ft(t))}withConverter(t){return new Ur(this.firestore,t,this._path)}}function m2(r,t,...n){if(r=Pe(r),T0("collection","path",t),r instanceof yh){const s=ee.fromString(t,...n);return eE(s),new Ur(r,null,s)}{if(!(r instanceof Vn||r instanceof Ur))throw new ut(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ee.fromString(t,...n));return eE(s),new Ur(r.firestore,null,s)}}function mm(r,t,...n){if(r=Pe(r),arguments.length===1&&(t=dT.newId()),T0("doc","path",t),r instanceof yh){const s=ee.fromString(t,...n);return tE(s),new Vn(r,null,new ft(s))}{if(!(r instanceof Vn||r instanceof Ur))throw new ut(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ee.fromString(t,...n));return tE(s),new Vn(r.firestore,r instanceof Ur?r.converter:null,new ft(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="AsyncQueue";class sE{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new i0(this,"async_queue_retry"),this.rc=()=>{const s=zd();s&&st(rE,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=t;const n=zd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const n=zd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new kr;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!io(t))throw t;st(rE,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const n=this.sc.then(()=>(this.ec=!0,t().catch(s=>{throw this.Xu=s,this.ec=!1,Yi("INTERNAL UNHANDLED ERROR: ",aE(s)),s}).then(s=>(this.ec=!1,s))));return this.sc=n,n}enqueueAfterDelay(t,n,s){this.oc(),this.nc.indexOf(t)>-1&&(n=0);const o=Zm.createAndSchedule(this,t,n,s,u=>this.uc(u));return this.Zu.push(o),o}oc(){this.Xu&&_t(47125,{cc:aE(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const n of this.Zu)if(n.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const n=this.Zu.indexOf(t);this.Zu.splice(n,1)}}function aE(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Gl extends yh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new sE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new sE(t),this._firestoreClient=void 0,await t}}}function p2(r,t){const n=typeof r=="object"?r:Am(),s=typeof r=="string"?r:Fc,o=nh(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=gE("firestore");u&&d2(o,...u)}return o}function S0(r){if(r._terminated)throw new ut(Z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||g2(r),r._firestoreClient}function g2(r){var t,n,s;const o=r._freezeSettings(),u=function(p,g,_,T){return new Pw(p,g,_,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,E0(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new o2(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t){this._byteString=t}static fromBase64String(t){try{return new to(je.fromBase64String(t))}catch(n){throw new ut(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new to(je.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ut(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ut(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ut(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return wt(this._lat,t._lat)||wt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=/^__.*__$/;class y2{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Kr(t,this.data,this.fieldMask,n,this.fieldTransforms):new ql(t,this.data,n,this.fieldTransforms)}}class b0{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Kr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function R0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _t(40011,{Ic:r})}}class ap{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ec(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new ap(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.dc({path:s,Rc:!1});return o.Vc(t),o}mc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.dc({path:s,Rc:!1});return o.Ec(),o}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return th(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(R0(this.Ic)&&_2.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class v2{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||ph(t)}bc(t,n,s,o=!1){return new ap({Ic:t,methodName:n,wc:s,path:He.emptyPath(),Rc:!1,yc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function w0(r){const t=r._freezeSettings(),n=ph(r._databaseId);return new v2(r._databaseId,!!t.ignoreUndefinedProperties,n)}function E2(r,t,n,s,o,u={}){const f=r.bc(u.merge||u.mergeFields?2:0,t,n,o);op("Data must be an object, but it was:",f,s);const p=I0(s,f);let g,_;if(u.merge)g=new yn(f.fieldMask),_=f.fieldTransforms;else if(u.mergeFields){const T=[];for(const I of u.mergeFields){const C=pm(t,I,n);if(!f.contains(C))throw new ut(Z.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);D0(T,C)||T.push(C)}g=new yn(T),_=f.fieldTransforms.filter(I=>g.covers(I.field))}else g=null,_=f.fieldTransforms;return new y2(new on(p),g,_)}class Th extends ip{_toFieldTransform(t){if(t.Ic!==2)throw t.Ic===1?t.gc(`${this._methodName}() can only appear at the top level of your update data`):t.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Th}}function T2(r,t,n,s){const o=r.bc(1,t,n);op("Data must be an object, but it was:",o,s);const u=[],f=on.empty();Gr(s,(g,_)=>{const T=lp(t,g,n);_=Pe(_);const I=o.mc(T);if(_ instanceof Th)u.push(T);else{const C=Ah(_,I);C!=null&&(u.push(T),f.set(T,C))}});const p=new yn(u);return new b0(f,p,o.fieldTransforms)}function A2(r,t,n,s,o,u){const f=r.bc(1,t,n),p=[pm(t,s,n)],g=[o];if(u.length%2!=0)throw new ut(Z.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<u.length;C+=2)p.push(pm(t,u[C])),g.push(u[C+1]);const _=[],T=on.empty();for(let C=p.length-1;C>=0;--C)if(!D0(_,p[C])){const H=p[C];let X=g[C];X=Pe(X);const W=f.mc(H);if(X instanceof Th)_.push(H);else{const Y=Ah(X,W);Y!=null&&(_.push(H),T.set(H,Y))}}const I=new yn(_);return new b0(T,I,f.fieldTransforms)}function Ah(r,t){if(C0(r=Pe(r)))return op("Unsupported field value:",t,r),I0(r,t);if(r instanceof ip)return function(s,o){if(!R0(o.Ic))throw o.gc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.gc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const p of s){let g=Ah(p,o.fc(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}}(r,t)}return function(s,o){if((s=Pe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return rI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Re.fromDate(s);return{timestampValue:$c(o.serializer,u)}}if(s instanceof Re){const u=new Re(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:$c(o.serializer,u)}}if(s instanceof rp)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof to)return{bytesValue:KT(o.serializer,s._byteString)};if(s instanceof Vn){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.gc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Hm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof sp)return function(f,p){return{mapValue:{fields:{[TT]:{stringValue:AT},[Gc]:{arrayValue:{values:f.toArray().map(_=>{if(typeof _!="number")throw p.gc("VectorValues must only contain numeric values.");return Lm(p.serializer,_)})}}}}}}(s,o);throw o.gc(`Unsupported field value: ${np(s)}`)}(r,t)}function I0(r,t){const n={};return pT(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Gr(r,(s,o)=>{const u=Ah(o,t.Ac(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function C0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Re||r instanceof rp||r instanceof to||r instanceof Vn||r instanceof ip||r instanceof sp)}function op(r,t,n){if(!C0(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=np(n);throw s==="an object"?t.gc(r+" a custom object"):t.gc(r+" "+s)}}function pm(r,t,n){if((t=Pe(t))instanceof Eh)return t._internalPath;if(typeof t=="string")return lp(r,t);throw th("Field path arguments must be of type string or ",r,!1,void 0,n)}const S2=new RegExp("[~\\*/\\[\\]]");function lp(r,t,n){if(t.search(S2)>=0)throw th(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Eh(...t.split("."))._internalPath}catch{throw th(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function th(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let p=`Function ${t}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new ut(Z.INVALID_ARGUMENT,p+r+g)}function D0(r,t){return r.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Vn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new b2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(N0("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class b2 extends O0{data(){return super.data()}}function N0(r,t){return typeof t=="string"?lp(r,t):t instanceof Eh?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ut(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class w2{convertValue(t,n="none"){switch(qr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return he(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Br(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw _t(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Gr(t,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(t){var n,s,o;const u=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[Gc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>he(f.doubleValue));return new sp(u)}convertGeoPoint(t){return new rp(he(t.latitude),he(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=lh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ol(t));default:return null}}convertTimestamp(t){const n=zr(t);return new Re(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=ee.fromString(t);qt(JT(s),9688,{name:t});const o=new Nl(s.get(1),s.get(3)),u=new ft(s.popFirst(5));return o.isEqual(n)||Yi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(r,t,n){let s;return s=r?r.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class C2 extends O0{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Pc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(N0("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Pc extends C2{data(t={}){return super.data(t)}}class D2{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Ac(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Pc(this._firestore,this._userDataWriter,s.key,s,new Ac(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ut(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(p=>{const g=new Pc(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Ac(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const g=new Pc(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Ac(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,T=-1;return p.type!==0&&(_=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),T=f.indexOf(p.doc.key)),{type:O2(p.type),doc:g,oldIndex:_,newIndex:T}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function O2(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _t(61501,{type:r})}}class N2 extends w2{constructor(t){super(),this.firestore=t}convertBytes(t){return new to(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Vn(this.firestore,null,n)}}function M2(r){r=Bs(r,vh);const t=Bs(r.firestore,Gl),n=S0(t),s=new N2(t);return R2(r._query),h2(n,r._query).then(o=>new D2(t,s,r,o))}function V2(r,t,n,...s){r=Bs(r,Vn);const o=Bs(r.firestore,Gl),u=w0(o);let f;return f=typeof(t=Pe(t))=="string"||t instanceof Eh?A2(u,"updateDoc",r._key,t,n,s):T2(u,"updateDoc",r._key,t),up(o,[f.toMutation(r._key,Hn.exists(!0))])}function P2(r){return up(Bs(r.firestore,Gl),[new zm(r._key,Hn.none())])}function k2(r,t){const n=Bs(r.firestore,Gl),s=mm(r),o=I2(r.converter,t);return up(n,[E2(w0(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Hn.exists(!1))]).then(()=>s)}function up(r,t){return function(s,o){const u=new kr;return s.asyncQueue.enqueueAndForget(async()=>ZC(await u2(s),o,u)),u.promise}(S0(r),t)}(function(t,n=!0){(function(o){eo=o})(Hs),ks(new xr("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),p=new Gl(new _w(s.getProvider("auth-internal")),new Ew(f,s.getProvider("app-check-internal")),function(_,T){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ut(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nl(_.options.projectId,T)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),ui(hv,fv,t),ui(hv,fv,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="firebasestorage.googleapis.com",V0="storageBucket",U2=2*60*1e3,x2=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends gi{constructor(t,n,s=0){super(qd(t),`Firebase Storage: ${n} (${qd(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return qd(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _e;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_e||(_e={}));function qd(r){return"storage/"+r}function cp(){const r="An unknown error occurred, please check the error payload for server response.";return new ye(_e.UNKNOWN,r)}function L2(r){return new ye(_e.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function z2(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye(_e.UNAUTHENTICATED,r)}function B2(){return new ye(_e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function q2(r){return new ye(_e.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function H2(){return new ye(_e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function j2(){return new ye(_e.CANCELED,"User canceled the upload/download.")}function F2(r){return new ye(_e.INVALID_URL,"Invalid URL '"+r+"'.")}function G2(r){return new ye(_e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function K2(){return new ye(_e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+V0+"' property when initializing the app?")}function Q2(){return new ye(_e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Y2(r){return new ye(_e.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function gm(r){return new ye(_e.INVALID_ARGUMENT,r)}function P0(){return new ye(_e.APP_DELETED,"The Firebase app was deleted.")}function X2(r){return new ye(_e.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wl(r,t){return new ye(_e.INVALID_FORMAT,"String does not match format '"+r+"': "+t)}function gl(r){throw new ye(_e.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=vn.makeFromUrl(t,n)}catch{return new vn(t,"")}if(s.path==="")return s;throw G2(t)}static makeFromUrl(t,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(ct){ct.path.charAt(ct.path.length-1)==="/"&&(ct.path_=ct.path_.slice(0,-1))}const f="(/(.*))?$",p=new RegExp("^gs://"+o+f,"i"),g={bucket:1,path:3};function _(ct){ct.path_=decodeURIComponent(ct.path)}const T="v[A-Za-z0-9_]+",I=n.replace(/[.]/g,"\\."),C="(/([^?#]*).*)?$",H=new RegExp(`^https?://${I}/${T}/b/${o}/o${C}`,"i"),X={bucket:1,path:3},W=n===M0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,Y="([^?#]*)",mt=new RegExp(`^https?://${W}/${o}/${Y}`,"i"),it=[{regex:p,indices:g,postModify:u},{regex:H,indices:X,postModify:_},{regex:mt,indices:{bucket:1,path:2},postModify:_}];for(let ct=0;ct<it.length;ct++){const pt=it[ct],bt=pt.regex.exec(t);if(bt){const M=bt[pt.indices.bucket];let S=bt[pt.indices.path];S||(S=""),s=new vn(M,S),pt.postModify(s);break}}if(s==null)throw F2(t);return s}}class $2{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(r,t,n){let s=1,o=null,u=null,f=!1,p=0;function g(){return p===2}let _=!1;function T(...Y){_||(_=!0,t.apply(null,Y))}function I(Y){o=setTimeout(()=>{o=null,r(H,g())},Y)}function C(){u&&clearTimeout(u)}function H(Y,...mt){if(_){C();return}if(Y){C(),T.call(null,Y,...mt);return}if(g()||f){C(),T.call(null,Y,...mt);return}s<64&&(s*=2);let it;p===1?(p=2,it=0):it=(s+Math.random())*1e3,I(it)}let X=!1;function W(Y){X||(X=!0,C(),!_&&(o!==null?(Y||(p=2),clearTimeout(o),I(0)):Y||(p=1)))}return I(0),u=setTimeout(()=>{f=!0,W(!0)},n),W}function J2(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(r){return r!==void 0}function tD(r){return typeof r=="object"&&!Array.isArray(r)}function k0(r){return typeof r=="string"||r instanceof String}function oE(r){return hp()&&r instanceof Blob}function hp(){return typeof Blob<"u"}function lE(r,t,n,s){if(s<t)throw gm(`Invalid value for '${r}'. Expected ${t} or greater.`);if(s>n)throw gm(`Invalid value for '${r}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(r,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${r}`}function nD(r){const t=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const o=t(s)+"="+t(r[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var Vs;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Vs||(Vs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(r,t){const n=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,u=t.indexOf(r)!==-1;return n||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(t,n,s,o,u,f,p,g,_,T,I,C=!0,H=!1){this.url_=t,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=p,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=T,this.connectionFactory_=I,this.retry=C,this.isUsingEmulator=H,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((X,W)=>{this.resolve_=X,this.reject_=W,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new Sc(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=p=>{const g=p.loaded,_=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const p=u.getErrorCode()===Vs.NO_ERROR,g=u.getStatus();if(!p||iD(g,this.additionalRetryCodes_)&&this.retry){const T=u.getErrorCode()===Vs.ABORT;s(!1,new Sc(!1,null,T));return}const _=this.successCodes_.indexOf(g)!==-1;s(!0,new Sc(_,u))})},n=(s,o)=>{const u=this.resolve_,f=this.reject_,p=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(p,p.getResponse());W2(g)?u(g):u()}catch(g){f(g)}else if(p!==null){const g=cp();g.serverResponse=p.getErrorText(),this.errorCallback_?f(this.errorCallback_(p,g)):f(g)}else if(o.canceled){const g=this.appDelete_?P0():j2();f(g)}else{const g=H2();f(g)}};this.canceled_?n(!1,new Sc(!1,null,!0)):this.backoffId_=Z2(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&J2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Sc{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function sD(r,t){t!==null&&t.length>0&&(r.Authorization="Firebase "+t)}function aD(r,t){r["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function oD(r,t){t&&(r["X-Firebase-GMPID"]=t)}function lD(r,t){t!==null&&(r["X-Firebase-AppCheck"]=t)}function uD(r,t,n,s,o,u,f=!0,p=!1){const g=nD(r.urlParams),_=r.url+g,T=Object.assign({},r.headers);return oD(T,t),sD(T,n),aD(T,u),lD(T,s),new rD(_,r.method,T,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,f,p)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function hD(...r){const t=cD();if(t!==void 0){const n=new t;for(let s=0;s<r.length;s++)n.append(r[s]);return n.getBlob()}else{if(hp())return new Blob(r);throw new ye(_e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function fD(r,t,n){return r.webkitSlice?r.webkitSlice(t,n):r.mozSlice?r.mozSlice(t,n):r.slice?r.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(r){if(typeof atob>"u")throw Y2("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Hd{constructor(t,n){this.data=t,this.contentType=n||null}}function mD(r,t){switch(r){case li.RAW:return new Hd(U0(t));case li.BASE64:case li.BASE64URL:return new Hd(x0(r,t));case li.DATA_URL:return new Hd(gD(t),_D(t))}throw cp()}function U0(r){const t=[];for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<r.length-1&&(r.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const u=s,f=r.charCodeAt(++n);s=65536|(u&1023)<<10|f&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function pD(r){let t;try{t=decodeURIComponent(r)}catch{throw wl(li.DATA_URL,"Malformed data URL.")}return U0(t)}function x0(r,t){switch(r){case li.BASE64:{const o=t.indexOf("-")!==-1,u=t.indexOf("_")!==-1;if(o||u)throw wl(r,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case li.BASE64URL:{const o=t.indexOf("+")!==-1,u=t.indexOf("/")!==-1;if(o||u)throw wl(r,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=dD(t)}catch(o){throw o.message.includes("polyfill")?o:wl(r,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class L0{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw wl(li.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=yD(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function gD(r){const t=new L0(r);return t.base64?x0(li.BASE64,t.rest):pD(t.rest)}function _D(r){return new L0(r).contentType}function yD(r,t){return r.length>=t.length?r.substring(r.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,n){let s=0,o="";oE(t)?(this.data_=t,s=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(oE(this.data_)){const s=this.data_,o=fD(s,t,n);return o===null?null:new Dr(o)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new Dr(s,!0)}}static getBlob(...t){if(hp()){const n=t.map(s=>s instanceof Dr?s.data_:s);return new Dr(hD.apply(null,n))}else{const n=t.map(f=>k0(f)?mD(li.RAW,f).data:f.data_);let s=0;n.forEach(f=>{s+=f.byteLength});const o=new Uint8Array(s);let u=0;return n.forEach(f=>{for(let p=0;p<f.length;p++)o[u++]=f[p]}),new Dr(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(r){let t;try{t=JSON.parse(r)}catch{return null}return tD(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(r){if(r.length===0)return null;const t=r.lastIndexOf("/");return t===-1?"":r.slice(0,t)}function TD(r,t){const n=t.split("/").filter(s=>s.length>0).join("/");return r.length===0?n:r+"/"+n}function z0(r){const t=r.lastIndexOf("/",r.length-2);return t===-1?r:r.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(r,t){return t}class en{constructor(t,n,s,o){this.server=t,this.local=n||t,this.writable=!!s,this.xform=o||AD}}let bc=null;function SD(r){return!k0(r)||r.length<2?r:z0(r)}function bD(){if(bc)return bc;const r=[];r.push(new en("bucket")),r.push(new en("generation")),r.push(new en("metageneration")),r.push(new en("name","fullPath",!0));function t(u,f){return SD(f)}const n=new en("name");n.xform=t,r.push(n);function s(u,f){return f!==void 0?Number(f):f}const o=new en("size");return o.xform=s,r.push(o),r.push(new en("timeCreated")),r.push(new en("updated")),r.push(new en("md5Hash",null,!0)),r.push(new en("cacheControl",null,!0)),r.push(new en("contentDisposition",null,!0)),r.push(new en("contentEncoding",null,!0)),r.push(new en("contentLanguage",null,!0)),r.push(new en("contentType",null,!0)),r.push(new en("metadata","customMetadata",!0)),bc=r,bc}function RD(r,t){function n(){const s=r.bucket,o=r.fullPath,u=new vn(s,o);return t._makeStorageReference(u)}Object.defineProperty(r,"ref",{get:n})}function wD(r,t,n){const s={};s.type="file";const o=n.length;for(let u=0;u<o;u++){const f=n[u];s[f.local]=f.xform(s,t[f.server])}return RD(s,r),s}function ID(r,t,n){const s=vD(t);return s===null?null:wD(r,s,n)}function CD(r,t){const n={},s=t.length;for(let o=0;o<s;o++){const u=t[o];u.writable&&(n[u.server]=r[u.local])}return JSON.stringify(n)}class DD{constructor(t,n,s,o){this.url=t,this.method=n,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(r){if(!r)throw cp()}function ND(r,t){function n(s,o){const u=ID(r,o,t);return OD(u!==null),u}return n}function MD(r){function t(n,s){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=B2():o=z2():n.getStatus()===402?o=L2(r.bucket):n.getStatus()===403?o=q2(r.path):o=s,o.status=n.getStatus(),o.serverResponse=s.serverResponse,o}return t}function VD(r,t){return r&&r.contentType||t&&t.type()||"application/octet-stream"}function PD(r,t,n){const s=Object.assign({},n);return s.fullPath=r.path,s.size=t.size(),s.contentType||(s.contentType=VD(null,t)),s}function kD(r,t,n,s,o){const u=t.bucketOnlyServerUrl(),f={"X-Goog-Upload-Protocol":"multipart"};function p(){let it="";for(let ct=0;ct<2;ct++)it=it+Math.random().toString().slice(2);return it}const g=p();f["Content-Type"]="multipart/related; boundary="+g;const _=PD(t,s,o),T=CD(_,n),I="--"+g+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+T+`\r
--`+g+`\r
Content-Type: `+_.contentType+`\r
\r
`,C=`\r
--`+g+"--",H=Dr.getBlob(I,s,C);if(H===null)throw Q2();const X={name:_.fullPath},W=eD(u,r.host,r._protocol),Y="POST",mt=r.maxUploadRetryTime,tt=new DD(W,Y,ND(r,n),mt);return tt.urlParams=X,tt.headers=f,tt.body=H.uploadData(),tt.errorHandler=MD(t),tt}class UD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vs.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vs.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vs.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,o,u){if(this.sent_)throw gl("cannot .send() more than once");if(Fr(t)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,t,!0),u!==void 0)for(const f in u)u.hasOwnProperty(f)&&this.xhr_.setRequestHeader(f,u[f].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class xD extends UD{initXhr(){this.xhr_.responseType="text"}}function LD(){return new xD}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,n){this._service=t,n instanceof vn?this._location=n:this._location=vn.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new qs(t,n)}get root(){const t=new vn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return z0(this._location.path)}get storage(){return this._service}get parent(){const t=ED(this._location.path);if(t===null)return null;const n=new vn(this._location.bucket,t);return new qs(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw X2(t)}}function zD(r,t,n){r._throwIfRoot("uploadBytes");const s=kD(r.storage,r._location,bD(),new Dr(t,!0),n);return r.storage.makeRequestWithTokens(s,LD).then(o=>({metadata:o,ref:r}))}function BD(r,t){const n=TD(r._location.path,t),s=new vn(r._location.bucket,n);return new qs(r.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(r){return/^[A-Za-z]+:\/\//.test(r)}function HD(r,t){return new qs(r,t)}function B0(r,t){if(r instanceof fp){const n=r;if(n._bucket==null)throw K2();const s=new qs(n,n._bucket);return t!=null?B0(s,t):s}else return t!==void 0?BD(r,t):r}function jD(r,t){if(t&&qD(t)){if(r instanceof fp)return HD(r,t);throw gm("To use ref(service, url), the first argument must be a Storage instance.")}else return B0(r,t)}function uE(r,t){const n=t==null?void 0:t[V0];return n==null?null:vn.makeFromBucketSpec(n,r)}function FD(r,t,n,s={}){r.host=`${t}:${n}`;const o=Fr(t);o&&(ym(`https://${r.host}/b`),vm("Storage",!0)),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:u}=s;u&&(r._overrideAuthToken=typeof u=="string"?u:vE(u,r.app.options.projectId))}class fp{constructor(t,n,s,o,u,f=!1){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=f,this._bucket=null,this._host=M0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=U2,this._maxUploadRetryTime=x2,this._requests=new Set,o!=null?this._bucket=vn.makeFromBucketSpec(o,this._host):this._bucket=uE(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=vn.makeFromBucketSpec(this._url,t):this._bucket=uE(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){lE("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){lE("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(_n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new qs(this,t)}_makeRequest(t,n,s,o,u=!0){if(this._deleted)return new $2(P0());{const f=uD(t,this._appId,s,o,n,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(t,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,o).getPromise()}}const cE="@firebase/storage",hE="0.13.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="storage";function GD(r,t,n){return r=Pe(r),zD(r,t,n)}function KD(r,t){return r=Pe(r),jD(r,t)}function QD(r=Am(),t){r=Pe(r);const s=nh(r,q0).getImmediate({identifier:t}),o=gE("storage");return o&&YD(s,...o),s}function YD(r,t,n,s={}){FD(r,t,n,s)}function XD(r,{instanceIdentifier:t}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new fp(n,s,o,t,Hs)}function $D(){ks(new xr(q0,XD,"PUBLIC").setMultipleInstances(!0)),ui(cE,hE,""),ui(cE,hE,"esm2017")}$D();const ZD={apiKey:"AIzaSyBhcx_af1dRKAR9_2YUqnOvqibpa9UhbeQ",authDomain:"test01-e3105.firebaseapp.com",projectId:"test01-e3105",storageBucket:"test01-e3105.firebasestorage.app",messagingSenderId:"634811942871",appId:"1:634811942871:web:4323f7f3bb88559501ed92",measurementId:"G-NG50J9CN94"},dp=AE(ZD),Qa=dw(dp),JD=new ji,jd=p2(dp),WD=QD(dp),tO=()=>{const[r,t]=ai.useState(""),[n,s]=ai.useState(""),o=async()=>{try{await Wb(Qa,r,n)}catch(p){console.error(p)}},u=async()=>{try{await AR(Qa,JD)}catch(p){console.error(p)}},f=async()=>{try{await nR(Qa)}catch(p){console.error(p)}};return Jt.jsxs("div",{children:[Jt.jsx("input",{placeholder:"Email...",onChange:p=>t(p.target.value)}),Jt.jsx("input",{placeholder:"Password...",type:"password",onChange:p=>s(p.target.value)}),Jt.jsx("button",{onClick:o,children:" Sign In"}),Jt.jsx("button",{onClick:u,children:" Sign In With Google"}),Jt.jsx("button",{onClick:f,children:" Logout "})]})};function eO(){const[r,t]=ai.useState([]),[n,s]=ai.useState(""),[o,u]=ai.useState(0),[f,p]=ai.useState(!1),[g,_]=ai.useState(""),[T,I]=ai.useState(null),C=m2(jd,"movies"),H=async()=>{try{const it=(await M2(C)).docs.map(ct=>({...ct.data(),id:ct.id}));t(it)}catch(tt){console.error(tt)}};ai.useEffect(()=>{H()},[]);const X=async()=>{var tt;try{await k2(C,{title:n,releaseDate:o,receivedAnOscar:f,userId:(tt=Qa==null?void 0:Qa.currentUser)==null?void 0:tt.uid}),H()}catch(it){console.error(it)}},W=async tt=>{const it=mm(jd,"movies",tt);await P2(it)},Y=async tt=>{const it=mm(jd,"movies",tt);await V2(it,{title:g})},mt=async()=>{if(!T)return;const tt=KD(WD,`projectFiles/${T.name}`);try{await GD(tt,T)}catch(it){console.error(it)}};return Jt.jsxs("div",{className:"App",children:[Jt.jsx(tO,{}),Jt.jsxs("div",{children:[Jt.jsx("input",{placeholder:"Movie title...",onChange:tt=>s(tt.target.value)}),Jt.jsx("input",{placeholder:"Release Date...",type:"number",onChange:tt=>u(Number(tt.target.value))}),Jt.jsx("input",{type:"checkbox",checked:f,onChange:tt=>p(tt.target.checked)}),Jt.jsx("label",{children:" Received an Oscar"}),Jt.jsx("button",{onClick:X,children:" Submit Movie"})]}),Jt.jsx("div",{children:r.map(tt=>Jt.jsxs("div",{children:[Jt.jsx("h1",{style:{color:tt.receivedAnOscar?"green":"red"},children:tt.title}),Jt.jsxs("p",{children:[" Date: ",tt.releaseDate," "]}),Jt.jsx("button",{onClick:()=>W(tt.id),children:" Delete Movie"}),Jt.jsx("input",{placeholder:"new title...",onChange:it=>_(it.target.value)}),Jt.jsxs("button",{onClick:()=>Y(tt.id),children:[" ","Update Title"]})]}))}),Jt.jsxs("div",{children:[Jt.jsx("input",{type:"file",onChange:tt=>I(tt.target.files[0])}),Jt.jsx("button",{onClick:mt,children:" Upload File "})]})]})}TS.createRoot(document.getElementById("root")).render(Jt.jsx(ai.StrictMode,{children:Jt.jsx(eO,{})}));
