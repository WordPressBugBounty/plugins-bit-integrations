import{l as u,r as a,e as n,i as g,j as s}from"./main-29.js";import{$ as j,h as k,g as p,d as b,B as w,E as h,s as E}from"./bi.860.15.js";import W from"./bi.932.182.js";import{W as y}from"./bi.756.697.js";import"./bi.22.698.js";function A({allIntegURL:i}){const{formID:r}=u(),[c,o]=a.useState({show:!1}),[m,d]=a.useState(!1),[t,f]=n(j),l=g(k),[e,x]=n(p);return s.jsxs("div",{style:{width:900},children:[s.jsx(b,{snack:c,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:o}):s.jsx(h,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(W,{formID:r,formFields:l,webHooks:e,setWebHooks:x,setSnackbar:o})}),s.jsx(y,{edit:!0,saveConfig:()=>E({flow:t,setFlow:f,allIntegURL:i,conf:e,edit:1,setIsLoading:d,setSnackbar:o}),isLoading:m}),s.jsx("br",{})]})}export{A as default};
