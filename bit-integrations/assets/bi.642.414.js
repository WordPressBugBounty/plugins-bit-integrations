import{u as h,o as j,r as s,j as e}from"./main-494.js";import"./bi.23.437.js";import{S}from"./bi.107.13.js";import{S as b}from"./bi.719.924.js";import{i as I}from"./bi.104.3.js";import L from"./bi.296.184.js";import{W as f}from"./bi.336.714.js";import{T as r,t as F}from"./bi.136.701.js";import"./bi.185.0.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.776.699.js";function R({formFields:i,setFlow:m,flow:c,allIntegURL:d}){const p=h(),{formID:u}=j(),[o,g]=s.useState(1),[l,a]=s.useState({show:!1}),[k,v]=s.useState(!1),[n,x]=s.useState({name:"AdvancedFormIntegration Web Hooks",type:"AdvancedFormIntegration",method:"POST",url:""}),{afi:t}=F;return e.jsxs("div",{children:[e.jsx(S,{snack:l,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(b,{step:2,active:o})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:o===1&&1100,height:o===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(r,{title:"Advanced Form Integration",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(r,{title:"Advanced Form Integration",docLink:t==null?void 0:t.docLink}),e.jsx(L,{formID:u,formFields:i,webHooks:n,setWebHooks:x,step:o,setStep:g,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:o===2&&"100%",height:o===2&&"auto"},children:e.jsx(f,{step:o,saveConfig:()=>I(c,m,d,n,p,"","",v),isLoading:k})})]})}export{R as default};