import{u as C,o as j,e as m,f as h,r as p,j as t}from"./main-777.js";import{f as b,$ as I,g as _,_ as d}from"./bi.157.0.js";import{S as w}from"./bi.309.13.js";import"./bi.463.440.js";import{S,I as v,s as N}from"./bi.644.3.js";import{h as y}from"./bi.669.874.js";import{C as M}from"./bi.225.875.js";import"./bi.681.9.js";import"./bi.677.11.js";import"./bi.181.14.js";import"./bi.444.683.js";import"./bi.343.684.js";function B({allIntegURL:c}){const f=C(),{formID:l}=j(),[a,s]=m(b),[o,g]=m(I),n=h(_),[i,r]=p.useState(!1),[x,e]=p.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:x,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>y(u,a,s),name:"name",value:a.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(S,{entity:o.triggered_entity,setSnackbar:e}),t.jsx(M,{formID:l,formFields:n,campaignMonitorConf:a,setCampaignMonitorConf:s,isLoading:i,setIsLoading:r,setSnackbar:e}),t.jsx(v,{edit:!0,saveConfig:()=>N({flow:o,setFlow:g,allIntegURL:c,navigate:f,conf:a,edit:1,setIsLoading:r,setSnackbar:e}),disabled:a.field_map.length<1,isLoading:i,dataConf:a,setDataConf:s,formFields:n}),t.jsx("br",{})]})}export{B as default};
