import{u as I,o as b,e as f,r as n,f as S,j as e}from"./main-404.js";import{f as _,$ as w,g as v,_ as g}from"./bi.51.0.js";import{S as M}from"./bi.896.13.js";import{S as N,I as y,s as F}from"./bi.488.3.js";import{h as x,c as k}from"./bi.933.702.js";import{M as E}from"./bi.835.703.js";import"./bi.613.437.js";import"./bi.484.11.js";import"./bi.964.9.js";import"./bi.565.14.js";import"./bi.874.704.js";import"./bi.841.674.js";import"./bi.75.675.js";function O({allIntegURL:h}){const u=I(),{id:L,formID:r}=b(),[t,a]=f(_),[m,C]=f(w),[d,l]=n.useState({}),[p,i]=n.useState(!1),[j,s]=n.useState({show:!1}),c=S(v);return e.jsxs("div",{style:{width:900},children:[e.jsx(M,{snack:j,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:g("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>x(o,t,a),name:"name",value:t.name,type:"text",placeholder:g("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(N,{entity:m.triggered_entity,setSnackbar:s}),e.jsx(E,{formID:r,formFields:c,handleInput:o=>x(o,t,a,r,d,l,s,i),mailChimpConf:t,setMailChimpConf:a,isLoading:p,setIsLoading:i,setSnackbar:s,loading:d,setLoading:l}),e.jsx(y,{edit:!0,saveConfig:()=>F({flow:m,setFlow:C,allIntegURL:h,conf:t,navigate:u,edit:1,setIsLoading:i,setSnackbar:s}),disabled:t.module===""||t.listId===""||t.field_map.length<1||!k(t),isLoading:p,dataConf:t,setDataConf:a,formFields:c}),e.jsx("br",{})]})}export{O as default};