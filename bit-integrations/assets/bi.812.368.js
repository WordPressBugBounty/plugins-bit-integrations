var _=Object.defineProperty;var f=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(s,t,e)=>t in s?_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,b=(s,t)=>{for(var e in t||(t={}))y.call(t,e)&&g(s,e,t[e]);if(f)for(var e of f(t))I.call(t,e)&&g(s,e,t[e]);return s};import{u as N,l as w,r as c,j as a}from"./main-650.js";import{_ as o,d as A,I as F,s as q}from"./bi.541.15.js";import{S as E}from"./bi.326.902.js";import{h as L,c as P}from"./bi.544.805.js";import{B}from"./bi.912.697.js";import T from"./bi.496.230.js";import{S as D}from"./bi.979.804.js";import"./bi.770.713.js";import"./bi.619.660.js";import"./bi.119.661.js";function W({formFields:s,setFlow:t,flow:e,allIntegURL:C}){const h=N(),{formID:x}=w(),[n,u]=c.useState(!1),[m,p]=c.useState(1),[S,i]=c.useState({show:!1}),j=[{key:"customer_first_name",label:o("Customer First Name","bit-integrations"),required:!0},{key:"customer_email",label:o("Customer Email","bit-integrations"),required:!0},{key:"customer_last_name",label:o("Customer Last Name","bit-integrations"),required:!1},{key:"customer_phone",label:o("Customer Phone","bit-integrations"),required:!1}],k=[{key:"1",label:"Create Customer"}],[r,l]=c.useState({name:"SureCart",type:"SureCart",mainAction:"",api_key:"",field_map:[{formField:"",SureCartFormField:""}],customerFields:j,allActions:k,actions:{}}),v=d=>{if(!P(r.field_map)){i({show:!0,msg:o("Please map fields to continue.","bit-integrations")});return}setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),p(3)};return a.jsxs("div",{children:[a.jsx(A,{snack:S,setSnackbar:i}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(E,{step:3,active:m})}),a.jsx(T,{formID:x,sureCartConf:r,setSureCartConf:l,step:m,setStep:p,isLoading:n,setIsLoading:u,setSnackbar:i}),a.jsxs("div",{className:"btcd-stp-page",style:b({},m===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(D,{formFields:s,handleInput:d=>L(d,r,l),sureCartConf:r,setSureCartConf:l,isLoading:n,setIsLoading:u,setSnackbar:i}),a.jsxs("button",{onClick:()=>v(),disabled:!r.mainAction||n,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[o("Next","bit-integrations"),a.jsx(B,{className:"ml-1 rev-icn"})]})]}),a.jsx(F,{step:m,saveConfig:()=>q({flow:e,setFlow:t,allIntegURL:C,conf:r,navigate:h,setIsLoading:u,setSnackbar:i}),isLoading:n,dataConf:r,setDataConf:l,formFields:s})]})}export{W as default};
