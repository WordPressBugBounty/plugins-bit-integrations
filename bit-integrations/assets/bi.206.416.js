var y=Object.defineProperty;var v=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var j=(s,t,e)=>t in s?y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,L=(s,t)=>{for(var e in t||(t={}))I.call(t,e)&&j(s,e,t[e]);if(v)for(var e of v(t))N.call(t,e)&&j(s,e,t[e]);return s};import{u as w,r as o,j as a}from"./main-165.js";import{d as F,_,I as E,F as T,c as d}from"./bi.312.95.js";import{S as P}from"./bi.354.971.js";import z from"./bi.936.284.js";import{h as A,c as B}from"./bi.750.821.js";import{M as D}from"./bi.410.822.js";import"./bi.40.785.js";import"./bi.953.732.js";import"./bi.422.733.js";function X({formFields:s,setFlow:t,flow:e,allIntegURL:m}){const f=w(),[S,u]=o.useState(!1),[g,h]=o.useState({list:!1,field:!1,auth:!1,group:!1}),[n,x]=o.useState(1),[M,p]=o.useState({show:!1}),[i,r]=o.useState({name:"MailerLite",type:"MailerLite",auth_token:"",field_map:[{formField:"",mailerLiteFormField:"email"}],mailer_lite_type:"",mailerLiteFields:[],groups:[],group_ids:[],actions:{}}),C=()=>{u(!0),T(e,t,m,i,f,"","",u).then(c=>{var b;c.success?(d.success((b=c.data)==null?void 0:b.msg),f(m)):d.error(c.data||c)})},k=l=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!B(i)){d.error(_("Please map mandatory fields","bit-integrations"));return}i.field_map.length>0&&x(l)};return a.jsxs("div",{children:[a.jsx(F,{snack:M,setSnackbar:p}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(P,{step:3,active:n})}),a.jsx(z,{mailerLiteConf:i,setMailerLiteConf:r,step:n,setstep:x,loading:g,setLoading:h,setSnackbar:p}),a.jsxs("div",{className:"btcd-stp-page",style:L({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(D,{formFields:s,handleInput:l=>A(l,i,r),mailerLiteConf:i,setMailerLiteConf:r,loading:g,setLoading:h,setSnackbar:p}),a.jsxs("button",{onClick:()=>k(3),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[_("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(E,{step:n,saveConfig:()=>C(),isLoading:S,dataConf:i,setDataConf:r,formFields:s})]})}export{X as default};
