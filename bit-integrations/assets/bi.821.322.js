var A=Object.defineProperty;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var g=(e,i,a)=>i in e?A(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,m=(e,i)=>{for(var a in i||(i={}))L.call(i,a)&&g(e,a,i[a]);if(x)for(var a of x(i))_.call(i,a)&&g(e,a,i[a]);return e};import{r as j,j as t}from"./main-165.js";import{_ as r,L as I}from"./bi.312.95.js";import{z as w}from"./bi.912.901.js";import{T as y,t as P}from"./bi.40.785.js";function G({zendeskConf:e,setZendeskConf:i,step:a,setStep:N,loading:n,setLoading:T,isInfo:l}){const[o,k]=j.useState(!1),[u,b]=j.useState({api_key:""}),{zendesk:s}=P,v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,N(2)},d=c=>{const p=m({},e),h=m({},u);h[c.target.name]="",p[c.target.name]=c.target.value,b(h),i(p)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(y,{title:"Zendesk",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(y,{title:"Zendesk",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"api_key",value:e.api_key,type:"text",placeholder:r("API Token...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:u.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[r("To Get API Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.futuresimple.com/settings/oauth",target:"_blank",rel:"noreferrer",children:r("Zendesk API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!l&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>w(e,i,b,k,n,T),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||n.auth,children:[o?r("Authorized ✔","bit-integrations"):r("Authorize","bit-integrations"),n.auth&&t.jsx(I,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:v,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[r("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{G as default};
