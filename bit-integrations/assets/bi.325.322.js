import{u as b,o as E,r as a,j as t}from"./main-246.js";import"./bi.675.443.js";import{B as S}from"./bi.430.759.js";import{_ as g}from"./bi.560.0.js";import{S as v}from"./bi.222.13.js";import{S as C}from"./bi.626.976.js";import{I,g as k}from"./bi.545.3.js";import _ from"./bi.94.189.js";import{c as y}from"./bi.734.767.js";import{E as N}from"./bi.994.768.js";import"./bi.947.9.js";import"./bi.975.11.js";import"./bi.557.14.js";import"./bi.142.765.js";import"./bi.300.720.js";import"./bi.924.721.js";function O({formFields:o,setFlow:l,flow:f,allIntegURL:d}){const h=b(),{formID:r}=E(),[m,c]=a.useState(!1),[s,p]=a.useState(1),[u,i]=a.useState({show:!1}),[e,n]=a.useState({name:"Encharge",type:"Encharge",tags:"",api_key:"",field_map:[{formField:"",enChargeFields:""}],actions:{}}),x=j=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),j===3){if(!y(e)){i({show:!0,msg:g("Please map all required fields to continue.","bit-integrations")});return}e.name!==""&&e.field_map.length>0&&p(3)}};return t.jsxs("div",{children:[t.jsx(v,{snack:u,setSnackbar:i}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(C,{step:3,active:s})}),t.jsx(_,{formID:r,enchargeConf:e,setEnchargeConf:n,step:s,setstep:p,isLoading:m,setIsLoading:c,setSnackbar:i}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,minHeight:s===2&&"200",height:s===2&&"auto"},children:[t.jsx(N,{formID:r,formFields:o,enchargeConf:e,setEnchargeConf:n}),t.jsxs("button",{onClick:()=>x(3),disabled:e.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[g("Next","bit-integrations")," ",t.jsx(S,{className:"ml-1 rev-icn"})]})]}),t.jsx(I,{step:s,saveConfig:()=>k(f,l,d,e,h,"","",c),isLoading:m,dataConf:e,setDataConf:n,formFields:o})]})}export{O as default};
