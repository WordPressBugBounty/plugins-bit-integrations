import{u as j,o as S,e as c,f as h,r as l,j as t}from"./main-441.js";import{f as b,$ as I,g as C,_ as p}from"./bi.452.0.js";import{S as w}from"./bi.239.13.js";import"./bi.141.437.js";import{S as _,I as v,s as N}from"./bi.73.3.js";import{h as d,S as y}from"./bi.73.675.js";import"./bi.663.9.js";import"./bi.866.11.js";import"./bi.655.14.js";import"./bi.768.673.js";import"./bi.410.674.js";function q({allIntegURL:f}){const x=j(),{formID:g}=S(),[e,s]=c(b),[i,E]=c(I),r=h(C),[n,m]=l.useState(!1),[u,a]=l.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:u,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:p("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>d(o,e,s),name:"name",value:e.name,type:"text",placeholder:p("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(_,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(y,{formID:g,formFields:r,handleInput:o=>d(o,e,s),sliceWpConf:e,setSliceWpConf:s,isLoading:n,setIsLoading:m,setSnackbar:a}),t.jsx(v,{edit:!0,saveConfig:()=>N({flow:i,allIntegURL:f,conf:e,navigate:x,edit:1,setIsLoading:m,setSnackbar:a}),disabled:!e.mainAction||n,isLoading:n,dataConf:e,setDataConf:s,formFields:r}),t.jsx("br",{})]})}export{q as default};