var I=Object.defineProperty;var v=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var w=(s,t,e)=>t in s?I(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,N=(s,t)=>{for(var e in t||(t={}))F.call(t,e)&&w(s,e,t[e]);if(v)for(var e of v(t))L.call(t,e)&&w(s,e,t[e]);return s};import{u as E,r as i,j as a}from"./main-623.js";import"./bi.1.443.js";import{_ as j,d as m}from"./bi.422.0.js";import{S as T}from"./bi.957.13.js";import{S as M}from"./bi.408.976.js";import{I as P,g as z}from"./bi.757.3.js";import{s as A,c as S}from"./bi.594.951.js";import{N as B}from"./bi.187.952.js";import D from"./bi.265.278.js";import"./bi.331.9.js";import"./bi.727.11.js";import"./bi.218.14.js";import"./bi.220.720.js";import"./bi.890.721.js";import"./bi.971.765.js";function et({formFields:s,setFlow:t,flow:e,allIntegURL:p}){const d=E(),[C,f]=i.useState(!1),[g,u]=i.useState({auth:!1}),[r,x]=i.useState(1),[_,c]=i.useState({show:!1}),[o,l]=i.useState({name:"Newsletter",type:"Newsletter",field_map:[{formField:"",newsletterFormField:""}],staticFields:A,lists:[],selectedLists:"",groups:[],actions:{}}),k=()=>{f(!0),z(e,t,p,o,d,"","",f).then(n=>{var b;n.success?(m.success((b=n.data)==null?void 0:b.msg),d(p)):m.error(n.data||n)})},y=h=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!S(o)){m.error(j("Please map mandatory fields","bit-integrations"));return}o.field_map.length>0&&x(h)};return a.jsxs("div",{children:[a.jsx(T,{snack:_,setSnackbar:c}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(M,{step:3,active:r})}),a.jsx(D,{newsletterConf:o,setNewsletterConf:l,step:r,setStep:x,loading:g,setLoading:u,setSnackbar:c}),a.jsxs("div",{className:"btcd-stp-page",style:N({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(B,{formFields:s,newsletterConf:o,setNewsletterConf:l,loading:g,setLoading:u,setSnackbar:c}),a.jsxs("button",{onClick:()=>y(3),disabled:!S(o),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[j("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(P,{step:r,saveConfig:()=>k(),isLoading:C,dataConf:o,setDataConf:l,formFields:s})]})}export{et as default};
