var P=Object.defineProperty;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(e,n,a)=>n in e?P(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,b=(e,n)=>{for(var a in n||(n={}))z.call(n,a)&&g(e,a,n[a]);if(x)for(var a of x(n))I.call(n,a)&&g(e,a,n[a]);return e};import{r as k,j as t}from"./main-777.js";import{_ as i}from"./bi.157.0.js";import{z as _,a8 as f}from"./bi.463.440.js";import{m as L}from"./bi.538.809.js";import{T as j,t as w}from"./bi.805.709.js";import"./bi.681.9.js";function V({mailBlusterConf:e,setMailBlusterConf:n,step:a,setStep:N,loading:o,setLoading:y,isInfo:r}){const[c,T]=k.useState(!1),[d,p]=k.useState({name:"",auth_token:""}),{mailBluster:s}=w,v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,N(2)},h=l=>{const u=b({},e),m=b({},d);m[l.target.name]="",u[l.target.name]=l.target.value,p(m),n(u)},A=`
    <h4>${i("Step of generate API token:","bit-integrations")}</h4>
    <ul>
      <li>${i("Goto","bit-integrations")} <a target="_blank" href="https://app.mailbluster.com/vM7N8vG0Pp/settings/api-keys">${i("Generate API Token","bit-integrations")}</a></li>
      <li>${i("Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.","bit-integrations")}</li>
      <li>${i("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(j,{title:"MailBluster",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(j,{title:"MailBluster",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"auth_token",value:e.auth_token,type:"text",placeholder:i("API Token...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.auth_token}),t.jsxs("small",{className:"d-blk mt-3",children:[i("To Get API Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.mailbluster.com/vM7N8vG0Pp/settings/api-keys",target:"_blank",rel:"noreferrer",children:i("MailBluster API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!r&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>L(e,n,p,T,o,y,"authentication"),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||o.auth,children:[c?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),o.auth&&t.jsx(_,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:v,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(f,{note:A})]})}export{V as default};
