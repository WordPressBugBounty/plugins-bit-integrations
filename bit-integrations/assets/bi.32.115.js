import{u as j,o as h,e as d,f as b,r as c,j as t}from"./main-404.js";import{f as I,$ as S,g as C,_ as f}from"./bi.51.0.js";import{S as w}from"./bi.896.13.js";import"./bi.613.437.js";import{S as _,I as v,s as y}from"./bi.488.3.js";import{h as l,M as L}from"./bi.301.843.js";import"./bi.964.9.js";import"./bi.484.11.js";import"./bi.565.14.js";function T({allIntegURL:p}){const x=j(),{formID:g}=h(),[s,e]=d(I),[i,N]=d(S),r=b(C),[n,m]=c.useState(!1),[u,a]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:u,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:f("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>l(o,s,e),name:"name",value:s.name,type:"text",placeholder:f("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(_,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(L,{formID:g,formFields:r,handleInput:o=>l(o,s,e),msLmsConf:s,setMsLmsConf:e,isLoading:n,setIsLoading:m,setSnackbar:a}),t.jsx(v,{edit:!0,saveConfig:()=>y({flow:i,allIntegURL:p,conf:s,navigate:x,edit:1,setIsLoading:m,setSnackbar:a}),disabled:s.mainAction===""||n,isLoading:n,dataConf:s,setDataConf:e,formFields:r}),t.jsx("br",{})]})}export{T as default};
