import{u as k,o as j,r as o,j as e}from"./main-494.js";import"./bi.23.437.js";import{S}from"./bi.107.13.js";import{S as b}from"./bi.719.924.js";import{i as I}from"./bi.104.3.js";import v from"./bi.296.184.js";import{W as w}from"./bi.336.714.js";import{T as i,t as T}from"./bi.136.701.js";import"./bi.185.0.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.776.699.js";function z({formFields:m,setFlow:n,flow:c,allIntegURL:p}){const u=k(),{formID:d}=j(),[s,l]=o.useState(1),[x,a]=o.useState({show:!1}),[f,g]=o.useState(!1),{integromatLinks:t}=T,[r,h]=o.useState({name:"Make(Integromat) Web Hooks",type:"Make(Integromat)",method:"POST",url:"",apiConsole:"https://www.integromat.com/hooks/"});return e.jsxs("div",{children:[e.jsx(S,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(b,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(i,{title:"Make (Integromat)",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(i,{title:"Make (Integromat)",docLink:t==null?void 0:t.docLink}),e.jsx(v,{formID:d,formFields:m,webHooks:r,setWebHooks:h,step:s,setStep:l,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(w,{step:s,saveConfig:()=>I(c,n,p,r,u,"","",g),isLoading:f})})]})}export{z as default};
