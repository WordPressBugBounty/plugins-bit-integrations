import{o as x,r as a,e as i,f as b,j as o}from"./main-586.js";import{$ as g,g as j,f as k}from"./bi.612.0.js";import{S as u}from"./bi.733.13.js";import{g as w,E as h,s as E}from"./bi.993.3.js";import"./bi.960.440.js";import S from"./bi.763.185.js";import{W}from"./bi.648.730.js";import"./bi.980.11.js";import"./bi.175.9.js";import"./bi.520.14.js";import"./bi.313.731.js";function D({allIntegURL:r}){const{formID:n}=x(),[m,s]=a.useState({show:!1}),[f,c]=a.useState(!1),[t,d]=i(g),l=b(j),[e,p]=i(k);return o.jsxs("div",{style:{width:900},children:[o.jsx(u,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(w,{setSnackbar:s}):o.jsx(h,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(S,{formID:n,formFields:l,webHooks:e,setWebHooks:p,setSnackbar:s})}),o.jsx(W,{edit:!0,saveConfig:()=>E({flow:t,setFlow:d,allIntegURL:r,conf:e,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:f}),o.jsx("br",{})]})}export{D as default};
