import{l as x,r,e as i,i as u,j as s}from"./main-692.js";import{$ as j,h as k,g as p,d as b,B as w,E as h,s as S}from"./bi.751.13.js";import E from"./bi.664.180.js";import{W}from"./bi.585.693.js";import"./bi.244.694.js";function T({allIntegURL:a}){const{formID:n}=x(),[c,e]=r.useState({show:!1}),[d,m]=r.useState(!1),[o,f]=i(j),g=u(k),[t,l]=i(p);return s.jsxs("div",{style:{width:900},children:[s.jsx(b,{snack:c,setSnackbar:e}),o.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:e}):s.jsx(h,{setSnackbar:e}),s.jsx("div",{className:"mt-3",children:s.jsx(E,{formID:n,formFields:g,webHooks:t,setWebHooks:l,setSnackbar:e})}),s.jsx(W,{edit:!0,saveConfig:()=>S({flow:o,setFlow:f,allIntegURL:a,conf:t,edit:1,setIsLoading:m,setSnackbar:e}),isLoading:d}),s.jsx("br",{})]})}export{T as default};
