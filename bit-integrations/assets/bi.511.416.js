import{u as h,o as j,r as s,j as e}from"./main-777.js";import"./bi.463.440.js";import{S}from"./bi.309.13.js";import{S as b}from"./bi.50.934.js";import{i as I}from"./bi.644.3.js";import L from"./bi.378.185.js";import{W as f}from"./bi.303.722.js";import{T as r,t as F}from"./bi.805.709.js";import"./bi.157.0.js";import"./bi.681.9.js";import"./bi.677.11.js";import"./bi.181.14.js";import"./bi.361.707.js";function R({formFields:i,setFlow:m,flow:c,allIntegURL:d}){const p=h(),{formID:u}=j(),[o,g]=s.useState(1),[l,a]=s.useState({show:!1}),[k,v]=s.useState(!1),[n,x]=s.useState({name:"AdvancedFormIntegration Web Hooks",type:"AdvancedFormIntegration",method:"POST",url:""}),{afi:t}=F;return e.jsxs("div",{children:[e.jsx(S,{snack:l,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(b,{step:2,active:o})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:o===1&&1100,height:o===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(r,{title:"Advanced Form Integration",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(r,{title:"Advanced Form Integration",docLink:t==null?void 0:t.docLink}),e.jsx(L,{formID:u,formFields:i,webHooks:n,setWebHooks:x,step:o,setStep:g,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:o===2&&"100%",height:o===2&&"auto"},children:e.jsx(f,{step:o,saveConfig:()=>I(c,m,d,n,p,"","",v),isLoading:k})})]})}export{R as default};
