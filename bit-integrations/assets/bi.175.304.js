import{u as b,o as j,r as o,j as s}from"./main-288.js";import"./bi.197.434.js";import{S}from"./bi.470.13.js";import{S as k}from"./bi.982.916.js";import{g as v}from"./bi.826.3.js";import T from"./bi.142.183.js";import{W as y}from"./bi.972.705.js";import{T as r,t as Z}from"./bi.255.712.js";import"./bi.4.0.js";import"./bi.627.9.js";import"./bi.147.11.js";import"./bi.223.14.js";import"./bi.684.706.js";function $({formFields:p,setFlow:m,flow:n,allIntegURL:c}){const u=b(),{formID:d}=j(),[e,l]=o.useState(1),[x,a]=o.useState({show:!1}),[f,g]=o.useState(!1),{zapierLinks:t}=Z,[i,h]=o.useState({name:"Zapier Web Hooks",type:"Zapier",method:"POST",url:"",apiConsole:"https://zapier.com/app/dashboard"});return s.jsxs("div",{children:[s.jsx(S,{snack:x,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(k,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&900,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"Zapier",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"Zapier",docLink:t==null?void 0:t.docLink}),s.jsx(T,{formID:d,formFields:p,webHooks:i,setWebHooks:h,step:e,setStep:l,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(y,{step:e,saveConfig:()=>v(n,m,c,i,u,"","",g),isLoading:f})})]})}export{$ as default};