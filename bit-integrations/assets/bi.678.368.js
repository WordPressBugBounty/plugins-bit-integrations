var N=Object.defineProperty,v=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var c=(e,t,o)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,f=(e,t)=>{for(var o in t||(t={}))S.call(t,o)&&c(e,o,t[o]);if(l)for(var o of l(t))I.call(t,o)&&c(e,o,t[o]);return e},g=(e,t)=>v(e,j(t));import{u as _,r,j as a}from"./main-320.js";import{_ as w}from"./bi.576.0.js";import{S as C}from"./bi.78.939.js";import{S as y}from"./bi.78.940.js";import{s as L}from"./bi.275.713.js";import{I as k}from"./bi.337.3.js";import E from"./bi.212.226.js";import{n as F,d as P}from"./bi.855.821.js";import{N as R}from"./bi.243.822.js";import"./bi.795.440.js";import"./bi.155.9.js";import"./bi.51.13.js";import"./bi.440.11.js";import"./bi.574.14.js";import"./bi.382.733.js";import"./bi.360.714.js";import"./bi.468.689.js";import"./bi.775.690.js";function $({formFields:e,setFlow:t,flow:o,allIntegURL:u}){const x=_();r.useEffect(()=>{window.opener&&L("notion")},[]);const[i,d]=r.useState(1),[n,p]=r.useState({auth:!1,list:!1,page:!1,field:!1}),[s,m]=r.useState({name:"Notion",type:"Notion",clientId:"",clientSecret:"",databaseId:"",field_map:[{formFields:"",notionFormFields:""}],notionFields:""}),b=h=>{p(g(f({},n),{page:h}))};return a.jsxs("div",{children:[a.jsx("div",{className:"txt-center mt-2",children:a.jsx(y,{step:3,active:i})}),a.jsx(E,{step:i,setStep:d,notionConf:s,setNotionConf:m,loading:n,setLoading:p}),a.jsxs(C,{step:i,stepNo:2,style:{width:900,height:"auto",overflow:"visible"},children:[a.jsx(R,{notionConf:s,setNotionConf:m,formFields:e,loading:n,setLoading:p}),(s==null?void 0:s.databaseId)&&a.jsxs("button",{onClick:()=>F(s,d,3),disabled:!s.databaseId||s.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[w("Next")," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),s.databaseId&&a.jsx(k,{step:i,saveConfig:()=>P(o,t,u,s,x,b),isLoading:n.page,dataConf:s,setDataConf:m,formFields:e})]})}export{$ as default};
