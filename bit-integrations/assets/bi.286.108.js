import{u as h,l as j,e as d,i as S,r as l,j as e}from"./main-579.js";import{g as b,$ as C,h as I,d as _,_ as c,i as w,I as v,s as N}from"./bi.919.15.js";import{h as y}from"./bi.625.814.js";import{S as P}from"./bi.57.815.js";function R({allIntegURL:m}){const f=h(),{id:E,formID:g}=j(),[s,a]=d(b),[n,u]=d(C),i=S(I),[o,r]=l.useState(!1),[x,t]=l.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(_,{snack:x,setSnackbar:t}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:p=>y(p,s,a),name:"name",value:s.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(w,{entity:n.triggered_entity,setSnackbar:t}),e.jsx(P,{formID:g,formFields:i,sendPulseConf:s,setSendPulseConf:a,isLoading:o,setIsLoading:r,setSnackbar:t}),e.jsx(v,{edit:!0,saveConfig:()=>N({flow:n,setFlow:u,allIntegURL:m,navigate:f,conf:s,edit:1,setIsLoading:r,setSnackbar:t}),disabled:s.field_map.length<1,isLoading:o,dataConf:s,setDataConf:a,formFields:i}),e.jsx("br",{})]})}export{R as default};