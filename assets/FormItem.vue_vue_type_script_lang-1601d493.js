var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var G=(e,s,f)=>s in e?Z(e,s,{enumerable:!0,configurable:!0,writable:!0,value:f}):e[s]=f,d=(e,s)=>{for(var f in s||(s={}))se.call(s,f)&&G(e,f,s[f]);if(E)for(var f of E(s))ne.call(s,f)&&G(e,f,s[f]);return e},H=(e,s)=>ee(e,te(s));import{c as V,u as a,d as oe,G as re,n as ae,l as g,i as le,z as ce,ac as J,E as ie}from"./vue-ea98dac5.js";import{c as U}from"./componentMap-1fcf0129.js";import{k as X,r as $,X as ue}from"./index.js";import{ab as Y,e as x,ai as N,V as z,a5 as de,a3 as fe,f as me,r as he,w as pe}from"./antd-65489578.js";function be(e){return"slot"in e}function ge(e){return!be(e)}const{t:W}=X();function K(e){return e.includes("Input")||e.includes("Complete")?W("common.inputText"):e.includes("Picker")||e.includes("Select")||e.includes("Cascader")||e.includes("Checkbox")||e.includes("Radio")||e.includes("Switch")?W("common.chooseText"):""}const Pe=["DatePicker","MonthPicker","WeekPicker","TimePicker"];function Ce(){return[...Pe,"RangePicker"]}function ye(e,s,f){Reflect.has(e,"type")||(["DatePicker","MonthPicker","WeekPicker","TimePicker"].includes(s)?e.type=f?"string":"object":["RangePicker","Upload","CheckboxGroup","TimePicker"].includes(s)?e.type="array":["InputNumber"].includes(s)&&(e.type="number"))}function Re(e,s){return e&&["Input","InputPassword","InputSearch","InputTextArea"].includes(e)&&s&&Y(s)?`${s}`:s}const Me=Ce(),je=["Input","InputPassword","InputSearch","InputTextArea"],xe=["Upload","ApiTransfer","ApiTree","ApiTreeSelect","ApiRadioGroup","ApiCascader","AutoComplete","RadioButtonGroup","ImageUpload","ApiSelect"];function Ae(e,s){return V(()=>{const f=a(e),{labelCol:M={},wrapperCol:j={}}=f.itemProps||{},{labelWidth:D,disabledLabelWidth:p}=f,{labelWidth:A,labelCol:k,wrapperCol:L,layout:q}=a(s);if(!A&&!D&&!k||p)return M.style={textAlign:"left"},{labelCol:M,wrapperCol:j};let C=D||A;const F=d(d({},k),M),v=d(d({},L),j);return C&&(C=Y(C)?`${C}px`:C),{labelCol:d({style:{width:C}},F),wrapperCol:d({style:{width:q==="vertical"?"100%":`calc(100% - ${C})`}},v)}})}function B(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!le(e)}const De=oe({name:"BasicFormItem",inheritAttrs:!1,props:{schema:{type:Object,default:()=>({})},formProps:{type:Object,default:()=>({})},allDefaultValues:{type:Object,default:()=>({})},formModel:{type:Object,default:()=>({})},setFormModel:{type:Function,default:null},tableAction:{type:Object},formActionType:{type:Object},isAdvanced:{type:Boolean}},setup(e,{slots:s}){const{t:f}=X(),{schema:M,formProps:j}=re(e),D=Ae(M,j),p=V(()=>{const{allDefaultValues:n,formModel:t,schema:l}=e,{mergeDynamicData:c}=e.formProps;return{field:l.field,model:t,values:d(d(d({},c),n),t),schema:l}}),A=V(()=>{var r;const{schema:n,tableAction:t,formModel:l,formActionType:c}=e;let{componentProps:o={}}=n;return x(o)&&(o=(r=o({schema:n,tableAction:t,formModel:l,formActionType:c}))!=null?r:{}),n.component==="Divider"&&(o=Object.assign({type:"horizontal"},{orientation:"left",plain:!0},o)),o}),k=V(()=>{const{disabled:n}=e.formProps,{dynamicDisabled:t}=e.schema,{disabled:l=!1}=a(A);let c=!!n||l;return N(t)&&(c=t),x(t)&&(c=t(a(p))),c});function L(){const{show:n,ifShow:t}=e.schema,{showAdvancedButton:l}=e.formProps,c=l&&N(e.isAdvanced)?e.isAdvanced:!0;let o=!0,r=!0;return N(n)&&(o=n),N(t)&&(r=t),x(n)&&(o=n(a(p))),x(t)&&(r=t(a(p))),o=o&&c,{isShow:o,isIfShow:r}}function q(){var R;const{rules:n=[],component:t,rulesMessageJoinLabel:l,label:c,dynamicRules:o,required:r}=e.schema;if(x(o))return o(a(p));let i=me(n);const{rulesMessageJoinLabel:w}=e.formProps,y=(Reflect.has(e.schema,"rulesMessageJoinLabel")?l:w)?c:"",b=t?K(t)+y:y;function m(h,u){const P=h.message||b;return u===void 0||he(u)||Array.isArray(u)&&u.length===0||typeof u=="string"&&u.trim()===""||typeof u=="object"&&Reflect.has(u,"checked")&&Reflect.has(u,"halfChecked")&&Array.isArray(u.checked)&&Array.isArray(u.halfChecked)&&u.checked.length===0&&u.halfChecked.length===0?Promise.reject(P):Promise.resolve()}const T=x(r)?r(a(p)):r;T&&(!i||i.length===0?i=[{required:T,validator:m}]:i.findIndex(u=>Reflect.has(u,"required"))===-1&&i.push({required:T,validator:m}));const O=i.findIndex(h=>Reflect.has(h,"required")&&!Reflect.has(h,"validator"));if(O!==-1){const h=i[O],{isShow:u}=L();if(u||(h.required=!1),t){h.message=h.message||b,(t.includes("Input")||t.includes("Textarea"))&&(h.whitespace=!0);const P=(R=a(A))==null?void 0:R.valueFormat;ye(h,t,P)}}const I=i.findIndex(h=>h.max);return I!==-1&&!i[I].validator&&(i[I].message=i[I].message||f("component.form.maxTip",[i[I].max])),i}function C(){var h;if(!ge(e.schema))return null;const{renderComponentContent:n,component:t,field:l,changeEvent:c="change",valueField:o}=e.schema,r=t&&["Switch","Checkbox"].includes(t),i=`on${pe(c)}`,w={[i]:(...u)=>{const[P]=u;m[i]&&m[i](...u);const _=P?P.target:null,Q=_?r?_.checked:_.value:P;e.setFormModel(l,Q,e.schema)}},S=U.get(t),{autoSetPlaceHolder:y,size:b}=e.formProps,m=H(d({allowClear:!0,size:b},a(A)),{disabled:a(k)});!m.disabled&&y&&t!=="RangePicker"&&t&&(m.placeholder=((h=a(A))==null?void 0:h.placeholder)||K(t)),m.codeField=l,m.formValues=a(p);const O={[o||(r?"checked":"value")]:e.formModel[l]},I=d(d(d({},m),w),O);if(!n)return g(S,I,null);const R=x(n)?d({},n(a(p),{disabled:a(k)})):{default:()=>n};return g(S,I,B(R)?R:{default:()=>[R]})}function F(){const{label:n,helpMessage:t,helpComponentProps:l,subLabel:c}=e.schema,o=c?g("span",null,[n,ie(" "),g("span",{class:"text-secondary"},[c])]):n,r=x(t)?t(a(p)):t;return!r||Array.isArray(r)&&r.length===0?o:g("span",null,[o,g(ue,J({placement:"top",class:"mx-1",text:r},l),null)])}function v(){const{itemProps:n,slot:t,render:l,field:c,suffix:o,component:r}=e.schema,{labelCol:i,wrapperCol:w}=a(D),{colon:S}=e.formProps,y={disabled:a(k)};if(r==="Divider"){let b;return g(z,{span:24},{default:()=>[g(de,a(A),B(b=F())?b:{default:()=>[b]})]})}else{const b=()=>t?$(s,t,a(p),y):l?l(a(p),y):C(),m=!!o,T=x(o)?o(a(p)):o;return r&&xe.includes(r)&&e.schema&&(e.schema.itemProps=d({autoLink:!1},e.schema.itemProps)),g(fe.Item,J({name:c,colon:S,class:{"suffix-item":m}},n,{label:F(),rules:q(),labelCol:i,wrapperCol:w}),{default:()=>[g("div",{style:"display:flex"},[g("div",{style:"flex:1;"},[b()]),m&&g("span",{class:"suffix"},[T])])]})}}return()=>{let n;const{colProps:t={},colSlot:l,renderColContent:c,component:o,slot:r}=e.schema;if(!o||!U.has(o)&&!r)return null;const{baseColProps:i={}}=e.formProps,w=d(d({},i),t),{isIfShow:S,isShow:y}=L(),b=a(p),m={disabled:a(k)};return S&&ae(g(z,w,B(n=(()=>l?$(s,l,b,m):c?c(b,m):v())())?n:{default:()=>[n]}),[[ce,y]])}}});export{De as _,je as a,Me as d,Re as h};
