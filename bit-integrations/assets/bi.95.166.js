import{u as j,e as d,r as n,f as _,j as e}from"./main-556.js";import{$ as w,f as C,g as I,_ as s,n as l}from"./bi.562.0.js";import{S as N}from"./bi.686.13.js";import{S as v,I as y,s as F}from"./bi.308.3.js";import{h as k,c}from"./bi.745.960.js";import{S as E}from"./bi.513.961.js";import"./bi.838.440.js";import"./bi.657.9.js";import"./bi.510.11.js";import"./bi.244.14.js";import"./bi.587.710.js";import"./bi.854.711.js";import"./bi.768.807.js";function K({allIntegURL:f}){const p=j(),[i,L]=d(w),[t,o]=d(C),[g,r]=n.useState(!1),[u,x]=n.useState({}),[S,a]=n.useState({show:!1}),m=_(I),b=()=>{if(!c(t)){a({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}if((t.actionName==="table"||t.actionName==="record")&&!t.selectedSolution){l.error(s("Please select a solution","bit-integrations"));return}if(t.actionName==="record"&&!t.selectedTable){l.error(s("Please select a table","bit-integrations"));return}F({flow:i,allIntegURL:f,conf:t,navigate:p,edit:1,setIsLoading:r,setSnackbar:a})};return e.jsxs("div",{style:{width:900},children:[e.jsx(N,{snack:S,setSnackbar:a}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:h=>k(h,t,o),name:"name",value:t.name,type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(v,{entity:i.triggered_entity,setSnackbar:a}),e.jsx(E,{formID:i.triggered_entity_id,formFields:m,smartSuiteConf:t,setSmartSuiteConf:o,loading:u,setLoading:x,setIsLoading:r,setSnackbar:a}),e.jsx(y,{edit:!0,saveConfig:b,disabled:!c(t),isLoading:g,dataConf:t,setDataConf:o,formFields:m}),e.jsx("br",{})]})}export{K as default};
