import{o as x,r as i,e as r,f as S,j as s}from"./main-263.js";import{$ as g,g as j,f as k}from"./bi.924.0.js";import{S as b}from"./bi.428.13.js";import{f as u,E as w,s as h}from"./bi.317.3.js";import"./bi.361.434.js";import E from"./bi.49.183.js";import{W}from"./bi.746.704.js";import"./bi.929.11.js";import"./bi.402.9.js";import"./bi.686.14.js";import"./bi.638.705.js";function D({allIntegURL:a}){const{formID:n}=x(),[m,o]=i.useState({show:!1}),[c,d]=i.useState(!1),[t,f]=r(g),p=S(j),[e,l]=r(k);return s.jsxs("div",{style:{width:900},children:[s.jsx(b,{snack:m,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(u,{setSnackbar:o}):s.jsx(w,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(E,{formID:n,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:o})}),s.jsx(W,{edit:!0,saveConfig:()=>h({flow:t,setFlow:f,allIntegURL:a,conf:e,edit:1,setIsLoading:d,setSnackbar:o}),isLoading:c}),s.jsx("br",{})]})}export{D as default};
