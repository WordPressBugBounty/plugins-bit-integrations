var x=Object.defineProperty;var f=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var c=(i,t,e)=>t in i?x(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,u=(i,t)=>{for(var e in t||(t={}))h.call(t,e)&&c(i,e,t[e]);if(f)for(var e of f(t))k.call(t,e)&&c(i,e,t[e]);return i};import{u as j,r as l,j as a}from"./main-246.js";import{_ as o}from"./bi.560.0.js";import{S as _}from"./bi.626.976.js";import{I as N}from"./bi.545.3.js";import K from"./bi.54.215.js";import{n as S,c as C}from"./bi.270.831.js";import{K as F}from"./bi.762.832.js";import"./bi.222.13.js";import"./bi.675.443.js";import"./bi.947.9.js";import"./bi.975.11.js";import"./bi.557.14.js";import"./bi.142.765.js";import"./bi.300.720.js";import"./bi.924.721.js";import"./bi.470.726.js";import"./bi.583.833.js";function U({formFields:i,setFlow:t,flow:e,allIntegURL:b}){const g=j(),[v,y]=l.useState(!1),[m,d]=l.useState({list:!1,field:!1,auth:!1}),[r,p]=l.useState(1),[s,n]=l.useState({name:"Klaviyo",type:"Klaviyo",authKey:"",field_map:[{formField:"",klaviyoFormField:""}],custom_field_map:[{formField:"",klaviyoFormField:""}],klaviyoFields:[{key:"email",label:o("Email","bit-integrations"),required:!0},{key:"first_name",label:o("First Name","bit-integrations"),required:!1},{key:"last_name",label:o("Last Name","bit-integrations"),required:!1},{key:"title",label:o("Title","bit-integrations"),required:!1},{key:"organization",label:o("Organization","bit-integrations"),required:!1},{key:"phone_number",label:o("Phone Number","bit-integrations"),required:!1}],listId:"",actions:{}});return a.jsxs("div",{children:[a.jsx("div",{className:"txt-center mt-2",children:a.jsx(_,{step:3,active:r})}),a.jsx(K,{klaviyoConf:s,setKlaviyoConf:n,loading:m,setLoading:d,step:r,setStep:p}),a.jsxs("div",{className:"btcd-stp-page",style:u({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(F,{formFields:i,klaviyoConf:s,setKlaviyoConf:n,loading:m,setLoading:d}),a.jsxs("button",{onClick:()=>S(s,p,3),disabled:!s.listId||s.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[o("Next","bit-integrations")," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(N,{step:r,saveConfig:()=>C(e,t,b,s,g,y),isLoading:v,dataConf:s,setDataConf:n,formFields:i})]})}export{U as default};
