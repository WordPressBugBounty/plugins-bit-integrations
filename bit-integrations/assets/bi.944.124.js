import{u as j,o as h,e as m,f as b,r as f,j as t}from"./main-623.js";import{f as y,$ as C,g as I,_ as l}from"./bi.422.0.js";import{S as _}from"./bi.957.13.js";import{S as w,I as S,s as v}from"./bi.757.3.js";import{h as N}from"./bi.558.908.js";import{M}from"./bi.501.909.js";import"./bi.1.443.js";import"./bi.727.11.js";import"./bi.331.9.js";import"./bi.218.14.js";function z({allIntegURL:d}){const c=j(),{id:E,formID:p}=h(),[e,a]=m(y),[i,g]=m(C),n=b(I),[o,r]=f.useState(!1),[x,s]=f.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(_,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>N(u,e,a),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(w,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(M,{formID:p,formFields:n,mailifyConf:e,setMailifyConf:a,isLoading:o,setIsLoading:r,setSnackbar:s}),t.jsx(S,{edit:!0,saveConfig:()=>v({flow:i,setFlow:g,allIntegURL:d,navigate:c,conf:e,edit:1,setIsLoading:r,setSnackbar:s}),disabled:e.field_map.length<1,isLoading:o,dataConf:e,setDataConf:a,formFields:n}),t.jsx("br",{})]})}export{z as default};
