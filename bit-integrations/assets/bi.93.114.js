import{u as b,o as y,e as c,r,f as I,j as t}from"./main-247.js";import{$ as _,f as w,g as M,_ as a,n as d}from"./bi.456.0.js";import{S as N}from"./bi.417.13.js";import"./bi.393.437.js";import{S,I as R,s as v}from"./bi.427.3.js";import{h as p,c as f}from"./bi.260.839.js";import{C as F}from"./bi.164.840.js";import"./bi.712.9.js";import"./bi.923.11.js";import"./bi.858.14.js";function H({allIntegURL:u}){const g=b();y();const[i,P]=c(_),[e,n]=c(w),[x,k]=r.useState(!1),[C,l]=r.useState({}),[h,s]=r.useState({show:!1}),m=I(M),j=()=>{if(!f(e)){s({show:!0,msg:a("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="opportunity"||e.actionName==="project"){if(!e.selectedCRMParty){d.error(a("Please select a party","bit-integrations"));return}if(!e.selectedCRMMilestones&&e.actionName==="opportunity"){d.error(a("Please select a Milestone","bit-integrations"));return}}v({flow:i,allIntegURL:u,conf:e,navigate:g,edit:1,setLoading:l,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(N,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>p(o,e,n),name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(S,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(F,{formID:i.triggered_entity_id,formFields:m,handleInput:o=>p(o,e,n),capsulecrmConf:e,setCapsuleCRMConf:n,loading:C,setLoading:l,setSnackbar:s}),t.jsx(R,{edit:!0,saveConfig:j,disabled:!f(e),isLoading:x,dataConf:e,setDataConf:n,formFields:m}),t.jsx("br",{})]})}export{H as default};
