import{u as I,o as b,e as f,r as n,f as S,j as e}from"./main-252.js";import{f as _,$ as w,g as v,_ as g}from"./bi.63.0.js";import{S as M}from"./bi.588.13.js";import{S as N,I as y,s as F}from"./bi.163.3.js";import{h as x,c as k}from"./bi.85.711.js";import{M as E}from"./bi.697.712.js";import"./bi.269.440.js";import"./bi.494.11.js";import"./bi.456.9.js";import"./bi.275.14.js";import"./bi.111.713.js";import"./bi.570.683.js";import"./bi.696.684.js";function O({allIntegURL:h}){const u=I(),{id:L,formID:r}=b(),[t,a]=f(_),[m,C]=f(w),[d,l]=n.useState({}),[p,i]=n.useState(!1),[j,s]=n.useState({show:!1}),c=S(v);return e.jsxs("div",{style:{width:900},children:[e.jsx(M,{snack:j,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:g("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>x(o,t,a),name:"name",value:t.name,type:"text",placeholder:g("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(N,{entity:m.triggered_entity,setSnackbar:s}),e.jsx(E,{formID:r,formFields:c,handleInput:o=>x(o,t,a,r,d,l,s,i),mailChimpConf:t,setMailChimpConf:a,isLoading:p,setIsLoading:i,setSnackbar:s,loading:d,setLoading:l}),e.jsx(y,{edit:!0,saveConfig:()=>F({flow:m,setFlow:C,allIntegURL:h,conf:t,navigate:u,edit:1,setIsLoading:i,setSnackbar:s}),disabled:t.module===""||t.listId===""||t.field_map.length<1||!k(t),isLoading:p,dataConf:t,setDataConf:a,formFields:c}),e.jsx("br",{})]})}export{O as default};
