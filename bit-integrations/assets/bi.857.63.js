import{u as j,o as I,e as d,r as p,f as b,j as t}from"./main-777.js";import{f as C,$ as S,g as _,_ as l}from"./bi.157.0.js";import{S as w}from"./bi.309.13.js";import"./bi.463.440.js";import{S as v,I as N,s as y}from"./bi.644.3.js";import{h as f}from"./bi.931.755.js";import{K as k}from"./bi.789.756.js";import"./bi.681.9.js";import"./bi.677.11.js";import"./bi.181.14.js";import"./bi.444.683.js";import"./bi.343.684.js";function z({allIntegURL:c}){const g=j(),{id:E,formID:x}=I(),[e,s]=d(C),[n,u]=d(S),[i,r]=p.useState(!1),[h,a]=p.useState({show:!1}),m=b(_);return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:h,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,s),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:n.triggered_entity,setSnackbar:a}),t.jsx(k,{formID:x,formFields:m,handleInput:o=>f(o,e,s),keapConf:e,setKeapConf:s,isLoading:i,setIsLoading:r,setSnackbar:a}),t.jsx(N,{edit:!0,saveConfig:()=>y({flow:n,setFlow:u,allIntegURL:c,conf:e,navigate:g,edit:1,setIsLoading:r,setSnackbar:a}),disabled:e.field_map.length<2,isLoading:i,dataConf:e,setDataConf:s,formFields:m}),t.jsx("br",{})]})}export{z as default};
