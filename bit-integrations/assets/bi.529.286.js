var q=Object.defineProperty;var p=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(a,t,s)=>t in a?q(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,g=(a,t)=>{for(var s in t||(t={}))C.call(t,s)&&f(a,s,t[s]);if(p)for(var s of p(t))S.call(t,s)&&f(a,s,t[s]);return a};import{u as N,r as m,j as r}from"./main-263.js";import"./bi.361.434.js";import{_ as e}from"./bi.924.0.js";import{S as R}from"./bi.428.13.js";import{S as L}from"./bi.733.915.js";import{I,s as w}from"./bi.317.3.js";import A from"./bi.184.190.js";import{R as E}from"./bi.602.766.js";import{h as F}from"./bi.982.765.js";import"./bi.402.9.js";import"./bi.929.11.js";import"./bi.686.14.js";import"./bi.638.705.js";import"./bi.372.711.js";import"./bi.169.669.js";function X({formFields:a,setFlow:t,flow:s,allIntegURL:y}){const v=N(),[b,n]=m.useState(!1),[o,u]=m.useState(1),[k,l]=m.useState({show:!1}),x=[{key:"user_login",label:e("User Name","bit-integrations"),required:!0},{key:"user_email",label:e("Email","bit-integrations"),required:!0},{key:"user_pass",label:e("User Password","bit-integrations"),required:!1},{key:"first_name",label:e("First Name","bit-integrations"),required:!1},{key:"last_name",label:e("Last Name","bit-integrations"),required:!1},{key:"company",label:e("Company","bit-integrations"),required:!1},{key:"address1",label:e("Address Line 1","bit-integrations"),required:!1},{key:"address2",label:e("Address Line 2","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"zip",label:e("Zip","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1}],h=[{key:"add-member-level",label:e("Add the user to a level","bit-integrations")},{key:"remove-member-level",label:e("Remove the user to a level","bit-integrations")}],[i,d]=m.useState({name:"Restrict Content",type:"RestrictContent",field_map:[{formField:"",restrictField:""}],exp_date:"",memberFields:x,actionLists:h,actions:{}}),_=()=>{n(!0),w({flow:s,setFlow:t,allIntegURL:y,conf:i,navigate:v,setIsLoading:n,setSnackbar:l})},j=c=>{i.field_map.length>0&&u(c)};return r.jsxs("div",{children:[r.jsx(R,{snack:k,setSnackbar:l}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(L,{step:3,active:o})}),r.jsx(A,{restrictConf:i,setRestrictConf:d,step:o,setStep:u,isLoading:b,setIsLoading:n,setSnackbar:l}),r.jsxs("div",{className:"btcd-stp-page",style:g({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(E,{formFields:a,handleInput:c=>F(c,i,d),restrictConf:i,setRestrictConf:d,isLoading:b,setIsLoading:n,setSnackbar:l}),r.jsxs("button",{onClick:()=>j(3),disabled:!(i!=null&&i.level_id)&&!(i!=null&&i.member_id),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),r.jsx(I,{step:o,saveConfig:()=>_(),isLoading:b,dataConf:i,setDataConf:d,formFields:a})]})}export{X as default};
