import{u as j,o as I,r as i,j as e}from"./main-34.js";import{_ as m}from"./bi.671.0.js";import"./bi.188.437.js";import{B as L}from"./bi.886.697.js";import{S}from"./bi.213.13.js";import{S as v}from"./bi.851.922.js";import{I as k,i as _}from"./bi.633.3.js";import y from"./bi.263.254.js";import{c as N}from"./bi.989.860.js";import{L as w}from"./bi.45.861.js";import"./bi.914.9.js";import"./bi.22.11.js";import"./bi.690.14.js";import"./bi.379.699.js";function J({formFields:c,setFlow:d,flow:f,allIntegURL:g}){const u=j(),{formID:p}=I(),[o,n]=i.useState(!1),[s,l]=i.useState(1),[x,a]=i.useState({show:!1}),[t,r]=i.useState({name:"Lemlist",type:"Lemlist",api_key:"",field_map:[{formField:"",lemlistField:""}],actions:{}}),h=b=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),b===3){if(!N(t)){a({show:!0,msg:m("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.campaignId)){a({show:!0,msg:m("Please select list to continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&l(3)}};return e.jsxs("div",{children:[e.jsx(S,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(v,{step:3,active:s})}),e.jsx(y,{formID:p,lemlistConf:t,setLemlistConf:r,step:s,setstep:l,isLoading:o,setIsLoading:n,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(w,{formID:p,formFields:c,lemlistConf:t,setLemlistConf:r,isLoading:o,setIsLoading:n,setSnackbar:a}),e.jsxs("button",{onClick:()=>h(3),disabled:!(t!=null&&t.campaignId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[m("Next","bit-integrations"),"  ",e.jsx(L,{className:"ml-1 rev-icn"})]})]}),e.jsx(k,{step:s,saveConfig:()=>_(f,d,g,t,u,"","",n),isLoading:o,dataConf:t,setDataConf:r,formFields:c})]})}export{J as default};
