var u=Object.defineProperty;var s=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var a=(e,r,o)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,t=(e,r)=>{for(var o in r||(r={}))d.call(r,o)&&a(e,o,r[o]);if(s)for(var o of s(r))h.call(r,o)&&a(e,o,r[o]);return e};import{_}from"./FormItem.vue_vue_type_script_lang-1601d493.js";import{d as l,c as p,u as n,a7 as $,Z as P,a8 as g,ad as j,aa as C,a9 as F,N as I,ai as b,aj as y}from"./vue-ea98dac5.js";import{_ as O}from"./index.js";import"./componentMap-1fcf0129.js";import"./useFormItem-192ac42b.js";import"./antd-65489578.js";import"./RadioButtonGroup-3e84979d.js";import"./index-5d733051.js";import"./useWindowSizeFn-01ffbee2.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-b6bcc265.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cd895ca2.js";import"./copyTextToClipboard-d6decfab.js";import"./index-ddb99338.js";const k=l({name:"VFormItem",components:{FormItem:_},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,required:!0},formConfig:{type:Object,required:!0}},setup(e){const r=p(()=>t({},n(e.schema))),o=p(()=>t({},n(e.formConfig)));return{schemaNew:r,getProps:o}}});function v(e,r,o,c,w,N){const i=$("FormItem");return P(),g(i,{schema:e.schemaNew,formProps:e.getProps},j({_:2},[C(Object.keys(e.$slots),m=>({name:m,fn:F(f=>[I(e.$slots,m,b(y(f||{})))])}))]),1032,["schema","formProps"])}const T=O(k,[["render",v]]);export{T as default};
