import{o as x,r as i,e as a,f as g,j as s}from"./main-34.js";import{$ as j,g as k,f as b}from"./bi.671.0.js";import{S as u}from"./bi.213.13.js";import{g as w,E as h,s as E}from"./bi.633.3.js";import"./bi.188.437.js";import S from"./bi.378.184.js";import{W}from"./bi.883.712.js";import"./bi.22.11.js";import"./bi.914.9.js";import"./bi.690.14.js";import"./bi.886.697.js";function D({allIntegURL:r}){const{formID:n}=x(),[m,o]=i.useState({show:!1}),[p,f]=i.useState(!1),[t,c]=a(j),d=g(k),[e,l]=a(b);return s.jsxs("div",{style:{width:900},children:[s.jsx(u,{snack:m,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:o}):s.jsx(h,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(S,{formID:n,formFields:d,webHooks:e,setWebHooks:l,setSnackbar:o})}),s.jsx(W,{edit:!0,saveConfig:()=>E({flow:t,setFlow:c,allIntegURL:r,conf:e,edit:1,setIsLoading:f,setSnackbar:o}),isLoading:p}),s.jsx("br",{})]})}export{D as default};