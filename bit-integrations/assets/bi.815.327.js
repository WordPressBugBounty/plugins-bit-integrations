var j=Object.defineProperty;var f=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var u=(e,t,s)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,h=(e,t)=>{for(var s in t||(t={}))v.call(t,s)&&u(e,s,t[s]);if(f)for(var s of f(t))I.call(t,s)&&u(e,s,t[s]);return e};import{u as _,o as C,r as m,j as a}from"./main-263.js";import"./bi.361.434.js";import{_ as y}from"./bi.924.0.js";import{S as N}from"./bi.428.13.js";import{S as w}from"./bi.733.915.js";import{I as L,s as T}from"./bi.317.3.js";import B from"./bi.615.191.js";import{h as E}from"./bi.87.725.js";import{S as A}from"./bi.243.724.js";import{B as D}from"./bi.638.705.js";import"./bi.402.9.js";import"./bi.929.11.js";import"./bi.686.14.js";import"./bi.372.711.js";/* empty css          */function Y({formFields:e,setFlow:t,flow:s,allIntegURL:x}){const S=_(),{formID:g}=C(),[l,p]=m.useState(!1),[n,d]=m.useState(1),[k,i]=m.useState({show:!1}),[o,r]=m.useState({name:"Slack",type:"Slack",parse_mode:"HTML",field_map:[{formField:"",slackFormField:""}],channel_id:"",body:"",actions:{}}),b=c=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),c===3&&o.name!==""&&o.channel_id&&d(c)};return a.jsxs("div",{children:[a.jsx(N,{snack:k,setSnackbar:i}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(w,{step:3,active:n})}),a.jsx(B,{formID:g,slackConf:o,setSlackConf:r,step:n,setstep:d,isLoading:l,setIsLoading:p,setSnackbar:i}),a.jsxs("div",{className:"btcd-stp-page",style:h({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(A,{formFields:e,handleInput:c=>E(c,o,r),slackConf:o,setSlackConf:r,isLoading:l,setIsLoading:p,setSnackbar:i}),a.jsxs("button",{onClick:()=>b(3),disabled:o.channel_id==="",className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[y("Next","bit-integrations"),a.jsx(D,{className:"ml-1 rev-icn"})]})]}),a.jsx(L,{step:n,saveConfig:()=>T({flow:s,setFlow:t,allIntegURL:x,conf:o,navigate:S,setIsLoading:p,setSnackbar:i}),isLoading:l,dataConf:o,setDataConf:r,formFields:e})]})}export{Y as default};
