import{u as j,l as b,e as c,r,i as I,j as t}from"./main-830.js";import{$ as _,g as w,h as P,d as v,_ as n,i as y,I as F,W as N,s as S}from"./bi.597.15.js";import{h as m,c as f}from"./bi.413.838.js";import{C as k}from"./bi.422.839.js";function A({allIntegURL:g}){const p=j();b();const[i,E]=c(_),[e,a]=c(w),[u,L]=r.useState(!1),[h,d]=r.useState({}),[x,s]=r.useState({show:!1}),l=I(P),C=()=>{if(!f(e)){s({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="lead"&&!e.selectedCRMPipeline){N.error(n("Please select a pipeline","bit-integrations"));return}S({flow:i,allIntegURL:g,conf:e,navigate:p,edit:1,setLoading:d,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>m(o,e,a),name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(y,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(k,{formID:i.triggered_entity_id,formFields:l,handleInput:o=>m(o,e,a),clinchPadConf:e,setClinchPadConf:a,loading:h,setLoading:d,setSnackbar:s}),t.jsx(F,{edit:!0,saveConfig:C,disabled:!f(e),isLoading:u,dataConf:e,setDataConf:a,formFields:l}),t.jsx("br",{})]})}export{A as default};
