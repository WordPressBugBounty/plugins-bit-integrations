import{u as b,o as j,e as m,r as o,f as I,j as e}from"./main-556.js";import{$ as _,f as w,g as S,_ as r}from"./bi.562.0.js";import{S as v}from"./bi.686.13.js";import"./bi.838.440.js";import{S as y,I as C,s as F}from"./bi.308.3.js";import{h as f,c as M}from"./bi.707.838.js";import{M as N}from"./bi.356.839.js";import"./bi.657.9.js";import"./bi.510.11.js";import"./bi.244.14.js";import"./bi.587.710.js";import"./bi.854.711.js";function J({allIntegURL:c}){const p=b();j();const[i,k]=m(_),[t,a]=m(w),[g,E]=o.useState(!1),[u,l]=o.useState({list:!1,field:!1,auth:!1,tags:!1}),[x,s]=o.useState({show:!1}),d=I(S),h=()=>{if(!M(t)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}F({flow:i,allIntegURL:c,conf:t,navigate:p,edit:1,setLoading:l,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(v,{snack:x,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,t,a),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(y,{entity:i.triggered_entity,setSnackbar:s}),e.jsx(N,{formID:i.triggered_entity_id,formFields:d,handleInput:n=>f(n,t,a),mailBlusterConf:t,setMailBlusterConf:a,loading:u,setLoading:l,setSnackbar:s}),e.jsx(C,{edit:!0,saveConfig:h,disabled:!(t!=null&&t.subscribed),isLoading:g,dataConf:t,setDataConf:a,formFields:d}),e.jsx("br",{})]})}export{J as default};
