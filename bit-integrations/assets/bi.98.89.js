import{u as h,o as j,e as d,f as I,r as c,j as t}from"./main-270.js";import{f as v,$ as w,g as C,_ as p}from"./bi.340.0.js";import{S}from"./bi.218.13.js";import"./bi.88.440.js";import{S as _,I as y,s as M}from"./bi.155.3.js";import{M as N}from"./bi.396.820.js";import{h as f}from"./bi.884.821.js";import"./bi.724.9.js";import"./bi.209.11.js";import"./bi.117.14.js";import"./bi.125.697.js";import"./bi.128.698.js";function G({allIntegURL:l}){const u=h(),{formID:x}=j(),[e,s]=d(v),[i,E]=d(w),r=I(C),[n,m]=c.useState(!1),[g,a]=c.useState({show:!1});function b(){switch(e.mainAction){case"1":return e.statusId===void 0||e.gatewayId===void 0||e.selectedMembership===void 0;default:return!1}}return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:g,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:p("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,s),name:"name",value:e.name,type:"text",placeholder:p("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(_,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(N,{formID:x,formFields:r,handleInput:o=>f(o,e,s),memberpressConf:e,setMemberpressConf:s,isLoading:n,setIsLoading:m,setSnackbar:a}),t.jsx(y,{edit:!0,saveConfig:()=>M({flow:i,allIntegURL:l,conf:e,navigate:u,edit:1,setIsLoading:m,setSnackbar:a}),disabled:!e.mainAction||n||b(),isLoading:n,dataConf:e,setDataConf:s,formFields:r}),t.jsx("br",{})]})}export{G as default};
