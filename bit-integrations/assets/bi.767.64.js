import{u as j,l as I,e as l,r as m,i as b,j as e}from"./main-579.js";import{g as C,$ as _,h as w,d as v,_ as c,i as S,I as N,s as y}from"./bi.919.15.js";import{h as p}from"./bi.532.731.js";import{K as k}from"./bi.255.732.js";import"./bi.850.660.js";import"./bi.517.661.js";function A({allIntegURL:f}){const g=j(),{id:E,formID:x}=I(),[t,s]=l(C),[o,u]=l(_),[i,r]=m.useState(!1),[h,a]=m.useState({show:!1}),d=b(w);return e.jsxs("div",{style:{width:900},children:[e.jsx(v,{snack:h,setSnackbar:a}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>p(n,t,s),name:"name",value:t.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(S,{entity:o.triggered_entity,setSnackbar:a}),e.jsx(k,{formID:x,formFields:d,handleInput:n=>p(n,t,s),keapConf:t,setKeapConf:s,isLoading:i,setIsLoading:r,setSnackbar:a}),e.jsx(N,{edit:!0,saveConfig:()=>y({flow:o,setFlow:u,allIntegURL:f,conf:t,navigate:g,edit:1,setIsLoading:r,setSnackbar:a}),disabled:t.field_map.length<2,isLoading:i,dataConf:t,setDataConf:s,formFields:d}),e.jsx("br",{})]})}export{A as default};