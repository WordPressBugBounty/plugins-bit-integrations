import{u as I,o as _,e as m,r,f as w,j as t}from"./main-494.js";import{$ as C,f as P,g as v,_ as s,n as l}from"./bi.185.0.js";import{S as y}from"./bi.107.13.js";import"./bi.23.437.js";import{S as F,I as N,s as k}from"./bi.104.3.js";import{h as p,c as g}from"./bi.340.888.js";import{S as E}from"./bi.110.889.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";function H({allIntegURL:u}){const x=I();_();const[n,L]=m(C),[e,i]=m(P),[c,d]=r.useState(!1),[S,b]=r.useState({}),[h,a]=r.useState({show:!1}),f=w(v),j=()=>{if(!g(e)){a({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="opportunities"){if(!e.selectedAccount){l.error(s("Please select an Account","bit-integrations"));return}if(!e.selectedPipeline){l.error(s("Please select a Pipeline","bit-integrations"));return}if(e.selectedPipeline&&!e.selectedStage){l.error(s("Please select a Stage","bit-integrations"));return}}k({flow:n,allIntegURL:u,conf:e,navigate:x,edit:1,setIsLoading:d,setSnackbar:a})};return t.jsxs("div",{style:{width:900},children:[t.jsx(y,{snack:h,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>p(o,e,i),name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(F,{entity:n.triggered_entity,setSnackbar:a}),t.jsx(E,{formID:n.triggered_entity_id,formFields:f,handleInput:o=>p(o,e,i),salesflareConf:e,setSalesflareConf:i,loading:S,setLoading:b,isLoading:c,setIsLoading:d,setSnackbar:a}),t.jsx(N,{edit:!0,saveConfig:j,disabled:!g(e),isLoading:c,dataConf:e,setDataConf:i,formFields:f}),t.jsx("br",{})]})}export{H as default};
