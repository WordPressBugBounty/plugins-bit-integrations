import{u as S,l as F,r as n,j as t}from"./main-29.js";import{d as I,_ as m,I as N,F as v}from"./bi.860.15.js";import{B as _}from"./bi.22.698.js";import{S as k}from"./bi.885.903.js";import w from"./bi.98.184.js";import{F as y,c as L}from"./bi.166.704.js";import"./bi.244.714.js";import"./bi.831.661.js";import"./bi.392.662.js";function A({formFields:c,setFlow:g,flow:f,allIntegURL:x}){const h=S(),{formID:u}=F(),[i,o]=n.useState(!1),[b,j]=n.useState({}),[s,d]=n.useState(1),[C,a]=n.useState({show:!1}),[e,r]=n.useState({name:"Fluent CRM",type:"Fluent Crm",actionName:"",field_map:[{formField:"",fluentCRMField:""}],actions:{}}),p=l=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),l===3){if(!L(e)){a({show:!0,msg:m("Please map all required fields to continue.","bit-integrations")});return}if((e==null?void 0:e.actionName)==="add-user"&&!e.list_id){a({show:!0,msg:m("Please select list to continue.","bit-integrations")});return}e.name!==""&&e.field_map.length>0&&d(l)}else d(l)};return t.jsxs("div",{children:[t.jsx(I,{snack:C,setSnackbar:a}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(k,{step:3,active:s})}),t.jsx(w,{formID:u,fluentCrmConf:e,setFluentCrmConf:r,step:s,nextPage:p,isLoading:i,setIsLoading:o,setSnackbar:a}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto",minHeight:s===2&&"200px"},children:[t.jsx(y,{formID:u,formFields:c,fluentCrmConf:e,setFluentCrmConf:r,isLoading:i,setIsLoading:o,loading:b,setLoading:j,setSnackbar:a}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>p(3),disabled:e.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[m("Next","bit-integrations"),t.jsx(_,{className:"ml-1 rev-icn"})]})]}),t.jsx(N,{step:s,saveConfig:()=>v(f,g,x,e,h,"","",o),isLoading:i,dataConf:e,setDataConf:r,formFields:c})]})}export{A as default};
