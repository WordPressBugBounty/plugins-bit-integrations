import{u as h,o as j,r as o,j as s}from"./main-183.js";import"./bi.554.440.js";import{S}from"./bi.337.13.js";import{S as b}from"./bi.104.939.js";import{i as I}from"./bi.159.3.js";import L from"./bi.63.185.js";import{W as v}from"./bi.242.727.js";import{T as r,t as y}from"./bi.170.714.js";import"./bi.430.0.js";import"./bi.929.9.js";import"./bi.12.11.js";import"./bi.860.14.js";import"./bi.58.712.js";function q({formFields:n,setFlow:m,flow:p,allIntegURL:c}){const u=h(),{formID:d}=j(),[e,l]=o.useState(1),[f,a]=o.useState({show:!1}),[k,x]=o.useState(!1),{iFTTT:t}=y,[i,g]=o.useState({name:"IFTTT Web Hooks",type:"IFTTT",method:"POST",url:"",apiConsole:""});return s.jsxs("div",{children:[s.jsx(S,{snack:f,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(b,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&900,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"IFTTT",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"IFTTT",docLink:t==null?void 0:t.docLink}),s.jsx(L,{formID:d,formFields:n,webHooks:i,setWebHooks:g,step:e,setStep:l,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(v,{step:e,saveConfig:()=>I(p,m,c,i,u,"","",x),isLoading:k})})]})}export{q as default};
