import{u as g,l as j,e as d,i as C,r as c,j as t}from"./main-650.js";import{g as h,$ as b,h as S,d as I,_ as m,i as _,I as w,s as v}from"./bi.541.15.js";import{S as N}from"./bi.979.804.js";import{h as y,c as F}from"./bi.544.805.js";import"./bi.619.660.js";import"./bi.119.661.js";function M({allIntegURL:l}){const f=g(),{formID:p}=j(),[e,a]=d(h),[i,k]=d(b),o=C(S),[n,r]=c.useState(!1),[x,s]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(I,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>y(u,e,a),name:"name",value:e.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(_,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(N,{formID:p,formFields:o,sureCartConf:e,setSureCartConf:a,isLoading:n,setIsLoading:r,setSnackbar:s}),t.jsx(w,{edit:!0,saveConfig:()=>v({flow:i,allIntegURL:l,conf:e,navigate:f,edit:1,setIsLoading:r,setSnackbar:s}),disabled:!e.mainAction||n||!F(e.field_map),isLoading:n,dataConf:e,setDataConf:a,formFields:o}),t.jsx("br",{})]})}export{M as default};
