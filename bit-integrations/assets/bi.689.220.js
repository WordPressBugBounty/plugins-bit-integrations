var P=Object.defineProperty;var x=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var g=(e,i,a)=>i in e?P(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,b=(e,i)=>{for(var a in i||(i={}))I.call(i,a)&&g(e,a,i[a]);if(x)for(var a of x(i))L.call(i,a)&&g(e,a,i[a]);return e};import{r as k,j as t}from"./main-830.js";import{_ as n,L as _,N as z}from"./bi.597.15.js";import{m as f}from"./bi.353.785.js";import{T as j,t as w}from"./bi.972.713.js";function F({mailBlusterConf:e,setMailBlusterConf:i,step:a,setStep:N,loading:o,setLoading:y,isInfo:r}){const[c,T]=k.useState(!1),[d,h]=k.useState({name:"",auth_token:""}),{mailBluster:s}=w,v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,N(2)},p=l=>{const u=b({},e),m=b({},d);m[l.target.name]="",u[l.target.name]=l.target.value,h(m),i(u)},A=`
    <h4>${n("Step of generate API token:","bit-integrations")}</h4>
    <ul>
      <li>${n("Goto","bit-integrations")} <a target="_blank" href="https://app.mailbluster.com/vM7N8vG0Pp/settings/api-keys">${n("Generate API Token","bit-integrations")}</a></li>
      <li>${n("Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.","bit-integrations")}</li>
      <li>${n("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(j,{title:"MailBluster",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(j,{title:"MailBluster",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"auth_token",value:e.auth_token,type:"text",placeholder:n("API Token...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.auth_token}),t.jsxs("small",{className:"d-blk mt-3",children:[n("To Get API Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.mailbluster.com/vM7N8vG0Pp/settings/api-keys",target:"_blank",rel:"noreferrer",children:n("MailBluster API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!r&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>f(e,i,h,T,o,y,"authentication"),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||o.auth,children:[c?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),o.auth&&t.jsx(_,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:v,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[n("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(z,{note:A})]})}export{F as default};
