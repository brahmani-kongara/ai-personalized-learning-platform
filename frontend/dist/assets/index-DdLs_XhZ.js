(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function PE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zv={exports:{}},cu={},Hv={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),NE=Symbol.for("react.portal"),DE=Symbol.for("react.fragment"),LE=Symbol.for("react.strict_mode"),IE=Symbol.for("react.profiler"),UE=Symbol.for("react.provider"),FE=Symbol.for("react.context"),OE=Symbol.for("react.forward_ref"),kE=Symbol.for("react.suspense"),BE=Symbol.for("react.memo"),VE=Symbol.for("react.lazy"),hg=Symbol.iterator;function zE(t){return t===null||typeof t!="object"?null:(t=hg&&t[hg]||t["@@iterator"],typeof t=="function"?t:null)}var Gv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wv=Object.assign,jv={};function wa(t,e,n){this.props=t,this.context=e,this.refs=jv,this.updater=n||Gv}wa.prototype.isReactComponent={};wa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xv(){}Xv.prototype=wa.prototype;function gp(t,e,n){this.props=t,this.context=e,this.refs=jv,this.updater=n||Gv}var xp=gp.prototype=new Xv;xp.constructor=gp;Wv(xp,wa.prototype);xp.isPureReactComponent=!0;var pg=Array.isArray,Yv=Object.prototype.hasOwnProperty,vp={current:null},$v={key:!0,ref:!0,__self:!0,__source:!0};function qv(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Yv.call(e,i)&&!$v.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Go,type:t,key:s,ref:a,props:r,_owner:vp.current}}function HE(t,e){return{$$typeof:Go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _p(t){return typeof t=="object"&&t!==null&&t.$$typeof===Go}function GE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mg=/\/+/g;function Ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?GE(""+t.key):e.toString(36)}function $l(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Go:case NE:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ou(a,0):i,pg(r)?(n="",t!=null&&(n=t.replace(mg,"$&/")+"/"),$l(r,e,n,"",function(c){return c})):r!=null&&(_p(r)&&(r=HE(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(mg,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",pg(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Ou(s,o);a+=$l(s,e,n,l,r)}else if(l=zE(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Ou(s,o++),a+=$l(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function il(t,e,n){if(t==null)return t;var i=[],r=0;return $l(t,i,"","",function(s){return e.call(n,s,r++)}),i}function WE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},ql={transition:null},jE={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:ql,ReactCurrentOwner:vp};function Kv(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:il,forEach:function(t,e,n){il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return il(t,function(){e++}),e},toArray:function(t){return il(t,function(e){return e})||[]},only:function(t){if(!_p(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=wa;je.Fragment=DE;je.Profiler=IE;je.PureComponent=gp;je.StrictMode=LE;je.Suspense=kE;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jE;je.act=Kv;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Wv({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=vp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Yv.call(e,l)&&!$v.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Go,type:t.type,key:r,ref:s,props:i,_owner:a}};je.createContext=function(t){return t={$$typeof:FE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:UE,_context:t},t.Consumer=t};je.createElement=qv;je.createFactory=function(t){var e=qv.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:OE,render:t}};je.isValidElement=_p;je.lazy=function(t){return{$$typeof:VE,_payload:{_status:-1,_result:t},_init:WE}};je.memo=function(t,e){return{$$typeof:BE,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};je.unstable_act=Kv;je.useCallback=function(t,e){return mn.current.useCallback(t,e)};je.useContext=function(t){return mn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};je.useEffect=function(t,e){return mn.current.useEffect(t,e)};je.useId=function(){return mn.current.useId()};je.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return mn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};je.useRef=function(t){return mn.current.useRef(t)};je.useState=function(t){return mn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return mn.current.useTransition()};je.version="18.3.1";Hv.exports=je;var ie=Hv.exports;const XE=PE(ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YE=ie,$E=Symbol.for("react.element"),qE=Symbol.for("react.fragment"),KE=Object.prototype.hasOwnProperty,ZE=YE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QE={key:!0,ref:!0,__self:!0,__source:!0};function Zv(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)KE.call(e,i)&&!QE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$E,type:t,key:s,ref:a,props:r,_owner:ZE.current}}cu.Fragment=qE;cu.jsx=Zv;cu.jsxs=Zv;zv.exports=cu;var S=zv.exports,af={},Qv={exports:{}},Fn={},Jv={exports:{}},e_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,j){var Q=D.length;D.push(j);e:for(;0<Q;){var ne=Q-1>>>1,ae=D[ne];if(0<r(ae,j))D[ne]=j,D[Q]=ae,Q=ne;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var j=D[0],Q=D.pop();if(Q!==j){D[0]=Q;e:for(var ne=0,ae=D.length,He=ae>>>1;ne<He;){var Qe=2*(ne+1)-1,We=D[Qe],Z=Qe+1,oe=D[Z];if(0>r(We,Q))Z<ae&&0>r(oe,We)?(D[ne]=oe,D[Z]=Q,ne=Z):(D[ne]=We,D[Qe]=Q,ne=Qe);else if(Z<ae&&0>r(oe,Q))D[ne]=oe,D[Z]=Q,ne=Z;else break e}}return j}function r(D,j){var Q=D.sortIndex-j.sortIndex;return Q!==0?Q:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,u=3,p=!1,m=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=D)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function v(D){if(M=!1,y(D),!m)if(n(l)!==null)m=!0,Y(T);else{var j=n(c);j!==null&&z(v,j.startTime-D)}}function T(D,j){m=!1,M&&(M=!1,f(_),_=-1),p=!0;var Q=u;try{for(y(j),h=n(l);h!==null&&(!(h.expirationTime>j)||D&&!N());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,u=h.priorityLevel;var ae=ne(h.expirationTime<=j);j=t.unstable_now(),typeof ae=="function"?h.callback=ae:h===n(l)&&i(l),y(j)}else i(l);h=n(l)}if(h!==null)var He=!0;else{var Qe=n(c);Qe!==null&&z(v,Qe.startTime-j),He=!1}return He}finally{h=null,u=Q,p=!1}}var A=!1,b=null,_=-1,C=5,P=-1;function N(){return!(t.unstable_now()-P<C)}function F(){if(b!==null){var D=t.unstable_now();P=D;var j=!0;try{j=b(!0,D)}finally{j?V():(A=!1,b=null)}}else A=!1}var V;if(typeof x=="function")V=function(){x(F)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,O=$.port2;$.port1.onmessage=F,V=function(){O.postMessage(null)}}else V=function(){g(F,0)};function Y(D){b=D,A||(A=!0,V())}function z(D,j){_=g(function(){D(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,Y(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(u){case 1:case 2:case 3:var j=3;break;default:j=u}var Q=u;u=j;try{return D()}finally{u=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=u;u=D;try{return j()}finally{u=Q}},t.unstable_scheduleCallback=function(D,j,Q){var ne=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ne+Q:ne):Q=ne,D){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Q+ae,D={id:d++,callback:j,priorityLevel:D,startTime:Q,expirationTime:ae,sortIndex:-1},Q>ne?(D.sortIndex=Q,e(c,D),n(l)===null&&D===n(c)&&(M?(f(_),_=-1):M=!0,z(v,Q-ne))):(D.sortIndex=ae,e(l,D),m||p||(m=!0,Y(T))),D},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(D){var j=u;return function(){var Q=u;u=j;try{return D.apply(this,arguments)}finally{u=Q}}}})(e_);Jv.exports=e_;var JE=Jv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e1=ie,Un=JE;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t_=new Set,_o={};function xs(t,e){ca(t,e),ca(t+"Capture",e)}function ca(t,e){for(_o[t]=e,t=0;t<e.length;t++)t_.add(e[t])}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=Object.prototype.hasOwnProperty,t1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gg={},xg={};function n1(t){return of.call(xg,t)?!0:of.call(gg,t)?!1:t1.test(t)?xg[t]=!0:(gg[t]=!0,!1)}function i1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function r1(t,e,n,i){if(e===null||typeof e>"u"||i1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var yp=/[\-:]([a-z])/g;function Sp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yp,Sp);Qt[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yp,Sp);Qt[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yp,Sp);Qt[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mp(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(r1(e,n,r,i)&&(n=null),i||r===null?n1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var tr=e1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rl=Symbol.for("react.element"),ks=Symbol.for("react.portal"),Bs=Symbol.for("react.fragment"),Ep=Symbol.for("react.strict_mode"),lf=Symbol.for("react.profiler"),n_=Symbol.for("react.provider"),i_=Symbol.for("react.context"),wp=Symbol.for("react.forward_ref"),cf=Symbol.for("react.suspense"),uf=Symbol.for("react.suspense_list"),Tp=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),r_=Symbol.for("react.offscreen"),vg=Symbol.iterator;function La(t){return t===null||typeof t!="object"?null:(t=vg&&t[vg]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,ku;function Ka(t){if(ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ku=e&&e[1]||""}return`
`+ku+t}var Bu=!1;function Vu(t,e){if(!t||Bu)return"";Bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ka(t):""}function s1(t){switch(t.tag){case 5:return Ka(t.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 2:case 15:return t=Vu(t.type,!1),t;case 11:return t=Vu(t.type.render,!1),t;case 1:return t=Vu(t.type,!0),t;default:return""}}function df(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bs:return"Fragment";case ks:return"Portal";case lf:return"Profiler";case Ep:return"StrictMode";case cf:return"Suspense";case uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case i_:return(t.displayName||"Context")+".Consumer";case n_:return(t._context.displayName||"Context")+".Provider";case wp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tp:return e=t.displayName||null,e!==null?e:df(t.type)||"Memo";case pr:e=t._payload,t=t._init;try{return df(t(e))}catch{}}return null}function a1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return df(e);case 8:return e===Ep?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function o1(t){var e=s_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=o1(t))}function a_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=s_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ff(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _g(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function o_(t,e){e=e.checked,e!=null&&Mp(t,"checked",e,!1)}function hf(t,e){o_(t,e);var n=Nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&pf(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pf(t,e,n){(e!=="number"||Sc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Za=Array.isArray;function ea(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function mf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Za(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function l_(t,e){var n=Nr(e.value),i=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Mg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function c_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?c_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var al,u_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(al=al||document.createElement("div"),al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l1=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(t){l1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ro[e]=ro[t]})});function d_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ro.hasOwnProperty(t)&&ro[t]?(""+e).trim():e+"px"}function f_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=d_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var c1=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xf(t,e){if(e){if(c1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function vf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _f=null;function bp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yf=null,ta=null,na=null;function Eg(t){if(t=Xo(t)){if(typeof yf!="function")throw Error(se(280));var e=t.stateNode;e&&(e=pu(e),yf(t.stateNode,t.type,e))}}function h_(t){ta?na?na.push(t):na=[t]:ta=t}function p_(){if(ta){var t=ta,e=na;if(na=ta=null,Eg(t),e)for(t=0;t<e.length;t++)Eg(e[t])}}function m_(t,e){return t(e)}function g_(){}var zu=!1;function x_(t,e,n){if(zu)return t(e,n);zu=!0;try{return m_(t,e,n)}finally{zu=!1,(ta!==null||na!==null)&&(g_(),p_())}}function So(t,e){var n=t.stateNode;if(n===null)return null;var i=pu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Sf=!1;if(qi)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{Sf=!1}function u1(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var so=!1,Mc=null,Ec=!1,Mf=null,d1={onError:function(t){so=!0,Mc=t}};function f1(t,e,n,i,r,s,a,o,l){so=!1,Mc=null,u1.apply(d1,arguments)}function h1(t,e,n,i,r,s,a,o,l){if(f1.apply(this,arguments),so){if(so){var c=Mc;so=!1,Mc=null}else throw Error(se(198));Ec||(Ec=!0,Mf=c)}}function vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wg(t){if(vs(t)!==t)throw Error(se(188))}function p1(t){var e=t.alternate;if(!e){if(e=vs(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return wg(r),t;if(s===i)return wg(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function __(t){return t=p1(t),t!==null?y_(t):null}function y_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=y_(t);if(e!==null)return e;t=t.sibling}return null}var S_=Un.unstable_scheduleCallback,Tg=Un.unstable_cancelCallback,m1=Un.unstable_shouldYield,g1=Un.unstable_requestPaint,Dt=Un.unstable_now,x1=Un.unstable_getCurrentPriorityLevel,Ap=Un.unstable_ImmediatePriority,M_=Un.unstable_UserBlockingPriority,wc=Un.unstable_NormalPriority,v1=Un.unstable_LowPriority,E_=Un.unstable_IdlePriority,uu=null,bi=null;function _1(t){if(bi&&typeof bi.onCommitFiberRoot=="function")try{bi.onCommitFiberRoot(uu,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:M1,y1=Math.log,S1=Math.LN2;function M1(t){return t>>>=0,t===0?32:31-(y1(t)/S1|0)|0}var ol=64,ll=4194304;function Qa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Qa(o):(s&=a,s!==0&&(i=Qa(s)))}else a=n&~r,a!==0?i=Qa(a):s!==0&&(i=Qa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function E1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-li(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=E1(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function w_(){var t=ol;return ol<<=1,!(ol&4194240)&&(ol=64),t}function Hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function T1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Cp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function T_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var b_,Rp,A_,C_,R_,wf=!1,cl=[],Er=null,wr=null,Tr=null,Mo=new Map,Eo=new Map,gr=[],b1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bg(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(e.pointerId)}}function Ua(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xo(e),e!==null&&Rp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function A1(t,e,n,i,r){switch(e){case"focusin":return Er=Ua(Er,t,e,n,i,r),!0;case"dragenter":return wr=Ua(wr,t,e,n,i,r),!0;case"mouseover":return Tr=Ua(Tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Mo.set(s,Ua(Mo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Eo.set(s,Ua(Eo.get(s)||null,t,e,n,i,r)),!0}return!1}function P_(t){var e=Jr(t.target);if(e!==null){var n=vs(e);if(n!==null){if(e=n.tag,e===13){if(e=v_(n),e!==null){t.blockedOn=e,R_(t.priority,function(){A_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);_f=i,n.target.dispatchEvent(i),_f=null}else return e=Xo(n),e!==null&&Rp(e),t.blockedOn=n,!1;e.shift()}return!0}function Ag(t,e,n){Kl(t)&&n.delete(e)}function C1(){wf=!1,Er!==null&&Kl(Er)&&(Er=null),wr!==null&&Kl(wr)&&(wr=null),Tr!==null&&Kl(Tr)&&(Tr=null),Mo.forEach(Ag),Eo.forEach(Ag)}function Fa(t,e){t.blockedOn===e&&(t.blockedOn=null,wf||(wf=!0,Un.unstable_scheduleCallback(Un.unstable_NormalPriority,C1)))}function wo(t){function e(r){return Fa(r,t)}if(0<cl.length){Fa(cl[0],t);for(var n=1;n<cl.length;n++){var i=cl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Er!==null&&Fa(Er,t),wr!==null&&Fa(wr,t),Tr!==null&&Fa(Tr,t),Mo.forEach(e),Eo.forEach(e),n=0;n<gr.length;n++)i=gr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)P_(n),n.blockedOn===null&&gr.shift()}var ia=tr.ReactCurrentBatchConfig,bc=!0;function R1(t,e,n,i){var r=st,s=ia.transition;ia.transition=null;try{st=1,Pp(t,e,n,i)}finally{st=r,ia.transition=s}}function P1(t,e,n,i){var r=st,s=ia.transition;ia.transition=null;try{st=4,Pp(t,e,n,i)}finally{st=r,ia.transition=s}}function Pp(t,e,n,i){if(bc){var r=Tf(t,e,n,i);if(r===null)Qu(t,e,i,Ac,n),bg(t,i);else if(A1(r,t,e,n,i))i.stopPropagation();else if(bg(t,i),e&4&&-1<b1.indexOf(t)){for(;r!==null;){var s=Xo(r);if(s!==null&&b_(s),s=Tf(t,e,n,i),s===null&&Qu(t,e,i,Ac,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Qu(t,e,i,null,n)}}var Ac=null;function Tf(t,e,n,i){if(Ac=null,t=bp(i),t=Jr(t),t!==null)if(e=vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ac=t,null}function N_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x1()){case Ap:return 1;case M_:return 4;case wc:case v1:return 16;case E_:return 536870912;default:return 16}default:return 16}}var _r=null,Np=null,Zl=null;function D_(){if(Zl)return Zl;var t,e=Np,n=e.length,i,r="value"in _r?_r.value:_r.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Zl=r.slice(t,1<i?1-i:void 0)}function Ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function Cg(){return!1}function On(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ul:Cg,this.isPropagationStopped=Cg,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),e}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dp=On(Ta),jo=Et({},Ta,{view:0,detail:0}),N1=On(jo),Gu,Wu,Oa,du=Et({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oa&&(Oa&&t.type==="mousemove"?(Gu=t.screenX-Oa.screenX,Wu=t.screenY-Oa.screenY):Wu=Gu=0,Oa=t),Gu)},movementY:function(t){return"movementY"in t?t.movementY:Wu}}),Rg=On(du),D1=Et({},du,{dataTransfer:0}),L1=On(D1),I1=Et({},jo,{relatedTarget:0}),ju=On(I1),U1=Et({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),F1=On(U1),O1=Et({},Ta,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),k1=On(O1),B1=Et({},Ta,{data:0}),Pg=On(B1),V1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=H1[t])?!!e[t]:!1}function Lp(){return G1}var W1=Et({},jo,{key:function(t){if(t.key){var e=V1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lp,charCode:function(t){return t.type==="keypress"?Ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j1=On(W1),X1=Et({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ng=On(X1),Y1=Et({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lp}),$1=On(Y1),q1=Et({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),K1=On(q1),Z1=Et({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Q1=On(Z1),J1=[9,13,27,32],Ip=qi&&"CompositionEvent"in window,ao=null;qi&&"documentMode"in document&&(ao=document.documentMode);var ew=qi&&"TextEvent"in window&&!ao,L_=qi&&(!Ip||ao&&8<ao&&11>=ao),Dg=" ",Lg=!1;function I_(t,e){switch(t){case"keyup":return J1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function tw(t,e){switch(t){case"compositionend":return U_(e);case"keypress":return e.which!==32?null:(Lg=!0,Dg);case"textInput":return t=e.data,t===Dg&&Lg?null:t;default:return null}}function nw(t,e){if(Vs)return t==="compositionend"||!Ip&&I_(t,e)?(t=D_(),Zl=Np=_r=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return L_&&e.locale!=="ko"?null:e.data;default:return null}}var iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ig(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iw[t.type]:e==="textarea"}function F_(t,e,n,i){h_(i),e=Cc(e,"onChange"),0<e.length&&(n=new Dp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var oo=null,To=null;function rw(t){Y_(t,0)}function fu(t){var e=Gs(t);if(a_(e))return t}function sw(t,e){if(t==="change")return e}var O_=!1;if(qi){var Xu;if(qi){var Yu="oninput"in document;if(!Yu){var Ug=document.createElement("div");Ug.setAttribute("oninput","return;"),Yu=typeof Ug.oninput=="function"}Xu=Yu}else Xu=!1;O_=Xu&&(!document.documentMode||9<document.documentMode)}function Fg(){oo&&(oo.detachEvent("onpropertychange",k_),To=oo=null)}function k_(t){if(t.propertyName==="value"&&fu(To)){var e=[];F_(e,To,t,bp(t)),x_(rw,e)}}function aw(t,e,n){t==="focusin"?(Fg(),oo=e,To=n,oo.attachEvent("onpropertychange",k_)):t==="focusout"&&Fg()}function ow(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(To)}function lw(t,e){if(t==="click")return fu(e)}function cw(t,e){if(t==="input"||t==="change")return fu(e)}function uw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var di=typeof Object.is=="function"?Object.is:uw;function bo(t,e){if(di(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!of.call(e,r)||!di(t[r],e[r]))return!1}return!0}function Og(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kg(t,e){var n=Og(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Og(n)}}function B_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?B_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function V_(){for(var t=window,e=Sc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sc(t.document)}return e}function Up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dw(t){var e=V_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&B_(n.ownerDocument.documentElement,n)){if(i!==null&&Up(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=kg(n,s);var a=kg(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fw=qi&&"documentMode"in document&&11>=document.documentMode,zs=null,bf=null,lo=null,Af=!1;function Bg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Af||zs==null||zs!==Sc(i)||(i=zs,"selectionStart"in i&&Up(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),lo&&bo(lo,i)||(lo=i,i=Cc(bf,"onSelect"),0<i.length&&(e=new Dp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=zs)))}function dl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hs={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},$u={},z_={};qi&&(z_=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function hu(t){if($u[t])return $u[t];if(!Hs[t])return t;var e=Hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in z_)return $u[t]=e[n];return t}var H_=hu("animationend"),G_=hu("animationiteration"),W_=hu("animationstart"),j_=hu("transitionend"),X_=new Map,Vg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){X_.set(t,e),xs(e,[t])}for(var qu=0;qu<Vg.length;qu++){var Ku=Vg[qu],hw=Ku.toLowerCase(),pw=Ku[0].toUpperCase()+Ku.slice(1);Or(hw,"on"+pw)}Or(H_,"onAnimationEnd");Or(G_,"onAnimationIteration");Or(W_,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(j_,"onTransitionEnd");ca("onMouseEnter",["mouseout","mouseover"]);ca("onMouseLeave",["mouseout","mouseover"]);ca("onPointerEnter",["pointerout","pointerover"]);ca("onPointerLeave",["pointerout","pointerover"]);xs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xs("onBeforeInput",["compositionend","keypress","textInput","paste"]);xs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ja));function zg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,h1(i,e,void 0,t),t.currentTarget=null}function Y_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;zg(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;zg(r,o,c),s=l}}}if(Ec)throw t=Mf,Ec=!1,Mf=null,t}function mt(t,e){var n=e[Df];n===void 0&&(n=e[Df]=new Set);var i=t+"__bubble";n.has(i)||($_(e,t,2,!1),n.add(i))}function Zu(t,e,n){var i=0;e&&(i|=4),$_(n,t,i,e)}var fl="_reactListening"+Math.random().toString(36).slice(2);function Ao(t){if(!t[fl]){t[fl]=!0,t_.forEach(function(n){n!=="selectionchange"&&(mw.has(n)||Zu(n,!1,t),Zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fl]||(e[fl]=!0,Zu("selectionchange",!1,e))}}function $_(t,e,n,i){switch(N_(e)){case 1:var r=R1;break;case 4:r=P1;break;default:r=Pp}n=r.bind(null,e,n,t),r=void 0,!Sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Qu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Jr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}x_(function(){var c=s,d=bp(n),h=[];e:{var u=X_.get(t);if(u!==void 0){var p=Dp,m=t;switch(t){case"keypress":if(Ql(n)===0)break e;case"keydown":case"keyup":p=j1;break;case"focusin":m="focus",p=ju;break;case"focusout":m="blur",p=ju;break;case"beforeblur":case"afterblur":p=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=L1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=$1;break;case H_:case G_:case W_:p=F1;break;case j_:p=K1;break;case"scroll":p=N1;break;case"wheel":p=Q1;break;case"copy":case"cut":case"paste":p=k1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ng}var M=(e&4)!==0,g=!M&&t==="scroll",f=M?u!==null?u+"Capture":null:u;M=[];for(var x=c,y;x!==null;){y=x;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,f!==null&&(v=So(x,f),v!=null&&M.push(Co(x,v,y)))),g)break;x=x.return}0<M.length&&(u=new p(u,m,null,n,d),h.push({event:u,listeners:M}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==_f&&(m=n.relatedTarget||n.fromElement)&&(Jr(m)||m[Ki]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?Jr(m):null,m!==null&&(g=vs(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(M=Rg,v="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(M=Ng,v="onPointerLeave",f="onPointerEnter",x="pointer"),g=p==null?u:Gs(p),y=m==null?u:Gs(m),u=new M(v,x+"leave",p,n,d),u.target=g,u.relatedTarget=y,v=null,Jr(d)===c&&(M=new M(f,x+"enter",m,n,d),M.target=y,M.relatedTarget=g,v=M),g=v,p&&m)t:{for(M=p,f=m,x=0,y=M;y;y=Ms(y))x++;for(y=0,v=f;v;v=Ms(v))y++;for(;0<x-y;)M=Ms(M),x--;for(;0<y-x;)f=Ms(f),y--;for(;x--;){if(M===f||f!==null&&M===f.alternate)break t;M=Ms(M),f=Ms(f)}M=null}else M=null;p!==null&&Hg(h,u,p,M,!1),m!==null&&g!==null&&Hg(h,g,m,M,!0)}}e:{if(u=c?Gs(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var T=sw;else if(Ig(u))if(O_)T=cw;else{T=ow;var A=aw}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(T=lw);if(T&&(T=T(t,c))){F_(h,T,n,d);break e}A&&A(t,u,c),t==="focusout"&&(A=u._wrapperState)&&A.controlled&&u.type==="number"&&pf(u,"number",u.value)}switch(A=c?Gs(c):window,t){case"focusin":(Ig(A)||A.contentEditable==="true")&&(zs=A,bf=c,lo=null);break;case"focusout":lo=bf=zs=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,Bg(h,n,d);break;case"selectionchange":if(fw)break;case"keydown":case"keyup":Bg(h,n,d)}var b;if(Ip)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Vs?I_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(L_&&n.locale!=="ko"&&(Vs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Vs&&(b=D_()):(_r=d,Np="value"in _r?_r.value:_r.textContent,Vs=!0)),A=Cc(c,_),0<A.length&&(_=new Pg(_,t,null,n,d),h.push({event:_,listeners:A}),b?_.data=b:(b=U_(n),b!==null&&(_.data=b)))),(b=ew?tw(t,n):nw(t,n))&&(c=Cc(c,"onBeforeInput"),0<c.length&&(d=new Pg("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=b))}Y_(h,e)})}function Co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=So(t,n),s!=null&&i.unshift(Co(t,s,r)),s=So(t,e),s!=null&&i.push(Co(t,s,r))),t=t.return}return i}function Ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hg(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=So(n,s),l!=null&&a.unshift(Co(n,l,o))):r||(l=So(n,s),l!=null&&a.push(Co(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var gw=/\r\n?/g,xw=/\u0000|\uFFFD/g;function Gg(t){return(typeof t=="string"?t:""+t).replace(gw,`
`).replace(xw,"")}function hl(t,e,n){if(e=Gg(e),Gg(t)!==e&&n)throw Error(se(425))}function Rc(){}var Cf=null,Rf=null;function Pf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nf=typeof setTimeout=="function"?setTimeout:void 0,vw=typeof clearTimeout=="function"?clearTimeout:void 0,Wg=typeof Promise=="function"?Promise:void 0,_w=typeof queueMicrotask=="function"?queueMicrotask:typeof Wg<"u"?function(t){return Wg.resolve(null).then(t).catch(yw)}:Nf;function yw(t){setTimeout(function(){throw t})}function Ju(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wo(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ba=Math.random().toString(36).slice(2),Ei="__reactFiber$"+ba,Ro="__reactProps$"+ba,Ki="__reactContainer$"+ba,Df="__reactEvents$"+ba,Sw="__reactListeners$"+ba,Mw="__reactHandles$"+ba;function Jr(t){var e=t[Ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ki]||n[Ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jg(t);t!==null;){if(n=t[Ei])return n;t=jg(t)}return e}t=n,n=t.parentNode}return null}function Xo(t){return t=t[Ei]||t[Ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function pu(t){return t[Ro]||null}var Lf=[],Ws=-1;function kr(t){return{current:t}}function gt(t){0>Ws||(t.current=Lf[Ws],Lf[Ws]=null,Ws--)}function ht(t,e){Ws++,Lf[Ws]=t.current,t.current=e}var Dr={},ln=kr(Dr),Sn=kr(!1),us=Dr;function ua(t,e){var n=t.type.contextTypes;if(!n)return Dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(t){return t=t.childContextTypes,t!=null}function Pc(){gt(Sn),gt(ln)}function Xg(t,e,n){if(ln.current!==Dr)throw Error(se(168));ht(ln,e),ht(Sn,n)}function q_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,a1(t)||"Unknown",r));return Et({},n,i)}function Nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,us=ln.current,ht(ln,t),ht(Sn,Sn.current),!0}function Yg(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=q_(t,e,us),i.__reactInternalMemoizedMergedChildContext=t,gt(Sn),gt(ln),ht(ln,t)):gt(Sn),ht(Sn,n)}var zi=null,mu=!1,ed=!1;function K_(t){zi===null?zi=[t]:zi.push(t)}function Ew(t){mu=!0,K_(t)}function Br(){if(!ed&&zi!==null){ed=!0;var t=0,e=st;try{var n=zi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}zi=null,mu=!1}catch(r){throw zi!==null&&(zi=zi.slice(t+1)),S_(Ap,Br),r}finally{st=e,ed=!1}}return null}var js=[],Xs=0,Dc=null,Lc=0,Hn=[],Gn=0,ds=null,Gi=1,Wi="";function Yr(t,e){js[Xs++]=Lc,js[Xs++]=Dc,Dc=t,Lc=e}function Z_(t,e,n){Hn[Gn++]=Gi,Hn[Gn++]=Wi,Hn[Gn++]=ds,ds=t;var i=Gi;t=Wi;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Gi=1<<32-li(e)+r|n<<r|i,Wi=s+t}else Gi=1<<s|n<<r|i,Wi=t}function Fp(t){t.return!==null&&(Yr(t,1),Z_(t,1,0))}function Op(t){for(;t===Dc;)Dc=js[--Xs],js[Xs]=null,Lc=js[--Xs],js[Xs]=null;for(;t===ds;)ds=Hn[--Gn],Hn[Gn]=null,Wi=Hn[--Gn],Hn[Gn]=null,Gi=Hn[--Gn],Hn[Gn]=null}var Ln=null,Nn=null,vt=!1,si=null;function Q_(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $g(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ln=t,Nn=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ln=t,Nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ds!==null?{id:Gi,overflow:Wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ln=t,Nn=null,!0):!1;default:return!1}}function If(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uf(t){if(vt){var e=Nn;if(e){var n=e;if(!$g(t,e)){if(If(t))throw Error(se(418));e=br(n.nextSibling);var i=Ln;e&&$g(t,e)?Q_(i,n):(t.flags=t.flags&-4097|2,vt=!1,Ln=t)}}else{if(If(t))throw Error(se(418));t.flags=t.flags&-4097|2,vt=!1,Ln=t}}}function qg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function pl(t){if(t!==Ln)return!1;if(!vt)return qg(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pf(t.type,t.memoizedProps)),e&&(e=Nn)){if(If(t))throw J_(),Error(se(418));for(;e;)Q_(t,e),e=br(e.nextSibling)}if(qg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nn=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nn=null}}else Nn=Ln?br(t.stateNode.nextSibling):null;return!0}function J_(){for(var t=Nn;t;)t=br(t.nextSibling)}function da(){Nn=Ln=null,vt=!1}function kp(t){si===null?si=[t]:si.push(t)}var ww=tr.ReactCurrentBatchConfig;function ka(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function ml(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kg(t){var e=t._init;return e(t._payload)}function ey(t){function e(f,x){if(t){var y=f.deletions;y===null?(f.deletions=[x],f.flags|=16):y.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=Pr(f,x),f.index=0,f.sibling=null,f}function s(f,x,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<x?(f.flags|=2,x):y):(f.flags|=2,x)):(f.flags|=1048576,x)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,x,y,v){return x===null||x.tag!==6?(x=od(y,f.mode,v),x.return=f,x):(x=r(x,y),x.return=f,x)}function l(f,x,y,v){var T=y.type;return T===Bs?d(f,x,y.props.children,v,y.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===pr&&Kg(T)===x.type)?(v=r(x,y.props),v.ref=ka(f,x,y),v.return=f,v):(v=sc(y.type,y.key,y.props,null,f.mode,v),v.ref=ka(f,x,y),v.return=f,v)}function c(f,x,y,v){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=ld(y,f.mode,v),x.return=f,x):(x=r(x,y.children||[]),x.return=f,x)}function d(f,x,y,v,T){return x===null||x.tag!==7?(x=os(y,f.mode,v,T),x.return=f,x):(x=r(x,y),x.return=f,x)}function h(f,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=od(""+x,f.mode,y),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case rl:return y=sc(x.type,x.key,x.props,null,f.mode,y),y.ref=ka(f,null,x),y.return=f,y;case ks:return x=ld(x,f.mode,y),x.return=f,x;case pr:var v=x._init;return h(f,v(x._payload),y)}if(Za(x)||La(x))return x=os(x,f.mode,y,null),x.return=f,x;ml(f,x)}return null}function u(f,x,y,v){var T=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:o(f,x,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case rl:return y.key===T?l(f,x,y,v):null;case ks:return y.key===T?c(f,x,y,v):null;case pr:return T=y._init,u(f,x,T(y._payload),v)}if(Za(y)||La(y))return T!==null?null:d(f,x,y,v,null);ml(f,y)}return null}function p(f,x,y,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(y)||null,o(x,f,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rl:return f=f.get(v.key===null?y:v.key)||null,l(x,f,v,T);case ks:return f=f.get(v.key===null?y:v.key)||null,c(x,f,v,T);case pr:var A=v._init;return p(f,x,y,A(v._payload),T)}if(Za(v)||La(v))return f=f.get(y)||null,d(x,f,v,T,null);ml(x,v)}return null}function m(f,x,y,v){for(var T=null,A=null,b=x,_=x=0,C=null;b!==null&&_<y.length;_++){b.index>_?(C=b,b=null):C=b.sibling;var P=u(f,b,y[_],v);if(P===null){b===null&&(b=C);break}t&&b&&P.alternate===null&&e(f,b),x=s(P,x,_),A===null?T=P:A.sibling=P,A=P,b=C}if(_===y.length)return n(f,b),vt&&Yr(f,_),T;if(b===null){for(;_<y.length;_++)b=h(f,y[_],v),b!==null&&(x=s(b,x,_),A===null?T=b:A.sibling=b,A=b);return vt&&Yr(f,_),T}for(b=i(f,b);_<y.length;_++)C=p(b,f,_,y[_],v),C!==null&&(t&&C.alternate!==null&&b.delete(C.key===null?_:C.key),x=s(C,x,_),A===null?T=C:A.sibling=C,A=C);return t&&b.forEach(function(N){return e(f,N)}),vt&&Yr(f,_),T}function M(f,x,y,v){var T=La(y);if(typeof T!="function")throw Error(se(150));if(y=T.call(y),y==null)throw Error(se(151));for(var A=T=null,b=x,_=x=0,C=null,P=y.next();b!==null&&!P.done;_++,P=y.next()){b.index>_?(C=b,b=null):C=b.sibling;var N=u(f,b,P.value,v);if(N===null){b===null&&(b=C);break}t&&b&&N.alternate===null&&e(f,b),x=s(N,x,_),A===null?T=N:A.sibling=N,A=N,b=C}if(P.done)return n(f,b),vt&&Yr(f,_),T;if(b===null){for(;!P.done;_++,P=y.next())P=h(f,P.value,v),P!==null&&(x=s(P,x,_),A===null?T=P:A.sibling=P,A=P);return vt&&Yr(f,_),T}for(b=i(f,b);!P.done;_++,P=y.next())P=p(b,f,_,P.value,v),P!==null&&(t&&P.alternate!==null&&b.delete(P.key===null?_:P.key),x=s(P,x,_),A===null?T=P:A.sibling=P,A=P);return t&&b.forEach(function(F){return e(f,F)}),vt&&Yr(f,_),T}function g(f,x,y,v){if(typeof y=="object"&&y!==null&&y.type===Bs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case rl:e:{for(var T=y.key,A=x;A!==null;){if(A.key===T){if(T=y.type,T===Bs){if(A.tag===7){n(f,A.sibling),x=r(A,y.props.children),x.return=f,f=x;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===pr&&Kg(T)===A.type){n(f,A.sibling),x=r(A,y.props),x.ref=ka(f,A,y),x.return=f,f=x;break e}n(f,A);break}else e(f,A);A=A.sibling}y.type===Bs?(x=os(y.props.children,f.mode,v,y.key),x.return=f,f=x):(v=sc(y.type,y.key,y.props,null,f.mode,v),v.ref=ka(f,x,y),v.return=f,f=v)}return a(f);case ks:e:{for(A=y.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(f,x.sibling),x=r(x,y.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=ld(y,f.mode,v),x.return=f,f=x}return a(f);case pr:return A=y._init,g(f,x,A(y._payload),v)}if(Za(y))return m(f,x,y,v);if(La(y))return M(f,x,y,v);ml(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,y),x.return=f,f=x):(n(f,x),x=od(y,f.mode,v),x.return=f,f=x),a(f)):n(f,x)}return g}var fa=ey(!0),ty=ey(!1),Ic=kr(null),Uc=null,Ys=null,Bp=null;function Vp(){Bp=Ys=Uc=null}function zp(t){var e=Ic.current;gt(Ic),t._currentValue=e}function Ff(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ra(t,e){Uc=t,Bp=Ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(Bp!==t)if(t={context:t,memoizedValue:e,next:null},Ys===null){if(Uc===null)throw Error(se(308));Ys=t,Uc.dependencies={lanes:0,firstContext:t}}else Ys=Ys.next=t;return e}var es=null;function Hp(t){es===null?es=[t]:es.push(t)}function ny(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Hp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Zi(t,i)}function Zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mr=!1;function Gp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Zi(t,n)}return r=i.interleaved,r===null?(e.next=e,Hp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Zi(t,n)}function Jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cp(t,n)}}function Zg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fc(t,e,n,i){var r=t.updateQueue;mr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var u=o.lane,p=o.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=t,M=o;switch(u=e,p=n,M.tag){case 1:if(m=M.payload,typeof m=="function"){h=m.call(p,h,u);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=M.payload,u=typeof m=="function"?m.call(p,h,u):m,u==null)break e;h=Et({},h,u);break e;case 2:mr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else p={eventTime:p,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);hs|=a,t.lanes=a,t.memoizedState=h}}function Qg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Yo={},Ai=kr(Yo),Po=kr(Yo),No=kr(Yo);function ts(t){if(t===Yo)throw Error(se(174));return t}function Wp(t,e){switch(ht(No,e),ht(Po,t),ht(Ai,Yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gf(e,t)}gt(Ai),ht(Ai,e)}function ha(){gt(Ai),gt(Po),gt(No)}function ry(t){ts(No.current);var e=ts(Ai.current),n=gf(e,t.type);e!==n&&(ht(Po,t),ht(Ai,n))}function jp(t){Po.current===t&&(gt(Ai),gt(Po))}var _t=kr(0);function Oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var td=[];function Xp(){for(var t=0;t<td.length;t++)td[t]._workInProgressVersionPrimary=null;td.length=0}var ec=tr.ReactCurrentDispatcher,nd=tr.ReactCurrentBatchConfig,fs=0,St=null,Bt=null,Wt=null,kc=!1,co=!1,Do=0,Tw=0;function en(){throw Error(se(321))}function Yp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!di(t[n],e[n]))return!1;return!0}function $p(t,e,n,i,r,s){if(fs=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ec.current=t===null||t.memoizedState===null?Rw:Pw,t=n(i,r),co){s=0;do{if(co=!1,Do=0,25<=s)throw Error(se(301));s+=1,Wt=Bt=null,e.updateQueue=null,ec.current=Nw,t=n(i,r)}while(co)}if(ec.current=Bc,e=Bt!==null&&Bt.next!==null,fs=0,Wt=Bt=St=null,kc=!1,e)throw Error(se(300));return t}function qp(){var t=Do!==0;return Do=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?St.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Kn(){if(Bt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=Wt===null?St.memoizedState:Wt.next;if(e!==null)Wt=e,Bt=t;else{if(t===null)throw Error(se(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Wt===null?St.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function Lo(t,e){return typeof e=="function"?e(t):e}function id(t){var e=Kn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((fs&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,St.lanes|=d,hs|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,di(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,hs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rd(t){var e=Kn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);di(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function sy(){}function ay(t,e){var n=St,i=Kn(),r=e(),s=!di(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,Kp(cy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Io(9,ly.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(se(349));fs&30||oy(n,e,r)}return r}function oy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ly(t,e,n,i){e.value=n,e.getSnapshot=i,uy(e)&&dy(t)}function cy(t,e,n){return n(function(){uy(e)&&dy(t)})}function uy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!di(t,n)}catch{return!0}}function dy(t){var e=Zi(t,1);e!==null&&ci(e,t,1,-1)}function Jg(t){var e=_i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},e.queue=t,t=t.dispatch=Cw.bind(null,St,t),[e.memoizedState,t]}function Io(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function fy(){return Kn().memoizedState}function tc(t,e,n,i){var r=_i();St.flags|=t,r.memoizedState=Io(1|e,n,void 0,i===void 0?null:i)}function gu(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var a=Bt.memoizedState;if(s=a.destroy,i!==null&&Yp(i,a.deps)){r.memoizedState=Io(e,n,s,i);return}}St.flags|=t,r.memoizedState=Io(1|e,n,s,i)}function e0(t,e){return tc(8390656,8,t,e)}function Kp(t,e){return gu(2048,8,t,e)}function hy(t,e){return gu(4,2,t,e)}function py(t,e){return gu(4,4,t,e)}function my(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gy(t,e,n){return n=n!=null?n.concat([t]):null,gu(4,4,my.bind(null,e,t),n)}function Zp(){}function xy(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function vy(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _y(t,e,n){return fs&21?(di(n,e)||(n=w_(),St.lanes|=n,hs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function bw(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=nd.transition;nd.transition={};try{t(!1),e()}finally{st=n,nd.transition=i}}function yy(){return Kn().memoizedState}function Aw(t,e,n){var i=Rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Sy(t))My(e,n);else if(n=ny(t,e,n,i),n!==null){var r=hn();ci(n,t,i,r),Ey(n,e,i)}}function Cw(t,e,n){var i=Rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sy(t))My(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,di(o,a)){var l=e.interleaved;l===null?(r.next=r,Hp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ny(t,e,r,i),n!==null&&(r=hn(),ci(n,t,i,r),Ey(n,e,i))}}function Sy(t){var e=t.alternate;return t===St||e!==null&&e===St}function My(t,e){co=kc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ey(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cp(t,n)}}var Bc={readContext:qn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},Rw={readContext:qn,useCallback:function(t,e){return _i().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:e0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tc(4194308,4,my.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tc(4194308,4,t,e)},useInsertionEffect:function(t,e){return tc(4,2,t,e)},useMemo:function(t,e){var n=_i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=_i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Aw.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=_i();return t={current:t},e.memoizedState=t},useState:Jg,useDebugValue:Zp,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Jg(!1),e=t[0];return t=bw.bind(null,t[1]),_i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=_i();if(vt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),jt===null)throw Error(se(349));fs&30||oy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,e0(cy.bind(null,i,s,t),[t]),i.flags|=2048,Io(9,ly.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=_i(),e=jt.identifierPrefix;if(vt){var n=Wi,i=Gi;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Do++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Tw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Pw={readContext:qn,useCallback:xy,useContext:qn,useEffect:Kp,useImperativeHandle:gy,useInsertionEffect:hy,useLayoutEffect:py,useMemo:vy,useReducer:id,useRef:fy,useState:function(){return id(Lo)},useDebugValue:Zp,useDeferredValue:function(t){var e=Kn();return _y(e,Bt.memoizedState,t)},useTransition:function(){var t=id(Lo)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:sy,useSyncExternalStore:ay,useId:yy,unstable_isNewReconciler:!1},Nw={readContext:qn,useCallback:xy,useContext:qn,useEffect:Kp,useImperativeHandle:gy,useInsertionEffect:hy,useLayoutEffect:py,useMemo:vy,useReducer:rd,useRef:fy,useState:function(){return rd(Lo)},useDebugValue:Zp,useDeferredValue:function(t){var e=Kn();return Bt===null?e.memoizedState=t:_y(e,Bt.memoizedState,t)},useTransition:function(){var t=rd(Lo)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:sy,useSyncExternalStore:ay,useId:yy,unstable_isNewReconciler:!1};function ii(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Of(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xu={isMounted:function(t){return(t=t._reactInternals)?vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Rr(t),s=Xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,r),e!==null&&(ci(e,t,r,i),Jl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Rr(t),s=Xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,r),e!==null&&(ci(e,t,r,i),Jl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=Rr(t),r=Xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ar(t,r,i),e!==null&&(ci(e,t,i,n),Jl(e,t,i))}};function t0(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!bo(n,i)||!bo(r,s):!0}function wy(t,e,n){var i=!1,r=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=Mn(e)?us:ln.current,i=e.contextTypes,s=(i=i!=null)?ua(t,r):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function n0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&xu.enqueueReplaceState(e,e.state,null)}function kf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Gp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=Mn(e)?us:ln.current,r.context=ua(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Of(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&xu.enqueueReplaceState(r,r.state,null),Fc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function pa(t,e){try{var n="",i=e;do n+=s1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function sd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Dw=typeof WeakMap=="function"?WeakMap:Map;function Ty(t,e,n){n=Xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){zc||(zc=!0,qf=i),Bf(t,e)},n}function by(t,e,n){n=Xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bf(t,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function i0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Dw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Xw.bind(null,t,e,n),e.then(t,t))}function r0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function s0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xi(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var Lw=tr.ReactCurrentOwner,yn=!1;function un(t,e,n,i){e.child=t===null?ty(e,null,n,i):fa(e,t.child,n,i)}function a0(t,e,n,i,r){n=n.render;var s=e.ref;return ra(e,r),i=$p(t,e,n,i,s,r),n=qp(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qi(t,e,r)):(vt&&n&&Fp(e),e.flags|=1,un(t,e,i,r),e.child)}function o0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!sm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ay(t,e,s,i,r)):(t=sc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:bo,n(a,i)&&t.ref===e.ref)return Qi(t,e,r)}return e.flags|=1,t=Pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ay(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(bo(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Qi(t,e,r)}return Vf(t,e,n,i,r)}function Cy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(qs,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(qs,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(qs,Cn),Cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(qs,Cn),Cn|=i;return un(t,e,r,n),e.child}function Ry(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vf(t,e,n,i,r){var s=Mn(n)?us:ln.current;return s=ua(e,s),ra(e,r),n=$p(t,e,n,i,s,r),i=qp(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qi(t,e,r)):(vt&&i&&Fp(e),e.flags|=1,un(t,e,n,r),e.child)}function l0(t,e,n,i,r){if(Mn(n)){var s=!0;Nc(e)}else s=!1;if(ra(e,r),e.stateNode===null)nc(t,e),wy(e,n,i),kf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=Mn(n)?us:ln.current,c=ua(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&n0(e,a,i,c),mr=!1;var u=e.memoizedState;a.state=u,Fc(e,i,a,r),l=e.memoizedState,o!==i||u!==l||Sn.current||mr?(typeof d=="function"&&(Of(e,n,d,i),l=e.memoizedState),(o=mr||t0(e,n,o,i,u,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,iy(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:ii(e.type,o),a.props=c,h=e.pendingProps,u=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=Mn(n)?us:ln.current,l=ua(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||u!==l)&&n0(e,a,i,l),mr=!1,u=e.memoizedState,a.state=u,Fc(e,i,a,r);var m=e.memoizedState;o!==h||u!==m||Sn.current||mr?(typeof p=="function"&&(Of(e,n,p,i),m=e.memoizedState),(c=mr||t0(e,n,c,i,u,m,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),a.props=i,a.state=m,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return zf(t,e,n,i,s,r)}function zf(t,e,n,i,r,s){Ry(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Yg(e,n,!1),Qi(t,e,s);i=e.stateNode,Lw.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=fa(e,t.child,null,s),e.child=fa(e,null,o,s)):un(t,e,o,s),e.memoizedState=i.state,r&&Yg(e,n,!0),e.child}function Py(t){var e=t.stateNode;e.pendingContext?Xg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xg(t,e.context,!1),Wp(t,e.containerInfo)}function c0(t,e,n,i,r){return da(),kp(r),e.flags|=256,un(t,e,n,i),e.child}var Hf={dehydrated:null,treeContext:null,retryLane:0};function Gf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ny(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(_t,r&1),t===null)return Uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=yu(a,i,0,null),t=os(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gf(n),e.memoizedState=Hf,t):Qp(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Iw(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Pr(o,s):(s=os(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Gf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Hf,i}return s=t.child,t=s.sibling,i=Pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Qp(t,e){return e=yu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gl(t,e,n,i){return i!==null&&kp(i),fa(e,t.child,null,n),t=Qp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Iw(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=sd(Error(se(422))),gl(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=yu({mode:"visible",children:i.children},r,0,null),s=os(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&fa(e,t.child,null,a),e.child.memoizedState=Gf(a),e.memoizedState=Hf,s);if(!(e.mode&1))return gl(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=sd(s,i,void 0),gl(t,e,a,i)}if(o=(a&t.childLanes)!==0,yn||o){if(i=jt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Zi(t,r),ci(i,t,r,-1))}return rm(),i=sd(Error(se(421))),gl(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Yw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Nn=br(r.nextSibling),Ln=e,vt=!0,si=null,t!==null&&(Hn[Gn++]=Gi,Hn[Gn++]=Wi,Hn[Gn++]=ds,Gi=t.id,Wi=t.overflow,ds=e),e=Qp(e,i.children),e.flags|=4096,e)}function u0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ff(t.return,e,n)}function ad(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Dy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&u0(t,n,e);else if(t.tag===19)u0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Oc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ad(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Oc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ad(e,!0,n,null,s);break;case"together":ad(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Uw(t,e,n){switch(e.tag){case 3:Py(e),da();break;case 5:ry(e);break;case 1:Mn(e.type)&&Nc(e);break;case 4:Wp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Ic,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?Ny(t,e,n):(ht(_t,_t.current&1),t=Qi(t,e,n),t!==null?t.sibling:null);ht(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Dy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Cy(t,e,n)}return Qi(t,e,n)}var Ly,Wf,Iy,Uy;Ly=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wf=function(){};Iy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ts(Ai.current);var s=null;switch(n){case"input":r=ff(t,r),i=ff(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=mf(t,r),i=mf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Rc)}xf(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Uy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ba(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Fw(t,e,n){var i=e.pendingProps;switch(Op(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return Mn(e.type)&&Pc(),tn(e),null;case 3:return i=e.stateNode,ha(),gt(Sn),gt(ln),Xp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,si!==null&&(Qf(si),si=null))),Wf(t,e),tn(e),null;case 5:jp(e);var r=ts(No.current);if(n=e.type,t!==null&&e.stateNode!=null)Iy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return tn(e),null}if(t=ts(Ai.current),pl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[Ro]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<Ja.length;r++)mt(Ja[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":_g(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Sg(i,s),mt("invalid",i)}xf(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&hl(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&hl(i.textContent,o,t),r=["children",""+o]):_o.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&mt("scroll",i)}switch(n){case"input":sl(i),yg(i,s,!0);break;case"textarea":sl(i),Mg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=c_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Ei]=e,t[Ro]=i,Ly(t,e,!1,!1),e.stateNode=t;e:{switch(a=vf(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ja.length;r++)mt(Ja[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":_g(t,i),r=ff(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),mt("invalid",t);break;case"textarea":Sg(t,i),r=mf(t,i),mt("invalid",t);break;default:r=i}xf(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?f_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&u_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yo(t,l):typeof l=="number"&&yo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Mp(t,s,l,a))}switch(n){case"input":sl(t),yg(t,i,!1);break;case"textarea":sl(t),Mg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ea(t,!!i.multiple,s,!1):i.defaultValue!=null&&ea(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Rc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)Uy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=ts(No.current),ts(Ai.current),pl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==n)&&(t=Ln,t!==null))switch(t.tag){case 3:hl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return tn(e),null;case 13:if(gt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Nn!==null&&e.mode&1&&!(e.flags&128))J_(),da(),e.flags|=98560,s=!1;else if(s=pl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Ei]=e}else da(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else si!==null&&(Qf(si),si=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Vt===0&&(Vt=3):rm())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return ha(),Wf(t,e),t===null&&Ao(e.stateNode.containerInfo),tn(e),null;case 10:return zp(e.type._context),tn(e),null;case 17:return Mn(e.type)&&Pc(),tn(e),null;case 19:if(gt(_t),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ba(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Oc(t),a!==null){for(e.flags|=128,Ba(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&Dt()>ma&&(e.flags|=128,i=!0,Ba(s,!1),e.lanes=4194304)}else{if(!i)if(t=Oc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ba(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!vt)return tn(e),null}else 2*Dt()-s.renderingStartTime>ma&&n!==1073741824&&(e.flags|=128,i=!0,Ba(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,n=_t.current,ht(_t,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return im(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function Ow(t,e){switch(Op(e),e.tag){case 1:return Mn(e.type)&&Pc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ha(),gt(Sn),gt(ln),Xp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jp(e),null;case 13:if(gt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));da()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(_t),null;case 4:return ha(),null;case 10:return zp(e.type._context),null;case 22:case 23:return im(),null;case 24:return null;default:return null}}var xl=!1,sn=!1,kw=typeof WeakSet=="function"?WeakSet:Set,Se=null;function $s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function jf(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var d0=!1;function Bw(t,e){if(Cf=bc,t=V_(),Up(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,u=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===t)break t;if(u===n&&++c===r&&(o=a),u===s&&++d===i&&(l=a),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rf={focusedElem:t,selectionRange:n},bc=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var M=m.memoizedProps,g=m.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?M:ii(e.type,M),g);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(v){Ct(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return m=d0,d0=!1,m}function uo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&jf(e,n,s)}r=r.next}while(r!==i)}}function vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Fy(t){var e=t.alternate;e!==null&&(t.alternate=null,Fy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ei],delete e[Ro],delete e[Df],delete e[Sw],delete e[Mw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Oy(t){return t.tag===5||t.tag===3||t.tag===4}function f0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Oy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rc));else if(i!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}function $f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}var Xt=null,ri=!1;function ar(t,e,n){for(n=n.child;n!==null;)ky(t,e,n),n=n.sibling}function ky(t,e,n){if(bi&&typeof bi.onCommitFiberUnmount=="function")try{bi.onCommitFiberUnmount(uu,n)}catch{}switch(n.tag){case 5:sn||$s(n,e);case 6:var i=Xt,r=ri;Xt=null,ar(t,e,n),Xt=i,ri=r,Xt!==null&&(ri?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(ri?(t=Xt,n=n.stateNode,t.nodeType===8?Ju(t.parentNode,n):t.nodeType===1&&Ju(t,n),wo(t)):Ju(Xt,n.stateNode));break;case 4:i=Xt,r=ri,Xt=n.stateNode.containerInfo,ri=!0,ar(t,e,n),Xt=i,ri=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&jf(n,e,a),r=r.next}while(r!==i)}ar(t,e,n);break;case 1:if(!sn&&($s(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Ct(n,e,o)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,ar(t,e,n),sn=i):ar(t,e,n);break;default:ar(t,e,n)}}function h0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kw),e.forEach(function(i){var r=$w.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Xt=o.stateNode,ri=!1;break e;case 3:Xt=o.stateNode.containerInfo,ri=!0;break e;case 4:Xt=o.stateNode.containerInfo,ri=!0;break e}o=o.return}if(Xt===null)throw Error(se(160));ky(s,a,r),Xt=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)By(e,t),e=e.sibling}function By(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),gi(t),i&4){try{uo(3,t,t.return),vu(3,t)}catch(M){Ct(t,t.return,M)}try{uo(5,t,t.return)}catch(M){Ct(t,t.return,M)}}break;case 1:Zn(e,t),gi(t),i&512&&n!==null&&$s(n,n.return);break;case 5:if(Zn(e,t),gi(t),i&512&&n!==null&&$s(n,n.return),t.flags&32){var r=t.stateNode;try{yo(r,"")}catch(M){Ct(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&o_(r,s),vf(o,a);var c=vf(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?f_(r,h):d==="dangerouslySetInnerHTML"?u_(r,h):d==="children"?yo(r,h):Mp(r,d,h,c)}switch(o){case"input":hf(r,s);break;case"textarea":l_(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ea(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?ea(r,!!s.multiple,s.defaultValue,!0):ea(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ro]=s}catch(M){Ct(t,t.return,M)}}break;case 6:if(Zn(e,t),gi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Ct(t,t.return,M)}}break;case 3:if(Zn(e,t),gi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(M){Ct(t,t.return,M)}break;case 4:Zn(e,t),gi(t);break;case 13:Zn(e,t),gi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(tm=Dt())),i&4&&h0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(c=sn)||d,Zn(e,t),sn=c):Zn(e,t),gi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Se=t,d=t.child;d!==null;){for(h=Se=d;Se!==null;){switch(u=Se,p=u.child,u.tag){case 0:case 11:case 14:case 15:uo(4,u,u.return);break;case 1:$s(u,u.return);var m=u.stateNode;if(typeof m.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(M){Ct(i,n,M)}}break;case 5:$s(u,u.return);break;case 22:if(u.memoizedState!==null){m0(h);continue}}p!==null?(p.return=u,Se=p):m0(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=d_("display",a))}catch(M){Ct(t,t.return,M)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(M){Ct(t,t.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Zn(e,t),gi(t),i&4&&h0(t);break;case 21:break;default:Zn(e,t),gi(t)}}function gi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Oy(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(yo(r,""),i.flags&=-33);var s=f0(t);$f(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=f0(t);Yf(t,o,a);break;default:throw Error(se(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vw(t,e,n){Se=t,Vy(t)}function Vy(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||xl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||sn;o=xl;var c=sn;if(xl=a,(sn=l)&&!c)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?g0(r):l!==null?(l.return=a,Se=l):g0(r);for(;s!==null;)Se=s,Vy(s),s=s.sibling;Se=r,xl=o,sn=c}p0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):p0(t)}}function p0(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||vu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ii(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qg(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qg(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&wo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}sn||e.flags&512&&Xf(e)}catch(u){Ct(e,e.return,u)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function m0(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function g0(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vu(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{Xf(e)}catch(l){Ct(e,s,l)}break;case 5:var a=e.return;try{Xf(e)}catch(l){Ct(e,a,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var zw=Math.ceil,Vc=tr.ReactCurrentDispatcher,Jp=tr.ReactCurrentOwner,Xn=tr.ReactCurrentBatchConfig,tt=0,jt=null,Ft=null,Kt=0,Cn=0,qs=kr(0),Vt=0,Uo=null,hs=0,_u=0,em=0,fo=null,_n=null,tm=0,ma=1/0,Vi=null,zc=!1,qf=null,Cr=null,vl=!1,yr=null,Hc=0,ho=0,Kf=null,ic=-1,rc=0;function hn(){return tt&6?Dt():ic!==-1?ic:ic=Dt()}function Rr(t){return t.mode&1?tt&2&&Kt!==0?Kt&-Kt:ww.transition!==null?(rc===0&&(rc=w_()),rc):(t=st,t!==0||(t=window.event,t=t===void 0?16:N_(t.type)),t):1}function ci(t,e,n,i){if(50<ho)throw ho=0,Kf=null,Error(se(185));Wo(t,n,i),(!(tt&2)||t!==jt)&&(t===jt&&(!(tt&2)&&(_u|=n),Vt===4&&xr(t,Kt)),En(t,i),n===1&&tt===0&&!(e.mode&1)&&(ma=Dt()+500,mu&&Br()))}function En(t,e){var n=t.callbackNode;w1(t,e);var i=Tc(t,t===jt?Kt:0);if(i===0)n!==null&&Tg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Tg(n),e===1)t.tag===0?Ew(x0.bind(null,t)):K_(x0.bind(null,t)),_w(function(){!(tt&6)&&Br()}),n=null;else{switch(T_(i)){case 1:n=Ap;break;case 4:n=M_;break;case 16:n=wc;break;case 536870912:n=E_;break;default:n=wc}n=$y(n,zy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zy(t,e){if(ic=-1,rc=0,tt&6)throw Error(se(327));var n=t.callbackNode;if(sa()&&t.callbackNode!==n)return null;var i=Tc(t,t===jt?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Gc(t,i);else{e=i;var r=tt;tt|=2;var s=Gy();(jt!==t||Kt!==e)&&(Vi=null,ma=Dt()+500,as(t,e));do try{Ww();break}catch(o){Hy(t,o)}while(!0);Vp(),Vc.current=s,tt=r,Ft!==null?e=0:(jt=null,Kt=0,e=Vt)}if(e!==0){if(e===2&&(r=Ef(t),r!==0&&(i=r,e=Zf(t,r))),e===1)throw n=Uo,as(t,0),xr(t,i),En(t,Dt()),n;if(e===6)xr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Hw(r)&&(e=Gc(t,i),e===2&&(s=Ef(t),s!==0&&(i=s,e=Zf(t,s))),e===1))throw n=Uo,as(t,0),xr(t,i),En(t,Dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:$r(t,_n,Vi);break;case 3:if(xr(t,i),(i&130023424)===i&&(e=tm+500-Dt(),10<e)){if(Tc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Nf($r.bind(null,t,_n,Vi),e);break}$r(t,_n,Vi);break;case 4:if(xr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-li(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zw(i/1960))-i,10<i){t.timeoutHandle=Nf($r.bind(null,t,_n,Vi),i);break}$r(t,_n,Vi);break;case 5:$r(t,_n,Vi);break;default:throw Error(se(329))}}}return En(t,Dt()),t.callbackNode===n?zy.bind(null,t):null}function Zf(t,e){var n=fo;return t.current.memoizedState.isDehydrated&&(as(t,e).flags|=256),t=Gc(t,e),t!==2&&(e=_n,_n=n,e!==null&&Qf(e)),t}function Qf(t){_n===null?_n=t:_n.push.apply(_n,t)}function Hw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!di(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~em,e&=~_u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function x0(t){if(tt&6)throw Error(se(327));sa();var e=Tc(t,0);if(!(e&1))return En(t,Dt()),null;var n=Gc(t,e);if(t.tag!==0&&n===2){var i=Ef(t);i!==0&&(e=i,n=Zf(t,i))}if(n===1)throw n=Uo,as(t,0),xr(t,e),En(t,Dt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$r(t,_n,Vi),En(t,Dt()),null}function nm(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(ma=Dt()+500,mu&&Br())}}function ps(t){yr!==null&&yr.tag===0&&!(tt&6)&&sa();var e=tt;tt|=1;var n=Xn.transition,i=st;try{if(Xn.transition=null,st=1,t)return t()}finally{st=i,Xn.transition=n,tt=e,!(tt&6)&&Br()}}function im(){Cn=qs.current,gt(qs)}function as(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vw(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(Op(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pc();break;case 3:ha(),gt(Sn),gt(ln),Xp();break;case 5:jp(i);break;case 4:ha();break;case 13:gt(_t);break;case 19:gt(_t);break;case 10:zp(i.type._context);break;case 22:case 23:im()}n=n.return}if(jt=t,Ft=t=Pr(t.current,null),Kt=Cn=e,Vt=0,Uo=null,em=_u=hs=0,_n=fo=null,es!==null){for(e=0;e<es.length;e++)if(n=es[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}es=null}return t}function Hy(t,e){do{var n=Ft;try{if(Vp(),ec.current=Bc,kc){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}kc=!1}if(fs=0,Wt=Bt=St=null,co=!1,Do=0,Jp.current=null,n===null||n.return===null){Vt=1,Uo=e,Ft=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=r0(a);if(p!==null){p.flags&=-257,s0(p,a,o,s,e),p.mode&1&&i0(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var M=new Set;M.add(l),e.updateQueue=M}else m.add(l);break e}else{if(!(e&1)){i0(s,c,e),rm();break e}l=Error(se(426))}}else if(vt&&o.mode&1){var g=r0(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),s0(g,a,o,s,e),kp(pa(l,o));break e}}s=l=pa(l,o),Vt!==4&&(Vt=2),fo===null?fo=[s]:fo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Ty(s,l,e);Zg(s,f);break e;case 1:o=l;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Cr===null||!Cr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=by(s,o,e);Zg(s,v);break e}}s=s.return}while(s!==null)}jy(n)}catch(T){e=T,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function Gy(){var t=Vc.current;return Vc.current=Bc,t===null?Bc:t}function rm(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),jt===null||!(hs&268435455)&&!(_u&268435455)||xr(jt,Kt)}function Gc(t,e){var n=tt;tt|=2;var i=Gy();(jt!==t||Kt!==e)&&(Vi=null,as(t,e));do try{Gw();break}catch(r){Hy(t,r)}while(!0);if(Vp(),tt=n,Vc.current=i,Ft!==null)throw Error(se(261));return jt=null,Kt=0,Vt}function Gw(){for(;Ft!==null;)Wy(Ft)}function Ww(){for(;Ft!==null&&!m1();)Wy(Ft)}function Wy(t){var e=Yy(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?jy(t):Ft=e,Jp.current=null}function jy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ow(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Ft=null;return}}else if(n=Fw(n,e,Cn),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);Vt===0&&(Vt=5)}function $r(t,e,n){var i=st,r=Xn.transition;try{Xn.transition=null,st=1,jw(t,e,n,i)}finally{Xn.transition=r,st=i}return null}function jw(t,e,n,i){do sa();while(yr!==null);if(tt&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(T1(t,s),t===jt&&(Ft=jt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vl||(vl=!0,$y(wc,function(){return sa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var a=st;st=1;var o=tt;tt|=4,Jp.current=null,Bw(t,n),By(n,t),dw(Rf),bc=!!Cf,Rf=Cf=null,t.current=n,Vw(n),g1(),tt=o,st=a,Xn.transition=s}else t.current=n;if(vl&&(vl=!1,yr=t,Hc=r),s=t.pendingLanes,s===0&&(Cr=null),_1(n.stateNode),En(t,Dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(zc)throw zc=!1,t=qf,qf=null,t;return Hc&1&&t.tag!==0&&sa(),s=t.pendingLanes,s&1?t===Kf?ho++:(ho=0,Kf=t):ho=0,Br(),null}function sa(){if(yr!==null){var t=T_(Hc),e=Xn.transition,n=st;try{if(Xn.transition=null,st=16>t?16:t,yr===null)var i=!1;else{if(t=yr,yr=null,Hc=0,tt&6)throw Error(se(331));var r=tt;for(tt|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Se=c;Se!==null;){var d=Se;switch(d.tag){case 0:case 11:case 15:uo(8,d,s)}var h=d.child;if(h!==null)h.return=d,Se=h;else for(;Se!==null;){d=Se;var u=d.sibling,p=d.return;if(Fy(d),d===c){Se=null;break}if(u!==null){u.return=p,Se=u;break}Se=p}}}var m=s.alternate;if(m!==null){var M=m.child;if(M!==null){m.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:uo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Se=f;break e}Se=s.return}}var x=t.current;for(Se=x;Se!==null;){a=Se;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Se=y;else e:for(a=x;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:vu(9,o)}}catch(T){Ct(o,o.return,T)}if(o===a){Se=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,Se=v;break e}Se=o.return}}if(tt=r,Br(),bi&&typeof bi.onPostCommitFiberRoot=="function")try{bi.onPostCommitFiberRoot(uu,t)}catch{}i=!0}return i}finally{st=n,Xn.transition=e}}return!1}function v0(t,e,n){e=pa(n,e),e=Ty(t,e,1),t=Ar(t,e,1),e=hn(),t!==null&&(Wo(t,1,e),En(t,e))}function Ct(t,e,n){if(t.tag===3)v0(t,t,n);else for(;e!==null;){if(e.tag===3){v0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){t=pa(n,t),t=by(e,t,1),e=Ar(e,t,1),t=hn(),e!==null&&(Wo(e,1,t),En(e,t));break}}e=e.return}}function Xw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(Kt&n)===n&&(Vt===4||Vt===3&&(Kt&130023424)===Kt&&500>Dt()-tm?as(t,0):em|=n),En(t,e)}function Xy(t,e){e===0&&(t.mode&1?(e=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):e=1);var n=hn();t=Zi(t,e),t!==null&&(Wo(t,e,n),En(t,n))}function Yw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xy(t,n)}function $w(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Xy(t,n)}var Yy;Yy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,Uw(t,e,n);yn=!!(t.flags&131072)}else yn=!1,vt&&e.flags&1048576&&Z_(e,Lc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nc(t,e),t=e.pendingProps;var r=ua(e,ln.current);ra(e,n),r=$p(null,e,i,t,r,n);var s=qp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,Nc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Gp(e),r.updater=xu,e.stateNode=r,r._reactInternals=e,kf(e,i,t,n),e=zf(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&Fp(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(nc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Kw(i),t=ii(i,t),r){case 0:e=Vf(null,e,i,t,n);break e;case 1:e=l0(null,e,i,t,n);break e;case 11:e=a0(null,e,i,t,n);break e;case 14:e=o0(null,e,i,ii(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Vf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),l0(t,e,i,r,n);case 3:e:{if(Py(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,iy(t,e),Fc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=pa(Error(se(423)),e),e=c0(t,e,i,n,r);break e}else if(i!==r){r=pa(Error(se(424)),e),e=c0(t,e,i,n,r);break e}else for(Nn=br(e.stateNode.containerInfo.firstChild),Ln=e,vt=!0,si=null,n=ty(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(da(),i===r){e=Qi(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return ry(e),t===null&&Uf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Pf(i,r)?a=null:s!==null&&Pf(i,s)&&(e.flags|=32),Ry(t,e),un(t,e,a,n),e.child;case 6:return t===null&&Uf(e),null;case 13:return Ny(t,e,n);case 4:return Wp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fa(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),a0(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ht(Ic,i._currentValue),i._currentValue=a,s!==null)if(di(s.value,a)){if(s.children===r.children&&!Sn.current){e=Qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Xi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ff(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ff(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ra(e,n),r=qn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),o0(t,e,i,r,n);case 15:return Ay(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),nc(t,e),e.tag=1,Mn(i)?(t=!0,Nc(e)):t=!1,ra(e,n),wy(e,i,r),kf(e,i,r,n),zf(null,e,i,!0,t,n);case 19:return Dy(t,e,n);case 22:return Cy(t,e,n)}throw Error(se(156,e.tag))};function $y(t,e){return S_(t,e)}function qw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new qw(t,e,n,i)}function sm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Kw(t){if(typeof t=="function")return sm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wp)return 11;if(t===Tp)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sc(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")sm(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Bs:return os(n.children,r,s,e);case Ep:a=8,r|=8;break;case lf:return t=Wn(12,n,e,r|2),t.elementType=lf,t.lanes=s,t;case cf:return t=Wn(13,n,e,r),t.elementType=cf,t.lanes=s,t;case uf:return t=Wn(19,n,e,r),t.elementType=uf,t.lanes=s,t;case r_:return yu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n_:a=10;break e;case i_:a=9;break e;case wp:a=11;break e;case Tp:a=14;break e;case pr:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Wn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function os(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function yu(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=r_,t.lanes=n,t.stateNode={isHidden:!1},t}function od(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function ld(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Zw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hu(0),this.expirationTimes=Hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function am(t,e,n,i,r,s,a,o,l){return t=new Zw(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gp(s),t}function Qw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function qy(t){if(!t)return Dr;t=t._reactInternals;e:{if(vs(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(Mn(n))return q_(t,n,e)}return e}function Ky(t,e,n,i,r,s,a,o,l){return t=am(n,i,!0,t,r,s,a,o,l),t.context=qy(null),n=t.current,i=hn(),r=Rr(n),s=Xi(i,r),s.callback=e??null,Ar(n,s,r),t.current.lanes=r,Wo(t,r,i),En(t,i),t}function Su(t,e,n,i){var r=e.current,s=hn(),a=Rr(r);return n=qy(n),e.context===null?e.context=n:e.pendingContext=n,e=Xi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ar(r,e,a),t!==null&&(ci(t,r,a,s),Jl(t,r,a)),a}function Wc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function om(t,e){_0(t,e),(t=t.alternate)&&_0(t,e)}function Jw(){return null}var Zy=typeof reportError=="function"?reportError:function(t){console.error(t)};function lm(t){this._internalRoot=t}Mu.prototype.render=lm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Su(t,e,null,null)};Mu.prototype.unmount=lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ps(function(){Su(null,t,null,null)}),e[Ki]=null}};function Mu(t){this._internalRoot=t}Mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=C_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gr.length&&e!==0&&e<gr[n].priority;n++);gr.splice(n,0,t),n===0&&P_(t)}};function cm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function y0(){}function eT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Wc(a);s.call(c)}}var a=Ky(e,i,t,0,null,!1,!1,"",y0);return t._reactRootContainer=a,t[Ki]=a.current,Ao(t.nodeType===8?t.parentNode:t),ps(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Wc(l);o.call(c)}}var l=am(t,0,!1,null,null,!1,!1,"",y0);return t._reactRootContainer=l,t[Ki]=l.current,Ao(t.nodeType===8?t.parentNode:t),ps(function(){Su(e,l,n,i)}),l}function wu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Wc(a);o.call(l)}}Su(e,a,t,r)}else a=eT(n,e,t,r,i);return Wc(a)}b_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qa(e.pendingLanes);n!==0&&(Cp(e,n|1),En(e,Dt()),!(tt&6)&&(ma=Dt()+500,Br()))}break;case 13:ps(function(){var i=Zi(t,1);if(i!==null){var r=hn();ci(i,t,1,r)}}),om(t,1)}};Rp=function(t){if(t.tag===13){var e=Zi(t,134217728);if(e!==null){var n=hn();ci(e,t,134217728,n)}om(t,134217728)}};A_=function(t){if(t.tag===13){var e=Rr(t),n=Zi(t,e);if(n!==null){var i=hn();ci(n,t,e,i)}om(t,e)}};C_=function(){return st};R_=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};yf=function(t,e,n){switch(e){case"input":if(hf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=pu(i);if(!r)throw Error(se(90));a_(i),hf(i,r)}}}break;case"textarea":l_(t,n);break;case"select":e=n.value,e!=null&&ea(t,!!n.multiple,e,!1)}};m_=nm;g_=ps;var tT={usingClientEntryPoint:!1,Events:[Xo,Gs,pu,h_,p_,nm]},Va={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nT={bundleType:Va.bundleType,version:Va.version,rendererPackageName:Va.rendererPackageName,rendererConfig:Va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=__(t),t===null?null:t.stateNode},findFiberByHostInstance:Va.findFiberByHostInstance||Jw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{uu=_l.inject(nT),bi=_l}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tT;Fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cm(e))throw Error(se(200));return Qw(t,e,null,n)};Fn.createRoot=function(t,e){if(!cm(t))throw Error(se(299));var n=!1,i="",r=Zy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=am(t,1,!1,null,null,n,!1,i,r),t[Ki]=e.current,Ao(t.nodeType===8?t.parentNode:t),new lm(e)};Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=__(e),t=t===null?null:t.stateNode,t};Fn.flushSync=function(t){return ps(t)};Fn.hydrate=function(t,e,n){if(!Eu(e))throw Error(se(200));return wu(null,t,e,!0,n)};Fn.hydrateRoot=function(t,e,n){if(!cm(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Zy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Ky(e,null,t,1,n??null,r,!1,s,a),t[Ki]=e.current,Ao(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Mu(e)};Fn.render=function(t,e,n){if(!Eu(e))throw Error(se(200));return wu(null,t,e,!1,n)};Fn.unmountComponentAtNode=function(t){if(!Eu(t))throw Error(se(40));return t._reactRootContainer?(ps(function(){wu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ki]=null})}),!0):!1};Fn.unstable_batchedUpdates=nm;Fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Eu(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return wu(t,e,n,!1,i)};Fn.version="18.3.1-next-f1338f8080-20240426";function Qy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qy)}catch(t){console.error(t)}}Qy(),Qv.exports=Fn;var iT=Qv.exports,S0=iT;af.createRoot=S0.createRoot,af.hydrateRoot=S0.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),nt=(t,e)=>{const n=ie.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},d)=>ie.createElement("svg",{ref:d,...rT,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${sT(t)}`,o].join(" "),...c},[...e.map(([h,u])=>ie.createElement(h,u)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=nt("AlertOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=nt("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=nt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=nt("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=nt("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=nt("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=nt("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=nt("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=nt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=nt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=nt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=nt("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=nt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=nt("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=nt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=nt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=nt("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=nt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=nt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=nt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=nt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=nt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=nt("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=nt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=nt("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=nt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=nt("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=nt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=nt("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=nt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),MT=({user:t,activeTab:e,setActiveTab:n,onLogout:i})=>S.jsx("header",{className:"bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center space-x-3 cursor-pointer",onClick:()=>n("dashboard"),children:[S.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20",children:S.jsx(ga,{className:"w-6 h-6 text-white"})}),S.jsxs("div",{children:[S.jsxs("span",{className:"font-extrabold text-lg text-white tracking-tight flex items-center gap-1.5",children:["Adaptive",S.jsx("span",{className:"text-blue-500",children:"Path"})," AI"]}),S.jsx("span",{className:"text-xs text-slate-400 block -mt-1 font-medium",children:"Personalized Education Engine"})]})]}),t&&S.jsxs("nav",{className:"hidden md:flex items-center space-x-1 bg-slate-800/60 p-1.5 rounded-xl border border-slate-700/50",children:[S.jsxs("button",{onClick:()=>n("dashboard"),className:`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${e==="dashboard"?"bg-blue-600 text-white shadow-md shadow-blue-600/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"}`,children:[S.jsx(dT,{className:"w-4 h-4"}),S.jsx("span",{children:"Learner Dashboard"})]}),S.jsxs("button",{onClick:()=>n("content"),className:`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${e==="content"?"bg-blue-600 text-white shadow-md shadow-blue-600/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"}`,children:[S.jsx(ac,{className:"w-4 h-4"}),S.jsx("span",{children:"Adaptive Player"})]}),S.jsxs("button",{onClick:()=>n("onboarding"),className:`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${e==="onboarding"?"bg-blue-600 text-white shadow-md shadow-blue-600/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"}`,children:[S.jsx(xa,{className:"w-4 h-4"}),S.jsx("span",{children:"Skill Survey"})]}),(t.role==="TEACHER"||t.role==="ADMIN")&&S.jsxs("button",{onClick:()=>n("teacher"),className:`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${e==="teacher"?"bg-purple-600 text-white shadow-md shadow-purple-600/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"}`,children:[S.jsx(oc,{className:"w-4 h-4"}),S.jsx("span",{children:"Teacher Portal"})]})]}),S.jsx("div",{className:"flex items-center space-x-4",children:t?S.jsxs(S.Fragment,{children:[t.profile&&S.jsxs("div",{className:"hidden lg:flex items-center space-x-1.5 bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs px-3 py-1 rounded-full font-semibold",children:[S.jsx(xa,{className:"w-3.5 h-3.5"}),S.jsxs("span",{children:["VARK: ",t.profile.learningStyle]})]}),S.jsxs("div",{className:"flex items-center space-x-3 bg-slate-800/70 border border-slate-700/60 px-3 py-1.5 rounded-xl",children:[S.jsx("div",{className:"w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold text-sm",children:t.name[0].toUpperCase()}),S.jsxs("div",{className:"text-left hidden sm:block",children:[S.jsx("span",{className:"text-xs font-semibold text-slate-200 block",children:t.name}),S.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider text-slate-400 block -mt-0.5",children:t.role})]}),S.jsx("button",{onClick:i,title:"Logout",className:"text-slate-400 hover:text-rose-400 transition-colors p-1",children:S.jsx(hT,{className:"w-4 h-4"})})]})]}):S.jsx("span",{className:"text-xs text-slate-400",children:"Guest Mode"})})]})}),fi="/api";function nr(){const t=localStorage.getItem("token");return{"Content-Type":"application/json",...t?{Authorization:`Bearer ${t}`}:{}}}async function T0(t,e){const n=await fetch(`${fi}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e})});if(!n.ok){const i=await n.json();throw new Error(i.error||"Login failed")}return n.json()}async function ET(t,e,n,i){const r=await fetch(`${fi}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e,name:n,role:i})});if(!r.ok){const s=await r.json();throw new Error(s.error||"Registration failed")}return r.json()}async function wT(){const t=await fetch(`${fi}/learner-profile/profile`,{headers:nr()});if(!t.ok)throw new Error("Failed to load profile");return t.json()}async function TT(){const t=await fetch(`${fi}/learner-profile/questions`,{headers:nr()});if(!t.ok)throw new Error("Failed to load onboarding questions");return t.json()}async function bT(t){const e=await fetch(`${fi}/learner-profile/onboarding`,{method:"POST",headers:nr(),body:JSON.stringify(t)});if(!e.ok)throw new Error("Failed to submit onboarding answers");return e.json()}async function AT(){const t=await fetch(`${fi}/content/subjects`,{headers:nr()});if(!t.ok)throw new Error("Failed to fetch subjects");return t.json()}async function CT(t){const e=await fetch(`${fi}/content/path/${t}`,{headers:nr()});if(!e.ok)throw new Error("Failed to fetch learning path");return e.json()}async function RT(t){const e=await fetch(`${fi}/content/topic/${t}/next`,{headers:nr()});if(!e.ok)throw new Error("Failed to fetch next content");return e.json()}async function PT(t){const e=await fetch(`${fi}/content/interaction`,{method:"POST",headers:nr(),body:JSON.stringify(t)});if(!e.ok)throw new Error("Failed to record interaction");return e.json()}async function NT(){const t=await fetch(`${fi}/analytics/student`,{headers:nr()});if(!t.ok)throw new Error("Failed to fetch student analytics");return t.json()}async function DT(){const t=await fetch(`${fi}/analytics/teacher/overview`,{headers:nr()});if(!t.ok)throw new Error("Failed to fetch teacher overview");return t.json()}const LT=({onComplete:t})=>{const[e,n]=ie.useState(!0),[i,r]=ie.useState(null),[s,a]=ie.useState({}),[o,l]=ie.useState("MODERATE"),[c,d]=ie.useState({}),[h,u]=ie.useState(!1),[p,m]=ie.useState(1);ie.useEffect(()=>{TT().then(x=>{r(x),n(!1)}).catch(x=>{console.error("Error fetching questions:",x),n(!1)})},[]);const M=(x,y)=>{a(v=>({...v,[x]:y}))},g=(x,y)=>{d(v=>({...v,[x]:y}))},f=async()=>{u(!0);try{const x=Object.values(s),y=i.diagnosticQuiz.map(T=>({id:T.id,topicTag:T.topicTag,isCorrect:c[T.id]===T.correct})),v=await bT({varkAnswers:x,paceAnswer:o,diagnosticAnswers:y});u(!1),m(3),setTimeout(()=>{t(v.profile)},1800)}catch(x){console.error("Failed to submit onboarding:",x),u(!1)}};return e?S.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[60vh]",children:[S.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"}),S.jsx("p",{className:"mt-4 text-slate-400 font-medium",children:"Loading Diagnostic Assessment..."})]}):S.jsxs("div",{className:"max-w-4xl mx-auto py-8 px-4",children:[S.jsxs("div",{className:"text-center mb-8",children:[S.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 bg-blue-950/80 border border-blue-800/50 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wider mb-3",children:[S.jsx(xa,{className:"w-4 h-4"}),S.jsx("span",{children:"Learner Diagnostic & VARK Profiler"})]}),S.jsx("h1",{className:"text-3xl font-extrabold text-white sm:text-4xl",children:"Build Your Personalized AI Learning Path"}),S.jsx("p",{className:"mt-2 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base",children:"Answer a quick 2-minute questionnaire to calibrate your unique sensory learning style, baseline skill level, and study pace preference."})]}),S.jsx("div",{className:"mb-8 bg-slate-800 rounded-full h-2.5 overflow-hidden",children:S.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-indigo-500 h-2.5 transition-all duration-500",style:{width:p===1?"35%":p===2?"75%":"100%"}})}),p===1&&S.jsxs("div",{className:"glass-card rounded-2xl p-6 sm:p-8 space-y-8",children:[S.jsxs("h2",{className:"text-xl font-bold text-white flex items-center space-x-2",children:[S.jsx(ga,{className:"w-5 h-5 text-blue-400"}),S.jsx("span",{children:"Step 1: Learning Style Preference (VARK)"})]}),i==null?void 0:i.varkQuestions.map((x,y)=>S.jsxs("div",{className:"space-y-4",children:[S.jsxs("p",{className:"text-slate-200 font-semibold text-base sm:text-lg",children:[y+1,". ",x.question]}),S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:x.options.map(v=>{const T=s[x.id]===v.style;return S.jsx("button",{type:"button",onClick:()=>M(x.id,v.style),className:`text-left p-4 rounded-xl border text-sm font-medium transition-all ${T?"bg-blue-600/30 border-blue-500 text-white ring-2 ring-blue-500/50":"bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-700/50 hover:border-slate-600"}`,children:S.jsxs("div",{className:"flex items-start justify-between",children:[S.jsx("span",{children:v.text}),S.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900/80 text-blue-400 ml-2",children:v.style})]})},v.style+v.text)})})]},x.id)),S.jsx("div",{className:"flex justify-end pt-4",children:S.jsxs("button",{disabled:Object.keys(s).length<(i==null?void 0:i.varkQuestions.length),onClick:()=>m(2),className:"flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/30",children:[S.jsx("span",{children:"Next: Diagnostic Skill Assessment"}),S.jsx(um,{className:"w-4 h-4"})]})})]}),p===2&&S.jsxs("div",{className:"glass-card rounded-2xl p-6 sm:p-8 space-y-8",children:[S.jsxs("h2",{className:"text-xl font-bold text-white flex items-center space-x-2",children:[S.jsx(nS,{className:"w-5 h-5 text-amber-400"}),S.jsx("span",{children:"Step 2: Diagnostic Baseline Quiz & Pace Preference"})]}),S.jsxs("div",{className:"space-y-3",children:[S.jsx("label",{className:"text-slate-200 font-semibold text-sm",children:"Preferred Learning & Practice Pace:"}),S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{key:"SLOW",label:"Slow & Deliberate",desc:"Focus on deep conceptual clarity"},{key:"MODERATE",label:"Moderate & Steady",desc:"Balanced theory and exercises"},{key:"FAST",label:"Fast & Intensive",desc:"Quick iterations and hard challenges"}].map(x=>S.jsxs("button",{type:"button",onClick:()=>l(x.key),className:`p-3.5 text-left rounded-xl border transition-all ${o===x.key?"bg-blue-600/30 border-blue-500 text-white ring-2 ring-blue-500/50":"bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-700/50"}`,children:[S.jsx("div",{className:"font-bold text-sm",children:x.label}),S.jsx("div",{className:"text-xs text-slate-400 mt-1",children:x.desc})]},x.key))})]}),S.jsx("hr",{className:"border-slate-800"}),S.jsxs("div",{className:"space-y-6",children:[S.jsx("h3",{className:"text-base font-bold text-slate-200",children:"Diagnostic Knowledge Check:"}),i==null?void 0:i.diagnosticQuiz.map((x,y)=>S.jsxs("div",{className:"p-4 bg-slate-800/50 border border-slate-700/60 rounded-xl space-y-3",children:[S.jsxs("div",{className:"flex justify-between items-center text-xs",children:[S.jsx("span",{className:"font-bold text-blue-400 uppercase tracking-wider",children:x.subject}),S.jsxs("span",{className:"text-slate-400",children:["Tag: ",x.topicTag]})]}),S.jsxs("p",{className:"text-slate-100 font-semibold text-sm sm:text-base",children:[y+1,". ",x.question]}),S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:x.options.map(v=>{const T=c[x.id]===v;return S.jsx("button",{type:"button",onClick:()=>g(x.id,v),className:`text-left px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm font-medium transition-all ${T?"bg-indigo-600/40 border-indigo-400 text-white font-semibold":"bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-700/40"}`,children:v},v)})})]},x.id))]}),S.jsxs("div",{className:"flex justify-between items-center pt-4",children:[S.jsx("button",{onClick:()=>m(1),className:"px-4 py-2 text-slate-400 hover:text-white text-sm font-medium",children:"Back"}),S.jsx("button",{disabled:h||Object.keys(c).length<(i==null?void 0:i.diagnosticQuiz.length),onClick:f,className:"flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/30",children:h?S.jsx("span",{children:"Generating Adaptive Profile..."}):S.jsxs(S.Fragment,{children:[S.jsx(fm,{className:"w-5 h-5"}),S.jsx("span",{children:"Generate Adaptive Profile"})]})})]})]}),p===3&&S.jsxs("div",{className:"glass-card rounded-2xl p-12 text-center space-y-6 max-w-xl mx-auto",children:[S.jsx("div",{className:"w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40",children:S.jsx(dm,{className:"w-10 h-10"})}),S.jsx("h2",{className:"text-2xl font-extrabold text-white",children:"Learner Profile Calibrated!"}),S.jsx("p",{className:"text-slate-300 text-sm",children:"Your VARK sensory learning style, pace preference, and initial subject skill scores have been recorded. Redirecting to your adaptive learning path..."})]})]})},iS=ie.createContext({});function IT(t){const e=ie.useRef(null);return e.current===null&&(e.current=t()),e.current}const UT=typeof window<"u",FT=UT?ie.useLayoutEffect:ie.useEffect,hm=ie.createContext(null);function pm(t,e){t.indexOf(e)===-1&&t.push(e)}function jc(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Ni=(t,e,n)=>n>e?e:n<t?t:n;let Tu=()=>{};const Lr={},rS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),sS=t=>typeof t=="object"&&t!==null,aS=t=>/^0[^.\s]+$/u.test(t);function oS(t){let e;return()=>(e===void 0&&(e=t()),e)}const Yn=t=>t,$o=(...t)=>t.reduce((e,n)=>i=>n(e(i))),Fo=(t,e,n)=>{const i=e-t;return i?(n-t)/i:1};class mm{constructor(){this.subscriptions=[]}add(e){return pm(this.subscriptions,e),()=>jc(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const a=this.subscriptions[s];a&&a(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const In=t=>t*1e3,jn=t=>t/1e3,lS=(t,e)=>e?t*(1e3/e):0,cS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,OT=1e-7,kT=12;function BT(t,e,n,i,r){let s,a,o=0;do a=e+(n-e)/2,s=cS(a,i,r)-t,s>0?n=a:e=a;while(Math.abs(s)>OT&&++o<kT);return a}function qo(t,e,n,i){if(t===e&&n===i)return Yn;const r=s=>BT(s,0,1,t,n);return s=>s===0||s===1?s:cS(r(s),e,i)}const uS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,dS=t=>e=>1-t(1-e),fS=qo(.33,1.53,.69,.99),gm=dS(fS),hS=uS(gm),pS=t=>t>=1?1:(t*=2)<1?.5*gm(t):.5*(2-Math.pow(2,-10*(t-1))),xm=t=>1-Math.sin(Math.acos(t)),mS=dS(xm),gS=uS(xm),VT=qo(.42,0,1,1),zT=qo(0,0,.58,1),xS=qo(.42,0,.58,1),HT=t=>Array.isArray(t)&&typeof t[0]!="number",vS=t=>Array.isArray(t)&&typeof t[0]=="number",GT={linear:Yn,easeIn:VT,easeInOut:xS,easeOut:zT,circIn:xm,circInOut:gS,circOut:mS,backIn:gm,backInOut:hS,backOut:fS,anticipate:pS},WT=t=>typeof t=="string",b0=t=>{if(vS(t)){Tu(t.length===4);const[e,n,i,r]=t;return qo(e,n,i,r)}else if(WT(t))return GT[t];return t},yl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function jT(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function o(c){s.has(c)&&(l.schedule(c),t()),c(a)}const l={schedule:(c,d=!1,h=!1)=>{const p=h&&i?e:n;return d&&s.add(c),p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(a=c,i){r=!0;return}i=!0;const d=e;e=n,n=d,e.forEach(o),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const XT=40;function _S(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,a=yl.reduce((y,v)=>(y[v]=jT(s),y),{}),{setup:o,read:l,resolveKeyframes:c,preUpdate:d,update:h,preRender:u,render:p,postRender:m}=a,M=()=>{const y=Lr.useManualTiming,v=y?r.timestamp:performance.now();n=!1,y||(r.delta=i?1e3/60:Math.max(Math.min(v-r.timestamp,XT),1)),r.timestamp=v,r.isProcessing=!0,o.process(r),l.process(r),c.process(r),d.process(r),h.process(r),u.process(r),p.process(r),m.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(M))},g=()=>{n=!0,i=!0,r.isProcessing||t(M)};return{schedule:yl.reduce((y,v)=>{const T=a[v];return y[v]=(A,b=!1,_=!1)=>(n||g(),T.schedule(A,b,_)),y},{}),cancel:y=>{for(let v=0;v<yl.length;v++)a[yl[v]].cancel(y)},state:r,steps:a}}const{schedule:ut,cancel:Ir,state:Yt,steps:cd}=_S(typeof requestAnimationFrame<"u"?requestAnimationFrame:Yn,!0);let lc;function YT(){lc=void 0}const dn={now:()=>(lc===void 0&&dn.set(Yt.isProcessing||Lr.useManualTiming?Yt.timestamp:performance.now()),lc),set:t=>{lc=t,queueMicrotask(YT)}},yS=t=>e=>typeof e=="string"&&e.startsWith(t),SS=yS("--"),$T=yS("var(--"),vm=t=>$T(t)?qT.test(t.split("/*")[0].trim()):!1,qT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function A0(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Aa={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Oo={...Aa,transform:t=>Ni(0,1,t)},Sl={...Aa,default:1},po=t=>Math.round(t*1e5)/1e5,_m=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function KT(t){return t==null}const ZT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ym=(t,e)=>n=>!!(typeof n=="string"&&ZT.test(n)&&n.startsWith(t)||e&&!KT(n)&&Object.prototype.hasOwnProperty.call(n,e)),MS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,a,o]=i.match(_m);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},QT=t=>Ni(0,255,t),ud={...Aa,transform:t=>Math.round(QT(t))},ns={test:ym("rgb","red"),parse:MS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+ud.transform(t)+", "+ud.transform(e)+", "+ud.transform(n)+", "+po(Oo.transform(i))+")"};function JT(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Jf={test:ym("#"),parse:JT,transform:ns.transform},Ko=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Bi=Ko("deg"),Ci=Ko("%"),Me=Ko("px"),eb=Ko("vh"),tb=Ko("vw"),C0={...Ci,parse:t=>Ci.parse(t)/100,transform:t=>Ci.transform(t*100)},Ks={test:ym("hsl","hue"),parse:MS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ci.transform(po(e))+", "+Ci.transform(po(n))+", "+po(Oo.transform(i))+")"},Ut={test:t=>ns.test(t)||Jf.test(t)||Ks.test(t),parse:t=>ns.test(t)?ns.parse(t):Ks.test(t)?Ks.parse(t):Jf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ns.transform(t):Ks.transform(t),getAnimatableNone:t=>{const e=Ut.parse(t);return e.alpha=0,Ut.transform(e)}},nb=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ib(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(_m))==null?void 0:e.length)||0)+(((n=t.match(nb))==null?void 0:n.length)||0)>0}const ES="number",wS="color",rb="var",sb="var(",R0="${}",ab=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function va(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const o=e.replace(ab,l=>(Ut.test(l)?(i.color.push(s),r.push(wS),n.push(Ut.parse(l))):l.startsWith(sb)?(i.var.push(s),r.push(rb),n.push(l)):(i.number.push(s),r.push(ES),n.push(parseFloat(l))),++s,R0)).split(R0);return{values:n,split:o,indexes:i,types:r}}function ob(t){return va(t).values}function TS({split:t,types:e}){const n=t.length;return i=>{let r="";for(let s=0;s<n;s++)if(r+=t[s],i[s]!==void 0){const a=e[s];a===ES?r+=po(i[s]):a===wS?r+=Ut.transform(i[s]):r+=i[s]}return r}}function lb(t){return TS(va(t))}const cb=t=>typeof t=="number"?0:Ut.test(t)?Ut.getAnimatableNone(t):t,ub=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:cb(t);function db(t){const e=va(t);return TS(e)(e.values.map((i,r)=>ub(i,e.split[r])))}const ui={test:ib,parse:ob,createTransformer:lb,getAnimatableNone:db};function dd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function fb({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,a=0;if(!e)r=s=a=n;else{const o=n<.5?n*(1+e):n+e-n*e,l=2*n-o;r=dd(l,o,t+1/3),s=dd(l,o,t),a=dd(l,o,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:i}}function Xc(t,e){return n=>n>0?e:t}const ct=(t,e,n)=>t+(e-t)*n,fd=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},hb=[Jf,ns,Ks],pb=t=>hb.find(e=>e.test(t));function P0(t){const e=pb(t);if(!e)return!1;let n=e.parse(t);return e===Ks&&(n=fb(n)),n}const N0=(t,e)=>{const n=P0(t),i=P0(e);if(!n||!i)return Xc(t,e);const r={...n};return s=>(r.red=fd(n.red,i.red,s),r.green=fd(n.green,i.green,s),r.blue=fd(n.blue,i.blue,s),r.alpha=ct(n.alpha,i.alpha,s),ns.transform(r))},eh=new Set(["none","hidden"]);function mb(t,e){return eh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function gb(t,e){return n=>ct(t,e,n)}function Sm(t){return typeof t=="number"?gb:typeof t=="string"?vm(t)?Xc:Ut.test(t)?N0:_b:Array.isArray(t)?bS:typeof t=="object"?Ut.test(t)?N0:xb:Xc}function bS(t,e){const n=[...t],i=n.length,r=t.map((s,a)=>Sm(s)(s,e[a]));return s=>{for(let a=0;a<i;a++)n[a]=r[a](s);return n}}function xb(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Sm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function vb(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],a=t.indexes[s][i[s]],o=t.values[a]??0;n[r]=o,i[s]++}return n}const _b=(t,e)=>{const n=ui.createTransformer(e),i=va(t),r=va(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?eh.has(t)&&!r.values.length||eh.has(e)&&!i.values.length?mb(t,e):$o(bS(vb(i,r),r.values),n):Xc(t,e)};function AS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ct(t,e,n):Sm(t)(t,e)}const yb=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>ut.update(e,n),stop:()=>Ir(e),now:()=>Yt.isProcessing?Yt.timestamp:dn.now()}},CS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Yc=2e4;function Mm(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Yc;)e+=n,i=t.next(e);return e>=Yc?1/0:e}function Sb(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(Mm(i),Yc);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:jn(r)}}const At={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function th(t,e){return t*Math.sqrt(1-e*e)}const Mb=12;function Eb(t,e,n){let i=n;for(let r=1;r<Mb;r++)i=i-t(i)/e(i);return i}const hd=.001;function wb({duration:t=At.duration,bounce:e=At.bounce,velocity:n=At.velocity,mass:i=At.mass}){let r,s,a=1-e;a=Ni(At.minDamping,At.maxDamping,a),t=Ni(At.minDuration,At.maxDuration,jn(t)),a<1?(r=c=>{const d=c*a,h=d*t,u=d-n,p=th(c,a),m=Math.exp(-h);return hd-u/p*m},s=c=>{const h=c*a*t,u=h*n+n,p=Math.pow(a,2)*Math.pow(c,2)*t,m=Math.exp(-h),M=th(Math.pow(c,2),a);return(-r(c)+hd>0?-1:1)*((u-p)*m)/M}):(r=c=>{const d=Math.exp(-c*t),h=(c-n)*t+1;return-hd+d*h},s=c=>{const d=Math.exp(-c*t),h=(n-c)*(t*t);return d*h});const o=5/t,l=Eb(r,s,o);if(t=In(t),isNaN(l))return{stiffness:At.stiffness,damping:At.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:a*2*Math.sqrt(i*c),duration:t}}}const Tb=["duration","bounce"],bb=["stiffness","damping","mass"];function D0(t,e){return e.some(n=>t[n]!==void 0)}function Ab(t){let e={velocity:At.velocity,stiffness:At.stiffness,damping:At.damping,mass:At.mass,isResolvedFromDuration:!1,...t};if(!D0(t,bb)&&D0(t,Tb))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Ni(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:At.mass,stiffness:r,damping:s}}else{const n=wb({...t,velocity:0});e={...e,...n,mass:At.mass},e.isResolvedFromDuration=!0}return e}function $c(t=At.visualDuration,e=At.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],o={done:!1,value:s},{stiffness:l,damping:c,mass:d,duration:h,velocity:u,isResolvedFromDuration:p}=Ab({...n,velocity:-jn(n.velocity||0)}),m=u||0,M=c/(2*Math.sqrt(l*d)),g=a-s,f=jn(Math.sqrt(l/d)),x=Math.abs(g)<5;i||(i=x?At.restSpeed.granular:At.restSpeed.default),r||(r=x?At.restDelta.granular:At.restDelta.default);let y,v,T,A,b,_;if(M<1)T=th(f,M),A=(m+M*f*g)/T,y=P=>{const N=Math.exp(-M*f*P);return a-N*(A*Math.sin(T*P)+g*Math.cos(T*P))},b=M*f*A+g*T,_=M*f*g-A*T,v=P=>Math.exp(-M*f*P)*(b*Math.sin(T*P)+_*Math.cos(T*P));else if(M===1){y=N=>a-Math.exp(-f*N)*(g+(m+f*g)*N);const P=m+f*g;v=N=>Math.exp(-f*N)*(f*P*N-m)}else{const P=f*Math.sqrt(M*M-1);y=$=>{const O=Math.exp(-M*f*$),Y=Math.min(P*$,300);return a-O*((m+M*f*g)*Math.sinh(Y)+P*g*Math.cosh(Y))/P};const N=(m+M*f*g)/P,F=M*f*N-g*P,V=M*f*g-N*P;v=$=>{const O=Math.exp(-M*f*$),Y=Math.min(P*$,300);return O*(F*Math.sinh(Y)+V*Math.cosh(Y))}}const C={calculatedDuration:p&&h||null,velocity:P=>In(v(P)),next:P=>{if(!p&&M<1){const F=Math.exp(-M*f*P),V=Math.sin(T*P),$=Math.cos(T*P),O=a-F*(A*V+g*$),Y=In(F*(b*V+_*$));return o.done=Math.abs(Y)<=i&&Math.abs(a-O)<=r,o.value=o.done?a:O,o}const N=y(P);if(p)o.done=P>=h;else{const F=In(v(P));o.done=Math.abs(F)<=i&&Math.abs(a-N)<=r}return o.value=o.done?a:N,o},toString:()=>{const P=Math.min(Mm(C),Yc),N=CS(F=>C.next(P*F).value,P,30);return P+"ms "+N},toTransition:()=>{}};return C}$c.applyToOptions=t=>{const e=Sb(t,100,$c);return t.ease=e.ease,t.duration=In(e.duration),t.type="keyframes",t};const Cb=5;function RS(t,e,n){const i=Math.max(e-Cb,0);return lS(n-t(i),e-i)}function nh({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:c=.5,restSpeed:d}){const h=t[0],u={done:!1,value:h},p=_=>o!==void 0&&_<o||l!==void 0&&_>l,m=_=>o===void 0?l:l===void 0||Math.abs(o-_)<Math.abs(l-_)?o:l;let M=n*e;const g=h+M,f=a===void 0?g:a(g);f!==g&&(M=f-h);const x=_=>-M*Math.exp(-_/i),y=_=>f+x(_),v=_=>{const C=x(_),P=y(_);u.done=Math.abs(C)<=c,u.value=u.done?f:P};let T,A;const b=_=>{p(u.value)&&(T=_,A=$c({keyframes:[u.value,m(u.value)],velocity:RS(y,_,u.value),damping:r,stiffness:s,restDelta:c,restSpeed:d}))};return b(0),{calculatedDuration:null,next:_=>{let C=!1;return!A&&T===void 0&&(C=!0,v(_),b(_)),T!==void 0&&_>=T?A.next(_-T):(!C&&v(_),u)}}}function Rb(t,e,n){const i=[],r=n||Lr.mix||AS,s=t.length-1;for(let a=0;a<s;a++){let o=r(t[a],t[a+1]);if(e){const l=Array.isArray(e)?e[a]||Yn:e;o=$o(l,o)}i.push(o)}return i}function Pb(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Tu(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const a=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=Rb(e,i,r),l=o.length,c=d=>{if(a&&d<t[0])return e[0];let h=0;if(l>1)for(;h<t.length-2&&!(d<t[h+1]);h++);const u=Fo(t[h],t[h+1],d);return o[h](u)};return n?d=>c(Ni(t[0],t[s-1],d)):c}function Nb(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Fo(0,e,i);t.push(ct(n,1,r))}}function Db(t){const e=[0];return Nb(e,t.length-1),e}function Lb(t,e){return t.map(n=>n*e)}function Ib(t,e){return t.map(()=>e||xS).splice(0,t.length-1)}function mo({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=HT(i)?i.map(b0):b0(i),s={done:!1,value:e[0]},a=Lb(n&&n.length===e.length?n:Db(e),t),o=Pb(a,e,{ease:Array.isArray(r)?r:Ib(e,r)});return{calculatedDuration:t,next:l=>(s.value=o(l),s.done=l>=t,s)}}const Ub=t=>t!==null;function bu(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(Ub),o=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!o||i===void 0?s[o]:i}const Fb={decay:nh,inertia:nh,tween:mo,keyframes:mo,spring:$c};function PS(t){typeof t.type=="string"&&(t.type=Fb[t.type])}class Em{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const Ob=t=>t/100;class qc extends Em{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==dn.now()&&this.tick(dn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;PS(e);const{type:n=mo,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:a=0}=e;let{keyframes:o}=e;const l=n||mo;l!==mo&&typeof o[0]!="number"&&(this.mixKeyframes=$o(Ob,AS(o[0],o[1])),o=[0,100]);const c=l({...e,keyframes:o});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Mm(c));const{calculatedDuration:d}=c;this.calculatedDuration=d,this.resolvedDuration=d+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:d,repeat:h,repeatType:u,repeatDelay:p,type:m,onUpdate:M,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const f=this.currentTime-c*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?f<0:f>r;this.currentTime=Math.max(f,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let y=this.currentTime,v=i;if(h){const _=Math.min(this.currentTime,r)/o;let C=Math.floor(_),P=_%1;!P&&_>=1&&(P=1),P===1&&C--,C=Math.min(C,h+1),!!(C%2)&&(u==="reverse"?(P=1-P,p&&(P-=p/o)):u==="mirror"&&(v=a)),y=Ni(0,1,P)*o}let T;x?(this.delayState.value=d[0],T=this.delayState):T=v.next(y),s&&!x&&(T.value=s(T.value));let{done:A}=T;!x&&l!==null&&(A=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const b=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return b&&m!==nh&&(T.value=bu(d,this.options,g,this.speed)),M&&M(T.value),b&&this.finish(),T}then(e,n){return this.finished.then(e,n)}get duration(){return jn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+jn(e)}get time(){return jn(this.currentTime)}set time(e){e=In(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return RS(i=>this.generator.next(i).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(dn.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=jn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=yb,startTime:n}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(dn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function kb(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const is=t=>t*180/Math.PI,ih=t=>{const e=is(Math.atan2(t[1],t[0]));return rh(e)},Bb={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:ih,rotateZ:ih,skewX:t=>is(Math.atan(t[1])),skewY:t=>is(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},rh=t=>(t=t%360,t<0&&(t+=360),t),L0=ih,I0=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),U0=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),Vb={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:I0,scaleY:U0,scale:t=>(I0(t)+U0(t))/2,rotateX:t=>rh(is(Math.atan2(t[6],t[5]))),rotateY:t=>rh(is(Math.atan2(-t[2],t[0]))),rotateZ:L0,rotate:L0,skewX:t=>is(Math.atan(t[4])),skewY:t=>is(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function sh(t){return t.includes("scale")?1:0}function ah(t,e){if(!t||t==="none")return sh(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=Vb,r=n;else{const o=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=Bb,r=o}if(!r)return sh(e);const s=i[e],a=r[1].split(",").map(Hb);return typeof s=="function"?s(a):a[s]}const zb=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return ah(n,e)};function Hb(t){return parseFloat(t.trim())}const Ca=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ra=new Set([...Ca,"pathRotation"]),F0=t=>t===Aa||t===Me,Gb=new Set(["x","y","z"]),Wb=Ca.filter(t=>!Gb.has(t));function jb(t){const e=[];return Wb.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Sr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>ah(e,"x"),y:(t,{transform:e})=>ah(e,"y")};Sr.translateX=Sr.x;Sr.translateY=Sr.y;const ls=new Set;let oh=!1,lh=!1,ch=!1;function NS(){if(lh){const t=Array.from(ls).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=jb(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,a])=>{var o;(o=i.getValue(s))==null||o.set(a)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}lh=!1,oh=!1,ls.forEach(t=>t.complete(ch)),ls.clear()}function DS(){ls.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(lh=!0)})}function Xb(){ch=!0,DS(),NS(),ch=!1}class wm{constructor(e,n,i,r,s,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(ls.add(this),oh||(oh=!0,ut.read(DS),ut.resolveKeyframes(NS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),a=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const o=i.readValue(n,a);o!=null&&(e[0]=o)}e[0]===void 0&&(e[0]=a),r&&s===void 0&&r.set(e[0])}kb(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ls.delete(this)}cancel(){this.state==="scheduled"&&(ls.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Yb=t=>t.startsWith("--");function LS(t,e,n){Yb(e)?t.style.setProperty(e,n):t.style[e]=n}const $b={};function IS(t,e){const n=oS(t);return()=>$b[e]??n()}const qb=IS(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),US=IS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),eo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,O0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:eo([0,.65,.55,1]),circOut:eo([.55,0,1,.45]),backIn:eo([.31,.01,.66,-.59]),backOut:eo([.33,1.53,.69,.99])};function FS(t,e){if(t)return typeof t=="function"?US()?CS(t,e):"ease-out":vS(t)?eo(t):Array.isArray(t)?t.map(n=>FS(n,e)||O0.easeOut):O0[t]}function Kb(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:a="loop",ease:o="easeOut",times:l}={},c=void 0){const d={[e]:n};l&&(d.offset=l);const h=FS(o,r);Array.isArray(h)&&(d.easing=h);const u={delay:i,duration:r,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"};return c&&(u.pseudoElement=c),t.animate(d,u)}function OS(t){return typeof t=="function"&&"applyToOptions"in t}function Zb({type:t,...e}){return OS(t)&&US()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class kS extends Em{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:a=!1,finalKeyframe:o,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=a,this.options=e,Tu(typeof e.type!="string");const c=Zb(e);this.animation=Kb(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const d=bu(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(d),LS(n,i,d),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return jn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+jn(e)}get time(){return jn(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=In(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&qb()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),Yn):r(this)}}const BS={anticipate:pS,backInOut:hS,circInOut:gS};function Qb(t){return t in BS}function Jb(t){typeof t.ease=="string"&&Qb(t.ease)&&(t.ease=BS[t.ease])}const pd=10;class eA extends kS{constructor(e){Jb(e),PS(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...a}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const o=new qc({...a,autoplay:!1}),l=Math.max(pd,dn.now()-this.startTime),c=Ni(0,pd,l-pd),d=o.sample(l).value,{name:h}=this.options;s&&h&&LS(s,h,d),n.setWithVelocity(o.sample(Math.max(0,l-c)).value,d,c),o.stop()}}const k0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ui.test(t)||t==="0")&&!t.startsWith("url("));function tA(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function nA(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],a=k0(r,e),o=k0(s,e);return!a||!o?!1:tA(t)||(n==="spring"||OS(n))&&i}function uh(t){t.duration=0,t.type="keyframes"}const VS=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),iA=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function rA(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&iA.test(t[e]))return!0;return!1}const sA=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),aA=oS(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function oA(t){var h;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:a,keyframes:o}=t,l=(h=e==null?void 0:e.owner)==null?void 0:h.current;if(!(l instanceof HTMLElement)&&!(l instanceof SVGElement))return!1;const{onUpdate:c,transformTemplate:d}=e.owner.getProps();return aA()&&n&&(VS.has(n)||sA.has(n)&&rA(o))&&(n!=="transform"||!d)&&!c&&!i&&r!=="mirror"&&s!==0&&a!=="inertia"}const lA=40;class cA extends Em{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:a="loop",keyframes:o,name:l,motionValue:c,element:d,...h}){var m;super(),this.stop=()=>{var M,g;this._animation&&(this._animation.stop(),(M=this.stopTimeline)==null||M.call(this)),(g=this.keyframeResolver)==null||g.cancel()},this.createdAt=dn.now();const u={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:a,name:l,motionValue:c,element:d,...h},p=(d==null?void 0:d.KeyframeResolver)||wm;this.keyframeResolver=new p(o,(M,g,f)=>this.onKeyframesResolved(M,g,u,!f),l,c,d),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(e,n,i,r){var f,x;this.keyframeResolver=void 0;const{name:s,type:a,velocity:o,delay:l,isHandoff:c,onUpdate:d}=i;this.resolvedAt=dn.now();let h=!0;nA(e,s,a,o)||(h=!1,(Lr.instantAnimations||!l)&&(d==null||d(bu(e,i,n))),e[0]=e[e.length-1],uh(i),i.repeat=0);const p={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>lA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},m=h&&!c&&oA(p),M=(x=(f=p.motionValue)==null?void 0:f.owner)==null?void 0:x.current;let g;if(m)try{g=new eA({...p,element:M})}catch{g=new qc(p)}else g=new qc(p);g.finished.then(()=>{this.notifyFinished()}).catch(Yn),this.pendingTimeline&&(this.stopTimeline=g.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=g}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),Xb()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function zS(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,d)=>c.sortNodePosition(d)).indexOf(e),a=t.size,o=(a-1)*i;return typeof n=="function"?n(s,a):r===1?s*i:o-s*i}const B0=30,uA=t=>!isNaN(parseFloat(t));class dA{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=dn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const a of this.dependents)a.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=dn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=uA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new mm);const i=this.events[e].add(n);return e==="change"?()=>{i(),ut.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=dn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>B0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,B0);return lS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function _a(t,e){return new dA(t,e)}function HS(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function Tm(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?HS(n,t):n}const fA={type:"spring",stiffness:500,damping:25,restSpeed:10},hA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),pA={type:"keyframes",duration:.8},mA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},gA=(t,{keyframes:e})=>e.length>2?pA:Ra.has(t)?t.startsWith("scale")?hA(e[1]):fA:mA,xA=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function vA(t){for(const e in t)if(!xA.has(e))return!0;return!1}const bm=(t,e,n,i={},r,s)=>a=>{const o=Tm(i,t)||{},l=o.delay||i.delay||0;let{elapsed:c=0}=i;c=c-In(l);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...o,delay:-c,onUpdate:u=>{e.set(u),o.onUpdate&&o.onUpdate(u)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:t,motionValue:e,element:s?void 0:r};vA(o)||Object.assign(d,gA(t,d)),d.duration&&(d.duration=In(d.duration)),d.repeatDelay&&(d.repeatDelay=In(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let h=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(uh(d),d.delay===0&&(h=!0)),(Lr.instantAnimations||Lr.skipAnimations||r!=null&&r.shouldSkipAnimations||o.skipAnimations)&&(h=!0,uh(d),d.delay=0),d.allowFlatten=!o.type&&!o.ease,h&&!s&&e.get()!==void 0){const u=bu(d.keyframes,o);if(u!==void 0){ut.update(()=>{d.onUpdate(u),d.onComplete()});return}}return o.isSync?new qc(d):new cA(d)},_A=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yA(t){const e=_A.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function GS(t,e,n=1){const[i,r]=yA(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const a=s.trim();return rS(a)?parseFloat(a):a}return vm(r)?GS(r,e,n+1):r}function V0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Am(t,e,n,i){if(typeof e=="function"){const[r,s]=V0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=V0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function cs(t,e,n){const i=t.getProps();return Am(i,e,n!==void 0?n:i.custom,t)}const WS=new Set(["width","height","top","left","right","bottom",...Ca]),dh=t=>Array.isArray(t);function SA(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,_a(n))}function MA(t){return dh(t)?t[t.length-1]||0:t}function EA(t,e){const n=cs(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const a in s){const o=MA(s[a]);SA(t,a,o)}}const $t=t=>!!(t&&t.getVelocity);function wA(t){return!!($t(t)&&t.add)}function fh(t,e){const n=t.getValue("willChange");if(wA(n))return n.add(e);if(!n&&Lr.WillChange){const i=new Lr.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function Cm(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const TA="framerAppearId",jS="data-"+Cm(TA);function XS(t){return t.props[jS]}function bA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function YS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:a,...o}=e;const l=t.getDefaultTransition();s=s?HS(s,l):l;const c=s==null?void 0:s.reduceMotion,d=s==null?void 0:s.skipAnimations;i&&(s=i);const h=[],u=r&&t.animationState&&t.animationState.getState()[r],p=s==null?void 0:s.path;p&&p.animateVisualElement(t,o,s,n,h);for(const m in o){const M=t.getValue(m,t.latestValues[m]??null),g=o[m];if(g===void 0||u&&bA(u,m))continue;const f={delay:n,...Tm(s||{},m)};d&&(f.skipAnimations=!0);const x=M.get();if(x!==void 0&&!M.isAnimating()&&!Array.isArray(g)&&g===x&&!f.velocity){ut.update(()=>M.set(g));continue}let y=!1;if(window.MotionHandoffAnimation){const A=XS(t);if(A){const b=window.MotionHandoffAnimation(A,m,ut);b!==null&&(f.startTime=b,y=!0)}}fh(t,m);const v=c??t.shouldReduceMotion;M.start(bm(m,M,g,v&&WS.has(m)?{type:!1}:f,t,y));const T=M.animation;T&&h.push(T)}if(a){const m=()=>ut.update(()=>{a&&EA(t,a)});h.length?Promise.all(h).then(m):m()}return h}function hh(t,e,n={}){var l;const i=cs(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(YS(t,i,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:h,staggerDirection:u}=r;return AA(t,e,c,d,h,u,n)}:()=>Promise.resolve(),{when:o}=r;if(o){const[c,d]=o==="beforeChildren"?[s,a]:[a,s];return c().then(()=>d())}else return Promise.all([s(),a(n.delay)])}function AA(t,e,n=0,i=0,r=0,s=1,a){const o=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),o.push(hh(l,e,{...a,delay:n+(typeof i=="function"?0:i)+zS(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(o)}function CA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>hh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=hh(t,e,n);else{const r=typeof e=="function"?cs(t,e,n.custom):e;i=Promise.all(YS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const RA={test:t=>t==="auto",parse:t=>t},$S=t=>e=>e.test(t),qS=[Aa,Me,Ci,Bi,tb,eb,RA],z0=t=>qS.find($S(t));function PA(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||aS(t):!0}const NA=new Set(["brightness","contrast","saturate","opacity"]);function DA(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(_m)||[];if(!i)return t;const r=n.replace(i,"");let s=NA.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const LA=/\b([a-z-]*)\(.*?\)/gu,ph={...ui,getAnimatableNone:t=>{const e=t.match(LA);return e?e.map(DA).join(" "):t}},mh={...ui,getAnimatableNone:t=>{const e=ui.parse(t);return ui.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},H0={...Aa,transform:Math.round},IA={rotate:Bi,pathRotation:Bi,rotateX:Bi,rotateY:Bi,rotateZ:Bi,scale:Sl,scaleX:Sl,scaleY:Sl,scaleZ:Sl,skew:Bi,skewX:Bi,skewY:Bi,distance:Me,translateX:Me,translateY:Me,translateZ:Me,x:Me,y:Me,z:Me,perspective:Me,transformPerspective:Me,opacity:Oo,originX:C0,originY:C0,originZ:Me},Kc={borderWidth:Me,borderTopWidth:Me,borderRightWidth:Me,borderBottomWidth:Me,borderLeftWidth:Me,borderRadius:Me,borderTopLeftRadius:Me,borderTopRightRadius:Me,borderBottomRightRadius:Me,borderBottomLeftRadius:Me,width:Me,maxWidth:Me,height:Me,maxHeight:Me,top:Me,right:Me,bottom:Me,left:Me,inset:Me,insetBlock:Me,insetBlockStart:Me,insetBlockEnd:Me,insetInline:Me,insetInlineStart:Me,insetInlineEnd:Me,padding:Me,paddingTop:Me,paddingRight:Me,paddingBottom:Me,paddingLeft:Me,paddingBlock:Me,paddingBlockStart:Me,paddingBlockEnd:Me,paddingInline:Me,paddingInlineStart:Me,paddingInlineEnd:Me,margin:Me,marginTop:Me,marginRight:Me,marginBottom:Me,marginLeft:Me,marginBlock:Me,marginBlockStart:Me,marginBlockEnd:Me,marginInline:Me,marginInlineStart:Me,marginInlineEnd:Me,fontSize:Me,backgroundPositionX:Me,backgroundPositionY:Me,...IA,zIndex:H0,fillOpacity:Oo,strokeOpacity:Oo,numOctaves:H0},UA={...Kc,color:Ut,backgroundColor:Ut,outlineColor:Ut,fill:Ut,stroke:Ut,borderColor:Ut,borderTopColor:Ut,borderRightColor:Ut,borderBottomColor:Ut,borderLeftColor:Ut,filter:ph,WebkitFilter:ph,mask:mh,WebkitMask:mh},KS=t=>UA[t],FA=new Set([ph,mh]);function ZS(t,e){let n=KS(t);return FA.has(n)||(n=ui),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const OA=new Set(["auto","none","0"]);function kA(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!OA.has(s)&&va(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=ZS(n,r)}class BA extends wm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),vm(h))){const u=GS(h,n.current);u!==void 0&&(e[d]=u),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!WS.has(i)||e.length!==2)return;const[r,s]=e,a=z0(r),o=z0(s),l=A0(r),c=A0(s);if(l!==c&&Sr[i]){this.needsMeasurement=!0;return}if(a!==o)if(F0(a)&&F0(o))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else Sr[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||PA(e[r]))&&i.push(r);i.length&&kA(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Sr[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var o;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=Sr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),(o=this.removedTransforms)!=null&&o.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Rm=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function QS(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;const r=(n==null?void 0:n[t])??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const gh=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function VA(t){return sS(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Pm}=_S(queueMicrotask,!1),ni={x:!1,y:!1};function JS(){return ni.x||ni.y}function zA(t){return t==="x"||t==="y"?ni[t]?null:(ni[t]=!0,()=>{ni[t]=!1}):ni.x||ni.y?null:(ni.x=ni.y=!0,()=>{ni.x=ni.y=!1})}function eM(t,e){const n=QS(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function HA(t){return!(t.pointerType==="touch"||JS())}function GA(t,e,n={}){const[i,r,s]=eM(t,n);return i.forEach(a=>{let o=!1,l=!1,c;const d=()=>{a.removeEventListener("pointerleave",m)},h=g=>{c&&(c(g),c=void 0),d()},u=g=>{o=!1,window.removeEventListener("pointerup",u),window.removeEventListener("pointercancel",u),l&&(l=!1,h(g))},p=()=>{o=!0,window.addEventListener("pointerup",u,r),window.addEventListener("pointercancel",u,r)},m=g=>{if(g.pointerType!=="touch"){if(o){l=!0;return}h(g)}},M=g=>{if(!HA(g))return;l=!1;const f=e(a,g);typeof f=="function"&&(c=f,a.addEventListener("pointerleave",m,r))};a.addEventListener("pointerenter",M,r),a.addEventListener("pointerdown",p,r)}),s}const tM=(t,e)=>e?t===e?!0:tM(t,e.parentElement):!1,Nm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,WA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function jA(t){return WA.has(t.tagName)||t.isContentEditable===!0}const XA=new Set(["INPUT","SELECT","TEXTAREA"]);function YA(t){return XA.has(t.tagName)||t.isContentEditable===!0}const cc=new WeakSet;function G0(t){return e=>{e.key==="Enter"&&t(e)}}function md(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const $A=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=G0(()=>{if(cc.has(n))return;md(n,"down");const r=G0(()=>{md(n,"up")}),s=()=>md(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function W0(t){return Nm(t)&&!JS()}const j0=new WeakSet;function qA(t,e,n={}){const[i,r,s]=eM(t,n),a=o=>{const l=o.currentTarget;if(!W0(o)||j0.has(o))return;cc.add(l),n.stopPropagation&&j0.add(o);const c=e(l,o),d={...r,capture:!0},h=(m,M)=>{window.removeEventListener("pointerup",u,d),window.removeEventListener("pointercancel",p,d),cc.has(l)&&cc.delete(l),W0(m)&&typeof c=="function"&&c(m,{success:M})},u=m=>{h(m,l===window||l===document||n.useGlobalTarget||tM(l,m.target))},p=m=>{h(m,!1)};window.addEventListener("pointerup",u,d),window.addEventListener("pointercancel",p,d)};return i.forEach(o=>{(n.useGlobalTarget?window:o).addEventListener("pointerdown",a,r),VA(o)&&(o.addEventListener("focus",c=>$A(c,r)),!jA(o)&&!o.hasAttribute("tabindex")&&(o.tabIndex=0))}),s}function Dm(t){return sS(t)&&"ownerSVGElement"in t}const uc=new WeakMap;let hr;const nM=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:Dm(i)&&"getBBox"in i?i.getBBox()[e]:i[n],KA=nM("inline","width","offsetWidth"),ZA=nM("block","height","offsetHeight");function QA({target:t,borderBoxSize:e}){var n;(n=uc.get(t))==null||n.forEach(i=>{i(t,{get width(){return KA(t,e)},get height(){return ZA(t,e)}})})}function JA(t){t.forEach(QA)}function eC(){typeof ResizeObserver>"u"||(hr=new ResizeObserver(JA))}function tC(t,e){hr||eC();const n=QS(t);return n.forEach(i=>{let r=uc.get(i);r||(r=new Set,uc.set(i,r)),r.add(e),hr==null||hr.observe(i)}),()=>{n.forEach(i=>{const r=uc.get(i);r==null||r.delete(e),r!=null&&r.size||hr==null||hr.unobserve(i)})}}const dc=new Set;let Zs;function nC(){Zs=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};dc.forEach(e=>e(t))},window.addEventListener("resize",Zs)}function iC(t){return dc.add(t),Zs||nC(),()=>{dc.delete(t),!dc.size&&typeof Zs=="function"&&(window.removeEventListener("resize",Zs),Zs=void 0)}}function X0(t,e){return typeof t=="function"?iC(t):tC(t,e)}function rC(t){return Dm(t)&&t.tagName==="svg"}const sC=[...qS,Ut,ui],aC=t=>sC.find($S(t)),Y0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Qs=()=>({x:Y0(),y:Y0()}),$0=()=>({min:0,max:0}),kt=()=>({x:$0(),y:$0()}),oC=new WeakMap;function Au(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function ko(t){return typeof t=="string"||Array.isArray(t)}const Lm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Im=["initial",...Lm];function Cu(t){return Au(t.animate)||Im.some(e=>ko(t[e]))}function iM(t){return!!(Cu(t)||t.variants)}function lC(t,e,n){for(const i in e){const r=e[i],s=n[i];if($t(r))t.addValue(i,r);else if($t(s))t.addValue(i,_a(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const a=t.getValue(i);a.liveStyle===!0?a.jump(r):a.hasAnimated||a.set(r)}else{const a=t.getStaticValue(i);t.addValue(i,_a(a!==void 0?a:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const xh={current:null},rM={current:!1},cC=typeof window<"u";function uC(){if(rM.current=!0,!!cC)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>xh.current=t.matches;t.addEventListener("change",e),e()}else xh.current=!1}const q0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Zc={};function sM(t){Zc=t}function dC(){return Zc}class fC{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:a,visualState:o},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=wm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=dn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ut.render(this.render,!1,!0))};const{latestValues:c,renderState:d}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=d,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!a,this.isControllingVariants=Cu(n),this.isVariantNode=iM(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...u}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in u){const m=u[p];c[p]!==void 0&&$t(m)&&m.set(c[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=e,oC.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(rM.current||uC(),this.shouldReduceMotion=xh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Ir(this.notifyUpdate),Ir(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&VS.has(e)&&this.current instanceof HTMLElement){const{factory:a,keyframes:o,times:l,ease:c,duration:d}=n.accelerate,h=new kS({element:this.current,name:e,keyframes:o,times:l,ease:c,duration:In(d)}),u=a(h);this.valueSubscriptions.set(e,()=>{u(),h.cancel()});return}const i=Ra.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ut.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Zc){const n=Zc[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):kt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<q0.length;i++){const r=q0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,a=e[s];a&&(this.propEventSubscriptions[r]=this.on(r,a))}this.prevMotionValues=lC(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=_a(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(rS(i)||aS(i))?i=parseFloat(i):!aC(i)&&ui.test(n)&&(i=ZS(e,n)),this.setBaseTarget(e,$t(i)?i.get():i)),$t(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const a=Am(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);a&&(i=a[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!$t(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new mm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Pm.render(this.render)}}class aM extends fC{constructor(){super(...arguments),this.KeyframeResolver=BA}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;$t(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Vr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function oM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function hC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function pC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function gd(t){return t===void 0||t===1}function vh({scale:t,scaleX:e,scaleY:n}){return!gd(t)||!gd(e)||!gd(n)}function qr(t){return vh(t)||lM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function lM(t){return K0(t.x)||K0(t.y)}function K0(t){return t&&t!=="0%"}function Qc(t,e,n){const i=t-n,r=e*i;return n+r}function Z0(t,e,n,i,r){return r!==void 0&&(t=Qc(t,r,i)),Qc(t,n,i)+e}function _h(t,e=0,n=1,i,r){t.min=Z0(t.min,e,n,i,r),t.max=Z0(t.max,e,n,i,r)}function cM(t,{x:e,y:n}){_h(t.x,e.translate,e.scale,e.originPoint),_h(t.y,n.translate,n.scale,n.originPoint)}const Q0=.999999999999,J0=1.0000000000001;function mC(t,e,n,i=!1){var o;const r=n.length;if(!r)return;e.x=e.y=1;let s,a;for(let l=0;l<r;l++){s=n[l],a=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(Si(t.x,-s.scroll.offset.x),Si(t.y,-s.scroll.offset.y)),a&&(e.x*=a.x.scale,e.y*=a.y.scale,cM(t,a)),i&&qr(s.latestValues)&&fc(t,s.latestValues,(o=s.layout)==null?void 0:o.layoutBox))}e.x<J0&&e.x>Q0&&(e.x=1),e.y<J0&&e.y>Q0&&(e.y=1)}function Si(t,e){t.min+=e,t.max+=e}function ex(t,e,n,i,r=.5){const s=ct(t.min,t.max,r);_h(t,e,n,s,i)}function tx(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function fc(t,e,n){const i=n??t;ex(t.x,tx(e.x,i.x),e.scaleX,e.scale,e.originX),ex(t.y,tx(e.y,i.y),e.scaleY,e.scale,e.originY)}function uM(t,e){return oM(pC(t.getBoundingClientRect(),e))}function gC(t,e,n){const i=uM(t,n),{scroll:r}=e;return r&&(Si(i.x,r.offset.x),Si(i.y,r.offset.y)),i}const xC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},vC=Ca.length;function _C(t,e,n){let i="",r=!0;for(let a=0;a<vC;a++){const o=Ca[a],l=t[o];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(o.startsWith("scale")?1:0);else{const d=parseFloat(l);c=o.startsWith("scale")?d===1:d===0}if(!c||n){const d=gh(l,Kc[o]);if(!c){r=!1;const h=xC[o]||o;i+=`${h}(${d}) `}n&&(e[o]=d)}}const s=t.pathRotation;return s&&(r=!1,i+=`rotate(${gh(s,Kc.pathRotation)}) `),i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Um(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let a=!1,o=!1;for(const l in e){const c=e[l];if(Ra.has(l)){a=!0;continue}else if(SS(l)){r[l]=c;continue}else{const d=gh(c,Kc[l]);l.startsWith("origin")?(o=!0,s[l]=d):i[l]=d}}if(e.transform||(a||n?i.transform=_C(e,t.transform,n):i.transform&&(i.transform="none")),o){const{originX:l="50%",originY:c="50%",originZ:d=0}=s;i.transformOrigin=`${l} ${c} ${d}`}}function dM(t,{style:e,vars:n},i,r){const s=t.style;let a;for(a in e)s[a]=e[a];r==null||r.applyProjectionStyles(s,i);for(a in n)s.setProperty(a,n[a])}function nx(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const za={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Me.test(t))t=parseFloat(t);else return t;const n=nx(t,e.target.x),i=nx(t,e.target.y);return`${n}% ${i}%`}},yC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=ui.parse(t);if(r.length>5)return i;const s=ui.createTransformer(t),a=typeof r[0]!="number"?1:0,o=n.x.scale*e.x,l=n.y.scale*e.y;r[0+a]/=o,r[1+a]/=l;const c=ct(o,l,.5);return typeof r[2+a]=="number"&&(r[2+a]/=c),typeof r[3+a]=="number"&&(r[3+a]/=c),s(r)}},yh={borderRadius:{...za,applyTo:[...Rm]},borderTopLeftRadius:za,borderTopRightRadius:za,borderBottomLeftRadius:za,borderBottomRightRadius:za,boxShadow:yC};function fM(t,{layout:e,layoutId:n}){return Ra.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!yh[t]||t==="opacity")}function Fm(t,e,n){var a;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const o in i)($t(i[o])||r&&$t(r[o])||fM(o,t)||((a=n==null?void 0:n.getValue(o))==null?void 0:a.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function SC(t){return window.getComputedStyle(t)}class MC extends aM{constructor(){super(...arguments),this.type="html",this.renderInstance=dM}mount(e){Tu(!!e.style),super.mount(e)}readValueFromInstance(e,n){var i;if(Ra.has(n))return(i=this.projection)!=null&&i.isProjecting?sh(n):zb(e,n);{const r=SC(e),s=(SS(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return uM(e,n)}build(e,n,i){Um(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Fm(e,n,i)}}const EC={offset:"stroke-dashoffset",array:"stroke-dasharray"},wC={offset:"strokeDashoffset",array:"strokeDasharray"};function TC(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?EC:wC;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const bC=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function hM(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:a=0,...o},l,c,d){if(Um(t,o,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:u}=t;h.transform&&(u.transform=h.transform,delete h.transform),(u.transform||h.transformOrigin)&&(u.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),u.transform&&(u.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete h.transformBox);for(const p of bC)h[p]!==void 0&&(u[p]=h[p],delete h[p]);e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),i!==void 0&&(h.scale=i),r!==void 0&&TC(h,r,s,a,!1)}const pM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),mM=t=>typeof t=="string"&&t.toLowerCase()==="svg";function AC(t,e,n,i){dM(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(pM.has(r)?r:Cm(r),e.attrs[r])}function gM(t,e,n){const i=Fm(t,e,n);for(const r in t)if($t(t[r])||$t(e[r])){const s=Ca.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class CC extends aM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=kt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Ra.has(n)){const i=KS(n);return i&&i.default||0}return n=pM.has(n)?n:Cm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return gM(e,n,i)}build(e,n,i){hM(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){AC(e,n,i,r)}mount(e){this.isSVGTag=mM(e.tagName),super.mount(e)}}const RC=Im.length;function xM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?xM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<RC;n++){const i=Im[n],r=t.props[i];(ko(r)||r===!1)&&(e[i]=r)}return e}function vM(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const PC=[...Lm].reverse(),NC=Lm.length;function DC(t){return e=>Promise.all(e.map(({animation:n,options:i})=>CA(t,n,i)))}function LC(t){let e=DC(t),n=ix(),i=!0,r=!1;const s=c=>(d,h)=>{var p;const u=cs(t,h,c==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);if(u){const{transition:m,transitionEnd:M,...g}=u;d={...d,...g,...M}}return d};function a(c){e=c(t)}function o(c){const{props:d}=t,h=xM(t.parent)||{},u=[],p=new Set;let m={},M=1/0;for(let f=0;f<NC;f++){const x=PC[f],y=n[x],v=d[x]!==void 0?d[x]:h[x],T=ko(v),A=x===c?y.isActive:null;A===!1&&(M=f);let b=v===h[x]&&v!==d[x]&&T;if(b&&(i||r)&&t.manuallyAnimateOnMount&&(b=!1),y.protectedKeys={...m},!y.isActive&&A===null||!v&&!y.prevProp||Au(v)||typeof v=="boolean")continue;if(x==="exit"&&y.isActive&&A!==!0){y.prevResolvedValues&&(m={...m,...y.prevResolvedValues});continue}const _=IC(y.prevProp,v);let C=_||x===c&&y.isActive&&!b&&T||f>M&&T,P=!1;const N=Array.isArray(v)?v:[v];let F=N.reduce(s(x),{});A===!1&&(F={});const{prevResolvedValues:V={}}=y,$={...V,...F},O=D=>{C=!0,p.has(D)&&(P=!0,p.delete(D)),y.needsAnimating[D]=!0;const j=t.getValue(D);j&&(j.liveStyle=!1)};for(const D in $){const j=F[D],Q=V[D];if(m.hasOwnProperty(D))continue;let ne=!1;dh(j)&&dh(Q)?ne=!vM(j,Q)||_:ne=j!==Q,ne?j!=null?O(D):p.add(D):j!==void 0&&p.has(D)?O(D):y.protectedKeys[D]=!0}y.prevProp=v,y.prevResolvedValues=F,y.isActive&&(m={...m,...F}),(i||r)&&t.blockInitialAnimation&&(C=!1);const Y=b&&_;C&&(!Y||P)&&u.push(...N.map(D=>{const j={type:x};if(typeof D=="string"&&(i||r)&&!Y&&t.manuallyAnimateOnMount&&t.parent){const{parent:Q}=t,ne=cs(Q,D);if(Q.enteringChildren&&ne){const{delayChildren:ae}=ne.transition||{};j.delay=zS(Q.enteringChildren,t,ae)}}return{animation:D,options:j}}))}if(p.size){const f={};if(typeof d.initial!="boolean"){const x=cs(t,Array.isArray(d.initial)?d.initial[0]:d.initial);x&&x.transition&&(f.transition=x.transition)}p.forEach(x=>{const y=t.getBaseTarget(x),v=t.getValue(x);v&&(v.liveStyle=!0),f[x]=y??null}),u.push({animation:f})}let g=!!u.length;return i&&(d.initial===!1||d.initial===d.animate)&&!t.manuallyAnimateOnMount&&(g=!1),i=!1,r=!1,g?e(u):Promise.resolve()}function l(c,d){var u;if(n[c].isActive===d)return Promise.resolve();(u=t.variantChildren)==null||u.forEach(p=>{var m;return(m=p.animationState)==null?void 0:m.setActive(c,d)}),n[c].isActive=d;const h=o(c);for(const p in n)n[p].protectedKeys={};return h}return{animateChanges:o,setActive:l,setAnimateFunction:a,getState:()=>n,reset:()=>{n=ix(),r=!0}}}function IC(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!vM(e,t):!1}function Hr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ix(){return{animate:Hr(!0),whileInView:Hr(),whileHover:Hr(),whileTap:Hr(),whileDrag:Hr(),whileFocus:Hr(),exit:Hr()}}function Sh(t,e){t.min=e.min,t.max=e.max}function Qn(t,e){Sh(t.x,e.x),Sh(t.y,e.y)}function rx(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const _M=1e-4,UC=1-_M,FC=1+_M,yM=.01,OC=0-yM,kC=0+yM;function fn(t){return t.max-t.min}function BC(t,e,n){return Math.abs(t-e)<=n}function sx(t,e,n,i=.5){t.origin=i,t.originPoint=ct(e.min,e.max,t.origin),t.scale=fn(n)/fn(e),t.translate=ct(n.min,n.max,t.origin)-t.originPoint,(t.scale>=UC&&t.scale<=FC||isNaN(t.scale))&&(t.scale=1),(t.translate>=OC&&t.translate<=kC||isNaN(t.translate))&&(t.translate=0)}function go(t,e,n,i){sx(t.x,e.x,n.x,i?i.originX:void 0),sx(t.y,e.y,n.y,i?i.originY:void 0)}function ax(t,e,n,i=0){const r=i?ct(n.min,n.max,i):n.min;t.min=r+e.min,t.max=t.min+fn(e)}function VC(t,e,n,i){ax(t.x,e.x,n.x,i==null?void 0:i.x),ax(t.y,e.y,n.y,i==null?void 0:i.y)}function ox(t,e,n,i=0){const r=i?ct(n.min,n.max,i):n.min;t.min=e.min-r,t.max=t.min+fn(e)}function Jc(t,e,n,i){ox(t.x,e.x,n.x,i==null?void 0:i.x),ox(t.y,e.y,n.y,i==null?void 0:i.y)}function lx(t,e,n,i,r){return t-=e,t=Qc(t,1/n,i),r!==void 0&&(t=Qc(t,1/r,i)),t}function zC(t,e=0,n=1,i=.5,r,s=t,a=t){if(Ci.test(e)&&(e=parseFloat(e),e=ct(a.min,a.max,e/100)-a.min),typeof e!="number")return;let o=ct(s.min,s.max,i);t===s&&(o-=e),t.min=lx(t.min,e,n,o,r),t.max=lx(t.max,e,n,o,r)}function cx(t,e,[n,i,r],s,a){zC(t,e[n],e[i],e[r],e.scale,s,a)}const HC=["x","scaleX","originX"],GC=["y","scaleY","originY"];function ux(t,e,n,i){cx(t.x,e,HC,n?n.x:void 0,i?i.x:void 0),cx(t.y,e,GC,n?n.y:void 0,i?i.y:void 0)}function dx(t){return t.translate===0&&t.scale===1}function SM(t){return dx(t.x)&&dx(t.y)}function fx(t,e){return t.min===e.min&&t.max===e.max}function WC(t,e){return fx(t.x,e.x)&&fx(t.y,e.y)}function hx(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function MM(t,e){return hx(t.x,e.x)&&hx(t.y,e.y)}function px(t){return fn(t.x)/fn(t.y)}function mx(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function yi(t){return[t("x"),t("y")]}function jC(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,a=(n==null?void 0:n.z)||0;if((r||s||a)&&(i=`translate3d(${r}px, ${s}px, ${a}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:d,pathRotation:h,rotateX:u,rotateY:p,skewX:m,skewY:M}=n;c&&(i=`perspective(${c}px) ${i}`),d&&(i+=`rotate(${d}deg) `),h&&(i+=`rotate(${h}deg) `),u&&(i+=`rotateX(${u}deg) `),p&&(i+=`rotateY(${p}deg) `),m&&(i+=`skewX(${m}deg) `),M&&(i+=`skewY(${M}deg) `)}const o=t.x.scale*e.x,l=t.y.scale*e.y;return(o!==1||l!==1)&&(i+=`scale(${o}, ${l})`),i||"none"}const XC=Rm.length,gx=t=>typeof t=="string"?parseFloat(t):t,xx=t=>typeof t=="number"||Me.test(t);function YC(t,e,n,i,r,s){r?(t.opacity=ct(0,n.opacity??1,$C(i)),t.opacityExit=ct(e.opacity??1,0,qC(i))):s&&(t.opacity=ct(e.opacity??1,n.opacity??1,i));for(let a=0;a<XC;a++){const o=Rm[a];let l=vx(e,o),c=vx(n,o);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||xx(l)===xx(c)?(t[o]=Math.max(ct(gx(l),gx(c),i),0),(Ci.test(c)||Ci.test(l))&&(t[o]+="%")):t[o]=c}(e.rotate||n.rotate)&&(t.rotate=ct(e.rotate||0,n.rotate||0,i))}function vx(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const $C=EM(0,.5,mS),qC=EM(.5,.95,Yn);function EM(t,e,n){return i=>i<t?0:i>e?1:n(Fo(t,e,i))}function KC(t,e,n){const i=$t(t)?t:_a(t);return i.start(bm("",i,e,n)),i.animation}function Bo(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}const ZC=(t,e)=>t.depth-e.depth;class QC{constructor(){this.children=[],this.isDirty=!1}add(e){pm(this.children,e),this.isDirty=!0}remove(e){jc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ZC),this.isDirty=!1,this.children.forEach(e)}}function JC(t,e){const n=dn.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Ir(i),t(s-e))};return ut.setup(i,!0),()=>Ir(i)}function hc(t){return $t(t)?t.get():t}class eR{constructor(){this.members=[]}add(e){pm(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(jc(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(jc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let i=this.members.indexOf(e)-1;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1&&((n=r.instance)==null?void 0:n.isConnected)!==!1)return this.promote(r),!0}return!1}promote(e,n){var r;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:a}=e.options;(s===void 0||s!==a)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(r=e.root)!=null&&r.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,i,r,s,a;(i=(n=e.options).onExitComplete)==null||i.call(n),(a=(r=e.resumingFrom)==null?void 0:(s=r.options).onExitComplete)==null||a.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const pc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},xd=["","X","Y","Z"],tR=1e3;let nR=0;function vd(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function wM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=XS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ut,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&wM(i)}function TM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(a={},o=e==null?void 0:e()){this.id=nR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(sR),this.nodes.forEach(dR),this.nodes.forEach(fR),this.nodes.forEach(aR)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new QC)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new mm),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a){if(this.instance)return;this.isSVG=Dm(a)&&!rC(a),this.instance=a;const{layoutId:o,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||o)&&(this.isLayoutDirty=!0),t){let d,h=0;const u=()=>this.root.updateBlockedByResize=!1;ut.read(()=>{h=window.innerWidth}),t(a,()=>{const p=window.innerWidth;p!==h&&(h=p,this.root.updateBlockedByResize=!0,d&&d(),d=JC(u,250),pc.hasAnimatedSinceResize&&(pc.hasAnimatedSinceResize=!1,this.nodes.forEach(Sx)))})}o&&this.root.registerSharedNode(o,this),this.options.animate!==!1&&c&&(o||l)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:u,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||c.getDefaultTransition()||xR,{onLayoutAnimationStart:M,onLayoutAnimationComplete:g}=c.getProps(),f=!this.targetLayout||!MM(this.targetLayout,p),x=!h&&u;if(this.options.layoutRoot||this.resumeFrom||x||h&&(f||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const y={...Tm(m,"layout"),onPlay:M,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y),this.setAnimationOrigin(d,x,y.path)}else h||Sx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ir(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(hR),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&wM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,(typeof h.latestValues.x=="string"||typeof h.latestValues.y=="string")&&(h.isLayoutDirty=!0),h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(lR),this.nodes.forEach(_x);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(yx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(cR),this.nodes.forEach(uR),this.nodes.forEach(iR),this.nodes.forEach(rR)):this.nodes.forEach(yx),this.clearAllSnapshots();const o=dn.now();Yt.delta=Ni(0,1e3/60,o-Yt.timestamp),Yt.timestamp=o,Yt.isProcessing=!0,cd.update.process(Yt),cd.preRender.process(Yt),cd.render.process(Yt),Yt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Pm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(oR),this.sharedNodes.forEach(pR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ut.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ut.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!fn(this.snapshot.measuredBox.x)&&!fn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=kt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!SM(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;a&&this.instance&&(o||qr(this.latestValues)||d)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),vR(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:a}=this.options;if(!a)return kt();const o=a.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(_R))){const{scroll:d}=this.root;d&&(Si(o.x,d.offset.x),Si(o.y,d.offset.y))}return o}removeElementScroll(a){var l;const o=kt();if(Qn(o,a),(l=this.scroll)!=null&&l.wasRoot)return o;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:h,options:u}=d;d!==this.root&&h&&u.layoutScroll&&(h.wasRoot&&Qn(o,a),Si(o.x,h.offset.x),Si(o.y,h.offset.y))}return o}applyTransform(a,o=!1,l){var d,h;const c=l||kt();Qn(c,a);for(let u=0;u<this.path.length;u++){const p=this.path[u];!o&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(Si(c.x,-p.scroll.offset.x),Si(c.y,-p.scroll.offset.y)),qr(p.latestValues)&&fc(c,p.latestValues,(d=p.layout)==null?void 0:d.layoutBox)}return qr(this.latestValues)&&fc(c,this.latestValues,(h=this.layout)==null?void 0:h.layoutBox),c}removeTransform(a){var l;const o=kt();Qn(o,a);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!qr(d.latestValues))continue;let h;d.instance&&(vh(d.latestValues)&&d.updateSnapshot(),h=kt(),Qn(h,d.measurePageBox())),ux(o,d.latestValues,(l=d.snapshot)==null?void 0:l.layoutBox,h)}return qr(this.latestValues)&&ux(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Yt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var p;const o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==o;if(!(a||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:h}=this.options;if(!this.layout||!(d||h))return;this.resolvedRelativeTargetAt=Yt.timestamp;const u=this.getClosestProjectingParent();u&&this.linkedParentVersion!==u.layoutVersion&&!u.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&u&&u.layout?this.createRelativeTarget(u,this.layout.layoutBox,u.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=kt(),this.targetWithTransforms=kt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),VC(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Qn(this.target,this.layout.layoutBox),cM(this.target,this.targetDelta)):Qn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&u&&!!u.resumingFrom==!!this.resumingFrom&&!u.options.layoutScroll&&u.target&&this.animationProgress!==1?this.createRelativeTarget(u,this.target,u.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||vh(this.parent.latestValues)||lM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(a,o,l){this.relativeParent=a,this.linkedParentVersion=a.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=kt(),this.relativeTargetOrigin=kt(),Jc(this.relativeTargetOrigin,o,l,this.options.layoutAnchor||void 0),Qn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const a=this.getLead(),o=!!this.resumingFrom||this!==a;let l=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(l=!1),o&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Yt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;Qn(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,u=this.treeScale.y;mC(this.layoutCorrected,this.treeScale,this.path,o),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=kt());const{target:p}=a;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(rx(this.prevProjectionDelta.x,this.projectionDelta.x),rx(this.prevProjectionDelta.y,this.projectionDelta.y)),go(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==u||!mx(this.projectionDelta.x,this.prevProjectionDelta.x)||!mx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var o;if((o=this.options.visualElement)==null||o.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Qs(),this.projectionDelta=Qs(),this.projectionDeltaWithTransform=Qs()}setAnimationOrigin(a,o=!1,l){const c=this.snapshot,d=c?c.latestValues:{},h={...this.latestValues},u=Qs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const p=kt(),m=c?c.source:void 0,M=this.layout?this.layout.source:void 0,g=m!==M,f=this.getStack(),x=!f||f.members.length<=1,y=!!(g&&!x&&this.options.crossfade===!0&&!this.path.some(gR));this.animationProgress=0;let v;const T=l==null?void 0:l.interpolateProjection(a);this.mixTargetDelta=A=>{const b=A/1e3,_=T==null?void 0:T(b);_?(u.x.translate=_.x,u.x.scale=ct(a.x.scale,1,b),u.x.origin=a.x.origin,u.x.originPoint=a.x.originPoint,u.y.translate=_.y,u.y.scale=ct(a.y.scale,1,b),u.y.origin=a.y.origin,u.y.originPoint=a.y.originPoint):(Mx(u.x,a.x,b),Mx(u.y,a.y,b)),this.setTargetDelta(u),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Jc(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),mR(this.relativeTarget,this.relativeTargetOrigin,p,b),v&&WC(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=kt()),Qn(v,this.relativeTarget)),g&&(this.animationValues=h,YC(h,d,this.latestValues,b,y,x)),_&&_.rotate!==void 0&&(this.animationValues||(this.animationValues=h),this.animationValues.pathRotation=_.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){var o,l,c;this.notifyListeners("animationStart"),(o=this.currentAnimation)==null||o.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Ir(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ut.update(()=>{pc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=_a(0)),this.motionValue.jump(0,!1),this.currentAnimation=KC(this.motionValue,[0,1e3],{...a,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(tR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:c,latestValues:d}=a;if(!(!o||!l||!c)){if(this!==a&&this.layout&&c&&bM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||kt();const h=fn(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+h;const u=fn(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+u}Qn(o,l),fc(o,d),go(this.projectionDeltaWithTransform,this.layoutCorrected,o,d)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new eR),this.sharedNodes.get(a).add(o);const c=o.options.initialPromotionConfig;o.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())==null?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())==null?void 0:o.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const c={};l.z&&vd("z",a,c,this.animationValues);for(let d=0;d<xd.length;d++)vd(`rotate${xd[d]}`,a,c,this.animationValues),vd(`skew${xd[d]}`,a,c,this.animationValues);a.render();for(const d in c)a.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);a.scheduleRender()}applyProjectionStyles(a,o){if(!this.instance||this.isSVG)return;if(!this.isVisible){a.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,a.visibility="",a.opacity="",a.pointerEvents=hc(o==null?void 0:o.pointerEvents)||"",a.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(a.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,a.pointerEvents=hc(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!qr(this.latestValues)&&(a.transform=l?l({},""):"none",this.hasProjected=!1);return}a.visibility="";const d=c.animationValues||c.latestValues;this.applyTransformsToTarget();let h=jC(this.projectionDeltaWithTransform,this.treeScale,d);l&&(h=l(d,h)),a.transform=h;const{x:u,y:p}=this.projectionDelta;a.transformOrigin=`${u.origin*100}% ${p.origin*100}% 0`,c.animationValues?a.opacity=c===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:a.opacity=c===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const m in yh){if(d[m]===void 0)continue;const{correct:M,applyTo:g,isCSSVariable:f}=yh[m],x=h==="none"?d[m]:M(d[m],c);if(g){const y=g.length;for(let v=0;v<y;v++)a[g[v]]=x}else f?this.options.visualElement.renderState.vars[m]=x:a[m]=x}this.options.layoutId&&(a.pointerEvents=c===this?hc(o==null?void 0:o.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)==null?void 0:o.stop()}),this.root.nodes.forEach(_x),this.root.sharedNodes.clear()}}}function iR(t){t.updateLayout()}function rR(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,a=e.source!==t.layout.source;if(s==="size")yi(h=>{const u=a?e.measuredBox[h]:e.layoutBox[h],p=fn(u);u.min=i[h].min,u.max=u.min+p});else if(s==="x"||s==="y"){const h=s==="x"?"y":"x";Sh(a?e.measuredBox[h]:e.layoutBox[h],i[h])}else bM(s,e.layoutBox,i)&&yi(h=>{const u=a?e.measuredBox[h]:e.layoutBox[h],p=fn(i[h]);u.max=u.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+p)});const o=Qs();go(o,i,e.layoutBox);const l=Qs();a?go(l,t.applyTransform(r,!0),e.measuredBox):go(l,i,e.layoutBox);const c=!SM(o);let d=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:u,layout:p}=h;if(u&&p){const m=t.options.layoutAnchor||void 0,M=kt();Jc(M,e.layoutBox,u.layoutBox,m);const g=kt();Jc(g,i,p.layoutBox,m),MM(M,g)||(d=!0),h.options.layoutRoot&&(t.relativeTarget=g,t.relativeTargetOrigin=M,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:d})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function sR(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function aR(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function oR(t){t.clearSnapshot()}function _x(t){t.clearMeasurements()}function lR(t){t.isLayoutDirty=!0,t.updateLayout()}function yx(t){t.isLayoutDirty=!1}function cR(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function uR(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Sx(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function dR(t){t.resolveTargetDelta()}function fR(t){t.calcProjection()}function hR(t){t.resetSkewAndRotation()}function pR(t){t.removeLeadSnapshot()}function Mx(t,e,n){t.translate=ct(e.translate,0,n),t.scale=ct(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Ex(t,e,n,i){t.min=ct(e.min,n.min,i),t.max=ct(e.max,n.max,i)}function mR(t,e,n,i){Ex(t.x,e.x,n.x,i),Ex(t.y,e.y,n.y,i)}function gR(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const xR={duration:.45,ease:[.4,0,.1,1]},wx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Tx=wx("applewebkit/")&&!wx("chrome/")?Math.round:Yn;function bx(t){t.min=Tx(t.min),t.max=Tx(t.max)}function vR(t){bx(t.x),bx(t.y)}function bM(t,e,n){return t==="position"||t==="preserve-aspect"&&!BC(px(e),px(n),.2)}function _R(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const yR=TM({attachResizeListener:(t,e)=>Bo(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),_d={current:void 0},AM=TM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!_d.current){const t=new yR({});t.mount(window),t.setOptions({layoutScroll:!0}),_d.current=t}return _d.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),CM=ie.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function SR(t=!0){const e=ie.useContext(hm);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=ie.useId();ie.useEffect(()=>{if(t)return r(s)},[t]);const a=ie.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,a]:[!0]}const RM=ie.createContext({strict:!1}),Ax={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Cx=!1;function MR(){if(Cx)return;const t={};for(const e in Ax)t[e]={isEnabled:n=>Ax[e].some(i=>!!n[i])};sM(t),Cx=!0}function PM(){return MR(),dC()}function ER(t){const e=PM();for(const n in t)e[n]={...e[n],...t[n]};sM(e)}const wR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function eu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||wR.has(t)}let NM=t=>!eu(t);function TR(t){typeof t=="function"&&(NM=e=>e.startsWith("on")?!eu(e):t(e))}try{TR(require("@emotion/is-prop-valid").default)}catch{}function bR(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||$t(t[r])||(NM(r)||n===!0&&eu(r)||!e&&!eu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const Ru=ie.createContext({});function AR(t,e){if(Cu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ko(n)?n:void 0,animate:ko(i)?i:void 0}}return t.inherit!==!1?e:{}}function CR(t){const{initial:e,animate:n}=AR(t,ie.useContext(Ru));return ie.useMemo(()=>({initial:e,animate:n}),[Rx(e),Rx(n)])}function Rx(t){return Array.isArray(t)?t.join(" "):t}const Om=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function DM(t,e,n){for(const i in e)!$t(e[i])&&!fM(i,n)&&(t[i]=e[i])}function RR({transformTemplate:t},e){return ie.useMemo(()=>{const n=Om();return Um(n,e,t),Object.assign({},n.vars,n.style)},[e])}function PR(t,e){const n=t.style||{},i={};return DM(i,n,t),Object.assign(i,RR(t,e)),i}function NR(t,e){const n={},i=PR(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const LM=()=>({...Om(),attrs:{}});function DR(t,e,n,i){const r=ie.useMemo(()=>{const s=LM();return hM(s,e,mM(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};DM(s,t.style,t),r.style={...s,...r.style}}return r}const LR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function km(t){return typeof t!="string"||t.includes("-")?!1:!!(LR.indexOf(t)>-1||/[A-Z]/u.test(t))}function IR(t,e,n,{latestValues:i},r,s=!1,a){const l=(a??km(t)?DR:NR)(e,i,r,t),c=bR(e,typeof t=="string",s),d=t!==ie.Fragment?{...c,...l,ref:n}:{},{children:h}=e,u=ie.useMemo(()=>$t(h)?h.get():h,[h]);return ie.createElement(t,{...d,children:u})}function UR({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:FR(n,i,r,t),renderState:e()}}function FR(t,e,n,i){const r={},s=i(t,{});for(const u in s)r[u]=hc(s[u]);let{initial:a,animate:o}=t;const l=Cu(t),c=iM(t);e&&c&&!l&&t.inherit!==!1&&(a===void 0&&(a=e.initial),o===void 0&&(o=e.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const h=d?o:a;if(h&&typeof h!="boolean"&&!Au(h)){const u=Array.isArray(h)?h:[h];for(let p=0;p<u.length;p++){const m=Am(t,u[p]);if(m){const{transitionEnd:M,transition:g,...f}=m;for(const x in f){let y=f[x];if(Array.isArray(y)){const v=d?y.length-1:0;y=y[v]}y!==null&&(r[x]=y)}for(const x in M)r[x]=M[x]}}}return r}const IM=t=>(e,n)=>{const i=ie.useContext(Ru),r=ie.useContext(hm),s=()=>UR(t,e,i,r);return n?s():IT(s)},OR=IM({scrapeMotionValuesFromProps:Fm,createRenderState:Om}),kR=IM({scrapeMotionValuesFromProps:gM,createRenderState:LM}),BR=Symbol.for("motionComponentSymbol");function VR(t,e,n){const i=ie.useRef(n);ie.useInsertionEffect(()=>{i.current=n});const r=ie.useRef(null);return ie.useCallback(s=>{var o;s&&((o=t.onMount)==null||o.call(t,s)),e&&(s?e.mount(s):e.unmount());const a=i.current;if(typeof a=="function")if(s){const l=a(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):a(s);else a&&(a.current=s)},[e])}const UM=ie.createContext({});function Os(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function zR(t,e,n,i,r,s){var y,v;const{visualElement:a}=ie.useContext(Ru),o=ie.useContext(RM),l=ie.useContext(hm),c=ie.useContext(CM),d=c.reducedMotion,h=c.skipAnimations,u=ie.useRef(null),p=ie.useRef(!1);i=i||o.renderer,!u.current&&i&&(u.current=i(t,{visualState:e,parent:a,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:d,skipAnimations:h,isSVG:s}),p.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));const m=u.current,M=ie.useContext(UM);m&&!m.projection&&r&&(m.type==="html"||m.type==="svg")&&HR(u.current,n,r,M);const g=ie.useRef(!1);ie.useInsertionEffect(()=>{m&&g.current&&m.update(n,l)});const f=n[jS],x=ie.useRef(!!f&&typeof window<"u"&&!((y=window.MotionHandoffIsComplete)!=null&&y.call(window,f))&&((v=window.MotionHasOptimisedAnimation)==null?void 0:v.call(window,f)));return FT(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),x.current&&m.animationState&&m.animationState.animateChanges())}),ie.useEffect(()=>{m&&(!x.current&&m.animationState&&m.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var T;(T=window.MotionHandoffMarkAsComplete)==null||T.call(window,f)}),x.current=!1),m.enteringChildren=void 0)}),m}function HR(t,e,n,i){const{layoutId:r,layout:s,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:c,layoutAnchor:d,layoutCrossfade:h}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:FM(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!a||o&&Os(o),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:h,layoutScroll:l,layoutRoot:c,layoutAnchor:d})}function FM(t){if(t)return t.options.allowProjection!==!1?t.projection:FM(t.parent)}function yd(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&ER(i);const s=n?n==="svg":km(t),a=s?kR:OR;function o(c,d){let h;const u={...ie.useContext(CM),...c,layoutId:GR(c)},{isStatic:p}=u,m=CR(c),M=a(c,p);if(!p&&typeof window<"u"){WR();const g=jR(u);h=g.MeasureLayout,m.visualElement=zR(t,M,u,r,g.ProjectionNode,s)}return S.jsxs(Ru.Provider,{value:m,children:[h&&m.visualElement?S.jsx(h,{visualElement:m.visualElement,...u}):null,IR(t,c,VR(M,m.visualElement,d),M,p,e,s)]})}o.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=ie.forwardRef(o);return l[BR]=t,l}function GR({layoutId:t}){const e=ie.useContext(iS).id;return e&&t!==void 0?e+"-"+t:t}function WR(t,e){ie.useContext(RM).strict}function jR(t){const e=PM(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function XR(t,e){if(typeof Proxy>"u")return yd;const n=new Map,i=(s,a)=>yd(s,a,t,e),r=(s,a)=>i(s,a);return new Proxy(r,{get:(s,a)=>a==="create"?i:(n.has(a)||n.set(a,yd(a,void 0,t,e)),n.get(a))})}const YR=(t,e)=>e.isSVG??km(t)?new CC(e):new MC(e,{allowProjection:t!==ie.Fragment});class $R extends Vr{constructor(e){super(e),e.animationState||(e.animationState=LC(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Au(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let qR=0;class KR extends Vr{constructor(){super(...arguments),this.id=qR++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:a,custom:o}=this.node.getProps();if(typeof a=="string"||typeof a=="object"&&a!==null&&!Array.isArray(a)){const l=cs(this.node,a,o);if(l){const{transition:c,transitionEnd:d,...h}=l;for(const u in h)(s=this.node.getValue(u))==null||s.jump(h[u])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const ZR={animation:{Feature:$R},exit:{Feature:KR}};function Zo(t){return{point:{x:t.pageX,y:t.pageY}}}const QR=t=>e=>Nm(e)&&t(e,Zo(e));function xo(t,e,n,i){return Bo(t,e,QR(n),i)}const OM=({current:t})=>t?t.ownerDocument.defaultView:null,Px=(t,e)=>Math.abs(t-e);function JR(t,e){const n=Px(t.x,e.x),i=Px(t.y,e.y);return Math.sqrt(n**2+i**2)}const Nx=new Set(["auto","scroll"]);class kM{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ml(this.lastRawMoveEventInfo,this.transformPagePoint));const m=Sd(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,g=JR(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!g)return;const{point:f}=m,{timestamp:x}=Yt;this.history.push({...f,timestamp:x});const{onStart:y,onMove:v}=this.handlers;M||(y&&y(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,m)},this.handlePointerMove=(m,M)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=Ml(M,this.transformPagePoint),ut.update(this.updatePoint,!0)},this.handlePointerUp=(m,M)=>{this.end();const{onEnd:g,onSessionEnd:f,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Sd(m.type==="pointercancel"?this.lastMoveEventInfo:Ml(M,this.transformPagePoint),this.history);this.startEvent&&g&&g(m,y),f&&f(m,y)},!Nm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=a,this.contextWindow=r||window;const l=Zo(e),c=Ml(l,this.transformPagePoint),{point:d}=c,{timestamp:h}=Yt;this.history=[{...d,timestamp:h}];const{onSessionStart:u}=n;u&&u(e,Sd(c,this.history));const p={passive:!0,capture:!0};this.removeListeners=$o(xo(this.contextWindow,"pointermove",this.handlePointerMove,p),xo(this.contextWindow,"pointerup",this.handlePointerUp,p),xo(this.contextWindow,"pointercancel",this.handlePointerUp,p)),o&&this.startScrollTracking(o)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(Nx.has(i.overflowX)||Nx.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),ut.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ir(this.updatePoint)}}function Ml(t,e){return e?{point:e(t.point)}:t}function Dx(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Sd({point:t},e){return{point:t,delta:Dx(t,BM(e)),offset:Dx(t,eP(e)),velocity:tP(e,.1)}}function eP(t){return t[0]}function BM(t){return t[t.length-1]}function tP(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=BM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>In(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>In(e)*2&&(i=t[1]);const s=jn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const a={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function nP(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ct(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ct(n,t,i.max):Math.min(t,n)),t}function Lx(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function iP(t,{top:e,left:n,bottom:i,right:r}){return{x:Lx(t.x,n,r),y:Lx(t.y,e,i)}}function Ix(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function rP(t,e){return{x:Ix(t.x,e.x),y:Ix(t.y,e.y)}}function sP(t,e){let n=.5;const i=fn(t),r=fn(e);return r>i?n=Fo(e.min,e.max-i,t.min):i>r&&(n=Fo(t.min,t.max-r,e.min)),Ni(0,1,n)}function aP(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Mh=.35;function oP(t=Mh){return t===!1?t=0:t===!0&&(t=Mh),{x:Ux(t,"left","right"),y:Ux(t,"top","bottom")}}function Ux(t,e,n){return{min:Fx(t,e),max:Fx(t,n)}}function Fx(t,e){return typeof t=="number"?t:t[e]||0}const lP=new WeakMap;class cP{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=kt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=h=>{n&&this.snapToCursor(Zo(h).point),this.stopAnimation()},a=(h,u)=>{const{drag:p,dragPropagation:m,onDragStart:M}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=zA(p),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=u,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),yi(f=>{let x=this.getAxisMotionValue(f).get()||0;if(Ci.test(x)){const{projection:y}=this.visualElement;if(y&&y.layout){const v=y.layout.layoutBox[f];v&&(x=fn(v)*(parseFloat(x)/100))}}this.originPoint[f]=x}),M&&ut.update(()=>M(h,u),!1,!0),fh(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},o=(h,u)=>{this.latestPointerEvent=h,this.latestPanInfo=u;const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:M,onDrag:g}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:f}=u;if(m&&this.currentDirection===null){this.currentDirection=dP(f),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",u.point,f),this.updateAxis("y",u.point,f),this.visualElement.render(),g&&ut.update(()=>g(h,u),!1,!0)},l=(h,u)=>{this.latestPointerEvent=h,this.latestPanInfo=u,this.stop(h,u),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:h}=this.getProps();(h||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new kM(e,{onSessionStart:s,onStart:a,onMove:o,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:i,contextWindow:OM(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:a}=r;this.startAnimation(a);const{onDragEnd:o}=this.getProps();o&&ut.postRender(()=>o(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!El(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let a=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(a=nP(a,this.constraints[e],this.elastic[e])),s.set(a)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&Os(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=iP(i.layoutBox,e):this.constraints=!1,this.elastic=oP(n),r!==this.constraints&&!Os(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&yi(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=aP(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Os(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());const s=gC(i,r.root,this.visualElement.getTransformPagePoint());let a=rP(r.layout.layoutBox,s);if(n){const o=n(hC(a));this.hasMutatedConstraints=!!o,o&&(a=oM(o))}return a}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},c=yi(d=>{if(!El(d,n,this.currentDirection))return;let h=l&&l[d]||{};(a===!0||a===d)&&(h={min:0,max:0});const u=r?200:1e6,p=r?40:1e7,m={type:"inertia",velocity:i?e[d]:0,bounceStiffness:u,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(d,m)});return Promise.all(c).then(o)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return fh(this.visualElement,e),i.start(bm(e,i,0,n,this.visualElement,!1))}stopAnimation(){yi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps()[n];return r||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){yi(n=>{const{drag:i}=this.getProps();if(!El(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:a,max:o}=r.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-ct(a,o,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Os(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};yi(a=>{const o=this.getAxisMotionValue(a);if(o&&this.constraints!==!1){const l=o.get();r[a]=sP({min:l,max:l},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),yi(a=>{if(!El(a,e,null))return;const o=this.getAxisMotionValue(a),{min:l,max:c}=this.constraints[a];o.set(ct(l,c,r[a]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;lP.set(this.visualElement,this);const e=this.visualElement.current,n=xo(e,"pointerdown",c=>{const{drag:d,dragListener:h=!0}=this.getProps(),u=c.target,p=u!==e&&YA(u);d&&h&&!p&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps();Os(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=uP(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,a=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),ut.read(r);const o=Bo(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(yi(h=>{const u=this.getAxisMotionValue(h);u&&(this.originPoint[h]+=c[h].translate,u.set(u.get()+c[h].translate))}),this.visualElement.render())});return()=>{o(),n(),a(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:a=Mh,dragMomentum:o=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:a,dragMomentum:o}}}function Ox(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function uP(t,e,n){const i=X0(t,Ox(n)),r=X0(e,Ox(n));return()=>{i(),r()}}function El(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function dP(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class fP extends Vr{constructor(e){super(e),this.removeGroupControls=Yn,this.removeListeners=Yn,this.controls=new cP(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Yn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Md=t=>(e,n)=>{t&&ut.update(()=>t(e,n),!1,!0)};class hP extends Vr{constructor(){super(...arguments),this.removePointerDownListener=Yn}onPointerDown(e){this.session=new kM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:OM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Md(e),onStart:Md(n),onMove:Md(i),onEnd:(s,a)=>{delete this.session,r&&ut.postRender(()=>r(s,a))}}}mount(){this.removePointerDownListener=xo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ed=!1;class pP extends ie.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),Ed&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),pc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:a}=i;return a&&(a.isPresent=s,e.layoutDependency!==n&&a.setOptions({...a.options,layoutDependency:n}),Ed=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?a.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?a.promote():a.relegate()||ut.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),Pm.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;Ed=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function VM(t){const[e,n]=SR(),i=ie.useContext(iS);return S.jsx(pP,{...t,layoutGroup:i,switchLayoutGroup:ie.useContext(UM),isPresent:e,safeToRemove:n})}const mP={pan:{Feature:hP},drag:{Feature:fP,ProjectionNode:AM,MeasureLayout:VM}};function kx(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&ut.postRender(()=>s(e,Zo(e)))}class gP extends Vr{mount(){const{current:e}=this.node;e&&(this.unmount=GA(e,(n,i)=>(kx(this.node,i,"Start"),r=>kx(this.node,r,"End"))))}unmount(){}}class xP extends Vr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=$o(Bo(this.node.current,"focus",()=>this.onFocus()),Bo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Bx(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&ut.postRender(()=>s(e,Zo(e)))}class vP extends Vr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=qA(e,(r,s)=>(Bx(this.node,s,"Start"),(a,{success:o})=>Bx(this.node,a,o?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const Eh=new WeakMap,wd=new WeakMap,_P=t=>{const e=Eh.get(t.target);e&&e(t)},yP=t=>{t.forEach(_P)};function SP({root:t,...e}){const n=t||document;wd.has(n)||wd.set(n,{});const i=wd.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(yP,{root:t,...e})),i[r]}function MP(t,e,n){const i=SP(e);return Eh.set(t,n),i.observe(t),()=>{Eh.delete(t),i.unobserve(t)}}const EP={some:0,all:1};class wP extends Vr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,a={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:EP[r]},o=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,s&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:h,onViewportLeave:u}=this.node.getProps(),p=d?h:u;p&&p(c)};this.stopObserver=MP(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(TP(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function TP({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const bP={inView:{Feature:wP},tap:{Feature:vP},focus:{Feature:xP},hover:{Feature:gP}},AP={layout:{ProjectionNode:AM,MeasureLayout:VM}},CP={...ZR,...bP,...mP,...AP},Ha=XR(CP,YR);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bm="185",RP=0,Vx=1,PP=2,mc=1,NP=2,to=3,Ur=0,wn=1,Hi=2,Yi=0,aa=1,Js=2,zx=3,Hx=4,DP=5,Zr=100,LP=101,IP=102,UP=103,FP=104,OP=200,kP=201,BP=202,VP=203,wh=204,Th=205,zP=206,HP=207,GP=208,WP=209,jP=210,XP=211,YP=212,$P=213,qP=214,bh=0,Ah=1,Ch=2,ya=3,Rh=4,Ph=5,Nh=6,Dh=7,zM=0,KP=1,ZP=2,Ri=0,HM=1,GM=2,WM=3,Vm=4,jM=5,XM=6,YM=7,$M=300,ms=301,Sa=302,Td=303,bd=304,Pu=306,Lh=1e3,ji=1001,Ih=1002,qt=1003,QP=1004,wl=1005,an=1006,Ad=1007,rs=1008,Pn=1009,qM=1010,KM=1011,Vo=1012,zm=1013,Di=1014,wi=1015,Ji=1016,Hm=1017,Gm=1018,zo=1020,ZM=35902,QM=35899,JM=1021,eE=1022,oi=1023,er=1026,ss=1027,tE=1028,Wm=1029,gs=1030,jm=1031,Xm=1033,gc=33776,xc=33777,vc=33778,_c=33779,Uh=35840,Fh=35841,Oh=35842,kh=35843,Bh=36196,Vh=37492,zh=37496,Hh=37488,Gh=37489,tu=37490,Wh=37491,jh=37808,Xh=37809,Yh=37810,$h=37811,qh=37812,Kh=37813,Zh=37814,Qh=37815,Jh=37816,ep=37817,tp=37818,np=37819,ip=37820,rp=37821,sp=36492,ap=36494,op=36495,lp=36283,cp=36284,nu=36285,up=36286,JP=3200,dp=0,e2=1,vr="",zn="srgb",iu="srgb-linear",ru="linear",rt="srgb",Es=7680,Gx=519,t2=512,n2=513,i2=514,Ym=515,r2=516,s2=517,$m=518,a2=519,Wx=35044,jx="300 es",Ti=2e3,Ho=2001;function o2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function su(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function l2(){const t=su("canvas");return t.style.display="block",t}const Xx={};function Yx(...t){const e="THREE."+t.shift();console.log(e,...t)}function nE(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=nE(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function et(...t){t=nE(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function oa(...t){const e=t.join(" ");e in Xx||(Xx[e]=!0,Ue(...t))}function c2(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const u2={[bh]:Ah,[Ch]:Nh,[Rh]:Dh,[ya]:Ph,[Ah]:bh,[Nh]:Ch,[Dh]:Rh,[Ph]:ya};class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cd=Math.PI/180,fp=180/Math.PI;function Qo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function d2(t,e){return(t%e+e)%e}function Rd(t,e,n){return(1-n)*t+n*e}function Ga(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Jm=class Jm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jm.prototype.isVector2=!0;let Ze=Jm;class Pa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],u=s[a+0],p=s[a+1],m=s[a+2],M=s[a+3];if(h!==M||l!==u||c!==p||d!==m){let g=l*u+c*p+d*m+h*M;g<0&&(u=-u,p=-p,m=-m,M=-M,g=-g);let f=1-o;if(g<.9995){const x=Math.acos(g),y=Math.sin(x);f=Math.sin(f*x)/y,o=Math.sin(o*x)/y,l=l*f+u*o,c=c*f+p*o,d=d*f+m*o,h=h*f+M*o}else{l=l*f+u*o,c=c*f+p*o,d=d*f+m*o,h=h*f+M*o;const x=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=x,c*=x,d*=x,h*=x}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],u=s[a+1],p=s[a+2],m=s[a+3];return e[n]=o*m+d*h+l*p-c*u,e[n+1]=l*m+d*u+c*h-o*p,e[n+2]=c*m+d*p+o*u-l*h,e[n+3]=d*m-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),u=l(i/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=u*d*h+c*p*m,this._y=c*p*h-u*d*m,this._z=c*d*m+u*p*h,this._w=c*d*h-u*p*m;break;case"YXZ":this._x=u*d*h+c*p*m,this._y=c*p*h-u*d*m,this._z=c*d*m-u*p*h,this._w=c*d*h+u*p*m;break;case"ZXY":this._x=u*d*h-c*p*m,this._y=c*p*h+u*d*m,this._z=c*d*m+u*p*h,this._w=c*d*h-u*p*m;break;case"ZYX":this._x=u*d*h-c*p*m,this._y=c*p*h+u*d*m,this._z=c*d*m-u*p*h,this._w=c*d*h+u*p*m;break;case"YZX":this._x=u*d*h+c*p*m,this._y=c*p*h+u*d*m,this._z=c*d*m-u*p*h,this._w=c*d*h-u*p*m;break;case"XZY":this._x=u*d*h-c*p*m,this._y=c*p*h-u*d*m,this._z=c*d*m+u*p*h,this._w=c*d*h+u*p*m;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],u=i+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const eg=class eg{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($x.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($x.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pd.copy(this).projectOnVector(e),this.sub(Pd)}reflect(e){return this.sub(Pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eg.prototype.isVector3=!0;let B=eg;const Pd=new B,$x=new Pa,tg=class tg{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],m=i[8],M=r[0],g=r[3],f=r[6],x=r[1],y=r[4],v=r[7],T=r[2],A=r[5],b=r[8];return s[0]=a*M+o*x+l*T,s[3]=a*g+o*y+l*A,s[6]=a*f+o*v+l*b,s[1]=c*M+d*x+h*T,s[4]=c*g+d*y+h*A,s[7]=c*f+d*v+h*b,s[2]=u*M+p*x+m*T,s[5]=u*g+p*y+m*A,s[8]=u*f+p*v+m*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*s,p=c*s-a*l,m=n*h+i*u+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return e[0]=h*M,e[1]=(r*c-d*i)*M,e[2]=(o*i-r*a)*M,e[3]=u*M,e[4]=(d*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return oa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nd.makeScale(e,n)),this}rotate(e){return oa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nd.makeRotation(-e)),this}translate(e,n){return oa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tg.prototype.isMatrix3=!0;let ke=tg;const Nd=new ke,qx=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kx=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function f2(){const t={enabled:!0,workingColorSpace:iu,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=la(r.r),r.g=la(r.g),r.b=la(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vr?ru:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return oa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return oa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[iu]:{primaries:e,whitePoint:i,transfer:ru,toXYZ:qx,fromXYZ:Kx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:qx,fromXYZ:Kx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),t}const Ke=f2();function $i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function la(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ws;class h2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ws===void 0&&(ws=su("canvas")),ws.width=e.width,ws.height=e.height;const r=ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ws}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=su("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$i(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($i(n[i]/255)*255):n[i]=$i(n[i]);return{data:n,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let p2=0;class qm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p2++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Dd(r[a].image)):s.push(Dd(r[a]))}else s=Dd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Dd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?h2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let m2=0;const Ld=new B;class on extends _s{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=ji,r=ji,s=an,a=rs,o=oi,l=Pn,c=on.DEFAULT_ANISOTROPY,d=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m2++}),this.uuid=Qo(),this.name="",this.source=new qm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ld).x}get height(){return this.source.getSize(Ld).y}get depth(){return this.source.getSize(Ld).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$M)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lh:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lh:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=$M;on.DEFAULT_ANISOTROPY=1;const ng=class ng{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],m=l[9],M=l[2],g=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-M)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+M)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,v=(p+1)/2,T=(f+1)/2,A=(d+u)/4,b=(h+M)/4,_=(m+g)/4;return y>v&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=b/i):v>T?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=A/r,s=_/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=b/s,r=_/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-m)*(g-m)+(h-M)*(h-M)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-M)/x,this.z=(u-d)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ng.prototype.isVector4=!0;let yt=ng;class g2 extends _s{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new on(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new qm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends g2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class iE extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class x2 extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lu=class lu{constructor(e,n,i,r,s,a,o,l,c,d,h,u,p,m,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,u,p,m,M,g)}set(e,n,i,r,s,a,o,l,c,d,h,u,p,m,M,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=m,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ts.setFromMatrixColumn(e,0).length(),s=1/Ts.setFromMatrixColumn(e,1).length(),a=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*d,p=a*h,m=o*d,M=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+m*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=m+p*c,n[10]=a*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,m=c*d,M=c*h;n[0]=u+M*o,n[4]=m*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=p*o-m,n[6]=M+u*o,n[10]=a*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,m=c*d,M=c*h;n[0]=u-M*o,n[4]=-a*h,n[8]=m+p*o,n[1]=p+m*o,n[5]=a*d,n[9]=M-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const u=a*d,p=a*h,m=o*d,M=o*h;n[0]=l*d,n[4]=m*c-p,n[8]=u*c+M,n[1]=l*h,n[5]=M*c+u,n[9]=p*c-m,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,m=o*l,M=o*c;n[0]=l*d,n[4]=M-u*h,n[8]=m*h+p,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+m,n[10]=u-M*h}else if(e.order==="XZY"){const u=a*l,p=a*c,m=o*l,M=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=u*h+M,n[5]=a*d,n[9]=p*h-m,n[2]=m*h-p,n[6]=o*d,n[10]=M*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v2,e,_2)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),or.crossVectors(i,bn),or.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),or.crossVectors(i,bn)),or.normalize(),Tl.crossVectors(bn,or),r[0]=or.x,r[4]=Tl.x,r[8]=bn.x,r[1]=or.y,r[5]=Tl.y,r[9]=bn.y,r[2]=or.z,r[6]=Tl.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],m=i[2],M=i[6],g=i[10],f=i[14],x=i[3],y=i[7],v=i[11],T=i[15],A=r[0],b=r[4],_=r[8],C=r[12],P=r[1],N=r[5],F=r[9],V=r[13],$=r[2],O=r[6],Y=r[10],z=r[14],D=r[3],j=r[7],Q=r[11],ne=r[15];return s[0]=a*A+o*P+l*$+c*D,s[4]=a*b+o*N+l*O+c*j,s[8]=a*_+o*F+l*Y+c*Q,s[12]=a*C+o*V+l*z+c*ne,s[1]=d*A+h*P+u*$+p*D,s[5]=d*b+h*N+u*O+p*j,s[9]=d*_+h*F+u*Y+p*Q,s[13]=d*C+h*V+u*z+p*ne,s[2]=m*A+M*P+g*$+f*D,s[6]=m*b+M*N+g*O+f*j,s[10]=m*_+M*F+g*Y+f*Q,s[14]=m*C+M*V+g*z+f*ne,s[3]=x*A+y*P+v*$+T*D,s[7]=x*b+y*N+v*O+T*j,s[11]=x*_+y*F+v*Y+T*Q,s[15]=x*C+y*V+v*z+T*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],m=e[3],M=e[7],g=e[11],f=e[15],x=l*p-c*u,y=o*p-c*h,v=o*u-l*h,T=a*p-c*d,A=a*u-l*d,b=a*h-o*d;return n*(M*x-g*y+f*v)-i*(m*x-g*T+f*A)+r*(m*y-M*T+f*b)-s*(m*v-M*A+g*b)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return n*(a*d-o*c)-i*(s*d-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],m=e[12],M=e[13],g=e[14],f=e[15],x=n*o-i*a,y=n*l-r*a,v=n*c-s*a,T=i*l-r*o,A=i*c-s*o,b=r*c-s*l,_=d*M-h*m,C=d*g-u*m,P=d*f-p*m,N=h*g-u*M,F=h*f-p*M,V=u*f-p*g,$=x*V-y*F+v*N+T*P-A*C+b*_;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/$;return e[0]=(o*V-l*F+c*N)*O,e[1]=(r*F-i*V-s*N)*O,e[2]=(M*b-g*A+f*T)*O,e[3]=(u*A-h*b-p*T)*O,e[4]=(l*P-a*V-c*C)*O,e[5]=(n*V-r*P+s*C)*O,e[6]=(g*v-m*b-f*y)*O,e[7]=(d*b-u*v+p*y)*O,e[8]=(a*F-o*P+c*_)*O,e[9]=(i*P-n*F-s*_)*O,e[10]=(m*A-M*v+f*x)*O,e[11]=(h*v-d*A-p*x)*O,e[12]=(o*C-a*N-l*_)*O,e[13]=(n*N-i*C+r*_)*O,e[14]=(M*y-m*T-g*x)*O,e[15]=(d*T-h*y+u*x)*O,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,u=s*c,p=s*d,m=s*h,M=a*d,g=a*h,f=o*h,x=l*c,y=l*d,v=l*h,T=i.x,A=i.y,b=i.z;return r[0]=(1-(M+f))*T,r[1]=(p+v)*T,r[2]=(m-y)*T,r[3]=0,r[4]=(p-v)*A,r[5]=(1-(u+f))*A,r[6]=(g+x)*A,r[7]=0,r[8]=(m+y)*b,r[9]=(g-x)*b,r[10]=(1-(u+M))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Ts.set(r[0],r[1],r[2]).length();const o=Ts.set(r[4],r[5],r[6]).length(),l=Ts.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Jn.copy(this);const c=1/a,d=1/o,h=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=d,Jn.elements[5]*=d,Jn.elements[6]*=d,Jn.elements[8]*=h,Jn.elements[9]*=h,Jn.elements[10]*=h,n.setFromRotationMatrix(Jn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Ti,l=!1){const c=this.elements,d=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let m,M;if(l)m=s/(a-s),M=a*s/(a-s);else if(o===Ti)m=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Ho)m=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ti,l=!1){const c=this.elements,d=2/(n-e),h=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,M;if(l)m=1/(a-s),M=a/(a-s);else if(o===Ti)m=-2/(a-s),M=-(a+s)/(a-s);else if(o===Ho)m=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};lu.prototype.isMatrix4=!0;let Mt=lu;const Ts=new B,Jn=new Mt,v2=new B(0,0,0),_2=new B(1,1,1),or=new B,Tl=new B,bn=new B,Zx=new Mt,Qx=new Pa;class Fr{constructor(e=0,n=0,i=0,r=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zx,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qx.setFromEuler(this),this.setFromQuaternion(Qx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class rE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y2=0;const Jx=new B,bs=new Pa,Ii=new Mt,bl=new B,Wa=new B,S2=new B,M2=new Pa,ev=new B(1,0,0),tv=new B(0,1,0),nv=new B(0,0,1),iv={type:"added"},E2={type:"removed"},As={type:"childadded",child:null},Id={type:"childremoved",child:null};class Zt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y2++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new B,n=new Fr,i=new Pa,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new ke}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(ev,e)}rotateY(e){return this.rotateOnAxis(tv,e)}rotateZ(e){return this.rotateOnAxis(nv,e)}translateOnAxis(e,n){return Jx.copy(e).applyQuaternion(this.quaternion),this.position.add(Jx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ev,e)}translateY(e){return this.translateOnAxis(tv,e)}translateZ(e){return this.translateOnAxis(nv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?bl.copy(e):bl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Wa,bl,this.up):Ii.lookAt(bl,Wa,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),bs.setFromRotationMatrix(Ii),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(iv),As.child=e,this.dispatchEvent(As),As.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(E2),Id.child=e,this.dispatchEvent(Id),Id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(iv),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,e,S2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,M2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new B(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class no extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w2={type:"move"};class Ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new no,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new no,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new no,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),f=this._getHandJoint(c,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new no;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const sE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Al={h:0,s:0,l:0};function Fd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Fe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=d2(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Fd(a,s,e+1/3),this.g=Fd(a,s,e),this.b=Fd(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,n=zn){function i(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zn){const i=sE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return Ke.workingToColorSpace(rn.copy(this),e),Math.round($e(rn.r*255,0,255))*65536+Math.round($e(rn.g*255,0,255))*256+Math.round($e(rn.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=zn){Ke.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(Al);const i=Rd(lr.h,Al.h,n),r=Rd(lr.s,Al.s,n),s=Rd(lr.l,Al.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Fe;Fe.NAMES=sE;class T2 extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ei=new B,Ui=new B,Od=new B,Fi=new B,Cs=new B,Rs=new B,rv=new B,kd=new B,Bd=new B,Vd=new B,zd=new yt,Hd=new yt,Gd=new yt;class ai{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ei.subVectors(r,n),Ui.subVectors(i,n),Od.subVectors(e,n);const a=ei.dot(ei),o=ei.dot(Ui),l=ei.dot(Od),c=Ui.dot(Ui),d=Ui.dot(Od),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,m=(a*d-o*l)*u;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(a,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return zd.setScalar(0),Hd.setScalar(0),Gd.setScalar(0),zd.fromBufferAttribute(e,n),Hd.fromBufferAttribute(e,i),Gd.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(zd,s.x),a.addScaledVector(Hd,s.y),a.addScaledVector(Gd,s.z),a}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),Ui.subVectors(e,n),ei.cross(Ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ei.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ai.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Cs.subVectors(r,i),Rs.subVectors(s,i),kd.subVectors(e,i);const l=Cs.dot(kd),c=Rs.dot(kd);if(l<=0&&c<=0)return n.copy(i);Bd.subVectors(e,r);const d=Cs.dot(Bd),h=Rs.dot(Bd);if(d>=0&&h<=d)return n.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Cs,a);Vd.subVectors(e,s);const p=Cs.dot(Vd),m=Rs.dot(Vd);if(m>=0&&p<=m)return n.copy(s);const M=p*c-l*m;if(M<=0&&c>=0&&m<=0)return o=c/(c-m),n.copy(i).addScaledVector(Rs,o);const g=d*m-p*h;if(g<=0&&h-d>=0&&p-m>=0)return rv.subVectors(s,r),o=(h-d)/(h-d+(p-m)),n.copy(r).addScaledVector(rv,o);const f=1/(g+M+u);return a=M*f,o=u*f,n.copy(i).addScaledVector(Cs,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Jo{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(s,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cl.copy(i.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),Rl.subVectors(this.max,ja),Ps.subVectors(e.a,ja),Ns.subVectors(e.b,ja),Ds.subVectors(e.c,ja),cr.subVectors(Ns,Ps),ur.subVectors(Ds,Ns),Gr.subVectors(Ps,Ds);let n=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-Gr.z,Gr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,Gr.z,0,-Gr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-Gr.y,Gr.x,0];return!Wd(n,Ps,Ns,Ds,Rl)||(n=[1,0,0,0,1,0,0,0,1],!Wd(n,Ps,Ns,Ds,Rl))?!1:(Pl.crossVectors(cr,ur),n=[Pl.x,Pl.y,Pl.z],Wd(n,Ps,Ns,Ds,Rl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new B,new B,new B,new B,new B,new B,new B,new B],ti=new B,Cl=new Jo,Ps=new B,Ns=new B,Ds=new B,cr=new B,ur=new B,Gr=new B,ja=new B,Rl=new B,Pl=new B,Wr=new B;function Wd(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Wr.fromArray(t,s);const o=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),l=e.dot(Wr),c=n.dot(Wr),d=i.dot(Wr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const It=new B,Nl=new Ze;let b2=0;class $n extends _s{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:b2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wx,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Nl.fromBufferAttribute(this,n),Nl.applyMatrix3(e),this.setXY(n,Nl.x,Nl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ga(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ga(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ga(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ga(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ga(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class aE extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class oE extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pn extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}const A2=new Jo,Xa=new B,jd=new B;class Nu{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):A2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xa.subVectors(e,this.center);const n=Xa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Xa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xa.copy(e.center).add(jd)),this.expandByPoint(Xa.copy(e.center).sub(jd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let C2=0;const Vn=new Mt,Xd=new Zt,Ls=new B,An=new Jo,Ya=new Jo,Gt=new B;class kn extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C2++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(o2(e)?oE:aE)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ya.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(An.min,Ya.min),An.expandByPoint(Gt),Gt.addVectors(An.max,Ya.max),An.expandByPoint(Gt)):(An.expandByPoint(Ya.min),An.expandByPoint(Ya.max))}An.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Gt.fromBufferAttribute(o,c),l&&(Ls.fromBufferAttribute(e,c),Gt.add(Ls)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new $n(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new B,l[_]=new B;const c=new B,d=new B,h=new B,u=new Ze,p=new Ze,m=new Ze,M=new B,g=new B;function f(_,C,P){c.fromBufferAttribute(i,_),d.fromBufferAttribute(i,C),h.fromBufferAttribute(i,P),u.fromBufferAttribute(s,_),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,P),d.sub(c),h.sub(c),p.sub(u),m.sub(u);const N=1/(p.x*m.y-m.x*p.y);isFinite(N)&&(M.copy(d).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(N),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-m.x).multiplyScalar(N),o[_].add(M),o[C].add(M),o[P].add(M),l[_].add(g),l[C].add(g),l[P].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,C=x.length;_<C;++_){const P=x[_],N=P.start,F=P.count;for(let V=N,$=N+F;V<$;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const y=new B,v=new B,T=new B,A=new B;function b(_){T.fromBufferAttribute(r,_),A.copy(T);const C=o[_];y.copy(C),y.sub(T.multiplyScalar(T.dot(C))).normalize(),v.crossVectors(A,C);const N=v.dot(l[_])<0?-1:1;a.setXYZW(_,y.x,y.y,y.z,N)}for(let _=0,C=x.length;_<C;++_){const P=x[_],N=P.start,F=P.count;for(let V=N,$=N+F;V<$;V+=3)b(e.getX(V+0)),b(e.getX(V+1)),b(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,d=new B,h=new B;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),M=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,g),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,m=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*d;for(let f=0;f<d;f++)u[m++]=c[p++]}return new $n(u,d,h)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let R2=0;class Na extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R2++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=aa,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Th,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ue(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(i.blending=this.blending),this.side!==Ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wh&&(i.blendSrc=this.blendSrc),this.blendDst!==Th&&(i.blendDst=this.blendDst),this.blendEquation!==Zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ki=new B,Yd=new B,Dl=new B,dr=new B,$d=new B,Ll=new B,qd=new B;class lE{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Yd.copy(e).add(n).multiplyScalar(.5),Dl.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Yd);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Dl),o=dr.dot(this.direction),l=-dr.dot(Dl),c=dr.lengthSq(),d=Math.abs(1-a*a);let h,u,p,m;if(d>0)if(h=a*l-o,u=a*o-l,m=s*d,h>=0)if(u>=-m)if(u<=m){const M=1/d;h*=M,u*=M,p=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-m?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=m?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Yd).addScaledVector(Dl,u),p}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,r,s){$d.subVectors(n,e),Ll.subVectors(i,e),qd.crossVectors($d,Ll);let a=this.direction.dot(qd),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;dr.subVectors(this.origin,e);const l=o*this.direction.dot(Ll.crossVectors(dr,Ll));if(l<0)return null;const c=o*this.direction.dot($d.cross(dr));if(c<0||l+c>a)return null;const d=-o*dr.dot(qd);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vo extends Na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=zM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sv=new Mt,jr=new lE,Il=new Nu,av=new B,Ul=new B,Fl=new B,Ol=new B,Kd=new B,kl=new B,ov=new B,Bl=new B;class Dn extends Zt{constructor(e=new kn,n=new vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){kl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Kd.fromBufferAttribute(h,e),a?kl.addScaledVector(Kd,d):kl.addScaledVector(Kd.sub(n),d))}n.add(kl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),jr.copy(e.ray).recast(e.near),!(Il.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Il,av)===null||jr.origin.distanceToSquared(av)>(e.far-e.near)**2))&&(sv.copy(s).invert(),jr.copy(e.ray).applyMatrix4(sv),!(i.boundingBox!==null&&jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=u.length;m<M;m++){const g=u[m],f=a[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=x,T=y;v<T;v+=3){const A=o.getX(v),b=o.getX(v+1),_=o.getX(v+2);r=Vl(this,f,e,i,c,d,h,A,b,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=m,f=M;g<f;g+=3){const x=o.getX(g),y=o.getX(g+1),v=o.getX(g+2);r=Vl(this,a,e,i,c,d,h,x,y,v),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,M=u.length;m<M;m++){const g=u[m],f=a[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=x,T=y;v<T;v+=3){const A=v,b=v+1,_=v+2;r=Vl(this,f,e,i,c,d,h,A,b,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=m,f=M;g<f;g+=3){const x=g,y=g+1,v=g+2;r=Vl(this,a,e,i,c,d,h,x,y,v),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function P2(t,e,n,i,r,s,a,o){let l;if(e.side===wn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ur,o),l===null)return null;Bl.copy(o),Bl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Bl);return c<n.near||c>n.far?null:{distance:c,point:Bl.clone(),object:t}}function Vl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ul),t.getVertexPosition(l,Fl),t.getVertexPosition(c,Ol);const d=P2(t,e,n,i,Ul,Fl,Ol,ov);if(d){const h=new B;ai.getBarycoord(ov,Ul,Fl,Ol,h),r&&(d.uv=ai.getInterpolatedAttribute(r,o,l,c,h,new Ze)),s&&(d.uv1=ai.getInterpolatedAttribute(s,o,l,c,h,new Ze)),a&&(d.normal=ai.getInterpolatedAttribute(a,o,l,c,h,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new B,materialIndex:0};ai.getNormal(Ul,Fl,Ol,u.normal),d.face=u,d.barycoord=h}return d}class N2 extends on{constructor(e=null,n=1,i=1,r,s,a,o,l,c=qt,d=qt,h,u){super(null,a,o,l,c,d,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zd=new B,D2=new B,L2=new ke;class Kr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zd.subVectors(i,n).cross(D2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Zd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||L2.getNormalMatrix(e),r=this.coplanarPoint(Zd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new Nu,I2=new Ze(.5,.5),zl=new B;class Km{constructor(e=new Kr,n=new Kr,i=new Kr,r=new Kr,s=new Kr,a=new Kr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],p=s[7],m=s[8],M=s[9],g=s[10],f=s[11],x=s[12],y=s[13],v=s[14],T=s[15];if(r[0].setComponents(c-a,p-d,f-m,T-x).normalize(),r[1].setComponents(c+a,p+d,f+m,T+x).normalize(),r[2].setComponents(c+o,p+h,f+M,T+y).normalize(),r[3].setComponents(c-o,p-h,f-M,T-y).normalize(),i)r[4].setComponents(l,u,g,v).normalize(),r[5].setComponents(c-l,p-u,f-g,T-v).normalize();else if(r[4].setComponents(c-l,p-u,f-g,T-v).normalize(),n===Ti)r[5].setComponents(c+l,p+u,f+g,T+v).normalize();else if(n===Ho)r[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){Xr.center.set(0,0,0);const n=I2.distanceTo(e.center);return Xr.radius=.7071067811865476+n,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(zl.x=r.normal.x>0?e.max.x:e.min.x,zl.y=r.normal.y>0?e.max.y:e.min.y,zl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cE extends Na{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lv=new Mt,hp=new lE,Hl=new Nu,Gl=new B;class U2 extends Zt{constructor(e=new kn,n=new cE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(r),Hl.radius+=s,e.ray.intersectsSphere(Hl)===!1)return;lv.copy(r).invert(),hp.copy(e.ray).applyMatrix4(lv);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=u,M=p;m<M;m++){const g=c.getX(m);Gl.fromBufferAttribute(h,g),cv(Gl,g,l,r,e,n,this)}}else{const u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=u,M=p;m<M;m++)Gl.fromBufferAttribute(h,m),cv(Gl,m,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function cv(t,e,n,i,r,s,a){const o=hp.distanceSqToPoint(t);if(o<n){const l=new B;hp.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class uE extends on{constructor(e=[],n=ms,i,r,s,a,o,l,c,d){super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class F2 extends on{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ma extends on{constructor(e,n,i=Di,r,s,a,o=qt,l=qt,c,d=er,h=1){if(d!==er&&d!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class O2 extends Ma{constructor(e,n=Di,i=ms,r,s,a=qt,o=qt,l,c=er){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dE extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class el extends kn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,p=0;m("z","y","x",-1,-1,i,n,e,a,s,0),m("z","y","x",1,-1,i,n,-e,a,s,1),m("x","z","y",1,1,e,i,n,r,a,2),m("x","z","y",1,-1,e,i,-n,r,a,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(d,3)),this.setAttribute("uv",new pn(h,2));function m(M,g,f,x,y,v,T,A,b,_,C){const P=v/b,N=T/_,F=v/2,V=T/2,$=A/2,O=b+1,Y=_+1;let z=0,D=0;const j=new B;for(let Q=0;Q<Y;Q++){const ne=Q*N-V;for(let ae=0;ae<O;ae++){const He=ae*P-F;j[M]=He*x,j[g]=ne*y,j[f]=$,c.push(j.x,j.y,j.z),j[M]=0,j[g]=0,j[f]=A>0?1:-1,d.push(j.x,j.y,j.z),h.push(ae/b),h.push(1-Q/_),z+=1}}for(let Q=0;Q<_;Q++)for(let ne=0;ne<b;ne++){const ae=u+ne+O*Q,He=u+ne+O*(Q+1),Qe=u+(ne+1)+O*(Q+1),We=u+(ne+1)+O*Q;l.push(ae,He,We),l.push(He,Qe,We),D+=6}o.addGroup(p,D,C),p+=D,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Du extends kn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,u=n/l,p=[],m=[],M=[],g=[];for(let f=0;f<d;f++){const x=f*u-a;for(let y=0;y<c;y++){const v=y*h-s;m.push(v,-x,0),M.push(0,0,1),g.push(y/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const y=x+c*f,v=x+c*(f+1),T=x+1+c*(f+1),A=x+1+c*f;p.push(y,v,A),p.push(v,T,A)}this.setIndex(p),this.setAttribute("position",new pn(m,3)),this.setAttribute("normal",new pn(M,3)),this.setAttribute("uv",new pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.widthSegments,e.heightSegments)}}class au extends kn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new B,u=new B,p=[],m=[],M=[],g=[];for(let f=0;f<=i;f++){const x=[],y=f/i,v=a+y*o,T=e*Math.cos(v),A=Math.sqrt(e*e-T*T);let b=0;f===0&&a===0?b=.5/n:f===i&&l===Math.PI&&(b=-.5/n);for(let _=0;_<=n;_++){const C=_/n,P=r+C*s;h.x=-A*Math.cos(P),h.y=T,h.z=A*Math.sin(P),m.push(h.x,h.y,h.z),u.copy(h).normalize(),M.push(u.x,u.y,u.z),g.push(C+b,1-y),x.push(c++)}d.push(x)}for(let f=0;f<i;f++)for(let x=0;x<n;x++){const y=d[f][x+1],v=d[f][x],T=d[f+1][x],A=d[f+1][x+1];(f!==0||a>0)&&p.push(y,v,A),(f!==i-1||l<Math.PI)&&p.push(v,T,A)}this.setIndex(p),this.setAttribute("position",new pn(m,3)),this.setAttribute("normal",new pn(M,3)),this.setAttribute("uv",new pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ou extends kn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],d=[],h=[],u=new B,p=new B,m=new B;for(let M=0;M<=i;M++){const g=a+M/i*o;for(let f=0;f<=r;f++){const x=f/r*s;p.x=(e+n*Math.cos(g))*Math.cos(x),p.y=(e+n*Math.cos(g))*Math.sin(x),p.z=n*Math.sin(g),c.push(p.x,p.y,p.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),m.subVectors(p,u).normalize(),d.push(m.x,m.y,m.z),h.push(f/r),h.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=r;g++){const f=(r+1)*M+g-1,x=(r+1)*(M-1)+g-1,y=(r+1)*(M-1)+g,v=(r+1)*M+g;l.push(f,x,v),l.push(x,y,v)}this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(d,3)),this.setAttribute("uv",new pn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Ea(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(uv(r))r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(uv(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=Ea(t[n]);for(const r in i)e[r]=i[r]}return e}function uv(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function k2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const B2={clone:Ea,merge:cn};var V2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V2,this.fragmentShader=z2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ea(e.uniforms),this.uniformsGroups=k2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Fe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"v3":this.uniforms[i].value=new B().fromArray(r.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class H2 extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class G2 extends Na{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dp,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class W2 extends G2{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class j2 extends Na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class X2 extends Na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zm extends Zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Qd=new Mt,dv=new B,fv=new B;class hE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Km,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;dv.setFromMatrixPosition(e.matrixWorld),n.position.copy(dv),fv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(fv),n.updateMatrixWorld(),Qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Ho||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wl=new B,jl=new Pa,xi=new B;class pE extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wl,jl,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,jl,xi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Wl,jl,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,jl,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fr=new B,hv=new Ze,pv=new Ze;class Rn extends pE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fp*2*Math.atan(Math.tan(Cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,hv,pv),n.subVectors(pv,hv)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Y2 extends hE{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0}}class mv extends Zm{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Y2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Qm extends pE{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class $2 extends hE{constructor(){super(new Qm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class q2 extends Zm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new $2}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class K2 extends Zm{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Is=-90,Us=1;class Z2 extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(Is,Us,e,n);r.layers=this.layers,this.add(r);const s=new Rn(Is,Us,e,n);s.layers=this.layers,this.add(s);const a=new Rn(Is,Us,e,n);a.layers=this.layers,this.add(a);const o=new Rn(Is,Us,e,n);o.layers=this.layers,this.add(o);const l=new Rn(Is,Us,e,n);l.layers=this.layers,this.add(l);const c=new Rn(Is,Us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(h,u,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Q2 extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class J2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ue("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const ig=class ig{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};ig.prototype.isMatrix2=!0;let gv=ig;function xv(t,e,n,i){const r=e3(i);switch(n){case JM:return t*e;case tE:return t*e/r.components*r.byteLength;case Wm:return t*e/r.components*r.byteLength;case gs:return t*e*2/r.components*r.byteLength;case jm:return t*e*2/r.components*r.byteLength;case eE:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case Xm:return t*e*4/r.components*r.byteLength;case gc:case xc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vc:case _c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fh:case kh:return Math.max(t,16)*Math.max(e,8)/4;case Uh:case Oh:return Math.max(t,8)*Math.max(e,8)/2;case Bh:case Vh:case Hh:case Gh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zh:case tu:case Wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ep:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case tp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case np:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ip:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case rp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case sp:case ap:case op:return Math.ceil(t/4)*Math.ceil(e/4)*16;case lp:case cp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case nu:case up:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function e3(t){switch(t){case Pn:case qM:return{byteLength:1,components:1};case Vo:case KM:case Ji:return{byteLength:2,components:1};case Hm:case Gm:return{byteLength:2,components:4};case Di:case zm:case wi:return{byteLength:4,components:1};case ZM:case QM:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bm}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mE(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function t3(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<h.length;p++){const m=h[u],M=h[p];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++u,h[u]=M)}h.length=u+1;for(let p=0,m=h.length;p<m;p++){const M=h[p];t.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var n3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,r3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,c3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,d3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,m3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,g3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,x3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,v3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,M3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,E3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,w3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,T3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,b3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,A3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,C3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D3="gl_FragColor = linearToOutputTexel( gl_FragColor );",L3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,U3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,F3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,O3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,B3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,W3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eN=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tN=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nN=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iN=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rN=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fN=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vN=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_N=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SN=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,MN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,TN=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NN=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,DN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ON=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kN=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,BN=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zN=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GN=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jN=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$N=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_D=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,SD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ED=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ND=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ID=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:n3,alphahash_pars_fragment:i3,alphamap_fragment:r3,alphamap_pars_fragment:s3,alphatest_fragment:a3,alphatest_pars_fragment:o3,aomap_fragment:l3,aomap_pars_fragment:c3,batching_pars_vertex:u3,batching_vertex:d3,begin_vertex:f3,beginnormal_vertex:h3,bsdfs:p3,iridescence_fragment:m3,bumpmap_pars_fragment:g3,clipping_planes_fragment:x3,clipping_planes_pars_fragment:v3,clipping_planes_pars_vertex:_3,clipping_planes_vertex:y3,color_fragment:S3,color_pars_fragment:M3,color_pars_vertex:E3,color_vertex:w3,common:T3,cube_uv_reflection_fragment:b3,defaultnormal_vertex:A3,displacementmap_pars_vertex:C3,displacementmap_vertex:R3,emissivemap_fragment:P3,emissivemap_pars_fragment:N3,colorspace_fragment:D3,colorspace_pars_fragment:L3,envmap_fragment:I3,envmap_common_pars_fragment:U3,envmap_pars_fragment:F3,envmap_pars_vertex:O3,envmap_physical_pars_fragment:$3,envmap_vertex:k3,fog_vertex:B3,fog_pars_vertex:V3,fog_fragment:z3,fog_pars_fragment:H3,gradientmap_pars_fragment:G3,lightmap_pars_fragment:W3,lights_lambert_fragment:j3,lights_lambert_pars_fragment:X3,lights_pars_begin:Y3,lights_toon_fragment:q3,lights_toon_pars_fragment:K3,lights_phong_fragment:Z3,lights_phong_pars_fragment:Q3,lights_physical_fragment:J3,lights_physical_pars_fragment:eN,lights_fragment_begin:tN,lights_fragment_maps:nN,lights_fragment_end:iN,lightprobes_pars_fragment:rN,logdepthbuf_fragment:sN,logdepthbuf_pars_fragment:aN,logdepthbuf_pars_vertex:oN,logdepthbuf_vertex:lN,map_fragment:cN,map_pars_fragment:uN,map_particle_fragment:dN,map_particle_pars_fragment:fN,metalnessmap_fragment:hN,metalnessmap_pars_fragment:pN,morphinstance_vertex:mN,morphcolor_vertex:gN,morphnormal_vertex:xN,morphtarget_pars_vertex:vN,morphtarget_vertex:_N,normal_fragment_begin:yN,normal_fragment_maps:SN,normal_pars_fragment:MN,normal_pars_vertex:EN,normal_vertex:wN,normalmap_pars_fragment:TN,clearcoat_normal_fragment_begin:bN,clearcoat_normal_fragment_maps:AN,clearcoat_pars_fragment:CN,iridescence_pars_fragment:RN,opaque_fragment:PN,packing:NN,premultiplied_alpha_fragment:DN,project_vertex:LN,dithering_fragment:IN,dithering_pars_fragment:UN,roughnessmap_fragment:FN,roughnessmap_pars_fragment:ON,shadowmap_pars_fragment:kN,shadowmap_pars_vertex:BN,shadowmap_vertex:VN,shadowmask_pars_fragment:zN,skinbase_vertex:HN,skinning_pars_vertex:GN,skinning_vertex:WN,skinnormal_vertex:jN,specularmap_fragment:XN,specularmap_pars_fragment:YN,tonemapping_fragment:$N,tonemapping_pars_fragment:qN,transmission_fragment:KN,transmission_pars_fragment:ZN,uv_pars_fragment:QN,uv_pars_vertex:JN,uv_vertex:eD,worldpos_vertex:tD,background_vert:nD,background_frag:iD,backgroundCube_vert:rD,backgroundCube_frag:sD,cube_vert:aD,cube_frag:oD,depth_vert:lD,depth_frag:cD,distance_vert:uD,distance_frag:dD,equirect_vert:fD,equirect_frag:hD,linedashed_vert:pD,linedashed_frag:mD,meshbasic_vert:gD,meshbasic_frag:xD,meshlambert_vert:vD,meshlambert_frag:_D,meshmatcap_vert:yD,meshmatcap_frag:SD,meshnormal_vert:MD,meshnormal_frag:ED,meshphong_vert:wD,meshphong_frag:TD,meshphysical_vert:bD,meshphysical_frag:AD,meshtoon_vert:CD,meshtoon_frag:RD,points_vert:PD,points_frag:ND,shadow_vert:DD,shadow_frag:LD,sprite_vert:ID,sprite_frag:UD},me={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Mi={basic:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:cn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:cn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:cn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:cn([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:cn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:cn([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:cn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:cn([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:cn([me.common,me.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:cn([me.lights,me.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Mi.physical={uniforms:cn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Xl={r:0,b:0,g:0},FD=new Mt,gE=new ke;gE.set(-1,0,0,0,1,0,0,0,1);function OD(t,e,n,i,r,s){const a=new Fe(0);let o=r===!0?0:1,l,c,d=null,h=0,u=null;function p(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const v=x.backgroundBlurriness>0;y=e.get(y,v)}return y}function m(x){let y=!1;const v=p(x);v===null?g(a,o):v&&v.isColor&&(g(v,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(x,y){const v=p(y);v&&(v.isCubeTexture||v.mapping===Pu)?(c===void 0&&(c=new Dn(new el(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Ea(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(FD.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gE),c.material.toneMapped=Ke.getTransfer(v.colorSpace)!==rt,(d!==v||h!==v.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,u=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Dn(new Du(2,2),new Li({name:"BackgroundMaterial",uniforms:Ea(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=v,h=v.version,u=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,y){x.getRGB(Xl,fE(t)),n.buffers.color.setClear(Xl.r,Xl.g,Xl.b,y,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:m,addToRenderList:M,dispose:f}}function kD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(N,F,V,$,O){let Y=!1;const z=h(N,$,V,F);s!==z&&(s=z,c(s.object)),Y=p(N,$,V,O),Y&&m(N,$,V,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(N,F,V,$),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function d(N){return t.deleteVertexArray(N)}function h(N,F,V,$){const O=$.wireframe===!0;let Y=i[F.id];Y===void 0&&(Y={},i[F.id]=Y);const z=N.isInstancedMesh===!0?N.id:0;let D=Y[z];D===void 0&&(D={},Y[z]=D);let j=D[V.id];j===void 0&&(j={},D[V.id]=j);let Q=j[O];return Q===void 0&&(Q=u(l()),j[O]=Q),Q}function u(N){const F=[],V=[],$=[];for(let O=0;O<n;O++)F[O]=0,V[O]=0,$[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:$,object:N,attributes:{},index:null}}function p(N,F,V,$){const O=s.attributes,Y=F.attributes;let z=0;const D=V.getAttributes();for(const j in D)if(D[j].location>=0){const ne=O[j];let ae=Y[j];if(ae===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor)),ne===void 0||ne.attribute!==ae||ae&&ne.data!==ae.data)return!0;z++}return s.attributesNum!==z||s.index!==$}function m(N,F,V,$){const O={},Y=F.attributes;let z=0;const D=V.getAttributes();for(const j in D)if(D[j].location>=0){let ne=Y[j];ne===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor));const ae={};ae.attribute=ne,ne&&ne.data&&(ae.data=ne.data),O[j]=ae,z++}s.attributes=O,s.attributesNum=z,s.index=$}function M(){const N=s.newAttributes;for(let F=0,V=N.length;F<V;F++)N[F]=0}function g(N){f(N,0)}function f(N,F){const V=s.newAttributes,$=s.enabledAttributes,O=s.attributeDivisors;V[N]=1,$[N]===0&&(t.enableVertexAttribArray(N),$[N]=1),O[N]!==F&&(t.vertexAttribDivisor(N,F),O[N]=F)}function x(){const N=s.newAttributes,F=s.enabledAttributes;for(let V=0,$=F.length;V<$;V++)F[V]!==N[V]&&(t.disableVertexAttribArray(V),F[V]=0)}function y(N,F,V,$,O,Y,z){z===!0?t.vertexAttribIPointer(N,F,V,O,Y):t.vertexAttribPointer(N,F,V,$,O,Y)}function v(N,F,V,$){M();const O=$.attributes,Y=V.getAttributes(),z=F.defaultAttributeValues;for(const D in Y){const j=Y[D];if(j.location>=0){let Q=O[D];if(Q===void 0&&(D==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),D==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){const ne=Q.normalized,ae=Q.itemSize,He=e.get(Q);if(He===void 0)continue;const Qe=He.buffer,We=He.type,Z=He.bytesPerElement,oe=We===t.INT||We===t.UNSIGNED_INT||Q.gpuType===zm;if(Q.isInterleavedBufferAttribute){const re=Q.data,Ie=re.stride,Oe=Q.offset;if(re.isInstancedInterleavedBuffer){for(let Ne=0;Ne<j.locationSize;Ne++)f(j.location+Ne,re.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ne=0;Ne<j.locationSize;Ne++)g(j.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let Ne=0;Ne<j.locationSize;Ne++)y(j.location+Ne,ae/j.locationSize,We,ne,Ie*Z,(Oe+ae/j.locationSize*Ne)*Z,oe)}else{if(Q.isInstancedBufferAttribute){for(let re=0;re<j.locationSize;re++)f(j.location+re,Q.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let re=0;re<j.locationSize;re++)g(j.location+re);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let re=0;re<j.locationSize;re++)y(j.location+re,ae/j.locationSize,We,ne,ae*Z,ae/j.locationSize*re*Z,oe)}}else if(z!==void 0){const ne=z[D];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(j.location,ne);break;case 3:t.vertexAttrib3fv(j.location,ne);break;case 4:t.vertexAttrib4fv(j.location,ne);break;default:t.vertexAttrib1fv(j.location,ne)}}}}x()}function T(){C();for(const N in i){const F=i[N];for(const V in F){const $=F[V];for(const O in $){const Y=$[O];for(const z in Y)d(Y[z].object),delete Y[z];delete $[O]}}delete i[N]}}function A(N){if(i[N.id]===void 0)return;const F=i[N.id];for(const V in F){const $=F[V];for(const O in $){const Y=$[O];for(const z in Y)d(Y[z].object),delete Y[z];delete $[O]}}delete i[N.id]}function b(N){for(const F in i){const V=i[F];for(const $ in V){const O=V[$];if(O[N.id]===void 0)continue;const Y=O[N.id];for(const z in Y)d(Y[z].object),delete Y[z];delete O[N.id]}}}function _(N){for(const F in i){const V=i[F],$=N.isInstancedMesh===!0?N.id:0,O=V[$];if(O!==void 0){for(const Y in O){const z=O[Y];for(const D in z)d(z[D].object),delete z[D];delete O[Y]}delete V[$],Object.keys(V).length===0&&delete i[F]}}}function C(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:g,disableUnusedAttributes:x}}function BD(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function VD(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==oi&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const _=b===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Pn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==wi&&!_)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Ue("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,maxSamples:T,samples:A}}function zD(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Kr,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||r;return r=u,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=d(h,u,0)},this.setState=function(h,u,p){const m=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,f=t.get(h);if(!r||m===null||m.length===0||s&&!g)s?d(null):c();else{const x=s?0:i,y=x*4;let v=f.clippingState||null;l.value=v,v=d(m,u,y,p);for(let T=0;T!==y;++T)v[T]=n[T];f.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,p,m){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=l.value,m!==!0||g===null){const f=p+M*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let y=0,v=p;y!==M;++y,v+=4)a.copy(h[y]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const Mr=4,vv=[.125,.215,.35,.446,.526,.582],Qr=20,HD=256,$a=new Qm,_v=new Fe;let Jd=null,ef=0,tf=0,nf=!1;const GD=new B;class yv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=GD}=s;Jd=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),tf=this._renderer.getActiveMipmapLevel(),nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jd,ef,tf),this._renderer.xr.enabled=nf,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===Sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jd=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),tf=this._renderer.getActiveMipmapLevel(),nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Ji,format:oi,colorSpace:iu,depthBuffer:!1},r=Sv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sv(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=WD(s)),this._blurMaterial=XD(s,e,n),this._ggxMaterial=jD(s,e,n)}return r}_compileMaterial(e){const n=new Dn(new kn,e);this._renderer.compile(n,$a)}_sceneToCubeUV(e,n,i,r,s){const l=new Rn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(_v),h.toneMapping=Ri,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dn(new el,new vo({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let f=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,f=!0):(g.color.copy(_v),f=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[y]));const T=this._cubeSize;Fs(r,v*T,y>2?T:0,T,T),h.setRenderTarget(r),f&&h.render(M,l),h.render(e,l)}h.toneMapping=p,h.autoClear=u,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===Sa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mv());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Fs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,$a)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,p=h*u,{_lodMax:m}=this,M=this._sizeLods[i],g=3*M*(i>m-Mr?i-m+Mr:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-n,Fs(s,g,f,3*M,2*M),r.setRenderTarget(s),r.render(o,$a),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Fs(e,g,f,3*M,2*M),r.setRenderTarget(e),r.render(o,$a)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Qr-1),M=s/m,g=isFinite(s)?1+Math.floor(d*M):Qr;g>Qr&&Ue(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Qr}`);const f=[];let x=0;for(let b=0;b<Qr;++b){const _=b/M,C=Math.exp(-_*_/2);f.push(C),b===0?x+=C:b<g&&(x+=2*C)}for(let b=0;b<f.length;b++)f[b]=f[b]/x;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-i;const v=this._sizeLods[r],T=3*v*(r>y-Mr?r-y+Mr:0),A=4*(this._cubeSize-v);Fs(n,T,A,3*v,2*v),l.setRenderTarget(n),l.render(h,$a)}}function WD(t){const e=[],n=[],i=[];let r=t;const s=t-Mr+1+vv.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Mr?l=vv[a-t+Mr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,m=6,M=3,g=2,f=1,x=new Float32Array(M*m*p),y=new Float32Array(g*m*p),v=new Float32Array(f*m*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,_=A>2?0:-1,C=[b,_,0,b+2/3,_,0,b+2/3,_+1,0,b,_,0,b+2/3,_+1,0,b,_+1,0];x.set(C,M*m*A),y.set(u,g*m*A);const P=[A,A,A,A,A,A];v.set(P,f*m*A)}const T=new kn;T.setAttribute("position",new $n(x,M)),T.setAttribute("uv",new $n(y,g)),T.setAttribute("faceIndex",new $n(v,f)),i.push(new Dn(T,null)),r>Mr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Sv(t,e,n){const i=new Pi(t,e,n);return i.texture.mapping=Pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function jD(t,e,n){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function XD(t,e,n){const i=new Float32Array(Qr),r=new B(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Mv(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Ev(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class xE extends Pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new uE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new el(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:Ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Yi});s.uniforms.tEquirect.value=n;const a=new Dn(r,s),o=n.minFilter;return n.minFilter===rs&&(n.minFilter=an),new Z2(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function YD(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Td||p===bd)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const M=new xE(m.height);return M.fromEquirectangularTexture(t,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,m=p===Td||p===bd,M=p===ms||p===Sa;if(m||M){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new yv(t)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return m&&x&&x.height>0||M&&x&&l(x)?(i===null&&(i=new yv(t)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,p){return p===Td?u.mapping=ms:p===bd&&(u.mapping=Sa),u}function l(u){let p=0;const m=6;for(let M=0;M<m;M++)u[M]!==void 0&&p++;return p===m}function c(u){const p=u.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function $D(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&oa("WebGLRenderer: "+i+" extension not supported."),r}}}function qD(t,e,n,i){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,m=h.attributes.position;let M=0;if(m===void 0)return;if(p!==null){const x=p.array;M=p.version;for(let y=0,v=x.length;y<v;y+=3){const T=x[y+0],A=x[y+1],b=x[y+2];u.push(T,A,A,b,b,T)}}else{const x=m.array;M=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const T=y+0,A=y+1,b=y+2;u.push(T,A,A,b,b,T)}}const g=new(m.count>=65535?oE:aE)(u,1);g.version=M;const f=s.get(h);f&&e.remove(f),s.set(h,g)}function d(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function KD(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,u){t.drawElements(i,u,s,h*a),n.update(u,i,1)}function c(h,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,h*a,p),n.update(u,i,p))}function d(h,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,p);let M=0;for(let g=0;g<p;g++)M+=u[g];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function ZD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function QD(t,e,n){const i=new WeakMap,r=new yt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let P=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;m===!0&&(v=1),M===!0&&(v=2),g===!0&&(v=3);let T=o.attributes.position.count*v,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const b=new Float32Array(T*A*4*h),_=new iE(b,T,A,h);_.type=wi,_.needsUpdate=!0;const C=v*4;for(let N=0;N<h;N++){const F=f[N],V=x[N],$=y[N],O=T*A*4*N;for(let Y=0;Y<F.count;Y++){const z=Y*C;m===!0&&(r.fromBufferAttribute(F,Y),b[O+z+0]=r.x,b[O+z+1]=r.y,b[O+z+2]=r.z,b[O+z+3]=0),M===!0&&(r.fromBufferAttribute(V,Y),b[O+z+4]=r.x,b[O+z+5]=r.y,b[O+z+6]=r.z,b[O+z+7]=0),g===!0&&(r.fromBufferAttribute($,Y),b[O+z+8]=r.x,b[O+z+9]=r.y,b[O+z+10]=r.z,b[O+z+11]=$.itemSize===4?r.w:1)}}u={count:h,texture:_,size:new Ze(T,A)},i.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const M=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function JD(t,e,n,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const eL={[HM]:"LINEAR_TONE_MAPPING",[GM]:"REINHARD_TONE_MAPPING",[WM]:"CINEON_TONE_MAPPING",[Vm]:"ACES_FILMIC_TONE_MAPPING",[XM]:"AGX_TONE_MAPPING",[YM]:"NEUTRAL_TONE_MAPPING",[jM]:"CUSTOM_TONE_MAPPING"};function tL(t,e,n,i,r,s){const a=new Pi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Ma(e,n):void 0}),o=new Pi(e,n,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),l=new kn;l.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new pn([0,2,0,0,2,0],2));const c=new H2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Dn(l,c),h=new Qm(-1,1,1,-1,0,1);let u=null,p=null,m=!1,M,g=null,f=[],x=!1;this.setSize=function(y,v){a.setSize(y,v),o.setSize(y,v);for(let T=0;T<f.length;T++){const A=f[T];A.setSize&&A.setSize(y,v)}},this.setEffects=function(y){f=y,x=f.length>0&&f[0].isRenderPass===!0;const v=a.width,T=a.height;for(let A=0;A<f.length;A++){const b=f[A];b.setSize&&b.setSize(v,T)}},this.begin=function(y,v){if(m||y.toneMapping===Ri&&f.length===0)return!1;if(g=v,v!==null){const T=v.width,A=v.height;(a.width!==T||a.height!==A)&&this.setSize(T,A)}return x===!1&&y.setRenderTarget(a),M=y.toneMapping,y.toneMapping=Ri,!0},this.hasRenderPass=function(){return x},this.end=function(y,v){y.toneMapping=M,m=!0;let T=a,A=o;for(let b=0;b<f.length;b++){const _=f[b];if(_.enabled!==!1&&(_.render(y,A,T,v),_.needsSwap!==!1)){const C=T;T=A,A=C}}if(u!==y.outputColorSpace||p!==y.toneMapping){u=y.outputColorSpace,p=y.toneMapping,c.defines={},Ke.getTransfer(u)===rt&&(c.defines.SRGB_TRANSFER="");const b=eL[p];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(g),y.render(d,h),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const vE=new on,pp=new Ma(1,1),_E=new iE,yE=new x2,SE=new uE,wv=[],Tv=[],bv=new Float32Array(16),Av=new Float32Array(9),Cv=new Float32Array(4);function Da(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=wv[r];if(s===void 0&&(s=new Float32Array(r),wv[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Iu(t,e){let n=Tv[e];n===void 0&&(n=new Int32Array(e),Tv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function nL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function iL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function rL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function sL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function aL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;Cv.set(i),t.uniformMatrix2fv(this.addr,!1,Cv),Ht(n,i)}}function oL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;Av.set(i),t.uniformMatrix3fv(this.addr,!1,Av),Ht(n,i)}}function lL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;bv.set(i),t.uniformMatrix4fv(this.addr,!1,bv),Ht(n,i)}}function cL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function uL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function dL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function fL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function hL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function pL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function mL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function gL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function xL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(pp.compareFunction=n.isReversedDepthBuffer()?$m:Ym,s=pp):s=vE,n.setTexture2D(e||s,r)}function vL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||yE,r)}function _L(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||SE,r)}function yL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||_E,r)}function SL(t){switch(t){case 5126:return nL;case 35664:return iL;case 35665:return rL;case 35666:return sL;case 35674:return aL;case 35675:return oL;case 35676:return lL;case 5124:case 35670:return cL;case 35667:case 35671:return uL;case 35668:case 35672:return dL;case 35669:case 35673:return fL;case 5125:return hL;case 36294:return pL;case 36295:return mL;case 36296:return gL;case 35678:case 36198:case 36298:case 36306:case 35682:return xL;case 35679:case 36299:case 36307:return vL;case 35680:case 36300:case 36308:case 36293:return _L;case 36289:case 36303:case 36311:case 36292:return yL}}function ML(t,e){t.uniform1fv(this.addr,e)}function EL(t,e){const n=Da(e,this.size,2);t.uniform2fv(this.addr,n)}function wL(t,e){const n=Da(e,this.size,3);t.uniform3fv(this.addr,n)}function TL(t,e){const n=Da(e,this.size,4);t.uniform4fv(this.addr,n)}function bL(t,e){const n=Da(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function AL(t,e){const n=Da(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function CL(t,e){const n=Da(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function RL(t,e){t.uniform1iv(this.addr,e)}function PL(t,e){t.uniform2iv(this.addr,e)}function NL(t,e){t.uniform3iv(this.addr,e)}function DL(t,e){t.uniform4iv(this.addr,e)}function LL(t,e){t.uniform1uiv(this.addr,e)}function IL(t,e){t.uniform2uiv(this.addr,e)}function UL(t,e){t.uniform3uiv(this.addr,e)}function FL(t,e){t.uniform4uiv(this.addr,e)}function OL(t,e,n){const i=this.cache,r=e.length,s=Iu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=pp:a=vE;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function kL(t,e,n){const i=this.cache,r=e.length,s=Iu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||yE,s[a])}function BL(t,e,n){const i=this.cache,r=e.length,s=Iu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||SE,s[a])}function VL(t,e,n){const i=this.cache,r=e.length,s=Iu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||_E,s[a])}function zL(t){switch(t){case 5126:return ML;case 35664:return EL;case 35665:return wL;case 35666:return TL;case 35674:return bL;case 35675:return AL;case 35676:return CL;case 5124:case 35670:return RL;case 35667:case 35671:return PL;case 35668:case 35672:return NL;case 35669:case 35673:return DL;case 5125:return LL;case 36294:return IL;case 36295:return UL;case 36296:return FL;case 35678:case 36198:case 36298:case 36306:case 35682:return OL;case 35679:case 36299:case 36307:return kL;case 35680:case 36300:case 36308:case 36293:return BL;case 36289:case 36303:case 36311:case 36292:return VL}}class HL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=SL(n.type)}}class GL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zL(n.type)}}class WL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const rf=/(\w+)(\])?(\[|\.)?/g;function Rv(t,e){t.seq.push(e),t.map[e.id]=e}function jL(t,e,n){const i=t.name,r=i.length;for(rf.lastIndex=0;;){const s=rf.exec(i),a=rf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Rv(n,c===void 0?new HL(o,t,e):new GL(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new WL(o),Rv(n,h)),n=h}}}class yc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);jL(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Pv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const XL=37297;let YL=0;function $L(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Nv=new ke;function qL(t){Ke._getMatrix(Nv,Ke.workingColorSpace,t);const e=`mat3( ${Nv.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case ru:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Dv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+$L(t.getShaderSource(e),o)}else return s}function KL(t,e){const n=qL(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const ZL={[HM]:"Linear",[GM]:"Reinhard",[WM]:"Cineon",[Vm]:"ACESFilmic",[XM]:"AgX",[YM]:"Neutral",[jM]:"Custom"};function QL(t,e){const n=ZL[e];return n===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yl=new B;function JL(){Ke.getLuminanceCoefficients(Yl);const t=Yl.x.toFixed(4),e=Yl.y.toFixed(4),n=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function tI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function io(t){return t!==""}function Lv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iI=/^[ \t]*#include +<([\w\d./]+)>/gm;function mp(t){return t.replace(iI,sI)}const rI=new Map;function sI(t,e){let n=ze[e];if(n===void 0){const i=rI.get(e);if(i!==void 0)n=ze[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mp(n)}const aI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uv(t){return t.replace(aI,oI)}function oI(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const lI={[mc]:"SHADOWMAP_TYPE_PCF",[to]:"SHADOWMAP_TYPE_VSM"};function cI(t){return lI[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uI={[ms]:"ENVMAP_TYPE_CUBE",[Sa]:"ENVMAP_TYPE_CUBE",[Pu]:"ENVMAP_TYPE_CUBE_UV"};function dI(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":uI[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const fI={[Sa]:"ENVMAP_MODE_REFRACTION"};function hI(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":fI[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pI={[zM]:"ENVMAP_BLENDING_MULTIPLY",[KP]:"ENVMAP_BLENDING_MIX",[ZP]:"ENVMAP_BLENDING_ADD"};function mI(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":pI[t.combine]||"ENVMAP_BLENDING_NONE"}function gI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xI(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=cI(n),c=dI(n),d=hI(n),h=mI(n),u=gI(n),p=eI(n),m=tI(s),M=r.createProgram();let g,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(io).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(io).join(`
`),f.length>0&&(f+=`
`)):(g=[Fv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),f=[Fv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?ze.tonemapping_pars_fragment:"",n.toneMapping!==Ri?QL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,KL("linearToOutputTexel",n.outputColorSpace),JL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(io).join(`
`)),a=mp(a),a=Lv(a,n),a=Iv(a,n),o=mp(o),o=Lv(o,n),o=Iv(o,n),a=Uv(a),o=Uv(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===jx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=x+g+a,v=x+f+o,T=Pv(r,r.VERTEX_SHADER,y),A=Pv(r,r.FRAGMENT_SHADER,v);r.attachShader(M,T),r.attachShader(M,A),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function b(N){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(M)||"",V=r.getShaderInfoLog(T)||"",$=r.getShaderInfoLog(A)||"",O=F.trim(),Y=V.trim(),z=$.trim();let D=!0,j=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,T,A);else{const Q=Dv(r,T,"vertex"),ne=Dv(r,A,"fragment");et("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+O+`
`+Q+`
`+ne)}else O!==""?Ue("WebGLProgram: Program Info Log:",O):(Y===""||z==="")&&(j=!1);j&&(N.diagnostics={runnable:D,programLog:O,vertexShader:{log:Y,prefix:g},fragmentShader:{log:z,prefix:f}})}r.deleteShader(T),r.deleteShader(A),_=new yc(r,M),C=nI(r,M)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let C;this.getAttributes=function(){return C===void 0&&b(this),C};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(M,XL)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YL++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=A,this}let vI=0;class _I{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yI(e),n.set(e,i)),i}}class yI{constructor(e){this.id=vI++,this.code=e,this.usedTimes=0}}function SI(t){return t===gs||t===tu||t===nu}function MI(t,e,n,i,r,s){const a=new rE,o=new _I,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,C,P,N,F,V){const $=N.fog,O=F.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,D=e.get(_.envMap||Y,z),j=D&&D.mapping===Pu?D.image.height:null,Q=p[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Ue("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ae=ne!==void 0?ne.length:0;let He=0;O.morphAttributes.position!==void 0&&(He=1),O.morphAttributes.normal!==void 0&&(He=2),O.morphAttributes.color!==void 0&&(He=3);let Qe,We,Z,oe;if(Q){const Ee=Mi[Q];Qe=Ee.vertexShader,We=Ee.fragmentShader}else{Qe=_.vertexShader,We=_.fragmentShader;const Ee=o.getVertexShaderStage(_),Tt=o.getFragmentShaderStage(_);o.update(_,Ee,Tt),Z=Ee.id,oe=Tt.id}const re=t.getRenderTarget(),Ie=t.state.buffers.depth.getReversed(),Oe=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,De=!!_.map,Ce=!!_.matcap,Xe=!!D,Ye=!!_.aoMap,qe=!!_.lightMap,wt=!!_.bumpMap&&_.wireframe===!1,Rt=!!_.normalMap,Lt=!!_.displacementMap,Ot=!!_.emissiveMap,xt=!!_.metalnessMap,pt=!!_.roughnessMap,I=_.anisotropy>0,xn=_.clearcoat>0,it=_.dispersion>0,R=_.iridescence>0,E=_.sheen>0,k=_.transmission>0,W=I&&!!_.anisotropyMap,q=xn&&!!_.clearcoatMap,le=xn&&!!_.clearcoatNormalMap,ue=xn&&!!_.clearcoatRoughnessMap,K=R&&!!_.iridescenceMap,ee=R&&!!_.iridescenceThicknessMap,de=E&&!!_.sheenColorMap,be=E&&!!_.sheenRoughnessMap,pe=!!_.specularMap,fe=!!_.specularColorMap,Pe=!!_.specularIntensityMap,Le=k&&!!_.transmissionMap,Be=k&&!!_.thicknessMap,L=!!_.gradientMap,ce=!!_.alphaMap,J=_.alphaTest>0,he=!!_.alphaHash,ve=!!_.extensions;let te=Ri;_.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(te=t.toneMapping);const Te={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Qe,fragmentShader:We,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&F.instanceColor!==null,instancingMorph:Oe&&F.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:De,matcap:Ce,envMap:Xe,envMapMode:Xe&&D.mapping,envMapCubeUVHeight:j,aoMap:Ye,lightMap:qe,bumpMap:wt,normalMap:Rt,displacementMap:Lt,emissiveMap:Ot,normalMapObjectSpace:Rt&&_.normalMapType===e2,normalMapTangentSpace:Rt&&_.normalMapType===dp,packedNormalMap:Rt&&_.normalMapType===dp&&SI(_.normalMap.format),metalnessMap:xt,roughnessMap:pt,anisotropy:I,anisotropyMap:W,clearcoat:xn,clearcoatMap:q,clearcoatNormalMap:le,clearcoatRoughnessMap:ue,dispersion:it,iridescence:R,iridescenceMap:K,iridescenceThicknessMap:ee,sheen:E,sheenColorMap:de,sheenRoughnessMap:be,specularMap:pe,specularColorMap:fe,specularIntensityMap:Pe,transmission:k,transmissionMap:Le,thicknessMap:Be,gradientMap:L,opaque:_.transparent===!1&&_.blending===aa&&_.alphaToCoverage===!1,alphaMap:ce,alphaTest:J,alphaHash:he,combine:_.combine,mapUv:De&&m(_.map.channel),aoMapUv:Ye&&m(_.aoMap.channel),lightMapUv:qe&&m(_.lightMap.channel),bumpMapUv:wt&&m(_.bumpMap.channel),normalMapUv:Rt&&m(_.normalMap.channel),displacementMapUv:Lt&&m(_.displacementMap.channel),emissiveMapUv:Ot&&m(_.emissiveMap.channel),metalnessMapUv:xt&&m(_.metalnessMap.channel),roughnessMapUv:pt&&m(_.roughnessMap.channel),anisotropyMapUv:W&&m(_.anisotropyMap.channel),clearcoatMapUv:q&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(_.sheenRoughnessMap.channel),specularMapUv:pe&&m(_.specularMap.channel),specularColorMapUv:fe&&m(_.specularColorMap.channel),specularIntensityMapUv:Pe&&m(_.specularIntensityMap.channel),transmissionMapUv:Le&&m(_.transmissionMap.channel),thicknessMapUv:Be&&m(_.thicknessMap.channel),alphaMapUv:ce&&m(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Rt||I),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(De||ce),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&Rt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ie,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:He,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===rt,decodeVideoTextureEmissive:Ot&&_.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(_.emissiveMap.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Hi,flipSided:_.side===wn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ve&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&_.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function g(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)C.push(P),C.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(f(C,_),x(C,_),C.push(t.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function f(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function x(_,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){const C=p[_.type];let P;if(C){const N=Mi[C];P=B2.clone(N.uniforms)}else P=_.uniforms;return P}function v(_,C){let P=d.get(C);return P!==void 0?++P.usedTimes:(P=new xI(t,C,_,r),c.push(P),d.set(C,P)),P}function T(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function b(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:y,acquireProgram:v,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:b}}function EI(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function wI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Ov(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function kv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,m,M,g,f){let x=t[e];return x===void 0?(x={id:u.id,object:u,geometry:p,material:m,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:f},t[e]=x):(x.id=u.id,x.object=u,x.geometry=p,x.material=m,x.materialVariant=a(u),x.groupOrder=M,x.renderOrder=u.renderOrder,x.z=g,x.group=f),e++,x}function l(u,p,m,M,g,f){const x=o(u,p,m,M,g,f);m.transmission>0?i.push(x):m.transparent===!0?r.push(x):n.push(x)}function c(u,p,m,M,g,f){const x=o(u,p,m,M,g,f);m.transmission>0?i.unshift(x):m.transparent===!0?r.unshift(x):n.unshift(x)}function d(u,p,m){n.length>1&&n.sort(u||wI),i.length>1&&i.sort(p||Ov),r.length>1&&r.sort(p||Ov),m&&(n.reverse(),i.reverse(),r.reverse())}function h(){for(let u=e,p=t.length;u<p;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:d}}function TI(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new kv,t.set(i,[a])):r>=s.length?(a=new kv,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function bI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Fe};break;case"SpotLight":n={position:new B,direction:new B,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":n={color:new Fe,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function AI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let CI=0;function RI(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function PI(t){const e=new bI,n=AI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new Mt,a=new Mt;function o(c){let d=0,h=0,u=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,m=0,M=0,g=0,f=0,x=0,y=0,v=0,T=0,A=0,b=0;c.sort(RI);for(let C=0,P=c.length;C<P;C++){const N=c[C],F=N.color,V=N.intensity,$=N.distance;let O=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===gs?O=N.shadow.map.texture:O=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)d+=F.r*V,h+=F.g*V,u+=F.b*V;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],V);b++}else if(N.isDirectionalLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const z=N.shadow,D=n.get(N);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=N.shadow.matrix,x++}i.directional[p]=Y,p++}else if(N.isSpotLight){const Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(F).multiplyScalar(V),Y.distance=$,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[M]=Y;const z=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,z.updateMatrices(N),N.castShadow&&A++),i.spotLightMatrix[M]=z.matrix,N.castShadow){const D=n.get(N);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,i.spotShadow[M]=D,i.spotShadowMap[M]=O,v++}M++}else if(N.isRectAreaLight){const Y=e.get(N);Y.color.copy(F).multiplyScalar(V),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=Y,g++}else if(N.isPointLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const z=N.shadow,D=n.get(N);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,D.shadowCameraNear=z.camera.near,D.shadowCameraFar=z.camera.far,i.pointShadow[m]=D,i.pointShadowMap[m]=O,i.pointShadowMatrix[m]=N.shadow.matrix,y++}i.point[m]=Y,m++}else if(N.isHemisphereLight){const Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(V),Y.groundColor.copy(N.groundColor).multiplyScalar(V),i.hemi[f]=Y,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==p||_.pointLength!==m||_.spotLength!==M||_.rectAreaLength!==g||_.hemiLength!==f||_.numDirectionalShadows!==x||_.numPointShadows!==y||_.numSpotShadows!==v||_.numSpotMaps!==T||_.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,_.directionalLength=p,_.pointLength=m,_.spotLength=M,_.rectAreaLength=g,_.hemiLength=f,_.numDirectionalShadows=x,_.numPointShadows=y,_.numSpotShadows=v,_.numSpotMaps=T,_.numLightProbes=b,i.version=CI++)}function l(c,d){let h=0,u=0,p=0,m=0,M=0;const g=d.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const y=c[f];if(y.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),h++}else if(y.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const v=i.hemi[M];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:i}}function Bv(t){const e=new PI(t),n=[],i=[],r=[];function s(u){h.camera=u,n.length=0,i.length=0,r.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function NI(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Bv(t),e.set(r,[o])):s>=a.length?(o=new Bv(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const DI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,II=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],UI=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Vv=new Mt,qa=new B,sf=new B;function FI(t,e,n){let i=new Km;const r=new Ze,s=new Ze,a=new yt,o=new j2,l=new X2,c={},d=n.maxTextureSize,h={[Ur]:wn,[wn]:Ur,[Hi]:Hi},u=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:DI,fragmentShader:LI}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new kn;m.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Dn(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mc;let f=this.type;this.render=function(A,b,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===NP&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=mc);const C=t.getRenderTarget(),P=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Yi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=f!==this.type;V&&b.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(O=>O.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,O=A.length;$<O;$++){const Y=A[$],z=Y.shadow;if(z===void 0){Ue("WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const D=z.getFrameExtents();r.multiply(D),s.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/D.x),r.x=s.x*D.x,z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/D.y),r.y=s.y*D.y,z.mapSize.y=s.y));const j=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=j,z.map===null||V===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===to){if(Y.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Pi(r.x,r.y,{format:gs,type:Ji,minFilter:an,magFilter:an,generateMipmaps:!1}),z.map.texture.name=Y.name+".shadowMap",z.map.depthTexture=new Ma(r.x,r.y,wi),z.map.depthTexture.name=Y.name+".shadowMapDepth",z.map.depthTexture.format=er,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=qt,z.map.depthTexture.magFilter=qt}else Y.isPointLight?(z.map=new xE(r.x),z.map.depthTexture=new O2(r.x,Di)):(z.map=new Pi(r.x,r.y),z.map.depthTexture=new Ma(r.x,r.y,Di)),z.map.depthTexture.name=Y.name+".shadowMap",z.map.depthTexture.format=er,this.type===mc?(z.map.depthTexture.compareFunction=j?$m:Ym,z.map.depthTexture.minFilter=an,z.map.depthTexture.magFilter=an):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=qt,z.map.depthTexture.magFilter=qt);z.camera.updateProjectionMatrix()}const Q=z.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<Q;ne++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(z.map),t.clear());const ae=z.getViewport(ne);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),F.viewport(a)}if(Y.isPointLight){const ae=z.camera,He=z.matrix,Qe=Y.distance||ae.far;Qe!==ae.far&&(ae.far=Qe,ae.updateProjectionMatrix()),qa.setFromMatrixPosition(Y.matrixWorld),ae.position.copy(qa),sf.copy(ae.position),sf.add(II[ne]),ae.up.copy(UI[ne]),ae.lookAt(sf),ae.updateMatrixWorld(),He.makeTranslation(-qa.x,-qa.y,-qa.z),Vv.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Vv,ae.coordinateSystem,ae.reversedDepth)}else z.updateMatrices(Y);i=z.getFrustum(),v(b,_,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===to&&x(z,_),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(C,P,N)};function x(A,b){const _=e.update(M);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pi(r.x,r.y,{format:gs,type:Ji})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,_,u,M,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,_,p,M,null)}function y(A,b,_,C){let P=null;const N=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)P=N;else if(P=_.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const F=P.uuid,V=b.uuid;let $=c[F];$===void 0&&($={},c[F]=$);let O=$[V];O===void 0&&(O=P.clone(),$[V]=O,b.addEventListener("dispose",T)),P=O}if(P.visible=b.visible,P.wireframe=b.wireframe,C===to?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:h[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=t.properties.get(P);F.light=_}return P}function v(A,b,_,C,P){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===to)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const V=e.update(A),$=A.material;if(Array.isArray($)){const O=V.groups;for(let Y=0,z=O.length;Y<z;Y++){const D=O[Y],j=$[D.materialIndex];if(j&&j.visible){const Q=y(A,j,C,P);A.onBeforeShadow(t,A,b,_,V,Q,D),t.renderBufferDirect(_,null,V,Q,A,D),A.onAfterShadow(t,A,b,_,V,Q,D)}}}else if($.visible){const O=y(A,$,C,P);A.onBeforeShadow(t,A,b,_,V,O,null),t.renderBufferDirect(_,null,V,O,A,null),A.onAfterShadow(t,A,b,_,V,O,null)}}const F=A.children;for(let V=0,$=F.length;V<$;V++)v(F[V],b,_,C,P)}function T(A){A.target.removeEventListener("dispose",T);for(const _ in c){const C=c[_],P=A.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function OI(t,e){function n(){let L=!1;const ce=new yt;let J=null;const he=new yt(0,0,0,0);return{setMask:function(ve){J!==ve&&!L&&(t.colorMask(ve,ve,ve,ve),J=ve)},setLocked:function(ve){L=ve},setClear:function(ve,te,Te,Ee,Tt){Tt===!0&&(ve*=Ee,te*=Ee,Te*=Ee),ce.set(ve,te,Te,Ee),he.equals(ce)===!1&&(t.clearColor(ve,te,Te,Ee),he.copy(ce))},reset:function(){L=!1,J=null,he.set(-1,0,0,0)}}}function i(){let L=!1,ce=!1,J=null,he=null,ve=null;return{setReversed:function(te){if(ce!==te){const Te=e.get("EXT_clip_control");te?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const Ee=ve;ve=null,this.setClear(Ee)}},getReversed:function(){return ce},setTest:function(te){te?re(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(te){J!==te&&!L&&(t.depthMask(te),J=te)},setFunc:function(te){if(ce&&(te=u2[te]),he!==te){switch(te){case bh:t.depthFunc(t.NEVER);break;case Ah:t.depthFunc(t.ALWAYS);break;case Ch:t.depthFunc(t.LESS);break;case ya:t.depthFunc(t.LEQUAL);break;case Rh:t.depthFunc(t.EQUAL);break;case Ph:t.depthFunc(t.GEQUAL);break;case Nh:t.depthFunc(t.GREATER);break;case Dh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=te}},setLocked:function(te){L=te},setClear:function(te){ve!==te&&(ve=te,ce&&(te=1-te),t.clearDepth(te))},reset:function(){L=!1,J=null,he=null,ve=null,ce=!1}}}function r(){let L=!1,ce=null,J=null,he=null,ve=null,te=null,Te=null,Ee=null,Tt=null;return{setTest:function(dt){L||(dt?re(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(dt){ce!==dt&&!L&&(t.stencilMask(dt),ce=dt)},setFunc:function(dt,hi,pi){(J!==dt||he!==hi||ve!==pi)&&(t.stencilFunc(dt,hi,pi),J=dt,he=hi,ve=pi)},setOp:function(dt,hi,pi){(te!==dt||Te!==hi||Ee!==pi)&&(t.stencilOp(dt,hi,pi),te=dt,Te=hi,Ee=pi)},setLocked:function(dt){L=dt},setClear:function(dt){Tt!==dt&&(t.clearStencil(dt),Tt=dt)},reset:function(){L=!1,ce=null,J=null,he=null,ve=null,te=null,Te=null,Ee=null,Tt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},u={},p=new WeakMap,m=[],M=null,g=!1,f=null,x=null,y=null,v=null,T=null,A=null,b=null,_=new Fe(0,0,0),C=0,P=!1,N=null,F=null,V=null,$=null,O=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,D=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=D>=1):j.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=D>=2);let Q=null,ne={};const ae=t.getParameter(t.SCISSOR_BOX),He=t.getParameter(t.VIEWPORT),Qe=new yt().fromArray(ae),We=new yt().fromArray(He);function Z(L,ce,J,he){const ve=new Uint8Array(4),te=t.createTexture();t.bindTexture(L,te),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<J;Te++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(ce+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return te}const oe={};oe[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(t.DEPTH_TEST),a.setFunc(ya),wt(!1),Rt(Vx),re(t.CULL_FACE),Ye(Yi);function re(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Ie(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Oe(L,ce){return u[L]!==ce?(t.bindFramebuffer(L,ce),u[L]=ce,L===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ce),L===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ne(L,ce){let J=m,he=!1;if(L){J=p.get(ce),J===void 0&&(J=[],p.set(ce,J));const ve=L.textures;if(J.length!==ve.length||J[0]!==t.COLOR_ATTACHMENT0){for(let te=0,Te=ve.length;te<Te;te++)J[te]=t.COLOR_ATTACHMENT0+te;J.length=ve.length,he=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,he=!0);he&&t.drawBuffers(J)}function De(L){return M!==L?(t.useProgram(L),M=L,!0):!1}const Ce={[Zr]:t.FUNC_ADD,[LP]:t.FUNC_SUBTRACT,[IP]:t.FUNC_REVERSE_SUBTRACT};Ce[UP]=t.MIN,Ce[FP]=t.MAX;const Xe={[OP]:t.ZERO,[kP]:t.ONE,[BP]:t.SRC_COLOR,[wh]:t.SRC_ALPHA,[jP]:t.SRC_ALPHA_SATURATE,[GP]:t.DST_COLOR,[zP]:t.DST_ALPHA,[VP]:t.ONE_MINUS_SRC_COLOR,[Th]:t.ONE_MINUS_SRC_ALPHA,[WP]:t.ONE_MINUS_DST_COLOR,[HP]:t.ONE_MINUS_DST_ALPHA,[XP]:t.CONSTANT_COLOR,[YP]:t.ONE_MINUS_CONSTANT_COLOR,[$P]:t.CONSTANT_ALPHA,[qP]:t.ONE_MINUS_CONSTANT_ALPHA};function Ye(L,ce,J,he,ve,te,Te,Ee,Tt,dt){if(L===Yi){g===!0&&(Ie(t.BLEND),g=!1);return}if(g===!1&&(re(t.BLEND),g=!0),L!==DP){if(L!==f||dt!==P){if((x!==Zr||T!==Zr)&&(t.blendEquation(t.FUNC_ADD),x=Zr,T=Zr),dt)switch(L){case aa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Js:t.blendFunc(t.ONE,t.ONE);break;case zx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hx:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",L);break}else switch(L){case aa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case zx:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hx:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",L);break}y=null,v=null,A=null,b=null,_.set(0,0,0),C=0,f=L,P=dt}return}ve=ve||ce,te=te||J,Te=Te||he,(ce!==x||ve!==T)&&(t.blendEquationSeparate(Ce[ce],Ce[ve]),x=ce,T=ve),(J!==y||he!==v||te!==A||Te!==b)&&(t.blendFuncSeparate(Xe[J],Xe[he],Xe[te],Xe[Te]),y=J,v=he,A=te,b=Te),(Ee.equals(_)===!1||Tt!==C)&&(t.blendColor(Ee.r,Ee.g,Ee.b,Tt),_.copy(Ee),C=Tt),f=L,P=!1}function qe(L,ce){L.side===Hi?Ie(t.CULL_FACE):re(t.CULL_FACE);let J=L.side===wn;ce&&(J=!J),wt(J),L.blending===aa&&L.transparent===!1?Ye(Yi):Ye(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const he=L.stencilWrite;o.setTest(he),he&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ot(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function wt(L){N!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),N=L)}function Rt(L){L!==RP?(re(t.CULL_FACE),L!==F&&(L===Vx?t.cullFace(t.BACK):L===PP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),F=L}function Lt(L){L!==V&&(z&&t.lineWidth(L),V=L)}function Ot(L,ce,J){L?(re(t.POLYGON_OFFSET_FILL),($!==ce||O!==J)&&($=ce,O=J,a.getReversed()&&(ce=-ce),t.polygonOffset(ce,J))):Ie(t.POLYGON_OFFSET_FILL)}function xt(L){L?re(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function pt(L){L===void 0&&(L=t.TEXTURE0+Y-1),Q!==L&&(t.activeTexture(L),Q=L)}function I(L,ce,J){J===void 0&&(Q===null?J=t.TEXTURE0+Y-1:J=Q);let he=ne[J];he===void 0&&(he={type:void 0,texture:void 0},ne[J]=he),(he.type!==L||he.texture!==ce)&&(Q!==J&&(t.activeTexture(J),Q=J),t.bindTexture(L,ce||oe[L]),he.type=L,he.texture=ce)}function xn(){const L=ne[Q];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function it(){try{t.compressedTexImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function E(){try{t.texSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function k(){try{t.texSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function q(){try{t.compressedTexSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function le(){try{t.texStorage2D(...arguments)}catch(L){et("WebGLState:",L)}}function ue(){try{t.texStorage3D(...arguments)}catch(L){et("WebGLState:",L)}}function K(){try{t.texImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function ee(){try{t.texImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function de(L){return h[L]!==void 0?h[L]:t.getParameter(L)}function be(L,ce){h[L]!==ce&&(t.pixelStorei(L,ce),h[L]=ce)}function pe(L){Qe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Qe.copy(L))}function fe(L){We.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),We.copy(L))}function Pe(L,ce){let J=c.get(ce);J===void 0&&(J=new WeakMap,c.set(ce,J));let he=J.get(L);he===void 0&&(he=t.getUniformBlockIndex(ce,L.name),J.set(L,he))}function Le(L,ce){const he=c.get(ce).get(L);l.get(ce)!==he&&(t.uniformBlockBinding(ce,he,L.__bindingPointIndex),l.set(ce,he))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},h={},Q=null,ne={},u={},p=new WeakMap,m=[],M=null,g=!1,f=null,x=null,y=null,v=null,T=null,A=null,b=null,_=new Fe(0,0,0),C=0,P=!1,N=null,F=null,V=null,$=null,O=null,Qe.set(0,0,t.canvas.width,t.canvas.height),We.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Ie,bindFramebuffer:Oe,drawBuffers:Ne,useProgram:De,setBlending:Ye,setMaterial:qe,setFlipSided:wt,setCullFace:Rt,setLineWidth:Lt,setPolygonOffset:Ot,setScissorTest:xt,activeTexture:pt,bindTexture:I,unbindTexture:xn,compressedTexImage2D:it,compressedTexImage3D:R,texImage2D:K,texImage3D:ee,pixelStorei:be,getParameter:de,updateUBOMapping:Pe,uniformBlockBinding:Le,texStorage2D:le,texStorage3D:ue,texSubImage2D:E,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:q,scissor:pe,viewport:fe,reset:Be}}function kI(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,d=new WeakMap,h=new Set;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,E){return m?new OffscreenCanvas(R,E):su("canvas")}function g(R,E,k){let W=1;const q=it(R);if((q.width>k||q.height>k)&&(W=k/Math.max(q.width,q.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const le=Math.floor(W*q.width),ue=Math.floor(W*q.height);u===void 0&&(u=M(le,ue));const K=E?M(le,ue):u;return K.width=le,K.height=ue,K.getContext("2d").drawImage(R,0,0,le,ue),Ue("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+le+"x"+ue+")."),K}else return"data"in R&&Ue("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function f(R){return R.generateMipmaps}function x(R){t.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(R,E,k,W,q,le=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue;W&&(ue=e.get("EXT_texture_norm16"),ue||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=E;if(E===t.RED&&(k===t.FLOAT&&(K=t.R32F),k===t.HALF_FLOAT&&(K=t.R16F),k===t.UNSIGNED_BYTE&&(K=t.R8),k===t.UNSIGNED_SHORT&&ue&&(K=ue.R16_EXT),k===t.SHORT&&ue&&(K=ue.R16_SNORM_EXT)),E===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.R8UI),k===t.UNSIGNED_SHORT&&(K=t.R16UI),k===t.UNSIGNED_INT&&(K=t.R32UI),k===t.BYTE&&(K=t.R8I),k===t.SHORT&&(K=t.R16I),k===t.INT&&(K=t.R32I)),E===t.RG&&(k===t.FLOAT&&(K=t.RG32F),k===t.HALF_FLOAT&&(K=t.RG16F),k===t.UNSIGNED_BYTE&&(K=t.RG8),k===t.UNSIGNED_SHORT&&ue&&(K=ue.RG16_EXT),k===t.SHORT&&ue&&(K=ue.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RG8UI),k===t.UNSIGNED_SHORT&&(K=t.RG16UI),k===t.UNSIGNED_INT&&(K=t.RG32UI),k===t.BYTE&&(K=t.RG8I),k===t.SHORT&&(K=t.RG16I),k===t.INT&&(K=t.RG32I)),E===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGB8UI),k===t.UNSIGNED_SHORT&&(K=t.RGB16UI),k===t.UNSIGNED_INT&&(K=t.RGB32UI),k===t.BYTE&&(K=t.RGB8I),k===t.SHORT&&(K=t.RGB16I),k===t.INT&&(K=t.RGB32I)),E===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),k===t.UNSIGNED_INT&&(K=t.RGBA32UI),k===t.BYTE&&(K=t.RGBA8I),k===t.SHORT&&(K=t.RGBA16I),k===t.INT&&(K=t.RGBA32I)),E===t.RGB&&(k===t.UNSIGNED_SHORT&&ue&&(K=ue.RGB16_EXT),k===t.SHORT&&ue&&(K=ue.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),E===t.RGBA){const ee=le?ru:Ke.getTransfer(q);k===t.FLOAT&&(K=t.RGBA32F),k===t.HALF_FLOAT&&(K=t.RGBA16F),k===t.UNSIGNED_BYTE&&(K=ee===rt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&ue&&(K=ue.RGBA16_EXT),k===t.SHORT&&ue&&(K=ue.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function T(R,E){let k;return R?E===null||E===Di||E===zo?k=t.DEPTH24_STENCIL8:E===wi?k=t.DEPTH32F_STENCIL8:E===Vo&&(k=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Di||E===zo?k=t.DEPTH_COMPONENT24:E===wi?k=t.DEPTH_COMPONENT32F:E===Vo&&(k=t.DEPTH_COMPONENT16),k}function A(R,E){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==an?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function b(R){const E=R.target;E.removeEventListener("dispose",b),C(E),E.isVideoTexture&&d.delete(E),E.isHTMLTexture&&h.delete(E)}function _(R){const E=R.target;E.removeEventListener("dispose",_),N(E)}function C(R){const E=i.get(R);if(E.__webglInit===void 0)return;const k=R.source,W=p.get(k);if(W){const q=W[E.__cacheKey];q.usedTimes--,q.usedTimes===0&&P(R),Object.keys(W).length===0&&p.delete(k)}i.remove(R)}function P(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const k=R.source,W=p.get(k);delete W[E.__cacheKey],a.memory.textures--}function N(R){const E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(E.__webglFramebuffer[W]))for(let q=0;q<E.__webglFramebuffer[W].length;q++)t.deleteFramebuffer(E.__webglFramebuffer[W][q]);else t.deleteFramebuffer(E.__webglFramebuffer[W]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[W])}else{if(Array.isArray(E.__webglFramebuffer))for(let W=0;W<E.__webglFramebuffer.length;W++)t.deleteFramebuffer(E.__webglFramebuffer[W]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let W=0;W<E.__webglColorRenderbuffer.length;W++)E.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[W]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=R.textures;for(let W=0,q=k.length;W<q;W++){const le=i.get(k[W]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),a.memory.textures--),i.remove(k[W])}i.remove(R)}let F=0;function V(){F=0}function $(){return F}function O(R){F=R}function Y(){const R=F;return R>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),F+=1,R}function z(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function D(R,E){const k=i.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const W=R.image;if(W===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(k,R,E);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+E)}function j(R,E){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Ie(k,R,E);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+E)}function Q(R,E){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Ie(k,R,E);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+E)}function ne(R,E){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Oe(k,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+E)}const ae={[Lh]:t.REPEAT,[ji]:t.CLAMP_TO_EDGE,[Ih]:t.MIRRORED_REPEAT},He={[qt]:t.NEAREST,[QP]:t.NEAREST_MIPMAP_NEAREST,[wl]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[Ad]:t.LINEAR_MIPMAP_NEAREST,[rs]:t.LINEAR_MIPMAP_LINEAR},Qe={[t2]:t.NEVER,[a2]:t.ALWAYS,[n2]:t.LESS,[Ym]:t.LEQUAL,[i2]:t.EQUAL,[$m]:t.GEQUAL,[r2]:t.GREATER,[s2]:t.NOTEQUAL};function We(R,E){if(E.type===wi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===an||E.magFilter===Ad||E.magFilter===wl||E.magFilter===rs||E.minFilter===an||E.minFilter===Ad||E.minFilter===wl||E.minFilter===rs)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ae[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ae[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ae[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,He[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,He[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Qe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qt||E.minFilter!==wl&&E.minFilter!==rs||E.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Z(R,E){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",b));const W=E.source;let q=p.get(W);q===void 0&&(q={},p.set(W,q));const le=z(E);if(le!==R.__cacheKey){q[le]===void 0&&(q[le]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,k=!0),q[le].usedTimes++;const ue=q[R.__cacheKey];ue!==void 0&&(q[R.__cacheKey].usedTimes--,ue.usedTimes===0&&P(E)),R.__cacheKey=le,R.__webglTexture=q[le].texture}return k}function oe(R,E,k){return Math.floor(Math.floor(R/k)/E)}function re(R,E,k,W){const le=R.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,k,W,E.data);else{le.sort((be,pe)=>be.start-pe.start);let ue=0;for(let be=1;be<le.length;be++){const pe=le[ue],fe=le[be],Pe=pe.start+pe.count,Le=oe(fe.start,E.width,4),Be=oe(pe.start,E.width,4);fe.start<=Pe+1&&Le===Be&&oe(fe.start+fe.count-1,E.width,4)===Le?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++ue,le[ue]=fe)}le.length=ue+1;const K=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let be=0,pe=le.length;be<pe;be++){const fe=le[be],Pe=Math.floor(fe.start/4),Le=Math.ceil(fe.count/4),Be=Pe%E.width,L=Math.floor(Pe/E.width),ce=Le,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Be,L,ce,J,k,W,E.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,K),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function Ie(R,E,k){let W=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(W=t.TEXTURE_3D);const q=Z(R,E),le=E.source;n.bindTexture(W,R.__webglTexture,t.TEXTURE0+k);const ue=i.get(le);if(le.version!==ue.__version||q===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const J=Ke.getPrimaries(Ke.workingColorSpace),he=E.colorSpace===vr?null:Ke.getPrimaries(E.colorSpace),ve=E.colorSpace===vr||J===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let ee=g(E.image,!1,r.maxTextureSize);ee=xn(E,ee);const de=s.convert(E.format,E.colorSpace),be=s.convert(E.type);let pe=v(E.internalFormat,de,be,E.normalized,E.colorSpace,E.isVideoTexture);We(W,E);let fe;const Pe=E.mipmaps,Le=E.isVideoTexture!==!0,Be=ue.__version===void 0||q===!0,L=le.dataReady,ce=A(E,ee);if(E.isDepthTexture)pe=T(E.format===ss,E.type),Be&&(Le?n.texStorage2D(t.TEXTURE_2D,1,pe,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,pe,ee.width,ee.height,0,de,be,null));else if(E.isDataTexture)if(Pe.length>0){Le&&Be&&n.texStorage2D(t.TEXTURE_2D,ce,pe,Pe[0].width,Pe[0].height);for(let J=0,he=Pe.length;J<he;J++)fe=Pe[J],Le?L&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,de,be,fe.data):n.texImage2D(t.TEXTURE_2D,J,pe,fe.width,fe.height,0,de,be,fe.data);E.generateMipmaps=!1}else Le?(Be&&n.texStorage2D(t.TEXTURE_2D,ce,pe,ee.width,ee.height),L&&re(E,ee,de,be)):n.texImage2D(t.TEXTURE_2D,0,pe,ee.width,ee.height,0,de,be,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Le&&Be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,Pe[0].width,Pe[0].height,ee.depth);for(let J=0,he=Pe.length;J<he;J++)if(fe=Pe[J],E.format!==oi)if(de!==null)if(Le){if(L)if(E.layerUpdates.size>0){const ve=xv(fe.width,fe.height,E.format,E.type);for(const te of E.layerUpdates){const Te=fe.data.subarray(te*ve/fe.data.BYTES_PER_ELEMENT,(te+1)*ve/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,te,fe.width,fe.height,1,de,Te)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ee.depth,de,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,pe,fe.width,fe.height,ee.depth,0,fe.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ee.depth,de,be,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,pe,fe.width,fe.height,ee.depth,0,de,be,fe.data)}else{Le&&Be&&n.texStorage2D(t.TEXTURE_2D,ce,pe,Pe[0].width,Pe[0].height);for(let J=0,he=Pe.length;J<he;J++)fe=Pe[J],E.format!==oi?de!==null?Le?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,de,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,J,pe,fe.width,fe.height,0,fe.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?L&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,de,be,fe.data):n.texImage2D(t.TEXTURE_2D,J,pe,fe.width,fe.height,0,de,be,fe.data)}else if(E.isDataArrayTexture)if(Le){if(Be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,ee.width,ee.height,ee.depth),L)if(E.layerUpdates.size>0){const J=xv(ee.width,ee.height,E.format,E.type);for(const he of E.layerUpdates){const ve=ee.data.subarray(he*J/ee.data.BYTES_PER_ELEMENT,(he+1)*J/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,ee.width,ee.height,1,de,be,ve)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,de,be,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,ee.width,ee.height,ee.depth,0,de,be,ee.data);else if(E.isData3DTexture)Le?(Be&&n.texStorage3D(t.TEXTURE_3D,ce,pe,ee.width,ee.height,ee.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,de,be,ee.data)):n.texImage3D(t.TEXTURE_3D,0,pe,ee.width,ee.height,ee.depth,0,de,be,ee.data);else if(E.isFramebufferTexture){if(Be)if(Le)n.texStorage2D(t.TEXTURE_2D,ce,pe,ee.width,ee.height);else{let J=ee.width,he=ee.height;for(let ve=0;ve<ce;ve++)n.texImage2D(t.TEXTURE_2D,ve,pe,J,he,0,de,be,null),J>>=1,he>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),h.add(E),J.onpaint=he=>{const ve=he.changedElements;for(const te of h)ve.includes(te.image)&&(te.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const ve=t.RGBA,te=t.RGBA,Te=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ve,te,Te,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Le&&Be){const J=it(Pe[0]);n.texStorage2D(t.TEXTURE_2D,ce,pe,J.width,J.height)}for(let J=0,he=Pe.length;J<he;J++)fe=Pe[J],Le?L&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,de,be,fe):n.texImage2D(t.TEXTURE_2D,J,pe,de,be,fe);E.generateMipmaps=!1}else if(Le){if(Be){const J=it(ee);n.texStorage2D(t.TEXTURE_2D,ce,pe,J.width,J.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,be,ee)}else n.texImage2D(t.TEXTURE_2D,0,pe,de,be,ee);f(E)&&x(W),ue.__version=le.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Oe(R,E,k){if(E.image.length!==6)return;const W=Z(R,E),q=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const le=i.get(q);if(q.version!==le.__version||W===!0){n.activeTexture(t.TEXTURE0+k);const ue=Ke.getPrimaries(Ke.workingColorSpace),K=E.colorSpace===vr?null:Ke.getPrimaries(E.colorSpace),ee=E.colorSpace===vr||ue===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const de=E.isCompressedTexture||E.image[0].isCompressedTexture,be=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let te=0;te<6;te++)!de&&!be?pe[te]=g(E.image[te],!0,r.maxCubemapSize):pe[te]=be?E.image[te].image:E.image[te],pe[te]=xn(E,pe[te]);const fe=pe[0],Pe=s.convert(E.format,E.colorSpace),Le=s.convert(E.type),Be=v(E.internalFormat,Pe,Le,E.normalized,E.colorSpace),L=E.isVideoTexture!==!0,ce=le.__version===void 0||W===!0,J=q.dataReady;let he=A(E,fe);We(t.TEXTURE_CUBE_MAP,E);let ve;if(de){L&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Be,fe.width,fe.height);for(let te=0;te<6;te++){ve=pe[te].mipmaps;for(let Te=0;Te<ve.length;Te++){const Ee=ve[Te];E.format!==oi?Pe!==null?L?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,Ee.width,Ee.height,Pe,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,Be,Ee.width,Ee.height,0,Ee.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,Ee.width,Ee.height,Pe,Le,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,Be,Ee.width,Ee.height,0,Pe,Le,Ee.data)}}}else{if(ve=E.mipmaps,L&&ce){ve.length>0&&he++;const te=it(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Be,te.width,te.height)}for(let te=0;te<6;te++)if(be){L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,pe[te].width,pe[te].height,Pe,Le,pe[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,pe[te].width,pe[te].height,0,Pe,Le,pe[te].data);for(let Te=0;Te<ve.length;Te++){const Tt=ve[Te].image[te].image;L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,Tt.width,Tt.height,Pe,Le,Tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,Be,Tt.width,Tt.height,0,Pe,Le,Tt.data)}}else{L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Pe,Le,pe[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,Pe,Le,pe[te]);for(let Te=0;Te<ve.length;Te++){const Ee=ve[Te];L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,Pe,Le,Ee.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,Be,Pe,Le,Ee.image[te])}}}f(E)&&x(t.TEXTURE_CUBE_MAP),le.__version=q.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ne(R,E,k,W,q,le){const ue=s.convert(k.format,k.colorSpace),K=s.convert(k.type),ee=v(k.internalFormat,ue,K,k.normalized,k.colorSpace),de=i.get(E),be=i.get(k);if(be.__renderTarget=E,!de.__hasExternalTextures){const pe=Math.max(1,E.width>>le),fe=Math.max(1,E.height>>le);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?n.texImage3D(q,le,ee,pe,fe,E.depth,0,ue,K,null):n.texImage2D(q,le,ee,pe,fe,0,ue,K,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),pt(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,q,be.__webglTexture,0,xt(E)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,q,be.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(R,E,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const W=E.depthTexture,q=W&&W.isDepthTexture?W.type:null,le=T(E.stencilBuffer,q),ue=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;pt(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xt(E),le,E.width,E.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,xt(E),le,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,le,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,R)}else{const W=E.textures;for(let q=0;q<W.length;q++){const le=W[q],ue=s.convert(le.format,le.colorSpace),K=s.convert(le.type),ee=v(le.internalFormat,ue,K,le.normalized,le.colorSpace);pt(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xt(E),ee,E.width,E.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,xt(E),ee,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(R,E,k){const W=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=i.get(E.depthTexture);if(q.__renderTarget=E,(!q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W){if(q.__webglInit===void 0&&(q.__webglInit=!0,E.depthTexture.addEventListener("dispose",b)),q.__webglTexture===void 0){q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),We(t.TEXTURE_CUBE_MAP,E.depthTexture);const de=s.convert(E.depthTexture.format),be=s.convert(E.depthTexture.type);let pe;E.depthTexture.format===er?pe=t.DEPTH_COMPONENT24:E.depthTexture.format===ss&&(pe=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,pe,E.width,E.height,0,de,be,null)}}else D(E.depthTexture,0);const le=q.__webglTexture,ue=xt(E),K=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,ee=E.depthTexture.format===ss?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===er)pt(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,K,le,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ee,K,le,0);else if(E.depthTexture.format===ss)pt(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,K,le,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ee,K,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(R){const E=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),W){const q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,W.removeEventListener("dispose",q)};W.addEventListener("dispose",q),E.__depthDisposeCallback=q}E.__boundDepthTexture=W}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Ce(E.__webglFramebuffer[W],R,W);else{const W=R.texture.mipmaps;W&&W.length>0?Ce(E.__webglFramebuffer[0],R,0):Ce(E.__webglFramebuffer,R,0)}else if(k){E.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[W]),E.__webglDepthbuffer[W]===void 0)E.__webglDepthbuffer[W]=t.createRenderbuffer(),De(E.__webglDepthbuffer[W],R,!1);else{const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,le)}}else{const W=R.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),De(E.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(R,E,k){const W=i.get(R);E!==void 0&&Ne(W.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Xe(R)}function qe(R){const E=R.texture,k=i.get(R),W=i.get(E);R.addEventListener("dispose",_);const q=R.textures,le=R.isWebGLCubeRenderTarget===!0,ue=q.length>1;if(ue||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=E.version,a.memory.textures++),le){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let ee=0;ee<E.mipmaps.length;ee++)k.__webglFramebuffer[K][ee]=t.createFramebuffer()}else k.__webglFramebuffer[K]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<E.mipmaps.length;K++)k.__webglFramebuffer[K]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ue)for(let K=0,ee=q.length;K<ee;K++){const de=i.get(q[K]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&pt(R)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){const ee=q[K];k.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[K]);const de=s.convert(ee.format,ee.colorSpace),be=s.convert(ee.type),pe=v(ee.internalFormat,de,be,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),fe=xt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,k.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),De(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),We(t.TEXTURE_CUBE_MAP,E);for(let K=0;K<6;K++)if(E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)Ne(k.__webglFramebuffer[K][ee],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee);else Ne(k.__webglFramebuffer[K],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(E)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let K=0,ee=q.length;K<ee;K++){const de=q[K],be=i.get(de);let pe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,be.__webglTexture),We(pe,de),Ne(k.__webglFramebuffer,R,de,t.COLOR_ATTACHMENT0+K,pe,0),f(de)&&x(pe)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,W.__webglTexture),We(K,E),E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)Ne(k.__webglFramebuffer[ee],R,E,t.COLOR_ATTACHMENT0,K,ee);else Ne(k.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,K,0);f(E)&&x(K),n.unbindTexture()}R.depthBuffer&&Xe(R)}function wt(R){const E=R.textures;for(let k=0,W=E.length;k<W;k++){const q=E[k];if(f(q)){const le=y(R),ue=i.get(q).__webglTexture;n.bindTexture(le,ue),x(le),n.unbindTexture()}}}const Rt=[],Lt=[];function Ot(R){if(R.samples>0){if(pt(R)===!1){const E=R.textures,k=R.width,W=R.height;let q=t.COLOR_BUFFER_BIT;const le=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(R),K=E.length>1;if(K)for(let de=0;de<E.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const ee=R.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let de=0;de<E.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);const be=i.get(E[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,k,W,0,0,k,W,q,t.NEAREST),l===!0&&(Rt.length=0,Lt.length=0,Rt.push(t.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Rt.push(le),Lt.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Lt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Rt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let de=0;de<E.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);const be=i.get(E[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function xt(R){return Math.min(r.maxSamples,R.samples)}function pt(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function I(R){const E=a.render.frame;d.get(R)!==E&&(d.set(R,E),R.update())}function xn(R,E){const k=R.colorSpace,W=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==iu&&k!==vr&&(Ke.getTransfer(k)===rt?(W!==oi||q!==Pn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",k)),E}function it(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=V,this.getTextureUnits=$,this.setTextureUnits=O,this.setTexture2D=D,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=ne,this.rebindTextures=Ye,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function BI(t,e){function n(i,r=vr){let s;const a=Ke.getTransfer(r);if(i===Pn)return t.UNSIGNED_BYTE;if(i===Hm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Gm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ZM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===QM)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===qM)return t.BYTE;if(i===KM)return t.SHORT;if(i===Vo)return t.UNSIGNED_SHORT;if(i===zm)return t.INT;if(i===Di)return t.UNSIGNED_INT;if(i===wi)return t.FLOAT;if(i===Ji)return t.HALF_FLOAT;if(i===JM)return t.ALPHA;if(i===eE)return t.RGB;if(i===oi)return t.RGBA;if(i===er)return t.DEPTH_COMPONENT;if(i===ss)return t.DEPTH_STENCIL;if(i===tE)return t.RED;if(i===Wm)return t.RED_INTEGER;if(i===gs)return t.RG;if(i===jm)return t.RG_INTEGER;if(i===Xm)return t.RGBA_INTEGER;if(i===gc||i===xc||i===vc||i===_c)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===gc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===gc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uh||i===Fh||i===Oh||i===kh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Uh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bh||i===Vh||i===zh||i===Hh||i===Gh||i===tu||i===Wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bh||i===Vh)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hh)return s.COMPRESSED_R11_EAC;if(i===Gh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===tu)return s.COMPRESSED_RG11_EAC;if(i===Wh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jh||i===Xh||i===Yh||i===$h||i===qh||i===Kh||i===Zh||i===Qh||i===Jh||i===ep||i===tp||i===np||i===ip||i===rp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$h)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jh)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ep)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tp)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===np)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ip)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rp)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sp||i===ap||i===op)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===sp)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ap)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===op)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lp||i===cp||i===nu||i===up)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===lp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===up)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const VI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new dE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Li({vertexShader:VI,fragmentShader:zI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Dn(new Du(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GI extends _s{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,m=null;const M=typeof XRWebGLBinding<"u",g=new HI,f={},x=n.getContextAttributes();let y=null,v=null;const T=[],A=[],b=new Ze;let _=null;const C=new Rn;C.viewport=new yt;const P=new Rn;P.viewport=new yt;const N=[C,P],F=new Q2;let V=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=T[Z];return oe===void 0&&(oe=new Ud,T[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=T[Z];return oe===void 0&&(oe=new Ud,T[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=T[Z];return oe===void 0&&(oe=new Ud,T[Z]=oe),oe.getHandSpace()};function O(Z){const oe=A.indexOf(Z.inputSource);if(oe===-1)return;const re=T[oe];re!==void 0&&(re.update(Z.inputSource,Z.frame,c||a),re.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",z);for(let Z=0;Z<T.length;Z++){const oe=A[Z];oe!==null&&(A[Z]=null,T[Z].disconnect(oe))}V=null,$=null,g.reset();for(const Z in f)delete f[Z];e.setRenderTarget(y),p=null,u=null,h=null,r=null,v=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(b),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ie=null,Oe=null;x.depth&&(Oe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=x.stencil?ss:er,Ie=x.stencil?zo:Di);const Ne={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Ne),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Pi(u.textureWidth,u.textureHeight,{format:oi,type:Pn,depthTexture:new Ma(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const re={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Pi(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(Z){for(let oe=0;oe<Z.removed.length;oe++){const re=Z.removed[oe],Ie=A.indexOf(re);Ie>=0&&(A[Ie]=null,T[Ie].disconnect(re))}for(let oe=0;oe<Z.added.length;oe++){const re=Z.added[oe];let Ie=A.indexOf(re);if(Ie===-1){for(let Ne=0;Ne<T.length;Ne++)if(Ne>=A.length){A.push(re),Ie=Ne;break}else if(A[Ne]===null){A[Ne]=re,Ie=Ne;break}if(Ie===-1)break}const Oe=T[Ie];Oe&&Oe.connect(re)}}const D=new B,j=new B;function Q(Z,oe,re){D.setFromMatrixPosition(oe.matrixWorld),j.setFromMatrixPosition(re.matrixWorld);const Ie=D.distanceTo(j),Oe=oe.projectionMatrix.elements,Ne=re.projectionMatrix.elements,De=Oe[14]/(Oe[10]-1),Ce=Oe[14]/(Oe[10]+1),Xe=(Oe[9]+1)/Oe[5],Ye=(Oe[9]-1)/Oe[5],qe=(Oe[8]-1)/Oe[0],wt=(Ne[8]+1)/Ne[0],Rt=De*qe,Lt=De*wt,Ot=Ie/(-qe+wt),xt=Ot*-qe;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(xt),Z.translateZ(Ot),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Oe[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const pt=De+Ot,I=Ce+Ot,xn=Rt-xt,it=Lt+(Ie-xt),R=Xe*Ce/I*pt,E=Ye*Ce/I*pt;Z.projectionMatrix.makePerspective(xn,it,R,E,pt,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ne(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let oe=Z.near,re=Z.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(re=g.depthFar)),F.near=P.near=C.near=oe,F.far=P.far=C.far=re,(V!==F.near||$!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,$=F.far),F.layers.mask=Z.layers.mask|6,C.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;const Ie=Z.parent,Oe=F.cameras;ne(F,Ie);for(let Ne=0;Ne<Oe.length;Ne++)ne(Oe[Ne],Ie);Oe.length===2?Q(F,C,P):F.projectionMatrix.copy(C.projectionMatrix),ae(Z,F,Ie)};function ae(Z,oe,re){re===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(re.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Z){return f[Z]};let He=null;function Qe(Z,oe){if(d=oe.getViewerPose(c||a),m=oe,d!==null){const re=d.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Ie=!1;re.length!==F.cameras.length&&(F.cameras.length=0,Ie=!0);for(let Ce=0;Ce<re.length;Ce++){const Xe=re[Ce];let Ye=null;if(p!==null)Ye=p.getViewport(Xe);else{const wt=h.getViewSubImage(u,Xe);Ye=wt.viewport,Ce===0&&(e.setRenderTargetTextures(v,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(v))}let qe=N[Ce];qe===void 0&&(qe=new Rn,qe.layers.enable(Ce),qe.viewport=new yt,N[Ce]=qe),qe.matrix.fromArray(Xe.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Xe.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ce===0&&(F.matrix.copy(qe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ie===!0&&F.cameras.push(qe)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const Ce=h.getDepthInformation(re[0]);Ce&&Ce.isValid&&Ce.texture&&g.init(Ce,r.renderState)}if(Oe&&Oe.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let Ce=0;Ce<re.length;Ce++){const Xe=re[Ce].camera;if(Xe){let Ye=f[Xe];Ye||(Ye=new dE,f[Xe]=Ye);const qe=h.getCameraImage(Xe);Ye.sourceTexture=qe}}}}for(let re=0;re<T.length;re++){const Ie=A[re],Oe=T[re];Ie!==null&&Oe!==void 0&&Oe.update(Ie,oe,c||a)}He&&He(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),m=null}const We=new mE;We.setAnimationLoop(Qe),this.setAnimationLoop=function(Z){He=Z},this.dispose=function(){}}}const WI=new Mt,ME=new ke;ME.set(-1,0,0,0,1,0,0,0,1);function jI(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,fE(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,x,y,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),d(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,v)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),M(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,x,y):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===wn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===wn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=e.get(f),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(WI.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ME),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,x,y){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=y*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){const x=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XI(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){const A=T.program;i.uniformBlockBinding(v,A)}function c(v,T){let A=r[v.id];A===void 0&&(g(v),A=d(v),r[v.id]=A,v.addEventListener("dispose",x));const b=T.program;i.updateUBOMapping(v,b);const _=e.render.frame;s[v.id]!==_&&(u(v),s[v.id]=_)}function d(v){const T=h();v.__bindingPointIndex=T;const A=t.createBuffer(),b=v.__size,_=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,b,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,A),A}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const T=r[v.id],A=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let _=0,C=A.length;_<C;_++){const P=A[_];if(Array.isArray(P))for(let N=0,F=P.length;N<F;N++)p(P[N],_,N,b);else p(P,_,0,b)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,T,A,b){if(M(v,T,A,b)===!0){const _=v.__offset,C=v.value;if(Array.isArray(C)){let P=0;for(let N=0;N<C.length;N++){const F=C[N],V=f(F);m(F,v.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(C,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,v.__data)}}function m(v,T,A){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,A)}function M(v,T,A,b){const _=v.value,C=T+"_"+A;if(b[C]===void 0)return typeof _=="number"||typeof _=="boolean"?b[C]=_:ArrayBuffer.isView(_)?b[C]=_.slice():b[C]=_.clone(),!0;{const P=b[C];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return b[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function g(v){const T=v.uniforms;let A=0;const b=16;for(let C=0,P=T.length;C<P;C++){const N=Array.isArray(T[C])?T[C]:[T[C]];for(let F=0,V=N.length;F<V;F++){const $=N[F],O=Array.isArray($.value)?$.value:[$.value];for(let Y=0,z=O.length;Y<z;Y++){const D=O[Y],j=f(D),Q=A%b,ne=Q%j.boundary,ae=Q+ne;A+=ne,ae!==0&&b-ae<j.storage&&(A+=b-ae),$.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=A,A+=j.storage}}}const _=A%b;return _>0&&(A+=b-_),v.__size=A,v.__cache={},this}function f(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",v),T}function x(v){const T=v.target;T.removeEventListener("dispose",x);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function y(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:y}}const YI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vi=null;function $I(){return vi===null&&(vi=new N2(YI,16,16,gs,Ji),vi.name="DFG_LUT",vi.minFilter=an,vi.magFilter=an,vi.wrapS=ji,vi.wrapT=ji,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class qI{constructor(e={}){const{canvas:n=l2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Pn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const M=p,g=new Set([Xm,jm,Wm]),f=new Set([Pn,Di,Vo,zo,Hm,Gm]),x=new Uint32Array(4),y=new Int32Array(4),v=new B;let T=null,A=null;const b=[],_=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,F=null,V=null,$=null,O=null;this._outputColorSpace=zn;let Y=0,z=0,D=null,j=-1,Q=null;const ne=new yt,ae=new yt;let He=null;const Qe=new Fe(0);let We=0,Z=n.width,oe=n.height,re=1,Ie=null,Oe=null;const Ne=new yt(0,0,Z,oe),De=new yt(0,0,Z,oe);let Ce=!1;const Xe=new Km;let Ye=!1,qe=!1;const wt=new Mt,Rt=new B,Lt=new yt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function pt(){return D===null?re:1}let I=i;function xn(w,U){return n.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bm}`),n.addEventListener("webglcontextlost",Tt,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",hi,!1),I===null){const U="webgl2";if(I=xn(U,w),I===null)throw xn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw et("WebGLRenderer: "+w.message),w}let it,R,E,k,W,q,le,ue,K,ee,de,be,pe,fe,Pe,Le,Be,L,ce,J,he,ve,te;function Te(){it=new $D(I),it.init(),he=new BI(I,it),R=new VD(I,it,e,he),E=new OI(I,it),R.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),V=I.createFramebuffer(),$=I.createFramebuffer(),O=I.createFramebuffer(),k=new ZD(I),W=new EI,q=new kI(I,it,E,W,R,he,k),le=new YD(P),ue=new t3(I),ve=new kD(I,ue),K=new qD(I,ue,k,ve),ee=new JD(I,K,ue,ve,k),L=new QD(I,R,q),Pe=new zD(W),de=new MI(P,le,it,R,ve,Pe),be=new jI(P,W),pe=new TI,fe=new NI(it),Be=new OD(P,le,E,ee,m,l),Le=new FI(P,ee,R),te=new XI(I,k,R,E),ce=new BD(I,it,k),J=new KD(I,it,k),k.programs=de.programs,P.capabilities=R,P.extensions=it,P.properties=W,P.renderLists=pe,P.shadowMap=Le,P.state=E,P.info=k}Te(),M!==Pn&&(C=new tL(M,n.width,n.height,o,r,s));const Ee=new GI(P,I);this.xr=Ee,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=it.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=it.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(w){w!==void 0&&(re=w,this.setSize(Z,oe,!1))},this.getSize=function(w){return w.set(Z,oe)},this.setSize=function(w,U,X=!0){if(Ee.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,oe=U,n.width=Math.floor(w*re),n.height=Math.floor(U*re),X===!0&&(n.style.width=w+"px",n.style.height=U+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(Z*re,oe*re).floor()},this.setDrawingBufferSize=function(w,U,X){Z=w,oe=U,re=X,n.width=Math.floor(w*X),n.height=Math.floor(U*X),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(M===Pn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ne)},this.getViewport=function(w){return w.copy(Ne)},this.setViewport=function(w,U,X,H){w.isVector4?Ne.set(w.x,w.y,w.z,w.w):Ne.set(w,U,X,H),E.viewport(ne.copy(Ne).multiplyScalar(re).round())},this.getScissor=function(w){return w.copy(De)},this.setScissor=function(w,U,X,H){w.isVector4?De.set(w.x,w.y,w.z,w.w):De.set(w,U,X,H),E.scissor(ae.copy(De).multiplyScalar(re).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(w){E.setScissorTest(Ce=w)},this.setOpaqueSort=function(w){Ie=w},this.setTransparentSort=function(w){Oe=w},this.getClearColor=function(w){return w.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,X=!0){let H=0;if(w){let G=!1;if(D!==null){const xe=D.texture.format;G=g.has(xe)}if(G){const xe=D.texture.type,ye=f.has(xe),ge=Be.getClearColor(),we=Be.getClearAlpha(),Ae=ge.r,Ve=ge.g,Ge=ge.b;ye?(x[0]=Ae,x[1]=Ve,x[2]=Ge,x[3]=we,I.clearBufferuiv(I.COLOR,0,x)):(y[0]=Ae,y[1]=Ve,y[2]=Ge,y[3]=we,I.clearBufferiv(I.COLOR,0,y))}else H|=I.COLOR_BUFFER_BIT}U&&(H|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),F=w},this.dispose=function(){n.removeEventListener("webglcontextlost",Tt,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",hi,!1),Be.dispose(),pe.dispose(),fe.dispose(),W.dispose(),le.dispose(),ee.dispose(),ve.dispose(),te.dispose(),de.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",sg),Ee.removeEventListener("sessionend",ag),zr.stop()};function Tt(w){w.preventDefault(),Yx("WebGLRenderer: Context Lost."),N=!0}function dt(){Yx("WebGLRenderer: Context Restored."),N=!1;const w=k.autoReset,U=Le.enabled,X=Le.autoUpdate,H=Le.needsUpdate,G=Le.type;Te(),k.autoReset=w,Le.enabled=U,Le.autoUpdate=X,Le.needsUpdate=H,Le.type=G}function hi(w){et("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pi(w){const U=w.target;U.removeEventListener("dispose",pi),EE(U)}function EE(w){wE(w),W.remove(w)}function wE(w){const U=W.get(w).programs;U!==void 0&&(U.forEach(function(X){de.releaseProgram(X)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,X,H,G,xe){U===null&&(U=Ot);const ye=G.isMesh&&G.matrixWorld.determinantAffine()<0,ge=AE(w,U,X,H,G);E.setMaterial(H,ye);let we=X.index,Ae=1;if(H.wireframe===!0){if(we=K.getWireframeAttribute(X),we===void 0)return;Ae=2}const Ve=X.drawRange,Ge=X.attributes.position;let Re=Ve.start*Ae,at=(Ve.start+Ve.count)*Ae;xe!==null&&(Re=Math.max(Re,xe.start*Ae),at=Math.min(at,(xe.start+xe.count)*Ae)),we!==null?(Re=Math.max(Re,0),at=Math.min(at,we.count)):Ge!=null&&(Re=Math.max(Re,0),at=Math.min(at,Ge.count));const Pt=at-Re;if(Pt<0||Pt===1/0)return;ve.setup(G,H,ge,X,we);let bt,ot=ce;if(we!==null&&(bt=ue.get(we),ot=J,ot.setIndex(bt)),G.isMesh)H.wireframe===!0?(E.setLineWidth(H.wireframeLinewidth*pt()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(G.isLine){let Jt=H.linewidth;Jt===void 0&&(Jt=1),E.setLineWidth(Jt*pt()),G.isLineSegments?ot.setMode(I.LINES):G.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else G.isPoints?ot.setMode(I.POINTS):G.isSprite&&ot.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(it.get("WEBGL_multi_draw"))ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Jt=G._multiDrawStarts,_e=G._multiDrawCounts,Tn=G._multiDrawCount,Je=we?ue.get(we).bytesPerElement:1,Bn=W.get(H).currentProgram.getUniforms();for(let mi=0;mi<Tn;mi++)Bn.setValue(I,"_gl_DrawID",mi),ot.render(Jt[mi]/Je,_e[mi])}else if(G.isInstancedMesh)ot.renderInstances(Re,Pt,G.count);else if(X.isInstancedBufferGeometry){const Jt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_e=Math.min(X.instanceCount,Jt);ot.renderInstances(Re,Pt,_e)}else ot.render(Re,Pt)};function rg(w,U,X){w.transparent===!0&&w.side===Hi&&w.forceSinglePass===!1?(w.side=wn,w.needsUpdate=!0,nl(w,U,X),w.side=Ur,w.needsUpdate=!0,nl(w,U,X),w.side=Hi):nl(w,U,X)}this.compile=function(w,U,X=null){X===null&&(X=w),A=fe.get(X),A.init(U),_.push(A),X.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),w!==X&&w.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();const H=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const xe=G.material;if(xe)if(Array.isArray(xe))for(let ye=0;ye<xe.length;ye++){const ge=xe[ye];rg(ge,X,G),H.add(ge)}else rg(xe,X,G),H.add(xe)}),A=_.pop(),H},this.compileAsync=function(w,U,X=null){const H=this.compile(w,U,X);return new Promise(G=>{function xe(){if(H.forEach(function(ye){W.get(ye).currentProgram.isReady()&&H.delete(ye)}),H.size===0){G(w);return}setTimeout(xe,10)}it.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Uu=null;function TE(w){Uu&&Uu(w)}function sg(){zr.stop()}function ag(){zr.start()}const zr=new mE;zr.setAnimationLoop(TE),typeof self<"u"&&zr.setContext(self),this.setAnimationLoop=function(w){Uu=w,Ee.setAnimationLoop(w),w===null?zr.stop():zr.start()},Ee.addEventListener("sessionstart",sg),Ee.addEventListener("sessionend",ag),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(w,U);const X=Ee.enabled===!0&&Ee.isPresenting===!0,H=C!==null&&(D===null||X)&&C.begin(P,D);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(U),U=Ee.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,U,D),A=fe.get(w,_.length),A.init(U),A.state.textureUnits=q.getTextureUnits(),_.push(A),wt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Xe.setFromProjectionMatrix(wt,Ti,U.reversedDepth),qe=this.localClippingEnabled,Ye=Pe.init(this.clippingPlanes,qe),T=pe.get(w,b.length),T.init(),b.push(T),Ee.enabled===!0&&Ee.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&Fu(ye,U,-1/0,P.sortObjects)}Fu(w,U,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(Ie,Oe,U.reversedDepth),xt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,xt&&Be.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Pe.beginShadows();const G=A.state.shadowsArray;if(Le.render(G,w,U),Ye===!0&&Pe.endShadows(),(H&&C.hasRenderPass())===!1){const ye=T.opaque,ge=T.transmissive;if(A.setupLights(),U.isArrayCamera){const we=U.cameras;if(ge.length>0)for(let Ae=0,Ve=we.length;Ae<Ve;Ae++){const Ge=we[Ae];lg(ye,ge,w,Ge)}xt&&Be.render(w);for(let Ae=0,Ve=we.length;Ae<Ve;Ae++){const Ge=we[Ae];og(T,w,Ge,Ge.viewport)}}else ge.length>0&&lg(ye,ge,w,U),xt&&Be.render(w),og(T,w,U)}D!==null&&z===0&&(q.updateMultisampleRenderTarget(D),q.updateRenderTargetMipmap(D)),H&&C.end(P),w.isScene===!0&&w.onAfterRender(P,w,U),ve.resetDefaultState(),j=-1,Q=null,_.pop(),_.length>0?(A=_[_.length-1],q.setTextureUnits(A.state.textureUnits),Ye===!0&&Pe.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,b.pop(),b.length>0?T=b[b.length-1]:T=null,F!==null&&F.renderEnd()};function Fu(w,U,X,H){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLightProbeGrid)A.pushLightProbeGrid(w);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Xe.intersectsSprite(w)){H&&Lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(wt);const ye=ee.update(w),ge=w.material;ge.visible&&T.push(w,ye,ge,X,Lt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Xe.intersectsObject(w))){const ye=ee.update(w),ge=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Lt.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Lt.copy(ye.boundingSphere.center)),Lt.applyMatrix4(w.matrixWorld).applyMatrix4(wt)),Array.isArray(ge)){const we=ye.groups;for(let Ae=0,Ve=we.length;Ae<Ve;Ae++){const Ge=we[Ae],Re=ge[Ge.materialIndex];Re&&Re.visible&&T.push(w,ye,Re,X,Lt.z,Ge)}}else ge.visible&&T.push(w,ye,ge,X,Lt.z,null)}}const xe=w.children;for(let ye=0,ge=xe.length;ye<ge;ye++)Fu(xe[ye],U,X,H)}function og(w,U,X,H){const{opaque:G,transmissive:xe,transparent:ye}=w;A.setupLightsView(X),Ye===!0&&Pe.setGlobalState(P.clippingPlanes,X),H&&E.viewport(ne.copy(H)),G.length>0&&tl(G,U,X),xe.length>0&&tl(xe,U,X),ye.length>0&&tl(ye,U,X),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function lg(w,U,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Re=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new Pi(1,1,{generateMipmaps:!0,type:Re?Ji:Pn,minFilter:rs,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const xe=A.state.transmissionRenderTarget[H.id],ye=H.viewport||ne;xe.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);const ge=P.getRenderTarget(),we=P.getActiveCubeFace(),Ae=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(Qe),We=P.getClearAlpha(),We<1&&P.setClearColor(16777215,.5),P.clear(),xt&&Be.render(X);const Ve=P.toneMapping;P.toneMapping=Ri;const Ge=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),Ye===!0&&Pe.setGlobalState(P.clippingPlanes,H),tl(w,X,H),q.updateMultisampleRenderTarget(xe),q.updateRenderTargetMipmap(xe),it.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let at=0,Pt=U.length;at<Pt;at++){const bt=U[at],{object:ot,geometry:Jt,material:_e,group:Tn}=bt;if(_e.side===Hi&&ot.layers.test(H.layers)){const Je=_e.side;_e.side=wn,_e.needsUpdate=!0,cg(ot,X,H,Jt,_e,Tn),_e.side=Je,_e.needsUpdate=!0,Re=!0}}Re===!0&&(q.updateMultisampleRenderTarget(xe),q.updateRenderTargetMipmap(xe))}P.setRenderTarget(ge,we,Ae),P.setClearColor(Qe,We),Ge!==void 0&&(H.viewport=Ge),P.toneMapping=Ve}function tl(w,U,X){const H=U.isScene===!0?U.overrideMaterial:null;for(let G=0,xe=w.length;G<xe;G++){const ye=w[G],{object:ge,geometry:we,group:Ae}=ye;let Ve=ye.material;Ve.allowOverride===!0&&H!==null&&(Ve=H),ge.layers.test(X.layers)&&cg(ge,U,X,we,Ve,Ae)}}function cg(w,U,X,H,G,xe){w.onBeforeRender(P,U,X,H,G,xe),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(P,U,X,H,w,xe),G.transparent===!0&&G.side===Hi&&G.forceSinglePass===!1?(G.side=wn,G.needsUpdate=!0,P.renderBufferDirect(X,U,H,G,w,xe),G.side=Ur,G.needsUpdate=!0,P.renderBufferDirect(X,U,H,G,w,xe),G.side=Hi):P.renderBufferDirect(X,U,H,G,w,xe),w.onAfterRender(P,U,X,H,G,xe)}function nl(w,U,X){U.isScene!==!0&&(U=Ot);const H=W.get(w),G=A.state.lights,xe=A.state.shadowsArray,ye=G.state.version,ge=de.getParameters(w,G.state,xe,U,X,A.state.lightProbeGridArray),we=de.getProgramCacheKey(ge);let Ae=H.programs;H.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;const Ve=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;H.envMap=le.get(w.envMap||H.environment,Ve),H.envMapRotation=H.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ae===void 0&&(w.addEventListener("dispose",pi),Ae=new Map,H.programs=Ae);let Ge=Ae.get(we);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===ye)return dg(w,ge),Ge}else ge.uniforms=de.getUniforms(w),F!==null&&w.isNodeMaterial&&F.build(w,X,ge),w.onBeforeCompile(ge,P),Ge=de.acquireProgram(ge,we),Ae.set(we,Ge),H.uniforms=ge.uniforms;const Re=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=Pe.uniform),dg(w,ge),H.needsLights=RE(w),H.lightsStateVersion=ye,H.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=A.state.lightProbeGridArray.length>0,H.currentProgram=Ge,H.uniformsList=null,Ge}function ug(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=yc.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function dg(w,U){const X=W.get(w);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function bE(w,U){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let X=0,H=w.length;X<H;X++){const G=w[X];if(G.texture!==null&&G.boundingBox.containsPoint(v))return G}return null}function AE(w,U,X,H,G){U.isScene!==!0&&(U=Ot),q.resetTextureUnits();const xe=U.fog,ye=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,ge=D===null?P.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ke.workingColorSpace,we=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ae=le.get(H.envMap||ye,we),Ve=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,Pt=!!X.morphAttributes.color;let bt=Ri;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(bt=P.toneMapping);const ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Jt=ot!==void 0?ot.length:0,_e=W.get(H),Tn=A.state.lights;if(Ye===!0&&(qe===!0||w!==Q)){const ft=w===Q&&H.id===j;Pe.setState(H,w,ft)}let Je=!1;H.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Tn.state.version||_e.outputColorSpace!==ge||G.isBatchedMesh&&_e.batching===!1||!G.isBatchedMesh&&_e.batching===!0||G.isBatchedMesh&&_e.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&_e.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&_e.instancing===!1||!G.isInstancedMesh&&_e.instancing===!0||G.isSkinnedMesh&&_e.skinning===!1||!G.isSkinnedMesh&&_e.skinning===!0||G.isInstancedMesh&&_e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_e.instancingMorph===!1&&G.morphTexture!==null||_e.envMap!==Ae||H.fog===!0&&_e.fog!==xe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Pe.numPlanes||_e.numIntersection!==Pe.numIntersection)||_e.vertexAlphas!==Ve||_e.vertexTangents!==Ge||_e.morphTargets!==Re||_e.morphNormals!==at||_e.morphColors!==Pt||_e.toneMapping!==bt||_e.morphTargetsCount!==Jt||!!_e.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,_e.__version=H.version);let Bn=_e.currentProgram;Je===!0&&(Bn=nl(H,U,G),F&&H.isNodeMaterial&&F.onUpdateProgram(H,Bn,_e));let mi=!1,ir=!1,ys=!1;const lt=Bn.getUniforms(),Nt=_e.uniforms;if(E.useProgram(Bn.program)&&(mi=!0,ir=!0,ys=!0),H.id!==j&&(j=H.id,ir=!0),_e.needsLights){const ft=bE(A.state.lightProbeGridArray,G);_e.lightProbeGrid!==ft&&(_e.lightProbeGrid=ft,ir=!0)}if(mi||Q!==w){E.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),lt.setValue(I,"projectionMatrix",w.projectionMatrix),lt.setValue(I,"viewMatrix",w.matrixWorldInverse);const sr=lt.map.cameraPosition;sr!==void 0&&sr.setValue(I,Rt.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&lt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&lt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,ir=!0,ys=!0)}if(_e.needsLights&&(Tn.state.directionalShadowMap.length>0&&lt.setValue(I,"directionalShadowMap",Tn.state.directionalShadowMap,q),Tn.state.spotShadowMap.length>0&&lt.setValue(I,"spotShadowMap",Tn.state.spotShadowMap,q),Tn.state.pointShadowMap.length>0&&lt.setValue(I,"pointShadowMap",Tn.state.pointShadowMap,q)),G.isSkinnedMesh){lt.setOptional(I,G,"bindMatrix"),lt.setOptional(I,G,"bindMatrixInverse");const ft=G.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),lt.setValue(I,"boneTexture",ft.boneTexture,q))}G.isBatchedMesh&&(lt.setOptional(I,G,"batchingTexture"),lt.setValue(I,"batchingTexture",G._matricesTexture,q),lt.setOptional(I,G,"batchingIdTexture"),lt.setValue(I,"batchingIdTexture",G._indirectTexture,q),lt.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&lt.setValue(I,"batchingColorTexture",G._colorsTexture,q));const rr=X.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&L.update(G,X,Bn),(ir||_e.receiveShadow!==G.receiveShadow)&&(_e.receiveShadow=G.receiveShadow,lt.setValue(I,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(Nt.envMapIntensity.value=U.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=$I()),ir){if(lt.setValue(I,"toneMappingExposure",P.toneMappingExposure),_e.needsLights&&CE(Nt,ys),xe&&H.fog===!0&&be.refreshFogUniforms(Nt,xe),be.refreshMaterialUniforms(Nt,H,re,oe,A.state.transmissionRenderTarget[w.id]),_e.needsLights&&_e.lightProbeGrid){const ft=_e.lightProbeGrid;Nt.probesSH.value=ft.texture,Nt.probesMin.value.copy(ft.boundingBox.min),Nt.probesMax.value.copy(ft.boundingBox.max),Nt.probesResolution.value.copy(ft.resolution)}yc.upload(I,ug(_e),Nt,q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(yc.upload(I,ug(_e),Nt,q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&lt.setValue(I,"center",G.center),lt.setValue(I,"modelViewMatrix",G.modelViewMatrix),lt.setValue(I,"normalMatrix",G.normalMatrix),lt.setValue(I,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const ft=H.uniformsGroups;for(let sr=0,Ss=ft.length;sr<Ss;sr++){const fg=ft[sr];te.update(fg,Bn),te.bind(fg,Bn)}}return Bn}function CE(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function RE(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,U,X){const H=W.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(w.texture).__webglTexture=U,W.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const X=W.get(w);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,X=0){D=w,Y=U,z=X;let H=null,G=!1,xe=!1;if(w){const ge=W.get(w);if(ge.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(I.FRAMEBUFFER,ge.__webglFramebuffer),ne.copy(w.viewport),ae.copy(w.scissor),He=w.scissorTest,E.viewport(ne),E.scissor(ae),E.setScissorTest(He),j=-1;return}else if(ge.__webglFramebuffer===void 0)q.setupRenderTarget(w);else if(ge.__hasExternalTextures)q.rebindTextures(w,W.get(w.texture).__webglTexture,W.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ve=w.depthTexture;if(ge.__boundDepthTexture!==Ve){if(Ve!==null&&W.has(Ve)&&(w.width!==Ve.image.width||w.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(w)}}const we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);const Ae=W.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?H=Ae[U][X]:H=Ae[U],G=!0):w.samples>0&&q.useMultisampledRTT(w)===!1?H=W.get(w).__webglMultisampledFramebuffer:Array.isArray(Ae)?H=Ae[X]:H=Ae,ne.copy(w.viewport),ae.copy(w.scissor),He=w.scissorTest}else ne.copy(Ne).multiplyScalar(re).floor(),ae.copy(De).multiplyScalar(re).floor(),He=Ce;if(X!==0&&(H=V),E.bindFramebuffer(I.FRAMEBUFFER,H)&&E.drawBuffers(w,H),E.viewport(ne),E.scissor(ae),E.setScissorTest(He),G){const ge=W.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,X)}else if(xe){const ge=U;for(let we=0;we<w.textures.length;we++){const Ae=W.get(w.textures[we]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+we,Ae.__webglTexture,X,ge)}}else if(w!==null&&X!==0){const ge=W.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,X)}j=-1},this.readRenderTargetPixels=function(w,U,X,H,G,xe,ye,ge=0){if(!(w&&w.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){E.bindFramebuffer(I.FRAMEBUFFER,we);try{const Ae=w.textures[ge],Ve=Ae.format,Ge=Ae.type;if(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!R.textureFormatReadable(Ve)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Ge)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-H&&X>=0&&X<=w.height-G&&I.readPixels(U,X,H,G,he.convert(Ve),he.convert(Ge),xe)}finally{const Ae=D!==null?W.get(D).__webglFramebuffer:null;E.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,U,X,H,G,xe,ye,ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we)if(U>=0&&U<=w.width-H&&X>=0&&X<=w.height-G){E.bindFramebuffer(I.FRAMEBUFFER,we);const Ae=w.textures[ge],Ve=Ae.format,Ge=Ae.type;if(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!R.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,xe.byteLength,I.STREAM_READ),I.readPixels(U,X,H,G,he.convert(Ve),he.convert(Ge),0);const at=D!==null?W.get(D).__webglFramebuffer:null;E.bindFramebuffer(I.FRAMEBUFFER,at);const Pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await c2(I,Pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xe),I.deleteBuffer(Re),I.deleteSync(Pt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,X=0){const H=Math.pow(2,-X),G=Math.floor(w.image.width*H),xe=Math.floor(w.image.height*H),ye=U!==null?U.x:0,ge=U!==null?U.y:0;q.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,ye,ge,G,xe),E.unbindTexture()},this.copyTextureToTexture=function(w,U,X=null,H=null,G=0,xe=0){let ye,ge,we,Ae,Ve,Ge,Re,at,Pt;const bt=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(X!==null)ye=X.max.x-X.min.x,ge=X.max.y-X.min.y,we=X.isBox3?X.max.z-X.min.z:1,Ae=X.min.x,Ve=X.min.y,Ge=X.isBox3?X.min.z:0;else{const Nt=Math.pow(2,-G);ye=Math.floor(bt.width*Nt),ge=Math.floor(bt.height*Nt),w.isDataArrayTexture?we=bt.depth:w.isData3DTexture?we=Math.floor(bt.depth*Nt):we=1,Ae=0,Ve=0,Ge=0}H!==null?(Re=H.x,at=H.y,Pt=H.z):(Re=0,at=0,Pt=0);const ot=he.convert(U.format),Jt=he.convert(U.type);let _e;U.isData3DTexture?(q.setTexture3D(U,0),_e=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(q.setTexture2DArray(U,0),_e=I.TEXTURE_2D_ARRAY):(q.setTexture2D(U,0),_e=I.TEXTURE_2D),E.activeTexture(I.TEXTURE0),E.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),E.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),E.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Tn=E.getParameter(I.UNPACK_ROW_LENGTH),Je=E.getParameter(I.UNPACK_IMAGE_HEIGHT),Bn=E.getParameter(I.UNPACK_SKIP_PIXELS),mi=E.getParameter(I.UNPACK_SKIP_ROWS),ir=E.getParameter(I.UNPACK_SKIP_IMAGES);E.pixelStorei(I.UNPACK_ROW_LENGTH,bt.width),E.pixelStorei(I.UNPACK_IMAGE_HEIGHT,bt.height),E.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),E.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),E.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge);const ys=w.isDataArrayTexture||w.isData3DTexture,lt=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const Nt=W.get(w),rr=W.get(U),ft=W.get(Nt.__renderTarget),sr=W.get(rr.__renderTarget);E.bindFramebuffer(I.READ_FRAMEBUFFER,ft.__webglFramebuffer),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,sr.__webglFramebuffer);for(let Ss=0;Ss<we;Ss++)ys&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(w).__webglTexture,G,Ge+Ss),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(U).__webglTexture,xe,Pt+Ss)),I.blitFramebuffer(Ae,Ve,ye,ge,Re,at,ye,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);E.bindFramebuffer(I.READ_FRAMEBUFFER,null),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||W.has(w)){const Nt=W.get(w),rr=W.get(U);E.bindFramebuffer(I.READ_FRAMEBUFFER,$),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,O);for(let ft=0;ft<we;ft++)ys?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Nt.__webglTexture,G,Ge+ft):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Nt.__webglTexture,G),lt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,rr.__webglTexture,xe,Pt+ft):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,rr.__webglTexture,xe),G!==0?I.blitFramebuffer(Ae,Ve,ye,ge,Re,at,ye,ge,I.COLOR_BUFFER_BIT,I.NEAREST):lt?I.copyTexSubImage3D(_e,xe,Re,at,Pt+ft,Ae,Ve,ye,ge):I.copyTexSubImage2D(_e,xe,Re,at,Ae,Ve,ye,ge);E.bindFramebuffer(I.READ_FRAMEBUFFER,null),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else lt?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(_e,xe,Re,at,Pt,ye,ge,we,ot,Jt,bt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(_e,xe,Re,at,Pt,ye,ge,we,ot,bt.data):I.texSubImage3D(_e,xe,Re,at,Pt,ye,ge,we,ot,Jt,bt):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xe,Re,at,ye,ge,ot,Jt,bt.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xe,Re,at,bt.width,bt.height,ot,bt.data):I.texSubImage2D(I.TEXTURE_2D,xe,Re,at,ye,ge,ot,Jt,bt);E.pixelStorei(I.UNPACK_ROW_LENGTH,Tn),E.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Je),E.pixelStorei(I.UNPACK_SKIP_PIXELS,Bn),E.pixelStorei(I.UNPACK_SKIP_ROWS,mi),E.pixelStorei(I.UNPACK_SKIP_IMAGES,ir),xe===0&&U.generateMipmaps&&I.generateMipmap(_e),E.unbindTexture()},this.initRenderTarget=function(w){W.get(w).__webglFramebuffer===void 0&&q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?q.setTextureCube(w,0):w.isData3DTexture?q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?q.setTexture2DArray(w,0):q.setTexture2D(w,0),E.unbindTexture()},this.resetState=function(){Y=0,z=0,D=null,E.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}const KI=({className:t="",interactive:e=!0})=>{const n=ie.useRef(null),i=ie.useRef({x:0,y:0,targetX:0,targetY:0,isHovered:!1});return ie.useEffect(()=>{const r=n.current;if(!r)return;const s=new T2,a=r.clientWidth||500,o=r.clientHeight||500,l=new Rn(45,a/o,.1,1e3);l.position.z=6;const c=new qI({alpha:!0,antialias:!0,powerPreference:"high-performance"});c.setSize(a,o),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.toneMapping=Vm,c.toneMappingExposure=1.25,r.innerHTML="",r.appendChild(c.domElement);const d=new no;s.add(d);const h=4500,u=new kn,p=new Float32Array(h*3),m=new Float32Array(h*3),M=new Float32Array(h),g=[new Fe("#3a86ff"),new Fe("#8338ec"),new Fe("#ff007f"),new Fe("#00f5d4"),new Fe("#ffbe0b")],f=3,x=1.35;for(let De=0;De<h;De++){const Ce=Math.pow(Math.random(),2.2)*x,Xe=Ce*5,Ye=De%f*2*Math.PI/f,qe=(Math.random()-.5)*.3*(1-Ce/x),wt=(Math.random()-.5)*.3*(1-Ce/x),Rt=(Math.random()-.5)*.3*(1-Ce/x),Lt=Math.cos(Ye+Xe)*Ce+qe,Ot=Math.sin(Ye+Xe)*Ce+wt,xt=(Math.random()-.5)*.6*(1-Ce/x)+Rt;p[De*3]=Lt,p[De*3+1]=Ot,p[De*3+2]=xt;const pt=g[Math.floor(Math.random()*g.length)].clone();Ce<.3&&pt.lerp(new Fe("#ffffff"),.7),m[De*3]=pt.r,m[De*3+1]=pt.g,m[De*3+2]=pt.b,M[De]=Math.random()*.04+.015}u.setAttribute("position",new $n(p,3)),u.setAttribute("color",new $n(m,3));const y=document.createElement("canvas");y.width=64,y.height=64;const v=y.getContext("2d");if(v){const De=v.createRadialGradient(32,32,0,32,32,32);De.addColorStop(0,"rgba(255,255,255,1)"),De.addColorStop(.3,"rgba(255,255,255,0.8)"),De.addColorStop(.6,"rgba(255,255,255,0.2)"),De.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=De,v.fillRect(0,0,64,64)}const T=new F2(y),A=new cE({size:.045,map:T,transparent:!0,vertexColors:!0,blending:Js,depthWrite:!1}),b=new U2(u,A);d.add(b);const _=new au(.35,32,32),C=new vo({color:new Fe("#e0aaff"),transparent:!0,opacity:.85,blending:Js}),P=new Dn(_,C);d.add(P);const N=new ou(1.48,.012,16,100),F=new vo({color:new Fe("#00f0ff"),transparent:!0,opacity:.6,blending:Js}),V=new Dn(N,F);V.rotation.x=Math.PI/3,V.rotation.y=Math.PI/6,d.add(V);const $=new ou(1.52,.008,16,100),O=new vo({color:new Fe("#ff007f"),transparent:!0,opacity:.45,blending:Js}),Y=new Dn($,O);Y.rotation.x=-Math.PI/4,Y.rotation.y=-Math.PI/5,d.add(Y);const z=new au(1.45,64,64),D=new W2({roughness:.08,metalness:.1,transmission:.92,ior:1.45,reflectivity:.9,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,color:new Fe("#7b2cbf"),emissive:new Fe("#3a0ca3"),emissiveIntensity:.15,depthWrite:!1}),j=new Dn(z,D);d.add(j);const Q=new K2(16777215,.8);s.add(Q);const ne=new mv(61695,3,10);ne.position.set(3,3,4),s.add(ne);const ae=new mv(16711807,3,10);ae.position.set(-3,-3,-2),s.add(ae);const He=new q2(16777215,2);He.position.set(0,5,2),s.add(He);let Qe,We=new J2;const Z=De=>{if(!e)return;const Ce=r.getBoundingClientRect(),Xe=(De.clientX-Ce.left)/Ce.width*2-1,Ye=-((De.clientY-Ce.top)/Ce.height*2-1);i.current.targetX=Xe*.8,i.current.targetY=Ye*.8},oe=()=>{i.current.isHovered=!0},re=()=>{i.current.isHovered=!1,i.current.targetX=0,i.current.targetY=0};e&&(r.addEventListener("mousemove",Z),r.addEventListener("mouseenter",oe),r.addEventListener("mouseleave",re));const Ie=()=>{Qe=requestAnimationFrame(Ie);const De=We.getElapsedTime();i.current.x+=(i.current.targetX-i.current.x)*.05,i.current.y+=(i.current.targetY-i.current.y)*.05;const Ce=i.current.isHovered?1.8:1;b.rotation.z=De*.15*Ce,b.rotation.y=De*.08*Ce,V.rotation.z=De*.25,Y.rotation.z=-De*.3;const Xe=1+Math.sin(De*2.5)*.08;P.scale.set(Xe,Xe,Xe),d.position.y=Math.sin(De*1.2)*.1,d.rotation.y=i.current.x*.6,d.rotation.x=-i.current.y*.6,c.render(s,l)};Ie();const Oe=()=>{if(!r)return;const De=r.clientWidth||500,Ce=r.clientHeight||500;l.aspect=De/Ce,l.updateProjectionMatrix(),c.setSize(De,Ce)},Ne=new ResizeObserver(()=>Oe());return Ne.observe(r),()=>{cancelAnimationFrame(Qe),e&&(r.removeEventListener("mousemove",Z),r.removeEventListener("mouseenter",oe),r.removeEventListener("mouseleave",re)),Ne.disconnect(),c.dispose(),u.dispose(),A.dispose(),z.dispose(),D.dispose(),_.dispose(),C.dispose(),N.dispose(),F.dispose(),$.dispose(),O.dispose(),r.contains(c.domElement)&&r.removeChild(c.domElement)}},[e]),S.jsxs("div",{className:`relative flex items-center justify-center ${t}`,children:[S.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/30 to-pink-500/20 rounded-full blur-3xl opacity-60 animate-pulse pointer-events-none"}),S.jsx("div",{ref:n,className:"w-full h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[500px] cursor-grab active:cursor-grabbing relative z-10"})]})},ZI=({onStartLearning:t,onExplorePath:e})=>S.jsxs("div",{className:"relative overflow-hidden bg-slate-950 text-white pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-900",children:[S.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-600/10 via-purple-600/5 to-transparent blur-3xl pointer-events-none"}),S.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10",children:[S.jsxs(Ha.div,{className:"lg:col-span-7 space-y-8 text-center lg:text-left",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"},children:[S.jsxs(Ha.div,{className:"inline-flex items-center space-x-2 bg-gradient-to-r from-blue-950/80 to-purple-950/80 border border-blue-500/30 px-4 py-1.5 rounded-full text-xs font-semibold text-blue-300 shadow-inner",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.1,duration:.4},children:[S.jsx(xa,{className:"w-4 h-4 text-cyan-400 animate-pulse"}),S.jsx("span",{children:"Powered by Zone of Proximal Development Engine"}),S.jsx("span",{className:"bg-blue-600/40 text-blue-200 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold",children:"v2.4"})]}),S.jsxs("div",{className:"space-y-4",children:[S.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]",children:["Master Any Skill with"," ",S.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500",children:"Cosmic Precision"})]}),S.jsx("p",{className:"text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed",children:"Experience an intelligent learning universe that dynamically tailors content, balances cognitive load, and transforms complex concepts into visual mastery."})]}),S.jsxs("div",{className:"flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-300 font-medium",children:[S.jsxs("div",{className:"flex items-center space-x-1.5 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-xl",children:[S.jsx(ga,{className:"w-4 h-4 text-purple-400"}),S.jsx("span",{children:"VARK Modality Tuning"})]}),S.jsxs("div",{className:"flex items-center space-x-1.5 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-xl",children:[S.jsx(nS,{className:"w-4 h-4 text-amber-400"}),S.jsx("span",{children:"Real-Time ZPD Scaling"})]}),S.jsxs("div",{className:"flex items-center space-x-1.5 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-xl",children:[S.jsx(fm,{className:"w-4 h-4 text-emerald-400"}),S.jsx("span",{children:"Adaptive Mastery Graph"})]})]}),S.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2",children:[S.jsxs("button",{onClick:t,className:"w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm rounded-2xl shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center space-x-2 group hover:scale-[1.02]",children:[S.jsx("span",{children:"Launch Adaptive Practice"}),S.jsx(um,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]}),S.jsxs("button",{onClick:e,className:"w-full sm:w-auto px-7 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white font-bold text-sm rounded-2xl transition-all flex items-center justify-center space-x-2",children:[S.jsx(tS,{className:"w-4 h-4 text-blue-400"}),S.jsx("span",{children:"Explore Knowledge Graph"})]})]}),S.jsxs("div",{className:"grid grid-cols-3 gap-4 pt-4 border-t border-slate-900 max-w-lg mx-auto lg:mx-0",children:[S.jsxs("div",{children:[S.jsx("div",{className:"text-xl sm:text-2xl font-extrabold text-white",children:"99.2%"}),S.jsx("div",{className:"text-[11px] text-slate-400 font-medium",children:"Concept Retention"})]}),S.jsxs("div",{children:[S.jsx("div",{className:"text-xl sm:text-2xl font-extrabold text-cyan-400",children:"3.4x"}),S.jsx("div",{className:"text-[11px] text-slate-400 font-medium",children:"Faster Mastery"})]}),S.jsxs("div",{children:[S.jsx("div",{className:"text-xl sm:text-2xl font-extrabold text-purple-400",children:"Real-time"}),S.jsx("div",{className:"text-[11px] text-slate-400 font-medium",children:"Difficulty Adjust"})]})]})]}),S.jsx(Ha.div,{className:"lg:col-span-5 relative flex items-center justify-center",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.2},children:S.jsxs("div",{className:"w-full max-w-[480px] aspect-square relative",children:[S.jsx(KI,{interactive:!0}),S.jsxs(Ha.div,{className:"absolute -top-2 -left-4 bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 p-3 rounded-2xl shadow-xl flex items-center space-x-3 hidden sm:flex pointer-events-none",animate:{y:[0,-8,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},children:[S.jsx("div",{className:"w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center",children:S.jsx(ga,{className:"w-5 h-5"})}),S.jsxs("div",{children:[S.jsx("div",{className:"text-xs font-bold text-white",children:"Visual & Kinesthetic"}),S.jsx("div",{className:"text-[10px] text-slate-400",children:"Adaptive Format Active"})]})]}),S.jsxs(Ha.div,{className:"absolute bottom-6 -right-4 bg-slate-900/80 backdrop-blur-md border border-purple-500/30 p-3 rounded-2xl shadow-xl flex items-center space-x-3 hidden sm:flex pointer-events-none",animate:{y:[0,8,0]},transition:{duration:5,repeat:1/0,ease:"easeInOut",delay:1},children:[S.jsx("div",{className:"w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center",children:S.jsx(eS,{className:"w-5 h-5"})}),S.jsxs("div",{children:[S.jsx("div",{className:"text-xs font-bold text-white",children:"Optimal ZPD Flow"}),S.jsx("div",{className:"text-[10px] text-slate-400",children:"Difficulty: 7.2 / 10"})]})]})]})})]})]}),QI=({user:t,onSelectTopic:e})=>{var u,p,m,M,g;const[n,i]=ie.useState([]),[r,s]=ie.useState(""),[a,o]=ie.useState(null),[l,c]=ie.useState(null),[d,h]=ie.useState(!0);return ie.useEffect(()=>{Promise.all([AT(),NT()]).then(([f,x])=>{i(f),c(x),f.length>0&&s(f[0].id),h(!1)}).catch(f=>{console.error("Error fetching dashboard data:",f),h(!1)})},[]),ie.useEffect(()=>{r&&CT(r).then(f=>o(f)).catch(f=>console.error("Error loading path:",f))},[r]),d?S.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[60vh]",children:[S.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"}),S.jsx("p",{className:"mt-4 text-slate-400 font-medium",children:"Loading Learner Analytics & Adaptive Path..."})]}):S.jsxs("div",{className:"space-y-8",children:[S.jsx(ZI,{onStartLearning:()=>{a!=null&&a.currentTopicId?e(a.currentTopicId):n.length>0&&s(n[0].id)},onExplorePath:()=>{const f=document.getElementById("learning-path-section");f&&f.scrollIntoView({behavior:"smooth"})}}),S.jsxs("div",{className:"max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 space-y-8",children:[S.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[S.jsxs("div",{className:"glass-card rounded-2xl p-5 flex items-center space-x-4 border-l-4 border-amber-500",children:[S.jsx("div",{className:"w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center",children:S.jsx(eS,{className:"w-6 h-6"})}),S.jsxs("div",{children:[S.jsxs("div",{className:"text-2xl font-extrabold text-white",children:[((u=l==null?void 0:l.summary)==null?void 0:u.studyStreakDays)||1," Days"]}),S.jsx("div",{className:"text-xs text-slate-400 font-medium uppercase tracking-wider",children:"Active Learning Streak"})]})]}),S.jsxs("div",{className:"glass-card rounded-2xl p-5 flex items-center space-x-4 border-l-4 border-emerald-500",children:[S.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center",children:S.jsx(Jy,{className:"w-6 h-6"})}),S.jsxs("div",{children:[S.jsxs("div",{className:"text-2xl font-extrabold text-white",children:[((p=l==null?void 0:l.summary)==null?void 0:p.overallAccuracy)||0,"%"]}),S.jsx("div",{className:"text-xs text-slate-400 font-medium uppercase tracking-wider",children:"Overall Accuracy"})]})]}),S.jsxs("div",{className:"glass-card rounded-2xl p-5 flex items-center space-x-4 border-l-4 border-blue-500",children:[S.jsx("div",{className:"w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center",children:S.jsx(uT,{className:"w-6 h-6"})}),S.jsxs("div",{children:[S.jsxs("div",{className:"text-2xl font-extrabold text-white",children:[((m=l==null?void 0:l.summary)==null?void 0:m.totalTimeMinutes)||0," mins"]}),S.jsx("div",{className:"text-xs text-slate-400 font-medium uppercase tracking-wider",children:"Time Spent Practicing"})]})]}),S.jsxs("div",{className:"glass-card rounded-2xl p-5 flex items-center space-x-4 border-l-4 border-purple-500",children:[S.jsx("div",{className:"w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center",children:S.jsx(ga,{className:"w-6 h-6"})}),S.jsxs("div",{children:[S.jsxs("div",{className:"text-base font-extrabold text-white",children:[((M=l==null?void 0:l.profile)==null?void 0:M.learningStyle)||"VISUAL"," Style"]}),S.jsxs("div",{className:"text-xs text-slate-400 font-medium",children:["Skill Level: ",((g=l==null?void 0:l.profile)==null?void 0:g.overallSkill)||3," / 10"]})]})]})]}),(l==null?void 0:l.weakAreas)&&l.weakAreas.length>0&&S.jsxs("div",{className:"bg-rose-950/40 border border-rose-800/60 rounded-2xl p-4 sm:p-5 flex items-start space-x-4",children:[S.jsx(oT,{className:"w-6 h-6 text-rose-400 shrink-0 mt-0.5"}),S.jsxs("div",{className:"space-y-1",children:[S.jsx("h4",{className:"text-sm font-bold text-rose-200",children:"Adaptive Alert: Attention Recommended"}),S.jsxs("p",{className:"text-xs text-slate-300",children:["The engine detected conceptual difficulties in ",S.jsx("span",{className:"font-semibold text-rose-300",children:l.weakAreas.map(f=>f.topicName).join(", ")}),". Remedial alternate format exercises have been inserted into your path."]})]})]}),S.jsxs("div",{id:"learning-path-section",className:"glass-card rounded-2xl p-6 sm:p-8 space-y-6",children:[S.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[S.jsxs("div",{children:[S.jsxs("h2",{className:"text-xl font-bold text-white flex items-center space-x-2",children:[S.jsx(tS,{className:"w-5 h-5 text-blue-400"}),S.jsx("span",{children:"Sequenced Learning Path"})]}),S.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Topologically ordered topic graph based on prerequisite dependencies and your rolling mastery score."})]}),S.jsx("div",{className:"flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0",children:n.map(f=>S.jsx("button",{onClick:()=>s(f.id),className:`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${r===f.id?"bg-blue-600 text-white shadow-md shadow-blue-600/30":"bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700"}`,children:f.name},f.id))})]}),a!=null&&a.path?S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:a.path.map(f=>{const x=f.status==="LOCKED",y=f.status==="COMPLETED",v=a.currentTopicId===f.topicId;return S.jsxs("div",{className:`rounded-2xl p-5 border transition-all flex flex-col justify-between ${v?"bg-blue-950/40 border-blue-500 ring-2 ring-blue-500/40 shadow-lg shadow-blue-500/10":y?"bg-emerald-950/20 border-emerald-800/40":x?"bg-slate-900/40 border-slate-800 opacity-60":"bg-slate-800/60 border-slate-700/80 hover:border-slate-600"}`,children:[S.jsxs("div",{className:"space-y-3",children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("span",{className:"text-[10px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md",children:["Step ",f.orderIndex]}),y&&S.jsxs("span",{className:"flex items-center space-x-1 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-0.5 rounded-full",children:[S.jsx(dm,{className:"w-3.5 h-3.5"}),S.jsxs("span",{children:["Mastered (",f.masteryScore,"%)"]})]}),v&&!y&&S.jsxs("span",{className:"flex items-center space-x-1 text-xs font-bold text-blue-400 bg-blue-950/80 border border-blue-800/60 px-2.5 py-0.5 rounded-full animate-pulse",children:[S.jsx(lT,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:"Active Challenge"})]}),x&&S.jsxs("span",{className:"flex items-center space-x-1 text-xs font-bold text-slate-400 bg-slate-900/80 px-2.5 py-0.5 rounded-full",children:[S.jsx(fT,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:"Prerequisites Locked"})]})]}),S.jsx("h3",{className:"text-base font-bold text-white leading-snug",children:f.topicName}),S.jsxs("div",{className:"space-y-1",children:[S.jsxs("div",{className:"flex justify-between text-[11px] text-slate-400 font-medium",children:[S.jsx("span",{children:"Mastery Progress"}),S.jsxs("span",{children:[f.masteryScore,"%"]})]}),S.jsx("div",{className:"w-full bg-slate-900 rounded-full h-2 overflow-hidden",children:S.jsx("div",{className:`h-2 rounded-full transition-all ${y?"bg-emerald-500":f.masteryScore>0?"bg-blue-500":"bg-slate-700"}`,style:{width:`${Math.max(5,f.masteryScore)}%`}})})]}),S.jsx("div",{className:"text-xs text-slate-400 flex items-center justify-between pt-1",children:S.jsxs("span",{children:["Target Level: ",f.recommendedDifficulty,"/10"]})})]}),S.jsx("div",{className:"pt-4",children:S.jsxs("button",{disabled:x,onClick:()=>e(f.topicId),className:`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all ${v?"bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30":y?"bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-800/40":x?"bg-slate-900 text-slate-500 cursor-not-allowed border border-slate-800":"bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"}`,children:[S.jsx(pT,{className:"w-3.5 h-3.5 fill-current"}),S.jsx("span",{children:y?"Review Topic":x?"Locked":"Start Adaptive Lesson"})]})})]},f.topicId)})}):S.jsx("div",{className:"text-center py-8 text-slate-400",children:"Loading topic nodes..."})]})]})]})},JI=({topicId:t,onBackToDashboard:e})=>{var N,F;const[n,i]=ie.useState(!0),[r,s]=ie.useState(null),[a,o]=ie.useState("TEXT"),[l,c]=ie.useState(0),[d,h]=ie.useState(""),[u,p]=ie.useState(50),[m,M]=ie.useState(null),[g,f]=ie.useState(!1),[x,y]=ie.useState(Date.now()),v=()=>{i(!0),M(null),h(""),y(Date.now()),RT(t).then(V=>{var $;s(V),($=V==null?void 0:V.contentItem)!=null&&$.format&&o(V.contentItem.format),i(!1)}).catch(V=>{console.error("Error fetching content:",V),i(!1)})};ie.useEffect(()=>{t&&v()},[t]);const T=async()=>{if(!(r!=null&&r.contentItem))return;f(!0);const $=(r.contentItem.questions||[])[l],O=d===($==null?void 0:$.correctAnswer),Y=Math.max(5,Math.round((Date.now()-x)/1e3));try{const z=await PT({topicId:t,contentItemId:r.contentItem.id,questionId:$==null?void 0:$.id,selectedAnswer:d,isCorrect:O,timeSpentSec:Y,currentDifficulty:r.contentItem.difficulty,format:a});M({isCorrect:O,explanation:$==null?void 0:$.explanation,adaptiveResult:z.adaptiveResult}),f(!1)}catch(z){console.error("Failed to submit interaction:",z),f(!1)}},A=()=>{v()};if(n)return S.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[60vh]",children:[S.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"}),S.jsx("p",{className:"mt-4 text-slate-400 font-medium",children:"Selecting Optimal Adaptive Content Format..."})]});const b=r==null?void 0:r.contentItem,C=((b==null?void 0:b.questions)||[])[l],P=r==null?void 0:r.adaptiveResult;return S.jsxs("div",{className:"max-w-5xl mx-auto py-8 px-4 space-y-6",children:[S.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-card p-5 rounded-2xl",children:[S.jsxs("div",{children:[S.jsx("button",{onClick:e,className:"text-xs text-slate-400 hover:text-white font-medium mb-1 inline-flex items-center space-x-1",children:"← Back to Path Overview"}),S.jsx("h1",{className:"text-xl sm:text-2xl font-extrabold text-white",children:(b==null?void 0:b.title)||"Adaptive Content Lesson"}),S.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:b==null?void 0:b.summary})]}),S.jsxs("div",{className:"flex items-center space-x-3 shrink-0",children:[S.jsxs("div",{className:"bg-slate-800/90 border border-slate-700 px-3.5 py-1.5 rounded-xl text-center",children:[S.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase block",children:"Current Level"}),S.jsxs("span",{className:"text-lg font-black text-blue-400",children:[(b==null?void 0:b.difficulty)||3," / 10"]})]}),S.jsxs("div",{className:"bg-slate-800/90 border border-slate-700 px-3.5 py-1.5 rounded-xl text-center",children:[S.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase block",children:"Engine Recommendation"}),S.jsxs("span",{className:"text-xs font-bold text-emerald-400 flex items-center space-x-1 mt-1",children:[S.jsx(xa,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:(P==null?void 0:P.recommendedFormat)||"TEXT"})]})]})]})]}),((N=m==null?void 0:m.adaptiveResult)==null?void 0:N.difficultyChanged)&&S.jsxs("div",{className:`p-4 rounded-2xl border flex items-center space-x-4 animate-bounce ${m.adaptiveResult.actionRequired==="INCREASE_DIFFICULTY"?"bg-emerald-950/60 border-emerald-500/60 text-emerald-200":"bg-amber-950/60 border-amber-500/60 text-amber-200"}`,children:[m.adaptiveResult.actionRequired==="INCREASE_DIFFICULTY"?S.jsx(_T,{className:"w-6 h-6 text-emerald-400 shrink-0"}):S.jsx(vT,{className:"w-6 h-6 text-amber-400 shrink-0"}),S.jsxs("div",{children:[S.jsx("h4",{className:"text-sm font-extrabold",children:"Adaptive Engine Adjusted Difficulty"}),S.jsx("p",{className:"text-xs opacity-90",children:m.adaptiveResult.adjustmentReason})]})]}),S.jsxs("div",{className:"flex items-center justify-between bg-slate-900/80 p-1.5 rounded-xl border border-slate-800",children:[S.jsx("span",{className:"text-xs font-bold text-slate-400 px-3 hidden sm:inline",children:"Choose Modality:"}),S.jsx("div",{className:"flex items-center space-x-1 w-full sm:w-auto",children:[{fmt:"TEXT",icon:M0,label:"Text Summary"},{fmt:"VIDEO",icon:ac,label:"Video Explainer"},{fmt:"INTERACTIVE",icon:w0,label:"Interactive Sandbox"},{fmt:"QUIZ",icon:E0,label:"Practice Quiz"}].map(V=>{const $=V.icon,O=a===V.fmt,Y=(P==null?void 0:P.recommendedFormat)===V.fmt;return S.jsxs("button",{onClick:()=>o(V.fmt),className:`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex-1 sm:flex-initial justify-center ${O?"bg-blue-600 text-white shadow-md shadow-blue-600/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:[S.jsx($,{className:"w-4 h-4"}),S.jsx("span",{children:V.label}),Y&&S.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping ml-1",title:"Recommended for your style"})]},V.fmt)})})]}),S.jsxs("div",{className:"glass-card rounded-2xl p-6 sm:p-8 space-y-6",children:[a==="TEXT"&&S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{className:"flex items-center space-x-2 text-blue-400 text-sm font-bold",children:[S.jsx(M0,{className:"w-4 h-4"}),S.jsx("span",{children:"Comprehensive Text Lesson"})]}),S.jsx("div",{className:"prose prose-invert max-w-none text-slate-200 text-sm sm:text-base leading-relaxed bg-slate-900/60 p-6 rounded-xl border border-slate-800",children:S.jsx("p",{className:"whitespace-pre-line",children:(b==null?void 0:b.textContent)||(b==null?void 0:b.summary)})})]}),a==="VIDEO"&&S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{className:"flex items-center space-x-2 text-blue-400 text-sm font-bold",children:[S.jsx(ac,{className:"w-4 h-4"}),S.jsx("span",{children:"Visual & Auditory Video Explainer"})]}),S.jsx("div",{className:"aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center",children:b!=null&&b.videoUrl?S.jsx("iframe",{className:"w-full h-full",src:b.videoUrl,title:b.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):S.jsxs("div",{className:"text-center p-8",children:[S.jsx(ac,{className:"w-16 h-16 text-blue-500 mx-auto opacity-70 mb-2 animate-pulse"}),S.jsx("p",{className:"text-slate-300 font-bold",children:"Interactive Video Stream Ready"}),S.jsxs("p",{className:"text-xs text-slate-500 mt-1",children:["High-definition animated visual explainer at Level ",b==null?void 0:b.difficulty]})]})})]}),a==="INTERACTIVE"&&S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{className:"flex items-center space-x-2 text-purple-400 text-sm font-bold",children:[S.jsx(w0,{className:"w-4 h-4"}),S.jsx("span",{children:"Kinesthetic Interactive Parameter Sandbox"})]}),S.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-purple-500/30 space-y-6",children:[S.jsx("p",{className:"text-xs text-slate-300",children:((F=b==null?void 0:b.interactiveData)==null?void 0:F.instruction)||"Adjust the dynamic slider controls below to calibrate the equation parameters."}),S.jsxs("div",{className:"space-y-2",children:[S.jsxs("div",{className:"flex justify-between text-xs font-bold text-slate-300",children:[S.jsx("span",{children:"Parameter Input Value:"}),S.jsx("span",{className:"text-purple-400 text-base",children:u})]}),S.jsx("input",{type:"range",min:"0",max:"100",value:u,onChange:V=>p(Number(V.target.value)),className:"w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"})]}),S.jsxs("div",{className:"p-4 bg-purple-950/30 border border-purple-800/40 rounded-xl flex items-center justify-between",children:[S.jsx("span",{className:"text-xs text-slate-300",children:"Sandbox Equation Output:"}),S.jsxs("span",{className:"text-sm font-mono font-bold text-purple-300",children:["f(",u,") = ",u*((b==null?void 0:b.difficulty)||3)]})]})]})]}),S.jsxs("div",{className:"pt-4 border-t border-slate-800 space-y-4",children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("h3",{className:"text-sm font-bold text-white flex items-center space-x-2",children:[S.jsx(E0,{className:"w-4 h-4 text-blue-400"}),S.jsxs("span",{children:["Adaptive Question Check (Level ",b==null?void 0:b.difficulty,")"]})]}),m&&S.jsxs("span",{className:`text-xs font-bold px-2.5 py-1 rounded-full flex items-center space-x-1 ${m.isCorrect?"bg-emerald-950 text-emerald-400 border border-emerald-800":"bg-rose-950 text-rose-400 border border-rose-800"}`,children:[m.isCorrect?S.jsx(cT,{className:"w-3.5 h-3.5"}):S.jsx(ST,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:m.isCorrect?"Correct Answer!":"Incorrect"})]})]}),C?S.jsxs("div",{className:"space-y-4 bg-slate-900/40 p-5 rounded-xl border border-slate-800",children:[S.jsx("p",{className:"text-sm sm:text-base font-semibold text-slate-100",children:C.prompt}),S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:C.options.map(V=>{const $=d===V;return S.jsx("button",{disabled:!!m,onClick:()=>h(V),className:`text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${$?"bg-blue-600/40 border-blue-400 text-white font-bold ring-2 ring-blue-500/50":"bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700/60"}`,children:V},V)})}),m?S.jsxs("div",{className:"space-y-4 pt-2",children:[S.jsxs("div",{className:"p-4 bg-slate-800/90 border border-slate-700 rounded-xl text-xs text-slate-300 space-y-1",children:[S.jsx("span",{className:"font-bold text-slate-100 block",children:"Explanation:"}),S.jsx("p",{children:m.explanation})]}),S.jsx("div",{className:"flex justify-end",children:S.jsxs("button",{onClick:A,className:"flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-blue-600/30",children:[S.jsx("span",{children:"Fetch Next Adaptive Item"}),S.jsx(mT,{className:"w-4 h-4"})]})})]}):S.jsx("div",{className:"flex justify-end pt-2",children:S.jsxs("button",{disabled:!d||g,onClick:T,className:"flex items-center space-x-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-blue-600/30",children:[S.jsx("span",{children:g?"Recording...":"Submit Answer"}),S.jsx(um,{className:"w-4 h-4"})]})})]}):S.jsx("p",{className:"text-xs text-slate-400 italic",children:"No direct questions attached to this item. Review concept above."})]})]})]})},eU=()=>{const[t,e]=ie.useState(null),[n,i]=ie.useState(!0),[r,s]=ie.useState("");if(ie.useEffect(()=>{DT().then(c=>{e(c),i(!1)}).catch(c=>{console.error("Failed to load teacher overview:",c),i(!1)})},[]),n)return S.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[60vh]",children:[S.jsx("div",{className:"w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"}),S.jsx("p",{className:"mt-4 text-slate-400 font-medium",children:"Loading Teacher Class Analytics & Flagged Alerts..."})]});const a=t==null?void 0:t.aggregateMetrics,l=((t==null?void 0:t.students)||[]).filter(c=>c.name.toLowerCase().includes(r.toLowerCase())||c.email.toLowerCase().includes(r.toLowerCase()));return S.jsxs("div",{className:"max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8",children:[S.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-card p-6 rounded-2xl border-l-4 border-purple-500",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"inline-flex items-center space-x-1.5 px-3 py-1 bg-purple-950/80 border border-purple-800/50 rounded-full text-purple-300 text-xs font-bold uppercase tracking-wider mb-2",children:[S.jsx(oc,{className:"w-4 h-4"}),S.jsx("span",{children:"Teacher & Educator Portal"})]}),S.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white",children:"Classroom Aggregate Analytics"}),S.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1",children:"Real-time monitoring of student learning paths, VARK distribution, and automatic flagging for struggling students."})]}),S.jsxs("div",{className:"relative w-full sm:w-64",children:[S.jsx(gT,{className:"w-4 h-4 text-slate-400 absolute left-3 top-3"}),S.jsx("input",{type:"text",placeholder:"Search student by name...",value:r,onChange:c=>s(c.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500"})]})]}),S.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[S.jsxs("div",{className:"glass-card rounded-2xl p-5 border-l-4 border-blue-500 flex items-center space-x-4",children:[S.jsx("div",{className:"w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center",children:S.jsx(oc,{className:"w-6 h-6"})}),S.jsxs("div",{children:[S.jsx("div",{className:"text-2xl font-extrabold text-white",children:(a==null?void 0:a.totalStudents)||0}),S.jsx("div",{className:"text-xs text-slate-400 font-medium uppercase tracking-wider",children:"Total Enrolled Students"})]})]}),S.jsxs("div",{className:"glass-card rounded-2xl p-5 border-l-4 border-rose-500 flex items-center space-x-4",children:[S.jsx("div",{className:"w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center",children:S.jsx(aT,{className:"w-6 h-6"})}),S.jsxs("div",{children:[S.jsx("div",{className:"text-2xl font-extrabold text-rose-400",children:(a==null?void 0:a.stuckStudentsCount)||0}),S.jsx("div",{className:"text-xs text-slate-400 font-medium uppercase tracking-wider",children:"Flagged Stuck Students"})]})]}),S.jsxs("div",{className:"glass-card rounded-2xl p-5 border-l-4 border-emerald-500 flex items-center space-x-4",children:[S.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center",children:S.jsx(Jy,{className:"w-6 h-6"})}),S.jsxs("div",{children:[S.jsxs("div",{className:"text-2xl font-extrabold text-white",children:[(a==null?void 0:a.aggregateClassMastery)||0,"%"]}),S.jsx("div",{className:"text-xs text-slate-400 font-medium uppercase tracking-wider",children:"Average Class Mastery"})]})]})]}),S.jsxs("div",{className:"glass-card rounded-2xl overflow-hidden border border-slate-800",children:[S.jsxs("div",{className:"p-5 border-b border-slate-800 flex items-center justify-between",children:[S.jsxs("h3",{className:"text-base font-bold text-white flex items-center space-x-2",children:[S.jsx(oc,{className:"w-4 h-4 text-purple-400"}),S.jsx("span",{children:"Student Performance Roster"})]}),S.jsxs("span",{className:"text-xs text-slate-400",children:[l.length," Students"]})]}),S.jsx("div",{className:"overflow-x-auto",children:S.jsxs("table",{className:"w-full text-left text-xs",children:[S.jsx("thead",{className:"bg-slate-900/90 text-slate-400 uppercase font-bold tracking-wider border-b border-slate-800",children:S.jsxs("tr",{children:[S.jsx("th",{className:"py-3.5 px-4",children:"Student Name"}),S.jsx("th",{className:"py-3.5 px-4",children:"VARK Style"}),S.jsx("th",{className:"py-3.5 px-4",children:"Avg Mastery"}),S.jsx("th",{className:"py-3.5 px-4",children:"Accuracy"}),S.jsx("th",{className:"py-3.5 px-4",children:"Interactions"}),S.jsx("th",{className:"py-3.5 px-4",children:"Adaptive Intervention Status"})]})}),S.jsx("tbody",{className:"divide-y divide-slate-800 text-slate-300 font-medium",children:l.map(c=>S.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[S.jsxs("td",{className:"py-4 px-4 font-bold text-white",children:[c.name,S.jsx("span",{className:"block text-[10px] text-slate-500 font-normal",children:c.email})]}),S.jsx("td",{className:"py-4 px-4",children:S.jsxs("span",{className:"px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-800/50 text-purple-300 text-[10px] font-extrabold flex items-center space-x-1 w-max",children:[S.jsx(xa,{className:"w-3 h-3"}),S.jsx("span",{children:c.learningStyle})]})}),S.jsx("td",{className:"py-4 px-4",children:S.jsxs("div",{className:"flex items-center space-x-2",children:[S.jsx("div",{className:"w-16 bg-slate-900 rounded-full h-1.5 overflow-hidden",children:S.jsx("div",{className:"bg-blue-500 h-1.5 rounded-full",style:{width:`${Math.max(5,c.avgMastery)}%`}})}),S.jsxs("span",{className:"font-bold",children:[c.avgMastery,"%"]})]})}),S.jsxs("td",{className:"py-4 px-4 font-bold",children:[c.accuracy,"%"]}),S.jsxs("td",{className:"py-4 px-4",children:[c.totalInteractions," attempts"]}),S.jsx("td",{className:"py-4 px-4",children:c.isStuck?S.jsxs("div",{className:"flex items-center space-x-2 text-rose-400 bg-rose-950/60 border border-rose-800/60 px-3 py-1.5 rounded-xl w-max",children:[S.jsx(xT,{className:"w-4 h-4 shrink-0"}),S.jsx("span",{className:"font-bold text-[11px]",children:c.stuckReason})]}):S.jsxs("div",{className:"flex items-center space-x-1.5 text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-xl w-max",children:[S.jsx(dm,{className:"w-4 h-4 shrink-0"}),S.jsx("span",{className:"font-bold text-[11px]",children:"On Track"})]})})]},c.id))})]})})]})]})},tU=({onSuccess:t})=>{const[e,n]=ie.useState(!0),[i,r]=ie.useState(""),[s,a]=ie.useState(""),[o,l]=ie.useState(""),[c,d]=ie.useState("STUDENT"),[h,u]=ie.useState(""),[p,m]=ie.useState(!1),M=async f=>{f.preventDefault(),u(""),m(!0);try{if(e){const x=await T0(i,s);t(x)}else{const x=await ET(i,s,o,c);t(x)}}catch(x){u(x.message||"Authentication error")}finally{m(!1)}},g=async f=>{u(""),m(!0);try{const x=await T0(f,"password123");t(x)}catch(x){u(x.message||"Demo login failed")}finally{m(!1)}};return S.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4",children:S.jsxs("div",{className:"glass-card w-full max-w-md rounded-3xl p-8 space-y-6 shadow-2xl border border-slate-700/80",children:[S.jsxs("div",{className:"text-center space-y-2",children:[S.jsx("div",{className:"w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center mx-auto shadow-lg shadow-blue-500/20",children:S.jsx(ga,{className:"w-7 h-7 text-white"})}),S.jsx("h2",{className:"text-2xl font-black text-white",children:e?"Welcome Back":"Create Adaptive Account"}),S.jsx("p",{className:"text-xs text-slate-400",children:e?"Log in to continue your personalized learning path":"Sign up to start your adaptive learning journey"})]}),h&&S.jsx("div",{className:"p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs font-semibold text-center",children:h}),S.jsxs("div",{className:"space-y-3 pt-1",children:[S.jsxs("div",{className:"flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400",children:[S.jsx("span",{children:"Built-in Demo Credentials:"}),S.jsx("span",{className:"text-[10px] text-blue-400 font-normal lowercase",children:"Password: password123"})]}),S.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[S.jsxs("button",{type:"button",onClick:()=>{r("student@example.com"),a("password123"),g("student@example.com")},className:"py-2.5 px-3 bg-blue-950/80 hover:bg-blue-900 border border-blue-800/80 text-blue-300 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center space-y-0.5 group shadow-sm",children:[S.jsxs("div",{className:"flex items-center space-x-1.5",children:[S.jsx(yT,{className:"w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform"}),S.jsx("span",{children:"Demo Student"})]}),S.jsx("span",{className:"text-[10px] font-normal text-slate-400",children:"student@example.com"})]}),S.jsxs("button",{type:"button",onClick:()=>{r("teacher@example.com"),a("password123"),g("teacher@example.com")},className:"py-2.5 px-3 bg-purple-950/80 hover:bg-purple-900 border border-purple-800/80 text-purple-300 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center space-y-0.5 group shadow-sm",children:[S.jsxs("div",{className:"flex items-center space-x-1.5",children:[S.jsx(fm,{className:"w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform"}),S.jsx("span",{children:"Demo Teacher"})]}),S.jsx("span",{className:"text-[10px] font-normal text-slate-400",children:"teacher@example.com"})]})]})]}),S.jsxs("div",{className:"relative flex py-1 items-center",children:[S.jsx("div",{className:"flex-grow border-t border-slate-800"}),S.jsx("span",{className:"flex-shrink mx-3 text-[10px] uppercase font-bold text-slate-500",children:"Or use email"}),S.jsx("div",{className:"flex-grow border-t border-slate-800"})]}),S.jsxs("form",{onSubmit:M,className:"space-y-4",children:[!e&&S.jsxs("div",{children:[S.jsx("label",{className:"text-xs font-bold text-slate-300 block mb-1",children:"Full Name"}),S.jsx("input",{type:"text",required:!0,value:o,onChange:f=>l(f.target.value),placeholder:"Alex Rivera",className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"text-xs font-bold text-slate-300 block mb-1",children:"Email Address"}),S.jsx("input",{type:"email",required:!0,value:i,onChange:f=>r(f.target.value),placeholder:"student@example.com",className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"text-xs font-bold text-slate-300 block mb-1",children:"Password"}),S.jsx("input",{type:"password",required:!0,value:s,onChange:f=>a(f.target.value),placeholder:"••••••••",className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"})]}),!e&&S.jsxs("div",{children:[S.jsx("label",{className:"text-xs font-bold text-slate-300 block mb-1",children:"Account Role"}),S.jsxs("select",{value:c,onChange:f=>d(f.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500",children:[S.jsx("option",{value:"STUDENT",children:"Student"}),S.jsx("option",{value:"TEACHER",children:"Teacher / Admin"})]})]}),S.jsx("button",{type:"submit",disabled:p,className:"w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30 text-sm",children:p?"Authenticating...":e?"Sign In":"Create Account"})]}),S.jsx("div",{className:"text-center pt-2",children:S.jsx("button",{type:"button",onClick:()=>n(!e),className:"text-xs text-slate-400 hover:text-blue-400 font-semibold",children:e?"Don't have an account? Sign Up":"Already registered? Sign In"})})]})})};function nU(){const[t,e]=ie.useState(null),[n,i]=ie.useState(()=>localStorage.getItem("activeTab")||"dashboard"),[r,s]=ie.useState(""),[a,o]=ie.useState(!0),l=u=>{localStorage.setItem("activeTab",u),i(u)};ie.useEffect(()=>{localStorage.getItem("token")?wT().then(p=>{const m=localStorage.getItem("user"),g={...m?JSON.parse(m):{name:"Learner",role:"STUDENT"},profile:p};e(g),localStorage.getItem("activeTab")||(g.role==="TEACHER"?l("teacher"):g.role==="STUDENT"&&!g.profile?l("onboarding"):l("dashboard")),o(!1)}).catch(()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("activeTab"),o(!1)}):o(!1)},[]);const c=u=>{localStorage.setItem("token",u.token),localStorage.setItem("user",JSON.stringify(u.user)),e(u.user),u.user.role==="STUDENT"&&!u.user.profile?l("onboarding"):u.user.role==="TEACHER"?l("teacher"):l("dashboard")},d=()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("activeTab"),e(null)},h=u=>{s(u),l("content")};return a?S.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center",children:S.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})}):t?S.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col",children:[S.jsx(MT,{user:t,activeTab:n,setActiveTab:l,onLogout:d}),S.jsxs("main",{className:"flex-1 pb-12",children:[n==="onboarding"&&S.jsx(LT,{onComplete:u=>{e(p=>({...p,profile:u})),l("dashboard")}}),n==="dashboard"&&S.jsx(QI,{user:t,onSelectTopic:h}),n==="content"&&S.jsx(JI,{topicId:r,onBackToDashboard:()=>l("dashboard")}),n==="teacher"&&S.jsx(eU,{})]}),S.jsx("footer",{className:"border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500",children:"AI Adaptive Learning Platform © 2026 — Dynamic ZPD Difficulty Adjustment Engine"})]}):S.jsx(tU,{onSuccess:c})}af.createRoot(document.getElementById("root")).render(S.jsx(XE.StrictMode,{children:S.jsx(nU,{})}));
