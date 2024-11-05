var w=Object.defineProperty;var x=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var j=(i,a,n)=>a in i?w(i,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[a]=n,b=(i,a)=>{for(var n in a||(a={}))I.call(a,n)&&j(i,n,a[n]);if(x)for(var n of x(a))L.call(a,n)&&j(i,n,a[n]);return i};import{r as y,j as t}from"./main-263.js";import{B as _}from"./bi.638.705.js";import{_ as e}from"./bi.924.0.js";import{a1 as f,y as $,a8 as R}from"./bi.361.434.js";import{c as E}from"./bi.162.780.js";import{T as C,t as F}from"./bi.372.711.js";import"./bi.402.9.js";function V({constantContactConf:i,setConstantContactConf:a,step:n,setstep:N,isLoading:m,setIsLoading:k,setSnackbar:l,redirectLocation:v,isInfo:r}){const[o,z]=y.useState(!1),{constantContact:s}=F,[c,h]=y.useState({dataCenter:"",clientId:"",clientSecret:""}),A="account_read account_update contact_data offline_access campaign_data",S=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),N(2)},d=p=>{const u=b({},i),g=b({},c);g[p.target.name]="",u[p.target.name]=p.target.value,h(g),a(u)},T=`
  <h4>${e("Step of get API Key(Client Id) And Client Secret:","bit-integrations")}</h4>
  <ul>
    <li>${e("Goto","bit-integrations")} <a href="https://app.constantcontact.com/pages/dma/portal/?_ga=2.91540634.1868552181.1667660766-5cc88792-fd06-40a8-9b8c-e27659667215">${e("Constant Contact Application","bit-integrations")}</a></li>
    <li>${e("Then create a new application.","bit-integrations")}</li>
    <li>${e("Select  <b>(Authorization Code Flow and Implicit Flow)</b> and <b>(Rotating Refresh Tokens or Long Lived Refresh Tokens).</b>","bit-integrations")}</li>
    <li>${e("Copy the <b>Authorized Redirect URIs</b> from here and paste it into the Constant Contact application form.","bit-integrations")}</li> 
    <li>${e("Then generate <b>Client Secret</b> from the Constant Contact application","bit-integrations")}</li>
    <li>${e("Copy the <b>Client Id</b> and <b>Client Secret</b> from Constant Contact application and paste into this authorization form.","bit-integrations")}</li>
    <li>${e("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
</ul>
`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(C,{title:"Constant Contact",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(C,{title:"Constant Contact",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:i.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Homepage URL:","bit-integrations")})}),t.jsx(f,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(f,{value:v||`${btcbi.api.base}/redirect`,setSnackbar:l,className:"field-key-cpy w-6 ml-0",readOnly:r}),t.jsxs("small",{className:"d-blk mt-5",children:[e("To get Client ID and SECRET , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.constantcontact.com/pages/dma/portal/?_ga=2.91540634.1868552181.1667660766-5cc88792-fd06-40a8-9b8c-e27659667215",target:"_blank",rel:"noreferrer",children:e("Constant Contact Application","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientId",value:i.clientId,type:"text",placeholder:e("client ID...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.clientId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Client secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientSecret",value:i.clientSecret,type:"text",placeholder:e("client Secret...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.clientSecret}),!r&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>E("constantContact","cContact",A,i,a,h,z,k,l,btcbi),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||m.auth,children:[o?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),m.auth&&t.jsx($,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:S,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[e("Next","bit-integrations"),t.jsx(_,{className:"ml-1 rev-icn"})]})]}),t.jsx(R,{note:T})]})}export{V as default};
