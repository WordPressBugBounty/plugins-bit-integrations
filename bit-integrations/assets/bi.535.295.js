import{u as j,l as P,r,j as t}from"./main-579.js";import{d as M,_ as f,I,F as S}from"./bi.919.15.js";import{B as C}from"./bi.367.697.js";import N from"./bi.220.178.js";import{M as k,c as _,r as v}from"./bi.405.690.js";import"./bi.339.713.js";import"./bi.850.660.js";import"./bi.517.661.js";function q({formFields:m,setFlow:g,flow:u,allIntegURL:x}){const h=j(),{formID:l}=P(),[c,i]=r.useState(!1),[s,p]=r.useState(1),[b,a]=r.useState({show:!1}),[e,o]=r.useState({name:"Mail Poet",type:"Mail Poet",field_map:[{formField:"",mailPoetField:""}],actions:{}}),d=n=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),n===3){if(!_(e)){a({show:!0,msg:f("Please map all required fields to continue.","bit-integrations")});return}e.name!==""&&e.field_map.length>0&&p(n)}else p(n),n===2&&e.name&&v(l,e,o,i,a)};return t.jsxs("div",{children:[t.jsx(M,{snack:b,setSnackbar:a}),t.jsx("div",{className:"txt-center mt-2"}),t.jsx(N,{formID:l,mailPoetConf:e,setMailPoetConf:o,step:s,nextPage:d,isLoading:c,setIsLoading:i,setSnackbar:a}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto",minHeight:s===2&&"200px"},children:[t.jsx(k,{formID:l,formFields:m,mailPoetConf:e,setMailPoetConf:o,setSnackbar:a,setIsLoading:i}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>d(3),disabled:e.lists===""||e.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[f("Next","bit-integrations"),t.jsx(C,{className:"ml-1 rev-icn"})]})]}),t.jsx(I,{step:s,saveConfig:()=>S(u,g,x,e,h,"","",i),isLoading:c,dataConf:e,setDataConf:o,formFields:m})]})}export{q as default};
