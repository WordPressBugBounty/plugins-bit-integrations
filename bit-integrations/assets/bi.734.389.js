var I=Object.defineProperty;var u=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var g=(r,t,i)=>t in r?I(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,f=(r,t)=>{for(var i in t||(t={}))j.call(t,i)&&g(r,i,t[i]);if(u)for(var i of u(t))P.call(t,i)&&g(r,i,t[i]);return r};import{u as S,o as N,r as c,j as a}from"./main-34.js";import"./bi.188.437.js";import{_ as e}from"./bi.671.0.js";import{S as _}from"./bi.213.13.js";import{S as A}from"./bi.851.922.js";import{I as F,s as M}from"./bi.633.3.js";import{P as w,h as z,c as B}from"./bi.657.847.js";import{B as E}from"./bi.886.697.js";import R from"./bi.564.247.js";import"./bi.914.9.js";import"./bi.22.11.js";import"./bi.690.14.js";import"./bi.120.698.js";import"./bi.623.673.js";import"./bi.808.674.js";import"./bi.379.699.js";function te({formFields:r,setFlow:t,flow:i,allIntegURL:y}){const k=S(),{formID:v}=N(),[d,m]=c.useState(!1),[s,p]=c.useState(1),[C,n]=c.useState({show:!1}),x=[{key:"first_name",label:e("First Name","bit-integrations"),required:!0},{key:"email",label:e("Email","bit-integrations"),required:!0},{key:"mobile",label:e("Mobile","bit-integrations"),required:!1},{key:"org_name",label:e("Organization Name","bit-integrations"),required:!1},{key:"person_id",label:e("Person Id","bit-integrations"),required:!1},{key:"org_id",label:e("Organization Id","bit-integrations"),required:!1},{key:"budget",label:e("Budget","bit-integrations"),required:!1},{key:"currency",label:e("Currency","bit-integrations"),required:!1},{key:"note",label:e("Note","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"region",label:e("State / Province / Region","bit-integrations"),required:!1},{key:"address",label:e("Address","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"zip",label:e("ZIP Code","bit-integrations"),required:!1},{key:"desc",label:e("Description","bit-integrations"),required:!1},{key:"img",label:e("Contact Image","bit-integrations"),required:!1}],h=[{key:"1",label:e("Create lead","bit-integrations")}],[o,l]=c.useState({name:"Propovoice CRM",type:"Propovoice CRM",mainAction:"",field_map:[{formField:"",propovoiceCrmFormField:""}],leadFields:x,allActions:h,actions:{}}),q=b=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),p(3)};return a.jsxs("div",{children:[a.jsx(_,{snack:C,setSnackbar:n}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(A,{step:3,active:s})}),a.jsx(R,{formID:v,propovoiceCrmConf:o,setPropovoiceCrmConf:l,step:s,setStep:p,isLoading:d,setIsLoading:m,setSnackbar:n}),a.jsxs("div",{className:"btcd-stp-page",style:f({},s===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(w,{formFields:r,handleInput:b=>z(b,o,l),propovoiceCrmConf:o,setPropovoiceCrmConf:l,isLoading:d,setIsLoading:m,setSnackbar:n}),a.jsxs("button",{onClick:()=>q(),disabled:!B(o),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),a.jsx(E,{className:"ml-1 rev-icn"})]})]}),a.jsx(F,{step:s,saveConfig:()=>M({flow:i,setFlow:t,allIntegURL:y,conf:o,navigate:k,setIsLoading:m,setSnackbar:n}),isLoading:d,dataConf:o,setDataConf:l,formFields:r})]})}export{te as default};
