var S=Object.defineProperty;var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var g=(i,t,e)=>t in i?S(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,b=(i,t)=>{for(var e in t||(t={}))w.call(t,e)&&g(i,e,t[e]);if(f)for(var e of f(t))y.call(t,e)&&g(i,e,t[e]);return i};import{u as N,o as _,r,j as o}from"./main-425.js";import"./bi.900.437.js";import{_ as n}from"./bi.107.0.js";import{S as F}from"./bi.273.13.js";import{S as C}from"./bi.346.924.js";import{I as D,s as E}from"./bi.25.3.js";import q from"./bi.646.193.js";import{g as L,s as M,h as P,d as x}from"./bi.199.740.js";import{T as A}from"./bi.513.739.js";import"./bi.814.9.js";import"./bi.563.11.js";import"./bi.783.14.js";import"./bi.810.699.js";import"./bi.775.701.js";import"./bi.178.675.js";import"./bi.326.676.js";import"./bi.428.672.js";function st({formFields:i,setFlow:t,flow:e,allIntegURL:h}){const j=N(),{formID:v}=_(),[d,l]=r.useState(!1),[m,p]=r.useState(1),[I,a]=r.useState({show:!1}),u=[{key:"name",label:n("Name","bit-integrations"),required:!0},{key:"desc",label:n("Description","bit-integrations"),required:!1},{key:"due",label:n("Date","bit-integrations"),required:!1}],[s,c]=r.useState({name:"Trello",type:"Trello",clientId:"",listId:"",listName:"",tags:"",pos:"",field_map:L(u),custom_field_map:[{formField:"",trelloFormField:""}],cardFields:u,customFields:[],actions:{}});r.useEffect(()=>{window.opener&&M("trello")},[]);const T=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!x(s)){a({show:!0,msg:n("Please map fields to continue.","bit-integrations")});return}s.listId!==""&&p(3)};return o.jsxs("div",{children:[o.jsx(F,{snack:I,setSnackbar:a}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(C,{step:3,active:m})}),o.jsx(q,{formID:v,trelloConf:s,setTrelloConf:c,step:m,setstep:p,isLoading:d,setIsLoading:l,setSnackbar:a}),o.jsxs("div",{className:"btcd-stp-page",style:b({},m===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(A,{formFields:i,handleInput:k=>P(k,s,c,l,a),trelloConf:s,setTrelloConf:c,isLoading:d,setIsLoading:l,setSnackbar:a}),o.jsxs("button",{onClick:()=>T(),disabled:!(s!=null&&s.listId)||!x(s),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[n("Next","bit-integrations"),"  ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),o.jsx(D,{step:m,saveConfig:()=>E({flow:e,setFlow:t,allIntegURL:h,navigate:j,conf:s,setIsLoading:l,setSnackbar:a}),isLoading:d,dataConf:s,setDataConf:c,formFields:i})]})}export{st as default};
