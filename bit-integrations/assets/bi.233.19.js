import{u as C,o as b,e as l,r as c,f as I,j as s}from"./main-270.js";import{f as w,$ as _,g as S,_ as r}from"./bi.340.0.js";import{S as v}from"./bi.218.13.js";import"./bi.88.440.js";import{S as y,I as N,s as F}from"./bi.155.3.js";import{h as f,c as k}from"./bi.517.706.js";import{Z as E}from"./bi.163.707.js";import"./bi.724.9.js";import"./bi.209.11.js";import"./bi.117.14.js";import"./bi.125.697.js";import"./bi.128.698.js";function H({allIntegURL:g}){const x=C(),{id:$,formID:n}=b(),[t,e]=l(w),[m,u]=l(_),[d,o]=c.useState(!1),[h,a]=c.useState({show:!1}),p=I(S),j=()=>{if(!k(t)){a({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}F({flow:m,setFlow:u,allIntegURL:g,conf:t,navigate:x,edit:1,setIsLoading:o,setSnackbar:a})};return s.jsxs("div",{style:{width:900},children:[s.jsx(v,{snack:h,setSnackbar:a}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-100 d-in-b",children:r("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-7",onChange:i=>f(i,n,t,e),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(y,{entity:m.triggered_entity,setSnackbar:a}),s.jsx(E,{formID:n,formFields:p,handleInput:i=>f(i,n,t,e,o,a),campaignsConf:t,setCampaignsConf:e,isLoading:d,setIsLoading:o,setSnackbar:a}),s.jsx(N,{edit:!0,saveConfig:j,disabled:t.list===""||t.table===""||t.field_map.length<1,isLoading:d,dataConf:t,setDataConf:e,formFields:p})]})}export{H as default};
