var W=Object.defineProperty;var f=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var b=(a,e,t)=>e in a?W(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,g=(a,e)=>{for(var t in e||(e={}))_.call(e,t)&&b(a,t,e[t]);if(f)for(var t of f(e))G.call(e,t)&&b(a,t,e[t]);return a};import{u as I,o as q,r as c,j as i}from"./main-623.js";import"./bi.1.443.js";import{_ as s}from"./bi.422.0.js";import{S as w}from"./bi.957.13.js";import{S as A}from"./bi.408.976.js";import{I as F,s as P}from"./bi.757.3.js";import{G as E,h as L,c as T}from"./bi.899.880.js";import D from"./bi.295.240.js";import"./bi.331.9.js";import"./bi.727.11.js";import"./bi.218.14.js";import"./bi.220.720.js";import"./bi.890.721.js";import"./bi.219.759.js";import"./bi.971.765.js";function te({formFields:a,setFlow:e,flow:t,allIntegURL:d,isInfo:v,edit:h}){const x=I(),{formID:k}=q(),[r,p]=c.useState(!1),[l,u]=c.useState(1),[y,o]=c.useState({show:!1}),j=[{key:"1",label:s("Create a donar","bit-integrations")}],S=[{key:"email",label:s("Email","bit-integrations"),required:!0},{key:"name",label:s("Name","bit-integrations"),required:!1},{key:"first_name",label:s("First Name","bit-integrations"),required:!1},{key:"last_name",label:s("Last Name","bit-integrations"),required:!1},{key:"purchase_value",label:s("Purchase Value","bit-integrations"),required:!1},{key:"purchase_count",label:s("Purchase Count","bit-integrations"),required:!1}],[n,m]=c.useState({name:"GiveWp",type:"GiveWp",mainAction:"",field_map:[{formField:"",giveWpFormField:""}],allActions:j,giveWpFields:S,actions:{}}),C=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!T(n)){o({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}n.mainAction!==""&&u(3)};return i.jsxs("div",{children:[i.jsx(w,{snack:y,setSnackbar:o}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(A,{step:3,active:l})}),i.jsx(D,{formID:k,giveWpConf:n,setGiveWpConf:m,step:l,setStep:u,isLoading:r,setIsLoading:p,setSnackbar:o}),i.jsxs("div",{className:"btcd-stp-page",style:g({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(E,{formFields:a,handleInput:N=>L(N,n,m),giveWpConf:n,setGiveWpConf:m,isLoading:r,setIsLoading:p,setSnackbar:o,allIntegURL:d,isInfo:v,edit:h}),i.jsxs("button",{onClick:()=>C(),disabled:!n.mainAction||r,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[s("Next","bit-integrations")," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),i.jsx(F,{step:l,saveConfig:()=>P({flow:t,setFlow:e,allIntegURL:d,navigate:x,conf:n,setIsLoading:p,setSnackbar:o}),isLoading:r,dataConf:n,setDataConf:m,formFields:a})]})}export{te as default};
