import{u as b,l as j,r as o,j as s}from"./main-650.js";import{Z as I,d as S,_ as c,I as v,F as k}from"./bi.541.15.js";import{B as Z}from"./bi.912.697.js";import{S as w}from"./bi.326.902.js";import y from"./bi.898.173.js";import{h as N,c as _}from"./bi.994.668.js";import{Z as E}from"./bi.901.669.js";import"./bi.770.713.js";import"./bi.619.660.js";import"./bi.119.661.js";function G({formFields:p,setFlow:d,flow:g,allIntegURL:f}){const h=b(),{formID:r}=j(),[m,n]=o.useState(!1),[e,l]=o.useState(1),[u,a]=o.useState({show:!1}),[t,i]=o.useState({name:"Zoho Campaigns",type:"Zoho Campaigns",clientId:"",clientSecret:"",list:"",field_map:[{formField:"",zohoFormField:""}]});o.useEffect(()=>{window.opener&&I("zohoCampaigns")},[]);const x=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!_(t)){a({show:!0,msg:c("Please map mandatory fields","bit-integrations")});return}t.list!==""&&t.table!==""&&t.field_map.length>0&&l(3)};return s.jsxs("div",{children:[s.jsx(S,{snack:u,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(w,{step:3,active:e})}),s.jsx(y,{formID:r,campaignsConf:t,setCampaignsConf:i,step:e,setstep:l,isLoading:m,setIsLoading:n,setSnackbar:a}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===2&&900,height:e===2&&"auto"},children:[s.jsx(E,{formID:r,formFields:p,handleInput:C=>N(C,r,t,i,n,a),campaignsConf:t,setCampaignsConf:i,isLoading:m,setIsLoading:n,setSnackbar:a}),s.jsxs("button",{onClick:()=>x(),disabled:t.list===""||t.table===""||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[c("Next","bit-integrations"),s.jsx(Z,{className:"ml-1 rev-icn"})]})]}),s.jsx(v,{step:e,saveConfig:()=>k(g,d,f,t,h,"","",n),isLoading:m,dataConf:t,setDataConf:i,formFields:p})]})}export{G as default};
