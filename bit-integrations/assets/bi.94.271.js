var C=Object.defineProperty;var w=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var v=(s,t,e)=>t in s?C(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,j=(s,t)=>{for(var e in t||(t={}))_.call(t,e)&&v(s,e,t[e]);if(w)for(var e of w(t))I.call(t,e)&&v(s,e,t[e]);return s};import{u as N,r as c,j as i}from"./main-80.js";import{_ as m,d as F,I as B,F as q,c as p}from"./bi.433.0.js";import{S as E}from"./bi.293.894.js";import{h as L}from"./bi.795.666.js";import M from"./bi.15.190.js";import{T as P}from"./bi.654.667.js";import"./bi.717.703.js";function Q({formFields:s,setFlow:t,flow:e,allIntegURL:g}){const b=N(),[u,a]=c.useState(!1),[n,x]=c.useState(1),[y,f]=c.useState({show:!1}),T=[{key:"To",label:m("To","bit-integrations"),required:!0},{key:"Body",label:m("Message Body","bit-integrations"),required:!0}],[o,r]=c.useState({name:"Twilio",type:"Twilio",sid:"",token:"",body:"",to:"",from_num:"",field_map:[{formField:"",twilioField:"To"},{formField:"",twilioField:"Body"}],twilioFields:T}),S=()=>{a(!0),q(e,t,g,o,b,"","",a).then(d=>{var h;d.success?(p.success((h=d.data)==null?void 0:h.msg),b(g)):p.error(d.data||d)})},k=l=>{if(o.to===""&&o.body===""){p.error("Please select To and Body field , it is required");return}x(l)};return i.jsxs("div",{children:[i.jsx(F,{snack:y,setSnackbar:f}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(E,{step:3,active:n})}),i.jsx(M,{twilioConf:o,setTwilioConf:r,step:n,setstep:x,isLoading:u,setIsLoading:a,setSnackbar:f}),i.jsxs("div",{className:"btcd-stp-page",style:j({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(P,{formFields:s,handleInput:l=>L(l,o,r),twilioConf:o,setTwilioConf:r,isLoading:u,setIsLoading:a,setSnackbar:f}),i.jsxs("button",{onClick:()=>k(3),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[m("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),i.jsx(B,{step:n,saveConfig:()=>S(),isLoading:u,dataConf:o,setDataConf:r,formFields:s})]})}export{Q as default};
