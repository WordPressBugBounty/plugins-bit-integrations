import{r as u,j as t}from"./main-288.js";import{B as N}from"./bi.684.706.js";import{_ as s,s as k,c as y}from"./bi.4.0.js";import{y as v,x as w}from"./bi.197.434.js";import{a as z,b as A}from"./bi.781.844.js";import{T as h,t as T}from"./bi.255.712.js";import"./bi.627.9.js";function F({formID:L,mailMintConf:i,setMailMintConf:o,step:c,setStep:d,isLoading:l,setIsLoading:n,setSnackbar:p}){const[r,b]=u.useState(!1),[x,g]=u.useState(!1),{mailMint:e}=T,f=()=>{n("auth"),y({},"mailmint_authorize").then(a=>{a!=null&&a.success&&(b(!0),p({show:!0,msg:s("Connected with Mail Mint Successfully","bit-integrations")})),n(!1),g(!0),z(i,o,n),A(i,o,n)})},j=a=>{const m=w(i);m[a.target.name]=a.target.value,o(m)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:c===1&&900,height:c===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(h,{title:"Mail Mint",youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(h,{title:"Mail Mint",docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:i.name,type:"text",placeholder:s("Integration Name...","bit-integrations")}),l==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(v,{size:25,clr:"#022217",className:"mr-2"}),s("Checking if Mail Mint is active!!!","bit-integrations")]}),x&&!r&&!l&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),k(s("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"Mail Mint")]}),!r&&t.jsx("button",{onClick:f,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:s("Connect","bit-integrations")}),r&&t.jsxs("button",{onClick:()=>d(2),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!r,children:[s("Next","bit-integrations"),t.jsx(N,{className:"ml-1 rev-icn"})]})]})}export{F as default};
