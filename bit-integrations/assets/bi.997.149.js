import{u as b,o as I,e as d,r as n,f as _,j as e}from"./main-270.js";import{$ as w,f as M,g as S,_ as r}from"./bi.340.0.js";import{S as v}from"./bi.218.13.js";import"./bi.88.440.js";import{S as y,I as F,s as N}from"./bi.155.3.js";import{h as c,c as l}from"./bi.850.915.js";import{M as R}from"./bi.935.916.js";import"./bi.724.9.js";import"./bi.209.11.js";import"./bi.117.14.js";function G({allIntegURL:f}){const p=b();I();const[o,k]=d(w),[t,a]=d(M),[g,x]=n.useState(!1),[u,h]=n.useState({}),[j,s]=n.useState({show:!1}),m=_(S),C=()=>{if(!l(t)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}N({flow:o,allIntegURL:f,conf:t,navigate:p,edit:1,setIsLoading:x,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(v,{snack:j,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>c(i,t,a),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(y,{entity:o.triggered_entity,setSnackbar:s}),e.jsx(R,{formID:o.triggered_entity_id,formFields:m,handleInput:i=>c(i,t,a),moxiecrmConf:t,setMoxieCRMConf:a,loading:u,setLoading:h,setSnackbar:s}),e.jsx(F,{edit:!0,saveConfig:C,disabled:!l(t),isLoading:g,dataConf:t,setDataConf:a,formFields:m}),e.jsx("br",{})]})}export{G as default};
