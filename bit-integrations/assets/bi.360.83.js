import{u as y,e as p,r as l,i as C,j as a}from"./main-29.js";import{$ as I,g as S,h as _,A as N,d as w,_ as t,i as A,I as F,c as k,s as E}from"./bi.860.15.js";import{g as M,h as g,c as $}from"./bi.378.766.js";import{S as L}from"./bi.729.767.js";import"./bi.831.661.js";import"./bi.392.662.js";function B({allIntegURL:b}){const v=y(),[d,R]=p(I),[e,n]=p(S),[o,c]=l.useState(!1),[x,r]=l.useState({show:!1}),m=C(_);l.useEffect(()=>{e.action_modules||(n(i=>N(i,s=>{const u=[{label:t("Create Contact","bit-integrations"),value:"contact-create"},{label:t("Create lead","bit-integrations"),value:"lead-create"},{label:t("Create Account","bit-integrations"),value:"account-create"},{label:t("Create Campaign","bit-integrations"),value:"campaign-create"},{label:t("Add campaign member","bit-integrations"),value:"add-campaign-member"},{label:t("Create Task","bit-integrations"),value:"task-create"},{label:t("Oportunity Create","bit-integrations"),value:"opportunity-create"},{label:t("Event Create","bit-integrations"),value:"event-create"},{label:t("Create Case","bit-integrations"),value:"case-create"}];s.action_modules=u,s.selesforceActionModules=u})),M(e,n,c))},[]);const f=["contact-create","lead-create","account-create","campaign-create","opportunity-create","event-create","case-create"].includes(e==null?void 0:e.actionName),h=()=>{if(f&&!$(e)){k.error("Please map mandatory fields !");return}E({flow:d,allIntegURL:b,conf:e,navigate:v,edit:1,setIsLoading:c,setSnackbar:r})},j=()=>{var i,s;if((e==null?void 0:e.actionName)==="opportunity-create")return!((i=e.actions)!=null&&i.opportunityStageId);if((e==null?void 0:e.actionName)==="event-create")return!((s=e.actions)!=null&&s.eventSubjectId);if((e==null?void 0:e.actionName)==="add-campaign-member")return!e.campaignId};return a.jsxs("div",{style:{width:900},children:[a.jsx(w,{snack:x,setSnackbar:r}),a.jsxs("div",{className:"flx mt-3",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:t("Integration Name:","bit-integrations")}),a.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>g(i,e,n),name:"name",value:e.name,type:"text",placeholder:t("Integration Name...","bit-integrations")})]}),a.jsx("br",{}),a.jsx(A,{entity:d.triggered_entity,setSnackbar:r}),a.jsx(L,{formFields:m,handleInput:i=>g(i,e,n),salesforceConf:e,setSalesforceConf:n,isLoading:o,setIsLoading:c,setSnackbar:r}),a.jsx(F,{edit:!0,saveConfig:h,disabled:j()||o,isLoading:o,dataConf:e,setDataConf:n,formFields:m}),a.jsx("br",{})]})}export{B as default};
