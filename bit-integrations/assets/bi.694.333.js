var S=Object.defineProperty;var b=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var f=(i,t,e)=>t in i?S(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,g=(i,t)=>{for(var e in t||(t={}))E.call(t,e)&&f(i,e,t[e]);if(b)for(var e of b(t))N.call(t,e)&&f(i,e,t[e]);return i};import{u as A,l as K,r as c,j as a}from"./main-80.js";import{_ as n,d as _,I as C,s as F}from"./bi.433.0.js";import{S as w}from"./bi.293.894.js";import{h as T,c as q}from"./bi.157.753.js";import{B}from"./bi.29.687.js";import L from"./bi.275.195.js";import{K as D}from"./bi.930.752.js";import"./bi.717.703.js";import"./bi.895.650.js";import"./bi.194.651.js";function W({formFields:i,setFlow:t,flow:e,allIntegURL:x}){const h=A(),{formID:v}=K(),[r,d]=c.useState(!1),[o,p]=c.useState(1),[k,l]=c.useState({show:!1}),j=[{key:"full_name",label:n("Full Name","bit-integrations"),required:!0},{key:"email",label:n("Email","bit-integrations"),required:!0},{key:"tags",label:n("Tags","bit-integrations"),required:!1}],y=[{key:"1",label:n("Add Subscriber","bit-integrations")},{key:"2",label:n("Remove Subscriber","bit-integrations")}],[s,m]=c.useState({name:"Kirim Email",type:"Kirim Email",mainAction:"",userName:"vaishak",api_key:"",field_map:[{formField:"",kirimEmailFormField:""}],subscriberFields:j,allActions:y,actions:{}}),I=u=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),p(3)};return a.jsxs("div",{children:[a.jsx(_,{snack:k,setSnackbar:l}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(w,{step:3,active:o})}),a.jsx(L,{formID:v,kirimEmailConf:s,setKirimEmailConf:m,step:o,setstep:p,isLoading:r,setIsLoading:d,setSnackbar:l}),a.jsxs("div",{className:"btcd-stp-page",style:g({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(D,{formFields:i,handleInput:u=>T(u,s,m),kirimEmailConf:s,setKirimEmailConf:m,isLoading:r,setIsLoading:d,setSnackbar:l}),a.jsxs("button",{onClick:()=>I(),disabled:!q(s==null?void 0:s.field_map)||s.mainAction===""||r||s.mainAction==="1"&&(s.listId===""||s.listId===void 0),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[n("Next","bit-integrations"),a.jsx(B,{className:"ml-1 rev-icn"})]})]}),a.jsx(C,{step:o,saveConfig:()=>F({flow:e,setFlow:t,allIntegURL:x,conf:s,navigate:h,setIsLoading:d,setSnackbar:l}),isLoading:r,dataConf:s,setDataConf:m,formFields:i})]})}export{W as default};
