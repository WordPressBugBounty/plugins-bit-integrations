import{u,o as j,e as m,f as C,r as c,j as t}from"./main-441.js";import{f as v,$ as b,g as h,_ as p}from"./bi.452.0.js";import{S as I}from"./bi.239.13.js";import"./bi.141.437.js";import{S as w,I as S,s as _}from"./bi.73.3.js";import{h as N,P as y}from"./bi.983.847.js";import"./bi.663.9.js";import"./bi.866.11.js";import"./bi.655.14.js";import"./bi.705.698.js";import"./bi.768.673.js";import"./bi.410.674.js";function B({allIntegURL:d}){const f=u(),{formID:l}=j(),[e,o]=m(v),[n,P]=m(b),i=C(h),[a,r]=c.useState(!1),[x,s]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(I,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:p("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:g=>N(g,e,o),name:"name",value:e.name,type:"text",placeholder:p("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(w,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(y,{formID:l,formFields:i,propovoiceCrmConf:e,setPropovoiceCrmConf:o,isLoading:a,setIsLoading:r,setSnackbar:s}),t.jsx(S,{edit:!0,saveConfig:()=>_({flow:n,allIntegURL:d,conf:e,navigate:f,edit:1,setIsLoading:r,setSnackbar:s}),disabled:a,isLoading:a,dataConf:e,setDataConf:o,formFields:i}),t.jsx("br",{})]})}export{B as default};
