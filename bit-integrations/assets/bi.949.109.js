import{u as I,o as _,e as d,r as n,f as w,j as t}from"./main-34.js";import{$ as C,f as F,g as S,_ as r}from"./bi.671.0.js";import{S as v}from"./bi.213.13.js";import"./bi.188.437.js";import{S as y,I as N,s as A}from"./bi.633.3.js";import{h as m,c as f}from"./bi.216.831.js";import{A as k}from"./bi.578.832.js";import"./bi.914.9.js";import"./bi.22.11.js";import"./bi.690.14.js";import"./bi.623.673.js";import"./bi.808.674.js";function J({allIntegURL:c}){const p=I();_();const[i,E]=d(C),[e,a]=d(F),[g,u]=n.useState(!1),[x,b]=n.useState({auth:!1,customFields:!1,bases:!1,tables:!1,airtableFields:!0}),[h,s]=n.useState({show:!1}),l=w(S),j=()=>{if(!f(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}A({flow:i,allIntegURL:c,conf:e,navigate:p,edit:1,setIsLoading:u,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>m(o,e,a),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(y,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(k,{formID:i.triggered_entity_id,formFields:l,handleInput:o=>m(o,e,a),airtableConf:e,setAirtableConf:a,loading:x,setLoading:b,setSnackbar:s}),t.jsx(N,{edit:!0,saveConfig:j,disabled:!f(e),isLoading:g,dataConf:e,setDataConf:a,formFields:l}),t.jsx("br",{})]})}export{J as default};
