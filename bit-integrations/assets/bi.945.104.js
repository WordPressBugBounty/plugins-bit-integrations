import{u as j,o as w,e as u,f as I,r,j as s}from"./main-404.js";import{f as S,$ as N,g as y,_ as a}from"./bi.51.0.js";import{S as E}from"./bi.896.13.js";import{S as F,I as P,s as k}from"./bi.488.3.js";import{h as $,c as g}from"./bi.288.823.js";import{C as L}from"./bi.759.824.js";import{u as R}from"./bi.613.437.js";import"./bi.484.11.js";import"./bi.964.9.js";import"./bi.565.14.js";function Q({allIntegURL:c}){const f=j(),{id:D,formID:p}=w(),[e,i]=u(S),[n,_]=u(N),m=I(y),[d,l]=r.useState(!1),[b,t]=r.useState({show:!1});r.useEffect(()=>{e!=null&&e.module||i(o=>R(o,h=>{h.module="add_subscriber_to_a_form"}))},[]);const x=()=>{if(!g(e)){t({show:!0,msg:a("Please map all required fields to continue.","bit-integrations")});return}if(!(e!=null&&e.module)){t({show:!0,msg:a("Please select module to continue.","bit-integrations")});return}if((e==null?void 0:e.module)==="add_subscriber_to_a_form"&&!(e!=null&&e.formId)){t({show:!0,msg:a("Please select form to continue.","bit-integrations")});return}if(((e==null?void 0:e.module)==="add_tags_to_a_subscriber"||(e==null?void 0:e.module)==="remove_tags_to_a_subscriber")&&!(e!=null&&e.tagIds)){t({show:!0,msg:a("Please select tag continue.","bit-integrations")});return}e.name!==""&&e.field_map.length>0&&k({flow:n,setFlow:_,allIntegURL:c,convertKitConf:e,navigate:f,conf:e,edit:1,setIsLoading:l,setSnackbar:t})};return s.jsxs("div",{style:{width:900},children:[s.jsx(E,{snack:b,setSnackbar:t}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:a("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>$(o,e,i),name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx(F,{entity:n.triggered_entity,setSnackbar:t}),s.jsx(L,{formID:p,formFields:m,convertKitConf:e,setConvertKitConf:i,isLoading:d,setIsLoading:l,setSnackbar:t}),s.jsx(P,{edit:!0,saveConfig:x,disabled:!g(e),isLoading:d,dataConf:e,setDataConf:i,formFields:m}),s.jsx("br",{})]})}export{Q as default};
