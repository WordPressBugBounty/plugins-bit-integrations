var F=Object.defineProperty;var h=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var x=(n,e,t)=>e in n?F(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,f=(n,e)=>{for(var t in e||(e={}))y.call(e,t)&&x(n,t,e[t]);if(h)for(var t of h(e))N.call(e,t)&&x(n,t,e[t]);return n};import{u as D,o as k,e as j,r as w,f as E,j as s}from"./main-119.js";import{f as P,$ as R,g as $,_ as r}from"./bi.686.0.js";import{S as L}from"./bi.725.13.js";import{S as M,I as q,s as A}from"./bi.316.3.js";import{h as T,c as z,a as B}from"./bi.743.838.js";import{F as G}from"./bi.376.839.js";import"./bi.276.437.js";import"./bi.900.9.js";import"./bi.301.11.js";import"./bi.744.14.js";import"./bi.570.675.js";import"./bi.556.676.js";function ae({allIntegURL:n}){const e=D(),{id:t}=k(),[a,l]=j(P),[m,C]=j(R),[u,c]=w.useState(!1),[S,o]=w.useState({show:!1}),g=E($),b=(i,_,v)=>{const d=f({},_),{name:p}=i.target;i.target.value!==""?d[p]=i.target.value:delete d[p],v(f({},d))},I=()=>{if(!z(a)){o({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}if(!B(a)){["Deal","Contact"].includes(a.moduleData.module)&&o({show:!0,msg:r("Please select a account or a contact","bit-integrations")}),a.moduleData.module==="Contacts"&&o({show:!0,msg:r("Please select a account","bit-integrations")});return}A({flow:m,setFlow:C,allIntegURL:n,conf:a,navigate:e,id:t,edit:1,setIsLoading:c,setSnackbar:o})};return s.jsxs("div",{style:{width:900},children:[s.jsx(L,{snack:S,setSnackbar:o}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 ",children:r("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>b(i,a,l),name:"name",value:a.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx(M,{entity:m.triggered_entity,setSnackbar:o}),s.jsx(G,{formID:m.triggered_entity_id,formFields:g,handleInput:i=>T(i,a,l,c,o),freshSalesConf:a,setFreshSalesConf:l,isLoading:u,setIsLoading:c,setSnackbar:o}),s.jsx(q,{edit:!0,saveConfig:I,disabled:a.moduleData.module===""||a.field_map.length<1,isLoading:u,dataConf:a,setDataConf:l,formFields:g}),s.jsx("br",{})]})}export{ae as default};
