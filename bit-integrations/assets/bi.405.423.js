var M=Object.defineProperty;var q=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var x=(s,i,a)=>i in s?M(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a,C=(s,i)=>{for(var a in i||(i={}))P.call(i,a)&&x(s,a,i[a]);if(q)for(var a of q(i))w.call(i,a)&&x(s,a,i[a]);return s};import{u as R,r as n,j as r}from"./main-920.js";import{_ as e,d as m}from"./bi.247.0.js";import"./bi.761.437.js";import{S as T}from"./bi.970.13.js";import{S as A}from"./bi.319.923.js";import{I as E,i as D}from"./bi.658.3.js";import z from"./bi.426.271.js";import{h as B,c as S}from"./bi.252.894.js";import{N as G}from"./bi.166.895.js";import"./bi.140.9.js";import"./bi.941.11.js";import"./bi.706.14.js";import"./bi.898.700.js";function ie({formFields:s,setFlow:i,flow:a,allIntegURL:p}){const g=R(),[f,c]=n.useState(!1),[y,k]=n.useState({}),[o,h]=n.useState(1),[v,b]=n.useState({show:!1}),_=[{key:"first_name",label:e("First Name","bit-integrations"),required:!0},{key:"email",label:e("Email Address","bit-integrations"),required:!0},{key:"last_name",label:e("Last Name","bit-integrations"),required:!1},{key:"phone",label:e("Phone Number","bit-integrations"),required:!1},{key:"address_1",label:e("Address 1","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"postalCode",label:e("Postal Code","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1}],j=[{key:"name",label:e("Name","bit-integrations"),required:!0},{key:"url",label:e("URL","bit-integrations"),required:!1},{key:"phone",label:e("Phone Number","bit-integrations"),required:!1},{key:"address_1",label:e("Address 1","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"postalCode",label:e("Postal Code","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1}],I=[{key:"description",label:e("Lead Description","bit-integrations"),required:!0},{key:"dueTime",label:e("Due Time","bit-integrations"),required:!1},{key:"confidence",label:e("Confidence","bit-integrations"),required:!1}],[t,l]=n.useState({name:"NutshellCRM",type:"NutshellCRM",user_name:"",api_token:"",field_map:[{formField:"",nutshellCRMFormField:""}],actionName:"",actionId:"",peopleFields:_,companyFields:j,leadFields:I,actions:{}}),F=()=>{c(!0),D(a,i,p,t,g,"","",c).then(u=>{var N;u.success?(m.success((N=u.data)==null?void 0:N.msg),g(p)):m.error(u.data||u)})},L=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!S(t)){m.error(e("Please map mandatory fields","bit-integrations"));return}t.field_map.length>0&&h(d)};return r.jsxs("div",{children:[r.jsx(T,{snack:v,setSnackbar:b}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(A,{step:3,active:o})}),r.jsx(z,{nutshellCRMConf:t,setNutshellCRMConf:l,step:o,setStep:h,loading:y,setLoading:k,setSnackbar:b}),r.jsxs("div",{className:"btcd-stp-page",style:C({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(G,{formFields:s,handleInput:d=>B(d,t,l),nutshellCRMConf:t,setNutshellCRMConf:l,loading:y,setLoading:k,isLoading:f,setIsLoading:c,setSnackbar:b}),(t==null?void 0:t.actionName)&&r.jsxs("button",{onClick:()=>L(3),disabled:!S(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&r.jsx(E,{step:o,saveConfig:()=>F(),isLoading:f,dataConf:t,setDataConf:l,formFields:s})]})}export{ie as default};