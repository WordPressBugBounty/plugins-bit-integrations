import{u as j,e as m,r as o,i as _,j as t}from"./main-165.js";import{$ as I,g as w,h as C,d as v,_ as r,i as y,I as F,s as S}from"./bi.312.95.js";import{h as c,c as N}from"./bi.877.823.js";import{V as k}from"./bi.862.824.js";import"./bi.953.732.js";import"./bi.422.733.js";function A({allIntegURL:g}){const p=j(),[n,E]=m(I),[e,a]=m(w),[d,l]=o.useState(!1),[u,x]=o.useState({list:!1,field:!1,auth:!1}),[h,s]=o.useState({show:!1}),f=_(C),b=()=>{if(!N(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}S({flow:n,allIntegURL:g,conf:e,navigate:p,edit:1,setIsLoading:l,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>c(i,e,a),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(y,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(k,{formID:n.triggered_entity_id,formFields:f,handleInput:i=>c(i,e,a),vboutConf:e,setVboutConf:a,isLoading:d,setIsLoading:l,loading:u,setLoading:x,setSnackbar:s}),t.jsx(F,{edit:!0,saveConfig:b,disabled:e.field_map.length<1,isLoading:d,dataConf:e,setDataConf:a,formFields:f}),t.jsx("br",{})]})}export{A as default};
