import{u as B,o as I,e as d,r as a,f as v,j as e}from"./main-119.js";import{$ as _,f as y,g as F,_ as c}from"./bi.686.0.js";import"./bi.276.437.js";import{S as k}from"./bi.725.13.js";import{S as N}from"./bi.36.924.js";import{m as Z,I as C,s as E}from"./bi.316.3.js";import{h as L,c as P}from"./bi.478.678.js";import{Z as R}from"./bi.393.679.js";import T from"./bi.717.174.js";import{B as $}from"./bi.13.699.js";import"./bi.900.9.js";import"./bi.301.11.js";import"./bi.744.14.js";import"./bi.659.680.js";import"./bi.570.675.js";import"./bi.556.676.js";import"./bi.606.701.js";function et({allIntegURL:f}){const u=B(),{formID:r}=I(),[g,h]=d(_),[m,i]=a.useState(!1),[o,l]=a.useState(1),[x,s]=a.useState({show:!1}),[p,j]=a.useState(0),[t,n]=d(y),w=v(F);a.useEffect(()=>{window.opener&&Z("zohoBigin"),n({name:"Zoho Bigin",type:"Zoho Bigin",clientId:"",clientSecret:"",module:"",field_map:[{formField:"",zohoFormField:""}],relatedlists:[],actions:{}})},[]);const S=()=>{if(!P(t)){s({show:!0,msg:c("Please map mandatory fields","bit-integrations")});return}if((t==null?void 0:t.module)==="Deals"&&!(t!=null&&t.pLayout)){s({show:!0,msg:c("Please select a layout","bit-integrations")});return}setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t.module!==""&&t.field_map.length>0&&l(3)};return e.jsxs("div",{children:[e.jsx(k,{snack:x,setSnackbar:s}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(N,{step:3,active:o})}),e.jsx(T,{formID:r,biginConf:t,setBiginConf:n,step:o,setstep:l,isLoading:m,setIsLoading:i,setSnackbar:s}),e.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&900,height:o===2&&"auto"},children:[e.jsx(R,{tab:p,settab:j,formID:r,handleInput:b=>L(b,p,t,n,r,i,s),isLoading:m,setIsLoading:i,setSnackbar:s}),e.jsxs("button",{onClick:()=>S(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[c("Next","bit-integrations"),e.jsx($,{className:"ml-1 rev-icn"})]})]}),e.jsx(C,{step:o,saveConfig:()=>E({flow:g,setFlow:h,allIntegURL:f,conf:t,navigate:u,setIsLoading:i,setSnackbar:s}),isLoading:m,dataConf:t,setDataConf:n,formFields:w})]})}export{et as default};
