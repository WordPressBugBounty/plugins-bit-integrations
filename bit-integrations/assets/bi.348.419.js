var C=Object.defineProperty;var y=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var I=(a,t,s)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,N=(a,t)=>{for(var s in t||(t={}))E.call(t,s)&&I(a,s,t[s]);if(y)for(var s of y(t))O.call(t,s)&&I(a,s,t[s]);return a};import{u as P,r as n,j as i}from"./main-29.js";import{d as F,_ as p,I as L,F as M,c}from"./bi.860.15.js";import{S as A}from"./bi.885.903.js";import q from"./bi.436.270.js";import{b as z,c as k}from"./bi.619.882.js";import{S as B}from"./bi.677.883.js";import"./bi.244.714.js";function V({formFields:a,setFlow:t,flow:s,allIntegURL:g}){const u=P(),[f,d]=n.useState(!1),[b,x]=n.useState({}),[o,S]=n.useState(1),[_,l]=n.useState({show:!1}),h=[{label:"Email Address",key:"email",required:!0}],[e,m]=n.useState({name:"SystemeIO",type:"SystemeIO",api_key:"",field_map:z(h),actionName:"registerPeopletoWabinar",systemeIOFields:h,actions:{}}),w=()=>{d(!0),M(s,t,g,e,u,"","",d).then(r=>{var j;r.success?(c.success((j=r.data)==null?void 0:j.msg),u(g)):c.error(r.data||r)})},T=v=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!k(e)){c.error(p("Please map mandatory fields","bit-integrations"));return}if(!e.selectedTag){c.error(p("Please select a Tag","bit-integrations"));return}e.field_map.length>0&&S(v)};return i.jsxs("div",{children:[i.jsx(F,{snack:_,setSnackbar:l}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(A,{step:3,active:o})}),i.jsx(q,{systemeIOConf:e,setSystemeIOConf:m,step:o,setStep:S,loading:b,setLoading:x,setSnackbar:l}),i.jsxs("div",{className:"btcd-stp-page",style:N({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(B,{formFields:a,systemeIOConf:e,setSystemeIOConf:m,loading:b,setLoading:x,isLoading:f,setIsLoading:d,setSnackbar:l}),(e==null?void 0:e.actionName)&&i.jsxs("button",{onClick:()=>T(3),disabled:!k(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[p("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&i.jsx(L,{step:o,saveConfig:()=>w(),isLoading:f,dataConf:e,setDataConf:m,formFields:a})]})}export{V as default};
