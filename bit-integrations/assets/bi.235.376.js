var I=Object.defineProperty;var b=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var x=(s,e,t)=>e in s?I(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,w=(s,e)=>{for(var t in e||(e={}))N.call(e,t)&&x(s,t,e[t]);if(b)for(var t of b(e))H.call(e,t)&&x(s,t,e[t]);return s};import{u as z,r,j as o}from"./main-650.js";import{d as E,_ as v,I as F,F as T,c as h}from"./bi.541.15.js";import{S as W}from"./bi.326.902.js";import L from"./bi.509.238.js";import{s as M,c as j}from"./bi.491.819.js";import{Z as P}from"./bi.82.820.js";import"./bi.770.713.js";import"./bi.619.660.js";import"./bi.119.661.js";function V({formFields:s,setFlow:e,flow:t,allIntegURL:l}){const p=z(),[C,m]=r.useState(!1),[n,f]=r.useState({auth:!1,header:!1,workbooks:!1,worksheets:!1,workSheetHeaders:!1}),[i,S]=r.useState(1),[Z,u]=r.useState({show:!1}),[a,d]=r.useState({name:"Zoho Sheet",type:"Zoho Sheet",dataCenter:"",clientId:"",clientSecret:"",field_map:[{formField:"",zohoSheetFormField:""}],workbooks:[],worksheets:[],workSheetHeaders:[],selectedWorkbook:"",selectedWorksheet:"",headerRow:1,actions:{}});r.useEffect(()=>{window.opener&&M("zohoSheet")},[]);const _=()=>{m(!0),T(t,e,l,a,p,"","",m).then(c=>{var k;c.success?(h.success((k=c.data)==null?void 0:k.msg),p(l)):h.error(c.data||c)})},y=g=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!j(a)){h.error(v("Please map mandatory workSheetHeaders","bit-integrations"));return}a.field_map.length>0&&S(g)};return o.jsxs("div",{children:[o.jsx(E,{snack:Z,setSnackbar:u}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(W,{step:3,active:i})}),o.jsx(L,{zohoSheetConf:a,setZohoSheetConf:d,step:i,setStep:S,loading:n,setLoading:f,setSnackbar:u}),o.jsxs("div",{className:"btcd-stp-page",style:w({},i===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(P,{formFields:s,zohoSheetConf:a,setZohoSheetConf:d,loading:n,setLoading:f}),n.workSheetHeaders&&a.selectedWorksheet&&o.jsxs("button",{onClick:()=>y(3),disabled:!j(a),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[v("Next","bit-integrations"),"  ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),n.workSheetHeaders&&a.selectedWorksheet&&o.jsx(F,{step:i,saveConfig:()=>_(),isLoading:C,dataConf:a,setDataConf:d,formFields:s})]})}export{V as default};
