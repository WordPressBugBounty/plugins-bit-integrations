import{u,o as j,e as m,f as S,r as c,j as t}from"./main-920.js";import{f as h,$ as b,g as C,_ as l}from"./bi.247.0.js";import{S as I}from"./bi.970.13.js";import"./bi.761.437.js";import{S as _,I as w,s as k}from"./bi.658.3.js";import{S as v}from"./bi.123.731.js";import{h as N}from"./bi.477.732.js";import"./bi.140.9.js";import"./bi.941.11.js";import"./bi.706.14.js";function q({allIntegURL:d}){const f=u(),{formID:p}=j(),[s,a]=m(h),[o,y]=m(b),i=S(C),[n,r]=c.useState(!1),[x,e]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(I,{snack:x,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:g=>N(g,s,a),name:"name",value:s.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(_,{entity:o.triggered_entity,setSnackbar:e}),t.jsx(v,{formID:p,formFields:i,slackConf:s,setSlackConf:a,isLoading:n,setIsLoading:r,setSnackbar:e}),t.jsx(w,{edit:!0,saveConfig:()=>k({flow:o,allIntegURL:d,conf:s,navigate:f,edit:1,setIsLoading:r,setSnackbar:e}),disabled:s.channel_id===""||n,isLoading:n,dataConf:s,setDataConf:a,formFields:i}),t.jsx("br",{})]})}export{q as default};