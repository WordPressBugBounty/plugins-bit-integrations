import{u as j,l as h,e as d,i as C,r as l,j as e}from"./main-650.js";import{g as b,$ as w,h as I,d as _,_ as m,i as v,I as N,s as S}from"./bi.541.15.js";import{h as f,W as y}from"./bi.890.693.js";import"./bi.619.660.js";import"./bi.119.661.js";function L({allIntegURL:x}){const p=j();h();const[s,t]=d(b),[i,g]=d(w),r=C(I),[c,n]=l.useState(!1),[u,a]=l.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(_,{snack:u,setSnackbar:a}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-7",onChange:o=>f(o,s,t),name:"name",value:s.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(v,{entity:i.triggered_entity,setSnackbar:a}),e.jsx(y,{wcConf:s,setWcConf:t,formFields:r,handleInput:o=>f(o,s,t,n,a),isLoading:c,setIsLoading:n}),e.jsx(N,{edit:!0,saveConfig:()=>S({flow:i,setFlow:g,allIntegURL:x,conf:s,navigate:p,edit:1,setIsLoading:n,setSnackbar:a}),disabled:!1,isLoading:c,dataConf:s,setDataConf:t,formFields:r}),e.jsx("br",{})]})}export{L as default};
