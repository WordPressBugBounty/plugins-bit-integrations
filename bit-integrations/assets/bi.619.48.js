import{o as b,r as i,e as a,f as x,j as o}from"./main-246.js";import{$ as j,f as k,e as g}from"./bi.560.0.js";import{S as u}from"./bi.222.13.js";import{E as w,k as h,s as E}from"./bi.545.3.js";import"./bi.675.443.js";import S from"./bi.662.186.js";import{W}from"./bi.980.758.js";import"./bi.975.11.js";import"./bi.947.9.js";import"./bi.557.14.js";import"./bi.430.759.js";function A({allIntegURL:r}){const{formID:n}=b(),[m,s]=i.useState({show:!1}),[f,c]=i.useState(!1),[t,d]=a(j),l=x(k),[e,p]=a(g);return o.jsxs("div",{style:{width:900},children:[o.jsx(u,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(w,{setSnackbar:s}):o.jsx(h,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(S,{formID:n,formFields:l,webHooks:e,setWebHooks:p,setSnackbar:s})}),o.jsx(W,{edit:!0,saveConfig:()=>E({flow:t,setFlow:d,allIntegURL:r,conf:e,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:f}),o.jsx("br",{})]})}export{A as default};
