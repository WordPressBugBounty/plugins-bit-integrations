var v=Object.defineProperty,b=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var u=(a,t,e)=>t in a?v(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,g=(a,t)=>{for(var e in t||(t={}))y.call(t,e)&&u(a,e,t[e]);if(f)for(var e of f(t))I.call(t,e)&&u(a,e,t[e]);return a},x=(a,t)=>b(a,w(t));import{u as N,r as d,f as h,e as E,j as s}from"./main-183.js";import{$ as M,f as L,g as $,_ as j}from"./bi.430.0.js";import{S as k}from"./bi.337.13.js";import{S as F,I as R}from"./bi.159.3.js";import{h as U,s as D}from"./bi.790.805.js";import{M as K}from"./bi.509.806.js";import"./bi.554.440.js";import"./bi.929.9.js";import"./bi.12.11.js";import"./bi.860.14.js";import"./bi.762.713.js";import"./bi.251.688.js";import"./bi.136.689.js";function Y({allIntegURL:a}){const t=N(),[e,l]=d.useState({show:!1}),m=h(M),[o,i]=E(L),[C,S]=d.useState({name:"",authKey:""}),p=h($),[n,c]=d.useState({auth:!1,list:!1,page:!1,update:!1}),_=r=>{c(x(g({},n),{update:r}))};return s.jsxs("div",{style:{width:900},children:[s.jsx(k,{snack:e,setSnackbar:l}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:j("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:r=>U(r,o,i,C,S),value:o.name,type:"text",placeholder:j("Integration Name...","bit-integrations")})]}),s.jsx("div",{className:"my-3",children:s.jsx(F,{entity:m.triggered_entity,setSnackbar:l})}),s.jsx(K,{mailercloudConf:o,setMailercloudConf:i,formFields:p,loading:n,setLoading:c}),s.jsx(R,{edit:!0,saveConfig:()=>{D(m,a,o,t,{edit:1},_)},isLoading:n.update,disabled:o.field_map.length<1,dataConf:o,setDataConf:i,formFields:p})]})}export{Y as default};
