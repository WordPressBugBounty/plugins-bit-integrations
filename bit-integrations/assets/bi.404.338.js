import{u as j,o as S,r as i,j as e}from"./main-246.js";import"./bi.675.443.js";import{B as I}from"./bi.430.759.js";import{_ as c}from"./bi.560.0.js";import{S as w}from"./bi.222.13.js";import{S as D}from"./bi.626.976.js";import{m as _,I as v,s as N}from"./bi.545.3.js";import Z from"./bi.745.198.js";import{h as y,c as C,b as z}from"./bi.765.790.js";import{Z as F}from"./bi.954.791.js";import"./bi.947.9.js";import"./bi.975.11.js";import"./bi.557.14.js";import"./bi.142.765.js";import"./bi.300.720.js";import"./bi.924.721.js";function V({formFields:l,setFlow:h,flow:u,allIntegURL:g}){const x=j(),{formID:r}=S(),[d,a]=i.useState(!1),[n,p]=i.useState(1),[k,s]=i.useState({show:!1}),[t,m]=i.useState({name:"Zoho Desk",type:"Zoho Desk",clientId:"",clientSecret:"",orgId:"",department:"",field_map:[{formField:"",zohoFormField:""}],actions:{}});i.useEffect(()=>{window.opener&&_("zohoDesk")},[]);const b=o=>{var f;if(o===3){if(!C(t)){s({show:!0,msg:c("Please map mandatory fields","bit-integrations")});return}if(!((f=t.actions)!=null&&f.ticket_owner)){s({show:!0,msg:c("Please select a ticket owner","bit-integrations")});return}t.department!==""&&t.table!==""&&t.field_map.length>0&&p(o)}else p(o),o===2&&!t.department&&z(r,t,m,a,s)};return e.jsxs("div",{children:[e.jsx(w,{snack:k,setSnackbar:s}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(D,{step:3,active:n})}),e.jsx(Z,{formID:r,deskConf:t,setDeskConf:m,step:n,setstep:p,isLoading:d,setIsLoading:a,setSnackbar:s}),e.jsxs("div",{className:"btcd-stp-page",style:{width:n===2&&900,height:n===2&&"auto"},children:[e.jsx(F,{formID:r,formFields:l,handleInput:o=>y(o,t,m,r,a,s),deskConf:t,setDeskConf:m,isLoading:d,setIsLoading:a,setSnackbar:s}),e.jsxs("button",{onClick:()=>b(3),disabled:t.department===""||t.table===""||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[c("Next","bit-integrations"),e.jsx(I,{className:"ml-1 rev-icn"})]})]}),e.jsx(v,{step:n,saveConfig:()=>N({flow:u,setFlow:h,allIntegURL:g,navigate:x,conf:t,setIsLoading:a,setSnackbar:s})})]})}export{V as default};
