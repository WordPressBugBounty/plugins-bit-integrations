var w=Object.defineProperty;var j=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var y=(e,s,a)=>s in e?w(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,u=(e,s)=>{for(var a in s||(s={}))I.call(s,a)&&y(e,a,s[a]);if(j)for(var a of j(s))T.call(s,a)&&y(e,a,s[a]);return e};import{r as b,j as t}from"./main-34.js";import{B as f}from"./bi.886.697.js";import{_ as i,c as P}from"./bi.671.0.js";import{z as k}from"./bi.188.437.js";import{T as _,t as E}from"./bi.379.699.js";import"./bi.914.9.js";function q({sendyConf:e,setSendyConf:s,step:a,setstep:N,isInfo:l}){const[o,S]=b.useState(!1),[c,x]=b.useState({name:"",api_key:""}),[v,z]=b.useState(!1),[m,g]=b.useState(!1),{sendy:r}=E,A=()=>{const n=u({},e);if(!n.name||!n.api_key){x({name:n.name?"":i("Integration name can't be empty","bit-integrations"),api_key:n.api_key?"":i("API Key can't be empty","bit-integrations"),sendy_url:n.sendy_url?"":i("Sendy URL can't be empty","bit-integrations")});return}g("auth");const d={api_key:n.api_key,sendy_url:n.sendy_url};P(d,"sendy_authorize").then(p=>{p.success&&S(!0),z(!0),g(!1)})},h=n=>{const d=u({},e),p=u({},c);p[n.target.name]="",d[n.target.name]=n.target.value,x(p),s(d)},L=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),N(2)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&t.jsx(_,{title:"Sendy",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&t.jsx(_,{title:"Sendy",docLink:r==null?void 0:r.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"name",value:e==null?void 0:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.name}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"api_key",value:e==null?void 0:e.api_key,type:"text",placeholder:i("api Key...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.api_key}),t.jsxs("small",{className:"d-blk mt-5",children:[i("To get API , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.sendy.com/api-key",target:"_blank",rel:"noreferrer",children:i("Sendy API Console","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Sendy URL:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"sendy_url",value:e==null?void 0:e.sendy_url,type:"text",placeholder:i("Sendy URL...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.sendy_url}),m==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(k,{size:25,clr:"#022217",className:"mr-2"}),i("Checking API Key!!!","bit-integrations")]}),v&&!o&&!m&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),i("Sorry, Api key is invalid","bit-integrations")]}),!l&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:A,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||m,children:[o?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),m&&t.jsx(k,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>L(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[i("Next","bit-integrations"),t.jsx(f,{className:"ml-1 rev-icn"})]})]})]})}export{q as default};
