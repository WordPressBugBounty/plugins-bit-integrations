var S=Object.defineProperty;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(s,e,t)=>e in s?S(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,b=(s,e)=>{for(var t in e||(e={}))T.call(e,t)&&f(s,t,e[t]);if(g)for(var t of g(e))k.call(e,t)&&f(s,t,e[t]);return s};import{u as C,l as M,r as m,i as N,j as a}from"./main-650.js";import{j as W,_ as o,d as D,I as P,s as E}from"./bi.541.15.js";import{S as L}from"./bi.326.902.js";import R from"./bi.677.273.js";import{f as B,h as q,c as h}from"./bi.264.753.js";import{W as z}from"./bi.648.754.js";import"./bi.912.697.js";import"./bi.770.713.js";import"./bi.149.700.js";/* empty css         */import"./bi.619.660.js";import"./bi.119.661.js";function ee({formFields:s,setFlow:e,flow:t,allIntegURL:x}){const v=C(),{formID:j}=M(),[c,l]=m.useState(!1),[p,d]=m.useState(1),[w,n]=m.useState({show:!1});N(W);const u=[{key:"phone",label:"Recipient's Phone",required:!0}],_=[{name:"template",label:o("Template Message","bit-integrations"),is_pro:!1},{name:"text",label:o("Text Message","bit-integrations"),is_pro:!0},{name:"contact",label:o("Contact Message","bit-integrations"),is_pro:!0},{name:"media",label:o("Media Message","bit-integrations"),is_pro:!0}],A=["image/jpeg","image/png","text/plain","application/pdf","application/vnd.ms-powerpoint","application/msword","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","audio/aac","audio/mp4","audio/mpeg","audio/amr","audio/ogg","audio/opus","video/mp4","video/3gp","image/webp"],[i,r]=m.useState({name:"WhatsApp",type:"WhatsApp",numberID:"",businessAccountID:"",messageTypes:_,mediaTypes:A,messageType:"",body:"",templateName:"",token:"",field_map:B(u),whatsAppFields:u,address_field:[],actions:{},allTemplates:[]}),y=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),h(i)){n({show:!0,msg:o("Please map fields to continue.","bit-integrations")});return}d(3)};return a.jsxs("div",{children:[a.jsx(D,{snack:w,setSnackbar:n}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(L,{step:3,active:p})}),a.jsx(R,{formID:j,whatsAppConf:i,setWhatsAppConf:r,step:p,setstep:d,isLoading:c,setIsLoading:l,setSnackbar:n}),a.jsxs("div",{className:"btcd-stp-page",style:b({},p===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(z,{formFields:s,handleInput:I=>q(I,i,r),whatsAppConf:i,setWhatsAppConf:r,isLoading:c,setIsLoading:l,setSnackbar:n}),a.jsxs("button",{onClick:()=>y(),disabled:h(i),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[o("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(P,{step:p,saveConfig:()=>E({flow:t,setFlow:e,allIntegURL:x,navigate:v,conf:i,setIsLoading:l,setSnackbar:n}),isLoading:c,dataConf:i,setDataConf:r,formFields:s})]})}export{ee as default};