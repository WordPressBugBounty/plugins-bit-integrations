import{u as j,o as S,r as o,j as s}from"./main-494.js";import"./bi.23.437.js";import{S as g}from"./bi.107.13.js";import{S as b}from"./bi.719.924.js";import{s as L}from"./bi.104.3.js";import v from"./bi.296.184.js";import{W as y}from"./bi.336.714.js";import{T as r,t as T}from"./bi.136.701.js";import"./bi.185.0.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.776.699.js";function z({formFields:n,setFlow:m,flow:c,allIntegURL:p}){const u=j(),{formID:l}=S(),[e,d]=o.useState(1),[f,a]=o.useState({show:!1}),[k,x]=o.useState(!1),{antsAndApps:t}=T,[i,h]=o.useState({name:"Ants & Apps",type:"Ant Apps",method:"POST",url:"",apiConsole:"https://my.antsandapps.com/"});return s.jsxs("div",{children:[s.jsx(g,{snack:f,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(b,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"Ants and Apps",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"Ants and Apps",docLink:t==null?void 0:t.docLink}),s.jsx(v,{formID:l,formFields:n,webHooks:i,setWebHooks:h,step:e,setStep:d,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&900,height:e===2&&"auto"},children:s.jsx(y,{step:e,saveConfig:()=>L({flow:c,setFlow:m,allIntegURL:p,conf:i,navigate:u,setIsLoading:x,setSnackbar:a}),isLoading:k})})]})}export{z as default};