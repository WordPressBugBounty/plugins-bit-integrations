var A=Object.defineProperty;var g=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var x=(n,e,s)=>e in n?A(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,u=(n,e)=>{for(var s in e||(e={}))R.call(e,s)&&x(n,s,e[s]);if(g)for(var s of g(e))T.call(e,s)&&x(n,s,e[s]);return n};import{r,j as t}from"./main-425.js";import{_ as a,c as C}from"./bi.107.0.js";import{z as p}from"./bi.900.437.js";import{B as E}from"./bi.810.699.js";import{T as f,t as _}from"./bi.775.701.js";import"./bi.814.9.js";function K({formID:n,fluentCrmConf:e,setFluentCrmConf:s,step:d,nextPage:j,setSnackbar:N,isInfo:k}){const[c,L]=r.useState(!1),[y,z]=r.useState({integrationName:""}),[F,M]=r.useState(!1),[l,m]=r.useState(!1),{fluentCrm:i}=_,[S,v]=r.useState(!0);r.useEffect(()=>()=>{v(!1)},[]);const I=()=>{m("auth"),C({},"fluent_crm_authorize").then(o=>{S&&(o!=null&&o.success&&(L(!0),N({show:!0,msg:a("Connected Successfully","bit-integrations")})),M(!0),m(!1))})},w=o=>{const h=u({},e),b=u({},y);b[o.target.name]="",h[o.target.name]=o.target.value,z(b),s(h)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"btcd-stp-page",style:{width:d===1&&900,height:d===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&t.jsx(f,{title:"FluentCRM",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&t.jsx(f,{title:"FluentCRM",docLink:i==null?void 0:i.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:w,name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:k}),l==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(p,{size:25,clr:"#022217",className:"mr-2"}),a("Checking if Fluent CRM is active!!!","bit-integrations")]}),F&&!c&&!l&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),a("Please! First Install Fluent CRM Plugins","bit-integrations")]}),t.jsxs("button",{onClick:I,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||l,children:[c?a("Connected ✔","bit-integrations"):a("Connect to Fluent CRM","bit-integrations"),l&&t.jsx(p,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>j(2),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[a("Next","bit-integrations"),t.jsx(E,{className:"ml-1 rev-icn"})]})]})})}export{K as default};
