import{u as S,o as v,r as s,j as e}from"./main-441.js";import"./bi.141.437.js";import{B as R}from"./bi.766.697.js";import{_ as d}from"./bi.452.0.js";import{S as k}from"./bi.239.13.js";import{S as w}from"./bi.290.922.js";import{l as y,I as C,g as N}from"./bi.73.3.js";import T from"./bi.973.177.js";import{h as Z,c as _}from"./bi.87.693.js";import{Z as E}from"./bi.754.694.js";import"./bi.663.9.js";import"./bi.866.11.js";import"./bi.655.14.js";import"./bi.292.699.js";import"./bi.817.678.js";import"./bi.768.673.js";import"./bi.410.674.js";function W({formFields:c,setFlow:u,flow:f,allIntegURL:h}){const g=S(),{formID:n}=v(),[m,i]=s.useState(!1),[o,p]=s.useState(1),[x,a]=s.useState({show:!1}),[l,b]=s.useState(0),[t,r]=s.useState({name:"Zoho Recruit",type:"Zoho Recruit",clientId:"",clientSecret:"",module:"",field_map:[{formField:"",zohoFormField:""}],relatedlists:[],actions:{}});s.useEffect(()=>{window.opener&&y("zohoRecruit")},[]);const j=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!_(t)){a({show:!0,msg:d("Please map mandatory fields","bit-integrations")});return}t.module!==""&&t.field_map.length>0&&p(3)};return e.jsxs("div",{children:[e.jsx(k,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(w,{step:3,active:o})}),e.jsx(T,{formID:n,recruitConf:t,setRecruitConf:r,step:o,setstep:p,isLoading:m,setIsLoading:i,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&900,height:o===2&&"auto"},children:[e.jsx(E,{tab:l,settab:b,formID:n,formFields:c,handleInput:I=>Z(I,l,t,r,n,i,a),recruitConf:t,setRecruitConf:r,isLoading:m,setIsLoading:i,setSnackbar:a}),e.jsxs("button",{onClick:()=>j(),disabled:t.module===""||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[d("Next","bit-integrations"),e.jsx(R,{className:"ml-1 rev-icn"})]})]}),e.jsx(C,{step:o,saveConfig:()=>N(f,u,h,t,g,"","",i),isLoading:m,dataConf:t,setDataConf:r,formFields:c})]})}export{W as default};
