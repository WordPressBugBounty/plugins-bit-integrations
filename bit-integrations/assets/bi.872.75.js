import{u,o as j,e as p,f as b,r as d,j as t}from"./main-288.js";import{f as I,$ as C,g as w,_ as c}from"./bi.4.0.js";import{S}from"./bi.470.13.js";import"./bi.197.434.js";import{S as _,I as v,s as L}from"./bi.826.3.js";import{h as l,L as D}from"./bi.938.765.js";import"./bi.627.9.js";import"./bi.147.11.js";import"./bi.223.14.js";import"./bi.421.27.js";import"./bi.756.709.js";/* empty css          */import"./bi.255.712.js";import"./bi.294.669.js";import"./bi.335.670.js";function J({allIntegURL:f}){const x=u(),{formID:g}=j(),[s,e]=p(I),[i,N]=p(C),r=b(w),[n,m]=d.useState(!1),[h,a]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:h,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>l(o,s,e),name:"name",value:s.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(_,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(D,{formID:g,formFields:r,handleInput:o=>l(o,s,e),learnDashConf:s,setLearnDashConf:e,isLoading:n,setIsLoading:m,setSnackbar:a}),t.jsx(v,{edit:!0,saveConfig:()=>L({flow:i,allIntegURL:f,conf:s,navigate:x,edit:1,setIsLoading:m,setSnackbar:a}),disabled:s.mainAction===""||n,isLoading:n,dataConf:s,setDataConf:e,formFields:r}),t.jsx("br",{})]})}export{J as default};
