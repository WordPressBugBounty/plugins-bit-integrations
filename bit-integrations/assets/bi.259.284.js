var w=Object.defineProperty;var h=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var g=(o,t,e)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,x=(o,t)=>{for(var e in t||(t={}))M.call(t,e)&&g(o,e,t[e]);if(h)for(var e of h(t))R.call(t,e)&&g(o,e,t[e]);return o};import{u as k,l as Z,r as i,j as a}from"./main-692.js";import{Z as _,d as N,_ as b,I as E,s as T}from"./bi.751.13.js";import{S as z}from"./bi.579.899.js";import F from"./bi.148.163.js";import{h as L,c as P}from"./bi.553.667.js";import{Z as A}from"./bi.403.668.js";import"./bi.719.710.js";import"./bi.666.669.js";import"./bi.959.670.js";import"./bi.538.654.js";import"./bi.588.657.js";import"./bi.294.658.js";function Y({formFields:o,setFlow:t,flow:e,allIntegURL:C}){const v=k(),{formID:m}=Z(),[d,r]=i.useState(!1),[c,u]=i.useState(1),[j,n]=i.useState({show:!1}),[f,S]=i.useState(0),[s,l]=i.useState({name:"Zoho CRM",type:"Zoho CRM",clientId:"",clientSecret:"",module:"",layout:"",field_map:[{formField:"",zohoFormField:""}],relatedlists:[],actions:{}});i.useEffect(()=>{window.opener&&_("zohoCRM")},[]);const y=()=>{T({flow:e,setFlow:t,allIntegURL:C,conf:s,navigate:v,setIsLoading:r,setSnackbar:n})},I=p=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!P(s)){n({show:!0,msg:b("Please map mandatory fields","bit-integrations")});return}s.module&&s.layout&&s.field_map.length>0&&u(p)};return a.jsxs("div",{children:[a.jsx(N,{snack:j,setSnackbar:n}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(z,{step:3,active:c})}),a.jsx(F,{formID:m,crmConf:s,setCrmConf:l,step:c,setstep:u,isLoading:d,setIsLoading:r,setSnackbar:n}),a.jsxs("div",{className:"btcd-stp-page",style:x({},c===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(A,{tab:f,settab:S,formID:m,formFields:o,handleInput:p=>L(p,f,s,l,m,r,n),crmConf:s,setCrmConf:l,isLoading:d,setIsLoading:r,setSnackbar:n}),a.jsxs("button",{onClick:()=>I(3),disabled:s.module===""||s.layout===""||s.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[b("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(E,{step:c,saveConfig:()=>y(),isLoading:d,dataConf:s,setDataConf:l,formFields:o})]})}export{Y as default};
