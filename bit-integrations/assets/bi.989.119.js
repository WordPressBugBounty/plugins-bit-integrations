import{u,l as j,e as c,i as C,r as m,j as e}from"./main-579.js";import{g as h,$ as v,h as b,d as I,_ as d,i as w,I as _,s as N}from"./bi.919.15.js";import{h as S,P as y}from"./bi.310.833.js";import"./bi.155.771.js";import"./bi.850.660.js";import"./bi.517.661.js";function D({allIntegURL:l}){const p=u(),{formID:f}=j(),[t,a]=c(h),[n,P]=c(v),i=C(b),[o,r]=m.useState(!1),[x,s]=m.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(I,{snack:x,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:g=>S(g,t,a),name:"name",value:t.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(w,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(y,{formID:f,formFields:i,propovoiceCrmConf:t,setPropovoiceCrmConf:a,isLoading:o,setIsLoading:r,setSnackbar:s}),e.jsx(_,{edit:!0,saveConfig:()=>N({flow:n,allIntegURL:l,conf:t,navigate:p,edit:1,setIsLoading:r,setSnackbar:s}),disabled:o,isLoading:o,dataConf:t,setDataConf:a,formFields:i}),e.jsx("br",{})]})}export{D as default};
