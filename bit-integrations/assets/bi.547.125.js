import{u as j,o as h,e as m,f as b,r as l,j as t}from"./main-247.js";import{f as C,$ as I,g as _,_ as d}from"./bi.456.0.js";import{S as w}from"./bi.417.13.js";import{S,I as v,s as L}from"./bi.427.3.js";import{h as N}from"./bi.473.859.js";import{L as y}from"./bi.34.860.js";import"./bi.393.437.js";import"./bi.923.11.js";import"./bi.712.9.js";import"./bi.858.14.js";function z({allIntegURL:f}){const c=j(),{id:E,formID:p}=h(),[e,a]=m(C),[n,g]=m(I),o=b(_),[i,r]=l.useState(!1),[x,s]=l.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>N(u,e,a),name:"name",value:e.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(S,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(y,{formID:p,formFields:o,lemlistConf:e,setLemlistConf:a,isLoading:i,setIsLoading:r,setSnackbar:s}),t.jsx(v,{edit:!0,saveConfig:()=>L({flow:n,setFlow:g,allIntegURL:f,navigate:c,conf:e,edit:1,setIsLoading:r,setSnackbar:s}),disabled:e.field_map.length<1,isLoading:i,dataConf:e,setDataConf:a,formFields:o}),t.jsx("br",{})]})}export{z as default};
