import{u as b,r as i,j as t}from"./main-586.js";import"./bi.960.440.js";import{B as j}from"./bi.313.731.js";import{_ as p}from"./bi.612.0.js";import{S}from"./bi.733.13.js";import{S as I}from"./bi.692.945.js";import{I as v,s as M}from"./bi.993.3.js";import k from"./bi.728.195.js";import{s as C,h as w,c as N}from"./bi.237.755.js";import{M as y}from"./bi.54.756.js";import"./bi.175.9.js";import"./bi.980.11.js";import"./bi.520.14.js";import"./bi.453.737.js";import"./bi.546.692.js";import"./bi.203.693.js";function K({formFields:c,setFlow:l,flow:u,allIntegURL:d}){const f=b(),[r,o]=i.useState(!1),[a,m]=i.useState(1),[g,s]=i.useState({show:!1}),[e,n]=i.useState({name:"Mautic",type:"Mautic",clientId:"",clientSecret:"",baseUrl:"",field_map:[{formField:"",mauticField:""}],actions:{}});i.useEffect(()=>{window.opener&&C("mautic")},[]);const h=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!N(e)){s({show:!0,msg:p("Please map fields to continue.","bit-integrations")});return}e.listId!==""&&m(3)};return t.jsxs("div",{children:[t.jsx(S,{snack:g,setSnackbar:s}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(I,{step:3,active:a})}),t.jsx(k,{mauticConf:e,setMauticConf:n,step:a,setstep:m,isLoading:r,setIsLoading:o,setSnackbar:s}),t.jsxs("div",{className:"btcd-stp-page",style:{width:a===2&&900,height:a===2&&"auto"},children:[t.jsx(y,{formFields:c,handleInput:x=>w(x,e,n,o,s),mauticConf:e,setMauticConf:n,isLoading:r,setIsLoading:o,setSnackbar:s}),t.jsxs("button",{onClick:()=>h(),disabled:e.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[p("Next","bit-integrations"),t.jsx(j,{className:"ml-1 rev-icn"})]})]}),t.jsx(v,{step:a,saveConfig:()=>M({flow:u,setFlow:l,allIntegURL:d,navigate:f,conf:e,setIsLoading:o,setSnackbar:s}),isLoading:r,dataConf:e,setDataConf:n,formFields:c})]})}export{K as default};
