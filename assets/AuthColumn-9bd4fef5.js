import{B as p}from"./BasicTable-9298449c.js";import{T as m}from"./componentMap-1fcf0129.js";import"./TableImg.vue_vue_type_style_index_0_lang-50940e7d.js";import{u as c}from"./useTable-9a7c7c80.js";import{d as h}from"./table-9286518d.js";import{d as b,a7 as l,Z as u,_ as f,l as w,a9 as F,a8 as C,ab as T}from"./vue-ea98dac5.js";import{_}from"./index.js";import"./useFormItem-192ac42b.js";import"./antd-65489578.js";import"./RadioButtonGroup-3e84979d.js";import"./index-5d733051.js";import"./useWindowSizeFn-01ffbee2.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-b6bcc265.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cd895ca2.js";import"./copyTextToClipboard-d6decfab.js";import"./index-ddb99338.js";import"./BasicForm-70efc93e.js";import"./FormItem.vue_vue_type_script_lang-1601d493.js";import"./useForm-8580518e.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";const A=[{title:"编号",dataIndex:"no",width:100},{title:"姓名",dataIndex:"name",minWidth:200,auth:"test"},{title:"状态",dataIndex:"status",width:100},{title:"状态1",dataIndex:"status1",width:100},{title:"状态2",dataIndex:"status2",width:100},{title:"状态3",dataIndex:"status3",width:100},{title:"状态4",dataIndex:"status4",width:100},{title:"状态5",dataIndex:"status5",width:100},{title:"地址",dataIndex:"address",auth:"super",ifShow:t=>!0},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],I=b({components:{BasicTable:p,TableAction:m},setup(){const[t]=c({title:"TableAction组件及固定列示例",api:h,columns:A,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:250,title:"Action",dataIndex:"action"}});function i(n){}function o(n){}function a(n){}return{registerTable:t,handleEdit:i,handleDelete:o,handleOpen:a}}}),x={class:"p-4"};function k(t,i,o,a,n,B){const r=l("TableAction"),s=l("BasicTable");return u(),f("div",x,[w(s,{onRegister:t.registerTable},{bodyCell:F(({column:d,record:e})=>[d.key==="action"?(u(),C(r,{key:0,actions:[{label:"编辑",onClick:t.handleEdit.bind(null,e),auth:"other"},{label:"删除",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,e),auth:"super"}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:t.handleOpen.bind(null,e)},ifShow:g=>e.status!=="enable"},{label:"禁用",popConfirm:{title:"是否禁用？",confirm:t.handleOpen.bind(null,e)},ifShow:()=>e.status==="enable"},{label:"同时控制",popConfirm:{title:"是否动态显示？",confirm:t.handleOpen.bind(null,e)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])):T("",!0)]),_:1},8,["onRegister"])])}const Y=_(I,[["render",k]]);export{Y as default};
