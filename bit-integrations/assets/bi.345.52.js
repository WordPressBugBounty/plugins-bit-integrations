import{o as x,r as i,e as a,f as g,j as s}from"./main-623.js";import{$ as j,g as k,f as b}from"./bi.422.0.js";import{S as u}from"./bi.957.13.js";import{E as w,k as h,s as E}from"./bi.757.3.js";import"./bi.1.443.js";import S from"./bi.987.186.js";import{W}from"./bi.824.758.js";import"./bi.727.11.js";import"./bi.331.9.js";import"./bi.218.14.js";import"./bi.219.759.js";function D({allIntegURL:r}){const{formID:n}=x(),[m,o]=i.useState({show:!1}),[p,f]=i.useState(!1),[t,c]=a(j),d=g(k),[e,l]=a(b);return s.jsxs("div",{style:{width:900},children:[s.jsx(u,{snack:m,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:o}):s.jsx(h,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(S,{formID:n,formFields:d,webHooks:e,setWebHooks:l,setSnackbar:o})}),s.jsx(W,{edit:!0,saveConfig:()=>E({flow:t,setFlow:c,allIntegURL:r,conf:e,edit:1,setIsLoading:f,setSnackbar:o}),isLoading:p}),s.jsx("br",{})]})}export{D as default};
