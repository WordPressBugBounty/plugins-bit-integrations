import{u as b,l as A,r,j as t}from"./main-579.js";import{d as S,_ as d,I as C,s as I}from"./bi.919.15.js";import{B as k}from"./bi.367.697.js";import{S as v}from"./bi.655.902.js";import N from"./bi.688.170.js";import{A as _,g as y,c as w}from"./bi.157.706.js";import"./bi.339.713.js";import"./bi.850.660.js";import"./bi.517.661.js";function z({formFields:m,setFlow:f,flow:g,allIntegURL:x}){const h=b(),{formID:c}=A(),[l,i]=r.useState(!1),[e,p]=r.useState(1),[j,a]=r.useState({show:!1}),[s,n]=r.useState({name:"Autonami",type:"Autonami",field_map:[{formField:"",autonamiField:""}],actions:{}}),u=o=>{if(o==2&&s.name!=="")y(s,n,i,a),p(o);else if(o==3){if(!w(s)){a({show:!0,msg:d("Please map all required fields to continue.","bit-integrations")});return}s.field_map.length>0&&p(o)}document.getElementById("btcd-settings-wrp").scrollTop=0};return t.jsxs("div",{children:[t.jsx(S,{snack:j,setSnackbar:a}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(v,{step:3,active:e})}),t.jsx(N,{formID:c,autonamiConf:s,setAutonamiConf:n,step:e,nextPage:u,isLoading:l,setIsLoading:i,setSnackbar:a}),t.jsxs("div",{className:"btcd-stp-page",style:{width:e===2&&900,height:e===2&&"auto",minHeight:e===2&&"200px"},children:[t.jsx(_,{formID:c,formFields:m,autonamiConf:s,setAutonamiConf:n,setIsLoading:i,setSnackbar:a}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>u(3),disabled:s.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[d("Next","bit-integrations"),t.jsx(k,{className:"ml-1 rev-icn"})]})]}),t.jsx(C,{step:e,saveConfig:()=>I({flow:g,setFlow:f,allIntegURL:x,conf:s,navigate:h,setIsLoading:i,setSnackbar:a}),isLoading:l,dataConf:s,setDataConf:n,formFields:m})]})}export{z as default};