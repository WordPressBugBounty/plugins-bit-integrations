import{u as h,l as j,e as m,r as c,i as _,j as e}from"./main-692.js";import{$ as b,g as I,h as w,d as C,_ as o,i as v,I as y,s as F}from"./bi.751.13.js";import{h as p,c as R}from"./bi.615.671.js";import{R as N}from"./bi.800.672.js";import"./bi.588.657.js";import"./bi.294.658.js";function P({allIntegURL:f}){const g=h();j();const[i,S]=m(b),[t,s]=m(I),[r,d]=c.useState(!1),[x,a]=c.useState({show:!1}),l=_(w),u=()=>{if(!R(t)){a({show:!0,msg:o("Please map mandatory fields","bit-integrations")});return}F({flow:i,allIntegURL:f,conf:t,navigate:g,edit:1,setIsLoading:d,setSnackbar:a})};return e.jsxs("div",{style:{width:900},children:[e.jsx(C,{snack:x,setSnackbar:a}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:o("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>p(n,t,s),name:"name",value:t.name,type:"text",placeholder:o("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(v,{entity:i.triggered_entity,setSnackbar:a}),e.jsx(N,{formID:i.triggered_entity_id,formFields:l,handleInput:n=>p(n,t,s),rapidmailConf:t,setRapidmailConf:s,isLoading:r,setIsLoading:d,setSnackbar:a}),e.jsx(y,{edit:!0,saveConfig:u,disabled:t.field_map.length<1,isLoading:r,dataConf:t,setDataConf:s,formFields:l}),e.jsx("br",{})]})}export{P as default};
