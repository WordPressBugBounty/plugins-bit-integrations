import{u as j,e as d,f as w,r as m,j as e}from"./main-270.js";import{f as C,$ as h,g as b,_ as c}from"./bi.340.0.js";import{S as _}from"./bi.218.13.js";import"./bi.88.440.js";import{S as I,I as S,s as v}from"./bi.155.3.js";import{h as y,W as N}from"./bi.178.759.js";import"./bi.724.9.js";import"./bi.209.11.js";import"./bi.117.14.js";function A({allIntegURL:f}){const l=j(),[t,a]=d(C),[n,p]=d(h),o=w(b),[i,r]=m.useState(!1),[g,s]=m.useState({show:!1}),x=()=>{v({flow:n,setFlow:p,allIntegURL:f,conf:t,navigate:l,edit:1,setIsLoading:r,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(_,{snack:g,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>y(u,t,a),name:"name",value:t.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(I,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(N,{formID:n.triggered_entity_id,formFields:o,wpCoursewareConf:t,setWPCoursewareConf:a,isLoading:i,step:2,setIsLoading:r,setSnackbar:s}),e.jsx(S,{edit:!0,saveConfig:x,disabled:t.action===""||t.course.length===0,isLoading:i,dataConf:t,setDataConf:a,formFields:o}),e.jsx("br",{})]})}export{A as default};
