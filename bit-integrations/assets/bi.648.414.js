import{u as W,o as h,r as o,j as s}from"./main-623.js";import"./bi.1.443.js";import{S as j}from"./bi.957.13.js";import{S}from"./bi.408.976.js";import{g as b}from"./bi.757.3.js";import L from"./bi.987.186.js";import{W as P}from"./bi.824.758.js";import{T as r,t as v}from"./bi.971.765.js";import"./bi.422.0.js";import"./bi.331.9.js";import"./bi.727.11.js";import"./bi.218.14.js";import"./bi.219.759.js";function $({formFields:n,setFlow:m,flow:c,allIntegURL:p}){const u=W(),{formID:d}=h(),[e,l]=o.useState(1),[k,i]=o.useState({show:!1}),[x,f]=o.useState(!1),{automatorWP:t}=v,[a,g]=o.useState({name:"AutomatorWP Web Hooks",type:"AutomatorWP",method:"POST",url:""});return s.jsxs("div",{children:[s.jsx(j,{snack:k,setSnackbar:i}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(S,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"AutomatorWP",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"AutomatorWP",docLink:t==null?void 0:t.docLink}),s.jsx(L,{formID:d,formFields:n,webHooks:a,setWebHooks:g,step:e,setStep:l,setSnackbar:i,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(P,{step:e,saveConfig:()=>b(c,m,p,a,u,"","",f),isLoading:x})})]})}export{$ as default};
