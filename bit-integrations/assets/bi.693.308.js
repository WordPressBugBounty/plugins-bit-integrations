import{u as j,o as S,r as o,j as s}from"./main-494.js";import"./bi.23.437.js";import{S as v}from"./bi.107.13.js";import{S as W}from"./bi.719.924.js";import{i as b}from"./bi.104.3.js";import{W as T}from"./bi.336.714.js";import k from"./bi.296.184.js";import{T as r,t as y}from"./bi.136.701.js";import"./bi.185.0.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.776.699.js";function A({formFields:m,setFlow:n,flow:c,allIntegURL:p}){const u=j(),{formID:d}=S(),[e,l]=o.useState(1),[x,a]=o.useState({show:!1}),[f,g]=o.useState(!1),{webHooksLinks:t}=y,[i,h]=o.useState({name:"Web Hooks",type:"Web Hooks",method:"POST",url:""});return s.jsxs("div",{children:[s.jsx(v,{snack:x,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(W,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&900,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"Web Hooks",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"Web Hooks",docLink:t==null?void 0:t.docLink}),s.jsx(k,{formID:d,formFields:m,webHooks:i,setWebHooks:h,step:e,setStep:l,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(T,{step:e,saveConfig:()=>b(c,n,p,i,u,"","",g),isLoading:f})})]})}export{A as default};
