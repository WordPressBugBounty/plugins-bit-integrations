import{u as g,o as j,e as m,f as C,r as c,j as t}from"./main-425.js";import{f as S,$ as h,g as b,_ as d}from"./bi.107.0.js";import{S as I}from"./bi.273.13.js";import"./bi.900.437.js";import{S as _,I as w,s as v}from"./bi.25.3.js";import{S as N}from"./bi.485.820.js";import{h as y,c as F}from"./bi.16.821.js";import"./bi.814.9.js";import"./bi.563.11.js";import"./bi.783.14.js";import"./bi.178.675.js";import"./bi.326.676.js";function G({allIntegURL:p}){const f=g(),{formID:l}=j(),[e,a]=m(S),[n,k]=m(h),i=C(b),[o,r]=c.useState(!1),[x,s]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(I,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>y(u,e,a),name:"name",value:e.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(_,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(N,{formID:l,formFields:i,sureCartConf:e,setSureCartConf:a,isLoading:o,setIsLoading:r,setSnackbar:s}),t.jsx(w,{edit:!0,saveConfig:()=>v({flow:n,allIntegURL:p,conf:e,navigate:f,edit:1,setIsLoading:r,setSnackbar:s}),disabled:!e.mainAction||o||!F(e.field_map),isLoading:o,dataConf:e,setDataConf:a,formFields:i}),t.jsx("br",{})]})}export{G as default};
