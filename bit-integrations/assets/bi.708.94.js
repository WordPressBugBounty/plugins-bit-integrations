import{u as h,e as l,f as j,r as p,j as e}from"./main-404.js";import{f as I,$ as b,g as _,_ as r}from"./bi.51.0.js";import{S as w}from"./bi.896.13.js";import"./bi.613.437.js";import{S,I as v,s as y}from"./bi.488.3.js";import{M as C}from"./bi.991.804.js";import{h as c,c as M}from"./bi.197.805.js";import"./bi.964.9.js";import"./bi.484.11.js";import"./bi.565.14.js";import"./bi.841.674.js";import"./bi.75.675.js";function B({allIntegURL:f}){const g=h(),[t,a]=l(I),[i,N]=l(b),d=j(_),[m,n]=p.useState(!1),[u,s]=p.useState({show:!1}),x=()=>{if(!M(t)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}y({flow:i,allIntegURL:f,conf:t,navigate:g,edit:1,setIsLoading:n,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(w,{snack:u,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>c(o,t,a),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(S,{entity:i.triggered_entity,setSnackbar:s}),e.jsx(C,{formID:i.triggered_entity_id,formFields:d,handleInput:o=>c(o,t,a,n,s),mailupConf:t,setMailupConf:a,isLoading:m,setIsLoading:n,setSnackbar:s}),e.jsx(v,{edit:!0,saveConfig:x,disabled:!(t!=null&&t.listId),isLoading:m,dataConf:t,setDataConf:a,formFields:d}),e.jsx("br",{})]})}export{B as default};
