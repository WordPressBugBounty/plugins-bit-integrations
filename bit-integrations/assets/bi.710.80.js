import{u,o as j,e as m,f as h,r as d,j as s}from"./main-263.js";import{f as I,$ as b,g as _,_ as c}from"./bi.924.0.js";import{S as v}from"./bi.428.13.js";import"./bi.361.434.js";import{S as w,I as S,s as C}from"./bi.317.3.js";import{K as E}from"./bi.559.771.js";import{h as N,c as y}from"./bi.960.772.js";import"./bi.402.9.js";import"./bi.929.11.js";import"./bi.686.14.js";import"./bi.885.668.js";import"./bi.169.669.js";function B({allIntegURL:l}){const p=u(),{formID:f}=j(),[t,a]=m(I),[o,F]=m(b),n=h(_),[i,r]=d.useState(!1),[x,e]=d.useState({show:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(v,{snack:x,setSnackbar:e}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:g=>N(g,t,a),name:"name",value:t.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(w,{entity:o.triggered_entity,setSnackbar:e}),s.jsx(E,{formID:f,formFields:n,kirimEmailConf:t,setKirimEmailConf:a,isLoading:i,setIsLoading:r,setSnackbar:e}),s.jsx(S,{edit:!0,saveConfig:()=>C({flow:o,allIntegURL:l,conf:t,navigate:p,edit:1,setIsLoading:r,setSnackbar:e}),disabled:!y(t==null?void 0:t.field_map)||t.mainAction===""||i||t.mainAction==="1"&&(t.listId===""||t.listId===void 0),isLoading:i,dataConf:t,setDataConf:a,formFields:n}),s.jsx("br",{})]})}export{B as default};