import{u as j,o as h,e as d,f as I,r as m,j as t}from"./main-263.js";import{f as b,$ as C,g as w,_ as l}from"./bi.924.0.js";import{S}from"./bi.428.13.js";import"./bi.361.434.js";import{S as _,I as v,s as N}from"./bi.317.3.js";import{h as c,A as y,c as A}from"./bi.42.767.js";import"./bi.402.9.js";import"./bi.929.11.js";import"./bi.686.14.js";import"./bi.885.668.js";import"./bi.169.669.js";function B({allIntegURL:p}){const x=j(),{formID:g}=h(),[e,s]=d(b),[o,F]=d(C),r=I(w),[i,f]=m.useState(!1),[u,a]=m.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:u,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>c(n,e,s),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(_,{entity:o.triggered_entity,setSnackbar:a}),t.jsx(y,{formID:g,formFields:r,handleInput:n=>c(n,e,s),affiliateConf:e,setAffiliateConf:s,isLoading:i,setIsLoading:f,setSnackbar:a}),t.jsx(v,{edit:!0,saveConfig:()=>N({flow:o,allIntegURL:p,conf:e,navigate:x,edit:1,setIsLoading:f,setSnackbar:a}),disabled:!A(e)||!e.statusId||!e.referralId||i,isLoading:i,dataConf:e,setDataConf:s,formFields:r}),t.jsx("br",{})]})}export{B as default};
