import{u as b,l as C,e as r,i as I,r as n,j as s}from"./main-650.js";import{g as _,$ as w,h as v,d as S,_ as d,i as D,I as N,s as y}from"./bi.541.15.js";import{h as F}from"./bi.336.842.js";import{D as E}from"./bi.773.843.js";import"./bi.619.660.js";import"./bi.119.661.js";function T({allIntegURL:l}){const c=b(),{id:L,formID:m}=C(),[t,e]=r(_),[i,f]=r(w),o=I(v),[p,g]=n.useState(!1),[u,a]=n.useState({show:!1}),[x,h]=n.useState({auth:!1,customFields:!1,accounts:!1,tags:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(S,{snack:u,setSnackbar:a}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>F(j,t,e),name:"name",value:t.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx(D,{entity:i.triggered_entity,setSnackbar:a}),s.jsx(E,{formID:m,formFields:o,dripConf:t,setDripConf:e,loading:x,setLoading:h}),s.jsx(N,{edit:!0,saveConfig:()=>y({flow:i,setFlow:f,allIntegURL:l,navigate:c,conf:t,edit:1,setIsLoading:g,setSnackbar:a}),disabled:t.field_map.length<1,isLoading:p,dataConf:t,setDataConf:e,formFields:o}),s.jsx("br",{})]})}export{T as default};
