var C=Object.defineProperty;var N=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var y=(n,t,s)=>t in n?C(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,h=(n,t)=>{for(var s in t||(t={}))I.call(t,s)&&y(n,s,t[s]);if(N)for(var s of N(t))Z.call(t,s)&&y(n,s,t[s]);return n};import{r as k,f as _,j as e}from"./main-270.js";import{e as $,_ as i}from"./bi.340.0.js";import{B}from"./bi.448.736.js";import{a2 as w,z as D}from"./bi.88.440.js";import{l as P}from"./bi.155.3.js";import{d as R}from"./bi.587.718.js";import{T as z,t as O}from"./bi.104.742.js";import"./bi.724.9.js";import"./bi.218.13.js";import"./bi.209.11.js";import"./bi.117.14.js";function X({formID:n,recruitConf:t,setRecruitConf:s,step:p,setstep:L,isLoading:b,setIsLoading:x,setSnackbar:o,redirectLocation:T,isInfo:l}){const[d,A]=k.useState(!1),[r,u]=k.useState({dataCenter:"",clientId:"",clientSecret:""}),j=_($),E="ZohoRecruit.users.ALL,ZohoRecruit.modules.all",{zohoRecruit:a}=O,S=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),L(2),R(n,t,s,x,o)},c=m=>{const g=h({},t),v=h({},r);v[m.target.name]="",g[m.target.name]=m.target.value,u(v),s(g)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:p===1&&900,height:p===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&e.jsx(z,{title:"Zoho Recruit",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&e.jsx(z,{title:"Zoho Recruit",docLink:a==null?void 0:a.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Data Center:","bit-integrations")})}),e.jsxs("select",{onChange:c,name:"dataCenter",value:t.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:l,children:[e.jsx("option",{value:"",children:i("--Select a data center--","bit-integrations")}),e.jsx("option",{value:"com",children:"zoho.com"}),e.jsx("option",{value:"eu",children:"zoho.eu"}),e.jsx("option",{value:"com.cn",children:"zoho.com.cn"}),e.jsx("option",{value:"in",children:"zoho.in"}),e.jsx("option",{value:"com.au",children:"zoho.com.au"})]}),e.jsx("div",{style:{color:"red"},children:r.dataCenter}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Homepage URL:","bit-integrations")})}),e.jsx(w,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",setSnackbar:o,readOnly:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(w,{value:T||`${j.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",setSnackbar:o,readOnly:l}),e.jsxs("small",{className:"d-blk mt-5",children:[i("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:`https://api-console.zoho.${(t==null?void 0:t.dataCenter)||"com"}/`,target:"_blank",rel:"noreferrer",children:i("Zoho API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientId",value:t.clientId,type:"text",placeholder:i("client ID...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red"},children:r.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:i("client Secret...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red"},children:r.clientSecret}),!l&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>P("zohoRecruit","zrecruit",E,t,s,u,A,x,o,j),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:d||b,children:[d?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),b&&e.jsx(D,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:S,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!d,children:[i("Next","bit-integrations"),e.jsx(B,{className:"ml-1 rev-icn"})]})]})]})}export{X as default};
