var b=Object.defineProperty,w=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var g=(a,e,t)=>e in a?b(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,u=(a,e)=>{for(var t in e||(e={}))I.call(e,t)&&g(a,t,e[t]);if(f)for(var t of f(e))N.call(e,t)&&g(a,t,e[t]);return a},x=(a,e)=>w(a,y(e));import{u as S,r as d,i as h,e as E,j as s}from"./main-29.js";import{$ as M,g as L,h as $,d as k,_ as j,i as F,I as R}from"./bi.860.15.js";import{h as U,s as D}from"./bi.600.779.js";import{M as K}from"./bi.237.780.js";import"./bi.600.772.js";import"./bi.831.661.js";import"./bi.392.662.js";function O({allIntegURL:a}){const e=S(),[t,l]=d.useState({show:!1}),m=h(M),[n,o]=E(L),[C,_]=d.useState({name:"",authKey:""}),c=h($),[i,p]=d.useState({auth:!1,list:!1,page:!1,update:!1}),v=r=>{p(x(u({},i),{update:r}))};return s.jsxs("div",{style:{width:900},children:[s.jsx(k,{snack:t,setSnackbar:l}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:j("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:r=>U(r,n,o,C,_),value:n.name,type:"text",placeholder:j("Integration Name...","bit-integrations")})]}),s.jsx("div",{className:"my-3",children:s.jsx(F,{entity:m.triggered_entity,setSnackbar:l})}),s.jsx(K,{moosendConf:n,setMoosendConf:o,formFields:c,loading:i,setLoading:p}),s.jsx(R,{edit:!0,saveConfig:()=>{D(m,a,n,e,{edit:1},v)},isLoading:i.update,disabled:n.field_map.length<1,dataConf:n,setDataConf:o,formFields:c})]})}export{O as default};
