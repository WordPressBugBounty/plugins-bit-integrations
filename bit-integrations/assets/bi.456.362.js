var F=Object.defineProperty;var j=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var I=(a,e,s)=>e in a?F(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,S=(a,e)=>{for(var s in e||(e={}))w.call(e,s)&&I(a,s,e[s]);if(j)for(var s of j(e))E.call(e,s)&&I(a,s,e[s]);return a};import{u as T,r as n,j as i}from"./main-920.js";import{_ as l,d}from"./bi.247.0.js";import"./bi.761.437.js";import{S as L}from"./bi.970.13.js";import{S as R}from"./bi.319.923.js";import{I as q,i as C}from"./bi.658.3.js";import M from"./bi.135.221.js";import{h as P,c as z}from"./bi.931.797.js";import{G as A}from"./bi.480.798.js";import"./bi.140.9.js";import"./bi.941.11.js";import"./bi.706.14.js";import"./bi.898.700.js";import"./bi.722.674.js";import"./bi.149.675.js";function st({formFields:a,setFlow:e,flow:s,allIntegURL:u}){const g=T(),[k,f]=n.useState(!1),[h,b]=n.useState({list:!1,field:!1,auth:!1,tags:!1,customFields:!1}),[o,x]=n.useState(1),[y,p]=n.useState({show:!1}),_=[{key:"email",label:l("Email","bit-integrations"),required:!0},{key:"name",label:l("Name","bit-integrations"),required:!1}],[t,r]=n.useState({name:"GetResponse",type:"GetResponse",auth_token:"",field_map:[{formField:"",getResponseFormField:""}],contactsFields:_,campaignId:"",getResponseFields:[],campaigns:[],tags:[],selectedTags:[],actions:{}}),G=()=>{f(!0),C(s,e,u,t,g,"","",f).then(m=>{var v;m.success?(d.success((v=m.data)==null?void 0:v.msg),g(u)):d.error(m.data||m)})},N=c=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!z(t)){d.error(l("Please map mandatory fields","bit-integrations"));return}t.field_map.length>0&&x(c)};return i.jsxs("div",{children:[i.jsx(L,{snack:y,setSnackbar:p}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(R,{step:3,active:o})}),i.jsx(M,{getResponseConf:t,setGetResponseConf:r,step:o,setstep:x,loading:h,setLoading:b,setSnackbar:p}),i.jsxs("div",{className:"btcd-stp-page",style:S({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(A,{formFields:a,handleInput:c=>P(c,t,r),getResponseConf:t,setGetResponseConf:r,loading:h,setLoading:b,setSnackbar:p}),(t==null?void 0:t.campaignId)&&i.jsxs("button",{onClick:()=>N(3),disabled:!(t!=null&&t.campaignId),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[l("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.campaignId)&&i.jsx(q,{step:o,saveConfig:()=>G(),isLoading:k,dataConf:t,setDataConf:r,formFields:a})]})}export{st as default};
