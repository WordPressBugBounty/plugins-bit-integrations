import{u as b,o as j,r as o,j as s}from"./main-955.js";import"./bi.326.431.js";import{B as I}from"./bi.687.700.js";import{_ as c}from"./bi.223.0.js";import{S}from"./bi.951.13.js";import{S as v}from"./bi.496.907.js";import{l as k,I as w,g as y}from"./bi.864.3.js";import N from"./bi.6.173.js";import{h as Z,c as _}from"./bi.634.671.js";import{Z as E}from"./bi.755.672.js";import"./bi.696.9.js";import"./bi.300.11.js";import"./bi.283.14.js";import"./bi.701.706.js";import"./bi.991.663.js";import"./bi.355.664.js";function Q({formFields:p,setFlow:d,flow:g,allIntegURL:f}){const h=b(),{formID:r}=j(),[m,i]=o.useState(!1),[e,l]=o.useState(1),[u,a]=o.useState({show:!1}),[t,n]=o.useState({name:"Zoho Campaigns",type:"Zoho Campaigns",clientId:"",clientSecret:"",list:"",field_map:[{formField:"",zohoFormField:""}]});o.useEffect(()=>{window.opener&&k("zohoCampaigns")},[]);const x=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!_(t)){a({show:!0,msg:c("Please map mandatory fields","bit-integrations")});return}t.list!==""&&t.table!==""&&t.field_map.length>0&&l(3)};return s.jsxs("div",{children:[s.jsx(S,{snack:u,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(v,{step:3,active:e})}),s.jsx(N,{formID:r,campaignsConf:t,setCampaignsConf:n,step:e,setstep:l,isLoading:m,setIsLoading:i,setSnackbar:a}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===2&&900,height:e===2&&"auto"},children:[s.jsx(E,{formID:r,formFields:p,handleInput:C=>Z(C,r,t,n,i,a),campaignsConf:t,setCampaignsConf:n,isLoading:m,setIsLoading:i,setSnackbar:a}),s.jsxs("button",{onClick:()=>x(),disabled:t.list===""||t.table===""||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[c("Next","bit-integrations"),s.jsx(I,{className:"ml-1 rev-icn"})]})]}),s.jsx(w,{step:e,saveConfig:()=>y(g,d,f,t,h,"","",i),isLoading:m,dataConf:t,setDataConf:n,formFields:p})]})}export{Q as default};
