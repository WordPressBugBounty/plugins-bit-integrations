var S=Object.defineProperty;var f=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var u=(s,t,e)=>t in s?S(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,h=(s,t)=>{for(var e in t||(t={}))C.call(t,e)&&u(s,e,t[e]);if(f)for(var e of f(t))D.call(t,e)&&u(s,e,t[e]);return s};import{u as I,o as _,r as m,j as a}from"./main-263.js";import"./bi.361.434.js";import{_ as k}from"./bi.924.0.js";import{S as y}from"./bi.428.13.js";import{S as N}from"./bi.733.915.js";import{I as T,s as w}from"./bi.317.3.js";import L from"./bi.229.272.js";import{h as B}from"./bi.53.892.js";import{D as E}from"./bi.395.891.js";import{B as A}from"./bi.638.705.js";import"./bi.402.9.js";import"./bi.929.11.js";import"./bi.686.14.js";import"./bi.372.711.js";/* empty css          */function Y({formFields:s,setFlow:t,flow:e,allIntegURL:x}){const g=I(),{formID:v}=_(),[d,p]=m.useState(!1),[r,l]=m.useState(1),[b,i]=m.useState({show:!1}),[o,n]=m.useState({name:"Discord",type:"Discord",accessToken:"",parse_mode:"HTML",field_map:[{formField:"",discordFormField:""}],server_id:"",channel_id:"",body:"",actions:{}}),j=c=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),c===3&&o.name!==""&&o.selectedChannel&&o.selectedServer&&l(c)};return a.jsxs("div",{children:[a.jsx(y,{snack:b,setSnackbar:i}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(N,{step:3,active:r})}),a.jsx(L,{formID:v,discordConf:o,setDiscordConf:n,step:r,setstep:l,isLoading:d,setIsLoading:p,setSnackbar:i}),a.jsxs("div",{className:"btcd-stp-page",style:h({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(E,{formFields:s,handleInput:c=>B(c,o,n),discordConf:o,setDiscordConf:n,isLoading:d,setIsLoading:p,setSnackbar:i}),a.jsxs("button",{onClick:()=>j(3),disabled:o.selectedChannel===""||o.selectedServer==="",className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[k("Next","bit-integrations"),a.jsx(A,{className:"ml-1 rev-icn"})]})]}),a.jsx(T,{step:r,saveConfig:()=>w({flow:e,setFlow:t,allIntegURL:x,conf:o,navigate:g,setIsLoading:p,setSnackbar:i}),isLoading:d,dataConf:o,setDataConf:n,formFields:s})]})}export{Y as default};
