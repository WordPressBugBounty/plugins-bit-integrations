import{u as C,o as j,e as m,f as h,r as d,j as t}from"./main-955.js";import{f as v,$ as b,g as I,_ as c}from"./bi.223.0.js";import{S as _}from"./bi.951.13.js";import{S as w,I as S,s as N}from"./bi.864.3.js";import{h as y}from"./bi.705.810.js";import{C as E}from"./bi.458.811.js";import"./bi.326.431.js";import"./bi.300.11.js";import"./bi.696.9.js";import"./bi.283.14.js";function q({allIntegURL:f}){const l=C(),{id:F,formID:p}=j(),[e,a]=m(v),[n,g]=m(b),o=h(I),[i,r]=d.useState(!1),[x,s]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(_,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>y(u,e,a),name:"name",value:e.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(w,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(E,{formID:p,formFields:o,convertKitConf:e,setConvertKitConf:a,isLoading:i,setIsLoading:r,setSnackbar:s}),t.jsx(S,{edit:!0,saveConfig:()=>N({flow:n,setFlow:g,allIntegURL:f,navigate:l,conf:e,edit:1,setIsLoading:r,setSnackbar:s}),disabled:e.field_map.length<1,isLoading:i,dataConf:e,setDataConf:a,formFields:o}),t.jsx("br",{})]})}export{q as default};
