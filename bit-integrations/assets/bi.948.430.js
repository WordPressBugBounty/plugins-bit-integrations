var w=Object.defineProperty;var v=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var j=(s,e,t)=>e in s?w(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,M=(s,e)=>{for(var t in e||(e={}))I.call(e,t)&&j(s,t,e[t]);if(v)for(var t of v(e))T.call(e,t)&&j(s,t,e[t]);return s};import{u as P,r as i,j as r}from"./main-320.js";import"./bi.795.440.js";import{_ as m,d as o}from"./bi.576.0.js";import{S as E}from"./bi.51.13.js";import{S as F}from"./bi.78.940.js";import{I as L,i as G}from"./bi.337.3.js";import{a as z,c as k}from"./bi.770.919.js";import{S as A}from"./bi.593.920.js";import B from"./bi.319.278.js";import"./bi.155.9.js";import"./bi.440.11.js";import"./bi.574.14.js";import"./bi.468.689.js";import"./bi.775.690.js";import"./bi.382.733.js";function te({formFields:s,setFlow:e,flow:t,allIntegURL:d}){const u=P(),[C,f]=i.useState(!1),[g,b]=i.useState({auth:!1,groups:!1}),[n,S]=i.useState(1),[_,p]=i.useState({show:!1}),[a,l]=i.useState({name:"SureMembers",type:"SureMembers",field_map:[{formField:"",sureMembersField:"email"}],staticFields:z,selectedTask:"",groups:[],selectedGroup:""}),y=()=>{f(!0),G(t,e,d,a,u,"","",f).then(c=>{var h;c.success?(o.success((h=c.data)==null?void 0:h.msg),u(d)):o.error(c.data||c)})},N=x=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!a.selectedTask){o.error(m("Please select a task!","bit-integrations"));return}if(!k(a)){o.error(m("Please map mandatory fields!","bit-integrations"));return}if(!a.selectedGroup){o.error(m("Please select a group!","bit-integrations"));return}a.field_map.length>0&&S(x)};return r.jsxs("div",{children:[r.jsx(E,{snack:_,setSnackbar:p}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(F,{step:3,active:n})}),r.jsx(B,{sureMembersConf:a,setSureMembersConf:l,step:n,setStep:S,loading:g,setLoading:b,setSnackbar:p}),r.jsxs("div",{className:"btcd-stp-page",style:M({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(A,{formFields:s,sureMembersConf:a,setSureMembersConf:l,loading:g,setLoading:b,setSnackbar:p}),r.jsxs("button",{onClick:()=>N(3),disabled:!k(a),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[m("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),r.jsx(L,{step:n,saveConfig:()=>y(),isLoading:C,dataConf:a,setDataConf:l,formFields:s})]})}export{te as default};
