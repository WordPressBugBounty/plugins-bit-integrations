var z=Object.defineProperty;var x=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var g=(e,s,n)=>s in e?z(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,b=(e,s)=>{for(var n in s||(s={}))_.call(s,n)&&g(e,n,s[n]);if(x)for(var n of x(s))L.call(s,n)&&g(e,n,s[n]);return e};import{r as j,j as t}from"./main-263.js";import{_ as r}from"./bi.924.0.js";import{y as w}from"./bi.361.434.js";import{m as E}from"./bi.60.795.js";import{T as k,t as I}from"./bi.372.711.js";import"./bi.402.9.js";function G({mailRelayConf:e,setMailRelayConf:s,step:n,setStep:N,loading:o,setLoading:v,isInfo:a}){const[c,T]=j.useState(!1),[d,u]=j.useState({name:"",auth_token:""}),{mailRelay:i}=I,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,N(2)},l=m=>{const p=b({},e),h=b({},d);h[m.target.name]="",p[m.target.name]=m.target.value,u(h),s(p)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&t.jsx(k,{title:"MailRelay",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&t.jsx(k,{title:"MailRelay",docLink:i==null?void 0:i.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:l,name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations"),disabled:a}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Your Domain Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:l,name:"domain",value:e.domain,type:"text",placeholder:r("Your Account","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.domain}),t.jsx("small",{className:"d-blk mt-3",children:r("Example: bitapps.ipzmarketing.com","bit-integrations")}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:l,name:"auth_token",value:e.auth_token,type:"text",placeholder:r("API Token...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.auth_token}),e.domain&&t.jsxs("small",{className:"d-blk mt-3",children:[r("To Get API Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:`https://${e.domain}.ipzmarketing.com/admin/api_keys`,target:"_blank",rel:"noreferrer",children:r("MailRelay API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!a&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>E(e,s,u,T,o,v,"authentication"),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||o.auth,children:[c?r("Authorized ✔","bit-integrations"):r("Authorize","bit-integrations"),o.auth&&t.jsx(w,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[r("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{G as default};
