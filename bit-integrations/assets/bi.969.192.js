import{r as c,j as t}from"./main-794.js";import{B as k}from"./bi.944.743.js";import{_ as i,s as y,c as L}from"./bi.828.0.js";import{z as v,y as w}from"./bi.266.440.js";import{g as z}from"./bi.146.803.js";import{T as d,t as I}from"./bi.510.749.js";import"./bi.685.9.js";function M({formID:S,restrictConf:n,setRestrictConf:l,step:r,setStep:h,setSnackbar:p}){const[a,g]=c.useState(!1),[m,o]=c.useState(!1),[b,x]=c.useState(!1),{restrictContent:e}=I,f=()=>{o("auth"),L({},"restrict_authorize").then(s=>{s!=null&&s.success&&(g(!0),p({show:!0,msg:i("Connected with Restrict Content Successfully","bit-integrations")})),o(!1),x(!0)})},j=s=>{const u=w(n);u[s.target.name]=s.target.value,l(u)},N=()=>{z(n,l,o),h(2)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:r===1&&900,height:r===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(d,{title:"Restrict Content",youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(d,{title:"Restrict Content",docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:n.name,type:"text",placeholder:i("Integration Name...","bit-integrations")}),m==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(v,{size:25,clr:"#022217",className:"mr-2"}),"Checking if restrict content is active!!!"]}),b&&!a&&!m&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),y(i("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"RestrictContent")]}),!a&&t.jsx("button",{onClick:f,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:i("Connect","bit-integrations")}),a&&t.jsxs("button",{onClick:()=>N(),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!a,children:[i("Next","bit-integrations"),t.jsx(k,{className:"ml-1 rev-icn"})]})]})}export{M as default};
