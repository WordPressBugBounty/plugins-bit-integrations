import{u as w,e as l,r as i,f as j,j as t}from"./main-586.js";import{$ as I,f as N,g as _,_ as r}from"./bi.612.0.js";import{S as b}from"./bi.733.13.js";import{S as C,I as S,s as y}from"./bi.993.3.js";import{h as f,c as F}from"./bi.417.922.js";import{N as v}from"./bi.515.923.js";import"./bi.960.440.js";import"./bi.175.9.js";import"./bi.980.11.js";import"./bi.520.14.js";import"./bi.546.692.js";import"./bi.203.693.js";function G({allIntegURL:c}){const p=w(),[n,k]=l(I),[e,a]=l(N),[g,E]=i.useState(!1),[u,m]=i.useState({auth:!1}),[x,s]=i.useState({show:!1}),d=j(_),h=()=>{if(!F(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}y({flow:n,allIntegURL:c,conf:e,navigate:p,edit:1,setLoading:m,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(b,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,a),name:"name",defaultValue:e.name||"",type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(C,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(v,{formID:n.triggered_entity_id,formFields:d,handleInput:o=>f(o,e,a),newsletterConf:e,setNewsletterConf:a,loading:u,setLoading:m,setSnackbar:s}),t.jsx(S,{edit:!0,saveConfig:h,isLoading:g,dataConf:e,setDataConf:a,formFields:d}),t.jsx("br",{})]})}export{G as default};
