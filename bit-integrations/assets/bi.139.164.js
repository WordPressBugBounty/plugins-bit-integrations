import{r as m,j as t}from"./main-830.js";import{B as N}from"./bi.910.697.js";import{_ as s,L as k,p as y,b as v,z as w}from"./bi.597.15.js";import{T as u,t as z}from"./bi.972.713.js";function A({formID:L,paidMembershipProConf:a,setPaidMembershipProConf:h,step:o,setStep:d,isLoading:r,setIsLoading:c,setSnackbar:b}){const[n,x]=m.useState(!1),[g,p]=m.useState(!1),{paidMembershipPro:e}=z,f=()=>{c("auth"),v({},"paid_membership_pro_authorize").then(i=>{i!=null&&i.success&&(x(!0),b({show:!0,msg:s("Connected with Paid Membership Pro Successfully","bit-integrations")})),c(!1),p(!0)})},j=i=>{const l=w(a);l[i.target.name]=i.target.value,h(l)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:o===1&&900,height:o===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(u,{title:"Paid Memberships Pro",youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(u,{title:"Paid Memberships Pro",docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:a.name,type:"text",placeholder:s("Integration Name...","bit-integrations")}),r==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(k,{size:25,clr:"#022217",className:"mr-2"}),s("Checking if Paid Membership Pro is active!!!","bit-integrations")]}),g&&!n&&!r&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),y(s("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"Paid Membership Pro")]}),!n&&t.jsx("button",{onClick:f,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:s("Connect","bit-integrations")}),n&&t.jsxs("button",{onClick:()=>d(2),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!n,children:[s("Next","bit-integrations"),t.jsx(N,{className:"ml-1 rev-icn"})]})]})}export{A as default};
