var w=Object.defineProperty;var C=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var h=(r,i,a)=>i in r?w(r,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[i]=a,N=(r,i)=>{for(var a in i||(i={}))_.call(i,a)&&h(r,a,i[a]);if(C)for(var a of C(i))I.call(i,a)&&h(r,a,i[a]);return r};import{u as L,r as n,j as s}from"./main-494.js";import{_ as e,d as b}from"./bi.185.0.js";import"./bi.23.437.js";import{S as T}from"./bi.107.13.js";import{S as E}from"./bi.719.924.js";import{I as A,i as H}from"./bi.104.3.js";import G from"./bi.871.260.js";import{c as x}from"./bi.208.874.js";import{C as M}from"./bi.58.875.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.136.701.js";function te({formFields:r,setFlow:i,flow:a,allIntegURL:p}){const y=L(),[m,d]=n.useState(!1),[c,f]=n.useState({}),[l,k]=n.useState(1),[P,g]=n.useState({show:!1}),v=[{label:e("First Name","bit-integrations"),key:"FirstName",required:!1},{label:e("Last Name","bit-integrations"),key:"LastName",required:!0},{label:e("Email Address","bit-integrations"),key:"Email",required:!1},{label:e("Company","bit-integrations"),key:"Company",required:!1},{label:e("Phone Number","bit-integrations"),key:"Phone",required:!1},{label:e("Job Title","bit-integrations"),key:"Designation",required:!1},{label:e("Description","bit-integrations"),key:"Description",required:!1},{label:e("Source","bit-integrations"),key:"Source",required:!1},{label:e("Next Follow Up Date","bit-integrations"),key:"NextFollowUpDate",required:!1},{label:e("Twitter","bit-integrations"),key:"Twitter",required:!1},{label:e("LinkedIn","bit-integrations"),key:"LinkedIn",required:!1},{label:e("GooglePlus","bit-integrations"),key:"GooglePlus",required:!1},{label:e("Facebook","bit-integrations"),key:"Facebook",required:!1},{label:e("Skype","bit-integrations"),key:"Skype",required:!1},{label:e("Street","bit-integrations"),key:"Street",required:!1},{label:e("City","bit-integrations"),key:"City",required:!1},{label:e("State","bit-integrations"),key:"State",required:!1},{label:e("Country","bit-integrations"),key:"Country",required:!1},{label:e("Postal Code","bit-integrations"),key:"PostalCode",required:!1},{label:e("Postal Code","bit-integrations"),key:"PostalCode",required:!1}],j=[{label:e("Company Name","bit-integrations"),key:"Name",required:!0},{label:e("Website","bit-integrations"),key:"Website",required:!1},{label:e("Phone Number","bit-integrations"),key:"Phone",required:!1},{label:e("Description","bit-integrations"),key:"Description",required:!1},{label:e("Billing Street","bit-integrations"),key:"BillingStreet",required:!1},{label:e("Billing City","bit-integrations"),key:"BillingCity",required:!1},{label:e("Billing State","bit-integrations"),key:"BillingState",required:!1},{label:e("Billing Country","bit-integrations"),key:"BillingCountry",required:!1},{label:e("Billing Postal Code","bit-integrations"),key:"BillingPostalCode",required:!1},{label:e("Shipping Street","bit-integrations"),key:"ShippingStreet",required:!1},{label:e("Shipping City","bit-integrations"),key:"ShippingCity",required:!1},{label:e("Shipping State","bit-integrations"),key:"ShippingState",required:!1},{label:e("Shipping Country","bit-integrations"),key:"ShippingCountry",required:!1},{label:e("Shipping Postal Code","bit-integrations"),key:"ShippingPostalCode",required:!1}],D=[{label:e("Deal Name","bit-integrations"),key:"Name",required:!0},{label:e("Amount","bit-integrations"),key:"Amount",required:!1},{label:e("Close Date","bit-integrations"),key:"CloseDate",required:!1}],[t,u]=n.useState({name:"CompanyHub",type:"CompanyHub",sub_domain:"",api_key:"",field_map:[{formField:"",companyHubFormField:""}],actionName:"",contactFields:v,companyFields:j,dealFields:D,actions:{}}),F=()=>{d(!0),H(a,i,p,t,y,"","",d).then(o=>{var q;o.success?(b.success((q=o.data)==null?void 0:q.msg),y(p)):b.error(o.data||o)})},B=S=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!x(t)){b.error(e("Please map mandatory fields","bit-integrations"));return}if(t.actionName==="deal"&&!t.selectedStage){b.error(e("Please select a Deal Stage","bit-integrations"));return}t.field_map.length>0&&k(S)};return s.jsxs("div",{children:[s.jsx(T,{snack:P,setSnackbar:g}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(E,{step:3,active:l})}),s.jsx(G,{companyHubConf:t,setCompanyHubConf:u,step:l,setStep:k,loading:c,setLoading:f,setSnackbar:g}),s.jsxs("div",{className:"btcd-stp-page",style:N({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[s.jsx(M,{formFields:r,companyHubConf:t,setCompanyHubConf:u,loading:c,setLoading:f,isLoading:m,setIsLoading:d,setSnackbar:g}),(t==null?void 0:t.actionName)&&s.jsxs("button",{onClick:()=>B(3),disabled:!x(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",s.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&s.jsx(A,{step:l,saveConfig:()=>F(),isLoading:m,dataConf:t,setDataConf:u,formFields:r})]})}export{te as default};
