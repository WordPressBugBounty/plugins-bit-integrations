import{u as k,o as j,r as n,j as e}from"./main-320.js";import"./bi.795.440.js";import{B as S}from"./bi.27.727.js";import{_ as c}from"./bi.576.0.js";import{S as I}from"./bi.51.13.js";import{S as M}from"./bi.78.940.js";import{I as Z,i as v}from"./bi.337.3.js";import H from"./bi.88.177.js";import{s as N,h as _,c as w,r as y}from"./bi.778.707.js";import{Z as C}from"./bi.680.708.js";import"./bi.155.9.js";import"./bi.440.11.js";import"./bi.574.14.js";import"./bi.382.733.js";import"./bi.468.689.js";import"./bi.775.690.js";function U({formFields:f,setFlow:u,flow:g,allIntegURL:d}){const h=k(),{formID:r}=j(),[p,a]=n.useState(!1),[i,l]=n.useState(1),[b,s]=n.useState({show:!1}),[t,m]=n.useState({name:"Zoho Marketing Automation(Zoho Marketing Hub)",type:"Zoho Marketing Automation(Zoho Marketing Hub)",clientId:"",clientSecret:"",list:"",field_map:[{formField:"",zohoFormField:""}]});n.useEffect(()=>{window.opener&&N()},[]);const x=o=>{if(o===3){if(!w(t)){s({show:!0,msg:c("Please map mandatory fields","bit-integrations")});return}t.list!==""&&t.table!==""&&t.field_map.length>0&&l(o)}else l(o),o===2&&!t.list&&y(r,t,m,a,s)};return e.jsxs("div",{children:[e.jsx(I,{snack:b,setSnackbar:s}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(M,{step:3,active:i})}),e.jsx(H,{formID:r,marketingHubConf:t,setMarketingHubConf:m,step:i,setstep:l,isLoading:p,setIsLoading:a,setSnackbar:s}),e.jsxs("div",{className:"btcd-stp-page",style:{width:i===2&&900,height:i===2&&"auto"},children:[e.jsx(C,{formID:r,formFields:f,handleInput:o=>_(o,r,t,m,a,s),marketingHubConf:t,setMarketingHubConf:m,isLoading:p,setIsLoading:a,setSnackbar:s}),e.jsxs("button",{onClick:()=>x(3),disabled:t.list===""||t.table===""||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[c("Next","bit-integrations"),e.jsx(S,{className:"ml-1 rev-icn"})]})]}),e.jsx(Z,{step:i,saveConfig:()=>v(g,u,d,t,h,"","",a),isLoading:p})]})}export{U as default};
