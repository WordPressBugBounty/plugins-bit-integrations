import{u as j,l as I,r as i,j as t}from"./main-80.js";import{a0 as S,d as w,_ as p,I as D,s as _}from"./bi.433.0.js";import{B as v}from"./bi.29.687.js";import{S as N}from"./bi.293.894.js";import Z from"./bi.45.180.js";import{h as y,c as C,b as z}from"./bi.832.718.js";import{Z as F}from"./bi.385.719.js";import"./bi.717.703.js";import"./bi.895.650.js";import"./bi.194.651.js";function q({formFields:f,setFlow:h,flow:u,allIntegURL:g}){const x=j(),{formID:r}=I(),[d,o]=i.useState(!1),[n,m]=i.useState(1),[k,s]=i.useState({show:!1}),[e,c]=i.useState({name:"Zoho Desk",type:"Zoho Desk",clientId:"",clientSecret:"",orgId:"",department:"",field_map:[{formField:"",zohoFormField:""}],actions:{}});i.useEffect(()=>{window.opener&&S("zohoDesk")},[]);const b=a=>{var l;if(a===3){if(!C(e)){s({show:!0,msg:p("Please map mandatory fields","bit-integrations")});return}if(!((l=e.actions)!=null&&l.ticket_owner)){s({show:!0,msg:p("Please select a ticket owner","bit-integrations")});return}e.department!==""&&e.table!==""&&e.field_map.length>0&&m(a)}else m(a),a===2&&!e.department&&z(r,e,c,o,s)};return t.jsxs("div",{children:[t.jsx(w,{snack:k,setSnackbar:s}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(N,{step:3,active:n})}),t.jsx(Z,{formID:r,deskConf:e,setDeskConf:c,step:n,setstep:m,isLoading:d,setIsLoading:o,setSnackbar:s}),t.jsxs("div",{className:"btcd-stp-page",style:{width:n===2&&900,height:n===2&&"auto"},children:[t.jsx(F,{formID:r,formFields:f,handleInput:a=>y(a,e,c,r,o,s),deskConf:e,setDeskConf:c,isLoading:d,setIsLoading:o,setSnackbar:s}),t.jsxs("button",{onClick:()=>b(3),disabled:e.department===""||e.table===""||e.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[p("Next","bit-integrations"),t.jsx(v,{className:"ml-1 rev-icn"})]})]}),t.jsx(D,{step:n,saveConfig:()=>_({flow:u,setFlow:h,allIntegURL:g,navigate:x,conf:e,setIsLoading:o,setSnackbar:s})})]})}export{q as default};
