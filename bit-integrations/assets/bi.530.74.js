import{u,o as j,e as p,f as b,r as c,j as t}from"./main-494.js";import{f as I,$ as w,g as C,_ as d}from"./bi.185.0.js";import{S}from"./bi.107.13.js";import"./bi.23.437.js";import{S as _,I as v,s as N}from"./bi.104.3.js";import{h as f,c as y}from"./bi.801.769.js";import{W as A}from"./bi.768.770.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.395.717.js";/* empty css          */import"./bi.378.675.js";import"./bi.950.676.js";import"./bi.243.771.js";function J({allIntegURL:l}){const x=u(),{formID:g}=j(),[s,e]=p(I),[i,k]=p(w),r=b(C),[o,m]=c.useState(!1),[h,a]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:h,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,s,e),name:"name",value:s.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(_,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(A,{formID:g,formFields:r,handleInput:n=>f(n,s,e),whatsAppConf:s,setWhatsAppConf:e,isLoading:o,setIsLoading:m,setSnackbar:a}),t.jsx(v,{edit:!0,saveConfig:()=>N({flow:i,allIntegURL:l,conf:s,navigate:x,edit:1,setIsLoading:m,setSnackbar:a}),disabled:y(s)||o,isLoading:o,dataConf:s,setDataConf:e,formFields:r}),t.jsx("br",{})]})}export{J as default};