import{u as j,o as S,r as o,j as s}from"./main-615.js";import"./bi.991.437.js";import{S as b}from"./bi.700.13.js";import{S as W}from"./bi.440.922.js";import{g as k}from"./bi.819.3.js";import v from"./bi.252.184.js";import{W as T}from"./bi.776.712.js";import{T as r,t as y}from"./bi.681.699.js";import"./bi.394.0.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.560.697.js";function z({formFields:m,setFlow:n,flow:c,allIntegURL:p}){const u=j(),{formID:d}=S(),[e,l]=o.useState(1),[x,a]=o.useState({show:!1}),[f,g]=o.useState(!1),{wPWebhooksLinks:t}=y,[i,h]=o.useState({name:"WPWebhooks Web Hooks",type:"WPWebhooks",method:"POST",url:""});return s.jsxs("div",{children:[s.jsx(b,{snack:x,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(W,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"WP Webhooks",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"WP Webhooks",docLink:t==null?void 0:t.docLink}),s.jsx(v,{formID:d,formFields:m,webHooks:i,setWebHooks:h,step:e,setStep:l,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(T,{step:e,saveConfig:()=>k(c,n,p,i,u,"","",g),isLoading:f})})]})}export{z as default};
