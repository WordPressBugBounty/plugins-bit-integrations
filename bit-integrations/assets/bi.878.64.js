import{u,o as h,e as c,f as j,r as m,j as s}from"./main-494.js";import{f as _,$ as b,g as F,_ as d}from"./bi.185.0.js";import{S as w}from"./bi.107.13.js";import"./bi.23.437.js";import{S as I,I as S,s as v}from"./bi.104.3.js";import{F as y}from"./bi.839.749.js";import{h as C,c as N,a as k}from"./bi.448.750.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.378.675.js";import"./bi.950.676.js";function H({allIntegURL:p}){const l=u(),{formID:f}=h(),[t,a]=c(_),[i,E]=c(b),n=j(F),[o,r]=m.useState(!1),[x,e]=m.useState({show:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(w,{snack:x,setSnackbar:e}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:g=>C(g,t,a),name:"name",value:t.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(I,{entity:i.triggered_entity,setSnackbar:e}),s.jsx(y,{formID:f,formFields:n,freshdeskConf:t,setFreshdeskConf:a,isLoading:o,setIsLoading:r,setSnackbar:e}),s.jsx(S,{edit:!0,saveConfig:()=>v({flow:i,allIntegURL:p,conf:t,navigate:l,edit:1,setIsLoading:r,setSnackbar:e}),disabled:!t.priority||!t.status||!N(t==null?void 0:t.field_map)||t.contactShow&&!k(t==null?void 0:t.field_map_contact)||o,isLoading:o,dataConf:t,setDataConf:a,formFields:n}),s.jsx("br",{})]})}export{H as default};
