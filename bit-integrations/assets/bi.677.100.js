var w=Object.defineProperty;var m=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var f=(i,s,t)=>s in i?w(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t,n=(i,s)=>{for(var t in s||(s={}))C.call(s,t)&&f(i,t,s[t]);if(m)for(var t of m(s))_.call(s,t)&&f(i,t,s[t]);return i};import{u as E,o as F,e as u,f as V,r as o,j as e}from"./main-955.js";import{f as k,$ as y,g as N,_ as p}from"./bi.223.0.js";import{S as L}from"./bi.951.13.js";import{x as $}from"./bi.326.431.js";import{S as R,s as I}from"./bi.864.3.js";import{c as z,C as A}from"./bi.249.803.js";import M from"./bi.169.228.js";import"./bi.696.9.js";import"./bi.300.11.js";import"./bi.283.14.js";function W({allIntegURL:i}){const s=E();F();const[t,r]=u(k),[c,x]=u(y),v=V(N),[a,b]=o.useState({}),[j,h]=o.useState(!1),[S,l]=o.useState({show:!1}),[g,P]=o.useState(1);return o.useEffect(()=>{const d=n({},t);delete d.isValid,r(n({},d))},[t==null?void 0:t.value]),e.jsxs("div",{children:[e.jsx(L,{snack:S,setSnackbar:l}),e.jsx(R,{entity:c.triggered_entity,setSnackbar:l}),e.jsx("div",{className:"mt-3",children:e.jsxs("div",{className:"btcd-stp-page",style:n({},g===1&&{width:"91%",height:"auto",overflow:"visible"}),children:[e.jsx("h1",{children:"custom action"}),e.jsx(M,{customActionConf:t,setCustomActionConf:r,formFields:v}),e.jsxs("button",{onClick:()=>z(t,r,a,b),disabled:!t.value||(a==null?void 0:a.validate),className:"btn f-left btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:[t!=null&&t.isValid&&!(a!=null&&a.validate)?p("Validated ✔","bit-integrations"):p("Validated","bit-integrations"),(a==null?void 0:a.validate)&&e.jsx($,{size:"20",clr:"#022217",className:"ml-2"})]})]})}),e.jsx(A,{edit:!0,saveConfig:()=>I({flow:c,setFlow:x,allIntegURL:i,conf:t,navigate:s,edit:1,setIsLoading:h,setSnackbar:l}),isLoading:j,disabled:!t.isValid}),e.jsx("br",{})]})}export{W as default};
