import{u as h,l as C,e as o,i as b,r as i,j as s}from"./main-165.js";import{g as w,$ as I,h as _,d as v,_ as r,i as N,I as S,s as y}from"./bi.312.95.js";import{h as F,c as P}from"./bi.387.869.js";import{P as k}from"./bi.302.870.js";function M({allIntegURL:d}){const l=h(),{id:c}=C(),[e,a]=o(w),[n,m]=o(I),f=b(_),[p,x]=i.useState(!1),[u,t]=i.useState({show:!1}),g=()=>{y({flow:n,setFlow:m,allIntegURL:d,conf:e,navigate:l,edit:1,setIsLoading:x,setSnackbar:t})};return s.jsxs("div",{style:{width:900},children:[s.jsx(v,{snack:u,setSnackbar:t}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>F(j,e,a),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(N,{entity:n.triggered_entity,setSnackbar:t}),s.jsx(k,{flowID:c,formFields:f,pCloudConf:e,setPCloudConf:a}),s.jsx(S,{edit:!0,saveConfig:g,disabled:!P(e),isLoading:p}),s.jsx("br",{})]})}export{M as default};
