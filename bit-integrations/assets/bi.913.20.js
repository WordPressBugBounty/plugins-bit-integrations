import{u as _,o as I,e as l,r as m,f as w,j as e}from"./main-777.js";import{f as S,$ as y,g as v,_ as d}from"./bi.157.0.js";import{S as N}from"./bi.309.13.js";import"./bi.463.440.js";import{S as F,I as R,s as k}from"./bi.644.3.js";import{h as f,c as E}from"./bi.459.693.js";import{Z as M}from"./bi.839.694.js";import"./bi.681.9.js";import"./bi.677.11.js";import"./bi.181.14.js";import"./bi.31.695.js";import"./bi.754.696.js";import"./bi.747.10.js";import"./bi.444.683.js";import"./bi.343.684.js";function Q({allIntegURL:g}){const u=_(),{id:x}=I(),[t,a]=l(S),[o,h]=l(y),[p,n]=m.useState(!1),[j,s]=m.useState({show:!1}),[i,C]=m.useState(0),c=w(v),b=()=>{if(!E(t)){s({show:!0,msg:d("Please map mandatory fields","bit-integrations")});return}k({flow:o,setFlow:h,allIntegURL:g,conf:t,navigate:u,id:x,edit:1,setIsLoading:n,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(N,{snack:j,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 ",children:d("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:r=>f(r,i,t,a),name:"name",value:t.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(F,{entity:o.triggered_entity,setSnackbar:s}),e.jsx(M,{tab:i,settab:C,formID:o.triggered_entity_id,formFields:c,handleInput:r=>f(r,i,t,a,n,s),crmConf:t,setCrmConf:a,isLoading:p,setIsLoading:n,setSnackbar:s}),e.jsx(R,{edit:!0,saveConfig:b,disabled:t.module===""||t.layout===""||t.field_map.length<1,isLoading:p,dataConf:t,setDataConf:a,formFields:c}),e.jsx("br",{})]})}export{Q as default};
