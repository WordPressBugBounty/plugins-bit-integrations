var A=Object.defineProperty;var g=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var j=(e,s,i)=>s in e?A(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,b=(e,s)=>{for(var i in s||(s={}))L.call(s,i)&&j(e,i,s[i]);if(g)for(var i of g(s))_.call(s,i)&&j(e,i,s[i]);return e};import{r as h,j as t}from"./main-246.js";import{_ as a}from"./bi.560.0.js";import{z}from"./bi.675.443.js";import{e as I}from"./bi.900.902.js";import{T as k,t as w}from"./bi.142.765.js";import"./bi.947.9.js";function V({clinchPadConf:e,setClinchPadConf:s,step:i,setStep:y,loading:n,setLoading:N,isInfo:o}){const[l,T]=h.useState(!1),[d,u]=h.useState({api_key:""}),{clinchPad:r}=w,v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,y(2)},p=m=>{const c=b({},e),x=b({},d);x[m.target.name]="",c[m.target.name]=m.target.value,u(x),s(c)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:i===1&&900,height:i===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&t.jsx(k,{title:"ClinchPad",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&t.jsx(k,{title:"ClinchPad",docLink:r==null?void 0:r.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"api_key",value:e.api_key,type:"text",placeholder:a("API Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[a("To Get API Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://clinchpad.com/#settings",target:"_blank",rel:"noreferrer",children:a("ClinchPad API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>I(e,s,u,T,n,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||n.auth,children:[l?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),n.auth&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:v,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[a("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{V as default};
