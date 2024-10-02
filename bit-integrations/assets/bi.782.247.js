var T=Object.defineProperty;var x=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var g=(e,s,a)=>s in e?T(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,b=(e,s)=>{for(var a in s||(s={}))P.call(s,a)&&g(e,a,s[a]);if(x)for(var a of x(s))L.call(s,a)&&g(e,a,s[a]);return e};import{r as y,j as t}from"./main-650.js";import{_ as i,L as _,N as z}from"./bi.541.15.js";import{i as w}from"./bi.489.836.js";import{T as j,t as $}from"./bi.770.713.js";function U({clickupConf:e,setClickupConf:s,step:a,setStep:k,loading:r,setLoading:N,isInfo:o}){const[l,A]=y.useState(!1),[m,c]=y.useState({api_key:""}),{clickup:n}=$,v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,k(2)},h=d=>{const p=b({},e),u=b({},m);u[d.target.name]="",p[d.target.name]=d.target.value,c(u),s(p)},I=`
            <h4>${i("To get the ClickUp API Key","bit-integrations")}</h4>
            <ul>
                <li>${i("Navigate to your personal Settings.","bit-integrations")}</li>
                <li>${i("Click Apps in the left sidebar.","bit-integrations")}</li>
                <li>${i("Click Generate to create your API token.","bit-integrations")}</li>
                <li>${i("Click Copy to copy the key to your clipboard.","bit-integrations")}</li>
                <li>${i("Paste your API Key into the “API Key” field.","bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(j,{title:"ClickUp",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(j,{title:"ClickUp",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"api_key",value:e.api_key,type:"text",placeholder:i("API Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[i("To Get API Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.clickup.com/0/my-apps",target:"_blank",rel:"noreferrer",children:i("Clickup API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>w(e,s,c,A,r,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||r.auth,children:[l?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),r.auth&&t.jsx(_,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:v,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(z,{note:I})]})}export{U as default};
