var E=Object.defineProperty;var y=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var v=(s,t,e)=>t in s?E(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,j=(s,t)=>{for(var e in t||(t={}))F.call(t,e)&&v(s,e,t[e]);if(y)for(var e of y(t))L.call(t,e)&&v(s,e,t[e]);return s};import{u as T,r as o,j as a}from"./main-814.js";import"./bi.8.440.js";import{_ as c,d as p}from"./bi.317.0.js";import{S as q}from"./bi.610.13.js";import{S as B}from"./bi.731.934.js";import{I as M,i as P}from"./bi.59.3.js";import z from"./bi.70.232.js";import{h as A,c as _}from"./bi.94.826.js";import{S as D}from"./bi.407.827.js";import"./bi.765.9.js";import"./bi.672.11.js";import"./bi.478.14.js";import"./bi.492.709.js";function tt({formFields:s,setFlow:t,flow:e,allIntegURL:u}){const f=T(),[k,g]=o.useState(!1),[b,h]=o.useState({auth:!1}),[n,S]=o.useState(1),[C,d]=o.useState({show:!1}),I=[{key:"email",label:c("Email","bit-integrations"),required:!0},{key:"birthday",label:c("Birthday","bit-integrations"),required:!1}],[i,r]=o.useState({name:"Smaily",type:"Smaily",subdomain:"",api_user_name:"",api_user_password:"",field_map:[{formField:"",smailyFormField:""}],staticFields:I,actions:{}}),w=()=>{g(!0),P(e,t,u,i,f,"","",g).then(l=>{var x;l.success?(p.success((x=l.data)==null?void 0:x.msg),f(u)):p.error(l.data||l)})},N=m=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!_(i)){p.error(c("Please map mandatory fields","bit-integrations"));return}i.field_map.length>0&&S(m)};return a.jsxs("div",{children:[a.jsx(q,{snack:C,setSnackbar:d}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(B,{step:3,active:n})}),a.jsx(z,{smailyConf:i,setSmailyConf:r,step:n,setStep:S,loading:b,setLoading:h,setSnackbar:d}),a.jsxs("div",{className:"btcd-stp-page",style:j({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(D,{formFields:s,handleInput:m=>A(m,i,r),smailyConf:i,setSmailyConf:r,loading:b,setLoading:h,setSnackbar:d}),a.jsxs("button",{onClick:()=>N(3),disabled:!_(i),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[c("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(M,{step:n,saveConfig:()=>w(),isLoading:k,dataConf:i,setDataConf:r,formFields:s})]})}export{tt as default};
