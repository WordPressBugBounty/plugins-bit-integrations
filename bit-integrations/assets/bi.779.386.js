var w=Object.defineProperty;var x=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var v=(s,a,i)=>a in s?w(s,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[a]=i,N=(s,a)=>{for(var i in a||(a={}))E.call(a,i)&&v(s,i,a[i]);if(x)for(var i of x(a))z.call(a,i)&&v(s,i,a[i]);return s};import{u as A,r,j as n}from"./main-830.js";import{_ as t,d as L,I as M,F as T,c as m}from"./bi.597.15.js";import{S as D}from"./bi.963.902.js";import B from"./bi.313.248.js";import{h as R,c as j}from"./bi.413.838.js";import{C as W}from"./bi.422.839.js";import"./bi.972.713.js";function Y({formFields:s,setFlow:a,flow:i,allIntegURL:u}){const g=A(),[q,p]=r.useState(!1),[f,h]=r.useState({}),[o,k]=r.useState(1),[C,b]=r.useState({show:!1}),S=[{key:"name",label:t("Name","bit-integrations"),required:!0},{key:"phone",label:t("Phone","bit-integrations"),required:!1},{key:"email",label:t("Email","bit-integrations"),required:!1},{key:"website",label:t("Website","bit-integrations"),required:!1},{key:"address",label:t("Address","bit-integrations"),required:!1}],P=[{key:"name",label:t("Name","bit-integrations"),required:!0},{key:"designation",label:t("Designation","bit-integrations"),required:!1},{key:"phone",label:t("Phone","bit-integrations"),required:!1},{key:"email",label:t("Email","bit-integrations"),required:!1},{key:"address",label:t("Address","bit-integrations"),required:!1}],_=[{key:"name",label:t("Name","bit-integrations"),required:!0},{key:"size",label:t("Size","bit-integrations"),required:!1}],[e,l]=r.useState({name:"ClinchPad",type:"ClinchPad",api_key:"",field_map:[{formField:"",clinchPadFormField:""}],actionName:"",organizationFields:S,contactFields:P,leadFields:_,actions:{}}),F=()=>{p(!0),T(i,a,u,e,g,"","",p).then(c=>{var y;c.success?(m.success((y=c.data)==null?void 0:y.msg),g(u)):m.error(c.data||c)})},I=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!j(e)){m.error(t("Please map mandatory fields","bit-integrations"));return}if(e.actionName==="lead"&&!e.selectedCRMPipeline){m.error(t("Please select a pipeline","bit-integrations"));return}e.field_map.length>0&&k(d)};return n.jsxs("div",{children:[n.jsx(L,{snack:C,setSnackbar:b}),n.jsx("div",{className:"txt-center mt-2",children:n.jsx(D,{step:3,active:o})}),n.jsx(B,{clinchPadConf:e,setClinchPadConf:l,step:o,setStep:k,loading:f,setLoading:h,setSnackbar:b}),n.jsxs("div",{className:"btcd-stp-page",style:N({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[n.jsx(W,{formFields:s,handleInput:d=>R(d,e,l),clinchPadConf:e,setClinchPadConf:l,loading:f,setLoading:h,setSnackbar:b}),(e==null?void 0:e.actionName)&&n.jsxs("button",{onClick:()=>I(3),disabled:!j(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[t("Next","bit-integrations"),"  ",n.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&n.jsx(M,{step:o,saveConfig:()=>F(),isLoading:q,dataConf:e,setDataConf:l,formFields:s})]})}export{Y as default};
