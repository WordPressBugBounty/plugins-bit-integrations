import{o as x,r,e as i,f as g,j as s}from"./main-288.js";import{$ as j,g as k,f as b}from"./bi.4.0.js";import{S as u}from"./bi.470.13.js";import{f as w,E as I,s as S}from"./bi.826.3.js";import"./bi.197.434.js";import h from"./bi.142.183.js";import{W as E}from"./bi.972.705.js";import"./bi.147.11.js";import"./bi.627.9.js";import"./bi.223.14.js";import"./bi.684.706.js";function A({allIntegURL:a}){const{formID:n}=x(),[m,o]=r.useState({show:!1}),[f,c]=r.useState(!1),[e,d]=i(j),p=g(k),[t,l]=i(b);return s.jsxs("div",{style:{width:900},children:[s.jsx(u,{snack:m,setSnackbar:o}),e.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:o}):s.jsx(I,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(h,{formID:n,formFields:p,webHooks:t,setWebHooks:l,setSnackbar:o})}),s.jsx(E,{edit:!0,saveConfig:()=>S({flow:e,setFlow:d,allIntegURL:a,conf:t,edit:1,setIsLoading:c,setSnackbar:o}),isLoading:f}),s.jsx("br",{})]})}export{A as default};
