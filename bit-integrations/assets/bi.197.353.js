var P=Object.defineProperty;var y=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var j=(o,s,i)=>s in o?P(o,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[s]=i,N=(o,s)=>{for(var i in s||(s={}))T.call(s,i)&&j(o,i,s[i]);if(y)for(var i of y(s))G.call(s,i)&&j(o,i,s[i]);return o};import{r as d,j as t,u as I,o as L,f as R}from"./main-615.js";import{y as _,x as z}from"./bi.991.437.js";import{_ as a,s as B,c as D,e as F}from"./bi.394.0.js";import{S as E}from"./bi.700.13.js";import{S as M}from"./bi.440.922.js";import{I as q,s as H}from"./bi.819.3.js";import{G as $,h as J}from"./bi.254.779.js";import{B as K}from"./bi.560.697.js";import{T as A,t as O}from"./bi.681.699.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.178.673.js";import"./bi.985.674.js";function Q({formID:o,gamiPressConf:s,setGamiPressConf:i,step:u,setStep:g,isLoading:h,setIsLoading:b,setSnackbar:v}){const[r,p]=d.useState(!1),[l,f]=d.useState(!1),{gamiPress:n}=O,m=()=>{b("auth"),D({},"gamiPress_authorize").then(c=>{c!=null&&c.success&&(p(!0),v({show:!0,msg:a("Connected with GamiPress Successfully","bit-integrations")})),b(!1),f(!0)})},k=c=>{const e=z(s);e[c.target.name]=c.target.value,i(e)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:u===1&&900,height:u===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(A,{title:"GamiPress",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(A,{title:"GamiPress",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:k,name:"name",value:s.name,type:"text",placeholder:a("Integration Name...","bit-integrations")}),h==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(_,{size:25,clr:"#022217",className:"mr-2"}),"Checking if GamiPress is active!!!"]}),l&&!r&&!h&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),B(a("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"GamiPress")]}),!r&&t.jsx("button",{onClick:m,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:a("Connect","bit-integrations")}),r&&t.jsxs("button",{onClick:()=>g(2),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!r,children:[a("Next","bit-integrations"),t.jsx(K,{className:"ml-1 rev-icn"})]})]})}function le({formFields:o,setFlow:s,flow:i,allIntegURL:u,isInfo:g,edit:h}){const b=I(),{formID:v}=L();R(F);const[r,p]=d.useState(!1),[l,f]=d.useState(1),[n,m]=d.useState({show:!1}),k=[{key:"1",label:a("Award rank to the user","bit-integrations")},{key:"2",label:a("Award an achievement to the user","bit-integrations")},{key:"3",label:a("Award a points to the user","bit-integrations")},{key:"4",label:a("Revoke a rank form the user","bit-integrations")},{key:"5",label:a("Revoke an achievement form the user","bit-integrations")},{key:"6",label:a("Revoke points from the user","bit-integrations")}],c=[{key:"point",label:"Point",required:!0}],[e,x]=d.useState({name:"GamiPress",type:"GamiPress",mainAction:"",field_map:[{formField:"",gamiPressFormField:""}],pointFields:c,allActions:k,actions:{}}),w=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e.mainAction!==""&&f(3)};function S(){switch(e.mainAction){case"1":return e.selectedRank===void 0||e.selectedRank==="";case"2":return e.selectedAchievement===void 0||e.selectedAchievement==="";case"3":return e.selectedPointType===void 0||e.selectedPointType==="";case"4":return e.selectedRank===void 0||e.selectedRank==="";case"5":return e.selectedAchievement===void 0||e.selectedAchievement==="";case"6":return e.selectedPointType===void 0||e.selectedPointType==="";default:return!1}}return t.jsxs("div",{children:[t.jsx(E,{snack:n,setSnackbar:m}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(M,{step:3,active:l})}),t.jsx(Q,{formID:v,gamiPressConf:e,setGamiPressConf:x,step:l,setStep:f,isLoading:r,setIsLoading:p,setSnackbar:m}),t.jsxs("div",{className:"btcd-stp-page",style:N({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[t.jsx($,{formFields:o,handleInput:C=>J(C,e,x),gamiPressConf:e,setGamiPressConf:x,isLoading:r,setIsLoading:p,setSnackbar:m,allIntegURL:u,isInfo:g,edit:h}),t.jsxs("button",{onClick:()=>w(),disabled:!e.mainAction||r||S(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[a("Next","bit-integrations")," ",t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(q,{step:l,saveConfig:()=>H({flow:i,setFlow:s,allIntegURL:u,navigate:b,conf:e,setIsLoading:p,setSnackbar:m}),isLoading:r,dataConf:e,setDataConf:x,formFields:o})]})}export{le as default};
