import{u as j,l as b,r as o,j as e}from"./main-29.js";import{d as S,F as v}from"./bi.860.15.js";import{S as k}from"./bi.885.903.js";import T from"./bi.932.182.js";import{W as y}from"./bi.756.697.js";import{T as n,t as w}from"./bi.244.714.js";import"./bi.22.698.js";function E({formFields:r,setFlow:c,flow:p,allIntegURL:m}){const u=j(),{formID:d}=b(),[s,l]=o.useState(1),[x,a]=o.useState({show:!1}),[f,g]=o.useState(!1),{konnectzITLinks:t}=w,[i,h]=o.useState({name:"konnectzIT Web Hooks",type:"konnectzIT",method:"POST",url:"",apiConsole:"https://app.konnectzit.com/konnect"});return e.jsxs("div",{children:[e.jsx(S,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(k,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(n,{title:"KonnectzIT",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(n,{title:"KonnectzIT",docLink:t==null?void 0:t.docLink}),e.jsx(T,{formID:d,formFields:r,webHooks:i,setWebHooks:h,step:s,setStep:l,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(y,{step:s,saveConfig:()=>v(p,c,m,i,u,"","",g),isLoading:f})})]})}export{E as default};
