import{C as B,I as w,l as x,_ as D}from"./index.js";import S from"./Article-be6899d1.js";import F from"./Application-800d6add.js";import P from"./Project-4fda2a80.js";import{h as V}from"./header-55b09394.js";import{tags as L,teams as N,details as U,achieveList as A}from"./data-199c263c.js";import{Q as j,a0 as v,U as $,V as h}from"./antd-65489578.js";import{d as z,c as Q,a7 as l,Z as t,_ as r,l as s,a9 as o,a1 as n,$ as c,F as i,aa as u,E as b,a0 as _,a8 as d,ah as R,a2 as Z,a3 as q}from"./vue-ea98dac5.js";const G=z({components:{CollapseContainer:B,Icon:w,Tag:j,Tabs:v,TabPane:v.TabPane,Article:S,Application:F,Project:P,[$.name]:$,[h.name]:h},setup(){const a=x();return{prefixCls:"account-center",avatar:Q(()=>a.getUserInfo.avatar||V),tags:L,teams:N,details:U,achieveList:A}}});const T=a=>(Z("data-v-a4552911"),a=a(),q(),a),H=["src"],J=T(()=>c("span",null,"Vben",-1)),K=T(()=>c("div",null,"海纳百川，有容乃大",-1));function M(a,g,O,W,X,Y){const p=l("a-col"),m=l("Icon"),f=l("a-row"),I=l("Tag"),C=l("CollapseContainer"),y=l("TabPane"),E=l("Tabs");return t(),r("div",{class:n(a.prefixCls)},[s(f,{class:n(`${a.prefixCls}-top`)},{default:o(()=>[s(p,{span:9,class:n(`${a.prefixCls}-col`)},{default:o(()=>[s(f,null,{default:o(()=>[s(p,{span:8},{default:o(()=>[c("div",{class:n(`${a.prefixCls}-top__avatar`)},[c("img",{width:"70",src:a.avatar},null,8,H),J,K],2)]),_:1}),s(p,{span:16},{default:o(()=>[c("div",{class:n(`${a.prefixCls}-top__detail`)},[(t(!0),r(i,null,u(a.details,e=>(t(),r("p",{key:e.title},[s(m,{icon:e.icon},null,8,["icon"]),b(" "+_(e.title),1)]))),128))],2)]),_:1})]),_:1})]),_:1},8,["class"]),s(p,{span:7,class:n(`${a.prefixCls}-col`)},{default:o(()=>[s(C,{title:"标签",canExpan:!1},{default:o(()=>[(t(!0),r(i,null,u(a.tags,e=>(t(),d(I,{key:e,class:"mb-2"},{default:o(()=>[b(_(e),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"]),s(p,{span:8,class:n(`${a.prefixCls}-col`)},{default:o(()=>[s(C,{class:n(`${a.prefixCls}-top__team`),title:"团队",canExpan:!1},{default:o(()=>[(t(!0),r(i,null,u(a.teams,(e,k)=>(t(),r("div",{key:k,class:n(`${a.prefixCls}-top__team-item`)},[s(m,{icon:e.icon,color:e.color},null,8,["icon","color"]),c("span",null,_(e.title),1)],2))),128))]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"]),c("div",{class:n(`${a.prefixCls}-bottom`)},[s(E,null,{default:o(()=>[(t(!0),r(i,null,u(a.achieveList,e=>(t(),d(y,{key:e.key,tab:e.name},{default:o(()=>[(t(),d(R(e.component)))]),_:2},1032,["tab"]))),128))]),_:1})],2)],2)}const ca=D(G,[["render",M],["__scopeId","data-v-a4552911"]]);export{ca as default};