import{u as j,l as b,r as o,j as s}from"./main-650.js";import{d as S,F as k}from"./bi.541.15.js";import{S as v}from"./bi.326.902.js";import T from"./bi.343.182.js";import{W as y}from"./bi.160.696.js";import{T as r,t as U}from"./bi.770.713.js";import"./bi.912.697.js";function E({formFields:n,setFlow:c,flow:m,allIntegURL:d}){const p=j(),{formID:l}=b(),[e,u]=o.useState(1),[x,a]=o.useState({show:!1}),[f,g]=o.useState(!1),{uncannyAutomatorLinks:t}=U,[i,h]=o.useState({name:"UncannyAutomator Web Hooks",type:"UncannyAutomator",method:"POST",url:""});return s.jsxs("div",{children:[s.jsx(S,{snack:x,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(v,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"Uncanny Automator",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"Uncanny Automator",docLink:t==null?void 0:t.docLink}),s.jsx(T,{formID:l,formFields:n,webHooks:i,setWebHooks:h,step:e,setStep:u,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(y,{step:e,saveConfig:()=>k(m,c,d,i,p,"","",g),isLoading:f})})]})}export{E as default};
