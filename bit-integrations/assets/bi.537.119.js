import{u as j,o as h,e as l,f as b,r as d,j as t}from"./main-494.js";import{f as I,$ as C,g as M,_ as c}from"./bi.185.0.js";import{S as w}from"./bi.107.13.js";import"./bi.23.437.js";import{S,I as _,s as v}from"./bi.104.3.js";import{M as N}from"./bi.301.850.js";import{h as f}from"./bi.515.851.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.378.675.js";import"./bi.950.676.js";function B({allIntegURL:p}){const x=j(),{formID:g}=h(),[s,a]=l(I),[r,y]=l(C),m=b(M),[n,i]=d.useState(!1),[u,e]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:u,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,s,a),name:"name",value:s.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(S,{entity:r.triggered_entity,setSnackbar:e}),t.jsx(N,{formID:g,formFields:m,handleInput:o=>f(o,s,a,i),mailMintConf:s,setMailMintConf:a,isLoading:n,setIsLoading:i,setSnackbar:e}),t.jsx(_,{edit:!0,saveConfig:()=>v({flow:r,allIntegURL:p,conf:s,navigate:x,edit:1,setIsLoading:i,setSnackbar:e}),disabled:!s.mainAction||n,isLoading:n,dataConf:s,setDataConf:a,formFields:m}),t.jsx("br",{})]})}export{B as default};