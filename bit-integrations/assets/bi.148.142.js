import{o as x,r as i,e as r,f as k,j as o}from"./main-247.js";import{$ as b,g as W,f as g}from"./bi.456.0.js";import{S as j}from"./bi.417.13.js";import{f as h,E as w,s as u}from"./bi.427.3.js";import"./bi.393.437.js";import E from"./bi.511.184.js";import{W as S}from"./bi.142.709.js";import"./bi.923.11.js";import"./bi.712.9.js";import"./bi.858.14.js";import"./bi.50.710.js";function A({allIntegURL:a}){const{formID:n}=x(),[m,s]=i.useState({show:!1}),[f,c]=i.useState(!1),[t,d]=r(b),p=k(W),[e,l]=r(g);return o.jsxs("div",{style:{width:900},children:[o.jsx(j,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(h,{setSnackbar:s}):o.jsx(w,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(E,{formID:n,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:s})}),o.jsx(S,{edit:!0,saveConfig:()=>u({flow:t,setFlow:d,allIntegURL:a,conf:e,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:f}),o.jsx("br",{})]})}export{A as default};