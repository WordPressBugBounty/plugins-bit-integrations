import{o as x,r as i,e as a,f as g,j as s}from"./main-441.js";import{$ as j,g as k,f as b}from"./bi.452.0.js";import{S as u}from"./bi.239.13.js";import{f as w,E as h,s as E}from"./bi.73.3.js";import"./bi.141.437.js";import S from"./bi.863.184.js";import{W}from"./bi.991.712.js";import"./bi.866.11.js";import"./bi.663.9.js";import"./bi.655.14.js";import"./bi.766.697.js";function D({allIntegURL:r}){const{formID:n}=x(),[m,o]=i.useState({show:!1}),[f,p]=i.useState(!1),[t,c]=a(j),d=g(k),[e,l]=a(b);return s.jsxs("div",{style:{width:900},children:[s.jsx(u,{snack:m,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:o}):s.jsx(h,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(S,{formID:n,formFields:d,webHooks:e,setWebHooks:l,setSnackbar:o})}),s.jsx(W,{edit:!0,saveConfig:()=>E({flow:t,setFlow:c,allIntegURL:r,conf:e,edit:1,setIsLoading:p,setSnackbar:o}),isLoading:f}),s.jsx("br",{})]})}export{D as default};
