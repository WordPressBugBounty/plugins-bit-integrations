var v=Object.defineProperty,b=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var u=(a,t,e)=>t in a?v(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,g=(a,t)=>{for(var e in t||(t={}))y.call(t,e)&&u(a,e,t[e]);if(f)for(var e of f(t))I.call(t,e)&&u(a,e,t[e]);return a},x=(a,t)=>b(a,w(t));import{u as N,r as d,f as h,e as E,j as s}from"./main-119.js";import{$ as M,f as L,g as $,_ as j}from"./bi.686.0.js";import{S as k}from"./bi.725.13.js";import{S as F,I as R}from"./bi.316.3.js";import{h as U,s as D}from"./bi.227.792.js";import{M as K}from"./bi.285.793.js";import"./bi.276.437.js";import"./bi.900.9.js";import"./bi.301.11.js";import"./bi.744.14.js";import"./bi.481.700.js";import"./bi.570.675.js";import"./bi.556.676.js";function Y({allIntegURL:a}){const t=N(),[e,l]=d.useState({show:!1}),m=h(M),[o,i]=E(L),[C,S]=d.useState({name:"",authKey:""}),p=h($),[n,c]=d.useState({auth:!1,list:!1,page:!1,update:!1}),_=r=>{c(x(g({},n),{update:r}))};return s.jsxs("div",{style:{width:900},children:[s.jsx(k,{snack:e,setSnackbar:l}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:j("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:r=>U(r,o,i,C,S),value:o.name,type:"text",placeholder:j("Integration Name...","bit-integrations")})]}),s.jsx("div",{className:"my-3",children:s.jsx(F,{entity:m.triggered_entity,setSnackbar:l})}),s.jsx(K,{mailercloudConf:o,setMailercloudConf:i,formFields:p,loading:n,setLoading:c}),s.jsx(R,{edit:!0,saveConfig:()=>{D(m,a,o,t,{edit:1},_)},isLoading:n.update,disabled:o.field_map.length<1,dataConf:o,setDataConf:i,formFields:p})]})}export{Y as default};
