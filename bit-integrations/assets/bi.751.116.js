import{u as j,o as S,e as m,r,f as I,j as t}from"./main-494.js";import{$ as _,f as w,g as y,_ as s,n as d}from"./bi.185.0.js";import{S as N}from"./bi.107.13.js";import"./bi.23.437.js";import{S as k,I as v,s as F}from"./bi.104.3.js";import{h as f,c as p}from"./bi.234.845.js";import{Z as R}from"./bi.141.846.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";function G({allIntegURL:g}){const u=j();S();const[o,M]=m(_),[e,n]=m(w),[x,P]=r.useState(!1),[C,c]=r.useState({}),[b,a]=r.useState({show:!1}),l=I(y),h=()=>{if(!p(e)){a({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="lead"||e.actionName==="deal"){if(!e.selectedCRMCompany){d.error(s("Please select a company","bit-integrations"));return}if(!e.selectedCRMContact){d.error(s("Please select a contact","bit-integrations"));return}if(!e.selectedCRMSources&&e.actionName==="lead"){d.error(s("Please select a Source","bit-integrations"));return}}F({flow:o,allIntegURL:g,conf:e,navigate:u,edit:1,setLoading:c,setSnackbar:a})};return t.jsxs("div",{style:{width:900},children:[t.jsx(N,{snack:b,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>f(i,e,n),name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(k,{entity:o.triggered_entity,setSnackbar:a}),t.jsx(R,{formID:o.triggered_entity_id,formFields:l,handleInput:i=>f(i,e,n),zendeskConf:e,setZendeskConf:n,loading:C,setLoading:c,setSnackbar:a}),t.jsx(v,{edit:!0,saveConfig:h,disabled:!p(e),isLoading:x,dataConf:e,setDataConf:n,formFields:l}),t.jsx("br",{})]})}export{G as default};
