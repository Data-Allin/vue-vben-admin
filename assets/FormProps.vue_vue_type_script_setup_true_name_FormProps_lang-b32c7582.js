import{d as c,c as g,a7 as m,Z as v,_,l,a9 as a,u as e,E as d,n as x,z as U,ab as y,a8 as h}from"./vue-ea98dac5.js";import{u as L}from"./useFormDesignState-2b7717e9.js";import{Z as s,av as z,ay as k,V as f,a4 as b,a3 as G}from"./antd-65489578.js";const w={class:"properties-content"},R={key:0},V=c({__name:"FormProps",setup(B){const{formConfig:t}=L();t.value=t.value||{labelCol:{span:24},wrapperCol:{span:24}};const C=p=>{p.target.value==="Grid"&&(t.value.layout="horizontal")},i=g(()=>t.value.labelLayout?Number(t.value.labelCol.span):0);return(p,u)=>{const n=m("RadioButton"),r=m("RadioGroup");return v(),_("div",w,[l(e(G),{class:"properties-body","label-align":"left",layout:"vertical"},{default:a(()=>[l(e(s),{label:"表单布局"},{default:a(()=>[l(r,{"button-style":"solid",value:e(t).layout,"onUpdate:value":u[0]||(u[0]=o=>e(t).layout=o)},{default:a(()=>[l(n,{value:"horizontal"},{default:a(()=>[d("水平")]),_:1}),l(n,{value:"vertical",disabled:e(t).labelLayout==="Grid"},{default:a(()=>[d(" 垂直 ")]),_:1},8,["disabled"]),l(n,{value:"inline",disabled:e(t).labelLayout==="Grid"},{default:a(()=>[d(" 行内 ")]),_:1},8,["disabled"])]),_:1},8,["value"])]),_:1}),l(e(s),{label:"标签布局"},{default:a(()=>[l(r,{buttonStyle:"solid",value:e(t).labelLayout,"onUpdate:value":u[1]||(u[1]=o=>e(t).labelLayout=o),onChange:C},{default:a(()=>[l(n,{value:"flex"},{default:a(()=>[d("固定")]),_:1}),l(n,{value:"Grid",disabled:e(t).layout!=="horizontal"},{default:a(()=>[d(" 栅格 ")]),_:1},8,["disabled"])]),_:1},8,["value"])]),_:1}),x(l(e(s),{label:"标签宽度（px）"},{default:a(()=>[l(e(z),{style:{width:"100%"},value:e(t).labelWidth,"onUpdate:value":u[2]||(u[2]=o=>e(t).labelWidth=o),min:0,step:1},null,8,["value"])]),_:1},512),[[U,e(t).labelLayout==="flex"]]),e(t).labelLayout==="Grid"?(v(),_("div",R,[l(e(s),{label:"labelCol"},{default:a(()=>[l(e(k),{value:i.value,"onUpdate:value":u[3]||(u[3]=o=>i.value=o),max:24},null,8,["value"])]),_:1}),l(e(s),{label:"wrapperCol"},{default:a(()=>[l(e(k),{value:i.value,"onUpdate:value":u[4]||(u[4]=o=>i.value=o),max:24},null,8,["value"])]),_:1}),l(e(s),{label:"标签对齐"},{default:a(()=>[l(r,{"button-style":"solid",value:e(t).labelAlign,"onUpdate:value":u[5]||(u[5]=o=>e(t).labelAlign=o)},{default:a(()=>[l(n,{value:"left"},{default:a(()=>[d("靠左")]),_:1}),l(n,{value:"right"},{default:a(()=>[d("靠右")]),_:1})]),_:1},8,["value"])]),_:1}),l(e(s),{label:"控件大小"},{default:a(()=>[l(r,{"button-style":"solid",value:e(t).size,"onUpdate:value":u[6]||(u[6]=o=>e(t).size=o)},{default:a(()=>[l(n,{value:"default"},{default:a(()=>[d("默认")]),_:1}),l(n,{value:"small"},{default:a(()=>[d("小")]),_:1}),l(n,{value:"large"},{default:a(()=>[d("大")]),_:1})]),_:1},8,["value"])]),_:1})])):y("",!0),l(e(s),{label:"表单属性"},{default:a(()=>[l(e(f),null,{default:a(()=>[e(t).layout=="horizontal"?(v(),h(e(b),{key:0,checked:e(t).colon,"onUpdate:checked":u[7]||(u[7]=o=>e(t).colon=o)},{default:a(()=>[d("label后面显示冒号")]),_:1},8,["checked"])):y("",!0)]),_:1}),l(e(f),null,{default:a(()=>[l(e(b),{checked:e(t).disabled,"onUpdate:checked":u[8]||(u[8]=o=>e(t).disabled=o)},{default:a(()=>[d("禁用")]),_:1},8,["checked"])]),_:1}),l(e(f),null,{default:a(()=>[l(e(b),{checked:e(t).hideRequiredMark,"onUpdate:checked":u[9]||(u[9]=o=>e(t).hideRequiredMark=o)},{default:a(()=>[d("隐藏必选标记")]),_:1},8,["checked"])]),_:1})]),_:1})]),_:1})])}}});export{V as _};
