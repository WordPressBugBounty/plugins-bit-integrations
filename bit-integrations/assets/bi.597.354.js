var j=Object.defineProperty,b=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var m=(e,t,s)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,u=(e,t)=>{for(var s in t||(t={}))I.call(t,s)&&m(e,s,t[s]);if(p)for(var s of p(t))M.call(t,s)&&m(e,s,t[s]);return e},f=(e,t)=>b(e,S(t));import{u as y,r as d,j as i}from"./main-830.js";import{_ as N,I as _}from"./bi.597.15.js";import{S as C}from"./bi.853.901.js";import{S as L}from"./bi.963.902.js";import w from"./bi.131.216.js";import{n as k,d as E}from"./bi.902.776.js";import{M as F}from"./bi.174.777.js";import"./bi.972.713.js";import"./bi.94.771.js";import"./bi.715.660.js";import"./bi.530.661.js";function O({formFields:e,setFlow:t,flow:s,allIntegURL:g}){const x=y(),[o,c]=d.useState(1),[r,l]=d.useState({auth:!1,list:!1,page:!1}),[a,n]=d.useState({name:"Mailercloud",type:"Mailercloud",authKey:"",field_map:[{formFields:"",mailercloudFormField:""}],listId:"",contactType:"",actions:{}}),h=v=>{l(f(u({},r),{page:v}))};return i.jsxs("div",{children:[i.jsx("div",{className:"txt-center mt-2",children:i.jsx(L,{step:3,active:o})}),i.jsx(w,{mailercloudConf:a,setMailercloudConf:n,loading:r,setLoading:l,step:o,setStep:c}),i.jsxs(C,{step:o,stepNo:2,style:{width:900,height:"auto",overflow:"visible"},children:[i.jsx(F,{mailercloudConf:a,setMailercloudConf:n,formFields:e,loading:r,setLoading:l}),(a==null?void 0:a.listId)&&i.jsxs("button",{onClick:()=>k(a,c,3),disabled:!a.listId||a.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[N("Next")," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.listId&&i.jsx(_,{step:o,saveConfig:()=>E(s,t,g,a,x,h),isLoading:r.page,dataConf:a,setDataConf:n,formFields:e})]})}export{O as default};
