import{u as O,e as p,r as d,f as A,j as a}from"./main-920.js";import{$ as k,f as C,g as L,_ as r,d as t}from"./bi.247.0.js";import{S as b}from"./bi.970.13.js";import{S as y,I as N,s as j}from"./bi.658.3.js";import{J as I}from"./bi.468.912.js";import{h as E,D as h,c as i,T as s}from"./bi.923.913.js";import"./bi.761.437.js";import"./bi.140.9.js";import"./bi.941.11.js";import"./bi.706.14.js";import"./bi.722.674.js";import"./bi.149.675.js";function q({allIntegURL:m}){const u=O(),[l,S]=p(k),[e,o]=p(C),[g,D]=d.useState(!1),[_,T]=d.useState({auth:!1,menuPosition:!1,relationTypes:!1,cptList:!1,cctList:!1,relationList:!1}),[P,n]=d.useState({show:!1}),f=A(L),x=()=>{if(!e.selectedTask){t.error(r("Please select a task!","bit-integrations"));return}if(!h.includes(e.selectedTask)&&!i(e)){t.error(r("Please map mandatory fields!","bit-integrations"));return}if((e.selectedTask===s.CREATE_TAXONOMY||e.selectedTask===s.UPDATE_TAXONOMY)&&!e.selectedTaxPostTypes){t.error(r("Please select post type(s)!","bit-integrations"));return}if(e.selectedTask===s.CREATE_RELATION||e.selectedTask===s.UPDATE_RELATION){if(!e.relOptions.parentObject){t.error(r("Please select a parent object!","bit-integrations"));return}if(!e.relOptions.childObject){t.error(r("Please select a child object!","bit-integrations"));return}if(!e.relOptions.selectedRelationType){t.error(r("Please select a relation type!","bit-integrations"));return}}if(e.selectedTask===s.UPDATE_POST_TYPE&&!e.selectedCPT){t.error("Please select a custom post type!");return}if(e.selectedTask===s.UPDATE_CONTENT_TYPE&&!e.selectedCCT){t.error("Please select a custom content type!");return}if(e.selectedTask===s.UPDATE_TAXONOMY&&!e.selectedTaxForEdit){t.error("Please select a taxonomy!");return}if(e.selectedTask===s.UPDATE_RELATION&&!e.relOptions.selectedRelationForEdit){t.error("Please select a relation!");return}if(e.selectedTask===s.DELETE_POST_TYPE&&!e.selectedCPT&&!i(e)){t.error("Please select a custom post type or map fields!");return}if(e.selectedTask===s.DELETE_CONTENT_TYPE&&!e.selectedCCT&&!i(e)){t.error("Please select a custom content type or map fields!");return}if(e.selectedTask===s.DELETE_TAXONOMY&&!e.selectedTaxForEdit&&!i(e)){t.error("Please select a taxonomy or map fields!");return}if(e.selectedTask===s.DELETE_RELATION&&!e.relOptions.selectedRelationForEdit&&!i(e)){t.error("Please select a relation or map fields!");return}j({flow:l,allIntegURL:m,conf:e,navigate:u,edit:1,setLoading:T,setSnackbar:n})};return a.jsxs("div",{style:{width:900},children:[a.jsx(b,{snack:P,setSnackbar:n}),a.jsxs("div",{className:"flx mt-3",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),a.jsx("input",{className:"btcd-paper-inp w-5",onChange:c=>E(c,e,o),name:"name",defaultValue:e.name||"",type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),a.jsx("br",{}),a.jsx(y,{entity:l.triggered_entity,setSnackbar:n}),a.jsx(I,{formID:l.triggered_entity_id,formFields:f,handleInput:c=>E(c,e,o),jetEngineConf:e,setJetEngineConf:o,loading:_,setLoading:T,setSnackbar:n}),a.jsx(N,{edit:!0,saveConfig:x,isLoading:g,dataConf:e,setDataConf:o,formFields:f}),a.jsx("br",{})]})}export{q as default};
