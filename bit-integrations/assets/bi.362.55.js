import{u as h,o as j,e as d,r as c,f as E,j as t}from"./main-288.js";import{$ as _,f as b,g as I,_ as o}from"./bi.4.0.js";import{S as w}from"./bi.470.13.js";import"./bi.197.434.js";import{S as C,I as S,s as v}from"./bi.826.3.js";import{h as f,c as y}from"./bi.58.727.js";import{E as F}from"./bi.600.728.js";import"./bi.627.9.js";import"./bi.147.11.js";import"./bi.223.14.js";import"./bi.294.669.js";import"./bi.335.670.js";function G({allIntegURL:p}){const g=h();j();const[i,N]=d(_),[e,a]=d(b),[r,m]=c.useState(!1),[x,s]=c.useState({show:!1}),l=E(I),u=()=>{if(!y(e)){s({show:!0,msg:o("Please map mandatory fields","bit-integrations")});return}v({flow:i,allIntegURL:p,conf:e,navigate:g,edit:1,setIsLoading:m,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:o("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,e,a),name:"name",value:e.name,type:"text",placeholder:o("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(C,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(F,{formID:i.triggered_entity_id,formFields:l,handleInput:n=>f(n,e,a),elasticEmailConf:e,setElasticEmailConf:a,isLoading:r,setIsLoading:m,setSnackbar:s}),t.jsx(S,{edit:!0,saveConfig:u,disabled:e.field_map.length<1,isLoading:r,dataConf:e,setDataConf:a,formFields:l}),t.jsx("br",{})]})}export{G as default};
