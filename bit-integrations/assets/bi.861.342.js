import{u as w,o as S,r as n,j as t}from"./main-246.js";import"./bi.675.443.js";import{B as j}from"./bi.430.759.js";import{_ as o}from"./bi.560.0.js";import{S as v}from"./bi.222.13.js";import{S as I}from"./bi.626.976.js";import C from"./bi.708.203.js";import{I as _,s as W}from"./bi.545.3.js";import{h as q,c as g}from"./bi.187.801.js";import{Z as N}from"./bi.447.800.js";import"./bi.947.9.js";import"./bi.142.765.js";import"./bi.975.11.js";import"./bi.557.14.js";import"./bi.300.720.js";import"./bi.924.721.js";const Z=r=>{const l={},c=window.location.href.replace(`${window.opener.location.href}`,"").split("&");c&&c.forEach(p=>{const i=p.split("=");i[1]&&(l[i[0]]=i[1])}),localStorage.setItem(`__${r}`,JSON.stringify(l)),window.close()};function O({formFields:r,setFlow:l,flow:f,allIntegURL:c}){const p=w(),{formID:i}=S(),[m,u]=n.useState(!1),[s,b]=n.useState(1),[h,a]=n.useState({show:!1}),y=[{key:"first_name",label:o("First Name","bit-integrations"),required:!0},{key:"last_name",label:o("Last Name","bit-integrations"),required:!0},{key:"email",label:o("Email","bit-integrations"),required:!0},{key:"city",label:o("City","bit-integrations"),required:!1},{key:"country",label:o("Country","bit-integrations"),required:!1},{key:"phone",label:o("Phone","bit-integrations"),required:!1},{key:"job_title",label:o("Job Title","bit-integrations"),required:!1},{key:"zip",label:o("Zip","bit-integrations"),required:!1}],[e,d]=n.useState({name:"Zoom Webinar",type:"Zoom Webinar",clientId:"",clientSecret:"",zoomId:"",field_map:[{formField:"",zoomField:""}],zoomWebinarFields:y,allActions:[{value:"Create Attendee",key:1},{value:"Delete Attendee",key:2},{value:"Create User",key:3},{value:"Delete User",key:4}],selectedActions:null,actions:{}});n.useEffect(()=>{window.opener&&Z("zoom")},[]);const k=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!g(e)){a({show:!0,msg:o("Please map fields to continue.","bit-integrations")});return}e.field_map.length>0&&b(3)};return t.jsxs("div",{children:[t.jsx(v,{snack:h,setSnackbar:a}),t.jsx("div",{className:"txt-center w-9 mt-2",children:t.jsx(I,{step:3,active:s})}),t.jsx(C,{formID:i,zoomWebinarConf:e,setZoomWebinarConf:d,step:s,setStep:b,setSnackbar:a,isLoading:m,setIsLoading:u}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"100%"},children:[t.jsx(N,{formID:i,formFields:r,handleInput:x=>q(x,e,d),zoomWebinarConf:e,setZoomWebinarConf:d,isLoading:m,setIsLoading:u,setSnackbar:a}),t.jsxs("button",{onClick:()=>k(),disabled:e.field_map.length<2||m||!e.id||!g(e)||e.selectedActions==null,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[o("Next","bit-integrations"),t.jsx(j,{className:"ml-1 rev-icn"})]})]}),t.jsx(_,{step:s,saveConfig:()=>W({flow:f,setFlow:l,allIntegURL:c,navigate:p,conf:e,setIsLoading:u,setSnackbar:a}),isLoading:m,dataConf:e,setDataConf:d,formFields:r})]})}export{O as default};
