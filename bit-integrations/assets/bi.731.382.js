var y=Object.defineProperty;var v=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var j=(s,e,t)=>e in s?y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,S=(s,e)=>{for(var t in e||(e={}))N.call(e,t)&&j(s,t,e[t]);if(v)for(var t of v(e))T.call(e,t)&&j(s,t,e[t]);return s};import{u as w,r as o,j as i}from"./main-320.js";import{_ as F,d as p}from"./bi.576.0.js";import{S as E}from"./bi.51.13.js";import{S as L}from"./bi.78.940.js";import{I as B,i as M}from"./bi.337.3.js";import P from"./bi.988.240.js";import{h as z,c as A}from"./bi.966.847.js";import{A as D}from"./bi.341.848.js";import"./bi.795.440.js";import"./bi.155.9.js";import"./bi.440.11.js";import"./bi.574.14.js";import"./bi.382.733.js";import"./bi.468.689.js";import"./bi.775.690.js";function te({formFields:s,setFlow:e,flow:t,allIntegURL:b}){const f=w(),[C,u]=o.useState(!1),[r,g]=o.useState({auth:!1,customFields:!1,bases:!1,tables:!1,airtableFields:!1}),[n,h]=o.useState(1),[_,m]=o.useState({show:!1}),[a,l]=o.useState({name:"Airtable",type:"Airtable",auth_token:"",field_map:[{formField:"",airtableFormField:""}],airtableFields:[],bases:[],selectedBase:"",selectedTable:"",actions:{}}),k=()=>{u(!0),M(t,e,b,a,f,"","",u).then(d=>{var x;d.success?(p.success((x=d.data)==null?void 0:x.msg),f(b)):p.error(d.data||d)})},I=c=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!A(a)){p.error(F("Please map mandatory airtableFields","bit-integrations"));return}a.field_map.length>0&&h(c)};return i.jsxs("div",{children:[i.jsx(E,{snack:_,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(L,{step:3,active:n})}),i.jsx(P,{airtableConf:a,setAirtableConf:l,step:n,setStep:h,loading:r,setLoading:g,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:S({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(D,{formFields:s,handleInput:c=>z(c,a,l),airtableConf:a,setAirtableConf:l,loading:r,setLoading:g,setSnackbar:m}),r.airtableFields&&a.selectedTable&&i.jsxs("button",{onClick:()=>I(3),disabled:!A(a),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[F("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),r.airtableFields&&a.selectedTable&&i.jsx(B,{step:n,saveConfig:()=>k(),isLoading:C,dataConf:a,setDataConf:l,formFields:s})]})}export{te as default};
