var y=Object.defineProperty;var v=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var j=(a,s,e)=>s in a?y(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,S=(a,s)=>{for(var e in s||(s={}))L.call(s,e)&&j(a,e,s[e]);if(v)for(var e of v(s))N.call(s,e)&&j(a,e,s[e]);return a};import{u as w,r as o,j as i}from"./main-247.js";import"./bi.393.437.js";import{_ as E,d as p}from"./bi.456.0.js";import{S as C}from"./bi.417.13.js";import{S as T}from"./bi.955.922.js";import{I as M,g as P}from"./bi.427.3.js";import z from"./bi.364.229.js";import{h as A,c as _}from"./bi.223.812.js";import{E as B}from"./bi.574.813.js";import"./bi.712.9.js";import"./bi.923.11.js";import"./bi.858.14.js";import"./bi.30.716.js";import"./bi.510.673.js";import"./bi.210.674.js";function st({formFields:a,setFlow:s,flow:e,allIntegURL:d}){const u=w(),[k,f]=o.useState(!1),[g,h]=o.useState({auth:!1,tags:!1,customFields:!1,lists:!1,emailOctopusFields:!1}),[n,x]=o.useState(1),[F,m]=o.useState({show:!1}),[t,r]=o.useState({name:"EmailOctopus",type:"EmailOctopus",auth_token:"",field_map:[{formField:"",emailOctopusFormField:""}],emailOctopusFields:[],lists:[],selectedList:"",status:"",tags:[],selectedTags:[],actions:{}}),I=()=>{f(!0),P(e,s,d,t,u,"","",f).then(l=>{var b;l.success?(p.success((b=l.data)==null?void 0:b.msg),u(d)):p.error(l.data||l)})},O=c=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!_(t)){p.error(E("Please map mandatory emailOctopusFields","bit-integrations"));return}t.field_map.length>0&&x(c)};return i.jsxs("div",{children:[i.jsx(C,{snack:F,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(T,{step:3,active:n})}),i.jsx(z,{emailOctopusConf:t,setEmailOctopusConf:r,step:n,setStep:x,loading:g,setLoading:h,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:S({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(B,{formFields:a,handleInput:c=>A(c,t,r),emailOctopusConf:t,setEmailOctopusConf:r,loading:g,setLoading:h,setSnackbar:m}),(t==null?void 0:t.selectedList)&&i.jsxs("button",{onClick:()=>O(3),disabled:!_(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[E("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.selectedList)&&i.jsx(M,{step:n,saveConfig:()=>I(),isLoading:k,dataConf:t,setDataConf:r,formFields:a})]})}export{st as default};
