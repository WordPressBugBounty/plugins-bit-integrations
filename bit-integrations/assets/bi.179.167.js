var S=Object.defineProperty;var N=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var y=(n,t,s)=>t in n?S(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,h=(n,t)=>{for(var s in t||(t={}))Z.call(t,s)&&y(n,s,t[s]);if(N)for(var s of N(t))_.call(t,s)&&y(n,s,t[s]);return n};import{r as k,f as I,j as e}from"./main-494.js";import{e as C,_ as i}from"./bi.185.0.js";import{a1 as w,z as $}from"./bi.23.437.js";import{g as D}from"./bi.254.685.js";import{l as P}from"./bi.104.3.js";import{T as L,t as O}from"./bi.136.701.js";import"./bi.170.9.js";import"./bi.107.13.js";import"./bi.617.11.js";import"./bi.890.14.js";function Q({formID:n,crmConf:t,setCrmConf:s,step:p,setstep:z,isLoading:b,setIsLoading:u,setSnackbar:r,redirectLocation:A,isInfo:l}){const[d,T]=k.useState(!1),[o,x]=k.useState({dataCenter:"",clientId:"",clientSecret:""}),j=I(C),{zohoCRM:a}=O,E="ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,ZohoCRM.users.Read,zohocrm.files.CREATE",R=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),z(2),!t.module&&D(n,t,s,u,r)},c=m=>{const g=h({},t),v=h({},o);v[m.target.name]="",g[m.target.name]=m.target.value,x(v),s(g)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:p===1&&900,height:p===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&e.jsx(L,{title:"Zoho CRM",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&e.jsx(L,{title:"Zoho CRM",docLink:a==null?void 0:a.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Data Center:","bit-integrations")})}),e.jsxs("select",{onChange:c,name:"dataCenter",value:t.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:l,children:[e.jsx("option",{value:"",children:i("--Select a data center--","bit-integrations")}),e.jsx("option",{value:"com",children:"zoho.com"}),e.jsx("option",{value:"eu",children:"zoho.eu"}),e.jsx("option",{value:"com.cn",children:"zoho.com.cn"}),e.jsx("option",{value:"in",children:"zoho.in"}),e.jsx("option",{value:"com.au",children:"zoho.com.au"})]}),e.jsx("div",{style:{color:"red"},children:o.dataCenter}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Homepage URL:","bit-integrations")})}),e.jsx(w,{value:`${window.location.origin}`,setSnackbar:r,className:"field-key-cpy w-6 ml-0",readOnly:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(w,{value:A||`${j.api.base}/redirect`,setSnackbar:r,className:"field-key-cpy w-6 ml-0",readOnly:l}),e.jsxs("small",{className:"d-blk mt-5",children:[i("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:`https://api-console.zoho.${(t==null?void 0:t.dataCenter)||"com"}/`,target:"_blank",rel:"noreferrer",children:i("Zoho API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientId",value:t.clientId,type:"text",placeholder:i("client ID...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red"},children:o.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:i("client Secret...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red"},children:o.clientSecret}),!l&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>P("zohoCRM","zcrm",E,t,s,x,T,u,r,j),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:d||b,children:[d?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),b&&e.jsx($,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:R,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!d,children:[i("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{Q as default};
