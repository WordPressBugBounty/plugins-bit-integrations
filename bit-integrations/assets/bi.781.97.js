import{u as j,e as l,r as o,f as b,j as t}from"./main-794.js";import{$ as I,f as _,g as w,_ as r}from"./bi.828.0.js";import{S as C}from"./bi.961.13.js";import"./bi.266.440.js";import{S as v,I as y,s as F}from"./bi.499.3.js";import{h as f,c}from"./bi.232.842.js";import{S as N}from"./bi.193.843.js";import"./bi.685.9.js";import"./bi.690.11.js";import"./bi.811.14.js";import"./bi.257.704.js";import"./bi.35.705.js";function H({allIntegURL:p}){const g=j(),[i,k]=l(I),[e,a]=l(_),[u,E]=o.useState(!1),[x,d]=o.useState({list:!1,field:!1,auth:!1,tags:!1}),[h,s]=o.useState({show:!1}),m=b(w),S=()=>{if(!c(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}F({flow:i,allIntegURL:p,conf:e,navigate:g,edit:1,setLoading:d,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,e,a),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(N,{formID:i.triggered_entity_id,formFields:m,handleInput:n=>f(n,e,a),sendGridConf:e,setSendGridConf:a,loading:x,setLoading:d,setSnackbar:s}),t.jsx(y,{edit:!0,saveConfig:S,disabled:!c(e),isLoading:u,dataConf:e,setDataConf:a,formFields:m}),t.jsx("br",{})]})}export{H as default};
