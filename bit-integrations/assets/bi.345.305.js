import{u as j,o as S,r as o,j as e}from"./main-615.js";import"./bi.991.437.js";import{S as b}from"./bi.700.13.js";import{S as k}from"./bi.440.922.js";import{g as v}from"./bi.819.3.js";import w from"./bi.252.184.js";import{W as T}from"./bi.776.712.js";import{T as i,t as y}from"./bi.681.699.js";import"./bi.394.0.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.560.697.js";function q({formFields:c,setFlow:m,flow:n,allIntegURL:p}){const u=j(),{formID:l}=S(),[s,d]=o.useState(1),[f,a]=o.useState({show:!1}),[x,g]=o.useState(!1),{zohoFlowLinks:t}=y,[r,h]=o.useState({name:"Zoho Flow Web Hooks",type:"Zoho Flow",method:"POST",url:"",apiConsole:"https://flow.zoho.com/#/workspace/default/flows/create"});return e.jsxs("div",{children:[e.jsx(b,{snack:f,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(k,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(i,{title:"Zoho Flow",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(i,{title:"Zoho Flow",docLink:t==null?void 0:t.docLink}),e.jsx(w,{formID:l,formFields:c,webHooks:r,setWebHooks:h,step:s,setStep:d,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:e.jsx(T,{step:s,saveConfig:()=>v(n,m,p,r,u,"","",g),isLoading:x})})]})}export{q as default};