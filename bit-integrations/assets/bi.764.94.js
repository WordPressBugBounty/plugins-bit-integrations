import{u as j,l as b,e as c,r as o,i as I,j as t}from"./main-29.js";import{$ as _,g as w,h as y,d as v,_ as r,i as C,I as F,s as S}from"./bi.860.15.js";import{h as m,c as M}from"./bi.179.788.js";import{M as N}from"./bi.917.789.js";import"./bi.831.661.js";import"./bi.392.662.js";function T({allIntegURL:f}){const g=j();b();const[i,R]=c(_),[e,a]=c(w),[p,k]=o.useState(!1),[u,l]=o.useState({list:!1,field:!1,auth:!1,tags:!1}),[x,s]=o.useState({show:!1}),d=I(y),h=()=>{if(!M(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}S({flow:i,allIntegURL:f,conf:e,navigate:g,edit:1,setLoading:l,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>m(n,e,a),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(C,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(N,{formID:i.triggered_entity_id,formFields:d,handleInput:n=>m(n,e,a),mailRelayConf:e,setMailRelayConf:a,loading:u,setLoading:l,setSnackbar:s}),t.jsx(F,{edit:!0,saveConfig:h,disabled:!(e!=null&&e.status),isLoading:p,dataConf:e,setDataConf:a,formFields:d}),t.jsx("br",{})]})}export{T as default};
