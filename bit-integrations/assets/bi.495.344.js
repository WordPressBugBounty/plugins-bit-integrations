var L=Object.defineProperty;var x=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var g=(e,s,i)=>s in e?L(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,d=(e,s)=>{for(var i in s||(s={}))S.call(s,i)&&g(e,i,s[i]);if(x)for(var i of x(s))T.call(s,i)&&g(e,i,s[i]);return e};import{r as j,j as t}from"./main-165.js";import{_ as n,L as _,N as z}from"./bi.312.95.js";import{d as P}from"./bi.74.944.js";import{T as k,t as w}from"./bi.40.785.js";function R({salesflareConf:e,setSalesflareConf:s,step:i,setStep:y,loading:r,setLoading:N,isInfo:o}){const[c,A]=j.useState(!1),[b,m]=j.useState({api_token:""}),{salesflare:a}=w,v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,y(2)},u=l=>{const p=d({},e),h=d({},b);h[l.target.name]="",p[l.target.name]=l.target.value,m(h),s(p)},I=`
            <h4>${n("Get API Key","bit-integrations")}</h4>
            <ul>
                <li>${n("Go to your Salesflare user dashboard","bit-integrations")}</li>
                <li>${n('Then click "Settings"',"bit-integrations")}</li>
                <li>${n('Then click "API Keys → Generates Keys"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:i===1&&900,height:i===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(k,{title:"Salesflare",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(k,{title:"Salesflare",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"api_key",value:e.api_key,type:"text",placeholder:n("API Key...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[n("To get API key, please visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.salesflare.com/#/settings/apikeys",target:"_blank",children:n("Salesflare API Key","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>P(e,m,A,r,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||r.auth,children:[c?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),r.auth&&t.jsx(_,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:v,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[n("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(z,{note:I})]})}export{R as default};
