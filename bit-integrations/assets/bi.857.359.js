var j=Object.defineProperty,b=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var c=(e,t,s)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,u=(e,t)=>{for(var s in t||(t={}))I.call(t,s)&&c(e,s,t[s]);if(d)for(var s of d(t))M.call(t,s)&&c(e,s,t[s]);return e},f=(e,t)=>b(e,S(t));import{u as y,r as p,j as i}from"./main-119.js";import{_ as N}from"./bi.686.0.js";import{S as _}from"./bi.291.923.js";import{S as C}from"./bi.36.924.js";import{I as L}from"./bi.316.3.js";import w from"./bi.889.218.js";import{n as k,d as E}from"./bi.227.792.js";import{M as F}from"./bi.285.793.js";import"./bi.276.437.js";import"./bi.900.9.js";import"./bi.725.13.js";import"./bi.301.11.js";import"./bi.744.14.js";import"./bi.606.701.js";import"./bi.481.700.js";import"./bi.570.675.js";import"./bi.556.676.js";function Y({formFields:e,setFlow:t,flow:s,allIntegURL:g}){const x=y(),[o,m]=p.useState(1),[r,l]=p.useState({auth:!1,list:!1,page:!1}),[a,n]=p.useState({name:"Mailercloud",type:"Mailercloud",authKey:"",field_map:[{formFields:"",mailercloudFormField:""}],listId:"",contactType:"",actions:{}}),h=v=>{l(f(u({},r),{page:v}))};return i.jsxs("div",{children:[i.jsx("div",{className:"txt-center mt-2",children:i.jsx(C,{step:3,active:o})}),i.jsx(w,{mailercloudConf:a,setMailercloudConf:n,loading:r,setLoading:l,step:o,setStep:m}),i.jsxs(_,{step:o,stepNo:2,style:{width:900,height:"auto",overflow:"visible"},children:[i.jsx(F,{mailercloudConf:a,setMailercloudConf:n,formFields:e,loading:r,setLoading:l}),(a==null?void 0:a.listId)&&i.jsxs("button",{onClick:()=>k(a,m,3),disabled:!a.listId||a.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[N("Next")," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.listId&&i.jsx(L,{step:o,saveConfig:()=>E(s,t,g,a,x,h),isLoading:r.page,dataConf:a,setDataConf:n,formFields:e})]})}export{Y as default};
