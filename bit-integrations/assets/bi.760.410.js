var w=Object.defineProperty;var v=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var j=(t,e,s)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,M=(t,e)=>{for(var s in e||(e={}))I.call(e,s)&&j(t,s,e[s]);if(v)for(var s of v(e))T.call(e,s)&&j(t,s,e[s]);return t};import{u as F,r as i,j as a}from"./main-80.js";import{d as P,_ as l,I as E,F as L,c as o}from"./bi.433.0.js";import{S as G}from"./bi.293.894.js";import{a as z,c as k}from"./bi.360.879.js";import{S as A}from"./bi.647.880.js";import B from"./bi.342.261.js";import"./bi.895.650.js";import"./bi.194.651.js";import"./bi.717.703.js";function X({formFields:t,setFlow:e,flow:s,allIntegURL:u}){const p=F(),[C,f]=i.useState(!1),[g,b]=i.useState({auth:!1,groups:!1}),[n,x]=i.useState(1),[_,m]=i.useState({show:!1}),[r,d]=i.useState({name:"SureMembers",type:"SureMembers",field_map:[{formField:"",sureMembersField:"email"}],staticFields:z,selectedTask:"",groups:[],selectedGroup:""}),y=()=>{f(!0),L(s,e,u,r,p,"","",f).then(c=>{var h;c.success?(o.success((h=c.data)==null?void 0:h.msg),p(u)):o.error(c.data||c)})},N=S=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!r.selectedTask){o.error(l("Please select a task!","bit-integrations"));return}if(!k(r)){o.error(l("Please map mandatory fields!","bit-integrations"));return}if(!r.selectedGroup){o.error(l("Please select a group!","bit-integrations"));return}r.field_map.length>0&&x(S)};return a.jsxs("div",{children:[a.jsx(P,{snack:_,setSnackbar:m}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(G,{step:3,active:n})}),a.jsx(B,{sureMembersConf:r,setSureMembersConf:d,step:n,setStep:x,loading:g,setLoading:b,setSnackbar:m}),a.jsxs("div",{className:"btcd-stp-page",style:M({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(A,{formFields:t,sureMembersConf:r,setSureMembersConf:d,loading:g,setLoading:b,setSnackbar:m}),a.jsxs("button",{onClick:()=>N(3),disabled:!k(r),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[l("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(E,{step:n,saveConfig:()=>y(),isLoading:C,dataConf:r,setDataConf:d,formFields:t})]})}export{X as default};