import{u as j,o as h,e as n,f as w,r as i,j as t}from"./main-263.js";import{f as I,$ as _,g as S,_ as r}from"./bi.924.0.js";import{S as v}from"./bi.428.13.js";import"./bi.361.434.js";import{S as C,I as N,s as y}from"./bi.317.3.js";import{h as D}from"./bi.947.716.js";import{D as E}from"./bi.34.717.js";import"./bi.402.9.js";import"./bi.929.11.js";import"./bi.686.14.js";function z({allIntegURL:m}){const d=j(),{id:p}=h(),[s,o]=n(I),[a,c]=n(_),l=w(S),[f,x]=i.useState(!1),[g,e]=i.useState({show:!1}),b=()=>{y({flow:a,setFlow:c,allIntegURL:m,conf:s,navigate:d,edit:1,setIsLoading:x,setSnackbar:e})};return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:g,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>D(u,s,o),name:"name",value:s.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(C,{entity:a.triggered_entity,setSnackbar:e}),t.jsx(E,{flowID:p,formFields:l,dropboxConf:s,setDropboxConf:o}),t.jsx(N,{edit:!0,saveConfig:b,disabled:s.field_map.length<1,isLoading:f}),t.jsx("br",{})]})}export{z as default};
