import{r as m,j as t}from"./main-615.js";import{B as N}from"./bi.560.697.js";import{_ as i,s as k,c as y}from"./bi.394.0.js";import{y as v,x as w}from"./bi.991.437.js";import{T as u,t as z}from"./bi.681.699.js";import"./bi.179.9.js";function _({formID:C,giveWpConf:n,setGiveWpConf:h,step:o,setStep:d,isLoading:r,setIsLoading:c,setSnackbar:p}){const[a,b]=m.useState(!1),[x,f]=m.useState(!1),{giveWp:e}=z,j=()=>{c("auth"),y({},"giveWp_authorize").then(s=>{s!=null&&s.success&&(b(!0),p({show:!0,msg:i("Connected with GiveWp Successfully","bit-integrations")})),c(!1),f(!0)})},g=s=>{const l=w(n);l[s.target.name]=s.target.value,h(l)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:o===1&&900,height:o===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(u,{title:"GiveWp",youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(u,{title:"GiveWp",docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:g,name:"name",value:n.name,type:"text",placeholder:i("Integration Name...","bit-integrations")}),r==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(v,{size:25,clr:"#022217",className:"mr-2"}),"Checking if GiveWp affiliate is active!!!"]}),x&&!a&&!r&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),k(i("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"GiveWp")]}),!a&&t.jsx("button",{onClick:j,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:i("Connect","bit-integrations")}),a&&t.jsxs("button",{onClick:()=>d(2),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!a,children:[i("Next","bit-integrations"),t.jsx(N,{className:"ml-1 rev-icn"})]})]})}export{_ as default};
