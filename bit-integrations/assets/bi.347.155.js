import{u,l as j,e as d,i as h,r as c,j as e}from"./main-650.js";import{g as b,$ as C,h as I,d as v,_ as l,i as w,I as _,s as S}from"./bi.541.15.js";import{D}from"./bi.915.883.js";import{h as N}from"./bi.507.884.js";/* empty css         */function R({allIntegURL:m}){const f=u(),{formID:x}=j(),[s,a]=d(b),[o,y]=d(C),i=h(I),[n,r]=c.useState(!1),[g,t]=c.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(v,{snack:g,setSnackbar:t}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:p=>N(p,s,a),name:"name",value:s.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(w,{entity:o.triggered_entity,setSnackbar:t}),e.jsx(D,{formID:x,formFields:i,discordConf:s,setDiscordConf:a,isLoading:n,setIsLoading:r,setSnackbar:t}),e.jsx(_,{edit:!0,saveConfig:()=>S({flow:o,allIntegURL:m,conf:s,navigate:f,edit:1,setIsLoading:r,setSnackbar:t}),disabled:s.selectedChannel===""||s.selectedServer===""||n,isLoading:n,dataConf:s,setDataConf:a,formFields:i}),e.jsx("br",{})]})}export{R as default};
