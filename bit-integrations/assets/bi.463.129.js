import{u as j,o as b,e as m,r as o,f as _,j as e}from"./main-615.js";import{$ as w,f as C,g as I,_ as n,n as v}from"./bi.394.0.js";import{S as y}from"./bi.700.13.js";import"./bi.991.437.js";import{S as F,I as D,s as N}from"./bi.819.3.js";import{h as R,c as l}from"./bi.835.868.js";import{S as k}from"./bi.432.869.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";function H({allIntegURL:c}){const f=j();b();const[a,E]=m(w),[t,i]=m(C),[p,g]=o.useState(!1),[u,r]=o.useState({}),[x,s]=o.useState({show:!1}),d=_(I),h=()=>{if(!l(t)){s({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}if(!t.selectedRole){v.error("Please select a Role");return}N({flow:a,allIntegURL:c,conf:t,navigate:f,edit:1,setLoading:r,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(y,{snack:x,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:n("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:S=>R(S,t,i),name:"name",value:t.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(F,{entity:a.triggered_entity,setSnackbar:s}),e.jsx(k,{formID:a.triggered_entity_id,formFields:d,suiteDashConf:t,setSuiteDashConf:i,loading:u,setLoading:r,setIsLoading:g,setSnackbar:s}),e.jsx(D,{edit:!0,saveConfig:h,disabled:!l(t),isLoading:p,dataConf:t,setDataConf:i,formFields:d}),e.jsx("br",{})]})}export{H as default};