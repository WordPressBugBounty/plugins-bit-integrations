import{u as j,o as S,r as i,j as e}from"./main-556.js";import{_ as c}from"./bi.562.0.js";import"./bi.838.440.js";import{B as y}from"./bi.39.749.js";import{S as I}from"./bi.686.13.js";import{S as v}from"./bi.229.963.js";import{I as M,g as _}from"./bi.308.3.js";import k from"./bi.205.254.js";import{c as N}from"./bi.260.897.js";import{M as w}from"./bi.758.898.js";import"./bi.657.9.js";import"./bi.510.11.js";import"./bi.244.14.js";import"./bi.448.755.js";function J({formFields:m,setFlow:d,flow:f,allIntegURL:u}){const g=j(),{formID:l}=S(),[o,n]=i.useState(!1),[s,p]=i.useState(1),[x,a]=i.useState({show:!1}),[t,r]=i.useState({name:"Sarbacane(Mailify)",type:"Sarbacane(Mailify)",account_id:"",api_key:"",field_map:[{formField:"",mailifyField:""}],actions:{}}),h=b=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),b===3){if(!N(t)){a({show:!0,msg:c("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.listId)){a({show:!0,msg:c("Please select list to continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&p(3)}};return e.jsxs("div",{children:[e.jsx(I,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(v,{step:3,active:s})}),e.jsx(k,{formID:l,mailifyConf:t,setMailifyConf:r,step:s,setstep:p,isLoading:o,setIsLoading:n,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(w,{formID:l,formFields:m,mailifyConf:t,setMailifyConf:r,isLoading:o,setIsLoading:n,setSnackbar:a}),e.jsxs("button",{onClick:()=>h(3),disabled:!(t!=null&&t.listId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[c("Next","bit-integrations"),"  ",e.jsx(y,{className:"ml-1 rev-icn"})]})]}),e.jsx(M,{step:s,saveConfig:()=>_(f,d,u,t,g,"","",n),isLoading:o,dataConf:t,setDataConf:r,formFields:m})]})}export{J as default};
