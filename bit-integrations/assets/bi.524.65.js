import{u as h,l as b,e as r,i as w,r as c,j as s}from"./main-80.js";import{g as C,$ as I,h as _,d as v,_ as d,i as N,I as S,s as y}from"./bi.433.0.js";import{h as F,c as k}from"./bi.276.750.js";import{G as E}from"./bi.907.751.js";import"./bi.895.650.js";import"./bi.194.651.js";function M({allIntegURL:l}){const m=h(),{id:p}=b(),[t,e]=r(C),[n,f]=r(I),o=w(_),[i,x]=c.useState(!1),[g,a]=c.useState({show:!1}),u=()=>{y({flow:n,setFlow:f,allIntegURL:l,conf:t,navigate:m,edit:1,setIsLoading:x,setSnackbar:a})};return s.jsxs("div",{style:{width:900},className:"p-2",children:[s.jsx(v,{snack:g,setSnackbar:a}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>F(j,t,e),name:"name",value:t.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(N,{entity:n.triggered_entity,setSnackbar:a}),s.jsx(E,{flowID:p,formFields:o,googleContactsConf:t,setGoogleContactsConf:e}),s.jsx(S,{edit:!0,saveConfig:u,disabled:!k(t==null?void 0:t.field_map)||t.mainAction===""||i,isLoading:i,dataConf:t,setDataConf:e,formFields:o}),s.jsx("br",{})]})}export{M as default};
