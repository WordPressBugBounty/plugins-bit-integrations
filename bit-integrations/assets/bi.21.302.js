import{u as j,o as P,r,j as t}from"./main-320.js";import"./bi.795.440.js";import{B as M}from"./bi.27.727.js";import{_ as d}from"./bi.576.0.js";import{S}from"./bi.51.13.js";import{I,i as C}from"./bi.337.3.js";import N from"./bi.167.181.js";import{M as k,c as _,r as v}from"./bi.745.720.js";import"./bi.155.9.js";import"./bi.440.11.js";import"./bi.574.14.js";import"./bi.382.733.js";import"./bi.468.689.js";import"./bi.775.690.js";function G({formFields:l,setFlow:g,flow:u,allIntegURL:x}){const h=j(),{formID:m}=P(),[p,i]=r.useState(!1),[s,c]=r.useState(1),[b,a]=r.useState({show:!1}),[e,o]=r.useState({name:"Mail Poet",type:"Mail Poet",field_map:[{formField:"",mailPoetField:""}],actions:{}}),f=n=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),n===3){if(!_(e)){a({show:!0,msg:d("Please map all required fields to continue.","bit-integrations")});return}e.name!==""&&e.field_map.length>0&&c(n)}else c(n),n===2&&e.name&&v(m,e,o,i,a)};return t.jsxs("div",{children:[t.jsx(S,{snack:b,setSnackbar:a}),t.jsx("div",{className:"txt-center mt-2"}),t.jsx(N,{formID:m,mailPoetConf:e,setMailPoetConf:o,step:s,nextPage:f,isLoading:p,setIsLoading:i,setSnackbar:a}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto",minHeight:s===2&&"200px"},children:[t.jsx(k,{formID:m,formFields:l,mailPoetConf:e,setMailPoetConf:o,setSnackbar:a,setIsLoading:i}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>f(3),disabled:e.lists===""||e.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[d("Next","bit-integrations"),t.jsx(M,{className:"ml-1 rev-icn"})]})]}),t.jsx(I,{step:s,saveConfig:()=>C(u,g,x,e,h,"","",i),isLoading:p,dataConf:e,setDataConf:o,formFields:l})]})}export{G as default};
