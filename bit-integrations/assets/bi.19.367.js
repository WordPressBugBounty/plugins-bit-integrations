var N=Object.defineProperty;var v=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var S=(s,t,e)=>t in s?N(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,y=(s,t)=>{for(var e in t||(t={}))w.call(t,e)&&S(s,e,t[e]);if(v)for(var e of v(t))E.call(t,e)&&S(s,e,t[e]);return s};import{u as I,r as o,j as a}from"./main-404.js";import"./bi.613.437.js";import{_ as m,d}from"./bi.51.0.js";import{S as L}from"./bi.896.13.js";import{S as T}from"./bi.53.923.js";import{I as K,i as P}from"./bi.488.3.js";import q from"./bi.633.226.js";import{c as z}from"./bi.401.808.js";import{M as A}from"./bi.973.809.js";import"./bi.964.9.js";import"./bi.484.11.js";import"./bi.565.14.js";import"./bi.116.700.js";import"./bi.841.674.js";import"./bi.75.675.js";function et({formFields:s,setFlow:t,flow:e,allIntegURL:p}){const u=I(),[M,f]=o.useState(!1),[g,j]=o.useState({auth:!1,customFields:!1,lists:!1}),[r,x]=o.useState(1),[k,c]=o.useState({show:!1}),_=[{key:"Email",label:m("Email","bit-integrations"),required:!0}],[i,l]=o.useState({name:"Mailjet",type:"Mailjet",apiKey:"",secretKey:"",field_map:[{formField:"",mailjetFormField:""}],staticFields:_,lists:[],customFields:[],selectedLists:"",groups:[],actions:{}}),C=()=>{f(!0),P(e,t,p,i,u,"","",f).then(n=>{var h;n.success?(d.success((h=n.data)==null?void 0:h.msg),u(p)):d.error(n.data||n)})},F=b=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!z(i)){d.error(m("Please map mandatory fields","bit-integrations"));return}i.field_map.length>0&&x(b)};return a.jsxs("div",{children:[a.jsx(L,{snack:k,setSnackbar:c}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(T,{step:3,active:r})}),a.jsx(q,{mailjetConf:i,setMailjetConf:l,step:r,setStep:x,loading:g,setLoading:j,setSnackbar:c}),a.jsxs("div",{className:"btcd-stp-page",style:y({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(A,{formFields:s,mailjetConf:i,setMailjetConf:l,loading:g,setLoading:j,setSnackbar:c}),a.jsxs("button",{onClick:()=>F(3),disabled:!(i!=null&&i.selectedLists),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[m("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(K,{step:r,saveConfig:()=>C(),isLoading:M,dataConf:i,setDataConf:l,formFields:s})]})}export{et as default};