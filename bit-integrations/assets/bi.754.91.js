import{u as b,o as u,e as d,f as j,r as p,j as e}from"./main-404.js";import{f as I,$ as C,g as P,_ as c}from"./bi.51.0.js";import{S as v}from"./bi.896.13.js";import"./bi.613.437.js";import{S as w,I as S,s as _}from"./bi.488.3.js";import{h as l,P as M}from"./bi.525.799.js";import"./bi.964.9.js";import"./bi.484.11.js";import"./bi.565.14.js";function T({allIntegURL:f}){const x=b(),{formID:g}=u(),[t,s]=d(I),[r,N]=d(C),m=j(P),[i,n]=p.useState(!1),[h,a]=p.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(v,{snack:h,setSnackbar:a}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>l(o,t,s),name:"name",value:t.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(w,{entity:r.triggered_entity,setSnackbar:a}),e.jsx(M,{formID:g,formFields:m,handleInput:o=>l(o,t,s,n),paidMembershipProConf:t,setPaidMembershipProConf:s,isLoading:i,setIsLoading:n,setSnackbar:a}),e.jsx(S,{edit:!0,saveConfig:()=>_({flow:r,allIntegURL:f,conf:t,navigate:x,edit:1,setIsLoading:n,setSnackbar:a}),disabled:!t.mainAction||i||t.selectedMembership===void 0,isLoading:i,dataConf:t,setDataConf:s,formFields:m}),e.jsx("br",{})]})}export{T as default};
