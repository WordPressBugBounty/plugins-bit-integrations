var C=Object.defineProperty;var h=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var g=(a,t,s)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,b=(a,t)=>{for(var s in t||(t={}))D.call(t,s)&&g(a,s,t[s]);if(h)for(var s of h(t))_.call(t,s)&&g(a,s,t[s]);return a};import{u as k,o as q,r as d,j as o}from"./main-404.js";import"./bi.613.437.js";import{_ as c}from"./bi.51.0.js";import{S as w}from"./bi.896.13.js";import{S as I}from"./bi.53.923.js";import{I as y,s as N}from"./bi.488.3.js";import P from"./bi.76.241.js";import{h as A,c as E,a as L}from"./bi.77.837.js";import{F as T}from"./bi.618.838.js";import"./bi.964.9.js";import"./bi.484.11.js";import"./bi.565.14.js";import"./bi.116.700.js";import"./bi.841.674.js";import"./bi.75.675.js";function $({formFields:a,setFlow:t,flow:s,allIntegURL:x}){const S=k(),{formID:m}=q(),[u,i]=d.useState(!1),[n,f]=d.useState(1),[F,r]=d.useState({show:!1}),[e,l]=d.useState({name:"FreshSales",type:"FreshSales",api_key:"",bundle_alias:"",default:{modules:{Account:{required:!0,requiredFields:[]},Deal:{required:!0,requiredFields:[]},Contact:{required:!0,requiredFields:[]},Product:{requiredFields:[]}}},moduleData:{module:""},field_map:[{formField:"",freshSalesFormField:""}],actions:{}}),v=()=>{N({flow:s,setFlow:t,allIntegURL:x,conf:e,navigate:S,setIsLoading:i,setSnackbar:r})},j=p=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!E(e)){r({show:!0,msg:c("Please map mandatory fields","bit-integrations")});return}if(!L(e)){["Deal","Contact"].includes(e.moduleData.module)&&r({show:!0,msg:c("Please select a account or a contact","bit-integrations")}),e.moduleData.module==="Contacts"&&r({show:!0,msg:c("Please select a account","bit-integrations")});return}e.moduleData.module&&e.field_map.length>0&&f(p)};return o.jsxs("div",{children:[o.jsx(w,{snack:F,setSnackbar:r}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(I,{step:3,active:n})}),o.jsx(P,{formID:m,freshSalesConf:e,setFreshSalesConf:l,step:n,setstep:f,isLoading:u,setIsLoading:i,setSnackbar:r}),o.jsxs("div",{className:"btcd-stp-page",style:b({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(T,{formID:m,formFields:a,handleInput:p=>A(p,e,l,m,i,r),freshSalesConf:e,setFreshSalesConf:l,isLoading:u,setIsLoading:i,setSnackbar:r}),o.jsxs("button",{onClick:()=>j(3),disabled:e.moduleData.module===""||e.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[c("Next","bit-integrations"),"  ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),o.jsx(y,{step:n,saveConfig:()=>v(),isLoading:u,dataConf:e,setDataConf:l,formFields:a})]})}export{$ as default};
