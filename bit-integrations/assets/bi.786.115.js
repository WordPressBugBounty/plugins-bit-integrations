import{u as b,l as y,e as c,r,i as I,j as t}from"./main-29.js";import{$ as _,g as w,h as M,d as N,_ as a,i as R,I as v,X as m,s as F}from"./bi.860.15.js";import{h as p,c as f}from"./bi.543.827.js";import{C as S}from"./bi.82.828.js";function A({allIntegURL:u}){const g=b();y();const[i,P]=c(_),[e,n]=c(w),[x,k]=r.useState(!1),[C,l]=r.useState({}),[h,s]=r.useState({show:!1}),d=I(M),j=()=>{if(!f(e)){s({show:!0,msg:a("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="opportunity"||e.actionName==="project"){if(!e.selectedCRMParty){m.error(a("Please select a party","bit-integrations"));return}if(!e.selectedCRMMilestones&&e.actionName==="opportunity"){m.error(a("Please select a Milestone","bit-integrations"));return}}F({flow:i,allIntegURL:u,conf:e,navigate:g,edit:1,setLoading:l,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(N,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>p(o,e,n),name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(R,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(S,{formID:i.triggered_entity_id,formFields:d,handleInput:o=>p(o,e,n),capsulecrmConf:e,setCapsuleCRMConf:n,loading:C,setLoading:l,setSnackbar:s}),t.jsx(v,{edit:!0,saveConfig:j,disabled:!f(e),isLoading:x,dataConf:e,setDataConf:n,formFields:d}),t.jsx("br",{})]})}export{A as default};
