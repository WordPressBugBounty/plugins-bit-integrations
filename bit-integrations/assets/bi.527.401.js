var C=Object.defineProperty;var v=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var j=(a,e,s)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,S=(a,e)=>{for(var s in e||(e={}))F.call(e,s)&&j(a,s,e[s]);if(v)for(var s of v(e))E.call(e,s)&&j(a,s,e[s]);return a};import{u as L,r as o,j as i}from"./main-29.js";import{d as T,_,I as M,F as P,c as l}from"./bi.860.15.js";import{S as z}from"./bi.885.903.js";import A from"./bi.973.262.js";import{c as k}from"./bi.962.867.js";import{N as B}from"./bi.285.868.js";import"./bi.244.714.js";function R({formFields:a,setFlow:e,flow:s,allIntegURL:p}){const g=L(),[u,c]=o.useState(!1),[f,b]=o.useState({}),[n,x]=o.useState(1),[y,m]=o.useState({show:!1}),[t,d]=o.useState({name:"Nimble",type:"Nimble",api_key:"",field_map:[{formField:"",nimbleFormField:""}],actionName:"",actions:{}}),w=()=>{c(!0),P(s,e,p,t,g,"","",c).then(r=>{var h;r.success?(l.success((h=r.data)==null?void 0:h.msg),g(p)):l.error(r.data||r)})},I=N=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!k(t)){l.error(_("Please map mandatory fields","bit-integrations"));return}t.field_map.length>0&&x(N)};return i.jsxs("div",{children:[i.jsx(T,{snack:y,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(z,{step:3,active:n})}),i.jsx(A,{nimbleConf:t,setNimbleConf:d,step:n,setStep:x,loading:f,setLoading:b,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:S({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(B,{formFields:a,nimbleConf:t,setNimbleConf:d,loading:f,setLoading:b,isLoading:u,setIsLoading:c,setSnackbar:m}),(t==null?void 0:t.actionName)&&i.jsxs("button",{onClick:()=>I(3),disabled:!k(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[_("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&i.jsx(M,{step:n,saveConfig:()=>w(),isLoading:u,dataConf:t,setDataConf:d,formFields:a})]})}export{R as default};
