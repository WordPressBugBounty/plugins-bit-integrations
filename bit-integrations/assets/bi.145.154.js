import{u,o as j,e as d,f as h,r as m,j as t}from"./main-263.js";import{f as b,$ as C,g as I,_ as c}from"./bi.924.0.js";import{S}from"./bi.428.13.js";import"./bi.361.434.js";import{S as v,I as w,s as _}from"./bi.317.3.js";import{D}from"./bi.395.891.js";import{h as N}from"./bi.53.892.js";import"./bi.402.9.js";import"./bi.929.11.js";import"./bi.686.14.js";/* empty css          */function z({allIntegURL:l}){const f=u(),{formID:p}=j(),[e,a]=d(b),[n,y]=d(C),i=h(I),[o,r]=m.useState(!1),[x,s]=m.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:g=>N(g,e,a),name:"name",value:e.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(v,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(D,{formID:p,formFields:i,discordConf:e,setDiscordConf:a,isLoading:o,setIsLoading:r,setSnackbar:s}),t.jsx(w,{edit:!0,saveConfig:()=>_({flow:n,allIntegURL:l,conf:e,navigate:f,edit:1,setIsLoading:r,setSnackbar:s}),disabled:e.selectedChannel===""||e.selectedServer===""||o,isLoading:o,dataConf:e,setDataConf:a,formFields:i}),t.jsx("br",{})]})}export{z as default};