var I=Object.defineProperty;var y=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var S=(s,t,e)=>t in s?I(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,v=(s,t)=>{for(var e in t||(t={}))N.call(t,e)&&S(s,e,t[e]);if(y)for(var e of y(t))w.call(t,e)&&S(s,e,t[e]);return s};import{u as E,r as m,j as a}from"./main-615.js";import"./bi.991.437.js";import{_ as p,d as f}from"./bi.394.0.js";import{S as F}from"./bi.700.13.js";import{S as T}from"./bi.440.922.js";import{I as q,g as L}from"./bi.819.3.js";import M from"./bi.825.197.js";import{S as P,h as z,c as A}from"./bi.184.744.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.560.697.js";import"./bi.681.699.js";import"./bi.178.673.js";import"./bi.985.674.js";function tt({formFields:s,setFlow:t,flow:e,allIntegURL:g}){const b=E(),[l,n]=m.useState(!1),[o,h]=m.useState(1),[j,u]=m.useState({show:!1}),k=[{key:"email",label:p("Email","bit-integrations"),required:!0},{key:"name",label:p("Name","bit-integrations"),required:!1}],[i,r]=m.useState({name:"Sendy",type:"Sendy",api_key:"",sendy_url:"",field_map:[{formField:"",sendyField:""}],subscriberFields:k,actions:{}}),_=()=>{n(!0),L(e,t,g,i,b,"","",n).then(d=>{var x;d.success?(f.success((x=d.data)==null?void 0:x.msg),b(g)):f.error(d.data||d)})},C=c=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!A(i)){f.error(p("Please map mandatory fields","bit-integrations"));return}i.field_map.length>0&&h(c)};return a.jsxs("div",{children:[a.jsx(F,{snack:j,setSnackbar:u}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(T,{step:3,active:o})}),a.jsx(M,{sendyConf:i,setSendyConf:r,step:o,setstep:h,isLoading:l,setIsLoading:n,setSnackbar:u}),a.jsxs("div",{className:"btcd-stp-page",style:v({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(P,{formFields:s,handleInput:c=>z(c,i,r),sendyConf:i,setSendyConf:r,isLoading:l,setIsLoading:n,setSnackbar:u}),a.jsxs("button",{onClick:()=>C(3),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[p("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(q,{step:o,saveConfig:()=>_(),isLoading:l,dataConf:i,setDataConf:r,formFields:s})]})}export{tt as default};
