import{u as I,o as b,e as f,r as p,f as w,j as t}from"./main-119.js";import{f as C,$ as _,g as v,_ as c}from"./bi.686.0.js";import{S as N}from"./bi.725.13.js";import{S as y,I as E,s as k}from"./bi.316.3.js";import{G as F,h as g,a as G}from"./bi.319.697.js";import"./bi.276.437.js";import"./bi.900.9.js";import"./bi.301.11.js";import"./bi.744.14.js";import"./bi.767.698.js";import"./bi.570.675.js";import"./bi.556.676.js";import"./bi.13.699.js";import"./bi.481.700.js";import"./bi.606.701.js";import"./bi.871.702.js";function V({allIntegURL:h}){const u=I(),{id:$,formID:i}=b(),[e,o]=f(C),[d,x]=f(_),[n,a]=p.useState(!1),[S,s]=p.useState({show:!1}),l=w(v),[r,j]=p.useState(1);if(r==1)return t.jsx(F,{formID:i,sheetConf:e,setSheetConf:o,step:r,setstep:j,setSnackbar:s,isLoading:n,setIsLoading:a,isEdit:!0});if(r==2)return t.jsxs("div",{style:{width:900},children:[t.jsx(N,{snack:S,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:m=>g(m,e,o),name:"name",value:e.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(y,{entity:d.triggered_entity,setSnackbar:s}),t.jsx(G,{formID:i,formFields:l,handleInput:m=>g(m,e,o,i,a,s),sheetConf:e,setSheetConf:o,isLoading:n,setIsLoading:a,setSnackbar:s}),t.jsx(E,{edit:!0,saveConfig:()=>k({flow:d,setFlow:x,allIntegURL:h,conf:e,navigate:u,edit:1,setIsLoading:a,setSnackbar:s}),disabled:e.spreadsheetId===""||e.worksheetName===""||e.field_map.length<1,isLoading:n,dataConf:e,setDataConf:o,formFields:l}),t.jsx("br",{})]})}export{V as default};