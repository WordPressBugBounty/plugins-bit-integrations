import{u as h,o as I,e as m,f as b,r as a,j as t}from"./main-34.js";import{f as C,$ as _,g as w,_ as l}from"./bi.671.0.js";import{S as v}from"./bi.213.13.js";import"./bi.188.437.js";import{S as N,I as y,s as E}from"./bi.633.3.js";import{h as B}from"./bi.337.707.js";import{S as F}from"./bi.665.708.js";import"./bi.914.9.js";import"./bi.22.11.js";import"./bi.690.14.js";import"./bi.623.673.js";import"./bi.808.674.js";function H({allIntegURL:c}){const f=h(),{id:R,formID:p}=I(),[e,n]=m(C),[o,u]=m(_),i=b(w),[r,d]=a.useState(!1),[g,s]=a.useState({show:!1}),[x,S]=a.useState({templateId:"",RedirectionUrl:""});return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:g,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>B(j,e,n),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(N,{entity:o.triggered_entity,setSnackbar:s}),t.jsx(F,{formID:p,formFields:i,sendinBlueConf:e,setSendinBlueConf:n,isLoading:r,setIsLoading:d,setSnackbar:s,error:x,setError:S}),t.jsx(y,{edit:!0,saveConfig:()=>E({flow:o,setFlow:u,allIntegURL:c,conf:e,navigate:f,edit:1,setIsLoading:d,setSnackbar:s}),disabled:e.listId===""||e.field_map.length<1,isLoading:r,dataConf:e,setDataConf:n,formFields:i}),t.jsx("br",{})]})}export{H as default};
