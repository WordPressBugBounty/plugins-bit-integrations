var _=Object.defineProperty,v=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(a,e,t)=>e in a?_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,u=(a,e)=>{for(var t in e||(e={}))w.call(e,t)&&g(a,t,e[t]);if(f)for(var t of f(e))I.call(e,t)&&g(a,t,e[t]);return a},x=(a,e)=>v(a,b(e));import{u as N,r as d,i as h,e as E,j as s}from"./main-692.js";import{$ as z,g as L,h as $,d as k,_ as j,i as F,I as R}from"./bi.751.13.js";import{h as U,s as D}from"./bi.346.766.js";import{S as K}from"./bi.571.767.js";import"./bi.103.768.js";import"./bi.588.657.js";import"./bi.294.658.js";function O({allIntegURL:a}){const e=N(),[t,l]=d.useState({show:!1}),m=h(z),[n,i]=E(L),[y,S]=d.useState({name:"",authKey:""}),c=h($),[o,p]=d.useState({auth:!1,list:!1,tag:!1,page:!1,update:!1}),C=r=>{p(x(u({},o),{update:r}))};return s.jsxs("div",{style:{width:900},children:[s.jsx(k,{snack:t,setSnackbar:l}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:j("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:r=>U(r,n,i,y,S),value:n.name,type:"text",placeholder:j("Integration Name...","bit-integrations")})]}),s.jsx("div",{className:"my-3",children:s.jsx(F,{entity:m.triggered_entity,setSnackbar:l})}),s.jsx(K,{selzyConf:n,setSelzyConf:i,formFields:c,loading:o,setLoading:p}),s.jsx(R,{edit:!0,saveConfig:()=>{D(m,a,n,e,{edit:1},C)},isLoading:o.update,disabled:n.field_map.length<1,dataConf:n,setDataConf:i,formFields:c})]})}export{O as default};
