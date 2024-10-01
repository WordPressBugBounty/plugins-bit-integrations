var T=Object.defineProperty;var j=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var L=(a,n,s)=>n in a?T(a,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[n]=s,S=(a,n)=>{for(var s in n||(n={}))N.call(n,s)&&L(a,s,n[s]);if(j)for(var s of j(n))k.call(n,s)&&L(a,s,n[s]);return a};import{r as d,j as t,u as y}from"./main-830.js";import{_ as u,L as C,p as w,b as I,z as M,d as z,I as A,s as _}from"./bi.597.15.js";import{S as B}from"./bi.963.902.js";import{B as E}from"./bi.910.697.js";import{T as v,t as D}from"./bi.972.713.js";import{T as F,h as H}from"./bi.783.702.js";function P({tutorlmsConf:a,setTutorlmsConf:n,step:s,setStep:g,setSnackbar:b}){const[i,r]=d.useState(!1),[o,p]=d.useState(!1),[x,l]=d.useState(!1),{tutorlms:e}=D,m=()=>{p("auth"),I({},"tutor_authorize").then(c=>{c!=null&&c.success&&(r(!0),b({show:!0,msg:u("Connected with Tutor LMS Successfully","bit-integrations")})),p(!1),l(!0)})},f=c=>{const h=M(a);h[c.target.name]=c.target.value,n(h)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(v,{title:"Tutor LMS",youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(v,{title:"Tutor LMS",docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:u("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:f,name:"name",value:a.name,type:"text",placeholder:u("Integration Name...","bit-integrations")}),o==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(C,{size:25,clr:"#022217",className:"mr-2"}),"Checking if Tutor LMS is active!!!"]}),x&&!i&&!o&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),w(u("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"Tutor LMS")]}),!i&&t.jsx("button",{onClick:m,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:u("Connect","bit-integrations")}),i&&t.jsxs("button",{onClick:()=>g(2),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!i,children:[u("Next","bit-integrations"),t.jsx(E,{className:"ml-1 rev-icn"})]})]})}function Q({formFields:a,setFlow:n,flow:s,allIntegURL:g}){const b=y(),[i,r]=d.useState(!1),[o,p]=d.useState(1),[x,l]=d.useState({show:!1}),[e,m]=d.useState({name:"Tutor LMS",type:"Tutor Lms",field_map:[{formField:"",tutorField:""}],actions:{},actionData:{}}),f=()=>{r(!0),_({flow:s,setFlow:n,allIntegURL:g,conf:e,navigate:b,setIsLoading:r,setSnackbar:l})},c=h=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),p(h)};return t.jsxs("div",{children:[t.jsx(z,{snack:x,setSnackbar:l}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(B,{step:3,active:o})}),t.jsx(P,{tutorlmsConf:e,setTutorlmsConf:m,step:o,setStep:p,isLoading:i,setIsLoading:r,setSnackbar:l}),t.jsxs("div",{className:"btcd-stp-page",style:S({},o===2&&{width:900,height:"auto",minHeight:o===2&&"260px",overflow:"visible"}),children:[t.jsx(F,{formFields:a,handleInput:h=>H(h,e,m,r,l),tutorlmsConf:e,setTutorlmsConf:m,isLoading:i,setIsLoading:r,setSnackbar:l}),t.jsxs("button",{onClick:()=>c(3),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[u("Next","bit-integrations"),"  ",t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(A,{step:o,saveConfig:()=>f(),isLoading:i,dataConf:e,setDataConf:m,formFields:a})]})}export{Q as default};
