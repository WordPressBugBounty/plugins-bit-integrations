import{u as h,o as j,e as l,r as p,f as _,j as t}from"./main-212.js";import{$ as b,f as I,g as w,_ as o}from"./bi.717.0.js";import{S as C}from"./bi.954.13.js";import"./bi.894.440.js";import{S,I as v,s as y}from"./bi.164.3.js";import{h as f,c as F}from"./bi.595.707.js";import{R}from"./bi.440.708.js";import"./bi.303.9.js";import"./bi.830.11.js";import"./bi.914.14.js";import"./bi.870.692.js";import"./bi.323.693.js";function G({allIntegURL:c}){const g=h();j();const[i,N]=l(b),[e,s]=l(I),[r,m]=p.useState(!1),[x,a]=p.useState({show:!1}),d=_(w),u=()=>{if(!F(e)){a({show:!0,msg:o("Please map mandatory fields","bit-integrations")});return}y({flow:i,allIntegURL:c,conf:e,navigate:g,edit:1,setIsLoading:m,setSnackbar:a})};return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:x,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:o("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,e,s),name:"name",value:e.name,type:"text",placeholder:o("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(S,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(R,{formID:i.triggered_entity_id,formFields:d,handleInput:n=>f(n,e,s),rapidmailConf:e,setRapidmailConf:s,isLoading:r,setIsLoading:m,setSnackbar:a}),t.jsx(v,{edit:!0,saveConfig:u,disabled:e.field_map.length<1,isLoading:r,dataConf:e,setDataConf:s,formFields:d}),t.jsx("br",{})]})}export{G as default};
