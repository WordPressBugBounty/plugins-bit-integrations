import{u as j,l as h,e as d,i as I,r as c,j as t}from"./main-579.js";import{g as b,$ as C,h as w,d as _,_ as m,i as v,I as N,s as S}from"./bi.919.15.js";import{T as y}from"./bi.60.723.js";import{h as f}from"./bi.151.724.js";import"./bi.850.660.js";import"./bi.517.661.js";function D({allIntegURL:p}){const x=j(),{formID:g}=h(),[e,s]=d(b),[i,T]=d(C),r=I(w),[n,l]=c.useState(!1),[u,a]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(_,{snack:u,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,s),name:"name",value:e.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(v,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(y,{formID:g,formFields:r,handleInput:o=>f(o,e,s),trelloConf:e,setTrelloConf:s,isLoading:n,setIsLoading:l,setSnackbar:a}),t.jsx(N,{edit:!0,saveConfig:()=>S({flow:i,allIntegURL:p,conf:e,navigate:x,edit:1,setIsLoading:l,setSnackbar:a}),disabled:e.listId===""||n,isLoading:n,dataConf:e,setDataConf:s,formFields:r}),t.jsx("br",{})]})}export{D as default};