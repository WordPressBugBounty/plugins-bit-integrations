import{u as b,o as j,r as a,j as t}from"./main-615.js";import"./bi.991.437.js";import{B as S}from"./bi.560.697.js";import{_ as T}from"./bi.394.0.js";import{S as _}from"./bi.700.13.js";import{S as v}from"./bi.440.922.js";import{I,g as y}from"./bi.819.3.js";import C from"./bi.991.185.js";import{T as k}from"./bi.360.714.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.628.713.js";import"./bi.681.699.js";import"./bi.941.685.js";import"./bi.214.715.js";/* empty css          */function O({formFields:m,setFlow:l,flow:d,allIntegURL:f}){const x=b(),{formID:p}=j(),[o,r]=a.useState(!1),[s,c]=a.useState(1),[u,i]=a.useState({show:!1}),[e,n]=a.useState({name:"Telegram",type:"Telegram",parse_mode:"HTML",bot_api_key:"",chat_id:"",body:"",actions:{}}),h=g=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),g===3&&e.name!==""&&e.chat_id&&c(g)};return t.jsxs("div",{children:[t.jsx(_,{snack:u,setSnackbar:i}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(v,{step:3,active:s})}),t.jsx(C,{formID:p,telegramConf:e,setTelegramConf:n,step:s,setstep:c,isLoading:o,setIsLoading:r,setSnackbar:i}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto",minHeight:s===2&&"200px"},children:[t.jsx(k,{formID:p,formFields:m,telegramConf:e,setTelegramConf:n,isLoading:o,setIsLoading:r,setSnackbar:i}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>h(3),disabled:e.chat_id==="",className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[T("Next","bit-integrations"),t.jsx(S,{className:"ml-1 rev-icn"})]})]}),t.jsx(I,{step:s,saveConfig:()=>y(d,l,f,e,x,0,!1,r),isLoading:o,dataConf:e,setDataConf:n,formFields:m})]})}export{O as default};