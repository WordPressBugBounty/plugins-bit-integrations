import{u as w,e as c,r as o,i as j,j as e}from"./main-165.js";import{$ as I,g as N,h as _,d as b,_ as r,i as C,I as y,s as F}from"./bi.312.95.js";import{h as m,c as S}from"./bi.822.959.js";import{N as v}from"./bi.529.960.js";import"./bi.953.732.js";import"./bi.422.733.js";function P({allIntegURL:f}){const g=w(),[n,k]=c(I),[t,a]=c(N),[p,E]=o.useState(!1),[u,d]=o.useState({auth:!1}),[x,s]=o.useState({show:!1}),l=j(_),h=()=>{if(!S(t)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}F({flow:n,allIntegURL:f,conf:t,navigate:g,edit:1,setLoading:d,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(b,{snack:x,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>m(i,t,a),name:"name",defaultValue:t.name||"",type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(C,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(v,{formID:n.triggered_entity_id,formFields:l,handleInput:i=>m(i,t,a),newsletterConf:t,setNewsletterConf:a,loading:u,setLoading:d,setSnackbar:s}),e.jsx(y,{edit:!0,saveConfig:h,isLoading:p,dataConf:t,setDataConf:a,formFields:l}),e.jsx("br",{})]})}export{P as default};