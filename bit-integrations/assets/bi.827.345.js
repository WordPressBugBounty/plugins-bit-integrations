var j=Object.defineProperty;var p=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var f=(s,t,a)=>t in s?j(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,b=(s,t)=>{for(var a in t||(t={}))N.call(t,a)&&f(s,a,t[a]);if(p)for(var a of p(t))q.call(t,a)&&f(s,a,t[a]);return s};import{u as S,l as w,r,j as i}from"./main-650.js";import{_ as e,d as G,I,s as _}from"./bi.541.15.js";import{S as A}from"./bi.326.902.js";import{s as F}from"./bi.818.684.js";import L from"./bi.905.208.js";import{c as E}from"./bi.868.760.js";import{G as z}from"./bi.116.761.js";import"./bi.770.713.js";import"./bi.619.660.js";import"./bi.119.661.js";function Q({formFields:s,setFlow:t,flow:a,allIntegURL:k}){const y=S(),{flowID:m}=w(),[l,u]=r.useState(!1),[n,g]=r.useState(1),[h,c]=r.useState({show:!1}),x=[{key:"1",label:e("Create a contact","bit-integrations")},{key:"2",label:e("Update a contact","bit-integrations")}],C=[{key:"phoneNumber",label:e("Phone Number","bit-integrations"),required:!0},{key:"name",label:e("First Name","bit-integrations"),required:!0},{key:"lastName",label:e("Last Name","bit-integrations"),required:!0},{key:"biographies",label:e("Biographies","bit-integrations"),required:!1},{key:"nickname",label:e("Nickname","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"locations",label:e("Locations","bit-integrations"),required:!1},{key:"email",label:e("Email","bit-integrations"),required:!1},{key:"occupation",label:e("Occupation","bit-integrations"),required:!1},{key:"organization",label:e("Organization","bit-integrations"),required:!1}],[o,d]=r.useState({name:"Google Contacts",type:"Google Contacts",mainAction:"",clientId:"",clientSecret:"",field_map:[{formField:"",googleContactsFormField:""}],default:C,allActions:x,actions:{}});r.useEffect(()=>{window.opener&&F("googleContacts")},[]);const v=()=>{_({flow:a,setFlow:t,allIntegURL:k,conf:o,navigate:y,setIsLoading:u,setSnackbar:c})};return i.jsxs("div",{children:[i.jsx(G,{snack:h,setSnackbar:c}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(A,{step:3,active:n})}),i.jsx(L,{flowID:m,googleContactsConf:o,setGoogleContactsConf:d,step:n,setStep:g,isLoading:l,setIsLoading:u,setSnackbar:c}),i.jsx("div",{className:"btcd-stp-page",style:b({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:i.jsx(z,{flowID:m,formFields:s,googleContactsConf:o,setGoogleContactsConf:d})}),i.jsx(I,{step:n,saveConfig:()=>v(),isLoading:l,dataConf:o,setDataConf:d,formFields:s}),i.jsx("div",{className:"btcd-stp-page",style:b({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:i.jsxs("button",{onClick:()=>g(3),disabled:!E(o==null?void 0:o.field_map)||o.mainAction===""||l,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})})]})}export{Q as default};
