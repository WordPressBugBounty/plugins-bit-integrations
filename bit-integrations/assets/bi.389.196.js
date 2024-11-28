var C=Object.defineProperty;var N=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var y=(s,t,a)=>t in s?C(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,p=(s,t)=>{for(var a in t||(t={}))L.call(t,a)&&y(s,a,t[a]);if(N)for(var a of N(t))S.call(t,a)&&y(s,a,t[a]);return s};import{r as E,f as I,j as e}from"./main-247.js";import{e as _,_ as i}from"./bi.456.0.js";import{B as P}from"./bi.50.710.js";import{a1 as A,y as U}from"./bi.393.437.js";import{k as Z}from"./bi.427.3.js";import{b as $}from"./bi.558.741.js";import{T,t as B}from"./bi.30.716.js";import"./bi.712.9.js";import"./bi.417.13.js";import"./bi.923.11.js";import"./bi.858.14.js";function X({formID:s,deskConf:t,setDeskConf:a,step:h,setstep:w,isLoading:b,setIsLoading:u,setSnackbar:l,redirectLocation:D,isInfo:r}){const[d,R]=E.useState(!1),[c,x]=E.useState({dataCenter:"",clientId:"",clientSecret:""}),z="Desk.settings.READ,Desk.basic.READ,Desk.search.READ,Desk.contacts.READ,Desk.contacts.CREATE,Desk.contacts.UPDATE,Desk.tickets.CREATE,Desk.tickets.UPDATE",j=I(_),{zohoDesk:n}=B,k=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),w(2),$(s,t,a,u,l)},o=m=>{const g=p({},t),v=p({},c);v[m.target.name]="",g[m.target.name]=m.target.value,x(v),a(g)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:h===1&&900,height:h===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&e.jsx(T,{title:"Zoho Desk",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&e.jsx(T,{title:"Zoho Desk",docLink:n==null?void 0:n.docLink}),e.jsx("div",{className:"wdt-200 d-in-b mt-3",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Data Center:","bit-integrations")})}),e.jsxs("select",{onChange:o,name:"dataCenter",value:t.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:r,children:[e.jsx("option",{value:"",children:i("--Select a data center--","bit-integrations")}),e.jsx("option",{value:"com",children:"zoho.com"}),e.jsx("option",{value:"eu",children:"zoho.eu"}),e.jsx("option",{value:"com.cn",children:"zoho.com.cn"}),e.jsx("option",{value:"in",children:"zoho.in"}),e.jsx("option",{value:"com.au",children:"zoho.com.au"})]}),e.jsx("div",{style:{color:"red"},children:c.dataCenter}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Homepage URL:","bit-integrations")})}),e.jsx(A,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",setSnackbar:l,readOnly:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(A,{value:D||`${j.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",setSnackbar:l,readOnly:r}),e.jsxs("small",{className:"d-blk mt-5",children:[i("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:`https://api-console.zoho.${(t==null?void 0:t.dataCenter)||"com"}/`,target:"_blank",rel:"noreferrer",children:i("Zoho API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientId",value:t.clientId,type:"text",placeholder:i("client ID...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red"},children:c.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:i("client Secret...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red"},children:c.clientSecret}),!r&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>Z("zohoDesk","zbigin",z,t,a,x,R,u,l,j),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:d||b,children:[d?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),b&&e.jsx(U,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:k,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!d,children:[i("Next","bit-integrations"),e.jsx(P,{className:"ml-1 rev-icn"})]})]})]})}export{X as default};