import{u as v,r as s,e as r,f as h,j as t}from"./main-425.js";import{$ as j,f as y,g as C,_ as l}from"./bi.107.0.js";import{S}from"./bi.273.13.js";import"./bi.900.437.js";import{S as _,I as w}from"./bi.25.3.js";import{e as I,s as b}from"./bi.118.784.js";import{K as N}from"./bi.327.785.js";import"./bi.814.9.js";import"./bi.563.11.js";import"./bi.783.14.js";import"./bi.178.675.js";import"./bi.326.676.js";function z({allIntegURL:d}){const m=v(),[f,i]=s.useState({show:!1}),[o,k]=r(j),[e,a]=r(y),n=h(C),[p,c]=s.useState(!1),[g,x]=s.useState({list:!1,field:!1,auth:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:f,setSnackbar:i}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:u=>I(u,e,a),value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("div",{className:"my-3",children:t.jsx(_,{entity:o.triggered_entity,setSnackbar:i})}),t.jsx(N,{formFields:n,klaviyoConf:e,setKlaviyoConf:a,loading:g,setLoading:x}),t.jsx(w,{edit:!0,saveConfig:()=>{b(o,d,e,m,{edit:1},c)},disabled:e.field_map.length<1,isLoading:p,dataConf:e,setDataConf:a,formFields:n})]})}export{z as default};
