import{u as C,l as b,e as c,r as p,i as I,j as t}from"./main-165.js";import{g as w,$ as _,h as v,d as y,_ as r,i as N,I as S,s as F}from"./bi.312.95.js";import{h as f,c as k}from"./bi.341.740.js";import{Z as E}from"./bi.756.741.js";import"./bi.953.732.js";import"./bi.422.733.js";function A({allIntegURL:g}){const x=C(),{id:$,formID:n}=b(),[s,e]=c(w),[d,h]=c(_),[m,i]=p.useState(!1),[u,a]=p.useState({show:!1}),l=I(v),j=()=>{if(!k(s)){a({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}F({flow:d,setFlow:h,allIntegURL:g,conf:s,navigate:x,edit:1,setIsLoading:i,setSnackbar:a})};return t.jsxs("div",{style:{width:900},children:[t.jsx(y,{snack:u,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-100 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-7",onChange:o=>f(o,n,s,e),name:"name",value:s.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(N,{entity:d.triggered_entity,setSnackbar:a}),t.jsx(E,{formID:n,formFields:l,handleInput:o=>f(o,n,s,e,i,a),campaignsConf:s,setCampaignsConf:e,isLoading:m,setIsLoading:i,setSnackbar:a}),t.jsx(S,{edit:!0,saveConfig:j,disabled:s.list===""||s.table===""||s.field_map.length<1,isLoading:m,dataConf:s,setDataConf:e,formFields:l})]})}export{A as default};
