var y=Object.defineProperty,b=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var h=(t,s,e)=>s in t?y(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,i=(t,s)=>{for(var e in s||(s={}))d.call(s,e)&&h(t,e,s[e]);if(_)for(var e of _(s))p.call(s,e)&&h(t,e,s[e]);return t},c=(t,s)=>b(t,C(s));import{_ as l,c as f,d as u}from"./bi.422.0.js";const g=(t,s,e)=>{const n=i({},s),{name:a}=t.target;t.target.value!==""?n[a]=t.target.value:delete n[a],e(i({},n))},R=t=>{let s=[];t.actionName==="organization"?s=t==null?void 0:t.organizationFields:t.actionName==="contact"?s=t==null?void 0:t.contactFields:t.actionName==="lead"?s=t==null?void 0:t.leadFields:t.actionName==="deal"&&(s=t==null?void 0:t.dealFields);const e=s==null?void 0:s.filter(n=>n.required===!0);return e.length>0?e.map(n=>({formField:"",zendeskFormField:n.key})):[{formField:"",zendeskFormField:""}]},P=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.zendeskFormField||e.formField==="custom"&&!e.customValue||e.zendeskFormField==="customFieldKey"&&!e.customFieldKey):[]).length>0),k=(t,s,e,n,a,r)=>{if(!t.api_key){e({api_key:t.api_key?"":l("API Key can't be empty","bit-integrations")});return}e({}),r(c(i({},a),{auth:!0}));const m={api_key:t.api_key};f(m,"zendesk_authentication").then(o=>{if(o&&o.success){n(!0),r(c(i({},a),{auth:!1})),u.success(l("Authorized Successfully","bit-integrations"));return}r(c(i({},a),{auth:!1})),u.error(l("Authorized failed, Please enter valid API key","bit-integrations"))})},A=(t,s,e)=>{e(c(i({},e),{customFields:!0}));const n={api_key:t.api_key,action:t.actionName};f(n,"zendesk_fetch_custom_fields").then(a=>{if(a&&a.success){const r=i({},t);a.data&&(r.customFields=a.data),s(r),e(c(i({},e),{customFields:!1})),a.data?u.success(l("Custom fields also fetched successfully","bit-integrations")):u.error(l("No custom fields found","bit-integrations"));return}e(c(i({},e),{customFields:!1})),u.error(l("Custom fields fetching failed","bit-integrations"))})},N=(t,s,e)=>{e(c(i({},e),{leads:!0}));const n={api_key:t.api_key};f(n,"zendesk_fetch_all_leads").then(a=>{if(a&&a.success){const r=i({},t);a.data&&(r.leads=a.data),s(r),e(c(i({},e),{leads:!1})),u.success(l("Leads fetched successfully","bit-integrations"));return}e(c(i({},e),{leads:!1})),u.error(l("Leads fetching failed","bit-integrations"))})},S=(t,s,e)=>{e(c(i({},e),{parentOrganizations:!0}));const n={api_key:t.api_key};f(n,"zendesk_fetch_all_parentOrganizations").then(a=>{if(a&&a.success){const r=i({},t);a.data&&(r.parentOrganizations=a.data),s(r),e(c(i({},e),{parentOrganizations:!1})),u.success(l("ParentOrganizations fetched successfully","bit-integrations"));return}e(c(i({},e),{parentOrganizations:!1})),u.error(l("ParentOrganizations fetching failed","bit-integrations"))})},q=(t,s,e)=>{e(c(i({},e),{teams:!0}));const n={api_key:t.api_key};f(n,"zendesk_fetch_all_teams").then(a=>{if(a&&a.success){const r=i({},t);a.data&&(r.teams=a.data),s(r),e(c(i({},e),{teams:!1})),u.success(l("Teams fetched successfully","bit-integrations"));return}e(c(i({},e),{teams:!1})),u.error(l("Teams fetching failed","bit-integrations"))})},w=(t,s,e)=>{e(c(i({},e),{currencies:!0}));const n={api_key:t.api_key};f(n,"zendesk_fetch_all_currencies").then(a=>{if(a&&a.success){const r=i({},t);a.data&&(r.currencies=a.data),s(r),e(c(i({},e),{currencies:!1})),u.success(l("Currencies fetched successfully","bit-integrations"));return}e(c(i({},e),{currencies:!1})),u.error(l("Currencies fetching failed","bit-integrations"))})},O=(t,s,e)=>{e(c(i({},e),{stages:!0}));const n={api_key:t.api_key,action_name:t.actionName};f(n,"zendesk_fetch_all_stages").then(a=>{if(a&&a.success){const r=i({},t);a.data&&(r.stages=a.data),s(r),e(c(i({},e),{stages:!1})),u.success(l("Stages fetched successfully","bit-integrations"));return}e(c(i({},e),{stages:!1})),u.error(l("Stages fetching failed","bit-integrations"))})},v=(t,s,e)=>{e(c(i({},e),{CRMCompanies:!0}));const n={api_key:t.api_key,action_name:t.actionName};f(n,"zendesk_fetch_all_CRMCompanies").then(a=>{if(a&&a.success){const r=i({},t);a.data&&(r.CRMCompanies=a.data),s(r),e(c(i({},e),{CRMCompanies:!1})),t.actionName==="lead"?u.success(l("Companies fetched successfully","bit-integrations")):u.success(l("Contacts fetched successfully","bit-integrations"));return}e(c(i({},e),{CRMCompanies:!1})),t.actionName==="lead"?u.error(l("Companies fetching failed","bit-integrations")):u.error(l("Contacts fetching failed","bit-integrations"))})},I=(t,s,e)=>{e(c(i({},e),{CRMContacts:!0}));const n={api_key:t.api_key,action_name:t.actionName};f(n,"zendesk_fetch_all_CRMContacts").then(a=>{if(a&&a.success){const r=i({},t);a.data&&(r.CRMContacts=a.data),s(r),e(c(i({},e),{CRMContacts:!1})),u.success(l("Contacts fetched successfully","bit-integrations"));return}e(c(i({},e),{CRMContacts:!1})),u.error(l("Contacts fetching failed","bit-integrations"))})},K=(t,s,e)=>{e(c(i({},e),{CRMSources:!0}));const n={api_key:t.api_key,action_name:t.actionName};f(n,"zendesk_fetch_all_CRMSources").then(a=>{if(a&&a.success){const r=i({},t);a.data&&(r.CRMSources=a.data),s(r),e(c(i({},e),{CRMSources:!1})),u.success(l("Sources fetched successfully","bit-integrations"));return}e(c(i({},e),{CRMSources:!1})),u.error(l("Sources fetching failed","bit-integrations"))})};export{S as a,q as b,P as c,w as d,O as e,R as f,N as g,g as h,v as i,I as j,K as k,A as l,k as z};
