var A=Object.defineProperty;var h=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var N=(s,i,a)=>i in s?A(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a,L=(s,i)=>{for(var a in i||(i={}))w.call(i,a)&&N(s,a,i[a]);if(h)for(var a of h(i))I.call(i,a)&&N(s,a,i[a]);return s};import{u as P,r as l,j as r}from"./main-252.js";import"./bi.269.440.js";import{_ as e,d as c}from"./bi.63.0.js";import{S as R}from"./bi.588.13.js";import{S as E}from"./bi.465.934.js";import{I as T,i as B}from"./bi.163.3.js";import D from"./bi.473.270.js";import{h as W,c as x}from"./bi.894.899.js";import{M as z}from"./bi.601.900.js";import"./bi.456.9.js";import"./bi.494.11.js";import"./bi.275.14.js";import"./bi.41.709.js";function ie({formFields:s,setFlow:i,flow:a,allIntegURL:y}){const f=P(),[C,g]=l.useState(!1),[m,p]=l.useState({}),[n,k]=l.useState(1),[S,u]=l.useState({show:!1}),M=[{key:"name",label:e("Name","bit-integrations"),required:!0},{key:"address1",label:e("Address1","bit-integrations"),required:!1},{key:"address2",label:e("Address2","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"locality",label:e("Locality","bit-integrations"),required:!1},{key:"postal",label:e("Postal","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"website",label:e("Website","bit-integrations"),required:!1},{key:"phone",label:e("Phone","bit-integrations"),required:!1},{key:"leadSource",label:e("Lead Source","bit-integrations"),required:!1},{key:"hourlyAmount",label:e("Hourly Amount","bit-integrations"),required:!1},{key:"currency",label:e("Currency","bit-integrations"),required:!1},{key:"notes",label:e("Notes","bit-integrations"),required:!1},{key:"firstName",label:e("Contact First Name","bit-integrations"),required:!1},{key:"lastName",label:e("Contact Last Name","bit-integrations"),required:!1},{key:"email",label:e("Contact Email","bit-integrations"),required:!1}],v=[{key:"email",label:e("Email Address","bit-integrations"),required:!0},{key:"first",label:e("First Name","bit-integrations"),required:!1},{key:"last",label:e("Last Name","bit-integrations"),required:!1},{key:"phone",label:e("Phone","bit-integrations"),required:!1},{key:"notes",label:e("Notes","bit-integrations"),required:!1}],j=[{key:"name",label:e("Opportunity Name","bit-integrations"),required:!0},{key:"description",label:e("Description","bit-integrations"),required:!1},{key:"value",label:e("Value","bit-integrations"),required:!1},{key:"firstName",label:e("Lead First Name","bit-integrations"),required:!1},{key:"lastName",label:e("Lead Last Name","bit-integrations"),required:!1},{key:"email",label:e("Lead Email","bit-integrations"),required:!1},{key:"phone",label:e("Lead Phone","bit-integrations"),required:!1},{key:"role",label:e("Lead Role","bit-integrations"),required:!1},{key:"businessName",label:e("Lead Business Name","bit-integrations"),required:!1},{key:"website",label:e("Lead Website","bit-integrations"),required:!1},{key:"address1",label:e("Lead Address 1","bit-integrations"),required:!1},{key:"address2",label:e("Lead Address 2","bit-integrations"),required:!1},{key:"city",label:e("Lead City","bit-integrations"),required:!1},{key:"locality",label:e("Lead Locality","bit-integrations"),required:!1},{key:"postal",label:e("Lead Postal","bit-integrations"),required:!1},{key:"country",label:e("Lead Country","bit-integrations"),required:!1},{key:"sourceUrl",label:e("Lead Source Url","bit-integrations"),required:!1},{key:"leadSource",label:e("Lead Source","bit-integrations"),required:!1}],[t,o]=l.useState({name:"MoxieCRM",type:"MoxieCRM",api_key:"",api_url:"",field_map:[{formField:"",moxiecrmFormField:""}],actionName:"",clientFields:M,contactFields:v,opportunityFields:j,actions:{}}),F=()=>{g(!0),B(a,i,y,t,f,"","",g).then(b=>{var q;b.success?(c.success((q=b.data)==null?void 0:q.msg),f(y)):c.error(b.data||b)})},_=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!x(t)){c.error(e("Please map mandatory fields","bit-integrations"));return}t.field_map.length>0&&k(d)};return r.jsxs("div",{children:[r.jsx(R,{snack:S,setSnackbar:u}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(E,{step:3,active:n})}),r.jsx(D,{moxiecrmConf:t,setMoxieCRMConf:o,step:n,setStep:k,loading:m,setLoading:p,setSnackbar:u}),r.jsxs("div",{className:"btcd-stp-page",style:L({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(z,{formFields:s,handleInput:d=>W(d,t,o),moxiecrmConf:t,setMoxieCRMConf:o,loading:m,setLoading:p,setSnackbar:u}),(t==null?void 0:t.actionName)&&r.jsxs("button",{onClick:()=>_(3),disabled:!x(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&r.jsx(T,{step:n,saveConfig:()=>F(),isLoading:C,dataConf:t,setDataConf:o,formFields:s})]})}export{ie as default};
