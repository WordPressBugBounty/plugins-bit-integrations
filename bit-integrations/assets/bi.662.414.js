import{u as h,o as j,r as o,j as s}from"./main-252.js";import"./bi.269.440.js";import{S}from"./bi.588.13.js";import{S as b}from"./bi.465.934.js";import{i as k}from"./bi.163.3.js";import v from"./bi.511.185.js";import{W as y}from"./bi.571.722.js";import{T as r,t as w}from"./bi.41.709.js";import"./bi.63.0.js";import"./bi.456.9.js";import"./bi.494.11.js";import"./bi.275.14.js";import"./bi.122.707.js";function q({formFields:m,setFlow:n,flow:c,allIntegURL:p}){const u=h(),{formID:d}=j(),[e,l]=o.useState(1),[x,a]=o.useState({show:!1}),[f,g]=o.useState(!1),{thriveAutomatorLinks:t}=w,[i,T]=o.useState({name:"ThriveAutomator Web Hooks",type:"ThriveAutomator",method:"POST",url:""});return s.jsxs("div",{children:[s.jsx(S,{snack:x,setSnackbar:a}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(b,{step:2,active:e})}),s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&1100,height:e===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(r,{title:"Thrive Automator",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(r,{title:"Thrive Automator",docLink:t==null?void 0:t.docLink}),s.jsx(v,{formID:d,formFields:m,webHooks:i,setWebHooks:T,step:e,setStep:l,setSnackbar:a,create:!0})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&"100%",height:e===2&&"auto"},children:s.jsx(y,{step:e,saveConfig:()=>k(c,n,p,i,u,"","",g),isLoading:f})})]})}export{q as default};
