import{u as v,e as l,r as n,f as w,j as e}from"./main-263.js";import{$ as C,f as F,g as I,_ as a,d as m}from"./bi.924.0.js";import{S as _}from"./bi.428.13.js";import"./bi.361.434.js";import{S as N,I as y,s as k}from"./bi.317.3.js";import{h as p,c}from"./bi.713.733.js";import{H as E}from"./bi.278.734.js";import"./bi.402.9.js";import"./bi.929.11.js";import"./bi.686.14.js";import"./bi.885.668.js";import"./bi.169.669.js";function J({allIntegURL:f}){const u=v(),[r,H]=l(C),[t,i]=l(F),[g,x]=n.useState(!1),[b,s]=n.useState({show:!1}),d=w(I),[h,j]=n.useState({auth:!1,customFields:!1,hubSpotFields:!0}),S=()=>{if(!c(t)){s({show:!0,msg:a("Please map mandatory fields","bit-integrations")});return}if(t.actionName==="ticket"){if(t.pipeline===void 0){m.error(a("Please select a pipeline","bit-integrations"));return}if(t.stage===void 0){m.error(a("Please select a stage","bit-integrations"));return}}k({flow:r,allIntegURL:f,conf:t,navigate:u,edit:1,setIsLoading:x,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(_,{snack:b,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>p(o,t,i),name:"name",value:t.name,type:"text",placeholder:a("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(N,{entity:r.triggered_entity,setSnackbar:s}),e.jsx(E,{formFields:d,handleInput:o=>p(o,t,i),hubspotConf:t,setHubspotConf:i,setSnackbar:s,loading:h,setLoading:j}),e.jsx(y,{edit:!0,saveConfig:S,disabled:!c(t),isLoading:g,dataConf:t,setDataConf:i,formFields:d}),e.jsx("br",{})]})}export{J as default};
