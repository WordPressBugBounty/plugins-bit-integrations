var x=Object.defineProperty;var c=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var u=(i,e,t)=>e in i?x(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,p=(i,e)=>{for(var t in e||(e={}))h.call(e,t)&&u(i,t,e[t]);if(c)for(var t of c(e))k.call(e,t)&&u(i,t,e[t]);return i};import{u as j,r as n,j as a}from"./main-650.js";import{_ as o,I as _}from"./bi.541.15.js";import{S as N}from"./bi.326.902.js";import K from"./bi.63.211.js";import{n as S,c as C}from"./bi.749.767.js";import{K as F}from"./bi.983.768.js";import"./bi.770.713.js";import"./bi.619.660.js";import"./bi.119.661.js";function O({formFields:i,setFlow:e,flow:t,allIntegURL:b}){const g=j(),[v,y]=n.useState(!1),[m,d]=n.useState({list:!1,field:!1,auth:!1}),[l,f]=n.useState(1),[s,r]=n.useState({name:"Klaviyo",type:"Klaviyo",authKey:"",field_map:[{formField:"",klaviyoFormField:""}],custom_field_map:[{formField:"",klaviyoFormField:""}],klaviyoFields:[{key:"email",label:o("Email","bit-integrations"),required:!0},{key:"first_name",label:o("First Name","bit-integrations"),required:!1},{key:"last_name",label:o("Last Name","bit-integrations"),required:!1},{key:"title",label:o("Title","bit-integrations"),required:!1},{key:"organization",label:o("Organization","bit-integrations"),required:!1},{key:"phone_number",label:o("Phone Number","bit-integrations"),required:!1}],listId:"",actions:{}});return a.jsxs("div",{children:[a.jsx("div",{className:"txt-center mt-2",children:a.jsx(N,{step:3,active:l})}),a.jsx(K,{klaviyoConf:s,setKlaviyoConf:r,loading:m,setLoading:d,step:l,setStep:f}),a.jsxs("div",{className:"btcd-stp-page",style:p({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(F,{formFields:i,klaviyoConf:s,setKlaviyoConf:r,loading:m,setLoading:d}),a.jsxs("button",{onClick:()=>S(s,f,3),disabled:!s.listId||s.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[o("Next","bit-integrations")," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(_,{step:l,saveConfig:()=>C(t,e,b,s,g,y),isLoading:v,dataConf:s,setDataConf:r,formFields:i})]})}export{O as default};
