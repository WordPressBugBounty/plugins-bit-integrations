import{u as p,l as u,r as a,e as i,i as j,j as s}from"./main-692.js";import{$ as w,h as k,g as b,d as v,i as I,s as S}from"./bi.751.13.js";import h from"./bi.664.180.js";import{W as F}from"./bi.585.693.js";import"./bi.244.694.js";function $({allIntegURL:n}){const r=p(),{id:_,formID:c}=u(),[d,f]=a.useState(!1),[e,m]=i(w),l=j(k),[o,x]=i(b),[g,t]=a.useState({show:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(v,{snack:g,setSnackbar:t}),s.jsx(I,{entity:e.triggered_entity,setSnackbar:t}),s.jsx("div",{className:"mt-3",children:s.jsx(h,{formID:c,formFields:l,webHooks:o,setWebHooks:x,setSnackbar:t})}),s.jsx(F,{edit:!0,saveConfig:()=>S({flow:e,setFlow:m,allIntegURL:n,conf:o,navigate:r,edit:1,setIsLoading:f,setSnackbar:t}),isLoading:d}),s.jsx("br",{})]})}export{$ as default};
