import{u as v,o as y,f as C,r as p,j as t}from"./main-623.js";import"./bi.1.443.js";import{B as W}from"./bi.219.759.js";import{e as k,_ as l}from"./bi.422.0.js";import{S as N}from"./bi.957.13.js";import{S as L}from"./bi.408.976.js";import{I as P,g as B}from"./bi.757.3.js";import E from"./bi.820.184.js";import{W as T,h as D,c as i}from"./bi.171.755.js";import"./bi.331.9.js";import"./bi.727.11.js";import"./bi.218.14.js";import"./bi.971.765.js";import"./bi.220.720.js";import"./bi.890.721.js";function Y({formFields:c,setFlow:h,flow:b,allIntegURL:x}){const M=v(),{formID:_}=y(),j=C(k),{isPro:I}=j,[d,m]=p.useState(!1),[o,u]=p.useState(1),[S,s]=p.useState({show:!1}),[e,n]=p.useState({name:"WooCommerce Integration",type:"WooCommerce",field_map:[],upload_field_map:[],line_field_map:[{formField:"",wcField:""}],actions:{}}),F=()=>{let a="";if((e==null?void 0:e.module)==="order"){const r=i(e.order.field_map),f=i(e.line_item.field_map),g=i(e.customer.field_map);a=r?f?g?"":"Customer Field Map":"Line Item Field Map":"Order Field Map",r&&f&&g||s({show:!0,msg:`${a} can'	 be empty`})}else(e==null?void 0:e.module)==="customer"?i(e.customer.field_map)||(a="Customer Field Map",s({show:!0,msg:l("Customer Field Map can't be empty","bit-integrations")})):(e==null?void 0:e.module)==="product"?i(e.product.field_map)||(a="Product Field Map",s({show:!0,msg:l("Product Field Map can't be empty","bit-integrations")})):(e==null?void 0:e.module)==="changestatus"&&(i(e.changestatus.field_map)||s({show:!0,msg:l("Change Status Field Map can't be empty","bit-integrations")}));setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),a===""&&u(3)};return t.jsxs("div",{children:[t.jsx(N,{snack:S,setSnackbar:s}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(L,{step:3,active:o})}),t.jsx(E,{formID:_,wcConf:e,setWcConf:n,step:o,setStep:u,isLoading:d,setIsLoading:m,setSnackbar:s}),t.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&1e3,height:o===2&&"auto"},children:[t.jsx(T,{wcConf:e,setWcConf:n,formFields:c,handleInput:a=>D(a,e,n,m,s,I),isLoading:d,setIsLoading:m}),t.jsxs("button",{onClick:F,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[l("Next","bit-integrations"),t.jsx(W,{className:"ml-1 rev-icn"})]})]}),t.jsx(P,{step:o,saveConfig:()=>B(b,h,x,e,M,"","",m),isLoading:d,dataConf:e,setDataConf:n,formFields:c})]})}export{Y as default};
