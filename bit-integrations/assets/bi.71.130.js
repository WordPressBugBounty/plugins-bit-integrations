import{u as S,l as b,e as l,r as i,i as _,j as e}from"./main-579.js";import{$ as w,g as C,h as I,d as v,_ as o,i as y,I as F,W as D,s as N}from"./bi.919.15.js";import{h as R,c}from"./bi.264.854.js";import{S as k}from"./bi.571.855.js";function A({allIntegURL:m}){const f=S();b();const[a,E]=l(w),[s,n]=l(C),[g,u]=i.useState(!1),[p,r]=i.useState({}),[x,t]=i.useState({show:!1}),d=_(I),h=()=>{if(!c(s)){t({show:!0,msg:o("Please map mandatory fields","bit-integrations")});return}if(!s.selectedRole){D.error("Please select a Role");return}N({flow:a,allIntegURL:m,conf:s,navigate:f,edit:1,setLoading:r,setSnackbar:t})};return e.jsxs("div",{style:{width:900},children:[e.jsx(v,{snack:x,setSnackbar:t}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:o("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>R(j,s,n),name:"name",value:s.name,type:"text",placeholder:o("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(y,{entity:a.triggered_entity,setSnackbar:t}),e.jsx(k,{formID:a.triggered_entity_id,formFields:d,suiteDashConf:s,setSuiteDashConf:n,loading:p,setLoading:r,setIsLoading:u,setSnackbar:t}),e.jsx(F,{edit:!0,saveConfig:h,disabled:!c(s),isLoading:g,dataConf:s,setDataConf:n,formFields:d}),e.jsx("br",{})]})}export{A as default};
