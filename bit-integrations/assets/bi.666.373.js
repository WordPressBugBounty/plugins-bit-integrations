import{u as b,l as j,r as i,j as e}from"./main-830.js";import{d as I,_ as l,I as v,F as P}from"./bi.597.15.js";import{B as _}from"./bi.910.697.js";import{S as k}from"./bi.963.902.js";import N from"./bi.879.235.js";import{c as w}from"./bi.70.814.js";import{S as y}from"./bi.937.815.js";import"./bi.972.713.js";function q({formFields:c,setFlow:p,flow:u,allIntegURL:f}){const g=b(),{formID:m}=j(),[n,o]=i.useState(!1),[s,d]=i.useState(1),[x,a]=i.useState({show:!1}),[t,r]=i.useState({name:"SendPulse",type:"SendPulse",client_id:"",client_secret:"",field_map:[{formField:"",sendPulseField:""}],actions:{}}),h=S=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),S===3){if(!w(t)){a({show:!0,msg:l("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.listId)){a({show:!0,msg:l("Please select list to continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&d(3)}};return e.jsxs("div",{children:[e.jsx(I,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(k,{step:3,active:s})}),e.jsx(N,{formID:m,sendPulseConf:t,setSendPulseConf:r,step:s,setstep:d,isLoading:n,setIsLoading:o,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(y,{formID:m,formFields:c,sendPulseConf:t,setSendPulseConf:r,isLoading:n,setIsLoading:o,setSnackbar:a}),e.jsxs("button",{onClick:()=>h(3),disabled:!(t!=null&&t.listId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[l("Next","bit-integrations"),"  ",e.jsx(_,{className:"ml-1 rev-icn"})]})]}),e.jsx(v,{step:s,saveConfig:()=>P(u,p,f,t,g,"","",o),isLoading:n,dataConf:t,setDataConf:r,formFields:c})]})}export{q as default};
