import{u as j,o as b,e as m,f as h,r as c,j as s}from"./main-252.js";import{f as I,$ as y,g as C,_ as l}from"./bi.63.0.js";import{S as w}from"./bi.588.13.js";import{S as B,I as S,s as _}from"./bi.163.3.js";import{h as p,B as v,c as N,i as F}from"./bi.544.784.js";import"./bi.269.440.js";import"./bi.456.9.js";import"./bi.494.11.js";import"./bi.275.14.js";import"./bi.570.683.js";import"./bi.696.684.js";function G({allIntegURL:f}){const u=j(),{formID:x}=b(),[t,e]=m(I),[i,k]=m(y),r=h(C),[o,d]=c.useState(!1),[g,a]=c.useState({show:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(w,{snack:g,setSnackbar:a}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>p(n,t,e),name:"name",value:t.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(B,{entity:i.triggered_entity,setSnackbar:a}),s.jsx(v,{formID:x,formFields:r,handleInput:n=>p(n,t,e),buddyBossConf:t,setBuddyBossConf:e,isLoading:o,setIsLoading:d,setSnackbar:a}),s.jsx(S,{edit:!0,saveConfig:()=>_({flow:i,allIntegURL:f,conf:t,navigate:u,edit:1,setIsLoading:d,setSnackbar:a}),disabled:!t.mainAction||!N(t)||o||F(t),isLoading:o,dataConf:t,setDataConf:e,formFields:r}),s.jsx("br",{})]})}export{G as default};
