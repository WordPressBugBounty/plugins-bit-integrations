import{u as b,l as I,e as m,r as o,i as _,j as s}from"./main-165.js";import{$ as w,g as C,h as F,d as E,_ as r,i as v,I as y,s as S}from"./bi.312.95.js";import{h as c,c as f}from"./bi.351.871.js";import{E as N}from"./bi.25.872.js";import"./bi.953.732.js";import"./bi.422.733.js";function A({allIntegURL:p}){const u=b();I();const[i,O]=m(w),[t,a]=m(C),[g,k]=o.useState(!1),[x,l]=o.useState({auth:!1,tags:!1,customFields:!1,lists:!1,emailOctopusFields:!0}),[h,e]=o.useState({show:!1}),d=_(F),j=()=>{if(!f(t)){e({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}S({flow:i,allIntegURL:p,conf:t,navigate:u,edit:1,setLoading:l,setSnackbar:e})};return s.jsxs("div",{style:{width:900},children:[s.jsx(E,{snack:h,setSnackbar:e}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>c(n,t,a),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx(v,{entity:i.triggered_entity,setSnackbar:e}),s.jsx(N,{formID:i.triggered_entity_id,formFields:d,handleInput:n=>c(n,t,a),emailOctopusConf:t,setEmailOctopusConf:a,loading:x,setLoading:l,setSnackbar:e}),s.jsx(y,{edit:!0,saveConfig:j,disabled:!f(t),isLoading:g,dataConf:t,setDataConf:a,formFields:d}),s.jsx("br",{})]})}export{A as default};
