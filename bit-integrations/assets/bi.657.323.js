var j=Object.defineProperty;var g=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var d=(s,e,t)=>e in s?j(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,v=(s,e)=>{for(var t in e||(e={}))S.call(e,t)&&d(s,t,e[t]);if(g)for(var t of g(e))D.call(e,t)&&d(s,t,e[t]);return s};import{u as G,o as w,r as i,j as o}from"./main-955.js";import"./bi.326.431.js";import{_ as k}from"./bi.223.0.js";import{S as C}from"./bi.951.13.js";import{S as I}from"./bi.496.907.js";import{s as N}from"./bi.917.686.js";import{I as _,s as y}from"./bi.864.3.js";import L from"./bi.214.168.js";import{G as E}from"./bi.756.714.js";import"./bi.696.9.js";import"./bi.300.11.js";import"./bi.283.14.js";import"./bi.766.713.js";import"./bi.701.706.js";function V({formFields:s,setFlow:e,flow:t,allIntegURL:u}){const x=G(),{flowID:c}=w(),[l,m]=i.useState(!1),[r,p]=i.useState(1),[b,n]=i.useState({show:!1}),[a,f]=i.useState({name:"Google Drive",type:"Google Drive",clientId:"",clientSecret:"",field_map:[{formField:"",googleDriveFormField:""}],foldersList:[],actions:{}});i.useEffect(()=>{window.opener&&N("googleDrive")},[]);const h=()=>{y({flow:t,setFlow:e,allIntegURL:u,conf:a,navigate:x,setIsLoading:m,setSnackbar:n})};return o.jsxs("div",{children:[o.jsx(C,{snack:b,setSnackbar:n}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(I,{step:3,active:r})}),o.jsx(L,{flowID:c,googleDriveConf:a,setGoogleDriveConf:f,step:r,setStep:p,isLoading:l,setIsLoading:m,setSnackbar:n}),o.jsxs("div",{className:"btcd-stp-page",style:v({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(E,{flowID:c,formFields:s,googleDriveConf:a,setGoogleDriveConf:f}),o.jsxs("button",{onClick:()=>p(3),disabled:a.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[k("Next","bit-integrations")," ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),o.jsx(_,{step:r,saveConfig:()=>h(),isLoading:l})]})}export{V as default};