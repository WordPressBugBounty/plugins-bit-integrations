import{r as a,j as t}from"./main-80.js";import{B as N}from"./bi.29.687.js";import{_ as s,L as k,p as A,b as y,z as L}from"./bi.433.0.js";import{T as m,t as v}from"./bi.717.703.js";function I({academyLmsConf:o,setAcademyLmsConf:d,step:r,setStep:h,setSnackbar:b}){const{academyLms:e}=v,[n,p]=a.useState(!1),[c,l]=a.useState(!1),[g,x]=a.useState(!1),f=()=>{l("auth"),y({},"academy_lms_authorize").then(i=>{i!=null&&i.success&&(p(!0),b({show:!0,msg:s("Connected with Academy Lms Successfully","bit-integrations")})),l(!1),x(!0)})},j=i=>{const u=L(o);u[i.target.name]=i.target.value,d(u)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:r===1&&900,height:r===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(m,{title:"Academy LMS",youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(m,{title:"Academy LMS",docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:o.name,type:"text",placeholder:s("Integration Name...","bit-integrations")}),c==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(k,{size:25,clr:"#022217",className:"mr-2"}),s("Checking if Academy Lms is active!!!","bit-integrations")]}),g&&!n&&!c&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),A(s("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"Academy Lms")]}),!n&&t.jsx("button",{onClick:f,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:s("Connect","bit-integrations")}),n&&t.jsxs("button",{onClick:()=>h(2),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!n,children:[s("Next","bit-integrations"),t.jsx(N,{className:"ml-1 rev-icn"})]})]})}export{I as default};
