var C=Object.defineProperty;var w=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var v=(s,t,e)=>t in s?C(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,j=(s,t)=>{for(var e in t||(t={}))_.call(t,e)&&v(s,e,t[e]);if(w)for(var e of w(t))I.call(t,e)&&v(s,e,t[e]);return s};import{u as N,r as c,j as i}from"./main-119.js";import"./bi.276.437.js";import{_ as f,d as u}from"./bi.686.0.js";import{S as B}from"./bi.725.13.js";import{S as F}from"./bi.36.924.js";import{I as q,i as E}from"./bi.316.3.js";import{h as L}from"./bi.838.691.js";import M from"./bi.901.206.js";import{T as P}from"./bi.397.692.js";import"./bi.900.9.js";import"./bi.301.11.js";import"./bi.744.14.js";import"./bi.606.701.js";function Z({formFields:s,setFlow:t,flow:e,allIntegURL:g}){const b=N(),[m,a]=c.useState(!1),[r,x]=c.useState(1),[y,p]=c.useState({show:!1}),T=[{key:"To",label:f("To","bit-integrations"),required:!0},{key:"Body",label:f("Message Body","bit-integrations"),required:!0}],[o,n]=c.useState({name:"Twilio",type:"Twilio",sid:"",token:"",body:"",to:"",from_num:"",field_map:[{formField:"",twilioField:"To"},{formField:"",twilioField:"Body"}],twilioFields:T}),S=()=>{a(!0),E(e,t,g,o,b,"","",a).then(d=>{var h;d.success?(u.success((h=d.data)==null?void 0:h.msg),b(g)):u.error(d.data||d)})},k=l=>{if(o.to===""&&o.body===""){u.error("Please select To and Body field , it is required");return}x(l)};return i.jsxs("div",{children:[i.jsx(B,{snack:y,setSnackbar:p}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(F,{step:3,active:r})}),i.jsx(M,{twilioConf:o,setTwilioConf:n,step:r,setstep:x,isLoading:m,setIsLoading:a,setSnackbar:p}),i.jsxs("div",{className:"btcd-stp-page",style:j({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(P,{formFields:s,handleInput:l=>L(l,o,n),twilioConf:o,setTwilioConf:n,isLoading:m,setIsLoading:a,setSnackbar:p}),i.jsxs("button",{onClick:()=>k(3),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[f("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),i.jsx(q,{step:r,saveConfig:()=>S(),isLoading:m,dataConf:o,setDataConf:n,formFields:s})]})}export{Z as default};
