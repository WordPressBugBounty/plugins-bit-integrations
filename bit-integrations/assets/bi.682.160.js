import{u as b,e as p,r as c,i as I,j as t}from"./main-29.js";import{$ as h,g as C,h as j,d as k,_ as s,i as F,I as R,c as a,s as S}from"./bi.860.15.js";import{W as w}from"./bi.596.894.js";import{h as u,T as r,c as m}from"./bi.889.895.js";import"./bi.831.661.js";import"./bi.392.662.js";function G({allIntegURL:g}){const T=b(),[n,O]=p(h),[e,o]=p(C),[_,L]=c.useState(!1),[x,d]=c.useState({auth:!1,reputation:!1,forums:!1,topics:!1}),[E,i]=c.useState({show:!1}),f=I(j),P=()=>{if(!e.selectedTask){a.error(s("Please select a task!","bit-integrations"));return}if(e.selectedTask!==r.DELETE_TOPIC&&!m(e)){a.error(s("Please map mandatory fields!","bit-integrations"));return}if(e.selectedTask===r.USER_REPUTATION&&!e.selectedReputation){a.error(s("Please select a reputation!","bit-integrations"));return}if(e.selectedTask===r.ADD_TO_GROUP&&!e.selectedGroup){a.error(s("Please select a group!","bit-integrations"));return}if(e.selectedTask===r.REMOVE_FROM_GROUP&&!e.selectedGroup){a.error(s("Please select a group!","bit-integrations"));return}if(e.selectedTask===r.CREATE_TOPIC&&!e.selectedForum){a.error(s("Please select a forum!","bit-integrations"));return}if(e.selectedTask===r.DELETE_TOPIC&&!e.selectedTopic&&!m(e)){a.error(s("Please select a topic or map fields!","bit-integrations"));return}S({flow:n,allIntegURL:g,conf:e,navigate:T,edit:1,setLoading:d,setSnackbar:i})};return t.jsxs("div",{style:{width:900},children:[t.jsx(k,{snack:E,setSnackbar:i}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:l=>u(l,e,o),name:"name",defaultValue:e.name||"",type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(F,{entity:n.triggered_entity,setSnackbar:i}),t.jsx(w,{formID:n.triggered_entity_id,formFields:f,handleInput:l=>u(l,e,o),wpforoConf:e,setWPForoConf:o,loading:x,setLoading:d,setSnackbar:i}),t.jsx(R,{edit:!0,saveConfig:P,isLoading:_,dataConf:e,setDataConf:o,formFields:f}),t.jsx("br",{})]})}export{G as default};
