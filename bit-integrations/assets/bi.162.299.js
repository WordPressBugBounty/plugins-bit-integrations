import{u as b,l as j,r as i,j as e}from"./main-650.js";import{d as I,_ as m,I as S,F as A}from"./bi.541.15.js";import{B as _}from"./bi.912.697.js";import{S as k}from"./bi.326.902.js";import C from"./bi.786.181.js";import{d as y}from"./bi.863.694.js";import{A as N}from"./bi.489.695.js";import"./bi.770.713.js";import"./bi.619.660.js";import"./bi.119.661.js";function z({formFields:c,setFlow:d,flow:g,allIntegURL:u}){const f=b(),{formID:l}=j(),[n,o]=i.useState(!1),[s,p]=i.useState(1),[x,a]=i.useState({show:!1}),[t,r]=i.useState({name:"Active Campaign",type:"ActiveCampaign",api_url:"",api_key:"",field_map:[{formField:"",activeCampaignField:""}],actions:{}}),h=v=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),v===3){if(!y(t)){a({show:!0,msg:m("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.listId)){a({show:!0,msg:m("Please select list to continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&p(3)}};return e.jsxs("div",{children:[e.jsx(I,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(k,{step:3,active:s})}),e.jsx(C,{formID:l,activeCampaingConf:t,setActiveCampaingConf:r,step:s,setstep:p,isLoading:n,setIsLoading:o,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(N,{formID:l,formFields:c,activeCampaingConf:t,setActiveCampaingConf:r,isLoading:n,setIsLoading:o,setSnackbar:a}),e.jsxs("button",{onClick:()=>h(3),disabled:!(t!=null&&t.listId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[m("Next","bit-integrations"),"  ",e.jsx(_,{className:"ml-1 rev-icn"})]})]}),e.jsx(S,{step:s,saveConfig:()=>A(g,d,u,t,f,"","",o),isLoading:n,dataConf:t,setDataConf:r,formFields:c})]})}export{z as default};
