var j=Object.defineProperty;var f=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var u=(e,t,s)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,h=(e,t)=>{for(var s in t||(t={}))v.call(t,s)&&u(e,s,t[s]);if(f)for(var s of f(t))I.call(t,s)&&u(e,s,t[s]);return e};import{u as _,o as C,r as m,j as a}from"./main-586.js";import"./bi.960.440.js";import{_ as y}from"./bi.612.0.js";import{S as N}from"./bi.733.13.js";import{S as w}from"./bi.692.945.js";import{I as L,s as T}from"./bi.993.3.js";import B from"./bi.879.193.js";import{h as E}from"./bi.99.751.js";import{S as A}from"./bi.370.750.js";import{B as D}from"./bi.313.731.js";import"./bi.175.9.js";import"./bi.980.11.js";import"./bi.520.14.js";import"./bi.453.737.js";function X({formFields:e,setFlow:t,flow:s,allIntegURL:x}){const S=_(),{formID:g}=C(),[l,p]=m.useState(!1),[n,d]=m.useState(1),[k,i]=m.useState({show:!1}),[o,r]=m.useState({name:"Slack",type:"Slack",parse_mode:"HTML",field_map:[{formField:"",slackFormField:""}],channel_id:"",body:"",actions:{}}),b=c=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),c===3&&o.name!==""&&o.channel_id&&d(c)};return a.jsxs("div",{children:[a.jsx(N,{snack:k,setSnackbar:i}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(w,{step:3,active:n})}),a.jsx(B,{formID:g,slackConf:o,setSlackConf:r,step:n,setstep:d,isLoading:l,setIsLoading:p,setSnackbar:i}),a.jsxs("div",{className:"btcd-stp-page",style:h({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(A,{formFields:e,handleInput:c=>E(c,o,r),slackConf:o,setSlackConf:r,isLoading:l,setIsLoading:p,setSnackbar:i}),a.jsxs("button",{onClick:()=>b(3),disabled:o.channel_id==="",className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[y("Next","bit-integrations"),a.jsx(D,{className:"ml-1 rev-icn"})]})]}),a.jsx(L,{step:n,saveConfig:()=>T({flow:s,setFlow:t,allIntegURL:x,conf:o,navigate:S,setIsLoading:p,setSnackbar:i}),isLoading:l,dataConf:o,setDataConf:r,formFields:e})]})}export{X as default};
