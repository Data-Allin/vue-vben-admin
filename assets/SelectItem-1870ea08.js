import{f as l,_ as i}from"./index.js";import{b as r}from"./index-fc717b1d.js";import{d,c as p,a7 as m,Z as c,_ as u,$ as f,a0 as _,l as g,ac as b,a1 as C}from"./vue-ea98dac5.js";import{W as y}from"./antd-65489578.js";import"./index-34e98249.js";import"./index-2d401d92.js";import"./index-c75f3b17.js";import"./useContentViewHeight-ce36ed45.js";import"./useWindowSizeFn-01ffbee2.js";import"./useSortable-3cb9ef53.js";import"./lock-21fe4179.js";const S=d({name:"SelectItem",components:{Select:y},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=l("setting-select-item"),a=p(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});return{prefixCls:t,handleChange:n=>{e.event&&r(e.event,n)},getBindValue:a}}});function h(e,t,a,s,n,v){const o=m("Select");return c(),u("div",{class:C(e.prefixCls)},[f("span",null,_(e.title),1),g(o,b(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}const P=i(S,[["render",h],["__scopeId","data-v-5dab0529"]]);export{P as default};