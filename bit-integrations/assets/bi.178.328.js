var k=Object.defineProperty;var b=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var g=(i,t,s)=>t in i?k(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s,c=(i,t)=>{for(var s in t||(t={}))y.call(t,s)&&g(i,s,t[s]);if(b)for(var s of b(t))w.call(t,s)&&g(i,s,t[s]);return i};import{u as G,o as _,r as n,j as a}from"./main-615.js";import"./bi.991.437.js";import{_ as o}from"./bi.394.0.js";import{S as I}from"./bi.700.13.js";import{S as N}from"./bi.440.922.js";import{s as C}from"./bi.925.696.js";import{I as q,s as D}from"./bi.819.3.js";import L from"./bi.948.171.js";import{c as T}from"./bi.87.726.js";import{G as E}from"./bi.994.727.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.681.699.js";import"./bi.178.673.js";import"./bi.985.674.js";import"./bi.315.686.js";import"./bi.989.10.js";function ee({formFields:i,setFlow:t,flow:s,allIntegURL:x}){const h=G(),{flowID:m}=_(),[p,u]=n.useState(!1),[r,f]=n.useState(1),[v,l]=n.useState({show:!1}),j=[{key:"start",label:o("Start Date Time","bit-integrations"),required:!0},{key:"end",label:o("End Date Time","bit-integrations"),required:!0},{key:"summary",label:o("Title","bit-integrations"),required:!1},{key:"location",label:o("Location","bit-integrations"),required:!1},{key:"description",label:o("Description","bit-integrations"),required:!1}],[e,d]=n.useState({name:"Google Calendar",type:"Google Calendar",clientId:"",clientSecret:"",field_map:[{formField:"",googleCalendarFormField:""}],reminder_field_map:[{method:"popup",minutes:"30"}],default:j,calendarLists:[],actions:{}});n.useEffect(()=>{window.opener&&C("googleCalendar")},[]);const S=()=>{D({flow:s,setFlow:t,allIntegURL:x,conf:e,navigate:h,setIsLoading:u,setSnackbar:l})};return a.jsxs("div",{children:[a.jsx(I,{snack:v,setSnackbar:l}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(N,{step:3,active:r})}),a.jsx(L,{flowID:m,googleCalendarConf:e,setGoogleCalendarConf:d,step:r,setStep:f,isLoading:p,setIsLoading:u,setSnackbar:l}),a.jsx("div",{className:"btcd-stp-page",style:c({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:a.jsx(E,{flowID:m,formFields:i,googleCalendarConf:e,setGoogleCalendarConf:d})}),a.jsx(q,{step:r,saveConfig:()=>S(),isLoading:p,dataConf:e,setDataConf:d,formFields:i}),a.jsx("div",{className:"btcd-stp-page",style:c({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:a.jsxs("button",{onClick:()=>f(3),disabled:!(e!=null&&e.calendarId)||!(e!=null&&e.timeZone)||!T(e==null?void 0:e.field_map),className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",children:[o("Next","bit-integrations")," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})})]})}export{ee as default};