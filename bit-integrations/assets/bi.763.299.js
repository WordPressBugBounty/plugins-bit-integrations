import{u as S,o as v,r as s,j as e}from"./main-814.js";import"./bi.8.440.js";import{B as R}from"./bi.739.707.js";import{_ as d}from"./bi.317.0.js";import{S as k}from"./bi.610.13.js";import{S as w}from"./bi.731.934.js";import{m as y,I as C,i as N}from"./bi.59.3.js";import T from"./bi.648.178.js";import{h as Z,c as _}from"./bi.566.703.js";import{Z as E}from"./bi.769.704.js";import"./bi.765.9.js";import"./bi.672.11.js";import"./bi.478.14.js";import"./bi.492.709.js";import"./bi.726.688.js";import"./bi.321.683.js";import"./bi.904.684.js";function W({formFields:c,setFlow:u,flow:f,allIntegURL:h}){const g=S(),{formID:n}=v(),[m,i]=s.useState(!1),[o,p]=s.useState(1),[x,a]=s.useState({show:!1}),[l,b]=s.useState(0),[t,r]=s.useState({name:"Zoho Recruit",type:"Zoho Recruit",clientId:"",clientSecret:"",module:"",field_map:[{formField:"",zohoFormField:""}],relatedlists:[],actions:{}});s.useEffect(()=>{window.opener&&y("zohoRecruit")},[]);const j=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!_(t)){a({show:!0,msg:d("Please map mandatory fields","bit-integrations")});return}t.module!==""&&t.field_map.length>0&&p(3)};return e.jsxs("div",{children:[e.jsx(k,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(w,{step:3,active:o})}),e.jsx(T,{formID:n,recruitConf:t,setRecruitConf:r,step:o,setstep:p,isLoading:m,setIsLoading:i,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&900,height:o===2&&"auto"},children:[e.jsx(E,{tab:l,settab:b,formID:n,formFields:c,handleInput:I=>Z(I,l,t,r,n,i,a),recruitConf:t,setRecruitConf:r,isLoading:m,setIsLoading:i,setSnackbar:a}),e.jsxs("button",{onClick:()=>j(),disabled:t.module===""||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[d("Next","bit-integrations"),e.jsx(R,{className:"ml-1 rev-icn"})]})]}),e.jsx(C,{step:o,saveConfig:()=>N(f,u,h,t,g,"","",i),isLoading:m,dataConf:t,setDataConf:r,formFields:c})]})}export{W as default};
