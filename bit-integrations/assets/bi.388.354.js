import{u as y,o as k,r,j as t}from"./main-270.js";import{_ as a,d as N}from"./bi.340.0.js";import"./bi.88.440.js";import{B as C}from"./bi.448.736.js";import{S as A}from"./bi.218.13.js";import{S as _}from"./bi.337.950.js";import{m as w,I as E,s as F}from"./bi.155.3.js";import{h as M,c as T}from"./bi.185.805.js";import{S as L}from"./bi.909.806.js";import P from"./bi.76.213.js";import"./bi.724.9.js";import"./bi.209.11.js";import"./bi.117.14.js";import"./bi.125.697.js";import"./bi.128.698.js";import"./bi.104.742.js";function Z({formFields:b,setFlow:g,flow:f,allIntegURL:v}){const S=y(),{formID:m}=k(),[o,c]=r.useState(!1),[s,p]=r.useState(1),[x,n]=r.useState({show:!1}),d=[{label:a("Create Contact","bit-integrations"),value:"contact-create"},{label:a("Create lead","bit-integrations"),value:"lead-create"},{label:a("Create Account","bit-integrations"),value:"account-create"},{label:a("Create Campaign","bit-integrations"),value:"campaign-create"},{label:a("Add campaign member","bit-integrations"),value:"add-campaign-member"},{label:a("Create Task","bit-integrations"),value:"task-create"},{label:a("Oportunity Create","bit-integrations"),value:"opportunity-create"},{label:a("Event Create","bit-integrations"),value:"event-create"},{label:a("Create Case","bit-integrations"),value:"case-create"}],[e,l]=r.useState({name:"Salesforce",type:"Salesforce",clientId:"",clientSecret:"",field_map:[{formField:"",selesforceField:""}],selesforceActionModules:d,action_modules:d,actions:{}});r.useEffect(()=>{window.opener&&w("salesforce")},[]);const h=["contact-create","lead-create","account-create","campaign-create","opportunity-create","event-create","case-create"].includes(e==null?void 0:e.actionName),j=i=>{if(h&&!T(e)){N.error("Please map mandatory fields !");return}p(i)},I=()=>{var i,u;if((e==null?void 0:e.actionName)==="opportunity-create")return!((i=e.actions)!=null&&i.opportunityStageId);if((e==null?void 0:e.actionName)==="event-create")return!((u=e.actions)!=null&&u.eventSubjectId);if((e==null?void 0:e.actionName)==="add-campaign-member")return!e.campaignId};return t.jsxs("div",{children:[t.jsx(A,{snack:x,setSnackbar:n}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(_,{step:3,active:s})}),t.jsx(P,{formID:m,salesforceConf:e,setSalesforceConf:l,step:s,setStep:p,isLoading:o,setIsLoading:c,setSnackbar:n}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[t.jsx(L,{formID:m,formFields:b,handleInput:i=>M(i,e,l),salesforceConf:e,setSalesforceConf:l,isLoading:o,setIsLoading:c,setSnackbar:n}),t.jsxs("button",{onClick:()=>j(3),disabled:I()||o,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[a("Next","bit-integrations"),t.jsx(C,{className:"ml-1 rev-icn"})]})]}),t.jsx(E,{step:s,saveConfig:()=>F({flow:f,setFlow:g,allIntegURL:v,navigate:S,conf:e,setIsLoading:c,setSnackbar:n})})]})}export{Z as default};
