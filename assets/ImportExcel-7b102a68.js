import{I as B}from"./index-21a630b4.js";import{B as E}from"./BasicTable-9298449c.js";import"./componentMap-1fcf0129.js";import"./TableImg.vue_vue_type_style_index_0_lang-50940e7d.js";import{P as S}from"./index-9aeceda4.js";import{d as h,f as F,a7 as a,Z as c,a8 as f,a9 as m,l as d,E as I,_ as b,F as C,aa as D}from"./vue-ea98dac5.js";import{_ as g}from"./index.js";import"./index-5d733051.js";import"./antd-65489578.js";import"./useWindowSizeFn-01ffbee2.js";import"./BasicForm-70efc93e.js";import"./FormItem.vue_vue_type_script_lang-1601d493.js";import"./useForm-8580518e.js";import"./RadioButtonGroup-3e84979d.js";import"./useFormItem-192ac42b.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-b6bcc265.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cd895ca2.js";import"./copyTextToClipboard-d6decfab.js";import"./index-ddb99338.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-ce36ed45.js";const k=h({components:{BasicTable:E,ImpExcel:B,PageWrapper:S},setup(){const t=F([]);function p(n){t.value=[];for(const i of n){const{header:u,results:l,meta:{sheetName:r}}=i,e=[];for(const o of u)e.push({title:o,dataIndex:o});t.value.push({title:r,dataSource:l,columns:e})}}return{loadDataSuccess:p,tableListRef:t}}});function P(t,p,n,i,u,l){const r=a("a-button"),e=a("ImpExcel"),o=a("BasicTable"),_=a("PageWrapper");return c(),f(_,{title:"excel数据导入示例"},{default:m(()=>[d(e,{onSuccess:t.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:m(()=>[d(r,{class:"m-3"},{default:m(()=>[I(" 导入Excel ")]),_:1})]),_:1},8,["onSuccess"]),(c(!0),b(C,null,D(t.tableListRef,(s,x)=>(c(),f(o,{key:x,title:s.title,columns:s.columns,dataSource:s.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}const et=g(k,[["render",P]]);export{et as default};