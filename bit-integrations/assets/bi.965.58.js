import{u as j,o as h,e as m,f as I,r as d,j as t}from"./main-623.js";import{f as b,$ as C,g as w,_ as c}from"./bi.422.0.js";import{S}from"./bi.957.13.js";import"./bi.1.443.js";import{S as _,I as v,s as N}from"./bi.757.3.js";import{T as y}from"./bi.579.785.js";import{h as f}from"./bi.645.786.js";import"./bi.331.9.js";import"./bi.727.11.js";import"./bi.218.14.js";import"./bi.220.720.js";import"./bi.890.721.js";function B({allIntegURL:p}){const x=j(),{formID:g}=h(),[e,a]=m(b),[r,T]=m(C),l=I(w),[o,n]=d.useState(!1),[u,s]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>f(i,e,a),name:"name",value:e.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(_,{entity:r.triggered_entity,setSnackbar:s}),t.jsx(y,{formID:g,formFields:l,handleInput:i=>f(i,e,a,n,s),trelloConf:e,setTrelloConf:a,isLoading:o,setIsLoading:n,setSnackbar:s}),t.jsx(v,{edit:!0,saveConfig:()=>N({flow:r,allIntegURL:p,conf:e,navigate:x,edit:1,setIsLoading:n,setSnackbar:s}),disabled:e.listId===""||o,isLoading:o,dataConf:e,setDataConf:a,formFields:l}),t.jsx("br",{})]})}export{B as default};
