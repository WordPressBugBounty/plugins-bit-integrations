import{u as b,o as h,e as d,f as j,r as c,j as t}from"./main-320.js";import{f as I,$ as C,g as _,_ as l}from"./bi.576.0.js";import{S as w}from"./bi.51.13.js";import"./bi.795.440.js";import{S,I as v,s as N}from"./bi.337.3.js";import{Z as y}from"./bi.675.767.js";import{h as p,c as F}from"./bi.82.768.js";import"./bi.155.9.js";import"./bi.440.11.js";import"./bi.574.14.js";import"./bi.468.689.js";import"./bi.775.690.js";function q({allIntegURL:f}){const x=b(),{formID:g}=h(),[e,s]=d(I),[i,k]=d(C),r=j(_),[o,m]=c.useState(!1),[u,a]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:u,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>p(n,e,s),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(S,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(y,{formID:g,formFields:r,handleInput:n=>p(n,e,s),zoomWebinarConf:e,setZoomWebinarConf:s,isLoading:o,setIsLoading:m,setSnackbar:a}),t.jsx(v,{edit:!0,saveConfig:()=>N({flow:i,allIntegURL:f,conf:e,navigate:x,edit:1,setIsLoading:m,setSnackbar:a}),disabled:e.field_map.length<2||o||!e.id||!F(e)||e.selectedActions==null,isLoading:o,dataConf:e,setDataConf:s,formFields:r}),t.jsx("br",{})]})}export{q as default};
