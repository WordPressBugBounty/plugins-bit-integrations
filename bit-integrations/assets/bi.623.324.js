import{u as b,r as i,j as t}from"./main-692.js";import{d as j,_ as p,I,s as S}from"./bi.751.13.js";import{B as v}from"./bi.244.694.js";import{S as M}from"./bi.579.899.js";import k from"./bi.165.190.js";import{s as C,h as w,c as N}from"./bi.291.718.js";import{M as y}from"./bi.562.719.js";import"./bi.719.710.js";import"./bi.588.657.js";import"./bi.294.658.js";function D({formFields:r,setFlow:l,flow:u,allIntegURL:d}){const f=b(),[c,n]=i.useState(!1),[a,m]=i.useState(1),[g,s]=i.useState({show:!1}),[e,o]=i.useState({name:"Mautic",type:"Mautic",clientId:"",clientSecret:"",baseUrl:"",field_map:[{formField:"",mauticField:""}],actions:{}});i.useEffect(()=>{window.opener&&C("mautic")},[]);const h=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!N(e)){s({show:!0,msg:p("Please map fields to continue.","bit-integrations")});return}e.listId!==""&&m(3)};return t.jsxs("div",{children:[t.jsx(j,{snack:g,setSnackbar:s}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(M,{step:3,active:a})}),t.jsx(k,{mauticConf:e,setMauticConf:o,step:a,setstep:m,isLoading:c,setIsLoading:n,setSnackbar:s}),t.jsxs("div",{className:"btcd-stp-page",style:{width:a===2&&900,height:a===2&&"auto"},children:[t.jsx(y,{formFields:r,handleInput:x=>w(x,e,o,n,s),mauticConf:e,setMauticConf:o,isLoading:c,setIsLoading:n,setSnackbar:s}),t.jsxs("button",{onClick:()=>h(),disabled:e.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[p("Next","bit-integrations"),t.jsx(v,{className:"ml-1 rev-icn"})]})]}),t.jsx(I,{step:a,saveConfig:()=>S({flow:u,setFlow:l,allIntegURL:d,navigate:f,conf:e,setIsLoading:n,setSnackbar:s}),isLoading:c,dataConf:e,setDataConf:o,formFields:r})]})}export{D as default};
