import{o as x,r as i,e as r,f as g,j as s}from"./main-404.js";import{$ as S,g as j,f as k}from"./bi.51.0.js";import{S as b}from"./bi.896.13.js";import{g as u,E as w,s as h}from"./bi.488.3.js";import"./bi.613.437.js";import E from"./bi.337.184.js";import{W}from"./bi.938.713.js";import"./bi.484.11.js";import"./bi.964.9.js";import"./bi.565.14.js";import"./bi.250.698.js";function D({allIntegURL:a}){const{formID:n}=x(),[m,o]=i.useState({show:!1}),[c,d]=i.useState(!1),[t,f]=r(S),p=g(j),[e,l]=r(k);return s.jsxs("div",{style:{width:900},children:[s.jsx(b,{snack:m,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(u,{setSnackbar:o}):s.jsx(w,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(E,{formID:n,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:o})}),s.jsx(W,{edit:!0,saveConfig:()=>h({flow:t,setFlow:f,allIntegURL:a,conf:e,edit:1,setIsLoading:d,setSnackbar:o}),isLoading:c}),s.jsx("br",{})]})}export{D as default};