import{u as C,o as j,e as m,f as h,r as c,j as t}from"./main-263.js";import{f as v,$ as b,g as I,_ as p}from"./bi.924.0.js";import{S as _}from"./bi.428.13.js";import{S as w,I as S,s as N}from"./bi.317.3.js";import{h as y}from"./bi.432.702.js";import{A}from"./bi.258.703.js";import"./bi.361.434.js";import"./bi.929.11.js";import"./bi.402.9.js";import"./bi.686.14.js";import"./bi.885.668.js";import"./bi.169.669.js";function G({allIntegURL:d}){const f=C(),{id:E,formID:l}=j(),[e,s]=m(v),[i,g]=m(b),n=h(I),[o,r]=c.useState(!1),[x,a]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(_,{snack:x,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:p("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>y(u,e,s),name:"name",value:e.name,type:"text",placeholder:p("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(w,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(A,{formID:l,formFields:n,activeCampaingConf:e,setActiveCampaingConf:s,isLoading:o,setIsLoading:r,setSnackbar:a}),t.jsx(S,{edit:!0,saveConfig:()=>N({flow:i,setFlow:g,allIntegURL:d,navigate:f,conf:e,edit:1,setIsLoading:r,setSnackbar:a}),disabled:e.field_map.length<1,isLoading:o,dataConf:e,setDataConf:s,formFields:n}),t.jsx("br",{})]})}export{G as default};
