import{l as w,r as a,e as i,i as g,j as s}from"./main-650.js";import{$ as j,h as k,g as p,d as b,B as u,E as h,s as F}from"./bi.541.15.js";import E from"./bi.343.182.js";import{W}from"./bi.160.696.js";import"./bi.912.697.js";function M({allIntegURL:n}){const{formID:r}=w(),[c,o]=a.useState({show:!1}),[d,l]=a.useState(!1),[t,f]=i(j),m=g(k),[e,x]=i(p);return s.jsxs("div",{style:{width:900},children:[s.jsx(b,{snack:c,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(u,{setSnackbar:o}):s.jsx(h,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(E,{formID:r,formFields:m,webHooks:e,setWebHooks:x,setSnackbar:o})}),s.jsx(W,{edit:!0,saveConfig:()=>F({flow:t,setFlow:f,allIntegURL:n,conf:e,edit:1,setIsLoading:l,setSnackbar:o}),isLoading:d}),s.jsx("br",{})]})}export{M as default};
