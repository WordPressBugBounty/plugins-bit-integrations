var j=Object.defineProperty;var f=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var x=(e,t,s)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,b=(e,t)=>{for(var s in t||(t={}))S.call(t,s)&&x(e,s,t[s]);if(f)for(var s of f(t))D.call(t,s)&&x(e,s,t[s]);return e};import{u as C,o as I,r,j as o}from"./main-34.js";import"./bi.188.437.js";import{_ as N}from"./bi.671.0.js";import{S as _}from"./bi.213.13.js";import{S as k}from"./bi.851.922.js";import{I as w,s as y}from"./bi.633.3.js";import L from"./bi.801.168.js";import{D as F}from"./bi.610.723.js";import"./bi.914.9.js";import"./bi.22.11.js";import"./bi.690.14.js";import"./bi.236.722.js";import"./bi.379.699.js";function Q({formFields:e,setFlow:t,flow:s,allIntegURL:u}){const g=C(),{flowID:n}=I(),[c,p]=r.useState(!1),[a,m]=r.useState(1),[h,l]=r.useState({show:!1}),[i,d]=r.useState({name:"Dropbox",type:"Dropbox",clientId:"",clientSecret:"",accessCode:"",field_map:[{formField:"",dropboxFormField:""}],foldersList:[],actions:{}}),v=()=>{y({flow:s,setFlow:t,allIntegURL:u,conf:i,navigate:g,setIsLoading:p,setSnackbar:l})};return o.jsxs("div",{children:[o.jsx(_,{snack:h,setSnackbar:l}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(k,{step:3,active:a})}),o.jsx(L,{flowID:n,dropboxConf:i,setDropboxConf:d,step:a,setStep:m,isLoading:c,setIsLoading:p}),o.jsxs("div",{className:"btcd-stp-page",style:b({},a===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(F,{flowID:n,formFields:e,dropboxConf:i,setDropboxConf:d}),o.jsxs("button",{onClick:()=>m(3),disabled:i.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[N("Next","bit-integrations")," ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),o.jsx(w,{step:a,saveConfig:()=>v(),isLoading:c})]})}export{Q as default};
