import{u as h,l as j,e as l,i as I,r as f,j as e}from"./main-830.js";import{g as b,$ as C,h as w,d as _,_ as c,i as v,I as N,s as S}from"./bi.597.15.js";import{h as m,A as y,c as A}from"./bi.988.758.js";import"./bi.715.660.js";import"./bi.530.661.js";function D({allIntegURL:p}){const x=h(),{formID:g}=j(),[t,s]=l(b),[o,F]=l(C),r=I(w),[n,d]=f.useState(!1),[u,a]=f.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(_,{snack:u,setSnackbar:a}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>m(i,t,s),name:"name",value:t.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(v,{entity:o.triggered_entity,setSnackbar:a}),e.jsx(y,{formID:g,formFields:r,handleInput:i=>m(i,t,s),affiliateConf:t,setAffiliateConf:s,isLoading:n,setIsLoading:d,setSnackbar:a}),e.jsx(N,{edit:!0,saveConfig:()=>S({flow:o,allIntegURL:p,conf:t,navigate:x,edit:1,setIsLoading:d,setSnackbar:a}),disabled:!A(t)||!t.statusId||!t.referralId||n,isLoading:n,dataConf:t,setDataConf:s,formFields:r}),e.jsx("br",{})]})}export{D as default};
