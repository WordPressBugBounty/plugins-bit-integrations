var I=Object.defineProperty;var b=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var x=(s,e,t)=>e in s?I(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,w=(s,e)=>{for(var t in e||(e={}))N.call(e,t)&&x(s,t,e[t]);if(b)for(var t of b(e))H.call(e,t)&&x(s,t,e[t]);return s};import{u as z,r,j as o}from"./main-777.js";import{_ as v,d as h}from"./bi.157.0.js";import{S as E}from"./bi.309.13.js";import{S as T}from"./bi.50.934.js";import{I as W,i as F}from"./bi.644.3.js";import L from"./bi.356.241.js";import{s as M,c as j}from"./bi.99.843.js";import{Z as P}from"./bi.333.844.js";import"./bi.463.440.js";import"./bi.681.9.js";import"./bi.677.11.js";import"./bi.181.14.js";import"./bi.805.709.js";import"./bi.444.683.js";import"./bi.343.684.js";function te({formFields:s,setFlow:e,flow:t,allIntegURL:m}){const p=z(),[C,l]=r.useState(!1),[i,f]=r.useState({auth:!1,header:!1,workbooks:!1,worksheets:!1,workSheetHeaders:!1}),[n,S]=r.useState(1),[Z,u]=r.useState({show:!1}),[a,d]=r.useState({name:"Zoho Sheet",type:"Zoho Sheet",dataCenter:"",clientId:"",clientSecret:"",field_map:[{formField:"",zohoSheetFormField:""}],workbooks:[],worksheets:[],workSheetHeaders:[],selectedWorkbook:"",selectedWorksheet:"",headerRow:1,actions:{}});r.useEffect(()=>{window.opener&&M("zohoSheet")},[]);const _=()=>{l(!0),F(t,e,m,a,p,"","",l).then(c=>{var k;c.success?(h.success((k=c.data)==null?void 0:k.msg),p(m)):h.error(c.data||c)})},y=g=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!j(a)){h.error(v("Please map mandatory workSheetHeaders","bit-integrations"));return}a.field_map.length>0&&S(g)};return o.jsxs("div",{children:[o.jsx(E,{snack:Z,setSnackbar:u}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(T,{step:3,active:n})}),o.jsx(L,{zohoSheetConf:a,setZohoSheetConf:d,step:n,setStep:S,loading:i,setLoading:f,setSnackbar:u}),o.jsxs("div",{className:"btcd-stp-page",style:w({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(P,{formFields:s,zohoSheetConf:a,setZohoSheetConf:d,loading:i,setLoading:f}),i.workSheetHeaders&&a.selectedWorksheet&&o.jsxs("button",{onClick:()=>y(3),disabled:!j(a),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[v("Next","bit-integrations"),"  ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),i.workSheetHeaders&&a.selectedWorksheet&&o.jsx(W,{step:n,saveConfig:()=>_(),isLoading:C,dataConf:a,setDataConf:d,formFields:s})]})}export{te as default};
