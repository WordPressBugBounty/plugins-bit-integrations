var M=Object.defineProperty;var q=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var x=(s,a,i)=>a in s?M(s,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[a]=i,C=(s,a)=>{for(var i in a||(a={}))P.call(a,i)&&x(s,i,a[i]);if(q)for(var i of q(a))w.call(a,i)&&x(s,i,a[i]);return s};import{u as R,r as n,j as r}from"./main-579.js";import{_ as e,d as T,I as A,F as E,c as m}from"./bi.919.15.js";import{S as D}from"./bi.655.902.js";import z from"./bi.395.269.js";import{h as B,c as v}from"./bi.375.879.js";import{N as G}from"./bi.690.880.js";import"./bi.339.713.js";function X({formFields:s,setFlow:a,flow:i,allIntegURL:g}){const p=R(),[f,c]=n.useState(!1),[y,k]=n.useState({}),[l,h]=n.useState(1),[S,b]=n.useState({show:!1}),_=[{key:"first_name",label:e("First Name","bit-integrations"),required:!0},{key:"email",label:e("Email Address","bit-integrations"),required:!0},{key:"last_name",label:e("Last Name","bit-integrations"),required:!1},{key:"phone",label:e("Phone Number","bit-integrations"),required:!1},{key:"address_1",label:e("Address 1","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"postalCode",label:e("Postal Code","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1}],j=[{key:"name",label:e("Name","bit-integrations"),required:!0},{key:"url",label:e("URL","bit-integrations"),required:!1},{key:"phone",label:e("Phone Number","bit-integrations"),required:!1},{key:"address_1",label:e("Address 1","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"postalCode",label:e("Postal Code","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1}],F=[{key:"description",label:e("Lead Description","bit-integrations"),required:!0},{key:"dueTime",label:e("Due Time","bit-integrations"),required:!1},{key:"confidence",label:e("Confidence","bit-integrations"),required:!1}],[t,o]=n.useState({name:"NutshellCRM",type:"NutshellCRM",user_name:"",api_token:"",field_map:[{formField:"",nutshellCRMFormField:""}],actionName:"",actionId:"",peopleFields:_,companyFields:j,leadFields:F,actions:{}}),I=()=>{c(!0),E(i,a,g,t,p,"","",c).then(u=>{var N;u.success?(m.success((N=u.data)==null?void 0:N.msg),p(g)):m.error(u.data||u)})},L=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!v(t)){m.error(e("Please map mandatory fields","bit-integrations"));return}t.field_map.length>0&&h(d)};return r.jsxs("div",{children:[r.jsx(T,{snack:S,setSnackbar:b}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(D,{step:3,active:l})}),r.jsx(z,{nutshellCRMConf:t,setNutshellCRMConf:o,step:l,setStep:h,loading:y,setLoading:k,setSnackbar:b}),r.jsxs("div",{className:"btcd-stp-page",style:C({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(G,{formFields:s,handleInput:d=>B(d,t,o),nutshellCRMConf:t,setNutshellCRMConf:o,loading:y,setLoading:k,isLoading:f,setIsLoading:c,setSnackbar:b}),(t==null?void 0:t.actionName)&&r.jsxs("button",{onClick:()=>L(3),disabled:!v(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&r.jsx(A,{step:l,saveConfig:()=>I(),isLoading:f,dataConf:t,setDataConf:o,formFields:s})]})}export{X as default};
