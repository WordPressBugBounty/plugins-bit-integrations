import{u as w,e as p,r,f as j,j as t}from"./main-586.js";import{$ as F,f as S,g as I,_ as s,n as l}from"./bi.612.0.js";import{S as _}from"./bi.733.13.js";import"./bi.960.440.js";import{S as C,I as N,s as v}from"./bi.993.3.js";import{h as m,c as f}from"./bi.580.897.js";import{F as P}from"./bi.384.898.js";import"./bi.175.9.js";import"./bi.980.11.js";import"./bi.520.14.js";function z({allIntegURL:u}){w();const[a,k]=p(F),[e,n]=p(S),[g,c]=r.useState(!1),[x,h]=r.useState({}),[y,i]=r.useState({show:!1}),d=j(I),b=()=>{if(!f(e)){i({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="account"&&!e.selectedAccountType){l.error(s("Please select an Account Type","bit-integrations"));return}if(e.actionName==="opportunity"){if(!e.selectedPipeline){l.error(s("Please select a Opportunity Pipeline","bit-integrations"));return}if(!e.selectedOpportunityStage){l.error(s("Please select a Opportunity Stage","bit-integrations"));return}}v({flow:a,allIntegURL:u,conf:e,history,edit:1,setIsLoading:c,setSnackbar:i})};return t.jsxs("div",{style:{width:900},children:[t.jsx(_,{snack:y,setSnackbar:i}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>m(o,e,n),name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(C,{entity:a.triggered_entity,setSnackbar:i}),t.jsx(P,{formID:a.triggered_entity_id,formFields:d,handleInput:o=>m(o,e,n),flowluConf:e,setFlowluConf:n,loading:x,setLoading:h,setIsLoading:c,setSnackbar:i}),t.jsx(N,{edit:!0,saveConfig:b,disabled:!f(e),isLoading:g,dataConf:e,setDataConf:n,formFields:d}),t.jsx("br",{})]})}export{z as default};
