import{o as l,r,e as i,f as x,j as s}from"./main-623.js";import{$ as u,g as j,f as k}from"./bi.422.0.js";import{S as b}from"./bi.957.13.js";import{E as w,k as S,s as h}from"./bi.757.3.js";import"./bi.1.443.js";import E from"./bi.987.186.js";import{W}from"./bi.824.758.js";import"./bi.727.11.js";import"./bi.331.9.js";import"./bi.218.14.js";import"./bi.219.759.js";function A({allIntegURL:a}){const{formID:n}=l(),[m,o]=r.useState({show:!1}),[f,c]=r.useState(!1),[e,d]=i(u),g=x(j),[t,p]=i(k);return s.jsxs("div",{style:{width:900},children:[s.jsx(b,{snack:m,setSnackbar:o}),e.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:o}):s.jsx(S,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(E,{formID:n,formFields:g,webHooks:t,setWebHooks:p,setSnackbar:o})}),s.jsx(W,{edit:!0,saveConfig:()=>h({flow:e,setFlow:d,allIntegURL:a,conf:t,edit:1,setIsLoading:c,setSnackbar:o}),isLoading:f}),s.jsx("br",{})]})}export{A as default};
