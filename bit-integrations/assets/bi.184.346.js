var S=Object.defineProperty;var f=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var g=(s,e,t)=>e in s?S(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,b=(s,e)=>{for(var t in e||(e={}))T.call(e,t)&&g(s,t,e[t]);if(f)for(var t of f(e))k.call(e,t)&&g(s,t,e[t]);return s};import{u as C,o as M,r as m,f as N,j as a}from"./main-404.js";import"./bi.613.437.js";import{e as W,_ as i}from"./bi.51.0.js";import{S as D}from"./bi.896.13.js";import{S as P}from"./bi.53.923.js";import{I as E,s as L}from"./bi.488.3.js";import R from"./bi.95.275.js";import{f as B,h as q,c as h}from"./bi.780.768.js";import{W as z}from"./bi.928.769.js";import"./bi.964.9.js";import"./bi.484.11.js";import"./bi.565.14.js";import"./bi.250.698.js";import"./bi.116.700.js";import"./bi.97.716.js";/* empty css          */import"./bi.841.674.js";import"./bi.75.675.js";import"./bi.714.770.js";function pe({formFields:s,setFlow:e,flow:t,allIntegURL:x}){const v=C(),{formID:j}=M(),[c,l]=m.useState(!1),[p,d]=m.useState(1),[w,n]=m.useState({show:!1});N(W);const u=[{key:"phone",label:"Recipient's Phone",required:!0}],_=[{name:"template",label:i("Template Message","bit-integrations"),is_pro:!1},{name:"text",label:i("Text Message","bit-integrations"),is_pro:!0},{name:"contact",label:i("Contact Message","bit-integrations"),is_pro:!0},{name:"media",label:i("Media Message","bit-integrations"),is_pro:!0}],A=["image/jpeg","image/png","text/plain","application/pdf","application/vnd.ms-powerpoint","application/msword","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","audio/aac","audio/mp4","audio/mpeg","audio/amr","audio/ogg","audio/opus","video/mp4","video/3gp","image/webp"],[o,r]=m.useState({name:"WhatsApp",type:"WhatsApp",numberID:"",businessAccountID:"",messageTypes:_,mediaTypes:A,messageType:"",body:"",templateName:"",token:"",field_map:B(u),whatsAppFields:u,address_field:[],actions:{},allTemplates:[]}),y=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),h(o)){n({show:!0,msg:i("Please map fields to continue.","bit-integrations")});return}d(3)};return a.jsxs("div",{children:[a.jsx(D,{snack:w,setSnackbar:n}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(P,{step:3,active:p})}),a.jsx(R,{formID:j,whatsAppConf:o,setWhatsAppConf:r,step:p,setstep:d,isLoading:c,setIsLoading:l,setSnackbar:n}),a.jsxs("div",{className:"btcd-stp-page",style:b({},p===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(z,{formFields:s,handleInput:I=>q(I,o,r),whatsAppConf:o,setWhatsAppConf:r,isLoading:c,setIsLoading:l,setSnackbar:n}),a.jsxs("button",{onClick:()=>y(),disabled:h(o),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[i("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(E,{step:p,saveConfig:()=>L({flow:t,setFlow:e,allIntegURL:x,navigate:v,conf:o,setIsLoading:l,setSnackbar:n}),isLoading:c,dataConf:o,setDataConf:r,formFields:s})]})}export{pe as default};
