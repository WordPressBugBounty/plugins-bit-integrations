import{u as j,o as I,e as d,r,f as _,j as t}from"./main-556.js";import{$ as w,f as y,g as S,_ as a,n as m}from"./bi.562.0.js";import{S as N}from"./bi.686.13.js";import"./bi.838.440.js";import{S as R,I as v,s as F}from"./bi.308.3.js";import{h as c,c as f}from"./bi.281.893.js";import{C as M}from"./bi.262.894.js";import"./bi.657.9.js";import"./bi.510.11.js";import"./bi.244.14.js";function H({allIntegURL:g}){const u=j();I();const[i,P]=d(w),[e,o]=d(y),[x,k]=r.useState(!1),[C,p]=r.useState({}),[h,s]=r.useState({show:!1}),l=_(S),b=()=>{if(!f(e)){s({show:!0,msg:a("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="opportunity"){if(!e.selectedCRMPeople){m.error(a("Please select a people","bit-integrations"));return}if(!e.selectedCRMPipelines&&e.actionName==="opportunity"){m.error(a("Please select a Pipeline","bit-integrations"));return}}F({flow:i,allIntegURL:g,conf:e,navigate:u,edit:1,setLoading:p,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(N,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>c(n,e,o),name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(R,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(M,{formID:i.triggered_entity_id,formFields:l,handleInput:n=>c(n,e,o),coppercrmConf:e,setCopperCRMConf:o,loading:C,setLoading:p,setSnackbar:s}),t.jsx(v,{edit:!0,saveConfig:b,disabled:!f(e),isLoading:x,dataConf:e,setDataConf:o,formFields:l}),t.jsx("br",{})]})}export{H as default};
