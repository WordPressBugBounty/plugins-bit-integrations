var p=Object.defineProperty,b=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(t,i,e)=>i in t?p(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,a=(t,i)=>{for(var e in i||(i={}))k.call(i,e)&&h(t,e,i[e]);if(f)for(var e of f(i))F.call(i,e)&&h(t,e,i[e]);return t},r=(t,i)=>b(t,d(i));import{_ as n,c as _,d as u}from"./bi.223.0.js";const w=(t,i,e)=>{const c=a({},i),{name:s}=t.target;t.target.value!==""?c[s]=t.target.value:delete c[s],e(a({},c))},m=t=>{let i=[];t.actionName==="organisation"?i=t==null?void 0:t.organisationFields:t.actionName==="person"?i=t==null?void 0:t.personFields:t.actionName==="opportunity"?i=t==null?void 0:t.opportunityFields:t.actionName==="project"&&(i=t==null?void 0:t.projectFields);const e=i==null?void 0:i.filter(c=>c.required===!0);return e.length>0?e.map(c=>({formField:"",capsulecrmFormField:c.key})):[{formField:"",capsulecrmFormField:""}]},A=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.capsulecrmFormField||e.formField==="custom"&&!e.customValue||e.capsulecrmFormField==="customFieldKey"&&!e.customFieldKey):[]).length>0),R=(t,i,e,c,s,l)=>{if(!t.api_url||!t.api_key){e({api_url:t.api_url?"":n("API URL can't be empty","bit-integrations"),api_key:t.api_key?"":n("API Key can't be empty","bit-integrations")});return}e({}),l(r(a({},s),{auth:!0}));const y={api_key:t.api_key,api_url:t.api_url};_(y,"capsulecrm_authentication").then(o=>{if(o&&o.success){c(!0),l(r(a({},s),{auth:!1})),u.success(n("Authorized Successfully","bit-integrations"));return}l(r(a({},s),{auth:!1})),u.error(n("Authorized failed, Please enter valid api_url name & API key","bit-integrations"))})},q=(t,i,e)=>{e(r(a({},e),{customFields:!0}));const c={api_key:t.api_key,api_url:t.api_url,action:t.actionName};_(c,"capsulecrm_fetch_custom_fields").then(s=>{if(s&&s.success){const l=a({},t);s.data&&(l.customFields=s.data),i(l),e(r(a({},e),{customFields:!1})),s.data?u.success(n("Custom fields also fetched successfully","bit-integrations")):u.error(n("No custom fields found","bit-integrations"));return}e(r(a({},e),{customFields:!1})),u.error(n("Custom fields fetching failed","bit-integrations"))})},N=(t,i,e)=>{e(r(a({},e),{opportunities:!0}));const c={api_key:t.api_key,api_url:t.api_url};_(c,"capsulecrm_fetch_all_opportunities").then(s=>{if(s&&s.success){const l=a({},t);s.data&&(l.opportunities=s.data),i(l),e(r(a({},e),{opportunities:!1})),u.success(n("Opportunities fetched successfully","bit-integrations"));return}e(r(a({},e),{opportunities:!1})),u.error(n("Opportunities fetching failed","bit-integrations"))})},O=(t,i,e)=>{e(r(a({},e),{owners:!0}));const c={api_key:t.api_key,api_url:t.api_url};_(c,"capsulecrm_fetch_all_owners").then(s=>{if(s&&s.success){const l=a({},t);s.data&&(l.owners=s.data),i(l),e(r(a({},e),{owners:!1})),u.success(n("Owners fetched successfully","bit-integrations"));return}e(r(a({},e),{owners:!1})),u.error(n("Owners fetching failed","bit-integrations"))})},I=(t,i,e)=>{e(r(a({},e),{teams:!0}));const c={api_key:t.api_key,api_url:t.api_url};_(c,"capsulecrm_fetch_all_teams").then(s=>{if(s&&s.success){const l=a({},t);s.data&&(l.teams=s.data),i(l),e(r(a({},e),{teams:!1})),u.success(n("Teams fetched successfully","bit-integrations"));return}e(r(a({},e),{teams:!1})),u.error(n("Teams fetching failed","bit-integrations"))})},g=(t,i,e)=>{e(r(a({},e),{currencies:!0}));const c={api_key:t.api_key,api_url:t.api_url,action_name:t.actionName};_(c,"capsulecrm_fetch_all_currencies").then(s=>{if(s&&s.success){const l=a({},t);s.data&&(l.currencies=s.data),i(l),e(r(a({},e),{currencies:!1})),u.success(n("Currencies fetched successfully","bit-integrations"));return}e(r(a({},e),{currencies:!1})),u.error(n("Currencies fetching failed","bit-integrations"))})},j=(t,i,e)=>{e(r(a({},e),{CRMParties:!0}));const c={api_key:t.api_key,api_url:t.api_url,action_name:t.actionName};_(c,"capsulecrm_fetch_all_CRMParties").then(s=>{if(s&&s.success){const l=a({},t);s.data&&(l.CRMParties=s.data),i(l),e(r(a({},e),{CRMParties:!1})),u.success(n("Parties fetched successfully","bit-integrations"));return}e(r(a({},e),{CRMParties:!1})),u.error(n("Parties fetching failed","bit-integrations"))})},v=(t,i,e)=>{e(r(a({},e),{CRMMilestones:!0}));const c={api_key:t.api_key,api_url:t.api_url};_(c,"capsulecrm_fetch_all_CRMMilestones").then(s=>{if(s&&s.success){const l=a({},t);s.data&&(l.CRMMilestones=s.data),i(l),e(r(a({},e),{CRMMilestones:!1})),u.success(n("Milestones fetched successfully","bit-integrations"));return}e(r(a({},e),{CRMMilestones:!1})),u.error(n("Milestones fetching failed","bit-integrations"))})};export{O as a,I as b,A as c,g as d,m as e,j as f,N as g,w as h,v as i,q as j,R as k};
