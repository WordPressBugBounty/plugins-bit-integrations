import{u as j,e as m,r as o,i as S,j as e}from"./main-650.js";import{$ as _,g as I,h as C,d as w,_ as s,i as y,I as F,c as d,s as k}from"./bi.541.15.js";import{h as f,c as v}from"./bi.506.889.js";import{S as M}from"./bi.840.890.js";import"./bi.619.660.js";import"./bi.119.661.js";function A({allIntegURL:u}){const g=j(),[r,N]=m(_),[t,a]=m(I),[p,E]=o.useState(!1),[x,l]=o.useState({auth:!1,groups:!1}),[b,n]=o.useState({show:!1}),c=S(C),h=()=>{if(!t.selectedTask){d.error(s("Please select a task!","bit-integrations"));return}if(!v(t)){d.error(s("Please map mandatory fields!","bit-integrations"));return}if(!t.selectedGroup){d.error(s("Please select a group!","bit-integrations"));return}k({flow:r,allIntegURL:u,conf:t,navigate:g,edit:1,setLoading:l,setSnackbar:n})};return e.jsxs("div",{style:{width:900},children:[e.jsx(w,{snack:b,setSnackbar:n}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>f(i,t,a),name:"name",defaultValue:t.name||"",type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(y,{entity:r.triggered_entity,setSnackbar:n}),e.jsx(M,{formID:r.triggered_entity_id,formFields:c,handleInput:i=>f(i,t,a),sureMembersConf:t,setSureMembersConf:a,loading:x,setLoading:l,setSnackbar:n}),e.jsx(F,{edit:!0,saveConfig:h,isLoading:p,dataConf:t,setDataConf:a,formFields:c}),e.jsx("br",{})]})}export{A as default};
