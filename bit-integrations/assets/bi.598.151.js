import{u as b,o as C,e as p,r,f as w,j as t}from"./main-246.js";import{$ as I,e as k,f as S,_ as o,k as v}from"./bi.560.0.js";import{S as y}from"./bi.222.13.js";import"./bi.675.443.js";import{S as F,I as N,s as E}from"./bi.545.3.js";import{h as l,c as f}from"./bi.784.941.js";import{W as L}from"./bi.319.942.js";import"./bi.947.9.js";import"./bi.975.11.js";import"./bi.557.14.js";function G({allIntegURL:g}){const u=b();C();const[n,W]=p(I),[e,a]=p(k),[d,m]=r.useState(!1),[x,h]=r.useState({}),[_,s]=r.useState({show:!1}),c=w(S),j=()=>{if(!f(e)){s({show:!0,msg:o("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="adding_prospects_to_the_campaign"&&!e.selectedCampaign){v.error(o("Please select a Campaign","bit-integrations"));return}E({flow:n,allIntegURL:g,conf:e,navigate:u,edit:1,setIsLoading:m,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(y,{snack:_,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:o("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>l(i,e,a),name:"name",value:e.name,type:"text",placeholder:o("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(F,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(L,{formID:n.triggered_entity_id,formFields:c,handleInput:i=>l(i,e,a),woodpeckerConf:e,setWoodpeckerConf:a,loading:x,setLoading:h,isLoading:d,setIsLoading:m,setSnackbar:s}),t.jsx(N,{edit:!0,saveConfig:j,disabled:!f(e),isLoading:d,dataConf:e,setDataConf:a,formFields:c}),t.jsx("br",{})]})}export{G as default};
