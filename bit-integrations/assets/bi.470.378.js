var C=Object.defineProperty;var h=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var g=(a,t,s)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,b=(a,t)=>{for(var s in t||(t={}))D.call(t,s)&&g(a,s,t[s]);if(h)for(var s of h(t))_.call(t,s)&&g(a,s,t[s]);return a};import{u as k,l as q,r as d,j as o}from"./main-650.js";import{d as w,_ as c,I,s as y}from"./bi.541.15.js";import{S as N}from"./bi.326.902.js";import P from"./bi.415.239.js";import{h as A,c as E,a as L}from"./bi.96.822.js";import{F as T}from"./bi.94.823.js";import"./bi.770.713.js";import"./bi.619.660.js";import"./bi.119.661.js";function U({formFields:a,setFlow:t,flow:s,allIntegURL:x}){const S=k(),{formID:u}=q(),[m,r]=d.useState(!1),[n,f]=d.useState(1),[F,i]=d.useState({show:!1}),[e,l]=d.useState({name:"FreshSales",type:"FreshSales",api_key:"",bundle_alias:"",default:{modules:{Account:{required:!0,requiredFields:[]},Deal:{required:!0,requiredFields:[]},Contact:{required:!0,requiredFields:[]},Product:{requiredFields:[]}}},moduleData:{module:""},field_map:[{formField:"",freshSalesFormField:""}],actions:{}}),v=()=>{y({flow:s,setFlow:t,allIntegURL:x,conf:e,navigate:S,setIsLoading:r,setSnackbar:i})},j=p=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!E(e)){i({show:!0,msg:c("Please map mandatory fields","bit-integrations")});return}if(!L(e)){["Deal","Contact"].includes(e.moduleData.module)&&i({show:!0,msg:c("Please select a account or a contact","bit-integrations")}),e.moduleData.module==="Contacts"&&i({show:!0,msg:c("Please select a account","bit-integrations")});return}e.moduleData.module&&e.field_map.length>0&&f(p)};return o.jsxs("div",{children:[o.jsx(w,{snack:F,setSnackbar:i}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(N,{step:3,active:n})}),o.jsx(P,{formID:u,freshSalesConf:e,setFreshSalesConf:l,step:n,setstep:f,isLoading:m,setIsLoading:r,setSnackbar:i}),o.jsxs("div",{className:"btcd-stp-page",style:b({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(T,{formID:u,formFields:a,handleInput:p=>A(p,e,l,u,r,i),freshSalesConf:e,setFreshSalesConf:l,isLoading:m,setIsLoading:r,setSnackbar:i}),o.jsxs("button",{onClick:()=>j(3),disabled:e.moduleData.module===""||e.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[c("Next","bit-integrations"),"  ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),o.jsx(I,{step:n,saveConfig:()=>v(),isLoading:m,dataConf:e,setDataConf:l,formFields:a})]})}export{U as default};