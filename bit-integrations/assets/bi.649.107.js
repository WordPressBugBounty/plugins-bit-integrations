import{u as j,o as S,e as d,f as h,r as m,j as e}from"./main-288.js";import{f as b,$ as C,g as I,_ as l}from"./bi.4.0.js";import{S as _}from"./bi.470.13.js";import{S as w,I as v,s as N}from"./bi.826.3.js";import{h as y}from"./bi.951.823.js";import{S as P}from"./bi.36.824.js";import"./bi.197.434.js";import"./bi.147.11.js";import"./bi.627.9.js";import"./bi.223.14.js";function z({allIntegURL:f}){const c=j(),{id:E,formID:p}=S(),[t,a]=d(b),[n,g]=d(C),o=h(I),[i,r]=m.useState(!1),[u,s]=m.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(_,{snack:u,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:x=>y(x,t,a),name:"name",value:t.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(w,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(P,{formID:p,formFields:o,sendPulseConf:t,setSendPulseConf:a,isLoading:i,setIsLoading:r,setSnackbar:s}),e.jsx(v,{edit:!0,saveConfig:()=>N({flow:n,setFlow:g,allIntegURL:f,navigate:c,conf:t,edit:1,setIsLoading:r,setSnackbar:s}),disabled:t.field_map.length<1,isLoading:i,dataConf:t,setDataConf:a,formFields:o}),e.jsx("br",{})]})}export{z as default};
