import{u as b,o as C,e as r,f as I,r as o,j as t}from"./main-814.js";import{f as S,$ as _,g as w,_ as m}from"./bi.317.0.js";import{S as v}from"./bi.610.13.js";import{S as D,I as N,s as y}from"./bi.59.3.js";import{h as F}from"./bi.675.866.js";import{D as E}from"./bi.434.867.js";import"./bi.8.440.js";import"./bi.672.11.js";import"./bi.765.9.js";import"./bi.478.14.js";import"./bi.321.683.js";import"./bi.904.684.js";function J({allIntegURL:d}){const l=b(),{id:L,formID:f}=C(),[s,e]=r(S),[n,c]=r(_),i=I(w),[p,g]=o.useState(!1),[u,a]=o.useState({show:!1}),[x,h]=o.useState({auth:!1,customFields:!1,accounts:!1,tags:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:u,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>F(j,s,e),name:"name",value:s.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(D,{entity:n.triggered_entity,setSnackbar:a}),t.jsx(E,{formID:f,formFields:i,dripConf:s,setDripConf:e,loading:x,setLoading:h}),t.jsx(N,{edit:!0,saveConfig:()=>y({flow:n,setFlow:c,allIntegURL:d,navigate:l,conf:s,edit:1,setIsLoading:g,setSnackbar:a}),disabled:s.field_map.length<1,isLoading:p,dataConf:s,setDataConf:e,formFields:i}),t.jsx("br",{})]})}export{J as default};
