import{u as C,l as h,e as m,i as j,r as c,j as t}from"./main-650.js";import{g as v,$ as b,h as I,d as _,_ as d,i as w,I as N,s as S}from"./bi.541.15.js";import{h as y}from"./bi.863.694.js";import{A}from"./bi.489.695.js";import"./bi.619.660.js";import"./bi.119.661.js";function M({allIntegURL:l}){const p=C(),{id:E,formID:f}=h(),[e,s]=m(v),[n,g]=m(b),i=j(I),[o,r]=c.useState(!1),[x,a]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(_,{snack:x,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>y(u,e,s),name:"name",value:e.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(w,{entity:n.triggered_entity,setSnackbar:a}),t.jsx(A,{formID:f,formFields:i,activeCampaingConf:e,setActiveCampaingConf:s,isLoading:o,setIsLoading:r,setSnackbar:a}),t.jsx(N,{edit:!0,saveConfig:()=>S({flow:n,setFlow:g,allIntegURL:l,navigate:p,conf:e,edit:1,setIsLoading:r,setSnackbar:a}),disabled:e.field_map.length<1,isLoading:o,dataConf:e,setDataConf:s,formFields:i}),t.jsx("br",{})]})}export{M as default};
