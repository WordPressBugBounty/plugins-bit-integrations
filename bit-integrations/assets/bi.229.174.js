var z=Object.defineProperty;var y=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var N=(n,t,i)=>t in n?z(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i,h=(n,t)=>{for(var i in t||(t={}))D.call(t,i)&&N(n,i,t[i]);if(y)for(var i of y(t))S.call(t,i)&&N(n,i,t[i]);return n};import{r as k,f as C,j as e}from"./main-615.js";import{e as I,_ as s}from"./bi.394.0.js";import{B as _}from"./bi.560.697.js";import{a1 as A,y as B}from"./bi.991.437.js";import{k as $}from"./bi.819.3.js";import{d as P}from"./bi.232.676.js";import{T as E,t as f}from"./bi.681.699.js";import"./bi.179.9.js";import"./bi.700.13.js";import"./bi.405.11.js";import"./bi.1.14.js";function X({formID:n,biginConf:t,setBiginConf:i,step:p,setstep:w,isLoading:u,setIsLoading:x,setSnackbar:l,redirectLocation:R,isInfo:r}){const[d,L]=k.useState(!1),[o,b]=k.useState({dataCenter:"",clientId:"",clientSecret:""}),j=C(I),T="ZohoBigin.settings.modules.READ,ZohoBigin.settings.fields.READ,ZohoBigin.settings.tags.READ,ZohoBigin.users.READ,ZohoBigin.modules.ALL,ZohoBigin.settings.layouts.READ",{zohoBigin:a}=f,Z=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),w(2),P(n,t,i,x,l)},c=m=>{const g=h({},t),v=h({},o);v[m.target.name]="",g[m.target.name]=m.target.value,b(v),i(g)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:p===1&&900,height:p===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&e.jsx(E,{title:"Zoho Bigin",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&e.jsx(E,{title:"Zoho Bigin",docLink:a==null?void 0:a.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:t.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Data Center:","bit-integrations")})}),e.jsxs("select",{onChange:c,name:"dataCenter",value:t.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:r,children:[e.jsx("option",{value:"",children:s("--Select a data center--","bit-integrations")}),e.jsx("option",{value:"com",children:"zoho.com"}),e.jsx("option",{value:"eu",children:"zoho.eu"}),e.jsx("option",{value:"com.cn",children:"zoho.com.cn"}),e.jsx("option",{value:"in",children:"zoho.in"}),e.jsx("option",{value:"com.au",children:"zoho.com.au"})]}),e.jsx("div",{style:{color:"red"},children:o.dataCenter}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Homepage URL:","bit-integrations")})}),e.jsx(A,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",setSnackbar:l,readOnly:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(A,{value:R||`${j.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",setSnackbar:l,readOnly:r}),e.jsxs("small",{className:"d-blk mt-5",children:[s("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:`https://api-console.zoho.${(t==null?void 0:t.dataCenter)||"com"}/`,target:"_blank",rel:"noreferrer",children:s("Zoho API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientId",value:t.clientId,type:"text",placeholder:s("client ID...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red"},children:o.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:s("client Secret...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red"},children:o.clientSecret}),!r&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>$("zohoBigin","zbigin",T,t,i,b,L,x,l,j),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:d||u,children:[d?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),u&&e.jsx(B,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:Z,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!d,children:[s("Next","bit-integrations"),e.jsx(_,{className:"ml-1 rev-icn"})]})]})]})}export{X as default};
