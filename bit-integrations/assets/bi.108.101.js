import{u as j,o as y,e as l,r as o,f as b,j as t}from"./main-320.js";import{$ as I,f as _,g as w,_ as r}from"./bi.576.0.js";import{S as C}from"./bi.51.13.js";import"./bi.795.440.js";import{S as v,I as F,s as N}from"./bi.337.3.js";import{h as f,c}from"./bi.476.832.js";import{S as k}from"./bi.166.833.js";import"./bi.155.9.js";import"./bi.440.11.js";import"./bi.574.14.js";function G({allIntegURL:p}){const g=j();y();const[i,E]=l(I),[e,a]=l(_),[u,L]=o.useState(!1),[x,m]=o.useState({auth:!1}),[h,s]=o.useState({show:!1}),d=b(w),S=()=>{if(!c(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}N({flow:i,allIntegURL:p,conf:e,navigate:g,edit:1,setLoading:m,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,e,a),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(k,{formID:i.triggered_entity_id,formFields:d,handleInput:n=>f(n,e,a),smailyConf:e,setSmailyConf:a,loading:x,setLoading:m,setSnackbar:s}),t.jsx(F,{edit:!0,saveConfig:S,disabled:!c(e),isLoading:u,dataConf:e,setDataConf:a,formFields:d}),t.jsx("br",{})]})}export{G as default};
