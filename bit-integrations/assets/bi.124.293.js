var _=Object.defineProperty;var y=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var h=(a,t,i)=>t in a?_(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i,q=(a,t)=>{for(var i in t||(t={}))N.call(t,i)&&h(a,i,t[i]);if(y)for(var i of y(t))I.call(t,i)&&h(a,i,t[i]);return a};import{u as R,r as f,j as s}from"./main-34.js";import"./bi.188.437.js";import{_ as e,d as c}from"./bi.671.0.js";import{S as w}from"./bi.213.13.js";import{S as C}from"./bi.851.922.js";import{I as F,i as T}from"./bi.633.3.js";import L from"./bi.505.173.js";import{h as z,c as B}from"./bi.573.687.js";import{R as M}from"./bi.984.688.js";import"./bi.914.9.js";import"./bi.22.11.js";import"./bi.690.14.js";import"./bi.379.699.js";import"./bi.623.673.js";import"./bi.808.674.js";function ee({formFields:a,setFlow:t,flow:i,allIntegURL:u}){const g=R(),[p,l]=f.useState(!1),[n,x]=f.useState(1),[v,b]=f.useState({show:!1}),E=[{key:"email",label:e("Email","bit-integrations"),required:!0},{key:"firstname",label:e("First Name","bit-integrations"),required:!1},{key:"lastname",label:e("Last Name","bit-integrations"),required:!1},{key:"gender",label:e("Gender","bit-integrations"),required:!1},{key:"title",label:e("Title","bit-integrations"),required:!1},{key:"zip",label:e("Zip","bit-integrations"),required:!1},{key:"birthdate",label:e("Birthdate","bit-integrations"),required:!1},{key:"extra1",label:e("Extra field 1","bit-integrations"),required:!1},{key:"extra2",label:e("Extra field 2","bit-integrations"),required:!1},{key:"extra3",label:e("Extra field 3","bit-integrations"),required:!1},{key:"extra4",label:e("Extra field 4","bit-integrations"),required:!1},{key:"extra5",label:e("Extra field 5","bit-integrations"),required:!1},{key:"extra6",label:e("Extra field 6","bit-integrations"),required:!1},{key:"extra7",label:e("Extra field 7","bit-integrations"),required:!1},{key:"extra8",label:e("Extra field 8","bit-integrations"),required:!1},{key:"extra9",label:e("Extra field 9","bit-integrations"),required:!1},{key:"extra10",label:e("Extra field 10","bit-integrations"),required:!1}],[r,o]=f.useState({name:"Rapidmail",type:"Rapidmail",username:"",password:"",field_map:[{formField:"",rapidmailFormField:""}],recipientsFields:E,actions:{send_activationmail:!1}}),j=()=>{l(!0),T(i,t,u,r,g,"","",l).then(m=>{var k;m.success?(c.success((k=m.data)==null?void 0:k.msg),g(u)):c.error(m.data||m)})},S=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!B(r)){c.error(e("Please map mandatory fields","bit-integrations"));return}r.field_map.length>0&&x(d)};return s.jsxs("div",{children:[s.jsx(w,{snack:v,setSnackbar:b}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(C,{step:3,active:n})}),s.jsx(L,{rapidmailConf:r,setRapidmailConf:o,step:n,setstep:x,isLoading:p,setIsLoading:l,setSnackbar:b}),s.jsxs("div",{className:"btcd-stp-page",style:q({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[s.jsx(M,{formFields:a,handleInput:d=>z(d,r,o),rapidmailConf:r,setRapidmailConf:o,isLoading:p,setIsLoading:l,setSnackbar:b}),s.jsxs("button",{onClick:()=>S(3),disabled:!(r!=null&&r.recipient_id),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",s.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),s.jsx(F,{step:n,saveConfig:()=>j(),isLoading:p,dataConf:r,setDataConf:o,formFields:a})]})}export{ee as default};
