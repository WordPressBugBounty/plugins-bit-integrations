var M=Object.defineProperty;var u=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(a,s,e)=>s in a?M(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,g=(a,s)=>{for(var e in s||(s={}))k.call(s,e)&&f(a,e,s[e]);if(u)for(var e of u(s))w.call(s,e)&&f(a,e,s[e]);return a};import{u as _,o as y,r as n,j as i}from"./main-247.js";import{_ as x,d as N}from"./bi.456.0.js";import"./bi.393.437.js";import{S as C}from"./bi.417.13.js";import{S as E}from"./bi.955.922.js";import{I as F,s as L}from"./bi.427.3.js";import T from"./bi.489.224.js";import{s as P,h as A,c as h}from"./bi.757.803.js";import{M as D}from"./bi.772.802.js";import"./bi.712.9.js";import"./bi.923.11.js";import"./bi.858.14.js";import"./bi.50.710.js";import"./bi.30.716.js";import"./bi.510.673.js";import"./bi.210.674.js";function tt({formFields:a,setFlow:s,flow:e,allIntegURL:b}){const I=_(),{formID:j}=y(),[c,r]=n.useState(!1),[p,d]=n.useState(1),[v,o]=n.useState({show:!1}),[t,l]=n.useState({name:"Mailup",type:"Mailup",clientId:"",clientSecret:"",allList:[],allGroup:[],listId:"",groupId:"",field_map:[{formField:"",mailupFormField:""}],staticFields:[],actions:{}});n.useEffect(()=>{window.opener&&P("mailup")},[]);const S=m=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!h(t)){N.error(x("Please map mandatory fields","bit-integrations"));return}t.field_map.length>0&&d(m)};return i.jsxs("div",{children:[i.jsx(C,{snack:v,setSnackbar:o}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(E,{step:3,active:p})}),i.jsx(T,{formID:j,mailupConf:t,setMailupConf:l,step:p,setStep:d,isLoading:c,setIsLoading:r,setSnackbar:o}),i.jsxs("div",{className:"btcd-stp-page",style:g({},p===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(D,{formFields:a,handleInput:m=>A(m,t,l,r,o),mailupConf:t,setMailupConf:l,isLoading:c,setIsLoading:r,setSnackbar:o}),t.listId&&i.jsxs("button",{onClick:()=>S(3),disabled:!(t!=null&&t.listId)||!h(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[x("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.listId&&i.jsx(F,{step:p,saveConfig:()=>L({flow:e,setFlow:s,allIntegURL:b,navigate:I,conf:t,setIsLoading:r,setSnackbar:o}),isLoading:c,dataConf:t,setDataConf:l,formFields:a})]})}export{tt as default};
