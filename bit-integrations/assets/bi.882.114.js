import{u as b,l as y,e as c,r,i as C,j as t}from"./main-650.js";import{$ as _,g as w,h as N,d as S,_ as a,i as v,I as F,W as g,s as P}from"./bi.541.15.js";import{h as m,c as p}from"./bi.548.824.js";import{I as R}from"./bi.130.825.js";function A({allIntegURL:f}){const u=b();y();const[i,k]=c(_),[e,n]=c(w),[h,E]=r.useState(!1),[x,l]=r.useState({}),[I,s]=r.useState({show:!1}),d=C(N),j=()=>{if(!p(e)){s({show:!0,msg:a("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="opportunity"||e.actionName==="project"){if(!e.selectedCRMPipeline){g.error(a("Please select a pipeline","bit-integrations"));return}if(!e.selectedCRMPipelineStages){g.error(a("Please select a pipeline stage","bit-integrations"));return}}P({flow:i,allIntegURL:f,conf:e,navigate:u,edit:1,setLoading:l,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:I,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>m(o,e,n),name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(R,{formID:i.triggered_entity_id,formFields:d,handleInput:o=>m(o,e,n),insightlyConf:e,setInsightlyConf:n,loading:x,setLoading:l,setSnackbar:s}),t.jsx(F,{edit:!0,saveConfig:j,disabled:!p(e),isLoading:h,dataConf:e,setDataConf:n,formFields:d}),t.jsx("br",{})]})}export{A as default};
