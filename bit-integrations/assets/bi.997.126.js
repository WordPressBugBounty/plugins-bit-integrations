import{u as I,o as _,e as l,r as i,f as w,j as e}from"./main-814.js";import{$ as C,f as S,g as k,_ as r}from"./bi.317.0.js";import{S as L}from"./bi.610.13.js";import"./bi.8.440.js";import{S as v,I as y,s as F}from"./bi.59.3.js";import{h as c,c as f}from"./bi.786.872.js";import{L as D}from"./bi.336.873.js";import"./bi.765.9.js";import"./bi.672.11.js";import"./bi.478.14.js";function G({allIntegURL:p}){const g=I();_();const[n,N]=l(C),[t,a]=l(S),[u,x]=i.useState(!1),[h,d]=i.useState({}),[j,s]=i.useState({show:!1}),m=w(k),b=()=>{if(!f(t)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}F({flow:n,allIntegURL:p,conf:t,navigate:g,edit:1,setLoading:d,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(L,{snack:j,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>c(o,t,a),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(v,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(D,{formID:n.triggered_entity_id,formFields:m,handleInput:o=>c(o,t,a),lionDeskConf:t,setLionDeskConf:a,loading:h,setLoading:d,setIsLoading:x,setSnackbar:s}),e.jsx(y,{edit:!0,saveConfig:b,disabled:!f(t),isLoading:u,dataConf:t,setDataConf:a,formFields:m}),e.jsx("br",{})]})}export{G as default};
