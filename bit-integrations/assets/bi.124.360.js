var M=Object.defineProperty;var u=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(a,s,e)=>s in a?M(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,g=(a,s)=>{for(var e in s||(s={}))k.call(s,e)&&f(a,e,s[e]);if(u)for(var e of u(s))w.call(s,e)&&f(a,e,s[e]);return a};import{u as _,l as y,r as o,j as i}from"./main-29.js";import{d as N,_ as x,I as C,s as E,c as F}from"./bi.860.15.js";import{S as L}from"./bi.885.903.js";import T from"./bi.810.222.js";import{s as P,h as A,c as h}from"./bi.493.791.js";import{M as D}from"./bi.877.790.js";import"./bi.22.698.js";import"./bi.244.714.js";import"./bi.831.661.js";import"./bi.392.662.js";function V({formFields:a,setFlow:s,flow:e,allIntegURL:b}){const I=_(),{formID:j}=y(),[p,r]=o.useState(!1),[l,m]=o.useState(1),[v,n]=o.useState({show:!1}),[t,c]=o.useState({name:"Mailup",type:"Mailup",clientId:"",clientSecret:"",allList:[],allGroup:[],listId:"",groupId:"",field_map:[{formField:"",mailupFormField:""}],staticFields:[],actions:{}});o.useEffect(()=>{window.opener&&P("mailup")},[]);const S=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!h(t)){F.error(x("Please map mandatory fields","bit-integrations"));return}t.field_map.length>0&&m(d)};return i.jsxs("div",{children:[i.jsx(N,{snack:v,setSnackbar:n}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(L,{step:3,active:l})}),i.jsx(T,{formID:j,mailupConf:t,setMailupConf:c,step:l,setStep:m,isLoading:p,setIsLoading:r,setSnackbar:n}),i.jsxs("div",{className:"btcd-stp-page",style:g({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(D,{formFields:a,handleInput:d=>A(d,t,c,r,n),mailupConf:t,setMailupConf:c,isLoading:p,setIsLoading:r,setSnackbar:n}),t.listId&&i.jsxs("button",{onClick:()=>S(3),disabled:!(t!=null&&t.listId)||!h(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[x("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.listId&&i.jsx(C,{step:l,saveConfig:()=>E({flow:e,setFlow:s,allIntegURL:b,navigate:I,conf:t,setIsLoading:r,setSnackbar:n}),isLoading:p,dataConf:t,setDataConf:c,formFields:a})]})}export{V as default};