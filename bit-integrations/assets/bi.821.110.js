import{u as j,o as w,e as m,r as o,f as b,j as e}from"./main-183.js";import{$ as C,f as k,g as I,_ as n}from"./bi.430.0.js";import{S as _}from"./bi.337.13.js";import"./bi.554.440.js";import{S as v,I as F,s as y}from"./bi.159.3.js";import{h as N,c as d}from"./bi.972.848.js";import{Z as E}from"./bi.918.849.js";import"./bi.929.9.js";import"./bi.12.11.js";import"./bi.860.14.js";import"./bi.251.688.js";import"./bi.136.689.js";function G({allIntegURL:l}){const f=j();w();const[i,L]=m(C),[t,a]=m(k),[c,p]=o.useState(!1),[h,g]=o.useState({auth:!1,header:!1,workbooks:!1,worksheets:!1,workSheetHeaders:!0}),[u,s]=o.useState({show:!1}),r=b(I),x=()=>{if(!d(t)){s({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}y({flow:i,allIntegURL:l,conf:t,navigate:f,edit:1,setIsLoading:p,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(_,{snack:u,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:n("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:S=>N(S,t,a),name:"name",value:t.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(v,{entity:i.triggered_entity,setSnackbar:s}),e.jsx(E,{formFields:r,zohoSheetConf:t,setZohoSheetConf:a,loading:h,setLoading:g,setSnackbar:s}),e.jsx(F,{edit:!0,saveConfig:x,disabled:!d(t),isLoading:c,dataConf:t,setDataConf:a,formFields:r}),e.jsx("br",{})]})}export{G as default};
