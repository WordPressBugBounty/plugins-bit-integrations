import{u as j,o as h,e as l,f as I,r as d,j as t}from"./main-777.js";import{f as b,$ as C,g as w,_ as p}from"./bi.157.0.js";import{S}from"./bi.309.13.js";import"./bi.463.440.js";import{S as _,I as v,s as N}from"./bi.644.3.js";import{T as y}from"./bi.183.747.js";import{h as c}from"./bi.454.748.js";import"./bi.681.9.js";import"./bi.677.11.js";import"./bi.181.14.js";import"./bi.444.683.js";import"./bi.343.684.js";import"./bi.281.680.js";function G({allIntegURL:f}){const x=j(),{formID:g}=h(),[e,a]=l(b),[r,T]=l(C),m=I(w),[o,n]=d.useState(!1),[u,s]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:p("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>c(i,e,a),name:"name",value:e.name,type:"text",placeholder:p("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(_,{entity:r.triggered_entity,setSnackbar:s}),t.jsx(y,{formID:g,formFields:m,handleInput:i=>c(i,e,a,n,s),trelloConf:e,setTrelloConf:a,isLoading:o,setIsLoading:n,setSnackbar:s}),t.jsx(v,{edit:!0,saveConfig:()=>N({flow:r,allIntegURL:f,conf:e,navigate:x,edit:1,setIsLoading:n,setSnackbar:s}),disabled:e.listId===""||o,isLoading:o,dataConf:e,setDataConf:a,formFields:m}),t.jsx("br",{})]})}export{G as default};
