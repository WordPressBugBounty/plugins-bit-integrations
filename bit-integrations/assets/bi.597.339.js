var q=Object.defineProperty;var f=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var b=(s,e,i)=>e in s?q(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,g=(s,e)=>{for(var i in e||(e={}))v.call(e,i)&&b(s,i,e[i]);if(f)for(var i of f(e))C.call(e,i)&&b(s,i,e[i]);return s};import{u as _,o as I,r as p,j as a}from"./main-920.js";import"./bi.761.437.js";import{_ as t}from"./bi.247.0.js";import{S as N}from"./bi.970.13.js";import{S as w}from"./bi.319.923.js";import{I as E,s as L}from"./bi.658.3.js";import T from"./bi.8.200.js";import{h as D,c as S}from"./bi.307.755.js";import{F as P}from"./bi.361.754.js";import"./bi.140.9.js";import"./bi.941.11.js";import"./bi.706.14.js";import"./bi.898.700.js";import"./bi.722.674.js";import"./bi.149.675.js";function Y({formFields:s,setFlow:e,flow:i,allIntegURL:y}){const h=_(),{formID:c}=I(),[o,d]=p.useState(!1),[l,m]=p.useState(1),[x,n]=p.useState({show:!1}),k=[{key:"title",label:t("Title","bit-integrations"),required:!0},{key:"content",label:t("Content","bit-integrations"),required:!0},{key:"first_name",label:t("First Name","bit-integrations"),required:!0},{key:"last_name",label:t("Last Name","bit-integrations"),required:!0},{key:"email",label:t("Email","bit-integrations"),required:!0},{key:"city",label:t("City","bit-integrations"),required:!1},{key:"zip",label:t("Zip","bit-integrations"),required:!1},{key:"state",label:t("State","bit-integrations"),required:!1},{key:"country",label:t("Country","bit-integrations"),required:!1},{key:"note",label:t("Note","bit-integrations"),required:!1},{key:"description",label:t("Description","bit-integrations"),required:!1}],[r,u]=p.useState({name:"Fluent Support",type:"Fluent Support",field_map:[{formField:"",fluentSupportFormField:""}],basicFields:k,fluentSupportFields:[],address_field:[],actions:{}}),F=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!S(r)){n({show:!0,msg:t("Please map fields to continue.","bit-integrations")});return}if(!r.actions.support_staff){n({show:!0,msg:t("Support Staff is required!","bit-integrations")});return}r.listId!==""&&m(3)};return a.jsxs("div",{children:[a.jsx(N,{snack:x,setSnackbar:n}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(w,{step:3,active:l})}),a.jsx(T,{formID:c,fluentSupportConf:r,setFluentSupportConf:u,step:l,setstep:m,isLoading:o,setIsLoading:d,setSnackbar:n}),a.jsxs("div",{className:"btcd-stp-page",style:g({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(P,{formID:c,formFields:s,handleInput:j=>D(j,r,u),fluentSupportConf:r,setFluentSupportConf:u,isLoading:o,setIsLoading:d,setSnackbar:n}),a.jsxs("button",{onClick:()=>F(),disabled:o||r.field_map.length<1||!S(r),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[t("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(E,{step:l,saveConfig:()=>L({flow:i,setFlow:e,allIntegURL:y,navigate:h,conf:r,setIsLoading:d,setSnackbar:n}),isLoading:o,dataConf:r,setDataConf:u,formFields:s})]})}export{Y as default};
