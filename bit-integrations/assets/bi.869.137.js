import{o as x,r,e as i,f as g,j as s}from"./main-615.js";import{$ as j,g as k,f as b}from"./bi.394.0.js";import{S as u}from"./bi.700.13.js";import{f as w,E as I,s as S}from"./bi.819.3.js";import"./bi.991.437.js";import h from"./bi.252.184.js";import{W as E}from"./bi.776.712.js";import"./bi.405.11.js";import"./bi.179.9.js";import"./bi.1.14.js";import"./bi.560.697.js";function A({allIntegURL:a}){const{formID:n}=x(),[m,o]=r.useState({show:!1}),[f,c]=r.useState(!1),[e,d]=i(j),p=g(k),[t,l]=i(b);return s.jsxs("div",{style:{width:900},children:[s.jsx(u,{snack:m,setSnackbar:o}),e.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:o}):s.jsx(I,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(h,{formID:n,formFields:p,webHooks:t,setWebHooks:l,setSnackbar:o})}),s.jsx(E,{edit:!0,saveConfig:()=>S({flow:e,setFlow:d,allIntegURL:a,conf:t,edit:1,setIsLoading:c,setSnackbar:o}),isLoading:f}),s.jsx("br",{})]})}export{A as default};
