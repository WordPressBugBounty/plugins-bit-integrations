import{u as h,o as j,e as d,r as c,f as I,j as t}from"./main-212.js";import{f as b,$ as _,g as w,_ as l}from"./bi.717.0.js";import{S}from"./bi.954.13.js";import{S as v,I as N,s as y}from"./bi.164.3.js";import{h as f}from"./bi.835.807.js";import{C as E}from"./bi.209.808.js";import"./bi.894.440.js";import"./bi.830.11.js";import"./bi.303.9.js";import"./bi.914.14.js";import"./bi.870.692.js";import"./bi.323.693.js";function B({allIntegURL:p}){const g=h(),{id:x}=j(),[s,a]=d(b),[o,u]=d(_),[i,r]=c.useState(!1),[C,e]=c.useState({show:!1}),m=I(w);return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:C,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,s,a),name:"name",value:s.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:o.triggered_entity,setSnackbar:e}),t.jsx(E,{id:x,formFields:m,handleInput:n=>f(n,s,a),constantContactConf:s,setConstantContactConf:a,isLoading:i,setIsLoading:r,setSnackbar:e}),t.jsx(N,{edit:!0,saveConfig:()=>y({flow:o,setFlow:u,allIntegURL:p,conf:s,navigate:g,edit:1,setIsLoading:r,setSnackbar:e}),disabled:s.listId===""||s.field_map.length<1,isLoading:i===!0,dataConf:s,setDataConf:a,formFields:m}),t.jsx("br",{})]})}export{B as default};
