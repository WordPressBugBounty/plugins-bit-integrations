import{u as _,l as x,r as l,j as s}from"./main-830.js";import{_ as A,I,F as v,c as t}from"./bi.597.15.js";import{B as E}from"./bi.910.697.js";import{S as L}from"./bi.963.902.js";import j from"./bi.828.280.js";import{O as C,c as r,T as a}from"./bi.826.899.js";import{H as N}from"./bi.538.900.js";import"./bi.972.713.js";import"./bi.715.660.js";import"./bi.530.661.js";function Y({formFields:c,setFlow:u,flow:m,allIntegURL:T}){const g=_(),{formID:n}=x(),[k,P]=l.useState(!1),[i,d]=l.useState(1),[p,f]=l.useState({auth:!1,customFields:!1,options:!1,contacts:!1,users:!1,hlTasks:!1,pipelines:!1,opportunities:!1}),[e,o]=l.useState({name:"GoHighLevel",type:"GoHighLevel",api_key:"",field_map:[{formField:"",highLevelField:""}],actions:{},tags:[],highLevelFields:[],selectedTags:"",selectedTask:"",contacts:[],selectedContact:"",selectedTaskStatus:"",users:[],selectedUser:"",hlTasks:[],updateTaskId:"",pipelines:[],selectedPipeline:"",stages:[],currentStages:[],selectedStage:"",opportunities:[],selectedOpportunity:""}),h=S=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),S===3){if(!C.includes(e.selectedTask)&&!r(e)){t.error("Please map all required fields to continue!");return}if(!(e!=null&&e.selectedTask)){t.error("Please select task to continue!");return}if(e.selectedTask===a.UPDATE_CONTACT&&!e.selectedContact&&!r(e)){t.error("Please select a contact or map fields!");return}if((e.selectedTask===a.CREATE_TASK||e.selectedTask===a.UPDATE_TASK)&&!e.selectedContact&&!r(e)){t.error("Please select a contact or map fields!");return}if(e.selectedTask===a.UPDATE_TASK&&!e.updateTaskId&&!r(e)){t.error("Please select a task or map fields!");return}if(e.selectedTask===a.CREATE_OPPORTUNITY||e.selectedTask===a.UPDATE_OPPORTUNITY){if(!e.selectedPipeline){t.error("Please select a pipeline!");return}if(!e.selectedStage){t.error("Please select a stage!");return}if(!e.selectedTaskStatus){t.error("Please select a status!");return}}e.name!==""&&e.field_map.length>0&&d(3)}};return s.jsxs("div",{children:[s.jsx("div",{className:"txt-center mt-2",children:s.jsx(L,{step:3,active:i})}),s.jsx(j,{formID:n,highLevelConf:e,setHighLevelConf:o,step:i,setstep:d,loading:p,setLoading:f}),s.jsxs("div",{className:"btcd-stp-page",style:{width:i===2&&900,height:i===2&&"auto"},children:[s.jsx(N,{formID:n,formFields:c,highLevelConf:e,setHighLevelConf:o,loading:p,setLoading:f}),s.jsxs("button",{onClick:()=>h(3),disabled:!(e!=null&&e.selectedTask),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[A("Next","bit-integrations"),"  ",s.jsx(E,{className:"ml-1 rev-icn"})]})]}),s.jsx(I,{step:i,saveConfig:()=>v(m,u,T,e,g,"","",P),isLoading:k,dataConf:e,setDataConf:o,formFields:c})]})}export{Y as default};
