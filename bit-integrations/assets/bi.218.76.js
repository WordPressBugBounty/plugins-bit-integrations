import{u as h,o as j,e as d,r as c,f as C,j as t}from"./main-425.js";import{$ as _,f as I,g as b,_ as f}from"./bi.107.0.js";import{S as w}from"./bi.273.13.js";import"./bi.900.437.js";import{S,I as v,s as R}from"./bi.25.3.js";import{h as l}from"./bi.2.773.js";import{R as y}from"./bi.153.774.js";import"./bi.814.9.js";import"./bi.563.11.js";import"./bi.783.14.js";import"./bi.326.676.js";function z({allIntegURL:p}){const g=h();j();const[n,F]=d(_),[e,s]=d(I),[i,r]=c.useState(!1),[x,a]=c.useState({show:!1}),m=C(b),u=()=>{R({flow:n,allIntegURL:p,conf:e,navigate:g,edit:1,setIsLoading:r,setSnackbar:a})};return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:x,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:f("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>l(o,e,s),name:"name",value:e.name,type:"text",placeholder:f("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(S,{entity:n.triggered_entity,setSnackbar:a}),t.jsx(y,{formID:n.triggered_entity_id,formFields:m,handleInput:o=>l(o,e,s),restrictConf:e,setRestrictConf:s,isLoading:i,setIsLoading:r,setSnackbar:a}),t.jsx(v,{edit:!0,saveConfig:u,disabled:e.field_map.length<1,isLoading:i,dataConf:e,setDataConf:s,formFields:m}),t.jsx("br",{})]})}export{z as default};
