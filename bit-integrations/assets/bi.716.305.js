import{u as j,o as S,r as o,j as e}from"./main-494.js";import"./bi.23.437.js";import{S as b}from"./bi.107.13.js";import{S as k}from"./bi.719.924.js";import{i as v}from"./bi.104.3.js";import w from"./bi.296.184.js";import{W as T}from"./bi.336.714.js";import{T as r,t as y}from"./bi.136.701.js";import"./bi.185.0.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.776.699.js";function q({formFields:c,setFlow:m,flow:n,allIntegURL:p}){const u=j(),{formID:l}=S(),[s,d]=o.useState(1),[f,a]=o.useState({show:!1}),[x,h]=o.useState(!1),{zohoFlowLinks:t}=y,[i,g]=o.useState({name:"Zoho Flow Web Hooks",type:"Zoho Flow",method:"POST",url:"",apiConsole:"https://flow.zoho.com/#/workspace/default/flows/create"});return e.jsxs("div",{children:[e.jsx(b,{snack:f,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(k,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(r,{title:"Zoho Flow",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(r,{title:"Zoho Flow",docLink:t==null?void 0:t.docLink}),e.jsx(w,{formID:l,formFields:c,webHooks:i,setWebHooks:g,step:s,setStep:d,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:e.jsx(T,{step:s,saveConfig:()=>v(n,m,p,i,u,"","",h),isLoading:x})})]})}export{q as default};