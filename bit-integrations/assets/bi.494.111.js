import{u as j,o as h,e as f,f as L,r as d,j as t}from"./main-404.js";import{f as b,$ as I,g as C,_ as c}from"./bi.51.0.js";import{S as w}from"./bi.896.13.js";import"./bi.613.437.js";import{S,I as _,s as v}from"./bi.488.3.js";import{h as l,L as N}from"./bi.573.836.js";import"./bi.964.9.js";import"./bi.484.11.js";import"./bi.565.14.js";function T({allIntegURL:p}){const x=j(),{formID:g}=h(),[s,e]=f(b),[i,y]=f(I),r=L(C),[n,m]=d.useState(!1),[u,a]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:u,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>l(o,s,e),name:"name",value:s.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(S,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(N,{formID:g,formFields:r,handleInput:o=>l(o,s,e),lifterLmsConf:s,setLifterLmsConf:e,isLoading:n,setIsLoading:m,setSnackbar:a}),t.jsx(_,{edit:!0,saveConfig:()=>v({flow:i,allIntegURL:p,conf:s,navigate:x,edit:1,setIsLoading:m,setSnackbar:a}),disabled:s.mainAction===""||n,isLoading:n,dataConf:s,setDataConf:e,formFields:r}),t.jsx("br",{})]})}export{T as default};
