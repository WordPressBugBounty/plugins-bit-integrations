var G=Object.defineProperty;var _=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var S=(i,a,s)=>a in i?G(i,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[a]=s,j=(i,a)=>{for(var s in a||(a={}))w.call(a,s)&&S(i,s,a[s]);if(_)for(var s of _(a))L.call(a,s)&&S(i,s,a[s]);return i};import{u as C,r as n,j as r}from"./main-650.js";import{_ as t,d as M,I as D,F as E,c as p}from"./bi.541.15.js";import{S as F}from"./bi.326.902.js";import P from"./bi.177.257.js";import{a as R,c as q}from"./bi.363.856.js";import{G as z}from"./bi.863.857.js";import"./bi.770.713.js";import"./bi.619.660.js";import"./bi.119.661.js";function X({formFields:i,setFlow:a,flow:s,allIntegURL:u}){const g=C(),[b,c]=n.useState(!1),[f,y]=n.useState({}),[o,k]=n.useState(1),[N,d]=n.useState({show:!1}),x=[{key:"send_date",label:t("Send Date","bit-integrations"),required:!1},{key:"ttl",label:t("Time to Live","bit-integrations"),required:!1},{key:"push_tag",label:t("Push Tag","bit-integrations"),required:!1},{key:"display_time",label:t("Display Time","bit-integrations"),required:!1},{key:"is_transactional",label:t("Is Transactional","bit-integrations"),required:!1},{key:"segments",label:t("Segments","bit-integrations"),required:!1},{key:"message",label:t("Message","bit-integrations"),required:!0},{key:"title",label:t("Title","bit-integrations"),required:!1},{key:"icon",label:t("Icon","bit-integrations"),required:!0},{key:"image",label:t("Image","bit-integrations"),required:!1},{key:"redirect_url",label:t("Redirect URL","bit-integrations"),required:!0}],[e,m]=n.useState({name:"Gravitec",type:"Gravitec",app_key:"",app_secret:"",site_url:"",field_map:R(x),actionName:"",notificationFields:x,actions:{}}),I=()=>{c(!0),E(s,a,u,e,g,"","",c).then(l=>{var v;l.success?(p.success((v=l.data)==null?void 0:v.msg),g(u)):p.error(l.data||l)})},T=h=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!q(e)){p.error(t("Please map mandatory fields","bit-integrations"));return}e.field_map.length>0&&k(h)};return r.jsxs("div",{children:[r.jsx(M,{snack:N,setSnackbar:d}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(F,{step:3,active:o})}),r.jsx(P,{gravitecConf:e,setGravitecConf:m,step:o,setStep:k,loading:f,setLoading:y,setSnackbar:d}),r.jsxs("div",{className:"btcd-stp-page",style:j({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(z,{formFields:i,gravitecConf:e,setGravitecConf:m,loading:f,setLoading:y,isLoading:b,setIsLoading:c,setSnackbar:d}),(e==null?void 0:e.actionName)&&r.jsxs("button",{onClick:()=>T(3),disabled:!q(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[t("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&r.jsx(D,{step:o,saveConfig:()=>I(),isLoading:b,dataConf:e,setDataConf:m,formFields:i})]})}export{X as default};