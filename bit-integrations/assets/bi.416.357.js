var j=Object.defineProperty,b=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var c=(e,t,s)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,u=(e,t)=>{for(var s in t||(t={}))I.call(t,s)&&c(e,s,t[s]);if(d)for(var s of d(t))M.call(t,s)&&c(e,s,t[s]);return e},f=(e,t)=>b(e,S(t));import{u as y,r as p,j as i}from"./main-288.js";import{_ as N}from"./bi.4.0.js";import{S as _}from"./bi.296.915.js";import{S as C}from"./bi.982.916.js";import{I as L}from"./bi.826.3.js";import w from"./bi.967.217.js";import{n as k,d as E}from"./bi.419.785.js";import{M as F}from"./bi.939.786.js";import"./bi.197.434.js";import"./bi.627.9.js";import"./bi.470.13.js";import"./bi.147.11.js";import"./bi.223.14.js";import"./bi.255.712.js";import"./bi.266.693.js";import"./bi.294.669.js";import"./bi.335.670.js";function Y({formFields:e,setFlow:t,flow:s,allIntegURL:g}){const x=y(),[o,m]=p.useState(1),[r,l]=p.useState({auth:!1,list:!1,page:!1}),[a,n]=p.useState({name:"Mailercloud",type:"Mailercloud",authKey:"",field_map:[{formFields:"",mailercloudFormField:""}],listId:"",contactType:"",actions:{}}),h=v=>{l(f(u({},r),{page:v}))};return i.jsxs("div",{children:[i.jsx("div",{className:"txt-center mt-2",children:i.jsx(C,{step:3,active:o})}),i.jsx(w,{mailercloudConf:a,setMailercloudConf:n,loading:r,setLoading:l,step:o,setStep:m}),i.jsxs(_,{step:o,stepNo:2,style:{width:900,height:"auto",overflow:"visible"},children:[i.jsx(F,{mailercloudConf:a,setMailercloudConf:n,formFields:e,loading:r,setLoading:l}),(a==null?void 0:a.listId)&&i.jsxs("button",{onClick:()=>k(a,m,3),disabled:!a.listId||a.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[N("Next")," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.listId&&i.jsx(L,{step:o,saveConfig:()=>E(s,t,g,a,x,h),isLoading:r.page,dataConf:a,setDataConf:n,formFields:e})]})}export{Y as default};
