import{u as b,o as j,r as a,j as t}from"./main-263.js";import"./bi.361.434.js";import{B as S}from"./bi.638.705.js";import{_ as T}from"./bi.924.0.js";import{S as _}from"./bi.428.13.js";import{S as v}from"./bi.733.915.js";import{I,g as y}from"./bi.317.3.js";import C from"./bi.187.184.js";import{T as k}from"./bi.263.707.js";import"./bi.402.9.js";import"./bi.929.11.js";import"./bi.686.14.js";import"./bi.775.706.js";import"./bi.372.711.js";import"./bi.485.680.js";import"./bi.229.708.js";/* empty css          */function O({formFields:m,setFlow:l,flow:d,allIntegURL:f}){const x=b(),{formID:p}=j(),[o,r]=a.useState(!1),[s,c]=a.useState(1),[u,i]=a.useState({show:!1}),[e,n]=a.useState({name:"Telegram",type:"Telegram",parse_mode:"HTML",bot_api_key:"",chat_id:"",body:"",actions:{}}),h=g=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),g===3&&e.name!==""&&e.chat_id&&c(g)};return t.jsxs("div",{children:[t.jsx(_,{snack:u,setSnackbar:i}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(v,{step:3,active:s})}),t.jsx(C,{formID:p,telegramConf:e,setTelegramConf:n,step:s,setstep:c,isLoading:o,setIsLoading:r,setSnackbar:i}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto",minHeight:s===2&&"200px"},children:[t.jsx(k,{formID:p,formFields:m,telegramConf:e,setTelegramConf:n,isLoading:o,setIsLoading:r,setSnackbar:i}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>h(3),disabled:e.chat_id==="",className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[T("Next","bit-integrations"),t.jsx(S,{className:"ml-1 rev-icn"})]})]}),t.jsx(I,{step:s,saveConfig:()=>y(d,l,f,e,x,0,!1,r),isLoading:o,dataConf:e,setDataConf:n,formFields:m})]})}export{O as default};
