import{u as b,e as d,r as o,f as _,j as e}from"./main-777.js";import{$ as v,f as w,g as C,_ as a,n as I}from"./bi.157.0.js";import{S}from"./bi.309.13.js";import"./bi.463.440.js";import{S as y,I as F,s as D}from"./bi.644.3.js";import{h as E,c as l}from"./bi.696.884.js";import{D as N}from"./bi.134.885.js";import"./bi.681.9.js";import"./bi.677.11.js";import"./bi.181.14.js";function G({allIntegURL:c}){const f=b(),[i,k]=d(v),[t,n]=d(w),[p,r]=o.useState(!1),[g,x]=o.useState({}),[u,s]=o.useState({show:!1}),m=_(C),h=()=>{if(!l(t)){s({show:!0,msg:a("Please map mandatory fields","bit-integrations")});return}if(!t.selectedEvent){I.error(a("Please select a Event","bit-integrations"));return}D({flow:i,allIntegURL:c,conf:t,navigate:f,edit:1,setIsLoading:r,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(S,{snack:u,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>E(j,t,n),name:"name",value:t.name,type:"text",placeholder:a("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(y,{entity:i.triggered_entity,setSnackbar:s}),e.jsx(N,{formID:i.triggered_entity_id,formFields:m,demioConf:t,setDemioConf:n,loading:g,setLoading:x,setIsLoading:r,setSnackbar:s}),e.jsx(F,{edit:!0,saveConfig:h,disabled:!l(t),isLoading:p,dataConf:t,setDataConf:n,formFields:m}),e.jsx("br",{})]})}export{G as default};
