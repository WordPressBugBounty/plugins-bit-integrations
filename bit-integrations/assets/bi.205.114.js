import{u as j,l as h,e as m,i as b,r as c,j as s}from"./main-692.js";import{g as I,$ as C,h as w,d as S,_ as l,i as _,I as v,s as y}from"./bi.751.13.js";import{h as f,M as L}from"./bi.181.825.js";function $({allIntegURL:x}){const g=j(),{formID:u}=h(),[t,e]=m(I),[o,N]=m(C),r=b(w),[n,d]=c.useState(!1),[p,a]=c.useState({show:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(S,{snack:p,setSnackbar:a}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>f(i,t,e),name:"name",value:t.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(_,{entity:o.triggered_entity,setSnackbar:a}),s.jsx(L,{formID:u,formFields:r,handleInput:i=>f(i,t,e),msLmsConf:t,setMsLmsConf:e,isLoading:n,setIsLoading:d,setSnackbar:a}),s.jsx(v,{edit:!0,saveConfig:()=>y({flow:o,allIntegURL:x,conf:t,navigate:g,edit:1,setIsLoading:d,setSnackbar:a}),disabled:t.mainAction===""||n,isLoading:n,dataConf:t,setDataConf:e,formFields:r}),s.jsx("br",{})]})}export{$ as default};
