import{u as j,l as b,r as o,j as s}from"./main-692.js";import{d as S,F as W}from"./bi.751.13.js";import{S as k}from"./bi.579.899.js";import v from"./bi.664.180.js";import{W as P}from"./bi.585.693.js";import{T as r,t as T}from"./bi.719.710.js";import"./bi.244.694.js";function D({formFields:n,setFlow:c,flow:u,allIntegURL:m}){const d=j(),{formID:l}=b(),[e,x]=o.useState(1),[p,a]=o.useState({show:!1}),[f,g]=o.useState(!1),{wpFusionLinks:t}=T,[i,h]=o.useState({name:"WPFusion Web Hooks",type:"WPFusion",method:"POST",url:""});return s.jsxs("div",{children:[s.jsx(S,{snack:p,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(k,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"WP Fusion",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"WP Fusion",docLink:t==null?void 0:t.docLink}),s.jsx(v,{formID:l,formFields:n,webHooks:i,setWebHooks:h,step:e,setStep:x,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(P,{step:e,saveConfig:()=>W(u,c,m,i,d,"","",g),isLoading:f})})]})}export{D as default};