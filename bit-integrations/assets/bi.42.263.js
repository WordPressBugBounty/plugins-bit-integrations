var A=Object.defineProperty;var g=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var x=(i,e,s)=>e in i?A(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,u=(i,e)=>{for(var s in e||(e={}))R.call(e,s)&&x(i,s,e[s]);if(g)for(var s of g(e))T.call(e,s)&&x(i,s,e[s]);return i};import{r,j as t}from"./main-165.js";import{_ as a,L as p,b as C}from"./bi.312.95.js";import{B as E}from"./bi.430.769.js";import{T as j,t as _}from"./bi.40.785.js";function H({formID:i,fluentCrmConf:e,setFluentCrmConf:s,step:d,nextPage:f,setSnackbar:N,isInfo:k}){const[c,L]=r.useState(!1),[y,F]=r.useState({integrationName:""}),[M,S]=r.useState(!1),[l,m]=r.useState(!1),{fluentCrm:n}=_,[v,z]=r.useState(!0);r.useEffect(()=>()=>{z(!1)},[]);const I=()=>{m("auth"),C({},"fluent_crm_authorize").then(o=>{v&&(o!=null&&o.success&&(L(!0),N({show:!0,msg:a("Connected Successfully","bit-integrations")})),S(!0),m(!1))})},w=o=>{const h=u({},e),b=u({},y);b[o.target.name]="",h[o.target.name]=o.target.value,F(b),s(h)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"btcd-stp-page",style:{width:d===1&&900,height:d===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(j,{title:"FluentCRM",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(j,{title:"FluentCRM",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:w,name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:k}),l==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(p,{size:25,clr:"#022217",className:"mr-2"}),a("Checking if Fluent CRM is active!!!","bit-integrations")]}),M&&!c&&!l&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),a("Please! First Install Fluent CRM Plugins","bit-integrations")]}),t.jsxs("button",{onClick:I,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||l,children:[c?a("Connected ✔","bit-integrations"):a("Connect to Fluent CRM","bit-integrations"),l&&t.jsx(p,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>f(2),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[a("Next","bit-integrations"),t.jsx(E,{className:"ml-1 rev-icn"})]})]})})}export{H as default};
