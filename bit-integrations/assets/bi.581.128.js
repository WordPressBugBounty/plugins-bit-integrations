import{u as b,o as C,e as d,r,f as I,j as t}from"./main-252.js";import{$ as _,f as w,g as v,_ as n,n as y}from"./bi.63.0.js";import{S as F}from"./bi.588.13.js";import"./bi.269.440.js";import{S as N,I as k,s as E}from"./bi.163.3.js";import{h as c,c as f}from"./bi.487.876.js";import{S as L}from"./bi.816.877.js";import"./bi.456.9.js";import"./bi.494.11.js";import"./bi.275.14.js";function H({allIntegURL:p}){const g=b();C();const[i,P]=d(_),[e,a]=d(w),[u,x]=r.useState(!1),[h,m]=r.useState({}),[S,s]=r.useState({show:!1}),l=I(v),j=()=>{if(!f(e)){s({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="lead"&&!e.selectedCRMPipeline){y.error(n("Please select a pipeline","bit-integrations"));return}E({flow:i,allIntegURL:p,conf:e,navigate:g,edit:1,setLoading:m,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(F,{snack:S,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>c(o,e,a),name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(N,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(L,{formID:i.triggered_entity_id,formFields:l,handleInput:o=>c(o,e,a),salesmateConf:e,setSalesmateConf:a,loading:h,setLoading:m,setIsLoading:x,setSnackbar:s}),t.jsx(k,{edit:!0,saveConfig:j,disabled:!f(e),isLoading:u,dataConf:e,setDataConf:a,formFields:l}),t.jsx("br",{})]})}export{H as default};
