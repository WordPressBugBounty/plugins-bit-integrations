var y=Object.defineProperty;var b=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var E=(s,e,t)=>e in s?y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,C=(s,e)=>{for(var t in e||(e={}))I.call(e,t)&&E(s,t,e[t]);if(b)for(var t of b(e))w.call(e,t)&&E(s,t,e[t]);return s};import{u as L,r,j as n}from"./main-119.js";import"./bi.276.437.js";import{_ as l,d as i}from"./bi.686.0.js";import{S as A}from"./bi.725.13.js";import{S as P}from"./bi.36.924.js";import{I as D,i as M}from"./bi.316.3.js";import{c as S,T as z}from"./bi.298.918.js";import{T as B}from"./bi.756.917.js";import F from"./bi.912.283.js";import"./bi.900.9.js";import"./bi.301.11.js";import"./bi.744.14.js";import"./bi.570.675.js";import"./bi.556.676.js";import"./bi.606.701.js";function te({formFields:s,setFlow:e,flow:t,allIntegURL:p}){const f=L(),[j,u]=r.useState(!1),[g,v]=r.useState({auth:!1,events:!1}),[o,h]=r.useState(1),[k,d]=r.useState({show:!1}),[a,m]=r.useState({name:"The Events Calendar",type:"The Events Calendar",field_map:[],staticFields:[],selectedTask:"",events:[],selectedEvent:"",actions:{}}),_=()=>{u(!0),M(t,e,p,a,f,"","",u).then(c=>{var T;c.success?(i.success((T=c.data)==null?void 0:T.msg),f(p)):i.error(c.data||c)})},N=x=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!a.selectedTask){i.error(l("Please select a task!","bit-integrations"));return}if(a.selectedTask===z.NEW_ATTENDEE&&!a.selectedEvent){i.error(l("Please select a event!","bit-integrations"));return}if(!S(a)){i.error(l("Please map mandatory fields!","bit-integrations"));return}a.field_map.length>0&&h(x)};return n.jsxs("div",{children:[n.jsx(A,{snack:k,setSnackbar:d}),n.jsx("div",{className:"txt-center mt-2",children:n.jsx(P,{step:3,active:o})}),n.jsx(F,{theEventsCalendarConf:a,setTheEventsCalendarConf:m,step:o,setStep:h,loading:g,setLoading:v,setSnackbar:d}),n.jsxs("div",{className:"btcd-stp-page",style:C({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[n.jsx(B,{formFields:s,theEventsCalendarConf:a,setTheEventsCalendarConf:m,loading:g,setLoading:v,setSnackbar:d}),n.jsxs("button",{onClick:()=>N(3),disabled:!S(a),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[l("Next","bit-integrations"),"  ",n.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),n.jsx(D,{step:o,saveConfig:()=>_(),isLoading:j,dataConf:a,setDataConf:m,formFields:s})]})}export{te as default};