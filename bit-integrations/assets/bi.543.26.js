import{u as j,l as h,e as o,i as w,r as i,j as s}from"./main-80.js";import{g as I,$ as _,h as v,d as C,_ as r,i as N,I as S,s as y}from"./bi.433.0.js";import{h as D}from"./bi.235.697.js";import{D as E}from"./bi.653.698.js";function R({allIntegURL:d}){const l=j(),{id:c}=h(),[e,a]=o(I),[n,m]=o(_),x=w(v),[p,f]=i.useState(!1),[g,t]=i.useState({show:!1}),b=()=>{y({flow:n,setFlow:m,allIntegURL:d,conf:e,navigate:l,edit:1,setIsLoading:f,setSnackbar:t})};return s.jsxs("div",{style:{width:900},children:[s.jsx(C,{snack:g,setSnackbar:t}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>D(u,e,a),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(N,{entity:n.triggered_entity,setSnackbar:t}),s.jsx(E,{flowID:c,formFields:x,dropboxConf:e,setDropboxConf:a}),s.jsx(S,{edit:!0,saveConfig:b,disabled:e.field_map.length<1,isLoading:p}),s.jsx("br",{})]})}export{R as default};
