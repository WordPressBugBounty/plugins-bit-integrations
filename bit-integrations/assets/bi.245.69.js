import{u as b,o as j,e as c,f as h,r as d,j as t}from"./main-270.js";import{f as I,$ as C,g as w,_ as l}from"./bi.340.0.js";import{S}from"./bi.218.13.js";import"./bi.88.440.js";import{S as _,I as v,s as A}from"./bi.155.3.js";import{A as N}from"./bi.838.782.js";import{h as p,c as y}from"./bi.951.783.js";import"./bi.724.9.js";import"./bi.209.11.js";import"./bi.117.14.js";import"./bi.125.697.js";import"./bi.128.698.js";import"./bi.121.726.js";function H({allIntegURL:f}){const u=b(),{formID:x}=j(),[a,e]=c(I),[i,F]=c(C),r=h(w),[m,n]=d.useState(!1),[g,s]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:g,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>p(o,a,e),name:"name",value:a.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(_,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(N,{formFields:r,handleInput:o=>p(o,a,e,n,s,x),acumbamailConf:a,setAcumbamailConf:e,isLoading:m,setIsLoading:n,setSnackbar:s}),t.jsx(v,{edit:!0,saveConfig:()=>A({flow:i,allIntegURL:f,conf:a,navigate:u,edit:1,setIsLoading:n,setSnackbar:s}),disabled:!a.mainAction||!y(a),isLoading:m,dataConf:a,setDataConf:e,formFields:r}),t.jsx("br",{})]})}export{H as default};
