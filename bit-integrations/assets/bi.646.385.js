var w=Object.defineProperty;var C=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var h=(s,i,a)=>i in s?w(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a,x=(s,i)=>{for(var a in i||(i={}))A.call(i,a)&&h(s,a,i[a]);if(C)for(var a of C(i))E.call(i,a)&&h(s,a,i[a]);return s};import{u as I,r as n,j as r}from"./main-920.js";import"./bi.761.437.js";import{_ as e,d as l}from"./bi.247.0.js";import{S as D}from"./bi.970.13.js";import{S as T}from"./bi.319.923.js";import{I as O,i as L}from"./bi.658.3.js";import z from"./bi.668.243.js";import{h as B,c as N}from"./bi.657.841.js";import{C as W}from"./bi.618.842.js";import"./bi.140.9.js";import"./bi.941.11.js";import"./bi.706.14.js";import"./bi.898.700.js";function ae({formFields:s,setFlow:i,flow:a,allIntegURL:c}){const m=I(),[j,g]=n.useState(!1),[f,y]=n.useState({}),[o,k]=n.useState(1),[S,p]=n.useState({show:!1}),v=[{key:"name",label:e("Name","bit-integrations"),required:!0},{key:"emailAddresses",label:e("Email","bit-integrations"),required:!1},{key:"about",label:e("About","bit-integrations"),required:!1},{key:"street",label:e("Street","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"zip",label:e("Zip Code","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"phoneNumbers",label:e("Phone","bit-integrations"),required:!1},{key:"websites",label:e("Website","bit-integrations"),required:!1}],M=[{key:"firstName",label:e("First Name","bit-integrations"),required:!0},{key:"lastName",label:e("Last Name","bit-integrations"),required:!1},{key:"title",label:e("Title","bit-integrations"),required:!1},{key:"jobTitle",label:e("Job Title","bit-integrations"),required:!1},{key:"emailAddresses",label:e("Email","bit-integrations"),required:!1},{key:"about",label:e("About","bit-integrations"),required:!1},{key:"street",label:e("Street","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"zip",label:e("Zip Code","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"phoneNumbers",label:e("Phone","bit-integrations"),required:!1},{key:"websites",label:e("Website","bit-integrations"),required:!1}],_=[{key:"name",label:e("Opportunity Name","bit-integrations"),required:!0},{key:"description",label:e("Opportunity Details","bit-integrations"),required:!1},{key:"value",label:e("Bid Amount","bit-integrations"),required:!1},{key:"expectedCloseOn",label:e("Expected Close Date","bit-integrations"),required:!1},{key:"closedOn",label:e("Actual Close Date","bit-integrations"),required:!1}],F=[{key:"name",label:e("Project Name","bit-integrations"),required:!0},{key:"description",label:e("Description","bit-integrations"),required:!1},{key:"expectedCloseOn",label:e("Expected Close Date","bit-integrations"),required:!1}],[t,b]=n.useState({name:"CapsuleCRM",type:"CapsuleCRM",api_key:"",api_url:"",field_map:[{formField:"",capsulecrmFormField:""}],actionName:"",organisationFields:v,personFields:M,opportunityFields:_,projectFields:F,actions:{}}),P=()=>{g(!0),L(a,i,c,t,m,"","",g).then(u=>{var q;u.success?(l.success((q=u.data)==null?void 0:q.msg),m(c)):l.error(u.data||u)})},R=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!N(t)){l.error(e("Please map mandatory fields","bit-integrations"));return}if(t.actionName==="opportunity"||t.actionName==="project"){if(!t.selectedCRMParty){l.error(e("Please select a party","bit-integrations"));return}if(!t.selectedCRMMilestones&&t.actionName==="opportunity"){l.error(e("Please select a Milestone","bit-integrations"));return}}t.field_map.length>0&&k(d)};return r.jsxs("div",{children:[r.jsx(D,{snack:S,setSnackbar:p}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(T,{step:3,active:o})}),r.jsx(z,{capsulecrmConf:t,setCapsuleCRMConf:b,step:o,setStep:k,loading:f,setLoading:y,setSnackbar:p}),r.jsxs("div",{className:"btcd-stp-page",style:x({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(W,{formFields:s,handleInput:d=>B(d,t,b),capsulecrmConf:t,setCapsuleCRMConf:b,loading:f,setLoading:y,setSnackbar:p}),(t==null?void 0:t.actionName)&&r.jsxs("button",{onClick:()=>R(3),disabled:!N(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&r.jsx(O,{step:o,saveConfig:()=>P(),isLoading:j,dataConf:t,setDataConf:b,formFields:s})]})}export{ae as default};
