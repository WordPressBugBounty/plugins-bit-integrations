import{u as C,o as I,e as m,r,f as S,j as t}from"./main-777.js";import{$ as _,f as w,g as v,_ as a,n as c}from"./bi.157.0.js";import{S as y}from"./bi.309.13.js";import"./bi.463.440.js";import{S as F,I as N,s as P}from"./bi.644.3.js";import{h as f,c as p}from"./bi.219.830.js";import{A}from"./bi.17.831.js";import"./bi.681.9.js";import"./bi.677.11.js";import"./bi.181.14.js";function H({allIntegURL:g}){const u=C();I();const[n,R]=m(_),[e,i]=m(w),[x,k]=r.useState(!1),[h,l]=r.useState({}),[b,s]=r.useState({show:!1}),d=S(v),j=()=>{if(!p(e)){s({show:!0,msg:a("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="deal"){if(!e.selectedCRMPipeline){c.error(a("Please select a pipeline","bit-integrations"));return}if(!e.selectedCRMPipelineStages){c.error(a("Please select a pipeline stage","bit-integrations"));return}}P({flow:n,allIntegURL:g,conf:e,navigate:u,edit:1,setLoading:l,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(y,{snack:b,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,i),name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(F,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(A,{formID:n.triggered_entity_id,formFields:d,handleInput:o=>f(o,e,i),agiledConf:e,setAgiledConf:i,loading:h,setLoading:l,setSnackbar:s}),t.jsx(N,{edit:!0,saveConfig:j,disabled:!p(e),isLoading:x,dataConf:e,setDataConf:i,formFields:d}),t.jsx("br",{})]})}export{H as default};
