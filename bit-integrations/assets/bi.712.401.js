var G=Object.defineProperty;var _=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var S=(s,i,a)=>i in s?G(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a,j=(s,i)=>{for(var a in i||(i={}))w.call(i,a)&&S(s,a,i[a]);if(_)for(var a of _(i))L.call(i,a)&&S(s,a,i[a]);return s};import{u as C,r as n,j as r}from"./main-404.js";import{_ as t,d as p}from"./bi.51.0.js";import"./bi.613.437.js";import{S as M}from"./bi.896.13.js";import{S as D}from"./bi.53.923.js";import{I as E,i as P}from"./bi.488.3.js";import F from"./bi.287.259.js";import{a as R,c as q}from"./bi.671.871.js";import{G as z}from"./bi.309.872.js";import"./bi.964.9.js";import"./bi.484.11.js";import"./bi.565.14.js";import"./bi.116.700.js";import"./bi.841.674.js";import"./bi.75.675.js";function ie({formFields:s,setFlow:i,flow:a,allIntegURL:u}){const g=C(),[b,c]=n.useState(!1),[f,y]=n.useState({}),[o,k]=n.useState(1),[N,d]=n.useState({show:!1}),x=[{key:"send_date",label:t("Send Date","bit-integrations"),required:!1},{key:"ttl",label:t("Time to Live","bit-integrations"),required:!1},{key:"push_tag",label:t("Push Tag","bit-integrations"),required:!1},{key:"display_time",label:t("Display Time","bit-integrations"),required:!1},{key:"is_transactional",label:t("Is Transactional","bit-integrations"),required:!1},{key:"segments",label:t("Segments","bit-integrations"),required:!1},{key:"message",label:t("Message","bit-integrations"),required:!0},{key:"title",label:t("Title","bit-integrations"),required:!1},{key:"icon",label:t("Icon","bit-integrations"),required:!0},{key:"image",label:t("Image","bit-integrations"),required:!1},{key:"redirect_url",label:t("Redirect URL","bit-integrations"),required:!0}],[e,m]=n.useState({name:"Gravitec",type:"Gravitec",app_key:"",app_secret:"",site_url:"",field_map:R(x),actionName:"",notificationFields:x,actions:{}}),I=()=>{c(!0),P(a,i,u,e,g,"","",c).then(l=>{var v;l.success?(p.success((v=l.data)==null?void 0:v.msg),g(u)):p.error(l.data||l)})},T=h=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!q(e)){p.error(t("Please map mandatory fields","bit-integrations"));return}e.field_map.length>0&&k(h)};return r.jsxs("div",{children:[r.jsx(M,{snack:N,setSnackbar:d}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(D,{step:3,active:o})}),r.jsx(F,{gravitecConf:e,setGravitecConf:m,step:o,setStep:k,loading:f,setLoading:y,setSnackbar:d}),r.jsxs("div",{className:"btcd-stp-page",style:j({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(z,{formFields:s,gravitecConf:e,setGravitecConf:m,loading:f,setLoading:y,isLoading:b,setIsLoading:c,setSnackbar:d}),(e==null?void 0:e.actionName)&&r.jsxs("button",{onClick:()=>T(3),disabled:!q(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[t("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&r.jsx(E,{step:o,saveConfig:()=>I(),isLoading:b,dataConf:e,setDataConf:m,formFields:s})]})}export{ie as default};
