import{u as S,e as m,r as d,f as b,j as t}from"./main-270.js";import{$ as h,f as j,g as k,_ as s,d as a}from"./bi.340.0.js";import{S as C}from"./bi.218.13.js";import{S as I,I as y,s as E}from"./bi.155.3.js";import{V as w}from"./bi.699.945.js";import{h as p,T as n,P as A,c as F}from"./bi.544.946.js";import"./bi.88.440.js";import"./bi.724.9.js";import"./bi.209.11.js";import"./bi.117.14.js";import"./bi.125.697.js";import"./bi.128.698.js";function z({allIntegURL:g}){const u=S(),[r,N]=m(h),[e,o]=m(j),[x,v]=d.useState(!1),[T,c]=d.useState({auth:!1,PostTypes:!1,postFields:!1,posts:!1}),[P,i]=d.useState({show:!1}),f=b(k),_=()=>{if(!e.selectedTask){a.error(s("Please select a task!","bit-integrations"));return}if((e.selectedTask===n.NEW_POST||e.selectedTask===n.UPDATE_POST)&&!e.selectedPostType){a.error(s("Please select a post type!","bit-integrations"));return}if(A.includes(e.selectedTask)&&!e.selectedPostStatus){a.error(s("Please select a post status!","bit-integrations"));return}if((e.selectedTask===n.UPDATE_POST||e.selectedTask===n.UPDATE_COLLECTION_POST)&&!e.selectedPost){a.error(s("Please select a post!","bit-integrations"));return}if(!F(e)){a.error(s("Please map mandatory fields!","bit-integrations"));return}E({flow:r,allIntegURL:g,conf:e,navigate:u,edit:1,setLoading:c,setSnackbar:i})};return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:P,setSnackbar:i}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:l=>p(l,e,o),name:"name",defaultValue:e.name||"",type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(I,{entity:r.triggered_entity,setSnackbar:i}),t.jsx(w,{formID:r.triggered_entity_id,formFields:f,handleInput:l=>p(l,e,o),voxelConf:e,setVoxelConf:o,loading:T,setLoading:c,setSnackbar:i}),t.jsx(y,{edit:!0,saveConfig:_,disabled:!1,isLoading:x,dataConf:e,setDataConf:o,formFields:f}),t.jsx("br",{})]})}export{z as default};
