import{u as h,o as j,e as m,f as S,r as l,j as t}from"./main-494.js";import{f as b,$ as I,g as _,_ as d}from"./bi.185.0.js";import{S as C}from"./bi.107.13.js";import"./bi.23.437.js";import{S as F,I as w,s as v}from"./bi.104.3.js";import{F as N}from"./bi.226.755.js";import{h as c,c as y}from"./bi.31.756.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.378.675.js";import"./bi.950.676.js";function G({allIntegURL:f}){const u=h(),{formID:x}=j(),[e,s]=m(b),[i,k]=m(I),r=S(_),[n,p]=l.useState(!1),[g,a]=l.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:g,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>c(o,e,s),name:"name",value:e.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(F,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(N,{formID:x,formFields:r,handleInput:o=>c(o,e,s),fluentSupportConf:e,setFluentSupportConf:s,isLoading:n,setIsLoading:p,setSnackbar:a}),t.jsx(w,{edit:!0,saveConfig:()=>v({flow:i,allIntegURL:f,conf:e,navigate:u,edit:1,setIsLoading:p,setSnackbar:a}),disabled:n||e.field_map.length<1||!y(e)||!e.actions.support_staff,isLoading:n,dataConf:e,setDataConf:s,formFields:r}),t.jsx("br",{})]})}export{G as default};