var v=Object.defineProperty,b=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(a,t,e)=>t in a?v(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,u=(a,t)=>{for(var e in t||(t={}))y.call(t,e)&&g(a,e,t[e]);if(f)for(var e of f(t))I.call(t,e)&&g(a,e,t[e]);return a},x=(a,t)=>b(a,w(t));import{u as S,r as d,i as h,e as E,j as s}from"./main-80.js";import{$ as L,g as $,h as k,d as F,_ as j,i as R,I as U}from"./bi.433.0.js";import{h as D,s as K}from"./bi.203.781.js";import{N as M}from"./bi.578.782.js";import"./bi.924.761.js";import"./bi.895.650.js";import"./bi.194.651.js";function O({allIntegURL:a}){const t=S(),[e,l]=d.useState({show:!1}),m=h(L),[n,i]=E($),[N,C]=d.useState({name:"",authKey:""}),c=h(k),[o,p]=d.useState({auth:!1,list:!1,page:!1,field:!1,update:!1}),_=r=>{p(x(u({},o),{update:r}))};return s.jsxs("div",{style:{width:900},children:[s.jsx(F,{snack:e,setSnackbar:l}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:j("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:r=>D(r,n,i,N,C),value:n.name,type:"text",placeholder:j("Integration Name...","bit-integrations")})]}),s.jsx("div",{className:"my-3",children:s.jsx(R,{entity:m.triggered_entity,setSnackbar:l})}),s.jsx(M,{notionConf:n,setNotionConf:i,formFields:c,loading:o,setLoading:p}),s.jsx(U,{edit:!0,saveConfig:()=>{K(m,a,n,t,{edit:1},_)},isLoading:o.update,disabled:n.field_map.length<1,dataConf:n,setDataConf:i,formFields:c})]})}export{O as default};
