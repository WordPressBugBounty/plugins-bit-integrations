import{u as j,o as h,e as d,f as b,r as f,j as t}from"./main-623.js";import{f as I,$ as C,g as _,_ as l}from"./bi.422.0.js";import{S as w}from"./bi.957.13.js";import"./bi.1.443.js";import{S as F,I as S,s as v}from"./bi.757.3.js";import{h as p}from"./bi.744.804.js";import{B as N}from"./bi.437.805.js";import"./bi.331.9.js";import"./bi.727.11.js";import"./bi.218.14.js";import"./bi.220.720.js";import"./bi.890.721.js";function z({allIntegURL:c}){const x=j(),{formID:g}=h(),[e,a]=d(I),[r,y]=d(C),m=b(_),[o,n]=f.useState(!1),[u,s]=f.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>p(i,e,a),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(F,{entity:r.triggered_entity,setSnackbar:s}),t.jsx(N,{formID:g,formFields:m,handleInput:i=>p(i,e,a,n,s),bitFormConf:e,setBitFormConf:a,isLoading:o,setIsLoading:n,setSnackbar:s}),t.jsx(S,{edit:!0,saveConfig:()=>v({flow:r,allIntegURL:c,conf:e,navigate:x,edit:1,setIsLoading:n,setSnackbar:s}),disabled:e.field_map.length<2||o,isLoading:o,dataConf:e,setDataConf:a,formFields:m}),t.jsx("br",{})]})}export{z as default};
