import{o as l,r,e as i,f as x,j as o}from"./main-814.js";import{$ as j,g as k,f as b}from"./bi.317.0.js";import{S as u}from"./bi.610.13.js";import{g as w,E as I,s as h}from"./bi.59.3.js";import"./bi.8.440.js";import E from"./bi.787.185.js";import{W as S}from"./bi.219.722.js";import"./bi.672.11.js";import"./bi.765.9.js";import"./bi.478.14.js";import"./bi.739.707.js";function D({allIntegURL:a}){const{formID:n}=l(),[m,f]=r.useState(!1),[t,c]=i(j),d=x(k),[e,p]=i(b),[g,s]=r.useState({show:!1});return o.jsxs("div",{style:{width:900},children:[o.jsx(u,{snack:g,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(w,{setSnackbar:s}):o.jsx(I,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(E,{formID:n,formFields:d,webHooks:e,setWebHooks:p,setSnackbar:s})}),o.jsx(S,{edit:!0,saveConfig:()=>h({flow:t,setFlow:c,allIntegURL:a,conf:e,edit:1,setIsLoading:f,setSnackbar:s}),isLoading:m}),o.jsx("br",{})]})}export{D as default};
