import{u as h,o as j,e as d,f as b,r as c,j as t}from"./main-586.js";import{f as I,$ as C,g as _,_ as l}from"./bi.612.0.js";import{S as w}from"./bi.733.13.js";import"./bi.960.440.js";import{S,I as v,s as N}from"./bi.993.3.js";import{Z as y}from"./bi.393.769.js";import{h as p,c as F}from"./bi.516.770.js";import"./bi.175.9.js";import"./bi.980.11.js";import"./bi.520.14.js";import"./bi.546.692.js";import"./bi.203.693.js";function B({allIntegURL:f}){const x=h(),{formID:g}=j(),[e,o]=d(I),[r,k]=d(C),m=b(_),[a,n]=c.useState(!1),[u,s]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>p(i,e,o),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(S,{entity:r.triggered_entity,setSnackbar:s}),t.jsx(y,{formID:g,formFields:m,handleInput:i=>p(i,e,o,n,s),zoomConf:e,setZoomConf:o,isLoading:a,setIsLoading:n,setSnackbar:s}),t.jsx(v,{edit:!0,saveConfig:()=>N({flow:r,allIntegURL:f,conf:e,navigate:x,edit:1,setIsLoading:n,setSnackbar:s}),disabled:e.field_map.length<2||a||!e.id||!F(e)||e.selectedActions==null,isLoading:a,dataConf:e,setDataConf:o,formFields:m}),t.jsx("br",{})]})}export{B as default};
