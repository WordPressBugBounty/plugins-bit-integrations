import{u as I,o as j,e as m,f as h,r as c,j as t}from"./main-794.js";import{f as b,$ as C,g as _,_ as d}from"./bi.828.0.js";import{S as w}from"./bi.961.13.js";import{S,I as v,s as D}from"./bi.499.3.js";import{h as N}from"./bi.610.859.js";import{D as y}from"./bi.853.860.js";import"./bi.266.440.js";import"./bi.690.11.js";import"./bi.685.9.js";import"./bi.811.14.js";function z({allIntegURL:f}){const l=I(),{id:q,formID:p}=j(),[e,a]=m(b),[n,g]=m(C),o=h(_),[i,r]=c.useState(!1),[x,s]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>N(u,e,a),name:"name",value:e.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(S,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(y,{formID:p,formFields:o,directIqConf:e,setDirectIqConf:a,isLoading:i,setIsLoading:r,setSnackbar:s}),t.jsx(v,{edit:!0,saveConfig:()=>D({flow:n,setFlow:g,allIntegURL:f,navigate:l,conf:e,edit:1,setIsLoading:r,setSnackbar:s}),disabled:e.field_map.length<1,isLoading:i,dataConf:e,setDataConf:a,formFields:o}),t.jsx("br",{})]})}export{z as default};
