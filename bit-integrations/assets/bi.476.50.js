import{o as x,r as i,e as r,f as g,j as s}from"./main-494.js";import{$ as S,g as j,f as k}from"./bi.185.0.js";import{S as b}from"./bi.107.13.js";import{g as u,E as w,s as h}from"./bi.104.3.js";import"./bi.23.437.js";import E from"./bi.296.184.js";import{W}from"./bi.336.714.js";import"./bi.617.11.js";import"./bi.170.9.js";import"./bi.890.14.js";import"./bi.776.699.js";function D({allIntegURL:a}){const{formID:n}=x(),[m,o]=i.useState({show:!1}),[c,d]=i.useState(!1),[t,f]=r(S),p=g(j),[e,l]=r(k);return s.jsxs("div",{style:{width:900},children:[s.jsx(b,{snack:m,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(u,{setSnackbar:o}):s.jsx(w,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(E,{formID:n,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:o})}),s.jsx(W,{edit:!0,saveConfig:()=>h({flow:t,setFlow:f,allIntegURL:a,conf:e,edit:1,setIsLoading:d,setSnackbar:o}),isLoading:c}),s.jsx("br",{})]})}export{D as default};
