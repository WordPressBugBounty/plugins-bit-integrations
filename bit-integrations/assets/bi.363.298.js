var N=Object.defineProperty,w=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var f=(s,e,a)=>e in s?N(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,g=(s,e)=>{for(var a in e||(e={}))_.call(e,a)&&f(s,a,e[a]);if(u)for(var a of u(e))y.call(e,a)&&f(s,a,e[a]);return s},S=(s,e)=>w(s,G(e));import{u as A,o as P,r as c,j as o}from"./main-920.js";import"./bi.761.437.js";import{B as E}from"./bi.306.698.js";import{c as B,_ as x}from"./bi.247.0.js";import{S as F}from"./bi.970.13.js";import{S as L}from"./bi.319.923.js";import{I as R,s as T}from"./bi.658.3.js";import{G as q,a as D,h as M,c as z}from"./bi.504.696.js";import"./bi.140.9.js";import"./bi.941.11.js";import"./bi.706.14.js";import"./bi.502.697.js";import"./bi.722.674.js";import"./bi.149.675.js";import"./bi.815.699.js";import"./bi.898.700.js";import"./bi.981.701.js";function ne({formFields:s,setFlow:e,flow:a,allIntegURL:I}){const b=A(),{formID:l}=P(),[p,m]=c.useState(!1),[n,d]=c.useState(1),[j,i]=c.useState({show:!1}),[t,r]=c.useState({name:"Google Sheet",type:"Google Sheet",clientId:"",clientSecret:"",spreadsheetId:"",worksheetName:"",field_map:[{formField:"",googleSheetField:""}],header:"ROWS",headerRow:"A1",actions:{}});c.useEffect(()=>{t.oneClickAuthCredentials===void 0&&B(null,"get/credentials",{actionName:"googleSheet"},"Get").then(C=>{r(v=>S(g({},v),{oneClickAuthCredentials:C.data}))})},[]);const k=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!z(t)){i({show:!0,msg:x("Please map fields to continue.","bit-integrations")});return}t.spreadsheetId!==""&&t.worksheetName!==""&&t.field_map.length>0&&d(3)};return o.jsxs("div",{children:[o.jsx(F,{snack:j,setSnackbar:i}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(L,{step:3,active:n})}),o.jsx(q,{formID:l,sheetConf:t,setSheetConf:r,step:n,setstep:d,setSnackbar:i,isLoading:p,setIsLoading:m}),o.jsxs("div",{className:"btcd-stp-page",style:{width:n===2&&900,height:n===2&&"auto"},children:[o.jsx(D,{formID:l,formFields:s,handleInput:h=>M(h,t,r,l,m,i),sheetConf:t,setSheetConf:r,isLoading:p,setIsLoading:m,setSnackbar:i}),o.jsxs("button",{onClick:()=>k(),disabled:!t.spreadsheetId||!t.worksheetName||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[x("Next","bit-integrations"),o.jsx(E,{className:"ml-1 rev-icn"})]})]}),o.jsx(R,{step:n,saveConfig:()=>T({flow:a,setFlow:e,allIntegURL:I,conf:t,navigate:b,setIsLoading:m,setSnackbar:i}),isLoading:p,dataConf:t,setDataConf:r,formFields:s})]})}export{ne as default};
