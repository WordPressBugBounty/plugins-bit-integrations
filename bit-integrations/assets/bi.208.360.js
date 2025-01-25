var S=Object.defineProperty;var g=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var h=(i,e,t)=>e in i?S(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,b=(i,e)=>{for(var t in e||(e={}))F.call(e,t)&&h(i,t,e[t]);if(g)for(var t of g(e))k.call(e,t)&&h(i,t,e[t]);return i};import{u as A,o as C,r as o,j as a}from"./main-252.js";import"./bi.269.440.js";import{_ as p}from"./bi.63.0.js";import{S as I}from"./bi.588.13.js";import{S as _}from"./bi.465.934.js";import{I as w,s as y}from"./bi.163.3.js";import L from"./bi.307.218.js";import{h as z,c as E,a as T}from"./bi.763.798.js";import{P as M}from"./bi.91.799.js";import"./bi.456.9.js";import"./bi.494.11.js";import"./bi.275.14.js";import"./bi.41.709.js";import"./bi.570.683.js";import"./bi.696.684.js";function te({formFields:i,setFlow:e,flow:t,allIntegURL:x}){const D=A(),{formID:l}=C(),[u,n]=o.useState(!1),[d,f]=o.useState(1),[P,r]=o.useState({show:!1}),[v,q]=o.useState(0),[s,m]=o.useState({name:"PipeDrive",type:"PipeDrive",api_key:"",default:{modules:{Leads:{required:!0,requiredFields:["title"],relatedlists:[{name:"Notes"},{name:"Activities"}]},Deals:{required:!0,requiredFields:["title"],relatedlists:[{name:"Notes"},{name:"Activities"}]},Activities:{required:!0},Organizations:{required:!0,requiredFields:["name"],relatedlists:[{name:"Activities"},{name:"Deals"},{name:"Leads"},{name:"Notes"},{name:"Persons"}]},Persons:{required:!0,requiredFields:["name"],relatedlists:[{name:"Activities"},{name:"Deals"},{name:"Leads"},{name:"Notes"}]},Products:{requiredFields:["name"]},Notes:{required:!0,requiredFields:["content"]}}},moduleData:{module:""},field_map:[{formField:"",pipeDriveFormField:""}],relatedlists:[],actions:{}}),j=()=>{y({flow:t,setFlow:e,allIntegURL:x,conf:s,navigate:D,setIsLoading:n,setSnackbar:r})},N=c=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!E(s)){r({show:!0,msg:p("Please map mandatory fields","bit-integrations")});return}if(!T(s)){["Leads","Deals","Activities","Notes"].includes(s.moduleData.module)&&r({show:!0,msg:p("Please select a organization or a person","bit-integrations")});return}s.moduleData.module&&s.field_map.length>0&&f(c)};return a.jsxs("div",{children:[a.jsx(I,{snack:P,setSnackbar:r}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(_,{step:3,active:d})}),a.jsx(L,{formID:l,pipeDriveConf:s,setPipeDriveConf:m,step:d,setstep:f,isLoading:u,setIsLoading:n,setSnackbar:r}),a.jsxs("div",{className:"btcd-stp-page",style:b({},d===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(M,{tab:v,settab:q,formID:l,formFields:i,handleInput:c=>z(c,v,s,m,l,n,r),pipeDriveConf:s,setPipeDriveConf:m,isLoading:u,setIsLoading:n,setSnackbar:r}),a.jsxs("button",{onClick:()=>N(3),disabled:s.moduleData.module===""||s.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[p("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(w,{step:d,saveConfig:()=>j(),isLoading:u,dataConf:s,setDataConf:m,formFields:i})]})}export{te as default};
