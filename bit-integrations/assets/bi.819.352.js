var L=Object.defineProperty;var A=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var v=(n,i,s)=>i in n?L(n,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[i]=s,N=(n,i)=>{for(var s in i||(i={}))T.call(i,s)&&v(n,s,i[s]);if(A)for(var s of A(i))_.call(i,s)&&v(n,s,i[s]);return n};import{r as m,j as t,u as z,o as P,f as D}from"./main-623.js";import{z as F,y as q}from"./bi.1.443.js";import{_ as e,s as B,c as M,e as R}from"./bi.422.0.js";import{S as E}from"./bi.957.13.js";import{S as W}from"./bi.408.976.js";import{I as H,s as O}from"./bi.757.3.js";import{A as $,h as G,c as J}from"./bi.692.822.js";import{B as K}from"./bi.219.759.js";import{T as S,t as Q}from"./bi.971.765.js";import"./bi.331.9.js";import"./bi.727.11.js";import"./bi.218.14.js";import"./bi.220.720.js";import"./bi.890.721.js";function U({formID:n,affiliateConf:i,setAffiliateConf:s,step:u,setStep:k,isLoading:b,setIsLoading:p,setSnackbar:y}){const[o,f]=m.useState(!1),[d,g]=m.useState(!1),{affiliate:a}=Q,c=()=>{p("auth"),M({},"affiliate_authorize").then(l=>{l!=null&&l.success&&(f(!0),y({show:!0,msg:e("Connected with Affiliate Successfully","bit-integrations")})),p(!1),g(!0)})},j=l=>{const h=q(i);h[l.target.name]=l.target.value,s(h)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:u===1&&900,height:u===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(S,{title:"AffiliateWP",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(S,{title:"AffiliateWP",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:i.name,type:"text",placeholder:e("Integration Name...","bit-integrations")}),b==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(F,{size:25,clr:"#022217",className:"mr-2"}),"Checking if LearnDash is active!!!"]}),d&&!o&&!b&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),B(e("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"Affiliate plugin")]}),!o&&t.jsx("button",{onClick:c,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:e("Connect","bit-integrations")}),o&&t.jsxs("button",{onClick:()=>k(2),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!o,children:[e("Next","bit-integrations"),t.jsx(K,{className:"ml-1 rev-icn"})]})]})}function mt({formFields:n,setFlow:i,flow:s,allIntegURL:u,isInfo:k,edit:b}){const p=z(),{formID:y}=P();D(R);const[o,f]=m.useState(!1),[d,g]=m.useState(1),[a,c]=m.useState({show:!1}),j=[{key:"1",label:e("Create a referral for specific affiliate Id","bit-integrations")},{key:"2",label:e("Create a referral for the user","bit-integrations")}],l=[{key:"1",label:e("Paid","bit-integrations")},{key:"2",label:e("Unpaid","bit-integrations")},{key:"3",label:e("Pending","bit-integrations")},{key:"4",label:e("Reject","bit-integrations")}],h=[{key:"1",label:e("Sale","bit-integrations")},{key:"2",label:e("Opt-in","bit-integrations")},{key:"3",label:e("Lead","bit-integrations")}],C=[{key:"amount",label:e("Amount","bit-integrations"),required:!0},{key:"description",label:e("Description","bit-integrations"),required:!0},{key:"reference",label:e("Reference","bit-integrations"),required:!1},{key:"context",label:e("Context","bit-integrations"),required:!1}],[r,x]=m.useState({name:"Affiliate",type:"Affiliate",mainAction:"",affiliate_id:"",referralId:"",statusId:"",field_map:[{formField:"",affiliateFormField:""}],allReferralType:h,allStatus:l,allActions:j,createAffiliateFields:C,actions:{}}),I=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!J(r)){c({show:!0,msg:e("Please map fields to continue.","bit-integrations")});return}r.mainAction!==""&&g(3)};return t.jsxs("div",{children:[t.jsx(E,{snack:a,setSnackbar:c}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(W,{step:3,active:d})}),t.jsx(U,{formID:y,affiliateConf:r,setAffiliateConf:x,step:d,setStep:g,isLoading:o,setIsLoading:f,setSnackbar:c}),t.jsxs("div",{className:"btcd-stp-page",style:N({},d===2&&{width:900,height:"auto",overflow:"visible"}),children:[t.jsx($,{formFields:n,handleInput:w=>G(w,r,x),affiliateConf:r,setAffiliateConf:x,isLoading:o,setIsLoading:f,setSnackbar:c,allIntegURL:u,isInfo:k,edit:b}),t.jsxs("button",{onClick:()=>I(),disabled:!r.statusId||!r.referralId||o,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations")," ",t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(H,{step:d,saveConfig:()=>O({flow:s,setFlow:i,allIntegURL:u,navigate:p,conf:r,setIsLoading:f,setSnackbar:c}),isLoading:o,dataConf:r,setDataConf:x,formFields:n})]})}export{mt as default};
