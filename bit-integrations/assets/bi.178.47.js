import{u as g,o as u,r as i,e as a,f as j,j as t}from"./main-425.js";import{$ as w,g as S,f as k}from"./bi.107.0.js";import{S as b}from"./bi.273.13.js";import"./bi.900.437.js";import{S as v,s as I}from"./bi.25.3.js";import F from"./bi.283.184.js";import{W as _}from"./bi.579.714.js";import"./bi.814.9.js";import"./bi.563.11.js";import"./bi.783.14.js";import"./bi.810.699.js";function D({allIntegURL:r}){const n=g(),{id:h,formID:m}=u(),[f,c]=i.useState(!1),[o,d]=a(w),p=j(S),[e,l]=a(k),[x,s]=i.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(b,{snack:x,setSnackbar:s}),t.jsx(v,{entity:o.triggered_entity,setSnackbar:s}),t.jsx("div",{className:"mt-3",children:t.jsx(F,{formID:m,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:s})}),t.jsx(_,{edit:!0,saveConfig:()=>I({flow:o,setFlow:d,allIntegURL:r,conf:e,navigate:n,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:f}),t.jsx("br",{})]})}export{D as default};
