import{u as b,o as j,r as a,j as e}from"./main-920.js";import{_ as c}from"./bi.247.0.js";import"./bi.761.437.js";import{B as S}from"./bi.306.698.js";import{S as v}from"./bi.970.13.js";import{S as D}from"./bi.319.923.js";import{I as _,i as k}from"./bi.658.3.js";import N from"./bi.551.236.js";import{c as q}from"./bi.124.827.js";import{D as w}from"./bi.76.828.js";import"./bi.140.9.js";import"./bi.941.11.js";import"./bi.706.14.js";import"./bi.898.700.js";function J({formFields:m,setFlow:d,flow:f,allIntegURL:u}){const g=b(),{formID:l}=j(),[o,r]=a.useState(!1),[s,p]=a.useState(1),[x,i]=a.useState({show:!1}),[t,n]=a.useState({name:"DirectIq",type:"DirectIq",client_id:"",client_secret:"",field_map:[{formField:"",directIqField:""}],actions:{}}),h=I=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),I===3){if(!q(t)){i({show:!0,msg:c("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.listId)){i({show:!0,msg:c("Please select list to continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&p(3)}};return e.jsxs("div",{children:[e.jsx(v,{snack:x,setSnackbar:i}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(D,{step:3,active:s})}),e.jsx(N,{formID:l,directIqConf:t,setDirectIqConf:n,step:s,setstep:p,isLoading:o,setIsLoading:r,setSnackbar:i}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(w,{formID:l,formFields:m,directIqConf:t,setDirectIqConf:n,isLoading:o,setIsLoading:r,setSnackbar:i}),e.jsxs("button",{onClick:()=>h(3),disabled:!(t!=null&&t.listId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[c("Next","bit-integrations"),"  ",e.jsx(S,{className:"ml-1 rev-icn"})]})]}),e.jsx(_,{step:s,saveConfig:()=>k(f,d,u,t,g,"","",r),isLoading:o,dataConf:t,setDataConf:n,formFields:m})]})}export{J as default};
