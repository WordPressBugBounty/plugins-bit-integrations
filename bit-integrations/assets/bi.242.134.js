import{u as w,e as p,r,i as j,j as t}from"./main-650.js";import{$ as F,g as I,h as _,d as C,_ as s,i as S,I as N,W as l,s as v}from"./bi.541.15.js";import{h as f,c as u}from"./bi.177.862.js";import{F as P}from"./bi.762.863.js";function O({allIntegURL:m}){w();const[i,k]=p(F),[e,a]=p(I),[g,c]=r.useState(!1),[x,h]=r.useState({}),[y,n]=r.useState({show:!1}),d=j(_),b=()=>{if(!u(e)){n({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="account"&&!e.selectedAccountType){l.error(s("Please select an Account Type","bit-integrations"));return}if(e.actionName==="opportunity"){if(!e.selectedPipeline){l.error(s("Please select a Opportunity Pipeline","bit-integrations"));return}if(!e.selectedOpportunityStage){l.error(s("Please select a Opportunity Stage","bit-integrations"));return}}v({flow:i,allIntegURL:m,conf:e,history,edit:1,setIsLoading:c,setSnackbar:n})};return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:y,setSnackbar:n}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,a),name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(S,{entity:i.triggered_entity,setSnackbar:n}),t.jsx(P,{formID:i.triggered_entity_id,formFields:d,handleInput:o=>f(o,e,a),flowluConf:e,setFlowluConf:a,loading:x,setLoading:h,setIsLoading:c,setSnackbar:n}),t.jsx(N,{edit:!0,saveConfig:b,disabled:!u(e),isLoading:g,dataConf:e,setDataConf:a,formFields:d}),t.jsx("br",{})]})}export{O as default};
