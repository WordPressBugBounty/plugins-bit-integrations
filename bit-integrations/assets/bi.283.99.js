import{u as b,o as I,e as d,r as n,f as _,j as t}from"./main-777.js";import{$ as w,f as C,g as F,_ as r}from"./bi.157.0.js";import{S}from"./bi.309.13.js";import"./bi.463.440.js";import{S as E,I as v,s as y}from"./bi.644.3.js";import{h as c,c as f}from"./bi.945.823.js";import{E as N}from"./bi.104.824.js";import"./bi.681.9.js";import"./bi.677.11.js";import"./bi.181.14.js";import"./bi.444.683.js";import"./bi.343.684.js";function H({allIntegURL:p}){const u=b();I();const[i,O]=d(w),[s,a]=d(C),[g,k]=n.useState(!1),[x,m]=n.useState({auth:!1,tags:!1,customFields:!1,lists:!1,emailOctopusFields:!0}),[h,e]=n.useState({show:!1}),l=_(F),j=()=>{if(!f(s)){e({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}y({flow:i,allIntegURL:p,conf:s,navigate:u,edit:1,setLoading:m,setSnackbar:e})};return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:h,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>c(o,s,a),name:"name",value:s.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(E,{entity:i.triggered_entity,setSnackbar:e}),t.jsx(N,{formID:i.triggered_entity_id,formFields:l,handleInput:o=>c(o,s,a),emailOctopusConf:s,setEmailOctopusConf:a,loading:x,setLoading:m,setSnackbar:e}),t.jsx(v,{edit:!0,saveConfig:j,disabled:!f(s),isLoading:g,dataConf:s,setDataConf:a,formFields:l}),t.jsx("br",{})]})}export{H as default};
