import{u as j,e as l,r as o,i as _,j as e}from"./main-165.js";import{$ as w,g as C,h as I,d as S,_ as a,i as L,I as y,W as c,s as F}from"./bi.312.95.js";import{h as E,c as m}from"./bi.704.936.js";import{L as N}from"./bi.767.937.js";function M({allIntegURL:f}){const g=j(),[n,k]=l(w),[t,i]=l(C),[p,r]=o.useState(!1),[u,x]=o.useState({}),[h,s]=o.useState({show:!1}),d=_(I),v=()=>{if(!m(t)){s({show:!0,msg:a("Please map mandatory fields","bit-integrations")});return}if(!t.selectedEvent){c.error(a("Please select an Event","bit-integrations"));return}if(!t.selectedSession){c.error(a("Please select a Session","bit-integrations"));return}F({flow:n,allIntegURL:f,conf:t,navigate:g,edit:1,setIsLoading:r,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(S,{snack:h,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:b=>E(b,t,i),name:"name",value:t.name,type:"text",placeholder:a("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(L,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(N,{formID:n.triggered_entity_id,formFields:d,livestormConf:t,setLivestormConf:i,loading:u,setLoading:x,setIsLoading:r,setSnackbar:s}),e.jsx(y,{edit:!0,saveConfig:v,disabled:!m(t),isLoading:p,dataConf:t,setDataConf:i,formFields:d}),e.jsx("br",{})]})}export{M as default};