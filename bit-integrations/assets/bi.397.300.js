import{u as j,o as P,r,j as t}from"./main-34.js";import"./bi.188.437.js";import{B as M}from"./bi.886.697.js";import{_ as d}from"./bi.671.0.js";import{S}from"./bi.213.13.js";import{I,i as C}from"./bi.633.3.js";import N from"./bi.556.180.js";import{M as k,c as _,r as v}from"./bi.694.706.js";import"./bi.914.9.js";import"./bi.22.11.js";import"./bi.690.14.js";import"./bi.379.699.js";import"./bi.623.673.js";import"./bi.808.674.js";function G({formFields:l,setFlow:g,flow:u,allIntegURL:x}){const h=j(),{formID:m}=P(),[p,i]=r.useState(!1),[s,c]=r.useState(1),[b,a]=r.useState({show:!1}),[e,o]=r.useState({name:"Mail Poet",type:"Mail Poet",field_map:[{formField:"",mailPoetField:""}],actions:{}}),f=n=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),n===3){if(!_(e)){a({show:!0,msg:d("Please map all required fields to continue.","bit-integrations")});return}e.name!==""&&e.field_map.length>0&&c(n)}else c(n),n===2&&e.name&&v(m,e,o,i,a)};return t.jsxs("div",{children:[t.jsx(S,{snack:b,setSnackbar:a}),t.jsx("div",{className:"txt-center mt-2"}),t.jsx(N,{formID:m,mailPoetConf:e,setMailPoetConf:o,step:s,nextPage:f,isLoading:p,setIsLoading:i,setSnackbar:a}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto",minHeight:s===2&&"200px"},children:[t.jsx(k,{formID:m,formFields:l,mailPoetConf:e,setMailPoetConf:o,setSnackbar:a,setIsLoading:i}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>f(3),disabled:e.lists===""||e.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[d("Next","bit-integrations"),t.jsx(M,{className:"ml-1 rev-icn"})]})]}),t.jsx(I,{step:s,saveConfig:()=>C(u,g,x,e,h,"","",i),isLoading:p,dataConf:e,setDataConf:o,formFields:l})]})}export{G as default};