import{u as h,o as b,e as r,f as w,r as m,j as t}from"./main-247.js";import{f as C,$ as I,g as _,_ as c}from"./bi.456.0.js";import{S}from"./bi.417.13.js";import"./bi.393.437.js";import{S as v,I as N,s as y}from"./bi.427.3.js";import{h as F,c as k}from"./bi.808.774.js";import{G as E}from"./bi.515.775.js";import"./bi.712.9.js";import"./bi.923.11.js";import"./bi.858.14.js";import"./bi.510.673.js";import"./bi.210.674.js";function H({allIntegURL:d}){const l=h(),{id:p}=b(),[s,e]=r(C),[o,f]=r(I),n=w(_),[i,x]=m.useState(!1),[g,a]=m.useState({show:!1}),u=()=>{y({flow:o,setFlow:f,allIntegURL:d,conf:s,navigate:l,edit:1,setIsLoading:x,setSnackbar:a})};return t.jsxs("div",{style:{width:900},className:"p-2",children:[t.jsx(S,{snack:g,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>F(j,s,e),name:"name",value:s.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(v,{entity:o.triggered_entity,setSnackbar:a}),t.jsx(E,{flowID:p,formFields:n,googleContactsConf:s,setGoogleContactsConf:e}),t.jsx(N,{edit:!0,saveConfig:u,disabled:!k(s==null?void 0:s.field_map)||s.mainAction===""||i,isLoading:i,dataConf:s,setDataConf:e,formFields:n}),t.jsx("br",{})]})}export{H as default};
