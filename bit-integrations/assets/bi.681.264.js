var I=Object.defineProperty;var x=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var k=(e,i,a)=>i in e?I(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,d=(e,i)=>{for(var a in i||(i={}))_.call(i,a)&&k(e,a,i[a]);if(x)for(var a of x(i))z.call(i,a)&&k(e,a,i[a]);return e};import{r as j,j as t}from"./main-34.js";import{_ as s}from"./bi.671.0.js";import{z as L,a8 as w}from"./bi.188.437.js";import{n as P,g as E}from"./bi.717.880.js";import{T as N,t as S}from"./bi.379.699.js";import"./bi.914.9.js";function B({nimbleConf:e,setNimbleConf:i,step:a,setStep:y,loading:n,setLoading:u,isInfo:o}){const[l,T]=j.useState(!1),[p,b]=j.useState({api_key:""}),{nimble:r}=S,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,y(2),E(e,i,u)},h=c=>{const m=d({},e),g=d({},p);g[c.target.name]="",m[c.target.name]=c.target.value,b(g),i(m)},v=`
            <h4>${s("To Get API Token","bit-integrations")}</h4>
            <ul>
                <li>${s("First go to your Nimble dashboard.","bit-integrations")}</li>
                <li>${s('Click go to "Settings"',"bit-integrations")}</li>
                <li>${s('Then Click "API Tokens"',"bit-integrations")}</li>
                <li>${s('Then Click "Generate New Token',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&t.jsx(N,{title:"NimbleCRM",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&t.jsx(N,{title:"NimbleCRM",docLink:r==null?void 0:r.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"api_key",value:e.api_key,type:"text",placeholder:s("API Key...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:p.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[s("To get API key, please visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.nimble.com/#app/settings/tokens",target:"_blank",children:s("Nimble API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>P(e,i,b,T,n,u),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||n.auth,children:[l?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),n.auth&&t.jsx(L,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[s("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(w,{note:v})]})}export{B as default};
