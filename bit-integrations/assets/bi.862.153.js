import{u as h,e as d,r as o,f as j,j as e}from"./main-425.js";import{$ as b,f as y,g as _,_ as a,n as w}from"./bi.107.0.js";import{S as C}from"./bi.273.13.js";import"./bi.900.437.js";import{S as v,I as F,s as N}from"./bi.25.3.js";import{h as k,c as l}from"./bi.752.897.js";import{S as E}from"./bi.46.898.js";import"./bi.814.9.js";import"./bi.563.11.js";import"./bi.783.14.js";function B({allIntegURL:c}){const f=h(),[n,L]=d(b),[t,i]=d(y),[g,r]=o.useState(!1),[p,x]=o.useState({}),[u,s]=o.useState({show:!1}),m=j(_),I=()=>{if(!l(t)){s({show:!0,msg:a("Please map mandatory fields","bit-integrations")});return}if(!t.selectedTag){w.error(a("Please select a Tag","bit-integrations"));return}N({flow:n,allIntegURL:c,conf:t,navigate:f,edit:1,setIsLoading:r,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(C,{snack:u,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:S=>k(S,t,i),name:"name",value:t.name,type:"text",placeholder:a("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(v,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(E,{formID:n.triggered_entity_id,formFields:m,systemeIOConf:t,setSystemeIOConf:i,loading:p,setLoading:x,setIsLoading:r,setSnackbar:s}),e.jsx(F,{edit:!0,saveConfig:I,disabled:!l(t),isLoading:g,dataConf:t,setDataConf:i,formFields:m}),e.jsx("br",{})]})}export{B as default};
