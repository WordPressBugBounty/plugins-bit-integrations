var I=Object.defineProperty;var h=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var k=(a,t,s)=>t in a?I(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,S=(a,t)=>{for(var s in t||(t={}))O.call(t,s)&&k(a,s,t[s]);if(h)for(var s of h(t))R.call(t,s)&&k(a,s,t[s]);return a};import{u as L,r as c,j as r}from"./main-320.js";import"./bi.795.440.js";import{_ as i,d as o}from"./bi.576.0.js";import{S as N}from"./bi.51.13.js";import{S as W}from"./bi.78.940.js";import{I as y,i as A}from"./bi.337.3.js";import{T as n,c as m}from"./bi.742.924.js";import{W as D}from"./bi.311.923.js";import G from"./bi.402.280.js";import"./bi.155.9.js";import"./bi.440.11.js";import"./bi.574.14.js";import"./bi.468.689.js";import"./bi.775.690.js";import"./bi.382.733.js";function te({formFields:a,setFlow:t,flow:s,allIntegURL:f}){const g=L(),[v,T]=c.useState(!1),[b,P]=c.useState({auth:!1,reputation:!1,groups:!1,forums:!1,topics:!1}),[l,E]=c.useState(1),[j,d]=c.useState({show:!1}),[e,u]=c.useState({name:"WPForo",type:"WPForo",field_map:[],staticFields:[],selectedTask:"",groups:[],selectedGroup:"",reputations:[],selectedReputation:"",forums:[],selectedForum:"",selectedTags:"",actions:{},selectedTopic:"",topics:[],deleteTopicFieldMap:!1}),C=()=>{T(!0),A(s,t,f,e,g,"","",T).then(p=>{var _;p.success?(o.success((_=p.data)==null?void 0:_.msg),g(f)):o.error(p.data||p)})},F=x=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!e.selectedTask){o.error(i("Please select a task!","bit-integrations"));return}if(e.selectedTask!==n.DELETE_TOPIC&&!m(e)){o.error(i("Please map mandatory fields!","bit-integrations"));return}if(e.selectedTask===n.USER_REPUTATION&&!e.selectedReputation){o.error(i("Please select a reputation!","bit-integrations"));return}if(e.selectedTask===n.ADD_TO_GROUP&&!e.selectedGroup){o.error(i("Please select a group!","bit-integrations"));return}if(e.selectedTask===n.REMOVE_FROM_GROUP&&!e.selectedGroup){o.error(i("Please select a group!","bit-integrations"));return}if(e.selectedTask===n.CREATE_TOPIC&&!e.selectedForum){o.error(i("Please select a forum!","bit-integrations"));return}if(e.selectedTask===n.DELETE_TOPIC&&!e.selectedTopic&&!m(e)){o.error(i("Please select a topic or map fields!","bit-integrations"));return}e.field_map.length>0&&E(x)};return r.jsxs("div",{children:[r.jsx(N,{snack:j,setSnackbar:d}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(W,{step:3,active:l})}),r.jsx(G,{wpforoConf:e,setWPForoConf:u,step:l,setStep:E,loading:b,setLoading:P,setSnackbar:d}),r.jsxs("div",{className:"btcd-stp-page",style:S({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(D,{formFields:a,wpforoConf:e,setWPForoConf:u,loading:b,setLoading:P,setSnackbar:d}),r.jsxs("button",{onClick:()=>F(3),disabled:(e==null?void 0:e.selectedTask)!==n.DELETE_TOPIC&&!m(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[i("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),r.jsx(y,{step:l,saveConfig:()=>C(),isLoading:v,dataConf:e,setDataConf:u,formFields:a})]})}export{te as default};
