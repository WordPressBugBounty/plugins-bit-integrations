var T=Object.defineProperty;var x=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var g=(i,s,n)=>s in i?T(i,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[s]=n,m=(i,s)=>{for(var n in s||(s={}))S.call(s,n)&&g(i,n,s[n]);if(x)for(var n of x(s))z.call(s,n)&&g(i,n,s[n]);return i};import{r as j,j as t}from"./main-814.js";import{_ as e}from"./bi.317.0.js";import{z as I,a8 as L}from"./bi.8.440.js";import{d as P}from"./bi.614.882.js";import{T as k,t as w}from"./bi.492.709.js";import"./bi.765.9.js";function B({companyHubConf:i,setCompanyHubConf:s,step:n,setStep:N,loading:o,setLoading:v,isInfo:r}){const[l,y]=j.useState(!1),[d,u]=j.useState({sub_domain:"",api_key:""}),{companyHub:a}=w,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),i!=null&&i.default,N(2)},c=b=>{const h=m({},i),p=m({},d);p[b.target.name]="",h[b.target.name]=b.target.value,u(p),s(h)},_=`
            <h4>${e("To Get Public Id & Secret Key","bit-integrations")}</h4>
            <ul>
                <li>${e("First go to your CompanyHub dashboard.","bit-integrations")}</li>
                <li>${e('Click go to "Settings" from Left Bottom corner',"bit-integrations")}</li>
                <li>${e('Then Click "Integrations"',"bit-integrations")}</li>
                <li>${e('Then Click "Generate Api key"',"bit-integrations")}</li>
                <li>${e('Then copy "API Authorization Credentials"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(k,{title:"CompanyHub",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(k,{title:"CompanyHub",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:i.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Sub Domain:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"sub_domain",value:i.sub_domain,type:"text",placeholder:e("Sub Domain...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.sub_domain}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"api_key",value:i.api_key,type:"text",placeholder:e("API Key...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[e("To Get Sub Domain & API Key, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.companyhub.com/settings/integration",target:"_blank",children:e("CompanyHub Sub Domain & API Key","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!r&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>P(i,s,u,y,o,v),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||o.auth,children:[l?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),o.auth&&t.jsx(I,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[e("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(L,{note:_})]})}export{B as default};
