var L=Object.defineProperty;var x=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var h=(e,n,i)=>n in e?L(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,m=(e,n)=>{for(var i in n||(n={}))S.call(n,i)&&h(e,i,n[i]);if(x)for(var i of x(n))z.call(n,i)&&h(e,i,n[i]);return e};import{r as k,j as t}from"./main-288.js";import{B as _}from"./bi.684.706.js";import{_ as s}from"./bi.4.0.js";import{y as f,a8 as w}from"./bi.197.434.js";import{i as E}from"./bi.402.734.js";import{T as j,t as H}from"./bi.255.712.js";import"./bi.627.9.js";function D({hubspotConf:e,setHubspotConf:n,step:i,setstep:y,isInfo:r,loading:o,setLoading:N}){const[c,v]=k.useState(!1),[d,b]=k.useState({name:"",api_key:""}),{hubspot:a}=H,g=l=>{const u=m({},e),p=m({},d);p[l.target.name]="",u[l.target.name]=l.target.value,b(p),n(u)},A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),y(2)},T=`
    <h4>${s("Step of generating Access Token:","bit-integrations")}</h4>
    <ul>
      <li>${s("Login to your HubSpot account, click the <b>Settings</b> icon settings in the main navigation bar..","bit-integrations")}</li>
      <li>${s("In the left sidebar menu, navigate to <b>Integrations > Private App</b>.","bit-integrations")}</li>
      <li>${s("Give name and description and select all necessary scope.","bit-integrations")}</li>
      <li>${s("Then create Access token.","bit-integrations")}</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:i===1&&900,height:i===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(j,{title:"HubSpot",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(j,{title:"HubSpot",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:g,name:"name",value:e==null?void 0:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Hubspot Access Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:g,name:"api_key",value:e.api_key,type:"text",placeholder:s("Access Token...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:d.api_key}),!r&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>E(e,b,v,o,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||o.auth,children:[c?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),o.auth&&t.jsx(f,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>A(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[s("Next","bit-integrations"),t.jsx(_,{className:"ml-1 rev-icn"})]})]}),t.jsx(w,{note:T})]})}export{D as default};
