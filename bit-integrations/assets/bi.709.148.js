import{u as g,e as r,r as m,f as u,j as t}from"./main-270.js";import{$ as j,f as h,g as b,_ as d}from"./bi.340.0.js";import"./bi.88.440.js";import{S as y,I as C,s as w}from"./bi.155.3.js";import{h as I,A as _}from"./bi.738.914.js";import"./bi.724.9.js";import"./bi.218.13.js";import"./bi.209.11.js";import"./bi.117.14.js";function T({allIntegURL:c}){const l=g(),[a,v]=r(j),[e,s]=r(h),[n,o]=m.useState(!1),[L,i]=m.useState({show:!1}),f=u(b),p=()=>{w({flow:a,allIntegURL:c,conf:e,navigate:l,edit:1,setIsLoading:o,setSnackbar:i})};return t.jsxs("div",{style:{width:900},children:[t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:x=>I(x,e,s),name:"name",value:e.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(y,{entity:a.triggered_entity,setSnackbar:i}),t.jsx(_,{academyLmsConf:e,setAcademyLmsConf:s,isLoading:n,setIsLoading:o}),t.jsx(C,{edit:!0,saveConfig:p,disabled:!1,isLoading:n,dataConf:e,setDataConf:s,formFields:f}),t.jsx("br",{})]})}export{T as default};
