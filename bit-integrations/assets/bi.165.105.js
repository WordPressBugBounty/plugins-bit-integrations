import{u,o as j,e as m,f as b,r as c,j as t}from"./main-263.js";import{f as C,$ as I,g as _,_ as d}from"./bi.924.0.js";import{S as w}from"./bi.428.13.js";import{S,I as k,s as v}from"./bi.317.3.js";import{h as N}from"./bi.629.818.js";import{B as y}from"./bi.691.819.js";import"./bi.361.434.js";import"./bi.929.11.js";import"./bi.402.9.js";import"./bi.686.14.js";function q({allIntegURL:f}){const l=u(),{id:M,formID:p}=j(),[e,a]=m(C),[n,g]=m(I),o=b(_),[i,r]=c.useState(!1),[x,s]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:h=>N(h,e,a),name:"name",value:e.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(S,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(y,{formID:p,formFields:o,benchMarkConf:e,setBenchMarkConf:a,isLoading:i,setIsLoading:r,setSnackbar:s}),t.jsx(k,{edit:!0,saveConfig:()=>v({flow:n,setFlow:g,allIntegURL:f,navigate:l,conf:e,edit:1,setIsLoading:r,setSnackbar:s}),disabled:e.field_map.length<1,isLoading:i,dataConf:e,setDataConf:a,formFields:o}),t.jsx("br",{})]})}export{q as default};