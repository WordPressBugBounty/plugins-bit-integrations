import{u as g,l as u,r as a,e as i,i as j,j as s}from"./main-579.js";import{$ as w,h as k,g as b,d as v,i as S,s as h}from"./bi.919.15.js";import _ from"./bi.91.182.js";import{W as C}from"./bi.949.696.js";import"./bi.367.697.js";function y({allIntegURL:n}){const r=g(),{id:E,formID:c}=u(),[d,m]=a.useState(!1),[t,f]=i(w),l=j(k),[o,p]=i(b),[x,e]=a.useState({show:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(v,{snack:x,setSnackbar:e}),s.jsx(S,{entity:t.triggered_entity,setSnackbar:e}),s.jsx("div",{className:"mt-3",children:s.jsx(_,{formID:c,formFields:l,webHooks:o,setWebHooks:p,setSnackbar:e})}),s.jsx(C,{edit:!0,saveConfig:()=>h({flow:t,setFlow:f,allIntegURL:n,conf:o,navigate:r,edit:1,setIsLoading:m,setSnackbar:e}),isLoading:d}),s.jsx("br",{})]})}export{y as default};