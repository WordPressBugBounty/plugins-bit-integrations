var v=Object.defineProperty;var j=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var g=(i,e,n)=>e in i?v(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,b=(i,e)=>{for(var n in e||(e={}))z.call(e,n)&&g(i,n,e[n]);if(j)for(var n of j(e))_.call(e,n)&&g(i,n,e[n]);return i};import{r as u,j as t}from"./main-623.js";import{_ as a}from"./bi.422.0.js";import{z as I,a9 as P}from"./bi.1.443.js";import{f as L,b as w}from"./bi.911.846.js";import{T as N,t as E}from"./bi.971.765.js";import"./bi.331.9.js";function H({getResponseConf:i,setGetResponseConf:e,step:n,setstep:T,loading:o,setLoading:d,setSnackbar:S,isInfo:l}){const[s,A]=u.useState(!1),[m,h]=u.useState({name:"",auth_token:""}),{getResponse:r}=E;u.useEffect(()=>{s&&L(i,e,d,"default")},[s]);const y=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),i!=null&&i.default,T(2)},p=c=>{const x=b({},i),k=b({},m);k[c.target.name]="",x[c.target.name]=c.target.value,h(k),e(x)},f=`
    <h4>${a("Step of generate API token:","bit-integrations")}</h4>
    <ul>
      <li>${a("Goto","bit-integrations")} <a target="_blank" href="https://app.getresponse.com/api">${a("Generate API Token","bit-integrations")}</a></li>
      <li>${a("Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.","bit-integrations")}</li>
      <li>${a("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&t.jsx(N,{title:"GetResponse",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&t.jsx(N,{title:"GetResponse",docLink:r==null?void 0:r.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"name",value:i.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"auth_token",value:i.auth_token,type:"text",placeholder:a("API Token...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.auth_token}),t.jsxs("small",{className:"d-blk mt-3",children:[a("To Get API Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.getresponse.com/api",target:"_blank",rel:"noreferrer",children:a("GetResponse API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!l&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>w(i,e,h,A,o,d,"authentication"),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:s||o.auth,children:[s?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),o.auth&&t.jsx(I,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:y,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!s,children:[a("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(P,{note:f})]})}export{H as default};
