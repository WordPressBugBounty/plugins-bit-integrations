import{u as j,l as I,e as m,r,i as _,j as t}from"./main-692.js";import{$ as w,g as y,h as N,d as S,_ as s,i as k,I as v,W as d,s as F}from"./bi.751.13.js";import{h as f,c as g}from"./bi.724.826.js";import{Z as R}from"./bi.31.827.js";function D({allIntegURL:u}){const p=j();I();const[i,M]=m(w),[e,n]=m(y),[x,P]=r.useState(!1),[h,c]=r.useState({}),[C,a]=r.useState({show:!1}),l=_(N),b=()=>{if(!g(e)){a({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="lead"||e.actionName==="deal"){if(!e.selectedCRMCompany){d.error(s("Please select a company","bit-integrations"));return}if(!e.selectedCRMContact){d.error(s("Please select a contact","bit-integrations"));return}if(!e.selectedCRMSources&&e.actionName==="lead"){d.error(s("Please select a Source","bit-integrations"));return}}F({flow:i,allIntegURL:u,conf:e,navigate:p,edit:1,setLoading:c,setSnackbar:a})};return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:C,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,n),name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(k,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(R,{formID:i.triggered_entity_id,formFields:l,handleInput:o=>f(o,e,n),zendeskConf:e,setZendeskConf:n,loading:h,setLoading:c,setSnackbar:a}),t.jsx(v,{edit:!0,saveConfig:b,disabled:!g(e),isLoading:x,dataConf:e,setDataConf:n,formFields:l}),t.jsx("br",{})]})}export{D as default};