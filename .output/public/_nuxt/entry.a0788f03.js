function w5(c,e){const a=Object.create(null),r=c.split(",");for(let t=0;t<r.length;t++)a[r[t]]=!0;return e?t=>!!a[t.toLowerCase()]:t=>!!a[t]}const h2={},R3=[],Z2=()=>{},Rh=()=>!1,Ih=/^on[^a-z]/,G4=c=>Ih.test(c),N5=c=>c.startsWith("onUpdate:"),L2=Object.assign,S5=(c,e)=>{const a=c.indexOf(e);a>-1&&c.splice(a,1)},Dh=Object.prototype.hasOwnProperty,a2=(c,e)=>Dh.call(c,e),K=Array.isArray,I3=c=>K4(c)==="[object Map]",ja=c=>K4(c)==="[object Set]",Oh=c=>K4(c)==="[object RegExp]",J=c=>typeof c=="function",v2=c=>typeof c=="string",k5=c=>typeof c=="symbol",u2=c=>c!==null&&typeof c=="object",qa=c=>(u2(c)||J(c))&&J(c.then)&&J(c.catch),Ga=Object.prototype.toString,K4=c=>Ga.call(c),Bh=c=>K4(c).slice(8,-1),Ka=c=>K4(c)==="[object Object]",A5=c=>v2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,H4=w5(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),p0=c=>{const e=Object.create(null);return a=>e[a]||(e[a]=c(a))},Fh=/-(\w)/g,l1=p0(c=>c.replace(Fh,(e,a)=>a?a.toUpperCase():"")),Uh=/\B([A-Z])/g,r4=p0(c=>c.replace(Uh,"-$1").toLowerCase()),v0=p0(c=>c.charAt(0).toUpperCase()+c.slice(1)),r8=p0(c=>c?`on${v0(c)}`:""),H3=(c,e)=>!Object.is(c,e),z4=(c,e)=>{for(let a=0;a<c.length;a++)c[a](e)},$6=(c,e,a)=>{Object.defineProperty(c,e,{configurable:!0,enumerable:!1,value:a})},Wh=c=>{const e=parseFloat(c);return isNaN(e)?c:e},Xa=c=>{const e=v2(c)?Number(c):NaN;return isNaN(e)?c:e};let L7;const A8=()=>L7||(L7=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function H0(c){if(K(c)){const e={};for(let a=0;a<c.length;a++){const r=c[a],t=v2(r)?Gh(r):H0(r);if(t)for(const n in t)e[n]=t[n]}return e}else if(v2(c)||u2(c))return c}const $h=/;(?![^(]*\))/g,jh=/:([^]+)/,qh=/\/\*[^]*?\*\//g;function Gh(c){const e={};return c.replace(qh,"").split($h).forEach(a=>{if(a){const r=a.split(jh);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function z0(c){let e="";if(v2(c))e=c;else if(K(c))for(let a=0;a<c.length;a++){const r=z0(c[a]);r&&(e+=r+" ")}else if(u2(c))for(const a in c)c[a]&&(e+=a+" ");return e.trim()}function Kh(c){if(!c)return null;let{class:e,style:a}=c;return e&&!v2(e)&&(c.class=z0(e)),a&&(c.style=H0(a)),c}const Xh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yh=w5(Xh);function Ya(c){return!!c||c===""}const fQ=c=>v2(c)?c:c==null?"":K(c)||u2(c)&&(c.toString===Ga||!J(c.toString))?JSON.stringify(c,Ja,2):String(c),Ja=(c,e)=>e&&e.__v_isRef?Ja(c,e.value):I3(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((a,[r,t])=>(a[`${r} =>`]=t,a),{})}:ja(e)?{[`Set(${e.size})`]:[...e.values()]}:u2(e)&&!K(e)&&!Ka(e)?String(e):e;let X2;class Qa{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=X2,!e&&X2&&(this.index=(X2.scopes||(X2.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const a=X2;try{return X2=this,e()}finally{X2=a}}}on(){X2=this}off(){X2=this.parent}stop(e){if(this._active){let a,r;for(a=0,r=this.effects.length;a<r;a++)this.effects[a].stop();for(a=0,r=this.cleanups.length;a<r;a++)this.cleanups[a]();if(this.scopes)for(a=0,r=this.scopes.length;a<r;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!e){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function Jh(c){return new Qa(c)}function Qh(c,e=X2){e&&e.active&&e.effects.push(c)}function Zh(){return X2}const _5=c=>{const e=new Set(c);return e.w=0,e.n=0,e},Za=c=>(c.w&X1)>0,c9=c=>(c.n&X1)>0,cm=({deps:c})=>{if(c.length)for(let e=0;e<c.length;e++)c[e].w|=X1},em=c=>{const{deps:e}=c;if(e.length){let a=0;for(let r=0;r<e.length;r++){const t=e[r];Za(t)&&!c9(t)?t.delete(c):e[a++]=t,t.w&=~X1,t.n&=~X1}e.length=a}},j6=new WeakMap;let m4=0,X1=1;const _8=30;let Y2;const d3=Symbol(""),T8=Symbol("");class T5{constructor(e,a=null,r){this.fn=e,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,Qh(this,r)}run(){if(!this.active)return this.fn();let e=Y2,a=W1;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Y2,Y2=this,W1=!0,X1=1<<++m4,m4<=_8?cm(this):b7(this),this.fn()}finally{m4<=_8&&em(this),X1=1<<--m4,Y2=this.parent,W1=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Y2===this?this.deferStop=!0:this.active&&(b7(this),this.onStop&&this.onStop(),this.active=!1)}}function b7(c){const{deps:e}=c;if(e.length){for(let a=0;a<e.length;a++)e[a].delete(c);e.length=0}}let W1=!0;const e9=[];function t4(){e9.push(W1),W1=!1}function n4(){const c=e9.pop();W1=c===void 0?!0:c}function D2(c,e,a){if(W1&&Y2){let r=j6.get(c);r||j6.set(c,r=new Map);let t=r.get(a);t||r.set(a,t=_5()),a9(t)}}function a9(c,e){let a=!1;m4<=_8?c9(c)||(c.n|=X1,a=!Za(c)):a=!c.has(Y2),a&&(c.add(Y2),Y2.deps.push(c))}function H1(c,e,a,r,t,n){const s=j6.get(c);if(!s)return;let i=[];if(e==="clear")i=[...s.values()];else if(a==="length"&&K(c)){const o=Number(r);s.forEach((f,l)=>{(l==="length"||l>=o)&&i.push(f)})}else switch(a!==void 0&&i.push(s.get(a)),e){case"add":K(c)?A5(a)&&i.push(s.get("length")):(i.push(s.get(d3)),I3(c)&&i.push(s.get(T8)));break;case"delete":K(c)||(i.push(s.get(d3)),I3(c)&&i.push(s.get(T8)));break;case"set":I3(c)&&i.push(s.get(d3));break}if(i.length===1)i[0]&&E8(i[0]);else{const o=[];for(const f of i)f&&o.push(...f);E8(_5(o))}}function E8(c,e){const a=K(c)?c:[...c];for(const r of a)r.computed&&y7(r);for(const r of a)r.computed||y7(r)}function y7(c,e){(c!==Y2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}function am(c,e){var a;return(a=j6.get(c))==null?void 0:a.get(e)}const rm=w5("__proto__,__v_isRef,__isVue"),r9=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(k5)),x7=tm();function tm(){const c={};return["includes","indexOf","lastIndexOf"].forEach(e=>{c[e]=function(...a){const r=r2(this);for(let n=0,s=this.length;n<s;n++)D2(r,"get",n+"");const t=r[e](...a);return t===-1||t===!1?r[e](...a.map(r2)):t}}),["push","pop","shift","unshift","splice"].forEach(e=>{c[e]=function(...a){t4();const r=r2(this)[e].apply(this,a);return n4(),r}}),c}function nm(c){const e=r2(this);return D2(e,"has",c),e.hasOwnProperty(c)}class t9{constructor(e=!1,a=!1){this._isReadonly=e,this._shallow=a}get(e,a,r){const t=this._isReadonly,n=this._shallow;if(a==="__v_isReactive")return!t;if(a==="__v_isReadonly")return t;if(a==="__v_isShallow")return n;if(a==="__v_raw"&&r===(t?n?zm:o9:n?i9:s9).get(e))return e;const s=K(e);if(!t){if(s&&a2(x7,a))return Reflect.get(x7,a,r);if(a==="hasOwnProperty")return nm}const i=Reflect.get(e,a,r);return(k5(a)?r9.has(a):rm(a))||(t||D2(e,"get",a),n)?i:x2(i)?s&&A5(a)?i:i.value:u2(i)?t?l9(i):z1(i):i}}class n9 extends t9{constructor(e=!1){super(!1,e)}set(e,a,r,t){let n=e[a];if(z3(n)&&x2(n)&&!x2(r))return!1;if(!this._shallow&&(!q6(r)&&!z3(r)&&(n=r2(n),r=r2(r)),!K(e)&&x2(n)&&!x2(r)))return n.value=r,!0;const s=K(e)&&A5(a)?Number(a)<e.length:a2(e,a),i=Reflect.set(e,a,r,t);return e===r2(t)&&(s?H3(r,n)&&H1(e,"set",a,r):H1(e,"add",a,r)),i}deleteProperty(e,a){const r=a2(e,a);e[a];const t=Reflect.deleteProperty(e,a);return t&&r&&H1(e,"delete",a,void 0),t}has(e,a){const r=Reflect.has(e,a);return(!k5(a)||!r9.has(a))&&D2(e,"has",a),r}ownKeys(e){return D2(e,"iterate",K(e)?"length":d3),Reflect.ownKeys(e)}}class sm extends t9{constructor(e=!1){super(!0,e)}set(e,a){return!0}deleteProperty(e,a){return!0}}const im=new n9,om=new sm,lm=new n9(!0),E5=c=>c,V0=c=>Reflect.getPrototypeOf(c);function d6(c,e,a=!1,r=!1){c=c.__v_raw;const t=r2(c),n=r2(e);a||(H3(e,n)&&D2(t,"get",e),D2(t,"get",n));const{has:s}=V0(t),i=r?E5:a?I5:S4;if(s.call(t,e))return i(c.get(e));if(s.call(t,n))return i(c.get(n));c!==t&&c.get(e)}function p6(c,e=!1){const a=this.__v_raw,r=r2(a),t=r2(c);return e||(H3(c,t)&&D2(r,"has",c),D2(r,"has",t)),c===t?a.has(c):a.has(c)||a.has(t)}function v6(c,e=!1){return c=c.__v_raw,!e&&D2(r2(c),"iterate",d3),Reflect.get(c,"size",c)}function w7(c){c=r2(c);const e=r2(this);return V0(e).has.call(e,c)||(e.add(c),H1(e,"add",c,c)),this}function N7(c,e){e=r2(e);const a=r2(this),{has:r,get:t}=V0(a);let n=r.call(a,c);n||(c=r2(c),n=r.call(a,c));const s=t.call(a,c);return a.set(c,e),n?H3(e,s)&&H1(a,"set",c,e):H1(a,"add",c,e),this}function S7(c){const e=r2(this),{has:a,get:r}=V0(e);let t=a.call(e,c);t||(c=r2(c),t=a.call(e,c)),r&&r.call(e,c);const n=e.delete(c);return t&&H1(e,"delete",c,void 0),n}function k7(){const c=r2(this),e=c.size!==0,a=c.clear();return e&&H1(c,"clear",void 0,void 0),a}function H6(c,e){return function(r,t){const n=this,s=n.__v_raw,i=r2(s),o=e?E5:c?I5:S4;return!c&&D2(i,"iterate",d3),s.forEach((f,l)=>r.call(t,o(f),o(l),n))}}function z6(c,e,a){return function(...r){const t=this.__v_raw,n=r2(t),s=I3(n),i=c==="entries"||c===Symbol.iterator&&s,o=c==="keys"&&s,f=t[c](...r),l=a?E5:e?I5:S4;return!e&&D2(n,"iterate",o?T8:d3),{next(){const{value:u,done:h}=f.next();return h?{value:u,done:h}:{value:i?[l(u[0]),l(u[1])]:l(u),done:h}},[Symbol.iterator](){return this}}}}function S1(c){return function(...e){return c==="delete"?!1:this}}function fm(){const c={get(n){return d6(this,n)},get size(){return v6(this)},has:p6,add:w7,set:N7,delete:S7,clear:k7,forEach:H6(!1,!1)},e={get(n){return d6(this,n,!1,!0)},get size(){return v6(this)},has:p6,add:w7,set:N7,delete:S7,clear:k7,forEach:H6(!1,!0)},a={get(n){return d6(this,n,!0)},get size(){return v6(this,!0)},has(n){return p6.call(this,n,!0)},add:S1("add"),set:S1("set"),delete:S1("delete"),clear:S1("clear"),forEach:H6(!0,!1)},r={get(n){return d6(this,n,!0,!0)},get size(){return v6(this,!0)},has(n){return p6.call(this,n,!0)},add:S1("add"),set:S1("set"),delete:S1("delete"),clear:S1("clear"),forEach:H6(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{c[n]=z6(n,!1,!1),a[n]=z6(n,!0,!1),e[n]=z6(n,!1,!0),r[n]=z6(n,!0,!0)}),[c,a,e,r]}const[um,hm,mm,dm]=fm();function P5(c,e){const a=e?c?dm:mm:c?hm:um;return(r,t,n)=>t==="__v_isReactive"?!c:t==="__v_isReadonly"?c:t==="__v_raw"?r:Reflect.get(a2(a,t)&&t in r?a:r,t,n)}const pm={get:P5(!1,!1)},vm={get:P5(!1,!0)},Hm={get:P5(!0,!1)},s9=new WeakMap,i9=new WeakMap,o9=new WeakMap,zm=new WeakMap;function Vm(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gm(c){return c.__v_skip||!Object.isExtensible(c)?0:Vm(Bh(c))}function z1(c){return z3(c)?c:R5(c,!1,im,pm,s9)}function g0(c){return R5(c,!1,lm,vm,i9)}function l9(c){return R5(c,!0,om,Hm,o9)}function R5(c,e,a,r,t){if(!u2(c)||c.__v_raw&&!(e&&c.__v_isReactive))return c;const n=t.get(c);if(n)return n;const s=gm(c);if(s===0)return c;const i=new Proxy(c,s===2?r:a);return t.set(c,i),i}function D3(c){return z3(c)?D3(c.__v_raw):!!(c&&c.__v_isReactive)}function z3(c){return!!(c&&c.__v_isReadonly)}function q6(c){return!!(c&&c.__v_isShallow)}function f9(c){return D3(c)||z3(c)}function r2(c){const e=c&&c.__v_raw;return e?r2(e):c}function u9(c){return $6(c,"__v_skip",!0),c}const S4=c=>u2(c)?z1(c):c,I5=c=>u2(c)?l9(c):c;function h9(c){W1&&Y2&&(c=r2(c),a9(c.dep||(c.dep=_5())))}function m9(c,e){c=r2(c);const a=c.dep;a&&E8(a)}function x2(c){return!!(c&&c.__v_isRef===!0)}function $1(c){return d9(c,!1)}function k4(c){return d9(c,!0)}function d9(c,e){return x2(c)?c:new Mm(c,e)}class Mm{constructor(e,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?e:r2(e),this._value=a?e:S4(e)}get value(){return h9(this),this._value}set value(e){const a=this.__v_isShallow||q6(e)||z3(e);e=a?e:r2(e),H3(e,this._rawValue)&&(this._rawValue=e,this._value=a?e:S4(e),m9(this))}}function p2(c){return x2(c)?c.value:c}const Cm={get:(c,e,a)=>p2(Reflect.get(c,e,a)),set:(c,e,a,r)=>{const t=c[e];return x2(t)&&!x2(a)?(t.value=a,!0):Reflect.set(c,e,a,r)}};function p9(c){return D3(c)?c:new Proxy(c,Cm)}class Lm{constructor(e,a,r){this._object=e,this._key=a,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return am(r2(this._object),this._key)}}class bm{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function ym(c,e,a){return x2(c)?c:J(c)?new bm(c):u2(c)&&arguments.length>1?xm(c,e,a):$1(c)}function xm(c,e,a){const r=c[e];return x2(r)?r:new Lm(c,e,a)}class wm{constructor(e,a,r,t){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new T5(e,()=>{this._dirty||(this._dirty=!0,m9(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!t,this.__v_isReadonly=r}get value(){const e=r2(this);return h9(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Nm(c,e,a=!1){let r,t;const n=J(c);return n?(r=c,t=Z2):(r=c.get,t=c.set),new wm(r,t,n||!t,a)}function j1(c,e,a,r){let t;try{t=r?c(...r):c()}catch(n){s4(n,e,a)}return t}function q2(c,e,a,r){if(J(c)){const n=j1(c,e,a,r);return n&&qa(n)&&n.catch(s=>{s4(s,e,a)}),n}const t=[];for(let n=0;n<c.length;n++)t.push(q2(c[n],e,a,r));return t}function s4(c,e,a,r=!0){const t=e?e.vnode:null;if(e){let n=e.parent;const s=e.proxy,i=a;for(;n;){const f=n.ec;if(f){for(let l=0;l<f.length;l++)if(f[l](c,s,i)===!1)return}n=n.parent}const o=e.appContext.config.errorHandler;if(o){j1(o,null,10,[c,s,i]);return}}Sm(c,a,t,r)}function Sm(c,e,a,r=!0){console.error(c)}let A4=!1,P8=!1;const S2=[];let n1=0;const O3=[];let h1=null,i3=0;const v9=Promise.resolve();let D5=null;function i4(c){const e=D5||v9;return c?e.then(this?c.bind(this):c):e}function km(c){let e=n1+1,a=S2.length;for(;e<a;){const r=e+a>>>1;_4(S2[r])<c?e=r+1:a=r}return e}function M0(c){(!S2.length||!S2.includes(c,A4&&c.allowRecurse?n1+1:n1))&&(c.id==null?S2.push(c):S2.splice(km(c.id),0,c),H9())}function H9(){!A4&&!P8&&(P8=!0,D5=v9.then(V9))}function Am(c){const e=S2.indexOf(c);e>n1&&S2.splice(e,1)}function z9(c){K(c)?O3.push(...c):(!h1||!h1.includes(c,c.allowRecurse?i3+1:i3))&&O3.push(c),H9()}function A7(c,e=A4?n1+1:0){for(;e<S2.length;e++){const a=S2[e];a&&a.pre&&(S2.splice(e,1),e--,a())}}function G6(c){if(O3.length){const e=[...new Set(O3)];if(O3.length=0,h1){h1.push(...e);return}for(h1=e,h1.sort((a,r)=>_4(a)-_4(r)),i3=0;i3<h1.length;i3++)h1[i3]();h1=null,i3=0}}const _4=c=>c.id==null?1/0:c.id,_m=(c,e)=>{const a=_4(c)-_4(e);if(a===0){if(c.pre&&!e.pre)return-1;if(e.pre&&!c.pre)return 1}return a};function V9(c){P8=!1,A4=!0,S2.sort(_m);const e=Z2;try{for(n1=0;n1<S2.length;n1++){const a=S2[n1];a&&a.active!==!1&&j1(a,null,14)}}finally{n1=0,S2.length=0,G6(),A4=!1,D5=null,(S2.length||O3.length)&&V9()}}function Tm(c,e,...a){if(c.isUnmounted)return;const r=c.vnode.props||h2;let t=a;const n=e.startsWith("update:"),s=n&&e.slice(7);if(s&&s in r){const l=`${s==="modelValue"?"model":s}Modifiers`,{number:u,trim:h}=r[l]||h2;h&&(t=a.map(p=>v2(p)?p.trim():p)),u&&(t=a.map(Wh))}let i,o=r[i=r8(e)]||r[i=r8(l1(e))];!o&&n&&(o=r[i=r8(r4(e))]),o&&q2(o,c,6,t);const f=r[i+"Once"];if(f){if(!c.emitted)c.emitted={};else if(c.emitted[i])return;c.emitted[i]=!0,q2(f,c,6,t)}}function g9(c,e,a=!1){const r=e.emitsCache,t=r.get(c);if(t!==void 0)return t;const n=c.emits;let s={},i=!1;if(!J(c)){const o=f=>{const l=g9(f,e,!0);l&&(i=!0,L2(s,l))};!a&&e.mixins.length&&e.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}return!n&&!i?(u2(c)&&r.set(c,null),null):(K(n)?n.forEach(o=>s[o]=null):L2(s,n),u2(c)&&r.set(c,s),s)}function C0(c,e){return!c||!G4(e)?!1:(e=e.slice(2).replace(/Once$/,""),a2(c,e[0].toLowerCase()+e.slice(1))||a2(c,r4(e))||a2(c,e))}let R2=null,L0=null;function K6(c){const e=R2;return R2=c,L0=c&&c.type.__scopeId||null,e}function uQ(c){L0=c}function hQ(){L0=null}function M9(c,e=R2,a){if(!e||c._n)return c;const r=(...t)=>{r._d&&j7(-1);const n=K6(e);let s;try{s=c(...t)}finally{K6(n),r._d&&j7(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function t8(c){const{type:e,vnode:a,proxy:r,withProxy:t,props:n,propsOptions:[s],slots:i,attrs:o,emit:f,render:l,renderCache:u,data:h,setupState:p,ctx:g,inheritAttrs:C}=c;let N,v;const m=K6(c);try{if(a.shapeFlag&4){const z=t||r;N=$2(l.call(z,z,u,n,p,h,g)),v=o}else{const z=e;N=$2(z.length>1?z(n,{attrs:o,slots:i,emit:f}):z(n,null)),v=e.props?o:Pm(o)}}catch(z){M4.length=0,s4(z,c,1),N=V2(I2)}let M=N;if(v&&C!==!1){const z=Object.keys(v),{shapeFlag:b}=M;z.length&&b&7&&(s&&z.some(N5)&&(v=Rm(v,s)),M=V1(M,v))}return a.dirs&&(M=V1(M),M.dirs=M.dirs?M.dirs.concat(a.dirs):a.dirs),a.transition&&(M.transition=a.transition),N=M,K6(m),N}function Em(c){let e;for(let a=0;a<c.length;a++){const r=c[a];if(P4(r)){if(r.type!==I2||r.children==="v-if"){if(e)return;e=r}}else return}return e}const Pm=c=>{let e;for(const a in c)(a==="class"||a==="style"||G4(a))&&((e||(e={}))[a]=c[a]);return e},Rm=(c,e)=>{const a={};for(const r in c)(!N5(r)||!(r.slice(9)in e))&&(a[r]=c[r]);return a};function Im(c,e,a){const{props:r,children:t,component:n}=c,{props:s,children:i,patchFlag:o}=e,f=n.emitsOptions;if(e.dirs||e.transition)return!0;if(a&&o>=0){if(o&1024)return!0;if(o&16)return r?_7(r,s,f):!!s;if(o&8){const l=e.dynamicProps;for(let u=0;u<l.length;u++){const h=l[u];if(s[h]!==r[h]&&!C0(f,h))return!0}}}else return(t||i)&&(!i||!i.$stable)?!0:r===s?!1:r?s?_7(r,s,f):!0:!!s;return!1}function _7(c,e,a){const r=Object.keys(e);if(r.length!==Object.keys(c).length)return!0;for(let t=0;t<r.length;t++){const n=r[t];if(e[n]!==c[n]&&!C0(a,n))return!0}return!1}function O5({vnode:c,parent:e},a){for(;e&&e.subTree===c;)(c=e.vnode).el=a,e=e.parent}const C9=c=>c.__isSuspense,Dm={name:"Suspense",__isSuspense:!0,process(c,e,a,r,t,n,s,i,o,f){c==null?Om(e,a,r,t,n,s,i,o,f):Bm(c,e,a,r,t,s,i,o,f)},hydrate:Fm,create:B5,normalize:Um},L9=Dm;function T4(c,e){const a=c.props&&c.props[e];J(a)&&a()}function Om(c,e,a,r,t,n,s,i,o){const{p:f,o:{createElement:l}}=o,u=l("div"),h=c.suspense=B5(c,t,r,e,u,a,n,s,i,o);f(null,h.pendingBranch=c.ssContent,u,null,r,h,n,s),h.deps>0?(T4(c,"onPending"),T4(c,"onFallback"),f(null,c.ssFallback,e,a,r,null,n,s),B3(h,c.ssFallback)):h.resolve(!1,!0)}function Bm(c,e,a,r,t,n,s,i,{p:o,um:f,o:{createElement:l}}){const u=e.suspense=c.suspense;u.vnode=e,e.el=c.el;const h=e.ssContent,p=e.ssFallback,{activeBranch:g,pendingBranch:C,isInFallback:N,isHydrating:v}=u;if(C)u.pendingBranch=h,J2(h,C)?(o(C,h,u.hiddenContainer,null,t,u,n,s,i),u.deps<=0?u.resolve():N&&(o(g,p,a,r,t,null,n,s,i),B3(u,p))):(u.pendingId++,v?(u.isHydrating=!1,u.activeBranch=C):f(C,t,u),u.deps=0,u.effects.length=0,u.hiddenContainer=l("div"),N?(o(null,h,u.hiddenContainer,null,t,u,n,s,i),u.deps<=0?u.resolve():(o(g,p,a,r,t,null,n,s,i),B3(u,p))):g&&J2(h,g)?(o(g,h,a,r,t,u,n,s,i),u.resolve(!0)):(o(null,h,u.hiddenContainer,null,t,u,n,s,i),u.deps<=0&&u.resolve()));else if(g&&J2(h,g))o(g,h,a,r,t,u,n,s,i),B3(u,h);else if(T4(e,"onPending"),u.pendingBranch=h,u.pendingId++,o(null,h,u.hiddenContainer,null,t,u,n,s,i),u.deps<=0)u.resolve();else{const{timeout:m,pendingId:M}=u;m>0?setTimeout(()=>{u.pendingId===M&&u.fallback(p)},m):m===0&&u.fallback(p)}}function B5(c,e,a,r,t,n,s,i,o,f,l=!1){const{p:u,m:h,um:p,n:g,o:{parentNode:C,remove:N}}=f;let v;const m=Wm(c);m&&e!=null&&e.pendingBranch&&(v=e.pendingId,e.deps++);const M=c.props?Xa(c.props.timeout):void 0,z={vnode:c,parent:e,parentComponent:a,isSVG:s,container:r,hiddenContainer:t,anchor:n,deps:0,pendingId:0,timeout:typeof M=="number"?M:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:l,isUnmounted:!1,effects:[],resolve(b=!1,A=!1){const{vnode:_,activeBranch:w,pendingBranch:I,pendingId:U,effects:Y,parentComponent:D,container:X}=z;if(z.isHydrating)z.isHydrating=!1;else if(!b){const e2=w&&I.transition&&I.transition.mode==="out-in";e2&&(w.transition.afterLeave=()=>{U===z.pendingId&&h(I,X,t2,0)});let{anchor:t2}=z;w&&(t2=g(w),p(w,D,z,!0)),e2||h(I,X,t2,0)}B3(z,I),z.pendingBranch=null,z.isInFallback=!1;let F=z.parent,g2=!1;for(;F;){if(F.pendingBranch){F.effects.push(...Y),g2=!0;break}F=F.parent}g2||z9(Y),z.effects=[],m&&e&&e.pendingBranch&&v===e.pendingId&&(e.deps--,e.deps===0&&!A&&e.resolve()),T4(_,"onResolve")},fallback(b){if(!z.pendingBranch)return;const{vnode:A,activeBranch:_,parentComponent:w,container:I,isSVG:U}=z;T4(A,"onFallback");const Y=g(_),D=()=>{z.isInFallback&&(u(null,b,I,Y,w,null,U,i,o),B3(z,b))},X=b.transition&&b.transition.mode==="out-in";X&&(_.transition.afterLeave=D),z.isInFallback=!0,p(_,w,null,!0),X||D()},move(b,A,_){z.activeBranch&&h(z.activeBranch,b,A,_),z.container=b},next(){return z.activeBranch&&g(z.activeBranch)},registerDep(b,A){const _=!!z.pendingBranch;_&&z.deps++;const w=b.vnode.el;b.asyncDep.catch(I=>{s4(I,b,0)}).then(I=>{if(b.isUnmounted||z.isUnmounted||z.pendingId!==b.suspenseId)return;b.asyncResolved=!0;const{vnode:U}=b;F8(b,I,!1),w&&(U.el=w);const Y=!w&&b.subTree.el;A(b,U,C(w||b.subTree.el),w?null:g(b.subTree),z,s,o),Y&&N(Y),O5(b,U.el),_&&--z.deps===0&&z.resolve()})},unmount(b,A){z.isUnmounted=!0,z.activeBranch&&p(z.activeBranch,a,b,A),z.pendingBranch&&p(z.pendingBranch,a,b,A)}};return z}function Fm(c,e,a,r,t,n,s,i,o){const f=e.suspense=B5(e,r,a,c.parentNode,document.createElement("div"),null,t,n,s,i,!0),l=o(c,f.pendingBranch=e.ssContent,a,f,n,s);return f.deps===0&&f.resolve(!1,!0),l}function Um(c){const{shapeFlag:e,children:a}=c,r=e&32;c.ssContent=T7(r?a.default:a),c.ssFallback=r?T7(a.fallback):V2(I2)}function T7(c){let e;if(J(c)){const a=X3&&c._c;a&&(c._d=!1,m1()),c=c(),a&&(c._d=!0,e=j2,$9())}return K(c)&&(c=Em(c)),c=$2(c),e&&!c.dynamicChildren&&(c.dynamicChildren=e.filter(a=>a!==c)),c}function b9(c,e){e&&e.pendingBranch?K(c)?e.effects.push(...c):e.effects.push(c):z9(c)}function B3(c,e){c.activeBranch=e;const{vnode:a,parentComponent:r}=c,t=a.el=e.el;r&&r.subTree===a&&(r.vnode.el=t,O5(r,t))}function Wm(c){var e;return((e=c.props)==null?void 0:e.suspensible)!=null&&c.props.suspensible!==!1}function mQ(c,e){return b0(c,null,e)}function $m(c,e){return b0(c,null,{flush:"post"})}const V6={};function F3(c,e,a){return b0(c,e,a)}function b0(c,e,{immediate:a,deep:r,flush:t,onTrack:n,onTrigger:s}=h2){var i;const o=Zh()===((i=C2)==null?void 0:i.scope)?C2:null;let f,l=!1,u=!1;if(x2(c)?(f=()=>c.value,l=q6(c)):D3(c)?(f=()=>c,r=!0):K(c)?(u=!0,l=c.some(z=>D3(z)||q6(z)),f=()=>c.map(z=>{if(x2(z))return z.value;if(D3(z))return f3(z);if(J(z))return j1(z,o,2)})):J(c)?e?f=()=>j1(c,o,2):f=()=>{if(!(o&&o.isUnmounted))return h&&h(),q2(c,o,3,[p])}:f=Z2,e&&r){const z=f;f=()=>f3(z())}let h,p=z=>{h=m.onStop=()=>{j1(z,o,4)}},g;if(J3)if(p=Z2,e?a&&q2(e,o,3,[f(),u?[]:void 0,p]):f(),t==="sync"){const z=Ed();g=z.__watcherHandles||(z.__watcherHandles=[])}else return Z2;let C=u?new Array(c.length).fill(V6):V6;const N=()=>{if(m.active)if(e){const z=m.run();(r||l||(u?z.some((b,A)=>H3(b,C[A])):H3(z,C)))&&(h&&h(),q2(e,o,3,[z,C===V6?void 0:u&&C[0]===V6?[]:C,p]),C=z)}else m.run()};N.allowRecurse=!!e;let v;t==="sync"?v=N:t==="post"?v=()=>w2(N,o&&o.suspense):(N.pre=!0,o&&(N.id=o.uid),v=()=>M0(N));const m=new T5(f,v);e?a?N():C=m.run():t==="post"?w2(m.run.bind(m),o&&o.suspense):m.run();const M=()=>{m.stop(),o&&o.scope&&S5(o.scope.effects,m)};return g&&g.push(M),M}function jm(c,e,a){const r=this.proxy,t=v2(c)?c.includes(".")?y9(r,c):()=>r[c]:c.bind(r,r);let n;J(e)?n=e:(n=e.handler,a=e);const s=C2;Y3(this);const i=b0(t,n.bind(r),a);return s?Y3(s):p3(),i}function y9(c,e){const a=e.split(".");return()=>{let r=c;for(let t=0;t<a.length&&r;t++)r=r[a[t]];return r}}function f3(c,e){if(!u2(c)||c.__v_skip||(e=e||new Set,e.has(c)))return c;if(e.add(c),x2(c))f3(c.value,e);else if(K(c))for(let a=0;a<c.length;a++)f3(c[a],e);else if(ja(c)||I3(c))c.forEach(a=>{f3(a,e)});else if(Ka(c))for(const a in c)f3(c[a],e);return c}function dQ(c,e){const a=R2;if(a===null)return c;const r=S0(a)||a.proxy,t=c.dirs||(c.dirs=[]);for(let n=0;n<e.length;n++){let[s,i,o,f=h2]=e[n];s&&(J(s)&&(s={mounted:s,updated:s}),s.deep&&f3(i),t.push({dir:s,instance:r,value:i,oldValue:void 0,arg:o,modifiers:f}))}return c}function t1(c,e,a,r){const t=c.dirs,n=e&&e.dirs;for(let s=0;s<t.length;s++){const i=t[s];n&&(i.oldValue=n[s].value);let o=i.dir[r];o&&(t4(),q2(o,a,8,[c.el,i,c,e]),n4())}}const R1=Symbol("_leaveCb"),g6=Symbol("_enterCb");function qm(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return x0(()=>{c.isMounted=!0}),F5(()=>{c.isUnmounting=!0}),c}const W2=[Function,Array],x9={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:W2,onEnter:W2,onAfterEnter:W2,onEnterCancelled:W2,onBeforeLeave:W2,onLeave:W2,onAfterLeave:W2,onLeaveCancelled:W2,onBeforeAppear:W2,onAppear:W2,onAfterAppear:W2,onAppearCancelled:W2},Gm={name:"BaseTransition",props:x9,setup(c,{slots:e}){const a=N0(),r=qm();let t;return()=>{const n=e.default&&N9(e.default(),!0);if(!n||!n.length)return;let s=n[0];if(n.length>1){for(const C of n)if(C.type!==I2){s=C;break}}const i=r2(c),{mode:o}=i;if(r.isLeaving)return n8(s);const f=E7(s);if(!f)return n8(s);const l=R8(f,i,r,a);X6(f,l);const u=a.subTree,h=u&&E7(u);let p=!1;const{getTransitionKey:g}=f.type;if(g){const C=g();t===void 0?t=C:C!==t&&(t=C,p=!0)}if(h&&h.type!==I2&&(!J2(f,h)||p)){const C=R8(h,i,r,a);if(X6(h,C),o==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,a.update.active!==!1&&a.update()},n8(s);o==="in-out"&&f.type!==I2&&(C.delayLeave=(N,v,m)=>{const M=w9(r,h);M[String(h.key)]=h,N[R1]=()=>{v(),N[R1]=void 0,delete l.delayedLeave},l.delayedLeave=m})}return s}}},Km=Gm;function w9(c,e){const{leavingVNodes:a}=c;let r=a.get(e.type);return r||(r=Object.create(null),a.set(e.type,r)),r}function R8(c,e,a,r){const{appear:t,mode:n,persisted:s=!1,onBeforeEnter:i,onEnter:o,onAfterEnter:f,onEnterCancelled:l,onBeforeLeave:u,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:C,onAppear:N,onAfterAppear:v,onAppearCancelled:m}=e,M=String(c.key),z=w9(a,c),b=(w,I)=>{w&&q2(w,r,9,I)},A=(w,I)=>{const U=I[1];b(w,I),K(w)?w.every(Y=>Y.length<=1)&&U():w.length<=1&&U()},_={mode:n,persisted:s,beforeEnter(w){let I=i;if(!a.isMounted)if(t)I=C||i;else return;w[R1]&&w[R1](!0);const U=z[M];U&&J2(c,U)&&U.el[R1]&&U.el[R1](),b(I,[w])},enter(w){let I=o,U=f,Y=l;if(!a.isMounted)if(t)I=N||o,U=v||f,Y=m||l;else return;let D=!1;const X=w[g6]=F=>{D||(D=!0,F?b(Y,[w]):b(U,[w]),_.delayedLeave&&_.delayedLeave(),w[g6]=void 0)};I?A(I,[w,X]):X()},leave(w,I){const U=String(c.key);if(w[g6]&&w[g6](!0),a.isUnmounting)return I();b(u,[w]);let Y=!1;const D=w[R1]=X=>{Y||(Y=!0,I(),X?b(g,[w]):b(p,[w]),w[R1]=void 0,z[U]===c&&delete z[U])};z[U]=c,h?A(h,[w,D]):D()},clone(w){return R8(w,e,a,r)}};return _}function n8(c){if(X4(c))return c=V1(c),c.children=null,c}function E7(c){return X4(c)?c.children?c.children[0]:void 0:c}function X6(c,e){c.shapeFlag&6&&c.component?X6(c.component.subTree,e):c.shapeFlag&128?(c.ssContent.transition=e.clone(c.ssContent),c.ssFallback.transition=e.clone(c.ssFallback)):c.transition=e}function N9(c,e=!1,a){let r=[],t=0;for(let n=0;n<c.length;n++){let s=c[n];const i=a==null?s.key:String(a)+String(s.key!=null?s.key:n);s.type===B2?(s.patchFlag&128&&t++,r=r.concat(N9(s.children,e,i))):(e||s.type!==I2)&&r.push(i!=null?V1(s,{key:i}):s)}if(t>1)for(let n=0;n<r.length;n++)r[n].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function b3(c,e){return J(c)?(()=>L2({name:c.name},e,{setup:c}))():c}const U3=c=>!!c.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function P7(c){J(c)&&(c={loader:c});const{loader:e,loadingComponent:a,errorComponent:r,delay:t=200,timeout:n,suspensible:s=!0,onError:i}=c;let o=null,f,l=0;const u=()=>(l++,o=null,h()),h=()=>{let p;return o||(p=o=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),i)return new Promise((C,N)=>{i(g,()=>C(u()),()=>N(g),l+1)});throw g}).then(g=>p!==o&&o?o:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),f=g,g)))};return b3({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return f},setup(){const p=C2;if(f)return()=>s8(f,p);const g=m=>{o=null,s4(m,p,13,!r)};if(s&&p.suspense||J3)return h().then(m=>()=>s8(m,p)).catch(m=>(g(m),()=>r?V2(r,{error:m}):null));const C=$1(!1),N=$1(),v=$1(!!t);return t&&setTimeout(()=>{v.value=!1},t),n!=null&&setTimeout(()=>{if(!C.value&&!N.value){const m=new Error(`Async component timed out after ${n}ms.`);g(m),N.value=m}},n),h().then(()=>{C.value=!0,p.parent&&X4(p.parent.vnode)&&M0(p.parent.update)}).catch(m=>{g(m),N.value=m}),()=>{if(C.value&&f)return s8(f,p);if(N.value&&r)return V2(r,{error:N.value});if(a&&!v.value)return V2(a)}}})}function s8(c,e){const{ref:a,props:r,children:t,ce:n}=e.vnode,s=V2(c,r,t);return s.ref=a,s.ce=n,delete e.vnode.ce,s}const X4=c=>c.type.__isKeepAlive,Xm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(c,{slots:e}){const a=N0(),r=a.ctx;if(!r.renderer)return()=>{const m=e.default&&e.default();return m&&m.length===1?m[0]:m};const t=new Map,n=new Set;let s=null;const i=a.suspense,{renderer:{p:o,m:f,um:l,o:{createElement:u}}}=r,h=u("div");r.activate=(m,M,z,b,A)=>{const _=m.component;f(m,M,z,0,i),o(_.vnode,m,M,z,_,i,b,m.slotScopeIds,A),w2(()=>{_.isDeactivated=!1,_.a&&z4(_.a);const w=m.props&&m.props.onVnodeMounted;w&&P2(w,_.parent,m)},i)},r.deactivate=m=>{const M=m.component;f(m,h,null,1,i),w2(()=>{M.da&&z4(M.da);const z=m.props&&m.props.onVnodeUnmounted;z&&P2(z,M.parent,m),M.isDeactivated=!0},i)};function p(m){i8(m),l(m,a,i,!0)}function g(m){t.forEach((M,z)=>{const b=U8(M.type);b&&(!m||!m(b))&&C(z)})}function C(m){const M=t.get(m);!s||!J2(M,s)?p(M):s&&i8(s),t.delete(m),n.delete(m)}F3(()=>[c.include,c.exclude],([m,M])=>{m&&g(z=>d4(m,z)),M&&g(z=>!d4(M,z))},{flush:"post",deep:!0});let N=null;const v=()=>{N!=null&&t.set(N,o8(a.subTree))};return x0(v),k9(v),F5(()=>{t.forEach(m=>{const{subTree:M,suspense:z}=a,b=o8(M);if(m.type===b.type&&m.key===b.key){i8(b);const A=b.component.da;A&&w2(A,z);return}p(m)})}),()=>{if(N=null,!e.default)return null;const m=e.default(),M=m[0];if(m.length>1)return s=null,m;if(!P4(M)||!(M.shapeFlag&4)&&!(M.shapeFlag&128))return s=null,M;let z=o8(M);const b=z.type,A=U8(U3(z)?z.type.__asyncResolved||{}:b),{include:_,exclude:w,max:I}=c;if(_&&(!A||!d4(_,A))||w&&A&&d4(w,A))return s=z,M;const U=z.key==null?b:z.key,Y=t.get(U);return z.el&&(z=V1(z),M.shapeFlag&128&&(M.ssContent=z)),N=U,Y?(z.el=Y.el,z.component=Y.component,z.transition&&X6(z,z.transition),z.shapeFlag|=512,n.delete(U),n.add(U)):(n.add(U),I&&n.size>parseInt(I,10)&&C(n.values().next().value)),z.shapeFlag|=256,s=z,C9(M.type)?M:z}}},pQ=Xm;function d4(c,e){return K(c)?c.some(a=>d4(a,e)):v2(c)?c.split(",").includes(e):Oh(c)?c.test(e):!1}function Ym(c,e){S9(c,"a",e)}function Jm(c,e){S9(c,"da",e)}function S9(c,e,a=C2){const r=c.__wdc||(c.__wdc=()=>{let t=a;for(;t;){if(t.isDeactivated)return;t=t.parent}return c()});if(y0(e,r,a),a){let t=a.parent;for(;t&&t.parent;)X4(t.parent.vnode)&&Qm(r,e,a,t),t=t.parent}}function Qm(c,e,a,r){const t=y0(e,c,r,!0);U5(()=>{S5(r[e],t)},a)}function i8(c){c.shapeFlag&=-257,c.shapeFlag&=-513}function o8(c){return c.shapeFlag&128?c.ssContent:c}function y0(c,e,a=C2,r=!1){if(a){const t=a[c]||(a[c]=[]),n=e.__weh||(e.__weh=(...s)=>{if(a.isUnmounted)return;t4(),Y3(a);const i=q2(e,a,c,s);return p3(),n4(),i});return r?t.unshift(n):t.push(n),n}}const x1=c=>(e,a=C2)=>(!J3||c==="sp")&&y0(c,(...r)=>e(...r),a),Zm=x1("bm"),x0=x1("m"),cd=x1("bu"),k9=x1("u"),F5=x1("bum"),U5=x1("um"),ed=x1("sp"),ad=x1("rtg"),rd=x1("rtc");function A9(c,e=C2){y0("ec",c,e)}const W5="components";function vQ(c,e){return T9(W5,c,!0,e)||c}const _9=Symbol.for("v-ndc");function td(c){return v2(c)?T9(W5,c,!1)||c:c||_9}function T9(c,e,a=!0,r=!1){const t=R2||C2;if(t){const n=t.type;if(c===W5){const i=U8(n,!1);if(i&&(i===e||i===l1(e)||i===v0(l1(e))))return n}const s=R7(t[c]||n[c],e)||R7(t.appContext[c],e);return!s&&r?n:s}}function R7(c,e){return c&&(c[e]||c[l1(e)]||c[v0(l1(e))])}function HQ(c,e,a,r){let t;const n=a&&a[r];if(K(c)||v2(c)){t=new Array(c.length);for(let s=0,i=c.length;s<i;s++)t[s]=e(c[s],s,void 0,n&&n[s])}else if(typeof c=="number"){t=new Array(c);for(let s=0;s<c;s++)t[s]=e(s+1,s,void 0,n&&n[s])}else if(u2(c))if(c[Symbol.iterator])t=Array.from(c,(s,i)=>e(s,i,void 0,n&&n[i]));else{const s=Object.keys(c);t=new Array(s.length);for(let i=0,o=s.length;i<o;i++){const f=s[i];t[i]=e(c[f],f,i,n&&n[i])}}else t=[];return a&&(a[r]=t),t}const I8=c=>c?J9(c)?S0(c)||c.proxy:I8(c.parent):null,V4=L2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>I8(c.parent),$root:c=>I8(c.root),$emit:c=>c.emit,$options:c=>$5(c),$forceUpdate:c=>c.f||(c.f=()=>M0(c.update)),$nextTick:c=>c.n||(c.n=i4.bind(c.proxy)),$watch:c=>jm.bind(c)}),l8=(c,e)=>c!==h2&&!c.__isScriptSetup&&a2(c,e),nd={get({_:c},e){const{ctx:a,setupState:r,data:t,props:n,accessCache:s,type:i,appContext:o}=c;let f;if(e[0]!=="$"){const p=s[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return t[e];case 4:return a[e];case 3:return n[e]}else{if(l8(r,e))return s[e]=1,r[e];if(t!==h2&&a2(t,e))return s[e]=2,t[e];if((f=c.propsOptions[0])&&a2(f,e))return s[e]=3,n[e];if(a!==h2&&a2(a,e))return s[e]=4,a[e];D8&&(s[e]=0)}}const l=V4[e];let u,h;if(l)return e==="$attrs"&&D2(c,"get",e),l(c);if((u=i.__cssModules)&&(u=u[e]))return u;if(a!==h2&&a2(a,e))return s[e]=4,a[e];if(h=o.config.globalProperties,a2(h,e))return h[e]},set({_:c},e,a){const{data:r,setupState:t,ctx:n}=c;return l8(t,e)?(t[e]=a,!0):r!==h2&&a2(r,e)?(r[e]=a,!0):a2(c.props,e)||e[0]==="$"&&e.slice(1)in c?!1:(n[e]=a,!0)},has({_:{data:c,setupState:e,accessCache:a,ctx:r,appContext:t,propsOptions:n}},s){let i;return!!a[s]||c!==h2&&a2(c,s)||l8(e,s)||(i=n[0])&&a2(i,s)||a2(r,s)||a2(V4,s)||a2(t.config.globalProperties,s)},defineProperty(c,e,a){return a.get!=null?c._.accessCache[e]=0:a2(a,"value")&&this.set(c,e,a.value,null),Reflect.defineProperty(c,e,a)}};function I7(c){return K(c)?c.reduce((e,a)=>(e[a]=null,e),{}):c}let D8=!0;function sd(c){const e=$5(c),a=c.proxy,r=c.ctx;D8=!1,e.beforeCreate&&D7(e.beforeCreate,c,"bc");const{data:t,computed:n,methods:s,watch:i,provide:o,inject:f,created:l,beforeMount:u,mounted:h,beforeUpdate:p,updated:g,activated:C,deactivated:N,beforeDestroy:v,beforeUnmount:m,destroyed:M,unmounted:z,render:b,renderTracked:A,renderTriggered:_,errorCaptured:w,serverPrefetch:I,expose:U,inheritAttrs:Y,components:D,directives:X,filters:F}=e;if(f&&id(f,r,null),s)for(const t2 in s){const n2=s[t2];J(n2)&&(r[t2]=n2.bind(a))}if(t){const t2=t.call(a,a);u2(t2)&&(c.data=z1(t2))}if(D8=!0,n)for(const t2 in n){const n2=n[t2],f1=J(n2)?n2.bind(a,a):J(n2.get)?n2.get.bind(a,a):Z2,N1=!J(n2)&&J(n2.set)?n2.set.bind(a):Z2,e1=y2({get:f1,set:N1});Object.defineProperty(r,t2,{enumerable:!0,configurable:!0,get:()=>e1.value,set:_2=>e1.value=_2})}if(i)for(const t2 in i)E9(i[t2],r,a,t2);if(o){const t2=J(o)?o.call(a):o;Reflect.ownKeys(t2).forEach(n2=>{W3(n2,t2[n2])})}l&&D7(l,c,"c");function e2(t2,n2){K(n2)?n2.forEach(f1=>t2(f1.bind(a))):n2&&t2(n2.bind(a))}if(e2(Zm,u),e2(x0,h),e2(cd,p),e2(k9,g),e2(Ym,C),e2(Jm,N),e2(A9,w),e2(rd,A),e2(ad,_),e2(F5,m),e2(U5,z),e2(ed,I),K(U))if(U.length){const t2=c.exposed||(c.exposed={});U.forEach(n2=>{Object.defineProperty(t2,n2,{get:()=>a[n2],set:f1=>a[n2]=f1})})}else c.exposed||(c.exposed={});b&&c.render===Z2&&(c.render=b),Y!=null&&(c.inheritAttrs=Y),D&&(c.components=D),X&&(c.directives=X)}function id(c,e,a=Z2){K(c)&&(c=O8(c));for(const r in c){const t=c[r];let n;u2(t)?"default"in t?n=F2(t.from||r,t.default,!0):n=F2(t.from||r):n=F2(t),x2(n)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:s=>n.value=s}):e[r]=n}}function D7(c,e,a){q2(K(c)?c.map(r=>r.bind(e.proxy)):c.bind(e.proxy),e,a)}function E9(c,e,a,r){const t=r.includes(".")?y9(a,r):()=>a[r];if(v2(c)){const n=e[c];J(n)&&F3(t,n)}else if(J(c))F3(t,c.bind(a));else if(u2(c))if(K(c))c.forEach(n=>E9(n,e,a,r));else{const n=J(c.handler)?c.handler.bind(a):e[c.handler];J(n)&&F3(t,n,c)}}function $5(c){const e=c.type,{mixins:a,extends:r}=e,{mixins:t,optionsCache:n,config:{optionMergeStrategies:s}}=c.appContext,i=n.get(e);let o;return i?o=i:!t.length&&!a&&!r?o=e:(o={},t.length&&t.forEach(f=>Y6(o,f,s,!0)),Y6(o,e,s)),u2(e)&&n.set(e,o),o}function Y6(c,e,a,r=!1){const{mixins:t,extends:n}=e;n&&Y6(c,n,a,!0),t&&t.forEach(s=>Y6(c,s,a,!0));for(const s in e)if(!(r&&s==="expose")){const i=od[s]||a&&a[s];c[s]=i?i(c[s],e[s]):e[s]}return c}const od={data:O7,props:B7,emits:B7,methods:p4,computed:p4,beforeCreate:A2,created:A2,beforeMount:A2,mounted:A2,beforeUpdate:A2,updated:A2,beforeDestroy:A2,beforeUnmount:A2,destroyed:A2,unmounted:A2,activated:A2,deactivated:A2,errorCaptured:A2,serverPrefetch:A2,components:p4,directives:p4,watch:fd,provide:O7,inject:ld};function O7(c,e){return e?c?function(){return L2(J(c)?c.call(this,this):c,J(e)?e.call(this,this):e)}:e:c}function ld(c,e){return p4(O8(c),O8(e))}function O8(c){if(K(c)){const e={};for(let a=0;a<c.length;a++)e[c[a]]=c[a];return e}return c}function A2(c,e){return c?[...new Set([].concat(c,e))]:e}function p4(c,e){return c?L2(Object.create(null),c,e):e}function B7(c,e){return c?K(c)&&K(e)?[...new Set([...c,...e])]:L2(Object.create(null),I7(c),I7(e??{})):e}function fd(c,e){if(!c)return e;if(!e)return c;const a=L2(Object.create(null),c);for(const r in e)a[r]=A2(c[r],e[r]);return a}function P9(){return{app:null,config:{isNativeTag:Rh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ud=0;function hd(c,e){return function(r,t=null){J(r)||(r=L2({},r)),t!=null&&!u2(t)&&(t=null);const n=P9(),s=new WeakSet;let i=!1;const o=n.app={_uid:ud++,_component:r,_props:t,_container:null,_context:n,_instance:null,version:Z9,get config(){return n.config},set config(f){},use(f,...l){return s.has(f)||(f&&J(f.install)?(s.add(f),f.install(o,...l)):J(f)&&(s.add(f),f(o,...l))),o},mixin(f){return n.mixins.includes(f)||n.mixins.push(f),o},component(f,l){return l?(n.components[f]=l,o):n.components[f]},directive(f,l){return l?(n.directives[f]=l,o):n.directives[f]},mount(f,l,u){if(!i){const h=V2(r,t);return h.appContext=n,l&&e?e(h,f):c(h,f,u),i=!0,o._container=f,f.__vue_app__=o,S0(h.component)||h.component.proxy}},unmount(){i&&(c(null,o._container),delete o._container.__vue_app__)},provide(f,l){return n.provides[f]=l,o},runWithContext(f){E4=o;try{return f()}finally{E4=null}}};return o}}let E4=null;function W3(c,e){if(C2){let a=C2.provides;const r=C2.parent&&C2.parent.provides;r===a&&(a=C2.provides=Object.create(r)),a[c]=e}}function F2(c,e,a=!1){const r=C2||R2;if(r||E4){const t=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:E4._context.provides;if(t&&c in t)return t[c];if(arguments.length>1)return a&&J(e)?e.call(r&&r.proxy):e}}function R9(){return!!(C2||R2||E4)}function md(c,e,a,r=!1){const t={},n={};$6(n,w0,1),c.propsDefaults=Object.create(null),I9(c,e,t,n);for(const s in c.propsOptions[0])s in t||(t[s]=void 0);a?c.props=r?t:g0(t):c.type.props?c.props=t:c.props=n,c.attrs=n}function dd(c,e,a,r){const{props:t,attrs:n,vnode:{patchFlag:s}}=c,i=r2(t),[o]=c.propsOptions;let f=!1;if((r||s>0)&&!(s&16)){if(s&8){const l=c.vnode.dynamicProps;for(let u=0;u<l.length;u++){let h=l[u];if(C0(c.emitsOptions,h))continue;const p=e[h];if(o)if(a2(n,h))p!==n[h]&&(n[h]=p,f=!0);else{const g=l1(h);t[g]=B8(o,i,g,p,c,!1)}else p!==n[h]&&(n[h]=p,f=!0)}}}else{I9(c,e,t,n)&&(f=!0);let l;for(const u in i)(!e||!a2(e,u)&&((l=r4(u))===u||!a2(e,l)))&&(o?a&&(a[u]!==void 0||a[l]!==void 0)&&(t[u]=B8(o,i,u,void 0,c,!0)):delete t[u]);if(n!==i)for(const u in n)(!e||!a2(e,u))&&(delete n[u],f=!0)}f&&H1(c,"set","$attrs")}function I9(c,e,a,r){const[t,n]=c.propsOptions;let s=!1,i;if(e)for(let o in e){if(H4(o))continue;const f=e[o];let l;t&&a2(t,l=l1(o))?!n||!n.includes(l)?a[l]=f:(i||(i={}))[l]=f:C0(c.emitsOptions,o)||(!(o in r)||f!==r[o])&&(r[o]=f,s=!0)}if(n){const o=r2(a),f=i||h2;for(let l=0;l<n.length;l++){const u=n[l];a[u]=B8(t,o,u,f[u],c,!a2(f,u))}}return s}function B8(c,e,a,r,t,n){const s=c[a];if(s!=null){const i=a2(s,"default");if(i&&r===void 0){const o=s.default;if(s.type!==Function&&!s.skipFactory&&J(o)){const{propsDefaults:f}=t;a in f?r=f[a]:(Y3(t),r=f[a]=o.call(null,e),p3())}else r=o}s[0]&&(n&&!i?r=!1:s[1]&&(r===""||r===r4(a))&&(r=!0))}return r}function D9(c,e,a=!1){const r=e.propsCache,t=r.get(c);if(t)return t;const n=c.props,s={},i=[];let o=!1;if(!J(c)){const l=u=>{o=!0;const[h,p]=D9(u,e,!0);L2(s,h),p&&i.push(...p)};!a&&e.mixins.length&&e.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}if(!n&&!o)return u2(c)&&r.set(c,R3),R3;if(K(n))for(let l=0;l<n.length;l++){const u=l1(n[l]);F7(u)&&(s[u]=h2)}else if(n)for(const l in n){const u=l1(l);if(F7(u)){const h=n[l],p=s[u]=K(h)||J(h)?{type:h}:L2({},h);if(p){const g=$7(Boolean,p.type),C=$7(String,p.type);p[0]=g>-1,p[1]=C<0||g<C,(g>-1||a2(p,"default"))&&i.push(u)}}}const f=[s,i];return u2(c)&&r.set(c,f),f}function F7(c){return c[0]!=="$"}function U7(c){const e=c&&c.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:c===null?"null":""}function W7(c,e){return U7(c)===U7(e)}function $7(c,e){return K(e)?e.findIndex(a=>W7(a,c)):J(e)&&W7(e,c)?0:-1}const O9=c=>c[0]==="_"||c==="$stable",j5=c=>K(c)?c.map($2):[$2(c)],pd=(c,e,a)=>{if(e._n)return e;const r=M9((...t)=>j5(e(...t)),a);return r._c=!1,r},B9=(c,e,a)=>{const r=c._ctx;for(const t in c){if(O9(t))continue;const n=c[t];if(J(n))e[t]=pd(t,n,r);else if(n!=null){const s=j5(n);e[t]=()=>s}}},F9=(c,e)=>{const a=j5(e);c.slots.default=()=>a},vd=(c,e)=>{if(c.vnode.shapeFlag&32){const a=e._;a?(c.slots=r2(e),$6(e,"_",a)):B9(e,c.slots={})}else c.slots={},e&&F9(c,e);$6(c.slots,w0,1)},Hd=(c,e,a)=>{const{vnode:r,slots:t}=c;let n=!0,s=h2;if(r.shapeFlag&32){const i=e._;i?a&&i===1?n=!1:(L2(t,e),!a&&i===1&&delete t._):(n=!e.$stable,B9(e,t)),s=e}else e&&(F9(c,e),s={default:1});if(n)for(const i in t)!O9(i)&&s[i]==null&&delete t[i]};function J6(c,e,a,r,t=!1){if(K(c)){c.forEach((h,p)=>J6(h,e&&(K(e)?e[p]:e),a,r,t));return}if(U3(r)&&!t)return;const n=r.shapeFlag&4?S0(r.component)||r.component.proxy:r.el,s=t?null:n,{i,r:o}=c,f=e&&e.r,l=i.refs===h2?i.refs={}:i.refs,u=i.setupState;if(f!=null&&f!==o&&(v2(f)?(l[f]=null,a2(u,f)&&(u[f]=null)):x2(f)&&(f.value=null)),J(o))j1(o,i,12,[s,l]);else{const h=v2(o),p=x2(o);if(h||p){const g=()=>{if(c.f){const C=h?a2(u,o)?u[o]:l[o]:o.value;t?K(C)&&S5(C,n):K(C)?C.includes(n)||C.push(n):h?(l[o]=[n],a2(u,o)&&(u[o]=l[o])):(o.value=[n],c.k&&(l[c.k]=o.value))}else h?(l[o]=s,a2(u,o)&&(u[o]=s)):p&&(o.value=s,c.k&&(l[c.k]=s))};s?(g.id=-1,w2(g,a)):g()}}}let k1=!1;const M6=c=>/svg/.test(c.namespaceURI)&&c.tagName!=="foreignObject",C6=c=>c.nodeType===8;function zd(c){const{mt:e,p:a,o:{patchProp:r,createText:t,nextSibling:n,parentNode:s,remove:i,insert:o,createComment:f}}=c,l=(v,m)=>{if(!m.hasChildNodes()){a(null,v,m),G6(),m._vnode=v;return}k1=!1,u(m.firstChild,v,null,null,null),G6(),m._vnode=v,k1&&console.error("Hydration completed but contains mismatches.")},u=(v,m,M,z,b,A=!1)=>{const _=C6(v)&&v.data==="[",w=()=>C(v,m,M,z,b,_),{type:I,ref:U,shapeFlag:Y,patchFlag:D}=m;let X=v.nodeType;m.el=v,D===-2&&(A=!1,m.dynamicChildren=null);let F=null;switch(I){case K3:X!==3?m.children===""?(o(m.el=t(""),s(v),v),F=v):F=w():(v.data!==m.children&&(k1=!0,v.data=m.children),F=n(v));break;case I2:X!==8||_?F=w():F=n(v);break;case g4:if(_&&(v=n(v),X=v.nodeType),X===1||X===3){F=v;const g2=!m.children.length;for(let e2=0;e2<m.staticCount;e2++)g2&&(m.children+=F.nodeType===1?F.outerHTML:F.data),e2===m.staticCount-1&&(m.anchor=F),F=n(F);return _?n(F):F}else w();break;case B2:_?F=g(v,m,M,z,b,A):F=w();break;default:if(Y&1)X!==1||m.type.toLowerCase()!==v.tagName.toLowerCase()?F=w():F=h(v,m,M,z,b,A);else if(Y&6){m.slotScopeIds=b;const g2=s(v);if(e(m,g2,null,M,z,M6(g2),A),F=_?N(v):n(v),F&&C6(F)&&F.data==="teleport end"&&(F=n(F)),U3(m)){let e2;_?(e2=V2(B2),e2.anchor=F?F.previousSibling:g2.lastChild):e2=v.nodeType===3?X9(""):V2("div"),e2.el=v,m.component.subTree=e2}}else Y&64?X!==8?F=w():F=m.type.hydrate(v,m,M,z,b,A,c,p):Y&128&&(F=m.type.hydrate(v,m,M,z,M6(s(v)),b,A,c,u))}return U!=null&&J6(U,null,z,m),F},h=(v,m,M,z,b,A)=>{A=A||!!m.dynamicChildren;const{type:_,props:w,patchFlag:I,shapeFlag:U,dirs:Y}=m,D=_==="input"&&Y||_==="option";if(D||I!==-1){if(Y&&t1(m,null,M,"created"),w)if(D||!A||I&48)for(const F in w)(D&&F.endsWith("value")||G4(F)&&!H4(F))&&r(v,F,null,w[F],!1,void 0,M);else w.onClick&&r(v,"onClick",null,w.onClick,!1,void 0,M);let X;if((X=w&&w.onVnodeBeforeMount)&&P2(X,M,m),Y&&t1(m,null,M,"beforeMount"),((X=w&&w.onVnodeMounted)||Y)&&b9(()=>{X&&P2(X,M,m),Y&&t1(m,null,M,"mounted")},z),U&16&&!(w&&(w.innerHTML||w.textContent))){let F=p(v.firstChild,m,v,M,z,b,A);for(;F;){k1=!0;const g2=F;F=F.nextSibling,i(g2)}}else U&8&&v.textContent!==m.children&&(k1=!0,v.textContent=m.children)}return v.nextSibling},p=(v,m,M,z,b,A,_)=>{_=_||!!m.dynamicChildren;const w=m.children,I=w.length;for(let U=0;U<I;U++){const Y=_?w[U]:w[U]=$2(w[U]);if(v)v=u(v,Y,z,b,A,_);else{if(Y.type===K3&&!Y.children)continue;k1=!0,a(null,Y,M,null,z,b,M6(M),A)}}return v},g=(v,m,M,z,b,A)=>{const{slotScopeIds:_}=m;_&&(b=b?b.concat(_):_);const w=s(v),I=p(n(v),m,w,M,z,b,A);return I&&C6(I)&&I.data==="]"?n(m.anchor=I):(k1=!0,o(m.anchor=f("]"),w,I),I)},C=(v,m,M,z,b,A)=>{if(k1=!0,m.el=null,A){const I=N(v);for(;;){const U=n(v);if(U&&U!==I)i(U);else break}}const _=n(v),w=s(v);return i(v),a(null,m,w,_,M,z,M6(w),b),_},N=v=>{let m=0;for(;v;)if(v=n(v),v&&C6(v)&&(v.data==="["&&m++,v.data==="]")){if(m===0)return n(v);m--}return v};return[l,u]}const w2=b9;function Vd(c){return U9(c)}function gd(c){return U9(c,zd)}function U9(c,e){const a=A8();a.__VUE__=!0;const{insert:r,remove:t,patchProp:n,createElement:s,createText:i,createComment:o,setText:f,setElementText:l,parentNode:u,nextSibling:h,setScopeId:p=Z2,insertStaticContent:g}=c,C=(d,H,V,L=null,x=null,S=null,R=!1,T=null,E=!!H.dynamicChildren)=>{if(d===H)return;d&&!J2(d,H)&&(L=y(d),_2(d,x,S,!0),d=null),H.patchFlag===-2&&(E=!1,H.dynamicChildren=null);const{type:k,ref:q,shapeFlag:W}=H;switch(k){case K3:N(d,H,V,L);break;case I2:v(d,H,V,L);break;case g4:d==null&&m(H,V,L,R);break;case B2:D(d,H,V,L,x,S,R,T,E);break;default:W&1?b(d,H,V,L,x,S,R,T,E):W&6?X(d,H,V,L,x,S,R,T,E):(W&64||W&128)&&k.process(d,H,V,L,x,S,R,T,E,P)}q!=null&&x&&J6(q,d&&d.ref,S,H||d,!H)},N=(d,H,V,L)=>{if(d==null)r(H.el=i(H.children),V,L);else{const x=H.el=d.el;H.children!==d.children&&f(x,H.children)}},v=(d,H,V,L)=>{d==null?r(H.el=o(H.children||""),V,L):H.el=d.el},m=(d,H,V,L)=>{[d.el,d.anchor]=g(d.children,H,V,L,d.el,d.anchor)},M=({el:d,anchor:H},V,L)=>{let x;for(;d&&d!==H;)x=h(d),r(d,V,L),d=x;r(H,V,L)},z=({el:d,anchor:H})=>{let V;for(;d&&d!==H;)V=h(d),t(d),d=V;t(H)},b=(d,H,V,L,x,S,R,T,E)=>{R=R||H.type==="svg",d==null?A(H,V,L,x,S,R,T,E):I(d,H,x,S,R,T,E)},A=(d,H,V,L,x,S,R,T)=>{let E,k;const{type:q,props:W,shapeFlag:G,transition:Q,dirs:c2}=d;if(E=d.el=s(d.type,S,W&&W.is,W),G&8?l(E,d.children):G&16&&w(d.children,E,null,L,x,S&&q!=="foreignObject",R,T),c2&&t1(d,null,L,"created"),_(E,d,d.scopeId,R,L),W){for(const o2 in W)o2!=="value"&&!H4(o2)&&n(E,o2,null,W[o2],S,d.children,L,x,N2);"value"in W&&n(E,"value",null,W.value),(k=W.onVnodeBeforeMount)&&P2(k,L,d)}c2&&t1(d,null,L,"beforeMount");const f2=(!x||x&&!x.pendingBranch)&&Q&&!Q.persisted;f2&&Q.beforeEnter(E),r(E,H,V),((k=W&&W.onVnodeMounted)||f2||c2)&&w2(()=>{k&&P2(k,L,d),f2&&Q.enter(E),c2&&t1(d,null,L,"mounted")},x)},_=(d,H,V,L,x)=>{if(V&&p(d,V),L)for(let S=0;S<L.length;S++)p(d,L[S]);if(x){let S=x.subTree;if(H===S){const R=x.vnode;_(d,R,R.scopeId,R.slotScopeIds,x.parent)}}},w=(d,H,V,L,x,S,R,T,E=0)=>{for(let k=E;k<d.length;k++){const q=d[k]=T?I1(d[k]):$2(d[k]);C(null,q,H,V,L,x,S,R,T)}},I=(d,H,V,L,x,S,R)=>{const T=H.el=d.el;let{patchFlag:E,dynamicChildren:k,dirs:q}=H;E|=d.patchFlag&16;const W=d.props||h2,G=H.props||h2;let Q;V&&e3(V,!1),(Q=G.onVnodeBeforeUpdate)&&P2(Q,V,H,d),q&&t1(H,d,V,"beforeUpdate"),V&&e3(V,!0);const c2=x&&H.type!=="foreignObject";if(k?U(d.dynamicChildren,k,T,V,L,c2,S):R||n2(d,H,T,null,V,L,c2,S,!1),E>0){if(E&16)Y(T,H,W,G,V,L,x);else if(E&2&&W.class!==G.class&&n(T,"class",null,G.class,x),E&4&&n(T,"style",W.style,G.style,x),E&8){const f2=H.dynamicProps;for(let o2=0;o2<f2.length;o2++){const M2=f2[o2],K2=W[M2],S3=G[M2];(S3!==K2||M2==="value")&&n(T,M2,K2,S3,x,d.children,V,L,N2)}}E&1&&d.children!==H.children&&l(T,H.children)}else!R&&k==null&&Y(T,H,W,G,V,L,x);((Q=G.onVnodeUpdated)||q)&&w2(()=>{Q&&P2(Q,V,H,d),q&&t1(H,d,V,"updated")},L)},U=(d,H,V,L,x,S,R)=>{for(let T=0;T<H.length;T++){const E=d[T],k=H[T],q=E.el&&(E.type===B2||!J2(E,k)||E.shapeFlag&70)?u(E.el):V;C(E,k,q,null,L,x,S,R,!0)}},Y=(d,H,V,L,x,S,R)=>{if(V!==L){if(V!==h2)for(const T in V)!H4(T)&&!(T in L)&&n(d,T,V[T],null,R,H.children,x,S,N2);for(const T in L){if(H4(T))continue;const E=L[T],k=V[T];E!==k&&T!=="value"&&n(d,T,k,E,R,H.children,x,S,N2)}"value"in L&&n(d,"value",V.value,L.value)}},D=(d,H,V,L,x,S,R,T,E)=>{const k=H.el=d?d.el:i(""),q=H.anchor=d?d.anchor:i("");let{patchFlag:W,dynamicChildren:G,slotScopeIds:Q}=H;Q&&(T=T?T.concat(Q):Q),d==null?(r(k,V,L),r(q,V,L),w(H.children,V,q,x,S,R,T,E)):W>0&&W&64&&G&&d.dynamicChildren?(U(d.dynamicChildren,G,V,x,S,R,T),(H.key!=null||x&&H===x.subTree)&&W9(d,H,!0)):n2(d,H,V,q,x,S,R,T,E)},X=(d,H,V,L,x,S,R,T,E)=>{H.slotScopeIds=T,d==null?H.shapeFlag&512?x.ctx.activate(H,V,L,R,E):F(H,V,L,x,S,R,E):g2(d,H,E)},F=(d,H,V,L,x,S,R)=>{const T=d.component=wd(d,L,x);if(X4(d)&&(T.ctx.renderer=P),Nd(T),T.asyncDep){if(x&&x.registerDep(T,e2),!d.el){const E=T.subTree=V2(I2);v(null,E,H,V)}return}e2(T,d,H,V,x,S,R)},g2=(d,H,V)=>{const L=H.component=d.component;if(Im(d,H,V))if(L.asyncDep&&!L.asyncResolved){t2(L,H,V);return}else L.next=H,Am(L.update),L.update();else H.el=d.el,L.vnode=H},e2=(d,H,V,L,x,S,R)=>{const T=()=>{if(d.isMounted){let{next:q,bu:W,u:G,parent:Q,vnode:c2}=d,f2=q,o2;e3(d,!1),q?(q.el=c2.el,t2(d,q,R)):q=c2,W&&z4(W),(o2=q.props&&q.props.onVnodeBeforeUpdate)&&P2(o2,Q,q,c2),e3(d,!0);const M2=t8(d),K2=d.subTree;d.subTree=M2,C(K2,M2,u(K2.el),y(K2),d,x,S),q.el=M2.el,f2===null&&O5(d,M2.el),G&&w2(G,x),(o2=q.props&&q.props.onVnodeUpdated)&&w2(()=>P2(o2,Q,q,c2),x)}else{let q;const{el:W,props:G}=H,{bm:Q,m:c2,parent:f2}=d,o2=U3(H);if(e3(d,!1),Q&&z4(Q),!o2&&(q=G&&G.onVnodeBeforeMount)&&P2(q,f2,H),e3(d,!0),W&&s2){const M2=()=>{d.subTree=t8(d),s2(W,d.subTree,d,x,null)};o2?H.type.__asyncLoader().then(()=>!d.isUnmounted&&M2()):M2()}else{const M2=d.subTree=t8(d);C(null,M2,V,L,d,x,S),H.el=M2.el}if(c2&&w2(c2,x),!o2&&(q=G&&G.onVnodeMounted)){const M2=H;w2(()=>P2(q,f2,M2),x)}(H.shapeFlag&256||f2&&U3(f2.vnode)&&f2.vnode.shapeFlag&256)&&d.a&&w2(d.a,x),d.isMounted=!0,H=V=L=null}},E=d.effect=new T5(T,()=>M0(k),d.scope),k=d.update=()=>E.run();k.id=d.uid,e3(d,!0),k()},t2=(d,H,V)=>{H.component=d;const L=d.vnode.props;d.vnode=H,d.next=null,dd(d,H.props,L,V),Hd(d,H.children,V),t4(),A7(),n4()},n2=(d,H,V,L,x,S,R,T,E=!1)=>{const k=d&&d.children,q=d?d.shapeFlag:0,W=H.children,{patchFlag:G,shapeFlag:Q}=H;if(G>0){if(G&128){N1(k,W,V,L,x,S,R,T,E);return}else if(G&256){f1(k,W,V,L,x,S,R,T,E);return}}Q&8?(q&16&&N2(k,x,S),W!==k&&l(V,W)):q&16?Q&16?N1(k,W,V,L,x,S,R,T,E):N2(k,x,S,!0):(q&8&&l(V,""),Q&16&&w(W,V,L,x,S,R,T,E))},f1=(d,H,V,L,x,S,R,T,E)=>{d=d||R3,H=H||R3;const k=d.length,q=H.length,W=Math.min(k,q);let G;for(G=0;G<W;G++){const Q=H[G]=E?I1(H[G]):$2(H[G]);C(d[G],Q,V,null,x,S,R,T,E)}k>q?N2(d,x,S,!0,!1,W):w(H,V,L,x,S,R,T,E,W)},N1=(d,H,V,L,x,S,R,T,E)=>{let k=0;const q=H.length;let W=d.length-1,G=q-1;for(;k<=W&&k<=G;){const Q=d[k],c2=H[k]=E?I1(H[k]):$2(H[k]);if(J2(Q,c2))C(Q,c2,V,null,x,S,R,T,E);else break;k++}for(;k<=W&&k<=G;){const Q=d[W],c2=H[G]=E?I1(H[G]):$2(H[G]);if(J2(Q,c2))C(Q,c2,V,null,x,S,R,T,E);else break;W--,G--}if(k>W){if(k<=G){const Q=G+1,c2=Q<q?H[Q].el:L;for(;k<=G;)C(null,H[k]=E?I1(H[k]):$2(H[k]),V,c2,x,S,R,T,E),k++}}else if(k>G)for(;k<=W;)_2(d[k],x,S,!0),k++;else{const Q=k,c2=k,f2=new Map;for(k=c2;k<=G;k++){const O2=H[k]=E?I1(H[k]):$2(H[k]);O2.key!=null&&f2.set(O2.key,k)}let o2,M2=0;const K2=G-c2+1;let S3=!1,g7=0;const l4=new Array(K2);for(k=0;k<K2;k++)l4[k]=0;for(k=Q;k<=W;k++){const O2=d[k];if(M2>=K2){_2(O2,x,S,!0);continue}let a1;if(O2.key!=null)a1=f2.get(O2.key);else for(o2=c2;o2<=G;o2++)if(l4[o2-c2]===0&&J2(O2,H[o2])){a1=o2;break}a1===void 0?_2(O2,x,S,!0):(l4[a1-c2]=k+1,a1>=g7?g7=a1:S3=!0,C(O2,H[a1],V,null,x,S,R,T,E),M2++)}const M7=S3?Md(l4):R3;for(o2=M7.length-1,k=K2-1;k>=0;k--){const O2=c2+k,a1=H[O2],C7=O2+1<q?H[O2+1].el:L;l4[k]===0?C(null,a1,V,C7,x,S,R,T,E):S3&&(o2<0||k!==M7[o2]?e1(a1,V,C7,2):o2--)}}},e1=(d,H,V,L,x=null)=>{const{el:S,type:R,transition:T,children:E,shapeFlag:k}=d;if(k&6){e1(d.component.subTree,H,V,L);return}if(k&128){d.suspense.move(H,V,L);return}if(k&64){R.move(d,H,V,P);return}if(R===B2){r(S,H,V);for(let W=0;W<E.length;W++)e1(E[W],H,V,L);r(d.anchor,H,V);return}if(R===g4){M(d,H,V);return}if(L!==2&&k&1&&T)if(L===0)T.beforeEnter(S),r(S,H,V),w2(()=>T.enter(S),x);else{const{leave:W,delayLeave:G,afterLeave:Q}=T,c2=()=>r(S,H,V),f2=()=>{W(S,()=>{c2(),Q&&Q()})};G?G(S,c2,f2):f2()}else r(S,H,V)},_2=(d,H,V,L=!1,x=!1)=>{const{type:S,props:R,ref:T,children:E,dynamicChildren:k,shapeFlag:q,patchFlag:W,dirs:G}=d;if(T!=null&&J6(T,null,V,d,!0),q&256){H.ctx.deactivate(d);return}const Q=q&1&&G,c2=!U3(d);let f2;if(c2&&(f2=R&&R.onVnodeBeforeUnmount)&&P2(f2,H,d),q&6)m6(d.component,V,L);else{if(q&128){d.suspense.unmount(V,L);return}Q&&t1(d,null,H,"beforeUnmount"),q&64?d.type.remove(d,H,V,x,P,L):k&&(S!==B2||W>0&&W&64)?N2(k,H,V,!1,!0):(S===B2&&W&384||!x&&q&16)&&N2(E,H,V),L&&w3(d)}(c2&&(f2=R&&R.onVnodeUnmounted)||Q)&&w2(()=>{f2&&P2(f2,H,d),Q&&t1(d,null,H,"unmounted")},V)},w3=d=>{const{type:H,el:V,anchor:L,transition:x}=d;if(H===B2){N3(V,L);return}if(H===g4){z(d);return}const S=()=>{t(V),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(d.shapeFlag&1&&x&&!x.persisted){const{leave:R,delayLeave:T}=x,E=()=>R(V,S);T?T(d.el,S,E):E()}else S()},N3=(d,H)=>{let V;for(;d!==H;)V=h(d),t(d),d=V;t(H)},m6=(d,H,V)=>{const{bum:L,scope:x,update:S,subTree:R,um:T}=d;L&&z4(L),x.stop(),S&&(S.active=!1,_2(R,d,H,V)),T&&w2(T,H),w2(()=>{d.isUnmounted=!0},H),H&&H.pendingBranch&&!H.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===H.pendingId&&(H.deps--,H.deps===0&&H.resolve())},N2=(d,H,V,L=!1,x=!1,S=0)=>{for(let R=S;R<d.length;R++)_2(d[R],H,V,L,x)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),B=(d,H,V)=>{d==null?H._vnode&&_2(H._vnode,null,null,!0):C(H._vnode||null,d,H,null,null,null,V),A7(),G6(),H._vnode=d},P={p:C,um:_2,m:e1,r:w3,mt:F,mc:w,pc:n2,pbc:U,n:y,o:c};let j,s2;return e&&([j,s2]=e(P)),{render:B,hydrate:j,createApp:hd(B,j)}}function e3({effect:c,update:e},a){c.allowRecurse=e.allowRecurse=a}function W9(c,e,a=!1){const r=c.children,t=e.children;if(K(r)&&K(t))for(let n=0;n<r.length;n++){const s=r[n];let i=t[n];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=t[n]=I1(t[n]),i.el=s.el),a||W9(s,i)),i.type===K3&&(i.el=s.el)}}function Md(c){const e=c.slice(),a=[0];let r,t,n,s,i;const o=c.length;for(r=0;r<o;r++){const f=c[r];if(f!==0){if(t=a[a.length-1],c[t]<f){e[r]=t,a.push(r);continue}for(n=0,s=a.length-1;n<s;)i=n+s>>1,c[a[i]]<f?n=i+1:s=i;f<c[a[n]]&&(n>0&&(e[r]=a[n-1]),a[n]=r)}}for(n=a.length,s=a[n-1];n-- >0;)a[n]=s,s=e[s];return a}const Cd=c=>c.__isTeleport,B2=Symbol.for("v-fgt"),K3=Symbol.for("v-txt"),I2=Symbol.for("v-cmt"),g4=Symbol.for("v-stc"),M4=[];let j2=null;function m1(c=!1){M4.push(j2=c?null:[])}function $9(){M4.pop(),j2=M4[M4.length-1]||null}let X3=1;function j7(c){X3+=c}function j9(c){return c.dynamicChildren=X3>0?j2||R3:null,$9(),X3>0&&j2&&j2.push(c),c}function Ld(c,e,a,r,t,n){return j9(G9(c,e,a,r,t,n,!0))}function o3(c,e,a,r,t){return j9(V2(c,e,a,r,t,!0))}function P4(c){return c?c.__v_isVNode===!0:!1}function J2(c,e){return c.type===e.type&&c.key===e.key}const w0="__vInternal",q9=({key:c})=>c??null,P6=({ref:c,ref_key:e,ref_for:a})=>(typeof c=="number"&&(c=""+c),c!=null?v2(c)||x2(c)||J(c)?{i:R2,r:c,k:e,f:!!a}:c:null);function G9(c,e=null,a=null,r=0,t=null,n=c===B2?0:1,s=!1,i=!1){const o={__v_isVNode:!0,__v_skip:!0,type:c,props:e,key:e&&q9(e),ref:e&&P6(e),scopeId:L0,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:r,dynamicProps:t,dynamicChildren:null,appContext:null,ctx:R2};return i?(q5(o,a),n&128&&c.normalize(o)):a&&(o.shapeFlag|=v2(a)?8:16),X3>0&&!s&&j2&&(o.patchFlag>0||n&6)&&o.patchFlag!==32&&j2.push(o),o}const V2=bd;function bd(c,e=null,a=null,r=0,t=null,n=!1){if((!c||c===_9)&&(c=I2),P4(c)){const i=V1(c,e,!0);return a&&q5(i,a),X3>0&&!n&&j2&&(i.shapeFlag&6?j2[j2.indexOf(c)]=i:j2.push(i)),i.patchFlag|=-2,i}if(_d(c)&&(c=c.__vccOpts),e){e=K9(e);let{class:i,style:o}=e;i&&!v2(i)&&(e.class=z0(i)),u2(o)&&(f9(o)&&!K(o)&&(o=L2({},o)),e.style=H0(o))}const s=v2(c)?1:C9(c)?128:Cd(c)?64:u2(c)?4:J(c)?2:0;return G9(c,e,a,r,t,s,n,!0)}function K9(c){return c?f9(c)||w0 in c?L2({},c):c:null}function V1(c,e,a=!1){const{props:r,ref:t,patchFlag:n,children:s}=c,i=e?Y9(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:i,key:i&&q9(i),ref:e&&e.ref?a&&t?K(t)?t.concat(P6(e)):[t,P6(e)]:P6(e):t,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:s,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:e&&c.type!==B2?n===-1?16:n|16:n,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&V1(c.ssContent),ssFallback:c.ssFallback&&V1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function X9(c=" ",e=0){return V2(K3,null,c,e)}function zQ(c="",e=!1){return e?(m1(),o3(I2,null,c)):V2(I2,null,c)}function $2(c){return c==null||typeof c=="boolean"?V2(I2):K(c)?V2(B2,null,c.slice()):typeof c=="object"?I1(c):V2(K3,null,String(c))}function I1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:V1(c)}function q5(c,e){let a=0;const{shapeFlag:r}=c;if(e==null)e=null;else if(K(e))a=16;else if(typeof e=="object")if(r&65){const t=e.default;t&&(t._c&&(t._d=!1),q5(c,t()),t._c&&(t._d=!0));return}else{a=32;const t=e._;!t&&!(w0 in e)?e._ctx=R2:t===3&&R2&&(R2.slots._===1?e._=1:(e._=2,c.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:R2},a=32):(e=String(e),r&64?(a=16,e=[X9(e)]):a=8);c.children=e,c.shapeFlag|=a}function Y9(...c){const e={};for(let a=0;a<c.length;a++){const r=c[a];for(const t in r)if(t==="class")e.class!==r.class&&(e.class=z0([e.class,r.class]));else if(t==="style")e.style=H0([e.style,r.style]);else if(G4(t)){const n=e[t],s=r[t];s&&n!==s&&!(K(n)&&n.includes(s))&&(e[t]=n?[].concat(n,s):s)}else t!==""&&(e[t]=r[t])}return e}function P2(c,e,a,r=null){q2(c,e,7,[a,r])}const yd=P9();let xd=0;function wd(c,e,a){const r=c.type,t=(e?e.appContext:c.appContext)||yd,n={uid:xd++,vnode:c,type:r,parent:e,appContext:t,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(t.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:D9(r,t),emitsOptions:g9(r,t),emit:null,emitted:null,propsDefaults:h2,inheritAttrs:r.inheritAttrs,ctx:h2,data:h2,props:h2,attrs:h2,slots:h2,refs:h2,setupState:h2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=e?e.root:n,n.emit=Tm.bind(null,n),c.ce&&c.ce(n),n}let C2=null;const N0=()=>C2||R2;let G5,k3,q7="__VUE_INSTANCE_SETTERS__";(k3=A8()[q7])||(k3=A8()[q7]=[]),k3.push(c=>C2=c),G5=c=>{k3.length>1?k3.forEach(e=>e(c)):k3[0](c)};const Y3=c=>{G5(c),c.scope.on()},p3=()=>{C2&&C2.scope.off(),G5(null)};function J9(c){return c.vnode.shapeFlag&4}let J3=!1;function Nd(c,e=!1){J3=e;const{props:a,children:r}=c.vnode,t=J9(c);md(c,a,t,e),vd(c,r);const n=t?Sd(c,e):void 0;return J3=!1,n}function Sd(c,e){const a=c.type;c.accessCache=Object.create(null),c.proxy=u9(new Proxy(c.ctx,nd));const{setup:r}=a;if(r){const t=c.setupContext=r.length>1?Ad(c):null;Y3(c),t4();const n=j1(r,c,0,[c.props,t]);if(n4(),p3(),qa(n)){if(n.then(p3,p3),e)return n.then(s=>{F8(c,s,e)}).catch(s=>{s4(s,c,0)});c.asyncDep=n}else F8(c,n,e)}else Q9(c,e)}function F8(c,e,a){J(e)?c.type.__ssrInlineRender?c.ssrRender=e:c.render=e:u2(e)&&(c.setupState=p9(e)),Q9(c,a)}let G7;function Q9(c,e,a){const r=c.type;if(!c.render){if(!e&&G7&&!r.render){const t=r.template||$5(c).template;if(t){const{isCustomElement:n,compilerOptions:s}=c.appContext.config,{delimiters:i,compilerOptions:o}=r,f=L2(L2({isCustomElement:n,delimiters:i},s),o);r.render=G7(t,f)}}c.render=r.render||Z2}{Y3(c),t4();try{sd(c)}finally{n4(),p3()}}}function kd(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(e,a){return D2(c,"get","$attrs"),e[a]}}))}function Ad(c){const e=a=>{c.exposed=a||{}};return{get attrs(){return kd(c)},slots:c.slots,emit:c.emit,expose:e}}function S0(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(p9(u9(c.exposed)),{get(e,a){if(a in e)return e[a];if(a in V4)return V4[a](c)},has(e,a){return a in e||a in V4}}))}function U8(c,e=!0){return J(c)?c.displayName||c.name:c.name||e&&c.__name}function _d(c){return J(c)&&"__vccOpts"in c}const y2=(c,e)=>Nm(c,e,J3);function g1(c,e,a){const r=arguments.length;return r===2?u2(e)&&!K(e)?P4(e)?V2(c,null,[e]):V2(c,e):V2(c,null,e):(r>3?a=Array.prototype.slice.call(arguments,2):r===3&&P4(a)&&(a=[a]),V2(c,e,a))}const Td=Symbol.for("v-scx"),Ed=()=>F2(Td),Z9="3.3.6",Pd="http://www.w3.org/2000/svg",l3=typeof document<"u"?document:null,K7=l3&&l3.createElement("template"),Rd={insert:(c,e,a)=>{e.insertBefore(c,a||null)},remove:c=>{const e=c.parentNode;e&&e.removeChild(c)},createElement:(c,e,a,r)=>{const t=e?l3.createElementNS(Pd,c):l3.createElement(c,a?{is:a}:void 0);return c==="select"&&r&&r.multiple!=null&&t.setAttribute("multiple",r.multiple),t},createText:c=>l3.createTextNode(c),createComment:c=>l3.createComment(c),setText:(c,e)=>{c.nodeValue=e},setElementText:(c,e)=>{c.textContent=e},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>l3.querySelector(c),setScopeId(c,e){c.setAttribute(e,"")},insertStaticContent(c,e,a,r,t,n){const s=a?a.previousSibling:e.lastChild;if(t&&(t===n||t.nextSibling))for(;e.insertBefore(t.cloneNode(!0),a),!(t===n||!(t=t.nextSibling)););else{K7.innerHTML=r?`<svg>${c}</svg>`:c;const i=K7.content;if(r){const o=i.firstChild;for(;o.firstChild;)i.appendChild(o.firstChild);i.removeChild(o)}e.insertBefore(i,a)}return[s?s.nextSibling:e.firstChild,a?a.previousSibling:e.lastChild]}},A1="transition",f4="animation",R4=Symbol("_vtc"),K5=(c,{slots:e})=>g1(Km,Id(c),e);K5.displayName="Transition";const cr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};K5.props=L2({},x9,cr);const a3=(c,e=[])=>{K(c)?c.forEach(a=>a(...e)):c&&c(...e)},X7=c=>c?K(c)?c.some(e=>e.length>1):c.length>1:!1;function Id(c){const e={};for(const D in c)D in cr||(e[D]=c[D]);if(c.css===!1)return e;const{name:a="v",type:r,duration:t,enterFromClass:n=`${a}-enter-from`,enterActiveClass:s=`${a}-enter-active`,enterToClass:i=`${a}-enter-to`,appearFromClass:o=n,appearActiveClass:f=s,appearToClass:l=i,leaveFromClass:u=`${a}-leave-from`,leaveActiveClass:h=`${a}-leave-active`,leaveToClass:p=`${a}-leave-to`}=c,g=Dd(t),C=g&&g[0],N=g&&g[1],{onBeforeEnter:v,onEnter:m,onEnterCancelled:M,onLeave:z,onLeaveCancelled:b,onBeforeAppear:A=v,onAppear:_=m,onAppearCancelled:w=M}=e,I=(D,X,F)=>{r3(D,X?l:i),r3(D,X?f:s),F&&F()},U=(D,X)=>{D._isLeaving=!1,r3(D,u),r3(D,p),r3(D,h),X&&X()},Y=D=>(X,F)=>{const g2=D?_:m,e2=()=>I(X,D,F);a3(g2,[X,e2]),Y7(()=>{r3(X,D?o:n),_1(X,D?l:i),X7(g2)||J7(X,r,C,e2)})};return L2(e,{onBeforeEnter(D){a3(v,[D]),_1(D,n),_1(D,s)},onBeforeAppear(D){a3(A,[D]),_1(D,o),_1(D,f)},onEnter:Y(!1),onAppear:Y(!0),onLeave(D,X){D._isLeaving=!0;const F=()=>U(D,X);_1(D,u),Fd(),_1(D,h),Y7(()=>{D._isLeaving&&(r3(D,u),_1(D,p),X7(z)||J7(D,r,N,F))}),a3(z,[D,F])},onEnterCancelled(D){I(D,!1),a3(M,[D])},onAppearCancelled(D){I(D,!0),a3(w,[D])},onLeaveCancelled(D){U(D),a3(b,[D])}})}function Dd(c){if(c==null)return null;if(u2(c))return[f8(c.enter),f8(c.leave)];{const e=f8(c);return[e,e]}}function f8(c){return Xa(c)}function _1(c,e){e.split(/\s+/).forEach(a=>a&&c.classList.add(a)),(c[R4]||(c[R4]=new Set)).add(e)}function r3(c,e){e.split(/\s+/).forEach(r=>r&&c.classList.remove(r));const a=c[R4];a&&(a.delete(e),a.size||(c[R4]=void 0))}function Y7(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let Od=0;function J7(c,e,a,r){const t=c._endId=++Od,n=()=>{t===c._endId&&r()};if(a)return setTimeout(n,a);const{type:s,timeout:i,propCount:o}=Bd(c,e);if(!s)return r();const f=s+"end";let l=0;const u=()=>{c.removeEventListener(f,h),n()},h=p=>{p.target===c&&++l>=o&&u()};setTimeout(()=>{l<o&&u()},i+1),c.addEventListener(f,h)}function Bd(c,e){const a=window.getComputedStyle(c),r=g=>(a[g]||"").split(", "),t=r(`${A1}Delay`),n=r(`${A1}Duration`),s=Q7(t,n),i=r(`${f4}Delay`),o=r(`${f4}Duration`),f=Q7(i,o);let l=null,u=0,h=0;e===A1?s>0&&(l=A1,u=s,h=n.length):e===f4?f>0&&(l=f4,u=f,h=o.length):(u=Math.max(s,f),l=u>0?s>f?A1:f4:null,h=l?l===A1?n.length:o.length:0);const p=l===A1&&/\b(transform|all)(,|$)/.test(r(`${A1}Property`).toString());return{type:l,timeout:u,propCount:h,hasTransform:p}}function Q7(c,e){for(;c.length<e.length;)c=c.concat(c);return Math.max(...e.map((a,r)=>Z7(a)+Z7(c[r])))}function Z7(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function Fd(){return document.body.offsetHeight}function Ud(c,e,a){const r=c[R4];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?c.removeAttribute("class"):a?c.setAttribute("class",e):c.className=e}const X5=Symbol("_vod"),VQ={beforeMount(c,{value:e},{transition:a}){c[X5]=c.style.display==="none"?"":c.style.display,a&&e?a.beforeEnter(c):u4(c,e)},mounted(c,{value:e},{transition:a}){a&&e&&a.enter(c)},updated(c,{value:e,oldValue:a},{transition:r}){!e!=!a&&(r?e?(r.beforeEnter(c),u4(c,!0),r.enter(c)):r.leave(c,()=>{u4(c,!1)}):u4(c,e))},beforeUnmount(c,{value:e}){u4(c,e)}};function u4(c,e){c.style.display=e?c[X5]:"none"}function Wd(c,e,a){const r=c.style,t=v2(a);if(a&&!t){if(e&&!v2(e))for(const n in e)a[n]==null&&W8(r,n,"");for(const n in a)W8(r,n,a[n])}else{const n=r.display;t?e!==a&&(r.cssText=a):e&&c.removeAttribute("style"),X5 in c&&(r.display=n)}}const ce=/\s*!important$/;function W8(c,e,a){if(K(a))a.forEach(r=>W8(c,e,r));else if(a==null&&(a=""),e.startsWith("--"))c.setProperty(e,a);else{const r=$d(c,e);ce.test(a)?c.setProperty(r4(r),a.replace(ce,""),"important"):c[r]=a}}const ee=["Webkit","Moz","ms"],u8={};function $d(c,e){const a=u8[e];if(a)return a;let r=l1(e);if(r!=="filter"&&r in c)return u8[e]=r;r=v0(r);for(let t=0;t<ee.length;t++){const n=ee[t]+r;if(n in c)return u8[e]=n}return e}const ae="http://www.w3.org/1999/xlink";function jd(c,e,a,r,t){if(r&&e.startsWith("xlink:"))a==null?c.removeAttributeNS(ae,e.slice(6,e.length)):c.setAttributeNS(ae,e,a);else{const n=Yh(e);a==null||n&&!Ya(a)?c.removeAttribute(e):c.setAttribute(e,n?"":a)}}function qd(c,e,a,r,t,n,s){if(e==="innerHTML"||e==="textContent"){r&&s(r,t,n),c[e]=a??"";return}const i=c.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){c._value=a;const f=i==="OPTION"?c.getAttribute("value"):c.value,l=a??"";f!==l&&(c.value=l),a==null&&c.removeAttribute(e);return}let o=!1;if(a===""||a==null){const f=typeof c[e];f==="boolean"?a=Ya(a):a==null&&f==="string"?(a="",o=!0):f==="number"&&(a=0,o=!0)}try{c[e]=a}catch{}o&&c.removeAttribute(e)}function Gd(c,e,a,r){c.addEventListener(e,a,r)}function Kd(c,e,a,r){c.removeEventListener(e,a,r)}const re=Symbol("_vei");function Xd(c,e,a,r,t=null){const n=c[re]||(c[re]={}),s=n[e];if(r&&s)s.value=r;else{const[i,o]=Yd(e);if(r){const f=n[e]=Zd(r,t);Gd(c,i,f,o)}else s&&(Kd(c,i,s,o),n[e]=void 0)}}const te=/(?:Once|Passive|Capture)$/;function Yd(c){let e;if(te.test(c)){e={};let r;for(;r=c.match(te);)c=c.slice(0,c.length-r[0].length),e[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):r4(c.slice(2)),e]}let h8=0;const Jd=Promise.resolve(),Qd=()=>h8||(Jd.then(()=>h8=0),h8=Date.now());function Zd(c,e){const a=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=a.attached)return;q2(cp(r,a.value),e,5,[r])};return a.value=c,a.attached=Qd(),a}function cp(c,e){if(K(e)){const a=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{a.call(c),c._stopped=!0},e.map(r=>t=>!t._stopped&&r&&r(t))}else return e}const ne=/^on[a-z]/,ep=(c,e,a,r,t=!1,n,s,i,o)=>{e==="class"?Ud(c,r,t):e==="style"?Wd(c,a,r):G4(e)?N5(e)||Xd(c,e,a,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ap(c,e,r,t))?qd(c,e,r,n,s,i,o):(e==="true-value"?c._trueValue=r:e==="false-value"&&(c._falseValue=r),jd(c,e,r,t))};function ap(c,e,a,r){return r?!!(e==="innerHTML"||e==="textContent"||e in c&&ne.test(e)&&J(a)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&c.tagName==="INPUT"||e==="type"&&c.tagName==="TEXTAREA"||ne.test(e)&&v2(a)?!1:e in c}function gQ(c){const e=N0();if(!e)return;const a=e.ut=(t=c(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(n=>j8(n,t))},r=()=>{const t=c(e.proxy);$8(e.subTree,t),a(t)};$m(r),x0(()=>{const t=new MutationObserver(r);t.observe(e.subTree.el.parentNode,{childList:!0}),U5(()=>t.disconnect())})}function $8(c,e){if(c.shapeFlag&128){const a=c.suspense;c=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{$8(a.activeBranch,e)})}for(;c.component;)c=c.component.subTree;if(c.shapeFlag&1&&c.el)j8(c.el,e);else if(c.type===B2)c.children.forEach(a=>$8(a,e));else if(c.type===g4){let{el:a,anchor:r}=c;for(;a&&(j8(a,e),a!==r);)a=a.nextSibling}}function j8(c,e){if(c.nodeType===1){const a=c.style;for(const r in e)a.setProperty(`--${r}`,e[r])}}const er=L2({patchProp:ep},Rd);let C4,se=!1;function rp(){return C4||(C4=Vd(er))}function tp(){return C4=se?C4:gd(er),se=!0,C4}const np=(...c)=>{const e=rp().createApp(...c),{mount:a}=e;return e.mount=r=>{const t=ar(r);if(!t)return;const n=e._component;!J(n)&&!n.render&&!n.template&&(n.template=t.innerHTML),t.innerHTML="";const s=a(t,!1,t instanceof SVGElement);return t instanceof Element&&(t.removeAttribute("v-cloak"),t.setAttribute("data-v-app","")),s},e},sp=(...c)=>{const e=tp().createApp(...c),{mount:a}=e;return e.mount=r=>{const t=ar(r);if(t)return a(t,!0,t instanceof SVGElement)},e};function ar(c){return v2(c)?document.querySelector(c):c}const ip=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,op=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,lp=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function fp(c,e){if(c==="__proto__"||c==="constructor"&&e&&typeof e=="object"&&"prototype"in e){up(c);return}return e}function up(c){console.warn(`[destr] Dropping "${c}" key to prevent prototype pollution.`)}function Q6(c,e={}){if(typeof c!="string")return c;const a=c.trim();if(c[0]==='"'&&c[c.length-1]==='"')return a.slice(1,-1);if(a.length<=9){const r=a.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!lp.test(c)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return c}try{if(ip.test(c)||op.test(c)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(c,fp)}return JSON.parse(c)}catch(r){if(e.strict)throw r;return c}}const hp=/#/g,mp=/&/g,dp=/=/g,Y5=/\+/g,pp=/%5e/gi,vp=/%60/gi,Hp=/%7c/gi,zp=/%20/gi;function Vp(c){return encodeURI(""+c).replace(Hp,"|")}function q8(c){return Vp(typeof c=="string"?c:JSON.stringify(c)).replace(Y5,"%2B").replace(zp,"+").replace(hp,"%23").replace(mp,"%26").replace(vp,"`").replace(pp,"^")}function m8(c){return q8(c).replace(dp,"%3D")}function Z6(c=""){try{return decodeURIComponent(""+c)}catch{return""+c}}function gp(c){return Z6(c.replace(Y5," "))}function Mp(c){return Z6(c.replace(Y5," "))}function Cp(c=""){const e={};c[0]==="?"&&(c=c.slice(1));for(const a of c.split("&")){const r=a.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const t=gp(r[1]);if(t==="__proto__"||t==="constructor")continue;const n=Mp(r[2]||"");e[t]===void 0?e[t]=n:Array.isArray(e[t])?e[t].push(n):e[t]=[e[t],n]}return e}function Lp(c,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(a=>`${m8(c)}=${q8(a)}`).join("&"):`${m8(c)}=${q8(e)}`:m8(c)}function bp(c){return Object.keys(c).filter(e=>c[e]!==void 0).map(e=>Lp(e,c[e])).filter(Boolean).join("&")}const yp=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,xp=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,wp=/^([/\\]\s*){2,}[^/\\]/;function Y4(c,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?yp.test(c):xp.test(c)||(e.acceptRelative?wp.test(c):!1)}const Np=/^[\s\0]*(blob|data|javascript|vbscript):$/i;function Sp(c){return!!c&&Np.test(c)}const kp=/\/$|\/\?/;function G8(c="",e=!1){return e?kp.test(c):c.endsWith("/")}function rr(c="",e=!1){if(!e)return(G8(c)?c.slice(0,-1):c)||"/";if(!G8(c,!0))return c||"/";const[a,...r]=c.split("?");return(a.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function K8(c="",e=!1){if(!e)return c.endsWith("/")?c:c+"/";if(G8(c,!0))return c||"/";const[a,...r]=c.split("?");return a+"/"+(r.length>0?`?${r.join("?")}`:"")}function Ap(c=""){return c.startsWith("/")}function ie(c=""){return Ap(c)?c:"/"+c}function _p(c,e){if(nr(e)||Y4(c))return c;const a=rr(e);return c.startsWith(a)?c:y3(a,c)}function oe(c,e){if(nr(e))return c;const a=rr(e);if(!c.startsWith(a))return c;const r=c.slice(a.length);return r[0]==="/"?r:"/"+r}function tr(c,e){const a=k0(c),r={...Cp(a.search),...e};return a.search=bp(r),Rp(a)}function nr(c){return!c||c==="/"}function Tp(c){return c&&c!=="/"}const Ep=/^\.?\//;function y3(c,...e){let a=c||"";for(const r of e.filter(t=>Tp(t)))if(a){const t=r.replace(Ep,"");a=K8(a)+t}else a=r;return a}function Pp(c,e,a={}){return a.trailingSlash||(c=K8(c),e=K8(e)),a.leadingSlash||(c=ie(c),e=ie(e)),a.encoding||(c=Z6(c),e=Z6(e)),c===e}function k0(c="",e){const a=c.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/);if(a){const[,u,h=""]=a;return{protocol:u,pathname:h,href:u+h,auth:"",host:"",search:"",hash:""}}if(!Y4(c,{acceptRelative:!0}))return e?k0(e+c):le(c);const[,r="",t,n=""]=c.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,s="",i=""]=n.match(/([^#/?]*)(.*)?/)||[],{pathname:o,search:f,hash:l}=le(i.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:r,auth:t?t.slice(0,Math.max(0,t.length-1)):"",host:s,pathname:o,search:f,hash:l}}function le(c=""){const[e="",a="",r=""]=(c.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:a,hash:r}}function Rp(c){const e=c.pathname||"",a=c.search?(c.search.startsWith("?")?"":"?")+c.search:"",r=c.hash||"",t=c.auth?c.auth+"@":"",n=c.host||"";return(c.protocol?c.protocol+"//":"")+t+n+e+a+r}class Ip extends Error{constructor(e,a){super(e,a),this.name="FetchError",a!=null&&a.cause&&!this.cause&&(this.cause=a.cause)}}function Dp(c){var o,f,l,u,h;const e=((o=c.error)==null?void 0:o.message)||((f=c.error)==null?void 0:f.toString())||"",a=((l=c.request)==null?void 0:l.method)||((u=c.options)==null?void 0:u.method)||"GET",r=((h=c.request)==null?void 0:h.url)||String(c.request)||"/",t=`[${a}] ${JSON.stringify(r)}`,n=c.response?`${c.response.status} ${c.response.statusText}`:"<no response>",s=`${t}: ${n}${e?` ${e}`:""}`,i=new Ip(s,c.error?{cause:c.error}:void 0);for(const p of["request","options","response"])Object.defineProperty(i,p,{get(){return c[p]}});for(const[p,g]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(i,p,{get(){return c.response&&c.response[g]}});return i}const Op=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function fe(c="GET"){return Op.has(c.toUpperCase())}function Bp(c){if(c===void 0)return!1;const e=typeof c;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(c)?!0:c.buffer?!1:c.constructor&&c.constructor.name==="Object"||typeof c.toJSON=="function"}const Fp=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Up=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Wp(c=""){if(!c)return"json";const e=c.split(";").shift()||"";return Up.test(e)?"json":Fp.has(e)||e.startsWith("text/")?"text":"blob"}function $p(c,e,a=globalThis.Headers){const r={...e,...c};if(e!=null&&e.params&&(c!=null&&c.params)&&(r.params={...e==null?void 0:e.params,...c==null?void 0:c.params}),e!=null&&e.query&&(c!=null&&c.query)&&(r.query={...e==null?void 0:e.query,...c==null?void 0:c.query}),e!=null&&e.headers&&(c!=null&&c.headers)){r.headers=new a((e==null?void 0:e.headers)||{});for(const[t,n]of new a((c==null?void 0:c.headers)||{}))r.headers.set(t,n)}return r}const jp=new Set([408,409,425,429,500,502,503,504]),qp=new Set([101,204,205,304]);function sr(c={}){const{fetch:e=globalThis.fetch,Headers:a=globalThis.Headers,AbortController:r=globalThis.AbortController}=c;async function t(i){const o=i.error&&i.error.name==="AbortError"&&!i.options.timeout||!1;if(i.options.retry!==!1&&!o){let l;typeof i.options.retry=="number"?l=i.options.retry:l=fe(i.options.method)?0:1;const u=i.response&&i.response.status||500;if(l>0&&(Array.isArray(i.options.retryStatusCodes)?i.options.retryStatusCodes.includes(u):jp.has(u))){const h=i.options.retryDelay||0;return h>0&&await new Promise(p=>setTimeout(p,h)),n(i.request,{...i.options,retry:l-1,timeout:i.options.timeout})}}const f=Dp(i);throw Error.captureStackTrace&&Error.captureStackTrace(f,n),f}const n=async function(o,f={}){var h;const l={request:o,options:$p(f,c.defaults,a),response:void 0,error:void 0};if(l.options.method=(h=l.options.method)==null?void 0:h.toUpperCase(),l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=_p(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=tr(l.request,{...l.options.params,...l.options.query}))),l.options.body&&fe(l.options.method)&&(Bp(l.options.body)?(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new a(l.options.headers||{}),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json")):("pipeTo"in l.options.body&&typeof l.options.body.pipeTo=="function"||typeof l.options.body.pipe=="function")&&("duplex"in l.options||(l.options.duplex="half"))),!l.options.signal&&l.options.timeout){const p=new r;setTimeout(()=>p.abort(),l.options.timeout),l.options.signal=p.signal}try{l.response=await e(l.request,l.options)}catch(p){return l.error=p,l.options.onRequestError&&await l.options.onRequestError(l),await t(l)}if(l.response.body&&!qp.has(l.response.status)&&l.options.method!=="HEAD"){const p=(l.options.parseResponse?"json":l.options.responseType)||Wp(l.response.headers.get("content-type")||"");switch(p){case"json":{const g=await l.response.text(),C=l.options.parseResponse||Q6;l.response._data=C(g);break}case"stream":{l.response._data=l.response.body;break}default:l.response._data=await l.response[p]()}}return l.options.onResponse&&await l.options.onResponse(l),!l.options.ignoreResponseError&&l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),await t(l)):l.response},s=async function(o,f){return(await n(o,f))._data};return s.raw=n,s.native=(...i)=>e(...i),s.create=(i={})=>sr({...c,defaults:{...c.defaults,...i}}),s}const J5=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Gp=J5.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),Kp=J5.Headers,Xp=J5.AbortController,Yp=sr({fetch:Gp,Headers:Kp,AbortController:Xp}),Jp=Yp,Qp=()=>{var c;return((c=window==null?void 0:window.__NUXT__)==null?void 0:c.config)||{}},c0=Qp().app,Zp=()=>c0.baseURL,cv=()=>c0.buildAssetsDir,ev=(...c)=>y3(ir(),cv(),...c),ir=(...c)=>{const e=c0.cdnURL||c0.baseURL;return c.length?y3(e,...c):e};globalThis.__buildAssetsURL=ev,globalThis.__publicAssetsURL=ir;function X8(c,e={},a){for(const r in c){const t=c[r],n=a?`${a}:${r}`:r;typeof t=="object"&&t!==null?X8(t,e,n):typeof t=="function"&&(e[n]=t)}return e}const av={run:c=>c()},rv=()=>av,or=typeof console.createTask<"u"?console.createTask:rv;function tv(c,e){const a=e.shift(),r=or(a);return c.reduce((t,n)=>t.then(()=>r.run(()=>n(...e))),Promise.resolve())}function nv(c,e){const a=e.shift(),r=or(a);return Promise.all(c.map(t=>r.run(()=>t(...e))))}function d8(c,e){for(const a of[...c])a(e)}class sv{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,a,r={}){if(!e||typeof a!="function")return()=>{};const t=e;let n;for(;this._deprecatedHooks[e];)n=this._deprecatedHooks[e],e=n.to;if(n&&!r.allowDeprecated){let s=n.message;s||(s=`${t} hook has been deprecated`+(n.to?`, please use ${n.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(s)||(console.warn(s),this._deprecatedMessages.add(s))}if(!a.name)try{Object.defineProperty(a,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(a),()=>{a&&(this.removeHook(e,a),a=void 0)}}hookOnce(e,a){let r,t=(...n)=>(typeof r=="function"&&r(),r=void 0,t=void 0,a(...n));return r=this.hook(e,t),r}removeHook(e,a){if(this._hooks[e]){const r=this._hooks[e].indexOf(a);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,a){this._deprecatedHooks[e]=typeof a=="string"?{to:a}:a;const r=this._hooks[e]||[];delete this._hooks[e];for(const t of r)this.hook(e,t)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const a in e)this.deprecateHook(a,e[a])}addHooks(e){const a=X8(e),r=Object.keys(a).map(t=>this.hook(t,a[t]));return()=>{for(const t of r.splice(0,r.length))t()}}removeHooks(e){const a=X8(e);for(const r in a)this.removeHook(r,a[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...a){return a.unshift(e),this.callHookWith(tv,e,...a)}callHookParallel(e,...a){return a.unshift(e),this.callHookWith(nv,e,...a)}callHookWith(e,a,...r){const t=this._before||this._after?{name:a,args:r,context:{}}:void 0;this._before&&d8(this._before,t);const n=e(a in this._hooks?[...this._hooks[a]]:[],r);return n instanceof Promise?n.finally(()=>{this._after&&t&&d8(this._after,t)}):(this._after&&t&&d8(this._after,t),n)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const a=this._before.indexOf(e);a!==-1&&this._before.splice(a,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const a=this._after.indexOf(e);a!==-1&&this._after.splice(a,1)}}}}function lr(){return new sv}function iv(c={}){let e,a=!1;const r=s=>{if(e&&e!==s)throw new Error("Context conflict")};let t;if(c.asyncContext){const s=c.AsyncLocalStorage||globalThis.AsyncLocalStorage;s?t=new s:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const n=()=>{if(t&&e===void 0){const s=t.getStore();if(s!==void 0)return s}return e};return{use:()=>{const s=n();if(s===void 0)throw new Error("Context is not available");return s},tryUse:()=>n(),set:(s,i)=>{i||r(s),e=s,a=!0},unset:()=>{e=void 0,a=!1},call:(s,i)=>{r(s),e=s;try{return t?t.run(s,i):i()}finally{a||(e=void 0)}},async callAsync(s,i){e=s;const o=()=>{e=s},f=()=>e===s?o:void 0;Y8.add(f);try{const l=t?t.run(s,i):i();return a||(e=void 0),await l}finally{Y8.delete(f)}}}}function ov(c={}){const e={};return{get(a,r={}){return e[a]||(e[a]=iv({...c,...r})),e[a],e[a]}}}const e0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},ue="__unctx__",lv=e0[ue]||(e0[ue]=ov()),fv=(c,e={})=>lv.get(c,e),he="__unctx_async_handlers__",Y8=e0[he]||(e0[he]=new Set);function I4(c){const e=[];for(const t of Y8){const n=t();n&&e.push(n)}const a=()=>{for(const t of e)t()};let r=c();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(t=>{throw a(),t})),[r,a]}const fr=fv("nuxt-app",{asyncContext:!1}),uv="__nuxt_plugin";function hv(c){let e=0;const a={_scope:Jh(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.8.0"},get vue(){return a.vueApp.version}},payload:z1({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:t=>a._scope.run(()=>pv(a,t)),isHydrating:!0,deferHydration(){if(!a.isHydrating)return()=>{};e++;let t=!1;return()=>{if(!t&&(t=!0,e--,e===0))return a.isHydrating=!1,a.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...c};a.hooks=lr(),a.hook=a.hooks.hook,a.callHook=a.hooks.callHook,a.provide=(t,n)=>{const s="$"+t;L6(a,s,n),L6(a.vueApp.config.globalProperties,s,n)},L6(a.vueApp,"$nuxt",a),L6(a.vueApp.config.globalProperties,"$nuxt",a);{window.addEventListener("nuxt.preloadError",n=>{a.callHook("app:chunkError",{error:n.payload})}),window.useNuxtApp=window.useNuxtApp||z2;const t=a.hook("app:error",(...n)=>{console.error("[nuxt] error caught during app initialization",...n)});a.hook("app:mounted",t)}const r=z1(a.payload.config);return a.provide("config",r),a}async function mv(c,e){if(e.hooks&&c.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:a}=await c.runWithContext(()=>e(c))||{};if(a&&typeof a=="object")for(const r in a)c.provide(r,a[r])}}async function dv(c,e){const a=[],r=[];for(const t of e){const n=mv(c,t);t.parallel?a.push(n.catch(s=>r.push(s))):await n}if(await Promise.all(a),r.length)throw r[0]}/*! @__NO_SIDE_EFFECTS__ */function G2(c){return typeof c=="function"?c:(delete c.name,Object.assign(c.setup||(()=>{}),c,{[uv]:!0}))}function pv(c,e,a){const r=()=>a?e(...a):e();return fr.set(c),c.vueApp.runWithContext(r)}/*! @__NO_SIDE_EFFECTS__ */function z2(){var e;let c;if(R9()&&(c=(e=N0())==null?void 0:e.appContext.app.$nuxt),c=c||fr.tryUse(),!c)throw new Error("[nuxt] instance unavailable");return c}/*! @__NO_SIDE_EFFECTS__ */function J4(){return z2().$config}function L6(c,e,a){Object.defineProperty(c,e,{get:()=>a})}const vv="modulepreload",Hv=function(c,e){return c[0]==="."?new URL(c,e).href:c},me={},zv=function(e,a,r){if(!a||a.length===0)return e();const t=document.getElementsByTagName("link");return Promise.all(a.map(n=>{if(n=Hv(n,r),n in me)return;me[n]=!0;const s=n.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(!!r)for(let l=t.length-1;l>=0;l--){const u=t[l];if(u.href===n&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${i}`))return;const f=document.createElement("link");if(f.rel=s?"stylesheet":vv,s||(f.as="script",f.crossOrigin=""),f.href=n,document.head.appendChild(f),s)return new Promise((l,u)=>{f.addEventListener("load",l),f.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e()).catch(n=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=n,window.dispatchEvent(s),!s.defaultPrevented)throw n})},$3=(...c)=>zv(...c).catch(e=>{const a=new Event("nuxt.preloadError");throw a.payload=e,window.dispatchEvent(a),e}),Vv=-1,gv=-2,Mv=-3,Cv=-4,Lv=-5,bv=-6;function yv(c,e){return xv(JSON.parse(c),e)}function xv(c,e){if(typeof c=="number")return t(c,!0);if(!Array.isArray(c)||c.length===0)throw new Error("Invalid input");const a=c,r=Array(a.length);function t(n,s=!1){if(n===Vv)return;if(n===Mv)return NaN;if(n===Cv)return 1/0;if(n===Lv)return-1/0;if(n===bv)return-0;if(s)throw new Error("Invalid input");if(n in r)return r[n];const i=a[n];if(!i||typeof i!="object")r[n]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const o=i[0],f=e==null?void 0:e[o];if(f)return r[n]=f(t(i[1]));switch(o){case"Date":r[n]=new Date(i[1]);break;case"Set":const l=new Set;r[n]=l;for(let p=1;p<i.length;p+=1)l.add(t(i[p]));break;case"Map":const u=new Map;r[n]=u;for(let p=1;p<i.length;p+=2)u.set(t(i[p]),t(i[p+1]));break;case"RegExp":r[n]=new RegExp(i[1],i[2]);break;case"Object":r[n]=Object(i[1]);break;case"BigInt":r[n]=BigInt(i[1]);break;case"null":const h=Object.create(null);r[n]=h;for(let p=1;p<i.length;p+=2)h[i[p]]=t(i[p+1]);break;default:throw new Error(`Unknown type ${o}`)}}else{const o=new Array(i.length);r[n]=o;for(let f=0;f<i.length;f+=1){const l=i[f];l!==gv&&(o[f]=t(l))}}else{const o={};r[n]=o;for(const f in i){const l=i[f];o[f]=t(l)}}return r[n]}return t(0)}function wv(c){return Array.isArray(c)?c:[c]}const Nv=["title","titleTemplate","script","style","noscript"],R6=["base","meta","link","style","script","noscript"],Sv=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],kv=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],ur=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"],Av=typeof window<"u";function hr(c){let e=9;for(let a=0;a<c.length;)e=Math.imul(e^c.charCodeAt(a++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function de(c){return c._h||hr(c._d?c._d:`${c.tag}:${c.textContent||c.innerHTML||""}:${Object.entries(c.props).map(([e,a])=>`${e}:${String(a)}`).join(",")}`)}function mr(c,e){const{props:a,tag:r}=c;if(kv.includes(r))return r;if(r==="link"&&a.rel==="canonical")return"canonical";if(a.charset)return"charset";const t=["id"];r==="meta"&&t.push("name","property","http-equiv");for(const n of t)if(typeof a[n]<"u"){const s=String(a[n]);return e&&!e(s)?!1:`${r}:${n}:${s}`}return!1}function pe(c,e){return c==null?e||null:typeof c=="function"?c(e):c}async function _v(c,e,a){const r={tag:c,props:await dr(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(c)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(c))};return ur.forEach(t=>{const n=typeof r.props[t]<"u"?r.props[t]:a[t];typeof n<"u"&&((!["innerHTML","textContent"].includes(t)||Nv.includes(r.tag))&&(r[t]=n),delete r.props[t])}),r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.props.children&&(r.innerHTML=r.props.children,delete r.props.children),r.tag==="script"&&(typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),r.innerHTML&&["application/ld+json","application/json"].includes(r.props.type)&&(r.innerHTML=r.innerHTML.replace(/</g,"\\u003C"))),Array.isArray(r.props.content)?r.props.content.map(t=>({...r,props:{...r.props,content:t}})):r}function Tv(c){return typeof c=="object"&&!Array.isArray(c)&&(c=Object.keys(c).filter(e=>c[e])),(Array.isArray(c)?c.join(" "):c).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function dr(c,e){for(const a of Object.keys(c)){if(a==="class"){c[a]=Tv(c[a]);continue}if(c[a]instanceof Promise&&(c[a]=await c[a]),!e&&!ur.includes(a)){const r=String(c[a]),t=a.startsWith("data-");r==="true"||r===""?c[a]=t?"true":!0:c[a]||(t&&r==="false"?c[a]="false":delete c[a])}}return c}const Ev=10;async function Pv(c){const e=[];return Object.entries(c.resolvedInput).filter(([a,r])=>typeof r<"u"&&Sv.includes(a)).forEach(([a,r])=>{const t=wv(r);e.push(...t.map(n=>_v(a,n,c)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((a,r)=>(a._e=c._i,c.mode&&(a._m=c.mode),a._p=(c._i<<Ev)+r,a))}const ve={base:-10,title:10},He={critical:-80,high:-10,low:20};function a0(c){let e=100;const a=c.tagPriority;return typeof a=="number"?a:(c.tag==="meta"?(c.props["http-equiv"]==="content-security-policy"&&(e=-30),c.props.charset&&(e=-20),c.props.name==="viewport"&&(e=-15)):c.tag==="link"&&c.props.rel==="preconnect"?e=20:c.tag in ve&&(e=ve[c.tag]),typeof a=="string"&&a in He?e+He[a]:e)}const Rv=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],T1="%separator";function t3(c,e,a){if(typeof c!="string"||!c.includes("%"))return c;function r(s){let i;return["s","pageTitle"].includes(s)?i=e.pageTitle:s.includes(".")?i=s.split(".").reduce((o,f)=>o&&o[f]||void 0,e):i=e[s],typeof i<"u"?(i||"").replace(/"/g,'\\"'):!1}let t=c;try{t=decodeURI(c)}catch{}return(t.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(s=>{const i=r(s.slice(1));typeof i=="string"&&(c=c.replace(new RegExp(`\\${s}(\\W|$)`,"g"),(o,f)=>`${i}${f}`).trim())}),c.includes(T1)&&(c.endsWith(T1)&&(c=c.slice(0,-T1.length).trim()),c.startsWith(T1)&&(c=c.slice(T1.length).trim()),c=c.replace(new RegExp(`\\${T1}\\s*\\${T1}`,"g"),T1),c=t3(c,{separator:a},a)),c}async function Iv(c){const e={tag:c.tagName.toLowerCase(),props:await dr(c.getAttributeNames().reduce((a,r)=>({...a,[r]:c.getAttribute(r)}),{})),innerHTML:c.innerHTML};return e._d=mr(e),e}async function pr(c,e={}){var l;const a=e.document||c.resolvedOptions.document;if(!a)return;const r={shouldRender:c.dirty,tags:[]};if(await c.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const t=(await c.resolveTags()).map(u=>({tag:u,id:R6.includes(u.tag)?de(u):u.tag,shouldRender:!0}));let n=c._dom;if(!n){n={elMap:{htmlAttrs:a.documentElement,bodyAttrs:a.body}};for(const u of["body","head"]){const h=(l=a==null?void 0:a[u])==null?void 0:l.children;for(const p of[...h].filter(g=>R6.includes(g.tagName.toLowerCase())))n.elMap[p.getAttribute("data-hid")||de(await Iv(p))]=p}}n.pendingSideEffects={...n.sideEffects||{}},n.sideEffects={};function s(u,h,p){const g=`${u}:${h}`;n.sideEffects[g]=p,delete n.pendingSideEffects[g]}function i({id:u,$el:h,tag:p}){const g=p.tag.endsWith("Attrs");n.elMap[u]=h,g||(["textContent","innerHTML"].forEach(C=>{p[C]&&p[C]!==h[C]&&(h[C]=p[C])}),s(u,"el",()=>{n.elMap[u].remove(),delete n.elMap[u]})),Object.entries(p.props).forEach(([C,N])=>{const v=`attr:${C}`;if(C==="class")for(const m of(N||"").split(" ").filter(Boolean))g&&s(u,`${v}:${m}`,()=>h.classList.remove(m)),!h.classList.contains(m)&&h.classList.add(m);else h.getAttribute(C)!==N&&h.setAttribute(C,N===!0?"":String(N)),g&&s(u,v,()=>h.removeAttribute(C))})}const o=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const u of t){const{tag:h,shouldRender:p,id:g}=u;if(p){if(h.tag==="title"){a.title=h.textContent;continue}u.$el=u.$el||n.elMap[g],u.$el?i(u):R6.includes(h.tag)&&o.push(u)}}for(const u of o){const h=u.tag.tagPosition||"head";u.$el=a.createElement(u.tag.tag),i(u),f[h]=f[h]||a.createDocumentFragment(),f[h].appendChild(u.$el)}for(const u of t)await c.hooks.callHook("dom:renderTag",u,a,s);f.head&&a.head.appendChild(f.head),f.bodyOpen&&a.body.insertBefore(f.bodyOpen,a.body.firstChild),f.bodyClose&&a.body.appendChild(f.bodyClose),Object.values(n.pendingSideEffects).forEach(u=>u()),c._dom=n,c.dirty=!1,await c.hooks.callHook("dom:rendered",{renders:t})}async function Dv(c,e={}){const a=e.delayFn||(r=>setTimeout(r,10));return c._domUpdatePromise=c._domUpdatePromise||new Promise(r=>a(async()=>{await pr(c,e),delete c._domUpdatePromise,r()}))}function Ov(c){return e=>{var r,t;const a=((t=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:t.innerHTML)||!1;return a&&e.push(JSON.parse(a)),{mode:"client",hooks:{"entries:updated":function(n){Dv(n,c)}}}}}const Bv=["templateParams","htmlAttrs","bodyAttrs"],Fv={hooks:{"tag:normalise":function({tag:c}){["hid","vmid","key"].forEach(r=>{c.props[r]&&(c.key=c.props[r],delete c.props[r])});const a=mr(c)||(c.key?`${c.tag}:${c.key}`:!1);a&&(c._d=a)},"tags:resolve":function(c){const e={};c.tags.forEach(r=>{const t=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,n=e[t];if(n){let i=r==null?void 0:r.tagDuplicateStrategy;if(!i&&Bv.includes(r.tag)&&(i="merge"),i==="merge"){const o=n.props;["class","style"].forEach(f=>{r.props[f]&&o[f]&&(f==="style"&&!o[f].endsWith(";")&&(o[f]+=";"),r.props[f]=`${o[f]} ${r.props[f]}`)}),e[t].props={...o,...r.props};return}else if(r._e===n._e){n._duped=n._duped||[],r._d=`${n._d}:${n._duped.length+1}`,n._duped.push(r);return}else if(a0(r)>a0(n))return}const s=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(R6.includes(r.tag)&&s===0){delete e[t];return}e[t]=r});const a=[];Object.values(e).forEach(r=>{const t=r._duped;delete r._duped,a.push(r),t&&a.push(...t)}),c.tags=a,c.tags=c.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},Uv={mode:"server",hooks:{"tags:resolve":function(c){const e={};c.tags.filter(a=>["titleTemplate","templateParams","title"].includes(a.tag)&&a._m==="server").forEach(a=>{e[a.tag]=a.tag.startsWith("title")?a.textContent:a.props}),Object.keys(e).length&&c.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},ze=["script","link","bodyAttrs"];function Ve(c){const e={},a={};return Object.entries(c.props).forEach(([r,t])=>{r.startsWith("on")&&typeof t=="function"?a[r]=t:e[r]=t}),{props:e,eventHandlers:a}}const Wv={hooks:{"ssr:render":function(c){c.tags=c.tags.map(e=>(!ze.includes(e.tag)||!Object.entries(e.props).find(([a,r])=>a.startsWith("on")&&typeof r=="function")||(e.props=Ve(e).props),e))},"tags:resolve":function(c){c.tags=c.tags.map(e=>{if(!ze.includes(e.tag))return e;const{props:a,eventHandlers:r}=Ve(e);return Object.keys(r).length&&(e.props=a,e._eventHandlers=r),e})},"dom:renderTag":function(c,e,a){if(!c.tag._eventHandlers)return;const r=c.tag.tag==="bodyAttrs"?e.defaultView:c.$el;Object.entries(c.tag._eventHandlers).forEach(([t,n])=>{const s=`${c.tag._d||c.tag._p}:${t}`,i=t.slice(2).toLowerCase(),o=`data-h-${i}`;if(a(c.id,s,()=>{}),c.$el.hasAttribute(o))return;const f=n;c.$el.setAttribute(o,""),r.addEventListener(i,f),c.entry&&a(c.id,s,()=>{r.removeEventListener(i,f),c.$el.removeAttribute(o)})})}}},$v=["link","style","script","noscript"],jv={hooks:{"tag:normalise":({tag:c})=>{c.key&&$v.includes(c.tag)&&(c.props["data-hid"]=c._h=hr(c.key))}}},qv={hooks:{"tags:resolve":c=>{const e=a=>{var r;return(r=c.tags.find(t=>t._d===a))==null?void 0:r._p};for(const{prefix:a,offset:r}of Rv)for(const t of c.tags.filter(n=>typeof n.tagPriority=="string"&&n.tagPriority.startsWith(a))){const n=e(t.tagPriority.replace(a,""));typeof n<"u"&&(t._p=n+r)}c.tags.sort((a,r)=>a._p-r._p).sort((a,r)=>a0(a)-a0(r))}}},Gv={hooks:{"tags:resolve":c=>{var s;const{tags:e}=c,a=(s=e.find(i=>i.tag==="title"))==null?void 0:s.textContent,r=e.findIndex(i=>i.tag==="templateParams"),t=r!==-1?e[r].props:{},n=t.separator||"|";delete t.separator,t.pageTitle=t3(t.pageTitle||a||"",t,n);for(const i of e)i.processTemplateParams!==!1&&(["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string"?i.textContent=t3(i.textContent,t,n):i.tag==="meta"&&typeof i.props.content=="string"?i.props.content=t3(i.props.content,t,n):i.tag==="link"&&typeof i.props.href=="string"?i.props.href=t3(i.props.href,t,n):i.processTemplateParams===!0&&(i.innerHTML?i.innerHTML=t3(i.innerHTML,t,n):i.textContent&&(i.textContent=t3(i.textContent,t,n))));c.tags=e.filter(i=>i.tag!=="templateParams")}}},Kv={hooks:{"tags:resolve":c=>{const{tags:e}=c;let a=e.findIndex(t=>t.tag==="titleTemplate");const r=e.findIndex(t=>t.tag==="title");if(r!==-1&&a!==-1){const t=pe(e[a].textContent,e[r].textContent);t!==null?e[r].textContent=t||e[r].textContent:delete e[r]}else if(a!==-1){const t=pe(e[a].textContent);t!==null&&(e[a].textContent=t,e[a].tag="title",a=-1)}a!==-1&&delete e[a],c.tags=e.filter(Boolean)}}};let vr;function Xv(c={}){const e=Yv(c);return e.use(Ov()),vr=e}function ge(c,e){return!c||c==="server"&&e||c==="client"&&!e}function Yv(c={}){const e=lr();e.addHooks(c.hooks||{}),c.document=c.document||(Av?document:void 0);const a=!c.document;c.plugins=[Fv,Uv,Wv,jv,qv,Gv,Kv,...(c==null?void 0:c.plugins)||[]];const r=()=>{s.dirty=!0,e.callHook("entries:updated",s)};let t=0,n=[];const s={dirty:!1,resolvedOptions:c,hooks:e,headEntries(){return n},use(i){const o=typeof i=="function"?i(s):i;ge(o.mode,a)&&e.addHooks(o.hooks||{})},push(i,o){o==null||delete o.head;const f={_i:t++,input:i,...o};return ge(f.mode,a)&&(n.push(f),r()),{dispose(){n=n.filter(l=>l._i!==f._i),e.callHook("entries:updated",s),r()},patch(l){n=n.map(u=>(u._i===f._i&&(u.input=f.input=l),u)),r()}}},async resolveTags(){const i={tags:[],entries:[...n]};await e.callHook("entries:resolve",i);for(const o of i.entries){const f=o.resolvedInput||o.input;if(o.resolvedInput=await(o.transform?o.transform(f):f),o.resolvedInput)for(const l of await Pv(o)){const u={tag:l,entry:o,resolvedOptions:s.resolvedOptions};await e.callHook("tag:normalise",u),i.tags.push(u.tag)}}return await e.callHook("tags:beforeResolve",i),await e.callHook("tags:resolve",i),i.tags},ssr:a};return c.plugins.forEach(i=>s.use(i)),s.hooks.callHook("init",s),s}function Jv(){return vr}const Qv=Z9.startsWith("3");function Zv(c){return typeof c=="function"?c():p2(c)}function J8(c,e=""){if(c instanceof Promise)return c;const a=Zv(c);return!c||!a?a:Array.isArray(a)?a.map(r=>J8(r,e)):typeof a=="object"?Object.fromEntries(Object.entries(a).map(([r,t])=>r==="titleTemplate"||r.startsWith("on")?[r,p2(t)]:[r,J8(t,r)])):a}const cH={hooks:{"entries:resolve":function(c){for(const e of c.entries)e.resolvedInput=J8(e.input)}}},Hr="usehead";function eH(c){return{install(a){Qv&&(a.config.globalProperties.$unhead=c,a.config.globalProperties.$head=c,a.provide(Hr,c))}}.install}function aH(c={}){c.domDelayFn=c.domDelayFn||(a=>i4(()=>setTimeout(()=>a(),0)));const e=Xv(c);return e.use(cH),e.install=eH(e),e}const Q8=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Z8="__unhead_injection_handler__";function rH(c){Q8[Z8]=c}function MQ(){if(Z8 in Q8)return Q8[Z8]();const c=F2(Hr);return c||Jv()}function tH(c){return{ctx:{table:c},matchAll:e=>Vr(e,c)}}function zr(c){const e={};for(const a in c)e[a]=a==="dynamic"?new Map(Object.entries(c[a]).map(([r,t])=>[r,zr(t)])):new Map(Object.entries(c[a]));return e}function nH(c){return tH(zr(c))}function Vr(c,e){const a=[];for(const[t,n]of Me(e.wildcard))c.startsWith(t)&&a.push(n);for(const[t,n]of Me(e.dynamic))if(c.startsWith(t+"/")){const s="/"+c.slice(t.length).split("/").splice(2).join("/");a.push(...Vr(s,n))}const r=e.static.get(c);return r&&a.push(r),a.filter(Boolean)}function Me(c){return[...c.entries()].sort((e,a)=>e[0].length-a[0].length)}function p8(c){return c!==null&&typeof c=="object"}function c5(c,e,a=".",r){if(!p8(e))return c5(c,{},a,r);const t=Object.assign({},e);for(const n in c){if(n==="__proto__"||n==="constructor")continue;const s=c[n];s!=null&&(r&&r(t,n,s,a)||(Array.isArray(s)&&Array.isArray(t[n])?t[n]=[...s,...t[n]]:p8(s)&&p8(t[n])?t[n]=c5(s,t[n],(a?`${a}.`:"")+n.toString(),r):t[n]=s))}return t}function gr(c){return(...e)=>e.reduce((a,r)=>c5(a,r,"",c),{})}const sH=gr(),iH=gr((c,e,a)=>{if(typeof c[e]<"u"&&typeof a=="function")return c[e]=a(c[e]),!0});function oH(c,e){try{return e in c}catch{return!1}}var lH=Object.defineProperty,fH=(c,e,a)=>e in c?lH(c,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[e]=a,n3=(c,e,a)=>(fH(c,typeof e!="symbol"?e+"":e,a),a);class e5 extends Error{constructor(e,a={}){super(e,a),n3(this,"statusCode",500),n3(this,"fatal",!1),n3(this,"unhandled",!1),n3(this,"statusMessage"),n3(this,"data"),n3(this,"cause"),a.cause&&!this.cause&&(this.cause=a.cause)}toJSON(){const e={message:this.message,statusCode:r5(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Mr(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}n3(e5,"__h3_error__",!0);function a5(c){if(typeof c=="string")return new e5(c);if(uH(c))return c;const e=new e5(c.message??c.statusMessage??"",{cause:c.cause||c});if(oH(c,"stack"))try{Object.defineProperty(e,"stack",{get(){return c.stack}})}catch{try{e.stack=c.stack}catch{}}if(c.data&&(e.data=c.data),c.statusCode?e.statusCode=r5(c.statusCode,e.statusCode):c.status&&(e.statusCode=r5(c.status,e.statusCode)),c.statusMessage?e.statusMessage=c.statusMessage:c.statusText&&(e.statusMessage=c.statusText),e.statusMessage){const a=e.statusMessage;Mr(e.statusMessage)!==a&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return c.fatal!==void 0&&(e.fatal=c.fatal),c.unhandled!==void 0&&(e.unhandled=c.unhandled),e}function uH(c){var e;return((e=c==null?void 0:c.constructor)==null?void 0:e.__h3_error__)===!0}const hH=/[^\u0009\u0020-\u007E]/g;function Mr(c=""){return c.replace(hH,"")}function r5(c,e=200){return!c||(typeof c=="string"&&(c=Number.parseInt(c,10)),c<100||c>999)?e:c}const mH=Symbol("layout-meta"),Q5=Symbol("route"),x3=()=>{var c;return(c=z2())==null?void 0:c.$router},Z5=()=>R9()?F2(Q5,z2()._route):z2()._route;/*! @__NO_SIDE_EFFECTS__ */const dH=()=>{try{if(z2()._processingMiddleware)return!0}catch{return!0}return!1},CQ=(c,e)=>{c||(c="/");const a=typeof c=="string"?c:tr(c.path||"/",c.query||{})+(c.hash||"");if(e!=null&&e.open){{const{target:i="_blank",windowFeatures:o={}}=e.open,f=Object.entries(o).filter(([l,u])=>u!==void 0).map(([l,u])=>`${l.toLowerCase()}=${u}`).join(", ");open(a,i,f)}return Promise.resolve()}const r=(e==null?void 0:e.external)||Y4(a,{acceptRelative:!0});if(r){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const i=k0(a).protocol;if(i&&Sp(i))throw new Error(`Cannot navigate to a URL with '${i}' protocol.`)}const t=dH();if(!r&&t)return c;const n=x3(),s=z2();return r?(s._scope.stop(),e!=null&&e.replace?location.replace(a):location.href=a,t?s.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?n.replace(c):n.push(c)},A0=()=>ym(z2().payload,"error"),_3=c=>{const e=cc(c);try{const a=z2(),r=A0();a.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},pH=async(c={})=>{const e=z2(),a=A0();e.callHook("app:error:cleared",c),c.redirect&&await x3().replace(c.redirect),a.value=null},vH=c=>!!(c&&typeof c=="object"&&"__nuxt_error"in c),cc=c=>{const e=a5(c);return e.__nuxt_error=!0,e},Ce=globalThis.requestIdleCallback||(c=>{const e=Date.now(),a={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{c(a)},1)}),LQ=globalThis.cancelIdleCallback||(c=>{clearTimeout(c)}),Cr=c=>{const e=z2();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Ce(c)}):Ce(c)},HH=!1,zH=!1,bQ=!1,yQ={componentName:"NuxtLink"},VH="#__nuxt";function gH(c={}){const e=c.path||window.location.pathname;let a={};try{a=Q6(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(c.force||(a==null?void 0:a.path)!==e||(a==null?void 0:a.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(c.ttl??1e4)}))}catch{}if(c.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:z2().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const MH={nuxt:{buildId:"4b0b798d-00d5-4ee9-aca9-2595f5d18ae7"}},CH=iH(MH);function LH(){const c=z2();return c._appConfig||(c._appConfig=z1(CH)),c._appConfig}let I6,Lr;function bH(){var a;const c=J4(),e=(a=LH().nuxt)==null?void 0:a.buildId;return I6=$fetch(y3(c.app.cdnURL||c.app.baseURL,c.app.buildAssetsDir,`builds/meta/${e}.json`)),I6.then(r=>{Lr=nH(r.matcher)}),I6}function _0(){return I6||bH()}async function br(c){return await _0(),sH({},...Lr.matchAll(c).reverse())}function Le(c,e={}){const a=yH(c,e),r=z2(),t=r._payloadCache=r._payloadCache||{};return a in t||(t[a]=xH().then(n=>n?yr(a).then(s=>s||(delete t[a],null)):(t[a]=null,null))),t[a]}const be="json";function yH(c,e={}){const a=new URL(c,"http://localhost");if(a.search)throw new Error("Payload URL cannot contain search params: "+c);if(a.host!=="localhost"||Y4(a.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+c);const r=e.hash||(e.fresh?Date.now():"");return y3(J4().app.baseURL,a.pathname,r?`_payload.${r}.${be}`:`_payload.${be}`)}async function yr(c){const e=fetch(c).then(a=>a.text().then(xr));try{return await e}catch(a){console.warn("[nuxt] Cannot load payload ",c,a)}return null}async function xH(c=Z5().path){if(z2().payload.prerenderedAt||(await _0()).prerendered.includes(c))return!0;const r=await br(c);return!!r.prerender&&!r.redirect}let b6=null;async function wH(){if(b6)return b6;const c=document.getElementById("__NUXT_DATA__");if(!c)return{};const e=xr(c.textContent||""),a=c.dataset.src?await yr(c.dataset.src):void 0;return b6={...e,...a,...window.__NUXT__},b6}function xr(c){return yv(c,z2()._payloadRevivers)}function NH(c,e){z2()._payloadRevivers[c]=e}const ye={NuxtError:c=>cc(c),EmptyShallowRef:c=>k4(c==="_"?void 0:c==="0n"?BigInt(0):Q6(c)),EmptyRef:c=>$1(c==="_"?void 0:c==="0n"?BigInt(0):Q6(c)),ShallowRef:c=>k4(c),ShallowReactive:c=>g0(c),Ref:c=>$1(c),Reactive:c=>z1(c)},SH=G2({name:"nuxt:revive-payload:client",order:-30,async setup(c){let e,a;for(const r in ye)NH(r,ye[r]);Object.assign(c.payload,([e,a]=I4(()=>c.runWithContext(wH)),e=await e,a(),e)),window.__NUXT__=c.payload}}),kH=[],AH=G2({name:"nuxt:head",enforce:"pre",setup(c){const e=aH({plugins:kH});rH(()=>z2().vueApp._context.provides.usehead),c.vueApp.use(e);{let a=!0;const r=async()=>{a=!1,await pr(e)};e.hooks.hook("dom:beforeRender",t=>{t.shouldRender=!a}),c.hooks.hook("page:start",()=>{a=!0}),c.hooks.hook("page:finish",()=>{c.isHydrating||r()}),c.hooks.hook("app:error",r),c.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const A3=typeof window<"u";function _H(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const i2=Object.assign;function v8(c,e){const a={};for(const r in e){const t=e[r];a[r]=c1(t)?t.map(c):c(t)}return a}const L4=()=>{},c1=Array.isArray,TH=/\/$/,EH=c=>c.replace(TH,"");function H8(c,e,a="/"){let r,t={},n="",s="";const i=e.indexOf("#");let o=e.indexOf("?");return i<o&&i>=0&&(o=-1),o>-1&&(r=e.slice(0,o),n=e.slice(o+1,i>-1?i:e.length),t=c(n)),i>-1&&(r=r||e.slice(0,i),s=e.slice(i,e.length)),r=DH(r??e,a),{fullPath:r+(n&&"?")+n+s,path:r,query:t,hash:s}}function PH(c,e){const a=e.query?c(e.query):"";return e.path+(a&&"?")+a+(e.hash||"")}function xe(c,e){return!e||!c.toLowerCase().startsWith(e.toLowerCase())?c:c.slice(e.length)||"/"}function RH(c,e,a){const r=e.matched.length-1,t=a.matched.length-1;return r>-1&&r===t&&Q3(e.matched[r],a.matched[t])&&wr(e.params,a.params)&&c(e.query)===c(a.query)&&e.hash===a.hash}function Q3(c,e){return(c.aliasOf||c)===(e.aliasOf||e)}function wr(c,e){if(Object.keys(c).length!==Object.keys(e).length)return!1;for(const a in c)if(!IH(c[a],e[a]))return!1;return!0}function IH(c,e){return c1(c)?we(c,e):c1(e)?we(e,c):c===e}function we(c,e){return c1(e)?c.length===e.length&&c.every((a,r)=>a===e[r]):c.length===1&&c[0]===e}function DH(c,e){if(c.startsWith("/"))return c;if(!c)return e;const a=e.split("/"),r=c.split("/"),t=r[r.length-1];(t===".."||t===".")&&r.push("");let n=a.length-1,s,i;for(s=0;s<r.length;s++)if(i=r[s],i!==".")if(i==="..")n>1&&n--;else break;return a.slice(0,n).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var D4;(function(c){c.pop="pop",c.push="push"})(D4||(D4={}));var b4;(function(c){c.back="back",c.forward="forward",c.unknown=""})(b4||(b4={}));function OH(c){if(!c)if(A3){const e=document.querySelector("base");c=e&&e.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),EH(c)}const BH=/^[^#]+#/;function FH(c,e){return c.replace(BH,"#")+e}function UH(c,e){const a=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:e.behavior,left:r.left-a.left-(e.left||0),top:r.top-a.top-(e.top||0)}}const T0=()=>({left:window.pageXOffset,top:window.pageYOffset});function WH(c){let e;if("el"in c){const a=c.el,r=typeof a=="string"&&a.startsWith("#"),t=typeof a=="string"?r?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!t)return;e=UH(t,c)}else e=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ne(c,e){return(history.state?history.state.position-e:-1)+c}const t5=new Map;function $H(c,e){t5.set(c,e)}function jH(c){const e=t5.get(c);return t5.delete(c),e}let qH=()=>location.protocol+"//"+location.host;function Nr(c,e){const{pathname:a,search:r,hash:t}=e,n=c.indexOf("#");if(n>-1){let i=t.includes(c.slice(n))?c.slice(n).length:1,o=t.slice(i);return o[0]!=="/"&&(o="/"+o),xe(o,"")}return xe(a,c)+r+t}function GH(c,e,a,r){let t=[],n=[],s=null;const i=({state:h})=>{const p=Nr(c,location),g=a.value,C=e.value;let N=0;if(h){if(a.value=p,e.value=h,s&&s===g){s=null;return}N=C?h.position-C.position:0}else r(p);t.forEach(v=>{v(a.value,g,{delta:N,type:D4.pop,direction:N?N>0?b4.forward:b4.back:b4.unknown})})};function o(){s=a.value}function f(h){t.push(h);const p=()=>{const g=t.indexOf(h);g>-1&&t.splice(g,1)};return n.push(p),p}function l(){const{history:h}=window;h.state&&h.replaceState(i2({},h.state,{scroll:T0()}),"")}function u(){for(const h of n)h();n=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:o,listen:f,destroy:u}}function Se(c,e,a,r=!1,t=!1){return{back:c,current:e,forward:a,replaced:r,position:window.history.length,scroll:t?T0():null}}function KH(c){const{history:e,location:a}=window,r={value:Nr(c,a)},t={value:e.state};t.value||n(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function n(o,f,l){const u=c.indexOf("#"),h=u>-1?(a.host&&document.querySelector("base")?c:c.slice(u))+o:qH()+c+o;try{e[l?"replaceState":"pushState"](f,"",h),t.value=f}catch(p){console.error(p),a[l?"replace":"assign"](h)}}function s(o,f){const l=i2({},e.state,Se(t.value.back,o,t.value.forward,!0),f,{position:t.value.position});n(o,l,!0),r.value=o}function i(o,f){const l=i2({},t.value,e.state,{forward:o,scroll:T0()});n(l.current,l,!0);const u=i2({},Se(r.value,o,null),{position:l.position+1},f);n(o,u,!1),r.value=o}return{location:r,state:t,push:i,replace:s}}function Sr(c){c=OH(c);const e=KH(c),a=GH(c,e.state,e.location,e.replace);function r(n,s=!0){s||a.pauseListeners(),history.go(n)}const t=i2({location:"",base:c,go:r,createHref:FH.bind(null,c)},e,a);return Object.defineProperty(t,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(t,"state",{enumerable:!0,get:()=>e.state.value}),t}function XH(c){return c=location.host?c||location.pathname+location.search:"",c.includes("#")||(c+="#"),Sr(c)}function YH(c){return typeof c=="string"||c&&typeof c=="object"}function kr(c){return typeof c=="string"||typeof c=="symbol"}const r1={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ar=Symbol("");var ke;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(ke||(ke={}));function Z3(c,e){return i2(new Error,{type:c,[Ar]:!0},e)}function u1(c,e){return c instanceof Error&&Ar in c&&(e==null||!!(c.type&e))}const Ae="[^/]+?",JH={sensitive:!1,strict:!1,start:!0,end:!0},QH=/[.+*?^${}()[\]/\\]/g;function ZH(c,e){const a=i2({},JH,e),r=[];let t=a.start?"^":"";const n=[];for(const f of c){const l=f.length?[]:[90];a.strict&&!f.length&&(t+="/");for(let u=0;u<f.length;u++){const h=f[u];let p=40+(a.sensitive?.25:0);if(h.type===0)u||(t+="/"),t+=h.value.replace(QH,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:C,optional:N,regexp:v}=h;n.push({name:g,repeatable:C,optional:N});const m=v||Ae;if(m!==Ae){p+=10;try{new RegExp(`(${m})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${g}" (${m}): `+z.message)}}let M=C?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;u||(M=N&&f.length<2?`(?:/${M})`:"/"+M),N&&(M+="?"),t+=M,p+=20,N&&(p+=-8),C&&(p+=-20),m===".*"&&(p+=-50)}l.push(p)}r.push(l)}if(a.strict&&a.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}a.strict||(t+="/?"),a.end?t+="$":a.strict&&(t+="(?:/|$)");const s=new RegExp(t,a.sensitive?"":"i");function i(f){const l=f.match(s),u={};if(!l)return null;for(let h=1;h<l.length;h++){const p=l[h]||"",g=n[h-1];u[g.name]=p&&g.repeatable?p.split("/"):p}return u}function o(f){let l="",u=!1;for(const h of c){(!u||!l.endsWith("/"))&&(l+="/"),u=!1;for(const p of h)if(p.type===0)l+=p.value;else if(p.type===1){const{value:g,repeatable:C,optional:N}=p,v=g in f?f[g]:"";if(c1(v)&&!C)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const m=c1(v)?v.join("/"):v;if(!m)if(N)h.length<2&&(l.endsWith("/")?l=l.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);l+=m}}return l||"/"}return{re:s,score:r,keys:n,parse:i,stringify:o}}function cz(c,e){let a=0;for(;a<c.length&&a<e.length;){const r=e[a]-c[a];if(r)return r;a++}return c.length<e.length?c.length===1&&c[0]===40+40?-1:1:c.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ez(c,e){let a=0;const r=c.score,t=e.score;for(;a<r.length&&a<t.length;){const n=cz(r[a],t[a]);if(n)return n;a++}if(Math.abs(t.length-r.length)===1){if(_e(r))return 1;if(_e(t))return-1}return t.length-r.length}function _e(c){const e=c[c.length-1];return c.length>0&&e[e.length-1]<0}const az={type:0,value:""},rz=/[a-zA-Z0-9_]/;function tz(c){if(!c)return[[]];if(c==="/")return[[az]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function e(p){throw new Error(`ERR (${a})/"${f}": ${p}`)}let a=0,r=a;const t=[];let n;function s(){n&&t.push(n),n=[]}let i=0,o,f="",l="";function u(){f&&(a===0?n.push({type:0,value:f}):a===1||a===2||a===3?(n.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),n.push({type:1,value:f,regexp:l,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),f="")}function h(){f+=o}for(;i<c.length;){if(o=c[i++],o==="\\"&&a!==2){r=a,a=4;continue}switch(a){case 0:o==="/"?(f&&u(),s()):o===":"?(u(),a=1):h();break;case 4:h(),a=r;break;case 1:o==="("?a=2:rz.test(o)?h():(u(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&i--);break;case 2:o===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+o:a=3:l+=o;break;case 3:u(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&i--,l="";break;default:e("Unknown state");break}}return a===2&&e(`Unfinished custom RegExp for param "${f}"`),u(),s(),t}function nz(c,e,a){const r=ZH(tz(c.path),a),t=i2(r,{record:c,parent:e,children:[],alias:[]});return e&&!t.record.aliasOf==!e.record.aliasOf&&e.children.push(t),t}function sz(c,e){const a=[],r=new Map;e=Pe({strict:!1,end:!0,sensitive:!1},e);function t(l){return r.get(l)}function n(l,u,h){const p=!h,g=iz(l);g.aliasOf=h&&h.record;const C=Pe(e,l),N=[g];if("alias"in l){const M=typeof l.alias=="string"?[l.alias]:l.alias;for(const z of M)N.push(i2({},g,{components:h?h.record.components:g.components,path:z,aliasOf:h?h.record:g}))}let v,m;for(const M of N){const{path:z}=M;if(u&&z[0]!=="/"){const b=u.record.path,A=b[b.length-1]==="/"?"":"/";M.path=u.record.path+(z&&A+z)}if(v=nz(M,u,C),h?h.alias.push(v):(m=m||v,m!==v&&m.alias.push(v),p&&l.name&&!Ee(v)&&s(l.name)),g.children){const b=g.children;for(let A=0;A<b.length;A++)n(b[A],v,h&&h.children[A])}h=h||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&o(v)}return m?()=>{s(m)}:L4}function s(l){if(kr(l)){const u=r.get(l);u&&(r.delete(l),a.splice(a.indexOf(u),1),u.children.forEach(s),u.alias.forEach(s))}else{const u=a.indexOf(l);u>-1&&(a.splice(u,1),l.record.name&&r.delete(l.record.name),l.children.forEach(s),l.alias.forEach(s))}}function i(){return a}function o(l){let u=0;for(;u<a.length&&ez(l,a[u])>=0&&(l.record.path!==a[u].record.path||!_r(l,a[u]));)u++;a.splice(u,0,l),l.record.name&&!Ee(l)&&r.set(l.record.name,l)}function f(l,u){let h,p={},g,C;if("name"in l&&l.name){if(h=r.get(l.name),!h)throw Z3(1,{location:l});C=h.record.name,p=i2(Te(u.params,h.keys.filter(m=>!m.optional).map(m=>m.name)),l.params&&Te(l.params,h.keys.map(m=>m.name))),g=h.stringify(p)}else if("path"in l)g=l.path,h=a.find(m=>m.re.test(g)),h&&(p=h.parse(g),C=h.record.name);else{if(h=u.name?r.get(u.name):a.find(m=>m.re.test(u.path)),!h)throw Z3(1,{location:l,currentLocation:u});C=h.record.name,p=i2({},u.params,l.params),g=h.stringify(p)}const N=[];let v=h;for(;v;)N.unshift(v.record),v=v.parent;return{name:C,path:g,params:p,matched:N,meta:lz(N)}}return c.forEach(l=>n(l)),{addRoute:n,resolve:f,removeRoute:s,getRoutes:i,getRecordMatcher:t}}function Te(c,e){const a={};for(const r of e)r in c&&(a[r]=c[r]);return a}function iz(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:oz(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function oz(c){const e={},a=c.props||!1;if("component"in c)e.default=a;else for(const r in c.components)e[r]=typeof a=="object"?a[r]:a;return e}function Ee(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function lz(c){return c.reduce((e,a)=>i2(e,a.meta),{})}function Pe(c,e){const a={};for(const r in c)a[r]=r in e?e[r]:c[r];return a}function _r(c,e){return e.children.some(a=>a===c||_r(c,a))}const Tr=/#/g,fz=/&/g,uz=/\//g,hz=/=/g,mz=/\?/g,Er=/\+/g,dz=/%5B/g,pz=/%5D/g,Pr=/%5E/g,vz=/%60/g,Rr=/%7B/g,Hz=/%7C/g,Ir=/%7D/g,zz=/%20/g;function ec(c){return encodeURI(""+c).replace(Hz,"|").replace(dz,"[").replace(pz,"]")}function Vz(c){return ec(c).replace(Rr,"{").replace(Ir,"}").replace(Pr,"^")}function n5(c){return ec(c).replace(Er,"%2B").replace(zz,"+").replace(Tr,"%23").replace(fz,"%26").replace(vz,"`").replace(Rr,"{").replace(Ir,"}").replace(Pr,"^")}function gz(c){return n5(c).replace(hz,"%3D")}function Mz(c){return ec(c).replace(Tr,"%23").replace(mz,"%3F")}function Cz(c){return c==null?"":Mz(c).replace(uz,"%2F")}function r0(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function Lz(c){const e={};if(c===""||c==="?")return e;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let t=0;t<r.length;++t){const n=r[t].replace(Er," "),s=n.indexOf("="),i=r0(s<0?n:n.slice(0,s)),o=s<0?null:r0(n.slice(s+1));if(i in e){let f=e[i];c1(f)||(f=e[i]=[f]),f.push(o)}else e[i]=o}return e}function Re(c){let e="";for(let a in c){const r=c[a];if(a=gz(a),r==null){r!==void 0&&(e+=(e.length?"&":"")+a);continue}(c1(r)?r.map(n=>n&&n5(n)):[r&&n5(r)]).forEach(n=>{n!==void 0&&(e+=(e.length?"&":"")+a,n!=null&&(e+="="+n))})}return e}function bz(c){const e={};for(const a in c){const r=c[a];r!==void 0&&(e[a]=c1(r)?r.map(t=>t==null?null:""+t):r==null?r:""+r)}return e}const yz=Symbol(""),Ie=Symbol(""),ac=Symbol(""),rc=Symbol(""),s5=Symbol("");function h4(){let c=[];function e(r){return c.push(r),()=>{const t=c.indexOf(r);t>-1&&c.splice(t,1)}}function a(){c=[]}return{add:e,list:()=>c.slice(),reset:a}}function D1(c,e,a,r,t){const n=r&&(r.enterCallbacks[t]=r.enterCallbacks[t]||[]);return()=>new Promise((s,i)=>{const o=u=>{u===!1?i(Z3(4,{from:a,to:e})):u instanceof Error?i(u):YH(u)?i(Z3(2,{from:e,to:u})):(n&&r.enterCallbacks[t]===n&&typeof u=="function"&&n.push(u),s())},f=c.call(r&&r.instances[t],e,a,o);let l=Promise.resolve(f);c.length<3&&(l=l.then(o)),l.catch(u=>i(u))})}function z8(c,e,a,r){const t=[];for(const n of c)for(const s in n.components){let i=n.components[s];if(!(e!=="beforeRouteEnter"&&!n.instances[s]))if(xz(i)){const f=(i.__vccOpts||i)[e];f&&t.push(D1(f,a,r,n,s))}else{let o=i();t.push(()=>o.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${n.path}"`));const l=_H(f)?f.default:f;n.components[s]=l;const h=(l.__vccOpts||l)[e];return h&&D1(h,a,r,n,s)()}))}}return t}function xz(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function De(c){const e=F2(ac),a=F2(rc),r=y2(()=>e.resolve(p2(c.to))),t=y2(()=>{const{matched:o}=r.value,{length:f}=o,l=o[f-1],u=a.matched;if(!l||!u.length)return-1;const h=u.findIndex(Q3.bind(null,l));if(h>-1)return h;const p=Oe(o[f-2]);return f>1&&Oe(l)===p&&u[u.length-1].path!==p?u.findIndex(Q3.bind(null,o[f-2])):h}),n=y2(()=>t.value>-1&&kz(a.params,r.value.params)),s=y2(()=>t.value>-1&&t.value===a.matched.length-1&&wr(a.params,r.value.params));function i(o={}){return Sz(o)?e[p2(c.replace)?"replace":"push"](p2(c.to)).catch(L4):Promise.resolve()}return{route:r,href:y2(()=>r.value.href),isActive:n,isExactActive:s,navigate:i}}const wz=b3({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:De,setup(c,{slots:e}){const a=z1(De(c)),{options:r}=F2(ac),t=y2(()=>({[Be(c.activeClass,r.linkActiveClass,"router-link-active")]:a.isActive,[Be(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const n=e.default&&e.default(a);return c.custom?n:g1("a",{"aria-current":a.isExactActive?c.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:t.value},n)}}}),Nz=wz;function Sz(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const e=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return c.preventDefault&&c.preventDefault(),!0}}function kz(c,e){for(const a in e){const r=e[a],t=c[a];if(typeof r=="string"){if(r!==t)return!1}else if(!c1(t)||t.length!==r.length||r.some((n,s)=>n!==t[s]))return!1}return!0}function Oe(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const Be=(c,e,a)=>c??e??a,Az=b3({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:e,slots:a}){const r=F2(s5),t=y2(()=>c.route||r.value),n=F2(Ie,0),s=y2(()=>{let f=p2(n);const{matched:l}=t.value;let u;for(;(u=l[f])&&!u.components;)f++;return f}),i=y2(()=>t.value.matched[s.value]);W3(Ie,y2(()=>s.value+1)),W3(yz,i),W3(s5,t);const o=$1();return F3(()=>[o.value,i.value,c.name],([f,l,u],[h,p,g])=>{l&&(l.instances[u]=f,p&&p!==l&&f&&f===h&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),f&&l&&(!p||!Q3(l,p)||!h)&&(l.enterCallbacks[u]||[]).forEach(C=>C(f))},{flush:"post"}),()=>{const f=t.value,l=c.name,u=i.value,h=u&&u.components[l];if(!h)return Fe(a.default,{Component:h,route:f});const p=u.props[l],g=p?p===!0?f.params:typeof p=="function"?p(f):p:null,N=g1(h,i2({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(u.instances[l]=null)},ref:o}));return Fe(a.default,{Component:N,route:f})||N}}});function Fe(c,e){if(!c)return null;const a=c(e);return a.length===1?a[0]:a}const _z=Az;function Tz(c){const e=sz(c.routes,c),a=c.parseQuery||Lz,r=c.stringifyQuery||Re,t=c.history,n=h4(),s=h4(),i=h4(),o=k4(r1);let f=r1;A3&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=v8.bind(null,y=>""+y),u=v8.bind(null,Cz),h=v8.bind(null,r0);function p(y,B){let P,j;return kr(y)?(P=e.getRecordMatcher(y),j=B):j=y,e.addRoute(j,P)}function g(y){const B=e.getRecordMatcher(y);B&&e.removeRoute(B)}function C(){return e.getRoutes().map(y=>y.record)}function N(y){return!!e.getRecordMatcher(y)}function v(y,B){if(B=i2({},B||o.value),typeof y=="string"){const V=H8(a,y,B.path),L=e.resolve({path:V.path},B),x=t.createHref(V.fullPath);return i2(V,L,{params:h(L.params),hash:r0(V.hash),redirectedFrom:void 0,href:x})}let P;if("path"in y)P=i2({},y,{path:H8(a,y.path,B.path).path});else{const V=i2({},y.params);for(const L in V)V[L]==null&&delete V[L];P=i2({},y,{params:u(V)}),B.params=u(B.params)}const j=e.resolve(P,B),s2=y.hash||"";j.params=l(h(j.params));const d=PH(r,i2({},y,{hash:Vz(s2),path:j.path})),H=t.createHref(d);return i2({fullPath:d,hash:s2,query:r===Re?bz(y.query):y.query||{}},j,{redirectedFrom:void 0,href:H})}function m(y){return typeof y=="string"?H8(a,y,o.value.path):i2({},y)}function M(y,B){if(f!==y)return Z3(8,{from:B,to:y})}function z(y){return _(y)}function b(y){return z(i2(m(y),{replace:!0}))}function A(y){const B=y.matched[y.matched.length-1];if(B&&B.redirect){const{redirect:P}=B;let j=typeof P=="function"?P(y):P;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=m(j):{path:j},j.params={}),i2({query:y.query,hash:y.hash,params:"path"in j?{}:y.params},j)}}function _(y,B){const P=f=v(y),j=o.value,s2=y.state,d=y.force,H=y.replace===!0,V=A(P);if(V)return _(i2(m(V),{state:typeof V=="object"?i2({},s2,V.state):s2,force:d,replace:H}),B||P);const L=P;L.redirectedFrom=B;let x;return!d&&RH(r,j,P)&&(x=Z3(16,{to:L,from:j}),e1(j,j,!0,!1)),(x?Promise.resolve(x):U(L,j)).catch(S=>u1(S)?u1(S,2)?S:N1(S):n2(S,L,j)).then(S=>{if(S){if(u1(S,2))return _(i2({replace:H},m(S.to),{state:typeof S.to=="object"?i2({},s2,S.to.state):s2,force:d}),B||L)}else S=D(L,j,!0,H,s2);return Y(L,j,S),S})}function w(y,B){const P=M(y,B);return P?Promise.reject(P):Promise.resolve()}function I(y){const B=N3.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(y):y()}function U(y,B){let P;const[j,s2,d]=Ez(y,B);P=z8(j.reverse(),"beforeRouteLeave",y,B);for(const V of j)V.leaveGuards.forEach(L=>{P.push(D1(L,y,B))});const H=w.bind(null,y,B);return P.push(H),N2(P).then(()=>{P=[];for(const V of n.list())P.push(D1(V,y,B));return P.push(H),N2(P)}).then(()=>{P=z8(s2,"beforeRouteUpdate",y,B);for(const V of s2)V.updateGuards.forEach(L=>{P.push(D1(L,y,B))});return P.push(H),N2(P)}).then(()=>{P=[];for(const V of d)if(V.beforeEnter)if(c1(V.beforeEnter))for(const L of V.beforeEnter)P.push(D1(L,y,B));else P.push(D1(V.beforeEnter,y,B));return P.push(H),N2(P)}).then(()=>(y.matched.forEach(V=>V.enterCallbacks={}),P=z8(d,"beforeRouteEnter",y,B),P.push(H),N2(P))).then(()=>{P=[];for(const V of s.list())P.push(D1(V,y,B));return P.push(H),N2(P)}).catch(V=>u1(V,8)?V:Promise.reject(V))}function Y(y,B,P){i.list().forEach(j=>I(()=>j(y,B,P)))}function D(y,B,P,j,s2){const d=M(y,B);if(d)return d;const H=B===r1,V=A3?history.state:{};P&&(j||H?t.replace(y.fullPath,i2({scroll:H&&V&&V.scroll},s2)):t.push(y.fullPath,s2)),o.value=y,e1(y,B,P,H),N1()}let X;function F(){X||(X=t.listen((y,B,P)=>{if(!m6.listening)return;const j=v(y),s2=A(j);if(s2){_(i2(s2,{replace:!0}),j).catch(L4);return}f=j;const d=o.value;A3&&$H(Ne(d.fullPath,P.delta),T0()),U(j,d).catch(H=>u1(H,12)?H:u1(H,2)?(_(H.to,j).then(V=>{u1(V,20)&&!P.delta&&P.type===D4.pop&&t.go(-1,!1)}).catch(L4),Promise.reject()):(P.delta&&t.go(-P.delta,!1),n2(H,j,d))).then(H=>{H=H||D(j,d,!1),H&&(P.delta&&!u1(H,8)?t.go(-P.delta,!1):P.type===D4.pop&&u1(H,20)&&t.go(-1,!1)),Y(j,d,H)}).catch(L4)}))}let g2=h4(),e2=h4(),t2;function n2(y,B,P){N1(y);const j=e2.list();return j.length?j.forEach(s2=>s2(y,B,P)):console.error(y),Promise.reject(y)}function f1(){return t2&&o.value!==r1?Promise.resolve():new Promise((y,B)=>{g2.add([y,B])})}function N1(y){return t2||(t2=!y,F(),g2.list().forEach(([B,P])=>y?P(y):B()),g2.reset()),y}function e1(y,B,P,j){const{scrollBehavior:s2}=c;if(!A3||!s2)return Promise.resolve();const d=!P&&jH(Ne(y.fullPath,0))||(j||!P)&&history.state&&history.state.scroll||null;return i4().then(()=>s2(y,B,d)).then(H=>H&&WH(H)).catch(H=>n2(H,y,B))}const _2=y=>t.go(y);let w3;const N3=new Set,m6={currentRoute:o,listening:!0,addRoute:p,removeRoute:g,hasRoute:N,getRoutes:C,resolve:v,options:c,push:z,replace:b,go:_2,back:()=>_2(-1),forward:()=>_2(1),beforeEach:n.add,beforeResolve:s.add,afterEach:i.add,onError:e2.add,isReady:f1,install(y){const B=this;y.component("RouterLink",Nz),y.component("RouterView",_z),y.config.globalProperties.$router=B,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>p2(o)}),A3&&!w3&&o.value===r1&&(w3=!0,z(t.location).catch(s2=>{}));const P={};for(const s2 in r1)Object.defineProperty(P,s2,{get:()=>o.value[s2],enumerable:!0});y.provide(ac,B),y.provide(rc,g0(P)),y.provide(s5,o);const j=y.unmount;N3.add(y),y.unmount=function(){N3.delete(y),N3.size<1&&(f=r1,X&&X(),X=null,o.value=r1,w3=!1,t2=!1),j()}}};function N2(y){return y.reduce((B,P)=>B.then(()=>I(P)),Promise.resolve())}return m6}function Ez(c,e){const a=[],r=[],t=[],n=Math.max(e.matched.length,c.matched.length);for(let s=0;s<n;s++){const i=e.matched[s];i&&(c.matched.find(f=>Q3(f,i))?r.push(i):a.push(i));const o=c.matched[s];o&&(e.matched.find(f=>Q3(f,o))||t.push(o))}return[a,r,t]}function Pz(){return F2(rc)}const Ue=[{name:"index",path:"/",meta:{},alias:[],redirect:void 0,component:()=>$3(()=>import("./index.f252c23f.js"),["./index.f252c23f.js","./api.5ce6cc8e.js","./index.f21be727.css"],import.meta.url).then(c=>c.default||c)},{name:"users-login",path:"/users/login",meta:{},alias:[],redirect:void 0,component:()=>$3(()=>import("./login.07ce02ea.js"),["./login.07ce02ea.js","./user.e72c88be.js","./api.5ce6cc8e.js","./user.2ab23bdd.css","./login.d9e6be85.css"],import.meta.url).then(c=>c.default||c)},{name:"users-signup",path:"/users/signup",meta:{},alias:[],redirect:void 0,component:()=>$3(()=>import("./signup.033d4468.js"),["./signup.033d4468.js","./user.e72c88be.js","./api.5ce6cc8e.js","./user.2ab23bdd.css","./signup.6a01e445.css"],import.meta.url).then(c=>c.default||c)}],Rz={scrollBehavior(c,e,a){var f;const r=z2(),t=((f=x3().options)==null?void 0:f.scrollBehaviorType)??"auto";let n=a||void 0;const s=typeof c.meta.scrollToTop=="function"?c.meta.scrollToTop(c,e):c.meta.scrollToTop;if(!n&&e&&c&&s!==!1&&Iz(e,c)&&(n={left:0,top:0}),c.path===e.path){if(e.hash&&!c.hash)return{left:0,top:0};if(c.hash)return{el:c.hash,top:We(c.hash),behavior:t}}const i=l=>!!(l.meta.pageTransition??zH),o=i(e)&&i(c)?"page:transition:finish":"page:finish";return new Promise(l=>{r.hooks.hookOnce(o,async()=>{await i4(),c.hash&&(n={el:c.hash,top:We(c.hash),behavior:t}),l(n)})})}};function We(c){try{const e=document.querySelector(c);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}function Iz(c,e){return e.path!==c.path||JSON.stringify(c.params)!==JSON.stringify(e.params)}const Dz={},T2={...Dz,...Rz},Oz=async c=>{var o;let e,a;if(!((o=c.meta)!=null&&o.validate))return;const r=z2(),t=x3();if(([e,a]=I4(()=>Promise.resolve(c.meta.validate(c))),e=await e,a(),e)===!0)return;const s=cc({statusCode:404,statusMessage:`Page Not Found: ${c.fullPath}`}),i=t.beforeResolve(f=>{if(i(),f===c){const l=t.afterEach(async()=>{l(),await r.runWithContext(()=>_3(s)),window.history.pushState({},"",c.fullPath)});return!1}})},Bz=async c=>{let e,a;const r=([e,a]=I4(()=>br(c.path)),e=await e,a(),e);if(r.redirect)return r.redirect},Fz=[Oz,Bz],y4={};function Uz(c,e,a){const{pathname:r,search:t,hash:n}=e,s=c.indexOf("#");if(s>-1){const f=n.includes(c.slice(s))?c.slice(s).length:1;let l=n.slice(f);return l[0]!=="/"&&(l="/"+l),oe(l,"")}const i=oe(r,c),o=!a||Pp(i,a,{trailingSlash:!0})?i:a;return o+(o.includes("?")?"":t)+n}const Wz=G2({name:"nuxt:router",enforce:"pre",async setup(c){var C,N;let e,a,r=J4().app.baseURL;T2.hashMode&&!r.includes("#")&&(r+="#");const t=((C=T2.history)==null?void 0:C.call(T2,r))??(T2.hashMode?XH(r):Sr(r)),n=((N=T2.routes)==null?void 0:N.call(T2,Ue))??Ue;let s;const i=Uz(r,window.location,c.payload.path),o=Tz({...T2,scrollBehavior:(v,m,M)=>{var z;if(m===r1){s=M;return}return o.options.scrollBehavior=T2.scrollBehavior,(z=T2.scrollBehavior)==null?void 0:z.call(T2,v,r1,s||M)},history:t,routes:n});c.vueApp.use(o);const f=k4(o.currentRoute.value);o.afterEach((v,m)=>{f.value=m}),Object.defineProperty(c.vueApp.config.globalProperties,"previousRoute",{get:()=>f.value});const l=k4(o.resolve(i)),u=()=>{l.value=o.currentRoute.value};c.hook("page:finish",u),o.afterEach((v,m)=>{var M,z,b,A;((z=(M=v.matched[0])==null?void 0:M.components)==null?void 0:z.default)===((A=(b=m.matched[0])==null?void 0:b.components)==null?void 0:A.default)&&u()});const h={};for(const v in l.value)Object.defineProperty(h,v,{get:()=>l.value[v]});c._route=g0(h),c._middleware=c._middleware||{global:[],named:{}};const p=A0();try{[e,a]=I4(()=>o.isReady()),await e,a()}catch(v){[e,a]=I4(()=>c.runWithContext(()=>_3(v))),await e,a()}const g=c.payload.state._layout;return o.beforeEach(async(v,m)=>{var M;v.meta=z1(v.meta),c.isHydrating&&g&&!z3(v.meta.layout)&&(v.meta.layout=g),c._processingMiddleware=!0;{const z=new Set([...Fz,...c._middleware.global]);for(const b of v.matched){const A=b.meta.middleware;if(A)if(Array.isArray(A))for(const _ of A)z.add(_);else z.add(A)}for(const b of z){const A=typeof b=="string"?c._middleware.named[b]||await((M=y4[b])==null?void 0:M.call(y4).then(w=>w.default||w)):b;if(!A)throw new Error(`Unknown route middleware: '${b}'.`);const _=await c.runWithContext(()=>A(v,m));if(!c.payload.serverRendered&&c.isHydrating&&(_===!1||_ instanceof Error)){const w=_||a5({statusCode:404,statusMessage:`Page Not Found: ${i}`});return await c.runWithContext(()=>_3(w)),!1}if(_!==!0&&(_||_===!1))return _}}}),o.onError(()=>{delete c._processingMiddleware}),o.afterEach(async(v,m,M)=>{delete c._processingMiddleware,!c.isHydrating&&p.value&&await c.runWithContext(pH),v.matched.length===0&&await c.runWithContext(()=>_3(a5({statusCode:404,fatal:!1,statusMessage:`Page not found: ${v.fullPath}`})))}),c.hooks.hookOnce("app:created",async()=>{try{await o.replace({...o.resolve(i),name:void 0,force:!0}),o.options.scrollBehavior=T2.scrollBehavior}catch(v){await c.runWithContext(()=>_3(v))}}),{provide:{router:o}}}}),$z=G2({name:"nuxt:payload",setup(c){x3().beforeResolve(async(e,a)=>{if(e.path===a.path)return;const r=await Le(e.path);r&&Object.assign(c.static.data,r.data)}),Cr(()=>{var e;c.hooks.hook("link:prefetch",async a=>{k0(a).protocol||await Le(a)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(_0,1e3)})}}),jz=G2({name:"nuxt:global-components"}),u3={default:()=>$3(()=>import("./default.f08130e3.js"),["./default.f08130e3.js","./nuxt-link.c99dc3aa.js","./default.57e61cb8.css"],import.meta.url).then(c=>c.default||c)},qz=G2({name:"nuxt:prefetch",setup(c){const e=x3();c.hooks.hook("app:mounted",()=>{e.beforeEach(async a=>{var t;const r=(t=a==null?void 0:a.meta)==null?void 0:t.layout;r&&typeof u3[r]=="function"&&await u3[r]()})}),c.hooks.hook("link:prefetch",a=>{var s,i,o,f;if(Y4(a))return;const r=e.resolve(a);if(!r)return;const t=(s=r==null?void 0:r.meta)==null?void 0:s.layout;let n=Array.isArray((i=r==null?void 0:r.meta)==null?void 0:i.middleware)?(o=r==null?void 0:r.meta)==null?void 0:o.middleware:[(f=r==null?void 0:r.meta)==null?void 0:f.middleware];n=n.filter(l=>typeof l=="string");for(const l of n)typeof y4[l]=="function"&&y4[l]();t&&typeof u3[t]=="function"&&u3[t]()})}}),Gz=G2({name:"nuxt:chunk-reload",setup(c){const e=x3(),a=J4(),r=new Set;e.beforeEach(()=>{r.clear()}),c.hook("app:chunkError",({error:n})=>{r.add(n)});function t(n){const i="href"in n&&n.href.startsWith("#")?a.app.baseURL+n.href:y3(a.app.baseURL,n.fullPath);gH({path:i,persistState:!0})}c.hook("app:manifest:update",()=>{e.beforeResolve(t)}),e.onError((n,s)=>{r.has(n)&&t(s)})}}),Kz=G2(c=>{let e;const a=J4();async function r(){const t=await _0();e&&clearTimeout(e),e=setTimeout(r,1e3*60*60);const n=await $fetch(y3(a.app.cdnURL||a.app.baseURL,a.app.buildAssetsDir,"builds/latest.json"));n.id!==t.id&&c.hooks.callHook("app:manifest:update",n)}Cr(()=>{e=setTimeout(r,1e3*60*60)})});function $e(c,e){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);e&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(c,t).enumerable})),a.push.apply(a,r)}return a}function O(c){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?$e(Object(a),!0).forEach(function(r){b2(c,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):$e(Object(a)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(a,r))})}return c}function t0(c){"@babel/helpers - typeof";return t0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t0(c)}function Xz(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function je(c,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Yz(c,e,a){return e&&je(c.prototype,e),a&&je(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function b2(c,e,a){return e in c?Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[e]=a,c}function tc(c,e){return Qz(c)||cV(c,e)||Dr(c,e)||aV()}function Q4(c){return Jz(c)||Zz(c)||Dr(c)||eV()}function Jz(c){if(Array.isArray(c))return i5(c)}function Qz(c){if(Array.isArray(c))return c}function Zz(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function cV(c,e){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var r=[],t=!0,n=!1,s,i;try{for(a=a.call(c);!(t=(s=a.next()).done)&&(r.push(s.value),!(e&&r.length===e));t=!0);}catch(o){n=!0,i=o}finally{try{!t&&a.return!=null&&a.return()}finally{if(n)throw i}}return r}}function Dr(c,e){if(c){if(typeof c=="string")return i5(c,e);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i5(c,e)}}function i5(c,e){(e==null||e>c.length)&&(e=c.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=c[a];return r}function eV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aV(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qe=function(){},nc={},Or={},Br=null,Fr={mark:qe,measure:qe};try{typeof window<"u"&&(nc=window),typeof document<"u"&&(Or=document),typeof MutationObserver<"u"&&(Br=MutationObserver),typeof performance<"u"&&(Fr=performance)}catch{}var rV=nc.navigator||{},Ge=rV.userAgent,Ke=Ge===void 0?"":Ge,Y1=nc,d2=Or,Xe=Br,y6=Fr;Y1.document;var w1=!!d2.documentElement&&!!d2.head&&typeof d2.addEventListener=="function"&&typeof d2.createElement=="function",Ur=~Ke.indexOf("MSIE")||~Ke.indexOf("Trident/"),x6,w6,N6,S6,k6,M1="___FONT_AWESOME___",o5=16,Wr="fa",$r="svg-inline--fa",V3="data-fa-i2svg",l5="data-fa-pseudo-element",tV="data-fa-pseudo-element-pending",sc="data-prefix",ic="data-icon",Ye="fontawesome-i2svg",nV="async",sV=["HTML","HEAD","STYLE","SCRIPT"],jr=function(){try{return!0}catch{return!1}}(),m2="classic",H2="sharp",oc=[m2,H2];function Z4(c){return new Proxy(c,{get:function(a,r){return r in a?a[r]:a[m2]}})}var O4=Z4((x6={},b2(x6,m2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),b2(x6,H2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),x6)),B4=Z4((w6={},b2(w6,m2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),b2(w6,H2,{solid:"fass",regular:"fasr",light:"fasl"}),w6)),F4=Z4((N6={},b2(N6,m2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),b2(N6,H2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),N6)),iV=Z4((S6={},b2(S6,m2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),b2(S6,H2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),S6)),oV=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,qr="fa-layers-text",lV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,fV=Z4((k6={},b2(k6,m2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),b2(k6,H2,{900:"fass",400:"fasr",300:"fasl"}),k6)),Gr=[1,2,3,4,5,6,7,8,9,10],uV=Gr.concat([11,12,13,14,15,16,17,18,19,20]),hV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],h3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},U4=new Set;Object.keys(B4[m2]).map(U4.add.bind(U4));Object.keys(B4[H2]).map(U4.add.bind(U4));var mV=[].concat(oc,Q4(U4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",h3.GROUP,h3.SWAP_OPACITY,h3.PRIMARY,h3.SECONDARY]).concat(Gr.map(function(c){return"".concat(c,"x")})).concat(uV.map(function(c){return"w-".concat(c)})),x4=Y1.FontAwesomeConfig||{};function dV(c){var e=d2.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function pV(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(d2&&typeof d2.querySelector=="function"){var vV=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];vV.forEach(function(c){var e=tc(c,2),a=e[0],r=e[1],t=pV(dV(a));t!=null&&(x4[r]=t)})}var Kr={styleDefault:"solid",familyDefault:"classic",cssPrefix:Wr,replacementClass:$r,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};x4.familyPrefix&&(x4.cssPrefix=x4.familyPrefix);var c4=O(O({},Kr),x4);c4.autoReplaceSvg||(c4.observeMutations=!1);var $={};Object.keys(Kr).forEach(function(c){Object.defineProperty($,c,{enumerable:!0,set:function(a){c4[c]=a,w4.forEach(function(r){return r($)})},get:function(){return c4[c]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(e){c4.cssPrefix=e,w4.forEach(function(a){return a($)})},get:function(){return c4.cssPrefix}});Y1.FontAwesomeConfig=$;var w4=[];function HV(c){return w4.push(c),function(){w4.splice(w4.indexOf(c),1)}}var E1=o5,s1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zV(c){if(!(!c||!w1)){var e=d2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var a=d2.head.childNodes,r=null,t=a.length-1;t>-1;t--){var n=a[t],s=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=n)}return d2.head.insertBefore(e,r),c}}var VV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function W4(){for(var c=12,e="";c-- >0;)e+=VV[Math.random()*62|0];return e}function o4(c){for(var e=[],a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function lc(c){return c.classList?o4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Xr(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gV(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(Xr(c[a]),'" ')},"").trim()}function E0(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(c[a].trim(),";")},"")}function fc(c){return c.size!==s1.size||c.x!==s1.x||c.y!==s1.y||c.rotate!==s1.rotate||c.flipX||c.flipY}function MV(c){var e=c.transform,a=c.containerWidth,r=c.iconWidth,t={transform:"translate(".concat(a/2," 256)")},n="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(n," ").concat(s," ").concat(i)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:t,inner:o,path:f}}function CV(c){var e=c.transform,a=c.width,r=a===void 0?o5:a,t=c.height,n=t===void 0?o5:t,s=c.startCentered,i=s===void 0?!1:s,o="";return i&&Ur?o+="translate(".concat(e.x/E1-r/2,"em, ").concat(e.y/E1-n/2,"em) "):i?o+="translate(calc(-50% + ".concat(e.x/E1,"em), calc(-50% + ").concat(e.y/E1,"em)) "):o+="translate(".concat(e.x/E1,"em, ").concat(e.y/E1,"em) "),o+="scale(".concat(e.size/E1*(e.flipX?-1:1),", ").concat(e.size/E1*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var LV=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Yr(){var c=Wr,e=$r,a=$.cssPrefix,r=$.replacementClass,t=LV;if(a!==c||r!==e){var n=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");t=t.replace(n,".".concat(a,"-")).replace(s,"--".concat(a,"-")).replace(i,".".concat(r))}return t}var Je=!1;function V8(){$.autoAddCss&&!Je&&(zV(Yr()),Je=!0)}var bV={mixout:function(){return{dom:{css:Yr,insertCss:V8}}},hooks:function(){return{beforeDOMElementCreation:function(){V8()},beforeI2svg:function(){V8()}}}},C1=Y1||{};C1[M1]||(C1[M1]={});C1[M1].styles||(C1[M1].styles={});C1[M1].hooks||(C1[M1].hooks={});C1[M1].shims||(C1[M1].shims=[]);var Q2=C1[M1],Jr=[],yV=function c(){d2.removeEventListener("DOMContentLoaded",c),n0=1,Jr.map(function(e){return e()})},n0=!1;w1&&(n0=(d2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d2.readyState),n0||d2.addEventListener("DOMContentLoaded",yV));function xV(c){w1&&(n0?setTimeout(c,0):Jr.push(c))}function c6(c){var e=c.tag,a=c.attributes,r=a===void 0?{}:a,t=c.children,n=t===void 0?[]:t;return typeof c=="string"?Xr(c):"<".concat(e," ").concat(gV(r),">").concat(n.map(c6).join(""),"</").concat(e,">")}function Qe(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var wV=function(e,a){return function(r,t,n,s){return e.call(a,r,t,n,s)}},g8=function(e,a,r,t){var n=Object.keys(e),s=n.length,i=t!==void 0?wV(a,t):a,o,f,l;for(r===void 0?(o=1,l=e[n[0]]):(o=0,l=r);o<s;o++)f=n[o],l=i(l,e[f],f,e);return l};function NV(c){for(var e=[],a=0,r=c.length;a<r;){var t=c.charCodeAt(a++);if(t>=55296&&t<=56319&&a<r){var n=c.charCodeAt(a++);(n&64512)==56320?e.push(((t&1023)<<10)+(n&1023)+65536):(e.push(t),a--)}else e.push(t)}return e}function f5(c){var e=NV(c);return e.length===1?e[0].toString(16):null}function SV(c,e){var a=c.length,r=c.charCodeAt(e),t;return r>=55296&&r<=56319&&a>e+1&&(t=c.charCodeAt(e+1),t>=56320&&t<=57343)?(r-55296)*1024+t-56320+65536:r}function Ze(c){return Object.keys(c).reduce(function(e,a){var r=c[a],t=!!r.icon;return t?e[r.iconName]=r.icon:e[a]=r,e},{})}function u5(c,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,t=r===void 0?!1:r,n=Ze(e);typeof Q2.hooks.addPack=="function"&&!t?Q2.hooks.addPack(c,Ze(e)):Q2.styles[c]=O(O({},Q2.styles[c]||{}),n),c==="fas"&&u5("fa",e)}var A6,_6,T6,T3=Q2.styles,kV=Q2.shims,AV=(A6={},b2(A6,m2,Object.values(F4[m2])),b2(A6,H2,Object.values(F4[H2])),A6),uc=null,Qr={},Zr={},ct={},et={},at={},_V=(_6={},b2(_6,m2,Object.keys(O4[m2])),b2(_6,H2,Object.keys(O4[H2])),_6);function TV(c){return~mV.indexOf(c)}function EV(c,e){var a=e.split("-"),r=a[0],t=a.slice(1).join("-");return r===c&&t!==""&&!TV(t)?t:null}var rt=function(){var e=function(n){return g8(T3,function(s,i,o){return s[o]=g8(i,n,{}),s},{})};Qr=e(function(t,n,s){if(n[3]&&(t[n[3]]=s),n[2]){var i=n[2].filter(function(o){return typeof o=="number"});i.forEach(function(o){t[o.toString(16)]=s})}return t}),Zr=e(function(t,n,s){if(t[s]=s,n[2]){var i=n[2].filter(function(o){return typeof o=="string"});i.forEach(function(o){t[o]=s})}return t}),at=e(function(t,n,s){var i=n[2];return t[s]=s,i.forEach(function(o){t[o]=s}),t});var a="far"in T3||$.autoFetchSvg,r=g8(kV,function(t,n){var s=n[0],i=n[1],o=n[2];return i==="far"&&!a&&(i="fas"),typeof s=="string"&&(t.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(t.unicodes[s.toString(16)]={prefix:i,iconName:o}),t},{names:{},unicodes:{}});ct=r.names,et=r.unicodes,uc=P0($.styleDefault,{family:$.familyDefault})};HV(function(c){uc=P0(c.styleDefault,{family:$.familyDefault})});rt();function hc(c,e){return(Qr[c]||{})[e]}function PV(c,e){return(Zr[c]||{})[e]}function m3(c,e){return(at[c]||{})[e]}function tt(c){return ct[c]||{prefix:null,iconName:null}}function RV(c){var e=et[c],a=hc("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function J1(){return uc}var mc=function(){return{prefix:null,iconName:null,rest:[]}};function P0(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,r=a===void 0?m2:a,t=O4[r][c],n=B4[r][c]||B4[r][t],s=c in Q2.styles?c:null;return n||s||null}var ca=(T6={},b2(T6,m2,Object.keys(F4[m2])),b2(T6,H2,Object.keys(F4[H2])),T6);function R0(c){var e,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.skipLookups,t=r===void 0?!1:r,n=(e={},b2(e,m2,"".concat($.cssPrefix,"-").concat(m2)),b2(e,H2,"".concat($.cssPrefix,"-").concat(H2)),e),s=null,i=m2;(c.includes(n[m2])||c.some(function(f){return ca[m2].includes(f)}))&&(i=m2),(c.includes(n[H2])||c.some(function(f){return ca[H2].includes(f)}))&&(i=H2);var o=c.reduce(function(f,l){var u=EV($.cssPrefix,l);if(T3[l]?(l=AV[i].includes(l)?iV[i][l]:l,s=l,f.prefix=l):_V[i].indexOf(l)>-1?(s=l,f.prefix=P0(l,{family:i})):u?f.iconName=u:l!==$.replacementClass&&l!==n[m2]&&l!==n[H2]&&f.rest.push(l),!t&&f.prefix&&f.iconName){var h=s==="fa"?tt(f.iconName):{},p=m3(f.prefix,f.iconName);h.prefix&&(s=null),f.iconName=h.iconName||p||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!T3.far&&T3.fas&&!$.autoFetchSvg&&(f.prefix="fas")}return f},mc());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===H2&&(T3.fass||$.autoFetchSvg)&&(o.prefix="fass",o.iconName=m3(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=J1()||"fas"),o}var IV=function(){function c(){Xz(this,c),this.definitions={}}return Yz(c,[{key:"add",value:function(){for(var a=this,r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var s=t.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(i){a.definitions[i]=O(O({},a.definitions[i]||{}),s[i]),u5(i,s[i]);var o=F4[m2][i];o&&u5(o,s[i]),rt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var t=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(t).map(function(n){var s=t[n],i=s.prefix,o=s.iconName,f=s.icon,l=f[2];a[i]||(a[i]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(a[i][u]=f)}),a[i][o]=f}),a}}]),c}(),ea=[],E3={},j3={},DV=Object.keys(j3);function OV(c,e){var a=e.mixoutsTo;return ea=c,E3={},Object.keys(j3).forEach(function(r){DV.indexOf(r)===-1&&delete j3[r]}),ea.forEach(function(r){var t=r.mixout?r.mixout():{};if(Object.keys(t).forEach(function(s){typeof t[s]=="function"&&(a[s]=t[s]),t0(t[s])==="object"&&Object.keys(t[s]).forEach(function(i){a[s]||(a[s]={}),a[s][i]=t[s][i]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(s){E3[s]||(E3[s]=[]),E3[s].push(n[s])})}r.provides&&r.provides(j3)}),a}function h5(c,e){for(var a=arguments.length,r=new Array(a>2?a-2:0),t=2;t<a;t++)r[t-2]=arguments[t];var n=E3[c]||[];return n.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function g3(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),r=1;r<e;r++)a[r-1]=arguments[r];var t=E3[c]||[];t.forEach(function(n){n.apply(null,a)})}function L1(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return j3[c]?j3[c].apply(null,e):void 0}function m5(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,a=c.prefix||J1();if(e)return e=m3(a,e)||e,Qe(nt.definitions,a,e)||Qe(Q2.styles,a,e)}var nt=new IV,BV=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,g3("noAuto")},FV={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return w1?(g3("beforeI2svg",e),L1("pseudoElements2svg",e),L1("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,xV(function(){WV({autoReplaceSvgRoot:a}),g3("watch",e)})}},UV={icon:function(e){if(e===null)return null;if(t0(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:m3(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=P0(e[0]);return{prefix:r,iconName:m3(r,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat($.cssPrefix,"-"))>-1||e.match(oV))){var t=R0(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||J1(),iconName:m3(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){var n=J1();return{prefix:n,iconName:m3(n,e)||e}}}},U2={noAuto:BV,config:$,dom:FV,parse:UV,library:nt,findIconDefinition:m5,toHtml:c6},WV=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,r=a===void 0?d2:a;(Object.keys(Q2.styles).length>0||$.autoFetchSvg)&&w1&&$.autoReplaceSvg&&U2.dom.i2svg({node:r})};function I0(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return c6(r)})}}),Object.defineProperty(c,"node",{get:function(){if(w1){var r=d2.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function $V(c){var e=c.children,a=c.main,r=c.mask,t=c.attributes,n=c.styles,s=c.transform;if(fc(s)&&a.found&&!r.found){var i=a.width,o=a.height,f={x:i/o/2,y:.5};t.style=E0(O(O({},n),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:t,children:e}]}function jV(c){var e=c.prefix,a=c.iconName,r=c.children,t=c.attributes,n=c.symbol,s=n===!0?"".concat(e,"-").concat($.cssPrefix,"-").concat(a):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},t),{},{id:s}),children:r}]}]}function dc(c){var e=c.icons,a=e.main,r=e.mask,t=c.prefix,n=c.iconName,s=c.transform,i=c.symbol,o=c.title,f=c.maskId,l=c.titleId,u=c.extra,h=c.watchable,p=h===void 0?!1:h,g=r.found?r:a,C=g.width,N=g.height,v=t==="fak",m=[$.replacementClass,n?"".concat($.cssPrefix,"-").concat(n):""].filter(function(I){return u.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(u.classes).join(" "),M={children:[],attributes:O(O({},u.attributes),{},{"data-prefix":t,"data-icon":n,class:m,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(N)})},z=v&&!~u.classes.indexOf("fa-fw")?{width:"".concat(C/N*16*.0625,"em")}:{};p&&(M.attributes[V3]=""),o&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(l||W4())},children:[o]}),delete M.attributes.title);var b=O(O({},M),{},{prefix:t,iconName:n,main:a,mask:r,maskId:f,transform:s,symbol:i,styles:O(O({},z),u.styles)}),A=r.found&&a.found?L1("generateAbstractMask",b)||{children:[],attributes:{}}:L1("generateAbstractIcon",b)||{children:[],attributes:{}},_=A.children,w=A.attributes;return b.children=_,b.attributes=w,i?jV(b):$V(b)}function aa(c){var e=c.content,a=c.width,r=c.height,t=c.transform,n=c.title,s=c.extra,i=c.watchable,o=i===void 0?!1:i,f=O(O(O({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")});o&&(f[V3]="");var l=O({},s.styles);fc(t)&&(l.transform=CV({transform:t,startCentered:!0,width:a,height:r}),l["-webkit-transform"]=l.transform);var u=E0(l);u.length>0&&(f.style=u);var h=[];return h.push({tag:"span",attributes:f,children:[e]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}function qV(c){var e=c.content,a=c.title,r=c.extra,t=O(O(O({},r.attributes),a?{title:a}:{}),{},{class:r.classes.join(" ")}),n=E0(r.styles);n.length>0&&(t.style=n);var s=[];return s.push({tag:"span",attributes:t,children:[e]}),a&&s.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),s}var M8=Q2.styles;function d5(c){var e=c[0],a=c[1],r=c.slice(4),t=tc(r,1),n=t[0],s=null;return Array.isArray(n)?s={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(h3.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(h3.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(h3.PRIMARY),fill:"currentColor",d:n[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:a,icon:s}}var GV={found:!1,width:512,height:512};function KV(c,e){!jr&&!$.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function p5(c,e){var a=e;return e==="fa"&&$.styleDefault!==null&&(e=J1()),new Promise(function(r,t){if(L1("missingIconAbstract"),a==="fa"){var n=tt(c)||{};c=n.iconName||c,e=n.prefix||e}if(c&&e&&M8[e]&&M8[e][c]){var s=M8[e][c];return r(d5(s))}KV(c,e),r(O(O({},GV),{},{icon:$.showMissingIcons&&c?L1("missingIconAbstract")||{}:{}}))})}var ra=function(){},v5=$.measurePerformance&&y6&&y6.mark&&y6.measure?y6:{mark:ra,measure:ra},v4='FA "6.4.2"',XV=function(e){return v5.mark("".concat(v4," ").concat(e," begins")),function(){return st(e)}},st=function(e){v5.mark("".concat(v4," ").concat(e," ends")),v5.measure("".concat(v4," ").concat(e),"".concat(v4," ").concat(e," begins"),"".concat(v4," ").concat(e," ends"))},pc={begin:XV,end:st},D6=function(){};function ta(c){var e=c.getAttribute?c.getAttribute(V3):null;return typeof e=="string"}function YV(c){var e=c.getAttribute?c.getAttribute(sc):null,a=c.getAttribute?c.getAttribute(ic):null;return e&&a}function JV(c){return c&&c.classList&&c.classList.contains&&c.classList.contains($.replacementClass)}function QV(){if($.autoReplaceSvg===!0)return O6.replace;var c=O6[$.autoReplaceSvg];return c||O6.replace}function ZV(c){return d2.createElementNS("http://www.w3.org/2000/svg",c)}function cg(c){return d2.createElement(c)}function it(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,r=a===void 0?c.tag==="svg"?ZV:cg:a;if(typeof c=="string")return d2.createTextNode(c);var t=r(c.tag);Object.keys(c.attributes||[]).forEach(function(s){t.setAttribute(s,c.attributes[s])});var n=c.children||[];return n.forEach(function(s){t.appendChild(it(s,{ceFn:r}))}),t}function eg(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var O6={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(t){a.parentNode.insertBefore(it(t),a)}),a.getAttribute(V3)===null&&$.keepOriginalSource){var r=d2.createComment(eg(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(e){var a=e[0],r=e[1];if(~lc(a).indexOf($.replacementClass))return O6.replace(e);var t=new RegExp("".concat($.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(i,o){return o===$.replacementClass||o.match(t)?i.toSvg.push(o):i.toNode.push(o),i},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",n.toNode.join(" "))}var s=r.map(function(i){return c6(i)}).join(`
`);a.setAttribute(V3,""),a.innerHTML=s}};function na(c){c()}function ot(c,e){var a=typeof e=="function"?e:D6;if(c.length===0)a();else{var r=na;$.mutateApproach===nV&&(r=Y1.requestAnimationFrame||na),r(function(){var t=QV(),n=pc.begin("mutate");c.map(t),n(),a()})}}var vc=!1;function lt(){vc=!0}function H5(){vc=!1}var s0=null;function sa(c){if(Xe&&$.observeMutations){var e=c.treeCallback,a=e===void 0?D6:e,r=c.nodeCallback,t=r===void 0?D6:r,n=c.pseudoElementsCallback,s=n===void 0?D6:n,i=c.observeMutationsRoot,o=i===void 0?d2:i;s0=new Xe(function(f){if(!vc){var l=J1();o4(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!ta(u.addedNodes[0])&&($.searchPseudoElements&&s(u.target),a(u.target)),u.type==="attributes"&&u.target.parentNode&&$.searchPseudoElements&&s(u.target.parentNode),u.type==="attributes"&&ta(u.target)&&~hV.indexOf(u.attributeName))if(u.attributeName==="class"&&YV(u.target)){var h=R0(lc(u.target)),p=h.prefix,g=h.iconName;u.target.setAttribute(sc,p||l),g&&u.target.setAttribute(ic,g)}else JV(u.target)&&t(u.target)})}}),w1&&s0.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ag(){s0&&s0.disconnect()}function rg(c){var e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(r,t){var n=t.split(":"),s=n[0],i=n.slice(1);return s&&i.length>0&&(r[s]=i.join(":").trim()),r},{})),a}function tg(c){var e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",t=R0(lc(c));return t.prefix||(t.prefix=J1()),e&&a&&(t.prefix=e,t.iconName=a),t.iconName&&t.prefix||(t.prefix&&r.length>0&&(t.iconName=PV(t.prefix,c.innerText)||hc(t.prefix,f5(c.innerText))),!t.iconName&&$.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(t.iconName=c.firstChild.data)),t}function ng(c){var e=o4(c.attributes).reduce(function(t,n){return t.name!=="class"&&t.name!=="style"&&(t[n.name]=n.value),t},{}),a=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return $.autoA11y&&(a?e["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||W4()):(e["aria-hidden"]="true",e.focusable="false")),e}function sg(){return{iconName:null,title:null,titleId:null,prefix:null,transform:s1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ia(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=tg(c),r=a.iconName,t=a.prefix,n=a.rest,s=ng(c),i=h5("parseNodeAttributes",{},c),o=e.styleParser?rg(c):[];return O({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:t,transform:s1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:s}},i)}var ig=Q2.styles;function ft(c){var e=$.autoReplaceSvg==="nest"?ia(c,{styleParser:!1}):ia(c);return~e.extra.classes.indexOf(qr)?L1("generateLayersText",c,e):L1("generateSvgReplacementMutation",c,e)}var Q1=new Set;oc.map(function(c){Q1.add("fa-".concat(c))});Object.keys(O4[m2]).map(Q1.add.bind(Q1));Object.keys(O4[H2]).map(Q1.add.bind(Q1));Q1=Q4(Q1);function oa(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!w1)return Promise.resolve();var a=d2.documentElement.classList,r=function(u){return a.add("".concat(Ye,"-").concat(u))},t=function(u){return a.remove("".concat(Ye,"-").concat(u))},n=$.autoFetchSvg?Q1:oc.map(function(l){return"fa-".concat(l)}).concat(Object.keys(ig));n.includes("fa")||n.push("fa");var s=[".".concat(qr,":not([").concat(V3,"])")].concat(n.map(function(l){return".".concat(l,":not([").concat(V3,"])")})).join(", ");if(s.length===0)return Promise.resolve();var i=[];try{i=o4(c.querySelectorAll(s))}catch{}if(i.length>0)r("pending"),t("complete");else return Promise.resolve();var o=pc.begin("onTree"),f=i.reduce(function(l,u){try{var h=ft(u);h&&l.push(h)}catch(p){jr||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,u){Promise.all(f).then(function(h){ot(h,function(){r("active"),r("complete"),t("pending"),typeof e=="function"&&e(),o(),l()})}).catch(function(h){o(),u(h)})})}function og(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ft(c).then(function(a){a&&ot([a],e)})}function lg(c){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:m5(e||{}),t=a.mask;return t&&(t=(t||{}).icon?t:m5(t||{})),c(r,O(O({},a),{},{mask:t}))}}var fg=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,t=r===void 0?s1:r,n=a.symbol,s=n===void 0?!1:n,i=a.mask,o=i===void 0?null:i,f=a.maskId,l=f===void 0?null:f,u=a.title,h=u===void 0?null:u,p=a.titleId,g=p===void 0?null:p,C=a.classes,N=C===void 0?[]:C,v=a.attributes,m=v===void 0?{}:v,M=a.styles,z=M===void 0?{}:M;if(e){var b=e.prefix,A=e.iconName,_=e.icon;return I0(O({type:"icon"},e),function(){return g3("beforeDOMElementCreation",{iconDefinition:e,params:a}),$.autoA11y&&(h?m["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(g||W4()):(m["aria-hidden"]="true",m.focusable="false")),dc({icons:{main:d5(_),mask:o?d5(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:A,transform:O(O({},s1),t),symbol:s,title:h,maskId:l,titleId:g,extra:{attributes:m,styles:z,classes:N}})})}},ug={mixout:function(){return{icon:lg(fg)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=oa,a.nodeCallback=og,a}}},provides:function(e){e.i2svg=function(a){var r=a.node,t=r===void 0?d2:r,n=a.callback,s=n===void 0?function(){}:n;return oa(t,s)},e.generateSvgReplacementMutation=function(a,r){var t=r.iconName,n=r.title,s=r.titleId,i=r.prefix,o=r.transform,f=r.symbol,l=r.mask,u=r.maskId,h=r.extra;return new Promise(function(p,g){Promise.all([p5(t,i),l.iconName?p5(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var N=tc(C,2),v=N[0],m=N[1];p([a,dc({icons:{main:v,mask:m},prefix:i,iconName:t,transform:o,symbol:f,maskId:u,title:n,titleId:s,extra:h,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(a){var r=a.children,t=a.attributes,n=a.main,s=a.transform,i=a.styles,o=E0(i);o.length>0&&(t.style=o);var f;return fc(s)&&(f=L1("generateAbstractTransformGrouping",{main:n,transform:s,containerWidth:n.width,iconWidth:n.width})),r.push(f||n.icon),{children:r,attributes:t}}}},hg={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.classes,n=t===void 0?[]:t;return I0({type:"layer"},function(){g3("beforeDOMElementCreation",{assembler:a,params:r});var s=[];return a(function(i){Array.isArray(i)?i.map(function(o){s=s.concat(o.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(Q4(n)).join(" ")},children:s}]})}}}},mg={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.title,n=t===void 0?null:t,s=r.classes,i=s===void 0?[]:s,o=r.attributes,f=o===void 0?{}:o,l=r.styles,u=l===void 0?{}:l;return I0({type:"counter",content:a},function(){return g3("beforeDOMElementCreation",{content:a,params:r}),qV({content:a.toString(),title:n,extra:{attributes:f,styles:u,classes:["".concat($.cssPrefix,"-layers-counter")].concat(Q4(i))}})})}}}},dg={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.transform,n=t===void 0?s1:t,s=r.title,i=s===void 0?null:s,o=r.classes,f=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,h=r.styles,p=h===void 0?{}:h;return I0({type:"text",content:a},function(){return g3("beforeDOMElementCreation",{content:a,params:r}),aa({content:a,transform:O(O({},s1),n),title:i,extra:{attributes:u,styles:p,classes:["".concat($.cssPrefix,"-layers-text")].concat(Q4(f))}})})}}},provides:function(e){e.generateLayersText=function(a,r){var t=r.title,n=r.transform,s=r.extra,i=null,o=null;if(Ur){var f=parseInt(getComputedStyle(a).fontSize,10),l=a.getBoundingClientRect();i=l.width/f,o=l.height/f}return $.autoA11y&&!t&&(s.attributes["aria-hidden"]="true"),Promise.resolve([a,aa({content:a.innerHTML,width:i,height:o,transform:n,title:t,extra:s,watchable:!0})])}}},pg=new RegExp('"',"ug"),la=[1105920,1112319];function vg(c){var e=c.replace(pg,""),a=SV(e,0),r=a>=la[0]&&a<=la[1],t=e.length===2?e[0]===e[1]:!1;return{value:f5(t?e[0]:e),isSecondary:r||t}}function fa(c,e){var a="".concat(tV).concat(e.replace(":","-"));return new Promise(function(r,t){if(c.getAttribute(a)!==null)return r();var n=o4(c.children),s=n.filter(function(_){return _.getAttribute(l5)===e})[0],i=Y1.getComputedStyle(c,e),o=i.getPropertyValue("font-family").match(lV),f=i.getPropertyValue("font-weight"),l=i.getPropertyValue("content");if(s&&!o)return c.removeChild(s),r();if(o&&l!=="none"&&l!==""){var u=i.getPropertyValue("content"),h=~["Sharp"].indexOf(o[2])?H2:m2,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?B4[h][o[2].toLowerCase()]:fV[h][f],g=vg(u),C=g.value,N=g.isSecondary,v=o[0].startsWith("FontAwesome"),m=hc(p,C),M=m;if(v){var z=RV(C);z.iconName&&z.prefix&&(m=z.iconName,p=z.prefix)}if(m&&!N&&(!s||s.getAttribute(sc)!==p||s.getAttribute(ic)!==M)){c.setAttribute(a,M),s&&c.removeChild(s);var b=sg(),A=b.extra;A.attributes[l5]=e,p5(m,p).then(function(_){var w=dc(O(O({},b),{},{icons:{main:_,mask:mc()},prefix:p,iconName:M,extra:A,watchable:!0})),I=d2.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(I,c.firstChild):c.appendChild(I),I.outerHTML=w.map(function(U){return c6(U)}).join(`
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Wu=function(c){const e=[];let a=0;for(let r=0;r<c.length;r++){let t=c.charCodeAt(r);t<128?e[a++]=t:t<2048?(e[a++]=t>>6|192,e[a++]=t&63|128):(t&64512)===55296&&r+1<c.length&&(c.charCodeAt(r+1)&64512)===56320?(t=65536+((t&1023)<<10)+(c.charCodeAt(++r)&1023),e[a++]=t>>18|240,e[a++]=t>>12&63|128,e[a++]=t>>6&63|128,e[a++]=t&63|128):(e[a++]=t>>12|224,e[a++]=t>>6&63|128,e[a++]=t&63|128)}return e},mK=function(c){const e=[];let a=0,r=0;for(;a<c.length;){const t=c[a++];if(t<128)e[r++]=String.fromCharCode(t);else if(t>191&&t<224){const n=c[a++];e[r++]=String.fromCharCode((t&31)<<6|n&63)}else if(t>239&&t<365){const n=c[a++],s=c[a++],i=c[a++],o=((t&7)<<18|(n&63)<<12|(s&63)<<6|i&63)-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(o&1023))}else{const n=c[a++],s=c[a++];e[r++]=String.fromCharCode((t&15)<<12|(n&63)<<6|s&63)}}return e.join("")},$u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(c,e){if(!Array.isArray(c))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<c.length;t+=3){const n=c[t],s=t+1<c.length,i=s?c[t+1]:0,o=t+2<c.length,f=o?c[t+2]:0,l=n>>2,u=(n&3)<<4|i>>4;let h=(i&15)<<2|f>>6,p=f&63;o||(p=64,s||(h=64)),r.push(a[l],a[u],a[h],a[p])}return r.join("")},encodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(c):this.encodeByteArray(Wu(c),e)},decodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(c):mK(this.decodeStringToByteArray(c,e))},decodeStringToByteArray(c,e){this.init_();const a=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<c.length;){const n=a[c.charAt(t++)],i=t<c.length?a[c.charAt(t)]:0;++t;const f=t<c.length?a[c.charAt(t)]:64;++t;const u=t<c.length?a[c.charAt(t)]:64;if(++t,n==null||i==null||f==null||u==null)throw new dK;const h=n<<2|i>>4;if(r.push(h),f!==64){const p=i<<4&240|f>>2;if(r.push(p),u!==64){const g=f<<6&192|u;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let c=0;c<this.ENCODED_VALS.length;c++)this.byteToCharMap_[c]=this.ENCODED_VALS.charAt(c),this.charToByteMap_[this.byteToCharMap_[c]]=c,this.byteToCharMapWebSafe_[c]=this.ENCODED_VALS_WEBSAFE.charAt(c),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[c]]=c,c>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(c)]=c,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(c)]=c)}}};class dK extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pK=function(c){const e=Wu(c);return $u.encodeByteArray(e,!0)},ju=function(c){return pK(c).replace(/\./g,"")},qu=function(c){try{return $u.decodeString(c,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vK(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HK=()=>vK().__FIREBASE_DEFAULTS__,zK=()=>{if(typeof process>"u"||typeof process.env>"u")return;const c={}.__FIREBASE_DEFAULTS__;if(c)return JSON.parse(c)},VK=()=>{if(typeof document>"u")return;let c;try{c=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=c&&qu(c[1]);return e&&JSON.parse(e)},l7=()=>{try{return HK()||zK()||VK()}catch(c){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${c}`);return}},Gu=c=>{var e,a;return(a=(e=l7())===null||e===void 0?void 0:e.emulatorHosts)===null||a===void 0?void 0:a[c]},gK=c=>{const e=Gu(c);if(!e)return;const a=e.lastIndexOf(":");if(a<=0||a+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(a+1),10);return e[0]==="["?[e.substring(1,a-1),r]:[e.substring(0,a),r]},Ku=()=>{var c;return(c=l7())===null||c===void 0?void 0:c.config},Xu=c=>{var e;return(e=l7())===null||e===void 0?void 0:e[`_${c}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MK{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,a)=>{this.resolve=e,this.reject=a})}wrapCallback(e){return(a,r)=>{a?this.reject(a):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(a):e(a,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CK(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k2())}function LK(){const c=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof c=="object"&&c.id!==void 0}function bK(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yK(){const c=k2();return c.indexOf("MSIE ")>=0||c.indexOf("Trident/")>=0}function xK(){try{return typeof indexedDB=="object"}catch{return!1}}function wK(){return new Promise((c,e)=>{try{let a=!0;const r="validate-browser-context-for-indexeddb-analytics-module",t=self.indexedDB.open(r);t.onsuccess=()=>{t.result.close(),a||self.indexedDB.deleteDatabase(r),c(!0)},t.onupgradeneeded=()=>{a=!1},t.onerror=()=>{var n;e(((n=t.error)===null||n===void 0?void 0:n.message)||"")}}catch(a){e(a)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NK="FirebaseError";class Z1 extends Error{constructor(e,a,r){super(a),this.code=e,this.customData=r,this.name=NK,Object.setPrototypeOf(this,Z1.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,s6.prototype.create)}}class s6{constructor(e,a,r){this.service=e,this.serviceName=a,this.errors=r}create(e,...a){const r=a[0]||{},t=`${this.service}/${e}`,n=this.errors[e],s=n?SK(n,r):"Error",i=`${this.serviceName}: ${s} (${t}).`;return new Z1(t,i,r)}}function SK(c,e){return c.replace(kK,(a,r)=>{const t=e[r];return t!=null?String(t):`<${r}?>`})}const kK=/\{\$([^}]+)}/g;function AK(c){for(const e in c)if(Object.prototype.hasOwnProperty.call(c,e))return!1;return!0}function o0(c,e){if(c===e)return!0;const a=Object.keys(c),r=Object.keys(e);for(const t of a){if(!r.includes(t))return!1;const n=c[t],s=e[t];if(Ha(n)&&Ha(s)){if(!o0(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!a.includes(t))return!1;return!0}function Ha(c){return c!==null&&typeof c=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i6(c){const e=[];for(const[a,r]of Object.entries(c))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(a)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(a)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _K(c,e){const a=new TK(c,e);return a.subscribe.bind(a)}class TK{constructor(e,a){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=a,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(a=>{a.next(e)})}error(e){this.forEachObserver(a=>{a.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,a,r){let t;if(e===void 0&&a===void 0&&r===void 0)throw new Error("Missing Observer.");EK(e,["next","error","complete"])?t=e:t={next:e,error:a,complete:r},t.next===void 0&&(t.next=b8),t.error===void 0&&(t.error=b8),t.complete===void 0&&(t.complete=b8);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?t.error(this.finalError):t.complete()}catch{}}),this.observers.push(t),n}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let a=0;a<this.observers.length;a++)this.sendOne(a,e)}sendOne(e,a){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{a(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EK(c,e){if(typeof c!="object"||c===null)return!1;for(const a of e)if(a in c&&typeof c[a]=="function")return!0;return!1}function b8(){}/**
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
 */function c3(c){return c&&c._delegate?c._delegate:c}class M3{constructor(e,a,r){this.name=e,this.instanceFactory=a,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const s3="[DEFAULT]";/**
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
 */class PK{constructor(e,a){this.name=e,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const a=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(a)){const r=new MK;if(this.instancesDeferred.set(a,r),this.isInitialized(a)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:a});t&&r.resolve(t)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(e){var a;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),t=(a=e==null?void 0:e.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(n){if(t)return null;throw n}else{if(t)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IK(e))try{this.getOrInitializeService({instanceIdentifier:s3})}catch{}for(const[a,r]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(a);try{const n=this.getOrInitializeService({instanceIdentifier:t});r.resolve(n)}catch{}}}}clearInstance(e=s3){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...e.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=s3){return this.instances.has(e)}getOptions(e=s3){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:a={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const t=this.getOrInitializeService({instanceIdentifier:r,options:a});for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);r===i&&s.resolve(t)}return t}onInit(e,a){var r;const t=this.normalizeInstanceIdentifier(a),n=(r=this.onInitCallbacks.get(t))!==null&&r!==void 0?r:new Set;n.add(e),this.onInitCallbacks.set(t,n);const s=this.instances.get(t);return s&&e(s,t),()=>{n.delete(e)}}invokeOnInitCallbacks(e,a){const r=this.onInitCallbacks.get(a);if(r)for(const t of r)try{t(e,a)}catch{}}getOrInitializeService({instanceIdentifier:e,options:a={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RK(e),options:a}),this.instances.set(e,r),this.instancesOptions.set(e,a),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=s3){return this.component?this.component.multipleInstances?e:s3:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RK(c){return c===s3?void 0:c}function IK(c){return c.instantiationMode==="EAGER"}/**
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
 */class DK{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const a=this.getProvider(e.name);if(a.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);a.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const a=new PK(e,this);return this.providers.set(e,a),a}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l2;(function(c){c[c.DEBUG=0]="DEBUG",c[c.VERBOSE=1]="VERBOSE",c[c.INFO=2]="INFO",c[c.WARN=3]="WARN",c[c.ERROR=4]="ERROR",c[c.SILENT=5]="SILENT"})(l2||(l2={}));const OK={debug:l2.DEBUG,verbose:l2.VERBOSE,info:l2.INFO,warn:l2.WARN,error:l2.ERROR,silent:l2.SILENT},BK=l2.INFO,FK={[l2.DEBUG]:"log",[l2.VERBOSE]:"log",[l2.INFO]:"info",[l2.WARN]:"warn",[l2.ERROR]:"error"},UK=(c,e,...a)=>{if(e<c.logLevel)return;const r=new Date().toISOString(),t=FK[e];if(t)console[t](`[${r}]  ${c.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yu{constructor(e){this.name=e,this._logLevel=BK,this._logHandler=UK,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in l2))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OK[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,l2.DEBUG,...e),this._logHandler(this,l2.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,l2.VERBOSE,...e),this._logHandler(this,l2.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,l2.INFO,...e),this._logHandler(this,l2.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,l2.WARN,...e),this._logHandler(this,l2.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,l2.ERROR,...e),this._logHandler(this,l2.ERROR,...e)}}const WK=(c,e)=>e.some(a=>c instanceof a);let za,Va;function $K(){return za||(za=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jK(){return Va||(Va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ju=new WeakMap,V5=new WeakMap,Qu=new WeakMap,y8=new WeakMap,f7=new WeakMap;function qK(c){const e=new Promise((a,r)=>{const t=()=>{c.removeEventListener("success",n),c.removeEventListener("error",s)},n=()=>{a(q1(c.result)),t()},s=()=>{r(c.error),t()};c.addEventListener("success",n),c.addEventListener("error",s)});return e.then(a=>{a instanceof IDBCursor&&Ju.set(a,c)}).catch(()=>{}),f7.set(e,c),e}function GK(c){if(V5.has(c))return;const e=new Promise((a,r)=>{const t=()=>{c.removeEventListener("complete",n),c.removeEventListener("error",s),c.removeEventListener("abort",s)},n=()=>{a(),t()},s=()=>{r(c.error||new DOMException("AbortError","AbortError")),t()};c.addEventListener("complete",n),c.addEventListener("error",s),c.addEventListener("abort",s)});V5.set(c,e)}let g5={get(c,e,a){if(c instanceof IDBTransaction){if(e==="done")return V5.get(c);if(e==="objectStoreNames")return c.objectStoreNames||Qu.get(c);if(e==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return q1(c[e])},set(c,e,a){return c[e]=a,!0},has(c,e){return c instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in c}};function KK(c){g5=c(g5)}function XK(c){return c===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...a){const r=c.call(x8(this),e,...a);return Qu.set(r,e.sort?e.sort():[e]),q1(r)}:jK().includes(c)?function(...e){return c.apply(x8(this),e),q1(Ju.get(this))}:function(...e){return q1(c.apply(x8(this),e))}}function YK(c){return typeof c=="function"?XK(c):(c instanceof IDBTransaction&&GK(c),WK(c,$K())?new Proxy(c,g5):c)}function q1(c){if(c instanceof IDBRequest)return qK(c);if(y8.has(c))return y8.get(c);const e=YK(c);return e!==c&&(y8.set(c,e),f7.set(e,c)),e}const x8=c=>f7.get(c);function JK(c,e,{blocked:a,upgrade:r,blocking:t,terminated:n}={}){const s=indexedDB.open(c,e),i=q1(s);return r&&s.addEventListener("upgradeneeded",o=>{r(q1(s.result),o.oldVersion,o.newVersion,q1(s.transaction),o)}),a&&s.addEventListener("blocked",o=>a(o.oldVersion,o.newVersion,o)),i.then(o=>{n&&o.addEventListener("close",()=>n()),t&&o.addEventListener("versionchange",f=>t(f.oldVersion,f.newVersion,f))}).catch(()=>{}),i}const QK=["get","getKey","getAll","getAllKeys","count"],ZK=["put","add","delete","clear"],w8=new Map;function ga(c,e){if(!(c instanceof IDBDatabase&&!(e in c)&&typeof e=="string"))return;if(w8.get(e))return w8.get(e);const a=e.replace(/FromIndex$/,""),r=e!==a,t=ZK.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!(t||QK.includes(a)))return;const n=async function(s,...i){const o=this.transaction(s,t?"readwrite":"readonly");let f=o.store;return r&&(f=f.index(i.shift())),(await Promise.all([f[a](...i),t&&o.done]))[0]};return w8.set(e,n),n}KK(c=>({...c,get:(e,a,r)=>ga(e,a)||c.get(e,a,r),has:(e,a)=>!!ga(e,a)||c.has(e,a)}));/**
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
 */class cX{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(eX(a)){const r=a.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(a=>a).join(" ")}}function eX(c){const e=c.getComponent();return(e==null?void 0:e.type)==="VERSION"}const M5="@firebase/app",Ma="0.9.20";/**
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
 */const C3=new Yu("@firebase/app"),aX="@firebase/app-compat",rX="@firebase/analytics-compat",tX="@firebase/analytics",nX="@firebase/app-check-compat",sX="@firebase/app-check",iX="@firebase/auth",oX="@firebase/auth-compat",lX="@firebase/database",fX="@firebase/database-compat",uX="@firebase/functions",hX="@firebase/functions-compat",mX="@firebase/installations",dX="@firebase/installations-compat",pX="@firebase/messaging",vX="@firebase/messaging-compat",HX="@firebase/performance",zX="@firebase/performance-compat",VX="@firebase/remote-config",gX="@firebase/remote-config-compat",MX="@firebase/storage",CX="@firebase/storage-compat",LX="@firebase/firestore",bX="@firebase/firestore-compat",yX="firebase",xX="10.5.0";/**
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
 */const C5="[DEFAULT]",wX={[M5]:"fire-core",[aX]:"fire-core-compat",[tX]:"fire-analytics",[rX]:"fire-analytics-compat",[sX]:"fire-app-check",[nX]:"fire-app-check-compat",[iX]:"fire-auth",[oX]:"fire-auth-compat",[lX]:"fire-rtdb",[fX]:"fire-rtdb-compat",[uX]:"fire-fn",[hX]:"fire-fn-compat",[mX]:"fire-iid",[dX]:"fire-iid-compat",[pX]:"fire-fcm",[vX]:"fire-fcm-compat",[HX]:"fire-perf",[zX]:"fire-perf-compat",[VX]:"fire-rc",[gX]:"fire-rc-compat",[MX]:"fire-gcs",[CX]:"fire-gcs-compat",[LX]:"fire-fst",[bX]:"fire-fst-compat","fire-js":"fire-js",[yX]:"fire-js-all"};/**
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
 */const l0=new Map,L5=new Map;function NX(c,e){try{c.container.addComponent(e)}catch(a){C3.debug(`Component ${e.name} failed to register with FirebaseApp ${c.name}`,a)}}function e4(c){const e=c.name;if(L5.has(e))return C3.debug(`There were multiple attempts to register component ${e}.`),!1;L5.set(e,c);for(const a of l0.values())NX(a,c);return!0}function u7(c,e){const a=c.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),c.container.getProvider(e)}/**
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
 */const SX={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},G1=new s6("app","Firebase",SX);/**
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
 */class kX{constructor(e,a,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new M3("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G1.create("app-deleted",{appName:this._name})}}/**
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
 */const o6=xX;function Zu(c,e={}){let a=c;typeof e!="object"&&(e={name:e});const r=Object.assign({name:C5,automaticDataCollectionEnabled:!1},e),t=r.name;if(typeof t!="string"||!t)throw G1.create("bad-app-name",{appName:String(t)});if(a||(a=Ku()),!a)throw G1.create("no-options");const n=l0.get(t);if(n){if(o0(a,n.options)&&o0(r,n.config))return n;throw G1.create("duplicate-app",{appName:t})}const s=new DK(t);for(const o of L5.values())s.addComponent(o);const i=new kX(a,r,s);return l0.set(t,i),i}function ch(c=C5){const e=l0.get(c);if(!e&&c===C5&&Ku())return Zu();if(!e)throw G1.create("no-app",{appName:c});return e}function K1(c,e,a){var r;let t=(r=wX[c])!==null&&r!==void 0?r:c;a&&(t+=`-${a}`);const n=t.match(/\s|\//),s=e.match(/\s|\//);if(n||s){const i=[`Unable to register library "${t}" with version "${e}":`];n&&i.push(`library name "${t}" contains illegal characters (whitespace or "/")`),n&&s&&i.push("and"),s&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),C3.warn(i.join(" "));return}e4(new M3(`${t}-version`,()=>({library:t,version:e}),"VERSION"))}/**
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
 */const AX="firebase-heartbeat-database",_X=1,$4="firebase-heartbeat-store";let N8=null;function eh(){return N8||(N8=JK(AX,_X,{upgrade:(c,e)=>{switch(e){case 0:c.createObjectStore($4)}}}).catch(c=>{throw G1.create("idb-open",{originalErrorMessage:c.message})})),N8}async function TX(c){try{return await(await eh()).transaction($4).objectStore($4).get(ah(c))}catch(e){if(e instanceof Z1)C3.warn(e.message);else{const a=G1.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});C3.warn(a.message)}}}async function Ca(c,e){try{const r=(await eh()).transaction($4,"readwrite");await r.objectStore($4).put(e,ah(c)),await r.done}catch(a){if(a instanceof Z1)C3.warn(a.message);else{const r=G1.create("idb-set",{originalErrorMessage:a==null?void 0:a.message});C3.warn(r.message)}}}function ah(c){return`${c.name}!${c.options.appId}`}/**
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
 */const EX=1024,PX=30*24*60*60*1e3;class RX{constructor(e){this.container=e,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new DX(a),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=La();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(t=>t.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const n=new Date(t.date).valueOf();return Date.now()-n<=PX}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=La(),{heartbeatsToSend:a,unsentEntries:r}=IX(this._heartbeatsCache.heartbeats),t=ju(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),t}}function La(){return new Date().toISOString().substring(0,10)}function IX(c,e=EX){const a=[];let r=c.slice();for(const t of c){const n=a.find(s=>s.agent===t.agent);if(n){if(n.dates.push(t.date),ba(a)>e){n.dates.pop();break}}else if(a.push({agent:t.agent,dates:[t.date]}),ba(a)>e){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}class DX{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xK()?wK().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await TX(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var a;if(await this._canUseIndexedDBPromise){const t=await this.read();return Ca(this.app,{lastSentHeartbeatDate:(a=e.lastSentHeartbeatDate)!==null&&a!==void 0?a:t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var a;if(await this._canUseIndexedDBPromise){const t=await this.read();return Ca(this.app,{lastSentHeartbeatDate:(a=e.lastSentHeartbeatDate)!==null&&a!==void 0?a:t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}else return}}function ba(c){return ju(JSON.stringify({version:2,heartbeats:c})).length}/**
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
 */function OX(c){e4(new M3("platform-logger",e=>new cX(e),"PRIVATE")),e4(new M3("heartbeat",e=>new RX(e),"PRIVATE")),K1(M5,Ma,c),K1(M5,Ma,"esm2017"),K1("fire-js","")}OX("");var BX="firebase",FX="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */K1(BX,FX,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UX{constructor(e,a,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=a.getImmediate({optional:!0}),this.auth||e.get().then(t=>this.auth=t,()=>{}),this.messaging||a.get().then(t=>this.messaging=t,()=>{}),this.appCheck||r.get().then(t=>this.appCheck=t,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const a=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return a.error?null:a.token}return null}async getContext(e){const a=await this.getAuthToken(),r=await this.getMessagingToken(),t=await this.getAppCheckToken(e);return{authToken:a,messagingToken:r,appCheckToken:t}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b5="us-central1";class WX{constructor(e,a,r,t,n=b5,s){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new UX(a,r,t),this.cancelAllRequests=new Promise(i=>{this.deleteService=()=>Promise.resolve(i())});try{const i=new URL(n);this.customDomain=i.origin,this.region=b5}catch{this.customDomain=null,this.region=n}}_delete(){return this.deleteService()}_url(e){const a=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${a}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${a}.cloudfunctions.net/${e}`}}function $X(c,e,a){c.emulatorOrigin=`http://${e}:${a}`}const ya="@firebase/functions",xa="0.10.0";/**
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
 */const jX="auth-internal",qX="app-check-internal",GX="messaging-internal";function KX(c,e){const a=(r,{instanceIdentifier:t})=>{const n=r.getProvider("app").getImmediate(),s=r.getProvider(jX),i=r.getProvider(GX),o=r.getProvider(qX);return new WX(n,s,i,o,t,c)};e4(new M3(rh,a,"PUBLIC").setMultipleInstances(!0)),K1(ya,xa,e),K1(ya,xa,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XX(c=ch(),e=b5){const r=u7(c3(c),rh).getImmediate({identifier:e}),t=gK("functions");return t&&th(r,...t),r}function th(c,e,a){$X(c3(c),e,a)}KX(fetch.bind(self));function h7(c,e){var a={};for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&e.indexOf(r)<0&&(a[r]=c[r]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(c);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(c,r[t])&&(a[r[t]]=c[r[t]]);return a}function nh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YX=nh,sh=new s6("auth","Firebase",nh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=new Yu("@firebase/auth");function JX(c,...e){f0.logLevel<=l2.WARN&&f0.warn(`Auth (${o6}): ${c}`,...e)}function B6(c,...e){f0.logLevel<=l2.ERROR&&f0.error(`Auth (${o6}): ${c}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(c,...e){throw m7(c,...e)}function i1(c,...e){return m7(c,...e)}function QX(c,e,a){const r=Object.assign(Object.assign({},YX()),{[e]:a});return new s6("auth","Firebase",r).create(e,{appName:c.name})}function m7(c,...e){if(typeof c!="string"){const a=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=c.name),c._errorFactory.create(a,...r)}return sh.create(c,...e)}function Z(c,e,...a){if(!c)throw m7(e,...a)}function p1(c){const e="INTERNAL ASSERTION FAILED: "+c;throw B6(e),new Error(e)}function y1(c,e){c||p1(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y5(){var c;return typeof self<"u"&&((c=self.location)===null||c===void 0?void 0:c.href)||""}function ZX(){return wa()==="http:"||wa()==="https:"}function wa(){var c;return typeof self<"u"&&((c=self.location)===null||c===void 0?void 0:c.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cY(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZX()||LK()||"connection"in navigator)?navigator.onLine:!0}function eY(){if(typeof navigator>"u")return null;const c=navigator;return c.languages&&c.languages[0]||c.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(e,a){this.shortDelay=e,this.longDelay=a,y1(a>e,"Short delay should be less than long delay!"),this.isMobile=CK()||bK()}get(){return cY()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d7(c,e){y1(c.emulator,"Emulator should always be set here");const{url:a}=c.emulator;return e?`${a}${e.startsWith("/")?e.slice(1):e}`:a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{static initialize(e,a,r){this.fetchImpl=e,a&&(this.headersImpl=a),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;p1("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;p1("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;p1("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aY={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rY=new l6(3e4,6e4);function oh(c,e){return c.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:c.tenantId}):e}async function f6(c,e,a,r,t={}){return lh(c,t,async()=>{let n={},s={};r&&(e==="GET"?s=r:n={body:JSON.stringify(r)});const i=i6(Object.assign({key:c.config.apiKey},s)).slice(1),o=await c._getAdditionalHeaders();return o["Content-Type"]="application/json",c.languageCode&&(o["X-Firebase-Locale"]=c.languageCode),ih.fetch()(fh(c,c.config.apiHost,a,i),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},n))})}async function lh(c,e,a){c._canInitEmulator=!1;const r=Object.assign(Object.assign({},aY),e);try{const t=new nY(c),n=await Promise.race([a(),t.promise]);t.clearNetworkTimeout();const s=await n.json();if("needConfirmation"in s)throw E6(c,"account-exists-with-different-credential",s);if(n.ok&&!("errorMessage"in s))return s;{const i=n.ok?s.errorMessage:s.error.message,[o,f]=i.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw E6(c,"credential-already-in-use",s);if(o==="EMAIL_EXISTS")throw E6(c,"email-already-in-use",s);if(o==="USER_DISABLED")throw E6(c,"user-disabled",s);const l=r[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw QX(c,l,f);b1(c,l)}}catch(t){if(t instanceof Z1)throw t;b1(c,"network-request-failed",{message:String(t)})}}async function tY(c,e,a,r,t={}){const n=await f6(c,e,a,r,t);return"mfaPendingCredential"in n&&b1(c,"multi-factor-auth-required",{_serverResponse:n}),n}function fh(c,e,a,r){const t=`${e}${a}?${r}`;return c.config.emulator?d7(c.config,t):`${c.config.apiScheme}://${t}`}class nY{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((a,r)=>{this.timer=setTimeout(()=>r(i1(this.auth,"network-request-failed")),rY.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function E6(c,e,a){const r={appName:c.name};a.email&&(r.email=a.email),a.phoneNumber&&(r.phoneNumber=a.phoneNumber);const t=i1(c,e,r);return t.customData._tokenResponse=a,t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sY(c,e){return f6(c,"POST","/v1/accounts:delete",e)}async function iY(c,e){return f6(c,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N4(c){if(c)try{const e=new Date(Number(c));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oY(c,e=!1){const a=c3(c),r=await a.getIdToken(e),t=p7(r);Z(t&&t.exp&&t.auth_time&&t.iat,a.auth,"internal-error");const n=typeof t.firebase=="object"?t.firebase:void 0,s=n==null?void 0:n.sign_in_provider;return{claims:t,token:r,authTime:N4(S8(t.auth_time)),issuedAtTime:N4(S8(t.iat)),expirationTime:N4(S8(t.exp)),signInProvider:s||null,signInSecondFactor:(n==null?void 0:n.sign_in_second_factor)||null}}function S8(c){return Number(c)*1e3}function p7(c){const[e,a,r]=c.split(".");if(e===void 0||a===void 0||r===void 0)return B6("JWT malformed, contained fewer than 3 sections"),null;try{const t=qu(a);return t?JSON.parse(t):(B6("Failed to decode base64 JWT payload"),null)}catch(t){return B6("Caught error parsing JWT payload as JSON",t==null?void 0:t.toString()),null}}function lY(c){const e=p7(c);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j4(c,e,a=!1){if(a)return e;try{return await e}catch(r){throw r instanceof Z1&&fY(r)&&c.auth.currentUser===c&&await c.auth.signOut(),r}}function fY({code:c}){return c==="auth/user-disabled"||c==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uY{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var a;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const t=((a=this.user.stsTokenManager.expirationTime)!==null&&a!==void 0?a:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const a=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},a)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,a){this.createdAt=e,this.lastLoginAt=a,this._initializeTime()}_initializeTime(){this.lastSignInTime=N4(this.lastLoginAt),this.creationTime=N4(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function u0(c){var e;const a=c.auth,r=await c.getIdToken(),t=await j4(c,iY(a,{idToken:r}));Z(t==null?void 0:t.users.length,a,"internal-error");const n=t.users[0];c._notifyReloadListener(n);const s=!((e=n.providerUserInfo)===null||e===void 0)&&e.length?dY(n.providerUserInfo):[],i=mY(c.providerData,s),o=c.isAnonymous,f=!(c.email&&n.passwordHash)&&!(i!=null&&i.length),l=o?f:!1,u={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:i,metadata:new uh(n.createdAt,n.lastLoginAt),isAnonymous:l};Object.assign(c,u)}async function hY(c){const e=c3(c);await u0(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mY(c,e){return[...c.filter(r=>!e.some(t=>t.providerId===r.providerId)),...e]}function dY(c){return c.map(e=>{var{providerId:a}=e,r=h7(e,["providerId"]);return{providerId:a,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pY(c,e){const a=await lh(c,{},async()=>{const r=i6({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:t,apiKey:n}=c.config,s=fh(c,t,"/v1/token",`key=${n}`),i=await c._getAdditionalHeaders();return i["Content-Type"]="application/x-www-form-urlencoded",ih.fetch()(s,{method:"POST",headers:i,body:r})});return{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const a="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lY(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,a)}async getToken(e,a=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!a&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,a){const{accessToken:r,refreshToken:t,expiresIn:n}=await pY(e,a);this.updateTokensAndExpiration(r,t,Number(n))}updateTokensAndExpiration(e,a,r){this.refreshToken=a||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,a){const{refreshToken:r,accessToken:t,expirationTime:n}=a,s=new q4;return r&&(Z(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),t&&(Z(typeof t=="string","internal-error",{appName:e}),s.accessToken=t),n&&(Z(typeof n=="number","internal-error",{appName:e}),s.expirationTime=n),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new q4,this.toJSON())}_performRefresh(){return p1("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(c,e){Z(typeof c=="string"||typeof c>"u","internal-error",{appName:e})}class v3{constructor(e){var{uid:a,auth:r,stsTokenManager:t}=e,n=h7(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uY(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=a,this.auth=r,this.stsTokenManager=t,this.accessToken=t.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new uh(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const a=await j4(this,this.stsTokenManager.getToken(this.auth,e));return Z(a,this.auth,"internal-error"),this.accessToken!==a&&(this.accessToken=a,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),a}getIdTokenResult(e){return oY(this,e)}reload(){return hY(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(a=>Object.assign({},a)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const a=new v3(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return a.metadata._copy(this.metadata),a}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,a=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),a&&await u0(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await j4(this,sY(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,a){var r,t,n,s,i,o,f,l;const u=(r=a.displayName)!==null&&r!==void 0?r:void 0,h=(t=a.email)!==null&&t!==void 0?t:void 0,p=(n=a.phoneNumber)!==null&&n!==void 0?n:void 0,g=(s=a.photoURL)!==null&&s!==void 0?s:void 0,C=(i=a.tenantId)!==null&&i!==void 0?i:void 0,N=(o=a._redirectEventId)!==null&&o!==void 0?o:void 0,v=(f=a.createdAt)!==null&&f!==void 0?f:void 0,m=(l=a.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:M,emailVerified:z,isAnonymous:b,providerData:A,stsTokenManager:_}=a;Z(M&&_,e,"internal-error");const w=q4.fromJSON(this.name,_);Z(typeof M=="string",e,"internal-error"),P1(u,e.name),P1(h,e.name),Z(typeof z=="boolean",e,"internal-error"),Z(typeof b=="boolean",e,"internal-error"),P1(p,e.name),P1(g,e.name),P1(C,e.name),P1(N,e.name),P1(v,e.name),P1(m,e.name);const I=new v3({uid:M,auth:e,email:h,emailVerified:z,displayName:u,isAnonymous:b,photoURL:g,phoneNumber:p,tenantId:C,stsTokenManager:w,createdAt:v,lastLoginAt:m});return A&&Array.isArray(A)&&(I.providerData=A.map(U=>Object.assign({},U))),N&&(I._redirectEventId=N),I}static async _fromIdTokenResponse(e,a,r=!1){const t=new q4;t.updateFromServerResponse(a);const n=new v3({uid:a.localId,auth:e,stsTokenManager:t,isAnonymous:r});return await u0(n),n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new Map;function v1(c){y1(c instanceof Function,"Expected a class definition");let e=Na.get(c);return e?(y1(e instanceof c,"Instance stored in cache mismatched with class"),e):(e=new c,Na.set(c,e),e)}/**
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
 */class hh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,a){this.storage[e]=a}async _get(e){const a=this.storage[e];return a===void 0?null:a}async _remove(e){delete this.storage[e]}_addListener(e,a){}_removeListener(e,a){}}hh.type="NONE";const Sa=hh;/**
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
 */function F6(c,e,a){return`firebase:${c}:${e}:${a}`}class q3{constructor(e,a,r){this.persistence=e,this.auth=a,this.userKey=r;const{config:t,name:n}=this.auth;this.fullUserKey=F6(this.userKey,t.apiKey,n),this.fullPersistenceKey=F6("persistence",t.apiKey,n),this.boundEventHandler=a._onStorageEvent.bind(a),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?v3._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const a=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,a)return this.setCurrentUser(a)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,a,r="authUser"){if(!a.length)return new q3(v1(Sa),e,r);const t=(await Promise.all(a.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let n=t[0]||v1(Sa);const s=F6(r,e.config.apiKey,e.name);let i=null;for(const f of a)try{const l=await f._get(s);if(l){const u=v3._fromJSON(e,l);f!==n&&(i=u),n=f;break}}catch{}const o=t.filter(f=>f._shouldAllowMigration);return!n._shouldAllowMigration||!o.length?new q3(n,e,r):(n=o[0],i&&await n._set(s,i.toJSON()),await Promise.all(a.map(async f=>{if(f!==n)try{await f._remove(s)}catch{}})),new q3(n,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(c){const e=c.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ph(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hh(e))return"Blackberry";if(zh(e))return"Webos";if(v7(e))return"Safari";if((e.includes("chrome/")||dh(e))&&!e.includes("edge/"))return"Chrome";if(vh(e))return"Android";{const a=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=c.match(a);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mh(c=k2()){return/firefox\//i.test(c)}function v7(c=k2()){const e=c.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dh(c=k2()){return/crios\//i.test(c)}function ph(c=k2()){return/iemobile/i.test(c)}function vh(c=k2()){return/android/i.test(c)}function Hh(c=k2()){return/blackberry/i.test(c)}function zh(c=k2()){return/webos/i.test(c)}function c8(c=k2()){return/iphone|ipad|ipod/i.test(c)||/macintosh/i.test(c)&&/mobile/i.test(c)}function vY(c=k2()){var e;return c8(c)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HY(){return yK()&&document.documentMode===10}function Vh(c=k2()){return c8(c)||vh(c)||zh(c)||Hh(c)||/windows phone/i.test(c)||ph(c)}function zY(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(c,e=[]){let a;switch(c){case"Browser":a=ka(k2());break;case"Worker":a=`${ka(k2())}-${c}`;break;default:a=c}const r=e.length?e.join(","):"FirebaseCore-web";return`${a}/JsCore/${o6}/${r}`}/**
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
 */class VY{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,a){const r=n=>new Promise((s,i)=>{try{const o=e(n);s(o)}catch(o){i(o)}});r.onAbort=a,this.queue.push(r);const t=this.queue.length-1;return()=>{this.queue[t]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const a=[];try{for(const r of this.queue)await r(e),r.onAbort&&a.push(r.onAbort)}catch(r){a.reverse();for(const t of a)try{t()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gY(c,e={}){return f6(c,"GET","/v2/passwordPolicy",oh(c,e))}/**
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
 */const MY=6;class CY{constructor(e){var a,r,t,n;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(a=s.minPasswordLength)!==null&&a!==void 0?a:MY,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(t=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&t!==void 0?t:"",this.forceUpgradeOnSignin=(n=e.forceUpgradeOnSignin)!==null&&n!==void 0?n:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var a,r,t,n,s,i;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(a=o.meetsMinPasswordLength)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(r=o.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(t=o.containsLowercaseLetter)!==null&&t!==void 0?t:!0),o.isValid&&(o.isValid=(n=o.containsUppercaseLetter)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(s=o.containsNumericCharacter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(i=o.containsNonAlphanumericCharacter)!==null&&i!==void 0?i:!0),o}validatePasswordLengthOptions(e,a){const r=this.customStrengthOptions.minPasswordLength,t=this.customStrengthOptions.maxPasswordLength;r&&(a.meetsMinPasswordLength=e.length>=r),t&&(a.meetsMaxPasswordLength=e.length<=t)}validatePasswordCharacterOptions(e,a){this.updatePasswordCharacterOptionsStatuses(a,!1,!1,!1,!1);let r;for(let t=0;t<e.length;t++)r=e.charAt(t),this.updatePasswordCharacterOptionsStatuses(a,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,a,r,t,n){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=a)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=t)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LY{constructor(e,a,r,t){this.app=e,this.heartbeatServiceProvider=a,this.appCheckServiceProvider=r,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Aa(this),this.idTokenSubscription=new Aa(this),this.beforeStateQueue=new VY(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,a){return a&&(this._popupRedirectResolver=v1(a)),this._initializationPromise=this.queue(async()=>{var r,t;if(!this._deleted&&(this.persistenceManager=await q3.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(a),this.lastNotifiedUid=((t=this.currentUser)===null||t===void 0?void 0:t.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var a;const r=await this.assertedPersistence.getCurrentUser();let t=r,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId,i=t==null?void 0:t._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o!=null&&o.user)&&(t=o.user,n=!0)}if(!t)return this.directlySetCurrentUser(null);if(!t._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(t)}catch(s){t=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return t?this.reloadAndSetCurrentUserOrClear(t):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===t._redirectEventId?this.directlySetCurrentUser(t):this.reloadAndSetCurrentUserOrClear(t)}async tryRedirectSignIn(e){let a=null;try{a=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return a}async reloadAndSetCurrentUserOrClear(e){try{await u0(e)}catch(a){if((a==null?void 0:a.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eY()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const a=e?c3(e):null;return a&&Z(a.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(a&&a._clone(this))}async _updateCurrentUser(e,a=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),a||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(v1(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const a=this._getPasswordPolicyInternal();return a.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):a.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gY(this),a=new CY(e);this.tenantId===null?this._projectPasswordPolicy=a:this._tenantPasswordPolicies[this.tenantId]=a}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new s6("auth","Firebase",e())}onAuthStateChanged(e,a,r){return this.registerStateListener(this.authStateSubscription,e,a,r)}beforeAuthStateChanged(e,a){return this.beforeStateQueue.pushCallback(e,a)}onIdTokenChanged(e,a,r){return this.registerStateListener(this.idTokenSubscription,e,a,r)}authStateReady(){return new Promise((e,a)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},a)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,a){const r=await this.getOrInitRedirectPersistenceManager(a);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const a=e&&v1(e)||this._popupRedirectResolver;Z(a,this,"argument-error"),this.redirectPersistenceManager=await q3.create(this,[v1(a._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var a,r;return this._isInitialized&&await this.queue(async()=>{}),((a=this._currentUser)===null||a===void 0?void 0:a._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,a;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(a=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&a!==void 0?a:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,a,r,t){if(this._deleted)return()=>{};const n=typeof a=="function"?a:a.next.bind(a);let s=!1;const i=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(i,this,"internal-error"),i.then(()=>{s||n(this.currentUser)}),typeof a=="function"){const o=e.addObserver(a,r,t);return()=>{s=!0,o()}}else{const o=e.addObserver(a);return()=>{s=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const a={"X-Client-Version":this.clientVersion};this.app.options.appId&&(a["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(a["X-Firebase-Client"]=r);const t=await this._getAppCheckToken();return t&&(a["X-Firebase-AppCheck"]=t),a}async _getAppCheckToken(){var e;const a=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return a!=null&&a.error&&JX(`Error while retrieving App Check token: ${a.error}`),a==null?void 0:a.token}}function H7(c){return c3(c)}class Aa{constructor(e){this.auth=e,this.observer=null,this.addObserver=_K(a=>this.observer=a)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bY(){var c,e;return(e=(c=document.getElementsByTagName("head"))===null||c===void 0?void 0:c[0])!==null&&e!==void 0?e:document}function yY(c){return new Promise((e,a)=>{const r=document.createElement("script");r.setAttribute("src",c),r.onload=e,r.onerror=t=>{const n=i1("internal-error");n.customData=t,a(n)},r.type="text/javascript",r.charset="UTF-8",bY().appendChild(r)})}function xY(c){return`__${c}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wY(c,e){const a=u7(c,"auth");if(a.isInitialized()){const t=a.getImmediate(),n=a.getOptions();if(o0(n,e??{}))return t;b1(t,"already-initialized")}return a.initialize({options:e})}function NY(c,e){const a=(e==null?void 0:e.persistence)||[],r=(Array.isArray(a)?a:[a]).map(v1);e!=null&&e.errorMap&&c._updateErrorMap(e.errorMap),c._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Mh(c,e,a){const r=H7(c);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const t=!!(a!=null&&a.disableWarnings),n=Ch(e),{host:s,port:i}=SY(e),o=i===null?"":`:${i}`;r.config.emulator={url:`${n}//${s}${o}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:i,protocol:n.replace(":",""),options:Object.freeze({disableWarnings:t})}),t||kY()}function Ch(c){const e=c.indexOf(":");return e<0?"":c.substr(0,e+1)}function SY(c){const e=Ch(c),a=/(\/\/)?([^?#/]+)/.exec(c.substr(e.length));if(!a)return{host:"",port:null};const r=a[2].split("@").pop()||"",t=/^(\[[^\]]+\])(:|$)/.exec(r);if(t){const n=t[1];return{host:n,port:_a(r.substr(n.length+1))}}else{const[n,s]=r.split(":");return{host:n,port:_a(s)}}}function _a(c){if(!c)return null;const e=Number(c);return isNaN(e)?null:e}function kY(){function c(){const e=document.createElement("p"),a=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",a.position="fixed",a.width="100%",a.backgroundColor="#ffffff",a.border=".1em solid #000000",a.color="#b50000",a.bottom="0px",a.left="0px",a.margin="0px",a.zIndex="10000",a.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",c):c())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,a){this.providerId=e,this.signInMethod=a}toJSON(){return p1("not implemented")}_getIdTokenResponse(e){return p1("not implemented")}_linkToIdToken(e,a){return p1("not implemented")}_getReauthenticationResolver(e){return p1("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G3(c,e){return tY(c,"POST","/v1/accounts:signInWithIdp",oh(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AY="http://localhost";class L3 extends Lh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const a=new L3(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(a.idToken=e.idToken),e.accessToken&&(a.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(a.nonce=e.nonce),e.pendingToken&&(a.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(a.accessToken=e.oauthToken,a.secret=e.oauthTokenSecret):b1("argument-error"),a}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const a=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:t}=a,n=h7(a,["providerId","signInMethod"]);if(!r||!t)return null;const s=new L3(r,t);return s.idToken=n.idToken||void 0,s.accessToken=n.accessToken||void 0,s.secret=n.secret,s.nonce=n.nonce,s.pendingToken=n.pendingToken||null,s}_getIdTokenResponse(e){const a=this.buildRequest();return G3(e,a)}_linkToIdToken(e,a){const r=this.buildRequest();return r.idToken=a,G3(e,r)}_getReauthenticationResolver(e){const a=this.buildRequest();return a.autoCreate=!1,G3(e,a)}buildRequest(){const e={requestUri:AY,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const a={};this.idToken&&(a.id_token=this.idToken),this.accessToken&&(a.access_token=this.accessToken),this.secret&&(a.oauth_token_secret=this.secret),a.providerId=this.providerId,this.nonce&&!this.pendingToken&&(a.nonce=this.nonce),e.postBody=i6(a)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class u6 extends bh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1 extends u6{constructor(){super("facebook.com")}static credential(e){return L3._fromParams({providerId:O1.PROVIDER_ID,signInMethod:O1.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return O1.credentialFromTaggedObject(e)}static credentialFromError(e){return O1.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return O1.credential(e.oauthAccessToken)}catch{return null}}}O1.FACEBOOK_SIGN_IN_METHOD="facebook.com";O1.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1 extends u6{constructor(){super("google.com"),this.addScope("profile")}static credential(e,a){return L3._fromParams({providerId:B1.PROVIDER_ID,signInMethod:B1.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:a})}static credentialFromResult(e){return B1.credentialFromTaggedObject(e)}static credentialFromError(e){return B1.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:a,oauthAccessToken:r}=e;if(!a&&!r)return null;try{return B1.credential(a,r)}catch{return null}}}B1.GOOGLE_SIGN_IN_METHOD="google.com";B1.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1 extends u6{constructor(){super("github.com")}static credential(e){return L3._fromParams({providerId:F1.PROVIDER_ID,signInMethod:F1.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return F1.credentialFromTaggedObject(e)}static credentialFromError(e){return F1.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return F1.credential(e.oauthAccessToken)}catch{return null}}}F1.GITHUB_SIGN_IN_METHOD="github.com";F1.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1 extends u6{constructor(){super("twitter.com")}static credential(e,a){return L3._fromParams({providerId:U1.PROVIDER_ID,signInMethod:U1.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:a})}static credentialFromResult(e){return U1.credentialFromTaggedObject(e)}static credentialFromError(e){return U1.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:a,oauthTokenSecret:r}=e;if(!a||!r)return null;try{return U1.credential(a,r)}catch{return null}}}U1.TWITTER_SIGN_IN_METHOD="twitter.com";U1.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,a,r,t=!1){const n=await v3._fromIdTokenResponse(e,r,t),s=Ta(r);return new a4({user:n,providerId:s,_tokenResponse:r,operationType:a})}static async _forOperation(e,a,r){await e._updateTokensIfNecessary(r,!0);const t=Ta(r);return new a4({user:e,providerId:t,_tokenResponse:r,operationType:a})}}function Ta(c){return c.providerId?c.providerId:"phoneNumber"in c?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0 extends Z1{constructor(e,a,r,t){var n;super(a.code,a.message),this.operationType=r,this.user=t,Object.setPrototypeOf(this,h0.prototype),this.customData={appName:e.name,tenantId:(n=e.tenantId)!==null&&n!==void 0?n:void 0,_serverResponse:a.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,a,r,t){return new h0(e,a,r,t)}}function yh(c,e,a,r){return(e==="reauthenticate"?a._getReauthenticationResolver(c):a._getIdTokenResponse(c)).catch(n=>{throw n.code==="auth/multi-factor-auth-required"?h0._fromErrorAndOperation(c,n,e,r):n})}async function _Y(c,e,a=!1){const r=await j4(c,e._linkToIdToken(c.auth,await c.getIdToken()),a);return a4._forOperation(c,"link",r)}/**
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
 */async function TY(c,e,a=!1){const{auth:r}=c,t="reauthenticate";try{const n=await j4(c,yh(r,t,e,c),a);Z(n.idToken,r,"internal-error");const s=p7(n.idToken);Z(s,r,"internal-error");const{sub:i}=s;return Z(c.uid===i,r,"user-mismatch"),a4._forOperation(c,t,n)}catch(n){throw(n==null?void 0:n.code)==="auth/user-not-found"&&b1(r,"user-mismatch"),n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EY(c,e,a=!1){const r="signIn",t=await yh(c,r,e),n=await a4._fromIdTokenResponse(c,r,t);return a||await c._updateCurrentUser(n.user),n}function PY(c,e,a,r){return c3(c).onIdTokenChanged(e,a,r)}function RY(c,e,a){return c3(c).beforeAuthStateChanged(e,a)}const m0="__sak";/**
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
 */class xh{constructor(e,a){this.storageRetriever=e,this.type=a}_isAvailable(){try{return this.storage?(this.storage.setItem(m0,"1"),this.storage.removeItem(m0),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,a){return this.storage.setItem(e,JSON.stringify(a)),Promise.resolve()}_get(e){const a=this.storage.getItem(e);return Promise.resolve(a?JSON.parse(a):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IY(){const c=k2();return v7(c)||c8(c)}const DY=1e3,OY=10;class wh extends xh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,a)=>this.onStorageEvent(e,a),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=IY()&&zY(),this.fallbackToPolling=Vh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const a of Object.keys(this.listeners)){const r=this.storage.getItem(a),t=this.localCache[a];r!==t&&e(a,t,r)}}onStorageEvent(e,a=!1){if(!e.key){this.forAllChangedKeys((s,i,o)=>{this.notifyListeners(s,o)});return}const r=e.key;if(a?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!a)return}const t=()=>{const s=this.storage.getItem(r);!a&&this.localCache[r]===s||this.notifyListeners(r,s)},n=this.storage.getItem(r);HY()&&n!==e.newValue&&e.newValue!==e.oldValue?setTimeout(t,OY):t()}notifyListeners(e,a){this.localCache[e]=a;const r=this.listeners[e];if(r)for(const t of Array.from(r))t(a&&JSON.parse(a))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,a,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:a,newValue:r}),!0)})},DY)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,a){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(a)}_removeListener(e,a){this.listeners[e]&&(this.listeners[e].delete(a),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,a){await super._set(e,a),this.localCache[e]=JSON.stringify(a)}async _get(e){const a=await super._get(e);return this.localCache[e]=JSON.stringify(a),a}async _remove(e){await super._remove(e),delete this.localCache[e]}}wh.type="LOCAL";const BY=wh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh extends xh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,a){}_removeListener(e,a){}}Nh.type="SESSION";const Sh=Nh;/**
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
 */function FY(c){return Promise.all(c.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(a){return{fulfilled:!1,reason:a}}}))}/**
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
 */class e8{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const a=this.receivers.find(t=>t.isListeningto(e));if(a)return a;const r=new e8(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const a=e,{eventId:r,eventType:t,data:n}=a.data,s=this.handlersMap[t];if(!(s!=null&&s.size))return;a.ports[0].postMessage({status:"ack",eventId:r,eventType:t});const i=Array.from(s).map(async f=>f(a.origin,n)),o=await FY(i);a.ports[0].postMessage({status:"done",eventId:r,eventType:t,response:o})}_subscribe(e,a){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(a)}_unsubscribe(e,a){this.handlersMap[e]&&a&&this.handlersMap[e].delete(a),(!a||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}e8.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z7(c="",e=10){let a="";for(let r=0;r<e;r++)a+=Math.floor(Math.random()*10);return c+a}/**
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
 */class UY{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,a,r=50){const t=typeof MessageChannel<"u"?new MessageChannel:null;if(!t)throw new Error("connection_unavailable");let n,s;return new Promise((i,o)=>{const f=z7("",20);t.port1.start();const l=setTimeout(()=>{o(new Error("unsupported_event"))},r);s={messageChannel:t,onMessage(u){const h=u;if(h.data.eventId===f)switch(h.data.status){case"ack":clearTimeout(l),n=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(n),i(h.data.response);break;default:clearTimeout(l),clearTimeout(n),o(new Error("invalid_response"));break}}},this.handlers.add(s),t.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:f,data:a},[t.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(){return window}function WY(c){o1().location.href=c}/**
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
 */function kh(){return typeof o1().WorkerGlobalScope<"u"&&typeof o1().importScripts=="function"}async function $Y(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jY(){var c;return((c=navigator==null?void 0:navigator.serviceWorker)===null||c===void 0?void 0:c.controller)||null}function qY(){return kh()?self:null}/**
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
 */const Ah="firebaseLocalStorageDb",GY=1,d0="firebaseLocalStorage",_h="fbase_key";class h6{constructor(e){this.request=e}toPromise(){return new Promise((e,a)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{a(this.request.error)})})}}function a8(c,e){return c.transaction([d0],e?"readwrite":"readonly").objectStore(d0)}function KY(){const c=indexedDB.deleteDatabase(Ah);return new h6(c).toPromise()}function x5(){const c=indexedDB.open(Ah,GY);return new Promise((e,a)=>{c.addEventListener("error",()=>{a(c.error)}),c.addEventListener("upgradeneeded",()=>{const r=c.result;try{r.createObjectStore(d0,{keyPath:_h})}catch(t){a(t)}}),c.addEventListener("success",async()=>{const r=c.result;r.objectStoreNames.contains(d0)?e(r):(r.close(),await KY(),e(await x5()))})})}async function Ea(c,e,a){const r=a8(c,!0).put({[_h]:e,value:a});return new h6(r).toPromise()}async function XY(c,e){const a=a8(c,!1).get(e),r=await new h6(a).toPromise();return r===void 0?null:r.value}function Pa(c,e){const a=a8(c,!0).delete(e);return new h6(a).toPromise()}const YY=800,JY=3;class Th{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await x5(),this.db)}async _withRetries(e){let a=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(a++>JY)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=e8._getInstance(qY()),this.receiver._subscribe("keyChanged",async(e,a)=>({keyProcessed:(await this._poll()).includes(a.key)})),this.receiver._subscribe("ping",async(e,a)=>["keyChanged"])}async initializeSender(){var e,a;if(this.activeServiceWorker=await $Y(),!this.activeServiceWorker)return;this.sender=new UY(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((a=r[0])===null||a===void 0)&&a.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jY()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await x5();return await Ea(e,m0,"1"),await Pa(e,m0),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,a){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ea(r,e,a)),this.localCache[e]=a,this.notifyServiceWorker(e)))}async _get(e){const a=await this._withRetries(r=>XY(r,e));return this.localCache[e]=a,a}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(a=>Pa(a,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(t=>{const n=a8(t,!1).getAll();return new h6(n).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const a=[],r=new Set;for(const{fbase_key:t,value:n}of e)r.add(t),JSON.stringify(this.localCache[t])!==JSON.stringify(n)&&(this.notifyListeners(t,n),a.push(t));for(const t of Object.keys(this.localCache))this.localCache[t]&&!r.has(t)&&(this.notifyListeners(t,null),a.push(t));return a}notifyListeners(e,a){this.localCache[e]=a;const r=this.listeners[e];if(r)for(const t of Array.from(r))t(a)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YY)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,a){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(a)}_removeListener(e,a){this.listeners[e]&&(this.listeners[e].delete(a),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Th.type="LOCAL";const QY=Th;new l6(3e4,6e4);/**
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
 */function ZY(c,e){return e?v1(e):(Z(c._popupRedirectResolver,c,"argument-error"),c._popupRedirectResolver)}/**
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
 */class V7 extends Lh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return G3(e,this._buildIdpRequest())}_linkToIdToken(e,a){return G3(e,this._buildIdpRequest(a))}_getReauthenticationResolver(e){return G3(e,this._buildIdpRequest())}_buildIdpRequest(e){const a={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(a.idToken=e),a}}function cJ(c){return EY(c.auth,new V7(c),c.bypassAuthState)}function eJ(c){const{auth:e,user:a}=c;return Z(a,e,"internal-error"),TY(a,new V7(c),c.bypassAuthState)}async function aJ(c){const{auth:e,user:a}=c;return Z(a,e,"internal-error"),_Y(a,new V7(c),c.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,a,r,t,n=!1){this.auth=e,this.resolver=r,this.user=t,this.bypassAuthState=n,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(a)?a:[a]}execute(){return new Promise(async(e,a)=>{this.pendingPromise={resolve:e,reject:a};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:a,sessionId:r,postBody:t,tenantId:n,error:s,type:i}=e;if(s){this.reject(s);return}const o={auth:this.auth,requestUri:a,sessionId:r,tenantId:n||void 0,postBody:t||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(i)(o))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cJ;case"linkViaPopup":case"linkViaRedirect":return aJ;case"reauthViaPopup":case"reauthViaRedirect":return eJ;default:b1(this.auth,"internal-error")}}resolve(e){y1(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y1(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rJ=new l6(2e3,1e4);class P3 extends Eh{constructor(e,a,r,t,n){super(e,a,t,n),this.provider=r,this.authWindow=null,this.pollId=null,P3.currentPopupAction&&P3.currentPopupAction.cancel(),P3.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){y1(this.filter.length===1,"Popup operations only handle one event");const e=z7();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(i1(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(i1(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,P3.currentPopupAction=null}pollUserCancellation(){const e=()=>{var a,r;if(!((r=(a=this.authWindow)===null||a===void 0?void 0:a.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(i1(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rJ.get())};e()}}P3.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tJ="pendingRedirect",U6=new Map;class nJ extends Eh{constructor(e,a,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,r),this.eventId=null}async execute(){let e=U6.get(this.auth._key());if(!e){try{const r=await sJ(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(a){e=()=>Promise.reject(a)}U6.set(this.auth._key(),e)}return this.bypassAuthState||U6.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const a=await this.auth._redirectUserForId(e.eventId);if(a)return this.user=a,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sJ(c,e){const a=lJ(e),r=oJ(c);if(!await r._isAvailable())return!1;const t=await r._get(a)==="true";return await r._remove(a),t}function iJ(c,e){U6.set(c._key(),e)}function oJ(c){return v1(c._redirectPersistence)}function lJ(c){return F6(tJ,c.config.apiKey,c.name)}async function fJ(c,e,a=!1){const r=H7(c),t=ZY(r,e),s=await new nJ(r,t,a).execute();return s&&!a&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uJ=10*60*1e3;class hJ{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let a=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(a=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mJ(e)||(this.hasHandledPotentialRedirect=!0,a||(this.queuedRedirectEvent=e,a=!0)),a}sendToConsumer(e,a){var r;if(e.error&&!Ph(e)){const t=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";a.onError(i1(this.auth,t))}else a.onAuthEvent(e)}isEventForConsumer(e,a){const r=a.eventId===null||!!e.eventId&&e.eventId===a.eventId;return a.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uJ&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ra(e))}saveEventToCache(e){this.cachedEventUids.add(Ra(e)),this.lastProcessedEventTime=Date.now()}}function Ra(c){return[c.type,c.eventId,c.sessionId,c.tenantId].filter(e=>e).join("-")}function Ph({type:c,error:e}){return c==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mJ(c){switch(c.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ph(c);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dJ(c,e={}){return f6(c,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pJ=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vJ=/^https?/;async function HJ(c){if(c.config.emulator)return;const{authorizedDomains:e}=await dJ(c);for(const a of e)try{if(zJ(a))return}catch{}b1(c,"unauthorized-domain")}function zJ(c){const e=y5(),{protocol:a,hostname:r}=new URL(e);if(c.startsWith("chrome-extension://")){const s=new URL(c);return s.hostname===""&&r===""?a==="chrome-extension:"&&c.replace("chrome-extension://","")===e.replace("chrome-extension://",""):a==="chrome-extension:"&&s.hostname===r}if(!vJ.test(a))return!1;if(pJ.test(c))return r===c;const t=c.replace(/\./g,"\\.");return new RegExp("^(.+\\."+t+"|"+t+")$","i").test(r)}/**
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
 */const VJ=new l6(3e4,6e4);function Ia(){const c=o1().___jsl;if(c!=null&&c.H){for(const e of Object.keys(c.H))if(c.H[e].r=c.H[e].r||[],c.H[e].L=c.H[e].L||[],c.H[e].r=[...c.H[e].L],c.CP)for(let a=0;a<c.CP.length;a++)c.CP[a]=null}}function gJ(c){return new Promise((e,a)=>{var r,t,n;function s(){Ia(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ia(),a(i1(c,"network-request-failed"))},timeout:VJ.get()})}if(!((t=(r=o1().gapi)===null||r===void 0?void 0:r.iframes)===null||t===void 0)&&t.Iframe)e(gapi.iframes.getContext());else if(!((n=o1().gapi)===null||n===void 0)&&n.load)s();else{const i=xY("iframefcb");return o1()[i]=()=>{gapi.load?s():a(i1(c,"network-request-failed"))},yY(`https://apis.google.com/js/api.js?onload=${i}`).catch(o=>a(o))}}).catch(e=>{throw W6=null,e})}let W6=null;function MJ(c){return W6=W6||gJ(c),W6}/**
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
 */const CJ=new l6(5e3,15e3),LJ="__/auth/iframe",bJ="emulator/auth/iframe",yJ={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xJ=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wJ(c){const e=c.config;Z(e.authDomain,c,"auth-domain-config-required");const a=e.emulator?d7(e,bJ):`https://${c.config.authDomain}/${LJ}`,r={apiKey:e.apiKey,appName:c.name,v:o6},t=xJ.get(c.config.apiHost);t&&(r.eid=t);const n=c._getFrameworks();return n.length&&(r.fw=n.join(",")),`${a}?${i6(r).slice(1)}`}async function NJ(c){const e=await MJ(c),a=o1().gapi;return Z(a,c,"internal-error"),e.open({where:document.body,url:wJ(c),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yJ,dontclear:!0},r=>new Promise(async(t,n)=>{await r.restyle({setHideOnLeave:!1});const s=i1(c,"network-request-failed"),i=o1().setTimeout(()=>{n(s)},CJ.get());function o(){o1().clearTimeout(i),t(r)}r.ping(o).then(o,()=>{n(s)})}))}/**
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
 */const SJ={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kJ=500,AJ=600,_J="_blank",TJ="http://localhost";class Da{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EJ(c,e,a,r=kJ,t=AJ){const n=Math.max((window.screen.availHeight-t)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let i="";const o=Object.assign(Object.assign({},SJ),{width:r.toString(),height:t.toString(),top:n,left:s}),f=k2().toLowerCase();a&&(i=dh(f)?_J:a),mh(f)&&(e=e||TJ,o.scrollbars="yes");const l=Object.entries(o).reduce((h,[p,g])=>`${h}${p}=${g},`,"");if(vY(f)&&i!=="_self")return PJ(e||"",i),new Da(null);const u=window.open(e||"",i,l);Z(u,c,"popup-blocked");try{u.focus()}catch{}return new Da(u)}function PJ(c,e){const a=document.createElement("a");a.href=c,a.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),a.dispatchEvent(r)}/**
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
 */const RJ="__/auth/handler",IJ="emulator/auth/handler",DJ=encodeURIComponent("fac");async function Oa(c,e,a,r,t,n){Z(c.config.authDomain,c,"auth-domain-config-required"),Z(c.config.apiKey,c,"invalid-api-key");const s={apiKey:c.config.apiKey,appName:c.name,authType:a,redirectUrl:r,v:o6,eventId:t};if(e instanceof bh){e.setDefaultLanguage(c.languageCode),s.providerId=e.providerId||"",AK(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(n||{}))s[l]=u}if(e instanceof u6){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}c.tenantId&&(s.tid=c.tenantId);const i=s;for(const l of Object.keys(i))i[l]===void 0&&delete i[l];const o=await c._getAppCheckToken(),f=o?`#${DJ}=${encodeURIComponent(o)}`:"";return`${OJ(c)}?${i6(i).slice(1)}${f}`}function OJ({config:c}){return c.emulator?d7(c,IJ):`https://${c.authDomain}/${RJ}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k8="webStorageSupport";class BJ{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sh,this._completeRedirectFn=fJ,this._overrideRedirectResult=iJ}async _openPopup(e,a,r,t){var n;y1((n=this.eventManagers[e._key()])===null||n===void 0?void 0:n.manager,"_initialize() not called before _openPopup()");const s=await Oa(e,a,r,y5(),t);return EJ(e,s,z7())}async _openRedirect(e,a,r,t){await this._originValidation(e);const n=await Oa(e,a,r,y5(),t);return WY(n),new Promise(()=>{})}_initialize(e){const a=e._key();if(this.eventManagers[a]){const{manager:t,promise:n}=this.eventManagers[a];return t?Promise.resolve(t):(y1(n,"If manager is not set, promise should be"),n)}const r=this.initAndGetManager(e);return this.eventManagers[a]={promise:r},r.catch(()=>{delete this.eventManagers[a]}),r}async initAndGetManager(e){const a=await NJ(e),r=new hJ(e);return a.register("authEvent",t=>(Z(t==null?void 0:t.authEvent,e,"invalid-auth-event"),{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=a,r}_isIframeWebStorageSupported(e,a){this.iframes[e._key()].send(k8,{type:k8},t=>{var n;const s=(n=t==null?void 0:t[0])===null||n===void 0?void 0:n[k8];s!==void 0&&a(!!s),b1(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const a=e._key();return this.originValidationPromises[a]||(this.originValidationPromises[a]=HJ(e)),this.originValidationPromises[a]}get _shouldInitProactively(){return Vh()||v7()||c8()}}const FJ=BJ;var Ba="@firebase/auth",Fa="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UJ{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const a=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,a),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const a=this.internalListeners.get(e);a&&(this.internalListeners.delete(e),a(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WJ(c){switch(c){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $J(c){e4(new M3("auth",(e,{options:a})=>{const r=e.getProvider("app").getImmediate(),t=e.getProvider("heartbeat"),n=e.getProvider("app-check-internal"),{apiKey:s,authDomain:i}=r.options;Z(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const o={apiKey:s,authDomain:i,clientPlatform:c,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gh(c)},f=new LY(r,t,n,o);return NY(f,a),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,a,r)=>{e.getProvider("auth-internal").initialize()})),e4(new M3("auth-internal",e=>{const a=H7(e.getProvider("auth").getImmediate());return(r=>new UJ(r))(a)},"PRIVATE").setInstantiationMode("EXPLICIT")),K1(Ba,Fa,WJ(c)),K1(Ba,Fa,"esm2017")}/**
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
 */const jJ=5*60,qJ=Xu("authIdTokenMaxAge")||jJ;let Ua=null;const GJ=c=>async e=>{const a=e&&await e.getIdTokenResult(),r=a&&(new Date().getTime()-Date.parse(a.issuedAtTime))/1e3;if(r&&r>qJ)return;const t=a==null?void 0:a.token;Ua!==t&&(Ua=t,await fetch(c,{method:t?"POST":"DELETE",headers:t?{Authorization:`Bearer ${t}`}:{}}))};function KJ(c=ch()){const e=u7(c,"auth");if(e.isInitialized())return e.getImmediate();const a=wY(c,{popupRedirectResolver:FJ,persistence:[QY,BY,Sh]}),r=Xu("authTokenSyncURL");if(r){const n=GJ(r);RY(a,n,()=>n(a.currentUser)),PY(a,s=>n(s))}const t=Gu("auth");return t&&Mh(a,`http://${t}`),a}$J("Browser");const XJ=G2(()=>{if(Zu({apiKey:"",authDomain:"",databaseURL:"",projectId:"ratrun-564ac",storageBucket:"",messagingSenderId:"",appId:""}),window.location.hostname==="localhost"){const a=KJ();Mh(a,"http://localhost:3000");const r=XX();th(r,"localhost",5001)}}),YJ=G2(()=>({provide:{changeKey:c=>c}})),JJ=G2(()=>{function c(e,a){return r=>{const t=/[!#\$%&'\*\+\-\/=\?\^_`\{\|\}~]/,n=a?e.test(r):!0,s=!t.test(r);return n&&s}}return{provide:{email:(e,a)=>c(/^[^\s@]{1,255}@[^\s@]+\.[^\s@]+$/,a)(e),password:(e,a)=>c(/^([a-zA-Z0-9]{8,16})$/,a)(e)}}}),QJ=[SH,AH,Wz,$z,jz,qz,Gz,Kz,hK,XJ,YJ,JJ],ZJ=(c,e,a)=>(e=e===!0?{}:e,{default:()=>{var r;return e?g1(c,e,a):(r=a.default)==null?void 0:r.call(a)}}),cQ=b3({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(c,e){const a=await u3[c.name]().then(r=>r.default||r);return()=>g1(a,c.layoutProps,e.slots)}}),eQ=b3({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(c,e){const a=z2(),r=F2(Q5),t=r===Z5()?Pz():r,n=y2(()=>p2(c.name)??t.meta.layout??"default"),s=$1();e.expose({layoutRef:s});const i=a.deferHydration();return()=>{const o=n.value&&n.value in u3,f=t.meta.layoutTransition??HH;return ZJ(K5,o&&f,{default:()=>g1(L9,{suspensible:!0,onResolve:()=>{i4(i)}},{default:()=>g1(aQ,{layoutProps:Y9(e.attrs,{ref:s}),key:n.value,name:n.value,shouldProvide:!c.name,hasTransition:!!f},e.slots)})}).default()}}}),aQ=b3({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(c,e){const a=c.name;return c.shouldProvide&&W3(mH,{isCurrent:r=>a===(r.meta.layout??"default")}),()=>{var r,t;return!a||typeof a=="string"&&!(a in u3)?(t=(r=e.slots).default)==null?void 0:t.call(r):g1(cQ,{key:a,layoutProps:c.layoutProps,name:a},e.slots)}}}),rQ=(c,e)=>{const a=c.__vccOpts||c;for(const[r,t]of e)a[r]=t;return a},tQ={};function nQ(c,e){const a=eQ;return m1(),Ld("div",null,[V2(a)])}const sQ=rQ(tQ,[["render",nQ]]),iQ={__name:"nuxt-error-page",props:{error:Object},setup(c){const a=c.error;(a.stack||"").split(`
`).splice(1).map(u=>({text:u.replace("webpack:/","").replace(".vue",".js").trim(),internal:u.includes("node_modules")&&!u.includes(".cache")||u.includes("internal")||u.includes("new Promise")})).map(u=>`<span class="stack${u.internal?" internal":""}">${u.text}</span>`).join(`
`);const r=Number(a.statusCode||500),t=r===404,n=a.statusMessage??(t?"Page Not Found":"Internal Server Error"),s=a.message||a.toString(),i=void 0,l=t?P7(()=>$3(()=>import("./error-404.e0257db0.js"),["./error-404.e0257db0.js","./nuxt-link.c99dc3aa.js","./vue.f36acd1f.11ea24dc.js","./error-404.7fc72018.css"],import.meta.url).then(u=>u.default||u)):P7(()=>$3(()=>import("./error-500.f2b175ff.js"),["./error-500.f2b175ff.js","./vue.f36acd1f.11ea24dc.js","./error-500.c5df6088.css"],import.meta.url).then(u=>u.default||u));return(u,h)=>(m1(),o3(p2(l),Kh(K9({statusCode:p2(r),statusMessage:p2(n),description:p2(s),stack:p2(i)})),null,16))}},oQ=iQ,lQ={__name:"nuxt-root",setup(c){const e=()=>null,a=z2(),r=a.deferHydration(),t=!1;W3(Q5,Z5()),a.hooks.callHookWith(i=>i.map(o=>o()),"vue:setup");const n=A0();A9((i,o,f)=>{if(a.hooks.callHook("vue:error",i,o,f).catch(l=>console.error("[nuxt] Error in `vue:error` hook",l)),vH(i)&&(i.fatal||i.unhandled))return a.runWithContext(()=>_3(i)),!1});const s=!1;return(i,o)=>(m1(),o3(L9,{onResolve:p2(r)},{default:M9(()=>[p2(n)?(m1(),o3(p2(oQ),{key:0,error:p2(n)},null,8,["error"])):p2(s)?(m1(),o3(p2(e),{key:1,context:p2(s)},null,8,["context"])):p2(t)?(m1(),o3(td(p2(t)),{key:2})):(m1(),o3(p2(sQ),{key:3}))]),_:1},8,["onResolve"]))}},Wa=lQ;globalThis.$fetch||(globalThis.$fetch=Jp.create({baseURL:Zp()}));let $a;{let c;$a=async function(){var n,s;if(c)return c;const r=!!((n=window.__NUXT__)!=null&&n.serverRendered||((s=document.getElementById("__NUXT_DATA__"))==null?void 0:s.dataset.ssr)==="true")?sp(Wa):np(Wa),t=hv({vueApp:r});try{await dv(t,QJ)}catch(i){await t.callHook("app:error",i),t.payload.error=t.payload.error||i}try{await t.hooks.callHook("app:created",r),await t.hooks.callHook("app:beforeMount",r),r.mount(VH),await t.hooks.callHook("app:mounted",r),await i4()}catch(i){await t.callHook("app:error",i),t.payload.error=t.payload.error||i}return r},c=$a().catch(e=>{console.error("Error while mounting app:",e)})}export{LQ as $,z2 as A,gQ as B,z0 as C,F2 as D,vQ as E,B2 as F,HQ as G,zQ as H,g1 as I,g0 as J,pQ as K,mH as L,zH as M,ZJ as N,i4 as O,Q5 as P,bQ as Q,_z as R,L9 as S,K5 as T,sH as U,y2 as V,Y4 as W,x0 as X,Cr as Y,Ce as Z,rQ as _,G9 as a,k0 as a0,Cp as a1,yQ as a2,K8 as a3,rr as a4,CQ as a5,V2 as b,Ld as c,X9 as d,hQ as e,mQ as f,F3 as g,F5 as h,MQ as i,Jm as j,Ym as k,J8 as l,N0 as m,b3 as n,m1 as o,uQ as p,dQ as q,$1 as r,x3 as s,fQ as t,p2 as u,VQ as v,M9 as w,z1 as x,W3 as y,o3 as z};