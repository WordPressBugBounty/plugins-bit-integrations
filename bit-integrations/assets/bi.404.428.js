import{u as j,o as I,r as i,j as e}from"./main-556.js";import{_ as l}from"./bi.562.0.js";import"./bi.838.440.js";import{B as S}from"./bi.39.749.js";import{S as v}from"./bi.686.13.js";import{S as _}from"./bi.229.963.js";import{I as k,g as Z}from"./bi.308.3.js";import y from"./bi.795.275.js";import{c as M}from"./bi.148.938.js";import{Z as N}from"./bi.44.939.js";import"./bi.657.9.js";import"./bi.510.11.js";import"./bi.244.14.js";import"./bi.448.755.js";function J({formFields:m,setFlow:d,flow:g,allIntegURL:u}){const f=j(),{formID:c}=I(),[o,n]=i.useState(!1),[s,p]=i.useState(1),[x,a]=i.useState({show:!1}),[t,r]=i.useState({name:"ZagoMail",type:"ZagoMail",api_public_key:"",field_map:[{formField:"",zagoMailField:""}],selectedList:"",actions:{},selectedTags:[]}),h=b=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),b===3){if(!M(t)){a({show:!0,msg:l("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.listId)){a({show:!0,msg:l("Please select list to continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&p(3)}};return e.jsxs("div",{children:[e.jsx(v,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(_,{step:3,active:s})}),e.jsx(y,{formID:c,zagoMailConf:t,setZagoMailConf:r,step:s,setstep:p,isLoading:o,setIsLoading:n,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(N,{formID:c,formFields:m,zagoMailConf:t,setZagoMailConf:r,isLoading:o,setIsLoading:n,setSnackbar:a}),e.jsxs("button",{onClick:()=>h(3),disabled:!(t!=null&&t.listId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[l("Next","bit-integrations"),"  ",e.jsx(S,{className:"ml-1 rev-icn"})]})]}),e.jsx(k,{step:s,saveConfig:()=>Z(g,d,u,t,f,"","",n),isLoading:o,dataConf:t,setDataConf:r,formFields:m})]})}export{J as default};
