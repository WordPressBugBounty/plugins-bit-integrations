var L=Object.defineProperty;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var p=(e,n,s)=>n in e?L(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,c=(e,n)=>{for(var s in n||(n={}))T.call(n,s)&&p(e,s,n[s]);if(g)for(var s of g(n))_.call(n,s)&&p(e,s,n[s]);return e};import{r as j,j as t}from"./main-29.js";import{_ as i,L as E}from"./bi.860.15.js";import{e as z}from"./bi.190.800.js";import{T as k,t as I}from"./bi.244.714.js";function K({emailOctopusConf:e,setEmailOctopusConf:n,step:s,setStep:N,loading:r,setLoading:y,isInfo:o}){const[l,v]=j.useState(!1),[b,h]=j.useState({name:"",auth_token:""}),{emailOctopus:a}=I,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,N(2)},m=d=>{const u=c({},e),x=c({},b);x[d.target.name]="",u[d.target.name]=d.target.value,h(x),n(u)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(k,{title:"EmailOctopus",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(k,{title:"EmailOctopus",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:m,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:m,name:"auth_token",value:e.auth_token,type:"text",placeholder:i("API Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.auth_token}),t.jsxs("small",{className:"d-blk mt-3",children:[i("To get API key, please visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://emailoctopus.com/api-documentation",target:"_blank",rel:"noreferrer",children:i("EmailOctopus API keys","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>z(e,n,h,v,r,y,"authentication"),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||r.auth,children:[l?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),r.auth&&t.jsx(E,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{K as default};
