var I=Object.defineProperty;var j=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var N=(a,e,s)=>e in a?I(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,_=(a,e)=>{for(var s in e||(e={}))C.call(e,s)&&N(a,s,e[s]);if(j)for(var s of j(e))F.call(e,s)&&N(a,s,e[s]);return a};import{u as E,r as o,j as i}from"./main-814.js";import{_ as l,d as c}from"./bi.317.0.js";import"./bi.8.440.js";import{S as L}from"./bi.610.13.js";import{S as P}from"./bi.731.934.js";import{I as T,i as M}from"./bi.59.3.js";import R from"./bi.613.259.js";import{c as k}from"./bi.65.878.js";import{S as z}from"./bi.308.879.js";import"./bi.765.9.js";import"./bi.672.11.js";import"./bi.478.14.js";import"./bi.492.709.js";function $({formFields:a,setFlow:e,flow:s,allIntegURL:u}){const f=E(),[g,m]=o.useState(!1),[h,S]=o.useState({}),[r,x]=o.useState(1),[y,d]=o.useState({show:!1}),[t,p]=o.useState({name:"SuiteDash",type:"SuiteDash",public_id:"",secret_key:"",field_map:[{formField:"",suiteDashFormField:""}],actionName:"",suiteDashFields:[],actions:{}}),D=()=>{m(!0),M(s,e,u,t,f,"","",m).then(n=>{var v;n.success?(c.success((v=n.data)==null?void 0:v.msg),f(u)):c.error(n.data||n)})},w=b=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!k(t)){c.error(l("Please map mandatory fields","bit-integrations"));return}if(!t.selectedRole){c.error(l("Please select a Role","bit-integrations"));return}t.field_map.length>0&&x(b)};return i.jsxs("div",{children:[i.jsx(L,{snack:y,setSnackbar:d}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(P,{step:3,active:r})}),i.jsx(R,{suiteDashConf:t,setSuiteDashConf:p,step:r,setStep:x,loading:h,setLoading:S,setSnackbar:d}),i.jsxs("div",{className:"btcd-stp-page",style:_({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(z,{formFields:a,suiteDashConf:t,setSuiteDashConf:p,loading:h,setLoading:S,isLoading:g,setIsLoading:m,setSnackbar:d}),(t==null?void 0:t.actionName)&&i.jsxs("button",{onClick:()=>w(3),disabled:!k(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[l("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&i.jsx(T,{step:r,saveConfig:()=>D(),isLoading:g,dataConf:t,setDataConf:p,formFields:a})]})}export{$ as default};
