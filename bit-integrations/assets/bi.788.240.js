var L=Object.defineProperty;var x=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var k=(e,s,n)=>s in e?L(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,d=(e,s)=>{for(var n in s||(s={}))T.call(s,n)&&k(e,n,s[n]);if(x)for(var n of x(s))_.call(s,n)&&k(e,n,s[n]);return e};import{r as g,j as t}from"./main-270.js";import{_ as a}from"./bi.340.0.js";import{z}from"./bi.88.440.js";import{a as w}from"./bi.688.857.js";import{T as j,t as E}from"./bi.104.742.js";import"./bi.724.9.js";function V({airtableConf:e,setAirtableConf:s,step:n,setStep:N,loading:r,setLoading:v,isInfo:o}){const[c,y]=g.useState(!1),[m,u]=g.useState({name:"",auth_token:""}),{airtable:i}=E,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,N(2)},h=l=>{const p=d({},e),b=d({},m);b[l.target.name]="",p[l.target.name]=l.target.value,u(b),s(p)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&t.jsx(j,{title:"Airtable",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&t.jsx(j,{title:"Airtable",docLink:i==null?void 0:i.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Personal access token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"auth_token",value:e.auth_token,type:"text",placeholder:a("API Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.auth_token}),t.jsxs("small",{className:"d-blk mt-3",children:[a("To Get personal access token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://airtable.com/create/tokens",target:"_blank",rel:"noreferrer",children:a("Airtable Personal access tokens","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>w(e,s,u,y,r,v,"authentication"),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||r.auth,children:[c?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),r.auth&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[a("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{V as default};
