import{u as j,o as h,e as c,f as C,r as d,j as t}from"./main-623.js";import{f as b,$ as w,g as I,_ as l}from"./bi.422.0.js";import{S}from"./bi.957.13.js";import"./bi.1.443.js";import{S as _,I as v,s as N}from"./bi.757.3.js";import{h as f,W as y}from"./bi.171.755.js";import"./bi.331.9.js";import"./bi.727.11.js";import"./bi.218.14.js";import"./bi.220.720.js";import"./bi.890.721.js";function T({allIntegURL:p}){const x=j();h();const[e,s]=c(b),[i,g]=c(w),r=C(I),[m,o]=d.useState(!1),[u,a]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:u,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-7",onChange:n=>f(n,e,s),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(_,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(y,{wcConf:e,setWcConf:s,formFields:r,handleInput:n=>f(n,e,s,o,a),isLoading:m,setIsLoading:o}),t.jsx(v,{edit:!0,saveConfig:()=>N({flow:i,setFlow:g,allIntegURL:p,conf:e,navigate:x,edit:1,setIsLoading:o,setSnackbar:a}),disabled:!1,isLoading:m,dataConf:e,setDataConf:s,formFields:r}),t.jsx("br",{})]})}export{T as default};
