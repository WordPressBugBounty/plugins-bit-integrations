import{u as j,o as S,r as o,j as s}from"./main-814.js";import"./bi.8.440.js";import{S as b}from"./bi.610.13.js";import{S as W}from"./bi.731.934.js";import{i as k}from"./bi.59.3.js";import v from"./bi.787.185.js";import{W as P}from"./bi.219.722.js";import{T as r,t as T}from"./bi.492.709.js";import"./bi.317.0.js";import"./bi.765.9.js";import"./bi.672.11.js";import"./bi.478.14.js";import"./bi.739.707.js";function z({formFields:m,setFlow:n,flow:c,allIntegURL:u}){const p=j(),{formID:d}=S(),[e,l]=o.useState(1),[x,a]=o.useState({show:!1}),[f,g]=o.useState(!1),{wpFusionLinks:t}=T,[i,h]=o.useState({name:"WPFusion Web Hooks",type:"WPFusion",method:"POST",url:""});return s.jsxs("div",{children:[s.jsx(b,{snack:x,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(W,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"WP Fusion",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"WP Fusion",docLink:t==null?void 0:t.docLink}),s.jsx(v,{formID:d,formFields:m,webHooks:i,setWebHooks:h,step:e,setStep:l,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(P,{step:e,saveConfig:()=>k(c,n,u,i,p,"","",g),isLoading:f})})]})}export{z as default};
