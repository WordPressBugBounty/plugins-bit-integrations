import{u as h,o as j,e as l,r as f,f as S,j as e}from"./main-794.js";import{$ as y,f as _,g as b,_ as o}from"./bi.828.0.js";import{S as I}from"./bi.961.13.js";import"./bi.266.440.js";import{S as w,I as C,s as v}from"./bi.499.3.js";import{h as c,S as F,c as N}from"./bi.359.776.js";import"./bi.685.9.js";import"./bi.690.11.js";import"./bi.811.14.js";import"./bi.257.704.js";import"./bi.35.705.js";function B({allIntegURL:p}){const g=h();j();const[n,k]=l(y),[t,a]=l(_),[r,d]=f.useState(!1),[x,s]=f.useState({show:!1}),m=S(b),u=()=>{if(!N(t)){s({show:!0,msg:o("Please map mandatory fields","bit-integrations")});return}v({flow:n,allIntegURL:p,conf:t,navigate:g,edit:1,setIsLoading:d,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(I,{snack:x,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:o("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>c(i,t,a),name:"name",value:t.name,type:"text",placeholder:o("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(w,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(F,{formID:n.triggered_entity_id,formFields:m,handleInput:i=>c(i,t,a),sendyConf:t,setSendyConf:a,isLoading:r,setIsLoading:d,setSnackbar:s}),e.jsx(C,{edit:!0,saveConfig:u,disabled:t.field_map.length<1,isLoading:r,dataConf:t,setDataConf:a,formFields:m}),e.jsx("br",{})]})}export{B as default};
