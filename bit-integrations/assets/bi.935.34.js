import{u as p,l as u,e as a,i as j,r as i,j as s}from"./main-830.js";import{g as k,$ as w,h as b,d as v,i as S,s as h}from"./bi.597.15.js";import H from"./bi.69.182.js";import{W}from"./bi.703.696.js";import"./bi.910.697.js";function y({allIntegURL:n}){const r=p(),{id:_,formID:c}=u(),[t,d]=a(k),[e,m]=a(w),f=j(b),[l,o]=i.useState({show:!1}),[x,g]=i.useState(!1);return s.jsxs("div",{style:{width:900},children:[s.jsx(v,{snack:l,setSnackbar:o}),s.jsx(S,{entity:e.triggered_entity,setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(H,{formID:c,formFields:f,webHooks:t,setWebHooks:d,setSnackbar:o})}),s.jsx(W,{edit:!0,saveConfig:()=>h({flow:e,setFlow:m,allIntegURL:n,conf:t,navigate:r,edit:1,setIsLoading:g,setSnackbar:o}),isLoading:x}),s.jsx("br",{})]})}export{y as default};
