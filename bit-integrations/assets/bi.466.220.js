var T=Object.defineProperty,z=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var k=(t,i,e)=>i in t?T(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,m=(t,i)=>{for(var e in i||(i={}))E.call(i,e)&&k(t,e,i[e]);if(x)for(var e of x(i))S.call(i,e)&&k(t,e,i[e]);return t},y=(t,i)=>z(t,L(i));var A=(t,i,e)=>new Promise((p,s)=>{var u=n=>{try{c(e.next(n))}catch(l){s(l)}},b=n=>{try{c(e.throw(n))}catch(l){s(l)}},c=n=>n.done?p(n.value):Promise.resolve(n.value).then(u,b);c((e=e.apply(t,i)).next())});import{r as I,j as r}from"./main-270.js";import{S as N,I as j,G as $,E as v,A as w}from"./bi.457.949.js";import{a9 as F}from"./bi.88.440.js";import{h as f,b as G,g as _}from"./bi.506.818.js";import{T as d,t as B}from"./bi.104.742.js";import{_ as o}from"./bi.340.0.js";import"./bi.724.9.js";import"./bi.155.3.js";import"./bi.218.13.js";import"./bi.209.11.js";import"./bi.117.14.js";function Y({moosendConf:t,setMoosendConf:i,step:e,setStep:p,loading:s,setLoading:u,isInfo:b}){const[c,n]=I.useState(!1),[l,g]=I.useState({name:"",authKey:""}),{moosend:a}=B,K=()=>A(this,null,function*(){setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),p(2),u(y(m({},s),{page:!0})),(yield _(t,i))&&u(y(m({},s),{page:!1}))}),P=`
  <h4>${o("Step of get API Key:","bit-integrations")}</h4>
  <ul>
    <li>${o("First login on account.","bit-integrations")}</li>
    <li>${o("Goto Settings and click on <b>API Key</b>","bit-integrations")}</li>
    <li>${o("Copy the <b>API Key</b> and paste into <b>API Key</b> field of your authorization form.","bit-integrations")}</li>
    <li>${o("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
</ul>
`;return r.jsxs(N,{step:e,stepNo:1,style:{width:900,height:"auto"},children:[(a==null?void 0:a.youTubeLink)&&r.jsx(d,{title:"Moosend",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&r.jsx(d,{title:"Moosend",docLink:a==null?void 0:a.docLink}),r.jsxs("div",{className:"mt-2",children:[r.jsx(j,{label:o("Integration Name","bit-integrations"),name:"name",placeholder:o("Integration Name...","bit-integrations"),value:t.name,onchange:h=>f(h,t,i,l,g)}),r.jsx(j,{label:o("API key","bit-integrations"),name:"authKey",placeholder:o("API key...","bit-integrations"),value:t.authKey,onchange:h=>f(h,t,i,l,g)}),r.jsx($,{url:"https://moosend.com/",info:o("To get API key, please visit","bit-integrations")}),r.jsx(v,{error:l.authKey}),!b&&r.jsx(w,{onclick:()=>G(t,g,n,s,u),nextPage:K,auth:c,loading:s.auth})]}),r.jsx(F,{note:P})]})}export{Y as default};
