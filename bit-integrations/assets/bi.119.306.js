import{u as b,o as j,r as o,j as s}from"./main-119.js";import"./bi.276.437.js";import{S}from"./bi.725.13.js";import{S as k}from"./bi.36.924.js";import{i as v}from"./bi.316.3.js";import T from"./bi.58.184.js";import{W as y}from"./bi.307.714.js";import{T as r,t as Z}from"./bi.606.701.js";import"./bi.686.0.js";import"./bi.900.9.js";import"./bi.301.11.js";import"./bi.744.14.js";import"./bi.13.699.js";function $({formFields:p,setFlow:m,flow:n,allIntegURL:c}){const u=b(),{formID:d}=j(),[e,l]=o.useState(1),[x,a]=o.useState({show:!1}),[f,h]=o.useState(!1),{zapierLinks:t}=Z,[i,g]=o.useState({name:"Zapier Web Hooks",type:"Zapier",method:"POST",url:"",apiConsole:"https://zapier.com/app/dashboard"});return s.jsxs("div",{children:[s.jsx(S,{snack:x,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(k,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&900,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"Zapier",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"Zapier",docLink:t==null?void 0:t.docLink}),s.jsx(T,{formID:d,formFields:p,webHooks:i,setWebHooks:g,step:e,setStep:l,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(y,{step:e,saveConfig:()=>v(n,m,c,i,u,"","",h),isLoading:f})})]})}export{$ as default};
