var w=Object.defineProperty;var m=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var u=(i,t,s)=>t in i?w(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s,n=(i,t)=>{for(var s in t||(t={}))C.call(t,s)&&u(i,s,t[s]);if(m)for(var s of m(t))_.call(t,s)&&u(i,s,t[s]);return i};import{u as E,l as F,e as f,i as V,r as o,j as e}from"./main-692.js";import{g as k,$ as y,h as L,d as N,i as $,_ as x,L as R,s as I}from"./bi.751.13.js";import{c as z,C as A}from"./bi.273.798.js";import M from"./bi.473.226.js";function H({allIntegURL:i}){const t=E();F();const[s,l]=f(k),[c,p]=f(y),v=V(L),[a,b]=o.useState({}),[h,j]=o.useState(!1),[g,d]=o.useState({show:!1}),[S,P]=o.useState(1);return o.useEffect(()=>{const r=n({},s);delete r.isValid,l(n({},r))},[s==null?void 0:s.value]),e.jsxs("div",{children:[e.jsx(N,{snack:g,setSnackbar:d}),e.jsx($,{entity:c.triggered_entity,setSnackbar:d}),e.jsx("div",{className:"mt-3",children:e.jsxs("div",{className:"btcd-stp-page",style:n({},S===1&&{width:"91%",height:"auto",overflow:"visible"}),children:[e.jsx("h1",{children:"custom action"}),e.jsx(M,{customActionConf:s,setCustomActionConf:l,formFields:v}),e.jsxs("button",{onClick:()=>z(s,l,a,b),disabled:!s.value||(a==null?void 0:a.validate),className:"btn f-left btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:[s!=null&&s.isValid&&!(a!=null&&a.validate)?x("Validated ✔","bit-integrations"):x("Validated","bit-integrations"),(a==null?void 0:a.validate)&&e.jsx(R,{size:"20",clr:"#022217",className:"ml-2"})]})]})}),e.jsx(A,{edit:!0,saveConfig:()=>I({flow:c,setFlow:p,allIntegURL:i,conf:s,navigate:t,edit:1,setIsLoading:j,setSnackbar:d}),isLoading:h,disabled:!s.isValid}),e.jsx("br",{})]})}export{H as default};