import{r as u,j as t}from"./main-650.js";import{B as N}from"./bi.912.697.js";import{_ as i,L as k,p as y,b as v,z as w}from"./bi.541.15.js";import{T as m,t as z}from"./bi.770.713.js";function M({formID:C,msLmsConf:a,setMsLmsConf:h,step:o,setStep:d,isLoading:r,setIsLoading:c,setSnackbar:p}){const[n,b]=u.useState(!1),[x,g]=u.useState(!1),{masterStudyLMS:e}=z,f=()=>{c("auth"),v({},"MasterStudyLms_authorize").then(s=>{s!=null&&s.success&&(b(!0),p({show:!0,msg:i("Connected with MasterStudyLMs Successfully","bit-integrations")})),c(!1),g(!0)})},j=s=>{const l=w(a);l[s.target.name]=s.target.value,h(l)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:o===1&&900,height:o===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(m,{title:"MasterStudy LMS",youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(m,{title:"MasterStudy LMS",docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:a.name,type:"text",placeholder:i("Integration Name...","bit-integrations")}),r==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(k,{size:25,clr:"#022217",className:"mr-2"}),"Checking if MasterStudyLms is active!!!"]}),x&&!n&&!r&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),y(i("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"MasterStudyLms")]}),!n&&t.jsx("button",{onClick:f,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:i("Connect","bit-integrations")}),n&&t.jsxs("button",{onClick:()=>d(2),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!n,children:[i("Next","bit-integrations"),t.jsx(N,{className:"ml-1 rev-icn"})]})]})}export{M as default};
