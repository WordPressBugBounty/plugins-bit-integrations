import{u as j,o as S,r as o,j as s}from"./main-34.js";import"./bi.188.437.js";import{S as b}from"./bi.213.13.js";import{S as k}from"./bi.851.922.js";import{i as v}from"./bi.633.3.js";import T from"./bi.378.184.js";import{W as y}from"./bi.883.712.js";import{T as r,t as U}from"./bi.379.699.js";import"./bi.671.0.js";import"./bi.914.9.js";import"./bi.22.11.js";import"./bi.690.14.js";import"./bi.886.697.js";function $({formFields:m,setFlow:n,flow:c,allIntegURL:p}){const d=j(),{formID:l}=S(),[e,u]=o.useState(1),[x,a]=o.useState({show:!1}),[f,g]=o.useState(!1),{uncannyAutomatorLinks:t}=U,[i,h]=o.useState({name:"UncannyAutomator Web Hooks",type:"UncannyAutomator",method:"POST",url:""});return s.jsxs("div",{children:[s.jsx(b,{snack:x,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(k,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"Uncanny Automator",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"Uncanny Automator",docLink:t==null?void 0:t.docLink}),s.jsx(T,{formID:l,formFields:m,webHooks:i,setWebHooks:h,step:e,setStep:u,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(y,{step:e,saveConfig:()=>v(c,n,p,i,d,"","",g),isLoading:f})})]})}export{$ as default};