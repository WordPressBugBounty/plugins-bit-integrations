import{u as h,l as j,e as p,i as b,r as d,j as t}from"./main-579.js";import{g as I,$ as S,h as _,d as C,_ as c,i as F,I as w,s as v}from"./bi.919.15.js";import{F as N}from"./bi.883.739.js";import{h as m,c as y}from"./bi.587.740.js";import"./bi.850.660.js";import"./bi.517.661.js";function A({allIntegURL:f}){const u=h(),{formID:x}=j(),[e,s]=p(I),[i,k]=p(S),r=b(_),[n,l]=d.useState(!1),[g,a]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:g,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>m(o,e,s),name:"name",value:e.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(F,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(N,{formID:x,formFields:r,handleInput:o=>m(o,e,s),fluentSupportConf:e,setFluentSupportConf:s,isLoading:n,setIsLoading:l,setSnackbar:a}),t.jsx(w,{edit:!0,saveConfig:()=>v({flow:i,allIntegURL:f,conf:e,navigate:u,edit:1,setIsLoading:l,setSnackbar:a}),disabled:n||e.field_map.length<1||!y(e)||!e.actions.support_staff,isLoading:n,dataConf:e,setDataConf:s,formFields:r}),t.jsx("br",{})]})}export{A as default};
