var L=Object.defineProperty;var p=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var g=(e,n,s)=>n in e?L(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,c=(e,n)=>{for(var s in n||(n={}))T.call(n,s)&&g(e,s,n[s]);if(p)for(var s of p(n))_.call(n,s)&&g(e,s,n[s]);return e};import{r as j,j as t}from"./main-441.js";import{_ as a}from"./bi.452.0.js";import{y as E}from"./bi.141.437.js";import{e as z}from"./bi.331.813.js";import{T as k,t as I}from"./bi.292.699.js";import"./bi.663.9.js";function q({emailOctopusConf:e,setEmailOctopusConf:n,step:s,setStep:y,loading:r,setLoading:N,isInfo:o}){const[l,v]=j.useState(!1),[b,m]=j.useState({name:"",auth_token:""}),{emailOctopus:i}=I,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,y(2)},h=d=>{const u=c({},e),x=c({},b);x[d.target.name]="",u[d.target.name]=d.target.value,m(x),n(u)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&t.jsx(k,{title:"EmailOctopus",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&t.jsx(k,{title:"EmailOctopus",docLink:i==null?void 0:i.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"auth_token",value:e.auth_token,type:"text",placeholder:a("API Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.auth_token}),t.jsxs("small",{className:"d-blk mt-3",children:[a("To get API key, please visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://emailoctopus.com/api-documentation",target:"_blank",rel:"noreferrer",children:a("EmailOctopus API keys","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>z(e,n,m,v,r,N,"authentication"),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||r.auth,children:[l?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),r.auth&&t.jsx(E,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[a("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{q as default};
