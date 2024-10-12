var S=Object.defineProperty;var g=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var h=(i,e,t)=>e in i?S(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,b=(i,e)=>{for(var t in e||(e={}))F.call(e,t)&&h(i,t,e[t]);if(g)for(var t of g(e))k.call(e,t)&&h(i,t,e[t]);return i};import{u as A,l as C,r as n,j as a}from"./main-579.js";import{d as I,_ as p,I as _,s as w}from"./bi.919.15.js";import{S as y}from"./bi.655.902.js";import L from"./bi.486.215.js";import{h as z,c as E,a as T}from"./bi.858.774.js";import{P as M}from"./bi.899.775.js";import"./bi.339.713.js";import"./bi.850.660.js";import"./bi.517.661.js";function W({formFields:i,setFlow:e,flow:t,allIntegURL:x}){const D=A(),{formID:m}=C(),[u,o]=n.useState(!1),[d,f]=n.useState(1),[P,r]=n.useState({show:!1}),[v,q]=n.useState(0),[s,l]=n.useState({name:"PipeDrive",type:"PipeDrive",api_key:"",default:{modules:{Leads:{required:!0,requiredFields:["title"],relatedlists:[{name:"Notes"},{name:"Activities"}]},Deals:{required:!0,requiredFields:["title"],relatedlists:[{name:"Notes"},{name:"Activities"}]},Activities:{required:!0},Organizations:{required:!0,requiredFields:["name"],relatedlists:[{name:"Activities"},{name:"Deals"},{name:"Leads"},{name:"Notes"},{name:"Persons"}]},Persons:{required:!0,requiredFields:["name"],relatedlists:[{name:"Activities"},{name:"Deals"},{name:"Leads"},{name:"Notes"}]},Products:{requiredFields:["name"]},Notes:{required:!0,requiredFields:["content"]}}},moduleData:{module:""},field_map:[{formField:"",pipeDriveFormField:""}],relatedlists:[],actions:{}}),j=()=>{w({flow:t,setFlow:e,allIntegURL:x,conf:s,navigate:D,setIsLoading:o,setSnackbar:r})},N=c=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!E(s)){r({show:!0,msg:p("Please map mandatory fields","bit-integrations")});return}if(!T(s)){["Leads","Deals","Activities","Notes"].includes(s.moduleData.module)&&r({show:!0,msg:p("Please select a organization or a person","bit-integrations")});return}s.moduleData.module&&s.field_map.length>0&&f(c)};return a.jsxs("div",{children:[a.jsx(I,{snack:P,setSnackbar:r}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(y,{step:3,active:d})}),a.jsx(L,{formID:m,pipeDriveConf:s,setPipeDriveConf:l,step:d,setstep:f,isLoading:u,setIsLoading:o,setSnackbar:r}),a.jsxs("div",{className:"btcd-stp-page",style:b({},d===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(M,{tab:v,settab:q,formID:m,formFields:i,handleInput:c=>z(c,v,s,l,m,o,r),pipeDriveConf:s,setPipeDriveConf:l,isLoading:u,setIsLoading:o,setSnackbar:r}),a.jsxs("button",{onClick:()=>N(3),disabled:s.moduleData.module===""||s.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[p("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(_,{step:d,saveConfig:()=>j(),isLoading:u,dataConf:s,setDataConf:l,formFields:i})]})}export{W as default};
