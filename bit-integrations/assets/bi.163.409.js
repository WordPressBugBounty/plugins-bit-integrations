import{u as h,o as j,r as o,j as s}from"./main-556.js";import"./bi.838.440.js";import{S}from"./bi.686.13.js";import{S as k}from"./bi.229.963.js";import{g as v}from"./bi.308.3.js";import T from"./bi.788.185.js";import{W as y}from"./bi.862.748.js";import{T as r,t as A}from"./bi.448.755.js";import"./bi.562.0.js";import"./bi.657.9.js";import"./bi.510.11.js";import"./bi.244.14.js";import"./bi.39.749.js";function $({formFields:n,setFlow:m,flow:p,allIntegURL:c}){const u=h(),{formID:l}=j(),[e,d]=o.useState(1),[x,a]=o.useState({show:!1}),[b,f]=o.useState(!1),{albato:t}=A,[i,g]=o.useState({name:"Albato Web Hooks",type:"Albato",method:"POST",url:"",apiConsole:"https://albato.com/app/bundle"});return s.jsxs("div",{children:[s.jsx(S,{snack:x,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(k,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"Albato",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"Albato",docLink:t==null?void 0:t.docLink}),s.jsx(T,{formID:l,formFields:n,webHooks:i,setWebHooks:g,step:e,setStep:d,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(y,{step:e,saveConfig:()=>v(p,m,c,i,u,"","",f),isLoading:b})})]})}export{$ as default};
