import{u as h,o as v,e as n,f as b,r as i,j as e}from"./main-777.js";import{f as w,$ as I,g as _,_ as r}from"./bi.157.0.js";import{S}from"./bi.309.13.js";import"./bi.463.440.js";import{S as C,I as N,s as y}from"./bi.644.3.js";import{h as D}from"./bi.428.734.js";import{G as E}from"./bi.124.735.js";import"./bi.681.9.js";import"./bi.677.11.js";import"./bi.181.14.js";function q({allIntegURL:m}){const l=h(),{id:d}=v(),[t,o]=n(w),[a,c]=n(I),f=b(_),[g,p]=i.useState(!1),[x,s]=i.useState({show:!1}),u=()=>{y({flow:a,setFlow:c,allIntegURL:m,conf:t,navigate:l,edit:1,setIsLoading:p,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(S,{snack:x,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>D(j,t,o),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(C,{entity:a.triggered_entity,setSnackbar:s}),e.jsx(E,{flowID:d,formFields:f,googleDriveConf:t,setGoogleDriveConf:o}),e.jsx(N,{edit:!0,saveConfig:u,disabled:t.field_map.length<1,isLoading:g}),e.jsx("br",{})]})}export{q as default};
