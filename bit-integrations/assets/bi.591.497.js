var S=Object.defineProperty;var f=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var u=(t,e,s)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,h=(t,e)=>{for(var s in e||(e={}))C.call(e,s)&&u(t,s,e[s]);if(f)for(var s of f(e))D.call(e,s)&&u(t,s,e[s]);return t};import{u as I,l as _,r as d,j as o}from"./main-165.js";import{d as k,_ as y,I as N,s as T}from"./bi.312.95.js";import{S as w}from"./bi.354.971.js";import L from"./bi.278.350.js";import{h as B}from"./bi.859.956.js";import{D as E}from"./bi.387.955.js";import{B as A}from"./bi.430.769.js";import"./bi.40.785.js";/* empty css          */function O({formFields:t,setFlow:e,flow:s,allIntegURL:x}){const g=I(),{formID:v}=_(),[l,m]=d.useState(!1),[n,p]=d.useState(1),[b,i]=d.useState({show:!1}),[a,r]=d.useState({name:"Discord",type:"Discord",accessToken:"",parse_mode:"HTML",field_map:[{formField:"",discordFormField:""}],server_id:"",channel_id:"",body:"",actions:{}}),j=c=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),c===3&&a.name!==""&&a.selectedChannel&&a.selectedServer&&p(c)};return o.jsxs("div",{children:[o.jsx(k,{snack:b,setSnackbar:i}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(w,{step:3,active:n})}),o.jsx(L,{formID:v,discordConf:a,setDiscordConf:r,step:n,setstep:p,isLoading:l,setIsLoading:m,setSnackbar:i}),o.jsxs("div",{className:"btcd-stp-page",style:h({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(E,{formFields:t,handleInput:c=>B(c,a,r),discordConf:a,setDiscordConf:r,isLoading:l,setIsLoading:m,setSnackbar:i}),o.jsxs("button",{onClick:()=>j(3),disabled:a.selectedChannel===""||a.selectedServer==="",className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[y("Next","bit-integrations"),o.jsx(A,{className:"ml-1 rev-icn"})]})]}),o.jsx(N,{step:n,saveConfig:()=>T({flow:s,setFlow:e,allIntegURL:x,conf:a,navigate:g,setIsLoading:m,setSnackbar:i}),isLoading:l,dataConf:a,setDataConf:r,formFields:t})]})}export{O as default};
