import{u,l as j,e as c,i as h,r as l,j as s}from"./main-29.js";import{g as b,$ as S,h as C,d as I,_ as d,i as _,I as w,s as k}from"./bi.860.15.js";import{S as v}from"./bi.156.717.js";import{h as N}from"./bi.872.718.js";/* empty css          */function D({allIntegURL:m}){const f=u(),{formID:x}=j(),[t,a]=c(b),[o,y]=c(S),i=h(C),[n,r]=l.useState(!1),[g,e]=l.useState({show:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(I,{snack:g,setSnackbar:e}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:p=>N(p,t,a),name:"name",value:t.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(_,{entity:o.triggered_entity,setSnackbar:e}),s.jsx(v,{formID:x,formFields:i,slackConf:t,setSlackConf:a,isLoading:n,setIsLoading:r,setSnackbar:e}),s.jsx(w,{edit:!0,saveConfig:()=>k({flow:o,allIntegURL:m,conf:t,navigate:f,edit:1,setIsLoading:r,setSnackbar:e}),disabled:t.channel_id===""||n,isLoading:n,dataConf:t,setDataConf:a,formFields:i}),s.jsx("br",{})]})}export{D as default};
