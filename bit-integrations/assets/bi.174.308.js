import{u as j,l as g,r as o,j as s}from"./main-579.js";import{d as S,s as b}from"./bi.919.15.js";import{S as L}from"./bi.655.902.js";import v from"./bi.91.182.js";import{W as y}from"./bi.949.696.js";import{T as n,t as T}from"./bi.339.713.js";import"./bi.367.697.js";function P({formFields:r,setFlow:c,flow:m,allIntegURL:p}){const u=j(),{formID:l}=g(),[e,d]=o.useState(1),[k,a]=o.useState({show:!1}),[x,f]=o.useState(!1),{antsAndApps:t}=T,[i,h]=o.useState({name:"Ants & Apps",type:"Ant Apps",method:"POST",url:"",apiConsole:"https://my.antsandapps.com/"});return s.jsxs("div",{children:[s.jsx(S,{snack:k,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(L,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(n,{title:"Ants and Apps",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(n,{title:"Ants and Apps",docLink:t==null?void 0:t.docLink}),s.jsx(v,{formID:l,formFields:r,webHooks:i,setWebHooks:h,step:e,setStep:d,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&900,height:e===2&&"auto"},children:s.jsx(y,{step:e,saveConfig:()=>b({flow:m,setFlow:c,allIntegURL:p,conf:i,navigate:u,setIsLoading:f,setSnackbar:a}),isLoading:x})})]})}export{P as default};
