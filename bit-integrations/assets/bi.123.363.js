var G=Object.defineProperty;var S=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var _=(i,t,s)=>t in i?G(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s,x=(i,t)=>{for(var s in t||(t={}))L.call(t,s)&&_(i,s,t[s]);if(S)for(var s of S(t))w.call(t,s)&&_(i,s,t[s]);return i};import{u as E,r,j as a}from"./main-29.js";import{_ as e,d as I,I as P,F as A,c as u}from"./bi.860.15.js";import{S as T}from"./bi.885.903.js";import M from"./bi.86.225.js";import{c as q}from"./bi.18.796.js";import{S as z}from"./bi.116.797.js";import"./bi.244.714.js";import"./bi.831.661.js";import"./bi.392.662.js";function V({formFields:i,setFlow:t,flow:s,allIntegURL:b}){const m=E(),[v,f]=r.useState(!1),[g,p]=r.useState({auth:!1,customFields:!1,lists:!1}),[o,y]=r.useState(1),[j,d]=r.useState({show:!1}),C=[{key:"email",label:e("Email","bit-integrations"),required:!0},{key:"first_name",label:e("First Name","bit-integrations"),required:!1},{key:"last_name",label:e("Last Name","bit-integrations"),required:!1},{key:"alternate_emails",label:e("Alternate Emails","bit-integrations"),required:!1},{key:"address_line_1",label:e("Address Line 1","bit-integrations"),required:!1},{key:"address_line_2",label:e("Address Line 2","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state_province_region",label:e("State Province Region","bit-integrations"),required:!1},{key:"postal_code",label:e("Postal Code","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"phone_number",label:e("Phone Number","bit-integrations"),required:!1},{key:"whatsapp",label:e("Whatsapp","bit-integrations"),required:!1},{key:"line",label:e("Line","bit-integrations"),required:!1},{key:"facebook",label:e("Facebook","bit-integrations"),required:!1},{key:"unique_name",label:e("Unique Name","bit-integrations"),required:!1}],[n,c]=r.useState({name:"SendGrid",type:"SendGrid",apiKey:"",field_map:[{formField:"",sendGridFormField:""}],staticFields:C,lists:[],customFields:[],selectedLists:"",groups:[],actions:{}}),N=()=>{f(!0),A(s,t,b,n,m,"","",f).then(l=>{var h;l.success?(u.success((h=l.data)==null?void 0:h.msg),m(b)):u.error(l.data||l)})},F=k=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!q(n)){u.error(e("Please map mandatory fields","bit-integrations"));return}n.field_map.length>0&&y(k)};return a.jsxs("div",{children:[a.jsx(I,{snack:j,setSnackbar:d}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(T,{step:3,active:o})}),a.jsx(M,{sendGridConf:n,setSendGridConf:c,step:o,setStep:y,loading:g,setLoading:p,setSnackbar:d}),a.jsxs("div",{className:"btcd-stp-page",style:x({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(z,{formFields:i,sendGridConf:n,setSendGridConf:c,loading:g,setLoading:p,setSnackbar:d}),a.jsxs("button",{onClick:()=>F(3),disabled:!q(n),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(P,{step:o,saveConfig:()=>N(),isLoading:v,dataConf:n,setDataConf:c,formFields:i})]})}export{V as default};
