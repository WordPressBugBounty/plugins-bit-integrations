var w=Object.defineProperty;var j=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var N=(i,t,s)=>t in i?w(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s,S=(i,t)=>{for(var s in t||(t={}))P.call(t,s)&&N(i,s,t[s]);if(j)for(var s of j(t))C.call(t,s)&&N(i,s,t[s]);return i};import{u as I,r as n,j as r}from"./main-920.js";import{_ as a,d as m}from"./bi.247.0.js";import"./bi.761.437.js";import{S as L}from"./bi.970.13.js";import{S as F}from"./bi.319.923.js";import{I as M,i as R}from"./bi.658.3.js";import T from"./bi.991.261.js";import{b as A,c as _}from"./bi.221.875.js";import{D as W}from"./bi.622.876.js";import"./bi.140.9.js";import"./bi.941.11.js";import"./bi.706.14.js";import"./bi.898.700.js";function ee({formFields:i,setFlow:t,flow:s,allIntegURL:b}){const g=I(),[u,c]=n.useState(!1),[f,x]=n.useState({}),[o,h]=n.useState(1),[D,p]=n.useState({show:!1}),y=[{label:a("First Name","bit-integrations"),key:"name",required:!0},{label:a("Email Address","bit-integrations"),key:"email",required:!0},{label:a("Last Name","bit-integrations"),key:"last_name",required:!1},{label:a("Phone Number","bit-integrations"),key:"phone_number",required:!1},{label:a("Company","bit-integrations"),key:"company",required:!1},{label:a("Website","bit-integrations"),key:"website",required:!1},{label:a("GDPR","bit-integrations"),key:"gdpr",required:!1},{label:a("Event Registration page URL","bit-integrations"),key:"ref_url",required:!1}],[e,d]=n.useState({name:"Demio",type:"Demio",api_key:"",api_secret:"",field_map:A(y),actionName:"registerPeopletoWabinar",demioFields:y,actions:{}}),q=()=>{c(!0),R(s,t,b,e,g,"","",c).then(l=>{var k;l.success?(m.success((k=l.data)==null?void 0:k.msg),g(b)):m.error(l.data||l)})},E=v=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!_(e)){m.error(a("Please map mandatory fields","bit-integrations"));return}if(!e.selectedEvent){m.error(a("Please select a Event","bit-integrations"));return}e.field_map.length>0&&h(v)};return r.jsxs("div",{children:[r.jsx(L,{snack:D,setSnackbar:p}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(F,{step:3,active:o})}),r.jsx(T,{demioConf:e,setDemioConf:d,step:o,setStep:h,loading:f,setLoading:x,setSnackbar:p}),r.jsxs("div",{className:"btcd-stp-page",style:S({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(W,{formFields:i,demioConf:e,setDemioConf:d,loading:f,setLoading:x,isLoading:u,setIsLoading:c,setSnackbar:p}),(e==null?void 0:e.actionName)&&r.jsxs("button",{onClick:()=>E(3),disabled:!_(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[a("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&r.jsx(M,{step:o,saveConfig:()=>q(),isLoading:u,dataConf:e,setDataConf:d,formFields:i})]})}export{ee as default};
