import{u as j,e as u,r as l,f as y,j as a}from"./main-34.js";import{$ as C,f as I,g as _,_ as t,d as N}from"./bi.671.0.js";import{S as w}from"./bi.213.13.js";import{u as F}from"./bi.188.437.js";import{S as k,I as A,s as E}from"./bi.633.3.js";import{g as M,h as g,c as $}from"./bi.683.780.js";import{S as L}from"./bi.382.781.js";import"./bi.914.9.js";import"./bi.22.11.js";import"./bi.690.14.js";import"./bi.623.673.js";import"./bi.808.674.js";function U({allIntegURL:b}){const f=j(),[m,R]=u(C),[e,n]=u(I),[o,c]=l.useState(!1),[v,s]=l.useState({show:!1}),d=y(_);l.useEffect(()=>{e.action_modules||(n(i=>F(i,r=>{const p=[{label:t("Create Contact","bit-integrations"),value:"contact-create"},{label:t("Create lead","bit-integrations"),value:"lead-create"},{label:t("Create Account","bit-integrations"),value:"account-create"},{label:t("Create Campaign","bit-integrations"),value:"campaign-create"},{label:t("Add campaign member","bit-integrations"),value:"add-campaign-member"},{label:t("Create Task","bit-integrations"),value:"task-create"},{label:t("Oportunity Create","bit-integrations"),value:"opportunity-create"},{label:t("Event Create","bit-integrations"),value:"event-create"},{label:t("Create Case","bit-integrations"),value:"case-create"}];r.action_modules=p,r.selesforceActionModules=p})),M(e,n,c))},[]);const x=["contact-create","lead-create","account-create","campaign-create","opportunity-create","event-create","case-create"].includes(e==null?void 0:e.actionName),S=()=>{if(x&&!$(e)){N.error("Please map mandatory fields !");return}E({flow:m,allIntegURL:b,conf:e,navigate:f,edit:1,setIsLoading:c,setSnackbar:s})},h=()=>{var i,r;if((e==null?void 0:e.actionName)==="opportunity-create")return!((i=e.actions)!=null&&i.opportunityStageId);if((e==null?void 0:e.actionName)==="event-create")return!((r=e.actions)!=null&&r.eventSubjectId);if((e==null?void 0:e.actionName)==="add-campaign-member")return!e.campaignId};return a.jsxs("div",{style:{width:900},children:[a.jsx(w,{snack:v,setSnackbar:s}),a.jsxs("div",{className:"flx mt-3",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:t("Integration Name:","bit-integrations")}),a.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>g(i,e,n),name:"name",value:e.name,type:"text",placeholder:t("Integration Name...","bit-integrations")})]}),a.jsx("br",{}),a.jsx(k,{entity:m.triggered_entity,setSnackbar:s}),a.jsx(L,{formFields:d,handleInput:i=>g(i,e,n),salesforceConf:e,setSalesforceConf:n,isLoading:o,setIsLoading:c,setSnackbar:s}),a.jsx(A,{edit:!0,saveConfig:S,disabled:h()||o,isLoading:o,dataConf:e,setDataConf:n,formFields:d}),a.jsx("br",{})]})}export{U as default};