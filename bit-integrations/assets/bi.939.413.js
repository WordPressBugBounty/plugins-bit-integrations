import{u as j,o as S,r as o,j as s}from"./main-794.js";import"./bi.266.440.js";import{S as b}from"./bi.961.13.js";import{S as k}from"./bi.552.957.js";import{g as v}from"./bi.499.3.js";import T from"./bi.350.185.js";import{W as y}from"./bi.192.742.js";import{T as r,t as U}from"./bi.510.749.js";import"./bi.828.0.js";import"./bi.685.9.js";import"./bi.690.11.js";import"./bi.811.14.js";import"./bi.944.743.js";function $({formFields:m,setFlow:n,flow:c,allIntegURL:p}){const d=j(),{formID:l}=S(),[e,u]=o.useState(1),[x,a]=o.useState({show:!1}),[f,g]=o.useState(!1),{uncannyAutomatorLinks:t}=U,[i,h]=o.useState({name:"UncannyAutomator Web Hooks",type:"UncannyAutomator",method:"POST",url:""});return s.jsxs("div",{children:[s.jsx(b,{snack:x,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(k,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"Uncanny Automator",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"Uncanny Automator",docLink:t==null?void 0:t.docLink}),s.jsx(T,{formID:l,formFields:m,webHooks:i,setWebHooks:h,step:e,setStep:u,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(y,{step:e,saveConfig:()=>v(c,n,p,i,d,"","",g),isLoading:f})})]})}export{$ as default};
