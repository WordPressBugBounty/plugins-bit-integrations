var y=Object.defineProperty;var f=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var u=(e,t,s)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,x=(e,t)=>{for(var s in t||(t={}))S.call(t,s)&&u(e,s,t[s]);if(f)for(var s of f(t))L.call(t,s)&&u(e,s,t[s]);return e};import{u as A,r as c,j as a}from"./main-320.js";import"./bi.795.440.js";import{_ as C}from"./bi.576.0.js";import{S as I}from"./bi.51.13.js";import{S as N}from"./bi.78.940.js";import{I as k,s as w}from"./bi.337.3.js";import _ from"./bi.417.269.js";import{A as E,h as T}from"./bi.401.904.js";import"./bi.155.9.js";import"./bi.440.11.js";import"./bi.574.14.js";import"./bi.27.727.js";import"./bi.382.733.js";function Q({formFields:e,setFlow:t,flow:s,allIntegURL:g}){const h=A(),[p,o]=c.useState(!1),[n,l]=c.useState(1),[b,i]=c.useState({show:!1}),[m,r]=c.useState({name:"Academy Lms",type:"Academy Lms",field_map:[{formField:"",tutorField:""}],actions:{},actionData:{}}),v=()=>{o(!0),w({flow:s,setFlow:t,allIntegURL:g,conf:m,navigate:h,setIsLoading:o,setSnackbar:i})},j=d=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),l(d)};return a.jsxs("div",{children:[a.jsx(I,{snack:b,setSnackbar:i}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(N,{step:3,active:n})}),a.jsx(_,{academyLmsConf:m,setAcademyLmsConf:r,step:n,setStep:l,isLoading:p,setIsLoading:o,setSnackbar:i}),a.jsxs("div",{className:"btcd-stp-page",style:x({},n===2&&{width:900,height:"auto",minHeight:n===2&&"260px",overflow:"visible"}),children:[a.jsx(E,{formFields:e,handleInput:d=>T(d,m,r,o,i),academyLmsConf:m,setAcademyLmsConf:r,isLoading:p,setIsLoading:o,setSnackbar:i}),a.jsxs("button",{onClick:()=>j(3),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[C("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(k,{step:n,saveConfig:()=>v(),isLoading:p,dataConf:m,setDataConf:r,formFields:e})]})}export{Q as default};
