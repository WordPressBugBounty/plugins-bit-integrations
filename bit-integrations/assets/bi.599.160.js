var C=Object.defineProperty;var N=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var y=(n,t,s)=>t in n?C(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,h=(n,t)=>{for(var s in t||(t={}))S.call(t,s)&&y(n,s,t[s]);if(N)for(var s of N(t))I.call(t,s)&&y(n,s,t[s]);return n};import{r as A,i as _,j as e}from"./main-80.js";import{j as D,_ as i,Y as T,Z as P,L as $}from"./bi.433.0.js";import{B as k}from"./bi.29.687.js";import{r as B}from"./bi.946.668.js";import{T as w,t as U}from"./bi.717.703.js";function J({formID:n,marketingHubConf:t,setMarketingHubConf:s,step:p,setstep:E,isLoading:x,setIsLoading:j,setSnackbar:r,redirectLocation:L,isInfo:l}){const[d,Z]=A.useState(!1),[c,u]=A.useState({dataCenter:"",clientId:"",clientSecret:""}),b=_(D),z="ZohoMarketingHub.lead.READ,ZohoMarketingHub.lead.CREATE,ZohoMarketingHub.lead.UPDATE",{zohoMarketingHub:a}=U,R=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),E(2),B(n,t,s,j,r)},o=m=>{const g=h({},t),v=h({},c);v[m.target.name]="",g[m.target.name]=m.target.value,u(v),s(g)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:p===1&&900,height:p===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&e.jsx(w,{title:"Zoho Marketing Automation (Zoho Marketing Hub)",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&e.jsx(w,{title:"Zoho Marketing Automation (Zoho Marketing Hub)",docLink:a==null?void 0:a.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Data Center:","bit-integrations")})}),e.jsxs("select",{onChange:o,name:"dataCenter",value:t.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:l,children:[e.jsx("option",{value:"",children:i("--Select a data center--","bit-integrations")}),e.jsx("option",{value:"com",children:"zoho.com"}),e.jsx("option",{value:"eu",children:"zoho.eu"}),e.jsx("option",{value:"com.cn",children:"zoho.com.cn"}),e.jsx("option",{value:"in",children:"zoho.in"}),e.jsx("option",{value:"com.au",children:"zoho.com.au"})]}),e.jsx("div",{style:{color:"red"},children:c.dataCenter}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Homepage URL:","bit-integrations")})}),e.jsx(T,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:l,setSnackbar:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(T,{value:L||`${b.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",setSnackbar:r,readOnly:l}),e.jsxs("small",{className:"d-blk mt-5",children:[i("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:`https://api-console.zoho.${(t==null?void 0:t.dataCenter)||"com"}/`,target:"_blank",rel:"noreferrer",children:i("Zoho API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientId",value:t.clientId,type:"text",placeholder:i("client ID...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red"},children:c.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:i("client Secret...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red"},children:c.clientSecret}),!l&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>P("zohoMarkatingHub","zmarketingHub",z,t,s,u,Z,j,r,b),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:d||x,children:[d?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),x&&e.jsx($,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:R,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!d,children:[i("Next","bit-integrations"),e.jsx(k,{className:"ml-1 rev-icn"})]})]})]})}export{J as default};
