var I=Object.defineProperty;var x=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var k=(e,a,n)=>a in e?I(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,b=(e,a)=>{for(var n in a||(a={}))P.call(a,n)&&k(e,n,a[n]);if(x)for(var n of x(a))_.call(a,n)&&k(e,n,a[n]);return e};import{r as j,j as t}from"./main-692.js";import{_ as i,L as w,N as z}from"./bi.751.13.js";import{l as E,g as $}from"./bi.570.861.js";import{T as y,t as S}from"./bi.719.710.js";function R({livestormConf:e,setLivestormConf:a,step:n,setStep:A,loading:r,setLoading:d,isInfo:l}){const[o,N]=j.useState(!1),[u,p]=j.useState({api_key:""}),{livestorm:s}=S,T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,A(2),$(e,a,d)},g=c=>{const h=b({},e),m=b({},u);m[c.target.name]="",h[c.target.name]=c.target.value,p(m),a(h)},L=`
            <h4>${i("To Get API Token","bit-integrations")}</h4>
            <ul>
                <li>${i("First go to your Livestorm dashboard.","bit-integrations")}</li>
                <li>${i('Click go to "Account Settings"',"bit-integrations")}</li>
                <li>${i('Then Click "App marketplace"',"bit-integrations")}</li>
                <li>${i('Then Click "Public API" card',"bit-integrations")}</li>
                <li>${i("Then you'll be able to generate your own API tokens","bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(y,{title:"Livestorm",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(y,{title:"Livestorm",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:g,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:g,name:"api_key",value:e.api_key,type:"text",placeholder:i("API Key...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:u.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[i("To get API key, please visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.livestorm.co/#/settings?page=settings&tab=integrations&id=public-api",target:"_blank",children:i("Livestorm API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!l&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>E(e,a,p,N,r,d),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||r.auth,children:[o?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),r.auth&&t.jsx(w,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:T,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(z,{note:L})]})}export{R as default};
