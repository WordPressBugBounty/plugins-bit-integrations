var L=Object.defineProperty;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var h=(e,s,n)=>s in e?L(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,b=(e,s)=>{for(var n in s||(s={}))T.call(s,n)&&h(e,n,s[n]);if(g)for(var n of g(s))_.call(s,n)&&h(e,n,s[n]);return e};import{r as j,j as t}from"./main-29.js";import{_ as i,L as w,N as S,X as z}from"./bi.860.15.js";import{o as E}from"./bi.444.871.js";import{T as A,t as K}from"./bi.244.714.js";function B({oneHashCRMConf:e,setOneHashCRMConf:s,step:n,setStep:k,loading:o,setLoading:y,isInfo:a}){const[d,N]=j.useState(!1),[l,p]=j.useState({api_token:""}),{oneHashCRM:r}=K,v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,k(2)},c=m=>{const u=b({},e),x=b({},l);x[m.target.name]="",u[m.target.name]=m.target.value,p(x),s(u)},I=()=>{e.domain?window.open(`${e.domain}/app/user`,"_blank","noreferrer"):z.error(i("Access API URL is required!","bit-integrations"))},P=`
            <h4>${i("Get API Token","bit-integrations")}</h4>
            <ul>
                <li>${i("Go to your OneHash CRM's user dashboard and click the profile buttom from Right top corner","bit-integrations")}</li>
                <li>${i('Then select "My Settings"',"bit-integrations")}</li>
                <li>${i('Then go to "API Access → Generates Keys"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&t.jsx(A,{title:"oneHashCRM",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&t.jsx(A,{title:"oneHashCRM",docLink:r==null?void 0:r.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:a}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Access API URL:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"domain",value:e.domain,type:"text",placeholder:i("Access API URL...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.domain}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"api_key",value:e.api_key,type:"text",placeholder:i("API Key...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.api_key}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"api_secret",value:e.api_secret,type:"text",placeholder:i("API Token...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.api_secret}),t.jsxs("small",{className:"d-blk mt-3",children:[i("To Get API Key & API Secret, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",onClick:I,children:i("OneHashCRM API Key & API Secret","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!a&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>E(e,s,p,N,o,y),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:d||o.auth,children:[d?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),o.auth&&t.jsx(w,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:v,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!d,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(S,{note:P})]})}export{B as default};
