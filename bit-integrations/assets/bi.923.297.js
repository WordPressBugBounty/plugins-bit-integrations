import{u as S,o as v,r as s,j as e}from"./main-119.js";import"./bi.276.437.js";import{B as R}from"./bi.13.699.js";import{_ as d}from"./bi.686.0.js";import{S as k}from"./bi.725.13.js";import{S as w}from"./bi.36.924.js";import{m as y,I as C,i as N}from"./bi.316.3.js";import T from"./bi.776.177.js";import{h as Z,c as _}from"./bi.392.695.js";import{Z as E}from"./bi.648.696.js";import"./bi.900.9.js";import"./bi.301.11.js";import"./bi.744.14.js";import"./bi.606.701.js";import"./bi.659.680.js";import"./bi.570.675.js";import"./bi.556.676.js";function W({formFields:c,setFlow:u,flow:f,allIntegURL:h}){const g=S(),{formID:n}=v(),[m,i]=s.useState(!1),[o,p]=s.useState(1),[x,a]=s.useState({show:!1}),[l,b]=s.useState(0),[t,r]=s.useState({name:"Zoho Recruit",type:"Zoho Recruit",clientId:"",clientSecret:"",module:"",field_map:[{formField:"",zohoFormField:""}],relatedlists:[],actions:{}});s.useEffect(()=>{window.opener&&y("zohoRecruit")},[]);const j=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!_(t)){a({show:!0,msg:d("Please map mandatory fields","bit-integrations")});return}t.module!==""&&t.field_map.length>0&&p(3)};return e.jsxs("div",{children:[e.jsx(k,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(w,{step:3,active:o})}),e.jsx(T,{formID:n,recruitConf:t,setRecruitConf:r,step:o,setstep:p,isLoading:m,setIsLoading:i,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&900,height:o===2&&"auto"},children:[e.jsx(E,{tab:l,settab:b,formID:n,formFields:c,handleInput:I=>Z(I,l,t,r,n,i,a),recruitConf:t,setRecruitConf:r,isLoading:m,setIsLoading:i,setSnackbar:a}),e.jsxs("button",{onClick:()=>j(),disabled:t.module===""||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[d("Next","bit-integrations"),e.jsx(R,{className:"ml-1 rev-icn"})]})]}),e.jsx(C,{step:o,saveConfig:()=>N(f,u,h,t,g,"","",i),isLoading:m,dataConf:t,setDataConf:r,formFields:c})]})}export{W as default};
