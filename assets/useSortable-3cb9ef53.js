var d=Object.defineProperty;var c=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var f=(a,r,t)=>r in a?d(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,s=(a,r)=>{for(var t in r||(r={}))b.call(r,t)&&f(a,t,r[t]);if(c)for(var t of c(r))p.call(r,t)&&f(a,t,r[t]);return a};var _=(a,r,t)=>new Promise((i,u)=>{var l=o=>{try{e(t.next(o))}catch(n){u(n)}},m=o=>{try{e(t.throw(o))}catch(n){u(n)}},e=o=>o.done?i(o.value):Promise.resolve(o.value).then(l,m);e((t=t.apply(a,r)).next())});import{a as y}from"./index.js";import{x as S,u as x}from"./vue-ea98dac5.js";function E(a,r){function t(){S(()=>_(this,null,function*(){if(a=x(a),!a)return;(yield y(()=>import("./sortable.esm-4ae27e0b.js"),[])).default.create(a,s({animation:100,delay:400,delayOnTouchOnly:!0},r))}))}return{initSortable:t}}export{E as u};