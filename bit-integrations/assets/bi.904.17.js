import{u as I,o as S,e as p,r as m,f as _,j as e}from"./main-920.js";import{f as y,$ as v,g as N,_ as a}from"./bi.247.0.js";import{S as C}from"./bi.970.13.js";import"./bi.761.437.js";import{S as F,I as k,s as E}from"./bi.658.3.js";import{h as f,c as L}from"./bi.130.677.js";import{Z as $}from"./bi.281.678.js";import"./bi.140.9.js";import"./bi.941.11.js";import"./bi.706.14.js";import"./bi.630.679.js";import"./bi.722.674.js";import"./bi.149.675.js";function O({allIntegURL:u}){const g=I(),{id:B,formID:d}=S(),[t,o]=p(y),[l,x]=p(v),[c,i]=m.useState(!1),[h,s]=m.useState({show:!1}),[n,j]=m.useState(0),b=_(N),w=()=>{if(!L(t)){s({show:!0,msg:a("Please map mandatory fields","bit-integrations")});return}if((t==null?void 0:t.module)==="Deals"&&!(t!=null&&t.pLayout)){s({show:!0,msg:a("Please select a layout","bit-integrations")});return}E({flow:l,setFlow:x,allIntegURL:u,conf:t,navigate:g,edit:1,setIsLoading:i,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(C,{snack:h,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:r=>f(r,n,t,o),name:"name",value:t.name,type:"text",placeholder:a("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(F,{entity:l.triggered_entity,setSnackbar:s}),e.jsx($,{tab:n,settab:j,formID:d,handleInput:r=>f(r,n,t,o,d,i,s),isLoading:c,setIsLoading:i,setSnackbar:s}),e.jsx(k,{edit:!0,saveConfig:w,disabled:t.module===""||t.field_map.length<1,isLoading:c,dataConf:t,setDataConf:o,formFields:b}),e.jsx("br",{})]})}export{O as default};