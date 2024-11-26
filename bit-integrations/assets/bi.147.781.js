var C=Object.defineProperty;var W=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var Y=(i,c,u)=>c in i?C(i,c,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[c]=u,T=(i,c)=>{for(var u in c||(c={}))f.call(c,u)&&Y(i,u,c[u]);if(W)for(var u of W(c))tt.call(c,u)&&Y(i,u,c[u]);return i};import{f as it,j as t,r as E,L as v}from"./main-615.js";import{u as O}from"./bi.991.437.js";import{e as et,_ as a,i as s}from"./bi.394.0.js";import{a as at,h as lt,b as nt}from"./bi.819.3.js";import{a as V,b as M,d as R,e as U,f as B,i as G,j as z,k as J,l as K,m as X,n as Z,g as st,o as k}from"./bi.443.780.js";import{T as ct}from"./bi.178.673.js";import{a as y}from"./bi.179.9.js";import{b as N}from"./bi.405.11.js";const dt=(i,c,u)=>{const e=T({},c);e.field_map.splice(i,0,{}),u(T({},e))},ut=(i,c,u)=>{const e=T({},c);e.field_map.length>1&&e.field_map.splice(i,1),u(T({},e))},D=(i,c,u,e)=>{const r=T({},u);r.field_map[c][i.target.name]=i.target.value,i.target.value==="custom"&&(r.field_map[c].customValue=""),e(T({},r))};function rt({i,formFields:c,field:u,salesforceConf:e,setSalesforceConf:r,actionName:b,selesforceFields:d}){var I;const p=d&&d.filter(o=>o.required===!0)||[],S=d&&d.filter(o=>o.required===!1)||[],h=it(et),{isPro:P}=h;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:u.formField||"",onChange:o=>D(o,i,e,r),children:[t.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),t.jsx("optgroup",{label:a("Form Fields","bit-integrations"),children:c==null?void 0:c.map(o=>t.jsx("option",{value:o.name,children:o.label},`ff-rm-${o.name}`))}),t.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(a("General Smart Codes %s","bit-integrations"),P?"":`(${a("Pro","bit-integrations")})`),children:P&&((I=at)==null?void 0:I.map(o=>t.jsx("option",{value:o.name,children:o.label},`ff-rm-${o.name}`)))})]}),u.formField==="custom"&&t.jsx(ct,{onChange:o=>lt(o,i,e,r),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:u.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:c}),t.jsxs("select",{className:"btcd-paper-inp",disabled:i<p.length,name:"selesforceField",value:i<(p==null?void 0:p.length)?p[i].key||"":u.selesforceField||"",onChange:o=>D(o,i,e,r),children:[t.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),i<p.length?t.jsx("option",{value:p[i].key,children:p[i].label},p[i].key):S.map(({key:o,label:j})=>t.jsx("option",{value:o,children:j},o))]})]}),i>=p.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>dt(i,e,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>ut(i,e,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}const bt=[{label:s("None","bit-integrations"),value:"None"},{label:s("Prospecting","bit-integrations"),value:"Prospecting"},{label:s("Qualification","bit-integrations"),value:"Qualification"},{label:s("Needs Analysis","bit-integrations"),value:"Needs Analysis"},{label:s("Value Proposition","bit-integrations"),value:"Value Proposition"},{label:s("Id. Decision Makers","bit-integrations"),value:"Id. Decision Makers"},{label:s("Perception Analysis","bit-integrations"),value:"Perception Analysis"},{label:s("Proposal/Price Quote","bit-integrations"),value:"Proposal/Price Quote"},{label:s("Negotiation/Review","bit-integrations"),value:"Negotiation/Review"},{label:s("Closed Won","bit-integrations"),value:"Closed Won"},{label:s("Closed Lost","bit-integrations"),value:"Closed Lost"}],mt=[{label:s("None","bit-integrations"),value:"None"},{label:s("Existing Customer - Upgrade","bit-integrations"),value:"ExistingCustomerUpgrade"},{label:s("Existing Customer - Replacement","bit-integrations"),value:"ExistingCustomerReplacement"},{label:s("Existing Customer - Downgrade","bit-integrations"),value:"ExistingCustomerDowngrade"},{label:s("New Customer","bit-integrations"),value:"NewCustomer"}],pt=[{label:s("None","bit-integrations"),value:"None"},{label:s("Web","bit-integrations"),value:"Web"},{label:s("Phone Inquiry","bit-integrations"),value:"PhoneInquiry"},{label:s("Partner Referral","bit-integrations"),value:"PartnerReferral"},{label:s("Purchased List","bit-integrations"),value:"PurchasedList"},{label:s("Other","bit-integrations"),value:"Other"}],ht=[{label:s("Call","bit-integrations"),value:"Call"},{label:s("Email","bit-integrations"),value:"Email"},{label:s("Meeting","bit-integrations"),value:"Meeting"},{label:s("Send a Letter","bit-integrations"),value:"Send a Letter"},{label:s("Other","bit-integrations"),value:"Other"}];s("None","bit-integrations"),s("Low","bit-integrations"),s("Medium","bit-integrations"),s("High","bit-integrations");s("None","bit-integrations"),s("No","bit-integrations"),s("Yes","bit-integrations");s("None","bit-integrations"),s("No","bit-integrations"),s("Yes","bit-integrations");const ot=[{label:s("Call","bit-integrations"),value:"Call"},{label:s("Email","bit-integrations"),value:"Email"},{label:s("SendLetter","bit-integrations"),value:"SendLetter"},{label:s("SendQuote","bit-integrations"),value:"SendQuote"},{label:s("Other","bit-integrations"),value:"Other"}],xt=[{label:s("Low","bit-integrations"),value:"Low"},{label:s("Normal","bit-integrations"),value:"Normal"},{label:s("High","bit-integrations"),value:"High"}],gt=[{label:s("Not Started","bit-integrations"),value:"Not Started"},{label:s("In Progress","bit-integrations"),value:"In Progress"},{label:s("Completed","bit-integrations"),value:"Completed"},{label:s("Waiting on someone else","bit-integrations"),value:"Waiting on someone else"},{label:s("Deferred","bit-integrations"),value:"Deferred"}];function jt({salesforceConf:i,setSalesforceConf:c,formID:u,formFields:e,setSnackbar:r}){var n,x,A,L,w,_,$,q,H,Q;const[b,d]=E.useState(!1),[p,S]=E.useState({show:!1}),h=(l,g)=>{const F=T({},i);l!==""?F.actions[g]=l:delete F.actions[g],c(T({},F))},P=()=>{var l;(l=i==null?void 0:i.default)!=null&&l.campaignLists||V(u,i,c,d),S({show:"campaign"})},I=()=>{var l;(l=i==null?void 0:i.default)!=null&&l.accountLists||M(u,i,c,d),S({show:"account"})},o=()=>{var l;(l=i==null?void 0:i.default)!=null&&l.contactLists||R(u,i,c,d),S({show:"contact"})},j=l=>{l==="caseOrigin"?B(u,i,c,d):l==="caseType"?K(u,i,c,d):l==="caseReason"?X(u,i,c,d):l==="caseStatus"?U(u,i,c,d):l==="casePriority"?G(u,i,c,d):l==="potentialLiability"?z(u,i,c,d):l==="slaViolation"&&J(u,i,c,d),S({show:l})},m=()=>{S({show:!1})};return t.jsxs("div",{className:"pos-rel",children:[t.jsxs("div",{className:"d-flx flx-wrp",children:[i.actionName==="opportunity-create"&&t.jsx("div",{style:{display:"flex",flexDirection:"column"},children:t.jsx(N,{onChange:P,checked:"campaignId"in i.actions,className:"wdt-200 mt-4 mr-2",value:"campaignId",title:a("Campaign","bit-integrations"),subTitle:a("Campaign of salesforce.","bit-integrations")})}),["opportunity-create","event-create","case-create"].includes(i.actionName)&&t.jsx("div",{style:{display:"flex",flexDirection:"column"},children:t.jsx(N,{onChange:I,checked:"accountId"in i.actions,className:"wdt-200 mt-4 mr-2",value:"accountId",title:a("Account","bit-integrations"),subTitle:a("Account of salesforce.","bit-integrations")})}),i.actionName==="opportunity-create"&&t.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[t.jsx(N,{onChange:()=>j("opportunityStage"),checked:"opportunityStageId"in i.actions,className:"wdt-200 mt-4 mr-2",value:"opportunityStageId",title:a("Opportunity Stage","bit-integrations"),subTitle:a("Opportunity stage of salesforce.","bit-integrations")}),t.jsx("small",{style:{marginLeft:30,marginTop:10,color:"red"},children:a("This Required","bit-integrations")})]}),i.actionName==="opportunity-create"&&t.jsx("div",{style:{display:"flex",flexDirection:"column"},children:t.jsx(N,{onChange:()=>j("opportunityType"),checked:"opportunityTypeId"in i.actions,className:"wdt-200 mt-4 mr-2",value:"opportunityTypeId",title:a("Opportunity Type","bit-integrations"),subTitle:a("Opportunity type of salesforce.","bit-integrations")})}),i.actionName==="opportunity-create"&&t.jsx("div",{style:{display:"flex",flexDirection:"column"},children:t.jsx(N,{onChange:()=>j("opportunityLeadSource"),checked:"opportunityLeadSourceId"in i.actions,className:"wdt-200 mt-4 mr-2",value:"opportunityLeadSourceId",title:a("Opportunity Lead Source","bit-integrations"),subTitle:a("Opportunity Lead Source of salesforce.","bit-integrations")})}),["event-create","case-create"].includes(i.actionName)&&t.jsx("div",{style:{display:"flex",flexDirection:"column"},children:t.jsx(N,{onChange:o,checked:"contactId"in i.actions,className:"wdt-200 mt-4 mr-2",value:"contactId",title:a("Contacts","bit-integrations"),subTitle:a("Contacts of salesforce.","bit-integrations")})}),i.actionName==="event-create"&&t.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[t.jsx(N,{onChange:()=>j("eventSubject"),checked:"eventSubjectId"in i.actions,className:"wdt-200 mt-4 mr-2",value:"eventSubjectId",title:a("Event Subject","bit-integrations"),subTitle:a("Event subject of salesforce.","bit-integrations")}),t.jsx("small",{style:{marginLeft:30,marginTop:10,color:"red"},children:a("This Required","bit-integrations")})]}),i.actionName==="case-create"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{display:"flex",flexDirection:"column"},children:t.jsx(N,{onChange:()=>j("caseStatus"),checked:"caseStatusId"in i.actions,className:"wdt-200 mt-4 mr-2",value:"caseStatusId",title:a("Case Status","bit-integrations"),subTitle:a("Case Status of salesforce.","bit-integrations")})}),t.jsx("div",{style:{display:"flex",flexDirection:"column"},children:t.jsx(N,{onChange:()=>j("caseOrigin"),checked:"caseOriginId"in i.actions,className:"wdt-200 mt-4 mr-2",value:"caseOriginId",title:a("Case Origin","bit-integrations"),subTitle:a("Case Origin of salesforce.","bit-integrations")})}),t.jsx("div",{style:{display:"flex",flexDirection:"column"},children:t.jsx(N,{onChange:()=>j("casePriority"),checked:"casePriorityId"in i.actions,className:"wdt-200 mt-4 mr-2",value:"casePriorityId",title:a("Case Priority","bit-integrations"),subTitle:a("Case Priority of salesforce.","bit-integrations")})}),t.jsx("div",{style:{display:"flex",flexDirection:"column"},children:t.jsx(N,{onChange:()=>j("potentialLiability"),checked:"potentialLiabilityId"in i.actions,className:"wdt-200 mt-4 mr-2",value:"potentialLiabilityId",title:a("Potential liability","bit-integrations"),subTitle:a("Potential liability of salesforce.","bit-integrations")})}),t.jsx("div",{style:{display:"flex",flexDirection:"column"},children:t.jsx(N,{onChange:()=>j("slaViolation"),checked:"slaViolationId"in i.actions,className:"wdt-200 mt-4 mr-2",value:"slaViolationId",title:a("SLA Violation","bit-integrations"),subTitle:a("SLA ViolationId of salesforce.","bit-integrations")})}),t.jsx("div",{style:{display:"flex",flexDirection:"column"},children:t.jsx(N,{onChange:()=>j("caseType"),checked:"caseType"in i.actions,className:"wdt-200 mt-4 mr-2",value:"caseType",title:a("Type","bit-integrations"),subTitle:a("Add Case Type","bit-integrations")})}),t.jsx("div",{style:{display:"flex",flexDirection:"column"},children:t.jsx(N,{onChange:()=>j("caseReason"),checked:"caseReason"in i.actions,className:"wdt-200 mt-4 mr-2",value:"caseReason",title:a("Case Reason","bit-integrations"),subTitle:a("Add Case Reason","bit-integrations")})})]}),i.actionName==="account-create"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{display:"flex",flexDirection:"column"},children:t.jsx(N,{onChange:()=>j("accType"),checked:"selectedAccType"in i.actions,className:"wdt-200 mt-4 mr-2",value:"accType",title:a("Type","bit-integrations"),subTitle:a("Add Account Type","bit-integrations")})}),t.jsx("div",{style:{display:"flex",flexDirection:"column"},children:t.jsx(N,{onChange:()=>j("ownership"),checked:"selectedOwnership"in i.actions,className:"wdt-200 mt-4 mr-2",value:"ownership",title:a("Ownership","bit-integrations"),subTitle:a("Add Account Ownership","bit-integrations")})})]})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="campaign",close:m,action:m,title:a("Campaign","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsxs("select",{value:i.actions.campaignId,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"campaignId"),children:[t.jsx("option",{value:"",children:a("Select Campaign","bit-integrations")}),((n=i==null?void 0:i.default)==null?void 0:n.campaignLists)&&i.default.campaignLists.map(l=>t.jsx("option",{value:l.Id,children:l.Name},l.Id))]}),t.jsx("button",{onClick:()=>V(u,i,c,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Campaign"'},type:"button",disabled:b,children:"↻"})]})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="account",close:m,action:m,title:a("Account","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsxs("select",{value:i.actions.accountId,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"accountId"),children:[t.jsx("option",{value:"",children:a("Select Account","bit-integrations")}),((x=i==null?void 0:i.default)==null?void 0:x.accountLists)&&i.default.accountLists.map(l=>t.jsx("option",{value:l.Id,children:l.Name},l.Id))]}),t.jsx("button",{onClick:()=>M(u,i,c,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Account"'},type:"button",disabled:b,children:"↻"})]})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="opportunityStage",close:m,action:m,title:a("Opportunity Stage","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsxs("select",{value:i.actions.opportunityStageId,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"opportunityStageId"),children:[t.jsx("option",{value:"",children:a("Select Opportunity Stage","bit-integrations")}),bt.map(l=>t.jsx("option",{value:l.value,children:l.label},l.value))]})})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="opportunityType",close:m,action:m,title:a("Opportunity Type","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsxs("select",{value:i.actions.opportunityTypeId,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"opportunityTypeId"),children:[t.jsx("option",{value:"",children:a("Select Opportunity Type","bit-integrations")}),mt.map(l=>t.jsx("option",{value:l.value,children:l.label},l.value))]})})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="opportunityLeadSource",close:m,action:m,title:a("Opportunity Lead Source","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsxs("select",{value:i.actions.opportunityLeadSourceId,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"opportunityLeadSourceId"),children:[t.jsx("option",{value:"",children:a("Select Opportunity Lead Source","bit-integrations")}),pt.map(l=>t.jsx("option",{value:l.value,children:l.label},l.value))]})})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="contact",close:m,action:m,title:a("Contact","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsxs("select",{value:i.actions.contactId,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"contactId"),children:[t.jsx("option",{value:"",children:a("Select Contact","bit-integrations")}),((A=i==null?void 0:i.default)==null?void 0:A.contactLists)&&i.default.contactLists.map(l=>t.jsx("option",{value:l.Id,children:l.Name},l.Id))]}),t.jsx("button",{onClick:()=>R(u,i,c,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Contact"'},type:"button",disabled:b,children:"↻"})]})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="eventSubject",close:m,action:m,title:a("Event Subject","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsxs("select",{value:i.actions.eventSubjectId,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"eventSubjectId"),children:[t.jsx("option",{value:"",children:a("Select event subject","bit-integrations")}),ht.map(l=>t.jsx("option",{value:l.value,children:l.label},l.value))]})})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="caseStatus",close:m,action:m,title:a("Case Status","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsxs("select",{value:i.actions.caseStatusId,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"caseStatusId"),children:[t.jsx("option",{value:"",children:a("Select Case status","bit-integrations")}),(L=i==null?void 0:i.caseStatus)==null?void 0:L.map((l,g)=>t.jsx("option",{value:l.value,children:l.label},g))]}),t.jsx("button",{onClick:()=>U(u,i,c,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Case Status"'},type:"button",disabled:b,children:"↻"})]})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="caseOrigin",close:m,action:m,title:a("Case Origin","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsxs("select",{value:i.actions.caseOriginId,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"caseOriginId"),children:[t.jsx("option",{value:"",children:a("Select Case Origin","bit-integrations")}),(w=i==null?void 0:i.caseOrigins)==null?void 0:w.map((l,g)=>t.jsx("option",{value:l.value,children:l.label},g))]}),t.jsx("button",{onClick:()=>B(u,i,c,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Case Origin"'},type:"button",disabled:b,children:"↻"})]})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="casePriority",close:m,action:m,title:a("Case Priority","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsxs("select",{value:i.actions.casePriorityId,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"casePriorityId"),children:[t.jsx("option",{value:"",children:a("Select Case Priority","bit-integrations")}),(_=i==null?void 0:i.casePriority)==null?void 0:_.map((l,g)=>t.jsx("option",{value:l.value,children:l.label},g))]}),t.jsx("button",{onClick:()=>G(u,i,c,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Case Priority"'},type:"button",disabled:b,children:"↻"})]})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="potentialLiability",close:m,action:m,title:a("Potential liability","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsxs("select",{value:i.actions.potentialLiabilityId,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"potentialLiabilityId"),children:[t.jsx("option",{value:"",children:a("Select Case potential liability","bit-integrations")}),($=i==null?void 0:i.casePotentialLiability)==null?void 0:$.map((l,g)=>t.jsx("option",{value:l.value,children:l.label},g))]}),t.jsx("button",{onClick:()=>z(u,i,c,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh potential liability"'},type:"button",disabled:b,children:"↻"})]})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="slaViolation",close:m,action:m,title:a("SLA Violation","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsxs("select",{value:i.actions.slaViolationId,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"slaViolationId"),children:[t.jsx("option",{value:"",children:a("Select Case SLA violation","bit-integrations")}),(q=i==null?void 0:i.caseSLAViolation)==null?void 0:q.map((l,g)=>t.jsx("option",{value:l.value,children:l.label},g))]}),t.jsx("button",{onClick:()=>J(u,i,c,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh SLA Violation"'},type:"button",disabled:b,children:"↻"})]})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="accType",close:m,action:m,title:a("Add Account Type","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsxs("select",{value:i.actions.selectedAccType,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"selectedAccType"),children:[t.jsx("option",{value:"",children:a("Select type","bit-integrations")}),vt.map((l,g)=>t.jsx("option",{value:l,children:l},g))]})})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="ownership",close:m,action:m,title:a("Add Account Ownership","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsxs("select",{value:i.actions.selectedOwnership,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"selectedOwnership"),children:[t.jsx("option",{value:"",children:a("Select Ownership","bit-integrations")}),["Public","Private","Subsidiary","Other"].map((l,g)=>t.jsx("option",{value:l,children:l},g))]})})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="caseType",close:m,action:m,title:a("Add Case Type","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsxs("select",{value:i.actions.caseType,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"caseType"),children:[t.jsx("option",{value:"",children:a("Select type","bit-integrations")}),(H=i==null?void 0:i.caseTypes)==null?void 0:H.map((l,g)=>t.jsx("option",{value:l.value,children:l.label},g))]}),t.jsx("button",{onClick:()=>K(u,i,c,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Case Type"'},type:"button",disabled:b,children:"↻"})]})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="caseReason",close:m,action:m,title:a("Add Case Reason","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),b?t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsxs("select",{value:i.actions.caseReason,className:"btcd-paper-inp",onChange:l=>h(l.target.value,"caseReason"),children:[t.jsx("option",{value:"",children:a("Select Reason","bit-integrations")}),(Q=i==null?void 0:i.caseReasons)==null?void 0:Q.map((l,g)=>t.jsx("option",{value:l.value,children:l.label},g))]}),t.jsx("button",{onClick:()=>X(u,i,c,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Case Reason"'},type:"button",disabled:b,children:"↻"})]})]})]})}const vt=["Prospect","Customer - Direct","Customer - Channel","Channel Partner / Reseller","Installation Partner","Technology Partner","Other"];function It({formID:i,formFields:c,handleInput:u,salesforceConf:e,setSalesforceConf:r,isLoading:b,setIsLoading:d,setSnackbar:p}){var P,I,o,j,m;E.useEffect(()=>{(e==null?void 0:e.actionName)==="add-campaign-member"&&(V(i,e,r,d),Z(i,e,r,d),R(i,e,r,d),M(i,e,r,d)),(e==null?void 0:e.actionName)==="task-create"&&(R(i,e,r,d),M(i,e,r,d))},[e==null?void 0:e.actionName]);const S=n=>{const x=T({},e),{name:A,value:L}=n.target;if(n.target.value!==""){x[A]=L;const w=L;w==="contact-create"?k(i,"contact-create",x,r,d):w==="lead-create"?k(i,"lead-create",x,r,d):w==="account-create"?k(i,"account-create",x,r,d):w==="campaign-create"?k(i,"campaign-create",x,r,d):w==="add-campaign-member"?k(i,"add-campaign-create",x,r,d):w==="opportunity-create"?k(i,"opportunity-create",x,r,d):w==="event-create"?k(i,"event-create",x,r,d):w==="case-create"?k(i,"case-create",x,r,d):k(i,w,x,r,d)}else delete x[A];r(x)},h=(n,x)=>{const A=T({},e);A[x]=n,r(T({},A))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Action:","bit-integrations")}),t.jsxs("select",{onChange:S,name:"actionName",value:e==null?void 0:e.actionName,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:a("Select Action","bit-integrations")}),(P=e==null?void 0:e.selesforceActionModules)==null?void 0:P.map(({label:n,value:x})=>t.jsx("option",{value:x,children:n},n))]}),t.jsx("button",{onClick:()=>st(e,r,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Custom Action","bit-integrations")}'`},type:"button",disabled:b,children:"↻"})]}),t.jsx("br",{}),t.jsx("br",{}),["add-campaign-member"].includes(e.actionName)&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Campaign:","bit-integrations")}),t.jsx(O,{className:"w-5",defaultValue:e==null?void 0:e.campaignId,options:((I=e==null?void 0:e.default)==null?void 0:I.campaignLists)&&e.default.campaignLists.map(n=>({label:n.Name,value:n.Id})),onChange:n=>h(n,"campaignId"),singleSelect:!0}),t.jsx("button",{onClick:()=>V(i,e,r,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Fetch Campaign lists","bit-integrations")}'`},type:"button",disabled:b,children:"↻"})]}),t.jsx("small",{style:{marginLeft:0,marginTop:10,color:"red"},children:a("This is Required","bit-integrations")})]}),["add-campaign-member"].includes(e.actionName)&&t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Lead:","bit-integrations")}),t.jsx(O,{className:"w-5",defaultValue:e==null?void 0:e.leadId,options:((o=e==null?void 0:e.default)==null?void 0:o.leadLists)&&e.default.leadLists.map(n=>({label:n.Name,value:n.Id})),onChange:n=>h(n,"leadId"),singleSelect:!0}),t.jsx("button",{onClick:()=>Z(i,e,r,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Fetch Lead lists","bit-integrations")}'`},type:"button",disabled:b,children:"↻"})]}),["add-campaign-member","task-create"].includes(e.actionName)&&t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Contact:","bit-integrations")}),t.jsx(O,{className:"w-5",defaultValue:e==null?void 0:e.contactId,options:((j=e==null?void 0:e.default)==null?void 0:j.contactLists)&&e.default.contactLists.map(n=>({label:n.Name,value:n.Id})),onChange:n=>h(n,"contactId"),singleSelect:!0}),t.jsx("button",{onClick:()=>R(i,e,r,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Fetch Contact lists","bit-integrations")}'`},type:"button",disabled:b,children:"↻"})]}),["add-campaign-member","task-create"].includes(e.actionName)&&t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Account:","bit-integrations")}),t.jsx(O,{className:"w-5",defaultValue:e==null?void 0:e.accountId,options:((m=e==null?void 0:e.default)==null?void 0:m.accountLists)&&e.default.accountLists.map(n=>({label:n.Name,value:n.Id})),onChange:n=>h(n,"accountId"),singleSelect:!0}),t.jsx("button",{onClick:()=>M(i,e,r,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Fetch Account lists","bit-integrations")}'`},type:"button",disabled:b,children:"↻"})]}),["add-campaign-member"].includes(e.actionName)&&t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Status:","bit-integrations")}),t.jsx(O,{className:"w-5",defaultValue:e==null?void 0:e.statusId,options:(e==null?void 0:e.campaignMemberStatus)&&e.campaignMemberStatus.map(n=>({label:n.label,value:n.value})),onChange:n=>h(n,"statusId"),singleSelect:!0})]}),["task-create"].includes(e.actionName)&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Subject:","bit-integrations")}),t.jsx(O,{className:"w-5",defaultValue:e==null?void 0:e.subjectId,options:ot.map(n=>({label:n.label,value:n.value})),onChange:n=>h(n,"subjectId"),singleSelect:!0})]}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Priority:","bit-integrations")}),t.jsx(O,{className:"w-5",defaultValue:e==null?void 0:e.priorityId,options:xt.map(n=>({label:n.label,value:n.value})),onChange:n=>h(n,"priorityId"),singleSelect:!0})]}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Status:","bit-integrations")}),t.jsx(O,{className:"w-5",defaultValue:e==null?void 0:e.statusId,options:gt.map(n=>({label:n.label,value:n.value})),onChange:n=>h(n,"statusId"),singleSelect:!0})]})]}),b&&t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(e==null?void 0:e.actionName)&&!b&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"mt-5",children:[t.jsx("b",{className:"wdt-100",children:a("Field Map","bit-integrations")}),t.jsx("button",{onClick:()=>k(i,e==null?void 0:e.actionName,e,r,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:b,children:"↻"})]}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:a("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:a("Salesforce Fields","bit-integrations")})})]}),e==null?void 0:e.field_map.map((n,x)=>t.jsx(rt,{i:x,field:n,salesforceConf:e,formFields:c,setSalesforceConf:r,setSnackbar:p,actionName:e==null?void 0:e.actionName,selesforceFields:e==null?void 0:e.selesforceFields},`rp-m-${x+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>nt(e.field_map.length,e,r,!1),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),t.jsx("br",{}),t.jsx("br",{}),["opportunity-create","event-create","case-create","account-create"].includes(e==null?void 0:e.actionName)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:a("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(jt,{salesforceConf:e,setSalesforceConf:r,formFields:c})]})]})}export{It as S};
