var I=Object.defineProperty;var v=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var w=(s,t,e)=>t in s?I(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,N=(s,t)=>{for(var e in t||(t={}))F.call(t,e)&&w(s,e,t[e]);if(v)for(var e of v(t))L.call(t,e)&&w(s,e,t[e]);return s};import{u as E,r as o,j as a}from"./main-212.js";import"./bi.894.440.js";import{_ as j,d as m}from"./bi.717.0.js";import{S as T}from"./bi.954.13.js";import{S as M}from"./bi.787.945.js";import{I as P,i as z}from"./bi.164.3.js";import{s as A,c as S}from"./bi.102.922.js";import{N as B}from"./bi.568.923.js";import D from"./bi.95.277.js";import"./bi.303.9.js";import"./bi.830.11.js";import"./bi.914.14.js";import"./bi.870.692.js";import"./bi.323.693.js";import"./bi.600.737.js";function et({formFields:s,setFlow:t,flow:e,allIntegURL:p}){const d=E(),[C,f]=o.useState(!1),[u,g]=o.useState({auth:!1}),[r,x]=o.useState(1),[_,c]=o.useState({show:!1}),[i,l]=o.useState({name:"Newsletter",type:"Newsletter",field_map:[{formField:"",newsletterFormField:""}],staticFields:A,lists:[],selectedLists:"",groups:[],actions:{}}),k=()=>{f(!0),z(e,t,p,i,d,"","",f).then(n=>{var b;n.success?(m.success((b=n.data)==null?void 0:b.msg),d(p)):m.error(n.data||n)})},y=h=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!S(i)){m.error(j("Please map mandatory fields","bit-integrations"));return}i.field_map.length>0&&x(h)};return a.jsxs("div",{children:[a.jsx(T,{snack:_,setSnackbar:c}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(M,{step:3,active:r})}),a.jsx(D,{newsletterConf:i,setNewsletterConf:l,step:r,setStep:x,loading:u,setLoading:g,setSnackbar:c}),a.jsxs("div",{className:"btcd-stp-page",style:N({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(B,{formFields:s,newsletterConf:i,setNewsletterConf:l,loading:u,setLoading:g,setSnackbar:c}),a.jsxs("button",{onClick:()=>y(3),disabled:!S(i),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[j("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(P,{step:r,saveConfig:()=>k(),isLoading:C,dataConf:i,setDataConf:l,formFields:s})]})}export{et as default};
