import{u as j,l as b,r as o,j as s}from"./main-80.js";import{d as S,F as W}from"./bi.433.0.js";import{S as k}from"./bi.293.894.js";import v from"./bi.342.168.js";import{W as T}from"./bi.64.686.js";import{T as r,t as y}from"./bi.717.703.js";import"./bi.29.687.js";function D({formFields:n,setFlow:c,flow:u,allIntegURL:m}){const d=j(),{formID:p}=b(),[e,l]=o.useState(1),[x,a]=o.useState({show:!1}),[f,g]=o.useState(!1),{wPWebhooksLinks:t}=y,[i,h]=o.useState({name:"WPWebhooks Web Hooks",type:"WPWebhooks",method:"POST",url:""});return s.jsxs("div",{children:[s.jsx(S,{snack:x,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(k,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"WP Webhooks",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"WP Webhooks",docLink:t==null?void 0:t.docLink}),s.jsx(v,{formID:p,formFields:n,webHooks:i,setWebHooks:h,step:e,setStep:l,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(T,{step:e,saveConfig:()=>W(u,c,m,i,d,"","",g),isLoading:f})})]})}export{D as default};