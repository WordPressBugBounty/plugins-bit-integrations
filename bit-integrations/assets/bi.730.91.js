import{u as b,o as u,e as d,f as j,r as p,j as e}from"./main-246.js";import{e as I,$ as C,f as P,_ as c}from"./bi.560.0.js";import{S as v}from"./bi.222.13.js";import"./bi.675.443.js";import{S as w,I as S,s as _}from"./bi.545.3.js";import{h as l,P as M}from"./bi.205.848.js";import"./bi.947.9.js";import"./bi.975.11.js";import"./bi.557.14.js";function T({allIntegURL:f}){const x=b(),{formID:g}=u(),[t,s]=d(I),[r,N]=d(C),m=j(P),[i,n]=p.useState(!1),[h,a]=p.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(v,{snack:h,setSnackbar:a}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>l(o,t,s),name:"name",value:t.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(w,{entity:r.triggered_entity,setSnackbar:a}),e.jsx(M,{formID:g,formFields:m,handleInput:o=>l(o,t,s,n),paidMembershipProConf:t,setPaidMembershipProConf:s,isLoading:i,setIsLoading:n,setSnackbar:a}),e.jsx(S,{edit:!0,saveConfig:()=>_({flow:r,allIntegURL:f,conf:t,navigate:x,edit:1,setIsLoading:n,setSnackbar:a}),disabled:!t.mainAction||i||t.selectedMembership===void 0,isLoading:i,dataConf:t,setDataConf:s,formFields:m}),e.jsx("br",{})]})}export{T as default};
