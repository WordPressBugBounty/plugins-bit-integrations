var L=Object.defineProperty;var u=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var x=(e,n,s)=>n in e?L(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,p=(e,n)=>{for(var s in n||(n={}))S.call(n,s)&&x(e,s,n[s]);if(u)for(var s of u(n))z.call(n,s)&&x(e,s,n[s]);return e};import{r as j,j as t}from"./main-404.js";import{_ as i,n as I}from"./bi.51.0.js";import{z as P,a8 as $}from"./bi.613.437.js";import{n as E}from"./bi.793.877.js";import{T as y,t as F}from"./bi.116.700.js";import"./bi.964.9.js";function D({flowluConf:e,setFlowluConf:n,step:s,setStep:k,loading:o,setLoading:N,isInfo:r}){const[c,v]=j.useState(!1),[l,b]=j.useState({api_key:"",company_name:""}),{flowlu:a}=F,_=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,k(2)},d=m=>{const h=p({},e),g=p({},l);g[m.target.name]="",h[m.target.name]=m.target.value,b(g),n(h)},T=()=>{e.company_name?window.open(`https://${e.company_name}.flowlu.com/cabinet/all_settings?section=api`,"_blank","noreferrer"):I.error(i("Company Name is required!","bit-integrations"))},A=`
            <h4>${i("Get the API Key","bit-integrations")}</h4>
            <ul>
                <li>${i("First go to your Flowlu dashboard.","bit-integrations")}</li>
                <li>${i('Click go to your "Profile" from Right top corner',"bit-integrations")}</li>
                <li>${i('Then Click "Portal Settings"',"bit-integrations")}</li>
                <li>${i('Click go to "API Settings" from "Main Settings"',"bit-integrations")}</li>
                <li>${i('Then click "create", Then Copy',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(y,{title:"Flowlu",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(y,{title:"Flowlu",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"api_key",value:e.api_key,type:"text",placeholder:i("Session Token...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.api_key}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Company Name:","bit-integrations")})}),t.jsxs("div",{className:"btcd-input-group w-6 mt-1",children:[t.jsx("div",{className:"btcd-input-group-icon",children:"https://"}),t.jsx("div",{className:"btcd-input-group-area",children:t.jsx("input",{className:"btcd-paper-inp",onChange:d,name:"company_name",value:e.company_name,type:"text",placeholder:i("Link Name...","bit-integrations"),disabled:r})}),t.jsx("div",{className:"btcd-input-group-icon",children:".flowlu.com"})]}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.company_name}),t.jsxs("small",{className:"d-blk mt-3",children:[i("To get API key, please visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",onClick:T,children:i("Flowlu API Key","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!r&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>E(e,n,b,v,o,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||o.auth,children:[c?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),o.auth&&t.jsx(P,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:_,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx($,{note:A})]})}export{D as default};
