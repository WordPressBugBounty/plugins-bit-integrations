import{u as C,o as I,r as o,j as e}from"./main-615.js";import{_ as a}from"./bi.394.0.js";import"./bi.991.437.js";import{B as S}from"./bi.560.697.js";import{S as k}from"./bi.700.13.js";import{S as v}from"./bi.440.922.js";import{I as y,g as N}from"./bi.819.3.js";import _ from"./bi.709.256.js";import{c as M}from"./bi.969.864.js";import{C as w}from"./bi.639.865.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.681.699.js";import"./bi.178.673.js";import"./bi.985.674.js";function Q({formFields:l,setFlow:d,flow:g,allIntegURL:u}){const f=C(),{formID:p}=I(),[r,n]=o.useState(!1),[s,c]=o.useState(1),[b,i]=o.useState({show:!1}),x=[{key:"Name",label:a("Name","bit-integrations"),required:!1},{key:"EmailAddress",label:a("Email Address","bit-integrations"),required:!0}],[t,m]=o.useState({name:"CampaignMonitor",type:"CampaignMonitor",client_id:"",api_key:"",field_map:[{formField:"",campaignMonitorField:""}],subscriberFields:x,actions:{}}),h=j=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),j===3){if(!M(t)){i({show:!0,msg:a("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.listId)){i({show:!0,msg:a("Please select list to continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&c(3)}};return e.jsxs("div",{children:[e.jsx(k,{snack:b,setSnackbar:i}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(v,{step:3,active:s})}),e.jsx(_,{formID:p,campaignMonitorConf:t,setCampaignMonitorConf:m,step:s,setstep:c,isLoading:r,setIsLoading:n,setSnackbar:i}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(w,{formID:p,formFields:l,campaignMonitorConf:t,setCampaignMonitorConf:m,isLoading:r,setIsLoading:n,setSnackbar:i}),e.jsxs("button",{onClick:()=>h(3),disabled:!(t!=null&&t.listId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[a("Next","bit-integrations"),"  ",e.jsx(S,{className:"ml-1 rev-icn"})]})]}),e.jsx(y,{step:s,saveConfig:()=>N(g,d,u,t,f,"","",n),isLoading:r,dataConf:t,setDataConf:m,formFields:l})]})}export{Q as default};
