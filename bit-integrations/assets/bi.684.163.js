import{u as _,e as c,r,f as v,j as t}from"./main-777.js";import{$ as C,f as j,g as S,_ as s,d}from"./bi.157.0.js";import{S as T}from"./bi.309.13.js";import{S as b,I,s as w}from"./bi.644.3.js";import{T as N}from"./bi.677.925.js";import{h as f,T as k,c as y}from"./bi.877.926.js";import"./bi.463.440.js";import"./bi.681.9.js";import"./bi.677.11.js";import"./bi.181.14.js";import"./bi.444.683.js";import"./bi.343.684.js";function B({allIntegURL:p}){const g=_(),[i,F]=c(C),[e,a]=c(j),[u,L]=r.useState(!1),[x,l]=r.useState({auth:!1,events:!1}),[h,n]=r.useState({show:!1}),m=v(S),E=()=>{if(!e.selectedTask){d.error(s("Please select a task!","bit-integrations"));return}if(e.selectedTask===k.NEW_ATTENDEE&&!e.selectedEvent){d.error(s("Please select a event!","bit-integrations"));return}if(!y(e)){d.error(s("Please map mandatory fields!","bit-integrations"));return}w({flow:i,allIntegURL:p,conf:e,navigate:g,edit:1,setLoading:l,setSnackbar:n})};return t.jsxs("div",{style:{width:900},children:[t.jsx(T,{snack:h,setSnackbar:n}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,a),name:"name",defaultValue:e.name||"",type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(b,{entity:i.triggered_entity,setSnackbar:n}),t.jsx(N,{formID:i.triggered_entity_id,formFields:m,handleInput:o=>f(o,e,a),theEventsCalendarConf:e,setTheEventsCalendarConf:a,loading:x,setLoading:l,setSnackbar:n}),t.jsx(I,{edit:!0,saveConfig:E,isLoading:u,dataConf:e,setDataConf:a,formFields:m}),t.jsx("br",{})]})}export{B as default};
