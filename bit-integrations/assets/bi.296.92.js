import{u as b,l as u,e as c,i as j,r as m,j as e}from"./main-29.js";import{g as I,$ as C,h as P,d as v,_ as l,i as w,I as _,s as M}from"./bi.860.15.js";import{h as p,P as N}from"./bi.685.785.js";function $({allIntegURL:f}){const x=b(),{formID:g}=u(),[s,t]=c(I),[r,S]=c(C),d=j(P),[n,i]=m.useState(!1),[h,a]=m.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(v,{snack:h,setSnackbar:a}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>p(o,s,t),name:"name",value:s.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(w,{entity:r.triggered_entity,setSnackbar:a}),e.jsx(N,{formID:g,formFields:d,handleInput:o=>p(o,s,t,i),paidMembershipProConf:s,setPaidMembershipProConf:t,isLoading:n,setIsLoading:i,setSnackbar:a}),e.jsx(_,{edit:!0,saveConfig:()=>M({flow:r,allIntegURL:f,conf:s,navigate:x,edit:1,setIsLoading:i,setSnackbar:a}),disabled:!s.mainAction||n||s.selectedMembership===void 0,isLoading:n,dataConf:s,setDataConf:t,formFields:d}),e.jsx("br",{})]})}export{$ as default};
