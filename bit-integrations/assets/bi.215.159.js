import{u as b,e as m,r as c,f as I,j as t}from"./main-270.js";import{$ as h,f as C,g as S,_ as s,d as a}from"./bi.340.0.js";import{S as j}from"./bi.218.13.js";import{S as k,I as F,s as R}from"./bi.155.3.js";import{W as w}from"./bi.528.933.js";import{h as p,T as r,c as u}from"./bi.740.934.js";import"./bi.88.440.js";import"./bi.724.9.js";import"./bi.209.11.js";import"./bi.117.14.js";import"./bi.125.697.js";import"./bi.128.698.js";function q({allIntegURL:g}){const T=b(),[n,O]=m(h),[e,o]=m(C),[_,L]=c.useState(!1),[x,d]=c.useState({auth:!1,reputation:!1,forums:!1,topics:!1}),[E,i]=c.useState({show:!1}),f=I(S),P=()=>{if(!e.selectedTask){a.error(s("Please select a task!","bit-integrations"));return}if(e.selectedTask!==r.DELETE_TOPIC&&!u(e)){a.error(s("Please map mandatory fields!","bit-integrations"));return}if(e.selectedTask===r.USER_REPUTATION&&!e.selectedReputation){a.error(s("Please select a reputation!","bit-integrations"));return}if(e.selectedTask===r.ADD_TO_GROUP&&!e.selectedGroup){a.error(s("Please select a group!","bit-integrations"));return}if(e.selectedTask===r.REMOVE_FROM_GROUP&&!e.selectedGroup){a.error(s("Please select a group!","bit-integrations"));return}if(e.selectedTask===r.CREATE_TOPIC&&!e.selectedForum){a.error(s("Please select a forum!","bit-integrations"));return}if(e.selectedTask===r.DELETE_TOPIC&&!e.selectedTopic&&!u(e)){a.error(s("Please select a topic or map fields!","bit-integrations"));return}R({flow:n,allIntegURL:g,conf:e,navigate:T,edit:1,setLoading:d,setSnackbar:i})};return t.jsxs("div",{style:{width:900},children:[t.jsx(j,{snack:E,setSnackbar:i}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:l=>p(l,e,o),name:"name",defaultValue:e.name||"",type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(k,{entity:n.triggered_entity,setSnackbar:i}),t.jsx(w,{formID:n.triggered_entity_id,formFields:f,handleInput:l=>p(l,e,o),wpforoConf:e,setWPForoConf:o,loading:x,setLoading:d,setSnackbar:i}),t.jsx(F,{edit:!0,saveConfig:P,isLoading:_,dataConf:e,setDataConf:o,formFields:f}),t.jsx("br",{})]})}export{q as default};
