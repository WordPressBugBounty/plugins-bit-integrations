var F=Object.defineProperty;var S=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var v=(s,t,e)=>t in s?F(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,j=(s,t)=>{for(var e in t||(t={}))E.call(t,e)&&v(s,e,t[e]);if(S)for(var e of S(t))L.call(t,e)&&v(s,e,t[e]);return s};import{u as T,r as n,j as a}from"./main-29.js";import{_ as d,d as q,I as B,F as M,c as p}from"./bi.860.15.js";import{S as P}from"./bi.885.903.js";import z from"./bi.217.229.js";import{h as A,c as _}from"./bi.552.803.js";import{S as D}from"./bi.731.804.js";import"./bi.244.714.js";function W({formFields:s,setFlow:t,flow:e,allIntegURL:u}){const f=T(),[k,g]=n.useState(!1),[b,h]=n.useState({auth:!1}),[o,x]=n.useState(1),[C,m]=n.useState({show:!1}),I=[{key:"email",label:d("Email","bit-integrations"),required:!0},{key:"birthday",label:d("Birthday","bit-integrations"),required:!1}],[i,r]=n.useState({name:"Smaily",type:"Smaily",subdomain:"",api_user_name:"",api_user_password:"",field_map:[{formField:"",smailyFormField:""}],staticFields:I,actions:{}}),w=()=>{g(!0),M(e,t,u,i,f,"","",g).then(c=>{var y;c.success?(p.success((y=c.data)==null?void 0:y.msg),f(u)):p.error(c.data||c)})},N=l=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!_(i)){p.error(d("Please map mandatory fields","bit-integrations"));return}i.field_map.length>0&&x(l)};return a.jsxs("div",{children:[a.jsx(q,{snack:C,setSnackbar:m}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(P,{step:3,active:o})}),a.jsx(z,{smailyConf:i,setSmailyConf:r,step:o,setStep:x,loading:b,setLoading:h,setSnackbar:m}),a.jsxs("div",{className:"btcd-stp-page",style:j({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(D,{formFields:s,handleInput:l=>A(l,i,r),smailyConf:i,setSmailyConf:r,loading:b,setLoading:h,setSnackbar:m}),a.jsxs("button",{onClick:()=>N(3),disabled:!_(i),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[d("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(B,{step:o,saveConfig:()=>w(),isLoading:k,dataConf:i,setDataConf:r,formFields:s})]})}export{W as default};