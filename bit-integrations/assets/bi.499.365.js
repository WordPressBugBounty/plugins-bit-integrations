var F=Object.defineProperty;var j=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var k=(a,t,s)=>t in a?F(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,S=(a,t)=>{for(var s in t||(t={}))q.call(t,s)&&k(a,s,t[s]);if(j)for(var s of j(t))w.call(t,s)&&k(a,s,t[s]);return a};import{u as T,r as o,j as i}from"./main-586.js";import"./bi.960.440.js";import{_ as r,d as p}from"./bi.612.0.js";import{S as E}from"./bi.733.13.js";import{S as L}from"./bi.692.945.js";import{I as z,i as A}from"./bi.993.3.js";import B from"./bi.198.223.js";import{h as P,c as C}from"./bi.805.820.js";import{M as D}from"./bi.675.821.js";import"./bi.175.9.js";import"./bi.980.11.js";import"./bi.520.14.js";import"./bi.453.737.js";import"./bi.546.692.js";import"./bi.203.693.js";function se({formFields:a,setFlow:t,flow:s,allIntegURL:u}){const b=T(),[y,g]=o.useState(!1),[f,h]=o.useState({auth:!1,customFields:!1}),[n,x]=o.useState(1),[N,m]=o.useState({show:!1}),M=[{key:"email",label:r("Email","bit-integrations"),required:!0},{key:"firstName",label:r("First Name","bit-integrations"),required:!1},{key:"lastName",label:r("Last Name","bit-integrations"),required:!1},{key:"timezone",label:r("Timezone","bit-integrations"),required:!1},{key:"ipAddress",label:r("IP Address","bit-integrations"),required:!1}],[e,l]=o.useState({name:"MailBluster",type:"MailBluster",auth_token:"",field_map:[{formField:"",mailBlusterFormField:""}],staticFields:M,subscribed:"",customFields:[],selectedTags:[],actions:{}}),I=()=>{g(!0),A(s,t,u,e,b,"","",g).then(c=>{var v;c.success?(p.success((v=c.data)==null?void 0:v.msg),b(u)):p.error(c.data||c)})},_=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!C(e)){p.error(r("Please map mandatory fields","bit-integrations"));return}e.field_map.length>0&&x(d)};return i.jsxs("div",{children:[i.jsx(E,{snack:N,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(L,{step:3,active:n})}),i.jsx(B,{mailBlusterConf:e,setMailBlusterConf:l,step:n,setStep:x,loading:f,setLoading:h,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:S({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(D,{formFields:a,handleInput:d=>P(d,e,l),mailBlusterConf:e,setMailBlusterConf:l,loading:f,setLoading:h,setSnackbar:m}),(e==null?void 0:e.subscribed)&&i.jsxs("button",{onClick:()=>_(3),disabled:!(e!=null&&e.subscribed),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[r("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.subscribed)&&i.jsx(z,{step:n,saveConfig:()=>I(),isLoading:y,dataConf:e,setDataConf:l,formFields:a})]})}export{se as default};
