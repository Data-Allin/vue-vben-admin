import{B as f,a as g}from"./index-5d733051.js";import{d as h,f as p,w as M,a7 as m,Z as o,a8 as B,a9 as u,l as C,E as v,_ as t,ab as _,F as y,aa as F,a0 as k,ac as D}from"./vue-ea98dac5.js";import{_ as b}from"./index.js";import"./antd-65489578.js";import"./useWindowSizeFn-01ffbee2.js";const w=h({components:{BasicModal:f},setup(){const e=p(!0),a=p(10),[i,{setModalProps:n,redoModalHeight:l}]=g();M(()=>a.value,()=>{l()});function d(r){r&&(e.value=!0,n({loading:!0,confirmLoading:!0}),setTimeout(()=>{a.value=Math.round(Math.random()*30+5),e.value=!1,n({loading:!1,confirmLoading:!1})},3e3))}function s(){a.value=Math.round(Math.random()*20+10)}return{register:i,loading:e,handleShow:d,lines:a,setLines:s}}});const A={key:0,class:"empty-tips"},L={key:1};function $(e,a,i,n,l,d){const s=m("a-button"),r=m("BasicModal");return o(),B(r,D(e.$attrs,{destroyOnClose:"",onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"],onOpenChange:e.handleShow}),{insertFooter:u(()=>[C(s,{type:"primary",danger:"",onClick:e.setLines,disabled:e.loading},{default:u(()=>[v("点我更新内容")]),_:1},8,["onClick","disabled"])]),default:u(()=>[e.loading?(o(),t("div",A,"加载中，稍等3秒……")):_("",!0),e.loading?_("",!0):(o(),t("ul",L,[(o(!0),t(y,null,F(e.lines,c=>(o(),t("li",{key:c},"加载完成"+k(c)+"！",1))),128))]))]),_:1},16,["onRegister","onOpenChange"])}const V=b(w,[["render",$],["__scopeId","data-v-d5c6f5a1"]]);export{V as default};
