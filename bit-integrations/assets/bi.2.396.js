import{u as v,o as D,r as a,j as e}from"./main-320.js";import{_ as o,d as p}from"./bi.576.0.js";import"./bi.795.440.js";import{B as S}from"./bi.27.727.js";import{S as _}from"./bi.78.940.js";import{I as F,i as N}from"./bi.337.3.js";import y from"./bi.511.253.js";import{s as T,c as d}from"./bi.843.872.js";import{D as k}from"./bi.252.873.js";import"./bi.155.9.js";import"./bi.51.13.js";import"./bi.440.11.js";import"./bi.574.14.js";import"./bi.382.733.js";import"./bi.468.689.js";import"./bi.775.690.js";function Q({formFields:r,setFlow:u,flow:f,allIntegURL:g}){const x=v(),{formID:n}=D(),[h,b]=a.useState(!1),[s,c]=a.useState(1),[l,m]=a.useState({auth:!1,customFields:!1,accounts:!1,tags:!1}),[t,i]=a.useState({name:"Drip",type:"Drip",api_token:"",accounts:[],field_map:[{formField:"",dripField:""}],actions:{},tags:[],selectedAccountId:"",dripFormFields:T,selectedTags:"",selectedStatus:"",selectedRemoveTags:""}),j=I=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),I===3){if(!d(t)){p.error(o("Please map all required fields to continue","bit-integrations"));return}if(!(t!=null&&t.selectedAccountId)){p.error(o("Please select account to continue","bit-integrations"));return}t.name!==""&&t.field_map.length>0&&c(3)}};return e.jsxs("div",{children:[e.jsx("div",{className:"txt-center mt-2",children:e.jsx(_,{step:3,active:s})}),e.jsx(y,{formID:n,dripConf:t,setDripConf:i,step:s,setstep:c,loading:l,setLoading:m}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(k,{formID:n,formFields:r,dripConf:t,setDripConf:i,loading:l,setLoading:m}),e.jsxs("button",{onClick:()=>j(3),disabled:!(t!=null&&t.selectedAccountId)||!d(t)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[o("Next","bit-integrations"),"  ",e.jsx(S,{className:"ml-1 rev-icn"})]})]}),e.jsx(F,{step:s,saveConfig:()=>N(f,u,g,t,x,"","",b),isLoading:h,dataConf:t,setDataConf:i,formFields:r})]})}export{Q as default};
