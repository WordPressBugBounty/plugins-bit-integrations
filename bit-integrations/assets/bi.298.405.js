import{u as h,l as j,r as o,j as s}from"./main-692.js";import{d as b,F as S}from"./bi.751.13.js";import{S as k}from"./bi.579.899.js";import v from"./bi.664.180.js";import{W as y}from"./bi.585.693.js";import{T as r,t as w}from"./bi.719.710.js";import"./bi.244.694.js";function P({formFields:n,setFlow:c,flow:u,allIntegURL:m}){const d=h(),{formID:p}=j(),[e,l]=o.useState(1),[x,a]=o.useState({show:!1}),[f,g]=o.useState(!1),{thriveAutomatorLinks:t}=w,[i,T]=o.useState({name:"ThriveAutomator Web Hooks",type:"ThriveAutomator",method:"POST",url:""});return s.jsxs("div",{children:[s.jsx(b,{snack:x,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(k,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"Thrive Automator",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"Thrive Automator",docLink:t==null?void 0:t.docLink}),s.jsx(v,{formID:p,formFields:n,webHooks:i,setWebHooks:T,step:e,setStep:l,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(y,{step:e,saveConfig:()=>S(u,c,m,i,d,"","",g),isLoading:f})})]})}export{P as default};
