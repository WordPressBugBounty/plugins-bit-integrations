import{u as j,o as I,e as d,r as p,f as b,j as t}from"./main-263.js";import{f as C,$ as S,g as _,_ as l}from"./bi.924.0.js";import{S as w}from"./bi.428.13.js";import"./bi.361.434.js";import{S as v,I as N,s as y}from"./bi.317.3.js";import{h as f}from"./bi.107.739.js";import{K as k}from"./bi.1.740.js";import"./bi.402.9.js";import"./bi.929.11.js";import"./bi.686.14.js";import"./bi.885.668.js";import"./bi.169.669.js";function z({allIntegURL:c}){const g=j(),{id:E,formID:x}=I(),[e,s]=d(C),[n,u]=d(S),[i,r]=p.useState(!1),[h,a]=p.useState({show:!1}),m=b(_);return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:h,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,s),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:n.triggered_entity,setSnackbar:a}),t.jsx(k,{formID:x,formFields:m,handleInput:o=>f(o,e,s),keapConf:e,setKeapConf:s,isLoading:i,setIsLoading:r,setSnackbar:a}),t.jsx(N,{edit:!0,saveConfig:()=>y({flow:n,setFlow:u,allIntegURL:c,conf:e,navigate:g,edit:1,setIsLoading:r,setSnackbar:a}),disabled:e.field_map.length<2,isLoading:i,dataConf:e,setDataConf:s,formFields:m}),t.jsx("br",{})]})}export{z as default};
