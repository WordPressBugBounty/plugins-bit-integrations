import{o as x,r,e as a,f as u,j as o}from"./main-794.js";import{$ as g,g as j,f as k}from"./bi.828.0.js";import{S as W}from"./bi.961.13.js";import{E as b,k as w,s as h}from"./bi.499.3.js";import"./bi.266.440.js";import E from"./bi.350.185.js";import{W as S}from"./bi.192.742.js";import"./bi.690.11.js";import"./bi.685.9.js";import"./bi.811.14.js";import"./bi.944.743.js";function L({allIntegURL:i}){const{formID:n}=x(),[m,s]=r.useState({show:!1}),[f,c]=r.useState(!1),[t,d]=a(g),p=u(j),[e,l]=a(k);return o.jsxs("div",{style:{width:900},children:[o.jsx(W,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(b,{setSnackbar:s}):o.jsx(w,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(E,{formID:n,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:s})}),o.jsx(S,{edit:!0,saveConfig:()=>h({flow:t,setFlow:d,allIntegURL:i,conf:e,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:f}),o.jsx("br",{})]})}export{L as default};
