import{u as w,o as C,e as f,r,f as S,j as t}from"./main-777.js";import{f as _,$ as v,g as y,_ as m}from"./bi.157.0.js";import{S as N}from"./bi.309.13.js";import"./bi.463.440.js";import{S as R,I as F,s as k}from"./bi.644.3.js";import{h as u,c as E}from"./bi.980.703.js";import{Z as $}from"./bi.901.704.js";import"./bi.681.9.js";import"./bi.677.11.js";import"./bi.181.14.js";import"./bi.30.688.js";import"./bi.444.683.js";import"./bi.343.684.js";function O({allIntegURL:g}){const x=w(),{id:L,formID:c}=C(),[e,a]=f(_),[d,h]=f(v),[l,o]=r.useState(!1),[b,s]=r.useState({show:!1}),[n,j]=r.useState(0),p=S(y),I=()=>{if(!E(e)){s({show:!0,msg:m("Please map mandatory fields","bit-integrations")});return}k({flow:d,setFlow:h,allIntegURL:g,conf:e,navigate:x,edit:1,setIsLoading:o,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(N,{snack:b,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>u(i,n,e,a),name:"name",value:e.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(R,{entity:d.triggered_entity,setSnackbar:s}),t.jsx($,{tab:n,settab:j,formID:c,formFields:p,handleInput:i=>u(i,n,e,a,c,o,s),recruitConf:e,setRecruitConf:a,isLoading:l,setIsLoading:o,setSnackbar:s}),t.jsx(F,{edit:!0,saveConfig:I,disabled:e.module===""||e.field_map.length<1,isLoading:l,dataConf:e,setDataConf:a,formFields:p}),t.jsx("br",{})]})}export{O as default};
