import{u as b,o as k,r as i,j as e}from"./main-615.js";import{_ as m}from"./bi.394.0.js";import"./bi.991.437.js";import{B}from"./bi.560.697.js";import{S as I}from"./bi.700.13.js";import{S}from"./bi.440.922.js";import{I as v,g as _}from"./bi.819.3.js";import M from"./bi.513.235.js";import{c as N}from"./bi.209.824.js";import{B as w}from"./bi.969.825.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.681.699.js";function J({formFields:c,setFlow:d,flow:f,allIntegURL:u}){const g=b(),{formID:l}=k(),[o,r]=i.useState(!1),[s,p]=i.useState(1),[h,a]=i.useState({show:!1}),[t,n]=i.useState({name:"BenchMark",type:"BenchMark",api_secret:"",field_map:[{formField:"",benchMarkField:""}],actions:{}}),x=j=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),j===3){if(!N(t)){a({show:!0,msg:m("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.listId)){a({show:!0,msg:m("Please select list to continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&p(3)}};return e.jsxs("div",{children:[e.jsx(I,{snack:h,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(S,{step:3,active:s})}),e.jsx(M,{formID:l,benchMarkConf:t,setBenchMarkConf:n,step:s,setstep:p,isLoading:o,setIsLoading:r,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(w,{formID:l,formFields:c,benchMarkConf:t,setBenchMarkConf:n,isLoading:o,setIsLoading:r,setSnackbar:a}),e.jsxs("button",{onClick:()=>x(3),disabled:!(t!=null&&t.listId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[m("Next","bit-integrations"),"  ",e.jsx(B,{className:"ml-1 rev-icn"})]})]}),e.jsx(v,{step:s,saveConfig:()=>_(f,d,u,t,g,"","",r),isLoading:o,dataConf:t,setDataConf:n,formFields:c})]})}export{J as default};
