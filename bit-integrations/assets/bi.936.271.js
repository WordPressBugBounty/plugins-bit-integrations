var y=Object.defineProperty;var x=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var j=(i,e,n)=>e in i?y(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,b=(i,e)=>{for(var n in e||(e={}))S.call(e,n)&&j(i,n,e[n]);if(x)for(var n of x(e))_.call(e,n)&&j(i,n,e[n]);return i};import{r as k,j as t}from"./main-263.js";import{_ as a}from"./bi.924.0.js";import{y as z,a8 as L}from"./bi.361.434.js";import{s as w,a as K,g as $}from"./bi.453.889.js";import{T as A,t as E}from"./bi.372.711.js";import"./bi.402.9.js";function q({systemeIOConf:i,setSystemeIOConf:e,step:n,setStep:N,loading:s,setLoading:l,isInfo:o}){const[c,T]=k.useState(!1),{systemeIO:r}=E,[u,p]=k.useState({api_key:""}),P=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),K(i,e,l),$(i,e,l),i!=null&&i.default,N(2)},h=d=>{const g=b({},i),m=b({},u);m[d.target.name]="",g[d.target.name]=d.target.value,p(m),e(g)},v=`
            <h4>${a("To Get API Key & API Secret","bit-integrations")}</h4>
            <ul>
                <li>${a("First go to your SystemeIO dashboard.","bit-integrations")}</li>
                <li>${a('Click go to "Settings" from Right Top corner',"bit-integrations")}</li>
                <li>${a('Then Click "Public API Keys" from the "Settings Menu"',"bit-integrations")}</li>
                <li>${a('Then Click "Create Api key"',"bit-integrations")}</li>
                <li>${a('Then copy "API Token"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&t.jsx(A,{title:"SystemeIO",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&t.jsx(A,{title:"SystemeIO",docLink:r==null?void 0:r.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"name",value:i.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"api_key",value:i.api_key,type:"text",placeholder:a("API Key...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:u.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[a("To Get API Key & API Secret, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://systeme.io/dashboard/profile/public-api-settings",target:"_blank",children:a("SystemeIO API Key & Secret","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>w(i,e,p,T,s,l),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||s.auth,children:[c?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),s.auth&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:P,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[a("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(L,{note:v})]})}export{q as default};
