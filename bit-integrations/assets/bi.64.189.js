import{u as j,l as h,e as c,i as v,r as l,j as e}from"./main-165.js";import{g as b,$ as I,h as C,d as w,_ as m,i as _,I as N,s as S}from"./bi.312.95.js";import{h as p,G as y}from"./bi.975.888.js";import"./bi.953.732.js";import"./bi.422.733.js";function L({allIntegURL:f}){const x=j(),{formID:g}=h(),[t,s]=c(b),[o,E]=c(I),r=v(C),[n,d]=l.useState(!1),[u,a]=l.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(w,{snack:u,setSnackbar:a}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>p(i,t,s),name:"name",value:t.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(_,{entity:o.triggered_entity,setSnackbar:a}),e.jsx(y,{formID:g,formFields:r,handleInput:i=>p(i,t,s),giveWpConf:t,setGiveWpConf:s,isLoading:n,setIsLoading:d,setSnackbar:a}),e.jsx(N,{edit:!0,saveConfig:()=>S({flow:o,allIntegURL:f,conf:t,navigate:x,edit:1,setIsLoading:d,setSnackbar:a}),disabled:!t.mainAction||n,isLoading:n,dataConf:t,setDataConf:s,formFields:r}),e.jsx("br",{})]})}export{L as default};