import{o as x,r as i,e as r,f as k,j as o}from"./main-288.js";import{$ as b,g as W,f as g}from"./bi.4.0.js";import{S as j}from"./bi.470.13.js";import{f as h,E as w,s as u}from"./bi.826.3.js";import"./bi.197.434.js";import E from"./bi.142.183.js";import{W as S}from"./bi.972.705.js";import"./bi.147.11.js";import"./bi.627.9.js";import"./bi.223.14.js";import"./bi.684.706.js";function A({allIntegURL:a}){const{formID:n}=x(),[m,s]=i.useState({show:!1}),[f,c]=i.useState(!1),[t,d]=r(b),p=k(W),[e,l]=r(g);return o.jsxs("div",{style:{width:900},children:[o.jsx(j,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(h,{setSnackbar:s}):o.jsx(w,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(E,{formID:n,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:s})}),o.jsx(S,{edit:!0,saveConfig:()=>u({flow:t,setFlow:d,allIntegURL:a,conf:e,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:f}),o.jsx("br",{})]})}export{A as default};
