import{u as j,o as I,e as l,r as o,f as b,j as t}from"./main-494.js";import{$ as _,f as w,g as S,_ as r}from"./bi.185.0.js";import{S as v}from"./bi.107.13.js";import"./bi.23.437.js";import{S as y,I as C,s as F}from"./bi.104.3.js";import{h as f,c as N}from"./bi.589.798.js";import{G as R}from"./bi.368.799.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.378.675.js";import"./bi.950.676.js";function J({allIntegURL:p}){const c=j();I();const[i,k]=l(_),[e,a]=l(w),[g,E]=o.useState(!1),[u,d]=o.useState({list:!1,field:!1,auth:!1,tags:!1}),[x,s]=o.useState({show:!1}),m=b(S),h=()=>{if(!N(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}F({flow:i,allIntegURL:p,conf:e,navigate:c,edit:1,setLoading:d,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,e,a),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(y,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(R,{formID:i.triggered_entity_id,formFields:m,handleInput:n=>f(n,e,a),getResponseConf:e,setGetResponseConf:a,loading:u,setLoading:d,setSnackbar:s}),t.jsx(C,{edit:!0,saveConfig:h,disabled:!(e!=null&&e.campaignId),isLoading:g,dataConf:e,setDataConf:a,formFields:m}),t.jsx("br",{})]})}export{J as default};
