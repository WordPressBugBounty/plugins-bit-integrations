import{u as x,o as u,r as i,e as a,f as j,j as t}from"./main-288.js";import{$ as w,g as S,f as k}from"./bi.4.0.js";import{S as b}from"./bi.470.13.js";import"./bi.197.434.js";import{S as v,s as y}from"./bi.826.3.js";import I from"./bi.142.183.js";import{W as _}from"./bi.972.705.js";import"./bi.627.9.js";import"./bi.147.11.js";import"./bi.223.14.js";import"./bi.684.706.js";function M({allIntegURL:r}){const n=x(),{id:h,formID:m}=u(),[c,f]=i.useState(!1),[o,d]=a(w),l=j(S),[e,p]=a(k),[g,s]=i.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(b,{snack:g,setSnackbar:s}),t.jsx(v,{entity:o.triggered_entity,setSnackbar:s}),t.jsx("div",{className:"mt-3",children:t.jsx(I,{formID:m,formFields:l,webHooks:e,setWebHooks:p,setSnackbar:s})}),t.jsx(_,{edit:!0,saveConfig:()=>y({flow:o,setFlow:d,allIntegURL:r,conf:e,navigate:n,edit:1,setIsLoading:f,setSnackbar:s}),isLoading:c}),t.jsx("br",{})]})}export{M as default};
