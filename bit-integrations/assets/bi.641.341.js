var C=Object.defineProperty;var b=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var f=(a,t,e)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,g=(a,t)=>{for(var e in t||(t={}))N.call(t,e)&&f(a,e,t[e]);if(b)for(var e of b(t))_.call(t,e)&&f(a,e,t[e]);return a};import{u as w,o as E,r as l,j as s}from"./main-494.js";import{a8 as F}from"./bi.23.437.js";import{_ as n}from"./bi.185.0.js";import{S as L}from"./bi.107.13.js";import{S as T}from"./bi.719.924.js";import{I as D,s as M}from"./bi.104.3.js";import P from"./bi.706.203.js";import{h as q,c as h}from"./bi.548.760.js";import{A as z}from"./bi.636.759.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.776.699.js";import"./bi.136.701.js";import"./bi.378.675.js";import"./bi.950.676.js";import"./bi.507.705.js";function at({formFields:a,setFlow:t,flow:e,allIntegURL:x}){const A=w(),{formID:p}=E(),[d,r]=l.useState(!1),[m,u]=l.useState(1),[j,o]=l.useState({show:!1}),v=[{key:"1",label:n("Add/Update Subscriber","bit-integrations")},{key:"2",label:n("Delete Subscriber","bit-integrations")}],S=[{key:"email",label:"Email",required:!0}],[i,c]=l.useState({name:"Acumbamail",type:"Acumbamail",mainAction:"",listId:"",auth_token:"",field_map:[{formField:"",acumbamailFormField:"EMAIL"}],addSubsCriberFields:S,allActions:v,address_field:[],actions:{}}),I=`
  <h4>${n("This integration can only be accessed by the payed users of Acumbamail","bit-integrations")}</h4>`,y=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!h(i)){o({show:!0,msg:n("Please map fields to continue.","bit-integrations")});return}i.listId!==""&&u(3)};return s.jsxs("div",{children:[s.jsx(L,{snack:j,setSnackbar:o}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(T,{step:3,active:m})}),s.jsx(P,{formID:p,acumbamailConf:i,setAcumbamailConf:c,step:m,setstep:u,isLoading:d,setIsLoading:r,setSnackbar:o}),s.jsxs("div",{className:"btcd-stp-page",style:g({},m===2&&{width:900,height:"auto",overflow:"visible"}),children:[s.jsx(z,{formFields:a,handleInput:k=>q(k,i,c,r,o,p),acumbamailConf:i,setAcumbamailConf:c,isLoading:d,setIsLoading:r,setSnackbar:o}),s.jsxs("button",{onClick:()=>y(),disabled:!i.mainAction||!h(i),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[n("Next","bit-integrations"),"  ",s.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),s.jsx(D,{step:m,saveConfig:()=>M({flow:e,setFlow:t,allIntegURL:x,navigate:A,conf:i,setIsLoading:r,setSnackbar:o}),isLoading:d,dataConf:i,setDataConf:c,formFields:a}),s.jsx(F,{note:I})]})}export{at as default};