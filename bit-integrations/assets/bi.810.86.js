import{u as N,o as y,e as p,r as n,f as C,j as t}from"./main-246.js";import{e as D,$ as P,f as k,_ as o}from"./bi.560.0.js";import{S as E}from"./bi.222.13.js";import{u as F}from"./bi.675.443.js";import{S as L,I as R,s as $}from"./bi.545.3.js";import{h as A,c as M,a as q}from"./bi.649.838.js";import{P as z}from"./bi.285.839.js";import"./bi.947.9.js";import"./bi.975.11.js";import"./bi.557.14.js";import"./bi.300.720.js";import"./bi.924.721.js";import"./bi.583.833.js";function Z({allIntegURL:u}){const f=N(),{id:g}=y(),[e,s]=p(D),[r,x]=p(P),[d,m]=n.useState(!1),[h,a]=n.useState({show:!1}),[l,b]=n.useState(0),c=C(k),[j,v]=n.useState((e==null?void 0:e.name)||""),I=()=>{if(!M(e)){a({show:!0,msg:o("Please map mandatory fields","bit-integrations")});return}if(!q(e)){["Leads","Deals","Activities","Notes"].includes(e.moduleData.module)&&a({show:!0,msg:o("Please select a organization or a person","bit-integrations")});return}$({flow:r,setFlow:x,allIntegURL:u,conf:e,navigate:f,id:g,edit:1,setIsLoading:m,setSnackbar:a})},_=i=>{v(i.target.value),s(w=>F(w,S=>{S.name=i.target.value}))};return t.jsxs("div",{style:{width:900},children:[t.jsx(E,{snack:h,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 ",children:o("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:_,name:"name",value:j,type:"text",placeholder:o("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(L,{entity:r.triggered_entity,setSnackbar:a}),t.jsx(z,{tab:l,settab:b,formID:r.triggered_entity_id,formFields:c,handleInput:i=>A(i,l,e,s,m,a),pipeDriveConf:e,setPipeDriveConf:s,isLoading:d,setIsLoading:m,setSnackbar:a}),t.jsx(R,{edit:!0,saveConfig:I,disabled:e.moduleData.module===""||e.field_map.length<1,isLoading:d,dataConf:e,setDataConf:s,formFields:c}),t.jsx("br",{})]})}export{Z as default};
