import{u as b,o as E,r as a,j as t}from"./main-263.js";import"./bi.361.434.js";import{B as S}from"./bi.638.705.js";import{_ as g}from"./bi.924.0.js";import{S as v}from"./bi.428.13.js";import{S as C}from"./bi.733.915.js";import{I,g as k}from"./bi.317.3.js";import _ from"./bi.868.186.js";import{c as y}from"./bi.676.713.js";import{E as N}from"./bi.246.714.js";import"./bi.402.9.js";import"./bi.929.11.js";import"./bi.686.14.js";import"./bi.372.711.js";import"./bi.885.668.js";import"./bi.169.669.js";function O({formFields:o,setFlow:l,flow:f,allIntegURL:d}){const h=b(),{formID:r}=E(),[m,c]=a.useState(!1),[s,p]=a.useState(1),[u,i]=a.useState({show:!1}),[e,n]=a.useState({name:"Encharge",type:"Encharge",tags:"",api_key:"",field_map:[{formField:"",enChargeFields:""}],actions:{}}),x=j=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),j===3){if(!y(e)){i({show:!0,msg:g("Please map all required fields to continue.","bit-integrations")});return}e.name!==""&&e.field_map.length>0&&p(3)}};return t.jsxs("div",{children:[t.jsx(v,{snack:u,setSnackbar:i}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(C,{step:3,active:s})}),t.jsx(_,{formID:r,enchargeConf:e,setEnchargeConf:n,step:s,setstep:p,isLoading:m,setIsLoading:c,setSnackbar:i}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,minHeight:s===2&&"200",height:s===2&&"auto"},children:[t.jsx(N,{formID:r,formFields:o,enchargeConf:e,setEnchargeConf:n}),t.jsxs("button",{onClick:()=>x(3),disabled:e.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[g("Next","bit-integrations")," ",t.jsx(S,{className:"ml-1 rev-icn"})]})]}),t.jsx(I,{step:s,saveConfig:()=>k(f,l,d,e,h,"","",c),isLoading:m,dataConf:e,setDataConf:n,formFields:o})]})}export{O as default};
