import{u as p,l as u,r as a,e as i,i as j,j as s}from"./main-80.js";import{$ as w,h as k,g as b,d as v,i as y,s as I}from"./bi.433.0.js";import S from"./bi.342.168.js";import{W as h}from"./bi.64.686.js";import"./bi.29.687.js";function $({allIntegURL:n}){const r=p(),{id:_,formID:c}=u(),[d,l]=a.useState(!1),[e,m]=i(w),f=j(k),[o,g]=i(b),[x,t]=a.useState({show:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(v,{snack:x,setSnackbar:t}),s.jsx(y,{entity:e.triggered_entity,setSnackbar:t}),s.jsx("div",{className:"mt-3",children:s.jsx(S,{formID:c,formFields:f,webHooks:o,setWebHooks:g,setSnackbar:t})}),s.jsx(h,{edit:!0,saveConfig:()=>I({flow:e,setFlow:m,allIntegURL:n,conf:o,navigate:r,edit:1,setIsLoading:l,setSnackbar:t}),isLoading:d}),s.jsx("br",{})]})}export{$ as default};
