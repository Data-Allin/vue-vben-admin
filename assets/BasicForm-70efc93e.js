var Me=Object.defineProperty;var we=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable;var Ie=(e,a,n)=>a in e?Me(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,C=(e,a)=>{for(var n in a||(a={}))He.call(a,n)&&Ie(e,n,a[n]);if(we)for(var n of we(a))Ye.call(a,n)&&Ie(e,n,a[n]);return e};var R=(e,a,n)=>new Promise((r,d)=>{var f=i=>{try{g(n.next(i))}catch(u){d(u)}},l=i=>{try{g(n.throw(i))}catch(u){d(u)}},g=i=>i.done?r(i.value):Promise.resolve(i.value).then(f,l);g((n=n.apply(e,a)).next())});import{h as ze,d as $e,a as Ke,_ as Ue}from"./FormItem.vue_vue_type_script_lang-1601d493.js";import{G as We,v as Ge,B as qe,H as Xe,p as F,k as Je,_ as Ee,J as K,K as ee,L as z,F as Ze,u as Re,M as Te,N as pe,c as ke,f as Qe}from"./index.js";import{a3 as Le,V as Ve,e as le,k as ie,s as X,ae as Ae,ah as je,d as te,v as ge,f as J,ab as xe,ai as et,aj as tt,U as nt}from"./antd-65489578.js";import{d as Pe,c as H,a7 as U,Z as q,a8 as Z,a9 as Y,$ as ot,af as st,l as ue,N as W,ac as ne,E as me,a0 as he,ab as re,ai as ce,u as o,g as at,w as x,am as rt,x as ve,H as De,h as it,r as Ce,f as Q,o as ct,ak as lt,_ as ut,aa as be,ad as Se,aj as ye,F as ft}from"./vue-ea98dac5.js";import{u as dt}from"./index-5d733051.js";const Ne=Symbol();function pt(e){return Ge(e,Ne)}function mt(){return We(Ne)}const ht=Pe({name:"BasicFormAction",components:{FormItem:Le.Item,Button:qe,BasicArrow:Xe,[Ve.name]:Ve},props:{showActionButtonGroup:F.bool.def(!0),showResetButton:F.bool.def(!0),showSubmitButton:F.bool.def(!0),showAdvancedButton:F.bool.def(!0),resetButtonOptions:{type:Object,default:()=>({})},submitButtonOptions:{type:Object,default:()=>({})},actionColOptions:{type:Object,default:()=>({})},actionSpan:F.number.def(6),isAdvanced:F.bool,hideAdvanceBtn:F.bool},emits:["toggle-advanced"],setup(e,{emit:a}){const{t:n}=Je(),r=H(()=>{const{showAdvancedButton:g,actionSpan:i,actionColOptions:u}=e,y=24-i,O=g?{span:y<6?24:y}:{};return C(C({style:{textAlign:"right"},span:g?6:4},O),u)}),d=H(()=>Object.assign({text:n("common.resetText")},e.resetButtonOptions)),f=H(()=>Object.assign({text:n("common.queryText")},e.submitButtonOptions));function l(){a("toggle-advanced")}return C({t:n,actionColOpt:r,getResetBtnOptions:d,getSubmitBtnOptions:f,toggleAdvanced:l},mt())}});function bt(e,a,n,r,d,f){const l=U("Button"),g=U("BasicArrow"),i=U("FormItem"),u=U("a-col");return e.showActionButtonGroup?(q(),Z(u,ce(ne({key:0},e.actionColOpt)),{default:Y(()=>[ot("div",{style:st([{width:"100%"},{textAlign:e.actionColOpt.style.textAlign}])},[ue(i,null,{default:Y(()=>[W(e.$slots,"resetBefore"),e.showResetButton?(q(),Z(l,ne({key:0,type:"default",class:"mr-2"},e.getResetBtnOptions,{onClick:e.resetAction}),{default:Y(()=>[me(he(e.getResetBtnOptions.text),1)]),_:1},16,["onClick"])):re("",!0),W(e.$slots,"submitBefore"),e.showSubmitButton?(q(),Z(l,ne({key:1,type:"primary",class:"mr-2"},e.getSubmitBtnOptions,{onClick:e.submitAction}),{default:Y(()=>[me(he(e.getSubmitBtnOptions.text),1)]),_:1},16,["onClick"])):re("",!0),W(e.$slots,"advanceBefore"),e.showAdvancedButton&&!e.hideAdvanceBtn?(q(),Z(l,{key:2,type:"link",size:"small",onClick:e.toggleAdvanced},{default:Y(()=>[me(he(e.isAdvanced?e.t("component.form.putAway"):e.t("component.form.unfold"))+" ",1),ue(g,{class:"ml-1",expand:!e.isAdvanced,up:""},null,8,["expand"])]),_:1},8,["onClick"])):re("",!0),W(e.$slots,"advanceAfter")]),_:3})],4)]),_:3},16)):re("",!0)}const yt=Ee(ht,[["render",bt]]);function At(e,a,n){const r=/^\[(.+)\]$/;if(r.test(e)){const d=e.match(r);if(d&&d[1]){const f=d[1].split(",");return a=Array.isArray(a)?a:[a],f.forEach((l,g)=>{X(n,l.trim(),a[g])}),!0}}}function gt(e,a,n){const r=/^\{(.+)\}$/;if(r.test(e)){const d=e.match(r);if(d&&d[1]){const f=d[1].split(",");return a=K(a)?a:{},f.forEach(l=>{X(n,l.trim(),a[l.trim()])}),!0}}}function vt({defaultValueRef:e,getSchema:a,formModel:n,getProps:r}){function d(i){var y,O;if(!K(i))return{};const u={};for(const p of Object.entries(i)){let[,m]=p;const[I]=p;if(!I||ee(m)&&m.length===0||le(m))continue;const S=o(r).transformDateFunc;K(m)&&(m=S==null?void 0:S(m)),ee(m)&&((y=m[0])!=null&&y.format)&&((O=m[1])!=null&&O.format)&&(m=m.map(h=>S==null?void 0:S(h))),ie(m)&&(m===""?m=void 0:m=m.trim()),!At(I,m,u)&&!gt(I,m,u)&&X(u,I,m)}return f(u)}function f(i){const u=o(r).fieldMapToTime;if(!u||!Array.isArray(u))return i;for(const[y,[O,p],m="YYYY-MM-DD"]of u){if(!y||!O||!p)continue;if(!Ae(i,y)){je(i,y);continue}const[I,S]=Ae(i,y),[h,w]=Array.isArray(m)?m:[m,m];!te(I)&&!ge(I)&&X(i,O,l(I,h)),!te(S)&&!ge(S)&&X(i,p,l(S,w)),je(i,y)}return i}function l(i,u){return u==="timestamp"?z(i).unix():u==="timestampStartDay"?z(i).startOf("day").unix():z(i).format(u)}function g(){const i=o(a),u={};i.forEach(y=>{const{defaultValue:O,defaultValueObj:p}=y,m=Object.keys(p||{});m.length&&m.map(I=>{u[I]=p[I],n[I]===void 0&&(n[I]=p[I])}),te(O)||(u[y.field]=O,n[y.field]===void 0&&(n[y.field]=O))}),e.value=J(u)}return{handleFormValues:d,initDefault:g}}const G=24;function Bt({advanceState:e,emit:a,getProps:n,getSchema:r,formModel:d,defaultValueRef:f}){const l=at(),{realWidthRef:g,screenEnum:i,screenRef:u}=Ze(),y=H(()=>{if(!e.isAdvanced)return 0;const h=o(n).emptySpan||0;if(xe(h))return h;if(K(h)){const{span:w=0}=h,N=o(u);return h[N.toLowerCase()]||w||0}return 0}),O=Re(I,30);x([()=>o(r),()=>e.isAdvanced,()=>o(g)],()=>{const{showAdvancedButton:h}=o(n);h&&O()},{immediate:!0});function p(h,w=0,N=!1){const P=o(g),k=parseInt(h.md)||parseInt(h.xs)||parseInt(h.sm)||h.span||G,$=parseInt(h.lg)||k,_=parseInt(h.xl)||$,M=parseInt(h.xxl)||_;return P<=i.LG?w+=k:P<i.XL?w+=$:P<i.XXL?w+=_:w+=M,N?(e.hideAdvanceBtn=!1,w<=G*2?(e.hideAdvanceBtn=!0,e.isAdvanced=!0):w>G*2&&w<=G*(o(n).autoAdvancedLine||3)?e.hideAdvanceBtn=!1:e.isLoad||(e.isLoad=!0,e.isAdvanced=!e.isAdvanced),{isAdvanced:e.isAdvanced,itemColSum:w}):w>G*(o(n).alwaysShowLines||1)?{isAdvanced:e.isAdvanced,itemColSum:w}:{isAdvanced:!0,itemColSum:w}}const m=rt({});function I(){var P;let h=0,w=0;const{baseColProps:N={}}=o(n);for(const k of o(r)){const{show:$,colProps:_}=k;let M=!0;if(et($)&&(M=$),le($)&&(M=$({schema:k,model:d,field:k.field,values:C(C({},o(f)),d)})),M&&(_||N)){const{itemColSum:t,isAdvanced:s}=p(C(C({},N),_),h);h=t||0,s&&(w=h),m[k.field]=s}}(P=l==null?void 0:l.proxy)==null||P.$forceUpdate(),e.actionSpan=w%G+o(y),p(o(n).actionColOptions||{span:G},h,!0),a("advanced-change")}function S(){e.isAdvanced=!e.isAdvanced}return{handleToggleAdvanced:S,fieldsIsAdvancedMap:m}}function Ft(e,a={}){const n=/^\[(.+)\]$/;if(n.test(e)){const r=e.match(n);if(r&&r[1]){const d=r[1].split(",");if(!d.length)return;const f=[];return d.forEach((l,g)=>{X(f,g,a[l.trim()])}),f.filter(Boolean).length?f:void 0}}}function Ot(e,a={}){const n=/^\{(.+)\}$/;if(n.test(e)){const r=e.match(n);if(r&&r[1]){const d=r[1].split(",");if(!d.length)return;const f={};return d.forEach(l=>{X(f,l.trim(),a[l.trim()])}),Object.values(f).filter(Boolean).length?f:void 0}}}function wt({emit:e,getProps:a,formModel:n,getSchema:r,defaultValueRef:d,formElRef:f,schemaRef:l,handleFormValues:g}){function i(){return R(this,null,function*(){const{resetFunc:t,submitOnReset:s}=o(a);t&&le(t)&&(yield t()),o(f)&&(Object.keys(n).forEach(c=>{const A=o(r).find(D=>D.field===c),B=A==null?void 0:A.defaultValueObj,j=Object.keys(B||{});j.length&&j.map(D=>{n[D]=B[D]}),n[c]=It(A,d,c)}),ve(()=>$()),e("reset",De(n)),s&&M())})}const u=()=>o(r).map(t=>[...t.fields||[],t.field]).flat(1).filter(Boolean);function y(t){return R(this,null,function*(){if(Object.keys(t).length===0)return;const s=u(),v=".",c=s.filter(B=>String(B).indexOf(v)>=0),A=[];s.forEach(B=>{const j=o(r).find(T=>T.field===B);let D=Ae(t,B);const fe=Reflect.has(t,B);D=ze(j==null?void 0:j.component,D);const{componentProps:oe}=j||{};let L=oe;typeof oe=="function"&&(L=L({formModel:o(n)}));const se=Ft(B,t)||Ot(B,t);if(fe||se){const T=se||D;if(N(B))if(Array.isArray(T)){const b=[];for(const V of T)b.push(V?z(V):null);o(n)[B]=b}else o(n)[B]=T?L!=null&&L.valueFormat?T:z(T):null;else o(n)[B]=T;L!=null&&L.onChange&&(L==null||L.onChange(T)),A.push(B)}else c.forEach(T=>{try{const b=T.split(".").reduce((V,E)=>V[E],t);Te(b)&&(o(n)[T]=o(b),A.push(T))}catch(b){Te(d.value[T])&&(o(n)[T]=J(o(d.value[T])))}})}),P(A).catch(B=>{})})}function O(t){return R(this,null,function*(){const s=J(o(r));if(!t)return;let v=ie(t)?[t]:t;ie(t)&&(v=[t]);for(const c of v)p(c,s);l.value=s})}function p(t,s){if(ie(t)){const v=s.findIndex(c=>c.field===t);v!==-1&&(delete n[t],s.splice(v,1))}}function m(t,s,v=!1){return R(this,null,function*(){const c=J(o(r)),A=Array.isArray(t)?t.map(D=>D.field):[t.field];if(c.find(D=>A.includes(D.field))){pe("There are schemas that have already been added");return}const B=c.findIndex(D=>D.field===s),j=K(t)?[t]:t;!s||B===-1||v?v?c.unshift(...j):c.push(...j):B!==-1&&c.splice(B+1,0,...j),l.value=c,h(t)})}function I(t){return R(this,null,function*(){let s=[];if(K(t)&&s.push(t),ee(t)&&(s=[...t]),!s.every(c=>c.component==="Divider"||Reflect.has(c,"field")&&c.field)){pe("All children of the form Schema array that need to be updated must contain the `field` field");return}l.value=s})}function S(t){return R(this,null,function*(){let s=[];if(K(t)&&s.push(t),ee(t)&&(s=[...t]),!s.every(A=>A.component==="Divider"||Reflect.has(A,"field")&&A.field)){pe("All children of the form Schema array that need to be updated must contain the `field` field");return}const c=[];o(r).forEach(A=>{let B;if(s.forEach(j=>{A.field===j.field&&(B=j)}),B!==void 0&&A.field===B.field){const j=ke(A,B);c.push(j)}else c.push(A)}),h(c),l.value=tt(c,"field")})}function h(t){let s=[];K(t)&&s.push(t),ee(t)&&(s=[...t]);const v={},c=w();s.forEach(A=>{A.component!="Divider"&&Reflect.has(A,"field")&&A.field&&!te(A.defaultValue)&&(!(A.field in c)||te(c[A.field])||ge(c[A.field]))&&(v[A.field]=A.defaultValue)}),y(v)}function w(){return o(f)?g(De(o(n))):{}}function N(t){return o(r).some(s=>s.field===t&&s.component?$e.includes(s.component):!1)}function P(t){return R(this,null,function*(){var v;const s=yield(v=o(f))==null?void 0:v.validateFields(t);return g(s)})}function k(t){return R(this,null,function*(){var c;let s;t===void 0?s=u():s=t===Array.isArray(t)?t:void 0;const v=yield(c=o(f))==null?void 0:c.validate(s);return g(v)})}function $(t){return R(this,null,function*(){var s;yield(s=o(f))==null?void 0:s.clearValidate(t)})}function _(t,s){return R(this,null,function*(){var v;yield(v=o(f))==null?void 0:v.scrollToField(t,s)})}function M(t){return R(this,null,function*(){t&&t.preventDefault();const{submitFunc:s}=o(a);if(s&&le(s)){yield s();return}if(o(f))try{const c=yield k();e("submit",c)}catch(c){if((c==null?void 0:c.outOfDate)===!1&&(c!=null&&c.errorFields))return;throw new Error(c)}})}return{handleSubmit:M,clearValidate:$,validate:k,validateFields:P,getFieldsValue:w,updateSchema:S,resetSchema:I,appendSchemaByField:m,removeSchemaByField:O,resetFields:i,setFieldsValue:y,scrollToField:_}}function It(e,a,n){let r=J(a.value[n]);return Vt(e)?r||"":(!r&&e&&Tt(e)&&(r=[0,0]),!r&&e&&e.component==="ApiTree"&&(r=[]),r)}function Tt(e){if(e.component==="Slider"&&e.componentProps&&"range"in e.componentProps)return!0}function Vt(e){return(e==null?void 0:e.component)&&Ke.includes(e.component)}function jt(d){return R(this,arguments,function*({getSchema:e,getProps:a,formElRef:n,isInitedDefault:r}){it(()=>R(this,null,function*(){if(o(r)||!o(a).autoFocusFirstItem)return;yield ve();const f=o(e),l=o(n),g=l==null?void 0:l.$el;if(!l||!g||!f||f.length===0)return;const i=f[0];if(!i.component||!i.component.includes("Input"))return;const u=g.querySelector(".ant-row:first-child input");u&&(u==null||u.focus())}))})}const Dt={model:{type:Object,default:()=>({})},labelWidth:{type:[Number,String],default:0},fieldMapToTime:{type:Array,default:()=>[]},compact:F.bool,schemas:{type:Array,default:()=>[]},mergeDynamicData:{type:Object,default:null},baseRowStyle:{type:Object},baseColProps:{type:Object},autoSetPlaceHolder:F.bool.def(!0),autoSubmitOnEnter:F.bool.def(!1),submitOnReset:F.bool,submitOnChange:F.bool,size:F.oneOf(["default","small","large"]).def("default"),disabled:F.bool,emptySpan:{type:[Number,Object],default:0},showAdvancedButton:F.bool,transformDateFunc:{type:Function,default:e=>{var a,n;return(n=(a=e==null?void 0:e.format)==null?void 0:a.call(e,"YYYY-MM-DD HH:mm:ss"))!=null?n:e}},rulesMessageJoinLabel:F.bool.def(!0),autoAdvancedLine:F.number.def(3),alwaysShowLines:F.number.def(1),showActionButtonGroup:F.bool.def(!0),actionColOptions:Object,showResetButton:F.bool.def(!0),autoFocusFirstItem:F.bool,resetButtonOptions:Object,showSubmitButton:F.bool.def(!0),submitButtonOptions:Object,resetFunc:Function,submitFunc:Function,hideRequiredMark:F.bool,labelCol:Object,layout:F.oneOf(["horizontal","vertical","inline"]).def("horizontal"),tableAction:{type:Object},wrapperCol:Object,colon:F.bool,labelAlign:F.string,rowProps:Object},Ct=Pe({name:"BasicForm",components:{FormItem:Ue,Form:Le,Row:nt,FormAction:yt},props:Dt,emits:["advanced-change","reset","submit","register","field-value-change"],setup(e,{emit:a,attrs:n}){const r=Ce({}),d=dt(),f=Ce({isAdvanced:!0,hideAdvanceBtn:!1,isLoad:!1,actionSpan:6}),l=Q({}),g=Q(!1),i=Q(),u=Q(null),y=Q(null),{prefixCls:O}=Qe("basic-form"),p=H(()=>C(C({},e),o(i))),m=H(()=>[O,{[`${O}--compact`]:o(p).compact}]),I=H(()=>{const{baseRowStyle:b={},rowProps:V}=o(p);return C({style:b},V)}),S=H(()=>C(C(C({},n),e),o(p))),h=H(()=>{const b=o(u)||o(p).schemas;for(const V of b){const{defaultValue:E,component:de,componentProps:Be,isHandleDateDefaultValue:_e=!0}=V;if(_e&&E&&de&&$e.includes(de)){const ae=Be?Be.valueFormat:null;if(!Array.isArray(E))V.defaultValue=ae?z(E).format(ae):z(E);else{const Fe=[];E.forEach(Oe=>{Fe.push(ae?z(Oe).format(ae):z(Oe))}),V.defaultValue=Fe}}}return o(p).showAdvancedButton?J(b.filter(V=>V.component!=="Divider")):J(b)}),{handleToggleAdvanced:w,fieldsIsAdvancedMap:N}=Bt({advanceState:f,emit:a,getProps:p,getSchema:h,formModel:r,defaultValueRef:l}),{handleFormValues:P,initDefault:k}=vt({getProps:p,defaultValueRef:l,getSchema:h,formModel:r});jt({getSchema:h,getProps:p,isInitedDefault:g,formElRef:y});const{handleSubmit:$,setFieldsValue:_,clearValidate:M,validate:t,validateFields:s,getFieldsValue:v,updateSchema:c,resetSchema:A,appendSchemaByField:B,removeSchemaByField:j,resetFields:D,scrollToField:fe}=wt({emit:a,getProps:p,formModel:r,getSchema:h,defaultValueRef:l,formElRef:y,schemaRef:u,handleFormValues:P});pt({resetAction:D,submitAction:$}),x(()=>o(p).model,()=>{const{model:b}=o(p);b&&_(b)},{immediate:!0}),x(()=>o(p).schemas,b=>{A(b!=null?b:[])}),x(()=>h.value,b=>{ve(()=>{var V;(V=d==null?void 0:d.redoModalHeight)==null||V.call(d)}),!o(g)&&b!=null&&b.length&&(k(),g.value=!0)}),x(()=>r,Re(()=>{o(p).submitOnChange&&$()},300),{deep:!0});function oe(b){return R(this,null,function*(){i.value=ke(o(i)||{},b)})}function L(b,V,E){r[b]=V,a("field-value-change",b,V),E&&E.itemProps&&!E.itemProps.autoLink&&s([b]).catch(de=>{})}function se(b){const{autoSubmitOnEnter:V}=o(p);if(V&&b.key==="Enter"&&b.target&&b.target instanceof HTMLElement){const E=b.target;E&&E.tagName&&E.tagName.toUpperCase()=="INPUT"&&$()}}const T={getFieldsValue:v,setFieldsValue:_,resetFields:D,updateSchema:c,resetSchema:A,setProps:oe,removeSchemaByField:j,appendSchemaByField:B,clearValidate:M,validateFields:s,validate:t,submit:$,scrollToField:fe};return ct(()=>{k(),a("register",T)}),C({getBindValue:S,handleToggleAdvanced:w,handleEnterPress:se,formModel:r,defaultValueRef:l,advanceState:f,getRow:I,getProps:p,formElRef:y,getSchema:h,formActionType:T,setFormModel:L,getFormClass:m,getFormActionBindProps:H(()=>C(C({},p.value),f)),fieldsIsAdvancedMap:N},T)}});function St(e,a,n,r,d,f){const l=U("FormItem"),g=U("FormAction"),i=U("Row"),u=U("Form");return q(),Z(u,ne(e.getBindValue,{class:e.getFormClass,ref:"formElRef",model:e.formModel,onKeypress:lt(e.handleEnterPress,["enter"])}),{default:Y(()=>[ue(i,ce(ye(e.getRow)),{default:Y(()=>[W(e.$slots,"formHeader"),(q(!0),ut(ft,null,be(e.getSchema,y=>(q(),Z(l,{key:y.field,isAdvanced:e.fieldsIsAdvancedMap[y.field],tableAction:e.tableAction,formActionType:e.formActionType,schema:y,formProps:e.getProps,allDefaultValues:e.defaultValueRef,formModel:e.formModel,setFormModel:e.setFormModel},Se({_:2},[be(Object.keys(e.$slots),O=>({name:O,fn:Y(p=>[W(e.$slots,O,ce(ye(p||{})))])}))]),1032,["isAdvanced","tableAction","formActionType","schema","formProps","allDefaultValues","formModel","setFormModel"]))),128)),ue(g,ne(e.getFormActionBindProps,{onToggleAdvanced:e.handleToggleAdvanced}),Se({_:2},[be(["resetBefore","submitBefore","advanceBefore","advanceAfter"],y=>({name:y,fn:Y(O=>[W(e.$slots,y,ce(ye(O||{})))])}))]),1040,["onToggleAdvanced"]),W(e.$slots,"formFooter")]),_:3},16)]),_:3},16,["class","model","onKeypress"])}const Nt=Ee(Ct,[["render",St]]);export{Nt as B};