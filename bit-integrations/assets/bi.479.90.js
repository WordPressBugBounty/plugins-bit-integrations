import{u as j,o as I,e as l,r as o,f as b,j as e}from"./main-794.js";import{$ as _,f as w,g as S,_ as r}from"./bi.828.0.js";import{S as v}from"./bi.961.13.js";import"./bi.266.440.js";import{S as y,I as C,s as F}from"./bi.499.3.js";import{h as f,c as N}from"./bi.70.829.js";import{G as R}from"./bi.61.830.js";import"./bi.685.9.js";import"./bi.690.11.js";import"./bi.811.14.js";import"./bi.591.710.js";import"./bi.257.704.js";import"./bi.35.705.js";function K({allIntegURL:p}){const c=j();I();const[i,k]=l(_),[t,a]=l(w),[g,E]=o.useState(!1),[u,m]=o.useState({list:!1,field:!1,auth:!1,tags:!1}),[x,s]=o.useState({show:!1}),d=b(S),h=()=>{if(!N(t)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}F({flow:i,allIntegURL:p,conf:t,navigate:c,edit:1,setLoading:m,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(v,{snack:x,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,t,a),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(y,{entity:i.triggered_entity,setSnackbar:s}),e.jsx(R,{formID:i.triggered_entity_id,formFields:d,handleInput:n=>f(n,t,a),getResponseConf:t,setGetResponseConf:a,loading:u,setLoading:m,setSnackbar:s}),e.jsx(C,{edit:!0,saveConfig:h,disabled:!(t!=null&&t.campaignId),isLoading:g,dataConf:t,setDataConf:a,formFields:d}),e.jsx("br",{})]})}export{K as default};
