import{l as u,r as a,e as i,i as g,j as s}from"./main-80.js";import{$ as j,h as k,g as p,d as W,B as b,E as w,s as h}from"./bi.433.0.js";import E from"./bi.342.168.js";import{W as F}from"./bi.64.686.js";import"./bi.29.687.js";function P({allIntegURL:r}){const{formID:n}=u(),[m,o]=a.useState({show:!1}),[c,d]=a.useState(!1),[t,f]=i(j),l=g(k),[e,x]=i(p);return s.jsxs("div",{style:{width:900},children:[s.jsx(W,{snack:m,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(b,{setSnackbar:o}):s.jsx(w,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(E,{formID:n,formFields:l,webHooks:e,setWebHooks:x,setSnackbar:o})}),s.jsx(F,{edit:!0,saveConfig:()=>h({flow:t,setFlow:f,allIntegURL:r,conf:e,edit:1,setIsLoading:d,setSnackbar:o}),isLoading:c}),s.jsx("br",{})]})}export{P as default};
