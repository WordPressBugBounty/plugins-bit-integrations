import{u as b,o as j,r as a,j as t}from"./main-320.js";import"./bi.795.440.js";import{B as S}from"./bi.27.727.js";import{_ as T}from"./bi.576.0.js";import{S as _}from"./bi.51.13.js";import{S as v}from"./bi.78.940.js";import{I,i as y}from"./bi.337.3.js";import C from"./bi.930.186.js";import{T as k}from"./bi.586.729.js";import"./bi.155.9.js";import"./bi.440.11.js";import"./bi.574.14.js";import"./bi.834.728.js";import"./bi.382.733.js";import"./bi.387.701.js";import"./bi.645.730.js";/* empty css          */function O({formFields:m,setFlow:g,flow:d,allIntegURL:f}){const x=b(),{formID:p}=j(),[o,r]=a.useState(!1),[s,c]=a.useState(1),[u,i]=a.useState({show:!1}),[e,n]=a.useState({name:"Telegram",type:"Telegram",parse_mode:"HTML",bot_api_key:"",chat_id:"",body:"",actions:{}}),h=l=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),l===3&&e.name!==""&&e.chat_id&&c(l)};return t.jsxs("div",{children:[t.jsx(_,{snack:u,setSnackbar:i}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(v,{step:3,active:s})}),t.jsx(C,{formID:p,telegramConf:e,setTelegramConf:n,step:s,setstep:c,isLoading:o,setIsLoading:r,setSnackbar:i}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto",minHeight:s===2&&"200px"},children:[t.jsx(k,{formID:p,formFields:m,telegramConf:e,setTelegramConf:n,isLoading:o,setIsLoading:r,setSnackbar:i}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>h(3),disabled:e.chat_id==="",className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[T("Next","bit-integrations"),t.jsx(S,{className:"ml-1 rev-icn"})]})]}),t.jsx(I,{step:s,saveConfig:()=>y(d,g,f,e,x,0,!1,r),isLoading:o,dataConf:e,setDataConf:n,formFields:m})]})}export{O as default};
