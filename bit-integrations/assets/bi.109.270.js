var T=Object.defineProperty;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var g=(e,s,a)=>s in e?T(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,b=(e,s)=>{for(var a in s||(s={}))L.call(s,a)&&g(e,a,s[a]);if(x)for(var a of x(s))_.call(s,a)&&g(e,a,s[a]);return e};import{r as j,j as t}from"./main-404.js";import{_ as i}from"./bi.51.0.js";import{z as E,a8 as z}from"./bi.613.437.js";import{w as P}from"./bi.462.892.js";import{T as y,t as f}from"./bi.116.700.js";import"./bi.964.9.js";function M({woodpeckerConf:e,setWoodpeckerConf:s,step:a,setStep:k,loading:r,setLoading:N,isInfo:l}){const[o,A]=j.useState(!1),[m,u]=j.useState({api_token:""}),{woodpecker:n}=f,v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,k(2)},p=c=>{const d=b({},e),h=b({},m);h[c.target.name]="",d[c.target.name]=c.target.value,u(h),s(d)},I=`
            <h4>${i("Get API Key","bit-integrations")}</h4>
            <ul>
                <li>${i("Log into your Woodpecker account on","bit-integrations")} <a className="btcd-link" href="https://app.woodpecker.co/panel" target="_blank">${i("app.woodpecker.co.","bit-integrations")}</a></li>
                <li>${i("Go to the <b>Marketplace</b> → <b>INTEGRATIONS</b> → <b>API keys</b>.","bit-integrations")}</li>
                <li>${i("Use the purple button to <b>CREATE A KEY</b>.","bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(y,{title:"Woodpecker",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(y,{title:"Woodpecker",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"api_key",value:e.api_key,type:"text",placeholder:i("API Key...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[i("To get API key, please visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.woodpecker.co/panel?u=411340#marketplace/integrations/api-keys",target:"_blank",children:i("Woodpecker API Key","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!l&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>P(e,u,A,r,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||r.auth,children:[o?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),r.auth&&t.jsx(E,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:v,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(z,{note:I})]})}export{M as default};
