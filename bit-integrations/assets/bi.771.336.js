var C=Object.defineProperty;var p=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var f=(a,t,e)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,g=(a,t)=>{for(var e in t||(t={}))N.call(t,e)&&f(a,e,t[e]);if(p)for(var e of p(t))_.call(t,e)&&f(a,e,t[e]);return a};import{u as w,l as E,r as l,j as s}from"./main-29.js";import{_ as o,d as F,I as L,s as T,N as D}from"./bi.860.15.js";import{S as M}from"./bi.885.903.js";import P from"./bi.241.201.js";import{h as q,c as h}from"./bi.451.745.js";import{A as z}from"./bi.842.744.js";import"./bi.22.698.js";import"./bi.244.714.js";import"./bi.831.661.js";import"./bi.392.662.js";import"./bi.873.688.js";function X({formFields:a,setFlow:t,flow:e,allIntegURL:x}){const A=w(),{formID:u}=E(),[d,r]=l.useState(!1),[c,b]=l.useState(1),[j,n]=l.useState({show:!1}),v=[{key:"1",label:o("Add/Update Subscriber","bit-integrations")},{key:"2",label:o("Delete Subscriber","bit-integrations")}],I=[{key:"email",label:"Email",required:!0}],[i,m]=l.useState({name:"Acumbamail",type:"Acumbamail",mainAction:"",listId:"",auth_token:"",field_map:[{formField:"",acumbamailFormField:"EMAIL"}],addSubsCriberFields:I,allActions:v,address_field:[],actions:{}}),S=`
  <h4>${o("This integration can only be accessed by the payed users of Acumbamail","bit-integrations")}</h4>`,y=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!h(i)){n({show:!0,msg:o("Please map fields to continue.","bit-integrations")});return}i.listId!==""&&b(3)};return s.jsxs("div",{children:[s.jsx(F,{snack:j,setSnackbar:n}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(M,{step:3,active:c})}),s.jsx(P,{formID:u,acumbamailConf:i,setAcumbamailConf:m,step:c,setstep:b,isLoading:d,setIsLoading:r,setSnackbar:n}),s.jsxs("div",{className:"btcd-stp-page",style:g({},c===2&&{width:900,height:"auto",overflow:"visible"}),children:[s.jsx(z,{formFields:a,handleInput:k=>q(k,i,m,r,n,u),acumbamailConf:i,setAcumbamailConf:m,isLoading:d,setIsLoading:r,setSnackbar:n}),s.jsxs("button",{onClick:()=>y(),disabled:!i.mainAction||!h(i),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[o("Next","bit-integrations"),"  ",s.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),s.jsx(L,{step:c,saveConfig:()=>T({flow:e,setFlow:t,allIntegURL:x,navigate:A,conf:i,setIsLoading:r,setSnackbar:n}),isLoading:d,dataConf:i,setDataConf:m,formFields:a}),s.jsx(D,{note:S})]})}export{X as default};
