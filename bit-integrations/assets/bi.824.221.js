import{r as h,j as t}from"./main-777.js";import{B as y}from"./bi.361.707.js";import{_ as e,s as N,c as k}from"./bi.157.0.js";import{z as v,y as w}from"./bi.463.440.js";import{a as z,p as M}from"./bi.763.805.js";import{T as m,t as S}from"./bi.805.709.js";import"./bi.681.9.js";function P({formID:A,memberpressConf:s,setMemberpressConf:c,step:r,setStep:d,isLoading:l,setIsLoading:n,setSnackbar:p}){const[o,x]=h.useState(!1),[b,g]=h.useState(!1),{memberpress:i}=S,f=()=>{n("auth"),k({},"memberpress_authorize").then(a=>{a!=null&&a.success&&(x(!0),p({show:!0,msg:e("Connected with Memberpress Successfully","bit-integrations")})),n(!1),g(!0),z(s,c,n),M(s,c,n)})},j=a=>{const u=w(s);u[a.target.name]=a.target.value,c(u)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:r===1&&900,height:r===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&t.jsx(m,{title:"MemberPress",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&t.jsx(m,{title:"MemberPress",docLink:i==null?void 0:i.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:s.name,type:"text",placeholder:e("Integration Name...","bit-integrations")}),l==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(v,{size:25,clr:"#022217",className:"mr-2"}),"Checking if Memberpress is active!!!"]}),b&&!o&&!l&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),N(e("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"Memberpress")]}),!o&&t.jsx("button",{onClick:f,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:e("Connect","bit-integrations")}),o&&t.jsxs("button",{onClick:()=>d(2),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!o,children:[e("Next","bit-integrations"),t.jsx(y,{className:"ml-1 rev-icn"})]})]})}export{P as default};
