import{u as g,o as h,r as o,j as s}from"./main-623.js";import"./bi.1.443.js";import{S as j}from"./bi.957.13.js";import{S as b}from"./bi.408.976.js";import{g as I}from"./bi.757.3.js";import L from"./bi.987.186.js";import{W as v}from"./bi.824.758.js";import{T as r,t as O}from"./bi.971.765.js";import"./bi.422.0.js";import"./bi.331.9.js";import"./bi.727.11.js";import"./bi.218.14.js";import"./bi.219.759.js";function q({formFields:n,setFlow:m,flow:p,allIntegURL:c}){const u=g(),{formID:d}=h(),[e,l]=o.useState(1),[S,a]=o.useState({show:!1}),[k,x]=o.useState(!1),{sperse:t}=O,[i,f]=o.useState({name:"SperseIO Web Hooks",type:"SperseIO",method:"POST",url:"",apiConsole:"https://sperse.io/"});return s.jsxs("div",{children:[s.jsx(j,{snack:S,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(b,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"Sperse IO",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"Sperse IO",docLink:t==null?void 0:t.docLink}),s.jsx(L,{formID:d,formFields:n,webHooks:i,setWebHooks:f,step:e,setStep:l,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(v,{step:e,saveConfig:()=>I(p,m,c,i,u,"","",x),isLoading:k})})]})}export{q as default};
