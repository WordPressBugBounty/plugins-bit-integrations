import{u as j,o as S,r as o,j as e}from"./main-404.js";import"./bi.613.437.js";import{S as b}from"./bi.896.13.js";import{S as I}from"./bi.53.923.js";import{i as k}from"./bi.488.3.js";import v from"./bi.337.184.js";import{W as y}from"./bi.938.713.js";import{T as p,t as T}from"./bi.116.700.js";import"./bi.51.0.js";import"./bi.964.9.js";import"./bi.484.11.js";import"./bi.565.14.js";import"./bi.250.698.js";function z({formFields:r,setFlow:m,flow:c,allIntegURL:u}){const d=j(),{formID:l}=S(),[s,f]=o.useState(1),[x,i]=o.useState({show:!1}),[g,h]=o.useState(!1),{integratelyLinks:t}=T,[a,n]=o.useState({name:"Integrately Web Hooks",type:"Integrately",method:"POST",url:"",apiConsole:"https://app.integrately.com/"});return e.jsxs("div",{children:[e.jsx(b,{snack:x,setSnackbar:i}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(I,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(p,{title:"Integrately",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(p,{title:"Integrately",docLink:t==null?void 0:t.docLink}),e.jsx(v,{formID:l,formFields:r,webHooks:a,setWebHooks:n,step:s,setStep:f,setSnackbar:i,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(y,{step:s,saveConfig:()=>k(c,m,u,a,d,"","",h),isLoading:g,dataConf:a,setDataConf:n,formFields:r})})]})}export{z as default};
