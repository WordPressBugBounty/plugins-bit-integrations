import{u as h,o as j,r as s,j as e}from"./main-404.js";import"./bi.613.437.js";import{S as b}from"./bi.896.13.js";import{S as k}from"./bi.53.923.js";import{i as v}from"./bi.488.3.js";import y from"./bi.337.184.js";import{W as T}from"./bi.938.713.js";import{T as r,t as w}from"./bi.116.700.js";import"./bi.51.0.js";import"./bi.964.9.js";import"./bi.484.11.js";import"./bi.565.14.js";import"./bi.250.698.js";function q({formFields:p,setFlow:n,flow:m,allIntegURL:c}){const u=h(),{formID:d}=j(),[o,l]=s.useState(1),[S,a]=s.useState({show:!1}),[x,f]=s.useState(!1),{syncSpiderLinks:t}=w,[i,g]=s.useState({name:"SyncSpider Web Hooks",type:"SyncSpider",method:"POST",url:"",apiConsole:"https://app.syncspider.com/app/"});return e.jsxs("div",{children:[e.jsx(b,{snack:S,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(k,{step:2,active:o})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:o===1&&1100,height:o===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(r,{title:"SyncSpider",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(r,{title:"SyncSpider",docLink:t==null?void 0:t.docLink}),e.jsx(y,{formID:d,formFields:p,webHooks:i,setWebHooks:g,step:o,setStep:l,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:o===2&&"100%",height:o===2&&"auto"},children:e.jsx(T,{step:o,saveConfig:()=>v(m,n,c,i,u,"","",f),isLoading:x})})]})}export{q as default};