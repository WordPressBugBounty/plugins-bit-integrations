import{u as b,o as y,e as m,r,f as C,j as t}from"./main-441.js";import{$ as S,f as _,g as w,_ as i,n as c}from"./bi.452.0.js";import{S as N}from"./bi.239.13.js";import"./bi.141.437.js";import{S as v,I as F,s as P}from"./bi.73.3.js";import{h as p,c as f}from"./bi.310.838.js";import{I as R}from"./bi.518.839.js";import"./bi.663.9.js";import"./bi.866.11.js";import"./bi.655.14.js";function H({allIntegURL:g}){const u=b();y();const[n,k]=m(S),[e,a]=m(_),[x,E]=r.useState(!1),[h,l]=r.useState({}),[I,s]=r.useState({show:!1}),d=C(w),j=()=>{if(!f(e)){s({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="opportunity"||e.actionName==="project"){if(!e.selectedCRMPipeline){c.error(i("Please select a pipeline","bit-integrations"));return}if(!e.selectedCRMPipelineStages){c.error(i("Please select a pipeline stage","bit-integrations"));return}}P({flow:n,allIntegURL:g,conf:e,navigate:u,edit:1,setLoading:l,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(N,{snack:I,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:i("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>p(o,e,a),name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(R,{formID:n.triggered_entity_id,formFields:d,handleInput:o=>p(o,e,a),insightlyConf:e,setInsightlyConf:a,loading:h,setLoading:l,setSnackbar:s}),t.jsx(F,{edit:!0,saveConfig:j,disabled:!f(e),isLoading:x,dataConf:e,setDataConf:a,formFields:d}),t.jsx("br",{})]})}export{H as default};
