var L=Object.defineProperty;var d=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var g=(e,a,i)=>a in e?L(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i,m=(e,a)=>{for(var i in a||(a={}))T.call(a,i)&&g(e,i,a[i]);if(d)for(var i of d(a))z.call(a,i)&&g(e,i,a[i]);return e};import{r as j,j as t}from"./main-404.js";import{_ as r}from"./bi.51.0.js";import{z as S}from"./bi.613.437.js";import{s as K}from"./bi.383.810.js";import{T as y,t as w}from"./bi.116.700.js";import"./bi.964.9.js";function V({sendGridConf:e,setSendGridConf:a,step:i,setStep:k,loading:n,setLoading:N,isInfo:o}){const[l,v]=j.useState(!1),[b,u]=j.useState({name:"",secretKey:""}),{sendGrid:s}=w,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,k(2)},p=c=>{const h=m({},e),x=m({},b);x[c.target.name]="",h[c.target.name]=c.target.value,u(x),a(h)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:i===1&&900,height:i===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(y,{title:"SendGrid",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(y,{title:"SendGrid",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"apiKey",value:e.apiKey,type:"text",placeholder:r("Your Api Key","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",style:{color:"red",fontSize:"15px"},children:b.apiKey}),t.jsxs("small",{className:"d-blk mt-3",children:[r("To Get API key & Secret Key, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.sendgrid.com/settings/api_keys",target:"_blank",rel:"noreferrer",children:r("SendGrid API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>K(e,a,u,v,n,N,"authentication"),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||n.auth,children:[l?r("Authorized ✔","bit-integrations"):r("Authorize","bit-integrations"),n.auth&&t.jsx(S,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[r("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{V as default};
