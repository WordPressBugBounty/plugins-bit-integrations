var L=Object.defineProperty;var j=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var N=(s,t,a)=>t in s?L(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,m=(s,t)=>{for(var a in t||(t={}))A.call(t,a)&&N(s,a,t[a]);if(j)for(var a of j(t))S.call(t,a)&&N(s,a,t[a]);return s};import{r as k,j as e}from"./main-920.js";import{B as T}from"./bi.306.698.js";import{_ as n}from"./bi.247.0.js";import{z as _}from"./bi.761.437.js";import{a as w,f as E}from"./bi.649.756.js";import{T as y,t as B}from"./bi.898.700.js";import"./bi.140.9.js";function K({formID:s,bitFormConf:t,setBitFormConf:a,step:p,setstep:v,isLoading:u,setIsLoading:h,setSnackbar:I,redirectLocation:D,isInfo:r}){const[l,z]=k.useState(!1),{bitForm:i}=B,[o,x]=k.useState({dataCenter:"",api_key:""}),f=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),v(2),E(t,a,h)},c=d=>{const b=m({},t),g=m({},o);g[d.target.name]="",b[d.target.name]=d.target.value,x(g),a(b)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:p===1&&900,height:p===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&e.jsx(y,{title:"Bit Form",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&e.jsx(y,{title:"Bit Form",docLink:i==null?void 0:i.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:t.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Your Domain Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"domainName",value:t.domainName,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"api_key",value:t.api_key,type:"text",placeholder:n("client ID...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.api_key}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.clientSecret}),!r&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>w(t,a,x,z,h),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||u,children:[l?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),u&&e.jsx(_,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:f,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[n("Next","bit-integrations"),e.jsx(T,{className:"ml-1 rev-icn"})]})]})]})}export{K as default};
