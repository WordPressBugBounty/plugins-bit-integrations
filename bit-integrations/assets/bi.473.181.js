var M=Object.defineProperty;var g=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var p=(a,s,e)=>s in a?M(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,u=(a,s)=>{for(var e in s||(s={}))w.call(s,e)&&p(a,e,s[e]);if(g)for(var e of g(s))T.call(s,e)&&p(a,e,s[e]);return a};import{r as l,j as t}from"./main-586.js";import{_ as n,c as _}from"./bi.612.0.js";import{z as x}from"./bi.960.440.js";import{B as C}from"./bi.313.731.js";import{T as f,t as E}from"./bi.453.737.js";import"./bi.175.9.js";function J({formID:a,mailPoetConf:s,setMailPoetConf:e,step:d,nextPage:j,setSnackbar:N,isInfo:k}){const[o,z]=l.useState(!1),[L,y]=l.useState({integrationName:""}),[A,v]=l.useState(!1),[c,m]=l.useState(!1),{mailPoet:i}=E,S=()=>{m("auth"),_({},"mail_poet_authorize").then(r=>{r!=null&&r.success&&(z(!0),N({show:!0,msg:n("Authorized Successfully","bit-integrations")})),v(!0),m(!1)})},I=r=>{const h=u({},s),b=u({},L);b[r.target.name]="",h[r.target.name]=r.target.value,y(b),e(h)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:d===1&&900,height:d===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&t.jsx(f,{title:"MailPoet",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&t.jsx(f,{title:"MailPoet",docLink:i==null?void 0:i.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:I,name:"name",value:s.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:k}),c==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(x,{size:25,clr:"#022217",className:"mr-2"}),n("Checking if MailPoet is active!!!","bit-integrations")]}),A&&!o&&!c&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),n("Please! First Install Mailpoet Plugins","bit-integrations")]}),t.jsxs("button",{onClick:S,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||c,children:[o?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),c&&t.jsx(x,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>j(2),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[n("Next","bit-integrations"),t.jsx(C,{className:"ml-1 rev-icn"})]})]})}export{J as default};
