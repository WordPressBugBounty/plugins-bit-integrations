import{u as g,o as j,r as o,j as s}from"./main-320.js";import"./bi.795.440.js";import{S}from"./bi.51.13.js";import{S as k}from"./bi.78.940.js";import{i as v}from"./bi.337.3.js";import P from"./bi.364.185.js";import{W as y}from"./bi.303.726.js";import{T as r,t as T}from"./bi.382.733.js";import"./bi.576.0.js";import"./bi.155.9.js";import"./bi.440.11.js";import"./bi.574.14.js";import"./bi.27.727.js";function q({formFields:n,setFlow:c,flow:m,allIntegURL:p}){const u=g(),{formID:d}=j(),[e,l]=o.useState(1),[x,a]=o.useState({show:!1}),[b,f]=o.useState(!1),{pabblyLinks:t}=T,[i,h]=o.useState({name:"Pabbly Web Hooks",type:"Pabbly",method:"POST",url:"",apiConsole:"https://connect.pabbly.com/dashboard"});return s.jsxs("div",{children:[s.jsx(S,{snack:x,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(k,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"Pabbly",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"Pabbly",docLink:t==null?void 0:t.docLink}),s.jsx(P,{formID:d,formFields:n,webHooks:i,setWebHooks:h,step:e,setStep:l,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(y,{step:e,saveConfig:()=>v(m,c,p,i,u,"","",f),isLoading:b})})]})}export{q as default};
