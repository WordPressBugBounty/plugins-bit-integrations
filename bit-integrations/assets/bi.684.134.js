import{u as j,e as d,r as o,f as S,j as e}from"./main-441.js";import{$ as _,f as w,g as C,_ as i,n as l}from"./bi.452.0.js";import{S as I}from"./bi.239.13.js";import"./bi.141.437.js";import{S as L,I as y,s as F}from"./bi.73.3.js";import{h as E,c}from"./bi.119.878.js";import{L as N}from"./bi.878.879.js";import"./bi.663.9.js";import"./bi.866.11.js";import"./bi.655.14.js";function G({allIntegURL:f}){const g=j(),[n,k]=d(_),[t,a]=d(w),[p,r]=o.useState(!1),[u,x]=o.useState({}),[v,s]=o.useState({show:!1}),m=S(C),b=()=>{if(!c(t)){s({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}if(!t.selectedEvent){l.error(i("Please select an Event","bit-integrations"));return}if(!t.selectedSession){l.error(i("Please select a Session","bit-integrations"));return}F({flow:n,allIntegURL:f,conf:t,navigate:g,edit:1,setIsLoading:r,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(I,{snack:v,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:h=>E(h,t,a),name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(L,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(N,{formID:n.triggered_entity_id,formFields:m,livestormConf:t,setLivestormConf:a,loading:u,setLoading:x,setIsLoading:r,setSnackbar:s}),e.jsx(y,{edit:!0,saveConfig:b,disabled:!c(t),isLoading:p,dataConf:t,setDataConf:a,formFields:m}),e.jsx("br",{})]})}export{G as default};
