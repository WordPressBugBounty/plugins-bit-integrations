import{u as h,l as j,e as d,i as b,r as l,j as t}from"./main-650.js";import{g as I,$ as C,h as _,d as w,_ as c,i as F,I as v,s as N}from"./bi.541.15.js";import{h as f}from"./bi.977.741.js";import{B as S}from"./bi.150.742.js";import"./bi.619.660.js";import"./bi.119.661.js";function D({allIntegURL:p}){const x=h(),{formID:g}=j(),[e,a]=d(I),[r,y]=d(C),m=b(_),[n,o]=l.useState(!1),[u,s]=l.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>f(i,e,a),name:"name",value:e.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(F,{entity:r.triggered_entity,setSnackbar:s}),t.jsx(S,{formID:g,formFields:m,handleInput:i=>f(i,e,a,o,s),bitFormConf:e,setBitFormConf:a,isLoading:n,setIsLoading:o,setSnackbar:s}),t.jsx(v,{edit:!0,saveConfig:()=>N({flow:r,allIntegURL:p,conf:e,navigate:x,edit:1,setIsLoading:o,setSnackbar:s}),disabled:e.field_map.length<2||n,isLoading:n,dataConf:e,setDataConf:a,formFields:m}),t.jsx("br",{})]})}export{D as default};
