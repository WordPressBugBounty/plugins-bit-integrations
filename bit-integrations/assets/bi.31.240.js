var v=Object.defineProperty;var h=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var g=(i,s,n)=>s in i?v(i,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[s]=n,d=(i,s)=>{for(var n in s||(s={}))w.call(s,n)&&g(i,n,s[n]);if(h)for(var n of h(s))z.call(s,n)&&g(i,n,s[n]);return i};import{r as k,j as t}from"./main-263.js";import{T as j,t as L}from"./bi.372.711.js";import{_ as e}from"./bi.924.0.js";import{y as P,a8 as I}from"./bi.361.434.js";import{f as E}from"./bi.237.830.js";import"./bi.402.9.js";function Y({freshSalesConf:i,setFreshSalesConf:s,step:n,setstep:y,isLoading:b,setIsLoading:A,isInfo:o}){const[r,T]=k.useState(!1),[l,m]=k.useState({name:"",api_key:""}),{freshSales:a}=L,N=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),y(2)},u=c=>{const p=d({},i),x=d({},l);x[c.target.name]="",p[c.target.name]=c.target.value,m(x),s(p)},_=`
    <h4>${e("Step of generate API token:","bit-integrations")}</h4>
    <ul>
      <li>${e("Goto","bit-integrations")} <a href="https://www.myfreshworks.com/crm/sales/personal-settings/api-settings">${e("Generate API Token","bit-integrations")}</a></li>
      <li>${e("Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.","bit-integrations")}</li>
      <li>${e("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(j,{title:"Freshsales",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(j,{title:"Freshsales",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Bundle Alias(Your Account URL):","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"bundle_alias",value:i.bundle_alias,type:"text",placeholder:e("Your Account Url...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.bundle_alias}),t.jsx("small",{className:"d-blk mt-3",children:e("Example: name.myfreshworks.com/crm/sales","bit-integrations")}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"api_key",value:i.api_key,type:"text",placeholder:e("API Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.api_key}),i.bundle_alias&&t.jsxs("small",{className:"d-blk mt-3",children:[e("To Get API Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:`https://${i.bundle_alias}/personal-settings/api-settings`,target:"_blank",rel:"noreferrer",children:e("FreshSales API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>E(i,m,T,A),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:r||b,children:[r?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),b&&t.jsx(P,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:N,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!r,children:[e("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(I,{note:_})]})}export{Y as default};
