import{o as x,r as i,e as r,f as k,j as o}from"./main-263.js";import{$ as b,g as W,f as g}from"./bi.924.0.js";import{S as j}from"./bi.428.13.js";import{f as h,E as w,s as u}from"./bi.317.3.js";import"./bi.361.434.js";import E from"./bi.49.183.js";import{W as S}from"./bi.746.704.js";import"./bi.929.11.js";import"./bi.402.9.js";import"./bi.686.14.js";import"./bi.638.705.js";function A({allIntegURL:a}){const{formID:n}=x(),[m,s]=i.useState({show:!1}),[f,c]=i.useState(!1),[t,d]=r(b),p=k(W),[e,l]=r(g);return o.jsxs("div",{style:{width:900},children:[o.jsx(j,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(h,{setSnackbar:s}):o.jsx(w,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(E,{formID:n,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:s})}),o.jsx(S,{edit:!0,saveConfig:()=>u({flow:t,setFlow:d,allIntegURL:a,conf:e,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:f}),o.jsx("br",{})]})}export{A as default};
