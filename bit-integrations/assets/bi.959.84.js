import{u as h,r as s,e as l,i as v,j as e}from"./main-579.js";import{$ as j,g as y,h as C,d as _,_ as d,i as w,I}from"./bi.919.15.js";import{e as b,s as N}from"./bi.704.767.js";import{K as S}from"./bi.221.768.js";import"./bi.850.660.js";import"./bi.517.661.js";function D({allIntegURL:r}){const m=h(),[c,i]=s.useState({show:!1}),[n,k]=l(j),[t,a]=l(y),o=v(C),[f,g]=s.useState(!1),[p,x]=s.useState({list:!1,field:!1,auth:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(_,{snack:c,setSnackbar:i}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:u=>b(u,t,a),value:t.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),e.jsx("div",{className:"my-3",children:e.jsx(w,{entity:n.triggered_entity,setSnackbar:i})}),e.jsx(S,{formFields:o,klaviyoConf:t,setKlaviyoConf:a,loading:p,setLoading:x}),e.jsx(I,{edit:!0,saveConfig:()=>{N(n,r,t,m,{edit:1},g)},disabled:t.field_map.length<1,isLoading:f,dataConf:t,setDataConf:a,formFields:o})]})}export{D as default};
