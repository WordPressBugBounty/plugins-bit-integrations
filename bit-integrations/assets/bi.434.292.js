var j=Object.defineProperty;var d=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var v=(o,e,t)=>e in o?j(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,u=(o,e)=>{for(var t in e||(e={}))S.call(e,t)&&v(o,t,e[t]);if(d)for(var t of d(e))D.call(e,t)&&v(o,t,e[t]);return o};import{u as O,o as w,r as n,j as s}from"./main-247.js";import"./bi.393.437.js";import{_ as k}from"./bi.456.0.js";import{S as C}from"./bi.417.13.js";import{S as I}from"./bi.955.922.js";import{s as N}from"./bi.335.696.js";import{I as _,s as y}from"./bi.427.3.js";import L from"./bi.616.169.js";import{O as E}from"./bi.250.680.js";import"./bi.712.9.js";import"./bi.923.11.js";import"./bi.858.14.js";import"./bi.66.679.js";import"./bi.30.716.js";function V({formFields:o,setFlow:e,flow:t,allIntegURL:x}){const g=O(),{flowID:p}=w(),[c,m]=n.useState(!1),[r,f]=n.useState(1),[b,a]=n.useState({show:!1}),[i,l]=n.useState({name:"OneDrive",type:"OneDrive",clientId:"",clientSecret:"",field_map:[{formField:"",OneDriveFormField:""}],folder:"",folderMap:[],foldersList:[],actions:{}});n.useEffect(()=>{window.opener&&N("oneDrive")},[]);const h=()=>{y({flow:t,setFlow:e,allIntegURL:x,conf:i,navigate:g,setIsLoading:m,setSnackbar:a})};return s.jsxs("div",{children:[s.jsx(C,{snack:b,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(I,{step:3,active:r})}),s.jsx(L,{flowID:p,oneDriveConf:i,setOneDriveConf:l,step:r,setStep:f,isLoading:c,setIsLoading:m,setSnackbar:a}),s.jsxs("div",{className:"btcd-stp-page",style:u({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[s.jsx(E,{flowID:p,formFields:o,oneDriveConf:i,setOneDriveConf:l,isLoading:c,setIsLoading:m,setSnackbar:a}),s.jsxs("button",{onClick:()=>f(3),disabled:!i.actions.attachments||!i.folder,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[k("Next","bit-integrations")," ",s.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),s.jsx(_,{step:r,saveConfig:()=>h(),isLoading:c})]})}export{V as default};