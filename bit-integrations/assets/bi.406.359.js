var I=Object.defineProperty;var x=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var S=(i,s,a)=>s in i?I(i,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[s]=a,v=(i,s)=>{for(var a in s||(s={}))N.call(s,a)&&S(i,a,s[a]);if(x)for(var a of x(s))w.call(s,a)&&S(i,a,s[a]);return i};import{u as C,r as n,j as r}from"./main-29.js";import{_ as t,d as E,I as L,F as T,c as b}from"./bi.860.15.js";import{S as P}from"./bi.885.903.js";import z from"./bi.362.221.js";import{h as A,c as B}from"./bi.179.788.js";import{M as R}from"./bi.917.789.js";import"./bi.244.714.js";import"./bi.831.661.js";import"./bi.392.662.js";function X({formFields:i,setFlow:s,flow:a,allIntegURL:m}){const p=C(),[j,g]=n.useState(!1),[f,y]=n.useState({auth:!1,groups:!1,customFields:!1}),[o,h]=n.useState(1),[q,u]=n.useState({show:!1}),M=[{key:"email",label:t("Email","bit-integrations"),required:!0},{key:"name",label:t("Name","bit-integrations"),required:!1},{key:"sms_phone",label:t("SMS Phone","bit-integrations"),required:!1},{key:"address",label:t("Address","bit-integrations"),required:!1},{key:"city",label:t("City","bit-integrations"),required:!1},{key:"state",label:t("State","bit-integrations"),required:!1},{key:"country",label:t("Country","bit-integrations"),required:!1},{key:"birthday",label:t("Birthday","bit-integrations"),required:!1},{key:"website",label:t("Website","bit-integrations"),required:!1},{key:"locale",label:t("Locale","bit-integrations"),required:!1},{key:"time_zone",label:t("Time Zone","bit-integrations"),required:!1}],[e,l]=n.useState({name:"MailRelay",type:"MailRelay",auth_token:"",domain:"",field_map:[{formField:"",mailRelayFormField:""}],staticFields:M,status:"",customFields:[],groups:[],selectedGroups:[],actions:{}}),_=()=>{g(!0),T(a,s,m,e,p,"","",g).then(c=>{var k;c.success?(b.success((k=c.data)==null?void 0:k.msg),p(m)):b.error(c.data||c)})},F=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!B(e)){b.error(t("Please map mandatory fields","bit-integrations"));return}e.field_map.length>0&&h(d)};return r.jsxs("div",{children:[r.jsx(E,{snack:q,setSnackbar:u}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(P,{step:3,active:o})}),r.jsx(z,{mailRelayConf:e,setMailRelayConf:l,step:o,setStep:h,loading:f,setLoading:y,setSnackbar:u}),r.jsxs("div",{className:"btcd-stp-page",style:v({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(R,{formFields:i,handleInput:d=>A(d,e,l),mailRelayConf:e,setMailRelayConf:l,loading:f,setLoading:y,setSnackbar:u}),(e==null?void 0:e.status)&&r.jsxs("button",{onClick:()=>F(3),disabled:!(e!=null&&e.status),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[t("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.status)&&r.jsx(L,{step:o,saveConfig:()=>_(),isLoading:j,dataConf:e,setDataConf:l,formFields:i})]})}export{X as default};
