import{u as j,o as S,r as o,j as e}from"./main-425.js";import"./bi.900.437.js";import{S as b}from"./bi.273.13.js";import{S as v}from"./bi.346.924.js";import{i as k}from"./bi.25.3.js";import T from"./bi.283.184.js";import{W as y}from"./bi.579.714.js";import{T as r,t as w}from"./bi.775.701.js";import"./bi.107.0.js";import"./bi.814.9.js";import"./bi.563.11.js";import"./bi.783.14.js";import"./bi.810.699.js";function R({formFields:n,setFlow:c,flow:m,allIntegURL:p}){const u=j(),{formID:d}=S(),[s,l]=o.useState(1),[x,a]=o.useState({show:!1}),[f,g]=o.useState(!1),{konnectzITLinks:t}=w,[i,h]=o.useState({name:"konnectzIT Web Hooks",type:"konnectzIT",method:"POST",url:"",apiConsole:"https://app.konnectzit.com/konnect"});return e.jsxs("div",{children:[e.jsx(b,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(v,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(r,{title:"KonnectzIT",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(r,{title:"KonnectzIT",docLink:t==null?void 0:t.docLink}),e.jsx(T,{formID:d,formFields:n,webHooks:i,setWebHooks:h,step:s,setStep:l,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(y,{step:s,saveConfig:()=>k(m,c,p,i,u,"","",g),isLoading:f})})]})}export{R as default};
