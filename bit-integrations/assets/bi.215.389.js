import{u as v,l as D,r as a,j as e}from"./main-650.js";import{_ as o,I as S,F as _,c as m}from"./bi.541.15.js";import{B as F}from"./bi.912.697.js";import{S as N}from"./bi.326.902.js";import y from"./bi.690.250.js";import{s as T,c as p}from"./bi.336.842.js";import{D as k}from"./bi.773.843.js";import"./bi.770.713.js";import"./bi.619.660.js";import"./bi.119.661.js";function M({formFields:n,setFlow:u,flow:f,allIntegURL:g}){const x=v(),{formID:r}=D(),[h,b]=a.useState(!1),[s,c]=a.useState(1),[l,d]=a.useState({auth:!1,customFields:!1,accounts:!1,tags:!1}),[t,i]=a.useState({name:"Drip",type:"Drip",api_token:"",accounts:[],field_map:[{formField:"",dripField:""}],actions:{},tags:[],selectedAccountId:"",dripFormFields:T,selectedTags:"",selectedStatus:"",selectedRemoveTags:""}),j=I=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),I===3){if(!p(t)){m.error(o("Please map all required fields to continue","bit-integrations"));return}if(!(t!=null&&t.selectedAccountId)){m.error(o("Please select account to continue","bit-integrations"));return}t.name!==""&&t.field_map.length>0&&c(3)}};return e.jsxs("div",{children:[e.jsx("div",{className:"txt-center mt-2",children:e.jsx(N,{step:3,active:s})}),e.jsx(y,{formID:r,dripConf:t,setDripConf:i,step:s,setstep:c,loading:l,setLoading:d}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(k,{formID:r,formFields:n,dripConf:t,setDripConf:i,loading:l,setLoading:d}),e.jsxs("button",{onClick:()=>j(3),disabled:!(t!=null&&t.selectedAccountId)||!p(t)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[o("Next","bit-integrations"),"  ",e.jsx(F,{className:"ml-1 rev-icn"})]})]}),e.jsx(S,{step:s,saveConfig:()=>_(f,u,g,t,x,"","",b),isLoading:h,dataConf:t,setDataConf:i,formFields:n})]})}export{M as default};
