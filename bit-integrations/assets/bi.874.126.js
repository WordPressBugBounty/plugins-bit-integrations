import{u as h,l as j,e as l,i as b,r as d,j as t}from"./main-29.js";import{g as C,$ as I,h as _,d as w,_ as m,i as v,I as L,s as N}from"./bi.860.15.js";import{h as S}from"./bi.442.847.js";import{L as y}from"./bi.174.848.js";function D({allIntegURL:c}){const f=h(),{id:E,formID:g}=j(),[e,a]=l(C),[n,x]=l(I),i=b(_),[o,r]=d.useState(!1),[p,s]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:p,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>S(u,e,a),name:"name",value:e.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(y,{formID:g,formFields:i,lemlistConf:e,setLemlistConf:a,isLoading:o,setIsLoading:r,setSnackbar:s}),t.jsx(L,{edit:!0,saveConfig:()=>N({flow:n,setFlow:x,allIntegURL:c,navigate:f,conf:e,edit:1,setIsLoading:r,setSnackbar:s}),disabled:e.field_map.length<1,isLoading:o,dataConf:e,setDataConf:a,formFields:i}),t.jsx("br",{})]})}export{D as default};
