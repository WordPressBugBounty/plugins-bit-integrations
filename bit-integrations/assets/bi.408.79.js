import{u as h,o as b,e as r,f as w,r as m,j as t}from"./main-794.js";import{f as C,$ as I,g as _,_ as c}from"./bi.828.0.js";import{S}from"./bi.961.13.js";import"./bi.266.440.js";import{S as v,I as N,s as y}from"./bi.499.3.js";import{h as F,c as k}from"./bi.932.807.js";import{G as E}from"./bi.280.808.js";import"./bi.685.9.js";import"./bi.690.11.js";import"./bi.811.14.js";import"./bi.257.704.js";import"./bi.35.705.js";function H({allIntegURL:d}){const l=h(),{id:p}=b(),[s,e]=r(C),[o,f]=r(I),n=w(_),[i,x]=m.useState(!1),[g,a]=m.useState({show:!1}),u=()=>{y({flow:o,setFlow:f,allIntegURL:d,conf:s,navigate:l,edit:1,setIsLoading:x,setSnackbar:a})};return t.jsxs("div",{style:{width:900},className:"p-2",children:[t.jsx(S,{snack:g,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>F(j,s,e),name:"name",value:s.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(v,{entity:o.triggered_entity,setSnackbar:a}),t.jsx(E,{flowID:p,formFields:n,googleContactsConf:s,setGoogleContactsConf:e}),t.jsx(N,{edit:!0,saveConfig:u,disabled:!k(s==null?void 0:s.field_map)||s.mainAction===""||i,isLoading:i,dataConf:s,setDataConf:e,formFields:n}),t.jsx("br",{})]})}export{H as default};
