var P=Object.defineProperty;var h=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var x=(s,i,a)=>i in s?P(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a,N=(s,i)=>{for(var a in i||(i={}))T.call(i,a)&&x(s,a,i[a]);if(h)for(var a of h(i))I.call(i,a)&&x(s,a,i[a]);return s};import{u as L,r as n,j as r}from"./main-556.js";import"./bi.838.440.js";import{_ as e,d as l}from"./bi.562.0.js";import{S as M}from"./bi.686.13.js";import{S as E}from"./bi.229.963.js";import{I as D,g as R}from"./bi.308.3.js";import z from"./bi.527.234.js";import{h as B,c as S}from"./bi.199.859.js";import{A as J}from"./bi.402.860.js";import"./bi.657.9.js";import"./bi.510.11.js";import"./bi.244.14.js";import"./bi.448.755.js";function ie({formFields:s,setFlow:i,flow:a,allIntegURL:g}){const m=L(),[_,f]=n.useState(!1),[p,k]=n.useState({}),[o,y]=n.useState(1),[j,u]=n.useState({show:!1}),v=[{key:"name",label:e("Name","bit-integrations"),required:!0},{key:"description",label:e("Description","bit-integrations"),required:!1},{key:"size",label:e("Size","bit-integrations"),required:!1},{key:"email",label:e("Email","bit-integrations"),required:!1},{key:"phone",label:e("Phone","bit-integrations"),required:!1},{key:"website",label:e("Website","bit-integrations"),required:!1},{key:"facebook",label:e("Facebook","bit-integrations"),required:!1},{key:"linkedin",label:e("Linkedin","bit-integrations"),required:!1},{key:"twitter",label:e("Twitter","bit-integrations"),required:!1},{key:"skype",label:e("Skype","bit-integrations"),required:!1},{key:"note",label:e("Note","bit-integrations"),required:!1},{key:"tax_no",label:e("Tax No","bit-integrations"),required:!1}],w=[{key:"first_name",label:e("First Name","bit-integrations"),required:!0},{key:"email",label:e("Email","bit-integrations"),required:!0},{key:"last_name",label:e("Last Name","bit-integrations"),required:!1},{key:"phone",label:e("Phone","bit-integrations"),required:!1},{key:"job_title",label:e("Job Title","bit-integrations"),required:!1},{key:"facebook",label:e("Facebook","bit-integrations"),required:!1},{key:"linkedin",label:e("Linkedin","bit-integrations"),required:!1},{key:"twitter",label:e("Twitter","bit-integrations"),required:!1},{key:"skype",label:e("Skype","bit-integrations"),required:!1},{key:"note",label:e("Note","bit-integrations"),required:!1},{key:"tax_no",label:e("Tax No","bit-integrations"),required:!1},{key:"last_contacted",label:e("Last Contacted","bit-integrations"),required:!1}],C=[{key:"deal_name",label:e("Deal Name","bit-integrations"),required:!0},{key:"amount",label:e("Amount","bit-integrations"),required:!1},{key:"close_date",label:e("Close Date","bit-integrations"),required:!1}],[t,d]=n.useState({name:"Agiled CRM",type:"Agiled CRM",auth_token:"",brand:"",field_map:[{formField:"",agiledFormField:""}],actionName:"",accountFields:v,contactFields:w,dealFields:C,actions:{}}),A=()=>{f(!0),R(a,i,g,t,m,"","",f).then(c=>{var q;c.success?(l.success((q=c.data)==null?void 0:q.msg),m(g)):l.error(c.data||c)})},F=b=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!S(t)){l.error(e("Please map mandatory fields","bit-integrations"));return}if(t.actionName==="deal"){if(!t.selectedCRMPipeline){l.error(e("Please select a pipeline","bit-integrations"));return}if(!t.selectedCRMPipelineStages){l.error(e("Please select a pipeline stage","bit-integrations"));return}}t.field_map.length>0&&y(b)};return r.jsxs("div",{children:[r.jsx(M,{snack:j,setSnackbar:u}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(E,{step:3,active:o})}),r.jsx(z,{agiledConf:t,setAgiledConf:d,step:o,setStep:y,loading:p,setLoading:k,setSnackbar:u}),r.jsxs("div",{className:"btcd-stp-page",style:N({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(J,{formFields:s,handleInput:b=>B(b,t,d),agiledConf:t,setAgiledConf:d,loading:p,setLoading:k,setSnackbar:u}),(t==null?void 0:t.actionName)&&r.jsxs("button",{onClick:()=>F(3),disabled:!S(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&r.jsx(D,{step:o,saveConfig:()=>A(),isLoading:_,dataConf:t,setDataConf:d,formFields:s})]})}export{ie as default};
