var L=Object.defineProperty;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var h=(e,s,r)=>s in e?L(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,p=(e,s)=>{for(var r in s||(s={}))T.call(s,r)&&h(e,r,s[r]);if(g)for(var r of g(s))_.call(s,r)&&h(e,r,s[r]);return e};import{r as j,j as t}from"./main-441.js";import{_ as i,n as w}from"./bi.452.0.js";import{y as S,a8 as z}from"./bi.141.437.js";import{o as E}from"./bi.557.884.js";import{T as y,t as K}from"./bi.292.699.js";import"./bi.663.9.js";function V({oneHashCRMConf:e,setOneHashCRMConf:s,step:r,setStep:A,loading:o,setLoading:k,isInfo:a}){const[d,N]=j.useState(!1),[l,b]=j.useState({api_token:""}),{oneHashCRM:n}=K,v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,A(2)},c=m=>{const u=p({},e),x=p({},l);x[m.target.name]="",u[m.target.name]=m.target.value,b(x),s(u)},I=()=>{e.domain?window.open(`${e.domain}/app/user`,"_blank","noreferrer"):w.error(i("Access API URL is required!","bit-integrations"))},P=`
            <h4>${i("Get API Token","bit-integrations")}</h4>
            <ul>
                <li>${i("Go to your OneHash CRM's user dashboard and click the profile buttom from Right top corner","bit-integrations")}</li>
                <li>${i('Then select "My Settings"',"bit-integrations")}</li>
                <li>${i('Then go to "API Access → Generates Keys"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:r===1&&900,height:r===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(y,{title:"oneHashCRM",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(y,{title:"oneHashCRM",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:a}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Access API URL:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"domain",value:e.domain,type:"text",placeholder:i("Access API URL...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.domain}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"api_key",value:e.api_key,type:"text",placeholder:i("API Key...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.api_key}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"api_secret",value:e.api_secret,type:"text",placeholder:i("API Token...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.api_secret}),t.jsxs("small",{className:"d-blk mt-3",children:[i("To Get API Key & API Secret, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",onClick:I,children:i("OneHashCRM API Key & API Secret","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!a&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>E(e,s,b,N,o,k),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:d||o.auth,children:[d?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),o.auth&&t.jsx(S,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:v,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!d,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(z,{note:P})]})}export{V as default};
