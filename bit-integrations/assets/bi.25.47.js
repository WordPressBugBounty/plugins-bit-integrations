import{u as g,o as u,r as i,e as a,f as j,j as t}from"./main-404.js";import{$ as w,g as S,f as k}from"./bi.51.0.js";import{S as b}from"./bi.896.13.js";import"./bi.613.437.js";import{S as v,s as I}from"./bi.488.3.js";import F from"./bi.337.184.js";import{W as _}from"./bi.938.713.js";import"./bi.964.9.js";import"./bi.484.11.js";import"./bi.565.14.js";import"./bi.250.698.js";function D({allIntegURL:r}){const n=g(),{id:h,formID:m}=u(),[f,c]=i.useState(!1),[o,d]=a(w),p=j(S),[e,l]=a(k),[x,s]=i.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(b,{snack:x,setSnackbar:s}),t.jsx(v,{entity:o.triggered_entity,setSnackbar:s}),t.jsx("div",{className:"mt-3",children:t.jsx(F,{formID:m,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:s})}),t.jsx(_,{edit:!0,saveConfig:()=>I({flow:o,setFlow:d,allIntegURL:r,conf:e,navigate:n,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:f}),t.jsx("br",{})]})}export{D as default};