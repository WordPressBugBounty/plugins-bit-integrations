import{o as x,r as i,e as n,f as g,j as o}from"./main-425.js";import{$ as j,g as k,f as b}from"./bi.107.0.js";import{S as u}from"./bi.273.13.js";import{g as w,E as I,s as h}from"./bi.25.3.js";import"./bi.900.437.js";import E from"./bi.283.184.js";import{W as S}from"./bi.579.714.js";import"./bi.563.11.js";import"./bi.814.9.js";import"./bi.783.14.js";import"./bi.810.699.js";function K({allIntegURL:r}){const{formID:a}=x(),[m,s]=i.useState({show:!1}),[c,f]=i.useState(!1),[t,d]=n(j),p=g(k),[e,l]=n(b);return o.jsxs("div",{style:{width:900},children:[o.jsx(u,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(w,{setSnackbar:s}):o.jsx(I,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(E,{formID:a,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:s})}),o.jsx(S,{edit:!0,saveConfig:()=>h({flow:t,setFlow:d,allIntegURL:r,conf:e,edit:1,setIsLoading:f,setSnackbar:s}),isLoading:c}),o.jsx("br",{})]})}export{K as default};
