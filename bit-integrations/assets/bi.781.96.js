import{u as j,e as m,r as o,f as b,j as e}from"./main-425.js";import{$ as I,f as _,g as w,_ as r}from"./bi.107.0.js";import{S}from"./bi.273.13.js";import"./bi.900.437.js";import{S as y,I as C,s as F}from"./bi.25.3.js";import{h as f,c as v}from"./bi.733.809.js";import{M}from"./bi.663.810.js";import"./bi.814.9.js";import"./bi.563.11.js";import"./bi.783.14.js";import"./bi.178.675.js";import"./bi.326.676.js";function G({allIntegURL:c}){const p=j(),[i,N]=m(I),[t,a]=m(_),[g,L]=o.useState(!1),[u,d]=o.useState({list:!1,field:!1,auth:!1,tags:!1}),[x,s]=o.useState({show:!1}),l=b(w),h=()=>{if(!v(t)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}F({flow:i,allIntegURL:c,conf:t,navigate:p,edit:1,setLoading:d,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(S,{snack:x,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,t,a),name:"name",defaultValue:t.name||"",type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(y,{entity:i.triggered_entity,setSnackbar:s}),e.jsx(M,{formID:i.triggered_entity_id,formFields:l,handleInput:n=>f(n,t,a),mailjetConf:t,setMailjetConf:a,loading:u,setLoading:d,setSnackbar:s}),e.jsx(C,{edit:!0,saveConfig:h,disabled:!(t!=null&&t.selectedLists),isLoading:g,dataConf:t,setDataConf:a,formFields:l}),e.jsx("br",{})]})}export{G as default};
