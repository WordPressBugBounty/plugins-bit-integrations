var B=Object.defineProperty;var b=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var x=(o,s,e)=>s in o?B(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,g=(o,s)=>{for(var e in s||(s={}))I.call(s,e)&&x(o,e,s[e]);if(b)for(var e of b(s))k.call(s,e)&&x(o,e,s[e]);return o};import{u as w,o as C,f as N,r as p,j as t}from"./main-494.js";import"./bi.23.437.js";import{e as y,_ as l}from"./bi.185.0.js";import{S as L}from"./bi.107.13.js";import{S as M}from"./bi.719.924.js";import{I as P,s as R}from"./bi.104.3.js";import A from"./bi.927.202.js";import{h as E,c as T,b as q}from"./bi.278.757.js";import{B as D}from"./bi.421.758.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.776.699.js";import"./bi.136.701.js";import"./bi.378.675.js";import"./bi.950.676.js";function it({formFields:o,setFlow:s,flow:e,allIntegURL:h}){const j=w(),{formID:f}=C(),v=N(y),{siteURL:F}=v,[r,n]=p.useState(!1),[m,u]=p.useState(1),[S,a]=p.useState({show:!1}),[i,c]=p.useState({name:"Bit Form",type:"Bit Form",domainName:F,api_key:"",id:"",field_map:[{formField:"",BitFormMapField:""}],address_field:[],actions:{}}),_=()=>{var d;if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),(d=i.actions)!=null&&d.address&&!T(i)){a({show:!0,msg:l("Please map address required fields to continue.","bit-integrations")});return}if(!q(i)){a({show:!0,msg:l("Please map fields to continue.","bit-integrations")});return}i.listId!==""&&u(3)};return t.jsxs("div",{children:[t.jsx(L,{snack:S,setSnackbar:a}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(M,{step:3,active:m})}),t.jsx(A,{formID:f,bitFormConf:i,setBitFormConf:c,step:m,setstep:u,isLoading:r,setIsLoading:n,setSnackbar:a}),t.jsxs("div",{className:"btcd-stp-page",style:g({},m===2&&{width:900,height:"auto",overflow:"visible"}),children:[t.jsx(D,{formFields:o,handleInput:d=>E(d,i,c,f,n),bitFormConf:i,setBitFormConf:c,isLoading:r,setIsLoading:n,setSnackbar:a}),!i.id&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{})]}),t.jsxs("button",{onClick:()=>_(),disabled:i.field_map.length<2||r,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[l("Next","bit-integrations"),"  ",t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(P,{step:m,saveConfig:()=>R({flow:e,setFlow:s,allIntegURL:h,navigate:j,conf:i,setIsLoading:n,setSnackbar:a}),isLoading:r,dataConf:i,setDataConf:c,formFields:o})]})}export{it as default};
