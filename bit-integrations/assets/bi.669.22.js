import{u as w,o as b,e as l,r as f,f as h,j as e}from"./main-777.js";import{$ as j,f as I,g as _,_ as r}from"./bi.157.0.js";import{S as y}from"./bi.309.13.js";import"./bi.463.440.js";import{S as C,I as S,s as v}from"./bi.644.3.js";import{h as c}from"./bi.657.699.js";import{T as F}from"./bi.437.700.js";import"./bi.681.9.js";import"./bi.677.11.js";import"./bi.181.14.js";function B({allIntegURL:p}){const g=w();b();const[o,N]=l(j),[t,i]=l(I),[a,d]=f.useState(!1),[u,s]=f.useState({show:!1}),m=h(_),x=()=>{if(t.to===""&&t.body===""){s({show:!0,msg:r("Please select To and Body field , it is required","bit-integrations")});return}v({flow:o,allIntegURL:p,conf:t,navigate:g,edit:1,setIsLoading:d,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(y,{snack:u,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>c(n,t,i),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(C,{entity:o.triggered_entity,setSnackbar:s}),e.jsx(F,{formID:o.triggered_entity_id,formFields:m,handleInput:n=>c(n,t,i),twilioConf:t,setTwilioConf:i,isLoading:a,setIsLoading:d,setSnackbar:s}),e.jsx(S,{edit:!0,saveConfig:x,disabled:a||t.to===""&&t.body==="",isLoading:a,dataConf:t,setDataConf:i,formFields:m}),e.jsx("br",{})]})}export{B as default};
