var I=Object.defineProperty;var p=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var g=(a,t,i)=>t in a?I(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i,f=(a,t)=>{for(var i in t||(t={}))j.call(t,i)&&g(a,i,t[i]);if(p)for(var i of p(t))P.call(t,i)&&g(a,i,t[i]);return a};import{u as S,l as N,r as c,j as r}from"./main-29.js";import{_ as e,d as _,I as A,s as F}from"./bi.860.15.js";import{S as M}from"./bi.885.903.js";import{P as w,h as z,c as B}from"./bi.88.834.js";import{B as E}from"./bi.22.698.js";import R from"./bi.788.245.js";import"./bi.600.772.js";import"./bi.831.661.js";import"./bi.392.662.js";import"./bi.244.714.js";function V({formFields:a,setFlow:t,flow:i,allIntegURL:y}){const k=S(),{formID:v}=N(),[d,b]=c.useState(!1),[o,m]=c.useState(1),[C,n]=c.useState({show:!1}),x=[{key:"first_name",label:e("First Name","bit-integrations"),required:!0},{key:"email",label:e("Email","bit-integrations"),required:!0},{key:"mobile",label:e("Mobile","bit-integrations"),required:!1},{key:"org_name",label:e("Organization Name","bit-integrations"),required:!1},{key:"person_id",label:e("Person Id","bit-integrations"),required:!1},{key:"org_id",label:e("Organization Id","bit-integrations"),required:!1},{key:"budget",label:e("Budget","bit-integrations"),required:!1},{key:"currency",label:e("Currency","bit-integrations"),required:!1},{key:"note",label:e("Note","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"region",label:e("State / Province / Region","bit-integrations"),required:!1},{key:"address",label:e("Address","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"zip",label:e("ZIP Code","bit-integrations"),required:!1},{key:"desc",label:e("Description","bit-integrations"),required:!1},{key:"img",label:e("Contact Image","bit-integrations"),required:!1}],h=[{key:"1",label:e("Create lead","bit-integrations")}],[s,l]=c.useState({name:"Propovoice CRM",type:"Propovoice CRM",mainAction:"",field_map:[{formField:"",propovoiceCrmFormField:""}],leadFields:x,allActions:h,actions:{}}),q=u=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),m(3)};return r.jsxs("div",{children:[r.jsx(_,{snack:C,setSnackbar:n}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(M,{step:3,active:o})}),r.jsx(R,{formID:v,propovoiceCrmConf:s,setPropovoiceCrmConf:l,step:o,setStep:m,isLoading:d,setIsLoading:b,setSnackbar:n}),r.jsxs("div",{className:"btcd-stp-page",style:f({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(w,{formFields:a,handleInput:u=>z(u,s,l),propovoiceCrmConf:s,setPropovoiceCrmConf:l,isLoading:d,setIsLoading:b,setSnackbar:n}),r.jsxs("button",{onClick:()=>q(),disabled:!B(s),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),r.jsx(E,{className:"ml-1 rev-icn"})]})]}),r.jsx(A,{step:o,saveConfig:()=>F({flow:i,setFlow:t,allIntegURL:y,conf:s,navigate:k,setIsLoading:b,setSnackbar:n}),isLoading:d,dataConf:s,setDataConf:l,formFields:a})]})}export{V as default};
