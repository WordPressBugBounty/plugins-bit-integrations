var x=Object.defineProperty;var p=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var c=(i,e,t)=>e in i?x(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,u=(i,e)=>{for(var t in e||(e={}))h.call(e,t)&&c(i,t,e[t]);if(p)for(var t of p(e))k.call(e,t)&&c(i,t,e[t]);return i};import{u as j,r as l,j as a}from"./main-494.js";import{_ as o}from"./bi.185.0.js";import{S as _}from"./bi.719.924.js";import{I as N}from"./bi.104.3.js";import K from"./bi.433.213.js";import{n as S,c as C}from"./bi.907.784.js";import{K as F}from"./bi.304.785.js";import"./bi.107.13.js";import"./bi.23.437.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.136.701.js";import"./bi.378.675.js";import"./bi.950.676.js";function M({formFields:i,setFlow:e,flow:t,allIntegURL:b}){const g=j(),[v,y]=l.useState(!1),[m,d]=l.useState({list:!1,field:!1,auth:!1}),[r,f]=l.useState(1),[s,n]=l.useState({name:"Klaviyo",type:"Klaviyo",authKey:"",field_map:[{formField:"",klaviyoFormField:""}],custom_field_map:[{formField:"",klaviyoFormField:""}],klaviyoFields:[{key:"email",label:o("Email","bit-integrations"),required:!0},{key:"first_name",label:o("First Name","bit-integrations"),required:!1},{key:"last_name",label:o("Last Name","bit-integrations"),required:!1},{key:"title",label:o("Title","bit-integrations"),required:!1},{key:"organization",label:o("Organization","bit-integrations"),required:!1},{key:"phone_number",label:o("Phone Number","bit-integrations"),required:!1}],listId:"",actions:{}});return a.jsxs("div",{children:[a.jsx("div",{className:"txt-center mt-2",children:a.jsx(_,{step:3,active:r})}),a.jsx(K,{klaviyoConf:s,setKlaviyoConf:n,loading:m,setLoading:d,step:r,setStep:f}),a.jsxs("div",{className:"btcd-stp-page",style:u({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(F,{formFields:i,klaviyoConf:s,setKlaviyoConf:n,loading:m,setLoading:d}),a.jsxs("button",{onClick:()=>S(s,f,3),disabled:!s.listId||s.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[o("Next","bit-integrations")," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(N,{step:r,saveConfig:()=>C(t,e,b,s,g,y),isLoading:v,dataConf:s,setDataConf:n,formFields:i})]})}export{M as default};
