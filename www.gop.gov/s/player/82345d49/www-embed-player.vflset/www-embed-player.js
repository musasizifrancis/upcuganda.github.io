(function(){'use strict';var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function u(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&da(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var ka=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=ka(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if(typeof Object.setPrototypeOf=="function")ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function w(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function y(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function A(a){if(!(a instanceof Array)){a=y(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ra(a){return sa(a,a)}
function sa(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ta(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ua=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ua});
function va(){this.D=!1;this.u=null;this.i=void 0;this.h=1;this.o=this.M=0;this.P=this.j=null}
function wa(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
va.prototype.G=function(a){this.i=a};
function xa(a,b){a.j={exception:b,xd:!0};a.h=a.M||a.o}
va.prototype.return=function(a){this.j={return:a};this.h=this.o};
va.prototype.yield=function(a,b){this.h=b;return{value:a}};
va.prototype.A=function(a){this.h=a};
function ya(a,b,c){a.M=b;c!=void 0&&(a.o=c)}
function za(a,b){a.h=b;a.M=0}
function Aa(a){a.M=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.xd?a.h=a.M||a.o:b.A!=void 0&&a.o<b.A?(a.h=b.A,a.j=null):a.h=a.o:a.h=0}
function Ca(a){this.h=new va;this.i=a}
function Da(a,b){wa(a.h);var c=a.h.u;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.D=!1,e;var f=e.value}catch(g){return a.h.u=null,xa(a.h,g),Fa(a)}a.h.u=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.D=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.D=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.xd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){wa(a.h);a.h.u?b=Ea(a,a.h.u.next,b,a.h.G):(a.h.G(b),b=Fa(a));return b};
this.throw=function(b){wa(a.h);a.h.u?b=Ea(a,a.h.u["throw"],b,a.h.G):(xa(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ha(new Ga(new Ca(a)))}
function C(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("globalThis",function(a){return a||fa});
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return la});
u("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.X=0;this.ab=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.j)}};
b.prototype.U=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Z(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.P(g):this.o(g)}};
b.prototype.P=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.ha(h,g):this.o(g)};
b.prototype.j=function(g){this.M(2,g)};
b.prototype.o=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(this.X!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.X);this.X=g;this.ab=h;this.X===2&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.G()){var h=fa.console;typeof h!=="undefined"&&h.error(g.ab)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.ab;return k(g)};
b.prototype.D=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.Z=function(g){var h=this.i();g.ic(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(v){try{l(r(v))}catch(x){m(x)}}:t}
var l,m,n=new b(function(r,t){l=r;m=t});
this.ic(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ic=function(g,h){function k(){switch(l.X){case 1:g(l.ab);break;case 2:h(l.ab);break;default:throw Error("Unexpected state: "+l.X);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=y(g),m=l.next();!m.done;m=l.next())d(m.value).ic(h,k)})};
b.all=function(g){var h=y(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(x){r[v]=x;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).ic(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||qa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=y(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ta(k,g)){var l=new c;da(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ta(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ta(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ta(k,g)&&ta(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ta(k,g)&&ta(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ta(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=y(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(y([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=y(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(y([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
function Ja(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ja(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ka=Ka||{},D=this||self;function E(a,b,c){a=a.split(".");c=c||D;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function F(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function La(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Ra(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(Math.random()*1E9>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Va:Wa;return Xa.apply(null,arguments)}
function Za(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function $a(){return Date.now()}
function ab(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
ab(bb,Error);bb.prototype.name="CustomError";var cb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var db=globalThis.trustedTypes,eb;function fb(){var a=null;if(!db)return a;try{var b=function(c){return c};
a=db.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function gb(){eb===void 0&&(eb=fb());return eb}
;function hb(a){this.h=a}
hb.prototype.toString=function(){return this.h+""};
function ib(a){var b=gb();return new hb(b?b.createScriptURL(a):a)}
function jb(a){if(a instanceof hb)return a.h;throw Error("");}
;var kb=ra([""]),lb=sa(["\x00"],["\\0"]),mb=sa(["\n"],["\\n"]),nb=sa(["\x00"],["\\u0000"]);function ob(a){return a.toString().indexOf("`")===-1}
ob(function(a){return a(kb)})||ob(function(a){return a(lb)})||ob(function(a){return a(mb)})||ob(function(a){return a(nb)});function pb(a){this.h=a}
pb.prototype.toString=function(){return this.h};
var qb=new pb("about:invalid#zClosurez");function rb(a){this.Ge=a}
function sb(a){return new rb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var tb=[sb("data"),sb("http"),sb("https"),sb("mailto"),sb("ftp"),new rb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],ub=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function vb(a){if(a instanceof pb)if(a instanceof pb)a=a.h;else throw Error("");else a=ub.test(a)?a:void 0;return a}
;function wb(a,b){b=vb(b);b!==void 0&&(a.href=b)}
;function xb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function yb(a){this.h=a}
yb.prototype.toString=function(){return this.h+""};function zb(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Ab(a){this.h=a}
Ab.prototype.toString=function(){return this.h+""};
function Bb(a){var b=gb();return new Ab(b?b.createScript(a):a)}
function Cb(a){if(a instanceof Ab)return a.h;throw Error("");}
;function Db(a){var b=zb(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Eb(a,b){a.src=jb(b);Db(a)}
;function Fb(){this.h=Gb[0].toLowerCase()}
Fb.prototype.toString=function(){return this.h};function Hb(a){var b="true".toString(),c=[new Fb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Fb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Ib="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Jb(a,b){if(b instanceof hb)a.href=jb(b).toString(),a.rel="stylesheet";else{if(Ib.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=vb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Lb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Mb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Nb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ob=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Pb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Mb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Qb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Rb(a,b){b=Lb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Sb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Tb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Ub(a){var b=F("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Vb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Wb[c])c=Wb[c];else{c=String(c);if(!Wb[c]){var f=/function\s+([^\(]+)/m.exec(c);Wb[c]=f?f[1]:"[Anonymous]"}c=Wb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Vb(a,b){b||(b={});b[Xb(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Xb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Vb(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[Xb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Vb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Xb(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Wb={};function Yb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $b(a){return a?decodeURI(a):a}
function ac(a,b){return b.match(Zb)[a]||null}
function bc(a){return $b(ac(3,a))}
function cc(a){var b=a.match(Zb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function dc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ec(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function fc(a){var b=[],c;for(c in a)ec(c,a[c],b);return b.join("&")}
function hc(a,b){b=fc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function ic(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var jc=/#|$/,kc=/[?&]($|#)/;function lc(a,b){for(var c=a.search(jc),d=0,e,f=[];(e=ic(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(kc,"$1")}
;var mc=(new Date("2024-01-01T00:00:00Z")).getTime();function nc(a){var b=C.apply(1,arguments).filter(function(d){return d}).join("&");
if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")===-1?"?":"&")+b}
function oc(a){var b=a.url;a=a.Xh;this.j=b;this.D=a;a=/[?&]dsh=1(&|$)/.test(b);this.u=!a&&/[?&]ae=1(&|$)/.test(b);this.M=!a&&/[?&]ae=2(&|$)/.test(b);if((this.h=/[?&]adurl=([^&]*)/.exec(b))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}this.o=(new Date).getTime()-mc}
function pc(a){a=a.D;if(!a)return"";var b="";a.platform&&(b+="&uap="+encodeURIComponent(a.platform));a.platformVersion&&(b+="&uapv="+encodeURIComponent(a.platformVersion));a.uaFullVersion&&(b+="&uafv="+encodeURIComponent(a.uaFullVersion));a.architecture&&(b+="&uaa="+encodeURIComponent(a.architecture));a.model&&(b+="&uam="+encodeURIComponent(a.model));a.bitness&&(b+="&uab="+encodeURIComponent(a.bitness));a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+
";"+encodeURIComponent(c.version)}).join("|")));
typeof a.wow64!=="undefined"&&(b+="&uaw="+Number(a.wow64));return b.substring(1)}
;function qc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function rc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function sc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?sc.apply(null,d):rc(d)}}
;function H(){this.ea=this.ea;this.M=this.M}
H.prototype.ea=!1;H.prototype.dispose=function(){this.ea||(this.ea=!0,this.ba())};
H.prototype[Symbol.dispose]=function(){this.dispose()};
function tc(a,b){a.addOnDisposeCallback(Za(rc,b))}
H.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.M||(this.M=[]),b&&(a=a.bind(b)),this.M.push(a))};
H.prototype.ba=function(){if(this.M)for(;this.M.length;)this.M.shift()()};function uc(){var a=vc();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:qc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new wc(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new wc(f))}))})}
function wc(a){H.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Zc=this.vm.p;this.j=this.o.bind(this);this.addOnDisposeCallback(function(){return void xc(b)})}
w(wc,H);wc.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.wb&&{c:a.wb},a.cd&&{s:a.cd},a.dd!==void 0&&{p:a.dd}))};
wc.prototype.o=function(a){this.vm.e(a)};
function xc(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
;function yc(a){var b=b===void 0?47:b;var c=[];zc(a,Ac,6).forEach(function(d){Bc(d,2)<=b&&c.push(Bc(d,1))});
return c}
function Cc(a){var b=b===void 0?47:b;var c=[];zc(a,Ac,6).forEach(function(d){Bc(d,2)>b&&c.push(Bc(d,1))});
return c}
;var Dc;function Ec(){H.apply(this,arguments);this.j=1;this[Dc]=this.dispose}
w(Ec,H);Ec.prototype.share=function(){if(this.ea)throw Error("E:AD");this.j++;return this};
Ec.prototype.dispose=function(){--this.j||H.prototype.dispose.call(this)};
Dc=Symbol.dispose;function Fc(a){return{fieldType:2,fieldName:a}}
function Gc(a){return{fieldType:3,fieldName:a}}
;function Hc(a){this.h=a;a.Hc("/client_streamz/bg/frs",Gc("mk"))}
Hc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Ic(a){this.h=a;a.Hc("/client_streamz/bg/wrl",Gc("mn"),Fc("ac"),Fc("sc"),Gc("rk"),Gc("mk"))}
Ic.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Jc(a){this.h=a;a.Mb("/client_streamz/bg/ec",Gc("en"),Gc("mk"))}
Jc.prototype.kb=function(a,b){this.h.Jb("/client_streamz/bg/ec",a,b)};
function Kc(a){this.h=a;a.Hc("/client_streamz/bg/el",Gc("en"),Gc("rk"),Gc("mk"))}
Kc.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function Lc(a){this.h=a;a.Mb("/client_streamz/bg/cec",Fc("ec"),Gc("rk"),Gc("mk"))}
Lc.prototype.kb=function(a,b,c){this.h.Jb("/client_streamz/bg/cec",a,b,c)};
function Mc(a){this.h=a;a.Mb("/client_streamz/bg/po/csc",Fc("cs"),Gc("rk"),Gc("mk"))}
Mc.prototype.kb=function(a,b,c){this.h.Jb("/client_streamz/bg/po/csc",a,b,c)};
function Nc(a){this.h=a;a.Mb("/client_streamz/bg/po/ctav",Gc("av"),Gc("rk"),Gc("mk"))}
Nc.prototype.kb=function(a,b,c){this.h.Jb("/client_streamz/bg/po/ctav",a,b,c)};
function Oc(a){this.h=a;a.Mb("/client_streamz/bg/po/cwsc",Gc("su"),Gc("rk"),Gc("mk"))}
Oc.prototype.kb=function(a,b,c){this.h.Jb("/client_streamz/bg/po/cwsc",a,b,c)};function Pc(a){D.setTimeout(function(){throw a;},0)}
;var Qc,Rc=F("CLOSURE_FLAGS"),Sc=Rc&&Rc[610401301];Qc=Sc!=null?Sc:!1;function Tc(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var Uc,Vc=D.navigator;Uc=Vc?Vc.userAgentData||null:null;function Wc(a){if(!Qc||!Uc)return!1;for(var b=0;b<Uc.brands.length;b++){var c=Uc.brands[b].brand;if(c&&c.indexOf(a)!=-1)return!0}return!1}
function I(a){return Tc().indexOf(a)!=-1}
;function Xc(){return Qc?!!Uc&&Uc.brands.length>0:!1}
function Yc(){return Xc()?!1:I("Opera")}
function Zc(){return I("Firefox")||I("FxiOS")}
function $c(){return Xc()?Wc("Chromium"):(I("Chrome")||I("CriOS"))&&!(Xc()?0:I("Edge"))||I("Silk")}
;function ad(){return Qc?!!Uc&&!!Uc.platform:!1}
function bd(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function cd(a){cd[" "](a);return a}
cd[" "]=function(){};var dd=Yc(),ed=Xc()?!1:I("Trident")||I("MSIE"),fd=I("Edge"),gd=I("Gecko")&&!(Tc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),hd=Tc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge");hd&&I("Mobile");ad()||I("Macintosh");ad()||I("Windows");(ad()?Uc.platform==="Linux":I("Linux"))||ad()||I("CrOS");var id=ad()?Uc.platform==="Android":I("Android");bd();I("iPad");I("iPod");bd()||I("iPad")||I("iPod");Tc().toLowerCase().indexOf("kaios");Zc();var jd=bd()||I("iPod"),kd=I("iPad");!I("Android")||$c()||Zc()||Yc()||I("Silk");$c();var ld=I("Safari")&&!($c()||(Xc()?0:I("Coast"))||Yc()||(Xc()?0:I("Edge"))||(Xc()?Wc("Microsoft Edge"):I("Edg/"))||(Xc()?Wc("Opera"):I("OPR"))||Zc()||I("Silk")||I("Android"))&&!(bd()||I("iPad")||I("iPod"));var md={},nd=null;function od(a,b){Ma(a);b===void 0&&(b=0);pd();b=md[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function qd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;rd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function rd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=nd[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
pd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function pd(){if(!nd){nd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));md[c]=d;for(var e=0;e<d.length;e++){var f=d[e];nd[f]===void 0&&(nd[f]=e)}}}}
;var sd=typeof Uint8Array!=="undefined",td=!ed&&typeof btoa==="function",ud=/[-_.]/g,vd={"-":"+",_:"/",".":"="};function wd(a){return vd[a]||""}
var xd={};function yd(a,b){zd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
yd.prototype.sizeBytes=function(){zd(xd);var a=this.h;if(!(a==null||sd&&a!=null&&a instanceof Uint8Array))if(typeof a==="string")if(td){ud.test(a)&&(a=a.replace(ud,wd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=qd(a);else La(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var Ad;function zd(a){if(a!==xd)throw Error("illegal external caller");}
;var Bd=void 0;function Cd(a){a=Error(a);Tb(a,"warning");return a}
;var Dd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function Ed(a,b,c){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var Fd=Ed("jas",void 0,!0),Gd=Ed(void 0,"1oa"),Hd=Ed(void 0,"0actk"),Id=Ed(void 0,"vps");Math.max.apply(Math,A(Object.values({mh:1,lh:2,kh:4,ph:8,oh:16,nh:32,Nf:64,rh:128,ih:256,hh:512,Tf:1024,qh:2048,Uf:4096,Of:8192,jh:16384})));var J=Dd?Fd:"Fe",Jd={Fe:{value:0,configurable:!0,writable:!0,enumerable:!1}},Kd=Object.defineProperties;function Ld(a,b){Dd||J in a||Kd(a,Jd);a[J]|=b}
function Md(a,b){Dd||J in a||Kd(a,Jd);a[J]=b}
;var Nd={};function Od(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
var Pd,Qd=[];Md(Qd,55);Pd=Object.freeze(Qd);function Rd(a){if(a&2)throw Error();}
var Sd=Object.freeze({});function Td(){return typeof BigInt==="function"}
;function Ud(a){a.Fh=!0;return a}
;var Vd=Ud(function(a){return typeof a==="number"}),Wd=Ud(function(a){return typeof a==="string"}),Xd=Ud(function(a){return typeof a==="boolean"});
function Yd(){var a=Zd;return Ud(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var $d=Ud(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var ae=typeof D.BigInt==="function"&&typeof D.BigInt(0)==="bigint";function be(a){var b=a;if(Wd(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Vd(b)&&!Number.isSafeInteger(b))throw Error(String(b));return ae?BigInt(a):a=Xd(a)?a?"1":"0":Wd(a)?a.trim()||"0":String(a)}
var he=Ud(function(a){return ae?a>=ce&&a<=de:a[0]==="-"?ee(a,fe):ee(a,ge)}),fe=Number.MIN_SAFE_INTEGER.toString(),ce=ae?BigInt(Number.MIN_SAFE_INTEGER):void 0,ge=Number.MAX_SAFE_INTEGER.toString(),de=ae?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function ee(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var ie=0,je=0;function ke(a){var b=a>>>0;ie=b;je=(a-b)/4294967296>>>0}
function le(a){if(a<0){ke(0-a);var b=y(me(ie,je));a=b.next().value;b=b.next().value;ie=a>>>0;je=b>>>0}else ke(a)}
function ne(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Td()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+oe(c)+oe(a));return c}
function oe(a){a=String(a);return"0000000".slice(a.length)+a}
function pe(){var a=ie,b=je;b&2147483648?Td()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=y(me(a,b)),a=b.next().value,b=b.next().value,a="-"+ne(a,b)):a=ne(a,b);return a}
function me(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function qe(a){return Array.prototype.slice.call(a)}
;var re=typeof BigInt==="function"?BigInt.asIntN:void 0,se=Number.isSafeInteger,te=Number.isFinite,ue=Math.trunc;function ve(a){return a.displayName||a.name||"unknown type name"}
function we(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+La(a)+": "+a);return a}
var xe=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ye(a){switch(typeof a){case "bigint":return!0;case "number":return te(a);case "string":return xe.test(a);default:return!1}}
function ze(a){if(typeof a!=="number")throw Cd("int32");if(!te(a))throw Cd("int32");return a|0}
function Ae(a){return a==null?a:ze(a)}
function Be(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return te(a)?a|0:void 0}
function Ce(a){var b=0;b=b===void 0?0:b;if(!ye(a))throw Cd("int64");var c=typeof a;switch(b){case 2048:switch(c){case "string":return De(a);case "bigint":return String(re(64,a));default:return Ee(a)}case 4096:switch(c){case "string":return b=ue(Number(a)),se(b)?a=be(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=Td()?be(re(64,BigInt(a))):be(Fe(a))),a;case "bigint":return be(re(64,a));default:return se(a)?be(Ge(a)):be(Ee(a))}case 0:switch(c){case "string":return De(a);case "bigint":return be(re(64,
a));default:return Ge(a)}default:return xb(b,"Unknown format requested type for int64")}}
function He(a){return a==null?a:Ce(a)}
function Ie(a){var b=a.length;return a[0]==="-"?b<20?!0:b===20&&Number(a.substring(0,7))>-922337:b<19?!0:b===19&&Number(a.substring(0,6))<922337}
function Fe(a){a.indexOf(".");if(Ie(a))return a;if(a.length<16)le(Number(a));else if(Td())a=BigInt(a),ie=Number(a&BigInt(4294967295))>>>0,je=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");je=ie=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),je*=1E6,ie=ie*1E6+d,ie>=4294967296&&(je+=Math.trunc(ie/4294967296),je>>>=0,ie>>>=0);b&&(b=y(me(ie,je)),a=b.next().value,b=b.next().value,ie=a,je=b)}return pe()}
function Ge(a){ye(a);a=ue(a);if(!se(a)){le(a);var b=ie,c=je;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:ne(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function Ee(a){ye(a);a=ue(a);if(se(a))a=String(a);else{var b=String(a);Ie(b)?a=b:(le(a),a=pe())}return a}
function De(a){ye(a);var b=ue(Number(a));if(se(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Fe(a)}
function Je(a){if(a==null)return a;if(typeof a==="bigint")return he(a)?a=Number(a):(a=re(64,a),a=he(a)?Number(a):String(a)),a;if(ye(a))return typeof a==="number"?Ge(a):De(a)}
function Ke(a){if(typeof a!=="string")throw Error();return a}
function Le(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Me(a){return a==null||typeof a==="string"?a:void 0}
function Ne(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ve(b)+" but got "+(a&&ve(a.constructor)));}
function Oe(a,b,c){if(a!=null&&typeof a==="object"&&a.Rc===Nd)return a;if(Array.isArray(a)){var d=a[J]|0,e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Md(a,e);return new b(a)}}
;var Pe={};function Qe(a){return a}
;function Re(a,b,c,d,e){d=d?!!(b&32):void 0;var f=[],g=a.length,h=!1;if(b&64){if(b&256){g--;var k=a[g];var l=g;Od(k)}else l=4294967295,k=void 0,g&&Od(a[g-1]);if(!(e||b&512)){h=!0;var m;var n=((m=Se)!=null?m:Qe)(k?l- -1:b>>15&1023||536870912,-1,a,k);l=n+-1}}else l=4294967295,b&1||(k=g&&a[g-1],Od(k)?(g--,l=g,n=0):k=void 0);m=void 0;for(var r=0;r<g;r++){var t=a[r];if(t!=null&&(t=c(t,d))!=null)if(r>=l){var v=void 0;((v=m)!=null?v:m={})[r- -1]=t}else f[r]=t}if(k)for(var x in k)a=k[x],a!=null&&(a=c(a,d))!=
null&&(g=+x,g<n?f[g+-1]=a:(g=void 0,((g=m)!=null?g:m={})[x]=a));m&&(h?f.push(m):f[l]=m);e&&Md(f,b&33522241|(m!=null?290:34));return f}
function Te(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return he(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[J]|0;return a.length===0&&b&1?void 0:Re(a,b,Te,!1,!1)}if(a.Rc===Nd)return Ue(a);if(a instanceof yd){b=a.h;if(b==null)a="";else if(typeof b==="string")a=b;else{if(td){for(var c="",d=0,e=b.length-10240;d<e;)c+=String.fromCharCode.apply(null,b.subarray(d,d+=10240));c+=String.fromCharCode.apply(null,d?b.subarray(d):
b);b=btoa(c)}else b=od(b);a=a.h=b}return a}return}return a}
var Se;function Ve(a,b){if(b){Se=b==null||b===Qe||b[Id]!==Pe?Qe:b;try{return Ue(a)}finally{Se=void 0}}return Ue(a)}
function Ue(a){a=a.F;return Re(a,a[J]|0,Te,void 0,!1)}
;function L(a,b,c){if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");d=a[J]|0;8192&d||!(64&d)||2&d||We();if(d&1024)throw Error("farr");if(d&64)return d&16384||Md(a,d|16384),a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(Od(g)){d|=256;b=d&512?0:-1;f-=b;if(f>=1024)throw Error("pvtlmt");for(var h in g)e=+h,e<f&&(c[e+b]=g[h],delete g[h]);d=d&-33521665|(f&1023)<<15;break a}}if(b){h=
Math.max(b,e-(d&512?0:-1));if(h>1024)throw Error("spvt");d=d&-33521665|(h&1023)<<15}}}Md(a,d|16384);return a}
function We(){if(Hd!=null){var a;var b=(a=Bd)!=null?a:Bd={};a=b[Hd]||0;a>=5||(b[Hd]=a+1,b=Error(),Tb(b,"incident"),Pc(b))}}
;function Xe(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[J]|0;if(a.length===0&&c&1)return;if(c&2)return a;var d;if(d=b)d=c===0||!!(c&32)&&!(c&64||!(c&16));return d?(Ld(a,34),c&4&&Object.freeze(a),a):Re(a,c,Xe,b!==void 0,!0)}if(a.Rc===Nd)return b=a.F,c=b[J]|0,c&2?a:Re(b,c,Xe,!0,!0);if(a instanceof yd)return a}
function Ye(a){var b=a.F;if(!((b[J]|0)&2))return a;a=new a.constructor(Re(b,b[J]|0,Xe,!0,!0));b=a.F;b[J]&=-3;return a}
;function Ze(a,b){Object.isExtensible(a);a=a.F;return $e(a,a[J]|0,b)}
function $e(a,b,c){if(c===-1)return null;var d=c+(b&512?0:-1),e=a.length-1;if(d>=e&&b&256)a=a[e][c];else if(d<=e)a=a[d];else return;return a}
function af(a,b,c){var d=a.F,e=d[J]|0;Rd(e);bf(d,e,b,c);return a}
function bf(a,b,c,d){var e=b&512?0:-1,f=c+e,g=a.length-1;if(f>=g&&b&256)return a[g][c]=d,b;if(f<=g)return a[f]=d,b;d!==void 0&&(g=b>>15&1023||536870912,c>=g?d!=null&&(f={},a[g+e]=(f[c]=d,f),b|=256,Md(a,b)):a[f]=d);return b}
function cf(a){return!!(2&a)&&!!(4&a)||!!(1024&a)}
function df(a,b,c){var d=a.F,e=d[J]|0;Rd(e);if(b==null)return bf(d,e,3),a;if(!Array.isArray(b))throw Cd();var f=b[J]|0,g=f,h=cf(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=qe(b),g=0,f=ef(f,e),f=ff(f,e,!0),k=!1);f|=21;h=4&f?2048&f?2048:4096&f?4096:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=qe(b),g=0,f=ef(f,e),f=ff(f,e,!0),k=!1),b[l]=n)}f!==g&&(k&&(b=qe(b),f=ef(f,e),f=ff(f,e,!0)),Md(b,f));bf(d,e,3,b);return a}
function gf(a,b,c,d){a=a.F;var e=a[J]|0;Rd(e);if(d==null){var f=hf(a);if(jf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=hf(a);var g=jf(f,a,e,c);g!==b&&(g&&(e=bf(a,e,g)),f.set(c,b))}bf(a,e,b,d)}
function hf(a){if(Dd){var b;return(b=a[Gd])!=null?b:a[Gd]=new Map}if(Gd in a)return a[Gd];b=new Map;Object.defineProperty(a,Gd,{value:b});return b}
function jf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];$e(b,c,g)!=null&&(e!==0&&(c=bf(b,c,e)),e=g)}a.set(d,e);return e}
function kf(a,b,c){a=a.F;var d=a[J]|0,e=$e(a,d,c);b=Oe(e,b,d);b!==e&&b!=null&&bf(a,d,c,b);return b}
function lf(a,b,c){b=kf(a,b,c);if(b==null)return b;a=a.F;var d=a[J]|0;if(!(d&2)){var e=Ye(b);e!==b&&(b=e,bf(a,d,c,b))}return b}
function zc(a,b,c){var d=void 0===Sd?2:4;var e=a.F[J]|0,f=e,g=!(2&e);a=a.F;var h=!!(2&f);e=h?1:d;g&&(g=!h);d=$e(a,f,c);d=Array.isArray(d)?d:Pd;var k=d[J]|0;h=!!(4&k);if(!h){var l=k;l===0&&(l=ef(l,f));k=d;l|=1;var m=f,n=!!(2&l);n&&(m|=2);for(var r=!n,t=!0,v=0,x=0;v<k.length;v++){var z=Oe(k[v],b,m);if(z instanceof b){if(!n){var G=!!((z.F[J]|0)&2);r&&(r=!G);t&&(t=G)}k[x++]=z}}x<v&&(k.length=x);l|=4;l=t?l|16:l&-17;l=r?l|8:l&-9;Md(k,l);n&&Object.freeze(k);k=l}if(g&&!(8&k||!d.length&&(e===1||e===4&&32&
k))){cf(k)&&(d=qe(d),k=ef(k,f),f=bf(a,f,c,d));b=d;g=k;for(k=0;k<b.length;k++)l=b[k],m=Ye(l),l!==m&&(b[k]=m);g|=8;g=b.length?g&-17:g|16;Md(b,g);k=g}e===1||e===4&&32&k?cf(k)||(f=k,c=!!(32&k),k|=!d.length||16&k&&(!h||c)?2:1024,k!==f&&Md(d,k),Object.freeze(d)):(e===2&&cf(k)&&(d=qe(d),k=ef(k,f),k=ff(k,f,!1),Md(d,k),f=bf(a,f,c,d)),cf(k)||(c=k,k=ff(k,f,!1),k!==c&&Md(d,k)));return d}
function mf(a,b,c,d){d!=null?Ne(d,b):d=void 0;return af(a,c,d)}
function nf(a,b,c,d){var e=a.F,f=e[J]|0;Rd(f);if(d==null)return bf(e,f,c),a;if(!Array.isArray(d))throw Cd();for(var g=d[J]|0,h=g,k=cf(g),l=k||Object.isFrozen(d),m=!0,n=!0,r=0;r<d.length;r++){var t=d[r];Ne(t,b);k||(t=!!((t.F[J]|0)&2),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g|16:g&-17);l&&g===h||(d=qe(d),h=0,g=ef(g,f),g=ff(g,f,!0));g!==h&&Md(d,g);bf(e,f,c,d);return a}
function ef(a,b){a=(2&b?a|2:a&-3)|32;return a&=-1025}
function ff(a,b,c){32&b&&c||(a&=-33);return a}
function of(a){a=Ze(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(re(64,a)):ye(a)?c==="string"?De(a):b?Ee(a):Ge(a):void 0;return b}
function Bc(a,b,c){c=c===void 0?0:c;var d;return(d=Be(Ze(a,b)))!=null?d:c}
function pf(a,b){var c=c===void 0?"":c;var d;return(d=Me(Ze(a,b)))!=null?d:c}
function qf(a){var b=b===void 0?0:b;a=Ze(a,1);a=a==null?a:te(a)?a|0:void 0;return a!=null?a:b}
function rf(a,b,c){return af(a,b,Le(c))}
function sf(a,b,c){c=Le(c);a=a.F;var d=a[J]|0;Rd(d);bf(a,d,b,c===""?void 0:c)}
function tf(a,b,c){if(c!=null){if(!te(c))throw Cd("enum");c|=0}return af(a,b,c)}
;function M(a,b,c){this.F=L(a,b,c)}
p=M.prototype;p.toJSON=function(){return Ve(this)};
p.serialize=function(a){return JSON.stringify(Ve(this,a))};
function uf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Ld(b,32);return new a(b)}
p.clone=function(){var a=this,b=a.F;a=new a.constructor(Re(b,b[J]|0,Xe,!0,!0));b=a.F;b[J]&=-3;return a};
p.Rc=Nd;p.toString=function(){return this.F.toString()};function vf(){this.ctor=wf;this.isRepeated=0;this.h=lf;this.defaultValue=void 0}
vf.prototype.register=function(){cd(this)};function xf(a){return function(b){return uf(a,b)}}
;function yf(a){this.F=L(a)}
w(yf,M);function zf(a,b){return df(a,b,ze)}
;function Af(a){this.F=L(a)}
w(Af,M);var Bf=[1,2,3];function Cf(a){this.F=L(a)}
w(Cf,M);var Df=[1,2,3];function Ef(a){this.F=L(a)}
w(Ef,M);function Ff(a){this.F=L(a)}
w(Ff,M);function Gf(a){this.F=L(a)}
w(Gf,M);function Hf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function If(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,t=0;t<64;t+=4)r[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],x=e[2],z=e[3],G=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var K=z^v&(x^z);var ba=1518500249}else K=v^x^z,ba=1859775393;else t<60?(K=v&x|z&(v|x),ba=2400959708):(K=v^x^z,ba=3395469782);K=((n<<5|n>>>27)&4294967295)+K+G+ba+r[t]&4294967295;G=z;z=x;x=(v<<30|v>>>2)&4294967295;v=n;n=K}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+x&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(n,r){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],v=0,x=n.length;v<x;++v)t.push(n.charCodeAt(v));n=t}r||(r=n.length);t=0;if(l==0)for(;t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var v=24;v>=0;v-=8)n[r++]=e[t]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,je:function(){for(var n=d(),r="",t=0;t<n.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return r}}}
;function Jf(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,Kf(Hf(d),a,c||null)].join(" "):null}
function Kf(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Mb(d,function(h){e.push(h)}),Lf(e.join(" "));
var f=[],g=[];Mb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Mb(d,function(h){e.push(h)});
a=Lf(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Lf(a){var b=If();b.update(a);return b.je().toLowerCase()}
;function Mf(a){this.h=a||{cookie:""}}
p=Mf.prototype;p.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Vb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
p.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.bf;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Vb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=cb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Vb:0,path:b,domain:c});return d};
p.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=cb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var Nf=new Mf(typeof document=="undefined"?null:document);function Of(){var a=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__1PSAPISID||D.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new Mf(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function Pf(a,b,c,d){(a=D[a])||typeof document==="undefined"||(a=(new Mf(document)).get(b));return a?Jf(a,c,d):null}
function Qf(a){var b=Hf(String(D.location.href)),c=[];if(Of()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?D.__SAPISID:D.__APISID;d||typeof document==="undefined"||(d=new Mf(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?Jf(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=Pf("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=Pf("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function Rf(){}
Rf.prototype.compress=function(a){var b,c,d,e;return B(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
Rf.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function Sf(a){this.F=L(a)}
w(Sf,M);function Tf(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return $a()};
this.i=this.h()}
Tf.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Tf.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
Tf.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Tf.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Uf(a){this.F=L(a)}
w(Uf,M);function Vf(a){this.F=L(a)}
w(Vf,M);function Wf(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
p=Wf.prototype;p.clone=function(){return new Wf(this.x,this.y)};
p.equals=function(a){return a instanceof Wf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
p.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
p.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
p.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
p.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Xf(a,b){this.width=a;this.height=b}
p=Xf.prototype;p.clone=function(){return new Xf(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
p.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Yf(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Zf(a){var b=$f,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ag(a){for(var b in a)return!1;return!0}
function bg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function cg(a){return a!==null&&"privembed"in a?a.privembed:!1}
function dg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function eg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function fg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=fg(a[c]);return b}
var gg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<gg.length;f++)c=gg[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function ig(a,b){this.h=a===jg&&b||""}
ig.prototype.toString=function(){return this.h};
var jg={};new ig(jg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function kg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function lg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function mg(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function ng(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function og(a){this.F=L(a)}
w(og,M);og.prototype.oc=function(){return qf(this)};function pg(a){this.F=L(a)}
w(pg,M);function qg(a){this.F=L(a)}
w(qg,M);function rg(a,b){nf(a,pg,1,b)}
;function sg(a){this.F=L(a)}
w(sg,M);var tg=["platform","platformVersion","architecture","model","uaFullVersion"],ug=new qg,vg=null;function wg(a,b){b=b===void 0?tg:b;if(!vg){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new pg;f=rf(f,1,e.brand);return rf(f,2,e.version)});
rg(af(ug,2,we(a.mobile)),c);vg=a.getHighEntropyValues(b)}var d=new Set(b);return vg.then(function(e){var f=ug.clone();d.has("platform")&&rf(f,3,e.platform);d.has("platformVersion")&&rf(f,4,e.platformVersion);d.has("architecture")&&rf(f,5,e.architecture);d.has("model")&&rf(f,6,e.model);d.has("uaFullVersion")&&rf(f,7,e.uaFullVersion);return f}).catch(function(){return ug.clone()})}
;function xg(a){this.F=L(a)}
w(xg,M);function yg(a){this.F=L(a,4)}
w(yg,M);function zg(a){this.F=L(a,36)}
w(zg,M);function Ag(a){this.F=L(a,19)}
w(Ag,M);Ag.prototype.Yb=function(a){return tf(this,2,a)};function Bg(a,b){this.Wa=b=b===void 0?!1:b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new Ag;Number.isInteger(a)&&this.h.Yb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Cg(this,new xg)}
Bg.prototype.Yb=function(a){this.h.Yb(a);return this};
function Cg(a,b){mf(a.h,xg,1,b);qf(b)||tf(b,1,1);a.Wa||(b=Dg(a),pf(b,5)||rf(b,5,a.locale));a.j&&(b=Dg(a),lf(b,qg,9)||mf(b,qg,9,a.j))}
function Eg(a,b){a.i=b}
function Fg(a){var b=b===void 0?tg:b;var c=a.Wa?void 0:window;c?wg(c,b).then(function(d){a.j=d;d=Dg(a);mf(d,qg,9,a.j);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Dg(a){a=lf(a.h,xg,1);var b=lf(a,sg,11);b||(b=new sg,mf(a,sg,11,b));return b}
function Gg(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;if(kf(lf(a.h,xg,1),sg,11)!==void 0){var h=Dg(a);var k=new og;k=tf(k,1,a.i);k=af(k,2,we(a.isFinal));d=af(k,3,Ae(d>0?d:void 0));d=af(d,4,Ae(f>0?f:void 0));d=af(d,5,Ae(g>0?g:void 0));f=d.F;g=f[J]|0;d=g&2?d:new d.constructor(Re(f,g,Xe,!0,!0));mf(h,og,10,d)}a=a.h.clone();h=Date.now().toString();a=af(a,4,He(h));b=b.slice();b=nf(a,zg,3,b);e&&(a=new Uf,e=af(a,13,Ae(e)),a=new Vf,e=mf(a,Uf,2,e),
a=new yg,e=mf(a,Vf,1,e),e=tf(e,2,9),mf(b,yg,18,e));c&&af(b,14,He(c));return b}
;var Hg=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function Ig(a){this.h=this.i=this.j=a}
Ig.prototype.reset=function(){this.h=this.i=this.j};
Ig.prototype.getValue=function(){return this.i};function Jg(a){this.F=L(a,8)}
w(Jg,M);var Kg=xf(Jg);function wf(a){this.F=L(a)}
w(wf,M);var Lg=new vf;function Mg(a){H.call(this);var b=this;this.componentId="";this.h=[];this.Qa="";this.pageId=null;this.eb=this.ma=-1;this.G=this.experimentIds=null;this.D=this.o=0;this.U=null;this.Z=this.ha=0;this.Kb=1;this.timeoutMillis=0;this.xa=!1;this.logSource=a.logSource;this.ib=a.ib||function(){};
this.j=new Bg(a.logSource,a.Wa);this.network=a.network||null;this.ob=a.ob||null;this.bufferSize=1E3;this.P=a.zf||null;this.sessionIndex=a.sessionIndex||null;this.Qb=a.Qb||!1;this.logger=null;this.withCredentials=!a.qd;this.Wa=a.Wa||!1;this.Y=!this.Wa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Pa=typeof URLSearchParams!=="undefined"&&!!(new URL(Ng())).searchParams&&!!(new URL(Ng())).searchParams.set;var c=tf(new xg,1,1);Cg(this.j,c);this.u=new Ig(1E4);a=Og(this,a.ld);
this.i=new Tf(this.u.getValue(),a);this.Fa=new Tf(6E5,a);this.Qb||this.Fa.start();this.Wa||(document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"){Pg(b);var d;(d=b.U)==null||d.flush()}}),document.addEventListener("pagehide",function(){Pg(b);
var d;(d=b.U)==null||d.flush()}))}
w(Mg,H);function Og(a,b){return a.Pa?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
Mg.prototype.ba=function(){Pg(this);this.i.stop();this.Fa.stop();H.prototype.ba.call(this)};
function Qg(a){a.P||(a.P=Ng());try{return(new URL(a.P)).toString()}catch(b){return(new URL(a.P,window.location.origin)).toString()}}
function Rg(a,b,c){a.U&&a.U.kb(b,c)}
Mg.prototype.log=function(a){Rg(this,2,1);if(this.Pa){a=a.clone();var b=this.Kb++;a=af(a,21,He(b));this.componentId&&rf(a,26,this.componentId);b=a;if(of(b)==null){var c=Date.now();c=Number.isFinite(c)?c.toString():"0";af(b,1,He(c))}Je(Ze(b,15))==null&&af(b,15,He((new Date).getTimezoneOffset()*60));this.experimentIds&&(c=this.experimentIds.clone(),mf(b,Sf,16,c));Rg(this,1,1);b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b,Rg(this,3,b));this.h.push(a);this.Qb||this.i.enabled||this.i.start()}};
Mg.prototype.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.xa&&this.Y)this.j.i=3,Sg(this);else{var d=Date.now();if(this.eb>d&&this.ma<d)b&&b("throttled");else{this.network&&(typeof this.network.oc==="function"?Eg(this.j,this.network.oc()):this.j.i=0);var e=this.h.length,f=Gg(this.j,this.h,this.o,this.D,this.ob,this.ha,this.Z),g=this.ib();if(g&&this.Qa===g)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=f.serialize();var h;this.G&&this.G.isSupported(d.length)&&
(h=this.G.compress(d));var k=Tg(this,d,g),l=function(r){c.u.reset();c.i.setInterval(c.u.getValue());if(r){var t=null;try{var v=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));t=Kg(v)}catch(G){}if(t){r=Number;var x="-1";x=x===void 0?"0":x;var z;v=(z=of(t))!=null?z:x;z=r(v);z>0&&(c.ma=Date.now(),c.eb=c.ma+z);t=Lg.ctor?Lg.h(t,Lg.ctor,175237375):Lg.h(t,175237375,null);if(t=t===null?void 0:t)t=Bc(t,1,-1),t!==-1&&(c.u=new Ig(t<1?1:t),c.i.setInterval(c.u.getValue()))}}a&&a();c.D=0},m=function(r,t){var v=
zc(f,zg,3);
var x;var z=(x=Je(Ze(f,14)))!=null?x:void 0;x=c.u;x.h=Math.min(3E5,x.h*2);x.i=Math.min(3E5,x.h+Math.round(.1*(Math.random()-.5)*2*x.h));c.i.setInterval(c.u.getValue());r===401&&g&&(c.Qa=g);z&&(c.o+=z);t===void 0&&(t=c.isRetryable(r));t&&(c.h=v.concat(c.h),c.Qb||c.i.enabled||c.i.start());Rg(c,7,1);b&&b("net-send-failed",r);++c.D},n=function(){c.network&&c.network.send(k,l,m)};
h?h.then(function(r){Rg(c,5,e);k.Dc["Content-Encoding"]="gzip";k.Dc["Content-Type"]="application/binary";k.body=r;k.ce=2;n()},function(){Rg(c,6,e);
n()}):n()}}}};
function Tg(a,b,c){c=c===void 0?a.ib():c;var d=d===void 0?a.withCredentials:d;var e={},f=new URL(Qg(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,ce:1,Dc:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function Pg(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function Sg(a){Ug(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.Y=!1);return d})}
function Ug(a,b){if(a.h.length!==0){var c=new URL(Qg(a));c.searchParams.delete("format");var d=a.ib();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=Gg(a.j,e,a.o,a.D,a.ob,a.ha,a.Z);if(!b(c.toString(),f)){++a.D;break}a.o=0;a.D=0;a.ha=0;a.Z=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
Mg.prototype.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function Ng(){return"https://play.google.com/log?format=json&hasfast=true"}
;function Vg(){this.Wd=typeof AbortController!=="undefined"}
Vg.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,r,t;return B(function(v){switch(v.h){case 1:return f=(e=d.Wd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,ya(v,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.Dc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),v.yield(fetch(a.url,g),5);case 5:h=v.i;if(h.status!==200){(k=c)==null||k(h.status);v.A(3);break}if((l=b)==null){v.A(7);break}return v.yield(h.text(),8);case 8:l(v.i);case 7:case 3:v.P=[v.j];v.M=0;v.o=0;clearTimeout(f);Ba(v);break;case 2:m=Aa(v);switch((n=m)==null?void 0:n.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}v.A(3)}})};
Vg.prototype.oc=function(){return 4};function Wg(a,b){H.call(this);this.logSource=a;this.sessionIndex=b;this.Ua="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.h=this.ob=null;this.j=!1;this.pageId=null;this.bufferSize=void 0}
w(Wg,H);function Xg(a,b){a.i=b;return a}
function Yg(a,b){a.network=b;return a}
function Zg(a,b){a.h=b}
function $g(a){a.j=!0;return a}
Wg.prototype.qd=function(){this.u=!0;return this};
function ah(a){a.network||(a.network=new Vg);var b=new Mg({logSource:a.logSource,ib:a.ib?a.ib:Qf,sessionIndex:a.sessionIndex,zf:a.Ua,Wa:a.o,Qb:!1,qd:a.u,ld:a.ld,network:a.network});tc(a,b);if(a.i){var c=a.i,d=Dg(b.j);rf(d,7,c)}b.G=new Rf;a.componentId&&(b.componentId=a.componentId);a.ob&&(b.ob=a.ob);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new Sf),c=b.experimentIds,d=d.serialize(),rf(c,4,d)):b.experimentIds&&af(b.experimentIds,4));a.j&&(b.xa=b.Y);Fg(b.j);a.bufferSize&&
(b.bufferSize=a.bufferSize);a.network.Yb&&a.network.Yb(a.logSource);a.network.nf&&a.network.nf(b);return b}
;function bh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;H.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new Wg(a,"0"),a.componentId=b,tc(this,a),c!==""&&(a.Ua=c),d&&(a.o=!0),e&&Xg(a,e),g&&Yg(a,g),b=ah(a));this.h=b}
w(bh,H);
bh.prototype.flush=function(a){var b=a||[];if(b.length){a=new Gf;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new Ff;f=rf(f,1,e.i);var g=ch(e);f=df(f,g,Ke);g=[];var h=[];for(var k=y(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Kc(l)||[],r=[],t=0;t<n.length;t++){var v=n[t],x=v&&v.h;v=new Cf;switch(m){case 3:x=Number(x);Number.isFinite(x)&&gf(v,1,Df,He(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);gf(v,2,Df,x)}r.push(v)}m=r;for(n=0;n<m.length;n++){r=m[n];t=new Ef;r=mf(t,Cf,2,r);t=l;v=[];x=dh(e);for(var z=0;z<x.length;z++){var G=x[z],K=t[z],ba=new Af;switch(G){case 3:gf(ba,1,Bf,Le(String(K)));break;case 2:G=Number(K);Number.isFinite(G)&&gf(ba,2,Bf,Ae(G));break;case 1:gf(ba,3,Bf,we(K==="true"))}v.push(ba)}nf(r,Af,1,v);g.push(r)}}nf(f,Ef,4,g);c.push(f);e.clear()}nf(a,Ff,1,c);b=this.h;if(a instanceof zg)b.log(a);else try{var ca=new zg,Na=a.serialize();var Kb=rf(ca,8,Na);b.log(Kb)}catch(ja){Rg(b,
4,1)}this.h.flush()}};function gh(a){this.h=a}
;function hh(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function dh(a){return a.fields.map(function(b){return b.fieldType})}
function ch(a){return a.fields.map(function(b){return b.fieldName})}
p=hh.prototype;p.Xd=function(a){var b=C.apply(1,arguments),c=this.Kc(b);c?c.push(new gh(a)):this.Id(a,b)};
p.Id=function(a){var b=this.kd(C.apply(1,arguments));this.h.set(b,[new gh(a)])};
p.Kc=function(){var a=this.kd(C.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
p.we=function(){var a=this.Kc(C.apply(0,arguments));return a&&a.length?a[0]:void 0};
p.clear=function(){this.h.clear()};
p.kd=function(){var a=C.apply(0,arguments);return a?a.join(","):"key"};function ih(a,b){hh.call(this,a,3,b)}
w(ih,hh);ih.prototype.j=function(a){var b=C.apply(1,arguments),c=0,d=this.we(b);d&&(c=d.h);this.Id(c+a,b)};function jh(a,b){hh.call(this,a,2,b)}
w(jh,hh);jh.prototype.record=function(a){this.Xd(a,C.apply(1,arguments))};function kh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
kh.prototype.stopPropagation=function(){this.j=!0};
kh.prototype.preventDefault=function(){this.defaultPrevented=!0};function lh(a,b){kh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
ab(lh,kh);
lh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&lh.Aa.preventDefault.call(this)};
lh.prototype.stopPropagation=function(){lh.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
lh.prototype.preventDefault=function(){lh.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var mh="closure_listenable_"+(Math.random()*1E6|0);var nh=0;function oh(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.qc=e;this.key=++nh;this.Xb=this.hc=!1}
function ph(a){a.Xb=!0;a.listener=null;a.proxy=null;a.src=null;a.qc=null}
;function qh(a){this.src=a;this.listeners={};this.h=0}
qh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=rh(a,b,d,e);g>-1?(b=a[g],c||(b.hc=!1)):(b=new oh(b,this.src,f,!!d,e),b.hc=c,a.push(b));return b};
qh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=rh(e,b,c,d);return b>-1?(ph(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function sh(a,b){var c=b.type;c in a.listeners&&Rb(a.listeners[c],b)&&(ph(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function rh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Xb&&f.listener==b&&f.capture==!!c&&f.qc==d)return e}return-1}
;var th="closure_lm_"+(Math.random()*1E6|0),uh={},vh=0;function wh(a,b,c,d,e){if(d&&d.once)xh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)wh(a,b[f],c,d,e);else c=yh(c),a&&a[mh]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):zh(a,b,c,!1,d,e)}
function zh(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Ah(a);h||(a[th]=h=new qh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Bh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Hg||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ch(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");vh++}}
function Bh(){function a(c){return b.call(a.src,a.listener,c)}
var b=Dh;return a}
function xh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)xh(a,b[f],c,d,e);else c=yh(c),a&&a[mh]?Eh(a,b,c,Ra(d)?!!d.capture:!!d,e):zh(a,b,c,!0,d,e)}
function Fh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Fh(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=yh(c),a&&a[mh])?a.i.remove(String(b),c,d,e):a&&(a=Ah(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=rh(b,c,d,e)),(c=a>-1?b[a]:null)&&Gh(c))}
function Gh(a){if(typeof a!=="number"&&a&&!a.Xb){var b=a.src;if(b&&b[mh])sh(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ch(c),d):b.addListener&&b.removeListener&&b.removeListener(d);vh--;(c=Ah(b))?(sh(c,a),c.h==0&&(c.src=null,b[th]=null)):ph(a)}}}
function Ch(a){return a in uh?uh[a]:uh[a]="on"+a}
function Dh(a,b){if(a.Xb)a=!0;else{b=new lh(b,this);var c=a.listener,d=a.qc||a.src;a.hc&&Gh(a);a=c.call(d,b)}return a}
function Ah(a){a=a[th];return a instanceof qh?a:null}
var Hh="__closure_events_fn_"+(Math.random()*1E9>>>0);function yh(a){if(typeof a==="function")return a;a[Hh]||(a[Hh]=function(b){return a.handleEvent(b)});
return a[Hh]}
;function Ih(){H.call(this);this.i=new qh(this);this.xa=this;this.Z=null}
ab(Ih,H);Ih.prototype[mh]=!0;p=Ih.prototype;p.addEventListener=function(a,b,c,d){wh(this,a,b,c,d)};
p.removeEventListener=function(a,b,c,d){Fh(this,a,b,c,d)};
function Jh(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.xa;c=b.type||b;typeof b==="string"?b=new kh(b,a):b instanceof kh?b.target=b.target||a:(e=b,b=new kh(c,a),hg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=Kh(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Kh(g,c,!0,b)&&e,b.j||(e=Kh(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Kh(g,c,!1,b)&&e}
p.ba=function(){Ih.Aa.ba.call(this);this.removeAllListeners();this.Z=null};
p.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Eh(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
p.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,ph(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Kh(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Xb&&g.capture==c){var h=g.listener,k=g.qc||g.src;g.hc&&sh(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var Lh=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function Mh(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
Mh.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Nh(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function Oh(){this.i=this.h=null}
Oh.prototype.add=function(a,b){var c=Ph.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Oh.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Ph=new Mh(function(){return new Qh},function(a){return a.reset()});
function Qh(){this.next=this.scope=this.h=null}
Qh.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Qh.prototype.reset=function(){this.next=this.scope=this.h=null};var Rh,Sh=!1,Th=new Oh;function Uh(a,b){Rh||Vh();Sh||(Rh(),Sh=!0);Th.add(a,b)}
function Vh(){var a=Promise.resolve(void 0);Rh=function(){a.then(Wh)}}
function Wh(){for(var a;a=Th.remove();){try{a.h.call(a.scope)}catch(b){Pc(b)}Nh(Ph,a)}Sh=!1}
;function Xh(){}
function Yh(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Zh(a){this.X=0;this.ab=void 0;this.vb=this.Sa=this.parent_=null;this.pc=this.Jc=!1;if(a!=Xh)try{var b=this;a.call(void 0,function(c){$h(b,2,c)},function(c){$h(b,3,c)})}catch(c){$h(this,3,c)}}
function ai(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
ai.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var bi=new Mh(function(){return new ai},function(a){a.reset()});
function ci(a,b,c){var d=bi.get();d.i=a;d.h=b;d.context=c;return d}
function di(a){return new Zh(function(b,c){c(a)})}
Zh.prototype.then=function(a,b,c){return ei(this,Lh(typeof a==="function"?a:null),Lh(typeof b==="function"?b:null),c)};
Zh.prototype.$goog_Thenable=!0;function fi(a,b,c,d){gi(a,ci(b||Xh,c||null,d))}
p=Zh.prototype;p.finally=function(a){var b=this;a=Lh(a);return new Promise(function(c,d){fi(b,function(e){a();c(e)},function(e){a();
d(e)})})};
p.Fc=function(a,b){return ei(this,null,Lh(a),b)};
p.catch=Zh.prototype.Fc;p.cancel=function(a){if(this.X==0){var b=new hi(a);Uh(function(){ii(this,b)},this)}};
function ii(a,b){if(a.X==0)if(a.parent_){var c=a.parent_;if(c.Sa){for(var d=0,e=null,f=null,g=c.Sa;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.X==0&&d==1?ii(c,b):(f?(d=f,d.next==c.vb&&(c.vb=d),d.next=d.next.next):ji(c),ki(c,e,3,b)))}a.parent_=null}else $h(a,3,b)}
function gi(a,b){a.Sa||a.X!=2&&a.X!=3||li(a);a.vb?a.vb.next=b:a.Sa=b;a.vb=b}
function ei(a,b,c,d){var e=ci(null,null,null);e.child=new Zh(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof hi?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;gi(a,e);return e.child}
p.xf=function(a){this.X=0;$h(this,2,a)};
p.yf=function(a){this.X=0;$h(this,3,a)};
function $h(a,b,c){if(a.X==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.X=1;a:{var d=c,e=a.xf,f=a.yf;if(d instanceof Zh){fi(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if(typeof k==="function"){mi(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.ab=c,a.X=b,a.parent_=null,li(a),b!=3||c instanceof hi||ni(a,c))}}
function mi(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function li(a){a.Jc||(a.Jc=!0,Uh(a.qe,a))}
function ji(a){var b=null;a.Sa&&(b=a.Sa,a.Sa=b.next,b.next=null);a.Sa||(a.vb=null);return b}
p.qe=function(){for(var a;a=ji(this);)ki(this,a,this.X,this.ab);this.Jc=!1};
function ki(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.pc;a=a.parent_)a.pc=!1;if(b.child)b.child.parent_=null,oi(b,c,d);else try{b.j?b.i.call(b.context):oi(b,c,d)}catch(e){pi.call(null,e)}Nh(bi,b)}
function oi(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ni(a,b){a.pc=!0;Uh(function(){a.pc&&pi.call(null,b)})}
var pi=Pc;function hi(a){bb.call(this,a)}
ab(hi,bb);hi.prototype.name="cancel";function qi(a,b){Ih.call(this);this.j=a||1;this.h=b||D;this.o=Xa(this.tf,this);this.u=$a()}
ab(qi,Ih);p=qi.prototype;p.enabled=!1;p.Ea=null;p.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
p.tf=function(){if(this.enabled){var a=$a()-this.u;a>0&&a<this.j*.8?this.Ea=this.h.setTimeout(this.o,this.j-a):(this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null),Jh(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
p.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.h.setTimeout(this.o,this.j),this.u=$a())};
p.stop=function(){this.enabled=!1;this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null)};
p.ba=function(){qi.Aa.ba.call(this);this.stop();delete this.h};function ri(a){H.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.D=new Set;this.flushInterval=3E4;this.h=new qi(this.flushInterval);this.h.listen("tick",this.ac,!1,this);tc(this,this.h)}
w(ri,H);p=ri.prototype;p.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function si(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.ac()}
p.ac=function(){var a=this.i.values();a=[].concat(A(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);ti(a);this.j=0;this.h.enabled&&this.h.stop()};
p.Mb=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new ih(a,b))};
p.Hc=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new jh(a,b))};
function ui(a,b){return a.D.has(b)?void 0:a.i.get(b)}
p.Jb=function(a){this.Vd(a,1,C.apply(1,arguments))};
p.Vd=function(a,b){var c=C.apply(2,arguments),d=ui(this,a);d&&d instanceof ih&&(d.j(b,c),si(this))};
p.record=function(a,b){var c=C.apply(2,arguments),d=ui(this,a);d&&d instanceof jh&&(d.record(b,c),si(this))};
function ti(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function vi(){}
vi.prototype.serialize=function(a){var b=[];wi(this,a,b);return b.join("")};
function wi(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),wi(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),xi(d,c),c.push(":"),wi(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":xi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var yi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},zi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function xi(a,b){b.push('"',a.replace(zi,function(c){var d=yi[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),yi[c]=d);return d}),'"')}
;function Ai(){Ih.call(this);this.headers=new Map;this.h=!1;this.J=null;this.o=this.Y="";this.j=this.U=this.D=this.P=!1;this.G=0;this.u=null;this.ma="";this.ha=!1}
ab(Ai,Ih);var Bi=/^https?$/i,Ci=["POST","PUT"],Di=[];function Ei(a,b,c,d,e,f,g){var h=new Ai;Di.push(h);b&&h.listen("complete",b);Eh(h,"ready",h.ee);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
p=Ai.prototype;p.ee=function(){this.dispose();Rb(Di,this)};
p.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.P=!1;this.h=!0;this.J=new XMLHttpRequest;this.J.onreadystatechange=Lh(Xa(this.Bd,this));try{this.getStatus(),this.U=!0,this.J.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();Fi(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=y(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=D.FormData&&a instanceof D.FormData;!(Lb(Ci,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=y(c);for(d=b.next();!d.done;d=b.next())c=y(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.ma&&(this.J.responseType=this.ma);"withCredentials"in this.J&&this.J.withCredentials!==this.ha&&(this.J.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.wf.bind(this),this.G)),
this.getStatus(),this.D=!0,this.J.send(a),this.D=!1}catch(g){this.getStatus(),Fi(this,g)}};
p.wf=function(){typeof Ka!="undefined"&&this.J&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),Jh(this,"timeout"),this.abort(8))};
function Fi(a,b){a.h=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.o=b;Gi(a);Hi(a)}
function Gi(a){a.P||(a.P=!0,Jh(a,"complete"),Jh(a,"error"))}
p.abort=function(){this.J&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.J.abort(),this.j=!1,Jh(this,"complete"),Jh(this,"abort"),Hi(this))};
p.ba=function(){this.J&&(this.h&&(this.h=!1,this.j=!0,this.J.abort(),this.j=!1),Hi(this,!0));Ai.Aa.ba.call(this)};
p.Bd=function(){this.ea||(this.U||this.D||this.j?Ii(this):this.Ne())};
p.Ne=function(){Ii(this)};
function Ii(a){if(a.h&&typeof Ka!="undefined")if(a.D&&(a.J?a.J.readyState:0)==4)setTimeout(a.Bd.bind(a),0);else if(Jh(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(Ji(a))Jh(a,"complete"),Jh(a,"success");else{try{var b=(a.J?a.J.readyState:0)>2?a.J.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Gi(a)}}finally{Hi(a)}}}
function Hi(a,b){if(a.J){a.u&&(clearTimeout(a.u),a.u=null);var c=a.J;a.J=null;b||Jh(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
p.isActive=function(){return!!this.J};
p.isComplete=function(){return(this.J?this.J.readyState:0)==4};
function Ji(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=ac(1,String(a.Y)),!a&&D.self&&D.self.location&&(a=D.self.location.protocol.slice(0,-1)),b=!Bi.test(a?a.toLowerCase():"");c=b}return c}
p.getStatus=function(){try{return(this.J?this.J.readyState:0)>2?this.J.status:-1}catch(a){return-1}};
p.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function Ki(){}
Ki.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Ei(a.url,function(d){d=d.target;if(Ji(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Dc,a.timeoutMillis,a.withCredentials)};
Ki.prototype.oc=function(){return 1};function Li(a,b){this.logger=a;this.event=b;this.startTime=Mi()}
Li.prototype.done=function(){this.logger.Ub(this.event,Mi()-this.startTime)};
function Ni(){Ec.apply(this,arguments)}
w(Ni,Ec);function Oi(a,b){var c=Mi();b=b();a.Ub("n",Mi()-c);return b}
function Pi(){Ni.apply(this,arguments)}
w(Pi,Ni);p=Pi.prototype;p.Oc=function(){};
p.Cb=function(){};
p.Ub=function(){};
p.Ha=function(){};
p.Cc=function(){};
p.Nd=function(){};
function Qi(a){return{rf:new Hc(a),errorCount:new Lc(a),eventCount:new Jc(a),pe:new Kc(a),ai:new Ic(a),ci:new Mc(a),vh:new Nc(a),bi:new Oc(a)}}
function Ri(a,b,c,d){a=$g(Yg(Xg(new Wg(1828,"0"),a),new Ki));b.length&&Zg(a,zf(new yf,b));d!==void 0&&(a.Ua=d);var e=new bh(1828,"","",!1,"",ah(a));tc(e,a);var f=new ri({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.ac()}finally{e.dispose()}})});
f.o=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function Si(a,b){H.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
w(Si,H);function Ti(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-Mi());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=Mi(),a.timer=void 0}},b)}}
function Ui(a,b,c){Ni.call(this);this.metrics=a;this.Da=b;this.qb=c}
w(Ui,Ni);Ui.prototype.Oc=function(a){this.metrics.rf.record(a,this.Da)};
Ui.prototype.Cb=function(a){this.metrics.eventCount.kb(a,this.Da)};
Ui.prototype.Ub=function(a,b){this.metrics.pe.record(b,a,this.qb,this.Da)};
Ui.prototype.Ha=function(a){this.metrics.errorCount.kb(a,this.qb,this.Da)};
function Vi(a,b){b=b===void 0?[]:b;var c={Da:a.Da||"_",qb:a.qb||"",nc:a.nc||[],vc:a.vc|0,Ua:a.Ua,wc:a.wc||function(){},
Ib:a.Ib||function(e,f){return Ri(e,f,c.wc,c.Ua)}};
b=c.Ib("47",c.nc.concat(b));Ui.call(this,Qi(b),c.Da,c.qb);var d=this;this.options=c;this.service=b;this.i=!a.Ib;this.h=new Si(function(){return void d.service.ac()},c.vc);
this.addOnDisposeCallback(function(){d.h.dispose();d.i&&d.service.dispose()})}
w(Vi,Ui);Vi.prototype.Nd=function(a){var b=this;this.h.dispose();this.i&&this.service.dispose();this.service=this.options.Ib("47",this.options.nc.concat(a));this.h=new Si(function(){return void b.service.ac()},this.options.vc);
this.metrics=Qi(this.service)};
Vi.prototype.Cc=function(){Ti(this.h)};
function Mi(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function Wi(a){this.F=L(a)}
w(Wi,M);function Xi(a){this.F=L(a)}
w(Xi,M);function Yi(a){this.F=L(a,0,"bfkj")}
w(Yi,M);var Zi=function(a){return Ud(function(b){return b instanceof a&&!((b.F[J]|0)&2)})}(Yi);function Ac(a){this.F=L(a)}
w(Ac,M);function $i(a){this.F=L(a)}
w($i,M);var aj=xf($i);function bj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function cj(a,b,c){if(a.disable)return new Pi;b=b?yc(b):[];if(c)return c.Nd(b),c.share();a={Da:a.Da,qb:a.qb,nc:a.Bh,vc:a.Lh,Ua:a.Ua,wc:a.wc,Ib:a.Ib};c=b;c=c===void 0?[]:c;return new Vi(a,c)}
function dj(a){function b(v,x,z,G){Promise.resolve().then(function(){k.done();h.Cc();h.dispose();g.resolve({Zd:v,qf:x,Re:z,xh:G})})}
function c(v,x,z,G){if(!d.logger.ea){var K="k";x?K="h":z&&(K="u");K!=="k"?G!==0&&(d.logger.Cb(K),d.logger.Ub(K,v)):d.i<=0?(d.logger.Cb(K),d.logger.Ub(K,v),d.i=Math.floor(Math.random()*200)):d.i--}}
H.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new $i;if("challenge"in a&&Zi(a.challenge)){var e=pf(a.challenge,4);var f=pf(a.challenge,5);pf(a.challenge,7)&&(this.h=aj(pf(a.challenge,7)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var v,x,z;return B(function(G){if(G.h==1)return G.yield(d.j,2);v=G.i;x=v.qf;(z=x)==null||z();G.h=0})});
this.logger=cj(a.zd||{},this.h,a.yh);tc(this,this.logger);var g=new bj;this.j=g.promise;this.logger.Cb("t");var h=this.logger.share(),k=new Li(h,"t");if(!D[f])throw this.logger.Ha(25),Error("EGOU");if(!D[f].a)throw this.logger.Ha(26),Error("ELIU");try{var l=D[f].a;f=[];for(var m=[],n=yc(this.h),r=0;r<n.length;r++)f.push(n[r]),m.push(1);var t=Cc(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2);this.u=y(l(e,b,!0,a.Zh,c,[f,m],pf(this.h,5))).next().value;this.Zc=g.promise.then(function(){})}catch(v){throw this.logger.Ha(28),
v;
}}
w(dj,H);dj.prototype.snapshot=function(a){if(this.ea)throw Error("Already disposed");this.logger.Cb("n");var b=this.logger.share();return this.j.then(function(c){var d=c.Zd;return new Promise(function(e){var f=new Li(b,"n");d(function(g){f.done();b.Oc(g.length);b.Cc();b.dispose();e(g)},[a.wb,
a.cd,a.Bf,a.dd])})})};
dj.prototype.ed=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.Cb("n");var c=Oi(this.logger,function(){return b.u([a.wb,a.cd,a.Bf,a.dd])});
this.logger.Oc(c.length);this.logger.Cc();return c};
dj.prototype.o=function(a){this.j.then(function(b){var c;(c=b.Re)==null||c(a)})};function ej(a){if(!a)return null;a=Me(Ze(a,4));return a===null||a===void 0?null:ib(a)}
;function fj(){this.promises={};this.h=null}
function gj(){fj.instance||(fj.instance=new fj);return fj.instance}
function hj(a,b){return ij(a,lf(b,Wi,1),lf(b,Xi,2),pf(b,3))}
function ij(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return jj(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){jj(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function jj(a,b){return b?kj(b):a?lj(a):Promise.resolve()}
function kj(a){return new Promise(function(b,c){var d=lg("SCRIPT"),e=ej(a);Eb(d,e);d.onload=function(){mg(d);b()};
d.onerror=function(){mg(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function lj(a){return new Promise(function(b){var c=lg("SCRIPT");if(a){var d=Me(Ze(a,6));d=d===null||d===void 0?null:Bb(d)}else d=null;c.textContent=Cb(d);Db(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);mg(c);b()})}
;var mj=window;function nj(a){var b=oj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function pj(){var a=[];nj(function(b){a.push(b)});
return a}
var oj={Cf:"allow-forms",Df:"allow-modals",Ef:"allow-orientation-lock",Ff:"allow-pointer-lock",Gf:"allow-popups",Hf:"allow-popups-to-escape-sandbox",If:"allow-presentation",Jf:"allow-same-origin",Kf:"allow-scripts",Lf:"allow-top-navigation",Mf:"allow-top-navigation-by-user-activation"},qj=Yh(function(){return pj()});
function rj(){var a=sj(),b={};Mb(qj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function sj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function tj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var uj=(new Date).getTime();function vj(a){Ih.call(this);var b=this;this.D=this.j=0;this.Ca=a!=null?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return e.yield(wj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.D||xj(this)}
w(vj,Ih);function yj(){var a=zj;vj.instance||(vj.instance=new vj(a));return vj.instance}
vj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.qa(this.D);delete vj.instance};
vj.prototype.ta=function(){return this.h};
function xj(a){a.D=a.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.A(3):c.yield(wj(a),3):c.yield(wj(a),3);xj(a);c.h=0})},3E4)}
function wj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.j=a.Ca.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.M=0;h.o=0;a.u=void 0;a.j&&(a.Ca.qa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?Jh(a,"networkstatus-online"):Jh(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.A(3)}})})}
;function Aj(){this.data=[];this.h=-1}
Aj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Aj.prototype.get=function(a){return!!this.data[a]};
function Bj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Cj(){this.blockSize=-1}
;function Dj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.M=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
ab(Dj,Cj);Dj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Ej(a,b,c){c||(c=0);var d=a.M;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Dj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)Ej(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Ej(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Ej(this,e);f=0;break}}this.i=f;this.o+=b}};
Dj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;Ej(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Fj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Gj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Hj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Fj(a).match(/\S+/g)||[],b=Lb(a,b)>=0);return b}
function Ij(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Hj(a,"inverted-hdpi")&&Gj(a,Array.prototype.filter.call(a.classList?a.classList:Fj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Jj(){}
Jj.prototype.next=function(){return Kj};
var Kj={done:!0,value:void 0};Jj.prototype.tb=function(){return this};function Lj(a){if(a instanceof Mj||a instanceof Nj||a instanceof Oj)return a;if(typeof a.next=="function")return new Mj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Mj(function(){return a[Symbol.iterator]()});
if(typeof a.tb=="function")return new Mj(function(){return a.tb()});
throw Error("Not an iterator or iterable.");}
function Mj(a){this.h=a}
Mj.prototype.tb=function(){return new Nj(this.h())};
Mj.prototype[Symbol.iterator]=function(){return new Oj(this.h())};
Mj.prototype.i=function(){return new Oj(this.h())};
function Nj(a){this.h=a}
w(Nj,Jj);Nj.prototype.next=function(){return this.h.next()};
Nj.prototype[Symbol.iterator]=function(){return new Oj(this.h)};
Nj.prototype.i=function(){return new Oj(this.h)};
function Oj(a){Mj.call(this,function(){return a});
this.j=a}
w(Oj,Mj);Oj.prototype.next=function(){return this.j.next()};function N(a){H.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.D=!!a}
ab(N,H);p=N.prototype;p.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
p.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.dc(a)}return!1};
p.dc=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Rb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.sb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.D)for(f=0;f<c.length;f++)e=c[f],Pj(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.ea;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.dc(c)}}return f!=0}return!1};
function Pj(a,b,c){Uh(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.dc,this),delete this.i[a])}else this.h.length=0,this.i={}};
p.ba=function(){N.Aa.ba.call(this);this.clear();this.j.length=0};function Qj(a){this.h=a}
Qj.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new vi).serialize(b))};
Qj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Qj.prototype.remove=function(a){this.h.remove(a)};function Rj(a){this.h=a}
ab(Rj,Qj);function Sj(a){this.data=a}
function Tj(a){return a===void 0||a instanceof Sj?a:new Sj(a)}
Rj.prototype.set=function(a,b){Rj.Aa.set.call(this,a,Tj(b))};
Rj.prototype.i=function(a){a=Rj.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Rj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Uj(a){this.h=a}
ab(Uj,Rj);Uj.prototype.set=function(a,b,c){if(b=Tj(b)){if(c){if(c<$a()){Uj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=$a()}Uj.Aa.set.call(this,a,b)};
Uj.prototype.i=function(a){var b=Uj.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<$a()||c&&c>$a())Uj.prototype.remove.call(this,a);else return b}};function Vj(){}
;function Wj(){}
ab(Wj,Vj);Wj.prototype[Symbol.iterator]=function(){return Lj(this.tb(!0)).i()};
Wj.prototype.clear=function(){var a=Array.from(this);a=y(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Xj(a){this.h=a;this.i=null}
ab(Xj,Wj);p=Xj.prototype;p.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
p.set=function(a,b){Yj(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){Yj(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){Yj(this);this.h.removeItem(a)};
p.tb=function(a){Yj(this);var b=0,c=this.h,d=new Jj;d.next=function(){if(b>=c.length)return Kj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
p.clear=function(){Yj(this);this.h.clear()};
p.key=function(a){Yj(this);return this.h.key(a)};
function Yj(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Pc(Error("Storage mechanism: Storage unavailable"))}
;function Zj(){var a=null;try{a=D.localStorage||null}catch(b){}Xj.call(this,a)}
ab(Zj,Xj);function ak(a,b){this.i=a;this.h=b+"::"}
ab(ak,Wj);ak.prototype.set=function(a,b){this.i.set(this.h+a,b)};
ak.prototype.get=function(a){return this.i.get(this.h+a)};
ak.prototype.remove=function(a){this.i.remove(this.h+a)};
ak.prototype.tb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Jj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},bk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.bd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var ck={ub:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
sd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},dk={ub:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
sd:function(a){return[].concat.apply([],a)}};
O.pf=function(){bk?(O.rb=Uint8Array,O.Ja=Uint16Array,O.Ud=Int32Array,O.assign(O,ck)):(O.rb=Array,O.Ja=Array,O.Ud=Array,O.assign(O,dk))};
O.pf();var ek=!0;try{new Uint8Array(1)}catch(a){ek=!1}
function fk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new O.rb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var gk={};gk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var hk={},ik,jk=[],kk=0;kk<256;kk++){ik=kk;for(var lk=0;lk<8;lk++)ik=ik&1?3988292384^ik>>>1:ik>>>1;jk[kk]=ik}hk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^jk[(a^b[d])&255];return a^-1};var mk={};mk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function nk(a){for(var b=a.length;--b>=0;)a[b]=0}
var ok=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],pk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],qk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],rk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],sk=Array(576);nk(sk);var tk=Array(60);nk(tk);var uk=Array(512);nk(uk);var vk=Array(256);nk(vk);var wk=Array(29);nk(wk);var xk=Array(30);nk(xk);function yk(a,b,c,d,e){this.Kd=a;this.te=b;this.se=c;this.le=d;this.Le=e;this.vd=a&&a.length}
var zk,Ak,Bk;function Ck(a,b){this.rd=a;this.Eb=0;this.bb=b}
function Dk(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function Ek(a,b,c){a.ia>16-c?(a.oa|=b<<a.ia&65535,Dk(a,a.oa),a.oa=b>>16-a.ia,a.ia+=c-16):(a.oa|=b<<a.ia&65535,a.ia+=c)}
function Fk(a,b,c){Ek(a,c[b*2],c[b*2+1])}
function Gk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Hk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Gk(d[e]++,e))}
function Ik(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.gb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ra[512]=1;a.Oa=a.Hb=0;a.ya=a.matches=0}
function Jk(a){a.ia>8?Dk(a,a.oa):a.ia>0&&(a.aa[a.pending++]=a.oa);a.oa=0;a.ia=0}
function Kk(a,b,c){Jk(a);Dk(a,c);Dk(a,~c);O.ub(a.aa,a.window,b,c,a.pending);a.pending+=c}
function Lk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Mk(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Na;){e<a.Na&&Lk(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Lk(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Nk(a,b,c){var d=0;if(a.ya!==0){do{var e=a.aa[a.Pb+d*2]<<8|a.aa[a.Pb+d*2+1];var f=a.aa[a.Nc+d];d++;if(e===0)Fk(a,f,b);else{var g=vk[f];Fk(a,g+256+1,b);var h=ok[g];h!==0&&(f-=wk[g],Ek(a,f,h));e--;g=e<256?uk[e]:uk[256+(e>>>7)];Fk(a,g,c);h=pk[g];h!==0&&(e-=xk[g],Ek(a,e,h))}}while(d<a.ya)}Fk(a,256,b)}
function Ok(a,b){var c=b.rd,d=b.bb.Kd,e=b.bb.vd,f=b.bb.le,g,h=-1;a.Na=0;a.zb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Na]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Na<2;){var k=a.da[++a.Na]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Oa--;e&&(a.Hb-=d[k*2+1])}b.Eb=h;for(g=a.Na>>1;g>=1;g--)Mk(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Na--],Mk(a,c,1),d=a.da[1],a.da[--a.zb]=g,a.da[--a.zb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,Mk(a,c,1);while(a.Na>=
2);a.da[--a.zb]=a.da[1];g=b.rd;k=b.Eb;d=b.bb.Kd;e=b.bb.vd;f=b.bb.te;var l=b.bb.se,m=b.bb.Le,n,r=0;for(n=0;n<=15;n++)a.Ka[n]=0;g[a.da[a.zb]*2+1]=0;for(b=a.zb+1;b<573;b++){var t=a.da[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,r++);g[t*2+1]=n;if(!(t>k)){a.Ka[n]++;var v=0;t>=l&&(v=f[t-l]);var x=g[t*2];a.Oa+=x*(n+v);e&&(a.Hb+=x*(d[t*2+1]+v))}}if(r!==0){do{for(n=m-1;a.Ka[n]===0;)n--;a.Ka[n]--;a.Ka[n+1]+=2;a.Ka[m]--;r-=2}while(r>0);for(n=m;n!==0;n--)for(t=a.Ka[n];t!==0;)d=a.da[--b],d>k||(g[d*2+1]!==n&&(a.Oa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Hk(c,h,a.Ka)}
function Pk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Qk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Fk(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Fk(a,l,a.ja),g--),Fk(a,16,a.ja),Ek(a,g-3,2)):g<=10?(Fk(a,17,a.ja),Ek(a,g-3,3)):(Fk(a,18,a.ja),Ek(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Rk(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var Sk=!1;function Tk(a,b,c){a.aa[a.Pb+a.ya*2]=b>>>8&255;a.aa[a.Pb+a.ya*2+1]=b&255;a.aa[a.Nc+a.ya]=c&255;a.ya++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(vk[c]+256+1)*2]++,a.gb[(b<256?uk[b]:uk[256+(b>>>7)])*2]++);return a.ya===a.Tb-1}
;function Uk(a,b){a.msg=mk[b];return b}
function Vk(a){for(var b=a.length;--b>=0;)a[b]=0}
function Wk(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(O.ub(a.output,b.aa,b.Wb,c,a.Fb),a.Fb+=c,b.Wb+=c,a.gd+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Wb=0))}
function Xk(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.K.Ic===2&&(a.K.Ic=Rk(a));Ok(a,a.uc);Ok(a,a.kc);Pk(a,a.ra,a.uc.Eb);Pk(a,a.gb,a.kc.Eb);Ok(a,a.nd);for(e=18;e>=3&&a.ja[rk[e]*2+1]===0;e--);a.Oa+=3*(e+1)+5+5+4;var f=a.Oa+3+7>>>3;var g=a.Hb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Ek(a,b?1:0,3),Kk(a,c,d);else if(a.strategy===4||g===f)Ek(a,2+(b?1:0),3),Nk(a,sk,tk);else{Ek(a,4+(b?1:0),3);c=a.uc.Eb+1;d=a.kc.Eb+1;e+=1;Ek(a,c-257,5);Ek(a,d-1,5);Ek(a,e-4,4);for(f=0;f<e;f++)Ek(a,
a.ja[rk[f]*2+1],3);Qk(a,a.ra,c-1);Qk(a,a.gb,d-1);Nk(a,a.ra,a.gb)}Ik(a);b&&Jk(a);a.va=a.v;Wk(a.K)}
function P(a,b){a.aa[a.pending++]=b}
function Yk(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function Zk(a,b){var c=a.yd,d=a.v,e=a.wa,f=a.Ad,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.cb,l=a.Ia,m=a.v+258,n=h[d+e-1],r=h[d+e];a.wa>=a.ud&&(c>>=2);f>a.B&&(f=a.B);do{var t=b;if(h[t+e]===r&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Db=b;e=t;if(t>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function $k(a){var b=a.la,c;do{var d=a.Sd-a.B-a.v;if(a.v>=b+(b-262)){O.ub(a.window,a.window,b,b,0);a.Db-=b;a.v-=b;a.va-=b;var e=c=a.sc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.K.na===0)break;e=a.K;c=a.window;f=a.v+a.B;var g=e.na;g>d&&(g=d);g===0?c=0:(e.na-=g,O.ub(c,e.input,e.nb,g,f),e.state.wrap===1?e.I=gk(e.I,c,g,f):e.state.wrap===2&&(e.I=hk(e.I,c,g,f)),e.nb+=g,e.pb+=g,c=g);a.B+=c;if(a.B+a.sa>=3)for(d=a.v-a.sa,a.R=a.window[d],
a.R=(a.R<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.R=(a.R<<a.Ma^a.window[d+3-1])&a.La,a.Ia[d&a.cb]=a.head[a.R],a.head[a.R]=d,d++,a.sa--,a.B+a.sa<3););}while(a.B<262&&a.K.na!==0)}
function al(a,b){for(var c;;){if(a.B<262){$k(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=Zk(a,c));if(a.T>=3)if(c=Tk(a,a.v-a.Db,a.T-3),a.B-=a.T,a.T<=a.Pc&&a.B>=3){a.T--;do a.v++,a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.R=a.window[a.v],a.R=(a.R<<a.Ma^a.window[a.v+1])&a.La;else c=Tk(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(Xk(a,!1),a.K.S===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(Xk(a,!0),a.K.S===0?3:4):a.ya&&(Xk(a,!1),a.K.S===0)?1:2}
function bl(a,b){for(var c,d;;){if(a.B<262){$k(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);a.wa=a.T;a.Dd=a.Db;a.T=2;c!==0&&a.wa<a.Pc&&a.v-c<=a.la-262&&(a.T=Zk(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.Db>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.B-3;c=Tk(a,a.v-1-a.Dd,a.wa-3);a.B-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);
while(--a.wa!==0);a.lb=0;a.T=2;a.v++;if(c&&(Xk(a,!1),a.K.S===0))return 1}else if(a.lb){if((c=Tk(a,0,a.window[a.v-1]))&&Xk(a,!1),a.v++,a.B--,a.K.S===0)return 1}else a.lb=1,a.v++,a.B--}a.lb&&(Tk(a,0,a.window[a.v-1]),a.lb=0);a.sa=a.v<2?a.v:2;return b===4?(Xk(a,!0),a.K.S===0?3:4):a.ya&&(Xk(a,!1),a.K.S===0)?1:2}
function cl(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){$k(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.T=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.B&&(a.T=a.B)}a.T>=3?(c=Tk(a,1,a.T-3),a.B-=a.T,a.v+=a.T,a.T=0):(c=Tk(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(Xk(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(Xk(a,!0),a.K.S===0?3:4):
a.ya&&(Xk(a,!1),a.K.S===0)?1:2}
function dl(a,b){for(var c;;){if(a.B===0&&($k(a),a.B===0)){if(b===0)return 1;break}a.T=0;c=Tk(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(Xk(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(Xk(a,!0),a.K.S===0?3:4):a.ya&&(Xk(a,!1),a.K.S===0)?1:2}
function el(a,b,c,d,e){this.ye=a;this.Ke=b;this.Me=c;this.Je=d;this.ue=e}
var fl;fl=[new el(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.B<=1){$k(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,Xk(a,!1),a.K.S===0)return 1;if(a.v-a.va>=a.la-262&&(Xk(a,!1),a.K.S===0))return 1}a.sa=0;if(b===4)return Xk(a,!0),a.K.S===0?3:4;a.v>a.va&&Xk(a,!1);return 1}),
new el(4,4,8,4,al),new el(4,5,16,8,al),new el(4,6,32,32,al),new el(4,4,16,16,bl),new el(8,16,32,32,bl),new el(8,16,128,128,bl),new el(8,32,128,256,bl),new el(32,128,258,1024,bl),new el(32,258,258,4096,bl)];
function gl(){this.K=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Wb=this.za=0;this.H=null;this.Ba=0;this.method=8;this.Bb=-1;this.cb=this.jd=this.la=0;this.window=null;this.Sd=0;this.head=this.Ia=null;this.Ad=this.ud=this.strategy=this.level=this.Pc=this.yd=this.wa=this.B=this.Db=this.v=this.lb=this.Dd=this.T=this.va=this.Ma=this.La=this.Lc=this.sc=this.R=0;this.ra=new O.Ja(1146);this.gb=new O.Ja(122);this.ja=new O.Ja(78);Vk(this.ra);Vk(this.gb);Vk(this.ja);this.nd=this.kc=this.uc=
null;this.Ka=new O.Ja(16);this.da=new O.Ja(573);Vk(this.da);this.zb=this.Na=0;this.depth=new O.Ja(573);Vk(this.depth);this.ia=this.oa=this.sa=this.matches=this.Hb=this.Oa=this.Pb=this.ya=this.Tb=this.Nc=0}
function hl(a,b){if(!a||!a.state||b>5||b<0)return a?Uk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.na!==0||c.status===666&&b!==4)return Uk(a,a.S===0?-5:-2);c.K=a;var d=c.Bb;c.Bb=b;if(c.status===42)if(c.wrap===2)a.I=0,P(c,31),P(c,139),P(c,8),c.H?(P(c,(c.H.text?1:0)+(c.H.Va?2:0)+(c.H.extra?4:0)+(c.H.name?8:0)+(c.H.comment?16:0)),P(c,c.H.time&255),P(c,c.H.time>>8&255),P(c,c.H.time>>16&255),P(c,c.H.time>>24&255),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,c.H.os&255),c.H.extra&&c.H.extra.length&&
(P(c,c.H.extra.length&255),P(c,c.H.extra.length>>8&255)),c.H.Va&&(a.I=hk(a.I,c.aa,c.pending,0)),c.Ba=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,3),c.status=113);else{var e=8+(c.jd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;Yk(c,e+(31-e%31));c.v!==0&&(Yk(c,a.I>>>16),Yk(c,a.I&65535));a.I=1}if(c.status===69)if(c.H.extra){for(e=c.pending;c.Ba<(c.H.extra.length&65535)&&(c.pending!==c.za||
(c.H.Va&&c.pending>e&&(a.I=hk(a.I,c.aa,c.pending-e,e)),Wk(a),e=c.pending,c.pending!==c.za));)P(c,c.H.extra[c.Ba]&255),c.Ba++;c.H.Va&&c.pending>e&&(a.I=hk(a.I,c.aa,c.pending-e,e));c.Ba===c.H.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.H.name){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=hk(a.I,c.aa,c.pending-e,e)),Wk(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.H.name.length?c.H.name.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.H.Va&&c.pending>
e&&(a.I=hk(a.I,c.aa,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.H.comment){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=hk(a.I,c.aa,c.pending-e,e)),Wk(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.H.comment.length?c.H.comment.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.H.Va&&c.pending>e&&(a.I=hk(a.I,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.H.Va?(c.pending+2>c.za&&Wk(a),c.pending+2<=c.za&&(P(c,
a.I&255),P(c,a.I>>8&255),a.I=0,c.status=113)):c.status=113);if(c.pending!==0){if(Wk(a),a.S===0)return c.Bb=-1,0}else if(a.na===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return Uk(a,-5);if(c.status===666&&a.na!==0)return Uk(a,-5);if(a.na!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?dl(c,b):c.strategy===3?cl(c,b):fl[c.level].ue(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.Bb=-1),0;if(d===2&&(b===1?(Ek(c,2,3),Fk(c,256,sk),c.ia===16?(Dk(c,c.oa),c.oa=0,c.ia=0):c.ia>=
8&&(c.aa[c.pending++]=c.oa&255,c.oa>>=8,c.ia-=8)):b!==5&&(Ek(c,0,3),Kk(c,0,0),b===3&&(Vk(c.head),c.B===0&&(c.v=0,c.va=0,c.sa=0))),Wk(a),a.S===0))return c.Bb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(P(c,a.I&255),P(c,a.I>>8&255),P(c,a.I>>16&255),P(c,a.I>>24&255),P(c,a.pb&255),P(c,a.pb>>8&255),P(c,a.pb>>16&255),P(c,a.pb>>24&255)):(Yk(c,a.I>>>16),Yk(c,a.I&65535));Wk(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var il={};il=function(){this.input=null;this.pb=this.na=this.nb=0;this.output=null;this.gd=this.S=this.Fb=0;this.msg="";this.state=null;this.Ic=2;this.I=0};var jl=Object.prototype.toString;
function kl(a){if(!(this instanceof kl))return new kl(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.K=new il;this.K.S=0;var b=this.K;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=Uk(b,-2);else{e===8&&(e=9);var k=new gl;b.state=k;k.K=b;k.wrap=h;k.H=null;k.jd=e;k.la=1<<k.jd;k.cb=k.la-1;k.Lc=f+7;k.sc=1<<k.Lc;k.La=k.sc-1;k.Ma=~~((k.Lc+3-1)/3);k.window=new O.rb(k.la*2);k.head=new O.Ja(k.sc);k.Ia=new O.Ja(k.la);k.Tb=1<<f+6;k.za=k.Tb*4;k.aa=new O.rb(k.za);k.Pb=1*k.Tb;k.Nc=3*k.Tb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.pb=b.gd=0;b.Ic=2;c=b.state;c.pending=0;c.Wb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.I=c.wrap===2?
0:1;c.Bb=0;if(!Sk){d=Array(16);for(f=g=0;f<28;f++)for(wk[f]=g,e=0;e<1<<ok[f];e++)vk[g++]=f;vk[g-1]=f;for(f=g=0;f<16;f++)for(xk[f]=g,e=0;e<1<<pk[f];e++)uk[g++]=f;for(g>>=7;f<30;f++)for(xk[f]=g<<7,e=0;e<1<<pk[f]-7;e++)uk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)sk[e*2+1]=8,e++,d[8]++;for(;e<=255;)sk[e*2+1]=9,e++,d[9]++;for(;e<=279;)sk[e*2+1]=7,e++,d[7]++;for(;e<=287;)sk[e*2+1]=8,e++,d[8]++;Hk(sk,287,d);for(e=0;e<30;e++)tk[e*2+1]=5,tk[e*2]=Gk(e,5);zk=new yk(sk,ok,257,286,15);Ak=new yk(tk,
pk,0,30,15);Bk=new yk([],qk,0,19,7);Sk=!0}c.uc=new Ck(c.ra,zk);c.kc=new Ck(c.gb,Ak);c.nd=new Ck(c.ja,Bk);c.oa=0;c.ia=0;Ik(c);c=0}else c=Uk(b,-2);c===0&&(b=b.state,b.Sd=2*b.la,Vk(b.head),b.Pc=fl[b.level].Ke,b.ud=fl[b.level].ye,b.Ad=fl[b.level].Me,b.yd=fl[b.level].Je,b.v=0,b.va=0,b.B=0,b.sa=0,b.T=b.wa=2,b.lb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(mk[b]);a.header&&(b=this.K)&&b.state&&b.state.wrap===2&&(b.state.H=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=fk(a.dictionary):
jl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.K;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.I=gk(a.I,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(Vk(l.head),l.v=0,l.va=0,l.sa=0),c=new O.rb(l.la),O.ub(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.na;d=a.nb;e=a.input;a.na=g;a.nb=0;a.input=f;for($k(l);l.B>=3;){f=l.v;g=l.B-2;do l.R=(l.R<<l.Ma^l.window[f+3-1])&l.La,l.Ia[f&l.cb]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.v=f;l.B=2;$k(l)}l.v+=l.B;l.va=l.v;l.sa=l.B;l.B=0;l.T=l.wa=2;l.lb=0;a.nb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(mk[b]);this.sh=!0}}
kl.prototype.push=function(a,b){var c=this.K,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=fk(a):jl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.nb=0;c.na=c.input.length;do{c.S===0&&(c.output=new O.rb(d),c.Fb=0,c.S=d);a=hl(c,e);if(a!==1&&a!==0)return ll(this,a),this.ended=!0,!1;if(c.S===0||c.na===0&&(e===4||e===2))if(this.options.to==="string"){var f=O.bd(c.output,c.Fb);b=f;f=f.length;if(f<65537&&(b.subarray&&ek||!b.subarray))b=
String.fromCharCode.apply(null,O.bd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.bd(c.output,c.Fb),this.chunks.push(b)}while((c.na>0||c.S===0)&&a!==1);if(e===4)return(c=this.K)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=Uk(c,-2):(c.state=null,a=d===113?Uk(c,-3):0)):a=-2,ll(this,a),this.ended=!0,a===0;e===2&&(ll(this,0),c.S=0);return!0};
function ll(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):O.sd(a.chunks));a.chunks=[];a.err=b;a.msg=a.K.msg}
function ml(a,b){b=b||{};b.gzip=!0;b=new kl(b);b.push(a,!0);if(b.err)throw b.msg||mk[b.err];return b.result}
;function nl(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Bb(a):null:null}
function ol(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?ib(a):null:null}
;function pl(a){return ib(a===null?"null":a===void 0?"undefined":a)}
;function ql(a){this.name=a}
;var rl=new ql("rawColdConfigGroup");var sl=new ql("rawHotConfigGroup");function tl(a){this.F=L(a)}
w(tl,M);function ul(a){this.F=L(a)}
w(ul,M);ul.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new yd(a,xd):Ad||(Ad=new yd(null,xd));else if(a.constructor!==yd)if(sd&&a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new yd(new Uint8Array(a),xd):Ad||(Ad=new yd(null,xd));else throw Error();return af(this,1,a)};var vl=new ql("continuationCommand");var wl=new ql("webCommandMetadata");var xl=new ql("signalServiceEndpoint");var yl={Sf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Pf:"EMBEDDED_PLAYER_MODE_DEFAULT",Rf:"EMBEDDED_PLAYER_MODE_PFP",Qf:"EMBEDDED_PLAYER_MODE_PFL"};var zl=new ql("feedbackEndpoint");var Zd={Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED"};var Al=new ql("shareEndpoint"),Bl=new ql("shareEntityEndpoint"),Cl=new ql("shareEntityServiceEndpoint"),Dl=new ql("webPlayerShareEntityServiceEndpoint");var El=new ql("playlistEditEndpoint");var Fl=new ql("modifyChannelNotificationPreferenceEndpoint");var Gl=new ql("unsubscribeEndpoint");var Hl=new ql("subscribeEndpoint");function Il(){var a=Jl;F("yt.ads.biscotti.getId_")||E("yt.ads.biscotti.getId_",a)}
function Kl(a){E("yt.ads.biscotti.lastId_",a)}
;function Ll(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Ml=D.window,Nl,Ol,Pl=(Ml==null?void 0:(Nl=Ml.yt)==null?void 0:Nl.config_)||(Ml==null?void 0:(Ol=Ml.ytcfg)==null?void 0:Ol.data_)||{};E("yt.config_",Pl);function Ql(){Ll(Pl,arguments)}
function R(a,b){return a in Pl?Pl[a]:b}
function Rl(a){var b=Pl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Sl=[];function Tl(a){Sl.forEach(function(b){return b(a)})}
function Ul(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Vl(b)}}:a}
function Vl(a){var b=F("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Ql("ERRORS",b));Tl(a)}
function Wl(a,b,c,d,e){var f=F("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Ql("ERRORS",f))}
;var Xl=/^[\w.]*$/,Yl={q:!0,search_query:!0};function Zl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=$l(f[0]||""),h=$l(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Sb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],n=String(Zl);l.args=[{key:m,value:f[1],query:a,method:am===n?"unchanged":n}];Yl.hasOwnProperty(m)||Wl(l)}}return c}
var am=String(Zl);function bm(a){var b=[];Yf(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Mb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function cm(a){a.charAt(0)==="?"&&(a=a.substring(1));return Zl(a,"&")}
function dm(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),cm(a.length>1?a[1]:a[0])):{}}
function em(a,b){return fm(a,b||{},!0)}
function fm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=cm(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return hc(a,e)+d}
function gm(a){if(!b)var b=window.location.href;var c=ac(1,a),d=bc(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?bc(b)===d&&(Number(ac(4,b))||null)===(Number(ac(4,a))||null):!0;return a}
function $l(a){return a&&a.match(Xl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function hm(a){var b=im;a=a===void 0?F("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=uj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Oa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?mj:g;try{var h=g.history.length}catch(Oa){h=0}e.u_his=h;var k;e.u_h=(k=mj.screen)==null?void 0:k.height;var l;e.u_w=(l=mj.screen)==null?void 0:l.width;var m;e.u_ah=(m=mj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=mj.screen)==null?void 0:n.availWidth;var r;e.u_cd=(r=mj.screen)==null?void 0:r.colorDepth}catch(Oa){}h=b.h;try{var t=h.screenX;var v=h.screenY}catch(Oa){}try{var x=h.outerWidth;var z=h.outerHeight}catch(Oa){}try{var G=h.innerWidth;var K=h.innerHeight}catch(Oa){}try{var ba=h.screenLeft;var ca=h.screenTop}catch(Oa){}try{G=h.innerWidth,K=h.innerHeight}catch(Oa){}try{var Na=h.screen.availWidth;var Kb=h.screen.availTop}catch(Oa){}t=[ba,ca,t,v,Na,Kb,x,z,G,K];try{var ja=(b.h.top||window).document,Ya=
ja.compatMode=="CSS1Compat"?ja.documentElement:ja.body;var Pa=(new Xf(Ya.clientWidth,Ya.clientHeight)).round()}catch(Oa){Pa=new Xf(-12245933,-12245933)}ja=Pa;Pa={};var Qa=Qa===void 0?D:Qa;Ya=new Aj;"SVGElement"in Qa&&"createElementNS"in Qa.document&&Ya.set(0);v=rj();v["allow-top-navigation-by-user-activation"]&&Ya.set(1);v["allow-popups-to-escape-sandbox"]&&Ya.set(2);Qa.crypto&&Qa.crypto.subtle&&Ya.set(3);"TextDecoder"in Qa&&"TextEncoder"in Qa&&Ya.set(4);Qa=Bj(Ya);Pa.bc=Qa;Pa.bih=ja.height;Pa.biw=
ja.width;Pa.brdim=t.join();b=b.i;b=(Pa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Pa.wgl=!!mj.WebGLRenderingContext,Pa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var im=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return bm(hm(a))});$a();navigator.userAgent.indexOf(" (CrKey ");var jm="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function km(){if(!jm)return null;var a=jm();return"open"in a?a:null}
function lm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function mm(a,b){typeof a==="function"&&(a=Ul(a));return window.setTimeout(a,b)}
;var nm="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(A(nm),["client_dev_set_cookie"]);function S(a){a=om(a);return typeof a==="string"&&a==="false"?!1:!!a}
function T(a,b){a=om(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function om(a){return R("EXPERIMENT_FLAGS",{})[a]}
function pm(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=y(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=y(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var qm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},rm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(A(nm)),sm=!1;function tm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&Ul(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=km();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=um(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=wm(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){Wl(n)}}l.send(d);return l}
function wm(a,b){b=b===void 0?{}:b;var c=gm(a),d=R("INNERTUBE_CLIENT_NAME"),e=S("web_ajax_ignore_global_headers_if_set"),f;for(f in qm){var g=R(qm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=R("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(bc(a)?!1:!0))){k=a;var l;if(l=S("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=bc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=$b(ac(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!bc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!bc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&bc(a)||(b["X-YouTube-Ad-Signals"]=bm(hm()));return b}
function xm(a,b){b.method="POST";b.postParams||(b.postParams={});return ym(a,b)}
function ym(a,b){var c=b.format||"JSON";a=zm(a,b);var d=Am(a,b),e=!1,f=Bm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=lm(k),m=null,n=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||n||r)m=Cm(a,c,k,b.convertToSafeHtml);l&&(l=Dm(c,k,m));m=m||{};n=b.context||D;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=mm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function zm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=em(a,b);return a}
function Am(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||bc(a)&&!b.withCredentials&&bc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=cm(e),hg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):fc(e));f=e||f&&!ag(f);!sm&&f&&b.method!=="POST"&&(sm=!0,Vl(Error("AJAX request with postData should use POST")));return e}
function Cm(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Wl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Em(a):null)e={},Mb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Fm(g)})}d&&Gm(e);
return e}
function Gm(a){if(Ra(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=gb();d=new yb(e?e.createHTML(d):d);a[c]=d}else Gm(a[b])}}
function Dm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Em(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Fm(a){var b="";Mb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function um(a){var b=window.location.search,c=bc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&gm(a)&&(c=document.location.hostname);var d=$b(ac(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=cm(b),f={};Mb(rm,function(g){e[g]&&(f[g]=e[g])});
return fm(a,f||{},!1)}
var Bm=tm;var Hm=[{Qc:function(a){return"Cannot read property '"+a.key+"'"},
xc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Qc:function(a){return"Cannot call '"+a.key+"'"},
xc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Qc:function(a){return a.key+" is not defined"},
xc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Jm={Ya:[],Ta:[{callback:Im,weight:500}]};function Im(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Km(){this.Ta=[];this.Ya=[]}
var Lm;function Mm(){if(!Lm){var a=Lm=new Km;a.Ya.length=0;a.Ta.length=0;Jm.Ya&&a.Ya.push.apply(a.Ya,Jm.Ya);Jm.Ta&&a.Ta.push.apply(a.Ta,Jm.Ta)}return Lm}
;var Nm=new N;function Om(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Pm(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=Pm(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=Pm(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function Pm(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function Qm(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Rm(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=Om(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Rm(f+".ve",g,h,k):0;d+=f;d+=Rm(e,a[e],b,c);if(d>500)break}}else c[b]=Sm(a),d+=c[b].length;else c[b]=Sm(a),d+=c[b].length;return d}
function Rm(a,b,c,d){c+="."+a;a=Sm(b);d[c]=a;return c.length+a.length}
function Sm(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Tm(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Um(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Vm(){this.Ld=!0}
function Wm(){Vm.instance||(Vm.instance=new Vm);return Vm.instance}
function Xm(a,b){a={};var c=[];"USER_SESSION_ID"in Pl&&c.push({key:"u",value:R("USER_SESSION_ID")});if(c=Qf(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Pl||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in Pl&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));return a}
;var Ym={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Zm(a,b,c,d,e){Nf.set(""+a,b,{Vb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function $m(a){return Nf.get(""+a,void 0)}
function an(a,b,c){Nf.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function bn(){if(S("embeds_web_enable_cookie_detection_fix")){if(!D.navigator.cookieEnabled)return!1}else if(!Nf.isEnabled())return!1;if(Nf.h.cookie)return!0;S("embeds_web_enable_cookie_detection_fix")?Nf.set("TESTCOOKIESENABLED","1",{Vb:60,bf:"none",secure:!0}):Nf.set("TESTCOOKIESENABLED","1",{Vb:60});if(Nf.get("TESTCOOKIESENABLED")!=="1")return!1;Nf.remove("TESTCOOKIESENABLED");return!0}
;var cn=F("ytglobal.prefsUserPrefsPrefs_")||{};E("ytglobal.prefsUserPrefsPrefs_",cn);function dn(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=$m(this.h);a&&this.parse(a)}
var en;function fn(){en||(en=new dn);return en}
p=dn.prototype;p.get=function(a,b){gn(a);hn(a);a=cn[a]!==void 0?cn[a].toString():null;return a!=null?a:b?b:""};
p.set=function(a,b){gn(a);hn(a);if(b==null)throw Error("ExpectedNotNull");cn[a]=b.toString()};
function jn(a){return!!((kn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
p.remove=function(a){gn(a);hn(a);delete cn[a]};
p.clear=function(){for(var a in cn)delete cn[a]};
function hn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function gn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function kn(a){a=cn[a]!==void 0?cn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
p.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(cn[d]=c.toString())}};var ln={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},mn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function nn(){var a=D.navigator;return a?a.connection:void 0}
function on(){var a=nn();if(a){var b=ln[a.type||"unknown"]||"CONN_UNKNOWN";a=ln[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function pn(){var a=nn();if(a!=null&&a.effectiveType)return mn.hasOwnProperty(a.effectiveType)?mn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=C.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(A(b));Object.setPrototypeOf(this,this.constructor.prototype)}
w(U,Error);function qn(){try{return rn(),!0}catch(a){return!1}}
function rn(a){if(R("DATASYNC_ID")!==void 0)return R("DATASYNC_ID");throw new U("Datasync ID not set",a===void 0?"unknown":a);}
;function sn(){}
function tn(a,b){return zj.Ra(a,0,b)}
sn.prototype.pa=function(a,b){return this.Ra(a,1,b)};
sn.prototype.Lb=function(a){var b=F("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var un=T("web_emulated_idle_callback_delay",300),vn=1E3/60-3,wn=[8,5,4,3,2,1,0];
function xn(a){a=a===void 0?{}:a;H.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.P=[];this.U=this.ha=!1;for(var b=y(wn),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.Gc=a.timeout||1;this.G=vn;this.D=0;this.xa=this.Oe.bind(this);this.Kb=this.uf.bind(this);this.Pa=this.Yd.bind(this);this.Qa=this.ze.bind(this);this.eb=this.Ve.bind(this);this.Fa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.ma=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
w(xn,H);p=xn.prototype;p.Lb=function(a){var b=$a();yn(this,a);a=$a()-b;this.u||(this.G-=a)};
p.Ra=function(a,b,c){++this.Z;if(b===10)return this.Lb(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&zn(this)!==this.D&&this.stop(),this.start()));return d};
p.qa=function(a){delete this.j[a]};
function An(a){a.P.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
p.isHidden=function(){return!!document.hidden||!1};
function Bn(a){return!a.isHidden()&&a.ma}
function zn(a){if(a.i[8].length){if(a.U)return 4;if(Bn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Bn(a)?3:2:1;return 0}
p.Ha=function(a){var b=F("yt.logging.errors.log");b&&b(a)};
function yn(a,b){try{b()}catch(c){a.Ha(c)}}
function Cn(a){for(var b=y(wn),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
p.ze=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;Dn(this,b);this.ha=!1};
p.uf=function(){Dn(this)};
p.Yd=function(){En(this)};
p.Ve=function(a){this.U=!0;var b=zn(this);b===4&&b!==this.D&&(this.stop(),this.start());Dn(this,void 0,a);this.U=!1};
p.Oe=function(){this.isHidden()||En(this);this.h&&(this.stop(),this.start())};
function En(a){a.stop();a.u=!0;for(var b=$a(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&yn(a,e)}Fn(a);a.u=!1;Cn(a)&&a.start();b=$a()-b;a.G-=b}
function Fn(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function Dn(a,b,c){a.U&&a.D===4&&a.h||a.stop();a.u=!0;b=$a()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&yn(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!($a()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&yn(a,c)}while(c&&$a()<b)}a.u=!1;Fn(a);a.G=vn;Cn(a)&&a.start()}
p.start=function(){this.Y=!1;if(this.h===0)switch(this.D=zn(this),this.D){case 1:var a=this.Qa;this.h=this.Fa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,un);break;case 2:this.h=window.setTimeout(this.Kb,this.Gc);break;case 3:this.h=window.requestAnimationFrame(this.eb);break;case 4:this.h=window.setTimeout(this.Pa,0)}};
p.pause=function(){this.stop();this.Y=!0};
p.stop=function(){if(this.h){switch(this.D){case 1:var a=this.h;this.Fa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
p.ba=function(){An(this);this.stop();this.ma&&document.removeEventListener("visibilitychange",this.xa);H.prototype.ba.call(this)};var Gn=F("yt.scheduler.instance.timerIdMap_")||{},Hn=T("kevlar_tuner_scheduler_soft_state_timer_ms",800),In=0,Jn=0;function Kn(){var a=F("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new xn(R("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function Ln(){Mn();var a=F("ytglobal.schedulerInstanceInstance_");a&&(rc(a),E("ytglobal.schedulerInstanceInstance_",null))}
function Mn(){An(Kn());for(var a in Gn)Gn.hasOwnProperty(a)&&delete Gn[Number(a)]}
function Nn(a,b,c){if(!c)return c=c===void 0,-Kn().Ra(a,b,c);var d=window.setTimeout(function(){var e=Kn().Ra(a,b);Gn[d]=e},c);
return d}
function On(a){Kn().Lb(a)}
function Pn(a){var b=Kn();if(a<0)b.qa(-a);else{var c=Gn[a];c?(b.qa(c),delete Gn[a]):window.clearTimeout(a)}}
function Qn(){Rn()}
function Rn(){window.clearTimeout(In);Kn().start()}
function Sn(){Kn().pause();window.clearTimeout(In);In=window.setTimeout(Qn,Hn)}
function Tn(){window.clearTimeout(Jn);Jn=window.setTimeout(function(){Un(0)},Hn)}
function Un(a){Tn();var b=Kn();b.o=a;b.start()}
function Vn(a){Tn();var b=Kn();b.o>a&&(b.o=a,b.start())}
function Wn(){window.clearTimeout(Jn);var a=Kn();a.o=0;a.start()}
;function Xn(){sn.apply(this,arguments)}
w(Xn,sn);function Yn(){Xn.instance||(Xn.instance=new Xn);return Xn.instance}
Xn.prototype.Ra=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=F("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):mm(a,c||0)};
Xn.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=F("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Xn.prototype.start=function(){var a=F("yt.scheduler.instance.start");a&&a()};
Xn.prototype.pause=function(){var a=F("yt.scheduler.instance.pause");a&&a()};
var zj=Yn();
S("web_scheduler_auto_init")&&!F("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",Ln),E("yt.scheduler.instance.addJob",Nn),E("yt.scheduler.instance.addImmediateJob",On),E("yt.scheduler.instance.cancelJob",Pn),E("yt.scheduler.instance.cancelAllJobs",Mn),E("yt.scheduler.instance.start",Rn),E("yt.scheduler.instance.pause",Sn),E("yt.scheduler.instance.setPriorityThreshold",Un),E("yt.scheduler.instance.enablePriorityThreshold",Vn),E("yt.scheduler.instance.clearPriorityThreshold",Wn),E("yt.scheduler.initialized",
!0));function Zn(a){var b=new Zj;this.h=(a=b.isAvailable()?a?new ak(b,a):b:null)?new Uj(a):null;this.i=document.domain||window.location.hostname}
Zn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new vi).serialize(b))}catch(f){return}else e=escape(b);Zm(a,e,c,this.i)};
Zn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=$m(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Zn.prototype.remove=function(a){this.h&&this.h.remove(a);an(a,"/",this.i)};var $n=function(){var a;return function(){a||(a=new Zn("ytidb"));return a}}();
function ao(){var a;return(a=$n())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var bo=[],co,eo=!1;function fo(){var a={};for(co=new go(a.handleError===void 0?ho:a.handleError,a.logEvent===void 0?io:a.logEvent);bo.length>0;)switch(a=bo.shift(),a.type){case "ERROR":co.Ha(a.payload);break;case "EVENT":co.logEvent(a.eventType,a.payload)}}
function jo(a){eo||(co?co.Ha(a):(bo.push({type:"ERROR",payload:a}),bo.length>10&&bo.shift()))}
function ko(a,b){eo||(co?co.logEvent(a,b):(bo.push({type:"EVENT",eventType:a,payload:b}),bo.length>10&&bo.shift()))}
;function lo(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function mo(a){return a.substr(0,a.indexOf(":"))||a}
;var no=jd||kd;function oo(a){var b=Tc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var po={},qo=(po.AUTH_INVALID="No user identifier specified.",po.EXPLICIT_ABORT="Transaction was explicitly aborted.",po.IDB_NOT_SUPPORTED="IndexedDB is not supported.",po.MISSING_INDEX="Index not created.",po.MISSING_OBJECT_STORES="Object stores not created.",po.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",po.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",po.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
po.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",po.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",po.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",po.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",po),ro={},so=(ro.AUTH_INVALID="ERROR",ro.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",ro.EXPLICIT_ABORT="IGNORED",ro.IDB_NOT_SUPPORTED="ERROR",ro.MISSING_INDEX=
"WARNING",ro.MISSING_OBJECT_STORES="ERROR",ro.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",ro.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",ro.QUOTA_EXCEEDED="WARNING",ro.QUOTA_MAYBE_EXCEEDED="WARNING",ro.UNKNOWN_ABORT="WARNING",ro.INCOMPATIBLE_DB_VERSION="WARNING",ro),to={},uo=(to.AUTH_INVALID=!1,to.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,to.EXPLICIT_ABORT=!1,to.IDB_NOT_SUPPORTED=!1,to.MISSING_INDEX=!1,to.MISSING_OBJECT_STORES=!1,to.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,to.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,to.QUOTA_EXCEEDED=!1,to.QUOTA_MAYBE_EXCEEDED=!0,to.UNKNOWN_ABORT=!0,to.INCOMPATIBLE_DB_VERSION=!1,to);function vo(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?qo[a]:c;d=d===void 0?so[a]:d;e=e===void 0?uo[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,vo.prototype)}
w(vo,U);function wo(a,b){vo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},qo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,wo.prototype)}
w(wo,vo);function xo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,xo.prototype)}
w(xo,Error);var yo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function zo(a,b,c,d){b=mo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof vo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new vo("QUOTA_EXCEEDED",a);if(ld&&e.name==="UnknownError")return new vo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof xo)return new vo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&yo.some(function(f){return e.message.includes(f)}))return new vo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new vo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Cd:e.name})];e.level="WARNING";return e}
function Ao(a,b,c){var d=ao();return new vo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Bo(a){if(!a)throw Error();throw a;}
function Co(a){return a}
function Do(a){this.h=a}
function Eo(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=y(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=y(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Eo.all=function(a){return new Eo(new Do(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={Ab:0};f.Ab<a.length;f={Ab:f.Ab},++f.Ab)Eo.resolve(a[f.Ab]).then(function(g){return function(h){d[g.Ab]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Eo.resolve=function(a){return new Eo(new Do(function(b,c){a instanceof Eo?a.then(b,c):b(a)}))};
Eo.reject=function(a){return new Eo(new Do(function(b,c){c(a)}))};
Eo.prototype.then=function(a,b){var c=this,d=a!=null?a:Co,e=b!=null?b:Bo;return new Eo(new Do(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Fo(c,c,d,f,g)}),c.i.push(function(){Go(c,c,e,f,g)})):c.state.status==="FULFILLED"?Fo(c,c,d,f,g):c.state.status==="REJECTED"&&Go(c,c,e,f,g)}))};
Eo.prototype.catch=function(a){return this.then(void 0,a)};
function Fo(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Eo?Ho(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Go(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Eo?Ho(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ho(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Eo?Ho(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Io(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Jo(a){return new Promise(function(b,c){Io(a,b,c)})}
function Ko(a){return new Eo(new Do(function(b,c){Io(a,b,c)}))}
;function Lo(a,b){return new Eo(new Do(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Mo=window,V=Mo.ytcsi&&Mo.ytcsi.now?Mo.ytcsi.now:Mo.performance&&Mo.performance.timing&&Mo.performance.now&&Mo.performance.timing.navigationStart?function(){return Mo.performance.timing.navigationStart+Mo.performance.now()}:function(){return(new Date).getTime()};function No(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
p=No.prototype;p.add=function(a,b,c){return Oo(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
p.clear=function(a){return Oo(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
p.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return Oo(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function Po(a,b,c){a=a.h.createObjectStore(b,c);return new Qo(a)}
p.delete=function(a,b){return Oo(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
p.get=function(a,b){return Oo(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function Ro(a,b,c){return Oo(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return Ko(d.h.put(c,void 0))})}
p.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Oo(a,b,c,d){var e,f,g,h,k,l,m,n,r,t,v,x;return B(function(z){switch(z.h){case 1:var G={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){z.A(4);break}g++;k=Math.round(V());ya(z,5);l=a.h.transaction(b,e.mode);G=z.yield;var K=new So(l);K=To(K,d);return G.call(z,K,7);case 7:return m=z.i,n=Math.round(V()),Uo(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:r=Aa(z);t=Math.round(V());v=zo(r,
a.h.name,b.join(),a.h.version);if((x=v instanceof vo&&!v.h)||g>=f)Uo(a,k,t,g,v,b.join(),e),h=v;z.A(2);break;case 4:return z.return(Promise.reject(h))}})}
function Uo(a,b,c,d,e,f,g){b=c-b;e?(e instanceof vo&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&ko("QUOTA_EXCEEDED",{dbName:mo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof vo&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),ko("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Vo(a,!1,d,f,b,g.tag),jo(e)):Vo(a,!0,d,f,b,g.tag)}
function Vo(a,b,c,d,e,f){ko("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
p.getName=function(){return this.h.name};
function Qo(a){this.h=a}
p=Qo.prototype;p.add=function(a,b){return Ko(this.h.add(a,b))};
p.autoIncrement=function(){return this.h.autoIncrement};
p.clear=function(){return Ko(this.h.clear()).then(function(){})};
function Wo(a,b,c){a.h.createIndex(b,c,{unique:!1})}
p.count=function(a){return Ko(this.h.count(a))};
function Xo(a,b){return Yo(a,{query:b},function(c){return c.delete().then(function(){return Zo(c)})}).then(function(){})}
p.delete=function(a){return a instanceof IDBKeyRange?Xo(this,a):Ko(this.h.delete(a))};
p.get=function(a){return Ko(this.h.get(a))};
p.index=function(a){try{return new $o(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new xo(a,this.h.name);throw b;}};
p.getName=function(){return this.h.name};
p.keyPath=function(){return this.h.keyPath};
function Yo(a,b,c){a=a.h.openCursor(b.query,b.direction);return ap(a).then(function(d){return Lo(d,c)})}
function So(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=vo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function To(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return y(d).next().value})}
So.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new vo("EXPLICIT_ABORT");};
So.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Qo(a),this.i.set(a,b));return b};
function $o(a){this.h=a}
p=$o.prototype;p.count=function(a){return Ko(this.h.count(a))};
p.delete=function(a){return bp(this,{query:a},function(b){return b.delete().then(function(){return Zo(b)})})};
p.get=function(a){return Ko(this.h.get(a))};
p.keyPath=function(){return this.h.keyPath};
p.unique=function(){return this.h.unique};
function bp(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return ap(a).then(function(d){return Lo(d,c)})}
function cp(a,b){this.request=a;this.cursor=b}
function ap(a){return Ko(a).then(function(b){return b?new cp(a,b):null})}
function Zo(a){a.cursor.continue(void 0);return ap(a.request)}
cp.prototype.delete=function(){return Ko(this.cursor.delete()).then(function(){})};
cp.prototype.getValue=function(){return this.cursor.value};
cp.prototype.update=function(a){return Ko(this.cursor.update(a))};function dp(a,b,c){return new Promise(function(d,e){function f(){r||(r=new No(g.result,{closed:n}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.be,k=c.blocking,l=c.sf,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&ko("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:mo(a)});var v=f(),x=new So(g.transaction);
m&&m(v,function(z){return t.oldVersion<z&&t.newVersion>=z},x);
x.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){ko("IDB_UNEXPECTEDLY_CLOSED",{dbName:mo(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function ep(a,b,c){c=c===void 0?{}:c;return dp(a,b,c)}
function fp(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.h==1)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.be)&&c.addEventListener("blocked",function(){e()}),g.yield(Jo(c),4);
if(g.h!=2)return za(g,0);f=Aa(g);throw zo(f,a,"",-1);})}
;function gp(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
gp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return ep(a,b,c)};
gp.prototype.delete=function(a){a=a===void 0?{}:a;return fp(this.name,a)};
function hp(a,b){return new vo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function ip(a,b){if(!b)throw Ao("openWithToken",mo(a.name));return a.open()}
gp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,r,t,v;return B(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",ya(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=x.i,G=c.options,K=[],ba=y(Object.keys(G.Gb)),ca=ba.next();!ca.done;ca=ba.next()){ca=ca.value;var Na=G.Gb[ca],Kb=Na.We===void 0?Number.MAX_VALUE:Na.We;!(z.h.version>=Na.Nb)||z.h.version>=Kb||z.h.objectStoreNames.contains(ca)||K.push(ca)}k=K;if(k.length===0){x.A(5);break}l=Object.keys(c.options.Gb);
m=h.objectStoreNames();if(c.u<T("ytidb_reopen_db_retries",0))return c.u++,h.close(),jo(new vo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<T("ytidb_remake_db_retries",1))){x.A(6);break}c.o++;return x.yield(c.delete(),7);case 7:return jo(new vo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new wo(m,l);case 5:return x.return(h);case 2:n=Aa(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.A(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=x.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,hp(c,t);return x.return(r);case 8:throw b(),n instanceof
Error&&!S("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),zo(n,c.name,"",(v=c.options.version)!=null?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw hp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,sf:b,upgrade:this.options.upgrade};return this.h=d=a()};var jp=new gp("YtIdbMeta",{Gb:{databases:{Nb:1}},upgrade:function(a,b){b(1)&&Po(a,"databases",{keyPath:"actualName"})}});
function kp(a,b){var c;return B(function(d){if(d.h==1)return d.yield(ip(jp,b),2);c=d.i;return d.return(Oo(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Ko(f.h.put(a,void 0)).then(function(){})})}))})}
function lp(a,b){var c;return B(function(d){if(d.h==1)return a?d.yield(ip(jp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function mp(a,b){var c,d;return B(function(e){return e.h==1?(c=[],e.yield(ip(jp,b),2)):e.h!=3?(d=e.i,e.yield(Oo(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return Yo(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return Zo(g)})}),3)):e.return(c)})}
function np(a){return mp(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function op(a,b,c){return mp(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function pp(a){var b,c;return B(function(d){if(d.h==1)return b=rn("YtIdbMeta hasAnyMeta other"),d.yield(mp(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var qp,rp=new function(){}(new function(){});
function sp(){var a,b,c,d;return B(function(e){switch(e.h){case 1:a=ao();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=no)f=/WebKit\/([0-9]+)/.exec(Tc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Tc()),f=!(f&&parseInt(f[1],10)>=602));if(f||fd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(kp(d,rp),4);case 4:return e.yield(lp("yt-idb-test-do-not-use",rp),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function tp(){if(qp!==void 0)return qp;eo=!0;return qp=sp().then(function(a){eo=!1;var b;if((b=$n())!=null&&b.h){var c;b={hasSucceededOnce:((c=ao())==null?void 0:c.hasSucceededOnce)||a};var d;(d=$n())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function up(){return F("ytglobal.idbToken_")||void 0}
function vp(){var a=up();return a?Promise.resolve(a):tp().then(function(b){(b=b?rp:void 0)&&E("ytglobal.idbToken_",b);return b})}
;var wp=0;function xp(a,b){wp||(wp=zj.pa(function(){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:return h.yield(vp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;ya(h,3);return h.yield(op(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(fp(f.actualName),7);case 7:return h.yield(lp(f.actualName,c),6);case 6:za(h,4);break;case 3:g=Aa(h),jo(g),d=!1;case 4:zj.qa(wp),wp=0,d&&xp(a,b),h.h=0}})}))}
function yp(){var a;return B(function(b){return b.h==1?b.yield(vp(),2):(a=b.i)?b.return(pp(a)):b.return(!1)})}
new bj;function zp(a){if(!qn())throw a=new vo("AUTH_INVALID",{dbName:a}),jo(a),a;var b=rn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Ap(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(vp(),2);case 2:g=m.i;if(!g)throw h=Ao("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),jo(h),h;lo(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:zp(a);ya(m,3);return m.yield(kp(k,g),5);case 5:return m.yield(ep(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Aa(m),ya(m,7),m.yield(lp(k.actualName,
g),9);case 9:za(m,8);break;case 7:Aa(m);case 8:throw l;}})}
function Bp(a,b,c){c=c===void 0?{}:c;return Ap(a,b,!1,c)}
function Cp(a,b,c){c=c===void 0?{}:c;return Ap(a,b,!0,c)}
function Dp(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.h==1)return e.yield(vp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();lo(a);d=zp(a);return e.yield(fp(d.actualName,b),3)}return e.yield(lp(d.actualName,c),0)})}
function Ep(a,b,c){a=a.map(function(d){return B(function(e){return e.h==1?e.yield(fp(d.actualName,b),2):e.yield(lp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Fp(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.h==1)return d.yield(vp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();lo("LogsDatabaseV2");return d.yield(np(b),3)}c=d.i;return d.yield(Ep(c,a,b),0)})}
function Gp(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.h==1)return d.yield(vp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();lo(a);return d.yield(fp(a,b),3)}return d.yield(lp(a,c),0)})}
;function Hp(a,b){gp.call(this,a,b);this.options=b;lo(a)}
w(Hp,gp);function Ip(a,b){var c;return function(){c||(c=new Hp(a,b));return c}}
Hp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Cp:Bp)(a,b,Object.assign({},c))};
Hp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Gp:Dp)(this.name,a)};
function Jp(a,b){return Ip(a,b)}
;var Kp={},Lp=Jp("ytGcfConfig",{Gb:(Kp.coldConfigStore={Nb:1},Kp.hotConfigStore={Nb:1},Kp),shared:!1,upgrade:function(a,b){b(1)&&(Wo(Po(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Wo(Po(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Mp(a){return ip(Lp(),a)}
function Np(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield(Mp(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Ro(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Op(a,b,c,d){var e,f,g;return B(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield(Mp(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Ro(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Pp(a){var b,c;return B(function(d){return d.h==1?d.yield(Mp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Oo(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return bp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Qp(a){var b,c;return B(function(d){return d.h==1?d.yield(Mp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Oo(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return bp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Rp(){H.call(this);this.i=[];this.h=[];var a=F("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(A(a)),this.h=a):(this.h=[],E("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Rp,H);Rp.prototype.ba=function(){for(var a=y(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;H.prototype.ba.call(this)};function Sp(){this.h=0;this.i=new Rp}
function Tp(){var a;return(a=F("yt.gcf.config.hotConfigGroup"))!=null?a:R("RAW_HOT_CONFIG_GROUP")}
function Up(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.A(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=up();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(Qp(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Np(c,b,d),3);case 3:if(c)for(var h=c,k=y(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Vp(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){if(!S("start_client_gcf"))return h.A(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=up())?c?h.A(4):h.yield(Pp(d),5):h.A(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(Op(c,b,g,d),0)})}
function Wp(){if(!Sp.instance){var a=new Sp;Sp.instance=a}a=Sp.instance;var b=V()-a.h;if(!(a.h!==0&&b<T("send_config_hash_timer"))){b=F("yt.gcf.config.coldConfigData");var c=F("yt.gcf.config.hotHashData"),d=F("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=V());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Sp.prototype.o=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function Xp(){return"INNERTUBE_API_KEY"in Pl&&"INNERTUBE_API_VERSION"in Pl}
function Yp(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),Ae:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),wd:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Dh:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ce:R("INNERTUBE_CONTEXT_HL"),Be:R("INNERTUBE_CONTEXT_GL"),De:R("INNERTUBE_HOST_OVERRIDE")||"",Ee:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Eh:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Zp(a){var b={client:{hl:a.Ce,gl:a.Be,clientName:a.wd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ae}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=pm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.wd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=Um()}(d=F("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&((e=D.navigator)==null?0:e.deviceMemory)){var f;e=(f=D.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=on())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&
(a=pn())&&b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=Wp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=R("INNERTUBE_CONTEXT");var g;if(S("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=y(Object.entries(cm(R("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=y(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function $p(a,b,c){c=c===void 0?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+F("gapi.auth.getToken")().th:(a=Xm(Wm()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var aq=typeof TextEncoder!=="undefined"?new TextEncoder:null,bq=aq?function(a){return aq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var cq={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},dq={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function eq(a,b){this.version=a;this.args=b}
eq.prototype.serialize=function(){return{version:this.version,args:this.args}};function fq(a,b){this.topic=a;this.h=b}
fq.prototype.toString=function(){return this.topic};var gq=F("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.dc;N.prototype.publish=N.prototype.sb;N.prototype.clear=N.prototype.clear;E("ytPubsub2Pubsub2Instance",gq);var hq=F("ytPubsub2Pubsub2SubscribedKeys")||{};E("ytPubsub2Pubsub2SubscribedKeys",hq);var iq=F("ytPubsub2Pubsub2TopicToKeys")||{};E("ytPubsub2Pubsub2TopicToKeys",iq);var jq=F("ytPubsub2Pubsub2IsAsync")||{};E("ytPubsub2Pubsub2IsAsync",jq);
E("ytPubsub2Pubsub2SkipSubKey",null);function kq(a,b){var c=lq();c&&c.publish.call(c,a.toString(),a,b)}
function mq(a){var b=nq,c=lq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=F("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(hq[d])try{if(f&&b instanceof fq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Qd){var l=new h;h.Qd=l.version}var m=h.Qd}catch(z){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var r=k.args,t=r.length;if(t>0){var v=Array(t);for(k=0;k<t;k++)v[k]=r[k];var x=v}else x=[];f=n.call(m,h,x)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){Vl(z)}},jq[b.toString()]?F("yt.scheduler.instance")?zj.pa(g):mm(g,0):g())});
hq[d]=!0;iq[b.toString()]||(iq[b.toString()]=[]);iq[b.toString()].push(d);return d}
function oq(){var a=pq,b=mq(function(c){a.apply(void 0,arguments);qq(b)});
return b}
function qq(a){var b=lq();b&&(typeof a==="number"&&(a=[a]),Mb(a,function(c){b.unsubscribeByKey(c);delete hq[c]}))}
function lq(){return F("ytPubsub2Pubsub2Instance")}
;function rq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&kq("meta_logging_csi_event",{timerName:a,Wh:b})}
;var sq=void 0,tq=void 0;function uq(){tq||(tq=ol(R("WORKER_SERIALIZATION_URL")));return tq||void 0}
function vq(){var a=uq();sq||a===void 0||(sq=new Worker(jb(a),void 0));return sq}
;var wq=T("max_body_size_to_compress",5E5),xq=T("min_body_size_to_compress",500),yq=!0,zq=0,Aq=0,Bq=T("compression_performance_threshold_lr",250),Cq=T("slow_compressions_before_abandon_count",4),Dq=!1,Eq=new Map,Fq=1,Gq=!0;function Hq(){if(typeof Worker==="function"&&uq()&&!Dq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Eq.get(c.key);d&&(Iq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Eq.delete(c.key))}},b=vq();
b&&(b.addEventListener("message",a),b.onerror=function(){Eq.clear()},Dq=!0)}}
function Jq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(yq)try{var g=Kq(b);if(g!=null&&(g>wq||g<xq))d(a,c);else{if(S("gzip_gel_with_worker")&&(S("initial_gzip_use_main_thread")&&!Gq||!S("initial_gzip_use_main_thread"))){Dq||Hq();var h=vq();if(h&&!e){Eq.set(Fq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Fq});Fq++;return}}var k=ml(bq(b));Iq(k,f,a,c,d)}}catch(l){Wl(l),d(a,c)}else d(a,c)}
function Iq(a,b,c,d,e){Gq=!1;var f=V();b.ticks.gelc=f;Aq++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Bq&&(zq++,S("abandon_compression_after_N_slow_zips")?Aq===T("compression_disable_point")&&zq>Cq&&(yq=!1):yq=!1);Lq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Mq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=V(),e={startTime:d,ticks:{},infos:{}},f=b?F("yt.logging.gzipForFetch",!1):!0;if(yq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Kq(g);if(h!=null&&(h>wq||h<xq))return a;c=b?{level:1}:void 0;f=ml(bq(g),c);var k=V();e.ticks.gelc=k;if(b){Aq++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Bq)if(zq++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=zq/Aq;var l=Cq/T("compression_disable_point");Aq>0&&Aq%T("compression_disable_point")===0&&b>=l&&(yq=!1)}else yq=!1;Lq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return Wl(m),a}}else return a}
function Kq(a){try{return(new Blob(a.split(""))).size}catch(b){return Wl(b),null}}
function Lq(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||rq("gel_compression",a,{sampleRate:.1})}
;function Nq(a){a=Object.assign({},a);delete a.Authorization;var b=Qf();if(b){var c=new Dj;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=od(c.digest(),3)}return a}
;var Oq;function Pq(){Oq||(Oq=new Zn("yt.innertube"));return Oq}
function Qq(a,b,c,d){if(d)return null;d=Pq().get("nextId",!0)||1;var e=Pq().get("requests",!0)||{};e[d]={method:a,request:b,authState:Nq(c),requestTime:Math.round(V())};Pq().set("nextId",d+1,86400,!0);Pq().set("requests",e,86400,!0);return d}
function Rq(a){var b=Pq().get("requests",!0)||{};delete b[a];Pq().set("requests",b,86400,!0)}
function Sq(a){var b=Pq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(V())-d.requestTime<6E4)){var e=d.authState,f=Nq($p(!1));dg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),Tq(a,d.method,e,{}));delete b[c]}}Pq().set("requests",b,86400,!0)}}
;function Uq(a){this.fc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.yb=function(){};
this.now=Date.now;this.Rb=!1;var b;this.Md=(b=a.Md)!=null?b:100;var c;this.Hd=(c=a.Hd)!=null?c:1;var d;this.Fd=(d=a.Fd)!=null?d:2592E6;var e;this.Ed=(e=a.Ed)!=null?e:12E4;var f;this.Gd=(f=a.Gd)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.lc=!!a.lc;var h;this.jc=(h=a.jc)!=null?h:.1;var k;this.zc=(k=a.zc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.yb&&(this.yb=a.yb);a.Rb&&(this.Rb=a.Rb);a.fc&&(this.fc=a.fc);this.W=a.W;this.Ca=a.Ca;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Wc=a.Wc;this.Tc=a.Tc;Vq(this)&&(!this.W||this.W("networkless_logging"))&&Wq(this)}
function Wq(a){Vq(a)&&!a.Rb&&(a.h=!0,a.lc&&Math.random()<=a.jc&&a.ga.de(a.V),Xq(a),a.fa.ta()&&a.cc(),a.fa.listen(a.Wc,a.cc.bind(a)),a.fa.listen(a.Tc,a.od.bind(a)))}
p=Uq.prototype;p.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(Vq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.V).then(function(e){d.id=e;c.fa.ta()&&Yq(c,d)}).catch(function(e){Yq(c,d);
Zq(c,e)})}else this.sendFn(a,b)};
p.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(Vq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.ta()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.V).catch(function(l){Zq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
Zq(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
p.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(Vq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.xb(d.id,c.V):e=!0;c.fa.mb&&c.W&&c.W("vss_network_hint")&&c.fa.mb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.V).then(function(g){d.id=g;e&&c.ga.xb(d.id,c.V)}).catch(function(g){Zq(c,g)})}else this.sendFn(a,b,void 0,!0)};
p.cc=function(){var a=this;if(!Vq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return c.yield(a.ga.td("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(Yq(a,b),3):(a.od(),c.return());a.i&&(a.i=0,a.cc());c.h=0})},this.Md))};
p.od=function(){this.Ca.qa(this.i);this.i=0};
function Yq(a,b){var c;return B(function(d){switch(d.h){case 1:if(!Vq(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.A(2);break}return d.yield(a.ga.Ie(b.id,a.V),3);case 3:(c=d.i)||a.yb(Error("The request cannot be found in the database."));case 2:if($q(a,b,a.Fd)){d.A(4);break}a.yb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.A(5);break}return d.yield(a.ga.xb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=ar(a,
b));if(!b){d.A(0);break}if(!b.skipRetry||b.id===void 0){d.A(8);break}return d.yield(a.ga.xb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function ar(a,b){if(!Vq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.h){case 1:g=br(f);(h=cr(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.zc)){m.A(2);break}if(!a.fa.Ec){m.A(3);break}return m.yield(a.fa.Ec(),3);case 3:if(a.fa.ta()){m.A(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.A(6);
break}return m.yield(a.ga.Xc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.zc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.A(8);break}return b.sendCount<a.Hd?m.yield(a.ga.Xc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.ga.xb(b.id,a.V),8);case 12:a.Ca.pa(function(){a.fa.ta()&&a.cc()},a.Gd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.A(2):h.yield(a.ga.xb(b.id,a.V),2);a.fa.mb&&a.W&&a.W("vss_network_hint")&&a.fa.mb(!0);d(e,f);h.h=0})};
return b}
function $q(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Xq(a){if(!Vq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.td("QUEUED",a.V).then(function(b){b&&!$q(a,b,a.Ed)?a.Ca.pa(function(){return B(function(c){if(c.h==1)return b.id===void 0?c.A(2):c.yield(a.ga.Xc(b.id,a.V),2);Xq(a);c.h=0})}):a.fa.ta()&&a.cc()})}
function Zq(a,b){a.Td&&!a.fa.ta()?a.Td(b):a.handleError(b)}
function Vq(a){return!!a.V||a.fc}
function br(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function cr(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var dr;
function er(){if(dr)return dr();var a={};dr=Jp("LogsDatabaseV2",{Gb:(a.LogsRequestsStore={Nb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Po(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Wo(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return dr()}
;function fr(a){return ip(er(),a)}
function gr(a,b){var c,d,e,f;return B(function(g){if(g.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(fr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Ro(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();hr(c);return g.return(f)})}
function ir(a,b){var c,d,e,f,g,h,k,l;return B(function(m){if(m.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(fr(b),2);if(m.h!=3)return d=m.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k="prev",S("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(Oo(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return bp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),a==="NEW"&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=V();hr(c);return m.return(l)})}
function jr(a,b){var c;return B(function(d){if(d.h==1)return d.yield(fr(b),2);c=d.i;return d.return(Oo(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Ko(f.h.put(g,void 0)).then(function(){return g})})}))})}
function kr(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.h==1)return f.yield(fr(b),2);e=f.i;return f.return(Oo(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Ko(h.h.put(k,void 0)).then(function(){return k})):Eo.resolve(void 0)})}))})}
function lr(a,b){var c;return B(function(d){if(d.h==1)return d.yield(fr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function mr(a){var b,c;return B(function(d){if(d.h==1)return d.yield(fr(a),2);b=d.i;c=V()-2592E6;return d.yield(Oo(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return Yo(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return Zo(f)})})}),0)})}
function nr(){B(function(a){return a.yield(Fp(),0)})}
function hr(a){S("nwl_csi_killswitch")||rq("networkless_performance",a,{sampleRate:1})}
;var or={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,
miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,
shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515};var pr={},qr=Jp("ServiceWorkerLogsDatabase",{Gb:(pr.SWHealthLog={Nb:1},pr),shared:!0,upgrade:function(a,b){b(1)&&Wo(Po(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function rr(a){return ip(qr(),a)}
function sr(a){var b,c;B(function(d){if(d.h==1)return d.yield(rr(a),2);b=d.i;c=V()-2592E6;return d.yield(Oo(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return Yo(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return Zo(f)})})}),0)})}
function tr(a){var b;return B(function(c){if(c.h==1)return c.yield(rr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var ur={},vr=0;function wr(a){var b=b===void 0?{}:b;var c=new Image,d=""+vr++;ur[d]=c;c.onload=c.onerror=function(){delete ur[d]};
b.Sh&&(c.referrerPolicy="no-referrer");c.src=a}
;var xr;function yr(){xr||(xr=new Zn("yt.offline"));return xr}
function zr(a){if(S("offline_error_handling")){var b=yr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);yr().set("errors",b,2592E3,!0)}}
;function Ar(){this.h=new Map;this.i=!1}
function Br(){if(!Ar.instance){var a=F("yt.networkRequestMonitor.instance")||new Ar;E("yt.networkRequestMonitor.instance",a);Ar.instance=a}return Ar.instance}
Ar.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Ar.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Ar.prototype.removeParams=function(a){return a.split("?")[0]};
Ar.prototype.removeParams=Ar.prototype.removeParams;Ar.prototype.isEndpointCFR=Ar.prototype.isEndpointCFR;Ar.prototype.requestComplete=Ar.prototype.requestComplete;Ar.getInstance=Br;function Cr(){Ih.call(this);var a=this;this.j=!1;this.h=yj();this.h.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=yr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Vl(d)}yr().set("errors",{},2592E3,!0)}}})}
w(Cr,Ih);function Dr(){if(!Cr.instance){var a=F("yt.networkStatusManager.instance")||new Cr;E("yt.networkStatusManager.instance",a);Cr.instance=a}return Cr.instance}
p=Cr.prototype;p.ta=function(){return this.h.ta()};
p.mb=function(a){this.h.h=a};
p.xe=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
p.ne=function(){this.j=!0};
p.listen=function(a,b){return this.h.listen(a,b)};
p.Ec=function(a){a=wj(this.h,a);a.then(function(b){S("use_cfr_monitor")&&Br().requestComplete("generate_204",b)});
return a};
Cr.prototype.sendNetworkCheckRequest=Cr.prototype.Ec;Cr.prototype.listen=Cr.prototype.listen;Cr.prototype.enableErrorFlushing=Cr.prototype.ne;Cr.prototype.getWindowStatus=Cr.prototype.xe;Cr.prototype.networkStatusHint=Cr.prototype.mb;Cr.prototype.isNetworkAvailable=Cr.prototype.ta;Cr.getInstance=Dr;function Er(a){a=a===void 0?{}:a;Ih.call(this);var b=this;this.h=this.u=0;this.j=Dr();var c=F("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Fr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Fr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Jh(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Jh(b,"publicytnetworkstatus-offline")})))}
w(Er,Ih);Er.prototype.ta=function(){var a=F("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Er.prototype.mb=function(a){var b=F("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Er.prototype.Ec=function(a){var b=this,c;return B(function(d){c=F("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&Br().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.mb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function Fr(a,b){a.rateLimit?a.h?(zj.qa(a.u),a.u=zj.pa(function(){a.o!==b&&(Jh(a,b),a.o=b,a.h=V())},a.rateLimit-(V()-a.h))):(Jh(a,b),a.o=b,a.h=V()):Jh(a,b)}
;var Gr;function Hr(){var a=Uq.call;Gr||(Gr=new Er({Jh:!0,Ah:!0}));a.call(Uq,this,{ga:{de:mr,xb:lr,td:ir,Ie:jr,Xc:kr,set:gr},fa:Gr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;Wl(new U(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else Vl(b)},
yb:Wl,sendFn:Ir,now:V,Td:zr,Ca:Yn(),Wc:"publicytnetworkstatus-online",Tc:"publicytnetworkstatus-offline",lc:!0,jc:.1,zc:T("potential_esf_error_limit",10),W:S,Rb:!(qn()&&Jr())});this.j=new bj;S("networkless_immediately_drop_all_requests")&&nr();Gp("LogsDatabaseV2")}
w(Hr,Uq);function Kr(){var a=F("yt.networklessRequestController.instance");a||(a=new Hr,E("yt.networklessRequestController.instance",a),S("networkless_logging")&&vp().then(function(b){a.V=b;Wq(a);a.j.resolve();a.lc&&Math.random()<=a.jc&&a.V&&sr(a.V);S("networkless_immediately_drop_sw_health_store")&&Lr(a)}));
return a}
Hr.prototype.writeThenSend=function(a,b){b||(b={});b=Mr(a,b);qn()||(this.h=!1);Uq.prototype.writeThenSend.call(this,a,b)};
Hr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Mr(a,b);qn()||(this.h=!1);Uq.prototype.sendThenWrite.call(this,a,b,c)};
Hr.prototype.sendAndWrite=function(a,b){b||(b={});b=Mr(a,b);qn()||(this.h=!1);Uq.prototype.sendAndWrite.call(this,a,b)};
Hr.prototype.awaitInitialization=function(){return this.j.promise};
function Lr(a){var b;B(function(c){if(!a.V)throw b=Ao("clearSWHealthLogsDb"),b;return c.return(tr(a.V).catch(function(d){a.handleError(d)}))})}
function Ir(a,b,c,d){d=d===void 0?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&Nr(a,b);if(S("use_request_time_ms_header"))b.headers&&gm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)tm(a,void 0,"POST",f,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)tm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new oc({url:a});if(k.u?typeof k.i!=="string"||k.i.length===0?0:{version:3,ke:k.i,ae:nc(k.j,"act=1","ri=1",pc(k))}:k.M&&{version:4,ke:nc(k.j,"dct=1","suid="+k.o,""),ae:nc(k.j,"act=1","ri=1","suid="+k.o)}){var l=$b(ac(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(jc),r=ic(a,0,"ri",n);if(r<0)var t=null;else{var v=a.indexOf("&",r);if(v<0||v>n)v=n;t=decodeURIComponent(a.slice(r+3,v!==-1?v:0).replace(/\+/g," "))}m=t!=="1"}var x=
!m;break b}}catch(G){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(G){}z=!1}c=z?!0:!1}else c=!1;c||wr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Jq(a,b.postBody,b,ym,d)):Jq(a,JSON.stringify(b.postParams),b,xm,d):ym(a,b)}
function Mr(a,b){S("use_event_time_ms_header")&&gm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(V())));return b}
function Nr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Br().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Br().requestComplete(a,!0);d(e,f)}}
function Jr(){return bc(document.location.toString())!=="www.youtube-nocookie.com"}
;var Or=!1,Pr=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Or};E("ytNetworklessLoggingInitializationOptions",Pr);function Qr(){var a;B(function(b){if(b.h==1)return b.yield(vp(),2);a=b.i;if(!a||!qn()&&!S("nwl_init_require_datasync_id_killswitch")||!Jr())return b.A(0);Or=!0;Pr.isNwlInitialized=Or;return b.yield(Kr().awaitInitialization(),0)})}
;function Rr(a){var b=this;this.config_=null;a?this.config_=a:Xp()&&(this.config_=Yp());tn(function(){Sq(b)},5E3)}
Rr.prototype.isReady=function(){!this.config_&&Xp()&&(this.config_=Yp());return!!this.config_};
function Tq(a,b,c,d){function e(n){n=n===void 0?!1:n;var r;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||S("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(r=Qq(b,c,l,k)),r)){var t=g.onSuccess,v=g.onFetchSuccess;g.onSuccess=function(G,K){Rq(r);t(G,K)};
c.onFetchSuccess=function(G,K){Rq(r);v(G,K)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Kr().writeThenSend(m,g):Kr().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var z=g.postBody;typeof z!=="string"&&(z=JSON.stringify(g.postBody));Jq(m,z,g,ym,x)}else Jq(m,JSON.stringify(g.postParams),g,xm,x)}else S("web_all_payloads_via_jspb")?ym(m,g):xm(m,g)}catch(G){if(G.name==="InvalidAccessError")r&&(Rq(r),r=0),Wl(Error("An extension is blocking network request."));else throw G;}r&&tn(function(){Sq(a)},5E3)}
!R("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Wl(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);Vl(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.De)&&(h=f);var k=a.config_.Ee||!1,l=$p(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=em(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(F("ytNetworklessLoggingInitializationOptions")?Pr.isNwlInitialized:Or)?tp().then(function(n){e(n)}):e(!1)}
;var Sr=0,Tr=hd?"webkit":gd?"moz":ed?"ms":dd?"o":"";E("ytDomDomGetNextId",F("ytDomDomGetNextId")||function(){return++Sr});var Ur={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Vr(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Ur||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Wr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Vr.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Vr.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Vr.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var $f=D.ytEventsEventsListeners||{};E("ytEventsEventsListeners",$f);var Xr=D.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",Xr);
function Yr(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Zf(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&dg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Zr(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Yr(a,b,c,d);if(e)return e;e=++Xr.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Vr(h);if(!ng(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Vr(h);
h.currentTarget=a;return c.call(a,h)};
g=Ul(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),$r()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);$f[e]=[a,b,c,g,d];return e}
function as(a){a&&(typeof a=="string"&&(a=[a]),Mb(a,function(b){if(b in $f){var c=$f[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?$r()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete $f[b]}}))}
var $r=Yh(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function bs(a){this.G=a;this.h=null;this.o=0;this.D=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=Zr(window,"mousemove",Xa(this.Y,this));a=Xa(this.P,this);typeof a==="function"&&(a=Ul(a));this.Z=window.setInterval(a,25)}
ab(bs,H);bs.prototype.Y=function(a){a.h===void 0&&Wr(a);var b=a.h;a.i===void 0&&Wr(a);this.h=new Wf(b,a.i)};
bs.prototype.P=function(){if(this.h){var a=V();if(this.o!=0){var b=this.D,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.D=this.h;this.j=(this.j+1)%4}};
bs.prototype.ba=function(){window.clearInterval(this.Z);as(this.U)};var cs={};
function ds(a){var b=a===void 0?{}:a;a=b.Te===void 0?!1:b.Te;b=b.oe===void 0?!0:b.oe;if(F("_lact",window)==null){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;E("_lact",c,window);E("_fact",c,window);c==-1&&es();Zr(document,"keydown",es);Zr(document,"keyup",es);Zr(document,"mousedown",es);Zr(document,"mouseup",es);a?Zr(window,"touchmove",function(){ks("touchmove",200)},{passive:!0}):(Zr(window,"resize",function(){ks("resize",200)}),b&&Zr(window,"scroll",function(){ks("scroll",200)}));
new bs(function(){ks("mouse",100)});
Zr(document,"touchstart",es,{passive:!0});Zr(document,"touchend",es,{passive:!0})}}
function ks(a,b){cs[a]||(cs[a]=!0,zj.pa(function(){es();cs[a]=!1},b))}
function es(){F("_lact",window)==null&&ds();var a=Date.now();E("_lact",a,window);F("_fact",window)==-1&&E("_fact",a,window);(a=F("ytglobal.ytUtilActivityCallback_"))&&a()}
function ls(){var a=F("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var ms=D.ytPubsubPubsubInstance||new N,ns=D.ytPubsubPubsubSubscribedKeys||{},ps=D.ytPubsubPubsubTopicToKeys||{},qs=D.ytPubsubPubsubIsSynchronous||{};function rs(a,b){var c=ss();if(c&&b){var d=c.subscribe(a,function(){function e(){ns[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{qs[a]?e():mm(e,0)}catch(g){Vl(g)}},void 0);
ns[d]=!0;ps[a]||(ps[a]=[]);ps[a].push(d);return d}return 0}
function ts(a){var b=ss();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Mb(a,function(c){b.unsubscribeByKey(c);delete ns[c]}))}
function us(a,b){var c=ss();c&&c.publish.apply(c,arguments)}
function vs(a){var b=ss();if(b)if(b.clear(a),a)ws(a);else for(var c in ps)ws(c)}
function ss(){return D.ytPubsubPubsubInstance}
function ws(a){ps[a]&&(a=ps[a],Mb(a,function(b){ns[b]&&delete ns[b]}),a.length=0)}
N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.dc;N.prototype.publish=N.prototype.sb;N.prototype.clear=N.prototype.clear;E("ytPubsubPubsubInstance",ms);E("ytPubsubPubsubTopicToKeys",ps);E("ytPubsubPubsubIsSynchronous",qs);E("ytPubsubPubsubSubscribedKeys",ns);var xs=Symbol("injectionDeps");function ys(a){this.name=a}
ys.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function zs(a){this.key=a}
function As(a){return new zs(a)}
function Bs(){this.i=new Map;this.j=new Map;this.h=new Map}
function Cs(a,b){a.i.set(b.Bc,b);var c=a.j.get(b.Bc);if(c)try{c.Rh(a.resolve(b.Bc))}catch(d){c.Ph(d)}}
Bs.prototype.resolve=function(a){return a instanceof zs?Ds(this,a.key,[],!0):Ds(this,a,[])};
function Ds(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Pd!==void 0)var e=d.Pd;else if(d.Af)e=d[xs]?Es(a,d[xs],c):[],e=d.Af.apply(d,A(e));else if(d.Od){e=d.Od;var f=e[xs]?Es(a,e[xs],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(A(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Vh||a.h.set(b,e);return e}
function Es(a,b,c){return b?b.map(function(d){return d instanceof zs?Ds(a,d.key,c,!0):Ds(a,d,c)}):[]}
;var Fs;function Gs(){Fs||(Fs=new Bs);return Fs}
;var Hs=window;function Is(){var a,b;return"h5vcc"in Hs&&((a=Hs.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Hs.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Hs&&Hs.performance.mark&&Hs.performance.measure?2:0}
function Js(a){var b=Is();switch(b){case 1:Hs.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Hs.performance.mark(a+"-start");break;case 0:break;default:xb(b,"unknown trace type")}}
function Ks(a){var b=Is();switch(b){case 1:Hs.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Hs.performance.mark(c);Hs.performance.measure(a,b,c);break;case 0:break;default:xb(b,"unknown trace type")}}
;var Ls=S("web_enable_lifecycle_monitoring")&&Is()!==0,Ms=S("web_enable_lifecycle_monitoring");function Ns(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function Os(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?Yn():d;this.j=c;this.scheduler=d;this.i=new bj;this.h=a;for(a={jb:0};a.jb<this.h.length;a={yc:void 0,jb:a.jb},a.jb++)a.yc=this.h[a.jb],c=function(e){return function(){e.yc.Mc();b.h[e.jb].Ac=!0;b.h.every(function(f){return f.Ac===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.yc),d=this.scheduler.Ra(c,d),this.h[a.jb]=Object.assign({},a.yc,{Mc:c,
jobId:d})}
function Ps(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=y(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.Ac||(a.scheduler.qa(c.jobId),a.scheduler.Ra(c.Mc,10))}
Os.prototype.cancel=function(){for(var a=y(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.Ac||this.scheduler.qa(b.jobId),b.Ac=!0;this.i.resolve()};
Os.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function Qs(a){this.state=a;this.plugins=[];this.o=void 0;this.D={};Ls&&Js(this.state)}
p=Qs.prototype;p.install=function(a){this.plugins.push(a);return this};
p.uninstall=function(){var a=this;C.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
p.transition=function(a,b){var c=this;Ls&&Ks(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Ps(this.j),this.j=void 0);Rs(this,a,b);this.state=a;Ls&&Js(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Ss(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Ss(a,b){var c=b.filter(function(e){return Ts(a,e)===10}),d=b.filter(function(e){return Ts(a,e)!==10});
return a.D.Uh?function(){var e=C.apply(0,arguments);return B(function(f){if(f.h==1)return f.yield(a.Ze.apply(a,[c].concat(A(e))),2);a.Jd.apply(a,[d].concat(A(e)));f.h=0})}:function(){var e=C.apply(0,arguments);
a.af.apply(a,[c].concat(A(e)));a.Jd.apply(a,[d].concat(A(e)))}}
p.af=function(a){for(var b=C.apply(1,arguments),c=Yn(),d=y(a),e=d.next(),f={};!e.done;f={Sb:void 0},e=d.next())f.Sb=e.value,c.Lb(function(g){return function(){Us(g.Sb.name);Vs(function(){return g.Sb.callback.apply(g.Sb,A(b))});
Ws(g.Sb.name)}}(f))};
p.Ze=function(a){var b=C.apply(1,arguments),c,d,e,f,g;return B(function(h){h.h==1&&(c=Yn(),d=y(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.A(0);f.Xa=e.value;f.ec=void 0;g=function(k){return function(){Us(k.Xa.name);var l=Vs(function(){return k.Xa.callback.apply(k.Xa,A(b))});
$d(l)?k.ec=S("web_lifecycle_error_handling_killswitch")?l.then(function(){Ws(k.Xa.name)}):l.then(function(){Ws(k.Xa.name)},function(m){Ns(m);
Ws(k.Xa.name)}):Ws(k.Xa.name)}}(f);
c.Lb(g);return f.ec?h.yield(f.ec,3):h.A(3)}f={Xa:void 0,ec:void 0};e=d.next();return h.A(2)})};
p.Jd=function(a){var b=C.apply(1,arguments),c=this,d=a.map(function(e){return{Mc:function(){Us(e.name);Vs(function(){return e.callback.apply(e,A(b))});
Ws(e.name)},
priority:Ts(c,e)}});
d.length&&(this.j=new Os(d))};
function Ts(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function Us(a){Ls&&a&&Js(a)}
function Ws(a){Ls&&a&&Ks(a)}
function Rs(a,b,c){Ms&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(Qs.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function Vs(a){if(S("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Ns(b)}}
;function Xs(a){Qs.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Ys;w(Xs,Qs);Xs.prototype.i=function(a,b){var c=this;this.h=tn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
Xs.prototype.u=function(a,b){this.h&&(zj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function Zs(){Ys||(Ys=new Xs);return Ys}
;var $s=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return $s});function at(){this.store={};this.h={}}
at.prototype.storePayload=function(a,b){a=bt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);S("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
at.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=ct(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,A(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,A(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,A(this.smartExtractMatchingEntries(a))));return c};
at.prototype.extractMatchingEntries=function(a){a=ct(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,A(this.store[a[c]])),delete this.store[a[c]]);return b};
at.prototype.getSequenceCount=function(a){a=ct(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function ct(a,b){var c=bt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&bt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(dt(b.auth,g[0])){var h=b.isJspb;dt(h===void 0?"undefined":h?"true":"false",g[1])&&dt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),dt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function dt(a,b){return a===void 0||a==="undefined"?!0:a===b}
at.prototype.getSequenceCount=at.prototype.getSequenceCount;at.prototype.extractMatchingEntries=at.prototype.extractMatchingEntries;at.prototype.smartExtractMatchingEntries=at.prototype.smartExtractMatchingEntries;at.prototype.storePayload=at.prototype.storePayload;function bt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function et(a,b){if(a)return a[b.name]}
;var ft=T("initial_gel_batch_timeout",2E3),gt=T("gel_queue_timeout_max_ms",6E4),ht=T("gel_min_batch_size",5),jt=void 0;function kt(){this.o=this.h=this.i=0;this.j=!1}
var lt=new kt,mt=new kt,nt=new kt,ot=new kt,pt,qt=!0,rt=D.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",rt);var st={};function tt(){var a=F("yt.logging.ims");a||(a=new at,E("yt.logging.ims",a));return a}
function ut(a,b){if(a.endpoint==="log_event"){vt();var c=wt(a),d=xt(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=or[d||""];var f,g,h,k=Gs().resolve(As(Sp))==null?void 0:(f=Tp())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!S("web_payload_policy_disabled_killswitch"))return;k=zt(e.tier);if(k===400){At(a,b);return}}st[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};tt().storePayload(c,a.payload);Bt(b,c,d==="gelDebuggingEvent")}}
function Bt(a,b,c){function d(){Ct({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(jt=new a);a=T("tvhtml5_logging_max_batch_ads_fork")||T("tvhtml5_logging_max_batch")||T("web_logging_max_batch")||100;var f=V(),g=Dt(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=tt().getSequenceCount(b));c>=1E3?d():c>=a?pt||(pt=Et(function(){d();pt=void 0},0)):f-h>=10&&(Ft(e,b.tier),g.o=f)}
function At(a,b){if(a.endpoint==="log_event"){S("more_accurate_gel_parser")&&tt().storePayload({isJspb:!1},a.payload);vt();var c=wt(a),d=new Map;d.set(c,[a.payload]);var e=xt(a.payload)||"";b&&(jt=new b);return new Zh(function(f,g){jt&&jt.isReady()?Gt(d,jt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function wt(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);rt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Ct(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new Zh(function(e,f){var g=Dt(c,d),h=g.j;g.j=!1;Ht(g.i);Ht(g.h);g.h=0;jt&&jt.isReady()?d===void 0&&S("enable_web_tiered_gel")?It(e,f,a,b,c,300,h):It(e,f,a,b,c,d,h):(Ft(c,d),e())})}
function It(a,b,c,d,e,f,g){var h=jt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=S("enable_web_tiered_gel")?tt().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):tt().extractMatchingEntries(e),k.set(d,f);else for(d=y(Object.keys(st)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?tt().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):tt().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete st[l];Gt(k,h,a,b,c,!1,g)}
function Ft(a,b){function c(){Ct({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Dt(a,b),e=d===ot||d===nt?5E3:gt;S("web_gel_timeout_cap")&&!d.h&&(e=Et(function(){c()},e),d.h=e);
Ht(d.i);e=R("LOGGING_BATCH_TIMEOUT",T("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&qt&&(e=ft);e=Et(function(){T("gel_min_batch_size")>0?tt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=ht&&c():c()},e);
d.i=e}
function Gt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(V()),k=a.size,l=(g===void 0?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=y(a);var m=a.next();for(g={};!m.done;g={Sc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Vc:void 0,Uc:void 0},m=a.next()){var n=y(m.value);m=n.next().value;n=n.next().value;g.batchRequest=fg({context:Zp(b.config_||Yp())});if(!Ma(n)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=rt[m])&&
Jt(g.batchRequest,m,n);delete rt[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Kt(g.batchRequest,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.Vc=function(r){S("start_client_gcf")&&zj.pa(function(){return B(function(t){return t.yield(Lt(r),0)})});
k--;k||c()};
g.Sc=0;g.Uc=function(r){return function(){r.Sc++;if(e.bypassNetworkless&&r.Sc===1)try{Tq(b,l,r.batchRequest,Mt({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Vc,r.Uc,f)),qt=!1}catch(t){Vl(t),d()}k--;k||c()}}(g);
try{Tq(b,l,g.batchRequest,Mt(e,g.dangerousLogToVisitorSession,g.Vc,g.Uc,f)),qt=!1}catch(r){Vl(r),d()}}}
function Mt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,uh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};Nt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function Kt(a,b,c){Nt()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),Ql("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Jt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function vt(){var a;(a=F("yt.logging.transport.enableScrapingForTest"))||(a=om("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||($s=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",$s),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0))}
function Nt(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Et(a,b){return S("transport_use_scheduler")===!1?mm(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?tn(function(){if(Zs().currentState==="none")a();else{var c={};Zs().install((c.none={callback:a},c))}},b):tn(a,b)}
function Ht(a){S("transport_use_scheduler")?zj.qa(a):window.clearTimeout(a)}
function Lt(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=et(d,sl),g=(f=d)==null?void 0:f.hotHashData,h=et(d,rl),l=(k=d)==null?void 0:k.coldHashData,(m=Gs().resolve(As(Sp)))?g?e?n.yield(Up(m,g,e),2):n.yield(Up(m,g),2):n.A(2):n.return()):l?h?n.yield(Vp(m,l,h),0):n.yield(Vp(m,l),0):n.A(0)})}
function Dt(a,b){b=b===void 0?200:b;return a?b===300?ot:mt:b===300?nt:lt}
function xt(a){a=Object.keys(a);a=y(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,or[b])return b}
function zt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Ot=D.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Ot);
function Pt(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ls();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Ot[b]=b in Ot?Ot[b]+1:0,a.sequence={index:Ot[b],groupKey:b},d.endOfSequence&&delete Ot[d.sequenceGroup]);(d.sendIsolatedPayload?At:ut)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function io(a,b,c){c=c===void 0?{}:c;var d=Rr;R("ytLoggingEventsDefaultDisabled",!1)&&Rr===Rr&&(d=null);Pt(a,b,d,c)}
;function Qt(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var Rt=new Set,St=0,Tt=0,Ut=0,Vt=[],Wt=[],Xt=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function ho(a){Yt(a)}
function W(a){Yt(a,"WARNING")}
function Zt(a){a instanceof Error?Yt(a):(a=Ra(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",W(a))}
function Yt(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(St>=5))){d=[];e=y(Wt);for(f=e.next();!f.done;f=e.next()){f=f.value;try{f()&&d.push(f())}catch(z){}}d=[].concat(A(Vt),A(d));var k=Ub(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&
a.args&&a.args.length)for(var r=0;r<a.args.length&&!(n=Qm(a.args[r],"params."+r,c,n),n>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var v="params."+r,x=Sm(t[r]);c[v]=x;n+=v.length+x.length;if(n>500)break}}else c.params=Sm(t)}if(d.length)for(r=0;r<d.length&&!(n=Qm(d[r],"params.context."+r,c,n),n>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:m,
fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Mm();c=y(a.Ya);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.Kh)){a=d.weight;break a}a=y(a.Ta);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=y(Hm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.xc[r.name])for(e=y(c.xc[r.name]),d=e.next();!d.done;d=e.next())if(f=
d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.Qc(f);break}r.params||(r.params={});a=Mm();r.params["params.errorServiceSignature"]="msg="+a.Ya.length+"&cb="+a.Ta.length;r.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new ig(jg,"sample")).constructor!==
ig&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(r);if(r.sampleWeight!==0&&!Rt.has(r.message)){if(g&&S("web_enable_error_204"))$t(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Nm.sb("handleError",r),S("record_app_crashed_web")&&Ut===0&&r.sampleWeight===1&&(Ut++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),io("appCrashed",
g)),Tt++):b==="WARNING"&&Nm.sb("handleWarning",r);if(S("kevlar_gel_error_routing")){g=b;h=h===void 0?{}:h;b:{a=y(Xt);for(c=a.next();!c.done;c=a.next())if(oo(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=
Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));d=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Rl("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(io("clientError",h),(g==="ERROR"||S("errors_flush_gel_always_killswitch"))&&Ct(void 0,void 0,!1))}S("suppress_error_204_logging")||
$t(b,r)}try{Rt.add(r.message)}catch(z){}St++}}}
function $t(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=y(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=y(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];(c=R("LAVA_VERSION"))&&(a.postParams["lava.version"]=c);c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}ym(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function au(a){var b=C.apply(1,arguments);a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push.apply(a.args,A(b))}
;function bu(){this.register=new Map}
function cu(a){a=y(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Oh("ABORTED")}
bu.prototype.clear=function(){cu(this);this.register.clear()};
var du=new bu;var eu=Date.now().toString();
function fu(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(eu)for(a=1,b=0;b<eu.length;b++)d[a%16]^=d[(a-1)%16]/4^eu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var gu,hu=D.ytLoggingDocDocumentNonce_;hu||(hu=fu(),E("ytLoggingDocDocumentNonce_",hu));gu=hu;function iu(a){this.h=a}
p=iu.prototype;p.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
p.getAsJspb=function(){var a=new ul;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&af(a,2,Ae(this.h.veType)),this.h.veCounter!==void 0&&af(a,6,Ae(this.h.veCounter)),this.h.elementIndex!==void 0&&af(a,3,Ae(this.h.elementIndex)),this.h.isCounterfactual&&af(a,5,we(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();mf(a,ul,7,b)}this.h.youtubeData!==void 0&&mf(a,tl,8,this.h.jspbYoutubeData);return a};
p.toString=function(){return JSON.stringify(this.getAsJson())};
p.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
p.getLoggingDirectives=function(){return this.h.loggingDirectives};function ju(a){return R("client-screen-nonce-store",{})[a===void 0?0:a]}
function ku(a,b){b=b===void 0?0:b;var c=R("client-screen-nonce-store");c||(c={},Ql("client-screen-nonce-store",c));c[b]=a}
function lu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function mu(a){return R(lu(a===void 0?0:a))}
E("yt_logging_screen.getRootVeType",mu);function nu(){var a=R("csn-to-ctt-auth-info");a||(a={},Ql("csn-to-ctt-auth-info",a));return a}
function ou(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function pu(a){a=ju(a===void 0?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
E("yt_logging_screen.getCurrentCsn",pu);function qu(a,b,c){var d=nu();(c=pu(c))&&delete d[c];b&&(d[a]=b)}
function ru(a){return nu()[a]}
E("yt_logging_screen.getCttAuthInfo",ru);E("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==ju(c)||b!==R(lu(c)))if(qu(a,d,c),ku(a,c),Ql(lu(c),b),b=function(){setTimeout(function(){a&&io("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:gu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function su(){var a=eg(tu),b;return(new Zh(function(c,d){a.onSuccess=function(e){lm(e)?c(new uu(e)):d(new vu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new vu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new vu("Request timed out","net.timeout",e))};
b=ym("//googleads.g.doubleclick.net/pagead/id",a)})).Fc(function(c){if(c instanceof hi){var d;
(d=b)==null||d.abort()}return di(c)})}
function vu(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(vu,bb);function uu(a){this.xhr=a}
;function wu(){this.X=0;this.h=null}
wu.prototype.then=function(a,b,c){return this.X===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:xu(a):this.X===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:yu(a):this};
wu.prototype.getValue=function(){return this.h};
wu.prototype.isRejected=function(){return this.X==2};
wu.prototype.$goog_Thenable=!0;function yu(a){var b=new wu;a=a===void 0?null:a;b.X=2;b.h=a===void 0?null:a;return b}
function xu(a){var b=new wu;a=a===void 0?null:a;b.X=1;b.h=a===void 0?null:a;return b}
;function zu(a){var b=R("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(cc(a)));return a}
function Au(a){var b={};S("json_condensed_response")&&(b.prettyPrint="false");return a=fm(a,b||{},!1)}
function Bu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:gm(a)?"same-origin":"cors",credentials:gm(a)?"same-origin":"include"};b={};for(var d=y(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Cu(){return Of()||(jd||kd)&&oo("applewebkit")&&!oo("version")&&(!oo("safari")||oo("gsa/"))||id&&oo("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function Du(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function Eu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in yl)if(yl[d]==c.embeddedPlayerMode){b=yl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Fu(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Gu;this.isTimeout=a instanceof vu&&a.errorCode=="net.timeout";this.isCanceled=a instanceof hi}
w(Fu,bb);Fu.prototype.name="BiscottiError";function Gu(){bb.call(this,"Biscotti ID is missing from server")}
w(Gu,bb);Gu.prototype.name="BiscottiMissingError";var tu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Hu=null;function Iu(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Cu())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if(cg(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Eu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Jl(){var a=Iu();if(a!==void 0)return di(a);Hu||(Hu=su().then(Ju).Fc(function(b){return Ku(2,b)}));
return Hu}
function Ju(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Gu;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Gu;a=a.id;Kl(a);Hu=xu(a);Lu(18E5,2);return a}
function Ku(a,b){b=new Fu(b);Kl("");Hu=yu(b);a>0&&Lu(12E4,a-1);throw b;}
function Lu(a,b){mm(function(){su().then(Ju,function(c){return Ku(b,c)}).Fc(Xh)},a)}
function Mu(){try{var a=F("yt.ads.biscotti.getId_");return a?a():Jl()}catch(b){return di(b)}}
;var Gb=ra(["data-"]);function Nu(a){a&&(a.dataset?a.dataset[Ou()]="true":Hb(a))}
function Pu(a){return a?a.dataset?a.dataset[Ou()]:a.getAttribute("data-loaded"):null}
var Qu={};function Ou(){return Qu.loaded||(Qu.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Ru(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||eg(b);this.assets=a.assets||{};this.attrs=a.attrs||eg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Ru.prototype.clone=function(){var a=new Ru,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];La(c)=="object"?a[b]=eg(c):a[b]=c}return a};var Su=["att/get"],Tu=["share/get_share_panel"],Uu=["share/get_web_player_share_panel"],Vu=["feedback"],Wu=["notification/modify_channel_preference"],Xu=["browse/edit_playlist"],Yu=["subscription/subscribe"],Zu=["subscription/unsubscribe"];var $u=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};E("yt.msgs_",$u);function av(a){Ll($u,arguments)}
;function bv(a,b,c){cv(a,b,c===void 0?null:c)}
function dv(a){a=ev(a);var b=document.getElementById(a);b&&(vs(a),b.parentNode.removeChild(b))}
function fv(a,b){a&&b&&(a=""+Sa(b),(a=gv[a])&&ts(a))}
function cv(a,b,c){c=c===void 0?null:c;var d=ev(a),e=document.getElementById(d),f=e&&Pu(e),g=e&&!f;f?b&&b():(b&&(f=rs(d,b),b=""+Sa(b),gv[b]=f),g||(e=hv(a,d,function(){Pu(e)||(Nu(e),us(d),mm(function(){vs(d)},0))},c)))}
function hv(a,b,c,d){d=d===void 0?null:d;var e=lg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Eb(e,pl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function ev(a){var b=document.createElement("a");wb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Yb(a)}
var gv={};function iv(a){var b=jv(a),c=document.getElementById(b),d=c&&Pu(c);d||c&&!d||(c=kv(a,b,function(){if(!Pu(c)){Nu(c);us(b);var e=Za(vs,b);mm(e,0)}}))}
function kv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=pl(a);Jb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function jv(a){var b=lg("A");wb(b,new pb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Yb(a)}
;function lv(a){var b=C.apply(1,arguments);if(!mv(a)||b.some(function(d){return!mv(d)}))throw Error("Only objects may be merged.");
b=y(b);for(var c=b.next();!c.done;c=b.next())nv(a,c.value)}
function nv(a,b){for(var c in b)if(mv(b[c])){if(c in a&&!mv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});nv(a[c],b[c])}else if(ov(b[c])){if(c in a&&!ov(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);pv(a[c],b[c])}else a[c]=b[c];return a}
function pv(a,b){b=y(b);for(var c=b.next();!c.done;c=b.next())c=c.value,mv(c)?a.push(nv({},c)):ov(c)?a.push(pv([],c)):a.push(c);return a}
function mv(a){return typeof a==="object"&&!Array.isArray(a)}
function ov(a){return typeof a==="object"&&Array.isArray(a)}
;var qv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function rv(a,b){var c=c===void 0?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=bc(window.location.href);e&&d.push(e);e=bc(a);if(Lb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),wb(d,a),a=d.href)if(a=cc(a),a=dc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:pu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&sv(a,b,f)}else sv(a,b)}
function sv(a,b,c){a=tv(a);b=b?fc(b):"";c=c||5;Cu()&&Zm(a,b,c)}
function tv(a){for(var b=y(qv),c=b.next();!c.done;c=b.next())a=lc(a,c.value);return"ST-"+Yb(a).toString(36)}
;function uv(a){eq.call(this,1,arguments);this.csn=a}
w(uv,eq);var nq=new fq("screen-created",uv),vv=[],wv=0,xv=new Map,yv=new Map,zv=new Map;
function Av(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Bv({cttAuthInfo:ru(b)||void 0},b),g=y(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(ag(k)||!k.trackingParams&&!k.veType)&&W(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=Cv(h,b);if(k.veType&&!yv.has(l)&&!zv.has(l)&&!e){if(!S("il_attach_cache_limit")||xv.size<1E3){xv.set(l,[a,b,c,h]);return}S("il_attach_cache_limit")&&xv.size>1E3&&W(new U("IL Attach cache exceeded limit"))}h=Cv(c,b);xv.has(h)?
Dv(c,b):zv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Ob(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Ev("visualElementAttached",f,c):a?Pt("visualElementAttached",c,a,f):io("visualElementAttached",c,f)}
function Ev(a,b,c){vv.push({Se:a,payload:c,Gh:void 0,options:b});wv||(wv=oq())}
function pq(a){if(vv){for(var b=y(vv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,io(c.Se,c.payload,c.options));vv.length=0}wv=0}
function Cv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Dv(a,b){a=Cv(a,b);xv.has(a)&&(b=xv.get(a)||[],Av(b[0],b[1],b[2],[b[3]],!0),xv.delete(a))}
function Bv(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Fv(){try{return!!self.localStorage}catch(a){return!1}}
;function Gv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Hv(a){if(Fv()){var b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Gv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Iv(){if(!Fv())return!1;var a=rn(),b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=Gv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Jv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(R("INNERTUBE_CLIENT_NAME")==="WEB"||R("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Kv(a){if(R("LOGGED_IN",!0)&&Jv()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=bc(window.location.href);c&&b.push(c);c=bc(a);Lb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=cc(a),(b=dc(b))?(b=tv(b),b=(b=$m(b)||null)?cm(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Jv()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&rv(a,b)}}
;function Lv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&rv(a,b);if(c)return!1;Kv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=hc(a,e);Kv(b);a=void 0;a=a===void 0?tb:a;a:if(f=b+f,a=a===void 0?tb:a,!(f instanceof pb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof rb&&c.Ge(f)){f=new pb(f);break a}f=void 0}g=g.location;f=vb(f||qb);f!==void 0&&(g.href=f);return!0}
;function Mv(a){if(cg(R("PLAYER_VARS",{}))!="1"){a&&Il();try{Mu().then(function(){},function(){}),mm(Mv,18E5)}catch(b){Vl(b)}}}
;var Nv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Ov(){var a=a===void 0?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;var b=$b(ac(5,a));if(S("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=dm(a).theme;return Nv.get(c)||null}catch(d){}return null}
;function Pv(){this.h={};if(this.i=bn()){var a=$m("CONSISTENCY");a&&Qv(this,{encryptedTokenJarContents:a})}}
Pv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ga.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=y(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Qv(this,a)}};
function Qv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&Zm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Rv=window.location.hostname.split(".").slice(-2).join(".");function Sv(){this.j=-1;var a=R("LOCATION_PLAYABILITY_TOKEN");R("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=Tv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Uv;function Vv(){Uv=F("yt.clientLocationService.instance");Uv||(Uv=new Sv,E("yt.clientLocationService.instance",Uv));return Uv}
p=Sv.prototype;
p.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
p.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,R("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=Tv(this))&&this.h.set("yt-location-playability-token",a,15552E3):Zm("YT_CL",JSON.stringify({loctok:a}),15552E3,Rv,!0))};
function Tv(a){return a.h===void 0?new Zn("yt-client-location"):a.h}
p.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=Tv(this))&&this.h.remove("yt-location-playability-token"):an("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
p.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;R("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
p.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
p.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function Wv(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=R("INNERTUBE_CONTEXT");if(!d)return Yt(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=fg(d);S("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;fn();var g="USER_INTERFACE_THEME_LIGHT";jn(165)?g="USER_INTERFACE_THEME_DARK":jn(174)?g="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:Ov()||g;e.userInterfaceTheme=f;if(!b){if(f=on())e.connectionType=f;S("web_log_effective_connection_type")&&(f=pn())&&(d.client.effectiveConnectionType=f)}var h;if(S("web_log_memory_total_kbytes")&&((h=D.navigator)==null?0:h.deviceMemory)){var k;h=(k=D.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}S("web_gcf_hashes_innertube")&&(f=Wp())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=dm(D.location.href);!S("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo={graftUrl:D.location.href},S("kevlar_woffle")&&Tm.instance&&(k=Tm.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=
Um(),e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!S("web_lr_app_quality_killswitch")&&(k=R("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!S("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(Na){}l=
void 0}l&&(e.timeZone=l)}(l=R("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=pm();Pv.instance||(Pv.instance=new Pv);e=Pv.instance.h;k=[];h=0;for(var m in e)k[h++]=e[m];d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:k});!S("web_prequest_context_killswitch")&&(m=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=m);l=fn();m=jn(58);l=l.get("gsml","");d.user=Object.assign({},d.user);m&&(d.user.enableSafetyMode=
m);l&&(d.user.lockedSafetyMode=!0);S("warm_op_csn_cleanup")?c&&(b=pu())&&(d.clientScreenNonce=b):!b&&(b=pu())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=F("yt.mdx.remote.remoteClient_"))d.remoteClient=a;Vv().setLocationOnInnerTubeContext(d);try{var n=hm(),r=n.bid;delete n.bid;d.adSignalsInfo={params:[],bid:r};for(var t=y(Object.entries(n)),v=t.next();!v.done;v=t.next()){var x=y(v.value),z=x.next().value,G=x.next().value;n=z;r=G;a=void 0;(a=d.adSignalsInfo.params)==
null||a.push({key:n,value:""+r})}var K,ba;if(((K=d.client)==null?void 0:K.clientName)==="TVHTML5"||((ba=d.client)==null?void 0:ba.clientName)==="TVHTML5_UNPLUGGED"){var ca=R("INNERTUBE_CONTEXT");ca.adSignalsInfo&&(d.adSignalsInfo.advertisingId=ca.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=ca.adSignalsInfo.limitAdTracking)}}catch(Na){Yt(Na)}return d}
;function Xv(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),R("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=R("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function Yv(){this.h={}}
Yv.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
Yv.prototype.get=function(a){if(this.contains(a))return this.h[a]};
Yv.prototype.set=function(a,b){this.h[a]=b};
Yv.prototype.remove=function(a){delete this.h[a]};function Zv(){this.mappings=new Yv}
Zv.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
Zv.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=xb(b)}}return a};
new Zv;function $v(a){return function(){return new a}}
;var aw={},bw=(aw.WEB_UNPLUGGED="^unplugged/",aw.WEB_UNPLUGGED_ONBOARDING="^unplugged/",aw.WEB_UNPLUGGED_OPS="^unplugged/",aw.WEB_UNPLUGGED_PUBLIC="^unplugged/",aw.WEB_CREATOR="^creator/",aw.WEB_KIDS="^kids/",aw.WEB_EXPERIMENTS="^experiments/",aw.WEB_MUSIC="^music/",aw.WEB_REMIX="^music/",aw.WEB_MUSIC_EMBEDDED_PLAYER="^music/",aw.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",aw);
function cw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=bw[b];if(c){c=new RegExp(c);for(var d=y(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(bw).forEach(function(g){var h=y(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=y(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function dw(){}
dw.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?Ym:c;var d={context:Wv(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+cw(this.j());(e=(f=et(a.commandMetadata,wl))==null?void 0:f.apiUrl)&&(b=e);f=Au(zu(b));a=Object.assign({},{command:a},void 0);d={input:f,Za:Bu(f),Ga:d,config:a};d.config.Ob?d.config.Ob.identity=c:d.config.Ob={identity:c};return d}Yt(new U("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(dw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function ew(){}
w(ew,dw);function fw(){}
w(fw,ew);fw.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",Za:Bu("/getDatasyncIdsEndpoint","GET"),Ga:{}}};
fw.prototype.j=function(){return[]};
fw.prototype.i=function(){};
fw.prototype.h=function(){};var gw={},hw=(gw.GET_DATASYNC_IDS=$v(fw),gw);function iw(a){var b;(b=F("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},E("ytcsi."+(a||"")+"data_",b));return b}
function jw(){var a=iw();a.info||(a.info={});return a.info}
function kw(a){a=iw(a);a.metadata||(a.metadata={});return a.metadata}
function lw(a){a=iw(a);a.tick||(a.tick={});return a.tick}
function mw(a){a=iw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function nw(a){a=mw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function ow(a){var b=iw(a).nonce;b||(b=fu(),iw(a).nonce=b);return b}
;function pw(){var a=F("ytcsi.debug");a||(a=[],E("ytcsi.debug",a),E("ytcsi.reference",{}));return a}
function qw(a){a=a||"";var b=F("ytcsi.reference");b||(pw(),b=F("ytcsi.reference"));if(b[a])return b[a];var c=pw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},rw=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.editor=
"LATENCY_ACTION_EDITOR",X.embed="LATENCY_ACTION_EMBED",X.embed_no_video="LATENCY_ACTION_EMBED_NO_VIDEO",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.management="LATENCY_ACTION_MANAGEMENT",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",
X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.projects="LATENCY_ACTION_PROJECTS",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.review="LATENCY_ACTION_REVIEW",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",
X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_preview="LATENCY_ACTION_VIDEO_PREVIEW",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",
X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",
X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",X);function sw(a,b){eq.call(this,1,arguments);this.timer=b}
w(sw,eq);var tw=new fq("aft-recorded",sw);E("ytLoggingGelSequenceIdObj_",D.ytLoggingGelSequenceIdObj_||{});var uw=D.ytLoggingLatencyUsageStats_||{};E("ytLoggingLatencyUsageStats_",uw);function vw(){this.h=0}
function ww(){vw.instance||(vw.instance=new vw);return vw.instance}
vw.prototype.tick=function(a,b,c,d){xw(this,"tick_"+a+"_"+b)||io("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
vw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");xw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,io("latencyActionInfo",a,{cttAuthInfo:c}))};
vw.prototype.jspbInfo=function(){};
vw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");xw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,io("latencyActionSpan",a,{cttAuthInfo:c}))};
function xw(a,b){uw[b]=uw[b]||{count:0};var c=uw[b];c.count++;c.time=V();a.h||(a.h=tn(function(){var d=V(),e;for(e in uw)uw[e]&&d-uw[e].time>6E4&&delete uw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||W(c)),!0):!1}
;var yw=window;function zw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Aw(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Bw(e.requestStart),e.responseEnd=Bw(e.responseEnd),e.redirectStart=Bw(e.redirectStart),e.redirectEnd=Bw(e.redirectEnd),e.domainLookupEnd=Bw(e.domainLookupEnd),e.connectStart=Bw(e.connectStart),e.connectEnd=
Bw(e.connectEnd),e.responseStart=Bw(e.responseStart),e.secureConnectionStart=Bw(e.secureConnectionStart),e.domainLookupStart=Bw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=S("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Bw(a){return Math.round(Cw()+a)}
function Cw(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=yw.performance||yw.mozPerformance||yw.msPerformance||yw.webkitPerformance||new zw;var Dw=!1,Ew=!1,Fw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"};Xa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||Xh,Y);function Gw(a,b){if(!S("web_csi_action_sampling_enabled")||!iw(b).actionDisabled){var c=qw(b||"");lv(c.info,a);a.loadType&&(c=a.loadType,kw(b).loadType=c);lv(nw(b),a);c=ow(b);b=iw(b).cttAuthInfo;ww().info(a,c,b)}}
function Hw(){var a,b,c,d;return((d=Gs().resolve(As(Sp))==null?void 0:(a=Tp())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!S("web_csi_action_sampling_enabled")||!iw(c).actionDisabled){var d=ow(c),e;if(e=S("web_csi_debug_sample_enabled")&&d){(Gs().resolve(As(Sp))==null?0:Tp())&&!Ew&&(Ew=!0,Z("gcfl",V(),c));var f,g,h;e=(Gs().resolve(As(Sp))==null?void 0:(f=Tp())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Hw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;iw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Gw(f,c));iw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||S("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);try{Y.mark(e,
{startTime:f})}catch(k){}}e=qw(c||"");e.tick[a]=b||V();if(e.callback&&e.callback[a])for(e=y(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=mw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=lw(c);e=b||V();S("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=iw(c).cttAuthInfo;a==="_start"?(a=ww(),xw(a,"baseline_"+d)||io("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):ww().tick(a,d,b,f);Iw(c);return e}}}
function Jw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Tr+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Kw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=y(Object.entries(R("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Lw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);zb(document)&&a.setAttribute("nonce",zb(document));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Cw(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Mw(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Nb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Pb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",Bw(b.startTime)),Z("wffe",Bw(b.responseEnd)))}
function Nw(a){var b=Ow("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Ow(b[d],a);if(e)return e}return NaN}
function Ow(a,b){if(a=lw(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Iw(a){var b=Ow("_start",a),c=Nw(a),d=S("enable_cow_info_csi")||!Dw;b&&c&&d&&(kq(tw,new sw(Math.round(c-b),a)),Dw=!0)}
function Pw(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Qb(a,function(c){return c.name==="first-paint"}))return Bw(a.startTime)}var b;
S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.Mh;return b?Math.max(0,b):0}
;function Qw(a,b){Ul(function(){qw("").info.actionType=a;b&&Ql("TIMING_AFT_KEYS",b);Ql("TIMING_ACTION",a);var c=Kw();Object.keys(c).length>0&&Gw(c);c={isNavigation:!0,actionType:rw[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=R("PREVIOUS_ACTION");d&&(c.previousAction=rw[d]||"LATENCY_ACTION_UNKNOWN");if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=pu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Jw();if(d===1||d===-1)c.isVisible=!0;kw();jw();
c.loadType="cold";d=jw();var e=Aw(),f=Cw(),g=R("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=Pw();d>0&&Z("fpt",d);d=Aw();d.isPerformanceNavigationTiming&&Gw({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Cw()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Mw();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Fw)Fw.hasOwnProperty(h)&&(e=Fw[h],
Lw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=y(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Gw(c);c=mw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=nw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(kw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=lw();e=mw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,Ow(k));else if(S("log_repeated_ytcsi_ticks"))for(f=
y(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=y(h);for(e=h.next();!e.done;e=h.next())d=e.value,lv(c,d),lv(k,d),d=!0;d&&Gw(k)}E("ytglobal.timingready_",!0);k=R("TIMING_ACTION");F("ytglobal.timingready_")&&k&&Rw()&&Nw()&&Iw()})()}
function Rw(a){return Ul(function(){return Sw("_start",a)})()}
function Tw(a,b,c){Ul(Gw)(a,b,c===void 0?!1:c)}
function Uw(a,b,c){return Ul(Z)(a,b,c)}
function Sw(a,b){return Ul(function(){var c=lw(b);return a in c})()}
function Vw(a){if(!S("universal_csi_network_ticks"))return"";a=$b(ac(5,a))||"";for(var b=Object.keys(cq),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function Ww(a){if(!S("universal_csi_network_ticks"))return function(){};
var b=cq[a];return b?(Xw(b),function(){var c=S("universal_csi_network_ticks")?(c=dq[a])?Xw(c):!1:!1;return c}):function(){}}
function Xw(a){return Ul(function(){if(Sw(a))return!1;Uw(a,void 0,void 0);return!0})()}
function Yw(a){Ul(function(){if(!Rw("attestation_challenge_fetch")||Sw(a,"attestation_challenge_fetch"))return!1;Uw(a,void 0,"attestation_challenge_fetch");return!0})()}
function Zw(){Ul(function(){var a=ow();requestAnimationFrame(function(){setTimeout(function(){a===ow()&&Uw("ol",void 0,void 0)},0)})})()}
var $w=window;$w.ytcsi&&($w.ytcsi.infoGel=Tw,$w.ytcsi.tick=Uw);function ax(a,b){var c=C.apply(2,arguments);a=a===void 0?0:a;U.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(ax,U);var bx="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),cx=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function dx(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.Zb||(a.Zb={});a.Zb=Object.assign({},hw,a.Zb)}
function ex(a,b,c,d){if(dx.instance!==void 0){if(d=dx.instance,a=[a!==d.u,b!==d.fa,c!==d.j,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else dx.instance=new dx(a,b,c,d)}
function fx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?Ym:c;var d=gx(a,b);return d?new Zh(function(e,f){var g,h,k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new U("Error: Failed to build request for command.",b));n.A(0);break}Kv(h.input);l=((k=h.Za)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.Ld){m=hx(h.config,l);n.A(4);break}return n.yield(ix(h.config,l),5);case 5:m=n.i;case 4:e(jx(a,h,m)),n.h=
0}})}):di(new U("Error: No request builder found for command.",b))}
function kx(a,b){function c(){}
var d="/youtubei/v1/"+cw(Su);var e=e===void 0?{Ob:{identity:Ym}}:e;var f=f===void 0?!0:f;c=Ww(Vw(d));b.context||(b.context=Wv(void 0,f));return new Zh(function(g){var h,k,l,m,n;return B(function(r){if(r.h==1)return h=zu(d),k=gm(h)?"same-origin":"cors",a.j.Ld?(l=hx(e,k),r.A(2)):r.yield(ix(e,k),3);r.h!=2&&(l=r.i);m=Au(zu(d));n={input:m,Za:Bu(m),Ga:b,config:e};g(jx(a,n,l,c));r.h=0})})}
function lx(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=y(bx);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function jx(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,r,t,v,x,z,G,K,ba,ca,Na,Kb,ja,Ya,Pa,Qa,Oa,eh,fh,gs,hs,is,js;return B(function(ia){switch(ia.h){case 1:ia.A(2);break;case 3:if((e=ia.i)&&!e.isExpired())return ia.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ga)==null?0:g.context)){ia.A(4);break}h=b.Ga.context;ia.A(5);break;case 5:k=y([]),l=k.next();case 8:if(l.done){ia.A(4);break}m=l.value;return ia.yield(m.Nh(h),9);case 9:l=k.next();ia.A(8);break;case 4:if((n=a.i)==null||!n.Th(b.input,b.Ga)){ia.A(12);break}return ia.yield(a.i.Ih(b.input,
b.Ga),13);case 13:return r=ia.i,lx(a,r,b),ia.return(r);case 12:return(x=(v=b.config)==null?void 0:v.Qh)&&a.h.has(x)?t=a.h.get(x):(z=JSON.stringify(b.Ga),ba=(K=(G=b.Za)==null?void 0:G.headers)!=null?K:{},b.Za=Object.assign({},b.Za,{headers:Object.assign({},ba,c)}),ca=Object.assign({},b.Za),b.Za.method==="POST"&&(ca=Object.assign({},ca,{body:z})),((Na=b.config)==null?0:Na.Xe)&&Uw(b.config.Xe),Kb=function(){return a.fa.fetch(b.input,ca,b.config)},t=Kb(),x&&a.h.set(x,t)),ia.yield(t,14);
case 14:if((ja=ia.i)&&"error"in ja&&((Ya=ja)==null?0:(Pa=Ya.error)==null?0:Pa.details))for(Qa=ja.error.details,Oa=y(Qa),eh=Oa.next();!eh.done;eh=Oa.next())fh=eh.value,(gs=fh["@type"])&&cx.indexOf(gs)>-1&&(delete fh["@type"],ja=fh);x&&a.h.has(x)&&a.h.delete(x);((hs=b.config)==null?0:hs.Ye)&&Uw(b.config.Ye);if(ja||(is=a.i)==null||!is.wh(b.input,b.Ga)){ia.A(15);break}return ia.yield(a.i.Hh(b.input,b.Ga),16);case 16:ja=ia.i;case 15:return lx(a,ja,b),((js=b.config)==null?0:js.Ue)&&Uw(b.config.Ue),d(),
ia.return(ja||void 0)}})}
function gx(a,b){a:{a=a.u;var c,d=(c=et(b,xl))==null?void 0:c.signal;if(d&&a.Zb&&(c=a.Zb[d])){var e=c();break a}var f;if((c=(f=et(b,vl))==null?void 0:f.request)&&a.he&&(f=a.he[c])){e=f();break a}for(e in b)if(a.pd[e]&&(b=a.pd[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function ix(a,b){var c,d,e,f;return B(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Ob)==null?void 0:d.sessionIndex;var h=g.yield;var k=Xm(0,{sessionIndex:e});if(!(k instanceof Zh)){var l=new Zh(Xh);$h(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Xv(b),f)))})}
function hx(a,b){var c;a=a==null?void 0:(c=a.Ob)==null?void 0:c.sessionIndex;c=Xm(0,{sessionIndex:a});return Object.assign({},Xv(b),c)}
;var mx=new ys("INNERTUBE_TRANSPORT_TOKEN");function nx(){}
w(nx,ew);nx.prototype.j=function(){return Yu};
nx.prototype.i=function(a){return et(a,Hl)||void 0};
nx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(nx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ox(){}
w(ox,ew);ox.prototype.j=function(){return Zu};
ox.prototype.i=function(a){return et(a,Gl)||void 0};
ox.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(ox.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var px=new ys("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function qx(a){this.M=a}
w(qx,ew);qx.prototype.j=function(){return Tu};
qx.prototype.i=function(a){return et(a,Bl)||et(a,Cl)||et(a,Al)};
qx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.M)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.M.i(b.clientParamIdentifier)}};
qx[xs]=[px];function rx(){}
w(rx,ew);rx.prototype.j=function(){return Vu};
rx.prototype.i=function(a){return et(a,zl)||void 0};
rx.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(rx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function sx(){}
w(sx,ew);sx.prototype.j=function(){return Wu};
sx.prototype.i=function(a){return et(a,Fl)||void 0};
sx.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function tx(){}
w(tx,ew);tx.prototype.j=function(){return Xu};
tx.prototype.i=function(a){return et(a,El)||void 0};
tx.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function ux(){}
w(ux,ew);ux.prototype.j=function(){return Uu};
ux.prototype.i=function(a){return et(a,Dl)};
ux.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var vx=new ys("FETCH_FN_TOKEN"),wx=new ys("PARSE_FN_TOKEN"),xx=new ys("WINDOW_REQUEST_TOKEN");var yx=new ys("NETWORK_SLI_TOKEN");function zx(a,b,c,d){this.h=a;this.i=b;this.j=c;this.o=d}
zx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return B(function(h){e=Ax(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){W(k);
if((c==null?0:c.re)&&k instanceof ax&&k.errorType===1)return Promise.reject(k)}))})};
function Ax(a,b,c){if(a.h){var d=$b(ac(5,lc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}d=c;S("wug_networking_gzip_request")&&(d=Mq(c));var e;return new ((e=a.o)!=null?e:window.Request)(b,d)}
zx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.He)&&a.ok)return uf(b.He,e);e=e.replace(")]}'","");if((b==null?0:b.re)&&e)try{var f=d(e)}catch(h){throw new ax(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Ch(),c=c.then(function(e){W(new U("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
zx[xs]=[As(yx),As(vx),As(wx),As(xx)];var Bx=new ys("NETWORK_MANAGER_TOKEN");var Cx;function Dx(){var a,b;if(!Cx){var c=Gs();Cs(c,{Bc:Bx,Od:zx});var d={pd:{feedbackEndpoint:$v(rx),modifyChannelNotificationPreferenceEndpoint:$v(sx),playlistEditEndpoint:$v(tx),shareEntityEndpoint:$v(qx),subscribeEndpoint:$v(nx),unsubscribeEndpoint:$v(ox),webPlayerShareEntityServiceEndpoint:$v(ux)}},e=Vv(),f={};e&&(f.client_location=e);a===void 0&&(a=Wm());b===void 0&&(b=c.resolve(Bx));ex(d,b,a,f);Cs(c,{Bc:mx,Pd:dx.instance});Cx=c.resolve(mx)}return Cx}
;function Ex(a){var b=new Yi;if(a.interpreterJavascript){var c=nl(a.interpreterJavascript);c=Cb(c).toString();var d=new Wi;rf(d,6,c);mf(b,Wi,1,d)}else a.interpreterUrl&&(c=ol(a.interpreterUrl),c=jb(c).toString(),d=new Xi,rf(d,4,c),mf(b,Xi,2,d));a.interpreterHash&&sf(b,3,a.interpreterHash);a.program&&sf(b,4,a.program);a.globalName&&sf(b,5,a.globalName);a.clientExperimentsStateBlob&&sf(b,7,a.clientExperimentsStateBlob);return b}
function Fx(a){var b={};a=y(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
;function vc(){if(S("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function Gx(a){this.h=a}
Gx.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
Gx.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
Gx.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function Hx(){return new Promise(function(a){var b=window.top;b.ntpevasrs!==void 0?a(new Gx(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new Gx(c))}))})}
;var Ix=[],Jx=!1;function Kx(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&Cu()){var a=R("PLAYER_VARS",{});if(cg(a)!="1"&&!Eu(a)){var b=function(){Jx=!0;"google_ad_status"in window?Ql("DCLKSTAT",1):Ql("DCLKSTAT",2)};
try{bv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ix.push(zj.pa(function(){if(!(Jx||"google_ad_status"in window)){try{fv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Jx=!0;Ql("DCLKSTAT",3)}},5E3))}}}
function Lx(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function Mx(a){this.h=a}
[new Mx("b.f_"),new Mx("j.s_"),new Mx("r.s_"),new Mx("e.h_"),new Mx("i.s_"),new Mx("s.t_"),new Mx("p.h_"),new Mx("s.i_"),new Mx("f.i_"),new Mx("a.b_"),new Mx("a.o_"),new Mx("g.o_"),new Mx("p.i_"),new Mx("p.m_"),new Mx("n.k_"),new Mx("i.f_"),new Mx("a.s_"),new Mx("m.c_"),new Mx("n.h_"),new Mx("o.p_")].reduce(function(a,b){a[b.h]=b;return a},{});function Nx(a,b,c){var d=this;this.network=a;this.options=b;this.o=c;this.h=null;if(b.Yh){var e=new bj;this.h=e.promise;D.ytAtRC&&zj.Ra(function(){var f,g;return B(function(h){if(h.h==1){if(!D.ytAtRC)return h.return();f=Ox(null);return h.yield(d.hb(f),2)}g=h.i;D.ytAtRC&&D.ytAtRC(JSON.stringify(g));h.h=0})},2);
Hx().then(function(f){var g,h,k,l;return B(function(m){if(m.h==1)return f.bindInnertubeChallengeFetcher(function(n){return d.hb(Ox(n))}),m.yield(uc(),2);
g=m.i;h=f.getLatestChallengeResponse();k=h.challenge;if(!k)throw Error("BGE_MACIL");l={challenge:k,fb:Fx(k),vm:g,bgChallenge:new Yi};e.resolve(l);f.registerChallengeFetchedCallback(function(n){n=n.challenge;if(!n)throw Error("BGE_MACR");n={challenge:n,fb:Fx(n),vm:g,bgChallenge:new Yi};d.h=Promise.resolve(n)});
m.h=0})})}else b.preload&&Px(this,new Promise(function(f){tn(function(){f(Qx(d))},0)}))}
Nx.prototype.j=function(){var a=this;return B(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
Nx.prototype.i=function(a,b,c){var d=this,e,f,g;return B(function(h){d.h===null&&Px(d,Qx(d));e=!1;f={};g=function(){var k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d.h,2);case 2:k=n.i;f.challenge=k.challenge;if(!k.vm){"c1a"in k.fb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.A(3);break}l=Object.assign({},{c:k.challenge,e:a},b);ya(n,4);e=!0;if(S("attbs")&&!S("attmusi")){m=k.vm.ed({wb:l});n.A(6);break}return n.yield(k.vm.snapshot({wb:l}),7);case 7:m=n.i;case 6:m?f.webResponse=
m:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";za(n,3);break;case 4:Aa(n),f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 3:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var r=k.fb,t={};r.c6a&&(t.reportingStatus=String(Number(r.c)^Lx()));r.c6b&&(t.broadSpectrumDetectionResult=String(Number(r.c)^Number(R("CATSTAT",0))));f.adblockReporting=t}return n.return(f)}})};
return h.return(Promise.race([g(),Rx(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function Ox(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function Qx(a,b){b=b===void 0?0:b;var c,d,e,f,g,h,k,l,m,n,r,t;return B(function(v){switch(v.h){case 1:c=Ox(gj().h);if(S("att_fet_ks"))return ya(v,7),v.yield(a.hb(c),9);ya(v,4);return v.yield(Sx(a,c),6);case 6:g=v.i;e=g.Pe;f=g.Qe;d=g;za(v,3);break;case 4:return Aa(v),W(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),Tx(a,864E5),v.return({challenge:"",fb:{},vm:void 0,bgChallenge:void 0});case 9:d=v.i;if(!d)throw Error("Fetching Attestation challenge returned falsy");
if(!d.challenge)throw Error("Missing Attestation challenge");e=d.challenge;f=Fx(e);if("c1a"in f&&(!d.bgChallenge||!d.bgChallenge.program))throw Error("Expected bg challenge but missing.");za(v,3);break;case 7:h=Aa(v);W(h);b++;if(b>=5)return W(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),Tx(a,864E5),v.return({challenge:"",fb:{},vm:void 0,bgChallenge:void 0});k=1E3*Math.pow(2,b-1)+Math.random()*1E3;return v.return(new Promise(function(x){tn(function(){x(Qx(a,
b))},k)}));
case 3:l=Number(f.t)||7200;Tx(a,l*1E3);m=void 0;if(!("c1a"in f&&d.bgChallenge)){v.A(10);break}n=Ex(d.bgChallenge);ya(v,11);return v.yield(hj(gj(),n),13);case 13:za(v,12);break;case 11:return r=Aa(v),W(r),v.return({challenge:e,fb:f,vm:m,bgChallenge:n});case 12:return ya(v,14),m=new dj({challenge:n,zd:{Da:"aGIf"}}),v.yield(m.Zc,16);case 16:za(v,10);break;case 14:t=Aa(v),W(t),m=void 0;case 10:return v.return({challenge:e,fb:f,vm:m,bgChallenge:n})}})}
Nx.prototype.hb=function(a){var b=this,c;return B(function(d){c=b.o;if(!c||c.ta())return d.return(b.network.hb(a));Yw("att_pna");return d.return(new Promise(function(e){Eh(c,"publicytnetworkstatus-online",function(){b.network.hb(a).then(e)})}))})};
function Ux(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=Fx(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Pe:b,Qe:c})}
function Sx(a,b){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.A(4);break}if(!(d>0)){h.A(5);break}e.md=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){tn(function(){l(void 0)},k.md)}}(e)),5);
case 5:return ya(h,7),h.yield(a.hb(b),9);case 9:return f=h.i,h.return(Ux(f));case 7:c=g=Aa(h),g instanceof Error&&W(g);case 8:d++;e={md:void 0};h.A(2);break;case 4:throw c;}})}
function Px(a,b){a.h=b}
function Vx(a){var b,c,d;return B(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=Qx(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function Tx(a,b){function c(){var e;return B(function(f){e=d-Date.now();return e<1E3?f.yield(Vx(a),0):(tn(c,Math.min(e,6E4)),f.A(0))})}
var d=Date.now()+b;c()}
function Rx(a,b){return new Promise(function(c){tn(function(){c(b())},a)})}
;function Wx(){this.h=Dx()}
Wx.prototype.hb=function(a){Yw("att_fsr");return kx(this.h,a).then(function(b){Yw("att_frr");return b})};function Xx(){var a,b,c;return B(function(d){if(d.h==1)return a=Gs().resolve(mx),a?d.yield(fx(a),2):(W(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return W(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.zh;return d.return(c)}W(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function Yx(){var a;return(a=R("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var Zx=D.caches,$x;function ay(a){var b=a.indexOf(":");return b===-1?{Cd:a}:{Cd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function by(){return B(function(a){if($x!==void 0)return a.return($x);$x=new Promise(function(b){var c;return B(function(d){switch(d.h){case 1:return ya(d,2),d.yield(Zx.open("test-only"),4);case 4:return d.yield(Zx.delete("test-only"),5);case 5:za(d,3);break;case 2:if(c=Aa(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return($x)})}
function cy(a){var b,c,d,e,f,g,h;B(function(k){if(k.h==1)return k.yield(by(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(Zx.keys(),3)}c=k.i;d=y(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=ay(f),h=g.datasyncId,!h||a.includes(h)||b.push(Zx.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function dy(){var a,b,c,d,e,f,g;return B(function(h){if(h.h==1)return h.yield(by(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=rn("cache contains other");return h.yield(Zx.keys(),3)}b=h.i;c=y(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=ay(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function ey(){try{return!!self.sessionStorage}catch(a){return!1}}
;function fy(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function gy(a){if(ey()){var b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=fy(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function hy(){if(!ey())return!1;var a=rn(),b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=fy(c.value),c!==void 0&&c!==a)return!0;return!1}
;function iy(){Xx().then(function(a){a&&(xp(a),cy(a),Hv(a),gy(a))})}
function jy(){var a=new Er;zj.pa(function(){var b,c,d,e,f;return B(function(g){switch(g.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){g.A(2);break}b=rn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];xp(h);cy(h);Hv(h);gy(h);return g.return()}c=Iv();d=hy();return g.yield(dy(),3);case 3:return e=g.i,g.yield(yp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.ta()?iy():Eh(a,"publicytnetworkstatus-online",iy),g.h=0}})})}
;var ky=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function ly(){this.state=1;this.vm=null;this.h=void 0}
p=ly.prototype;p.initialize=function(a,b,c,d){this.h=d;if(a.program){var e;d=(e=a.interpreterUrl)!=null?e:null;if(a.interpreterSafeScript)e=nl(a.interpreterSafeScript);else{var f;e=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(d=ol(a.interpreterSafeUrl).toString());my(this,e,d,a.program,b,c)}else W(Error("BL:CIP"))};
function my(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,bv(c,function(){window[g]?ny(a,d,g,e):(a.state=3,dv(c),W(new U("BL:ULB",""+c)))},f)):b?(f=lg("SCRIPT"),b instanceof Ab?(f.textContent=Cb(b),Db(f)):f.textContent=b,f.nonce=zb(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?ny(a,d,g,e):(a.state=4,W(new U("BL:ULBJ")))):W(new U("BL:ULV"))}
p.isLoading=function(){return this.state===2};
function ny(a,b,c,d){a.state=5;var e=!!a.h&&ky.includes(bc(a.h)||"");try{var f=new dj({program:b,globalName:c,zd:{disable:!S("att_web_record_metrics")||!S("att_skip_metrics_for_cookieless_domains_ks")&&e,Da:"aGIf"}});f.Zc.then(function(){a.state=6;d&&d(b)});
a.Yc(f)}catch(g){a.state=7,g instanceof Error&&W(g)}}
p.invoke=function(a){a=a===void 0?{}:a;return this.hd()?this.Rd({wb:a}):null};
p.dispose=function(){this.Yc(null);this.state=8};
p.hd=function(){return!!this.vm};
p.Rd=function(a){return this.vm.ed(a)};
p.Yc=function(a){rc(this.vm);this.vm=a};function oy(){var a=F("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function py(){ly.apply(this,arguments)}
w(py,ly);py.prototype.Yc=function(a){var b;(b=oy())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.ed.bind(a)},E("yt.abuse.playerAttLoader",b),E("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(E("yt.abuse.playerAttLoader",null),E("yt.abuse.playerAttLoaderRun",null))};
py.prototype.hd=function(){return!!oy()};
py.prototype.Rd=function(a){return oy().bgvmc(a)};function qy(a){Qs.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.M},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.M},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(qy,Qs);qy.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
qy.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
qy.prototype.M=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
qy.prototype.i=function(){this.h=new Map};function ry(a){Qs.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.M},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.M},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.M},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(ry,Qs);ry.prototype.i=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
ry.prototype.h=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
ry.prototype.u=function(a,b){a(b==null?void 0:b.event)};
ry.prototype.M=function(a,b){a(b==null?void 0:b.event)};function sy(){this.o=new qy;this.u=new ry}
sy.prototype.install=function(){var a=C.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function ty(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
ty.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=pu(c===void 0?0:c)){a=this.client;d=new iu({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=Cv(d,c);yv.set(f,!0);Dv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Bv({cttAuthInfo:ru(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Ev("visualElementGestured",f,d):a?Pt("visualElementGestured",d,a,f):io("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
ty.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new iu({trackingParams:a}),b,c===void 0?0:c)};
ty.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=pu(d);a||(a=(a=mu(d===void 0?0:d))?new iu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Bv({cttAuthInfo:ru(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Ev("visualElementStateChanged",d,b):a?Pt("visualElementStateChanged",b,a,d):io("visualElementStateChanged",b,d))}};
function uy(a,b){if(b===void 0)for(var c=ou(),d=0;d<c.length;d++)c[d]!==void 0&&uy(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Av(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function vy(){sy.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));S("web_log_cfg_cee_ks")||tn(wy)}
w(vy,sy);vy.prototype.j=function(){io("finalPayload",{csn:pu()})};
vy.prototype.h=function(){cu(du)};
vy.prototype.i=function(){var a=uy;ty.instance||(ty.instance=new ty);a(ty.instance)};
function wy(){var a=R("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Yd();a=y(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&io("genericClientExperimentEvent",{eventType:c});delete Pl.CLIENT_EXPERIMENT_EVENTS}}
;function xy(){}
function yy(){var a=F("ytglobal.storage_");a||(a=new xy,E("ytglobal.storage_",a));return a}
xy.prototype.estimate=function(){var a,b,c;return B(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(zy()):d.return()})};
function zy(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
E("ytglobal.storageClass_",xy);function go(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
go.prototype.Ha=function(a){this.handleError(a)};
go.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Ay(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Ay(a,b){yy().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:By(c==null?void 0:c.usage),deviceStorageQuotaMbytes:By(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function By(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var Cy={},Dy=(Cy["api.invalidparam"]=2,Cy.auth=150,Cy["drm.auth"]=150,Cy["heartbeat.net"]=150,Cy["heartbeat.servererror"]=150,Cy["heartbeat.stop"]=150,Cy["html5.unsupportedads"]=5,Cy["fmt.noneavailable"]=5,Cy["fmt.decode"]=5,Cy["fmt.unplayable"]=5,Cy["html5.missingapi"]=5,Cy["html5.unsupportedlive"]=5,Cy["drm.unavailable"]=5,Cy["mrm.blocked"]=151,Cy["embedder.identity.denied"]=152,Cy);var Ey=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function Fy(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function Gy(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=y(Ey);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Hy(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function Iy(a){H.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.D=[];this.P={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=S("web_player_split_event_bus_iframe");this.o=R("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",Jy(b));b.sendMessage("onReady");e=y(b.D);for(d=e.next();!d.done;d=e.next())Ky(b,d.value);b.D=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.P[e]||e==="onReady"||
(c=Ly(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.P[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&Fy(e)){var f=d;if(Ra(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=Gy(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=Gy(g);break;case "loadPlaylist":case "cuePlaylist":g=Hy(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);Fy(e)&&My(b,Jy(b))}}}};
Ny.addEventListener("message",this.G);if(a=R("WIDGET_ID"))this.sessionId=a;Oy(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?Dy[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
Oy(this,"onVideoProgress",this.kf.bind(this));Oy(this,"onVolumeChange",this.lf.bind(this));Oy(this,"onApiChange",this.cf.bind(this));Oy(this,"onPlaybackQualityChange",this.gf.bind(this));Oy(this,"onPlaybackRateChange",this.hf.bind(this));Oy(this,"onStateChange",this.jf.bind(this));Oy(this,"onWebglSettingsChanged",this.mf.bind(this));Oy(this,"onCaptionsTrackListChanged",this.df.bind(this));Oy(this,"captionssettingschanged",this.ef.bind(this))}
w(Iy,H);function My(a,b){a.sendMessage("infoDelivery",b)}
p=Iy.prototype;p.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?Ky(this,a):this.D.push(a)};
function Ly(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function Oy(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function Jy(a){if(!a.api)return null;var b=a.api.getApiInterface();Rb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
p.jf=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&!S("embeds_enable_vfsyb")&&(a.storyboardFormat=this.api.getStoryboardFormat());My(this,a)};
p.gf=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());My(this,a)};
p.hf=function(a){My(this,{playbackRate:a})};
p.cf=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
p.lf=function(){My(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
p.kf=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());My(this,a)};
p.mf=function(){My(this,{sphericalProperties:this.api.getSphericalProperties()})};
p.df=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};My(this,a)}};
p.ef=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};My(this,a)}};
function Ky(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){W(d)}}}
p.ba=function(){H.prototype.ba.call(this);Ny.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var Ny=window;function Py(a,b,c){H.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=S("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=Qy(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=Ry(g,f))&&Sy(d,g,f))}}}}}};
Ty.addEventListener("message",this.i);Sy(this,"RECEIVING")}
w(Py,H);p=Py.prototype;p.addListener=function(a,b){if(!(a in this.h)){var c=this.ff.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
p.ff=function(a,b){this.ea||Sy(this,a,Uy(a,b))};
p.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
p.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
p.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function Qy(a,b){switch(a){case "loadVideoById":return[Gy(b)];case "cueVideoById":return[Gy(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[Hy(b)];case "cuePlaylist":return[Hy(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Ry(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function Uy(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function Sy(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),Vy.postMessage(JSON.stringify(b),a.origin))}
p.ba=function(){Ty.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);H.prototype.ba.call(this)};
var Ty=window,Vy=window.parent;var Wy=new py;function Xy(){return Wy.hd()}
function Yy(a){a=a===void 0?{}:a;return Wy.invoke(a)}
;function Zy(a,b,c,d,e){H.call(this);var f=this;this.D=b;this.webPlayerContextConfig=d;this.Kb=e;this.Pa=!1;this.api={};this.ma=this.u=null;this.U=new N;this.h={};this.Z=this.xa=this.elementId=this.Qa=this.config=null;this.Y=!1;this.j=this.G=null;this.Fa={};this.Gc=["onReady"];this.lastError=null;this.eb=NaN;this.P={};this.ha=0;this.i=this.o=a;tc(this,this.U);$y(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(az(this),bz(this))}
w(Zy,H);p=Zy.prototype;p.getId=function(){return this.D};
p.loadNewVideoConfig=function(a){if(!this.ea){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof Ru||(b=new Ru(b));this.config=b;this.setConfig(a);bz(this);this.isReady()&&cz(this)}};
function az(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.D,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.D:a.config.attrs.id=a.D);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
p.setConfig=function(a){this.Qa=a;this.config=dz(a);az(this);if(!this.xa){var b;this.xa=ez(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=tj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=tj(Number(a)||a))};
function cz(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function fz(a){var b=!0,c=gz(a);c&&a.config&&(b=c.dataset.version===hz(a));return b&&!!F("yt.player.Application.create")}
function bz(a){if(!a.ea&&!a.Y){var b=fz(a);if(b&&(gz(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||iz(a);else if(jz(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),iz(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=kz(a,"player_bootstrap_method")?F("yt.player.Application.createAlternate")||F("yt.player.Application.create"):F("yt.player.Application.create");var e=a.config?dz(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Kb);iz(a)};
a.Y=!0;b?a.G():(bv(hz(a),a.G),(b=lz(a))&&iv(b||""),mz(a)&&!c&&E("yt.player.Application.create",null))}}}
function gz(a){var b=kg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function iz(a){if(!a.ea){var b=gz(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!kz(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}nz(a)}else a.eb=setTimeout(function(){iz(a)},50)}}
function nz(a){$y(a);a.Pa=!0;var b=gz(a);if(b){a.u=oz(a,b,"addEventListener");a.ma=oz(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=oz(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);cz(a);a.xa&&a.xa(a.api);a.U.sb("onReady",a.api)}
function oz(a,b,c){var d=b[c];return function(){var e=C.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.D}),e.level="WARNING",e;}}}
function $y(a){a.Pa=!1;if(a.ma)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ma(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.u=null;a.ma=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Qa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
p.isReady=function(){return this.Pa};
p.addEventListener=function(a,b){var c=this,d=ez(this,b);d&&(Lb(this.Gc,a)>=0||this.h[a]||(b=pz(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
p.removeEventListener=function(a,b){this.ea||(b=ez(this,b))&&this.U.unsubscribe(a,b)};
function ez(a,b){var c=b;if(typeof b==="string"){if(a.Fa[b])return a.Fa[b];c=function(){var d=C.apply(0,arguments),e=F(b);if(e)try{e.apply(D,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Fa[b]=c}return c?c:null}
function pz(a,b){function c(d){function e(){if(!a.ea)try{a.U.sb(b,d!=null?d:void 0)}catch(h){var g=new U("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.D,data:d,originalStack:h.stack,componentStack:h.ge});g.level="WARNING";throw g;}}
if(kz(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.P,h=String(f);h in g&&delete g[h]},0);
bg(a.P,String(f))}}
return a.h[b]=c}
p.getPlayerType=function(){return this.Z||(gz(this)?"html5":null)};
p.getLastError=function(){return this.lastError};
function jz(a){a.cancel();$y(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=gz(a);b&&(fz(a)||!mz(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
p.cancel=function(){this.G&&fv(hz(this),this.G);clearTimeout(this.eb);this.Y=!1};
p.ba=function(){jz(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Fa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Qa=this.config=this.api=null;delete this.o;delete this.i;H.prototype.ba.call(this)};
function mz(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function hz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function lz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function kz(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function dz(a){for(var b={},c=y(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?eg(e):e}return b}
;var qz={},rz="player_uid_"+(Math.random()*1E9>>>0);function sz(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?kg(c):c;var e=rz+"_"+Sa(c),f=qz[e];if(f&&d)return tz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Zy(c,e,a,b,void 0);qz[e]=f;f.addOnDisposeCallback(function(){delete qz[f.getId()]});
return f.api}
function tz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var uz=null,vz=null;
function wz(){Zw();var a=fn(),b=jn(119),c=window.devicePixelRatio>1;if(document.body&&Hj(document.body,"exp-invert-logo"))if(c&&!Hj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Hj(d,"inverted-hdpi")){var e=Fj(d);Gj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Hj(document.body,"inverted-hdpi")&&Ij();if(b!=c){b="f"+(Math.floor(119/31)+1);d=kn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete cn[b]:(c=d.toString(16),cn[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in cn)cn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(cn[f])));var f=d.join("&");Zm(b,f,63072E3,a.i,c)}}
function xz(){yz()}
function zz(){Uw("ep_init_pr");yz()}
function yz(){var a=uz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Az(){uz&&uz.sendAbandonmentPing&&uz.sendAbandonmentPing();R("PL_ATT")&&Wy.dispose();for(var a=zj,b=0,c=Ix.length;b<c;b++)a.qa(Ix[b]);Ix.length=0;dv("//static.doubleclick.net/instream/ad_status.js");Jx=!1;Ql("DCLKSTAT",0);sc(vz);uz&&(uz.removeEventListener("onVideoDataChange",xz),uz.destroy())}
;Uw("ep_init_eps");E("yt.setConfig",Ql);E("yt.config.set",Ql);E("yt.setMsg",av);E("yt.msgs.set",av);E("yt.logging.errors.log",Yt);
E("writeEmbed",function(){Uw("ep_init_wes");var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}Mv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);c=Yx();if(!c.serializedForcedExperimentIds){var d=dm(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)?Qw("watch",["pbs","pbu","pbp"]):a.args&&Du(a.args)?Qw("video_preview",["ol"]):Qw("embed_no_video",["ep_init_pr"]);uz=sz(a,c);uz.addEventListener("onVideoDataChange",xz);uz.addEventListener("onReady",zz);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?vz=new Iy(uz):R("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(vz=new Py(uz,a,b));Kx();S("ytidb_create_logger_embed_killswitch")||fo();a={};vy.h||(vy.h=new vy);vy.h.install((a.flush_logs=
{callback:function(){Ct()}},a));
Qr();S("ytidb_clear_embedded_player")&&zj.pa(function(){Dx();jy()});
S("enable_rta_manager")&&tn(function(){var f=new Wx;var g={preload:!S("enable_rta_npi")},h;typeof g==="boolean"?h={preload:g}:typeof g==="undefined"?h={preload:!0}:h=g;g=new Er;Nx.instance=new Nx(f,h,g);f=Nx.instance;h=f.i.bind(f);E("yt.aba.att",h);f=f.j.bind(f);E("yt.aba.att2",f)});
Uw("ep_init_wee")});
E("yt.abuse.player.botguardInitialized",F("yt.abuse.player.botguardInitialized")||Xy);E("yt.abuse.player.invokeBotguard",F("yt.abuse.player.invokeBotguard")||Yy);E("yt.abuse.dclkstatus.checkDclkStatus",F("yt.abuse.dclkstatus.checkDclkStatus")||Lx);E("yt.player.exports.navigate",F("yt.player.exports.navigate")||Lv);E("yt.util.activity.init",F("yt.util.activity.init")||ds);E("yt.util.activity.getTimeSinceActive",F("yt.util.activity.getTimeSinceActive")||ls);
E("yt.util.activity.setTimestamp",F("yt.util.activity.setTimestamp")||es);window.addEventListener("load",Ul(function(){wz()}));
window.addEventListener("pageshow",Ul(function(a){a.persisted||wz()}));
window.addEventListener("pagehide",Ul(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Az():a.persisted||Az()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=Rl("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new U(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!S("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.ge)f||(f={}),f.componentStack=Qt(m)}f&&au(e,f);g?Yt(e):W(e)}};
pi=Zt;window.addEventListener("unhandledrejection",function(a){Zt(a.reason)});
Mb(R("ERRORS")||[],function(a){Yt.apply(null,a)});
Ql("ERRORS",[]);Uw("ep_init_epe");}).call(this);
