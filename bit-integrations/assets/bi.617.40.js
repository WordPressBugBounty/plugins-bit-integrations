import{u as h,e as l,i as j,r as c,j as t}from"./main-29.js";import{g as b,$ as _,h as w,d as C,_ as i,i as I,I as v,s as y}from"./bi.860.15.js";import{h as N,A as S,c as A}from"./bi.505.707.js";import"./bi.831.661.js";import"./bi.392.662.js";function R({allIntegURL:m}){const f=h(),[e,a]=l(b),[n,g]=l(_),o=j(w),[r,d]=c.useState(!1),[p,s]=c.useState({show:!1}),u=()=>{if(!A(e)){s({show:!0,msg:i("Please map all required fields to continue.","bit-integrations")});return}y({flow:n,setFlow:g,allIntegURL:m,conf:e,navigate:f,edit:1,setIsLoading:d,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:p,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:i("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:x=>N(x,e,a),name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(I,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(S,{formID:n.triggered_entity_id,formFields:o,autonamiConf:e,setAutonamiConf:a,isLoading:r,step:2,setIsLoading:d,setSnackbar:s}),t.jsx(v,{edit:!0,saveConfig:u,disabled:e.field_map.length<1,isLoading:r,dataConf:e,setDataConf:a,formFields:o}),t.jsx("br",{})]})}export{R as default};
