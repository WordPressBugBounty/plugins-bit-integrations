import{u as g,o as u,r as i,e as a,f as j,j as s}from"./main-955.js";import{$ as w,g as S,f as k}from"./bi.223.0.js";import{S as b}from"./bi.951.13.js";import"./bi.326.431.js";import{S as v,s as _}from"./bi.864.3.js";import h from"./bi.107.182.js";import{W as C}from"./bi.651.699.js";import"./bi.696.9.js";import"./bi.300.11.js";import"./bi.283.14.js";import"./bi.687.700.js";function A({allIntegURL:r}){const n=g(),{id:E,formID:m}=u(),[c,f]=i.useState(!1),[t,p]=a(w),d=j(S),[e,l]=a(k),[x,o]=i.useState({show:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(b,{snack:x,setSnackbar:o}),s.jsx(v,{entity:t.triggered_entity,setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(h,{formID:m,formFields:d,webHooks:e,setWebHooks:l,setSnackbar:o})}),s.jsx(C,{edit:!0,saveConfig:()=>_({flow:t,setFlow:p,allIntegURL:r,conf:e,navigate:n,edit:1,setIsLoading:f,setSnackbar:o}),isLoading:c}),s.jsx("br",{})]})}export{A as default};