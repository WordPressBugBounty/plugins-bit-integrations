import{u as I,l as j,r as a,j as t}from"./main-165.js";import{d as b,_ as d,I as k,s as w}from"./bi.312.95.js";import{B as v}from"./bi.430.769.js";import{S as N}from"./bi.354.971.js";import{s as C}from"./bi.411.756.js";import G from"./bi.721.255.js";import{h as _,d as y}from"./bi.88.754.js";import{G as E}from"./bi.75.755.js";import"./bi.40.785.js";import"./bi.953.732.js";import"./bi.422.733.js";function W({formFields:c,setFlow:p,flow:h,allIntegURL:f}){const g=I(),{formID:r}=j(),[l,n]=a.useState(!1),[o,m]=a.useState(1),[u,s]=a.useState({show:!1}),[e,i]=a.useState({name:"Google Sheet",type:"Google Sheet",clientId:"",clientSecret:"",spreadsheetId:"",worksheetName:"",field_map:[{formField:"",googleSheetField:""}],header:"ROWS",headerRow:"A1",actions:{}});a.useEffect(()=>{window.opener&&C("googleSheet")},[]);const S=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!y(e)){s({show:!0,msg:d("Please map fields to continue.","bit-integrations")});return}e.spreadsheetId!==""&&e.worksheetName!==""&&e.field_map.length>0&&m(3)};return t.jsxs("div",{children:[t.jsx(b,{snack:u,setSnackbar:s}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(N,{step:3,active:o})}),t.jsx(G,{formID:r,sheetConf:e,setSheetConf:i,step:o,setstep:m,setSnackbar:s,isLoading:l,setIsLoading:n}),t.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&900,height:o===2&&"auto"},children:[t.jsx(E,{formID:r,formFields:c,handleInput:x=>_(x,e,i,r,n,s),sheetConf:e,setSheetConf:i,isLoading:l,setIsLoading:n,setSnackbar:s}),t.jsxs("button",{onClick:()=>S(),disabled:!e.spreadsheetId||!e.worksheetName||e.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[d("Next","bit-integrations"),t.jsx(v,{className:"ml-1 rev-icn"})]})]}),t.jsx(k,{step:o,saveConfig:()=>w({flow:h,setFlow:p,allIntegURL:f,conf:e,navigate:g,setIsLoading:n,setSnackbar:s}),isLoading:l,dataConf:e,setDataConf:i,formFields:c})]})}export{W as default};
