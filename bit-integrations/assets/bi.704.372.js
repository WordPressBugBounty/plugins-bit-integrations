var W=Object.defineProperty;var f=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var b=(a,e,t)=>e in a?W(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,g=(a,e)=>{for(var t in e||(e={}))_.call(e,t)&&b(a,t,e[t]);if(f)for(var t of f(e))G.call(e,t)&&b(a,t,e[t]);return a};import{u as I,l as q,r as m,j as s}from"./main-692.js";import{_ as i,d as w,I as A,s as F}from"./bi.751.13.js";import{S as P}from"./bi.579.899.js";import{G as E,h as L,c as T}from"./bi.198.813.js";import D from"./bi.635.234.js";import"./bi.588.657.js";import"./bi.294.658.js";import"./bi.244.694.js";import"./bi.719.710.js";function X({formFields:a,setFlow:e,flow:t,allIntegURL:d,isInfo:v,edit:h}){const x=I(),{formID:k}=q(),[o,p]=m.useState(!1),[l,u]=m.useState(1),[y,r]=m.useState({show:!1}),j=[{key:"1",label:i("Create a donar","bit-integrations")}],S=[{key:"email",label:i("Email","bit-integrations"),required:!0},{key:"name",label:i("Name","bit-integrations"),required:!1},{key:"first_name",label:i("First Name","bit-integrations"),required:!1},{key:"last_name",label:i("Last Name","bit-integrations"),required:!1},{key:"purchase_value",label:i("Purchase Value","bit-integrations"),required:!1},{key:"purchase_count",label:i("Purchase Count","bit-integrations"),required:!1}],[n,c]=m.useState({name:"GiveWp",type:"GiveWp",mainAction:"",field_map:[{formField:"",giveWpFormField:""}],allActions:j,giveWpFields:S,actions:{}}),C=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!T(n)){r({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}n.mainAction!==""&&u(3)};return s.jsxs("div",{children:[s.jsx(w,{snack:y,setSnackbar:r}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(P,{step:3,active:l})}),s.jsx(D,{formID:k,giveWpConf:n,setGiveWpConf:c,step:l,setStep:u,isLoading:o,setIsLoading:p,setSnackbar:r}),s.jsxs("div",{className:"btcd-stp-page",style:g({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[s.jsx(E,{formFields:a,handleInput:N=>L(N,n,c),giveWpConf:n,setGiveWpConf:c,isLoading:o,setIsLoading:p,setSnackbar:r,allIntegURL:d,isInfo:v,edit:h}),s.jsxs("button",{onClick:()=>C(),disabled:!n.mainAction||o,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[i("Next","bit-integrations")," ",s.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),s.jsx(A,{step:l,saveConfig:()=>F({flow:t,setFlow:e,allIntegURL:d,navigate:x,conf:n,setIsLoading:p,setSnackbar:r}),isLoading:o,dataConf:n,setDataConf:c,formFields:a})]})}export{X as default};
