import{u as j,o as h,e as m,f as b,r as l,j as t}from"./main-777.js";import{f as C,$ as I,g as _,_ as d}from"./bi.157.0.js";import{S as w}from"./bi.309.13.js";import{S,I as v,s as L}from"./bi.644.3.js";import{h as N}from"./bi.967.870.js";import{L as y}from"./bi.675.871.js";import"./bi.463.440.js";import"./bi.677.11.js";import"./bi.681.9.js";import"./bi.181.14.js";function z({allIntegURL:f}){const c=j(),{id:E,formID:p}=h(),[e,a]=m(C),[n,g]=m(I),o=b(_),[i,r]=l.useState(!1),[x,s]=l.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>N(u,e,a),name:"name",value:e.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(S,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(y,{formID:p,formFields:o,lemlistConf:e,setLemlistConf:a,isLoading:i,setIsLoading:r,setSnackbar:s}),t.jsx(v,{edit:!0,saveConfig:()=>L({flow:n,setFlow:g,allIntegURL:f,navigate:c,conf:e,edit:1,setIsLoading:r,setSnackbar:s}),disabled:e.field_map.length<1,isLoading:i,dataConf:e,setDataConf:a,formFields:o}),t.jsx("br",{})]})}export{z as default};
