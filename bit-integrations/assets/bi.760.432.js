var y=Object.defineProperty;var b=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var E=(s,e,t)=>e in s?y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,C=(s,e)=>{for(var t in e||(e={}))I.call(e,t)&&E(s,t,e[t]);if(b)for(var t of b(e))w.call(e,t)&&E(s,t,e[t]);return s};import{u as L,r,j as n}from"./main-288.js";import"./bi.197.434.js";import{_ as l,d as i}from"./bi.4.0.js";import{S as A}from"./bi.470.13.js";import{S as P}from"./bi.982.916.js";import{I as D,g as M}from"./bi.826.3.js";import{c as S,T as z}from"./bi.533.911.js";import{T as B}from"./bi.127.910.js";import F from"./bi.33.282.js";import"./bi.627.9.js";import"./bi.147.11.js";import"./bi.223.14.js";import"./bi.294.669.js";import"./bi.335.670.js";import"./bi.255.712.js";function te({formFields:s,setFlow:e,flow:t,allIntegURL:p}){const f=L(),[j,g]=r.useState(!1),[u,v]=r.useState({auth:!1,events:!1}),[o,h]=r.useState(1),[k,d]=r.useState({show:!1}),[a,m]=r.useState({name:"The Events Calendar",type:"The Events Calendar",field_map:[],staticFields:[],selectedTask:"",events:[],selectedEvent:"",actions:{}}),_=()=>{g(!0),M(t,e,p,a,f,"","",g).then(c=>{var T;c.success?(i.success((T=c.data)==null?void 0:T.msg),f(p)):i.error(c.data||c)})},N=x=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!a.selectedTask){i.error(l("Please select a task!","bit-integrations"));return}if(a.selectedTask===z.NEW_ATTENDEE&&!a.selectedEvent){i.error(l("Please select a event!","bit-integrations"));return}if(!S(a)){i.error(l("Please map mandatory fields!","bit-integrations"));return}a.field_map.length>0&&h(x)};return n.jsxs("div",{children:[n.jsx(A,{snack:k,setSnackbar:d}),n.jsx("div",{className:"txt-center mt-2",children:n.jsx(P,{step:3,active:o})}),n.jsx(F,{theEventsCalendarConf:a,setTheEventsCalendarConf:m,step:o,setStep:h,loading:u,setLoading:v,setSnackbar:d}),n.jsxs("div",{className:"btcd-stp-page",style:C({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[n.jsx(B,{formFields:s,theEventsCalendarConf:a,setTheEventsCalendarConf:m,loading:u,setLoading:v,setSnackbar:d}),n.jsxs("button",{onClick:()=>N(3),disabled:!S(a),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[l("Next","bit-integrations"),"  ",n.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),n.jsx(D,{step:o,saveConfig:()=>_(),isLoading:j,dataConf:a,setDataConf:m,formFields:s})]})}export{te as default};
