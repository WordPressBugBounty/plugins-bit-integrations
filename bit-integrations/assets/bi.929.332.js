var S=Object.defineProperty;var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var g=(i,e,t)=>e in i?S(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,b=(i,e)=>{for(var t in e||(e={}))w.call(e,t)&&g(i,t,e[t]);if(f)for(var t of f(e))y.call(e,t)&&g(i,t,e[t]);return i};import{u as N,o as _,r,j as a}from"./main-586.js";import"./bi.960.440.js";import{_ as n}from"./bi.612.0.js";import{S as F}from"./bi.733.13.js";import{S as C}from"./bi.692.945.js";import{I as D,s as E}from"./bi.993.3.js";import q from"./bi.841.194.js";import{g as L,s as M,h as P,d as x}from"./bi.322.758.js";import{T as A}from"./bi.212.757.js";import"./bi.175.9.js";import"./bi.980.11.js";import"./bi.520.14.js";import"./bi.313.731.js";import"./bi.453.737.js";import"./bi.546.692.js";import"./bi.203.693.js";function te({formFields:i,setFlow:e,flow:t,allIntegURL:h}){const j=N(),{formID:v}=_(),[d,l]=r.useState(!1),[c,p]=r.useState(1),[I,o]=r.useState({show:!1}),u=[{key:"name",label:n("Name","bit-integrations"),required:!0},{key:"desc",label:n("Description","bit-integrations"),required:!1},{key:"due",label:n("Date","bit-integrations"),required:!1}],[s,m]=r.useState({name:"Trello",type:"Trello",clientId:"",listId:"",listName:"",tags:"",pos:"",field_map:L(u),custom_field_map:[{formField:"",trelloFormField:""}],cardFields:u,customFields:[],actions:{}});r.useEffect(()=>{window.opener&&M("trello")},[]);const T=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!x(s)){o({show:!0,msg:n("Please map fields to continue.","bit-integrations")});return}s.listId!==""&&p(3)};return a.jsxs("div",{children:[a.jsx(F,{snack:I,setSnackbar:o}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(C,{step:3,active:c})}),a.jsx(q,{formID:v,trelloConf:s,setTrelloConf:m,step:c,setstep:p,isLoading:d,setIsLoading:l,setSnackbar:o}),a.jsxs("div",{className:"btcd-stp-page",style:b({},c===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(A,{formFields:i,handleInput:k=>P(k,s,m,l,o),trelloConf:s,setTrelloConf:m,isLoading:d,setIsLoading:l,setSnackbar:o}),a.jsxs("button",{onClick:()=>T(),disabled:!(s!=null&&s.listId)||!x(s),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[n("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(D,{step:c,saveConfig:()=>E({flow:t,setFlow:e,allIntegURL:h,navigate:j,conf:s,setIsLoading:l,setSnackbar:o}),isLoading:d,dataConf:s,setDataConf:m,formFields:i})]})}export{te as default};
