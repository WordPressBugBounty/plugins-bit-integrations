import{r as u,j as t}from"./main-404.js";import{B as N}from"./bi.250.698.js";import{_ as s,s as k,c as y}from"./bi.51.0.js";import{z as v,y as w}from"./bi.613.437.js";import{T as m,t as z}from"./bi.116.700.js";import"./bi.964.9.js";function C({formID:L,propovoiceCrmConf:a,setPropovoiceCrmConf:h,step:o,setStep:d,isLoading:c,setIsLoading:r,setSnackbar:b}){const[n,x]=u.useState(!1),[g,p]=u.useState(!1),{propovoiceCrm:e}=z,f=()=>{r("auth"),y({},"propovoice_authorize").then(i=>{i!=null&&i.success&&(x(!0),b({show:!0,msg:s("Connected with Propovoice CRM Successfully","bit-integrations")})),r(!1),p(!0)})},j=i=>{const l=w(a);l[i.target.name]=i.target.value,h(l)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:o===1&&900,height:o===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(m,{title:"Propovoice CRM",youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(m,{title:"Propovoice CRM",docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:a.name,type:"text",placeholder:s("Integration Name...","bit-integrations")}),c==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(v,{size:25,clr:"#022217",className:"mr-2"}),s("Checking if Propovoice CRM is active!!!","bit-integrations")]}),g&&!n&&!c&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),k(s("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"Propovoice CRM")]}),!n&&t.jsx("button",{onClick:f,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:s("Connect","bit-integrations")}),n&&t.jsxs("button",{onClick:()=>d(2),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!n,children:[s("Next","bit-integrations"),t.jsx(N,{className:"ml-1 rev-icn"})]})]})}export{C as default};