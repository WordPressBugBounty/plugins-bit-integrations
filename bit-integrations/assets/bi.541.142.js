import{o as x,r as i,e as r,f as k,j as o}from"./main-441.js";import{$ as b,g as W,f as g}from"./bi.452.0.js";import{S as j}from"./bi.239.13.js";import{f as h,E as w,s as u}from"./bi.73.3.js";import"./bi.141.437.js";import E from"./bi.863.184.js";import{W as S}from"./bi.991.712.js";import"./bi.866.11.js";import"./bi.663.9.js";import"./bi.655.14.js";import"./bi.766.697.js";function A({allIntegURL:a}){const{formID:n}=x(),[m,s]=i.useState({show:!1}),[f,c]=i.useState(!1),[t,d]=r(b),p=k(W),[e,l]=r(g);return o.jsxs("div",{style:{width:900},children:[o.jsx(j,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(h,{setSnackbar:s}):o.jsx(w,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(E,{formID:n,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:s})}),o.jsx(S,{edit:!0,saveConfig:()=>u({flow:t,setFlow:d,allIntegURL:a,conf:e,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:f}),o.jsx("br",{})]})}export{A as default};
