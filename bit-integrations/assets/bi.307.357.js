var h=Object.defineProperty,x=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var c=(t,e,a)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))j.call(e,a)&&c(t,a,e[a]);if(d)for(var a of d(e))k.call(e,a)&&c(t,a,e[a]);return t},f=(t,e)=>x(t,v(e));import{u as z,r as m,j as i}from"./main-212.js";import{_ as I}from"./bi.717.0.js";import{S as N}from"./bi.434.944.js";import{S as _}from"./bi.787.945.js";import{I as w}from"./bi.164.3.js";import C from"./bi.356.215.js";import{n as F,e as L}from"./bi.500.805.js";import{S as E}from"./bi.133.806.js";import"./bi.894.440.js";import"./bi.303.9.js";import"./bi.954.13.js";import"./bi.830.11.js";import"./bi.914.14.js";import"./bi.600.737.js";import"./bi.324.718.js";import"./bi.870.692.js";import"./bi.323.693.js";function Y({formFields:t,setFlow:e,flow:a,allIntegURL:g}){const y=z(),[o,p]=m.useState(1),[r,n]=m.useState({auth:!1,list:!1,tag:!1,page:!1}),[s,l]=m.useState({name:"Selzy",type:"Selzy",authKey:"",field_map:[{formFields:"",selzyFormField:""}],listIds:"",tags:"",method:"",option:"0",overwrite:"0",doubleOption:[{key:"0",name:"Invitation"},{key:"3",name:"Auto Subscribe"},{key:"4",name:"Update Subscribe"}],overwriteOption:[{key:"0",name:"Default"},{key:"1",name:"Field and Tag"},{key:"2",name:"Tag"}],actions:{},selzyFields:[{key:"email",label:"Email",required:!0},{key:"phone",label:"Phone Number",required:!1}]}),S=b=>{n(f(u({},r),{page:b}))};return i.jsxs("div",{children:[i.jsx("div",{className:"txt-center mt-2",children:i.jsx(_,{step:3,active:o})}),i.jsx(C,{selzyConf:s,setSelzyConf:l,loading:r,setLoading:n,step:o,setStep:p}),i.jsxs(N,{step:o,stepNo:2,style:{width:900,height:"auto",overflow:"visible"},children:[i.jsx(E,{selzyConf:s,setSelzyConf:l,formFields:t,loading:r,setLoading:n}),(s==null?void 0:s.listIds)&&i.jsxs("button",{onClick:()=>F(s,p,3),disabled:!s.listIds||s.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[I("Next")," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),s.listIds&&i.jsx(w,{step:o,saveConfig:()=>L(a,e,g,s,y,S),isLoading:r.page,dataConf:s,setDataConf:l,formFields:t})]})}export{Y as default};
