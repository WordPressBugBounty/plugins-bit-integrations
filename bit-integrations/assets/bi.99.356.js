import{u as _,o as x,r as n,j as s}from"./main-615.js";import"./bi.991.437.js";import{B as k}from"./bi.560.697.js";import{_ as e}from"./bi.394.0.js";import{S as j}from"./bi.700.13.js";import{S as q}from"./bi.440.922.js";import{I as v,s as S}from"./bi.819.3.js";import N from"./bi.541.215.js";import{s as I,h as w,d as F,e as B}from"./bi.20.786.js";import{C as E}from"./bi.477.787.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.681.699.js";import"./bi.178.673.js";import"./bi.985.674.js";function W({formFields:c,setFlow:p,flow:u,allIntegURL:f}){const b=_(),{id:g}=x(),[l,d]=n.useState({auth:!1,list:!1,tag:!1,update:!1}),[i,m]=n.useState(1),[h,a]=n.useState({show:!1}),y=[{key:"email_address",label:e("Email","bit-integrations"),required:!0},{key:"first_name",label:e("First Name","bit-integrations"),required:!1},{key:"last_name",label:e("Last Name","bit-integrations"),required:!1},{key:"job_title",label:e("Job Title","bit-integrations"),required:!1},{key:"company_name",label:e("Company Name","bit-integrations"),required:!1},{key:"phone_number",label:e("Phone Number","bit-integrations"),required:!1},{key:"anniversary",label:e("Anniversary","bit-integrations"),required:!1},{key:"birthday_month",label:e("Birthday Month","bit-integrations"),required:!1},{key:"birthday_day",label:e("Birthday Day","bit-integrations"),required:!1}],[t,o]=n.useState({name:"ConstantContact",type:"ConstantContact",clientId:"",clientSecret:"",list_ids:"",lists:[],default:{constantContactFields:y},source_type:"",tag_ids:"",tags:[],field_map:[{formField:"",constantContactFormField:""}],address_type:"",address_field:[],phone_type:"",phone_field:[],actions:{}});n.useEffect(()=>{window.opener&&I("constantContact")},[]);const C=()=>{var r;if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),(r=t.actions)!=null&&r.address&&!F(t)){a({show:!0,msg:e("Please map address required fields to continue.","bit-integrations")});return}if(!B(t)){a({show:!0,msg:e("Please map fields to continue.","bit-integrations")});return}m(3)};return s.jsxs("div",{children:[s.jsx(j,{snack:h,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(q,{step:3,active:i})}),s.jsx(N,{constantContactConf:t,setConstantContactConf:o,step:i,setstep:m,isLoading:l,setIsLoading:d,setSnackbar:a}),s.jsxs("div",{className:"btcd-stp-page",style:{width:i===2&&900,height:i===2&&"auto"},children:[s.jsx(E,{id:g,formFields:c,handleInput:r=>w(r,t,o),constantContactConf:t,setConstantContactConf:o,isLoading:l,setIsLoading:d,setSnackbar:a}),s.jsxs("button",{onClick:()=>C(),disabled:(t==null?void 0:t.source_type)===""||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),s.jsx(k,{className:"ml-1 rev-icn"})]})]}),s.jsx(v,{step:i,saveConfig:()=>S({flow:u,setFlow:p,allIntegURL:f,navigate:b,conf:t,setIsLoading:d,setSnackbar:a}),isLoading:l===!0,dataConf:t,setDataConf:o,formFields:c})]})}export{W as default};
