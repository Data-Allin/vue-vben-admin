import{d as u}from"./vuedraggable.umd-9a784c3c.js";import{I as g,f,_}from"./index.js";import{d as h,r as C,a7 as r,Z as I,_ as v,l as d,a9 as $,$ as y,E as b,a0 as A,ac as k,a1 as S}from"./vue-ea98dac5.js";import"./antd-65489578.js";const D=h({name:"CollapseItem",components:{draggable:u,Icon:g},props:{list:{type:[Array],default:()=>[]},handleListPush:{type:Function,default:null}},setup(e,{emit:o}){const{prefixCls:s}=f("form-design-collapse-item"),n=C({});return{prefixCls:s,state:n,handleStart:(t,a)=>{o("start",a[t.oldIndex].component)},handleAdd:t=>{},cloneItem:t=>e.handleListPush(t)}}});const B=["onDragstart","onClick"];function N(e,o,s,n,i,p){const l=r("Icon"),t=r("draggable");return I(),v("div",{class:S(e.prefixCls)},[d(t,k({tag:"ul","model-value":e.list},{group:{name:"form-draggable",pull:"clone",put:!1},sort:!1,clone:e.cloneItem,animation:180,ghostClass:"moving"},{"item-key":"type",onStart:o[0]||(o[0]=a=>e.handleStart(a,e.list)),onAdd:e.handleAdd}),{item:$(({element:a,index:c})=>[y("li",{class:"bs-box text-ellipsis",onDragstart:m=>e.$emit("add-attrs",e.list,c),onClick:m=>e.$emit("handle-list-push",a)},[d(l,{icon:a.icon},null,8,["icon"]),b(" "+A(a.label),1)],40,B)]),_:1},16,["model-value","onAdd"])],2)}const L=_(D,[["render",N],["__scopeId","data-v-4a751947"]]);export{L as default};