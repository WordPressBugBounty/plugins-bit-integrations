var F=Object.defineProperty;var h=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var x=(n,e,t)=>e in n?F(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,f=(n,e)=>{for(var t in e||(e={}))y.call(e,t)&&x(n,t,e[t]);if(h)for(var t of h(e))N.call(e,t)&&x(n,t,e[t]);return n};import{u as D,o as k,e as _,r as j,f as E,j as s}from"./main-425.js";import{f as P,$ as R,g as $,_ as r}from"./bi.107.0.js";import{S as L}from"./bi.273.13.js";import{S as M,I as q,s as A}from"./bi.25.3.js";import{h as T,c as z,a as B}from"./bi.77.838.js";import{F as G}from"./bi.546.839.js";import"./bi.900.437.js";import"./bi.814.9.js";import"./bi.563.11.js";import"./bi.783.14.js";import"./bi.178.675.js";import"./bi.326.676.js";function ae({allIntegURL:n}){const e=D(),{id:t}=k(),[a,l]=_(P),[m,w]=_(R),[g,c]=j.useState(!1),[C,o]=j.useState({show:!1}),u=E($),S=(i,I,v)=>{const d=f({},I),{name:p}=i.target;i.target.value!==""?d[p]=i.target.value:delete d[p],v(f({},d))},b=()=>{if(!z(a)){o({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}if(!B(a)){["Deal","Contact"].includes(a.moduleData.module)&&o({show:!0,msg:r("Please select a account or a contact","bit-integrations")}),a.moduleData.module==="Contacts"&&o({show:!0,msg:r("Please select a account","bit-integrations")});return}A({flow:m,setFlow:w,allIntegURL:n,conf:a,navigate:e,id:t,edit:1,setIsLoading:c,setSnackbar:o})};return s.jsxs("div",{style:{width:900},children:[s.jsx(L,{snack:C,setSnackbar:o}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 ",children:r("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>S(i,a,l),name:"name",value:a.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx(M,{entity:m.triggered_entity,setSnackbar:o}),s.jsx(G,{formID:m.triggered_entity_id,formFields:u,handleInput:i=>T(i,a,l,m.triggered_entity_id,c,o),freshSalesConf:a,setFreshSalesConf:l,isLoading:g,setIsLoading:c,setSnackbar:o}),s.jsx(q,{edit:!0,saveConfig:b,disabled:a.moduleData.module===""||a.field_map.length<1,isLoading:g,dataConf:a,setDataConf:l,formFields:u}),s.jsx("br",{})]})}export{ae as default};
