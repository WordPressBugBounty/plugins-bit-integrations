import{u as S,o as I,e as l,r,f as _,j as t}from"./main-814.js";import{$ as w,f as y,g as N,_ as a,n as c}from"./bi.317.0.js";import{S as v}from"./bi.610.13.js";import"./bi.8.440.js";import{S as F,I as R,s as L}from"./bi.59.3.js";import{h as f,c as p}from"./bi.26.894.js";import{O as M}from"./bi.618.895.js";import"./bi.765.9.js";import"./bi.672.11.js";import"./bi.478.14.js";function B({allIntegURL:g}){const u=S();I();const[o,k]=l(w),[e,n]=l(y),[x,d]=r.useState(!1),[h,C]=r.useState({}),[b,s]=r.useState({show:!1}),m=_(N),j=()=>{if(!p(e)){s({show:!0,msg:a("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="customer"&&!e.selectedCustomerType){c.error(a("Please select Customer Type","bit-integrations"));return}if(e.actionName==="lead"&&!e.selectedLeadStatus){c.error(a("Please select Lead Status","bit-integrations"));return}L({flow:o,allIntegURL:g,conf:e,navigate:u,edit:1,setIsLoading:d,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:b,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>f(i,e,n),name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(F,{entity:o.triggered_entity,setSnackbar:s}),t.jsx(M,{formID:o.triggered_entity_id,formFields:m,handleInput:i=>f(i,e,n),oneHashCRMConf:e,setOneHashCRMConf:n,loading:h,setLoading:C,setIsLoading:d,setSnackbar:s}),t.jsx(R,{edit:!0,saveConfig:j,disabled:!p(e),isLoading:x,dataConf:e,setDataConf:n,formFields:m}),t.jsx("br",{})]})}export{B as default};
