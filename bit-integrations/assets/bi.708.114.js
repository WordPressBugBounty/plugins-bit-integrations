import{u as S,l as C,e as m,r,i as I,j as t}from"./main-80.js";import{$ as _,g as w,h as v,d as y,_ as n,i as F,I as N,X as k,s as E}from"./bi.433.0.js";import{h as c,c as f}from"./bi.712.842.js";import{S as L}from"./bi.375.843.js";function A({allIntegURL:g}){const p=S();C();const[i,P]=m(_),[e,a]=m(w),[u,x]=r.useState(!1),[h,l]=r.useState({}),[j,s]=r.useState({show:!1}),d=I(v),b=()=>{if(!f(e)){s({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="lead"&&!e.selectedCRMPipeline){k.error(n("Please select a pipeline","bit-integrations"));return}E({flow:i,allIntegURL:g,conf:e,navigate:p,edit:1,setLoading:l,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(y,{snack:j,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>c(o,e,a),name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(F,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(L,{formID:i.triggered_entity_id,formFields:d,handleInput:o=>c(o,e,a),salesmateConf:e,setSalesmateConf:a,loading:h,setLoading:l,setIsLoading:x,setSnackbar:s}),t.jsx(N,{edit:!0,saveConfig:b,disabled:!f(e),isLoading:u,dataConf:e,setDataConf:a,formFields:d}),t.jsx("br",{})]})}export{A as default};
