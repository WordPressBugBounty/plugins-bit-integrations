import{r as h,j as t}from"./main-165.js";import{B as y}from"./bi.430.769.js";import{_ as i,L as N,p as k,b as v,z as w}from"./bi.312.95.js";import{a as z,p as M}from"./bi.662.853.js";import{T as m,t as S}from"./bi.40.785.js";function I({formID:A,memberpressConf:s,setMemberpressConf:c,step:l,setStep:d,isLoading:r,setIsLoading:n,setSnackbar:p}){const[o,b]=h.useState(!1),[x,g]=h.useState(!1),{memberpress:a}=S,f=()=>{n("auth"),v({},"memberpress_authorize").then(e=>{e!=null&&e.success&&(b(!0),p({show:!0,msg:i("Connected with Memberpress Successfully","bit-integrations")})),n(!1),g(!0),z(s,c,n),M(s,c,n)})},j=e=>{const u=w(s);u[e.target.name]=e.target.value,c(u)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:l===1&&900,height:l===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(m,{title:"MemberPress",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(m,{title:"MemberPress",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:s.name,type:"text",placeholder:i("Integration Name...","bit-integrations")}),r==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(N,{size:25,clr:"#022217",className:"mr-2"}),"Checking if Memberpress is active!!!"]}),x&&!o&&!r&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),k(i("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"Memberpress")]}),!o&&t.jsx("button",{onClick:f,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:i("Connect","bit-integrations")}),o&&t.jsxs("button",{onClick:()=>d(2),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!o,children:[i("Next","bit-integrations"),t.jsx(y,{className:"ml-1 rev-icn"})]})]})}export{I as default};
