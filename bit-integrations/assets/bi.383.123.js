import{u as j,l as I,e as c,r,i as _,j as t}from"./main-650.js";import{$ as w,g as y,h as N,d as R,_ as a,i as v,I as F,W as p,s as M}from"./bi.541.15.js";import{h as m,c as f}from"./bi.217.840.js";import{C as P}from"./bi.894.841.js";function A({allIntegURL:g}){const u=j();I();const[i,S]=c(w),[e,n]=c(y),[x,k]=r.useState(!1),[C,l]=r.useState({}),[h,s]=r.useState({show:!1}),d=_(N),b=()=>{if(!f(e)){s({show:!0,msg:a("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="opportunity"){if(!e.selectedCRMPeople){p.error(a("Please select a people","bit-integrations"));return}if(!e.selectedCRMPipelines&&e.actionName==="opportunity"){p.error(a("Please select a Pipeline","bit-integrations"));return}}M({flow:i,allIntegURL:g,conf:e,navigate:u,edit:1,setLoading:l,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(R,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>m(o,e,n),name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(P,{formID:i.triggered_entity_id,formFields:d,handleInput:o=>m(o,e,n),coppercrmConf:e,setCopperCRMConf:n,loading:C,setLoading:l,setSnackbar:s}),t.jsx(F,{edit:!0,saveConfig:b,disabled:!f(e),isLoading:x,dataConf:e,setDataConf:n,formFields:d}),t.jsx("br",{})]})}export{A as default};
