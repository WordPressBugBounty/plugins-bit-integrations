var y=Object.defineProperty;var f=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var h=(s,e,t)=>e in s?y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,u=(s,e)=>{for(var t in e||(e={}))A.call(e,t)&&h(s,t,e[t]);if(f)for(var t of f(e))C.call(e,t)&&h(s,t,e[t]);return s};import{u as I,o as N,r as c,j as i}from"./main-288.js";import"./bi.197.434.js";import{_ as d}from"./bi.4.0.js";import{S as w}from"./bi.470.13.js";import{S as _}from"./bi.982.916.js";import{I as E,s as T}from"./bi.826.3.js";import{P as D,h as F}from"./bi.987.793.js";import L from"./bi.417.165.js";import"./bi.627.9.js";import"./bi.147.11.js";import"./bi.223.14.js";import"./bi.684.706.js";import"./bi.255.712.js";function Z({formFields:s,setFlow:e,flow:t,allIntegURL:l,isInfo:x,edit:g}){const P=I(),{formID:v}=N(),[a,r]=c.useState(!1),[n,b]=c.useState(1),[j,m]=c.useState({show:!1}),S=[{key:"1",label:d("Add the user to a membership","bit-integrations")},{key:"2",label:d("Remove the user from a membership","bit-integrations")}],[o,p]=c.useState({name:"Paid Membership Pro",type:"PaidMembershipPro",mainAction:"",field_map:[{formField:"",paidmembershipproFormField:""}],allActions:S,actions:{}}),M=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),o.mainAction!==""&&b(3)};return i.jsxs("div",{children:[i.jsx(w,{snack:j,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(_,{step:3,active:n})}),i.jsx(L,{formID:v,paidMembershipProConf:o,setPaidMembershipProConf:p,step:n,setStep:b,isLoading:a,setIsLoading:r,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:u({},n===2&&{width:900,minHeight:"350px",overflow:"visible"}),children:[i.jsx(D,{formFields:s,handleInput:k=>F(k,o,p,r),paidMembershipProConf:o,setPaidMembershipProConf:p,isLoading:a,setIsLoading:r,setSnackbar:m,allIntegURL:l,isInfo:x,edit:g}),i.jsxs("button",{onClick:()=>M(),disabled:!o.mainAction||a||o.selectedMembership===void 0,className:"btn f-left btcd-btn-lg purple sh-sm flx",type:"button",children:[d("Next","bit-integrations")," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),i.jsx(E,{step:n,saveConfig:()=>T({flow:t,setFlow:e,allIntegURL:l,navigate:P,conf:o,setIsLoading:r,setSnackbar:m}),isLoading:a,dataConf:o,setDataConf:p,formFields:s})]})}export{Z as default};