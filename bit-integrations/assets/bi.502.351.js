var I=Object.defineProperty;var b=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var f=(s,t,e)=>t in s?I(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,g=(s,t)=>{for(var e in t||(t={}))E.call(t,e)&&f(s,e,t[e]);if(b)for(var e of b(t))N.call(t,e)&&f(s,e,t[e]);return s};import{u as A,o as K,r as c,j as a}from"./main-119.js";import"./bi.276.437.js";import{_ as o}from"./bi.686.0.js";import{S as _}from"./bi.725.13.js";import{S as C}from"./bi.36.924.js";import{I as F,s as w}from"./bi.316.3.js";import{h as T,c as q}from"./bi.518.780.js";import{B}from"./bi.13.699.js";import L from"./bi.970.211.js";import{K as D}from"./bi.288.779.js";import"./bi.900.9.js";import"./bi.301.11.js";import"./bi.744.14.js";import"./bi.606.701.js";import"./bi.570.675.js";import"./bi.556.676.js";function et({formFields:s,setFlow:t,flow:e,allIntegURL:x}){const h=A(),{formID:v}=K(),[r,p]=c.useState(!1),[n,d]=c.useState(1),[k,m]=c.useState({show:!1}),j=[{key:"full_name",label:o("Full Name","bit-integrations"),required:!0},{key:"email",label:o("Email","bit-integrations"),required:!0},{key:"tags",label:o("Tags","bit-integrations"),required:!1}],S=[{key:"1",label:o("Add Subscriber","bit-integrations")},{key:"2",label:o("Remove Subscriber","bit-integrations")}],[i,l]=c.useState({name:"Kirim Email",type:"Kirim Email",mainAction:"",userName:"vaishak",api_key:"",field_map:[{formField:"",kirimEmailFormField:""}],subscriberFields:j,allActions:S,actions:{}}),y=u=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),d(3)};return a.jsxs("div",{children:[a.jsx(_,{snack:k,setSnackbar:m}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(C,{step:3,active:n})}),a.jsx(L,{formID:v,kirimEmailConf:i,setKirimEmailConf:l,step:n,setstep:d,isLoading:r,setIsLoading:p,setSnackbar:m}),a.jsxs("div",{className:"btcd-stp-page",style:g({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(D,{formFields:s,handleInput:u=>T(u,i,l),kirimEmailConf:i,setKirimEmailConf:l,isLoading:r,setIsLoading:p,setSnackbar:m}),a.jsxs("button",{onClick:()=>y(),disabled:!q(i==null?void 0:i.field_map)||i.mainAction===""||r||i.mainAction==="1"&&(i.listId===""||i.listId===void 0),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[o("Next","bit-integrations"),a.jsx(B,{className:"ml-1 rev-icn"})]})]}),a.jsx(F,{step:n,saveConfig:()=>w({flow:e,setFlow:t,allIntegURL:x,conf:i,navigate:h,setIsLoading:p,setSnackbar:m}),isLoading:r,dataConf:i,setDataConf:l,formFields:s})]})}export{et as default};
