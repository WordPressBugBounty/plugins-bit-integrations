var P=Object.defineProperty;var D=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var S=(a,t,s)=>t in a?P(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,v=(a,t)=>{for(var s in t||(t={}))V.call(t,s)&&S(a,s,t[s]);if(D)for(var s of D(t))I.call(t,s)&&S(a,s,t[s]);return a};import{u as L,r as c,j as o}from"./main-247.js";import"./bi.393.437.js";import{_ as i,d as r}from"./bi.456.0.js";import{S as R}from"./bi.417.13.js";import{S as A}from"./bi.955.922.js";import{I as C,g as w}from"./bi.427.3.js";import{T as n,c as f}from"./bi.938.909.js";import{D as M}from"./bi.268.908.js";import O from"./bi.324.280.js";import"./bi.712.9.js";import"./bi.923.11.js";import"./bi.858.14.js";import"./bi.510.673.js";import"./bi.210.674.js";import"./bi.30.716.js";function te({formFields:a,setFlow:t,flow:s,allIntegURL:u}){const g=L(),[_,E]=c.useState(!1),[T,k]=c.useState({auth:!1,euFields:!1,vendors:!1}),[d,b]=c.useState(1),[j,m]=c.useState({show:!1}),[e,p]=c.useState({name:"Dokan",type:"Dokan",field_map:[],staticFields:[],selectedTask:"",vendors:[],selectedVendor:"",actions:{},deleteVendorFieldMap:!1,selectedPaymentMethod:""}),N=()=>{E(!0),w(s,t,u,e,g,"","",E).then(l=>{var x;l.success?(r.success((x=l.data)==null?void 0:x.msg),g(u)):r.error(l.data||l)})},y=h=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!e.selectedTask){r.error(i("Please select a task!","bit-integrations"));return}if((e.selectedTask===n.UPDATE_VENDOR||e.selectedTask===n.WITHDRAW_REQUEST)&&!e.selectedVendor){r.error(i("Please select a vendor!","bit-integrations"));return}if(e.selectedTask!==n.DELETE_VENDOR&&!f(e)){r.error(i("Please map mandatory fields!","bit-integrations"));return}if(e.selectedTask===n.DELETE_VENDOR&&!e.selectedVendor&&!f(e)){r.error(i("Please select a topic or map fields!","bit-integrations"));return}if(e.selectedTask===n.WITHDRAW_REQUEST&&!e.selectedPaymentMethod){r.error(i("Please select a payment method!","bit-integrations"));return}e.field_map.length>0&&b(h)};return o.jsxs("div",{children:[o.jsx(R,{snack:j,setSnackbar:m}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(A,{step:3,active:d})}),o.jsx(O,{dokanConf:e,setDokanConf:p,step:d,setStep:b,loading:T,setLoading:k,setSnackbar:m}),o.jsxs("div",{className:"btcd-stp-page",style:v({},d===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(M,{formFields:a,dokanConf:e,setDokanConf:p,loading:T,setLoading:k,setSnackbar:m}),o.jsxs("button",{onClick:()=>y(3),disabled:(e==null?void 0:e.selectedTask)!==n.DELETE_VENDOR&&!f(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[i("Next","bit-integrations"),"  ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),o.jsx(C,{step:d,saveConfig:()=>N(),isLoading:_,dataConf:e,setDataConf:p,formFields:a})]})}export{te as default};