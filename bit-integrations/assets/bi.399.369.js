var v=Object.defineProperty;var f=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var u=(o,t,s)=>t in o?v(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s,x=(o,t)=>{for(var s in t||(t={}))j.call(t,s)&&u(o,s,t[s]);if(f)for(var s of f(t))S.call(t,s)&&u(o,s,t[s]);return o};import{u as P,o as k,r as a,j as e}from"./main-920.js";import"./bi.761.437.js";import{_ as w}from"./bi.247.0.js";import{S as I}from"./bi.970.13.js";import{S as N}from"./bi.319.923.js";import{s as _}from"./bi.502.697.js";import{I as y,s as F}from"./bi.658.3.js";import L from"./bi.166.228.js";import{c as E}from"./bi.960.812.js";import{P as A}from"./bi.517.813.js";import"./bi.140.9.js";import"./bi.941.11.js";import"./bi.706.14.js";import"./bi.898.700.js";function W({formFields:o,setFlow:t,flow:s,allIntegURL:C}){const g=P(),{flowID:c}=k(),[l,p]=a.useState(!1),[i,d]=a.useState(1),[b,r]=a.useState({show:!1}),[n,m]=a.useState({name:"PCloud",type:"PCloud",clientId:"",clientSecret:"",field_map:[{formField:"",pCloudFormField:""}],foldersList:[],actions:{}});a.useEffect(()=>{window.opener&&_("pCloud")},[]);const h=()=>{F({flow:s,setFlow:t,allIntegURL:C,conf:n,navigate:g,setIsLoading:p,setSnackbar:r})};return e.jsxs("div",{children:[e.jsx(I,{snack:b,setSnackbar:r}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(N,{step:3,active:i})}),e.jsx(L,{flowID:c,pCloudConf:n,setPCloudConf:m,step:i,setStep:d,isLoading:l,setIsLoading:p,setSnackbar:r}),e.jsxs("div",{className:"btcd-stp-page",style:x({},i===2&&{width:900,height:"auto",overflow:"visible"}),children:[e.jsx(A,{flowID:c,formFields:o,pCloudConf:n,setPCloudConf:m}),e.jsxs("button",{onClick:()=>d(3),disabled:!E(n),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[w("Next","bit-integrations")," ",e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),e.jsx(y,{step:i,saveConfig:()=>h(),isLoading:l})]})}export{W as default};
