import{u as h,o as j,e as d,r as i,f as y,j as e}from"./main-794.js";import{$ as S,f as _,g as w,_ as s,n as I}from"./bi.828.0.js";import{S as v}from"./bi.961.13.js";import"./bi.266.440.js";import{S as F,I as N,s as k}from"./bi.499.3.js";import{h as E,c as l}from"./bi.755.905.js";import{C as H}from"./bi.741.906.js";import"./bi.685.9.js";import"./bi.690.11.js";import"./bi.811.14.js";function G({allIntegURL:c}){const f=h();j();const[n,L]=d(S),[t,o]=d(_),[p,g]=i.useState(!1),[u,r]=i.useState({}),[x,a]=i.useState({show:!1}),m=y(w),b=()=>{if(!l(t)){a({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}if(t.actionName==="deal"&&!t.selectedStage){I.error(s("Please select a Deal Stage","bit-integrations"));return}k({flow:n,allIntegURL:c,conf:t,navigate:f,edit:1,setLoading:r,setSnackbar:a})};return e.jsxs("div",{style:{width:900},children:[e.jsx(v,{snack:x,setSnackbar:a}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:C=>E(C,t,o),name:"name",value:t.name,type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(F,{entity:n.triggered_entity,setSnackbar:a}),e.jsx(H,{formID:n.triggered_entity_id,formFields:m,companyHubConf:t,setCompanyHubConf:o,loading:u,setLoading:r,setIsLoading:g,setSnackbar:a}),e.jsx(N,{edit:!0,saveConfig:b,disabled:!l(t),isLoading:p,dataConf:t,setDataConf:o,formFields:m}),e.jsx("br",{})]})}export{G as default};
