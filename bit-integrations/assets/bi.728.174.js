var S=Object.defineProperty;var N=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var y=(s,t,r)=>t in s?S(s,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[t]=r,h=(s,t)=>{for(var r in t||(t={}))Z.call(t,r)&&y(s,r,t[r]);if(N)for(var r of N(t))I.call(t,r)&&y(s,r,t[r]);return s};import{r as k,f as _,j as e}from"./main-263.js";import{e as C,_ as i}from"./bi.924.0.js";import{a1 as T,y as D}from"./bi.361.434.js";import{r as P}from"./bi.654.676.js";import{B as $}from"./bi.638.705.js";import{k as B}from"./bi.317.3.js";import{T as w,t as U}from"./bi.372.711.js";import"./bi.402.9.js";import"./bi.428.13.js";import"./bi.929.11.js";import"./bi.686.14.js";function X({formID:s,campaignsConf:t,setCampaignsConf:r,step:b,setstep:A,isLoading:u,setIsLoading:x,setSnackbar:a,redirectLocation:E,isInfo:l}){const[d,z]=k.useState(!1),[o,p]=k.useState({dataCenter:"",clientId:"",clientSecret:""}),j=_(C),L="ZohoCampaigns.contact.READ,ZohoCampaigns.contact.CREATE,ZohoCampaigns.contact.UPDATE",{zohoCampaigns:n}=U,R=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),A(2),P(s,t,r,x,a)},c=m=>{const v=h({},t),g=h({},o);g[m.target.name]="",v[m.target.name]=m.target.value,p(g),r(v)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&e.jsx(w,{title:"Zoho Campaigns",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&e.jsx(w,{title:"Zoho Campaigns",docLink:n==null?void 0:n.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Data Center:","bit-integrations")})}),e.jsxs("select",{onChange:c,name:"dataCenter",value:t.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:l,children:[e.jsx("option",{value:"",children:i("--Select a data center--","bit-integrations")}),e.jsx("option",{value:"com",children:"zoho.com"}),e.jsx("option",{value:"eu",children:"zoho.eu"}),e.jsx("option",{value:"com.cn",children:"zoho.com.cn"}),e.jsx("option",{value:"in",children:"zoho.in"}),e.jsx("option",{value:"com.au",children:"zoho.com.au"})]}),e.jsx("div",{style:{color:"red"},children:o.dataCenter}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Homepage URL:","bit-integrations")})}),e.jsx(T,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",setSnackbar:a,readOnly:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(T,{value:E||`${j.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",setSnackbar:a,readOnly:l}),e.jsxs("small",{className:"d-blk mt-5",children:[i("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:`https://api-console.zoho.${(t==null?void 0:t.dataCenter)||"com"}/`,target:"_blank",rel:"noreferrer",children:i("Zoho API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientId",value:t.clientId,type:"text",placeholder:i("client ID...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red"},children:o.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:i("client Secret...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red"},children:o.clientSecret}),!l&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>B("zohoCampaigns","zcampaigns",L,t,r,p,z,x,a,j),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:d||u,children:[d?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),u&&e.jsx(D,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:R,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!d,children:[i("Next","bit-integrations"),e.jsx($,{className:"ml-1 rev-icn"})]})]})]})}export{X as default};
