var N=Object.defineProperty;var u=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var b=(i,t,e)=>t in i?N(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,g=(i,t)=>{for(var e in t||(t={}))I.call(t,e)&&b(i,e,t[e]);if(u)for(var e of u(t))_.call(t,e)&&b(i,e,t[e]);return i};import{u as A,l as w,r as d,j as a}from"./main-650.js";import{_ as n,d as E,I as F,s as q}from"./bi.541.15.js";import{S as L}from"./bi.326.902.js";import{h as T}from"./bi.846.835.js";import D from"./bi.646.246.js";import{M as P}from"./bi.864.834.js";import"./bi.912.697.js";import"./bi.770.713.js";import"./bi.619.660.js";import"./bi.119.661.js";function X({formFields:i,setFlow:t,flow:e,allIntegURL:p,isInfo:x,edit:M}){const h=A(),{formID:j}=w(),[o,r]=d.useState(!1),[l,f]=d.useState(1),[v,c]=d.useState({show:!1}),S=[{key:"1",label:n("Add contact","bit-integrations")}],k=[{key:"email",label:n("Email","bit-integrations"),required:!0},{key:"first_name",label:n("First Name","bit-integrations"),required:!1},{key:"last_name",label:n("Last Name","bit-integrations"),required:!1}],[s,m]=d.useState({name:"Mail Mint",type:"Mail Mint",mainAction:"",field_map:[{formField:"",mailMintFormField:""}],allActions:S,mailMintContactFields:k,actions:{}}),y=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),s.mainAction!==""&&f(3)};return a.jsxs("div",{children:[a.jsx(E,{snack:v,setSnackbar:c}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(L,{step:3,active:l})}),a.jsx(D,{formID:j,mailMintConf:s,setMailMintConf:m,step:l,setStep:f,isLoading:o,setIsLoading:r,setSnackbar:c}),a.jsxs("div",{className:"btcd-stp-page",style:g({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(P,{formFields:i,handleInput:C=>T(C,s,m,r),mailMintConf:s,setMailMintConf:m,isLoading:o,setIsLoading:r,setSnackbar:c,allIntegURL:p,isInfo:x,edit:M}),a.jsxs("button",{onClick:()=>y(),disabled:o,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[n("Next","bit-integrations")," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(F,{step:l,saveConfig:()=>q({flow:e,setFlow:t,allIntegURL:p,navigate:h,conf:s,setIsLoading:r,setSnackbar:c}),isLoading:o,dataConf:s,setDataConf:m,formFields:i})]})}export{X as default};
