import{u as h,o as v,e as r,f as b,r as m,j as t}from"./main-955.js";import{f as w,$ as I,g as S,_ as c}from"./bi.223.0.js";import{S as _}from"./bi.951.13.js";import"./bi.326.431.js";import{S as C,I as N,s as y}from"./bi.864.3.js";import{h as D}from"./bi.433.669.js";import{O as E}from"./bi.797.670.js";import"./bi.696.9.js";import"./bi.300.11.js";import"./bi.283.14.js";function q({allIntegURL:d}){const l=h(),{id:f}=v(),[e,a]=r(w),[n,p]=r(I),x=b(S),[o,i]=m.useState(!1),[g,s]=m.useState({show:!1}),u=()=>{y({flow:n,setFlow:p,allIntegURL:d,conf:e,navigate:l,edit:1,setIsLoading:i,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(_,{snack:g,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>D(j,e,a),name:"name",value:e.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(C,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(E,{flowID:f,formFields:x,oneDriveConf:e,setOneDriveConf:a,isLoading:o,setIsLoading:i,setSnackbar:s}),t.jsx(N,{edit:!0,saveConfig:u,disabled:!e.actions.attachments||!e.folder,isLoading:o}),t.jsx("br",{})]})}export{q as default};
