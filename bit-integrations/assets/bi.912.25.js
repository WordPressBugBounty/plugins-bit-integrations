import{u as j,o as I,e as p,r as l,f as S,j as t}from"./main-586.js";import{f as b,$ as w,g as C,_ as c}from"./bi.612.0.js";import{S as _}from"./bi.733.13.js";import{S as v,I as N,s as y}from"./bi.993.3.js";import{h as f,G as k}from"./bi.876.715.js";import"./bi.952.716.js";import"./bi.960.440.js";import"./bi.175.9.js";import"./bi.980.11.js";import"./bi.520.14.js";import"./bi.250.717.js";import"./bi.407.718.js";import"./bi.546.692.js";import"./bi.203.693.js";function J({allIntegURL:g}){const h=j(),{id:E,formID:i}=I(),[e,a]=p(b),[r,x]=p(w),[m,o]=l.useState(!1),[u,s]=l.useState({show:!1}),d=S(C);return t.jsxs("div",{style:{width:900},children:[t.jsx(_,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,e,a),name:"name",value:e.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:r.triggered_entity,setSnackbar:s}),t.jsx(k,{formID:i,formFields:d,handleInput:n=>f(n,e,a,i,o,s),sheetConf:e,setSheetConf:a,isLoading:m,setIsLoading:o,setSnackbar:s}),t.jsx(N,{edit:!0,saveConfig:()=>y({flow:r,setFlow:x,allIntegURL:g,conf:e,navigate:h,edit:1,setIsLoading:o,setSnackbar:s}),disabled:e.spreadsheetId===""||e.worksheetName===""||e.field_map.length<1,isLoading:m,dataConf:e,setDataConf:a,formFields:d}),t.jsx("br",{})]})}export{J as default};
