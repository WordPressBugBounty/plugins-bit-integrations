var $=Object.defineProperty;var V=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var z=(e,c,i)=>c in e?$(e,c,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[c]=i,x=(e,c)=>{for(var i in c||(c={}))B.call(c,i)&&z(e,i,c[i]);if(V)for(var i of V(c))D.call(c,i)&&z(e,i,c[i]);return e};import{r as K,j as t,f as Q,L as U}from"./main-288.js";import{u as S,z as W}from"./bi.197.434.js";import{_ as s,e as G}from"./bi.4.0.js";import{a as w}from"./bi.627.9.js";import{b as T}from"./bi.147.11.js";import{g as h}from"./bi.337.879.js";import{M as J,a as X}from"./bi.826.3.js";const E=(e,c,i)=>{const a=x({},c);a.field_map.splice(e,0,{}),i(x({},a))},Y=(e,c,i)=>{const a=x({},c);a.field_map.length>1&&a.field_map.splice(e,1),i(x({},a))},P=(e,c,i,a)=>{const d=x({},i);d.field_map[c][e.target.name]=e.target.value,e.target.value==="custom"&&(d.field_map[c].customValue=""),e.target.value==="customFieldKey"&&(d.field_map[c].customFieldKey=""),a(x({},d))},Z=(e,c,i,a,d)=>{const n=x({},i);n.field_map[c][d]=e.target.value,a(x({},n))};function f({oneHashCRMConf:e,setOneHashCRMConf:c,loading:i,setLoading:a}){var v,r,u,N,p,y,L;const[d,n]=K.useState({show:!1,action:()=>{}}),g=(l,o)=>{var k,A,F,q,O,_,I;const m=x({},e);o==="organizationLead"?(k=l.target)!=null&&k.checked?m.actions.organizationLead=!0:(n({show:!1}),delete m.actions.organizationLead):o==="leadSource"?(A=l.target)!=null&&A.checked?(m.actions.leadSource=!0,m.leadSources=["Advertisement","Campaign","Cold Calling","Customer's Vendor","Exhibition","Existing Cutomer","Mass Mailing","Reference","Supplier Reference","Walk In"]):delete m.actions.leadSource:o==="LeadAddressType"?(F=l.target)!=null&&F.checked?(m.actions.LeadAddressType=!0,m.LeadAddressTypes=["Billing","Shipping","Office","Personal","Plant","Postal","Shop","SubsiDiary","Warehouse","Current","Permanent","Other"]):delete m.actions.LeadAddressType:o==="LeadType"?(q=l.target)!=null&&q.checked?(m.actions.LeadType=!0,m.LeadTypes=["Client","Channel Partner","Consultant"]):delete m.actions.LeadType:o==="RequestType"?(O=l.target)!=null&&O.checked?(m.actions.RequestType=!0,m.RequestTypes=["Product Enquiry","Request For Information","Suggestions","Other"]):delete m.actions.RequestType:o==="MarketSegment"?(_=l.target)!=null&&_.checked?(m.actions.MarketSegment=!0,m.MarketSegments=["Lower Income","Middle Income","Upper Income"]):delete m.actions.MarketSegment:o==="ContactStatus"&&((I=l.target)!=null&&I.checked?(m.actions.ContactStatus=!0,m.ContactStatus=["Passive","Open","Replied"]):delete m.actions.ContactStatus),n({show:o}),c(x({},m))},b=()=>{n({show:!1})},j=(l,o)=>{const m=x({},e);m[o]=l,c(x({},m))};return t.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[e.actionName==="lead"&&t.jsx(T,{checked:((v=e.actions)==null?void 0:v.organizationLead)||!1,onChange:l=>g(l,"organizationLead"),className:"wdt-200 mt-4 mr-2",value:"organizationLead",title:s("Lead is an Organization","bit-integrations"),subTitle:s("Lead is an Organization","bit-integrations")}),e.actionName==="lead"&&t.jsx(T,{checked:(e==null?void 0:e.selectedLeadSource)||!1,onChange:l=>g(l,"leadSource"),className:"wdt-200 mt-4 mr-2",value:"leadSource",title:s("Add Source","bit - integrations"),subTitle:s("Add Source")}),e.actionName==="lead"&&t.jsx(T,{checked:(e==null?void 0:e.selectedLeadAddressType)||!1,onChange:l=>g(l,"LeadAddressType"),className:"wdt-200 mt-4 mr-2",value:"LeadAddressType",title:s("Add Address Type","bit - integrations"),subTitle:s("Add Address Type")}),e.actionName==="lead"&&t.jsx(T,{checked:(e==null?void 0:e.selectedLeadType)||!1,onChange:l=>g(l,"LeadType"),className:"wdt-200 mt-4 mr-2",value:"LeadType",title:s("Add Lead Type","bit - integrations"),subTitle:s("Add Lead Type")}),e.actionName==="lead"&&t.jsx(T,{checked:(e==null?void 0:e.selectedRequestType)||!1,onChange:l=>g(l,"RequestType"),className:"wdt-200 mt-4 mr-2",value:"RequestType",title:s("Add Request Type","bit - integrations"),subTitle:s("Add Request Type")}),e.actionName==="lead"&&t.jsx(T,{checked:(e==null?void 0:e.selectedMarketSegment)||!1,onChange:l=>g(l,"MarketSegment"),className:"wdt-200 mt-4 mr-2",value:"MarketSegment",title:s("Add Market Segment","bit - integrations"),subTitle:s("Add Market Segment")}),e.actionName==="contact"&&t.jsx(T,{checked:(e==null?void 0:e.selectedContactStatus)||!1,onChange:l=>g(l,"ContactStatus"),className:"wdt-200 mt-4 mr-2",value:"ContactStatus",title:s("Add Status","bit - integrations"),subTitle:s("Add Status")}),t.jsxs(w,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:d.show==="leadSource",close:b,action:b,title:s("Add Source","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:s("Select Source","bit-integrations")}),t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(S,{options:(r=e==null?void 0:e.leadSources)==null?void 0:r.map(l=>({label:l,value:l})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedLeadSource,onChange:l=>j(l,"selectedLeadSource"),singleSelect:!0,closeOnSelect:!0})})]}),t.jsxs(w,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:d.show==="LeadAddressType",close:b,action:b,title:s("Add Address Type","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:s("Select Address Type","bit-integrations")}),t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(S,{options:(u=e==null?void 0:e.LeadAddressTypes)==null?void 0:u.map(l=>({label:l,value:l})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedLeadAddressType,onChange:l=>j(l,"selectedLeadAddressType"),singleSelect:!0,closeOnSelect:!0})})]}),t.jsxs(w,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:d.show==="LeadType",close:b,action:b,title:s("Add Lead Type","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:s("Select Lead Type","bit-integrations")}),t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(S,{options:(N=e==null?void 0:e.LeadTypes)==null?void 0:N.map(l=>({label:l,value:l})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedLeadType,onChange:l=>j(l,"selectedLeadType"),singleSelect:!0,closeOnSelect:!0})})]}),t.jsxs(w,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:d.show==="RequestType",close:b,action:b,title:s("Add Request Type","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:s("Select Request Type","bit-integrations")}),t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(S,{options:(p=e==null?void 0:e.RequestTypes)==null?void 0:p.map(l=>({label:l,value:l})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedRequestType,onChange:l=>j(l,"selectedRequestType"),singleSelect:!0,closeOnSelect:!0})})]}),t.jsxs(w,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:d.show==="MarketSegment",close:b,action:b,title:s("Add Market Segment","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:s("Select Market Segment","bit-integrations")}),t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(S,{options:(y=e==null?void 0:e.MarketSegments)==null?void 0:y.map(l=>({label:l,value:l})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedMarketSegment,onChange:l=>j(l,"selectedMarketSegment"),singleSelect:!0,closeOnSelect:!0})})]}),t.jsxs(w,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:d.show==="ContactStatus",close:b,action:b,title:s("Add Industry","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:s("Select Industry","bit-integrations")}),t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(S,{options:(L=e==null?void 0:e.ContactStatus)==null?void 0:L.map(l=>({label:l,value:l})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedContactStatus,onChange:l=>j(l,"selectedContactStatus"),singleSelect:!0,closeOnSelect:!0})})]})]})}function M({field:e,index:c,conf:i,setConf:a,fieldValue:d,fieldLabel:n,className:g}){return t.jsx(J,{onChange:b=>Z(b,c,i,a,d),label:s(n,"bit-integrations"),className:g,type:"text",value:e[d],placeholder:s(n,"bit-integrations")})}function R({i:e,formFields:c,field:i,oneHashCRMConf:a,setOneHashCRMConf:d}){var v;const n=(a==null?void 0:a.oneHashCRMFields)&&(a==null?void 0:a.oneHashCRMFields.filter(r=>r.required===!0))||[],g=(a==null?void 0:a.oneHashCRMFields)&&(a==null?void 0:a.oneHashCRMFields.filter(r=>r.required===!1))||[],b=Q(G),{isPro:j}=b;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:r=>P(r,e,a,d),children:[t.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),t.jsx("optgroup",{label:s("Form Fields","bit-integrations"),children:c==null?void 0:c.map(r=>t.jsx("option",{value:r.name,children:r.label},`ff-rm-${r.name}`))}),t.jsx("option",{value:"custom",children:s("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(s("General Smart Codes %s","bit-integrations"),j?"":`(${s("Pro","bit-integrations")})`),children:j&&((v=X)==null?void 0:v.map(r=>t.jsx("option",{value:r.name,children:r.label},`ff-rm-${r.name}`)))})]}),i.formField==="custom"&&t.jsx(M,{field:i,index:e,conf:a,setConf:d,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<n.length,name:"oneHashCRMFormField",value:e<n.length?n[e].key||"":i.oneHashCRMFormField||"",onChange:r=>P(r,e,a,d),children:[t.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),e<n.length?t.jsx("option",{value:n[e].key,children:n[e].label},n[e].key):g.map(({key:r,label:u})=>t.jsx("option",{value:r,children:u},r))]})]}),e>=n.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>E(e,a,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>Y(e,a,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function ce({formFields:e,handleInput:c,oneHashCRMConf:i,setOneHashCRMConf:a,loading:d,setLoading:n,isLoading:g,setIsLoading:b,setSnackbar:j}){const v=u=>{a(N=>W(N,p=>{const{name:y}=u.target;u.target.value!==""?(p.actionName=u.target.value,p.actionName==="customer"?p.oneHashCRMFields=p.customerFields:p.actionName==="contact"?p.oneHashCRMFields=p.contactFields:p.actionName==="lead"&&(p.oneHashCRMFields=p.leadFields,p.leadStatus=["Lead","Open","Replied","Opportunity","Quotation","Lost Quotation","Interested","Converted","Do Not Contact"]),p.field_map=h(p)):delete p[y]}))},r=(u,N)=>{const p=x({},i);p[N]=u,a(x({},p))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:s("Select Action:","bit-integrations")}),t.jsxs("select",{onChange:v,name:"actionName",value:i.actionName,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:s("Select an action","bit-integrations")}),t.jsx("option",{value:"lead","data-action_name":"lead",children:s("Create Lead","bit-integrations")}),t.jsx("option",{value:"customer","data-action_name":"customer",children:s("Create Customer","bit-integrations")}),t.jsx("option",{value:"contact","data-action_name":"contact",children:s("Create Contact","bit-integrations")})]}),t.jsx("br",{}),i.actionName==="lead"&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Lead Status:","bit-integrations")}),t.jsx(S,{options:i==null?void 0:i.leadStatus.map(u=>({label:u,value:u})),className:"msl-wrp-options dropdown-custom-width",defaultValue:i==null?void 0:i.selectedLeadStatus,onChange:u=>r(u,"selectedLeadStatus"),disabled:g,singleSelect:!0,closeOnSelect:!0})]})]}),i.actionName==="customer"&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Customer Type:","bit-integrations")}),t.jsx(S,{options:["Company","Individual"].map(u=>({label:u,value:u})),className:"msl-wrp-options dropdown-custom-width",defaultValue:i==null?void 0:i.selectedCustomerType,onChange:u=>r(u,"selectedCustomerType"),disabled:g,singleSelect:!0,closeOnSelect:!0})]})]}),g&&t.jsx(U,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),i.actionName&&!g&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsx("div",{className:"mt-5",children:t.jsx("b",{className:"wdt-100",children:s("Field Map","bit-integrations")})}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("OneHashCRM Fields","bit-integrations")})})]}),i==null?void 0:i.field_map.map((u,N)=>t.jsx(R,{i:N,field:u,oneHashCRMConf:i,formFields:e,setOneHashCRMConf:a,setSnackbar:j},`rp-m-${N+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>E(i.field_map.length,i,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:s("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(f,{oneHashCRMConf:i,setOneHashCRMConf:a,formFields:e,loading:d,setLoading:n})]})]})}export{ce as O};