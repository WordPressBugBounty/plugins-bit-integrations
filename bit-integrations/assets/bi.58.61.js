import{u,e as c,r as m,i as h,j as t}from"./main-579.js";import{$ as _,g as j,h as b,_ as i,i as I,I as C,c as w,s as v}from"./bi.919.15.js";import{h as f,G as y,c as F}from"./bi.735.727.js";import"./bi.850.660.js";import"./bi.517.661.js";function R({allIntegURL:g}){const p=u(),[a,N]=c(_),[e,s]=c(j),[o,r]=m.useState(!1),[S,d]=m.useState({show:!1}),l=h(b),x=()=>{if(!F(e)){w.error(i("Please map mandatory fields","bit-integrations"));return}v({flow:a,allIntegURL:g,conf:e,navigate:p,edit:1,setIsLoading:r,setSnackbar:d})};return t.jsxs("div",{style:{width:900},children:[t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:i("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,e,s),name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(I,{entity:a.triggered_entity,setSnackbar:d}),t.jsx(y,{formID:a.triggered_entity_id,formFields:l,handleInput:n=>f(n,e,s),getgistConf:e,setGetgistConf:s,isLoading:o,setIsLoading:r}),t.jsx(C,{edit:!0,saveConfig:x,disabled:e.field_map.length<1,isLoading:o,dataConf:e,setDataConf:s,formFields:l}),t.jsx("br",{})]})}export{R as default};
