import{u as k,o as x,r,j as t}from"./main-119.js";import"./bi.276.437.js";import{B as S}from"./bi.13.699.js";import{_ as e}from"./bi.686.0.js";import{S as q}from"./bi.725.13.js";import{S as C}from"./bi.36.924.js";import{s as j,K as v}from"./bi.35.748.js";import I from"./bi.15.198.js";import{I as N,s as B}from"./bi.316.3.js";import{h as A,c as L}from"./bi.221.747.js";import"./bi.900.9.js";import"./bi.301.11.js";import"./bi.744.14.js";import"./bi.570.675.js";import"./bi.556.676.js";import"./bi.606.701.js";function U({formFields:d,setFlow:g,flow:c,allIntegURL:m}){const u=k(),{formID:p}=x(),[l,o]=r.useState(!1),[s,b]=r.useState(1),[f,a]=r.useState({show:!1}),y=[{key:"given_name",label:e("First Name","bit-integrations"),required:!0},{key:"middle_name",label:e("Last Name","bit-integrations"),required:!1},{key:"job_title",label:e("Job Title","bit-integrations"),required:!1},{key:"email_addresses",label:e("Email Addresses","bit-integrations"),required:!0},{key:"phone_numbers",label:e("Phone Numbers","bit-integrations"),required:!1},{key:"billing_country_code",label:e("Billing Country Code","bit-integrations"),required:!1},{key:"billing_locality",label:e("Billing Country","bit-integrations"),required:!1},{key:"billing_first_address_street",label:e("Billing Address Street (Line 1)","bit-integrations"),required:!1},{key:"billing_second_address_street",label:e("Billing Address Street (Line 2)","bit-integrations"),required:!1},{key:"billing_zip_code",label:e("Billing Zip Code","bit-integrations"),required:!1},{key:"shipping_country_code",label:e("Shipping Country Code","bit-integrations"),required:!1},{key:"shipping_locality",label:e("Shipping Country","bit-integrations"),required:!1},{key:"shipping_first_address_street",label:e("Shipping Address Street (Line 1)","bit-integrations"),required:!1},{key:"shipping_second_address_street",label:e("Shipping Address Street (Line 2)","bit-integrations"),required:!1},{key:"shipping_zip_code",label:e("Shipping Zip Code","bit-integrations"),required:!1},{key:"anniversary",label:e("Anniversary","bit-integrations"),required:!1},{key:"birthday",label:e("Birthday","bit-integrations"),required:!1},{key:"fax_numbers",label:e("Fax Numbers","bit-integrations"),required:!1}],[i,n]=r.useState({name:"Keap",type:"Keap",clientId:"",clientSecret:"",keapId:"",field_map:[{formField:"",keapField:""}],contactFields:y,customFields:[],actions:{}});r.useEffect(()=>{window.opener&&j("keap")},[]);const _=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!L(i)){a({show:!0,msg:e("Please map fields to continue.","bit-integrations")});return}i.field_map.length>0&&b(3)};return t.jsxs("div",{children:[t.jsx(q,{snack:f,setSnackbar:a}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(C,{step:3,active:s})}),t.jsx(I,{formID:p,keapConf:i,setKeapConf:n,step:s,setstep:b,setSnackbar:a,isLoading:l,setIsLoading:o}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[t.jsx(v,{formID:p,formFields:d,handleInput:h=>A(h,i,n),keapConf:i,setKeapConf:n,isLoading:l,setIsLoading:o,setSnackbar:a}),t.jsxs("button",{onClick:()=>_(),disabled:i.field_map.length<2,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),t.jsx(S,{className:"ml-1 rev-icn"})]})]}),t.jsx(N,{step:s,saveConfig:()=>B({flow:c,setFlow:g,allIntegURL:m,navigate:u,conf:i,setIsLoading:o,setSnackbar:a}),isLoading:l,dataConf:i,setDataConf:n,formFields:d})]})}export{U as default};
