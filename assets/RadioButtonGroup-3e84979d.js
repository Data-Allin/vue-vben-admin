import{u as f}from"./useFormItem-192ac42b.js";import{ak as p,k as v}from"./antd-65489578.js";import{d as g,f as R,c as k,a7 as d,Z as s,a8 as c,a9 as m,_ as B,aa as _,E as b,a0 as C,F as y,ac as G}from"./vue-ea98dac5.js";import{q as $,_ as h}from"./index.js";const S=g({name:"RadioButtonGroup",components:{RadioGroup:p.Group,RadioButton:p.Button},props:{value:{type:[String,Number,Boolean]},options:{type:Array,default:()=>[]}},emits:["change"],setup(a){const o=$(),n=R([]),[r]=f(a,"value","change",n),u=k(()=>{const{options:e}=a;return!e||(e==null?void 0:e.length)===0?[]:e.some(t=>v(t))?e.map(t=>({label:t,value:t})):e});function l(...e){n.value=e}return{state:r,getOptions:u,attrs:o,handleClick:l}}});function A(a,o,n,r,u,l){const e=d("RadioButton"),i=d("RadioGroup");return s(),c(i,G(a.attrs,{value:a.state,"onUpdate:value":o[0]||(o[0]=t=>a.state=t),"button-style":"solid"}),{default:m(()=>[(s(!0),B(y,null,_(a.getOptions,t=>(s(),c(e,{key:`${t.value}`,value:t.value,disabled:t.disabled,onClick:F=>a.handleClick(t)},{default:m(()=>[b(C(t.label),1)]),_:2},1032,["value","disabled","onClick"]))),128))]),_:1},16,["value"])}const q=h(S,[["render",A]]);export{q as R};
