import{u as C,o as F,r as i,j as t}from"./main-794.js";import"./bi.266.440.js";import{B as I}from"./bi.944.743.js";import{_ as l}from"./bi.828.0.js";import{S as N}from"./bi.961.13.js";import{S as v}from"./bi.552.957.js";import{I as _,g as k}from"./bi.499.3.js";import w from"./bi.841.187.js";import{F as y,c as L}from"./bi.133.750.js";import"./bi.685.9.js";import"./bi.690.11.js";import"./bi.811.14.js";import"./bi.510.749.js";import"./bi.591.710.js";import"./bi.257.704.js";import"./bi.35.705.js";function Q({formFields:c,setFlow:g,flow:f,allIntegURL:x}){const h=C(),{formID:p}=F(),[n,o]=i.useState(!1),[b,j]=i.useState({}),[s,u]=i.useState(1),[S,a]=i.useState({show:!1}),[e,r]=i.useState({name:"Fluent CRM",type:"Fluent Crm",actionName:"",field_map:[{formField:"",fluentCRMField:""}],actions:{}}),d=m=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),m===3){if(!L(e)){a({show:!0,msg:l("Please map all required fields to continue.","bit-integrations")});return}if((e==null?void 0:e.actionName)==="add-user"&&!e.list_id){a({show:!0,msg:l("Please select list to continue.","bit-integrations")});return}e.name!==""&&e.field_map.length>0&&u(m)}else u(m)};return t.jsxs("div",{children:[t.jsx(N,{snack:S,setSnackbar:a}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(v,{step:3,active:s})}),t.jsx(w,{formID:p,fluentCrmConf:e,setFluentCrmConf:r,step:s,nextPage:d,isLoading:n,setIsLoading:o,setSnackbar:a}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto",minHeight:s===2&&"200px"},children:[t.jsx(y,{formID:p,formFields:c,fluentCrmConf:e,setFluentCrmConf:r,isLoading:n,setIsLoading:o,loading:b,setLoading:j,setSnackbar:a}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>d(3),disabled:e.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[l("Next","bit-integrations"),t.jsx(I,{className:"ml-1 rev-icn"})]})]}),t.jsx(_,{step:s,saveConfig:()=>k(f,g,x,e,h,"","",o),isLoading:n,dataConf:e,setDataConf:r,formFields:c})]})}export{Q as default};
