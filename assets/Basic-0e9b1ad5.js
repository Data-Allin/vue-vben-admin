import{B as f}from"./BasicTable-9298449c.js";import"./componentMap-1fcf0129.js";import"./TableImg.vue_vue_type_style_index_0_lang-50940e7d.js";import{getBasicColumns as B,getBasicData as b}from"./tableData-8b17d3be.js";import{d as E,f as t,a7 as c,Z as v,_ as A,l as a,a9 as n,E as s,a0 as m}from"./vue-ea98dac5.js";import{_ as h}from"./index.js";import"./useFormItem-192ac42b.js";import"./antd-65489578.js";import"./RadioButtonGroup-3e84979d.js";import"./index-5d733051.js";import"./useWindowSizeFn-01ffbee2.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-b6bcc265.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cd895ca2.js";import"./copyTextToClipboard-d6decfab.js";import"./index-ddb99338.js";import"./BasicForm-70efc93e.js";import"./FormItem.vue_vue_type_script_lang-1601d493.js";import"./useForm-8580518e.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./select-93eac05e.js";const k=E({components:{BasicTable:f},setup(){const e=t(!1),i=t(!1),r=t(!0),u=t(!0),l=t(!1);function d(){e.value=!e.value}function o(){r.value=!r.value}function p(){i.value=!0,setTimeout(()=>{i.value=!1,l.value={pageSize:20}},3e3)}function g(){u.value=!u.value}function C(F){}return{columns:B(),data:b(),canResize:e,loading:i,striped:r,border:u,toggleStriped:o,toggleCanResize:d,toggleLoading:p,toggleBorder:g,pagination:l,handleColumnChange:C}}}),y={class:"p-4"};function z(e,i,r,u,l,d){const o=c("a-button"),p=c("BasicTable");return v(),A("div",y,[a(p,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination,onColumnsChange:e.handleColumnChange},{toolbar:n(()=>[a(o,{type:"primary",onClick:e.toggleCanResize},{default:n(()=>[s(m(e.canResize?"取消自适应":"自适应高度"),1)]),_:1},8,["onClick"]),a(o,{type:"primary",onClick:e.toggleBorder},{default:n(()=>[s(m(e.border?"隐藏边框":"显示边框"),1)]),_:1},8,["onClick"]),a(o,{type:"primary",onClick:e.toggleLoading},{default:n(()=>[s(" 开启loading ")]),_:1},8,["onClick"]),a(o,{type:"primary",onClick:e.toggleStriped},{default:n(()=>[s(m(e.striped?"隐藏斑马纹":"显示斑马纹"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}const Y=h(k,[["render",z]]);export{Y as default};