import{o as x,r as a,e as n,f as u,j as o}from"./main-814.js";import{$ as g,g as j,f as k}from"./bi.317.0.js";import{S as b}from"./bi.610.13.js";import{g as w,E as h,s as E}from"./bi.59.3.js";import"./bi.8.440.js";import S from"./bi.787.185.js";import{W}from"./bi.219.722.js";import"./bi.672.11.js";import"./bi.765.9.js";import"./bi.478.14.js";import"./bi.739.707.js";function U({allIntegURL:r}){const{formID:i}=x(),[m,s]=a.useState({show:!1}),[c,f]=a.useState(!1),[t,d]=n(g),p=u(j),[e,l]=n(k);return o.jsxs("div",{style:{width:900},children:[o.jsx(b,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(w,{setSnackbar:s}):o.jsx(h,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(S,{formID:i,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:s})}),o.jsx(W,{edit:!0,saveConfig:()=>E({flow:t,setFlow:d,allIntegURL:r,conf:e,edit:1,setIsLoading:f,setSnackbar:s}),isLoading:c}),o.jsx("br",{})]})}export{U as default};
