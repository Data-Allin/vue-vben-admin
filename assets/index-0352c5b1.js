import{B as T}from"./BasicTable-9298449c.js";import{T as S}from"./componentMap-1fcf0129.js";import"./TableImg.vue_vue_type_style_index_0_lang-50940e7d.js";import{u as B}from"./useTable-9a7c7c80.js";import{g as w}from"./system-82075152.js";import{P as y}from"./index-9aeceda4.js";import A from"./DeptTree-a62a05d9.js";import{b as D}from"./index-5d733051.js";import F from"./AccountModal-7a42ea13.js";import{c as k,s as E}from"./account.data-cce96674.js";import{aI as I,_ as M}from"./index.js";import{d as R,r as V,a7 as t,Z as _,a8 as C,a9 as n,l as a,E as P,ab as W}from"./vue-ea98dac5.js";import"./useFormItem-192ac42b.js";import"./antd-65489578.js";import"./RadioButtonGroup-3e84979d.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-b6bcc265.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cd895ca2.js";import"./copyTextToClipboard-d6decfab.js";import"./index-ddb99338.js";import"./BasicForm-70efc93e.js";import"./FormItem.vue_vue_type_script_lang-1601d493.js";import"./useForm-8580518e.js";import"./useWindowSizeFn-01ffbee2.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-ce36ed45.js";import"./index-203f3cb1.js";import"./useContextMenu-52378380.js";const $=R({name:"AccountManagement",components:{BasicTable:T,PageWrapper:y,DeptTree:A,AccountModal:F,TableAction:S},setup(){const o=I(),[h,{openModal:r}]=D(),i=V({}),[b,{reload:l,updateTableDataRecord:c}]=B({title:"账号列表",api:w,rowKey:"id",columns:k,formConfig:{labelWidth:120,schemas:E,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(e){return e},actionColumn:{width:120,title:"操作",dataIndex:"action"}});function s(){r(!0,{isUpdate:!1})}function u(e){r(!0,{record:e,isUpdate:!0})}function p(e){}function m({isUpdate:e,values:g}){e?c(g.id,g):l()}function d(e=""){i.deptId=e,l()}function f(e){o("/system/account_detail/"+e.id)}return{registerTable:b,registerModal:h,handleCreate:s,handleEdit:u,handleDelete:p,handleSuccess:m,handleSelect:d,handleView:f,searchInfo:i}}});function N(o,h,r,i,b,l){const c=t("DeptTree"),s=t("a-button"),u=t("TableAction"),p=t("BasicTable"),m=t("AccountModal"),d=t("PageWrapper");return _(),C(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:n(()=>[a(c,{class:"w-1/4 xl:w-1/5",onSelect:o.handleSelect},null,8,["onSelect"]),a(p,{onRegister:o.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:o.searchInfo},{toolbar:n(()=>[a(s,{type:"primary",onClick:o.handleCreate},{default:n(()=>[P("新增账号")]),_:1},8,["onClick"])]),bodyCell:n(({column:f,record:e})=>[f.key==="action"?(_(),C(u,{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"查看用户详情",onClick:o.handleView.bind(null,e)},{icon:"clarity:note-edit-line",tooltip:"编辑用户资料",onClick:o.handleEdit.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"删除此账号",popConfirm:{title:"是否确认删除",placement:"left",confirm:o.handleDelete.bind(null,e)}}]},null,8,["actions"])):W("",!0)]),_:1},8,["onRegister","searchInfo"]),a(m,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}const be=M($,[["render",N]]);export{be as default};
