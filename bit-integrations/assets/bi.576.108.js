import{u as j,o as h,e as p,f as v,r as d,j as t}from"./main-615.js";import{f as b,$ as I,g as C,_ as c}from"./bi.394.0.js";import{S as w}from"./bi.700.13.js";import"./bi.991.437.js";import{S,I as _,s as N}from"./bi.819.3.js";import{h as f,G as y}from"./bi.608.830.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.178.673.js";import"./bi.985.674.js";function T({allIntegURL:l}){const x=j(),{formID:g}=h(),[e,s]=p(b),[i,E]=p(I),r=v(C),[n,m]=d.useState(!1),[u,a]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:u,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,s),name:"name",value:e.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(S,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(y,{formID:g,formFields:r,handleInput:o=>f(o,e,s),giveWpConf:e,setGiveWpConf:s,isLoading:n,setIsLoading:m,setSnackbar:a}),t.jsx(_,{edit:!0,saveConfig:()=>N({flow:i,allIntegURL:l,conf:e,navigate:x,edit:1,setIsLoading:m,setSnackbar:a}),disabled:!e.mainAction||n,isLoading:n,dataConf:e,setDataConf:s,formFields:r}),t.jsx("br",{})]})}export{T as default};
