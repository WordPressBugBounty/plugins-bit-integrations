import{u,o as j,e as i,f as I,r,j as t}from"./main-794.js";import{f as b,$ as C,g as _,_ as m}from"./bi.828.0.js";import{S as w}from"./bi.961.13.js";import"./bi.266.440.js";import{S as E,I as S,s as v}from"./bi.499.3.js";import{h as N}from"./bi.894.751.js";import{E as y}from"./bi.354.752.js";import"./bi.685.9.js";import"./bi.690.11.js";import"./bi.811.14.js";import"./bi.257.704.js";import"./bi.35.705.js";function G({allIntegURL:c}){const d=u(),{id:F,formID:f}=j(),[e,s]=i(b),[n,l]=i(C),o=I(_),[p,a]=r.useState({show:!1}),[g,x]=r.useState(!1);return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:p,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:h=>N(h,e,s),name:"name",value:e.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(E,{entity:n.triggered_entity,setSnackbar:a}),t.jsx(y,{formID:f,formFields:o,enchargeConf:e,setEnchargeConf:s}),t.jsx(S,{edit:!0,saveConfig:()=>v({flow:n,setFlow:l,allIntegURL:c,conf:e,navigate:d,edit:1,setIsLoading:x,setSnackbar:a}),disabled:e.listId===""||e.field_map.length<1,isLoading:g,dataConf:e,setDataConf:s,formFields:o}),t.jsx("br",{})]})}export{G as default};
