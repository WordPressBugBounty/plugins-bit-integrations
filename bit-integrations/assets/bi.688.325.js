import{u as b,o as S,r,j as t}from"./main-494.js";import"./bi.23.437.js";import{B as A}from"./bi.776.699.js";import{_ as f}from"./bi.185.0.js";import{S as C}from"./bi.107.13.js";import{S as I}from"./bi.719.924.js";import{I as k,s as v}from"./bi.104.3.js";import N from"./bi.621.172.js";import{A as _,g as y,c as w}from"./bi.741.723.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.136.701.js";import"./bi.378.675.js";import"./bi.950.676.js";function K({formFields:m,setFlow:d,flow:g,allIntegURL:x}){const h=b(),{formID:c}=S(),[p,i]=r.useState(!1),[e,l]=r.useState(1),[j,a]=r.useState({show:!1}),[s,o]=r.useState({name:"Autonami",type:"Autonami",field_map:[{formField:"",autonamiField:""}],actions:{}}),u=n=>{if(n==2&&s.name!=="")y(s,o,i,a),l(n);else if(n==3){if(!w(s)){a({show:!0,msg:f("Please map all required fields to continue.","bit-integrations")});return}s.field_map.length>0&&l(n)}document.getElementById("btcd-settings-wrp").scrollTop=0};return t.jsxs("div",{children:[t.jsx(C,{snack:j,setSnackbar:a}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(I,{step:3,active:e})}),t.jsx(N,{formID:c,autonamiConf:s,setAutonamiConf:o,step:e,nextPage:u,isLoading:p,setIsLoading:i,setSnackbar:a}),t.jsxs("div",{className:"btcd-stp-page",style:{width:e===2&&900,height:e===2&&"auto",minHeight:e===2&&"200px"},children:[t.jsx(_,{formID:c,formFields:m,autonamiConf:s,setAutonamiConf:o,setIsLoading:i,setSnackbar:a}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>u(3),disabled:s.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[f("Next","bit-integrations"),t.jsx(A,{className:"ml-1 rev-icn"})]})]}),t.jsx(k,{step:e,saveConfig:()=>v({flow:g,setFlow:d,allIntegURL:x,conf:s,navigate:h,setIsLoading:i,setSnackbar:a}),isLoading:p,dataConf:s,setDataConf:o,formFields:m})]})}export{K as default};
