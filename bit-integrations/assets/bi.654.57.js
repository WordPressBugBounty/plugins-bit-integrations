import{u as h,o as j,e as c,r as l,f as _,j as t}from"./main-794.js";import{$ as b,f as I,g as w,_ as r}from"./bi.828.0.js";import{S as C}from"./bi.961.13.js";import"./bi.266.440.js";import{S,I as v,s as y}from"./bi.499.3.js";import{h as f,c as F}from"./bi.608.767.js";import{M}from"./bi.3.768.js";import"./bi.685.9.js";import"./bi.690.11.js";import"./bi.811.14.js";import"./bi.257.704.js";import"./bi.35.705.js";function G({allIntegURL:p}){const g=h();j();const[i,N]=c(b),[e,a]=c(I),[m,n]=l.useState(!1),[u,s]=l.useState({show:!1}),d=_(w),x=()=>{if(!F(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}y({flow:i,allIntegURL:p,conf:e,navigate:g,edit:1,setIsLoading:n,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,a),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(S,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(M,{formID:i.triggered_entity_id,formFields:d,handleInput:o=>f(o,e,a,n,s),mauticConf:e,setMauticConf:a,isLoading:m,setIsLoading:n,setSnackbar:s}),t.jsx(v,{edit:!0,saveConfig:x,disabled:e.field_map.length<1,isLoading:m,dataConf:e,setDataConf:a,formFields:d}),t.jsx("br",{})]})}export{G as default};
