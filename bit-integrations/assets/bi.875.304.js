import{u as g,l as j,r as o,j as s}from"./main-579.js";import{d as S,F as k}from"./bi.919.15.js";import{S as v}from"./bi.655.902.js";import P from"./bi.91.182.js";import{W as y}from"./bi.949.696.js";import{T as r,t as T}from"./bi.339.713.js";import"./bi.367.697.js";function E({formFields:n,setFlow:c,flow:m,allIntegURL:u}){const d=g(),{formID:l}=j(),[e,p]=o.useState(1),[x,a]=o.useState({show:!1}),[b,h]=o.useState(!1),{pabblyLinks:t}=T,[i,f]=o.useState({name:"Pabbly Web Hooks",type:"Pabbly",method:"POST",url:"",apiConsole:"https://connect.pabbly.com/dashboard"});return s.jsxs("div",{children:[s.jsx(S,{snack:x,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(v,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"Pabbly",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"Pabbly",docLink:t==null?void 0:t.docLink}),s.jsx(P,{formID:l,formFields:n,webHooks:i,setWebHooks:f,step:e,setStep:p,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(y,{step:e,saveConfig:()=>k(m,c,u,i,d,"","",h),isLoading:b})})]})}export{E as default};