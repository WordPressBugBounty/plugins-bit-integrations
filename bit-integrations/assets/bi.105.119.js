import{u as j,o as h,e as l,f as b,r as d,j as t}from"./main-288.js";import{f as I,$ as C,g as M,_ as c}from"./bi.4.0.js";import{S as w}from"./bi.470.13.js";import"./bi.197.434.js";import{S,I as _,s as v}from"./bi.826.3.js";import{M as N}from"./bi.748.843.js";import{h as f}from"./bi.781.844.js";import"./bi.627.9.js";import"./bi.147.11.js";import"./bi.223.14.js";import"./bi.294.669.js";import"./bi.335.670.js";function B({allIntegURL:p}){const x=j(),{formID:g}=h(),[s,a]=l(I),[r,y]=l(C),m=b(M),[n,i]=d.useState(!1),[u,e]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:u,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,s,a),name:"name",value:s.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(S,{entity:r.triggered_entity,setSnackbar:e}),t.jsx(N,{formID:g,formFields:m,handleInput:o=>f(o,s,a,i),mailMintConf:s,setMailMintConf:a,isLoading:n,setIsLoading:i,setSnackbar:e}),t.jsx(_,{edit:!0,saveConfig:()=>v({flow:r,allIntegURL:p,conf:s,navigate:x,edit:1,setIsLoading:i,setSnackbar:e}),disabled:!s.mainAction||n,isLoading:n,dataConf:s,setDataConf:a,formFields:m}),t.jsx("br",{})]})}export{B as default};