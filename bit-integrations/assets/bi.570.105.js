import{u as w,l as C,e as p,r,i as _,j as t}from"./main-165.js";import{g as v,$ as S,h as y,d as N,_ as d,i as R,I as F,s as k}from"./bi.312.95.js";import{h as u,c as E}from"./bi.389.752.js";import{Z as $}from"./bi.953.753.js";import"./bi.435.737.js";import"./bi.953.732.js";import"./bi.422.733.js";function z({allIntegURL:g}){const x=w(),{id:L,formID:c}=C(),[e,a]=p(v),[l,h]=p(S),[m,n]=r.useState(!1),[b,s]=r.useState({show:!1}),[i,j]=r.useState(0),f=_(y),I=()=>{if(!E(e)){s({show:!0,msg:d("Please map mandatory fields","bit-integrations")});return}k({flow:l,setFlow:h,allIntegURL:g,conf:e,navigate:x,edit:1,setIsLoading:n,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(N,{snack:b,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>u(o,i,e,a),name:"name",value:e.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(R,{entity:l.triggered_entity,setSnackbar:s}),t.jsx($,{tab:i,settab:j,formID:c,formFields:f,handleInput:o=>u(o,i,e,a,c,n,s),recruitConf:e,setRecruitConf:a,isLoading:m,setIsLoading:n,setSnackbar:s}),t.jsx(F,{edit:!0,saveConfig:I,disabled:e.module===""||e.field_map.length<1,isLoading:m,dataConf:e,setDataConf:a,formFields:f}),t.jsx("br",{})]})}export{z as default};
