var C=Object.defineProperty;var v=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var j=(a,e,s)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,S=(a,e)=>{for(var s in e||(e={}))E.call(e,s)&&j(a,s,e[s]);if(v)for(var s of v(e))F.call(e,s)&&j(a,s,e[s]);return a};import{u as L,r as o,j as i}from"./main-586.js";import{_,d}from"./bi.612.0.js";import"./bi.960.440.js";import{S as T}from"./bi.733.13.js";import{S as M}from"./bi.692.945.js";import{I as P,i as z}from"./bi.993.3.js";import A from"./bi.865.265.js";import{c as k}from"./bi.694.901.js";import{N as B}from"./bi.783.902.js";import"./bi.175.9.js";import"./bi.980.11.js";import"./bi.520.14.js";import"./bi.453.737.js";function $({formFields:a,setFlow:e,flow:s,allIntegURL:l}){const f=L(),[g,c]=o.useState(!1),[u,b]=o.useState({}),[n,x]=o.useState(1),[y,m]=o.useState({show:!1}),[t,p]=o.useState({name:"Nimble",type:"Nimble",api_key:"",field_map:[{formField:"",nimbleFormField:""}],actionName:"",actions:{}}),w=()=>{c(!0),z(s,e,l,t,f,"","",c).then(r=>{var h;r.success?(d.success((h=r.data)==null?void 0:h.msg),f(l)):d.error(r.data||r)})},I=N=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!k(t)){d.error(_("Please map mandatory fields","bit-integrations"));return}t.field_map.length>0&&x(N)};return i.jsxs("div",{children:[i.jsx(T,{snack:y,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(M,{step:3,active:n})}),i.jsx(A,{nimbleConf:t,setNimbleConf:p,step:n,setStep:x,loading:u,setLoading:b,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:S({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(B,{formFields:a,nimbleConf:t,setNimbleConf:p,loading:u,setLoading:b,isLoading:g,setIsLoading:c,setSnackbar:m}),(t==null?void 0:t.actionName)&&i.jsxs("button",{onClick:()=>I(3),disabled:!k(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[_("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&i.jsx(P,{step:n,saveConfig:()=>w(),isLoading:g,dataConf:t,setDataConf:p,formFields:a})]})}export{$ as default};
