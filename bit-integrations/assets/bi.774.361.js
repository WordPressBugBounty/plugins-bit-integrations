var N=Object.defineProperty,v=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var c=(e,t,s)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,f=(e,t)=>{for(var s in t||(t={}))S.call(t,s)&&c(e,s,t[s]);if(m)for(var s of m(t))I.call(t,s)&&c(e,s,t[s]);return e},g=(e,t)=>v(e,j(t));import{u as _,r,j as o}from"./main-650.js";import{_ as w,I as C}from"./bi.541.15.js";import{S as y}from"./bi.71.901.js";import{S as L}from"./bi.326.902.js";import{s as k}from"./bi.818.684.js";import E from"./bi.530.223.js";import{n as F,d as P}from"./bi.744.791.js";import{N as R}from"./bi.596.792.js";import"./bi.770.713.js";import"./bi.757.771.js";import"./bi.619.660.js";import"./bi.119.661.js";function U({formFields:e,setFlow:t,flow:s,allIntegURL:u}){const x=_();r.useEffect(()=>{window.opener&&k("notion")},[]);const[i,l]=r.useState(1),[n,d]=r.useState({auth:!1,list:!1,page:!1,field:!1}),[a,p]=r.useState({name:"Notion",type:"Notion",clientId:"",clientSecret:"",databaseId:"",field_map:[{formFields:"",notionFormFields:""}],notionFields:""}),b=h=>{d(g(f({},n),{page:h}))};return o.jsxs("div",{children:[o.jsx("div",{className:"txt-center mt-2",children:o.jsx(L,{step:3,active:i})}),o.jsx(E,{step:i,setStep:l,notionConf:a,setNotionConf:p,loading:n,setLoading:d}),o.jsxs(y,{step:i,stepNo:2,style:{width:900,height:"auto",overflow:"visible"},children:[o.jsx(R,{notionConf:a,setNotionConf:p,formFields:e,loading:n,setLoading:d}),(a==null?void 0:a.databaseId)&&o.jsxs("button",{onClick:()=>F(a,l,3),disabled:!a.databaseId||a.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[w("Next")," ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.databaseId&&o.jsx(C,{step:i,saveConfig:()=>P(s,t,u,a,x,b),isLoading:n.page,dataConf:a,setDataConf:p,formFields:e})]})}export{U as default};
