var G=Object.defineProperty;var S=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var _=(s,t,i)=>t in s?G(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i,x=(s,t)=>{for(var i in t||(t={}))L.call(t,i)&&_(s,i,t[i]);if(S)for(var i of S(t))w.call(t,i)&&_(s,i,t[i]);return s};import{u as E,r as n,j as a}from"./main-247.js";import"./bi.393.437.js";import{_ as e,d as m}from"./bi.456.0.js";import{S as I}from"./bi.417.13.js";import{S as P}from"./bi.955.922.js";import{I as A,g as T}from"./bi.427.3.js";import M from"./bi.625.227.js";import{c as q}from"./bi.310.808.js";import{S as z}from"./bi.239.809.js";import"./bi.712.9.js";import"./bi.923.11.js";import"./bi.858.14.js";import"./bi.30.716.js";import"./bi.510.673.js";import"./bi.210.674.js";function te({formFields:s,setFlow:t,flow:i,allIntegURL:u}){const b=E(),[v,p]=n.useState(!1),[f,g]=n.useState({auth:!1,customFields:!1,lists:!1}),[o,y]=n.useState(1),[j,d]=n.useState({show:!1}),C=[{key:"email",label:e("Email","bit-integrations"),required:!0},{key:"first_name",label:e("First Name","bit-integrations"),required:!1},{key:"last_name",label:e("Last Name","bit-integrations"),required:!1},{key:"alternate_emails",label:e("Alternate Emails","bit-integrations"),required:!1},{key:"address_line_1",label:e("Address Line 1","bit-integrations"),required:!1},{key:"address_line_2",label:e("Address Line 2","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state_province_region",label:e("State Province Region","bit-integrations"),required:!1},{key:"postal_code",label:e("Postal Code","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"phone_number",label:e("Phone Number","bit-integrations"),required:!1},{key:"whatsapp",label:e("Whatsapp","bit-integrations"),required:!1},{key:"line",label:e("Line","bit-integrations"),required:!1},{key:"facebook",label:e("Facebook","bit-integrations"),required:!1},{key:"unique_name",label:e("Unique Name","bit-integrations"),required:!1}],[r,c]=n.useState({name:"SendGrid",type:"SendGrid",apiKey:"",field_map:[{formField:"",sendGridFormField:""}],staticFields:C,lists:[],customFields:[],selectedLists:"",groups:[],actions:{}}),N=()=>{p(!0),T(i,t,u,r,b,"","",p).then(l=>{var h;l.success?(m.success((h=l.data)==null?void 0:h.msg),b(u)):m.error(l.data||l)})},F=k=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!q(r)){m.error(e("Please map mandatory fields","bit-integrations"));return}r.field_map.length>0&&y(k)};return a.jsxs("div",{children:[a.jsx(I,{snack:j,setSnackbar:d}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(P,{step:3,active:o})}),a.jsx(M,{sendGridConf:r,setSendGridConf:c,step:o,setStep:y,loading:f,setLoading:g,setSnackbar:d}),a.jsxs("div",{className:"btcd-stp-page",style:x({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(z,{formFields:s,sendGridConf:r,setSendGridConf:c,loading:f,setLoading:g,setSnackbar:d}),a.jsxs("button",{onClick:()=>F(3),disabled:!q(r),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(A,{step:o,saveConfig:()=>N(),isLoading:v,dataConf:r,setDataConf:c,formFields:s})]})}export{te as default};
