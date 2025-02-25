import{u as S,o as h,e as m,r as l,f as I,j as r}from"./main-212.js";import{$ as y,f as N,g as R,_ as t,n as s}from"./bi.717.0.js";import{S as _}from"./bi.954.13.js";import"./bi.894.440.js";import{S as w,I as L,s as v}from"./bi.164.3.js";import{h as f,c as u}from"./bi.401.903.js";import{P as F}from"./bi.733.904.js";import"./bi.303.9.js";import"./bi.830.11.js";import"./bi.914.14.js";function z({allIntegURL:g}){const p=S();h();const[n,M]=m(y),[e,i]=m(N),[b,d]=l.useState(!1),[x,P]=l.useState({}),[j,a]=l.useState({show:!1}),c=I(R),C=()=>{if(!u(e)){a({show:!0,msg:t("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="contact"&&!e.selectedCustomer){s.error(t("Please select a Customer","bit-integrations"));return}if(e.actionName==="lead"&&(!e.selectedLeadStatusId||!e.selectedLeadSourceId||!e.selectedStaff)){s.error(t("Lead Status Id and Lead Source Id are required!","bit-integrations"));return}if(e.actionName==="project"){if(!e.selectedProjectStatus){s.error(t("Please select Project status","bit-integrations"));return}if(!e.selectedProjectType){s.error(t("Please select Project Related With...","bit-integrations"));return}if(!e.selectedbillingType){s.error(t("Please select a Billing type","bit-integrations"));return}if(!e.selectedCustomer){s.error(t("Please select a Customer","bit-integrations"));return}if(Number(e.selectedbillingType)===1&&!e.totalRate){s.error(t("Please select a Total Rate","bit-integrations"));return}if(Number(e.selectedbillingType)===2&&!e.ratePerHour){s.error(t("Please select a Rate Per Hour","bit-integrations"));return}}v({flow:n,allIntegURL:g,conf:e,navigate:p,edit:1,setIsLoading:d,setSnackbar:a})};return r.jsxs("div",{style:{width:900},children:[r.jsx(_,{snack:j,setSnackbar:a}),r.jsxs("div",{className:"flx mt-3",children:[r.jsx("b",{className:"wdt-200 d-in-b",children:t("Integration Name:","bit-integrations")}),r.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,i),name:"name",value:e.name,type:"text",placeholder:t("Integration Name...","bit-integrations")})]}),r.jsx("br",{}),r.jsx(w,{entity:n.triggered_entity,setSnackbar:a}),r.jsx(F,{formID:n.triggered_entity_id,formFields:c,handleInput:o=>f(o,e,i),perfexCRMConf:e,setPerfexCRMConf:i,loading:x,setLoading:P,setIsLoading:d,setSnackbar:a}),r.jsx(L,{edit:!0,saveConfig:C,disabled:!u(e),isLoading:b,dataConf:e,setDataConf:i,formFields:c}),r.jsx("br",{})]})}export{z as default};
