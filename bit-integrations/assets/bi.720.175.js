import{r as c,j as t}from"./main-80.js";import{B as N}from"./bi.29.687.js";import{_ as a,L as k,p as y,b as v,z as w}from"./bi.433.0.js";import{g as z}from"./bi.762.746.js";import{T as d,t as I}from"./bi.717.703.js";function C({formID:S,restrictConf:n,setRestrictConf:l,step:r,setStep:h,setSnackbar:p}){const[i,g]=c.useState(!1),[m,o]=c.useState(!1),[b,x]=c.useState(!1),{restrictContent:e}=I,f=()=>{o("auth"),v({},"restrict_authorize").then(s=>{s!=null&&s.success&&(g(!0),p({show:!0,msg:a("Connected with Restrict Content Successfully","bit-integrations")})),o(!1),x(!0)})},j=s=>{const u=w(n);u[s.target.name]=s.target.value,l(u)},L=()=>{z(n,l,o),h(2)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:r===1&&900,height:r===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(d,{title:"Restrict Content",youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(d,{title:"Restrict Content",docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:n.name,type:"text",placeholder:a("Integration Name...","bit-integrations")}),m==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(k,{size:25,clr:"#022217",className:"mr-2"}),"Checking if restrict content is active!!!"]}),b&&!i&&!m&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),y(a("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"RestrictContent")]}),!i&&t.jsx("button",{onClick:f,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:a("Connect","bit-integrations")}),i&&t.jsxs("button",{onClick:()=>L(),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!i,children:[a("Next","bit-integrations"),t.jsx(N,{className:"ml-1 rev-icn"})]})]})}export{C as default};
