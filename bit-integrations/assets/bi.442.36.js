import{u,l as j,e as m,i as h,r as d,j as e}from"./main-29.js";import{g as b,$ as C,h as I,d as _,_ as l,i as w,I as v,s as N}from"./bi.860.15.js";import{h as S}from"./bi.811.699.js";import{T as y}from"./bi.841.700.js";import"./bi.194.673.js";import"./bi.480.701.js";/* empty css          */function A({allIntegURL:c}){const f=u(),{formID:g}=j(),[t,a]=m(b),[o,T]=m(C),i=h(I),[n,r]=d.useState(!1),[p,s]=d.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(_,{snack:p,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-150 d-in-b",children:l("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:x=>S(x,t,a),name:"name",value:t.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(w,{entity:o.triggered_entity,setSnackbar:s}),e.jsx(y,{formID:g,formFields:i,telegramConf:t,setTelegramConf:a,isLoading:n,setIsLoading:r,setSnackbar:s}),e.jsx(v,{edit:!0,saveConfig:()=>N({flow:o,allIntegURL:c,conf:t,navigate:f,edit:1,setIsLoading:r,setSnackbar:s}),disabled:t.chat_id===""||n,isLoading:n,dataConf:t,setDataConf:a,formFields:i}),e.jsx("br",{})]})}export{A as default};
