var y=Object.defineProperty;var h=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(s,e,t)=>e in s?y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,u=(s,e)=>{for(var t in e||(e={}))A.call(e,t)&&f(s,t,e[t]);if(h)for(var t of h(e))C.call(e,t)&&f(s,t,e[t]);return s};import{u as I,l as N,r as p,j as i}from"./main-165.js";import{_ as d,d as w,I as _,s as E}from"./bi.312.95.js";import{S as T}from"./bi.354.971.js";import{P as D,h as F}from"./bi.203.856.js";import L from"./bi.828.243.js";import"./bi.430.769.js";import"./bi.40.785.js";function O({formFields:s,setFlow:e,flow:t,allIntegURL:l,isInfo:x,edit:g}){const P=I(),{formID:v}=N(),[o,n]=p.useState(!1),[r,b]=p.useState(1),[j,m]=p.useState({show:!1}),S=[{key:"1",label:d("Add the user to a membership","bit-integrations")},{key:"2",label:d("Remove the user from a membership","bit-integrations")}],[a,c]=p.useState({name:"Paid Membership Pro",type:"PaidMembershipPro",mainAction:"",field_map:[{formField:"",paidmembershipproFormField:""}],allActions:S,actions:{}}),M=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),a.mainAction!==""&&b(3)};return i.jsxs("div",{children:[i.jsx(w,{snack:j,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(T,{step:3,active:r})}),i.jsx(L,{formID:v,paidMembershipProConf:a,setPaidMembershipProConf:c,step:r,setStep:b,isLoading:o,setIsLoading:n,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:u({},r===2&&{width:900,minHeight:"350px",overflow:"visible"}),children:[i.jsx(D,{formFields:s,handleInput:k=>F(k,a,c,n),paidMembershipProConf:a,setPaidMembershipProConf:c,isLoading:o,setIsLoading:n,setSnackbar:m,allIntegURL:l,isInfo:x,edit:g}),i.jsxs("button",{onClick:()=>M(),disabled:!a.mainAction||o||a.selectedMembership===void 0,className:"btn f-left btcd-btn-lg purple sh-sm flx",type:"button",children:[d("Next","bit-integrations")," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),i.jsx(_,{step:r,saveConfig:()=>E({flow:t,setFlow:e,allIntegURL:l,navigate:P,conf:a,setIsLoading:n,setSnackbar:m}),isLoading:o,dataConf:a,setDataConf:c,formFields:s})]})}export{O as default};