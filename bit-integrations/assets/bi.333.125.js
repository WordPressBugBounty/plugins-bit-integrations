import{u as h,l as j,e as l,i as b,r as d,j as t}from"./main-29.js";import{g as y,$ as C,h as I,d as _,_ as f,i as w,I as v,s as N}from"./bi.860.15.js";import{h as S}from"./bi.681.845.js";import{M}from"./bi.16.846.js";function R({allIntegURL:c}){const m=h(),{id:E,formID:g}=j(),[e,a]=l(y),[n,x]=l(C),i=b(I),[o,r]=d.useState(!1),[p,s]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(_,{snack:p,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:f("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>S(u,e,a),name:"name",value:e.name,type:"text",placeholder:f("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(w,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(M,{formID:g,formFields:i,mailifyConf:e,setMailifyConf:a,isLoading:o,setIsLoading:r,setSnackbar:s}),t.jsx(v,{edit:!0,saveConfig:()=>N({flow:n,setFlow:x,allIntegURL:c,navigate:m,conf:e,edit:1,setIsLoading:r,setSnackbar:s}),disabled:e.field_map.length<1,isLoading:o,dataConf:e,setDataConf:a,formFields:i}),t.jsx("br",{})]})}export{R as default};
