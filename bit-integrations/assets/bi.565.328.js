var H=Object.defineProperty;var h=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var g=(a,t,e)=>t in a?H(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,x=(a,t)=>{for(var e in t||(t={}))N.call(t,e)&&g(a,e,t[e]);if(h)for(var e of h(t))y.call(t,e)&&g(a,e,t[e]);return a};import{u as I,r as o,j as i}from"./main-650.js";import{d as w,_ as c,I as L,s as P,c as u}from"./bi.541.15.js";import{S as A}from"./bi.326.902.js";import E from"./bi.566.193.js";import{H as M}from"./bi.587.726.js";import{h as z,c as v}from"./bi.479.725.js";import"./bi.912.697.js";import"./bi.770.713.js";import"./bi.619.660.js";import"./bi.119.661.js";function V({formFields:a,setFlow:t,flow:e,allIntegURL:S}){const j=I(),[k,f]=o.useState(!1),[n,m]=o.useState(1),[C,l]=o.useState({show:!1}),[r,b]=o.useState({auth:!1,customFields:!1,hubSpotFields:!1}),[s,p]=o.useState({name:"Hubspot",type:"Hubspot",api_key:"",field_map:[{formField:"",hubspotField:""}],hubSpotFields:[],actions:{}}),_=()=>{f(!0),P({flow:e,setFlow:t,allIntegURL:S,conf:s,navigate:j,setIsLoading:f,setSnackbar:l})},F=d=>{if(!v(s)){u.error(c("Please map mandatory fields","bit-integrations"));return}if(s.actionName==="ticket"){if(s.pipeline===void 0){u.error(c("Please select a pipeline","bit-integrations"));return}if(s.stage===void 0){u.error(c("Please select a stage","bit-integrations"));return}}s.field_map.length>0&&m(d)};return i.jsxs("div",{children:[i.jsx(w,{snack:C,setSnackbar:l}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(A,{step:3,active:n})}),i.jsx(E,{hubspotConf:s,setHubspotConf:p,step:n,setstep:m,loading:r,setLoading:b}),i.jsxs("div",{className:"btcd-stp-page",style:x({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(M,{formFields:a,handleInput:d=>z(d,s,p),hubspotConf:s,setHubspotConf:p,setSnackbar:l,loading:r,setLoading:b}),r.hubSpotFields&&i.jsxs("button",{onClick:()=>F(3),disabled:!v(s),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[c("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),r.hubSpotFields&&i.jsx(L,{step:n,saveConfig:()=>_(),isLoading:k,dataConf:s,setDataConf:p,formFields:a})]})}export{V as default};
