var N=Object.defineProperty;var u=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var b=(e,t,i)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,g=(e,t)=>{for(var i in t||(t={}))I.call(t,i)&&b(e,i,t[i]);if(u)for(var i of u(t))_.call(t,i)&&b(e,i,t[i]);return e};import{u as A,o as w,r as p,j as a}from"./main-252.js";import"./bi.269.440.js";import{_ as n}from"./bi.63.0.js";import{S as E}from"./bi.588.13.js";import{S as F}from"./bi.465.934.js";import{I as q,s as L}from"./bi.163.3.js";import{h as T}from"./bi.549.859.js";import D from"./bi.865.249.js";import{M as P}from"./bi.872.858.js";import"./bi.456.9.js";import"./bi.494.11.js";import"./bi.275.14.js";import"./bi.122.707.js";import"./bi.41.709.js";import"./bi.570.683.js";import"./bi.696.684.js";function it({formFields:e,setFlow:t,flow:i,allIntegURL:d,isInfo:x,edit:M}){const h=A(),{formID:j}=w(),[o,r]=p.useState(!1),[m,f]=p.useState(1),[v,l]=p.useState({show:!1}),S=[{key:"1",label:n("Add contact","bit-integrations")}],k=[{key:"email",label:n("Email","bit-integrations"),required:!0},{key:"first_name",label:n("First Name","bit-integrations"),required:!1},{key:"last_name",label:n("Last Name","bit-integrations"),required:!1}],[s,c]=p.useState({name:"Mail Mint",type:"Mail Mint",mainAction:"",field_map:[{formField:"",mailMintFormField:""}],allActions:S,mailMintContactFields:k,actions:{}}),y=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),s.mainAction!==""&&f(3)};return a.jsxs("div",{children:[a.jsx(E,{snack:v,setSnackbar:l}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(F,{step:3,active:m})}),a.jsx(D,{formID:j,mailMintConf:s,setMailMintConf:c,step:m,setStep:f,isLoading:o,setIsLoading:r,setSnackbar:l}),a.jsxs("div",{className:"btcd-stp-page",style:g({},m===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(P,{formFields:e,handleInput:C=>T(C,s,c,r),mailMintConf:s,setMailMintConf:c,isLoading:o,setIsLoading:r,setSnackbar:l,allIntegURL:d,isInfo:x,edit:M}),a.jsxs("button",{onClick:()=>y(),disabled:o,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[n("Next","bit-integrations")," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(q,{step:m,saveConfig:()=>L({flow:i,setFlow:t,allIntegURL:d,navigate:h,conf:s,setIsLoading:r,setSnackbar:l}),isLoading:o,dataConf:s,setDataConf:c,formFields:e})]})}export{it as default};
