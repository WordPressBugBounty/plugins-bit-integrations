import{o as x,r as i,e as r,f as k,j as o}from"./main-246.js";import{$ as b,f as W,e as j}from"./bi.560.0.js";import{S as g}from"./bi.222.13.js";import{E as h,k as w,s as u}from"./bi.545.3.js";import"./bi.675.443.js";import E from"./bi.662.186.js";import{W as S}from"./bi.980.758.js";import"./bi.975.11.js";import"./bi.947.9.js";import"./bi.557.14.js";import"./bi.430.759.js";function A({allIntegURL:a}){const{formID:n}=x(),[m,s]=i.useState({show:!1}),[f,c]=i.useState(!1),[t,d]=r(b),p=k(W),[e,l]=r(j);return o.jsxs("div",{style:{width:900},children:[o.jsx(g,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(h,{setSnackbar:s}):o.jsx(w,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(E,{formID:n,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:s})}),o.jsx(S,{edit:!0,saveConfig:()=>u({flow:t,setFlow:d,allIntegURL:a,conf:e,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:f}),o.jsx("br",{})]})}export{A as default};
