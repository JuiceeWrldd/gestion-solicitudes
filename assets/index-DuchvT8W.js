(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var pd={exports:{}},Da={},md={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function iE(){if(gg)return Se;gg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),I=Symbol.iterator;function N(O){return O===null||typeof O!="object"?null:(O=I&&O[I]||O["@@iterator"],typeof O=="function"?O:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,$={};function F(O,G,Te){this.props=O,this.context=G,this.refs=$,this.updater=Te||U}F.prototype.isReactComponent={},F.prototype.setState=function(O,G){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,G,"setState")},F.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Y(){}Y.prototype=F.prototype;function Z(O,G,Te){this.props=O,this.context=G,this.refs=$,this.updater=Te||U}var me=Z.prototype=new Y;me.constructor=Z,H(me,F.prototype),me.isPureReactComponent=!0;var xe=Array.isArray,Ae=Object.prototype.hasOwnProperty,ke={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function A(O,G,Te){var Ie,Pe={},Ne=null,ze=null;if(G!=null)for(Ie in G.ref!==void 0&&(ze=G.ref),G.key!==void 0&&(Ne=""+G.key),G)Ae.call(G,Ie)&&!D.hasOwnProperty(Ie)&&(Pe[Ie]=G[Ie]);var Le=arguments.length-2;if(Le===1)Pe.children=Te;else if(1<Le){for(var He=Array(Le),$t=0;$t<Le;$t++)He[$t]=arguments[$t+2];Pe.children=He}if(O&&O.defaultProps)for(Ie in Le=O.defaultProps,Le)Pe[Ie]===void 0&&(Pe[Ie]=Le[Ie]);return{$$typeof:r,type:O,key:Ne,ref:ze,props:Pe,_owner:ke.current}}function R(O,G){return{$$typeof:r,type:O.type,key:G,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function k(O){var G={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Te){return G[Te]})}var b=/\/+/g;function x(O,G){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):G.toString(36)}function je(O,G,Te,Ie,Pe){var Ne=typeof O;(Ne==="undefined"||Ne==="boolean")&&(O=null);var ze=!1;if(O===null)ze=!0;else switch(Ne){case"string":case"number":ze=!0;break;case"object":switch(O.$$typeof){case r:case e:ze=!0}}if(ze)return ze=O,Pe=Pe(ze),O=Ie===""?"."+x(ze,0):Ie,xe(Pe)?(Te="",O!=null&&(Te=O.replace(b,"$&/")+"/"),je(Pe,G,Te,"",function($t){return $t})):Pe!=null&&(C(Pe)&&(Pe=R(Pe,Te+(!Pe.key||ze&&ze.key===Pe.key?"":(""+Pe.key).replace(b,"$&/")+"/")+O)),G.push(Pe)),1;if(ze=0,Ie=Ie===""?".":Ie+":",xe(O))for(var Le=0;Le<O.length;Le++){Ne=O[Le];var He=Ie+x(Ne,Le);ze+=je(Ne,G,Te,He,Pe)}else if(He=N(O),typeof He=="function")for(O=He.call(O),Le=0;!(Ne=O.next()).done;)Ne=Ne.value,He=Ie+x(Ne,Le++),ze+=je(Ne,G,Te,He,Pe);else if(Ne==="object")throw G=String(O),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return ze}function nt(O,G,Te){if(O==null)return O;var Ie=[],Pe=0;return je(O,Ie,"","",function(Ne){return G.call(Te,Ne,Pe++)}),Ie}function st(O){if(O._status===-1){var G=O._result;G=G(),G.then(function(Te){(O._status===0||O._status===-1)&&(O._status=1,O._result=Te)},function(Te){(O._status===0||O._status===-1)&&(O._status=2,O._result=Te)}),O._status===-1&&(O._status=0,O._result=G)}if(O._status===1)return O._result.default;throw O._result}var Ve={current:null},X={transition:null},ue={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:X,ReactCurrentOwner:ke};function se(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:nt,forEach:function(O,G,Te){nt(O,function(){G.apply(this,arguments)},Te)},count:function(O){var G=0;return nt(O,function(){G++}),G},toArray:function(O){return nt(O,function(G){return G})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Se.Component=F,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=Z,Se.StrictMode=s,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Se.act=se,Se.cloneElement=function(O,G,Te){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ie=H({},O.props),Pe=O.key,Ne=O.ref,ze=O._owner;if(G!=null){if(G.ref!==void 0&&(Ne=G.ref,ze=ke.current),G.key!==void 0&&(Pe=""+G.key),O.type&&O.type.defaultProps)var Le=O.type.defaultProps;for(He in G)Ae.call(G,He)&&!D.hasOwnProperty(He)&&(Ie[He]=G[He]===void 0&&Le!==void 0?Le[He]:G[He])}var He=arguments.length-2;if(He===1)Ie.children=Te;else if(1<He){Le=Array(He);for(var $t=0;$t<He;$t++)Le[$t]=arguments[$t+2];Ie.children=Le}return{$$typeof:r,type:O.type,key:Pe,ref:Ne,props:Ie,_owner:ze}},Se.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Se.createElement=A,Se.createFactory=function(O){var G=A.bind(null,O);return G.type=O,G},Se.createRef=function(){return{current:null}},Se.forwardRef=function(O){return{$$typeof:p,render:O}},Se.isValidElement=C,Se.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:st}},Se.memo=function(O,G){return{$$typeof:_,type:O,compare:G===void 0?null:G}},Se.startTransition=function(O){var G=X.transition;X.transition={};try{O()}finally{X.transition=G}},Se.unstable_act=se,Se.useCallback=function(O,G){return Ve.current.useCallback(O,G)},Se.useContext=function(O){return Ve.current.useContext(O)},Se.useDebugValue=function(){},Se.useDeferredValue=function(O){return Ve.current.useDeferredValue(O)},Se.useEffect=function(O,G){return Ve.current.useEffect(O,G)},Se.useId=function(){return Ve.current.useId()},Se.useImperativeHandle=function(O,G,Te){return Ve.current.useImperativeHandle(O,G,Te)},Se.useInsertionEffect=function(O,G){return Ve.current.useInsertionEffect(O,G)},Se.useLayoutEffect=function(O,G){return Ve.current.useLayoutEffect(O,G)},Se.useMemo=function(O,G){return Ve.current.useMemo(O,G)},Se.useReducer=function(O,G,Te){return Ve.current.useReducer(O,G,Te)},Se.useRef=function(O){return Ve.current.useRef(O)},Se.useState=function(O){return Ve.current.useState(O)},Se.useSyncExternalStore=function(O,G,Te){return Ve.current.useSyncExternalStore(O,G,Te)},Se.useTransition=function(){return Ve.current.useTransition()},Se.version="18.3.1",Se}var yg;function uf(){return yg||(yg=1,md.exports=iE()),md.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function sE(){if(_g)return Da;_g=1;var r=uf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(p,g,_){var E,I={},N=null,U=null;_!==void 0&&(N=""+_),g.key!==void 0&&(N=""+g.key),g.ref!==void 0&&(U=g.ref);for(E in g)s.call(g,E)&&!l.hasOwnProperty(E)&&(I[E]=g[E]);if(p&&p.defaultProps)for(E in g=p.defaultProps,g)I[E]===void 0&&(I[E]=g[E]);return{$$typeof:e,type:p,key:N,ref:U,props:I,_owner:o.current}}return Da.Fragment=t,Da.jsx=h,Da.jsxs=h,Da}var vg;function oE(){return vg||(vg=1,pd.exports=sE()),pd.exports}var v=oE(),Mu={},gd={exports:{}},en={},yd={exports:{}},_d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function aE(){return wg||(wg=1,(function(r){function e(X,ue){var se=X.length;X.push(ue);e:for(;0<se;){var O=se-1>>>1,G=X[O];if(0<o(G,ue))X[O]=ue,X[se]=G,se=O;else break e}}function t(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var ue=X[0],se=X.pop();if(se!==ue){X[0]=se;e:for(var O=0,G=X.length,Te=G>>>1;O<Te;){var Ie=2*(O+1)-1,Pe=X[Ie],Ne=Ie+1,ze=X[Ne];if(0>o(Pe,se))Ne<G&&0>o(ze,Pe)?(X[O]=ze,X[Ne]=se,O=Ne):(X[O]=Pe,X[Ie]=se,O=Ie);else if(Ne<G&&0>o(ze,se))X[O]=ze,X[Ne]=se,O=Ne;else break e}}return ue}function o(X,ue){var se=X.sortIndex-ue.sortIndex;return se!==0?se:X.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var g=[],_=[],E=1,I=null,N=3,U=!1,H=!1,$=!1,F=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(X){for(var ue=t(_);ue!==null;){if(ue.callback===null)s(_);else if(ue.startTime<=X)s(_),ue.sortIndex=ue.expirationTime,e(g,ue);else break;ue=t(_)}}function xe(X){if($=!1,me(X),!H)if(t(g)!==null)H=!0,st(Ae);else{var ue=t(_);ue!==null&&Ve(xe,ue.startTime-X)}}function Ae(X,ue){H=!1,$&&($=!1,Y(A),A=-1),U=!0;var se=N;try{for(me(ue),I=t(g);I!==null&&(!(I.expirationTime>ue)||X&&!k());){var O=I.callback;if(typeof O=="function"){I.callback=null,N=I.priorityLevel;var G=O(I.expirationTime<=ue);ue=r.unstable_now(),typeof G=="function"?I.callback=G:I===t(g)&&s(g),me(ue)}else s(g);I=t(g)}if(I!==null)var Te=!0;else{var Ie=t(_);Ie!==null&&Ve(xe,Ie.startTime-ue),Te=!1}return Te}finally{I=null,N=se,U=!1}}var ke=!1,D=null,A=-1,R=5,C=-1;function k(){return!(r.unstable_now()-C<R)}function b(){if(D!==null){var X=r.unstable_now();C=X;var ue=!0;try{ue=D(!0,X)}finally{ue?x():(ke=!1,D=null)}}else ke=!1}var x;if(typeof Z=="function")x=function(){Z(b)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,nt=je.port2;je.port1.onmessage=b,x=function(){nt.postMessage(null)}}else x=function(){F(b,0)};function st(X){D=X,ke||(ke=!0,x())}function Ve(X,ue){A=F(function(){X(r.unstable_now())},ue)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_continueExecution=function(){H||U||(H=!0,st(Ae))},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(X){switch(N){case 1:case 2:case 3:var ue=3;break;default:ue=N}var se=N;N=ue;try{return X()}finally{N=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(X,ue){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var se=N;N=X;try{return ue()}finally{N=se}},r.unstable_scheduleCallback=function(X,ue,se){var O=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,X){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=se+G,X={id:E++,callback:ue,priorityLevel:X,startTime:se,expirationTime:G,sortIndex:-1},se>O?(X.sortIndex=se,e(_,X),t(g)===null&&X===t(_)&&($?(Y(A),A=-1):$=!0,Ve(xe,se-O))):(X.sortIndex=G,e(g,X),H||U||(H=!0,st(Ae))),X},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(X){var ue=N;return function(){var se=N;N=ue;try{return X.apply(this,arguments)}finally{N=se}}}})(_d)),_d}var Eg;function lE(){return Eg||(Eg=1,yd.exports=aE()),yd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function uE(){if(Tg)return en;Tg=1;var r=uf(),e=lE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},I={};function N(n){return g.call(I,n)?!0:g.call(E,n)?!1:_.test(n)?I[n]=!0:(E[n]=!0,!1)}function U(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function H(n,i,a,c){if(i===null||typeof i>"u"||U(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function $(n,i,a,c,d,f,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=f,this.removeEmptyString=w}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){F[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];F[i]=new $(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){F[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){F[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){F[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){F[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){F[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){F[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){F[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var Y=/[\-:]([a-z])/g;function Z(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(Y,Z);F[i]=new $(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(Y,Z);F[i]=new $(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(Y,Z);F[i]=new $(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){F[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),F.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){F[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function me(n,i,a,c){var d=F.hasOwnProperty(i)?F[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(H(i,a,d,c)&&(a=null),c||d===null?N(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var xe=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ae=Symbol.for("react.element"),ke=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),k=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),nt=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),Ve=Symbol.for("react.offscreen"),X=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,O;function G(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Te=!1;function Ie(n,i){if(!n||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(z){var c=z}Reflect.construct(n,[],i)}else{try{i.call()}catch(z){c=z}n.call(i.prototype)}else{try{throw Error()}catch(z){c=z}n()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),f=c.stack.split(`
`),w=d.length-1,S=f.length-1;1<=w&&0<=S&&d[w]!==f[S];)S--;for(;1<=w&&0<=S;w--,S--)if(d[w]!==f[S]){if(w!==1||S!==1)do if(w--,S--,0>S||d[w]!==f[S]){var P=`
`+d[w].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=w&&0<=S);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?G(n):""}function Pe(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case ke:return"Portal";case R:return"Profiler";case A:return"StrictMode";case x:return"Suspense";case je:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case b:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case nt:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case st:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function ze(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function He(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $t(n){var i=He(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,f.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function As(n){n._valueTracker||(n._valueTracker=$t(n))}function Fo(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=He(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Hr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Cs(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Tl(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Le(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Rs(n,i){i=i.checked,i!=null&&me(n,"checked",i,!1)}function Ui(n,i){Rs(n,i);var a=Le(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ft(n,i.type,a):i.hasOwnProperty("defaultValue")&&ft(n,i.type,Le(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Uo(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ft(n,i,a){(i!=="number"||Hr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var lt=Array.isArray;function Rn(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function zo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Bo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(lt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Le(a)}}function Il(n,i){var a=Le(i.value),c=Le(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Wr(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function $o(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ks(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?$o(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qr,xl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=qr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function zi(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sl=["Webkit","ms","Moz","O"];Object.keys(Gr).forEach(function(n){Sl.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Gr[i]=Gr[n]})});function Kr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Gr.hasOwnProperty(n)&&Gr[n]?(""+i).trim():i+"px"}function Ps(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Kr(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ho=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kn(n,i){if(i){if(Ho[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ns(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qr=null;function bs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pr=null,mr=null,ot=null;function Wo(n){if(n=_a(n)){if(typeof pr!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Xl(i),pr(n.stateNode,n.type,i))}}function Yr(n){mr?ot?ot.push(n):ot=[n]:mr=n}function Jr(){if(mr){var n=mr,i=ot;if(ot=mr=null,Wo(n),i)for(n=0;n<i.length;n++)Wo(i[n])}}function Al(n,i){return n(i)}function Cl(){}var $n=!1;function Rl(n,i,a){if($n)return n(i,a);$n=!0;try{return Al(n,i,a)}finally{$n=!1,(mr!==null||ot!==null)&&(Cl(),Jr())}}function Bi(n,i){var a=n.stateNode;if(a===null)return null;var c=Xl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Xr=!1;if(p)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Xr=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Xr=!1}function kl(n,i,a,c,d,f,w,S,P){var z=Array.prototype.slice.call(arguments,3);try{i.apply(a,z)}catch(Q){this.onError(Q)}}var gr=!1,Hn=null,Ds=!1,yn=null,Pl={onError:function(n){gr=!0,Hn=n}};function Nl(n,i,a,c,d,f,w,S,P){gr=!1,Hn=null,kl.apply(Pl,arguments)}function qo(n,i,a,c,d,f,w,S,P){if(Nl.apply(this,arguments),gr){if(gr){var z=Hn;gr=!1,Hn=null}else throw Error(t(198));Ds||(Ds=!0,yn=z)}}function Pn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Go(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function bl(n){if(Pn(n)!==n)throw Error(t(188))}function Dl(n){var i=n.alternate;if(!i){if(i=Pn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return bl(d),n;if(f===c)return bl(d),i;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var w=!1,S=d.child;S;){if(S===a){w=!0,a=d,c=f;break}if(S===c){w=!0,c=d,a=f;break}S=S.sibling}if(!w){for(S=f.child;S;){if(S===a){w=!0,a=f,c=d;break}if(S===c){w=!0,c=f,a=d;break}S=S.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Vl(n){return n=Dl(n),n!==null?$i(n):null}function $i(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=$i(n);if(i!==null)return i;n=n.sibling}return null}var Ko=e.unstable_scheduleCallback,Vs=e.unstable_cancelCallback,Hi=e.unstable_shouldYield,yr=e.unstable_requestPaint,Qe=e.unstable_now,Wc=e.unstable_getCurrentPriorityLevel,Os=e.unstable_ImmediatePriority,Qo=e.unstable_UserBlockingPriority,Wi=e.unstable_NormalPriority,Yo=e.unstable_LowPriority,Ls=e.unstable_IdlePriority,qi=null,sn=null;function Ol(n){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(qi,n,void 0,(n.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:Gi,Wn=Math.log,_n=Math.LN2;function Gi(n){return n>>>=0,n===0?32:31-(Wn(n)/_n|0)|0}var qn=64,ei=4194304;function Ue(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function _r(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,w=a&268435455;if(w!==0){var S=w&~d;S!==0?c=Ue(S):(f&=w,f!==0&&(c=Ue(f)))}else w=a&~d,w!==0?c=Ue(w):f!==0&&(c=Ue(f));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-on(i),d=1<<a,c|=n[a],i&=~d;return c}function Ki(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qi(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var w=31-on(f),S=1<<w,P=d[w];P===-1?((S&a)===0||(S&c)!==0)&&(d[w]=Ki(S,i)):P<=i&&(n.expiredLanes|=S),f&=~S}}function Jo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xo(){var n=qn;return qn<<=1,(qn&4194240)===0&&(qn=64),n}function Zo(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Yi(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-on(i),n[i]=a}function qc(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-on(a),f=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function ea(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-on(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var De=0;function Gn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ta,Ms,na,ra,ia,Kn=!1,js=[],Qn=null,Yn=null,At=null,Ji=new Map,vr=new Map,an=[],Ll="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ti(n,i){switch(n){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Ji.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":vr.delete(i.pointerId)}}function Nn(n,i,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},i!==null&&(i=_a(i),i!==null&&Ms(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Ml(n,i,a,c,d){switch(i){case"focusin":return Qn=Nn(Qn,n,i,a,c,d),!0;case"dragenter":return Yn=Nn(Yn,n,i,a,c,d),!0;case"mouseover":return At=Nn(At,n,i,a,c,d),!0;case"pointerover":var f=d.pointerId;return Ji.set(f,Nn(Ji.get(f)||null,n,i,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,vr.set(f,Nn(vr.get(f)||null,n,i,a,c,d)),!0}return!1}function Fs(n){var i=ts(n.target);if(i!==null){var a=Pn(i);if(a!==null){if(i=a.tag,i===13){if(i=Go(a),i!==null){n.blockedOn=i,ia(n.priority,function(){na(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function We(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Us(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Qr=c,a.target.dispatchEvent(c),Qr=null}else return i=_a(a),i!==null&&Ms(i),n.blockedOn=a,!1;i.shift()}return!0}function jl(n,i,a){We(n)&&a.delete(i)}function Gc(){Kn=!1,Qn!==null&&We(Qn)&&(Qn=null),Yn!==null&&We(Yn)&&(Yn=null),At!==null&&We(At)&&(At=null),Ji.forEach(jl),vr.forEach(jl)}function ni(n,i){n.blockedOn===i&&(n.blockedOn=null,Kn||(Kn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Gc)))}function ri(n){function i(d){return ni(d,n)}if(0<js.length){ni(js[0],n);for(var a=1;a<js.length;a++){var c=js[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Qn!==null&&ni(Qn,n),Yn!==null&&ni(Yn,n),At!==null&&ni(At,n),Ji.forEach(i),vr.forEach(i),a=0;a<an.length;a++)c=an[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<an.length&&(a=an[0],a.blockedOn===null);)Fs(a),a.blockedOn===null&&an.shift()}var wr=xe.ReactCurrentBatchConfig,Er=!0;function Jn(n,i,a,c){var d=De,f=wr.transition;wr.transition=null;try{De=1,sa(n,i,a,c)}finally{De=d,wr.transition=f}}function Fl(n,i,a,c){var d=De,f=wr.transition;wr.transition=null;try{De=4,sa(n,i,a,c)}finally{De=d,wr.transition=f}}function sa(n,i,a,c){if(Er){var d=Us(n,i,a,c);if(d===null)ih(n,i,c,Xn,a),ti(n,c);else if(Ml(d,n,i,a,c))c.stopPropagation();else if(ti(n,c),i&4&&-1<Ll.indexOf(n)){for(;d!==null;){var f=_a(d);if(f!==null&&ta(f),f=Us(n,i,a,c),f===null&&ih(n,i,c,Xn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else ih(n,i,c,null,a)}}var Xn=null;function Us(n,i,a,c){if(Xn=null,n=bs(c),n=ts(n),n!==null)if(i=Pn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Go(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Xn=n,null}function zs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wc()){case Os:return 1;case Qo:return 4;case Wi:case Yo:return 16;case Ls:return 536870912;default:return 16}default:return 16}}var ln=null,Bs=null,Tr=null;function Ul(){if(Tr)return Tr;var n,i=Bs,a=i.length,c,d="value"in ln?ln.value:ln.textContent,f=d.length;for(n=0;n<a&&i[n]===d[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===d[f-c];c++);return Tr=d.slice(n,1<c?1-c:void 0)}function Xi(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Zn(){return!0}function oa(){return!1}function Dt(n){function i(a,c,d,f,w){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=w,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zn:oa,this.isPropagationStopped=oa,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),i}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=Dt(er),ii=se({},er,{view:0,detail:0}),$s=Dt(ii),Hs,Ws,un,es=se({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:we,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==un&&(un&&n.type==="mousemove"?(Hs=n.screenX-un.screenX,Ws=n.screenY-un.screenY):Ws=Hs=0,un=n),Hs)},movementY:function(n){return"movementY"in n?n.movementY:Ws}}),aa=Dt(es),zl=se({},es,{dataTransfer:0}),Bl=Dt(zl),qs=se({},ii,{relatedTarget:0}),Ct=Dt(qs),$l=se({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Hl=Dt($l),si=se({},er,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=Dt(si),m=se({},er,{data:0}),y=Dt(m),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function te(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=B[n])?!!i[n]:!1}function we(){return te}var ut=se({},ii,{key:function(n){if(n.key){var i=T[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Xi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:we,charCode:function(n){return n.type==="keypress"?Xi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Xi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$e=Dt(ut),pt=se({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cn=Dt(pt),Ir=se({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:we}),tr=Dt(Ir),nr=se({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gs=Dt(nr),la=se({},es,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),X0=Dt(la),Z0=[9,13,27,32],Kc=p&&"CompositionEvent"in window,ua=null;p&&"documentMode"in document&&(ua=document.documentMode);var ew=p&&"TextEvent"in window&&!ua,lp=p&&(!Kc||ua&&8<ua&&11>=ua),up=" ",cp=!1;function hp(n,i){switch(n){case"keyup":return Z0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ks=!1;function tw(n,i){switch(n){case"compositionend":return dp(i);case"keypress":return i.which!==32?null:(cp=!0,up);case"textInput":return n=i.data,n===up&&cp?null:n;default:return null}}function nw(n,i){if(Ks)return n==="compositionend"||!Kc&&hp(n,i)?(n=Ul(),Tr=Bs=ln=null,Ks=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return lp&&i.locale!=="ko"?null:i.data;default:return null}}var rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!rw[n.type]:i==="textarea"}function pp(n,i,a,c){Yr(c),i=Ql(i,"onChange"),0<i.length&&(a=new Zi("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ca=null,ha=null;function iw(n){bp(n,0)}function Wl(n){var i=Zs(n);if(Fo(i))return n}function sw(n,i){if(n==="change")return i}var mp=!1;if(p){var Qc;if(p){var Yc="oninput"in document;if(!Yc){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),Yc=typeof gp.oninput=="function"}Qc=Yc}else Qc=!1;mp=Qc&&(!document.documentMode||9<document.documentMode)}function yp(){ca&&(ca.detachEvent("onpropertychange",_p),ha=ca=null)}function _p(n){if(n.propertyName==="value"&&Wl(ha)){var i=[];pp(i,ha,n,bs(n)),Rl(iw,i)}}function ow(n,i,a){n==="focusin"?(yp(),ca=i,ha=a,ca.attachEvent("onpropertychange",_p)):n==="focusout"&&yp()}function aw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Wl(ha)}function lw(n,i){if(n==="click")return Wl(i)}function uw(n,i){if(n==="input"||n==="change")return Wl(i)}function cw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var bn=typeof Object.is=="function"?Object.is:cw;function da(n,i){if(bn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!bn(n[d],i[d]))return!1}return!0}function vp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wp(n,i){var a=vp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vp(a)}}function Ep(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ep(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Tp(){for(var n=window,i=Hr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Hr(n.document)}return i}function Jc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function hw(n){var i=Tp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Ep(a.ownerDocument.documentElement,a)){if(c!==null&&Jc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=wp(a,f);var w=wp(a,c);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var dw=p&&"documentMode"in document&&11>=document.documentMode,Qs=null,Xc=null,fa=null,Zc=!1;function Ip(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zc||Qs==null||Qs!==Hr(c)||(c=Qs,"selectionStart"in c&&Jc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),fa&&da(fa,c)||(fa=c,c=Ql(Xc,"onSelect"),0<c.length&&(i=new Zi("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Qs)))}function ql(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ys={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},eh={},xp={};p&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function Gl(n){if(eh[n])return eh[n];if(!Ys[n])return n;var i=Ys[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in xp)return eh[n]=i[a];return n}var Sp=Gl("animationend"),Ap=Gl("animationiteration"),Cp=Gl("animationstart"),Rp=Gl("transitionend"),kp=new Map,Pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(n,i){kp.set(n,i),l(i,[n])}for(var th=0;th<Pp.length;th++){var nh=Pp[th],fw=nh.toLowerCase(),pw=nh[0].toUpperCase()+nh.slice(1);oi(fw,"on"+pw)}oi(Sp,"onAnimationEnd"),oi(Ap,"onAnimationIteration"),oi(Cp,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(Rp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mw=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function Np(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,qo(c,i,void 0,n),n.currentTarget=null}function bp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(i)for(var w=c.length-1;0<=w;w--){var S=c[w],P=S.instance,z=S.currentTarget;if(S=S.listener,P!==f&&d.isPropagationStopped())break e;Np(d,S,z),f=P}else for(w=0;w<c.length;w++){if(S=c[w],P=S.instance,z=S.currentTarget,S=S.listener,P!==f&&d.isPropagationStopped())break e;Np(d,S,z),f=P}}}if(Ds)throw n=yn,Ds=!1,yn=null,n}function Ye(n,i){var a=i[ch];a===void 0&&(a=i[ch]=new Set);var c=n+"__bubble";a.has(c)||(Dp(i,n,2,!1),a.add(c))}function rh(n,i,a){var c=0;i&&(c|=4),Dp(a,n,c,i)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function ma(n){if(!n[Kl]){n[Kl]=!0,s.forEach(function(a){a!=="selectionchange"&&(mw.has(a)||rh(a,!1,n),rh(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Kl]||(i[Kl]=!0,rh("selectionchange",!1,i))}}function Dp(n,i,a,c){switch(zs(i)){case 1:var d=Jn;break;case 4:d=Fl;break;default:d=sa}a=d.bind(null,i,a,n),d=void 0,!Xr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function ih(n,i,a,c,d){var f=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var P=w.tag;if((P===3||P===4)&&(P=w.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;w=w.return}for(;S!==null;){if(w=ts(S),w===null)return;if(P=w.tag,P===5||P===6){c=f=w;continue e}S=S.parentNode}}c=c.return}Rl(function(){var z=f,Q=bs(a),J=[];e:{var K=kp.get(n);if(K!==void 0){var ie=Zi,ae=n;switch(n){case"keypress":if(Xi(a)===0)break e;case"keydown":case"keyup":ie=$e;break;case"focusin":ae="focus",ie=Ct;break;case"focusout":ae="blur",ie=Ct;break;case"beforeblur":case"afterblur":ie=Ct;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=aa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Bl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=tr;break;case Sp:case Ap:case Cp:ie=Hl;break;case Rp:ie=Gs;break;case"scroll":ie=$s;break;case"wheel":ie=X0;break;case"copy":case"cut":case"paste":ie=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=cn}var le=(i&4)!==0,ct=!le&&n==="scroll",L=le?K!==null?K+"Capture":null:K;le=[];for(var V=z,j;V!==null;){j=V;var ee=j.stateNode;if(j.tag===5&&ee!==null&&(j=ee,L!==null&&(ee=Bi(V,L),ee!=null&&le.push(ga(V,ee,j)))),ct)break;V=V.return}0<le.length&&(K=new ie(K,ae,null,a,Q),J.push({event:K,listeners:le}))}}if((i&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",K&&a!==Qr&&(ae=a.relatedTarget||a.fromElement)&&(ts(ae)||ae[xr]))break e;if((ie||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,ie?(ae=a.relatedTarget||a.toElement,ie=z,ae=ae?ts(ae):null,ae!==null&&(ct=Pn(ae),ae!==ct||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(ie=null,ae=z),ie!==ae)){if(le=aa,ee="onMouseLeave",L="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(le=cn,ee="onPointerLeave",L="onPointerEnter",V="pointer"),ct=ie==null?K:Zs(ie),j=ae==null?K:Zs(ae),K=new le(ee,V+"leave",ie,a,Q),K.target=ct,K.relatedTarget=j,ee=null,ts(Q)===z&&(le=new le(L,V+"enter",ae,a,Q),le.target=j,le.relatedTarget=ct,ee=le),ct=ee,ie&&ae)t:{for(le=ie,L=ae,V=0,j=le;j;j=Js(j))V++;for(j=0,ee=L;ee;ee=Js(ee))j++;for(;0<V-j;)le=Js(le),V--;for(;0<j-V;)L=Js(L),j--;for(;V--;){if(le===L||L!==null&&le===L.alternate)break t;le=Js(le),L=Js(L)}le=null}else le=null;ie!==null&&Vp(J,K,ie,le,!1),ae!==null&&ct!==null&&Vp(J,ct,ae,le,!0)}}e:{if(K=z?Zs(z):window,ie=K.nodeName&&K.nodeName.toLowerCase(),ie==="select"||ie==="input"&&K.type==="file")var ce=sw;else if(fp(K))if(mp)ce=uw;else{ce=aw;var fe=ow}else(ie=K.nodeName)&&ie.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ce=lw);if(ce&&(ce=ce(n,z))){pp(J,ce,a,Q);break e}fe&&fe(n,K,z),n==="focusout"&&(fe=K._wrapperState)&&fe.controlled&&K.type==="number"&&ft(K,"number",K.value)}switch(fe=z?Zs(z):window,n){case"focusin":(fp(fe)||fe.contentEditable==="true")&&(Qs=fe,Xc=z,fa=null);break;case"focusout":fa=Xc=Qs=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,Ip(J,a,Q);break;case"selectionchange":if(dw)break;case"keydown":case"keyup":Ip(J,a,Q)}var pe;if(Kc)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Ks?hp(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(lp&&a.locale!=="ko"&&(Ks||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Ks&&(pe=Ul()):(ln=Q,Bs="value"in ln?ln.value:ln.textContent,Ks=!0)),fe=Ql(z,_e),0<fe.length&&(_e=new y(_e,n,null,a,Q),J.push({event:_e,listeners:fe}),pe?_e.data=pe:(pe=dp(a),pe!==null&&(_e.data=pe)))),(pe=ew?tw(n,a):nw(n,a))&&(z=Ql(z,"onBeforeInput"),0<z.length&&(Q=new y("onBeforeInput","beforeinput",null,a,Q),J.push({event:Q,listeners:z}),Q.data=pe))}bp(J,i)})}function ga(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ql(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Bi(n,a),f!=null&&c.unshift(ga(n,f,d)),f=Bi(n,i),f!=null&&c.push(ga(n,f,d))),n=n.return}return c}function Js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Vp(n,i,a,c,d){for(var f=i._reactName,w=[];a!==null&&a!==c;){var S=a,P=S.alternate,z=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&z!==null&&(S=z,d?(P=Bi(a,f),P!=null&&w.unshift(ga(a,P,S))):d||(P=Bi(a,f),P!=null&&w.push(ga(a,P,S)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var gw=/\r\n?/g,yw=/\u0000|\uFFFD/g;function Op(n){return(typeof n=="string"?n:""+n).replace(gw,`
`).replace(yw,"")}function Yl(n,i,a){if(i=Op(i),Op(n)!==i&&a)throw Error(t(425))}function Jl(){}var sh=null,oh=null;function ah(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lh=typeof setTimeout=="function"?setTimeout:void 0,_w=typeof clearTimeout=="function"?clearTimeout:void 0,Lp=typeof Promise=="function"?Promise:void 0,vw=typeof queueMicrotask=="function"?queueMicrotask:typeof Lp<"u"?function(n){return Lp.resolve(null).then(n).catch(ww)}:lh;function ww(n){setTimeout(function(){throw n})}function uh(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ri(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ri(i)}function ai(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Mp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),rr="__reactFiber$"+Xs,ya="__reactProps$"+Xs,xr="__reactContainer$"+Xs,ch="__reactEvents$"+Xs,Ew="__reactListeners$"+Xs,Tw="__reactHandles$"+Xs;function ts(n){var i=n[rr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[xr]||a[rr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Mp(n);n!==null;){if(a=n[rr])return a;n=Mp(n)}return i}n=a,a=n.parentNode}return null}function _a(n){return n=n[rr]||n[xr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Xl(n){return n[ya]||null}var hh=[],eo=-1;function li(n){return{current:n}}function Je(n){0>eo||(n.current=hh[eo],hh[eo]=null,eo--)}function qe(n,i){eo++,hh[eo]=n.current,n.current=i}var ui={},Vt=li(ui),Qt=li(!1),ns=ui;function to(n,i){var a=n.type.contextTypes;if(!a)return ui;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=i[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Yt(n){return n=n.childContextTypes,n!=null}function Zl(){Je(Qt),Je(Vt)}function jp(n,i,a){if(Vt.current!==ui)throw Error(t(168));qe(Vt,i),qe(Qt,a)}function Fp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ze(n)||"Unknown",d));return se({},a,c)}function eu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ui,ns=Vt.current,qe(Vt,n),qe(Qt,Qt.current),!0}function Up(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Fp(n,i,ns),c.__reactInternalMemoizedMergedChildContext=n,Je(Qt),Je(Vt),qe(Vt,n)):Je(Qt),qe(Qt,a)}var Sr=null,tu=!1,dh=!1;function zp(n){Sr===null?Sr=[n]:Sr.push(n)}function Iw(n){tu=!0,zp(n)}function ci(){if(!dh&&Sr!==null){dh=!0;var n=0,i=De;try{var a=Sr;for(De=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Sr=null,tu=!1}catch(d){throw Sr!==null&&(Sr=Sr.slice(n+1)),Ko(Os,ci),d}finally{De=i,dh=!1}}return null}var no=[],ro=0,nu=null,ru=0,vn=[],wn=0,rs=null,Ar=1,Cr="";function is(n,i){no[ro++]=ru,no[ro++]=nu,nu=n,ru=i}function Bp(n,i,a){vn[wn++]=Ar,vn[wn++]=Cr,vn[wn++]=rs,rs=n;var c=Ar;n=Cr;var d=32-on(c)-1;c&=~(1<<d),a+=1;var f=32-on(i)+d;if(30<f){var w=d-d%5;f=(c&(1<<w)-1).toString(32),c>>=w,d-=w,Ar=1<<32-on(i)+d|a<<d|c,Cr=f+n}else Ar=1<<f|a<<d|c,Cr=n}function fh(n){n.return!==null&&(is(n,1),Bp(n,1,0))}function ph(n){for(;n===nu;)nu=no[--ro],no[ro]=null,ru=no[--ro],no[ro]=null;for(;n===rs;)rs=vn[--wn],vn[wn]=null,Cr=vn[--wn],vn[wn]=null,Ar=vn[--wn],vn[wn]=null}var hn=null,dn=null,Ze=!1,Dn=null;function $p(n,i){var a=xn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Hp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,hn=n,dn=ai(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,hn=n,dn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=rs!==null?{id:Ar,overflow:Cr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=xn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,hn=n,dn=null,!0):!1;default:return!1}}function mh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function gh(n){if(Ze){var i=dn;if(i){var a=i;if(!Hp(n,i)){if(mh(n))throw Error(t(418));i=ai(a.nextSibling);var c=hn;i&&Hp(n,i)?$p(c,a):(n.flags=n.flags&-4097|2,Ze=!1,hn=n)}}else{if(mh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ze=!1,hn=n}}}function Wp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;hn=n}function iu(n){if(n!==hn)return!1;if(!Ze)return Wp(n),Ze=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!ah(n.type,n.memoizedProps)),i&&(i=dn)){if(mh(n))throw qp(),Error(t(418));for(;i;)$p(n,i),i=ai(i.nextSibling)}if(Wp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){dn=ai(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}dn=null}}else dn=hn?ai(n.stateNode.nextSibling):null;return!0}function qp(){for(var n=dn;n;)n=ai(n.nextSibling)}function io(){dn=hn=null,Ze=!1}function yh(n){Dn===null?Dn=[n]:Dn.push(n)}var xw=xe.ReactCurrentBatchConfig;function va(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(w){var S=d.refs;w===null?delete S[f]:S[f]=w},i._stringRef=f,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function su(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Gp(n){var i=n._init;return i(n._payload)}function Kp(n){function i(L,V){if(n){var j=L.deletions;j===null?(L.deletions=[V],L.flags|=16):j.push(V)}}function a(L,V){if(!n)return null;for(;V!==null;)i(L,V),V=V.sibling;return null}function c(L,V){for(L=new Map;V!==null;)V.key!==null?L.set(V.key,V):L.set(V.index,V),V=V.sibling;return L}function d(L,V){return L=_i(L,V),L.index=0,L.sibling=null,L}function f(L,V,j){return L.index=j,n?(j=L.alternate,j!==null?(j=j.index,j<V?(L.flags|=2,V):j):(L.flags|=2,V)):(L.flags|=1048576,V)}function w(L){return n&&L.alternate===null&&(L.flags|=2),L}function S(L,V,j,ee){return V===null||V.tag!==6?(V=ld(j,L.mode,ee),V.return=L,V):(V=d(V,j),V.return=L,V)}function P(L,V,j,ee){var ce=j.type;return ce===D?Q(L,V,j.props.children,ee,j.key):V!==null&&(V.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===st&&Gp(ce)===V.type)?(ee=d(V,j.props),ee.ref=va(L,V,j),ee.return=L,ee):(ee=ku(j.type,j.key,j.props,null,L.mode,ee),ee.ref=va(L,V,j),ee.return=L,ee)}function z(L,V,j,ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==j.containerInfo||V.stateNode.implementation!==j.implementation?(V=ud(j,L.mode,ee),V.return=L,V):(V=d(V,j.children||[]),V.return=L,V)}function Q(L,V,j,ee,ce){return V===null||V.tag!==7?(V=ds(j,L.mode,ee,ce),V.return=L,V):(V=d(V,j),V.return=L,V)}function J(L,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return V=ld(""+V,L.mode,j),V.return=L,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Ae:return j=ku(V.type,V.key,V.props,null,L.mode,j),j.ref=va(L,null,V),j.return=L,j;case ke:return V=ud(V,L.mode,j),V.return=L,V;case st:var ee=V._init;return J(L,ee(V._payload),j)}if(lt(V)||ue(V))return V=ds(V,L.mode,j,null),V.return=L,V;su(L,V)}return null}function K(L,V,j,ee){var ce=V!==null?V.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return ce!==null?null:S(L,V,""+j,ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ae:return j.key===ce?P(L,V,j,ee):null;case ke:return j.key===ce?z(L,V,j,ee):null;case st:return ce=j._init,K(L,V,ce(j._payload),ee)}if(lt(j)||ue(j))return ce!==null?null:Q(L,V,j,ee,null);su(L,j)}return null}function ie(L,V,j,ee,ce){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return L=L.get(j)||null,S(V,L,""+ee,ce);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Ae:return L=L.get(ee.key===null?j:ee.key)||null,P(V,L,ee,ce);case ke:return L=L.get(ee.key===null?j:ee.key)||null,z(V,L,ee,ce);case st:var fe=ee._init;return ie(L,V,j,fe(ee._payload),ce)}if(lt(ee)||ue(ee))return L=L.get(j)||null,Q(V,L,ee,ce,null);su(V,ee)}return null}function ae(L,V,j,ee){for(var ce=null,fe=null,pe=V,_e=V=0,xt=null;pe!==null&&_e<j.length;_e++){pe.index>_e?(xt=pe,pe=null):xt=pe.sibling;var Fe=K(L,pe,j[_e],ee);if(Fe===null){pe===null&&(pe=xt);break}n&&pe&&Fe.alternate===null&&i(L,pe),V=f(Fe,V,_e),fe===null?ce=Fe:fe.sibling=Fe,fe=Fe,pe=xt}if(_e===j.length)return a(L,pe),Ze&&is(L,_e),ce;if(pe===null){for(;_e<j.length;_e++)pe=J(L,j[_e],ee),pe!==null&&(V=f(pe,V,_e),fe===null?ce=pe:fe.sibling=pe,fe=pe);return Ze&&is(L,_e),ce}for(pe=c(L,pe);_e<j.length;_e++)xt=ie(pe,L,_e,j[_e],ee),xt!==null&&(n&&xt.alternate!==null&&pe.delete(xt.key===null?_e:xt.key),V=f(xt,V,_e),fe===null?ce=xt:fe.sibling=xt,fe=xt);return n&&pe.forEach(function(vi){return i(L,vi)}),Ze&&is(L,_e),ce}function le(L,V,j,ee){var ce=ue(j);if(typeof ce!="function")throw Error(t(150));if(j=ce.call(j),j==null)throw Error(t(151));for(var fe=ce=null,pe=V,_e=V=0,xt=null,Fe=j.next();pe!==null&&!Fe.done;_e++,Fe=j.next()){pe.index>_e?(xt=pe,pe=null):xt=pe.sibling;var vi=K(L,pe,Fe.value,ee);if(vi===null){pe===null&&(pe=xt);break}n&&pe&&vi.alternate===null&&i(L,pe),V=f(vi,V,_e),fe===null?ce=vi:fe.sibling=vi,fe=vi,pe=xt}if(Fe.done)return a(L,pe),Ze&&is(L,_e),ce;if(pe===null){for(;!Fe.done;_e++,Fe=j.next())Fe=J(L,Fe.value,ee),Fe!==null&&(V=f(Fe,V,_e),fe===null?ce=Fe:fe.sibling=Fe,fe=Fe);return Ze&&is(L,_e),ce}for(pe=c(L,pe);!Fe.done;_e++,Fe=j.next())Fe=ie(pe,L,_e,Fe.value,ee),Fe!==null&&(n&&Fe.alternate!==null&&pe.delete(Fe.key===null?_e:Fe.key),V=f(Fe,V,_e),fe===null?ce=Fe:fe.sibling=Fe,fe=Fe);return n&&pe.forEach(function(rE){return i(L,rE)}),Ze&&is(L,_e),ce}function ct(L,V,j,ee){if(typeof j=="object"&&j!==null&&j.type===D&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Ae:e:{for(var ce=j.key,fe=V;fe!==null;){if(fe.key===ce){if(ce=j.type,ce===D){if(fe.tag===7){a(L,fe.sibling),V=d(fe,j.props.children),V.return=L,L=V;break e}}else if(fe.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===st&&Gp(ce)===fe.type){a(L,fe.sibling),V=d(fe,j.props),V.ref=va(L,fe,j),V.return=L,L=V;break e}a(L,fe);break}else i(L,fe);fe=fe.sibling}j.type===D?(V=ds(j.props.children,L.mode,ee,j.key),V.return=L,L=V):(ee=ku(j.type,j.key,j.props,null,L.mode,ee),ee.ref=va(L,V,j),ee.return=L,L=ee)}return w(L);case ke:e:{for(fe=j.key;V!==null;){if(V.key===fe)if(V.tag===4&&V.stateNode.containerInfo===j.containerInfo&&V.stateNode.implementation===j.implementation){a(L,V.sibling),V=d(V,j.children||[]),V.return=L,L=V;break e}else{a(L,V);break}else i(L,V);V=V.sibling}V=ud(j,L.mode,ee),V.return=L,L=V}return w(L);case st:return fe=j._init,ct(L,V,fe(j._payload),ee)}if(lt(j))return ae(L,V,j,ee);if(ue(j))return le(L,V,j,ee);su(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,V!==null&&V.tag===6?(a(L,V.sibling),V=d(V,j),V.return=L,L=V):(a(L,V),V=ld(j,L.mode,ee),V.return=L,L=V),w(L)):a(L,V)}return ct}var so=Kp(!0),Qp=Kp(!1),ou=li(null),au=null,oo=null,_h=null;function vh(){_h=oo=au=null}function wh(n){var i=ou.current;Je(ou),n._currentValue=i}function Eh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ao(n,i){au=n,_h=oo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Jt=!0),n.firstContext=null)}function En(n){var i=n._currentValue;if(_h!==n)if(n={context:n,memoizedValue:i,next:null},oo===null){if(au===null)throw Error(t(308));oo=n,au.dependencies={lanes:0,firstContext:n}}else oo=oo.next=n;return i}var ss=null;function Th(n){ss===null?ss=[n]:ss.push(n)}function Yp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Th(i)):(a.next=d.next,d.next=a),i.interleaved=a,Rr(n,c)}function Rr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var hi=!1;function Ih(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function kr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function di(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Me&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Rr(n,a)}return d=c.interleaved,d===null?(i.next=i,Th(c)):(i.next=d.next,d.next=i),c.interleaved=i,Rr(n,a)}function lu(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ea(n,a)}}function Xp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=w:f=f.next=w,a=a.next}while(a!==null);f===null?d=f=i:f=f.next=i}else d=f=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function uu(n,i,a,c){var d=n.updateQueue;hi=!1;var f=d.firstBaseUpdate,w=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,z=P.next;P.next=null,w===null?f=z:w.next=z,w=P;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==w&&(S===null?Q.firstBaseUpdate=z:S.next=z,Q.lastBaseUpdate=P))}if(f!==null){var J=d.baseState;w=0,Q=z=P=null,S=f;do{var K=S.lane,ie=S.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:ie,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ae=n,le=S;switch(K=i,ie=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){J=ae.call(ie,J,K);break e}J=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,K=typeof ae=="function"?ae.call(ie,J,K):ae,K==null)break e;J=se({},J,K);break e;case 2:hi=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[S]:K.push(S))}else ie={eventTime:ie,lane:K,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(z=Q=ie,P=J):Q=Q.next=ie,w|=K;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;K=S,S=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(P=J),d.baseState=P,d.firstBaseUpdate=z,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);ls|=w,n.lanes=w,n.memoizedState=J}}function Zp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var wa={},ir=li(wa),Ea=li(wa),Ta=li(wa);function os(n){if(n===wa)throw Error(t(174));return n}function xh(n,i){switch(qe(Ta,i),qe(Ea,n),qe(ir,wa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ks(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ks(i,n)}Je(ir),qe(ir,i)}function lo(){Je(ir),Je(Ea),Je(Ta)}function em(n){os(Ta.current);var i=os(ir.current),a=ks(i,n.type);i!==a&&(qe(Ea,n),qe(ir,a))}function Sh(n){Ea.current===n&&(Je(ir),Je(Ea))}var rt=li(0);function cu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ah=[];function Ch(){for(var n=0;n<Ah.length;n++)Ah[n]._workInProgressVersionPrimary=null;Ah.length=0}var hu=xe.ReactCurrentDispatcher,Rh=xe.ReactCurrentBatchConfig,as=0,it=null,vt=null,Tt=null,du=!1,Ia=!1,xa=0,Sw=0;function Ot(){throw Error(t(321))}function kh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!bn(n[a],i[a]))return!1;return!0}function Ph(n,i,a,c,d,f){if(as=f,it=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,hu.current=n===null||n.memoizedState===null?kw:Pw,n=a(c,d),Ia){f=0;do{if(Ia=!1,xa=0,25<=f)throw Error(t(301));f+=1,Tt=vt=null,i.updateQueue=null,hu.current=Nw,n=a(c,d)}while(Ia)}if(hu.current=mu,i=vt!==null&&vt.next!==null,as=0,Tt=vt=it=null,du=!1,i)throw Error(t(300));return n}function Nh(){var n=xa!==0;return xa=0,n}function sr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?it.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function Tn(){if(vt===null){var n=it.alternate;n=n!==null?n.memoizedState:null}else n=vt.next;var i=Tt===null?it.memoizedState:Tt.next;if(i!==null)Tt=i,vt=n;else{if(n===null)throw Error(t(310));vt=n,n={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Tt===null?it.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function Sa(n,i){return typeof i=="function"?i(n):i}function bh(n){var i=Tn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=vt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var w=d.next;d.next=f.next,f.next=w}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var S=w=null,P=null,z=f;do{var Q=z.lane;if((as&Q)===Q)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:n(c,z.action);else{var J={lane:Q,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(S=P=J,w=c):P=P.next=J,it.lanes|=Q,ls|=Q}z=z.next}while(z!==null&&z!==f);P===null?w=c:P.next=S,bn(c,i.memoizedState)||(Jt=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,it.lanes|=f,ls|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Dh(n){var i=Tn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do f=n(f,w.action),w=w.next;while(w!==d);bn(f,i.memoizedState)||(Jt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,c]}function tm(){}function nm(n,i){var a=it,c=Tn(),d=i(),f=!bn(c.memoizedState,d);if(f&&(c.memoizedState=d,Jt=!0),c=c.queue,Vh(sm.bind(null,a,c,n),[n]),c.getSnapshot!==i||f||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,Aa(9,im.bind(null,a,c,d,i),void 0,null),It===null)throw Error(t(349));(as&30)!==0||rm(a,i,d)}return d}function rm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=it.updateQueue,i===null?(i={lastEffect:null,stores:null},it.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function im(n,i,a,c){i.value=a,i.getSnapshot=c,om(i)&&am(n)}function sm(n,i,a){return a(function(){om(i)&&am(n)})}function om(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!bn(n,a)}catch{return!0}}function am(n){var i=Rr(n,1);i!==null&&Mn(i,n,1,-1)}function lm(n){var i=sr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:n},i.queue=n,n=n.dispatch=Rw.bind(null,it,n),[i.memoizedState,n]}function Aa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=it.updateQueue,i===null?(i={lastEffect:null,stores:null},it.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function um(){return Tn().memoizedState}function fu(n,i,a,c){var d=sr();it.flags|=n,d.memoizedState=Aa(1|i,a,void 0,c===void 0?null:c)}function pu(n,i,a,c){var d=Tn();c=c===void 0?null:c;var f=void 0;if(vt!==null){var w=vt.memoizedState;if(f=w.destroy,c!==null&&kh(c,w.deps)){d.memoizedState=Aa(i,a,f,c);return}}it.flags|=n,d.memoizedState=Aa(1|i,a,f,c)}function cm(n,i){return fu(8390656,8,n,i)}function Vh(n,i){return pu(2048,8,n,i)}function hm(n,i){return pu(4,2,n,i)}function dm(n,i){return pu(4,4,n,i)}function fm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function pm(n,i,a){return a=a!=null?a.concat([n]):null,pu(4,4,fm.bind(null,i,n),a)}function Oh(){}function mm(n,i){var a=Tn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&kh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function gm(n,i){var a=Tn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&kh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function ym(n,i,a){return(as&21)===0?(n.baseState&&(n.baseState=!1,Jt=!0),n.memoizedState=a):(bn(a,i)||(a=Xo(),it.lanes|=a,ls|=a,n.baseState=!0),i)}function Aw(n,i){var a=De;De=a!==0&&4>a?a:4,n(!0);var c=Rh.transition;Rh.transition={};try{n(!1),i()}finally{De=a,Rh.transition=c}}function _m(){return Tn().memoizedState}function Cw(n,i,a){var c=gi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},vm(n))wm(i,a);else if(a=Yp(n,i,a,c),a!==null){var d=Wt();Mn(a,n,c,d),Em(a,i,c)}}function Rw(n,i,a){var c=gi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(vm(n))wm(i,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var w=i.lastRenderedState,S=f(w,a);if(d.hasEagerState=!0,d.eagerState=S,bn(S,w)){var P=i.interleaved;P===null?(d.next=d,Th(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=Yp(n,i,d,c),a!==null&&(d=Wt(),Mn(a,n,c,d),Em(a,i,c))}}function vm(n){var i=n.alternate;return n===it||i!==null&&i===it}function wm(n,i){Ia=du=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Em(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ea(n,a)}}var mu={readContext:En,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},kw={readContext:En,useCallback:function(n,i){return sr().memoizedState=[n,i===void 0?null:i],n},useContext:En,useEffect:cm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,fu(4194308,4,fm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return fu(4194308,4,n,i)},useInsertionEffect:function(n,i){return fu(4,2,n,i)},useMemo:function(n,i){var a=sr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=sr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Cw.bind(null,it,n),[c.memoizedState,n]},useRef:function(n){var i=sr();return n={current:n},i.memoizedState=n},useState:lm,useDebugValue:Oh,useDeferredValue:function(n){return sr().memoizedState=n},useTransition:function(){var n=lm(!1),i=n[0];return n=Aw.bind(null,n[1]),sr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=it,d=sr();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),It===null)throw Error(t(349));(as&30)!==0||rm(c,i,a)}d.memoizedState=a;var f={value:a,getSnapshot:i};return d.queue=f,cm(sm.bind(null,c,f,n),[n]),c.flags|=2048,Aa(9,im.bind(null,c,f,a,i),void 0,null),a},useId:function(){var n=sr(),i=It.identifierPrefix;if(Ze){var a=Cr,c=Ar;a=(c&~(1<<32-on(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=xa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Sw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Pw={readContext:En,useCallback:mm,useContext:En,useEffect:Vh,useImperativeHandle:pm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:gm,useReducer:bh,useRef:um,useState:function(){return bh(Sa)},useDebugValue:Oh,useDeferredValue:function(n){var i=Tn();return ym(i,vt.memoizedState,n)},useTransition:function(){var n=bh(Sa)[0],i=Tn().memoizedState;return[n,i]},useMutableSource:tm,useSyncExternalStore:nm,useId:_m,unstable_isNewReconciler:!1},Nw={readContext:En,useCallback:mm,useContext:En,useEffect:Vh,useImperativeHandle:pm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:gm,useReducer:Dh,useRef:um,useState:function(){return Dh(Sa)},useDebugValue:Oh,useDeferredValue:function(n){var i=Tn();return vt===null?i.memoizedState=n:ym(i,vt.memoizedState,n)},useTransition:function(){var n=Dh(Sa)[0],i=Tn().memoizedState;return[n,i]},useMutableSource:tm,useSyncExternalStore:nm,useId:_m,unstable_isNewReconciler:!1};function Vn(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Lh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var gu={isMounted:function(n){return(n=n._reactInternals)?Pn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=gi(n),f=kr(c,d);f.payload=i,a!=null&&(f.callback=a),i=di(n,f,d),i!==null&&(Mn(i,n,d,c),lu(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=gi(n),f=kr(c,d);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=di(n,f,d),i!==null&&(Mn(i,n,d,c),lu(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Wt(),c=gi(n),d=kr(a,c);d.tag=2,i!=null&&(d.callback=i),i=di(n,d,c),i!==null&&(Mn(i,n,c,a),lu(i,n,c))}};function Tm(n,i,a,c,d,f,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,w):i.prototype&&i.prototype.isPureReactComponent?!da(a,c)||!da(d,f):!0}function Im(n,i,a){var c=!1,d=ui,f=i.contextType;return typeof f=="object"&&f!==null?f=En(f):(d=Yt(i)?ns:Vt.current,c=i.contextTypes,f=(c=c!=null)?to(n,d):ui),i=new i(a,f),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=gu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),i}function xm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&gu.enqueueReplaceState(i,i.state,null)}function Mh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Ih(n);var f=i.contextType;typeof f=="object"&&f!==null?d.context=En(f):(f=Yt(i)?ns:Vt.current,d.context=to(n,f)),d.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(Lh(n,i,f,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&gu.enqueueReplaceState(d,d.state,null),uu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function uo(n,i){try{var a="",c=i;do a+=Pe(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:i,stack:d,digest:null}}function jh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Fh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var bw=typeof WeakMap=="function"?WeakMap:Map;function Sm(n,i,a){a=kr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Iu||(Iu=!0,ed=c),Fh(n,i)},a}function Am(n,i,a){a=kr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Fh(n,i)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){Fh(n,i),typeof c!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Cm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new bw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=qw.bind(null,n,i,a),i.then(n,n))}function Rm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function km(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=kr(-1,1),i.tag=2,di(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Dw=xe.ReactCurrentOwner,Jt=!1;function Ht(n,i,a,c){i.child=n===null?Qp(i,null,a,c):so(i,n.child,a,c)}function Pm(n,i,a,c,d){a=a.render;var f=i.ref;return ao(i,d),c=Ph(n,i,a,c,f,d),a=Nh(),n!==null&&!Jt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pr(n,i,d)):(Ze&&a&&fh(i),i.flags|=1,Ht(n,i,c,d),i.child)}function Nm(n,i,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!ad(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=f,bm(n,i,f,c,d)):(n=ku(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(f=n.child,(n.lanes&d)===0){var w=f.memoizedProps;if(a=a.compare,a=a!==null?a:da,a(w,c)&&n.ref===i.ref)return Pr(n,i,d)}return i.flags|=1,n=_i(f,c),n.ref=i.ref,n.return=i,i.child=n}function bm(n,i,a,c,d){if(n!==null){var f=n.memoizedProps;if(da(f,c)&&n.ref===i.ref)if(Jt=!1,i.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Jt=!0);else return i.lanes=n.lanes,Pr(n,i,d)}return Uh(n,i,a,c,d)}function Dm(n,i,a){var c=i.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(ho,fn),fn|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qe(ho,fn),fn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,qe(ho,fn),fn|=c}else f!==null?(c=f.baseLanes|a,i.memoizedState=null):c=a,qe(ho,fn),fn|=c;return Ht(n,i,d,a),i.child}function Vm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Uh(n,i,a,c,d){var f=Yt(a)?ns:Vt.current;return f=to(i,f),ao(i,d),a=Ph(n,i,a,c,f,d),c=Nh(),n!==null&&!Jt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pr(n,i,d)):(Ze&&c&&fh(i),i.flags|=1,Ht(n,i,a,d),i.child)}function Om(n,i,a,c,d){if(Yt(a)){var f=!0;eu(i)}else f=!1;if(ao(i,d),i.stateNode===null)_u(n,i),Im(i,a,c),Mh(i,a,c,d),c=!0;else if(n===null){var w=i.stateNode,S=i.memoizedProps;w.props=S;var P=w.context,z=a.contextType;typeof z=="object"&&z!==null?z=En(z):(z=Yt(a)?ns:Vt.current,z=to(i,z));var Q=a.getDerivedStateFromProps,J=typeof Q=="function"||typeof w.getSnapshotBeforeUpdate=="function";J||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(S!==c||P!==z)&&xm(i,w,c,z),hi=!1;var K=i.memoizedState;w.state=K,uu(i,c,w,d),P=i.memoizedState,S!==c||K!==P||Qt.current||hi?(typeof Q=="function"&&(Lh(i,a,Q,c),P=i.memoizedState),(S=hi||Tm(i,a,S,c,K,P,z))?(J||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),w.props=c,w.state=P,w.context=z,c=S):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Jp(n,i),S=i.memoizedProps,z=i.type===i.elementType?S:Vn(i.type,S),w.props=z,J=i.pendingProps,K=w.context,P=a.contextType,typeof P=="object"&&P!==null?P=En(P):(P=Yt(a)?ns:Vt.current,P=to(i,P));var ie=a.getDerivedStateFromProps;(Q=typeof ie=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(S!==J||K!==P)&&xm(i,w,c,P),hi=!1,K=i.memoizedState,w.state=K,uu(i,c,w,d);var ae=i.memoizedState;S!==J||K!==ae||Qt.current||hi?(typeof ie=="function"&&(Lh(i,a,ie,c),ae=i.memoizedState),(z=hi||Tm(i,a,z,c,K,ae,P)||!1)?(Q||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,ae,P),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,ae,P)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),w.props=c,w.state=ae,w.context=P,c=z):(typeof w.componentDidUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),c=!1)}return zh(n,i,a,c,f,d)}function zh(n,i,a,c,d,f){Vm(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return d&&Up(i,a,!1),Pr(n,i,f);c=i.stateNode,Dw.current=i;var S=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=so(i,n.child,null,f),i.child=so(i,null,S,f)):Ht(n,i,S,f),i.memoizedState=c.state,d&&Up(i,a,!0),i.child}function Lm(n){var i=n.stateNode;i.pendingContext?jp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&jp(n,i.context,!1),xh(n,i.containerInfo)}function Mm(n,i,a,c,d){return io(),yh(d),i.flags|=256,Ht(n,i,a,c),i.child}var Bh={dehydrated:null,treeContext:null,retryLane:0};function $h(n){return{baseLanes:n,cachePool:null,transitions:null}}function jm(n,i,a){var c=i.pendingProps,d=rt.current,f=!1,w=(i.flags&128)!==0,S;if((S=w)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(f=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(rt,d&1),n===null)return gh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,f?(c=i.mode,f=i.child,w={mode:"hidden",children:w},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=w):f=Pu(w,c,0,null),n=ds(n,c,a,null),f.return=i,n.return=i,f.sibling=n,i.child=f,i.child.memoizedState=$h(a),i.memoizedState=Bh,n):Hh(i,w));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return Vw(n,i,w,c,S,d,a);if(f){f=c.fallback,w=i.mode,d=n.child,S=d.sibling;var P={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=_i(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?f=_i(S,f):(f=ds(f,w,a,null),f.flags|=2),f.return=i,c.return=i,c.sibling=f,i.child=c,c=f,f=i.child,w=n.child.memoizedState,w=w===null?$h(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},f.memoizedState=w,f.childLanes=n.childLanes&~a,i.memoizedState=Bh,c}return f=n.child,n=f.sibling,c=_i(f,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Hh(n,i){return i=Pu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function yu(n,i,a,c){return c!==null&&yh(c),so(i,n.child,null,a),n=Hh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Vw(n,i,a,c,d,f,w){if(a)return i.flags&256?(i.flags&=-257,c=jh(Error(t(422))),yu(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(f=c.fallback,d=i.mode,c=Pu({mode:"visible",children:c.children},d,0,null),f=ds(f,d,w,null),f.flags|=2,c.return=i,f.return=i,c.sibling=f,i.child=c,(i.mode&1)!==0&&so(i,n.child,null,w),i.child.memoizedState=$h(w),i.memoizedState=Bh,f);if((i.mode&1)===0)return yu(n,i,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,f=Error(t(419)),c=jh(f,c,void 0),yu(n,i,w,c)}if(S=(w&n.childLanes)!==0,Jt||S){if(c=It,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|w))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Rr(n,d),Mn(c,n,d,-1))}return od(),c=jh(Error(t(421))),yu(n,i,w,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Gw.bind(null,n),d._reactRetry=i,null):(n=f.treeContext,dn=ai(d.nextSibling),hn=i,Ze=!0,Dn=null,n!==null&&(vn[wn++]=Ar,vn[wn++]=Cr,vn[wn++]=rs,Ar=n.id,Cr=n.overflow,rs=i),i=Hh(i,c.children),i.flags|=4096,i)}function Fm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Eh(n.return,i,a)}function Wh(n,i,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function Um(n,i,a){var c=i.pendingProps,d=c.revealOrder,f=c.tail;if(Ht(n,i,c.children,a),c=rt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Fm(n,a,i);else if(n.tag===19)Fm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(rt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&cu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Wh(i,!1,d,a,f);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&cu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Wh(i,!0,a,null,f);break;case"together":Wh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function _u(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ls|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=_i(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=_i(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Ow(n,i,a){switch(i.tag){case 3:Lm(i),io();break;case 5:em(i);break;case 1:Yt(i.type)&&eu(i);break;case 4:xh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;qe(ou,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(qe(rt,rt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?jm(n,i,a):(qe(rt,rt.current&1),n=Pr(n,i,a),n!==null?n.sibling:null);qe(rt,rt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Um(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(rt,rt.current),c)break;return null;case 22:case 23:return i.lanes=0,Dm(n,i,a)}return Pr(n,i,a)}var zm,qh,Bm,$m;zm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},qh=function(){},Bm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,os(ir.current);var f=null;switch(a){case"input":d=Cs(n,d),c=Cs(n,c),f=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),f=[];break;case"textarea":d=zo(n,d),c=zo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Jl)}kn(a,c);var w;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var S=d[z];for(w in S)S.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?f||(f=[]):(f=f||[]).push(z,null));for(z in c){var P=c[z];if(S=d!=null?d[z]:void 0,c.hasOwnProperty(z)&&P!==S&&(P!=null||S!=null))if(z==="style")if(S){for(w in S)!S.hasOwnProperty(w)||P&&P.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in P)P.hasOwnProperty(w)&&S[w]!==P[w]&&(a||(a={}),a[w]=P[w])}else a||(f||(f=[]),f.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(f=f||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(f=f||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&Ye("scroll",n),f||S===P||(f=[])):(f=f||[]).push(z,P))}a&&(f=f||[]).push("style",a);var z=f;(i.updateQueue=z)&&(i.flags|=4)}},$m=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ca(n,i){if(!Ze)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Lw(n,i,a){var c=i.pendingProps;switch(ph(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(i),null;case 1:return Yt(i.type)&&Zl(),Lt(i),null;case 3:return c=i.stateNode,lo(),Je(Qt),Je(Vt),Ch(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(iu(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Dn!==null&&(rd(Dn),Dn=null))),qh(n,i),Lt(i),null;case 5:Sh(i);var d=os(Ta.current);if(a=i.type,n!==null&&i.stateNode!=null)Bm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Lt(i),null}if(n=os(ir.current),iu(i)){c=i.stateNode,a=i.type;var f=i.memoizedProps;switch(c[rr]=i,c[ya]=f,n=(i.mode&1)!==0,a){case"dialog":Ye("cancel",c),Ye("close",c);break;case"iframe":case"object":case"embed":Ye("load",c);break;case"video":case"audio":for(d=0;d<pa.length;d++)Ye(pa[d],c);break;case"source":Ye("error",c);break;case"img":case"image":case"link":Ye("error",c),Ye("load",c);break;case"details":Ye("toggle",c);break;case"input":Tl(c,f),Ye("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ye("invalid",c);break;case"textarea":Bo(c,f),Ye("invalid",c)}kn(a,f),d=null;for(var w in f)if(f.hasOwnProperty(w)){var S=f[w];w==="children"?typeof S=="string"?c.textContent!==S&&(f.suppressHydrationWarning!==!0&&Yl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(f.suppressHydrationWarning!==!0&&Yl(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(w)&&S!=null&&w==="onScroll"&&Ye("scroll",c)}switch(a){case"input":As(c),Uo(c,f,!0);break;case"textarea":As(c),Wr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Jl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=$o(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[rr]=i,n[ya]=c,zm(n,i,!1,!1),i.stateNode=n;e:{switch(w=Ns(a,c),a){case"dialog":Ye("cancel",n),Ye("close",n),d=c;break;case"iframe":case"object":case"embed":Ye("load",n),d=c;break;case"video":case"audio":for(d=0;d<pa.length;d++)Ye(pa[d],n);d=c;break;case"source":Ye("error",n),d=c;break;case"img":case"image":case"link":Ye("error",n),Ye("load",n),d=c;break;case"details":Ye("toggle",n),d=c;break;case"input":Tl(n,c),d=Cs(n,c),Ye("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),Ye("invalid",n);break;case"textarea":Bo(n,c),d=zo(n,c),Ye("invalid",n);break;default:d=c}kn(a,d),S=d;for(f in S)if(S.hasOwnProperty(f)){var P=S[f];f==="style"?Ps(n,P):f==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&xl(n,P)):f==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&zi(n,P):typeof P=="number"&&zi(n,""+P):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?P!=null&&f==="onScroll"&&Ye("scroll",n):P!=null&&me(n,f,P,w))}switch(a){case"input":As(n),Uo(n,c,!1);break;case"textarea":As(n),Wr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?Rn(n,!!c.multiple,f,!1):c.defaultValue!=null&&Rn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Lt(i),null;case 6:if(n&&i.stateNode!=null)$m(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=os(Ta.current),os(ir.current),iu(i)){if(c=i.stateNode,a=i.memoizedProps,c[rr]=i,(f=c.nodeValue!==a)&&(n=hn,n!==null))switch(n.tag){case 3:Yl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Yl(c.nodeValue,a,(n.mode&1)!==0)}f&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[rr]=i,i.stateNode=c}return Lt(i),null;case 13:if(Je(rt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ze&&dn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)qp(),io(),i.flags|=98560,f=!1;else if(f=iu(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[rr]=i}else io(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Lt(i),f=!1}else Dn!==null&&(rd(Dn),Dn=null),f=!0;if(!f)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(rt.current&1)!==0?wt===0&&(wt=3):od())),i.updateQueue!==null&&(i.flags|=4),Lt(i),null);case 4:return lo(),qh(n,i),n===null&&ma(i.stateNode.containerInfo),Lt(i),null;case 10:return wh(i.type._context),Lt(i),null;case 17:return Yt(i.type)&&Zl(),Lt(i),null;case 19:if(Je(rt),f=i.memoizedState,f===null)return Lt(i),null;if(c=(i.flags&128)!==0,w=f.rendering,w===null)if(c)Ca(f,!1);else{if(wt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=cu(n),w!==null){for(i.flags|=128,Ca(f,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)f=a,n=c,f.flags&=14680066,w=f.alternate,w===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=w.childLanes,f.lanes=w.lanes,f.child=w.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=w.memoizedProps,f.memoizedState=w.memoizedState,f.updateQueue=w.updateQueue,f.type=w.type,n=w.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(rt,rt.current&1|2),i.child}n=n.sibling}f.tail!==null&&Qe()>fo&&(i.flags|=128,c=!0,Ca(f,!1),i.lanes=4194304)}else{if(!c)if(n=cu(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ca(f,!0),f.tail===null&&f.tailMode==="hidden"&&!w.alternate&&!Ze)return Lt(i),null}else 2*Qe()-f.renderingStartTime>fo&&a!==1073741824&&(i.flags|=128,c=!0,Ca(f,!1),i.lanes=4194304);f.isBackwards?(w.sibling=i.child,i.child=w):(a=f.last,a!==null?a.sibling=w:i.child=w,f.last=w)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Qe(),i.sibling=null,a=rt.current,qe(rt,c?a&1|2:a&1),i):(Lt(i),null);case 22:case 23:return sd(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(fn&1073741824)!==0&&(Lt(i),i.subtreeFlags&6&&(i.flags|=8192)):Lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Mw(n,i){switch(ph(i),i.tag){case 1:return Yt(i.type)&&Zl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return lo(),Je(Qt),Je(Vt),Ch(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Sh(i),null;case 13:if(Je(rt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));io()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Je(rt),null;case 4:return lo(),null;case 10:return wh(i.type._context),null;case 22:case 23:return sd(),null;case 24:return null;default:return null}}var vu=!1,Mt=!1,jw=typeof WeakSet=="function"?WeakSet:Set,oe=null;function co(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){at(n,i,c)}else a.current=null}function Gh(n,i,a){try{a()}catch(c){at(n,i,c)}}var Hm=!1;function Fw(n,i){if(sh=Er,n=Tp(),Jc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var w=0,S=-1,P=-1,z=0,Q=0,J=n,K=null;t:for(;;){for(var ie;J!==a||d!==0&&J.nodeType!==3||(S=w+d),J!==f||c!==0&&J.nodeType!==3||(P=w+c),J.nodeType===3&&(w+=J.nodeValue.length),(ie=J.firstChild)!==null;)K=J,J=ie;for(;;){if(J===n)break t;if(K===a&&++z===d&&(S=w),K===f&&++Q===c&&(P=w),(ie=J.nextSibling)!==null)break;J=K,K=J.parentNode}J=ie}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(oh={focusedElem:n,selectionRange:a},Er=!1,oe=i;oe!==null;)if(i=oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,oe=n;else for(;oe!==null;){i=oe;try{var ae=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,ct=ae.memoizedState,L=i.stateNode,V=L.getSnapshotBeforeUpdate(i.elementType===i.type?le:Vn(i.type,le),ct);L.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var j=i.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){at(i,i.return,ee)}if(n=i.sibling,n!==null){n.return=i.return,oe=n;break}oe=i.return}return ae=Hm,Hm=!1,ae}function Ra(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Gh(i,a,f)}d=d.next}while(d!==c)}}function wu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Kh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Wm(n){var i=n.alternate;i!==null&&(n.alternate=null,Wm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[rr],delete i[ya],delete i[ch],delete i[Ew],delete i[Tw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qm(n){return n.tag===5||n.tag===3||n.tag===4}function Gm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||qm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Qh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Jl));else if(c!==4&&(n=n.child,n!==null))for(Qh(n,i,a),n=n.sibling;n!==null;)Qh(n,i,a),n=n.sibling}function Yh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Yh(n,i,a),n=n.sibling;n!==null;)Yh(n,i,a),n=n.sibling}var Rt=null,On=!1;function fi(n,i,a){for(a=a.child;a!==null;)Km(n,i,a),a=a.sibling}function Km(n,i,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(qi,a)}catch{}switch(a.tag){case 5:Mt||co(a,i);case 6:var c=Rt,d=On;Rt=null,fi(n,i,a),Rt=c,On=d,Rt!==null&&(On?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(On?(n=Rt,a=a.stateNode,n.nodeType===8?uh(n.parentNode,a):n.nodeType===1&&uh(n,a),ri(n)):uh(Rt,a.stateNode));break;case 4:c=Rt,d=On,Rt=a.stateNode.containerInfo,On=!0,fi(n,i,a),Rt=c,On=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,w=f.destroy;f=f.tag,w!==void 0&&((f&2)!==0||(f&4)!==0)&&Gh(a,i,w),d=d.next}while(d!==c)}fi(n,i,a);break;case 1:if(!Mt&&(co(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){at(a,i,S)}fi(n,i,a);break;case 21:fi(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,fi(n,i,a),Mt=c):fi(n,i,a);break;default:fi(n,i,a)}}function Qm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new jw),i.forEach(function(c){var d=Kw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ln(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,w=i,S=w;e:for(;S!==null;){switch(S.tag){case 5:Rt=S.stateNode,On=!1;break e;case 3:Rt=S.stateNode.containerInfo,On=!0;break e;case 4:Rt=S.stateNode.containerInfo,On=!0;break e}S=S.return}if(Rt===null)throw Error(t(160));Km(f,w,d),Rt=null,On=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(z){at(d,i,z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ym(i,n),i=i.sibling}function Ym(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(i,n),or(n),c&4){try{Ra(3,n,n.return),wu(3,n)}catch(le){at(n,n.return,le)}try{Ra(5,n,n.return)}catch(le){at(n,n.return,le)}}break;case 1:Ln(i,n),or(n),c&512&&a!==null&&co(a,a.return);break;case 5:if(Ln(i,n),or(n),c&512&&a!==null&&co(a,a.return),n.flags&32){var d=n.stateNode;try{zi(d,"")}catch(le){at(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,w=a!==null?a.memoizedProps:f,S=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{S==="input"&&f.type==="radio"&&f.name!=null&&Rs(d,f),Ns(S,w);var z=Ns(S,f);for(w=0;w<P.length;w+=2){var Q=P[w],J=P[w+1];Q==="style"?Ps(d,J):Q==="dangerouslySetInnerHTML"?xl(d,J):Q==="children"?zi(d,J):me(d,Q,J,z)}switch(S){case"input":Ui(d,f);break;case"textarea":Il(d,f);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var ie=f.value;ie!=null?Rn(d,!!f.multiple,ie,!1):K!==!!f.multiple&&(f.defaultValue!=null?Rn(d,!!f.multiple,f.defaultValue,!0):Rn(d,!!f.multiple,f.multiple?[]:"",!1))}d[ya]=f}catch(le){at(n,n.return,le)}}break;case 6:if(Ln(i,n),or(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(le){at(n,n.return,le)}}break;case 3:if(Ln(i,n),or(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ri(i.containerInfo)}catch(le){at(n,n.return,le)}break;case 4:Ln(i,n),or(n);break;case 13:Ln(i,n),or(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Zh=Qe())),c&4&&Qm(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(z=Mt)||Q,Ln(i,n),Mt=z):Ln(i,n),or(n),c&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!Q&&(n.mode&1)!==0)for(oe=n,Q=n.child;Q!==null;){for(J=oe=Q;oe!==null;){switch(K=oe,ie=K.child,K.tag){case 0:case 11:case 14:case 15:Ra(4,K,K.return);break;case 1:co(K,K.return);var ae=K.stateNode;if(typeof ae.componentWillUnmount=="function"){c=K,a=K.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(le){at(c,a,le)}}break;case 5:co(K,K.return);break;case 22:if(K.memoizedState!==null){Zm(J);continue}}ie!==null?(ie.return=K,oe=ie):Zm(J)}Q=Q.sibling}e:for(Q=null,J=n;;){if(J.tag===5){if(Q===null){Q=J;try{d=J.stateNode,z?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(S=J.stateNode,P=J.memoizedProps.style,w=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=Kr("display",w))}catch(le){at(n,n.return,le)}}}else if(J.tag===6){if(Q===null)try{J.stateNode.nodeValue=z?"":J.memoizedProps}catch(le){at(n,n.return,le)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===n)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===n)break e;for(;J.sibling===null;){if(J.return===null||J.return===n)break e;Q===J&&(Q=null),J=J.return}Q===J&&(Q=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Ln(i,n),or(n),c&4&&Qm(n);break;case 21:break;default:Ln(i,n),or(n)}}function or(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(qm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(zi(d,""),c.flags&=-33);var f=Gm(n);Yh(n,f,d);break;case 3:case 4:var w=c.stateNode.containerInfo,S=Gm(n);Qh(n,S,w);break;default:throw Error(t(161))}}catch(P){at(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Uw(n,i,a){oe=n,Jm(n)}function Jm(n,i,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,f=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||vu;if(!w){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Mt;S=vu;var z=Mt;if(vu=w,(Mt=P)&&!z)for(oe=d;oe!==null;)w=oe,P=w.child,w.tag===22&&w.memoizedState!==null?eg(d):P!==null?(P.return=w,oe=P):eg(d);for(;f!==null;)oe=f,Jm(f),f=f.sibling;oe=d,vu=S,Mt=z}Xm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,oe=f):Xm(n)}}function Xm(n){for(;oe!==null;){var i=oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mt||wu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Vn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&Zp(i,f,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Zp(i,w,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var z=i.alternate;if(z!==null){var Q=z.memoizedState;if(Q!==null){var J=Q.dehydrated;J!==null&&ri(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&Kh(i)}catch(K){at(i,i.return,K)}}if(i===n){oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,oe=a;break}oe=i.return}}function Zm(n){for(;oe!==null;){var i=oe;if(i===n){oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,oe=a;break}oe=i.return}}function eg(n){for(;oe!==null;){var i=oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{wu(4,i)}catch(P){at(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){at(i,d,P)}}var f=i.return;try{Kh(i)}catch(P){at(i,f,P)}break;case 5:var w=i.return;try{Kh(i)}catch(P){at(i,w,P)}}}catch(P){at(i,i.return,P)}if(i===n){oe=null;break}var S=i.sibling;if(S!==null){S.return=i.return,oe=S;break}oe=i.return}}var zw=Math.ceil,Eu=xe.ReactCurrentDispatcher,Jh=xe.ReactCurrentOwner,In=xe.ReactCurrentBatchConfig,Me=0,It=null,mt=null,kt=0,fn=0,ho=li(0),wt=0,ka=null,ls=0,Tu=0,Xh=0,Pa=null,Xt=null,Zh=0,fo=1/0,Nr=null,Iu=!1,ed=null,pi=null,xu=!1,mi=null,Su=0,Na=0,td=null,Au=-1,Cu=0;function Wt(){return(Me&6)!==0?Qe():Au!==-1?Au:Au=Qe()}function gi(n){return(n.mode&1)===0?1:(Me&2)!==0&&kt!==0?kt&-kt:xw.transition!==null?(Cu===0&&(Cu=Xo()),Cu):(n=De,n!==0||(n=window.event,n=n===void 0?16:zs(n.type)),n)}function Mn(n,i,a,c){if(50<Na)throw Na=0,td=null,Error(t(185));Yi(n,a,c),((Me&2)===0||n!==It)&&(n===It&&((Me&2)===0&&(Tu|=a),wt===4&&yi(n,kt)),Zt(n,c),a===1&&Me===0&&(i.mode&1)===0&&(fo=Qe()+500,tu&&ci()))}function Zt(n,i){var a=n.callbackNode;Qi(n,i);var c=_r(n,n===It?kt:0);if(c===0)a!==null&&Vs(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Vs(a),i===1)n.tag===0?Iw(ng.bind(null,n)):zp(ng.bind(null,n)),vw(function(){(Me&6)===0&&ci()}),a=null;else{switch(Gn(c)){case 1:a=Os;break;case 4:a=Qo;break;case 16:a=Wi;break;case 536870912:a=Ls;break;default:a=Wi}a=cg(a,tg.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function tg(n,i){if(Au=-1,Cu=0,(Me&6)!==0)throw Error(t(327));var a=n.callbackNode;if(po()&&n.callbackNode!==a)return null;var c=_r(n,n===It?kt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Ru(n,c);else{i=c;var d=Me;Me|=2;var f=ig();(It!==n||kt!==i)&&(Nr=null,fo=Qe()+500,cs(n,i));do try{Hw();break}catch(S){rg(n,S)}while(!0);vh(),Eu.current=f,Me=d,mt!==null?i=0:(It=null,kt=0,i=wt)}if(i!==0){if(i===2&&(d=Jo(n),d!==0&&(c=d,i=nd(n,d))),i===1)throw a=ka,cs(n,0),yi(n,c),Zt(n,Qe()),a;if(i===6)yi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Bw(d)&&(i=Ru(n,c),i===2&&(f=Jo(n),f!==0&&(c=f,i=nd(n,f))),i===1))throw a=ka,cs(n,0),yi(n,c),Zt(n,Qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:hs(n,Xt,Nr);break;case 3:if(yi(n,c),(c&130023424)===c&&(i=Zh+500-Qe(),10<i)){if(_r(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Wt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=lh(hs.bind(null,n,Xt,Nr),i);break}hs(n,Xt,Nr);break;case 4:if(yi(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var w=31-on(c);f=1<<w,w=i[w],w>d&&(d=w),c&=~f}if(c=d,c=Qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*zw(c/1960))-c,10<c){n.timeoutHandle=lh(hs.bind(null,n,Xt,Nr),c);break}hs(n,Xt,Nr);break;case 5:hs(n,Xt,Nr);break;default:throw Error(t(329))}}}return Zt(n,Qe()),n.callbackNode===a?tg.bind(null,n):null}function nd(n,i){var a=Pa;return n.current.memoizedState.isDehydrated&&(cs(n,i).flags|=256),n=Ru(n,i),n!==2&&(i=Xt,Xt=a,i!==null&&rd(i)),n}function rd(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function Bw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!bn(f(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yi(n,i){for(i&=~Xh,i&=~Tu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-on(i),c=1<<a;n[a]=-1,i&=~c}}function ng(n){if((Me&6)!==0)throw Error(t(327));po();var i=_r(n,0);if((i&1)===0)return Zt(n,Qe()),null;var a=Ru(n,i);if(n.tag!==0&&a===2){var c=Jo(n);c!==0&&(i=c,a=nd(n,c))}if(a===1)throw a=ka,cs(n,0),yi(n,i),Zt(n,Qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,hs(n,Xt,Nr),Zt(n,Qe()),null}function id(n,i){var a=Me;Me|=1;try{return n(i)}finally{Me=a,Me===0&&(fo=Qe()+500,tu&&ci())}}function us(n){mi!==null&&mi.tag===0&&(Me&6)===0&&po();var i=Me;Me|=1;var a=In.transition,c=De;try{if(In.transition=null,De=1,n)return n()}finally{De=c,In.transition=a,Me=i,(Me&6)===0&&ci()}}function sd(){fn=ho.current,Je(ho)}function cs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,_w(a)),mt!==null)for(a=mt.return;a!==null;){var c=a;switch(ph(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Zl();break;case 3:lo(),Je(Qt),Je(Vt),Ch();break;case 5:Sh(c);break;case 4:lo();break;case 13:Je(rt);break;case 19:Je(rt);break;case 10:wh(c.type._context);break;case 22:case 23:sd()}a=a.return}if(It=n,mt=n=_i(n.current,null),kt=fn=i,wt=0,ka=null,Xh=Tu=ls=0,Xt=Pa=null,ss!==null){for(i=0;i<ss.length;i++)if(a=ss[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var w=f.next;f.next=d,c.next=w}a.pending=c}ss=null}return n}function rg(n,i){do{var a=mt;try{if(vh(),hu.current=mu,du){for(var c=it.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}du=!1}if(as=0,Tt=vt=it=null,Ia=!1,xa=0,Jh.current=null,a===null||a.return===null){wt=1,ka=i,mt=null;break}e:{var f=n,w=a.return,S=a,P=i;if(i=kt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,Q=S,J=Q.tag;if((Q.mode&1)===0&&(J===0||J===11||J===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ie=Rm(w);if(ie!==null){ie.flags&=-257,km(ie,w,S,f,i),ie.mode&1&&Cm(f,z,i),i=ie,P=z;var ae=i.updateQueue;if(ae===null){var le=new Set;le.add(P),i.updateQueue=le}else ae.add(P);break e}else{if((i&1)===0){Cm(f,z,i),od();break e}P=Error(t(426))}}else if(Ze&&S.mode&1){var ct=Rm(w);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),km(ct,w,S,f,i),yh(uo(P,S));break e}}f=P=uo(P,S),wt!==4&&(wt=2),Pa===null?Pa=[f]:Pa.push(f),f=w;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var L=Sm(f,P,i);Xp(f,L);break e;case 1:S=P;var V=f.type,j=f.stateNode;if((f.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(pi===null||!pi.has(j)))){f.flags|=65536,i&=-i,f.lanes|=i;var ee=Am(f,S,i);Xp(f,ee);break e}}f=f.return}while(f!==null)}og(a)}catch(ce){i=ce,mt===a&&a!==null&&(mt=a=a.return);continue}break}while(!0)}function ig(){var n=Eu.current;return Eu.current=mu,n===null?mu:n}function od(){(wt===0||wt===3||wt===2)&&(wt=4),It===null||(ls&268435455)===0&&(Tu&268435455)===0||yi(It,kt)}function Ru(n,i){var a=Me;Me|=2;var c=ig();(It!==n||kt!==i)&&(Nr=null,cs(n,i));do try{$w();break}catch(d){rg(n,d)}while(!0);if(vh(),Me=a,Eu.current=c,mt!==null)throw Error(t(261));return It=null,kt=0,wt}function $w(){for(;mt!==null;)sg(mt)}function Hw(){for(;mt!==null&&!Hi();)sg(mt)}function sg(n){var i=ug(n.alternate,n,fn);n.memoizedProps=n.pendingProps,i===null?og(n):mt=i,Jh.current=null}function og(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Lw(a,i,fn),a!==null){mt=a;return}}else{if(a=Mw(a,i),a!==null){a.flags&=32767,mt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{wt=6,mt=null;return}}if(i=i.sibling,i!==null){mt=i;return}mt=i=n}while(i!==null);wt===0&&(wt=5)}function hs(n,i,a){var c=De,d=In.transition;try{In.transition=null,De=1,Ww(n,i,a,c)}finally{In.transition=d,De=c}return null}function Ww(n,i,a,c){do po();while(mi!==null);if((Me&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(qc(n,f),n===It&&(mt=It=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||xu||(xu=!0,cg(Wi,function(){return po(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=In.transition,In.transition=null;var w=De;De=1;var S=Me;Me|=4,Jh.current=null,Fw(n,a),Ym(a,n),hw(oh),Er=!!sh,oh=sh=null,n.current=a,Uw(a),yr(),Me=S,De=w,In.transition=f}else n.current=a;if(xu&&(xu=!1,mi=n,Su=d),f=n.pendingLanes,f===0&&(pi=null),Ol(a.stateNode),Zt(n,Qe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Iu)throw Iu=!1,n=ed,ed=null,n;return(Su&1)!==0&&n.tag!==0&&po(),f=n.pendingLanes,(f&1)!==0?n===td?Na++:(Na=0,td=n):Na=0,ci(),null}function po(){if(mi!==null){var n=Gn(Su),i=In.transition,a=De;try{if(In.transition=null,De=16>n?16:n,mi===null)var c=!1;else{if(n=mi,mi=null,Su=0,(Me&6)!==0)throw Error(t(331));var d=Me;for(Me|=4,oe=n.current;oe!==null;){var f=oe,w=f.child;if((oe.flags&16)!==0){var S=f.deletions;if(S!==null){for(var P=0;P<S.length;P++){var z=S[P];for(oe=z;oe!==null;){var Q=oe;switch(Q.tag){case 0:case 11:case 15:Ra(8,Q,f)}var J=Q.child;if(J!==null)J.return=Q,oe=J;else for(;oe!==null;){Q=oe;var K=Q.sibling,ie=Q.return;if(Wm(Q),Q===z){oe=null;break}if(K!==null){K.return=ie,oe=K;break}oe=ie}}}var ae=f.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var ct=le.sibling;le.sibling=null,le=ct}while(le!==null)}}oe=f}}if((f.subtreeFlags&2064)!==0&&w!==null)w.return=f,oe=w;else e:for(;oe!==null;){if(f=oe,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Ra(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,oe=L;break e}oe=f.return}}var V=n.current;for(oe=V;oe!==null;){w=oe;var j=w.child;if((w.subtreeFlags&2064)!==0&&j!==null)j.return=w,oe=j;else e:for(w=V;oe!==null;){if(S=oe,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:wu(9,S)}}catch(ce){at(S,S.return,ce)}if(S===w){oe=null;break e}var ee=S.sibling;if(ee!==null){ee.return=S.return,oe=ee;break e}oe=S.return}}if(Me=d,ci(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(qi,n)}catch{}c=!0}return c}finally{De=a,In.transition=i}}return!1}function ag(n,i,a){i=uo(a,i),i=Sm(n,i,1),n=di(n,i,1),i=Wt(),n!==null&&(Yi(n,1,i),Zt(n,i))}function at(n,i,a){if(n.tag===3)ag(n,n,a);else for(;i!==null;){if(i.tag===3){ag(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(pi===null||!pi.has(c))){n=uo(a,n),n=Am(i,n,1),i=di(i,n,1),n=Wt(),i!==null&&(Yi(i,1,n),Zt(i,n));break}}i=i.return}}function qw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Wt(),n.pingedLanes|=n.suspendedLanes&a,It===n&&(kt&a)===a&&(wt===4||wt===3&&(kt&130023424)===kt&&500>Qe()-Zh?cs(n,0):Xh|=a),Zt(n,i)}function lg(n,i){i===0&&((n.mode&1)===0?i=1:(i=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var a=Wt();n=Rr(n,i),n!==null&&(Yi(n,i,a),Zt(n,a))}function Gw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),lg(n,a)}function Kw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),lg(n,a)}var ug;ug=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Qt.current)Jt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Jt=!1,Ow(n,i,a);Jt=(n.flags&131072)!==0}else Jt=!1,Ze&&(i.flags&1048576)!==0&&Bp(i,ru,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;_u(n,i),n=i.pendingProps;var d=to(i,Vt.current);ao(i,a),d=Ph(null,i,c,n,d,a);var f=Nh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Yt(c)?(f=!0,eu(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ih(i),d.updater=gu,i.stateNode=d,d._reactInternals=i,Mh(i,c,n,a),i=zh(null,i,c,!0,f,a)):(i.tag=0,Ze&&f&&fh(i),Ht(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(_u(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Yw(c),n=Vn(c,n),d){case 0:i=Uh(null,i,c,n,a);break e;case 1:i=Om(null,i,c,n,a);break e;case 11:i=Pm(null,i,c,n,a);break e;case 14:i=Nm(null,i,c,Vn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vn(c,d),Uh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vn(c,d),Om(n,i,c,d,a);case 3:e:{if(Lm(i),n===null)throw Error(t(387));c=i.pendingProps,f=i.memoizedState,d=f.element,Jp(n,i),uu(i,c,null,a);var w=i.memoizedState;if(c=w.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=uo(Error(t(423)),i),i=Mm(n,i,c,a,d);break e}else if(c!==d){d=uo(Error(t(424)),i),i=Mm(n,i,c,a,d);break e}else for(dn=ai(i.stateNode.containerInfo.firstChild),hn=i,Ze=!0,Dn=null,a=Qp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(io(),c===d){i=Pr(n,i,a);break e}Ht(n,i,c,a)}i=i.child}return i;case 5:return em(i),n===null&&gh(i),c=i.type,d=i.pendingProps,f=n!==null?n.memoizedProps:null,w=d.children,ah(c,d)?w=null:f!==null&&ah(c,f)&&(i.flags|=32),Vm(n,i),Ht(n,i,w,a),i.child;case 6:return n===null&&gh(i),null;case 13:return jm(n,i,a);case 4:return xh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=so(i,null,c,a):Ht(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vn(c,d),Pm(n,i,c,d,a);case 7:return Ht(n,i,i.pendingProps,a),i.child;case 8:return Ht(n,i,i.pendingProps.children,a),i.child;case 12:return Ht(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,f=i.memoizedProps,w=d.value,qe(ou,c._currentValue),c._currentValue=w,f!==null)if(bn(f.value,w)){if(f.children===d.children&&!Qt.current){i=Pr(n,i,a);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var S=f.dependencies;if(S!==null){w=f.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(f.tag===1){P=kr(-1,a&-a),P.tag=2;var z=f.updateQueue;if(z!==null){z=z.shared;var Q=z.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),z.pending=P}}f.lanes|=a,P=f.alternate,P!==null&&(P.lanes|=a),Eh(f.return,a,i),S.lanes|=a;break}P=P.next}}else if(f.tag===10)w=f.type===i.type?null:f.child;else if(f.tag===18){if(w=f.return,w===null)throw Error(t(341));w.lanes|=a,S=w.alternate,S!==null&&(S.lanes|=a),Eh(w,a,i),w=f.sibling}else w=f.child;if(w!==null)w.return=f;else for(w=f;w!==null;){if(w===i){w=null;break}if(f=w.sibling,f!==null){f.return=w.return,w=f;break}w=w.return}f=w}Ht(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,ao(i,a),d=En(d),c=c(d),i.flags|=1,Ht(n,i,c,a),i.child;case 14:return c=i.type,d=Vn(c,i.pendingProps),d=Vn(c.type,d),Nm(n,i,c,d,a);case 15:return bm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vn(c,d),_u(n,i),i.tag=1,Yt(c)?(n=!0,eu(i)):n=!1,ao(i,a),Im(i,c,d),Mh(i,c,d,a),zh(null,i,c,!0,n,a);case 19:return Um(n,i,a);case 22:return Dm(n,i,a)}throw Error(t(156,i.tag))};function cg(n,i){return Ko(n,i)}function Qw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(n,i,a,c){return new Qw(n,i,a,c)}function ad(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yw(n){if(typeof n=="function")return ad(n)?1:0;if(n!=null){if(n=n.$$typeof,n===b)return 11;if(n===nt)return 14}return 2}function _i(n,i){var a=n.alternate;return a===null?(a=xn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ku(n,i,a,c,d,f){var w=2;if(c=n,typeof n=="function")ad(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case D:return ds(a.children,d,f,i);case A:w=8,d|=8;break;case R:return n=xn(12,a,i,d|2),n.elementType=R,n.lanes=f,n;case x:return n=xn(13,a,i,d),n.elementType=x,n.lanes=f,n;case je:return n=xn(19,a,i,d),n.elementType=je,n.lanes=f,n;case Ve:return Pu(a,d,f,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:w=10;break e;case k:w=9;break e;case b:w=11;break e;case nt:w=14;break e;case st:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=xn(w,a,i,d),i.elementType=n,i.type=c,i.lanes=f,i}function ds(n,i,a,c){return n=xn(7,n,c,i),n.lanes=a,n}function Pu(n,i,a,c){return n=xn(22,n,c,i),n.elementType=Ve,n.lanes=a,n.stateNode={isHidden:!1},n}function ld(n,i,a){return n=xn(6,n,null,i),n.lanes=a,n}function ud(n,i,a){return i=xn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Jw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zo(0),this.expirationTimes=Zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function cd(n,i,a,c,d,f,w,S,P){return n=new Jw(n,i,a,S,P),i===1?(i=1,f===!0&&(i|=8)):i=0,f=xn(3,null,null,i),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ih(f),n}function Xw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function hg(n){if(!n)return ui;n=n._reactInternals;e:{if(Pn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Yt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Yt(a))return Fp(n,a,i)}return i}function dg(n,i,a,c,d,f,w,S,P){return n=cd(a,c,!0,n,d,f,w,S,P),n.context=hg(null),a=n.current,c=Wt(),d=gi(a),f=kr(c,d),f.callback=i??null,di(a,f,d),n.current.lanes=d,Yi(n,d,c),Zt(n,c),n}function Nu(n,i,a,c){var d=i.current,f=Wt(),w=gi(d);return a=hg(a),i.context===null?i.context=a:i.pendingContext=a,i=kr(f,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=di(d,i,w),n!==null&&(Mn(n,d,w,f),lu(n,d,w)),w}function bu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function fg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function hd(n,i){fg(n,i),(n=n.alternate)&&fg(n,i)}function Zw(){return null}var pg=typeof reportError=="function"?reportError:function(n){console.error(n)};function dd(n){this._internalRoot=n}Du.prototype.render=dd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Nu(n,i,null,null)},Du.prototype.unmount=dd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;us(function(){Nu(null,n,null,null)}),i[xr]=null}};function Du(n){this._internalRoot=n}Du.prototype.unstable_scheduleHydration=function(n){if(n){var i=ra();n={blockedOn:null,target:n,priority:i};for(var a=0;a<an.length&&i!==0&&i<an[a].priority;a++);an.splice(a,0,n),a===0&&Fs(n)}};function fd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Vu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function mg(){}function eE(n,i,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var z=bu(w);f.call(z)}}var w=dg(i,c,n,0,null,!1,!1,"",mg);return n._reactRootContainer=w,n[xr]=w.current,ma(n.nodeType===8?n.parentNode:n),us(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var z=bu(P);S.call(z)}}var P=cd(n,0,!1,null,null,!1,!1,"",mg);return n._reactRootContainer=P,n[xr]=P.current,ma(n.nodeType===8?n.parentNode:n),us(function(){Nu(i,P,a,c)}),P}function Ou(n,i,a,c,d){var f=a._reactRootContainer;if(f){var w=f;if(typeof d=="function"){var S=d;d=function(){var P=bu(w);S.call(P)}}Nu(i,w,n,d)}else w=eE(a,i,n,d,c);return bu(w)}ta=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ue(i.pendingLanes);a!==0&&(ea(i,a|1),Zt(i,Qe()),(Me&6)===0&&(fo=Qe()+500,ci()))}break;case 13:us(function(){var c=Rr(n,1);if(c!==null){var d=Wt();Mn(c,n,1,d)}}),hd(n,1)}},Ms=function(n){if(n.tag===13){var i=Rr(n,134217728);if(i!==null){var a=Wt();Mn(i,n,134217728,a)}hd(n,134217728)}},na=function(n){if(n.tag===13){var i=gi(n),a=Rr(n,i);if(a!==null){var c=Wt();Mn(a,n,i,c)}hd(n,i)}},ra=function(){return De},ia=function(n,i){var a=De;try{return De=n,i()}finally{De=a}},pr=function(n,i,a){switch(i){case"input":if(Ui(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Xl(c);if(!d)throw Error(t(90));Fo(c),Ui(c,d)}}}break;case"textarea":Il(n,a);break;case"select":i=a.value,i!=null&&Rn(n,!!a.multiple,i,!1)}},Al=id,Cl=us;var tE={usingClientEntryPoint:!1,Events:[_a,Zs,Xl,Yr,Jr,id]},ba={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nE={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Vl(n),n===null?null:n.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance||Zw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lu.isDisabled&&Lu.supportsFiber)try{qi=Lu.inject(nE),sn=Lu}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tE,en.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fd(i))throw Error(t(200));return Xw(n,i,null,a)},en.createRoot=function(n,i){if(!fd(n))throw Error(t(299));var a=!1,c="",d=pg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=cd(n,1,!1,null,null,a,!1,c,d),n[xr]=i.current,ma(n.nodeType===8?n.parentNode:n),new dd(i)},en.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Vl(i),n=n===null?null:n.stateNode,n},en.flushSync=function(n){return us(n)},en.hydrate=function(n,i,a){if(!Vu(i))throw Error(t(200));return Ou(null,n,i,!0,a)},en.hydrateRoot=function(n,i,a){if(!fd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",w=pg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=dg(i,null,n,1,a??null,d,!1,f,w),n[xr]=i.current,ma(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Du(i)},en.render=function(n,i,a){if(!Vu(i))throw Error(t(200));return Ou(null,n,i,!1,a)},en.unmountComponentAtNode=function(n){if(!Vu(n))throw Error(t(40));return n._reactRootContainer?(us(function(){Ou(null,null,n,!1,function(){n._reactRootContainer=null,n[xr]=null})}),!0):!1},en.unstable_batchedUpdates=id,en.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Vu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ou(n,i,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var Ig;function cE(){if(Ig)return gd.exports;Ig=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),gd.exports=uE(),gd.exports}var xg;function hE(){if(xg)return Mu;xg=1;var r=cE();return Mu.createRoot=r.createRoot,Mu.hydrateRoot=r.hydrateRoot,Mu}var dE=hE(),he=uf();/**
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
 */const fE=()=>{};var Sg={};/**
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
 */const s_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},pE=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],p=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},o_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,p=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=l>>2,I=(l&3)<<4|p>>4;let N=(p&15)<<2|_>>6,U=_&63;g||(U=64,h||(N=64)),s.push(t[E],t[I],t[N],t[U])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(s_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):pE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const I=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||p==null||_==null||I==null)throw new mE;const N=l<<2|p>>4;if(s.push(N),_!==64){const U=p<<4&240|_>>2;if(s.push(U),I!==64){const H=_<<6&192|I;s.push(H)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class mE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gE=function(r){const e=s_(r);return o_.encodeByteArray(e,!0)},rc=function(r){return gE(r).replace(/\./g,"")},a_=function(r){try{return o_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _E=()=>yE().__FIREBASE_DEFAULTS__,vE=()=>{if(typeof process>"u"||typeof Sg>"u")return;const r=Sg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},wE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&a_(r[1]);return e&&JSON.parse(e)},Tc=()=>{try{return fE()||_E()||vE()||wE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},l_=r=>{var e,t;return(t=(e=Tc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},EE=r=>{const e=l_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},u_=()=>{var r;return(r=Tc())==null?void 0:r.config},c_=r=>{var e;return(e=Tc())==null?void 0:e[`_${r}`]};/**
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
 */class TE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function IE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[rc(JSON.stringify(t)),rc(JSON.stringify(h)),""].join(".")}/**
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
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function SE(){var e;const r=(e=Tc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function RE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kE(){const r=Bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function PE(){return!SE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NE(){try{return typeof indexedDB=="object"}catch{return!1}}function bE(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const DE="FirebaseError";class Kt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=DE,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rl.prototype.create)}}class rl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?VE(l,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Kt(o,p,s)}}function VE(r,e){return r.replace(OE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const OE=/\{\$([^}]+)}/g;function LE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ys(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Ag(l)&&Ag(h)){if(!ys(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Ag(r){return r!==null&&typeof r=="object"}/**
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
 */function il(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function La(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ma(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function ME(r,e){const t=new jE(r,e);return t.subscribe.bind(t)}class jE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");FE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=vd),o.error===void 0&&(o.error=vd),o.complete===void 0&&(o.complete=vd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FE(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function vd(){}/**
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
 */function et(r){return r&&r._delegate?r._delegate:r}/**
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
 */function sl(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function h_(r){return(await fetch(r,{credentials:"include"})).ok}class _s{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fs="[DEFAULT]";/**
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
 */class UE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new TE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BE(e))try{this.getOrInitializeService({instanceIdentifier:fs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fs){return this.instances.has(e)}getOptions(e=fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(l);s===p&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fs){return this.component?this.component.multipleInstances?e:fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zE(r){return r===fs?void 0:r}function BE(r){return r.instantiationMode==="EAGER"}/**
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
 */class $E{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new UE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(be||(be={}));const HE={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},WE=be.INFO,qE={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},GE=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=qE[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cf{constructor(e){this.name=e,this._logLevel=WE,this._logHandler=GE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const KE=(r,e)=>e.some(t=>r instanceof t);let Cg,Rg;function QE(){return Cg||(Cg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YE(){return Rg||(Rg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d_=new WeakMap,Vd=new WeakMap,f_=new WeakMap,wd=new WeakMap,hf=new WeakMap;function JE(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(xi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&d_.set(t,r)}).catch(()=>{}),hf.set(e,r),e}function XE(r){if(Vd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Vd.set(r,e)}let Od={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Vd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||f_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ZE(r){Od=r(Od)}function eT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Ed(this),e,...t);return f_.set(s,e.sort?e.sort():[e]),xi(s)}:YE().includes(r)?function(...e){return r.apply(Ed(this),e),xi(d_.get(this))}:function(...e){return xi(r.apply(Ed(this),e))}}function tT(r){return typeof r=="function"?eT(r):(r instanceof IDBTransaction&&XE(r),KE(r,QE())?new Proxy(r,Od):r)}function xi(r){if(r instanceof IDBRequest)return JE(r);if(wd.has(r))return wd.get(r);const e=tT(r);return e!==r&&(wd.set(r,e),hf.set(e,r)),e}const Ed=r=>hf.get(r);function nT(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),p=xi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(xi(h.result),g.oldVersion,g.newVersion,xi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),p.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const rT=["get","getKey","getAll","getAllKeys","count"],iT=["put","add","delete","clear"],Td=new Map;function kg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Td.get(e))return Td.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=iT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||rT.includes(t)))return;const l=async function(h,...p){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(p.shift())),(await Promise.all([_[t](...p),o&&g.done]))[0]};return Td.set(e,l),l}ZE(r=>({...r,get:(e,t,s)=>kg(e,t)||r.get(e,t,s),has:(e,t)=>!!kg(e,t)||r.has(e,t)}));/**
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
 */class sT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(oT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function oT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ld="@firebase/app",Pg="0.14.12";/**
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
 */const jr=new cf("@firebase/app"),aT="@firebase/app-compat",lT="@firebase/analytics-compat",uT="@firebase/analytics",cT="@firebase/app-check-compat",hT="@firebase/app-check",dT="@firebase/auth",fT="@firebase/auth-compat",pT="@firebase/database",mT="@firebase/data-connect",gT="@firebase/database-compat",yT="@firebase/functions",_T="@firebase/functions-compat",vT="@firebase/installations",wT="@firebase/installations-compat",ET="@firebase/messaging",TT="@firebase/messaging-compat",IT="@firebase/performance",xT="@firebase/performance-compat",ST="@firebase/remote-config",AT="@firebase/remote-config-compat",CT="@firebase/storage",RT="@firebase/storage-compat",kT="@firebase/firestore",PT="@firebase/ai",NT="@firebase/firestore-compat",bT="firebase",DT="12.13.0";/**
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
 */const Md="[DEFAULT]",VT={[Ld]:"fire-core",[aT]:"fire-core-compat",[uT]:"fire-analytics",[lT]:"fire-analytics-compat",[hT]:"fire-app-check",[cT]:"fire-app-check-compat",[dT]:"fire-auth",[fT]:"fire-auth-compat",[pT]:"fire-rtdb",[mT]:"fire-data-connect",[gT]:"fire-rtdb-compat",[yT]:"fire-fn",[_T]:"fire-fn-compat",[vT]:"fire-iid",[wT]:"fire-iid-compat",[ET]:"fire-fcm",[TT]:"fire-fcm-compat",[IT]:"fire-perf",[xT]:"fire-perf-compat",[ST]:"fire-rc",[AT]:"fire-rc-compat",[CT]:"fire-gcs",[RT]:"fire-gcs-compat",[kT]:"fire-fst",[NT]:"fire-fst-compat",[PT]:"fire-vertex","fire-js":"fire-js",[bT]:"fire-js-all"};/**
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
 */const Ga=new Map,OT=new Map,jd=new Map;function Ng(r,e){try{r.container.addComponent(e)}catch(t){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function So(r){const e=r.name;if(jd.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;jd.set(e,r);for(const t of Ga.values())Ng(t,r);for(const t of OT.values())Ng(t,r);return!0}function df(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function pn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const LT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Si=new rl("app","Firebase",LT);/**
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
 */class MT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Si.create("app-deleted",{appName:this._name})}}/**
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
 */const bo=DT;function ff(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Md,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Si.create("bad-app-name",{appName:String(o)});if(t||(t=u_()),!t)throw Si.create("no-options");const l=Ga.get(o);if(l){if(ys(t,l.options)&&ys(s,l.config))return l;throw Si.create("duplicate-app",{appName:o})}const h=new $E(o);for(const g of jd.values())h.addComponent(g);const p=new MT(t,s,h);return Ga.set(o,p),p}function p_(r=Md){const e=Ga.get(r);if(!e&&r===Md&&u_())return ff();if(!e)throw Si.create("no-app",{appName:r});return e}function jT(){return Array.from(Ga.values())}function Ai(r,e,t){let s=VT[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(h.join(" "));return}So(new _s(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const FT="firebase-heartbeat-database",UT=1,Ka="firebase-heartbeat-store";let Id=null;function m_(){return Id||(Id=nT(FT,UT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ka)}catch(t){console.warn(t)}}}}).catch(r=>{throw Si.create("idb-open",{originalErrorMessage:r.message})})),Id}async function zT(r){try{const t=(await m_()).transaction(Ka),s=await t.objectStore(Ka).get(g_(r));return await t.done,s}catch(e){if(e instanceof Kt)jr.warn(e.message);else{const t=Si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(t.message)}}}async function bg(r,e){try{const s=(await m_()).transaction(Ka,"readwrite");await s.objectStore(Ka).put(e,g_(r)),await s.done}catch(t){if(t instanceof Kt)jr.warn(t.message);else{const s=Si.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jr.warn(s.message)}}}function g_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const BT=1024,$T=30;class HT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Dg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>$T){const h=GT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){jr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dg(),{heartbeatsToSend:s,unsentEntries:o}=WT(this._heartbeatsCache.heartbeats),l=rc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return jr.warn(t),""}}}function Dg(){return new Date().toISOString().substring(0,10)}function WT(r,e=BT){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Vg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Vg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class qT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NE()?bE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return bg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return bg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vg(r){return rc(JSON.stringify({version:2,heartbeats:r})).length}function GT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function KT(r){So(new _s("platform-logger",e=>new sT(e),"PRIVATE")),So(new _s("heartbeat",e=>new HT(e),"PRIVATE")),Ai(Ld,Pg,r),Ai(Ld,Pg,"esm2020"),Ai("fire-js","")}KT("");function y_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QT=y_,__=new rl("auth","Firebase",y_());/**
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
 */const ic=new cf("@firebase/auth");function YT(r,...e){ic.logLevel<=be.WARN&&ic.warn(`Auth (${bo}): ${r}`,...e)}function qu(r,...e){ic.logLevel<=be.ERROR&&ic.error(`Auth (${bo}): ${r}`,...e)}/**
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
 */function An(r,...e){throw mf(r,...e)}function Fn(r,...e){return mf(r,...e)}function pf(r,e,t){const s={...QT(),[e]:t};return new rl("auth","Firebase",s).create(e,{appName:r.name})}function Lr(r){return pf(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function JT(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&An(r,"argument-error"),pf(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return __.create(r,...e)}function ge(r,e,...t){if(!r)throw mf(e,...t)}function Dr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw qu(e),new Error(e)}function Fr(r,e){r||Dr(e)}/**
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
 */function Fd(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function XT(){return Og()==="http:"||Og()==="https:"}function Og(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function ZT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XT()||CE()||"connection"in navigator)?navigator.onLine:!0}function eI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ol{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fr(t>e,"Short delay should be less than long delay!"),this.isMobile=xE()||RE()}get(){return ZT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gf(r,e){Fr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class v_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rI=new ol(3e4,6e4);function Br(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Bn(r,e,t,s,o={}){return w_(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const p=il({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...l};return AE()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&sl(r.emulatorConfig.host)&&(_.credentials="include"),v_.fetch()(await E_(r,r.config.apiHost,t,p),_)})}async function w_(r,e,t){r._canInitEmulator=!1;const s={...tI,...e};try{const o=new sI(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw ju(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const p=l.ok?h.errorMessage:h.error.message,[g,_]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw ju(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw ju(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw ju(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw pf(r,E,_);An(r,E)}}catch(o){if(o instanceof Kt)throw o;An(r,"network-request-failed",{message:String(o)})}}async function al(r,e,t,s,o={}){const l=await Bn(r,e,t,s,o);return"mfaPendingCredential"in l&&An(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function E_(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?gf(r.config,o):`${r.config.apiScheme}://${o}`;return nI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function iI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Fn(this.auth,"network-request-failed")),rI.get())})}}function ju(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Fn(r,e,s);return o.customData._tokenResponse=t,o}function Lg(r){return r!==void 0&&r.enterprise!==void 0}class oI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return iI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function aI(r,e){return Bn(r,"GET","/v2/recaptchaConfig",Br(r,e))}/**
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
 */async function lI(r,e){return Bn(r,"POST","/v1/accounts:delete",e)}async function sc(r,e){return Bn(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ba(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uI(r,e=!1){const t=et(r),s=await t.getIdToken(e),o=yf(s);ge(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Ba(xd(o.auth_time)),issuedAtTime:Ba(xd(o.iat)),expirationTime:Ba(xd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function xd(r){return Number(r)*1e3}function yf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return qu("JWT malformed, contained fewer than 3 sections"),null;try{const o=a_(t);return o?JSON.parse(o):(qu("Failed to decode base64 JWT payload"),null)}catch(o){return qu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Mg(r){const e=yf(r);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vs(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Kt&&cI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function cI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class hI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ud{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ba(this.lastLoginAt),this.creationTime=Ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oc(r){var I;const e=r.auth,t=await r.getIdToken(),s=await vs(r,sc(e,{idToken:t}));ge(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const l=(I=o.providerUserInfo)!=null&&I.length?T_(o.providerUserInfo):[],h=fI(r.providerData,l),p=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=p?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Ud(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,E)}async function dI(r){const e=et(r);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function T_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function pI(r,e){const t=await w_(r,{},async()=>{const s=il({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await E_(r,o,"/v1/token",`key=${l}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:s};return r.emulatorConfig&&sl(r.emulatorConfig.host)&&(g.credentials="include"),v_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function mI(r,e){return Bn(r,"POST","/v2/accounts:revokeToken",Br(r,e))}/**
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
 */class vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=Mg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await pI(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new vo;return s&&(ge(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ge(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ge(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vo,this.toJSON())}_performRefresh(){return Dr("not implemented")}}/**
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
 */function wi(r,e){ge(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class jn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new hI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ud(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await vs(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uI(this,e)}reload(){return dI(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await oc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(Lr(this.auth));const e=await this.getIdToken();return await vs(this,lI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,p=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:I,emailVerified:N,isAnonymous:U,providerData:H,stsTokenManager:$}=t;ge(I&&$,e,"internal-error");const F=vo.fromJSON(this.name,$);ge(typeof I=="string",e,"internal-error"),wi(s,e.name),wi(o,e.name),ge(typeof N=="boolean",e,"internal-error"),ge(typeof U=="boolean",e,"internal-error"),wi(l,e.name),wi(h,e.name),wi(p,e.name),wi(g,e.name),wi(_,e.name),wi(E,e.name);const Y=new jn({uid:I,auth:e,email:o,emailVerified:N,displayName:s,isAnonymous:U,photoURL:h,phoneNumber:l,tenantId:p,stsTokenManager:F,createdAt:_,lastLoginAt:E});return H&&Array.isArray(H)&&(Y.providerData=H.map(Z=>({...Z}))),g&&(Y._redirectEventId=g),Y}static async _fromIdTokenResponse(e,t,s=!1){const o=new vo;o.updateFromServerResponse(t);const l=new jn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await oc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ge(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?T_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),p=new vo;p.updateFromIdToken(s);const g=new jn({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ud(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
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
 */const jg=new Map;function Vr(r){Fr(r instanceof Function,"Expected a class definition");let e=jg.get(r);return e?(Fr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,jg.set(r,e),e)}/**
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
 */class I_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}I_.type="NONE";const Fg=I_;/**
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
 */function Gu(r,e,t){return`firebase:${r}:${e}:${t}`}class wo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Gu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Gu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await sc(this.auth,{idToken:e}).catch(()=>{});return t?jn._fromGetAccountInfoResponse(this.auth,t,e):null}return jn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new wo(Vr(Fg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Vr(Fg);const h=Gu(s,e.config.apiKey,e.name);let p=null;for(const _ of t)try{const E=await _._get(h);if(E){let I;if(typeof E=="string"){const N=await sc(e,{idToken:E}).catch(()=>{});if(!N)break;I=await jn._fromGetAccountInfoResponse(e,N,E)}else I=jn._fromJSON(e,E);_!==l&&(p=I),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new wo(l,e,s):(l=g[0],p&&await l._set(h,p.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new wo(l,e,s))}}/**
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
 */function Ug(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(C_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(x_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(k_(e))return"Blackberry";if(P_(e))return"Webos";if(S_(e))return"Safari";if((e.includes("chrome/")||A_(e))&&!e.includes("edge/"))return"Chrome";if(R_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function x_(r=Bt()){return/firefox\//i.test(r)}function S_(r=Bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function A_(r=Bt()){return/crios\//i.test(r)}function C_(r=Bt()){return/iemobile/i.test(r)}function R_(r=Bt()){return/android/i.test(r)}function k_(r=Bt()){return/blackberry/i.test(r)}function P_(r=Bt()){return/webos/i.test(r)}function _f(r=Bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function gI(r=Bt()){var e;return _f(r)&&!!((e=window.navigator)!=null&&e.standalone)}function yI(){return kE()&&document.documentMode===10}function N_(r=Bt()){return _f(r)||R_(r)||P_(r)||k_(r)||/windows phone/i.test(r)||C_(r)}/**
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
 */function b_(r,e=[]){let t;switch(r){case"Browser":t=Ug(Bt());break;case"Worker":t=`${Ug(Bt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bo}/${s}`}/**
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
 */class _I{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,p)=>{try{const g=e(l);h(g)}catch(g){p(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function vI(r,e={}){return Bn(r,"GET","/v2/passwordPolicy",Br(r,e))}/**
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
 */const wI=6;class EI{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??wI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class TI{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zg(this),this.idTokenSubscription=new zg(this),this.beforeStateQueue=new _I(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=__,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await wo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sc(this,{idToken:e}),s=await jn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(pn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(l=this.redirectUser)==null?void 0:l._redirectEventId,p=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===p)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(Lr(this));const t=e?et(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(Lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(Lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vI(this),t=new EI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new rl("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await mI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vr(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await wo.create(this,[Vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(p,this,"internal-error"),p.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=b_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&YT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function $r(r){return et(r)}class zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=ME(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function II(r){Ic=r}function D_(r){return Ic.loadJS(r)}function xI(){return Ic.recaptchaEnterpriseScript}function SI(){return Ic.gapiScript}function AI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class CI{constructor(){this.enterprise=new RI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class RI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const kI="recaptcha-enterprise",V_="NO_RECAPTCHA";class PI{constructor(e){this.type=kI,this.auth=$r(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,p)=>{aI(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const _=new oI(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{p(g)})})}function o(l,h,p){const g=window.grecaptcha;Lg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(V_)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new CI().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(p=>{if(!t&&Lg(window.grecaptcha))o(p,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=xI();g.length!==0&&(g+=p),D_(g).then(()=>{o(p,l,h)}).catch(_=>{h(_)})}}).catch(p=>{h(p)})})}}async function Bg(r,e,t,s=!1,o=!1){const l=new PI(r);let h;if(o)h=V_;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const g=p.phoneEnrollmentInfo.phoneNumber,_=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const g=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function ac(r,e,t,s,o){var l;if((l=r._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Bg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await Bg(r,e,t,t==="getOobCode");return s(r,p)}else return Promise.reject(h)})}/**
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
 */function NI(r,e){const t=df(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ys(l,e??{}))return o;An(o,"already-initialized")}return t.initialize({options:e})}function bI(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Vr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function DI(r,e,t){const s=$r(r);ge(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=O_(e),{host:h,port:p}=VI(e),g=p===null?"":`:${p}`,_={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:p,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ge(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ge(ys(_,s.config.emulator)&&ys(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,sl(h)?h_(`${l}//${h}${g}`):OI()}function O_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function VI(r){const e=O_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:$g(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:$g(h)}}}function $g(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function OI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class vf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dr("not implemented")}_getIdTokenResponse(e){return Dr("not implemented")}_linkToIdToken(e,t){return Dr("not implemented")}_getReauthenticationResolver(e){return Dr("not implemented")}}async function LI(r,e){return Bn(r,"POST","/v1/accounts:update",e)}async function MI(r,e){return Bn(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function jI(r,e){return al(r,"POST","/v1/accounts:signInWithPassword",Br(r,e))}async function FI(r,e){return Bn(r,"POST","/v1/accounts:sendOobCode",Br(r,e))}async function UI(r,e){return FI(r,e)}/**
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
 */async function zI(r,e){return al(r,"POST","/v1/accounts:signInWithEmailLink",Br(r,e))}async function BI(r,e){return al(r,"POST","/v1/accounts:signInWithEmailLink",Br(r,e))}/**
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
 */class Qa extends vf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Qa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Qa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ac(e,t,"signInWithPassword",jI);case"emailLink":return zI(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ac(e,s,"signUpPassword",MI);case"emailLink":return BI(e,{idToken:t,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Eo(r,e){return al(r,"POST","/v1/accounts:signInWithIdp",Br(r,e))}/**
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
 */const $I="http://localhost";class ws extends vf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):An("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=t;if(!s||!o)return null;const h=new ws(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Eo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Eo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Eo(e,t)}buildRequest(){const e={requestUri:$I,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=il(t)}return e}}/**
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
 */function HI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WI(r){const e=La(Ma(r)).link,t=e?La(Ma(e)).deep_link_id:null,s=La(Ma(r)).deep_link_id;return(s?La(Ma(s)).link:null)||s||t||e||r}class wf{constructor(e){const t=La(Ma(e)),s=t.apiKey??null,o=t.oobCode??null,l=HI(t.mode??null);ge(s&&o&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=WI(e);try{return new wf(t)}catch{return null}}}/**
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
 */class Do{constructor(){this.providerId=Do.PROVIDER_ID}static credential(e,t){return Qa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=wf.parseLink(t);return ge(s,"argument-error"),Qa._fromEmailAndCode(e,s.code,s.tenantId)}}Do.PROVIDER_ID="password";Do.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Do.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ef{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ll extends Ef{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ei extends ll{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch{return null}}}Ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ei.PROVIDER_ID="facebook.com";/**
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
 */class br extends ll{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ws._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return br.credential(t,s)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
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
 */class Ti extends ll{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
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
 */class Ii extends ll{constructor(){super("twitter.com")}static credential(e,t){return ws._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ii.credential(t,s)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
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
 */async function qI(r,e){return al(r,"POST","/v1/accounts:signUp",Br(r,e))}/**
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
 */class Es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await jn._fromIdTokenResponse(e,s,o),h=Hg(s);return new Es({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Hg(s);return new Es({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Hg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class lc extends Kt{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,lc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new lc(e,t,s,o)}}function L_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?lc._fromErrorAndOperation(r,l,e,s):l})}async function GI(r,e,t=!1){const s=await vs(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Es._forOperation(r,"link",s)}/**
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
 */async function KI(r,e,t=!1){const{auth:s}=r;if(pn(s.app))return Promise.reject(Lr(s));const o="reauthenticate";try{const l=await vs(r,L_(s,o,e,r),t);ge(l.idToken,s,"internal-error");const h=yf(l.idToken);ge(h,s,"internal-error");const{sub:p}=h;return ge(r.uid===p,s,"user-mismatch"),Es._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&An(s,"user-mismatch"),l}}/**
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
 */async function M_(r,e,t=!1){if(pn(r.app))return Promise.reject(Lr(r));const s="signIn",o=await L_(r,s,e),l=await Es._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function QI(r,e){return M_($r(r),e)}/**
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
 */async function j_(r){const e=$r(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function YI(r,e,t){const s=$r(r);await ac(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",UI)}async function F_(r,e,t){if(pn(r.app))return Promise.reject(Lr(r));const s=$r(r),h=await ac(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qI).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&j_(r),g}),p=await Es._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function U_(r,e,t){return pn(r.app)?Promise.reject(Lr(r)):QI(et(r),Do.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&j_(r),s})}/**
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
 */async function JI(r,e){return Bn(r,"POST","/v1/accounts:update",e)}/**
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
 */async function z_(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=et(r),l={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await vs(s,JI(s.auth,l));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const p=s.providerData.find(({providerId:g})=>g==="password");p&&(p.displayName=s.displayName,p.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function XI(r,e){return ZI(et(r),null,e)}async function ZI(r,e,t){const{auth:s}=r,l={idToken:await r.getIdToken(),returnSecureToken:!0};t&&(l.password=t);const h=await vs(r,LI(s,l));await r._updateTokensIfNecessary(h,!0)}/**
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
 */function e1(r,e){return et(r).setPersistence(e)}function t1(r,e,t,s){return et(r).onIdTokenChanged(e,t,s)}function n1(r,e,t){return et(r).beforeAuthStateChanged(e,t)}function r1(r,e,t,s){return et(r).onAuthStateChanged(e,t,s)}function Tf(r){return et(r).signOut()}async function i1(r){return et(r).delete()}const uc="__sak";/**
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
 */class B_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(uc,"1"),this.storage.removeItem(uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const s1=1e3,o1=10;class $_ extends B_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=N_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);yI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,o1):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},s1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$_.type="LOCAL";const H_=$_;/**
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
 */class W_ extends B_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}W_.type="SESSION";const If=W_;/**
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
 */function a1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new xc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async _=>_(t.origin,l)),g=await a1(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xc.receivers=[];/**
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
 */function xf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class l1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((p,g)=>{const _=xf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(I){const N=I;if(N.data.eventId===_)switch(N.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),p(N.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function lr(){return window}function u1(r){lr().location.href=r}/**
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
 */function q_(){return typeof lr().WorkerGlobalScope<"u"&&typeof lr().importScripts=="function"}async function c1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function d1(){return q_()?self:null}/**
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
 */const G_="firebaseLocalStorageDb",f1=1,cc="firebaseLocalStorage",K_="fbase_key";class ul{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Sc(r,e){return r.transaction([cc],e?"readwrite":"readonly").objectStore(cc)}function p1(){const r=indexedDB.deleteDatabase(G_);return new ul(r).toPromise()}function zd(){const r=indexedDB.open(G_,f1);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(cc,{keyPath:K_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(cc)?e(s):(s.close(),await p1(),e(await zd()))})})}async function Wg(r,e,t){const s=Sc(r,!0).put({[K_]:e,value:t});return new ul(s).toPromise()}async function m1(r,e){const t=Sc(r,!1).get(e),s=await new ul(t).toPromise();return s===void 0?null:s.value}function qg(r,e){const t=Sc(r,!0).delete(e);return new ul(t).toPromise()}const g1=800,y1=3;class Q_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>y1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return q_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xc._getInstance(d1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await c1(),!this.activeServiceWorker)return;this.sender=new l1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zd();return await Wg(e,uc,"1"),await qg(e,uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Wg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>m1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Sc(o,!1).getAll();return new ul(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),g1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Q_.type="LOCAL";const _1=Q_;new ol(3e4,6e4);/**
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
 */function Y_(r,e){return e?Vr(e):(ge(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Sf extends vf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Eo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Eo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function v1(r){return M_(r.auth,new Sf(r),r.bypassAuthState)}function w1(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),KI(t,new Sf(r),r.bypassAuthState)}async function E1(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),GI(t,new Sf(r),r.bypassAuthState)}/**
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
 */class J_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:p}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return v1;case"linkViaPopup":case"linkViaRedirect":return E1;case"reauthViaPopup":case"reauthViaRedirect":return w1;default:An(this.auth,"internal-error")}}resolve(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const T1=new ol(2e3,1e4);async function I1(r,e,t){if(pn(r.app))return Promise.reject(Fn(r,"operation-not-supported-in-this-environment"));const s=$r(r);JT(r,e,Ef);const o=Y_(s,t);return new ps(s,"signInViaPopup",e,o).executeNotNull()}class ps extends J_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Fr(this.filter.length===1,"Popup operations only handle one event");const e=xf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,T1.get())};e()}}ps.currentPopupAction=null;/**
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
 */const x1="pendingRedirect",Ku=new Map;class S1 extends J_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ku.get(this.auth._key());if(!e){try{const s=await A1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ku.set(this.auth._key(),e)}return this.bypassAuthState||Ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A1(r,e){const t=k1(e),s=R1(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function C1(r,e){Ku.set(r._key(),e)}function R1(r){return Vr(r._redirectPersistence)}function k1(r){return Gu(x1,r.config.apiKey,r.name)}async function P1(r,e,t=!1){if(pn(r.app))return Promise.reject(Lr(r));const s=$r(r),o=Y_(s,e),h=await new S1(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const N1=600*1e3;class b1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!D1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!X_(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Fn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gg(e))}saveEventToCache(e){this.cachedEventUids.add(Gg(e)),this.lastProcessedEventTime=Date.now()}}function Gg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function X_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function D1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return X_(r);default:return!1}}/**
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
 */async function V1(r,e={}){return Bn(r,"GET","/v1/projects",e)}/**
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
 */const O1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,L1=/^https?/;async function M1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await V1(r);for(const t of e)try{if(j1(t))return}catch{}An(r,"unauthorized-domain")}function j1(r){const e=Fd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!L1.test(t))return!1;if(O1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const F1=new ol(3e4,6e4);function Kg(){const r=lr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function U1(r){return new Promise((e,t)=>{var o,l,h;function s(){Kg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kg(),t(Fn(r,"network-request-failed"))},timeout:F1.get()})}if((l=(o=lr().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((h=lr().gapi)!=null&&h.load)s();else{const p=AI("iframefcb");return lr()[p]=()=>{gapi.load?s():t(Fn(r,"network-request-failed"))},D_(`${SI()}?onload=${p}`).catch(g=>t(g))}}).catch(e=>{throw Qu=null,e})}let Qu=null;function z1(r){return Qu=Qu||U1(r),Qu}/**
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
 */const B1=new ol(5e3,15e3),$1="__/auth/iframe",H1="emulator/auth/iframe",W1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function G1(r){const e=r.config;ge(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?gf(e,H1):`https://${r.config.authDomain}/${$1}`,s={apiKey:e.apiKey,appName:r.name,v:bo},o=q1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${il(s).slice(1)}`}async function K1(r){const e=await z1(r),t=lr().gapi;return ge(t,r,"internal-error"),e.open({where:document.body,url:G1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:W1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=Fn(r,"network-request-failed"),p=lr().setTimeout(()=>{l(h)},B1.get());function g(){lr().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const Q1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y1=500,J1=600,X1="_blank",Z1="http://localhost";class Qg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ex(r,e,t,s=Y1,o=J1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g={...Q1,width:s.toString(),height:o.toString(),top:l,left:h},_=Bt().toLowerCase();t&&(p=A_(_)?X1:t),x_(_)&&(e=e||Z1,g.scrollbars="yes");const E=Object.entries(g).reduce((N,[U,H])=>`${N}${U}=${H},`,"");if(gI(_)&&p!=="_self")return tx(e||"",p),new Qg(null);const I=window.open(e||"",p,E);ge(I,r,"popup-blocked");try{I.focus()}catch{}return new Qg(I)}function tx(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const nx="__/auth/handler",rx="emulator/auth/handler",ix=encodeURIComponent("fac");async function Yg(r,e,t,s,o,l){ge(r.config.authDomain,r,"auth-domain-config-required"),ge(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:bo,eventId:o};if(e instanceof Ef){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",LE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,I]of Object.entries({}))h[E]=I}if(e instanceof ll){const E=e.getScopes().filter(I=>I!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const g=await r._getAppCheckToken(),_=g?`#${ix}=${encodeURIComponent(g)}`:"";return`${sx(r)}?${il(p).slice(1)}${_}`}function sx({config:r}){return r.emulator?gf(r,rx):`https://${r.authDomain}/${nx}`}/**
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
 */const Sd="webStorageSupport";class ox{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=If,this._completeRedirectFn=P1,this._overrideRedirectResult=C1}async _openPopup(e,t,s,o){var h;Fr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await Yg(e,t,s,Fd(),o);return ex(e,l,xf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Yg(e,t,s,Fd(),o);return u1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Fr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await K1(e),s=new b1(e);return t.register("authEvent",o=>(ge(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Sd,{type:Sd},o=>{var h;const l=(h=o==null?void 0:o[0])==null?void 0:h[Sd];l!==void 0&&t(!!l),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=M1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return N_()||S_()||_f()}}const ax=ox;var Jg="@firebase/auth",Xg="1.13.1";/**
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
 */class lx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ux(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cx(r){So(new _s("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;ge(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:b_(r)},_=new TI(s,o,l,g);return bI(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),So(new _s("auth-internal",e=>{const t=$r(e.getProvider("auth").getImmediate());return(s=>new lx(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ai(Jg,Xg,ux(r)),Ai(Jg,Xg,"esm2020")}/**
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
 */const hx=300,dx=c_("authIdTokenMaxAge")||hx;let Zg=null;const fx=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>dx)return;const o=t==null?void 0:t.token;Zg!==o&&(Zg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Z_(r=p_()){const e=df(r,"auth");if(e.isInitialized())return e.getImmediate();const t=NI(r,{popupRedirectResolver:ax,persistence:[_1,H_,If]}),s=c_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=fx(l.toString());n1(t,h,()=>h(t.currentUser)),t1(t,p=>h(p))}}const o=l_("auth");return o&&DI(t,`http://${o}`),t}function px(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}II({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=Fn("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",px().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cx("Browser");var mx="firebase",gx="12.13.0";/**
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
 */Ai(mx,gx,"app");var ey=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ci,ev;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,A){function R(){}R.prototype=A.prototype,D.F=A.prototype,D.prototype=new R,D.prototype.constructor=D,D.D=function(C,k,b){for(var x=Array(arguments.length-2),je=2;je<arguments.length;je++)x[je-2]=arguments[je];return A.prototype[k].apply(C,x)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,A,R){R||(R=0);const C=Array(16);if(typeof A=="string")for(var k=0;k<16;++k)C[k]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(k=0;k<16;++k)C[k]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=D.g[0],R=D.g[1],k=D.g[2];let b=D.g[3],x;x=A+(b^R&(k^b))+C[0]+3614090360&4294967295,A=R+(x<<7&4294967295|x>>>25),x=b+(k^A&(R^k))+C[1]+3905402710&4294967295,b=A+(x<<12&4294967295|x>>>20),x=k+(R^b&(A^R))+C[2]+606105819&4294967295,k=b+(x<<17&4294967295|x>>>15),x=R+(A^k&(b^A))+C[3]+3250441966&4294967295,R=k+(x<<22&4294967295|x>>>10),x=A+(b^R&(k^b))+C[4]+4118548399&4294967295,A=R+(x<<7&4294967295|x>>>25),x=b+(k^A&(R^k))+C[5]+1200080426&4294967295,b=A+(x<<12&4294967295|x>>>20),x=k+(R^b&(A^R))+C[6]+2821735955&4294967295,k=b+(x<<17&4294967295|x>>>15),x=R+(A^k&(b^A))+C[7]+4249261313&4294967295,R=k+(x<<22&4294967295|x>>>10),x=A+(b^R&(k^b))+C[8]+1770035416&4294967295,A=R+(x<<7&4294967295|x>>>25),x=b+(k^A&(R^k))+C[9]+2336552879&4294967295,b=A+(x<<12&4294967295|x>>>20),x=k+(R^b&(A^R))+C[10]+4294925233&4294967295,k=b+(x<<17&4294967295|x>>>15),x=R+(A^k&(b^A))+C[11]+2304563134&4294967295,R=k+(x<<22&4294967295|x>>>10),x=A+(b^R&(k^b))+C[12]+1804603682&4294967295,A=R+(x<<7&4294967295|x>>>25),x=b+(k^A&(R^k))+C[13]+4254626195&4294967295,b=A+(x<<12&4294967295|x>>>20),x=k+(R^b&(A^R))+C[14]+2792965006&4294967295,k=b+(x<<17&4294967295|x>>>15),x=R+(A^k&(b^A))+C[15]+1236535329&4294967295,R=k+(x<<22&4294967295|x>>>10),x=A+(k^b&(R^k))+C[1]+4129170786&4294967295,A=R+(x<<5&4294967295|x>>>27),x=b+(R^k&(A^R))+C[6]+3225465664&4294967295,b=A+(x<<9&4294967295|x>>>23),x=k+(A^R&(b^A))+C[11]+643717713&4294967295,k=b+(x<<14&4294967295|x>>>18),x=R+(b^A&(k^b))+C[0]+3921069994&4294967295,R=k+(x<<20&4294967295|x>>>12),x=A+(k^b&(R^k))+C[5]+3593408605&4294967295,A=R+(x<<5&4294967295|x>>>27),x=b+(R^k&(A^R))+C[10]+38016083&4294967295,b=A+(x<<9&4294967295|x>>>23),x=k+(A^R&(b^A))+C[15]+3634488961&4294967295,k=b+(x<<14&4294967295|x>>>18),x=R+(b^A&(k^b))+C[4]+3889429448&4294967295,R=k+(x<<20&4294967295|x>>>12),x=A+(k^b&(R^k))+C[9]+568446438&4294967295,A=R+(x<<5&4294967295|x>>>27),x=b+(R^k&(A^R))+C[14]+3275163606&4294967295,b=A+(x<<9&4294967295|x>>>23),x=k+(A^R&(b^A))+C[3]+4107603335&4294967295,k=b+(x<<14&4294967295|x>>>18),x=R+(b^A&(k^b))+C[8]+1163531501&4294967295,R=k+(x<<20&4294967295|x>>>12),x=A+(k^b&(R^k))+C[13]+2850285829&4294967295,A=R+(x<<5&4294967295|x>>>27),x=b+(R^k&(A^R))+C[2]+4243563512&4294967295,b=A+(x<<9&4294967295|x>>>23),x=k+(A^R&(b^A))+C[7]+1735328473&4294967295,k=b+(x<<14&4294967295|x>>>18),x=R+(b^A&(k^b))+C[12]+2368359562&4294967295,R=k+(x<<20&4294967295|x>>>12),x=A+(R^k^b)+C[5]+4294588738&4294967295,A=R+(x<<4&4294967295|x>>>28),x=b+(A^R^k)+C[8]+2272392833&4294967295,b=A+(x<<11&4294967295|x>>>21),x=k+(b^A^R)+C[11]+1839030562&4294967295,k=b+(x<<16&4294967295|x>>>16),x=R+(k^b^A)+C[14]+4259657740&4294967295,R=k+(x<<23&4294967295|x>>>9),x=A+(R^k^b)+C[1]+2763975236&4294967295,A=R+(x<<4&4294967295|x>>>28),x=b+(A^R^k)+C[4]+1272893353&4294967295,b=A+(x<<11&4294967295|x>>>21),x=k+(b^A^R)+C[7]+4139469664&4294967295,k=b+(x<<16&4294967295|x>>>16),x=R+(k^b^A)+C[10]+3200236656&4294967295,R=k+(x<<23&4294967295|x>>>9),x=A+(R^k^b)+C[13]+681279174&4294967295,A=R+(x<<4&4294967295|x>>>28),x=b+(A^R^k)+C[0]+3936430074&4294967295,b=A+(x<<11&4294967295|x>>>21),x=k+(b^A^R)+C[3]+3572445317&4294967295,k=b+(x<<16&4294967295|x>>>16),x=R+(k^b^A)+C[6]+76029189&4294967295,R=k+(x<<23&4294967295|x>>>9),x=A+(R^k^b)+C[9]+3654602809&4294967295,A=R+(x<<4&4294967295|x>>>28),x=b+(A^R^k)+C[12]+3873151461&4294967295,b=A+(x<<11&4294967295|x>>>21),x=k+(b^A^R)+C[15]+530742520&4294967295,k=b+(x<<16&4294967295|x>>>16),x=R+(k^b^A)+C[2]+3299628645&4294967295,R=k+(x<<23&4294967295|x>>>9),x=A+(k^(R|~b))+C[0]+4096336452&4294967295,A=R+(x<<6&4294967295|x>>>26),x=b+(R^(A|~k))+C[7]+1126891415&4294967295,b=A+(x<<10&4294967295|x>>>22),x=k+(A^(b|~R))+C[14]+2878612391&4294967295,k=b+(x<<15&4294967295|x>>>17),x=R+(b^(k|~A))+C[5]+4237533241&4294967295,R=k+(x<<21&4294967295|x>>>11),x=A+(k^(R|~b))+C[12]+1700485571&4294967295,A=R+(x<<6&4294967295|x>>>26),x=b+(R^(A|~k))+C[3]+2399980690&4294967295,b=A+(x<<10&4294967295|x>>>22),x=k+(A^(b|~R))+C[10]+4293915773&4294967295,k=b+(x<<15&4294967295|x>>>17),x=R+(b^(k|~A))+C[1]+2240044497&4294967295,R=k+(x<<21&4294967295|x>>>11),x=A+(k^(R|~b))+C[8]+1873313359&4294967295,A=R+(x<<6&4294967295|x>>>26),x=b+(R^(A|~k))+C[15]+4264355552&4294967295,b=A+(x<<10&4294967295|x>>>22),x=k+(A^(b|~R))+C[6]+2734768916&4294967295,k=b+(x<<15&4294967295|x>>>17),x=R+(b^(k|~A))+C[13]+1309151649&4294967295,R=k+(x<<21&4294967295|x>>>11),x=A+(k^(R|~b))+C[4]+4149444226&4294967295,A=R+(x<<6&4294967295|x>>>26),x=b+(R^(A|~k))+C[11]+3174756917&4294967295,b=A+(x<<10&4294967295|x>>>22),x=k+(A^(b|~R))+C[2]+718787259&4294967295,k=b+(x<<15&4294967295|x>>>17),x=R+(b^(k|~A))+C[9]+3951481745&4294967295,D.g[0]=D.g[0]+A&4294967295,D.g[1]=D.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,D.g[2]=D.g[2]+k&4294967295,D.g[3]=D.g[3]+b&4294967295}s.prototype.v=function(D,A){A===void 0&&(A=D.length);const R=A-this.blockSize,C=this.C;let k=this.h,b=0;for(;b<A;){if(k==0)for(;b<=R;)o(this,D,b),b+=this.blockSize;if(typeof D=="string"){for(;b<A;)if(C[k++]=D.charCodeAt(b++),k==this.blockSize){o(this,C),k=0;break}}else for(;b<A;)if(C[k++]=D[b++],k==this.blockSize){o(this,C),k=0;break}}this.h=k,this.o+=A},s.prototype.A=function(){var D=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);D[0]=128;for(var A=1;A<D.length-8;++A)D[A]=0;A=this.o*8;for(var R=D.length-8;R<D.length;++R)D[R]=A&255,A/=256;for(this.v(D),D=Array(16),A=0,R=0;R<4;++R)for(let C=0;C<32;C+=8)D[A++]=this.g[R]>>>C&255;return D};function l(D,A){var R=p;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=A(D)}function h(D,A){this.h=A;const R=[];let C=!0;for(let k=D.length-1;k>=0;k--){const b=D[k]|0;C&&b==A||(R[k]=b,C=!1)}this.g=R}var p={};function g(D){return-128<=D&&D<128?l(D,function(A){return new h([A|0],A<0?-1:0)}):new h([D|0],D<0?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return I;if(D<0)return F(_(-D));const A=[];let R=1;for(let C=0;D>=R;C++)A[C]=D/R|0,R*=4294967296;return new h(A,0)}function E(D,A){if(D.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(D.charAt(0)=="-")return F(E(D.substring(1),A));if(D.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(A,8));let C=I;for(let b=0;b<D.length;b+=8){var k=Math.min(8,D.length-b);const x=parseInt(D.substring(b,b+k),A);k<8?(k=_(Math.pow(A,k)),C=C.j(k).add(_(x))):(C=C.j(R),C=C.add(_(x)))}return C}var I=g(0),N=g(1),U=g(16777216);r=h.prototype,r.m=function(){if($(this))return-F(this).m();let D=0,A=1;for(let R=0;R<this.g.length;R++){const C=this.i(R);D+=(C>=0?C:4294967296+C)*A,A*=4294967296}return D},r.toString=function(D){if(D=D||10,D<2||36<D)throw Error("radix out of range: "+D);if(H(this))return"0";if($(this))return"-"+F(this).toString(D);const A=_(Math.pow(D,6));var R=this;let C="";for(;;){const k=xe(R,A).g;R=Y(R,k.j(A));let b=((R.g.length>0?R.g[0]:R.h)>>>0).toString(D);if(R=k,H(R))return b+C;for(;b.length<6;)b="0"+b;C=b+C}},r.i=function(D){return D<0?0:D<this.g.length?this.g[D]:this.h};function H(D){if(D.h!=0)return!1;for(let A=0;A<D.g.length;A++)if(D.g[A]!=0)return!1;return!0}function $(D){return D.h==-1}r.l=function(D){return D=Y(this,D),$(D)?-1:H(D)?0:1};function F(D){const A=D.g.length,R=[];for(let C=0;C<A;C++)R[C]=~D.g[C];return new h(R,~D.h).add(N)}r.abs=function(){return $(this)?F(this):this},r.add=function(D){const A=Math.max(this.g.length,D.g.length),R=[];let C=0;for(let k=0;k<=A;k++){let b=C+(this.i(k)&65535)+(D.i(k)&65535),x=(b>>>16)+(this.i(k)>>>16)+(D.i(k)>>>16);C=x>>>16,b&=65535,x&=65535,R[k]=x<<16|b}return new h(R,R[R.length-1]&-2147483648?-1:0)};function Y(D,A){return D.add(F(A))}r.j=function(D){if(H(this)||H(D))return I;if($(this))return $(D)?F(this).j(F(D)):F(F(this).j(D));if($(D))return F(this.j(F(D)));if(this.l(U)<0&&D.l(U)<0)return _(this.m()*D.m());const A=this.g.length+D.g.length,R=[];for(var C=0;C<2*A;C++)R[C]=0;for(C=0;C<this.g.length;C++)for(let k=0;k<D.g.length;k++){const b=this.i(C)>>>16,x=this.i(C)&65535,je=D.i(k)>>>16,nt=D.i(k)&65535;R[2*C+2*k]+=x*nt,Z(R,2*C+2*k),R[2*C+2*k+1]+=b*nt,Z(R,2*C+2*k+1),R[2*C+2*k+1]+=x*je,Z(R,2*C+2*k+1),R[2*C+2*k+2]+=b*je,Z(R,2*C+2*k+2)}for(D=0;D<A;D++)R[D]=R[2*D+1]<<16|R[2*D];for(D=A;D<2*A;D++)R[D]=0;return new h(R,0)};function Z(D,A){for(;(D[A]&65535)!=D[A];)D[A+1]+=D[A]>>>16,D[A]&=65535,A++}function me(D,A){this.g=D,this.h=A}function xe(D,A){if(H(A))throw Error("division by zero");if(H(D))return new me(I,I);if($(D))return A=xe(F(D),A),new me(F(A.g),F(A.h));if($(A))return A=xe(D,F(A)),new me(F(A.g),A.h);if(D.g.length>30){if($(D)||$(A))throw Error("slowDivide_ only works with positive integers.");for(var R=N,C=A;C.l(D)<=0;)R=Ae(R),C=Ae(C);var k=ke(R,1),b=ke(C,1);for(C=ke(C,2),R=ke(R,2);!H(C);){var x=b.add(C);x.l(D)<=0&&(k=k.add(R),b=x),C=ke(C,1),R=ke(R,1)}return A=Y(D,k.j(A)),new me(k,A)}for(k=I;D.l(A)>=0;){for(R=Math.max(1,Math.floor(D.m()/A.m())),C=Math.ceil(Math.log(R)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),b=_(R),x=b.j(A);$(x)||x.l(D)>0;)R-=C,b=_(R),x=b.j(A);H(b)&&(b=N),k=k.add(b),D=Y(D,x)}return new me(k,D)}r.B=function(D){return xe(this,D).h},r.and=function(D){const A=Math.max(this.g.length,D.g.length),R=[];for(let C=0;C<A;C++)R[C]=this.i(C)&D.i(C);return new h(R,this.h&D.h)},r.or=function(D){const A=Math.max(this.g.length,D.g.length),R=[];for(let C=0;C<A;C++)R[C]=this.i(C)|D.i(C);return new h(R,this.h|D.h)},r.xor=function(D){const A=Math.max(this.g.length,D.g.length),R=[];for(let C=0;C<A;C++)R[C]=this.i(C)^D.i(C);return new h(R,this.h^D.h)};function Ae(D){const A=D.g.length+1,R=[];for(let C=0;C<A;C++)R[C]=D.i(C)<<1|D.i(C-1)>>>31;return new h(R,D.h)}function ke(D,A){const R=A>>5;A%=32;const C=D.g.length-R,k=[];for(let b=0;b<C;b++)k[b]=A>0?D.i(b+R)>>>A|D.i(b+R+1)<<32-A:D.i(b+R);return new h(k,D.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,ev=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,Ci=h}).apply(typeof ey<"u"?ey:typeof self<"u"?self:typeof window<"u"?window:{});var Fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tv,ja,nv,Yu,Bd,rv,iv,sv;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fu=="object"&&Fu];for(var m=0;m<u.length;++m){var y=u[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,m){if(m)e:{var y=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var M=u[T];if(!(M in y))break e;y=y[M]}u=u[u.length-1],T=y[u],m=m(T),m!=T&&m!=null&&e(y,u,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(m){var y=[],T;for(T in m)Object.prototype.hasOwnProperty.call(m,T)&&y.push([T,m[T]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function p(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function g(u,m,y){return u.call.apply(u.bind,arguments)}function _(u,m,y){return _=g,_.apply(null,arguments)}function E(u,m){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function I(u,m){function y(){}y.prototype=m.prototype,u.Z=m.prototype,u.prototype=new y,u.prototype.constructor=u,u.Ob=function(T,M,B){for(var te=Array(arguments.length-2),we=2;we<arguments.length;we++)te[we-2]=arguments[we];return m.prototype[M].apply(T,te)}}var N=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function U(u){const m=u.length;if(m>0){const y=Array(m);for(let T=0;T<m;T++)y[T]=u[T];return y}return[]}function H(u,m){for(let T=1;T<arguments.length;T++){const M=arguments[T];var y=typeof M;if(y=y!="object"?y:M?Array.isArray(M)?"array":y:"null",y=="array"||y=="object"&&typeof M.length=="number"){y=u.length||0;const B=M.length||0;u.length=y+B;for(let te=0;te<B;te++)u[y+te]=M[te]}else u.push(M)}}class ${constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function F(u){h.setTimeout(()=>{throw u},0)}function Y(){var u=D;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Z{constructor(){this.h=this.g=null}add(m,y){const T=me.get();T.set(m,y),this.h?this.h.next=T:this.g=T,this.h=T}}var me=new $(()=>new xe,u=>u.reset());class xe{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,ke=!1,D=new Z,A=()=>{const u=Promise.resolve(void 0);Ae=()=>{u.then(R)}};function R(){for(var u;u=Y();){try{u.h.call(u.g)}catch(y){F(y)}var m=me;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}ke=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};h.addEventListener("test",y,m),h.removeEventListener("test",y,m)}catch{}return u})();function x(u){return/^[\s\xa0]*$/.test(u)}function je(u,m){k.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}I(je,k),je.prototype.init=function(u,m){const y=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(y=="mouseover"?m=u.fromElement:y=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&je.Z.h.call(this)},je.prototype.h=function(){je.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var nt="closure_listenable_"+(Math.random()*1e6|0),st=0;function Ve(u,m,y,T,M){this.listener=u,this.proxy=null,this.src=m,this.type=y,this.capture=!!T,this.ha=M,this.key=++st,this.da=this.fa=!1}function X(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ue(u,m,y){for(const T in u)m.call(y,u[T],T,u)}function se(u,m){for(const y in u)m.call(void 0,u[y],y,u)}function O(u){const m={};for(const y in u)m[y]=u[y];return m}const G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Te(u,m){let y,T;for(let M=1;M<arguments.length;M++){T=arguments[M];for(y in T)u[y]=T[y];for(let B=0;B<G.length;B++)y=G[B],Object.prototype.hasOwnProperty.call(T,y)&&(u[y]=T[y])}}function Ie(u){this.src=u,this.g={},this.h=0}Ie.prototype.add=function(u,m,y,T,M){const B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);const te=Ne(u,m,T,M);return te>-1?(m=u[te],y||(m.fa=!1)):(m=new Ve(m,this.src,B,!!T,M),m.fa=y,u.push(m)),m};function Pe(u,m){const y=m.type;if(y in u.g){var T=u.g[y],M=Array.prototype.indexOf.call(T,m,void 0),B;(B=M>=0)&&Array.prototype.splice.call(T,M,1),B&&(X(m),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Ne(u,m,y,T){for(let M=0;M<u.length;++M){const B=u[M];if(!B.da&&B.listener==m&&B.capture==!!y&&B.ha==T)return M}return-1}var ze="closure_lm_"+(Math.random()*1e6|0),Le={};function He(u,m,y,T,M){if(Array.isArray(m)){for(let B=0;B<m.length;B++)He(u,m[B],y,T,M);return null}return y=Uo(y),u&&u[nt]?u.J(m,y,p(T)?!!T.capture:!1,M):$t(u,m,y,!1,T,M)}function $t(u,m,y,T,M,B){if(!m)throw Error("Invalid event type");const te=p(M)?!!M.capture:!!M;let we=Rs(u);if(we||(u[ze]=we=new Ie(u)),y=we.add(m,y,T,te,B),y.proxy)return y;if(T=As(),y.proxy=T,T.src=u,T.listener=y,u.addEventListener)b||(M=te),M===void 0&&(M=!1),u.addEventListener(m.toString(),T,M);else if(u.attachEvent)u.attachEvent(Cs(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function As(){function u(y){return m.call(u.src,u.listener,y)}const m=Tl;return u}function Fo(u,m,y,T,M){if(Array.isArray(m))for(var B=0;B<m.length;B++)Fo(u,m[B],y,T,M);else T=p(T)?!!T.capture:!!T,y=Uo(y),u&&u[nt]?(u=u.i,B=String(m).toString(),B in u.g&&(m=u.g[B],y=Ne(m,y,T,M),y>-1&&(X(m[y]),Array.prototype.splice.call(m,y,1),m.length==0&&(delete u.g[B],u.h--)))):u&&(u=Rs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Ne(m,y,T,M)),(y=u>-1?m[u]:null)&&Hr(y))}function Hr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[nt])Pe(m.i,u);else{var y=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(y,T,u.capture):m.detachEvent?m.detachEvent(Cs(y),T):m.addListener&&m.removeListener&&m.removeListener(T),(y=Rs(m))?(Pe(y,u),y.h==0&&(y.src=null,m[ze]=null)):X(u)}}}function Cs(u){return u in Le?Le[u]:Le[u]="on"+u}function Tl(u,m){if(u.da)u=!0;else{m=new je(m,this);const y=u.listener,T=u.ha||u.src;u.fa&&Hr(u),u=y.call(T,m)}return u}function Rs(u){return u=u[ze],u instanceof Ie?u:null}var Ui="__closure_events_fn_"+(Math.random()*1e9>>>0);function Uo(u){return typeof u=="function"?u:(u[Ui]||(u[Ui]=function(m){return u.handleEvent(m)}),u[Ui])}function ft(){C.call(this),this.i=new Ie(this),this.M=this,this.G=null}I(ft,C),ft.prototype[nt]=!0,ft.prototype.removeEventListener=function(u,m,y,T){Fo(this,u,m,y,T)};function lt(u,m){var y,T=u.G;if(T)for(y=[];T;T=T.G)y.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new k(m,u);else if(m instanceof k)m.target=m.target||u;else{var M=m;m=new k(T,u),Te(m,M)}M=!0;let B,te;if(y)for(te=y.length-1;te>=0;te--)B=m.g=y[te],M=Rn(B,T,!0,m)&&M;if(B=m.g=u,M=Rn(B,T,!0,m)&&M,M=Rn(B,T,!1,m)&&M,y)for(te=0;te<y.length;te++)B=m.g=y[te],M=Rn(B,T,!1,m)&&M}ft.prototype.N=function(){if(ft.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const y=u.g[m];for(let T=0;T<y.length;T++)X(y[T]);delete u.g[m],u.h--}}this.G=null},ft.prototype.J=function(u,m,y,T){return this.i.add(String(u),m,!1,y,T)},ft.prototype.K=function(u,m,y,T){return this.i.add(String(u),m,!0,y,T)};function Rn(u,m,y,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let M=!0;for(let B=0;B<m.length;++B){const te=m[B];if(te&&!te.da&&te.capture==y){const we=te.listener,ut=te.ha||te.src;te.fa&&Pe(u.i,te),M=we.call(ut,T)!==!1&&M}}return M&&!T.defaultPrevented}function zo(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=_(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:h.setTimeout(u,m||0)}function Bo(u){u.g=zo(()=>{u.g=null,u.i&&(u.i=!1,Bo(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Il extends C{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Bo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(u){C.call(this),this.h=u,this.g={}}I(Wr,C);var $o=[];function ks(u){ue(u.g,function(m,y){this.g.hasOwnProperty(y)&&Hr(m)},u),u.g={}}Wr.prototype.N=function(){Wr.Z.N.call(this),ks(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qr=h.JSON.stringify,xl=h.JSON.parse,zi=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Gr(){}function Sl(){}var Kr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ps(){k.call(this,"d")}I(Ps,k);function Ho(){k.call(this,"c")}I(Ho,k);var kn={},Ns=null;function Qr(){return Ns=Ns||new ft}kn.Ia="serverreachability";function bs(u){k.call(this,kn.Ia,u)}I(bs,k);function pr(u){const m=Qr();lt(m,new bs(m))}kn.STAT_EVENT="statevent";function mr(u,m){k.call(this,kn.STAT_EVENT,u),this.stat=m}I(mr,k);function ot(u){const m=Qr();lt(m,new mr(m,u))}kn.Ja="timingevent";function Wo(u,m){k.call(this,kn.Ja,u),this.size=m}I(Wo,k);function Yr(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function Jr(){this.g=!0}Jr.prototype.ua=function(){this.g=!1};function Al(u,m,y,T,M,B){u.info(function(){if(u.g)if(B){var te="",we=B.split("&");for(let $e=0;$e<we.length;$e++){var ut=we[$e].split("=");if(ut.length>1){const pt=ut[0];ut=ut[1];const cn=pt.split("_");te=cn.length>=2&&cn[1]=="type"?te+(pt+"="+ut+"&"):te+(pt+"=redacted&")}}}else te=null;else te=B;return"XMLHTTP REQ ("+T+") [attempt "+M+"]: "+m+`
`+y+`
`+te})}function Cl(u,m,y,T,M,B,te){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+M+"]: "+m+`
`+y+`
`+B+" "+te})}function $n(u,m,y,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Bi(u,y)+(T?" "+T:"")})}function Rl(u,m){u.info(function(){return"TIMEOUT: "+m})}Jr.prototype.info=function(){};function Bi(u,m){if(!u.g)return m;if(!m)return null;try{const B=JSON.parse(m);if(B){for(u=0;u<B.length;u++)if(Array.isArray(B[u])){var y=B[u];if(!(y.length<2)){var T=y[1];if(Array.isArray(T)&&!(T.length<1)){var M=T[0];if(M!="noop"&&M!="stop"&&M!="close")for(let te=1;te<T.length;te++)T[te]=""}}}}return qr(B)}catch{return m}}var Xr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Zr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},kl;function gr(){}I(gr,Gr),gr.prototype.g=function(){return new XMLHttpRequest},kl=new gr;function Hn(u){return encodeURIComponent(String(u))}function Ds(u){var m=1;u=u.split(":");const y=[];for(;m>0&&u.length;)y.push(u.shift()),m--;return u.length&&y.push(u.join(":")),y}function yn(u,m,y,T){this.j=u,this.i=m,this.l=y,this.S=T||1,this.V=new Wr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Pl}function Pl(){this.i=null,this.g="",this.h=!1}var Nl={},qo={};function Pn(u,m,y){u.M=1,u.A=_r(_n(m)),u.u=y,u.R=!0,Go(u,null)}function Go(u,m){u.F=Date.now(),$i(u),u.B=_n(u.A);var y=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),ra(y.i,"t",T),u.C=0,y=u.j.L,u.h=new Pl,u.g=zl(u.j,y?m:null,!u.u),u.P>0&&(u.O=new Il(_(u.Y,u,u.g),u.P)),m=u.V,y=u.g,T=u.ba;var M="readystatechange";Array.isArray(M)||(M&&($o[0]=M.toString()),M=$o);for(let B=0;B<M.length;B++){const te=He(y,M[B],T||m.handleEvent,!1,m.h||m);if(!te)break;m.g[te.key]=te}m=u.J?O(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),pr(),Al(u.i,u.v,u.B,u.l,u.S,u.u)}yn.prototype.ba=function(u){u=u.target;const m=this.O;m&&Jn(u)==3?m.j():this.Y(u)},yn.prototype.Y=function(u){try{if(u==this.g)e:{const we=Jn(this.g),ut=this.g.ya(),$e=this.g.ca();if(!(we<3)&&(we!=3||this.g&&(this.h.h||this.g.la()||Fl(this.g)))){this.K||we!=4||ut==7||(ut==8||$e<=0?pr(3):pr(2)),Vs(this);var m=this.g.ca();this.X=m;var y=bl(this);if(this.o=m==200,Cl(this.i,this.v,this.B,this.l,this.S,we,m),this.o){if(this.U&&!this.L){t:{if(this.g){var T,M=this.g;if((T=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(T)){var B=T;break t}}B=null}if(u=B)$n(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qe(this,u);else{this.o=!1,this.m=3,ot(12),yr(this),Hi(this);break e}}if(this.R){u=!0;let pt;for(;!this.K&&this.C<y.length;)if(pt=Vl(this,y),pt==qo){we==4&&(this.m=4,ot(14),u=!1),$n(this.i,this.l,null,"[Incomplete Response]");break}else if(pt==Nl){this.m=4,ot(15),$n(this.i,this.l,y,"[Invalid Chunk]"),u=!1;break}else $n(this.i,this.l,pt,null),Qe(this,pt);if(Dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||y.length!=0||this.h.h||(this.m=1,ot(16),u=!1),this.o=this.o&&u,!u)$n(this.i,this.l,y,"[Invalid Chunked Response]"),yr(this),Hi(this);else if(y.length>0&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.aa&&!te.P&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Zi(te),te.P=!0,ot(11))}}else $n(this.i,this.l,y,null),Qe(this,y);we==4&&yr(this),this.o&&!this.K&&(we==4?Hs(this.j,this):(this.o=!1,$i(this)))}else sa(this.g),m==400&&y.indexOf("Unknown SID")>0?(this.m=3,ot(12)):(this.m=0,ot(13)),yr(this),Hi(this)}}}catch{}finally{}};function bl(u){if(!Dl(u))return u.g.la();const m=Fl(u.g);if(m==="")return"";let y="";const T=m.length,M=Jn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return yr(u),Hi(u),"";u.h.i=new h.TextDecoder}for(let B=0;B<T;B++)u.h.h=!0,y+=u.h.i.decode(m[B],{stream:!(M&&B==T-1)});return m.length=0,u.h.g+=y,u.C=0,u.h.g}function Dl(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Vl(u,m){var y=u.C,T=m.indexOf(`
`,y);return T==-1?qo:(y=Number(m.substring(y,T)),isNaN(y)?Nl:(T+=1,T+y>m.length?qo:(m=m.slice(T,T+y),u.C=T+y,m)))}yn.prototype.cancel=function(){this.K=!0,yr(this)};function $i(u){u.T=Date.now()+u.H,Ko(u,u.H)}function Ko(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Yr(_(u.aa,u),m)}function Vs(u){u.D&&(h.clearTimeout(u.D),u.D=null)}yn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Rl(this.i,this.B),this.M!=2&&(pr(),ot(17)),yr(this),this.m=2,Hi(this)):Ko(this,this.T-u)};function Hi(u){u.j.I==0||u.K||Hs(u.j,u)}function yr(u){Vs(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,ks(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Qe(u,m){try{var y=u.j;if(y.I!=0&&(y.g==u||Yo(y.h,u))){if(!u.L&&Yo(y.h,u)&&y.I==3){try{var T=y.Ba.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var M=T;if(M[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<u.F)$s(y),ln(y);else break e;er(y),ot(18)}}else y.xa=M[1],0<y.xa-y.K&&M[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Yr(_(y.Va,y),6e3));Wi(y.h)<=1&&y.ta&&(y.ta=void 0)}else un(y,11)}else if((u.L||y.g==u)&&$s(y),!x(m))for(M=y.Ba.g.parse(m),m=0;m<M.length;m++){let $e=M[m];const pt=$e[0];if(!(pt<=y.K))if(y.K=pt,$e=$e[1],y.I==2)if($e[0]=="c"){y.M=$e[1],y.ba=$e[2];const cn=$e[3];cn!=null&&(y.ka=cn,y.j.info("VER="+y.ka));const Ir=$e[4];Ir!=null&&(y.za=Ir,y.j.info("SVER="+y.za));const tr=$e[5];tr!=null&&typeof tr=="number"&&tr>0&&(T=1.5*tr,y.O=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const nr=u.g;if(nr){const Gs=nr.g?nr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gs){var B=T.h;B.g||Gs.indexOf("spdy")==-1&&Gs.indexOf("quic")==-1&&Gs.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Ls(B,B.h),B.h=null))}if(T.G){const la=nr.g?nr.g.getResponseHeader("X-HTTP-Session-Id"):null;la&&(T.wa=la,Ue(T.J,T.G,la))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-u.F,y.j.info("Handshake RTT: "+y.T+"ms")),T=y;var te=u;if(T.na=aa(T,T.L?T.ba:null,T.W),te.L){qi(T.h,te);var we=te,ut=T.O;ut&&(we.H=ut),we.D&&(Vs(we),$i(we)),T.g=te}else Dt(T);y.i.length>0&&Tr(y)}else $e[0]!="stop"&&$e[0]!="close"||un(y,7);else y.I==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?un(y,7):zs(y):$e[0]!="noop"&&y.l&&y.l.qa($e),y.A=0)}}pr(4)}catch{}}var Wc=class{constructor(u,m){this.g=u,this.map=m}};function Os(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Qo(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Wi(u){return u.h?1:u.g?u.g.size:0}function Yo(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Ls(u,m){u.g?u.g.add(m):u.h=m}function qi(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Os.prototype.cancel=function(){if(this.i=sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function sn(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const y of u.g.values())m=m.concat(y.G);return m}return U(u.i)}var Ol=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function on(u,m){if(u){u=u.split("&");for(let y=0;y<u.length;y++){const T=u[y].indexOf("=");let M,B=null;T>=0?(M=u[y].substring(0,T),B=u[y].substring(T+1)):M=u[y],m(M,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function Wn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof Wn?(this.l=u.l,Gi(this,u.j),this.o=u.o,this.g=u.g,qn(this,u.u),this.h=u.h,ei(this,ia(u.i)),this.m=u.m):u&&(m=String(u).match(Ol))?(this.l=!1,Gi(this,m[1]||"",!0),this.o=Ki(m[2]||""),this.g=Ki(m[3]||"",!0),qn(this,m[4]),this.h=Ki(m[5]||"",!0),ei(this,m[6]||"",!0),this.m=Ki(m[7]||"")):(this.l=!1,this.i=new De(null,this.l))}Wn.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(Qi(m,Xo,!0),":");var y=this.g;return(y||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Qi(m,Xo,!0),"@"),u.push(Hn(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&u.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Qi(y,y.charAt(0)=="/"?Yi:Zo,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Qi(y,ea)),u.join("")},Wn.prototype.resolve=function(u){const m=_n(this);let y=!!u.j;y?Gi(m,u.j):y=!!u.o,y?m.o=u.o:y=!!u.g,y?m.g=u.g:y=u.u!=null;var T=u.h;if(y)qn(m,u.u);else if(y=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var M=m.h.lastIndexOf("/");M!=-1&&(T=m.h.slice(0,M+1)+T)}if(M=T,M==".."||M==".")T="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){T=M.lastIndexOf("/",0)==0,M=M.split("/");const B=[];for(let te=0;te<M.length;){const we=M[te++];we=="."?T&&te==M.length&&B.push(""):we==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),T&&te==M.length&&B.push("")):(B.push(we),T=!0)}T=B.join("/")}else T=M}return y?m.h=T:y=u.i.toString()!=="",y?ei(m,ia(u.i)):y=!!u.m,y&&(m.m=u.m),m};function _n(u){return new Wn(u)}function Gi(u,m,y){u.j=y?Ki(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function qn(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function ei(u,m,y){m instanceof De?(u.i=m,js(u.i,u.l)):(y||(m=Qi(m,qc)),u.i=new De(m,u.l))}function Ue(u,m,y){u.i.set(m,y)}function _r(u){return Ue(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Ki(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Qi(u,m,y){return typeof u=="string"?(u=encodeURI(u).replace(m,Jo),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Jo(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Xo=/[#\/\?@]/g,Zo=/[#\?:]/g,Yi=/[#\?]/g,qc=/[#\?@]/g,ea=/#/g;function De(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Gn(u){u.g||(u.g=new Map,u.h=0,u.i&&on(u.i,function(m,y){u.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}r=De.prototype,r.add=function(u,m){Gn(this),this.i=null,u=Kn(this,u);let y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(m),this.h+=1,this};function ta(u,m){Gn(u),m=Kn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ms(u,m){return Gn(u),m=Kn(u,m),u.g.has(m)}r.forEach=function(u,m){Gn(this),this.g.forEach(function(y,T){y.forEach(function(M){u.call(m,M,T,this)},this)},this)};function na(u,m){Gn(u);let y=[];if(typeof m=="string")Ms(u,m)&&(y=y.concat(u.g.get(Kn(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)y=y.concat(u[m]);return y}r.set=function(u,m){return Gn(this),this.i=null,u=Kn(this,u),Ms(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=na(this,u),u.length>0?String(u[0]):m):m};function ra(u,m,y){ta(u,m),y.length>0&&(u.i=null,u.g.set(Kn(u,m),U(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let T=0;T<m.length;T++){var y=m[T];const M=Hn(y);y=na(this,y);for(let B=0;B<y.length;B++){let te=M;y[B]!==""&&(te+="="+Hn(y[B])),u.push(te)}}return this.i=u.join("&")};function ia(u){const m=new De;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function Kn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function js(u,m){m&&!u.j&&(Gn(u),u.i=null,u.g.forEach(function(y,T){const M=T.toLowerCase();T!=M&&(ta(this,T),ra(this,M,y))},u)),u.j=m}function Qn(u,m){const y=new Jr;if(h.Image){const T=new Image;T.onload=E(At,y,"TestLoadImage: loaded",!0,m,T),T.onerror=E(At,y,"TestLoadImage: error",!1,m,T),T.onabort=E(At,y,"TestLoadImage: abort",!1,m,T),T.ontimeout=E(At,y,"TestLoadImage: timeout",!1,m,T),h.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Yn(u,m){const y=new Jr,T=new AbortController,M=setTimeout(()=>{T.abort(),At(y,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(B=>{clearTimeout(M),B.ok?At(y,"TestPingServer: ok",!0,m):At(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),At(y,"TestPingServer: error",!1,m)})}function At(u,m,y,T,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),T(y)}catch{}}function Ji(){this.g=new zi}function vr(u){this.i=u.Sb||null,this.h=u.ab||!1}I(vr,Gr),vr.prototype.g=function(){return new an(this.i,this.h)};function an(u,m){ft.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(an,ft),r=an.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,Nn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||h).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ll(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ll(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?ti(this):Nn(this),this.readyState==3&&Ll(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,ti(this))},r.Na=function(u){this.g&&(this.response=u,ti(this))},r.ga=function(){this.g&&ti(this)};function ti(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Nn(u)}r.setRequestHeader=function(u,m){this.A.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=m.next();return u.join(`\r
`)};function Nn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(an.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ml(u){let m="";return ue(u,function(y,T){m+=T,m+=":",m+=y,m+=`\r
`}),m}function Fs(u,m,y){e:{for(T in y){var T=!1;break e}T=!0}T||(y=Ml(y),typeof u=="string"?y!=null&&Hn(y):Ue(u,m,y))}function We(u){ft.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(We,ft);var jl=/^https?$/i,Gc=["POST","PUT"];r=We.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,m,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():kl.g(),this.g.onreadystatechange=N(_(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){ni(this,B);return}if(u=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var M in T)y.set(M,T[M]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const B of T.keys())y.set(B,T.get(B));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),M=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(Gc,m,void 0)>=0)||T||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,te]of y)this.g.setRequestHeader(B,te);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(B){ni(this,B)}};function ni(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,ri(u),Er(u)}function ri(u){u.A||(u.A=!0,lt(u,"complete"),lt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,lt(this,"complete"),lt(this,"abort"),Er(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Er(this,!0)),We.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?wr(this):this.Xa())},r.Xa=function(){wr(this)};function wr(u){if(u.h&&typeof l<"u"){if(u.v&&Jn(u)==4)setTimeout(u.Ca.bind(u),0);else if(lt(u,"readystatechange"),Jn(u)==4){u.h=!1;try{const B=u.ca();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var y;if(!(y=m)){var T;if(T=B===0){let te=String(u.D).match(Ol)[1]||null;!te&&h.self&&h.self.location&&(te=h.self.location.protocol.slice(0,-1)),T=!jl.test(te?te.toLowerCase():"")}y=T}if(y)lt(u,"complete"),lt(u,"success");else{u.o=6;try{var M=Jn(u)>2?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.ca()+"]",ri(u)}}finally{Er(u)}}}}function Er(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const y=u.g;u.g=null,m||lt(u,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Jn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return Jn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),xl(m)}};function Fl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function sa(u){const m={};u=(u.g&&Jn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(x(u[T]))continue;var y=Ds(u[T]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=m[M]||[];m[M]=B,B.push(y)}se(m,function(T){return T.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||m}function Us(u){this.za=0,this.i=[],this.j=new Jr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Xn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Xn("baseRetryDelayMs",5e3,u),this.Za=Xn("retryDelaySeedMs",1e4,u),this.Ta=Xn("forwardChannelMaxRetries",2,u),this.va=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Os(u&&u.concurrentRequestLimit),this.Ba=new Ji,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Us.prototype,r.ka=8,r.I=1,r.connect=function(u,m,y,T){ot(0),this.W=u,this.H=m||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.J=aa(this,null,this.W),Tr(this)};function zs(u){if(Bs(u),u.I==3){var m=u.V++,y=_n(u.J);if(Ue(y,"SID",u.M),Ue(y,"RID",m),Ue(y,"TYPE","terminate"),Zn(u,y),m=new yn(u,u.j,m),m.M=2,m.A=_r(_n(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(m.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=m.A,y=!0),y||(m.g=zl(m.j,null),m.g.ea(m.A)),m.F=Date.now(),$i(m)}es(u)}function ln(u){u.g&&(Zi(u),u.g.cancel(),u.g=null)}function Bs(u){ln(u),u.v&&(h.clearTimeout(u.v),u.v=null),$s(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function Tr(u){if(!Qo(u.h)&&!u.m){u.m=!0;var m=u.Ea;Ae||A(),ke||(Ae(),ke=!0),D.add(m,u),u.D=0}}function Ul(u,m){return Wi(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Yr(_(u.Ea,u,m),Ws(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const M=new yn(this,this.j,u);let B=this.o;if(this.U&&(B?(B=O(B),Te(B,this.U)):B=this.U),this.u!==null||this.R||(M.J=B,B=null),this.S)e:{for(var m=0,y=0;y<this.i.length;y++){t:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,m>4096){m=y;break e}if(m===4096||y===this.i.length-1){m=y+1;break e}}m=1e3}else m=1e3;m=oa(this,M,m),y=_n(this.J),Ue(y,"RID",u),Ue(y,"CVER",22),this.G&&Ue(y,"X-HTTP-Session-Id",this.G),Zn(this,y),B&&(this.R?m="headers="+Hn(Ml(B))+"&"+m:this.u&&Fs(y,this.u,B)),Ls(this.h,M),this.Ra&&Ue(y,"TYPE","init"),this.S?(Ue(y,"$req",m),Ue(y,"SID","null"),M.U=!0,Pn(M,y,null)):Pn(M,y,m),this.I=2}}else this.I==3&&(u?Xi(this,u):this.i.length==0||Qo(this.h)||Xi(this))};function Xi(u,m){var y;m?y=m.l:y=u.V++;const T=_n(u.J);Ue(T,"SID",u.M),Ue(T,"RID",y),Ue(T,"AID",u.K),Zn(u,T),u.u&&u.o&&Fs(T,u.u,u.o),y=new yn(u,u.j,y,u.D+1),u.u===null&&(y.J=u.o),m&&(u.i=m.G.concat(u.i)),m=oa(u,y,1e3),y.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Ls(u.h,y),Pn(y,T,m)}function Zn(u,m){u.H&&ue(u.H,function(y,T){Ue(m,T,y)}),u.l&&ue({},function(y,T){Ue(m,T,y)})}function oa(u,m,y){y=Math.min(u.i.length,y);const T=u.l?_(u.l.Ka,u.l,u):null;e:{var M=u.i;let we=-1;for(;;){const ut=["count="+y];we==-1?y>0?(we=M[0].g,ut.push("ofs="+we)):we=0:ut.push("ofs="+we);let $e=!0;for(let pt=0;pt<y;pt++){var B=M[pt].g;const cn=M[pt].map;if(B-=we,B<0)we=Math.max(0,M[pt].g-100),$e=!1;else try{B="req"+B+"_"||"";try{var te=cn instanceof Map?cn:Object.entries(cn);for(const[Ir,tr]of te){let nr=tr;p(tr)&&(nr=qr(tr)),ut.push(B+Ir+"="+encodeURIComponent(nr))}}catch(Ir){throw ut.push(B+"type="+encodeURIComponent("_badmap")),Ir}}catch{T&&T(cn)}}if($e){te=ut.join("&");break e}}te=void 0}return u=u.i.splice(0,y),m.G=u,te}function Dt(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;Ae||A(),ke||(Ae(),ke=!0),D.add(m,u),u.A=0}}function er(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Yr(_(u.Da,u),Ws(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,ii(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Yr(_(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ot(10),ln(this),ii(this))};function Zi(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function ii(u){u.g=new yn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=_n(u.na);Ue(m,"RID","rpc"),Ue(m,"SID",u.M),Ue(m,"AID",u.K),Ue(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&Ue(m,"TO",u.ia),Ue(m,"TYPE","xmlhttp"),Zn(u,m),u.u&&u.o&&Fs(m,u.u,u.o),u.O&&(u.g.H=u.O);var y=u.g;u=u.ba,y.M=1,y.A=_r(_n(m)),y.u=null,y.R=!0,Go(y,u)}r.Va=function(){this.C!=null&&(this.C=null,ln(this),er(this),ot(19))};function $s(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Hs(u,m){var y=null;if(u.g==m){$s(u),Zi(u),u.g=null;var T=2}else if(Yo(u.h,m))y=m.G,qi(u.h,m),T=1;else return;if(u.I!=0){if(m.o)if(T==1){y=m.u?m.u.length:0,m=Date.now()-m.F;var M=u.D;T=Qr(),lt(T,new Wo(T,y)),Tr(u)}else Dt(u);else if(M=m.m,M==3||M==0&&m.X>0||!(T==1&&Ul(u,m)||T==2&&er(u)))switch(y&&y.length>0&&(m=u.h,m.i=m.i.concat(y)),M){case 1:un(u,5);break;case 4:un(u,10);break;case 3:un(u,6);break;default:un(u,2)}}}function Ws(u,m){let y=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(y*=2),y*m}function un(u,m){if(u.j.info("Error code "+m),m==2){var y=_(u.bb,u),T=u.Ua;const M=!T;T=new Wn(T||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Gi(T,"https"),_r(T),M?Qn(T.toString(),y):Yn(T.toString(),y)}else ot(2);u.I=0,u.l&&u.l.pa(m),es(u),Bs(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function es(u){if(u.I=0,u.ja=[],u.l){const m=sn(u.h);(m.length!=0||u.i.length!=0)&&(H(u.ja,m),H(u.ja,u.i),u.h.i.length=0,U(u.i),u.i.length=0),u.l.oa()}}function aa(u,m,y){var T=y instanceof Wn?_n(y):new Wn(y);if(T.g!="")m&&(T.g=m+"."+T.g),qn(T,T.u);else{var M=h.location;T=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;const B=new Wn(null);T&&Gi(B,T),m&&(B.g=m),M&&qn(B,M),y&&(B.h=y),T=B}return y=u.G,m=u.wa,y&&m&&Ue(T,y,m),Ue(T,"VER",u.ka),Zn(u,T),T}function zl(u,m,y){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new We(new vr({ab:y})):new We(u.ma),m.Fa(u.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bl(){}r=Bl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function qs(){}qs.prototype.g=function(u,m){return new Ct(u,m)};function Ct(u,m){ft.call(this),this.g=new Us(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!x(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!x(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new si(this)}I(Ct,ft),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){zs(this.g)},Ct.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.v&&(y={},y.__data__=qr(u),u=y);m.i.push(new Wc(m.Ya++,u)),m.I==3&&Tr(m)},Ct.prototype.N=function(){this.g.l=null,delete this.j,zs(this.g),delete this.g,Ct.Z.N.call(this)};function $l(u){Ps.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const y in m){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}I($l,Ps);function Hl(){Ho.call(this),this.status=1}I(Hl,Ho);function si(u){this.g=u}I(si,Bl),si.prototype.ra=function(){lt(this.g,"a")},si.prototype.qa=function(u){lt(this.g,new $l(u))},si.prototype.pa=function(u){lt(this.g,new Hl)},si.prototype.oa=function(){lt(this.g,"b")},qs.prototype.createWebChannel=qs.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,sv=function(){return new qs},iv=function(){return Qr()},rv=kn,Bd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Xr.NO_ERROR=0,Xr.TIMEOUT=8,Xr.HTTP_ERROR=6,Yu=Xr,Zr.COMPLETE="complete",nv=Zr,Sl.EventType=Kr,Kr.OPEN="a",Kr.CLOSE="b",Kr.ERROR="c",Kr.MESSAGE="d",ft.prototype.listen=ft.prototype.J,ja=Sl,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,tv=We}).apply(typeof Fu<"u"?Fu:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Ft=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
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
 */let Vo="12.13.0";function yx(r){Vo=r}/**
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
 */const Ts=new cf("@firebase/firestore");function mo(){return Ts.logLevel}function re(r,...e){if(Ts.logLevel<=be.DEBUG){const t=e.map(Af);Ts.debug(`Firestore (${Vo}): ${r}`,...t)}}function Ur(r,...e){if(Ts.logLevel<=be.ERROR){const t=e.map(Af);Ts.error(`Firestore (${Vo}): ${r}`,...t)}}function Is(r,...e){if(Ts.logLevel<=be.WARN){const t=e.map(Af);Ts.warn(`Firestore (${Vo}): ${r}`,...t)}}function Af(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function ye(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,ov(r,s,t)}function ov(r,e,t){let s=`FIRESTORE (${Vo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ur(s),new Error(s)}function Be(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||ov(e,o,s)}function Ee(r,e){return r}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Kt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class av{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _x{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class vx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class wx{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Mr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},p=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Mr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Be(typeof s.accessToken=="string",31837,{l:s}),new av(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class Ex{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Tx{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Ex(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ty{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ix{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,pn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Be(this.o===void 0,3512);const s=l=>{l.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ty(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ty(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function xx(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Cf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=xx(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Ce(r,e){return r<e?-1:r>e?1:0}function $d(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),l=e.charAt(s);if(o!==l)return Ad(o)===Ad(l)?Ce(o,l):Ad(o)?1:-1}return Ce(r.length,e.length)}const Sx=55296,Ax=57343;function Ad(r){const e=r.charCodeAt(0);return e>=Sx&&e<=Ax}function Ao(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
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
 */const ny="__name__";class ar{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ye(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ar?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=ar.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ce(e.length,t.length)}static compareSegments(e,t){const s=ar.isNumericId(e),o=ar.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?ar.extractNumericId(e).compare(ar.extractNumericId(t)):$d(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ci.fromString(e.substring(4,e.length-2))}}class Ge extends ar{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ne(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ge(t)}static emptyPath(){return new Ge([])}}const Cx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends ar{construct(e,t,s){return new Nt(e,t,s)}static isValidIdentifier(e){return Cx.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ny}static keyField(){return new Nt([ny])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ne(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ne(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ne(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(l(),o++)}if(l(),h)throw new ne(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ge.fromString(e))}static fromName(e){return new de(Ge.fromString(e).popFirst(5))}static empty(){return new de(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ge(e.slice()))}}/**
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
 */function lv(r,e,t){if(!t)throw new ne(W.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Rx(r,e,t,s){if(e===!0&&s===!0)throw new ne(W.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ry(r){if(!de.isDocumentKey(r))throw new ne(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function iy(r){if(de.isDocumentKey(r))throw new ne(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function uv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Ac(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ye(12329,{type:typeof r})}function Cn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ne(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ac(r);throw new ne(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function _t(r,e){const t={typeString:r};return e&&(t.value=e),t}function cl(r,e){if(!uv(r))throw new ne(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ne(W.INVALID_ARGUMENT,t);return!0}/**
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
 */const sy=-62135596800,oy=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*oy);return new Xe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<sy)throw new ne(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/oy}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cl(e,Xe._jsonSchema))return new Xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-sy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:_t("string",Xe._jsonSchemaVersion),seconds:_t("number"),nanoseconds:_t("number")};/**
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
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Xe(0,0))}static max(){return new ve(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ya=-1;function kx(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new Xe(t+1,0):new Xe(t,s));return new Pi(o,de.empty(),e)}function Px(r){return new Pi(r.readTime,r.key,Ya)}class Pi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Pi(ve.min(),de.empty(),Ya)}static max(){return new Pi(ve.max(),de.empty(),Ya)}}function Nx(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(r.documentKey,e.documentKey),t!==0?t:Ce(r.largestBatchId,e.largestBatchId))}/**
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
 */const bx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Oo(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==bx)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,s)=>{t(e)}))}static reject(e){return new q(((t,s)=>{s(e)}))}static waitFor(e){return new q(((t,s)=>{let o=0,l=0,h=!1;e.forEach((p=>{++o,p.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=q.resolve(!1);for(const s of e)t=t.next((o=>o?q.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new q(((s,o)=>{const l=e.length,h=new Array(l);let p=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((E=>{h[_]=E,++p,p===l&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new q(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function Vx(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Lo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Cc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Cc.ce=-1;/**
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
 */const Rf=-1;function Rc(r){return r==null}function hc(r){return r===0&&1/r==-1/0}function Ox(r){return typeof r=="number"&&Number.isInteger(r)&&!hc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const cv="";function Lx(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=ay(e)),e=Mx(r.get(t),e);return ay(e)}function Mx(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case cv:t+="";break;default:t+=l}}return t}function ay(r){return r+cv+""}/**
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
 */function ly(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Mi(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function hv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uu(this.root,e,this.comparator,!0)}}class Uu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Et{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uy(this.data.getIterator())}getIteratorFrom(e){return new uy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class uy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new mn([])}unionWith(e){let t=new Et(Nt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new mn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ao(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class dv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new dv("Invalid base64 string: "+l):l}})(e);return new bt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const jx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(r){if(Be(!!r,39018),typeof r=="string"){let e=0;const t=jx.exec(r);if(Be(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ht(r.seconds),nanos:ht(r.nanos)}}function ht(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function bi(r){return typeof r=="string"?bt.fromBase64String(r):bt.fromUint8Array(r)}/**
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
 */const fv="server_timestamp",pv="__type__",mv="__previous_value__",gv="__local_write_time__";function kf(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[pv])==null?void 0:s.stringValue)===fv}function kc(r){const e=r.mapValue.fields[mv];return kf(e)?kc(e):e}function Ja(r){const e=Ni(r.mapValue.fields[gv].timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class Fx{constructor(e,t,s,o,l,h,p,g,_,E,I){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=E,this.apiKey=I}}const dc="(default)";class Xa{constructor(e,t){this.projectId=e,this.database=t||dc}static empty(){return new Xa("","")}get isDefaultDatabase(){return this.database===dc}isEqual(e){return e instanceof Xa&&e.projectId===this.projectId&&e.database===this.database}}function Ux(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new ne(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xa(r.options.projectId,e)}/**
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
 */const yv="__type__",zx="__max__",zu={mapValue:{}},_v="__vector__",fc="value";function Di(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?kf(r)?4:$x(r)?9007199254740991:Bx(r)?10:11:ye(28295,{value:r})}function dr(r,e){if(r===e)return!0;const t=Di(r);if(t!==Di(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ja(r).isEqual(Ja(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ni(o.timestampValue),p=Ni(l.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return bi(o.bytesValue).isEqual(bi(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return ht(o.geoPointValue.latitude)===ht(l.geoPointValue.latitude)&&ht(o.geoPointValue.longitude)===ht(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ht(o.integerValue)===ht(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ht(o.doubleValue),p=ht(l.doubleValue);return h===p?hc(h)===hc(p):isNaN(h)&&isNaN(p)}return!1})(r,e);case 9:return Ao(r.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},p=l.mapValue.fields||{};if(ly(h)!==ly(p))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(p[g]===void 0||!dr(h[g],p[g])))return!1;return!0})(r,e);default:return ye(52216,{left:r})}}function Za(r,e){return(r.values||[]).find((t=>dr(t,e)))!==void 0}function Co(r,e){if(r===e)return 0;const t=Di(r),s=Di(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const p=ht(l.integerValue||l.doubleValue),g=ht(h.integerValue||h.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(r,e);case 3:return cy(r.timestampValue,e.timestampValue);case 4:return cy(Ja(r),Ja(e));case 5:return $d(r.stringValue,e.stringValue);case 6:return(function(l,h){const p=bi(l),g=bi(h);return p.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const p=l.split("/"),g=h.split("/");for(let _=0;_<p.length&&_<g.length;_++){const E=Ce(p[_],g[_]);if(E!==0)return E}return Ce(p.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const p=Ce(ht(l.latitude),ht(h.latitude));return p!==0?p:Ce(ht(l.longitude),ht(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return hy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var N,U,H,$;const p=l.fields||{},g=h.fields||{},_=(N=p[fc])==null?void 0:N.arrayValue,E=(U=g[fc])==null?void 0:U.arrayValue,I=Ce(((H=_==null?void 0:_.values)==null?void 0:H.length)||0,(($=E==null?void 0:E.values)==null?void 0:$.length)||0);return I!==0?I:hy(_,E)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===zu.mapValue&&h===zu.mapValue)return 0;if(l===zu.mapValue)return 1;if(h===zu.mapValue)return-1;const p=l.fields||{},g=Object.keys(p),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let I=0;I<g.length&&I<E.length;++I){const N=$d(g[I],E[I]);if(N!==0)return N;const U=Co(p[g[I]],_[E[I]]);if(U!==0)return U}return Ce(g.length,E.length)})(r.mapValue,e.mapValue);default:throw ye(23264,{he:t})}}function cy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ce(r,e);const t=Ni(r),s=Ni(e),o=Ce(t.seconds,s.seconds);return o!==0?o:Ce(t.nanos,s.nanos)}function hy(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Co(t[o],s[o]);if(l)return l}return Ce(t.length,s.length)}function Ro(r){return Hd(r)}function Hd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ni(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return bi(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return de.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Hd(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Hd(t.fields[h])}`;return o+"}"})(r.mapValue):ye(61005,{value:r})}function Ju(r){switch(Di(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=kc(r);return e?16+Ju(e):16;case 5:return 2*r.stringValue.length;case 6:return bi(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Ju(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Mi(s.fields,((l,h)=>{o+=l.length+Ju(h)})),o})(r.mapValue);default:throw ye(13486,{value:r})}}function dy(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Wd(r){return!!r&&"integerValue"in r}function Pf(r){return!!r&&"arrayValue"in r}function fy(r){return!!r&&"nullValue"in r}function py(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Xu(r){return!!r&&"mapValue"in r}function Bx(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[yv])==null?void 0:s.stringValue)===_v}function $a(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Mi(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=$a(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=$a(r.arrayValue.values[t]);return e}return{...r}}function $x(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===zx}/**
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
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Xu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$a(t)}setAll(e){let t=Nt.emptyPath(),s={},o=[];e.forEach(((h,p)=>{if(!t.isImmediateParentOf(p)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=$a(h):o.push(p.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Xu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Xu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Mi(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new nn($a(this.value))}}function vv(r){const e=[];return Mi(r.fields,((t,s)=>{const o=new Nt([t]);if(Xu(s)){const l=vv(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new mn(e)}/**
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
 */class zt{constructor(e,t,s,o,l,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=p}static newInvalidDocument(e){return new zt(e,0,ve.min(),ve.min(),ve.min(),nn.empty(),0)}static newFoundDocument(e,t,s,o){return new zt(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new zt(e,2,t,ve.min(),ve.min(),nn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,ve.min(),ve.min(),nn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pc{constructor(e,t){this.position=e,this.inclusive=t}}function my(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=Co(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function gy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!dr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class mc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Hx(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class wv{}class yt extends wv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new qx(e,t,s):t==="array-contains"?new Qx(e,s):t==="in"?new Yx(e,s):t==="not-in"?new Jx(e,s):t==="array-contains-any"?new Xx(e,s):new yt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Gx(e,s):new Kx(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Co(t,this.value)):t!==null&&Di(this.value)===Di(t)&&this.matchesComparison(Co(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zn extends wv{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new zn(e,t)}matches(e){return Ev(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ev(r){return r.op==="and"}function Tv(r){return Wx(r)&&Ev(r)}function Wx(r){for(const e of r.filters)if(e instanceof zn)return!1;return!0}function qd(r){if(r instanceof yt)return r.field.canonicalString()+r.op.toString()+Ro(r.value);if(Tv(r))return r.filters.map((e=>qd(e))).join(",");{const e=r.filters.map((t=>qd(t))).join(",");return`${r.op}(${e})`}}function Iv(r,e){return r instanceof yt?(function(s,o){return o instanceof yt&&s.op===o.op&&s.field.isEqual(o.field)&&dr(s.value,o.value)})(r,e):r instanceof zn?(function(s,o){return o instanceof zn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,p)=>l&&Iv(h,o.filters[p])),!0):!1})(r,e):void ye(19439)}function xv(r){return r instanceof yt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ro(t.value)}`})(r):r instanceof zn?(function(t){return t.op.toString()+" {"+t.getFilters().map(xv).join(" ,")+"}"})(r):"Filter"}class qx extends yt{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class Gx extends yt{constructor(e,t){super(e,"in",t),this.keys=Sv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Kx extends yt{constructor(e,t){super(e,"not-in",t),this.keys=Sv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Sv(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>de.fromName(s.referenceValue)))}class Qx extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Pf(t)&&Za(t.arrayValue,this.value)}}class Yx extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Za(this.value.arrayValue,t)}}class Jx extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Za(this.value.arrayValue,t)}}class Xx extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Pf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Za(this.value.arrayValue,s)))}}/**
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
 */class Zx{constructor(e,t=null,s=[],o=[],l=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=p,this.Te=null}}function yy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new Zx(r,e,t,s,o,l,h)}function Nf(r){const e=Ee(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>qd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Rc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Ro(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Ro(s))).join(",")),e.Te=t}return e.Te}function bf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Hx(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Iv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!gy(r.startAt,e.startAt)&&gy(r.endAt,e.endAt)}function Gd(r){return de.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class hl{constructor(e,t=null,s=[],o=[],l=null,h="F",p=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=p,this.endAt=g,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function eS(r,e,t,s,o,l,h,p){return new hl(r,e,t,s,o,l,h,p)}function Df(r){return new hl(r)}function _y(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function tS(r){return de.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Av(r){return r.collectionGroup!==null}function Ha(r){const e=Ee(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Et(Nt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(p=p.add(_.field))}))})),p})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new mc(l,s))})),t.has(Nt.keyField().canonicalString())||e.Ie.push(new mc(Nt.keyField(),s))}return e.Ie}function ur(r){const e=Ee(r);return e.Ee||(e.Ee=nS(e,Ha(r))),e.Ee}function nS(r,e){if(r.limitType==="F")return yy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new mc(o.field,l)}));const t=r.endAt?new pc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new pc(r.startAt.position,r.startAt.inclusive):null;return yy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Kd(r,e){const t=r.filters.concat([e]);return new hl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Qd(r,e,t){return new hl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Pc(r,e){return bf(ur(r),ur(e))&&r.limitType===e.limitType}function Cv(r){return`${Nf(ur(r))}|lt:${r.limitType}`}function go(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>xv(o))).join(", ")}]`),Rc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Ro(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Ro(o))).join(",")),`Target(${s})`})(ur(r))}; limitType=${r.limitType})`}function Nc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):de.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of Ha(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,p,g){const _=my(h,p,g);return h.inclusive?_<=0:_<0})(s.startAt,Ha(s),o)||s.endAt&&!(function(h,p,g){const _=my(h,p,g);return h.inclusive?_>=0:_>0})(s.endAt,Ha(s),o))})(r,e)}function rS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Rv(r){return(e,t)=>{let s=!1;for(const o of Ha(r)){const l=iS(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function iS(r,e,t){const s=r.field.isKeyField()?de.comparator(e.key,t.key):(function(l,h,p){const g=h.data.field(l),_=p.data.field(l);return g!==null&&_!==null?Co(g,_):ye(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ye(19790,{direction:r.dir})}}/**
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
 */class xs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Mi(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return hv(this.inner)}size(){return this.innerSize}}/**
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
 */const sS=new tt(de.comparator);function zr(){return sS}const kv=new tt(de.comparator);function Fa(...r){let e=kv;for(const t of r)e=e.insert(t.key,t);return e}function Pv(r){let e=kv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ms(){return Wa()}function Nv(){return Wa()}function Wa(){return new xs((r=>r.toString()),((r,e)=>r.isEqual(e)))}const oS=new tt(de.comparator),aS=new Et(de.comparator);function Re(...r){let e=aS;for(const t of r)e=e.add(t);return e}const lS=new Et(Ce);function uS(){return lS}/**
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
 */function Vf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hc(e)?"-0":e}}function bv(r){return{integerValue:""+r}}function cS(r,e){return Ox(e)?bv(e):Vf(r,e)}/**
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
 */class bc{constructor(){this._=void 0}}function hS(r,e,t){return r instanceof el?(function(o,l){const h={fields:{[pv]:{stringValue:fv},[gv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&kf(l)&&(l=kc(l)),l&&(h.fields[mv]=l),{mapValue:h}})(t,e):r instanceof tl?Vv(r,e):r instanceof nl?Ov(r,e):(function(o,l){const h=Dv(o,l),p=vy(h)+vy(o.Ae);return Wd(h)&&Wd(o.Ae)?bv(p):Vf(o.serializer,p)})(r,e)}function dS(r,e,t){return r instanceof tl?Vv(r,e):r instanceof nl?Ov(r,e):t}function Dv(r,e){return r instanceof gc?(function(s){return Wd(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class el extends bc{}class tl extends bc{constructor(e){super(),this.elements=e}}function Vv(r,e){const t=Lv(e);for(const s of r.elements)t.some((o=>dr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class nl extends bc{constructor(e){super(),this.elements=e}}function Ov(r,e){let t=Lv(e);for(const s of r.elements)t=t.filter((o=>!dr(o,s)));return{arrayValue:{values:t}}}class gc extends bc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function vy(r){return ht(r.integerValue||r.doubleValue)}function Lv(r){return Pf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class fS{constructor(e,t){this.field=e,this.transform=t}}function pS(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof tl&&o instanceof tl||s instanceof nl&&o instanceof nl?Ao(s.elements,o.elements,dr):s instanceof gc&&o instanceof gc?dr(s.Ae,o.Ae):s instanceof el&&o instanceof el})(r.transform,e.transform)}class mS{constructor(e,t){this.version=e,this.transformResults=t}}class Gt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Dc{}function Mv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Vc(r.key,Gt.none()):new dl(r.key,r.data,Gt.none());{const t=r.data,s=nn.empty();let o=new Et(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new ji(r.key,s,new mn(o.toArray()),Gt.none())}}function gS(r,e,t){r instanceof dl?(function(o,l,h){const p=o.value.clone(),g=Ey(o.fieldTransforms,l,h.transformResults);p.setAll(g),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()})(r,e,t):r instanceof ji?(function(o,l,h){if(!Zu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const p=Ey(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(jv(o)),g.setAll(p),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function qa(r,e,t,s){return r instanceof dl?(function(l,h,p,g){if(!Zu(l.precondition,h))return p;const _=l.value.clone(),E=Ty(l.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof ji?(function(l,h,p,g){if(!Zu(l.precondition,h))return p;const _=Ty(l.fieldTransforms,g,h),E=h.data;return E.setAll(jv(l)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),p===null?null:p.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((I=>I.field)))})(r,e,t,s):(function(l,h,p){return Zu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p})(r,e,t)}function yS(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=Dv(s.transform,o||null);l!=null&&(t===null&&(t=nn.empty()),t.set(s.field,l))}return t||null}function wy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ao(s,o,((l,h)=>pS(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class dl extends Dc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ji extends Dc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function jv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Ey(r,e,t){const s=new Map;Be(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,p=e.data.field(l.field);s.set(l.field,dS(h,p,t[o]))}return s}function Ty(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,hS(l,h,e))}return s}class Vc extends Dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _S extends Dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&gS(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=qa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=qa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Nv();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let p=this.applyToLocalView(h,l.mutatedFields);p=t.has(o.key)?null:p;const g=Mv(h,p);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ve.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Re())}isEqual(e){return this.batchId===e.batchId&&Ao(this.mutations,e.mutations,((t,s)=>wy(t,s)))&&Ao(this.baseMutations,e.baseMutations,((t,s)=>wy(t,s)))}}class Of{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Be(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return oS})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Of(e,t,s,o)}}/**
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
 */class wS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ES{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var gt,Oe;function TS(r){switch(r){case W.OK:return ye(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return ye(15467,{code:r})}}function Fv(r){if(r===void 0)return Ur("GRPC error has no .code"),W.UNKNOWN;switch(r){case gt.OK:return W.OK;case gt.CANCELLED:return W.CANCELLED;case gt.UNKNOWN:return W.UNKNOWN;case gt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case gt.INTERNAL:return W.INTERNAL;case gt.UNAVAILABLE:return W.UNAVAILABLE;case gt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case gt.NOT_FOUND:return W.NOT_FOUND;case gt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case gt.ABORTED:return W.ABORTED;case gt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case gt.DATA_LOSS:return W.DATA_LOSS;default:return ye(39323,{code:r})}}(Oe=gt||(gt={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function IS(){return new TextEncoder}/**
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
 */const xS=new Ci([4294967295,4294967295],0);function Iy(r){const e=IS().encode(r),t=new ev;return t.update(e),new Uint8Array(t.digest())}function xy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ci([t,s],0),new Ci([o,l],0)]}class Lf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ua(`Invalid padding: ${t}`);if(s<0)throw new Ua(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ua(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ua(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ci.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Ci.fromNumber(s)));return o.compare(xS)===1&&(o=new Ci([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Iy(e),[s,o]=xy(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Lf(l,o,t);return s.forEach((p=>h.insert(p))),h}insert(e){if(this.ge===0)return;const t=Iy(e),[s,o]=xy(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ua extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fl{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,pl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new fl(ve.min(),o,new tt(Ce),zr(),Re())}}class pl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new pl(s,t,Re(),Re(),Re())}}/**
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
 */class ec{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Uv{constructor(e,t){this.targetId=e,this.Ce=t}}class zv{constructor(e,t,s=bt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Sy{constructor(){this.ve=0,this.Fe=Ay(),this.Me=bt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Re(),t=Re(),s=Re();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ye(38017,{changeType:l})}})),new pl(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=Ay()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Be(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class SS{constructor(e){this.Ge=e,this.ze=new Map,this.je=zr(),this.Je=Bu(),this.He=Bu(),this.Ze=new tt(Ce)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(Gd(l))if(s===0){const h=new de(l.path);this.et(t,h,zt.newNoDocument(h,ve.min()))}else Be(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const p=this.ut(e),g=p?this.ct(p,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,p;try{h=bi(s).toUint8Array()}catch(g){if(g instanceof dv)return Is("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new Lf(h,o,l)}catch(g){return Is(g instanceof Ua?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.ge===0?null:p}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.Ge.ht(),p=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(p)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const p=this.ot(h);if(p){if(l.current&&Gd(p.target)){const g=new de(p.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,zt.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.Ke())}}));let s=Re();this.He.forEach(((l,h)=>{let p=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new fl(e,t,this.Ze,this.je,s);return this.je=zr(),this.Je=Bu(),this.He=Bu(),this.Ze=new tt(Ce),o}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Sy,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new Et(Ce),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Et(Ce),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Sy),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Bu(){return new tt(de.comparator)}function Ay(){return new tt(de.comparator)}const AS={asc:"ASCENDING",desc:"DESCENDING"},CS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RS={and:"AND",or:"OR"};class kS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yd(r,e){return r.useProto3Json||Rc(e)?e:{value:e}}function yc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function PS(r,e){return yc(r,e.toTimestamp())}function cr(r){return Be(!!r,49232),ve.fromTimestamp((function(t){const s=Ni(t);return new Xe(s.seconds,s.nanos)})(r))}function Mf(r,e){return Jd(r,e).canonicalString()}function Jd(r,e){const t=(function(o){return new Ge(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function $v(r){const e=Ge.fromString(r);return Be(Kv(e),10190,{key:e.toString()}),e}function Xd(r,e){return Mf(r.databaseId,e.path)}function Cd(r,e){const t=$v(e);if(t.get(1)!==r.databaseId.projectId)throw new ne(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ne(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new de(Wv(t))}function Hv(r,e){return Mf(r.databaseId,e)}function NS(r){const e=$v(r);return e.length===4?Ge.emptyPath():Wv(e)}function Zd(r){return new Ge(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Wv(r){return Be(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Cy(r,e,t){return{name:Xd(r,e),fields:t.value.mapValue.fields}}function bS(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ye(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,E){return _.useProto3Json?(Be(E===void 0||typeof E=="string",58123),bt.fromBase64String(E||"")):(Be(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),bt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&(function(_){const E=_.code===void 0?W.UNKNOWN:Fv(_.code);return new ne(E,_.message||"")})(h);t=new zv(s,o,l,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Cd(r,s.document.name),l=cr(s.document.updateTime),h=s.document.createTime?cr(s.document.createTime):ve.min(),p=new nn({mapValue:{fields:s.document.fields}}),g=zt.newFoundDocument(o,l,h,p),_=s.targetIds||[],E=s.removedTargetIds||[];t=new ec(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Cd(r,s.document),l=s.readTime?cr(s.readTime):ve.min(),h=zt.newNoDocument(o,l),p=s.removedTargetIds||[];t=new ec([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Cd(r,s.document),l=s.removedTargetIds||[];t=new ec([],l,o,null)}else{if(!("filter"in e))return ye(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new ES(o,l),p=s.targetId;t=new Uv(p,h)}}return t}function DS(r,e){let t;if(e instanceof dl)t={update:Cy(r,e.key,e.value)};else if(e instanceof Vc)t={delete:Xd(r,e.key)};else if(e instanceof ji)t={update:Cy(r,e.key,e.data),updateMask:BS(e.fieldMask)};else{if(!(e instanceof _S))return ye(16599,{dt:e.type});t={verify:Xd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const p=h.transform;if(p instanceof el)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof tl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof nl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof gc)return{fieldPath:h.field.canonicalString(),increment:p.Ae};throw ye(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:PS(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ye(27497)})(r,e.precondition)),t}function VS(r,e){return r&&r.length>0?(Be(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?cr(o.updateTime):cr(l);return h.isEqual(ve.min())&&(h=cr(l)),new mS(h,o.transformResults||[])})(t,e)))):[]}function OS(r,e){return{documents:[Hv(r,e.path)]}}function LS(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Hv(r,o);const l=(function(_){if(_.length!==0)return Gv(zn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((E=>(function(N){return{field:yo(N.field),direction:FS(N.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=Yd(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function MS(r){let e=NS(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Be(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(I){const N=qv(I);return N instanceof zn&&Tv(N)?N.getFilters():[N]})(t.where));let h=[];t.orderBy&&(h=(function(I){return I.map((N=>(function(H){return new mc(_o(H.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(H.direction))})(N)))})(t.orderBy));let p=null;t.limit&&(p=(function(I){let N;return N=typeof I=="object"?I.value:I,Rc(N)?null:N})(t.limit));let g=null;t.startAt&&(g=(function(I){const N=!!I.before,U=I.values||[];return new pc(U,N)})(t.startAt));let _=null;return t.endAt&&(_=(function(I){const N=!I.before,U=I.values||[];return new pc(U,N)})(t.endAt)),eS(e,o,h,l,p,"F",g,_)}function jS(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function qv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=_o(t.unaryFilter.field);return yt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=_o(t.unaryFilter.field);return yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=_o(t.unaryFilter.field);return yt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=_o(t.unaryFilter.field);return yt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(r):r.fieldFilter!==void 0?(function(t){return yt.create(_o(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return zn.create(t.compositeFilter.filters.map((s=>qv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(t.compositeFilter.op))})(r):ye(30097,{filter:r})}function FS(r){return AS[r]}function US(r){return CS[r]}function zS(r){return RS[r]}function yo(r){return{fieldPath:r.canonicalString()}}function _o(r){return Nt.fromServerFormat(r.fieldPath)}function Gv(r){return r instanceof yt?(function(t){if(t.op==="=="){if(py(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NAN"}};if(fy(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(py(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NOT_NAN"}};if(fy(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yo(t.field),op:US(t.op),value:t.value}}})(r):r instanceof zn?(function(t){const s=t.getFilters().map((o=>Gv(o)));return s.length===1?s[0]:{compositeFilter:{op:zS(t.op),filters:s}}})(r):ye(54877,{filter:r})}function BS(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Kv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function Qv(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class Or{constructor(e,t,s,o,l=ve.min(),h=ve.min(),p=bt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new Or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $S{constructor(e){this.yt=e}}function HS(r){const e=MS({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Qd(e,e.limit,"L"):e}/**
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
 */class WS{constructor(){this.bn=new qS}addToCollectionParentIndex(e,t){return this.bn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Pi.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Pi.min())}updateCollectionGroup(e,t,s){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class qS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Et(Ge.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Et(Ge.comparator)).toArray()}}/**
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
 */const Ry={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yv=41943040;class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(Yv,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
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
 */class Vi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Vi(0)}static ar(){return new Vi(-1)}}/**
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
 */const ky="LruGarbageCollector",GS=1048576;function Py([r,e],[t,s]){const o=Ce(r,t);return o===0?Ce(e,s):o}class KS{constructor(e){this.Pr=e,this.buffer=new Et(Py),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Py(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class QS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){re(ky,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Lo(t)?re(ky,"Ignoring IndexedDB error during garbage collection: ",t):await Oo(t)}await this.Ar(3e5)}))}}class YS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(Cc.ce);const s=new KS(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Ry)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ry):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,l,h,p,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o)))).next((I=>(s=I,p=Date.now(),this.removeTargets(e,s,t)))).next((I=>(l=I,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((I=>(_=Date.now(),mo()<=be.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${l} targets in `+(g-p)+`ms
	Removed ${I} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:I}))))}}function JS(r,e){return new YS(r,e)}/**
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
 */class XS{constructor(){this.changes=new xs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ZS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class eA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&qa(s.mutation,o,mn.empty(),Xe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Re()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Re()){const o=ms();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Fa();return l.forEach(((p,g)=>{h=h.insert(p,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ms();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Re())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,p)=>{t.set(h,p)}))}))}computeViews(e,t,s,o){let l=zr();const h=Wa(),p=(function(){return Wa()})();return t.forEach(((g,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof ji)?l=l.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),qa(E.mutation,_,E.mutation.getFieldMask(),Xe.now())):h.set(_.key,mn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>p.set(_,new ZS(E,h.get(_)??null)))),p)))}recalculateAndSaveOverlays(e,t){const s=Wa();let o=new tt(((h,p)=>h-p)),l=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const p of h)p.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let E=s.get(g)||mn.empty();E=p.applyToLocalView(_,E),s.set(g,E);const I=(o.get(p.batchId)||Re()).add(g);o=o.insert(p.batchId,I)}))})).next((()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),_=g.key,E=g.value,I=Nv();E.forEach((N=>{if(!l.has(N)){const U=Mv(t.get(N),s.get(N));U!==null&&I.set(N,U),l=l.add(N)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,I))}return q.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return tS(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Av(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):q.resolve(ms());let p=Ya,g=l;return h.next((_=>q.forEach(_,((E,I)=>(p<I.largestBatchId&&(p=I.largestBatchId),l.get(E)?q.resolve():this.remoteDocumentCache.getEntry(e,E).next((N=>{g=g.insert(E,N)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,Re()))).next((E=>({batchId:p,changes:Pv(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((s=>{let o=Fa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Fa();return this.indexManager.getCollectionParents(e,l).next((p=>q.forEach(p,(g=>{const _=(function(I,N){return new hl(N,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((E=>{E.forEach(((I,N)=>{h=h.insert(I,N)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,zt.newInvalidDocument(E)))}));let p=Fa();return h.forEach(((g,_)=>{const E=l.get(g);E!==void 0&&qa(E.mutation,_,mn.empty(),Xe.now()),Nc(t,_)&&(p=p.insert(g,_))})),p}))}}/**
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
 */class tA{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return q.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:cr(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:HS(o.bundledQuery),readTime:cr(o.readTime)}})(t)),q.resolve()}}/**
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
 */class nA{constructor(){this.overlays=new tt(de.comparator),this.Lr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ms();return q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.St(e,t,l)})),q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(s)),q.resolve()}getOverlaysForCollection(e,t,s){const o=ms(),l=t.length+1,h=new de(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const g=p.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new tt(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=l.get(_.largestBatchId);E===null&&(E=ms(),l=l.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const p=ms(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,E)=>p.set(_,E))),!(p.size()>=o)););return q.resolve(p)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new wS(t,s));let l=this.Lr.get(t);l===void 0&&(l=Re(),this.Lr.set(t,l)),this.Lr.set(t,l.add(s.key))}}/**
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
 */class rA{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
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
 */class jf{constructor(){this.kr=new Et(St.Kr),this.qr=new Et(St.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new St(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new St(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new de(new Ge([])),s=new St(t,e),o=new St(t,e+1),l=[];return this.qr.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new de(new Ge([])),s=new St(t,e),o=new St(t,e+1);let l=Re();return this.qr.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new St(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class St{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return de.comparator(e.key,t.key)||Ce(e.Jr,t.Jr)}static Ur(e,t){return Ce(e.Jr,t.Jr)||de.comparator(e.key,t.key)}}/**
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
 */class iA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new Et(St.Kr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new vS(l,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Hr=this.Hr.add(new St(p.key,l)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?Rf:this.Yn-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([s,o],(h=>{const p=this.Zr(h.Jr);l.push(p)})),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Et(Ce);return t.forEach((o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,h],(p=>{s=s.add(p.Jr)}))})),q.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;de.isDocumentKey(l)||(l=l.child(""));const h=new St(new de(l),0);let p=new Et(Ce);return this.Hr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(p=p.add(g.Jr)),!0)}),h),q.resolve(this.Yr(p))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Be(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return q.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new St(t,0),o=this.Hr.firstAfterOrEqual(s);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class sA{constructor(e){this.ti=e,this.docs=(function(){return new tt(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return q.resolve(s?s.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let s=zr();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=zr();const h=t.path,p=new de(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||Nx(Px(E),s)<=0||(o.has(E.key)||Nc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,s,o){ye(9500)}ni(e,t){return q.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new oA(this)}getSize(e){return q.resolve(this.size)}}class oA extends XS{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),q.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class aA{constructor(e){this.persistence=e,this.ri=new xs((t=>Nf(t)),bf),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.ii=0,this.si=new jf,this.targetCount=0,this.oi=Vi._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),q.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Vi(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.lr(t),q.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ri.forEach(((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.ri.delete(h),l.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),q.waitFor(l).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return q.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),q.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return q.resolve(s)}containsKey(e,t){return q.resolve(this.si.containsKey(t))}}/**
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
 */class Jv{constructor(e,t){this._i={},this.overlays={},this.ai=new Cc(0),this.ui=!1,this.ui=!0,this.ci=new rA,this.referenceDelegate=e(this),this.li=new aA(this),this.indexManager=new WS,this.remoteDocumentCache=(function(o){return new sA(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new $S(t),this.Pi=new tA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new iA(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new lA(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((l=>this.referenceDelegate.Ii(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return q.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class lA extends Dx{constructor(e){super(),this.currentSequenceNumber=e}}class Ff{constructor(e){this.persistence=e,this.Ri=new jf,this.Ai=null}static Vi(e){return new Ff(e)}get di(){if(this.Ai)return this.Ai;throw ye(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),q.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.di,(s=>{const o=de.fromPath(s);return this.mi(e,o).next((l=>{l||t.removeEntry(o,ve.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return q.or([()=>q.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class _c{constructor(e,t){this.persistence=e,this.fi=new xs((s=>Lx(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=JS(this,t)}static Vi(e,t){return new _c(e,t)}Ti(){}Ii(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return q.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((l=>l?q.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((p=>{p||(s++,l.removeEntry(h,ve.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),q.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),q.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ju(e.data.value)),t}wr(e,t,s){return q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Uf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=o}static Es(e,t){let s=Re(),o=Re();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Uf(e,t.fromCache,s,o)}}/**
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
 */class uA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cA{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return PE()?8:Vx(Bt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.gs(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ps(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new uA;return this.ys(e,t,h).next((p=>{if(l.result=p,this.As)return this.ws(e,t,h,p.size)}))})).next((()=>l.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(mo()<=be.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",go(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),q.resolve()):(mo()<=be.DEBUG&&re("QueryEngine","Query:",go(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(mo()<=be.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",go(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ur(t))):q.resolve())}gs(e,t){if(_y(t))return q.resolve(null);let s=ur(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Qd(t,null,"F"),s=ur(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=Re(...l);return this.fs.getDocuments(e,h).next((p=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.Ss(t,p);return this.bs(t,_,h,g.readTime)?this.gs(e,Qd(t,null,"F")):this.Ds(e,_,t,g)}))))})))))}ps(e,t,s,o){return _y(t)||o.isEqual(ve.min())?q.resolve(null):this.fs.getDocuments(e,s).next((l=>{const h=this.Ss(t,l);return this.bs(t,h,s,o)?q.resolve(null):(mo()<=be.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),go(t)),this.Ds(e,h,t,kx(o,Ya)).next((p=>p)))}))}Ss(e,t){let s=new Et(Rv(e));return t.forEach(((o,l)=>{Nc(e,l)&&(s=s.add(l))})),s}bs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,s){return mo()<=be.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",go(t)),this.fs.getDocumentsMatchingQuery(e,t,Pi.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const zf="LocalStore",hA=3e8;class dA{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new tt(Ce),this.Fs=new xs((l=>Nf(l)),bf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function fA(r,e,t,s){return new dA(r,e,t,s)}async function Xv(r,e){const t=Ee(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],p=[];let g=Re();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of l){p.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Ns:_,removedBatchIds:h,addedBatchIds:p})))}))}))}function pA(r,e){const t=Ee(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(p,g,_,E){const I=_.batch,N=I.keys();let U=q.resolve();return N.forEach((H=>{U=U.next((()=>E.getEntry(g,H))).next(($=>{const F=_.docVersions.get(H);Be(F!==null,48541),$.version.compareTo(F)<0&&(I.applyToRemoteDocument($,_),$.isValidDocument()&&($.setReadTime(_.commitVersion),E.addEntry($)))}))})),U.next((()=>p.mutationQueue.removeMutationBatch(g,I)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let g=Re();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(g=g.add(p.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Zv(r){const e=Ee(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function mA(r,e){const t=Ee(r),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const p=[];e.targetChanges.forEach(((E,I)=>{const N=o.get(I);if(!N)return;p.push(t.li.removeMatchingKeys(l,E.removedDocuments,I).next((()=>t.li.addMatchingKeys(l,E.addedDocuments,I))));let U=N.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?U=U.withResumeToken(bt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):E.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(E.resumeToken,s)),o=o.insert(I,U),(function($,F,Y){return $.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=hA?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0})(N,U,E)&&p.push(t.li.updateTargetData(l,U))}));let g=zr(),_=Re();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),p.push(gA(l,h,e.documentUpdates).next((E=>{g=E.Bs,_=E.Ls}))),!s.isEqual(ve.min())){const E=t.li.getLastRemoteSnapshotVersion(l).next((I=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,s)));p.push(E)}return q.waitFor(p).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.vs=o,l)))}function gA(r,e,t){let s=Re(),o=Re();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=zr();return t.forEach(((p,g)=>{const _=l.get(p);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(p,g.readTime),h=h.insert(p,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(p,g)):re(zf,"Ignoring outdated watch update for ",p,". Current version:",_.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function yA(r,e){const t=Ee(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Rf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function _A(r,e){const t=Ee(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((l=>l?(o=l,q.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new Or(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function ef(r,e,t){const s=Ee(r),o=s.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Lo(h))throw h;re(zf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function Ny(r,e,t){const s=Ee(r);let o=ve.min(),l=Re();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,E){const I=Ee(g),N=I.Fs.get(E);return N!==void 0?q.resolve(I.vs.get(N)):I.li.getTargetData(_,E)})(s,h,ur(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,p.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?l:Re()))).next((p=>(vA(s,rS(e),p),{documents:p,ks:l})))))}function vA(r,e,t){let s=r.Ms.get(e)||ve.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.Ms.set(e,s)}class by{constructor(){this.activeTargetIds=uS()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wA{constructor(){this.vo=new by,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new by,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class EA{Mo(e){}shutdown(){}}/**
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
 */const Dy="ConnectivityMonitor";class Vy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){re(Dy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){re(Dy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $u=null;function tf(){return $u===null?$u=(function(){return 268435456+Math.round(2147483648*Math.random())})():$u++,"0x"+$u.toString(16)}/**
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
 */const Rd="RestConnection",TA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class IA{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===dc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=tf(),p=this.Qo(e,t.toUriEncodedString());re(Rd,`Sending RPC '${e}' ${h}:`,p,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,l);const{host:_}=new URL(p),E=sl(_);return this.zo(e,p,g,s,E).then((I=>(re(Rd,`Received RPC '${e}' ${h}: `,I),I)),(I=>{throw Is(Rd,`RPC '${e}' ${h} failed with error: `,I,"url: ",p,"request:",s),I}))}jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Vo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const s=TA[e];let o=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class xA{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const jt="WebChannelConnection",Va=(r,e,t)=>{r.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class To extends IA{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!To.c_){const e=iv();Va(e,rv.STAT_EVENT,(t=>{t.stat===Bd.PROXY?re(jt,"STAT_EVENT: detected buffering proxy"):t.stat===Bd.NOPROXY&&re(jt,"STAT_EVENT: detected no buffering proxy")})),To.c_=!0}}zo(e,t,s,o,l){const h=tf();return new Promise(((p,g)=>{const _=new tv;_.setWithCredentials(!0),_.listenOnce(nv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Yu.NO_ERROR:const I=_.getResponseJson();re(jt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(I)),p(I);break;case Yu.TIMEOUT:re(jt,`RPC '${e}' ${h} timed out`),g(new ne(W.DEADLINE_EXCEEDED,"Request time out"));break;case Yu.HTTP_ERROR:const N=_.getStatus();if(re(jt,`RPC '${e}' ${h} failed with status:`,N,"response text:",_.getResponseText()),N>0){let U=_.getResponseJson();Array.isArray(U)&&(U=U[0]);const H=U==null?void 0:U.error;if(H&&H.status&&H.message){const $=(function(Y){const Z=Y.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(Z)>=0?Z:W.UNKNOWN})(H.status);g(new ne($,H.message))}else g(new ne(W.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ne(W.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{re(jt,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);re(jt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,s,15)}))}T_(e,t,s){const o=tf(),l=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Go(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const _=l.join("");re(jt,`Creating RPC '${e}' stream ${o}: ${_}`,p);const E=h.createWebChannel(_,p);this.I_(E);let I=!1,N=!1;const U=new xA({Jo:H=>{N?re(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(I||(re(jt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),I=!0),re(jt,`RPC '${e}' stream ${o} sending:`,H),E.send(H))},Ho:()=>E.close()});return Va(E,ja.EventType.OPEN,(()=>{N||(re(jt,`RPC '${e}' stream ${o} transport opened.`),U.i_())})),Va(E,ja.EventType.CLOSE,(()=>{N||(N=!0,re(jt,`RPC '${e}' stream ${o} transport closed`),U.o_(),this.E_(E))})),Va(E,ja.EventType.ERROR,(H=>{N||(N=!0,Is(jt,`RPC '${e}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),U.o_(new ne(W.UNAVAILABLE,"The operation could not be completed")))})),Va(E,ja.EventType.MESSAGE,(H=>{var $;if(!N){const F=H.data[0];Be(!!F,16349);const Y=F,Z=(Y==null?void 0:Y.error)||(($=Y[0])==null?void 0:$.error);if(Z){re(jt,`RPC '${e}' stream ${o} received error:`,Z);const me=Z.status;let xe=(function(D){const A=gt[D];if(A!==void 0)return Fv(A)})(me),Ae=Z.message;me==="NOT_FOUND"&&Ae.includes("database")&&Ae.includes("does not exist")&&Ae.includes(this.databaseId.database)&&Is(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),xe===void 0&&(xe=W.INTERNAL,Ae="Unknown error status: "+me+" with message "+Z.message),N=!0,U.o_(new ne(xe,Ae)),E.close()}else re(jt,`RPC '${e}' stream ${o} received:`,F),U.__(F)}})),To.u_(),setTimeout((()=>{U.s_()}),0),U}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return sv()}}/**
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
 */function SA(r){return new To(r)}function kd(){return typeof document<"u"?document:null}/**
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
 */function Oc(r){return new kS(r,!0)}/**
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
 */To.c_=!1;class e0{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Oy="PersistentStream";class t0{constructor(e,t,s,o,l,h,p,g){this.Ci=e,this.S_=s,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new e0(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Ur(t.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new ne(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(Oy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(re(Oy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class AA extends t0{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=bS(this.serializer,e),s=(function(l){if(!("targetChange"in l))return ve.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?cr(h.readTime):ve.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=Zd(this.serializer),t.addTarget=(function(l,h){let p;const g=h.target;if(p=Gd(g)?{documents:OS(l,g)}:{query:LS(l,g).ft},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=Bv(l,h.resumeToken);const _=Yd(l,h.expectedCount);_!==null&&(p.expectedCount=_)}else if(h.snapshotVersion.compareTo(ve.min())>0){p.readTime=yc(l,h.snapshotVersion.toTimestamp());const _=Yd(l,h.expectedCount);_!==null&&(p.expectedCount=_)}return p})(this.serializer,e);const s=jS(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=Zd(this.serializer),t.removeTarget=e,this.K_(t)}}class CA extends t0{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=VS(e.writeResults,e.commitTime),s=cr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Zd(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>DS(this.serializer,s)))};this.K_(t)}}/**
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
 */class RA{}class kA extends RA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ne(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,Jd(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ne(W.UNKNOWN,l.toString())}))}jo(e,t,s,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,p])=>this.connection.jo(e,Jd(t,s),o,h,p,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ne(W.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function PA(r,e,t,s){return new kA(r,e,t,s)}class NA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ur(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const fr="RemoteStore";class bA{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Vi(1e3),this.Va=new Vi(1001),this.da=new Set,this.ma=[],this.fa=l,this.fa.Mo((h=>{s.enqueueAndForget((async()=>{Ss(this)&&(re(fr,"Restarting streams for network reachability change."),await(async function(g){const _=Ee(g);_.da.add(4),await ml(_),_.ga.set("Unknown"),_.da.delete(4),await Lc(_)})(this))}))})),this.ga=new NA(s,o)}}async function Lc(r){if(Ss(r))for(const e of r.ma)await e(!0)}async function ml(r){for(const e of r.ma)await e(!1)}function nf(r,e){return r.Ea.get(e)||void 0}function n0(r,e){const t=Ee(r),s=nf(t,e.targetId);if(s!==void 0&&t.Ia.has(s))return;const o=(function(p,g){const _=nf(p,g);_!==void 0&&p.Ra.delete(_);const E=(function(N,U){return U%2!=0?N.Va.next():N.Aa.next()})(p,g);return p.Ea.set(g,E),p.Ra.set(E,g),E})(t,e.targetId);re(fr,"remoteStoreListen mapping SDK target ID to remote",e.targetId,o);const l=new Or(e.target,o,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(o,l),Wf(t)?Hf(t):Mo(t).O_()&&$f(t,l)}function Bf(r,e){const t=Ee(r),s=Mo(t),o=nf(t,e);re(fr,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,o),t.Ia.delete(o),t.Ea.delete(e),t.Ra.delete(o),s.O_()&&r0(t,o),t.Ia.size===0&&(s.O_()?s.L_():Ss(t)&&t.ga.set("Unknown"))}function $f(r,e){if(r.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=r.Ra.get(e.targetId);if(t===void 0)return void re(fr,"SDK target ID not found for remote ID: "+e.targetId);const s=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(s)}Mo(r).Z_(e)}function r0(r,e){r.pa.$e(e),Mo(r).X_(e)}function Hf(r){r.pa=new SS({getRemoteKeysForTarget:e=>{const t=r.Ra.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):Re()},At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Mo(r).start(),r.ga.ua()}function Wf(r){return Ss(r)&&!Mo(r).x_()&&r.Ia.size>0}function Ss(r){return Ee(r).da.size===0}function i0(r){r.pa=void 0}async function DA(r){r.ga.set("Online")}async function VA(r){r.Ia.forEach(((e,t)=>{$f(r,e)}))}async function OA(r,e){i0(r),Wf(r)?(r.ga.ha(e),Hf(r)):r.ga.set("Unknown")}async function LA(r,e,t){if(r.ga.set("Online"),e instanceof zv&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const p of l.targetIds){if(o.Ia.has(p)){const g=o.Ra.get(p);g!==void 0&&(await o.remoteSyncer.rejectListen(g,h),o.Ea.delete(g),o.Ra.delete(p)),o.Ia.delete(p)}o.pa.removeTarget(p)}})(r,e)}catch(s){re(fr,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await vc(r,s)}else if(e instanceof ec?r.pa.Xe(e):e instanceof Uv?r.pa.st(e):r.pa.tt(e),!t.isEqual(ve.min()))try{const s=await Zv(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const p=l.pa.Tt(h);p.targetChanges.forEach(((_,E)=>{if(_.resumeToken.approximateByteSize()>0){const I=l.Ia.get(E);I&&l.Ia.set(E,I.withResumeToken(_.resumeToken,h))}})),p.targetMismatches.forEach(((_,E)=>{const I=l.Ia.get(_);if(!I)return;l.Ia.set(_,I.withResumeToken(bt.EMPTY_BYTE_STRING,I.snapshotVersion)),r0(l,_);const N=new Or(I.target,_,E,I.sequenceNumber);$f(l,N)}));const g=(function(E,I){const N=new Map;I.targetChanges.forEach(((H,$)=>{const F=E.Ra.get($);F!==void 0&&N.set(F,H)}));let U=new tt(Ce);return I.targetMismatches.forEach(((H,$)=>{const F=E.Ra.get(H);F!==void 0&&(U=U.insert(F,$))})),new fl(I.snapshotVersion,N,U,I.documentUpdates,I.resolvedLimboDocuments)})(l,p);return l.remoteSyncer.applyRemoteEvent(g)})(r,t)}catch(s){re(fr,"Failed to raise snapshot:",s),await vc(r,s)}}async function vc(r,e,t){if(!Lo(e))throw e;r.da.add(1),await ml(r),r.ga.set("Offline"),t||(t=()=>Zv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{re(fr,"Retrying IndexedDB access"),await t(),r.da.delete(1),await Lc(r)}))}function s0(r,e){return e().catch((t=>vc(r,t,e)))}async function Mc(r){const e=Ee(r),t=Oi(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Rf;for(;MA(e);)try{const o=await yA(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,jA(e,o)}catch(o){await vc(e,o)}o0(e)&&a0(e)}function MA(r){return Ss(r)&&r.Ta.length<10}function jA(r,e){r.Ta.push(e);const t=Oi(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function o0(r){return Ss(r)&&!Oi(r).x_()&&r.Ta.length>0}function a0(r){Oi(r).start()}async function FA(r){Oi(r).ra()}async function UA(r){const e=Oi(r);for(const t of r.Ta)e.ea(t.mutations)}async function zA(r,e,t){const s=r.Ta.shift(),o=Of.from(s,e,t);await s0(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Mc(r)}async function BA(r,e){e&&Oi(r).Y_&&await(async function(s,o){if((function(h){return TS(h)&&h!==W.ABORTED})(o.code)){const l=s.Ta.shift();Oi(s).B_(),await s0(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Mc(s)}})(r,e),o0(r)&&a0(r)}async function Ly(r,e){const t=Ee(r);t.asyncQueue.verifyOperationInProgress(),re(fr,"RemoteStore received new credentials");const s=Ss(t);t.da.add(3),await ml(t),s&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Lc(t)}async function $A(r,e){const t=Ee(r);e?(t.da.delete(2),await Lc(t)):e||(t.da.add(2),await ml(t),t.ga.set("Unknown"))}function Mo(r){return r.ya||(r.ya=(function(t,s,o){const l=Ee(t);return l.sa(),new AA(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:DA.bind(null,r),Yo:VA.bind(null,r),t_:OA.bind(null,r),H_:LA.bind(null,r)}),r.ma.push((async e=>{e?(r.ya.B_(),Wf(r)?Hf(r):r.ga.set("Unknown")):(await r.ya.stop(),i0(r))}))),r.ya}function Oi(r){return r.wa||(r.wa=(function(t,s,o){const l=Ee(t);return l.sa(),new CA(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:FA.bind(null,r),t_:BA.bind(null,r),ta:UA.bind(null,r),na:zA.bind(null,r)}),r.ma.push((async e=>{e?(r.wa.B_(),await Mc(r)):(await r.wa.stop(),r.Ta.length>0&&(re(fr,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.wa}/**
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
 */class qf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,p=new qf(e,t,h,o,l);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gf(r,e){if(Ur("AsyncQueue",`${e}: ${r}`),Lo(r))return new ne(W.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Io{static emptySet(e){return new Io(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Fa(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Io)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Io;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class My{constructor(){this.Sa=new tt(de.comparator)}track(e){const t=e.doc.key,s=this.Sa.get(t);s?e.type!==0&&s.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&s.type!==1?this.Sa=this.Sa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Sa=this.Sa.remove(t):e.type===1&&s.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):ye(63341,{Vt:e,ba:s}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class ko{constructor(e,t,s,o,l,h,p,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((p=>{h.push({type:0,doc:p})})),new ko(e,t,Io.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class HA{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some((e=>e.Ma()))}}class WA{constructor(){this.queries=jy(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,s){const o=Ee(t),l=o.queries;o.queries=jy(),l.forEach(((h,p)=>{for(const g of p.va)g.onError(s)}))})(this,new ne(W.ABORTED,"Firestore shutting down"))}}function jy(){return new xs((r=>Cv(r)),Pc)}async function l0(r,e){const t=Ee(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Fa()&&e.Ma()&&(s=2):(l=new HA,s=e.Ma()?0:1);try{switch(s){case 0:l.Ca=await t.onListen(o,!0);break;case 1:l.Ca=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=Gf(h,`Initialization of query '${go(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,l),l.va.push(e),e.Oa(t.onlineState),l.Ca&&e.Na(l.Ca)&&Kf(t)}async function u0(r,e){const t=Ee(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.va.indexOf(e);h>=0&&(l.va.splice(h,1),l.va.length===0?o=e.Ma()?0:1:!l.Fa()&&e.Ma()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function qA(r,e){const t=Ee(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const p of h.va)p.Na(o)&&(s=!0);h.Ca=o}}s&&Kf(t)}function GA(r,e,t){const s=Ee(r),o=s.queries.get(e);if(o)for(const l of o.va)l.onError(t);s.queries.delete(e)}function Kf(r){r.xa.forEach((e=>{e.next()}))}var rf,Fy;(Fy=rf||(rf={})).Ba="default",Fy.Cache="cache";class c0{constructor(e,t,s){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=s||{}}Na(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new ko(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const s=t!=="Offline";return(!this.options.Wa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==rf.Cache}}/**
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
 */class h0{constructor(e){this.key=e}}class d0{constructor(e){this.key=e}}class KA{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=Re(),this.mutatedKeys=Re(),this.iu=Rv(e),this.su=new Io(this.iu)}get ou(){return this.tu}_u(e,t){const s=t?t.au:new My,o=t?t.su:this.su;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,I)=>{const N=o.get(E),U=Nc(this.query,I)?I:null,H=!!N&&this.mutatedKeys.has(N.key),$=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let F=!1;N&&U?N.data.isEqual(U.data)?H!==$&&(s.track({type:3,doc:U}),F=!0):this.uu(N,U)||(s.track({type:2,doc:U}),F=!0,(g&&this.iu(U,g)>0||_&&this.iu(U,_)<0)&&(p=!0)):!N&&U?(s.track({type:0,doc:U}),F=!0):N&&!U&&(s.track({type:1,doc:N}),F=!0,(g||_)&&(p=!0)),F&&(U?(h=h.add(U),l=$?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{su:h,au:s,bs:p,mutatedKeys:l}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const h=e.au.Da();h.sort(((E,I)=>(function(U,H){const $=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{Vt:F})}};return $(U)-$(H)})(E.type,I.type)||this.iu(E.doc,I.doc))),this.cu(s),o=o??!1;const p=t&&!o?this.lu():[],g=this.ru.size===0&&this.current&&!o?1:0,_=g!==this.nu;return this.nu=g,h.length!==0||_?{snapshot:new ko(this.query,e.su,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),hu:p}:{hu:p}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new My,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach((t=>this.tu=this.tu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.tu=this.tu.delete(t))),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=Re(),this.su.forEach((s=>{this.Pu(s.key)&&(this.ru=this.ru.add(s.key))}));const t=[];return e.forEach((s=>{this.ru.has(s)||t.push(new d0(s))})),this.ru.forEach((s=>{e.has(s)||t.push(new h0(s))})),t}Tu(e){this.tu=e.ks,this.ru=Re();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return ko.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Qf="SyncEngine";class QA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class YA{constructor(e){this.key=e,this.Eu=!1}}class JA{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ru={},this.Au=new xs((p=>Cv(p)),Pc),this.Vu=new Map,this.du=new Set,this.mu=new tt(de.comparator),this.fu=new Map,this.gu=new jf,this.pu={},this.yu=new Map,this.wu=Vi.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function XA(r,e,t=!0){const s=_0(r);let o;const l=s.Au.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Iu()):o=await f0(s,e,t,!0),o}async function ZA(r,e){const t=_0(r);await f0(t,e,!0,!1)}async function f0(r,e,t,s){const o=await _A(r.localStore,ur(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let p;return s&&(p=await eC(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&n0(r.remoteStore,o),p}async function eC(r,e,t,s,o){r.bu=(I,N,U)=>(async function($,F,Y,Z){let me=F.view._u(Y);me.bs&&(me=await Ny($.localStore,F.query,!1).then((({documents:D})=>F.view._u(D,me))));const xe=Z&&Z.targetChanges.get(F.targetId),Ae=Z&&Z.targetMismatches.get(F.targetId)!=null,ke=F.view.applyChanges(me,$.isPrimaryClient,xe,Ae);return zy($,F.targetId,ke.hu),ke.snapshot})(r,I,N,U);const l=await Ny(r.localStore,e,!0),h=new KA(e,l.ks),p=h._u(l.documents),g=pl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(p,r.isPrimaryClient,g);zy(r,t,_.hu);const E=new QA(e,t,h);return r.Au.set(e,E),r.Vu.has(t)?r.Vu.get(t).push(e):r.Vu.set(t,[e]),_.snapshot}async function tC(r,e,t){const s=Ee(r),o=s.Au.get(e),l=s.Vu.get(o.targetId);if(l.length>1)return s.Vu.set(o.targetId,l.filter((h=>!Pc(h,e)))),void s.Au.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await ef(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Bf(s.remoteStore,o.targetId),sf(s,o.targetId)})).catch(Oo)):(sf(s,o.targetId),await ef(s.localStore,o.targetId,!0))}async function nC(r,e){const t=Ee(r),s=t.Au.get(e),o=t.Vu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Bf(t.remoteStore,s.targetId))}async function rC(r,e,t){const s=cC(r);try{const o=await(function(h,p){const g=Ee(h),_=Xe.now(),E=p.reduce(((U,H)=>U.add(H.key)),Re());let I,N;return g.persistence.runTransaction("Locally write mutations","readwrite",(U=>{let H=zr(),$=Re();return g.xs.getEntries(U,E).next((F=>{H=F,H.forEach(((Y,Z)=>{Z.isValidDocument()||($=$.add(Y))}))})).next((()=>g.localDocuments.getOverlayedDocuments(U,H))).next((F=>{I=F;const Y=[];for(const Z of p){const me=yS(Z,I.get(Z.key).overlayedDocument);me!=null&&Y.push(new ji(Z.key,me,vv(me.value.mapValue),Gt.exists(!0)))}return g.mutationQueue.addMutationBatch(U,_,Y,p)})).next((F=>{N=F;const Y=F.applyToLocalDocumentSet(I,$);return g.documentOverlayCache.saveOverlays(U,F.batchId,Y)}))})).then((()=>({batchId:N.batchId,changes:Pv(I)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,p,g){let _=h.pu[h.currentUser.toKey()];_||(_=new tt(Ce)),_=_.insert(p,g),h.pu[h.currentUser.toKey()]=_})(s,o.batchId,t),await gl(s,o.changes),await Mc(s.remoteStore)}catch(o){const l=Gf(o,"Failed to persist write");t.reject(l)}}async function p0(r,e){const t=Ee(r);try{const s=await mA(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.fu.get(l);h&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.Eu=!0:o.modifiedDocuments.size>0?Be(h.Eu,14607):o.removedDocuments.size>0&&(Be(h.Eu,42227),h.Eu=!1))})),await gl(t,s,e)}catch(s){await Oo(s)}}function Uy(r,e,t){const s=Ee(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Au.forEach(((l,h)=>{const p=h.view.Oa(e);p.snapshot&&o.push(p.snapshot)})),(function(h,p){const g=Ee(h);g.onlineState=p;let _=!1;g.queries.forEach(((E,I)=>{for(const N of I.va)N.Oa(p)&&(_=!0)})),_&&Kf(g)})(s.eventManager,e),o.length&&s.Ru.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function iC(r,e,t){const s=Ee(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.fu.get(e),l=o&&o.key;if(l){let h=new tt(de.comparator);h=h.insert(l,zt.newNoDocument(l,ve.min()));const p=Re().add(l),g=new fl(ve.min(),new Map,new tt(Ce),h,p);await p0(s,g),s.mu=s.mu.remove(l),s.fu.delete(e),Yf(s)}else await ef(s.localStore,e,!1).then((()=>sf(s,e,t))).catch(Oo)}async function sC(r,e){const t=Ee(r),s=e.batch.batchId;try{const o=await pA(t.localStore,e);g0(t,s,null),m0(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await gl(t,o)}catch(o){await Oo(o)}}async function oC(r,e,t){const s=Ee(r);try{const o=await(function(h,p){const g=Ee(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return g.mutationQueue.lookupMutationBatch(_,p).next((I=>(Be(I!==null,37113),E=I.keys(),g.mutationQueue.removeMutationBatch(_,I)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,p))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>g.localDocuments.getDocuments(_,E)))}))})(s.localStore,e);g0(s,e,t),m0(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await gl(s,o)}catch(o){await Oo(o)}}function m0(r,e){(r.yu.get(e)||[]).forEach((t=>{t.resolve()})),r.yu.delete(e)}function g0(r,e,t){const s=Ee(r);let o=s.pu[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.pu[s.currentUser.toKey()]=o}}function sf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Vu.get(e))r.Au.delete(s),t&&r.Ru.Du(s,t);r.Vu.delete(e),r.isPrimaryClient&&r.gu.Gr(e).forEach((s=>{r.gu.containsKey(s)||y0(r,s)}))}function y0(r,e){r.du.delete(e.path.canonicalString());const t=r.mu.get(e);t!==null&&(Bf(r.remoteStore,t),r.mu=r.mu.remove(e),r.fu.delete(t),Yf(r))}function zy(r,e,t){for(const s of t)s instanceof h0?(r.gu.addReference(s.key,e),aC(r,s)):s instanceof d0?(re(Qf,"Document no longer in limbo: "+s.key),r.gu.removeReference(s.key,e),r.gu.containsKey(s.key)||y0(r,s.key)):ye(19791,{Cu:s})}function aC(r,e){const t=e.key,s=t.path.canonicalString();r.mu.get(t)||r.du.has(s)||(re(Qf,"New document in limbo: "+t),r.du.add(s),Yf(r))}function Yf(r){for(;r.du.size>0&&r.mu.size<r.maxConcurrentLimboResolutions;){const e=r.du.values().next().value;r.du.delete(e);const t=new de(Ge.fromString(e)),s=r.wu.next();r.fu.set(s,new YA(t)),r.mu=r.mu.insert(t,s),n0(r.remoteStore,new Or(ur(Df(t.path)),s,"TargetPurposeLimboResolution",Cc.ce))}}async function gl(r,e,t){const s=Ee(r),o=[],l=[],h=[];s.Au.isEmpty()||(s.Au.forEach(((p,g)=>{h.push(s.bu(g,e,t).then((_=>{var E;if((_||t)&&s.isPrimaryClient){const I=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,I?"current":"not-current")}if(_){o.push(_);const I=Uf.Es(g.targetId,_);l.push(I)}})))})),await Promise.all(h),s.Ru.H_(o),await(async function(g,_){const E=Ee(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>q.forEach(_,(N=>q.forEach(N.Ts,(U=>E.persistence.referenceDelegate.addReference(I,N.targetId,U))).next((()=>q.forEach(N.Is,(U=>E.persistence.referenceDelegate.removeReference(I,N.targetId,U)))))))))}catch(I){if(!Lo(I))throw I;re(zf,"Failed to update sequence numbers: "+I)}for(const I of _){const N=I.targetId;if(!I.fromCache){const U=E.vs.get(N),H=U.snapshotVersion,$=U.withLastLimboFreeSnapshotVersion(H);E.vs=E.vs.insert(N,$)}}})(s.localStore,l))}async function lC(r,e){const t=Ee(r);if(!t.currentUser.isEqual(e)){re(Qf,"User change. New user:",e.toKey());const s=await Xv(t.localStore,e);t.currentUser=e,(function(l,h){l.yu.forEach((p=>{p.forEach((g=>{g.reject(new ne(W.CANCELLED,h))}))})),l.yu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await gl(t,s.Ns)}}function uC(r,e){const t=Ee(r),s=t.fu.get(e);if(s&&s.Eu)return Re().add(s.key);{let o=Re();const l=t.Vu.get(e);if(!l)return o;for(const h of l){const p=t.Au.get(h);o=o.unionWith(p.view.ou)}return o}}function _0(r){const e=Ee(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=p0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iC.bind(null,e),e.Ru.H_=qA.bind(null,e.eventManager),e.Ru.Du=GA.bind(null,e.eventManager),e}function cC(r){const e=Ee(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oC.bind(null,e),e}class wc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Oc(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return fA(this.persistence,new cA,e.initialUser,this.serializer)}xu(e){return new Jv(Ff.Vi,this.serializer)}Mu(e){return new wA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wc.provider={build:()=>new wc};class hC extends wc{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){Be(this.persistence.referenceDelegate instanceof _c,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new QS(s,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new Jv((s=>_c.Vi(s,t)),this.serializer)}}class of{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Uy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lC.bind(null,this.syncEngine),await $A(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new WA})()}createDatastore(e){const t=Oc(e.databaseInfo.databaseId),s=SA(e.databaseInfo);return PA(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,p){return new bA(s,o,l,h,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>Uy(this.syncEngine,t,0)),(function(){return Vy.v()?new Vy:new EA})())}createSyncEngine(e,t){return(function(o,l,h,p,g,_,E){const I=new JA(o,l,h,p,g,_);return E&&(I.Su=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ee(o);re(fr,"RemoteStore shutting down."),l.da.add(5),await ml(l),l.fa.shutdown(),l.ga.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}of.provider={build:()=>new of};/**
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
 */class v0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Li="FirestoreClient";class dC{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=Cf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{re(Li,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(re(Li,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Gf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Pd(r,e){r.asyncQueue.verifyOperationInProgress(),re(Li,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Xv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function By(r,e){r.asyncQueue.verifyOperationInProgress();const t=await fC(r);re(Li,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>Ly(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>Ly(e.remoteStore,o))),r._onlineComponents=e}async function fC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(Li,"Using user provided OfflineComponentProvider");try{await Pd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Is("Error using user provided cache. Falling back to memory cache: "+t),await Pd(r,new wc)}}else re(Li,"Using default OfflineComponentProvider"),await Pd(r,new hC(void 0));return r._offlineComponents}async function w0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(Li,"Using user provided OnlineComponentProvider"),await By(r,r._uninitializedComponentsProvider._online)):(re(Li,"Using default OnlineComponentProvider"),await By(r,new of))),r._onlineComponents}function pC(r){return w0(r).then((e=>e.syncEngine))}async function E0(r){const e=await w0(r),t=e.eventManager;return t.onListen=XA.bind(null,e.syncEngine),t.onUnlisten=tC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ZA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nC.bind(null,e.syncEngine),t}function mC(r,e,t={}){const s=new Mr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,p,g,_){const E=new v0({next:N=>{E.Ku(),h.enqueueAndForget((()=>u0(l,I)));const U=N.docs.has(p);!U&&N.fromCache?_.reject(new ne(W.UNAVAILABLE,"Failed to get document because the client is offline.")):U&&N.fromCache&&g&&g.source==="server"?_.reject(new ne(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(N)},error:N=>_.reject(N)}),I=new c0(Df(p.path),E,{includeMetadataChanges:!0,Wa:!0});return l0(l,I)})(await E0(r),r.asyncQueue,e,t,s))),s.promise}function gC(r,e,t={}){const s=new Mr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,p,g,_){const E=new v0({next:N=>{E.Ku(),h.enqueueAndForget((()=>u0(l,I))),N.fromCache&&g.source==="server"?_.reject(new ne(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(N)},error:N=>_.reject(N)}),I=new c0(p,E,{includeMetadataChanges:!0,Wa:!0});return l0(l,I)})(await E0(r),r.asyncQueue,e,t,s))),s.promise}function yC(r,e){const t=new Mr;return r.asyncQueue.enqueueAndForget((async()=>rC(await pC(r),e,t))),t.promise}/**
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
 */function T0(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const _C="ComponentProvider",$y=new Map;function vC(r,e,t,s,o){return new Fx(r,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,T0(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const I0="firestore.googleapis.com",Hy=!0;class Wy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ne(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=I0,this.ssl=Hy}else this.host=e.host,this.ssl=e.ssl??Hy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<GS)throw new ne(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Rx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=T0(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new _x;switch(s.type){case"firstParty":return new Tx(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ne(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=$y.get(t);s&&(re(_C,"Removing Datastore"),$y.delete(t),s.terminate())})(this),Promise.resolve()}}function wC(r,e,t,s={}){var _;r=Cn(r,jc);const o=sl(e),l=r._getSettings(),h={...l,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${t}`;o&&h_(`https://${p}`),l.host!==I0&&l.host!==p&&Is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:p,ssl:o,emulatorOptions:s};if(!ys(g,h)&&(r._setSettings(g),s.mockUserToken)){let E,I;if(typeof s.mockUserToken=="string")E=s.mockUserToken,I=Ft.MOCK_USER;else{E=IE(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const N=s.mockUserToken.sub||s.mockUserToken.user_id;if(!N)throw new ne(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new Ft(N)}r._authCredentials=new vx(new av(E,I))}}/**
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
 */class jo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new jo(this.firestore,e,this._query)}}class dt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(cl(t,dt._jsonSchema))return new dt(e,s||null,new de(Ge.fromString(t.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:_t("string",dt._jsonSchemaVersion),referencePath:_t("string")};class Ri extends jo{constructor(e,t,s){super(e,t,Df(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new de(e))}withConverter(e){return new Ri(this.firestore,e,this._path)}}function yl(r,e,...t){if(r=et(r),lv("collection","path",e),r instanceof jc){const s=Ge.fromString(e,...t);return iy(s),new Ri(r,null,s)}{if(!(r instanceof dt||r instanceof Ri))throw new ne(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return iy(s),new Ri(r.firestore,null,s)}}function gn(r,e,...t){if(r=et(r),arguments.length===1&&(e=Cf.newId()),lv("doc","path",e),r instanceof jc){const s=Ge.fromString(e,...t);return ry(s),new dt(r,null,new de(s))}{if(!(r instanceof dt||r instanceof Ri))throw new ne(W.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return ry(s),new dt(r.firestore,r instanceof Ri?r.converter:null,new de(s))}}/**
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
 */const qy="AsyncQueue";class Gy{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new e0(this,"async_queue_retry"),this.lc=()=>{const s=kd();s&&re(qy,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.hc=e;const t=kd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=kd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const t=new Mr;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!Lo(e))throw e;re(qy,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const t=this.hc.then((()=>(this.ac=!0,e().catch((s=>{throw this._c=s,this.ac=!1,Ur("INTERNAL UNHANDLED ERROR: ",Ky(s)),s})).then((s=>(this.ac=!1,s))))));return this.hc=t,t}enqueueAfterDelay(e,t,s){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const o=qf.createAndSchedule(this,e,t,s,(l=>this.Ec(l)));return this.oc.push(o),o}Pc(){this._c&&ye(47125,{Rc:Ky(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function Ky(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Fi extends jc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Gy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gy(e),this._firestoreClient=void 0,await e}}}function x0(r,e){const t=typeof r=="object"?r:p_(),s=typeof r=="string"?r:dc,o=df(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=EE("firestore");l&&wC(o,...l)}return o}function Fc(r){if(r._terminated)throw new ne(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||EC(r),r._firestoreClient}function EC(r){var s,o,l,h;const e=r._freezeSettings(),t=vC(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new dC(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}})(r._componentsProvider))}/**
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
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(bt.fromBase64String(e))}catch(t){throw new ne(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sn(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cl(e,Sn._jsonSchema))return Sn.fromBase64String(e.bytes)}}Sn._jsonSchemaVersion="firestore/bytes/1.0",Sn._jsonSchema={type:_t("string",Sn._jsonSchemaVersion),bytes:_t("string")};/**
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
 */class Uc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zc{constructor(e){this._methodName=e}}/**
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
 */class hr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hr._jsonSchemaVersion}}static fromJSON(e){if(cl(e,hr._jsonSchema))return new hr(e.latitude,e.longitude)}}hr._jsonSchemaVersion="firestore/geoPoint/1.0",hr._jsonSchema={type:_t("string",hr._jsonSchemaVersion),latitude:_t("number"),longitude:_t("number")};/**
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
 */class Un{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cl(e,Un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Un(e.vectorValues);throw new ne(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Un._jsonSchemaVersion="firestore/vectorValue/1.0",Un._jsonSchema={type:_t("string",Un._jsonSchemaVersion),vectorValues:_t("object")};/**
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
 */const TC=/^__.*__$/;class IC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ji(e,this.data,this.fieldMask,t,this.fieldTransforms):new dl(e,this.data,t,this.fieldTransforms)}}class S0{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new ji(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function A0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{dataSource:r})}}class Jf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.fc(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Jf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.wc(e),s}Sc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.fc(),s}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Ec(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(A0(this.dataSource)&&TC.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class xC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Oc(e)}V(e,t,s,o=!1){return new Jf({dataSource:e,methodName:t,targetDoc:s,path:Nt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _l(r){const e=r._freezeSettings(),t=Oc(r._databaseId);return new xC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Xf(r,e,t,s,o,l={}){const h=r.V(l.merge||l.mergeFields?2:0,e,t,o);ep("Data must be an object, but it was:",h,s);const p=k0(s,h);let g,_;if(l.merge)g=new mn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const I of l.mergeFields){const N=Po(e,I,t);if(!h.contains(N))throw new ne(W.INVALID_ARGUMENT,`Field '${N}' is specified in your field mask but missing from your input data.`);b0(E,N)||E.push(N)}g=new mn(E),_=h.fieldTransforms.filter((I=>g.covers(I.field)))}else g=null,_=h.fieldTransforms;return new IC(new nn(p),g,_)}class Bc extends zc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bc}}class Zf extends zc{_toFieldTransform(e){return new fS(e.path,new el)}isEqual(e){return e instanceof Zf}}function C0(r,e,t,s){const o=r.V(1,e,t);ep("Data must be an object, but it was:",o,s);const l=[],h=nn.empty();Mi(s,((g,_)=>{const E=N0(e,g,t);_=et(_);const I=o.Sc(E);if(_ instanceof Bc)l.push(E);else{const N=vl(_,I);N!=null&&(l.push(E),h.set(E,N))}}));const p=new mn(l);return new S0(h,p,o.fieldTransforms)}function R0(r,e,t,s,o,l){const h=r.V(1,e,t),p=[Po(e,s,t)],g=[o];if(l.length%2!=0)throw new ne(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let N=0;N<l.length;N+=2)p.push(Po(e,l[N])),g.push(l[N+1]);const _=[],E=nn.empty();for(let N=p.length-1;N>=0;--N)if(!b0(_,p[N])){const U=p[N];let H=g[N];H=et(H);const $=h.Sc(U);if(H instanceof Bc)_.push(U);else{const F=vl(H,$);F!=null&&(_.push(U),E.set(U,F))}}const I=new mn(_);return new S0(E,I,h.fieldTransforms)}function SC(r,e,t,s=!1){return vl(t,r.V(s?4:3,e))}function vl(r,e){if(P0(r=et(r)))return ep("Unsupported field value:",e,r),k0(r,e);if(r instanceof zc)return(function(s,o){if(!A0(o.dataSource))throw o.Dc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Dc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const p of s){let g=vl(p,o.bc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=et(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return cS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Xe.fromDate(s);return{timestampValue:yc(o.serializer,l)}}if(s instanceof Xe){const l=new Xe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:yc(o.serializer,l)}}if(s instanceof hr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Sn)return{bytesValue:Bv(o.serializer,s._byteString)};if(s instanceof dt){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.Dc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Mf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Un)return(function(h,p){const g=h instanceof Un?h.toArray():h;return{mapValue:{fields:{[yv]:{stringValue:_v},[fc]:{arrayValue:{values:g.map((E=>{if(typeof E!="number")throw p.Dc("VectorValues must only contain numeric values.");return Vf(p.serializer,E)}))}}}}}})(s,o);if(Qv(s))return s._toProto(o.serializer);throw o.Dc(`Unsupported field value: ${Ac(s)}`)})(r,e)}function k0(r,e){const t={};return hv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mi(r,((s,o)=>{const l=vl(o,e.yc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function P0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Xe||r instanceof hr||r instanceof Sn||r instanceof dt||r instanceof zc||r instanceof Un||Qv(r))}function ep(r,e,t){if(!P0(t)||!uv(t)){const s=Ac(t);throw s==="an object"?e.Dc(r+" a custom object"):e.Dc(r+" "+s)}}function Po(r,e,t){if((e=et(e))instanceof Uc)return e._internalPath;if(typeof e=="string")return N0(r,e);throw Ec("Field path arguments must be of type string or ",r,!1,void 0,t)}const AC=new RegExp("[~\\*/\\[\\]]");function N0(r,e,t){if(e.search(AC)>=0)throw Ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Uc(...e.split("."))._internalPath}catch{throw Ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ec(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ne(W.INVALID_ARGUMENT,p+r+g)}function b0(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class CC{convertValue(e,t="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Mi(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var s,o,l;const t=(l=(o=(s=e.fields)==null?void 0:s[fc].arrayValue)==null?void 0:o.values)==null?void 0:l.map((h=>ht(h.doubleValue)));return new Un(t)}convertGeoPoint(e){return new hr(ht(e.latitude),ht(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=kc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ja(e));default:return null}}convertTimestamp(e){const t=Ni(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);Be(Kv(s),9688,{name:e});const o=new Xa(s.get(1),s.get(3)),l=new de(s.popFirst(5));return o.isEqual(t)||Ur(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class D0 extends CC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,t)}}function V0(){return new Zf("serverTimestamp")}const Qy="@firebase/firestore",Yy="4.14.1";/**
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
 */class O0{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Po("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class RC extends O0{data(){return super.data()}}/**
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
 */function kC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ne(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tp{}class PC extends tp{}function np(r,e,...t){let s=[];e instanceof tp&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((g=>g instanceof ip)).length,p=l.filter((g=>g instanceof $c)).length;if(h>1||h>0&&p>0)throw new ne(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class $c extends PC{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new $c(e,t,s)}_apply(e){const t=this._parse(e);return L0(e._query,t),new jo(e.firestore,e.converter,Kd(e._query,t))}_parse(e){const t=_l(e.firestore);return(function(l,h,p,g,_,E,I){let N;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ne(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){Xy(I,E);const H=[];for(const $ of I)H.push(Jy(g,l,$));N={arrayValue:{values:H}}}else N=Jy(g,l,I)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||Xy(I,E),N=SC(p,h,I,E==="in"||E==="not-in");return yt.create(_,E,N)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function rp(r,e,t){const s=e,o=Po("where",r);return $c._create(o,s,t)}class ip extends tp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ip(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:zn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const p=l.getFlattenedFilters();for(const g of p)L0(h,g),h=Kd(h,g)})(e._query,t),new jo(e.firestore,e.converter,Kd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Jy(r,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new ne(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Av(e)&&t.indexOf("/")!==-1)throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!de.isDocumentKey(s))throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return dy(r,new de(s))}if(t instanceof dt)return dy(r,t._key);throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ac(t)}.`)}function Xy(r,e){if(!Array.isArray(r)||r.length===0)throw new ne(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function L0(r,e){const t=(function(o,l){for(const h of o)for(const p of h.getFlattenedFilters())if(l.indexOf(p.op)>=0)return p.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ne(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function sp(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class za{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gs extends O0{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new tc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Po("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=gs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}gs._jsonSchemaVersion="firestore/documentSnapshot/1.0",gs._jsonSchema={type:_t("string",gs._jsonSchemaVersion),bundleSource:_t("string","DocumentSnapshot"),bundleName:_t("string"),bundle:_t("string")};class tc extends gs{data(e={}){return super.data(e)}}class xo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new za(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new tc(this._firestore,this._userDataWriter,s.key,s,new za(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((p=>{const g=new tc(o._firestore,o._userDataWriter,p.doc.key,p.doc,new za(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>l||p.type!==3)).map((p=>{const g=new tc(o._firestore,o._userDataWriter,p.doc.key,p.doc,new za(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return p.type!==0&&(_=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),E=h.indexOf(p.doc.key)),{type:NC(p.type),doc:g,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Cf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function NC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:r})}}/**
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
 */xo._jsonSchemaVersion="firestore/querySnapshot/1.0",xo._jsonSchema={type:_t("string",xo._jsonSchemaVersion),bundleSource:_t("string","QuerySnapshot"),bundleName:_t("string"),bundle:_t("string")};/**
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
 */class bC{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=_l(e)}set(e,t,s){this._verifyNotCommitted();const o=Nd(e,this._firestore),l=sp(o.converter,t,s),h=Xf(this._dataReader,"WriteBatch.set",o._key,l,o.converter!==null,s);return this._mutations.push(h.toMutation(o._key,Gt.none())),this}update(e,t,s,...o){this._verifyNotCommitted();const l=Nd(e,this._firestore);let h;return h=typeof(t=et(t))=="string"||t instanceof Uc?R0(this._dataReader,"WriteBatch.update",l._key,t,s,o):C0(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(h.toMutation(l._key,Gt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Nd(e,this._firestore);return this._mutations=this._mutations.concat(new Vc(t._key,Gt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ne(W.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Nd(r,e){if((r=et(r)).firestore!==e)throw new ne(W.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */function M0(r){r=Cn(r,dt);const e=Cn(r.firestore,Fi),t=Fc(e);return mC(t,r._key).then((s=>LC(e,r,s)))}function op(r){r=Cn(r,jo);const e=Cn(r.firestore,Fi),t=Fc(e),s=new D0(e);return kC(r._query),gC(t,r._query).then((o=>new xo(e,s,r,o)))}function DC(r,e,t){r=Cn(r,dt);const s=Cn(r.firestore,Fi),o=sp(r.converter,e,t),l=_l(s);return wl(s,[Xf(l,"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Gt.none())])}function No(r,e,t,...s){r=Cn(r,dt);const o=Cn(r.firestore,Fi),l=_l(o);let h;return h=typeof(e=et(e))=="string"||e instanceof Uc?R0(l,"updateDoc",r._key,e,t,s):C0(l,"updateDoc",r._key,e),wl(o,[h.toMutation(r._key,Gt.exists(!0))])}function VC(r){return wl(Cn(r.firestore,Fi),[new Vc(r._key,Gt.none())])}function OC(r,e){const t=Cn(r.firestore,Fi),s=gn(r),o=sp(r.converter,e),l=_l(r.firestore);return wl(t,[Xf(l,"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Gt.exists(!1))]).then((()=>s))}function wl(r,e){const t=Fc(r);return yC(t,e)}function LC(r,e,t){const s=t.docs.get(e._key),o=new D0(r);return new gs(r,o,e._key,s,new za(t.hasPendingWrites,t.fromCache),e.converter)}function MC(r){return r=Cn(r,Fi),Fc(r),new bC(r,(e=>wl(r,e)))}(function(e,t=!0){yx(bo),So(new _s("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),p=new Fi(new wx(s.getProvider("auth-internal")),new Ix(h,s.getProvider("app-check-internal")),Ux(h,o),h);return l={useFetchStreams:t,...l},p._setSettings(l),p}),"PUBLIC").setMultipleInstances(!0)),Ai(Qy,Yy,e),Ai(Qy,Yy,"esm2020")})();const j0={apiKey:"AIzaSyCAaT4WAVfQ1x-l1NvaaGB4nVMHEQDzigA",authDomain:"gestion-de-solicitudes-7ca4f.firebaseapp.com",projectId:"gestion-de-solicitudes-7ca4f",storageBucket:"gestion-de-solicitudes-7ca4f.firebasestorage.app",messagingSenderId:"503400175578",appId:"1:503400175578:web:ca1f54c7438a46ebbc12e3"},F0=ff(j0),rn=x0(F0),qt=Z_(F0),U0=()=>jT().find(r=>r.name==="secundaria")??ff(j0,"secundaria"),z0=()=>Z_(U0()),jC=()=>x0(U0());/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),UC=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Zy=r=>{const e=UC(r);return e.charAt(0).toUpperCase()+e.slice(1)},B0=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=he.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:h,...p},g)=>he.createElement("svg",{ref:g,...zC,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:B0("lucide",o),...p},[...h.map(([_,E])=>he.createElement(_,E)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(r,e)=>{const t=he.forwardRef(({className:s,...o},l)=>he.createElement(BC,{ref:l,iconNode:e,className:B0(`lucide-${FC(Zy(r))}`,`lucide-${r}`,s),...o}));return t.displayName=Zy(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],$0=Ke("arrow-left",$C);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],WC=Ke("chevron-down",HC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],El=Ke("circle-check",qC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],af=Ke("clock",GC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],QC=Ke("copy",KC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],H0=Ke("eye-off",YC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],W0=Ke("eye",JC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]],ZC=Ke("file-plus",XC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ap=Ke("file-text",eR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],nR=Ke("house",tR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],iR=Ke("lock",rR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sR=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],oR=Ke("log-out",sR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],q0=Ke("mail",aR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],uR=Ke("menu",lR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],hR=Ke("message-square",cR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dR=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],fR=Ke("pencil",dR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],mR=Ke("refresh-cw",pR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],e_=Ke("shield",gR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],_R=Ke("ticket",yR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],wR=Ke("trash-2",vR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],TR=Ke("trending-up",ER);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],G0=Ke("triangle-alert",IR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],SR=Ke("user-plus",xR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],CR=Ke("user",AR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],kR=Ke("users",RR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],lf=Ke("x",PR);function K0({size:r=48}){return v.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[v.jsx("rect",{width:"48",height:"48",rx:"12",fill:"#1E3FAE"}),v.jsx("rect",{x:"7",y:"12",width:"34",height:"24",rx:"4",fill:"rgba(255,255,255,0.12)",stroke:"rgba(255,255,255,0.25)",strokeWidth:"1"}),v.jsx("circle",{cx:"7",cy:"24",r:"4",fill:"#1E3FAE"}),v.jsx("circle",{cx:"41",cy:"24",r:"4",fill:"#1E3FAE"}),v.jsx("line",{x1:"11",y1:"24",x2:"37",y2:"24",stroke:"rgba(255,255,255,0.2)",strokeWidth:"1",strokeDasharray:"2.5 2"}),v.jsx("text",{x:"24",y:"21",textAnchor:"middle",dominantBaseline:"middle",fontSize:"13",fontWeight:"800",fill:"white",fontFamily:"Inter, Arial, sans-serif",children:"G"}),v.jsx("text",{x:"24",y:"32",textAnchor:"middle",dominantBaseline:"middle",fontSize:"13",fontWeight:"800",fill:"white",fontFamily:"Inter, Arial, sans-serif",children:"S"})]})}function Hc({iconSize:r=38,layout:e="horizontal"}){return v.jsxs("div",{className:`flex ${e==="vertical"?"flex-col":"items-center"} gap-3 font-sans`,children:[v.jsx(K0,{size:r}),v.jsxs("div",{className:e==="vertical"?"text-center":"",children:[v.jsx("div",{className:"text-gray-900 text-[19px] font-extrabold leading-none tracking-tight",children:"GestioSync"}),v.jsx("div",{className:"text-gray-400 text-[11px] font-bold uppercase tracking-[0.1em] mt-1",children:"Plataforma"})]})]})}function Q0({iconSize:r=38,layout:e="horizontal"}){return v.jsxs("div",{className:`flex ${e==="vertical"?"flex-col":"items-center"} gap-3 font-sans`,children:[v.jsx(K0,{size:r}),v.jsxs("div",{className:e==="vertical"?"text-center":"",children:[v.jsx("div",{className:"text-white text-[19px] font-extrabold leading-none tracking-tight",children:"GestioSync"}),v.jsx("div",{className:"text-white/60 text-[11px] font-bold uppercase tracking-[0.1em] mt-1",children:"Plataforma"})]})]})}function NR({onNavigateToForgot:r,onNavigateToRegister:e}){const[t,s]=he.useState(""),[o,l]=he.useState(""),[h,p]=he.useState(!1),[g,_]=he.useState(!1),[E,I]=he.useState(!1),[N,U]=he.useState({}),H=()=>{const Y={};return t?/\S+@\S+\.\S+/.test(t)||(Y.email="Formato inválido."):Y.email="Requerido.",o||(Y.password="Requerida."),Y},$=async()=>{const Y=H();if(Object.keys(Y).length>0){U(Y);return}U({}),I(!0);try{await e1(qt,g?H_:If),await U_(qt,t,o)}catch(Z){I(!1);let me="Ocurrió un error de autenticación.";Z instanceof Kt&&(Z.code==="auth/invalid-credential"||Z.code==="auth/user-not-found"||Z.code==="auth/wrong-password"?me="Credenciales inválidas.":Z.code==="auth/too-many-requests"&&(me="Demasiados intentos. Intente más tarde.")),U({general:me})}},F=async()=>{try{const Y=new br;await I1(qt,Y)}catch{U({general:"Error en la validación con Google."})}};return v.jsxs("div",{className:"min-h-screen flex font-sans bg-indigo-50",children:[v.jsxs("div",{className:"hidden lg:flex flex-col justify-between w-[52%] relative overflow-hidden p-12 bg-gradient-to-br from-indigo-700 to-indigo-900",children:[v.jsx("div",{className:"absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white opacity-10"}),v.jsx("div",{className:"absolute bottom-10 -right-16 w-96 h-96 rounded-full bg-white opacity-10"}),v.jsx(Q0,{iconSize:52}),v.jsxs("div",{className:"relative z-10",children:[v.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[v.jsx(e_,{size:18,className:"text-white/70"}),v.jsx("span",{className:"text-white/70 text-sm font-medium",children:"Arquitectura Segura"})]}),v.jsxs("h1",{className:"text-white text-4xl font-extrabold leading-tight mb-4",children:["Gestión de Solicitudes",v.jsx("br",{}),v.jsx("span",{className:"text-white/75 font-normal text-3xl",children:"Plataforma Centralizada"})]}),v.jsx("p",{className:"text-white/65 text-[15px] leading-relaxed max-w-[380px]",children:"Infraestructura optimizada para el registro, seguimiento y resolución de requerimientos institucionales."})]}),v.jsx("div",{className:"text-white/35 text-xs",children:"© 2026 GestioSync · Sistema Interno"})]}),v.jsx("div",{className:"flex-1 flex items-center justify-center p-6 lg:p-12",children:v.jsxs("div",{className:"w-full max-w-[420px]",children:[v.jsx("div",{className:"flex justify-center mb-8 lg:hidden",children:v.jsx(Hc,{iconSize:44,layout:"vertical"})}),v.jsxs("div",{className:"bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_40px_rgba(30,63,174,0.12)]",children:[v.jsxs("div",{className:"mb-8",children:[v.jsx("h2",{className:"text-gray-900 text-2xl font-extrabold mb-1",children:"Acceso al Sistema"}),v.jsx("p",{className:"text-gray-500 text-sm",children:"Ingrese sus credenciales corporativas."})]}),N.general&&v.jsxs("div",{className:"bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-6 border border-red-100 flex items-center gap-3",children:[v.jsx(e_,{size:18}),v.jsx("span",{className:"font-semibold",children:N.general})]}),v.jsxs("div",{className:"flex flex-col gap-5",children:[v.jsxs("div",{children:[v.jsx("label",{htmlFor:"login-email",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Correo Institucional"}),v.jsxs("div",{className:"relative",children:[v.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",children:v.jsx(q0,{size:18})}),v.jsx("input",{id:"login-email",type:"email",value:t,onChange:Y=>{s(Y.target.value),U(Z=>({...Z,email:void 0}))},className:`w-full py-3 pl-10 pr-3 border ${N.email?"border-red-400 bg-red-50":"border-gray-200 bg-slate-50"} rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white transition-colors`})]}),N.email&&v.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:N.email})]}),v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[v.jsx("label",{htmlFor:"login-password",className:"text-gray-700 text-[13px] font-semibold",children:"Contraseña"}),v.jsx("button",{onClick:r,className:"text-indigo-600 text-xs font-semibold hover:underline",children:"¿Olvidó su clave?"})]}),v.jsxs("div",{className:"relative",children:[v.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",children:v.jsx(iR,{size:18})}),v.jsx("input",{id:"login-password",type:h?"text":"password",value:o,onChange:Y=>{l(Y.target.value),U(Z=>({...Z,password:void 0}))},className:`w-full py-3 pl-10 pr-10 border ${N.password?"border-red-400 bg-red-50":"border-gray-200 bg-slate-50"} rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white transition-colors`}),v.jsx("button",{type:"button",onClick:()=>p(!h),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400",children:h?v.jsx(H0,{size:18}):v.jsx(W0,{size:18})})]}),N.password&&v.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:N.password})]}),v.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[v.jsx("input",{type:"checkbox",id:"remember",checked:g,onChange:Y=>_(Y.target.checked),className:"w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"}),v.jsx("label",{htmlFor:"remember",className:"text-gray-600 text-sm font-medium select-none cursor-pointer",children:"Mantener sesión iniciada"})]}),v.jsx("button",{onClick:$,disabled:E,className:"w-full bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors mt-2",children:E?"Validando...":"Iniciar Sesión"}),v.jsxs("div",{className:"relative flex items-center py-2",children:[v.jsx("div",{className:"flex-grow border-t border-gray-200"}),v.jsx("span",{className:"flex-shrink-0 mx-4 text-gray-400 text-xs font-medium uppercase tracking-wider",children:"Acceso Integrado"}),v.jsx("div",{className:"flex-grow border-t border-gray-200"})]}),v.jsxs("button",{onClick:F,className:"w-full flex items-center justify-center gap-3 bg-white text-gray-700 border border-gray-200 py-3 rounded-lg text-[14px] font-semibold hover:bg-gray-50 transition-colors shadow-sm",children:[v.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:[v.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),v.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),v.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),v.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),"Continuar con Google"]})]})]}),v.jsxs("div",{className:"text-center text-gray-500 text-sm mt-6 flex flex-col gap-1",children:[v.jsx("p",{children:"¿Eres parte de una empresa? Pídele a tu administrador que te agregue."}),v.jsxs("p",{children:["¿Vas a administrar una empresa nueva?"," ",v.jsx("button",{onClick:e,className:"text-indigo-600 font-semibold hover:underline",children:"Regístrala aquí"})]})]})]})})]})}const nc=["Tecnología e Innovación","Recursos Humanos","Finanzas y Contabilidad","Operaciones","Jurídica y Cumplimiento","Comunicaciones","Logística","Atención al Cliente","Dirección General"],Ut={titulo:100,descripcion:2e3,respuesta:1e3,nombre:80,empresa:80,email:254},t_=20;async function bR({nombre:r,empresa:e,email:t,clave:s,departamento:o}){const l=z0(),h=jC();try{const{user:p}=await F_(l,t,s);try{await z_(p,{displayName:r});const g=gn(yl(h,"organizaciones")),_=MC(h);_.set(g,{nombre:e,adminId:p.uid,fechaCreacion:V0()}),_.set(gn(h,"usuarios",p.uid),{nombre:r,email:t,departamento:o,rol:"admin",orgId:g.id,activo:!0,debeCambiarClave:!1,fechaRegistro:new Date}),await _.commit()}catch(g){throw await i1(p).catch(()=>{}),g}}finally{await Tf(l)}await U_(qt,t,s)}const DR=/<\/?[a-zA-Z!][^>]*>/g,VR=/[​-‏‪-‮⁦-⁩﻿]/g;function ki(r,e=!1){const t=r.replace(DR,"").replace(VR,"").replace(/\r\n?/g,`
`);return e?t.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g,"").replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim():t.replace(/[\u0000-\u001F\u007F]/g," ").replace(/ {2,}/g," ").trim()}const Y0=r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)&&r.length<=Ut.email,OR={nombre:"",empresa:"",email:"",departamento:"",clave:"",confirmar:""},Hu=r=>`w-full py-3 px-3 border ${r?"border-red-400 bg-red-50":"border-gray-200 bg-slate-50"} rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white transition-colors`;function LR({onNavigateToLogin:r}){const[e,t]=he.useState(OR),[s,o]=he.useState({}),[l,h]=he.useState(null),[p,g]=he.useState(!1),[_,E]=he.useState(!1),I=($,F)=>{t(Y=>({...Y,[$]:F})),o(Y=>({...Y,[$]:void 0}))},N=($,F,Y)=>{const Z={};return $||(Z.nombre="Requerido"),F?F.length<2&&(Z.empresa="Mínimo 2 caracteres"):Z.empresa="Requerido",Y?Y0(Y)||(Z.email="Formato inválido"):Z.email="Requerido",e.departamento||(Z.departamento="Seleccione su oficina"),e.clave?e.clave.length<8&&(Z.clave="Mínimo 8 caracteres"):Z.clave="Requerida",e.confirmar?e.clave!==e.confirmar&&(Z.confirmar="Las contraseñas no coinciden"):Z.confirmar="Requerido",Z},U=async $=>{$.preventDefault();const F=ki(e.nombre),Y=ki(e.empresa),Z=ki(e.email).toLowerCase(),me=N(F,Y,Z);if(Object.keys(me).length>0)return o(me);E(!0),h(null);try{await bR({nombre:F,empresa:Y,email:Z,clave:e.clave,departamento:e.departamento})}catch(xe){console.error("Registro fallido:",xe),xe instanceof Kt&&xe.code==="auth/email-already-in-use"?h("Ya existe una cuenta con ese correo."):h("No se pudo completar el registro. Revisa los datos e intenta de nuevo."),E(!1)}},H=($,F,Y,Z,me="text")=>v.jsxs("div",{children:[v.jsx("label",{htmlFor:$,className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:F}),v.jsx("input",{id:$,type:me,maxLength:Z,value:e[Y],onChange:xe=>I(Y,xe.target.value),className:Hu(s[Y])}),s[Y]&&v.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:s[Y]})]});return v.jsx("div",{className:"min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans",children:v.jsxs("div",{className:"w-full max-w-[480px]",children:[v.jsx("div",{className:"flex justify-center mb-8",children:v.jsx(Hc,{iconSize:44,layout:"vertical"})}),v.jsxs("form",{onSubmit:U,noValidate:!0,className:"bg-white rounded-2xl p-8 shadow-[0_8px_40px_rgba(30,63,174,0.12)]",children:[v.jsx("h2",{className:"text-gray-900 text-2xl font-extrabold mb-1",children:"Registra tu empresa"}),v.jsx("p",{className:"text-gray-500 text-sm mb-6",children:"Serás el administrador. Después podrás agregar a tu equipo."}),l&&v.jsx("div",{role:"alert",className:"bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-5 border border-red-100 font-semibold",children:l}),v.jsxs("div",{className:"flex flex-col gap-4",children:[H("reg-nombre","Tu nombre y apellido","nombre",Ut.nombre),H("reg-empresa","Nombre de la empresa","empresa",Ut.empresa),H("reg-email","Correo","email",Ut.email,"email"),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"reg-oficina",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Tu oficina"}),v.jsxs("select",{id:"reg-oficina",value:e.departamento,onChange:$=>I("departamento",$.target.value),className:Hu(s.departamento),children:[v.jsx("option",{value:"",disabled:!0,children:"Seleccionar..."}),nc.map($=>v.jsx("option",{value:$,children:$},$))]}),s.departamento&&v.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:s.departamento})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"reg-clave",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Contraseña"}),v.jsxs("div",{className:"relative",children:[v.jsx("input",{id:"reg-clave",type:p?"text":"password",value:e.clave,onChange:$=>I("clave",$.target.value),placeholder:"Mínimo 8 caracteres",className:`${Hu(s.clave)} pr-11`}),v.jsx("button",{type:"button",onClick:()=>g(!p),"aria-label":p?"Ocultar contraseña":"Mostrar contraseña",className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400",children:p?v.jsx(H0,{size:18}):v.jsx(W0,{size:18})})]}),s.clave&&v.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:s.clave})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"reg-confirmar",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Repite la contraseña"}),v.jsx("input",{id:"reg-confirmar",type:p?"text":"password",value:e.confirmar,onChange:$=>I("confirmar",$.target.value),className:Hu(s.confirmar)}),s.confirmar&&v.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:s.confirmar})]}),v.jsx("button",{type:"submit",disabled:_,className:"w-full mt-2 bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors",children:_?"Creando tu empresa...":"Crear empresa"})]})]}),v.jsx("div",{className:"flex justify-center mt-6",children:v.jsxs("button",{onClick:r,className:"flex items-center gap-1.5 text-indigo-600 text-sm font-semibold hover:underline",children:[v.jsx($0,{size:16})," Volver al inicio de sesión"]})})]})})}async function MR(r){const e=await M0(gn(rn,"usuarios",r));return e.exists()?e.data():null}async function jR(r){const e=await M0(gn(rn,"organizaciones",r));return e.exists()?e.data():null}function FR(){const[r,e]=he.useState(null),[t,s]=he.useState(null),[o,l]=he.useState(!1);return he.useEffect(()=>{const h=qt.currentUser;if(!h)return;(async()=>{const g=await MR(h.uid);if(!g){l(!0);return}if(e(g),!(g.activo===!1||!g.orgId))try{s(await jR(g.orgId))}catch(_){console.error("Error al cargar la organización:",_)}})()},[]),{perfil:r,setPerfil:e,organizacion:t,sinPerfil:o}}function J0(r){const e=Date.now();return[...r].sort((s,o)=>{var l,h;return(((l=o.data().fecha)==null?void 0:l.toMillis())??e)-(((h=s.data().fecha)==null?void 0:h.toMillis())??e)}).map(s=>{var h;const o=s.data(),l=(h=o.fecha)==null?void 0:h.toDate();return{id:s.id,title:o.titulo||"Sin título",type:o.tipo||"Sin tipo",status:o.estado||"En revisión",date:l?l.toLocaleDateString("es-CO"):"Reciente",time:l?l.toLocaleTimeString("es-CO",{hour:"2-digit",minute:"2-digit"}):"",autorNombre:o.autorNombre||"Usuario",autorEmail:o.autorEmail||"",descripcion:o.descripcion||"Sin descripción detallada.",prioridad:o.prioridad||"Media",respuestaAdmin:o.respuestaAdmin||null}})}async function UR(r){const e=await op(np(yl(rn,"solicitudes"),rp("orgId","==",r)));return J0(e.docs)}async function zR(r){const e=await op(np(yl(rn,"solicitudes"),rp("usuarioId","==",r)));return J0(e.docs)}async function BR(r,e){const t=qt.currentUser;await OC(yl(rn,"solicitudes"),{...r,estado:"En revisión",usuarioId:t==null?void 0:t.uid,orgId:e,autorNombre:(t==null?void 0:t.displayName)||"Usuario",autorEmail:(t==null?void 0:t.email)||"",fecha:V0()})}const $R=(r,e)=>No(gn(rn,"solicitudes",r),{...e}),HR=(r,e)=>No(gn(rn,"solicitudes",r),{estado:e}),WR=(r,e)=>No(gn(rn,"solicitudes",r),{respuestaAdmin:e}),qR=r=>VC(gn(rn,"solicitudes",r));function GR(r,e){const[t,s]=he.useState([]),[o,l]=he.useState(!0),h=r==null?void 0:r.rol,p=r==null?void 0:r.orgId,g=r!==null&&r.activo!==!1,_=he.useCallback(async()=>{const H=qt.currentUser;if(!(!H||!h)){l(!0);try{const $=h==="admin";if($&&!p){s([]),e("Tu cuenta no tiene una empresa asignada.");return}s($&&p?await UR(p):await zR(H.uid))}catch($){console.error("Error al obtener datos:",$),e("No se pudieron cargar las solicitudes. Intenta de nuevo.")}finally{l(!1)}}},[h,p,e]);return he.useEffect(()=>{g&&_()},[g,_]),{solicitudes:t,cargando:o,cambiarEstado:async(H,$)=>{try{await HR(H,$),s(F=>F.map(Y=>Y.id===H?{...Y,status:$}:Y))}catch(F){console.error("Error actualizando estado:",F),e("No se pudo cambiar el estado de la solicitud.")}},responder:async(H,$)=>{try{return await WR(H,$),s(F=>F.map(Y=>Y.id===H?{...Y,respuestaAdmin:$}:Y)),!0}catch(F){return console.error("Error al responder:",F),e("No se pudo enviar la respuesta."),!1}},eliminar:async H=>{try{return await qR(H),s($=>$.filter(F=>F.id!==H)),!0}catch($){return console.error("Error eliminando documento:",$),e("No se pudo eliminar la solicitud."),!1}},guardar:async(H,$)=>{try{if($)await $R($,H);else{if(!p)return e("Tu cuenta no tiene una empresa asignada. Pídele a tu administrador que la configure."),!1;await BR(H,p)}return await _(),!0}catch(F){return console.error("Error de escritura:",F),e("No se pudo guardar la solicitud. Revisa tu conexión e intenta de nuevo."),!1}}}}function KR({items:r,activo:e,nombre:t,rolTexto:s,onSeleccionar:o,onCerrarSesion:l}){return v.jsxs("div",{className:"flex flex-col h-full",children:[v.jsx("div",{className:"p-6 pb-8",children:v.jsx(Q0,{iconSize:40})}),v.jsx("nav",{className:"flex-1 px-3",children:r.map(h=>v.jsxs("button",{onClick:()=>o(h.id),className:"flex items-center gap-3 w-full px-4 py-3 rounded-xl mb-1 transition-all",style:{background:e===h.id?"rgba(255,255,255,0.18)":"transparent",color:e===h.id?"white":"rgba(255,255,255,0.65)",border:"none",cursor:"pointer",fontFamily:"Inter, sans-serif",fontSize:"14px",fontWeight:e===h.id?600:400,textAlign:"left"},children:[v.jsx("span",{style:{opacity:e===h.id?1:.7},children:h.icon}),h.label]},h.id))}),v.jsxs("div",{className:"p-4 mx-3 mb-4 rounded-xl",style:{background:"rgba(0,0,0,0.15)"},children:[v.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[v.jsx("div",{className:"w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",style:{background:"rgba(255,255,255,0.2)"},children:v.jsx("span",{style:{color:"white",fontSize:"14px",fontWeight:700},children:t.charAt(0)||"U"})}),v.jsxs("div",{children:[v.jsx("div",{style:{color:"white",fontSize:"13px",fontWeight:600},children:t}),v.jsx("div",{style:{color:"rgba(255,255,255,0.55)",fontSize:"11px"},children:s})]})]}),v.jsxs("button",{onClick:l,className:"flex items-center gap-2 w-full px-3 py-2 rounded-lg",style:{background:"rgba(220,53,69,0.25)",color:"#FCA5A5",border:"1px solid rgba(220,53,69,0.3)",cursor:"pointer",fontSize:"13px",fontWeight:600,fontFamily:"Inter, sans-serif"},children:[v.jsx(oR,{size:15})," Cerrar Sesión"]})]})]})}function QR({solicitudes:r,esAdmin:e}){const t=r.length,s=r.filter(h=>h.status==="En revisión").length,o=r.filter(h=>h.status==="Aprobada"||h.status==="Rechazada").length,l=[{label:"Total Registros",value:t,icon:v.jsx(ap,{size:20}),color:"#1E3FAE",bg:"#EEF2FF"},{label:"En Proceso",value:s,icon:v.jsx(af,{size:20}),color:"#D97706",bg:"#FEF3C7"},{label:"Finalizadas",value:o,icon:v.jsx(El,{size:20}),color:"#059669",bg:"#D1FAE5"}];return v.jsxs("div",{className:"p-8 max-w-7xl mx-auto",children:[v.jsxs("div",{className:"mb-8",children:[v.jsx("h2",{style:{color:"#111827",fontSize:"24px",fontWeight:700,letterSpacing:"-0.02em"},children:"Dashboard"}),v.jsx("p",{style:{color:"#6B7280",fontSize:"14px",marginTop:"4px"},children:e?"Resumen operativo general.":"Resumen de actividad."})]}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:l.map(h=>v.jsx("div",{className:"bg-white p-6 rounded-2xl border",style:{borderColor:"#F3F4F6"},children:v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsx("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center",style:{background:h.bg,color:h.color},children:h.icon}),v.jsxs("div",{children:[v.jsx("div",{style:{color:"#6B7280",fontSize:"13px",fontWeight:500},children:h.label}),v.jsx("div",{style:{color:"#111827",fontSize:"24px",fontWeight:700,marginTop:"2px"},children:h.value})]})]})},h.label))})]})}const YR=["Soporte Técnico","Administrativa","Recursos Humanos","Financiera","Logística","Otro"],JR=["Alta","Media","Baja"],bd={"En revisión":{color:"#B45309",bg:"#FEF3C7",icon:v.jsx(af,{size:12})},Aprobada:{color:"#15803D",bg:"#DCFCE7",icon:v.jsx(El,{size:12})},Pendiente:{color:"#6B7280",bg:"#F3F4F6",icon:v.jsx(af,{size:12})},Rechazada:{color:"#DC3545",bg:"#FEF2F2",icon:v.jsx(G0,{size:12})}},XR=(r,e)=>e?r==="Alta"?{border:"#FCA5A5",bg:"#FEF2F2",text:"#DC2626"}:r==="Media"?{border:"#FDE68A",bg:"#FEF3C7",text:"#D97706"}:r==="Baja"?{border:"#A7F3D0",bg:"#DCFCE7",text:"#16A34A"}:{border:"#E5E7EB",bg:"#F9FAFB",text:"#374151"}:{border:"#E5E7EB",bg:"#F9FAFB",text:"#6B7280"},ZR={title:"",type:"Soporte Técnico",description:"",priority:"Media"},Wu={display:"block",color:"#374151",fontSize:"13px",fontWeight:600,marginBottom:"6px"},Dd=r=>({width:"100%",padding:"12px 14px",border:`1.5px solid ${r?"#DC3545":"#E5E7EB"}`,borderRadius:"8px",outline:"none"});function ek({inicial:r,onGuardar:e,onCancelar:t,onTerminado:s}){const[o]=he.useState(r!==null),[l,h]=he.useState(r?{title:r.title,type:r.type,description:r.descripcion,priority:r.prioridad}:ZR),[p,g]=he.useState({}),[_,E]=he.useState(!1),[I,N]=he.useState(!1);he.useEffect(()=>{if(!I)return;const F=setTimeout(s,2e3);return()=>clearTimeout(F)},[I]);const U=(F,Y)=>{h(Z=>({...Z,[F]:Y})),g(Z=>({...Z,[F]:void 0}))},H=(F,Y)=>{const Z={};return F?F.length>Ut.titulo&&(Z.title=`Máximo ${Ut.titulo} caracteres`):Z.title="Requerido",l.type||(Z.type="Requerido"),Y?Y.length<t_?Z.description=`Mínimo ${t_} caracteres`:Y.length>Ut.descripcion&&(Z.description=`Máximo ${Ut.descripcion} caracteres`):Z.description="Requerido",Z},$=async()=>{const F=ki(l.title),Y=ki(l.description,!0),Z=H(F,Y);if(Object.keys(Z).length>0){g(Z);return}E(!0);const me=await e({titulo:F,tipo:l.type,descripcion:Y,prioridad:l.priority});E(!1),me&&N(!0)};return I?v.jsx("div",{className:"flex items-center justify-center min-h-[400px]",children:v.jsxs("div",{className:"text-center max-w-sm",children:[v.jsx("div",{className:"flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-5",style:{background:"#DCFCE7"},children:v.jsx(El,{size:44,style:{color:"#22C55E"}})}),v.jsx("h2",{style:{color:"#111827",fontSize:"22px",fontWeight:800,marginBottom:"5px"},children:o?"Datos actualizados":"Solicitud procesada"})]})}):v.jsxs("div",{children:[v.jsx("div",{className:"mb-7",children:v.jsx("h1",{style:{color:"#111827",fontSize:"26px",fontWeight:800,marginBottom:"5px"},children:o?"Edición de registro":"Nuevo registro"})}),v.jsx("div",{className:"bg-white rounded-2xl p-6 lg:p-8 max-w-2xl",style:{boxShadow:"0 2px 20px rgba(30,63,174,0.08)"},children:v.jsxs("div",{className:"flex flex-col gap-5",children:[v.jsxs("div",{children:[v.jsx("label",{htmlFor:"sol-titulo",style:Wu,children:"Título"}),v.jsx("input",{id:"sol-titulo",type:"text",maxLength:Ut.titulo,value:l.title,onChange:F=>U("title",F.target.value),style:Dd(p.title)}),p.title&&v.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:p.title})]}),v.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[v.jsxs("div",{children:[v.jsx("label",{htmlFor:"sol-tipo",style:Wu,children:"Categoría"}),v.jsxs("select",{id:"sol-tipo",value:l.type,onChange:F=>U("type",F.target.value),style:Dd(p.type),children:[v.jsx("option",{value:"",disabled:!0,children:"Seleccione"}),YR.map(F=>v.jsx("option",{value:F,children:F},F))]})]}),v.jsxs("div",{children:[v.jsx("label",{style:Wu,children:"Prioridad"}),v.jsx("div",{className:"flex gap-2",children:JR.map(F=>{const Y=l.priority===F,Z=XR(F,Y);return v.jsx("button",{type:"button",onClick:()=>U("priority",F),style:{flex:1,padding:"10px 6px",borderRadius:"8px",border:`1.5px solid ${Z.border}`,background:Z.bg,color:Z.text,fontWeight:Y?700:500,cursor:"pointer",transition:"all 0.2s"},children:F},F)})})]})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"sol-detalles",style:Wu,children:"Detalles"}),v.jsx("textarea",{id:"sol-detalles",rows:5,maxLength:Ut.descripcion,value:l.description,onChange:F=>U("description",F.target.value),style:{...Dd(p.description),resize:"vertical"}}),p.description&&v.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:p.description}),v.jsxs("p",{className:"text-gray-400 text-xs mt-1 text-right",children:[l.description.length,"/",Ut.descripcion]})]}),v.jsxs("div",{className:"flex justify-end gap-3 pt-2",children:[o&&v.jsx("button",{onClick:t,className:"px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors",children:"Cancelar"}),v.jsx("button",{onClick:$,disabled:_,style:{padding:"12px 24px",borderRadius:"8px",border:"none",background:_?"#93A8E8":"#1E3FAE",color:"white",fontWeight:700,cursor:_?"not-allowed":"pointer"},children:_?"Procesando...":"Guardar"})]})]})})]})}const Oa="text-gray-400 text-[11px] font-bold uppercase tracking-wider",tk=r=>r==="Alta"?{background:"#FEE2E2",color:"#DC2626"}:r==="Media"?{background:"#FEF3C7",color:"#D97706"}:{background:"#DCFCE7",color:"#16A34A"};function nk({solicitud:r,esAdmin:e,onResponder:t,onEditar:s,onEliminar:o}){const[l,h]=he.useState(""),p=async()=>{const g=ki(l,!0);g&&await t(r.id,g)&&h("")};return v.jsx("div",{className:"px-3 sm:px-5 pb-4 sm:pb-5 bg-indigo-50/10",children:v.jsxs("div",{className:"bg-white p-4 sm:p-5 rounded-xl border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6",children:[v.jsxs("div",{className:"md:col-span-2",children:[v.jsx("h4",{className:`${Oa} mb-2`,children:"Desglose"}),v.jsx("p",{className:"text-gray-700 text-sm leading-relaxed whitespace-pre-wrap",children:r.descripcion}),v.jsxs("div",{className:"mt-6 pt-5 border-t border-gray-100",children:[v.jsxs("h4",{className:`${Oa} mb-3`,children:[v.jsx(hR,{size:12,className:"inline mr-1 -mt-0.5"})," Interacción Administrativa"]}),r.respuestaAdmin?v.jsx("div",{className:"bg-blue-50 border border-blue-100 rounded-lg p-4 text-blue-800 text-sm",children:r.respuestaAdmin}):e?v.jsxs("div",{className:"flex flex-col gap-3",children:[v.jsx("textarea",{placeholder:"Anotación interna o respuesta...",maxLength:Ut.respuesta,value:l,onChange:g=>h(g.target.value),className:"w-full p-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-indigo-500 focus:ring-1",rows:3}),v.jsx("button",{onClick:p,disabled:!l.trim(),className:"self-end px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:"Responder"})]}):v.jsx("p",{className:"text-gray-400 text-sm italic",children:"Sin notas registradas."})]}),!e&&r.status==="En revisión"&&v.jsxs("div",{className:"mt-6 pt-5 border-t border-gray-100 flex flex-wrap justify-end gap-3",children:[v.jsxs("button",{onClick:()=>s(r),className:"px-4 py-2 border border-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-50 flex items-center gap-2",children:[v.jsx(fR,{size:14})," Modificar"]}),v.jsxs("button",{onClick:()=>o(r.id),className:"px-4 py-2 bg-red-50 text-red-600 border border-red-100 text-sm font-semibold rounded-lg hover:bg-red-100 flex items-center gap-2",children:[v.jsx(wR,{size:14})," Eliminar"]})]})]}),v.jsxs("div",{className:"flex flex-col gap-4",children:[v.jsxs("div",{children:[v.jsx("h4",{className:`${Oa} mb-1`,children:"Autor"}),v.jsx("div",{className:"text-gray-900 text-sm font-semibold",children:r.autorNombre}),v.jsx("div",{className:"text-gray-500 text-xs",children:r.autorEmail})]}),v.jsxs("div",{children:[v.jsx("h4",{className:`${Oa} mb-1`,children:"Timestamp"}),v.jsxs("div",{className:"text-gray-700 text-sm font-medium",children:[r.date," ",v.jsx("span",{className:"text-gray-400 font-normal",children:"a las"})," ",r.time]})]}),v.jsxs("div",{children:[v.jsx("h4",{className:`${Oa} mb-1`,children:"Severidad"}),v.jsx("span",{className:"inline-flex items-center px-2 py-1 rounded text-xs font-bold",style:tk(r.prioridad),children:r.prioridad})]})]})]})})}function rk({solicitudes:r,cargando:e,esAdmin:t,onCambiarEstado:s,onResponder:o,onEditar:l,onEliminar:h}){const[p,g]=he.useState(null),_=async E=>{window.confirm("¿Está seguro de cancelar esta solicitud? La acción es irreversible.")&&await h(E)&&g(null)};return v.jsxs("div",{children:[v.jsx("div",{className:"flex items-center justify-between mb-7",children:v.jsx("h1",{style:{color:"#111827",fontSize:"26px",fontWeight:800},children:"Directorio de Solicitudes"})}),v.jsxs("div",{className:"bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100",children:[v.jsxs("div",{className:"hidden sm:flex items-center px-5 py-3 bg-gray-50 border-b border-gray-100",children:[v.jsx("span",{className:"text-gray-500 text-xs font-semibold flex-1",children:"Referencia"}),v.jsx("span",{className:"text-gray-500 text-xs font-semibold w-[120px]",children:"Status"}),t&&v.jsx("span",{className:"text-gray-500 text-xs font-semibold w-[90px] text-right",children:"Control"}),v.jsx("span",{className:"w-8"})]}),e?v.jsx("div",{className:"p-10 flex justify-center text-gray-400",children:"Cargando..."}):r.length===0?v.jsx("div",{className:"p-10 text-center text-gray-400",children:"Sin registros."}):r.map(E=>{var N,U,H;const I=p===E.id;return v.jsxs("div",{className:"border-b border-gray-50 flex flex-col",children:[v.jsxs("div",{onClick:()=>g(I?null:E.id),className:`flex flex-wrap sm:flex-nowrap items-center gap-x-3 gap-y-3 sm:gap-4 p-4 sm:p-5 cursor-pointer transition-colors ${I?"bg-indigo-50/20":"hover:bg-gray-50"}`,children:[v.jsx("div",{className:"hidden sm:flex w-10 h-10 rounded-lg items-center justify-center bg-indigo-50 shrink-0",children:v.jsx(ap,{size:18,className:"text-indigo-600"})}),v.jsxs("div",{className:"order-1 flex-1 min-w-0",children:[v.jsx("div",{className:"text-gray-900 text-sm font-semibold leading-snug break-words sm:truncate",children:E.title}),v.jsxs("div",{className:"text-gray-400 text-xs mt-1",children:[v.jsx("span",{className:"font-medium",children:E.id.slice(0,8)})," · ",E.type]}),t&&v.jsxs("span",{className:"block w-fit mt-1.5 text-indigo-500 text-xs font-medium bg-indigo-50 px-1.5 py-0.5 rounded max-w-full truncate",children:["De: ",E.autorNombre]})]}),v.jsx("div",{className:"order-2 sm:order-4 w-8 flex justify-end text-gray-300 shrink-0",children:v.jsx(WC,{size:18,className:`transition-transform duration-200 ${I?"rotate-180":""}`})}),v.jsxs("div",{className:"order-3 w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 sm:gap-4",children:[v.jsxs("div",{className:"flex items-center gap-1 px-3 py-1 rounded-full shrink-0 sm:w-[120px] justify-center text-xs font-semibold",style:{background:(N=bd[E.status])==null?void 0:N.bg,color:(U=bd[E.status])==null?void 0:U.color},children:[(H=bd[E.status])==null?void 0:H.icon," ",E.status]}),t&&v.jsx("div",{className:"flex items-center justify-end gap-2 sm:w-[90px] shrink-0",children:E.status==="En revisión"?v.jsxs(v.Fragment,{children:[v.jsx("button",{onClick:$=>{$.stopPropagation(),s(E.id,"Aprobada")},className:"w-9 h-9 sm:w-8 sm:h-8 rounded border border-green-200 text-green-600 bg-green-50 hover:bg-green-100 flex justify-center items-center",children:v.jsx(El,{size:16})}),v.jsx("button",{onClick:$=>{$.stopPropagation(),s(E.id,"Rechazada")},className:"w-9 h-9 sm:w-8 sm:h-8 rounded border border-red-200 text-red-600 bg-red-50 hover:bg-red-100 flex justify-center items-center",children:v.jsx(G0,{size:16})})]}):v.jsx("span",{className:"text-xs font-medium text-gray-300 sm:mr-2",children:"Auditado"})})]})]}),I&&v.jsx(nk,{solicitud:E,esAdmin:t,onResponder:o,onEditar:l,onEliminar:_})]},E.id)})]})]})}function ik({perfil:r,organizacion:e}){var l;const t=qt.currentUser,s=(r==null?void 0:r.rol)==="admin",o=[{label:"ID Interno",value:t==null?void 0:t.uid},{label:"Rol del sistema",value:s?"Administrador":"Usuario estándar"},{label:"Empresa",value:(e==null?void 0:e.nombre)||"N/A"},{label:"División",value:(r==null?void 0:r.departamento)||"N/A"}];return v.jsxs("div",{className:"p-8 max-w-3xl mx-auto",children:[v.jsx("h1",{className:"text-gray-900 text-2xl font-bold mb-6",children:"Configuración de Cuenta"}),v.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-sm border border-gray-100",children:[v.jsxs("div",{className:"flex items-center gap-5 pb-6 border-b border-gray-100",children:[v.jsx("div",{className:"w-16 h-16 rounded-full flex items-center justify-center bg-indigo-50 shrink-0",children:v.jsx("span",{className:"text-indigo-600 text-2xl font-bold",children:((l=t==null?void 0:t.displayName)==null?void 0:l.charAt(0))||"U"})}),v.jsxs("div",{children:[v.jsx("div",{className:"text-gray-900 text-lg font-bold",children:t==null?void 0:t.displayName}),v.jsx("div",{className:"text-gray-500 text-sm",children:t==null?void 0:t.email}),v.jsxs("div",{className:"inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-semibold",children:[v.jsx(TR,{size:11})," ",s?"Superadmin":r==null?void 0:r.departamento]})]})]}),v.jsx("div",{className:"mt-6 flex flex-col gap-4",children:o.map(h=>v.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-50 last:border-0",children:[v.jsx("span",{className:"text-gray-500 text-sm font-medium",children:h.label}),v.jsx("span",{className:"text-gray-900 text-sm font-semibold",children:h.value})]},h.label))})]})]})}const n_="ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";function sk(r=12){const e=crypto.getRandomValues(new Uint32Array(r));return Array.from(e,t=>n_[t%n_.length]).join("")}const r_={nombre:"",email:"",departamento:""};function ok({orgId:r,adminUid:e}){const[t,s]=he.useState([]),[o,l]=he.useState(!0),[h,p]=he.useState(null),[g,_]=he.useState(r_),[E,I]=he.useState({}),[N,U]=he.useState(!1),[H,$]=he.useState(null),[F,Y]=he.useState(!1),Z=async()=>{l(!0);try{const k=(await op(np(yl(rn,"usuarios"),rp("orgId","==",r)))).docs.map(b=>({id:b.id,...b.data()}));s(k.sort((b,x)=>b.nombre.localeCompare(x.nombre)))}catch(C){console.error("Error al cargar integrantes:",C),p("No se pudieron cargar los integrantes.")}finally{l(!1)}};he.useEffect(()=>{Z()},[r]);const me=(C,k)=>{_(b=>({...b,[C]:k})),I(b=>({...b,[C]:void 0}))},xe=(C,k)=>{const b={};return C?C.length>Ut.nombre&&(b.nombre=`Máximo ${Ut.nombre} caracteres`):b.nombre="Requerido",k?Y0(k)||(b.email="Formato inválido"):b.email="Requerido",g.departamento||(b.departamento="Seleccione la oficina"),b},Ae=async C=>{C.preventDefault();const k=ki(g.nombre),b=ki(g.email).toLowerCase(),x=xe(k,b);if(Object.keys(x).length>0)return I(x);U(!0),p(null);const je=sk(),nt=z0();let st=!1;try{const Ve=await F_(nt,b,je);st=!0,await z_(Ve.user,{displayName:k}),await DC(gn(rn,"usuarios",Ve.user.uid),{nombre:k,email:b,departamento:g.departamento,rol:"usuario",orgId:r,activo:!0,debeCambiarClave:!0,fechaRegistro:new Date}),$({nombre:k,email:b,clave:je}),Y(!1),_(r_),Z()}catch(Ve){console.error("Error al crear integrante:",Ve),Ve instanceof Kt&&Ve.code==="auth/email-already-in-use"?p("Ya existe una cuenta con ese correo."):p(st?"La cuenta se creó, pero no se pudo guardar su perfil. Revisa los permisos e inténtalo de nuevo.":"No se pudo crear el integrante. Revisa los datos e intenta de nuevo.")}finally{await Tf(nt),U(!1)}},ke=async(C,k)=>{try{await No(gn(rn,"usuarios",C),{departamento:k}),s(b=>b.map(x=>x.id===C?{...x,departamento:k}:x))}catch(b){console.error("Error al cambiar la oficina:",b),p("No se pudo cambiar la oficina.")}},D=async(C,k)=>{try{await No(gn(rn,"usuarios",C),{activo:k}),s(b=>b.map(x=>x.id===C?{...x,activo:k}:x))}catch(b){console.error("Error al cambiar el estado:",b),p("No se pudo cambiar el estado del integrante.")}},A=async()=>{if(H)try{await navigator.clipboard.writeText(H.clave),Y(!0)}catch{}},R=C=>`w-full py-2.5 px-3 border rounded-lg text-sm outline-none focus:border-indigo-600 ${C?"border-red-400 bg-red-50":"border-gray-200 bg-white"}`;return v.jsxs("div",{className:"max-w-4xl",children:[v.jsx("h1",{className:"text-gray-900 text-2xl font-extrabold mb-1",children:"Integrantes"}),v.jsx("p",{className:"text-gray-500 text-sm mb-6",children:"Personas de tu empresa. Aquí las agregas y defines en qué oficina están."}),h&&v.jsxs("div",{role:"alert",className:"mb-5 flex items-start justify-between gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600",children:[v.jsx("span",{children:h}),v.jsx("button",{onClick:()=>p(null),"aria-label":"Cerrar aviso",className:"shrink-0 text-red-400 hover:text-red-600",children:v.jsx(lf,{size:18})})]}),H&&v.jsxs("div",{className:"mb-6 rounded-xl border border-green-200 bg-green-50 p-4",children:[v.jsxs("p",{className:"text-green-800 text-sm font-semibold mb-1",children:["Integrante creado: ",H.nombre]}),v.jsxs("p",{className:"text-green-700 text-sm mb-3",children:["Entrégale esta contraseña temporal a ",v.jsx("strong",{children:H.email}),". No se vuelve a mostrar, y al entrar tendrá que cambiarla."]}),v.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[v.jsx("code",{className:"rounded-lg bg-white border border-green-200 px-3 py-2 text-base font-bold tracking-wider text-gray-900",children:H.clave}),v.jsxs("button",{onClick:A,className:"flex items-center gap-2 rounded-lg border border-green-300 bg-white px-3 py-2 text-sm font-semibold text-green-700 hover:bg-green-100",children:[v.jsx(QC,{size:14})," ",F?"Copiada":"Copiar"]}),v.jsx("button",{onClick:()=>$(null),className:"text-sm font-medium text-green-700 hover:underline",children:"Cerrar"})]})]}),v.jsxs("form",{onSubmit:Ae,className:"bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-8",children:[v.jsxs("h2",{className:"text-gray-900 text-base font-bold mb-4 flex items-center gap-2",children:[v.jsx(SR,{size:18})," Agregar integrante"]}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[v.jsxs("div",{children:[v.jsx("label",{className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Nombre y apellido"}),v.jsx("input",{value:g.nombre,maxLength:Ut.nombre,onChange:C=>me("nombre",C.target.value),className:R(E.nombre)}),E.nombre&&v.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:E.nombre})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Correo"}),v.jsx("input",{type:"email",value:g.email,maxLength:Ut.email,onChange:C=>me("email",C.target.value),className:R(E.email)}),E.email&&v.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:E.email})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Oficina"}),v.jsxs("select",{value:g.departamento,onChange:C=>me("departamento",C.target.value),className:R(E.departamento),children:[v.jsx("option",{value:"",disabled:!0,children:"Seleccionar..."}),nc.map(C=>v.jsx("option",{value:C,children:C},C))]}),E.departamento&&v.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:E.departamento})]})]}),v.jsx("div",{className:"flex justify-end mt-5",children:v.jsx("button",{type:"submit",disabled:N,className:"rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-indigo-700 disabled:bg-indigo-300",children:N?"Creando...":"Crear integrante"})})]}),v.jsxs("h2",{className:"text-gray-900 text-base font-bold mb-3",children:["Equipo (",t.length,")"]}),o?v.jsx("p",{className:"text-gray-400 text-sm",children:"Cargando..."}):v.jsx("div",{className:"flex flex-col gap-3",children:t.map(C=>{const k=C.id===e,b=C.activo!==!1;return v.jsxs("div",{className:`bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-5 ${b?"":"opacity-60"}`,children:[v.jsxs("div",{className:"flex-1 min-w-0",children:[v.jsxs("div",{className:"text-gray-900 text-sm font-semibold truncate",children:[C.nombre,C.rol==="admin"&&v.jsx("span",{className:"ml-2 rounded bg-indigo-50 px-1.5 py-0.5 text-[11px] font-bold text-indigo-600",children:"Admin"}),!b&&v.jsx("span",{className:"ml-2 rounded bg-gray-100 px-1.5 py-0.5 text-[11px] font-bold text-gray-500",children:"Desactivado"})]}),v.jsx("div",{className:"text-gray-500 text-xs truncate",children:C.email})]}),v.jsxs("select",{value:C.departamento,onChange:x=>ke(C.id,x.target.value),"aria-label":`Oficina de ${C.nombre}`,className:"md:w-56 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-600",children:[!nc.includes(C.departamento)&&v.jsx("option",{value:C.departamento,children:C.departamento}),nc.map(x=>v.jsx("option",{value:x,children:x},x))]}),!k&&v.jsx("button",{onClick:()=>D(C.id,!b),className:`rounded-lg border px-3 py-2 text-sm font-semibold ${b?"border-red-100 bg-red-50 text-red-600 hover:bg-red-100":"border-green-200 bg-green-50 text-green-700 hover:bg-green-100"}`,children:b?"Desactivar":"Activar"})]},C.id)})})]})}function ak({onListo:r,onCerrarSesion:e}){const[t,s]=he.useState(""),[o,l]=he.useState(""),[h,p]=he.useState(null),[g,_]=he.useState(!1),E=async N=>{N.preventDefault();const U=qt.currentUser;if(U){if(t.length<8)return p("La contraseña debe tener mínimo 8 caracteres.");if(t!==o)return p("Las contraseñas no coinciden.");_(!0),p(null);try{await XI(U,t),await No(gn(rn,"usuarios",U.uid),{debeCambiarClave:!1}),r()}catch(H){console.error("Error al cambiar la contraseña:",H),H instanceof Kt&&H.code==="auth/requires-recent-login"?p("Por seguridad, cierra sesión y vuelve a entrar con tu contraseña temporal."):p("No se pudo cambiar la contraseña. Intenta de nuevo.")}finally{_(!1)}}},I="w-full py-3 px-3 border border-gray-200 bg-slate-50 rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white";return v.jsx("div",{className:"min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans",children:v.jsxs("form",{onSubmit:E,className:"bg-white rounded-2xl p-8 w-full max-w-[420px] shadow-[0_8px_40px_rgba(30,63,174,0.12)]",children:[v.jsx("h2",{className:"text-gray-900 text-2xl font-extrabold mb-1",children:"Crea tu contraseña"}),v.jsx("p",{className:"text-gray-500 text-sm mb-6",children:"Entraste con una contraseña temporal. Elige una nueva para continuar."}),h&&v.jsx("div",{role:"alert",className:"bg-red-50 text-red-600 p-3 rounded-xl text-sm mb-5 border border-red-100 font-semibold",children:h}),v.jsxs("div",{className:"flex flex-col gap-4",children:[v.jsxs("div",{children:[v.jsx("label",{htmlFor:"nueva",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Nueva contraseña"}),v.jsx("input",{id:"nueva",type:"password",value:t,onChange:N=>s(N.target.value),placeholder:"Mínimo 8 caracteres",className:I})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"confirmar",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Repite la contraseña"}),v.jsx("input",{id:"confirmar",type:"password",value:o,onChange:N=>l(N.target.value),className:I})]}),v.jsx("button",{type:"submit",disabled:g,className:"w-full mt-1 bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300",children:g?"Guardando...":"Guardar y continuar"}),v.jsx("button",{type:"button",onClick:e,className:"text-gray-500 text-sm font-medium hover:underline",children:"Cerrar sesión"})]})]})})}function i_({titulo:r,mensaje:e,onCerrarSesion:t}){return v.jsx("div",{className:"min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans",children:v.jsxs("div",{className:"bg-white rounded-2xl p-8 w-full max-w-[420px] text-center shadow-[0_8px_40px_rgba(30,63,174,0.12)]",children:[v.jsx("h2",{className:"text-gray-900 text-xl font-extrabold mb-2",children:r}),v.jsx("p",{className:"text-gray-500 text-sm leading-relaxed mb-6",children:e}),v.jsx("button",{onClick:t,className:"w-full bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700",children:"Cerrar sesión"})]})})}function lk({onNavigateToLogin:r}){var st,Ve;const[e,t]=he.useState("nueva"),[s,o]=he.useState(!1),[l,h]=he.useState(null),[p,g]=he.useState(null),[_,E]=he.useState(0),{perfil:I,setPerfil:N,organizacion:U,sinPerfil:H}=FR(),{solicitudes:$,cargando:F,cambiarEstado:Y,responder:Z,eliminar:me,guardar:xe}=GR(I,h),Ae=(I==null?void 0:I.rol)==="admin",ke=((st=qt.currentUser)==null?void 0:st.displayName)??"",D=()=>{Tf(qt),r()},A=X=>{t(X),o(!1),h(null),X==="nueva"&&!p&&E(ue=>ue+1)},R=X=>{g(X),E(ue=>ue+1),t("nueva")},C=()=>{g(null),E(X=>X+1)},k=async X=>{const ue=await xe(X,(p==null?void 0:p.id)??null);return ue&&g(null),ue};if(H)return v.jsx(i_,{titulo:"Tu cuenta no pertenece a ninguna empresa",mensaje:"Pídele a tu administrador que te agregue desde la sección Integrantes.",onCerrarSesion:D});if((I==null?void 0:I.activo)===!1)return v.jsx(i_,{titulo:"Cuenta desactivada",mensaje:"Tu administrador desactivó tu acceso. Si crees que es un error, habla con él.",onCerrarSesion:D});if(I!=null&&I.debeCambiarClave)return v.jsx(ak,{onListo:()=>N(X=>X&&{...X,debeCambiarClave:!1}),onCerrarSesion:D});const b=[{id:"inicio",label:"Inicio",icon:v.jsx(nR,{size:20})},{id:"nueva",label:"Nueva Solicitud",icon:v.jsx(ZC,{size:20})},{id:"mis",label:Ae?"Gestión Solicitudes":"Mis Solicitudes",icon:v.jsx(ap,{size:20})},...Ae?[{id:"integrantes",label:"Integrantes",icon:v.jsx(kR,{size:20})}]:[],{id:"perfil",label:"Perfil",icon:v.jsx(CR,{size:20})}],x=(Ve=b.find(X=>X.id===e))==null?void 0:Ve.label,je=v.jsx(KR,{items:b,activo:e,nombre:ke,rolTexto:Ae?"Administrador":(I==null?void 0:I.departamento)||"Usuario",onSeleccionar:A,onCerrarSesion:D}),nt={inicio:v.jsx(QR,{solicitudes:$,esAdmin:Ae}),nueva:v.jsx(ek,{inicial:p,onGuardar:k,onCancelar:C,onTerminado:()=>t("mis")},_),mis:v.jsx(rk,{solicitudes:$,cargando:F,esAdmin:Ae,onCambiarEstado:Y,onResponder:Z,onEditar:R,onEliminar:me}),integrantes:Ae&&(I!=null&&I.orgId)&&qt.currentUser?v.jsx(ok,{orgId:I.orgId,adminUid:qt.currentUser.uid}):null,perfil:v.jsx(ik,{perfil:I,organizacion:U})};return v.jsxs("div",{className:"flex min-h-screen font-sans bg-slate-50",children:[v.jsx("aside",{className:"hidden lg:flex flex-col w-64 shrink-0 fixed top-0 left-0 h-full bg-gradient-to-br from-indigo-700 to-indigo-900",children:je}),v.jsx("div",{className:`lg:hidden fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 ${s?"opacity-100":"opacity-0 pointer-events-none"}`,onClick:()=>o(!1),"aria-hidden":"true"}),v.jsxs("aside",{className:`lg:hidden fixed top-0 left-0 z-50 h-full w-64 flex flex-col bg-gradient-to-br from-indigo-700 to-indigo-900 transition-transform duration-200 ${s?"translate-x-0":"-translate-x-full"}`,children:[v.jsx("button",{onClick:()=>o(!1),"aria-label":"Cerrar menú",className:"absolute top-4 right-4 text-white/70 hover:text-white",children:v.jsx(lf,{size:22})}),je]}),v.jsxs("main",{className:"flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0",children:[v.jsxs("header",{className:"sticky top-0 z-40 flex items-center gap-3 px-4 sm:px-8 h-16 bg-white border-b border-gray-100 shadow-sm",children:[v.jsx("button",{onClick:()=>o(!0),"aria-label":"Abrir menú",className:"lg:hidden p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-100",children:v.jsx(uR,{size:22})}),v.jsx("span",{className:"lg:hidden text-gray-900 text-sm font-semibold",children:x}),v.jsxs("div",{className:"hidden lg:flex items-center gap-2 text-sm",children:[v.jsx("span",{className:"text-gray-400",children:(U==null?void 0:U.nombre)??"Workspace"}),v.jsx("span",{className:"text-gray-300",children:"/"}),v.jsx("span",{className:"text-gray-900 font-semibold",children:x})]})]}),v.jsxs("div",{className:"flex-1 p-4 sm:p-8",children:[l&&v.jsxs("div",{role:"alert",className:"mb-5 flex items-start justify-between gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600",children:[v.jsx("span",{children:l}),v.jsx("button",{onClick:()=>h(null),"aria-label":"Cerrar aviso",className:"shrink-0 text-red-400 hover:text-red-600",children:v.jsx(lf,{size:18})})]}),nt[e]]})]})]})}const uk={404:{code:"404",title:"¡Vaya! Página no encontrada",description:"La página que está buscando no existe o fue movida a otra dirección. Verifique la URL e intente de nuevo."},session:{code:"401",title:"¡Sesión expirada!",description:"Su sesión ha caducado por inactividad. Por seguridad, debe iniciar sesión nuevamente para continuar."},general:{code:"500",title:"¡Vaya! Algo salió mal",description:"Ocurrió un error interno en el sistema. Si el problema persiste, contacte al administrador."}};function ck({onNavigateBack:r,errorType:e="general"}){const t=uk[e];return v.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-indigo-50 font-sans",children:[v.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none translate-x-[30%] -translate-y-[30%]",style:{background:"radial-gradient(circle, #1E3FAE, transparent 70%)"}}),v.jsx("div",{className:"absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15 pointer-events-none -translate-x-[30%] translate-y-[30%]",style:{background:"radial-gradient(circle, #DC3545, transparent 70%)"}}),v.jsx("div",{className:"mb-10 relative z-10",children:v.jsx(Hc,{iconSize:40})}),v.jsxs("div",{className:"bg-white rounded-2xl p-8 lg:p-12 w-full max-w-[460px] text-center relative shadow-[0_8px_40px_rgba(30,63,174,0.12)]",children:[v.jsx("div",{className:"flex justify-center mb-6",children:v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 border border-red-200",children:v.jsx(_R,{size:48,className:"text-red-500 opacity-80"})}),v.jsx("div",{className:"absolute top-0 right-0 w-8 h-8 bg-red-100 rounded-full border border-red-200"}),v.jsx("div",{className:"absolute bottom-4 left-0 w-4 h-4 bg-red-200 rounded-full"})]})}),v.jsx("div",{className:"flex justify-center mb-4",children:v.jsxs("span",{className:"px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold tracking-widest border border-red-200",children:["ERROR ",t.code]})}),v.jsx("h2",{className:"text-gray-900 text-2xl font-extrabold mb-3",children:t.title}),v.jsx("p",{className:"text-gray-500 text-sm leading-relaxed mb-8",children:t.description}),v.jsxs("button",{onClick:r,className:"flex items-center justify-center gap-2 w-full bg-indigo-600 text-white border-none rounded-lg py-3 px-6 text-[15px] font-bold cursor-pointer hover:bg-indigo-700 transition-colors",children:[v.jsx(mR,{size:18}),"Volver al inicio"]})]})]})}function hk({onNavigateToLogin:r}){const[e,t]=he.useState(""),[s,o]=he.useState(!1),[l,h]=he.useState(!1),[p,g]=he.useState(""),_=async E=>{if(E.preventDefault(),!e){g("Por favor, ingrese su correo electrónico.");return}o(!0),g("");try{await YI(qt,e),h(!0)}catch(I){I instanceof Kt&&I.code==="auth/user-not-found"?g("No hay ninguna cuenta registrada con este correo."):I instanceof Kt&&I.code==="auth/invalid-email"?g("El formato del correo electrónico no es válido."):g("Ocurrió un error al procesar la solicitud. Intente más tarde.")}finally{o(!1)}};return l?v.jsx("div",{className:"min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans",children:v.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:v.jsxs("div",{className:"bg-white py-10 px-6 shadow-sm sm:rounded-2xl sm:px-10 border border-gray-100 text-center",children:[v.jsx("div",{className:"mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-50 mb-6",children:v.jsx(El,{className:"h-8 w-8 text-green-500"})}),v.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-3",children:"Revisa tu correo"}),v.jsxs("p",{className:"text-sm text-gray-500 mb-8 leading-relaxed",children:["Hemos enviado las instrucciones para recuperar tu contraseña a ",v.jsx("strong",{className:"text-gray-900",children:e}),"."]}),v.jsx("button",{onClick:r,className:"w-full flex justify-center py-3 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors",children:"Volver al inicio de sesión"})]})})}):v.jsxs("div",{className:"min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans",children:[v.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:v.jsx("div",{className:"flex justify-center mb-8",children:v.jsx(Hc,{})})}),v.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:v.jsxs("div",{className:"bg-white py-8 px-4 shadow-sm sm:rounded-2xl sm:px-10 border border-gray-100",children:[v.jsxs("button",{onClick:r,className:"flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-6 transition-colors",children:[v.jsx($0,{className:"h-4 w-4 mr-1"}),"Volver atrás"]}),v.jsxs("div",{className:"mb-8",children:[v.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Recuperar contraseña"}),v.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Ingresa el correo electrónico asociado a tu cuenta para recibir un enlace de recuperación."})]}),v.jsxs("form",{className:"space-y-6",onSubmit:_,children:[v.jsxs("div",{children:[v.jsx("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-700",children:"Correo Electrónico"}),v.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[v.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:v.jsx(q0,{className:"h-5 w-5 text-gray-400"})}),v.jsx("input",{id:"email",type:"email",required:!0,value:e,onChange:E=>t(E.target.value),className:`block w-full pl-10 py-3 sm:text-sm border rounded-lg outline-none transition-colors ${p?"border-red-300 focus:ring-red-500 focus:border-red-500":"border-gray-200 focus:ring-indigo-500 focus:border-indigo-500"}`,placeholder:"correo@institucion.co"})]}),p&&v.jsx("p",{className:"mt-2 text-sm text-red-600",children:p})]}),v.jsx("button",{type:"submit",disabled:s,className:"w-full flex justify-center py-3 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:s?"Enviando...":"Enviar enlace de recuperación"})]})]})})]})}function dk(){const[r,e]=he.useState("login"),[t,s]=he.useState("general"),[o,l]=he.useState(!0);he.useEffect(()=>{const p=r1(qt,g=>{e(g?"dashboard":_=>_==="dashboard"?"login":_),l(!1)});return()=>p()},[]);const h=(p="general")=>{s(p),e("error")};return o?v.jsx("div",{className:"h-screen w-screen flex items-center justify-center bg-[#F9FAFB]",children:v.jsx("div",{className:"w-10 h-10 border-4 border-[#1E3FAE] border-t-transparent rounded-full animate-spin"})}):v.jsxs(v.Fragment,{children:[r==="login"&&v.jsx(NR,{onNavigateToError:()=>h("general"),onNavigateToDashboard:()=>e("dashboard"),onNavigateToForgot:()=>e("forgot"),onNavigateToRegister:()=>e("register")}),r==="register"&&v.jsx(LR,{onNavigateToLogin:()=>e("login")}),r==="dashboard"&&v.jsx(lk,{onNavigateToLogin:()=>e("login"),onNavigateToError:()=>h("session")}),r==="error"&&v.jsx(ck,{onNavigateBack:()=>e("login"),errorType:t}),r==="forgot"&&v.jsx(hk,{onNavigateToLogin:()=>e("login")})]})}dE.createRoot(document.getElementById("root")).render(v.jsx(dk,{}));
