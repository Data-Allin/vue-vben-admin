import{B as m}from"./BasicForm-70efc93e.js";import"./componentMap-1fcf0129.js";import"./RadioButtonGroup-3e84979d.js";import{C as u,b as l,_ as c}from"./index.js";import{T as d}from"./index-7d72e757.js";import{P as C}from"./index-9aeceda4.js";import{d as f,m as _,a7 as o,Z as h,a8 as b,a9 as a,l as s}from"./vue-ea98dac5.js";import"./FormItem.vue_vue_type_script_lang-1601d493.js";import"./antd-65489578.js";import"./index-5d733051.js";import"./useWindowSizeFn-01ffbee2.js";import"./useFormItem-192ac42b.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-b6bcc265.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cd895ca2.js";import"./copyTextToClipboard-d6decfab.js";import"./index-ddb99338.js";import"./onMountedOrActivated-3eb95ecd.js";import"./useContentViewHeight-ce36ed45.js";const B=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:t})=>_(d,{value:e[t],onChange:r=>{e[t]=r}})}],g=f({components:{BasicForm:m,CollapseContainer:u,PageWrapper:C},setup(){const{createMessage:e}=l();return{schemas:B,handleSubmit:t=>{e.success("click search,values:"+JSON.stringify(t))}}}});function P(e,t,r,S,V,y){const n=o("BasicForm"),i=o("CollapseContainer"),p=o("PageWrapper");return h(),b(p,{title:"富文本嵌入表单示例"},{default:a(()=>[s(i,{title:"富文本表单"},{default:a(()=>[s(n,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}const K=c(g,[["render",P]]);export{K as default};