import{o as l,r,e as a,f as x,j as o}from"./main-34.js";import{$ as j,g as k,f as b}from"./bi.671.0.js";import{S as u}from"./bi.213.13.js";import{g as w,E as F,s as I}from"./bi.633.3.js";import"./bi.188.437.js";import v from"./bi.378.184.js";import{W as h}from"./bi.883.712.js";import"./bi.22.11.js";import"./bi.914.9.js";import"./bi.690.14.js";import"./bi.886.697.js";function D({allIntegURL:i}){const{formID:n}=l(),[m,s]=r.useState({show:!1}),[d,c]=r.useState(!1),[t,f]=a(j),p=x(k),[e,g]=a(b);return o.jsxs("div",{style:{width:900},children:[o.jsx(u,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(w,{setSnackbar:s}):o.jsx(F,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(v,{formID:n,formFields:p,webHooks:e,setWebHooks:g,setSnackbar:s})}),o.jsx(h,{edit:!0,saveConfig:()=>I({flow:t,setFlow:f,allIntegURL:i,conf:e,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:d}),o.jsx("br",{})]})}export{D as default};
