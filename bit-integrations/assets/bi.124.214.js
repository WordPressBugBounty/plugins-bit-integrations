var E=Object.defineProperty,K=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var I=(i,t,e)=>t in i?E(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,g=(i,t)=>{for(var e in t||(t={}))v.call(t,e)&&I(i,e,t[e]);if(k)for(var e of k(t))L.call(t,e)&&I(i,e,t[e]);return i},d=(i,t)=>K(i,$(t));var A=(i,t,e)=>new Promise((m,s)=>{var l=r=>{try{c(e.next(r))}catch(u){s(u)}},h=r=>{try{c(e.throw(r))}catch(u){s(u)}},c=r=>r.done?m(r.value):Promise.resolve(r.value).then(l,h);c((e=e.apply(i,t)).next())});import{r as x,j as n}from"./main-425.js";import{S,I as f,E as w,G as N,A as _}from"./bi.167.923.js";import{a8 as G}from"./bi.900.437.js";import{h as j,d as B,b as F}from"./bi.509.786.js";import{T as y,t as R}from"./bi.775.701.js";import{_ as o}from"./bi.107.0.js";import"./bi.814.9.js";import"./bi.25.3.js";import"./bi.273.13.js";import"./bi.563.11.js";import"./bi.783.14.js";function Z({selzyConf:i,setSelzyConf:t,step:e,setStep:m,loading:s,setLoading:l,isInfo:h}){const[c,r]=x.useState(!1),[u,b]=x.useState({name:"",authKey:""}),{selzy:a}=R,P=()=>A(this,null,function*(){setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),m(2),l(d(g({},s),{page:!0})),(yield F(i,t))&&l(d(g({},s),{page:!1}))}),T=`
  <h4>${o("Step of get API Key:","bit-integrations")}</h4>
  <ul>
    <li>${o("Goto Settings and click on","bit-integrations")} <a href="https://cp.selzy.com/en/v5/user/info/api" target='_blank'>${o("Integration and API.","bit-integrations")}</a></li>
    <li>${o("API access section API key click show full.","bit-integrations")}</li>
    <li>${o("Enter your password and click send","bit-integrations")}</li>
    <li>${o("Copy the <b>API Key</b> and paste into <b>API Key</b> field of your authorization form.","bit-integrations")}</li>
    <li>${o("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
</ul>
`;return n.jsxs(S,{step:e,stepNo:1,style:{width:900,height:"auto"},children:[(a==null?void 0:a.youTubeLink)&&n.jsx(y,{title:"Selzy",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&n.jsx(y,{title:"Selzy",docLink:a==null?void 0:a.docLink}),n.jsxs("div",{className:"mt-2",children:[n.jsx(f,{label:o("Integration Name","bit-integrations"),name:"name",placeholder:o("Integration Name...","bit-integrations"),value:i.name,onchange:p=>j(p,i,t,u,b)}),n.jsx(f,{label:o("API key","bit-integrations"),name:"authKey",placeholder:o("API key...","bit-integrations"),value:i.authKey,onchange:p=>j(p,i,t,u,b)}),n.jsx(w,{error:u.authKey}),n.jsx(N,{url:"https://cp.selzy.com/en/v5/user/info/api",info:o("To get API key, please visit","bit-integrations")}),!h&&n.jsx(_,{onclick:()=>B(i,t,b,r,s,l),nextPage:P,auth:c,loading:s.auth})]}),n.jsx(G,{note:T})]})}export{Z as default};
