import{p as h,f as v,_ as y}from"./index.js";import{u as x}from"./useContentViewHeight-ce36ed45.js";import{G as w}from"./antd-65489578.js";import{d as H,f as a,c as S,u as e,Z as R,_ as z,l as C,a9 as $,$ as k,a1 as l,af as u}from"./vue-ea98dac5.js";import{u as B}from"./useWindowSizeFn-01ffbee2.js";const L=["src"],E=H({__name:"index",props:{frameSrc:h.string.def("")},setup(m){const n=a(!0),p=a(50),i=a(window.innerHeight),o=a(),{headerHeightRef:d}=x(),{prefixCls:r}=v("iframe-page");B(f,{wait:150,immediate:!0});const c=S(()=>({height:`${e(i)}px`}));function f(){const s=e(o);if(!s)return;const t=d.value;p.value=t,i.value=window.innerHeight-t;const g=document.documentElement.clientHeight-t;s.style.height=`${g}px`}function _(){n.value=!1,f()}return(s,t)=>(R(),z("div",{class:l(e(r)),style:u(c.value)},[C(e(w),{spinning:n.value,size:"large",style:u(c.value)},{default:$(()=>[k("iframe",{src:m.frameSrc,class:l(`${e(r)}__main`),ref_key:"frameRef",ref:o,onLoad:_},null,42,L)]),_:1},8,["spinning","style"])],6))}});const G=y(E,[["__scopeId","data-v-c7e0c85f"]]);export{G as default};
