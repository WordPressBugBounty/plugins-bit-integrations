var j=Object.defineProperty;var m=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var u=(s,t,i)=>t in s?j(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i,p=(s,t)=>{for(var i in t||(t={}))q.call(t,i)&&u(s,i,t[i]);if(m)for(var i of m(t))C.call(t,i)&&u(s,i,t[i]);return s};import{u as _,r as d,j as a}from"./main-650.js";import{_ as e,I as N,s as S,c as G}from"./bi.541.15.js";import{S as I}from"./bi.326.902.js";import w from"./bi.896.186.js";import{G as E,h as F,c as L}from"./bi.342.727.js";import"./bi.912.697.js";import"./bi.770.713.js";import"./bi.619.660.js";import"./bi.119.661.js";function O({formFields:s,setFlow:t,flow:i,allIntegURL:f}){const y=_(),[c,r]=d.useState(!1),[o,b]=d.useState(1),[P,h]=d.useState({show:!1}),k=[{key:"name",label:e("Name","bit-integrations"),required:!1},{key:"email",label:e("Email","bit-integrations"),required:!0},{key:"phone",label:e("Phone","bit-integrations"),required:!1},{key:"gender",label:e("Gender","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"company_name",label:e("Company Name","bit-integrations"),required:!1},{key:"industry",label:e("Industry","bit-integrations"),required:!1},{key:"job_title",label:e("Job Title","bit-integrations"),required:!1},{key:"last_name",label:e("Last Name","bit-integrations"),required:!1},{key:"postal_code",label:e("Postal Code","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1}],[n,l]=d.useState({name:"Getgist",type:"Getgist",api_key:"",field_map:[{formField:"",getgistFormField:""}],actions:{},gistFields:k}),x=()=>{r(!0),S({flow:i,setFlow:t,allIntegURL:f,conf:n,navigate:y,setIsLoading:r,setSnackbar:h})},v=g=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!L(n)){G.error(e("Please map mandatory fields","bit-integrations"));return}n.field_map.length>0&&b(g)};return a.jsxs("div",{children:[a.jsx("div",{className:"txt-center mt-2",children:a.jsx(I,{step:3,active:o})}),a.jsx(w,{getgistConf:n,setGetgistConf:l,step:o,setstep:b,isLoading:c,setIsLoading:r}),a.jsxs("div",{className:"btcd-stp-page",style:p({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(E,{formFields:s,handleInput:g=>F(g,n,l),getgistConf:n,setGetgistConf:l,isLoading:c,setIsLoading:r}),a.jsxs("button",{onClick:()=>v(3),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(N,{step:o,saveConfig:()=>x(),isLoading:c,dataConf:n,setDataConf:l,formFields:s})]})}export{O as default};