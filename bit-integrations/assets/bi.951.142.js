import{o as x,r as i,e as r,f as k,j as o}from"./main-494.js";import{$ as b,g,f as W}from"./bi.185.0.js";import{S as j}from"./bi.107.13.js";import{g as h,E as w,s as u}from"./bi.104.3.js";import"./bi.23.437.js";import E from"./bi.296.184.js";import{W as S}from"./bi.336.714.js";import"./bi.617.11.js";import"./bi.170.9.js";import"./bi.890.14.js";import"./bi.776.699.js";function A({allIntegURL:a}){const{formID:n}=x(),[m,s]=i.useState({show:!1}),[f,c]=i.useState(!1),[t,d]=r(b),p=k(g),[e,l]=r(W);return o.jsxs("div",{style:{width:900},children:[o.jsx(j,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(h,{setSnackbar:s}):o.jsx(w,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(E,{formID:n,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:s})}),o.jsx(S,{edit:!0,saveConfig:()=>u({flow:t,setFlow:d,allIntegURL:a,conf:e,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:f}),o.jsx("br",{})]})}export{A as default};