import{u as S,o as j,e as l,r as o,f as _,j as e}from"./main-270.js";import{$ as b,f as I,g as w,_ as r}from"./bi.340.0.js";import{S as C}from"./bi.218.13.js";import"./bi.88.440.js";import{S as v,I as y,s as F}from"./bi.155.3.js";import{h as f,c as N}from"./bi.932.695.js";import{O as k}from"./bi.618.696.js";import"./bi.724.9.js";import"./bi.209.11.js";import"./bi.117.14.js";import"./bi.125.697.js";import"./bi.128.698.js";function H({allIntegURL:p}){const c=S();j();const[n,E]=l(b),[t,a]=l(I),[g,L]=o.useState(!1),[u,d]=o.useState({list:!1,field:!1,auth:!1,group:!1}),[x,s]=o.useState({show:!1}),m=_(w),h=()=>{if(!N(t)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}F({flow:n,allIntegURL:p,conf:t,navigate:c,edit:1,setLoading:d,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(C,{snack:x,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>f(i,t,a),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(v,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(k,{formID:n.triggered_entity_id,formFields:m,handleInput:i=>f(i,t,a),omniSendConf:t,setOmniSendConf:a,loading:u,setLoading:d,setSnackbar:s}),e.jsx(y,{edit:!0,saveConfig:h,disabled:t.field_map.length<1,isLoading:g,dataConf:t,setDataConf:a,formFields:m}),e.jsx("br",{})]})}export{H as default};
