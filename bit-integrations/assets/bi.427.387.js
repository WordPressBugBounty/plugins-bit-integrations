var F=Object.defineProperty;var C=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var h=(s,i,a)=>i in s?F(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a,_=(s,i)=>{for(var a in i||(i={}))w.call(i,a)&&h(s,a,i[a]);if(C)for(var a of C(i))I.call(i,a)&&h(s,a,i[a]);return s};import{u as E,r as n,j as r}from"./main-650.js";import{_ as e,d as T,I as L,F as O,c as l}from"./bi.541.15.js";import{S as W}from"./bi.326.902.js";import z from"./bi.396.249.js";import{h as A,c as x}from"./bi.217.840.js";import{C as B}from"./bi.894.841.js";import"./bi.770.713.js";function Z({formFields:s,setFlow:i,flow:a,allIntegURL:c}){const g=E(),[N,m]=n.useState(!1),[y,f]=n.useState({}),[o,k]=n.useState(1),[S,p]=n.useState({show:!1}),v=[{key:"name",label:e("Name","bit-integrations"),required:!0},{key:"email_domain",label:e("Email","bit-integrations"),required:!1},{key:"details",label:e("Description","bit-integrations"),required:!1},{key:"street",label:e("Street","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"postal_code",label:e("Postal Code","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"phone_numbers",label:e("Phone","bit-integrations"),required:!1},{key:"websites",label:e("Website","bit-integrations"),required:!1}],j=[{key:"name",label:e("Name","bit-integrations"),required:!0},{key:"title",label:e("Title","bit-integrations"),required:!1},{key:"details",label:e("Description","bit-integrations"),required:!1},{key:"email_domain",label:e("Email","bit-integrations"),required:!1},{key:"phone_numbers",label:e("Phone","bit-integrations"),required:!1},{key:"street",label:e("Street","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"postal_code",label:e("Postal Code","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"websites",label:e("Website","bit-integrations"),required:!1}],P=[{key:"name",label:e("Opportunity Name","bit-integrations"),required:!0},{key:"close_date",label:e("Close Date","bit-integrations"),required:!1},{key:"details",label:e("Opportunity Details","bit-integrations"),required:!1},{key:"monetary_value",label:e("Value","bit-integrations"),required:!1}],M=[{key:"name",label:e("Task Name","bit-integrations"),required:!0},{key:"due_date",label:e("Due Date","bit-integrations"),required:!1},{key:"reminder_date",label:e("Reminder Date","bit-integrations"),required:!1},{key:"details",label:e("Description","bit-integrations"),required:!1}],[t,d]=n.useState({name:"CopperCRM",type:"CopperCRM",api_key:"",api_email:"",field_map:[{formField:"",coppercrmFormField:""}],actionName:"",companyFields:v,personFields:j,opportunityFields:P,taskFields:M,actions:{}}),D=()=>{m(!0),O(a,i,c,t,g,"","",m).then(u=>{var q;u.success?(l.success((q=u.data)==null?void 0:q.msg),g(c)):l.error(u.data||u)})},R=b=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!x(t)){l.error(e("Please map mandatory fields","bit-integrations"));return}if(t.actionName==="opportunity"){if(!t.selectedCRMPeople){l.error(e("Please select a people","bit-integrations"));return}if(!t.selectedCRMPipelines&&t.actionName==="opportunity"){l.error(e("Please select a Pipeline","bit-integrations"));return}}t.field_map.length>0&&k(b)};return r.jsxs("div",{children:[r.jsx(T,{snack:S,setSnackbar:p}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(W,{step:3,active:o})}),r.jsx(z,{coppercrmConf:t,setCopperCRMConf:d,step:o,setStep:k,loading:y,setLoading:f,setSnackbar:p}),r.jsxs("div",{className:"btcd-stp-page",style:_({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(B,{formFields:s,handleInput:b=>A(b,t,d),coppercrmConf:t,setCopperCRMConf:d,loading:y,setLoading:f,setSnackbar:p}),(t==null?void 0:t.actionName)&&r.jsxs("button",{onClick:()=>R(3),disabled:!x(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&r.jsx(L,{step:o,saveConfig:()=>D(),isLoading:N,dataConf:t,setDataConf:d,formFields:s})]})}export{Z as default};
