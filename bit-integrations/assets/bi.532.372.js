import{u as b,l as j,r as i,j as e}from"./main-650.js";import{d as v,_ as c,I as D,F as S}from"./bi.541.15.js";import{B as _}from"./bi.912.697.js";import{S as k}from"./bi.326.902.js";import N from"./bi.223.234.js";import{c as q}from"./bi.541.812.js";import{D as w}from"./bi.96.813.js";import"./bi.770.713.js";function M({formFields:l,setFlow:d,flow:u,allIntegURL:f}){const g=b(),{formID:m}=j(),[n,o]=i.useState(!1),[s,p]=i.useState(1),[x,a]=i.useState({show:!1}),[t,r]=i.useState({name:"DirectIq",type:"DirectIq",client_id:"",client_secret:"",field_map:[{formField:"",directIqField:""}],actions:{}}),h=I=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),I===3){if(!q(t)){a({show:!0,msg:c("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.listId)){a({show:!0,msg:c("Please select list to continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&p(3)}};return e.jsxs("div",{children:[e.jsx(v,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(k,{step:3,active:s})}),e.jsx(N,{formID:m,directIqConf:t,setDirectIqConf:r,step:s,setstep:p,isLoading:n,setIsLoading:o,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(w,{formID:m,formFields:l,directIqConf:t,setDirectIqConf:r,isLoading:n,setIsLoading:o,setSnackbar:a}),e.jsxs("button",{onClick:()=>h(3),disabled:!(t!=null&&t.listId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[c("Next","bit-integrations"),"  ",e.jsx(_,{className:"ml-1 rev-icn"})]})]}),e.jsx(D,{step:s,saveConfig:()=>S(u,d,f,t,g,"","",o),isLoading:n,dataConf:t,setDataConf:r,formFields:l})]})}export{M as default};
