var C=Object.defineProperty;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var x=(i,s,n)=>s in i?C(i,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[s]=n,d=(i,s)=>{for(var n in s||(s={}))T.call(s,n)&&x(i,n,s[n]);if(g)for(var n of g(s))$.call(s,n)&&x(i,n,s[n]);return i};import{r as j,j as t}from"./main-247.js";import{_ as e}from"./bi.456.0.js";import{T as k,t as A}from"./bi.30.716.js";import{y as z,a8 as S}from"./bi.393.437.js";import{l as E}from"./bi.285.916.js";import"./bi.712.9.js";function w({licenseManagerConf:i,setLicenseManagerConf:s,step:n,setStep:y,loading:b,setLoading:v,isInfo:a}){const[o,N]=j.useState(!1),{lmfwc:r}=A,[l,p]=j.useState({api_key:"",api_secret:""}),L=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),o&&y(2)},c=m=>{const u=d({},i),h=d({},l);h[m.target.name]="",u[m.target.name]=m.target.value,p(h),s(u)},_=`
            <b>${e("Requirements","bit-integrations")}</b>
            <p>${e("WordPress permalinks must be enabled at","bit-integrations")}: <b>${e("Settings","bit-integrations")}</b> > <b>${e("Permalinks","bit-integrations")}</b></p>
            <h4>${e("To Get Consumer key & Consumer secret","bit-integrations")}</h4>
            <ul>
                <li>${e('First go to "WooCommerce"',"bit-integrations")}</li>
                <li>${e('Then go to "Settings" page',"bit-integrations")}</li>
                <li>${e('Click on "License Manager " from right top corner menu',"bit-integrations")}</li>
                <li>${e('Then click "REST API" from the top sub menu',"bit-integrations")}</li>
                <li>${e('Then click "Add key" button at the top of the page',"bit-integrations")}</li>
                <li>${e('FIll the form & click "Generate API Key"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&t.jsx(k,{title:"License Manager For WooCommerce",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&t.jsx(k,{title:"License Manager For WooCommerce",docLink:r==null?void 0:r.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:i.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:a}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Homepage URL:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"baseUrl",value:i.base_url,type:"text",placeholder:e("Homepage URL...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.base_url}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Consumer key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"api_key",value:i.api_key,type:"text",placeholder:e("Consumer key...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.api_key}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Consumer secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"api_secret",value:i.api_secret,type:"text",placeholder:e("Consumer secret...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.api_secret}),t.jsx("br",{}),!a&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>E(i,s,p,N,b,v),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||b.auth,children:[o?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),b.auth&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:L,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[e("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(S,{note:_})]})}export{w as default};
