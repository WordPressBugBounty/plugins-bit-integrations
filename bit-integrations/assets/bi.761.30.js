import{u as j,l as b,e as d,i as w,r as c,j as e}from"./main-650.js";import{g as C,$ as I,h as _,d as v,_ as n,i as M,I as N,s as P}from"./bi.541.15.js";import{h as S,M as y,c as F}from"./bi.911.690.js";import"./bi.619.660.js";import"./bi.119.661.js";function D({allIntegURL:m}){const f=j(),{formID:p}=b(),[t,a]=d(C),[i,g]=d(I),o=w(_),[r,l]=c.useState(!1),[x,s]=c.useState({show:!1}),u=()=>{if(!F(t)){s({show:!0,msg:n("Please map all required fields to continue.","bit-integrations")});return}P({flow:i,setFlow:g,allIntegURL:m,conf:t,navigate:f,edit:1,setIsLoading:l,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(v,{snack:x,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:n("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-6",onChange:h=>S(h,t,a),name:"name",value:t.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(M,{entity:i.triggered_entity,setSnackbar:s}),e.jsx(y,{formID:p,formFields:o,mailPoetConf:t,setMailPoetConf:a,isLoading:r,step:2,setIsLoading:l,setSnackbar:s,edit:t.lists}),e.jsx(N,{edit:!0,saveConfig:u,disabled:t.lists===""||t.field_map.length<1,isLoading:r,dataConf:t,setDataConf:a,formFields:o}),e.jsx("br",{})]})}export{D as default};
