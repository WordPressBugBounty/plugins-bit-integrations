import{u as h,o as b,e as d,f as I,r as n,j as t}from"./main-556.js";import{f as S,$ as _,g as v,_ as l}from"./bi.562.0.js";import{S as w}from"./bi.686.13.js";import"./bi.838.440.js";import{S as C,I as N,s as y}from"./bi.308.3.js";import{h as T}from"./bi.368.750.js";import{T as E}from"./bi.373.751.js";import"./bi.657.9.js";import"./bi.510.11.js";import"./bi.244.14.js";import"./bi.452.723.js";import"./bi.989.752.js";/* empty css          */function J({allIntegURL:p}){const f=h(),{formID:g}=b(),[e,a]=d(S),[i,F]=d(_),r=I(v),[o,m]=n.useState(!1),[x,s]=n.useState({show:!1}),[u,j]=n.useState((e==null?void 0:e.name)||"");return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-150 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:c=>{j(c.target.value),T(c,e,a)},name:"name",value:u,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(C,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(E,{formID:g,formFields:r,telegramConf:e,setTelegramConf:a,isLoading:o,setIsLoading:m,setSnackbar:s}),t.jsx(N,{edit:!0,saveConfig:()=>y({flow:i,allIntegURL:p,conf:e,navigate:f,edit:1,setIsLoading:m,setSnackbar:s}),disabled:e.chat_id===""||o,isLoading:o,dataConf:e,setDataConf:a,formFields:r}),t.jsx("br",{})]})}export{J as default};
