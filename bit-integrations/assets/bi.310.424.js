var C=Object.defineProperty;var y=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var I=(a,t,s)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,N=(a,t)=>{for(var s in t||(t={}))E.call(t,s)&&I(a,s,t[s]);if(y)for(var s of y(t))O.call(t,s)&&I(a,s,t[s]);return a};import{u as P,r as o,j as i}from"./main-119.js";import{_ as l,d as c}from"./bi.686.0.js";import"./bi.276.437.js";import{S as L}from"./bi.725.13.js";import{S as M}from"./bi.36.924.js";import{I as A,i as F}from"./bi.316.3.js";import q from"./bi.668.272.js";import{b as z,c as k}from"./bi.688.897.js";import{S as B}from"./bi.420.898.js";import"./bi.900.9.js";import"./bi.301.11.js";import"./bi.744.14.js";import"./bi.606.701.js";function ee({formFields:a,setFlow:t,flow:s,allIntegURL:g}){const u=P(),[f,m]=o.useState(!1),[b,S]=o.useState({}),[r,x]=o.useState(1),[_,p]=o.useState({show:!1}),h=[{label:"Email Address",key:"email",required:!0}],[e,d]=o.useState({name:"SystemeIO",type:"SystemeIO",api_key:"",field_map:z(h),actionName:"registerPeopletoWabinar",systemeIOFields:h,actions:{}}),w=()=>{m(!0),F(s,t,g,e,u,"","",m).then(n=>{var j;n.success?(c.success((j=n.data)==null?void 0:j.msg),u(g)):c.error(n.data||n)})},T=v=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!k(e)){c.error(l("Please map mandatory fields","bit-integrations"));return}if(!e.selectedTag){c.error(l("Please select a Tag","bit-integrations"));return}e.field_map.length>0&&x(v)};return i.jsxs("div",{children:[i.jsx(L,{snack:_,setSnackbar:p}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(M,{step:3,active:r})}),i.jsx(q,{systemeIOConf:e,setSystemeIOConf:d,step:r,setStep:x,loading:b,setLoading:S,setSnackbar:p}),i.jsxs("div",{className:"btcd-stp-page",style:N({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(B,{formFields:a,systemeIOConf:e,setSystemeIOConf:d,loading:b,setLoading:S,isLoading:f,setIsLoading:m,setSnackbar:p}),(e==null?void 0:e.actionName)&&i.jsxs("button",{onClick:()=>T(3),disabled:!k(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[l("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&i.jsx(A,{step:r,saveConfig:()=>w(),isLoading:f,dataConf:e,setDataConf:d,formFields:a})]})}export{ee as default};
