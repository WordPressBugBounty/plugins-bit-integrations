import{u as b,o as g,e as n,f as I,r,j as s}from"./main-920.js";import{f as w,$ as _,g as S,_ as m}from"./bi.247.0.js";import{S as v}from"./bi.970.13.js";import"./bi.761.437.js";import{S as N,I as y,s as F}from"./bi.658.3.js";import{h as k,c as E}from"./bi.905.727.js";import{G}from"./bi.994.728.js";import"./bi.140.9.js";import"./bi.941.11.js";import"./bi.706.14.js";import"./bi.722.674.js";import"./bi.149.675.js";import"./bi.261.687.js";import"./bi.602.10.js";function J({allIntegURL:c}){const d=b(),{id:p}=g(),[t,e]=n(w),[i,l]=n(_),o=I(S),[f,x]=r.useState(!1),[u,a]=r.useState({show:!1}),j=()=>{F({flow:i,setFlow:l,allIntegURL:c,conf:t,navigate:d,edit:1,setIsLoading:x,setSnackbar:a})};return s.jsxs("div",{style:{width:900},className:"p-2",children:[s.jsx(v,{snack:u,setSnackbar:a}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:h=>k(h,t,e),name:"name",value:t.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(N,{entity:i.triggered_entity,setSnackbar:a}),s.jsx(G,{flowID:p,formFields:o,googleCalendarConf:t,setGoogleCalendarConf:e}),s.jsx(y,{edit:!0,saveConfig:j,disabled:!(t!=null&&t.calendarId)||!(t!=null&&t.timeZone)||!E(t==null?void 0:t.field_map),isLoading:f,dataConf:t,setDataConf:e,formFields:o}),s.jsx("br",{})]})}export{J as default};
