import{u as h,o as I,e as d,f as E,r as n,j as s}from"./main-119.js";import{f as C,$ as j,g as L,_ as f,d as t}from"./bi.686.0.js";import{S as N}from"./bi.725.13.js";import{S as b,I as v,s as R}from"./bi.316.3.js";import{h as w,O,c as i,T as a}from"./bi.109.915.js";import{H as D}from"./bi.291.916.js";import"./bi.276.437.js";import"./bi.301.11.js";import"./bi.900.9.js";import"./bi.744.14.js";import"./bi.570.675.js";import"./bi.556.676.js";function J({allIntegURL:p}){const m=h(),{id:F,formID:u}=I(),[e,r]=d(C),[l,T]=d(j),c=E(L),[g,_]=n.useState(!1),[P,o]=n.useState({show:!1}),[k,x]=n.useState({auth:!1,customFields:!1,options:!1,contacts:!1,users:!1,hlTasks:!1,pipelines:!1,opportunities:!1}),A=()=>{if(!O.includes(e.selectedTask)&&!i(e)){t.error("Please map all required fields to continue!");return}if(!(e!=null&&e.selectedTask)){t.error("Please select task to continue!");return}if(e.selectedTask===a.UPDATE_CONTACT&&!e.selectedContact&&!i(e)){t.error("Please select a contact or map fields!");return}if((e.selectedTask===a.CREATE_TASK||e.selectedTask===a.UPDATE_TASK)&&!e.selectedContact&&!i(e)){t.error("Please select a contact or map fields!");return}if(e.selectedTask===a.UPDATE_TASK&&!e.updateTaskId&&!i(e)){t.error("Please select a task or map fields!");return}if(e.selectedTask===a.CREATE_OPPORTUNITY||e.selectedTask===a.UPDATE_OPPORTUNITY){if(!e.selectedPipeline){t.error("Please select a pipeline!");return}if(!e.selectedStage){t.error("Please select a stage!");return}if(!e.selectedTaskStatus){t.error("Please select a status!");return}}e.field_map.length>0&&R({flow:l,setFlow:T,allIntegURL:p,navigate:m,conf:e,edit:1,setIsLoading:_,setSnackbar:o})};return s.jsxs("div",{style:{width:900},children:[s.jsx(N,{snack:P,setSnackbar:o}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:f("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:S=>w(S,e,r),name:"name",value:e.name,type:"text",placeholder:f("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx(b,{entity:l.triggered_entity,setSnackbar:o}),s.jsx(D,{formID:u,formFields:c,highLevelConf:e,setHighLevelConf:r,loading:k,setLoading:x}),s.jsx(v,{edit:!0,saveConfig:A,disabled:!e.selectedTask,isLoading:g,dataConf:e,setDataConf:r,formFields:c}),s.jsx("br",{})]})}export{J as default};
