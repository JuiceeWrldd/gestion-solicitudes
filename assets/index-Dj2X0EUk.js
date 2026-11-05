(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var _d={exports:{}},Oa={},vd={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function mE(){if(wg)return Ce;wg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),I=Symbol.iterator;function b(L){return L===null||typeof L!="object"?null:(L=I&&L[I]||L["@@iterator"],typeof L=="function"?L:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,$={};function U(L,H,_e){this.props=L,this.context=H,this.refs=$,this.updater=_e||O}U.prototype.isReactComponent={},U.prototype.setState=function(L,H){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,H,"setState")},U.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function X(){}X.prototype=U.prototype;function te(L,H,_e){this.props=L,this.context=H,this.refs=$,this.updater=_e||O}var ye=te.prototype=new X;ye.constructor=te,q(ye,U.prototype),ye.isPureReactComponent=!0;var ce=Array.isArray,Se=Object.prototype.hasOwnProperty,pe={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(L,H,_e){var Ae,Pe={},Ne=null,ze=null;if(H!=null)for(Ae in H.ref!==void 0&&(ze=H.ref),H.key!==void 0&&(Ne=""+H.key),H)Se.call(H,Ae)&&!k.hasOwnProperty(Ae)&&(Pe[Ae]=H[Ae]);var Le=arguments.length-2;if(Le===1)Pe.children=_e;else if(1<Le){for(var qe=Array(Le),Ht=0;Ht<Le;Ht++)qe[Ht]=arguments[Ht+2];Pe.children=qe}if(L&&L.defaultProps)for(Ae in Le=L.defaultProps,Le)Pe[Ae]===void 0&&(Pe[Ae]=Le[Ae]);return{$$typeof:r,type:L,key:Ne,ref:ze,props:Pe,_owner:pe.current}}function C(L,H){return{$$typeof:r,type:L.type,key:H,ref:L.ref,props:L.props,_owner:L._owner}}function R(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function P(L){var H={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(_e){return H[_e]})}var D=/\/+/g;function x(L,H){return typeof L=="object"&&L!==null&&L.key!=null?P(""+L.key):H.toString(36)}function je(L,H,_e,Ae,Pe){var Ne=typeof L;(Ne==="undefined"||Ne==="boolean")&&(L=null);var ze=!1;if(L===null)ze=!0;else switch(Ne){case"string":case"number":ze=!0;break;case"object":switch(L.$$typeof){case r:case e:ze=!0}}if(ze)return ze=L,Pe=Pe(ze),L=Ae===""?"."+x(ze,0):Ae,ce(Pe)?(_e="",L!=null&&(_e=L.replace(D,"$&/")+"/"),je(Pe,H,_e,"",function(Ht){return Ht})):Pe!=null&&(R(Pe)&&(Pe=C(Pe,_e+(!Pe.key||ze&&ze.key===Pe.key?"":(""+Pe.key).replace(D,"$&/")+"/")+L)),H.push(Pe)),1;if(ze=0,Ae=Ae===""?".":Ae+":",ce(L))for(var Le=0;Le<L.length;Le++){Ne=L[Le];var qe=Ae+x(Ne,Le);ze+=je(Ne,H,_e,qe,Pe)}else if(qe=b(L),typeof qe=="function")for(L=qe.call(L),Le=0;!(Ne=L.next()).done;)Ne=Ne.value,qe=Ae+x(Ne,Le++),ze+=je(Ne,H,_e,qe,Pe);else if(Ne==="object")throw H=String(L),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return ze}function Ze(L,H,_e){if(L==null)return L;var Ae=[],Pe=0;return je(L,Ae,"","",function(Ne){return H.call(_e,Ne,Pe++)}),Ae}function it(L){if(L._status===-1){var H=L._result;H=H(),H.then(function(_e){(L._status===0||L._status===-1)&&(L._status=1,L._result=_e)},function(_e){(L._status===0||L._status===-1)&&(L._status=2,L._result=_e)}),L._status===-1&&(L._status=0,L._result=H)}if(L._status===1)return L._result.default;throw L._result}var Oe={current:null},ee={transition:null},de={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:ee,ReactCurrentOwner:pe};function se(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Ze,forEach:function(L,H,_e){Ze(L,function(){H.apply(this,arguments)},_e)},count:function(L){var H=0;return Ze(L,function(){H++}),H},toArray:function(L){return Ze(L,function(H){return H})||[]},only:function(L){if(!R(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Ce.Component=U,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=te,Ce.StrictMode=i,Ce.Suspense=g,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Ce.act=se,Ce.cloneElement=function(L,H,_e){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Ae=q({},L.props),Pe=L.key,Ne=L.ref,ze=L._owner;if(H!=null){if(H.ref!==void 0&&(Ne=H.ref,ze=pe.current),H.key!==void 0&&(Pe=""+H.key),L.type&&L.type.defaultProps)var Le=L.type.defaultProps;for(qe in H)Se.call(H,qe)&&!k.hasOwnProperty(qe)&&(Ae[qe]=H[qe]===void 0&&Le!==void 0?Le[qe]:H[qe])}var qe=arguments.length-2;if(qe===1)Ae.children=_e;else if(1<qe){Le=Array(qe);for(var Ht=0;Ht<qe;Ht++)Le[Ht]=arguments[Ht+2];Ae.children=Le}return{$$typeof:r,type:L.type,key:Pe,ref:Ne,props:Ae,_owner:ze}},Ce.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},Ce.createElement=S,Ce.createFactory=function(L){var H=S.bind(null,L);return H.type=L,H},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(L){return{$$typeof:f,render:L}},Ce.isValidElement=R,Ce.lazy=function(L){return{$$typeof:E,_payload:{_status:-1,_result:L},_init:it}},Ce.memo=function(L,H){return{$$typeof:v,type:L,compare:H===void 0?null:H}},Ce.startTransition=function(L){var H=ee.transition;ee.transition={};try{L()}finally{ee.transition=H}},Ce.unstable_act=se,Ce.useCallback=function(L,H){return Oe.current.useCallback(L,H)},Ce.useContext=function(L){return Oe.current.useContext(L)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(L){return Oe.current.useDeferredValue(L)},Ce.useEffect=function(L,H){return Oe.current.useEffect(L,H)},Ce.useId=function(){return Oe.current.useId()},Ce.useImperativeHandle=function(L,H,_e){return Oe.current.useImperativeHandle(L,H,_e)},Ce.useInsertionEffect=function(L,H){return Oe.current.useInsertionEffect(L,H)},Ce.useLayoutEffect=function(L,H){return Oe.current.useLayoutEffect(L,H)},Ce.useMemo=function(L,H){return Oe.current.useMemo(L,H)},Ce.useReducer=function(L,H,_e){return Oe.current.useReducer(L,H,_e)},Ce.useRef=function(L){return Oe.current.useRef(L)},Ce.useState=function(L){return Oe.current.useState(L)},Ce.useSyncExternalStore=function(L,H,_e){return Oe.current.useSyncExternalStore(L,H,_e)},Ce.useTransition=function(){return Oe.current.useTransition()},Ce.version="18.3.1",Ce}var Eg;function ff(){return Eg||(Eg=1,vd.exports=mE()),vd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function gE(){if(Tg)return Oa;Tg=1;var r=ff(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,v){var E,I={},b=null,O=null;v!==void 0&&(b=""+v),g.key!==void 0&&(b=""+g.key),g.ref!==void 0&&(O=g.ref);for(E in g)i.call(g,E)&&!l.hasOwnProperty(E)&&(I[E]=g[E]);if(f&&f.defaultProps)for(E in g=f.defaultProps,g)I[E]===void 0&&(I[E]=g[E]);return{$$typeof:e,type:f,key:b,ref:O,props:I,_owner:o.current}}return Oa.Fragment=t,Oa.jsx=h,Oa.jsxs=h,Oa}var Ig;function yE(){return Ig||(Ig=1,_d.exports=gE()),_d.exports}var _=yE(),zu={},wd={exports:{}},en={},Ed={exports:{}},Td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function _E(){return xg||(xg=1,(function(r){function e(ee,de){var se=ee.length;ee.push(de);e:for(;0<se;){var L=se-1>>>1,H=ee[L];if(0<o(H,de))ee[L]=de,ee[se]=H,se=L;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var de=ee[0],se=ee.pop();if(se!==de){ee[0]=se;e:for(var L=0,H=ee.length,_e=H>>>1;L<_e;){var Ae=2*(L+1)-1,Pe=ee[Ae],Ne=Ae+1,ze=ee[Ne];if(0>o(Pe,se))Ne<H&&0>o(ze,Pe)?(ee[L]=ze,ee[Ne]=se,L=Ne):(ee[L]=Pe,ee[Ae]=se,L=Ae);else if(Ne<H&&0>o(ze,se))ee[L]=ze,ee[Ne]=se,L=Ne;else break e}}return de}function o(ee,de){var se=ee.sortIndex-de.sortIndex;return se!==0?se:ee.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],v=[],E=1,I=null,b=3,O=!1,q=!1,$=!1,U=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(ee){for(var de=t(v);de!==null;){if(de.callback===null)i(v);else if(de.startTime<=ee)i(v),de.sortIndex=de.expirationTime,e(g,de);else break;de=t(v)}}function ce(ee){if($=!1,ye(ee),!q)if(t(g)!==null)q=!0,it(Se);else{var de=t(v);de!==null&&Oe(ce,de.startTime-ee)}}function Se(ee,de){q=!1,$&&($=!1,X(S),S=-1),O=!0;var se=b;try{for(ye(de),I=t(g);I!==null&&(!(I.expirationTime>de)||ee&&!P());){var L=I.callback;if(typeof L=="function"){I.callback=null,b=I.priorityLevel;var H=L(I.expirationTime<=de);de=r.unstable_now(),typeof H=="function"?I.callback=H:I===t(g)&&i(g),ye(de)}else i(g);I=t(g)}if(I!==null)var _e=!0;else{var Ae=t(v);Ae!==null&&Oe(ce,Ae.startTime-de),_e=!1}return _e}finally{I=null,b=se,O=!1}}var pe=!1,k=null,S=-1,C=5,R=-1;function P(){return!(r.unstable_now()-R<C)}function D(){if(k!==null){var ee=r.unstable_now();R=ee;var de=!0;try{de=k(!0,ee)}finally{de?x():(pe=!1,k=null)}}else pe=!1}var x;if(typeof te=="function")x=function(){te(D)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,Ze=je.port2;je.port1.onmessage=D,x=function(){Ze.postMessage(null)}}else x=function(){U(D,0)};function it(ee){k=ee,pe||(pe=!0,x())}function Oe(ee,de){S=U(function(){ee(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){q||O||(q=!0,it(Se))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return b},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(b){case 1:case 2:case 3:var de=3;break;default:de=b}var se=b;b=de;try{return ee()}finally{b=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,de){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var se=b;b=ee;try{return de()}finally{b=se}},r.unstable_scheduleCallback=function(ee,de,se){var L=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?L+se:L):se=L,ee){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=se+H,ee={id:E++,callback:de,priorityLevel:ee,startTime:se,expirationTime:H,sortIndex:-1},se>L?(ee.sortIndex=se,e(v,ee),t(g)===null&&ee===t(v)&&($?(X(S),S=-1):$=!0,Oe(ce,se-L))):(ee.sortIndex=H,e(g,ee),q||O||(q=!0,it(Se))),ee},r.unstable_shouldYield=P,r.unstable_wrapCallback=function(ee){var de=b;return function(){var se=b;b=de;try{return ee.apply(this,arguments)}finally{b=se}}}})(Td)),Td}var Sg;function vE(){return Sg||(Sg=1,Ed.exports=_E()),Ed.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function wE(){if(Ag)return en;Ag=1;var r=ff(),e=vE();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},I={};function b(n){return g.call(I,n)?!0:g.call(E,n)?!1:v.test(n)?I[n]=!0:(E[n]=!0,!1)}function O(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function q(n,s,a,c){if(s===null||typeof s>"u"||O(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(n,s,a,c,d,p,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=p,this.removeEmptyString=w}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){U[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];U[s]=new $(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){U[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){U[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){U[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){U[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){U[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){U[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){U[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var X=/[\-:]([a-z])/g;function te(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(X,te);U[s]=new $(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(X,te);U[s]=new $(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(X,te);U[s]=new $(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){U[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),U.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){U[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,s,a,c){var d=U.hasOwnProperty(s)?U[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(q(s,a,d,c)&&(a=null),c||d===null?b(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var ce=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se=Symbol.for("react.element"),pe=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),P=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),ee=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,L;function H(n){if(L===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);L=s&&s[1]||""}return`
`+L+n}var _e=!1;function Ae(n,s){if(!n||_e)return"";_e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var c=z}Reflect.construct(n,[],s)}else{try{s.call()}catch(z){c=z}n.call(s.prototype)}else{try{throw Error()}catch(z){c=z}n()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),p=c.stack.split(`
`),w=d.length-1,A=p.length-1;1<=w&&0<=A&&d[w]!==p[A];)A--;for(;1<=w&&0<=A;w--,A--)if(d[w]!==p[A]){if(w!==1||A!==1)do if(w--,A--,0>A||d[w]!==p[A]){var N=`
`+d[w].replace(" at new "," at ");return n.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",n.displayName)),N}while(1<=w&&0<=A);break}}}finally{_e=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Pe(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case pe:return"Portal";case C:return"Profiler";case S:return"StrictMode";case x:return"Suspense";case je:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case D:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ze:return s=n.displayName||null,s!==null?s:Ne(n.type)||"Memo";case it:s=n._payload,n=n._init;try{return Ne(n(s))}catch{}}return null}function ze(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qe(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ht(n){var s=qe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,p.call(this,w)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Ci(n){n._valueTracker||(n._valueTracker=Ht(n))}function zo(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=qe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Hr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ri(n,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Al(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Le(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ki(n,s){s=s.checked,s!=null&&ye(n,"checked",s,!1)}function Us(n,s){ki(n,s);var a=Le(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?pt(n,s.type,a):s.hasOwnProperty("defaultValue")&&pt(n,s.type,Le(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Bo(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function pt(n,s,a){(s!=="number"||Hr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var lt=Array.isArray;function Rn(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function $o(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function qo(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(lt(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:Le(a)}}function Cl(n,s){var a=Le(s.value),c=Le(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Wr(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function Ho(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pi(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?Ho(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Gr,Rl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Gr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function zs(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kl=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(n){kl.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Kr[s]=Kr[n]})});function Qr(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Kr.hasOwnProperty(n)&&Kr[n]?(""+s).trim():s+"px"}function Ni(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Qr(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Wo=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kn(n,s){if(s){if(Wo[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function bi(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yr=null;function Di(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gr=null,yr=null,ot=null;function Go(n){if(n=wa(n)){if(typeof gr!="function")throw Error(t(280));var s=n.stateNode;s&&(s=nu(s),gr(n.stateNode,n.type,s))}}function Jr(n){yr?ot?ot.push(n):ot=[n]:yr=n}function Xr(){if(yr){var n=yr,s=ot;if(ot=yr=null,Go(n),s)for(n=0;n<s.length;n++)Go(s[n])}}function Pl(n,s){return n(s)}function Nl(){}var qn=!1;function bl(n,s,a){if(qn)return n(s,a);qn=!0;try{return Pl(n,s,a)}finally{qn=!1,(yr!==null||ot!==null)&&(Nl(),Xr())}}function Bs(n,s){var a=n.stateNode;if(a===null)return null;var c=nu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Zr=!1;if(f)try{var es={};Object.defineProperty(es,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch{Zr=!1}function Dl(n,s,a,c,d,p,w,A,N){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(Q){this.onError(Q)}}var _r=!1,Hn=null,Vi=!1,yn=null,Vl={onError:function(n){_r=!0,Hn=n}};function Ol(n,s,a,c,d,p,w,A,N){_r=!1,Hn=null,Dl.apply(Vl,arguments)}function Ko(n,s,a,c,d,p,w,A,N){if(Ol.apply(this,arguments),_r){if(_r){var z=Hn;_r=!1,Hn=null}else throw Error(t(198));Vi||(Vi=!0,yn=z)}}function Pn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function Qo(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Ll(n){if(Pn(n)!==n)throw Error(t(188))}function Ml(n){var s=n.alternate;if(!s){if(s=Pn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Ll(d),n;if(p===c)return Ll(d),s;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var w=!1,A=d.child;A;){if(A===a){w=!0,a=d,c=p;break}if(A===c){w=!0,c=d,a=p;break}A=A.sibling}if(!w){for(A=p.child;A;){if(A===a){w=!0,a=p,c=d;break}if(A===c){w=!0,c=p,a=d;break}A=A.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function jl(n){return n=Ml(n),n!==null?$s(n):null}function $s(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=$s(n);if(s!==null)return s;n=n.sibling}return null}var Yo=e.unstable_scheduleCallback,Oi=e.unstable_cancelCallback,qs=e.unstable_shouldYield,vr=e.unstable_requestPaint,Ke=e.unstable_now,Qc=e.unstable_getCurrentPriorityLevel,Li=e.unstable_ImmediatePriority,Jo=e.unstable_UserBlockingPriority,Hs=e.unstable_NormalPriority,Xo=e.unstable_LowPriority,Mi=e.unstable_IdlePriority,Ws=null,on=null;function Fl(n){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Ws,n,void 0,(n.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:Gs,Wn=Math.log,_n=Math.LN2;function Gs(n){return n>>>=0,n===0?32:31-(Wn(n)/_n|0)|0}var Gn=64,ts=4194304;function Ue(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wr(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,w=a&268435455;if(w!==0){var A=w&~d;A!==0?c=Ue(A):(p&=w,p!==0&&(c=Ue(p)))}else w=a&~d,w!==0?c=Ue(w):p!==0&&(c=Ue(p));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,p=s&-s,d>=p||d===16&&(p&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-an(s),d=1<<a,c|=n[a],s&=~d;return c}function Ks(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qs(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var w=31-an(p),A=1<<w,N=d[w];N===-1?((A&a)===0||(A&c)!==0)&&(d[w]=Ks(A,s)):N<=s&&(n.expiredLanes|=A),p&=~A}}function Zo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ea(){var n=Gn;return Gn<<=1,(Gn&4194240)===0&&(Gn=64),n}function ta(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function Ys(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-an(s),n[s]=a}function Yc(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-an(a),p=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function na(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-an(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var De=0;function Kn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ra,ji,sa,ia,oa,Qn=!1,Fi=[],Yn=null,Jn=null,Rt=null,Js=new Map,Er=new Map,ln=[],Ul="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ns(n,s){switch(n){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Js.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(s.pointerId)}}function Nn(n,s,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},s!==null&&(s=wa(s),s!==null&&ji(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function zl(n,s,a,c,d){switch(s){case"focusin":return Yn=Nn(Yn,n,s,a,c,d),!0;case"dragenter":return Jn=Nn(Jn,n,s,a,c,d),!0;case"mouseover":return Rt=Nn(Rt,n,s,a,c,d),!0;case"pointerover":var p=d.pointerId;return Js.set(p,Nn(Js.get(p)||null,n,s,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,Er.set(p,Nn(Er.get(p)||null,n,s,a,c,d)),!0}return!1}function Ui(n){var s=ti(n.target);if(s!==null){var a=Pn(s);if(a!==null){if(s=a.tag,s===13){if(s=Qo(a),s!==null){n.blockedOn=s,oa(n.priority,function(){sa(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function He(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=zi(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Yr=c,a.target.dispatchEvent(c),Yr=null}else return s=wa(a),s!==null&&ji(s),n.blockedOn=a,!1;s.shift()}return!0}function Bl(n,s,a){He(n)&&a.delete(s)}function Jc(){Qn=!1,Yn!==null&&He(Yn)&&(Yn=null),Jn!==null&&He(Jn)&&(Jn=null),Rt!==null&&He(Rt)&&(Rt=null),Js.forEach(Bl),Er.forEach(Bl)}function rs(n,s){n.blockedOn===s&&(n.blockedOn=null,Qn||(Qn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jc)))}function ss(n){function s(d){return rs(d,n)}if(0<Fi.length){rs(Fi[0],n);for(var a=1;a<Fi.length;a++){var c=Fi[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Yn!==null&&rs(Yn,n),Jn!==null&&rs(Jn,n),Rt!==null&&rs(Rt,n),Js.forEach(s),Er.forEach(s),a=0;a<ln.length;a++)c=ln[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<ln.length&&(a=ln[0],a.blockedOn===null);)Ui(a),a.blockedOn===null&&ln.shift()}var Tr=ce.ReactCurrentBatchConfig,Ir=!0;function Xn(n,s,a,c){var d=De,p=Tr.transition;Tr.transition=null;try{De=1,aa(n,s,a,c)}finally{De=d,Tr.transition=p}}function $l(n,s,a,c){var d=De,p=Tr.transition;Tr.transition=null;try{De=4,aa(n,s,a,c)}finally{De=d,Tr.transition=p}}function aa(n,s,a,c){if(Ir){var d=zi(n,s,a,c);if(d===null)lh(n,s,c,Zn,a),ns(n,c);else if(zl(d,n,s,a,c))c.stopPropagation();else if(ns(n,c),s&4&&-1<Ul.indexOf(n)){for(;d!==null;){var p=wa(d);if(p!==null&&ra(p),p=zi(n,s,a,c),p===null&&lh(n,s,c,Zn,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else lh(n,s,c,null,a)}}var Zn=null;function zi(n,s,a,c){if(Zn=null,n=Di(c),n=ti(n),n!==null)if(s=Pn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=Qo(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Zn=n,null}function Bi(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qc()){case Li:return 1;case Jo:return 4;case Hs:case Xo:return 16;case Mi:return 536870912;default:return 16}default:return 16}}var un=null,$i=null,xr=null;function ql(){if(xr)return xr;var n,s=$i,a=s.length,c,d="value"in un?un.value:un.textContent,p=d.length;for(n=0;n<a&&s[n]===d[n];n++);var w=a-n;for(c=1;c<=w&&s[a-c]===d[p-c];c++);return xr=d.slice(n,1<c?1-c:void 0)}function Xs(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function er(){return!0}function la(){return!1}function Lt(n){function s(a,c,d,p,w){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?er:la,this.isPropagationStopped=la,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=er)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=er)},persist:function(){},isPersistent:er}),s}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zs=Lt(tr),is=se({},tr,{view:0,detail:0}),qi=Lt(is),Hi,Wi,cn,ei=se({},is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ie,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==cn&&(cn&&n.type==="mousemove"?(Hi=n.screenX-cn.screenX,Wi=n.screenY-cn.screenY):Wi=Hi=0,cn=n),Hi)},movementY:function(n){return"movementY"in n?n.movementY:Wi}}),ua=Lt(ei),Hl=se({},ei,{dataTransfer:0}),Wl=Lt(Hl),Gi=se({},is,{relatedTarget:0}),kt=Lt(Gi),Gl=se({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kl=Lt(Gl),os=se({},tr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=Lt(os),m=se({},tr,{data:0}),y=Lt(m),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=B[n])?!!s[n]:!1}function Ie(){return Z}var ut=se({},is,{key:function(n){if(n.key){var s=T[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Xs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?j[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ie,charCode:function(n){return n.type==="keypress"?Xs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Xs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$e=Lt(ut),mt=se({},ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hn=Lt(mt),Sr=se({},is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ie}),nr=Lt(Sr),rr=se({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ki=Lt(rr),ca=se({},ei,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),uw=Lt(ca),cw=[9,13,27,32],Xc=f&&"CompositionEvent"in window,ha=null;f&&"documentMode"in document&&(ha=document.documentMode);var hw=f&&"TextEvent"in window&&!ha,dp=f&&(!Xc||ha&&8<ha&&11>=ha),fp=" ",pp=!1;function mp(n,s){switch(n){case"keyup":return cw.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Qi=!1;function dw(n,s){switch(n){case"compositionend":return gp(s);case"keypress":return s.which!==32?null:(pp=!0,fp);case"textInput":return n=s.data,n===fp&&pp?null:n;default:return null}}function fw(n,s){if(Qi)return n==="compositionend"||!Xc&&mp(n,s)?(n=ql(),xr=$i=un=null,Qi=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return dp&&s.locale!=="ko"?null:s.data;default:return null}}var pw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!pw[n.type]:s==="textarea"}function _p(n,s,a,c){Jr(c),s=Zl(s,"onChange"),0<s.length&&(a=new Zs("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var da=null,fa=null;function mw(n){Lp(n,0)}function Ql(n){var s=eo(n);if(zo(s))return n}function gw(n,s){if(n==="change")return s}var vp=!1;if(f){var Zc;if(f){var eh="oninput"in document;if(!eh){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),eh=typeof wp.oninput=="function"}Zc=eh}else Zc=!1;vp=Zc&&(!document.documentMode||9<document.documentMode)}function Ep(){da&&(da.detachEvent("onpropertychange",Tp),fa=da=null)}function Tp(n){if(n.propertyName==="value"&&Ql(fa)){var s=[];_p(s,fa,n,Di(n)),bl(mw,s)}}function yw(n,s,a){n==="focusin"?(Ep(),da=s,fa=a,da.attachEvent("onpropertychange",Tp)):n==="focusout"&&Ep()}function _w(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ql(fa)}function vw(n,s){if(n==="click")return Ql(s)}function ww(n,s){if(n==="input"||n==="change")return Ql(s)}function Ew(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var bn=typeof Object.is=="function"?Object.is:Ew;function pa(n,s){if(bn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!bn(n[d],s[d]))return!1}return!0}function Ip(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xp(n,s){var a=Ip(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ip(a)}}function Sp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Sp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Ap(){for(var n=window,s=Hr();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Hr(n.document)}return s}function th(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Tw(n){var s=Ap(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&Sp(a.ownerDocument.documentElement,a)){if(c!==null&&th(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=xp(a,p);var w=xp(a,c);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(s),n.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Iw=f&&"documentMode"in document&&11>=document.documentMode,Yi=null,nh=null,ma=null,rh=!1;function Cp(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rh||Yi==null||Yi!==Hr(c)||(c=Yi,"selectionStart"in c&&th(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ma&&pa(ma,c)||(ma=c,c=Zl(nh,"onSelect"),0<c.length&&(s=new Zs("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=Yi)))}function Yl(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var Ji={animationend:Yl("Animation","AnimationEnd"),animationiteration:Yl("Animation","AnimationIteration"),animationstart:Yl("Animation","AnimationStart"),transitionend:Yl("Transition","TransitionEnd")},sh={},Rp={};f&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete Ji.animationend.animation,delete Ji.animationiteration.animation,delete Ji.animationstart.animation),"TransitionEvent"in window||delete Ji.transitionend.transition);function Jl(n){if(sh[n])return sh[n];if(!Ji[n])return n;var s=Ji[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in Rp)return sh[n]=s[a];return n}var kp=Jl("animationend"),Pp=Jl("animationiteration"),Np=Jl("animationstart"),bp=Jl("transitionend"),Dp=new Map,Vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function as(n,s){Dp.set(n,s),l(s,[n])}for(var ih=0;ih<Vp.length;ih++){var oh=Vp[ih],xw=oh.toLowerCase(),Sw=oh[0].toUpperCase()+oh.slice(1);as(xw,"on"+Sw)}as(kp,"onAnimationEnd"),as(Pp,"onAnimationIteration"),as(Np,"onAnimationStart"),as("dblclick","onDoubleClick"),as("focusin","onFocus"),as("focusout","onBlur"),as(bp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Aw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function Op(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,Ko(c,s,void 0,n),n.currentTarget=null}function Lp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(s)for(var w=c.length-1;0<=w;w--){var A=c[w],N=A.instance,z=A.currentTarget;if(A=A.listener,N!==p&&d.isPropagationStopped())break e;Op(d,A,z),p=N}else for(w=0;w<c.length;w++){if(A=c[w],N=A.instance,z=A.currentTarget,A=A.listener,N!==p&&d.isPropagationStopped())break e;Op(d,A,z),p=N}}}if(Vi)throw n=yn,Vi=!1,yn=null,n}function Qe(n,s){var a=s[ph];a===void 0&&(a=s[ph]=new Set);var c=n+"__bubble";a.has(c)||(Mp(s,n,2,!1),a.add(c))}function ah(n,s,a){var c=0;s&&(c|=4),Mp(a,n,c,s)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function ya(n){if(!n[Xl]){n[Xl]=!0,i.forEach(function(a){a!=="selectionchange"&&(Aw.has(a)||ah(a,!1,n),ah(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Xl]||(s[Xl]=!0,ah("selectionchange",!1,s))}}function Mp(n,s,a,c){switch(Bi(s)){case 1:var d=Xn;break;case 4:d=$l;break;default:d=aa}a=d.bind(null,s,a,n),d=void 0,!Zr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function lh(n,s,a,c,d){var p=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var N=w.tag;if((N===3||N===4)&&(N=w.stateNode.containerInfo,N===d||N.nodeType===8&&N.parentNode===d))return;w=w.return}for(;A!==null;){if(w=ti(A),w===null)return;if(N=w.tag,N===5||N===6){c=p=w;continue e}A=A.parentNode}}c=c.return}bl(function(){var z=p,Q=Di(a),Y=[];e:{var K=Dp.get(n);if(K!==void 0){var ie=Zs,le=n;switch(n){case"keypress":if(Xs(a)===0)break e;case"keydown":case"keyup":ie=$e;break;case"focusin":le="focus",ie=kt;break;case"focusout":le="blur",ie=kt;break;case"beforeblur":case"afterblur":ie=kt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=ua;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Wl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=nr;break;case kp:case Pp:case Np:ie=Kl;break;case bp:ie=Ki;break;case"scroll":ie=qi;break;case"wheel":ie=uw;break;case"copy":case"cut":case"paste":ie=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=hn}var ue=(s&4)!==0,ct=!ue&&n==="scroll",M=ue?K!==null?K+"Capture":null:K;ue=[];for(var V=z,F;V!==null;){F=V;var J=F.stateNode;if(F.tag===5&&J!==null&&(F=J,M!==null&&(J=Bs(V,M),J!=null&&ue.push(_a(V,J,F)))),ct)break;V=V.return}0<ue.length&&(K=new ie(K,le,null,a,Q),Y.push({event:K,listeners:ue}))}}if((s&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",K&&a!==Yr&&(le=a.relatedTarget||a.fromElement)&&(ti(le)||le[Ar]))break e;if((ie||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,ie?(le=a.relatedTarget||a.toElement,ie=z,le=le?ti(le):null,le!==null&&(ct=Pn(le),le!==ct||le.tag!==5&&le.tag!==6)&&(le=null)):(ie=null,le=z),ie!==le)){if(ue=ua,J="onMouseLeave",M="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(ue=hn,J="onPointerLeave",M="onPointerEnter",V="pointer"),ct=ie==null?K:eo(ie),F=le==null?K:eo(le),K=new ue(J,V+"leave",ie,a,Q),K.target=ct,K.relatedTarget=F,J=null,ti(Q)===z&&(ue=new ue(M,V+"enter",le,a,Q),ue.target=F,ue.relatedTarget=ct,J=ue),ct=J,ie&&le)t:{for(ue=ie,M=le,V=0,F=ue;F;F=Xi(F))V++;for(F=0,J=M;J;J=Xi(J))F++;for(;0<V-F;)ue=Xi(ue),V--;for(;0<F-V;)M=Xi(M),F--;for(;V--;){if(ue===M||M!==null&&ue===M.alternate)break t;ue=Xi(ue),M=Xi(M)}ue=null}else ue=null;ie!==null&&jp(Y,K,ie,ue,!1),le!==null&&ct!==null&&jp(Y,ct,le,ue,!0)}}e:{if(K=z?eo(z):window,ie=K.nodeName&&K.nodeName.toLowerCase(),ie==="select"||ie==="input"&&K.type==="file")var he=gw;else if(yp(K))if(vp)he=ww;else{he=_w;var me=yw}else(ie=K.nodeName)&&ie.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(he=vw);if(he&&(he=he(n,z))){_p(Y,he,a,Q);break e}me&&me(n,K,z),n==="focusout"&&(me=K._wrapperState)&&me.controlled&&K.type==="number"&&pt(K,"number",K.value)}switch(me=z?eo(z):window,n){case"focusin":(yp(me)||me.contentEditable==="true")&&(Yi=me,nh=z,ma=null);break;case"focusout":ma=nh=Yi=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,Cp(Y,a,Q);break;case"selectionchange":if(Iw)break;case"keydown":case"keyup":Cp(Y,a,Q)}var ge;if(Xc)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Qi?mp(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(dp&&a.locale!=="ko"&&(Qi||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Qi&&(ge=ql()):(un=Q,$i="value"in un?un.value:un.textContent,Qi=!0)),me=Zl(z,Ee),0<me.length&&(Ee=new y(Ee,n,null,a,Q),Y.push({event:Ee,listeners:me}),ge?Ee.data=ge:(ge=gp(a),ge!==null&&(Ee.data=ge)))),(ge=hw?dw(n,a):fw(n,a))&&(z=Zl(z,"onBeforeInput"),0<z.length&&(Q=new y("onBeforeInput","beforeinput",null,a,Q),Y.push({event:Q,listeners:z}),Q.data=ge))}Lp(Y,s)})}function _a(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Zl(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Bs(n,a),p!=null&&c.unshift(_a(n,p,d)),p=Bs(n,s),p!=null&&c.push(_a(n,p,d))),n=n.return}return c}function Xi(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function jp(n,s,a,c,d){for(var p=s._reactName,w=[];a!==null&&a!==c;){var A=a,N=A.alternate,z=A.stateNode;if(N!==null&&N===c)break;A.tag===5&&z!==null&&(A=z,d?(N=Bs(a,p),N!=null&&w.unshift(_a(a,N,A))):d||(N=Bs(a,p),N!=null&&w.push(_a(a,N,A)))),a=a.return}w.length!==0&&n.push({event:s,listeners:w})}var Cw=/\r\n?/g,Rw=/\u0000|\uFFFD/g;function Fp(n){return(typeof n=="string"?n:""+n).replace(Cw,`
`).replace(Rw,"")}function eu(n,s,a){if(s=Fp(s),Fp(n)!==s&&a)throw Error(t(425))}function tu(){}var uh=null,ch=null;function hh(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var dh=typeof setTimeout=="function"?setTimeout:void 0,kw=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,Pw=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(n){return Up.resolve(null).then(n).catch(Nw)}:dh;function Nw(n){setTimeout(function(){throw n})}function fh(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ss(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ss(s)}function ls(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function zp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var Zi=Math.random().toString(36).slice(2),sr="__reactFiber$"+Zi,va="__reactProps$"+Zi,Ar="__reactContainer$"+Zi,ph="__reactEvents$"+Zi,bw="__reactListeners$"+Zi,Dw="__reactHandles$"+Zi;function ti(n){var s=n[sr];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Ar]||a[sr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=zp(n);n!==null;){if(a=n[sr])return a;n=zp(n)}return s}n=a,a=n.parentNode}return null}function wa(n){return n=n[sr]||n[Ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function eo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function nu(n){return n[va]||null}var mh=[],to=-1;function us(n){return{current:n}}function Ye(n){0>to||(n.current=mh[to],mh[to]=null,to--)}function We(n,s){to++,mh[to]=n.current,n.current=s}var cs={},Mt=us(cs),Qt=us(!1),ni=cs;function no(n,s){var a=n.type.contextTypes;if(!a)return cs;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=s[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function Yt(n){return n=n.childContextTypes,n!=null}function ru(){Ye(Qt),Ye(Mt)}function Bp(n,s,a){if(Mt.current!==cs)throw Error(t(168));We(Mt,s),We(Qt,a)}function $p(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,ze(n)||"Unknown",d));return se({},a,c)}function su(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||cs,ni=Mt.current,We(Mt,n),We(Qt,Qt.current),!0}function qp(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=$p(n,s,ni),c.__reactInternalMemoizedMergedChildContext=n,Ye(Qt),Ye(Mt),We(Mt,n)):Ye(Qt),We(Qt,a)}var Cr=null,iu=!1,gh=!1;function Hp(n){Cr===null?Cr=[n]:Cr.push(n)}function Vw(n){iu=!0,Hp(n)}function hs(){if(!gh&&Cr!==null){gh=!0;var n=0,s=De;try{var a=Cr;for(De=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Cr=null,iu=!1}catch(d){throw Cr!==null&&(Cr=Cr.slice(n+1)),Yo(Li,hs),d}finally{De=s,gh=!1}}return null}var ro=[],so=0,ou=null,au=0,vn=[],wn=0,ri=null,Rr=1,kr="";function si(n,s){ro[so++]=au,ro[so++]=ou,ou=n,au=s}function Wp(n,s,a){vn[wn++]=Rr,vn[wn++]=kr,vn[wn++]=ri,ri=n;var c=Rr;n=kr;var d=32-an(c)-1;c&=~(1<<d),a+=1;var p=32-an(s)+d;if(30<p){var w=d-d%5;p=(c&(1<<w)-1).toString(32),c>>=w,d-=w,Rr=1<<32-an(s)+d|a<<d|c,kr=p+n}else Rr=1<<p|a<<d|c,kr=n}function yh(n){n.return!==null&&(si(n,1),Wp(n,1,0))}function _h(n){for(;n===ou;)ou=ro[--so],ro[so]=null,au=ro[--so],ro[so]=null;for(;n===ri;)ri=vn[--wn],vn[wn]=null,kr=vn[--wn],vn[wn]=null,Rr=vn[--wn],vn[wn]=null}var dn=null,fn=null,et=!1,Dn=null;function Gp(n,s){var a=xn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function Kp(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,dn=n,fn=ls(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,dn=n,fn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ri!==null?{id:Rr,overflow:kr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=xn(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,dn=n,fn=null,!0):!1;default:return!1}}function vh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function wh(n){if(et){var s=fn;if(s){var a=s;if(!Kp(n,s)){if(vh(n))throw Error(t(418));s=ls(a.nextSibling);var c=dn;s&&Kp(n,s)?Gp(c,a):(n.flags=n.flags&-4097|2,et=!1,dn=n)}}else{if(vh(n))throw Error(t(418));n.flags=n.flags&-4097|2,et=!1,dn=n}}}function Qp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;dn=n}function lu(n){if(n!==dn)return!1;if(!et)return Qp(n),et=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!hh(n.type,n.memoizedProps)),s&&(s=fn)){if(vh(n))throw Yp(),Error(t(418));for(;s;)Gp(n,s),s=ls(s.nextSibling)}if(Qp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){fn=ls(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}fn=null}}else fn=dn?ls(n.stateNode.nextSibling):null;return!0}function Yp(){for(var n=fn;n;)n=ls(n.nextSibling)}function io(){fn=dn=null,et=!1}function Eh(n){Dn===null?Dn=[n]:Dn.push(n)}var Ow=ce.ReactCurrentBatchConfig;function Ea(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===p?s.ref:(s=function(w){var A=d.refs;w===null?delete A[p]:A[p]=w},s._stringRef=p,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function uu(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Jp(n){var s=n._init;return s(n._payload)}function Xp(n){function s(M,V){if(n){var F=M.deletions;F===null?(M.deletions=[V],M.flags|=16):F.push(V)}}function a(M,V){if(!n)return null;for(;V!==null;)s(M,V),V=V.sibling;return null}function c(M,V){for(M=new Map;V!==null;)V.key!==null?M.set(V.key,V):M.set(V.index,V),V=V.sibling;return M}function d(M,V){return M=vs(M,V),M.index=0,M.sibling=null,M}function p(M,V,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<V?(M.flags|=2,V):F):(M.flags|=2,V)):(M.flags|=1048576,V)}function w(M){return n&&M.alternate===null&&(M.flags|=2),M}function A(M,V,F,J){return V===null||V.tag!==6?(V=dd(F,M.mode,J),V.return=M,V):(V=d(V,F),V.return=M,V)}function N(M,V,F,J){var he=F.type;return he===k?Q(M,V,F.props.children,J,F.key):V!==null&&(V.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===it&&Jp(he)===V.type)?(J=d(V,F.props),J.ref=Ea(M,V,F),J.return=M,J):(J=Du(F.type,F.key,F.props,null,M.mode,J),J.ref=Ea(M,V,F),J.return=M,J)}function z(M,V,F,J){return V===null||V.tag!==4||V.stateNode.containerInfo!==F.containerInfo||V.stateNode.implementation!==F.implementation?(V=fd(F,M.mode,J),V.return=M,V):(V=d(V,F.children||[]),V.return=M,V)}function Q(M,V,F,J,he){return V===null||V.tag!==7?(V=di(F,M.mode,J,he),V.return=M,V):(V=d(V,F),V.return=M,V)}function Y(M,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return V=dd(""+V,M.mode,F),V.return=M,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Se:return F=Du(V.type,V.key,V.props,null,M.mode,F),F.ref=Ea(M,null,V),F.return=M,F;case pe:return V=fd(V,M.mode,F),V.return=M,V;case it:var J=V._init;return Y(M,J(V._payload),F)}if(lt(V)||de(V))return V=di(V,M.mode,F,null),V.return=M,V;uu(M,V)}return null}function K(M,V,F,J){var he=V!==null?V.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return he!==null?null:A(M,V,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Se:return F.key===he?N(M,V,F,J):null;case pe:return F.key===he?z(M,V,F,J):null;case it:return he=F._init,K(M,V,he(F._payload),J)}if(lt(F)||de(F))return he!==null?null:Q(M,V,F,J,null);uu(M,F)}return null}function ie(M,V,F,J,he){if(typeof J=="string"&&J!==""||typeof J=="number")return M=M.get(F)||null,A(V,M,""+J,he);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Se:return M=M.get(J.key===null?F:J.key)||null,N(V,M,J,he);case pe:return M=M.get(J.key===null?F:J.key)||null,z(V,M,J,he);case it:var me=J._init;return ie(M,V,F,me(J._payload),he)}if(lt(J)||de(J))return M=M.get(F)||null,Q(V,M,J,he,null);uu(V,J)}return null}function le(M,V,F,J){for(var he=null,me=null,ge=V,Ee=V=0,At=null;ge!==null&&Ee<F.length;Ee++){ge.index>Ee?(At=ge,ge=null):At=ge.sibling;var Fe=K(M,ge,F[Ee],J);if(Fe===null){ge===null&&(ge=At);break}n&&ge&&Fe.alternate===null&&s(M,ge),V=p(Fe,V,Ee),me===null?he=Fe:me.sibling=Fe,me=Fe,ge=At}if(Ee===F.length)return a(M,ge),et&&si(M,Ee),he;if(ge===null){for(;Ee<F.length;Ee++)ge=Y(M,F[Ee],J),ge!==null&&(V=p(ge,V,Ee),me===null?he=ge:me.sibling=ge,me=ge);return et&&si(M,Ee),he}for(ge=c(M,ge);Ee<F.length;Ee++)At=ie(ge,M,Ee,F[Ee],J),At!==null&&(n&&At.alternate!==null&&ge.delete(At.key===null?Ee:At.key),V=p(At,V,Ee),me===null?he=At:me.sibling=At,me=At);return n&&ge.forEach(function(ws){return s(M,ws)}),et&&si(M,Ee),he}function ue(M,V,F,J){var he=de(F);if(typeof he!="function")throw Error(t(150));if(F=he.call(F),F==null)throw Error(t(151));for(var me=he=null,ge=V,Ee=V=0,At=null,Fe=F.next();ge!==null&&!Fe.done;Ee++,Fe=F.next()){ge.index>Ee?(At=ge,ge=null):At=ge.sibling;var ws=K(M,ge,Fe.value,J);if(ws===null){ge===null&&(ge=At);break}n&&ge&&ws.alternate===null&&s(M,ge),V=p(ws,V,Ee),me===null?he=ws:me.sibling=ws,me=ws,ge=At}if(Fe.done)return a(M,ge),et&&si(M,Ee),he;if(ge===null){for(;!Fe.done;Ee++,Fe=F.next())Fe=Y(M,Fe.value,J),Fe!==null&&(V=p(Fe,V,Ee),me===null?he=Fe:me.sibling=Fe,me=Fe);return et&&si(M,Ee),he}for(ge=c(M,ge);!Fe.done;Ee++,Fe=F.next())Fe=ie(ge,M,Ee,Fe.value,J),Fe!==null&&(n&&Fe.alternate!==null&&ge.delete(Fe.key===null?Ee:Fe.key),V=p(Fe,V,Ee),me===null?he=Fe:me.sibling=Fe,me=Fe);return n&&ge.forEach(function(pE){return s(M,pE)}),et&&si(M,Ee),he}function ct(M,V,F,J){if(typeof F=="object"&&F!==null&&F.type===k&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Se:e:{for(var he=F.key,me=V;me!==null;){if(me.key===he){if(he=F.type,he===k){if(me.tag===7){a(M,me.sibling),V=d(me,F.props.children),V.return=M,M=V;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===it&&Jp(he)===me.type){a(M,me.sibling),V=d(me,F.props),V.ref=Ea(M,me,F),V.return=M,M=V;break e}a(M,me);break}else s(M,me);me=me.sibling}F.type===k?(V=di(F.props.children,M.mode,J,F.key),V.return=M,M=V):(J=Du(F.type,F.key,F.props,null,M.mode,J),J.ref=Ea(M,V,F),J.return=M,M=J)}return w(M);case pe:e:{for(me=F.key;V!==null;){if(V.key===me)if(V.tag===4&&V.stateNode.containerInfo===F.containerInfo&&V.stateNode.implementation===F.implementation){a(M,V.sibling),V=d(V,F.children||[]),V.return=M,M=V;break e}else{a(M,V);break}else s(M,V);V=V.sibling}V=fd(F,M.mode,J),V.return=M,M=V}return w(M);case it:return me=F._init,ct(M,V,me(F._payload),J)}if(lt(F))return le(M,V,F,J);if(de(F))return ue(M,V,F,J);uu(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,V!==null&&V.tag===6?(a(M,V.sibling),V=d(V,F),V.return=M,M=V):(a(M,V),V=dd(F,M.mode,J),V.return=M,M=V),w(M)):a(M,V)}return ct}var oo=Xp(!0),Zp=Xp(!1),cu=us(null),hu=null,ao=null,Th=null;function Ih(){Th=ao=hu=null}function xh(n){var s=cu.current;Ye(cu),n._currentValue=s}function Sh(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function lo(n,s){hu=n,Th=ao=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Jt=!0),n.firstContext=null)}function En(n){var s=n._currentValue;if(Th!==n)if(n={context:n,memoizedValue:s,next:null},ao===null){if(hu===null)throw Error(t(308));ao=n,hu.dependencies={lanes:0,firstContext:n}}else ao=ao.next=n;return s}var ii=null;function Ah(n){ii===null?ii=[n]:ii.push(n)}function em(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Ah(s)):(a.next=d.next,d.next=a),s.interleaved=a,Pr(n,c)}function Pr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ds=!1;function Ch(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Nr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function fs(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Me&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Pr(n,a)}return d=c.interleaved,d===null?(s.next=s,Ah(c)):(s.next=d.next,d.next=s),c.interleaved=s,Pr(n,a)}function du(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,na(n,a)}}function nm(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=w:p=p.next=w,a=a.next}while(a!==null);p===null?d=p=s:p=p.next=s}else d=p=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function fu(n,s,a,c){var d=n.updateQueue;ds=!1;var p=d.firstBaseUpdate,w=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var N=A,z=N.next;N.next=null,w===null?p=z:w.next=z,w=N;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,A=Q.lastBaseUpdate,A!==w&&(A===null?Q.firstBaseUpdate=z:A.next=z,Q.lastBaseUpdate=N))}if(p!==null){var Y=d.baseState;w=0,Q=z=N=null,A=p;do{var K=A.lane,ie=A.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:ie,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var le=n,ue=A;switch(K=s,ie=a,ue.tag){case 1:if(le=ue.payload,typeof le=="function"){Y=le.call(ie,Y,K);break e}Y=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ue.payload,K=typeof le=="function"?le.call(ie,Y,K):le,K==null)break e;Y=se({},Y,K);break e;case 2:ds=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[A]:K.push(A))}else ie={eventTime:ie,lane:K,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Q===null?(z=Q=ie,N=Y):Q=Q.next=ie,w|=K;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;K=A,A=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(N=Y),d.baseState=N,d.firstBaseUpdate=z,d.lastBaseUpdate=Q,s=d.shared.interleaved,s!==null){d=s;do w|=d.lane,d=d.next;while(d!==s)}else p===null&&(d.shared.lanes=0);li|=w,n.lanes=w,n.memoizedState=Y}}function rm(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ta={},ir=us(Ta),Ia=us(Ta),xa=us(Ta);function oi(n){if(n===Ta)throw Error(t(174));return n}function Rh(n,s){switch(We(xa,s),We(Ia,n),We(ir,Ta),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Pi(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=Pi(s,n)}Ye(ir),We(ir,s)}function uo(){Ye(ir),Ye(Ia),Ye(xa)}function sm(n){oi(xa.current);var s=oi(ir.current),a=Pi(s,n.type);s!==a&&(We(Ia,n),We(ir,a))}function kh(n){Ia.current===n&&(Ye(ir),Ye(Ia))}var rt=us(0);function pu(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ph=[];function Nh(){for(var n=0;n<Ph.length;n++)Ph[n]._workInProgressVersionPrimary=null;Ph.length=0}var mu=ce.ReactCurrentDispatcher,bh=ce.ReactCurrentBatchConfig,ai=0,st=null,wt=null,xt=null,gu=!1,Sa=!1,Aa=0,Lw=0;function jt(){throw Error(t(321))}function Dh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!bn(n[a],s[a]))return!1;return!0}function Vh(n,s,a,c,d,p){if(ai=p,st=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,mu.current=n===null||n.memoizedState===null?Uw:zw,n=a(c,d),Sa){p=0;do{if(Sa=!1,Aa=0,25<=p)throw Error(t(301));p+=1,xt=wt=null,s.updateQueue=null,mu.current=Bw,n=a(c,d)}while(Sa)}if(mu.current=vu,s=wt!==null&&wt.next!==null,ai=0,xt=wt=st=null,gu=!1,s)throw Error(t(300));return n}function Oh(){var n=Aa!==0;return Aa=0,n}function or(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?st.memoizedState=xt=n:xt=xt.next=n,xt}function Tn(){if(wt===null){var n=st.alternate;n=n!==null?n.memoizedState:null}else n=wt.next;var s=xt===null?st.memoizedState:xt.next;if(s!==null)xt=s,wt=n;else{if(n===null)throw Error(t(310));wt=n,n={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},xt===null?st.memoizedState=xt=n:xt=xt.next=n}return xt}function Ca(n,s){return typeof s=="function"?s(n):s}function Lh(n){var s=Tn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=wt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var w=d.next;d.next=p.next,p.next=w}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var A=w=null,N=null,z=p;do{var Q=z.lane;if((ai&Q)===Q)N!==null&&(N=N.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:n(c,z.action);else{var Y={lane:Q,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};N===null?(A=N=Y,w=c):N=N.next=Y,st.lanes|=Q,li|=Q}z=z.next}while(z!==null&&z!==p);N===null?w=c:N.next=A,bn(c,s.memoizedState)||(Jt=!0),s.memoizedState=c,s.baseState=w,s.baseQueue=N,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,st.lanes|=p,li|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Mh(n){var s=Tn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=s.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do p=n(p,w.action),w=w.next;while(w!==d);bn(p,s.memoizedState)||(Jt=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),a.lastRenderedState=p}return[p,c]}function im(){}function om(n,s){var a=st,c=Tn(),d=s(),p=!bn(c.memoizedState,d);if(p&&(c.memoizedState=d,Jt=!0),c=c.queue,jh(um.bind(null,a,c,n),[n]),c.getSnapshot!==s||p||xt!==null&&xt.memoizedState.tag&1){if(a.flags|=2048,Ra(9,lm.bind(null,a,c,d,s),void 0,null),St===null)throw Error(t(349));(ai&30)!==0||am(a,s,d)}return d}function am(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=st.updateQueue,s===null?(s={lastEffect:null,stores:null},st.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function lm(n,s,a,c){s.value=a,s.getSnapshot=c,cm(s)&&hm(n)}function um(n,s,a){return a(function(){cm(s)&&hm(n)})}function cm(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!bn(n,a)}catch{return!0}}function hm(n){var s=Pr(n,1);s!==null&&Mn(s,n,1,-1)}function dm(n){var s=or();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:n},s.queue=n,n=n.dispatch=Fw.bind(null,st,n),[s.memoizedState,n]}function Ra(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=st.updateQueue,s===null?(s={lastEffect:null,stores:null},st.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function fm(){return Tn().memoizedState}function yu(n,s,a,c){var d=or();st.flags|=n,d.memoizedState=Ra(1|s,a,void 0,c===void 0?null:c)}function _u(n,s,a,c){var d=Tn();c=c===void 0?null:c;var p=void 0;if(wt!==null){var w=wt.memoizedState;if(p=w.destroy,c!==null&&Dh(c,w.deps)){d.memoizedState=Ra(s,a,p,c);return}}st.flags|=n,d.memoizedState=Ra(1|s,a,p,c)}function pm(n,s){return yu(8390656,8,n,s)}function jh(n,s){return _u(2048,8,n,s)}function mm(n,s){return _u(4,2,n,s)}function gm(n,s){return _u(4,4,n,s)}function ym(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function _m(n,s,a){return a=a!=null?a.concat([n]):null,_u(4,4,ym.bind(null,s,n),a)}function Fh(){}function vm(n,s){var a=Tn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Dh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function wm(n,s){var a=Tn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Dh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function Em(n,s,a){return(ai&21)===0?(n.baseState&&(n.baseState=!1,Jt=!0),n.memoizedState=a):(bn(a,s)||(a=ea(),st.lanes|=a,li|=a,n.baseState=!0),s)}function Mw(n,s){var a=De;De=a!==0&&4>a?a:4,n(!0);var c=bh.transition;bh.transition={};try{n(!1),s()}finally{De=a,bh.transition=c}}function Tm(){return Tn().memoizedState}function jw(n,s,a){var c=ys(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Im(n))xm(s,a);else if(a=em(n,s,a,c),a!==null){var d=Gt();Mn(a,n,c,d),Sm(a,s,c)}}function Fw(n,s,a){var c=ys(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Im(n))xm(s,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var w=s.lastRenderedState,A=p(w,a);if(d.hasEagerState=!0,d.eagerState=A,bn(A,w)){var N=s.interleaved;N===null?(d.next=d,Ah(s)):(d.next=N.next,N.next=d),s.interleaved=d;return}}catch{}finally{}a=em(n,s,d,c),a!==null&&(d=Gt(),Mn(a,n,c,d),Sm(a,s,c))}}function Im(n){var s=n.alternate;return n===st||s!==null&&s===st}function xm(n,s){Sa=gu=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function Sm(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,na(n,a)}}var vu={readContext:En,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},Uw={readContext:En,useCallback:function(n,s){return or().memoizedState=[n,s===void 0?null:s],n},useContext:En,useEffect:pm,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,yu(4194308,4,ym.bind(null,s,n),a)},useLayoutEffect:function(n,s){return yu(4194308,4,n,s)},useInsertionEffect:function(n,s){return yu(4,2,n,s)},useMemo:function(n,s){var a=or();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=or();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=jw.bind(null,st,n),[c.memoizedState,n]},useRef:function(n){var s=or();return n={current:n},s.memoizedState=n},useState:dm,useDebugValue:Fh,useDeferredValue:function(n){return or().memoizedState=n},useTransition:function(){var n=dm(!1),s=n[0];return n=Mw.bind(null,n[1]),or().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=st,d=or();if(et){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),St===null)throw Error(t(349));(ai&30)!==0||am(c,s,a)}d.memoizedState=a;var p={value:a,getSnapshot:s};return d.queue=p,pm(um.bind(null,c,p,n),[n]),c.flags|=2048,Ra(9,lm.bind(null,c,p,a,s),void 0,null),a},useId:function(){var n=or(),s=St.identifierPrefix;if(et){var a=kr,c=Rr;a=(c&~(1<<32-an(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Aa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Lw++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},zw={readContext:En,useCallback:vm,useContext:En,useEffect:jh,useImperativeHandle:_m,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:wm,useReducer:Lh,useRef:fm,useState:function(){return Lh(Ca)},useDebugValue:Fh,useDeferredValue:function(n){var s=Tn();return Em(s,wt.memoizedState,n)},useTransition:function(){var n=Lh(Ca)[0],s=Tn().memoizedState;return[n,s]},useMutableSource:im,useSyncExternalStore:om,useId:Tm,unstable_isNewReconciler:!1},Bw={readContext:En,useCallback:vm,useContext:En,useEffect:jh,useImperativeHandle:_m,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:wm,useReducer:Mh,useRef:fm,useState:function(){return Mh(Ca)},useDebugValue:Fh,useDeferredValue:function(n){var s=Tn();return wt===null?s.memoizedState=n:Em(s,wt.memoizedState,n)},useTransition:function(){var n=Mh(Ca)[0],s=Tn().memoizedState;return[n,s]},useMutableSource:im,useSyncExternalStore:om,useId:Tm,unstable_isNewReconciler:!1};function Vn(n,s){if(n&&n.defaultProps){s=se({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function Uh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:se({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var wu={isMounted:function(n){return(n=n._reactInternals)?Pn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=Gt(),d=ys(n),p=Nr(c,d);p.payload=s,a!=null&&(p.callback=a),s=fs(n,p,d),s!==null&&(Mn(s,n,d,c),du(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=Gt(),d=ys(n),p=Nr(c,d);p.tag=1,p.payload=s,a!=null&&(p.callback=a),s=fs(n,p,d),s!==null&&(Mn(s,n,d,c),du(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=Gt(),c=ys(n),d=Nr(a,c);d.tag=2,s!=null&&(d.callback=s),s=fs(n,d,c),s!==null&&(Mn(s,n,c,a),du(s,n,c))}};function Am(n,s,a,c,d,p,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,w):s.prototype&&s.prototype.isPureReactComponent?!pa(a,c)||!pa(d,p):!0}function Cm(n,s,a){var c=!1,d=cs,p=s.contextType;return typeof p=="object"&&p!==null?p=En(p):(d=Yt(s)?ni:Mt.current,c=s.contextTypes,p=(c=c!=null)?no(n,d):cs),s=new s(a,p),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=wu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),s}function Rm(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&wu.enqueueReplaceState(s,s.state,null)}function zh(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Ch(n);var p=s.contextType;typeof p=="object"&&p!==null?d.context=En(p):(p=Yt(s)?ni:Mt.current,d.context=no(n,p)),d.state=n.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(Uh(n,s,p,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&wu.enqueueReplaceState(d,d.state,null),fu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function co(n,s){try{var a="",c=s;do a+=Pe(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:s,stack:d,digest:null}}function Bh(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function $h(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var $w=typeof WeakMap=="function"?WeakMap:Map;function km(n,s,a){a=Nr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Cu||(Cu=!0,sd=c),$h(n,s)},a}function Pm(n,s,a){a=Nr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){$h(n,s)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){$h(n,s),typeof c!="function"&&(ms===null?ms=new Set([this]):ms.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function Nm(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new $w;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=rE.bind(null,n,s,a),s.then(n,n))}function bm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Dm(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Nr(-1,1),s.tag=2,fs(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var qw=ce.ReactCurrentOwner,Jt=!1;function Wt(n,s,a,c){s.child=n===null?Zp(s,null,a,c):oo(s,n.child,a,c)}function Vm(n,s,a,c,d){a=a.render;var p=s.ref;return lo(s,d),c=Vh(n,s,a,c,p,d),a=Oh(),n!==null&&!Jt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,br(n,s,d)):(et&&a&&yh(s),s.flags|=1,Wt(n,s,c,d),s.child)}function Om(n,s,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!hd(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=p,Lm(n,s,p,c,d)):(n=Du(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(p=n.child,(n.lanes&d)===0){var w=p.memoizedProps;if(a=a.compare,a=a!==null?a:pa,a(w,c)&&n.ref===s.ref)return br(n,s,d)}return s.flags|=1,n=vs(p,c),n.ref=s.ref,n.return=s,s.child=n}function Lm(n,s,a,c,d){if(n!==null){var p=n.memoizedProps;if(pa(p,c)&&n.ref===s.ref)if(Jt=!1,s.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Jt=!0);else return s.lanes=n.lanes,br(n,s,d)}return qh(n,s,a,c,d)}function Mm(n,s,a){var c=s.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(fo,pn),pn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,We(fo,pn),pn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,We(fo,pn),pn|=c}else p!==null?(c=p.baseLanes|a,s.memoizedState=null):c=a,We(fo,pn),pn|=c;return Wt(n,s,d,a),s.child}function jm(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function qh(n,s,a,c,d){var p=Yt(a)?ni:Mt.current;return p=no(s,p),lo(s,d),a=Vh(n,s,a,c,p,d),c=Oh(),n!==null&&!Jt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,br(n,s,d)):(et&&c&&yh(s),s.flags|=1,Wt(n,s,a,d),s.child)}function Fm(n,s,a,c,d){if(Yt(a)){var p=!0;su(s)}else p=!1;if(lo(s,d),s.stateNode===null)Tu(n,s),Cm(s,a,c),zh(s,a,c,d),c=!0;else if(n===null){var w=s.stateNode,A=s.memoizedProps;w.props=A;var N=w.context,z=a.contextType;typeof z=="object"&&z!==null?z=En(z):(z=Yt(a)?ni:Mt.current,z=no(s,z));var Q=a.getDerivedStateFromProps,Y=typeof Q=="function"||typeof w.getSnapshotBeforeUpdate=="function";Y||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==c||N!==z)&&Rm(s,w,c,z),ds=!1;var K=s.memoizedState;w.state=K,fu(s,c,w,d),N=s.memoizedState,A!==c||K!==N||Qt.current||ds?(typeof Q=="function"&&(Uh(s,a,Q,c),N=s.memoizedState),(A=ds||Am(s,a,A,c,K,N,z))?(Y||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=N),w.props=c,w.state=N,w.context=z,c=A):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{w=s.stateNode,tm(n,s),A=s.memoizedProps,z=s.type===s.elementType?A:Vn(s.type,A),w.props=z,Y=s.pendingProps,K=w.context,N=a.contextType,typeof N=="object"&&N!==null?N=En(N):(N=Yt(a)?ni:Mt.current,N=no(s,N));var ie=a.getDerivedStateFromProps;(Q=typeof ie=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==Y||K!==N)&&Rm(s,w,c,N),ds=!1,K=s.memoizedState,w.state=K,fu(s,c,w,d);var le=s.memoizedState;A!==Y||K!==le||Qt.current||ds?(typeof ie=="function"&&(Uh(s,a,ie,c),le=s.memoizedState),(z=ds||Am(s,a,z,c,K,le,N)||!1)?(Q||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,le,N),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,le,N)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=le),w.props=c,w.state=le,w.context=N,c=z):(typeof w.componentDidUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),c=!1)}return Hh(n,s,a,c,p,d)}function Hh(n,s,a,c,d,p){jm(n,s);var w=(s.flags&128)!==0;if(!c&&!w)return d&&qp(s,a,!1),br(n,s,p);c=s.stateNode,qw.current=s;var A=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&w?(s.child=oo(s,n.child,null,p),s.child=oo(s,null,A,p)):Wt(n,s,A,p),s.memoizedState=c.state,d&&qp(s,a,!0),s.child}function Um(n){var s=n.stateNode;s.pendingContext?Bp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Bp(n,s.context,!1),Rh(n,s.containerInfo)}function zm(n,s,a,c,d){return io(),Eh(d),s.flags|=256,Wt(n,s,a,c),s.child}var Wh={dehydrated:null,treeContext:null,retryLane:0};function Gh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bm(n,s,a){var c=s.pendingProps,d=rt.current,p=!1,w=(s.flags&128)!==0,A;if((A=w)||(A=n!==null&&n.memoizedState===null?!1:(d&2)!==0),A?(p=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(rt,d&1),n===null)return wh(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=c.children,n=c.fallback,p?(c=s.mode,p=s.child,w={mode:"hidden",children:w},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=Vu(w,c,0,null),n=di(n,c,a,null),p.return=s,n.return=s,p.sibling=n,s.child=p,s.child.memoizedState=Gh(a),s.memoizedState=Wh,n):Kh(s,w));if(d=n.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return Hw(n,s,w,c,A,d,a);if(p){p=c.fallback,w=s.mode,d=n.child,A=d.sibling;var N={mode:"hidden",children:c.children};return(w&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=N,s.deletions=null):(c=vs(d,N),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?p=vs(A,p):(p=di(p,w,a,null),p.flags|=2),p.return=s,c.return=s,c.sibling=p,s.child=c,c=p,p=s.child,w=n.child.memoizedState,w=w===null?Gh(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=n.childLanes&~a,s.memoizedState=Wh,c}return p=n.child,n=p.sibling,c=vs(p,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function Kh(n,s){return s=Vu({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function Eu(n,s,a,c){return c!==null&&Eh(c),oo(s,n.child,null,a),n=Kh(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function Hw(n,s,a,c,d,p,w){if(a)return s.flags&256?(s.flags&=-257,c=Bh(Error(t(422))),Eu(n,s,w,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(p=c.fallback,d=s.mode,c=Vu({mode:"visible",children:c.children},d,0,null),p=di(p,d,w,null),p.flags|=2,c.return=s,p.return=s,c.sibling=p,s.child=c,(s.mode&1)!==0&&oo(s,n.child,null,w),s.child.memoizedState=Gh(w),s.memoizedState=Wh,p);if((s.mode&1)===0)return Eu(n,s,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,p=Error(t(419)),c=Bh(p,c,void 0),Eu(n,s,w,c)}if(A=(w&n.childLanes)!==0,Jt||A){if(c=St,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|w))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Pr(n,d),Mn(c,n,d,-1))}return cd(),c=Bh(Error(t(421))),Eu(n,s,w,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=sE.bind(null,n),d._reactRetry=s,null):(n=p.treeContext,fn=ls(d.nextSibling),dn=s,et=!0,Dn=null,n!==null&&(vn[wn++]=Rr,vn[wn++]=kr,vn[wn++]=ri,Rr=n.id,kr=n.overflow,ri=s),s=Kh(s,c.children),s.flags|=4096,s)}function $m(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),Sh(n.return,s,a)}function Qh(n,s,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function qm(n,s,a){var c=s.pendingProps,d=c.revealOrder,p=c.tail;if(Wt(n,s,c.children,a),c=rt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$m(n,a,s);else if(n.tag===19)$m(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(rt,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&pu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Qh(s,!1,d,a,p);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&pu(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Qh(s,!0,a,null,p);break;case"together":Qh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Tu(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function br(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),li|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=vs(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=vs(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function Ww(n,s,a){switch(s.tag){case 3:Um(s),io();break;case 5:sm(s);break;case 1:Yt(s.type)&&su(s);break;case 4:Rh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;We(cu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(We(rt,rt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Bm(n,s,a):(We(rt,rt.current&1),n=br(n,s,a),n!==null?n.sibling:null);We(rt,rt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return qm(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(rt,rt.current),c)break;return null;case 22:case 23:return s.lanes=0,Mm(n,s,a)}return br(n,s,a)}var Hm,Yh,Wm,Gm;Hm=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Yh=function(){},Wm=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,oi(ir.current);var p=null;switch(a){case"input":d=Ri(n,d),c=Ri(n,c),p=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),p=[];break;case"textarea":d=$o(n,d),c=$o(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=tu)}kn(a,c);var w;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var A=d[z];for(w in A)A.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?p||(p=[]):(p=p||[]).push(z,null));for(z in c){var N=c[z];if(A=d!=null?d[z]:void 0,c.hasOwnProperty(z)&&N!==A&&(N!=null||A!=null))if(z==="style")if(A){for(w in A)!A.hasOwnProperty(w)||N&&N.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in N)N.hasOwnProperty(w)&&A[w]!==N[w]&&(a||(a={}),a[w]=N[w])}else a||(p||(p=[]),p.push(z,a)),a=N;else z==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,A=A?A.__html:void 0,N!=null&&A!==N&&(p=p||[]).push(z,N)):z==="children"?typeof N!="string"&&typeof N!="number"||(p=p||[]).push(z,""+N):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(N!=null&&z==="onScroll"&&Qe("scroll",n),p||A===N||(p=[])):(p=p||[]).push(z,N))}a&&(p=p||[]).push("style",a);var z=p;(s.updateQueue=z)&&(s.flags|=4)}},Gm=function(n,s,a,c){a!==c&&(s.flags|=4)};function ka(n,s){if(!et)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ft(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function Gw(n,s,a){var c=s.pendingProps;switch(_h(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return Yt(s.type)&&ru(),Ft(s),null;case 3:return c=s.stateNode,uo(),Ye(Qt),Ye(Mt),Nh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(lu(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Dn!==null&&(ad(Dn),Dn=null))),Yh(n,s),Ft(s),null;case 5:kh(s);var d=oi(xa.current);if(a=s.type,n!==null&&s.stateNode!=null)Wm(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(n=oi(ir.current),lu(s)){c=s.stateNode,a=s.type;var p=s.memoizedProps;switch(c[sr]=s,c[va]=p,n=(s.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<ga.length;d++)Qe(ga[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":Al(c,p),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Qe("invalid",c);break;case"textarea":qo(c,p),Qe("invalid",c)}kn(a,p),d=null;for(var w in p)if(p.hasOwnProperty(w)){var A=p[w];w==="children"?typeof A=="string"?c.textContent!==A&&(p.suppressHydrationWarning!==!0&&eu(c.textContent,A,n),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(p.suppressHydrationWarning!==!0&&eu(c.textContent,A,n),d=["children",""+A]):o.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&Qe("scroll",c)}switch(a){case"input":Ci(c),Bo(c,p,!0);break;case"textarea":Ci(c),Wr(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=tu)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ho(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[sr]=s,n[va]=c,Hm(n,s,!1,!1),s.stateNode=n;e:{switch(w=bi(a,c),a){case"dialog":Qe("cancel",n),Qe("close",n),d=c;break;case"iframe":case"object":case"embed":Qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<ga.length;d++)Qe(ga[d],n);d=c;break;case"source":Qe("error",n),d=c;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=c;break;case"details":Qe("toggle",n),d=c;break;case"input":Al(n,c),d=Ri(n,c),Qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),Qe("invalid",n);break;case"textarea":qo(n,c),d=$o(n,c),Qe("invalid",n);break;default:d=c}kn(a,d),A=d;for(p in A)if(A.hasOwnProperty(p)){var N=A[p];p==="style"?Ni(n,N):p==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Rl(n,N)):p==="children"?typeof N=="string"?(a!=="textarea"||N!=="")&&zs(n,N):typeof N=="number"&&zs(n,""+N):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?N!=null&&p==="onScroll"&&Qe("scroll",n):N!=null&&ye(n,p,N,w))}switch(a){case"input":Ci(n),Bo(n,c,!1);break;case"textarea":Ci(n),Wr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?Rn(n,!!c.multiple,p,!1):c.defaultValue!=null&&Rn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=tu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(n&&s.stateNode!=null)Gm(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=oi(xa.current),oi(ir.current),lu(s)){if(c=s.stateNode,a=s.memoizedProps,c[sr]=s,(p=c.nodeValue!==a)&&(n=dn,n!==null))switch(n.tag){case 3:eu(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&eu(c.nodeValue,a,(n.mode&1)!==0)}p&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[sr]=s,s.stateNode=c}return Ft(s),null;case 13:if(Ye(rt),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(et&&fn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Yp(),io(),s.flags|=98560,p=!1;else if(p=lu(s),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[sr]=s}else io(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ft(s),p=!1}else Dn!==null&&(ad(Dn),Dn=null),p=!0;if(!p)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(rt.current&1)!==0?Et===0&&(Et=3):cd())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return uo(),Yh(n,s),n===null&&ya(s.stateNode.containerInfo),Ft(s),null;case 10:return xh(s.type._context),Ft(s),null;case 17:return Yt(s.type)&&ru(),Ft(s),null;case 19:if(Ye(rt),p=s.memoizedState,p===null)return Ft(s),null;if(c=(s.flags&128)!==0,w=p.rendering,w===null)if(c)ka(p,!1);else{if(Et!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(w=pu(n),w!==null){for(s.flags|=128,ka(p,!1),c=w.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)p=a,n=c,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,n=w.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(rt,rt.current&1|2),s.child}n=n.sibling}p.tail!==null&&Ke()>po&&(s.flags|=128,c=!0,ka(p,!1),s.lanes=4194304)}else{if(!c)if(n=pu(w),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),ka(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!et)return Ft(s),null}else 2*Ke()-p.renderingStartTime>po&&a!==1073741824&&(s.flags|=128,c=!0,ka(p,!1),s.lanes=4194304);p.isBackwards?(w.sibling=s.child,s.child=w):(a=p.last,a!==null?a.sibling=w:s.child=w,p.last=w)}return p.tail!==null?(s=p.tail,p.rendering=s,p.tail=s.sibling,p.renderingStartTime=Ke(),s.sibling=null,a=rt.current,We(rt,c?a&1|2:a&1),s):(Ft(s),null);case 22:case 23:return ud(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(pn&1073741824)!==0&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function Kw(n,s){switch(_h(s),s.tag){case 1:return Yt(s.type)&&ru(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return uo(),Ye(Qt),Ye(Mt),Nh(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return kh(s),null;case 13:if(Ye(rt),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));io()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Ye(rt),null;case 4:return uo(),null;case 10:return xh(s.type._context),null;case 22:case 23:return ud(),null;case 24:return null;default:return null}}var Iu=!1,Ut=!1,Qw=typeof WeakSet=="function"?WeakSet:Set,oe=null;function ho(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){at(n,s,c)}else a.current=null}function Jh(n,s,a){try{a()}catch(c){at(n,s,c)}}var Km=!1;function Yw(n,s){if(uh=Ir,n=Ap(),th(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var w=0,A=-1,N=-1,z=0,Q=0,Y=n,K=null;t:for(;;){for(var ie;Y!==a||d!==0&&Y.nodeType!==3||(A=w+d),Y!==p||c!==0&&Y.nodeType!==3||(N=w+c),Y.nodeType===3&&(w+=Y.nodeValue.length),(ie=Y.firstChild)!==null;)K=Y,Y=ie;for(;;){if(Y===n)break t;if(K===a&&++z===d&&(A=w),K===p&&++Q===c&&(N=w),(ie=Y.nextSibling)!==null)break;Y=K,K=Y.parentNode}Y=ie}a=A===-1||N===-1?null:{start:A,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(ch={focusedElem:n,selectionRange:a},Ir=!1,oe=s;oe!==null;)if(s=oe,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,oe=n;else for(;oe!==null;){s=oe;try{var le=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ue=le.memoizedProps,ct=le.memoizedState,M=s.stateNode,V=M.getSnapshotBeforeUpdate(s.elementType===s.type?ue:Vn(s.type,ue),ct);M.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){at(s,s.return,J)}if(n=s.sibling,n!==null){n.return=s.return,oe=n;break}oe=s.return}return le=Km,Km=!1,le}function Pa(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Jh(s,a,p)}d=d.next}while(d!==c)}}function xu(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Xh(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function Qm(n){var s=n.alternate;s!==null&&(n.alternate=null,Qm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[sr],delete s[va],delete s[ph],delete s[bw],delete s[Dw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ym(n){return n.tag===5||n.tag===3||n.tag===4}function Jm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ym(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Zh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=tu));else if(c!==4&&(n=n.child,n!==null))for(Zh(n,s,a),n=n.sibling;n!==null;)Zh(n,s,a),n=n.sibling}function ed(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ed(n,s,a),n=n.sibling;n!==null;)ed(n,s,a),n=n.sibling}var Pt=null,On=!1;function ps(n,s,a){for(a=a.child;a!==null;)Xm(n,s,a),a=a.sibling}function Xm(n,s,a){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Ws,a)}catch{}switch(a.tag){case 5:Ut||ho(a,s);case 6:var c=Pt,d=On;Pt=null,ps(n,s,a),Pt=c,On=d,Pt!==null&&(On?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(On?(n=Pt,a=a.stateNode,n.nodeType===8?fh(n.parentNode,a):n.nodeType===1&&fh(n,a),ss(n)):fh(Pt,a.stateNode));break;case 4:c=Pt,d=On,Pt=a.stateNode.containerInfo,On=!0,ps(n,s,a),Pt=c,On=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&Jh(a,s,w),d=d.next}while(d!==c)}ps(n,s,a);break;case 1:if(!Ut&&(ho(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){at(a,s,A)}ps(n,s,a);break;case 21:ps(n,s,a);break;case 22:a.mode&1?(Ut=(c=Ut)||a.memoizedState!==null,ps(n,s,a),Ut=c):ps(n,s,a);break;default:ps(n,s,a)}}function Zm(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Qw),s.forEach(function(c){var d=iE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ln(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,w=s,A=w;e:for(;A!==null;){switch(A.tag){case 5:Pt=A.stateNode,On=!1;break e;case 3:Pt=A.stateNode.containerInfo,On=!0;break e;case 4:Pt=A.stateNode.containerInfo,On=!0;break e}A=A.return}if(Pt===null)throw Error(t(160));Xm(p,w,d),Pt=null,On=!1;var N=d.alternate;N!==null&&(N.return=null),d.return=null}catch(z){at(d,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)eg(s,n),s=s.sibling}function eg(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(s,n),ar(n),c&4){try{Pa(3,n,n.return),xu(3,n)}catch(ue){at(n,n.return,ue)}try{Pa(5,n,n.return)}catch(ue){at(n,n.return,ue)}}break;case 1:Ln(s,n),ar(n),c&512&&a!==null&&ho(a,a.return);break;case 5:if(Ln(s,n),ar(n),c&512&&a!==null&&ho(a,a.return),n.flags&32){var d=n.stateNode;try{zs(d,"")}catch(ue){at(n,n.return,ue)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,w=a!==null?a.memoizedProps:p,A=n.type,N=n.updateQueue;if(n.updateQueue=null,N!==null)try{A==="input"&&p.type==="radio"&&p.name!=null&&ki(d,p),bi(A,w);var z=bi(A,p);for(w=0;w<N.length;w+=2){var Q=N[w],Y=N[w+1];Q==="style"?Ni(d,Y):Q==="dangerouslySetInnerHTML"?Rl(d,Y):Q==="children"?zs(d,Y):ye(d,Q,Y,z)}switch(A){case"input":Us(d,p);break;case"textarea":Cl(d,p);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ie=p.value;ie!=null?Rn(d,!!p.multiple,ie,!1):K!==!!p.multiple&&(p.defaultValue!=null?Rn(d,!!p.multiple,p.defaultValue,!0):Rn(d,!!p.multiple,p.multiple?[]:"",!1))}d[va]=p}catch(ue){at(n,n.return,ue)}}break;case 6:if(Ln(s,n),ar(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ue){at(n,n.return,ue)}}break;case 3:if(Ln(s,n),ar(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ss(s.containerInfo)}catch(ue){at(n,n.return,ue)}break;case 4:Ln(s,n),ar(n);break;case 13:Ln(s,n),ar(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(rd=Ke())),c&4&&Zm(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Ut=(z=Ut)||Q,Ln(s,n),Ut=z):Ln(s,n),ar(n),c&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!Q&&(n.mode&1)!==0)for(oe=n,Q=n.child;Q!==null;){for(Y=oe=Q;oe!==null;){switch(K=oe,ie=K.child,K.tag){case 0:case 11:case 14:case 15:Pa(4,K,K.return);break;case 1:ho(K,K.return);var le=K.stateNode;if(typeof le.componentWillUnmount=="function"){c=K,a=K.return;try{s=c,le.props=s.memoizedProps,le.state=s.memoizedState,le.componentWillUnmount()}catch(ue){at(c,a,ue)}}break;case 5:ho(K,K.return);break;case 22:if(K.memoizedState!==null){rg(Y);continue}}ie!==null?(ie.return=K,oe=ie):rg(Y)}Q=Q.sibling}e:for(Q=null,Y=n;;){if(Y.tag===5){if(Q===null){Q=Y;try{d=Y.stateNode,z?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(A=Y.stateNode,N=Y.memoizedProps.style,w=N!=null&&N.hasOwnProperty("display")?N.display:null,A.style.display=Qr("display",w))}catch(ue){at(n,n.return,ue)}}}else if(Y.tag===6){if(Q===null)try{Y.stateNode.nodeValue=z?"":Y.memoizedProps}catch(ue){at(n,n.return,ue)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;Q===Y&&(Q=null),Y=Y.return}Q===Y&&(Q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Ln(s,n),ar(n),c&4&&Zm(n);break;case 21:break;default:Ln(s,n),ar(n)}}function ar(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(Ym(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(zs(d,""),c.flags&=-33);var p=Jm(n);ed(n,p,d);break;case 3:case 4:var w=c.stateNode.containerInfo,A=Jm(n);Zh(n,A,w);break;default:throw Error(t(161))}}catch(N){at(n,n.return,N)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function Jw(n,s,a){oe=n,tg(n)}function tg(n,s,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,p=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||Iu;if(!w){var A=d.alternate,N=A!==null&&A.memoizedState!==null||Ut;A=Iu;var z=Ut;if(Iu=w,(Ut=N)&&!z)for(oe=d;oe!==null;)w=oe,N=w.child,w.tag===22&&w.memoizedState!==null?sg(d):N!==null?(N.return=w,oe=N):sg(d);for(;p!==null;)oe=p,tg(p),p=p.sibling;oe=d,Iu=A,Ut=z}ng(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,oe=p):ng(n)}}function ng(n){for(;oe!==null;){var s=oe;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ut||xu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ut)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Vn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=s.updateQueue;p!==null&&rm(s,p,c);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}rm(s,w,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var N=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&a.focus();break;case"img":N.src&&(a.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var Q=z.memoizedState;if(Q!==null){var Y=Q.dehydrated;Y!==null&&ss(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&Xh(s)}catch(K){at(s,s.return,K)}}if(s===n){oe=null;break}if(a=s.sibling,a!==null){a.return=s.return,oe=a;break}oe=s.return}}function rg(n){for(;oe!==null;){var s=oe;if(s===n){oe=null;break}var a=s.sibling;if(a!==null){a.return=s.return,oe=a;break}oe=s.return}}function sg(n){for(;oe!==null;){var s=oe;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{xu(4,s)}catch(N){at(s,a,N)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(N){at(s,d,N)}}var p=s.return;try{Xh(s)}catch(N){at(s,p,N)}break;case 5:var w=s.return;try{Xh(s)}catch(N){at(s,w,N)}}}catch(N){at(s,s.return,N)}if(s===n){oe=null;break}var A=s.sibling;if(A!==null){A.return=s.return,oe=A;break}oe=s.return}}var Xw=Math.ceil,Su=ce.ReactCurrentDispatcher,td=ce.ReactCurrentOwner,In=ce.ReactCurrentBatchConfig,Me=0,St=null,gt=null,Nt=0,pn=0,fo=us(0),Et=0,Na=null,li=0,Au=0,nd=0,ba=null,Xt=null,rd=0,po=1/0,Dr=null,Cu=!1,sd=null,ms=null,Ru=!1,gs=null,ku=0,Da=0,id=null,Pu=-1,Nu=0;function Gt(){return(Me&6)!==0?Ke():Pu!==-1?Pu:Pu=Ke()}function ys(n){return(n.mode&1)===0?1:(Me&2)!==0&&Nt!==0?Nt&-Nt:Ow.transition!==null?(Nu===0&&(Nu=ea()),Nu):(n=De,n!==0||(n=window.event,n=n===void 0?16:Bi(n.type)),n)}function Mn(n,s,a,c){if(50<Da)throw Da=0,id=null,Error(t(185));Ys(n,a,c),((Me&2)===0||n!==St)&&(n===St&&((Me&2)===0&&(Au|=a),Et===4&&_s(n,Nt)),Zt(n,c),a===1&&Me===0&&(s.mode&1)===0&&(po=Ke()+500,iu&&hs()))}function Zt(n,s){var a=n.callbackNode;Qs(n,s);var c=wr(n,n===St?Nt:0);if(c===0)a!==null&&Oi(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&Oi(a),s===1)n.tag===0?Vw(og.bind(null,n)):Hp(og.bind(null,n)),Pw(function(){(Me&6)===0&&hs()}),a=null;else{switch(Kn(c)){case 1:a=Li;break;case 4:a=Jo;break;case 16:a=Hs;break;case 536870912:a=Mi;break;default:a=Hs}a=pg(a,ig.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function ig(n,s){if(Pu=-1,Nu=0,(Me&6)!==0)throw Error(t(327));var a=n.callbackNode;if(mo()&&n.callbackNode!==a)return null;var c=wr(n,n===St?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=bu(n,c);else{s=c;var d=Me;Me|=2;var p=lg();(St!==n||Nt!==s)&&(Dr=null,po=Ke()+500,ci(n,s));do try{tE();break}catch(A){ag(n,A)}while(!0);Ih(),Su.current=p,Me=d,gt!==null?s=0:(St=null,Nt=0,s=Et)}if(s!==0){if(s===2&&(d=Zo(n),d!==0&&(c=d,s=od(n,d))),s===1)throw a=Na,ci(n,0),_s(n,c),Zt(n,Ke()),a;if(s===6)_s(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Zw(d)&&(s=bu(n,c),s===2&&(p=Zo(n),p!==0&&(c=p,s=od(n,p))),s===1))throw a=Na,ci(n,0),_s(n,c),Zt(n,Ke()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:hi(n,Xt,Dr);break;case 3:if(_s(n,c),(c&130023424)===c&&(s=rd+500-Ke(),10<s)){if(wr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Gt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=dh(hi.bind(null,n,Xt,Dr),s);break}hi(n,Xt,Dr);break;case 4:if(_s(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var w=31-an(c);p=1<<w,w=s[w],w>d&&(d=w),c&=~p}if(c=d,c=Ke()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Xw(c/1960))-c,10<c){n.timeoutHandle=dh(hi.bind(null,n,Xt,Dr),c);break}hi(n,Xt,Dr);break;case 5:hi(n,Xt,Dr);break;default:throw Error(t(329))}}}return Zt(n,Ke()),n.callbackNode===a?ig.bind(null,n):null}function od(n,s){var a=ba;return n.current.memoizedState.isDehydrated&&(ci(n,s).flags|=256),n=bu(n,s),n!==2&&(s=Xt,Xt=a,s!==null&&ad(s)),n}function ad(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function Zw(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!bn(p(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function _s(n,s){for(s&=~nd,s&=~Au,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-an(s),c=1<<a;n[a]=-1,s&=~c}}function og(n){if((Me&6)!==0)throw Error(t(327));mo();var s=wr(n,0);if((s&1)===0)return Zt(n,Ke()),null;var a=bu(n,s);if(n.tag!==0&&a===2){var c=Zo(n);c!==0&&(s=c,a=od(n,c))}if(a===1)throw a=Na,ci(n,0),_s(n,s),Zt(n,Ke()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,hi(n,Xt,Dr),Zt(n,Ke()),null}function ld(n,s){var a=Me;Me|=1;try{return n(s)}finally{Me=a,Me===0&&(po=Ke()+500,iu&&hs())}}function ui(n){gs!==null&&gs.tag===0&&(Me&6)===0&&mo();var s=Me;Me|=1;var a=In.transition,c=De;try{if(In.transition=null,De=1,n)return n()}finally{De=c,In.transition=a,Me=s,(Me&6)===0&&hs()}}function ud(){pn=fo.current,Ye(fo)}function ci(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,kw(a)),gt!==null)for(a=gt.return;a!==null;){var c=a;switch(_h(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ru();break;case 3:uo(),Ye(Qt),Ye(Mt),Nh();break;case 5:kh(c);break;case 4:uo();break;case 13:Ye(rt);break;case 19:Ye(rt);break;case 10:xh(c.type._context);break;case 22:case 23:ud()}a=a.return}if(St=n,gt=n=vs(n.current,null),Nt=pn=s,Et=0,Na=null,nd=Au=li=0,Xt=ba=null,ii!==null){for(s=0;s<ii.length;s++)if(a=ii[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var w=p.next;p.next=d,c.next=w}a.pending=c}ii=null}return n}function ag(n,s){do{var a=gt;try{if(Ih(),mu.current=vu,gu){for(var c=st.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}gu=!1}if(ai=0,xt=wt=st=null,Sa=!1,Aa=0,td.current=null,a===null||a.return===null){Et=1,Na=s,gt=null;break}e:{var p=n,w=a.return,A=a,N=s;if(s=Nt,A.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var z=N,Q=A,Y=Q.tag;if((Q.mode&1)===0&&(Y===0||Y===11||Y===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ie=bm(w);if(ie!==null){ie.flags&=-257,Dm(ie,w,A,p,s),ie.mode&1&&Nm(p,z,s),s=ie,N=z;var le=s.updateQueue;if(le===null){var ue=new Set;ue.add(N),s.updateQueue=ue}else le.add(N);break e}else{if((s&1)===0){Nm(p,z,s),cd();break e}N=Error(t(426))}}else if(et&&A.mode&1){var ct=bm(w);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),Dm(ct,w,A,p,s),Eh(co(N,A));break e}}p=N=co(N,A),Et!==4&&(Et=2),ba===null?ba=[p]:ba.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,s&=-s,p.lanes|=s;var M=km(p,N,s);nm(p,M);break e;case 1:A=N;var V=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ms===null||!ms.has(F)))){p.flags|=65536,s&=-s,p.lanes|=s;var J=Pm(p,A,s);nm(p,J);break e}}p=p.return}while(p!==null)}cg(a)}catch(he){s=he,gt===a&&a!==null&&(gt=a=a.return);continue}break}while(!0)}function lg(){var n=Su.current;return Su.current=vu,n===null?vu:n}function cd(){(Et===0||Et===3||Et===2)&&(Et=4),St===null||(li&268435455)===0&&(Au&268435455)===0||_s(St,Nt)}function bu(n,s){var a=Me;Me|=2;var c=lg();(St!==n||Nt!==s)&&(Dr=null,ci(n,s));do try{eE();break}catch(d){ag(n,d)}while(!0);if(Ih(),Me=a,Su.current=c,gt!==null)throw Error(t(261));return St=null,Nt=0,Et}function eE(){for(;gt!==null;)ug(gt)}function tE(){for(;gt!==null&&!qs();)ug(gt)}function ug(n){var s=fg(n.alternate,n,pn);n.memoizedProps=n.pendingProps,s===null?cg(n):gt=s,td.current=null}function cg(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=Gw(a,s,pn),a!==null){gt=a;return}}else{if(a=Kw(a,s),a!==null){a.flags&=32767,gt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Et=6,gt=null;return}}if(s=s.sibling,s!==null){gt=s;return}gt=s=n}while(s!==null);Et===0&&(Et=5)}function hi(n,s,a){var c=De,d=In.transition;try{In.transition=null,De=1,nE(n,s,a,c)}finally{In.transition=d,De=c}return null}function nE(n,s,a,c){do mo();while(gs!==null);if((Me&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Yc(n,p),n===St&&(gt=St=null,Nt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ru||(Ru=!0,pg(Hs,function(){return mo(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=In.transition,In.transition=null;var w=De;De=1;var A=Me;Me|=4,td.current=null,Yw(n,a),eg(a,n),Tw(ch),Ir=!!uh,ch=uh=null,n.current=a,Jw(a),vr(),Me=A,De=w,In.transition=p}else n.current=a;if(Ru&&(Ru=!1,gs=n,ku=d),p=n.pendingLanes,p===0&&(ms=null),Fl(a.stateNode),Zt(n,Ke()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Cu)throw Cu=!1,n=sd,sd=null,n;return(ku&1)!==0&&n.tag!==0&&mo(),p=n.pendingLanes,(p&1)!==0?n===id?Da++:(Da=0,id=n):Da=0,hs(),null}function mo(){if(gs!==null){var n=Kn(ku),s=In.transition,a=De;try{if(In.transition=null,De=16>n?16:n,gs===null)var c=!1;else{if(n=gs,gs=null,ku=0,(Me&6)!==0)throw Error(t(331));var d=Me;for(Me|=4,oe=n.current;oe!==null;){var p=oe,w=p.child;if((oe.flags&16)!==0){var A=p.deletions;if(A!==null){for(var N=0;N<A.length;N++){var z=A[N];for(oe=z;oe!==null;){var Q=oe;switch(Q.tag){case 0:case 11:case 15:Pa(8,Q,p)}var Y=Q.child;if(Y!==null)Y.return=Q,oe=Y;else for(;oe!==null;){Q=oe;var K=Q.sibling,ie=Q.return;if(Qm(Q),Q===z){oe=null;break}if(K!==null){K.return=ie,oe=K;break}oe=ie}}}var le=p.alternate;if(le!==null){var ue=le.child;if(ue!==null){le.child=null;do{var ct=ue.sibling;ue.sibling=null,ue=ct}while(ue!==null)}}oe=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,oe=w;else e:for(;oe!==null;){if(p=oe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Pa(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,oe=M;break e}oe=p.return}}var V=n.current;for(oe=V;oe!==null;){w=oe;var F=w.child;if((w.subtreeFlags&2064)!==0&&F!==null)F.return=w,oe=F;else e:for(w=V;oe!==null;){if(A=oe,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:xu(9,A)}}catch(he){at(A,A.return,he)}if(A===w){oe=null;break e}var J=A.sibling;if(J!==null){J.return=A.return,oe=J;break e}oe=A.return}}if(Me=d,hs(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Ws,n)}catch{}c=!0}return c}finally{De=a,In.transition=s}}return!1}function hg(n,s,a){s=co(a,s),s=km(n,s,1),n=fs(n,s,1),s=Gt(),n!==null&&(Ys(n,1,s),Zt(n,s))}function at(n,s,a){if(n.tag===3)hg(n,n,a);else for(;s!==null;){if(s.tag===3){hg(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ms===null||!ms.has(c))){n=co(a,n),n=Pm(s,n,1),s=fs(s,n,1),n=Gt(),s!==null&&(Ys(s,1,n),Zt(s,n));break}}s=s.return}}function rE(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=Gt(),n.pingedLanes|=n.suspendedLanes&a,St===n&&(Nt&a)===a&&(Et===4||Et===3&&(Nt&130023424)===Nt&&500>Ke()-rd?ci(n,0):nd|=a),Zt(n,s)}function dg(n,s){s===0&&((n.mode&1)===0?s=1:(s=ts,ts<<=1,(ts&130023424)===0&&(ts=4194304)));var a=Gt();n=Pr(n,s),n!==null&&(Ys(n,s,a),Zt(n,a))}function sE(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),dg(n,a)}function iE(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),dg(n,a)}var fg;fg=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||Qt.current)Jt=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return Jt=!1,Ww(n,s,a);Jt=(n.flags&131072)!==0}else Jt=!1,et&&(s.flags&1048576)!==0&&Wp(s,au,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Tu(n,s),n=s.pendingProps;var d=no(s,Mt.current);lo(s,a),d=Vh(null,s,c,n,d,a);var p=Oh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yt(c)?(p=!0,su(s)):p=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ch(s),d.updater=wu,s.stateNode=d,d._reactInternals=s,zh(s,c,n,a),s=Hh(null,s,c,!0,p,a)):(s.tag=0,et&&p&&yh(s),Wt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Tu(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=aE(c),n=Vn(c,n),d){case 0:s=qh(null,s,c,n,a);break e;case 1:s=Fm(null,s,c,n,a);break e;case 11:s=Vm(null,s,c,n,a);break e;case 14:s=Om(null,s,c,Vn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),qh(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),Fm(n,s,c,d,a);case 3:e:{if(Um(s),n===null)throw Error(t(387));c=s.pendingProps,p=s.memoizedState,d=p.element,tm(n,s),fu(s,c,null,a);var w=s.memoizedState;if(c=w.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){d=co(Error(t(423)),s),s=zm(n,s,c,a,d);break e}else if(c!==d){d=co(Error(t(424)),s),s=zm(n,s,c,a,d);break e}else for(fn=ls(s.stateNode.containerInfo.firstChild),dn=s,et=!0,Dn=null,a=Zp(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(io(),c===d){s=br(n,s,a);break e}Wt(n,s,c,a)}s=s.child}return s;case 5:return sm(s),n===null&&wh(s),c=s.type,d=s.pendingProps,p=n!==null?n.memoizedProps:null,w=d.children,hh(c,d)?w=null:p!==null&&hh(c,p)&&(s.flags|=32),jm(n,s),Wt(n,s,w,a),s.child;case 6:return n===null&&wh(s),null;case 13:return Bm(n,s,a);case 4:return Rh(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=oo(s,null,c,a):Wt(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),Vm(n,s,c,d,a);case 7:return Wt(n,s,s.pendingProps,a),s.child;case 8:return Wt(n,s,s.pendingProps.children,a),s.child;case 12:return Wt(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,p=s.memoizedProps,w=d.value,We(cu,c._currentValue),c._currentValue=w,p!==null)if(bn(p.value,w)){if(p.children===d.children&&!Qt.current){s=br(n,s,a);break e}}else for(p=s.child,p!==null&&(p.return=s);p!==null;){var A=p.dependencies;if(A!==null){w=p.child;for(var N=A.firstContext;N!==null;){if(N.context===c){if(p.tag===1){N=Nr(-1,a&-a),N.tag=2;var z=p.updateQueue;if(z!==null){z=z.shared;var Q=z.pending;Q===null?N.next=N:(N.next=Q.next,Q.next=N),z.pending=N}}p.lanes|=a,N=p.alternate,N!==null&&(N.lanes|=a),Sh(p.return,a,s),A.lanes|=a;break}N=N.next}}else if(p.tag===10)w=p.type===s.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(t(341));w.lanes|=a,A=w.alternate,A!==null&&(A.lanes|=a),Sh(w,a,s),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===s){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}Wt(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,lo(s,a),d=En(d),c=c(d),s.flags|=1,Wt(n,s,c,a),s.child;case 14:return c=s.type,d=Vn(c,s.pendingProps),d=Vn(c.type,d),Om(n,s,c,d,a);case 15:return Lm(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),Tu(n,s),s.tag=1,Yt(c)?(n=!0,su(s)):n=!1,lo(s,a),Cm(s,c,d),zh(s,c,d,a),Hh(null,s,c,!0,n,a);case 19:return qm(n,s,a);case 22:return Mm(n,s,a)}throw Error(t(156,s.tag))};function pg(n,s){return Yo(n,s)}function oE(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(n,s,a,c){return new oE(n,s,a,c)}function hd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function aE(n){if(typeof n=="function")return hd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===D)return 11;if(n===Ze)return 14}return 2}function vs(n,s){var a=n.alternate;return a===null?(a=xn(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Du(n,s,a,c,d,p){var w=2;if(c=n,typeof n=="function")hd(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case k:return di(a.children,d,p,s);case S:w=8,d|=8;break;case C:return n=xn(12,a,s,d|2),n.elementType=C,n.lanes=p,n;case x:return n=xn(13,a,s,d),n.elementType=x,n.lanes=p,n;case je:return n=xn(19,a,s,d),n.elementType=je,n.lanes=p,n;case Oe:return Vu(a,d,p,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:w=10;break e;case P:w=9;break e;case D:w=11;break e;case Ze:w=14;break e;case it:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=xn(w,a,s,d),s.elementType=n,s.type=c,s.lanes=p,s}function di(n,s,a,c){return n=xn(7,n,c,s),n.lanes=a,n}function Vu(n,s,a,c){return n=xn(22,n,c,s),n.elementType=Oe,n.lanes=a,n.stateNode={isHidden:!1},n}function dd(n,s,a){return n=xn(6,n,null,s),n.lanes=a,n}function fd(n,s,a){return s=xn(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function lE(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ta(0),this.expirationTimes=ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ta(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function pd(n,s,a,c,d,p,w,A,N){return n=new lE(n,s,a,A,N),s===1?(s=1,p===!0&&(s|=8)):s=0,p=xn(3,null,null,s),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ch(p),n}function uE(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pe,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function mg(n){if(!n)return cs;n=n._reactInternals;e:{if(Pn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Yt(a))return $p(n,a,s)}return s}function gg(n,s,a,c,d,p,w,A,N){return n=pd(a,c,!0,n,d,p,w,A,N),n.context=mg(null),a=n.current,c=Gt(),d=ys(a),p=Nr(c,d),p.callback=s??null,fs(a,p,d),n.current.lanes=d,Ys(n,d,c),Zt(n,c),n}function Ou(n,s,a,c){var d=s.current,p=Gt(),w=ys(d);return a=mg(a),s.context===null?s.context=a:s.pendingContext=a,s=Nr(p,w),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=fs(d,s,w),n!==null&&(Mn(n,d,w,p),du(n,d,w)),w}function Lu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function yg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function md(n,s){yg(n,s),(n=n.alternate)&&yg(n,s)}function cE(){return null}var _g=typeof reportError=="function"?reportError:function(n){console.error(n)};function gd(n){this._internalRoot=n}Mu.prototype.render=gd.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Ou(n,s,null,null)},Mu.prototype.unmount=gd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ui(function(){Ou(null,n,null,null)}),s[Ar]=null}};function Mu(n){this._internalRoot=n}Mu.prototype.unstable_scheduleHydration=function(n){if(n){var s=ia();n={blockedOn:null,target:n,priority:s};for(var a=0;a<ln.length&&s!==0&&s<ln[a].priority;a++);ln.splice(a,0,n),a===0&&Ui(n)}};function yd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ju(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vg(){}function hE(n,s,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var z=Lu(w);p.call(z)}}var w=gg(s,c,n,0,null,!1,!1,"",vg);return n._reactRootContainer=w,n[Ar]=w.current,ya(n.nodeType===8?n.parentNode:n),ui(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var z=Lu(N);A.call(z)}}var N=pd(n,0,!1,null,null,!1,!1,"",vg);return n._reactRootContainer=N,n[Ar]=N.current,ya(n.nodeType===8?n.parentNode:n),ui(function(){Ou(s,N,a,c)}),N}function Fu(n,s,a,c,d){var p=a._reactRootContainer;if(p){var w=p;if(typeof d=="function"){var A=d;d=function(){var N=Lu(w);A.call(N)}}Ou(s,w,n,d)}else w=hE(a,s,n,d,c);return Lu(w)}ra=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=Ue(s.pendingLanes);a!==0&&(na(s,a|1),Zt(s,Ke()),(Me&6)===0&&(po=Ke()+500,hs()))}break;case 13:ui(function(){var c=Pr(n,1);if(c!==null){var d=Gt();Mn(c,n,1,d)}}),md(n,1)}},ji=function(n){if(n.tag===13){var s=Pr(n,134217728);if(s!==null){var a=Gt();Mn(s,n,134217728,a)}md(n,134217728)}},sa=function(n){if(n.tag===13){var s=ys(n),a=Pr(n,s);if(a!==null){var c=Gt();Mn(a,n,s,c)}md(n,s)}},ia=function(){return De},oa=function(n,s){var a=De;try{return De=n,s()}finally{De=a}},gr=function(n,s,a){switch(s){case"input":if(Us(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=nu(c);if(!d)throw Error(t(90));zo(c),Us(c,d)}}}break;case"textarea":Cl(n,a);break;case"select":s=a.value,s!=null&&Rn(n,!!a.multiple,s,!1)}},Pl=ld,Nl=ui;var dE={usingClientEntryPoint:!1,Events:[wa,eo,nu,Jr,Xr,ld]},Va={findFiberByHostInstance:ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fE={bundleType:Va.bundleType,version:Va.version,rendererPackageName:Va.rendererPackageName,rendererConfig:Va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=jl(n),n===null?null:n.stateNode},findFiberByHostInstance:Va.findFiberByHostInstance||cE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{Ws=Uu.inject(fE),on=Uu}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dE,en.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yd(s))throw Error(t(200));return uE(n,s,null,a)},en.createRoot=function(n,s){if(!yd(n))throw Error(t(299));var a=!1,c="",d=_g;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=pd(n,1,!1,null,null,a,!1,c,d),n[Ar]=s.current,ya(n.nodeType===8?n.parentNode:n),new gd(s)},en.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=jl(s),n=n===null?null:n.stateNode,n},en.flushSync=function(n){return ui(n)},en.hydrate=function(n,s,a){if(!ju(s))throw Error(t(200));return Fu(null,n,s,!0,a)},en.hydrateRoot=function(n,s,a){if(!yd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",w=_g;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=gg(s,null,n,1,a??null,d,!1,p,w),n[Ar]=s.current,ya(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Mu(s)},en.render=function(n,s,a){if(!ju(s))throw Error(t(200));return Fu(null,n,s,!1,a)},en.unmountComponentAtNode=function(n){if(!ju(n))throw Error(t(40));return n._reactRootContainer?(ui(function(){Fu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ar]=null})}),!0):!1},en.unstable_batchedUpdates=ld,en.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!ju(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Fu(n,s,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var Cg;function EE(){if(Cg)return wd.exports;Cg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),wd.exports=wE(),wd.exports}var Rg;function TE(){if(Rg)return zu;Rg=1;var r=EE();return zu.createRoot=r.createRoot,zu.hydrateRoot=r.hydrateRoot,zu}var IE=TE(),ae=ff();/**
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
 */const xE=()=>{};var kg={};/**
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
 */const u_=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},SE=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},c_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,v=g?r[o+2]:0,E=l>>2,I=(l&3)<<4|f>>4;let b=(f&15)<<2|v>>6,O=v&63;g||(O=64,h||(b=64)),i.push(t[E],t[I],t[b],t[O])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(u_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):SE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const I=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||v==null||I==null)throw new AE;const b=l<<2|f>>4;if(i.push(b),v!==64){const O=f<<4&240|v>>2;if(i.push(O),I!==64){const q=v<<6&192|I;i.push(q)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class AE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CE=function(r){const e=u_(r);return c_.encodeByteArray(e,!0)},ac=function(r){return CE(r).replace(/\./g,"")},h_=function(r){try{return c_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function RE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kE=()=>RE().__FIREBASE_DEFAULTS__,PE=()=>{if(typeof process>"u"||typeof kg>"u")return;const r=kg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},NE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&h_(r[1]);return e&&JSON.parse(e)},Ac=()=>{try{return xE()||kE()||PE()||NE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},d_=r=>{var e,t;return(t=(e=Ac())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},bE=r=>{const e=d_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},f_=()=>{var r;return(r=Ac())==null?void 0:r.config},p_=r=>{var e;return(e=Ac())==null?void 0:e[`_${r}`]};/**
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
 */class DE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function VE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[ac(JSON.stringify(t)),ac(JSON.stringify(h)),""].join(".")}/**
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
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function LE(){var e;const r=(e=Ac())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ME(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function FE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UE(){const r=qt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function zE(){return!LE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BE(){try{return typeof indexedDB=="object"}catch{return!1}}function $E(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const qE="FirebaseError";class Vt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=qE,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ol.prototype.create)}}class ol{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?HE(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Vt(o,f,i)}}function HE(r,e){return r.replace(WE,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const WE=/\{\$([^}]+)}/g;function GE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function yi(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],h=e[o];if(Pg(l)&&Pg(h)){if(!yi(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Pg(r){return r!==null&&typeof r=="object"}/**
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
 */function al(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ja(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Fa(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function KE(r,e){const t=new QE(r,e);return t.subscribe.bind(t)}class QE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");YE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Id),o.error===void 0&&(o.error=Id),o.complete===void 0&&(o.complete=Id);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YE(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Id(){}/**
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
 */function Xe(r){return r&&r._delegate?r._delegate:r}/**
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
 */function ll(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function m_(r){return(await fetch(r,{credentials:"include"})).ok}class _i{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fi="[DEFAULT]";/**
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
 */class JE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new DE;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZE(e))try{this.getOrInitializeService({instanceIdentifier:fi})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=fi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fi){return this.instances.has(e)}getOptions(e=fi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:XE(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=fi){return this.component?this.component.multipleInstances?e:fi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XE(r){return r===fi?void 0:r}function ZE(r){return r.instantiationMode==="EAGER"}/**
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
 */class eT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new JE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(be||(be={}));const tT={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},nT=be.INFO,rT={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},sT=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=rT[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pf{constructor(e){this.name=e,this._logLevel=nT,this._logHandler=sT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const iT=(r,e)=>e.some(t=>r instanceof t);let Ng,bg;function oT(){return Ng||(Ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aT(){return bg||(bg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const g_=new WeakMap,jd=new WeakMap,y_=new WeakMap,xd=new WeakMap,mf=new WeakMap;function lT(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Ss(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&g_.set(t,r)}).catch(()=>{}),mf.set(e,r),e}function uT(r){if(jd.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});jd.set(r,e)}let Fd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return jd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||y_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ss(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function cT(r){Fd=r(Fd)}function hT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(Sd(this),e,...t);return y_.set(i,e.sort?e.sort():[e]),Ss(i)}:aT().includes(r)?function(...e){return r.apply(Sd(this),e),Ss(g_.get(this))}:function(...e){return Ss(r.apply(Sd(this),e))}}function dT(r){return typeof r=="function"?hT(r):(r instanceof IDBTransaction&&uT(r),iT(r,oT())?new Proxy(r,Fd):r)}function Ss(r){if(r instanceof IDBRequest)return lT(r);if(xd.has(r))return xd.get(r);const e=dT(r);return e!==r&&(xd.set(r,e),mf.set(e,r)),e}const Sd=r=>mf.get(r);function fT(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=Ss(h);return i&&h.addEventListener("upgradeneeded",g=>{i(Ss(h.result),g.oldVersion,g.newVersion,Ss(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),f}const pT=["get","getKey","getAll","getAllKeys","count"],mT=["put","add","delete","clear"],Ad=new Map;function Dg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ad.get(e))return Ad.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=mT.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||pT.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return i&&(v=v.index(f.shift())),(await Promise.all([v[t](...f),o&&g.done]))[0]};return Ad.set(e,l),l}cT(r=>({...r,get:(e,t,i)=>Dg(e,t)||r.get(e,t,i),has:(e,t)=>!!Dg(e,t)||r.has(e,t)}));/**
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
 */class gT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yT(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function yT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ud="@firebase/app",Vg="0.14.12";/**
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
 */const Fr=new pf("@firebase/app"),_T="@firebase/app-compat",vT="@firebase/analytics-compat",wT="@firebase/analytics",ET="@firebase/app-check-compat",TT="@firebase/app-check",IT="@firebase/auth",xT="@firebase/auth-compat",ST="@firebase/database",AT="@firebase/data-connect",CT="@firebase/database-compat",RT="@firebase/functions",kT="@firebase/functions-compat",PT="@firebase/installations",NT="@firebase/installations-compat",bT="@firebase/messaging",DT="@firebase/messaging-compat",VT="@firebase/performance",OT="@firebase/performance-compat",LT="@firebase/remote-config",MT="@firebase/remote-config-compat",jT="@firebase/storage",FT="@firebase/storage-compat",UT="@firebase/firestore",zT="@firebase/ai",BT="@firebase/firestore-compat",$T="firebase",qT="12.13.0";/**
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
 */const zd="[DEFAULT]",HT={[Ud]:"fire-core",[_T]:"fire-core-compat",[wT]:"fire-analytics",[vT]:"fire-analytics-compat",[TT]:"fire-app-check",[ET]:"fire-app-check-compat",[IT]:"fire-auth",[xT]:"fire-auth-compat",[ST]:"fire-rtdb",[AT]:"fire-data-connect",[CT]:"fire-rtdb-compat",[RT]:"fire-fn",[kT]:"fire-fn-compat",[PT]:"fire-iid",[NT]:"fire-iid-compat",[bT]:"fire-fcm",[DT]:"fire-fcm-compat",[VT]:"fire-perf",[OT]:"fire-perf-compat",[LT]:"fire-rc",[MT]:"fire-rc-compat",[jT]:"fire-gcs",[FT]:"fire-gcs-compat",[UT]:"fire-fst",[BT]:"fire-fst-compat",[zT]:"fire-vertex","fire-js":"fire-js",[$T]:"fire-js-all"};/**
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
 */const Ya=new Map,WT=new Map,Bd=new Map;function Og(r,e){try{r.container.addComponent(e)}catch(t){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Co(r){const e=r.name;if(Bd.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;Bd.set(e,r);for(const t of Ya.values())Og(t,r);for(const t of WT.values())Og(t,r);return!0}function gf(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function mn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const GT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},As=new ol("app","Firebase",GT);/**
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
 */class KT{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw As.create("app-deleted",{appName:this._name})}}/**
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
 */const Vo=qT;function yf(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i={name:zd,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw As.create("bad-app-name",{appName:String(o)});if(t||(t=f_()),!t)throw As.create("no-options");const l=Ya.get(o);if(l){if(yi(t,l.options)&&yi(i,l.config))return l;throw As.create("duplicate-app",{appName:o})}const h=new eT(o);for(const g of Bd.values())h.addComponent(g);const f=new KT(t,i,h);return Ya.set(o,f),f}function __(r=zd){const e=Ya.get(r);if(!e&&r===zd&&f_())return yf();if(!e)throw As.create("no-app",{appName:r});return e}function QT(){return Array.from(Ya.values())}function Cs(r,e,t){let i=HT[r]??r;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(h.join(" "));return}Co(new _i(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const YT="firebase-heartbeat-database",JT=1,Ja="firebase-heartbeat-store";let Cd=null;function v_(){return Cd||(Cd=fT(YT,JT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ja)}catch(t){console.warn(t)}}}}).catch(r=>{throw As.create("idb-open",{originalErrorMessage:r.message})})),Cd}async function XT(r){try{const t=(await v_()).transaction(Ja),i=await t.objectStore(Ja).get(w_(r));return await t.done,i}catch(e){if(e instanceof Vt)Fr.warn(e.message);else{const t=As.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fr.warn(t.message)}}}async function Lg(r,e){try{const i=(await v_()).transaction(Ja,"readwrite");await i.objectStore(Ja).put(e,w_(r)),await i.done}catch(t){if(t instanceof Vt)Fr.warn(t.message);else{const i=As.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Fr.warn(i.message)}}}function w_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const ZT=1024,eI=30;class tI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rI(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Mg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>eI){const h=sI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Fr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mg(),{heartbeatsToSend:i,unsentEntries:o}=nI(this._heartbeatsCache.heartbeats),l=ac(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Fr.warn(t),""}}}function Mg(){return new Date().toISOString().substring(0,10)}function nI(r,e=ZT){const t=[];let i=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),jg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),jg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class rI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BE()?$E().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await XT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Lg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Lg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jg(r){return ac(JSON.stringify({version:2,heartbeats:r})).length}function sI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function iI(r){Co(new _i("platform-logger",e=>new gT(e),"PRIVATE")),Co(new _i("heartbeat",e=>new tI(e),"PRIVATE")),Cs(Ud,Vg,r),Cs(Ud,Vg,"esm2020"),Cs("fire-js","")}iI("");function E_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oI=E_,T_=new ol("auth","Firebase",E_());/**
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
 */const lc=new pf("@firebase/auth");function aI(r,...e){lc.logLevel<=be.WARN&&lc.warn(`Auth (${Vo}): ${r}`,...e)}function Ju(r,...e){lc.logLevel<=be.ERROR&&lc.error(`Auth (${Vo}): ${r}`,...e)}/**
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
 */function An(r,...e){throw vf(r,...e)}function Un(r,...e){return vf(r,...e)}function _f(r,e,t){const i={...oI(),[e]:t};return new ol("auth","Firebase",i).create(e,{appName:r.name})}function Mr(r){return _f(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lI(r,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&An(r,"argument-error"),_f(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vf(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return T_.create(r,...e)}function ve(r,e,...t){if(!r)throw vf(e,...t)}function Vr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ju(e),new Error(e)}function Ur(r,e){r||Vr(e)}/**
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
 */function $d(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function uI(){return Fg()==="http:"||Fg()==="https:"}function Fg(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function cI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uI()||jE()||"connection"in navigator)?navigator.onLine:!0}function hI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ul{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ur(t>e,"Short delay should be less than long delay!"),this.isMobile=OE()||FE()}get(){return cI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wf(r,e){Ur(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class I_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pI=new ul(3e4,6e4);function $r(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function $n(r,e,t,i,o={}){return x_(r,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=al({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const v={method:e,headers:g,...l};return ME()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&ll(r.emulatorConfig.host)&&(v.credentials="include"),I_.fetch()(await S_(r,r.config.apiHost,t,f),v)})}async function x_(r,e,t){r._canInitEmulator=!1;const i={...dI,...e};try{const o=new gI(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Bu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,v]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Bu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Bu(r,"user-disabled",h);const E=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw _f(r,E,v);An(r,E)}}catch(o){if(o instanceof Vt)throw o;An(r,"network-request-failed",{message:String(o)})}}async function cl(r,e,t,i,o={}){const l=await $n(r,e,t,i,o);return"mfaPendingCredential"in l&&An(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function S_(r,e,t,i){const o=`${e}${t}?${i}`,l=r,h=l.config.emulator?wf(r.config,o):`${r.config.apiScheme}://${o}`;return fI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function mI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Un(this.auth,"network-request-failed")),pI.get())})}}function Bu(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Un(r,e,i);return o.customData._tokenResponse=t,o}function Ug(r){return r!==void 0&&r.enterprise!==void 0}class yI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _I(r,e){return $n(r,"GET","/v2/recaptchaConfig",$r(r,e))}/**
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
 */async function vI(r,e){return $n(r,"POST","/v1/accounts:delete",e)}async function uc(r,e){return $n(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function qa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wI(r,e=!1){const t=Xe(r),i=await t.getIdToken(e),o=Cc(i);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:qa(Rd(o.auth_time)),issuedAtTime:qa(Rd(o.iat)),expirationTime:qa(Rd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Rd(r){return Number(r)*1e3}function Cc(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Ju("JWT malformed, contained fewer than 3 sections"),null;try{const o=h_(t);return o?JSON.parse(o):(Ju("Failed to decode base64 JWT payload"),null)}catch(o){return Ju("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function zg(r){const e=Cc(r);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vi(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Vt&&EI(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function EI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class TI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qa(this.lastLoginAt),this.creationTime=qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cc(r){var I;const e=r.auth,t=await r.getIdToken(),i=await vi(r,uc(e,{idToken:t}));ve(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];r._notifyReloadListener(o);const l=(I=o.providerUserInfo)!=null&&I.length?A_(o.providerUserInfo):[],h=xI(r.providerData,l),f=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),v=f?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new qd(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(r,E)}async function II(r){const e=Xe(r);await cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xI(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function A_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function SI(r,e){const t=await x_(r,{},async()=>{const i=al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await S_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return r.emulatorConfig&&ll(r.emulatorConfig.host)&&(g.credentials="include"),I_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function AI(r,e){return $n(r,"POST","/v2/accounts:revokeToken",$r(r,e))}/**
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
 */class wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=zg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await SI(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new wo;return i&&(ve(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wo,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
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
 */function Es(r,e){ve(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Fn{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new TI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new qd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await vi(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wI(this,e)}reload(){return II(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await cc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(Mr(this.auth));const e=await this.getIdToken();return await vi(this,vI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,f=t.tenantId??void 0,g=t._redirectEventId??void 0,v=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:I,emailVerified:b,isAnonymous:O,providerData:q,stsTokenManager:$}=t;ve(I&&$,e,"internal-error");const U=wo.fromJSON(this.name,$);ve(typeof I=="string",e,"internal-error"),Es(i,e.name),Es(o,e.name),ve(typeof b=="boolean",e,"internal-error"),ve(typeof O=="boolean",e,"internal-error"),Es(l,e.name),Es(h,e.name),Es(f,e.name),Es(g,e.name),Es(v,e.name),Es(E,e.name);const X=new Fn({uid:I,auth:e,email:o,emailVerified:b,displayName:i,isAnonymous:O,photoURL:h,phoneNumber:l,tenantId:f,stsTokenManager:U,createdAt:v,lastLoginAt:E});return q&&Array.isArray(q)&&(X.providerData=q.map(te=>({...te}))),g&&(X._redirectEventId=g),X}static async _fromIdTokenResponse(e,t,i=!1){const o=new wo;o.updateFromServerResponse(t);const l=new Fn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await cc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?A_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new wo;f.updateFromIdToken(i);const g=new Fn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new qd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,v),g}}/**
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
 */const Bg=new Map;function Or(r){Ur(r instanceof Function,"Expected a class definition");let e=Bg.get(r);return e?(Ur(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Bg.set(r,e),e)}/**
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
 */class C_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}C_.type="NONE";const $g=C_;/**
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
 */function Xu(r,e,t){return`firebase:${r}:${e}:${t}`}class Eo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Xu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Xu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await uc(this.auth,{idToken:e}).catch(()=>{});return t?Fn._fromGetAccountInfoResponse(this.auth,t,e):null}return Fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Eo(Or($g),e,i);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||Or($g);const h=Xu(i,e.config.apiKey,e.name);let f=null;for(const v of t)try{const E=await v._get(h);if(E){let I;if(typeof E=="string"){const b=await uc(e,{idToken:E}).catch(()=>{});if(!b)break;I=await Fn._fromGetAccountInfoResponse(e,b,E)}else I=Fn._fromJSON(e,E);v!==l&&(f=I),l=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Eo(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(h)}catch{}})),new Eo(l,e,i))}}/**
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
 */function qg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(N_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(R_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(D_(e))return"Blackberry";if(V_(e))return"Webos";if(k_(e))return"Safari";if((e.includes("chrome/")||P_(e))&&!e.includes("edge/"))return"Chrome";if(b_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function R_(r=qt()){return/firefox\//i.test(r)}function k_(r=qt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function P_(r=qt()){return/crios\//i.test(r)}function N_(r=qt()){return/iemobile/i.test(r)}function b_(r=qt()){return/android/i.test(r)}function D_(r=qt()){return/blackberry/i.test(r)}function V_(r=qt()){return/webos/i.test(r)}function Ef(r=qt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function CI(r=qt()){var e;return Ef(r)&&!!((e=window.navigator)!=null&&e.standalone)}function RI(){return UE()&&document.documentMode===10}function O_(r=qt()){return Ef(r)||b_(r)||V_(r)||D_(r)||/windows phone/i.test(r)||N_(r)}/**
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
 */function L_(r,e=[]){let t;switch(r){case"Browser":t=qg(qt());break;case"Worker":t=`${qg(qt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vo}/${i}`}/**
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
 */class kI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function PI(r,e={}){return $n(r,"GET","/v2/passwordPolicy",$r(r,e))}/**
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
 */const NI=6;class bI{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??NI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class DI{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hg(this),this.idTokenSubscription=new Hg(this),this.beforeStateQueue=new kI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Or(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Eo.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await uc(this,{idToken:e}),i=await Fn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(mn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=i==null?void 0:i._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(i=g.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(h){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await cc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(Mr(this));const t=e?Xe(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PI(this),t=new bI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ol("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await AI(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Or(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await Eo.create(this,[Or(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=L_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&aI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function qr(r){return Xe(r)}class Hg{constructor(e){this.auth=e,this.observer=null,this.addObserver=KE(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VI(r){Rc=r}function M_(r){return Rc.loadJS(r)}function OI(){return Rc.recaptchaEnterpriseScript}function LI(){return Rc.gapiScript}function MI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class jI{constructor(){this.enterprise=new FI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class FI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const UI="recaptcha-enterprise",j_="NO_RECAPTCHA";class zI{constructor(e){this.type=UI,this.auth=qr(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{_I(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const v=new yI(g);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,h(v.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;Ug(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(v=>{h(v)}).catch(()=>{h(j_)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jI().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&Ug(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=OI();g.length!==0&&(g+=f),M_(g).then(()=>{o(f,l,h)}).catch(v=>{h(v)})}}).catch(f=>{h(f)})})}}async function Wg(r,e,t,i=!1,o=!1){const l=new zI(r);let h;if(o)h=j_;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,v=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function hc(r,e,t,i,o){var l;if((l=r._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Wg(r,e,t,t==="getOobCode");return i(r,h)}else return i(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Wg(r,e,t,t==="getOobCode");return i(r,f)}else return Promise.reject(h)})}/**
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
 */function BI(r,e){const t=gf(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(yi(l,e??{}))return o;An(o,"already-initialized")}return t.initialize({options:e})}function $I(r,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Or);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function qI(r,e,t){const i=qr(r);ve(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=F_(e),{host:h,port:f}=HI(e),g=f===null?"":`:${f}`,v={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ve(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ve(yi(v,i.config.emulator)&&yi(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=v,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,ll(h)?m_(`${l}//${h}${g}`):WI()}function F_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function HI(r){const e=F_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Gg(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Gg(h)}}}function Gg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function WI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Tf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function GI(r,e){return $n(r,"POST","/v1/accounts:update",e)}async function KI(r,e){return $n(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function QI(r,e){return cl(r,"POST","/v1/accounts:signInWithPassword",$r(r,e))}async function U_(r,e){return $n(r,"POST","/v1/accounts:sendOobCode",$r(r,e))}async function YI(r,e){return U_(r,e)}async function JI(r,e){return U_(r,e)}/**
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
 */async function XI(r,e){return cl(r,"POST","/v1/accounts:signInWithEmailLink",$r(r,e))}async function ZI(r,e){return cl(r,"POST","/v1/accounts:signInWithEmailLink",$r(r,e))}/**
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
 */class Xa extends Tf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Xa(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Xa(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hc(e,t,"signInWithPassword",QI);case"emailLink":return XI(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hc(e,i,"signUpPassword",KI);case"emailLink":return ZI(e,{idToken:t,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function To(r,e){return cl(r,"POST","/v1/accounts:signInWithIdp",$r(r,e))}/**
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
 */const ex="http://localhost";class wi extends Tf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):An("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const h=new wi(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return To(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,To(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,To(e,t)}buildRequest(){const e={requestUri:ex,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=al(t)}return e}}/**
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
 */function tx(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nx(r){const e=ja(Fa(r)).link,t=e?ja(Fa(e)).deep_link_id:null,i=ja(Fa(r)).deep_link_id;return(i?ja(Fa(i)).link:null)||i||t||e||r}class If{constructor(e){const t=ja(Fa(e)),i=t.apiKey??null,o=t.oobCode??null,l=tx(t.mode??null);ve(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=nx(e);try{return new If(t)}catch{return null}}}/**
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
 */class Oo{constructor(){this.providerId=Oo.PROVIDER_ID}static credential(e,t){return Xa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=If.parseLink(t);return ve(i,"argument-error"),Xa._fromEmailAndCode(e,i.code,i.tenantId)}}Oo.PROVIDER_ID="password";Oo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hl extends xf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ts extends hl{constructor(){super("facebook.com")}static credential(e){return wi._fromParams({providerId:Ts.PROVIDER_ID,signInMethod:Ts.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ts.credentialFromTaggedObject(e)}static credentialFromError(e){return Ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ts.credential(e.oauthAccessToken)}catch{return null}}}Ts.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ts.PROVIDER_ID="facebook.com";/**
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
 */class jn extends hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wi._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return jn.credential(t,i)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
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
 */class Is extends hl{constructor(){super("github.com")}static credential(e){return wi._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Is.credential(e.oauthAccessToken)}catch{return null}}}Is.GITHUB_SIGN_IN_METHOD="github.com";Is.PROVIDER_ID="github.com";/**
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
 */class xs extends hl{constructor(){super("twitter.com")}static credential(e,t){return wi._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return xs.credential(t,i)}catch{return null}}}xs.TWITTER_SIGN_IN_METHOD="twitter.com";xs.PROVIDER_ID="twitter.com";/**
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
 */async function rx(r,e){return cl(r,"POST","/v1/accounts:signUp",$r(r,e))}/**
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
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Fn._fromIdTokenResponse(e,i,o),h=Kg(i);return new Ei({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Kg(i);return new Ei({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Kg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class dc extends Vt{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,dc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new dc(e,t,i,o)}}function z_(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?dc._fromErrorAndOperation(r,l,e,i):l})}async function sx(r,e,t=!1){const i=await vi(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ei._forOperation(r,"link",i)}/**
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
 */async function ix(r,e,t=!1){const{auth:i}=r;if(mn(i.app))return Promise.reject(Mr(i));const o="reauthenticate";try{const l=await vi(r,z_(i,o,e,r),t);ve(l.idToken,i,"internal-error");const h=Cc(l.idToken);ve(h,i,"internal-error");const{sub:f}=h;return ve(r.uid===f,i,"user-mismatch"),Ei._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&An(i,"user-mismatch"),l}}/**
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
 */async function B_(r,e,t=!1){if(mn(r.app))return Promise.reject(Mr(r));const i="signIn",o=await z_(r,i,e),l=await Ei._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}async function $_(r,e){return B_(qr(r),e)}/**
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
 */async function q_(r){const e=qr(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ox(r,e,t){const i=qr(r);await hc(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",JI)}async function H_(r,e,t){if(mn(r.app))return Promise.reject(Mr(r));const i=qr(r),h=await hc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rx).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&q_(r),g}),f=await Ei._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function W_(r,e,t){return mn(r.app)?Promise.reject(Mr(r)):$_(Xe(r),Oo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&q_(r),i})}async function G_(r,e){const t=Xe(r),o={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()},{email:l}=await YI(t.auth,o);l!==r.email&&await r.reload()}/**
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
 */async function ax(r,e){return $n(r,"POST","/v1/accounts:update",e)}/**
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
 */async function K_(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Xe(r),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await vi(i,ax(i.auth,l));i.displayName=h.displayName||null,i.photoURL=h.photoUrl||null;const f=i.providerData.find(({providerId:g})=>g==="password");f&&(f.displayName=i.displayName,f.photoURL=i.photoURL),await i._updateTokensIfNecessary(h)}function lx(r,e){return ux(Xe(r),null,e)}async function ux(r,e,t){const{auth:i}=r,l={idToken:await r.getIdToken(),returnSecureToken:!0};t&&(l.password=t);const h=await vi(r,GI(i,l));await r._updateTokensIfNecessary(h,!0)}/**
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
 */function cx(r){var o,l;if(!r)return null;const{providerId:e}=r,t=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},i=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(r!=null&&r.idToken)){const h=(l=(o=Cc(r.idToken))==null?void 0:o.firebase)==null?void 0:l.sign_in_provider;if(h){const f=h!=="anonymous"&&h!=="custom"?h:null;return new Io(i,f)}}if(!e)return null;switch(e){case"facebook.com":return new hx(i,t);case"github.com":return new dx(i,t);case"google.com":return new fx(i,t);case"twitter.com":return new px(i,t,r.screenName||null);case"custom":case"anonymous":return new Io(i,null);default:return new Io(i,e,t)}}class Io{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class Q_ extends Io{constructor(e,t,i,o){super(e,t,i),this.username=o}}class hx extends Io{constructor(e,t){super(e,"facebook.com",t)}}class dx extends Q_{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class fx extends Io{constructor(e,t){super(e,"google.com",t)}}class px extends Q_{constructor(e,t,i){super(e,"twitter.com",t,i)}}function mx(r){const{user:e,_tokenResponse:t}=r;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:cx(t)}/**
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
 */function gx(r,e){return Xe(r).setPersistence(e)}function yx(r,e,t,i){return Xe(r).onIdTokenChanged(e,t,i)}function _x(r,e,t){return Xe(r).beforeAuthStateChanged(e,t)}function vx(r,e,t,i){return Xe(r).onAuthStateChanged(e,t,i)}function Ti(r){return Xe(r).signOut()}async function Y_(r){return Xe(r).delete()}const fc="__sak";/**
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
 */class J_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fc,"1"),this.storage.removeItem(fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const wx=1e3,Ex=10;class X_ extends J_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=O_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);RI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Ex):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},wx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}X_.type="LOCAL";const Z_=X_;/**
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
 */class ev extends J_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ev.type="SESSION";const Sf=ev;/**
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
 */function Tx(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new kc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async v=>v(t.origin,l)),g=await Tx(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kc.receivers=[];/**
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
 */function Af(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class Ix{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const v=Af("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(I){const b=I;if(b.data.eventId===v)switch(b.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(b.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ur(){return window}function xx(r){ur().location.href=r}/**
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
 */function tv(){return typeof ur().WorkerGlobalScope<"u"&&typeof ur().importScripts=="function"}async function Sx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ax(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function Cx(){return tv()?self:null}/**
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
 */const nv="firebaseLocalStorageDb",Rx=1,pc="firebaseLocalStorage",rv="fbase_key";class dl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pc(r,e){return r.transaction([pc],e?"readwrite":"readonly").objectStore(pc)}function kx(){const r=indexedDB.deleteDatabase(nv);return new dl(r).toPromise()}function Hd(){const r=indexedDB.open(nv,Rx);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(pc,{keyPath:rv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(pc)?e(i):(i.close(),await kx(),e(await Hd()))})})}async function Qg(r,e,t){const i=Pc(r,!0).put({[rv]:e,value:t});return new dl(i).toPromise()}async function Px(r,e){const t=Pc(r,!1).get(e),i=await new dl(t).toPromise();return i===void 0?null:i.value}function Yg(r,e){const t=Pc(r,!0).delete(e);return new dl(t).toPromise()}const Nx=800,bx=3;class sv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>bx)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(Cx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await Sx(),!this.activeServiceWorker)return;this.sender=new Ix(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ax()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hd();return await Qg(e,fc,"1"),await Yg(e,fc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Qg(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Px(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Pc(o,!1).getAll();return new dl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sv.type="LOCAL";const Dx=sv;new ul(3e4,6e4);/**
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
 */function iv(r,e){return e?Or(e):(ve(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Cf extends Tf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return To(e,this._buildIdpRequest())}_linkToIdToken(e,t){return To(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return To(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Vx(r){return B_(r.auth,new Cf(r),r.bypassAuthState)}function Ox(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),ix(t,new Cf(r),r.bypassAuthState)}async function Lx(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),sx(t,new Cf(r),r.bypassAuthState)}/**
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
 */class ov{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vx;case"linkViaPopup":case"linkViaRedirect":return Lx;case"reauthViaPopup":case"reauthViaRedirect":return Ox;default:An(this.auth,"internal-error")}}resolve(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Mx=new ul(2e3,1e4);async function av(r,e,t){if(mn(r.app))return Promise.reject(Un(r,"operation-not-supported-in-this-environment"));const i=qr(r);lI(r,e,xf);const o=iv(i,t);return new pi(i,"signInViaPopup",e,o).executeNotNull()}class pi extends ov{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,pi.currentPopupAction&&pi.currentPopupAction.cancel(),pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Ur(this.filter.length===1,"Popup operations only handle one event");const e=Af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mx.get())};e()}}pi.currentPopupAction=null;/**
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
 */const jx="pendingRedirect",Zu=new Map;class Fx extends ov{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Zu.get(this.auth._key());if(!e){try{const i=await Ux(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Zu.set(this.auth._key(),e)}return this.bypassAuthState||Zu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ux(r,e){const t=$x(e),i=Bx(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function zx(r,e){Zu.set(r._key(),e)}function Bx(r){return Or(r._redirectPersistence)}function $x(r){return Xu(jx,r.config.apiKey,r.name)}async function qx(r,e,t=!1){if(mn(r.app))return Promise.reject(Mr(r));const i=qr(r),o=iv(i,e),h=await new Fx(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const Hx=600*1e3;class Wx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gx(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!lv(e)){const o=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(Un(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jg(e))}saveEventToCache(e){this.cachedEventUids.add(Jg(e)),this.lastProcessedEventTime=Date.now()}}function Jg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function lv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gx(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lv(r);default:return!1}}/**
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
 */async function Kx(r,e={}){return $n(r,"GET","/v1/projects",e)}/**
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
 */const Qx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yx=/^https?/;async function Jx(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Kx(r);for(const t of e)try{if(Xx(t))return}catch{}An(r,"unauthorized-domain")}function Xx(r){const e=$d(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!Yx.test(t))return!1;if(Qx.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const Zx=new ul(3e4,6e4);function Xg(){const r=ur().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function e1(r){return new Promise((e,t)=>{var o,l,h;function i(){Xg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xg(),t(Un(r,"network-request-failed"))},timeout:Zx.get()})}if((l=(o=ur().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((h=ur().gapi)!=null&&h.load)i();else{const f=MI("iframefcb");return ur()[f]=()=>{gapi.load?i():t(Un(r,"network-request-failed"))},M_(`${LI()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw ec=null,e})}let ec=null;function t1(r){return ec=ec||e1(r),ec}/**
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
 */const n1=new ul(5e3,15e3),r1="__/auth/iframe",s1="emulator/auth/iframe",i1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},o1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function a1(r){const e=r.config;ve(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?wf(e,s1):`https://${r.config.authDomain}/${r1}`,i={apiKey:e.apiKey,appName:r.name,v:Vo},o=o1.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${al(i).slice(1)}`}async function l1(r){const e=await t1(r),t=ur().gapi;return ve(t,r,"internal-error"),e.open({where:document.body,url:a1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:i1,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=Un(r,"network-request-failed"),f=ur().setTimeout(()=>{l(h)},n1.get());function g(){ur().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const u1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},c1=500,h1=600,d1="_blank",f1="http://localhost";class Zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function p1(r,e,t,i=c1,o=h1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g={...u1,width:i.toString(),height:o.toString(),top:l,left:h},v=qt().toLowerCase();t&&(f=P_(v)?d1:t),R_(v)&&(e=e||f1,g.scrollbars="yes");const E=Object.entries(g).reduce((b,[O,q])=>`${b}${O}=${q},`,"");if(CI(v)&&f!=="_self")return m1(e||"",f),new Zg(null);const I=window.open(e||"",f,E);ve(I,r,"popup-blocked");try{I.focus()}catch{}return new Zg(I)}function m1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const g1="__/auth/handler",y1="emulator/auth/handler",_1=encodeURIComponent("fac");async function ey(r,e,t,i,o,l){ve(r.config.authDomain,r,"auth-domain-config-required"),ve(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:Vo,eventId:o};if(e instanceof xf){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",GE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,I]of Object.entries({}))h[E]=I}if(e instanceof hl){const E=e.getScopes().filter(I=>I!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await r._getAppCheckToken(),v=g?`#${_1}=${encodeURIComponent(g)}`:"";return`${v1(r)}?${al(f).slice(1)}${v}`}function v1({config:r}){return r.emulator?wf(r,y1):`https://${r.authDomain}/${g1}`}/**
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
 */const kd="webStorageSupport";class w1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sf,this._completeRedirectFn=qx,this._overrideRedirectResult=zx}async _openPopup(e,t,i,o){var h;Ur((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await ey(e,t,i,$d(),o);return p1(e,l,Af())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await ey(e,t,i,$d(),o);return xx(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Ur(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await l1(e),i=new Wx(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(kd,{type:kd},o=>{var h;const l=(h=o==null?void 0:o[0])==null?void 0:h[kd];l!==void 0&&t(!!l),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return O_()||k_()||Ef()}}const E1=w1;var ty="@firebase/auth",ny="1.13.1";/**
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
 */class T1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function I1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function x1(r){Co(new _i("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:L_(r)},v=new DI(i,o,l,g);return $I(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Co(new _i("auth-internal",e=>{const t=qr(e.getProvider("auth").getImmediate());return(i=>new T1(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cs(ty,ny,I1(r)),Cs(ty,ny,"esm2020")}/**
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
 */const S1=300,A1=p_("authIdTokenMaxAge")||S1;let ry=null;const C1=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>A1)return;const o=t==null?void 0:t.token;ry!==o&&(ry=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function uv(r=__()){const e=gf(r,"auth");if(e.isInitialized())return e.getImmediate();const t=BI(r,{popupRedirectResolver:E1,persistence:[Dx,Z_,Sf]}),i=p_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=C1(l.toString());_x(t,h,()=>h(t.currentUser)),yx(t,f=>h(f))}}const o=d_("auth");return o&&qI(t,`http://${o}`),t}function R1(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}VI({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=Un("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",R1().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});x1("Browser");var k1="firebase",P1="12.13.0";/**
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
 */Cs(k1,P1,"app");var sy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rs,cv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function C(){}C.prototype=S.prototype,k.F=S.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(R,P,D){for(var x=Array(arguments.length-2),je=2;je<arguments.length;je++)x[je-2]=arguments[je];return S.prototype[P].apply(R,x)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,C){C||(C=0);const R=Array(16);if(typeof S=="string")for(var P=0;P<16;++P)R[P]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(P=0;P<16;++P)R[P]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=k.g[0],C=k.g[1],P=k.g[2];let D=k.g[3],x;x=S+(D^C&(P^D))+R[0]+3614090360&4294967295,S=C+(x<<7&4294967295|x>>>25),x=D+(P^S&(C^P))+R[1]+3905402710&4294967295,D=S+(x<<12&4294967295|x>>>20),x=P+(C^D&(S^C))+R[2]+606105819&4294967295,P=D+(x<<17&4294967295|x>>>15),x=C+(S^P&(D^S))+R[3]+3250441966&4294967295,C=P+(x<<22&4294967295|x>>>10),x=S+(D^C&(P^D))+R[4]+4118548399&4294967295,S=C+(x<<7&4294967295|x>>>25),x=D+(P^S&(C^P))+R[5]+1200080426&4294967295,D=S+(x<<12&4294967295|x>>>20),x=P+(C^D&(S^C))+R[6]+2821735955&4294967295,P=D+(x<<17&4294967295|x>>>15),x=C+(S^P&(D^S))+R[7]+4249261313&4294967295,C=P+(x<<22&4294967295|x>>>10),x=S+(D^C&(P^D))+R[8]+1770035416&4294967295,S=C+(x<<7&4294967295|x>>>25),x=D+(P^S&(C^P))+R[9]+2336552879&4294967295,D=S+(x<<12&4294967295|x>>>20),x=P+(C^D&(S^C))+R[10]+4294925233&4294967295,P=D+(x<<17&4294967295|x>>>15),x=C+(S^P&(D^S))+R[11]+2304563134&4294967295,C=P+(x<<22&4294967295|x>>>10),x=S+(D^C&(P^D))+R[12]+1804603682&4294967295,S=C+(x<<7&4294967295|x>>>25),x=D+(P^S&(C^P))+R[13]+4254626195&4294967295,D=S+(x<<12&4294967295|x>>>20),x=P+(C^D&(S^C))+R[14]+2792965006&4294967295,P=D+(x<<17&4294967295|x>>>15),x=C+(S^P&(D^S))+R[15]+1236535329&4294967295,C=P+(x<<22&4294967295|x>>>10),x=S+(P^D&(C^P))+R[1]+4129170786&4294967295,S=C+(x<<5&4294967295|x>>>27),x=D+(C^P&(S^C))+R[6]+3225465664&4294967295,D=S+(x<<9&4294967295|x>>>23),x=P+(S^C&(D^S))+R[11]+643717713&4294967295,P=D+(x<<14&4294967295|x>>>18),x=C+(D^S&(P^D))+R[0]+3921069994&4294967295,C=P+(x<<20&4294967295|x>>>12),x=S+(P^D&(C^P))+R[5]+3593408605&4294967295,S=C+(x<<5&4294967295|x>>>27),x=D+(C^P&(S^C))+R[10]+38016083&4294967295,D=S+(x<<9&4294967295|x>>>23),x=P+(S^C&(D^S))+R[15]+3634488961&4294967295,P=D+(x<<14&4294967295|x>>>18),x=C+(D^S&(P^D))+R[4]+3889429448&4294967295,C=P+(x<<20&4294967295|x>>>12),x=S+(P^D&(C^P))+R[9]+568446438&4294967295,S=C+(x<<5&4294967295|x>>>27),x=D+(C^P&(S^C))+R[14]+3275163606&4294967295,D=S+(x<<9&4294967295|x>>>23),x=P+(S^C&(D^S))+R[3]+4107603335&4294967295,P=D+(x<<14&4294967295|x>>>18),x=C+(D^S&(P^D))+R[8]+1163531501&4294967295,C=P+(x<<20&4294967295|x>>>12),x=S+(P^D&(C^P))+R[13]+2850285829&4294967295,S=C+(x<<5&4294967295|x>>>27),x=D+(C^P&(S^C))+R[2]+4243563512&4294967295,D=S+(x<<9&4294967295|x>>>23),x=P+(S^C&(D^S))+R[7]+1735328473&4294967295,P=D+(x<<14&4294967295|x>>>18),x=C+(D^S&(P^D))+R[12]+2368359562&4294967295,C=P+(x<<20&4294967295|x>>>12),x=S+(C^P^D)+R[5]+4294588738&4294967295,S=C+(x<<4&4294967295|x>>>28),x=D+(S^C^P)+R[8]+2272392833&4294967295,D=S+(x<<11&4294967295|x>>>21),x=P+(D^S^C)+R[11]+1839030562&4294967295,P=D+(x<<16&4294967295|x>>>16),x=C+(P^D^S)+R[14]+4259657740&4294967295,C=P+(x<<23&4294967295|x>>>9),x=S+(C^P^D)+R[1]+2763975236&4294967295,S=C+(x<<4&4294967295|x>>>28),x=D+(S^C^P)+R[4]+1272893353&4294967295,D=S+(x<<11&4294967295|x>>>21),x=P+(D^S^C)+R[7]+4139469664&4294967295,P=D+(x<<16&4294967295|x>>>16),x=C+(P^D^S)+R[10]+3200236656&4294967295,C=P+(x<<23&4294967295|x>>>9),x=S+(C^P^D)+R[13]+681279174&4294967295,S=C+(x<<4&4294967295|x>>>28),x=D+(S^C^P)+R[0]+3936430074&4294967295,D=S+(x<<11&4294967295|x>>>21),x=P+(D^S^C)+R[3]+3572445317&4294967295,P=D+(x<<16&4294967295|x>>>16),x=C+(P^D^S)+R[6]+76029189&4294967295,C=P+(x<<23&4294967295|x>>>9),x=S+(C^P^D)+R[9]+3654602809&4294967295,S=C+(x<<4&4294967295|x>>>28),x=D+(S^C^P)+R[12]+3873151461&4294967295,D=S+(x<<11&4294967295|x>>>21),x=P+(D^S^C)+R[15]+530742520&4294967295,P=D+(x<<16&4294967295|x>>>16),x=C+(P^D^S)+R[2]+3299628645&4294967295,C=P+(x<<23&4294967295|x>>>9),x=S+(P^(C|~D))+R[0]+4096336452&4294967295,S=C+(x<<6&4294967295|x>>>26),x=D+(C^(S|~P))+R[7]+1126891415&4294967295,D=S+(x<<10&4294967295|x>>>22),x=P+(S^(D|~C))+R[14]+2878612391&4294967295,P=D+(x<<15&4294967295|x>>>17),x=C+(D^(P|~S))+R[5]+4237533241&4294967295,C=P+(x<<21&4294967295|x>>>11),x=S+(P^(C|~D))+R[12]+1700485571&4294967295,S=C+(x<<6&4294967295|x>>>26),x=D+(C^(S|~P))+R[3]+2399980690&4294967295,D=S+(x<<10&4294967295|x>>>22),x=P+(S^(D|~C))+R[10]+4293915773&4294967295,P=D+(x<<15&4294967295|x>>>17),x=C+(D^(P|~S))+R[1]+2240044497&4294967295,C=P+(x<<21&4294967295|x>>>11),x=S+(P^(C|~D))+R[8]+1873313359&4294967295,S=C+(x<<6&4294967295|x>>>26),x=D+(C^(S|~P))+R[15]+4264355552&4294967295,D=S+(x<<10&4294967295|x>>>22),x=P+(S^(D|~C))+R[6]+2734768916&4294967295,P=D+(x<<15&4294967295|x>>>17),x=C+(D^(P|~S))+R[13]+1309151649&4294967295,C=P+(x<<21&4294967295|x>>>11),x=S+(P^(C|~D))+R[4]+4149444226&4294967295,S=C+(x<<6&4294967295|x>>>26),x=D+(C^(S|~P))+R[11]+3174756917&4294967295,D=S+(x<<10&4294967295|x>>>22),x=P+(S^(D|~C))+R[2]+718787259&4294967295,P=D+(x<<15&4294967295|x>>>17),x=C+(D^(P|~S))+R[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(P+(x<<21&4294967295|x>>>11))&4294967295,k.g[2]=k.g[2]+P&4294967295,k.g[3]=k.g[3]+D&4294967295}i.prototype.v=function(k,S){S===void 0&&(S=k.length);const C=S-this.blockSize,R=this.C;let P=this.h,D=0;for(;D<S;){if(P==0)for(;D<=C;)o(this,k,D),D+=this.blockSize;if(typeof k=="string"){for(;D<S;)if(R[P++]=k.charCodeAt(D++),P==this.blockSize){o(this,R),P=0;break}}else for(;D<S;)if(R[P++]=k[D++],P==this.blockSize){o(this,R),P=0;break}}this.h=P,this.o+=S},i.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;S=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=S&255,S/=256;for(this.v(k),k=Array(16),S=0,C=0;C<4;++C)for(let R=0;R<32;R+=8)k[S++]=this.g[C]>>>R&255;return k};function l(k,S){var C=f;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=S(k)}function h(k,S){this.h=S;const C=[];let R=!0;for(let P=k.length-1;P>=0;P--){const D=k[P]|0;R&&D==S||(C[P]=D,R=!1)}this.g=C}var f={};function g(k){return-128<=k&&k<128?l(k,function(S){return new h([S|0],S<0?-1:0)}):new h([k|0],k<0?-1:0)}function v(k){if(isNaN(k)||!isFinite(k))return I;if(k<0)return U(v(-k));const S=[];let C=1;for(let R=0;k>=C;R++)S[R]=k/C|0,C*=4294967296;return new h(S,0)}function E(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return U(E(k.substring(1),S));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=v(Math.pow(S,8));let R=I;for(let D=0;D<k.length;D+=8){var P=Math.min(8,k.length-D);const x=parseInt(k.substring(D,D+P),S);P<8?(P=v(Math.pow(S,P)),R=R.j(P).add(v(x))):(R=R.j(C),R=R.add(v(x)))}return R}var I=g(0),b=g(1),O=g(16777216);r=h.prototype,r.m=function(){if($(this))return-U(this).m();let k=0,S=1;for(let C=0;C<this.g.length;C++){const R=this.i(C);k+=(R>=0?R:4294967296+R)*S,S*=4294967296}return k},r.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(q(this))return"0";if($(this))return"-"+U(this).toString(k);const S=v(Math.pow(k,6));var C=this;let R="";for(;;){const P=ce(C,S).g;C=X(C,P.j(S));let D=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=P,q(C))return D+R;for(;D.length<6;)D="0"+D;R=D+R}},r.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function q(k){if(k.h!=0)return!1;for(let S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function $(k){return k.h==-1}r.l=function(k){return k=X(this,k),$(k)?-1:q(k)?0:1};function U(k){const S=k.g.length,C=[];for(let R=0;R<S;R++)C[R]=~k.g[R];return new h(C,~k.h).add(b)}r.abs=function(){return $(this)?U(this):this},r.add=function(k){const S=Math.max(this.g.length,k.g.length),C=[];let R=0;for(let P=0;P<=S;P++){let D=R+(this.i(P)&65535)+(k.i(P)&65535),x=(D>>>16)+(this.i(P)>>>16)+(k.i(P)>>>16);R=x>>>16,D&=65535,x&=65535,C[P]=x<<16|D}return new h(C,C[C.length-1]&-2147483648?-1:0)};function X(k,S){return k.add(U(S))}r.j=function(k){if(q(this)||q(k))return I;if($(this))return $(k)?U(this).j(U(k)):U(U(this).j(k));if($(k))return U(this.j(U(k)));if(this.l(O)<0&&k.l(O)<0)return v(this.m()*k.m());const S=this.g.length+k.g.length,C=[];for(var R=0;R<2*S;R++)C[R]=0;for(R=0;R<this.g.length;R++)for(let P=0;P<k.g.length;P++){const D=this.i(R)>>>16,x=this.i(R)&65535,je=k.i(P)>>>16,Ze=k.i(P)&65535;C[2*R+2*P]+=x*Ze,te(C,2*R+2*P),C[2*R+2*P+1]+=D*Ze,te(C,2*R+2*P+1),C[2*R+2*P+1]+=x*je,te(C,2*R+2*P+1),C[2*R+2*P+2]+=D*je,te(C,2*R+2*P+2)}for(k=0;k<S;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=S;k<2*S;k++)C[k]=0;return new h(C,0)};function te(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function ye(k,S){this.g=k,this.h=S}function ce(k,S){if(q(S))throw Error("division by zero");if(q(k))return new ye(I,I);if($(k))return S=ce(U(k),S),new ye(U(S.g),U(S.h));if($(S))return S=ce(k,U(S)),new ye(U(S.g),S.h);if(k.g.length>30){if($(k)||$(S))throw Error("slowDivide_ only works with positive integers.");for(var C=b,R=S;R.l(k)<=0;)C=Se(C),R=Se(R);var P=pe(C,1),D=pe(R,1);for(R=pe(R,2),C=pe(C,2);!q(R);){var x=D.add(R);x.l(k)<=0&&(P=P.add(C),D=x),R=pe(R,1),C=pe(C,1)}return S=X(k,P.j(S)),new ye(P,S)}for(P=I;k.l(S)>=0;){for(C=Math.max(1,Math.floor(k.m()/S.m())),R=Math.ceil(Math.log(C)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),D=v(C),x=D.j(S);$(x)||x.l(k)>0;)C-=R,D=v(C),x=D.j(S);q(D)&&(D=b),P=P.add(D),k=X(k,x)}return new ye(P,k)}r.B=function(k){return ce(this,k).h},r.and=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let R=0;R<S;R++)C[R]=this.i(R)&k.i(R);return new h(C,this.h&k.h)},r.or=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let R=0;R<S;R++)C[R]=this.i(R)|k.i(R);return new h(C,this.h|k.h)},r.xor=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let R=0;R<S;R++)C[R]=this.i(R)^k.i(R);return new h(C,this.h^k.h)};function Se(k){const S=k.g.length+1,C=[];for(let R=0;R<S;R++)C[R]=k.i(R)<<1|k.i(R-1)>>>31;return new h(C,k.h)}function pe(k,S){const C=S>>5;S%=32;const R=k.g.length-C,P=[];for(let D=0;D<R;D++)P[D]=S>0?k.i(D+C)>>>S|k.i(D+C+1)<<32-S:k.i(D+C);return new h(P,k.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,cv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=E,Rs=h}).apply(typeof sy<"u"?sy:typeof self<"u"?self:typeof window<"u"?window:{});var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hv,Ua,dv,tc,Wd,fv,pv,mv;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof $u=="object"&&$u];for(var m=0;m<u.length;++m){var y=u[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var y=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var j=u[T];if(!(j in y))break e;y=y[j]}u=u[u.length-1],T=y[u],m=m(T),m!=T&&m!=null&&e(y,u,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(m){var y=[],T;for(T in m)Object.prototype.hasOwnProperty.call(m,T)&&y.push([T,m[T]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function f(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function g(u,m,y){return u.call.apply(u.bind,arguments)}function v(u,m,y){return v=g,v.apply(null,arguments)}function E(u,m){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function I(u,m){function y(){}y.prototype=m.prototype,u.Z=m.prototype,u.prototype=new y,u.prototype.constructor=u,u.Ob=function(T,j,B){for(var Z=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)Z[Ie-2]=arguments[Ie];return m.prototype[j].apply(T,Z)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function O(u){const m=u.length;if(m>0){const y=Array(m);for(let T=0;T<m;T++)y[T]=u[T];return y}return[]}function q(u,m){for(let T=1;T<arguments.length;T++){const j=arguments[T];var y=typeof j;if(y=y!="object"?y:j?Array.isArray(j)?"array":y:"null",y=="array"||y=="object"&&typeof j.length=="number"){y=u.length||0;const B=j.length||0;u.length=y+B;for(let Z=0;Z<B;Z++)u[y+Z]=j[Z]}else u.push(j)}}class ${constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function U(u){h.setTimeout(()=>{throw u},0)}function X(){var u=k;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class te{constructor(){this.h=this.g=null}add(m,y){const T=ye.get();T.set(m,y),this.h?this.h.next=T:this.g=T,this.h=T}}var ye=new $(()=>new ce,u=>u.reset());class ce{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,pe=!1,k=new te,S=()=>{const u=Promise.resolve(void 0);Se=()=>{u.then(C)}};function C(){for(var u;u=X();){try{u.h.call(u.g)}catch(y){U(y)}var m=ye;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}pe=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var D=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};h.addEventListener("test",y,m),h.removeEventListener("test",y,m)}catch{}return u})();function x(u){return/^[\s\xa0]*$/.test(u)}function je(u,m){P.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}I(je,P),je.prototype.init=function(u,m){const y=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(y=="mouseover"?m=u.fromElement:y=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&je.Z.h.call(this)},je.prototype.h=function(){je.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ze="closure_listenable_"+(Math.random()*1e6|0),it=0;function Oe(u,m,y,T,j){this.listener=u,this.proxy=null,this.src=m,this.type=y,this.capture=!!T,this.ha=j,this.key=++it,this.da=this.fa=!1}function ee(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function de(u,m,y){for(const T in u)m.call(y,u[T],T,u)}function se(u,m){for(const y in u)m.call(void 0,u[y],y,u)}function L(u){const m={};for(const y in u)m[y]=u[y];return m}const H="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _e(u,m){let y,T;for(let j=1;j<arguments.length;j++){T=arguments[j];for(y in T)u[y]=T[y];for(let B=0;B<H.length;B++)y=H[B],Object.prototype.hasOwnProperty.call(T,y)&&(u[y]=T[y])}}function Ae(u){this.src=u,this.g={},this.h=0}Ae.prototype.add=function(u,m,y,T,j){const B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);const Z=Ne(u,m,T,j);return Z>-1?(m=u[Z],y||(m.fa=!1)):(m=new Oe(m,this.src,B,!!T,j),m.fa=y,u.push(m)),m};function Pe(u,m){const y=m.type;if(y in u.g){var T=u.g[y],j=Array.prototype.indexOf.call(T,m,void 0),B;(B=j>=0)&&Array.prototype.splice.call(T,j,1),B&&(ee(m),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Ne(u,m,y,T){for(let j=0;j<u.length;++j){const B=u[j];if(!B.da&&B.listener==m&&B.capture==!!y&&B.ha==T)return j}return-1}var ze="closure_lm_"+(Math.random()*1e6|0),Le={};function qe(u,m,y,T,j){if(Array.isArray(m)){for(let B=0;B<m.length;B++)qe(u,m[B],y,T,j);return null}return y=Bo(y),u&&u[Ze]?u.J(m,y,f(T)?!!T.capture:!1,j):Ht(u,m,y,!1,T,j)}function Ht(u,m,y,T,j,B){if(!m)throw Error("Invalid event type");const Z=f(j)?!!j.capture:!!j;let Ie=ki(u);if(Ie||(u[ze]=Ie=new Ae(u)),y=Ie.add(m,y,T,Z,B),y.proxy)return y;if(T=Ci(),y.proxy=T,T.src=u,T.listener=y,u.addEventListener)D||(j=Z),j===void 0&&(j=!1),u.addEventListener(m.toString(),T,j);else if(u.attachEvent)u.attachEvent(Ri(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ci(){function u(y){return m.call(u.src,u.listener,y)}const m=Al;return u}function zo(u,m,y,T,j){if(Array.isArray(m))for(var B=0;B<m.length;B++)zo(u,m[B],y,T,j);else T=f(T)?!!T.capture:!!T,y=Bo(y),u&&u[Ze]?(u=u.i,B=String(m).toString(),B in u.g&&(m=u.g[B],y=Ne(m,y,T,j),y>-1&&(ee(m[y]),Array.prototype.splice.call(m,y,1),m.length==0&&(delete u.g[B],u.h--)))):u&&(u=ki(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Ne(m,y,T,j)),(y=u>-1?m[u]:null)&&Hr(y))}function Hr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ze])Pe(m.i,u);else{var y=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(y,T,u.capture):m.detachEvent?m.detachEvent(Ri(y),T):m.addListener&&m.removeListener&&m.removeListener(T),(y=ki(m))?(Pe(y,u),y.h==0&&(y.src=null,m[ze]=null)):ee(u)}}}function Ri(u){return u in Le?Le[u]:Le[u]="on"+u}function Al(u,m){if(u.da)u=!0;else{m=new je(m,this);const y=u.listener,T=u.ha||u.src;u.fa&&Hr(u),u=y.call(T,m)}return u}function ki(u){return u=u[ze],u instanceof Ae?u:null}var Us="__closure_events_fn_"+(Math.random()*1e9>>>0);function Bo(u){return typeof u=="function"?u:(u[Us]||(u[Us]=function(m){return u.handleEvent(m)}),u[Us])}function pt(){R.call(this),this.i=new Ae(this),this.M=this,this.G=null}I(pt,R),pt.prototype[Ze]=!0,pt.prototype.removeEventListener=function(u,m,y,T){zo(this,u,m,y,T)};function lt(u,m){var y,T=u.G;if(T)for(y=[];T;T=T.G)y.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new P(m,u);else if(m instanceof P)m.target=m.target||u;else{var j=m;m=new P(T,u),_e(m,j)}j=!0;let B,Z;if(y)for(Z=y.length-1;Z>=0;Z--)B=m.g=y[Z],j=Rn(B,T,!0,m)&&j;if(B=m.g=u,j=Rn(B,T,!0,m)&&j,j=Rn(B,T,!1,m)&&j,y)for(Z=0;Z<y.length;Z++)B=m.g=y[Z],j=Rn(B,T,!1,m)&&j}pt.prototype.N=function(){if(pt.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const y=u.g[m];for(let T=0;T<y.length;T++)ee(y[T]);delete u.g[m],u.h--}}this.G=null},pt.prototype.J=function(u,m,y,T){return this.i.add(String(u),m,!1,y,T)},pt.prototype.K=function(u,m,y,T){return this.i.add(String(u),m,!0,y,T)};function Rn(u,m,y,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let j=!0;for(let B=0;B<m.length;++B){const Z=m[B];if(Z&&!Z.da&&Z.capture==y){const Ie=Z.listener,ut=Z.ha||Z.src;Z.fa&&Pe(u.i,Z),j=Ie.call(ut,T)!==!1&&j}}return j&&!T.defaultPrevented}function $o(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=v(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:h.setTimeout(u,m||0)}function qo(u){u.g=$o(()=>{u.g=null,u.i&&(u.i=!1,qo(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Cl extends R{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:qo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(u){R.call(this),this.h=u,this.g={}}I(Wr,R);var Ho=[];function Pi(u){de(u.g,function(m,y){this.g.hasOwnProperty(y)&&Hr(m)},u),u.g={}}Wr.prototype.N=function(){Wr.Z.N.call(this),Pi(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gr=h.JSON.stringify,Rl=h.JSON.parse,zs=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Kr(){}function kl(){}var Qr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ni(){P.call(this,"d")}I(Ni,P);function Wo(){P.call(this,"c")}I(Wo,P);var kn={},bi=null;function Yr(){return bi=bi||new pt}kn.Ia="serverreachability";function Di(u){P.call(this,kn.Ia,u)}I(Di,P);function gr(u){const m=Yr();lt(m,new Di(m))}kn.STAT_EVENT="statevent";function yr(u,m){P.call(this,kn.STAT_EVENT,u),this.stat=m}I(yr,P);function ot(u){const m=Yr();lt(m,new yr(m,u))}kn.Ja="timingevent";function Go(u,m){P.call(this,kn.Ja,u),this.size=m}I(Go,P);function Jr(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function Xr(){this.g=!0}Xr.prototype.ua=function(){this.g=!1};function Pl(u,m,y,T,j,B){u.info(function(){if(u.g)if(B){var Z="",Ie=B.split("&");for(let $e=0;$e<Ie.length;$e++){var ut=Ie[$e].split("=");if(ut.length>1){const mt=ut[0];ut=ut[1];const hn=mt.split("_");Z=hn.length>=2&&hn[1]=="type"?Z+(mt+"="+ut+"&"):Z+(mt+"=redacted&")}}}else Z=null;else Z=B;return"XMLHTTP REQ ("+T+") [attempt "+j+"]: "+m+`
`+y+`
`+Z})}function Nl(u,m,y,T,j,B,Z){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+j+"]: "+m+`
`+y+`
`+B+" "+Z})}function qn(u,m,y,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Bs(u,y)+(T?" "+T:"")})}function bl(u,m){u.info(function(){return"TIMEOUT: "+m})}Xr.prototype.info=function(){};function Bs(u,m){if(!u.g)return m;if(!m)return null;try{const B=JSON.parse(m);if(B){for(u=0;u<B.length;u++)if(Array.isArray(B[u])){var y=B[u];if(!(y.length<2)){var T=y[1];if(Array.isArray(T)&&!(T.length<1)){var j=T[0];if(j!="noop"&&j!="stop"&&j!="close")for(let Z=1;Z<T.length;Z++)T[Z]=""}}}}return Gr(B)}catch{return m}}var Zr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},es={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Dl;function _r(){}I(_r,Kr),_r.prototype.g=function(){return new XMLHttpRequest},Dl=new _r;function Hn(u){return encodeURIComponent(String(u))}function Vi(u){var m=1;u=u.split(":");const y=[];for(;m>0&&u.length;)y.push(u.shift()),m--;return u.length&&y.push(u.join(":")),y}function yn(u,m,y,T){this.j=u,this.i=m,this.l=y,this.S=T||1,this.V=new Wr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vl}function Vl(){this.i=null,this.g="",this.h=!1}var Ol={},Ko={};function Pn(u,m,y){u.M=1,u.A=wr(_n(m)),u.u=y,u.R=!0,Qo(u,null)}function Qo(u,m){u.F=Date.now(),$s(u),u.B=_n(u.A);var y=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),ia(y.i,"t",T),u.C=0,y=u.j.L,u.h=new Vl,u.g=Hl(u.j,y?m:null,!u.u),u.P>0&&(u.O=new Cl(v(u.Y,u,u.g),u.P)),m=u.V,y=u.g,T=u.ba;var j="readystatechange";Array.isArray(j)||(j&&(Ho[0]=j.toString()),j=Ho);for(let B=0;B<j.length;B++){const Z=qe(y,j[B],T||m.handleEvent,!1,m.h||m);if(!Z)break;m.g[Z.key]=Z}m=u.J?L(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),gr(),Pl(u.i,u.v,u.B,u.l,u.S,u.u)}yn.prototype.ba=function(u){u=u.target;const m=this.O;m&&Xn(u)==3?m.j():this.Y(u)},yn.prototype.Y=function(u){try{if(u==this.g)e:{const Ie=Xn(this.g),ut=this.g.ya(),$e=this.g.ca();if(!(Ie<3)&&(Ie!=3||this.g&&(this.h.h||this.g.la()||$l(this.g)))){this.K||Ie!=4||ut==7||(ut==8||$e<=0?gr(3):gr(2)),Oi(this);var m=this.g.ca();this.X=m;var y=Ll(this);if(this.o=m==200,Nl(this.i,this.v,this.B,this.l,this.S,Ie,m),this.o){if(this.U&&!this.L){t:{if(this.g){var T,j=this.g;if((T=j.g?j.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(T)){var B=T;break t}}B=null}if(u=B)qn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ke(this,u);else{this.o=!1,this.m=3,ot(12),vr(this),qs(this);break e}}if(this.R){u=!0;let mt;for(;!this.K&&this.C<y.length;)if(mt=jl(this,y),mt==Ko){Ie==4&&(this.m=4,ot(14),u=!1),qn(this.i,this.l,null,"[Incomplete Response]");break}else if(mt==Ol){this.m=4,ot(15),qn(this.i,this.l,y,"[Invalid Chunk]"),u=!1;break}else qn(this.i,this.l,mt,null),Ke(this,mt);if(Ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||y.length!=0||this.h.h||(this.m=1,ot(16),u=!1),this.o=this.o&&u,!u)qn(this.i,this.l,y,"[Invalid Chunked Response]"),vr(this),qs(this);else if(y.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Zs(Z),Z.P=!0,ot(11))}}else qn(this.i,this.l,y,null),Ke(this,y);Ie==4&&vr(this),this.o&&!this.K&&(Ie==4?Hi(this.j,this):(this.o=!1,$s(this)))}else aa(this.g),m==400&&y.indexOf("Unknown SID")>0?(this.m=3,ot(12)):(this.m=0,ot(13)),vr(this),qs(this)}}}catch{}finally{}};function Ll(u){if(!Ml(u))return u.g.la();const m=$l(u.g);if(m==="")return"";let y="";const T=m.length,j=Xn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return vr(u),qs(u),"";u.h.i=new h.TextDecoder}for(let B=0;B<T;B++)u.h.h=!0,y+=u.h.i.decode(m[B],{stream:!(j&&B==T-1)});return m.length=0,u.h.g+=y,u.C=0,u.h.g}function Ml(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function jl(u,m){var y=u.C,T=m.indexOf(`
`,y);return T==-1?Ko:(y=Number(m.substring(y,T)),isNaN(y)?Ol:(T+=1,T+y>m.length?Ko:(m=m.slice(T,T+y),u.C=T+y,m)))}yn.prototype.cancel=function(){this.K=!0,vr(this)};function $s(u){u.T=Date.now()+u.H,Yo(u,u.H)}function Yo(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Jr(v(u.aa,u),m)}function Oi(u){u.D&&(h.clearTimeout(u.D),u.D=null)}yn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(bl(this.i,this.B),this.M!=2&&(gr(),ot(17)),vr(this),this.m=2,qs(this)):Yo(this,this.T-u)};function qs(u){u.j.I==0||u.K||Hi(u.j,u)}function vr(u){Oi(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,Pi(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Ke(u,m){try{var y=u.j;if(y.I!=0&&(y.g==u||Xo(y.h,u))){if(!u.L&&Xo(y.h,u)&&y.I==3){try{var T=y.Ba.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var j=T;if(j[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<u.F)qi(y),un(y);else break e;tr(y),ot(18)}}else y.xa=j[1],0<y.xa-y.K&&j[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Jr(v(y.Va,y),6e3));Hs(y.h)<=1&&y.ta&&(y.ta=void 0)}else cn(y,11)}else if((u.L||y.g==u)&&qi(y),!x(m))for(j=y.Ba.g.parse(m),m=0;m<j.length;m++){let $e=j[m];const mt=$e[0];if(!(mt<=y.K))if(y.K=mt,$e=$e[1],y.I==2)if($e[0]=="c"){y.M=$e[1],y.ba=$e[2];const hn=$e[3];hn!=null&&(y.ka=hn,y.j.info("VER="+y.ka));const Sr=$e[4];Sr!=null&&(y.za=Sr,y.j.info("SVER="+y.za));const nr=$e[5];nr!=null&&typeof nr=="number"&&nr>0&&(T=1.5*nr,y.O=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const rr=u.g;if(rr){const Ki=rr.g?rr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ki){var B=T.h;B.g||Ki.indexOf("spdy")==-1&&Ki.indexOf("quic")==-1&&Ki.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Mi(B,B.h),B.h=null))}if(T.G){const ca=rr.g?rr.g.getResponseHeader("X-HTTP-Session-Id"):null;ca&&(T.wa=ca,Ue(T.J,T.G,ca))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-u.F,y.j.info("Handshake RTT: "+y.T+"ms")),T=y;var Z=u;if(T.na=ua(T,T.L?T.ba:null,T.W),Z.L){Ws(T.h,Z);var Ie=Z,ut=T.O;ut&&(Ie.H=ut),Ie.D&&(Oi(Ie),$s(Ie)),T.g=Z}else Lt(T);y.i.length>0&&xr(y)}else $e[0]!="stop"&&$e[0]!="close"||cn(y,7);else y.I==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?cn(y,7):Bi(y):$e[0]!="noop"&&y.l&&y.l.qa($e),y.A=0)}}gr(4)}catch{}}var Qc=class{constructor(u,m){this.g=u,this.map=m}};function Li(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Jo(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Hs(u){return u.h?1:u.g?u.g.size:0}function Xo(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Mi(u,m){u.g?u.g.add(m):u.h=m}function Ws(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Li.prototype.cancel=function(){if(this.i=on(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function on(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const y of u.g.values())m=m.concat(y.G);return m}return O(u.i)}var Fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function an(u,m){if(u){u=u.split("&");for(let y=0;y<u.length;y++){const T=u[y].indexOf("=");let j,B=null;T>=0?(j=u[y].substring(0,T),B=u[y].substring(T+1)):j=u[y],m(j,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function Wn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof Wn?(this.l=u.l,Gs(this,u.j),this.o=u.o,this.g=u.g,Gn(this,u.u),this.h=u.h,ts(this,oa(u.i)),this.m=u.m):u&&(m=String(u).match(Fl))?(this.l=!1,Gs(this,m[1]||"",!0),this.o=Ks(m[2]||""),this.g=Ks(m[3]||"",!0),Gn(this,m[4]),this.h=Ks(m[5]||"",!0),ts(this,m[6]||"",!0),this.m=Ks(m[7]||"")):(this.l=!1,this.i=new De(null,this.l))}Wn.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(Qs(m,ea,!0),":");var y=this.g;return(y||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Qs(m,ea,!0),"@"),u.push(Hn(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&u.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Qs(y,y.charAt(0)=="/"?Ys:ta,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Qs(y,na)),u.join("")},Wn.prototype.resolve=function(u){const m=_n(this);let y=!!u.j;y?Gs(m,u.j):y=!!u.o,y?m.o=u.o:y=!!u.g,y?m.g=u.g:y=u.u!=null;var T=u.h;if(y)Gn(m,u.u);else if(y=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var j=m.h.lastIndexOf("/");j!=-1&&(T=m.h.slice(0,j+1)+T)}if(j=T,j==".."||j==".")T="";else if(j.indexOf("./")!=-1||j.indexOf("/.")!=-1){T=j.lastIndexOf("/",0)==0,j=j.split("/");const B=[];for(let Z=0;Z<j.length;){const Ie=j[Z++];Ie=="."?T&&Z==j.length&&B.push(""):Ie==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),T&&Z==j.length&&B.push("")):(B.push(Ie),T=!0)}T=B.join("/")}else T=j}return y?m.h=T:y=u.i.toString()!=="",y?ts(m,oa(u.i)):y=!!u.m,y&&(m.m=u.m),m};function _n(u){return new Wn(u)}function Gs(u,m,y){u.j=y?Ks(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Gn(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function ts(u,m,y){m instanceof De?(u.i=m,Fi(u.i,u.l)):(y||(m=Qs(m,Yc)),u.i=new De(m,u.l))}function Ue(u,m,y){u.i.set(m,y)}function wr(u){return Ue(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Ks(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Qs(u,m,y){return typeof u=="string"?(u=encodeURI(u).replace(m,Zo),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Zo(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ea=/[#\/\?@]/g,ta=/[#\?:]/g,Ys=/[#\?]/g,Yc=/[#\?@]/g,na=/#/g;function De(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Kn(u){u.g||(u.g=new Map,u.h=0,u.i&&an(u.i,function(m,y){u.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}r=De.prototype,r.add=function(u,m){Kn(this),this.i=null,u=Qn(this,u);let y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(m),this.h+=1,this};function ra(u,m){Kn(u),m=Qn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function ji(u,m){return Kn(u),m=Qn(u,m),u.g.has(m)}r.forEach=function(u,m){Kn(this),this.g.forEach(function(y,T){y.forEach(function(j){u.call(m,j,T,this)},this)},this)};function sa(u,m){Kn(u);let y=[];if(typeof m=="string")ji(u,m)&&(y=y.concat(u.g.get(Qn(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)y=y.concat(u[m]);return y}r.set=function(u,m){return Kn(this),this.i=null,u=Qn(this,u),ji(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=sa(this,u),u.length>0?String(u[0]):m):m};function ia(u,m,y){ra(u,m),y.length>0&&(u.i=null,u.g.set(Qn(u,m),O(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let T=0;T<m.length;T++){var y=m[T];const j=Hn(y);y=sa(this,y);for(let B=0;B<y.length;B++){let Z=j;y[B]!==""&&(Z+="="+Hn(y[B])),u.push(Z)}}return this.i=u.join("&")};function oa(u){const m=new De;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function Qn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Fi(u,m){m&&!u.j&&(Kn(u),u.i=null,u.g.forEach(function(y,T){const j=T.toLowerCase();T!=j&&(ra(this,T),ia(this,j,y))},u)),u.j=m}function Yn(u,m){const y=new Xr;if(h.Image){const T=new Image;T.onload=E(Rt,y,"TestLoadImage: loaded",!0,m,T),T.onerror=E(Rt,y,"TestLoadImage: error",!1,m,T),T.onabort=E(Rt,y,"TestLoadImage: abort",!1,m,T),T.ontimeout=E(Rt,y,"TestLoadImage: timeout",!1,m,T),h.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Jn(u,m){const y=new Xr,T=new AbortController,j=setTimeout(()=>{T.abort(),Rt(y,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(B=>{clearTimeout(j),B.ok?Rt(y,"TestPingServer: ok",!0,m):Rt(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(j),Rt(y,"TestPingServer: error",!1,m)})}function Rt(u,m,y,T,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),T(y)}catch{}}function Js(){this.g=new zs}function Er(u){this.i=u.Sb||null,this.h=u.ab||!1}I(Er,Kr),Er.prototype.g=function(){return new ln(this.i,this.h)};function ln(u,m){pt.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(ln,pt),r=ln.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,Nn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||h).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ns(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ul(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ul(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?ns(this):Nn(this),this.readyState==3&&Ul(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,ns(this))},r.Na=function(u){this.g&&(this.response=u,ns(this))},r.ga=function(){this.g&&ns(this)};function ns(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Nn(u)}r.setRequestHeader=function(u,m){this.A.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=m.next();return u.join(`\r
`)};function Nn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ln.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function zl(u){let m="";return de(u,function(y,T){m+=T,m+=":",m+=y,m+=`\r
`}),m}function Ui(u,m,y){e:{for(T in y){var T=!1;break e}T=!0}T||(y=zl(y),typeof u=="string"?y!=null&&Hn(y):Ue(u,m,y))}function He(u){pt.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(He,pt);var Bl=/^https?$/i,Jc=["POST","PUT"];r=He.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,m,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Dl.g(),this.g.onreadystatechange=b(v(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){rs(this,B);return}if(u=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var j in T)y.set(j,T[j]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const B of T.keys())y.set(B,T.get(B));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),j=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(Jc,m,void 0)>=0)||T||j||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,Z]of y)this.g.setRequestHeader(B,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(B){rs(this,B)}};function rs(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,ss(u),Ir(u)}function ss(u){u.A||(u.A=!0,lt(u,"complete"),lt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,lt(this,"complete"),lt(this,"abort"),Ir(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ir(this,!0)),He.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Tr(this):this.Xa())},r.Xa=function(){Tr(this)};function Tr(u){if(u.h&&typeof l<"u"){if(u.v&&Xn(u)==4)setTimeout(u.Ca.bind(u),0);else if(lt(u,"readystatechange"),Xn(u)==4){u.h=!1;try{const B=u.ca();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var y;if(!(y=m)){var T;if(T=B===0){let Z=String(u.D).match(Fl)[1]||null;!Z&&h.self&&h.self.location&&(Z=h.self.location.protocol.slice(0,-1)),T=!Bl.test(Z?Z.toLowerCase():"")}y=T}if(y)lt(u,"complete"),lt(u,"success");else{u.o=6;try{var j=Xn(u)>2?u.g.statusText:""}catch{j=""}u.l=j+" ["+u.ca()+"]",ss(u)}}finally{Ir(u)}}}}function Ir(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const y=u.g;u.g=null,m||lt(u,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Xn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return Xn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Rl(m)}};function $l(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function aa(u){const m={};u=(u.g&&Xn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(x(u[T]))continue;var y=Vi(u[T]);const j=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=m[j]||[];m[j]=B,B.push(y)}se(m,function(T){return T.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(u,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||m}function zi(u){this.za=0,this.i=[],this.j=new Xr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Zn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Zn("baseRetryDelayMs",5e3,u),this.Za=Zn("retryDelaySeedMs",1e4,u),this.Ta=Zn("forwardChannelMaxRetries",2,u),this.va=Zn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Li(u&&u.concurrentRequestLimit),this.Ba=new Js,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=zi.prototype,r.ka=8,r.I=1,r.connect=function(u,m,y,T){ot(0),this.W=u,this.H=m||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.J=ua(this,null,this.W),xr(this)};function Bi(u){if($i(u),u.I==3){var m=u.V++,y=_n(u.J);if(Ue(y,"SID",u.M),Ue(y,"RID",m),Ue(y,"TYPE","terminate"),er(u,y),m=new yn(u,u.j,m),m.M=2,m.A=wr(_n(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(m.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=m.A,y=!0),y||(m.g=Hl(m.j,null),m.g.ea(m.A)),m.F=Date.now(),$s(m)}ei(u)}function un(u){u.g&&(Zs(u),u.g.cancel(),u.g=null)}function $i(u){un(u),u.v&&(h.clearTimeout(u.v),u.v=null),qi(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function xr(u){if(!Jo(u.h)&&!u.m){u.m=!0;var m=u.Ea;Se||S(),pe||(Se(),pe=!0),k.add(m,u),u.D=0}}function ql(u,m){return Hs(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Jr(v(u.Ea,u,m),Wi(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const j=new yn(this,this.j,u);let B=this.o;if(this.U&&(B?(B=L(B),_e(B,this.U)):B=this.U),this.u!==null||this.R||(j.J=B,B=null),this.S)e:{for(var m=0,y=0;y<this.i.length;y++){t:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,m>4096){m=y;break e}if(m===4096||y===this.i.length-1){m=y+1;break e}}m=1e3}else m=1e3;m=la(this,j,m),y=_n(this.J),Ue(y,"RID",u),Ue(y,"CVER",22),this.G&&Ue(y,"X-HTTP-Session-Id",this.G),er(this,y),B&&(this.R?m="headers="+Hn(zl(B))+"&"+m:this.u&&Ui(y,this.u,B)),Mi(this.h,j),this.Ra&&Ue(y,"TYPE","init"),this.S?(Ue(y,"$req",m),Ue(y,"SID","null"),j.U=!0,Pn(j,y,null)):Pn(j,y,m),this.I=2}}else this.I==3&&(u?Xs(this,u):this.i.length==0||Jo(this.h)||Xs(this))};function Xs(u,m){var y;m?y=m.l:y=u.V++;const T=_n(u.J);Ue(T,"SID",u.M),Ue(T,"RID",y),Ue(T,"AID",u.K),er(u,T),u.u&&u.o&&Ui(T,u.u,u.o),y=new yn(u,u.j,y,u.D+1),u.u===null&&(y.J=u.o),m&&(u.i=m.G.concat(u.i)),m=la(u,y,1e3),y.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Mi(u.h,y),Pn(y,T,m)}function er(u,m){u.H&&de(u.H,function(y,T){Ue(m,T,y)}),u.l&&de({},function(y,T){Ue(m,T,y)})}function la(u,m,y){y=Math.min(u.i.length,y);const T=u.l?v(u.l.Ka,u.l,u):null;e:{var j=u.i;let Ie=-1;for(;;){const ut=["count="+y];Ie==-1?y>0?(Ie=j[0].g,ut.push("ofs="+Ie)):Ie=0:ut.push("ofs="+Ie);let $e=!0;for(let mt=0;mt<y;mt++){var B=j[mt].g;const hn=j[mt].map;if(B-=Ie,B<0)Ie=Math.max(0,j[mt].g-100),$e=!1;else try{B="req"+B+"_"||"";try{var Z=hn instanceof Map?hn:Object.entries(hn);for(const[Sr,nr]of Z){let rr=nr;f(nr)&&(rr=Gr(nr)),ut.push(B+Sr+"="+encodeURIComponent(rr))}}catch(Sr){throw ut.push(B+"type="+encodeURIComponent("_badmap")),Sr}}catch{T&&T(hn)}}if($e){Z=ut.join("&");break e}}Z=void 0}return u=u.i.splice(0,y),m.G=u,Z}function Lt(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;Se||S(),pe||(Se(),pe=!0),k.add(m,u),u.A=0}}function tr(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Jr(v(u.Da,u),Wi(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,is(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Jr(v(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ot(10),un(this),is(this))};function Zs(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function is(u){u.g=new yn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=_n(u.na);Ue(m,"RID","rpc"),Ue(m,"SID",u.M),Ue(m,"AID",u.K),Ue(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&Ue(m,"TO",u.ia),Ue(m,"TYPE","xmlhttp"),er(u,m),u.u&&u.o&&Ui(m,u.u,u.o),u.O&&(u.g.H=u.O);var y=u.g;u=u.ba,y.M=1,y.A=wr(_n(m)),y.u=null,y.R=!0,Qo(y,u)}r.Va=function(){this.C!=null&&(this.C=null,un(this),tr(this),ot(19))};function qi(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Hi(u,m){var y=null;if(u.g==m){qi(u),Zs(u),u.g=null;var T=2}else if(Xo(u.h,m))y=m.G,Ws(u.h,m),T=1;else return;if(u.I!=0){if(m.o)if(T==1){y=m.u?m.u.length:0,m=Date.now()-m.F;var j=u.D;T=Yr(),lt(T,new Go(T,y)),xr(u)}else Lt(u);else if(j=m.m,j==3||j==0&&m.X>0||!(T==1&&ql(u,m)||T==2&&tr(u)))switch(y&&y.length>0&&(m=u.h,m.i=m.i.concat(y)),j){case 1:cn(u,5);break;case 4:cn(u,10);break;case 3:cn(u,6);break;default:cn(u,2)}}}function Wi(u,m){let y=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(y*=2),y*m}function cn(u,m){if(u.j.info("Error code "+m),m==2){var y=v(u.bb,u),T=u.Ua;const j=!T;T=new Wn(T||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Gs(T,"https"),wr(T),j?Yn(T.toString(),y):Jn(T.toString(),y)}else ot(2);u.I=0,u.l&&u.l.pa(m),ei(u),$i(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function ei(u){if(u.I=0,u.ja=[],u.l){const m=on(u.h);(m.length!=0||u.i.length!=0)&&(q(u.ja,m),q(u.ja,u.i),u.h.i.length=0,O(u.i),u.i.length=0),u.l.oa()}}function ua(u,m,y){var T=y instanceof Wn?_n(y):new Wn(y);if(T.g!="")m&&(T.g=m+"."+T.g),Gn(T,T.u);else{var j=h.location;T=j.protocol,m=m?m+"."+j.hostname:j.hostname,j=+j.port;const B=new Wn(null);T&&Gs(B,T),m&&(B.g=m),j&&Gn(B,j),y&&(B.h=y),T=B}return y=u.G,m=u.wa,y&&m&&Ue(T,y,m),Ue(T,"VER",u.ka),er(u,T),T}function Hl(u,m,y){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new He(new Er({ab:y})):new He(u.ma),m.Fa(u.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wl(){}r=Wl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Gi(){}Gi.prototype.g=function(u,m){return new kt(u,m)};function kt(u,m){pt.call(this),this.g=new zi(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!x(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!x(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new os(this)}I(kt,pt),kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Bi(this.g)},kt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.v&&(y={},y.__data__=Gr(u),u=y);m.i.push(new Qc(m.Ya++,u)),m.I==3&&xr(m)},kt.prototype.N=function(){this.g.l=null,delete this.j,Bi(this.g),delete this.g,kt.Z.N.call(this)};function Gl(u){Ni.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const y in m){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}I(Gl,Ni);function Kl(){Wo.call(this),this.status=1}I(Kl,Wo);function os(u){this.g=u}I(os,Wl),os.prototype.ra=function(){lt(this.g,"a")},os.prototype.qa=function(u){lt(this.g,new Gl(u))},os.prototype.pa=function(u){lt(this.g,new Kl)},os.prototype.oa=function(){lt(this.g,"b")},Gi.prototype.createWebChannel=Gi.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,mv=function(){return new Gi},pv=function(){return Yr()},fv=kn,Wd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Zr.NO_ERROR=0,Zr.TIMEOUT=8,Zr.HTTP_ERROR=6,tc=Zr,es.COMPLETE="complete",dv=es,kl.EventType=Qr,Qr.OPEN="a",Qr.CLOSE="b",Qr.ERROR="c",Qr.MESSAGE="d",pt.prototype.listen=pt.prototype.J,Ua=kl,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,hv=He}).apply(typeof $u<"u"?$u:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Bt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
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
 */let Lo="12.13.0";function N1(r){Lo=r}/**
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
 */const Ii=new pf("@firebase/firestore");function go(){return Ii.logLevel}function re(r,...e){if(Ii.logLevel<=be.DEBUG){const t=e.map(Rf);Ii.debug(`Firestore (${Lo}): ${r}`,...t)}}function zr(r,...e){if(Ii.logLevel<=be.ERROR){const t=e.map(Rf);Ii.error(`Firestore (${Lo}): ${r}`,...t)}}function xi(r,...e){if(Ii.logLevel<=be.WARN){const t=e.map(Rf);Ii.warn(`Firestore (${Lo}): ${r}`,...t)}}function Rf(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function we(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,gv(r,i,t)}function gv(r,e,t){let i=`FIRESTORE (${Lo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw zr(i),new Error(i)}function Be(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||gv(e,o,i)}function xe(r,e){return r}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class yv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class b1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Bt.UNAUTHENTICATED)))}shutdown(){}}class D1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class V1{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new jr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new jr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Be(typeof i.accessToken=="string",31837,{l:i}),new yv(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string",2055,{h:e}),new Bt(e)}}class O1{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class L1{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new O1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class iy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Be(this.o===void 0,3512);const i=l=>{l.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new iy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new iy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function j1(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class kf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=j1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Re(r,e){return r<e?-1:r>e?1:0}function Gd(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const o=r.charAt(i),l=e.charAt(i);if(o!==l)return Pd(o)===Pd(l)?Re(o,l):Pd(o)?1:-1}return Re(r.length,e.length)}const F1=55296,U1=57343;function Pd(r){const e=r.charCodeAt(0);return e>=F1&&e<=U1}function Ro(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
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
 */const oy="__name__";class lr{constructor(e,t,i){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&we(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return lr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof lr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=lr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Re(e.length,t.length)}static compareSegments(e,t){const i=lr.isNumericId(e),o=lr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?lr.extractNumericId(e).compare(lr.extractNumericId(t)):Gd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rs.fromString(e.substring(4,e.length-2))}}class Ge extends lr{construct(e,t,i){return new Ge(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ne(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Ge(t)}static emptyPath(){return new Ge([])}}const z1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends lr{construct(e,t,i){return new Dt(e,t,i)}static isValidIdentifier(e){return z1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===oy}static keyField(){return new Dt([oy])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ne(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ne(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ne(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new ne(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(Ge.fromString(e))}static fromName(e){return new fe(Ge.fromString(e).popFirst(5))}static empty(){return new fe(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new Ge(e.slice()))}}/**
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
 */function _v(r,e,t){if(!t)throw new ne(W.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function B1(r,e,t,i){if(e===!0&&i===!0)throw new ne(W.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ay(r){if(!fe.isDocumentKey(r))throw new ne(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ly(r){if(fe.isDocumentKey(r))throw new ne(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function vv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Nc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":we(12329,{type:typeof r})}function Cn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ne(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Nc(r);throw new ne(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function vt(r,e){const t={typeString:r};return e&&(t.value=e),t}function fl(r,e){if(!vv(r))throw new ne(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ne(W.INVALID_ARGUMENT,t);return!0}/**
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
 */const uy=-62135596800,cy=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*cy);return new Je(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<uy)throw new ne(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cy}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fl(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-uy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:vt("string",Je._jsonSchemaVersion),seconds:vt("number"),nanoseconds:vt("number")};/**
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
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Je(0,0))}static max(){return new Te(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Za=-1;function $1(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(i===1e9?new Je(t+1,0):new Je(t,i));return new Ps(o,fe.empty(),e)}function q1(r){return new Ps(r.readTime,r.key,Za)}class Ps{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ps(Te.min(),fe.empty(),Za)}static max(){return new Ps(Te.max(),fe.empty(),Za)}}function H1(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(r.documentKey,e.documentKey),t!==0?t:Re(r.largestBatchId,e.largestBatchId))}/**
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
 */const W1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class G1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Mo(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==W1)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,i)=>{t(e)}))}static reject(e){return new G(((t,i)=>{i(e)}))}static waitFor(e){return new G(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next((o=>o?G.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new G(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const v=g;t(e[v]).next((E=>{h[v]=E,++f,f===l&&i(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new G(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function K1(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function jo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class bc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}bc.ce=-1;/**
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
 */const Pf=-1;function Dc(r){return r==null}function mc(r){return r===0&&1/r==-1/0}function Q1(r){return typeof r=="number"&&Number.isInteger(r)&&!mc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const wv="";function Y1(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=hy(e)),e=J1(r.get(t),e);return hy(e)}function J1(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case wv:t+="";break;default:t+=l}}return t}function hy(r){return r+wv+""}/**
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
 */function dy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ms(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Ev(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class tt{constructor(e,t){this.comparator=e,this.root=t||bt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qu(this.root,e,this.comparator,!1)}getReverseIterator(){return new qu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qu(this.root,e,this.comparator,!0)}}class qu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??bt.RED,this.left=o??bt.EMPTY,this.right=l??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new bt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return bt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fy(this.data.getIterator())}getIteratorFrom(e){return new fy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new It(this.comparator);return t.data=e,t}}class fy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class gn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new gn([])}unionWith(e){let t=new It(Dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new gn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ro(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Tv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Tv("Invalid base64 string: "+l):l}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const X1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ns(r){if(Be(!!r,39018),typeof r=="string"){let e=0;const t=X1.exec(r);if(Be(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ht(r.seconds),nanos:ht(r.nanos)}}function ht(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function bs(r){return typeof r=="string"?Ot.fromBase64String(r):Ot.fromUint8Array(r)}/**
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
 */const Iv="server_timestamp",xv="__type__",Sv="__previous_value__",Av="__local_write_time__";function Nf(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[xv])==null?void 0:i.stringValue)===Iv}function Vc(r){const e=r.mapValue.fields[Sv];return Nf(e)?Vc(e):e}function el(r){const e=Ns(r.mapValue.fields[Av].timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class Z1{constructor(e,t,i,o,l,h,f,g,v,E,I){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=v,this.isUsingEmulator=E,this.apiKey=I}}const gc="(default)";class tl{constructor(e,t){this.projectId=e,this.database=t||gc}static empty(){return new tl("","")}get isDefaultDatabase(){return this.database===gc}isEqual(e){return e instanceof tl&&e.projectId===this.projectId&&e.database===this.database}}function eS(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new ne(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tl(r.options.projectId,e)}/**
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
 */const Cv="__type__",tS="__max__",Hu={mapValue:{}},Rv="__vector__",yc="value";function Ds(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Nf(r)?4:rS(r)?9007199254740991:nS(r)?10:11:we(28295,{value:r})}function pr(r,e){if(r===e)return!0;const t=Ds(r);if(t!==Ds(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return el(r).isEqual(el(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ns(o.timestampValue),f=Ns(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return bs(o.bytesValue).isEqual(bs(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return ht(o.geoPointValue.latitude)===ht(l.geoPointValue.latitude)&&ht(o.geoPointValue.longitude)===ht(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ht(o.integerValue)===ht(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ht(o.doubleValue),f=ht(l.doubleValue);return h===f?mc(h)===mc(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Ro(r.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(dy(h)!==dy(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!pr(h[g],f[g])))return!1;return!0})(r,e);default:return we(52216,{left:r})}}function nl(r,e){return(r.values||[]).find((t=>pr(t,e)))!==void 0}function ko(r,e){if(r===e)return 0;const t=Ds(r),i=Ds(e);if(t!==i)return Re(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=ht(l.integerValue||l.doubleValue),g=ht(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return py(r.timestampValue,e.timestampValue);case 4:return py(el(r),el(e));case 5:return Gd(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=bs(l),g=bs(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let v=0;v<f.length&&v<g.length;v++){const E=Re(f[v],g[v]);if(E!==0)return E}return Re(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Re(ht(l.latitude),ht(h.latitude));return f!==0?f:Re(ht(l.longitude),ht(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return my(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var b,O,q,$;const f=l.fields||{},g=h.fields||{},v=(b=f[yc])==null?void 0:b.arrayValue,E=(O=g[yc])==null?void 0:O.arrayValue,I=Re(((q=v==null?void 0:v.values)==null?void 0:q.length)||0,(($=E==null?void 0:E.values)==null?void 0:$.length)||0);return I!==0?I:my(v,E)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Hu.mapValue&&h===Hu.mapValue)return 0;if(l===Hu.mapValue)return 1;if(h===Hu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),v=h.fields||{},E=Object.keys(v);g.sort(),E.sort();for(let I=0;I<g.length&&I<E.length;++I){const b=Gd(g[I],E[I]);if(b!==0)return b;const O=ko(f[g[I]],v[E[I]]);if(O!==0)return O}return Re(g.length,E.length)})(r.mapValue,e.mapValue);default:throw we(23264,{he:t})}}function py(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Re(r,e);const t=Ns(r),i=Ns(e),o=Re(t.seconds,i.seconds);return o!==0?o:Re(t.nanos,i.nanos)}function my(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=ko(t[o],i[o]);if(l)return l}return Re(t.length,i.length)}function Po(r){return Kd(r)}function Kd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=Ns(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return bs(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return fe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Kd(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Kd(t.fields[h])}`;return o+"}"})(r.mapValue):we(61005,{value:r})}function nc(r){switch(Ds(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vc(r);return e?16+nc(e):16;case 5:return 2*r.stringValue.length;case 6:return bs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+nc(l)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return Ms(i.fields,((l,h)=>{o+=l.length+nc(h)})),o})(r.mapValue);default:throw we(13486,{value:r})}}function gy(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Qd(r){return!!r&&"integerValue"in r}function bf(r){return!!r&&"arrayValue"in r}function yy(r){return!!r&&"nullValue"in r}function _y(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function rc(r){return!!r&&"mapValue"in r}function nS(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Cv])==null?void 0:i.stringValue)===Rv}function Ha(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Ms(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Ha(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ha(r.arrayValue.values[t]);return e}return{...r}}function rS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===tS}/**
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
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!rc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ha(t)}setAll(e){let t=Dt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Ha(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());rc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];rc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Ms(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new nn(Ha(this.value))}}function kv(r){const e=[];return Ms(r.fields,((t,i)=>{const o=new Dt([t]);if(rc(i)){const l=kv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new gn(e)}/**
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
 */class $t{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new $t(e,0,Te.min(),Te.min(),Te.min(),nn.empty(),0)}static newFoundDocument(e,t,i,o){return new $t(e,1,t,Te.min(),i,o,0)}static newNoDocument(e,t){return new $t(e,2,t,Te.min(),Te.min(),nn.empty(),0)}static newUnknownDocument(e,t){return new $t(e,3,t,Te.min(),Te.min(),nn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _c{constructor(e,t){this.position=e,this.inclusive=t}}function vy(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?i=fe.comparator(fe.fromName(h.referenceValue),t.key):i=ko(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function wy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!pr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class vc{constructor(e,t="asc"){this.field=e,this.dir=t}}function sS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Pv{}class _t extends Pv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new oS(e,t,i):t==="array-contains"?new uS(e,i):t==="in"?new cS(e,i):t==="not-in"?new hS(e,i):t==="array-contains-any"?new dS(e,i):new _t(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new aS(e,i):new lS(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ko(t,this.value)):t!==null&&Ds(this.value)===Ds(t)&&this.matchesComparison(ko(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends Pv{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Bn(e,t)}matches(e){return Nv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Nv(r){return r.op==="and"}function bv(r){return iS(r)&&Nv(r)}function iS(r){for(const e of r.filters)if(e instanceof Bn)return!1;return!0}function Yd(r){if(r instanceof _t)return r.field.canonicalString()+r.op.toString()+Po(r.value);if(bv(r))return r.filters.map((e=>Yd(e))).join(",");{const e=r.filters.map((t=>Yd(t))).join(",");return`${r.op}(${e})`}}function Dv(r,e){return r instanceof _t?(function(i,o){return o instanceof _t&&i.op===o.op&&i.field.isEqual(o.field)&&pr(i.value,o.value)})(r,e):r instanceof Bn?(function(i,o){return o instanceof Bn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&Dv(h,o.filters[f])),!0):!1})(r,e):void we(19439)}function Vv(r){return r instanceof _t?(function(t){return`${t.field.canonicalString()} ${t.op} ${Po(t.value)}`})(r):r instanceof Bn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Vv).join(" ,")+"}"})(r):"Filter"}class oS extends _t{constructor(e,t,i){super(e,t,i),this.key=fe.fromName(i.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class aS extends _t{constructor(e,t){super(e,"in",t),this.keys=Ov("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class lS extends _t{constructor(e,t){super(e,"not-in",t),this.keys=Ov("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ov(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>fe.fromName(i.referenceValue)))}class uS extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bf(t)&&nl(t.arrayValue,this.value)}}class cS extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&nl(this.value.arrayValue,t)}}class hS extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(nl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!nl(this.value.arrayValue,t)}}class dS extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>nl(this.value.arrayValue,i)))}}/**
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
 */class fS{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Te=null}}function Ey(r,e=null,t=[],i=[],o=null,l=null,h=null){return new fS(r,e,t,i,o,l,h)}function Df(r){const e=xe(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Yd(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Dc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Po(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Po(i))).join(",")),e.Te=t}return e.Te}function Vf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!sS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Dv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!wy(r.startAt,e.startAt)&&wy(r.endAt,e.endAt)}function Jd(r){return fe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class pl{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function pS(r,e,t,i,o,l,h,f){return new pl(r,e,t,i,o,l,h,f)}function Of(r){return new pl(r)}function Ty(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function mS(r){return fe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Lv(r){return r.collectionGroup!==null}function Wa(r){const e=xe(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new It(Dt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((v=>{v.isInequality()&&(f=f.add(v.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new vc(l,i))})),t.has(Dt.keyField().canonicalString())||e.Ie.push(new vc(Dt.keyField(),i))}return e.Ie}function cr(r){const e=xe(r);return e.Ee||(e.Ee=gS(e,Wa(r))),e.Ee}function gS(r,e){if(r.limitType==="F")return Ey(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new vc(o.field,l)}));const t=r.endAt?new _c(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new _c(r.startAt.position,r.startAt.inclusive):null;return Ey(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function Xd(r,e){const t=r.filters.concat([e]);return new pl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Zd(r,e,t){return new pl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Oc(r,e){return Vf(cr(r),cr(e))&&r.limitType===e.limitType}function Mv(r){return`${Df(cr(r))}|lt:${r.limitType}`}function yo(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Vv(o))).join(", ")}]`),Dc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Po(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Po(o))).join(",")),`Target(${i})`})(cr(r))}; limitType=${r.limitType})`}function Lc(r,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):fe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,o){for(const l of Wa(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const v=vy(h,f,g);return h.inclusive?v<=0:v<0})(i.startAt,Wa(i),o)||i.endAt&&!(function(h,f,g){const v=vy(h,f,g);return h.inclusive?v>=0:v>0})(i.endAt,Wa(i),o))})(r,e)}function yS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function jv(r){return(e,t)=>{let i=!1;for(const o of Wa(r)){const l=_S(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function _S(r,e,t){const i=r.field.isKeyField()?fe.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),v=f.data.field(l);return g!==null&&v!==null?ko(g,v):we(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return we(19790,{direction:r.dir})}}/**
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
 */class Si{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ms(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return Ev(this.inner)}size(){return this.innerSize}}/**
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
 */const vS=new tt(fe.comparator);function Br(){return vS}const Fv=new tt(fe.comparator);function za(...r){let e=Fv;for(const t of r)e=e.insert(t.key,t);return e}function Uv(r){let e=Fv;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function mi(){return Ga()}function zv(){return Ga()}function Ga(){return new Si((r=>r.toString()),((r,e)=>r.isEqual(e)))}const wS=new tt(fe.comparator),ES=new It(fe.comparator);function ke(...r){let e=ES;for(const t of r)e=e.add(t);return e}const TS=new It(Re);function IS(){return TS}/**
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
 */function Lf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(e)?"-0":e}}function Bv(r){return{integerValue:""+r}}function xS(r,e){return Q1(e)?Bv(e):Lf(r,e)}/**
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
 */class Mc{constructor(){this._=void 0}}function SS(r,e,t){return r instanceof rl?(function(o,l){const h={fields:{[xv]:{stringValue:Iv},[Av]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Nf(l)&&(l=Vc(l)),l&&(h.fields[Sv]=l),{mapValue:h}})(t,e):r instanceof sl?qv(r,e):r instanceof il?Hv(r,e):(function(o,l){const h=$v(o,l),f=Iy(h)+Iy(o.Ae);return Qd(h)&&Qd(o.Ae)?Bv(f):Lf(o.serializer,f)})(r,e)}function AS(r,e,t){return r instanceof sl?qv(r,e):r instanceof il?Hv(r,e):t}function $v(r,e){return r instanceof wc?(function(i){return Qd(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class rl extends Mc{}class sl extends Mc{constructor(e){super(),this.elements=e}}function qv(r,e){const t=Wv(e);for(const i of r.elements)t.some((o=>pr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class il extends Mc{constructor(e){super(),this.elements=e}}function Hv(r,e){let t=Wv(e);for(const i of r.elements)t=t.filter((o=>!pr(o,i)));return{arrayValue:{values:t}}}class wc extends Mc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Iy(r){return ht(r.integerValue||r.doubleValue)}function Wv(r){return bf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class CS{constructor(e,t){this.field=e,this.transform=t}}function RS(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof sl&&o instanceof sl||i instanceof il&&o instanceof il?Ro(i.elements,o.elements,pr):i instanceof wc&&o instanceof wc?pr(i.Ae,o.Ae):i instanceof rl&&o instanceof rl})(r.transform,e.transform)}class kS{constructor(e,t){this.version=e,this.transformResults=t}}class Kt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class jc{}function Gv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Fc(r.key,Kt.none()):new ml(r.key,r.data,Kt.none());{const t=r.data,i=nn.empty();let o=new It(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new js(r.key,i,new gn(o.toArray()),Kt.none())}}function PS(r,e,t){r instanceof ml?(function(o,l,h){const f=o.value.clone(),g=Sy(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof js?(function(o,l,h){if(!sc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Sy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(Kv(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ka(r,e,t,i){return r instanceof ml?(function(l,h,f,g){if(!sc(l.precondition,h))return f;const v=l.value.clone(),E=Ay(l.fieldTransforms,g,h);return v.setAll(E),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(r,e,t,i):r instanceof js?(function(l,h,f,g){if(!sc(l.precondition,h))return f;const v=Ay(l.fieldTransforms,g,h),E=h.data;return E.setAll(Kv(l)),E.setAll(v),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((I=>I.field)))})(r,e,t,i):(function(l,h,f){return sc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function NS(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),l=$v(i.transform,o||null);l!=null&&(t===null&&(t=nn.empty()),t.set(i.field,l))}return t||null}function xy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Ro(i,o,((l,h)=>RS(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ml extends jc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class js extends jc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Kv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function Sy(r,e,t){const i=new Map;Be(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,AS(h,f,t[o]))}return i}function Ay(r,e,t){const i=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);i.set(o.field,SS(l,h,e))}return i}class Fc extends jc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bS extends jc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class DS{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&PS(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ka(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ka(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=zv();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=Gv(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Te.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ke())}isEqual(e){return this.batchId===e.batchId&&Ro(this.mutations,e.mutations,((t,i)=>xy(t,i)))&&Ro(this.baseMutations,e.baseMutations,((t,i)=>xy(t,i)))}}class Mf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Be(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return wS})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Mf(e,t,i,o)}}/**
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
 */class VS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class OS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var yt,Ve;function LS(r){switch(r){case W.OK:return we(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return we(15467,{code:r})}}function Qv(r){if(r===void 0)return zr("GRPC error has no .code"),W.UNKNOWN;switch(r){case yt.OK:return W.OK;case yt.CANCELLED:return W.CANCELLED;case yt.UNKNOWN:return W.UNKNOWN;case yt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case yt.INTERNAL:return W.INTERNAL;case yt.UNAVAILABLE:return W.UNAVAILABLE;case yt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case yt.NOT_FOUND:return W.NOT_FOUND;case yt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case yt.ABORTED:return W.ABORTED;case yt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case yt.DATA_LOSS:return W.DATA_LOSS;default:return we(39323,{code:r})}}(Ve=yt||(yt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function MS(){return new TextEncoder}/**
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
 */const jS=new Rs([4294967295,4294967295],0);function Cy(r){const e=MS().encode(r),t=new cv;return t.update(e),new Uint8Array(t.digest())}function Ry(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Rs([t,i],0),new Rs([o,l],0)]}class jf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ba(`Invalid padding: ${t}`);if(i<0)throw new Ba(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ba(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ba(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Rs.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Rs.fromNumber(i)));return o.compare(jS)===1&&(o=new Rs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Cy(e),[i,o]=Ry(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);if(!this.we(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new jf(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.ge===0)return;const t=Cy(e),[i,o]=Ry(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class gl{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,yl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new gl(Te.min(),o,new tt(Re),Br(),ke())}}class yl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new yl(i,t,ke(),ke(),ke())}}/**
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
 */class ic{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class Yv{constructor(e,t){this.targetId=e,this.Ce=t}}class Jv{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class ky{constructor(){this.ve=0,this.Fe=Py(),this.Me=Ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ke(),t=ke(),i=ke();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:we(38017,{changeType:l})}})),new yl(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=Py()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Be(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class FS{constructor(e){this.Ge=e,this.ze=new Map,this.je=Br(),this.Je=Wu(),this.He=Wu(),this.Ze=new tt(Re)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:we(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(Jd(l))if(i===0){const h=new fe(l.path);this.et(t,h,$t.newNoDocument(h,Te.min()))}else Be(i===1,20013,{expectedCount:i});else{const h=this._t(t);if(h!==i){const f=this.ut(e),g=f?this.ct(f,e,h):1;if(g!==0){this.it(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=bs(i).toUint8Array()}catch(g){if(g instanceof Tv)return xi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new jf(h,o,l)}catch(g){return xi(g instanceof Ba?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.Ge.ht(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const f=this.ot(h);if(f){if(l.current&&Jd(f.target)){const g=new fe(f.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,$t.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.Ke())}}));let i=ke();this.He.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const v=this.ot(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new gl(e,t,this.Ze,this.je,i);return this.je=Br(),this.Je=Wu(),this.He=Wu(),this.Ze=new tt(Re),o}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new ky,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new It(Re),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new It(Re),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ky),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Wu(){return new tt(fe.comparator)}function Py(){return new tt(fe.comparator)}const US={asc:"ASCENDING",desc:"DESCENDING"},zS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BS={and:"AND",or:"OR"};class $S{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ef(r,e){return r.useProto3Json||Dc(e)?e:{value:e}}function Ec(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function qS(r,e){return Ec(r,e.toTimestamp())}function hr(r){return Be(!!r,49232),Te.fromTimestamp((function(t){const i=Ns(t);return new Je(i.seconds,i.nanos)})(r))}function Ff(r,e){return tf(r,e).canonicalString()}function tf(r,e){const t=(function(o){return new Ge(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Zv(r){const e=Ge.fromString(r);return Be(s0(e),10190,{key:e.toString()}),e}function nf(r,e){return Ff(r.databaseId,e.path)}function Nd(r,e){const t=Zv(e);if(t.get(1)!==r.databaseId.projectId)throw new ne(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ne(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new fe(t0(t))}function e0(r,e){return Ff(r.databaseId,e)}function HS(r){const e=Zv(r);return e.length===4?Ge.emptyPath():t0(e)}function rf(r){return new Ge(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function t0(r){return Be(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Ny(r,e,t){return{name:nf(r,e),fields:t.value.mapValue.fields}}function WS(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:we(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(v,E){return v.useProto3Json?(Be(E===void 0||typeof E=="string",58123),Ot.fromBase64String(E||"")):(Be(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Ot.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(v){const E=v.code===void 0?W.UNKNOWN:Qv(v.code);return new ne(E,v.message||"")})(h);t=new Jv(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Nd(r,i.document.name),l=hr(i.document.updateTime),h=i.document.createTime?hr(i.document.createTime):Te.min(),f=new nn({mapValue:{fields:i.document.fields}}),g=$t.newFoundDocument(o,l,h,f),v=i.targetIds||[],E=i.removedTargetIds||[];t=new ic(v,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Nd(r,i.document),l=i.readTime?hr(i.readTime):Te.min(),h=$t.newNoDocument(o,l),f=i.removedTargetIds||[];t=new ic([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Nd(r,i.document),l=i.removedTargetIds||[];t=new ic([],l,o,null)}else{if(!("filter"in e))return we(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new OS(o,l),f=i.targetId;t=new Yv(f,h)}}return t}function GS(r,e){let t;if(e instanceof ml)t={update:Ny(r,e.key,e.value)};else if(e instanceof Fc)t={delete:nf(r,e.key)};else if(e instanceof js)t={update:Ny(r,e.key,e.data),updateMask:nA(e.fieldMask)};else{if(!(e instanceof bS))return we(16599,{dt:e.type});t={verify:nf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof rl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof sl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof il)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof wc)return{fieldPath:h.field.canonicalString(),increment:f.Ae};throw we(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:qS(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we(27497)})(r,e.precondition)),t}function KS(r,e){return r&&r.length>0?(Be(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?hr(o.updateTime):hr(l);return h.isEqual(Te.min())&&(h=hr(l)),new kS(h,o.transformResults||[])})(t,e)))):[]}function QS(r,e){return{documents:[e0(r,e.path)]}}function YS(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=e0(r,o);const l=(function(v){if(v.length!==0)return r0(Bn.create(v,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(v){if(v.length!==0)return v.map((E=>(function(b){return{field:_o(b.field),direction:ZS(b.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=ef(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:o}}function JS(r){let e=HS(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Be(i===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(I){const b=n0(I);return b instanceof Bn&&bv(b)?b.getFilters():[b]})(t.where));let h=[];t.orderBy&&(h=(function(I){return I.map((b=>(function(q){return new vc(vo(q.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(b)))})(t.orderBy));let f=null;t.limit&&(f=(function(I){let b;return b=typeof I=="object"?I.value:I,Dc(b)?null:b})(t.limit));let g=null;t.startAt&&(g=(function(I){const b=!!I.before,O=I.values||[];return new _c(O,b)})(t.startAt));let v=null;return t.endAt&&(v=(function(I){const b=!I.before,O=I.values||[];return new _c(O,b)})(t.endAt)),pS(e,o,h,l,f,"F",g,v)}function XS(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function n0(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=vo(t.unaryFilter.field);return _t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=vo(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=vo(t.unaryFilter.field);return _t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=vo(t.unaryFilter.field);return _t.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}})(r):r.fieldFilter!==void 0?(function(t){return _t.create(vo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Bn.create(t.compositeFilter.filters.map((i=>n0(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we(1026)}})(t.compositeFilter.op))})(r):we(30097,{filter:r})}function ZS(r){return US[r]}function eA(r){return zS[r]}function tA(r){return BS[r]}function _o(r){return{fieldPath:r.canonicalString()}}function vo(r){return Dt.fromServerFormat(r.fieldPath)}function r0(r){return r instanceof _t?(function(t){if(t.op==="=="){if(_y(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NAN"}};if(yy(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_y(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NOT_NAN"}};if(yy(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_o(t.field),op:eA(t.op),value:t.value}}})(r):r instanceof Bn?(function(t){const i=t.getFilters().map((o=>r0(o)));return i.length===1?i[0]:{compositeFilter:{op:tA(t.op),filters:i}}})(r):we(54877,{filter:r})}function nA(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function s0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function i0(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class Lr{constructor(e,t,i,o,l=Te.min(),h=Te.min(),f=Ot.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rA{constructor(e){this.yt=e}}function sA(r){const e=JS({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Zd(e,e.limit,"L"):e}/**
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
 */class iA{constructor(){this.bn=new oA}addToCollectionParentIndex(e,t){return this.bn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Ps.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Ps.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class oA{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new It(Ge.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new It(Ge.comparator)).toArray()}}/**
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
 */const by={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},o0=41943040;class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(o0,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
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
 */class Vs{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Vs(0)}static ar(){return new Vs(-1)}}/**
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
 */const Dy="LruGarbageCollector",aA=1048576;function Vy([r,e],[t,i]){const o=Re(r,t);return o===0?Re(e,i):o}class lA{constructor(e){this.Pr=e,this.buffer=new It(Vy),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Vy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class uA{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){re(Dy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jo(t)?re(Dy,"Ignoring IndexedDB error during garbage collection: ",t):await Mo(t)}await this.Ar(3e5)}))}}class cA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return G.resolve(bc.ce);const i=new lA(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(by)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),by):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,o,l,h,f,g,v;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o)))).next((I=>(i=I,f=Date.now(),this.removeTargets(e,i,t)))).next((I=>(l=I,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((I=>(v=Date.now(),go()<=be.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${I} documents in `+(v-g)+`ms
Total Duration: ${v-E}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:I}))))}}function hA(r,e){return new cA(r,e)}/**
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
 */class dA{constructor(){this.changes=new Si((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class pA{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&Ka(i.mutation,o,gn.empty(),Je.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,ke()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=ke()){const o=mi();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=za();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=mi();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,ke())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=Br();const h=Ga(),f=(function(){return Ga()})();return t.forEach(((g,v)=>{const E=i.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof js)?l=l.insert(v.key,v):E!==void 0?(h.set(v.key,E.mutation.getFieldMask()),Ka(E.mutation,v,E.mutation.getFieldMask(),Je.now())):h.set(v.key,gn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((v,E)=>h.set(v,E))),t.forEach(((v,E)=>f.set(v,new fA(E,h.get(v)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=Ga();let o=new tt(((h,f)=>h-f)),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const v=t.get(g);if(v===null)return;let E=i.get(g)||gn.empty();E=f.applyToLocalView(v,E),i.set(g,E);const I=(o.get(f.batchId)||ke()).add(g);o=o.insert(f.batchId,I)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),v=g.key,E=g.value,I=zv();E.forEach((b=>{if(!l.has(b)){const O=Gv(t.get(b),i.get(b));O!==null&&I.set(b,O),l=l.add(b)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,I))}return G.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return mS(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Lv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(mi());let f=Za,g=l;return h.next((v=>G.forEach(v,((E,I)=>(f<I.largestBatchId&&(f=I.largestBatchId),l.get(E)?G.resolve():this.remoteDocumentCache.getEntry(e,E).next((b=>{g=g.insert(E,b)}))))).next((()=>this.populateOverlays(e,v,l))).next((()=>this.computeViews(e,g,v,ke()))).next((E=>({batchId:f,changes:Uv(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((i=>{let o=za();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=za();return this.indexManager.getCollectionParents(e,l).next((f=>G.forEach(f,(g=>{const v=(function(I,b){return new pl(b,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,i,o).next((E=>{E.forEach(((I,b)=>{h=h.insert(I,b)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,v)=>{const E=v.getKey();h.get(E)===null&&(h=h.insert(E,$t.newInvalidDocument(E)))}));let f=za();return h.forEach(((g,v)=>{const E=l.get(g);E!==void 0&&Ka(E.mutation,v,gn.empty(),Je.now()),Lc(t,v)&&(f=f.insert(g,v))})),f}))}}/**
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
 */class mA{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return G.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:hr(o.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:sA(o.bundledQuery),readTime:hr(o.readTime)}})(t)),G.resolve()}}/**
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
 */class gA{constructor(){this.overlays=new tt(fe.comparator),this.Lr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=mi();return G.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Lr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=mi(),l=t.length+1,h=new fe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new tt(((v,E)=>v-E));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>i){let E=l.get(v.largestBatchId);E===null&&(E=mi(),l=l.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const f=mi(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((v,E)=>f.set(v,E))),!(f.size()>=o)););return G.resolve(f)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(i.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new VS(t,i));let l=this.Lr.get(t);l===void 0&&(l=ke(),this.Lr.set(t,l)),this.Lr.set(t,l.add(i.key))}}/**
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
 */class yA{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
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
 */class Uf{constructor(){this.kr=new It(Ct.Kr),this.qr=new It(Ct.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new Ct(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Ct(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new fe(new Ge([])),i=new Ct(t,e),o=new Ct(t,e+1),l=[];return this.qr.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new fe(new Ge([])),i=new Ct(t,e),o=new Ct(t,e+1);let l=ke();return this.qr.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new Ct(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ct{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return fe.comparator(e.key,t.key)||Re(e.Jr,t.Jr)}static Ur(e,t){return Re(e.Jr,t.Jr)||fe.comparator(e.key,t.key)}}/**
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
 */class _A{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new It(Ct.Kr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new DS(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Hr=this.Hr.add(new Ct(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return G.resolve(h)}lookupMutationBatch(e,t){return G.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?Pf:this.Yn-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([i,o],(h=>{const f=this.Zr(h.Jr);l.push(f)})),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new It(Re);return t.forEach((o=>{const l=new Ct(o,0),h=new Ct(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,h],(f=>{i=i.add(f.Jr)}))})),G.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;fe.isDocumentKey(l)||(l=l.child(""));const h=new Ct(new fe(l),0);let f=new It(Re);return this.Hr.forEachWhile((g=>{const v=g.key.path;return!!i.isPrefixOf(v)&&(v.length===o&&(f=f.add(g.Jr)),!0)}),h),G.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Be(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Hr;return G.forEach(t.mutations,(o=>{const l=new Ct(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=i}))}nr(e){}containsKey(e,t){const i=new Ct(t,0),o=this.Hr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class vA{constructor(e){this.ti=e,this.docs=(function(){return new tt(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():$t.newInvalidDocument(t))}getEntries(e,t){let i=Br();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():$t.newInvalidDocument(o))})),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Br();const h=t.path,f=new fe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:v,value:{document:E}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||H1(q1(E),i)<=0||(o.has(E.key)||Lc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){we(9500)}ni(e,t){return G.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new wA(this)}getSize(e){return G.resolve(this.size)}}class wA extends dA{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(i)})),G.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class EA{constructor(e){this.persistence=e,this.ri=new Si((t=>Df(t)),Vf),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.ii=0,this.si=new Uf,this.targetCount=0,this.oi=Vs._r()}forEachTarget(e,t){return this.ri.forEach(((i,o)=>t(o))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),G.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Vs(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.lr(t),G.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ri.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ri.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),G.waitFor(l).next((()=>o))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.si.containsKey(t))}}/**
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
 */class a0{constructor(e,t){this._i={},this.overlays={},this.ai=new bc(0),this.ui=!1,this.ui=!0,this.ci=new yA,this.referenceDelegate=e(this),this.li=new EA(this),this.indexManager=new iA,this.remoteDocumentCache=(function(o){return new vA(o)})((i=>this.referenceDelegate.hi(i))),this.serializer=new rA(t),this.Pi=new mA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new _A(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){re("MemoryPersistence","Starting transaction:",e);const o=new TA(this.ai.next());return this.referenceDelegate.Ti(),i(o).next((l=>this.referenceDelegate.Ii(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return G.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class TA extends G1{constructor(e){super(),this.currentSequenceNumber=e}}class zf{constructor(e){this.persistence=e,this.Ri=new Uf,this.Ai=null}static Vi(e){return new zf(e)}get di(){if(this.Ai)return this.Ai;throw we(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),G.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.di,(i=>{const o=fe.fromPath(i);return this.mi(e,o).next((l=>{l||t.removeEntry(o,Te.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return G.or([()=>G.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Tc{constructor(e,t){this.persistence=e,this.fi=new Si((i=>Y1(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=hA(this,t)}static Vi(e,t){return new Tc(e,t)}Ti(){}Ii(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return G.forEach(this.fi,((i,o)=>this.wr(e,i,o).next((l=>l?G.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Te.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),G.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=nc(e.data.value)),t}wr(e,t,i){return G.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Bf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=o}static Es(e,t){let i=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Bf(e,t.fromCache,i,o)}}/**
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
 */class IA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xA{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return zE()?8:K1(qt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.gs(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ps(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new IA;return this.ys(e,t,h).next((f=>{if(l.result=f,this.As)return this.ws(e,t,h,f.size)}))})).next((()=>l.result))}ws(e,t,i,o){return i.documentReadCount<this.Vs?(go()<=be.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",yo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(go()<=be.DEBUG&&re("QueryEngine","Query:",yo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ds*o?(go()<=be.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",yo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cr(t))):G.resolve())}gs(e,t){if(Ty(t))return G.resolve(null);let i=cr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Zd(t,null,"F"),i=cr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=ke(...l);return this.fs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const v=this.Ss(t,f);return this.bs(t,v,h,g.readTime)?this.gs(e,Zd(t,null,"F")):this.Ds(e,v,t,g)}))))})))))}ps(e,t,i,o){return Ty(t)||o.isEqual(Te.min())?G.resolve(null):this.fs.getDocuments(e,i).next((l=>{const h=this.Ss(t,l);return this.bs(t,h,i,o)?G.resolve(null):(go()<=be.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),yo(t)),this.Ds(e,h,t,$1(o,Za)).next((f=>f)))}))}Ss(e,t){let i=new It(jv(e));return t.forEach(((o,l)=>{Lc(e,l)&&(i=i.add(l))})),i}bs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,i){return go()<=be.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",yo(t)),this.fs.getDocumentsMatchingQuery(e,t,Ps.min(),i)}Ds(e,t,i,o){return this.fs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const $f="LocalStore",SA=3e8;class AA{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new tt(Re),this.Fs=new Si((l=>Df(l)),Vf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function CA(r,e,t,i){return new AA(r,e,t,i)}async function l0(r,e){const t=xe(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=ke();for(const v of o){h.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}for(const v of l){f.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(i,g).next((v=>({Ns:v,removedBatchIds:h,addedBatchIds:f})))}))}))}function RA(r,e){const t=xe(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,g,v,E){const I=v.batch,b=I.keys();let O=G.resolve();return b.forEach((q=>{O=O.next((()=>E.getEntry(g,q))).next(($=>{const U=v.docVersions.get(q);Be(U!==null,48541),$.version.compareTo(U)<0&&(I.applyToRemoteDocument($,v),$.isValidDocument()&&($.setReadTime(v.commitVersion),E.addEntry($)))}))})),O.next((()=>f.mutationQueue.removeMutationBatch(g,I)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=ke();for(let v=0;v<f.mutationResults.length;++v)f.mutationResults[v].transformResults.length>0&&(g=g.add(f.batch.mutations[v].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function u0(r){const e=xe(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function kA(r,e){const t=xe(r),i=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const f=[];e.targetChanges.forEach(((E,I)=>{const b=o.get(I);if(!b)return;f.push(t.li.removeMatchingKeys(l,E.removedDocuments,I).next((()=>t.li.addMatchingKeys(l,E.addedDocuments,I))));let O=b.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?O=O.withResumeToken(Ot.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):E.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(E.resumeToken,i)),o=o.insert(I,O),(function($,U,X){return $.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=SA?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0})(b,O,E)&&f.push(t.li.updateTargetData(l,O))}));let g=Br(),v=ke();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(PA(l,h,e.documentUpdates).next((E=>{g=E.Bs,v=E.Ls}))),!i.isEqual(Te.min())){const E=t.li.getLastRemoteSnapshotVersion(l).next((I=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(E)}return G.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,v))).next((()=>g))})).then((l=>(t.vs=o,l)))}function PA(r,e,t){let i=ke(),o=ke();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let h=Br();return t.forEach(((f,g)=>{const v=l.get(f);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Te.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):re($f,"Ignoring outdated watch update for ",f,". Current version:",v.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function NA(r,e){const t=xe(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Pf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function bA(r,e){const t=xe(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.li.getTargetData(i,e).next((l=>l?(o=l,G.resolve(o)):t.li.allocateTargetId(i).next((h=>(o=new Lr(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.vs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function sf(r,e,t){const i=xe(r),o=i.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!jo(h))throw h;re($f,`Failed to update sequence numbers for target ${e}: ${h}`)}i.vs=i.vs.remove(e),i.Fs.delete(o.target)}function Oy(r,e,t){const i=xe(r);let o=Te.min(),l=ke();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,v,E){const I=xe(g),b=I.Fs.get(E);return b!==void 0?G.resolve(I.vs.get(b)):I.li.getTargetData(v,E)})(i,h,cr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?l:ke()))).next((f=>(DA(i,yS(e),f),{documents:f,ks:l})))))}function DA(r,e,t){let i=r.Ms.get(e)||Te.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.Ms.set(e,i)}class Ly{constructor(){this.activeTargetIds=IS()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VA{constructor(){this.vo=new Ly,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ly,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OA{Mo(e){}shutdown(){}}/**
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
 */const My="ConnectivityMonitor";class jy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){re(My,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){re(My,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gu=null;function of(){return Gu===null?Gu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Gu++,"0x"+Gu.toString(16)}/**
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
 */const bd="RestConnection",LA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class MA{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.$o=this.databaseId.database===gc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=of(),f=this.Qo(e,t.toUriEncodedString());re(bd,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,l);const{host:v}=new URL(f),E=ll(v);return this.zo(e,f,g,i,E).then((I=>(re(bd,`Received RPC '${e}' ${h}: `,I),I)),(I=>{throw xi(bd,`RPC '${e}' ${h} failed with error: `,I,"url: ",f,"request:",i),I}))}jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Lo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const i=LA[e];let o=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class jA{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const zt="WebChannelConnection",La=(r,e,t)=>{r.listen(e,(i=>{try{t(i)}catch(o){setTimeout((()=>{throw o}),0)}}))};class xo extends MA{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!xo.c_){const e=pv();La(e,fv.STAT_EVENT,(t=>{t.stat===Wd.PROXY?re(zt,"STAT_EVENT: detected buffering proxy"):t.stat===Wd.NOPROXY&&re(zt,"STAT_EVENT: detected no buffering proxy")})),xo.c_=!0}}zo(e,t,i,o,l){const h=of();return new Promise(((f,g)=>{const v=new hv;v.setWithCredentials(!0),v.listenOnce(dv.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case tc.NO_ERROR:const I=v.getResponseJson();re(zt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(I)),f(I);break;case tc.TIMEOUT:re(zt,`RPC '${e}' ${h} timed out`),g(new ne(W.DEADLINE_EXCEEDED,"Request time out"));break;case tc.HTTP_ERROR:const b=v.getStatus();if(re(zt,`RPC '${e}' ${h} failed with status:`,b,"response text:",v.getResponseText()),b>0){let O=v.getResponseJson();Array.isArray(O)&&(O=O[0]);const q=O==null?void 0:O.error;if(q&&q.status&&q.message){const $=(function(X){const te=X.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(te)>=0?te:W.UNKNOWN})(q.status);g(new ne($,q.message))}else g(new ne(W.UNKNOWN,"Server responded with status "+v.getStatus()))}else g(new ne(W.UNAVAILABLE,"Connection failed."));break;default:we(9055,{l_:e,streamId:h,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{re(zt,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);re(zt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",E,i,15)}))}T_(e,t,i){const o=of(),l=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const v=l.join("");re(zt,`Creating RPC '${e}' stream ${o}: ${v}`,f);const E=h.createWebChannel(v,f);this.I_(E);let I=!1,b=!1;const O=new jA({Jo:q=>{b?re(zt,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(I||(re(zt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),I=!0),re(zt,`RPC '${e}' stream ${o} sending:`,q),E.send(q))},Ho:()=>E.close()});return La(E,Ua.EventType.OPEN,(()=>{b||(re(zt,`RPC '${e}' stream ${o} transport opened.`),O.i_())})),La(E,Ua.EventType.CLOSE,(()=>{b||(b=!0,re(zt,`RPC '${e}' stream ${o} transport closed`),O.o_(),this.E_(E))})),La(E,Ua.EventType.ERROR,(q=>{b||(b=!0,xi(zt,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),O.o_(new ne(W.UNAVAILABLE,"The operation could not be completed")))})),La(E,Ua.EventType.MESSAGE,(q=>{var $;if(!b){const U=q.data[0];Be(!!U,16349);const X=U,te=(X==null?void 0:X.error)||(($=X[0])==null?void 0:$.error);if(te){re(zt,`RPC '${e}' stream ${o} received error:`,te);const ye=te.status;let ce=(function(k){const S=yt[k];if(S!==void 0)return Qv(S)})(ye),Se=te.message;ye==="NOT_FOUND"&&Se.includes("database")&&Se.includes("does not exist")&&Se.includes(this.databaseId.database)&&xi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ce===void 0&&(ce=W.INTERNAL,Se="Unknown error status: "+ye+" with message "+te.message),b=!0,O.o_(new ne(ce,Se)),E.close()}else re(zt,`RPC '${e}' stream ${o} received:`,U),O.__(U)}})),xo.u_(),setTimeout((()=>{O.s_()}),0),O}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return mv()}}/**
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
 */function FA(r){return new xo(r)}function Dd(){return typeof document<"u"?document:null}/**
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
 */function Uc(r){return new $S(r,!0)}/**
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
 */xo.c_=!1;class c0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Fy="PersistentStream";class h0{constructor(e,t,i,o,l,h,f,g){this.Ci=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new c0(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(zr(t.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new ne(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(Fy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(re(Fy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class UA extends h0{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=WS(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Te.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?hr(h.readTime):Te.min()})(e);return this.listener.H_(t,i)}Z_(e){const t={};t.database=rf(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=Jd(g)?{documents:QS(l,g)}:{query:YS(l,g).ft},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Xv(l,h.resumeToken);const v=ef(l,h.expectedCount);v!==null&&(f.expectedCount=v)}else if(h.snapshotVersion.compareTo(Te.min())>0){f.readTime=Ec(l,h.snapshotVersion.toTimestamp());const v=ef(l,h.expectedCount);v!==null&&(f.expectedCount=v)}return f})(this.serializer,e);const i=XS(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=rf(this.serializer),t.removeTarget=e,this.K_(t)}}class zA extends h0{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=KS(e.writeResults,e.commitTime),i=hr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=rf(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>GS(this.serializer,i)))};this.K_(t)}}/**
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
 */class BA{}class $A extends BA{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ne(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,tf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ne(W.UNKNOWN,l.toString())}))}jo(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.jo(e,tf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ne(W.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function qA(r,e,t,i){return new $A(r,e,t,i)}class HA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(zr(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const mr="RemoteStore";class WA{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Vs(1e3),this.Va=new Vs(1001),this.da=new Set,this.ma=[],this.fa=l,this.fa.Mo((h=>{i.enqueueAndForget((async()=>{Ai(this)&&(re(mr,"Restarting streams for network reachability change."),await(async function(g){const v=xe(g);v.da.add(4),await _l(v),v.ga.set("Unknown"),v.da.delete(4),await zc(v)})(this))}))})),this.ga=new HA(i,o)}}async function zc(r){if(Ai(r))for(const e of r.ma)await e(!0)}async function _l(r){for(const e of r.ma)await e(!1)}function af(r,e){return r.Ea.get(e)||void 0}function d0(r,e){const t=xe(r),i=af(t,e.targetId);if(i!==void 0&&t.Ia.has(i))return;const o=(function(f,g){const v=af(f,g);v!==void 0&&f.Ra.delete(v);const E=(function(b,O){return O%2!=0?b.Va.next():b.Aa.next()})(f,g);return f.Ea.set(g,E),f.Ra.set(E,g),E})(t,e.targetId);re(mr,"remoteStoreListen mapping SDK target ID to remote",e.targetId,o);const l=new Lr(e.target,o,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(o,l),Gf(t)?Wf(t):Fo(t).O_()&&Hf(t,l)}function qf(r,e){const t=xe(r),i=Fo(t),o=af(t,e);re(mr,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,o),t.Ia.delete(o),t.Ea.delete(e),t.Ra.delete(o),i.O_()&&f0(t,o),t.Ia.size===0&&(i.O_()?i.L_():Ai(t)&&t.ga.set("Unknown"))}function Hf(r,e){if(r.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=r.Ra.get(e.targetId);if(t===void 0)return void re(mr,"SDK target ID not found for remote ID: "+e.targetId);const i=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(i)}Fo(r).Z_(e)}function f0(r,e){r.pa.$e(e),Fo(r).X_(e)}function Wf(r){r.pa=new FS({getRemoteKeysForTarget:e=>{const t=r.Ra.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):ke()},At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Fo(r).start(),r.ga.ua()}function Gf(r){return Ai(r)&&!Fo(r).x_()&&r.Ia.size>0}function Ai(r){return xe(r).da.size===0}function p0(r){r.pa=void 0}async function GA(r){r.ga.set("Online")}async function KA(r){r.Ia.forEach(((e,t)=>{Hf(r,e)}))}async function QA(r,e){p0(r),Gf(r)?(r.ga.ha(e),Wf(r)):r.ga.set("Unknown")}async function YA(r,e,t){if(r.ga.set("Online"),e instanceof Jv&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds){if(o.Ia.has(f)){const g=o.Ra.get(f);g!==void 0&&(await o.remoteSyncer.rejectListen(g,h),o.Ea.delete(g),o.Ra.delete(f)),o.Ia.delete(f)}o.pa.removeTarget(f)}})(r,e)}catch(i){re(mr,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ic(r,i)}else if(e instanceof ic?r.pa.Xe(e):e instanceof Yv?r.pa.st(e):r.pa.tt(e),!t.isEqual(Te.min()))try{const i=await u0(r.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.pa.Tt(h);f.targetChanges.forEach(((v,E)=>{if(v.resumeToken.approximateByteSize()>0){const I=l.Ia.get(E);I&&l.Ia.set(E,I.withResumeToken(v.resumeToken,h))}})),f.targetMismatches.forEach(((v,E)=>{const I=l.Ia.get(v);if(!I)return;l.Ia.set(v,I.withResumeToken(Ot.EMPTY_BYTE_STRING,I.snapshotVersion)),f0(l,v);const b=new Lr(I.target,v,E,I.sequenceNumber);Hf(l,b)}));const g=(function(E,I){const b=new Map;I.targetChanges.forEach(((q,$)=>{const U=E.Ra.get($);U!==void 0&&b.set(U,q)}));let O=new tt(Re);return I.targetMismatches.forEach(((q,$)=>{const U=E.Ra.get(q);U!==void 0&&(O=O.insert(U,$))})),new gl(I.snapshotVersion,b,O,I.documentUpdates,I.resolvedLimboDocuments)})(l,f);return l.remoteSyncer.applyRemoteEvent(g)})(r,t)}catch(i){re(mr,"Failed to raise snapshot:",i),await Ic(r,i)}}async function Ic(r,e,t){if(!jo(e))throw e;r.da.add(1),await _l(r),r.ga.set("Offline"),t||(t=()=>u0(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{re(mr,"Retrying IndexedDB access"),await t(),r.da.delete(1),await zc(r)}))}function m0(r,e){return e().catch((t=>Ic(r,t,e)))}async function Bc(r){const e=xe(r),t=Os(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Pf;for(;JA(e);)try{const o=await NA(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,XA(e,o)}catch(o){await Ic(e,o)}g0(e)&&y0(e)}function JA(r){return Ai(r)&&r.Ta.length<10}function XA(r,e){r.Ta.push(e);const t=Os(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function g0(r){return Ai(r)&&!Os(r).x_()&&r.Ta.length>0}function y0(r){Os(r).start()}async function ZA(r){Os(r).ra()}async function eC(r){const e=Os(r);for(const t of r.Ta)e.ea(t.mutations)}async function tC(r,e,t){const i=r.Ta.shift(),o=Mf.from(i,e,t);await m0(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Bc(r)}async function nC(r,e){e&&Os(r).Y_&&await(async function(i,o){if((function(h){return LS(h)&&h!==W.ABORTED})(o.code)){const l=i.Ta.shift();Os(i).B_(),await m0(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Bc(i)}})(r,e),g0(r)&&y0(r)}async function Uy(r,e){const t=xe(r);t.asyncQueue.verifyOperationInProgress(),re(mr,"RemoteStore received new credentials");const i=Ai(t);t.da.add(3),await _l(t),i&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await zc(t)}async function rC(r,e){const t=xe(r);e?(t.da.delete(2),await zc(t)):e||(t.da.add(2),await _l(t),t.ga.set("Unknown"))}function Fo(r){return r.ya||(r.ya=(function(t,i,o){const l=xe(t);return l.sa(),new UA(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:GA.bind(null,r),Yo:KA.bind(null,r),t_:QA.bind(null,r),H_:YA.bind(null,r)}),r.ma.push((async e=>{e?(r.ya.B_(),Gf(r)?Wf(r):r.ga.set("Unknown")):(await r.ya.stop(),p0(r))}))),r.ya}function Os(r){return r.wa||(r.wa=(function(t,i,o){const l=xe(t);return l.sa(),new zA(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ZA.bind(null,r),t_:nC.bind(null,r),ta:eC.bind(null,r),na:tC.bind(null,r)}),r.ma.push((async e=>{e?(r.wa.B_(),await Bc(r)):(await r.wa.stop(),r.Ta.length>0&&(re(mr,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.wa}/**
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
 */class Kf{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Kf(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qf(r,e){if(zr("AsyncQueue",`${e}: ${r}`),jo(r))return new ne(W.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class So{static emptySet(e){return new So(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||fe.comparator(t.key,i.key):(t,i)=>fe.comparator(t.key,i.key),this.keyedMap=za(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof So)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new So;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class zy{constructor(){this.Sa=new tt(fe.comparator)}track(e){const t=e.doc.key,i=this.Sa.get(t);i?e.type!==0&&i.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&i.type!==1?this.Sa=this.Sa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Sa=this.Sa.remove(t):e.type===1&&i.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):we(63341,{Vt:e,ba:i}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class No{constructor(e,t,i,o,l,h,f,g,v){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new No(e,t,So.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class sC{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some((e=>e.Ma()))}}class iC{constructor(){this.queries=By(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,i){const o=xe(t),l=o.queries;o.queries=By(),l.forEach(((h,f)=>{for(const g of f.va)g.onError(i)}))})(this,new ne(W.ABORTED,"Firestore shutting down"))}}function By(){return new Si((r=>Mv(r)),Oc)}async function _0(r,e){const t=xe(r);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Fa()&&e.Ma()&&(i=2):(l=new sC,i=e.Ma()?0:1);try{switch(i){case 0:l.Ca=await t.onListen(o,!0);break;case 1:l.Ca=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Qf(h,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.va.push(e),e.Oa(t.onlineState),l.Ca&&e.Na(l.Ca)&&Yf(t)}async function v0(r,e){const t=xe(r),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.va.indexOf(e);h>=0&&(l.va.splice(h,1),l.va.length===0?o=e.Ma()?0:1:!l.Fa()&&e.Ma()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function oC(r,e){const t=xe(r);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.va)f.Na(o)&&(i=!0);h.Ca=o}}i&&Yf(t)}function aC(r,e,t){const i=xe(r),o=i.queries.get(e);if(o)for(const l of o.va)l.onError(t);i.queries.delete(e)}function Yf(r){r.xa.forEach((e=>{e.next()}))}var lf,$y;($y=lf||(lf={})).Ba="default",$y.Cache="cache";class w0{constructor(e,t,i){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=i||{}}Na(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new No(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const i=t!=="Offline";return(!this.options.Wa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=No.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==lf.Cache}}/**
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
 */class E0{constructor(e){this.key=e}}class T0{constructor(e){this.key=e}}class lC{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ke(),this.mutatedKeys=ke(),this.iu=jv(e),this.su=new So(this.iu)}get ou(){return this.tu}_u(e,t){const i=t?t.au:new zy,o=t?t.su:this.su;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,I)=>{const b=o.get(E),O=Lc(this.query,I)?I:null,q=!!b&&this.mutatedKeys.has(b.key),$=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let U=!1;b&&O?b.data.isEqual(O.data)?q!==$&&(i.track({type:3,doc:O}),U=!0):this.uu(b,O)||(i.track({type:2,doc:O}),U=!0,(g&&this.iu(O,g)>0||v&&this.iu(O,v)<0)&&(f=!0)):!b&&O?(i.track({type:0,doc:O}),U=!0):b&&!O&&(i.track({type:1,doc:b}),U=!0,(g||v)&&(f=!0)),U&&(O?(h=h.add(O),l=$?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{su:h,au:i,bs:f,mutatedKeys:l}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const h=e.au.Da();h.sort(((E,I)=>(function(O,q){const $=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{Vt:U})}};return $(O)-$(q)})(E.type,I.type)||this.iu(E.doc,I.doc))),this.cu(i),o=o??!1;const f=t&&!o?this.lu():[],g=this.ru.size===0&&this.current&&!o?1:0,v=g!==this.nu;return this.nu=g,h.length!==0||v?{snapshot:new No(this.query,e.su,l,h,e.mutatedKeys,g===0,v,!1,!!i&&i.resumeToken.approximateByteSize()>0),hu:f}:{hu:f}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new zy,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach((t=>this.tu=this.tu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.tu=this.tu.delete(t))),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ke(),this.su.forEach((i=>{this.Pu(i.key)&&(this.ru=this.ru.add(i.key))}));const t=[];return e.forEach((i=>{this.ru.has(i)||t.push(new T0(i))})),this.ru.forEach((i=>{e.has(i)||t.push(new E0(i))})),t}Tu(e){this.tu=e.ks,this.ru=ke();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return No.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Jf="SyncEngine";class uC{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class cC{constructor(e){this.key=e,this.Eu=!1}}class hC{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ru={},this.Au=new Si((f=>Mv(f)),Oc),this.Vu=new Map,this.du=new Set,this.mu=new tt(fe.comparator),this.fu=new Map,this.gu=new Uf,this.pu={},this.yu=new Map,this.wu=Vs.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function dC(r,e,t=!0){const i=R0(r);let o;const l=i.Au.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Iu()):o=await I0(i,e,t,!0),o}async function fC(r,e){const t=R0(r);await I0(t,e,!0,!1)}async function I0(r,e,t,i){const o=await bA(r.localStore,cr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await pC(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&d0(r.remoteStore,o),f}async function pC(r,e,t,i,o){r.bu=(I,b,O)=>(async function($,U,X,te){let ye=U.view._u(X);ye.bs&&(ye=await Oy($.localStore,U.query,!1).then((({documents:k})=>U.view._u(k,ye))));const ce=te&&te.targetChanges.get(U.targetId),Se=te&&te.targetMismatches.get(U.targetId)!=null,pe=U.view.applyChanges(ye,$.isPrimaryClient,ce,Se);return Hy($,U.targetId,pe.hu),pe.snapshot})(r,I,b,O);const l=await Oy(r.localStore,e,!0),h=new lC(e,l.ks),f=h._u(l.documents),g=yl.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),v=h.applyChanges(f,r.isPrimaryClient,g);Hy(r,t,v.hu);const E=new uC(e,t,h);return r.Au.set(e,E),r.Vu.has(t)?r.Vu.get(t).push(e):r.Vu.set(t,[e]),v.snapshot}async function mC(r,e,t){const i=xe(r),o=i.Au.get(e),l=i.Vu.get(o.targetId);if(l.length>1)return i.Vu.set(o.targetId,l.filter((h=>!Oc(h,e)))),void i.Au.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await sf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&qf(i.remoteStore,o.targetId),uf(i,o.targetId)})).catch(Mo)):(uf(i,o.targetId),await sf(i.localStore,o.targetId,!0))}async function gC(r,e){const t=xe(r),i=t.Au.get(e),o=t.Vu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),qf(t.remoteStore,i.targetId))}async function yC(r,e,t){const i=xC(r);try{const o=await(function(h,f){const g=xe(h),v=Je.now(),E=f.reduce(((O,q)=>O.add(q.key)),ke());let I,b;return g.persistence.runTransaction("Locally write mutations","readwrite",(O=>{let q=Br(),$=ke();return g.xs.getEntries(O,E).next((U=>{q=U,q.forEach(((X,te)=>{te.isValidDocument()||($=$.add(X))}))})).next((()=>g.localDocuments.getOverlayedDocuments(O,q))).next((U=>{I=U;const X=[];for(const te of f){const ye=NS(te,I.get(te.key).overlayedDocument);ye!=null&&X.push(new js(te.key,ye,kv(ye.value.mapValue),Kt.exists(!0)))}return g.mutationQueue.addMutationBatch(O,v,X,f)})).next((U=>{b=U;const X=U.applyToLocalDocumentSet(I,$);return g.documentOverlayCache.saveOverlays(O,U.batchId,X)}))})).then((()=>({batchId:b.batchId,changes:Uv(I)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let v=h.pu[h.currentUser.toKey()];v||(v=new tt(Re)),v=v.insert(f,g),h.pu[h.currentUser.toKey()]=v})(i,o.batchId,t),await vl(i,o.changes),await Bc(i.remoteStore)}catch(o){const l=Qf(o,"Failed to persist write");t.reject(l)}}async function x0(r,e){const t=xe(r);try{const i=await kA(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.fu.get(l);h&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.Eu=!0:o.modifiedDocuments.size>0?Be(h.Eu,14607):o.removedDocuments.size>0&&(Be(h.Eu,42227),h.Eu=!1))})),await vl(t,i,e)}catch(i){await Mo(i)}}function qy(r,e,t){const i=xe(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Au.forEach(((l,h)=>{const f=h.view.Oa(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=xe(h);g.onlineState=f;let v=!1;g.queries.forEach(((E,I)=>{for(const b of I.va)b.Oa(f)&&(v=!0)})),v&&Yf(g)})(i.eventManager,e),o.length&&i.Ru.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function _C(r,e,t){const i=xe(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.fu.get(e),l=o&&o.key;if(l){let h=new tt(fe.comparator);h=h.insert(l,$t.newNoDocument(l,Te.min()));const f=ke().add(l),g=new gl(Te.min(),new Map,new tt(Re),h,f);await x0(i,g),i.mu=i.mu.remove(l),i.fu.delete(e),Xf(i)}else await sf(i.localStore,e,!1).then((()=>uf(i,e,t))).catch(Mo)}async function vC(r,e){const t=xe(r),i=e.batch.batchId;try{const o=await RA(t.localStore,e);A0(t,i,null),S0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await vl(t,o)}catch(o){await Mo(o)}}async function wC(r,e,t){const i=xe(r);try{const o=await(function(h,f){const g=xe(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let E;return g.mutationQueue.lookupMutationBatch(v,f).next((I=>(Be(I!==null,37113),E=I.keys(),g.mutationQueue.removeMutationBatch(v,I)))).next((()=>g.mutationQueue.performConsistencyCheck(v))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(v,E,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E))).next((()=>g.localDocuments.getDocuments(v,E)))}))})(i.localStore,e);A0(i,e,t),S0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await vl(i,o)}catch(o){await Mo(o)}}function S0(r,e){(r.yu.get(e)||[]).forEach((t=>{t.resolve()})),r.yu.delete(e)}function A0(r,e,t){const i=xe(r);let o=i.pu[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.pu[i.currentUser.toKey()]=o}}function uf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Vu.get(e))r.Au.delete(i),t&&r.Ru.Du(i,t);r.Vu.delete(e),r.isPrimaryClient&&r.gu.Gr(e).forEach((i=>{r.gu.containsKey(i)||C0(r,i)}))}function C0(r,e){r.du.delete(e.path.canonicalString());const t=r.mu.get(e);t!==null&&(qf(r.remoteStore,t),r.mu=r.mu.remove(e),r.fu.delete(t),Xf(r))}function Hy(r,e,t){for(const i of t)i instanceof E0?(r.gu.addReference(i.key,e),EC(r,i)):i instanceof T0?(re(Jf,"Document no longer in limbo: "+i.key),r.gu.removeReference(i.key,e),r.gu.containsKey(i.key)||C0(r,i.key)):we(19791,{Cu:i})}function EC(r,e){const t=e.key,i=t.path.canonicalString();r.mu.get(t)||r.du.has(i)||(re(Jf,"New document in limbo: "+t),r.du.add(i),Xf(r))}function Xf(r){for(;r.du.size>0&&r.mu.size<r.maxConcurrentLimboResolutions;){const e=r.du.values().next().value;r.du.delete(e);const t=new fe(Ge.fromString(e)),i=r.wu.next();r.fu.set(i,new cC(t)),r.mu=r.mu.insert(t,i),d0(r.remoteStore,new Lr(cr(Of(t.path)),i,"TargetPurposeLimboResolution",bc.ce))}}async function vl(r,e,t){const i=xe(r),o=[],l=[],h=[];i.Au.isEmpty()||(i.Au.forEach(((f,g)=>{h.push(i.bu(g,e,t).then((v=>{var E;if((v||t)&&i.isPrimaryClient){const I=v?!v.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:E.current;i.sharedClientState.updateQueryState(g.targetId,I?"current":"not-current")}if(v){o.push(v);const I=Bf.Es(g.targetId,v);l.push(I)}})))})),await Promise.all(h),i.Ru.H_(o),await(async function(g,v){const E=xe(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>G.forEach(v,(b=>G.forEach(b.Ts,(O=>E.persistence.referenceDelegate.addReference(I,b.targetId,O))).next((()=>G.forEach(b.Is,(O=>E.persistence.referenceDelegate.removeReference(I,b.targetId,O)))))))))}catch(I){if(!jo(I))throw I;re($f,"Failed to update sequence numbers: "+I)}for(const I of v){const b=I.targetId;if(!I.fromCache){const O=E.vs.get(b),q=O.snapshotVersion,$=O.withLastLimboFreeSnapshotVersion(q);E.vs=E.vs.insert(b,$)}}})(i.localStore,l))}async function TC(r,e){const t=xe(r);if(!t.currentUser.isEqual(e)){re(Jf,"User change. New user:",e.toKey());const i=await l0(t.localStore,e);t.currentUser=e,(function(l,h){l.yu.forEach((f=>{f.forEach((g=>{g.reject(new ne(W.CANCELLED,h))}))})),l.yu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await vl(t,i.Ns)}}function IC(r,e){const t=xe(r),i=t.fu.get(e);if(i&&i.Eu)return ke().add(i.key);{let o=ke();const l=t.Vu.get(e);if(!l)return o;for(const h of l){const f=t.Au.get(h);o=o.unionWith(f.view.ou)}return o}}function R0(r){const e=xe(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=x0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_C.bind(null,e),e.Ru.H_=oC.bind(null,e.eventManager),e.Ru.Du=aC.bind(null,e.eventManager),e}function xC(r){const e=xe(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wC.bind(null,e),e}class xc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return CA(this.persistence,new xA,e.initialUser,this.serializer)}xu(e){return new a0(zf.Vi,this.serializer)}Mu(e){return new VA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xc.provider={build:()=>new xc};class SC extends xc{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){Be(this.persistence.referenceDelegate instanceof Tc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new uA(i,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new a0((i=>Tc.Vi(i,t)),this.serializer)}}class cf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>qy(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=TC.bind(null,this.syncEngine),await rC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new iC})()}createDatastore(e){const t=Uc(e.databaseInfo.databaseId),i=FA(e.databaseInfo);return qA(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new WA(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>qy(this.syncEngine,t,0)),(function(){return jy.v()?new jy:new OA})())}createSyncEngine(e,t){return(function(o,l,h,f,g,v,E){const I=new hC(o,l,h,f,g,v);return E&&(I.Su=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=xe(o);re(mr,"RemoteStore shutting down."),l.da.add(5),await _l(l),l.fa.shutdown(),l.ga.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}cf.provider={build:()=>new cf};/**
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
 */class k0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):zr("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ls="FirestoreClient";class AC{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=o,this.user=Bt.UNAUTHENTICATED,this.clientId=kf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{re(Ls,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(re(Ls,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Qf(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Vd(r,e){r.asyncQueue.verifyOperationInProgress(),re(Ls,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await l0(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Wy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await CC(r);re(Ls,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>Uy(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>Uy(e.remoteStore,o))),r._onlineComponents=e}async function CC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(Ls,"Using user provided OfflineComponentProvider");try{await Vd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;xi("Error using user provided cache. Falling back to memory cache: "+t),await Vd(r,new xc)}}else re(Ls,"Using default OfflineComponentProvider"),await Vd(r,new SC(void 0));return r._offlineComponents}async function P0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(Ls,"Using user provided OnlineComponentProvider"),await Wy(r,r._uninitializedComponentsProvider._online)):(re(Ls,"Using default OnlineComponentProvider"),await Wy(r,new cf))),r._onlineComponents}function RC(r){return P0(r).then((e=>e.syncEngine))}async function N0(r){const e=await P0(r),t=e.eventManager;return t.onListen=dC.bind(null,e.syncEngine),t.onUnlisten=mC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=fC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gC.bind(null,e.syncEngine),t}function kC(r,e,t={}){const i=new jr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,v){const E=new k0({next:b=>{E.Ku(),h.enqueueAndForget((()=>v0(l,I)));const O=b.docs.has(f);!O&&b.fromCache?v.reject(new ne(W.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&b.fromCache&&g&&g.source==="server"?v.reject(new ne(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(b)},error:b=>v.reject(b)}),I=new w0(Of(f.path),E,{includeMetadataChanges:!0,Wa:!0});return _0(l,I)})(await N0(r),r.asyncQueue,e,t,i))),i.promise}function PC(r,e,t={}){const i=new jr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,v){const E=new k0({next:b=>{E.Ku(),h.enqueueAndForget((()=>v0(l,I))),b.fromCache&&g.source==="server"?v.reject(new ne(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(b)},error:b=>v.reject(b)}),I=new w0(f,E,{includeMetadataChanges:!0,Wa:!0});return _0(l,I)})(await N0(r),r.asyncQueue,e,t,i))),i.promise}function NC(r,e){const t=new jr;return r.asyncQueue.enqueueAndForget((async()=>yC(await RC(r),e,t))),t.promise}/**
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
 */function b0(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const bC="ComponentProvider",Gy=new Map;function DC(r,e,t,i,o){return new Z1(r,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,b0(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,i)}/**
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
 */const D0="firestore.googleapis.com",Ky=!0;class Qy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ne(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=D0,this.ssl=Ky}else this.host=e.host,this.ssl=e.ssl??Ky;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=o0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aA)throw new ne(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}B1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=b0(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $c{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new b1;switch(i.type){case"firstParty":return new L1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ne(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Gy.get(t);i&&(re(bC,"Removing Datastore"),Gy.delete(t),i.terminate())})(this),Promise.resolve()}}function VC(r,e,t,i={}){var v;r=Cn(r,$c);const o=ll(e),l=r._getSettings(),h={...l,emulatorOptions:r._getEmulatorOptions()},f=`${e}:${t}`;o&&m_(`https://${f}`),l.host!==D0&&l.host!==f&&xi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:f,ssl:o,emulatorOptions:i};if(!yi(g,h)&&(r._setSettings(g),i.mockUserToken)){let E,I;if(typeof i.mockUserToken=="string")E=i.mockUserToken,I=Bt.MOCK_USER;else{E=VE(i.mockUserToken,(v=r._app)==null?void 0:v.options.projectId);const b=i.mockUserToken.sub||i.mockUserToken.user_id;if(!b)throw new ne(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new Bt(b)}r._authCredentials=new D1(new yv(E,I))}}/**
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
 */class Uo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Uo(this.firestore,e,this._query)}}class ft{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(fl(t,ft._jsonSchema))return new ft(e,i||null,new fe(Ge.fromString(t.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:vt("string",ft._jsonSchemaVersion),referencePath:vt("string")};class ks extends Uo{constructor(e,t,i){super(e,t,Of(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new fe(e))}withConverter(e){return new ks(this.firestore,e,this._path)}}function wl(r,e,...t){if(r=Xe(r),_v("collection","path",e),r instanceof $c){const i=Ge.fromString(e,...t);return ly(i),new ks(r,null,i)}{if(!(r instanceof ft||r instanceof ks))throw new ne(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ge.fromString(e,...t));return ly(i),new ks(r.firestore,null,i)}}function sn(r,e,...t){if(r=Xe(r),arguments.length===1&&(e=kf.newId()),_v("doc","path",e),r instanceof $c){const i=Ge.fromString(e,...t);return ay(i),new ft(r,null,new fe(i))}{if(!(r instanceof ft||r instanceof ks))throw new ne(W.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ge.fromString(e,...t));return ay(i),new ft(r.firestore,r instanceof ks?r.converter:null,new fe(i))}}/**
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
 */const Yy="AsyncQueue";class Jy{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new c0(this,"async_queue_retry"),this.lc=()=>{const i=Dd();i&&re(Yy,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.hc=e;const t=Dd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=Dd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const t=new jr;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!jo(e))throw e;re(Yy,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const t=this.hc.then((()=>(this.ac=!0,e().catch((i=>{throw this._c=i,this.ac=!1,zr("INTERNAL UNHANDLED ERROR: ",Xy(i)),i})).then((i=>(this.ac=!1,i))))));return this.hc=t,t}enqueueAfterDelay(e,t,i){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const o=Kf.createAndSchedule(this,e,t,i,(l=>this.Ec(l)));return this.oc.push(o),o}Pc(){this._c&&we(47125,{Rc:Xy(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function Xy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Fs extends $c{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Jy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jy(e),this._firestoreClient=void 0,await e}}}function V0(r,e){const t=typeof r=="object"?r:__(),i=typeof r=="string"?r:gc,o=gf(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=bE("firestore");l&&VC(o,...l)}return o}function qc(r){if(r._terminated)throw new ne(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||OC(r),r._firestoreClient}function OC(r){var i,o,l,h;const e=r._freezeSettings(),t=DC(r._databaseId,((i=r._app)==null?void 0:i.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new AC(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(g){const v=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(v),_online:v}})(r._componentsProvider))}/**
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
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(Ot.fromBase64String(e))}catch(t){throw new ne(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sn(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fl(e,Sn._jsonSchema))return Sn.fromBase64String(e.bytes)}}Sn._jsonSchemaVersion="firestore/bytes/1.0",Sn._jsonSchema={type:vt("string",Sn._jsonSchemaVersion),bytes:vt("string")};/**
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
 */class Hc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Wc{constructor(e){this._methodName=e}}/**
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
 */class dr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dr._jsonSchemaVersion}}static fromJSON(e){if(fl(e,dr._jsonSchema))return new dr(e.latitude,e.longitude)}}dr._jsonSchemaVersion="firestore/geoPoint/1.0",dr._jsonSchema={type:vt("string",dr._jsonSchemaVersion),latitude:vt("number"),longitude:vt("number")};/**
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
 */class zn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:zn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fl(e,zn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new zn(e.vectorValues);throw new ne(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}zn._jsonSchemaVersion="firestore/vectorValue/1.0",zn._jsonSchema={type:vt("string",zn._jsonSchemaVersion),vectorValues:vt("object")};/**
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
 */const LC=/^__.*__$/;class MC{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new js(e,this.data,this.fieldMask,t,this.fieldTransforms):new ml(e,this.data,t,this.fieldTransforms)}}class O0{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new js(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function L0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{dataSource:r})}}class Zf{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.fc(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Zf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.i({path:t,arrayElement:!1});return i.wc(e),i}Sc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.i({path:t,arrayElement:!1});return i.fc(),i}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Sc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(L0(this.dataSource)&&LC.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class jC{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Uc(e)}V(e,t,i,o=!1){return new Zf({dataSource:e,methodName:t,targetDoc:i,path:Dt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function El(r){const e=r._freezeSettings(),t=Uc(r._databaseId);return new jC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function ep(r,e,t,i,o,l={}){const h=r.V(l.merge||l.mergeFields?2:0,e,t,o);np("Data must be an object, but it was:",h,i);const f=F0(i,h);let g,v;if(l.merge)g=new gn(h.fieldMask),v=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const I of l.mergeFields){const b=bo(e,I,t);if(!h.contains(b))throw new ne(W.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);B0(E,b)||E.push(b)}g=new gn(E),v=h.fieldTransforms.filter((I=>g.covers(I.field)))}else g=null,v=h.fieldTransforms;return new MC(new nn(f),g,v)}class Gc extends Wc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gc}}class tp extends Wc{_toFieldTransform(e){return new CS(e.path,new rl)}isEqual(e){return e instanceof tp}}function M0(r,e,t,i){const o=r.V(1,e,t);np("Data must be an object, but it was:",o,i);const l=[],h=nn.empty();Ms(i,((g,v)=>{const E=z0(e,g,t);v=Xe(v);const I=o.Sc(E);if(v instanceof Gc)l.push(E);else{const b=Tl(v,I);b!=null&&(l.push(E),h.set(E,b))}}));const f=new gn(l);return new O0(h,f,o.fieldTransforms)}function j0(r,e,t,i,o,l){const h=r.V(1,e,t),f=[bo(e,i,t)],g=[o];if(l.length%2!=0)throw new ne(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<l.length;b+=2)f.push(bo(e,l[b])),g.push(l[b+1]);const v=[],E=nn.empty();for(let b=f.length-1;b>=0;--b)if(!B0(v,f[b])){const O=f[b];let q=g[b];q=Xe(q);const $=h.Sc(O);if(q instanceof Gc)v.push(O);else{const U=Tl(q,$);U!=null&&(v.push(O),E.set(O,U))}}const I=new gn(v);return new O0(E,I,h.fieldTransforms)}function FC(r,e,t,i=!1){return Tl(t,r.V(i?4:3,e))}function Tl(r,e){if(U0(r=Xe(r)))return np("Unsupported field value:",e,r),F0(r,e);if(r instanceof Wc)return(function(i,o){if(!L0(o.dataSource))throw o.Dc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Dc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=Tl(f,o.bc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(i,o){if((i=Xe(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return xS(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Je.fromDate(i);return{timestampValue:Ec(o.serializer,l)}}if(i instanceof Je){const l=new Je(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ec(o.serializer,l)}}if(i instanceof dr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Sn)return{bytesValue:Xv(o.serializer,i._byteString)};if(i instanceof ft){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.Dc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Ff(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof zn)return(function(h,f){const g=h instanceof zn?h.toArray():h;return{mapValue:{fields:{[Cv]:{stringValue:Rv},[yc]:{arrayValue:{values:g.map((E=>{if(typeof E!="number")throw f.Dc("VectorValues must only contain numeric values.");return Lf(f.serializer,E)}))}}}}}})(i,o);if(i0(i))return i._toProto(o.serializer);throw o.Dc(`Unsupported field value: ${Nc(i)}`)})(r,e)}function F0(r,e){const t={};return Ev(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ms(r,((i,o)=>{const l=Tl(o,e.yc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function U0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Je||r instanceof dr||r instanceof Sn||r instanceof ft||r instanceof Wc||r instanceof zn||i0(r))}function np(r,e,t){if(!U0(t)||!vv(t)){const i=Nc(t);throw i==="an object"?e.Dc(r+" a custom object"):e.Dc(r+" "+i)}}function bo(r,e,t){if((e=Xe(e))instanceof Hc)return e._internalPath;if(typeof e=="string")return z0(r,e);throw Sc("Field path arguments must be of type string or ",r,!1,void 0,t)}const UC=new RegExp("[~\\*/\\[\\]]");function z0(r,e,t){if(e.search(UC)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Hc(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Sc(r,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new ne(W.INVALID_ARGUMENT,f+r+g)}function B0(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class zC{convertValue(e,t="none"){switch(Ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ms(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var i,o,l;const t=(l=(o=(i=e.fields)==null?void 0:i[yc].arrayValue)==null?void 0:o.values)==null?void 0:l.map((h=>ht(h.doubleValue)));return new zn(t)}convertGeoPoint(e){return new dr(ht(e.latitude),ht(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Vc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(el(e));default:return null}}convertTimestamp(e){const t=Ns(e);return new Je(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ge.fromString(e);Be(s0(i),9688,{name:e});const o=new tl(i.get(1),i.get(3)),l=new fe(i.popFirst(5));return o.isEqual(t)||zr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class $0 extends zC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,t)}}function q0(){return new tp("serverTimestamp")}const Zy="@firebase/firestore",e_="4.14.1";/**
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
 */class H0{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(bo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class BC extends H0{data(){return super.data()}}/**
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
 */function $C(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ne(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rp{}class qC extends rp{}function sp(r,e,...t){let i=[];e instanceof rp&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof op)).length,f=l.filter((g=>g instanceof Kc)).length;if(h>1||h>0&&f>0)throw new ne(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)r=o._apply(r);return r}class Kc extends qC{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Kc(e,t,i)}_apply(e){const t=this._parse(e);return W0(e._query,t),new Uo(e.firestore,e.converter,Xd(e._query,t))}_parse(e){const t=El(e.firestore);return(function(l,h,f,g,v,E,I){let b;if(v.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ne(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){n_(I,E);const q=[];for(const $ of I)q.push(t_(g,l,$));b={arrayValue:{values:q}}}else b=t_(g,l,I)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||n_(I,E),b=FC(f,h,I,E==="in"||E==="not-in");return _t.create(v,E,b)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ip(r,e,t){const i=e,o=bo("where",r);return Kc._create(o,i,t)}class op extends rp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new op(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Bn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)W0(h,g),h=Xd(h,g)})(e._query,t),new Uo(e.firestore,e.converter,Xd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function t_(r,e,t){if(typeof(t=Xe(t))=="string"){if(t==="")throw new ne(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lv(e)&&t.indexOf("/")!==-1)throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ge.fromString(t));if(!fe.isDocumentKey(i))throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return gy(r,new fe(i))}if(t instanceof ft)return gy(r,t._key);throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nc(t)}.`)}function n_(r,e){if(!Array.isArray(r)||r.length===0)throw new ne(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function W0(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ne(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function ap(r,e,t){let i;return i=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,i}class $a{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gi extends H0{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new oc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(bo("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=gi._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}gi._jsonSchemaVersion="firestore/documentSnapshot/1.0",gi._jsonSchema={type:vt("string",gi._jsonSchemaVersion),bundleSource:vt("string","DocumentSnapshot"),bundleName:vt("string"),bundle:vt("string")};class oc extends gi{data(e={}){return super.data(e)}}class Ao{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new $a(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new oc(this._firestore,this._userDataWriter,i.key,i,new $a(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new oc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new $a(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new oc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new $a(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,E=-1;return f.type!==0&&(v=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:HC(f.type),doc:g,oldIndex:v,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ao._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=kf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function HC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:r})}}/**
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
 */Ao._jsonSchemaVersion="firestore/querySnapshot/1.0",Ao._jsonSchema={type:vt("string",Ao._jsonSchemaVersion),bundleSource:vt("string","QuerySnapshot"),bundleName:vt("string"),bundle:vt("string")};/**
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
 */class WC{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=El(e)}set(e,t,i){this._verifyNotCommitted();const o=Od(e,this._firestore),l=ap(o.converter,t,i),h=ep(this._dataReader,"WriteBatch.set",o._key,l,o.converter!==null,i);return this._mutations.push(h.toMutation(o._key,Kt.none())),this}update(e,t,i,...o){this._verifyNotCommitted();const l=Od(e,this._firestore);let h;return h=typeof(t=Xe(t))=="string"||t instanceof Hc?j0(this._dataReader,"WriteBatch.update",l._key,t,i,o):M0(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(h.toMutation(l._key,Kt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Od(e,this._firestore);return this._mutations=this._mutations.concat(new Fc(t._key,Kt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ne(W.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Od(r,e){if((r=Xe(r)).firestore!==e)throw new ne(W.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */function lp(r){r=Cn(r,ft);const e=Cn(r.firestore,Fs),t=qc(e);return kC(t,r._key).then((i=>YC(e,r,i)))}function up(r){r=Cn(r,Uo);const e=Cn(r.firestore,Fs),t=qc(e),i=new $0(e);return $C(r._query),PC(t,r._query).then((o=>new Ao(e,i,r,o)))}function GC(r,e,t){r=Cn(r,ft);const i=Cn(r.firestore,Fs),o=ap(r.converter,e,t),l=El(i);return Il(i,[ep(l,"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Kt.none())])}function Do(r,e,t,...i){r=Cn(r,ft);const o=Cn(r.firestore,Fs),l=El(o);let h;return h=typeof(e=Xe(e))=="string"||e instanceof Hc?j0(l,"updateDoc",r._key,e,t,i):M0(l,"updateDoc",r._key,e),Il(o,[h.toMutation(r._key,Kt.exists(!0))])}function KC(r){return Il(Cn(r.firestore,Fs),[new Fc(r._key,Kt.none())])}function QC(r,e){const t=Cn(r.firestore,Fs),i=sn(r),o=ap(r.converter,e),l=El(r.firestore);return Il(t,[ep(l,"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,Kt.exists(!1))]).then((()=>i))}function Il(r,e){const t=qc(r);return NC(t,e)}function YC(r,e,t){const i=t.docs.get(e._key),o=new $0(r);return new gi(r,o,e._key,i,new $a(t.hasPendingWrites,t.fromCache),e.converter)}function JC(r){return r=Cn(r,Fs),qc(r),new WC(r,(e=>Il(r,e)))}(function(e,t=!0){N1(Vo),Co(new _i("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Fs(new V1(i.getProvider("auth-internal")),new M1(h,i.getProvider("app-check-internal")),eS(h,o),h);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Cs(Zy,e_,e),Cs(Zy,e_,"esm2020")})();const G0={apiKey:"AIzaSyCAaT4WAVfQ1x-l1NvaaGB4nVMHEQDzigA",authDomain:"gestion-de-solicitudes-7ca4f.firebaseapp.com",projectId:"gestion-de-solicitudes-7ca4f",storageBucket:"gestion-de-solicitudes-7ca4f.firebasestorage.app",messagingSenderId:"503400175578",appId:"1:503400175578:web:ca1f54c7438a46ebbc12e3"},K0=yf(G0),rn=V0(K0),dt=uv(K0),Q0=()=>QT().find(r=>r.name==="secundaria")??yf(G0,"secundaria"),xl=()=>uv(Q0()),Y0=()=>V0(Q0());/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ZC=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),r_=r=>{const e=ZC(r);return e.charAt(0).toUpperCase()+e.slice(1)},J0=(...r)=>r.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var eR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=ae.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:h,...f},g)=>ae.createElement("svg",{ref:g,...eR,width:e,height:e,stroke:r,strokeWidth:i?Number(t)*24/Number(e):t,className:J0("lucide",o),...f},[...h.map(([v,E])=>ae.createElement(v,E)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=(r,e)=>{const t=ae.forwardRef(({className:i,...o},l)=>ae.createElement(tR,{ref:l,iconNode:e,className:J0(`lucide-${XC(r_(r))}`,`lucide-${r}`,i),...o}));return t.displayName=r_(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],X0=nt("arrow-left",nR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],sR=nt("chevron-down",rR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Sl=nt("circle-check",iR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],hf=nt("clock",oR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],lR=nt("copy",aR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Z0=nt("eye-off",uR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ew=nt("eye",cR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]],dR=nt("file-plus",hR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],cp=nt("file-text",fR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],mR=nt("house",pR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],yR=nt("lock",gR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],vR=nt("log-out",_R);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],tw=nt("mail",wR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],TR=nt("menu",ER);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],xR=nt("message-square",IR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],AR=nt("pencil",SR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],s_=nt("shield",CR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],kR=nt("trash-2",RR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],NR=nt("trending-up",PR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],nw=nt("triangle-alert",bR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DR=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],VR=nt("user-plus",DR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OR=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],LR=nt("user",OR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MR=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],jR=nt("users",MR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],df=nt("x",FR);function rw({size:r=48}){return _.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[_.jsx("rect",{width:"48",height:"48",rx:"12",fill:"#1E3FAE"}),_.jsx("rect",{x:"7",y:"12",width:"34",height:"24",rx:"4",fill:"rgba(255,255,255,0.12)",stroke:"rgba(255,255,255,0.25)",strokeWidth:"1"}),_.jsx("circle",{cx:"7",cy:"24",r:"4",fill:"#1E3FAE"}),_.jsx("circle",{cx:"41",cy:"24",r:"4",fill:"#1E3FAE"}),_.jsx("line",{x1:"11",y1:"24",x2:"37",y2:"24",stroke:"rgba(255,255,255,0.2)",strokeWidth:"1",strokeDasharray:"2.5 2"}),_.jsx("text",{x:"24",y:"21",textAnchor:"middle",dominantBaseline:"middle",fontSize:"13",fontWeight:"800",fill:"white",fontFamily:"Inter, Arial, sans-serif",children:"G"}),_.jsx("text",{x:"24",y:"32",textAnchor:"middle",dominantBaseline:"middle",fontSize:"13",fontWeight:"800",fill:"white",fontFamily:"Inter, Arial, sans-serif",children:"S"})]})}function hp({iconSize:r=38,layout:e="horizontal"}){return _.jsxs("div",{className:`flex ${e==="vertical"?"flex-col":"items-center"} gap-3 font-sans`,children:[_.jsx(rw,{size:r}),_.jsxs("div",{className:e==="vertical"?"text-center":"",children:[_.jsx("div",{className:"text-gray-900 text-[19px] font-extrabold leading-none tracking-tight",children:"GestioSync"}),_.jsx("div",{className:"text-gray-400 text-[11px] font-bold uppercase tracking-[0.1em] mt-1",children:"Plataforma"})]})]})}function sw({iconSize:r=38,layout:e="horizontal"}){return _.jsxs("div",{className:`flex ${e==="vertical"?"flex-col":"items-center"} gap-3 font-sans`,children:[_.jsx(rw,{size:r}),_.jsxs("div",{className:e==="vertical"?"text-center":"",children:[_.jsx("div",{className:"text-white text-[19px] font-extrabold leading-none tracking-tight",children:"GestioSync"}),_.jsx("div",{className:"text-white/60 text-[11px] font-bold uppercase tracking-[0.1em] mt-1",children:"Plataforma"})]})]})}function iw(){return _.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:[_.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),_.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),_.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),_.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})}function UR({onNavigateToForgot:r,onNavigateToRegister:e}){const[t,i]=ae.useState(""),[o,l]=ae.useState(""),[h,f]=ae.useState(!1),[g,v]=ae.useState(!1),[E,I]=ae.useState(!1),[b,O]=ae.useState({}),q=()=>{const X={};return t?/\S+@\S+\.\S+/.test(t)||(X.email="Ese correo no parece válido."):X.email="Escribe tu correo.",o||(X.password="Escribe tu contraseña."),X},$=async()=>{const X=q();if(Object.keys(X).length>0){O(X);return}O({}),I(!0);try{await gx(dt,g?Z_:Sf),await W_(dt,t,o)}catch(te){I(!1);let ye="No pudimos iniciar sesión. Intenta de nuevo.";te instanceof Vt&&(te.code==="auth/invalid-credential"||te.code==="auth/user-not-found"||te.code==="auth/wrong-password"?ye="Correo o contraseña incorrectos.":te.code==="auth/too-many-requests"&&(ye="Demasiados intentos. Espera un momento y vuelve a probar.")),O({general:ye})}},U=async()=>{try{const X=new jn;await av(dt,X)}catch{O({general:"No se pudo entrar con Google."})}};return _.jsxs("div",{className:"min-h-screen flex font-sans bg-indigo-50",children:[_.jsxs("div",{className:"hidden lg:flex flex-col justify-between w-[52%] relative overflow-hidden p-12 bg-gradient-to-br from-indigo-700 to-indigo-900",children:[_.jsx("div",{className:"absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white opacity-10"}),_.jsx("div",{className:"absolute bottom-10 -right-16 w-96 h-96 rounded-full bg-white opacity-10"}),_.jsx(sw,{iconSize:52}),_.jsxs("div",{className:"relative z-10",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[_.jsx(s_,{size:18,className:"text-white/70"}),_.jsx("span",{className:"text-white/70 text-sm font-medium",children:"Cada empresa ve solo lo suyo"})]}),_.jsxs("h1",{className:"text-white text-4xl font-extrabold leading-tight mb-4",children:["Gestión de Solicitudes",_.jsx("br",{}),_.jsx("span",{className:"text-white/75 font-normal text-3xl",children:"Todo en un solo lugar"})]}),_.jsx("p",{className:"text-white/65 text-[15px] leading-relaxed max-w-[380px]",children:"Crea una solicitud, mira en qué va y recibe la respuesta de tu administrador, sin correos ni papeles."})]}),_.jsx("div",{className:"text-white/35 text-xs",children:"© 2026 GestioSync"})]}),_.jsx("div",{className:"flex-1 flex items-center justify-center p-6 lg:p-12",children:_.jsxs("div",{className:"w-full max-w-[420px]",children:[_.jsx("div",{className:"flex justify-center mb-8 lg:hidden",children:_.jsx(hp,{iconSize:44,layout:"vertical"})}),_.jsxs("div",{className:"bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_40px_rgba(30,63,174,0.12)]",children:[_.jsxs("div",{className:"mb-8",children:[_.jsx("h2",{className:"text-gray-900 text-2xl font-extrabold mb-1",children:"Bienvenido de nuevo"}),_.jsx("p",{className:"text-gray-500 text-sm",children:"Entra con tu correo y tu contraseña."})]}),b.general&&_.jsxs("div",{className:"bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-6 border border-red-100 flex items-center gap-3",children:[_.jsx(s_,{size:18}),_.jsx("span",{className:"font-semibold",children:b.general})]}),_.jsxs("div",{className:"flex flex-col gap-5",children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"login-email",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Correo"}),_.jsxs("div",{className:"relative",children:[_.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",children:_.jsx(tw,{size:18})}),_.jsx("input",{id:"login-email",type:"email",value:t,onChange:X=>{i(X.target.value),O(te=>({...te,email:void 0}))},className:`w-full py-3 pl-10 pr-3 border ${b.email?"border-red-400 bg-red-50":"border-gray-200 bg-slate-50"} rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white transition-colors`})]}),b.email&&_.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:b.email})]}),_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[_.jsx("label",{htmlFor:"login-password",className:"text-gray-700 text-[13px] font-semibold",children:"Contraseña"}),_.jsx("button",{onClick:r,className:"text-indigo-600 text-xs font-semibold hover:underline",children:"¿Olvidaste tu contraseña?"})]}),_.jsxs("div",{className:"relative",children:[_.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",children:_.jsx(yR,{size:18})}),_.jsx("input",{id:"login-password",type:h?"text":"password",value:o,onChange:X=>{l(X.target.value),O(te=>({...te,password:void 0}))},className:`w-full py-3 pl-10 pr-10 border ${b.password?"border-red-400 bg-red-50":"border-gray-200 bg-slate-50"} rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white transition-colors`}),_.jsx("button",{type:"button",onClick:()=>f(!h),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400",children:h?_.jsx(Z0,{size:18}):_.jsx(ew,{size:18})})]}),b.password&&_.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:b.password})]}),_.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[_.jsx("input",{type:"checkbox",id:"remember",checked:g,onChange:X=>v(X.target.checked),className:"w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"}),_.jsx("label",{htmlFor:"remember",className:"text-gray-600 text-sm font-medium select-none cursor-pointer",children:"Mantener sesión iniciada"})]}),_.jsx("button",{onClick:$,disabled:E,className:"w-full bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors mt-2",children:E?"Entrando...":"Entrar"}),_.jsxs("div",{className:"relative flex items-center py-2",children:[_.jsx("div",{className:"flex-grow border-t border-gray-200"}),_.jsx("span",{className:"flex-shrink-0 mx-4 text-gray-400 text-xs font-medium uppercase tracking-wider",children:"o"}),_.jsx("div",{className:"flex-grow border-t border-gray-200"})]}),_.jsxs("button",{onClick:U,className:"w-full flex items-center justify-center gap-3 bg-white text-gray-700 border border-gray-200 py-3 rounded-lg text-[14px] font-semibold hover:bg-gray-50 transition-colors shadow-sm",children:[_.jsx(iw,{}),"Iniciar sesión con Google"]})]})]}),_.jsxs("div",{className:"text-center text-gray-500 text-sm mt-6 flex flex-col gap-1",children:[_.jsx("p",{children:"¿Eres parte de una empresa? Pídele a tu administrador que te agregue."}),_.jsxs("p",{children:["¿Vas a administrar una empresa nueva?"," ",_.jsx("button",{onClick:e,className:"text-indigo-600 font-semibold hover:underline",children:"Regístrala aquí"})]})]})]})})]})}const Qa=["Tecnología e Innovación","Recursos Humanos","Finanzas y Contabilidad","Operaciones","Jurídica y Cumplimiento","Comunicaciones","Logística","Atención al Cliente","Dirección General"],Tt={titulo:100,descripcion:2e3,respuesta:1e3,nombre:80,empresa:80,email:254},i_=20;async function ow(r,{nombre:e,empresa:t,email:i,departamento:o}){const l=Y0(),h=sn(wl(l,"organizaciones")),f=JC(l);f.set(h,{nombre:t,adminId:r.uid,fechaCreacion:q0()}),f.set(sn(l,"usuarios",r.uid),{nombre:e,email:i,departamento:o,rol:"admin",orgId:h.id,activo:!0,debeCambiarClave:!1,fechaRegistro:new Date}),await f.commit()}async function zR({clave:r,...e}){const t=xl();t.languageCode="es";try{const{user:i}=await H_(t,e.email,r);try{await K_(i,{displayName:e.nombre}),await ow(i,e),await G_(i).catch(()=>{})}catch(o){throw await Y_(i).catch(()=>{}),o}}finally{await Ti(t)}await W_(dt,e.email,r)}async function BR(){var o;const r=xl(),e=await av(r,new jn);if((await lp(sn(Y0(),"usuarios",e.user.uid))).exists())return await Ti(r),{yaRegistrado:!0};const i=jn.credentialFromResult(e);if(!i)throw await Ti(r),new Error("Google no devolvió las credenciales");return{yaRegistrado:!1,nombre:e.user.displayName??"",email:e.user.email??"",credencial:i,esNueva:((o=mx(e))==null?void 0:o.isNewUser)??!1}}async function $R({nombre:r,empresa:e,departamento:t,credencial:i}){const o=xl(),l=o.currentUser;if(!(l!=null&&l.email))throw new Error("La sesión de Google se cerró. Vuelve a elegir tu cuenta.");await ow(l,{nombre:r,empresa:e,email:l.email,departamento:t}),await Ti(o),await $_(dt,i)}async function qR(r){const e=xl();try{r&&e.currentUser&&await Y_(e.currentUser).catch(()=>{})}finally{await Ti(e)}}const HR=/<\/?[a-zA-Z!][^>]*>/g,WR=/[​-‏‪-‮⁦-⁩﻿]/g;function fr(r,e=!1){const t=r.replace(HR,"").replace(WR,"").replace(/\r\n?/g,`
`);return e?t.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g,"").replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim():t.replace(/[\u0000-\u001F\u007F]/g," ").replace(/ {2,}/g," ").trim()}const GR={nombre:"",empresa:"",departamento:""},Ku=r=>`w-full py-3 px-3 border ${r?"border-red-400 bg-red-50":"border-gray-200 bg-slate-50"} rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white transition-colors`;function KR({cuenta:r,onCancelar:e}){const[t,i]=ae.useState({...GR,nombre:r.nombre.slice(0,Tt.nombre)}),[o,l]=ae.useState({}),[h,f]=ae.useState(null),[g,v]=ae.useState(!1),E=(O,q)=>{i($=>({...$,[O]:q})),l($=>({...$,[O]:void 0}))},I=async O=>{O.preventDefault();const q=fr(t.nombre),$=fr(t.empresa),U={};if(q||(U.nombre="Requerido"),$?$.length<2&&(U.empresa="Mínimo 2 caracteres"):U.empresa="Requerido",t.departamento||(U.departamento="Seleccione su oficina"),Object.keys(U).length>0)return l(U);v(!0),f(null);try{await $R({nombre:q,empresa:$,departamento:t.departamento,credencial:r.credencial})}catch(X){console.error("Registro con Google fallido:",X),f("No se pudo completar el registro. Intenta de nuevo o elige otra cuenta."),v(!1)}},b=async()=>{await qR(r.esNueva).catch(()=>{}),e()};return _.jsxs("form",{onSubmit:I,noValidate:!0,className:"flex flex-col gap-4",children:[_.jsx("p",{className:"text-gray-500 text-sm",children:"Elegiste esta cuenta de Google. Solo faltan los datos de tu empresa."}),h&&_.jsx("div",{role:"alert",className:"bg-red-50 text-red-600 p-4 rounded-xl text-sm border border-red-100 font-semibold",children:h}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"goo-correo",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Correo (de Google)"}),_.jsx("input",{id:"goo-correo",value:r.email,disabled:!0,readOnly:!0,className:`${Ku()} text-gray-500`})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"goo-nombre",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Tu nombre y apellido"}),_.jsx("input",{id:"goo-nombre",maxLength:Tt.nombre,value:t.nombre,onChange:O=>E("nombre",O.target.value),className:Ku(o.nombre)}),o.nombre&&_.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:o.nombre})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"goo-empresa",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Nombre de la empresa"}),_.jsx("input",{id:"goo-empresa",maxLength:Tt.empresa,value:t.empresa,onChange:O=>E("empresa",O.target.value),className:Ku(o.empresa)}),o.empresa&&_.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:o.empresa})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"goo-oficina",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Tu oficina"}),_.jsxs("select",{id:"goo-oficina",value:t.departamento,onChange:O=>E("departamento",O.target.value),className:Ku(o.departamento),children:[_.jsx("option",{value:"",disabled:!0,children:"Seleccionar..."}),Qa.map(O=>_.jsx("option",{value:O,children:O},O))]}),o.departamento&&_.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:o.departamento})]}),_.jsx("button",{type:"submit",disabled:g,className:"w-full mt-1 bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors",children:g?"Creando tu empresa...":"Crear empresa"}),_.jsx("button",{type:"button",onClick:b,disabled:g,className:"text-gray-500 text-sm font-medium hover:underline",children:"Usar otra cuenta"})]})}const aw=r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)&&r.length<=Tt.email,QR={nombre:"",empresa:"",email:"",departamento:"",clave:"",confirmar:""},Qu=r=>`w-full py-3 px-3 border ${r?"border-red-400 bg-red-50":"border-gray-200 bg-slate-50"} rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white transition-colors`,YR=["auth/popup-closed-by-user","auth/cancelled-popup-request"];function JR({onNavigateToLogin:r}){const[e,t]=ae.useState(QR),[i,o]=ae.useState({}),[l,h]=ae.useState(null),[f,g]=ae.useState(!1),[v,E]=ae.useState(!1),[I,b]=ae.useState(!1),[O,q]=ae.useState(null),$=(ce,Se)=>{t(pe=>({...pe,[ce]:Se})),o(pe=>({...pe,[ce]:void 0}))},U=(ce,Se,pe)=>{const k={};return ce||(k.nombre="Requerido"),Se?Se.length<2&&(k.empresa="Mínimo 2 caracteres"):k.empresa="Requerido",pe?aw(pe)||(k.email="Formato inválido"):k.email="Requerido",e.departamento||(k.departamento="Seleccione su oficina"),e.clave?e.clave.length<8&&(k.clave="Mínimo 8 caracteres"):k.clave="Requerida",e.confirmar?e.clave!==e.confirmar&&(k.confirmar="Las contraseñas no coinciden"):k.confirmar="Requerido",k},X=async ce=>{ce.preventDefault();const Se=fr(e.nombre),pe=fr(e.empresa),k=fr(e.email).toLowerCase(),S=U(Se,pe,k);if(Object.keys(S).length>0)return o(S);E(!0),h(null);try{await zR({nombre:Se,empresa:pe,email:k,clave:e.clave,departamento:e.departamento})}catch(C){console.error("Registro fallido:",C),C instanceof Vt&&C.code==="auth/email-already-in-use"?h("Ya existe una cuenta con ese correo."):h("No se pudo completar el registro. Revisa los datos e intenta de nuevo."),E(!1)}},te=async()=>{b(!0),h(null);try{const ce=await BR();ce.yaRegistrado?h("Esa cuenta de Google ya tiene una empresa. Inicia sesión desde la pantalla de acceso."):q(ce)}catch(ce){ce instanceof Vt&&YR.includes(ce.code)||(console.error("Google falló:",ce),h("No se pudo conectar con Google. Intenta de nuevo."))}finally{b(!1)}},ye=(ce,Se,pe,k,S="text")=>_.jsxs("div",{children:[_.jsx("label",{htmlFor:ce,className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:Se}),_.jsx("input",{id:ce,type:S,maxLength:k,value:e[pe],onChange:C=>$(pe,C.target.value),className:Qu(i[pe])}),i[pe]&&_.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:i[pe]})]});return _.jsx("div",{className:"min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans",children:_.jsxs("div",{className:"w-full max-w-[480px]",children:[_.jsx("div",{className:"flex justify-center mb-8",children:_.jsx(hp,{iconSize:44,layout:"vertical"})}),_.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-[0_8px_40px_rgba(30,63,174,0.12)]",children:[_.jsx("h2",{className:"text-gray-900 text-2xl font-extrabold mb-1",children:"Registra tu empresa"}),_.jsx("p",{className:"text-gray-500 text-sm mb-6",children:"Serás el administrador. Después podrás agregar a tu equipo."}),l&&_.jsx("div",{role:"alert",className:"bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-5 border border-red-100 font-semibold",children:l}),O?_.jsx(KR,{cuenta:O,onCancelar:()=>q(null)}):_.jsxs(_.Fragment,{children:[_.jsxs("button",{type:"button",onClick:te,disabled:I||v,className:"w-full flex items-center justify-center gap-3 bg-white text-gray-700 border border-gray-200 py-3 rounded-lg text-[14px] font-semibold hover:bg-gray-50 transition-colors shadow-sm disabled:opacity-60",children:[_.jsx(iw,{}),I?"Conectando con Google...":"Registrarme con Google"]}),_.jsxs("div",{className:"relative flex items-center py-5",children:[_.jsx("div",{className:"flex-grow border-t border-gray-200"}),_.jsx("span",{className:"flex-shrink-0 mx-4 text-gray-400 text-xs font-medium uppercase tracking-wider",children:"o con tu correo"}),_.jsx("div",{className:"flex-grow border-t border-gray-200"})]}),_.jsxs("form",{onSubmit:X,noValidate:!0,className:"flex flex-col gap-4",children:[ye("reg-nombre","Tu nombre y apellido","nombre",Tt.nombre),ye("reg-empresa","Nombre de la empresa","empresa",Tt.empresa),ye("reg-email","Correo","email",Tt.email,"email"),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"reg-oficina",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Tu oficina"}),_.jsxs("select",{id:"reg-oficina",value:e.departamento,onChange:ce=>$("departamento",ce.target.value),className:Qu(i.departamento),children:[_.jsx("option",{value:"",disabled:!0,children:"Seleccionar..."}),Qa.map(ce=>_.jsx("option",{value:ce,children:ce},ce))]}),i.departamento&&_.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:i.departamento})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"reg-clave",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Contraseña"}),_.jsxs("div",{className:"relative",children:[_.jsx("input",{id:"reg-clave",type:f?"text":"password",value:e.clave,onChange:ce=>$("clave",ce.target.value),placeholder:"Mínimo 8 caracteres",className:`${Qu(i.clave)} pr-11`}),_.jsx("button",{type:"button",onClick:()=>g(!f),"aria-label":f?"Ocultar contraseña":"Mostrar contraseña",className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400",children:f?_.jsx(Z0,{size:18}):_.jsx(ew,{size:18})})]}),i.clave&&_.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:i.clave})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"reg-confirmar",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Repite la contraseña"}),_.jsx("input",{id:"reg-confirmar",type:f?"text":"password",value:e.confirmar,onChange:ce=>$("confirmar",ce.target.value),className:Qu(i.confirmar)}),i.confirmar&&_.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:i.confirmar})]}),_.jsx("button",{type:"submit",disabled:v,className:"w-full mt-2 bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors",children:v?"Creando tu empresa...":"Crear empresa"})]})]})]}),_.jsx("div",{className:"flex justify-center mt-6",children:_.jsxs("button",{onClick:r,className:"flex items-center gap-1.5 text-indigo-600 text-sm font-semibold hover:underline",children:[_.jsx(X0,{size:16})," Volver al inicio de sesión"]})})]})})}async function XR(r){const e=await lp(sn(rn,"usuarios",r));return e.exists()?e.data():null}async function ZR(r){const e=await lp(sn(rn,"organizaciones",r));return e.exists()?e.data():null}function ek(){const[r,e]=ae.useState(null),[t,i]=ae.useState(null),[o,l]=ae.useState(!1);return ae.useEffect(()=>{const h=dt.currentUser;if(!h)return;(async()=>{const g=await XR(h.uid);if(!g){l(!0);return}if(e(g),!(g.activo===!1||!g.orgId))try{i(await ZR(g.orgId))}catch(v){console.error("Error al cargar la organización:",v)}})()},[]),{perfil:r,setPerfil:e,organizacion:t,sinPerfil:o}}function lw(r){const e=Date.now();return[...r].sort((i,o)=>{var l,h;return(((l=o.data().fecha)==null?void 0:l.toMillis())??e)-(((h=i.data().fecha)==null?void 0:h.toMillis())??e)}).map(i=>{var h;const o=i.data(),l=(h=o.fecha)==null?void 0:h.toDate();return{id:i.id,title:o.titulo||"Sin título",type:o.tipo||"Sin tipo",status:o.estado||"En revisión",date:l?l.toLocaleDateString("es-CO"):"Reciente",time:l?l.toLocaleTimeString("es-CO",{hour:"2-digit",minute:"2-digit"}):"",autorNombre:o.autorNombre||"Usuario",autorEmail:o.autorEmail||"",descripcion:o.descripcion||"Sin descripción detallada.",prioridad:o.prioridad||"Media",respuestaAdmin:o.respuestaAdmin||null}})}async function tk(r){const e=await up(sp(wl(rn,"solicitudes"),ip("orgId","==",r)));return lw(e.docs)}async function nk(r){const e=await up(sp(wl(rn,"solicitudes"),ip("usuarioId","==",r)));return lw(e.docs)}async function rk(r,e){const t=dt.currentUser;await QC(wl(rn,"solicitudes"),{...r,estado:"En revisión",usuarioId:t==null?void 0:t.uid,orgId:e,autorNombre:(t==null?void 0:t.displayName)||"Usuario",autorEmail:(t==null?void 0:t.email)||"",fecha:q0()})}const sk=(r,e)=>Do(sn(rn,"solicitudes",r),{...e}),ik=(r,e)=>Do(sn(rn,"solicitudes",r),{estado:e}),ok=(r,e)=>Do(sn(rn,"solicitudes",r),{respuestaAdmin:e}),ak=r=>KC(sn(rn,"solicitudes",r));function lk(r,e){const[t,i]=ae.useState([]),[o,l]=ae.useState(!0),h=r==null?void 0:r.rol,f=r==null?void 0:r.orgId,g=r!==null&&r.activo!==!1,v=ae.useCallback(async()=>{const q=dt.currentUser;if(!(!q||!h)){l(!0);try{const $=h==="admin";if($&&!f){i([]),e("Tu cuenta no tiene una empresa asignada.");return}i($&&f?await tk(f):await nk(q.uid))}catch($){console.error("Error al obtener datos:",$),e("No se pudieron cargar las solicitudes. Intenta de nuevo.")}finally{l(!1)}}},[h,f,e]);return ae.useEffect(()=>{g&&v()},[g,v]),{solicitudes:t,cargando:o,cambiarEstado:async(q,$)=>{try{await ik(q,$),i(U=>U.map(X=>X.id===q?{...X,status:$}:X))}catch(U){console.error("Error actualizando estado:",U),e("No se pudo cambiar el estado de la solicitud.")}},responder:async(q,$)=>{try{return await ok(q,$),i(U=>U.map(X=>X.id===q?{...X,respuestaAdmin:$}:X)),!0}catch(U){return console.error("Error al responder:",U),e("No se pudo enviar la respuesta."),!1}},eliminar:async q=>{try{return await ak(q),i($=>$.filter(U=>U.id!==q)),!0}catch($){return console.error("Error eliminando documento:",$),e("No se pudo eliminar la solicitud."),!1}},guardar:async(q,$)=>{try{if($)await sk($,q);else{if(!f)return e("Tu cuenta no tiene una empresa asignada. Pídele a tu administrador que la configure."),!1;await rk(q,f)}return await v(),!0}catch(U){return console.error("Error de escritura:",U),e("No se pudo guardar la solicitud. Revisa tu conexión e intenta de nuevo."),!1}}}}function uk({items:r,activo:e,nombre:t,rolTexto:i,onSeleccionar:o,onCerrarSesion:l}){return _.jsxs("div",{className:"flex flex-col h-full",children:[_.jsx("div",{className:"p-6 pb-8",children:_.jsx(sw,{iconSize:40})}),_.jsx("nav",{className:"flex-1 px-3",children:r.map(h=>_.jsxs("button",{onClick:()=>o(h.id),className:"flex items-center gap-3 w-full px-4 py-3 rounded-xl mb-1 transition-all",style:{background:e===h.id?"rgba(255,255,255,0.18)":"transparent",color:e===h.id?"white":"rgba(255,255,255,0.65)",border:"none",cursor:"pointer",fontFamily:"Inter, sans-serif",fontSize:"14px",fontWeight:e===h.id?600:400,textAlign:"left"},children:[_.jsx("span",{style:{opacity:e===h.id?1:.7},children:h.icon}),h.label]},h.id))}),_.jsxs("div",{className:"p-4 mx-3 mb-4 rounded-xl",style:{background:"rgba(0,0,0,0.15)"},children:[_.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[_.jsx("div",{className:"w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",style:{background:"rgba(255,255,255,0.2)"},children:_.jsx("span",{style:{color:"white",fontSize:"14px",fontWeight:700},children:t.charAt(0)||"U"})}),_.jsxs("div",{children:[_.jsx("div",{style:{color:"white",fontSize:"13px",fontWeight:600},children:t}),_.jsx("div",{style:{color:"rgba(255,255,255,0.55)",fontSize:"11px"},children:i})]})]}),_.jsxs("button",{onClick:l,className:"flex items-center gap-2 w-full px-3 py-2 rounded-lg",style:{background:"rgba(220,53,69,0.25)",color:"#FCA5A5",border:"1px solid rgba(220,53,69,0.3)",cursor:"pointer",fontSize:"13px",fontWeight:600,fontFamily:"Inter, sans-serif"},children:[_.jsx(vR,{size:15})," Cerrar Sesión"]})]})]})}function ck({solicitudes:r,esAdmin:e}){const t=r.length,i=r.filter(h=>h.status==="En revisión").length,o=r.filter(h=>h.status==="Aprobada"||h.status==="Rechazada").length,l=[{label:"Total",value:t,icon:_.jsx(cp,{size:20}),color:"#1E3FAE",bg:"#EEF2FF"},{label:"En revisión",value:i,icon:_.jsx(hf,{size:20}),color:"#D97706",bg:"#FEF3C7"},{label:"Resueltas",value:o,icon:_.jsx(Sl,{size:20}),color:"#059669",bg:"#D1FAE5"}];return _.jsxs("div",{className:"p-8 max-w-7xl mx-auto",children:[_.jsxs("div",{className:"mb-8",children:[_.jsx("h2",{style:{color:"#111827",fontSize:"24px",fontWeight:700,letterSpacing:"-0.02em"},children:"Inicio"}),_.jsx("p",{style:{color:"#6B7280",fontSize:"14px",marginTop:"4px"},children:e?"Cómo van las solicitudes de tu empresa.":"Cómo van tus solicitudes."})]}),_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:l.map(h=>_.jsx("div",{className:"bg-white p-6 rounded-2xl border",style:{borderColor:"#F3F4F6"},children:_.jsxs("div",{className:"flex items-center gap-4",children:[_.jsx("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center",style:{background:h.bg,color:h.color},children:h.icon}),_.jsxs("div",{children:[_.jsx("div",{style:{color:"#6B7280",fontSize:"13px",fontWeight:500},children:h.label}),_.jsx("div",{style:{color:"#111827",fontSize:"24px",fontWeight:700,marginTop:"2px"},children:h.value})]})]})},h.label))})]})}const hk=["Soporte Técnico","Administrativa","Recursos Humanos","Financiera","Logística","Otro"],dk=["Alta","Media","Baja"],Ld={"En revisión":{color:"#B45309",bg:"#FEF3C7",icon:_.jsx(hf,{size:12})},Aprobada:{color:"#15803D",bg:"#DCFCE7",icon:_.jsx(Sl,{size:12})},Pendiente:{color:"#6B7280",bg:"#F3F4F6",icon:_.jsx(hf,{size:12})},Rechazada:{color:"#DC3545",bg:"#FEF2F2",icon:_.jsx(nw,{size:12})}},fk=(r,e)=>e?r==="Alta"?{border:"#FCA5A5",bg:"#FEF2F2",text:"#DC2626"}:r==="Media"?{border:"#FDE68A",bg:"#FEF3C7",text:"#D97706"}:r==="Baja"?{border:"#A7F3D0",bg:"#DCFCE7",text:"#16A34A"}:{border:"#E5E7EB",bg:"#F9FAFB",text:"#374151"}:{border:"#E5E7EB",bg:"#F9FAFB",text:"#6B7280"},pk={title:"",type:"Soporte Técnico",description:"",priority:"Media"},Yu={display:"block",color:"#374151",fontSize:"13px",fontWeight:600,marginBottom:"6px"},Md=r=>({width:"100%",padding:"12px 14px",border:`1.5px solid ${r?"#DC3545":"#E5E7EB"}`,borderRadius:"8px",outline:"none"});function mk({inicial:r,onGuardar:e,onCancelar:t,onTerminado:i}){const[o]=ae.useState(r!==null),[l,h]=ae.useState(r?{title:r.title,type:r.type,description:r.descripcion,priority:r.prioridad}:pk),[f,g]=ae.useState({}),[v,E]=ae.useState(!1),[I,b]=ae.useState(!1);ae.useEffect(()=>{if(!I)return;const U=setTimeout(i,2e3);return()=>clearTimeout(U)},[I]);const O=(U,X)=>{h(te=>({...te,[U]:X})),g(te=>({...te,[U]:void 0}))},q=(U,X)=>{const te={};return U?U.length>Tt.titulo&&(te.title=`Máximo ${Tt.titulo} caracteres`):te.title="Requerido",l.type||(te.type="Requerido"),X?X.length<i_?te.description=`Mínimo ${i_} caracteres`:X.length>Tt.descripcion&&(te.description=`Máximo ${Tt.descripcion} caracteres`):te.description="Requerido",te},$=async()=>{const U=fr(l.title),X=fr(l.description,!0),te=q(U,X);if(Object.keys(te).length>0){g(te);return}E(!0);const ye=await e({titulo:U,tipo:l.type,descripcion:X,prioridad:l.priority});E(!1),ye&&b(!0)};return I?_.jsx("div",{className:"flex items-center justify-center min-h-[400px]",children:_.jsxs("div",{className:"text-center max-w-sm",children:[_.jsx("div",{className:"flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-5",style:{background:"#DCFCE7"},children:_.jsx(Sl,{size:44,style:{color:"#22C55E"}})}),_.jsx("h2",{style:{color:"#111827",fontSize:"22px",fontWeight:800,marginBottom:"5px"},children:o?"Solicitud actualizada":"¡Solicitud enviada!"})]})}):_.jsxs("div",{children:[_.jsx("div",{className:"mb-7",children:_.jsx("h1",{style:{color:"#111827",fontSize:"26px",fontWeight:800,marginBottom:"5px"},children:o?"Editar solicitud":"Nueva solicitud"})}),_.jsx("div",{className:"bg-white rounded-2xl p-6 lg:p-8 max-w-2xl",style:{boxShadow:"0 2px 20px rgba(30,63,174,0.08)"},children:_.jsxs("div",{className:"flex flex-col gap-5",children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"sol-titulo",style:Yu,children:"Título"}),_.jsx("input",{id:"sol-titulo",type:"text",maxLength:Tt.titulo,value:l.title,onChange:U=>O("title",U.target.value),style:Md(f.title)}),f.title&&_.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:f.title})]}),_.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"sol-tipo",style:Yu,children:"Categoría"}),_.jsxs("select",{id:"sol-tipo",value:l.type,onChange:U=>O("type",U.target.value),style:Md(f.type),children:[_.jsx("option",{value:"",disabled:!0,children:"Seleccione"}),hk.map(U=>_.jsx("option",{value:U,children:U},U))]})]}),_.jsxs("div",{children:[_.jsx("label",{style:Yu,children:"Prioridad"}),_.jsx("div",{className:"flex gap-2",children:dk.map(U=>{const X=l.priority===U,te=fk(U,X);return _.jsx("button",{type:"button",onClick:()=>O("priority",U),style:{flex:1,padding:"10px 6px",borderRadius:"8px",border:`1.5px solid ${te.border}`,background:te.bg,color:te.text,fontWeight:X?700:500,cursor:"pointer",transition:"all 0.2s"},children:U},U)})})]})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"sol-detalles",style:Yu,children:"Detalles"}),_.jsx("textarea",{id:"sol-detalles",rows:5,maxLength:Tt.descripcion,value:l.description,onChange:U=>O("description",U.target.value),style:{...Md(f.description),resize:"vertical"}}),f.description&&_.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:f.description}),_.jsxs("p",{className:"text-gray-400 text-xs mt-1 text-right",children:[l.description.length,"/",Tt.descripcion]})]}),_.jsxs("div",{className:"flex justify-end gap-3 pt-2",children:[o&&_.jsx("button",{onClick:t,className:"px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors",children:"Cancelar"}),_.jsx("button",{onClick:$,disabled:v,style:{padding:"12px 24px",borderRadius:"8px",border:"none",background:v?"#93A8E8":"#1E3FAE",color:"white",fontWeight:700,cursor:v?"not-allowed":"pointer"},children:v?"Guardando...":"Guardar"})]})]})})]})}const Ma="text-gray-400 text-[11px] font-bold uppercase tracking-wider",gk=r=>r==="Alta"?{background:"#FEE2E2",color:"#DC2626"}:r==="Media"?{background:"#FEF3C7",color:"#D97706"}:{background:"#DCFCE7",color:"#16A34A"};function yk({solicitud:r,esAdmin:e,onResponder:t,onEditar:i,onEliminar:o}){const[l,h]=ae.useState(""),f=async()=>{const g=fr(l,!0);g&&await t(r.id,g)&&h("")};return _.jsx("div",{className:"px-3 sm:px-5 pb-4 sm:pb-5 bg-indigo-50/10",children:_.jsxs("div",{className:"bg-white p-4 sm:p-5 rounded-xl border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6",children:[_.jsxs("div",{className:"md:col-span-2",children:[_.jsx("h4",{className:`${Ma} mb-2`,children:"Detalle"}),_.jsx("p",{className:"text-gray-700 text-sm leading-relaxed whitespace-pre-wrap",children:r.descripcion}),_.jsxs("div",{className:"mt-6 pt-5 border-t border-gray-100",children:[_.jsxs("h4",{className:`${Ma} mb-3`,children:[_.jsx(xR,{size:12,className:"inline mr-1 -mt-0.5"})," Respuesta del administrador"]}),r.respuestaAdmin?_.jsx("div",{className:"bg-blue-50 border border-blue-100 rounded-lg p-4 text-blue-800 text-sm",children:r.respuestaAdmin}):e?_.jsxs("div",{className:"flex flex-col gap-3",children:[_.jsx("textarea",{placeholder:"Escribe tu respuesta...",maxLength:Tt.respuesta,value:l,onChange:g=>h(g.target.value),className:"w-full p-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-indigo-500 focus:ring-1",rows:3}),_.jsx("button",{onClick:f,disabled:!l.trim(),className:"self-end px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:"Responder"})]}):_.jsx("p",{className:"text-gray-400 text-sm italic",children:"Todavía no hay respuesta."})]}),!e&&r.status==="En revisión"&&_.jsxs("div",{className:"mt-6 pt-5 border-t border-gray-100 flex flex-wrap justify-end gap-3",children:[_.jsxs("button",{onClick:()=>i(r),className:"px-4 py-2 border border-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-50 flex items-center gap-2",children:[_.jsx(AR,{size:14})," Modificar"]}),_.jsxs("button",{onClick:()=>o(r.id),className:"px-4 py-2 bg-red-50 text-red-600 border border-red-100 text-sm font-semibold rounded-lg hover:bg-red-100 flex items-center gap-2",children:[_.jsx(kR,{size:14})," Eliminar"]})]})]}),_.jsxs("div",{className:"flex flex-col gap-4",children:[_.jsxs("div",{children:[_.jsx("h4",{className:`${Ma} mb-1`,children:"Autor"}),_.jsx("div",{className:"text-gray-900 text-sm font-semibold",children:r.autorNombre}),_.jsx("div",{className:"text-gray-500 text-xs",children:r.autorEmail})]}),_.jsxs("div",{children:[_.jsx("h4",{className:`${Ma} mb-1`,children:"Fecha"}),_.jsxs("div",{className:"text-gray-700 text-sm font-medium",children:[r.date," ",_.jsx("span",{className:"text-gray-400 font-normal",children:"a las"})," ",r.time]})]}),_.jsxs("div",{children:[_.jsx("h4",{className:`${Ma} mb-1`,children:"Prioridad"}),_.jsx("span",{className:"inline-flex items-center px-2 py-1 rounded text-xs font-bold",style:gk(r.prioridad),children:r.prioridad})]})]})]})})}function _k({solicitudes:r,cargando:e,esAdmin:t,onCambiarEstado:i,onResponder:o,onEditar:l,onEliminar:h}){const[f,g]=ae.useState(null),v=async E=>{window.confirm("¿Eliminar esta solicitud? No se puede deshacer.")&&await h(E)&&g(null)};return _.jsxs("div",{children:[_.jsx("div",{className:"flex items-center justify-between mb-7",children:_.jsx("h1",{style:{color:"#111827",fontSize:"26px",fontWeight:800},children:t?"Solicitudes de la empresa":"Mis solicitudes"})}),_.jsxs("div",{className:"bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100",children:[_.jsxs("div",{className:"hidden sm:flex items-center px-5 py-3 bg-gray-50 border-b border-gray-100",children:[_.jsx("span",{className:"text-gray-500 text-xs font-semibold flex-1",children:"Solicitud"}),_.jsx("span",{className:"text-gray-500 text-xs font-semibold w-[120px]",children:"Estado"}),t&&_.jsx("span",{className:"text-gray-500 text-xs font-semibold w-[90px] text-right",children:"Acciones"}),_.jsx("span",{className:"w-8"})]}),e?_.jsx("div",{className:"p-10 flex justify-center text-gray-400",children:"Cargando..."}):r.length===0?_.jsx("div",{className:"p-10 text-center text-gray-400",children:"Aún no hay solicitudes."}):r.map(E=>{var b,O,q;const I=f===E.id;return _.jsxs("div",{className:"border-b border-gray-50 flex flex-col",children:[_.jsxs("div",{onClick:()=>g(I?null:E.id),className:`flex flex-wrap sm:flex-nowrap items-center gap-x-3 gap-y-3 sm:gap-4 p-4 sm:p-5 cursor-pointer transition-colors ${I?"bg-indigo-50/20":"hover:bg-gray-50"}`,children:[_.jsx("div",{className:"hidden sm:flex w-10 h-10 rounded-lg items-center justify-center bg-indigo-50 shrink-0",children:_.jsx(cp,{size:18,className:"text-indigo-600"})}),_.jsxs("div",{className:"order-1 flex-1 min-w-0",children:[_.jsx("div",{className:"text-gray-900 text-sm font-semibold leading-snug break-words sm:truncate",children:E.title}),_.jsxs("div",{className:"text-gray-400 text-xs mt-1",children:[_.jsx("span",{className:"font-medium",children:E.id.slice(0,8)})," · ",E.type]}),t&&_.jsxs("span",{className:"block w-fit mt-1.5 text-indigo-500 text-xs font-medium bg-indigo-50 px-1.5 py-0.5 rounded max-w-full truncate",children:["De: ",E.autorNombre]})]}),_.jsx("div",{className:"order-2 sm:order-4 w-8 flex justify-end text-gray-300 shrink-0",children:_.jsx(sR,{size:18,className:`transition-transform duration-200 ${I?"rotate-180":""}`})}),_.jsxs("div",{className:"order-3 w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 sm:gap-4",children:[_.jsxs("div",{className:"flex items-center gap-1 px-3 py-1 rounded-full shrink-0 sm:w-[120px] justify-center text-xs font-semibold",style:{background:(b=Ld[E.status])==null?void 0:b.bg,color:(O=Ld[E.status])==null?void 0:O.color},children:[(q=Ld[E.status])==null?void 0:q.icon," ",E.status]}),t&&_.jsx("div",{className:"flex items-center justify-end gap-2 sm:w-[90px] shrink-0",children:E.status==="En revisión"?_.jsxs(_.Fragment,{children:[_.jsx("button",{onClick:$=>{$.stopPropagation(),i(E.id,"Aprobada")},className:"w-9 h-9 sm:w-8 sm:h-8 rounded border border-green-200 text-green-600 bg-green-50 hover:bg-green-100 flex justify-center items-center",children:_.jsx(Sl,{size:16})}),_.jsx("button",{onClick:$=>{$.stopPropagation(),i(E.id,"Rechazada")},className:"w-9 h-9 sm:w-8 sm:h-8 rounded border border-red-200 text-red-600 bg-red-50 hover:bg-red-100 flex justify-center items-center",children:_.jsx(nw,{size:16})})]}):_.jsx("span",{className:"text-xs font-medium text-gray-300 sm:mr-2",children:"Revisada"})})]})]}),I&&_.jsx(yk,{solicitud:E,esAdmin:t,onResponder:o,onEditar:l,onEliminar:v})]},E.id)})]})]})}function vk({perfil:r,organizacion:e}){var l;const t=dt.currentUser,i=(r==null?void 0:r.rol)==="admin",o=[{label:"Tu ID",value:t==null?void 0:t.uid},{label:"Rol",value:i?"Administrador":"Usuario"},{label:"Empresa",value:(e==null?void 0:e.nombre)||"N/A"},{label:"Oficina",value:(r==null?void 0:r.departamento)||"N/A"}];return _.jsxs("div",{className:"p-8 max-w-3xl mx-auto",children:[_.jsx("h1",{className:"text-gray-900 text-2xl font-bold mb-6",children:"Mi perfil"}),_.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-sm border border-gray-100",children:[_.jsxs("div",{className:"flex items-center gap-5 pb-6 border-b border-gray-100",children:[_.jsx("div",{className:"w-16 h-16 rounded-full flex items-center justify-center bg-indigo-50 shrink-0",children:_.jsx("span",{className:"text-indigo-600 text-2xl font-bold",children:((l=t==null?void 0:t.displayName)==null?void 0:l.charAt(0))||"U"})}),_.jsxs("div",{children:[_.jsx("div",{className:"text-gray-900 text-lg font-bold",children:t==null?void 0:t.displayName}),_.jsx("div",{className:"text-gray-500 text-sm",children:t==null?void 0:t.email}),_.jsxs("div",{className:"inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-semibold",children:[_.jsx(NR,{size:11})," ",i?"Administrador":r==null?void 0:r.departamento]})]})]}),_.jsx("div",{className:"mt-6 flex flex-col gap-4",children:o.map(h=>_.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-50 last:border-0",children:[_.jsx("span",{className:"text-gray-500 text-sm font-medium",children:h.label}),_.jsx("span",{className:"text-gray-900 text-sm font-semibold",children:h.value})]},h.label))})]})]})}const o_="ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";function wk(r=12){const e=crypto.getRandomValues(new Uint32Array(r));return Array.from(e,t=>o_[t%o_.length]).join("")}const a_={nombre:"",email:"",departamento:""};function Ek({orgId:r,adminUid:e}){const[t,i]=ae.useState([]),[o,l]=ae.useState(!0),[h,f]=ae.useState(null),[g,v]=ae.useState(a_),[E,I]=ae.useState({}),[b,O]=ae.useState(!1),[q,$]=ae.useState(null),[U,X]=ae.useState(!1),te=async()=>{l(!0);try{const P=(await up(sp(wl(rn,"usuarios"),ip("orgId","==",r)))).docs.map(D=>({id:D.id,...D.data()}));i(P.sort((D,x)=>D.nombre.localeCompare(x.nombre)))}catch(R){console.error("Error al cargar integrantes:",R),f("No se pudieron cargar los integrantes.")}finally{l(!1)}};ae.useEffect(()=>{te()},[r]);const ye=(R,P)=>{v(D=>({...D,[R]:P})),I(D=>({...D,[R]:void 0}))},ce=(R,P)=>{const D={};return R?R.length>Tt.nombre&&(D.nombre=`Máximo ${Tt.nombre} caracteres`):D.nombre="Requerido",P?aw(P)||(D.email="Formato inválido"):D.email="Requerido",g.departamento||(D.departamento="Seleccione la oficina"),D},Se=async R=>{R.preventDefault();const P=fr(g.nombre),D=fr(g.email).toLowerCase(),x=ce(P,D);if(Object.keys(x).length>0)return I(x);O(!0),f(null);const je=wk(),Ze=xl();let it=!1;try{const Oe=await H_(Ze,D,je);it=!0,await K_(Oe.user,{displayName:P}),await GC(sn(rn,"usuarios",Oe.user.uid),{nombre:P,email:D,departamento:g.departamento,rol:"usuario",orgId:r,activo:!0,debeCambiarClave:!0,fechaRegistro:new Date}),$({nombre:P,email:D,clave:je}),X(!1),v(a_),te()}catch(Oe){console.error("Error al crear integrante:",Oe),Oe instanceof Vt&&Oe.code==="auth/email-already-in-use"?f("Ya existe una cuenta con ese correo."):f(it?"La cuenta se creó, pero no se pudo guardar su perfil. Revisa los permisos e inténtalo de nuevo.":"No se pudo crear el integrante. Revisa los datos e intenta de nuevo.")}finally{await Ti(Ze),O(!1)}},pe=async(R,P)=>{try{await Do(sn(rn,"usuarios",R),{departamento:P}),i(D=>D.map(x=>x.id===R?{...x,departamento:P}:x))}catch(D){console.error("Error al cambiar la oficina:",D),f("No se pudo cambiar la oficina.")}},k=async(R,P)=>{try{await Do(sn(rn,"usuarios",R),{activo:P}),i(D=>D.map(x=>x.id===R?{...x,activo:P}:x))}catch(D){console.error("Error al cambiar el estado:",D),f("No se pudo cambiar el estado del integrante.")}},S=async()=>{if(q)try{await navigator.clipboard.writeText(q.clave),X(!0)}catch{}},C=R=>`w-full py-2.5 px-3 border rounded-lg text-sm outline-none focus:border-indigo-600 ${R?"border-red-400 bg-red-50":"border-gray-200 bg-white"}`;return _.jsxs("div",{className:"max-w-4xl",children:[_.jsx("h1",{className:"text-gray-900 text-2xl font-extrabold mb-1",children:"Integrantes"}),_.jsx("p",{className:"text-gray-500 text-sm mb-6",children:"Personas de tu empresa. Aquí las agregas y defines en qué oficina están."}),h&&_.jsxs("div",{role:"alert",className:"mb-5 flex items-start justify-between gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600",children:[_.jsx("span",{children:h}),_.jsx("button",{onClick:()=>f(null),"aria-label":"Cerrar aviso",className:"shrink-0 text-red-400 hover:text-red-600",children:_.jsx(df,{size:18})})]}),q&&_.jsxs("div",{className:"mb-6 rounded-xl border border-green-200 bg-green-50 p-4",children:[_.jsxs("p",{className:"text-green-800 text-sm font-semibold mb-1",children:["Integrante creado: ",q.nombre]}),_.jsxs("p",{className:"text-green-700 text-sm mb-3",children:["Entrégale esta contraseña temporal a ",_.jsx("strong",{children:q.email}),". No se vuelve a mostrar, y al entrar tendrá que cambiarla."]}),_.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[_.jsx("code",{className:"rounded-lg bg-white border border-green-200 px-3 py-2 text-base font-bold tracking-wider text-gray-900",children:q.clave}),_.jsxs("button",{onClick:S,className:"flex items-center gap-2 rounded-lg border border-green-300 bg-white px-3 py-2 text-sm font-semibold text-green-700 hover:bg-green-100",children:[_.jsx(lR,{size:14})," ",U?"Copiada":"Copiar"]}),_.jsx("button",{onClick:()=>$(null),className:"text-sm font-medium text-green-700 hover:underline",children:"Cerrar"})]})]}),_.jsxs("form",{onSubmit:Se,noValidate:!0,className:"bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-8",children:[_.jsxs("h2",{className:"text-gray-900 text-base font-bold mb-4 flex items-center gap-2",children:[_.jsx(VR,{size:18})," Agregar integrante"]}),_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"int-nombre",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Nombre y apellido"}),_.jsx("input",{id:"int-nombre",value:g.nombre,maxLength:Tt.nombre,onChange:R=>ye("nombre",R.target.value),className:C(E.nombre)}),E.nombre&&_.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:E.nombre})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"int-correo",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Correo"}),_.jsx("input",{id:"int-correo",type:"email",value:g.email,maxLength:Tt.email,onChange:R=>ye("email",R.target.value),className:C(E.email)}),E.email&&_.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:E.email})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"int-oficina",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Oficina"}),_.jsxs("select",{id:"int-oficina",value:g.departamento,onChange:R=>ye("departamento",R.target.value),className:C(E.departamento),children:[_.jsx("option",{value:"",disabled:!0,children:"Seleccionar..."}),Qa.map(R=>_.jsx("option",{value:R,children:R},R))]}),E.departamento&&_.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:E.departamento})]})]}),_.jsx("div",{className:"flex justify-end mt-5",children:_.jsx("button",{type:"submit",disabled:b,className:"rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-indigo-700 disabled:bg-indigo-300",children:b?"Creando...":"Crear integrante"})})]}),_.jsxs("h2",{className:"text-gray-900 text-base font-bold mb-3",children:["Equipo (",t.length,")"]}),o?_.jsx("p",{className:"text-gray-400 text-sm",children:"Cargando..."}):_.jsx("div",{className:"flex flex-col gap-3",children:t.map(R=>{const P=R.id===e,D=R.activo!==!1;return _.jsxs("div",{className:`bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-5 ${D?"":"opacity-60"}`,children:[_.jsxs("div",{className:"flex-1 min-w-0",children:[_.jsxs("div",{className:"text-gray-900 text-sm font-semibold truncate",children:[R.nombre,R.rol==="admin"&&_.jsx("span",{className:"ml-2 rounded bg-indigo-50 px-1.5 py-0.5 text-[11px] font-bold text-indigo-600",children:"Admin"}),!D&&_.jsx("span",{className:"ml-2 rounded bg-gray-100 px-1.5 py-0.5 text-[11px] font-bold text-gray-500",children:"Desactivado"})]}),_.jsx("div",{className:"text-gray-500 text-xs truncate",children:R.email})]}),_.jsxs("select",{value:R.departamento,onChange:x=>pe(R.id,x.target.value),"aria-label":`Oficina de ${R.nombre}`,className:"md:w-56 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-600",children:[!Qa.includes(R.departamento)&&_.jsx("option",{value:R.departamento,children:R.departamento}),Qa.map(x=>_.jsx("option",{value:x,children:x},x))]}),!P&&_.jsx("button",{onClick:()=>k(R.id,!D),className:`rounded-lg border px-3 py-2 text-sm font-semibold ${D?"border-red-100 bg-red-50 text-red-600 hover:bg-red-100":"border-green-200 bg-green-50 text-green-700 hover:bg-green-100"}`,children:D?"Desactivar":"Activar"})]},R.id)})})]})}function Tk({onListo:r,onCerrarSesion:e}){const[t,i]=ae.useState(""),[o,l]=ae.useState(""),[h,f]=ae.useState(null),[g,v]=ae.useState(!1),E=async b=>{b.preventDefault();const O=dt.currentUser;if(O){if(t.length<8)return f("La contraseña debe tener mínimo 8 caracteres.");if(t!==o)return f("Las contraseñas no coinciden.");v(!0),f(null);try{await lx(O,t),await Do(sn(rn,"usuarios",O.uid),{debeCambiarClave:!1}),r()}catch(q){console.error("Error al cambiar la contraseña:",q),q instanceof Vt&&q.code==="auth/requires-recent-login"?f("Por seguridad, cierra sesión y vuelve a entrar con tu contraseña temporal."):f("No se pudo cambiar la contraseña. Intenta de nuevo.")}finally{v(!1)}}},I="w-full py-3 px-3 border border-gray-200 bg-slate-50 rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white";return _.jsx("div",{className:"min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans",children:_.jsxs("form",{onSubmit:E,className:"bg-white rounded-2xl p-8 w-full max-w-[420px] shadow-[0_8px_40px_rgba(30,63,174,0.12)]",children:[_.jsx("h2",{className:"text-gray-900 text-2xl font-extrabold mb-1",children:"Crea tu contraseña"}),_.jsx("p",{className:"text-gray-500 text-sm mb-6",children:"Entraste con una contraseña temporal. Elige una nueva para continuar."}),h&&_.jsx("div",{role:"alert",className:"bg-red-50 text-red-600 p-3 rounded-xl text-sm mb-5 border border-red-100 font-semibold",children:h}),_.jsxs("div",{className:"flex flex-col gap-4",children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"nueva",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Nueva contraseña"}),_.jsx("input",{id:"nueva",type:"password",value:t,onChange:b=>i(b.target.value),placeholder:"Mínimo 8 caracteres",className:I})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"confirmar",className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Repite la contraseña"}),_.jsx("input",{id:"confirmar",type:"password",value:o,onChange:b=>l(b.target.value),className:I})]}),_.jsx("button",{type:"submit",disabled:g,className:"w-full mt-1 bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300",children:g?"Guardando...":"Guardar y continuar"}),_.jsx("button",{type:"button",onClick:e,className:"text-gray-500 text-sm font-medium hover:underline",children:"Cerrar sesión"})]})]})})}function l_({titulo:r,mensaje:e,onCerrarSesion:t}){return _.jsx("div",{className:"min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans",children:_.jsxs("div",{className:"bg-white rounded-2xl p-8 w-full max-w-[420px] text-center shadow-[0_8px_40px_rgba(30,63,174,0.12)]",children:[_.jsx("h2",{className:"text-gray-900 text-xl font-extrabold mb-2",children:r}),_.jsx("p",{className:"text-gray-500 text-sm leading-relaxed mb-6",children:e}),_.jsx("button",{onClick:t,className:"w-full bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700",children:"Cerrar sesión"})]})})}function Ik({email:r,onVerificado:e,onCerrarSesion:t}){const[i,o]=ae.useState(null),[l,h]=ae.useState(!1),f=async()=>{const v=dt.currentUser;if(v){h(!0),o(null);try{dt.languageCode="es",await G_(v),o({tipo:"ok",texto:"Te enviamos el correo de nuevo. Revisa también la carpeta de spam."})}catch(E){console.error("Error al reenviar la verificación:",E),o({tipo:"error",texto:E instanceof Vt&&E.code==="auth/too-many-requests"?"Pediste demasiados correos. Espera unos minutos e intenta de nuevo.":"No se pudo enviar el correo. Intenta de nuevo."})}finally{h(!1)}}},g=async()=>{const v=dt.currentUser;if(v){h(!0),o(null);try{if(await v.reload(),!v.emailVerified){o({tipo:"error",texto:"Todavía no aparece verificado. Abre el enlace del correo y vuelve a intentar."});return}await v.getIdToken(!0),e()}catch(E){console.error("Error al comprobar la verificación:",E),o({tipo:"error",texto:"No se pudo comprobar. Intenta de nuevo."})}finally{h(!1)}}};return _.jsx("div",{className:"min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans",children:_.jsxs("div",{className:"bg-white rounded-2xl p-8 w-full max-w-[440px] text-center shadow-[0_8px_40px_rgba(30,63,174,0.12)]",children:[_.jsx("h2",{className:"text-gray-900 text-xl font-extrabold mb-2",children:"Verifica tu correo"}),_.jsxs("p",{className:"text-gray-500 text-sm leading-relaxed mb-6",children:["Para administrar tu empresa necesitamos confirmar que ",_.jsx("strong",{className:"text-gray-900",children:r})," es tuyo. Te enviamos un enlace: ábrelo y luego vuelve aquí."]}),i&&_.jsx("div",{role:i.tipo==="error"?"alert":"status",className:`p-3 rounded-xl text-sm mb-5 border font-medium ${i.tipo==="error"?"bg-red-50 text-red-600 border-red-100":"bg-green-50 text-green-700 border-green-100"}`,children:i.texto}),_.jsxs("div",{className:"flex flex-col gap-3",children:[_.jsx("button",{onClick:g,disabled:l,className:"w-full bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300",children:"Ya lo verifiqué"}),_.jsx("button",{onClick:f,disabled:l,className:"w-full border border-gray-300 text-gray-700 py-3 rounded-lg text-sm font-semibold hover:bg-gray-50 disabled:opacity-60",children:"Reenviar correo"}),_.jsx("button",{onClick:t,className:"text-gray-500 text-sm font-medium hover:underline",children:"Cerrar sesión"})]})]})})}function xk({onNavigateToLogin:r}){var ee,de,se,L;const[e,t]=ae.useState("nueva"),[i,o]=ae.useState(!1),[l,h]=ae.useState(null),[f,g]=ae.useState(null),[v,E]=ae.useState(0),[I,b]=ae.useState(((ee=dt.currentUser)==null?void 0:ee.emailVerified)??!1),{perfil:O,setPerfil:q,organizacion:$,sinPerfil:U}=ek(),{solicitudes:X,cargando:te,cambiarEstado:ye,responder:ce,eliminar:Se,guardar:pe}=lk(O,h),k=(O==null?void 0:O.rol)==="admin",S=((de=dt.currentUser)==null?void 0:de.displayName)??"",C=()=>{Ti(dt),r()},R=H=>{t(H),o(!1),h(null),H==="nueva"&&!f&&E(_e=>_e+1)},P=H=>{g(H),E(_e=>_e+1),t("nueva")},D=()=>{g(null),E(H=>H+1)},x=async H=>{const _e=await pe(H,(f==null?void 0:f.id)??null);return _e&&g(null),_e};if(U)return _.jsx(l_,{titulo:"Tu cuenta no pertenece a ninguna empresa",mensaje:"Pídele a tu administrador que te agregue desde la sección Integrantes. Si vas a administrar una empresa nueva, cierra sesión y regístrala desde la pantalla de acceso.",onCerrarSesion:C});if((O==null?void 0:O.activo)===!1)return _.jsx(l_,{titulo:"Cuenta desactivada",mensaje:"Tu administrador desactivó tu acceso. Si crees que es un error, habla con él.",onCerrarSesion:C});if(O!=null&&O.debeCambiarClave)return _.jsx(Tk,{onListo:()=>q(H=>H&&{...H,debeCambiarClave:!1}),onCerrarSesion:C});if(k&&!I)return _.jsx(Ik,{email:((se=dt.currentUser)==null?void 0:se.email)??"",onVerificado:()=>b(!0),onCerrarSesion:C});const je=[{id:"inicio",label:"Inicio",icon:_.jsx(mR,{size:20})},{id:"nueva",label:"Nueva solicitud",icon:_.jsx(dR,{size:20})},{id:"mis",label:k?"Solicitudes":"Mis solicitudes",icon:_.jsx(cp,{size:20})},...k?[{id:"integrantes",label:"Integrantes",icon:_.jsx(jR,{size:20})}]:[],{id:"perfil",label:"Perfil",icon:_.jsx(LR,{size:20})}],Ze=(L=je.find(H=>H.id===e))==null?void 0:L.label,it=_.jsx(uk,{items:je,activo:e,nombre:S,rolTexto:k?"Administrador":(O==null?void 0:O.departamento)||"Usuario",onSeleccionar:R,onCerrarSesion:C}),Oe={inicio:_.jsx(ck,{solicitudes:X,esAdmin:k}),nueva:_.jsx(mk,{inicial:f,onGuardar:x,onCancelar:D,onTerminado:()=>t("mis")},v),mis:_.jsx(_k,{solicitudes:X,cargando:te,esAdmin:k,onCambiarEstado:ye,onResponder:ce,onEditar:P,onEliminar:Se}),integrantes:k&&(O!=null&&O.orgId)&&dt.currentUser?_.jsx(Ek,{orgId:O.orgId,adminUid:dt.currentUser.uid}):null,perfil:_.jsx(vk,{perfil:O,organizacion:$})};return _.jsxs("div",{className:"flex min-h-screen font-sans bg-slate-50",children:[_.jsx("aside",{className:"hidden lg:flex flex-col w-64 shrink-0 fixed top-0 left-0 h-full bg-gradient-to-br from-indigo-700 to-indigo-900",children:it}),_.jsx("div",{className:`lg:hidden fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 ${i?"opacity-100":"opacity-0 pointer-events-none"}`,onClick:()=>o(!1),"aria-hidden":"true"}),_.jsxs("aside",{className:`lg:hidden fixed top-0 left-0 z-50 h-full w-64 flex flex-col bg-gradient-to-br from-indigo-700 to-indigo-900 transition-transform duration-200 ${i?"translate-x-0":"-translate-x-full"}`,children:[_.jsx("button",{onClick:()=>o(!1),"aria-label":"Cerrar menú",className:"absolute top-4 right-4 text-white/70 hover:text-white",children:_.jsx(df,{size:22})}),it]}),_.jsxs("main",{className:"flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0",children:[_.jsxs("header",{className:"sticky top-0 z-40 flex items-center gap-3 px-4 sm:px-8 h-16 bg-white border-b border-gray-100 shadow-sm",children:[_.jsx("button",{onClick:()=>o(!0),"aria-label":"Abrir menú",className:"lg:hidden p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-100",children:_.jsx(TR,{size:22})}),_.jsx("span",{className:"lg:hidden text-gray-900 text-sm font-semibold",children:Ze}),_.jsxs("div",{className:"hidden lg:flex items-center gap-2 text-sm",children:[_.jsx("span",{className:"text-gray-400",children:($==null?void 0:$.nombre)??"GestioSync"}),_.jsx("span",{className:"text-gray-300",children:"/"}),_.jsx("span",{className:"text-gray-900 font-semibold",children:Ze})]})]}),_.jsxs("div",{className:"flex-1 p-4 sm:p-8",children:[l&&_.jsxs("div",{role:"alert",className:"mb-5 flex items-start justify-between gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600",children:[_.jsx("span",{children:l}),_.jsx("button",{onClick:()=>h(null),"aria-label":"Cerrar aviso",className:"shrink-0 text-red-400 hover:text-red-600",children:_.jsx(df,{size:18})})]}),Oe[e]]})]})]})}function Sk({onNavigateToLogin:r}){const[e,t]=ae.useState(""),[i,o]=ae.useState(!1),[l,h]=ae.useState(!1),[f,g]=ae.useState(""),v=async E=>{if(E.preventDefault(),!e){g("Escribe tu correo.");return}o(!0),g("");try{await ox(dt,e),h(!0)}catch(I){I instanceof Vt&&I.code==="auth/user-not-found"?g("No hay ninguna cuenta registrada con este correo."):I instanceof Vt&&I.code==="auth/invalid-email"?g("Ese correo no parece válido."):g("No se pudo enviar el enlace. Intenta de nuevo en un rato.")}finally{o(!1)}};return l?_.jsx("div",{className:"min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans",children:_.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:_.jsxs("div",{className:"bg-white py-10 px-6 shadow-sm sm:rounded-2xl sm:px-10 border border-gray-100 text-center",children:[_.jsx("div",{className:"mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-50 mb-6",children:_.jsx(Sl,{className:"h-8 w-8 text-green-500"})}),_.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-3",children:"Revisa tu correo"}),_.jsxs("p",{className:"text-sm text-gray-500 mb-8 leading-relaxed",children:["Te enviamos un enlace para cambiar tu contraseña a ",_.jsx("strong",{className:"text-gray-900",children:e}),"."]}),_.jsx("button",{onClick:r,className:"w-full flex justify-center py-3 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors",children:"Volver al inicio de sesión"})]})})}):_.jsxs("div",{className:"min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans",children:[_.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:_.jsx("div",{className:"flex justify-center mb-8",children:_.jsx(hp,{})})}),_.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:_.jsxs("div",{className:"bg-white py-8 px-4 shadow-sm sm:rounded-2xl sm:px-10 border border-gray-100",children:[_.jsxs("button",{onClick:r,className:"flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-6 transition-colors",children:[_.jsx(X0,{className:"h-4 w-4 mr-1"}),"Volver atrás"]}),_.jsxs("div",{className:"mb-8",children:[_.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Recuperar contraseña"}),_.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Escribe el correo de tu cuenta y te enviamos un enlace para crear una nueva."})]}),_.jsxs("form",{className:"space-y-6",onSubmit:v,children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-700",children:"Correo"}),_.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[_.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:_.jsx(tw,{className:"h-5 w-5 text-gray-400"})}),_.jsx("input",{id:"email",type:"email",required:!0,value:e,onChange:E=>t(E.target.value),className:`block w-full pl-10 py-3 sm:text-sm border rounded-lg outline-none transition-colors ${f?"border-red-300 focus:ring-red-500 focus:border-red-500":"border-gray-200 focus:ring-indigo-500 focus:border-indigo-500"}`,placeholder:"tucorreo@ejemplo.com"})]}),f&&_.jsx("p",{className:"mt-2 text-sm text-red-600",children:f})]}),_.jsx("button",{type:"submit",disabled:i,className:"w-full flex justify-center py-3 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:i?"Enviando...":"Enviar enlace de recuperación"})]})]})})]})}function Ak(){const[r,e]=ae.useState("login"),[t,i]=ae.useState(!0);return ae.useEffect(()=>{const o=vx(dt,l=>{e(l?"dashboard":h=>h==="dashboard"?"login":h),i(!1)});return()=>o()},[]),t?_.jsx("div",{className:"h-screen w-screen flex items-center justify-center bg-[#F9FAFB]",children:_.jsx("div",{className:"w-10 h-10 border-4 border-[#1E3FAE] border-t-transparent rounded-full animate-spin"})}):_.jsxs(_.Fragment,{children:[r==="login"&&_.jsx(UR,{onNavigateToForgot:()=>e("forgot"),onNavigateToRegister:()=>e("register")}),r==="register"&&_.jsx(JR,{onNavigateToLogin:()=>e("login")}),r==="dashboard"&&_.jsx(xk,{onNavigateToLogin:()=>e("login")}),r==="forgot"&&_.jsx(Sk,{onNavigateToLogin:()=>e("login")})]})}IE.createRoot(document.getElementById("root")).render(_.jsx(Ak,{}));
