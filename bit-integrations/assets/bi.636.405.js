var w=Object.defineProperty;var j=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var L=(a,e,s)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,N=(a,e)=>{for(var s in e||(e={}))I.call(e,s)&&L(a,s,e[s]);if(j)for(var s of j(e))P.call(e,s)&&L(a,s,e[s]);return a};import{u as C,r as o,j as i}from"./main-494.js";import{_ as m,d as r}from"./bi.185.0.js";import"./bi.23.437.js";import{S as F}from"./bi.107.13.js";import{S as T}from"./bi.719.924.js";import{I as M,i as z}from"./bi.104.3.js";import A from"./bi.76.263.js";import{c as _}from"./bi.684.880.js";import{L as B}from"./bi.623.881.js";import"./bi.170.9.js";import"./bi.617.11.js";import"./bi.890.14.js";import"./bi.136.701.js";function $({formFields:a,setFlow:e,flow:s,allIntegURL:f}){const g=C(),[u,d]=o.useState(!1),[v,x]=o.useState({}),[n,b]=o.useState(1),[k,p]=o.useState({show:!1}),[t,l]=o.useState({name:"Livestorm",type:"Livestorm",api_key:"",field_map:[{formField:"",livestormFormField:""}],actionName:"addPeopletoEventSession",actions:{}}),y=()=>{d(!0),z(s,e,f,t,g,"","",d).then(c=>{var S;c.success?(r.success((S=c.data)==null?void 0:S.msg),g(f)):r.error(c.data||c)})},E=h=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!_(t)){r.error(m("Please map mandatory fields","bit-integrations"));return}if(!t.selectedEvent){r.error(m("Please select an Event","bit-integrations"));return}if(!t.selectedSession){r.error(m("Please select a Session","bit-integrations"));return}t.field_map.length>0&&b(h)};return i.jsxs("div",{children:[i.jsx(F,{snack:k,setSnackbar:p}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(T,{step:3,active:n})}),i.jsx(A,{livestormConf:t,setLivestormConf:l,step:n,setStep:b,loading:v,setLoading:x,setSnackbar:p}),i.jsxs("div",{className:"btcd-stp-page",style:N({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(B,{formFields:a,livestormConf:t,setLivestormConf:l,loading:v,setLoading:x,isLoading:u,setIsLoading:d,setSnackbar:p}),(t==null?void 0:t.actionName)&&i.jsxs("button",{onClick:()=>E(3),disabled:!_(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[m("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&i.jsx(M,{step:n,saveConfig:()=>y(),isLoading:u,dataConf:t,setDataConf:l,formFields:a})]})}export{$ as default};
