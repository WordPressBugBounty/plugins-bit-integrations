var w=Object.defineProperty;var v=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var S=(e,t,s)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,j=(e,t)=>{for(var s in t||(t={}))I.call(t,s)&&S(e,s,t[s]);if(v)for(var s of v(t))F.call(t,s)&&S(e,s,t[s]);return e};import{u as L,r as o,j as a}from"./main-34.js";import"./bi.188.437.js";import{_ as M,d as m}from"./bi.671.0.js";import{S as T}from"./bi.213.13.js";import{S as E}from"./bi.851.922.js";import{I as P,i as z}from"./bi.633.3.js";import{c as C}from"./bi.474.905.js";import{M as A}from"./bi.731.906.js";import B from"./bi.459.278.js";import"./bi.914.9.js";import"./bi.22.11.js";import"./bi.690.14.js";import"./bi.623.673.js";import"./bi.808.674.js";import"./bi.379.699.js";function tt({formFields:e,setFlow:t,flow:s,allIntegURL:d}){const p=L(),[_,f]=o.useState(!1),[g,u]=o.useState({auth:!1,fields:!1,lists:!1,tags:!1}),[r,x]=o.useState(1),[k,l]=o.useState({show:!1}),[i,c]=o.useState({name:"Mailster",type:"Mailster",field_map:[{formField:"",mailsterFormField:""}],mailsterFields:[],selectedStatus:"",lists:[],selectedLists:"",tags:[],selectedTags:""}),y=()=>{f(!0),z(s,t,d,i,p,"","",f).then(n=>{var b;n.success?(m.success((b=n.data)==null?void 0:b.msg),p(d)):m.error(n.data||n)})},N=h=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!C(i)){m.error(M("Please map mandatory fields","bit-integrations"));return}i.field_map.length>0&&x(h)};return a.jsxs("div",{children:[a.jsx(T,{snack:k,setSnackbar:l}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(E,{step:3,active:r})}),a.jsx(B,{mailsterConf:i,setMailsterConf:c,step:r,setStep:x,loading:g,setLoading:u,setSnackbar:l}),a.jsxs("div",{className:"btcd-stp-page",style:j({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(A,{formFields:e,mailsterConf:i,setMailsterConf:c,loading:g,setLoading:u,setSnackbar:l}),a.jsxs("button",{onClick:()=>N(3),disabled:!C(i),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[M("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(P,{step:r,saveConfig:()=>y(),isLoading:_,dataConf:i,setDataConf:c,formFields:e})]})}export{tt as default};
