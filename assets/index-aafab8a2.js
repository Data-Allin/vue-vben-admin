import{I as $,_ as b}from"./index.js";import{cardList as w}from"./data-d787e9e2.js";import{P as A}from"./index-9aeceda4.js";import{d as P,a7 as a,Z as i,a8 as p,a9 as o,a1 as c,$ as s,l,_ as d,aa as k,ab as m,a0 as r,E as f,F as y,a2 as S,a3 as V}from"./vue-ea98dac5.js";import{as as L,ag as _,U as h,V as v}from"./antd-65489578.js";import"./useContentViewHeight-ce36ed45.js";import"./useWindowSizeFn-01ffbee2.js";import"./onMountedOrActivated-3eb95ecd.js";const N=P({components:{Icon:$,Progress:L,PageWrapper:A,[_.name]:_,[_.Item.name]:_.Item,AListItemMeta:_.Item.Meta,[h.name]:h,[v.name]:v},setup(){return{prefixCls:"list-basic",list:w,pagination:{show:!0,pageSize:3}}}});const n=t=>(S("data-v-cbbf5659"),t=t(),V(),t),W=n(()=>s("div",null,"我的待办",-1)),z=n(()=>s("p",null,"8个任务",-1)),M=n(()=>s("div",null,"本周任务平均处理时间",-1)),D=n(()=>s("p",null,"32分钟",-1)),O=n(()=>s("div",null,"本周完成任务数",-1)),R=n(()=>s("p",null,"24个任务",-1)),T={key:0,class:"extra"},U={class:"description"},Z={class:"info"},j=n(()=>s("span",null,"Owner",-1)),q=n(()=>s("span",null,"开始时间",-1)),G={class:"progress"};function H(t,J,K,Q,X,Y){const u=a("a-col"),C=a("a-row"),g=a("Icon"),F=a("Progress"),I=a("a-list-item-meta"),x=a("a-list-item"),B=a("a-list"),E=a("PageWrapper");return i(),p(E,{class:c(t.prefixCls),title:"标准列表"},{default:o(()=>[s("div",{class:c(`${t.prefixCls}__top`)},[l(C,{gutter:12},{default:o(()=>[l(u,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:o(()=>[W,z]),_:1},8,["class"]),l(u,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:o(()=>[M,D]),_:1},8,["class"]),l(u,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:o(()=>[O,R]),_:1},8,["class"])]),_:1})],2),s("div",{class:c(`${t.prefixCls}__content`)},[l(B,{pagination:t.pagination},{default:o(()=>[(i(!0),d(y,null,k(t.list,e=>(i(),p(x,{key:e.id,class:"list"},{default:o(()=>[l(I,null,{avatar:o(()=>[e.icon?(i(),p(g,{key:0,class:"icon",icon:e.icon,color:e.color},null,8,["icon","color"])):m("",!0)]),title:o(()=>[s("span",null,r(e.title),1),e.extra?(i(),d("div",T,r(e.extra),1)):m("",!0)]),description:o(()=>[s("div",U,r(e.description),1),s("div",Z,[s("div",null,[j,f(r(e.author),1)]),s("div",null,[q,f(r(e.datetime),1)])]),s("div",G,[l(F,{percent:e.percent,status:"active"},null,8,["percent"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["pagination"])],2)]),_:1},8,["class"])}const is=b(N,[["render",H],["__scopeId","data-v-cbbf5659"]]);export{is as default};