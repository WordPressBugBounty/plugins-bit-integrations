import{o as x,r as i,e as r,f as u,j as o}from"./main-247.js";import{$ as g,g as j,f as k}from"./bi.456.0.js";import{S as w}from"./bi.417.13.js";import{f as b,E as F,s as W}from"./bi.427.3.js";import"./bi.393.437.js";import h from"./bi.511.184.js";import{W as E}from"./bi.142.709.js";import"./bi.923.11.js";import"./bi.712.9.js";import"./bi.858.14.js";import"./bi.50.710.js";function A({allIntegURL:a}){const{formID:n}=x(),[m,s]=i.useState({show:!1}),[f,c]=i.useState(!1),[t,d]=r(g),p=u(j),[e,l]=r(k);return o.jsxs("div",{style:{width:900},children:[o.jsx(w,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(b,{setSnackbar:s}):o.jsx(F,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(h,{formID:n,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:s})}),o.jsx(E,{edit:!0,saveConfig:()=>W({flow:t,setFlow:d,allIntegURL:a,conf:e,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:f}),o.jsx("br",{})]})}export{A as default};
