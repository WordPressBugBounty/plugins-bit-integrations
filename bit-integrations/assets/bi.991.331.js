var H=Object.defineProperty;var h=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var g=(a,t,e)=>t in a?H(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,x=(a,t)=>{for(var e in t||(t={}))N.call(t,e)&&g(a,e,t[e]);if(h)for(var e of h(t))y.call(t,e)&&g(a,e,t[e]);return a};import{u as I,r as o,j as i}from"./main-288.js";import"./bi.197.434.js";import{_ as l,d as m}from"./bi.4.0.js";import{S as w}from"./bi.470.13.js";import{S as L}from"./bi.982.916.js";import{I as P,s as A}from"./bi.826.3.js";import E from"./bi.942.194.js";import{H as M}from"./bi.195.735.js";import{h as z,c as v}from"./bi.402.734.js";import"./bi.627.9.js";import"./bi.147.11.js";import"./bi.223.14.js";import"./bi.684.706.js";import"./bi.255.712.js";import"./bi.294.669.js";import"./bi.335.670.js";function tt({formFields:a,setFlow:t,flow:e,allIntegURL:S}){const j=I(),[k,u]=o.useState(!1),[n,f]=o.useState(1),[C,c]=o.useState({show:!1}),[r,b]=o.useState({auth:!1,customFields:!1,hubSpotFields:!1}),[s,p]=o.useState({name:"Hubspot",type:"Hubspot",api_key:"",field_map:[{formField:"",hubspotField:""}],hubSpotFields:[],actions:{}}),_=()=>{u(!0),A({flow:e,setFlow:t,allIntegURL:S,conf:s,navigate:j,setIsLoading:u,setSnackbar:c})},F=d=>{if(!v(s)){m.error(l("Please map mandatory fields","bit-integrations"));return}if(s.actionName==="ticket"){if(s.pipeline===void 0){m.error(l("Please select a pipeline","bit-integrations"));return}if(s.stage===void 0){m.error(l("Please select a stage","bit-integrations"));return}}s.field_map.length>0&&f(d)};return i.jsxs("div",{children:[i.jsx(w,{snack:C,setSnackbar:c}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(L,{step:3,active:n})}),i.jsx(E,{hubspotConf:s,setHubspotConf:p,step:n,setstep:f,loading:r,setLoading:b}),i.jsxs("div",{className:"btcd-stp-page",style:x({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(M,{formFields:a,handleInput:d=>z(d,s,p),hubspotConf:s,setHubspotConf:p,setSnackbar:c,loading:r,setLoading:b}),r.hubSpotFields&&i.jsxs("button",{onClick:()=>F(3),disabled:!v(s),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[l("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),r.hubSpotFields&&i.jsx(P,{step:n,saveConfig:()=>_(),isLoading:k,dataConf:s,setDataConf:p,formFields:a})]})}export{tt as default};