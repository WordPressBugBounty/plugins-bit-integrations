import{u as h,l as j,e as m,r as c,i as E,j as t}from"./main-692.js";import{$ as _,g as b,h as I,d as w,_ as o,i as C,I as v,s as y}from"./bi.751.13.js";import{h as f,c as F}from"./bi.557.715.js";import{E as N}from"./bi.198.716.js";import"./bi.588.657.js";import"./bi.294.658.js";function P({allIntegURL:p}){const g=h();j();const[i,S]=m(_),[e,a]=m(b),[r,l]=c.useState(!1),[x,s]=c.useState({show:!1}),d=E(I),u=()=>{if(!F(e)){s({show:!0,msg:o("Please map mandatory fields","bit-integrations")});return}y({flow:i,allIntegURL:p,conf:e,navigate:g,edit:1,setIsLoading:l,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:o("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,e,a),name:"name",value:e.name,type:"text",placeholder:o("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(C,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(N,{formID:i.triggered_entity_id,formFields:d,handleInput:n=>f(n,e,a),elasticEmailConf:e,setElasticEmailConf:a,isLoading:r,setIsLoading:l,setSnackbar:s}),t.jsx(v,{edit:!0,saveConfig:u,disabled:e.field_map.length<1,isLoading:r,dataConf:e,setDataConf:a,formFields:d}),t.jsx("br",{})]})}export{P as default};
