import{u,o as j,e as m,f as h,r as d,j as t}from"./main-615.js";import{f as b,$ as C,g as I,_ as l}from"./bi.394.0.js";import{S as _}from"./bi.700.13.js";import"./bi.991.437.js";import{S as w,I as S,s as v}from"./bi.819.3.js";import{h as N}from"./bi.628.713.js";import{T as y}from"./bi.360.714.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.941.685.js";import"./bi.214.715.js";/* empty css          */function G({allIntegURL:c}){const f=u(),{formID:p}=j(),[e,a]=m(b),[n,T]=m(C),i=h(I),[o,r]=d.useState(!1),[g,s]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(_,{snack:g,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-150 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:x=>N(x,e,a),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(w,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(y,{formID:p,formFields:i,telegramConf:e,setTelegramConf:a,isLoading:o,setIsLoading:r,setSnackbar:s}),t.jsx(S,{edit:!0,saveConfig:()=>v({flow:n,allIntegURL:c,conf:e,navigate:f,edit:1,setIsLoading:r,setSnackbar:s}),disabled:e.chat_id===""||o,isLoading:o,dataConf:e,setDataConf:a,formFields:i}),t.jsx("br",{})]})}export{G as default};
