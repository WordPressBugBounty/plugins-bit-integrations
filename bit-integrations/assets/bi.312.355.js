var N=Object.defineProperty;var j=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var I=(a,t,s)=>t in a?N(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,S=(a,t)=>{for(var s in t||(t={}))w.call(t,s)&&I(a,s,t[s]);if(j)for(var s of j(t))E.call(t,s)&&I(a,s,t[s]);return a};import{u as T,r as n,j as i}from"./main-692.js";import{_ as d,d as L,I as R,F as q,c as p}from"./bi.751.13.js";import{S as C}from"./bi.579.899.js";import M from"./bi.465.217.js";import{h as P,c as z}from"./bi.484.779.js";import{G as A}from"./bi.178.780.js";import"./bi.719.710.js";import"./bi.588.657.js";import"./bi.294.658.js";function Y({formFields:a,setFlow:t,flow:s,allIntegURL:u}){const g=T(),[k,f]=n.useState(!1),[h,b]=n.useState({list:!1,field:!1,auth:!1,tags:!1,customFields:!1}),[o,x]=n.useState(1),[y,m]=n.useState({show:!1}),_=[{key:"email",label:d("Email","bit-integrations"),required:!0},{key:"name",label:d("Name","bit-integrations"),required:!1}],[e,r]=n.useState({name:"GetResponse",type:"GetResponse",auth_token:"",field_map:[{formField:"",getResponseFormField:""}],contactsFields:_,campaignId:"",getResponseFields:[],campaigns:[],tags:[],selectedTags:[],actions:{}}),F=()=>{f(!0),q(s,t,u,e,g,"","",f).then(l=>{var v;l.success?(p.success((v=l.data)==null?void 0:v.msg),g(u)):p.error(l.data||l)})},G=c=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!z(e)){p.error(d("Please map mandatory fields","bit-integrations"));return}e.field_map.length>0&&x(c)};return i.jsxs("div",{children:[i.jsx(L,{snack:y,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(C,{step:3,active:o})}),i.jsx(M,{getResponseConf:e,setGetResponseConf:r,step:o,setstep:x,loading:h,setLoading:b,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:S({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(A,{formFields:a,handleInput:c=>P(c,e,r),getResponseConf:e,setGetResponseConf:r,loading:h,setLoading:b,setSnackbar:m}),(e==null?void 0:e.campaignId)&&i.jsxs("button",{onClick:()=>G(3),disabled:!(e!=null&&e.campaignId),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[d("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.campaignId)&&i.jsx(R,{step:o,saveConfig:()=>F(),isLoading:k,dataConf:e,setDataConf:r,formFields:a})]})}export{Y as default};
