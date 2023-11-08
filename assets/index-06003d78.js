import{f as $,_ as P,b as L}from"./index.js";import{a1 as N,ag as b,b5 as M,Q as z,ab as D,aC as R,bu as q,a0 as B,aT as x}from"./antd-65489578.js";import{d as S,f as G,c as k,u as C,w as I,a7 as o,Z as s,a8 as g,a9 as i,_ as u,aa as O,l as d,$ as w,af as V,E as F,a0 as f,ab as T,F as A,a1 as K}from"./vue-ea98dac5.js";const j=[{key:"1",name:"通知",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"你收到了 14 份新周报",description:"",datetime:"2017-08-09",type:"1"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"你推荐的 曲妮妮 已通过第三轮面试",description:"",datetime:"2017-08-08",type:"1"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"这种模板可以区分多种通知类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"标题可以设置自动显示省略号，本例中标题行数已设为1行，如果内容超过1行将自动截断并支持tooltip显示完整标题。",description:"",datetime:"2017-08-07",type:"1"},{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000009",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000010",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"}]},{key:"2",name:"消息",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"曲丽丽 评论了你",description:"描述信息描述信息描述信息",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"朱偏右 回复了你",description:"这种模板用于提醒谁与你发生了互动",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"标题",description:"请将鼠标移动到此处，以便测试超长的消息在此处将如何处理。本例中设置的描述最大行数为2，超过2行的描述内容将被省略并且可以通过tooltip查看完整内容",datetime:"2017-08-07",type:"2",clickClose:!0}]},{key:"3",name:"待办",list:[{id:"000000009",avatar:"",title:"任务名称",description:"任务需要在 2017-01-12 20:00 前启动",datetime:"",extra:"未开始",color:"",type:"3"},{id:"000000010",avatar:"",title:"第三方紧急代码变更",description:"冠霖 需在 2017-01-07 前完成代码变更任务",datetime:"",extra:"马上到期",color:"red",type:"3"},{id:"000000011",avatar:"",title:"信息安全考试",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"已耗时 8 天",color:"gold",type:"3"},{id:"000000012",avatar:"",title:"ABCD 版本发布",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"进行中",color:"blue",type:"3"}]}],E=S({components:{[N.name]:N,[b.name]:b,[b.Item.name]:b.Item,AListItemMeta:b.Item.Meta,ATypographyParagraph:M.Paragraph,[z.name]:z},props:{list:{type:Array,default:()=>[]},pageSize:{type:[Boolean,Number],default:5},currentPage:{type:Number,default:1},titleRows:{type:Number,default:1},descRows:{type:Number,default:2},onTitleClick:{type:Function}},emits:["update:currentPage"],setup(t,{emit:y}){const{prefixCls:_}=$("header-notify-list"),c=G(t.currentPage||1),v=k(()=>{const{pageSize:a,list:p}=t;if(a===!1)return[];let r=D(a)?a:5;return p.slice(r*(C(c)-1),r*C(c))});I(()=>t.currentPage,a=>{c.value=a});const n=k(()=>!!t.onTitleClick),l=k(()=>{const{list:a,pageSize:p}=t,r=D(p)?p:Number(p)&&5;return r>0&&a&&a.length>r?{total:a.length,pageSize:r,current:C(c),onChange(m){c.value=m,y("update:currentPage",m)}}:!1});function h(a){t.onTitleClick&&t.onTitleClick(a)}return{prefixCls:_,getPagination:l,getData:v,handleTitleClick:h,isTitleClickable:n}}});const X={class:"title"},H={key:0,class:"extra"},U={key:1},Z={key:0,class:"description"},J={class:"datetime"};function Q(t,y,_,c,v,n){const l=o("a-typography-paragraph"),h=o("a-tag"),a=o("a-avatar"),p=o("a-list-item-meta"),r=o("a-list-item"),m=o("a-list");return s(),g(m,{class:K(t.prefixCls),bordered:"",pagination:t.getPagination},{default:i(()=>[(s(!0),u(A,null,O(t.getData,e=>(s(),g(r,{key:e.id,class:"list-item"},{default:i(()=>[d(p,null,{title:i(()=>[w("div",X,[d(l,{onClick:at=>t.handleTitleClick(e),style:V([{width:"100%","margin-bottom":"0 !important"},{cursor:t.isTitleClickable?"pointer":""}]),delete:!!e.titleDelete,ellipsis:t.$props.titleRows&&t.$props.titleRows>0?{rows:t.$props.titleRows,tooltip:!!e.title}:!1,content:e.title},null,8,["onClick","style","delete","ellipsis","content"]),e.extra?(s(),u("div",H,[d(h,{class:"tag",color:e.color},{default:i(()=>[F(f(e.extra),1)]),_:2},1032,["color"])])):T("",!0)])]),avatar:i(()=>[e.avatar?(s(),g(a,{key:0,class:"avatar",src:e.avatar},null,8,["src"])):(s(),u("span",U,f(e.avatar),1))]),description:i(()=>[w("div",null,[e.description?(s(),u("div",Z,[d(l,{style:{width:"100%","margin-bottom":"0 !important"},ellipsis:t.$props.descRows&&t.$props.descRows>0?{rows:t.$props.descRows,tooltip:!!e.description}:!1,content:e.description},null,8,["ellipsis","content"])])):T("",!0),w("div",J,f(e.datetime),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["class","pagination"])}const W=P(E,[["render",Q],["__scopeId","data-v-6a413936"]]),Y=S({components:{Popover:R,BellOutlined:q,Tabs:B,TabPane:B.TabPane,Badge:x,NoticeList:W},setup(){const{prefixCls:t}=$("header-notify"),{createMessage:y}=L(),_=G(j),c=k(()=>{let n=0;for(let l=0;l<j.length;l++)n+=j[l].list.length;return n});function v(n){y.success("你点击了通知，ID="+n.id),n.titleDelete=!n.titleDelete}return{prefixCls:t,listData:_,count:c,onNoticeClick:v,numberStyle:{}}}});const tt={key:0};function et(t,y,_,c,v,n){const l=o("BellOutlined"),h=o("Badge"),a=o("NoticeList"),p=o("TabPane"),r=o("Tabs"),m=o("Popover");return s(),u("div",{class:K(t.prefixCls)},[d(m,{title:"",trigger:"click",overlayClassName:`${t.prefixCls}__overlay`},{content:i(()=>[d(r,null,{default:i(()=>[(s(!0),u(A,null,O(t.listData,e=>(s(),g(p,{key:e.key},{tab:i(()=>[F(f(e.name)+" ",1),e.list.length!==0?(s(),u("span",tt,"("+f(e.list.length)+")",1)):T("",!0)]),default:i(()=>[e.key==="1"?(s(),g(a,{key:0,list:e.list,onTitleClick:t.onNoticeClick},null,8,["list","onTitleClick"])):(s(),g(a,{key:1,list:e.list},null,8,["list"]))]),_:2},1024))),128))]),_:1})]),default:i(()=>[d(h,{count:t.count,dot:"",numberStyle:t.numberStyle},{default:i(()=>[d(l)]),_:1},8,["count","numberStyle"])]),_:1},8,["overlayClassName"])],2)}const nt=P(Y,[["render",et]]);export{nt as default};