import{l as b,r as a,e as i,i as g,j as s}from"./main-692.js";import{$ as j,h as k,g as p,d as u,B as w,E as h,s as E}from"./bi.751.13.js";import W from"./bi.664.180.js";import{W as F}from"./bi.585.693.js";import"./bi.244.694.js";function $({allIntegURL:n}){const{formID:r}=b(),[c,o]=a.useState({show:!1}),[d,l]=a.useState(!1),[t,m]=i(j),f=g(k),[e,x]=i(p);return s.jsxs("div",{style:{width:900},children:[s.jsx(u,{snack:c,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:o}):s.jsx(h,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(W,{formID:r,formFields:f,webHooks:e,setWebHooks:x,setSnackbar:o})}),s.jsx(F,{edit:!0,saveConfig:()=>E({flow:t,setFlow:m,allIntegURL:n,conf:e,edit:1,setIsLoading:l,setSnackbar:o}),isLoading:d}),s.jsx("br",{})]})}export{$ as default};
