var I=Object.defineProperty;var h=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var g=(e,s,a)=>s in e?I(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,b=(e,s)=>{for(var a in s||(s={}))L.call(s,a)&&g(e,a,s[a]);if(h)for(var a of h(s))z.call(s,a)&&g(e,a,s[a]);return e};import{r as j,j as t}from"./main-404.js";import{_ as i}from"./bi.51.0.js";import{z as P,a8 as w}from"./bi.613.437.js";import{n as S}from"./bi.622.894.js";import{T as k,t as E}from"./bi.116.700.js";import"./bi.964.9.js";function q({nutshellCRMConf:e,setNutshellCRMConf:s,step:a,setStep:N,loading:o,setLoading:y,isInfo:r}){const[c,A]=j.useState(!1),[d,p]=j.useState({api_token:""}),{nutshellCRM:n}=E,T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,N(2)},l=m=>{const u=b({},e),x=b({},d);x[m.target.name]="",u[m.target.name]=m.target.value,p(x),s(u)},v="https://app.nutshell.com/setup/api-key",_=`
            <h4>${i("Get API Token","bit-integrations")}</h4>
            <ul>
                <li>${i("Go to your Nutshell CRM's user dashboard","bit-integrations")}</li>
                <li>${i('Then select "Settings"',"bit-integrations")}</li>
                <li>${i('Then go to "API Keys → Add API Key"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(k,{title:"Nutshell CRM",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(k,{title:"Nutshell CRM",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:l,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("User Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:l,name:"user_name",value:e.user_name,type:"text",placeholder:i("User Name...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.user_name}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:l,name:"api_token",value:e.api_token,type:"text",placeholder:i("API Token...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.api_token}),t.jsxs("small",{className:"d-blk mt-3",children:[i("To Get User Name & API Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:v,target:"_blank",children:i("NutshellCRM User Name & API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!r&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>S(e,s,p,A,o,y),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||o.auth,children:[c?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),o.auth&&t.jsx(P,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:T,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(w,{note:_})]})}export{q as default};
