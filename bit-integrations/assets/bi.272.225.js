var K=Object.defineProperty;var x=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var g=(e,s,i)=>s in e?K(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,p=(e,s)=>{for(var i in s||(s={}))T.call(s,i)&&g(e,i,s[i]);if(x)for(var i of x(s))L.call(s,i)&&g(e,i,s[i]);return e};import{r as y,j as t}from"./main-288.js";import{_ as n}from"./bi.4.0.js";import{y as z}from"./bi.197.434.js";import{m as w}from"./bi.375.802.js";import{T as k,t as S}from"./bi.255.712.js";import"./bi.627.9.js";function G({mailjetConf:e,setMailjetConf:s,step:i,setStep:N,loading:c,setLoading:j,isInfo:a}){const[o,v]=y.useState(!1),[l,u]=y.useState({name:"",secretKey:""}),{mailjet:r}=S,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,N(2)},d=b=>{const m=p({},e),h=p({},l);h[b.target.name]="",m[b.target.name]=b.target.value,u(h),s(m)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:i===1&&900,height:i===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&t.jsx(k,{title:"Mailjet",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&t.jsx(k,{title:"Mailjet",docLink:r==null?void 0:r.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:a}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"apiKey",value:e.apiKey,type:"text",placeholder:n("Your Account","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.apiKey}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Secret Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"secretKey",value:e.secretKey,type:"text",placeholder:n("API Token...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.secretKey}),t.jsxs("small",{className:"d-blk mt-3",children:[n("To Get API key & Secret Key, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.mailjet.com/account/apikeys",target:"_blank",rel:"noreferrer",children:n("Mailjet API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!a&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>w(e,s,u,v,c,j,"authentication"),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||c.auth,children:[o?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),c.auth&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[n("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{G as default};
