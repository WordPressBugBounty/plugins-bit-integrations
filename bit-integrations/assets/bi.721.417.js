var T=Object.defineProperty;var S=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var P=(s,i,r)=>i in s?T(s,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[i]=r,C=(s,i)=>{for(var r in i||(i={}))F.call(i,r)&&P(s,r,i[r]);if(S)for(var r of S(i))R.call(i,r)&&P(s,r,i[r]);return s};import{u as B,r as l,j as n}from"./main-814.js";import{_ as e,d as a}from"./bi.317.0.js";import"./bi.8.440.js";import{S as A}from"./bi.610.13.js";import{S as D}from"./bi.731.934.js";import{I as E,i as M}from"./bi.59.3.js";import z from"./bi.796.266.js";import{h as Z,c as _}from"./bi.348.892.js";import{P as H}from"./bi.318.893.js";import"./bi.765.9.js";import"./bi.672.11.js";import"./bi.478.14.js";import"./bi.492.709.js";function re({formFields:s,setFlow:i,flow:r,allIntegURL:p}){const m=B(),[f,c]=l.useState(!1),[y,k]=l.useState({}),[o,q]=l.useState(1),[x,g]=l.useState({show:!1}),N=[{key:"company",label:e("Company","bit-integrations"),required:!0},{key:"vat",label:e("VAT Number","bit-integrations"),required:!1},{key:"phonenumber",label:e("Phone Number","bit-integrations"),required:!1},{key:"website",label:e("Website","bit-integrations"),required:!1},{key:"address",label:e("Address","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"zip",label:e("Zip","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"billing_street",label:e("Billing Street","bit-integrations"),required:!1},{key:"billing_city",label:e("Billing City","bit-integrations"),required:!1},{key:"billing_state",label:e("Billing State","bit-integrations"),required:!1},{key:"billing_zip",label:e("Billing Zip","bit-integrations"),required:!1},{key:"billing_country",label:e("Billing Country","bit-integrations"),required:!1},{key:"shipping_street",label:e("Shipping Street","bit-integrations"),required:!1},{key:"shipping_city",label:e("Shipping City","bit-integrations"),required:!1},{key:"shipping_state",label:e("Shipping State","bit-integrations"),required:!1},{key:"shipping_zip",label:e("Shipping Zip","bit-integrations"),required:!1},{key:"shipping_country",label:e("Shipping Country","bit-integrations"),required:!1}],j=[{key:"firstname",label:e("First Name","bit-integrations"),required:!0},{key:"lastname",label:e("Last Name","bit-integrations"),required:!0},{key:"email",label:e("Email Address","bit-integrations"),required:!0},{key:"title",label:e("Position","bit-integrations"),required:!1},{key:"phonenumber",label:e("Phone Number","bit-integrations"),required:!1},{key:"password",label:e("Password","bit-integrations"),required:!1}],v=[{key:"name",label:e("Name","bit-integrations"),required:!0},{key:"title",label:e("Position","bit-integrations"),required:!1},{key:"email",label:e("Email Address","bit-integrations"),required:!1},{key:"website",label:e("Website","bit-integrations"),required:!1},{key:"phonenumber",label:e("Phone Number","bit-integrations"),required:!1},{key:"company",label:e("Company","bit-integrations"),required:!1},{key:"address",label:e("Address","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"zip",label:e("Zip","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"description",label:e("Description","bit-integrations"),required:!1},{key:"custom_contact_date",label:e("Date Contacted","bit-integrations"),required:!1}],I=[{key:"name",label:e("Name","bit-integrations"),required:!0},{key:"start_date",label:e("Start Date","bit-integrations"),required:!0},{key:"deadline",label:e("Dead Line","bit-integrations"),required:!1},{key:"project_cost ",label:e("project Cost","bit-integrations"),required:!1},{key:"estimated_hours",label:e("Estimated Hours","bit-integrations"),required:!1},{key:"description",label:e("Project Description","bit-integrations"),required:!1}],[t,d]=l.useState({name:"PerfexCRM",type:"PerfexCRM",api_token:"",domain:"",field_map:[{formField:"",perfexCRMFormField:""}],actionName:"",selectedLeadSourceId:1,selectedLeadStatusId:1,actionId:"",customerFields:N,contactFields:j,leadFields:v,projectFields:I,actions:{}}),L=()=>{c(!0),M(r,i,p,t,m,"","",c).then(u=>{var h;u.success?(a.success((h=u.data)==null?void 0:h.msg),m(p)):a.error(u.data||u)})},w=b=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!_(t)){a.error(e("Please map mandatory fields","bit-integrations"));return}if(t.actionName==="contact"&&!t.selectedCustomer){a.error(e("Please select a Customer","bit-integrations"));return}if(t.actionName==="lead"&&(!t.selectedLeadStatusId||!t.selectedLeadSourceId||!t.selectedStaff)){a.error(e("Lead Status Id and Lead Source Id are required!","bit-integrations"));return}if(t.actionName==="project"){if(!t.selectedProjectStatus){a.error(e("Please select Project status","bit-integrations"));return}if(!t.selectedProjectType){a.error(e("Please select Project Related With...","bit-integrations"));return}if(!t.selectedbillingType){a.error(e("Please select a Billing type","bit-integrations"));return}if(!t.selectedCustomer){a.error(e("Please select a Customer","bit-integrations"));return}if(Number(t.selectedbillingType)===1&&!t.totalRate){a.error(e("Please select a Total Rate","bit-integrations"));return}if(Number(t.selectedbillingType)===2&&!t.ratePerHour){a.error(e("Please select a Rate Per Hour","bit-integrations"));return}}t.field_map.length>0&&q(b)};return n.jsxs("div",{children:[n.jsx(A,{snack:x,setSnackbar:g}),n.jsx("div",{className:"txt-center mt-2",children:n.jsx(D,{step:3,active:o})}),n.jsx(z,{perfexCRMConf:t,setPerfexCRMConf:d,step:o,setStep:q,loading:y,setLoading:k,setSnackbar:g}),n.jsxs("div",{className:"btcd-stp-page",style:C({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[n.jsx(H,{formFields:s,handleInput:b=>Z(b,t,d),perfexCRMConf:t,setPerfexCRMConf:d,loading:y,setLoading:k,isLoading:f,setIsLoading:c,setSnackbar:g}),(t==null?void 0:t.actionName)&&n.jsxs("button",{onClick:()=>w(3),disabled:!_(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",n.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&n.jsx(E,{step:o,saveConfig:()=>L(),isLoading:f,dataConf:t,setDataConf:d,formFields:s})]})}export{re as default};
