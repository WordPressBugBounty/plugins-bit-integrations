var _=Object.defineProperty;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(a,e,t)=>e in a?_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,x=(a,e)=>{for(var t in e||(e={}))w.call(e,t)&&f(a,t,e[t]);if(u)for(var t of u(e))C.call(e,t)&&f(a,t,e[t]);return a};import{u as N,l as T,r as c,j as i}from"./main-692.js";import{_ as r,d as q,I as D,s as E}from"./bi.751.13.js";import{S as F}from"./bi.579.899.js";import{h as L}from"./bi.517.778.js";import P from"./bi.864.216.js";import{M as R}from"./bi.186.777.js";import"./bi.244.694.js";import"./bi.719.710.js";import"./bi.588.657.js";import"./bi.294.658.js";function Y({formFields:a,setFlow:e,flow:t,allIntegURL:p,isInfo:g,edit:h}){const v=N(),{formID:j}=T(),[n,d]=c.useState(!1),[o,b]=c.useState(1),[y,m]=c.useState({show:!1}),k=[{key:"1",label:r("Add the user to a membership","bit-integrations")},{key:"2",label:r("Remove the user from a membership","bit-integrations")}],S=[{key:"sub_total",label:r("Sub Total","bit-integrations"),required:!1},{key:"tax_amount",label:r("Tax Amount","bit-integrations"),required:!1},{key:"taxrate",label:r("Tax Rate","bit-integrations"),required:!1},{key:"expiration_date",label:r("Expiration Date","bit-integrations"),required:!1}],[s,l]=c.useState({name:"Memberpress",type:"Memberpress",mainAction:"",field_map:[{formField:"",memberpressFormField:""}],allActions:k,memberpressFields:S,actions:{}}),A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),s.mainAction!==""&&b(3)};function I(){switch(s.mainAction){case"1":return s.statusId===void 0||s.gatewayId===void 0||s.selectedMembership===void 0;default:return!1}}return i.jsxs("div",{children:[i.jsx(q,{snack:y,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(F,{step:3,active:o})}),i.jsx(P,{formID:j,memberpressConf:s,setMemberpressConf:l,step:o,setStep:b,isLoading:n,setIsLoading:d,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:x({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(R,{formFields:a,handleInput:M=>L(M,s,l),memberpressConf:s,setMemberpressConf:l,isLoading:n,setIsLoading:d,setSnackbar:m,allIntegURL:p,isInfo:g,edit:h}),i.jsxs("button",{onClick:()=>A(),disabled:!s.mainAction||n||I(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[r("Next","bit-integrations")," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),i.jsx(D,{step:o,saveConfig:()=>E({flow:t,setFlow:e,allIntegURL:p,navigate:v,conf:s,setIsLoading:d,setSnackbar:m}),isLoading:n,dataConf:s,setDataConf:l,formFields:a})]})}export{Y as default};
