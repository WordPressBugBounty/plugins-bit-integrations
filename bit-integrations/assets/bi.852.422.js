var F=Object.defineProperty;var v=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var w=(s,t,e)=>t in s?F(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,N=(s,t)=>{for(var e in t||(t={}))I.call(t,e)&&w(s,e,t[e]);if(v)for(var e of v(t))L.call(t,e)&&w(s,e,t[e]);return s};import{u as E,r as o,j as a}from"./main-650.js";import{d as T,_ as j,I as M,F as P,c as d}from"./bi.541.15.js";import{S as z}from"./bi.326.902.js";import{s as A,c as S}from"./bi.151.887.js";import{N as B}from"./bi.151.888.js";import D from"./bi.63.274.js";import"./bi.619.660.js";import"./bi.119.661.js";import"./bi.770.713.js";function X({formFields:s,setFlow:t,flow:e,allIntegURL:p}){const m=E(),[C,f]=o.useState(!1),[u,g]=o.useState({auth:!1}),[n,x]=o.useState(1),[_,c]=o.useState({show:!1}),[i,l]=o.useState({name:"Newsletter",type:"Newsletter",field_map:[{formField:"",newsletterFormField:""}],staticFields:A,lists:[],selectedLists:"",groups:[],actions:{}}),k=()=>{f(!0),P(e,t,p,i,m,"","",f).then(r=>{var b;r.success?(d.success((b=r.data)==null?void 0:b.msg),m(p)):d.error(r.data||r)})},y=h=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!S(i)){d.error(j("Please map mandatory fields","bit-integrations"));return}i.field_map.length>0&&x(h)};return a.jsxs("div",{children:[a.jsx(T,{snack:_,setSnackbar:c}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(z,{step:3,active:n})}),a.jsx(D,{newsletterConf:i,setNewsletterConf:l,step:n,setStep:x,loading:u,setLoading:g,setSnackbar:c}),a.jsxs("div",{className:"btcd-stp-page",style:N({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(B,{formFields:s,newsletterConf:i,setNewsletterConf:l,loading:u,setLoading:g,setSnackbar:c}),a.jsxs("button",{onClick:()=>y(3),disabled:!S(i),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[j("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(M,{step:n,saveConfig:()=>k(),isLoading:C,dataConf:i,setDataConf:l,formFields:s})]})}export{X as default};
