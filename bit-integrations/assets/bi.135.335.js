var S=Object.defineProperty;var u=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var f=(a,s,e)=>s in a?S(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,h=(a,s)=>{for(var e in s||(s={}))b.call(s,e)&&f(a,e,s[e]);if(u)for(var e of u(s))v.call(s,e)&&f(a,e,s[e]);return a};import{u as I,o as y,r as m,j as o}from"./main-34.js";import"./bi.188.437.js";import{_ as w}from"./bi.671.0.js";import{S as N}from"./bi.213.13.js";import{S as B}from"./bi.851.922.js";import{I as C,s as E}from"./bi.633.3.js";import{h as L,c as x,a as M}from"./bi.939.748.js";import{B as T}from"./bi.886.697.js";import A from"./bi.489.209.js";import{F as D}from"./bi.912.747.js";import"./bi.914.9.js";import"./bi.22.11.js";import"./bi.690.14.js";import"./bi.379.699.js";import"./bi.623.673.js";import"./bi.808.674.js";function tt({formFields:a,setFlow:s,flow:e,allIntegURL:F}){const g=I(),{formID:_}=y(),[p,d]=m.useState(!1),[i,l]=m.useState(1),[k,r]=m.useState({show:!1}),[t,n]=m.useState({name:"Freshdesk",type:"Freshdesk",app_domain:"",api_key:"",field_map:[{formField:"",freshdeskFormField:""}],field_map_contact:[{formField:"",contactFreshdeskFormField:""}],freshdesk_id:"",ticketFields:[],contactFields:[],contactShow:"",status:"",priority:"",updateContact:"",actions:{}}),j=c=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),c===3&&t.name!==""&&l(c)};return o.jsxs("div",{children:[o.jsx(N,{snack:k,setSnackbar:r}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(B,{step:3,active:i})}),o.jsx(A,{formID:_,freshdeskConf:t,setFreshdeskConf:n,step:i,setstep:l,isLoading:p,setIsLoading:d,setSnackbar:r}),o.jsxs("div",{className:"btcd-stp-page",style:h({},i===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(D,{formFields:a,handleInput:c=>L(c,t,n),freshdeskConf:t,setFreshdeskConf:n,isLoading:p,setIsLoading:d,setSnackbar:r}),x(t==null?void 0:t.field_map_contact),o.jsxs("button",{onClick:()=>j(3),disabled:!t.priority||!t.status||!x(t==null?void 0:t.field_map)||t.contactShow&&!M(t==null?void 0:t.field_map_contact),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[w("Next","bit-integrations"),o.jsx(T,{className:"ml-1 rev-icn"})]})]}),o.jsx(C,{step:i,saveConfig:()=>E({flow:e,setFlow:s,allIntegURL:F,conf:t,navigate:g,setIsLoading:d,setSnackbar:r}),isLoading:p,dataConf:t,setDataConf:n,formFields:a})]})}export{tt as default};
