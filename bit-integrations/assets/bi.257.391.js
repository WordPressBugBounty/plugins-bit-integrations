var F=Object.defineProperty;var x=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var v=(s,i,a)=>i in s?F(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a,N=(s,i)=>{for(var a in i||(i={}))E.call(i,a)&&v(s,a,i[a]);if(x)for(var a of x(i))z.call(i,a)&&v(s,a,i[a]);return s};import{u as A,r,j as n}from"./main-441.js";import"./bi.141.437.js";import{_ as t,d as m}from"./bi.452.0.js";import{S as L}from"./bi.239.13.js";import{S as M}from"./bi.290.922.js";import{I as T,g as D}from"./bi.73.3.js";import B from"./bi.936.250.js";import{h as R,c as S}from"./bi.719.852.js";import{C as W}from"./bi.485.853.js";import"./bi.663.9.js";import"./bi.866.11.js";import"./bi.655.14.js";import"./bi.292.699.js";function ie({formFields:s,setFlow:i,flow:a,allIntegURL:b}){const u=A(),[j,g]=r.useState(!1),[f,h]=r.useState({}),[o,k]=r.useState(1),[q,p]=r.useState({show:!1}),C=[{key:"name",label:t("Name","bit-integrations"),required:!0},{key:"phone",label:t("Phone","bit-integrations"),required:!1},{key:"email",label:t("Email","bit-integrations"),required:!1},{key:"website",label:t("Website","bit-integrations"),required:!1},{key:"address",label:t("Address","bit-integrations"),required:!1}],P=[{key:"name",label:t("Name","bit-integrations"),required:!0},{key:"designation",label:t("Designation","bit-integrations"),required:!1},{key:"phone",label:t("Phone","bit-integrations"),required:!1},{key:"email",label:t("Email","bit-integrations"),required:!1},{key:"address",label:t("Address","bit-integrations"),required:!1}],_=[{key:"name",label:t("Name","bit-integrations"),required:!0},{key:"size",label:t("Size","bit-integrations"),required:!1}],[e,l]=r.useState({name:"ClinchPad",type:"ClinchPad",api_key:"",field_map:[{formField:"",clinchPadFormField:""}],actionName:"",organizationFields:C,contactFields:P,leadFields:_,actions:{}}),I=()=>{g(!0),D(a,i,b,e,u,"","",g).then(c=>{var y;c.success?(m.success((y=c.data)==null?void 0:y.msg),u(b)):m.error(c.data||c)})},w=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!S(e)){m.error(t("Please map mandatory fields","bit-integrations"));return}if(e.actionName==="lead"&&!e.selectedCRMPipeline){m.error(t("Please select a pipeline","bit-integrations"));return}e.field_map.length>0&&k(d)};return n.jsxs("div",{children:[n.jsx(L,{snack:q,setSnackbar:p}),n.jsx("div",{className:"txt-center mt-2",children:n.jsx(M,{step:3,active:o})}),n.jsx(B,{clinchPadConf:e,setClinchPadConf:l,step:o,setStep:k,loading:f,setLoading:h,setSnackbar:p}),n.jsxs("div",{className:"btcd-stp-page",style:N({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[n.jsx(W,{formFields:s,handleInput:d=>R(d,e,l),clinchPadConf:e,setClinchPadConf:l,loading:f,setLoading:h,setSnackbar:p}),(e==null?void 0:e.actionName)&&n.jsxs("button",{onClick:()=>w(3),disabled:!S(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[t("Next","bit-integrations"),"  ",n.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&n.jsx(T,{step:o,saveConfig:()=>I(),isLoading:j,dataConf:e,setDataConf:l,formFields:s})]})}export{ie as default};
