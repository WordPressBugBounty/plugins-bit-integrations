import{u as b,e as l,r as o,i as _,j as e}from"./main-692.js";import{$ as v,g as w,h as C,d as I,_ as a,i as y,I as F,W as S,s as D}from"./bi.751.13.js";import{h as E,c}from"./bi.886.857.js";import{D as N}from"./bi.505.858.js";function P({allIntegURL:m}){const f=b(),[n,k]=l(v),[t,i]=l(w),[g,r]=o.useState(!1),[p,x]=o.useState({}),[u,s]=o.useState({show:!1}),d=_(C),h=()=>{if(!c(t)){s({show:!0,msg:a("Please map mandatory fields","bit-integrations")});return}if(!t.selectedEvent){S.error(a("Please select a Event","bit-integrations"));return}D({flow:n,allIntegURL:m,conf:t,navigate:f,edit:1,setIsLoading:r,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(I,{snack:u,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>E(j,t,i),name:"name",value:t.name,type:"text",placeholder:a("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(y,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(N,{formID:n.triggered_entity_id,formFields:d,demioConf:t,setDemioConf:i,loading:p,setLoading:x,setIsLoading:r,setSnackbar:s}),e.jsx(F,{edit:!0,saveConfig:h,disabled:!c(t),isLoading:g,dataConf:t,setDataConf:i,formFields:d}),e.jsx("br",{})]})}export{P as default};
