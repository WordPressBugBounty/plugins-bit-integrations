import{u as w,l as j,r as n,j as t}from"./main-650.js";import{_ as s,d as v,I as S,s as I}from"./bi.541.15.js";import{B as C}from"./bi.912.697.js";import{S as _}from"./bi.326.902.js";import W from"./bi.231.199.js";import{h as q,c as g}from"./bi.221.738.js";import{Z as N}from"./bi.112.737.js";import"./bi.770.713.js";import"./bi.619.660.js";import"./bi.119.661.js";const Z=r=>{const l={},c=window.location.href.replace(`${window.opener.location.href}`,"").split("&");c&&c.forEach(u=>{const a=u.split("=");a[1]&&(l[a[0]]=a[1])}),localStorage.setItem(`__${r}`,JSON.stringify(l)),window.close()};function $({formFields:r,setFlow:l,flow:f,allIntegURL:c}){const u=w(),{formID:a}=j(),[m,p]=n.useState(!1),[i,b]=n.useState(1),[h,o]=n.useState({show:!1}),y=[{key:"first_name",label:s("First Name","bit-integrations"),required:!0},{key:"last_name",label:s("Last Name","bit-integrations"),required:!0},{key:"email",label:s("Email","bit-integrations"),required:!0},{key:"city",label:s("City","bit-integrations"),required:!1},{key:"country",label:s("Country","bit-integrations"),required:!1},{key:"phone",label:s("Phone","bit-integrations"),required:!1},{key:"job_title",label:s("Job Title","bit-integrations"),required:!1},{key:"zip",label:s("Zip","bit-integrations"),required:!1}],[e,d]=n.useState({name:"Zoom Webinar",type:"Zoom Webinar",clientId:"",clientSecret:"",zoomId:"",field_map:[{formField:"",zoomField:""}],zoomWebinarFields:y,allActions:[{value:"Create Attendee",key:1},{value:"Delete Attendee",key:2},{value:"Create User",key:3},{value:"Delete User",key:4}],selectedActions:null,actions:{}});n.useEffect(()=>{window.opener&&Z("zoom")},[]);const k=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!g(e)){o({show:!0,msg:s("Please map fields to continue.","bit-integrations")});return}e.field_map.length>0&&b(3)};return t.jsxs("div",{children:[t.jsx(v,{snack:h,setSnackbar:o}),t.jsx("div",{className:"txt-center w-9 mt-2",children:t.jsx(_,{step:3,active:i})}),t.jsx(W,{formID:a,zoomWebinarConf:e,setZoomWebinarConf:d,step:i,setStep:b,setSnackbar:o,isLoading:m,setIsLoading:p}),t.jsxs("div",{className:"btcd-stp-page",style:{width:i===2&&900,height:i===2&&"100%"},children:[t.jsx(N,{formID:a,formFields:r,handleInput:x=>q(x,e,d),zoomWebinarConf:e,setZoomWebinarConf:d,isLoading:m,setIsLoading:p,setSnackbar:o}),t.jsxs("button",{onClick:()=>k(),disabled:e.field_map.length<2||m||!e.id||!g(e)||e.selectedActions==null,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[s("Next","bit-integrations"),t.jsx(C,{className:"ml-1 rev-icn"})]})]}),t.jsx(S,{step:i,saveConfig:()=>I({flow:f,setFlow:l,allIntegURL:c,navigate:u,conf:e,setIsLoading:p,setSnackbar:o}),isLoading:m,dataConf:e,setDataConf:d,formFields:r})]})}export{$ as default};
