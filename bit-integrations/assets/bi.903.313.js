import{u as j,o as S,r as o,j as s}from"./main-615.js";import"./bi.991.437.js";import{S as g}from"./bi.700.13.js";import{S as b}from"./bi.440.922.js";import{s as L}from"./bi.819.3.js";import v from"./bi.252.184.js";import{W as y}from"./bi.776.712.js";import{T as r,t as T}from"./bi.681.699.js";import"./bi.394.0.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.560.697.js";function z({formFields:n,setFlow:m,flow:c,allIntegURL:p}){const u=j(),{formID:l}=S(),[e,d]=o.useState(1),[f,a]=o.useState({show:!1}),[k,x]=o.useState(!1),{antsAndApps:t}=T,[i,h]=o.useState({name:"Ants & Apps",type:"Ant Apps",method:"POST",url:"",apiConsole:"https://my.antsandapps.com/"});return s.jsxs("div",{children:[s.jsx(g,{snack:f,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(b,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"Ants and Apps",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"Ants and Apps",docLink:t==null?void 0:t.docLink}),s.jsx(v,{formID:l,formFields:n,webHooks:i,setWebHooks:h,step:e,setStep:d,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&900,height:e===2&&"auto"},children:s.jsx(y,{step:e,saveConfig:()=>L({flow:c,setFlow:m,allIntegURL:p,conf:i,navigate:u,setIsLoading:x,setSnackbar:a}),isLoading:k})})]})}export{z as default};
