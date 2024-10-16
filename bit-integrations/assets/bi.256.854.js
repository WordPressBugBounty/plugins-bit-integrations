var st=Object.defineProperty;var W=Object.getOwnPropertySymbols;var dt=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var X=(i,n,e)=>n in i?st(i,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[n]=e,j=(i,n)=>{for(var e in n||(n={}))dt.call(n,e)&&X(i,e,n[e]);if(W)for(var e of W(n))ut.call(n,e)&&X(i,e,n[e]);return i};import{r as ot,j as t,L as v,i as bt}from"./main-29.js";import{m as w,_ as c,e as R,n as a,H as ht,j as pt,k as xt}from"./bi.860.15.js";import{g as Y,a as Z,b as L,d as C,e as f,f as tt,i as it,j as et,k as ct,l as S,m as rt,r as P}from"./bi.470.853.js";const nt=(i,n,e)=>{const l=j({},n);l.field_map.splice(i,0,{}),e(j({},l))},gt=(i,n,e)=>{const l=j({},n);l.field_map.length>1&&l.field_map.splice(i,1),e(j({},l))},lt=(i,n,e,l)=>{const s=j({},e);s.field_map[n][i.target.name]=i.target.value,i.target.value==="custom"&&(s.field_map[n].customValue=""),i.target.value==="customFieldKey"&&(s.field_map[n].customFieldKey=""),l(j({},s))},jt=(i,n,e,l,s)=>{const u=j({},e);u.field_map[n][s]=i.target.value,l(j({},u))};function at({salesmateConf:i,setSalesmateConf:n,loading:e,setLoading:l}){var M,m,h,A,k,d,x,y,I,F,T,_,O,$,V,q,D;const[s,u]=ot.useState({show:!1,action:()=>{}}),p=(r,N)=>{var E,H,K,B,G,U,z,J,Q;const b=j({},i);N==="tag"?(E=r.target)!=null&&E.checked?(Y(i,n,l),b.actions.tag=!0):(u({show:!1}),delete b.actions.tag):N==="type"?(H=r.target)!=null&&H.checked?(b.types=Z(n),b.actions.type=!0):(u({show:!1}),delete b.actions.type):N==="lostReason"?(K=r.target)!=null&&K.checked?(b.lostReasons=L(n),b.actions.lostReason=!0):(u({show:!1}),delete b.actions.lostReason):N==="source"?(B=r.target)!=null&&B.checked?(b.sources=C(n),b.actions.source=!0):(u({show:!1}),delete b.actions.source):N==="status"?(G=r.target)!=null&&G.checked?(b.statuses=f(n),b.actions.status=!0):(u({show:!1}),delete b.actions.status):N==="priority"?(U=r.target)!=null&&U.checked?(b.priorities=tt(n),b.actions.priority=!0):(u({show:!1}),delete b.actions.priority):N==="currency"?(z=r.target)!=null&&z.checked?(it(i,n,l),b.actions.currency=!0):(u({show:!1}),delete b.actions.currency):N==="isActive"?(J=r.target)!=null&&J.checked?b.actions.isActive=!0:(u({show:!1}),delete b.actions.isActive):N==="company"&&((Q=r.target)!=null&&Q.checked?(et(i,n,l),b.actions.company=!0):(u({show:!1}),delete b.actions.company)),u({show:N}),n(j({},b))},o=()=>{u({show:!1})},g=(r,N)=>{const b=j({},i);b[N]=r,n(j({},b))};return t.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[(Number(i.actionId)===1||Number(i.actionId)===4||Number(i.actionId)===5||Number(i.actionId)===6)&&t.jsx(w,{checked:((M=i==null?void 0:i.selectedTag)==null?void 0:M.length)||!1,onChange:r=>p(r,"tag"),className:"wdt-200 mt-4 mr-2",value:"tag",title:c("Add Tags","bit - integrations"),subTitle:c("Add tags")}),(Number(i.actionId)===1||Number(i.actionId)===5)&&t.jsx(w,{checked:((m=i==null?void 0:i.selectedType)==null?void 0:m.length)||!1,onChange:r=>p(r,"type"),className:"wdt-200 mt-4 mr-2",value:"type",title:c("Add type","bit - integrations"),subTitle:c("Add a Type")}),(Number(i.actionId)===1||Number(i.actionId)===4||Number(i.actionId)===5||Number(i.actionId)===6)&&t.jsx(w,{checked:((h=i==null?void 0:i.selectedCurrency)==null?void 0:h.length)||!1,onChange:r=>p(r,"currency"),className:"wdt-200 mt-4 mr-2",value:"currency",title:c("Add Currency","bit - integrations"),subTitle:c("Add a Currency")}),Number(i.actionId)===4&&t.jsx(w,{checked:((A=i==null?void 0:i.selectedLostReason)==null?void 0:A.length)||!1,onChange:r=>p(r,"lostReason"),className:"wdt-200 mt-4 mr-2",value:"lostReason",title:c("Add Lost Reasons","bit - integrations"),subTitle:c("Add a Lost Reason")}),Number(i.actionId)===4&&t.jsx(w,{checked:((k=i==null?void 0:i.selectedSource)==null?void 0:k.length)||!1,onChange:r=>p(r,"source"),className:"wdt-200 mt-4 mr-2",value:"source",title:c("Add Source","bit - integrations"),subTitle:c("Add a Source")}),Number(i.actionId)===4&&t.jsx(w,{checked:((d=i==null?void 0:i.selectedStatus)==null?void 0:d.length)||!1,onChange:r=>p(r,"status"),className:"wdt-200 mt-4 mr-2",value:"status",title:c("Add Status","bit - integrations"),subTitle:c("Add Status")}),Number(i.actionId)===4&&t.jsx(w,{checked:((x=i==null?void 0:i.selectedPriority)==null?void 0:x.length)||!1,onChange:r=>p(r,"priority"),className:"wdt-200 mt-4 mr-2",value:"priority",title:c("Add Priority","bit - integrations"),subTitle:c("Add Priority")}),Number(i.actionId)===4&&t.jsx(w,{checked:((y=i==null?void 0:i.selectedCompany)==null?void 0:y.length)||!1,onChange:r=>p(r,"company"),className:"wdt-200 mt-4 mr-2",value:"company",title:c("Add Company","bit - integrations"),subTitle:c("Add Company")}),Number(i.actionId)===6&&t.jsx(w,{checked:((I=i==null?void 0:i.selectedIsActive)==null?void 0:I.length)||!1,onChange:r=>p(r,"isActive"),className:"wdt-200 mt-4 mr-2",value:"isActive",title:c("Add Active for Sale","bit - integrations"),subTitle:c("Is Active or Not")}),t.jsxs(R,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:s.show==="tag",close:o,action:o,title:c("Tags","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:c("Select tag","bit-integrations")}),e.tags?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(a,{options:(F=i==null?void 0:i.tags)==null?void 0:F.map(r=>({label:r.tag,value:r.tag})),className:"msl-wrp-options",defaultValue:i==null?void 0:i.selectedTag,onChange:r=>g(r,"selectedTag")}),t.jsx("button",{onClick:()=>Y(i,n,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh Tags","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(R,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:s.show==="type",close:o,action:o,title:c("Tags","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:c("Select type","bit-integrations")}),e.CRMType?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(a,{options:(T=i==null?void 0:i.types)==null?void 0:T.map(r=>({label:r,value:r})),className:"msl-wrp-options",defaultValue:i==null?void 0:i.selectedType,onChange:r=>g(r,"selectedType"),singleSelect:!0}),t.jsx("button",{onClick:()=>Z(n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh Types","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(R,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:s.show==="lostReason",close:o,action:o,title:c("Currency-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:c("Select Lost Reason","bit-integrations")}),e.CRMLostReason?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(a,{options:(_=i==null?void 0:i.lostReasons)==null?void 0:_.map(r=>({label:r,value:r})),className:"msl-wrp-options",defaultValue:i==null?void 0:i.selectedLostReason,onChange:r=>g(r,"selectedLostReason"),singleSelect:!0}),t.jsx("button",{onClick:()=>L(n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh LostReasons","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(R,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:s.show==="source",close:o,action:o,title:c("Source","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:c("Select Source","bit-integrations")}),e.CRMSource?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(a,{options:(O=i==null?void 0:i.sources)==null?void 0:O.map(r=>({label:r,value:r})),className:"msl-wrp-options",defaultValue:i==null?void 0:i.selectedSource,onChange:r=>g(r,"selectedSource"),singleSelect:!0}),t.jsx("button",{onClick:()=>C(n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh Source","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(R,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:s.show==="status",close:o,action:o,title:c("Status","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:c("Select Status","bit-integrations")}),e.CRMStatus?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(a,{options:($=i==null?void 0:i.statuses)==null?void 0:$.map(r=>({label:r,value:r})),className:"msl-wrp-options",defaultValue:i==null?void 0:i.selectedStatus,onChange:r=>g(r,"selectedStatus"),singleSelect:!0}),t.jsx("button",{onClick:()=>f(n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh Status","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(R,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:s.show==="priority",close:o,action:o,title:c("Priority","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:c("Select Priority","bit-integrations")}),e.CRMPriority?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(a,{options:(V=i==null?void 0:i.priorities)==null?void 0:V.map(r=>({label:r,value:r})),className:"msl-wrp-options",defaultValue:i==null?void 0:i.selectedPriority,onChange:r=>g(r,"selectedPriority"),singleSelect:!0}),t.jsx("button",{onClick:()=>tt(n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh Priority","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(R,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:s.show==="currency",close:o,action:o,title:c("Currency","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:c("Select Currency","bit-integrations")}),e.CRMCurrency?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(a,{options:(q=i==null?void 0:i.currencies)==null?void 0:q.map(r=>({label:r.currency,value:r.currency})),className:"msl-wrp-options",defaultValue:i==null?void 0:i.selectedCurrency,onChange:r=>g(r,"selectedCurrency"),singleSelect:!0}),t.jsx("button",{onClick:()=>it(i,n,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh Currency","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(R,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:s.show==="isActive",close:o,action:o,title:c("Active For Sale","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:c("Select isActive","bit-integrations")}),e.isActive?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(a,{options:[{label:"True",value:"1"},{label:"False",value:"0"}],className:"msl-wrp-options",defaultValue:i==null?void 0:i.selectedIsActive,onChange:r=>g(r,"selectedIsActive"),singleSelect:!0})})]}),t.jsxs(R,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:s.show==="company",close:o,action:o,title:c("Company","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:c("Select Company","bit-integrations")}),e.CRMCompany?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(a,{options:(D=i==null?void 0:i.companies)==null?void 0:D.map(r=>({label:r.name,value:r.id.toString()})),className:"msl-wrp-options",defaultValue:i==null?void 0:i.selectedCompany,onChange:r=>g(r,"selectedCompany"),singleSelect:!0}),t.jsx("button",{onClick:()=>et(i,n,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh Company","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}function yt({field:i,index:n,conf:e,setConf:l,fieldValue:s,fieldLabel:u,className:p}){return t.jsx(ht,{onChange:o=>jt(o,n,e,l,s),label:c(u,"bit-integrations"),className:p,type:"text",value:i[s],placeholder:c(u,"bit-integrations")})}function Nt({i,formFields:n,field:e,salesmateConf:l,setSalesmateConf:s}){var m;const u=["owner","pipeline","stage","primaryContact","type","tags","lostReason","source","status","priority","currency","isActive","primaryCompany"],p=(l==null?void 0:l.salesmateFields)&&(l==null?void 0:l.salesmateFields.filter(h=>h.required===!0&&!u.includes(h.key)))||[],o=(l==null?void 0:l.salesmateFields)&&(l==null?void 0:l.salesmateFields.filter(h=>h.required===!1&&!u.includes(h.key)))||[],g=bt(pt),{isPro:M}=g;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:h=>lt(h,i,l,s),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),t.jsx("optgroup",{label:c("Form Fields","bit-integrations"),children:n==null?void 0:n.map(h=>t.jsx("option",{value:h.name,children:h.label},`ff-rm-${h.name}`))}),t.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(c("General Smart Codes %s","bit-integrations"),M?"":`(${c("Pro","bit-integrations")})`),children:M&&((m=xt)==null?void 0:m.map(h=>t.jsx("option",{value:h.name,children:h.label},`ff-rm-${h.name}`)))})]}),e.formField==="custom"&&t.jsx(yt,{field:e,index:i,conf:l,setConf:s,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),t.jsxs("select",{className:"btcd-paper-inp",disabled:i<p.length,name:"salesmateFormField",value:i<p.length?p[i].key||"":e.salesmateFormField||"",onChange:h=>lt(h,i,l,s),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),i<p.length?t.jsx("option",{value:p[i].key,children:p[i].label},p[i].key):o.map(({key:h,label:A})=>t.jsx("option",{value:h,children:A},h))]})]}),i>=p.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>nt(i,l,s),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>gt(i,l,s),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function Mt({formFields:i,handleInput:n,salesmateConf:e,setSalesmateConf:l,loading:s,setLoading:u,isLoading:p,setIsLoading:o,setSnackbar:g}){var h,A,k;const M=d=>{const x=j({},e),{name:y}=d.target;d.target.value!==""?(x[y]=d.target.options[d.target.selectedIndex].dataset.action_name,x.actionId=d.target.value,Number(d.target.value)===4&&ct(x,l,s,u),Number(d.target.value)!==4&&(o(!0),S(x,l,s,u),P(x,l,o,g))):(delete x[y],delete x.actionId),l(x)},m=(d,x)=>{var I;const y=j({},e);if(y[x]=d,x==="selectedCRMContact"&&(o(!0),S(y,l,s,u),rt(y,l,s,u),P(y,l,o,g)),x==="selectedCRMPipeline"){const F=e==null?void 0:e.CRMPipelines.filter(T=>T.pipeline===d);y.stages=(I=F[0])==null?void 0:I.stages}l(j({},y))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:c("Select Action:","bit-integrations")}),t.jsxs("select",{onChange:M,name:"actionName",value:e.actionId,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:c("Select an action","bit-integrations")}),t.jsx("option",{value:"1","data-action_name":"contact",children:c("Create Contact","bit-integrations")}),t.jsx("option",{value:"4","data-action_name":"deal",children:c("Create Deal","bit-integrations")}),t.jsx("option",{value:"5","data-action_name":"company",children:c("Create Company","bit-integrations")}),t.jsx("option",{value:"6","data-action_name":"product",children:c("Create Product","bit-integrations")})]}),(s.CRMPipelines||s.CRMOwners||s.CRMContacts)&&t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),Number(e.actionId)===4&&!(e!=null&&e.CRMContacts)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("small",{className:"wdt-200 d-in-b error-msg",children:c("Contacts not found!","bit-integrations")}),t.jsx("br",{}),t.jsx("br",{})]}),Number(e.actionId)===4&&(e==null?void 0:e.CRMContacts)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Select Contact:","bit-integrations")}),t.jsx(a,{options:(h=e==null?void 0:e.CRMContacts)==null?void 0:h.map(d=>({label:d.name,value:d.id.toString()})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedCRMContact,onChange:d=>m(d,"selectedCRMContact"),disabled:s.CRMContacts,singleSelect:!0}),t.jsx("button",{onClick:()=>ct(e,l,s,u),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh Primary Contacts","bit-integrations")}'`},type:"button",disabled:s.CRMContact,children:"↻"})]})]}),(Number(e.actionId)===4&&(e==null?void 0:e.selectedCRMContact)||e.actionName&&Number(e.actionId)!==4&&(e==null?void 0:e.CRMOwners))&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Select Owner:","bit-integrations")}),t.jsx(a,{options:(A=e==null?void 0:e.CRMOwners)==null?void 0:A.map(d=>({label:d.name,value:d.id.toString()})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedCRMOwner,onChange:d=>m(d,"selectedCRMOwner"),disabled:s.CRMOwners,singleSelect:!0}),t.jsx("button",{onClick:()=>S(e,l,s,u),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh Owners","bit-integrations")}'`},type:"button",disabled:s.CRMOwners,children:"↻"})]})]}),Number(e.actionId)===4&&(e==null?void 0:e.selectedCRMContact)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Select Pipeline:","bit-integrations")}),t.jsx(a,{options:(k=e==null?void 0:e.CRMPipelines)==null?void 0:k.map(d=>({label:d.pipeline,value:d.pipeline})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedCRMPipeline,onChange:d=>m(d,"selectedCRMPipeline"),disabled:s.CRMPipelines,singleSelect:!0}),t.jsx("button",{onClick:()=>rt(e,l,s,u),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh pipelines","bit-integrations")}'`},type:"button",disabled:s.CRMPipelines,children:"↻"})]})]}),Number(e.actionId)===4&&e.selectedCRMPipeline&&(e==null?void 0:e.selectedCRMContact)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Select Stage:","bit-integrations")}),t.jsx(a,{options:e==null?void 0:e.stages.map(d=>({label:d.stage,value:d.stage})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedCRMStage,onChange:d=>m(d,"selectedCRMStage"),disabled:s.CRMStage,singleSelect:!0})]})]}),p&&t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(Number(e.actionId)===4&&(e==null?void 0:e.selectedCRMContact)||e.actionName&&Number(e.actionId)!==4)&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsxs("div",{className:"mt-5",children:[t.jsx("b",{className:"wdt-100",children:c("Field Map","bit-integrations")}),t.jsx("button",{onClick:()=>P(e,l,o,g),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh fields","bit-integrations")}'`},type:"button",disabled:s.CRMPipelines,children:"↻"})]}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("Salesmate Fields","bit-integrations")})})]}),e==null?void 0:e.field_map.map((d,x)=>t.jsx(Nt,{i:x,field:d,salesmateConf:e,formFields:i,setSalesmateConf:l,setSnackbar:g},`rp-m-${x+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>nt(e.field_map.length,e,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:c("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(at,{salesmateConf:e,setSalesmateConf:l,formFields:i,loading:s,setLoading:u})]})]})}export{Mt as S};
