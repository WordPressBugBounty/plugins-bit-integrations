import{u as j,o as b,e as m,f as w,r as d,j as t}from"./main-794.js";import{f as C,$ as I,g as _,_ as i}from"./bi.828.0.js";import{S}from"./bi.961.13.js";import"./bi.266.440.js";import{S as v,I as M,s as N}from"./bi.499.3.js";import{h as P,M as y,c as F}from"./bi.165.736.js";import"./bi.685.9.js";import"./bi.690.11.js";import"./bi.811.14.js";import"./bi.257.704.js";import"./bi.35.705.js";import"./bi.591.710.js";function H({allIntegURL:c}){const p=j(),{formID:f}=b(),[e,a]=m(C),[o,g]=m(I),n=w(_),[r,l]=d.useState(!1),[x,s]=d.useState({show:!1}),u=()=>{if(!F(e)){s({show:!0,msg:i("Please map all required fields to continue.","bit-integrations")});return}N({flow:o,setFlow:g,allIntegURL:c,conf:e,navigate:p,edit:1,setIsLoading:l,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:i("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-6",onChange:h=>P(h,e,a),name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(v,{entity:o.triggered_entity,setSnackbar:s}),t.jsx(y,{formID:f,formFields:n,mailPoetConf:e,setMailPoetConf:a,isLoading:r,step:2,setIsLoading:l,setSnackbar:s,edit:e.lists}),t.jsx(M,{edit:!0,saveConfig:u,disabled:e.lists===""||e.field_map.length<1,isLoading:r,dataConf:e,setDataConf:a,formFields:n}),t.jsx("br",{})]})}export{H as default};
