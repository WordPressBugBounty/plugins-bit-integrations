import{u as j,o as _,e as d,r as o,f as b,j as e}from"./main-556.js";import{$ as I,f as w,g as C,_ as r}from"./bi.562.0.js";import{S}from"./bi.686.13.js";import"./bi.838.440.js";import{S as L,I as v,s as y}from"./bi.308.3.js";import{h as f,c as F}from"./bi.30.801.js";import{M}from"./bi.519.802.js";import"./bi.657.9.js";import"./bi.510.11.js";import"./bi.244.14.js";import"./bi.587.710.js";import"./bi.854.711.js";function J({allIntegURL:p}){const c=j();_();const[i,N]=d(I),[t,a]=d(w),[g,k]=o.useState(!1),[u,l]=o.useState({list:!1,field:!1,auth:!1,group:!1}),[x,s]=o.useState({show:!1}),m=b(C),h=()=>{if(!F(t)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}y({flow:i,allIntegURL:p,conf:t,navigate:c,edit:1,setLoading:l,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(S,{snack:x,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,t,a),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(L,{entity:i.triggered_entity,setSnackbar:s}),e.jsx(M,{formID:i.triggered_entity_id,formFields:m,handleInput:n=>f(n,t,a),mailerLiteConf:t,setMailerLiteConf:a,loading:u,setLoading:l,setSnackbar:s}),e.jsx(v,{edit:!0,saveConfig:h,disabled:t.field_map.length<1,isLoading:g,dataConf:t,setDataConf:a,formFields:m}),e.jsx("br",{})]})}export{J as default};
