import{u as h,l as j,e as l,i as b,r as d,j as a}from"./main-579.js";import{g as C,$ as I,h as _,d as w,_ as c,i as v,I as N,s as S}from"./bi.919.15.js";import{h as y}from"./bi.766.885.js";import{Z as M}from"./bi.393.886.js";function L({allIntegURL:m}){const f=h(),{id:E,formID:g}=j(),[t,s]=l(C),[n,x]=l(I),i=b(_),[o,r]=d.useState(!1),[p,e]=d.useState({show:!1});return a.jsxs("div",{style:{width:900},children:[a.jsx(w,{snack:p,setSnackbar:e}),a.jsxs("div",{className:"flx mt-3",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),a.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>y(u,t,s),name:"name",value:t.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),a.jsx("br",{}),a.jsx(v,{entity:n.triggered_entity,setSnackbar:e}),a.jsx(M,{formID:g,formFields:i,zagoMailConf:t,setZagoMailConf:s,isLoading:o,setIsLoading:r,setSnackbar:e}),a.jsx(N,{edit:!0,saveConfig:()=>S({flow:n,setFlow:x,allIntegURL:m,navigate:f,conf:t,edit:1,setIsLoading:r,setSnackbar:e}),disabled:t.field_map.length<1,isLoading:o,dataConf:t,setDataConf:s,formFields:i}),a.jsx("br",{})]})}export{L as default};
