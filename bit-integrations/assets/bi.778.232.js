import{u as b,l as C,e as m,r,i as w,j as t}from"./main-165.js";import{$ as I,g as k,h as v,d as y,_ as n,i as F,I as N,W as S,s as W}from"./bi.312.95.js";import{h as p,c as g}from"./bi.978.949.js";import{W as E}from"./bi.658.950.js";function M({allIntegURL:f}){const u=b();C();const[o,L]=m(I),[e,a]=m(k),[d,c]=r.useState(!1),[x,h]=r.useState({}),[_,s]=r.useState({show:!1}),l=w(v),j=()=>{if(!g(e)){s({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="adding_prospects_to_the_campaign"&&!e.selectedCampaign){S.error(n("Please select a Campaign","bit-integrations"));return}W({flow:o,allIntegURL:f,conf:e,navigate:u,edit:1,setIsLoading:c,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(y,{snack:_,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>p(i,e,a),name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(F,{entity:o.triggered_entity,setSnackbar:s}),t.jsx(E,{formID:o.triggered_entity_id,formFields:l,handleInput:i=>p(i,e,a),woodpeckerConf:e,setWoodpeckerConf:a,loading:x,setLoading:h,isLoading:d,setIsLoading:c,setSnackbar:s}),t.jsx(N,{edit:!0,saveConfig:j,disabled:!g(e),isLoading:d,dataConf:e,setDataConf:a,formFields:l}),t.jsx("br",{})]})}export{M as default};
