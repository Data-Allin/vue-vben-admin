var v=Object.defineProperty;var f=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var F=(e,o,n)=>o in e?v(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,L=(e,o)=>{for(var n in o||(o={}))B.call(o,n)&&F(e,n,o[n]);if(f)for(var n of f(o))h.call(o,n)&&F(e,n,o[n]);return e};import{aE as T,aF as D,_ as W}from"./index.js";import{u as A,d as R,f as C,r as $,G as w,a7 as l,q as P,n as N,Z as V,a8 as q,a9 as u,$ as G,l as t,E as r}from"./vue-ea98dac5.js";import{P as S}from"./index-9aeceda4.js";import{a2 as _}from"./antd-65489578.js";import"./useContentViewHeight-ce36ed45.js";import"./useWindowSizeFn-01ffbee2.js";import"./onMountedOrActivated-3eb95ecd.js";function b(e){let o,n=document.body;if(Reflect.has(e,"target")||Reflect.has(e,"props")){const a=e;o=a.props||{},n=a.target||document.body}else o=e;const s=T(o,void 0,!0);return[()=>{const a=A(n);a&&s.open(a)},()=>{s.close()},a=>{s.setTip(a)}]}const Z=R({components:{Loading:D,PageWrapper:S,[_.name]:_},setup(){const e=C(null),o=C(!1),n=$({absolute:!1,loading:!1,theme:"dark",background:"rgba(111,111,111,.7)",tip:"加载中..."}),[s,p]=b({tip:"加载中..."}),[c,i]=b({target:e,props:{tip:"加载中...",absolute:!0}});function a(E){n.absolute=E,n.loading=!0,setTimeout(()=>{n.loading=!1},2e3)}function d(){a(!1)}function m(){a(!0)}function g(){s(),setTimeout(()=>{p()},2e3)}function k(){c(),setTimeout(()=>{i()},2e3)}function y(){o.value=!0,setTimeout(()=>{o.value=!1},2e3)}return L({openCompFullLoading:d,openFnFullLoading:g,openFnWrapLoading:k,openCompAbsolute:m,wrapEl:e,loadingRef:o,openDirectiveLoading:y},w(n))}}),j={ref:"wrapEl"};function z(e,o,n,s,p,c){const i=l("a-alert"),a=l("a-button"),d=l("Loading"),m=l("PageWrapper"),g=P("loading");return N((V(),q(m,{"loading-tip":"加载中...",title:"Loading组件示例"},{default:u(()=>[G("div",j,[t(i,{message:"组件方式"}),t(a,{class:"my-4 mr-4",type:"primary",onClick:e.openCompFullLoading},{default:u(()=>[r(" 全屏 Loading ")]),_:1},8,["onClick"]),t(a,{class:"my-4",type:"primary",onClick:e.openCompAbsolute},{default:u(()=>[r(" 容器内 Loading ")]),_:1},8,["onClick"]),t(d,{loading:e.loading,absolute:e.absolute,theme:e.theme,background:e.background,tip:e.tip},null,8,["loading","absolute","theme","background","tip"]),t(i,{message:"函数方式"}),t(a,{class:"my-4 mr-4",type:"primary",onClick:e.openFnFullLoading},{default:u(()=>[r(" 全屏 Loading ")]),_:1},8,["onClick"]),t(a,{class:"my-4",type:"primary",onClick:e.openFnWrapLoading},{default:u(()=>[r(" 容器内 Loading ")]),_:1},8,["onClick"]),t(i,{message:"指令方式"}),t(a,{class:"my-4 mr-4",type:"primary",onClick:e.openDirectiveLoading},{default:u(()=>[r(" 打开指令Loading ")]),_:1},8,["onClick"])],512)]),_:1})),[[g,e.loadingRef]])}const X=W(Z,[["render",z]]);export{X as default};