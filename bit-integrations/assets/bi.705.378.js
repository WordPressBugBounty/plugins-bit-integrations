import{u as b,o as j,r as a,j as e}from"./main-119.js";import{_ as m}from"./bi.686.0.js";import"./bi.276.437.js";import{B as I}from"./bi.13.699.js";import{S as v}from"./bi.725.13.js";import{S as P}from"./bi.36.924.js";import{I as _,i as k}from"./bi.316.3.js";import N from"./bi.55.237.js";import{c as w}from"./bi.464.830.js";import{S as y}from"./bi.796.831.js";import"./bi.900.9.js";import"./bi.301.11.js";import"./bi.744.14.js";import"./bi.606.701.js";function J({formFields:l,setFlow:d,flow:u,allIntegURL:f}){const g=b(),{formID:c}=j(),[n,o]=a.useState(!1),[s,p]=a.useState(1),[x,i]=a.useState({show:!1}),[t,r]=a.useState({name:"SendPulse",type:"SendPulse",client_id:"",client_secret:"",field_map:[{formField:"",sendPulseField:""}],actions:{}}),h=S=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),S===3){if(!w(t)){i({show:!0,msg:m("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.listId)){i({show:!0,msg:m("Please select list to continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&p(3)}};return e.jsxs("div",{children:[e.jsx(v,{snack:x,setSnackbar:i}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(P,{step:3,active:s})}),e.jsx(N,{formID:c,sendPulseConf:t,setSendPulseConf:r,step:s,setstep:p,isLoading:n,setIsLoading:o,setSnackbar:i}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(y,{formID:c,formFields:l,sendPulseConf:t,setSendPulseConf:r,isLoading:n,setIsLoading:o,setSnackbar:i}),e.jsxs("button",{onClick:()=>h(3),disabled:!(t!=null&&t.listId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[m("Next","bit-integrations"),"  ",e.jsx(I,{className:"ml-1 rev-icn"})]})]}),e.jsx(_,{step:s,saveConfig:()=>k(u,d,f,t,g,"","",o),isLoading:n,dataConf:t,setDataConf:r,formFields:l})]})}export{J as default};
