var P=Object.defineProperty;var x=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var j=(e,s,a)=>s in e?P(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,d=(e,s)=>{for(var a in s||(s={}))S.call(s,a)&&j(e,a,s[a]);if(x)for(var a of x(s))T.call(s,a)&&j(e,a,s[a]);return e};import{r as y,j as t}from"./main-263.js";import{_ as i}from"./bi.924.0.js";import{y as _,a8 as z}from"./bi.361.434.js";import{d as L,g as w}from"./bi.556.868.js";import{T as k,t as E}from"./bi.372.711.js";import"./bi.402.9.js";function F({demioConf:e,setDemioConf:s,step:a,setStep:A,loading:l,setLoading:u,isInfo:r}){const[c,N]=y.useState(!1),{demio:n}=E,[o,h]=y.useState({api_key:"",api_secret:""}),v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,A(2),w(e,s,u)},b=p=>{const m=d({},e),g=d({},o);g[p.target.name]="",m[p.target.name]=p.target.value,h(g),s(m)},I=`
            <h4>${i("To Get API Key & API Secret","bit-integrations")}</h4>
            <ul>
                <li>${i("First go to your Demio dashboard.","bit-integrations")}</li>
                <li>${i('Click go to "Settings" from Right Top corner',"bit-integrations")}</li>
                <li>${i('Then Click "API" from the "Settings Menu"',"bit-integrations")}</li>
                <li>${i('Then Click "Generate Api Secret"',"bit-integrations")}</li>
                <li>${i('Then copy "API Authorization Credentials"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(k,{title:"Demio",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(k,{title:"Demio",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"api_key",value:e.api_key,type:"text",placeholder:i("API Key...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.api_key}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"api_secret",value:e.api_secret,type:"text",placeholder:i("API Secret...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.api_secret}),t.jsxs("small",{className:"d-blk mt-3",children:[i("To Get API Key & API Secret, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://my.demio.com/manage/settings/api-details",target:"_blank",children:i("Demio API Key & Secret","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!r&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>L(e,s,h,N,l,u),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||l.auth,children:[c?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),l.auth&&t.jsx(_,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:v,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(z,{note:I})]})}export{F as default};
