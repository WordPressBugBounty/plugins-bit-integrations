import{u as h,o as j,e as l,r as p,f as _,j as t}from"./main-252.js";import{$ as b,f as I,g as w,_ as o}from"./bi.63.0.js";import{S as C}from"./bi.588.13.js";import"./bi.269.440.js";import{S,I as v,s as y}from"./bi.163.3.js";import{h as f,c as F}from"./bi.647.697.js";import{R}from"./bi.23.698.js";import"./bi.456.9.js";import"./bi.494.11.js";import"./bi.275.14.js";import"./bi.570.683.js";import"./bi.696.684.js";function G({allIntegURL:c}){const g=h();j();const[i,N]=l(b),[e,s]=l(I),[r,m]=p.useState(!1),[x,a]=p.useState({show:!1}),d=_(w),u=()=>{if(!F(e)){a({show:!0,msg:o("Please map mandatory fields","bit-integrations")});return}y({flow:i,allIntegURL:c,conf:e,navigate:g,edit:1,setIsLoading:m,setSnackbar:a})};return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:x,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:o("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,e,s),name:"name",value:e.name,type:"text",placeholder:o("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(S,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(R,{formID:i.triggered_entity_id,formFields:d,handleInput:n=>f(n,e,s),rapidmailConf:e,setRapidmailConf:s,isLoading:r,setIsLoading:m,setSnackbar:a}),t.jsx(v,{edit:!0,saveConfig:u,disabled:e.field_map.length<1,isLoading:r,dataConf:e,setDataConf:s,formFields:d}),t.jsx("br",{})]})}export{G as default};
