import{o as x,r,e as i,f as g,j as s}from"./main-920.js";import{$ as j,g as k,f as b}from"./bi.247.0.js";import{S as u}from"./bi.970.13.js";import{g as w,E as I,s as S}from"./bi.658.3.js";import"./bi.761.437.js";import h from"./bi.110.184.js";import{W as E}from"./bi.559.713.js";import"./bi.941.11.js";import"./bi.140.9.js";import"./bi.706.14.js";import"./bi.306.698.js";function A({allIntegURL:a}){const{formID:n}=x(),[m,o]=r.useState({show:!1}),[f,c]=r.useState(!1),[e,d]=i(j),p=g(k),[t,l]=i(b);return s.jsxs("div",{style:{width:900},children:[s.jsx(u,{snack:m,setSnackbar:o}),e.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:o}):s.jsx(I,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(h,{formID:n,formFields:p,webHooks:t,setWebHooks:l,setSnackbar:o})}),s.jsx(E,{edit:!0,saveConfig:()=>S({flow:e,setFlow:d,allIntegURL:a,conf:t,edit:1,setIsLoading:c,setSnackbar:o}),isLoading:f}),s.jsx("br",{})]})}export{A as default};