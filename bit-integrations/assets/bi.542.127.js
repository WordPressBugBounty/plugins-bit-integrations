import{u as I,l as _,e as c,r as o,i as w,j as e}from"./main-650.js";import{$ as C,g as k,h as L,d as v,_ as r,i as y,I as F,s as S}from"./bi.541.15.js";import{h as m,c as f}from"./bi.616.848.js";import{L as D}from"./bi.421.849.js";function P({allIntegURL:g}){const p=I();_();const[n,N]=c(C),[s,a]=c(k),[u,x]=o.useState(!1),[h,d]=o.useState({}),[j,t]=o.useState({show:!1}),l=w(L),b=()=>{if(!f(s)){t({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}S({flow:n,allIntegURL:g,conf:s,navigate:p,edit:1,setLoading:d,setSnackbar:t})};return e.jsxs("div",{style:{width:900},children:[e.jsx(v,{snack:j,setSnackbar:t}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>m(i,s,a),name:"name",value:s.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(y,{entity:n.triggered_entity,setSnackbar:t}),e.jsx(D,{formID:n.triggered_entity_id,formFields:l,handleInput:i=>m(i,s,a),lionDeskConf:s,setLionDeskConf:a,loading:h,setLoading:d,setIsLoading:x,setSnackbar:t}),e.jsx(F,{edit:!0,saveConfig:b,disabled:!f(s),isLoading:u,dataConf:s,setDataConf:a,formFields:l}),e.jsx("br",{})]})}export{P as default};
