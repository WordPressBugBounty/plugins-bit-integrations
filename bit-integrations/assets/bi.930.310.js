import{u as j,l as b,r as o,j as e}from"./main-650.js";import{d as S,F as I}from"./bi.541.15.js";import{S as k}from"./bi.326.902.js";import v from"./bi.343.182.js";import{W as y}from"./bi.160.696.js";import{T as c,t as T}from"./bi.770.713.js";import"./bi.912.697.js";function E({formFields:r,setFlow:p,flow:u,allIntegURL:m}){const d=j(),{formID:l}=b(),[s,x]=o.useState(1),[f,n]=o.useState({show:!1}),[g,h]=o.useState(!1),{integratelyLinks:t}=T,[a,i]=o.useState({name:"Integrately Web Hooks",type:"Integrately",method:"POST",url:"",apiConsole:"https://app.integrately.com/"});return e.jsxs("div",{children:[e.jsx(S,{snack:f,setSnackbar:n}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(k,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(c,{title:"Integrately",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(c,{title:"Integrately",docLink:t==null?void 0:t.docLink}),e.jsx(v,{formID:l,formFields:r,webHooks:a,setWebHooks:i,step:s,setStep:x,setSnackbar:n,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(y,{step:s,saveConfig:()=>I(u,p,m,a,d,"","",h),isLoading:g,dataConf:a,setDataConf:i,formFields:r})})]})}export{E as default};
