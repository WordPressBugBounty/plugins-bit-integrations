import{u as v,o as b,e as d,r as o,f as _,j as t}from"./main-247.js";import{$ as w,f as C,g as I,_ as n}from"./bi.456.0.js";import{S}from"./bi.417.13.js";import"./bi.393.437.js";import{S as y,I as F,s as N}from"./bi.427.3.js";import{h as k,c}from"./bi.48.869.js";import{G as E}from"./bi.972.870.js";import"./bi.712.9.js";import"./bi.923.11.js";import"./bi.858.14.js";import"./bi.510.673.js";import"./bi.210.674.js";function J({allIntegURL:f}){const l=v();b();const[a,G]=d(w),[e,i]=d(C),[p,g]=o.useState(!1),[x,r]=o.useState({}),[u,s]=o.useState({show:!1}),m=_(I),h=()=>{if(!c(e)){s({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}N({flow:a,allIntegURL:f,conf:e,navigate:l,edit:1,setLoading:r,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>k(j,e,i),name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(y,{entity:a.triggered_entity,setSnackbar:s}),t.jsx(E,{formID:a.triggered_entity_id,formFields:m,gravitecConf:e,setGravitecConf:i,loading:x,setLoading:r,setIsLoading:g,setSnackbar:s}),t.jsx(F,{edit:!0,saveConfig:h,disabled:!c(e),isLoading:p,dataConf:e,setDataConf:i,formFields:m}),t.jsx("br",{})]})}export{J as default};
