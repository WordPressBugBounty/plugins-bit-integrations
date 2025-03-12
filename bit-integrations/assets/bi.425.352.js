var j=Object.defineProperty;var g=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(o,t,a)=>t in o?j(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,d=(o,t)=>{for(var a in t||(t={}))N.call(t,a)&&f(o,a,t[a]);if(g)for(var a of g(t))S.call(t,a)&&f(o,a,t[a]);return o};import{u as q,o as w,r,j as i}from"./main-794.js";import"./bi.266.440.js";import{_ as e}from"./bi.828.0.js";import{S as G}from"./bi.961.13.js";import{S as I}from"./bi.552.957.js";import{s as _}from"./bi.90.729.js";import{I as A,s as F}from"./bi.499.3.js";import L from"./bi.824.211.js";import{c as E}from"./bi.932.807.js";import{G as z}from"./bi.280.808.js";import"./bi.685.9.js";import"./bi.690.11.js";import"./bi.811.14.js";import"./bi.510.749.js";import"./bi.257.704.js";import"./bi.35.705.js";function $({formFields:o,setFlow:t,flow:a,allIntegURL:k}){const y=q(),{flowID:b}=w(),[l,p]=r.useState(!1),[n,u]=r.useState(1),[h,c]=r.useState({show:!1}),x=[{key:"1",label:e("Create a contact","bit-integrations")},{key:"2",label:e("Update a contact","bit-integrations")}],C=[{key:"phoneNumber",label:e("Phone Number","bit-integrations"),required:!0},{key:"name",label:e("First Name","bit-integrations"),required:!0},{key:"lastName",label:e("Last Name","bit-integrations"),required:!0},{key:"biographies",label:e("Biographies","bit-integrations"),required:!1},{key:"nickname",label:e("Nickname","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"locations",label:e("Locations","bit-integrations"),required:!1},{key:"email",label:e("Email","bit-integrations"),required:!1},{key:"occupation",label:e("Occupation","bit-integrations"),required:!1},{key:"organization",label:e("Organization","bit-integrations"),required:!1}],[s,m]=r.useState({name:"Google Contacts",type:"Google Contacts",mainAction:"",clientId:"",clientSecret:"",field_map:[{formField:"",googleContactsFormField:""}],default:C,allActions:x,actions:{}});r.useEffect(()=>{window.opener&&_("googleContacts")},[]);const v=()=>{F({flow:a,setFlow:t,allIntegURL:k,conf:s,navigate:y,setIsLoading:p,setSnackbar:c})};return i.jsxs("div",{children:[i.jsx(G,{snack:h,setSnackbar:c}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(I,{step:3,active:n})}),i.jsx(L,{flowID:b,googleContactsConf:s,setGoogleContactsConf:m,step:n,setStep:u,isLoading:l,setIsLoading:p,setSnackbar:c}),i.jsx("div",{className:"btcd-stp-page",style:d({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:i.jsx(z,{flowID:b,formFields:o,googleContactsConf:s,setGoogleContactsConf:m})}),i.jsx(A,{step:n,saveConfig:()=>v(),isLoading:l,dataConf:s,setDataConf:m,formFields:o}),i.jsx("div",{className:"btcd-stp-page",style:d({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:i.jsxs("button",{onClick:()=>u(3),disabled:!E(s==null?void 0:s.field_map)||s.mainAction===""||l,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})})]})}export{$ as default};
