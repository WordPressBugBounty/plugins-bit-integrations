import{u as y,l as S,e as m,r as o,i as b,j as e}from"./main-80.js";import{$ as I,g as _,h as w,d as C,_ as r,i as v,I as F,s as N}from"./bi.433.0.js";import{h as c,c as f}from"./bi.893.792.js";import{S as k}from"./bi.27.793.js";function P({allIntegURL:g}){const p=y();S();const[n,E]=m(I),[t,a]=m(_),[u,L]=o.useState(!1),[x,d]=o.useState({auth:!1}),[h,s]=o.useState({show:!1}),l=b(w),j=()=>{if(!f(t)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}N({flow:n,allIntegURL:g,conf:t,navigate:p,edit:1,setLoading:d,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(C,{snack:h,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>c(i,t,a),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(v,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(k,{formID:n.triggered_entity_id,formFields:l,handleInput:i=>c(i,t,a),smailyConf:t,setSmailyConf:a,loading:x,setLoading:d,setSnackbar:s}),e.jsx(F,{edit:!0,saveConfig:j,disabled:!f(t),isLoading:u,dataConf:t,setDataConf:a,formFields:l}),e.jsx("br",{})]})}export{P as default};
