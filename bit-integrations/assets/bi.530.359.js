var j=Object.defineProperty,b=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var c=(e,t,s)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,u=(e,t)=>{for(var s in t||(t={}))I.call(t,s)&&c(e,s,t[s]);if(d)for(var s of d(t))M.call(t,s)&&c(e,s,t[s]);return e},f=(e,t)=>b(e,S(t));import{u as y,r as p,j as i}from"./main-920.js";import{_ as N}from"./bi.247.0.js";import{S as _}from"./bi.817.922.js";import{S as C}from"./bi.319.923.js";import{I as L}from"./bi.658.3.js";import w from"./bi.66.218.js";import{n as k,d as E}from"./bi.33.791.js";import{M as F}from"./bi.350.792.js";import"./bi.761.437.js";import"./bi.140.9.js";import"./bi.970.13.js";import"./bi.941.11.js";import"./bi.706.14.js";import"./bi.898.700.js";import"./bi.815.699.js";import"./bi.722.674.js";import"./bi.149.675.js";function Y({formFields:e,setFlow:t,flow:s,allIntegURL:g}){const x=y(),[o,m]=p.useState(1),[r,l]=p.useState({auth:!1,list:!1,page:!1}),[a,n]=p.useState({name:"Mailercloud",type:"Mailercloud",authKey:"",field_map:[{formFields:"",mailercloudFormField:""}],listId:"",contactType:"",actions:{}}),h=v=>{l(f(u({},r),{page:v}))};return i.jsxs("div",{children:[i.jsx("div",{className:"txt-center mt-2",children:i.jsx(C,{step:3,active:o})}),i.jsx(w,{mailercloudConf:a,setMailercloudConf:n,loading:r,setLoading:l,step:o,setStep:m}),i.jsxs(_,{step:o,stepNo:2,style:{width:900,height:"auto",overflow:"visible"},children:[i.jsx(F,{mailercloudConf:a,setMailercloudConf:n,formFields:e,loading:r,setLoading:l}),(a==null?void 0:a.listId)&&i.jsxs("button",{onClick:()=>k(a,m,3),disabled:!a.listId||a.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[N("Next")," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.listId&&i.jsx(L,{step:o,saveConfig:()=>E(s,t,g,a,x,h),isLoading:r.page,dataConf:a,setDataConf:n,formFields:e})]})}export{Y as default};
