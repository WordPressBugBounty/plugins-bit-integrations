import{u as f,l as j,r as o,j as e}from"./main-579.js";import{d as b,F as S}from"./bi.919.15.js";import{S as I}from"./bi.655.902.js";import v from"./bi.91.182.js";import{W as w}from"./bi.949.696.js";import{T as i,t as T}from"./bi.339.713.js";import"./bi.367.697.js";function E({formFields:n,setFlow:c,flow:m,allIntegURL:u}){const p=f(),{formID:d}=j(),[s,l]=o.useState(1),[x,a]=o.useState({show:!1}),[g,h]=o.useState(!1),{integromatLinks:t}=T,[r,k]=o.useState({name:"Make(Integromat) Web Hooks",type:"Make(Integromat)",method:"POST",url:"",apiConsole:"https://www.integromat.com/hooks/"});return e.jsxs("div",{children:[e.jsx(b,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(I,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(i,{title:"Make (Integromat)",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(i,{title:"Make (Integromat)",docLink:t==null?void 0:t.docLink}),e.jsx(v,{formID:d,formFields:n,webHooks:r,setWebHooks:k,step:s,setStep:l,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(w,{step:s,saveConfig:()=>S(m,c,u,r,p,"","",h),isLoading:g})})]})}export{E as default};