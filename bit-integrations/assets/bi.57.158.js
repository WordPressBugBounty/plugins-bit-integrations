import{u as j,e as d,r as o,f as I,j as t}from"./main-270.js";import{$ as _,f as b,g as w,_ as r}from"./bi.340.0.js";import{S as C}from"./bi.218.13.js";import{S,I as y,s as F}from"./bi.155.3.js";import{h as f,c as v}from"./bi.474.931.js";import{M}from"./bi.657.932.js";import"./bi.88.440.js";import"./bi.724.9.js";import"./bi.209.11.js";import"./bi.117.14.js";import"./bi.125.697.js";import"./bi.128.698.js";function G({allIntegURL:c}){const p=j(),[i,N]=d(_),[e,a]=d(b),[g,k]=o.useState(!1),[u,l]=o.useState({auth:!1,fields:!1,lists:!1,tags:!1}),[x,s]=o.useState({show:!1}),m=I(w),h=()=>{if(!v(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}F({flow:i,allIntegURL:c,conf:e,navigate:p,edit:1,setLoading:l,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,e,a),name:"name",defaultValue:e.name||"",type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(S,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(M,{formID:i.triggered_entity_id,formFields:m,handleInput:n=>f(n,e,a),mailsterConf:e,setMailsterConf:a,loading:u,setLoading:l,setSnackbar:s}),t.jsx(y,{edit:!0,saveConfig:h,isLoading:g,dataConf:e,setDataConf:a,formFields:m}),t.jsx("br",{})]})}export{G as default};
