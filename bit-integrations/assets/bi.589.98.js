import{u as h,o as C,e as n,f as b,r as i,j as t}from"./main-814.js";import{f as w,$ as I,g as S,_ as r}from"./bi.317.0.js";import{S as _}from"./bi.610.13.js";import"./bi.8.440.js";import{S as v,I as N,s as y}from"./bi.59.3.js";import{h as F,c as P}from"./bi.167.821.js";import{P as k}from"./bi.943.822.js";import"./bi.765.9.js";import"./bi.672.11.js";import"./bi.478.14.js";function B({allIntegURL:d}){const m=h(),{id:c}=C(),[s,a]=n(w),[o,l]=n(I),p=b(S),[f,x]=i.useState(!1),[u,e]=i.useState({show:!1}),g=()=>{y({flow:o,setFlow:l,allIntegURL:d,conf:s,navigate:m,edit:1,setIsLoading:x,setSnackbar:e})};return t.jsxs("div",{style:{width:900},children:[t.jsx(_,{snack:u,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>F(j,s,a),name:"name",value:s.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(v,{entity:o.triggered_entity,setSnackbar:e}),t.jsx(k,{flowID:c,formFields:p,pCloudConf:s,setPCloudConf:a}),t.jsx(N,{edit:!0,saveConfig:g,disabled:!P(s),isLoading:f}),t.jsx("br",{})]})}export{B as default};
