import{u as j,o as h,e as d,f as b,r as c,j as s}from"./main-920.js";import{f as I,$ as C,g as w,_ as f}from"./bi.247.0.js";import{S}from"./bi.970.13.js";import"./bi.761.437.js";import{S as _,I as v,s as N}from"./bi.658.3.js";import{h as l,G as y}from"./bi.817.780.js";import"./bi.140.9.js";import"./bi.941.11.js";import"./bi.706.14.js";import"./bi.722.674.js";import"./bi.149.675.js";function q({allIntegURL:p}){const x=j(),{formID:g}=h(),[t,e]=d(I),[i,P]=d(C),r=b(w),[n,m]=c.useState(!1),[u,a]=c.useState({show:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(S,{snack:u,setSnackbar:a}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:f("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>l(o,t,e),name:"name",value:t.name,type:"text",placeholder:f("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(_,{entity:i.triggered_entity,setSnackbar:a}),s.jsx(y,{formID:g,formFields:r,handleInput:o=>l(o,t,e),gamiPressConf:t,setGamiPressConf:e,isLoading:n,setIsLoading:m,setSnackbar:a}),s.jsx(v,{edit:!0,saveConfig:()=>N({flow:i,allIntegURL:p,conf:t,navigate:x,edit:1,setIsLoading:m,setSnackbar:a}),disabled:t.mainAction===""||n,isLoading:n,dataConf:t,setDataConf:e,formFields:r}),s.jsx("br",{})]})}export{q as default};