import{u as b,o as I,e as c,f as C,r as g,j as t}from"./main-404.js";import{f as _,$ as v,g as w,_ as p}from"./bi.51.0.js";import{S}from"./bi.896.13.js";import"./bi.613.437.js";import{S as N,I as y,s as E}from"./bi.488.3.js";import{h as l}from"./bi.569.760.js";import{G as F}from"./bi.11.761.js";import"./bi.964.9.js";import"./bi.484.11.js";import"./bi.565.14.js";import"./bi.396.687.js";import"./bi.287.10.js";import"./bi.841.674.js";import"./bi.75.675.js";function J({allIntegURL:f}){var d;const u=b(),{formID:x}=I(),[s,o]=c(_),[i,G]=c(v),r=C(w),[a,m]=g.useState(!1),[h,e]=g.useState({show:!1}),j=!(s.mainAction==="2"&&s.addTagToUser!==void 0);return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:h,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:p("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>l(n,s,o),name:"name",value:s.name,type:"text",placeholder:p("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(N,{entity:i.triggered_entity,setSnackbar:e}),t.jsx(F,{formID:x,formFields:r,handleInput:n=>l(n,s,o),groundhoggConf:s,setGroundhoggConf:o,isLoading:a,setIsLoading:m,setSnackbar:e}),t.jsx(y,{edit:!0,saveConfig:()=>E({flow:i,allIntegURL:f,conf:s,navigate:u,edit:1,setIsLoading:m,setSnackbar:e}),disabled:(s.mainAction==="2"?j:!(((d=s.field_map)==null?void 0:d.length)>=1))||a,isLoading:a,dataConf:s,setDataConf:o,formFields:r}),t.jsx("br",{})]})}export{J as default};
