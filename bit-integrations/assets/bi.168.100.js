var w=Object.defineProperty;var m=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var f=(i,s,t)=>s in i?w(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t,n=(i,s)=>{for(var t in s||(s={}))C.call(s,t)&&f(i,t,s[t]);if(m)for(var t of m(s))_.call(s,t)&&f(i,t,s[t]);return i};import{u as E,o as F,e as u,f as V,r as o,j as e}from"./main-586.js";import{f as k,$ as y,g as N,_ as p}from"./bi.612.0.js";import{S as L}from"./bi.733.13.js";import{z as $}from"./bi.960.440.js";import{S as R,s as z}from"./bi.993.3.js";import{c as I,C as A}from"./bi.11.836.js";import M from"./bi.539.231.js";import"./bi.175.9.js";import"./bi.980.11.js";import"./bi.520.14.js";function W({allIntegURL:i}){const s=E();F();const[t,r]=u(k),[c,x]=u(y),v=V(N),[a,b]=o.useState({}),[j,h]=o.useState(!1),[S,l]=o.useState({show:!1}),[g,P]=o.useState(1);return o.useEffect(()=>{const d=n({},t);delete d.isValid,r(n({},d))},[t==null?void 0:t.value]),e.jsxs("div",{children:[e.jsx(L,{snack:S,setSnackbar:l}),e.jsx(R,{entity:c.triggered_entity,setSnackbar:l}),e.jsx("div",{className:"mt-3",children:e.jsxs("div",{className:"btcd-stp-page",style:n({},g===1&&{width:"91%",height:"auto",overflow:"visible"}),children:[e.jsx("h1",{children:"custom action"}),e.jsx(M,{customActionConf:t,setCustomActionConf:r,formFields:v}),e.jsxs("button",{onClick:()=>I(t,r,a,b),disabled:!t.value||(a==null?void 0:a.validate),className:"btn f-left btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:[t!=null&&t.isValid&&!(a!=null&&a.validate)?p("Validated ✔","bit-integrations"):p("Validated","bit-integrations"),(a==null?void 0:a.validate)&&e.jsx($,{size:"20",clr:"#022217",className:"ml-2"})]})]})}),e.jsx(A,{edit:!0,saveConfig:()=>z({flow:c,setFlow:x,allIntegURL:i,conf:t,navigate:s,edit:1,setIsLoading:h,setSnackbar:l}),isLoading:j,disabled:!t.isValid}),e.jsx("br",{})]})}export{W as default};
