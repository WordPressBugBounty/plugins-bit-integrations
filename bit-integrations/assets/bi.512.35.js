import{u as w,l as p,e as a,i as u,r as i,j as s}from"./main-650.js";import{g as j,$ as h,h as k,d as F,i as b,s as v}from"./bi.541.15.js";import S from"./bi.343.182.js";import{W as _}from"./bi.160.696.js";import"./bi.912.697.js";function y({allIntegURL:n}){const r=w(),{id:C,formID:c}=p(),[t,d]=a(j),[e,l]=a(h),m=u(k),[f,o]=i.useState({show:!1}),[x,g]=i.useState(!1);return s.jsxs("div",{style:{width:900},children:[s.jsx(F,{snack:f,setSnackbar:o}),s.jsx(b,{entity:e.triggered_entity,setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(S,{formID:c,formFields:m,webHooks:t,setWebHooks:d,setSnackbar:o})}),s.jsx(_,{edit:!0,saveConfig:()=>v({flow:e,setFlow:l,allIntegURL:n,conf:t,navigate:r,edit:1,setIsLoading:g,setSnackbar:o}),isLoading:x}),s.jsx("br",{})]})}export{y as default};
