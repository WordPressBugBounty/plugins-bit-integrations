import{u as C,l as h,e as d,i as j,r as c,j as t}from"./main-579.js";import{g as v,$ as b,h as I,d as _,_ as l,i as w,I as N,s as S}from"./bi.919.15.js";import{h as y}from"./bi.829.808.js";import{C as E}from"./bi.204.809.js";function R({allIntegURL:m}){const f=C(),{id:F,formID:g}=h(),[e,a]=d(v),[n,x]=d(b),i=j(I),[o,r]=c.useState(!1),[p,s]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(_,{snack:p,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>y(u,e,a),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(w,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(E,{formID:g,formFields:i,convertKitConf:e,setConvertKitConf:a,isLoading:o,setIsLoading:r,setSnackbar:s}),t.jsx(N,{edit:!0,saveConfig:()=>S({flow:n,setFlow:x,allIntegURL:m,navigate:f,conf:e,edit:1,setIsLoading:r,setSnackbar:s}),disabled:e.field_map.length<1,isLoading:o,dataConf:e,setDataConf:a,formFields:i}),t.jsx("br",{})]})}export{R as default};
