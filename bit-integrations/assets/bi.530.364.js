var N=Object.defineProperty;var x=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var S=(i,s,a)=>s in i?N(i,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[s]=a,v=(i,s)=>{for(var a in s||(s={}))w.call(s,a)&&S(i,a,s[a]);if(x)for(var a of x(s))F.call(s,a)&&S(i,a,s[a]);return i};import{u as C,r as o,j as r}from"./main-404.js";import"./bi.613.437.js";import{_ as t,d as m}from"./bi.51.0.js";import{S as E}from"./bi.896.13.js";import{S as L}from"./bi.53.923.js";import{I as T,i as P}from"./bi.488.3.js";import z from"./bi.996.223.js";import{h as A,c as B}from"./bi.649.802.js";import{M as R}from"./bi.758.803.js";import"./bi.964.9.js";import"./bi.484.11.js";import"./bi.565.14.js";import"./bi.116.700.js";import"./bi.841.674.js";import"./bi.75.675.js";function se({formFields:i,setFlow:s,flow:a,allIntegURL:p}){const b=C(),[j,g]=o.useState(!1),[f,y]=o.useState({auth:!1,groups:!1,customFields:!1}),[n,h]=o.useState(1),[q,u]=o.useState({show:!1}),M=[{key:"email",label:t("Email","bit-integrations"),required:!0},{key:"name",label:t("Name","bit-integrations"),required:!1},{key:"sms_phone",label:t("SMS Phone","bit-integrations"),required:!1},{key:"address",label:t("Address","bit-integrations"),required:!1},{key:"city",label:t("City","bit-integrations"),required:!1},{key:"state",label:t("State","bit-integrations"),required:!1},{key:"country",label:t("Country","bit-integrations"),required:!1},{key:"birthday",label:t("Birthday","bit-integrations"),required:!1},{key:"website",label:t("Website","bit-integrations"),required:!1},{key:"locale",label:t("Locale","bit-integrations"),required:!1},{key:"time_zone",label:t("Time Zone","bit-integrations"),required:!1}],[e,l]=o.useState({name:"MailRelay",type:"MailRelay",auth_token:"",domain:"",field_map:[{formField:"",mailRelayFormField:""}],staticFields:M,status:"",customFields:[],groups:[],selectedGroups:[],actions:{}}),_=()=>{g(!0),P(a,s,p,e,b,"","",g).then(c=>{var k;c.success?(m.success((k=c.data)==null?void 0:k.msg),b(p)):m.error(c.data||c)})},I=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!B(e)){m.error(t("Please map mandatory fields","bit-integrations"));return}e.field_map.length>0&&h(d)};return r.jsxs("div",{children:[r.jsx(E,{snack:q,setSnackbar:u}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(L,{step:3,active:n})}),r.jsx(z,{mailRelayConf:e,setMailRelayConf:l,step:n,setStep:h,loading:f,setLoading:y,setSnackbar:u}),r.jsxs("div",{className:"btcd-stp-page",style:v({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(R,{formFields:i,handleInput:d=>A(d,e,l),mailRelayConf:e,setMailRelayConf:l,loading:f,setLoading:y,setSnackbar:u}),(e==null?void 0:e.status)&&r.jsxs("button",{onClick:()=>I(3),disabled:!(e!=null&&e.status),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[t("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.status)&&r.jsx(T,{step:n,saveConfig:()=>_(),isLoading:j,dataConf:e,setDataConf:l,formFields:i})]})}export{se as default};
