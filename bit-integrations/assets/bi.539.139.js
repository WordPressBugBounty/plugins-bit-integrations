import{o as x,r,e as a,f as g,j as o}from"./main-586.js";import{$ as u,g as j,f as k}from"./bi.612.0.js";import{S as W}from"./bi.733.13.js";import{g as b,E as w,s as h}from"./bi.993.3.js";import"./bi.960.440.js";import E from"./bi.763.185.js";import{W as S}from"./bi.648.730.js";import"./bi.980.11.js";import"./bi.175.9.js";import"./bi.520.14.js";import"./bi.313.731.js";function L({allIntegURL:i}){const{formID:n}=x(),[m,s]=r.useState({show:!1}),[f,c]=r.useState(!1),[t,d]=a(u),p=g(j),[e,l]=a(k);return o.jsxs("div",{style:{width:900},children:[o.jsx(W,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(b,{setSnackbar:s}):o.jsx(w,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(E,{formID:n,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:s})}),o.jsx(S,{edit:!0,saveConfig:()=>h({flow:t,setFlow:d,allIntegURL:i,conf:e,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:f}),o.jsx("br",{})]})}export{L as default};
