import{u as B,o as I,e as d,r as a,f as v,j as e}from"./main-615.js";import{$ as _,f as y,g as F,_ as l}from"./bi.394.0.js";import"./bi.991.437.js";import{S as k}from"./bi.700.13.js";import{S as N}from"./bi.440.922.js";import{l as Z,I as C,s as E}from"./bi.819.3.js";import{h as L,c as P}from"./bi.232.676.js";import{Z as R}from"./bi.247.677.js";import T from"./bi.229.174.js";import{B as $}from"./bi.560.697.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.294.678.js";import"./bi.178.673.js";import"./bi.985.674.js";import"./bi.681.699.js";function et({allIntegURL:f}){const u=B(),{formID:r}=I(),[g,h]=d(_),[m,i]=a.useState(!1),[o,c]=a.useState(1),[x,s]=a.useState({show:!1}),[p,j]=a.useState(0),[t,n]=d(y),w=v(F);a.useEffect(()=>{window.opener&&Z("zohoBigin"),n({name:"Zoho Bigin",type:"Zoho Bigin",clientId:"",clientSecret:"",module:"",field_map:[{formField:"",zohoFormField:""}],relatedlists:[],actions:{}})},[]);const S=()=>{if(!P(t)){s({show:!0,msg:l("Please map mandatory fields","bit-integrations")});return}if((t==null?void 0:t.module)==="Deals"&&!(t!=null&&t.pLayout)){s({show:!0,msg:l("Please select a layout","bit-integrations")});return}setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t.module!==""&&t.field_map.length>0&&c(3)};return e.jsxs("div",{children:[e.jsx(k,{snack:x,setSnackbar:s}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(N,{step:3,active:o})}),e.jsx(T,{formID:r,biginConf:t,setBiginConf:n,step:o,setstep:c,isLoading:m,setIsLoading:i,setSnackbar:s}),e.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&900,height:o===2&&"auto"},children:[e.jsx(R,{tab:p,settab:j,formID:r,handleInput:b=>L(b,p,t,n,r,i,s),isLoading:m,setIsLoading:i,setSnackbar:s}),e.jsxs("button",{onClick:()=>S(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[l("Next","bit-integrations"),e.jsx($,{className:"ml-1 rev-icn"})]})]}),e.jsx(C,{step:o,saveConfig:()=>E({flow:g,setFlow:h,allIntegURL:f,conf:t,navigate:u,setIsLoading:i,setSnackbar:s}),isLoading:m,dataConf:t,setDataConf:n,formFields:w})]})}export{et as default};
