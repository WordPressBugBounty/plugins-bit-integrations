import{u as j,o as h,e as m,f as b,r as l,j as t}from"./main-270.js";import{f as C,$ as I,g as _,_ as d}from"./bi.340.0.js";import{S as w}from"./bi.218.13.js";import{S,I as v,s as N}from"./bi.155.3.js";import{h as y}from"./bi.522.925.js";import{Z as M}from"./bi.542.926.js";import"./bi.88.440.js";import"./bi.209.11.js";import"./bi.724.9.js";import"./bi.117.14.js";function T({allIntegURL:f}){const c=j(),{id:E,formID:p}=h(),[a,s]=m(C),[o,g]=m(I),n=b(_),[i,r]=l.useState(!1),[x,e]=l.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:x,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>y(u,a,s),name:"name",value:a.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(S,{entity:o.triggered_entity,setSnackbar:e}),t.jsx(M,{formID:p,formFields:n,zagoMailConf:a,setZagoMailConf:s,isLoading:i,setIsLoading:r,setSnackbar:e}),t.jsx(v,{edit:!0,saveConfig:()=>N({flow:o,setFlow:g,allIntegURL:f,navigate:c,conf:a,edit:1,setIsLoading:r,setSnackbar:e}),disabled:a.field_map.length<1,isLoading:i,dataConf:a,setDataConf:s,formFields:n}),t.jsx("br",{})]})}export{T as default};
