import{u as j,e as f,r as n,f as _,j as t}from"./main-247.js";import{$ as I,f as w,g as C,_ as r}from"./bi.456.0.js";import{S}from"./bi.417.13.js";import"./bi.393.437.js";import{S as v,I as y,s as F}from"./bi.427.3.js";import{h as c,c as N}from"./bi.231.764.js";import{V as k}from"./bi.443.765.js";import"./bi.712.9.js";import"./bi.923.11.js";import"./bi.858.14.js";import"./bi.510.673.js";import"./bi.210.674.js";function G({allIntegURL:p}){const g=j(),[o,E]=f(I),[e,a]=f(w),[d,m]=n.useState(!1),[u,x]=n.useState({list:!1,field:!1,auth:!1}),[h,s]=n.useState({show:!1}),l=_(C),b=()=>{if(!N(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}F({flow:o,allIntegURL:p,conf:e,navigate:g,edit:1,setIsLoading:m,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>c(i,e,a),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:o.triggered_entity,setSnackbar:s}),t.jsx(k,{formID:o.triggered_entity_id,formFields:l,handleInput:i=>c(i,e,a),vboutConf:e,setVboutConf:a,isLoading:d,setIsLoading:m,loading:u,setLoading:x,setSnackbar:s}),t.jsx(y,{edit:!0,saveConfig:b,disabled:e.field_map.length<1,isLoading:d,dataConf:e,setDataConf:a,formFields:l}),t.jsx("br",{})]})}export{G as default};
