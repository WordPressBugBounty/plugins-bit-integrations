import{u as k,l as j,r as n,j as e}from"./main-29.js";import{d as I,_ as p,I as M,F as S}from"./bi.860.15.js";import{B as Z}from"./bi.22.698.js";import{S as v}from"./bi.885.903.js";import H from"./bi.640.174.js";import{s as N,h as _,c as w,r as y}from"./bi.386.679.js";import{Z as C}from"./bi.221.680.js";import"./bi.244.714.js";import"./bi.831.661.js";import"./bi.392.662.js";function G({formFields:f,setFlow:u,flow:d,allIntegURL:g}){const h=k(),{formID:r}=j(),[l,o]=n.useState(!1),[i,c]=n.useState(1),[b,s]=n.useState({show:!1}),[t,m]=n.useState({name:"Zoho Marketing Automation(Zoho Marketing Hub)",type:"Zoho Marketing Automation(Zoho Marketing Hub)",clientId:"",clientSecret:"",list:"",field_map:[{formField:"",zohoFormField:""}]});n.useEffect(()=>{window.opener&&N()},[]);const x=a=>{if(a===3){if(!w(t)){s({show:!0,msg:p("Please map mandatory fields","bit-integrations")});return}t.list!==""&&t.table!==""&&t.field_map.length>0&&c(a)}else c(a),a===2&&!t.list&&y(r,t,m,o,s)};return e.jsxs("div",{children:[e.jsx(I,{snack:b,setSnackbar:s}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(v,{step:3,active:i})}),e.jsx(H,{formID:r,marketingHubConf:t,setMarketingHubConf:m,step:i,setstep:c,isLoading:l,setIsLoading:o,setSnackbar:s}),e.jsxs("div",{className:"btcd-stp-page",style:{width:i===2&&900,height:i===2&&"auto"},children:[e.jsx(C,{formID:r,formFields:f,handleInput:a=>_(a,r,t,m,o,s),marketingHubConf:t,setMarketingHubConf:m,isLoading:l,setIsLoading:o,setSnackbar:s}),e.jsxs("button",{onClick:()=>x(3),disabled:t.list===""||t.table===""||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[p("Next","bit-integrations"),e.jsx(Z,{className:"ml-1 rev-icn"})]})]}),e.jsx(M,{step:i,saveConfig:()=>S(d,u,g,t,h,"","",o),isLoading:l})]})}export{G as default};
