import{u as h,l as j,r as o,j as s}from"./main-692.js";import{d as b,F as S}from"./bi.751.13.js";import{S as I}from"./bi.579.899.js";import L from"./bi.664.180.js";import{W as v}from"./bi.585.693.js";import{T as n,t as y}from"./bi.719.710.js";import"./bi.244.694.js";function D({formFields:r,setFlow:c,flow:u,allIntegURL:m}){const p=h(),{formID:d}=j(),[e,l]=o.useState(1),[k,a]=o.useState({show:!1}),[f,x]=o.useState(!1),{iFTTT:t}=y,[i,g]=o.useState({name:"IFTTT Web Hooks",type:"IFTTT",method:"POST",url:"",apiConsole:""});return s.jsxs("div",{children:[s.jsx(b,{snack:k,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(I,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&900,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(n,{title:"IFTTT",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(n,{title:"IFTTT",docLink:t==null?void 0:t.docLink}),s.jsx(L,{formID:d,formFields:r,webHooks:i,setWebHooks:g,step:e,setStep:l,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(v,{step:e,saveConfig:()=>S(u,c,m,i,p,"","",x),isLoading:f})})]})}export{D as default};
