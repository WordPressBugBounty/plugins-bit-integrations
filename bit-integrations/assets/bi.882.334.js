var q=Object.defineProperty;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var b=(s,e,i)=>e in s?q(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,g=(s,e)=>{for(var i in e||(e={}))v.call(e,i)&&b(s,i,e[i]);if(m)for(var i of m(e))C.call(e,i)&&b(s,i,e[i]);return s};import{u as _,l as I,r as p,j as r}from"./main-29.js";import{_ as t,d as N,I as w,s as E}from"./bi.860.15.js";import{S as L}from"./bi.885.903.js";import T from"./bi.75.198.js";import{h as D,c as S}from"./bi.569.741.js";import{F as P}from"./bi.827.740.js";import"./bi.244.714.js";import"./bi.831.661.js";import"./bi.392.662.js";function O({formFields:s,setFlow:e,flow:i,allIntegURL:y}){const h=_(),{formID:c}=I(),[o,d]=p.useState(!1),[l,f]=p.useState(1),[x,n]=p.useState({show:!1}),k=[{key:"title",label:t("Title","bit-integrations"),required:!0},{key:"content",label:t("Content","bit-integrations"),required:!0},{key:"first_name",label:t("First Name","bit-integrations"),required:!0},{key:"last_name",label:t("Last Name","bit-integrations"),required:!0},{key:"email",label:t("Email","bit-integrations"),required:!0},{key:"city",label:t("City","bit-integrations"),required:!1},{key:"zip",label:t("Zip","bit-integrations"),required:!1},{key:"state",label:t("State","bit-integrations"),required:!1},{key:"country",label:t("Country","bit-integrations"),required:!1},{key:"note",label:t("Note","bit-integrations"),required:!1},{key:"description",label:t("Description","bit-integrations"),required:!1}],[a,u]=p.useState({name:"Fluent Support",type:"Fluent Support",field_map:[{formField:"",fluentSupportFormField:""}],basicFields:k,fluentSupportFields:[],address_field:[],actions:{}}),F=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!S(a)){n({show:!0,msg:t("Please map fields to continue.","bit-integrations")});return}if(!a.actions.support_staff){n({show:!0,msg:t("Support Staff is required!","bit-integrations")});return}a.listId!==""&&f(3)};return r.jsxs("div",{children:[r.jsx(N,{snack:x,setSnackbar:n}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(L,{step:3,active:l})}),r.jsx(T,{formID:c,fluentSupportConf:a,setFluentSupportConf:u,step:l,setstep:f,isLoading:o,setIsLoading:d,setSnackbar:n}),r.jsxs("div",{className:"btcd-stp-page",style:g({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(P,{formID:c,formFields:s,handleInput:j=>D(j,a,u),fluentSupportConf:a,setFluentSupportConf:u,isLoading:o,setIsLoading:d,setSnackbar:n}),r.jsxs("button",{onClick:()=>F(),disabled:o||a.field_map.length<1||!S(a),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[t("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),r.jsx(w,{step:l,saveConfig:()=>E({flow:i,setFlow:e,allIntegURL:y,navigate:h,conf:a,setIsLoading:d,setSnackbar:n}),isLoading:o,dataConf:a,setDataConf:u,formFields:s})]})}export{O as default};
