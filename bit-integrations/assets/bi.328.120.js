import{u as j,o as I,e as m,r as l,f as S,j as t}from"./main-119.js";import{$ as _,f as k,g as w,_ as s,n}from"./bi.686.0.js";import{S as F}from"./bi.725.13.js";import"./bi.276.437.js";import{S as v,I as y,s as N}from"./bi.316.3.js";import{h as f,c as p}from"./bi.126.852.js";import{C as P}from"./bi.166.853.js";import"./bi.900.9.js";import"./bi.301.11.js";import"./bi.744.14.js";import"./bi.570.675.js";import"./bi.556.676.js";function K({allIntegURL:g}){const u=j();I();const[r,L]=m(_),[e,i]=m(k),[x,E]=l.useState(!1),[b,c]=l.useState({}),[h,a]=l.useState({show:!1}),d=S(w),C=()=>{if(!p(e)){a({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="task"){if(!e.selectedTeam){n.error(s("Please select a team","bit-integrations"));return}if(!e.selectedSpace){n.error(s("Please select a space","bit-integrations"));return}if(!e.selectedFolder){n.error(s("Please select a folder","bit-integrations"));return}if(!e.selectedList){n.error(s("Please select a list","bit-integrations"));return}}N({flow:r,allIntegURL:g,conf:e,navigate:u,edit:1,setLoading:c,setSnackbar:a})};return t.jsxs("div",{style:{width:900},children:[t.jsx(F,{snack:h,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,i),name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:r.triggered_entity,setSnackbar:a}),t.jsx(P,{formID:r.triggered_entity_id,formFields:d,handleInput:o=>f(o,e,i),clickupConf:e,setClickupConf:i,loading:b,setLoading:c,setSnackbar:a}),t.jsx(y,{edit:!0,saveConfig:C,disabled:!p(e),isLoading:x,dataConf:e,setDataConf:i,formFields:d}),t.jsx("br",{})]})}export{K as default};
