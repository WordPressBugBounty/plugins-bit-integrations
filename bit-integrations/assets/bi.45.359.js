var _=Object.defineProperty;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(a,e,t)=>e in a?_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,x=(a,e)=>{for(var t in e||(e={}))w.call(e,t)&&f(a,t,e[t]);if(u)for(var t of u(e))C.call(e,t)&&f(a,t,e[t]);return a};import{u as N,o as T,r as p,j as i}from"./main-263.js";import"./bi.361.434.js";import{_ as r}from"./bi.924.0.js";import{S as q}from"./bi.428.13.js";import{S as D}from"./bi.733.915.js";import{I as E,s as F}from"./bi.317.3.js";import{h as L}from"./bi.719.789.js";import P from"./bi.79.219.js";import{M as R}from"./bi.535.788.js";import"./bi.402.9.js";import"./bi.929.11.js";import"./bi.686.14.js";import"./bi.638.705.js";import"./bi.372.711.js";import"./bi.885.668.js";import"./bi.169.669.js";function se({formFields:a,setFlow:e,flow:t,allIntegURL:d,isInfo:g,edit:h}){const v=N(),{formID:j}=T(),[o,c]=p.useState(!1),[n,b]=p.useState(1),[y,m]=p.useState({show:!1}),S=[{key:"1",label:r("Add the user to a membership","bit-integrations")},{key:"2",label:r("Remove the user from a membership","bit-integrations")}],k=[{key:"sub_total",label:r("Sub Total","bit-integrations"),required:!1},{key:"tax_amount",label:r("Tax Amount","bit-integrations"),required:!1},{key:"taxrate",label:r("Tax Rate","bit-integrations"),required:!1},{key:"expiration_date",label:r("Expiration Date","bit-integrations"),required:!1}],[s,l]=p.useState({name:"Memberpress",type:"Memberpress",mainAction:"",field_map:[{formField:"",memberpressFormField:""}],allActions:S,memberpressFields:k,actions:{}}),A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),s.mainAction!==""&&b(3)};function I(){switch(s.mainAction){case"1":return s.statusId===void 0||s.gatewayId===void 0||s.selectedMembership===void 0;default:return!1}}return i.jsxs("div",{children:[i.jsx(q,{snack:y,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(D,{step:3,active:n})}),i.jsx(P,{formID:j,memberpressConf:s,setMemberpressConf:l,step:n,setStep:b,isLoading:o,setIsLoading:c,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:x({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(R,{formFields:a,handleInput:M=>L(M,s,l),memberpressConf:s,setMemberpressConf:l,isLoading:o,setIsLoading:c,setSnackbar:m,allIntegURL:d,isInfo:g,edit:h}),i.jsxs("button",{onClick:()=>A(),disabled:!s.mainAction||o||I(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[r("Next","bit-integrations")," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),i.jsx(E,{step:n,saveConfig:()=>F({flow:t,setFlow:e,allIntegURL:d,navigate:v,conf:s,setIsLoading:c,setSnackbar:m}),isLoading:o,dataConf:s,setDataConf:l,formFields:a})]})}export{se as default};
