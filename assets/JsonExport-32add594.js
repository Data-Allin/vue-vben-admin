import{B as d}from"./BasicTable-9298449c.js";import"./componentMap-1fcf0129.js";import"./TableImg.vue_vue_type_style_index_0_lang-50940e7d.js";import"./index-21a630b4.js";import{c,d as t,j as m,a as f}from"./data-126ce391.js";import{P as h}from"./index-9aeceda4.js";import{d as F,a7 as r,Z as C,a8 as _,a9 as o,l as a,E as u}from"./vue-ea98dac5.js";import{_ as B}from"./index.js";import"./useFormItem-192ac42b.js";import"./antd-65489578.js";import"./RadioButtonGroup-3e84979d.js";import"./index-5d733051.js";import"./useWindowSizeFn-01ffbee2.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-b6bcc265.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cd895ca2.js";import"./copyTextToClipboard-d6decfab.js";import"./index-ddb99338.js";import"./BasicForm-70efc93e.js";import"./FormItem.vue_vue_type_script_lang-1601d493.js";import"./useForm-8580518e.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-ce36ed45.js";const A=F({components:{BasicTable:d,PageWrapper:h},setup(){function e(){m({data:t,filename:"使用key作为默认头部.xlsx"})}function i(){m({data:t,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})}function s(){f({sheetList:[{data:t,sheetName:"使用key作为默认头部"},{data:t,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},json2sheetOpts:{header:["name","id"]},sheetName:"自定义头部"}],filename:"多Sheet导出示例.xlsx"})}return{defaultHeader:e,customHeader:i,handleMultipleSheet:s,columns:c,data:t}}});function k(e,i,s,T,x,E){const n=r("a-button"),p=r("BasicTable"),l=r("PageWrapper");return C(),_(l,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:o(()=>[a(p,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:o(()=>[a(n,{onClick:e.defaultHeader},{default:o(()=>[u(" 导出：默认头部 ")]),_:1},8,["onClick"]),a(n,{onClick:e.customHeader},{default:o(()=>[u(" 导出：自定义头部 ")]),_:1},8,["onClick"]),a(n,{onClick:e.handleMultipleSheet,danger:""},{default:o(()=>[u(" 导出多Sheet ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"])]),_:1})}const U=B(A,[["render",k]]);export{U as default};