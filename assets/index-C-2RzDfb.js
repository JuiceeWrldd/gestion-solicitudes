(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var id={exports:{}},Da={},sd={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Vw(){if(og)return Pe;og=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.iterator;function D(V){return V===null||typeof V!="object"?null:(V=I&&V[I]||V["@@iterator"],typeof V=="function"?V:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,J={};function q(V,W,Ae){this.props=V,this.context=W,this.refs=J,this.updater=Ae||z}q.prototype.isReactComponent={},q.prototype.setState=function(V,W){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,W,"setState")},q.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ce(){}ce.prototype=q.prototype;function pe(V,W,Ae){this.props=V,this.context=W,this.refs=J,this.updater=Ae||z}var ye=pe.prototype=new ce;ye.constructor=pe,X(ye,q.prototype),ye.isPureReactComponent=!0;var ie=Array.isArray,ke=Object.prototype.hasOwnProperty,Se={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function A(V,W,Ae){var H,Q={},ne=null,le=null;if(W!=null)for(H in W.ref!==void 0&&(le=W.ref),W.key!==void 0&&(ne=""+W.key),W)ke.call(W,H)&&!k.hasOwnProperty(H)&&(Q[H]=W[H]);var we=arguments.length-2;if(we===1)Q.children=Ae;else if(1<we){for(var Oe=Array(we),qe=0;qe<we;qe++)Oe[qe]=arguments[qe+2];Q.children=Oe}if(V&&V.defaultProps)for(H in we=V.defaultProps,we)Q[H]===void 0&&(Q[H]=we[H]);return{$$typeof:r,type:V,key:ne,ref:le,props:Q,_owner:Se.current}}function R(V,W){return{$$typeof:r,type:V.type,key:W,ref:V.ref,props:V.props,_owner:V._owner}}function b(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function P(V){var W={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Ae){return W[Ae]})}var O=/\/+/g;function x(V,W){return typeof V=="object"&&V!==null&&V.key!=null?P(""+V.key):W.toString(36)}function $e(V,W,Ae,H,Q){var ne=typeof V;(ne==="undefined"||ne==="boolean")&&(V=null);var le=!1;if(V===null)le=!0;else switch(ne){case"string":case"number":le=!0;break;case"object":switch(V.$$typeof){case r:case e:le=!0}}if(le)return le=V,Q=Q(le),V=H===""?"."+x(le,0):H,ie(Q)?(Ae="",V!=null&&(Ae=V.replace(O,"$&/")+"/"),$e(Q,W,Ae,"",function(qe){return qe})):Q!=null&&(b(Q)&&(Q=R(Q,Ae+(!Q.key||le&&le.key===Q.key?"":(""+Q.key).replace(O,"$&/")+"/")+V)),W.push(Q)),1;if(le=0,H=H===""?".":H+":",ie(V))for(var we=0;we<V.length;we++){ne=V[we];var Oe=H+x(ne,we);le+=$e(ne,W,Ae,Oe,Q)}else if(Oe=D(V),typeof Oe=="function")for(V=Oe.call(V),we=0;!(ne=V.next()).done;)ne=ne.value,Oe=H+x(ne,we++),le+=$e(ne,W,Ae,Oe,Q);else if(ne==="object")throw W=String(V),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return le}function ot(V,W,Ae){if(V==null)return V;var H=[],Q=0;return $e(V,H,"","",function(ne){return W.call(Ae,ne,Q++)}),H}function vt(V){if(V._status===-1){var W=V._result;W=W(),W.then(function(Ae){(V._status===0||V._status===-1)&&(V._status=1,V._result=Ae)},function(Ae){(V._status===0||V._status===-1)&&(V._status=2,V._result=Ae)}),V._status===-1&&(V._status=0,V._result=W)}if(V._status===1)return V._result.default;throw V._result}var He={current:null},te={transition:null},me={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:te,ReactCurrentOwner:Se};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:ot,forEach:function(V,W,Ae){ot(V,function(){W.apply(this,arguments)},Ae)},count:function(V){var W=0;return ot(V,function(){W++}),W},toArray:function(V){return ot(V,function(W){return W})||[]},only:function(V){if(!b(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Pe.Component=q,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=pe,Pe.StrictMode=s,Pe.Suspense=g,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Pe.act=ae,Pe.cloneElement=function(V,W,Ae){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var H=X({},V.props),Q=V.key,ne=V.ref,le=V._owner;if(W!=null){if(W.ref!==void 0&&(ne=W.ref,le=Se.current),W.key!==void 0&&(Q=""+W.key),V.type&&V.type.defaultProps)var we=V.type.defaultProps;for(Oe in W)ke.call(W,Oe)&&!k.hasOwnProperty(Oe)&&(H[Oe]=W[Oe]===void 0&&we!==void 0?we[Oe]:W[Oe])}var Oe=arguments.length-2;if(Oe===1)H.children=Ae;else if(1<Oe){we=Array(Oe);for(var qe=0;qe<Oe;qe++)we[qe]=arguments[qe+2];H.children=we}return{$$typeof:r,type:V.type,key:Q,ref:ne,props:H,_owner:le}},Pe.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Pe.createElement=A,Pe.createFactory=function(V){var W=A.bind(null,V);return W.type=V,W},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(V){return{$$typeof:m,render:V}},Pe.isValidElement=b,Pe.lazy=function(V){return{$$typeof:T,_payload:{_status:-1,_result:V},_init:vt}},Pe.memo=function(V,W){return{$$typeof:_,type:V,compare:W===void 0?null:W}},Pe.startTransition=function(V){var W=te.transition;te.transition={};try{V()}finally{te.transition=W}},Pe.unstable_act=ae,Pe.useCallback=function(V,W){return He.current.useCallback(V,W)},Pe.useContext=function(V){return He.current.useContext(V)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(V){return He.current.useDeferredValue(V)},Pe.useEffect=function(V,W){return He.current.useEffect(V,W)},Pe.useId=function(){return He.current.useId()},Pe.useImperativeHandle=function(V,W,Ae){return He.current.useImperativeHandle(V,W,Ae)},Pe.useInsertionEffect=function(V,W){return He.current.useInsertionEffect(V,W)},Pe.useLayoutEffect=function(V,W){return He.current.useLayoutEffect(V,W)},Pe.useMemo=function(V,W){return He.current.useMemo(V,W)},Pe.useReducer=function(V,W,Ae){return He.current.useReducer(V,W,Ae)},Pe.useRef=function(V){return He.current.useRef(V)},Pe.useState=function(V){return He.current.useState(V)},Pe.useSyncExternalStore=function(V,W,Ae){return He.current.useSyncExternalStore(V,W,Ae)},Pe.useTransition=function(){return He.current.useTransition()},Pe.version="18.3.1",Pe}var ag;function tf(){return ag||(ag=1,sd.exports=Vw()),sd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function Ow(){if(lg)return Da;lg=1;var r=tf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var T,I={},D=null,z=null;_!==void 0&&(D=""+_),g.key!==void 0&&(D=""+g.key),g.ref!==void 0&&(z=g.ref);for(T in g)s.call(g,T)&&!u.hasOwnProperty(T)&&(I[T]=g[T]);if(m&&m.defaultProps)for(T in g=m.defaultProps,g)I[T]===void 0&&(I[T]=g[T]);return{$$typeof:e,type:m,key:D,ref:z,props:I,_owner:o.current}}return Da.Fragment=t,Da.jsx=h,Da.jsxs=h,Da}var ug;function Lw(){return ug||(ug=1,id.exports=Ow()),id.exports}var w=Lw(),Pu={},od={exports:{}},Xt={},ad={exports:{}},ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function Mw(){return cg||(cg=1,(function(r){function e(te,me){var ae=te.length;te.push(me);e:for(;0<ae;){var V=ae-1>>>1,W=te[V];if(0<o(W,me))te[V]=me,te[ae]=W,ae=V;else break e}}function t(te){return te.length===0?null:te[0]}function s(te){if(te.length===0)return null;var me=te[0],ae=te.pop();if(ae!==me){te[0]=ae;e:for(var V=0,W=te.length,Ae=W>>>1;V<Ae;){var H=2*(V+1)-1,Q=te[H],ne=H+1,le=te[ne];if(0>o(Q,ae))ne<W&&0>o(le,Q)?(te[V]=le,te[ne]=ae,V=ne):(te[V]=Q,te[H]=ae,V=H);else if(ne<W&&0>o(le,ae))te[V]=le,te[ne]=ae,V=ne;else break e}}return me}function o(te,me){var ae=te.sortIndex-me.sortIndex;return ae!==0?ae:te.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],T=1,I=null,D=3,z=!1,X=!1,J=!1,q=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(te){for(var me=t(_);me!==null;){if(me.callback===null)s(_);else if(me.startTime<=te)s(_),me.sortIndex=me.expirationTime,e(g,me);else break;me=t(_)}}function ie(te){if(J=!1,ye(te),!X)if(t(g)!==null)X=!0,vt(ke);else{var me=t(_);me!==null&&He(ie,me.startTime-te)}}function ke(te,me){X=!1,J&&(J=!1,ce(A),A=-1),z=!0;var ae=D;try{for(ye(me),I=t(g);I!==null&&(!(I.expirationTime>me)||te&&!P());){var V=I.callback;if(typeof V=="function"){I.callback=null,D=I.priorityLevel;var W=V(I.expirationTime<=me);me=r.unstable_now(),typeof W=="function"?I.callback=W:I===t(g)&&s(g),ye(me)}else s(g);I=t(g)}if(I!==null)var Ae=!0;else{var H=t(_);H!==null&&He(ie,H.startTime-me),Ae=!1}return Ae}finally{I=null,D=ae,z=!1}}var Se=!1,k=null,A=-1,R=5,b=-1;function P(){return!(r.unstable_now()-b<R)}function O(){if(k!==null){var te=r.unstable_now();b=te;var me=!0;try{me=k(!0,te)}finally{me?x():(Se=!1,k=null)}}else Se=!1}var x;if(typeof pe=="function")x=function(){pe(O)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,ot=$e.port2;$e.port1.onmessage=O,x=function(){ot.postMessage(null)}}else x=function(){q(O,0)};function vt(te){k=te,Se||(Se=!0,x())}function He(te,me){A=q(function(){te(r.unstable_now())},me)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(te){te.callback=null},r.unstable_continueExecution=function(){X||z||(X=!0,vt(ke))},r.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<te?Math.floor(1e3/te):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(te){switch(D){case 1:case 2:case 3:var me=3;break;default:me=D}var ae=D;D=me;try{return te()}finally{D=ae}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(te,me){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var ae=D;D=te;try{return me()}finally{D=ae}},r.unstable_scheduleCallback=function(te,me,ae){var V=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?V+ae:V):ae=V,te){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ae+W,te={id:T++,callback:me,priorityLevel:te,startTime:ae,expirationTime:W,sortIndex:-1},ae>V?(te.sortIndex=ae,e(_,te),t(g)===null&&te===t(_)&&(J?(ce(A),A=-1):J=!0,He(ie,ae-V))):(te.sortIndex=W,e(g,te),X||z||(X=!0,vt(ke))),te},r.unstable_shouldYield=P,r.unstable_wrapCallback=function(te){var me=D;return function(){var ae=D;D=me;try{return te.apply(this,arguments)}finally{D=ae}}}})(ld)),ld}var hg;function jw(){return hg||(hg=1,ad.exports=Mw()),ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function Fw(){if(dg)return Xt;dg=1;var r=tf(),e=jw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},I={};function D(n){return g.call(I,n)?!0:g.call(T,n)?!1:_.test(n)?I[n]=!0:(T[n]=!0,!1)}function z(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function X(n,i,a,c){if(i===null||typeof i>"u"||z(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function J(n,i,a,c,d,f,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=f,this.removeEmptyString=v}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){q[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];q[i]=new J(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){q[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){q[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){q[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){q[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){q[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){q[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){q[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var ce=/[\-:]([a-z])/g;function pe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(ce,pe);q[i]=new J(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(ce,pe);q[i]=new J(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(ce,pe);q[i]=new J(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){q[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),q.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){q[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,i,a,c){var d=q.hasOwnProperty(i)?q[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(X(i,a,d,c)&&(a=null),c||d===null?D(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var ie=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ke=Symbol.for("react.element"),Se=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),P=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),ot=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),te=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,V;function W(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var Ae=!1;function H(n,i){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,S=f.length-1;1<=v&&0<=S&&d[v]!==f[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==f[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==f[S]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=S);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function Q(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=H(n.type,!1),n;case 11:return n=H(n.type.render,!1),n;case 1:return n=H(n.type,!0),n;default:return""}}function ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Se:return"Portal";case R:return"Profiler";case A:return"StrictMode";case x:return"Suspense";case $e:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ot:return i=n.displayName||null,i!==null?i:ne(n.type)||"Memo";case vt:i=n._payload,n=n._init;try{return ne(n(i))}catch{}}return null}function le(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Oe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qe(n){var i=Oe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ot(n){n._valueTracker||(n._valueTracker=qe(n))}function zn(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Oe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function An(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Rs(n,i){var a=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ml(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=we(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Cs(n,i){i=i.checked,i!=null&&ye(n,"checked",i,!1)}function ji(n,i){Cs(n,i);var a=we(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?dt(n,i.type,a):i.hasOwnProperty("defaultValue")&&dt(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Fo(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function dt(n,i,a){(i!=="number"||An(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var at=Array.isArray;function xn(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Uo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function zo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(at(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:we(a)}}function gl(n,i){var a=we(i.value),c=we(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Hr(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Bo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ks(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Bo(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qr,yl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=qr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Fi(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_l=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(n){_l.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Kr[i]=Kr[n]})});function Gr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Kr.hasOwnProperty(n)&&Kr[n]?(""+i).trim():i+"px"}function Ps(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Gr(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var $o=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rn(n,i){if(i){if($o[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ns(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qr=null;function Ds(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pr=null,mr=null,rt=null;function Wo(n){if(n=ya(n)){if(typeof pr!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Hl(i),pr(n.stateNode,n.type,i))}}function Yr(n){mr?rt?rt.push(n):rt=[n]:mr=n}function Jr(){if(mr){var n=mr,i=rt;if(rt=mr=null,Wo(n),i)for(n=0;n<i.length;n++)Wo(i[n])}}function vl(n,i){return n(i)}function wl(){}var Bn=!1;function El(n,i,a){if(Bn)return n(i,a);Bn=!0;try{return vl(n,i,a)}finally{Bn=!1,(mr!==null||rt!==null)&&(wl(),Jr())}}function Ui(n,i){var a=n.stateNode;if(a===null)return null;var c=Hl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Xr=!1;if(m)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Xr=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Xr=!1}function Tl(n,i,a,c,d,f,v,S,C){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(G){this.onError(G)}}var gr=!1,$n=null,bs=!1,pn=null,Il={onError:function(n){gr=!0,$n=n}};function Sl(n,i,a,c,d,f,v,S,C){gr=!1,$n=null,Tl.apply(Il,arguments)}function Ho(n,i,a,c,d,f,v,S,C){if(Sl.apply(this,arguments),gr){if(gr){var F=$n;gr=!1,$n=null}else throw Error(t(198));bs||(bs=!0,pn=F)}}function Cn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function qo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Al(n){if(Cn(n)!==n)throw Error(t(188))}function xl(n){var i=n.alternate;if(!i){if(i=Cn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return Al(d),n;if(f===c)return Al(d),i;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=f;break}if(S===c){v=!0,c=d,a=f;break}S=S.sibling}if(!v){for(S=f.child;S;){if(S===a){v=!0,a=f,c=d;break}if(S===c){v=!0,c=f,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Rl(n){return n=xl(n),n!==null?zi(n):null}function zi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=zi(n);if(i!==null)return i;n=n.sibling}return null}var Ko=e.unstable_scheduleCallback,Vs=e.unstable_cancelCallback,Bi=e.unstable_shouldYield,yr=e.unstable_requestPaint,Qe=e.unstable_now,Oc=e.unstable_getCurrentPriorityLevel,Os=e.unstable_ImmediatePriority,Go=e.unstable_UserBlockingPriority,$i=e.unstable_NormalPriority,Qo=e.unstable_LowPriority,Ls=e.unstable_IdlePriority,Wi=null,tn=null;function Cl(n){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Wi,n,void 0,(n.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:Hi,Wn=Math.log,mn=Math.LN2;function Hi(n){return n>>>=0,n===0?32:31-(Wn(n)/mn|0)|0}var Hn=64,ei=4194304;function Ue(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function _r(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=Ue(S):(f&=v,f!==0&&(c=Ue(f)))}else v=a&~d,v!==0?c=Ue(v):f!==0&&(c=Ue(f));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-nn(i),d=1<<a,c|=n[a],i&=~d;return c}function qi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ki(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-nn(f),S=1<<v,C=d[v];C===-1?((S&a)===0||(S&c)!==0)&&(d[v]=qi(S,i)):C<=i&&(n.expiredLanes|=S),f&=~S}}function Yo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Jo(){var n=Hn;return Hn<<=1,(Hn&4194240)===0&&(Hn=64),n}function Xo(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Gi(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-nn(i),n[i]=a}function Lc(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-nn(a),f=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Zo(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-nn(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Le=0;function qn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ea,Ms,ta,na,ra,Kn=!1,js=[],Gn=null,Qn=null,Ct=null,Qi=new Map,vr=new Map,rn=[],kl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ti(n,i){switch(n){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":Qi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":vr.delete(i.pointerId)}}function kn(n,i,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},i!==null&&(i=ya(i),i!==null&&Ms(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Pl(n,i,a,c,d){switch(i){case"focusin":return Gn=kn(Gn,n,i,a,c,d),!0;case"dragenter":return Qn=kn(Qn,n,i,a,c,d),!0;case"mouseover":return Ct=kn(Ct,n,i,a,c,d),!0;case"pointerover":var f=d.pointerId;return Qi.set(f,kn(Qi.get(f)||null,n,i,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,vr.set(f,kn(vr.get(f)||null,n,i,a,c,d)),!0}return!1}function Fs(n){var i=Zi(n.target);if(i!==null){var a=Cn(i);if(a!==null){if(i=a.tag,i===13){if(i=qo(a),i!==null){n.blockedOn=i,ra(n.priority,function(){ta(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function We(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Us(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Qr=c,a.target.dispatchEvent(c),Qr=null}else return i=ya(a),i!==null&&Ms(i),n.blockedOn=a,!1;i.shift()}return!0}function Nl(n,i,a){We(n)&&a.delete(i)}function Mc(){Kn=!1,Gn!==null&&We(Gn)&&(Gn=null),Qn!==null&&We(Qn)&&(Qn=null),Ct!==null&&We(Ct)&&(Ct=null),Qi.forEach(Nl),vr.forEach(Nl)}function ni(n,i){n.blockedOn===i&&(n.blockedOn=null,Kn||(Kn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Mc)))}function ri(n){function i(d){return ni(d,n)}if(0<js.length){ni(js[0],n);for(var a=1;a<js.length;a++){var c=js[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Gn!==null&&ni(Gn,n),Qn!==null&&ni(Qn,n),Ct!==null&&ni(Ct,n),Qi.forEach(i),vr.forEach(i),a=0;a<rn.length;a++)c=rn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<rn.length&&(a=rn[0],a.blockedOn===null);)Fs(a),a.blockedOn===null&&rn.shift()}var wr=ie.ReactCurrentBatchConfig,Er=!0;function Yn(n,i,a,c){var d=Le,f=wr.transition;wr.transition=null;try{Le=1,ia(n,i,a,c)}finally{Le=d,wr.transition=f}}function Dl(n,i,a,c){var d=Le,f=wr.transition;wr.transition=null;try{Le=4,ia(n,i,a,c)}finally{Le=d,wr.transition=f}}function ia(n,i,a,c){if(Er){var d=Us(n,i,a,c);if(d===null)Gc(n,i,c,Jn,a),ti(n,c);else if(Pl(d,n,i,a,c))c.stopPropagation();else if(ti(n,c),i&4&&-1<kl.indexOf(n)){for(;d!==null;){var f=ya(d);if(f!==null&&ea(f),f=Us(n,i,a,c),f===null&&Gc(n,i,c,Jn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Gc(n,i,c,null,a)}}var Jn=null;function Us(n,i,a,c){if(Jn=null,n=Ds(c),n=Zi(n),n!==null)if(i=Cn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=qo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Jn=n,null}function zs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Oc()){case Os:return 1;case Go:return 4;case $i:case Qo:return 16;case Ls:return 536870912;default:return 16}default:return 16}}var sn=null,Bs=null,Tr=null;function bl(){if(Tr)return Tr;var n,i=Bs,a=i.length,c,d="value"in sn?sn.value:sn.textContent,f=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[f-c];c++);return Tr=d.slice(n,1<c?1-c:void 0)}function Yi(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Xn(){return!0}function sa(){return!1}function Lt(n){function i(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xn:sa,this.isPropagationStopped=sa,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),i}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=Lt(Zn),ii=ae({},Zn,{view:0,detail:0}),$s=Lt(ii),Ws,Hs,on,Xi=ae({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Re,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==on&&(on&&n.type==="mousemove"?(Ws=n.screenX-on.screenX,Hs=n.screenY-on.screenY):Hs=Ws=0,on=n),Ws)},movementY:function(n){return"movementY"in n?n.movementY:Hs}}),oa=Lt(Xi),Vl=ae({},Xi,{dataTransfer:0}),Ol=Lt(Vl),qs=ae({},ii,{relatedTarget:0}),kt=Lt(qs),Ll=ae({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ml=Lt(Ll),si=ae({},Zn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Lt(si),p=ae({},Zn,{data:0}),y=Lt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ee(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=U[n])?!!i[n]:!1}function Re(){return ee}var lt=ae({},ii,{key:function(n){if(n.key){var i=E[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Yi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Re,charCode:function(n){return n.type==="keypress"?Yi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Yi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Be=Lt(lt),ft=ae({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),an=Lt(ft),Ir=ae({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Re}),er=Lt(Ir),tr=ae({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ks=Lt(tr),aa=ae({},Xi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),C0=Lt(aa),k0=[9,13,27,32],jc=m&&"CompositionEvent"in window,la=null;m&&"documentMode"in document&&(la=document.documentMode);var P0=m&&"TextEvent"in window&&!la,Xf=m&&(!jc||la&&8<la&&11>=la),Zf=" ",ep=!1;function tp(n,i){switch(n){case"keyup":return k0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Gs=!1;function N0(n,i){switch(n){case"compositionend":return np(i);case"keypress":return i.which!==32?null:(ep=!0,Zf);case"textInput":return n=i.data,n===Zf&&ep?null:n;default:return null}}function D0(n,i){if(Gs)return n==="compositionend"||!jc&&tp(n,i)?(n=bl(),Tr=Bs=sn=null,Gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xf&&i.locale!=="ko"?null:i.data;default:return null}}var b0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!b0[n.type]:i==="textarea"}function ip(n,i,a,c){Yr(c),i=Bl(i,"onChange"),0<i.length&&(a=new Ji("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ua=null,ca=null;function V0(n){Tp(n,0)}function jl(n){var i=Zs(n);if(zn(i))return n}function O0(n,i){if(n==="change")return i}var sp=!1;if(m){var Fc;if(m){var Uc="oninput"in document;if(!Uc){var op=document.createElement("div");op.setAttribute("oninput","return;"),Uc=typeof op.oninput=="function"}Fc=Uc}else Fc=!1;sp=Fc&&(!document.documentMode||9<document.documentMode)}function ap(){ua&&(ua.detachEvent("onpropertychange",lp),ca=ua=null)}function lp(n){if(n.propertyName==="value"&&jl(ca)){var i=[];ip(i,ca,n,Ds(n)),El(V0,i)}}function L0(n,i,a){n==="focusin"?(ap(),ua=i,ca=a,ua.attachEvent("onpropertychange",lp)):n==="focusout"&&ap()}function M0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return jl(ca)}function j0(n,i){if(n==="click")return jl(i)}function F0(n,i){if(n==="input"||n==="change")return jl(i)}function U0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Pn=typeof Object.is=="function"?Object.is:U0;function ha(n,i){if(Pn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Pn(n[d],i[d]))return!1}return!0}function up(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cp(n,i){var a=up(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=up(a)}}function hp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?hp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function dp(){for(var n=window,i=An();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=An(n.document)}return i}function zc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function z0(n){var i=dp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&hp(a.ownerDocument.documentElement,a)){if(c!==null&&zc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=cp(a,f);var v=cp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var B0=m&&"documentMode"in document&&11>=document.documentMode,Qs=null,Bc=null,da=null,$c=!1;function fp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$c||Qs==null||Qs!==An(c)||(c=Qs,"selectionStart"in c&&zc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),da&&ha(da,c)||(da=c,c=Bl(Bc,"onSelect"),0<c.length&&(i=new Ji("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Qs)))}function Fl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ys={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},Wc={},pp={};m&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function Ul(n){if(Wc[n])return Wc[n];if(!Ys[n])return n;var i=Ys[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in pp)return Wc[n]=i[a];return n}var mp=Ul("animationend"),gp=Ul("animationiteration"),yp=Ul("animationstart"),_p=Ul("transitionend"),vp=new Map,wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(n,i){vp.set(n,i),u(i,[n])}for(var Hc=0;Hc<wp.length;Hc++){var qc=wp[Hc],$0=qc.toLowerCase(),W0=qc[0].toUpperCase()+qc.slice(1);oi($0,"on"+W0)}oi(mp,"onAnimationEnd"),oi(gp,"onAnimationIteration"),oi(yp,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(_p,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H0=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function Ep(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Ho(c,i,void 0,n),n.currentTarget=null}function Tp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(i)for(var v=c.length-1;0<=v;v--){var S=c[v],C=S.instance,F=S.currentTarget;if(S=S.listener,C!==f&&d.isPropagationStopped())break e;Ep(d,S,F),f=C}else for(v=0;v<c.length;v++){if(S=c[v],C=S.instance,F=S.currentTarget,S=S.listener,C!==f&&d.isPropagationStopped())break e;Ep(d,S,F),f=C}}}if(bs)throw n=pn,bs=!1,pn=null,n}function Ye(n,i){var a=i[eh];a===void 0&&(a=i[eh]=new Set);var c=n+"__bubble";a.has(c)||(Ip(i,n,2,!1),a.add(c))}function Kc(n,i,a){var c=0;i&&(c|=4),Ip(a,n,c,i)}var zl="_reactListening"+Math.random().toString(36).slice(2);function pa(n){if(!n[zl]){n[zl]=!0,s.forEach(function(a){a!=="selectionchange"&&(H0.has(a)||Kc(a,!1,n),Kc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[zl]||(i[zl]=!0,Kc("selectionchange",!1,i))}}function Ip(n,i,a,c){switch(zs(i)){case 1:var d=Yn;break;case 4:d=Dl;break;default:d=ia}a=d.bind(null,i,a,n),d=void 0,!Xr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Gc(n,i,a,c,d){var f=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;S!==null;){if(v=Zi(S),v===null)return;if(C=v.tag,C===5||C===6){c=f=v;continue e}S=S.parentNode}}c=c.return}El(function(){var F=f,G=Ds(a),Y=[];e:{var K=vp.get(n);if(K!==void 0){var oe=Ji,he=n;switch(n){case"keypress":if(Yi(a)===0)break e;case"keydown":case"keyup":oe=Be;break;case"focusin":he="focus",oe=kt;break;case"focusout":he="blur",oe=kt;break;case"beforeblur":case"afterblur":oe=kt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=oa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Ol;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=er;break;case mp:case gp:case yp:oe=Ml;break;case _p:oe=Ks;break;case"scroll":oe=$s;break;case"wheel":oe=C0;break;case"copy":case"cut":case"paste":oe=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=an}var de=(i&4)!==0,ut=!de&&n==="scroll",L=de?K!==null?K+"Capture":null:K;de=[];for(var N=F,j;N!==null;){j=N;var Z=j.stateNode;if(j.tag===5&&Z!==null&&(j=Z,L!==null&&(Z=Ui(N,L),Z!=null&&de.push(ma(N,Z,j)))),ut)break;N=N.return}0<de.length&&(K=new oe(K,he,null,a,G),Y.push({event:K,listeners:de}))}}if((i&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",oe=n==="mouseout"||n==="pointerout",K&&a!==Qr&&(he=a.relatedTarget||a.fromElement)&&(Zi(he)||he[Sr]))break e;if((oe||K)&&(K=G.window===G?G:(K=G.ownerDocument)?K.defaultView||K.parentWindow:window,oe?(he=a.relatedTarget||a.toElement,oe=F,he=he?Zi(he):null,he!==null&&(ut=Cn(he),he!==ut||he.tag!==5&&he.tag!==6)&&(he=null)):(oe=null,he=F),oe!==he)){if(de=oa,Z="onMouseLeave",L="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(de=an,Z="onPointerLeave",L="onPointerEnter",N="pointer"),ut=oe==null?K:Zs(oe),j=he==null?K:Zs(he),K=new de(Z,N+"leave",oe,a,G),K.target=ut,K.relatedTarget=j,Z=null,Zi(G)===F&&(de=new de(L,N+"enter",he,a,G),de.target=j,de.relatedTarget=ut,Z=de),ut=Z,oe&&he)t:{for(de=oe,L=he,N=0,j=de;j;j=Js(j))N++;for(j=0,Z=L;Z;Z=Js(Z))j++;for(;0<N-j;)de=Js(de),N--;for(;0<j-N;)L=Js(L),j--;for(;N--;){if(de===L||L!==null&&de===L.alternate)break t;de=Js(de),L=Js(L)}de=null}else de=null;oe!==null&&Sp(Y,K,oe,de,!1),he!==null&&ut!==null&&Sp(Y,ut,he,de,!0)}}e:{if(K=F?Zs(F):window,oe=K.nodeName&&K.nodeName.toLowerCase(),oe==="select"||oe==="input"&&K.type==="file")var fe=O0;else if(rp(K))if(sp)fe=F0;else{fe=M0;var _e=L0}else(oe=K.nodeName)&&oe.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(fe=j0);if(fe&&(fe=fe(n,F))){ip(Y,fe,a,G);break e}_e&&_e(n,K,F),n==="focusout"&&(_e=K._wrapperState)&&_e.controlled&&K.type==="number"&&dt(K,"number",K.value)}switch(_e=F?Zs(F):window,n){case"focusin":(rp(_e)||_e.contentEditable==="true")&&(Qs=_e,Bc=F,da=null);break;case"focusout":da=Bc=Qs=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,fp(Y,a,G);break;case"selectionchange":if(B0)break;case"keydown":case"keyup":fp(Y,a,G)}var ve;if(jc)e:{switch(n){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else Gs?tp(n,a)&&(Ie="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ie="onCompositionStart");Ie&&(Xf&&a.locale!=="ko"&&(Gs||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&Gs&&(ve=bl()):(sn=G,Bs="value"in sn?sn.value:sn.textContent,Gs=!0)),_e=Bl(F,Ie),0<_e.length&&(Ie=new y(Ie,n,null,a,G),Y.push({event:Ie,listeners:_e}),ve?Ie.data=ve:(ve=np(a),ve!==null&&(Ie.data=ve)))),(ve=P0?N0(n,a):D0(n,a))&&(F=Bl(F,"onBeforeInput"),0<F.length&&(G=new y("onBeforeInput","beforeinput",null,a,G),Y.push({event:G,listeners:F}),G.data=ve))}Tp(Y,i)})}function ma(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Bl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Ui(n,a),f!=null&&c.unshift(ma(n,f,d)),f=Ui(n,i),f!=null&&c.push(ma(n,f,d))),n=n.return}return c}function Js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Sp(n,i,a,c,d){for(var f=i._reactName,v=[];a!==null&&a!==c;){var S=a,C=S.alternate,F=S.stateNode;if(C!==null&&C===c)break;S.tag===5&&F!==null&&(S=F,d?(C=Ui(a,f),C!=null&&v.unshift(ma(a,C,S))):d||(C=Ui(a,f),C!=null&&v.push(ma(a,C,S)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var q0=/\r\n?/g,K0=/\u0000|\uFFFD/g;function Ap(n){return(typeof n=="string"?n:""+n).replace(q0,`
`).replace(K0,"")}function $l(n,i,a){if(i=Ap(i),Ap(n)!==i&&a)throw Error(t(425))}function Wl(){}var Qc=null,Yc=null;function Jc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xc=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,xp=typeof Promise=="function"?Promise:void 0,Q0=typeof queueMicrotask=="function"?queueMicrotask:typeof xp<"u"?function(n){return xp.resolve(null).then(n).catch(Y0)}:Xc;function Y0(n){setTimeout(function(){throw n})}function Zc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ri(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ri(i)}function ai(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Rp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),nr="__reactFiber$"+Xs,ga="__reactProps$"+Xs,Sr="__reactContainer$"+Xs,eh="__reactEvents$"+Xs,J0="__reactListeners$"+Xs,X0="__reactHandles$"+Xs;function Zi(n){var i=n[nr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Sr]||a[nr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Rp(n);n!==null;){if(a=n[nr])return a;n=Rp(n)}return i}n=a,a=n.parentNode}return null}function ya(n){return n=n[nr]||n[Sr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Hl(n){return n[ga]||null}var th=[],eo=-1;function li(n){return{current:n}}function Je(n){0>eo||(n.current=th[eo],th[eo]=null,eo--)}function Ke(n,i){eo++,th[eo]=n.current,n.current=i}var ui={},Mt=li(ui),Kt=li(!1),es=ui;function to(n,i){var a=n.type.contextTypes;if(!a)return ui;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=i[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function ql(){Je(Kt),Je(Mt)}function Cp(n,i,a){if(Mt.current!==ui)throw Error(t(168));Ke(Mt,i),Ke(Kt,a)}function kp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,le(n)||"Unknown",d));return ae({},a,c)}function Kl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ui,es=Mt.current,Ke(Mt,n),Ke(Kt,Kt.current),!0}function Pp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=kp(n,i,es),c.__reactInternalMemoizedMergedChildContext=n,Je(Kt),Je(Mt),Ke(Mt,n)):Je(Kt),Ke(Kt,a)}var Ar=null,Gl=!1,nh=!1;function Np(n){Ar===null?Ar=[n]:Ar.push(n)}function Z0(n){Gl=!0,Np(n)}function ci(){if(!nh&&Ar!==null){nh=!0;var n=0,i=Le;try{var a=Ar;for(Le=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ar=null,Gl=!1}catch(d){throw Ar!==null&&(Ar=Ar.slice(n+1)),Ko(Os,ci),d}finally{Le=i,nh=!1}}return null}var no=[],ro=0,Ql=null,Yl=0,gn=[],yn=0,ts=null,xr=1,Rr="";function ns(n,i){no[ro++]=Yl,no[ro++]=Ql,Ql=n,Yl=i}function Dp(n,i,a){gn[yn++]=xr,gn[yn++]=Rr,gn[yn++]=ts,ts=n;var c=xr;n=Rr;var d=32-nn(c)-1;c&=~(1<<d),a+=1;var f=32-nn(i)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,xr=1<<32-nn(i)+d|a<<d|c,Rr=f+n}else xr=1<<f|a<<d|c,Rr=n}function rh(n){n.return!==null&&(ns(n,1),Dp(n,1,0))}function ih(n){for(;n===Ql;)Ql=no[--ro],no[ro]=null,Yl=no[--ro],no[ro]=null;for(;n===ts;)ts=gn[--yn],gn[yn]=null,Rr=gn[--yn],gn[yn]=null,xr=gn[--yn],gn[yn]=null}var ln=null,un=null,Ze=!1,Nn=null;function bp(n,i){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Vp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ln=n,un=ai(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ln=n,un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ts!==null?{id:xr,overflow:Rr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ln=n,un=null,!0):!1;default:return!1}}function sh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function oh(n){if(Ze){var i=un;if(i){var a=i;if(!Vp(n,i)){if(sh(n))throw Error(t(418));i=ai(a.nextSibling);var c=ln;i&&Vp(n,i)?bp(c,a):(n.flags=n.flags&-4097|2,Ze=!1,ln=n)}}else{if(sh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ze=!1,ln=n}}}function Op(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ln=n}function Jl(n){if(n!==ln)return!1;if(!Ze)return Op(n),Ze=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Jc(n.type,n.memoizedProps)),i&&(i=un)){if(sh(n))throw Lp(),Error(t(418));for(;i;)bp(n,i),i=ai(i.nextSibling)}if(Op(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){un=ai(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}un=null}}else un=ln?ai(n.stateNode.nextSibling):null;return!0}function Lp(){for(var n=un;n;)n=ai(n.nextSibling)}function io(){un=ln=null,Ze=!1}function ah(n){Nn===null?Nn=[n]:Nn.push(n)}var ew=ie.ReactCurrentBatchConfig;function _a(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(v){var S=d.refs;v===null?delete S[f]:S[f]=v},i._stringRef=f,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Xl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Mp(n){var i=n._init;return i(n._payload)}function jp(n){function i(L,N){if(n){var j=L.deletions;j===null?(L.deletions=[N],L.flags|=16):j.push(N)}}function a(L,N){if(!n)return null;for(;N!==null;)i(L,N),N=N.sibling;return null}function c(L,N){for(L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function d(L,N){return L=_i(L,N),L.index=0,L.sibling=null,L}function f(L,N,j){return L.index=j,n?(j=L.alternate,j!==null?(j=j.index,j<N?(L.flags|=2,N):j):(L.flags|=2,N)):(L.flags|=1048576,N)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function S(L,N,j,Z){return N===null||N.tag!==6?(N=Xh(j,L.mode,Z),N.return=L,N):(N=d(N,j),N.return=L,N)}function C(L,N,j,Z){var fe=j.type;return fe===k?G(L,N,j.props.children,Z,j.key):N!==null&&(N.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===vt&&Mp(fe)===N.type)?(Z=d(N,j.props),Z.ref=_a(L,N,j),Z.return=L,Z):(Z=Tu(j.type,j.key,j.props,null,L.mode,Z),Z.ref=_a(L,N,j),Z.return=L,Z)}function F(L,N,j,Z){return N===null||N.tag!==4||N.stateNode.containerInfo!==j.containerInfo||N.stateNode.implementation!==j.implementation?(N=Zh(j,L.mode,Z),N.return=L,N):(N=d(N,j.children||[]),N.return=L,N)}function G(L,N,j,Z,fe){return N===null||N.tag!==7?(N=cs(j,L.mode,Z,fe),N.return=L,N):(N=d(N,j),N.return=L,N)}function Y(L,N,j){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Xh(""+N,L.mode,j),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ke:return j=Tu(N.type,N.key,N.props,null,L.mode,j),j.ref=_a(L,null,N),j.return=L,j;case Se:return N=Zh(N,L.mode,j),N.return=L,N;case vt:var Z=N._init;return Y(L,Z(N._payload),j)}if(at(N)||me(N))return N=cs(N,L.mode,j,null),N.return=L,N;Xl(L,N)}return null}function K(L,N,j,Z){var fe=N!==null?N.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return fe!==null?null:S(L,N,""+j,Z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ke:return j.key===fe?C(L,N,j,Z):null;case Se:return j.key===fe?F(L,N,j,Z):null;case vt:return fe=j._init,K(L,N,fe(j._payload),Z)}if(at(j)||me(j))return fe!==null?null:G(L,N,j,Z,null);Xl(L,j)}return null}function oe(L,N,j,Z,fe){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return L=L.get(j)||null,S(N,L,""+Z,fe);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case ke:return L=L.get(Z.key===null?j:Z.key)||null,C(N,L,Z,fe);case Se:return L=L.get(Z.key===null?j:Z.key)||null,F(N,L,Z,fe);case vt:var _e=Z._init;return oe(L,N,j,_e(Z._payload),fe)}if(at(Z)||me(Z))return L=L.get(j)||null,G(N,L,Z,fe,null);Xl(N,Z)}return null}function he(L,N,j,Z){for(var fe=null,_e=null,ve=N,Ie=N=0,xt=null;ve!==null&&Ie<j.length;Ie++){ve.index>Ie?(xt=ve,ve=null):xt=ve.sibling;var Fe=K(L,ve,j[Ie],Z);if(Fe===null){ve===null&&(ve=xt);break}n&&ve&&Fe.alternate===null&&i(L,ve),N=f(Fe,N,Ie),_e===null?fe=Fe:_e.sibling=Fe,_e=Fe,ve=xt}if(Ie===j.length)return a(L,ve),Ze&&ns(L,Ie),fe;if(ve===null){for(;Ie<j.length;Ie++)ve=Y(L,j[Ie],Z),ve!==null&&(N=f(ve,N,Ie),_e===null?fe=ve:_e.sibling=ve,_e=ve);return Ze&&ns(L,Ie),fe}for(ve=c(L,ve);Ie<j.length;Ie++)xt=oe(ve,L,Ie,j[Ie],Z),xt!==null&&(n&&xt.alternate!==null&&ve.delete(xt.key===null?Ie:xt.key),N=f(xt,N,Ie),_e===null?fe=xt:_e.sibling=xt,_e=xt);return n&&ve.forEach(function(vi){return i(L,vi)}),Ze&&ns(L,Ie),fe}function de(L,N,j,Z){var fe=me(j);if(typeof fe!="function")throw Error(t(150));if(j=fe.call(j),j==null)throw Error(t(151));for(var _e=fe=null,ve=N,Ie=N=0,xt=null,Fe=j.next();ve!==null&&!Fe.done;Ie++,Fe=j.next()){ve.index>Ie?(xt=ve,ve=null):xt=ve.sibling;var vi=K(L,ve,Fe.value,Z);if(vi===null){ve===null&&(ve=xt);break}n&&ve&&vi.alternate===null&&i(L,ve),N=f(vi,N,Ie),_e===null?fe=vi:_e.sibling=vi,_e=vi,ve=xt}if(Fe.done)return a(L,ve),Ze&&ns(L,Ie),fe;if(ve===null){for(;!Fe.done;Ie++,Fe=j.next())Fe=Y(L,Fe.value,Z),Fe!==null&&(N=f(Fe,N,Ie),_e===null?fe=Fe:_e.sibling=Fe,_e=Fe);return Ze&&ns(L,Ie),fe}for(ve=c(L,ve);!Fe.done;Ie++,Fe=j.next())Fe=oe(ve,L,Ie,Fe.value,Z),Fe!==null&&(n&&Fe.alternate!==null&&ve.delete(Fe.key===null?Ie:Fe.key),N=f(Fe,N,Ie),_e===null?fe=Fe:_e.sibling=Fe,_e=Fe);return n&&ve.forEach(function(bw){return i(L,bw)}),Ze&&ns(L,Ie),fe}function ut(L,N,j,Z){if(typeof j=="object"&&j!==null&&j.type===k&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case ke:e:{for(var fe=j.key,_e=N;_e!==null;){if(_e.key===fe){if(fe=j.type,fe===k){if(_e.tag===7){a(L,_e.sibling),N=d(_e,j.props.children),N.return=L,L=N;break e}}else if(_e.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===vt&&Mp(fe)===_e.type){a(L,_e.sibling),N=d(_e,j.props),N.ref=_a(L,_e,j),N.return=L,L=N;break e}a(L,_e);break}else i(L,_e);_e=_e.sibling}j.type===k?(N=cs(j.props.children,L.mode,Z,j.key),N.return=L,L=N):(Z=Tu(j.type,j.key,j.props,null,L.mode,Z),Z.ref=_a(L,N,j),Z.return=L,L=Z)}return v(L);case Se:e:{for(_e=j.key;N!==null;){if(N.key===_e)if(N.tag===4&&N.stateNode.containerInfo===j.containerInfo&&N.stateNode.implementation===j.implementation){a(L,N.sibling),N=d(N,j.children||[]),N.return=L,L=N;break e}else{a(L,N);break}else i(L,N);N=N.sibling}N=Zh(j,L.mode,Z),N.return=L,L=N}return v(L);case vt:return _e=j._init,ut(L,N,_e(j._payload),Z)}if(at(j))return he(L,N,j,Z);if(me(j))return de(L,N,j,Z);Xl(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,N!==null&&N.tag===6?(a(L,N.sibling),N=d(N,j),N.return=L,L=N):(a(L,N),N=Xh(j,L.mode,Z),N.return=L,L=N),v(L)):a(L,N)}return ut}var so=jp(!0),Fp=jp(!1),Zl=li(null),eu=null,oo=null,lh=null;function uh(){lh=oo=eu=null}function ch(n){var i=Zl.current;Je(Zl),n._currentValue=i}function hh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ao(n,i){eu=n,lh=oo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Qt=!0),n.firstContext=null)}function _n(n){var i=n._currentValue;if(lh!==n)if(n={context:n,memoizedValue:i,next:null},oo===null){if(eu===null)throw Error(t(308));oo=n,eu.dependencies={lanes:0,firstContext:n}}else oo=oo.next=n;return i}var rs=null;function dh(n){rs===null?rs=[n]:rs.push(n)}function Up(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,dh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Cr(n,c)}function Cr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var hi=!1;function fh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function kr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function di(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(je&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Cr(n,a)}return d=c.interleaved,d===null?(i.next=i,dh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Cr(n,a)}function tu(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Zo(n,a)}}function Bp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=i:f=f.next=i}else d=f=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function nu(n,i,a,c){var d=n.updateQueue;hi=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var C=S,F=C.next;C.next=null,v===null?f=F:v.next=F,v=C;var G=n.alternate;G!==null&&(G=G.updateQueue,S=G.lastBaseUpdate,S!==v&&(S===null?G.firstBaseUpdate=F:S.next=F,G.lastBaseUpdate=C))}if(f!==null){var Y=d.baseState;v=0,G=F=C=null,S=f;do{var K=S.lane,oe=S.eventTime;if((c&K)===K){G!==null&&(G=G.next={eventTime:oe,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var he=n,de=S;switch(K=i,oe=a,de.tag){case 1:if(he=de.payload,typeof he=="function"){Y=he.call(oe,Y,K);break e}Y=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=de.payload,K=typeof he=="function"?he.call(oe,Y,K):he,K==null)break e;Y=ae({},Y,K);break e;case 2:hi=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[S]:K.push(S))}else oe={eventTime:oe,lane:K,tag:S.tag,payload:S.payload,callback:S.callback,next:null},G===null?(F=G=oe,C=Y):G=G.next=oe,v|=K;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;K=S,S=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(G===null&&(C=Y),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=G,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);os|=v,n.lanes=v,n.memoizedState=Y}}function $p(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var va={},rr=li(va),wa=li(va),Ea=li(va);function is(n){if(n===va)throw Error(t(174));return n}function ph(n,i){switch(Ke(Ea,i),Ke(wa,n),Ke(rr,va),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ks(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ks(i,n)}Je(rr),Ke(rr,i)}function lo(){Je(rr),Je(wa),Je(Ea)}function Wp(n){is(Ea.current);var i=is(rr.current),a=ks(i,n.type);i!==a&&(Ke(wa,n),Ke(rr,a))}function mh(n){wa.current===n&&(Je(rr),Je(wa))}var tt=li(0);function ru(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var gh=[];function yh(){for(var n=0;n<gh.length;n++)gh[n]._workInProgressVersionPrimary=null;gh.length=0}var iu=ie.ReactCurrentDispatcher,_h=ie.ReactCurrentBatchConfig,ss=0,nt=null,wt=null,St=null,su=!1,Ta=!1,Ia=0,tw=0;function jt(){throw Error(t(321))}function vh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Pn(n[a],i[a]))return!1;return!0}function wh(n,i,a,c,d,f){if(ss=f,nt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,iu.current=n===null||n.memoizedState===null?sw:ow,n=a(c,d),Ta){f=0;do{if(Ta=!1,Ia=0,25<=f)throw Error(t(301));f+=1,St=wt=null,i.updateQueue=null,iu.current=aw,n=a(c,d)}while(Ta)}if(iu.current=lu,i=wt!==null&&wt.next!==null,ss=0,St=wt=nt=null,su=!1,i)throw Error(t(300));return n}function Eh(){var n=Ia!==0;return Ia=0,n}function ir(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?nt.memoizedState=St=n:St=St.next=n,St}function vn(){if(wt===null){var n=nt.alternate;n=n!==null?n.memoizedState:null}else n=wt.next;var i=St===null?nt.memoizedState:St.next;if(i!==null)St=i,wt=n;else{if(n===null)throw Error(t(310));wt=n,n={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},St===null?nt.memoizedState=St=n:St=St.next=n}return St}function Sa(n,i){return typeof i=="function"?i(n):i}function Th(n){var i=vn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=wt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var S=v=null,C=null,F=f;do{var G=F.lane;if((ss&G)===G)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Y={lane:G,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(S=C=Y,v=c):C=C.next=Y,nt.lanes|=G,os|=G}F=F.next}while(F!==null&&F!==f);C===null?v=c:C.next=S,Pn(c,i.memoizedState)||(Qt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,nt.lanes|=f,os|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ih(n){var i=vn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);Pn(f,i.memoizedState)||(Qt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,c]}function Hp(){}function qp(n,i){var a=nt,c=vn(),d=i(),f=!Pn(c.memoizedState,d);if(f&&(c.memoizedState=d,Qt=!0),c=c.queue,Sh(Qp.bind(null,a,c,n),[n]),c.getSnapshot!==i||f||St!==null&&St.memoizedState.tag&1){if(a.flags|=2048,Aa(9,Gp.bind(null,a,c,d,i),void 0,null),At===null)throw Error(t(349));(ss&30)!==0||Kp(a,i,d)}return d}function Kp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=nt.updateQueue,i===null?(i={lastEffect:null,stores:null},nt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Gp(n,i,a,c){i.value=a,i.getSnapshot=c,Yp(i)&&Jp(n)}function Qp(n,i,a){return a(function(){Yp(i)&&Jp(n)})}function Yp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Pn(n,a)}catch{return!0}}function Jp(n){var i=Cr(n,1);i!==null&&On(i,n,1,-1)}function Xp(n){var i=ir();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:n},i.queue=n,n=n.dispatch=iw.bind(null,nt,n),[i.memoizedState,n]}function Aa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=nt.updateQueue,i===null?(i={lastEffect:null,stores:null},nt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Zp(){return vn().memoizedState}function ou(n,i,a,c){var d=ir();nt.flags|=n,d.memoizedState=Aa(1|i,a,void 0,c===void 0?null:c)}function au(n,i,a,c){var d=vn();c=c===void 0?null:c;var f=void 0;if(wt!==null){var v=wt.memoizedState;if(f=v.destroy,c!==null&&vh(c,v.deps)){d.memoizedState=Aa(i,a,f,c);return}}nt.flags|=n,d.memoizedState=Aa(1|i,a,f,c)}function em(n,i){return ou(8390656,8,n,i)}function Sh(n,i){return au(2048,8,n,i)}function tm(n,i){return au(4,2,n,i)}function nm(n,i){return au(4,4,n,i)}function rm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function im(n,i,a){return a=a!=null?a.concat([n]):null,au(4,4,rm.bind(null,i,n),a)}function Ah(){}function sm(n,i){var a=vn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function om(n,i){var a=vn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function am(n,i,a){return(ss&21)===0?(n.baseState&&(n.baseState=!1,Qt=!0),n.memoizedState=a):(Pn(a,i)||(a=Jo(),nt.lanes|=a,os|=a,n.baseState=!0),i)}function nw(n,i){var a=Le;Le=a!==0&&4>a?a:4,n(!0);var c=_h.transition;_h.transition={};try{n(!1),i()}finally{Le=a,_h.transition=c}}function lm(){return vn().memoizedState}function rw(n,i,a){var c=gi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},um(n))cm(i,a);else if(a=Up(n,i,a,c),a!==null){var d=qt();On(a,n,c,d),hm(a,i,c)}}function iw(n,i,a){var c=gi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(um(n))cm(i,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,S=f(v,a);if(d.hasEagerState=!0,d.eagerState=S,Pn(S,v)){var C=i.interleaved;C===null?(d.next=d,dh(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=Up(n,i,d,c),a!==null&&(d=qt(),On(a,n,c,d),hm(a,i,c))}}function um(n){var i=n.alternate;return n===nt||i!==null&&i===nt}function cm(n,i){Ta=su=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function hm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Zo(n,a)}}var lu={readContext:_n,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},sw={readContext:_n,useCallback:function(n,i){return ir().memoizedState=[n,i===void 0?null:i],n},useContext:_n,useEffect:em,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ou(4194308,4,rm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ou(4194308,4,n,i)},useInsertionEffect:function(n,i){return ou(4,2,n,i)},useMemo:function(n,i){var a=ir();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=ir();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=rw.bind(null,nt,n),[c.memoizedState,n]},useRef:function(n){var i=ir();return n={current:n},i.memoizedState=n},useState:Xp,useDebugValue:Ah,useDeferredValue:function(n){return ir().memoizedState=n},useTransition:function(){var n=Xp(!1),i=n[0];return n=nw.bind(null,n[1]),ir().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=nt,d=ir();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),At===null)throw Error(t(349));(ss&30)!==0||Kp(c,i,a)}d.memoizedState=a;var f={value:a,getSnapshot:i};return d.queue=f,em(Qp.bind(null,c,f,n),[n]),c.flags|=2048,Aa(9,Gp.bind(null,c,f,a,i),void 0,null),a},useId:function(){var n=ir(),i=At.identifierPrefix;if(Ze){var a=Rr,c=xr;a=(c&~(1<<32-nn(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ia++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=tw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},ow={readContext:_n,useCallback:sm,useContext:_n,useEffect:Sh,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:Th,useRef:Zp,useState:function(){return Th(Sa)},useDebugValue:Ah,useDeferredValue:function(n){var i=vn();return am(i,wt.memoizedState,n)},useTransition:function(){var n=Th(Sa)[0],i=vn().memoizedState;return[n,i]},useMutableSource:Hp,useSyncExternalStore:qp,useId:lm,unstable_isNewReconciler:!1},aw={readContext:_n,useCallback:sm,useContext:_n,useEffect:Sh,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:Ih,useRef:Zp,useState:function(){return Ih(Sa)},useDebugValue:Ah,useDeferredValue:function(n){var i=vn();return wt===null?i.memoizedState=n:am(i,wt.memoizedState,n)},useTransition:function(){var n=Ih(Sa)[0],i=vn().memoizedState;return[n,i]},useMutableSource:Hp,useSyncExternalStore:qp,useId:lm,unstable_isNewReconciler:!1};function Dn(n,i){if(n&&n.defaultProps){i=ae({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function xh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ae({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var uu={isMounted:function(n){return(n=n._reactInternals)?Cn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=qt(),d=gi(n),f=kr(c,d);f.payload=i,a!=null&&(f.callback=a),i=di(n,f,d),i!==null&&(On(i,n,d,c),tu(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=qt(),d=gi(n),f=kr(c,d);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=di(n,f,d),i!==null&&(On(i,n,d,c),tu(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=qt(),c=gi(n),d=kr(a,c);d.tag=2,i!=null&&(d.callback=i),i=di(n,d,c),i!==null&&(On(i,n,c,a),tu(i,n,c))}};function dm(n,i,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):i.prototype&&i.prototype.isPureReactComponent?!ha(a,c)||!ha(d,f):!0}function fm(n,i,a){var c=!1,d=ui,f=i.contextType;return typeof f=="object"&&f!==null?f=_n(f):(d=Gt(i)?es:Mt.current,c=i.contextTypes,f=(c=c!=null)?to(n,d):ui),i=new i(a,f),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=uu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),i}function pm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&uu.enqueueReplaceState(i,i.state,null)}function Rh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},fh(n);var f=i.contextType;typeof f=="object"&&f!==null?d.context=_n(f):(f=Gt(i)?es:Mt.current,d.context=to(n,f)),d.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(xh(n,i,f,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&uu.enqueueReplaceState(d,d.state,null),nu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function uo(n,i){try{var a="",c=i;do a+=Q(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:i,stack:d,digest:null}}function Ch(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function kh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var lw=typeof WeakMap=="function"?WeakMap:Map;function mm(n,i,a){a=kr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){gu||(gu=!0,Wh=c),kh(n,i)},a}function gm(n,i,a){a=kr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){kh(n,i)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){kh(n,i),typeof c!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function ym(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new lw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Tw.bind(null,n,i,a),i.then(n,n))}function _m(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function vm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=kr(-1,1),i.tag=2,di(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var uw=ie.ReactCurrentOwner,Qt=!1;function Ht(n,i,a,c){i.child=n===null?Fp(i,null,a,c):so(i,n.child,a,c)}function wm(n,i,a,c,d){a=a.render;var f=i.ref;return ao(i,d),c=wh(n,i,a,c,f,d),a=Eh(),n!==null&&!Qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pr(n,i,d)):(Ze&&a&&rh(i),i.flags|=1,Ht(n,i,c,d),i.child)}function Em(n,i,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Jh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=f,Tm(n,i,f,c,d)):(n=Tu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ha,a(v,c)&&n.ref===i.ref)return Pr(n,i,d)}return i.flags|=1,n=_i(f,c),n.ref=i.ref,n.return=i,i.child=n}function Tm(n,i,a,c,d){if(n!==null){var f=n.memoizedProps;if(ha(f,c)&&n.ref===i.ref)if(Qt=!1,i.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Qt=!0);else return i.lanes=n.lanes,Pr(n,i,d)}return Ph(n,i,a,c,d)}function Im(n,i,a){var c=i.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(ho,cn),cn|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ke(ho,cn),cn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,Ke(ho,cn),cn|=c}else f!==null?(c=f.baseLanes|a,i.memoizedState=null):c=a,Ke(ho,cn),cn|=c;return Ht(n,i,d,a),i.child}function Sm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Ph(n,i,a,c,d){var f=Gt(a)?es:Mt.current;return f=to(i,f),ao(i,d),a=wh(n,i,a,c,f,d),c=Eh(),n!==null&&!Qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pr(n,i,d)):(Ze&&c&&rh(i),i.flags|=1,Ht(n,i,a,d),i.child)}function Am(n,i,a,c,d){if(Gt(a)){var f=!0;Kl(i)}else f=!1;if(ao(i,d),i.stateNode===null)hu(n,i),fm(i,a,c),Rh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,S=i.memoizedProps;v.props=S;var C=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=_n(F):(F=Gt(a)?es:Mt.current,F=to(i,F));var G=a.getDerivedStateFromProps,Y=typeof G=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||C!==F)&&pm(i,v,c,F),hi=!1;var K=i.memoizedState;v.state=K,nu(i,c,v,d),C=i.memoizedState,S!==c||K!==C||Kt.current||hi?(typeof G=="function"&&(xh(i,a,G,c),C=i.memoizedState),(S=hi||dm(i,a,S,c,K,C,F))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),v.props=c,v.state=C,v.context=F,c=S):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,zp(n,i),S=i.memoizedProps,F=i.type===i.elementType?S:Dn(i.type,S),v.props=F,Y=i.pendingProps,K=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=_n(C):(C=Gt(a)?es:Mt.current,C=to(i,C));var oe=a.getDerivedStateFromProps;(G=typeof oe=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==Y||K!==C)&&pm(i,v,c,C),hi=!1,K=i.memoizedState,v.state=K,nu(i,c,v,d);var he=i.memoizedState;S!==Y||K!==he||Kt.current||hi?(typeof oe=="function"&&(xh(i,a,oe,c),he=i.memoizedState),(F=hi||dm(i,a,F,c,K,he,C)||!1)?(G||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,he,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,he,C)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=he),v.props=c,v.state=he,v.context=C,c=F):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),c=!1)}return Nh(n,i,a,c,f,d)}function Nh(n,i,a,c,d,f){Sm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Pp(i,a,!1),Pr(n,i,f);c=i.stateNode,uw.current=i;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=so(i,n.child,null,f),i.child=so(i,null,S,f)):Ht(n,i,S,f),i.memoizedState=c.state,d&&Pp(i,a,!0),i.child}function xm(n){var i=n.stateNode;i.pendingContext?Cp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Cp(n,i.context,!1),ph(n,i.containerInfo)}function Rm(n,i,a,c,d){return io(),ah(d),i.flags|=256,Ht(n,i,a,c),i.child}var Dh={dehydrated:null,treeContext:null,retryLane:0};function bh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cm(n,i,a){var c=i.pendingProps,d=tt.current,f=!1,v=(i.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(f=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ke(tt,d&1),n===null)return oh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=i.mode,f=i.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=Iu(v,c,0,null),n=cs(n,c,a,null),f.return=i,n.return=i,f.sibling=n,i.child=f,i.child.memoizedState=bh(a),i.memoizedState=Dh,n):Vh(i,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return cw(n,i,v,c,S,d,a);if(f){f=c.fallback,v=i.mode,d=n.child,S=d.sibling;var C={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=_i(d,C),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?f=_i(S,f):(f=cs(f,v,a,null),f.flags|=2),f.return=i,c.return=i,c.sibling=f,i.child=c,c=f,f=i.child,v=n.child.memoizedState,v=v===null?bh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,i.memoizedState=Dh,c}return f=n.child,n=f.sibling,c=_i(f,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Vh(n,i){return i=Iu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function cu(n,i,a,c){return c!==null&&ah(c),so(i,n.child,null,a),n=Vh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function cw(n,i,a,c,d,f,v){if(a)return i.flags&256?(i.flags&=-257,c=Ch(Error(t(422))),cu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(f=c.fallback,d=i.mode,c=Iu({mode:"visible",children:c.children},d,0,null),f=cs(f,d,v,null),f.flags|=2,c.return=i,f.return=i,c.sibling=f,i.child=c,(i.mode&1)!==0&&so(i,n.child,null,v),i.child.memoizedState=bh(v),i.memoizedState=Dh,f);if((i.mode&1)===0)return cu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,f=Error(t(419)),c=Ch(f,c,void 0),cu(n,i,v,c)}if(S=(v&n.childLanes)!==0,Qt||S){if(c=At,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Cr(n,d),On(c,n,d,-1))}return Yh(),c=Ch(Error(t(421))),cu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Iw.bind(null,n),d._reactRetry=i,null):(n=f.treeContext,un=ai(d.nextSibling),ln=i,Ze=!0,Nn=null,n!==null&&(gn[yn++]=xr,gn[yn++]=Rr,gn[yn++]=ts,xr=n.id,Rr=n.overflow,ts=i),i=Vh(i,c.children),i.flags|=4096,i)}function km(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),hh(n.return,i,a)}function Oh(n,i,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function Pm(n,i,a){var c=i.pendingProps,d=c.revealOrder,f=c.tail;if(Ht(n,i,c.children,a),c=tt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&km(n,a,i);else if(n.tag===19)km(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ke(tt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&ru(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Oh(i,!1,d,a,f);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ru(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Oh(i,!0,a,null,f);break;case"together":Oh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function hu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),os|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=_i(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=_i(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function hw(n,i,a){switch(i.tag){case 3:xm(i),io();break;case 5:Wp(i);break;case 1:Gt(i.type)&&Kl(i);break;case 4:ph(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ke(Zl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ke(tt,tt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Cm(n,i,a):(Ke(tt,tt.current&1),n=Pr(n,i,a),n!==null?n.sibling:null);Ke(tt,tt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Pm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ke(tt,tt.current),c)break;return null;case 22:case 23:return i.lanes=0,Im(n,i,a)}return Pr(n,i,a)}var Nm,Lh,Dm,bm;Nm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Lh=function(){},Dm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,is(rr.current);var f=null;switch(a){case"input":d=Rs(n,d),c=Rs(n,c),f=[];break;case"select":d=ae({},d,{value:void 0}),c=ae({},c,{value:void 0}),f=[];break;case"textarea":d=Uo(n,d),c=Uo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Wl)}Rn(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var S=d[F];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?f||(f=[]):(f=f||[]).push(F,null));for(F in c){var C=c[F];if(S=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==S&&(C!=null||S!=null))if(F==="style")if(S){for(v in S)!S.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&S[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(f||(f=[]),f.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,S=S?S.__html:void 0,C!=null&&S!==C&&(f=f||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(f=f||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&Ye("scroll",n),f||S===C||(f=[])):(f=f||[]).push(F,C))}a&&(f=f||[]).push("style",a);var F=f;(i.updateQueue=F)&&(i.flags|=4)}},bm=function(n,i,a,c){a!==c&&(i.flags|=4)};function xa(n,i){if(!Ze)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ft(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function dw(n,i,a){var c=i.pendingProps;switch(ih(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(i),null;case 1:return Gt(i.type)&&ql(),Ft(i),null;case 3:return c=i.stateNode,lo(),Je(Kt),Je(Mt),yh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Jl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Nn!==null&&(Kh(Nn),Nn=null))),Lh(n,i),Ft(i),null;case 5:mh(i);var d=is(Ea.current);if(a=i.type,n!==null&&i.stateNode!=null)Dm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Ft(i),null}if(n=is(rr.current),Jl(i)){c=i.stateNode,a=i.type;var f=i.memoizedProps;switch(c[nr]=i,c[ga]=f,n=(i.mode&1)!==0,a){case"dialog":Ye("cancel",c),Ye("close",c);break;case"iframe":case"object":case"embed":Ye("load",c);break;case"video":case"audio":for(d=0;d<fa.length;d++)Ye(fa[d],c);break;case"source":Ye("error",c);break;case"img":case"image":case"link":Ye("error",c),Ye("load",c);break;case"details":Ye("toggle",c);break;case"input":ml(c,f),Ye("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ye("invalid",c);break;case"textarea":zo(c,f),Ye("invalid",c)}Rn(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var S=f[v];v==="children"?typeof S=="string"?c.textContent!==S&&(f.suppressHydrationWarning!==!0&&$l(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(f.suppressHydrationWarning!==!0&&$l(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Ye("scroll",c)}switch(a){case"input":Ot(c),Fo(c,f,!0);break;case"textarea":Ot(c),Hr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Wl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Bo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[nr]=i,n[ga]=c,Nm(n,i,!1,!1),i.stateNode=n;e:{switch(v=Ns(a,c),a){case"dialog":Ye("cancel",n),Ye("close",n),d=c;break;case"iframe":case"object":case"embed":Ye("load",n),d=c;break;case"video":case"audio":for(d=0;d<fa.length;d++)Ye(fa[d],n);d=c;break;case"source":Ye("error",n),d=c;break;case"img":case"image":case"link":Ye("error",n),Ye("load",n),d=c;break;case"details":Ye("toggle",n),d=c;break;case"input":ml(n,c),d=Rs(n,c),Ye("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ae({},c,{value:void 0}),Ye("invalid",n);break;case"textarea":zo(n,c),d=Uo(n,c),Ye("invalid",n);break;default:d=c}Rn(a,d),S=d;for(f in S)if(S.hasOwnProperty(f)){var C=S[f];f==="style"?Ps(n,C):f==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&yl(n,C)):f==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Fi(n,C):typeof C=="number"&&Fi(n,""+C):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?C!=null&&f==="onScroll"&&Ye("scroll",n):C!=null&&ye(n,f,C,v))}switch(a){case"input":Ot(n),Fo(n,c,!1);break;case"textarea":Ot(n),Hr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+we(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?xn(n,!!c.multiple,f,!1):c.defaultValue!=null&&xn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Wl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ft(i),null;case 6:if(n&&i.stateNode!=null)bm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=is(Ea.current),is(rr.current),Jl(i)){if(c=i.stateNode,a=i.memoizedProps,c[nr]=i,(f=c.nodeValue!==a)&&(n=ln,n!==null))switch(n.tag){case 3:$l(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&$l(c.nodeValue,a,(n.mode&1)!==0)}f&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[nr]=i,i.stateNode=c}return Ft(i),null;case 13:if(Je(tt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ze&&un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Lp(),io(),i.flags|=98560,f=!1;else if(f=Jl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[nr]=i}else io(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ft(i),f=!1}else Nn!==null&&(Kh(Nn),Nn=null),f=!0;if(!f)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(tt.current&1)!==0?Et===0&&(Et=3):Yh())),i.updateQueue!==null&&(i.flags|=4),Ft(i),null);case 4:return lo(),Lh(n,i),n===null&&pa(i.stateNode.containerInfo),Ft(i),null;case 10:return ch(i.type._context),Ft(i),null;case 17:return Gt(i.type)&&ql(),Ft(i),null;case 19:if(Je(tt),f=i.memoizedState,f===null)return Ft(i),null;if(c=(i.flags&128)!==0,v=f.rendering,v===null)if(c)xa(f,!1);else{if(Et!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=ru(n),v!==null){for(i.flags|=128,xa(f,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ke(tt,tt.current&1|2),i.child}n=n.sibling}f.tail!==null&&Qe()>fo&&(i.flags|=128,c=!0,xa(f,!1),i.lanes=4194304)}else{if(!c)if(n=ru(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),xa(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Ze)return Ft(i),null}else 2*Qe()-f.renderingStartTime>fo&&a!==1073741824&&(i.flags|=128,c=!0,xa(f,!1),i.lanes=4194304);f.isBackwards?(v.sibling=i.child,i.child=v):(a=f.last,a!==null?a.sibling=v:i.child=v,f.last=v)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Qe(),i.sibling=null,a=tt.current,Ke(tt,c?a&1|2:a&1),i):(Ft(i),null);case 22:case 23:return Qh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(cn&1073741824)!==0&&(Ft(i),i.subtreeFlags&6&&(i.flags|=8192)):Ft(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function fw(n,i){switch(ih(i),i.tag){case 1:return Gt(i.type)&&ql(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return lo(),Je(Kt),Je(Mt),yh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return mh(i),null;case 13:if(Je(tt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));io()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Je(tt),null;case 4:return lo(),null;case 10:return ch(i.type._context),null;case 22:case 23:return Qh(),null;case 24:return null;default:return null}}var du=!1,Ut=!1,pw=typeof WeakSet=="function"?WeakSet:Set,ue=null;function co(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,i,c)}else a.current=null}function Mh(n,i,a){try{a()}catch(c){it(n,i,c)}}var Vm=!1;function mw(n,i){if(Qc=Er,n=dp(),zc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,S=-1,C=-1,F=0,G=0,Y=n,K=null;t:for(;;){for(var oe;Y!==a||d!==0&&Y.nodeType!==3||(S=v+d),Y!==f||c!==0&&Y.nodeType!==3||(C=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(oe=Y.firstChild)!==null;)K=Y,Y=oe;for(;;){if(Y===n)break t;if(K===a&&++F===d&&(S=v),K===f&&++G===c&&(C=v),(oe=Y.nextSibling)!==null)break;Y=K,K=Y.parentNode}Y=oe}a=S===-1||C===-1?null:{start:S,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yc={focusedElem:n,selectionRange:a},Er=!1,ue=i;ue!==null;)if(i=ue,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ue=n;else for(;ue!==null;){i=ue;try{var he=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var de=he.memoizedProps,ut=he.memoizedState,L=i.stateNode,N=L.getSnapshotBeforeUpdate(i.elementType===i.type?de:Dn(i.type,de),ut);L.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var j=i.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){it(i,i.return,Z)}if(n=i.sibling,n!==null){n.return=i.return,ue=n;break}ue=i.return}return he=Vm,Vm=!1,he}function Ra(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Mh(i,a,f)}d=d.next}while(d!==c)}}function fu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function jh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Om(n){var i=n.alternate;i!==null&&(n.alternate=null,Om(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[nr],delete i[ga],delete i[eh],delete i[J0],delete i[X0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lm(n){return n.tag===5||n.tag===3||n.tag===4}function Mm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Wl));else if(c!==4&&(n=n.child,n!==null))for(Fh(n,i,a),n=n.sibling;n!==null;)Fh(n,i,a),n=n.sibling}function Uh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Uh(n,i,a),n=n.sibling;n!==null;)Uh(n,i,a),n=n.sibling}var Pt=null,bn=!1;function fi(n,i,a){for(a=a.child;a!==null;)jm(n,i,a),a=a.sibling}function jm(n,i,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Wi,a)}catch{}switch(a.tag){case 5:Ut||co(a,i);case 6:var c=Pt,d=bn;Pt=null,fi(n,i,a),Pt=c,bn=d,Pt!==null&&(bn?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(bn?(n=Pt,a=a.stateNode,n.nodeType===8?Zc(n.parentNode,a):n.nodeType===1&&Zc(n,a),ri(n)):Zc(Pt,a.stateNode));break;case 4:c=Pt,d=bn,Pt=a.stateNode.containerInfo,bn=!0,fi(n,i,a),Pt=c,bn=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&Mh(a,i,v),d=d.next}while(d!==c)}fi(n,i,a);break;case 1:if(!Ut&&(co(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){it(a,i,S)}fi(n,i,a);break;case 21:fi(n,i,a);break;case 22:a.mode&1?(Ut=(c=Ut)||a.memoizedState!==null,fi(n,i,a),Ut=c):fi(n,i,a);break;default:fi(n,i,a)}}function Fm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new pw),i.forEach(function(c){var d=Sw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Vn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=i,S=v;e:for(;S!==null;){switch(S.tag){case 5:Pt=S.stateNode,bn=!1;break e;case 3:Pt=S.stateNode.containerInfo,bn=!0;break e;case 4:Pt=S.stateNode.containerInfo,bn=!0;break e}S=S.return}if(Pt===null)throw Error(t(160));jm(f,v,d),Pt=null,bn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){it(d,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Um(i,n),i=i.sibling}function Um(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vn(i,n),sr(n),c&4){try{Ra(3,n,n.return),fu(3,n)}catch(de){it(n,n.return,de)}try{Ra(5,n,n.return)}catch(de){it(n,n.return,de)}}break;case 1:Vn(i,n),sr(n),c&512&&a!==null&&co(a,a.return);break;case 5:if(Vn(i,n),sr(n),c&512&&a!==null&&co(a,a.return),n.flags&32){var d=n.stateNode;try{Fi(d,"")}catch(de){it(n,n.return,de)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,S=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{S==="input"&&f.type==="radio"&&f.name!=null&&Cs(d,f),Ns(S,v);var F=Ns(S,f);for(v=0;v<C.length;v+=2){var G=C[v],Y=C[v+1];G==="style"?Ps(d,Y):G==="dangerouslySetInnerHTML"?yl(d,Y):G==="children"?Fi(d,Y):ye(d,G,Y,F)}switch(S){case"input":ji(d,f);break;case"textarea":gl(d,f);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var oe=f.value;oe!=null?xn(d,!!f.multiple,oe,!1):K!==!!f.multiple&&(f.defaultValue!=null?xn(d,!!f.multiple,f.defaultValue,!0):xn(d,!!f.multiple,f.multiple?[]:"",!1))}d[ga]=f}catch(de){it(n,n.return,de)}}break;case 6:if(Vn(i,n),sr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(de){it(n,n.return,de)}}break;case 3:if(Vn(i,n),sr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ri(i.containerInfo)}catch(de){it(n,n.return,de)}break;case 4:Vn(i,n),sr(n);break;case 13:Vn(i,n),sr(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||($h=Qe())),c&4&&Fm(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(Ut=(F=Ut)||G,Vn(i,n),Ut=F):Vn(i,n),sr(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!G&&(n.mode&1)!==0)for(ue=n,G=n.child;G!==null;){for(Y=ue=G;ue!==null;){switch(K=ue,oe=K.child,K.tag){case 0:case 11:case 14:case 15:Ra(4,K,K.return);break;case 1:co(K,K.return);var he=K.stateNode;if(typeof he.componentWillUnmount=="function"){c=K,a=K.return;try{i=c,he.props=i.memoizedProps,he.state=i.memoizedState,he.componentWillUnmount()}catch(de){it(c,a,de)}}break;case 5:co(K,K.return);break;case 22:if(K.memoizedState!==null){$m(Y);continue}}oe!==null?(oe.return=K,ue=oe):$m(Y)}G=G.sibling}e:for(G=null,Y=n;;){if(Y.tag===5){if(G===null){G=Y;try{d=Y.stateNode,F?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(S=Y.stateNode,C=Y.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,S.style.display=Gr("display",v))}catch(de){it(n,n.return,de)}}}else if(Y.tag===6){if(G===null)try{Y.stateNode.nodeValue=F?"":Y.memoizedProps}catch(de){it(n,n.return,de)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;G===Y&&(G=null),Y=Y.return}G===Y&&(G=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Vn(i,n),sr(n),c&4&&Fm(n);break;case 21:break;default:Vn(i,n),sr(n)}}function sr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Lm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Fi(d,""),c.flags&=-33);var f=Mm(n);Uh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=Mm(n);Fh(n,S,v);break;default:throw Error(t(161))}}catch(C){it(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function gw(n,i,a){ue=n,zm(n)}function zm(n,i,a){for(var c=(n.mode&1)!==0;ue!==null;){var d=ue,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||du;if(!v){var S=d.alternate,C=S!==null&&S.memoizedState!==null||Ut;S=du;var F=Ut;if(du=v,(Ut=C)&&!F)for(ue=d;ue!==null;)v=ue,C=v.child,v.tag===22&&v.memoizedState!==null?Wm(d):C!==null?(C.return=v,ue=C):Wm(d);for(;f!==null;)ue=f,zm(f),f=f.sibling;ue=d,du=S,Ut=F}Bm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,ue=f):Bm(n)}}function Bm(n){for(;ue!==null;){var i=ue;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ut||fu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ut)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Dn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&$p(i,f,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}$p(i,v,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var G=F.memoizedState;if(G!==null){var Y=G.dehydrated;Y!==null&&ri(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||i.flags&512&&jh(i)}catch(K){it(i,i.return,K)}}if(i===n){ue=null;break}if(a=i.sibling,a!==null){a.return=i.return,ue=a;break}ue=i.return}}function $m(n){for(;ue!==null;){var i=ue;if(i===n){ue=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ue=a;break}ue=i.return}}function Wm(n){for(;ue!==null;){var i=ue;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{fu(4,i)}catch(C){it(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(C){it(i,d,C)}}var f=i.return;try{jh(i)}catch(C){it(i,f,C)}break;case 5:var v=i.return;try{jh(i)}catch(C){it(i,v,C)}}}catch(C){it(i,i.return,C)}if(i===n){ue=null;break}var S=i.sibling;if(S!==null){S.return=i.return,ue=S;break}ue=i.return}}var yw=Math.ceil,pu=ie.ReactCurrentDispatcher,zh=ie.ReactCurrentOwner,wn=ie.ReactCurrentBatchConfig,je=0,At=null,pt=null,Nt=0,cn=0,ho=li(0),Et=0,Ca=null,os=0,mu=0,Bh=0,ka=null,Yt=null,$h=0,fo=1/0,Nr=null,gu=!1,Wh=null,pi=null,yu=!1,mi=null,_u=0,Pa=0,Hh=null,vu=-1,wu=0;function qt(){return(je&6)!==0?Qe():vu!==-1?vu:vu=Qe()}function gi(n){return(n.mode&1)===0?1:(je&2)!==0&&Nt!==0?Nt&-Nt:ew.transition!==null?(wu===0&&(wu=Jo()),wu):(n=Le,n!==0||(n=window.event,n=n===void 0?16:zs(n.type)),n)}function On(n,i,a,c){if(50<Pa)throw Pa=0,Hh=null,Error(t(185));Gi(n,a,c),((je&2)===0||n!==At)&&(n===At&&((je&2)===0&&(mu|=a),Et===4&&yi(n,Nt)),Jt(n,c),a===1&&je===0&&(i.mode&1)===0&&(fo=Qe()+500,Gl&&ci()))}function Jt(n,i){var a=n.callbackNode;Ki(n,i);var c=_r(n,n===At?Nt:0);if(c===0)a!==null&&Vs(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Vs(a),i===1)n.tag===0?Z0(qm.bind(null,n)):Np(qm.bind(null,n)),Q0(function(){(je&6)===0&&ci()}),a=null;else{switch(qn(c)){case 1:a=Os;break;case 4:a=Go;break;case 16:a=$i;break;case 536870912:a=Ls;break;default:a=$i}a=eg(a,Hm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Hm(n,i){if(vu=-1,wu=0,(je&6)!==0)throw Error(t(327));var a=n.callbackNode;if(po()&&n.callbackNode!==a)return null;var c=_r(n,n===At?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Eu(n,c);else{i=c;var d=je;je|=2;var f=Gm();(At!==n||Nt!==i)&&(Nr=null,fo=Qe()+500,ls(n,i));do try{ww();break}catch(S){Km(n,S)}while(!0);uh(),pu.current=f,je=d,pt!==null?i=0:(At=null,Nt=0,i=Et)}if(i!==0){if(i===2&&(d=Yo(n),d!==0&&(c=d,i=qh(n,d))),i===1)throw a=Ca,ls(n,0),yi(n,c),Jt(n,Qe()),a;if(i===6)yi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!_w(d)&&(i=Eu(n,c),i===2&&(f=Yo(n),f!==0&&(c=f,i=qh(n,f))),i===1))throw a=Ca,ls(n,0),yi(n,c),Jt(n,Qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:us(n,Yt,Nr);break;case 3:if(yi(n,c),(c&130023424)===c&&(i=$h+500-Qe(),10<i)){if(_r(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Xc(us.bind(null,n,Yt,Nr),i);break}us(n,Yt,Nr);break;case 4:if(yi(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-nn(c);f=1<<v,v=i[v],v>d&&(d=v),c&=~f}if(c=d,c=Qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*yw(c/1960))-c,10<c){n.timeoutHandle=Xc(us.bind(null,n,Yt,Nr),c);break}us(n,Yt,Nr);break;case 5:us(n,Yt,Nr);break;default:throw Error(t(329))}}}return Jt(n,Qe()),n.callbackNode===a?Hm.bind(null,n):null}function qh(n,i){var a=ka;return n.current.memoizedState.isDehydrated&&(ls(n,i).flags|=256),n=Eu(n,i),n!==2&&(i=Yt,Yt=a,i!==null&&Kh(i)),n}function Kh(n){Yt===null?Yt=n:Yt.push.apply(Yt,n)}function _w(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Pn(f(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yi(n,i){for(i&=~Bh,i&=~mu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-nn(i),c=1<<a;n[a]=-1,i&=~c}}function qm(n){if((je&6)!==0)throw Error(t(327));po();var i=_r(n,0);if((i&1)===0)return Jt(n,Qe()),null;var a=Eu(n,i);if(n.tag!==0&&a===2){var c=Yo(n);c!==0&&(i=c,a=qh(n,c))}if(a===1)throw a=Ca,ls(n,0),yi(n,i),Jt(n,Qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,us(n,Yt,Nr),Jt(n,Qe()),null}function Gh(n,i){var a=je;je|=1;try{return n(i)}finally{je=a,je===0&&(fo=Qe()+500,Gl&&ci())}}function as(n){mi!==null&&mi.tag===0&&(je&6)===0&&po();var i=je;je|=1;var a=wn.transition,c=Le;try{if(wn.transition=null,Le=1,n)return n()}finally{Le=c,wn.transition=a,je=i,(je&6)===0&&ci()}}function Qh(){cn=ho.current,Je(ho)}function ls(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,G0(a)),pt!==null)for(a=pt.return;a!==null;){var c=a;switch(ih(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ql();break;case 3:lo(),Je(Kt),Je(Mt),yh();break;case 5:mh(c);break;case 4:lo();break;case 13:Je(tt);break;case 19:Je(tt);break;case 10:ch(c.type._context);break;case 22:case 23:Qh()}a=a.return}if(At=n,pt=n=_i(n.current,null),Nt=cn=i,Et=0,Ca=null,Bh=mu=os=0,Yt=ka=null,rs!==null){for(i=0;i<rs.length;i++)if(a=rs[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}rs=null}return n}function Km(n,i){do{var a=pt;try{if(uh(),iu.current=lu,su){for(var c=nt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}su=!1}if(ss=0,St=wt=nt=null,Ta=!1,Ia=0,zh.current=null,a===null||a.return===null){Et=1,Ca=i,pt=null;break}e:{var f=n,v=a.return,S=a,C=i;if(i=Nt,S.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,G=S,Y=G.tag;if((G.mode&1)===0&&(Y===0||Y===11||Y===15)){var K=G.alternate;K?(G.updateQueue=K.updateQueue,G.memoizedState=K.memoizedState,G.lanes=K.lanes):(G.updateQueue=null,G.memoizedState=null)}var oe=_m(v);if(oe!==null){oe.flags&=-257,vm(oe,v,S,f,i),oe.mode&1&&ym(f,F,i),i=oe,C=F;var he=i.updateQueue;if(he===null){var de=new Set;de.add(C),i.updateQueue=de}else he.add(C);break e}else{if((i&1)===0){ym(f,F,i),Yh();break e}C=Error(t(426))}}else if(Ze&&S.mode&1){var ut=_m(v);if(ut!==null){(ut.flags&65536)===0&&(ut.flags|=256),vm(ut,v,S,f,i),ah(uo(C,S));break e}}f=C=uo(C,S),Et!==4&&(Et=2),ka===null?ka=[f]:ka.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var L=mm(f,C,i);Bp(f,L);break e;case 1:S=C;var N=f.type,j=f.stateNode;if((f.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(pi===null||!pi.has(j)))){f.flags|=65536,i&=-i,f.lanes|=i;var Z=gm(f,S,i);Bp(f,Z);break e}}f=f.return}while(f!==null)}Ym(a)}catch(fe){i=fe,pt===a&&a!==null&&(pt=a=a.return);continue}break}while(!0)}function Gm(){var n=pu.current;return pu.current=lu,n===null?lu:n}function Yh(){(Et===0||Et===3||Et===2)&&(Et=4),At===null||(os&268435455)===0&&(mu&268435455)===0||yi(At,Nt)}function Eu(n,i){var a=je;je|=2;var c=Gm();(At!==n||Nt!==i)&&(Nr=null,ls(n,i));do try{vw();break}catch(d){Km(n,d)}while(!0);if(uh(),je=a,pu.current=c,pt!==null)throw Error(t(261));return At=null,Nt=0,Et}function vw(){for(;pt!==null;)Qm(pt)}function ww(){for(;pt!==null&&!Bi();)Qm(pt)}function Qm(n){var i=Zm(n.alternate,n,cn);n.memoizedProps=n.pendingProps,i===null?Ym(n):pt=i,zh.current=null}function Ym(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=dw(a,i,cn),a!==null){pt=a;return}}else{if(a=fw(a,i),a!==null){a.flags&=32767,pt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Et=6,pt=null;return}}if(i=i.sibling,i!==null){pt=i;return}pt=i=n}while(i!==null);Et===0&&(Et=5)}function us(n,i,a){var c=Le,d=wn.transition;try{wn.transition=null,Le=1,Ew(n,i,a,c)}finally{wn.transition=d,Le=c}return null}function Ew(n,i,a,c){do po();while(mi!==null);if((je&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Lc(n,f),n===At&&(pt=At=null,Nt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||yu||(yu=!0,eg($i,function(){return po(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=wn.transition,wn.transition=null;var v=Le;Le=1;var S=je;je|=4,zh.current=null,mw(n,a),Um(a,n),z0(Yc),Er=!!Qc,Yc=Qc=null,n.current=a,gw(a),yr(),je=S,Le=v,wn.transition=f}else n.current=a;if(yu&&(yu=!1,mi=n,_u=d),f=n.pendingLanes,f===0&&(pi=null),Cl(a.stateNode),Jt(n,Qe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(gu)throw gu=!1,n=Wh,Wh=null,n;return(_u&1)!==0&&n.tag!==0&&po(),f=n.pendingLanes,(f&1)!==0?n===Hh?Pa++:(Pa=0,Hh=n):Pa=0,ci(),null}function po(){if(mi!==null){var n=qn(_u),i=wn.transition,a=Le;try{if(wn.transition=null,Le=16>n?16:n,mi===null)var c=!1;else{if(n=mi,mi=null,_u=0,(je&6)!==0)throw Error(t(331));var d=je;for(je|=4,ue=n.current;ue!==null;){var f=ue,v=f.child;if((ue.flags&16)!==0){var S=f.deletions;if(S!==null){for(var C=0;C<S.length;C++){var F=S[C];for(ue=F;ue!==null;){var G=ue;switch(G.tag){case 0:case 11:case 15:Ra(8,G,f)}var Y=G.child;if(Y!==null)Y.return=G,ue=Y;else for(;ue!==null;){G=ue;var K=G.sibling,oe=G.return;if(Om(G),G===F){ue=null;break}if(K!==null){K.return=oe,ue=K;break}ue=oe}}}var he=f.alternate;if(he!==null){var de=he.child;if(de!==null){he.child=null;do{var ut=de.sibling;de.sibling=null,de=ut}while(de!==null)}}ue=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,ue=v;else e:for(;ue!==null;){if(f=ue,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Ra(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,ue=L;break e}ue=f.return}}var N=n.current;for(ue=N;ue!==null;){v=ue;var j=v.child;if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,ue=j;else e:for(v=N;ue!==null;){if(S=ue,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:fu(9,S)}}catch(fe){it(S,S.return,fe)}if(S===v){ue=null;break e}var Z=S.sibling;if(Z!==null){Z.return=S.return,ue=Z;break e}ue=S.return}}if(je=d,ci(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Wi,n)}catch{}c=!0}return c}finally{Le=a,wn.transition=i}}return!1}function Jm(n,i,a){i=uo(a,i),i=mm(n,i,1),n=di(n,i,1),i=qt(),n!==null&&(Gi(n,1,i),Jt(n,i))}function it(n,i,a){if(n.tag===3)Jm(n,n,a);else for(;i!==null;){if(i.tag===3){Jm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(pi===null||!pi.has(c))){n=uo(a,n),n=gm(i,n,1),i=di(i,n,1),n=qt(),i!==null&&(Gi(i,1,n),Jt(i,n));break}}i=i.return}}function Tw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=qt(),n.pingedLanes|=n.suspendedLanes&a,At===n&&(Nt&a)===a&&(Et===4||Et===3&&(Nt&130023424)===Nt&&500>Qe()-$h?ls(n,0):Bh|=a),Jt(n,i)}function Xm(n,i){i===0&&((n.mode&1)===0?i=1:(i=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var a=qt();n=Cr(n,i),n!==null&&(Gi(n,i,a),Jt(n,a))}function Iw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Xm(n,a)}function Sw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Xm(n,a)}var Zm;Zm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Kt.current)Qt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Qt=!1,hw(n,i,a);Qt=(n.flags&131072)!==0}else Qt=!1,Ze&&(i.flags&1048576)!==0&&Dp(i,Yl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;hu(n,i),n=i.pendingProps;var d=to(i,Mt.current);ao(i,a),d=wh(null,i,c,n,d,a);var f=Eh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gt(c)?(f=!0,Kl(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,fh(i),d.updater=uu,i.stateNode=d,d._reactInternals=i,Rh(i,c,n,a),i=Nh(null,i,c,!0,f,a)):(i.tag=0,Ze&&f&&rh(i),Ht(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(hu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=xw(c),n=Dn(c,n),d){case 0:i=Ph(null,i,c,n,a);break e;case 1:i=Am(null,i,c,n,a);break e;case 11:i=wm(null,i,c,n,a);break e;case 14:i=Em(null,i,c,Dn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Dn(c,d),Ph(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Dn(c,d),Am(n,i,c,d,a);case 3:e:{if(xm(i),n===null)throw Error(t(387));c=i.pendingProps,f=i.memoizedState,d=f.element,zp(n,i),nu(i,c,null,a);var v=i.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=uo(Error(t(423)),i),i=Rm(n,i,c,a,d);break e}else if(c!==d){d=uo(Error(t(424)),i),i=Rm(n,i,c,a,d);break e}else for(un=ai(i.stateNode.containerInfo.firstChild),ln=i,Ze=!0,Nn=null,a=Fp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(io(),c===d){i=Pr(n,i,a);break e}Ht(n,i,c,a)}i=i.child}return i;case 5:return Wp(i),n===null&&oh(i),c=i.type,d=i.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,Jc(c,d)?v=null:f!==null&&Jc(c,f)&&(i.flags|=32),Sm(n,i),Ht(n,i,v,a),i.child;case 6:return n===null&&oh(i),null;case 13:return Cm(n,i,a);case 4:return ph(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=so(i,null,c,a):Ht(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Dn(c,d),wm(n,i,c,d,a);case 7:return Ht(n,i,i.pendingProps,a),i.child;case 8:return Ht(n,i,i.pendingProps.children,a),i.child;case 12:return Ht(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,f=i.memoizedProps,v=d.value,Ke(Zl,c._currentValue),c._currentValue=v,f!==null)if(Pn(f.value,v)){if(f.children===d.children&&!Kt.current){i=Pr(n,i,a);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var S=f.dependencies;if(S!==null){v=f.child;for(var C=S.firstContext;C!==null;){if(C.context===c){if(f.tag===1){C=kr(-1,a&-a),C.tag=2;var F=f.updateQueue;if(F!==null){F=F.shared;var G=F.pending;G===null?C.next=C:(C.next=G.next,G.next=C),F.pending=C}}f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),hh(f.return,a,i),S.lanes|=a;break}C=C.next}}else if(f.tag===10)v=f.type===i.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),hh(v,a,i),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===i){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}Ht(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,ao(i,a),d=_n(d),c=c(d),i.flags|=1,Ht(n,i,c,a),i.child;case 14:return c=i.type,d=Dn(c,i.pendingProps),d=Dn(c.type,d),Em(n,i,c,d,a);case 15:return Tm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Dn(c,d),hu(n,i),i.tag=1,Gt(c)?(n=!0,Kl(i)):n=!1,ao(i,a),fm(i,c,d),Rh(i,c,d,a),Nh(null,i,c,!0,n,a);case 19:return Pm(n,i,a);case 22:return Im(n,i,a)}throw Error(t(156,i.tag))};function eg(n,i){return Ko(n,i)}function Aw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(n,i,a,c){return new Aw(n,i,a,c)}function Jh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function xw(n){if(typeof n=="function")return Jh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===ot)return 14}return 2}function _i(n,i){var a=n.alternate;return a===null?(a=En(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Tu(n,i,a,c,d,f){var v=2;if(c=n,typeof n=="function")Jh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return cs(a.children,d,f,i);case A:v=8,d|=8;break;case R:return n=En(12,a,i,d|2),n.elementType=R,n.lanes=f,n;case x:return n=En(13,a,i,d),n.elementType=x,n.lanes=f,n;case $e:return n=En(19,a,i,d),n.elementType=$e,n.lanes=f,n;case He:return Iu(a,d,f,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:v=10;break e;case P:v=9;break e;case O:v=11;break e;case ot:v=14;break e;case vt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=En(v,a,i,d),i.elementType=n,i.type=c,i.lanes=f,i}function cs(n,i,a,c){return n=En(7,n,c,i),n.lanes=a,n}function Iu(n,i,a,c){return n=En(22,n,c,i),n.elementType=He,n.lanes=a,n.stateNode={isHidden:!1},n}function Xh(n,i,a){return n=En(6,n,null,i),n.lanes=a,n}function Zh(n,i,a){return i=En(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Rw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ed(n,i,a,c,d,f,v,S,C){return n=new Rw(n,i,a,S,C),i===1?(i=1,f===!0&&(i|=8)):i=0,f=En(3,null,null,i),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},fh(f),n}function Cw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function tg(n){if(!n)return ui;n=n._reactInternals;e:{if(Cn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return kp(n,a,i)}return i}function ng(n,i,a,c,d,f,v,S,C){return n=ed(a,c,!0,n,d,f,v,S,C),n.context=tg(null),a=n.current,c=qt(),d=gi(a),f=kr(c,d),f.callback=i??null,di(a,f,d),n.current.lanes=d,Gi(n,d,c),Jt(n,c),n}function Su(n,i,a,c){var d=i.current,f=qt(),v=gi(d);return a=tg(a),i.context===null?i.context=a:i.pendingContext=a,i=kr(f,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=di(d,i,v),n!==null&&(On(n,d,v,f),tu(n,d,v)),v}function Au(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function rg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function td(n,i){rg(n,i),(n=n.alternate)&&rg(n,i)}function kw(){return null}var ig=typeof reportError=="function"?reportError:function(n){console.error(n)};function nd(n){this._internalRoot=n}xu.prototype.render=nd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Su(n,i,null,null)},xu.prototype.unmount=nd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;as(function(){Su(null,n,null,null)}),i[Sr]=null}};function xu(n){this._internalRoot=n}xu.prototype.unstable_scheduleHydration=function(n){if(n){var i=na();n={blockedOn:null,target:n,priority:i};for(var a=0;a<rn.length&&i!==0&&i<rn[a].priority;a++);rn.splice(a,0,n),a===0&&Fs(n)}};function rd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sg(){}function Pw(n,i,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var F=Au(v);f.call(F)}}var v=ng(i,c,n,0,null,!1,!1,"",sg);return n._reactRootContainer=v,n[Sr]=v.current,pa(n.nodeType===8?n.parentNode:n),as(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var F=Au(C);S.call(F)}}var C=ed(n,0,!1,null,null,!1,!1,"",sg);return n._reactRootContainer=C,n[Sr]=C.current,pa(n.nodeType===8?n.parentNode:n),as(function(){Su(i,C,a,c)}),C}function Cu(n,i,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var S=d;d=function(){var C=Au(v);S.call(C)}}Su(i,v,n,d)}else v=Pw(a,i,n,d,c);return Au(v)}ea=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ue(i.pendingLanes);a!==0&&(Zo(i,a|1),Jt(i,Qe()),(je&6)===0&&(fo=Qe()+500,ci()))}break;case 13:as(function(){var c=Cr(n,1);if(c!==null){var d=qt();On(c,n,1,d)}}),td(n,1)}},Ms=function(n){if(n.tag===13){var i=Cr(n,134217728);if(i!==null){var a=qt();On(i,n,134217728,a)}td(n,134217728)}},ta=function(n){if(n.tag===13){var i=gi(n),a=Cr(n,i);if(a!==null){var c=qt();On(a,n,i,c)}td(n,i)}},na=function(){return Le},ra=function(n,i){var a=Le;try{return Le=n,i()}finally{Le=a}},pr=function(n,i,a){switch(i){case"input":if(ji(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Hl(c);if(!d)throw Error(t(90));zn(c),ji(c,d)}}}break;case"textarea":gl(n,a);break;case"select":i=a.value,i!=null&&xn(n,!!a.multiple,i,!1)}},vl=Gh,wl=as;var Nw={usingClientEntryPoint:!1,Events:[ya,Zs,Hl,Yr,Jr,Gh]},Na={findFiberByHostInstance:Zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dw={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Rl(n),n===null?null:n.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||kw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{Wi=ku.inject(Dw),tn=ku}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nw,Xt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rd(i))throw Error(t(200));return Cw(n,i,null,a)},Xt.createRoot=function(n,i){if(!rd(n))throw Error(t(299));var a=!1,c="",d=ig;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ed(n,1,!1,null,null,a,!1,c,d),n[Sr]=i.current,pa(n.nodeType===8?n.parentNode:n),new nd(i)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Rl(i),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return as(n)},Xt.hydrate=function(n,i,a){if(!Ru(i))throw Error(t(200));return Cu(null,n,i,!0,a)},Xt.hydrateRoot=function(n,i,a){if(!rd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=ig;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=ng(i,null,n,1,a??null,d,!1,f,v),n[Sr]=i.current,pa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new xu(i)},Xt.render=function(n,i,a){if(!Ru(i))throw Error(t(200));return Cu(null,n,i,!1,a)},Xt.unmountComponentAtNode=function(n){if(!Ru(n))throw Error(t(40));return n._reactRootContainer?(as(function(){Cu(null,null,n,!1,function(){n._reactRootContainer=null,n[Sr]=null})}),!0):!1},Xt.unstable_batchedUpdates=Gh,Xt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Ru(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Cu(n,i,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var fg;function Uw(){if(fg)return od.exports;fg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),od.exports=Fw(),od.exports}var pg;function zw(){if(pg)return Pu;pg=1;var r=Uw();return Pu.createRoot=r.createRoot,Pu.hydrateRoot=r.hydrateRoot,Pu}var Bw=zw(),Ne=tf();/**
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
 */const $w=()=>{};var mg={};/**
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
 */const Ky=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Ww=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Gy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,T=u>>2,I=(u&3)<<4|m>>4;let D=(m&15)<<2|_>>6,z=_&63;g||(z=64,h||(D=64)),s.push(t[T],t[I],t[D],t[z])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ky(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Ww(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const I=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||I==null)throw new Hw;const D=u<<2|m>>4;if(s.push(D),_!==64){const z=m<<4&240|_>>2;if(s.push(z),I!==64){const X=_<<6&192|I;s.push(X)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Hw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qw=function(r){const e=Ky(r);return Gy.encodeByteArray(e,!0)},Gu=function(r){return qw(r).replace(/\./g,"")},Qy=function(r){try{return Gy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Kw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gw=()=>Kw().__FIREBASE_DEFAULTS__,Qw=()=>{if(typeof process>"u"||typeof mg>"u")return;const r=mg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Yw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Qy(r[1]);return e&&JSON.parse(e)},fc=()=>{try{return $w()||Gw()||Qw()||Yw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Yy=r=>{var e,t;return(t=(e=fc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},Jw=r=>{const e=Yy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Jy=()=>{var r;return(r=fc())==null?void 0:r.config},Xy=r=>{var e;return(e=fc())==null?void 0:e[`_${r}`]};/**
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
 */class Xw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Zw(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Gu(JSON.stringify(t)),Gu(JSON.stringify(h)),""].join(".")}/**
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
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function tE(){var e;const r=(e=fc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function iE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sE(){const r=Wt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function oE(){return!tE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aE(){try{return typeof indexedDB=="object"}catch{return!1}}function lE(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const uE="FirebaseError";class fn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=uE,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tl.prototype.create)}}class tl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?cE(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new fn(o,m,s)}}function cE(r,e){return r.replace(hE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const hE=/\{\$([^}]+)}/g;function dE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function gs(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(gg(u)&&gg(h)){if(!gs(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function gg(r){return r!==null&&typeof r=="object"}/**
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
 */function nl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Va(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Oa(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function fE(r,e){const t=new pE(r,e);return t.subscribe.bind(t)}class pE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");mE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=ud),o.error===void 0&&(o.error=ud),o.complete===void 0&&(o.complete=ud);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mE(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ud(){}/**
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
 */function _t(r){return r&&r._delegate?r._delegate:r}/**
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
 */function rl(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zy(r){return(await fetch(r,{credentials:"include"})).ok}class ys{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hs="[DEFAULT]";/**
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
 */class gE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Xw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_E(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yE(r){return r===hs?void 0:r}function _E(r){return r.instantiationMode==="EAGER"}/**
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
 */class vE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ve;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ve||(Ve={}));const wE={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},EE=Ve.INFO,TE={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},IE=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=TE[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nf{constructor(e){this.name=e,this._logLevel=EE,this._logHandler=IE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const SE=(r,e)=>e.some(t=>r instanceof t);let yg,_g;function AE(){return yg||(yg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xE(){return _g||(_g=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e_=new WeakMap,Ad=new WeakMap,t_=new WeakMap,cd=new WeakMap,rf=new WeakMap;function RE(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(Si(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&e_.set(t,r)}).catch(()=>{}),rf.set(e,r),e}function CE(r){if(Ad.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Ad.set(r,e)}let xd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ad.get(r);if(e==="objectStoreNames")return r.objectStoreNames||t_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Si(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function kE(r){xd=r(xd)}function PE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(hd(this),e,...t);return t_.set(s,e.sort?e.sort():[e]),Si(s)}:xE().includes(r)?function(...e){return r.apply(hd(this),e),Si(e_.get(this))}:function(...e){return Si(r.apply(hd(this),e))}}function NE(r){return typeof r=="function"?PE(r):(r instanceof IDBTransaction&&CE(r),SE(r,AE())?new Proxy(r,xd):r)}function Si(r){if(r instanceof IDBRequest)return RE(r);if(cd.has(r))return cd.get(r);const e=NE(r);return e!==r&&(cd.set(r,e),rf.set(e,r)),e}const hd=r=>rf.get(r);function DE(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=Si(h);return s&&h.addEventListener("upgradeneeded",g=>{s(Si(h.result),g.oldVersion,g.newVersion,Si(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const bE=["get","getKey","getAll","getAllKeys","count"],VE=["put","add","delete","clear"],dd=new Map;function vg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(dd.get(e))return dd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=VE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||bE.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return dd.set(e,u),u}kE(r=>({...r,get:(e,t,s)=>vg(e,t)||r.get(e,t,s),has:(e,t)=>!!vg(e,t)||r.has(e,t)}));/**
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
 */class OE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(LE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function LE(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rd="@firebase/app",wg="0.14.12";/**
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
 */const Fr=new nf("@firebase/app"),ME="@firebase/app-compat",jE="@firebase/analytics-compat",FE="@firebase/analytics",UE="@firebase/app-check-compat",zE="@firebase/app-check",BE="@firebase/auth",$E="@firebase/auth-compat",WE="@firebase/database",HE="@firebase/data-connect",qE="@firebase/database-compat",KE="@firebase/functions",GE="@firebase/functions-compat",QE="@firebase/installations",YE="@firebase/installations-compat",JE="@firebase/messaging",XE="@firebase/messaging-compat",ZE="@firebase/performance",eT="@firebase/performance-compat",tT="@firebase/remote-config",nT="@firebase/remote-config-compat",rT="@firebase/storage",iT="@firebase/storage-compat",sT="@firebase/firestore",oT="@firebase/ai",aT="@firebase/firestore-compat",lT="firebase",uT="12.13.0";/**
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
 */const Cd="[DEFAULT]",cT={[Rd]:"fire-core",[ME]:"fire-core-compat",[FE]:"fire-analytics",[jE]:"fire-analytics-compat",[zE]:"fire-app-check",[UE]:"fire-app-check-compat",[BE]:"fire-auth",[$E]:"fire-auth-compat",[WE]:"fire-rtdb",[HE]:"fire-data-connect",[qE]:"fire-rtdb-compat",[KE]:"fire-fn",[GE]:"fire-fn-compat",[QE]:"fire-iid",[YE]:"fire-iid-compat",[JE]:"fire-fcm",[XE]:"fire-fcm-compat",[ZE]:"fire-perf",[eT]:"fire-perf-compat",[tT]:"fire-rc",[nT]:"fire-rc-compat",[rT]:"fire-gcs",[iT]:"fire-gcs-compat",[sT]:"fire-fst",[aT]:"fire-fst-compat",[oT]:"fire-vertex","fire-js":"fire-js",[lT]:"fire-js-all"};/**
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
 */const Qu=new Map,hT=new Map,kd=new Map;function Eg(r,e){try{r.container.addComponent(e)}catch(t){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function xo(r){const e=r.name;if(kd.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;kd.set(e,r);for(const t of Qu.values())Eg(t,r);for(const t of hT.values())Eg(t,r);return!0}function sf(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function hn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const dT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ai=new tl("app","Firebase",dT);/**
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
 */class fT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ys("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ai.create("app-deleted",{appName:this._name})}}/**
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
 */const Do=uT;function n_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Cd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Ai.create("bad-app-name",{appName:String(o)});if(t||(t=Jy()),!t)throw Ai.create("no-options");const u=Qu.get(o);if(u){if(gs(t,u.options)&&gs(s,u.config))return u;throw Ai.create("duplicate-app",{appName:o})}const h=new vE(o);for(const g of kd.values())h.addComponent(g);const m=new fT(t,s,h);return Qu.set(o,m),m}function r_(r=Cd){const e=Qu.get(r);if(!e&&r===Cd&&Jy())return n_();if(!e)throw Ai.create("no-app",{appName:r});return e}function xi(r,e,t){let s=cT[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(h.join(" "));return}xo(new ys(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const pT="firebase-heartbeat-database",mT=1,Ha="firebase-heartbeat-store";let fd=null;function i_(){return fd||(fd=DE(pT,mT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ha)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ai.create("idb-open",{originalErrorMessage:r.message})})),fd}async function gT(r){try{const t=(await i_()).transaction(Ha),s=await t.objectStore(Ha).get(s_(r));return await t.done,s}catch(e){if(e instanceof fn)Fr.warn(e.message);else{const t=Ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fr.warn(t.message)}}}async function Tg(r,e){try{const s=(await i_()).transaction(Ha,"readwrite");await s.objectStore(Ha).put(e,s_(r)),await s.done}catch(t){if(t instanceof fn)Fr.warn(t.message);else{const s=Ai.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Fr.warn(s.message)}}}function s_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const yT=1024,_T=30;class vT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ET(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Ig();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>_T){const h=TT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Fr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ig(),{heartbeatsToSend:s,unsentEntries:o}=wT(this._heartbeatsCache.heartbeats),u=Gu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Fr.warn(t),""}}}function Ig(){return new Date().toISOString().substring(0,10)}function wT(r,e=yT){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Sg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Sg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class ET{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aE()?lE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Tg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Tg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sg(r){return Gu(JSON.stringify({version:2,heartbeats:r})).length}function TT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function IT(r){xo(new ys("platform-logger",e=>new OE(e),"PRIVATE")),xo(new ys("heartbeat",e=>new vT(e),"PRIVATE")),xi(Rd,wg,r),xi(Rd,wg,"esm2020"),xi("fire-js","")}IT("");function o_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ST=o_,a_=new tl("auth","Firebase",o_());/**
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
 */const Yu=new nf("@firebase/auth");function AT(r,...e){Yu.logLevel<=Ve.WARN&&Yu.warn(`Auth (${Do}): ${r}`,...e)}function ju(r,...e){Yu.logLevel<=Ve.ERROR&&Yu.error(`Auth (${Do}): ${r}`,...e)}/**
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
 */function Sn(r,...e){throw af(r,...e)}function Mn(r,...e){return af(r,...e)}function of(r,e,t){const s={...ST(),[e]:t};return new tl("auth","Firebase",s).create(e,{appName:r.name})}function Mr(r){return of(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xT(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Sn(r,"argument-error"),of(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function af(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return a_.create(r,...e)}function Ee(r,e,...t){if(!r)throw af(e,...t)}function Vr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ju(e),new Error(e)}function Ur(r,e){r||Vr(e)}/**
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
 */function Pd(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function RT(){return Ag()==="http:"||Ag()==="https:"}function Ag(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function CT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RT()||rE()||"connection"in navigator)?navigator.onLine:!0}function kT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class il{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ur(t>e,"Short delay should be less than long delay!"),this.isMobile=eE()||iE()}get(){return CT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function lf(r,e){Ur(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class l_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const PT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const NT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],DT=new il(3e4,6e4);function $r(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function fr(r,e,t,s,o={}){return u_(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=nl({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...u};return nE()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&rl(r.emulatorConfig.host)&&(_.credentials="include"),l_.fetch()(await c_(r,r.config.apiHost,t,m),_)})}async function u_(r,e,t){r._canInitEmulator=!1;const s={...PT,...e};try{const o=new VT(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Nu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Nu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Nu(r,"user-disabled",h);const T=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw of(r,T,_);Sn(r,T)}}catch(o){if(o instanceof fn)throw o;Sn(r,"network-request-failed",{message:String(o)})}}async function sl(r,e,t,s,o={}){const u=await fr(r,e,t,s,o);return"mfaPendingCredential"in u&&Sn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function c_(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?lf(r.config,o):`${r.config.apiScheme}://${o}`;return NT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function bT(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Mn(this.auth,"network-request-failed")),DT.get())})}}function Nu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Mn(r,e,s);return o.customData._tokenResponse=t,o}function xg(r){return r!==void 0&&r.enterprise!==void 0}class OT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return bT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function LT(r,e){return fr(r,"GET","/v2/recaptchaConfig",$r(r,e))}/**
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
 */async function MT(r,e){return fr(r,"POST","/v1/accounts:delete",e)}async function Ju(r,e){return fr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ua(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jT(r,e=!1){const t=_t(r),s=await t.getIdToken(e),o=uf(s);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ua(pd(o.auth_time)),issuedAtTime:Ua(pd(o.iat)),expirationTime:Ua(pd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function pd(r){return Number(r)*1e3}function uf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return ju("JWT malformed, contained fewer than 3 sections"),null;try{const o=Qy(t);return o?JSON.parse(o):(ju("Failed to decode base64 JWT payload"),null)}catch(o){return ju("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Rg(r){const e=uf(r);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ro(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof fn&&FT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function FT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class UT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ua(this.lastLoginAt),this.creationTime=Ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xu(r){var I;const e=r.auth,t=await r.getIdToken(),s=await Ro(r,Ju(e,{idToken:t}));Ee(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(I=o.providerUserInfo)!=null&&I.length?h_(o.providerUserInfo):[],h=BT(r.providerData,u),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?g:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Nd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,T)}async function zT(r){const e=_t(r);await Xu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function h_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function $T(r,e){const t=await u_(r,{},async()=>{const s=nl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await c_(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&rl(r.emulatorConfig.host)&&(g.credentials="include"),l_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function WT(r,e){return fr(r,"POST","/v2/accounts:revokeToken",$r(r,e))}/**
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
 */class vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=Rg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await $T(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new vo;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Ee(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(Ee(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vo,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
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
 */function wi(r,e){Ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ln{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new UT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Nd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jT(this,e)}reload(){return zT(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ln({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Xu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(Mr(this.auth));const e=await this.getIdToken();return await Ro(this,MT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,T=t.lastLoginAt??void 0,{uid:I,emailVerified:D,isAnonymous:z,providerData:X,stsTokenManager:J}=t;Ee(I&&J,e,"internal-error");const q=vo.fromJSON(this.name,J);Ee(typeof I=="string",e,"internal-error"),wi(s,e.name),wi(o,e.name),Ee(typeof D=="boolean",e,"internal-error"),Ee(typeof z=="boolean",e,"internal-error"),wi(u,e.name),wi(h,e.name),wi(m,e.name),wi(g,e.name),wi(_,e.name),wi(T,e.name);const ce=new Ln({uid:I,auth:e,email:o,emailVerified:D,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:q,createdAt:_,lastLoginAt:T});return X&&Array.isArray(X)&&(ce.providerData=X.map(pe=>({...pe}))),g&&(ce._redirectEventId=g),ce}static async _fromIdTokenResponse(e,t,s=!1){const o=new vo;o.updateFromServerResponse(t);const u=new Ln({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Xu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?h_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new vo;m.updateFromIdToken(s);const g=new Ln({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Nd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const Cg=new Map;function Or(r){Ur(r instanceof Function,"Expected a class definition");let e=Cg.get(r);return e?(Ur(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Cg.set(r,e),e)}/**
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
 */class d_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}d_.type="NONE";const kg=d_;/**
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
 */function Fu(r,e,t){return`firebase:${r}:${e}:${t}`}class wo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Fu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Fu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ju(this.auth,{idToken:e}).catch(()=>{});return t?Ln._fromGetAccountInfoResponse(this.auth,t,e):null}return Ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new wo(Or(kg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Or(kg);const h=Fu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const T=await _._get(h);if(T){let I;if(typeof T=="string"){const D=await Ju(e,{idToken:T}).catch(()=>{});if(!D)break;I=await Ln._fromGetAccountInfoResponse(e,D,T)}else I=Ln._fromJSON(e,T);_!==u&&(m=I),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new wo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new wo(u,e,s))}}/**
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
 */function Pg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(g_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(f_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(__(e))return"Blackberry";if(v_(e))return"Webos";if(p_(e))return"Safari";if((e.includes("chrome/")||m_(e))&&!e.includes("edge/"))return"Chrome";if(y_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function f_(r=Wt()){return/firefox\//i.test(r)}function p_(r=Wt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function m_(r=Wt()){return/crios\//i.test(r)}function g_(r=Wt()){return/iemobile/i.test(r)}function y_(r=Wt()){return/android/i.test(r)}function __(r=Wt()){return/blackberry/i.test(r)}function v_(r=Wt()){return/webos/i.test(r)}function cf(r=Wt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function HT(r=Wt()){var e;return cf(r)&&!!((e=window.navigator)!=null&&e.standalone)}function qT(){return sE()&&document.documentMode===10}function w_(r=Wt()){return cf(r)||y_(r)||v_(r)||__(r)||/windows phone/i.test(r)||g_(r)}/**
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
 */function E_(r,e=[]){let t;switch(r){case"Browser":t=Pg(Wt());break;case"Worker":t=`${Pg(Wt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Do}/${s}`}/**
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
 */class KT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function GT(r,e={}){return fr(r,"GET","/v2/passwordPolicy",$r(r,e))}/**
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
 */const QT=6;class YT{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??QT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class JT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ng(this),this.idTokenSubscription=new Ng(this),this.beforeStateQueue=new KT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=a_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Or(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await wo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ju(this,{idToken:e}),s=await Ln._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(hn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(Mr(this));const t=e?_t(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GT(this),t=new YT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new tl("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await WT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Or(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await wo.create(this,[Or(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=E_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(hn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&AT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Wr(r){return _t(r)}class Ng{constructor(e){this.auth=e,this.observer=null,this.addObserver=fE(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XT(r){pc=r}function T_(r){return pc.loadJS(r)}function ZT(){return pc.recaptchaEnterpriseScript}function eI(){return pc.gapiScript}function tI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class nI{constructor(){this.enterprise=new rI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class rI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const iI="recaptcha-enterprise",I_="NO_RECAPTCHA";class sI{constructor(e){this.type=iI,this.auth=Wr(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{LT(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new OT(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;xg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(I_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nI().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&xg(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=ZT();g.length!==0&&(g+=m),T_(g).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function Dg(r,e,t,s=!1,o=!1){const u=new sI(r);let h;if(o)h=I_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Zu(r,e,t,s,o){var u;if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Dg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Dg(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
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
 */function oI(r,e){const t=sf(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(gs(u,e??{}))return o;Sn(o,"already-initialized")}return t.initialize({options:e})}function aI(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Or);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function lI(r,e,t){const s=Wr(r);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=S_(e),{host:h,port:m}=uI(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},T=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee(gs(_,s.config.emulator)&&gs(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,rl(h)?Zy(`${u}//${h}${g}`):cI()}function S_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function uI(r){const e=S_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:bg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:bg(h)}}}function bg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function cI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class hf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function hI(r,e){return fr(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function dI(r,e){return sl(r,"POST","/v1/accounts:signInWithPassword",$r(r,e))}async function fI(r,e){return fr(r,"POST","/v1/accounts:sendOobCode",$r(r,e))}async function pI(r,e){return fI(r,e)}/**
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
 */async function mI(r,e){return sl(r,"POST","/v1/accounts:signInWithEmailLink",$r(r,e))}async function gI(r,e){return sl(r,"POST","/v1/accounts:signInWithEmailLink",$r(r,e))}/**
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
 */class qa extends hf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new qa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new qa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zu(e,t,"signInWithPassword",dI);case"emailLink":return mI(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zu(e,s,"signUpPassword",hI);case"emailLink":return gI(e,{idToken:t,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Eo(r,e){return sl(r,"POST","/v1/accounts:signInWithIdp",$r(r,e))}/**
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
 */const yI="http://localhost";class _s extends hf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new _s(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Eo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Eo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Eo(e,t)}buildRequest(){const e={requestUri:yI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=nl(t)}return e}}/**
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
 */function _I(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vI(r){const e=Va(Oa(r)).link,t=e?Va(Oa(e)).deep_link_id:null,s=Va(Oa(r)).deep_link_id;return(s?Va(Oa(s)).link:null)||s||t||e||r}class df{constructor(e){const t=Va(Oa(e)),s=t.apiKey??null,o=t.oobCode??null,u=_I(t.mode??null);Ee(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=vI(e);try{return new df(t)}catch{return null}}}/**
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
 */class bo{constructor(){this.providerId=bo.PROVIDER_ID}static credential(e,t){return qa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=df.parseLink(t);return Ee(s,"argument-error"),qa._fromEmailAndCode(e,s.code,s.tenantId)}}bo.PROVIDER_ID="password";bo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ff{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ol extends ff{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ei extends ol{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch{return null}}}Ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ei.PROVIDER_ID="facebook.com";/**
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
 */class br extends ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _s._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return br.credential(t,s)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
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
 */class Ti extends ol{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
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
 */class Ii extends ol{constructor(){super("twitter.com")}static credential(e,t){return _s._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ii.credential(t,s)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
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
 */async function wI(r,e){return sl(r,"POST","/v1/accounts:signUp",$r(r,e))}/**
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
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Ln._fromIdTokenResponse(e,s,o),h=Vg(s);return new vs({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Vg(s);return new vs({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Vg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class ec extends fn{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ec.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new ec(e,t,s,o)}}function A_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?ec._fromErrorAndOperation(r,u,e,s):u})}async function EI(r,e,t=!1){const s=await Ro(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return vs._forOperation(r,"link",s)}/**
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
 */async function TI(r,e,t=!1){const{auth:s}=r;if(hn(s.app))return Promise.reject(Mr(s));const o="reauthenticate";try{const u=await Ro(r,A_(s,o,e,r),t);Ee(u.idToken,s,"internal-error");const h=uf(u.idToken);Ee(h,s,"internal-error");const{sub:m}=h;return Ee(r.uid===m,s,"user-mismatch"),vs._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Sn(s,"user-mismatch"),u}}/**
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
 */async function x_(r,e,t=!1){if(hn(r.app))return Promise.reject(Mr(r));const s="signIn",o=await A_(r,s,e),u=await vs._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function II(r,e){return x_(Wr(r),e)}/**
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
 */async function R_(r){const e=Wr(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function SI(r,e,t){const s=Wr(r);await Zu(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",pI)}async function AI(r,e,t){if(hn(r.app))return Promise.reject(Mr(r));const s=Wr(r),h=await Zu(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wI).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&R_(r),g}),m=await vs._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function xI(r,e,t){return hn(r.app)?Promise.reject(Mr(r)):II(_t(r),bo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&R_(r),s})}/**
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
 */async function RI(r,e){return fr(r,"POST","/v1/accounts:update",e)}/**
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
 */async function CI(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=_t(r),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await Ro(s,RI(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const m=s.providerData.find(({providerId:g})=>g==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}/**
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
 */function kI(r,e){return _t(r).setPersistence(e)}function PI(r,e,t,s){return _t(r).onIdTokenChanged(e,t,s)}function NI(r,e,t){return _t(r).beforeAuthStateChanged(e,t)}function DI(r,e,t,s){return _t(r).onAuthStateChanged(e,t,s)}function bI(r){return _t(r).signOut()}const tc="__sak";/**
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
 */class C_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(tc,"1"),this.storage.removeItem(tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const VI=1e3,OI=10;class k_ extends C_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=w_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);qT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,OI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},VI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}k_.type="LOCAL";const P_=k_;/**
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
 */class N_ extends C_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}N_.type="SESSION";const pf=N_;/**
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
 */function LI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new mc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await LI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mc.receivers=[];/**
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
 */function mf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class MI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=mf("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(I){const D=I;if(D.data.eventId===_)switch(D.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(D.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ar(){return window}function jI(r){ar().location.href=r}/**
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
 */function D_(){return typeof ar().WorkerGlobalScope<"u"&&typeof ar().importScripts=="function"}async function FI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function zI(){return D_()?self:null}/**
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
 */const b_="firebaseLocalStorageDb",BI=1,nc="firebaseLocalStorage",V_="fbase_key";class al{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function gc(r,e){return r.transaction([nc],e?"readwrite":"readonly").objectStore(nc)}function $I(){const r=indexedDB.deleteDatabase(b_);return new al(r).toPromise()}function Dd(){const r=indexedDB.open(b_,BI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(nc,{keyPath:V_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(nc)?e(s):(s.close(),await $I(),e(await Dd()))})})}async function Og(r,e,t){const s=gc(r,!0).put({[V_]:e,value:t});return new al(s).toPromise()}async function WI(r,e){const t=gc(r,!1).get(e),s=await new al(t).toPromise();return s===void 0?null:s.value}function Lg(r,e){const t=gc(r,!0).delete(e);return new al(t).toPromise()}const HI=800,qI=3;class O_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>qI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return D_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mc._getInstance(zI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await FI(),!this.activeServiceWorker)return;this.sender=new MI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dd();return await Og(e,tc,"1"),await Lg(e,tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Og(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>WI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Lg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=gc(o,!1).getAll();return new al(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O_.type="LOCAL";const KI=O_;new il(3e4,6e4);/**
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
 */function L_(r,e){return e?Or(e):(Ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class gf extends hf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Eo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Eo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function GI(r){return x_(r.auth,new gf(r),r.bypassAuthState)}function QI(r){const{auth:e,user:t}=r;return Ee(t,e,"internal-error"),TI(t,new gf(r),r.bypassAuthState)}async function YI(r){const{auth:e,user:t}=r;return Ee(t,e,"internal-error"),EI(t,new gf(r),r.bypassAuthState)}/**
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
 */class M_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GI;case"linkViaPopup":case"linkViaRedirect":return YI;case"reauthViaPopup":case"reauthViaRedirect":return QI;default:Sn(this.auth,"internal-error")}}resolve(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const JI=new il(2e3,1e4);async function XI(r,e,t){if(hn(r.app))return Promise.reject(Mn(r,"operation-not-supported-in-this-environment"));const s=Wr(r);xT(r,e,ff);const o=L_(s,t);return new fs(s,"signInViaPopup",e,o).executeNotNull()}class fs extends M_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Ur(this.filter.length===1,"Popup operations only handle one event");const e=mf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JI.get())};e()}}fs.currentPopupAction=null;/**
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
 */const ZI="pendingRedirect",Uu=new Map;class e1 extends M_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Uu.get(this.auth._key());if(!e){try{const s=await t1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Uu.set(this.auth._key(),e)}return this.bypassAuthState||Uu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function t1(r,e){const t=i1(e),s=r1(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function n1(r,e){Uu.set(r._key(),e)}function r1(r){return Or(r._redirectPersistence)}function i1(r){return Fu(ZI,r.config.apiKey,r.name)}async function s1(r,e,t=!1){if(hn(r.app))return Promise.reject(Mr(r));const s=Wr(r),o=L_(s,e),h=await new e1(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const o1=600*1e3;class a1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!j_(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Mn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=o1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mg(e))}saveEventToCache(e){this.cachedEventUids.add(Mg(e)),this.lastProcessedEventTime=Date.now()}}function Mg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function j_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return j_(r);default:return!1}}/**
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
 */async function u1(r,e={}){return fr(r,"GET","/v1/projects",e)}/**
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
 */const c1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h1=/^https?/;async function d1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await u1(r);for(const t of e)try{if(f1(t))return}catch{}Sn(r,"unauthorized-domain")}function f1(r){const e=Pd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!h1.test(t))return!1;if(c1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const p1=new il(3e4,6e4);function jg(){const r=ar().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function m1(r){return new Promise((e,t)=>{var o,u,h;function s(){jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jg(),t(Mn(r,"network-request-failed"))},timeout:p1.get()})}if((u=(o=ar().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=ar().gapi)!=null&&h.load)s();else{const m=tI("iframefcb");return ar()[m]=()=>{gapi.load?s():t(Mn(r,"network-request-failed"))},T_(`${eI()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw zu=null,e})}let zu=null;function g1(r){return zu=zu||m1(r),zu}/**
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
 */const y1=new il(5e3,15e3),_1="__/auth/iframe",v1="emulator/auth/iframe",w1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},E1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T1(r){const e=r.config;Ee(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?lf(e,v1):`https://${r.config.authDomain}/${_1}`,s={apiKey:e.apiKey,appName:r.name,v:Do},o=E1.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${nl(s).slice(1)}`}async function I1(r){const e=await g1(r),t=ar().gapi;return Ee(t,r,"internal-error"),e.open({where:document.body,url:T1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:w1,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Mn(r,"network-request-failed"),m=ar().setTimeout(()=>{u(h)},y1.get());function g(){ar().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const S1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A1=500,x1=600,R1="_blank",C1="http://localhost";class Fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function k1(r,e,t,s=A1,o=x1){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...S1,width:s.toString(),height:o.toString(),top:u,left:h},_=Wt().toLowerCase();t&&(m=m_(_)?R1:t),f_(_)&&(e=e||C1,g.scrollbars="yes");const T=Object.entries(g).reduce((D,[z,X])=>`${D}${z}=${X},`,"");if(HT(_)&&m!=="_self")return P1(e||"",m),new Fg(null);const I=window.open(e||"",m,T);Ee(I,r,"popup-blocked");try{I.focus()}catch{}return new Fg(I)}function P1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const N1="__/auth/handler",D1="emulator/auth/handler",b1=encodeURIComponent("fac");async function Ug(r,e,t,s,o,u){Ee(r.config.authDomain,r,"auth-domain-config-required"),Ee(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Do,eventId:o};if(e instanceof ff){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",dE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,I]of Object.entries({}))h[T]=I}if(e instanceof ol){const T=e.getScopes().filter(I=>I!=="");T.length>0&&(h.scopes=T.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const g=await r._getAppCheckToken(),_=g?`#${b1}=${encodeURIComponent(g)}`:"";return`${V1(r)}?${nl(m).slice(1)}${_}`}function V1({config:r}){return r.emulator?lf(r,D1):`https://${r.authDomain}/${N1}`}/**
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
 */const md="webStorageSupport";class O1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pf,this._completeRedirectFn=s1,this._overrideRedirectResult=n1}async _openPopup(e,t,s,o){var h;Ur((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await Ug(e,t,s,Pd(),o);return k1(e,u,mf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Ug(e,t,s,Pd(),o);return jI(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ur(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await I1(e),s=new a1(e);return t.register("authEvent",o=>(Ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(md,{type:md},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[md];u!==void 0&&t(!!u),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=d1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return w_()||p_()||cf()}}const L1=O1;var zg="@firebase/auth",Bg="1.13.1";/**
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
 */class M1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function j1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function F1(r){xo(new ys("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;Ee(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:E_(r)},_=new JT(s,o,u,g);return aI(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),xo(new ys("auth-internal",e=>{const t=Wr(e.getProvider("auth").getImmediate());return(s=>new M1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xi(zg,Bg,j1(r)),xi(zg,Bg,"esm2020")}/**
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
 */const U1=300,z1=Xy("authIdTokenMaxAge")||U1;let $g=null;const B1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>z1)return;const o=t==null?void 0:t.token;$g!==o&&($g=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $1(r=r_()){const e=sf(r,"auth");if(e.isInitialized())return e.getImmediate();const t=oI(r,{popupRedirectResolver:L1,persistence:[KI,P_,pf]}),s=Xy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=B1(u.toString());NI(t,h,()=>h(t.currentUser)),PI(t,m=>h(m))}}const o=Yy("auth");return o&&lI(t,`http://${o}`),t}function W1(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}XT({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Mn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",W1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});F1("Browser");var H1="firebase",q1="12.13.0";/**
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
 */xi(H1,q1,"app");var Wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ri,F_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,A){function R(){}R.prototype=A.prototype,k.F=A.prototype,k.prototype=new R,k.prototype.constructor=k,k.D=function(b,P,O){for(var x=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)x[$e-2]=arguments[$e];return A.prototype[P].apply(b,x)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,A,R){R||(R=0);const b=Array(16);if(typeof A=="string")for(var P=0;P<16;++P)b[P]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(P=0;P<16;++P)b[P]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=k.g[0],R=k.g[1],P=k.g[2];let O=k.g[3],x;x=A+(O^R&(P^O))+b[0]+3614090360&4294967295,A=R+(x<<7&4294967295|x>>>25),x=O+(P^A&(R^P))+b[1]+3905402710&4294967295,O=A+(x<<12&4294967295|x>>>20),x=P+(R^O&(A^R))+b[2]+606105819&4294967295,P=O+(x<<17&4294967295|x>>>15),x=R+(A^P&(O^A))+b[3]+3250441966&4294967295,R=P+(x<<22&4294967295|x>>>10),x=A+(O^R&(P^O))+b[4]+4118548399&4294967295,A=R+(x<<7&4294967295|x>>>25),x=O+(P^A&(R^P))+b[5]+1200080426&4294967295,O=A+(x<<12&4294967295|x>>>20),x=P+(R^O&(A^R))+b[6]+2821735955&4294967295,P=O+(x<<17&4294967295|x>>>15),x=R+(A^P&(O^A))+b[7]+4249261313&4294967295,R=P+(x<<22&4294967295|x>>>10),x=A+(O^R&(P^O))+b[8]+1770035416&4294967295,A=R+(x<<7&4294967295|x>>>25),x=O+(P^A&(R^P))+b[9]+2336552879&4294967295,O=A+(x<<12&4294967295|x>>>20),x=P+(R^O&(A^R))+b[10]+4294925233&4294967295,P=O+(x<<17&4294967295|x>>>15),x=R+(A^P&(O^A))+b[11]+2304563134&4294967295,R=P+(x<<22&4294967295|x>>>10),x=A+(O^R&(P^O))+b[12]+1804603682&4294967295,A=R+(x<<7&4294967295|x>>>25),x=O+(P^A&(R^P))+b[13]+4254626195&4294967295,O=A+(x<<12&4294967295|x>>>20),x=P+(R^O&(A^R))+b[14]+2792965006&4294967295,P=O+(x<<17&4294967295|x>>>15),x=R+(A^P&(O^A))+b[15]+1236535329&4294967295,R=P+(x<<22&4294967295|x>>>10),x=A+(P^O&(R^P))+b[1]+4129170786&4294967295,A=R+(x<<5&4294967295|x>>>27),x=O+(R^P&(A^R))+b[6]+3225465664&4294967295,O=A+(x<<9&4294967295|x>>>23),x=P+(A^R&(O^A))+b[11]+643717713&4294967295,P=O+(x<<14&4294967295|x>>>18),x=R+(O^A&(P^O))+b[0]+3921069994&4294967295,R=P+(x<<20&4294967295|x>>>12),x=A+(P^O&(R^P))+b[5]+3593408605&4294967295,A=R+(x<<5&4294967295|x>>>27),x=O+(R^P&(A^R))+b[10]+38016083&4294967295,O=A+(x<<9&4294967295|x>>>23),x=P+(A^R&(O^A))+b[15]+3634488961&4294967295,P=O+(x<<14&4294967295|x>>>18),x=R+(O^A&(P^O))+b[4]+3889429448&4294967295,R=P+(x<<20&4294967295|x>>>12),x=A+(P^O&(R^P))+b[9]+568446438&4294967295,A=R+(x<<5&4294967295|x>>>27),x=O+(R^P&(A^R))+b[14]+3275163606&4294967295,O=A+(x<<9&4294967295|x>>>23),x=P+(A^R&(O^A))+b[3]+4107603335&4294967295,P=O+(x<<14&4294967295|x>>>18),x=R+(O^A&(P^O))+b[8]+1163531501&4294967295,R=P+(x<<20&4294967295|x>>>12),x=A+(P^O&(R^P))+b[13]+2850285829&4294967295,A=R+(x<<5&4294967295|x>>>27),x=O+(R^P&(A^R))+b[2]+4243563512&4294967295,O=A+(x<<9&4294967295|x>>>23),x=P+(A^R&(O^A))+b[7]+1735328473&4294967295,P=O+(x<<14&4294967295|x>>>18),x=R+(O^A&(P^O))+b[12]+2368359562&4294967295,R=P+(x<<20&4294967295|x>>>12),x=A+(R^P^O)+b[5]+4294588738&4294967295,A=R+(x<<4&4294967295|x>>>28),x=O+(A^R^P)+b[8]+2272392833&4294967295,O=A+(x<<11&4294967295|x>>>21),x=P+(O^A^R)+b[11]+1839030562&4294967295,P=O+(x<<16&4294967295|x>>>16),x=R+(P^O^A)+b[14]+4259657740&4294967295,R=P+(x<<23&4294967295|x>>>9),x=A+(R^P^O)+b[1]+2763975236&4294967295,A=R+(x<<4&4294967295|x>>>28),x=O+(A^R^P)+b[4]+1272893353&4294967295,O=A+(x<<11&4294967295|x>>>21),x=P+(O^A^R)+b[7]+4139469664&4294967295,P=O+(x<<16&4294967295|x>>>16),x=R+(P^O^A)+b[10]+3200236656&4294967295,R=P+(x<<23&4294967295|x>>>9),x=A+(R^P^O)+b[13]+681279174&4294967295,A=R+(x<<4&4294967295|x>>>28),x=O+(A^R^P)+b[0]+3936430074&4294967295,O=A+(x<<11&4294967295|x>>>21),x=P+(O^A^R)+b[3]+3572445317&4294967295,P=O+(x<<16&4294967295|x>>>16),x=R+(P^O^A)+b[6]+76029189&4294967295,R=P+(x<<23&4294967295|x>>>9),x=A+(R^P^O)+b[9]+3654602809&4294967295,A=R+(x<<4&4294967295|x>>>28),x=O+(A^R^P)+b[12]+3873151461&4294967295,O=A+(x<<11&4294967295|x>>>21),x=P+(O^A^R)+b[15]+530742520&4294967295,P=O+(x<<16&4294967295|x>>>16),x=R+(P^O^A)+b[2]+3299628645&4294967295,R=P+(x<<23&4294967295|x>>>9),x=A+(P^(R|~O))+b[0]+4096336452&4294967295,A=R+(x<<6&4294967295|x>>>26),x=O+(R^(A|~P))+b[7]+1126891415&4294967295,O=A+(x<<10&4294967295|x>>>22),x=P+(A^(O|~R))+b[14]+2878612391&4294967295,P=O+(x<<15&4294967295|x>>>17),x=R+(O^(P|~A))+b[5]+4237533241&4294967295,R=P+(x<<21&4294967295|x>>>11),x=A+(P^(R|~O))+b[12]+1700485571&4294967295,A=R+(x<<6&4294967295|x>>>26),x=O+(R^(A|~P))+b[3]+2399980690&4294967295,O=A+(x<<10&4294967295|x>>>22),x=P+(A^(O|~R))+b[10]+4293915773&4294967295,P=O+(x<<15&4294967295|x>>>17),x=R+(O^(P|~A))+b[1]+2240044497&4294967295,R=P+(x<<21&4294967295|x>>>11),x=A+(P^(R|~O))+b[8]+1873313359&4294967295,A=R+(x<<6&4294967295|x>>>26),x=O+(R^(A|~P))+b[15]+4264355552&4294967295,O=A+(x<<10&4294967295|x>>>22),x=P+(A^(O|~R))+b[6]+2734768916&4294967295,P=O+(x<<15&4294967295|x>>>17),x=R+(O^(P|~A))+b[13]+1309151649&4294967295,R=P+(x<<21&4294967295|x>>>11),x=A+(P^(R|~O))+b[4]+4149444226&4294967295,A=R+(x<<6&4294967295|x>>>26),x=O+(R^(A|~P))+b[11]+3174756917&4294967295,O=A+(x<<10&4294967295|x>>>22),x=P+(A^(O|~R))+b[2]+718787259&4294967295,P=O+(x<<15&4294967295|x>>>17),x=R+(O^(P|~A))+b[9]+3951481745&4294967295,k.g[0]=k.g[0]+A&4294967295,k.g[1]=k.g[1]+(P+(x<<21&4294967295|x>>>11))&4294967295,k.g[2]=k.g[2]+P&4294967295,k.g[3]=k.g[3]+O&4294967295}s.prototype.v=function(k,A){A===void 0&&(A=k.length);const R=A-this.blockSize,b=this.C;let P=this.h,O=0;for(;O<A;){if(P==0)for(;O<=R;)o(this,k,O),O+=this.blockSize;if(typeof k=="string"){for(;O<A;)if(b[P++]=k.charCodeAt(O++),P==this.blockSize){o(this,b),P=0;break}}else for(;O<A;)if(b[P++]=k[O++],P==this.blockSize){o(this,b),P=0;break}}this.h=P,this.o+=A},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var A=1;A<k.length-8;++A)k[A]=0;A=this.o*8;for(var R=k.length-8;R<k.length;++R)k[R]=A&255,A/=256;for(this.v(k),k=Array(16),A=0,R=0;R<4;++R)for(let b=0;b<32;b+=8)k[A++]=this.g[R]>>>b&255;return k};function u(k,A){var R=m;return Object.prototype.hasOwnProperty.call(R,k)?R[k]:R[k]=A(k)}function h(k,A){this.h=A;const R=[];let b=!0;for(let P=k.length-1;P>=0;P--){const O=k[P]|0;b&&O==A||(R[P]=O,b=!1)}this.g=R}var m={};function g(k){return-128<=k&&k<128?u(k,function(A){return new h([A|0],A<0?-1:0)}):new h([k|0],k<0?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return I;if(k<0)return q(_(-k));const A=[];let R=1;for(let b=0;k>=R;b++)A[b]=k/R|0,R*=4294967296;return new h(A,0)}function T(k,A){if(k.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(k.charAt(0)=="-")return q(T(k.substring(1),A));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(A,8));let b=I;for(let O=0;O<k.length;O+=8){var P=Math.min(8,k.length-O);const x=parseInt(k.substring(O,O+P),A);P<8?(P=_(Math.pow(A,P)),b=b.j(P).add(_(x))):(b=b.j(R),b=b.add(_(x)))}return b}var I=g(0),D=g(1),z=g(16777216);r=h.prototype,r.m=function(){if(J(this))return-q(this).m();let k=0,A=1;for(let R=0;R<this.g.length;R++){const b=this.i(R);k+=(b>=0?b:4294967296+b)*A,A*=4294967296}return k},r.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(X(this))return"0";if(J(this))return"-"+q(this).toString(k);const A=_(Math.pow(k,6));var R=this;let b="";for(;;){const P=ie(R,A).g;R=ce(R,P.j(A));let O=((R.g.length>0?R.g[0]:R.h)>>>0).toString(k);if(R=P,X(R))return O+b;for(;O.length<6;)O="0"+O;b=O+b}},r.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function X(k){if(k.h!=0)return!1;for(let A=0;A<k.g.length;A++)if(k.g[A]!=0)return!1;return!0}function J(k){return k.h==-1}r.l=function(k){return k=ce(this,k),J(k)?-1:X(k)?0:1};function q(k){const A=k.g.length,R=[];for(let b=0;b<A;b++)R[b]=~k.g[b];return new h(R,~k.h).add(D)}r.abs=function(){return J(this)?q(this):this},r.add=function(k){const A=Math.max(this.g.length,k.g.length),R=[];let b=0;for(let P=0;P<=A;P++){let O=b+(this.i(P)&65535)+(k.i(P)&65535),x=(O>>>16)+(this.i(P)>>>16)+(k.i(P)>>>16);b=x>>>16,O&=65535,x&=65535,R[P]=x<<16|O}return new h(R,R[R.length-1]&-2147483648?-1:0)};function ce(k,A){return k.add(q(A))}r.j=function(k){if(X(this)||X(k))return I;if(J(this))return J(k)?q(this).j(q(k)):q(q(this).j(k));if(J(k))return q(this.j(q(k)));if(this.l(z)<0&&k.l(z)<0)return _(this.m()*k.m());const A=this.g.length+k.g.length,R=[];for(var b=0;b<2*A;b++)R[b]=0;for(b=0;b<this.g.length;b++)for(let P=0;P<k.g.length;P++){const O=this.i(b)>>>16,x=this.i(b)&65535,$e=k.i(P)>>>16,ot=k.i(P)&65535;R[2*b+2*P]+=x*ot,pe(R,2*b+2*P),R[2*b+2*P+1]+=O*ot,pe(R,2*b+2*P+1),R[2*b+2*P+1]+=x*$e,pe(R,2*b+2*P+1),R[2*b+2*P+2]+=O*$e,pe(R,2*b+2*P+2)}for(k=0;k<A;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=A;k<2*A;k++)R[k]=0;return new h(R,0)};function pe(k,A){for(;(k[A]&65535)!=k[A];)k[A+1]+=k[A]>>>16,k[A]&=65535,A++}function ye(k,A){this.g=k,this.h=A}function ie(k,A){if(X(A))throw Error("division by zero");if(X(k))return new ye(I,I);if(J(k))return A=ie(q(k),A),new ye(q(A.g),q(A.h));if(J(A))return A=ie(k,q(A)),new ye(q(A.g),A.h);if(k.g.length>30){if(J(k)||J(A))throw Error("slowDivide_ only works with positive integers.");for(var R=D,b=A;b.l(k)<=0;)R=ke(R),b=ke(b);var P=Se(R,1),O=Se(b,1);for(b=Se(b,2),R=Se(R,2);!X(b);){var x=O.add(b);x.l(k)<=0&&(P=P.add(R),O=x),b=Se(b,1),R=Se(R,1)}return A=ce(k,P.j(A)),new ye(P,A)}for(P=I;k.l(A)>=0;){for(R=Math.max(1,Math.floor(k.m()/A.m())),b=Math.ceil(Math.log(R)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),O=_(R),x=O.j(A);J(x)||x.l(k)>0;)R-=b,O=_(R),x=O.j(A);X(O)&&(O=D),P=P.add(O),k=ce(k,x)}return new ye(P,k)}r.B=function(k){return ie(this,k).h},r.and=function(k){const A=Math.max(this.g.length,k.g.length),R=[];for(let b=0;b<A;b++)R[b]=this.i(b)&k.i(b);return new h(R,this.h&k.h)},r.or=function(k){const A=Math.max(this.g.length,k.g.length),R=[];for(let b=0;b<A;b++)R[b]=this.i(b)|k.i(b);return new h(R,this.h|k.h)},r.xor=function(k){const A=Math.max(this.g.length,k.g.length),R=[];for(let b=0;b<A;b++)R[b]=this.i(b)^k.i(b);return new h(R,this.h^k.h)};function ke(k){const A=k.g.length+1,R=[];for(let b=0;b<A;b++)R[b]=k.i(b)<<1|k.i(b-1)>>>31;return new h(R,k.h)}function Se(k,A){const R=A>>5;A%=32;const b=k.g.length-R,P=[];for(let O=0;O<b;O++)P[O]=A>0?k.i(O+R)>>>A|k.i(O+R+1)<<32-A:k.i(O+R);return new h(P,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,F_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=T,Ri=h}).apply(typeof Wg<"u"?Wg:typeof self<"u"?self:typeof window<"u"?window:{});var Du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var U_,La,z_,Bu,bd,B_,$_,W_;(function(){var r,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Du=="object"&&Du];for(var p=0;p<l.length;++p){var y=l[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in y))break e;y=y[M]}l=l[l.length-1],E=y[l],p=p(E),p!=E&&p!=null&&e(y,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var y=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&y.push([E,p[E]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function g(l,p,y){return l.call.apply(l.bind,arguments)}function _(l,p,y){return _=g,_.apply(null,arguments)}function T(l,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function I(l,p){function y(){}y.prototype=p.prototype,l.Z=p.prototype,l.prototype=new y,l.prototype.constructor=l,l.Ob=function(E,M,U){for(var ee=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)ee[Re-2]=arguments[Re];return p.prototype[M].apply(E,ee)}}var D=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const y=Array(p);for(let E=0;E<p;E++)y[E]=l[E];return y}return[]}function X(l,p){for(let E=1;E<arguments.length;E++){const M=arguments[E];var y=typeof M;if(y=y!="object"?y:M?Array.isArray(M)?"array":y:"null",y=="array"||y=="object"&&typeof M.length=="number"){y=l.length||0;const U=M.length||0;l.length=y+U;for(let ee=0;ee<U;ee++)l[y+ee]=M[ee]}else l.push(M)}}class J{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function q(l){h.setTimeout(()=>{throw l},0)}function ce(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class pe{constructor(){this.h=this.g=null}add(p,y){const E=ye.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var ye=new J(()=>new ie,l=>l.reset());class ie{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,Se=!1,k=new pe,A=()=>{const l=Promise.resolve(void 0);ke=()=>{l.then(R)}};function R(){for(var l;l=ce();){try{l.h.call(l.g)}catch(y){q(y)}var p=ye;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Se=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return l})();function x(l){return/^[\s\xa0]*$/.test(l)}function $e(l,p){P.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}I($e,P),$e.prototype.init=function(l,p){const y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(y=="mouseover"?p=l.fromElement:y=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&$e.Z.h.call(this)},$e.prototype.h=function(){$e.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ot="closure_listenable_"+(Math.random()*1e6|0),vt=0;function He(l,p,y,E,M){this.listener=l,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=M,this.key=++vt,this.da=this.fa=!1}function te(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function me(l,p,y){for(const E in l)p.call(y,l[E],E,l)}function ae(l,p){for(const y in l)p.call(void 0,l[y],y,l)}function V(l){const p={};for(const y in l)p[y]=l[y];return p}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ae(l,p){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)l[y]=E[y];for(let U=0;U<W.length;U++)y=W[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function H(l){this.src=l,this.g={},this.h=0}H.prototype.add=function(l,p,y,E,M){const U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);const ee=ne(l,p,E,M);return ee>-1?(p=l[ee],y||(p.fa=!1)):(p=new He(p,this.src,U,!!E,M),p.fa=y,l.push(p)),p};function Q(l,p){const y=p.type;if(y in l.g){var E=l.g[y],M=Array.prototype.indexOf.call(E,p,void 0),U;(U=M>=0)&&Array.prototype.splice.call(E,M,1),U&&(te(p),l.g[y].length==0&&(delete l.g[y],l.h--))}}function ne(l,p,y,E){for(let M=0;M<l.length;++M){const U=l[M];if(!U.da&&U.listener==p&&U.capture==!!y&&U.ha==E)return M}return-1}var le="closure_lm_"+(Math.random()*1e6|0),we={};function Oe(l,p,y,E,M){if(Array.isArray(p)){for(let U=0;U<p.length;U++)Oe(l,p[U],y,E,M);return null}return y=Fo(y),l&&l[ot]?l.J(p,y,m(E)?!!E.capture:!1,M):qe(l,p,y,!1,E,M)}function qe(l,p,y,E,M,U){if(!p)throw Error("Invalid event type");const ee=m(M)?!!M.capture:!!M;let Re=Cs(l);if(Re||(l[le]=Re=new H(l)),y=Re.add(p,y,E,ee,U),y.proxy)return y;if(E=Ot(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)O||(M=ee),M===void 0&&(M=!1),l.addEventListener(p.toString(),E,M);else if(l.attachEvent)l.attachEvent(Rs(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ot(){function l(y){return p.call(l.src,l.listener,y)}const p=ml;return l}function zn(l,p,y,E,M){if(Array.isArray(p))for(var U=0;U<p.length;U++)zn(l,p[U],y,E,M);else E=m(E)?!!E.capture:!!E,y=Fo(y),l&&l[ot]?(l=l.i,U=String(p).toString(),U in l.g&&(p=l.g[U],y=ne(p,y,E,M),y>-1&&(te(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete l.g[U],l.h--)))):l&&(l=Cs(l))&&(p=l.g[p.toString()],l=-1,p&&(l=ne(p,y,E,M)),(y=l>-1?p[l]:null)&&An(y))}function An(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[ot])Q(p.i,l);else{var y=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(y,E,l.capture):p.detachEvent?p.detachEvent(Rs(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=Cs(p))?(Q(y,l),y.h==0&&(y.src=null,p[le]=null)):te(l)}}}function Rs(l){return l in we?we[l]:we[l]="on"+l}function ml(l,p){if(l.da)l=!0;else{p=new $e(p,this);const y=l.listener,E=l.ha||l.src;l.fa&&An(l),l=y.call(E,p)}return l}function Cs(l){return l=l[le],l instanceof H?l:null}var ji="__closure_events_fn_"+(Math.random()*1e9>>>0);function Fo(l){return typeof l=="function"?l:(l[ji]||(l[ji]=function(p){return l.handleEvent(p)}),l[ji])}function dt(){b.call(this),this.i=new H(this),this.M=this,this.G=null}I(dt,b),dt.prototype[ot]=!0,dt.prototype.removeEventListener=function(l,p,y,E){zn(this,l,p,y,E)};function at(l,p){var y,E=l.G;if(E)for(y=[];E;E=E.G)y.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new P(p,l);else if(p instanceof P)p.target=p.target||l;else{var M=p;p=new P(E,l),Ae(p,M)}M=!0;let U,ee;if(y)for(ee=y.length-1;ee>=0;ee--)U=p.g=y[ee],M=xn(U,E,!0,p)&&M;if(U=p.g=l,M=xn(U,E,!0,p)&&M,M=xn(U,E,!1,p)&&M,y)for(ee=0;ee<y.length;ee++)U=p.g=y[ee],M=xn(U,E,!1,p)&&M}dt.prototype.N=function(){if(dt.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const y=l.g[p];for(let E=0;E<y.length;E++)te(y[E]);delete l.g[p],l.h--}}this.G=null},dt.prototype.J=function(l,p,y,E){return this.i.add(String(l),p,!1,y,E)},dt.prototype.K=function(l,p,y,E){return this.i.add(String(l),p,!0,y,E)};function xn(l,p,y,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let U=0;U<p.length;++U){const ee=p[U];if(ee&&!ee.da&&ee.capture==y){const Re=ee.listener,lt=ee.ha||ee.src;ee.fa&&Q(l.i,ee),M=Re.call(lt,E)!==!1&&M}}return M&&!E.defaultPrevented}function Uo(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function zo(l){l.g=Uo(()=>{l.g=null,l.i&&(l.i=!1,zo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class gl extends b{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:zo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hr(l){b.call(this),this.h=l,this.g={}}I(Hr,b);var Bo=[];function ks(l){me(l.g,function(p,y){this.g.hasOwnProperty(y)&&An(p)},l),l.g={}}Hr.prototype.N=function(){Hr.Z.N.call(this),ks(this)},Hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qr=h.JSON.stringify,yl=h.JSON.parse,Fi=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Kr(){}function _l(){}var Gr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ps(){P.call(this,"d")}I(Ps,P);function $o(){P.call(this,"c")}I($o,P);var Rn={},Ns=null;function Qr(){return Ns=Ns||new dt}Rn.Ia="serverreachability";function Ds(l){P.call(this,Rn.Ia,l)}I(Ds,P);function pr(l){const p=Qr();at(p,new Ds(p))}Rn.STAT_EVENT="statevent";function mr(l,p){P.call(this,Rn.STAT_EVENT,l),this.stat=p}I(mr,P);function rt(l){const p=Qr();at(p,new mr(p,l))}Rn.Ja="timingevent";function Wo(l,p){P.call(this,Rn.Ja,l),this.size=p}I(Wo,P);function Yr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function Jr(){this.g=!0}Jr.prototype.ua=function(){this.g=!1};function vl(l,p,y,E,M,U){l.info(function(){if(l.g)if(U){var ee="",Re=U.split("&");for(let Be=0;Be<Re.length;Be++){var lt=Re[Be].split("=");if(lt.length>1){const ft=lt[0];lt=lt[1];const an=ft.split("_");ee=an.length>=2&&an[1]=="type"?ee+(ft+"="+lt+"&"):ee+(ft+"=redacted&")}}}else ee=null;else ee=U;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+y+`
`+ee})}function wl(l,p,y,E,M,U,ee){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+y+`
`+U+" "+ee})}function Bn(l,p,y,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ui(l,y)+(E?" "+E:"")})}function El(l,p){l.info(function(){return"TIMEOUT: "+p})}Jr.prototype.info=function(){};function Ui(l,p){if(!l.g)return p;if(!p)return null;try{const U=JSON.parse(p);if(U){for(l=0;l<U.length;l++)if(Array.isArray(U[l])){var y=U[l];if(!(y.length<2)){var E=y[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let ee=1;ee<E.length;ee++)E[ee]=""}}}}return qr(U)}catch{return p}}var Xr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Zr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Tl;function gr(){}I(gr,Kr),gr.prototype.g=function(){return new XMLHttpRequest},Tl=new gr;function $n(l){return encodeURIComponent(String(l))}function bs(l){var p=1;l=l.split(":");const y=[];for(;p>0&&l.length;)y.push(l.shift()),p--;return l.length&&y.push(l.join(":")),y}function pn(l,p,y,E){this.j=l,this.i=p,this.l=y,this.S=E||1,this.V=new Hr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Il}function Il(){this.i=null,this.g="",this.h=!1}var Sl={},Ho={};function Cn(l,p,y){l.M=1,l.A=_r(mn(p)),l.u=y,l.R=!0,qo(l,null)}function qo(l,p){l.F=Date.now(),zi(l),l.B=mn(l.A);var y=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),na(y.i,"t",E),l.C=0,y=l.j.L,l.h=new Il,l.g=Vl(l.j,y?p:null,!l.u),l.P>0&&(l.O=new gl(_(l.Y,l,l.g),l.P)),p=l.V,y=l.g,E=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(Bo[0]=M.toString()),M=Bo);for(let U=0;U<M.length;U++){const ee=Oe(y,M[U],E||p.handleEvent,!1,p.h||p);if(!ee)break;p.g[ee.key]=ee}p=l.J?V(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),pr(),vl(l.i,l.v,l.B,l.l,l.S,l.u)}pn.prototype.ba=function(l){l=l.target;const p=this.O;p&&Yn(l)==3?p.j():this.Y(l)},pn.prototype.Y=function(l){try{if(l==this.g)e:{const Re=Yn(this.g),lt=this.g.ya(),Be=this.g.ca();if(!(Re<3)&&(Re!=3||this.g&&(this.h.h||this.g.la()||Dl(this.g)))){this.K||Re!=4||lt==7||(lt==8||Be<=0?pr(3):pr(2)),Vs(this);var p=this.g.ca();this.X=p;var y=Al(this);if(this.o=p==200,wl(this.i,this.v,this.B,this.l,this.S,Re,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(E)){var U=E;break t}}U=null}if(l=U)Bn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qe(this,l);else{this.o=!1,this.m=3,rt(12),yr(this),Bi(this);break e}}if(this.R){l=!0;let ft;for(;!this.K&&this.C<y.length;)if(ft=Rl(this,y),ft==Ho){Re==4&&(this.m=4,rt(14),l=!1),Bn(this.i,this.l,null,"[Incomplete Response]");break}else if(ft==Sl){this.m=4,rt(15),Bn(this.i,this.l,y,"[Invalid Chunk]"),l=!1;break}else Bn(this.i,this.l,ft,null),Qe(this,ft);if(xl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||y.length!=0||this.h.h||(this.m=1,rt(16),l=!1),this.o=this.o&&l,!l)Bn(this.i,this.l,y,"[Invalid Chunked Response]"),yr(this),Bi(this);else if(y.length>0&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.aa&&!ee.P&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Ji(ee),ee.P=!0,rt(11))}}else Bn(this.i,this.l,y,null),Qe(this,y);Re==4&&yr(this),this.o&&!this.K&&(Re==4?Ws(this.j,this):(this.o=!1,zi(this)))}else ia(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),yr(this),Bi(this)}}}catch{}finally{}};function Al(l){if(!xl(l))return l.g.la();const p=Dl(l.g);if(p==="")return"";let y="";const E=p.length,M=Yn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return yr(l),Bi(l),"";l.h.i=new h.TextDecoder}for(let U=0;U<E;U++)l.h.h=!0,y+=l.h.i.decode(p[U],{stream:!(M&&U==E-1)});return p.length=0,l.h.g+=y,l.C=0,l.h.g}function xl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function Rl(l,p){var y=l.C,E=p.indexOf(`
`,y);return E==-1?Ho:(y=Number(p.substring(y,E)),isNaN(y)?Sl:(E+=1,E+y>p.length?Ho:(p=p.slice(E,E+y),l.C=E+y,p)))}pn.prototype.cancel=function(){this.K=!0,yr(this)};function zi(l){l.T=Date.now()+l.H,Ko(l,l.H)}function Ko(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Yr(_(l.aa,l),p)}function Vs(l){l.D&&(h.clearTimeout(l.D),l.D=null)}pn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(El(this.i,this.B),this.M!=2&&(pr(),rt(17)),yr(this),this.m=2,Bi(this)):Ko(this,this.T-l)};function Bi(l){l.j.I==0||l.K||Ws(l.j,l)}function yr(l){Vs(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,ks(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Qe(l,p){try{var y=l.j;if(y.I!=0&&(y.g==l||Qo(y.h,l))){if(!l.L&&Qo(y.h,l)&&y.I==3){try{var E=y.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<l.F)$s(y),sn(y);else break e;Zn(y),rt(18)}}else y.xa=M[1],0<y.xa-y.K&&M[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Yr(_(y.Va,y),6e3));$i(y.h)<=1&&y.ta&&(y.ta=void 0)}else on(y,11)}else if((l.L||y.g==l)&&$s(y),!x(p))for(M=y.Ba.g.parse(p),p=0;p<M.length;p++){let Be=M[p];const ft=Be[0];if(!(ft<=y.K))if(y.K=ft,Be=Be[1],y.I==2)if(Be[0]=="c"){y.M=Be[1],y.ba=Be[2];const an=Be[3];an!=null&&(y.ka=an,y.j.info("VER="+y.ka));const Ir=Be[4];Ir!=null&&(y.za=Ir,y.j.info("SVER="+y.za));const er=Be[5];er!=null&&typeof er=="number"&&er>0&&(E=1.5*er,y.O=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const tr=l.g;if(tr){const Ks=tr.g?tr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ks){var U=E.h;U.g||Ks.indexOf("spdy")==-1&&Ks.indexOf("quic")==-1&&Ks.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Ls(U,U.h),U.h=null))}if(E.G){const aa=tr.g?tr.g.getResponseHeader("X-HTTP-Session-Id"):null;aa&&(E.wa=aa,Ue(E.J,E.G,aa))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-l.F,y.j.info("Handshake RTT: "+y.T+"ms")),E=y;var ee=l;if(E.na=oa(E,E.L?E.ba:null,E.W),ee.L){Wi(E.h,ee);var Re=ee,lt=E.O;lt&&(Re.H=lt),Re.D&&(Vs(Re),zi(Re)),E.g=ee}else Lt(E);y.i.length>0&&Tr(y)}else Be[0]!="stop"&&Be[0]!="close"||on(y,7);else y.I==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?on(y,7):zs(y):Be[0]!="noop"&&y.l&&y.l.qa(Be),y.A=0)}}pr(4)}catch{}}var Oc=class{constructor(l,p){this.g=l,this.map=p}};function Os(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Go(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function $i(l){return l.h?1:l.g?l.g.size:0}function Qo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Ls(l,p){l.g?l.g.add(p):l.h=p}function Wi(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Os.prototype.cancel=function(){if(this.i=tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function tn(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const y of l.g.values())p=p.concat(y.G);return p}return z(l.i)}var Cl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nn(l,p){if(l){l=l.split("&");for(let y=0;y<l.length;y++){const E=l[y].indexOf("=");let M,U=null;E>=0?(M=l[y].substring(0,E),U=l[y].substring(E+1)):M=l[y],p(M,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Wn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Wn?(this.l=l.l,Hi(this,l.j),this.o=l.o,this.g=l.g,Hn(this,l.u),this.h=l.h,ei(this,ra(l.i)),this.m=l.m):l&&(p=String(l).match(Cl))?(this.l=!1,Hi(this,p[1]||"",!0),this.o=qi(p[2]||""),this.g=qi(p[3]||"",!0),Hn(this,p[4]),this.h=qi(p[5]||"",!0),ei(this,p[6]||"",!0),this.m=qi(p[7]||"")):(this.l=!1,this.i=new Le(null,this.l))}Wn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Ki(p,Jo,!0),":");var y=this.g;return(y||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Ki(p,Jo,!0),"@"),l.push($n(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&l.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Ki(y,y.charAt(0)=="/"?Gi:Xo,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Ki(y,Zo)),l.join("")},Wn.prototype.resolve=function(l){const p=mn(this);let y=!!l.j;y?Hi(p,l.j):y=!!l.o,y?p.o=l.o:y=!!l.g,y?p.g=l.g:y=l.u!=null;var E=l.h;if(y)Hn(p,l.u);else if(y=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=p.h.lastIndexOf("/");M!=-1&&(E=p.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const U=[];for(let ee=0;ee<M.length;){const Re=M[ee++];Re=="."?E&&ee==M.length&&U.push(""):Re==".."?((U.length>1||U.length==1&&U[0]!="")&&U.pop(),E&&ee==M.length&&U.push("")):(U.push(Re),E=!0)}E=U.join("/")}else E=M}return y?p.h=E:y=l.i.toString()!=="",y?ei(p,ra(l.i)):y=!!l.m,y&&(p.m=l.m),p};function mn(l){return new Wn(l)}function Hi(l,p,y){l.j=y?qi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Hn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function ei(l,p,y){p instanceof Le?(l.i=p,js(l.i,l.l)):(y||(p=Ki(p,Lc)),l.i=new Le(p,l.l))}function Ue(l,p,y){l.i.set(p,y)}function _r(l){return Ue(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function qi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ki(l,p,y){return typeof l=="string"?(l=encodeURI(l).replace(p,Yo),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Yo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Jo=/[#\/\?@]/g,Xo=/[#\?:]/g,Gi=/[#\?]/g,Lc=/[#\?@]/g,Zo=/#/g;function Le(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function qn(l){l.g||(l.g=new Map,l.h=0,l.i&&nn(l.i,function(p,y){l.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Le.prototype,r.add=function(l,p){qn(this),this.i=null,l=Kn(this,l);let y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(p),this.h+=1,this};function ea(l,p){qn(l),p=Kn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Ms(l,p){return qn(l),p=Kn(l,p),l.g.has(p)}r.forEach=function(l,p){qn(this),this.g.forEach(function(y,E){y.forEach(function(M){l.call(p,M,E,this)},this)},this)};function ta(l,p){qn(l);let y=[];if(typeof p=="string")Ms(l,p)&&(y=y.concat(l.g.get(Kn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)y=y.concat(l[p]);return y}r.set=function(l,p){return qn(this),this.i=null,l=Kn(this,l),Ms(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},r.get=function(l,p){return l?(l=ta(this,l),l.length>0?String(l[0]):p):p};function na(l,p,y){ea(l,p),y.length>0&&(l.i=null,l.g.set(Kn(l,p),z(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var y=p[E];const M=$n(y);y=ta(this,y);for(let U=0;U<y.length;U++){let ee=M;y[U]!==""&&(ee+="="+$n(y[U])),l.push(ee)}}return this.i=l.join("&")};function ra(l){const p=new Le;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Kn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function js(l,p){p&&!l.j&&(qn(l),l.i=null,l.g.forEach(function(y,E){const M=E.toLowerCase();E!=M&&(ea(this,E),na(this,M,y))},l)),l.j=p}function Gn(l,p){const y=new Jr;if(h.Image){const E=new Image;E.onload=T(Ct,y,"TestLoadImage: loaded",!0,p,E),E.onerror=T(Ct,y,"TestLoadImage: error",!1,p,E),E.onabort=T(Ct,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=T(Ct,y,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function Qn(l,p){const y=new Jr,E=new AbortController,M=setTimeout(()=>{E.abort(),Ct(y,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(M),U.ok?Ct(y,"TestPingServer: ok",!0,p):Ct(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Ct(y,"TestPingServer: error",!1,p)})}function Ct(l,p,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function Qi(){this.g=new Fi}function vr(l){this.i=l.Sb||null,this.h=l.ab||!1}I(vr,Kr),vr.prototype.g=function(){return new rn(this.i,this.h)};function rn(l,p){dt.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(rn,dt),r=rn.prototype,r.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,kn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},r.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;kl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function kl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}r.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?ti(this):kn(this),this.readyState==3&&kl(this)}},r.Oa=function(l){this.g&&(this.response=this.responseText=l,ti(this))},r.Na=function(l){this.g&&(this.response=l,ti(this))},r.ga=function(){this.g&&ti(this)};function ti(l){l.readyState=4,l.l=null,l.j=null,l.B=null,kn(l)}r.setRequestHeader=function(l,p){this.A.append(l,p)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=p.next();return l.join(`\r
`)};function kn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(rn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Pl(l){let p="";return me(l,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Fs(l,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Pl(y),typeof l=="string"?y!=null&&$n(y):Ue(l,p,y))}function We(l){dt.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(We,dt);var Nl=/^https?$/i,Mc=["POST","PUT"];r=We.prototype,r.Fa=function(l){this.H=l},r.ea=function(l,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Tl.g(),this.g.onreadystatechange=D(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){ni(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Mc,p,void 0)>=0)||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,ee]of y)this.g.setRequestHeader(U,ee);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(U){ni(this,U)}};function ni(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,ri(l),Er(l)}function ri(l){l.A||(l.A=!0,at(l,"complete"),at(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,at(this,"complete"),at(this,"abort"),Er(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Er(this,!0)),We.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?wr(this):this.Xa())},r.Xa=function(){wr(this)};function wr(l){if(l.h&&typeof u<"u"){if(l.v&&Yn(l)==4)setTimeout(l.Ca.bind(l),0);else if(at(l,"readystatechange"),Yn(l)==4){l.h=!1;try{const U=l.ca();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=U===0){let ee=String(l.D).match(Cl)[1]||null;!ee&&h.self&&h.self.location&&(ee=h.self.location.protocol.slice(0,-1)),E=!Nl.test(ee?ee.toLowerCase():"")}y=E}if(y)at(l,"complete"),at(l,"success");else{l.o=6;try{var M=Yn(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",ri(l)}}finally{Er(l)}}}}function Er(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const y=l.g;l.g=null,p||at(l,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Yn(l){return l.g?l.g.readyState:0}r.ca=function(){try{return Yn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),yl(p)}};function Dl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ia(l){const p={};l=(l.g&&Yn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(x(l[E]))continue;var y=bs(l[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=p[M]||[];p[M]=U,U.push(y)}ae(p,function(E){return E.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(l,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||p}function Us(l){this.za=0,this.i=[],this.j=new Jr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Jn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Jn("baseRetryDelayMs",5e3,l),this.Za=Jn("retryDelaySeedMs",1e4,l),this.Ta=Jn("forwardChannelMaxRetries",2,l),this.va=Jn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Os(l&&l.concurrentRequestLimit),this.Ba=new Qi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Us.prototype,r.ka=8,r.I=1,r.connect=function(l,p,y,E){rt(0),this.W=l,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.J=oa(this,null,this.W),Tr(this)};function zs(l){if(Bs(l),l.I==3){var p=l.V++,y=mn(l.J);if(Ue(y,"SID",l.M),Ue(y,"RID",p),Ue(y,"TYPE","terminate"),Xn(l,y),p=new pn(l,l.j,p),p.M=2,p.A=_r(mn(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=Vl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),zi(p)}Xi(l)}function sn(l){l.g&&(Ji(l),l.g.cancel(),l.g=null)}function Bs(l){sn(l),l.v&&(h.clearTimeout(l.v),l.v=null),$s(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function Tr(l){if(!Go(l.h)&&!l.m){l.m=!0;var p=l.Ea;ke||A(),Se||(ke(),Se=!0),k.add(p,l),l.D=0}}function bl(l,p){return $i(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Yr(_(l.Ea,l,p),Hs(l,l.D)),l.D++,!0)}r.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new pn(this,this.j,l);let U=this.o;if(this.U&&(U?(U=V(U),Ae(U,this.U)):U=this.U),this.u!==null||this.R||(M.J=U,U=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=sa(this,M,p),y=mn(this.J),Ue(y,"RID",l),Ue(y,"CVER",22),this.G&&Ue(y,"X-HTTP-Session-Id",this.G),Xn(this,y),U&&(this.R?p="headers="+$n(Pl(U))+"&"+p:this.u&&Fs(y,this.u,U)),Ls(this.h,M),this.Ra&&Ue(y,"TYPE","init"),this.S?(Ue(y,"$req",p),Ue(y,"SID","null"),M.U=!0,Cn(M,y,null)):Cn(M,y,p),this.I=2}}else this.I==3&&(l?Yi(this,l):this.i.length==0||Go(this.h)||Yi(this))};function Yi(l,p){var y;p?y=p.l:y=l.V++;const E=mn(l.J);Ue(E,"SID",l.M),Ue(E,"RID",y),Ue(E,"AID",l.K),Xn(l,E),l.u&&l.o&&Fs(E,l.u,l.o),y=new pn(l,l.j,y,l.D+1),l.u===null&&(y.J=l.o),p&&(l.i=p.G.concat(l.i)),p=sa(l,y,1e3),y.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Ls(l.h,y),Cn(y,E,p)}function Xn(l,p){l.H&&me(l.H,function(y,E){Ue(p,E,y)}),l.l&&me({},function(y,E){Ue(p,E,y)})}function sa(l,p,y){y=Math.min(l.i.length,y);const E=l.l?_(l.l.Ka,l.l,l):null;e:{var M=l.i;let Re=-1;for(;;){const lt=["count="+y];Re==-1?y>0?(Re=M[0].g,lt.push("ofs="+Re)):Re=0:lt.push("ofs="+Re);let Be=!0;for(let ft=0;ft<y;ft++){var U=M[ft].g;const an=M[ft].map;if(U-=Re,U<0)Re=Math.max(0,M[ft].g-100),Be=!1;else try{U="req"+U+"_"||"";try{var ee=an instanceof Map?an:Object.entries(an);for(const[Ir,er]of ee){let tr=er;m(er)&&(tr=qr(er)),lt.push(U+Ir+"="+encodeURIComponent(tr))}}catch(Ir){throw lt.push(U+"type="+encodeURIComponent("_badmap")),Ir}}catch{E&&E(an)}}if(Be){ee=lt.join("&");break e}}ee=void 0}return l=l.i.splice(0,y),p.G=l,ee}function Lt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;ke||A(),Se||(ke(),Se=!0),k.add(p,l),l.A=0}}function Zn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Yr(_(l.Da,l),Hs(l,l.A)),l.A++,!0)}r.Da=function(){if(this.v=null,ii(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Yr(_(this.Wa,this),l)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),sn(this),ii(this))};function Ji(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function ii(l){l.g=new pn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=mn(l.na);Ue(p,"RID","rpc"),Ue(p,"SID",l.M),Ue(p,"AID",l.K),Ue(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Ue(p,"TO",l.ia),Ue(p,"TYPE","xmlhttp"),Xn(l,p),l.u&&l.o&&Fs(p,l.u,l.o),l.O&&(l.g.H=l.O);var y=l.g;l=l.ba,y.M=1,y.A=_r(mn(p)),y.u=null,y.R=!0,qo(y,l)}r.Va=function(){this.C!=null&&(this.C=null,sn(this),Zn(this),rt(19))};function $s(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Ws(l,p){var y=null;if(l.g==p){$s(l),Ji(l),l.g=null;var E=2}else if(Qo(l.h,p))y=p.G,Wi(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;E=Qr(),at(E,new Wo(E,y)),Tr(l)}else Lt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(E==1&&bl(l,p)||E==2&&Zn(l)))switch(y&&y.length>0&&(p=l.h,p.i=p.i.concat(y)),M){case 1:on(l,5);break;case 4:on(l,10);break;case 3:on(l,6);break;default:on(l,2)}}}function Hs(l,p){let y=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(y*=2),y*p}function on(l,p){if(l.j.info("Error code "+p),p==2){var y=_(l.bb,l),E=l.Ua;const M=!E;E=new Wn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Hi(E,"https"),_r(E),M?Gn(E.toString(),y):Qn(E.toString(),y)}else rt(2);l.I=0,l.l&&l.l.pa(p),Xi(l),Bs(l)}r.bb=function(l){l?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Xi(l){if(l.I=0,l.ja=[],l.l){const p=tn(l.h);(p.length!=0||l.i.length!=0)&&(X(l.ja,p),X(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function oa(l,p,y){var E=y instanceof Wn?mn(y):new Wn(y);if(E.g!="")p&&(E.g=p+"."+E.g),Hn(E,E.u);else{var M=h.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const U=new Wn(null);E&&Hi(U,E),p&&(U.g=p),M&&Hn(U,M),y&&(U.h=y),E=U}return y=l.G,p=l.wa,y&&p&&Ue(E,y,p),Ue(E,"VER",l.ka),Xn(l,E),E}function Vl(l,p,y){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new We(new vr({ab:y})):new We(l.ma),p.Fa(l.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ol(){}r=Ol.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function qs(){}qs.prototype.g=function(l,p){return new kt(l,p)};function kt(l,p){dt.call(this),this.g=new Us(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!x(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!x(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new si(this)}I(kt,dt),kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){zs(this.g)},kt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.v&&(y={},y.__data__=qr(l),l=y);p.i.push(new Oc(p.Ya++,l)),p.I==3&&Tr(p)},kt.prototype.N=function(){this.g.l=null,delete this.j,zs(this.g),delete this.g,kt.Z.N.call(this)};function Ll(l){Ps.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const y in p){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}I(Ll,Ps);function Ml(){$o.call(this),this.status=1}I(Ml,$o);function si(l){this.g=l}I(si,Ol),si.prototype.ra=function(){at(this.g,"a")},si.prototype.qa=function(l){at(this.g,new Ll(l))},si.prototype.pa=function(l){at(this.g,new Ml)},si.prototype.oa=function(){at(this.g,"b")},qs.prototype.createWebChannel=qs.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,W_=function(){return new qs},$_=function(){return Qr()},B_=Rn,bd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Xr.NO_ERROR=0,Xr.TIMEOUT=8,Xr.HTTP_ERROR=6,Bu=Xr,Zr.COMPLETE="complete",z_=Zr,_l.EventType=Gr,Gr.OPEN="a",Gr.CLOSE="b",Gr.ERROR="c",Gr.MESSAGE="d",dt.prototype.listen=dt.prototype.J,La=_l,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,U_=We}).apply(typeof Du<"u"?Du:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Vo="12.13.0";function K1(r){Vo=r}/**
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
 */const ws=new nf("@firebase/firestore");function mo(){return ws.logLevel}function se(r,...e){if(ws.logLevel<=Ve.DEBUG){const t=e.map(yf);ws.debug(`Firestore (${Vo}): ${r}`,...t)}}function zr(r,...e){if(ws.logLevel<=Ve.ERROR){const t=e.map(yf);ws.error(`Firestore (${Vo}): ${r}`,...t)}}function Es(r,...e){if(ws.logLevel<=Ve.WARN){const t=e.map(yf);ws.warn(`Firestore (${Vo}): ${r}`,...t)}}function yf(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function Te(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,H_(r,s,t)}function H_(r,e,t){let s=`FIRESTORE (${Vo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw zr(s),new Error(s)}function ze(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||H_(e,o,s)}function Ce(r,e){return r}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends fn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class q_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class G1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Bt.UNAUTHENTICATED)))}shutdown(){}}class Q1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Y1{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new jr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new jr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new q_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Bt(e)}}class J1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class X1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new J1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,hn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const s=u=>{u.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Hg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Hg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function eS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class _f{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=eS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function De(r,e){return r<e?-1:r>e?1:0}function Vd(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return gd(o)===gd(u)?De(o,u):gd(o)?1:-1}return De(r.length,e.length)}const tS=55296,nS=57343;function gd(r){const e=r.charCodeAt(0);return e>=tS&&e<=nS}function Co(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
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
 */const qg="__name__";class or{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Te(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=or.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return De(e.length,t.length)}static compareSegments(e,t){const s=or.isNumericId(e),o=or.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?or.extractNumericId(e).compare(or.extractNumericId(t)):Vd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ri.fromString(e.substring(4,e.length-2))}}class Ge extends or{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new re(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ge(t)}static emptyPath(){return new Ge([])}}const rS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends or{construct(e,t,s){return new bt(e,t,s)}static isValidIdentifier(e){return rS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qg}static keyField(){return new bt([qg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new re(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new re(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new re(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new re(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
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
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Ge.fromString(e))}static fromName(e){return new ge(Ge.fromString(e).popFirst(5))}static empty(){return new ge(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Ge(e.slice()))}}/**
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
 */function K_(r,e,t){if(!t)throw new re(B.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function iS(r,e,t,s){if(e===!0&&s===!0)throw new re(B.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Kg(r){if(!ge.isDocumentKey(r))throw new re(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Gg(r){if(ge.isDocumentKey(r))throw new re(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function G_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function yc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Te(12329,{type:typeof r})}function Fn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new re(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=yc(r);throw new re(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function yt(r,e){const t={typeString:r};return e&&(t.value=e),t}function ll(r,e){if(!G_(r))throw new re(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new re(B.INVALID_ARGUMENT,t);return!0}/**
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
 */const Qg=-62135596800,Yg=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Yg);return new Xe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Qg)throw new re(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yg}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ll(e,Xe._jsonSchema))return new Xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:yt("string",Xe._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
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
 */class xe{static fromTimestamp(e){return new xe(e)}static min(){return new xe(new Xe(0,0))}static max(){return new xe(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ka=-1;function sS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=xe.fromTimestamp(s===1e9?new Xe(t+1,0):new Xe(t,s));return new ki(o,ge.empty(),e)}function oS(r){return new ki(r.readTime,r.key,Ka)}class ki{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ki(xe.min(),ge.empty(),Ka)}static max(){return new ki(xe.max(),ge.empty(),Ka)}}function aS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(r.documentKey,e.documentKey),t!==0?t:De(r.largestBatchId,e.largestBatchId))}/**
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
 */const lS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Oo(r){if(r.code!==B.FAILED_PRECONDITION||r.message!==lS)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((T=>{h[_]=T,++m,m===u&&s(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new $(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function cS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Lo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class _c{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}_c.ce=-1;/**
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
 */const vf=-1;function vc(r){return r==null}function rc(r){return r===0&&1/r==-1/0}function hS(r){return typeof r=="number"&&Number.isInteger(r)&&!rc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Q_="";function dS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Jg(e)),e=fS(r.get(t),e);return Jg(e)}function fS(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case Q_:t+="";break;default:t+=u}}return t}function Jg(r){return r+Q_+""}/**
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
 */function Xg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Li(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Y_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bu(this.root,e,this.comparator,!0)}}class bu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Dt.RED,this.left=o??Dt.EMPTY,this.right=u??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Dt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zg(this.data.getIterator())}getIteratorFrom(e){return new Zg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new It(this.comparator);return t.data=e,t}}class Zg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new dn([])}unionWith(e){let t=new It(bt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new dn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class J_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new J_("Invalid base64 string: "+u):u}})(e);return new Vt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const pS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(r){if(ze(!!r,39018),typeof r=="string"){let e=0;const t=pS.exec(r);if(ze(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ct(r.seconds),nanos:ct(r.nanos)}}function ct(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ni(r){return typeof r=="string"?Vt.fromBase64String(r):Vt.fromUint8Array(r)}/**
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
 */const X_="server_timestamp",Z_="__type__",ev="__previous_value__",tv="__local_write_time__";function wf(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Z_])==null?void 0:s.stringValue)===X_}function wc(r){const e=r.mapValue.fields[ev];return wf(e)?wc(e):e}function Ga(r){const e=Pi(r.mapValue.fields[tv].timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class mS{constructor(e,t,s,o,u,h,m,g,_,T,I){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=T,this.apiKey=I}}const ic="(default)";class Qa{constructor(e,t){this.projectId=e,this.database=t||ic}static empty(){return new Qa("","")}get isDefaultDatabase(){return this.database===ic}isEqual(e){return e instanceof Qa&&e.projectId===this.projectId&&e.database===this.database}}function gS(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new re(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qa(r.options.projectId,e)}/**
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
 */const nv="__type__",yS="__max__",Vu={mapValue:{}},rv="__vector__",sc="value";function Di(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?wf(r)?4:vS(r)?9007199254740991:_S(r)?10:11:Te(28295,{value:r})}function hr(r,e){if(r===e)return!0;const t=Di(r);if(t!==Di(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ga(r).isEqual(Ga(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Pi(o.timestampValue),m=Pi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return Ni(o.bytesValue).isEqual(Ni(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return ct(o.geoPointValue.latitude)===ct(u.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return ct(o.integerValue)===ct(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ct(o.doubleValue),m=ct(u.doubleValue);return h===m?rc(h)===rc(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return Co(r.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Xg(h)!==Xg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!hr(h[g],m[g])))return!1;return!0})(r,e);default:return Te(52216,{left:r})}}function Ya(r,e){return(r.values||[]).find((t=>hr(t,e)))!==void 0}function ko(r,e){if(r===e)return 0;const t=Di(r),s=Di(e);if(t!==s)return De(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(r.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=ct(u.integerValue||u.doubleValue),g=ct(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return ey(r.timestampValue,e.timestampValue);case 4:return ey(Ga(r),Ga(e));case 5:return Vd(r.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ni(u),g=Ni(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const T=De(m[_],g[_]);if(T!==0)return T}return De(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=De(ct(u.latitude),ct(h.latitude));return m!==0?m:De(ct(u.longitude),ct(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return ty(r.arrayValue,e.arrayValue);case 10:return(function(u,h){var D,z,X,J;const m=u.fields||{},g=h.fields||{},_=(D=m[sc])==null?void 0:D.arrayValue,T=(z=g[sc])==null?void 0:z.arrayValue,I=De(((X=_==null?void 0:_.values)==null?void 0:X.length)||0,((J=T==null?void 0:T.values)==null?void 0:J.length)||0);return I!==0?I:ty(_,T)})(r.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Vu.mapValue&&h===Vu.mapValue)return 0;if(u===Vu.mapValue)return 1;if(h===Vu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},T=Object.keys(_);g.sort(),T.sort();for(let I=0;I<g.length&&I<T.length;++I){const D=Vd(g[I],T[I]);if(D!==0)return D;const z=ko(m[g[I]],_[T[I]]);if(z!==0)return z}return De(g.length,T.length)})(r.mapValue,e.mapValue);default:throw Te(23264,{he:t})}}function ey(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return De(r,e);const t=Pi(r),s=Pi(e),o=De(t.seconds,s.seconds);return o!==0?o:De(t.nanos,s.nanos)}function ty(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=ko(t[o],s[o]);if(u)return u}return De(t.length,s.length)}function Po(r){return Od(r)}function Od(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Pi(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ni(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return ge.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Od(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Od(t.fields[h])}`;return o+"}"})(r.mapValue):Te(61005,{value:r})}function $u(r){switch(Di(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=wc(r);return e?16+$u(e):16;case 5:return 2*r.stringValue.length;case 6:return Ni(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+$u(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Li(s.fields,((u,h)=>{o+=u.length+$u(h)})),o})(r.mapValue);default:throw Te(13486,{value:r})}}function ny(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Ld(r){return!!r&&"integerValue"in r}function Ef(r){return!!r&&"arrayValue"in r}function ry(r){return!!r&&"nullValue"in r}function iy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Wu(r){return!!r&&"mapValue"in r}function _S(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[nv])==null?void 0:s.stringValue)===rv}function za(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Li(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=za(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=za(r.arrayValue.values[t]);return e}return{...r}}function vS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===yS}/**
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
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Wu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=za(t)}setAll(e){let t=bt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=za(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Wu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Wu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Li(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new en(za(this.value))}}function iv(r){const e=[];return Li(r.fields,((t,s)=>{const o=new bt([t]);if(Wu(s)){const u=iv(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new dn(e)}/**
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
 */class $t{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new $t(e,0,xe.min(),xe.min(),xe.min(),en.empty(),0)}static newFoundDocument(e,t,s,o){return new $t(e,1,t,xe.min(),s,o,0)}static newNoDocument(e,t){return new $t(e,2,t,xe.min(),xe.min(),en.empty(),0)}static newUnknownDocument(e,t){return new $t(e,3,t,xe.min(),xe.min(),en.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(xe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oc{constructor(e,t){this.position=e,this.inclusive=t}}function sy(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=ge.comparator(ge.fromName(h.referenceValue),t.key):s=ko(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function oy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!hr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ja{constructor(e,t="asc"){this.field=e,this.dir=t}}function wS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class sv{}class gt extends sv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new TS(e,t,s):t==="array-contains"?new AS(e,s):t==="in"?new xS(e,s):t==="not-in"?new RS(e,s):t==="array-contains-any"?new CS(e,s):new gt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new IS(e,s):new SS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ko(t,this.value)):t!==null&&Di(this.value)===Di(t)&&this.matchesComparison(ko(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Un extends sv{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Un(e,t)}matches(e){return ov(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ov(r){return r.op==="and"}function av(r){return ES(r)&&ov(r)}function ES(r){for(const e of r.filters)if(e instanceof Un)return!1;return!0}function Md(r){if(r instanceof gt)return r.field.canonicalString()+r.op.toString()+Po(r.value);if(av(r))return r.filters.map((e=>Md(e))).join(",");{const e=r.filters.map((t=>Md(t))).join(",");return`${r.op}(${e})`}}function lv(r,e){return r instanceof gt?(function(s,o){return o instanceof gt&&s.op===o.op&&s.field.isEqual(o.field)&&hr(s.value,o.value)})(r,e):r instanceof Un?(function(s,o){return o instanceof Un&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&lv(h,o.filters[m])),!0):!1})(r,e):void Te(19439)}function uv(r){return r instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Po(t.value)}`})(r):r instanceof Un?(function(t){return t.op.toString()+" {"+t.getFilters().map(uv).join(" ,")+"}"})(r):"Filter"}class TS extends gt{constructor(e,t,s){super(e,t,s),this.key=ge.fromName(s.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class IS extends gt{constructor(e,t){super(e,"in",t),this.keys=cv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class SS extends gt{constructor(e,t){super(e,"not-in",t),this.keys=cv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function cv(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>ge.fromName(s.referenceValue)))}class AS extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ef(t)&&Ya(t.arrayValue,this.value)}}class xS extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ya(this.value.arrayValue,t)}}class RS extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ya(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ya(this.value.arrayValue,t)}}class CS extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ef(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ya(this.value.arrayValue,s)))}}/**
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
 */class kS{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function ay(r,e=null,t=[],s=[],o=null,u=null,h=null){return new kS(r,e,t,s,o,u,h)}function Tf(r){const e=Ce(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Md(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),vc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Po(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Po(s))).join(",")),e.Te=t}return e.Te}function If(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!wS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!lv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!oy(r.startAt,e.startAt)&&oy(r.endAt,e.endAt)}function jd(r){return ge.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Mo{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function PS(r,e,t,s,o,u,h,m){return new Mo(r,e,t,s,o,u,h,m)}function Sf(r){return new Mo(r)}function ly(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function NS(r){return ge.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function hv(r){return r.collectionGroup!==null}function Ba(r){const e=Ce(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new It(bt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Ja(u,s))})),t.has(bt.keyField().canonicalString())||e.Ie.push(new Ja(bt.keyField(),s))}return e.Ie}function lr(r){const e=Ce(r);return e.Ee||(e.Ee=DS(e,Ba(r))),e.Ee}function DS(r,e){if(r.limitType==="F")return ay(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ja(o.field,u)}));const t=r.endAt?new oc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new oc(r.startAt.position,r.startAt.inclusive):null;return ay(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Fd(r,e){const t=r.filters.concat([e]);return new Mo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function bS(r,e){const t=r.explicitOrderBy.concat([e]);return new Mo(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function Ud(r,e,t){return new Mo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ec(r,e){return If(lr(r),lr(e))&&r.limitType===e.limitType}function dv(r){return`${Tf(lr(r))}|lt:${r.limitType}`}function go(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>uv(o))).join(", ")}]`),vc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Po(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Po(o))).join(",")),`Target(${s})`})(lr(r))}; limitType=${r.limitType})`}function Tc(r,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ge.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,o){for(const u of Ba(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=sy(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,Ba(s),o)||s.endAt&&!(function(h,m,g){const _=sy(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,Ba(s),o))})(r,e)}function VS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function fv(r){return(e,t)=>{let s=!1;for(const o of Ba(r)){const u=OS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function OS(r,e,t){const s=r.field.isKeyField()?ge.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?ko(g,_):Te(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Te(19790,{direction:r.dir})}}/**
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
 */class Is{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Li(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return Y_(this.inner)}size(){return this.innerSize}}/**
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
 */const LS=new et(ge.comparator);function Br(){return LS}const pv=new et(ge.comparator);function Ma(...r){let e=pv;for(const t of r)e=e.insert(t.key,t);return e}function mv(r){let e=pv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ps(){return $a()}function gv(){return $a()}function $a(){return new Is((r=>r.toString()),((r,e)=>r.isEqual(e)))}const MS=new et(ge.comparator),jS=new It(ge.comparator);function be(...r){let e=jS;for(const t of r)e=e.add(t);return e}const FS=new It(De);function US(){return FS}/**
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
 */function Af(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rc(e)?"-0":e}}function yv(r){return{integerValue:""+r}}function zS(r,e){return hS(e)?yv(e):Af(r,e)}/**
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
 */class Ic{constructor(){this._=void 0}}function BS(r,e,t){return r instanceof Xa?(function(o,u){const h={fields:{[Z_]:{stringValue:X_},[tv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&wf(u)&&(u=wc(u)),u&&(h.fields[ev]=u),{mapValue:h}})(t,e):r instanceof Za?vv(r,e):r instanceof el?wv(r,e):(function(o,u){const h=_v(o,u),m=uy(h)+uy(o.Ae);return Ld(h)&&Ld(o.Ae)?yv(m):Af(o.serializer,m)})(r,e)}function $S(r,e,t){return r instanceof Za?vv(r,e):r instanceof el?wv(r,e):t}function _v(r,e){return r instanceof ac?(function(s){return Ld(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Xa extends Ic{}class Za extends Ic{constructor(e){super(),this.elements=e}}function vv(r,e){const t=Ev(e);for(const s of r.elements)t.some((o=>hr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class el extends Ic{constructor(e){super(),this.elements=e}}function wv(r,e){let t=Ev(e);for(const s of r.elements)t=t.filter((o=>!hr(o,s)));return{arrayValue:{values:t}}}class ac extends Ic{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function uy(r){return ct(r.integerValue||r.doubleValue)}function Ev(r){return Ef(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class WS{constructor(e,t){this.field=e,this.transform=t}}function HS(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Za&&o instanceof Za||s instanceof el&&o instanceof el?Co(s.elements,o.elements,hr):s instanceof ac&&o instanceof ac?hr(s.Ae,o.Ae):s instanceof Xa&&o instanceof Xa})(r.transform,e.transform)}class qS{constructor(e,t){this.version=e,this.transformResults=t}}class In{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new In}static exists(e){return new In(void 0,e)}static updateTime(e){return new In(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Sc{}function Tv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new xf(r.key,In.none()):new ul(r.key,r.data,In.none());{const t=r.data,s=en.empty();let o=new It(bt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Mi(r.key,s,new dn(o.toArray()),In.none())}}function KS(r,e,t){r instanceof ul?(function(o,u,h){const m=o.value.clone(),g=hy(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof Mi?(function(o,u,h){if(!Hu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=hy(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Iv(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Wa(r,e,t,s){return r instanceof ul?(function(u,h,m,g){if(!Hu(u.precondition,h))return m;const _=u.value.clone(),T=dy(u.fieldTransforms,g,h);return _.setAll(T),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof Mi?(function(u,h,m,g){if(!Hu(u.precondition,h))return m;const _=dy(u.fieldTransforms,g,h),T=h.data;return T.setAll(Iv(u)),T.setAll(_),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((I=>I.field)))})(r,e,t,s):(function(u,h,m){return Hu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function GS(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=_v(s.transform,o||null);u!=null&&(t===null&&(t=en.empty()),t.set(s.field,u))}return t||null}function cy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Co(s,o,((u,h)=>HS(u,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ul extends Sc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Mi extends Sc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Iv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function hy(r,e,t){const s=new Map;ze(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,$S(h,m,t[o]))}return s}function dy(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,BS(u,h,e))}return s}class xf extends Sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class QS extends Sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class YS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&KS(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Wa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Wa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=gv();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=Tv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(xe.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),be())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,((t,s)=>cy(t,s)))&&Co(this.baseMutations,e.baseMutations,((t,s)=>cy(t,s)))}}class Rf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){ze(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return MS})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Rf(e,t,s,o)}}/**
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
 */class JS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var mt,Me;function ZS(r){switch(r){case B.OK:return Te(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return Te(15467,{code:r})}}function Sv(r){if(r===void 0)return zr("GRPC error has no .code"),B.UNKNOWN;switch(r){case mt.OK:return B.OK;case mt.CANCELLED:return B.CANCELLED;case mt.UNKNOWN:return B.UNKNOWN;case mt.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case mt.INTERNAL:return B.INTERNAL;case mt.UNAVAILABLE:return B.UNAVAILABLE;case mt.UNAUTHENTICATED:return B.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case mt.NOT_FOUND:return B.NOT_FOUND;case mt.ALREADY_EXISTS:return B.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return B.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case mt.ABORTED:return B.ABORTED;case mt.OUT_OF_RANGE:return B.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return B.UNIMPLEMENTED;case mt.DATA_LOSS:return B.DATA_LOSS;default:return Te(39323,{code:r})}}(Me=mt||(mt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function eA(){return new TextEncoder}/**
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
 */const tA=new Ri([4294967295,4294967295],0);function fy(r){const e=eA().encode(r),t=new F_;return t.update(e),new Uint8Array(t.digest())}function py(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Ri([t,s],0),new Ri([o,u],0)]}class Cf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ja(`Invalid padding: ${t}`);if(s<0)throw new ja(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ja(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ja(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ri.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Ri.fromNumber(s)));return o.compare(tA)===1&&(o=new Ri([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=fy(e),[s,o]=py(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Cf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=fy(e),[s,o]=py(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cl{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,hl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new cl(xe.min(),o,new et(De),Br(),be())}}class hl{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new hl(s,t,be(),be(),be())}}/**
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
 */class qu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Av{constructor(e,t){this.targetId=e,this.Ce=t}}class xv{constructor(e,t,s=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class my{constructor(){this.ve=0,this.Fe=gy(),this.Me=Vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=be(),t=be(),s=be();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Te(38017,{changeType:u})}})),new hl(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=gy()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class nA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Br(),this.Je=Ou(),this.He=Ou(),this.Ze=new et(De)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(jd(u))if(s===0){const h=new ge(u.path);this.et(t,h,$t.newNoDocument(h,xe.min()))}else ze(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ni(s).toUint8Array()}catch(g){if(g instanceof J_)return Es("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Cf(h,o,u)}catch(g){return Es(g instanceof ja?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&jd(m.target)){const g=new ge(m.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,$t.newNoDocument(g,e))}u.Be&&(t.set(h,u.ke()),u.Ke())}}));let s=be();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new cl(e,t,this.Ze,this.je,s);return this.je=Br(),this.Je=Ou(),this.He=Ou(),this.Ze=new et(De),o}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new my,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new It(De),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new It(De),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new my),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ou(){return new et(ge.comparator)}function gy(){return new et(ge.comparator)}const rA={asc:"ASCENDING",desc:"DESCENDING"},iA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sA={and:"AND",or:"OR"};class oA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function zd(r,e){return r.useProto3Json||vc(e)?e:{value:e}}function lc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function aA(r,e){return lc(r,e.toTimestamp())}function ur(r){return ze(!!r,49232),xe.fromTimestamp((function(t){const s=Pi(t);return new Xe(s.seconds,s.nanos)})(r))}function kf(r,e){return Bd(r,e).canonicalString()}function Bd(r,e){const t=(function(o){return new Ge(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Cv(r){const e=Ge.fromString(r);return ze(bv(e),10190,{key:e.toString()}),e}function $d(r,e){return kf(r.databaseId,e.path)}function yd(r,e){const t=Cv(e);if(t.get(1)!==r.databaseId.projectId)throw new re(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new re(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ge(Pv(t))}function kv(r,e){return kf(r.databaseId,e)}function lA(r){const e=Cv(r);return e.length===4?Ge.emptyPath():Pv(e)}function Wd(r){return new Ge(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Pv(r){return ze(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function yy(r,e,t){return{name:$d(r,e),fields:t.value.mapValue.fields}}function uA(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Te(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,T){return _.useProto3Json?(ze(T===void 0||typeof T=="string",58123),Vt.fromBase64String(T||"")):(ze(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Vt.fromUint8Array(T||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const T=_.code===void 0?B.UNKNOWN:Sv(_.code);return new re(T,_.message||"")})(h);t=new xv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=yd(r,s.document.name),u=ur(s.document.updateTime),h=s.document.createTime?ur(s.document.createTime):xe.min(),m=new en({mapValue:{fields:s.document.fields}}),g=$t.newFoundDocument(o,u,h,m),_=s.targetIds||[],T=s.removedTargetIds||[];t=new qu(_,T,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=yd(r,s.document),u=s.readTime?ur(s.readTime):xe.min(),h=$t.newNoDocument(o,u),m=s.removedTargetIds||[];t=new qu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=yd(r,s.document),u=s.removedTargetIds||[];t=new qu([],u,o,null)}else{if(!("filter"in e))return Te(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new XS(o,u),m=s.targetId;t=new Av(m,h)}}return t}function cA(r,e){let t;if(e instanceof ul)t={update:yy(r,e.key,e.value)};else if(e instanceof xf)t={delete:$d(r,e.key)};else if(e instanceof Mi)t={update:yy(r,e.key,e.data),updateMask:vA(e.fieldMask)};else{if(!(e instanceof QS))return Te(16599,{dt:e.type});t={verify:$d(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Xa)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Za)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof el)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ac)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw Te(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:aA(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Te(27497)})(r,e.precondition)),t}function hA(r,e){return r&&r.length>0?(ze(e!==void 0,14353),r.map((t=>(function(o,u){let h=o.updateTime?ur(o.updateTime):ur(u);return h.isEqual(xe.min())&&(h=ur(u)),new qS(h,o.transformResults||[])})(t,e)))):[]}function dA(r,e){return{documents:[kv(r,e.path)]}}function fA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=kv(r,o);const u=(function(_){if(_.length!==0)return Dv(Un.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((T=>(function(D){return{field:yo(D.field),direction:gA(D.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=zd(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function pA(r){let e=lA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){ze(s===1,65062);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];t.where&&(u=(function(I){const D=Nv(I);return D instanceof Un&&av(D)?D.getFilters():[D]})(t.where));let h=[];t.orderBy&&(h=(function(I){return I.map((D=>(function(X){return new Ja(_o(X.field),(function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(X.direction))})(D)))})(t.orderBy));let m=null;t.limit&&(m=(function(I){let D;return D=typeof I=="object"?I.value:I,vc(D)?null:D})(t.limit));let g=null;t.startAt&&(g=(function(I){const D=!!I.before,z=I.values||[];return new oc(z,D)})(t.startAt));let _=null;return t.endAt&&(_=(function(I){const D=!I.before,z=I.values||[];return new oc(z,D)})(t.endAt)),PS(e,o,h,u,m,"F",g,_)}function mA(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=_o(t.unaryFilter.field);return gt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=_o(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=_o(t.unaryFilter.field);return gt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=_o(t.unaryFilter.field);return gt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}})(r):r.fieldFilter!==void 0?(function(t){return gt.create(_o(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Un.create(t.compositeFilter.filters.map((s=>Nv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te(1026)}})(t.compositeFilter.op))})(r):Te(30097,{filter:r})}function gA(r){return rA[r]}function yA(r){return iA[r]}function _A(r){return sA[r]}function yo(r){return{fieldPath:r.canonicalString()}}function _o(r){return bt.fromServerFormat(r.fieldPath)}function Dv(r){return r instanceof gt?(function(t){if(t.op==="=="){if(iy(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NAN"}};if(ry(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(iy(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NOT_NAN"}};if(ry(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yo(t.field),op:yA(t.op),value:t.value}}})(r):r instanceof Un?(function(t){const s=t.getFilters().map((o=>Dv(o)));return s.length===1?s[0]:{compositeFilter:{op:_A(t.op),filters:s}}})(r):Te(54877,{filter:r})}function vA(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function bv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function Vv(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class Lr{constructor(e,t,s,o,u=xe.min(),h=xe.min(),m=Vt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class wA{constructor(e){this.yt=e}}function EA(r){const e=pA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ud(e,e.limit,"L"):e}/**
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
 */class TA{constructor(){this.bn=new IA}addToCollectionParentIndex(e,t){return this.bn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(ki.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(ki.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class IA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new It(Ge.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new It(Ge.comparator)).toArray()}}/**
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
 */const _y={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ov=41943040;class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(Ov,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
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
 */class bi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new bi(0)}static ar(){return new bi(-1)}}/**
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
 */const vy="LruGarbageCollector",SA=1048576;function wy([r,e],[t,s]){const o=De(r,t);return o===0?De(e,s):o}class AA{constructor(e){this.Pr=e,this.buffer=new It(wy),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();wy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){se(vy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Lo(t)?se(vy,"Ignoring IndexedDB error during garbage collection: ",t):await Oo(t)}await this.Ar(3e5)}))}}class RA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(_c.ce);const s=new AA(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(_y)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_y):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,u,h,m,g,_;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o)))).next((I=>(s=I,m=Date.now(),this.removeTargets(e,s,t)))).next((I=>(u=I,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((I=>(_=Date.now(),mo()<=Ve.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${I} documents in `+(_-g)+`ms
Total Duration: ${_-T}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:I}))))}}function CA(r,e){return new RA(r,e)}/**
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
 */class kA{constructor(){this.changes=new Is((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class PA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class NA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Wa(s.mutation,o,dn.empty(),Xe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,be()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=be()){const o=ps();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Ma();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ps();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,be())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Br();const h=$a(),m=(function(){return $a()})();return t.forEach(((g,_)=>{const T=s.get(_.key);o.has(_.key)&&(T===void 0||T.mutation instanceof Mi)?u=u.insert(_.key,_):T!==void 0?(h.set(_.key,T.mutation.getFieldMask()),Wa(T.mutation,_,T.mutation.getFieldMask(),Xe.now())):h.set(_.key,dn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,T)=>h.set(_,T))),t.forEach(((_,T)=>m.set(_,new PA(T,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=$a();let o=new et(((h,m)=>h-m)),u=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let T=s.get(g)||dn.empty();T=m.applyToLocalView(_,T),s.set(g,T);const I=(o.get(m.batchId)||be()).add(g);o=o.insert(m.batchId,I)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,T=g.value,I=gv();T.forEach((D=>{if(!u.has(D)){const z=Tv(t.get(D),s.get(D));z!==null&&I.set(D,z),u=u.add(D)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,I))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return NS(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(ps());let m=Ka,g=u;return h.next((_=>$.forEach(_,((T,I)=>(m<I.largestBatchId&&(m=I.largestBatchId),u.get(T)?$.resolve():this.remoteDocumentCache.getEntry(e,T).next((D=>{g=g.insert(T,D)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,be()))).next((T=>({batchId:m,changes:mv(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next((s=>{let o=Ma();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ma();return this.indexManager.getCollectionParents(e,u).next((m=>$.forEach(m,(g=>{const _=(function(I,D){return new Mo(D,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((T=>{T.forEach(((I,D)=>{h=h.insert(I,D)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,_)=>{const T=_.getKey();h.get(T)===null&&(h=h.insert(T,$t.newInvalidDocument(T)))}));let m=Ma();return h.forEach(((g,_)=>{const T=u.get(g);T!==void 0&&Wa(T.mutation,_,dn.empty(),Xe.now()),Tc(t,_)&&(m=m.insert(g,_))})),m}))}}/**
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
 */class DA{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return $.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:ur(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:EA(o.bundledQuery),readTime:ur(o.readTime)}})(t)),$.resolve()}}/**
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
 */class bA{constructor(){this.overlays=new et(ge.comparator),this.Lr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ps();return $.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=ps(),u=t.length+1,h=new ge(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new et(((_,T)=>_-T));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let T=u.get(_.largestBatchId);T===null&&(T=ps(),u=u.insert(_.largestBatchId,T)),T.set(_.getKey(),_)}}const m=ps(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,T)=>m.set(_,T))),!(m.size()>=o)););return $.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new JS(t,s));let u=this.Lr.get(t);u===void 0&&(u=be(),this.Lr.set(t,u)),this.Lr.set(t,u.add(s.key))}}/**
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
 */class VA{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class Pf{constructor(){this.kr=new It(Rt.Kr),this.qr=new It(Rt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Rt(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Rt(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new ge(new Ge([])),s=new Rt(t,e),o=new Rt(t,e+1),u=[];return this.qr.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new ge(new Ge([])),s=new Rt(t,e),o=new Rt(t,e+1);let u=be();return this.qr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Rt(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Rt{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return ge.comparator(e.key,t.key)||De(e.Jr,t.Jr)}static Ur(e,t){return De(e.Jr,t.Jr)||ge.comparator(e.key,t.key)}}/**
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
 */class OA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new It(Rt.Kr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new YS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Hr=this.Hr.add(new Rt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?vf:this.Yn-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Rt(t,0),o=new Rt(t,Number.POSITIVE_INFINITY),u=[];return this.Hr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Jr);u.push(m)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new It(De);return t.forEach((o=>{const u=new Rt(o,0),h=new Rt(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([u,h],(m=>{s=s.add(m.Jr)}))})),$.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ge.isDocumentKey(u)||(u=u.child(""));const h=new Rt(new ge(u),0);let m=new It(De);return this.Hr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Jr)),!0)}),h),$.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return $.forEach(t.mutations,(o=>{const u=new Rt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new Rt(t,0),o=this.Hr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class LA{constructor(e){this.ti=e,this.docs=(function(){return new et(ge.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():$t.newInvalidDocument(t))}getEntries(e,t){let s=Br();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():$t.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Br();const h=t.path,m=new ge(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:T}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||aS(oS(T),s)<=0||(o.has(T.key)||Tc(t,T))&&(u=u.insert(T.key,T.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Te(9500)}ni(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new MA(this)}getSize(e){return $.resolve(this.size)}}class MA extends kA{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class jA{constructor(e){this.persistence=e,this.ri=new Is((t=>Tf(t)),If),this.lastRemoteSnapshotVersion=xe.min(),this.highestTargetId=0,this.ii=0,this.si=new Pf,this.targetCount=0,this.oi=bi._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),$.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new bi(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.lr(t),$.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ri.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.si.containsKey(t))}}/**
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
 */class Lv{constructor(e,t){this._i={},this.overlays={},this.ai=new _c(0),this.ui=!1,this.ui=!0,this.ci=new VA,this.referenceDelegate=e(this),this.li=new jA(this),this.indexManager=new TA,this.remoteDocumentCache=(function(o){return new LA(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new wA(t),this.Pi=new DA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new bA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new OA(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){se("MemoryPersistence","Starting transaction:",e);const o=new FA(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ii(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return $.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class FA extends uS{constructor(e){super(),this.currentSequenceNumber=e}}class Nf{constructor(e){this.persistence=e,this.Ri=new Pf,this.Ai=null}static Vi(e){return new Nf(e)}get di(){if(this.Ai)return this.Ai;throw Te(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,(s=>{const o=ge.fromPath(s);return this.mi(e,o).next((u=>{u||t.removeEntry(o,xe.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class uc{constructor(e,t){this.persistence=e,this.fi=new Is((s=>dS(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=CA(this,t)}static Vi(e,t){return new uc(e,t)}Ti(){}Ii(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return $.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,xe.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=$u(e.data.value)),t}wr(e,t,s){return $.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Df{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=o}static Es(e,t){let s=be(),o=be();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Df(e,t.fromCache,s,o)}}/**
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
 */class UA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zA{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return oE()?8:cS(Wt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.gs(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ps(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new UA;return this.ys(e,t,h).next((m=>{if(u.result=m,this.As)return this.ws(e,t,h,m.size)}))})).next((()=>u.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(mo()<=Ve.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",go(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(mo()<=Ve.DEBUG&&se("QueryEngine","Query:",go(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(mo()<=Ve.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",go(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lr(t))):$.resolve())}gs(e,t){if(ly(t))return $.resolve(null);let s=lr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Ud(t,null,"F"),s=lr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=be(...u);return this.fs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.Ss(t,m);return this.bs(t,_,h,g.readTime)?this.gs(e,Ud(t,null,"F")):this.Ds(e,_,t,g)}))))})))))}ps(e,t,s,o){return ly(t)||o.isEqual(xe.min())?$.resolve(null):this.fs.getDocuments(e,s).next((u=>{const h=this.Ss(t,u);return this.bs(t,h,s,o)?$.resolve(null):(mo()<=Ve.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),go(t)),this.Ds(e,h,t,sS(o,Ka)).next((m=>m)))}))}Ss(e,t){let s=new It(fv(e));return t.forEach(((o,u)=>{Tc(e,u)&&(s=s.add(u))})),s}bs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,t,s){return mo()<=Ve.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",go(t)),this.fs.getDocumentsMatchingQuery(e,t,ki.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const bf="LocalStore",BA=3e8;class $A{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new et(De),this.Fs=new Is((u=>Tf(u)),If),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function WA(r,e,t,s){return new $A(r,e,t,s)}async function Mv(r,e){const t=Ce(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=be();for(const _ of o){h.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}for(const _ of u){m.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Ns:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function HA(r,e){const t=Ce(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,T){const I=_.batch,D=I.keys();let z=$.resolve();return D.forEach((X=>{z=z.next((()=>T.getEntry(g,X))).next((J=>{const q=_.docVersions.get(X);ze(q!==null,48541),J.version.compareTo(q)<0&&(I.applyToRemoteDocument(J,_),J.isValidDocument()&&(J.setReadTime(_.commitVersion),T.addEntry(J)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(g,I)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=be();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function jv(r){const e=Ce(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function qA(r,e){const t=Ce(r),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((T,I)=>{const D=o.get(I);if(!D)return;m.push(t.li.removeMatchingKeys(u,T.removedDocuments,I).next((()=>t.li.addMatchingKeys(u,T.addedDocuments,I))));let z=D.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(I)!==null?z=z.withResumeToken(Vt.EMPTY_BYTE_STRING,xe.min()).withLastLimboFreeSnapshotVersion(xe.min()):T.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(T.resumeToken,s)),o=o.insert(I,z),(function(J,q,ce){return J.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=BA?!0:ce.addedDocuments.size+ce.modifiedDocuments.size+ce.removedDocuments.size>0})(D,z,T)&&m.push(t.li.updateTargetData(u,z))}));let g=Br(),_=be();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,T))})),m.push(KA(u,h,e.documentUpdates).next((T=>{g=T.Bs,_=T.Ls}))),!s.isEqual(xe.min())){const T=t.li.getLastRemoteSnapshotVersion(u).next((I=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(T)}return $.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.vs=o,u)))}function KA(r,e,t){let s=be(),o=be();return t.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let h=Br();return t.forEach(((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(xe.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):se(bf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function GA(r,e){const t=Ce(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=vf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function QA(r,e){const t=Ce(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((u=>u?(o=u,$.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new Lr(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function Hd(r,e,t){const s=Ce(r),o=s.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Lo(h))throw h;se(bf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function Ey(r,e,t){const s=Ce(r);let o=xe.min(),u=be();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,T){const I=Ce(g),D=I.Fs.get(T);return D!==void 0?$.resolve(I.vs.get(D)):I.li.getTargetData(_,T)})(s,h,lr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:xe.min(),t?u:be()))).next((m=>(YA(s,VS(e),m),{documents:m,ks:u})))))}function YA(r,e,t){let s=r.Ms.get(e)||xe.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Ms.set(e,s)}class Ty{constructor(){this.activeTargetIds=US()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JA{constructor(){this.vo=new Ty,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ty,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XA{Mo(e){}shutdown(){}}/**
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
 */const Iy="ConnectivityMonitor";class Sy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){se(Iy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){se(Iy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Lu=null;function qd(){return Lu===null?Lu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Lu++,"0x"+Lu.toString(16)}/**
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
 */const _d="RestConnection",ZA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class ex{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===ic?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=qd(),m=this.Qo(e,t.toUriEncodedString());se(_d,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,u);const{host:_}=new URL(m),T=rl(_);return this.zo(e,m,g,s,T).then((I=>(se(_d,`Received RPC '${e}' ${h}: `,I),I)),(I=>{throw Es(_d,`RPC '${e}' ${h} failed with error: `,I,"url: ",m,"request:",s),I}))}jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Vo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,t){const s=ZA[e];let o=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class tx{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const zt="WebChannelConnection",ba=(r,e,t)=>{r.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class To extends ex{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!To.c_){const e=$_();ba(e,B_.STAT_EVENT,(t=>{t.stat===bd.PROXY?se(zt,"STAT_EVENT: detected buffering proxy"):t.stat===bd.NOPROXY&&se(zt,"STAT_EVENT: detected no buffering proxy")})),To.c_=!0}}zo(e,t,s,o,u){const h=qd();return new Promise(((m,g)=>{const _=new U_;_.setWithCredentials(!0),_.listenOnce(z_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Bu.NO_ERROR:const I=_.getResponseJson();se(zt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(I)),m(I);break;case Bu.TIMEOUT:se(zt,`RPC '${e}' ${h} timed out`),g(new re(B.DEADLINE_EXCEEDED,"Request time out"));break;case Bu.HTTP_ERROR:const D=_.getStatus();if(se(zt,`RPC '${e}' ${h} failed with status:`,D,"response text:",_.getResponseText()),D>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const X=z==null?void 0:z.error;if(X&&X.status&&X.message){const J=(function(ce){const pe=ce.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(pe)>=0?pe:B.UNKNOWN})(X.status);g(new re(J,X.message))}else g(new re(B.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new re(B.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{se(zt,`RPC '${e}' ${h} completed.`)}}));const T=JSON.stringify(o);se(zt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",T,s,15)}))}T_(e,t,s){const o=qd(),u=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=u.join("");se(zt,`Creating RPC '${e}' stream ${o}: ${_}`,m);const T=h.createWebChannel(_,m);this.I_(T);let I=!1,D=!1;const z=new tx({Jo:X=>{D?se(zt,`Not sending because RPC '${e}' stream ${o} is closed:`,X):(I||(se(zt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),se(zt,`RPC '${e}' stream ${o} sending:`,X),T.send(X))},Ho:()=>T.close()});return ba(T,La.EventType.OPEN,(()=>{D||(se(zt,`RPC '${e}' stream ${o} transport opened.`),z.i_())})),ba(T,La.EventType.CLOSE,(()=>{D||(D=!0,se(zt,`RPC '${e}' stream ${o} transport closed`),z.o_(),this.E_(T))})),ba(T,La.EventType.ERROR,(X=>{D||(D=!0,Es(zt,`RPC '${e}' stream ${o} transport errored. Name:`,X.name,"Message:",X.message),z.o_(new re(B.UNAVAILABLE,"The operation could not be completed")))})),ba(T,La.EventType.MESSAGE,(X=>{var J;if(!D){const q=X.data[0];ze(!!q,16349);const ce=q,pe=(ce==null?void 0:ce.error)||((J=ce[0])==null?void 0:J.error);if(pe){se(zt,`RPC '${e}' stream ${o} received error:`,pe);const ye=pe.status;let ie=(function(k){const A=mt[k];if(A!==void 0)return Sv(A)})(ye),ke=pe.message;ye==="NOT_FOUND"&&ke.includes("database")&&ke.includes("does not exist")&&ke.includes(this.databaseId.database)&&Es(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ie===void 0&&(ie=B.INTERNAL,ke="Unknown error status: "+ye+" with message "+pe.message),D=!0,z.o_(new re(ie,ke)),T.close()}else se(zt,`RPC '${e}' stream ${o} received:`,q),z.__(q)}})),To.u_(),setTimeout((()=>{z.s_()}),0),z}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return W_()}}/**
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
 */function nx(r){return new To(r)}function vd(){return typeof document<"u"?document:null}/**
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
 */function Ac(r){return new oA(r,!0)}/**
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
 */To.c_=!1;class Fv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Ay="PersistentStream";class Uv{constructor(e,t,s,o,u,h,m,g){this.Ci=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Fv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(zr(t.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new re(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return se(Ay,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(se(Ay,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class rx extends Uv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=uA(this.serializer,e),s=(function(u){if(!("targetChange"in u))return xe.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?xe.min():h.readTime?ur(h.readTime):xe.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=Wd(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=jd(g)?{documents:dA(u,g)}:{query:fA(u,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Rv(u,h.resumeToken);const _=zd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(xe.min())>0){m.readTime=lc(u,h.snapshotVersion.toTimestamp());const _=zd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=mA(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=Wd(this.serializer),t.removeTarget=e,this.K_(t)}}class ix extends Uv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=hA(e.writeResults,e.commitTime),s=ur(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Wd(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>cA(this.serializer,s)))};this.K_(t)}}/**
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
 */class sx{}class ox extends sx{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new re(B.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Bd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new re(B.UNKNOWN,u.toString())}))}jo(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.jo(e,Bd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new re(B.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function ax(r,e,t,s){return new ox(r,e,t,s)}class lx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(zr(t),this.aa=!1):se("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const dr="RemoteStore";class ux{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new bi(1e3),this.Va=new bi(1001),this.da=new Set,this.ma=[],this.fa=u,this.fa.Mo((h=>{s.enqueueAndForget((async()=>{Ss(this)&&(se(dr,"Restarting streams for network reachability change."),await(async function(g){const _=Ce(g);_.da.add(4),await dl(_),_.ga.set("Unknown"),_.da.delete(4),await xc(_)})(this))}))})),this.ga=new lx(s,o)}}async function xc(r){if(Ss(r))for(const e of r.ma)await e(!0)}async function dl(r){for(const e of r.ma)await e(!1)}function Kd(r,e){return r.Ea.get(e)||void 0}function zv(r,e){const t=Ce(r),s=Kd(t,e.targetId);if(s!==void 0&&t.Ia.has(s))return;const o=(function(m,g){const _=Kd(m,g);_!==void 0&&m.Ra.delete(_);const T=(function(D,z){return z%2!=0?D.Va.next():D.Aa.next()})(m,g);return m.Ea.set(g,T),m.Ra.set(T,g),T})(t,e.targetId);se(dr,"remoteStoreListen mapping SDK target ID to remote",e.targetId,o);const u=new Lr(e.target,o,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(o,u),Mf(t)?Lf(t):jo(t).O_()&&Of(t,u)}function Vf(r,e){const t=Ce(r),s=jo(t),o=Kd(t,e);se(dr,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,o),t.Ia.delete(o),t.Ea.delete(e),t.Ra.delete(o),s.O_()&&Bv(t,o),t.Ia.size===0&&(s.O_()?s.L_():Ss(t)&&t.ga.set("Unknown"))}function Of(r,e){if(r.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(xe.min())>0){const t=r.Ra.get(e.targetId);if(t===void 0)return void se(dr,"SDK target ID not found for remote ID: "+e.targetId);const s=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(s)}jo(r).Z_(e)}function Bv(r,e){r.pa.$e(e),jo(r).X_(e)}function Lf(r){r.pa=new nA({getRemoteKeysForTarget:e=>{const t=r.Ra.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):be()},At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),jo(r).start(),r.ga.ua()}function Mf(r){return Ss(r)&&!jo(r).x_()&&r.Ia.size>0}function Ss(r){return Ce(r).da.size===0}function $v(r){r.pa=void 0}async function cx(r){r.ga.set("Online")}async function hx(r){r.Ia.forEach(((e,t)=>{Of(r,e)}))}async function dx(r,e){$v(r),Mf(r)?(r.ga.ha(e),Lf(r)):r.ga.set("Unknown")}async function fx(r,e,t){if(r.ga.set("Online"),e instanceof xv&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds){if(o.Ia.has(m)){const g=o.Ra.get(m);g!==void 0&&(await o.remoteSyncer.rejectListen(g,h),o.Ea.delete(g),o.Ra.delete(m)),o.Ia.delete(m)}o.pa.removeTarget(m)}})(r,e)}catch(s){se(dr,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await cc(r,s)}else if(e instanceof qu?r.pa.Xe(e):e instanceof Av?r.pa.st(e):r.pa.tt(e),!t.isEqual(xe.min()))try{const s=await jv(r.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.pa.Tt(h);m.targetChanges.forEach(((_,T)=>{if(_.resumeToken.approximateByteSize()>0){const I=u.Ia.get(T);I&&u.Ia.set(T,I.withResumeToken(_.resumeToken,h))}})),m.targetMismatches.forEach(((_,T)=>{const I=u.Ia.get(_);if(!I)return;u.Ia.set(_,I.withResumeToken(Vt.EMPTY_BYTE_STRING,I.snapshotVersion)),Bv(u,_);const D=new Lr(I.target,_,T,I.sequenceNumber);Of(u,D)}));const g=(function(T,I){const D=new Map;I.targetChanges.forEach(((X,J)=>{const q=T.Ra.get(J);q!==void 0&&D.set(q,X)}));let z=new et(De);return I.targetMismatches.forEach(((X,J)=>{const q=T.Ra.get(X);q!==void 0&&(z=z.insert(q,J))})),new cl(I.snapshotVersion,D,z,I.documentUpdates,I.resolvedLimboDocuments)})(u,m);return u.remoteSyncer.applyRemoteEvent(g)})(r,t)}catch(s){se(dr,"Failed to raise snapshot:",s),await cc(r,s)}}async function cc(r,e,t){if(!Lo(e))throw e;r.da.add(1),await dl(r),r.ga.set("Offline"),t||(t=()=>jv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{se(dr,"Retrying IndexedDB access"),await t(),r.da.delete(1),await xc(r)}))}function Wv(r,e){return e().catch((t=>cc(r,t,e)))}async function Rc(r){const e=Ce(r),t=Vi(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:vf;for(;px(e);)try{const o=await GA(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,mx(e,o)}catch(o){await cc(e,o)}Hv(e)&&qv(e)}function px(r){return Ss(r)&&r.Ta.length<10}function mx(r,e){r.Ta.push(e);const t=Vi(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function Hv(r){return Ss(r)&&!Vi(r).x_()&&r.Ta.length>0}function qv(r){Vi(r).start()}async function gx(r){Vi(r).ra()}async function yx(r){const e=Vi(r);for(const t of r.Ta)e.ea(t.mutations)}async function _x(r,e,t){const s=r.Ta.shift(),o=Rf.from(s,e,t);await Wv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Rc(r)}async function vx(r,e){e&&Vi(r).Y_&&await(async function(s,o){if((function(h){return ZS(h)&&h!==B.ABORTED})(o.code)){const u=s.Ta.shift();Vi(s).B_(),await Wv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Rc(s)}})(r,e),Hv(r)&&qv(r)}async function xy(r,e){const t=Ce(r);t.asyncQueue.verifyOperationInProgress(),se(dr,"RemoteStore received new credentials");const s=Ss(t);t.da.add(3),await dl(t),s&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await xc(t)}async function wx(r,e){const t=Ce(r);e?(t.da.delete(2),await xc(t)):e||(t.da.add(2),await dl(t),t.ga.set("Unknown"))}function jo(r){return r.ya||(r.ya=(function(t,s,o){const u=Ce(t);return u.sa(),new rx(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:cx.bind(null,r),Yo:hx.bind(null,r),t_:dx.bind(null,r),H_:fx.bind(null,r)}),r.ma.push((async e=>{e?(r.ya.B_(),Mf(r)?Lf(r):r.ga.set("Unknown")):(await r.ya.stop(),$v(r))}))),r.ya}function Vi(r){return r.wa||(r.wa=(function(t,s,o){const u=Ce(t);return u.sa(),new ix(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:gx.bind(null,r),t_:vx.bind(null,r),ta:yx.bind(null,r),na:_x.bind(null,r)}),r.ma.push((async e=>{e?(r.wa.B_(),await Rc(r)):(await r.wa.stop(),r.Ta.length>0&&(se(dr,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.wa}/**
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
 */class jf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new jf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ff(r,e){if(zr("AsyncQueue",`${e}: ${r}`),Lo(r))return new re(B.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Io{static emptySet(e){return new Io(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ge.comparator(t.key,s.key):(t,s)=>ge.comparator(t.key,s.key),this.keyedMap=Ma(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Io)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Ry{constructor(){this.Sa=new et(ge.comparator)}track(e){const t=e.doc.key,s=this.Sa.get(t);s?e.type!==0&&s.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&s.type!==1?this.Sa=this.Sa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Sa=this.Sa.remove(t):e.type===1&&s.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):Te(63341,{Vt:e,ba:s}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class No{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new No(e,t,Io.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class Ex{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some((e=>e.Ma()))}}class Tx{constructor(){this.queries=Cy(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,s){const o=Ce(t),u=o.queries;o.queries=Cy(),u.forEach(((h,m)=>{for(const g of m.va)g.onError(s)}))})(this,new re(B.ABORTED,"Firestore shutting down"))}}function Cy(){return new Is((r=>dv(r)),Ec)}async function Kv(r,e){const t=Ce(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Fa()&&e.Ma()&&(s=2):(u=new Ex,s=e.Ma()?0:1);try{switch(s){case 0:u.Ca=await t.onListen(o,!0);break;case 1:u.Ca=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Ff(h,`Initialization of query '${go(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.va.push(e),e.Oa(t.onlineState),u.Ca&&e.Na(u.Ca)&&Uf(t)}async function Gv(r,e){const t=Ce(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.va.indexOf(e);h>=0&&(u.va.splice(h,1),u.va.length===0?o=e.Ma()?0:1:!u.Fa()&&e.Ma()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Ix(r,e){const t=Ce(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.va)m.Na(o)&&(s=!0);h.Ca=o}}s&&Uf(t)}function Sx(r,e,t){const s=Ce(r),o=s.queries.get(e);if(o)for(const u of o.va)u.onError(t);s.queries.delete(e)}function Uf(r){r.xa.forEach((e=>{e.next()}))}var Gd,ky;(ky=Gd||(Gd={})).Ba="default",ky.Cache="cache";class Qv{constructor(e,t,s){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=s||{}}Na(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new No(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const s=t!=="Offline";return(!this.options.Wa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=No.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Gd.Cache}}/**
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
 */class Yv{constructor(e){this.key=e}}class Jv{constructor(e){this.key=e}}class Ax{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=be(),this.mutatedKeys=be(),this.iu=fv(e),this.su=new Io(this.iu)}get ou(){return this.tu}_u(e,t){const s=t?t.au:new Ry,o=t?t.su:this.su;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,I)=>{const D=o.get(T),z=Tc(this.query,I)?I:null,X=!!D&&this.mutatedKeys.has(D.key),J=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let q=!1;D&&z?D.data.isEqual(z.data)?X!==J&&(s.track({type:3,doc:z}),q=!0):this.uu(D,z)||(s.track({type:2,doc:z}),q=!0,(g&&this.iu(z,g)>0||_&&this.iu(z,_)<0)&&(m=!0)):!D&&z?(s.track({type:0,doc:z}),q=!0):D&&!z&&(s.track({type:1,doc:D}),q=!0,(g||_)&&(m=!0)),q&&(z?(h=h.add(z),u=J?u.add(T):u.delete(T)):(h=h.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{su:h,au:s,bs:m,mutatedKeys:u}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const h=e.au.Da();h.sort(((T,I)=>(function(z,X){const J=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{Vt:q})}};return J(z)-J(X)})(T.type,I.type)||this.iu(T.doc,I.doc))),this.cu(s),o=o??!1;const m=t&&!o?this.lu():[],g=this.ru.size===0&&this.current&&!o?1:0,_=g!==this.nu;return this.nu=g,h.length!==0||_?{snapshot:new No(this.query,e.su,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),hu:m}:{hu:m}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Ry,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach((t=>this.tu=this.tu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.tu=this.tu.delete(t))),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=be(),this.su.forEach((s=>{this.Pu(s.key)&&(this.ru=this.ru.add(s.key))}));const t=[];return e.forEach((s=>{this.ru.has(s)||t.push(new Jv(s))})),this.ru.forEach((s=>{e.has(s)||t.push(new Yv(s))})),t}Tu(e){this.tu=e.ks,this.ru=be();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return No.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const zf="SyncEngine";class xx{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Rx{constructor(e){this.key=e,this.Eu=!1}}class Cx{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ru={},this.Au=new Is((m=>dv(m)),Ec),this.Vu=new Map,this.du=new Set,this.mu=new et(ge.comparator),this.fu=new Map,this.gu=new Pf,this.pu={},this.yu=new Map,this.wu=bi.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function kx(r,e,t=!0){const s=r0(r);let o;const u=s.Au.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Iu()):o=await Xv(s,e,t,!0),o}async function Px(r,e){const t=r0(r);await Xv(t,e,!0,!1)}async function Xv(r,e,t,s){const o=await QA(r.localStore,lr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await Nx(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&zv(r.remoteStore,o),m}async function Nx(r,e,t,s,o){r.bu=(I,D,z)=>(async function(J,q,ce,pe){let ye=q.view._u(ce);ye.bs&&(ye=await Ey(J.localStore,q.query,!1).then((({documents:k})=>q.view._u(k,ye))));const ie=pe&&pe.targetChanges.get(q.targetId),ke=pe&&pe.targetMismatches.get(q.targetId)!=null,Se=q.view.applyChanges(ye,J.isPrimaryClient,ie,ke);return Ny(J,q.targetId,Se.hu),Se.snapshot})(r,I,D,z);const u=await Ey(r.localStore,e,!0),h=new Ax(e,u.ks),m=h._u(u.documents),g=hl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);Ny(r,t,_.hu);const T=new xx(e,t,h);return r.Au.set(e,T),r.Vu.has(t)?r.Vu.get(t).push(e):r.Vu.set(t,[e]),_.snapshot}async function Dx(r,e,t){const s=Ce(r),o=s.Au.get(e),u=s.Vu.get(o.targetId);if(u.length>1)return s.Vu.set(o.targetId,u.filter((h=>!Ec(h,e)))),void s.Au.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Hd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Vf(s.remoteStore,o.targetId),Qd(s,o.targetId)})).catch(Oo)):(Qd(s,o.targetId),await Hd(s.localStore,o.targetId,!0))}async function bx(r,e){const t=Ce(r),s=t.Au.get(e),o=t.Vu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Vf(t.remoteStore,s.targetId))}async function Vx(r,e,t){const s=zx(r);try{const o=await(function(h,m){const g=Ce(h),_=Xe.now(),T=m.reduce(((z,X)=>z.add(X.key)),be());let I,D;return g.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let X=Br(),J=be();return g.xs.getEntries(z,T).next((q=>{X=q,X.forEach(((ce,pe)=>{pe.isValidDocument()||(J=J.add(ce))}))})).next((()=>g.localDocuments.getOverlayedDocuments(z,X))).next((q=>{I=q;const ce=[];for(const pe of m){const ye=GS(pe,I.get(pe.key).overlayedDocument);ye!=null&&ce.push(new Mi(pe.key,ye,iv(ye.value.mapValue),In.exists(!0)))}return g.mutationQueue.addMutationBatch(z,_,ce,m)})).next((q=>{D=q;const ce=q.applyToLocalDocumentSet(I,J);return g.documentOverlayCache.saveOverlays(z,q.batchId,ce)}))})).then((()=>({batchId:D.batchId,changes:mv(I)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.pu[h.currentUser.toKey()];_||(_=new et(De)),_=_.insert(m,g),h.pu[h.currentUser.toKey()]=_})(s,o.batchId,t),await fl(s,o.changes),await Rc(s.remoteStore)}catch(o){const u=Ff(o,"Failed to persist write");t.reject(u)}}async function Zv(r,e){const t=Ce(r);try{const s=await qA(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.fu.get(u);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.Eu=!0:o.modifiedDocuments.size>0?ze(h.Eu,14607):o.removedDocuments.size>0&&(ze(h.Eu,42227),h.Eu=!1))})),await fl(t,s,e)}catch(s){await Oo(s)}}function Py(r,e,t){const s=Ce(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Au.forEach(((u,h)=>{const m=h.view.Oa(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Ce(h);g.onlineState=m;let _=!1;g.queries.forEach(((T,I)=>{for(const D of I.va)D.Oa(m)&&(_=!0)})),_&&Uf(g)})(s.eventManager,e),o.length&&s.Ru.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Ox(r,e,t){const s=Ce(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.fu.get(e),u=o&&o.key;if(u){let h=new et(ge.comparator);h=h.insert(u,$t.newNoDocument(u,xe.min()));const m=be().add(u),g=new cl(xe.min(),new Map,new et(De),h,m);await Zv(s,g),s.mu=s.mu.remove(u),s.fu.delete(e),Bf(s)}else await Hd(s.localStore,e,!1).then((()=>Qd(s,e,t))).catch(Oo)}async function Lx(r,e){const t=Ce(r),s=e.batch.batchId;try{const o=await HA(t.localStore,e);t0(t,s,null),e0(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await fl(t,o)}catch(o){await Oo(o)}}async function Mx(r,e,t){const s=Ce(r);try{const o=await(function(h,m){const g=Ce(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let T;return g.mutationQueue.lookupMutationBatch(_,m).next((I=>(ze(I!==null,37113),T=I.keys(),g.mutationQueue.removeMutationBatch(_,I)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,T,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,T))).next((()=>g.localDocuments.getDocuments(_,T)))}))})(s.localStore,e);t0(s,e,t),e0(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await fl(s,o)}catch(o){await Oo(o)}}function e0(r,e){(r.yu.get(e)||[]).forEach((t=>{t.resolve()})),r.yu.delete(e)}function t0(r,e,t){const s=Ce(r);let o=s.pu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.pu[s.currentUser.toKey()]=o}}function Qd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Vu.get(e))r.Au.delete(s),t&&r.Ru.Du(s,t);r.Vu.delete(e),r.isPrimaryClient&&r.gu.Gr(e).forEach((s=>{r.gu.containsKey(s)||n0(r,s)}))}function n0(r,e){r.du.delete(e.path.canonicalString());const t=r.mu.get(e);t!==null&&(Vf(r.remoteStore,t),r.mu=r.mu.remove(e),r.fu.delete(t),Bf(r))}function Ny(r,e,t){for(const s of t)s instanceof Yv?(r.gu.addReference(s.key,e),jx(r,s)):s instanceof Jv?(se(zf,"Document no longer in limbo: "+s.key),r.gu.removeReference(s.key,e),r.gu.containsKey(s.key)||n0(r,s.key)):Te(19791,{Cu:s})}function jx(r,e){const t=e.key,s=t.path.canonicalString();r.mu.get(t)||r.du.has(s)||(se(zf,"New document in limbo: "+t),r.du.add(s),Bf(r))}function Bf(r){for(;r.du.size>0&&r.mu.size<r.maxConcurrentLimboResolutions;){const e=r.du.values().next().value;r.du.delete(e);const t=new ge(Ge.fromString(e)),s=r.wu.next();r.fu.set(s,new Rx(t)),r.mu=r.mu.insert(t,s),zv(r.remoteStore,new Lr(lr(Sf(t.path)),s,"TargetPurposeLimboResolution",_c.ce))}}async function fl(r,e,t){const s=Ce(r),o=[],u=[],h=[];s.Au.isEmpty()||(s.Au.forEach(((m,g)=>{h.push(s.bu(g,e,t).then((_=>{var T;if((_||t)&&s.isPrimaryClient){const I=_?!_.fromCache:(T=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:T.current;s.sharedClientState.updateQueryState(g.targetId,I?"current":"not-current")}if(_){o.push(_);const I=Df.Es(g.targetId,_);u.push(I)}})))})),await Promise.all(h),s.Ru.H_(o),await(async function(g,_){const T=Ce(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>$.forEach(_,(D=>$.forEach(D.Ts,(z=>T.persistence.referenceDelegate.addReference(I,D.targetId,z))).next((()=>$.forEach(D.Is,(z=>T.persistence.referenceDelegate.removeReference(I,D.targetId,z)))))))))}catch(I){if(!Lo(I))throw I;se(bf,"Failed to update sequence numbers: "+I)}for(const I of _){const D=I.targetId;if(!I.fromCache){const z=T.vs.get(D),X=z.snapshotVersion,J=z.withLastLimboFreeSnapshotVersion(X);T.vs=T.vs.insert(D,J)}}})(s.localStore,u))}async function Fx(r,e){const t=Ce(r);if(!t.currentUser.isEqual(e)){se(zf,"User change. New user:",e.toKey());const s=await Mv(t.localStore,e);t.currentUser=e,(function(u,h){u.yu.forEach((m=>{m.forEach((g=>{g.reject(new re(B.CANCELLED,h))}))})),u.yu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await fl(t,s.Ns)}}function Ux(r,e){const t=Ce(r),s=t.fu.get(e);if(s&&s.Eu)return be().add(s.key);{let o=be();const u=t.Vu.get(e);if(!u)return o;for(const h of u){const m=t.Au.get(h);o=o.unionWith(m.view.ou)}return o}}function r0(r){const e=Ce(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ux.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ox.bind(null,e),e.Ru.H_=Ix.bind(null,e.eventManager),e.Ru.Du=Sx.bind(null,e.eventManager),e}function zx(r){const e=Ce(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mx.bind(null,e),e}class hc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ac(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return WA(this.persistence,new zA,e.initialUser,this.serializer)}xu(e){return new Lv(Nf.Vi,this.serializer)}Mu(e){return new JA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hc.provider={build:()=>new hc};class Bx extends hc{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){ze(this.persistence.referenceDelegate instanceof uc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new xA(s,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new Lv((s=>uc.Vi(s,t)),this.serializer)}}class Yd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Py(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fx.bind(null,this.syncEngine),await wx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Tx})()}createDatastore(e){const t=Ac(e.databaseInfo.databaseId),s=nx(e.databaseInfo);return ax(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new ux(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>Py(this.syncEngine,t,0)),(function(){return Sy.v()?new Sy:new XA})())}createSyncEngine(e,t){return(function(o,u,h,m,g,_,T){const I=new Cx(o,u,h,m,g,_);return T&&(I.Su=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Ce(o);se(dr,"RemoteStore shutting down."),u.da.add(5),await dl(u),u.fa.shutdown(),u.ga.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Yd.provider={build:()=>new Yd};/**
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
 */class i0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):zr("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Oi="FirestoreClient";class $x{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=Bt.UNAUTHENTICATED,this.clientId=_f.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{se(Oi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(se(Oi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ff(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function wd(r,e){r.asyncQueue.verifyOperationInProgress(),se(Oi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Mv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Dy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Wx(r);se(Oi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>xy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>xy(e.remoteStore,o))),r._onlineComponents=e}async function Wx(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se(Oi,"Using user provided OfflineComponentProvider");try{await wd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Es("Error using user provided cache. Falling back to memory cache: "+t),await wd(r,new hc)}}else se(Oi,"Using default OfflineComponentProvider"),await wd(r,new Bx(void 0));return r._offlineComponents}async function s0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se(Oi,"Using user provided OnlineComponentProvider"),await Dy(r,r._uninitializedComponentsProvider._online)):(se(Oi,"Using default OnlineComponentProvider"),await Dy(r,new Yd))),r._onlineComponents}function Hx(r){return s0(r).then((e=>e.syncEngine))}async function o0(r){const e=await s0(r),t=e.eventManager;return t.onListen=kx.bind(null,e.syncEngine),t.onUnlisten=Dx.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Px.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bx.bind(null,e.syncEngine),t}function qx(r,e,t={}){const s=new jr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,_){const T=new i0({next:D=>{T.Ku(),h.enqueueAndForget((()=>Gv(u,I)));const z=D.docs.has(m);!z&&D.fromCache?_.reject(new re(B.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&D.fromCache&&g&&g.source==="server"?_.reject(new re(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(D)},error:D=>_.reject(D)}),I=new Qv(Sf(m.path),T,{includeMetadataChanges:!0,Wa:!0});return Kv(u,I)})(await o0(r),r.asyncQueue,e,t,s))),s.promise}function Kx(r,e,t={}){const s=new jr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,_){const T=new i0({next:D=>{T.Ku(),h.enqueueAndForget((()=>Gv(u,I))),D.fromCache&&g.source==="server"?_.reject(new re(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(D)},error:D=>_.reject(D)}),I=new Qv(m,T,{includeMetadataChanges:!0,Wa:!0});return Kv(u,I)})(await o0(r),r.asyncQueue,e,t,s))),s.promise}function Gx(r,e){const t=new jr;return r.asyncQueue.enqueueAndForget((async()=>Vx(await Hx(r),e,t))),t.promise}/**
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
 */function a0(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Qx="ComponentProvider",by=new Map;function Yx(r,e,t,s,o){return new mS(r,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,a0(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const l0="firestore.googleapis.com",Vy=!0;class Oy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new re(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=l0,this.ssl=Vy}else this.host=e.host,this.ssl=e.ssl??Vy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ov;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<SA)throw new re(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=a0(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new G1;switch(s.type){case"firstParty":return new X1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=by.get(t);s&&(se(Qx,"Removing Datastore"),by.delete(t),s.terminate())})(this),Promise.resolve()}}function Jx(r,e,t,s={}){var _;r=Fn(r,Cc);const o=rl(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&Zy(`https://${m}`),u.host!==l0&&u.host!==m&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:m,ssl:o,emulatorOptions:s};if(!gs(g,h)&&(r._setSettings(g),s.mockUserToken)){let T,I;if(typeof s.mockUserToken=="string")T=s.mockUserToken,I=Bt.MOCK_USER;else{T=Zw(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new re(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new Bt(D)}r._authCredentials=new Q1(new q_(T,I))}}/**
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
 */class As{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new As(this.firestore,e,this._query)}}class ht{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}toJSON(){return{type:ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ll(t,ht._jsonSchema))return new ht(e,s||null,new ge(Ge.fromString(t.referencePath)))}}ht._jsonSchemaVersion="firestore/documentReference/1.0",ht._jsonSchema={type:yt("string",ht._jsonSchemaVersion),referencePath:yt("string")};class Ci extends As{constructor(e,t,s){super(e,t,Sf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new ge(e))}withConverter(e){return new Ci(this.firestore,e,this._path)}}function Ed(r,e,...t){if(r=_t(r),K_("collection","path",e),r instanceof Cc){const s=Ge.fromString(e,...t);return Gg(s),new Ci(r,null,s)}{if(!(r instanceof ht||r instanceof Ci))throw new re(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return Gg(s),new Ci(r.firestore,null,s)}}function ds(r,e,...t){if(r=_t(r),arguments.length===1&&(e=_f.newId()),K_("doc","path",e),r instanceof Cc){const s=Ge.fromString(e,...t);return Kg(s),new ht(r,null,new ge(s))}{if(!(r instanceof ht||r instanceof Ci))throw new re(B.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return Kg(s),new ht(r.firestore,r instanceof Ci?r.converter:null,new ge(s))}}/**
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
 */const Ly="AsyncQueue";class My{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Fv(this,"async_queue_retry"),this.lc=()=>{const s=vd();s&&se(Ly,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.hc=e;const t=vd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=vd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const t=new jr;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!Lo(e))throw e;se(Ly,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const t=this.hc.then((()=>(this.ac=!0,e().catch((s=>{throw this._c=s,this.ac=!1,zr("INTERNAL UNHANDLED ERROR: ",jy(s)),s})).then((s=>(this.ac=!1,s))))));return this.hc=t,t}enqueueAfterDelay(e,t,s){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const o=jf.createAndSchedule(this,e,t,s,(u=>this.Ec(u)));return this.oc.push(o),o}Pc(){this._c&&Te(47125,{Rc:jy(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function jy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class xs extends Cc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new My,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new My(e),this._firestoreClient=void 0,await e}}}function Xx(r,e){const t=typeof r=="object"?r:r_(),s=typeof r=="string"?r:ic,o=sf(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Jw("firestore");u&&Jx(o,...u)}return o}function $f(r){if(r._terminated)throw new re(B.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Zx(r),r._firestoreClient}function Zx(r){var s,o,u,h;const e=r._freezeSettings(),t=Yx(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new $x(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}})(r._componentsProvider))}/**
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
 */class Tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tn(Vt.fromBase64String(e))}catch(t){throw new re(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Tn(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ll(e,Tn._jsonSchema))return Tn.fromBase64String(e.bytes)}}Tn._jsonSchemaVersion="firestore/bytes/1.0",Tn._jsonSchema={type:yt("string",Tn._jsonSchemaVersion),bytes:yt("string")};/**
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
 */class Wf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class kc{constructor(e){this._methodName=e}}/**
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
 */class cr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:cr._jsonSchemaVersion}}static fromJSON(e){if(ll(e,cr._jsonSchema))return new cr(e.latitude,e.longitude)}}cr._jsonSchemaVersion="firestore/geoPoint/1.0",cr._jsonSchema={type:yt("string",cr._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
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
 */class jn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:jn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ll(e,jn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new jn(e.vectorValues);throw new re(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}jn._jsonSchemaVersion="firestore/vectorValue/1.0",jn._jsonSchema={type:yt("string",jn._jsonSchemaVersion),vectorValues:yt("object")};/**
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
 */const eR=/^__.*__$/;class tR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Mi(e,this.data,this.fieldMask,t,this.fieldTransforms):new ul(e,this.data,t,this.fieldTransforms)}}class u0{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Mi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function c0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{dataSource:r})}}class Hf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.fc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Hf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.wc(e),s}Sc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.fc(),s}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return dc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(c0(this.dataSource)&&eR.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class nR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ac(e)}V(e,t,s,o=!1){return new Hf({dataSource:e,methodName:t,targetDoc:s,path:bt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pc(r){const e=r._freezeSettings(),t=Ac(r._databaseId);return new nR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function h0(r,e,t,s,o,u={}){const h=r.V(u.merge||u.mergeFields?2:0,e,t,o);Kf("Data must be an object, but it was:",h,s);const m=d0(s,h);let g,_;if(u.merge)g=new dn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const T=[];for(const I of u.mergeFields){const D=Ts(e,I,t);if(!h.contains(D))throw new re(B.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);m0(T,D)||T.push(D)}g=new dn(T),_=h.fieldTransforms.filter((I=>g.covers(I.field)))}else g=null,_=h.fieldTransforms;return new tR(new en(m),g,_)}class Nc extends kc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nc}}class qf extends kc{_toFieldTransform(e){return new WS(e.path,new Xa)}isEqual(e){return e instanceof qf}}function rR(r,e,t,s){const o=r.V(1,e,t);Kf("Data must be an object, but it was:",o,s);const u=[],h=en.empty();Li(s,((g,_)=>{const T=p0(e,g,t);_=_t(_);const I=o.Sc(T);if(_ instanceof Nc)u.push(T);else{const D=pl(_,I);D!=null&&(u.push(T),h.set(T,D))}}));const m=new dn(u);return new u0(h,m,o.fieldTransforms)}function iR(r,e,t,s,o,u){const h=r.V(1,e,t),m=[Ts(e,s,t)],g=[o];if(u.length%2!=0)throw new re(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let D=0;D<u.length;D+=2)m.push(Ts(e,u[D])),g.push(u[D+1]);const _=[],T=en.empty();for(let D=m.length-1;D>=0;--D)if(!m0(_,m[D])){const z=m[D];let X=g[D];X=_t(X);const J=h.Sc(z);if(X instanceof Nc)_.push(z);else{const q=pl(X,J);q!=null&&(_.push(z),T.set(z,q))}}const I=new dn(_);return new u0(T,I,h.fieldTransforms)}function sR(r,e,t,s=!1){return pl(t,r.V(s?4:3,e))}function pl(r,e){if(f0(r=_t(r)))return Kf("Unsupported field value:",e,r),d0(r,e);if(r instanceof kc)return(function(s,o){if(!c0(o.dataSource))throw o.Dc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Dc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=pl(m,o.bc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(r,e)}return(function(s,o){if((s=_t(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return zS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Xe.fromDate(s);return{timestampValue:lc(o.serializer,u)}}if(s instanceof Xe){const u=new Xe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:lc(o.serializer,u)}}if(s instanceof cr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Tn)return{bytesValue:Rv(o.serializer,s._byteString)};if(s instanceof ht){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Dc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:kf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof jn)return(function(h,m){const g=h instanceof jn?h.toArray():h;return{mapValue:{fields:{[nv]:{stringValue:rv},[sc]:{arrayValue:{values:g.map((T=>{if(typeof T!="number")throw m.Dc("VectorValues must only contain numeric values.");return Af(m.serializer,T)}))}}}}}})(s,o);if(Vv(s))return s._toProto(o.serializer);throw o.Dc(`Unsupported field value: ${yc(s)}`)})(r,e)}function d0(r,e){const t={};return Y_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Li(r,((s,o)=>{const u=pl(o,e.yc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function f0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Xe||r instanceof cr||r instanceof Tn||r instanceof ht||r instanceof kc||r instanceof jn||Vv(r))}function Kf(r,e,t){if(!f0(t)||!G_(t)){const s=yc(t);throw s==="an object"?e.Dc(r+" a custom object"):e.Dc(r+" "+s)}}function Ts(r,e,t){if((e=_t(e))instanceof Wf)return e._internalPath;if(typeof e=="string")return p0(r,e);throw dc("Field path arguments must be of type string or ",r,!1,void 0,t)}const oR=new RegExp("[~\\*/\\[\\]]");function p0(r,e,t){if(e.search(oR)>=0)throw dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Wf(...e.split("."))._internalPath}catch{throw dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function dc(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new re(B.INVALID_ARGUMENT,m+r+g)}function m0(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class aR{convertValue(e,t="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Li(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[sc].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>ct(h.doubleValue)));return new jn(t)}convertGeoPoint(e){return new cr(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=wc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const t=Pi(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);ze(bv(s),9688,{name:e});const o=new Qa(s.get(1),s.get(3)),u=new ge(s.popFirst(5));return o.isEqual(t)||zr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */class g0 extends aR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,t)}}function lR(){return new qf("serverTimestamp")}const Fy="@firebase/firestore",Uy="4.14.1";/**
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
 */class y0{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ts("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class uR extends y0{data(){return super.data()}}/**
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
 */function cR(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new re(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gf{}class _0 extends Gf{}function zy(r,e,...t){let s=[];e instanceof Gf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((g=>g instanceof Qf)).length,m=u.filter((g=>g instanceof Dc)).length;if(h>1||h>0&&m>0)throw new re(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class Dc extends _0{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Dc(e,t,s)}_apply(e){const t=this._parse(e);return v0(e._query,t),new As(e.firestore,e.converter,Fd(e._query,t))}_parse(e){const t=Pc(e.firestore);return(function(u,h,m,g,_,T,I){let D;if(_.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new re(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){Wy(I,T);const X=[];for(const J of I)X.push($y(g,u,J));D={arrayValue:{values:X}}}else D=$y(g,u,I)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||Wy(I,T),D=sR(m,h,I,T==="in"||T==="not-in");return gt.create(_,T,D)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function hR(r,e,t){const s=e,o=Ts("where",r);return Dc._create(o,s,t)}class Qf extends Gf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Un.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)v0(h,g),h=Fd(h,g)})(e._query,t),new As(e.firestore,e.converter,Fd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yf extends _0{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Yf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new re(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new re(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ja(u,h)})(e._query,this._field,this._direction);return new As(e.firestore,e.converter,bS(e._query,t))}}function By(r,e="asc"){const t=e,s=Ts("orderBy",r);return Yf._create(s,t)}function $y(r,e,t){if(typeof(t=_t(t))=="string"){if(t==="")throw new re(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hv(e)&&t.indexOf("/")!==-1)throw new re(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!ge.isDocumentKey(s))throw new re(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ny(r,new ge(s))}if(t instanceof ht)return ny(r,t._key);throw new re(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yc(t)}.`)}function Wy(r,e){if(!Array.isArray(r)||r.length===0)throw new re(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function v0(r,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new re(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function w0(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Fa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ms extends y0{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ts("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ms._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ms._jsonSchemaVersion="firestore/documentSnapshot/1.0",ms._jsonSchema={type:yt("string",ms._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class Ku extends ms{data(e={}){return super.data(e)}}class So{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Fa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ku(this._firestore,this._userDataWriter,s.key,s,new Fa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Ku(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Fa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new Ku(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Fa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,T=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),T=h.indexOf(m.doc.key)),{type:dR(m.type),doc:g,oldIndex:_,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=So._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_f.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function dR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:r})}}/**
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
 */So._jsonSchemaVersion="firestore/querySnapshot/1.0",So._jsonSchema={type:yt("string",So._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};/**
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
 */function fR(r){r=Fn(r,ht);const e=Fn(r.firestore,xs),t=$f(e);return qx(t,r._key).then((s=>_R(e,r,s)))}function pR(r){r=Fn(r,As);const e=Fn(r.firestore,xs),t=$f(e),s=new g0(e);return cR(r._query),Kx(t,r._query).then((o=>new So(e,s,r,o)))}function mR(r,e,t){r=Fn(r,ht);const s=Fn(r.firestore,xs),o=w0(r.converter,e),u=Pc(s);return bc(s,[h0(u,"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,In.none())])}function Td(r,e,t,...s){r=Fn(r,ht);const o=Fn(r.firestore,xs),u=Pc(o);let h;return h=typeof(e=_t(e))=="string"||e instanceof Wf?iR(u,"updateDoc",r._key,e,t,s):rR(u,"updateDoc",r._key,e),bc(o,[h.toMutation(r._key,In.exists(!0))])}function gR(r){return bc(Fn(r.firestore,xs),[new xf(r._key,In.none())])}function yR(r,e){const t=Fn(r.firestore,xs),s=ds(r),o=w0(r.converter,e),u=Pc(r.firestore);return bc(t,[h0(u,"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,In.exists(!1))]).then((()=>s))}function bc(r,e){const t=$f(r);return Gx(t,e)}function _R(r,e,t){const s=t.docs.get(e._key),o=new g0(r);return new ms(r,o,e._key,s,new Fa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){K1(Do),xo(new ys("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new xs(new Y1(s.getProvider("auth-internal")),new Z1(h,s.getProvider("app-check-internal")),gS(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),xi(Fy,Uy,e),xi(Fy,Uy,"esm2020")})();const vR={apiKey:"AIzaSyCAaT4WAVfQ1x-l1NvaaGB4nVMHEQDzigA",authDomain:"gestion-de-solicitudes-7ca4f.firebaseapp.com",projectId:"gestion-de-solicitudes-7ca4f",storageBucket:"gestion-de-solicitudes-7ca4f.firebasestorage.app",messagingSenderId:"503400175578",appId:"1:503400175578:web:ca1f54c7438a46ebbc12e3"},E0=n_(vR),Dr=Xx(E0),Tt=$1(E0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ER=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Hy=r=>{const e=ER(r);return e.charAt(0).toUpperCase()+e.slice(1)},T0=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var TR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=Ne.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},g)=>Ne.createElement("svg",{ref:g,...TR,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:T0("lucide",o),...m},[...h.map(([_,T])=>Ne.createElement(_,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=(r,e)=>{const t=Ne.forwardRef(({className:s,...o},u)=>Ne.createElement(IR,{ref:u,iconNode:e,className:T0(`lucide-${wR(Hy(r))}`,`lucide-${r}`,s),...o}));return t.displayName=Hy(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],I0=st("arrow-left",SR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],xR=st("building-2",AR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],CR=st("chevron-down",RR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ao=st("circle-check",kR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Jd=st("clock",PR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Xd=st("eye-off",NR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DR=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Zd=st("eye",DR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]],VR=st("file-plus",bR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OR=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Id=st("file-text",OR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],MR=st("house",LR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jR=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ef=st("lock",jR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FR=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],UR=st("log-out",FR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Jf=st("mail",zR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BR=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],$R=st("message-square",BR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WR=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],HR=st("pencil",WR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qR=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],KR=st("refresh-cw",qR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GR=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],qy=st("shield",GR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],YR=st("ticket",QR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],XR=st("trash-2",JR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZR=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],eC=st("trending-up",ZR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],S0=st("triangle-alert",tC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],A0=st("user",nC);function x0({size:r=48}){return w.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[w.jsx("rect",{width:"48",height:"48",rx:"12",fill:"#1E3FAE"}),w.jsx("rect",{x:"7",y:"12",width:"34",height:"24",rx:"4",fill:"rgba(255,255,255,0.12)",stroke:"rgba(255,255,255,0.25)",strokeWidth:"1"}),w.jsx("circle",{cx:"7",cy:"24",r:"4",fill:"#1E3FAE"}),w.jsx("circle",{cx:"41",cy:"24",r:"4",fill:"#1E3FAE"}),w.jsx("line",{x1:"11",y1:"24",x2:"37",y2:"24",stroke:"rgba(255,255,255,0.2)",strokeWidth:"1",strokeDasharray:"2.5 2"}),w.jsx("text",{x:"24",y:"21",textAnchor:"middle",dominantBaseline:"middle",fontSize:"13",fontWeight:"800",fill:"white",fontFamily:"Inter, Arial, sans-serif",children:"G"}),w.jsx("text",{x:"24",y:"32",textAnchor:"middle",dominantBaseline:"middle",fontSize:"13",fontWeight:"800",fill:"white",fontFamily:"Inter, Arial, sans-serif",children:"S"})]})}function Vc({iconSize:r=38,layout:e="horizontal"}){return w.jsxs("div",{className:`flex ${e==="vertical"?"flex-col":"items-center"} gap-3 font-sans`,children:[w.jsx(x0,{size:r}),w.jsxs("div",{className:e==="vertical"?"text-center":"",children:[w.jsx("div",{className:"text-gray-900 text-[19px] font-extrabold leading-none tracking-tight",children:"GestioSync"}),w.jsx("div",{className:"text-gray-400 text-[11px] font-bold uppercase tracking-[0.1em] mt-1",children:"Plataforma"})]})]})}function R0({iconSize:r=38,layout:e="horizontal"}){return w.jsxs("div",{className:`flex ${e==="vertical"?"flex-col":"items-center"} gap-3 font-sans`,children:[w.jsx(x0,{size:r}),w.jsxs("div",{className:e==="vertical"?"text-center":"",children:[w.jsx("div",{className:"text-white text-[19px] font-extrabold leading-none tracking-tight",children:"GestioSync"}),w.jsx("div",{className:"text-white/60 text-[11px] font-bold uppercase tracking-[0.1em] mt-1",children:"Plataforma"})]})]})}function rC({onNavigateToRegister:r,onNavigateToForgot:e}){const[t,s]=Ne.useState(""),[o,u]=Ne.useState(""),[h,m]=Ne.useState(!1),[g,_]=Ne.useState(!1),[T,I]=Ne.useState(!1),[D,z]=Ne.useState({}),X=()=>{const ce={};return t?/\S+@\S+\.\S+/.test(t)||(ce.email="Formato inválido."):ce.email="Requerido.",o||(ce.password="Requerida."),ce},J=async()=>{const ce=X();if(Object.keys(ce).length>0){z(ce);return}z({}),I(!0);try{await kI(Tt,g?P_:pf),await xI(Tt,t,o)}catch(pe){I(!1);let ye="Ocurrió un error de autenticación.";pe instanceof fn&&(pe.code==="auth/invalid-credential"||pe.code==="auth/user-not-found"||pe.code==="auth/wrong-password"?ye="Credenciales inválidas.":pe.code==="auth/too-many-requests"&&(ye="Demasiados intentos. Intente más tarde.")),z({general:ye})}},q=async()=>{try{const ce=new br;await XI(Tt,ce)}catch{z({general:"Error en la validación con Google."})}};return w.jsxs("div",{className:"min-h-screen flex font-sans bg-indigo-50",children:[w.jsxs("div",{className:"hidden lg:flex flex-col justify-between w-[52%] relative overflow-hidden p-12 bg-gradient-to-br from-indigo-700 to-indigo-900",children:[w.jsx("div",{className:"absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white opacity-10"}),w.jsx("div",{className:"absolute bottom-10 -right-16 w-96 h-96 rounded-full bg-white opacity-10"}),w.jsx(R0,{iconSize:52}),w.jsxs("div",{className:"relative z-10",children:[w.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[w.jsx(qy,{size:18,className:"text-white/70"}),w.jsx("span",{className:"text-white/70 text-sm font-medium",children:"Arquitectura Segura"})]}),w.jsxs("h1",{className:"text-white text-4xl font-extrabold leading-tight mb-4",children:["Gestión de Solicitudes",w.jsx("br",{}),w.jsx("span",{className:"text-white/75 font-normal text-3xl",children:"Plataforma Centralizada"})]}),w.jsx("p",{className:"text-white/65 text-[15px] leading-relaxed max-w-[380px]",children:"Infraestructura optimizada para el registro, seguimiento y resolución de requerimientos institucionales."})]}),w.jsx("div",{className:"text-white/35 text-xs",children:"© 2026 GestioSync · Sistema Interno"})]}),w.jsx("div",{className:"flex-1 flex items-center justify-center p-6 lg:p-12",children:w.jsxs("div",{className:"w-full max-w-[420px]",children:[w.jsx("div",{className:"flex justify-center mb-8 lg:hidden",children:w.jsx(Vc,{iconSize:44,layout:"vertical"})}),w.jsxs("div",{className:"bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_40px_rgba(30,63,174,0.12)]",children:[w.jsxs("div",{className:"mb-8",children:[w.jsx("h2",{className:"text-gray-900 text-2xl font-extrabold mb-1",children:"Acceso al Sistema"}),w.jsx("p",{className:"text-gray-500 text-sm",children:"Ingrese sus credenciales corporativas."})]}),D.general&&w.jsxs("div",{className:"bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-6 border border-red-100 flex items-center gap-3",children:[w.jsx(qy,{size:18}),w.jsx("span",{className:"font-semibold",children:D.general})]}),w.jsxs("div",{className:"flex flex-col gap-5",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Correo Institucional"}),w.jsxs("div",{className:"relative",children:[w.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",children:w.jsx(Jf,{size:18})}),w.jsx("input",{type:"email",value:t,onChange:ce=>{s(ce.target.value),z(pe=>({...pe,email:void 0}))},className:`w-full py-3 pl-10 pr-3 border ${D.email?"border-red-400 bg-red-50":"border-gray-200 bg-slate-50"} rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white transition-colors`})]}),D.email&&w.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:D.email})]}),w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[w.jsx("label",{className:"text-gray-700 text-[13px] font-semibold",children:"Contraseña"}),w.jsx("button",{onClick:e,className:"text-indigo-600 text-xs font-semibold hover:underline",children:"¿Olvidó su clave?"})]}),w.jsxs("div",{className:"relative",children:[w.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",children:w.jsx(ef,{size:18})}),w.jsx("input",{type:h?"text":"password",value:o,onChange:ce=>{u(ce.target.value),z(pe=>({...pe,password:void 0}))},className:`w-full py-3 pl-10 pr-10 border ${D.password?"border-red-400 bg-red-50":"border-gray-200 bg-slate-50"} rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white transition-colors`}),w.jsx("button",{type:"button",onClick:()=>m(!h),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400",children:h?w.jsx(Xd,{size:18}):w.jsx(Zd,{size:18})})]}),D.password&&w.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:D.password})]}),w.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[w.jsx("input",{type:"checkbox",id:"remember",checked:g,onChange:ce=>_(ce.target.checked),className:"w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"}),w.jsx("label",{htmlFor:"remember",className:"text-gray-600 text-sm font-medium select-none cursor-pointer",children:"Mantener sesión iniciada"})]}),w.jsx("button",{onClick:J,disabled:T,className:"w-full bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors mt-2",children:T?"Validando...":"Iniciar Sesión"}),w.jsxs("div",{className:"relative flex items-center py-2",children:[w.jsx("div",{className:"flex-grow border-t border-gray-200"}),w.jsx("span",{className:"flex-shrink-0 mx-4 text-gray-400 text-xs font-medium uppercase tracking-wider",children:"Acceso Integrado"}),w.jsx("div",{className:"flex-grow border-t border-gray-200"})]}),w.jsxs("button",{onClick:q,className:"w-full flex items-center justify-center gap-3 bg-white text-gray-700 border border-gray-200 py-3 rounded-lg text-[14px] font-semibold hover:bg-gray-50 transition-colors shadow-sm",children:[w.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:[w.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),w.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),w.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),w.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),"Continuar con Google"]})]})]}),w.jsx("div",{className:"text-center mt-6",children:w.jsx("button",{onClick:r,className:"text-indigo-600 text-sm font-semibold hover:underline",children:"¿No tiene cuenta? Solicite acceso"})})]})})]})}const iC=["Tecnología e Innovación","Recursos Humanos","Finanzas y Contabilidad","Operaciones","Jurídica y Cumplimiento","Comunicaciones","Logística","Atención al Cliente","Dirección General"],Mu=({label:r,icon:e,type:t="text",placeholder:s,rightElement:o,value:u,error:h,onChange:m})=>w.jsxs("div",{children:[w.jsx("label",{className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:r}),w.jsxs("div",{className:"relative",children:[w.jsx("span",{className:`absolute left-3 top-1/2 -translate-y-1/2 ${h?"text-red-500":"text-gray-400"}`,children:e}),w.jsx("input",{type:t,placeholder:s,value:u,onChange:g=>m(g.target.value),className:`w-full py-3 pl-10 ${o?"pr-11":"pr-3"} border ${h?"border-red-400 bg-red-50":"border-gray-200 bg-slate-50"} rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white transition-colors`}),o&&w.jsx("span",{className:"absolute right-3 top-1/2 -translate-y-1/2",children:o})]}),h&&w.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:h})]});function sC({onNavigateToLogin:r}){const[e,t]=Ne.useState({fullName:"",email:"",password:"",confirmPassword:"",department:""}),[s,o]=Ne.useState({}),[u,h]=Ne.useState(!1),[m,g]=Ne.useState(!1),[_,T]=Ne.useState(!1),[I,D]=Ne.useState(!1),z=(ie,ke)=>{t(Se=>({...Se,[ie]:ke})),o(Se=>({...Se,[ie]:void 0}))},X=()=>{const ie={};return e.fullName.trim()||(ie.fullName="Requerido"),e.email?/\S+@\S+\.\S+/.test(e.email)||(ie.email="Formato inválido"):ie.email="Requerido",e.password?e.password.length<8&&(ie.password="Mínimo 8 caracteres"):ie.password="Requerida",e.confirmPassword?e.password!==e.confirmPassword&&(ie.confirmPassword="Las contraseñas no coinciden"):ie.confirmPassword="Requerido",e.department||(ie.department="Seleccione su área"),ie},J=async ie=>{ie.preventDefault();const ke=X();if(Object.keys(ke).length>0)return o(ke);T(!0);try{const k=(await AI(Tt,e.email,e.password)).user;await CI(k,{displayName:e.fullName}),await mR(ds(Dr,"usuarios",k.uid),{nombre:e.fullName,email:e.email,departamento:e.department,rol:"usuario",fechaRegistro:new Date}),D(!0),setTimeout(()=>r(),2500)}catch(Se){console.error("Registro fallido:",Se);let k="Error en la creación de cuenta.";Se instanceof fn&&Se.code==="auth/email-already-in-use"&&(k="Usuario ya registrado."),o({general:k})}finally{T(!1)}},ce=(ie=>{if(!ie)return 0;let ke=0;return ie.length>=8&&ke++,/[A-Z]/.test(ie)&&ke++,/[0-9]/.test(ie)&&ke++,/[^A-Za-z0-9]/.test(ie)&&ke++,ke})(e.password),pe=["","#DC3545","#F97316","#FBBF24","#22C55E"],ye=["","Débil","Regular","Buena","Óptima"];return I?w.jsx("div",{className:"min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans",children:w.jsxs("div",{className:"bg-white rounded-2xl p-10 w-full max-w-[420px] text-center shadow-[0_8px_40px_rgba(30,63,174,0.12)]",children:[w.jsx("div",{className:"mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-6",children:w.jsx(Ao,{size:44,className:"text-green-500"})}),w.jsx("h2",{className:"text-gray-900 text-2xl font-extrabold mb-3",children:"Registro exitoso"}),w.jsxs("p",{className:"text-gray-500 text-sm leading-relaxed mb-8",children:["Su cuenta corporativa ha sido aprovisionada correctamente con el correo ",w.jsx("strong",{className:"text-indigo-600",children:e.email}),"."]})]})}):w.jsx("div",{className:"min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans",children:w.jsxs("div",{className:"w-full max-w-[480px]",children:[w.jsx("div",{className:"flex justify-center mb-8",children:w.jsx(Vc,{iconSize:44,layout:"vertical"})}),w.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-[0_8px_40px_rgba(30,63,174,0.12)]",children:[w.jsxs("div",{className:"mb-7",children:[w.jsx("h2",{className:"text-gray-900 text-2xl font-extrabold mb-1",children:"Solicitud de Cuenta"}),w.jsx("p",{className:"text-gray-500 text-sm",children:"Registro para personal interno."})]}),s.general&&w.jsx("div",{className:"bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-6 border border-red-100 flex items-center gap-3",children:w.jsx("span",{className:"font-semibold",children:s.general})}),w.jsxs("div",{className:"flex flex-col gap-5",children:[w.jsx(Mu,{label:"Nombre y Apellido",icon:w.jsx(A0,{size:18}),placeholder:"Ej. Ana Martínez",value:e.fullName,error:s.fullName,onChange:ie=>z("fullName",ie)}),w.jsx(Mu,{label:"Correo Institucional",type:"email",icon:w.jsx(Jf,{size:18}),placeholder:"correo@empresa.com",value:e.email,error:s.email,onChange:ie=>z("email",ie)}),w.jsxs("div",{children:[w.jsx(Mu,{label:"Clave de Acceso",icon:w.jsx(ef,{size:18}),type:u?"text":"password",placeholder:"Mínimo 8 caracteres",value:e.password,error:s.password,onChange:ie=>z("password",ie),rightElement:w.jsx("button",{type:"button",onClick:()=>h(!u),className:"text-gray-400",children:u?w.jsx(Xd,{size:18}):w.jsx(Zd,{size:18})})}),e.password&&w.jsxs("div",{className:"mt-2",children:[w.jsx("div",{className:"flex gap-1",children:[1,2,3,4].map(ie=>w.jsx("div",{className:"flex-1 h-1 rounded transition-colors",style:{background:ie<=ce?pe[ce]:"#E5E7EB"}},ie))}),w.jsx("p",{className:"text-[11px] font-bold mt-1",style:{color:pe[ce]},children:ye[ce]})]})]}),w.jsx(Mu,{label:"Verificación de Clave",icon:w.jsx(ef,{size:18}),type:m?"text":"password",placeholder:"Reingrese su clave",value:e.confirmPassword,error:s.confirmPassword,onChange:ie=>z("confirmPassword",ie),rightElement:w.jsx("button",{type:"button",onClick:()=>g(!m),className:"text-gray-400",children:m?w.jsx(Xd,{size:18}):w.jsx(Zd,{size:18})})}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-gray-700 text-[13px] font-semibold mb-1.5",children:"Unidad Organizacional"}),w.jsxs("div",{className:"relative",children:[w.jsx("span",{className:`absolute left-3 top-1/2 -translate-y-1/2 ${s.department?"text-red-500":"text-gray-400"}`,children:w.jsx(xR,{size:18})}),w.jsxs("select",{value:e.department,onChange:ie=>z("department",ie.target.value),className:`w-full py-3 pl-10 pr-10 border ${s.department?"border-red-400 bg-red-50":"border-gray-200 bg-slate-50"} rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white appearance-none cursor-pointer transition-colors`,children:[w.jsx("option",{value:"",disabled:!0,children:"Seleccionar división..."}),iC.map(ie=>w.jsx("option",{value:ie,children:ie},ie))]}),w.jsx("span",{className:"absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400",children:w.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:w.jsx("path",{d:"M4 6l4 4 4-4"})})})]}),s.department&&w.jsx("p",{className:"text-red-500 text-xs mt-1 font-medium",children:s.department})]}),w.jsx("button",{onClick:J,disabled:_,className:"w-full mt-2 bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors",children:_?"Procesando...":"Crear Identidad"})]})]}),w.jsx("div",{className:"flex justify-center mt-6",children:w.jsxs("button",{onClick:r,className:"flex items-center gap-1.5 text-indigo-600 text-sm font-semibold hover:underline",children:[w.jsx(I0,{size:16})," Volver al portal"]})})]})})}const oC=["Soporte Técnico","Administrativa","Recursos Humanos","Financiera","Logística","Otro"],aC=["Alta","Media","Baja"],Sd={"En revisión":{color:"#B45309",bg:"#FEF3C7",icon:w.jsx(Jd,{size:12})},Aprobada:{color:"#15803D",bg:"#DCFCE7",icon:w.jsx(Ao,{size:12})},Pendiente:{color:"#6B7280",bg:"#F3F4F6",icon:w.jsx(Jd,{size:12})},Rechazada:{color:"#DC3545",bg:"#FEF2F2",icon:w.jsx(S0,{size:12})}},lC=(r,e)=>e?r==="Alta"?{border:"#FCA5A5",bg:"#FEF2F2",text:"#DC2626"}:r==="Media"?{border:"#FDE68A",bg:"#FEF3C7",text:"#D97706"}:r==="Baja"?{border:"#A7F3D0",bg:"#DCFCE7",text:"#16A34A"}:{border:"#E5E7EB",bg:"#F9FAFB",text:"#374151"}:{border:"#E5E7EB",bg:"#F9FAFB",text:"#6B7280"};function uC({onNavigateToLogin:r}){var Ae;const[e,t]=Ne.useState("nueva"),[s,o]=Ne.useState(null),[u,h]=Ne.useState([]),[m,g]=Ne.useState(!0),[_,T]=Ne.useState(null),[I,D]=Ne.useState(""),[z,X]=Ne.useState(null),[J,q]=Ne.useState(!1),[ce,pe]=Ne.useState(!1),[ye,ie]=Ne.useState({title:"",type:"Soporte Técnico",description:"",priority:"Media"}),[ke,Se]=Ne.useState({});Ne.useEffect(()=>{(async()=>{if(Tt.currentUser){const Q=ds(Dr,"usuarios",Tt.currentUser.uid),ne=await fR(Q);let le="usuario";if(ne.exists()){const we=ne.data();T(we),le=we.rol}k(le)}})()},[]);const k=async H=>{const Q=Tt.currentUser;if(Q){g(!0);try{const le=H==="admin"?zy(Ed(Dr,"solicitudes"),By("fecha","desc")):zy(Ed(Dr,"solicitudes"),hR("usuarioId","==",Q.uid),By("fecha","desc")),Oe=(await pR(le)).docs.map(qe=>{var An;const Ot=qe.data(),zn=(An=Ot.fecha)==null?void 0:An.toDate();return{id:qe.id,title:Ot.titulo||"Sin título",type:Ot.tipo||"Sin tipo",status:Ot.estado||"En revisión",date:zn?zn.toLocaleDateString("es-CO"):"Reciente",time:zn?zn.toLocaleTimeString("es-CO",{hour:"2-digit",minute:"2-digit"}):"",autorNombre:Ot.autorNombre||"Usuario",autorEmail:Ot.autorEmail||"",descripcion:Ot.descripcion||"Sin descripción detallada.",prioridad:Ot.prioridad||"Media",respuestaAdmin:Ot.respuestaAdmin||null}});h(Oe)}catch(ne){console.error("Error al obtener datos:",ne)}finally{g(!1)}}},A=async(H,Q)=>{try{await Td(ds(Dr,"solicitudes",H),{estado:Q}),h(ne=>ne.map(le=>le.id===H?{...le,status:Q}:le))}catch(ne){console.error("Error actualizando estado:",ne)}},R=async H=>{if(I.trim())try{await Td(ds(Dr,"solicitudes",H),{respuestaAdmin:I}),h(Q=>Q.map(ne=>ne.id===H?{...ne,respuestaAdmin:I}:ne)),D("")}catch(Q){console.error("Error al responder:",Q)}},b=async H=>{if(window.confirm("¿Está seguro de cancelar esta solicitud? La acción es irreversible."))try{await gR(ds(Dr,"solicitudes",H)),h(Q=>Q.filter(ne=>ne.id!==H)),o(null)}catch(Q){console.error("Error eliminando documento:",Q)}},P=H=>{ie({title:H.title,type:H.type,description:H.descripcion,priority:H.prioridad}),X(H.id),t("nueva"),o(null)},O=(H,Q)=>{ie(ne=>({...ne,[H]:Q})),Se(ne=>({...ne,[H]:void 0}))},x=()=>{const H={};return ye.title.trim()||(H.title="Requerido"),ye.type||(H.type="Requerido"),ye.description.trim()?ye.description.trim().length<20&&(H.description="Mínimo 20 caracteres"):H.description="Requerido",H},$e=async()=>{var Q,ne,le;const H=x();if(Object.keys(H).length>0){Se(H);return}q(!0);try{const we={titulo:ye.title,tipo:ye.type,descripcion:ye.description,prioridad:ye.priority};z?await Td(ds(Dr,"solicitudes",z),we):await yR(Ed(Dr,"solicitudes"),{...we,estado:"En revisión",usuarioId:(Q=Tt.currentUser)==null?void 0:Q.uid,autorNombre:((ne=Tt.currentUser)==null?void 0:ne.displayName)||"Usuario",autorEmail:((le=Tt.currentUser)==null?void 0:le.email)||"",fecha:lR()}),await k(_==null?void 0:_.rol),q(!1),pe(!0),X(null),setTimeout(()=>{t("mis"),pe(!1)},2e3)}catch(we){console.error("Error de escritura:",we),q(!1)}},ot=()=>{ie({title:"",type:"Soporte Técnico",description:"",priority:"Media"}),Se({}),pe(!1),X(null)},vt=[{id:"inicio",label:"Inicio",icon:w.jsx(MR,{size:20})},{id:"nueva",label:"Nueva Solicitud",icon:w.jsx(VR,{size:20})},{id:"mis",label:(_==null?void 0:_.rol)==="admin"?"Gestión Solicitudes":"Mis Solicitudes",icon:w.jsx(Id,{size:20})},{id:"perfil",label:"Perfil",icon:w.jsx(A0,{size:20})}],He=()=>{var H,Q,ne;return w.jsxs("div",{className:"flex flex-col h-full",children:[w.jsx("div",{className:"p-6 pb-8",children:w.jsx(R0,{iconSize:40})}),w.jsx("nav",{className:"flex-1 px-3",children:vt.map(le=>w.jsxs("button",{onClick:()=>{t(le.id),le.id==="nueva"&&!z&&ot()},className:"flex items-center gap-3 w-full px-4 py-3 rounded-xl mb-1 transition-all",style:{background:e===le.id?"rgba(255,255,255,0.18)":"transparent",color:e===le.id?"white":"rgba(255,255,255,0.65)",border:"none",cursor:"pointer",fontFamily:"Inter, sans-serif",fontSize:"14px",fontWeight:e===le.id?600:400,textAlign:"left"},children:[w.jsx("span",{style:{opacity:e===le.id?1:.7},children:le.icon}),le.label]},le.id))}),w.jsxs("div",{className:"p-4 mx-3 mb-4 rounded-xl",style:{background:"rgba(0,0,0,0.15)"},children:[w.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[w.jsx("div",{className:"w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",style:{background:"rgba(255,255,255,0.2)"},children:w.jsx("span",{style:{color:"white",fontSize:"14px",fontWeight:700},children:((Q=(H=Tt.currentUser)==null?void 0:H.displayName)==null?void 0:Q.charAt(0))||"U"})}),w.jsxs("div",{children:[w.jsx("div",{style:{color:"white",fontSize:"13px",fontWeight:600},children:(ne=Tt.currentUser)==null?void 0:ne.displayName}),w.jsx("div",{style:{color:"rgba(255,255,255,0.55)",fontSize:"11px"},children:(_==null?void 0:_.rol)==="admin"?"Administrador":(_==null?void 0:_.departamento)||"Usuario"})]})]}),w.jsxs("button",{onClick:()=>{bI(Tt),r()},className:"flex items-center gap-2 w-full px-3 py-2 rounded-lg",style:{background:"rgba(220,53,69,0.25)",color:"#FCA5A5",border:"1px solid rgba(220,53,69,0.3)",cursor:"pointer",fontSize:"13px",fontWeight:600,fontFamily:"Inter, sans-serif"},children:[w.jsx(UR,{size:15})," Cerrar Sesión"]})]})]})},te=()=>{const H=u.length,Q=u.filter(le=>le.status==="En revisión").length,ne=u.filter(le=>le.status==="Aprobada"||le.status==="Rechazada").length;return w.jsxs("div",{className:"p-8 max-w-7xl mx-auto",children:[w.jsxs("div",{className:"mb-8",children:[w.jsx("h2",{style:{color:"#111827",fontSize:"24px",fontWeight:700,letterSpacing:"-0.02em"},children:"Dashboard"}),w.jsx("p",{style:{color:"#6B7280",fontSize:"14px",marginTop:"4px"},children:(_==null?void 0:_.rol)==="admin"?"Resumen operativo general.":"Resumen de actividad."})]}),w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[{label:"Total Registros",value:H,icon:w.jsx(Id,{size:20}),color:"#1E3FAE",bg:"#EEF2FF"},{label:"En Proceso",value:Q,icon:w.jsx(Jd,{size:20}),color:"#D97706",bg:"#FEF3C7"},{label:"Finalizadas",value:ne,icon:w.jsx(Ao,{size:20}),color:"#059669",bg:"#D1FAE5"}].map((le,we)=>w.jsx("div",{className:"bg-white p-6 rounded-2xl border",style:{borderColor:"#F3F4F6"},children:w.jsxs("div",{className:"flex items-center gap-4",children:[w.jsx("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center",style:{background:le.bg,color:le.color},children:le.icon}),w.jsxs("div",{children:[w.jsx("div",{style:{color:"#6B7280",fontSize:"13px",fontWeight:500},children:le.label}),w.jsx("div",{style:{color:"#111827",fontSize:"24px",fontWeight:700,marginTop:"2px"},children:le.value})]})]})},we))})]})},me=()=>ce?w.jsx("div",{className:"flex items-center justify-center min-h-[400px]",children:w.jsxs("div",{className:"text-center max-w-sm",children:[w.jsx("div",{className:"flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-5",style:{background:"#DCFCE7"},children:w.jsx(Ao,{size:44,style:{color:"#22C55E"}})}),w.jsx("h2",{style:{color:"#111827",fontSize:"22px",fontWeight:800,marginBottom:"5px"},children:z?"Datos actualizados":"Solicitud procesada"})]})}):w.jsxs("div",{children:[w.jsx("div",{className:"mb-7",children:w.jsx("h1",{style:{color:"#111827",fontSize:"26px",fontWeight:800,marginBottom:"5px"},children:z?"Edición de registro":"Nuevo registro"})}),w.jsx("div",{className:"bg-white rounded-2xl p-6 lg:p-8 max-w-2xl",style:{boxShadow:"0 2px 20px rgba(30,63,174,0.08)"},children:w.jsxs("div",{className:"flex flex-col gap-5",children:[w.jsxs("div",{children:[w.jsx("label",{style:{display:"block",color:"#374151",fontSize:"13px",fontWeight:600,marginBottom:"6px"},children:"Título"}),w.jsx("input",{type:"text",value:ye.title,onChange:H=>O("title",H.target.value),style:{width:"100%",padding:"12px 14px",border:`1.5px solid ${ke.title?"#DC3545":"#E5E7EB"}`,borderRadius:"8px",outline:"none"}})]}),w.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[w.jsxs("div",{children:[w.jsx("label",{style:{display:"block",color:"#374151",fontSize:"13px",fontWeight:600,marginBottom:"6px"},children:"Categoría"}),w.jsxs("select",{value:ye.type,onChange:H=>O("type",H.target.value),style:{width:"100%",padding:"12px 14px",border:`1.5px solid ${ke.type?"#DC3545":"#E5E7EB"}`,borderRadius:"8px",outline:"none"},children:[w.jsx("option",{value:"",disabled:!0,children:"Seleccione"}),oC.map(H=>w.jsx("option",{value:H,children:H},H))]})]}),w.jsxs("div",{children:[w.jsx("label",{style:{display:"block",color:"#374151",fontSize:"13px",fontWeight:600,marginBottom:"6px"},children:"Prioridad"}),w.jsx("div",{className:"flex gap-2",children:aC.map(H=>{const Q=ye.priority===H,ne=lC(H,Q);return w.jsx("button",{type:"button",onClick:()=>O("priority",H),style:{flex:1,padding:"10px 6px",borderRadius:"8px",border:`1.5px solid ${ne.border}`,background:ne.bg,color:ne.text,fontWeight:Q?700:500,cursor:"pointer",transition:"all 0.2s"},children:H},H)})})]})]}),w.jsxs("div",{children:[w.jsx("label",{style:{display:"block",color:"#374151",fontSize:"13px",fontWeight:600,marginBottom:"6px"},children:"Detalles"}),w.jsx("textarea",{rows:5,value:ye.description,onChange:H=>O("description",H.target.value),style:{width:"100%",padding:"12px 14px",border:`1.5px solid ${ke.description?"#DC3545":"#E5E7EB"}`,borderRadius:"8px",outline:"none",resize:"vertical"}})]}),w.jsxs("div",{className:"flex justify-end gap-3 pt-2",children:[z&&w.jsx("button",{onClick:ot,className:"px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors",children:"Cancelar"}),w.jsx("button",{onClick:$e,disabled:J,style:{padding:"12px 24px",borderRadius:"8px",border:"none",background:J?"#93A8E8":"#1E3FAE",color:"white",fontWeight:700,cursor:J?"not-allowed":"pointer"},children:J?"Procesando...":"Guardar"})]})]})})]}),ae=()=>{const H=(_==null?void 0:_.rol)==="admin";return w.jsxs("div",{children:[w.jsx("div",{className:"flex items-center justify-between mb-7",children:w.jsx("h1",{style:{color:"#111827",fontSize:"26px",fontWeight:800},children:"Directorio de Solicitudes"})}),w.jsxs("div",{className:"bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100",children:[w.jsxs("div",{className:"flex items-center px-5 py-3 bg-gray-50 border-b border-gray-100",children:[w.jsx("span",{className:"text-gray-500 text-xs font-semibold flex-1",children:"Referencia"}),w.jsx("span",{className:"text-gray-500 text-xs font-semibold w-[120px]",children:"Status"}),H&&w.jsx("span",{className:"text-gray-500 text-xs font-semibold w-[90px] text-right",children:"Control"}),w.jsx("span",{className:"w-8"})]}),m?w.jsx("div",{className:"p-10 flex justify-center text-gray-400",children:"Cargando..."}):u.length===0?w.jsx("div",{className:"p-10 text-center text-gray-400",children:"Sin registros."}):u.map(Q=>{var le,we,Oe;const ne=s===Q.id;return w.jsxs("div",{className:"border-b border-gray-50 flex flex-col",children:[w.jsxs("div",{onClick:()=>{o(ne?null:Q.id),D("")},className:`flex items-center gap-4 p-5 cursor-pointer transition-colors ${ne?"bg-indigo-50/20":"hover:bg-gray-50"}`,children:[w.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-50 shrink-0",children:w.jsx(Id,{size:18,className:"text-indigo-600"})}),w.jsxs("div",{className:"flex-1 min-w-0",children:[w.jsx("div",{className:"text-gray-900 text-sm font-semibold truncate",children:Q.title}),w.jsxs("div",{className:"text-gray-400 text-xs mt-0.5",children:[w.jsx("span",{className:"font-medium",children:Q.id.slice(0,8)})," · ",Q.type,H&&w.jsxs("span",{className:"ml-2 text-indigo-500 font-medium bg-indigo-50 px-1.5 rounded",children:["De: ",Q.autorNombre]})]})]}),w.jsxs("div",{className:"flex items-center gap-1 px-3 py-1 rounded-full shrink-0 w-[120px] justify-center text-xs font-semibold",style:{background:(le=Sd[Q.status])==null?void 0:le.bg,color:(we=Sd[Q.status])==null?void 0:we.color},children:[(Oe=Sd[Q.status])==null?void 0:Oe.icon," ",Q.status]}),H&&w.jsx("div",{className:"flex items-center justify-end gap-2 w-[90px] shrink-0",children:Q.status==="En revisión"?w.jsxs(w.Fragment,{children:[w.jsx("button",{onClick:qe=>{qe.stopPropagation(),A(Q.id,"Aprobada")},className:"w-8 h-8 rounded border border-green-200 text-green-600 bg-green-50 hover:bg-green-100 flex justify-center items-center",children:w.jsx(Ao,{size:16})}),w.jsx("button",{onClick:qe=>{qe.stopPropagation(),A(Q.id,"Rechazada")},className:"w-8 h-8 rounded border border-red-200 text-red-600 bg-red-50 hover:bg-red-100 flex justify-center items-center",children:w.jsx(S0,{size:16})})]}):w.jsx("span",{className:"text-xs font-medium text-gray-300 mr-2",children:"Auditado"})}),w.jsx("div",{className:"w-8 flex justify-end text-gray-300",children:w.jsx(CR,{size:18,className:`transition-transform duration-200 ${ne?"rotate-180":""}`})})]}),ne&&w.jsx("div",{className:"px-5 pb-5 bg-indigo-50/10",children:w.jsxs("div",{className:"bg-white p-5 rounded-xl border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6",children:[w.jsxs("div",{className:"md:col-span-2",children:[w.jsx("h4",{className:"text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-2",children:"Desglose"}),w.jsx("p",{className:"text-gray-700 text-sm leading-relaxed whitespace-pre-wrap",children:Q.descripcion}),w.jsxs("div",{className:"mt-6 pt-5 border-t border-gray-100",children:[w.jsxs("h4",{className:"text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-3",children:[w.jsx($R,{size:12,className:"inline mr-1 -mt-0.5"})," Interacción Administrativa"]}),Q.respuestaAdmin?w.jsx("div",{className:"bg-blue-50 border border-blue-100 rounded-lg p-4 text-blue-800 text-sm",children:Q.respuestaAdmin}):H?w.jsxs("div",{className:"flex flex-col gap-3",children:[w.jsx("textarea",{placeholder:"Anotación interna o respuesta...",value:I,onChange:qe=>D(qe.target.value),className:"w-full p-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-indigo-500 focus:ring-1",rows:3}),w.jsx("button",{onClick:()=>R(Q.id),disabled:!I.trim(),className:"self-end px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:"Responder"})]}):w.jsx("p",{className:"text-gray-400 text-sm italic",children:"Sin notas registradas."})]}),!H&&Q.status==="En revisión"&&w.jsxs("div",{className:"mt-6 pt-5 border-t border-gray-100 flex justify-end gap-3",children:[w.jsxs("button",{onClick:()=>P(Q),className:"px-4 py-2 border border-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-50 flex items-center gap-2",children:[w.jsx(HR,{size:14})," Modificar"]}),w.jsxs("button",{onClick:()=>b(Q.id),className:"px-4 py-2 bg-red-50 text-red-600 border border-red-100 text-sm font-semibold rounded-lg hover:bg-red-100 flex items-center gap-2",children:[w.jsx(XR,{size:14})," Eliminar"]})]})]}),w.jsxs("div",{className:"flex flex-col gap-4",children:[w.jsxs("div",{children:[w.jsx("h4",{className:"text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-1",children:"Autor"}),w.jsx("div",{className:"text-gray-900 text-sm font-semibold",children:Q.autorNombre}),w.jsx("div",{className:"text-gray-500 text-xs",children:Q.autorEmail})]}),w.jsxs("div",{children:[w.jsx("h4",{className:"text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-1",children:"Timestamp"}),w.jsxs("div",{className:"text-gray-700 text-sm font-medium",children:[Q.date," ",w.jsx("span",{className:"text-gray-400 font-normal",children:"a las"})," ",Q.time]})]}),w.jsxs("div",{children:[w.jsx("h4",{className:"text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-1",children:"Severidad"}),w.jsx("span",{className:"inline-flex items-center px-2 py-1 rounded text-xs font-bold",style:{background:Q.prioridad==="Alta"?"#FEE2E2":Q.prioridad==="Media"?"#FEF3C7":"#DCFCE7",color:Q.prioridad==="Alta"?"#DC2626":Q.prioridad==="Media"?"#D97706":"#16A34A"},children:Q.prioridad})]})]})]})})]},Q.id)})]})]})},V=()=>{var H,Q,ne,le,we;return w.jsxs("div",{className:"p-8 max-w-3xl mx-auto",children:[w.jsx("h1",{className:"text-gray-900 text-2xl font-bold mb-6",children:"Configuración de Cuenta"}),w.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-sm border border-gray-100",children:[w.jsxs("div",{className:"flex items-center gap-5 pb-6 border-b border-gray-100",children:[w.jsx("div",{className:"w-16 h-16 rounded-full flex items-center justify-center bg-indigo-50 shrink-0",children:w.jsx("span",{className:"text-indigo-600 text-2xl font-bold",children:((Q=(H=Tt.currentUser)==null?void 0:H.displayName)==null?void 0:Q.charAt(0))||"U"})}),w.jsxs("div",{children:[w.jsx("div",{className:"text-gray-900 text-lg font-bold",children:(ne=Tt.currentUser)==null?void 0:ne.displayName}),w.jsx("div",{className:"text-gray-500 text-sm",children:(le=Tt.currentUser)==null?void 0:le.email}),w.jsxs("div",{className:"inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-semibold",children:[w.jsx(eC,{size:11})," ",(_==null?void 0:_.rol)==="admin"?"Superadmin":_==null?void 0:_.departamento]})]})]}),w.jsx("div",{className:"mt-6 flex flex-col gap-4",children:[{label:"ID Interno",value:(we=Tt.currentUser)==null?void 0:we.uid},{label:"Rol del sistema",value:(_==null?void 0:_.rol)==="admin"?"Administrador":"Usuario estándar"},{label:"División",value:(_==null?void 0:_.departamento)||"N/A"}].map((Oe,qe)=>w.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-50 last:border-0",children:[w.jsx("span",{className:"text-gray-500 text-sm font-medium",children:Oe.label}),w.jsx("span",{className:"text-gray-900 text-sm font-semibold",children:Oe.value})]},qe))})]})]})},W={inicio:te(),nueva:me(),mis:ae(),perfil:V()};return w.jsxs("div",{className:"flex min-h-screen font-sans bg-slate-50",children:[w.jsx("aside",{className:"hidden lg:flex flex-col w-64 shrink-0 fixed top-0 left-0 h-full bg-gradient-to-br from-indigo-700 to-indigo-900",children:w.jsx(He,{})}),w.jsxs("main",{className:"flex-1 lg:ml-64 flex flex-col min-h-screen",children:[w.jsx("header",{className:"sticky top-0 z-40 flex items-center justify-between px-8 h-16 bg-white border-b border-gray-100 shadow-sm",children:w.jsxs("div",{className:"hidden lg:flex items-center gap-2 text-sm",children:[w.jsx("span",{className:"text-gray-400",children:"Workspace"}),w.jsx("span",{className:"text-gray-300",children:"/"}),w.jsx("span",{className:"text-gray-900 font-semibold",children:(Ae=vt.find(H=>H.id===e))==null?void 0:Ae.label})]})}),w.jsx("div",{className:"flex-1 p-8",children:W[e]})]})]})}const cC={404:{code:"404",title:"¡Vaya! Página no encontrada",description:"La página que está buscando no existe o fue movida a otra dirección. Verifique la URL e intente de nuevo."},session:{code:"401",title:"¡Sesión expirada!",description:"Su sesión ha caducado por inactividad. Por seguridad, debe iniciar sesión nuevamente para continuar."},general:{code:"500",title:"¡Vaya! Algo salió mal",description:"Ocurrió un error interno en el sistema. Si el problema persiste, contacte al administrador."}};function hC({onNavigateBack:r,errorType:e="general"}){const t=cC[e];return w.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-indigo-50 font-sans",children:[w.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none translate-x-[30%] -translate-y-[30%]",style:{background:"radial-gradient(circle, #1E3FAE, transparent 70%)"}}),w.jsx("div",{className:"absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15 pointer-events-none -translate-x-[30%] translate-y-[30%]",style:{background:"radial-gradient(circle, #DC3545, transparent 70%)"}}),w.jsx("div",{className:"mb-10 relative z-10",children:w.jsx(Vc,{iconSize:40})}),w.jsxs("div",{className:"bg-white rounded-2xl p-8 lg:p-12 w-full max-w-[460px] text-center relative shadow-[0_8px_40px_rgba(30,63,174,0.12)]",children:[w.jsx("div",{className:"flex justify-center mb-6",children:w.jsxs("div",{className:"relative",children:[w.jsx("div",{className:"w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 border border-red-200",children:w.jsx(YR,{size:48,className:"text-red-500 opacity-80"})}),w.jsx("div",{className:"absolute top-0 right-0 w-8 h-8 bg-red-100 rounded-full border border-red-200"}),w.jsx("div",{className:"absolute bottom-4 left-0 w-4 h-4 bg-red-200 rounded-full"})]})}),w.jsx("div",{className:"flex justify-center mb-4",children:w.jsxs("span",{className:"px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold tracking-widest border border-red-200",children:["ERROR ",t.code]})}),w.jsx("h2",{className:"text-gray-900 text-2xl font-extrabold mb-3",children:t.title}),w.jsx("p",{className:"text-gray-500 text-sm leading-relaxed mb-8",children:t.description}),w.jsxs("button",{onClick:r,className:"flex items-center justify-center gap-2 w-full bg-indigo-600 text-white border-none rounded-lg py-3 px-6 text-[15px] font-bold cursor-pointer hover:bg-indigo-700 transition-colors",children:[w.jsx(KR,{size:18}),"Volver al inicio"]})]})]})}function dC({onNavigateToLogin:r}){const[e,t]=Ne.useState(""),[s,o]=Ne.useState(!1),[u,h]=Ne.useState(!1),[m,g]=Ne.useState(""),_=async T=>{if(T.preventDefault(),!e){g("Por favor, ingrese su correo electrónico.");return}o(!0),g("");try{await SI(Tt,e),h(!0)}catch(I){I instanceof fn&&I.code==="auth/user-not-found"?g("No hay ninguna cuenta registrada con este correo."):I instanceof fn&&I.code==="auth/invalid-email"?g("El formato del correo electrónico no es válido."):g("Ocurrió un error al procesar la solicitud. Intente más tarde.")}finally{o(!1)}};return u?w.jsx("div",{className:"min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans",children:w.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:w.jsxs("div",{className:"bg-white py-10 px-6 shadow-sm sm:rounded-2xl sm:px-10 border border-gray-100 text-center",children:[w.jsx("div",{className:"mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-50 mb-6",children:w.jsx(Ao,{className:"h-8 w-8 text-green-500"})}),w.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-3",children:"Revisa tu correo"}),w.jsxs("p",{className:"text-sm text-gray-500 mb-8 leading-relaxed",children:["Hemos enviado las instrucciones para recuperar tu contraseña a ",w.jsx("strong",{className:"text-gray-900",children:e}),"."]}),w.jsx("button",{onClick:r,className:"w-full flex justify-center py-3 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors",children:"Volver al inicio de sesión"})]})})}):w.jsxs("div",{className:"min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans",children:[w.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:w.jsx("div",{className:"flex justify-center mb-8",children:w.jsx(Vc,{})})}),w.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:w.jsxs("div",{className:"bg-white py-8 px-4 shadow-sm sm:rounded-2xl sm:px-10 border border-gray-100",children:[w.jsxs("button",{onClick:r,className:"flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-6 transition-colors",children:[w.jsx(I0,{className:"h-4 w-4 mr-1"}),"Volver atrás"]}),w.jsxs("div",{className:"mb-8",children:[w.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Recuperar contraseña"}),w.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Ingresa el correo electrónico asociado a tu cuenta para recibir un enlace de recuperación."})]}),w.jsxs("form",{className:"space-y-6",onSubmit:_,children:[w.jsxs("div",{children:[w.jsx("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-700",children:"Correo Electrónico"}),w.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[w.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:w.jsx(Jf,{className:"h-5 w-5 text-gray-400"})}),w.jsx("input",{id:"email",type:"email",required:!0,value:e,onChange:T=>t(T.target.value),className:`block w-full pl-10 py-3 sm:text-sm border rounded-lg outline-none transition-colors ${m?"border-red-300 focus:ring-red-500 focus:border-red-500":"border-gray-200 focus:ring-indigo-500 focus:border-indigo-500"}`,placeholder:"correo@institucion.co"})]}),m&&w.jsx("p",{className:"mt-2 text-sm text-red-600",children:m})]}),w.jsx("button",{type:"submit",disabled:s,className:"w-full flex justify-center py-3 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:s?"Enviando...":"Enviar enlace de recuperación"})]})]})})]})}function fC(){const[r,e]=Ne.useState("login"),[t,s]=Ne.useState("general"),[o,u]=Ne.useState(!0);Ne.useEffect(()=>{const m=DI(Tt,g=>{e(g?"dashboard":_=>_==="dashboard"?"login":_),u(!1)});return()=>m()},[]);const h=(m="general")=>{s(m),e("error")};return o?w.jsx("div",{className:"h-screen w-screen flex items-center justify-center bg-[#F9FAFB]",children:w.jsx("div",{className:"w-10 h-10 border-4 border-[#1E3FAE] border-t-transparent rounded-full animate-spin"})}):w.jsxs(w.Fragment,{children:[r==="login"&&w.jsx(rC,{onNavigateToRegister:()=>e("register"),onNavigateToError:()=>h("general"),onNavigateToDashboard:()=>e("dashboard"),onNavigateToForgot:()=>e("forgot")}),r==="register"&&w.jsx(sC,{onNavigateToLogin:()=>e("login"),onNavigateToError:()=>h("general")}),r==="dashboard"&&w.jsx(uC,{onNavigateToLogin:()=>e("login"),onNavigateToError:()=>h("session")}),r==="error"&&w.jsx(hC,{onNavigateBack:()=>e("login"),errorType:t}),r==="forgot"&&w.jsx(dC,{onNavigateToLogin:()=>e("login")})]})}Bw.createRoot(document.getElementById("root")).render(w.jsx(fC,{}));
