import{a as _,p as b,f as O,l as R,k as E,o as N,_ as P}from"./index.js";import{D as V}from"./siteSetting-efd6ab5b.js";import{c as h,u as x}from"./index-2d401d92.js";import{b as v}from"./index-5d733051.js";import{h as B}from"./header-55b09394.js";import{D as T,x as A}from"./antd-65489578.js";import{d as F,c as z,a7 as n,Z as t,_ as H,l as a,a9 as k,a8 as r,ab as s,$ as i,a1 as l,a0 as W,F as Z}from"./vue-ea98dac5.js";import"./index-c75f3b17.js";import"./useContentViewHeight-ce36ed45.js";import"./useWindowSizeFn-01ffbee2.js";import"./useSortable-3cb9ef53.js";import"./lock-21fe4179.js";const j=F({name:"UserDropdown",components:{Dropdown:T,Menu:A,MenuItem:h(()=>_(()=>import("./DropMenuItem-6478a272.js"),["assets/DropMenuItem-6478a272.js","assets/index.js","assets/vue-ea98dac5.js","assets/antd-65489578.js","assets/index-356e94e6.css"])),MenuDivider:A.Divider,LockAction:h(()=>_(()=>import("./LockModal-fe133e03.js"),["assets/LockModal-fe133e03.js","assets/index.js","assets/vue-ea98dac5.js","assets/antd-65489578.js","assets/index-356e94e6.css","assets/index-5d733051.js","assets/useWindowSizeFn-01ffbee2.js","assets/index-81b08c04.css","assets/BasicForm-70efc93e.js","assets/FormItem.vue_vue_type_script_lang-1601d493.js","assets/componentMap-1fcf0129.js","assets/useFormItem-192ac42b.js","assets/RadioButtonGroup-3e84979d.js","assets/uuid-31b8b5a4.js","assets/useSortable-3cb9ef53.js","assets/download-2647fd8d.js","assets/base64Conver-39fc0d26.js","assets/index-b6bcc265.js","assets/index-f47e3178.css","assets/IconPicker.vue_vue_type_script_setup_true_lang-cd895ca2.js","assets/copyTextToClipboard-d6decfab.js","assets/index-ddb99338.js","assets/index-7f5b8959.css","assets/componentMap-6528b260.css","assets/BasicForm-dd0d74d8.css","assets/useForm-8580518e.js","assets/lock-21fe4179.js","assets/header-55b09394.js","assets/LockModal-ca58db68.css"])),ChangeApi:h(()=>_(()=>import("./index-6be8a1ee.js"),["assets/index-6be8a1ee.js","assets/index.js","assets/vue-ea98dac5.js","assets/antd-65489578.js","assets/index-356e94e6.css","assets/index-5d733051.js","assets/useWindowSizeFn-01ffbee2.js","assets/index-81b08c04.css","assets/BasicForm-70efc93e.js","assets/FormItem.vue_vue_type_script_lang-1601d493.js","assets/componentMap-1fcf0129.js","assets/useFormItem-192ac42b.js","assets/RadioButtonGroup-3e84979d.js","assets/uuid-31b8b5a4.js","assets/useSortable-3cb9ef53.js","assets/download-2647fd8d.js","assets/base64Conver-39fc0d26.js","assets/index-b6bcc265.js","assets/index-f47e3178.css","assets/IconPicker.vue_vue_type_script_setup_true_lang-cd895ca2.js","assets/copyTextToClipboard-d6decfab.js","assets/index-ddb99338.js","assets/index-7f5b8959.css","assets/componentMap-6528b260.css","assets/BasicForm-dd0d74d8.css","assets/useForm-8580518e.js"]))},props:{theme:b.oneOf(["dark","light"])},setup(){const{prefixCls:e}=O("header-user-dropdown"),{t:C}=E(),{getShowDoc:D,getUseLockPage:w,getShowApi:y}=x(),p=R(),o=z(()=>{const{realName:f="",avatar:S,desc:U}=p.getUserInfo||{};return{realName:f,avatar:S||B,desc:U}}),[c,{openModal:u}]=v(),[d,{openModal:m}]=v();function g(){u(!0)}function L(){m(!0,{})}function M(){p.confirmLoginOut()}function I(){N(V)}function $(f){switch(f.key){case"logout":M();break;case"doc":I();break;case"lock":g();break;case"api":L();break}}return{prefixCls:e,t:C,getUserInfo:o,handleMenuClick:$,getShowDoc:D,getShowApi:y,register:c,registerApi:d,getUseLockPage:w}}});const q=["src"];function G(e,C,D,w,y,p){const o=n("MenuItem"),c=n("MenuDivider"),u=n("Menu"),d=n("Dropdown"),m=n("LockAction"),g=n("ChangeApi");return t(),H(Z,null,[a(d,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:k(()=>[a(u,{onClick:e.handleMenuClick},{default:k(()=>[e.getShowDoc?(t(),r(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):s("",!0),e.getShowDoc?(t(),r(c,{key:1})):s("",!0),e.getShowApi?(t(),r(o,{key:"api",text:e.t("layout.header.dropdownChangeApi"),icon:"ant-design:swap-outlined"},null,8,["text"])):s("",!0),e.getUseLockPage?(t(),r(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):s("",!0),a(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:k(()=>[i("span",{class:l([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[i("img",{class:l(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,q),i("span",{class:l(`${e.prefixCls}__info hidden md:block`)},[i("span",{class:l([`${e.prefixCls}__name`,"truncate"])},W(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),a(m,{onRegister:e.register},null,8,["onRegister"]),a(g,{onRegister:e.registerApi},null,8,["onRegister"])],64)}const ie=P(j,[["render",G]]);export{ie as default};
