import{l as u,r as a,e as i,i as g,j as s}from"./main-579.js";import{$ as h,h as j,g as k,d as p,B as b,E as w,s as v}from"./bi.919.15.js";import E from"./bi.91.182.js";import{W}from"./bi.949.696.js";import"./bi.367.697.js";function H({allIntegURL:r}){const{formID:n}=u(),[m,o]=a.useState({show:!1}),[c,d]=a.useState(!1),[t,f]=i(h),l=g(j),[e,x]=i(k);return s.jsxs("div",{style:{width:900},children:[s.jsx(p,{snack:m,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(b,{setSnackbar:o}):s.jsx(w,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(E,{formID:n,formFields:l,webHooks:e,setWebHooks:x,setSnackbar:o})}),s.jsx(W,{edit:!0,saveConfig:()=>v({flow:t,setFlow:f,allIntegURL:r,conf:e,edit:1,setIsLoading:d,setSnackbar:o}),isLoading:c}),s.jsx("br",{})]})}export{H as default};
