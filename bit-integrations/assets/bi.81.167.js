import{u as b,e as p,r as n,f as _,j as t}from"./main-246.js";import{$ as w,e as C,f as I,_ as i}from"./bi.560.0.js";import{S}from"./bi.222.13.js";import{S as v,I as y,s as F}from"./bi.545.3.js";import{h as N,c}from"./bi.811.973.js";import{B as k}from"./bi.435.974.js";import"./bi.675.443.js";import"./bi.947.9.js";import"./bi.975.11.js";import"./bi.557.14.js";import"./bi.719.818.js";import"./bi.470.726.js";import"./bi.76.793.js";import"./bi.300.720.js";import"./bi.924.721.js";function O({allIntegURL:f}){const l=b(),[o,B]=p(w),[e,a]=p(C),[r,m]=n.useState(!1),[g,x]=n.useState({}),[u,s]=n.useState({show:!1}),d=_(I),h=()=>{if(!c(e)){s({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}F({flow:o,allIntegURL:f,conf:e,navigate:l,edit:1,setIsLoading:m,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:i("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>N(j,e,a),name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:o.triggered_entity,setSnackbar:s}),t.jsx(k,{formID:o.triggered_entity_id,formFields:d,bentoConf:e,setBentoConf:a,loading:g,setLoading:x,isLoading:r,setIsLoading:m,setSnackbar:s}),t.jsx(y,{edit:!0,saveConfig:h,disabled:!c(e),isLoading:r,dataConf:e,setDataConf:a,formFields:d}),t.jsx("br",{})]})}export{O as default};
