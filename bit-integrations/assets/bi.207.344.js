var y=Object.defineProperty;var v=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var j=(s,t,e)=>t in s?y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,L=(s,t)=>{for(var e in t||(t={}))I.call(t,e)&&j(s,e,t[e]);if(v)for(var e of v(t))N.call(t,e)&&j(s,e,t[e]);return s};import{u as w,r as o,j as a}from"./main-425.js";import"./bi.900.437.js";import{_ as S,d as c}from"./bi.107.0.js";import{S as F}from"./bi.273.13.js";import{S as E}from"./bi.346.924.js";import{I as T,i as P}from"./bi.25.3.js";import z from"./bi.555.207.js";import{h as A,c as B}from"./bi.607.765.js";import{M as D}from"./bi.792.766.js";import"./bi.814.9.js";import"./bi.563.11.js";import"./bi.783.14.js";import"./bi.775.701.js";import"./bi.178.675.js";import"./bi.326.676.js";function et({formFields:s,setFlow:t,flow:e,allIntegURL:d}){const f=w(),[_,u]=o.useState(!1),[g,h]=o.useState({list:!1,field:!1,auth:!1,group:!1}),[r,x]=o.useState(1),[M,p]=o.useState({show:!1}),[i,n]=o.useState({name:"MailerLite",type:"MailerLite",auth_token:"",field_map:[{formField:"",mailerLiteFormField:"email"}],mailer_lite_type:"",mailerLiteFields:[],groups:[],group_ids:[],actions:{}}),C=()=>{u(!0),P(e,t,d,i,f,"","",u).then(m=>{var b;m.success?(c.success((b=m.data)==null?void 0:b.msg),f(d)):c.error(m.data||m)})},k=l=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!B(i)){c.error(S("Please map mandatory fields","bit-integrations"));return}i.field_map.length>0&&x(l)};return a.jsxs("div",{children:[a.jsx(F,{snack:M,setSnackbar:p}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(E,{step:3,active:r})}),a.jsx(z,{mailerLiteConf:i,setMailerLiteConf:n,step:r,setstep:x,loading:g,setLoading:h,setSnackbar:p}),a.jsxs("div",{className:"btcd-stp-page",style:L({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(D,{formFields:s,handleInput:l=>A(l,i,n),mailerLiteConf:i,setMailerLiteConf:n,loading:g,setLoading:h,setSnackbar:p}),a.jsxs("button",{onClick:()=>k(3),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[S("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(T,{step:r,saveConfig:()=>C(),isLoading:_,dataConf:i,setDataConf:n,formFields:s})]})}export{et as default};
