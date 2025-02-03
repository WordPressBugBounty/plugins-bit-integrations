var X=Object.defineProperty;var K=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var U=(t,n,s)=>n in t?X(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,p=(t,n)=>{for(var s in n||(n={}))Z.call(n,s)&&U(t,s,n[s]);if(K)for(var s of K(n))L.call(n,s)&&U(t,s,n[s]);return t};import{r as f,j as e,L as S,f as g}from"./main-814.js";import{x as w}from"./bi.8.440.js";import{_ as l,e as C}from"./bi.317.0.js";import{a as y}from"./bi.765.9.js";import{b as F}from"./bi.672.11.js";import{g as B,a as q,b as E,d as G,e as H,f as ee,i as Y,j as z}from"./bi.772.830.js";import{M as te,a as se}from"./bi.59.3.js";function le({agiledConf:t,setAgiledConf:n,loading:s,setLoading:c}){var o,i,x,M,k,R,P,T;const[r,m]=f.useState({show:!1,action:()=>{}}),h=[{label:l("Yes","bit-integrations"),value:"yes"},{label:l("No","bit-integrations"),value:"no"}],N=[{label:l("New Business","bit-integrations"),value:"New Business"},{label:l("Existing Business","bit-integrations"),value:"Existing Business"}],v=(a,d)=>{var _,O,V,$,I,A,D;const b=p({},t);d==="owner"?(_=a.target)!=null&&_.checked?(B(t,n,c),b.actions.owner=!0):(m({show:!1}),delete b.actions.owner):d==="account"?(O=a.target)!=null&&O.checked?(q(t,n,c),b.actions.account=!0):(m({show:!1}),delete b.actions.account):d==="source"?(V=a.target)!=null&&V.checked?(E(t,n,c),b.actions.source=!0):(m({show:!1}),delete b.actions.source):d==="status"?($=a.target)!=null&&$.checked?(G(t,n,c),b.actions.status=!0):(m({show:!1}),delete b.actions.status):d==="lifeCycleStage"?(I=a.target)!=null&&I.checked?(H(t,n,c),b.actions.lifeCycleStage=!0):(m({show:!1}),delete b.actions.lifeCycleStage):d==="followUp"?(A=a.target)!=null&&A.checked?b.actions.followUp=!0:(m({show:!1}),delete b.actions.followUp):d==="dealType"&&((D=a.target)!=null&&D.checked?b.actions.dealType=!0:(m({show:!1}),delete b.actions.dealType)),m({show:d}),n(p({},b))},u=()=>{m({show:!1})},j=(a,d)=>{const b=p({},t);b[d]=a,n(p({},b))};return e.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[t.actionName!=="deal"&&e.jsx(F,{checked:((o=t==null?void 0:t.selectedOwner)==null?void 0:o.length)||!1,onChange:a=>v(a,"owner"),className:"wdt-200 mt-4 mr-2",value:"owner",title:l("Add Owner","bit - integrations"),subTitle:l("Add an owner")}),t.actionName==="contact"&&e.jsx(F,{checked:((i=t==null?void 0:t.selectedAccount)==null?void 0:i.length)||!1,onChange:a=>v(a,"account"),className:"wdt-200 mt-4 mr-2",value:"account",title:l("Add Account","bit - integrations"),subTitle:l("Add an account")}),t.actionName==="deal"&&e.jsx(F,{checked:((x=t==null?void 0:t.selectedDealType)==null?void 0:x.length)||!1,onChange:a=>v(a,"dealType"),className:"wdt-200 mt-4 mr-2",value:"dealType",title:l("Add Deal Type","bit - integrations"),subTitle:l("Add a deal type")}),e.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:r.show==="owner",close:u,action:u,title:l("Owners","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:l("Select Owner","bit-integrations")}),s.owners?e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(w,{options:(M=t==null?void 0:t.owners)==null?void 0:M.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedOwner,onChange:a=>j(a,"selectedOwner"),singleSelect:!0}),e.jsx("button",{onClick:()=>B(t,n,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${l("Refresh Owners","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:r.show==="account",close:u,action:u,title:l("Accounts","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:l("Select Account","bit-integrations")}),s.accounts?e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(w,{options:(k=t==null?void 0:t.accounts)==null?void 0:k.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedAccount,onChange:a=>j(a,"selectedAccount"),singleSelect:!0}),e.jsx("button",{onClick:()=>q(t,n,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${l("Refresh Accounts","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:r.show==="source",close:u,action:u,title:l("Sources","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:l("Select Source","bit-integrations")}),s.sources?e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(w,{options:(R=t==null?void 0:t.sources)==null?void 0:R.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedSource,onChange:a=>j(a,"selectedSource"),singleSelect:!0}),e.jsx("button",{onClick:()=>E(t,n,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${l("Refresh Sources","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:r.show==="status",close:u,action:u,title:l("Status","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:l("Select Status","bit-integrations")}),s.statuses?e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(w,{options:(P=t==null?void 0:t.statuses)==null?void 0:P.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedStatus,onChange:a=>j(a,"selectedStatus"),singleSelect:!0}),e.jsx("button",{onClick:()=>G(t,n,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${l("Refresh statuses","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:r.show==="followUp",close:u,action:u,title:l("Follow Up","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"flx flx-center mt-2",children:e.jsx(w,{options:h==null?void 0:h.map(a=>({label:a.label,value:a.value})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedFollowUp,onChange:a=>j(a,"selectedFollowUp"),singleSelect:!0})})]}),e.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:r.show==="lifeCycleStage",close:u,action:u,title:l("Life cycle stages","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:l("Select life cycle stage","bit-integrations")}),s.lifeCycleStages?e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(w,{options:(T=t==null?void 0:t.lifeCycleStages)==null?void 0:T.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedLifeCycleStage,onChange:a=>j(a,"selectedLifeCycleStage"),singleSelect:!0}),e.jsx("button",{onClick:()=>H(t,n,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${l("Refresh life cycle stages","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:r.show==="dealType",close:u,action:u,title:l("Deal types","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"flx flx-center mt-2",children:e.jsx(w,{options:N==null?void 0:N.map(a=>({label:a.label,value:a.value})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedDealType,onChange:a=>j(a,"selectedDealType"),singleSelect:!0})})]})]})}const W=(t,n,s)=>{const c=p({},n);c.field_map.splice(t,0,{}),s(p({},c))},ce=(t,n,s)=>{const c=p({},n);c.field_map.length>1&&c.field_map.splice(t,1),s(p({},c))},J=(t,n,s,c)=>{const r=p({},s);r.field_map[n][t.target.name]=t.target.value,t.target.value==="custom"&&(r.field_map[n].customValue=""),t.target.value==="customFieldKey"&&(r.field_map[n].customFieldKey=""),c(p({},r))},ae=(t,n,s,c,r)=>{const m=p({},s);m.field_map[n][r]=t.target.value,c(p({},m))};function Q({field:t,index:n,conf:s,setConf:c,fieldValue:r,fieldLabel:m,className:h}){return e.jsx(te,{onChange:N=>ae(N,n,s,c,r),label:l(m,"bit-integrations"),className:h,type:"text",value:t[r],placeholder:l(m,"bit-integrations")})}function ne({i:t,formFields:n,field:s,agiledConf:c,setAgiledConf:r}){var j,o;let m=[];c.actionName==="account"?m=c==null?void 0:c.accountFields:c.actionName==="contact"?m=c==null?void 0:c.contactFields:m=c==null?void 0:c.dealFields;const h=m.filter(i=>i.required===!0)||[],N=m.filter(i=>i.required===!1)||[];if(((j=c==null?void 0:c.field_map)==null?void 0:j.length)===1&&s.agiledFormField===""){const i=p({},c),x=ee(i);i.field_map=x,r(i)}const v=g(C),{isPro:u}=v;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:i=>J(i,t,c,r),children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),e.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:n==null?void 0:n.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),e.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(l("General Smart Codes %s","bit-integrations"),u?"":`(${l("Pro","bit-integrations")})`),children:u&&((o=se)==null?void 0:o.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),s.formField==="custom"&&e.jsx(Q,{field:s,index:t,conf:c,setConf:r,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<h.length,name:"agiledFormField",value:t<h?h[t].label||"":s.agiledFormField||"",onChange:i=>J(i,t,c,r),children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),t<h.length?e.jsx("option",{value:h[t].key,children:h[t].label},h[t].key):N.map(({key:i,label:x})=>e.jsx("option",{value:i,children:x},i)),(c.actionName==="account"||c.actionName==="contact")&&e.jsx("option",{value:"customFieldKey",children:l("Custom Field","bit-integrations")})]}),s.agiledFormField==="customFieldKey"&&e.jsx(Q,{field:s,index:t,conf:c,setConf:r,fieldValue:"customFieldKey",fieldLabel:"Custom Field Key",className:"ml-2"})]}),t>=h.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>W(t,c,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>ce(t,c,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function xe({formFields:t,handleInput:n,agiledConf:s,setAgiledConf:c,loading:r,setLoading:m,setSnackbar:h}){var u,j;const N=o=>{const i=p({},s);i.field_map=[{formField:"",agiledFormField:""}];const{name:x}=o.target;o.target.value!==""?(i[x]=o.target.value,o.target.value==="deal"&&Y(i,c,m)):delete i[x],c(p({},i))},v=(o,i)=>{const x=p({},s);x[i]=o,i==="selectedCRMPipeline"&&o!==""&&(x.selectedCRMPipelineStages="",z(x,c,m)),c(p({},x))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Action:","bit-integrations")}),e.jsxs("select",{onChange:N,name:"actionName",value:s.actionName,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:l("Select an action","bit-integrations")}),e.jsx("option",{value:"account",children:l("Create Account","bit-integrations")}),e.jsx("option",{value:"contact",children:l("Create Contact","bit-integrations")}),e.jsx("option",{value:"deal",children:l("Create Deal","bit-integrations")})]}),(r.CRMPipelines||r.CRMPipelineStages)&&e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.actionName==="contact"&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Role:","bit-integrations")}),e.jsxs("select",{onChange:n,name:"contactRole",value:s.contactRole,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:l("Select a role","bit-integrations")}),e.jsx("option",{value:"Lead",children:l("Lead","bit-integrations")}),e.jsx("option",{value:"Client",children:l("Client","bit-integrations")}),e.jsx("option",{value:"Prospect",children:l("Prospect","bit-integrations")})]})]}),s.actionName==="deal"&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Pipeline:","bit-integrations")}),e.jsx(w,{options:(u=s==null?void 0:s.CRMPipelines)==null?void 0:u.map(o=>({label:o.name,value:o.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedCRMPipeline,onChange:o=>v(o,"selectedCRMPipeline"),disabled:r.CRMPipelines,singleSelect:!0}),e.jsx("button",{onClick:()=>Y(s,c,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh pipelines","bit-integrations")}'`},type:"button",disabled:r.CRMPipelines,children:"↻"})]})]}),s.actionName==="deal"&&s.selectedCRMPipeline&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Stage:","bit-integrations")}),e.jsx(w,{options:(j=s==null?void 0:s.CRMPipelineStages)==null?void 0:j.map(o=>({label:o.name,value:o.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedCRMPipelineStages,onChange:o=>v(o,"selectedCRMPipelineStages"),disabled:r.CRMPipelineStages,singleSelect:!0}),e.jsx("button",{onClick:()=>z(s,c,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh pipeline stages","bit-integrations")}'`},type:"button",disabled:r.CRMPipelineStages,children:"↻"})]})]}),r.customFields&&e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.actionName&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:l("Field Map","bit-integrations")})}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Agiled Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((o,i)=>e.jsx(ne,{i,field:o,agiledConf:s,formFields:t,setAgiledConf:c,setSnackbar:h},`rp-m-${i+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>W(s.field_map.length,s,c),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:l("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(le,{agiledConf:s,setAgiledConf:c,formFields:t,loading:r,setLoading:m})]})]})}export{xe as A};
