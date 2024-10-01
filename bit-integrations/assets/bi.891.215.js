var P=Object.defineProperty;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(n,s,i)=>s in n?P(n,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[s]=i,c=(n,s)=>{for(var i in s||(s={}))z.call(s,i)&&g(n,i,s[i]);if(x)for(var i of x(s))I.call(s,i)&&g(n,i,s[i]);return n};import{r as k,j as t}from"./main-830.js";import{_ as e,L,N as _}from"./bi.597.15.js";import{j as v}from"./bi.965.774.js";import{T as j,t as w}from"./bi.972.713.js";function B({pipeDriveConf:n,setPipeDriveConf:s,step:i,setstep:y,isLoading:d,setIsLoading:N,isInfo:o}){const[r,T]=k.useState(!1),[b,m]=k.useState({name:"",api_key:""}),{pipeDrive:a}=w,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),y(2)},u=l=>{const h=c({},n),p=c({},b);p[l.target.name]="",h[l.target.name]=l.target.value,m(p),s(h)},f=`
    <h4>${e("Step of generate API token:","bit-integrations")}</h4>
    <ul>
      <li>${e("Goto","bit-integrations")} <a href="https://app.pipedrive.com/settings/api">${e("Generate API Token","bit-integrations")}</a></li>
      <li>${e("Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.","bit-integrations")}</li>
      <li>${e("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:i===1&&900,height:i===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(j,{title:"Pipedrive",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(j,{title:"Pipedrive",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"name",value:n.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"api_key",value:n.api_key,type:"text",placeholder:e("API Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[e("To Get API Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.pipedrive.com/settings/api",target:"_blank",rel:"noreferrer",children:e("PipeDrive API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>v(n,m,T,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:r||d,children:[r?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),d&&t.jsx(L,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!r,children:[e("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(_,{note:f})]})}export{B as default};
