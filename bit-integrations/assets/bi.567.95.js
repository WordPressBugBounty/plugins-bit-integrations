var _=Object.defineProperty,v=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var g=(a,t,e)=>t in a?_(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,u=(a,t)=>{for(var e in t||(t={}))w.call(t,e)&&g(a,e,t[e]);if(c)for(var e of c(t))y.call(t,e)&&g(a,e,t[e]);return a},x=(a,t)=>v(a,b(t));import{u as I,r as d,f as h,e as E,j as s}from"./main-494.js";import{$ as L,f as $,g as k,_ as j}from"./bi.185.0.js";import{S as F}from"./bi.107.13.js";import{S as R,I as U}from"./bi.104.3.js";import{h as D,s as K}from"./bi.491.807.js";import{N as M}from"./bi.213.808.js";import"./bi.23.437.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.790.700.js";import"./bi.378.675.js";import"./bi.950.676.js";function Y({allIntegURL:a}){const t=I(),[e,m]=d.useState({show:!1}),l=h(L),[o,n]=E($),[N,C]=d.useState({name:"",authKey:""}),p=h(k),[i,f]=d.useState({auth:!1,list:!1,page:!1,field:!1,update:!1}),S=r=>{f(x(u({},i),{update:r}))};return s.jsxs("div",{style:{width:900},children:[s.jsx(F,{snack:e,setSnackbar:m}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:j("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:r=>D(r,o,n,N,C),value:o.name,type:"text",placeholder:j("Integration Name...","bit-integrations")})]}),s.jsx("div",{className:"my-3",children:s.jsx(R,{entity:l.triggered_entity,setSnackbar:m})}),s.jsx(M,{notionConf:o,setNotionConf:n,formFields:p,loading:i,setLoading:f}),s.jsx(U,{edit:!0,saveConfig:()=>{K(l,a,o,t,{edit:1},S)},isLoading:i.update,disabled:o.field_map.length<1,dataConf:o,setDataConf:n,formFields:p})]})}export{Y as default};