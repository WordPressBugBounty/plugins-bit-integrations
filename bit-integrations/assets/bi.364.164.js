import{u as j,e as c,r as o,f as S,j as t}from"./main-623.js";import{$ as w,f as F,g as I,_ as s,n as r}from"./bi.422.0.js";import{S as L}from"./bi.957.13.js";import"./bi.1.443.js";import{S as y,I as v,s as C}from"./bi.757.3.js";import{h as N,c as d}from"./bi.259.967.js";import{L as k}from"./bi.622.968.js";import"./bi.331.9.js";import"./bi.727.11.js";import"./bi.218.14.js";import"./bi.156.818.js";function G({allIntegURL:f}){const p=j(),[i,E]=c(w),[e,n]=c(F),[u,m]=o.useState(!1),[g,x]=o.useState({}),[b,a]=o.useState({show:!1}),l=S(I),_=()=>{if(!d(e)){a({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}if(e.module!="update_license"&&!d(e)){r.error(s("Please map mandatory fields","bit-integrations"));return}if(e.module==="create_license"&&!(e!=null&&e.selectedStatus)){r.error(s("Please select Status","bit-integrations"));return}if(e.module==="update_license"&&!(e!=null&&e.selectedLicense)){r.error(s("Please select Status","bit-integrations"));return}C({flow:i,allIntegURL:f,conf:e,navigate:p,edit:1,setIsLoading:m,setSnackbar:a})};return t.jsxs("div",{style:{width:900},children:[t.jsx(L,{snack:b,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:h=>N(h,e,n),name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(y,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(k,{formID:i.triggered_entity_id,formFields:l,licenseManagerConf:e,setLicenseManagerConf:n,loading:g,setLoading:x,setIsLoading:m,setSnackbar:a}),t.jsx(v,{edit:!0,saveConfig:_,disabled:!d(e),isLoading:u,dataConf:e,setDataConf:n,formFields:l}),t.jsx("br",{})]})}export{G as default};
