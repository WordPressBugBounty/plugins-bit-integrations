var y=Object.defineProperty;var f=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var u=(a,t,e)=>t in a?y(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,g=(a,t)=>{for(var e in t||(t={}))N.call(t,e)&&u(a,e,t[e]);if(f)for(var e of f(t))k.call(t,e)&&u(a,e,t[e]);return a};import{u as C,r as m,j as s}from"./main-288.js";import"./bi.197.434.js";import{_ as o,d as S}from"./bi.4.0.js";import{S as _}from"./bi.982.916.js";import{I,s as w}from"./bi.826.3.js";import F from"./bi.661.188.js";import{h as L,c as q}from"./bi.58.727.js";import{E as T}from"./bi.600.728.js";import"./bi.627.9.js";import"./bi.470.13.js";import"./bi.147.11.js";import"./bi.223.14.js";import"./bi.684.706.js";import"./bi.255.712.js";import"./bi.294.669.js";import"./bi.335.670.js";function Z({formFields:a,setFlow:t,flow:e,allIntegURL:E}){const b=C(),[c,r]=m.useState(!1),[n,d]=m.useState(1),[A,h]=m.useState({show:!1}),x=[{key:"Email",label:o("Email","bit-integrations"),required:!0},{key:"FirstName",label:o("FirstName","bit-integrations"),required:!1},{key:"LastName",label:o("LastName","bit-integrations"),required:!1}],[i,l]=m.useState({name:"Elastic Email",type:"ElasticEmail",api_key:"",field_map:[{formField:"",elasticEmailField:""}],actions:{},elasticEmailFields:x}),v=()=>{r(!0),w({flow:e,setFlow:t,allIntegURL:E,conf:i,navigate:b,setIsLoading:r,setSnackbar:h})},j=p=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!q(i)){S.error(o("Please map mandatory fields","bit-integrations"));return}i.field_map.length>0&&d(p)};return s.jsxs("div",{children:[s.jsx("div",{className:"txt-center mt-2",children:s.jsx(_,{step:3,active:n})}),s.jsx(F,{elasticEmailConf:i,setElasticEmailConf:l,step:n,setstep:d,isLoading:c,setIsLoading:r}),s.jsxs("div",{className:"btcd-stp-page",style:g({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[s.jsx(T,{formFields:a,handleInput:p=>L(p,i,l),elasticEmailConf:i,setElasticEmailConf:l,isLoading:c,setIsLoading:r}),s.jsxs("button",{onClick:()=>j(3),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[o("Next","bit-integrations"),"  ",s.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),s.jsx(I,{step:n,saveConfig:()=>v(),isLoading:c,dataConf:i,setDataConf:l,formFields:a})]})}export{Z as default};
