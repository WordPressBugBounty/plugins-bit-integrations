import{u as j,o as I,e as l,r as p,f as S,j as e}from"./main-263.js";import{f as b,$ as w,g as C,_ as c}from"./bi.924.0.js";import{S as _}from"./bi.428.13.js";import"./bi.361.434.js";import{S as v,I as N,s as y}from"./bi.317.3.js";import{h as f,G as k}from"./bi.275.690.js";import"./bi.402.9.js";import"./bi.929.11.js";import"./bi.686.14.js";import"./bi.628.691.js";import"./bi.201.692.js";import"./bi.885.668.js";import"./bi.169.669.js";function H({allIntegURL:g}){const h=j(),{id:E,formID:i}=I(),[t,a]=l(b),[r,x]=l(w),[m,o]=p.useState(!1),[u,s]=p.useState({show:!1}),d=S(C);return e.jsxs("div",{style:{width:900},children:[e.jsx(_,{snack:u,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,t,a),name:"name",value:t.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(v,{entity:r.triggered_entity,setSnackbar:s}),e.jsx(k,{formID:i,formFields:d,handleInput:n=>f(n,t,a,i,o,s),sheetConf:t,setSheetConf:a,isLoading:m,setIsLoading:o,setSnackbar:s}),e.jsx(N,{edit:!0,saveConfig:()=>y({flow:r,setFlow:x,allIntegURL:g,conf:t,navigate:h,edit:1,setIsLoading:o,setSnackbar:s}),disabled:t.spreadsheetId===""||t.worksheetName===""||t.field_map.length<1,isLoading:m,dataConf:t,setDataConf:a,formFields:d}),e.jsx("br",{})]})}export{H as default};